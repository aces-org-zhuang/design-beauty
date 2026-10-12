// 按 Feature 拆分独立 LikeC4 工程，每个 Feature 一个可独立 serve 的视图集。
//
// 设计：
// - 主 src/ 是唯一事实源（模型 + 全部视图），不要手工编辑 features/ 下的产物。
// - 每个 features/<slug>/src/ 复用全部模型文件（模型是共享事实，多余元素无害），
//   但只保留该 Feature 的视图——侧边栏即「该 Feature 配套的完整体系各层图」。
// - 归属判定按视图 id 中的链编号段（001F / 001NF / 002F）：
//     * pano- 除 pano-src-<链>（模块目录全览，单 Feature 范围）外都是跨 Feature 聚合，
//       只留在主工程
//     * proc-*（进程与线程）是收敛的运行现实，全部工程都保留
//     * index 只在主工程；各 Feature 工程生成自己的 index
// - 模型改动后运行 npm run sync:features 重新生成。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FEATURES = [
  { tag: '001F', slug: 'feature-001-f', fqn: 'feat_answer_f', label: 'Feature-001-F · 应答能力' },
  { tag: '001NF', slug: 'feature-001-nf', fqn: 'feat_degrade_nf', label: 'Feature-001-NF · 极端场景' },
  { tag: '002F', slug: 'feature-002-f', fqn: 'feat_knowledge_f', label: 'Feature-002-F · 知识运营' },
];

const root = path.resolve(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src');
const viewsDir = path.join(srcDir, 'views');
const featuresDir = path.join(root, 'features');

function dirname(p) {
  return path.dirname(p);
}

// 把一个视图文件拆成 [注释前导, 块] 序列
function splitViewFile(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let pending = [];
  let current = null;
  let inBlock = false;

  for (const line of lines) {
    const isStart = /^ {2}(?:deployment |dynamic )?view \S+/.test(line);
    const isEnd = /^ {2}\}$/.test(line);

    if (!inBlock && isStart) {
      current = [...pending, line];
      pending = [];
      inBlock = true;
      continue;
    }
    if (inBlock) {
      current.push(line);
      if (isEnd) {
        blocks.push(current.join('\n'));
        inBlock = false;
        current = null;
      }
      continue;
    }
    // 块外：注释或空行，附着到下一个块
    if (line.trim() === '' || line.trim().startsWith('//')) {
      pending.push(line);
    }
    // 块外的其他内容（如 views { 与收尾 }）丢弃，写出时重新包裹
  }
  return blocks;
}

function viewId(block) {
  const m = block.match(/^ {2}(?:deployment |dynamic )?view (\S+)/m);
  return m ? m[1] : null;
}

// 归属：'aggregate' | 'all' | { tag }
function classify(id) {
  if (id === 'index') return 'aggregate';
  if (/^proc-/.test(id)) return 'all';
  const tag = id.match(/(001F|001NF|002F)/)?.[1];
  if (id.startsWith('pano-')) {
    // pano-src-<链> 是单 Feature 的模块目录全览，其余 pano 跨 Feature
    return id.startsWith('pano-src-') && tag ? { tag } : 'aggregate';
  }
  return tag ? { tag } : 'aggregate';
}

// ---- 生成 ----

for (const feat of FEATURES) {
  const featSrc = path.join(featuresDir, feat.slug, 'src');
  fs.rmSync(path.join(featuresDir, feat.slug), { recursive: true, force: true });
  fs.mkdirSync(path.join(featSrc, 'model'), { recursive: true });
  fs.mkdirSync(path.join(featSrc, 'views'), { recursive: true });
  fs.mkdirSync(path.join(featSrc, 'deployment'), { recursive: true });

  // 模型与部署是共享事实，全量复制
  fs.copyFileSync(path.join(srcDir, 'specification.c4'), path.join(featSrc, 'specification.c4'));
  for (const f of fs.readdirSync(path.join(srcDir, 'model'))) {
    fs.copyFileSync(path.join(srcDir, 'model', f), path.join(featSrc, 'model', f));
  }
  fs.copyFileSync(
    path.join(srcDir, 'deployment', 'environments.c4'),
    path.join(featSrc, 'deployment', 'environments.c4'),
  );

  // 视图按归属过滤
  let count = 0;
  for (const f of fs.readdirSync(viewsDir).filter((x) => x.endsWith('.c4'))) {
    const blocks = splitViewFile(fs.readFileSync(path.join(viewsDir, f), 'utf8'));
    const kept = blocks.filter((b) => {
      const id = viewId(b);
      if (!id) return false;
      const c = classify(id);
      return c === 'all' || (typeof c === 'object' && c.tag === feat.tag);
    });
    if (kept.length === 0) continue;
    count += kept.length;
    const head =
      `// 由 scripts/sync-features.mjs 生成，属于 ${feat.label} 的视图集。\n` +
      `// 模型改动后运行 npm run sync:features 重新生成，不要手工编辑。\n\nviews {\n`;
    fs.writeFileSync(
      path.join(featSrc, 'views', f),
      head + kept.join('\n\n') + '\n}\n',
    );
  }

  // 各 Feature 自己的导航 index
  fs.writeFileSync(
    path.join(featSrc, 'views', 'index.c4'),
    `// 由 scripts/sync-features.mjs 生成。跨 Feature 全景见主工程（npm run dev）。\n\nviews {\n` +
      `  view index {\n` +
      `    title '${feat.label} · 各环视图导航'\n` +
      `    description '本 Feature 配套的完整体系各层视图。跨 Feature 全景（pano-*）与全局导航在主工程。'\n` +
      `    include ${feat.fqn}\n` +
      `  }\n}\n`,
  );
  console.log(`${feat.slug}: ${count} 个视图（+ index）`);
}
console.log('完成。');

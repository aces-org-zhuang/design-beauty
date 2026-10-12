// 启动 LikeC4 开发服务器。
//
// 为什么需要这个包装脚本：
// likec4 1.58.0 会自动探测环境里的 AI provider 变量
// （ANTHROPIC_API_KEY / OPENROUTER_API_KEY / GEMINI_API_KEY 等），
// 命中后就尝试动态安装 @tanstack/ai-* 扩展包。安装失败会让整个
// serve 进程退出，表现为「模型没问题但服务起不来」。
//
// 这里在启动前清掉这些变量，让服务只做纯粹的架构图渲染。
// 已实测：不清变量时 serve 以 ERROR 退出；清掉后正常监听。
//
// 用法：node scripts/serve-clean.mjs [sources目录] [端口]
//   npm run dev          → 主工程（全部视图含跨 Feature 全景），默认 3000
//   npm run dev:001F     → feature-001-f 独立服务，3001
//   npm run dev:001NF    → feature-001-nf 独立服务，3002
//   npm run dev:002F     → feature-002-f 独立服务，3003

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import os from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const AI_ENV_KEYS = [
  'ANTHROPIC_API_KEY',
  'ANTHROPIC_BASE_URL',
  'ANTHROPIC_MODEL',
  'OPENROUTER_API_KEY',
  'GEMINI_API_KEY',
  'GROQ_API_KEY',
  'MISTRAL_API_KEY',
  'COHERE_API_KEY',
  'LONGCAT_API_KEY',
  'LONGCAT_BASE_URL',
  'SILICONFLOW_API_KEY',
  'CODEBUDDY_API_KEY_HELPER_DISABLED',
];

const env = { ...process.env };
for (const key of AI_ENV_KEYS) {
  delete env[key];
}

const [targetDir = 'src', portArg] = process.argv.slice(2);
const port = portArg ?? process.env.LIKEC4_PORT ?? '3000';
const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '..');
const bin = join(projectRoot, 'node_modules', 'likec4', 'bin', 'likec4.mjs');

if (!existsSync(bin)) {
  console.error(`找不到 ${bin}\n请先执行 npm install`);
  process.exit(1);
}

const sources = resolve(projectRoot, targetDir);
if (!existsSync(sources)) {
  console.error(`找不到 ${sources}\n若是 Feature 工程，先运行 npm run sync:features`);
  process.exit(1);
}

// 切到项目目录，保证 serve 读取正确的 workspace
process.chdir(projectRoot);

// 监听全部网卡：手机连同一 WiFi / 局域网即可访问
const child = spawn(
  process.execPath,
  [bin, 'serve', sources, '--port', port, '--listen', '0.0.0.0'],
  {
    env,
    stdio: 'inherit',
  },
);

// 打印本机与局域网可访问地址（含全部非回环 IPv4）
console.log(`\n  本机访问   http://localhost:${port}`);
for (const ni of Object.values(os.networkInterfaces())) {
  for (const a of ni ?? []) {
    if (a.family === 'IPv4' && !a.internal) {
      console.log(`  局域网访问 http://${a.address}:${port}`);
    }
  }
}
console.log('');

child.on('exit', (code) => process.exit(code ?? 0));

for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => child.kill(sig));
}

#!/usr/bin/env node
// 命名合规校验器 —— 检查 LikeC4 产物的视图命名与元素编号是否符合体系规范。
//
// 用法：
//   likec4 export json -o out.json
//   node scripts/check-naming.mjs out.json
//
// 检查四类：
//   1. 视图 id 前缀是否属于体系定义的九类，有无驼峰或自造前缀
//   2. 视图 title 是否三段式（环代号 · 编号段 · 主题）
//   3. SRC 四维度视图的 title 是否以「SRC 环 ·」开头
//   4. 元素编号是否按 Feature 分段、链内同环是否连续
//
// 退出码：0 = 全通过；1 = 有违规。

import { readFileSync } from 'node:fs'

const file = process.argv[2] ?? 'out.json'
const model = JSON.parse(readFileSync(file, 'utf8'))

const violations = []
const add = (level, where, msg) => violations.push({ level, where, msg })

/* ---------- 体系定义的前缀白名单 ---------- */

const VIEW_PREFIXES = [
  { re: /^pano-[a-z][a-z-]*$/, kind: '同类聚合全景', ring: null },
  { re: /^pano-src-[0-9]{3}(F|NF)$/, kind: 'SRC 模块目录全览', ring: 'SRC' },
  { re: /^chain[0-9]{3}(F|NF)-us$/, kind: 'US 视图', ring: 'US' },
  { re: /^chain[0-9]{3}(F|NF)-(f|nf)$/, kind: '单元清单视图', ring: null },
  { re: /^chain[0-9]{3}(F|NF)-i-\d{3}$/, kind: '阶段视图', ring: 'I' },
  { re: /^ui[0-9]{3}(F|NF)-\d{3}(-(info|act)-\d+)?$/, kind: 'UI 单元/叶子视图', ring: 'UI' },
  { re: /^seq[0-9]{3}(F|NF)-i-\d{3}-lanes$/, kind: '阶段泳道流程', ring: 'I' },
  { re: /^dfd[0-9]{3}(F|NF)-src\d{3}-\d+$/, kind: 'SRC 模块数据流', ring: 'SRC' },
  { re: /^carrier[0-9]{3}(F|NF)$/, kind: 'SRC 数据载体', ring: 'SRC' },
  { re: /^erm[0-9]{3}(F|NF)-[a-z]+$/, kind: 'SRC 数据模型', ring: 'SRC' },
  { re: /^api[0-9]{3}(F|NF)-src\d{3}-\d+$/, kind: 'SRC 模块接口', ring: 'SRC' },
  { re: /^proc-[a-z][a-z-]*$/, kind: '构建部署', ring: '构建部署' },
  { re: /^index$/, kind: '导航', ring: null },
]

// title 首段：环代号 + 「环」或「全景」。「构建部署」是收敛层，首段直接用它。
const RING_CODES = ['US', 'F', 'NF', 'I', 'UI', 'SRC', '构建部署']
const TITLE_HEAD = new RegExp(`^(?:${RING_CODES.join('|')})\\s?(?:环|全景)|^构建部署$`)

/* ---------- 1. 视图 id 前缀 ---------- */

for (const id of Object.keys(model.views ?? {})) {
  const prefix = VIEW_PREFIXES.find((p) => p.re.test(id))
  if (prefix) continue

  // 链编号段（001F / 001NF）本身含大写字母，属体系既定写法，不算驼峰。
  // 真正的驼峰是链编号之外的大写，如 srcdir001NFnotice / stateMain / procLocal。
  const withoutChain = id.replace(/\d{3}(F|NF)/g, '')
  const hasCamel = /[A-Z]/.test(withoutChain)

  add(
    'ERROR',
    `视图 id ${id}`,
    hasCamel
      ? '链编号之外出现大写字母（驼峰），违反命名规范。需要区分请用连字符后缀，如 srcdir001NF-notice'
      : '不属于体系定义的任何前缀。合法前缀：pano- / chain / seq / dfd / carrier / erm / srcdir / api / proc- / index',
  )
}

/* ---------- 2 & 3. title 三段式 ---------- */

for (const [id, v] of Object.entries(model.views ?? {})) {
  if (id === 'index') continue
  const title = (v.title ?? '').trim()
  if (!title) {
    add('ERROR', `视图 ${id}`, '缺少 title')
    continue
  }

const segs = title.split('·').map((s) => s.trim())
const first = segs[0] ?? ''

  // 首段必须是「环代号 + 环 / 全景」，且与 id 的类别一致
  const headMatch = first.match(TITLE_HEAD)
  if (!headMatch) {
    add(
      'ERROR',
      `视图 ${id}`,
      `title 首段「${first}」不合规。必须是「环代号 + 环或全景」，如「SRC 环」「US 全景」「构建部署」。不要写「数据模型全景」「进程与线程视图」这类自造词`,
    )
    continue
  }
  const ringCode = headMatch[0].replace(/\s?(环|全景)$/, '')

  // SRC 四维度必须以 SRC 环开头
  const prefix = VIEW_PREFIXES.find((p) => p.re.test(id))
  if (prefix?.ring === 'SRC' && ringCode !== 'SRC') {
    add(
      'ERROR',
      `视图 ${id}`,
      `属于 SRC 环的 ${prefix.kind}，title 首段应为「SRC 环 ·」而不是「${first} ·」。读者需要能从标题回推它属于哪一环`,
    )
  }

  // 段数：至少 2 段（环 + 范围），全景至少 3 段
  const isPano = /^pano-/.test(id)
  const minSegs = isPano ? 3 : 2
  if (segs.length < minSegs) {
    add(
      'ERROR',
      `视图 ${id}`,
      `title 只有 ${segs.length} 段，规范要求至少 ${minSegs} 段（环代号 · 编号段 · 主题）。当前：「${title}」`,
    )
  }

  // 分环视图必须带 Feature 编号
  if (/^(chain|seq|carrier|erm|srcdir|api|dfd)[0-9]/.test(id) && !title.includes('Feature-')) {
    add('ERROR', `视图 ${id}`, `title 未标注 Feature 编号，读者无法判断属于哪条链。当前：「${title}」`)
  }
}

/* ---------- 4. 元素编号分段与连续性 ---------- */

const RING_PREFIX = /^(US|F|NF|I|UI|SRC|IN|BIZ|POD|OUT|DAO|CVT|API)-(\d{3})(?:-(\d+))?$/

// featureId -> ring -> [numbers]
const buckets = new Map()

for (const [fqn, el] of Object.entries(model.elements ?? {})) {
  const title = (el.title ?? '').trim()
  const m = title.match(RING_PREFIX)
  if (!m) continue

  const ring = m[1]
  const num = Number(m[2])
  const sub = m[3]

  // featureId = FQN 的第一段
  const feat = fqn.split('.')[0]
  if (!buckets.has(feat)) buckets.set(feat, new Map())
  const byRing = buckets.get(feat)
  if (!byRing.has(ring)) byRing.set(ring, [])
  // 子单元（SRC-001-1）不参与连续性判断
  if (!sub) byRing.get(ring).push(num)
}

// 泳道自造编号检测：title 含「泳道引用」「泳道占位」「泳道引用」
for (const [fqn, el] of Object.entries(model.elements ?? {})) {
  const t = (el.title ?? '').trim()
  if (/（?泳道(引用|占位)/.test(t)) {
    add(
      'ERROR',
      `元素 ${fqn}`,
      `title 含「${t.match(/（?泳道(引用|占位)/)[0]}」，说明泳道自造了编号。同一环节只能有一个元素，泳道应直接用真实嵌套元素`,
    )
  }
}

// 连续性：同环内出现跳号且中间无说明，跳号本身允许（预留），只报「重复编号」
for (const [feat, byRing] of buckets) {
  for (const [ring, nums] of byRing) {
    const sorted = [...nums].sort((a, b) => a - b)
    const dup = sorted.filter((n, i) => i > 0 && n === sorted[i - 1])
    for (const n of new Set(dup)) {
      add('ERROR', `${feat} 的 ${ring} 环`, `编号 ${ring}-${String(n).padStart(3, '0')} 重复出现，编号必须唯一`)
    }
  }
}

/* ---------- 5. 一个环是一组固定内容（I 环按阶段齐备） ---------- */

// I 环按阶段性目标切分：每个阶段元素内部必须同时含业务状态与业务步骤。
// 业务目标 = 阶段本身（title 匹配 I-xxx 阶段性目标）
// 业务状态 = state 元素（阶段的直接子）
// 业务步骤 = implStep 且 title 是 I-xxx-N（阶段的直接子）

const featureIds = new Set(
  Object.keys(model.elements ?? {})
    .map((fqn) => fqn.split('.')[0])
    .filter((id) => model.elements[id]?.kind === 'feature'),
)

const iRing = new Map() // featureId -> [{ states, steps, uiUnit }]

for (const [fqn, el] of Object.entries(model.elements ?? {})) {
  if (el.kind !== 'implStep') continue
  if (!/^I-\d{3} 阶段性目标/.test((el.title ?? '').trim())) continue
  const feat = fqn.split('.')[0]
  if (!iRing.has(feat)) iRing.set(feat, [])
  const kids = Object.keys(model.elements ?? {}).filter((k) => k.slice(0, k.lastIndexOf('.')) === fqn)
  iRing.get(feat).push({
    fqn,
    states: kids.filter((k) => model.elements[k].kind === 'state').length,
    steps: kids.filter((k) => model.elements[k].kind === 'implStep').length,
    uiUnit: kids.filter((k) => model.elements[k].kind === 'uiSurface').length,
  })
}

const viewIds = Object.keys(model.views ?? {})
for (const [feat, stages] of iRing) {
  for (const st of stages) {
    const label = `${feat} 的 ${st.fqn.split('.').pop()}`

    if (st.states === 0) {
      add('ERROR', label, '缺业务状态。「本阶段无状态」几乎总是漏做，请补 state 元素与迁移')
    } else if (st.states < 2) {
      add('ERROR', label, `业务状态只有 ${st.states} 个，至少需要 2 个且有迁移`)
    }
    if (st.steps === 0) {
      add('ERROR', label, '缺业务步骤。阶段内三类内容（目标/状态/步骤）缺一不可')
    }
    if (st.uiUnit === 0) {
      add('ERROR', label, '缺 UI 单元。每个阶段都要有对应 UI（编号镜像阶段号），确无界面必须显式声明并给理由')
    }
  }

  // 每个阶段一张视图
  const stageViews = viewIds.filter((v) => /^chain\d{3}(F|NF)-i-\d{3}$/.test(v))
  if (stages.length > 0 && stageViews.length === 0) {
    add('ERROR', `${feat} 的 I 环`, '缺阶段视图 chain<链>-i-<阶段号>。每个阶段一张图')
  }
}

/* ---------- 6. 视图必须拆到具体元素，不能只有分类容器 ---------- */

// 视图里应该有带编号的具体元素。
// 反面：只 include 一个分类容器（如「服务端接入泳道」），图上只剩一个空框，
// 读者看到的不是 SRC-001/002，而是「一个叫泳道的东西」。
// include 容器不会带出子元素，所以必须逐个 include 叶子元素。

const NUMBERED_TITLE = [
  /^Feature-\d{3}-(F|NF)\s/,                    // Feature 容器
  /^(US|F|NF|UI|SRC|IN|BIZ|POD|OUT|DAO|CVT|API)-\d{3}(-\d+)?\s/, // 标准编号
  /^UI-\d{3}-(信息设计|交互设计)-\d{3}\s/,       // UI 叶子（信息/交互设计）
  /^I-\d{3}(-\d+)?\s/,                           // I 阶段 / I 阶段步骤
  /^I-\d{3}\s*阶段性目标/,                       // I 阶段性目标
  /^S-\d{3}\s/,                                  // 业务状态
]

for (const [id, v] of Object.entries(model.views ?? {})) {
  if (v._type !== 'element') continue
  const nodes = v.nodes ?? []
  if (nodes.length === 0) continue

  // 叶子 = 无子节点的元素，即视图真正展示的内容
  const leaves = nodes.filter((n) => !n.children || n.children.length === 0)
  const unnumbered = leaves.filter((n) => !NUMBERED_TITLE.some((r) => r.test(n.title ?? '')))

  if (unnumbered.length > 0 && leaves.length === unnumbered.length) {
    add(
      'ERROR',
      `视图 ${id}`,
      `全部 ${leaves.length} 个叶子节点都没有体系编号：${unnumbered.map((n) => n.title).join('、')}。
       视图只显示分类容器，没有拆到具体元素。include 容器不会带出子元素，
       必须逐个 include 叶子元素（如 lane_edge.api_xxx）`,
    )
  }
}

/* ---------- 7. 单元视图层级 ≤ 1（全景豁免：祖先链即归属） ---------- */

// 单元视图（chain / ui / dfd / api / carrier / erm）最多跨一层。
// 全景（pano-*）豁免：跨深层单元聚合时 LikeC4 必然补齐祖先链，
// 而祖先链（US→阶段→UI→模块）就是目录归属信息，正是全览要表达的。

for (const [id, v] of Object.entries(model.views ?? {})) {
  if (v._type !== 'element') continue
  if (id.startsWith('pano-') || id === 'index') continue

  const nodes = v.nodes ?? []
  const maxLevel = nodes.reduce((m, n) => Math.max(m, n.level ?? 0), 0)
  if (maxLevel >= 2) {
    add(
      'ERROR',
      `视图 ${id}`,
      `嵌套层级 ${maxLevel} ≥ 2，单元视图最多跨一层（本环 + 直接上层）。全景视图（pano-*）不受此限`,
    )
  }
}

/* ---------- 输出 ---------- */

const errors = violations.filter((v) => v.level === 'ERROR')

if (errors.length === 0) {
  const viewCount = Object.keys(model.views ?? {}).length
  console.log(`✓ 命名合规：${viewCount} 个视图全部通过`)
  process.exit(0)
}

console.log(`✗ 发现 ${errors.length} 处命名违规：\n`)
const byWhere = new Map()
for (const v of errors) {
  if (!byWhere.has(v.where)) byWhere.set(v.where, [])
  byWhere.get(v.where).push(v.msg)
}
for (const [where, msgs] of byWhere) {
  console.log(`  ${where}`)
  for (const m of msgs) console.log(`    - ${m}`)
}
console.log('')
process.exit(1)
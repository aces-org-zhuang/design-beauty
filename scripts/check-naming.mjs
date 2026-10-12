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
  // pano-src-001F / pano-src-001NF-notice：跨 Feature 聚合但按 Feature 分图时用
  { re: /^pano-src-[0-9]{3}(F|NF)(-[a-z][a-z-]*)?$/, kind: 'SRC 同类聚合全景', ring: 'SRC' },
  { re: /^chain[0-9]{3}(F|NF)-[a-z][a-z-]*$/, kind: '分环视图', ring: 'chain' },
  { re: /^seq[0-9]{3}(F|NF)-[a-z][a-z-]*$/, kind: '时序', ring: 'seq' },
  { re: /^dfd[0-9]{3}(F|NF)-[a-z][a-z-]*$/, kind: 'SRC 数据流', ring: 'SRC' },
  { re: /^carrier[0-9]{3}(F|NF)(-[a-z][a-z-]*)?$/, kind: 'SRC 数据载体', ring: 'SRC' },
  { re: /^erm[0-9]{3}(F|NF)-[a-z][a-z-]*$/, kind: 'SRC 数据模型', ring: 'SRC' },
  { re: /^srcdir[0-9]{3}(F|NF)(-[a-z][a-z-]*)?$/, kind: 'SRC 目录', ring: 'SRC' },
  { re: /^api[0-9]{3}(F|NF)(-[a-z][a-z-]*)?$/, kind: 'SRC 接口', ring: 'SRC' },
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

/* ---------- 5. 一个环是一组固定内容（I 环三类齐备） ---------- */

// I 环固定包含三类内容：业务目标 / 业务状态 / 业务步骤，缺一不可。
// 业务目标 = implStep 且 title 匹配 I-G<序号>
// 业务状态 = state 元素
// 业务步骤 = implStep 且 title 是 I-<三位数字>（非 I-G）

const featureIds = new Set(
  Object.keys(model.elements ?? {})
    .map((fqn) => fqn.split('.')[0])
    .filter((id) => model.elements[id]?.kind === 'feature'),
)

const iRing = new Map() // featureId -> { goal, states, steps }

for (const [fqn, el] of Object.entries(model.elements ?? {})) {
  const title = (el.title ?? '').trim()
  const feat = fqn.split('.')[0]
  if (!featureIds.has(feat)) continue

  if (!iRing.has(feat)) iRing.set(feat, { goal: 0, states: 0, steps: 0 })
  const bucket = iRing.get(feat)

  if (el.kind === 'state') {
    bucket.states++
  } else if (el.kind === 'implStep') {
    if (/^I-G\d+/.test(title)) bucket.goal++
    else if (/^I-\d{3}/.test(title)) bucket.steps++
  }
}

// 每条链的三类 i 视图是否齐备
const viewIds = Object.keys(model.views ?? {})
for (const [feat, b] of iRing) {
  const label = `${feat} 的 I 环`

  if (b.goal === 0) {
    add('ERROR', label, '缺业务目标。每个 Feature 的 I 环必须有且仅有一个业务目标（编号 I-G<n>）')
  } else if (b.goal > 1) {
    add('ERROR', label, `有 ${b.goal} 个业务目标，应恰好 1 个`)
  }

  if (b.states === 0) {
    add(
      'ERROR',
      label,
      '缺业务状态。真实系统几乎总有状态，「本链无状态」通常是漏做而非事实。请补 state 元素与迁移关系',
    )
  } else if (b.states < 2) {
    add('ERROR', label, `业务状态只有 ${b.states} 个。单个状态不构成状态机，至少需要 2 个且有迁移`)
  }

  if (b.steps === 0) {
    add('ERROR', label, '缺业务步骤。I 环三类内容缺一不可')
  }

  // 三张视图齐备
  const hasGoalView = viewIds.some((v) => v.startsWith(`chain`) && v.endsWith('-i-goal'))
  const hasStateView = viewIds.some((v) => v.startsWith(`chain`) && v.includes('-i-state'))
  const hasStepView = viewIds.some((v) => v.startsWith(`chain`) && v.includes('-i-step'))
  const missing = []
  if (!hasGoalView) missing.push('i-goal')
  if (!hasStateView) missing.push('i-state')
  if (!hasStepView) missing.push('i-step')
  if (missing.length) {
    add('ERROR', label, `缺视图：${missing.join(' / ')}。每个 I 环都要有目标 / 状态 / 步骤三张视图`)
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
  /^I-\d{3}\s/,                                 // I 业务步骤
  /^I-G\d+\s/,                                  // I 业务目标
  /^S-\d{3}\s/,                                 // 业务状态
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
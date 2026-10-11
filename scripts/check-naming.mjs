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
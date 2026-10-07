# 架构交接规格

> 本文件是 `Implementation Handoff Mini-Spec` 的**架构视角子集**,由 `architecture-design` 产出。
> 字段命名与 `technical-design/templates/implementation-handoff-mini-spec.md` 对齐,便于下游直接合并。
> 接口契约、数据结构、业务规则由 `technical-design` 补齐,本文件不提供。

## 消费方约定

本文件落盘在设计仓的 `handoff/current.md`,**下游技能只读不改**。

| 项 | 约定 |
| --- | --- |
| 落盘路径 | `vendor/design/aces-design/handoff/current.md` |
| 历史版本 | `handoff/history/<模型 commit>.md` |
| 下游读者 | `technical-design`（补齐接口与数据）、`implementation-delivery`（消费完整包） |
| 过期判定 | 下方「模型版本」与主仓 pinned gitlink 不一致即视为过期 |
| 缺失处理 | 文件不存在表示尚未产出，下游按默认路径工作，不阻塞 |
| 修改方式 | 需要修正架构时回到 `architecture-design` 重新产出，不在下游手改 |

## 元信息

- 架构模型位置：`vendor/design/aces-design/src/**/*.c4`（6 个源文件）
- 模型版本（commit / pinned）：见文件末尾「版本锚定」
- `likec4 validate` 结果：✓ Valid (6 files)
- 取事实方式：MCP 查询（`@likec4/mcp` 1.56.0 内核，`LIKEC4_WORKSPACE=vendor/design/aces-design`）
- 产出时间：2026-10-08

---

## 一、组件边界

标识符为英文（决定导出文件名与分享 URL），显示名为中文。FQN 为下游引用权威。

| 组件（FQN） | 显示名 | 归属层 | 职责 | 禁止越界 | 模型依据 | 置信度 |
| --- | --- | --- | --- | --- | --- | --- |
| `beauty.wechatCallback` | 微信客服回调入口 | ingress `src/routes` | 接收加密的企业微信回调并派发 | 不得直接调用外部平台 SDK | `wechatCallback` element | 高 |
| `beauty.knowledgeRoutes` | 知识库路由 | ingress `src/routes` | 知识相关 HTTP 入口 | 不承载业务判断 | `knowledgeRoutes` element | 高 |
| `beauty.materialRoutes` | 素材路由 | ingress `src/routes` | 素材相关 HTTP 入口 | 不直接操作存储 | `materialRoutes` element | 高 |
| `beauty.handoffRoutes` | 转人工路由 | ingress `src/routes` | 转人工入口 | 不直接决定转人工策略 | `handoffRoutes` element | 高 |
| `beauty.integrationRoutes` | 集成状态路由 | ingress `src/routes` | 外部集成状态查询 | 不修改集成配置 | `integrationRoutes` element | 高 |
| `beauty.answerOrchestrator` | 应答编排器 | orchestration `src/services` | 编排检索、策略、回复或转人工 | 不得越过 `replyPolicy` 直接回复 | `answerOrchestrator` element | 高 |
| `beauty.answerLoop` | 知识应答循环 | orchestration | 驱动一次应答的迭代过程 | 不得自行决定终止条件外的分支 | `answerLoop` element | 高 |
| `beauty.replyPolicy` | 回复策略 | orchestration | 决定回复或转人工 | 不得直接触达外部平台 | `replyPolicy` element | 高 |
| `beauty.evaluationGate` | 评测闸门 | orchestration | 放行或拦截候选答案 | 不得改写答案内容 | `evaluationGate` element | 高 |
| `beauty.handoffService` | 转人工服务 | orchestration | 执行转人工 | 不得绕过策略直接转人工 | `handoffService` element | 高 |
| `beauty.knowledgeScan` | 知识扫描 | knowledge `src/services` | 扫描知识来源 | 不得直接写入 RAGFlow | `knowledgeScan` element | 高 |
| `beauty.knowledgeSync` | 知识同步 | knowledge | 推送已批准知识到 RAGFlow | 不得推送未批准内容 | `knowledgeSync` element | 高 |
| `beauty.governance` | 知识治理 | knowledge | 审批与治理 | 不得直接触达外部平台 | `governance` element | 高 |
| `beauty.documentRegistry` | 文档登记簿 | knowledge | 维护文档元信息 | 不得存放文档正文 | `documentRegistry` element | 中 |
| `beauty.knowledgeAlert` | 知识告警 | knowledge | 新鲜度与异常告警 | 不得自动执行治理动作 | `knowledgeAlert` element | 高 |
| `beauty.ragflowKnowledge` | RAGFlow 知识检索 | platform adapter | RAGFlow 检索与数据集访问 | 不得绕过知识治理直连 | `ragflowKnowledge` element | 高 |
| `beauty.ragflowLifecycleProbe` | RAGFlow 生命周期探针 | platform adapter | 校验数据集状态 | 不得写入数据 | `ragflowLifecycleProbe` element | 高 |
| `beauty.wechatPlatform` | 微信客服平台适配 | platform adapter | 企业微信会话操作 | 不得承载业务规则 | `wechatPlatform` element | 高 |
| `beauty.store` | 本地存储 | domain `src/domain` | 以 JSON 文件承载状态 | 不得放业务逻辑 | `store` element | 高 |
| `beauty.ids` | 标识生成 | domain `src/domain` | 生成业务标识 | 不得决定标识语义 | `ids` element | 高 |
| `beauty.operatorUi` | 运营人员控制台 | ui `src/ui` | 运营人员操作界面 | 不得直接调用外部平台 | `operatorUi` element | 高 |
| `beauty.fakeWechat` | 模拟微信入口 | dev only | 本地回归用消息入口 | 不得进入生产部署 | `fakeWechat` element | 高 |

**外部系统**（顶层，非本服务子元素）：

| 元素（FQN） | 显示名 | 性质 | 边界 | 模型依据 | 置信度 |
| --- | --- | --- | --- | --- | --- |
| `wechatWork` | 企业微信 | external | 客服平台，回调与出站消息边界 | `wechatWork` element | 高 |
| `ragflow` | RAGFlow | external | RAG 检索与知识库服务 | `ragflow` element | 高 |
| `llmWiki` | LLM Wiki 候选源 | external | 知识候选来源 | `llmWiki` element | 高 |

---

## 二、依赖约束

**MCP 实测依据**：`query-outgoers-graph(beauty.answerOrchestrator, maxDepth=2)` 返回 `totalNodes: 7`。

```text
客户 → 微信客服回调入口 → 应答编排器 → 知识应答循环
                              ↓
                        回复策略 / 评测闸门
                              ↓
                     回复 或 转人工服务
```

| 约束 | 内容 | 模型依据 | 置信度 |
| --- | --- | --- | --- |
| 依赖方向 | ingress → orchestration → platform adapter → external，单向 | `query-outgoers-graph` | 高 |
| 禁止反向 | platform adapter 不得回调 orchestration | 模型未声明此类关系 | 中 |
| 外部边界 | 外部平台只经 adapter 访问，不直连 | `ragflowKnowledge`、`wechatPlatform` element | 高 |
| 存储边界 | 状态只经 `beauty.store` 持久化 | `store` element | 高 |
| 配置门控 | RAGFlow 检索需同时具备开关、API key、dataset 三项 | `configGatedFlow` view | 高 |
| 回调门控 | 企业微信回调需 corp id、token、AES key 三项 | `configGatedFlow` view | 高 |

未验证项：禁止反向依赖在模型中无显式声明，**置信度中等**，需 `technical-design` 或测试验证。

---

## 三、流程锚点

| 流程 | view id | 显示名 | 实现侧用途 | 模型依据 | 置信度 |
| --- | --- | --- | --- | --- | --- |
| 应答主链路 | `answerPath` | 应答链路 | 组件协作总览 | element view | 高 |
| 提问到应答 | `chatToAnswer` | 客户提问到应答 | 主场景时序 | dynamic view | 高 |
| 检索时序 | `retrievalSequence` | 应答检索时序 | 检索链路实现锚点 | dynamic view | 高 |
| 策略评估 | `evaluationSequence` | 策略评估读取时序 | 并发读取实现锚点 | dynamic view | 高 |
| 转人工 | `handoffSequence` | 升级到人工运营 | 转人工实现锚点 | dynamic view | 高 |
| 知识晋升同步 | `knowledgeSyncSequence` | 知识晋升与同步 | 知识同步实现锚点 | dynamic view | 高 |
| 配置门控 | `configGatedFlow` | 配置门控检索 | 启动期校验锚点 | dynamic view | 高 |

**限制**：LikeC4 1.58.0 不支持 `opt` / `loop` / `break` / `alt` / `try`。条件分支、循环与异常处理**必须走 Mermaid flowchart**，不得用 LikeC4 硬凑。

---

## 四、部署要求

**MCP 实测依据**：`read-deployment({id: "local"})` 返回 environment `local`，含 `local.appTier`、`local.dataTier` 两个 zone。

| 环境 | 节点 | 实例 | 资源 | 模型依据 | 置信度 |
| --- | --- | --- | --- | --- | --- |
| `local` | `local.appTier.appVm` | `instanceOf beauty` | 本机 8787，Node.js 20 及以上 | `environments.c4` | 高 |
| `local` | `local.dataTier.storeVm` | `instanceOf beauty.store` | 本地文件系统 | `environments.c4` | 高 |
| `local` | `local.dataTier.ragflowVm` | `instanceOf ragflow` | 本机 9380 | `environments.c4` | 高 |
| `local` | `local.dataTier.wikiVm` | `instanceOf llmWiki` | 本机 19828 | `environments.c4` | 高 |
| `wechat` | `wechat.wechatTier` | 企业微信云端边界 | 外部托管 | `environments.c4` | 高 |

硬约束：

| 约束 | 内容 | 置信度 |
| --- | --- | --- |
| 运行时 | Node.js 20 及以上（LikeC4 1.58.x 需 >= 22.22.3 才跑 CLI；服务本身按 20+） | 高 |
| 存储 | 状态以 JSON 文件承载，无数据库依赖 | 高 |
| 外部服务 | RAGFlow、LLM Wiki 均为本地或自建，非托管 SaaS | 高 |
| 边界 | `fakeWechat` 不得进入生产部署（dev only） | 高 |

---

## 五、验收锚点

每项为可验证信号，不接受「与设计文档一致」这类表述。

| 组件 | 验收信号 | 验证方式 | 置信度 |
| --- | --- | --- | --- |
| `beauty.wechatCallback` | 三项配置齐全时不返回签名错误 | 单元测试 + 配置矩阵 | 高 |
| `beauty.wechatCallback` | 缺任一配置时明确拒绝而非静默通过 | 单元测试 | 高 |
| `beauty.answerOrchestrator` | 回复路径与转人工路径均可独立触发 | 集成测试 | 高 |
| `beauty.evaluationGate` | 未通过评测的答案不进入回复路径 | 单元测试 | 高 |
| `beauty.ragflowKnowledge` | 缺 API key 或 dataset 时不返回伪造检索结果 | 单元测试 | 高 |
| `beauty.knowledgeSync` | 未批准内容不推送到 RAGFlow | 集成测试 | 中 |
| `beauty.store` | 状态读写往返一致 | 单元测试 | 高 |
| 禁止反向依赖 | adapter 层无对 orchestration 的引用 | 静态检查（依赖方向 lint） | 中 |
| 部署 | `beauty` 实例可在 8787 启动并通过健康检查 | 本地启动验证 | 高 |
| 部署 | `fakeWechat` 不出现在生产部署 | 部署配置检查 | 高 |

未验证项：标记为「中」的条目需 `technical-design` 补证或由测试覆盖。

---

## 六、待补充（无模型依据，不凭空补齐）

| 项 | 缺失原因 | 建议补证方 |
| --- | --- | --- |
| 接口签名与错误码 | 架构模型不含接口契约 | `technical-design` |
| 数据结构与存储 schema | 架构模型不含字段定义 | `technical-design` |
| 状态机与业务规则 | 架构模型不含状态迁移 | `technical-design` |
| 禁止反向依赖的强约束 | 模型未声明，需代码或测试证明 | `technical-design` |
| 各组件 SLI / 容量指标 | 模型不含运行时指标 | `technical-design` |

---

## 七、置信度汇总

| 部分 | 最低置信度 | 状态 |
| --- | --- | --- |
| 组件边界 | 高 | ready |
| 依赖约束 | 中（禁止反向依赖未验证） | 需补证 |
| 流程锚点 | 高 | ready |
| 部署要求 | 高 | ready |
| 验收锚点 | 中（2 项需测试覆盖） | 需补证 |

**整体判定：不得声明 ready for implementation。** 依赖约束与验收锚点存在中置信度条目，需 `technical-design` 补证后方可推进。

---

## 版本锚定

- 模型 commit：见本文件所属的 design-beauty 提交
- 元素总数：28（含 3 个外部系统）
- 视图总数：14
- 部署实例数：4
- MCP 内核版本：1.56.0

下游读取本文件时，必须核对上述 commit 与主仓 `vendor/design/aces-design` 的 pinned gitlink 是否一致。不一致即视为过期。

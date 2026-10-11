var e=e=>{switch(e){case`procLocal`:return`@startuml
title "进程与线程视图 · 本地开发环境"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

@enduml
`;case`procProd`:return`@startuml
title "进程与线程视图 · 生产环境"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

@enduml
`;case`pano-us`:return`@startuml
title "US 全景 · 全部链"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_ask>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
@enduml
`;case`pano-f`:return`@startuml
title "F 全景 · 全部链的业务能力单元"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fF_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fF_retrieval>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==F-001 应答编排能力\\n\\n决定自动应答还是转人工，串联检索与策略校验。" <<Feat_answer_fF_answer>> as Feat_answer_fF_answer
rectangle "==F-002 知识检索能力\\n\\n从 RAGFlow 检索候选知识并按置信度排序。" <<Feat_answer_fF_retrieval>> as Feat_answer_fF_retrieval
@enduml
`;case`pano-nf`:return`@startuml
title "NF 全景 · 全部链的极端场景单元"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfNf_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==NF-101 知识库为零条时状态可见\\n\\n场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。" <<Feat_degrade_nfNf_kbEmpty>> as Feat_degrade_nfNf_kbEmpty
rectangle "==NF-102 RAGFlow 超 8 秒时客户可感知\\n\\n场景：RAGFlow 响应超时。表现：超过 8 秒下发带说明的提示，客服不必反复刷新。角色：客户。" <<Feat_degrade_nfNf_ragTimeout>> as Feat_degrade_nfNf_ragTimeout
rectangle "==NF-103 LLM 不可用时自动转人工\\n\\n场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。" <<Feat_degrade_nfNf_llmDown>> as Feat_degrade_nfNf_llmDown
@enduml
`;case`pano-i`:return`@startuml
title "I 全景 · 全部链的业务逻辑"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fI_step>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfI_step>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-001 业务目标\\n\\n客户提问后得到有据可依的答复，或明确被转人工。" <<Feat_answer_fI_goal>> as Feat_answer_fI_goal
rectangle "==I-003 业务步骤\\n\\n主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。" <<Feat_answer_fI_step>> as Feat_answer_fI_step
rectangle "==I-101 业务目标\\n\\n三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。" <<Feat_degrade_nfI_goal>> as Feat_degrade_nfI_goal
rectangle "==I-102 场景判定逻辑\\n\\n主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 → 分发对应提示或工单。" <<Feat_degrade_nfI_step>> as Feat_degrade_nfI_step
@enduml
`;case`pano-i-state`:return`@startuml
title "I 环 · 业务状态全景"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<St_received>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_retrieving>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_answering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_waitingHuman>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==已接收" <<St_received>> as St_received
rectangle "==检索中" <<St_retrieving>> as St_retrieving
rectangle "==应答中" <<St_answering>> as St_answering
rectangle "==待人工" <<St_waitingHuman>> as St_waitingHuman
rectangle "==已答复" <<St_answered>> as St_answered

St_received .[#8D8D8D,thickness=2].> St_retrieving : <color:#8D8D8D>发起检索
St_retrieving .[#8D8D8D,thickness=2].> St_answering : <color:#8D8D8D>置信度达标
St_answering .[#8D8D8D,thickness=2].> St_answered : <color:#8D8D8D>答复已下发
St_retrieving .[#8D8D8D,thickness=2].> St_waitingHuman : <color:#8D8D8D>置信度不足
St_waitingHuman .[#8D8D8D,thickness=2].> St_answered : <color:#8D8D8D>人工已接管
@enduml
`;case`pano-ui`:return`@startuml
title "UI 全景 · 全部链的界面面"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUi_interaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUi_notice>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==UI-001 企业微信会话交互\\n\\n客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。" <<Feat_answer_fUi_interaction>> as Feat_answer_fUi_interaction
rectangle "==UI-002 答复信息设计\\n\\n展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。" <<Feat_answer_fUi_information>> as Feat_answer_fUi_information
rectangle "==UI-101 控制台状态提示\\n\\n展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。" <<Feat_degrade_nfUi_status>> as Feat_degrade_nfUi_status
rectangle "==UI-102 极端场景提示\\n\\n会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。" <<Feat_degrade_nfUi_notice>> as Feat_degrade_nfUi_notice
@enduml
`;case`pano-src`:return`@startuml
title "SRC 全景 · 全部链的源码单元"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_answer_fSrc_wechatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_integrationRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_knowledgeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_ragflowProbe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_answerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_evaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_ragflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_operatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_storeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  component "==SRC-001 微信客服回调入口\\n\\nsrc/routes/wechat-kf-routes.js — 接收企业微信加密回调并解密分发。" <<Feat_answer_fSrc_wechatCallback>> as Feat_answer_fSrc_wechatCallback
  component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fSrc_answerOrchestrator>> as Feat_answer_fSrc_answerOrchestrator
  component "==SRC-003 知识应答循环\\n\\nsrc/services/knowledge-answer-loop-service.js — 检索增强的应答循环。" <<Feat_answer_fSrc_answerLoop>> as Feat_answer_fSrc_answerLoop
  component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fSrc_handoffService>> as Feat_answer_fSrc_handoffService
  component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fSrc_replyPolicy>> as Feat_answer_fSrc_replyPolicy
  component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问。" <<Feat_answer_fSrc_ragflowKnowledge>> as Feat_answer_fSrc_ragflowKnowledge
  component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fSrc_store>> as Feat_answer_fSrc_store
}
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  component "==SRC-101 集成状态路由\\n\\nsrc/routes/integration-routes.js — 功能概览与集成状态查询。" <<Feat_degrade_nfSrc_integrationRoutes>> as Feat_degrade_nfSrc_integrationRoutes
  component "==SRC-103 知识告警\\n\\nsrc/services/knowledge-alert-service.js — 暴露知识新鲜度与空库问题。" <<Feat_degrade_nfSrc_knowledgeAlert>> as Feat_degrade_nfSrc_knowledgeAlert
  component "==SRC-104 RAGFlow 生命周期探针\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 校验 RAGFlow 数据集状态与可用性。" <<Feat_degrade_nfSrc_ragflowProbe>> as Feat_degrade_nfSrc_ragflowProbe
  component "==SRC-102 评测闸门\\n\\nsrc/services/evaluation-gate.js — 本地发布策略门禁，判定是否阻断应答。" <<Feat_degrade_nfSrc_evaluationGate>> as Feat_degrade_nfSrc_evaluationGate
  component "==SRC-105 运营人员控制台\\n\\nsrc/ui/operator.html — 运营人员单页控制台。" <<Feat_degrade_nfSrc_operatorUi>> as Feat_degrade_nfSrc_operatorUi
  component "==SRC-106 告警状态存储\\n\\nsrc/domain/store.js — 本链侧的告警与状态快照存储单元。" <<Feat_degrade_nfSrc_storeAlert>> as Feat_degrade_nfSrc_storeAlert
}

Feat_answer_fSrc_wechatCallback .[#15803d,thickness=2].> Feat_answer_fSrc_answerOrchestrator : <color:#15803d>分发归一化消息
Feat_answer_fSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fSrc_answerLoop : <color:#15803d>请求应答
Feat_answer_fSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fSrc_replyPolicy : <color:#15803d>校验置信度
Feat_answer_fSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fSrc_ragflowKnowledge : <color:#15803d>检索候选知识
Feat_answer_fSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fSrc_handoffService : <color:#15803d>低置信度时转人工
Feat_answer_fSrc_handoffService .[#15803d,thickness=2].> Feat_answer_fSrc_store : <color:#15803d>持久化工单
Feat_degrade_nfSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfSrc_knowledgeAlert : <color:#15803d>查询空库告警
Feat_degrade_nfSrc_knowledgeAlert .[#15803d,thickness=2].> Feat_degrade_nfSrc_evaluationGate : <color:#15803d>提交发布判定
Feat_degrade_nfSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfSrc_ragflowProbe : <color:#15803d>探测数据集状态
Feat_degrade_nfSrc_evaluationGate .[#15803d,thickness=2].> Feat_degrade_nfSrc_storeAlert : <color:#15803d>读取告警快照
@enduml
`;case`pano-carrier`:return`@startuml
title "数据载体全景 · 全部链"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fCvt_normalize>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfIn_probeQuery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfCvt_probe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fIn_chatMessage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfBiz_probeResult>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fOut_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==CVT-001 提问归一化转换器\\n\\nsrc/domain/normalize.js — 覆盖 微信原始报文→IN-001 与 POD-001→OUT-001 两组映射。" <<Feat_answer_fCvt_normalize>> as Feat_answer_fCvt_normalize
  rectangle "==IN-001 客户提问入参\\n\\nsrc/domain/normalize.js — 企业微信回调解密后归一化的提问。" <<Feat_answer_fIn_chatMessage>> as Feat_answer_fIn_chatMessage
  rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
  rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
  database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store
  rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer
}
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==IN-101 状态探测入参\\n\\nsrc/routes/integration-routes.js — 控制台发起的集成状态查询。" <<Feat_degrade_nfIn_probeQuery>> as Feat_degrade_nfIn_probeQuery
  rectangle "==CVT-101 探测结果转换器\\n\\nsrc/services/knowledge-alert-service.js — 覆盖 BIZ-101→OUT-101 与 BIZ-101→POD-101 两组映射。" <<Feat_degrade_nfCvt_probe>> as Feat_degrade_nfCvt_probe
  rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
  rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
  rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status
  database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert
}

Feat_answer_fIn_chatMessage .[#64748b,thickness=2].> Feat_answer_fBiz_query : <color:#64748b>转换为检索查询
Feat_answer_fBiz_query .[#3b82f6,thickness=2].> Feat_answer_fPod_ticket : <color:#3b82f6>低置信度落工单
Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
Feat_answer_fDao_store .[#3b82f6,thickness=2].> Feat_answer_fOut_answer : <color:#3b82f6>查询答复内容
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fIn_chatMessage : <color:#0ea5e9>负责 报文→IN-001 映射
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fOut_answer : <color:#0ea5e9>负责 POD-001→OUT-001 映射
Feat_degrade_nfIn_probeQuery .[#64748b,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#64748b>转换为探测结果
Feat_degrade_nfBiz_probeResult .[#64748b,thickness=2].> Feat_degrade_nfPod_alert : <color:#64748b>异常转告警实体
Feat_degrade_nfBiz_probeResult .[#3b82f6,thickness=2].> Feat_degrade_nfOut_status : <color:#3b82f6>渲染状态载荷
Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#0ea5e9>负责 BIZ-101→OUT-101 映射
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfPod_alert : <color:#0ea5e9>负责 BIZ-101→POD-101 映射
@enduml
`;case`pano-api`:return`@startuml
title "API 全景 · 全部链的对外接口"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fLane_edge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==服务端接入泳道" <<Feat_answer_fLane_edge>> as Feat_answer_fLane_edge
rectangle "==服务端接入泳道" <<Feat_degrade_nfLane_edge>> as Feat_degrade_nfLane_edge
@enduml
`;case`srcdir001F`:return`@startuml
title "SRC 目录视图 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_answer_fSrc_wechatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_answerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_ragflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-001 微信客服回调入口\\n\\nsrc/routes/wechat-kf-routes.js — 接收企业微信加密回调并解密分发。" <<Feat_answer_fSrc_wechatCallback>> as Feat_answer_fSrc_wechatCallback
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fSrc_answerOrchestrator>> as Feat_answer_fSrc_answerOrchestrator
component "==SRC-003 知识应答循环\\n\\nsrc/services/knowledge-answer-loop-service.js — 检索增强的应答循环。" <<Feat_answer_fSrc_answerLoop>> as Feat_answer_fSrc_answerLoop
component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fSrc_handoffService>> as Feat_answer_fSrc_handoffService
component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fSrc_replyPolicy>> as Feat_answer_fSrc_replyPolicy
component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问。" <<Feat_answer_fSrc_ragflowKnowledge>> as Feat_answer_fSrc_ragflowKnowledge
component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fSrc_store>> as Feat_answer_fSrc_store

Feat_answer_fSrc_wechatCallback .[#15803d,thickness=2].> Feat_answer_fSrc_answerOrchestrator : <color:#15803d>分发归一化消息
Feat_answer_fSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fSrc_answerLoop : <color:#15803d>请求应答
Feat_answer_fSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fSrc_replyPolicy : <color:#15803d>校验置信度
Feat_answer_fSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fSrc_ragflowKnowledge : <color:#15803d>检索候选知识
Feat_answer_fSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fSrc_handoffService : <color:#15803d>低置信度时转人工
Feat_answer_fSrc_handoffService .[#15803d,thickness=2].> Feat_answer_fSrc_store : <color:#15803d>持久化工单
@enduml
`;case`srcdir001NF`:return`@startuml
title "SRC 目录视图 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_degrade_nfSrc_integrationRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_knowledgeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_ragflowProbe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_evaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_operatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_storeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-101 集成状态路由\\n\\nsrc/routes/integration-routes.js — 功能概览与集成状态查询。" <<Feat_degrade_nfSrc_integrationRoutes>> as Feat_degrade_nfSrc_integrationRoutes
component "==SRC-103 知识告警\\n\\nsrc/services/knowledge-alert-service.js — 暴露知识新鲜度与空库问题。" <<Feat_degrade_nfSrc_knowledgeAlert>> as Feat_degrade_nfSrc_knowledgeAlert
component "==SRC-104 RAGFlow 生命周期探针\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 校验 RAGFlow 数据集状态与可用性。" <<Feat_degrade_nfSrc_ragflowProbe>> as Feat_degrade_nfSrc_ragflowProbe
component "==SRC-102 评测闸门\\n\\nsrc/services/evaluation-gate.js — 本地发布策略门禁，判定是否阻断应答。" <<Feat_degrade_nfSrc_evaluationGate>> as Feat_degrade_nfSrc_evaluationGate
component "==SRC-105 运营人员控制台\\n\\nsrc/ui/operator.html — 运营人员单页控制台。" <<Feat_degrade_nfSrc_operatorUi>> as Feat_degrade_nfSrc_operatorUi
component "==SRC-106 告警状态存储\\n\\nsrc/domain/store.js — 本链侧的告警与状态快照存储单元。" <<Feat_degrade_nfSrc_storeAlert>> as Feat_degrade_nfSrc_storeAlert

Feat_degrade_nfSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfSrc_knowledgeAlert : <color:#15803d>查询空库告警
Feat_degrade_nfSrc_knowledgeAlert .[#15803d,thickness=2].> Feat_degrade_nfSrc_evaluationGate : <color:#15803d>提交发布判定
Feat_degrade_nfSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfSrc_ragflowProbe : <color:#15803d>探测数据集状态
Feat_degrade_nfSrc_evaluationGate .[#15803d,thickness=2].> Feat_degrade_nfSrc_storeAlert : <color:#15803d>读取告警快照
@enduml
`;case`carrier001F`:return`@startuml
title "数据载体全景 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fCvt_normalize>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fIn_chatMessage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fOut_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==CVT-001 提问归一化转换器\\n\\nsrc/domain/normalize.js — 覆盖 微信原始报文→IN-001 与 POD-001→OUT-001 两组映射。" <<Feat_answer_fCvt_normalize>> as Feat_answer_fCvt_normalize
rectangle "==IN-001 客户提问入参\\n\\nsrc/domain/normalize.js — 企业微信回调解密后归一化的提问。" <<Feat_answer_fIn_chatMessage>> as Feat_answer_fIn_chatMessage
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store
rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer

Feat_answer_fIn_chatMessage .[#64748b,thickness=2].> Feat_answer_fBiz_query : <color:#64748b>转换为检索查询
Feat_answer_fBiz_query .[#3b82f6,thickness=2].> Feat_answer_fPod_ticket : <color:#3b82f6>低置信度落工单
Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
Feat_answer_fDao_store .[#3b82f6,thickness=2].> Feat_answer_fOut_answer : <color:#3b82f6>查询答复内容
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fIn_chatMessage : <color:#0ea5e9>负责 报文→IN-001 映射
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fOut_answer : <color:#0ea5e9>负责 POD-001→OUT-001 映射
@enduml
`;case`carrier001NF`:return`@startuml
title "数据载体全景 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfIn_probeQuery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfCvt_probe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfBiz_probeResult>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==IN-101 状态探测入参\\n\\nsrc/routes/integration-routes.js — 控制台发起的集成状态查询。" <<Feat_degrade_nfIn_probeQuery>> as Feat_degrade_nfIn_probeQuery
rectangle "==CVT-101 探测结果转换器\\n\\nsrc/services/knowledge-alert-service.js — 覆盖 BIZ-101→OUT-101 与 BIZ-101→POD-101 两组映射。" <<Feat_degrade_nfCvt_probe>> as Feat_degrade_nfCvt_probe
rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status
database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert

Feat_degrade_nfIn_probeQuery .[#64748b,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#64748b>转换为探测结果
Feat_degrade_nfBiz_probeResult .[#64748b,thickness=2].> Feat_degrade_nfPod_alert : <color:#64748b>异常转告警实体
Feat_degrade_nfBiz_probeResult .[#3b82f6,thickness=2].> Feat_degrade_nfOut_status : <color:#3b82f6>渲染状态载荷
Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#0ea5e9>负责 BIZ-101→OUT-101 映射
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfPod_alert : <color:#0ea5e9>负责 BIZ-101→POD-101 映射
@enduml
`;case`erm001F`:return`@startuml
title "数据模型全景 · Feature-001-F 工单结构"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store

Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
@enduml
`;case`erm001NF`:return`@startuml
title "数据模型全景 · Feature-001-NF 告警结构"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert

Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
@enduml
`;case`stateMain`:return`@startuml
title "I 环 · 业务状态主干"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<St_received>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_retrieving>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_answering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==已接收" <<St_received>> as St_received
rectangle "==检索中" <<St_retrieving>> as St_retrieving
rectangle "==应答中" <<St_answering>> as St_answering
rectangle "==已答复" <<St_answered>> as St_answered

St_received .[#8D8D8D,thickness=2].> St_retrieving : <color:#8D8D8D>发起检索
St_retrieving .[#8D8D8D,thickness=2].> St_answering : <color:#8D8D8D>置信度达标
St_answering .[#8D8D8D,thickness=2].> St_answered : <color:#8D8D8D>答复已下发
@enduml
`;case`stateBranchHuman`:return`@startuml
title "I 环 · 业务状态分支 · 转人工"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<St_retrieving>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<St_waitingHuman>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==检索中" <<St_retrieving>> as St_retrieving
rectangle "==待人工" <<St_waitingHuman>> as St_waitingHuman

St_retrieving .[#8D8D8D,thickness=2].> St_waitingHuman : <color:#8D8D8D>置信度不足
@enduml
`;case`index`:return`@startuml
title "美妆客服服务 · 架构总览"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_f>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nf>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Feature-001-F 知识应答能力\\n\\n按业务能力切分。交付边界：客户在企业微信提问美妆问题，能得到基于知识库的专业答复。所属愿景：让美妆咨询有据可依。" <<Feat_answer_f>> as Feat_answer_f
rectangle "==Feature-001-NF 极端场景保障\\n\\n按极端场景切分。交付边界：知识库为空、RAGFlow 超时、LLM 不可用三类场景下，运营人员与客户都能及时察觉并知道下一步。所属愿景：让美妆咨询有据可依。" <<Feat_degrade_nf>> as Feat_degrade_nf
@enduml
`;case`chain001F-us`:return`@startuml
title "US 视图 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_ask>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
@enduml
`;case`chain001NF-us`:return`@startuml
title "US 视图 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
@enduml
`;case`chain001F-f`:return`@startuml
title "能力清单 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_ask>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fF_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fF_retrieval>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
rectangle "==F-001 应答编排能力\\n\\n决定自动应答还是转人工，串联检索与策略校验。" <<Feat_answer_fF_answer>> as Feat_answer_fF_answer
rectangle "==F-002 知识检索能力\\n\\n从 RAGFlow 检索候选知识并按置信度排序。" <<Feat_answer_fF_retrieval>> as Feat_answer_fF_retrieval

Feat_answer_fUs_ask .[#0ea5e9,thickness=2].> Feat_answer_fF_answer : <color:#0ea5e9>要求
Feat_answer_fUs_lowConfidence .[#0ea5e9,thickness=2].> Feat_answer_fF_retrieval : <color:#0ea5e9>要求
@enduml
`;case`chain001NF-nf`:return`@startuml
title "场景清单 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
rectangle "==NF-101 知识库为零条时状态可见\\n\\n场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。" <<Feat_degrade_nfNf_kbEmpty>> as Feat_degrade_nfNf_kbEmpty
rectangle "==NF-102 RAGFlow 超 8 秒时客户可感知\\n\\n场景：RAGFlow 响应超时。表现：超过 8 秒下发带说明的提示，客服不必反复刷新。角色：客户。" <<Feat_degrade_nfNf_ragTimeout>> as Feat_degrade_nfNf_ragTimeout
rectangle "==NF-103 LLM 不可用时自动转人工\\n\\n场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。" <<Feat_degrade_nfNf_llmDown>> as Feat_degrade_nfNf_llmDown

Feat_degrade_nfUs_kbEmpty .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_kbEmpty : <color:#0ea5e9>要求
Feat_degrade_nfUs_ragTimeout .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_ragTimeout : <color:#0ea5e9>要求
Feat_degrade_nfUs_llmDown .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_llmDown : <color:#0ea5e9>要求
@enduml
`;case`chain001F-i-goal`:return`@startuml
title "I 环 · 业务目标 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-001 业务目标\\n\\n客户提问后得到有据可依的答复，或明确被转人工。" <<Feat_answer_fI_goal>> as Feat_answer_fI_goal
@enduml
`;case`chain001F-i-step`:return`@startuml
title "I 环 · 业务步骤 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fI_step>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-003 业务步骤\\n\\n主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。" <<Feat_answer_fI_step>> as Feat_answer_fI_step
@enduml
`;case`chain001NF-i-goal`:return`@startuml
title "I 环 · 业务目标 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-101 业务目标\\n\\n三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。" <<Feat_degrade_nfI_goal>> as Feat_degrade_nfI_goal
@enduml
`;case`chain001NF-i-step`:return`@startuml
title "I 环 · 场景判定步骤 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfI_step>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-102 场景判定逻辑\\n\\n主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 → 分发对应提示或工单。" <<Feat_degrade_nfI_step>> as Feat_degrade_nfI_step
@enduml
`;case`chain001F-ui`:return`@startuml
title "UI 环 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUi_interaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==UI-001 企业微信会话交互\\n\\n客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。" <<Feat_answer_fUi_interaction>> as Feat_answer_fUi_interaction
rectangle "==UI-002 答复信息设计\\n\\n展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。" <<Feat_answer_fUi_information>> as Feat_answer_fUi_information
@enduml
`;case`chain001NF-ui`:return`@startuml
title "UI 环 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUi_notice>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==UI-101 控制台状态提示\\n\\n展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。" <<Feat_degrade_nfUi_status>> as Feat_degrade_nfUi_status
rectangle "==UI-102 极端场景提示\\n\\n会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。" <<Feat_degrade_nfUi_notice>> as Feat_degrade_nfUi_notice
@enduml
`;case`seq001F-answer`:return`@startuml
title "Feature-001-F 主干时序 · 客户提问到答复"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_edgeApi_chatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_coreStep_answerLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_ragflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fLane_edgeApi_chatCallback>> as Feat_answer_fLane_edgeApi_chatCallback
rectangle "==I-003 业务步骤（应答泳道）\\n\\n编排、检索、校验、生成答复的领域环节。" <<Feat_answer_fLane_coreStep_answerLane>> as Feat_answer_fLane_coreStep_answerLane
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fSrc_answerOrchestrator>> as Feat_answer_fSrc_answerOrchestrator
component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fSrc_replyPolicy>> as Feat_answer_fSrc_replyPolicy
component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问。" <<Feat_answer_fSrc_ragflowKnowledge>> as Feat_answer_fSrc_ragflowKnowledge
component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fSrc_handoffService>> as Feat_answer_fSrc_handoffService

Feat_answer_fLane_clientActor_customer .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>企业微信提问
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fSrc_answerOrchestrator : <color:#8D8D8D>分发归一化消息
Feat_answer_fSrc_answerOrchestrator .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>请求应答
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>检索候选知识
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>返回候选知识
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fSrc_replyPolicy : <color:#8D8D8D>校验置信度
Feat_answer_fSrc_replyPolicy .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>达标放行
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>返回答复
@enduml
`;case`seq001F-branch-low-confidence`:return`@startuml
title "Feature-001-F 分支 · 置信度不足转人工"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_answer_fSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fSrc_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fSrc_replyPolicy>> as Feat_answer_fSrc_replyPolicy
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fSrc_answerOrchestrator>> as Feat_answer_fSrc_answerOrchestrator
component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fSrc_handoffService>> as Feat_answer_fSrc_handoffService
component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fSrc_store>> as Feat_answer_fSrc_store
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer

Feat_answer_fSrc_replyPolicy .[#8D8D8D,thickness=2].> Feat_answer_fSrc_answerOrchestrator : <color:#8D8D8D>置信度不足
Feat_answer_fSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fSrc_handoffService : <color:#15803d>转人工
Feat_answer_fSrc_handoffService .[#15803d,thickness=2].> Feat_answer_fSrc_store : <color:#15803d>持久化工单
Feat_answer_fSrc_store .[#8D8D8D,thickness=2].> Feat_answer_fLane_clientActor_customer : <color:#8D8D8D>告知等待人工
@enduml
`;case`dfd001F-answer`:return`@startuml
title "DFD 全景 · Feature-001-F 应答数据流"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUi_interaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fIn_chatMessage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fOut_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==UI-001 企业微信会话交互\\n\\n客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。" <<Feat_answer_fUi_interaction>> as Feat_answer_fUi_interaction
rectangle "==IN-001 客户提问入参\\n\\nsrc/domain/normalize.js — 企业微信回调解密后归一化的提问。" <<Feat_answer_fIn_chatMessage>> as Feat_answer_fIn_chatMessage
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store
rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer
rectangle "==UI-002 答复信息设计\\n\\n展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。" <<Feat_answer_fUi_information>> as Feat_answer_fUi_information

Feat_answer_fUi_interaction .[#3b82f6,thickness=2].> Feat_answer_fIn_chatMessage : <color:#3b82f6>提交提问
Feat_answer_fIn_chatMessage .[#64748b,thickness=2].> Feat_answer_fBiz_query : <color:#64748b>转换为检索查询
Feat_answer_fBiz_query .[#3b82f6,thickness=2].> Feat_answer_fPod_ticket : <color:#3b82f6>低置信度落工单
Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
Feat_answer_fDao_store .[#3b82f6,thickness=2].> Feat_answer_fOut_answer : <color:#3b82f6>查询答复内容
Feat_answer_fOut_answer .[#3b82f6,thickness=2].> Feat_answer_fUi_information : <color:#3b82f6>渲染答复
@enduml
`;case`seq001NF-degrade`:return`@startuml
title "Feature-001-NF 主干时序 · 场景判定与提示"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edgeApi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreStep_probeLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfSrc_evaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUi_notice>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfLane_edgeApi_status>> as Feat_degrade_nfLane_edgeApi_status
rectangle "==I-102 场景判定逻辑（判定泳道）\\n\\n知识条目、响应耗时、模型可用性的判定环节。" <<Feat_degrade_nfLane_coreStep_probeLane>> as Feat_degrade_nfLane_coreStep_probeLane
rectangle "==RAGFlow\\n\\n检索与知识库服务，超时或不可用即触发本链场景。" <<Feat_degrade_nfLane_extExt_ragflow>> as Feat_degrade_nfLane_extExt_ragflow
component "==SRC-102 评测闸门\\n\\nsrc/services/evaluation-gate.js — 本地发布策略门禁，判定是否阻断应答。" <<Feat_degrade_nfSrc_evaluationGate>> as Feat_degrade_nfSrc_evaluationGate
rectangle "==UI-102 极端场景提示\\n\\n会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。" <<Feat_degrade_nfUi_notice>> as Feat_degrade_nfUi_notice

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_edgeApi_status : <color:#8D8D8D>查询集成状态
Feat_degrade_nfLane_edgeApi_status .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>发起探测
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_extExt_ragflow : <color:#8D8D8D>探测数据集可用性
Feat_degrade_nfLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>返回探测结论
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfSrc_evaluationGate : <color:#8D8D8D>提交发布判定
Feat_degrade_nfSrc_evaluationGate .[#8D8D8D,thickness=2].> Feat_degrade_nfUi_notice : <color:#8D8D8D>下发场景提示
@enduml
`;case`dfd001NF-probe`:return`@startuml
title "DFD 全景 · Feature-001-NF 探测数据流"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfIn_probeQuery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfBiz_probeResult>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==IN-101 状态探测入参\\n\\nsrc/routes/integration-routes.js — 控制台发起的集成状态查询。" <<Feat_degrade_nfIn_probeQuery>> as Feat_degrade_nfIn_probeQuery
rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status
rectangle "==UI-101 控制台状态提示\\n\\n展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。" <<Feat_degrade_nfUi_status>> as Feat_degrade_nfUi_status
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfIn_probeQuery : <color:#8D8D8D>构造探测入参
Feat_degrade_nfIn_probeQuery .[#64748b,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#64748b>转换为探测结果
Feat_degrade_nfBiz_probeResult .[#3b82f6,thickness=2].> Feat_degrade_nfOut_status : <color:#3b82f6>渲染状态载荷
Feat_degrade_nfOut_status .[#3b82f6,thickness=2].> Feat_degrade_nfUi_status : <color:#3b82f6>显示条目数与异常提示
Feat_degrade_nfBiz_probeResult .[#64748b,thickness=2].> Feat_degrade_nfPod_alert : <color:#64748b>异常转告警实体
Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
@enduml
`;case`seq001F-i-step-lanes`:return`@startuml
title "I 环 · 业务步骤泳道流程 · Feature-001-F"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_edgeApi_chatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_coreStep_answerLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_coreI_stepLaneStep>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_coreI_stepLaneSearch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fLane_edgeApi_chatCallback>> as Feat_answer_fLane_edgeApi_chatCallback
rectangle "==I-003 业务步骤（应答泳道）\\n\\n编排、检索、校验、生成答复的领域环节。" <<Feat_answer_fLane_coreStep_answerLane>> as Feat_answer_fLane_coreStep_answerLane
rectangle "==I-005 校验与生成环节\\n\\n按置信度与风险阈值判定放行或转人工，并生成答复正文。" <<Feat_answer_fLane_coreI_stepLaneStep>> as Feat_answer_fLane_coreI_stepLaneStep
rectangle "==I-004 检索环节\\n\\n向 RAGFlow 发起检索并接收候选知识。" <<Feat_answer_fLane_coreI_stepLaneSearch>> as Feat_answer_fLane_coreI_stepLaneSearch

Feat_answer_fLane_clientActor_customer .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>①提出问题
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>②归一化并派发
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreI_stepLaneSearch : <color:#8D8D8D>③检索候选知识
Feat_answer_fLane_coreI_stepLaneSearch .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>④候选返回
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreI_stepLaneStep : <color:#8D8D8D>⑤置信度校验
Feat_answer_fLane_coreI_stepLaneStep .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>⑥生成答复
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fLane_clientActor_customer : <color:#8D8D8D>⑦答复送达
@enduml
`;case`seq001NF-i-step-lanes`:return`@startuml
title "I 环 · 场景判定泳道流程 · Feature-001-NF"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edgeApi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreStep_probeLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreI_stepLaneKbCheck>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreI_stepLaneLlmCheck>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfLane_edgeApi_status>> as Feat_degrade_nfLane_edgeApi_status
rectangle "==I-102 场景判定逻辑（判定泳道）\\n\\n知识条目、响应耗时、模型可用性的判定环节。" <<Feat_degrade_nfLane_coreStep_probeLane>> as Feat_degrade_nfLane_coreStep_probeLane
rectangle "==I-103 条目数判定\\n\\n判定知识库当前条目数，为零时标记空库场景。" <<Feat_degrade_nfLane_coreI_stepLaneKbCheck>> as Feat_degrade_nfLane_coreI_stepLaneKbCheck
rectangle "==I-104 响应耗时判定\\n\\n判定 RAGFlow 响应是否超过 8 秒阈值。" <<Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck>> as Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck
rectangle "==I-105 模型可用性判定\\n\\n判定模型服务调用结果，失败时标记转人工场景。" <<Feat_degrade_nfLane_coreI_stepLaneLlmCheck>> as Feat_degrade_nfLane_coreI_stepLaneLlmCheck

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_edgeApi_status : <color:#8D8D8D>①查询状态
Feat_degrade_nfLane_edgeApi_status .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>②发起探测
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreI_stepLaneKbCheck : <color:#8D8D8D>③判定条目数
Feat_degrade_nfLane_coreI_stepLaneKbCheck .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck : <color:#8D8D8D>④判定响应耗时
Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreI_stepLaneLlmCheck : <color:#8D8D8D>⑤判定模型可用性
Feat_degrade_nfLane_coreI_stepLaneLlmCheck .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_operatorActor_ops : <color:#8D8D8D>⑥下发提示或转人工
@enduml
`;case`seq001F-api-chat`:return`@startuml
title "API 泳道时序 · Feature-001-F 提交提问"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_edgeApi_chatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_coreStep_answerLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fLane_edgeApi_chatCallback>> as Feat_answer_fLane_edgeApi_chatCallback
rectangle "==I-003 业务步骤（应答泳道）\\n\\n编排、检索、校验、生成答复的领域环节。" <<Feat_answer_fLane_coreStep_answerLane>> as Feat_answer_fLane_coreStep_answerLane
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow

Feat_answer_fLane_clientActor_customer .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>POST /wechat/callback
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>触发应答
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>检索知识
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>返回候选知识
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>返回答复
@enduml
`;case`seq001NF-api-status`:return`@startuml
title "API 泳道时序 · Feature-001-NF 查询集成状态"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edgeApi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreStep_probeLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfLane_edgeApi_status>> as Feat_degrade_nfLane_edgeApi_status
rectangle "==I-102 场景判定逻辑（判定泳道）\\n\\n知识条目、响应耗时、模型可用性的判定环节。" <<Feat_degrade_nfLane_coreStep_probeLane>> as Feat_degrade_nfLane_coreStep_probeLane
rectangle "==RAGFlow\\n\\n检索与知识库服务，超时或不可用即触发本链场景。" <<Feat_degrade_nfLane_extExt_ragflow>> as Feat_degrade_nfLane_extExt_ragflow

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_edgeApi_status : <color:#8D8D8D>GET /integration/status
Feat_degrade_nfLane_edgeApi_status .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>发起探测
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_extExt_ragflow : <color:#8D8D8D>探测数据集
Feat_degrade_nfLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>返回结论
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
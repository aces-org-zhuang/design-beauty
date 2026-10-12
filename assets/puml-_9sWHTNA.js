var e=e=>{switch(e){case`dfd001F-src001-1`:return`@startuml
title "SRC 环 · Feature-001-F · SRC-001-DFD-001 提问进入数据流"
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

skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_001>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fIn_chatMessage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fCvt_normalize>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-001 微信客服回调入口\\n\\nsrc/routes/wechat-kf-routes.js — 接收企业微信加密回调并解密分发。" <<Feat_answer_fUs_askI_001Ui_001Src_001>> as Feat_answer_fUs_askI_001Ui_001Src_001
rectangle "==IN-001 客户提问入参\\n\\nsrc/domain/normalize.js — 企业微信回调解密后归一化的提问。" <<Feat_answer_fIn_chatMessage>> as Feat_answer_fIn_chatMessage
rectangle "==CVT-001 提问归一化转换器\\n\\nsrc/domain/normalize.js — 覆盖 微信原始报文→IN-001 与 POD-001→OUT-001 两组映射。" <<Feat_answer_fCvt_normalize>> as Feat_answer_fCvt_normalize
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query

Feat_answer_fUs_askI_001Ui_001Src_001 .[#8D8D8D,thickness=2].> Feat_answer_fIn_chatMessage : <color:#8D8D8D>解密产出 IN-001
Feat_answer_fIn_chatMessage .[#8D8D8D,thickness=2].> Feat_answer_fCvt_normalize : <color:#8D8D8D>归一化
Feat_answer_fCvt_normalize .[#8D8D8D,thickness=2].> Feat_answer_fBiz_query : <color:#8D8D8D>转为 BIZ-001
@enduml
`;case`dfd001F-src002-1`:return`@startuml
title "SRC 环 · Feature-001-F · SRC-002-DFD-001 编排分发数据流"
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

skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_002>>{
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
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 跨阶段编排：自 I-001 入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属 UI-001 入口分发。" <<Feat_answer_fUs_askI_001Ui_001Src_002>> as Feat_answer_fUs_askI_001Ui_001Src_002
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket

Feat_answer_fBiz_query .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_002 : <color:#8D8D8D>查询进入编排
Feat_answer_fUs_askI_001Ui_001Src_002 .[#8D8D8D,thickness=2].> Feat_answer_fPod_ticket : <color:#8D8D8D>低置信度落工单
@enduml
`;case`dfd001F-src003-1`:return`@startuml
title "SRC 环 · Feature-001-F · SRC-003-DFD-001 应答生成数据流"
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

skinparam component<<Feat_answer_fUs_askI_003Ui_003Src_003>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fOut_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-003 知识应答循环\\n\\nsrc/services/knowledge-answer-loop-service.js — 检索增强的应答循环。" <<Feat_answer_fUs_askI_003Ui_003Src_003>> as Feat_answer_fUs_askI_003Ui_003Src_003
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer

Feat_answer_fBiz_query .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003Ui_003Src_003 : <color:#8D8D8D>候选进入应答循环
Feat_answer_fUs_askI_003Ui_003Src_003 .[#8D8D8D,thickness=2].> Feat_answer_fOut_answer : <color:#8D8D8D>组装 OUT-001
@enduml
`;case`dfd001F-src004-1`:return`@startuml
title "SRC 环 · Feature-001-F · SRC-004-DFD-001 置信度判定数据流"
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

skinparam component<<Feat_answer_fUs_askI_002Ui_002Src_004>>{
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
component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fUs_askI_002Ui_002Src_004>> as Feat_answer_fUs_askI_002Ui_002Src_004
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket

Feat_answer_fBiz_query .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_002Ui_002Src_004 : <color:#8D8D8D>查询置信度判定
Feat_answer_fUs_askI_002Ui_002Src_004 .[#8D8D8D,thickness=2].> Feat_answer_fPod_ticket : <color:#8D8D8D>不足时标记工单
@enduml
`;case`dfd001F-src005-1`:return`@startuml
title "SRC 环 · Feature-001-F · SRC-005-DFD-001 检索数据流"
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

skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_005>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问，服务 I-001-2 检索步骤。" <<Feat_answer_fUs_askI_001Ui_001Src_005>> as Feat_answer_fUs_askI_001Ui_001Src_005
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow

Feat_answer_fBiz_query .[#3b82f6,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_005 : <color:#3b82f6>发起检索
Feat_answer_fUs_askI_001Ui_001Src_005 .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>请求 RAGFlow
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_005 : <color:#8D8D8D>返回候选
@enduml
`;case`dfd001F-src006-1`:return`@startuml
title "SRC 环 · Feature-001-F · SRC-006-DFD-001 工单数据流"
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

skinparam component<<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>>{
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
component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store

Feat_answer_fPod_ticket .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006 : <color:#8D8D8D>工单数据
Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006 .[#8D8D8D,thickness=2].> Feat_answer_fDao_store : <color:#8D8D8D>写入工单
@enduml
`;case`dfd001F-src007-1`:return`@startuml
title "SRC 环 · Feature-001-F · SRC-007-DFD-001 存储读写数据流"
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

skinparam component<<Feat_answer_fUs_askI_003Ui_003Src_007>>{
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
component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fUs_askI_003Ui_003Src_007>> as Feat_answer_fUs_askI_003Ui_003Src_007
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store
rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer

Feat_answer_fPod_ticket .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003Ui_003Src_007 : <color:#8D8D8D>读取工单
Feat_answer_fUs_askI_003Ui_003Src_007 .[#8D8D8D,thickness=2].> Feat_answer_fDao_store : <color:#8D8D8D>落盘
Feat_answer_fDao_store .[#3b82f6,thickness=2].> Feat_answer_fOut_answer : <color:#3b82f6>读出答复内容
@enduml
`;case`dfd001NF-src101-1`:return`@startuml
title "SRC 环 · Feature-001-NF · SRC-101-DFD-001 状态查询数据流"
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

skinparam component<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfIn_probeQuery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-101 集成状态路由\\n\\nsrc/routes/integration-routes.js — 功能概览与集成状态查询。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101
rectangle "==IN-101 状态探测入参\\n\\nsrc/routes/integration-routes.js — 控制台发起的集成状态查询。" <<Feat_degrade_nfIn_probeQuery>> as Feat_degrade_nfIn_probeQuery
rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status

Feat_degrade_nfIn_probeQuery .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101 : <color:#8D8D8D>入参进入
Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101 .[#8D8D8D,thickness=2].> Feat_degrade_nfOut_status : <color:#8D8D8D>产出 OUT-101
@enduml
`;case`dfd001NF-src102-1`:return`@startuml
title "SRC 环 · Feature-001-NF · SRC-102-DFD-001 发布判定数据流"
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

skinparam component<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102>>{
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
component "==SRC-102 评测闸门\\n\\nsrc/services/evaluation-gate.js — 本地发布策略门禁，判定是否阻断应答。" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102
rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert

Feat_degrade_nfBiz_probeResult .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102 : <color:#8D8D8D>探测结论判定
Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102 .[#8D8D8D,thickness=2].> Feat_degrade_nfPod_alert : <color:#8D8D8D>异常转告警
@enduml
`;case`dfd001NF-src103-1`:return`@startuml
title "SRC 环 · Feature-001-NF · SRC-103-DFD-001 空库告警数据流"
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

skinparam component<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103>>{
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
component "==SRC-103 知识告警\\n\\nsrc/services/knowledge-alert-service.js — 暴露知识新鲜度与空库问题。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103
rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert

Feat_degrade_nfBiz_probeResult .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103 : <color:#8D8D8D>暴露空库
Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103 .[#8D8D8D,thickness=2].> Feat_degrade_nfPod_alert : <color:#8D8D8D>写入告警
@enduml
`;case`dfd001NF-src104-1`:return`@startuml
title "SRC 环 · Feature-001-NF · SRC-104-DFD-001 探针数据流"
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

skinparam component<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfBiz_probeResult>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-104 RAGFlow 生命周期探针\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 校验 RAGFlow 数据集状态与可用性。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104
rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow

Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>探测数据集
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 : <color:#8D8D8D>返回结论
Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 .[#8D8D8D,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#8D8D8D>产出 BIZ-101
@enduml
`;case`dfd001NF-src105-1`:return`@startuml
title "SRC 环 · Feature-001-NF · SRC-105-DFD-001 控制台渲染数据流"
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

skinparam component<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-105 运营人员控制台\\n\\nsrc/ui/operator.html — 运营人员单页控制台。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105
rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status
rectangle "==UI-112-信息设计-001 空库提示信息\\n\\n字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1

Feat_degrade_nfOut_status .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105 : <color:#8D8D8D>状态载荷
Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105 .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1 : <color:#8D8D8D>呈现提示
@enduml
`;case`dfd001NF-src106-1`:return`@startuml
title "SRC 环 · Feature-001-NF · SRC-106-DFD-001 告警快照数据流"
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

skinparam component<<Feat_degrade_nfUs_llmDownI_132Ui_132Src_106>>{
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
component "==SRC-106 告警状态存储\\n\\nsrc/domain/store.js — 本链侧的告警与状态快照存储单元。" <<Feat_degrade_nfUs_llmDownI_132Ui_132Src_106>> as Feat_degrade_nfUs_llmDownI_132Ui_132Src_106
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert

Feat_degrade_nfPod_alert .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132Ui_132Src_106 : <color:#8D8D8D>告警数据
Feat_degrade_nfUs_llmDownI_132Ui_132Src_106 .[#8D8D8D,thickness=2].> Feat_degrade_nfDao_alert : <color:#8D8D8D>写入快照
@enduml
`;case`dfd002F-src201-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-201-DFD-001 素材接入数据流"
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

skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_201>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fIn_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Feat_knowledge_fLane_opsActor_operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-201 素材路由\\n\\nsrc/routes/material-routes.js — 美妆素材接入接口。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_201>> as Feat_knowledge_fUs_scanI_211Ui_211Src_201
rectangle "==IN-201 素材入参\\n\\nsrc/routes/material-routes.js — 上传素材的请求载荷。" <<Feat_knowledge_fIn_material>> as Feat_knowledge_fIn_material
person "==运营人员" <<Feat_knowledge_fLane_opsActor_operator>> as Feat_knowledge_fLane_opsActor_operator

Feat_knowledge_fLane_opsActor_operator .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_201 : <color:#8D8D8D>上传素材
Feat_knowledge_fUs_scanI_211Ui_211Src_201 .[#3b82f6,thickness=2].> Feat_knowledge_fIn_material : <color:#3b82f6>产出 IN-201
@enduml
`;case`dfd002F-src202-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-202-DFD-001 知识状态数据流"
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

skinparam component<<Feat_knowledge_fUs_governI_221Ui_221Src_202>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fOut_knowledgeStatus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-202 知识库路由\\n\\nsrc/routes/knowledge-routes.js — 知识扫描、同步与生命周期接口。" <<Feat_knowledge_fUs_governI_221Ui_221Src_202>> as Feat_knowledge_fUs_governI_221Ui_221Src_202
database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry
rectangle "==OUT-201 知识状态出参视图\\n\\nsrc/routes/knowledge-routes.js — 面向控制台的扫描与治理状态载荷。" <<Feat_knowledge_fOut_knowledgeStatus>> as Feat_knowledge_fOut_knowledgeStatus

Feat_knowledge_fDao_registry .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221Src_202 : <color:#8D8D8D>读取登记
Feat_knowledge_fUs_governI_221Ui_221Src_202 .[#8D8D8D,thickness=2].> Feat_knowledge_fOut_knowledgeStatus : <color:#8D8D8D>产出 OUT-201
@enduml
`;case`dfd002F-src203-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-203-DFD-001 素材转换数据流"
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

skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_203>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fIn_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fCvt_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-203 素材服务\\n\\nsrc/services/material-service.js — 素材接入规则。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_203>> as Feat_knowledge_fUs_scanI_211Ui_211Src_203
rectangle "==IN-201 素材入参\\n\\nsrc/routes/material-routes.js — 上传素材的请求载荷。" <<Feat_knowledge_fIn_material>> as Feat_knowledge_fIn_material
rectangle "==CVT-201 素材转换器\\n\\nsrc/services/material-service.js — 覆盖 素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。" <<Feat_knowledge_fCvt_material>> as Feat_knowledge_fCvt_material
rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate

Feat_knowledge_fIn_material .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_203 : <color:#8D8D8D>入参校验
Feat_knowledge_fUs_scanI_211Ui_211Src_203 .[#8D8D8D,thickness=2].> Feat_knowledge_fCvt_material : <color:#8D8D8D>交给转换
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#0ea5e9>转为 BIZ-201
@enduml
`;case`dfd002F-src204-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-204-DFD-001 批量接入数据流"
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

skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_204>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Feat_knowledge_fLane_opsActor_operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_203>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-204 素材批处理\\n\\nsrc/services/material-batch-service.js — 批量素材接入。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_204>> as Feat_knowledge_fUs_scanI_211Ui_211Src_204
person "==运营人员" <<Feat_knowledge_fLane_opsActor_operator>> as Feat_knowledge_fLane_opsActor_operator
component "==SRC-203 素材服务\\n\\nsrc/services/material-service.js — 素材接入规则。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_203>> as Feat_knowledge_fUs_scanI_211Ui_211Src_203

Feat_knowledge_fLane_opsActor_operator .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_204 : <color:#8D8D8D>批量上传
Feat_knowledge_fUs_scanI_211Ui_211Src_204 .[#15803d,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_203 : <color:#15803d>逐条接入
@enduml
`;case`dfd002F-src205-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-205-DFD-001 文档登记数据流"
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

skinparam component<<Feat_knowledge_fUs_governI_221Ui_221Src_205>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-205 文档登记簿\\n\\nsrc/services/knowledge-document-registry.js — 跟踪素材与文档标识。" <<Feat_knowledge_fUs_governI_221Ui_221Src_205>> as Feat_knowledge_fUs_governI_221Ui_221Src_205
rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate
rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry

Feat_knowledge_fBiz_candidate .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221Src_205 : <color:#8D8D8D>登记文档标识
Feat_knowledge_fUs_governI_221Ui_221Src_205 .[#8D8D8D,thickness=2].> Feat_knowledge_fPod_document : <color:#8D8D8D>生成 POD-201
Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>写入
@enduml
`;case`dfd002F-src206-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-206-DFD-001 扫描抽取数据流"
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

skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_206>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fLane_extExt_wiki>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-206 知识扫描\\n\\nsrc/services/knowledge-scan-service.js — 发现候选知识。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_206>> as Feat_knowledge_fUs_scanI_211Ui_211Src_206
rectangle "==LLM Wiki\\n\\n生成的 wiki 候选来源。" <<Feat_knowledge_fLane_extExt_wiki>> as Feat_knowledge_fLane_extExt_wiki
rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate

Feat_knowledge_fUs_scanI_211Ui_211Src_206 .[#8D8D8D,thickness=2].> Feat_knowledge_fLane_extExt_wiki : <color:#8D8D8D>读取 wiki 候选
Feat_knowledge_fLane_extExt_wiki .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_206 : <color:#8D8D8D>返回候选
Feat_knowledge_fUs_scanI_211Ui_211Src_206 .[#8D8D8D,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#8D8D8D>产出候选对象
@enduml
`;case`dfd002F-src207-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-207-DFD-001 治理决策数据流"
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

skinparam component<<Feat_knowledge_fUs_governI_221Ui_221Src_207>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-207 知识治理\\n\\nsrc/services/knowledge-governance-service.js — 发布决策与治理。" <<Feat_knowledge_fUs_governI_221Ui_221Src_207>> as Feat_knowledge_fUs_governI_221Ui_221Src_207
rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate
rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document

Feat_knowledge_fBiz_candidate .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221Src_207 : <color:#8D8D8D>候选进入治理
Feat_knowledge_fUs_governI_221Ui_221Src_207 .[#8D8D8D,thickness=2].> Feat_knowledge_fPod_document : <color:#8D8D8D>批准后登记
@enduml
`;case`dfd002F-src208-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-208-DFD-001 知识同步数据流"
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

skinparam component<<Feat_knowledge_fUs_alertI_231Ui_231Src_208>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fLane_extExt_ragflow2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-208 知识同步\\n\\nsrc/services/knowledge-sync-service.js — 把已批准知识推送到 RAGFlow。" <<Feat_knowledge_fUs_alertI_231Ui_231Src_208>> as Feat_knowledge_fUs_alertI_231Ui_231Src_208
rectangle "==RAGFlow\\n\\n知识库与检索服务。" <<Feat_knowledge_fLane_extExt_ragflow2>> as Feat_knowledge_fLane_extExt_ragflow2

Feat_knowledge_fUs_alertI_231Ui_231Src_208 .[#8D8D8D,thickness=2].> Feat_knowledge_fLane_extExt_ragflow2 : <color:#8D8D8D>推送已批准知识
Feat_knowledge_fLane_extExt_ragflow2 .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231Ui_231Src_208 : <color:#8D8D8D>同步确认
@enduml
`;case`dfd002F-src209-1`:return`@startuml
title "SRC 环 · Feature-002-F · SRC-209-DFD-001 生命周期数据流"
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

skinparam component<<Feat_knowledge_fUs_alertI_232Ui_232Src_209>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-209 知识生命周期视图\\n\\nsrc/services/knowledge-lifecycle-service.js — 知识的晋升与下线。" <<Feat_knowledge_fUs_alertI_232Ui_232Src_209>> as Feat_knowledge_fUs_alertI_232Ui_232Src_209
rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry

Feat_knowledge_fUs_alertI_232Ui_232Src_209 .[#8D8D8D,thickness=2].> Feat_knowledge_fPod_document : <color:#8D8D8D>晋升或下线
Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>更新登记
@enduml
`;case`seq001F-i-001-lanes`:return`@startuml
title "I 环 · Feature-001-F · I-001 泳道流程"
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
skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_001>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001I_001_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001I_001_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001I_001_3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_005>>{
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
component "==SRC-001 微信客服回调入口\\n\\nsrc/routes/wechat-kf-routes.js — 接收企业微信加密回调并解密分发。" <<Feat_answer_fUs_askI_001Ui_001Src_001>> as Feat_answer_fUs_askI_001Ui_001Src_001
rectangle "==I-001-1 归一化提问\\n\\n把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。" <<Feat_answer_fUs_askI_001I_001_1>> as Feat_answer_fUs_askI_001I_001_1
rectangle "==I-001-2 检索候选知识\\n\\n按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。" <<Feat_answer_fUs_askI_001I_001_2>> as Feat_answer_fUs_askI_001I_001_2
rectangle "==I-001-3 候选排序与择优\\n\\n按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。" <<Feat_answer_fUs_askI_001I_001_3>> as Feat_answer_fUs_askI_001I_001_3
component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问，服务 I-001-2 检索步骤。" <<Feat_answer_fUs_askI_001Ui_001Src_005>> as Feat_answer_fUs_askI_001Ui_001Src_005
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow

Feat_answer_fLane_clientActor_customer .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_001 : <color:#8D8D8D>①提交提问
Feat_answer_fUs_askI_001Ui_001Src_001 .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001I_001_1 : <color:#8D8D8D>②解密归一化
Feat_answer_fUs_askI_001I_001_1 .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001I_001_2 : <color:#8D8D8D>③发起检索
Feat_answer_fUs_askI_001I_001_2 .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_005 : <color:#8D8D8D>④请求RAGFlow
Feat_answer_fUs_askI_001Ui_001Src_005 .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>⑤检索
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_005 : <color:#8D8D8D>⑥返回候选
Feat_answer_fUs_askI_001I_001_2 .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001I_001_3 : <color:#8D8D8D>⑦排序择优
@enduml
`;case`seq001F-i-003-lanes`:return`@startuml
title "I 环 · Feature-001-F · I-003 泳道流程"
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

skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_002>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003I_003_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003I_003_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 跨阶段编排：自 I-001 入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属 UI-001 入口分发。" <<Feat_answer_fUs_askI_001Ui_001Src_002>> as Feat_answer_fUs_askI_001Ui_001Src_002
rectangle "==I-003-1 生成答复\\n\\n按候选知识组织答复正文，附来源条目，不加入未验证内容。" <<Feat_answer_fUs_askI_003I_003_1>> as Feat_answer_fUs_askI_003I_003_1
rectangle "==I-003-2 下发答复\\n\\n把答复通过企业微信会话回传给客户，完成本次闭环。" <<Feat_answer_fUs_askI_003I_003_2>> as Feat_answer_fUs_askI_003I_003_2
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer

Feat_answer_fUs_askI_001Ui_001Src_002 .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003I_003_1 : <color:#8D8D8D>①校验通过
Feat_answer_fUs_askI_003I_003_1 .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003I_003_2 : <color:#8D8D8D>②答复就绪
Feat_answer_fUs_askI_003I_003_2 .[#8D8D8D,thickness=2].> Feat_answer_fLane_clientActor_customer : <color:#8D8D8D>③答复送达
@enduml
`;case`seq001F-i-012-lanes`:return`@startuml
title "I 环 · Feature-001-F · I-012 泳道流程"
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

skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_002>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012I_012_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012I_012_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 跨阶段编排：自 I-001 入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属 UI-001 入口分发。" <<Feat_answer_fUs_askI_001Ui_001Src_002>> as Feat_answer_fUs_askI_001Ui_001Src_002
rectangle "==I-012-1 创建人工工单\\n\\n把提问内容、候选摘要与置信度写入工单，供人工接手。" <<Feat_answer_fUs_lowConfidenceI_012I_012_1>> as Feat_answer_fUs_lowConfidenceI_012I_012_1
rectangle "==I-012-2 告知客户等待\\n\\n在会话中告知客户已转人工并给出预计等待，不做内容性答复。" <<Feat_answer_fUs_lowConfidenceI_012I_012_2>> as Feat_answer_fUs_lowConfidenceI_012I_012_2
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer

Feat_answer_fUs_askI_001Ui_001Src_002 .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012I_012_1 : <color:#8D8D8D>①判定转人工
Feat_answer_fUs_lowConfidenceI_012I_012_1 .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012I_012_2 : <color:#8D8D8D>②工单创建
Feat_answer_fUs_lowConfidenceI_012I_012_2 .[#8D8D8D,thickness=2].> Feat_answer_fLane_clientActor_customer : <color:#8D8D8D>③告知等待
@enduml
`;case`seq001NF-i-111-lanes`:return`@startuml
title "I 环 · Feature-001-NF · I-111 泳道流程"
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
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111I_111_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111I_111_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==I-111-1 读取条目数\\n\\n从文档登记簿读取当前知识条目数，不做过滤。" <<Feat_degrade_nfUs_kbEmptyI_111I_111_1>> as Feat_degrade_nfUs_kbEmptyI_111I_111_1
rectangle "==I-111-2 判定零条场景\\n\\n条目数为 0 时判定为空库场景，标记需先补素材。" <<Feat_degrade_nfUs_kbEmptyI_111I_111_2>> as Feat_degrade_nfUs_kbEmptyI_111I_111_2

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111I_111_1 : <color:#8D8D8D>①发起查询
Feat_degrade_nfUs_kbEmptyI_111I_111_1 .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111I_111_2 : <color:#8D8D8D>②判定零条场景
@enduml
`;case`seq001NF-i-121-lanes`:return`@startuml
title "I 环 · Feature-001-NF · I-121 泳道流程"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121I_121_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121I_121_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-121-1 启动超时计时\\n\\n发起检索时同时启动 8 秒计时。" <<Feat_degrade_nfUs_ragTimeoutI_121I_121_1>> as Feat_degrade_nfUs_ragTimeoutI_121I_121_1
rectangle "==I-121-2 判定超时\\n\\n计时到期仍未返回候选知识时判定超时场景。" <<Feat_degrade_nfUs_ragTimeoutI_121I_121_2>> as Feat_degrade_nfUs_ragTimeoutI_121I_121_2
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow

Feat_degrade_nfUs_ragTimeoutI_121I_121_1 .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>①等待 RAGFlow 响应
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_121I_121_2 : <color:#8D8D8D>②到期判定
@enduml
`;case`seq001NF-i-132-lanes`:return`@startuml
title "I 环 · Feature-001-NF · I-132 泳道流程"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132I_132_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132I_132_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_llmDownI_132Ui_132Src_106>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-132-1 生成人工工单\\n\\n把提问内容与失败原因写入工单。" <<Feat_degrade_nfUs_llmDownI_132I_132_1>> as Feat_degrade_nfUs_llmDownI_132I_132_1
rectangle "==I-132-2 告知等待人工\\n\\n在会话中告知已转人工，不返回空白内容。" <<Feat_degrade_nfUs_llmDownI_132I_132_2>> as Feat_degrade_nfUs_llmDownI_132I_132_2
component "==SRC-106 告警状态存储\\n\\nsrc/domain/store.js — 本链侧的告警与状态快照存储单元。" <<Feat_degrade_nfUs_llmDownI_132Ui_132Src_106>> as Feat_degrade_nfUs_llmDownI_132Ui_132Src_106

Feat_degrade_nfUs_llmDownI_132I_132_1 .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132I_132_2 : <color:#8D8D8D>①工单创建完成
Feat_degrade_nfUs_llmDownI_132I_132_2 .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132Ui_132Src_106 : <color:#8D8D8D>②告警落库
@enduml
`;case`seq002F-i-211-lanes`:return`@startuml
title "I 环 · Feature-002-F · I-211 泳道流程"
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

skinparam person<<Feat_knowledge_fLane_opsActor_operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_201>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211I_211_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211I_211_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211I_211_3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_knowledge_fLane_opsActor_operator>> as Feat_knowledge_fLane_opsActor_operator
component "==SRC-201 素材路由\\n\\nsrc/routes/material-routes.js — 美妆素材接入接口。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_201>> as Feat_knowledge_fUs_scanI_211Ui_211Src_201
rectangle "==I-211-1 登记素材\\n\\n把上传的素材登记到文档簿，生成文档标识。" <<Feat_knowledge_fUs_scanI_211I_211_1>> as Feat_knowledge_fUs_scanI_211I_211_1
rectangle "==I-211-2 抽取候选知识\\n\\n从素材正文中抽取可独立回答问题的候选条目。" <<Feat_knowledge_fUs_scanI_211I_211_2>> as Feat_knowledge_fUs_scanI_211I_211_2
rectangle "==I-211-3 提交候选\\n\\n把候选条目提交给治理环节，等待决策。" <<Feat_knowledge_fUs_scanI_211I_211_3>> as Feat_knowledge_fUs_scanI_211I_211_3

Feat_knowledge_fLane_opsActor_operator .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_201 : <color:#8D8D8D>①上传素材
Feat_knowledge_fUs_scanI_211Ui_211Src_201 .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211I_211_1 : <color:#8D8D8D>②登记素材
Feat_knowledge_fUs_scanI_211I_211_1 .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211I_211_2 : <color:#8D8D8D>③抽取候选
Feat_knowledge_fUs_scanI_211I_211_2 .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211I_211_3 : <color:#8D8D8D>④提交候选
@enduml
`;case`seq002F-i-221-lanes`:return`@startuml
title "I 环 · Feature-002-F · I-221 泳道流程"
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

skinparam person<<Feat_knowledge_fLane_opsActor_operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221I_221_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221I_221_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221I_221_3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_knowledge_fLane_opsActor_operator>> as Feat_knowledge_fLane_opsActor_operator
rectangle "==I-221-1 人工审阅候选\\n\\n展示候选条目供运营人员逐条审阅。" <<Feat_knowledge_fUs_governI_221I_221_1>> as Feat_knowledge_fUs_governI_221I_221_1
rectangle "==I-221-2 记录决策\\n\\n记录批准或驳回，驳回需填写理由。" <<Feat_knowledge_fUs_governI_221I_221_2>> as Feat_knowledge_fUs_governI_221I_221_2
rectangle "==I-221-3 晋升知识\\n\\n批准的候选进入知识库生命周期，进入可检索状态。" <<Feat_knowledge_fUs_governI_221I_221_3>> as Feat_knowledge_fUs_governI_221I_221_3

Feat_knowledge_fLane_opsActor_operator .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221I_221_1 : <color:#8D8D8D>①逐条审阅
Feat_knowledge_fUs_governI_221I_221_1 .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221I_221_2 : <color:#8D8D8D>②记录决策
Feat_knowledge_fUs_governI_221I_221_2 .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221I_221_3 : <color:#8D8D8D>③批准晋升或驳回
@enduml
`;case`seq002F-i-231-lanes`:return`@startuml
title "I 环 · Feature-002-F · I-231 泳道流程"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_231I_231_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231I_231_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fLane_extExt_ragflow2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-231-1 巡检数据集状态\\n\\n定期探测知识库数据集的可用性与新鲜度。" <<Feat_knowledge_fUs_alertI_231I_231_1>> as Feat_knowledge_fUs_alertI_231I_231_1
rectangle "==I-231-2 判定新鲜度异常\\n\\n按更新时间阈值判定是否属于陈旧或异常。" <<Feat_knowledge_fUs_alertI_231I_231_2>> as Feat_knowledge_fUs_alertI_231I_231_2
rectangle "==RAGFlow\\n\\n知识库与检索服务。" <<Feat_knowledge_fLane_extExt_ragflow2>> as Feat_knowledge_fLane_extExt_ragflow2

Feat_knowledge_fUs_alertI_231I_231_1 .[#8D8D8D,thickness=2].> Feat_knowledge_fLane_extExt_ragflow2 : <color:#8D8D8D>①巡检数据集
Feat_knowledge_fLane_extExt_ragflow2 .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231I_231_2 : <color:#8D8D8D>②新鲜度判定
@enduml
`;case`index`:return`@startuml
title "美妆客服服务 · 全部 Feature 导航"
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
skinparam rectangle<<Feat_knowledge_f>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Feature-001-F 知识应答能力\\n\\n按业务能力切分。交付边界：客户在企业微信提问美妆问题，能得到基于知识库的专业答复。所属愿景：让美妆咨询有据可依。" <<Feat_answer_f>> as Feat_answer_f
rectangle "==Feature-001-NF 极端场景保障\\n\\n按极端场景切分。交付边界：知识库为空、RAGFlow 超时、LLM 不可用三类场景下，运营人员与客户都能及时察觉并知道下一步。所属愿景：让美妆咨询有据可依。" <<Feat_degrade_nf>> as Feat_degrade_nf
rectangle "==Feature-002-F 知识运营能力\\n\\n按业务能力切分。交付边界：运营人员能把素材变成可检索知识，并能发现知识陈旧。所属愿景：让美妆咨询有据可依。" <<Feat_knowledge_f>> as Feat_knowledge_f
@enduml
`;case`pano-us`:return`@startuml
title "US 环 · 全部 Feature · 用户故事"
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
skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
  rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
}
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
  rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
  rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
}
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==US-201 素材入库后自动进入候选知识\\n\\n作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan
  rectangle "==US-202 候选知识经我决策后才对外可见\\n\\n作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern
  rectangle "==US-203 知识陈旧时我能收到提示\\n\\n作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert
}

Feat_answer_fUs_ask .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidence : <color:#8D8D8D>[...]
Feat_answer_fUs_lowConfidence .[#15803d,thickness=2].> Feat_answer_fUs_ask : <color:#15803d>持久化工单
Feat_degrade_nfUs_kbEmpty .[#15803d,thickness=2].> Feat_degrade_nfUs_ragTimeout : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeout .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#15803d>读取告警快照
Feat_knowledge_fUs_scan .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_govern : <color:#8D8D8D>[...]
Feat_knowledge_fUs_govern .[#15803d,thickness=2].> Feat_knowledge_fUs_scan : <color:#15803d>触发扫描
Feat_knowledge_fUs_govern .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alert : <color:#8D8D8D>[...]
Feat_knowledge_fUs_alert .[#15803d,thickness=2].> Feat_knowledge_fUs_govern : <color:#15803d>晋升或下线
@enduml
`;case`pano-f`:return`@startuml
title "F 环 · 全部 Feature-NNN-F · 业务能力单元"
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
skinparam rectangle<<Feat_knowledge_fF_ingest>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fF_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==F-001 应答编排能力\\n\\n决定自动应答还是转人工，串联检索与策略校验。" <<Feat_answer_fF_answer>> as Feat_answer_fF_answer
rectangle "==F-002 知识检索能力\\n\\n从 RAGFlow 检索候选知识并按置信度排序。" <<Feat_answer_fF_retrieval>> as Feat_answer_fF_retrieval
rectangle "==F-201 素材接入能力\\n\\n接收素材并登记文档标识，支持单条与批量。" <<Feat_knowledge_fF_ingest>> as Feat_knowledge_fF_ingest
rectangle "==F-202 知识治理能力\\n\\n候选知识的扫描、决策、晋升与下线。" <<Feat_knowledge_fF_govern>> as Feat_knowledge_fF_govern
@enduml
`;case`pano-nf`:return`@startuml
title "NF 环 · 全部 Feature-NNN-NF · 极端场景单元"
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
title "I 环 · 全部 Feature · 阶段性目标"
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

skinparam rectangle<<Feat_answer_fUs_askI_001>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-001 客户提问获得专业答复" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask {
  skinparam RectangleBorderColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_ask>> dashed

  rectangle "==I-001 阶段性目标 · 取得可靠候选知识\\n\\n把客户提问变成可用的候选知识条目。这一阶段做完，就掌握了后续判定所需的事实基础。" <<Feat_answer_fUs_askI_001>> as Feat_answer_fUs_askI_001
  rectangle "==I-002 阶段性目标 · 判定可否自动答复\\n\\n用置信度与风险阈值判断这条候选知识是否足以自动答复。这一阶段决定走自动路径还是转人工。" <<Feat_answer_fUs_askI_002>> as Feat_answer_fUs_askI_002
  rectangle "==I-003 阶段性目标 · 生成并下发答复\\n\\n把通过校验的候选知识组织成答复并送达客户。做到这一步本 US 就完成了。" <<Feat_answer_fUs_askI_003>> as Feat_answer_fUs_askI_003
}
rectangle "US-101 知识库为空时运营人员能看见" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmpty>> dashed

  rectangle "==I-111 阶段性目标 · 读出条目数并判定空库\\n\\n拿到当前知识条目数并判定是否为空库。做到这一步运营人员就知道该补素材还是该查集成。" <<Feat_degrade_nfUs_kbEmptyI_111>> as Feat_degrade_nfUs_kbEmptyI_111
  rectangle "==I-112 阶段性目标 · 把空库显式呈现出来\\n\\n在控制台显式提示条目数为 0，不显示空白列表。做到这一步运营人员就知道要补素材。" <<Feat_degrade_nfUs_kbEmptyI_112>> as Feat_degrade_nfUs_kbEmptyI_112
}
rectangle "US-201 素材入库后自动进入候选知识" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scan>> dashed

  rectangle "==I-211 阶段性目标 · 素材入库并产出候选\\n\\n把上传的素材变成可审阅的候选条目。做到这一步运营人员就有东西可审了。" <<Feat_knowledge_fUs_scanI_211>> as Feat_knowledge_fUs_scanI_211
}
rectangle "US-202 候选知识经我决策后才对外可见" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_govern>> dashed

  rectangle "==I-221 阶段性目标 · 审阅决策并晋升\\n\\n让运营人员逐条审阅候选并决定去留，批准的进入可检索状态。做到这一步 US-202 闭环。" <<Feat_knowledge_fUs_governI_221>> as Feat_knowledge_fUs_governI_221
}
rectangle "US-002 答不准时转人工而非硬答" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidence>> dashed

  rectangle "==I-011 阶段性目标 · 判定进入人工路径\\n\\n确认这条提问不能自动答复，转入人工。做完后客户不再等待系统硬答。" <<Feat_answer_fUs_lowConfidenceI_011>> as Feat_answer_fUs_lowConfidenceI_011
  rectangle "==I-012 阶段性目标 · 生成工单并告知等待\\n\\n创建人工工单承接这条提问，并让客户知道等待。做完后 US-002 完成。" <<Feat_answer_fUs_lowConfidenceI_012>> as Feat_answer_fUs_lowConfidenceI_012
}
rectangle "US-102 RAGFlow 超时时客户不被静默等待" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeout>> dashed

  rectangle "==I-121 阶段性目标 · 计时并判定超时\\n\\n给检索装上 8 秒上限并判定是否超时。做到这一步就知道该不该给客户提示。" <<Feat_degrade_nfUs_ragTimeoutI_121>> as Feat_degrade_nfUs_ragTimeoutI_121
  rectangle "==I-122 阶段性目标 · 告知客户系统在处理\\n\\n在会话中告知系统仍在处理，不让客户反复刷新。做到这一步 US-102 闭环。" <<Feat_degrade_nfUs_ragTimeoutI_122>> as Feat_degrade_nfUs_ragTimeoutI_122
}
rectangle "US-203 知识陈旧时我能收到提示" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alert>> dashed

  rectangle "==I-231 阶段性目标 · 巡检并判定新鲜度\\n\\n定期探测数据集并按更新时间阈值判定是否陈旧。做到这一步就知道哪些条目需要修。" <<Feat_knowledge_fUs_alertI_231>> as Feat_knowledge_fUs_alertI_231
  rectangle "==I-232 阶段性目标 · 上报告警并呈现\\n\\n把问题条目写入告警并在控制台列出。做到这一步运营人员能在客户问到之前修好。" <<Feat_knowledge_fUs_alertI_232>> as Feat_knowledge_fUs_alertI_232
}
rectangle "US-103 LLM 不可用时转人工而非静默失败" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDown>> dashed

  rectangle "==I-131 阶段性目标 · 识别模型不可用并转人工\\n\\n识别模型调用失败并判定转人工。做到这一步客户不会再收到空白回复。" <<Feat_degrade_nfUs_llmDownI_131>> as Feat_degrade_nfUs_llmDownI_131
  rectangle "==I-132 阶段性目标 · 建单并告知等待\\n\\n生成人工工单并告知客户等待，不返回空白内容。做到这一步 US-103 闭环。" <<Feat_degrade_nfUs_llmDownI_132>> as Feat_degrade_nfUs_llmDownI_132
}

Feat_answer_fUs_askI_001 .[#0ea5e9,thickness=2].> Feat_answer_fUs_askI_002 : <color:#0ea5e9>取得候选后进入判定
Feat_answer_fUs_askI_001 .[#15803d,thickness=2].> Feat_answer_fUs_askI_003 : <color:#15803d>请求应答
Feat_answer_fUs_askI_002 .[#0ea5e9,thickness=2].> Feat_answer_fUs_askI_003 : <color:#0ea5e9>校验通过后生成答复
Feat_answer_fUs_askI_003 .[#15803d,thickness=2].> Feat_answer_fUs_askI_001 : <color:#15803d>检索候选知识
Feat_answer_fUs_askI_003 .[#15803d,thickness=2].> Feat_answer_fUs_askI_002 : <color:#15803d>校验置信度
Feat_answer_fUs_askI_002 .[#0ea5e9,thickness=2].> Feat_answer_fUs_lowConfidenceI_011 : <color:#0ea5e9>校验不通过转人工
Feat_answer_fUs_askI_001 .[#15803d,thickness=2].> Feat_answer_fUs_lowConfidenceI_012 : <color:#15803d>低置信度时转人工
Feat_answer_fUs_lowConfidenceI_011 .[#0ea5e9,thickness=2].> Feat_answer_fUs_lowConfidenceI_012 : <color:#0ea5e9>判定后建单并告知
Feat_answer_fUs_lowConfidenceI_012 .[#15803d,thickness=2].> Feat_answer_fUs_askI_003 : <color:#15803d>持久化工单
Feat_degrade_nfUs_kbEmptyI_111 .[#0ea5e9,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112 : <color:#0ea5e9>判定空库后显式呈现
Feat_degrade_nfUs_kbEmptyI_112 .[#15803d,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122 : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeoutI_121 .[#0ea5e9,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122 : <color:#0ea5e9>判定超时后告知客户
Feat_degrade_nfUs_ragTimeoutI_122 .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDownI_132 : <color:#15803d>读取告警快照
Feat_degrade_nfUs_llmDownI_131 .[#0ea5e9,thickness=2].> Feat_degrade_nfUs_llmDownI_132 : <color:#0ea5e9>判定不可用后建单告知
Feat_knowledge_fUs_scanI_211 .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_governI_221 : <color:#0ea5e9>提交候选进入治理
Feat_knowledge_fUs_governI_221 .[#15803d,thickness=2].> Feat_knowledge_fUs_scanI_211 : <color:#15803d>触发扫描
Feat_knowledge_fUs_governI_221 .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_alertI_231 : <color:#0ea5e9>晋升后进入新鲜度巡检
Feat_knowledge_fUs_alertI_231 .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_alertI_232 : <color:#0ea5e9>判定异常后上报告警
Feat_knowledge_fUs_alertI_232 .[#15803d,thickness=2].> Feat_knowledge_fUs_governI_221 : <color:#15803d>晋升或下线
@enduml
`;case`pano-i-state`:return`@startuml
title "I 环 · 全部 Feature · 业务状态"
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

skinparam rectangle<<Feat_answer_fUs_askI_001St_001_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002St_002_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003St_003_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011St_011_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112St_112_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122St_122_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001St_001_normalizing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002St_002_checking>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003St_003_composing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011St_011_judging>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_ticketing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_counting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112St_112_rendering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_calling>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_ticketing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_registering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_reviewing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_probing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_reporting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001St_001_searching>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002St_002_passed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002St_002_failed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003St_003_delivering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011St_011_escalated>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_notified>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_empty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_ready>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112St_112_shown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_returned>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122St_122_notified>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_failed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_ok>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_notified>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_scanning>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_decided>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_fresh>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_stale>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_listed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001St_001_got>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003St_003_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_handedOff>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_submitted>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_promoted>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_rejected>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_fixed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-001 阶段性目标 · 取得可靠候选知识" <<Feat_answer_fUs_askI_001>> as Feat_answer_fUs_askI_001 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_001>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001>> dashed

  rectangle "==S-001 待检索" <<Feat_answer_fUs_askI_001St_001_pending>> as Feat_answer_fUs_askI_001St_001_pending
  rectangle "==S-002 归一化中" <<Feat_answer_fUs_askI_001St_001_normalizing>> as Feat_answer_fUs_askI_001St_001_normalizing
  rectangle "==S-003 检索中" <<Feat_answer_fUs_askI_001St_001_searching>> as Feat_answer_fUs_askI_001St_001_searching
  rectangle "==S-004 已取得候选" <<Feat_answer_fUs_askI_001St_001_got>> as Feat_answer_fUs_askI_001St_001_got
}
rectangle "I-002 阶段性目标 · 判定可否自动答复" <<Feat_answer_fUs_askI_002>> as Feat_answer_fUs_askI_002 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_002>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_002>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_002>> dashed

  rectangle "==S-005 待校验" <<Feat_answer_fUs_askI_002St_002_pending>> as Feat_answer_fUs_askI_002St_002_pending
  rectangle "==S-006 校验中" <<Feat_answer_fUs_askI_002St_002_checking>> as Feat_answer_fUs_askI_002St_002_checking
  rectangle "==S-007 校验通过" <<Feat_answer_fUs_askI_002St_002_passed>> as Feat_answer_fUs_askI_002St_002_passed
  rectangle "==S-008 置信度不足" <<Feat_answer_fUs_askI_002St_002_failed>> as Feat_answer_fUs_askI_002St_002_failed
}
rectangle "I-003 阶段性目标 · 生成并下发答复" <<Feat_answer_fUs_askI_003>> as Feat_answer_fUs_askI_003 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_003>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003>> dashed

  rectangle "==S-009 待生成" <<Feat_answer_fUs_askI_003St_003_pending>> as Feat_answer_fUs_askI_003St_003_pending
  rectangle "==S-010 生成中" <<Feat_answer_fUs_askI_003St_003_composing>> as Feat_answer_fUs_askI_003St_003_composing
  rectangle "==S-011 下发中" <<Feat_answer_fUs_askI_003St_003_delivering>> as Feat_answer_fUs_askI_003St_003_delivering
  rectangle "==S-012 已答复" <<Feat_answer_fUs_askI_003St_003_answered>> as Feat_answer_fUs_askI_003St_003_answered
}
rectangle "I-011 阶段性目标 · 判定进入人工路径" <<Feat_answer_fUs_lowConfidenceI_011>> as Feat_answer_fUs_lowConfidenceI_011 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_011>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_011>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_011>> dashed

  rectangle "==S-101 待判定" <<Feat_answer_fUs_lowConfidenceI_011St_011_pending>> as Feat_answer_fUs_lowConfidenceI_011St_011_pending
  rectangle "==S-102 判定中" <<Feat_answer_fUs_lowConfidenceI_011St_011_judging>> as Feat_answer_fUs_lowConfidenceI_011St_011_judging
  rectangle "==S-103 已转人工" <<Feat_answer_fUs_lowConfidenceI_011St_011_escalated>> as Feat_answer_fUs_lowConfidenceI_011St_011_escalated
}
rectangle "I-012 阶段性目标 · 生成工单并告知等待" <<Feat_answer_fUs_lowConfidenceI_012>> as Feat_answer_fUs_lowConfidenceI_012 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_012>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_012>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_012>> dashed

  rectangle "==S-104 待建单" <<Feat_answer_fUs_lowConfidenceI_012St_012_pending>> as Feat_answer_fUs_lowConfidenceI_012St_012_pending
  rectangle "==S-105 建单中" <<Feat_answer_fUs_lowConfidenceI_012St_012_ticketing>> as Feat_answer_fUs_lowConfidenceI_012St_012_ticketing
  rectangle "==S-106 已告知等待" <<Feat_answer_fUs_lowConfidenceI_012St_012_notified>> as Feat_answer_fUs_lowConfidenceI_012St_012_notified
  rectangle "==S-107 人工已接管" <<Feat_answer_fUs_lowConfidenceI_012St_012_answered>> as Feat_answer_fUs_lowConfidenceI_012St_012_answered
}
rectangle "I-111 阶段性目标 · 读出条目数并判定空库" <<Feat_degrade_nfUs_kbEmptyI_111>> as Feat_degrade_nfUs_kbEmptyI_111 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111>> dashed

  rectangle "==S-111 待读取" <<Feat_degrade_nfUs_kbEmptyI_111St_111_pending>> as Feat_degrade_nfUs_kbEmptyI_111St_111_pending
  rectangle "==S-112 读取中" <<Feat_degrade_nfUs_kbEmptyI_111St_111_counting>> as Feat_degrade_nfUs_kbEmptyI_111St_111_counting
  rectangle "==S-113 判定为空库" <<Feat_degrade_nfUs_kbEmptyI_111St_111_empty>> as Feat_degrade_nfUs_kbEmptyI_111St_111_empty
  rectangle "==S-114 条目正常" <<Feat_degrade_nfUs_kbEmptyI_111St_111_ready>> as Feat_degrade_nfUs_kbEmptyI_111St_111_ready
}
rectangle "I-112 阶段性目标 · 把空库显式呈现出来" <<Feat_degrade_nfUs_kbEmptyI_112>> as Feat_degrade_nfUs_kbEmptyI_112 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_112>> dashed

  rectangle "==S-115 待呈现" <<Feat_degrade_nfUs_kbEmptyI_112St_112_pending>> as Feat_degrade_nfUs_kbEmptyI_112St_112_pending
  rectangle "==S-116 渲染中" <<Feat_degrade_nfUs_kbEmptyI_112St_112_rendering>> as Feat_degrade_nfUs_kbEmptyI_112St_112_rendering
  rectangle "==S-117 已显式提示" <<Feat_degrade_nfUs_kbEmptyI_112St_112_shown>> as Feat_degrade_nfUs_kbEmptyI_112St_112_shown
}
rectangle "I-121 阶段性目标 · 计时并判定超时" <<Feat_degrade_nfUs_ragTimeoutI_121>> as Feat_degrade_nfUs_ragTimeoutI_121 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_121>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_121>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_121>> dashed

  rectangle "==S-121 待计时" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_pending>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_pending
  rectangle "==S-122 等待响应" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting
  rectangle "==S-123 判定超时" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut
  rectangle "==S-124 按时返回" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_returned>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_returned
}
rectangle "I-122 阶段性目标 · 告知客户系统在处理" <<Feat_degrade_nfUs_ragTimeoutI_122>> as Feat_degrade_nfUs_ragTimeoutI_122 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_122>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_122>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_122>> dashed

  rectangle "==S-125 待提示" <<Feat_degrade_nfUs_ragTimeoutI_122St_122_pending>> as Feat_degrade_nfUs_ragTimeoutI_122St_122_pending
  rectangle "==S-126 提示中" <<Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying>> as Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying
  rectangle "==S-127 已告知处理中" <<Feat_degrade_nfUs_ragTimeoutI_122St_122_notified>> as Feat_degrade_nfUs_ragTimeoutI_122St_122_notified
}
rectangle "I-131 阶段性目标 · 识别模型不可用并转人工" <<Feat_degrade_nfUs_llmDownI_131>> as Feat_degrade_nfUs_llmDownI_131 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_131>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_131>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_131>> dashed

  rectangle "==S-131 待调用" <<Feat_degrade_nfUs_llmDownI_131St_131_pending>> as Feat_degrade_nfUs_llmDownI_131St_131_pending
  rectangle "==S-132 调用中" <<Feat_degrade_nfUs_llmDownI_131St_131_calling>> as Feat_degrade_nfUs_llmDownI_131St_131_calling
  rectangle "==S-133 模型不可用" <<Feat_degrade_nfUs_llmDownI_131St_131_failed>> as Feat_degrade_nfUs_llmDownI_131St_131_failed
  rectangle "==S-134 调用成功" <<Feat_degrade_nfUs_llmDownI_131St_131_ok>> as Feat_degrade_nfUs_llmDownI_131St_131_ok
}
rectangle "I-132 阶段性目标 · 建单并告知等待" <<Feat_degrade_nfUs_llmDownI_132>> as Feat_degrade_nfUs_llmDownI_132 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_132>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_132>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_132>> dashed

  rectangle "==S-135 待建单" <<Feat_degrade_nfUs_llmDownI_132St_132_pending>> as Feat_degrade_nfUs_llmDownI_132St_132_pending
  rectangle "==S-136 建单中" <<Feat_degrade_nfUs_llmDownI_132St_132_ticketing>> as Feat_degrade_nfUs_llmDownI_132St_132_ticketing
  rectangle "==S-137 已告知等待" <<Feat_degrade_nfUs_llmDownI_132St_132_notified>> as Feat_degrade_nfUs_llmDownI_132St_132_notified
  rectangle "==S-138 人工已接管" <<Feat_degrade_nfUs_llmDownI_132St_132_handedOff>> as Feat_degrade_nfUs_llmDownI_132St_132_handedOff
}
rectangle "I-211 阶段性目标 · 素材入库并产出候选" <<Feat_knowledge_fUs_scanI_211>> as Feat_knowledge_fUs_scanI_211 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scanI_211>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scanI_211>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scanI_211>> dashed

  rectangle "==S-211 待接入" <<Feat_knowledge_fUs_scanI_211St_211_pending>> as Feat_knowledge_fUs_scanI_211St_211_pending
  rectangle "==S-212 登记中" <<Feat_knowledge_fUs_scanI_211St_211_registering>> as Feat_knowledge_fUs_scanI_211St_211_registering
  rectangle "==S-213 扫描中" <<Feat_knowledge_fUs_scanI_211St_211_scanning>> as Feat_knowledge_fUs_scanI_211St_211_scanning
  rectangle "==S-214 已提交候选" <<Feat_knowledge_fUs_scanI_211St_211_submitted>> as Feat_knowledge_fUs_scanI_211St_211_submitted
}
rectangle "I-221 阶段性目标 · 审阅决策并晋升" <<Feat_knowledge_fUs_governI_221>> as Feat_knowledge_fUs_governI_221 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221>> dashed

  rectangle "==S-221 待审阅" <<Feat_knowledge_fUs_governI_221St_221_pending>> as Feat_knowledge_fUs_governI_221St_221_pending
  rectangle "==S-222 审阅中" <<Feat_knowledge_fUs_governI_221St_221_reviewing>> as Feat_knowledge_fUs_governI_221St_221_reviewing
  rectangle "==S-223 已决策" <<Feat_knowledge_fUs_governI_221St_221_decided>> as Feat_knowledge_fUs_governI_221St_221_decided
  rectangle "==S-224 已晋升可检索" <<Feat_knowledge_fUs_governI_221St_221_promoted>> as Feat_knowledge_fUs_governI_221St_221_promoted
  rectangle "==S-225 已驳回退回" <<Feat_knowledge_fUs_governI_221St_221_rejected>> as Feat_knowledge_fUs_governI_221St_221_rejected
}
rectangle "I-231 阶段性目标 · 巡检并判定新鲜度" <<Feat_knowledge_fUs_alertI_231>> as Feat_knowledge_fUs_alertI_231 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_231>> dashed

  rectangle "==S-231 待巡检" <<Feat_knowledge_fUs_alertI_231St_231_pending>> as Feat_knowledge_fUs_alertI_231St_231_pending
  rectangle "==S-232 巡检中" <<Feat_knowledge_fUs_alertI_231St_231_probing>> as Feat_knowledge_fUs_alertI_231St_231_probing
  rectangle "==S-233 新鲜度正常" <<Feat_knowledge_fUs_alertI_231St_231_fresh>> as Feat_knowledge_fUs_alertI_231St_231_fresh
  rectangle "==S-234 新鲜度异常" <<Feat_knowledge_fUs_alertI_231St_231_stale>> as Feat_knowledge_fUs_alertI_231St_231_stale
}
rectangle "I-232 阶段性目标 · 上报告警并呈现" <<Feat_knowledge_fUs_alertI_232>> as Feat_knowledge_fUs_alertI_232 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_232>> dashed

  rectangle "==S-235 待上报" <<Feat_knowledge_fUs_alertI_232St_232_pending>> as Feat_knowledge_fUs_alertI_232St_232_pending
  rectangle "==S-236 上报中" <<Feat_knowledge_fUs_alertI_232St_232_reporting>> as Feat_knowledge_fUs_alertI_232St_232_reporting
  rectangle "==S-237 控制台已列出" <<Feat_knowledge_fUs_alertI_232St_232_listed>> as Feat_knowledge_fUs_alertI_232St_232_listed
  rectangle "==S-238 已修复下线" <<Feat_knowledge_fUs_alertI_232St_232_fixed>> as Feat_knowledge_fUs_alertI_232St_232_fixed
}

Feat_answer_fUs_askI_001St_001_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001St_001_normalizing : <color:#8D8D8D>收到企业微信提问
Feat_answer_fUs_askI_001St_001_normalizing .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001St_001_searching : <color:#8D8D8D>归一化完成
Feat_answer_fUs_askI_001St_001_searching .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001St_001_got : <color:#8D8D8D>检索返回候选条目
Feat_answer_fUs_askI_002St_002_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_002St_002_checking : <color:#8D8D8D>进入回复策略
Feat_answer_fUs_askI_002St_002_checking .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_002St_002_passed : <color:#8D8D8D>置信度达标
Feat_answer_fUs_askI_002St_002_checking .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_002St_002_failed : <color:#8D8D8D>置信度不足，转 US-002
Feat_answer_fUs_askI_003St_003_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003St_003_composing : <color:#8D8D8D>校验通过
Feat_answer_fUs_askI_003St_003_composing .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003St_003_delivering : <color:#8D8D8D>答复正文就绪
Feat_answer_fUs_askI_003St_003_delivering .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003St_003_answered : <color:#8D8D8D>企业微信回传成功
Feat_answer_fUs_lowConfidenceI_011St_011_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_011St_011_judging : <color:#8D8D8D>置信度不足触发
Feat_answer_fUs_lowConfidenceI_011St_011_judging .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_011St_011_escalated : <color:#8D8D8D>确认无可靠候选
Feat_answer_fUs_lowConfidenceI_012St_012_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012St_012_ticketing : <color:#8D8D8D>判定已转人工
Feat_answer_fUs_lowConfidenceI_012St_012_ticketing .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012St_012_notified : <color:#8D8D8D>工单创建完成
Feat_answer_fUs_lowConfidenceI_012St_012_notified .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012St_012_answered : <color:#8D8D8D>人工接手
Feat_degrade_nfUs_kbEmptyI_111St_111_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111St_111_counting : <color:#8D8D8D>运营人员发起查询
Feat_degrade_nfUs_kbEmptyI_111St_111_counting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111St_111_empty : <color:#8D8D8D>条目数为 0
Feat_degrade_nfUs_kbEmptyI_111St_111_counting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111St_111_ready : <color:#8D8D8D>条目数大于 0
Feat_degrade_nfUs_kbEmptyI_112St_112_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112St_112_rendering : <color:#8D8D8D>判定为空库
Feat_degrade_nfUs_kbEmptyI_112St_112_rendering .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112St_112_shown : <color:#8D8D8D>提示已渲染
Feat_degrade_nfUs_ragTimeoutI_121St_121_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting : <color:#8D8D8D>发起检索并启动计时
Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut : <color:#8D8D8D>超过 8 秒未返回
Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_121St_121_returned : <color:#8D8D8D>8 秒内返回候选
Feat_degrade_nfUs_ragTimeoutI_122St_122_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying : <color:#8D8D8D>判定超时
Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122St_122_notified : <color:#8D8D8D>提示已下发
Feat_degrade_nfUs_llmDownI_131St_131_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_131St_131_calling : <color:#8D8D8D>发起模型调用
Feat_degrade_nfUs_llmDownI_131St_131_calling .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_131St_131_failed : <color:#8D8D8D>调用失败或返回异常
Feat_degrade_nfUs_llmDownI_131St_131_calling .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_131St_131_ok : <color:#8D8D8D>调用正常返回
Feat_degrade_nfUs_llmDownI_132St_132_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132St_132_ticketing : <color:#8D8D8D>模型判定不可用
Feat_degrade_nfUs_llmDownI_132St_132_ticketing .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132St_132_notified : <color:#8D8D8D>工单创建完成
Feat_degrade_nfUs_llmDownI_132St_132_notified .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132St_132_handedOff : <color:#8D8D8D>人工接手
Feat_knowledge_fUs_scanI_211St_211_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211St_211_registering : <color:#8D8D8D>上传素材
Feat_knowledge_fUs_scanI_211St_211_registering .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211St_211_scanning : <color:#8D8D8D>登记完成
Feat_knowledge_fUs_scanI_211St_211_scanning .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211St_211_submitted : <color:#8D8D8D>候选已抽取并提交
Feat_knowledge_fUs_governI_221St_221_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_reviewing : <color:#8D8D8D>候选提交到治理
Feat_knowledge_fUs_governI_221St_221_reviewing .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_decided : <color:#8D8D8D>运营人员记录决策
Feat_knowledge_fUs_governI_221St_221_decided .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_promoted : <color:#8D8D8D>批准晋升
Feat_knowledge_fUs_governI_221St_221_decided .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_rejected : <color:#8D8D8D>驳回退回
Feat_knowledge_fUs_alertI_231St_231_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231St_231_probing : <color:#8D8D8D>到达巡检周期
Feat_knowledge_fUs_alertI_231St_231_probing .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231St_231_fresh : <color:#8D8D8D>全部在阈值内
Feat_knowledge_fUs_alertI_231St_231_probing .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231St_231_stale : <color:#8D8D8D>存在超阈值条目
Feat_knowledge_fUs_alertI_232St_232_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_232St_232_reporting : <color:#8D8D8D>判定新鲜度异常
Feat_knowledge_fUs_alertI_232St_232_reporting .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_232St_232_listed : <color:#8D8D8D>告警已落库并展示
Feat_knowledge_fUs_alertI_232St_232_listed .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_232St_232_fixed : <color:#8D8D8D>运营人员修复后下线
@enduml
`;case`pano-ui`:return`@startuml
title "UI 环 · 全部 Feature · 界面单元"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011Ui_011>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131Ui_131>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001Ui_001>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211Ui_211>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012Ui_012>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003Ui_003>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231Ui_231>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002Ui_002>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132Ui_132>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232Ui_232>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-001 客户提问获得专业答复" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask {
  skinparam RectangleBorderColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_ask>> dashed

  rectangle "I-001 阶段性目标 · 取得可靠候选知识" <<Feat_answer_fUs_askI_001>> as Feat_answer_fUs_askI_001 {
    skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001>> #3b82f6
    skinparam RectangleFontColor<<Feat_answer_fUs_askI_001>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001>> dashed

    rectangle "==UI-001 会话输入\\n\\n对应阶段性目标 I-001。客户提问的输入界面：提交问题并看到受理反馈。" <<Feat_answer_fUs_askI_001Ui_001>> as Feat_answer_fUs_askI_001Ui_001
  }
  rectangle "I-003 阶段性目标 · 生成并下发答复" <<Feat_answer_fUs_askI_003>> as Feat_answer_fUs_askI_003 {
    skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003>> #3b82f6
    skinparam RectangleFontColor<<Feat_answer_fUs_askI_003>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003>> dashed

    rectangle "==UI-003 答复呈现\\n\\n对应阶段性目标 I-003。答复的呈现界面：客户在这里读到有据可依的答复。" <<Feat_answer_fUs_askI_003Ui_003>> as Feat_answer_fUs_askI_003Ui_003
  }
  rectangle "I-002 阶段性目标 · 判定可否自动答复" <<Feat_answer_fUs_askI_002>> as Feat_answer_fUs_askI_002 {
    skinparam RectangleBorderColor<<Feat_answer_fUs_askI_002>> #3b82f6
    skinparam RectangleFontColor<<Feat_answer_fUs_askI_002>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_002>> dashed

    rectangle "==UI-002 判定反馈\\n\\n对应阶段性目标 I-002。判定过程中的客户侧反馈：让客户知道系统在处理。" <<Feat_answer_fUs_askI_002Ui_002>> as Feat_answer_fUs_askI_002Ui_002
  }
}
rectangle "US-002 答不准时转人工而非硬答" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidence>> dashed

  rectangle "==UI-011 转接提示\\n\\n对应阶段性目标 I-011。转接过程中的客户侧提示：让客户知道正在转入人工。" <<Feat_answer_fUs_lowConfidenceI_011Ui_011>> as Feat_answer_fUs_lowConfidenceI_011Ui_011
  rectangle "==UI-012 转人工告知\\n\\n对应阶段性目标 I-012。工单创建后的告知界面与运营侧工单查看。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012>> as Feat_answer_fUs_lowConfidenceI_012Ui_012
}
rectangle "US-101 知识库为空时运营人员能看见" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmpty>> dashed

  rectangle "I-111 阶段性目标 · 读出条目数并判定空库" <<Feat_degrade_nfUs_kbEmptyI_111>> as Feat_degrade_nfUs_kbEmptyI_111 {
    skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
    skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111>> dashed

    rectangle "==UI-111 状态查询\\n\\n对应阶段性目标 I-111。运营人员发起状态查询并看到判定入口。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111
  }
  rectangle "I-112 阶段性目标 · 把空库显式呈现出来" <<Feat_degrade_nfUs_kbEmptyI_112>> as Feat_degrade_nfUs_kbEmptyI_112 {
    skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
    skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_112>> dashed

    rectangle "==UI-112 空库提示呈现\\n\\n对应阶段性目标 I-112。空库状态的显式呈现与告警入口。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112
  }
}
rectangle "US-102 RAGFlow 超时时客户不被静默等待" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeout>> dashed

  rectangle "==UI-121 等待反馈\\n\\n对应阶段性目标 I-121。检索等待期间的客户侧反馈。" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121
  rectangle "==UI-122 处理中提示\\n\\n对应阶段性目标 I-122。超时后的会话内提示下发。" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122
}
rectangle "US-103 LLM 不可用时转人工而非静默失败" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDown>> dashed

  rectangle "==UI-131 调用反馈\\n\\n对应阶段性目标 I-131。模型调用异常的客户侧反馈。" <<Feat_degrade_nfUs_llmDownI_131Ui_131>> as Feat_degrade_nfUs_llmDownI_131Ui_131
  rectangle "==UI-132 转人工告知\\n\\n对应阶段性目标 I-132。建单后的客户告知与告警呈现。" <<Feat_degrade_nfUs_llmDownI_132Ui_132>> as Feat_degrade_nfUs_llmDownI_132Ui_132
}
rectangle "US-201 素材入库后自动进入候选知识" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scan>> dashed

  rectangle "==UI-211 素材上传\\n\\n对应阶段性目标 I-211。素材上传与扫描进度反馈。" <<Feat_knowledge_fUs_scanI_211Ui_211>> as Feat_knowledge_fUs_scanI_211Ui_211
}
rectangle "US-202 候选知识经我决策后才对外可见" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_govern>> dashed

  rectangle "==UI-221 审阅工作台\\n\\n对应阶段性目标 I-221。候选审阅与决策的操作界面。" <<Feat_knowledge_fUs_governI_221Ui_221>> as Feat_knowledge_fUs_governI_221Ui_221
}
rectangle "US-203 知识陈旧时我能收到提示" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alert>> dashed

  rectangle "I-231 阶段性目标 · 巡检并判定新鲜度" <<Feat_knowledge_fUs_alertI_231>> as Feat_knowledge_fUs_alertI_231 {
    skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
    skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_231>> dashed

    rectangle "==UI-231 巡检状态\\n\\n对应阶段性目标 I-231。巡检过程与新鲜度状态呈现。" <<Feat_knowledge_fUs_alertI_231Ui_231>> as Feat_knowledge_fUs_alertI_231Ui_231
  }
  rectangle "I-232 阶段性目标 · 上报告警并呈现" <<Feat_knowledge_fUs_alertI_232>> as Feat_knowledge_fUs_alertI_232 {
    skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
    skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_232>> dashed

    rectangle "==UI-232 告警呈现\\n\\n对应阶段性目标 I-232。问题条目的告警列表与处理入口。" <<Feat_knowledge_fUs_alertI_232Ui_232>> as Feat_knowledge_fUs_alertI_232Ui_232
  }
}

Feat_answer_fUs_askI_001Ui_001 .[#15803d,thickness=2].> Feat_answer_fUs_askI_003Ui_003 : <color:#15803d>请求应答
Feat_answer_fUs_askI_003Ui_003 .[#15803d,thickness=2].> Feat_answer_fUs_askI_001Ui_001 : <color:#15803d>检索候选知识
Feat_answer_fUs_askI_003Ui_003 .[#15803d,thickness=2].> Feat_answer_fUs_askI_002Ui_002 : <color:#15803d>校验置信度
Feat_answer_fUs_askI_001Ui_001 .[#15803d,thickness=2].> Feat_answer_fUs_lowConfidenceI_012Ui_012 : <color:#15803d>低置信度时转人工
Feat_answer_fUs_lowConfidenceI_012Ui_012 .[#15803d,thickness=2].> Feat_answer_fUs_askI_003Ui_003 : <color:#15803d>持久化工单
Feat_degrade_nfUs_kbEmptyI_111Ui_111 .[#15803d,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112Ui_112 : <color:#15803d>查询空库告警
Feat_degrade_nfUs_kbEmptyI_112Ui_112 .[#15803d,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122Ui_122 : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeoutI_122Ui_122 .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDownI_132Ui_132 : <color:#15803d>读取告警快照
Feat_knowledge_fUs_scanI_211Ui_211 .[#15803d,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221 : <color:#15803d>[...]
Feat_knowledge_fUs_governI_221Ui_221 .[#15803d,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211 : <color:#15803d>触发扫描
Feat_knowledge_fUs_governI_221Ui_221 .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_231Ui_231 : <color:#15803d>批准后推送
Feat_knowledge_fUs_alertI_231Ui_231 .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_232Ui_232 : <color:#15803d>更新生命周期
Feat_knowledge_fUs_alertI_232Ui_232 .[#15803d,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221 : <color:#15803d>晋升或下线
@enduml
`;case`pano-api`:return`@startuml
title "SRC 环 · 全部 Feature · 对外接口"
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

skinparam rectangle<<Feat_answer_fUs_askI_001Ui_001Src_001Api_001>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fUs_askI_001Ui_001Src_001Api_001>> as Feat_answer_fUs_askI_001Ui_001Src_001Api_001
rectangle "==API-002 GET /handoffs 工单列表\\n\\nsrc/routes/handoff-routes.js:9 — 运营人员查看人工工单。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002
rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101
rectangle "==API-201 POST /materials 素材接入\\n\\nsrc/routes/material-routes.js:8 — 接收素材。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201>> as Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201
rectangle "==API-202 POST /knowledge/scan 知识扫描\\n\\nsrc/routes/knowledge-routes.js:10 — 触发候选知识扫描。" <<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202>> as Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202
rectangle "==API-203 GET /knowledge/status 知识状态\\n\\nsrc/routes/knowledge-routes.js:26 — 查询扫描与治理状态。" <<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203>> as Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203
@enduml
`;case`pano-carrier`:return`@startuml
title "SRC 环 · 全部 Feature · 数据载体"
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
skinparam rectangle<<Feat_knowledge_fIn_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fCvt_material>>{
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
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
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
skinparam rectangle<<Feat_knowledge_fPod_document>>{
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
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fOut_knowledgeStatus>>{
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
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==IN-201 素材入参\\n\\nsrc/routes/material-routes.js — 上传素材的请求载荷。" <<Feat_knowledge_fIn_material>> as Feat_knowledge_fIn_material
  rectangle "==CVT-201 素材转换器\\n\\nsrc/services/material-service.js — 覆盖 素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。" <<Feat_knowledge_fCvt_material>> as Feat_knowledge_fCvt_material
  rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate
  rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
  database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry
  rectangle "==OUT-201 知识状态出参视图\\n\\nsrc/routes/knowledge-routes.js — 面向控制台的扫描与治理状态载荷。" <<Feat_knowledge_fOut_knowledgeStatus>> as Feat_knowledge_fOut_knowledgeStatus
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
Feat_knowledge_fIn_material .[#64748b,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#64748b>转换为候选对象
Feat_knowledge_fBiz_candidate .[#64748b,thickness=2].> Feat_knowledge_fPod_document : <color:#64748b>登记为文档实体
Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>写入文档标识
Feat_knowledge_fDao_registry .[#3b82f6,thickness=2].> Feat_knowledge_fOut_knowledgeStatus : <color:#3b82f6>查询状态
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#0ea5e9>负责 素材→BIZ-201 映射
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fPod_document : <color:#0ea5e9>负责 BIZ-201→POD-201 映射
@enduml
`;case`proc-local`:return`@startuml
title "构建部署 · 本地开发环境 · 进程与线程"
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
`;case`proc-prod`:return`@startuml
title "构建部署 · 生产环境 · 进程与线程"
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
`;case`chain001F-us`:return`@startuml
title "US 环 · Feature-001-F · 用户故事"
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
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
  rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
}

Feat_answer_fUs_ask .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidence : <color:#8D8D8D>[...]
Feat_answer_fUs_lowConfidence .[#15803d,thickness=2].> Feat_answer_fUs_ask : <color:#15803d>持久化工单
@enduml
`;case`chain001F-f`:return`@startuml
title "F 环 · Feature-001-F · 业务能力单元清单"
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
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
  rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
  rectangle "==F-001 应答编排能力\\n\\n决定自动应答还是转人工，串联检索与策略校验。" <<Feat_answer_fF_answer>> as Feat_answer_fF_answer
  rectangle "==F-002 知识检索能力\\n\\n从 RAGFlow 检索候选知识并按置信度排序。" <<Feat_answer_fF_retrieval>> as Feat_answer_fF_retrieval
}

Feat_answer_fUs_ask .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidence : <color:#8D8D8D>[...]
Feat_answer_fUs_lowConfidence .[#15803d,thickness=2].> Feat_answer_fUs_ask : <color:#15803d>持久化工单
Feat_answer_fUs_ask .[#0ea5e9,thickness=2].> Feat_answer_fF_answer : <color:#0ea5e9>要求
Feat_answer_fUs_lowConfidence .[#0ea5e9,thickness=2].> Feat_answer_fF_retrieval : <color:#0ea5e9>要求
@enduml
`;case`chain001F-i-001`:return`@startuml
title "I 环 · Feature-001-F · I-001 取得可靠候选知识"
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

skinparam rectangle<<Feat_answer_fUs_askI_001St_001_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001St_001_normalizing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001St_001_searching>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001St_001_got>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001I_001_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001I_001_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001I_001_3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-001 阶段性目标 · 取得可靠候选知识" <<Feat_answer_fUs_askI_001>> as Feat_answer_fUs_askI_001 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_001>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001>> dashed

  rectangle "==S-001 待检索" <<Feat_answer_fUs_askI_001St_001_pending>> as Feat_answer_fUs_askI_001St_001_pending
  rectangle "==S-002 归一化中" <<Feat_answer_fUs_askI_001St_001_normalizing>> as Feat_answer_fUs_askI_001St_001_normalizing
  rectangle "==S-003 检索中" <<Feat_answer_fUs_askI_001St_001_searching>> as Feat_answer_fUs_askI_001St_001_searching
  rectangle "==S-004 已取得候选" <<Feat_answer_fUs_askI_001St_001_got>> as Feat_answer_fUs_askI_001St_001_got
  rectangle "==I-001-1 归一化提问\\n\\n把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。" <<Feat_answer_fUs_askI_001I_001_1>> as Feat_answer_fUs_askI_001I_001_1
  rectangle "==I-001-2 检索候选知识\\n\\n按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。" <<Feat_answer_fUs_askI_001I_001_2>> as Feat_answer_fUs_askI_001I_001_2
  rectangle "==I-001-3 候选排序与择优\\n\\n按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。" <<Feat_answer_fUs_askI_001I_001_3>> as Feat_answer_fUs_askI_001I_001_3
}

Feat_answer_fUs_askI_001St_001_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001St_001_normalizing : <color:#8D8D8D>收到企业微信提问
Feat_answer_fUs_askI_001St_001_normalizing .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001St_001_searching : <color:#8D8D8D>归一化完成
Feat_answer_fUs_askI_001St_001_searching .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_001St_001_got : <color:#8D8D8D>检索返回候选条目
@enduml
`;case`chain001F-i-002`:return`@startuml
title "I 环 · Feature-001-F · I-002 判定可否自动答复"
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

skinparam rectangle<<Feat_answer_fUs_askI_002St_002_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002St_002_checking>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002St_002_passed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002St_002_failed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002I_002_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-002 阶段性目标 · 判定可否自动答复" <<Feat_answer_fUs_askI_002>> as Feat_answer_fUs_askI_002 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_002>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_002>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_002>> dashed

  rectangle "==S-005 待校验" <<Feat_answer_fUs_askI_002St_002_pending>> as Feat_answer_fUs_askI_002St_002_pending
  rectangle "==S-006 校验中" <<Feat_answer_fUs_askI_002St_002_checking>> as Feat_answer_fUs_askI_002St_002_checking
  rectangle "==S-007 校验通过" <<Feat_answer_fUs_askI_002St_002_passed>> as Feat_answer_fUs_askI_002St_002_passed
  rectangle "==S-008 置信度不足" <<Feat_answer_fUs_askI_002St_002_failed>> as Feat_answer_fUs_askI_002St_002_failed
  rectangle "==I-002-1 置信度校验\\n\\n用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。" <<Feat_answer_fUs_askI_002I_002_1>> as Feat_answer_fUs_askI_002I_002_1
}

Feat_answer_fUs_askI_002St_002_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_002St_002_checking : <color:#8D8D8D>进入回复策略
Feat_answer_fUs_askI_002St_002_checking .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_002St_002_passed : <color:#8D8D8D>置信度达标
Feat_answer_fUs_askI_002St_002_checking .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_002St_002_failed : <color:#8D8D8D>置信度不足，转 US-002
@enduml
`;case`chain001F-i-003`:return`@startuml
title "I 环 · Feature-001-F · I-003 生成并下发答复"
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

skinparam rectangle<<Feat_answer_fUs_askI_003St_003_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003St_003_composing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003St_003_delivering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003St_003_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003I_003_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003I_003_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-003 阶段性目标 · 生成并下发答复" <<Feat_answer_fUs_askI_003>> as Feat_answer_fUs_askI_003 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_003>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003>> dashed

  rectangle "==S-009 待生成" <<Feat_answer_fUs_askI_003St_003_pending>> as Feat_answer_fUs_askI_003St_003_pending
  rectangle "==S-010 生成中" <<Feat_answer_fUs_askI_003St_003_composing>> as Feat_answer_fUs_askI_003St_003_composing
  rectangle "==S-011 下发中" <<Feat_answer_fUs_askI_003St_003_delivering>> as Feat_answer_fUs_askI_003St_003_delivering
  rectangle "==S-012 已答复" <<Feat_answer_fUs_askI_003St_003_answered>> as Feat_answer_fUs_askI_003St_003_answered
  rectangle "==I-003-1 生成答复\\n\\n按候选知识组织答复正文，附来源条目，不加入未验证内容。" <<Feat_answer_fUs_askI_003I_003_1>> as Feat_answer_fUs_askI_003I_003_1
  rectangle "==I-003-2 下发答复\\n\\n把答复通过企业微信会话回传给客户，完成本次闭环。" <<Feat_answer_fUs_askI_003I_003_2>> as Feat_answer_fUs_askI_003I_003_2
}

Feat_answer_fUs_askI_003St_003_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003St_003_composing : <color:#8D8D8D>校验通过
Feat_answer_fUs_askI_003St_003_composing .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003St_003_delivering : <color:#8D8D8D>答复正文就绪
Feat_answer_fUs_askI_003St_003_delivering .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_003St_003_answered : <color:#8D8D8D>企业微信回传成功
@enduml
`;case`chain001F-i-011`:return`@startuml
title "I 环 · Feature-001-F · I-011 判定进入人工路径"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011St_011_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011St_011_judging>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011St_011_escalated>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011I_011_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-011 阶段性目标 · 判定进入人工路径" <<Feat_answer_fUs_lowConfidenceI_011>> as Feat_answer_fUs_lowConfidenceI_011 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_011>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_011>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_011>> dashed

  rectangle "==S-101 待判定" <<Feat_answer_fUs_lowConfidenceI_011St_011_pending>> as Feat_answer_fUs_lowConfidenceI_011St_011_pending
  rectangle "==S-102 判定中" <<Feat_answer_fUs_lowConfidenceI_011St_011_judging>> as Feat_answer_fUs_lowConfidenceI_011St_011_judging
  rectangle "==S-103 已转人工" <<Feat_answer_fUs_lowConfidenceI_011St_011_escalated>> as Feat_answer_fUs_lowConfidenceI_011St_011_escalated
  rectangle "==I-011-1 判定转人工\\n\\n置信度低于阈值或无候选时，判定进入人工路径。" <<Feat_answer_fUs_lowConfidenceI_011I_011_1>> as Feat_answer_fUs_lowConfidenceI_011I_011_1
}

Feat_answer_fUs_lowConfidenceI_011St_011_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_011St_011_judging : <color:#8D8D8D>置信度不足触发
Feat_answer_fUs_lowConfidenceI_011St_011_judging .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_011St_011_escalated : <color:#8D8D8D>确认无可靠候选
@enduml
`;case`chain001F-i-012`:return`@startuml
title "I 环 · Feature-001-F · I-012 生成工单并告知等待"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_ticketing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_notified>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012St_012_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012I_012_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012I_012_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-012 阶段性目标 · 生成工单并告知等待" <<Feat_answer_fUs_lowConfidenceI_012>> as Feat_answer_fUs_lowConfidenceI_012 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_012>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_012>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_012>> dashed

  rectangle "==S-104 待建单" <<Feat_answer_fUs_lowConfidenceI_012St_012_pending>> as Feat_answer_fUs_lowConfidenceI_012St_012_pending
  rectangle "==S-105 建单中" <<Feat_answer_fUs_lowConfidenceI_012St_012_ticketing>> as Feat_answer_fUs_lowConfidenceI_012St_012_ticketing
  rectangle "==S-106 已告知等待" <<Feat_answer_fUs_lowConfidenceI_012St_012_notified>> as Feat_answer_fUs_lowConfidenceI_012St_012_notified
  rectangle "==S-107 人工已接管" <<Feat_answer_fUs_lowConfidenceI_012St_012_answered>> as Feat_answer_fUs_lowConfidenceI_012St_012_answered
  rectangle "==I-012-1 创建人工工单\\n\\n把提问内容、候选摘要与置信度写入工单，供人工接手。" <<Feat_answer_fUs_lowConfidenceI_012I_012_1>> as Feat_answer_fUs_lowConfidenceI_012I_012_1
  rectangle "==I-012-2 告知客户等待\\n\\n在会话中告知客户已转人工并给出预计等待，不做内容性答复。" <<Feat_answer_fUs_lowConfidenceI_012I_012_2>> as Feat_answer_fUs_lowConfidenceI_012I_012_2
}

Feat_answer_fUs_lowConfidenceI_012St_012_pending .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012St_012_ticketing : <color:#8D8D8D>判定已转人工
Feat_answer_fUs_lowConfidenceI_012St_012_ticketing .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012St_012_notified : <color:#8D8D8D>工单创建完成
Feat_answer_fUs_lowConfidenceI_012St_012_notified .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_012St_012_answered : <color:#8D8D8D>人工接手
@enduml
`;case`chain001NF-us`:return`@startuml
title "US 环 · Feature-001-NF · 用户故事"
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
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
  rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
  rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
}

Feat_degrade_nfUs_kbEmpty .[#15803d,thickness=2].> Feat_degrade_nfUs_ragTimeout : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeout .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#15803d>读取告警快照
@enduml
`;case`chain001NF-nf`:return`@startuml
title "NF 环 · Feature-001-NF · 极端场景单元清单"
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
skinparam rectangle<<Feat_degrade_nfNf_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
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
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
  rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
  rectangle "==NF-101 知识库为零条时状态可见\\n\\n场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。" <<Feat_degrade_nfNf_kbEmpty>> as Feat_degrade_nfNf_kbEmpty
  rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
  rectangle "==NF-102 RAGFlow 超 8 秒时客户可感知\\n\\n场景：RAGFlow 响应超时。表现：超过 8 秒下发带说明的提示，客服不必反复刷新。角色：客户。" <<Feat_degrade_nfNf_ragTimeout>> as Feat_degrade_nfNf_ragTimeout
  rectangle "==NF-103 LLM 不可用时自动转人工\\n\\n场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。" <<Feat_degrade_nfNf_llmDown>> as Feat_degrade_nfNf_llmDown
}

Feat_degrade_nfUs_kbEmpty .[#15803d,thickness=2].> Feat_degrade_nfUs_ragTimeout : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeout .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#15803d>读取告警快照
Feat_degrade_nfUs_kbEmpty .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_kbEmpty : <color:#0ea5e9>要求
Feat_degrade_nfUs_ragTimeout .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_ragTimeout : <color:#0ea5e9>要求
Feat_degrade_nfUs_llmDown .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_llmDown : <color:#0ea5e9>要求
@enduml
`;case`chain001NF-i-111`:return`@startuml
title "I 环 · Feature-001-NF · I-111 读出条目数并判定空库"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_counting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_empty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111St_111_ready>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111I_111_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111I_111_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-111 阶段性目标 · 读出条目数并判定空库" <<Feat_degrade_nfUs_kbEmptyI_111>> as Feat_degrade_nfUs_kbEmptyI_111 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111>> dashed

  rectangle "==S-111 待读取" <<Feat_degrade_nfUs_kbEmptyI_111St_111_pending>> as Feat_degrade_nfUs_kbEmptyI_111St_111_pending
  rectangle "==S-112 读取中" <<Feat_degrade_nfUs_kbEmptyI_111St_111_counting>> as Feat_degrade_nfUs_kbEmptyI_111St_111_counting
  rectangle "==S-113 判定为空库" <<Feat_degrade_nfUs_kbEmptyI_111St_111_empty>> as Feat_degrade_nfUs_kbEmptyI_111St_111_empty
  rectangle "==S-114 条目正常" <<Feat_degrade_nfUs_kbEmptyI_111St_111_ready>> as Feat_degrade_nfUs_kbEmptyI_111St_111_ready
  rectangle "==I-111-1 读取条目数\\n\\n从文档登记簿读取当前知识条目数，不做过滤。" <<Feat_degrade_nfUs_kbEmptyI_111I_111_1>> as Feat_degrade_nfUs_kbEmptyI_111I_111_1
  rectangle "==I-111-2 判定零条场景\\n\\n条目数为 0 时判定为空库场景，标记需先补素材。" <<Feat_degrade_nfUs_kbEmptyI_111I_111_2>> as Feat_degrade_nfUs_kbEmptyI_111I_111_2
}

Feat_degrade_nfUs_kbEmptyI_111St_111_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111St_111_counting : <color:#8D8D8D>运营人员发起查询
Feat_degrade_nfUs_kbEmptyI_111St_111_counting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111St_111_empty : <color:#8D8D8D>条目数为 0
Feat_degrade_nfUs_kbEmptyI_111St_111_counting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111St_111_ready : <color:#8D8D8D>条目数大于 0
@enduml
`;case`chain001NF-i-112`:return`@startuml
title "I 环 · Feature-001-NF · I-112 把空库显式呈现出来"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112St_112_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112St_112_rendering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112St_112_shown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112I_112_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-112 阶段性目标 · 把空库显式呈现出来" <<Feat_degrade_nfUs_kbEmptyI_112>> as Feat_degrade_nfUs_kbEmptyI_112 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_112>> dashed

  rectangle "==S-115 待呈现" <<Feat_degrade_nfUs_kbEmptyI_112St_112_pending>> as Feat_degrade_nfUs_kbEmptyI_112St_112_pending
  rectangle "==S-116 渲染中" <<Feat_degrade_nfUs_kbEmptyI_112St_112_rendering>> as Feat_degrade_nfUs_kbEmptyI_112St_112_rendering
  rectangle "==S-117 已显式提示" <<Feat_degrade_nfUs_kbEmptyI_112St_112_shown>> as Feat_degrade_nfUs_kbEmptyI_112St_112_shown
  rectangle "==I-112-1 渲染空库提示\\n\\n在控制台显式提示条目数为 0，不显示空白列表。" <<Feat_degrade_nfUs_kbEmptyI_112I_112_1>> as Feat_degrade_nfUs_kbEmptyI_112I_112_1
}

Feat_degrade_nfUs_kbEmptyI_112St_112_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112St_112_rendering : <color:#8D8D8D>判定为空库
Feat_degrade_nfUs_kbEmptyI_112St_112_rendering .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112St_112_shown : <color:#8D8D8D>提示已渲染
@enduml
`;case`chain001NF-i-121`:return`@startuml
title "I 环 · Feature-001-NF · I-121 计时并判定超时"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121St_121_returned>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121I_121_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121I_121_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-121 阶段性目标 · 计时并判定超时" <<Feat_degrade_nfUs_ragTimeoutI_121>> as Feat_degrade_nfUs_ragTimeoutI_121 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_121>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_121>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_121>> dashed

  rectangle "==S-121 待计时" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_pending>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_pending
  rectangle "==S-122 等待响应" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting
  rectangle "==S-123 判定超时" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut
  rectangle "==S-124 按时返回" <<Feat_degrade_nfUs_ragTimeoutI_121St_121_returned>> as Feat_degrade_nfUs_ragTimeoutI_121St_121_returned
  rectangle "==I-121-1 启动超时计时\\n\\n发起检索时同时启动 8 秒计时。" <<Feat_degrade_nfUs_ragTimeoutI_121I_121_1>> as Feat_degrade_nfUs_ragTimeoutI_121I_121_1
  rectangle "==I-121-2 判定超时\\n\\n计时到期仍未返回候选知识时判定超时场景。" <<Feat_degrade_nfUs_ragTimeoutI_121I_121_2>> as Feat_degrade_nfUs_ragTimeoutI_121I_121_2
}

Feat_degrade_nfUs_ragTimeoutI_121St_121_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting : <color:#8D8D8D>发起检索并启动计时
Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_121St_121_timedOut : <color:#8D8D8D>超过 8 秒未返回
Feat_degrade_nfUs_ragTimeoutI_121St_121_waiting .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_121St_121_returned : <color:#8D8D8D>8 秒内返回候选
@enduml
`;case`chain001NF-i-122`:return`@startuml
title "I 环 · Feature-001-NF · I-122 告知客户系统在处理"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122St_122_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122St_122_notified>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122I_122_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-122 阶段性目标 · 告知客户系统在处理" <<Feat_degrade_nfUs_ragTimeoutI_122>> as Feat_degrade_nfUs_ragTimeoutI_122 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_122>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_122>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_122>> dashed

  rectangle "==S-125 待提示" <<Feat_degrade_nfUs_ragTimeoutI_122St_122_pending>> as Feat_degrade_nfUs_ragTimeoutI_122St_122_pending
  rectangle "==S-126 提示中" <<Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying>> as Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying
  rectangle "==S-127 已告知处理中" <<Feat_degrade_nfUs_ragTimeoutI_122St_122_notified>> as Feat_degrade_nfUs_ragTimeoutI_122St_122_notified
  rectangle "==I-122-1 下发处理中提示\\n\\n在会话中告知系统仍在处理，不让客户反复刷新。" <<Feat_degrade_nfUs_ragTimeoutI_122I_122_1>> as Feat_degrade_nfUs_ragTimeoutI_122I_122_1
}

Feat_degrade_nfUs_ragTimeoutI_122St_122_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying : <color:#8D8D8D>判定超时
Feat_degrade_nfUs_ragTimeoutI_122St_122_notifying .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122St_122_notified : <color:#8D8D8D>提示已下发
@enduml
`;case`chain001NF-i-131`:return`@startuml
title "I 环 · Feature-001-NF · I-131 识别模型不可用并转人工"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_calling>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_failed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131St_131_ok>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131I_131_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-131 阶段性目标 · 识别模型不可用并转人工" <<Feat_degrade_nfUs_llmDownI_131>> as Feat_degrade_nfUs_llmDownI_131 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_131>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_131>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_131>> dashed

  rectangle "==S-131 待调用" <<Feat_degrade_nfUs_llmDownI_131St_131_pending>> as Feat_degrade_nfUs_llmDownI_131St_131_pending
  rectangle "==S-132 调用中" <<Feat_degrade_nfUs_llmDownI_131St_131_calling>> as Feat_degrade_nfUs_llmDownI_131St_131_calling
  rectangle "==S-133 模型不可用" <<Feat_degrade_nfUs_llmDownI_131St_131_failed>> as Feat_degrade_nfUs_llmDownI_131St_131_failed
  rectangle "==S-134 调用成功" <<Feat_degrade_nfUs_llmDownI_131St_131_ok>> as Feat_degrade_nfUs_llmDownI_131St_131_ok
  rectangle "==I-131-1 判定调用结果\\n\\n识别模型服务调用失败或返回异常。" <<Feat_degrade_nfUs_llmDownI_131I_131_1>> as Feat_degrade_nfUs_llmDownI_131I_131_1
}

Feat_degrade_nfUs_llmDownI_131St_131_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_131St_131_calling : <color:#8D8D8D>发起模型调用
Feat_degrade_nfUs_llmDownI_131St_131_calling .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_131St_131_failed : <color:#8D8D8D>调用失败或返回异常
Feat_degrade_nfUs_llmDownI_131St_131_calling .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_131St_131_ok : <color:#8D8D8D>调用正常返回
@enduml
`;case`chain001NF-i-132`:return`@startuml
title "I 环 · Feature-001-NF · I-132 建单并告知等待"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_ticketing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_notified>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132St_132_handedOff>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132I_132_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132I_132_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-132 阶段性目标 · 建单并告知等待" <<Feat_degrade_nfUs_llmDownI_132>> as Feat_degrade_nfUs_llmDownI_132 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_132>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_132>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_132>> dashed

  rectangle "==S-135 待建单" <<Feat_degrade_nfUs_llmDownI_132St_132_pending>> as Feat_degrade_nfUs_llmDownI_132St_132_pending
  rectangle "==S-136 建单中" <<Feat_degrade_nfUs_llmDownI_132St_132_ticketing>> as Feat_degrade_nfUs_llmDownI_132St_132_ticketing
  rectangle "==S-137 已告知等待" <<Feat_degrade_nfUs_llmDownI_132St_132_notified>> as Feat_degrade_nfUs_llmDownI_132St_132_notified
  rectangle "==S-138 人工已接管" <<Feat_degrade_nfUs_llmDownI_132St_132_handedOff>> as Feat_degrade_nfUs_llmDownI_132St_132_handedOff
  rectangle "==I-132-1 生成人工工单\\n\\n把提问内容与失败原因写入工单。" <<Feat_degrade_nfUs_llmDownI_132I_132_1>> as Feat_degrade_nfUs_llmDownI_132I_132_1
  rectangle "==I-132-2 告知等待人工\\n\\n在会话中告知已转人工，不返回空白内容。" <<Feat_degrade_nfUs_llmDownI_132I_132_2>> as Feat_degrade_nfUs_llmDownI_132I_132_2
}

Feat_degrade_nfUs_llmDownI_132St_132_pending .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132St_132_ticketing : <color:#8D8D8D>模型判定不可用
Feat_degrade_nfUs_llmDownI_132St_132_ticketing .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132St_132_notified : <color:#8D8D8D>工单创建完成
Feat_degrade_nfUs_llmDownI_132St_132_notified .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_132St_132_handedOff : <color:#8D8D8D>人工接手
@enduml
`;case`chain002F-us`:return`@startuml
title "US 环 · Feature-002-F · 用户故事"
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

skinparam rectangle<<Feat_knowledge_fUs_scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==US-201 素材入库后自动进入候选知识\\n\\n作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan
  rectangle "==US-202 候选知识经我决策后才对外可见\\n\\n作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern
  rectangle "==US-203 知识陈旧时我能收到提示\\n\\n作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert
}

Feat_knowledge_fUs_scan .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_govern : <color:#8D8D8D>[...]
Feat_knowledge_fUs_govern .[#15803d,thickness=2].> Feat_knowledge_fUs_scan : <color:#15803d>触发扫描
Feat_knowledge_fUs_govern .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alert : <color:#8D8D8D>[...]
Feat_knowledge_fUs_alert .[#15803d,thickness=2].> Feat_knowledge_fUs_govern : <color:#15803d>晋升或下线
@enduml
`;case`chain002F-f`:return`@startuml
title "F 环 · Feature-002-F · 业务能力单元清单"
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

skinparam rectangle<<Feat_knowledge_fUs_scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fF_ingest>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fF_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==US-201 素材入库后自动进入候选知识\\n\\n作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan
  rectangle "==US-202 候选知识经我决策后才对外可见\\n\\n作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern
  rectangle "==F-201 素材接入能力\\n\\n接收素材并登记文档标识，支持单条与批量。" <<Feat_knowledge_fF_ingest>> as Feat_knowledge_fF_ingest
  rectangle "==US-203 知识陈旧时我能收到提示\\n\\n作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert
  rectangle "==F-202 知识治理能力\\n\\n候选知识的扫描、决策、晋升与下线。" <<Feat_knowledge_fF_govern>> as Feat_knowledge_fF_govern
}

Feat_knowledge_fUs_scan .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_govern : <color:#8D8D8D>[...]
Feat_knowledge_fUs_govern .[#15803d,thickness=2].> Feat_knowledge_fUs_scan : <color:#15803d>触发扫描
Feat_knowledge_fUs_govern .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alert : <color:#8D8D8D>[...]
Feat_knowledge_fUs_alert .[#15803d,thickness=2].> Feat_knowledge_fUs_govern : <color:#15803d>晋升或下线
Feat_knowledge_fUs_scan .[#0ea5e9,thickness=2].> Feat_knowledge_fF_ingest : <color:#0ea5e9>要求
Feat_knowledge_fUs_govern .[#0ea5e9,thickness=2].> Feat_knowledge_fF_govern : <color:#0ea5e9>要求
Feat_knowledge_fUs_alert .[#0ea5e9,thickness=2].> Feat_knowledge_fF_govern : <color:#0ea5e9>要求
@enduml
`;case`chain002F-i-211`:return`@startuml
title "I 环 · Feature-002-F · I-211 素材入库并产出候选"
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

skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_registering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_scanning>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211St_211_submitted>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211I_211_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211I_211_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211I_211_3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-211 阶段性目标 · 素材入库并产出候选" <<Feat_knowledge_fUs_scanI_211>> as Feat_knowledge_fUs_scanI_211 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scanI_211>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scanI_211>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scanI_211>> dashed

  rectangle "==S-211 待接入" <<Feat_knowledge_fUs_scanI_211St_211_pending>> as Feat_knowledge_fUs_scanI_211St_211_pending
  rectangle "==S-212 登记中" <<Feat_knowledge_fUs_scanI_211St_211_registering>> as Feat_knowledge_fUs_scanI_211St_211_registering
  rectangle "==S-213 扫描中" <<Feat_knowledge_fUs_scanI_211St_211_scanning>> as Feat_knowledge_fUs_scanI_211St_211_scanning
  rectangle "==S-214 已提交候选" <<Feat_knowledge_fUs_scanI_211St_211_submitted>> as Feat_knowledge_fUs_scanI_211St_211_submitted
  rectangle "==I-211-1 登记素材\\n\\n把上传的素材登记到文档簿，生成文档标识。" <<Feat_knowledge_fUs_scanI_211I_211_1>> as Feat_knowledge_fUs_scanI_211I_211_1
  rectangle "==I-211-2 抽取候选知识\\n\\n从素材正文中抽取可独立回答问题的候选条目。" <<Feat_knowledge_fUs_scanI_211I_211_2>> as Feat_knowledge_fUs_scanI_211I_211_2
  rectangle "==I-211-3 提交候选\\n\\n把候选条目提交给治理环节，等待决策。" <<Feat_knowledge_fUs_scanI_211I_211_3>> as Feat_knowledge_fUs_scanI_211I_211_3
}

Feat_knowledge_fUs_scanI_211St_211_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211St_211_registering : <color:#8D8D8D>上传素材
Feat_knowledge_fUs_scanI_211St_211_registering .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211St_211_scanning : <color:#8D8D8D>登记完成
Feat_knowledge_fUs_scanI_211St_211_scanning .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_scanI_211St_211_submitted : <color:#8D8D8D>候选已抽取并提交
@enduml
`;case`chain002F-i-221`:return`@startuml
title "I 环 · Feature-002-F · I-221 审阅决策并晋升"
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

skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_reviewing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_decided>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_promoted>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221St_221_rejected>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221I_221_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221I_221_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221I_221_3>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-221 阶段性目标 · 审阅决策并晋升" <<Feat_knowledge_fUs_governI_221>> as Feat_knowledge_fUs_governI_221 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221>> dashed

  rectangle "==S-221 待审阅" <<Feat_knowledge_fUs_governI_221St_221_pending>> as Feat_knowledge_fUs_governI_221St_221_pending
  rectangle "==S-222 审阅中" <<Feat_knowledge_fUs_governI_221St_221_reviewing>> as Feat_knowledge_fUs_governI_221St_221_reviewing
  rectangle "==S-223 已决策" <<Feat_knowledge_fUs_governI_221St_221_decided>> as Feat_knowledge_fUs_governI_221St_221_decided
  rectangle "==S-224 已晋升可检索" <<Feat_knowledge_fUs_governI_221St_221_promoted>> as Feat_knowledge_fUs_governI_221St_221_promoted
  rectangle "==S-225 已驳回退回" <<Feat_knowledge_fUs_governI_221St_221_rejected>> as Feat_knowledge_fUs_governI_221St_221_rejected
  rectangle "==I-221-1 人工审阅候选\\n\\n展示候选条目供运营人员逐条审阅。" <<Feat_knowledge_fUs_governI_221I_221_1>> as Feat_knowledge_fUs_governI_221I_221_1
  rectangle "==I-221-2 记录决策\\n\\n记录批准或驳回，驳回需填写理由。" <<Feat_knowledge_fUs_governI_221I_221_2>> as Feat_knowledge_fUs_governI_221I_221_2
  rectangle "==I-221-3 晋升知识\\n\\n批准的候选进入知识库生命周期，进入可检索状态。" <<Feat_knowledge_fUs_governI_221I_221_3>> as Feat_knowledge_fUs_governI_221I_221_3
}

Feat_knowledge_fUs_governI_221St_221_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_reviewing : <color:#8D8D8D>候选提交到治理
Feat_knowledge_fUs_governI_221St_221_reviewing .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_decided : <color:#8D8D8D>运营人员记录决策
Feat_knowledge_fUs_governI_221St_221_decided .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_promoted : <color:#8D8D8D>批准晋升
Feat_knowledge_fUs_governI_221St_221_decided .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_governI_221St_221_rejected : <color:#8D8D8D>驳回退回
@enduml
`;case`chain002F-i-231`:return`@startuml
title "I 环 · Feature-002-F · I-231 巡检并判定新鲜度"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_probing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_fresh>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231St_231_stale>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231I_231_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231I_231_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-231 阶段性目标 · 巡检并判定新鲜度" <<Feat_knowledge_fUs_alertI_231>> as Feat_knowledge_fUs_alertI_231 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_231>> dashed

  rectangle "==S-231 待巡检" <<Feat_knowledge_fUs_alertI_231St_231_pending>> as Feat_knowledge_fUs_alertI_231St_231_pending
  rectangle "==S-232 巡检中" <<Feat_knowledge_fUs_alertI_231St_231_probing>> as Feat_knowledge_fUs_alertI_231St_231_probing
  rectangle "==S-233 新鲜度正常" <<Feat_knowledge_fUs_alertI_231St_231_fresh>> as Feat_knowledge_fUs_alertI_231St_231_fresh
  rectangle "==S-234 新鲜度异常" <<Feat_knowledge_fUs_alertI_231St_231_stale>> as Feat_knowledge_fUs_alertI_231St_231_stale
  rectangle "==I-231-1 巡检数据集状态\\n\\n定期探测知识库数据集的可用性与新鲜度。" <<Feat_knowledge_fUs_alertI_231I_231_1>> as Feat_knowledge_fUs_alertI_231I_231_1
  rectangle "==I-231-2 判定新鲜度异常\\n\\n按更新时间阈值判定是否属于陈旧或异常。" <<Feat_knowledge_fUs_alertI_231I_231_2>> as Feat_knowledge_fUs_alertI_231I_231_2
}

Feat_knowledge_fUs_alertI_231St_231_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231St_231_probing : <color:#8D8D8D>到达巡检周期
Feat_knowledge_fUs_alertI_231St_231_probing .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231St_231_fresh : <color:#8D8D8D>全部在阈值内
Feat_knowledge_fUs_alertI_231St_231_probing .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_231St_231_stale : <color:#8D8D8D>存在超阈值条目
@enduml
`;case`chain002F-i-232`:return`@startuml
title "I 环 · Feature-002-F · I-232 上报告警并呈现"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_pending>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_reporting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_listed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232St_232_fixed>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232I_232_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-232 阶段性目标 · 上报告警并呈现" <<Feat_knowledge_fUs_alertI_232>> as Feat_knowledge_fUs_alertI_232 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_232>> dashed

  rectangle "==S-235 待上报" <<Feat_knowledge_fUs_alertI_232St_232_pending>> as Feat_knowledge_fUs_alertI_232St_232_pending
  rectangle "==S-236 上报中" <<Feat_knowledge_fUs_alertI_232St_232_reporting>> as Feat_knowledge_fUs_alertI_232St_232_reporting
  rectangle "==S-237 控制台已列出" <<Feat_knowledge_fUs_alertI_232St_232_listed>> as Feat_knowledge_fUs_alertI_232St_232_listed
  rectangle "==S-238 已修复下线" <<Feat_knowledge_fUs_alertI_232St_232_fixed>> as Feat_knowledge_fUs_alertI_232St_232_fixed
  rectangle "==I-232-1 上报告警\\n\\n把问题条目写入告警并在控制台列出。" <<Feat_knowledge_fUs_alertI_232I_232_1>> as Feat_knowledge_fUs_alertI_232I_232_1
}

Feat_knowledge_fUs_alertI_232St_232_pending .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_232St_232_reporting : <color:#8D8D8D>判定新鲜度异常
Feat_knowledge_fUs_alertI_232St_232_reporting .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_232St_232_listed : <color:#8D8D8D>告警已落库并展示
Feat_knowledge_fUs_alertI_232St_232_listed .[#8D8D8D,thickness=2].> Feat_knowledge_fUs_alertI_232St_232_fixed : <color:#8D8D8D>运营人员修复后下线
@enduml
`;case`pano-src-001F`:return`@startuml
title "SRC 环 · Feature-001-F · 模块目录全览"
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

skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_001>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_002>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_003Ui_003Src_003>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_003Ui_003Src_007>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_001Ui_001Src_005>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_002Ui_002Src_004>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-001 客户提问获得专业答复" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask {
  skinparam RectangleBorderColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_ask>> dashed

  rectangle "I-001 阶段性目标 · 取得可靠候选知识" <<Feat_answer_fUs_askI_001>> as Feat_answer_fUs_askI_001 {
    skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001>> #3b82f6
    skinparam RectangleFontColor<<Feat_answer_fUs_askI_001>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001>> dashed

    rectangle "UI-001 会话输入" <<Feat_answer_fUs_askI_001Ui_001>> as Feat_answer_fUs_askI_001Ui_001 {
      skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
      skinparam RectangleFontColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
      skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001Ui_001>> dashed

      component "==SRC-001 微信客服回调入口\\n\\nsrc/routes/wechat-kf-routes.js — 接收企业微信加密回调并解密分发。" <<Feat_answer_fUs_askI_001Ui_001Src_001>> as Feat_answer_fUs_askI_001Ui_001Src_001
      component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 跨阶段编排：自 I-001 入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属 UI-001 入口分发。" <<Feat_answer_fUs_askI_001Ui_001Src_002>> as Feat_answer_fUs_askI_001Ui_001Src_002
      component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问，服务 I-001-2 检索步骤。" <<Feat_answer_fUs_askI_001Ui_001Src_005>> as Feat_answer_fUs_askI_001Ui_001Src_005
    }
  }
  rectangle "I-003 阶段性目标 · 生成并下发答复" <<Feat_answer_fUs_askI_003>> as Feat_answer_fUs_askI_003 {
    skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003>> #3b82f6
    skinparam RectangleFontColor<<Feat_answer_fUs_askI_003>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003>> dashed

    component "==SRC-003 知识应答循环\\n\\nsrc/services/knowledge-answer-loop-service.js — 检索增强的应答循环。" <<Feat_answer_fUs_askI_003Ui_003Src_003>> as Feat_answer_fUs_askI_003Ui_003Src_003
    component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fUs_askI_003Ui_003Src_007>> as Feat_answer_fUs_askI_003Ui_003Src_007
  }
  rectangle "I-002 阶段性目标 · 判定可否自动答复" <<Feat_answer_fUs_askI_002>> as Feat_answer_fUs_askI_002 {
    skinparam RectangleBorderColor<<Feat_answer_fUs_askI_002>> #3b82f6
    skinparam RectangleFontColor<<Feat_answer_fUs_askI_002>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_002>> dashed

    component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fUs_askI_002Ui_002Src_004>> as Feat_answer_fUs_askI_002Ui_002Src_004
  }
}
rectangle "US-002 答不准时转人工而非硬答" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidence>> dashed

  component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006
}

Feat_answer_fUs_askI_001Ui_001Src_001 .[#15803d,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_002 : <color:#15803d>分发归一化消息
Feat_answer_fUs_askI_001Ui_001Src_002 .[#15803d,thickness=2].> Feat_answer_fUs_askI_003Ui_003Src_003 : <color:#15803d>请求应答
Feat_answer_fUs_askI_003Ui_003Src_003 .[#15803d,thickness=2].> Feat_answer_fUs_askI_001Ui_001Src_005 : <color:#15803d>检索候选知识
Feat_answer_fUs_askI_003Ui_003Src_003 .[#15803d,thickness=2].> Feat_answer_fUs_askI_002Ui_002Src_004 : <color:#15803d>校验置信度
Feat_answer_fUs_askI_001Ui_001Src_002 .[#15803d,thickness=2].> Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006 : <color:#15803d>低置信度时转人工
Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006 .[#15803d,thickness=2].> Feat_answer_fUs_askI_003Ui_003Src_007 : <color:#15803d>持久化工单
@enduml
`;case`carrier001F`:return`@startuml
title "SRC 环 · Feature-001-F · 数据载体全景"
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
`;case`erm001F-ticket`:return`@startuml
title "SRC 环 · Feature-001-F · 数据模型全景 · 工单"
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
`;case`pano-src-001NF`:return`@startuml
title "SRC 环 · Feature-001-NF · 模块目录全览"
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

skinparam component<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_llmDownI_132Ui_132Src_106>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-101 知识库为空时运营人员能看见" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmpty>> dashed

  rectangle "I-111 阶段性目标 · 读出条目数并判定空库" <<Feat_degrade_nfUs_kbEmptyI_111>> as Feat_degrade_nfUs_kbEmptyI_111 {
    skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
    skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111>> dashed

    rectangle "UI-111 状态查询" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111 {
      skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
      skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
      skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> dashed

      component "==SRC-101 集成状态路由\\n\\nsrc/routes/integration-routes.js — 功能概览与集成状态查询。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101
      component "==SRC-104 RAGFlow 生命周期探针\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 校验 RAGFlow 数据集状态与可用性。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104
    }
  }
  rectangle "I-112 阶段性目标 · 把空库显式呈现出来" <<Feat_degrade_nfUs_kbEmptyI_112>> as Feat_degrade_nfUs_kbEmptyI_112 {
    skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
    skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_112>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_112>> dashed

    component "==SRC-103 知识告警\\n\\nsrc/services/knowledge-alert-service.js — 暴露知识新鲜度与空库问题。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103
    component "==SRC-105 运营人员控制台\\n\\nsrc/ui/operator.html — 运营人员单页控制台。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105
  }
}
rectangle "US-102 RAGFlow 超时时客户不被静默等待" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeout>> dashed

  component "==SRC-102 评测闸门\\n\\nsrc/services/evaluation-gate.js — 本地发布策略门禁，判定是否阻断应答。" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102
}
rectangle "US-103 LLM 不可用时转人工而非静默失败" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDown>> dashed

  component "==SRC-106 告警状态存储\\n\\nsrc/domain/store.js — 本链侧的告警与状态快照存储单元。" <<Feat_degrade_nfUs_llmDownI_132Ui_132Src_106>> as Feat_degrade_nfUs_llmDownI_132Ui_132Src_106
}

Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101 .[#15803d,thickness=2].> Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 : <color:#15803d>探测数据集状态
Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101 .[#15803d,thickness=2].> Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103 : <color:#15803d>查询空库告警
Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103 .[#15803d,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102 : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102 .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDownI_132Ui_132Src_106 : <color:#15803d>读取告警快照
@enduml
`;case`carrier001NF`:return`@startuml
title "SRC 环 · Feature-001-NF · 数据载体全景"
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
`;case`erm001NF-alert`:return`@startuml
title "SRC 环 · Feature-001-NF · 数据模型全景 · 告警"
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
`;case`pano-src-002F`:return`@startuml
title "SRC 环 · Feature-002-F · 模块目录全览"
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

skinparam component<<Feat_knowledge_fUs_governI_221Ui_221Src_202>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_201>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_204>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_206>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_scanI_211Ui_211Src_203>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_governI_221Ui_221Src_207>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_231Ui_231Src_208>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_232Ui_232Src_209>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_governI_221Ui_221Src_205>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-202 候选知识经我决策后才对外可见" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_govern>> dashed

  component "==SRC-202 知识库路由\\n\\nsrc/routes/knowledge-routes.js — 知识扫描、同步与生命周期接口。" <<Feat_knowledge_fUs_governI_221Ui_221Src_202>> as Feat_knowledge_fUs_governI_221Ui_221Src_202
  component "==SRC-207 知识治理\\n\\nsrc/services/knowledge-governance-service.js — 发布决策与治理。" <<Feat_knowledge_fUs_governI_221Ui_221Src_207>> as Feat_knowledge_fUs_governI_221Ui_221Src_207
  component "==SRC-205 文档登记簿\\n\\nsrc/services/knowledge-document-registry.js — 跟踪素材与文档标识。" <<Feat_knowledge_fUs_governI_221Ui_221Src_205>> as Feat_knowledge_fUs_governI_221Ui_221Src_205
}
rectangle "US-201 素材入库后自动进入候选知识" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scan>> dashed

  rectangle "UI-211 素材上传" <<Feat_knowledge_fUs_scanI_211Ui_211>> as Feat_knowledge_fUs_scanI_211Ui_211 {
    skinparam RectangleBorderColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
    skinparam RectangleFontColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scanI_211Ui_211>> dashed

    component "==SRC-201 素材路由\\n\\nsrc/routes/material-routes.js — 美妆素材接入接口。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_201>> as Feat_knowledge_fUs_scanI_211Ui_211Src_201
    component "==SRC-204 素材批处理\\n\\nsrc/services/material-batch-service.js — 批量素材接入。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_204>> as Feat_knowledge_fUs_scanI_211Ui_211Src_204
    component "==SRC-206 知识扫描\\n\\nsrc/services/knowledge-scan-service.js — 发现候选知识。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_206>> as Feat_knowledge_fUs_scanI_211Ui_211Src_206
    component "==SRC-203 素材服务\\n\\nsrc/services/material-service.js — 素材接入规则。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_203>> as Feat_knowledge_fUs_scanI_211Ui_211Src_203
  }
}
rectangle "US-203 知识陈旧时我能收到提示" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alert>> dashed

  rectangle "I-231 阶段性目标 · 巡检并判定新鲜度" <<Feat_knowledge_fUs_alertI_231>> as Feat_knowledge_fUs_alertI_231 {
    skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
    skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_231>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_231>> dashed

    component "==SRC-208 知识同步\\n\\nsrc/services/knowledge-sync-service.js — 把已批准知识推送到 RAGFlow。" <<Feat_knowledge_fUs_alertI_231Ui_231Src_208>> as Feat_knowledge_fUs_alertI_231Ui_231Src_208
  }
  rectangle "I-232 阶段性目标 · 上报告警并呈现" <<Feat_knowledge_fUs_alertI_232>> as Feat_knowledge_fUs_alertI_232 {
    skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
    skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_232>> #3b82f6
    skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_232>> dashed

    component "==SRC-209 知识生命周期视图\\n\\nsrc/services/knowledge-lifecycle-service.js — 知识的晋升与下线。" <<Feat_knowledge_fUs_alertI_232Ui_232Src_209>> as Feat_knowledge_fUs_alertI_232Ui_232Src_209
  }
}

Feat_knowledge_fUs_scanI_211Ui_211Src_201 .[#15803d,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_203 : <color:#15803d>接收素材
Feat_knowledge_fUs_scanI_211Ui_211Src_204 .[#15803d,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_203 : <color:#15803d>批量接入
Feat_knowledge_fUs_scanI_211Ui_211Src_206 .[#15803d,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221Src_207 : <color:#15803d>提交候选
Feat_knowledge_fUs_governI_221Ui_221Src_202 .[#15803d,thickness=2].> Feat_knowledge_fUs_scanI_211Ui_211Src_206 : <color:#15803d>触发扫描
Feat_knowledge_fUs_scanI_211Ui_211Src_203 .[#15803d,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221Src_205 : <color:#15803d>登记文档
Feat_knowledge_fUs_governI_221Ui_221Src_207 .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_231Ui_231Src_208 : <color:#15803d>批准后推送
Feat_knowledge_fUs_alertI_231Ui_231Src_208 .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_232Ui_232Src_209 : <color:#15803d>更新生命周期
Feat_knowledge_fUs_alertI_232Ui_232Src_209 .[#15803d,thickness=2].> Feat_knowledge_fUs_governI_221Ui_221Src_205 : <color:#15803d>晋升或下线
@enduml
`;case`carrier002F`:return`@startuml
title "SRC 环 · Feature-002-F · 数据载体全景"
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

skinparam rectangle<<Feat_knowledge_fIn_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fCvt_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fOut_knowledgeStatus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==IN-201 素材入参\\n\\nsrc/routes/material-routes.js — 上传素材的请求载荷。" <<Feat_knowledge_fIn_material>> as Feat_knowledge_fIn_material
rectangle "==CVT-201 素材转换器\\n\\nsrc/services/material-service.js — 覆盖 素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。" <<Feat_knowledge_fCvt_material>> as Feat_knowledge_fCvt_material
rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate
rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry
rectangle "==OUT-201 知识状态出参视图\\n\\nsrc/routes/knowledge-routes.js — 面向控制台的扫描与治理状态载荷。" <<Feat_knowledge_fOut_knowledgeStatus>> as Feat_knowledge_fOut_knowledgeStatus

Feat_knowledge_fIn_material .[#64748b,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#64748b>转换为候选对象
Feat_knowledge_fBiz_candidate .[#64748b,thickness=2].> Feat_knowledge_fPod_document : <color:#64748b>登记为文档实体
Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>写入文档标识
Feat_knowledge_fDao_registry .[#3b82f6,thickness=2].> Feat_knowledge_fOut_knowledgeStatus : <color:#3b82f6>查询状态
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#0ea5e9>负责 素材→BIZ-201 映射
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fPod_document : <color:#0ea5e9>负责 BIZ-201→POD-201 映射
@enduml
`;case`erm002F-document`:return`@startuml
title "SRC 环 · Feature-002-F · 数据模型全景 · 文档"
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

skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry

Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>写入文档标识
@enduml
`;case`ui001F-001`:return`@startuml
title "UI 环 · Feature-001-F · I-001-UI-001 会话输入"
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

skinparam rectangle<<Feat_answer_fUs_askI_001Ui_001Ui_001_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_001Ui_001Ui_001_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-001 会话输入" <<Feat_answer_fUs_askI_001Ui_001>> as Feat_answer_fUs_askI_001Ui_001 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001Ui_001>> dashed

  rectangle "==UI-001-信息设计-001 提问输入信息\\n\\n字段：问题原文。覆盖空态（未输入）、加载态（提交中）、错误态（解密失败）、无权限态（未授权会话）。" <<Feat_answer_fUs_askI_001Ui_001Ui_001_info_1>> as Feat_answer_fUs_askI_001Ui_001Ui_001_info_1
  rectangle "==UI-001-交互设计-001 提交提问\\n\\n客户发送提问后立即进入等待，无需任何手动操作；提交失败可原位重试。" <<Feat_answer_fUs_askI_001Ui_001Ui_001_act_1>> as Feat_answer_fUs_askI_001Ui_001Ui_001_act_1
}
@enduml
`;case`ui001F-001-info-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-001-信息设计-001 提问输入信息"
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

skinparam rectangle<<Feat_answer_fUs_askI_001Ui_001Ui_001_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-001 会话输入" <<Feat_answer_fUs_askI_001Ui_001>> as Feat_answer_fUs_askI_001Ui_001 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001Ui_001>> dashed

  rectangle "==UI-001-信息设计-001 提问输入信息\\n\\n字段：问题原文。覆盖空态（未输入）、加载态（提交中）、错误态（解密失败）、无权限态（未授权会话）。" <<Feat_answer_fUs_askI_001Ui_001Ui_001_info_1>> as Feat_answer_fUs_askI_001Ui_001Ui_001_info_1
}
@enduml
`;case`ui001F-001-act-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-001-交互设计-001 提交提问"
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

skinparam rectangle<<Feat_answer_fUs_askI_001Ui_001Ui_001_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-001 会话输入" <<Feat_answer_fUs_askI_001Ui_001>> as Feat_answer_fUs_askI_001Ui_001 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_001Ui_001>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001Ui_001>> dashed

  rectangle "==UI-001-交互设计-001 提交提问\\n\\n客户发送提问后立即进入等待，无需任何手动操作；提交失败可原位重试。" <<Feat_answer_fUs_askI_001Ui_001Ui_001_act_1>> as Feat_answer_fUs_askI_001Ui_001Ui_001_act_1
}
@enduml
`;case`ui001F-002`:return`@startuml
title "UI 环 · Feature-001-F · I-002-UI-002 判定反馈"
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

skinparam rectangle<<Feat_answer_fUs_askI_002Ui_002Ui_002_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_002Ui_002Ui_002_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-002 判定反馈" <<Feat_answer_fUs_askI_002Ui_002>> as Feat_answer_fUs_askI_002Ui_002 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_002Ui_002>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_002Ui_002>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_002Ui_002>> dashed

  rectangle "==UI-002-信息设计-001 判定中提示\\n\\n字段：处理中状态文案。覆盖加载态（校验中）、错误态（校验服务不可用）。" <<Feat_answer_fUs_askI_002Ui_002Ui_002_info_1>> as Feat_answer_fUs_askI_002Ui_002Ui_002_info_1
  rectangle "==UI-002-交互设计-001 等待免刷新\\n\\n判定期间客户无需任何操作，不出现需要手动刷新的界面。" <<Feat_answer_fUs_askI_002Ui_002Ui_002_act_1>> as Feat_answer_fUs_askI_002Ui_002Ui_002_act_1
}
@enduml
`;case`ui001F-002-info-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-002-信息设计-001 判定中提示"
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

skinparam rectangle<<Feat_answer_fUs_askI_002Ui_002Ui_002_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-002 判定反馈" <<Feat_answer_fUs_askI_002Ui_002>> as Feat_answer_fUs_askI_002Ui_002 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_002Ui_002>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_002Ui_002>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_002Ui_002>> dashed

  rectangle "==UI-002-信息设计-001 判定中提示\\n\\n字段：处理中状态文案。覆盖加载态（校验中）、错误态（校验服务不可用）。" <<Feat_answer_fUs_askI_002Ui_002Ui_002_info_1>> as Feat_answer_fUs_askI_002Ui_002Ui_002_info_1
}
@enduml
`;case`ui001F-002-act-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-002-交互设计-001 等待免刷新"
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

skinparam rectangle<<Feat_answer_fUs_askI_002Ui_002Ui_002_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-002 判定反馈" <<Feat_answer_fUs_askI_002Ui_002>> as Feat_answer_fUs_askI_002Ui_002 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_002Ui_002>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_002Ui_002>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_002Ui_002>> dashed

  rectangle "==UI-002-交互设计-001 等待免刷新\\n\\n判定期间客户无需任何操作，不出现需要手动刷新的界面。" <<Feat_answer_fUs_askI_002Ui_002Ui_002_act_1>> as Feat_answer_fUs_askI_002Ui_002Ui_002_act_1
}
@enduml
`;case`ui001F-003`:return`@startuml
title "UI 环 · Feature-001-F · I-003-UI-003 答复呈现"
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

skinparam rectangle<<Feat_answer_fUs_askI_003Ui_003Ui_003_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003Ui_003Ui_003_info_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_003Ui_003Ui_003_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-003 答复呈现" <<Feat_answer_fUs_askI_003Ui_003>> as Feat_answer_fUs_askI_003Ui_003 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003Ui_003>> dashed

  rectangle "==UI-003-信息设计-001 答复正文字段\\n\\n字段：答复正文。覆盖加载态（生成中）、错误态（生成失败转人工）。" <<Feat_answer_fUs_askI_003Ui_003Ui_003_info_1>> as Feat_answer_fUs_askI_003Ui_003Ui_003_info_1
  rectangle "==UI-003-信息设计-002 知识来源条目\\n\\n字段：来源知识条目标题与链接。空态：无来源（转人工路径不展示）。" <<Feat_answer_fUs_askI_003Ui_003Ui_003_info_2>> as Feat_answer_fUs_askI_003Ui_003Ui_003_info_2
  rectangle "==UI-003-交互设计-001 答复同屏呈现\\n\\n答复与提问同屏呈现，客户无需滚动查找；答复不可编辑。" <<Feat_answer_fUs_askI_003Ui_003Ui_003_act_1>> as Feat_answer_fUs_askI_003Ui_003Ui_003_act_1
}
@enduml
`;case`ui001F-003-info-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-003-信息设计-001 答复正文字段"
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

skinparam rectangle<<Feat_answer_fUs_askI_003Ui_003Ui_003_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-003 答复呈现" <<Feat_answer_fUs_askI_003Ui_003>> as Feat_answer_fUs_askI_003Ui_003 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003Ui_003>> dashed

  rectangle "==UI-003-信息设计-001 答复正文字段\\n\\n字段：答复正文。覆盖加载态（生成中）、错误态（生成失败转人工）。" <<Feat_answer_fUs_askI_003Ui_003Ui_003_info_1>> as Feat_answer_fUs_askI_003Ui_003Ui_003_info_1
}
@enduml
`;case`ui001F-003-info-2`:return`@startuml
title "UI 环 · Feature-001-F · UI-003-信息设计-002 知识来源条目"
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

skinparam rectangle<<Feat_answer_fUs_askI_003Ui_003Ui_003_info_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-003 答复呈现" <<Feat_answer_fUs_askI_003Ui_003>> as Feat_answer_fUs_askI_003Ui_003 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003Ui_003>> dashed

  rectangle "==UI-003-信息设计-002 知识来源条目\\n\\n字段：来源知识条目标题与链接。空态：无来源（转人工路径不展示）。" <<Feat_answer_fUs_askI_003Ui_003Ui_003_info_2>> as Feat_answer_fUs_askI_003Ui_003Ui_003_info_2
}
@enduml
`;case`ui001F-003-act-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-003-交互设计-001 答复同屏呈现"
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

skinparam rectangle<<Feat_answer_fUs_askI_003Ui_003Ui_003_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-003 答复呈现" <<Feat_answer_fUs_askI_003Ui_003>> as Feat_answer_fUs_askI_003Ui_003 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_003Ui_003>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_003Ui_003>> dashed

  rectangle "==UI-003-交互设计-001 答复同屏呈现\\n\\n答复与提问同屏呈现，客户无需滚动查找；答复不可编辑。" <<Feat_answer_fUs_askI_003Ui_003Ui_003_act_1>> as Feat_answer_fUs_askI_003Ui_003Ui_003_act_1
}
@enduml
`;case`ui001F-011`:return`@startuml
title "UI 环 · Feature-001-F · I-011-UI-011 转接提示"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-011 转接提示" <<Feat_answer_fUs_lowConfidenceI_011Ui_011>> as Feat_answer_fUs_lowConfidenceI_011Ui_011 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> dashed

  rectangle "==UI-011-信息设计-001 转接中提示\\n\\n字段：转接状态文案。覆盖加载态（判定中）、错误态（转接失败重试）。" <<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_info_1>> as Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_info_1
  rectangle "==UI-011-交互设计-001 转接反馈\\n\\n转接期间客户可见状态变化，无需重复提问。" <<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_act_1>> as Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_act_1
}
@enduml
`;case`ui001F-011-info-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-011-信息设计-001 转接中提示"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-011 转接提示" <<Feat_answer_fUs_lowConfidenceI_011Ui_011>> as Feat_answer_fUs_lowConfidenceI_011Ui_011 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> dashed

  rectangle "==UI-011-信息设计-001 转接中提示\\n\\n字段：转接状态文案。覆盖加载态（判定中）、错误态（转接失败重试）。" <<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_info_1>> as Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_info_1
}
@enduml
`;case`ui001F-011-act-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-011-交互设计-001 转接反馈"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-011 转接提示" <<Feat_answer_fUs_lowConfidenceI_011Ui_011>> as Feat_answer_fUs_lowConfidenceI_011Ui_011 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_011Ui_011>> dashed

  rectangle "==UI-011-交互设计-001 转接反馈\\n\\n转接期间客户可见状态变化，无需重复提问。" <<Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_act_1>> as Feat_answer_fUs_lowConfidenceI_011Ui_011Ui_011_act_1
}
@enduml
`;case`ui001F-012`:return`@startuml
title "UI 环 · Feature-001-F · I-012-UI-012 转人工告知"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-012 转人工告知" <<Feat_answer_fUs_lowConfidenceI_012Ui_012>> as Feat_answer_fUs_lowConfidenceI_012Ui_012 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> dashed

  rectangle "==UI-012-信息设计-001 等待告知信息\\n\\n字段：预计等待说明。覆盖加载态（建单中）、错误态（建单失败）。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_info_1>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_info_1
  rectangle "==UI-012-交互设计-001 工单状态查看\\n\\n运营人员通过工单列表查看待接手工单，客户无需操作。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_act_1>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_act_1
}
@enduml
`;case`ui001F-012-info-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-012-信息设计-001 等待告知信息"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-012 转人工告知" <<Feat_answer_fUs_lowConfidenceI_012Ui_012>> as Feat_answer_fUs_lowConfidenceI_012Ui_012 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> dashed

  rectangle "==UI-012-信息设计-001 等待告知信息\\n\\n字段：预计等待说明。覆盖加载态（建单中）、错误态（建单失败）。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_info_1>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_info_1
}
@enduml
`;case`ui001F-012-act-1`:return`@startuml
title "UI 环 · Feature-001-F · UI-012-交互设计-001 工单状态查看"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-012 转人工告知" <<Feat_answer_fUs_lowConfidenceI_012Ui_012>> as Feat_answer_fUs_lowConfidenceI_012Ui_012 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_012Ui_012>> dashed

  rectangle "==UI-012-交互设计-001 工单状态查看\\n\\n运营人员通过工单列表查看待接手工单，客户无需操作。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_act_1>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Ui_012_act_1
}
@enduml
`;case`ui001NF-111`:return`@startuml
title "UI 环 · Feature-001-NF · I-111-UI-111 状态查询"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-111 状态查询" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> dashed

  rectangle "==UI-111-信息设计-001 条目数展示\\n\\n字段：当前知识条目数。覆盖空态（尚未入库）、加载态（读取中）、错误态（读取失败）。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_info_1>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_info_1
  rectangle "==UI-111-交互设计-001 发起查询\\n\\n运营人员点击查询后立即反馈读取中，无需刷新页面。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_act_1>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_act_1
}
@enduml
`;case`ui001NF-111-info-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-111-信息设计-001 条目数展示"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-111 状态查询" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> dashed

  rectangle "==UI-111-信息设计-001 条目数展示\\n\\n字段：当前知识条目数。覆盖空态（尚未入库）、加载态（读取中）、错误态（读取失败）。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_info_1>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_info_1
}
@enduml
`;case`ui001NF-111-act-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-111-交互设计-001 发起查询"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-111 状态查询" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111>> dashed

  rectangle "==UI-111-交互设计-001 发起查询\\n\\n运营人员点击查询后立即反馈读取中，无需刷新页面。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_act_1>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Ui_111_act_1
}
@enduml
`;case`ui001NF-112`:return`@startuml
title "UI 环 · Feature-001-NF · I-112-UI-112 空库提示呈现"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-112 空库提示呈现" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> dashed

  rectangle "==UI-112-信息设计-001 空库提示信息\\n\\n字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1
  rectangle "==UI-112-交互设计-001 控制台查看\\n\\n运营人员打开控制台即见提示，无需逐页排查。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_act_1>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_act_1
}
@enduml
`;case`ui001NF-112-info-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-112-信息设计-001 空库提示信息"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-112 空库提示呈现" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> dashed

  rectangle "==UI-112-信息设计-001 空库提示信息\\n\\n字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1
}
@enduml
`;case`ui001NF-112-act-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-112-交互设计-001 控制台查看"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-112 空库提示呈现" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_112Ui_112>> dashed

  rectangle "==UI-112-交互设计-001 控制台查看\\n\\n运营人员打开控制台即见提示，无需逐页排查。" <<Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_act_1>> as Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_act_1
}
@enduml
`;case`ui001NF-121`:return`@startuml
title "UI 环 · Feature-001-NF · I-121-UI-121 等待反馈"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-121 等待反馈" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> dashed

  rectangle "==UI-121-信息设计-001 等待中提示\\n\\n字段：等待状态文案。覆盖加载态（检索中）、超时态（判定中）。" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_info_1>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_info_1
  rectangle "==UI-121-交互设计-001 免手动刷新\\n\\n等待期间界面持续显示处理中，客户不需反复刷新。" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_act_1>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_act_1
}
@enduml
`;case`ui001NF-121-info-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-121-信息设计-001 等待中提示"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-121 等待反馈" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> dashed

  rectangle "==UI-121-信息设计-001 等待中提示\\n\\n字段：等待状态文案。覆盖加载态（检索中）、超时态（判定中）。" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_info_1>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_info_1
}
@enduml
`;case`ui001NF-121-act-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-121-交互设计-001 免手动刷新"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-121 等待反馈" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_121Ui_121>> dashed

  rectangle "==UI-121-交互设计-001 免手动刷新\\n\\n等待期间界面持续显示处理中，客户不需反复刷新。" <<Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_act_1>> as Feat_degrade_nfUs_ragTimeoutI_121Ui_121Ui_121_act_1
}
@enduml
`;case`ui001NF-122`:return`@startuml
title "UI 环 · Feature-001-NF · I-122-UI-122 处理中提示"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-122 处理中提示" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> dashed

  rectangle "==UI-122-信息设计-001 处理中提示信息\\n\\n字段：处理说明与预计时长。覆盖加载态（判定中）、错误态（判定失败）。" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_info_1>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_info_1
  rectangle "==UI-122-交互设计-001 提示下发\\n\\n提示在会话内直接出现，客户无需操作。" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_act_1>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_act_1
}
@enduml
`;case`ui001NF-122-info-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-122-信息设计-001 处理中提示信息"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-122 处理中提示" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> dashed

  rectangle "==UI-122-信息设计-001 处理中提示信息\\n\\n字段：处理说明与预计时长。覆盖加载态（判定中）、错误态（判定失败）。" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_info_1>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_info_1
}
@enduml
`;case`ui001NF-122-act-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-122-交互设计-001 提示下发"
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

skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-122 处理中提示" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeoutI_122Ui_122>> dashed

  rectangle "==UI-122-交互设计-001 提示下发\\n\\n提示在会话内直接出现，客户无需操作。" <<Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_act_1>> as Feat_degrade_nfUs_ragTimeoutI_122Ui_122Ui_122_act_1
}
@enduml
`;case`ui001NF-131`:return`@startuml
title "UI 环 · Feature-001-NF · I-131-UI-131 调用反馈"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-131 调用反馈" <<Feat_degrade_nfUs_llmDownI_131Ui_131>> as Feat_degrade_nfUs_llmDownI_131Ui_131 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_131Ui_131>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_131Ui_131>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_131Ui_131>> dashed

  rectangle "==UI-131-信息设计-001 调用异常提示\\n\\n字段：异常状态说明。覆盖加载态（调用中）、错误态（模型不可用）。" <<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_info_1>> as Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_info_1
  rectangle "==UI-131-交互设计-001 异常反馈\\n\\n异常时界面不出现空白回复，自动进入转接流程。" <<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_act_1>> as Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_act_1
}
@enduml
`;case`ui001NF-131-info-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-131-信息设计-001 调用异常提示"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-131 调用反馈" <<Feat_degrade_nfUs_llmDownI_131Ui_131>> as Feat_degrade_nfUs_llmDownI_131Ui_131 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_131Ui_131>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_131Ui_131>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_131Ui_131>> dashed

  rectangle "==UI-131-信息设计-001 调用异常提示\\n\\n字段：异常状态说明。覆盖加载态（调用中）、错误态（模型不可用）。" <<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_info_1>> as Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_info_1
}
@enduml
`;case`ui001NF-131-act-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-131-交互设计-001 异常反馈"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-131 调用反馈" <<Feat_degrade_nfUs_llmDownI_131Ui_131>> as Feat_degrade_nfUs_llmDownI_131Ui_131 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_131Ui_131>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_131Ui_131>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_131Ui_131>> dashed

  rectangle "==UI-131-交互设计-001 异常反馈\\n\\n异常时界面不出现空白回复，自动进入转接流程。" <<Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_act_1>> as Feat_degrade_nfUs_llmDownI_131Ui_131Ui_131_act_1
}
@enduml
`;case`ui001NF-132`:return`@startuml
title "UI 环 · Feature-001-NF · I-132-UI-132 转人工告知"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-132 转人工告知" <<Feat_degrade_nfUs_llmDownI_132Ui_132>> as Feat_degrade_nfUs_llmDownI_132Ui_132 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_132Ui_132>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_132Ui_132>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_132Ui_132>> dashed

  rectangle "==UI-132-信息设计-001 等待告知信息\\n\\n字段：等待说明与失败原因摘要。覆盖加载态（建单中）、错误态（建单失败）。" <<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_info_1>> as Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_info_1
  rectangle "==UI-132-交互设计-001 告警查看\\n\\n运营人员在控制台查看告警并接手工单。" <<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_act_1>> as Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_act_1
}
@enduml
`;case`ui001NF-132-info-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-132-信息设计-001 等待告知信息"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-132 转人工告知" <<Feat_degrade_nfUs_llmDownI_132Ui_132>> as Feat_degrade_nfUs_llmDownI_132Ui_132 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_132Ui_132>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_132Ui_132>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_132Ui_132>> dashed

  rectangle "==UI-132-信息设计-001 等待告知信息\\n\\n字段：等待说明与失败原因摘要。覆盖加载态（建单中）、错误态（建单失败）。" <<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_info_1>> as Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_info_1
}
@enduml
`;case`ui001NF-132-act-1`:return`@startuml
title "UI 环 · Feature-001-NF · UI-132-交互设计-001 告警查看"
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

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-132 转人工告知" <<Feat_degrade_nfUs_llmDownI_132Ui_132>> as Feat_degrade_nfUs_llmDownI_132Ui_132 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_132Ui_132>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_132Ui_132>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_132Ui_132>> dashed

  rectangle "==UI-132-交互设计-001 告警查看\\n\\n运营人员在控制台查看告警并接手工单。" <<Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_act_1>> as Feat_degrade_nfUs_llmDownI_132Ui_132Ui_132_act_1
}
@enduml
`;case`ui002F-211`:return`@startuml
title "UI 环 · Feature-002-F · I-211-UI-211 素材上传"
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

skinparam rectangle<<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-211 素材上传" <<Feat_knowledge_fUs_scanI_211Ui_211>> as Feat_knowledge_fUs_scanI_211Ui_211 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scanI_211Ui_211>> dashed

  rectangle "==UI-211-信息设计-001 上传表单信息\\n\\n字段：素材文件、来源标注。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。" <<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_info_1>> as Feat_knowledge_fUs_scanI_211Ui_211Ui_211_info_1
  rectangle "==UI-211-交互设计-001 上传提交\\n\\n上传后立即显示扫描进度，支持批量上传。" <<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_act_1>> as Feat_knowledge_fUs_scanI_211Ui_211Ui_211_act_1
}
@enduml
`;case`ui002F-211-info-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-211-信息设计-001 上传表单信息"
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

skinparam rectangle<<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-211 素材上传" <<Feat_knowledge_fUs_scanI_211Ui_211>> as Feat_knowledge_fUs_scanI_211Ui_211 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scanI_211Ui_211>> dashed

  rectangle "==UI-211-信息设计-001 上传表单信息\\n\\n字段：素材文件、来源标注。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。" <<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_info_1>> as Feat_knowledge_fUs_scanI_211Ui_211Ui_211_info_1
}
@enduml
`;case`ui002F-211-act-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-211-交互设计-001 上传提交"
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

skinparam rectangle<<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-211 素材上传" <<Feat_knowledge_fUs_scanI_211Ui_211>> as Feat_knowledge_fUs_scanI_211Ui_211 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scanI_211Ui_211>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scanI_211Ui_211>> dashed

  rectangle "==UI-211-交互设计-001 上传提交\\n\\n上传后立即显示扫描进度，支持批量上传。" <<Feat_knowledge_fUs_scanI_211Ui_211Ui_211_act_1>> as Feat_knowledge_fUs_scanI_211Ui_211Ui_211_act_1
}
@enduml
`;case`ui002F-221`:return`@startuml
title "UI 环 · Feature-002-F · I-221-UI-221 审阅工作台"
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

skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Ui_221_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-221 审阅工作台" <<Feat_knowledge_fUs_governI_221Ui_221>> as Feat_knowledge_fUs_governI_221Ui_221 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221Ui_221>> dashed

  rectangle "==UI-221-信息设计-001 候选条目列表\\n\\n字段：素材标识、来源、扫描状态。覆盖空态（暂无候选）、加载态（载入中）。" <<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_1>> as Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_1
  rectangle "==UI-221-信息设计-002 决策记录字段\\n\\n字段：决策结果、驳回理由。驳回时理由必填。" <<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_2>> as Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_2
  rectangle "==UI-221-交互设计-001 批准驳回操作\\n\\n逐条批准或驳回，驳回需先填理由再提交；决策不可撤销需二次确认。" <<Feat_knowledge_fUs_governI_221Ui_221Ui_221_act_1>> as Feat_knowledge_fUs_governI_221Ui_221Ui_221_act_1
}
@enduml
`;case`ui002F-221-info-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-221-信息设计-001 候选条目列表"
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

skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-221 审阅工作台" <<Feat_knowledge_fUs_governI_221Ui_221>> as Feat_knowledge_fUs_governI_221Ui_221 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221Ui_221>> dashed

  rectangle "==UI-221-信息设计-001 候选条目列表\\n\\n字段：素材标识、来源、扫描状态。覆盖空态（暂无候选）、加载态（载入中）。" <<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_1>> as Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_1
}
@enduml
`;case`ui002F-221-info-2`:return`@startuml
title "UI 环 · Feature-002-F · UI-221-信息设计-002 决策记录字段"
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

skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_2>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-221 审阅工作台" <<Feat_knowledge_fUs_governI_221Ui_221>> as Feat_knowledge_fUs_governI_221Ui_221 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221Ui_221>> dashed

  rectangle "==UI-221-信息设计-002 决策记录字段\\n\\n字段：决策结果、驳回理由。驳回时理由必填。" <<Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_2>> as Feat_knowledge_fUs_governI_221Ui_221Ui_221_info_2
}
@enduml
`;case`ui002F-221-act-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-221-交互设计-001 批准驳回操作"
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

skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Ui_221_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-221 审阅工作台" <<Feat_knowledge_fUs_governI_221Ui_221>> as Feat_knowledge_fUs_governI_221Ui_221 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221Ui_221>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221Ui_221>> dashed

  rectangle "==UI-221-交互设计-001 批准驳回操作\\n\\n逐条批准或驳回，驳回需先填理由再提交；决策不可撤销需二次确认。" <<Feat_knowledge_fUs_governI_221Ui_221Ui_221_act_1>> as Feat_knowledge_fUs_governI_221Ui_221Ui_221_act_1
}
@enduml
`;case`ui002F-231`:return`@startuml
title "UI 环 · Feature-002-F · I-231-UI-231 巡检状态"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-231 巡检状态" <<Feat_knowledge_fUs_alertI_231Ui_231>> as Feat_knowledge_fUs_alertI_231Ui_231 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_231Ui_231>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_231Ui_231>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_231Ui_231>> dashed

  rectangle "==UI-231-信息设计-001 新鲜度状态\\n\\n字段：新鲜度天数。覆盖正常态（阈值内）、异常态（超阈值标红）。" <<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_info_1>> as Feat_knowledge_fUs_alertI_231Ui_231Ui_231_info_1
  rectangle "==UI-231-交互设计-001 触发巡检\\n\\n巡检自动定期执行，也支持手动触发；结果即时刷新。" <<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_act_1>> as Feat_knowledge_fUs_alertI_231Ui_231Ui_231_act_1
}
@enduml
`;case`ui002F-231-info-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-231-信息设计-001 新鲜度状态"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-231 巡检状态" <<Feat_knowledge_fUs_alertI_231Ui_231>> as Feat_knowledge_fUs_alertI_231Ui_231 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_231Ui_231>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_231Ui_231>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_231Ui_231>> dashed

  rectangle "==UI-231-信息设计-001 新鲜度状态\\n\\n字段：新鲜度天数。覆盖正常态（阈值内）、异常态（超阈值标红）。" <<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_info_1>> as Feat_knowledge_fUs_alertI_231Ui_231Ui_231_info_1
}
@enduml
`;case`ui002F-231-act-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-231-交互设计-001 触发巡检"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-231 巡检状态" <<Feat_knowledge_fUs_alertI_231Ui_231>> as Feat_knowledge_fUs_alertI_231Ui_231 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_231Ui_231>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_231Ui_231>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_231Ui_231>> dashed

  rectangle "==UI-231-交互设计-001 触发巡检\\n\\n巡检自动定期执行，也支持手动触发；结果即时刷新。" <<Feat_knowledge_fUs_alertI_231Ui_231Ui_231_act_1>> as Feat_knowledge_fUs_alertI_231Ui_231Ui_231_act_1
}
@enduml
`;case`ui002F-232`:return`@startuml
title "UI 环 · Feature-002-F · I-232-UI-232 告警呈现"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-232 告警呈现" <<Feat_knowledge_fUs_alertI_232Ui_232>> as Feat_knowledge_fUs_alertI_232Ui_232 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_232Ui_232>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_232Ui_232>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_232Ui_232>> dashed

  rectangle "==UI-232-信息设计-001 告警列表\\n\\n字段：问题条目标识、新鲜度天数、异常原因。覆盖空态（无异常）、异常态（列出新问题）。" <<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_info_1>> as Feat_knowledge_fUs_alertI_232Ui_232Ui_232_info_1
  rectangle "==UI-232-交互设计-001 告警处理\\n\\n从告警条目直达修复入口，处理后标记下线。" <<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_act_1>> as Feat_knowledge_fUs_alertI_232Ui_232Ui_232_act_1
}
@enduml
`;case`ui002F-232-info-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-232-信息设计-001 告警列表"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_info_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-232 告警呈现" <<Feat_knowledge_fUs_alertI_232Ui_232>> as Feat_knowledge_fUs_alertI_232Ui_232 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_232Ui_232>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_232Ui_232>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_232Ui_232>> dashed

  rectangle "==UI-232-信息设计-001 告警列表\\n\\n字段：问题条目标识、新鲜度天数、异常原因。覆盖空态（无异常）、异常态（列出新问题）。" <<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_info_1>> as Feat_knowledge_fUs_alertI_232Ui_232Ui_232_info_1
}
@enduml
`;case`ui002F-232-act-1`:return`@startuml
title "UI 环 · Feature-002-F · UI-232-交互设计-001 告警处理"
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

skinparam rectangle<<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_act_1>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-232 告警呈现" <<Feat_knowledge_fUs_alertI_232Ui_232>> as Feat_knowledge_fUs_alertI_232Ui_232 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_232Ui_232>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_232Ui_232>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_232Ui_232>> dashed

  rectangle "==UI-232-交互设计-001 告警处理\\n\\n从告警条目直达修复入口，处理后标记下线。" <<Feat_knowledge_fUs_alertI_232Ui_232Ui_232_act_1>> as Feat_knowledge_fUs_alertI_232Ui_232Ui_232_act_1
}
@enduml
`;case`api001F-src001-1`:return`@startuml
title "callback 微信客服回调"
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

skinparam rectangle<<Feat_answer_fUs_askI_001Ui_001Src_001Api_001>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "SRC-001 微信客服回调入口" <<Feat_answer_fUs_askI_001Ui_001Src_001>> as Feat_answer_fUs_askI_001Ui_001Src_001 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_001Ui_001Src_001>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_001Ui_001Src_001>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_001Ui_001Src_001>> dashed

  rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fUs_askI_001Ui_001Src_001Api_001>> as Feat_answer_fUs_askI_001Ui_001Src_001Api_001
}
@enduml
`;case`api001F-src006-1`:return`@startuml
title "handoffs 工单列表"
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

skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "SRC-006 转人工服务" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006 {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006>> dashed

  rectangle "==API-002 GET /handoffs 工单列表\\n\\nsrc/routes/handoff-routes.js:9 — 运营人员查看人工工单。" <<Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002>> as Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002
}
@enduml
`;case`api001NF-src101-1`:return`@startuml
title "status 集成状态"
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

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "SRC-101 集成状态路由" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101 {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101>> dashed

  rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101>> as Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101
}
@enduml
`;case`api002F-src201-1`:return`@startuml
title "materials 素材接入"
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

skinparam rectangle<<Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "SRC-201 素材路由" <<Feat_knowledge_fUs_scanI_211Ui_211Src_201>> as Feat_knowledge_fUs_scanI_211Ui_211Src_201 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scanI_211Ui_211Src_201>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scanI_211Ui_211Src_201>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scanI_211Ui_211Src_201>> dashed

  rectangle "==API-201 POST /materials 素材接入\\n\\nsrc/routes/material-routes.js:8 — 接收素材。" <<Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201>> as Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201
}
@enduml
`;case`api002F-src202-1`:return`@startuml
title "scan 知识扫描"
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

skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "SRC-202 知识库路由" <<Feat_knowledge_fUs_governI_221Ui_221Src_202>> as Feat_knowledge_fUs_governI_221Ui_221Src_202 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221Ui_221Src_202>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221Ui_221Src_202>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221Ui_221Src_202>> dashed

  rectangle "==API-202 POST /knowledge/scan 知识扫描\\n\\nsrc/routes/knowledge-routes.js:10 — 触发候选知识扫描。" <<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202>> as Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202
}
@enduml
`;case`api002F-src202-2`:return`@startuml
title "status 知识状态"
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

skinparam rectangle<<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "SRC-202 知识库路由" <<Feat_knowledge_fUs_governI_221Ui_221Src_202>> as Feat_knowledge_fUs_governI_221Ui_221Src_202 {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_governI_221Ui_221Src_202>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_governI_221Ui_221Src_202>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_governI_221Ui_221Src_202>> dashed

  rectangle "==API-203 GET /knowledge/status 知识状态\\n\\nsrc/routes/knowledge-routes.js:26 — 查询扫描与治理状态。" <<Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203>> as Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203
}
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
var e=e=>{switch(e){case`localDeployment`:return`@startuml
title "Local Development Deployment"
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

skinparam rectangle<<LocalAppTierAppVmService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<LocalDataTierStoreVmStore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LocalDataTierRagflowVmRagflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<LocalDataTierWikiVmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "Application Tier" <<LocalAppTier>> as LocalAppTier {
  skinparam RectangleBorderColor<<LocalAppTier>> #3b82f6
  skinparam RectangleFontColor<<LocalAppTier>> #3b82f6
  skinparam RectangleBorderStyle<<LocalAppTier>> dashed

  rectangle "==Beauty Customer Service\\n<size:10>[Node.js >=20]</size>\\n\\n基于企业微信的美妆咨询与知识服务" <<LocalAppTierAppVmService>> as LocalAppTierAppVmService
}
rectangle "Data Tier" <<LocalDataTier>> as LocalDataTier {
  skinparam RectangleBorderColor<<LocalDataTier>> #3b82f6
  skinparam RectangleFontColor<<LocalDataTier>> #3b82f6
  skinparam RectangleBorderStyle<<LocalDataTier>> dashed

  rectangle "local filesystem" <<LocalDataTierStoreVm>> as LocalDataTierStoreVm {
    skinparam RectangleBorderColor<<LocalDataTierStoreVm>> #3b82f6
    skinparam RectangleFontColor<<LocalDataTierStoreVm>> #3b82f6
    skinparam RectangleBorderStyle<<LocalDataTierStoreVm>> dashed

    database "==Local JSON Store\\n<size:10>[data/local-mvp-store.json]</size>\\n\\n以 JSON 文件承载状态；src/domain/store.js" <<LocalDataTierStoreVmStore>> as LocalDataTierStoreVmStore
  }
  rectangle "localhost:9380" <<LocalDataTierRagflowVm>> as LocalDataTierRagflowVm {
    skinparam RectangleBorderColor<<LocalDataTierRagflowVm>> #3b82f6
    skinparam RectangleFontColor<<LocalDataTierRagflowVm>> #3b82f6
    skinparam RectangleBorderStyle<<LocalDataTierRagflowVm>> dashed

    rectangle "==RAGFlow\\n<size:10>[HTTP]</size>\\n\\nRAG 与知识库服务" <<LocalDataTierRagflowVmRagflow>> as LocalDataTierRagflowVmRagflow
  }
  rectangle "localhost:19828" <<LocalDataTierWikiVm>> as LocalDataTierWikiVm {
    skinparam RectangleBorderColor<<LocalDataTierWikiVm>> #3b82f6
    skinparam RectangleFontColor<<LocalDataTierWikiVm>> #3b82f6
    skinparam RectangleBorderStyle<<LocalDataTierWikiVm>> dashed

    rectangle "==LLM Wiki\\n<size:10>[HTTP]</size>\\n\\nLLM 生成的 wiki 候选来源" <<LocalDataTierWikiVmWiki>> as LocalDataTierWikiVmWiki
  }
}

LocalAppTierAppVmService .[#8D8D8D,thickness=2].> LocalDataTierStoreVmStore : <color:#8D8D8D>reads and writes
LocalAppTierAppVmService .[#8D8D8D,thickness=2].> LocalDataTierRagflowVmRagflow : <color:#8D8D8D>[...]
LocalAppTierAppVmService .[#8D8D8D,thickness=2].> LocalDataTierWikiVmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;case`wechatDeployment`:return`@startuml
title "WeChat Work Cloud Boundary"
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
`;case`index`:return`@startuml
title "美妆客服服务 · 总览"
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

skinparam person<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Beauty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==客户\\n\\n通过企业微信咨询的终端用户" <<Customer>> as Customer
person "==运营人员\\n\\n处理升级工单的人工运营人员" <<Operator>> as Operator
rectangle "==美妆客服服务\\n\\n基于企业微信的美妆咨询与知识服务" <<Beauty>> as Beauty
rectangle "==企业微信\\n\\n企业微信客服平台" <<WechatWork>> as WechatWork
rectangle "==RAGFlow 知识库\\n\\nRAG 与知识库服务" <<Ragflow>> as Ragflow
rectangle "==LLM Wiki 候选源\\n\\nLLM 生成的 wiki 候选来源" <<LlmWiki>> as LlmWiki

Customer .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>发送消息（本地开发）
Operator .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>使用
Beauty .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
Beauty .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>[...]
Beauty .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
WechatWork .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>回调加密报文
@enduml
`;case`context`:return`@startuml
title "系统上下文"
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

skinparam person<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Beauty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==客户\\n\\n通过企业微信咨询的终端用户" <<Customer>> as Customer
person "==运营人员\\n\\n处理升级工单的人工运营人员" <<Operator>> as Operator
rectangle "==美妆客服服务\\n\\n基于企业微信的美妆咨询与知识服务" <<Beauty>> as Beauty
rectangle "==企业微信\\n\\n企业微信客服平台" <<WechatWork>> as WechatWork
rectangle "==RAGFlow 知识库\\n\\nRAG 与知识库服务" <<Ragflow>> as Ragflow
rectangle "==LLM Wiki 候选源\\n\\nLLM 生成的 wiki 候选来源" <<LlmWiki>> as LlmWiki

Customer .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>发送消息（本地开发）
Operator .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>使用
Beauty .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
WechatWork .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>回调加密报文
Beauty .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>[...]
Beauty .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;case`container`:return`@startuml
title "容器与集成"
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

skinparam component<<BeautyFakeWechat>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BeautyOperatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyWechatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyAnswerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyMaterialRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyIntegrationRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyAnswerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyHandoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyRagflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyWechatPlatform>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<BeautyStore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "美妆客服服务" <<Beauty>> as Beauty {
  skinparam RectangleBorderColor<<Beauty>> #3b82f6
  skinparam RectangleFontColor<<Beauty>> #3b82f6
  skinparam RectangleBorderStyle<<Beauty>> dashed

  component "==模拟微信入口\\n\\n保留用于回归验证的本地消息入口；src/services/fake-wechat-platform.js" <<BeautyFakeWechat>> as BeautyFakeWechat
  rectangle "==运营人员 Console\\n\\n运营人员使用的单页控制台；src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
  component "==微信客服回调入口\\n\\n接收加密的企业微信回调；src/routes/wechat-kf-routes.js" <<BeautyWechatCallback>> as BeautyWechatCallback
  component "==应答编排器\\n\\n决定自动回复还是转人工；src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
  component "==知识库路由\\n\\n知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
  component "==素材路由\\n\\n美妆素材接入接口；src/routes/material-routes.js" <<BeautyMaterialRoutes>> as BeautyMaterialRoutes
  component "==集成状态路由\\n\\n功能概览与集成状态；src/routes/integration-routes.js" <<BeautyIntegrationRoutes>> as BeautyIntegrationRoutes
  component "==知识应答循环\\n\\n检索增强的应答循环；src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
  component "==转人工服务\\n\\n创建并跟踪人工转接工单；src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
  component "==RAGFlow 知识库 知识检索\\n\\nRAGFlow 检索与数据集访问；src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
  component "==微信客服平台适配\\n\\n企业微信会话操作；src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
  database "==本地存储\\n\\n以 JSON 文件承载状态；src/domain/store.js" <<BeautyStore>> as BeautyStore
}
rectangle "==RAGFlow 知识库\\n\\nRAG 与知识库服务" <<Ragflow>> as Ragflow
rectangle "==企业微信\\n\\n企业微信客服平台" <<WechatWork>> as WechatWork
rectangle "==LLM Wiki 候选源\\n\\nLLM 生成的 wiki 候选来源" <<LlmWiki>> as LlmWiki

BeautyFakeWechat .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>转发消息
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>请求应答
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyHandoffService : <color:#8D8D8D>不确定时升级人工
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyKnowledgeRoutes : <color:#8D8D8D>运营知识库
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyIntegrationRoutes : <color:#8D8D8D>查看状态
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>检索候选知识
BeautyWechatCallback .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>解密并分发
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>通知客户
BeautyWechatPlatform .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>传递归一化消息
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>persists ticket
BeautyWechatPlatform .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
WechatWork .[#8D8D8D,thickness=2].> BeautyWechatCallback : <color:#8D8D8D>回调加密报文
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries datasets
@enduml
`;case`answerPath`:return`@startuml
title "应答链路"
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

skinparam component<<BeautyWechatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyFakeWechat>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyWechatPlatform>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyAnswerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<BeautyAnswerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyHandoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyReplyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyRagflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyEvaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<BeautyStore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==微信客服回调入口\\n\\n接收加密的企业微信回调；src/routes/wechat-kf-routes.js" <<BeautyWechatCallback>> as BeautyWechatCallback
component "==模拟微信入口\\n\\n保留用于回归验证的本地消息入口；src/services/fake-wechat-platform.js" <<BeautyFakeWechat>> as BeautyFakeWechat
component "==微信客服平台适配\\n\\n企业微信会话操作；src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
component "==应答编排器\\n\\n决定自动回复还是转人工；src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
rectangle "==企业微信\\n\\n企业微信客服平台" <<WechatWork>> as WechatWork
component "==知识应答循环\\n\\n检索增强的应答循环；src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
component "==转人工服务\\n\\n创建并跟踪人工转接工单；src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
component "==回复策略\\n\\n自动回复的置信度与风险阈值；src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy
component "==RAGFlow 知识库 知识检索\\n\\nRAGFlow 检索与数据集访问；src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
component "==评测���禁\\n\\n本地发布策略门禁；src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
rectangle "==RAGFlow 知识库\\n\\nRAG 与知识库服务" <<Ragflow>> as Ragflow
database "==本地存储\\n\\n以 JSON 文件承载状态；src/domain/store.js" <<BeautyStore>> as BeautyStore

BeautyWechatCallback .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>解密并分发
BeautyFakeWechat .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>转发消息
BeautyWechatPlatform .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>传递归一化消息
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>请求应答
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>校验阈值
BeautyReplyPolicy .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>把控发布
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyHandoffService : <color:#8D8D8D>不确定时升级人工
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>通知客户
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>检索候选知识
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>reads feedback candidates
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>persists ticket
BeautyWechatPlatform .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
WechatWork .[#8D8D8D,thickness=2].> BeautyWechatCallback : <color:#8D8D8D>回调加密报文
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries datasets
@enduml
`;case`knowledgeLifecycle`:return`@startuml
title "知识生命周期视图"
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

skinparam component<<BeautyKnowledgeRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeLifecycle>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyMaterialRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyMaterialBatch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeScan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeSync>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyRagflowLifecycleProbe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyMaterialService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyGovernance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyRagflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<BeautyDocumentRegistry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyEvaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<BeautyStore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==知识库路由\\n\\n知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
component "==知识生命周期视图\\n\\n知识的晋升与下线；src/services/knowledge-lifecycle-service.js" <<BeautyKnowledgeLifecycle>> as BeautyKnowledgeLifecycle
component "==素材路由\\n\\n美妆素材接入接口；src/routes/material-routes.js" <<BeautyMaterialRoutes>> as BeautyMaterialRoutes
component "==素材批处理\\n\\n素材批处理；src/services/material-batch-service.js" <<BeautyMaterialBatch>> as BeautyMaterialBatch
component "==知识告警\\n\\n暴露知识新鲜度问题；src/services/knowledge-alert-service.js" <<BeautyKnowledgeAlert>> as BeautyKnowledgeAlert
component "==知识扫描\\n\\n发现候选知识；src/services/knowledge-scan-service.js" <<BeautyKnowledgeScan>> as BeautyKnowledgeScan
component "==知识同步\\n\\n把已批准知识推送到 RAGFlow；src/services/knowledge-sync-service.js" <<BeautyKnowledgeSync>> as BeautyKnowledgeSync
component "==RAGFlow 知识库 生命周期探针\\n\\n校验 RAGFlow 数据集状态；src/services/ragflow-lifecycle-probe-service.js" <<BeautyRagflowLifecycleProbe>> as BeautyRagflowLifecycleProbe
component "==素材服务\\n\\n素材接入规则；src/services/material-service.js" <<BeautyMaterialService>> as BeautyMaterialService
component "==知识治理\\n\\n发布决策与治理；src/services/knowledge-governance-service.js" <<BeautyGovernance>> as BeautyGovernance
component "==RAGFlow 知识库 知识检索\\n\\nRAGFlow 检索与数据集访问；src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
rectangle "==LLM Wiki 候选源\\n\\nLLM 生成的 wiki 候选来源" <<LlmWiki>> as LlmWiki
component "==文档登记簿\\n\\n跟踪素材与文档标识；src/services/knowledge-document-registry.js" <<BeautyDocumentRegistry>> as BeautyDocumentRegistry
component "==评测���禁\\n\\n本地发布策略门禁；src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
rectangle "==RAGFlow 知识库\\n\\nRAG 与知识库服务" <<Ragflow>> as Ragflow
database "==本地存储\\n\\n以 JSON 文件承载状态；src/domain/store.js" <<BeautyStore>> as BeautyStore

BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeScan : <color:#8D8D8D>starts scan
BeautyKnowledgeScan .[#8D8D8D,thickness=2].> BeautyGovernance : <color:#8D8D8D>submits candidates
BeautyGovernance .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>applies 决策结果
BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeSync : <color:#8D8D8D>触发同步
BeautyKnowledgeLifecycle .[#8D8D8D,thickness=2].> BeautyDocumentRegistry : <color:#8D8D8D>晋升或下线
BeautyMaterialRoutes .[#8D8D8D,thickness=2].> BeautyMaterialService : <color:#8D8D8D>接收素材
BeautyMaterialService .[#8D8D8D,thickness=2].> BeautyDocumentRegistry : <color:#8D8D8D>登记文档
BeautyMaterialBatch .[#8D8D8D,thickness=2].> BeautyMaterialService : <color:#8D8D8D>批量接入
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>推送数据集
BeautyKnowledgeLifecycle .[#8D8D8D,thickness=2].> BeautyRagflowLifecycleProbe : <color:#8D8D8D>校验数据集状态
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>reads feedback candidates
BeautyKnowledgeAlert .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>报告新鲜度
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries datasets
BeautyRagflowLifecycleProbe .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>inspects datasets
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;case`operatorSurface`:return`@startuml
title "运营台依赖面"
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

skinparam person<<Operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BeautyOperatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyHandoffRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyIntegrationRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyHandoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyMaterialRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员\\n\\n处理升级工单的人工运营人员" <<Operator>> as Operator
rectangle "美妆客服服务" <<Beauty>> as Beauty {
  skinparam RectangleBorderColor<<Beauty>> #3b82f6
  skinparam RectangleFontColor<<Beauty>> #3b82f6
  skinparam RectangleBorderStyle<<Beauty>> dashed

  rectangle "==运营人员 Console\\n\\n运营人员使用的单页控制台；src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
  component "==转人工路由\\n\\n人工转接工单接口；src/routes/handoff-routes.js" <<BeautyHandoffRoutes>> as BeautyHandoffRoutes
  component "==知识库路由\\n\\n知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
  component "==集成状态路由\\n\\n功能概览与集成状态；src/routes/integration-routes.js" <<BeautyIntegrationRoutes>> as BeautyIntegrationRoutes
  component "==转人工服务\\n\\n创建并跟踪人工转接工单；src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
  component "==素材路由\\n\\n美妆素材接入接口；src/routes/material-routes.js" <<BeautyMaterialRoutes>> as BeautyMaterialRoutes
}

Operator .[#8D8D8D,thickness=2].> BeautyOperatorUi : <color:#8D8D8D>使用
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyHandoffRoutes : <color:#8D8D8D>管理工单
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyKnowledgeRoutes : <color:#8D8D8D>运营知识库
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyIntegrationRoutes : <color:#8D8D8D>查看状态
@enduml
`;case`chatToAnswer`:return`@startuml
title "客户提问到应答"
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

skinparam person<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyFakeWechat>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyAnswerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyAnswerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyRagflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<BeautyReplyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyWechatPlatform>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WechatWork>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==客户\\n\\n通过企业微信咨询的终端用户" <<Customer>> as Customer
component "==模拟微信入口\\n\\n保留用于回归验证的本地消息入口；src/services/fake-wechat-platform.js" <<BeautyFakeWechat>> as BeautyFakeWechat
component "==应答编排器\\n\\n决定自动回复还是转人工；src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==知识应答循环\\n\\n检索增强的应答循环；src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
component "==RAGFlow 知识库 知识检索\\n\\nRAGFlow 检索与数据集访问；src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
rectangle "==RAGFlow 知识库\\n\\nRAG 与知识库服务" <<Ragflow>> as Ragflow
component "==回复策略\\n\\n自动回复的置信度与风险阈值；src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy
component "==微信客服平台适配\\n\\n企业微信会话操作；src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
rectangle "==企业微信\\n\\n企业微信客服平台" <<WechatWork>> as WechatWork

Customer .[#8D8D8D,thickness=2].> BeautyFakeWechat : <color:#8D8D8D>提出美妆咨询
BeautyFakeWechat .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>转发消息
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>requests answer
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>检索候选知识
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries dataset
Ragflow .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>返回知识片段
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>评估置信度
BeautyReplyPolicy .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>允许自动回复
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>发送回复
BeautyWechatPlatform .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>发送消息
@enduml
`;case`retrievalSequence`:return`@startuml
title "应答检索时序"
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

skinparam person<<Customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyWechatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyWechatPlatform>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyAnswerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyAnswerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyRagflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Ragflow>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<BeautyReplyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==客户\\n\\n通过企业微信咨询的终端用户" <<Customer>> as Customer
component "==微信客服回调入口\\n\\n接收加密的企业微信回调；src/routes/wechat-kf-routes.js" <<BeautyWechatCallback>> as BeautyWechatCallback
component "==微信客服平台适配\\n\\n企业微信会话操作；src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
component "==应答编排器\\n\\n决定自动回复还是转人工；src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==知识应答循环\\n\\n检索增强的应答循环；src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
component "==RAGFlow 知识库 知识检索\\n\\nRAGFlow 检索与数据集访问；src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
rectangle "==RAGFlow 知识库\\n\\nRAG 与知识库服务" <<Ragflow>> as Ragflow
component "==回复策略\\n\\n自动回复的置信度与风险阈值；src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy

Customer .[#8D8D8D,thickness=2].> BeautyWechatCallback : <color:#8D8D8D>发送问题
BeautyWechatCallback .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>解密
BeautyWechatPlatform .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>归一化消息
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>请求应答
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>发起检索
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>查询知识库
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>返回知识片段
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>置信度
BeautyReplyPolicy .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>决策结果
@enduml
`;case`evaluationSequence`:return`@startuml
title "策略评估读取时序"
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

skinparam component<<BeautyAnswerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyEvaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<BeautyStore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyReplyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==应答编排器\\n\\n决定自动回复还是转人工；src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==评测���禁\\n\\n本地发布策略门禁；src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
database "==本地存储\\n\\n以 JSON 文件承载状态；src/domain/store.js" <<BeautyStore>> as BeautyStore
component "==回复策略\\n\\n自动回复的置信度与风险阈值；src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy

BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>执行评测
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>读取候选
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>校验阈值
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>读取策略状态
@enduml
`;case`handoffSequence`:return`@startuml
title "升级到人工运营"
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

skinparam component<<BeautyAnswerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyHandoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<BeautyStore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyWechatPlatform>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BeautyOperatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyHandoffRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==应答编排器\\n\\n决定自动回复还是转人工；src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==转人工服务\\n\\n创建并跟踪人工转接工单；src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
database "==本地存储\\n\\n以 JSON 文件承载状态；src/domain/store.js" <<BeautyStore>> as BeautyStore
component "==微信客服平台适配\\n\\n企业微信会话操作；src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
person "==运营人员\\n\\n处理升级工单的人工运营人员" <<Operator>> as Operator
rectangle "==运营人员 Console\\n\\n运营人员使用的单页控制台；src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
component "==转人工路由\\n\\n人工转接工单接口；src/routes/handoff-routes.js" <<BeautyHandoffRoutes>> as BeautyHandoffRoutes

BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyHandoffService : <color:#8D8D8D>创建工单
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>持久化工单
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>通知客户
Operator .[#8D8D8D,thickness=2].> BeautyOperatorUi : <color:#8D8D8D>打开工单
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyHandoffRoutes : <color:#8D8D8D>认领工单
@enduml
`;case`knowledgeSyncSequence`:return`@startuml
title "知识晋升与同步"
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

skinparam person<<Operator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BeautyOperatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeScan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyGovernance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyEvaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyKnowledgeSync>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<LlmWiki>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam component<<BeautyRagflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员\\n\\n处理升级工单的人工运营人员" <<Operator>> as Operator
rectangle "==运营人员 Console\\n\\n运营人员使用的单页控制台；src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
component "==知识库路由\\n\\n知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
component "==知识扫描\\n\\n发现候选知识；src/services/knowledge-scan-service.js" <<BeautyKnowledgeScan>> as BeautyKnowledgeScan
component "==知识治理\\n\\n发布决策与治理；src/services/knowledge-governance-service.js" <<BeautyGovernance>> as BeautyGovernance
component "==评测���禁\\n\\n本地发布策略门禁；src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
component "==知识同步\\n\\n把已批准知识推送到 RAGFlow；src/services/knowledge-sync-service.js" <<BeautyKnowledgeSync>> as BeautyKnowledgeSync
rectangle "==LLM Wiki 候选源\\n\\nLLM 生成的 wiki 候选来源" <<LlmWiki>> as LlmWiki
component "==RAGFlow 知识库 知识检索\\n\\nRAGFlow 检索与数据集访问；src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge

Operator .[#8D8D8D,thickness=2].> BeautyOperatorUi : <color:#8D8D8D>触发同步
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyKnowledgeRoutes : <color:#8D8D8D>请求同步
BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeScan : <color:#8D8D8D>扫描候选项
BeautyKnowledgeScan .[#8D8D8D,thickness=2].> BeautyGovernance : <color:#8D8D8D>submit for 决策结果
BeautyGovernance .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>应用发布规则
BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeSync : <color:#8D8D8D>推送已批准项
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>读取候选 wiki
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>写入数据集
@enduml
`;case`configGatedFlow`:return`@startuml
title "配置门控检索"
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

skinparam component<<BeautyAnswerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<BeautyRagflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==应答编排器\\n\\n决定自动回复还是转人工；src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==RAGFlow 知识库 知识检索\\n\\nRAGFlow 检索与数据集访问；src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge

BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>尝试检索
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>检查配置门控
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
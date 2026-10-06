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

  rectangle "==Beauty Customer Service\\n<size:10>[Node.js >=20]</size>\\n\\nWeChat-based beauty consultation and knowledge service" <<LocalAppTierAppVmService>> as LocalAppTierAppVmService
}
rectangle "Data Tier" <<LocalDataTier>> as LocalDataTier {
  skinparam RectangleBorderColor<<LocalDataTier>> #3b82f6
  skinparam RectangleFontColor<<LocalDataTier>> #3b82f6
  skinparam RectangleBorderStyle<<LocalDataTier>> dashed

  rectangle "local filesystem" <<LocalDataTierStoreVm>> as LocalDataTierStoreVm {
    skinparam RectangleBorderColor<<LocalDataTierStoreVm>> #3b82f6
    skinparam RectangleFontColor<<LocalDataTierStoreVm>> #3b82f6
    skinparam RectangleBorderStyle<<LocalDataTierStoreVm>> dashed

    database "==Local JSON Store\\n<size:10>[data/local-mvp-store.json]</size>\\n\\nJSON-file backed state; src/domain/store.js" <<LocalDataTierStoreVmStore>> as LocalDataTierStoreVmStore
  }
  rectangle "localhost:9380" <<LocalDataTierRagflowVm>> as LocalDataTierRagflowVm {
    skinparam RectangleBorderColor<<LocalDataTierRagflowVm>> #3b82f6
    skinparam RectangleFontColor<<LocalDataTierRagflowVm>> #3b82f6
    skinparam RectangleBorderStyle<<LocalDataTierRagflowVm>> dashed

    rectangle "==RAGFlow\\n<size:10>[HTTP]</size>\\n\\nRAG and knowledge base service" <<LocalDataTierRagflowVmRagflow>> as LocalDataTierRagflowVmRagflow
  }
  rectangle "localhost:19828" <<LocalDataTierWikiVm>> as LocalDataTierWikiVm {
    skinparam RectangleBorderColor<<LocalDataTierWikiVm>> #3b82f6
    skinparam RectangleFontColor<<LocalDataTierWikiVm>> #3b82f6
    skinparam RectangleBorderStyle<<LocalDataTierWikiVm>> dashed

    rectangle "==LLM Wiki\\n<size:10>[HTTP]</size>\\n\\nLLM-generated wiki candidate source" <<LocalDataTierWikiVmWiki>> as LocalDataTierWikiVmWiki
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
title "Beauty Customer Service — Overview"
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
person "==Customer\\n\\nEnd user chatting through WeChat Work customer service" <<Customer>> as Customer
person "==Operator\\n\\nHuman operator handling escalated tickets" <<Operator>> as Operator
rectangle "==Beauty Customer Service\\n\\nWeChat-based beauty consultation and knowledge service" <<Beauty>> as Beauty
rectangle "==WeChat Work\\n\\nWeChat Work customer service platform" <<WechatWork>> as WechatWork
rectangle "==RAGFlow\\n\\nRAG and knowledge base service" <<Ragflow>> as Ragflow
rectangle "==LLM Wiki\\n\\nLLM-generated wiki candidate source" <<LlmWiki>> as LlmWiki

Customer .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>messages (local dev)
Operator .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>uses
Beauty .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
Beauty .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>[...]
Beauty .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
WechatWork .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>posts encrypted callback
@enduml
`;case`context`:return`@startuml
title "System Context"
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
person "==Customer\\n\\nEnd user chatting through WeChat Work customer service" <<Customer>> as Customer
person "==Operator\\n\\nHuman operator handling escalated tickets" <<Operator>> as Operator
rectangle "==Beauty Customer Service\\n\\nWeChat-based beauty consultation and knowledge service" <<Beauty>> as Beauty
rectangle "==WeChat Work\\n\\nWeChat Work customer service platform" <<WechatWork>> as WechatWork
rectangle "==RAGFlow\\n\\nRAG and knowledge base service" <<Ragflow>> as Ragflow
rectangle "==LLM Wiki\\n\\nLLM-generated wiki candidate source" <<LlmWiki>> as LlmWiki

Customer .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>messages (local dev)
Operator .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>uses
Beauty .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
WechatWork .[#8D8D8D,thickness=2].> Beauty : <color:#8D8D8D>posts encrypted callback
Beauty .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>[...]
Beauty .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;case`container`:return`@startuml
title "Containers and Integrations"
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
rectangle "Beauty Customer Service" <<Beauty>> as Beauty {
  skinparam RectangleBorderColor<<Beauty>> #3b82f6
  skinparam RectangleFontColor<<Beauty>> #3b82f6
  skinparam RectangleBorderStyle<<Beauty>> dashed

  component "==Fake WeChat\\n\\nLocal message ingress kept for regression; src/services/fake-wechat-platform.js" <<BeautyFakeWechat>> as BeautyFakeWechat
  rectangle "==Operator Console\\n\\nSingle-page console for operators; src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
  component "==WeChat KF Callback\\n\\nReceives encrypted WeChat Work callbacks; src/routes/wechat-kf-routes.js" <<BeautyWechatCallback>> as BeautyWechatCallback
  component "==Answer Orchestrator\\n\\nDecides auto-reply vs handoff; src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
  component "==Knowledge Routes\\n\\nKnowledge scan, sync and lifecycle endpoints; src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
  component "==Material Routes\\n\\nBeauty material ingestion endpoints; src/routes/material-routes.js" <<BeautyMaterialRoutes>> as BeautyMaterialRoutes
  component "==Integration Routes\\n\\nFeature overview and integration status; src/routes/integration-routes.js" <<BeautyIntegrationRoutes>> as BeautyIntegrationRoutes
  component "==Knowledge Answer Loop\\n\\nRetrieval-augmented answer loop; src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
  component "==Handoff Service\\n\\nCreates and tracks human handoff tickets; src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
  component "==RAGFlow Knowledge\\n\\nRAGFlow retrieval and dataset access; src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
  component "==WeChat KF Platform\\n\\nWeChat Work conversation operations; src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
  database "==Local Store\\n\\nJSON-file backed state; src/domain/store.js" <<BeautyStore>> as BeautyStore
}
rectangle "==RAGFlow\\n\\nRAG and knowledge base service" <<Ragflow>> as Ragflow
rectangle "==WeChat Work\\n\\nWeChat Work customer service platform" <<WechatWork>> as WechatWork
rectangle "==LLM Wiki\\n\\nLLM-generated wiki candidate source" <<LlmWiki>> as LlmWiki

BeautyFakeWechat .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>forwards message
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>asks for answer
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyHandoffService : <color:#8D8D8D>escalates when uncertain
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyKnowledgeRoutes : <color:#8D8D8D>operates knowledge
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyIntegrationRoutes : <color:#8D8D8D>checks status
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>retrieves candidates
BeautyWechatCallback .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>decrypts and dispatches
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>notifies customer
BeautyWechatPlatform .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>passes normalized message
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>persists ticket
BeautyWechatPlatform .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
WechatWork .[#8D8D8D,thickness=2].> BeautyWechatCallback : <color:#8D8D8D>posts encrypted callback
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries datasets
@enduml
`;case`answerPath`:return`@startuml
title "Answer Path"
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
component "==WeChat KF Callback\\n\\nReceives encrypted WeChat Work callbacks; src/routes/wechat-kf-routes.js" <<BeautyWechatCallback>> as BeautyWechatCallback
component "==Fake WeChat\\n\\nLocal message ingress kept for regression; src/services/fake-wechat-platform.js" <<BeautyFakeWechat>> as BeautyFakeWechat
component "==WeChat KF Platform\\n\\nWeChat Work conversation operations; src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
component "==Answer Orchestrator\\n\\nDecides auto-reply vs handoff; src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
rectangle "==WeChat Work\\n\\nWeChat Work customer service platform" <<WechatWork>> as WechatWork
component "==Knowledge Answer Loop\\n\\nRetrieval-augmented answer loop; src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
component "==Handoff Service\\n\\nCreates and tracks human handoff tickets; src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
component "==Reply Policy\\n\\nConfidence and risk thresholds for auto-reply; src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy
component "==RAGFlow Knowledge\\n\\nRAGFlow retrieval and dataset access; src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
component "==Evaluation Gate\\n\\nLocal publication policy gate; src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
rectangle "==RAGFlow\\n\\nRAG and knowledge base service" <<Ragflow>> as Ragflow
database "==Local Store\\n\\nJSON-file backed state; src/domain/store.js" <<BeautyStore>> as BeautyStore

BeautyWechatCallback .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>decrypts and dispatches
BeautyFakeWechat .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>forwards message
BeautyWechatPlatform .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>passes normalized message
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>asks for answer
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>checks thresholds
BeautyReplyPolicy .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>gates publication
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyHandoffService : <color:#8D8D8D>escalates when uncertain
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>notifies customer
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>retrieves candidates
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>reads feedback candidates
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>persists ticket
BeautyWechatPlatform .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>calls open API
WechatWork .[#8D8D8D,thickness=2].> BeautyWechatCallback : <color:#8D8D8D>posts encrypted callback
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries datasets
@enduml
`;case`knowledgeLifecycle`:return`@startuml
title "Knowledge Lifecycle"
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
component "==Knowledge Routes\\n\\nKnowledge scan, sync and lifecycle endpoints; src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
component "==Knowledge Lifecycle\\n\\nPromotion and retirement of knowledge; src/services/knowledge-lifecycle-service.js" <<BeautyKnowledgeLifecycle>> as BeautyKnowledgeLifecycle
component "==Material Routes\\n\\nBeauty material ingestion endpoints; src/routes/material-routes.js" <<BeautyMaterialRoutes>> as BeautyMaterialRoutes
component "==Material Batch\\n\\nBatch material processing; src/services/material-batch-service.js" <<BeautyMaterialBatch>> as BeautyMaterialBatch
component "==Knowledge Alert\\n\\nSurfaces knowledge freshness issues; src/services/knowledge-alert-service.js" <<BeautyKnowledgeAlert>> as BeautyKnowledgeAlert
component "==Knowledge Scan\\n\\nDiscovers candidate knowledge; src/services/knowledge-scan-service.js" <<BeautyKnowledgeScan>> as BeautyKnowledgeScan
component "==Knowledge Sync\\n\\nPushes approved knowledge to RAGFlow; src/services/knowledge-sync-service.js" <<BeautyKnowledgeSync>> as BeautyKnowledgeSync
component "==RAGFlow Lifecycle Probe\\n\\nVerifies RAGFlow dataset state; src/services/ragflow-lifecycle-probe-service.js" <<BeautyRagflowLifecycleProbe>> as BeautyRagflowLifecycleProbe
component "==Material Service\\n\\nMaterial ingestion rules; src/services/material-service.js" <<BeautyMaterialService>> as BeautyMaterialService
component "==Knowledge Governance\\n\\nPublication decisions and governance; src/services/knowledge-governance-service.js" <<BeautyGovernance>> as BeautyGovernance
component "==RAGFlow Knowledge\\n\\nRAGFlow retrieval and dataset access; src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
rectangle "==LLM Wiki\\n\\nLLM-generated wiki candidate source" <<LlmWiki>> as LlmWiki
component "==Document Registry\\n\\nTracks material and document identity; src/services/knowledge-document-registry.js" <<BeautyDocumentRegistry>> as BeautyDocumentRegistry
component "==Evaluation Gate\\n\\nLocal publication policy gate; src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
rectangle "==RAGFlow\\n\\nRAG and knowledge base service" <<Ragflow>> as Ragflow
database "==Local Store\\n\\nJSON-file backed state; src/domain/store.js" <<BeautyStore>> as BeautyStore

BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeScan : <color:#8D8D8D>starts scan
BeautyKnowledgeScan .[#8D8D8D,thickness=2].> BeautyGovernance : <color:#8D8D8D>submits candidates
BeautyGovernance .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>applies decision
BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeSync : <color:#8D8D8D>triggers sync
BeautyKnowledgeLifecycle .[#8D8D8D,thickness=2].> BeautyDocumentRegistry : <color:#8D8D8D>promotes or retires
BeautyMaterialRoutes .[#8D8D8D,thickness=2].> BeautyMaterialService : <color:#8D8D8D>accepts material
BeautyMaterialService .[#8D8D8D,thickness=2].> BeautyDocumentRegistry : <color:#8D8D8D>registers document
BeautyMaterialBatch .[#8D8D8D,thickness=2].> BeautyMaterialService : <color:#8D8D8D>batch ingests
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>pushes dataset
BeautyKnowledgeLifecycle .[#8D8D8D,thickness=2].> BeautyRagflowLifecycleProbe : <color:#8D8D8D>verifies dataset state
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>reads feedback candidates
BeautyKnowledgeAlert .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>reports freshness
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries datasets
BeautyRagflowLifecycleProbe .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>inspects datasets
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>reads candidate wiki
@enduml
`;case`operatorSurface`:return`@startuml
title "Operator Surface"
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
person "==Operator\\n\\nHuman operator handling escalated tickets" <<Operator>> as Operator
rectangle "Beauty Customer Service" <<Beauty>> as Beauty {
  skinparam RectangleBorderColor<<Beauty>> #3b82f6
  skinparam RectangleFontColor<<Beauty>> #3b82f6
  skinparam RectangleBorderStyle<<Beauty>> dashed

  rectangle "==Operator Console\\n\\nSingle-page console for operators; src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
  component "==Handoff Routes\\n\\nHuman handoff ticket endpoints; src/routes/handoff-routes.js" <<BeautyHandoffRoutes>> as BeautyHandoffRoutes
  component "==Knowledge Routes\\n\\nKnowledge scan, sync and lifecycle endpoints; src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
  component "==Integration Routes\\n\\nFeature overview and integration status; src/routes/integration-routes.js" <<BeautyIntegrationRoutes>> as BeautyIntegrationRoutes
  component "==Handoff Service\\n\\nCreates and tracks human handoff tickets; src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
  component "==Material Routes\\n\\nBeauty material ingestion endpoints; src/routes/material-routes.js" <<BeautyMaterialRoutes>> as BeautyMaterialRoutes
}

Operator .[#8D8D8D,thickness=2].> BeautyOperatorUi : <color:#8D8D8D>uses
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyHandoffRoutes : <color:#8D8D8D>manages tickets
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyKnowledgeRoutes : <color:#8D8D8D>operates knowledge
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyIntegrationRoutes : <color:#8D8D8D>checks status
@enduml
`;case`chatToAnswer`:return`@startuml
title "Customer Message to Answer"
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
person "==Customer\\n\\nEnd user chatting through WeChat Work customer service" <<Customer>> as Customer
component "==Fake WeChat\\n\\nLocal message ingress kept for regression; src/services/fake-wechat-platform.js" <<BeautyFakeWechat>> as BeautyFakeWechat
component "==Answer Orchestrator\\n\\nDecides auto-reply vs handoff; src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==Knowledge Answer Loop\\n\\nRetrieval-augmented answer loop; src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
component "==RAGFlow Knowledge\\n\\nRAGFlow retrieval and dataset access; src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
rectangle "==RAGFlow\\n\\nRAG and knowledge base service" <<Ragflow>> as Ragflow
component "==Reply Policy\\n\\nConfidence and risk thresholds for auto-reply; src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy
component "==WeChat KF Platform\\n\\nWeChat Work conversation operations; src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
rectangle "==WeChat Work\\n\\nWeChat Work customer service platform" <<WechatWork>> as WechatWork

Customer .[#8D8D8D,thickness=2].> BeautyFakeWechat : <color:#8D8D8D>asks a beauty question
BeautyFakeWechat .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>forwards message
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>requests answer
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>retrieves candidates
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>queries dataset
Ragflow .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>returns passages
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>checks confidence
BeautyReplyPolicy .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>auto-reply allowed
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>sends reply
BeautyWechatPlatform .[#8D8D8D,thickness=2].> WechatWork : <color:#8D8D8D>posts message
@enduml
`;case`retrievalSequence`:return`@startuml
title "Answer Retrieval Sequence"
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
person "==Customer\\n\\nEnd user chatting through WeChat Work customer service" <<Customer>> as Customer
component "==WeChat KF Callback\\n\\nReceives encrypted WeChat Work callbacks; src/routes/wechat-kf-routes.js" <<BeautyWechatCallback>> as BeautyWechatCallback
component "==WeChat KF Platform\\n\\nWeChat Work conversation operations; src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
component "==Answer Orchestrator\\n\\nDecides auto-reply vs handoff; src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==Knowledge Answer Loop\\n\\nRetrieval-augmented answer loop; src/services/knowledge-answer-loop-service.js" <<BeautyAnswerLoop>> as BeautyAnswerLoop
component "==RAGFlow Knowledge\\n\\nRAGFlow retrieval and dataset access; src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge
rectangle "==RAGFlow\\n\\nRAG and knowledge base service" <<Ragflow>> as Ragflow
component "==Reply Policy\\n\\nConfidence and risk thresholds for auto-reply; src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy

Customer .[#8D8D8D,thickness=2].> BeautyWechatCallback : <color:#8D8D8D>sends question
BeautyWechatCallback .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>decrypts
BeautyWechatPlatform .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>normalized message
BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>asks for answer
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>retrieve
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> Ragflow : <color:#8D8D8D>query
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> BeautyAnswerLoop : <color:#8D8D8D>passages
BeautyAnswerLoop .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>confidence
BeautyReplyPolicy .[#8D8D8D,thickness=2].> BeautyAnswerOrchestrator : <color:#8D8D8D>decision
@enduml
`;case`evaluationSequence`:return`@startuml
title "Policy Evaluation Reads"
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
component "==Answer Orchestrator\\n\\nDecides auto-reply vs handoff; src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==Evaluation Gate\\n\\nLocal publication policy gate; src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
database "==Local Store\\n\\nJSON-file backed state; src/domain/store.js" <<BeautyStore>> as BeautyStore
component "==Reply Policy\\n\\nConfidence and risk thresholds for auto-reply; src/services/reply-policy-service.js" <<BeautyReplyPolicy>> as BeautyReplyPolicy

BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>evaluate
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>read candidates
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyReplyPolicy : <color:#8D8D8D>check thresholds
BeautyEvaluationGate .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>read policy state
@enduml
`;case`handoffSequence`:return`@startuml
title "Escalation to Human Operator"
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
component "==Answer Orchestrator\\n\\nDecides auto-reply vs handoff; src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==Handoff Service\\n\\nCreates and tracks human handoff tickets; src/services/handoff-service.js" <<BeautyHandoffService>> as BeautyHandoffService
database "==Local Store\\n\\nJSON-file backed state; src/domain/store.js" <<BeautyStore>> as BeautyStore
component "==WeChat KF Platform\\n\\nWeChat Work conversation operations; src/services/wechat-kf-platform.js" <<BeautyWechatPlatform>> as BeautyWechatPlatform
person "==Operator\\n\\nHuman operator handling escalated tickets" <<Operator>> as Operator
rectangle "==Operator Console\\n\\nSingle-page console for operators; src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
component "==Handoff Routes\\n\\nHuman handoff ticket endpoints; src/routes/handoff-routes.js" <<BeautyHandoffRoutes>> as BeautyHandoffRoutes

BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyHandoffService : <color:#8D8D8D>create ticket
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyStore : <color:#8D8D8D>persist ticket
BeautyHandoffService .[#8D8D8D,thickness=2].> BeautyWechatPlatform : <color:#8D8D8D>notify customer
Operator .[#8D8D8D,thickness=2].> BeautyOperatorUi : <color:#8D8D8D>opens ticket
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyHandoffRoutes : <color:#8D8D8D>claim ticket
@enduml
`;case`knowledgeSyncSequence`:return`@startuml
title "Knowledge Promotion and Sync"
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
person "==Operator\\n\\nHuman operator handling escalated tickets" <<Operator>> as Operator
rectangle "==Operator Console\\n\\nSingle-page console for operators; src/ui/operator.html" <<BeautyOperatorUi>> as BeautyOperatorUi
component "==Knowledge Routes\\n\\nKnowledge scan, sync and lifecycle endpoints; src/routes/knowledge-routes.js" <<BeautyKnowledgeRoutes>> as BeautyKnowledgeRoutes
component "==Knowledge Scan\\n\\nDiscovers candidate knowledge; src/services/knowledge-scan-service.js" <<BeautyKnowledgeScan>> as BeautyKnowledgeScan
component "==Knowledge Governance\\n\\nPublication decisions and governance; src/services/knowledge-governance-service.js" <<BeautyGovernance>> as BeautyGovernance
component "==Evaluation Gate\\n\\nLocal publication policy gate; src/services/evaluation-gate.js" <<BeautyEvaluationGate>> as BeautyEvaluationGate
component "==Knowledge Sync\\n\\nPushes approved knowledge to RAGFlow; src/services/knowledge-sync-service.js" <<BeautyKnowledgeSync>> as BeautyKnowledgeSync
rectangle "==LLM Wiki\\n\\nLLM-generated wiki candidate source" <<LlmWiki>> as LlmWiki
component "==RAGFlow Knowledge\\n\\nRAGFlow retrieval and dataset access; src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge

Operator .[#8D8D8D,thickness=2].> BeautyOperatorUi : <color:#8D8D8D>triggers sync
BeautyOperatorUi .[#8D8D8D,thickness=2].> BeautyKnowledgeRoutes : <color:#8D8D8D>request sync
BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeScan : <color:#8D8D8D>scan candidates
BeautyKnowledgeScan .[#8D8D8D,thickness=2].> BeautyGovernance : <color:#8D8D8D>submit for decision
BeautyGovernance .[#8D8D8D,thickness=2].> BeautyEvaluationGate : <color:#8D8D8D>apply publication rule
BeautyKnowledgeRoutes .[#8D8D8D,thickness=2].> BeautyKnowledgeSync : <color:#8D8D8D>push approved
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> LlmWiki : <color:#8D8D8D>read candidate wiki
BeautyKnowledgeSync .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>write dataset
@enduml
`;case`configGatedFlow`:return`@startuml
title "Configuration-Gated Retrieval"
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
component "==Answer Orchestrator\\n\\nDecides auto-reply vs handoff; src/services/answer-orchestrator.js" <<BeautyAnswerOrchestrator>> as BeautyAnswerOrchestrator
component "==RAGFlow Knowledge\\n\\nRAGFlow retrieval and dataset access; src/services/ragflow-knowledge-service.js" <<BeautyRagflowKnowledge>> as BeautyRagflowKnowledge

BeautyAnswerOrchestrator .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>attempts retrieval
BeautyRagflowKnowledge .[#8D8D8D,thickness=2].> BeautyRagflowKnowledge : <color:#8D8D8D>checks config gate
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
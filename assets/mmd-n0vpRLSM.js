var e=e=>{switch(e){case`localDeployment`:return`---
title: "Local Development Deployment"
---
graph TB
  subgraph LocalAppTier["\`Application Tier\`"]
    LocalAppTier.AppVmService@{ shape: rectangle, label: "Beauty Customer Service" }
  end
  subgraph LocalDataTier["\`Data Tier\`"]
    subgraph LocalDataTier.StoreVm["\`local filesystem\`"]
      LocalDataTier.StoreVm.Store@{ shape: disk, label: "Local JSON Store" }
    end
    subgraph LocalDataTier.RagflowVm["\`localhost:9380\`"]
      LocalDataTier.RagflowVm.Ragflow@{ shape: rectangle, label: "RAGFlow" }
    end
    subgraph LocalDataTier.WikiVm["\`localhost:19828\`"]
      LocalDataTier.WikiVm.Wiki@{ shape: rectangle, label: "LLM Wiki" }
    end
  end
  LocalAppTier.AppVmService -. "\`reads and writes\`" .-> LocalDataTier.StoreVm.Store
  LocalAppTier.AppVmService -. "\`[...]\`" .-> LocalDataTier.RagflowVm.Ragflow
  LocalAppTier.AppVmService -. "\`reads candidate wiki\`" .-> LocalDataTier.WikiVm.Wiki
`;case`wechatDeployment`:return`---
title: "WeChat Work Cloud Boundary"
---
graph TB
`;case`index`:return`---
title: "Beauty Customer Service — Overview"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "Customer" }
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  Beauty@{ shape: rectangle, label: "Beauty Customer Service" }
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  Customer -. "\`messages (local dev)\`" .-> Beauty
  Operator -. "\`uses\`" .-> Beauty
  Beauty -. "\`calls open API\`" .-> WechatWork
  Beauty -. "\`[...]\`" .-> Ragflow
  Beauty -. "\`reads candidate wiki\`" .-> LlmWiki
  WechatWork -. "\`posts encrypted callback\`" .-> Beauty
`;case`context`:return`---
title: "System Context"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "Customer" }
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  Beauty@{ shape: rectangle, label: "Beauty Customer Service" }
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  Customer -. "\`messages (local dev)\`" .-> Beauty
  Operator -. "\`uses\`" .-> Beauty
  Beauty -. "\`calls open API\`" .-> WechatWork
  WechatWork -. "\`posts encrypted callback\`" .-> Beauty
  Beauty -. "\`[...]\`" .-> Ragflow
  Beauty -. "\`reads candidate wiki\`" .-> LlmWiki
`;case`container`:return`---
title: "Containers and Integrations"
---
graph TB
  subgraph Beauty["\`Beauty Customer Service\`"]
    Beauty.FakeWechat@{ shape: rectangle, label: "Fake WeChat" }
    Beauty.OperatorUi@{ shape: rounded, label: "Operator Console" }
    Beauty.WechatCallback@{ shape: rectangle, label: "WeChat KF Callback" }
    Beauty.AnswerOrchestrator@{ shape: rectangle, label: "Answer Orchestrator" }
    Beauty.KnowledgeRoutes@{ shape: rectangle, label: "Knowledge Routes" }
    Beauty.MaterialRoutes@{ shape: rectangle, label: "Material Routes" }
    Beauty.IntegrationRoutes@{ shape: rectangle, label: "Integration Routes" }
    Beauty.AnswerLoop@{ shape: rectangle, label: "Knowledge Answer Loop" }
    Beauty.HandoffService@{ shape: rectangle, label: "Handoff Service" }
    Beauty.RagflowKnowledge@{ shape: rectangle, label: "RAGFlow Knowledge" }
    Beauty.WechatPlatform@{ shape: rectangle, label: "WeChat KF Platform" }
    Beauty.Store@{ shape: disk, label: "Local Store" }
  end
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  Beauty.FakeWechat -. "\`forwards message\`" .-> Beauty.AnswerOrchestrator
  Beauty.AnswerOrchestrator -. "\`asks for answer\`" .-> Beauty.AnswerLoop
  Beauty.AnswerOrchestrator -. "\`escalates when uncertain\`" .-> Beauty.HandoffService
  Beauty.OperatorUi -. "\`operates knowledge\`" .-> Beauty.KnowledgeRoutes
  Beauty.OperatorUi -. "\`checks status\`" .-> Beauty.IntegrationRoutes
  Beauty.AnswerLoop -. "\`retrieves candidates\`" .-> Beauty.RagflowKnowledge
  Beauty.WechatCallback -. "\`decrypts and dispatches\`" .-> Beauty.WechatPlatform
  Beauty.HandoffService -. "\`notifies customer\`" .-> Beauty.WechatPlatform
  Beauty.WechatPlatform -. "\`passes normalized message\`" .-> Beauty.AnswerOrchestrator
  Beauty.HandoffService -. "\`persists ticket\`" .-> Beauty.Store
  Beauty.WechatPlatform -. "\`calls open API\`" .-> WechatWork
  WechatWork -. "\`posts encrypted callback\`" .-> Beauty.WechatCallback
  Beauty.RagflowKnowledge -. "\`queries datasets\`" .-> Ragflow
`;case`answerPath`:return`---
title: "Answer Path"
---
graph TB
  BeautyWechatCallback@{ shape: rectangle, label: "WeChat KF Callback" }
  BeautyFakeWechat@{ shape: rectangle, label: "Fake WeChat" }
  BeautyWechatPlatform@{ shape: rectangle, label: "WeChat KF Platform" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "Answer Orchestrator" }
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  BeautyAnswerLoop@{ shape: rectangle, label: "Knowledge Answer Loop" }
  BeautyHandoffService@{ shape: rectangle, label: "Handoff Service" }
  BeautyReplyPolicy@{ shape: rectangle, label: "Reply Policy" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow Knowledge" }
  BeautyEvaluationGate@{ shape: rectangle, label: "Evaluation Gate" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  BeautyStore@{ shape: disk, label: "Local Store" }
  BeautyWechatCallback -. "\`decrypts and dispatches\`" .-> BeautyWechatPlatform
  BeautyFakeWechat -. "\`forwards message\`" .-> BeautyAnswerOrchestrator
  BeautyWechatPlatform -. "\`passes normalized message\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`asks for answer\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`checks thresholds\`" .-> BeautyReplyPolicy
  BeautyReplyPolicy -. "\`gates publication\`" .-> BeautyEvaluationGate
  BeautyAnswerOrchestrator -. "\`escalates when uncertain\`" .-> BeautyHandoffService
  BeautyHandoffService -. "\`notifies customer\`" .-> BeautyWechatPlatform
  BeautyAnswerLoop -. "\`retrieves candidates\`" .-> BeautyRagflowKnowledge
  BeautyEvaluationGate -. "\`reads feedback candidates\`" .-> BeautyStore
  BeautyHandoffService -. "\`persists ticket\`" .-> BeautyStore
  BeautyWechatPlatform -. "\`calls open API\`" .-> WechatWork
  WechatWork -. "\`posts encrypted callback\`" .-> BeautyWechatCallback
  BeautyRagflowKnowledge -. "\`queries datasets\`" .-> Ragflow
`;case`knowledgeLifecycle`:return`---
title: "Knowledge Lifecycle"
---
graph TB
  BeautyKnowledgeRoutes@{ shape: rectangle, label: "Knowledge Routes" }
  BeautyKnowledgeLifecycle@{ shape: rectangle, label: "Knowledge Lifecycle" }
  BeautyMaterialRoutes@{ shape: rectangle, label: "Material Routes" }
  BeautyMaterialBatch@{ shape: rectangle, label: "Material Batch" }
  BeautyKnowledgeAlert@{ shape: rectangle, label: "Knowledge Alert" }
  BeautyKnowledgeScan@{ shape: rectangle, label: "Knowledge Scan" }
  BeautyKnowledgeSync@{ shape: rectangle, label: "Knowledge Sync" }
  BeautyRagflowLifecycleProbe@{ shape: rectangle, label: "RAGFlow Lifecycle Probe" }
  BeautyMaterialService@{ shape: rectangle, label: "Material Service" }
  BeautyGovernance@{ shape: rectangle, label: "Knowledge Governance" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow Knowledge" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  BeautyDocumentRegistry@{ shape: rectangle, label: "Document Registry" }
  BeautyEvaluationGate@{ shape: rectangle, label: "Evaluation Gate" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  BeautyStore@{ shape: disk, label: "Local Store" }
  BeautyKnowledgeRoutes -. "\`starts scan\`" .-> BeautyKnowledgeScan
  BeautyKnowledgeScan -. "\`submits candidates\`" .-> BeautyGovernance
  BeautyGovernance -. "\`applies decision\`" .-> BeautyEvaluationGate
  BeautyKnowledgeRoutes -. "\`triggers sync\`" .-> BeautyKnowledgeSync
  BeautyKnowledgeLifecycle -. "\`promotes or retires\`" .-> BeautyDocumentRegistry
  BeautyMaterialRoutes -. "\`accepts material\`" .-> BeautyMaterialService
  BeautyMaterialService -. "\`registers document\`" .-> BeautyDocumentRegistry
  BeautyMaterialBatch -. "\`batch ingests\`" .-> BeautyMaterialService
  BeautyKnowledgeSync -. "\`pushes dataset\`" .-> BeautyRagflowKnowledge
  BeautyKnowledgeLifecycle -. "\`verifies dataset state\`" .-> BeautyRagflowLifecycleProbe
  BeautyEvaluationGate -. "\`reads feedback candidates\`" .-> BeautyStore
  BeautyKnowledgeAlert -. "\`reports freshness\`" .-> BeautyStore
  BeautyRagflowKnowledge -. "\`queries datasets\`" .-> Ragflow
  BeautyRagflowLifecycleProbe -. "\`inspects datasets\`" .-> Ragflow
  BeautyKnowledgeSync -. "\`reads candidate wiki\`" .-> LlmWiki
`;case`operatorSurface`:return`---
title: "Operator Surface"
---
graph TB
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  subgraph Beauty["\`Beauty Customer Service\`"]
    Beauty.OperatorUi@{ shape: rounded, label: "Operator Console" }
    Beauty.HandoffRoutes@{ shape: rectangle, label: "Handoff Routes" }
    Beauty.KnowledgeRoutes@{ shape: rectangle, label: "Knowledge Routes" }
    Beauty.IntegrationRoutes@{ shape: rectangle, label: "Integration Routes" }
    Beauty.HandoffService@{ shape: rectangle, label: "Handoff Service" }
    Beauty.MaterialRoutes@{ shape: rectangle, label: "Material Routes" }
  end
  Operator -. "\`uses\`" .-> Beauty.OperatorUi
  Beauty.OperatorUi -. "\`manages tickets\`" .-> Beauty.HandoffRoutes
  Beauty.OperatorUi -. "\`operates knowledge\`" .-> Beauty.KnowledgeRoutes
  Beauty.OperatorUi -. "\`checks status\`" .-> Beauty.IntegrationRoutes
`;case`chatToAnswer`:return`---
title: "Customer Message to Answer"
---
graph LR
  Customer@{ icon: "fa:user", shape: rounded, label: "Customer" }
  BeautyFakeWechat@{ shape: rectangle, label: "Fake WeChat" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "Answer Orchestrator" }
  BeautyAnswerLoop@{ shape: rectangle, label: "Knowledge Answer Loop" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow Knowledge" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  BeautyReplyPolicy@{ shape: rectangle, label: "Reply Policy" }
  BeautyWechatPlatform@{ shape: rectangle, label: "WeChat KF Platform" }
  WechatWork@{ shape: rectangle, label: "WeChat Work" }
  Customer -. "\`asks a beauty question\`" .-> BeautyFakeWechat
  BeautyFakeWechat -. "\`forwards message\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`requests answer\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`retrieves candidates\`" .-> BeautyRagflowKnowledge
  BeautyRagflowKnowledge -. "\`queries dataset\`" .-> Ragflow
  Ragflow -. "\`returns passages\`" .-> BeautyRagflowKnowledge
  BeautyAnswerLoop -. "\`checks confidence\`" .-> BeautyReplyPolicy
  BeautyReplyPolicy -. "\`auto-reply allowed\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`sends reply\`" .-> BeautyWechatPlatform
  BeautyWechatPlatform -. "\`posts message\`" .-> WechatWork
`;case`retrievalSequence`:return`---
title: "Answer Retrieval Sequence"
---
graph LR
  Customer@{ icon: "fa:user", shape: rounded, label: "Customer" }
  BeautyWechatCallback@{ shape: rectangle, label: "WeChat KF Callback" }
  BeautyWechatPlatform@{ shape: rectangle, label: "WeChat KF Platform" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "Answer Orchestrator" }
  BeautyAnswerLoop@{ shape: rectangle, label: "Knowledge Answer Loop" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow Knowledge" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  BeautyReplyPolicy@{ shape: rectangle, label: "Reply Policy" }
  Customer -. "\`sends question\`" .-> BeautyWechatCallback
  BeautyWechatCallback -. "\`decrypts\`" .-> BeautyWechatPlatform
  BeautyWechatPlatform -. "\`normalized message\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`asks for answer\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`retrieve\`" .-> BeautyRagflowKnowledge
  BeautyRagflowKnowledge -. "\`query\`" .-> Ragflow
  BeautyRagflowKnowledge -. "\`passages\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`confidence\`" .-> BeautyReplyPolicy
  BeautyReplyPolicy -. "\`decision\`" .-> BeautyAnswerOrchestrator
`;case`evaluationSequence`:return`---
title: "Policy Evaluation Reads"
---
graph LR
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "Answer Orchestrator" }
  BeautyEvaluationGate@{ shape: rectangle, label: "Evaluation Gate" }
  BeautyStore@{ shape: disk, label: "Local Store" }
  BeautyReplyPolicy@{ shape: rectangle, label: "Reply Policy" }
  BeautyAnswerOrchestrator -. "\`evaluate\`" .-> BeautyEvaluationGate
  BeautyEvaluationGate -. "\`read candidates\`" .-> BeautyStore
  BeautyEvaluationGate -. "\`check thresholds\`" .-> BeautyReplyPolicy
  BeautyEvaluationGate -. "\`read policy state\`" .-> BeautyStore
`;case`handoffSequence`:return`---
title: "Escalation to Human Operator"
---
graph LR
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "Answer Orchestrator" }
  BeautyHandoffService@{ shape: rectangle, label: "Handoff Service" }
  BeautyStore@{ shape: disk, label: "Local Store" }
  BeautyWechatPlatform@{ shape: rectangle, label: "WeChat KF Platform" }
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  BeautyOperatorUi@{ shape: rounded, label: "Operator Console" }
  BeautyHandoffRoutes@{ shape: rectangle, label: "Handoff Routes" }
  BeautyAnswerOrchestrator -. "\`create ticket\`" .-> BeautyHandoffService
  BeautyHandoffService -. "\`persist ticket\`" .-> BeautyStore
  BeautyHandoffService -. "\`notify customer\`" .-> BeautyWechatPlatform
  Operator -. "\`opens ticket\`" .-> BeautyOperatorUi
  BeautyOperatorUi -. "\`claim ticket\`" .-> BeautyHandoffRoutes
`;case`knowledgeSyncSequence`:return`---
title: "Knowledge Promotion and Sync"
---
graph LR
  Operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  BeautyOperatorUi@{ shape: rounded, label: "Operator Console" }
  BeautyKnowledgeRoutes@{ shape: rectangle, label: "Knowledge Routes" }
  BeautyKnowledgeScan@{ shape: rectangle, label: "Knowledge Scan" }
  BeautyGovernance@{ shape: rectangle, label: "Knowledge Governance" }
  BeautyEvaluationGate@{ shape: rectangle, label: "Evaluation Gate" }
  BeautyKnowledgeSync@{ shape: rectangle, label: "Knowledge Sync" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow Knowledge" }
  Operator -. "\`triggers sync\`" .-> BeautyOperatorUi
  BeautyOperatorUi -. "\`request sync\`" .-> BeautyKnowledgeRoutes
  BeautyKnowledgeRoutes -. "\`scan candidates\`" .-> BeautyKnowledgeScan
  BeautyKnowledgeScan -. "\`submit for decision\`" .-> BeautyGovernance
  BeautyGovernance -. "\`apply publication rule\`" .-> BeautyEvaluationGate
  BeautyKnowledgeRoutes -. "\`push approved\`" .-> BeautyKnowledgeSync
  BeautyKnowledgeSync -. "\`read candidate wiki\`" .-> LlmWiki
  BeautyKnowledgeSync -. "\`write dataset\`" .-> BeautyRagflowKnowledge
`;case`configGatedFlow`:return`---
title: "Configuration-Gated Retrieval"
---
graph LR
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "Answer Orchestrator" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow Knowledge" }
  BeautyAnswerOrchestrator -. "\`attempts retrieval\`" .-> BeautyRagflowKnowledge
  BeautyRagflowKnowledge -. "\`checks config gate\`" .-> BeautyRagflowKnowledge
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
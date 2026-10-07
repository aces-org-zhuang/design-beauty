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
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Beauty@{ shape: rectangle, label: "美妆客服服务" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
  Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  Customer -. "\`发送消息（本地开发）\`" .-> Beauty
  Operator -. "\`使用\`" .-> Beauty
  Beauty -. "\`calls open API\`" .-> WechatWork
  Beauty -. "\`[...]\`" .-> Ragflow
  Beauty -. "\`reads candidate wiki\`" .-> LlmWiki
  WechatWork -. "\`回调加密报文\`" .-> Beauty
`;case`context`:return`---
title: "System Context"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Beauty@{ shape: rectangle, label: "美妆客服服务" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
  Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  Customer -. "\`发送消息（本地开发）\`" .-> Beauty
  Operator -. "\`使用\`" .-> Beauty
  Beauty -. "\`calls open API\`" .-> WechatWork
  WechatWork -. "\`回调加密报文\`" .-> Beauty
  Beauty -. "\`[...]\`" .-> Ragflow
  Beauty -. "\`reads candidate wiki\`" .-> LlmWiki
`;case`container`:return`---
title: "Containers and Integrations"
---
graph TB
  subgraph Beauty["\`美妆客服服务\`"]
    Beauty.FakeWechat@{ shape: rectangle, label: "模拟微信入口" }
    Beauty.OperatorUi@{ shape: rounded, label: "运营人员 Console" }
    Beauty.WechatCallback@{ shape: rectangle, label: "微信客服回调入口" }
    Beauty.AnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
    Beauty.KnowledgeRoutes@{ shape: rectangle, label: "知识库路由" }
    Beauty.MaterialRoutes@{ shape: rectangle, label: "素材路由" }
    Beauty.IntegrationRoutes@{ shape: rectangle, label: "集成状态路由" }
    Beauty.AnswerLoop@{ shape: rectangle, label: "知识应答循环" }
    Beauty.HandoffService@{ shape: rectangle, label: "转人工服务" }
    Beauty.RagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识库 知识检索" }
    Beauty.WechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
    Beauty.Store@{ shape: disk, label: "本地存储" }
  end
  Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  Beauty.FakeWechat -. "\`转发消息\`" .-> Beauty.AnswerOrchestrator
  Beauty.AnswerOrchestrator -. "\`请求应答\`" .-> Beauty.AnswerLoop
  Beauty.AnswerOrchestrator -. "\`不确定时升级人工\`" .-> Beauty.HandoffService
  Beauty.OperatorUi -. "\`运营知识库\`" .-> Beauty.KnowledgeRoutes
  Beauty.OperatorUi -. "\`查看状态\`" .-> Beauty.IntegrationRoutes
  Beauty.AnswerLoop -. "\`检索候选知识\`" .-> Beauty.RagflowKnowledge
  Beauty.WechatCallback -. "\`解密并分发\`" .-> Beauty.WechatPlatform
  Beauty.HandoffService -. "\`通知客户\`" .-> Beauty.WechatPlatform
  Beauty.WechatPlatform -. "\`传递归一化消息\`" .-> Beauty.AnswerOrchestrator
  Beauty.HandoffService -. "\`persists ticket\`" .-> Beauty.Store
  Beauty.WechatPlatform -. "\`calls open API\`" .-> WechatWork
  WechatWork -. "\`回调加密报文\`" .-> Beauty.WechatCallback
  Beauty.RagflowKnowledge -. "\`queries datasets\`" .-> Ragflow
`;case`answerPath`:return`---
title: "Answer Path"
---
graph TB
  BeautyWechatCallback@{ shape: rectangle, label: "微信客服回调入口" }
  BeautyFakeWechat@{ shape: rectangle, label: "模拟微信入口" }
  BeautyWechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
  BeautyAnswerLoop@{ shape: rectangle, label: "知识应答循环" }
  BeautyHandoffService@{ shape: rectangle, label: "转人工服务" }
  BeautyReplyPolicy@{ shape: rectangle, label: "回复策略" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识库 知识检索" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测���禁" }
  Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
  BeautyStore@{ shape: disk, label: "本地存储" }
  BeautyWechatCallback -. "\`解密并分发\`" .-> BeautyWechatPlatform
  BeautyFakeWechat -. "\`转发消息\`" .-> BeautyAnswerOrchestrator
  BeautyWechatPlatform -. "\`传递归一化消息\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`请求应答\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`校验阈值\`" .-> BeautyReplyPolicy
  BeautyReplyPolicy -. "\`把控发布\`" .-> BeautyEvaluationGate
  BeautyAnswerOrchestrator -. "\`不确定时升级人工\`" .-> BeautyHandoffService
  BeautyHandoffService -. "\`通知客户\`" .-> BeautyWechatPlatform
  BeautyAnswerLoop -. "\`检索候选知识\`" .-> BeautyRagflowKnowledge
  BeautyEvaluationGate -. "\`reads feedback candidates\`" .-> BeautyStore
  BeautyHandoffService -. "\`persists ticket\`" .-> BeautyStore
  BeautyWechatPlatform -. "\`calls open API\`" .-> WechatWork
  WechatWork -. "\`回调加密报文\`" .-> BeautyWechatCallback
  BeautyRagflowKnowledge -. "\`queries datasets\`" .-> Ragflow
`;case`knowledgeLifecycle`:return`---
title: "Knowledge Lifecycle"
---
graph TB
  BeautyKnowledgeRoutes@{ shape: rectangle, label: "知识库路由" }
  BeautyKnowledgeLifecycle@{ shape: rectangle, label: "知识生命周期视图" }
  BeautyMaterialRoutes@{ shape: rectangle, label: "素材路由" }
  BeautyMaterialBatch@{ shape: rectangle, label: "素材批处理" }
  BeautyKnowledgeAlert@{ shape: rectangle, label: "知识告警" }
  BeautyKnowledgeScan@{ shape: rectangle, label: "知识扫描" }
  BeautyKnowledgeSync@{ shape: rectangle, label: "知识同步" }
  BeautyRagflowLifecycleProbe@{ shape: rectangle, label: "RAGFlow 知识库 生命周期探针" }
  BeautyMaterialService@{ shape: rectangle, label: "素材服务" }
  BeautyGovernance@{ shape: rectangle, label: "知识治理" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识库 知识检索" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  BeautyDocumentRegistry@{ shape: rectangle, label: "文档登记簿" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测���禁" }
  Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
  BeautyStore@{ shape: disk, label: "本地存储" }
  BeautyKnowledgeRoutes -. "\`starts scan\`" .-> BeautyKnowledgeScan
  BeautyKnowledgeScan -. "\`submits candidates\`" .-> BeautyGovernance
  BeautyGovernance -. "\`applies 决策结果\`" .-> BeautyEvaluationGate
  BeautyKnowledgeRoutes -. "\`触发同步\`" .-> BeautyKnowledgeSync
  BeautyKnowledgeLifecycle -. "\`晋升或下线\`" .-> BeautyDocumentRegistry
  BeautyMaterialRoutes -. "\`接收素材\`" .-> BeautyMaterialService
  BeautyMaterialService -. "\`登记文档\`" .-> BeautyDocumentRegistry
  BeautyMaterialBatch -. "\`批量接入\`" .-> BeautyMaterialService
  BeautyKnowledgeSync -. "\`推送数据集\`" .-> BeautyRagflowKnowledge
  BeautyKnowledgeLifecycle -. "\`校验数据集状态\`" .-> BeautyRagflowLifecycleProbe
  BeautyEvaluationGate -. "\`reads feedback candidates\`" .-> BeautyStore
  BeautyKnowledgeAlert -. "\`报告新鲜度\`" .-> BeautyStore
  BeautyRagflowKnowledge -. "\`queries datasets\`" .-> Ragflow
  BeautyRagflowLifecycleProbe -. "\`inspects datasets\`" .-> Ragflow
  BeautyKnowledgeSync -. "\`reads candidate wiki\`" .-> LlmWiki
`;case`operatorSurface`:return`---
title: "Operator Surface"
---
graph TB
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  subgraph Beauty["\`美妆客服服务\`"]
    Beauty.OperatorUi@{ shape: rounded, label: "运营人员 Console" }
    Beauty.HandoffRoutes@{ shape: rectangle, label: "转人工路由" }
    Beauty.KnowledgeRoutes@{ shape: rectangle, label: "知识库路由" }
    Beauty.IntegrationRoutes@{ shape: rectangle, label: "集成状态路由" }
    Beauty.HandoffService@{ shape: rectangle, label: "转人工服务" }
    Beauty.MaterialRoutes@{ shape: rectangle, label: "素材路由" }
  end
  Operator -. "\`使用\`" .-> Beauty.OperatorUi
  Beauty.OperatorUi -. "\`管理工单\`" .-> Beauty.HandoffRoutes
  Beauty.OperatorUi -. "\`运营知识库\`" .-> Beauty.KnowledgeRoutes
  Beauty.OperatorUi -. "\`查看状态\`" .-> Beauty.IntegrationRoutes
`;case`chatToAnswer`:return`---
title: "Customer Message to Answer"
---
graph LR
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  BeautyFakeWechat@{ shape: rectangle, label: "模拟微信入口" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyAnswerLoop@{ shape: rectangle, label: "知识应答循环" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识库 知识检索" }
  Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
  BeautyReplyPolicy@{ shape: rectangle, label: "回复策略" }
  BeautyWechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
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
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  BeautyWechatCallback@{ shape: rectangle, label: "微信客服回调入口" }
  BeautyWechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyAnswerLoop@{ shape: rectangle, label: "知识应答循环" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识库 知识检索" }
  Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
  BeautyReplyPolicy@{ shape: rectangle, label: "回复策略" }
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
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测���禁" }
  BeautyStore@{ shape: disk, label: "本地存储" }
  BeautyReplyPolicy@{ shape: rectangle, label: "回复策略" }
  BeautyAnswerOrchestrator -. "\`evaluate\`" .-> BeautyEvaluationGate
  BeautyEvaluationGate -. "\`read candidates\`" .-> BeautyStore
  BeautyEvaluationGate -. "\`check thresholds\`" .-> BeautyReplyPolicy
  BeautyEvaluationGate -. "\`read policy state\`" .-> BeautyStore
`;case`handoffSequence`:return`---
title: "Escalation to Human Operator"
---
graph LR
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyHandoffService@{ shape: rectangle, label: "转人工服务" }
  BeautyStore@{ shape: disk, label: "本地存储" }
  BeautyWechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  BeautyOperatorUi@{ shape: rounded, label: "运营人员 Console" }
  BeautyHandoffRoutes@{ shape: rectangle, label: "转人工路由" }
  BeautyAnswerOrchestrator -. "\`create ticket\`" .-> BeautyHandoffService
  BeautyHandoffService -. "\`persist ticket\`" .-> BeautyStore
  BeautyHandoffService -. "\`notify customer\`" .-> BeautyWechatPlatform
  Operator -. "\`opens ticket\`" .-> BeautyOperatorUi
  BeautyOperatorUi -. "\`claim ticket\`" .-> BeautyHandoffRoutes
`;case`knowledgeSyncSequence`:return`---
title: "Knowledge Promotion and Sync"
---
graph LR
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  BeautyOperatorUi@{ shape: rounded, label: "运营人员 Console" }
  BeautyKnowledgeRoutes@{ shape: rectangle, label: "知识库路由" }
  BeautyKnowledgeScan@{ shape: rectangle, label: "知识扫描" }
  BeautyGovernance@{ shape: rectangle, label: "知识治理" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测���禁" }
  BeautyKnowledgeSync@{ shape: rectangle, label: "知识同步" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识库 知识检索" }
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
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识库 知识检索" }
  BeautyAnswerOrchestrator -. "\`attempts retrieval\`" .-> BeautyRagflowKnowledge
  BeautyRagflowKnowledge -. "\`checks config gate\`" .-> BeautyRagflowKnowledge
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
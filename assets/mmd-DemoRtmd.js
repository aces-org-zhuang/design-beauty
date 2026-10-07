var e=e=>{switch(e){case`localDeployment`:return`---
title: "本地开发部署"
---
graph TB
  subgraph LocalAppTier["\`应用层\`"]
    LocalAppTier.AppVmService@{ shape: rectangle, label: "美妆客服服务" }
  end
  subgraph LocalDataTier["\`数据层\`"]
    subgraph LocalDataTier.StoreVm["\`本地文件系统\`"]
      LocalDataTier.StoreVm.Store@{ shape: disk, label: "本地 JSON 存储" }
    end
    subgraph LocalDataTier.RagflowVm["\`本机 9380\`"]
      LocalDataTier.RagflowVm.Ragflow@{ shape: rectangle, label: "RAGFlow 知识库" }
    end
    subgraph LocalDataTier.WikiVm["\`本机 19828\`"]
      LocalDataTier.WikiVm.Wiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
    end
  end
  LocalAppTier.AppVmService -. "\`reads and writes\`" .-> LocalDataTier.StoreVm.Store
  LocalAppTier.AppVmService -. "\`[...]\`" .-> LocalDataTier.RagflowVm.Ragflow
  LocalAppTier.AppVmService -. "\`reads candidate wiki\`" .-> LocalDataTier.WikiVm.Wiki
`;case`wechatDeployment`:return`---
title: "企业微信云端边界"
---
graph TB
`;case`index`:return`---
title: "美妆客服服务 · 总览"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Beauty@{ shape: rectangle, label: "美妆客服服务" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  Customer -. "\`发送消息（本地开发）\`" .-> Beauty
  Operator -. "\`使用\`" .-> Beauty
  Beauty -. "\`calls open API\`" .-> WechatWork
  Beauty -. "\`[...]\`" .-> Ragflow
  Beauty -. "\`reads candidate wiki\`" .-> LlmWiki
  WechatWork -. "\`回调加密报文\`" .-> Beauty
`;case`context`:return`---
title: "系统上下文"
---
graph TB
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Beauty@{ shape: rectangle, label: "美妆客服服务" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  Customer -. "\`发送消息（本地开发）\`" .-> Beauty
  Operator -. "\`使用\`" .-> Beauty
  Beauty -. "\`calls open API\`" .-> WechatWork
  WechatWork -. "\`回调加密报文\`" .-> Beauty
  Beauty -. "\`[...]\`" .-> Ragflow
  Beauty -. "\`reads candidate wiki\`" .-> LlmWiki
`;case`container`:return`---
title: "容器与集成"
---
graph TB
  subgraph Beauty["\`美妆客服服务\`"]
    Beauty.FakeWechat@{ shape: rectangle, label: "模拟微信入口" }
    Beauty.OperatorUi@{ shape: rounded, label: "运营人员控制台" }
    Beauty.WechatCallback@{ shape: rectangle, label: "微信客服回调入口" }
    Beauty.AnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
    Beauty.KnowledgeRoutes@{ shape: rectangle, label: "知识库路由" }
    Beauty.MaterialRoutes@{ shape: rectangle, label: "素材路由" }
    Beauty.IntegrationRoutes@{ shape: rectangle, label: "集成状态路由" }
    Beauty.AnswerLoop@{ shape: rectangle, label: "知识应答循环" }
    Beauty.HandoffService@{ shape: rectangle, label: "转人工服务" }
    Beauty.RagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识检索" }
    Beauty.WechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
    Beauty.Store@{ shape: disk, label: "本地存储" }
  end
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
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
title: "应答链路"
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
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识检索" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测闸门" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
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
title: "知识生命周期视图"
---
graph TB
  BeautyKnowledgeRoutes@{ shape: rectangle, label: "知识库路由" }
  BeautyKnowledgeLifecycle@{ shape: rectangle, label: "知识生命周期视图" }
  BeautyMaterialRoutes@{ shape: rectangle, label: "素材路由" }
  BeautyMaterialBatch@{ shape: rectangle, label: "素材批处理" }
  BeautyKnowledgeAlert@{ shape: rectangle, label: "知识告警" }
  BeautyKnowledgeScan@{ shape: rectangle, label: "知识扫描" }
  BeautyKnowledgeSync@{ shape: rectangle, label: "知识同步" }
  BeautyRagflowLifecycleProbe@{ shape: rectangle, label: "RAGFlow 生命周期探针" }
  BeautyMaterialService@{ shape: rectangle, label: "素材服务" }
  BeautyGovernance@{ shape: rectangle, label: "知识治理" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识检索" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  BeautyDocumentRegistry@{ shape: rectangle, label: "文档登记簿" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测闸门" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
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
title: "运营台依赖面"
---
graph TB
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  subgraph Beauty["\`美妆客服服务\`"]
    Beauty.OperatorUi@{ shape: rounded, label: "运营人员控制台" }
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
title: "客户提问到应答"
---
graph LR
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  BeautyFakeWechat@{ shape: rectangle, label: "模拟微信入口" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyAnswerLoop@{ shape: rectangle, label: "知识应答循环" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识检索" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  BeautyReplyPolicy@{ shape: rectangle, label: "回复策略" }
  BeautyWechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
  WechatWork@{ shape: rectangle, label: "企业微信" }
  Customer -. "\`提出美妆咨询\`" .-> BeautyFakeWechat
  BeautyFakeWechat -. "\`转发消息\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`requests answer\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`检索候选知识\`" .-> BeautyRagflowKnowledge
  BeautyRagflowKnowledge -. "\`queries dataset\`" .-> Ragflow
  Ragflow -. "\`返回知识片段\`" .-> BeautyRagflowKnowledge
  BeautyAnswerLoop -. "\`评估置信度\`" .-> BeautyReplyPolicy
  BeautyReplyPolicy -. "\`允许自动回复\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`发送回复\`" .-> BeautyWechatPlatform
  BeautyWechatPlatform -. "\`发送消息\`" .-> WechatWork
`;case`retrievalSequence`:return`---
title: "应答检索时序"
---
graph LR
  Customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  BeautyWechatCallback@{ shape: rectangle, label: "微信客服回调入口" }
  BeautyWechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyAnswerLoop@{ shape: rectangle, label: "知识应答循环" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识检索" }
  Ragflow@{ shape: rectangle, label: "RAGFlow" }
  BeautyReplyPolicy@{ shape: rectangle, label: "回复策略" }
  Customer -. "\`发送问题\`" .-> BeautyWechatCallback
  BeautyWechatCallback -. "\`解密\`" .-> BeautyWechatPlatform
  BeautyWechatPlatform -. "\`归一化消息\`" .-> BeautyAnswerOrchestrator
  BeautyAnswerOrchestrator -. "\`请求应答\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`发起检索\`" .-> BeautyRagflowKnowledge
  BeautyRagflowKnowledge -. "\`查询知识库\`" .-> Ragflow
  BeautyRagflowKnowledge -. "\`返回知识片段\`" .-> BeautyAnswerLoop
  BeautyAnswerLoop -. "\`置信度\`" .-> BeautyReplyPolicy
  BeautyReplyPolicy -. "\`决策结果\`" .-> BeautyAnswerOrchestrator
`;case`evaluationSequence`:return`---
title: "策略评估读取时序"
---
graph LR
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测闸门" }
  BeautyStore@{ shape: disk, label: "本地存储" }
  BeautyReplyPolicy@{ shape: rectangle, label: "回复策略" }
  BeautyAnswerOrchestrator -. "\`执行评测\`" .-> BeautyEvaluationGate
  BeautyEvaluationGate -. "\`读取候选\`" .-> BeautyStore
  BeautyEvaluationGate -. "\`校验阈值\`" .-> BeautyReplyPolicy
  BeautyEvaluationGate -. "\`读取策略状态\`" .-> BeautyStore
`;case`handoffSequence`:return`---
title: "升级到人工运营"
---
graph LR
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyHandoffService@{ shape: rectangle, label: "转人工服务" }
  BeautyStore@{ shape: disk, label: "本地存储" }
  BeautyWechatPlatform@{ shape: rectangle, label: "微信客服平台适配" }
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  BeautyOperatorUi@{ shape: rounded, label: "运营人员控制台" }
  BeautyHandoffRoutes@{ shape: rectangle, label: "转人工路由" }
  BeautyAnswerOrchestrator -. "\`创建工单\`" .-> BeautyHandoffService
  BeautyHandoffService -. "\`持久化工单\`" .-> BeautyStore
  BeautyHandoffService -. "\`通知客户\`" .-> BeautyWechatPlatform
  Operator -. "\`打开工单\`" .-> BeautyOperatorUi
  BeautyOperatorUi -. "\`认领工单\`" .-> BeautyHandoffRoutes
`;case`knowledgeSyncSequence`:return`---
title: "知识晋升与同步"
---
graph LR
  Operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  BeautyOperatorUi@{ shape: rounded, label: "运营人员控制台" }
  BeautyKnowledgeRoutes@{ shape: rectangle, label: "知识库路由" }
  BeautyKnowledgeScan@{ shape: rectangle, label: "知识扫描" }
  BeautyGovernance@{ shape: rectangle, label: "知识治理" }
  BeautyEvaluationGate@{ shape: rectangle, label: "评测闸门" }
  BeautyKnowledgeSync@{ shape: rectangle, label: "知识同步" }
  LlmWiki@{ shape: rectangle, label: "LLM Wiki 候选源" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识检索" }
  Operator -. "\`触发同步\`" .-> BeautyOperatorUi
  BeautyOperatorUi -. "\`请求同步\`" .-> BeautyKnowledgeRoutes
  BeautyKnowledgeRoutes -. "\`扫描候选项\`" .-> BeautyKnowledgeScan
  BeautyKnowledgeScan -. "\`submit for 决策结果\`" .-> BeautyGovernance
  BeautyGovernance -. "\`应用发布规则\`" .-> BeautyEvaluationGate
  BeautyKnowledgeRoutes -. "\`推送已批准项\`" .-> BeautyKnowledgeSync
  BeautyKnowledgeSync -. "\`读取候选 wiki\`" .-> LlmWiki
  BeautyKnowledgeSync -. "\`写入数据集\`" .-> BeautyRagflowKnowledge
`;case`configGatedFlow`:return`---
title: "配置门控检索"
---
graph LR
  BeautyAnswerOrchestrator@{ shape: rectangle, label: "应答编排器" }
  BeautyRagflowKnowledge@{ shape: rectangle, label: "RAGFlow 知识检索" }
  BeautyAnswerOrchestrator -. "\`尝试检索\`" .-> BeautyRagflowKnowledge
  BeautyRagflowKnowledge -. "\`检查配置门控\`" .-> BeautyRagflowKnowledge
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
var e=e=>{switch(e){case`localDeployment`:return`direction: down

LocalAppTier: {
  label: "Application Tier"

  AppVmService: {
    label: "Beauty Customer Service"
  }
}
LocalDataTier: {
  label: "Data Tier"

  StoreVm: {
    label: "local filesystem"

    Store: {
      label: "Local JSON Store"
      shape: stored_data
    }
  }
  RagflowVm: {
    label: "localhost:9380"

    Ragflow: {
      label: "RAGFlow"
    }
  }
  WikiVm: {
    label: "localhost:19828"

    Wiki: {
      label: "LLM Wiki"
    }
  }
}

LocalAppTier.AppVmService -> LocalDataTier.StoreVm.Store: "reads and writes"
LocalAppTier.AppVmService -> LocalDataTier.RagflowVm.Ragflow: "[...]"
LocalAppTier.AppVmService -> LocalDataTier.WikiVm.Wiki: "reads candidate wiki"
`;case`wechatDeployment`:return`direction: down

`;case`index`:return`direction: down

Customer: {
  label: "客户"
  shape: c4-person
}
Operator: {
  label: "运营人员"
  shape: c4-person
}
Beauty: {
  label: "美妆客服服务"
}
WechatWork: {
  label: "企业微信"
}
Ragflow: {
  label: "RAGFlow 知识库"
}
LlmWiki: {
  label: "LLM Wiki 候选源"
}

Customer -> Beauty: "发送消息（本地开发）"
Operator -> Beauty: "使用"
Beauty -> WechatWork: "calls open API"
Beauty -> Ragflow: "[...]"
Beauty -> LlmWiki: "reads candidate wiki"
WechatWork -> Beauty: "回调加密报文"
`;case`context`:return`direction: down

Customer: {
  label: "客户"
  shape: c4-person
}
Operator: {
  label: "运营人员"
  shape: c4-person
}
Beauty: {
  label: "美妆客服服务"
}
WechatWork: {
  label: "企业微信"
}
Ragflow: {
  label: "RAGFlow 知识库"
}
LlmWiki: {
  label: "LLM Wiki 候选源"
}

Customer -> Beauty: "发送消息（本地开发）"
Operator -> Beauty: "使用"
Beauty -> WechatWork: "calls open API"
WechatWork -> Beauty: "回调加密报文"
Beauty -> Ragflow: "[...]"
Beauty -> LlmWiki: "reads candidate wiki"
`;case`container`:return`direction: down

Beauty: {
  label: "美妆客服服务"

  FakeWechat: {
    label: "模拟微信入口"
  }
  OperatorUi: {
    label: "运营人员 Console"
  }
  WechatCallback: {
    label: "微信客服回调入口"
  }
  AnswerOrchestrator: {
    label: "应答编排器"
  }
  KnowledgeRoutes: {
    label: "知识库路由"
  }
  MaterialRoutes: {
    label: "素材路由"
  }
  IntegrationRoutes: {
    label: "集成状态路由"
  }
  AnswerLoop: {
    label: "知识应答循环"
  }
  HandoffService: {
    label: "转人工服务"
  }
  RagflowKnowledge: {
    label: "RAGFlow 知识库 知识检索"
  }
  WechatPlatform: {
    label: "微信客服平台适配"
  }
  Store: {
    label: "本地存储"
    shape: stored_data
  }
}
Ragflow: {
  label: "RAGFlow 知识库"
}
WechatWork: {
  label: "企业微信"
}
LlmWiki: {
  label: "LLM Wiki 候选源"
}

Beauty.FakeWechat -> Beauty.AnswerOrchestrator: "转发消息"
Beauty.AnswerOrchestrator -> Beauty.AnswerLoop: "请求应答"
Beauty.AnswerOrchestrator -> Beauty.HandoffService: "不确定时升级人工"
Beauty.OperatorUi -> Beauty.KnowledgeRoutes: "运营知识库"
Beauty.OperatorUi -> Beauty.IntegrationRoutes: "查看状态"
Beauty.AnswerLoop -> Beauty.RagflowKnowledge: "检索候选知识"
Beauty.WechatCallback -> Beauty.WechatPlatform: "解密并分发"
Beauty.HandoffService -> Beauty.WechatPlatform: "通知客户"
Beauty.WechatPlatform -> Beauty.AnswerOrchestrator: "传递归一化消息"
Beauty.HandoffService -> Beauty.Store: "persists ticket"
Beauty.WechatPlatform -> WechatWork: "calls open API"
WechatWork -> Beauty.WechatCallback: "回调加密报文"
Beauty.RagflowKnowledge -> Ragflow: "queries datasets"
`;case`answerPath`:return`direction: down

BeautyWechatCallback: {
  label: "微信客服回调入口"
}
BeautyFakeWechat: {
  label: "模拟微信入口"
}
BeautyWechatPlatform: {
  label: "微信客服平台适配"
}
BeautyAnswerOrchestrator: {
  label: "应答编排器"
}
WechatWork: {
  label: "企业微信"
}
BeautyAnswerLoop: {
  label: "知识应答循环"
}
BeautyHandoffService: {
  label: "转人工服务"
}
BeautyReplyPolicy: {
  label: "回复策略"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow 知识库 知识检索"
}
BeautyEvaluationGate: {
  label: "评测���禁"
}
Ragflow: {
  label: "RAGFlow 知识库"
}
BeautyStore: {
  label: "本地存储"
  shape: stored_data
}

BeautyWechatCallback -> BeautyWechatPlatform: "解密并分发"
BeautyFakeWechat -> BeautyAnswerOrchestrator: "转发消息"
BeautyWechatPlatform -> BeautyAnswerOrchestrator: "传递归一化消息"
BeautyAnswerOrchestrator -> BeautyAnswerLoop: "请求应答"
BeautyAnswerLoop -> BeautyReplyPolicy: "校验阈值"
BeautyReplyPolicy -> BeautyEvaluationGate: "把控发布"
BeautyAnswerOrchestrator -> BeautyHandoffService: "不确定时升级人工"
BeautyHandoffService -> BeautyWechatPlatform: "通知客户"
BeautyAnswerLoop -> BeautyRagflowKnowledge: "检索候选知识"
BeautyEvaluationGate -> BeautyStore: "reads feedback candidates"
BeautyHandoffService -> BeautyStore: "persists ticket"
BeautyWechatPlatform -> WechatWork: "calls open API"
WechatWork -> BeautyWechatCallback: "回调加密报文"
BeautyRagflowKnowledge -> Ragflow: "queries datasets"
`;case`knowledgeLifecycle`:return`direction: down

BeautyKnowledgeRoutes: {
  label: "知识库路由"
}
BeautyKnowledgeLifecycle: {
  label: "知识生命周期视图"
}
BeautyMaterialRoutes: {
  label: "素材路由"
}
BeautyMaterialBatch: {
  label: "素材批处理"
}
BeautyKnowledgeAlert: {
  label: "知识告警"
}
BeautyKnowledgeScan: {
  label: "知识扫描"
}
BeautyKnowledgeSync: {
  label: "知识同步"
}
BeautyRagflowLifecycleProbe: {
  label: "RAGFlow 知识库 生命周期探针"
}
BeautyMaterialService: {
  label: "素材服务"
}
BeautyGovernance: {
  label: "知识治理"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow 知识库 知识检索"
}
LlmWiki: {
  label: "LLM Wiki 候选源"
}
BeautyDocumentRegistry: {
  label: "文档登记簿"
}
BeautyEvaluationGate: {
  label: "评测���禁"
}
Ragflow: {
  label: "RAGFlow 知识库"
}
BeautyStore: {
  label: "本地存储"
  shape: stored_data
}

BeautyKnowledgeRoutes -> BeautyKnowledgeScan: "starts scan"
BeautyKnowledgeScan -> BeautyGovernance: "submits candidates"
BeautyGovernance -> BeautyEvaluationGate: "applies 决策结果"
BeautyKnowledgeRoutes -> BeautyKnowledgeSync: "触发同步"
BeautyKnowledgeLifecycle -> BeautyDocumentRegistry: "晋升或下线"
BeautyMaterialRoutes -> BeautyMaterialService: "接收素材"
BeautyMaterialService -> BeautyDocumentRegistry: "登记文档"
BeautyMaterialBatch -> BeautyMaterialService: "批量接入"
BeautyKnowledgeSync -> BeautyRagflowKnowledge: "推送数据集"
BeautyKnowledgeLifecycle -> BeautyRagflowLifecycleProbe: "校验数据集状态"
BeautyEvaluationGate -> BeautyStore: "reads feedback candidates"
BeautyKnowledgeAlert -> BeautyStore: "报告新鲜度"
BeautyRagflowKnowledge -> Ragflow: "queries datasets"
BeautyRagflowLifecycleProbe -> Ragflow: "inspects datasets"
BeautyKnowledgeSync -> LlmWiki: "reads candidate wiki"
`;case`operatorSurface`:return`direction: down

Operator: {
  label: "运营人员"
  shape: c4-person
}
Beauty: {
  label: "美妆客服服务"

  OperatorUi: {
    label: "运营人员 Console"
  }
  HandoffRoutes: {
    label: "转人工路由"
  }
  KnowledgeRoutes: {
    label: "知识库路由"
  }
  IntegrationRoutes: {
    label: "集成状态路由"
  }
  HandoffService: {
    label: "转人工服务"
  }
  MaterialRoutes: {
    label: "素材路由"
  }
}

Operator -> Beauty.OperatorUi: "使用"
Beauty.OperatorUi -> Beauty.HandoffRoutes: "管理工单"
Beauty.OperatorUi -> Beauty.KnowledgeRoutes: "运营知识库"
Beauty.OperatorUi -> Beauty.IntegrationRoutes: "查看状态"
`;case`chatToAnswer`:return`direction: right

Customer: {
  label: "客户"
  shape: c4-person
}
BeautyFakeWechat: {
  label: "模拟微信入口"
}
BeautyAnswerOrchestrator: {
  label: "应答编排器"
}
BeautyAnswerLoop: {
  label: "知识应答循环"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow 知识库 知识检索"
}
Ragflow: {
  label: "RAGFlow 知识库"
}
BeautyReplyPolicy: {
  label: "回复策略"
}
BeautyWechatPlatform: {
  label: "微信客服平台适配"
}
WechatWork: {
  label: "企业微信"
}

Customer -> BeautyFakeWechat: "asks a beauty question"
BeautyFakeWechat -> BeautyAnswerOrchestrator: "forwards message"
BeautyAnswerOrchestrator -> BeautyAnswerLoop: "requests answer"
BeautyAnswerLoop -> BeautyRagflowKnowledge: "retrieves candidates"
BeautyRagflowKnowledge -> Ragflow: "queries dataset"
Ragflow -> BeautyRagflowKnowledge: "returns passages"
BeautyAnswerLoop -> BeautyReplyPolicy: "checks confidence"
BeautyReplyPolicy -> BeautyAnswerOrchestrator: "auto-reply allowed"
BeautyAnswerOrchestrator -> BeautyWechatPlatform: "sends reply"
BeautyWechatPlatform -> WechatWork: "posts message"
`;case`retrievalSequence`:return`direction: right

Customer: {
  label: "客户"
  shape: c4-person
}
BeautyWechatCallback: {
  label: "微信客服回调入口"
}
BeautyWechatPlatform: {
  label: "微信客服平台适配"
}
BeautyAnswerOrchestrator: {
  label: "应答编排器"
}
BeautyAnswerLoop: {
  label: "知识应答循环"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow 知识库 知识检索"
}
Ragflow: {
  label: "RAGFlow 知识库"
}
BeautyReplyPolicy: {
  label: "回复策略"
}

Customer -> BeautyWechatCallback: "sends question"
BeautyWechatCallback -> BeautyWechatPlatform: "decrypts"
BeautyWechatPlatform -> BeautyAnswerOrchestrator: "normalized message"
BeautyAnswerOrchestrator -> BeautyAnswerLoop: "asks for answer"
BeautyAnswerLoop -> BeautyRagflowKnowledge: "retrieve"
BeautyRagflowKnowledge -> Ragflow: "query"
BeautyRagflowKnowledge -> BeautyAnswerLoop: "passages"
BeautyAnswerLoop -> BeautyReplyPolicy: "confidence"
BeautyReplyPolicy -> BeautyAnswerOrchestrator: "decision"
`;case`evaluationSequence`:return`direction: right

BeautyAnswerOrchestrator: {
  label: "应答编排器"
}
BeautyEvaluationGate: {
  label: "评测���禁"
}
BeautyStore: {
  label: "本地存储"
  shape: stored_data
}
BeautyReplyPolicy: {
  label: "回复策略"
}

BeautyAnswerOrchestrator -> BeautyEvaluationGate: "evaluate"
BeautyEvaluationGate -> BeautyStore: "read candidates"
BeautyEvaluationGate -> BeautyReplyPolicy: "check thresholds"
BeautyEvaluationGate -> BeautyStore: "read policy state"
`;case`handoffSequence`:return`direction: right

BeautyAnswerOrchestrator: {
  label: "应答编排器"
}
BeautyHandoffService: {
  label: "转人工服务"
}
BeautyStore: {
  label: "本地存储"
  shape: stored_data
}
BeautyWechatPlatform: {
  label: "微信客服平台适配"
}
Operator: {
  label: "运营人员"
  shape: c4-person
}
BeautyOperatorUi: {
  label: "运营人员 Console"
}
BeautyHandoffRoutes: {
  label: "转人工路由"
}

BeautyAnswerOrchestrator -> BeautyHandoffService: "create ticket"
BeautyHandoffService -> BeautyStore: "persist ticket"
BeautyHandoffService -> BeautyWechatPlatform: "notify customer"
Operator -> BeautyOperatorUi: "opens ticket"
BeautyOperatorUi -> BeautyHandoffRoutes: "claim ticket"
`;case`knowledgeSyncSequence`:return`direction: right

Operator: {
  label: "运营人员"
  shape: c4-person
}
BeautyOperatorUi: {
  label: "运营人员 Console"
}
BeautyKnowledgeRoutes: {
  label: "知识库路由"
}
BeautyKnowledgeScan: {
  label: "知识扫描"
}
BeautyGovernance: {
  label: "知识治理"
}
BeautyEvaluationGate: {
  label: "评测���禁"
}
BeautyKnowledgeSync: {
  label: "知识同步"
}
LlmWiki: {
  label: "LLM Wiki 候选源"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow 知识库 知识检索"
}

Operator -> BeautyOperatorUi: "triggers sync"
BeautyOperatorUi -> BeautyKnowledgeRoutes: "request sync"
BeautyKnowledgeRoutes -> BeautyKnowledgeScan: "scan candidates"
BeautyKnowledgeScan -> BeautyGovernance: "submit for decision"
BeautyGovernance -> BeautyEvaluationGate: "apply publication rule"
BeautyKnowledgeRoutes -> BeautyKnowledgeSync: "push approved"
BeautyKnowledgeSync -> LlmWiki: "read candidate wiki"
BeautyKnowledgeSync -> BeautyRagflowKnowledge: "write dataset"
`;case`configGatedFlow`:return`direction: right

BeautyAnswerOrchestrator: {
  label: "应答编排器"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow 知识库 知识检索"
}

BeautyAnswerOrchestrator -> BeautyRagflowKnowledge: "attempts retrieval"
BeautyRagflowKnowledge -> BeautyRagflowKnowledge: "checks config gate"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
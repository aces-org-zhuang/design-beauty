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
  label: "Customer"
  shape: c4-person
}
Operator: {
  label: "Operator"
  shape: c4-person
}
Beauty: {
  label: "Beauty Customer Service"
}
WechatWork: {
  label: "WeChat Work"
}
Ragflow: {
  label: "RAGFlow"
}
LlmWiki: {
  label: "LLM Wiki"
}

Customer -> Beauty: "messages (local dev)"
Operator -> Beauty: "uses"
Beauty -> WechatWork: "calls open API"
Beauty -> Ragflow: "[...]"
Beauty -> LlmWiki: "reads candidate wiki"
WechatWork -> Beauty: "posts encrypted callback"
`;case`context`:return`direction: down

Customer: {
  label: "Customer"
  shape: c4-person
}
Operator: {
  label: "Operator"
  shape: c4-person
}
Beauty: {
  label: "Beauty Customer Service"
}
WechatWork: {
  label: "WeChat Work"
}
Ragflow: {
  label: "RAGFlow"
}
LlmWiki: {
  label: "LLM Wiki"
}

Customer -> Beauty: "messages (local dev)"
Operator -> Beauty: "uses"
Beauty -> WechatWork: "calls open API"
WechatWork -> Beauty: "posts encrypted callback"
Beauty -> Ragflow: "[...]"
Beauty -> LlmWiki: "reads candidate wiki"
`;case`container`:return`direction: down

Beauty: {
  label: "Beauty Customer Service"

  FakeWechat: {
    label: "Fake WeChat"
  }
  OperatorUi: {
    label: "Operator Console"
  }
  WechatCallback: {
    label: "WeChat KF Callback"
  }
  AnswerOrchestrator: {
    label: "Answer Orchestrator"
  }
  KnowledgeRoutes: {
    label: "Knowledge Routes"
  }
  MaterialRoutes: {
    label: "Material Routes"
  }
  IntegrationRoutes: {
    label: "Integration Routes"
  }
  AnswerLoop: {
    label: "Knowledge Answer Loop"
  }
  HandoffService: {
    label: "Handoff Service"
  }
  RagflowKnowledge: {
    label: "RAGFlow Knowledge"
  }
  WechatPlatform: {
    label: "WeChat KF Platform"
  }
  Store: {
    label: "Local Store"
    shape: stored_data
  }
}
Ragflow: {
  label: "RAGFlow"
}
WechatWork: {
  label: "WeChat Work"
}
LlmWiki: {
  label: "LLM Wiki"
}

Beauty.FakeWechat -> Beauty.AnswerOrchestrator: "forwards message"
Beauty.AnswerOrchestrator -> Beauty.AnswerLoop: "asks for answer"
Beauty.AnswerOrchestrator -> Beauty.HandoffService: "escalates when uncertain"
Beauty.OperatorUi -> Beauty.KnowledgeRoutes: "operates knowledge"
Beauty.OperatorUi -> Beauty.IntegrationRoutes: "checks status"
Beauty.AnswerLoop -> Beauty.RagflowKnowledge: "retrieves candidates"
Beauty.WechatCallback -> Beauty.WechatPlatform: "decrypts and dispatches"
Beauty.HandoffService -> Beauty.WechatPlatform: "notifies customer"
Beauty.WechatPlatform -> Beauty.AnswerOrchestrator: "passes normalized message"
Beauty.HandoffService -> Beauty.Store: "persists ticket"
Beauty.WechatPlatform -> WechatWork: "calls open API"
WechatWork -> Beauty.WechatCallback: "posts encrypted callback"
Beauty.RagflowKnowledge -> Ragflow: "queries datasets"
`;case`answerPath`:return`direction: down

BeautyWechatCallback: {
  label: "WeChat KF Callback"
}
BeautyFakeWechat: {
  label: "Fake WeChat"
}
BeautyWechatPlatform: {
  label: "WeChat KF Platform"
}
BeautyAnswerOrchestrator: {
  label: "Answer Orchestrator"
}
WechatWork: {
  label: "WeChat Work"
}
BeautyAnswerLoop: {
  label: "Knowledge Answer Loop"
}
BeautyHandoffService: {
  label: "Handoff Service"
}
BeautyReplyPolicy: {
  label: "Reply Policy"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow Knowledge"
}
BeautyEvaluationGate: {
  label: "Evaluation Gate"
}
Ragflow: {
  label: "RAGFlow"
}
BeautyStore: {
  label: "Local Store"
  shape: stored_data
}

BeautyWechatCallback -> BeautyWechatPlatform: "decrypts and dispatches"
BeautyFakeWechat -> BeautyAnswerOrchestrator: "forwards message"
BeautyWechatPlatform -> BeautyAnswerOrchestrator: "passes normalized message"
BeautyAnswerOrchestrator -> BeautyAnswerLoop: "asks for answer"
BeautyAnswerLoop -> BeautyReplyPolicy: "checks thresholds"
BeautyReplyPolicy -> BeautyEvaluationGate: "gates publication"
BeautyAnswerOrchestrator -> BeautyHandoffService: "escalates when uncertain"
BeautyHandoffService -> BeautyWechatPlatform: "notifies customer"
BeautyAnswerLoop -> BeautyRagflowKnowledge: "retrieves candidates"
BeautyEvaluationGate -> BeautyStore: "reads feedback candidates"
BeautyHandoffService -> BeautyStore: "persists ticket"
BeautyWechatPlatform -> WechatWork: "calls open API"
WechatWork -> BeautyWechatCallback: "posts encrypted callback"
BeautyRagflowKnowledge -> Ragflow: "queries datasets"
`;case`knowledgeLifecycle`:return`direction: down

BeautyKnowledgeRoutes: {
  label: "Knowledge Routes"
}
BeautyKnowledgeLifecycle: {
  label: "Knowledge Lifecycle"
}
BeautyMaterialRoutes: {
  label: "Material Routes"
}
BeautyMaterialBatch: {
  label: "Material Batch"
}
BeautyKnowledgeAlert: {
  label: "Knowledge Alert"
}
BeautyKnowledgeScan: {
  label: "Knowledge Scan"
}
BeautyKnowledgeSync: {
  label: "Knowledge Sync"
}
BeautyRagflowLifecycleProbe: {
  label: "RAGFlow Lifecycle Probe"
}
BeautyMaterialService: {
  label: "Material Service"
}
BeautyGovernance: {
  label: "Knowledge Governance"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow Knowledge"
}
LlmWiki: {
  label: "LLM Wiki"
}
BeautyDocumentRegistry: {
  label: "Document Registry"
}
BeautyEvaluationGate: {
  label: "Evaluation Gate"
}
Ragflow: {
  label: "RAGFlow"
}
BeautyStore: {
  label: "Local Store"
  shape: stored_data
}

BeautyKnowledgeRoutes -> BeautyKnowledgeScan: "starts scan"
BeautyKnowledgeScan -> BeautyGovernance: "submits candidates"
BeautyGovernance -> BeautyEvaluationGate: "applies decision"
BeautyKnowledgeRoutes -> BeautyKnowledgeSync: "triggers sync"
BeautyKnowledgeLifecycle -> BeautyDocumentRegistry: "promotes or retires"
BeautyMaterialRoutes -> BeautyMaterialService: "accepts material"
BeautyMaterialService -> BeautyDocumentRegistry: "registers document"
BeautyMaterialBatch -> BeautyMaterialService: "batch ingests"
BeautyKnowledgeSync -> BeautyRagflowKnowledge: "pushes dataset"
BeautyKnowledgeLifecycle -> BeautyRagflowLifecycleProbe: "verifies dataset state"
BeautyEvaluationGate -> BeautyStore: "reads feedback candidates"
BeautyKnowledgeAlert -> BeautyStore: "reports freshness"
BeautyRagflowKnowledge -> Ragflow: "queries datasets"
BeautyRagflowLifecycleProbe -> Ragflow: "inspects datasets"
BeautyKnowledgeSync -> LlmWiki: "reads candidate wiki"
`;case`operatorSurface`:return`direction: down

Operator: {
  label: "Operator"
  shape: c4-person
}
Beauty: {
  label: "Beauty Customer Service"

  OperatorUi: {
    label: "Operator Console"
  }
  HandoffRoutes: {
    label: "Handoff Routes"
  }
  KnowledgeRoutes: {
    label: "Knowledge Routes"
  }
  IntegrationRoutes: {
    label: "Integration Routes"
  }
  HandoffService: {
    label: "Handoff Service"
  }
  MaterialRoutes: {
    label: "Material Routes"
  }
}

Operator -> Beauty.OperatorUi: "uses"
Beauty.OperatorUi -> Beauty.HandoffRoutes: "manages tickets"
Beauty.OperatorUi -> Beauty.KnowledgeRoutes: "operates knowledge"
Beauty.OperatorUi -> Beauty.IntegrationRoutes: "checks status"
`;case`chatToAnswer`:return`direction: right

Customer: {
  label: "Customer"
  shape: c4-person
}
BeautyFakeWechat: {
  label: "Fake WeChat"
}
BeautyAnswerOrchestrator: {
  label: "Answer Orchestrator"
}
BeautyAnswerLoop: {
  label: "Knowledge Answer Loop"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow Knowledge"
}
Ragflow: {
  label: "RAGFlow"
}
BeautyReplyPolicy: {
  label: "Reply Policy"
}
BeautyWechatPlatform: {
  label: "WeChat KF Platform"
}
WechatWork: {
  label: "WeChat Work"
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
  label: "Customer"
  shape: c4-person
}
BeautyWechatCallback: {
  label: "WeChat KF Callback"
}
BeautyWechatPlatform: {
  label: "WeChat KF Platform"
}
BeautyAnswerOrchestrator: {
  label: "Answer Orchestrator"
}
BeautyAnswerLoop: {
  label: "Knowledge Answer Loop"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow Knowledge"
}
Ragflow: {
  label: "RAGFlow"
}
BeautyReplyPolicy: {
  label: "Reply Policy"
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
  label: "Answer Orchestrator"
}
BeautyEvaluationGate: {
  label: "Evaluation Gate"
}
BeautyStore: {
  label: "Local Store"
  shape: stored_data
}
BeautyReplyPolicy: {
  label: "Reply Policy"
}

BeautyAnswerOrchestrator -> BeautyEvaluationGate: "evaluate"
BeautyEvaluationGate -> BeautyStore: "read candidates"
BeautyEvaluationGate -> BeautyReplyPolicy: "check thresholds"
BeautyEvaluationGate -> BeautyStore: "read policy state"
`;case`handoffSequence`:return`direction: right

BeautyAnswerOrchestrator: {
  label: "Answer Orchestrator"
}
BeautyHandoffService: {
  label: "Handoff Service"
}
BeautyStore: {
  label: "Local Store"
  shape: stored_data
}
BeautyWechatPlatform: {
  label: "WeChat KF Platform"
}
Operator: {
  label: "Operator"
  shape: c4-person
}
BeautyOperatorUi: {
  label: "Operator Console"
}
BeautyHandoffRoutes: {
  label: "Handoff Routes"
}

BeautyAnswerOrchestrator -> BeautyHandoffService: "create ticket"
BeautyHandoffService -> BeautyStore: "persist ticket"
BeautyHandoffService -> BeautyWechatPlatform: "notify customer"
Operator -> BeautyOperatorUi: "opens ticket"
BeautyOperatorUi -> BeautyHandoffRoutes: "claim ticket"
`;case`knowledgeSyncSequence`:return`direction: right

Operator: {
  label: "Operator"
  shape: c4-person
}
BeautyOperatorUi: {
  label: "Operator Console"
}
BeautyKnowledgeRoutes: {
  label: "Knowledge Routes"
}
BeautyKnowledgeScan: {
  label: "Knowledge Scan"
}
BeautyGovernance: {
  label: "Knowledge Governance"
}
BeautyEvaluationGate: {
  label: "Evaluation Gate"
}
BeautyKnowledgeSync: {
  label: "Knowledge Sync"
}
LlmWiki: {
  label: "LLM Wiki"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow Knowledge"
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
  label: "Answer Orchestrator"
}
BeautyRagflowKnowledge: {
  label: "RAGFlow Knowledge"
}

BeautyAnswerOrchestrator -> BeautyRagflowKnowledge: "attempts retrieval"
BeautyRagflowKnowledge -> BeautyRagflowKnowledge: "checks config gate"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
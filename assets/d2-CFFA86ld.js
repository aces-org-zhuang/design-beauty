var e=e=>{switch(e){case`procLocal`:return`direction: down

`;case`procProd`:return`direction: down

`;case`pano-us`:return`direction: down

Feat_answer_fUs_ask: {
  label: "US-001 客户提问获得专业答复"
  shape: document
}
Feat_answer_fUs_lowConfidence: {
  label: "US-002 答不准时转人工而非硬答"
  shape: document
}
Feat_knowledge_f: {
  label: "Feature-002-F 知识运营能力"

  Us_scan: {
    label: "US-201 素材入库后自动进入候选知识"
    shape: document
  }
  Us_govern: {
    label: "US-202 候选知识经我决策后才对外可见"
    shape: document
  }
  Us_alert: {
    label: "US-203 知识陈旧时我能收到提示"
    shape: document
  }
}
Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"

  Us_kbEmpty: {
    label: "US-101 知识库为空时运营人员能看见"
    shape: document
  }
  Us_ragTimeout: {
    label: "US-102 RAGFlow 超时时客户不被静默等待"
    shape: document
  }
  Us_llmDown: {
    label: "US-103 LLM 不可用时转人工而非静默失败"
    shape: document
  }
}

Feat_knowledge_f.Us_scan -> Feat_knowledge_f.Us_govern: "提交候选进入治理"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_alert: "晋升后进入新鲜度巡检"
Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Us_llmDown: "提交发布判定"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Us_llmDown: "统一由提示环节下发"
`;case`pano-f`:return`direction: down

Feat_answer_fF_answer: {
  label: "F-001 应答编排能力"
}
Feat_answer_fF_retrieval: {
  label: "F-002 知识检索能力"
}
Feat_knowledge_fF_ingest: {
  label: "F-201 素材接入能力"
}
Feat_knowledge_fF_govern: {
  label: "F-202 知识治理能力"
}
`;case`pano-nf`:return`direction: down

Feat_degrade_nfNf_kbEmpty: {
  label: "NF-101 知识库为零条时状态可见"
}
Feat_degrade_nfNf_ragTimeout: {
  label: "NF-102 RAGFlow 超 8 秒时客户可感知"
}
Feat_degrade_nfNf_llmDown: {
  label: "NF-103 LLM 不可用时自动转人工"
}
`;case`pano-i`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"

  Us_lowConfidence: {
    label: "US-002 答不准时转人工而非硬答"
    shape: document
  }
  I_goal: {
    label: "I-101 业务目标"
  }
  Us_ask: {
    label: "US-001 客户提问获得专业答复"
    shape: document
  }
}
Feat_knowledge_fI_goal: {
  label: "I-201 业务目标"
}
Feat_knowledge_fUs_scan: {
  label: "US-201 素材入库后自动进入候选知识"
  shape: document
}
Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"

  Us_kbEmpty: {
    label: "US-101 知识库为空时运营人员能看见"
    shape: document
  }
  I_goal: {
    label: "I-141 业务目标"
  }
}

Feat_answer_f.I_goal -> Feat_answer_f.Us_ask: "支撑下发环节"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.I_goal: "落为业务目标"
Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.I_goal: "落为业务目标"
`;case`pano-i-state`:return`direction: down

Feat_answer_fSt_received: {
  label: "已接收"
}
Feat_answer_fSt_retrieving: {
  label: "检索中"
}
Feat_answer_fSt_answering: {
  label: "应答中"
}
Feat_answer_fSt_waitingHuman: {
  label: "待人工"
}
Feat_answer_fSt_answered: {
  label: "已答复"
}

Feat_answer_fSt_received -> Feat_answer_fSt_retrieving: "发起检索"
Feat_answer_fSt_retrieving -> Feat_answer_fSt_answering: "置信度达标"
Feat_answer_fSt_answering -> Feat_answer_fSt_answered: "答复已下发"
Feat_answer_fSt_retrieving -> Feat_answer_fSt_waitingHuman: "置信度不足"
Feat_answer_fSt_waitingHuman -> Feat_answer_fSt_answered: "人工已接管"
`;case`pano-ui`:return`direction: down

Feat_answer_fUs_askI_ask_deliver: {
  label: "I-006 下发答复"

  Ui_interaction: {
    label: "UI-001 企业微信会话交互"
  }
  Ui_information: {
    label: "UI-002 答复信息设计"
  }
}
Feat_knowledge_fUs_alertI_alert_report: {
  label: "I-233 上报告警"

  Ui_console: {
    label: "UI-201 运营控制台"
  }
  Ui_information: {
    label: "UI-202 知识运营信息设计"
  }
}
Feat_degrade_nfUs_kbEmpty: {
  label: "US-101 知识库为空时运营人员能看见"
  shape: document

  I_kb_renderUi_status: {
    label: "UI-101 控制台状态提示"
  }
}
Feat_degrade_nfUs_llmDown: {
  label: "US-103 LLM 不可用时转人工而非静默失败"
  shape: document

  I_ll_notifyUi_notice: {
    label: "UI-102 极端场景提示"
  }
}

Feat_answer_fUs_askI_ask_deliver.Ui_interaction -> Feat_answer_fUs_askI_ask_deliver.Ui_information: "持久化工单"
Feat_knowledge_fUs_alertI_alert_report.Ui_console -> Feat_knowledge_fUs_alertI_alert_report.Ui_information: "[...]"
Feat_knowledge_fUs_alertI_alert_report.Ui_information -> Feat_knowledge_fUs_alertI_alert_report.Ui_console: "触发扫描"
Feat_degrade_nfUs_kbEmpty.I_kb_renderUi_status -> Feat_degrade_nfUs_llmDown.I_ll_notifyUi_notice: "提交发布判定"
`;case`panoSrc001F`:return`direction: down

Feat_answer_fUs_askI_ask_deliverUi_interaction: {
  label: "UI-001 企业微信会话交互"

  Src_wechatCallback: {
    label: "SRC-001 微信客服回调入口"
  }
  Src_answerOrchestrator: {
    label: "SRC-002 应答编排器"
  }
  Src_answerLoop: {
    label: "SRC-003 知识应答循环"
  }
  Src_handoffService: {
    label: "SRC-006 转人工服务"
  }
  Src_replyPolicy: {
    label: "SRC-004 回复策略"
  }
  Src_ragflowKnowledge: {
    label: "SRC-005 RAGFlow 知识检索"
  }
}
Feat_answer_fUs_askI_ask_deliverUi_information: {
  label: "UI-002 答复信息设计"

  Src_store: {
    label: "SRC-007 本地存储"
  }
}

Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_wechatCallback -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator: "分发归一化消息"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop: "请求应答"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_replyPolicy: "校验置信度"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_ragflowKnowledge: "检索候选知识"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService: "低置信度时转人工"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService -> Feat_answer_fUs_askI_ask_deliverUi_information.Src_store: "持久化工单"
`;case`panoSrc001NF`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status: {
  label: "UI-101 控制台状态提示"

  Src_integrationRoutes: {
    label: "SRC-101 集成状态路由"
  }
  Src_knowledgeAlert: {
    label: "SRC-103 知识告警"
  }
  Src_ragflowProbe: {
    label: "SRC-104 RAGFlow 生命周期探针"
  }
  Src_operatorUi: {
    label: "SRC-105 运营人员控制台"
  }
}

Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_knowledgeAlert: "查询空库告警"
Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_ragflowProbe: "探测数据集状态"
`;case`panoSrc001NFnotice`:return`direction: down

Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice: {
  label: "UI-102 极端场景提示"

  Src_evaluationGate: {
    label: "SRC-102 评测闸门"
  }
  Src_storeAlert: {
    label: "SRC-106 告警状态存储"
  }
}

Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_evaluationGate -> Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_storeAlert: "读取告警快照"
`;case`panoSrc002F`:return`direction: down

Feat_knowledge_fUs_alertI_alert_reportUi_information: {
  label: "UI-202 知识运营信息设计"

  Src_knowledgeRoutes: {
    label: "SRC-202 知识库路由"
  }
  Src_knowledgeSync: {
    label: "SRC-208 知识同步"
  }
  Src_lifecycle: {
    label: "SRC-209 知识生命周期视图"
  }
  Src_documentRegistry: {
    label: "SRC-205 文档登记簿"
  }
}
Feat_knowledge_fUs_alertI_alert_reportUi_console: {
  label: "UI-201 运营控制台"

  Src_materialRoutes: {
    label: "SRC-201 素材路由"
  }
  Src_materialBatch: {
    label: "SRC-204 素材批处理"
  }
  Src_knowledgeScan: {
    label: "SRC-206 知识扫描"
  }
  Src_materialService: {
    label: "SRC-203 素材服务"
  }
  Src_governance: {
    label: "SRC-207 知识治理"
  }
}

Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialRoutes -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService: "接收素材"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialBatch -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService: "批量接入"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance: "提交候选"
Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeRoutes -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan: "触发扫描"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry: "登记文档"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync: "批准后推送"
Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle: "更新生命周期"
Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry: "晋升或下线"
`;case`pano-carrier`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"

  Cvt_normalize: {
    label: "CVT-001 提问归一化转换器"
  }
  In_chatMessage: {
    label: "IN-001 客户提问入参"
  }
  Biz_query: {
    label: "BIZ-001 检索查询对象"
  }
  Pod_ticket: {
    label: "POD-001 工单持久化实体"
  }
  Dao_store: {
    label: "DAO-001 本地存储访问"
    shape: cylinder
  }
  Out_answer: {
    label: "OUT-001 答复出参视图"
  }
}
Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"

  In_probeQuery: {
    label: "IN-101 状态探测入参"
  }
  Cvt_probe: {
    label: "CVT-101 探测结果转换器"
  }
  Biz_probeResult: {
    label: "BIZ-101 探测结果对象"
  }
  Pod_alert: {
    label: "POD-101 告警持久化实体"
  }
  Out_status: {
    label: "OUT-101 状态出参视图"
  }
  Dao_alert: {
    label: "DAO-101 告警存储访问"
    shape: cylinder
  }
}
Feat_knowledge_f: {
  label: "Feature-002-F 知识运营能力"

  In_material: {
    label: "IN-201 素材入参"
  }
  Cvt_material: {
    label: "CVT-201 素材转换器"
  }
  Biz_candidate: {
    label: "BIZ-201 候选知识对象"
  }
  Pod_document: {
    label: "POD-201 文档登记实体"
  }
  Dao_registry: {
    label: "DAO-201 文档登记访问"
    shape: cylinder
  }
  Out_knowledgeStatus: {
    label: "OUT-201 知识状态出参视图"
  }
}

Feat_answer_f.In_chatMessage -> Feat_answer_f.Biz_query: "转换为检索查询"
Feat_answer_f.Biz_query -> Feat_answer_f.Pod_ticket: "低置信度落工单"
Feat_answer_f.Pod_ticket -> Feat_answer_f.Dao_store: "写入工单"
Feat_answer_f.Dao_store -> Feat_answer_f.Out_answer: "查询答复内容"
Feat_answer_f.Cvt_normalize -> Feat_answer_f.In_chatMessage: "负责 报文→IN-001 映射"
Feat_answer_f.Cvt_normalize -> Feat_answer_f.Out_answer: "负责 POD-001→OUT-001 映射"
Feat_degrade_nf.In_probeQuery -> Feat_degrade_nf.Biz_probeResult: "转换为探测结果"
Feat_degrade_nf.Biz_probeResult -> Feat_degrade_nf.Pod_alert: "异常转告警实体"
Feat_degrade_nf.Biz_probeResult -> Feat_degrade_nf.Out_status: "渲染状态载荷"
Feat_knowledge_f.In_material -> Feat_knowledge_f.Biz_candidate: "转换为候选对象"
Feat_knowledge_f.Biz_candidate -> Feat_knowledge_f.Pod_document: "登记为文档实体"
Feat_knowledge_f.Pod_document -> Feat_knowledge_f.Dao_registry: "写入文档标识"
Feat_knowledge_f.Dao_registry -> Feat_knowledge_f.Out_knowledgeStatus: "查询状态"
Feat_knowledge_f.Cvt_material -> Feat_knowledge_f.Biz_candidate: "负责 素材→BIZ-201 映射"
Feat_knowledge_f.Cvt_material -> Feat_knowledge_f.Pod_document: "负责 BIZ-201→POD-201 映射"
Feat_degrade_nf.Pod_alert -> Feat_degrade_nf.Dao_alert: "写入告警"
Feat_degrade_nf.Cvt_probe -> Feat_degrade_nf.Biz_probeResult: "负责 BIZ-101→OUT-101 映射"
Feat_degrade_nf.Cvt_probe -> Feat_degrade_nf.Pod_alert: "负责 BIZ-101→POD-101 映射"
`;case`pano-api`:return`direction: down

Feat_answer_fLane_edge: {
  label: "服务端接入泳道"
}
Feat_knowledge_fLane_edge: {
  label: "服务端接入泳道"
}
Feat_degrade_nfLane_edge: {
  label: "服务端接入泳道"
}
`;case`srcdir001F`:return`direction: down

Feat_answer_fUs_askI_ask_deliverUi_interaction: {
  label: "UI-001 企业微信会话交互"

  Src_wechatCallback: {
    label: "SRC-001 微信客服回调入口"
  }
  Src_answerOrchestrator: {
    label: "SRC-002 应答编排器"
  }
  Src_answerLoop: {
    label: "SRC-003 知识应答循环"
  }
  Src_handoffService: {
    label: "SRC-006 转人工服务"
  }
  Src_replyPolicy: {
    label: "SRC-004 回复策略"
  }
  Src_ragflowKnowledge: {
    label: "SRC-005 RAGFlow 知识检索"
  }
}
Feat_answer_fUs_askI_ask_deliverUi_information: {
  label: "UI-002 答复信息设计"

  Src_store: {
    label: "SRC-007 本地存储"
  }
}

Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_wechatCallback -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator: "分发归一化消息"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop: "请求应答"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_replyPolicy: "校验置信度"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_ragflowKnowledge: "检索候选知识"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService: "低置信度时转人工"
Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService -> Feat_answer_fUs_askI_ask_deliverUi_information.Src_store: "持久化工单"
`;case`srcdir001NF`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status: {
  label: "UI-101 控制台状态提示"

  Src_integrationRoutes: {
    label: "SRC-101 集成状态路由"
  }
  Src_knowledgeAlert: {
    label: "SRC-103 知识告警"
  }
  Src_ragflowProbe: {
    label: "SRC-104 RAGFlow 生命周期探针"
  }
  Src_operatorUi: {
    label: "SRC-105 运营人员控制台"
  }
}

Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_knowledgeAlert: "查询空库告警"
Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_ragflowProbe: "探测数据集状态"
`;case`srcdir001NFnotice`:return`direction: down

Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice: {
  label: "UI-102 极端场景提示"

  Src_evaluationGate: {
    label: "SRC-102 评测闸门"
  }
  Src_storeAlert: {
    label: "SRC-106 告警状态存储"
  }
}

Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_evaluationGate -> Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_storeAlert: "读取告警快照"
`;case`carrier001F`:return`direction: down

Feat_answer_fCvt_normalize: {
  label: "CVT-001 提问归一化转换器"
}
Feat_answer_fIn_chatMessage: {
  label: "IN-001 客户提问入参"
}
Feat_answer_fBiz_query: {
  label: "BIZ-001 检索查询对象"
}
Feat_answer_fPod_ticket: {
  label: "POD-001 工单持久化实体"
}
Feat_answer_fDao_store: {
  label: "DAO-001 本地存储访问"
  shape: cylinder
}
Feat_answer_fOut_answer: {
  label: "OUT-001 答复出参视图"
}

Feat_answer_fIn_chatMessage -> Feat_answer_fBiz_query: "转换为检索查询"
Feat_answer_fBiz_query -> Feat_answer_fPod_ticket: "低置信度落工单"
Feat_answer_fPod_ticket -> Feat_answer_fDao_store: "写入工单"
Feat_answer_fDao_store -> Feat_answer_fOut_answer: "查询答复内容"
Feat_answer_fCvt_normalize -> Feat_answer_fIn_chatMessage: "负责 报文→IN-001 映射"
Feat_answer_fCvt_normalize -> Feat_answer_fOut_answer: "负责 POD-001→OUT-001 映射"
`;case`carrier001NF`:return`direction: down

Feat_degrade_nfIn_probeQuery: {
  label: "IN-101 状态探测入参"
}
Feat_degrade_nfCvt_probe: {
  label: "CVT-101 探测结果转换器"
}
Feat_degrade_nfBiz_probeResult: {
  label: "BIZ-101 探测结果对象"
}
Feat_degrade_nfPod_alert: {
  label: "POD-101 告警持久化实体"
}
Feat_degrade_nfOut_status: {
  label: "OUT-101 状态出参视图"
}
Feat_degrade_nfDao_alert: {
  label: "DAO-101 告警存储访问"
  shape: cylinder
}

Feat_degrade_nfIn_probeQuery -> Feat_degrade_nfBiz_probeResult: "转换为探测结果"
Feat_degrade_nfBiz_probeResult -> Feat_degrade_nfPod_alert: "异常转告警实体"
Feat_degrade_nfBiz_probeResult -> Feat_degrade_nfOut_status: "渲染状态载荷"
Feat_degrade_nfPod_alert -> Feat_degrade_nfDao_alert: "写入告警"
Feat_degrade_nfCvt_probe -> Feat_degrade_nfBiz_probeResult: "负责 BIZ-101→OUT-101 映射"
Feat_degrade_nfCvt_probe -> Feat_degrade_nfPod_alert: "负责 BIZ-101→POD-101 映射"
`;case`erm001F`:return`direction: down

Feat_answer_fPod_ticket: {
  label: "POD-001 工单持久化实体"
}
Feat_answer_fDao_store: {
  label: "DAO-001 本地存储访问"
  shape: cylinder
}

Feat_answer_fPod_ticket -> Feat_answer_fDao_store: "写入工单"
`;case`erm001NF`:return`direction: down

Feat_degrade_nfPod_alert: {
  label: "POD-101 告警持久化实体"
}
Feat_degrade_nfDao_alert: {
  label: "DAO-101 告警存储访问"
  shape: cylinder
}

Feat_degrade_nfPod_alert -> Feat_degrade_nfDao_alert: "写入告警"
`;case`stateMain`:return`direction: down

Feat_answer_fSt_received: {
  label: "已接收"
}
Feat_answer_fSt_retrieving: {
  label: "检索中"
}
Feat_answer_fSt_answering: {
  label: "应答中"
}
Feat_answer_fSt_answered: {
  label: "已答复"
}

Feat_answer_fSt_received -> Feat_answer_fSt_retrieving: "发起检索"
Feat_answer_fSt_retrieving -> Feat_answer_fSt_answering: "置信度达标"
Feat_answer_fSt_answering -> Feat_answer_fSt_answered: "答复已下发"
`;case`stateBranchHuman`:return`direction: down

Feat_answer_fSt_retrieving: {
  label: "检索中"
}
Feat_answer_fSt_waitingHuman: {
  label: "待人工"
}

Feat_answer_fSt_retrieving -> Feat_answer_fSt_waitingHuman: "置信度不足"
`;case`index`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"
}
Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"
}
Feat_knowledge_f: {
  label: "Feature-002-F 知识运营能力"
}
`;case`chain001F-us`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"

  Us_ask: {
    label: "US-001 客户提问获得专业答复"
    shape: document
  }
  Us_lowConfidence: {
    label: "US-002 答不准时转人工而非硬答"
    shape: document
  }
}
`;case`chain001NF-us`:return`direction: down

Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"

  Us_kbEmpty: {
    label: "US-101 知识库为空时运营人员能看见"
    shape: document
  }
  Us_ragTimeout: {
    label: "US-102 RAGFlow 超时时客户不被静默等待"
    shape: document
  }
  Us_llmDown: {
    label: "US-103 LLM 不可用时转人工而非静默失败"
    shape: document
  }
}

Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Us_llmDown: "提交发布判定"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Us_llmDown: "统一由提示环节下发"
`;case`chain001F-f`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"

  Us_ask: {
    label: "US-001 客户提问获得专业答复"
    shape: document
  }
  Us_lowConfidence: {
    label: "US-002 答不准时转人工而非硬答"
    shape: document
  }
  F_answer: {
    label: "F-001 应答编排能力"
  }
  F_retrieval: {
    label: "F-002 知识检索能力"
  }
}

Feat_answer_f.Us_ask -> Feat_answer_f.F_answer: "要求"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.F_retrieval: "要求"
`;case`chain001NF-nf`:return`direction: down

Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"

  Us_kbEmpty: {
    label: "US-101 知识库为空时运营人员能看见"
    shape: document
  }
  Us_ragTimeout: {
    label: "US-102 RAGFlow 超时时客户不被静默等待"
    shape: document
  }
  Nf_kbEmpty: {
    label: "NF-101 知识库为零条时状态可见"
  }
  Us_llmDown: {
    label: "US-103 LLM 不可用时转人工而非静默失败"
    shape: document
  }
  Nf_ragTimeout: {
    label: "NF-102 RAGFlow 超 8 秒时客户可感知"
  }
  Nf_llmDown: {
    label: "NF-103 LLM 不可用时自动转人工"
  }
}

Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Us_llmDown: "提交发布判定"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Us_llmDown: "统一由提示环节下发"
Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Nf_kbEmpty: "要求"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Nf_ragTimeout: "要求"
Feat_degrade_nf.Us_llmDown -> Feat_degrade_nf.Nf_llmDown: "要求"
`;case`chain001F-i-goal`:return`direction: down

Feat_answer_fI_goal: {
  label: "I-101 业务目标"
}
`;case`chain001F-i-step`:return`direction: down

Feat_answer_fUs_ask: {
  label: "US-001 客户提问获得专业答复"
  shape: document

  I_ask_normalize: {
    label: "I-001 归一化提问"
  }
  I_ask_retrieve: {
    label: "I-002 检索候选知识"
  }
  I_ask_rank: {
    label: "I-003 候选排序与择优"
  }
  I_ask_verify: {
    label: "I-004 置信度校验"
  }
  I_ask_compose: {
    label: "I-005 生成答复"
  }
  I_ask_deliver: {
    label: "I-006 下发答复"
  }
}
Feat_answer_fUs_lowConfidence: {
  label: "US-002 答不准时转人工而非硬答"
  shape: document

  I_lowEscalate: {
    label: "I-011 判定转人工"
  }
  I_lowTicket: {
    label: "I-012 创建人工工单"
  }
  I_lowNotify: {
    label: "I-013 告知客户等待"
  }
}
`;case`chain001NF-i-goal`:return`direction: down

Feat_degrade_nfI_goal: {
  label: "I-141 业务目标"
}
`;case`chain001NF-i-step`:return`direction: down

Feat_degrade_nfUs_kbEmpty: {
  label: "US-101 知识库为空时运营人员能看见"
  shape: document

  I_kb_count: {
    label: "I-111 读取条目数"
  }
  I_kb_judge: {
    label: "I-112 判定零条场景"
  }
  I_kb_render: {
    label: "I-113 渲染空库提示"
  }
}
Feat_degrade_nfUs_ragTimeout: {
  label: "US-102 RAGFlow 超时时客户不被静默等待"
  shape: document

  I_to_timer: {
    label: "I-121 启动超时计时"
  }
  I_to_check: {
    label: "I-122 判定超时"
  }
  I_to_notify: {
    label: "I-123 下发处理中提示"
  }
}
Feat_degrade_nfUs_llmDown: {
  label: "US-103 LLM 不可用时转人工而非静默失败"
  shape: document

  I_ll_detect: {
    label: "I-131 判定调用结果"
  }
  I_ll_ticket: {
    label: "I-132 生成人工工单"
  }
  I_ll_notify: {
    label: "I-133 告知等待人工"
  }
}

Feat_degrade_nfUs_kbEmpty.I_kb_render -> Feat_degrade_nfUs_llmDown.I_ll_notify: "提交发布判定"
Feat_degrade_nfUs_ragTimeout -> Feat_degrade_nfUs_llmDown.I_ll_notify: "统一由提示环节下发"
`;case`chain001F-ui`:return`direction: down

Feat_answer_fUs_askI_ask_deliver: {
  label: "I-006 下发答复"

  Ui_interaction: {
    label: "UI-001 企业微信会话交互"
  }
  Ui_information: {
    label: "UI-002 答复信息设计"
  }
}

Feat_answer_fUs_askI_ask_deliver.Ui_interaction -> Feat_answer_fUs_askI_ask_deliver.Ui_information: "持久化工单"
`;case`chain001NF-ui`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_kb_render: {
  label: "I-113 渲染空库提示"

  Ui_status: {
    label: "UI-101 控制台状态提示"
  }
}
`;case`chain001NF-uiNotice`:return`direction: down

Feat_degrade_nfUs_llmDownI_ll_notify: {
  label: "I-133 告知等待人工"

  Ui_notice: {
    label: "UI-102 极端场景提示"
  }
}
`;case`chain002F-us`:return`direction: down

Feat_knowledge_f: {
  label: "Feature-002-F 知识运营能力"

  Us_scan: {
    label: "US-201 素材入库后自动进入候选知识"
    shape: document
  }
  Us_govern: {
    label: "US-202 候选知识经我决策后才对外可见"
    shape: document
  }
  Us_alert: {
    label: "US-203 知识陈旧时我能收到提示"
    shape: document
  }
}

Feat_knowledge_f.Us_scan -> Feat_knowledge_f.Us_govern: "提交候选进入治理"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_alert: "晋升后进入新鲜度巡检"
`;case`chain002F-f`:return`direction: down

Feat_knowledge_f: {
  label: "Feature-002-F 知识运营能力"

  Us_scan: {
    label: "US-201 素材入库后自动进入候选知识"
    shape: document
  }
  Us_govern: {
    label: "US-202 候选知识经我决策后才对外可见"
    shape: document
  }
  F_ingest: {
    label: "F-201 素材接入能力"
  }
  Us_alert: {
    label: "US-203 知识陈旧时我能收到提示"
    shape: document
  }
  F_govern: {
    label: "F-202 知识治理能力"
  }
}

Feat_knowledge_f.Us_scan -> Feat_knowledge_f.Us_govern: "提交候选进入治理"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_alert: "晋升后进入新鲜度巡检"
Feat_knowledge_f.Us_scan -> Feat_knowledge_f.F_ingest: "要求"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.F_govern: "要求"
Feat_knowledge_f.Us_alert -> Feat_knowledge_f.F_govern: "要求"
`;case`chain002F-i-goal`:return`direction: down

Feat_knowledge_fI_goal: {
  label: "I-201 业务目标"
}
`;case`chain002F-i-step`:return`direction: down

Feat_knowledge_fUs_scan: {
  label: "US-201 素材入库后自动进入候选知识"
  shape: document

  I_scan_register: {
    label: "I-211 登记素材"
  }
  I_scan_extract: {
    label: "I-212 抽取候选知识"
  }
  I_scan_submit: {
    label: "I-213 提交候选"
  }
}
Feat_knowledge_fUs_govern: {
  label: "US-202 候选知识经我决策后才对外可见"
  shape: document

  I_gov_review: {
    label: "I-221 人工审阅候选"
  }
  I_gov_decide: {
    label: "I-222 记录决策"
  }
  I_gov_promote: {
    label: "I-223 晋升知识"
  }
}
Feat_knowledge_fUs_alert: {
  label: "US-203 知识陈旧时我能收到提示"
  shape: document

  I_alert_probe: {
    label: "I-231 巡检数据集状态"
  }
  I_alert_judge: {
    label: "I-232 判定新鲜度异常"
  }
  I_alert_report: {
    label: "I-233 上报告警"
  }
}

Feat_knowledge_fUs_scan.I_scan_submit -> Feat_knowledge_fUs_govern.I_gov_review: "提交候选进入治理"
Feat_knowledge_fUs_govern.I_gov_promote -> Feat_knowledge_fUs_alert.I_alert_judge: "晋升后进入新鲜度巡检"
`;case`chain002F-ui`:return`direction: down

Feat_knowledge_fUs_alertI_alert_report: {
  label: "I-233 上报告警"

  Ui_console: {
    label: "UI-201 运营控制台"
  }
  Ui_information: {
    label: "UI-202 知识运营信息设计"
  }
}

Feat_knowledge_fUs_alertI_alert_report.Ui_console -> Feat_knowledge_fUs_alertI_alert_report.Ui_information: "[...]"
Feat_knowledge_fUs_alertI_alert_report.Ui_information -> Feat_knowledge_fUs_alertI_alert_report.Ui_console: "触发扫描"
`;case`srcdir002F`:return`direction: down

Feat_knowledge_fUs_alertI_alert_reportUi_information: {
  label: "UI-202 知识运营信息设计"

  Src_knowledgeRoutes: {
    label: "SRC-202 知识库路由"
  }
  Src_knowledgeSync: {
    label: "SRC-208 知识同步"
  }
  Src_lifecycle: {
    label: "SRC-209 知识生命周期视图"
  }
  Src_documentRegistry: {
    label: "SRC-205 文档登记簿"
  }
}
Feat_knowledge_fUs_alertI_alert_reportUi_console: {
  label: "UI-201 运营控制台"

  Src_materialRoutes: {
    label: "SRC-201 素材路由"
  }
  Src_materialBatch: {
    label: "SRC-204 素材批处理"
  }
  Src_knowledgeScan: {
    label: "SRC-206 知识扫描"
  }
  Src_materialService: {
    label: "SRC-203 素材服务"
  }
  Src_governance: {
    label: "SRC-207 知识治理"
  }
}

Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialRoutes -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService: "接收素材"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialBatch -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService: "批量接入"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance: "提交候选"
Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeRoutes -> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan: "触发扫描"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry: "登记文档"
Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync: "批准后推送"
Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle: "更新生命周期"
Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle -> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry: "晋升或下线"
`;case`carrier002F`:return`direction: down

Feat_knowledge_fIn_material: {
  label: "IN-201 素材入参"
}
Feat_knowledge_fCvt_material: {
  label: "CVT-201 素材转换器"
}
Feat_knowledge_fBiz_candidate: {
  label: "BIZ-201 候选知识对象"
}
Feat_knowledge_fPod_document: {
  label: "POD-201 文档登记实体"
}
Feat_knowledge_fDao_registry: {
  label: "DAO-201 文档登记访问"
  shape: cylinder
}
Feat_knowledge_fOut_knowledgeStatus: {
  label: "OUT-201 知识状态出参视图"
}

Feat_knowledge_fIn_material -> Feat_knowledge_fBiz_candidate: "转换为候选对象"
Feat_knowledge_fBiz_candidate -> Feat_knowledge_fPod_document: "登记为文档实体"
Feat_knowledge_fPod_document -> Feat_knowledge_fDao_registry: "写入文档标识"
Feat_knowledge_fDao_registry -> Feat_knowledge_fOut_knowledgeStatus: "查询状态"
Feat_knowledge_fCvt_material -> Feat_knowledge_fBiz_candidate: "负责 素材→BIZ-201 映射"
Feat_knowledge_fCvt_material -> Feat_knowledge_fPod_document: "负责 BIZ-201→POD-201 映射"
`;case`erm002F`:return`direction: down

Feat_knowledge_fPod_document: {
  label: "POD-201 文档登记实体"
}
Feat_knowledge_fDao_registry: {
  label: "DAO-201 文档登记访问"
  shape: cylinder
}

Feat_knowledge_fPod_document -> Feat_knowledge_fDao_registry: "写入文档标识"
`;case`api002F`:return`direction: down

Feat_knowledge_fLane_edge: {
  label: "服务端接入泳道"
}
`;case`seq001F-answer`:return`direction: right

Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}
Feat_answer_fLane_edgeApi_chatCallback: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}
Feat_answer_fLane_coreStep_answerLane: {
  label: "I-201 应答编排（泳道引用）"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy: {
  label: "SRC-004 回复策略"
}
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge: {
  label: "SRC-005 RAGFlow 知识检索"
}
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService: {
  label: "SRC-006 转人工服务"
}

Feat_answer_fLane_clientActor_customer -> Feat_answer_fLane_edgeApi_chatCallback: "企业微信提问"
Feat_answer_fLane_edgeApi_chatCallback -> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator: "分发归一化消息"
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator -> Feat_answer_fLane_coreStep_answerLane: "请求应答"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_extExt_ragflow: "检索候选知识"
Feat_answer_fLane_extExt_ragflow -> Feat_answer_fLane_coreStep_answerLane: "返回候选知识"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy: "校验置信度"
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy -> Feat_answer_fLane_coreStep_answerLane: "达标放行"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_edgeApi_chatCallback: "返回答复"
`;case`seq001F-branch-low-confidence-src`:return`direction: right

Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy: {
  label: "SRC-004 回复策略"
}
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService: {
  label: "SRC-006 转人工服务"
}
Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store: {
  label: "SRC-007 本地存储"
}

Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy -> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator: "置信度不足"
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator -> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService: "转人工"
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService -> Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store: "持久化工单"
`;case`dfd001F-answer`:return`direction: right

Feat_answer_fUs_askI_ask_deliverUi_interaction: {
  label: "UI-001 企业微信会话交互"
}
Feat_answer_fIn_chatMessage: {
  label: "IN-001 客户提问入参"
}
Feat_answer_fBiz_query: {
  label: "BIZ-001 检索查询对象"
}
Feat_answer_fPod_ticket: {
  label: "POD-001 工单持久化实体"
}
Feat_answer_fDao_store: {
  label: "DAO-001 本地存储访问"
  shape: cylinder
}
Feat_answer_fOut_answer: {
  label: "OUT-001 答复出参视图"
}
Feat_answer_fUs_askI_ask_deliverUi_information: {
  label: "UI-002 答复信息设计"
}

Feat_answer_fUs_askI_ask_deliverUi_interaction -> Feat_answer_fIn_chatMessage: "提交提问"
Feat_answer_fIn_chatMessage -> Feat_answer_fBiz_query: "转换为检索查询"
Feat_answer_fBiz_query -> Feat_answer_fPod_ticket: "低置信度落工单"
Feat_answer_fPod_ticket -> Feat_answer_fDao_store: "写入工单"
Feat_answer_fDao_store -> Feat_answer_fOut_answer: "查询答复内容"
Feat_answer_fOut_answer -> Feat_answer_fUs_askI_ask_deliverUi_information: "渲染答复"
`;case`seq001NF-degrade`:return`direction: right

Feat_degrade_nfLane_operatorActor_ops: {
  label: "运营人员"
  shape: c4-person
}
Feat_degrade_nfLane_edgeApi_status: {
  label: "API-101 GET /integration/status 集成状态"
}
Feat_degrade_nfLane_coreStep_probeLane: {
  label: "I-151 场景判定（泳道引用）"
}
Feat_degrade_nfLane_extExt_ragflow: {
  label: "RAGFlow"
}
Feat_degrade_nfUs_llmDownI_ll_notify: {
  label: "I-133 告知等待人工"
}

Feat_degrade_nfLane_operatorActor_ops -> Feat_degrade_nfLane_edgeApi_status: "查询集成状态"
Feat_degrade_nfLane_edgeApi_status -> Feat_degrade_nfLane_coreStep_probeLane: "发起探测"
Feat_degrade_nfLane_coreStep_probeLane -> Feat_degrade_nfLane_extExt_ragflow: "探测数据集可用性"
Feat_degrade_nfLane_extExt_ragflow -> Feat_degrade_nfLane_coreStep_probeLane: "返回探测结论"
Feat_degrade_nfLane_coreStep_probeLane -> Feat_degrade_nfUs_llmDownI_ll_notify: "提交发布判定并下发提示"
Feat_degrade_nfUs_llmDownI_ll_notify -> Feat_degrade_nfLane_operatorActor_ops: "告知客户"
`;case`dfd001NF-probe`:return`direction: right

Feat_degrade_nfLane_operatorActor_ops: {
  label: "运营人员"
  shape: c4-person
}
Feat_degrade_nfIn_probeQuery: {
  label: "IN-101 状态探测入参"
}
Feat_degrade_nfBiz_probeResult: {
  label: "BIZ-101 探测结果对象"
}
Feat_degrade_nfOut_status: {
  label: "OUT-101 状态出参视图"
}
Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status: {
  label: "UI-101 控制台状态提示"
}
Feat_degrade_nfPod_alert: {
  label: "POD-101 告警持久化实体"
}
Feat_degrade_nfDao_alert: {
  label: "DAO-101 告警存储访问"
  shape: cylinder
}

Feat_degrade_nfLane_operatorActor_ops -> Feat_degrade_nfIn_probeQuery: "构造探测入参"
Feat_degrade_nfIn_probeQuery -> Feat_degrade_nfBiz_probeResult: "转换为探测结果"
Feat_degrade_nfBiz_probeResult -> Feat_degrade_nfOut_status: "渲染状态载荷"
Feat_degrade_nfOut_status -> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status: "显示条目数与异常提示"
Feat_degrade_nfBiz_probeResult -> Feat_degrade_nfPod_alert: "异常转告警实体"
Feat_degrade_nfPod_alert -> Feat_degrade_nfDao_alert: "写入告警"
`;case`seq001F-i-step-lanes`:return`direction: right

Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}
Feat_answer_fLane_edgeApi_chatCallback: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}
Feat_answer_fUs_askI_ask_normalize: {
  label: "I-001 归一化提问"
}
Feat_answer_fUs_askI_ask_retrieve: {
  label: "I-002 检索候选知识"
}
Feat_answer_fUs_askI_ask_rank: {
  label: "I-003 候选排序与择优"
}
Feat_answer_fUs_askI_ask_verify: {
  label: "I-004 置信度校验"
}
Feat_answer_fUs_askI_ask_compose: {
  label: "I-005 生成答复"
}
Feat_answer_fUs_askI_ask_deliver: {
  label: "I-006 下发答复"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_answer_fLane_clientActor_customer -> Feat_answer_fLane_edgeApi_chatCallback: "①提出问题"
Feat_answer_fLane_edgeApi_chatCallback -> Feat_answer_fUs_askI_ask_normalize: "②归一化提问"
Feat_answer_fUs_askI_ask_normalize -> Feat_answer_fUs_askI_ask_retrieve: "③发起检索"
Feat_answer_fUs_askI_ask_retrieve -> Feat_answer_fLane_extExt_ragflow: "④请求RAGFlow"
Feat_answer_fLane_extExt_ragflow -> Feat_answer_fUs_askI_ask_retrieve: "⑤返回候选知识"
Feat_answer_fUs_askI_ask_retrieve -> Feat_answer_fUs_askI_ask_rank: "⑥候选排序"
Feat_answer_fUs_askI_ask_rank -> Feat_answer_fUs_askI_ask_verify: "⑦置信度校验"
Feat_answer_fUs_askI_ask_verify -> Feat_answer_fUs_askI_ask_compose: "⑧生成答复"
Feat_answer_fUs_askI_ask_compose -> Feat_answer_fUs_askI_ask_deliver: "⑨下发答复"
Feat_answer_fUs_askI_ask_deliver -> Feat_answer_fLane_edgeApi_chatCallback: "⑩回复会话"
Feat_answer_fLane_edgeApi_chatCallback -> Feat_answer_fLane_clientActor_customer: "⑪答复送达"
`;case`seq001F-branch-low-confidence`:return`direction: right

Feat_answer_fUs_askI_ask_verify: {
  label: "I-004 置信度校验"
}
Feat_answer_fUs_lowConfidenceI_lowEscalate: {
  label: "I-011 判定转人工"
}
Feat_answer_fUs_lowConfidenceI_lowTicket: {
  label: "I-012 创建人工工单"
}
Feat_answer_fUs_lowConfidenceI_lowNotify: {
  label: "I-013 告知客户等待"
}
Feat_answer_fLane_edgeApi_chatCallback: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}

Feat_answer_fUs_askI_ask_verify -> Feat_answer_fUs_lowConfidenceI_lowEscalate: "置信度不足"
Feat_answer_fUs_lowConfidenceI_lowEscalate -> Feat_answer_fUs_lowConfidenceI_lowTicket: "创建工单"
Feat_answer_fUs_lowConfidenceI_lowTicket -> Feat_answer_fUs_lowConfidenceI_lowNotify: "告知等待"
Feat_answer_fUs_lowConfidenceI_lowNotify -> Feat_answer_fLane_edgeApi_chatCallback: "回复会话"
`;case`seq001NF-i-step-lanes`:return`direction: right

Feat_degrade_nfLane_operatorActor_ops: {
  label: "运营人员"
  shape: c4-person
}
Feat_degrade_nfLane_edgeApi_status: {
  label: "API-101 GET /integration/status 集成状态"
}
Feat_degrade_nfLane_coreStep_probeLane: {
  label: "I-151 场景判定（泳道引用）"
}
Feat_degrade_nfUs_kbEmptyI_kb_judge: {
  label: "I-112 判定零条场景"
}
Feat_degrade_nfUs_ragTimeoutI_to_check: {
  label: "I-122 判定超时"
}
Feat_degrade_nfUs_llmDownI_ll_detect: {
  label: "I-131 判定调用结果"
}

Feat_degrade_nfLane_operatorActor_ops -> Feat_degrade_nfLane_edgeApi_status: "①查询状态"
Feat_degrade_nfLane_edgeApi_status -> Feat_degrade_nfLane_coreStep_probeLane: "②发起探测"
Feat_degrade_nfLane_coreStep_probeLane -> Feat_degrade_nfUs_kbEmptyI_kb_judge: "③判定条目数"
Feat_degrade_nfUs_kbEmptyI_kb_judge -> Feat_degrade_nfUs_ragTimeoutI_to_check: "④判定响应耗时"
Feat_degrade_nfUs_ragTimeoutI_to_check -> Feat_degrade_nfUs_llmDownI_ll_detect: "⑤判定模型可用性"
Feat_degrade_nfUs_llmDownI_ll_detect -> Feat_degrade_nfLane_operatorActor_ops: "⑥下发提示或转人工"
`;case`seq001F-api-chat`:return`direction: right

Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}
Feat_answer_fLane_edgeApi_chatCallback: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}
Feat_answer_fLane_coreStep_answerLane: {
  label: "I-201 应答编排（泳道引用）"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_answer_fLane_clientActor_customer -> Feat_answer_fLane_edgeApi_chatCallback: "POST /wechat/callback"
Feat_answer_fLane_edgeApi_chatCallback -> Feat_answer_fLane_coreStep_answerLane: "触发应答"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_extExt_ragflow: "检索知识"
Feat_answer_fLane_extExt_ragflow -> Feat_answer_fLane_coreStep_answerLane: "返回候选知识"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_edgeApi_chatCallback: "返回答复"
`;case`seq001NF-api-status`:return`direction: right

Feat_degrade_nfLane_operatorActor_ops: {
  label: "运营人员"
  shape: c4-person
}
Feat_degrade_nfLane_edgeApi_status: {
  label: "API-101 GET /integration/status 集成状态"
}
Feat_degrade_nfLane_coreStep_probeLane: {
  label: "I-151 场景判定（泳道引用）"
}
Feat_degrade_nfLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_degrade_nfLane_operatorActor_ops -> Feat_degrade_nfLane_edgeApi_status: "GET /integration/status"
Feat_degrade_nfLane_edgeApi_status -> Feat_degrade_nfLane_coreStep_probeLane: "发起探测"
Feat_degrade_nfLane_coreStep_probeLane -> Feat_degrade_nfLane_extExt_ragflow: "探测数据集"
Feat_degrade_nfLane_extExt_ragflow -> Feat_degrade_nfLane_coreStep_probeLane: "返回结论"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
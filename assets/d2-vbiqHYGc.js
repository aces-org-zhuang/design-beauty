var e=e=>{switch(e){case`feat001FChain`:return`direction: down

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
  Cvt_normalize: {
    label: "CVT-001 提问归一化转换器"
  }
  Lane_client: {
    label: "客户端泳道"
  }
  F_answer: {
    label: "F-001 应答编排能力"
  }
  I_step: {
    label: "I-003 业务步骤"
  }
  F_retrieval: {
    label: "F-002 知识检索能力"
  }
  I_goal: {
    label: "I-001 业务目标"
  }
  Lane_edge: {
    label: "服务端接入泳道"
  }
  I_state: {
    label: "I-002 业务状态"
  }
  Ui_interaction: {
    label: "UI-001 企业微信会话交互"
  }
  Lane_core: {
    label: "领域层泳道"
  }
  Src_wechatCallback: {
    label: "SRC-001 微信客服回调入口"
  }
  In_chatMessage: {
    label: "IN-001 客户提问入参"
  }
  Lane_ext: {
    label: "外部依赖泳道"
  }
  Src_answerOrchestrator: {
    label: "SRC-002 应答编排器"
  }
  Biz_query: {
    label: "BIZ-001 检索查询对象"
  }
  Src_answerLoop: {
    label: "SRC-003 知识应答循环"
  }
  Src_handoffService: {
    label: "SRC-006 转人工服务"
  }
  Pod_ticket: {
    label: "POD-001 工单持久化实体"
  }
  Src_replyPolicy: {
    label: "SRC-004 回复策略"
  }
  Src_ragflowKnowledge: {
    label: "SRC-005 RAGFlow 知识检索"
  }
  Dao_store: {
    label: "DAO-001 本地存储访问"
    shape: cylinder
  }
  Out_answer: {
    label: "OUT-001 答复出参视图"
  }
  Ui_information: {
    label: "UI-002 答复信息设计"
  }
  Src_store: {
    label: "SRC-007 本地存储"
  }
}

Feat_answer_f.Us_ask -> Feat_answer_f.F_answer: "要求"
Feat_answer_f.Us_ask -> Feat_answer_f.I_step: "落为业务步骤"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.F_retrieval: "要求"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.I_goal: "落为业务目标"
Feat_answer_f.I_state -> Feat_answer_f.Ui_information: "展示应答状态"
Feat_answer_f.I_step -> Feat_answer_f.I_state: "推进问答状态"
Feat_answer_f.I_step -> Feat_answer_f.Ui_interaction: "反馈交互"
Feat_answer_f.Ui_interaction -> Feat_answer_f.Src_wechatCallback: "由回调触发"
Feat_answer_f.Ui_interaction -> Feat_answer_f.In_chatMessage: "提交提问"
Feat_answer_f.Ui_information -> Feat_answer_f.Src_store: "读取工单状态"
Feat_answer_f.Out_answer -> Feat_answer_f.Ui_information: "渲染答复"
Feat_answer_f.Src_wechatCallback -> Feat_answer_f.Src_answerOrchestrator: "分发归一化消息"
Feat_answer_f.Src_answerOrchestrator -> Feat_answer_f.Src_answerLoop: "请求应答"
Feat_answer_f.Src_answerOrchestrator -> Feat_answer_f.Src_handoffService: "低置信度时转人工"
Feat_answer_f.Src_answerLoop -> Feat_answer_f.Src_replyPolicy: "校验置信度"
Feat_answer_f.Src_answerLoop -> Feat_answer_f.Src_ragflowKnowledge: "检索候选知识"
Feat_answer_f.Biz_query -> Feat_answer_f.Src_ragflowKnowledge: "发起检索"
Feat_answer_f.Src_handoffService -> Feat_answer_f.Src_store: "持久化工单"
Feat_answer_f.In_chatMessage -> Feat_answer_f.Biz_query: "转换为检索查询"
Feat_answer_f.Cvt_normalize -> Feat_answer_f.In_chatMessage: "负责 报文→IN-001 映射"
Feat_answer_f.Biz_query -> Feat_answer_f.Pod_ticket: "低置信度落工单"
Feat_answer_f.Pod_ticket -> Feat_answer_f.Dao_store: "写入工单"
Feat_answer_f.Dao_store -> Feat_answer_f.Out_answer: "查询答复内容"
Feat_answer_f.Cvt_normalize -> Feat_answer_f.Out_answer: "负责 POD-001→OUT-001 映射"
Feat_answer_f.Lane_client -> Feat_answer_f.Lane_edge: "企业微信提问"
Feat_answer_f.Lane_edge -> Feat_answer_f.Lane_core: "触发应答"
Feat_answer_f.Lane_core -> Feat_answer_f.Lane_edge: "返回答复或工单号"
Feat_answer_f.Lane_core -> Feat_answer_f.Lane_ext: "检索知识"
Feat_answer_f.Lane_ext -> Feat_answer_f.Lane_core: "返回候选知识"
`;case`feat001NFFChain`:return`direction: down

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
  Src_integrationRoutes: {
    label: "SRC-101 集成状态路由"
  }
  Cvt_probe: {
    label: "CVT-101 探测结果转换器"
  }
  Lane_operator: {
    label: "运营人员泳道"
  }
  Nf_kbEmpty: {
    label: "NF-101 知识库为零条时状态可见"
  }
  I_goal: {
    label: "I-101 业务目标"
  }
  Nf_ragTimeout: {
    label: "NF-102 RAGFlow 超 8 秒时客户可感知"
  }
  Nf_llmDown: {
    label: "NF-103 LLM 不可用时自动转人工"
  }
  I_step: {
    label: "I-102 场景判定逻辑"
  }
  Src_ragflowProbe: {
    label: "SRC-104 RAGFlow 生命周期探针"
  }
  Lane_edge: {
    label: "服务端接入泳道"
  }
  Ui_notice: {
    label: "UI-102 极端场景提示"
  }
  In_probeQuery: {
    label: "IN-101 状态探测入参"
  }
  Src_knowledgeAlert: {
    label: "SRC-103 知识告警"
  }
  Biz_probeResult: {
    label: "BIZ-101 探测结果对象"
  }
  Src_evaluationGate: {
    label: "SRC-102 评测闸门"
  }
  Pod_alert: {
    label: "POD-101 告警持久化实体"
  }
  Out_status: {
    label: "OUT-101 状态出参视图"
  }
  Lane_ext: {
    label: "外部依赖泳道"
  }
  Src_storeAlert: {
    label: "SRC-106 告警状态存储"
  }
  Dao_alert: {
    label: "DAO-101 告警存储访问"
    shape: cylinder
  }
  Ui_status: {
    label: "UI-101 控制台状态提示"
  }
  Src_operatorUi: {
    label: "SRC-105 运营人员控制台"
  }
  Lane_core: {
    label: "判定层泳道"
  }
}

Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Nf_kbEmpty: "要求"
Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.I_goal: "落为业务目标"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Nf_ragTimeout: "要求"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.I_step: "落为场景判定逻辑"
Feat_degrade_nf.Us_llmDown -> Feat_degrade_nf.Nf_llmDown: "要求"
Feat_degrade_nf.Us_llmDown -> Feat_degrade_nf.I_step: "落为场景判定逻辑"
Feat_degrade_nf.I_step -> Feat_degrade_nf.Ui_status: "反馈知识状态"
Feat_degrade_nf.I_step -> Feat_degrade_nf.Ui_notice: "反馈场景提示"
Feat_degrade_nf.Ui_status -> Feat_degrade_nf.Src_operatorUi: "渲染于控制台"
Feat_degrade_nf.Out_status -> Feat_degrade_nf.Ui_status: "显示条目数与异常提示"
Feat_degrade_nf.Ui_notice -> Feat_degrade_nf.Src_evaluationGate: "由门禁决定是否阻断"
Feat_degrade_nf.Ui_notice -> Feat_degrade_nf.Src_knowledgeAlert: "上报告警"
Feat_degrade_nf.Src_integrationRoutes -> Feat_degrade_nf.Src_knowledgeAlert: "查询空库告警"
Feat_degrade_nf.Src_integrationRoutes -> Feat_degrade_nf.Src_ragflowProbe: "探测数据集状态"
Feat_degrade_nf.Src_evaluationGate -> Feat_degrade_nf.Src_storeAlert: "读取告警快照"
Feat_degrade_nf.Src_knowledgeAlert -> Feat_degrade_nf.Src_evaluationGate: "提交发布判定"
Feat_degrade_nf.In_probeQuery -> Feat_degrade_nf.Biz_probeResult: "转换为探测结果"
Feat_degrade_nf.Lane_edge -> Feat_degrade_nf.In_probeQuery: "构造探测入参"
Feat_degrade_nf.Biz_probeResult -> Feat_degrade_nf.Pod_alert: "异常转告警实体"
Feat_degrade_nf.Biz_probeResult -> Feat_degrade_nf.Out_status: "渲染状态载荷"
Feat_degrade_nf.Biz_probeResult -> Feat_degrade_nf.Lane_ext: "探测数据集可用性"
Feat_degrade_nf.Cvt_probe -> Feat_degrade_nf.Biz_probeResult: "负责 BIZ-101→OUT-101 映射"
Feat_degrade_nf.Lane_ext -> Feat_degrade_nf.Biz_probeResult: "返回探测结论"
Feat_degrade_nf.Pod_alert -> Feat_degrade_nf.Dao_alert: "写入告警"
Feat_degrade_nf.Cvt_probe -> Feat_degrade_nf.Pod_alert: "负责 BIZ-101→POD-101 映射"
Feat_degrade_nf.Lane_operator -> Feat_degrade_nf.Lane_edge: "查询状态"
`;case`feat001FBusiness`:return`direction: down

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
  I_step: {
    label: "I-003 业务步骤"
  }
  F_retrieval: {
    label: "F-002 知识检索能力"
  }
  I_goal: {
    label: "I-001 业务目标"
  }
  I_state: {
    label: "I-002 业务状态"
  }
  Ui_interaction: {
    label: "UI-001 企业微信会话交互"
  }
  Ui_information: {
    label: "UI-002 答复信息设计"
  }
}

Feat_answer_f.Us_ask -> Feat_answer_f.F_answer: "要求"
Feat_answer_f.Us_ask -> Feat_answer_f.I_step: "落为业务步骤"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.F_retrieval: "要求"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.I_goal: "落为业务目标"
Feat_answer_f.I_state -> Feat_answer_f.Ui_information: "展示应答状态"
Feat_answer_f.I_step -> Feat_answer_f.I_state: "推进问答状态"
Feat_answer_f.I_step -> Feat_answer_f.Ui_interaction: "反馈交互"
`;case`feat001NFBusiness`:return`direction: down

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
  Nf_kbEmpty: {
    label: "NF-101 知识库为零条时状态可见"
  }
  I_goal: {
    label: "I-101 业务目标"
  }
  Nf_ragTimeout: {
    label: "NF-102 RAGFlow 超 8 秒时客户可感知"
  }
  Nf_llmDown: {
    label: "NF-103 LLM 不可用时自动转人工"
  }
  I_step: {
    label: "I-102 场景判定逻辑"
  }
  Ui_status: {
    label: "UI-101 控制台状态提示"
  }
  Ui_notice: {
    label: "UI-102 极端场景提示"
  }
}

Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Nf_kbEmpty: "要求"
Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.I_goal: "落为业务目标"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Nf_ragTimeout: "要求"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.I_step: "落为场景判定逻辑"
Feat_degrade_nf.Us_llmDown -> Feat_degrade_nf.Nf_llmDown: "要求"
Feat_degrade_nf.Us_llmDown -> Feat_degrade_nf.I_step: "落为场景判定逻辑"
Feat_degrade_nf.I_step -> Feat_degrade_nf.Ui_status: "反馈知识状态"
Feat_degrade_nf.I_step -> Feat_degrade_nf.Ui_notice: "反馈场景提示"
`;case`feat001FFrame`:return`direction: down

Feat_answer_fUs_ask: {
  label: "US-001 客户提问获得专业答复"
  shape: document
}
Feat_answer_fUs_lowConfidence: {
  label: "US-002 答不准时转人工而非硬答"
  shape: document
}
Feat_answer_fF_answer: {
  label: "F-001 应答编排能力"
}
Feat_answer_fF_retrieval: {
  label: "F-002 知识检索能力"
}

Feat_answer_fUs_ask -> Feat_answer_fF_answer: "要求"
Feat_answer_fUs_lowConfidence -> Feat_answer_fF_retrieval: "要求"
`;case`feat001NFFrame`:return`direction: down

Feat_degrade_nfUs_kbEmpty: {
  label: "US-101 知识库为空时运营人员能看见"
  shape: document
}
Feat_degrade_nfUs_ragTimeout: {
  label: "US-102 RAGFlow 超时时客户不被静默等待"
  shape: document
}
Feat_degrade_nfUs_llmDown: {
  label: "US-103 LLM 不可用时转人工而非静默失败"
  shape: document
}
Feat_degrade_nfNf_kbEmpty: {
  label: "NF-101 知识库为零条时状态可见"
}
Feat_degrade_nfNf_ragTimeout: {
  label: "NF-102 RAGFlow 超 8 秒时客户可感知"
}
Feat_degrade_nfNf_llmDown: {
  label: "NF-103 LLM 不可用时自动转人工"
}

Feat_degrade_nfUs_kbEmpty -> Feat_degrade_nfNf_kbEmpty: "要求"
Feat_degrade_nfUs_ragTimeout -> Feat_degrade_nfNf_ragTimeout: "要求"
Feat_degrade_nfUs_llmDown -> Feat_degrade_nfNf_llmDown: "要求"
`;case`procLocal`:return`direction: down

`;case`procProd`:return`direction: down

`;case`srcdir001F`:return`direction: down

Feat_answer_fSrc_wechatCallback: {
  label: "SRC-001 微信客服回调入口"
}
Feat_answer_fSrc_answerOrchestrator: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fSrc_answerLoop: {
  label: "SRC-003 知识应答循环"
}
Feat_answer_fSrc_handoffService: {
  label: "SRC-006 转人工服务"
}
Feat_answer_fSrc_replyPolicy: {
  label: "SRC-004 回复策略"
}
Feat_answer_fSrc_ragflowKnowledge: {
  label: "SRC-005 RAGFlow 知识检索"
}
Feat_answer_fSrc_store: {
  label: "SRC-007 本地存储"
}

Feat_answer_fSrc_wechatCallback -> Feat_answer_fSrc_answerOrchestrator: "分发归一化消息"
Feat_answer_fSrc_answerOrchestrator -> Feat_answer_fSrc_answerLoop: "请求应答"
Feat_answer_fSrc_answerLoop -> Feat_answer_fSrc_replyPolicy: "校验置信度"
Feat_answer_fSrc_answerLoop -> Feat_answer_fSrc_ragflowKnowledge: "检索候选知识"
Feat_answer_fSrc_answerOrchestrator -> Feat_answer_fSrc_handoffService: "低置信度时转人工"
Feat_answer_fSrc_handoffService -> Feat_answer_fSrc_store: "持久化工单"
`;case`srcdir001NF`:return`direction: down

Feat_degrade_nfSrc_integrationRoutes: {
  label: "SRC-101 集成状态路由"
}
Feat_degrade_nfSrc_knowledgeAlert: {
  label: "SRC-103 知识告警"
}
Feat_degrade_nfSrc_ragflowProbe: {
  label: "SRC-104 RAGFlow 生命周期探针"
}
Feat_degrade_nfSrc_evaluationGate: {
  label: "SRC-102 评测闸门"
}
Feat_degrade_nfSrc_operatorUi: {
  label: "SRC-105 运营人员控制台"
}
Feat_degrade_nfSrc_storeAlert: {
  label: "SRC-106 告警状态存储"
}

Feat_degrade_nfSrc_integrationRoutes -> Feat_degrade_nfSrc_knowledgeAlert: "查询空库告警"
Feat_degrade_nfSrc_knowledgeAlert -> Feat_degrade_nfSrc_evaluationGate: "提交发布判定"
Feat_degrade_nfSrc_integrationRoutes -> Feat_degrade_nfSrc_ragflowProbe: "探测数据集状态"
Feat_degrade_nfSrc_evaluationGate -> Feat_degrade_nfSrc_storeAlert: "读取告警快照"
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
`;case`api001F`:return`direction: down

Feat_answer_fLane_edgeApi_chatCallback: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}
Feat_answer_fLane_edgeApi_handoffList: {
  label: "API-002 GET /handoffs 工单列表"
}
`;case`api001NF`:return`direction: down

Feat_degrade_nfLane_edgeApi_status: {
  label: "API-101 GET /integration/status 集成状态"
}
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
`;case`usPanorama`:return`direction: down

Feat_answer_fUs_ask: {
  label: "US-001 客户提问获得专业答复"
  shape: document
}
Feat_answer_fUs_lowConfidence: {
  label: "US-002 答不准时转人工而非硬答"
  shape: document
}
Feat_degrade_nfUs_kbEmpty: {
  label: "US-101 知识库为空时运营人员能看见"
  shape: document
}
Feat_degrade_nfUs_ragTimeout: {
  label: "US-102 RAGFlow 超时时客户不被静默等待"
  shape: document
}
Feat_degrade_nfUs_llmDown: {
  label: "US-103 LLM 不可用时转人工而非静默失败"
  shape: document
}
`;case`fPanorama`:return`direction: down

Feat_answer_fF_answer: {
  label: "F-001 应答编排能力"
}
Feat_answer_fF_retrieval: {
  label: "F-002 知识检索能力"
}
`;case`nfPanorama`:return`direction: down

Feat_degrade_nfNf_kbEmpty: {
  label: "NF-101 知识库为零条时状态可见"
}
Feat_degrade_nfNf_ragTimeout: {
  label: "NF-102 RAGFlow 超 8 秒时客户可感知"
}
Feat_degrade_nfNf_llmDown: {
  label: "NF-103 LLM 不可用时自动转人工"
}
`;case`iPanorama`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"

  I_goal: {
    label: "I-001 业务目标"
  }
  I_step: {
    label: "I-003 业务步骤"
  }
  I_state: {
    label: "I-002 业务状态"
  }
}
Feat_degrade_nfI_goal: {
  label: "I-101 业务目标"
}
Feat_degrade_nfI_step: {
  label: "I-102 场景判定逻辑"
}

Feat_answer_f.I_step -> Feat_answer_f.I_state: "推进问答状态"
`;case`uiPanorama`:return`direction: down

Feat_answer_fUi_interaction: {
  label: "UI-001 企业微信会话交互"
}
Feat_answer_fUi_information: {
  label: "UI-002 答复信息设计"
}
Feat_degrade_nfUi_status: {
  label: "UI-101 控制台状态提示"
}
Feat_degrade_nfUi_notice: {
  label: "UI-102 极端场景提示"
}
`;case`srcPanorama`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"

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
  Src_store: {
    label: "SRC-007 本地存储"
  }
}
Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"

  Src_integrationRoutes: {
    label: "SRC-101 集成状态路由"
  }
  Src_knowledgeAlert: {
    label: "SRC-103 知识告警"
  }
  Src_ragflowProbe: {
    label: "SRC-104 RAGFlow 生命周期探针"
  }
  Src_evaluationGate: {
    label: "SRC-102 评测闸门"
  }
  Src_operatorUi: {
    label: "SRC-105 运营人员控制台"
  }
  Src_storeAlert: {
    label: "SRC-106 告警状态存储"
  }
}

Feat_answer_f.Src_wechatCallback -> Feat_answer_f.Src_answerOrchestrator: "分发归一化消息"
Feat_answer_f.Src_answerOrchestrator -> Feat_answer_f.Src_answerLoop: "请求应答"
Feat_answer_f.Src_answerLoop -> Feat_answer_f.Src_replyPolicy: "校验置信度"
Feat_answer_f.Src_answerLoop -> Feat_answer_f.Src_ragflowKnowledge: "检索候选知识"
Feat_answer_f.Src_answerOrchestrator -> Feat_answer_f.Src_handoffService: "低置信度时转人工"
Feat_answer_f.Src_handoffService -> Feat_answer_f.Src_store: "持久化工单"
Feat_degrade_nf.Src_integrationRoutes -> Feat_degrade_nf.Src_knowledgeAlert: "查询空库告警"
Feat_degrade_nf.Src_knowledgeAlert -> Feat_degrade_nf.Src_evaluationGate: "提交发布判定"
Feat_degrade_nf.Src_integrationRoutes -> Feat_degrade_nf.Src_ragflowProbe: "探测数据集状态"
Feat_degrade_nf.Src_evaluationGate -> Feat_degrade_nf.Src_storeAlert: "读取告警快照"
`;case`stateMain`:return`direction: down

St_received: {
  label: "已接收"
}
St_retrieving: {
  label: "检索中"
}
St_answering: {
  label: "应答中"
}
St_answered: {
  label: "已答复"
}

St_received -> St_retrieving: "发起检索"
St_retrieving -> St_answering: "置信度达标"
St_answering -> St_answered: "答复已下发"
`;case`stateBranchHuman`:return`direction: down

St_retrieving: {
  label: "检索中"
}
St_waitingHuman: {
  label: "待人工"
}

St_retrieving -> St_waitingHuman: "置信度不足"
`;case`index`:return`direction: down

Feat_answer_f: {
  label: "Feature-001-F 知识应答能力"
}
Feat_degrade_nf: {
  label: "Feature-001-NF 极端场景保障"
}
`;case`seq001FAnswer`:return`direction: right

Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}
Feat_answer_fLane_edgeApi_chatCallback: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}
Feat_answer_fLane_coreStep_answerLane: {
  label: "I-003 业务步骤（应答泳道）"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}
Feat_answer_fSrc_answerOrchestrator: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fSrc_replyPolicy: {
  label: "SRC-004 回复策略"
}
Feat_answer_fSrc_ragflowKnowledge: {
  label: "SRC-005 RAGFlow 知识检索"
}
Feat_answer_fSrc_handoffService: {
  label: "SRC-006 转人工服务"
}

Feat_answer_fLane_clientActor_customer -> Feat_answer_fLane_edgeApi_chatCallback: "企业微信提问"
Feat_answer_fLane_edgeApi_chatCallback -> Feat_answer_fSrc_answerOrchestrator: "分发归一化消息"
Feat_answer_fSrc_answerOrchestrator -> Feat_answer_fLane_coreStep_answerLane: "请求应答"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_extExt_ragflow: "检索候选知识"
Feat_answer_fLane_extExt_ragflow -> Feat_answer_fLane_coreStep_answerLane: "返回候选知识"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fSrc_replyPolicy: "校验置信度"
Feat_answer_fSrc_replyPolicy -> Feat_answer_fLane_coreStep_answerLane: "达标放行"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_edgeApi_chatCallback: "返回答复"
`;case`seq001FBranchLowConfidence`:return`direction: right

Feat_answer_fSrc_replyPolicy: {
  label: "SRC-004 回复策略"
}
Feat_answer_fSrc_answerOrchestrator: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fSrc_handoffService: {
  label: "SRC-006 转人工服务"
}
Feat_answer_fSrc_store: {
  label: "SRC-007 本地存储"
}
Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}

Feat_answer_fSrc_replyPolicy -> Feat_answer_fSrc_answerOrchestrator: "置信度不足"
Feat_answer_fSrc_answerOrchestrator -> Feat_answer_fSrc_handoffService: "转人工"
Feat_answer_fSrc_handoffService -> Feat_answer_fSrc_store: "持久化工单"
Feat_answer_fSrc_store -> Feat_answer_fLane_clientActor_customer: "告知等待人工"
`;case`dfd001F`:return`direction: right

Feat_answer_fUi_interaction: {
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
Feat_answer_fUi_information: {
  label: "UI-002 答复信息设计"
}

Feat_answer_fUi_interaction -> Feat_answer_fIn_chatMessage: "提交提问"
Feat_answer_fIn_chatMessage -> Feat_answer_fBiz_query: "转换为检索查询"
Feat_answer_fBiz_query -> Feat_answer_fPod_ticket: "低置信度落工单"
Feat_answer_fPod_ticket -> Feat_answer_fDao_store: "写入工单"
Feat_answer_fDao_store -> Feat_answer_fOut_answer: "查询答复内容"
Feat_answer_fOut_answer -> Feat_answer_fUi_information: "渲染答复"
`;case`seq001NFDegrade`:return`direction: right

Feat_degrade_nfLane_operatorActor_ops: {
  label: "运营人员"
  shape: c4-person
}
Feat_degrade_nfLane_edgeApi_status: {
  label: "API-101 GET /integration/status 集成状态"
}
Feat_degrade_nfLane_coreStep_probeLane: {
  label: "I-102 场景判定逻辑（判定泳道）"
}
Feat_degrade_nfLane_extExt_ragflow: {
  label: "RAGFlow"
}
Feat_degrade_nfSrc_evaluationGate: {
  label: "SRC-102 评测闸门"
}
Feat_degrade_nfUi_notice: {
  label: "UI-102 极端场景提示"
}

Feat_degrade_nfLane_operatorActor_ops -> Feat_degrade_nfLane_edgeApi_status: "查询集成状态"
Feat_degrade_nfLane_edgeApi_status -> Feat_degrade_nfLane_coreStep_probeLane: "发起探测"
Feat_degrade_nfLane_coreStep_probeLane -> Feat_degrade_nfLane_extExt_ragflow: "探测数据集可用性"
Feat_degrade_nfLane_extExt_ragflow -> Feat_degrade_nfLane_coreStep_probeLane: "返回探测结论"
Feat_degrade_nfLane_coreStep_probeLane -> Feat_degrade_nfSrc_evaluationGate: "提交发布判定"
Feat_degrade_nfSrc_evaluationGate -> Feat_degrade_nfUi_notice: "下发场景提示"
`;case`dfd001NF`:return`direction: right

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
Feat_degrade_nfUi_status: {
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
Feat_degrade_nfOut_status -> Feat_degrade_nfUi_status: "显示条目数与异常提示"
Feat_degrade_nfBiz_probeResult -> Feat_degrade_nfPod_alert: "异常转告警实体"
Feat_degrade_nfPod_alert -> Feat_degrade_nfDao_alert: "写入告警"
`;case`seq001APIChat`:return`direction: right

Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}
Feat_answer_fLane_edgeApi_chatCallback: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}
Feat_answer_fLane_coreStep_answerLane: {
  label: "I-003 业务步骤（应答泳道）"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_answer_fLane_clientActor_customer -> Feat_answer_fLane_edgeApi_chatCallback: "POST /wechat/callback"
Feat_answer_fLane_edgeApi_chatCallback -> Feat_answer_fLane_coreStep_answerLane: "触发应答"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_extExt_ragflow: "检索知识"
Feat_answer_fLane_extExt_ragflow -> Feat_answer_fLane_coreStep_answerLane: "返回候选知识"
Feat_answer_fLane_coreStep_answerLane -> Feat_answer_fLane_edgeApi_chatCallback: "返回答复"
`;case`seq001NFAPI`:return`direction: right

Feat_degrade_nfLane_operatorActor_ops: {
  label: "运营人员"
  shape: c4-person
}
Feat_degrade_nfLane_edgeApi_status: {
  label: "API-101 GET /integration/status 集成状态"
}
Feat_degrade_nfLane_coreStep_probeLane: {
  label: "I-102 场景判定逻辑（判定泳道）"
}
Feat_degrade_nfLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_degrade_nfLane_operatorActor_ops -> Feat_degrade_nfLane_edgeApi_status: "GET /integration/status"
Feat_degrade_nfLane_edgeApi_status -> Feat_degrade_nfLane_coreStep_probeLane: "发起探测"
Feat_degrade_nfLane_coreStep_probeLane -> Feat_degrade_nfLane_extExt_ragflow: "探测数据集"
Feat_degrade_nfLane_extExt_ragflow -> Feat_degrade_nfLane_coreStep_probeLane: "返回结论"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
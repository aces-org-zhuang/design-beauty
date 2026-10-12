var e=e=>{switch(e){case`dfd001F-src001-1`:return`direction: right

Feat_answer_fUs_askI_001Ui_001Src_001: {
  label: "SRC-001 微信客服回调入口"
}
Feat_answer_fIn_chatMessage: {
  label: "IN-001 客户提问入参"
}
Feat_answer_fCvt_normalize: {
  label: "CVT-001 提问归一化转换器"
}
Feat_answer_fBiz_query: {
  label: "BIZ-001 检索查询对象"
}

Feat_answer_fUs_askI_001Ui_001Src_001 -> Feat_answer_fIn_chatMessage: "解密产出 IN-001"
Feat_answer_fIn_chatMessage -> Feat_answer_fCvt_normalize: "归一化"
Feat_answer_fCvt_normalize -> Feat_answer_fBiz_query: "转为 BIZ-001"
`;case`dfd001F-src002-1`:return`direction: right

Feat_answer_fUs_askI_001Ui_001Src_002: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fBiz_query: {
  label: "BIZ-001 检索查询对象"
}
Feat_answer_fPod_ticket: {
  label: "POD-001 工单持久化实体"
}

Feat_answer_fBiz_query -> Feat_answer_fUs_askI_001Ui_001Src_002: "查询进入编排"
Feat_answer_fUs_askI_001Ui_001Src_002 -> Feat_answer_fPod_ticket: "低置信度落工单"
`;case`dfd001F-src003-1`:return`direction: right

Feat_answer_fUs_askI_003Ui_003Src_003: {
  label: "SRC-003 知识应答循环"
}
Feat_answer_fBiz_query: {
  label: "BIZ-001 检索查询对象"
}
Feat_answer_fOut_answer: {
  label: "OUT-001 答复出参视图"
}

Feat_answer_fBiz_query -> Feat_answer_fUs_askI_003Ui_003Src_003: "候选进入应答循环"
Feat_answer_fUs_askI_003Ui_003Src_003 -> Feat_answer_fOut_answer: "组装 OUT-001"
`;case`dfd001F-src004-1`:return`direction: right

Feat_answer_fUs_askI_002Ui_002Src_004: {
  label: "SRC-004 回复策略"
}
Feat_answer_fBiz_query: {
  label: "BIZ-001 检索查询对象"
}
Feat_answer_fPod_ticket: {
  label: "POD-001 工单持久化实体"
}

Feat_answer_fBiz_query -> Feat_answer_fUs_askI_002Ui_002Src_004: "查询置信度判定"
Feat_answer_fUs_askI_002Ui_002Src_004 -> Feat_answer_fPod_ticket: "不足时标记工单"
`;case`dfd001F-src005-1`:return`direction: right

Feat_answer_fUs_askI_001Ui_001Src_005: {
  label: "SRC-005 RAGFlow 知识检索"
}
Feat_answer_fBiz_query: {
  label: "BIZ-001 检索查询对象"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_answer_fBiz_query -> Feat_answer_fUs_askI_001Ui_001Src_005: "发起检索"
Feat_answer_fUs_askI_001Ui_001Src_005 -> Feat_answer_fLane_extExt_ragflow: "请求 RAGFlow"
Feat_answer_fLane_extExt_ragflow -> Feat_answer_fUs_askI_001Ui_001Src_005: "返回候选"
`;case`dfd001F-src006-1`:return`direction: right

Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006: {
  label: "SRC-006 转人工服务"
}
Feat_answer_fPod_ticket: {
  label: "POD-001 工单持久化实体"
}
Feat_answer_fDao_store: {
  label: "DAO-001 本地存储访问"
  shape: cylinder
}

Feat_answer_fPod_ticket -> Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006: "工单数据"
Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006 -> Feat_answer_fDao_store: "写入工单"
`;case`dfd001F-src007-1`:return`direction: right

Feat_answer_fUs_askI_003Ui_003Src_007: {
  label: "SRC-007 本地存储"
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

Feat_answer_fPod_ticket -> Feat_answer_fUs_askI_003Ui_003Src_007: "读取工单"
Feat_answer_fUs_askI_003Ui_003Src_007 -> Feat_answer_fDao_store: "落盘"
Feat_answer_fDao_store -> Feat_answer_fOut_answer: "读出答复内容"
`;case`dfd001NF-src101-1`:return`direction: right

Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101: {
  label: "SRC-101 集成状态路由"
}
Feat_degrade_nfIn_probeQuery: {
  label: "IN-101 状态探测入参"
}
Feat_degrade_nfOut_status: {
  label: "OUT-101 状态出参视图"
}

Feat_degrade_nfIn_probeQuery -> Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101: "入参进入"
Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101 -> Feat_degrade_nfOut_status: "产出 OUT-101"
`;case`dfd001NF-src102-1`:return`direction: right

Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102: {
  label: "SRC-102 评测闸门"
}
Feat_degrade_nfBiz_probeResult: {
  label: "BIZ-101 探测结果对象"
}
Feat_degrade_nfPod_alert: {
  label: "POD-101 告警持久化实体"
}

Feat_degrade_nfBiz_probeResult -> Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102: "探测结论判定"
Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102 -> Feat_degrade_nfPod_alert: "异常转告警"
`;case`dfd001NF-src103-1`:return`direction: right

Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103: {
  label: "SRC-103 知识告警"
}
Feat_degrade_nfBiz_probeResult: {
  label: "BIZ-101 探测结果对象"
}
Feat_degrade_nfPod_alert: {
  label: "POD-101 告警持久化实体"
}

Feat_degrade_nfBiz_probeResult -> Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103: "暴露空库"
Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103 -> Feat_degrade_nfPod_alert: "写入告警"
`;case`dfd001NF-src104-1`:return`direction: right

Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104: {
  label: "SRC-104 RAGFlow 生命周期探针"
}
Feat_degrade_nfBiz_probeResult: {
  label: "BIZ-101 探测结果对象"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 -> Feat_answer_fLane_extExt_ragflow: "探测数据集"
Feat_answer_fLane_extExt_ragflow -> Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104: "返回结论"
Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 -> Feat_degrade_nfBiz_probeResult: "产出 BIZ-101"
`;case`dfd001NF-src105-1`:return`direction: right

Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105: {
  label: "SRC-105 运营人员控制台"
}
Feat_degrade_nfOut_status: {
  label: "OUT-101 状态出参视图"
}
Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1: {
  label: "UI-112-信息设计-001 空库提示信息"
}

Feat_degrade_nfOut_status -> Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105: "状态载荷"
Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105 -> Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1: "呈现提示"
`;case`dfd001NF-src106-1`:return`direction: right

Feat_degrade_nfUs_llmDownI_132Ui_132Src_106: {
  label: "SRC-106 告警状态存储"
}
Feat_degrade_nfPod_alert: {
  label: "POD-101 告警持久化实体"
}
Feat_degrade_nfDao_alert: {
  label: "DAO-101 告警存储访问"
  shape: cylinder
}

Feat_degrade_nfPod_alert -> Feat_degrade_nfUs_llmDownI_132Ui_132Src_106: "告警数据"
Feat_degrade_nfUs_llmDownI_132Ui_132Src_106 -> Feat_degrade_nfDao_alert: "写入快照"
`;case`dfd002F-src201-1`:return`direction: right

Feat_knowledge_fUs_scanI_211Ui_211Src_201: {
  label: "SRC-201 素材路由"
}
Feat_knowledge_fIn_material: {
  label: "IN-201 素材入参"
}
Feat_knowledge_fLane_opsActor_operator: {
  label: "运营人员"
  shape: c4-person
}

Feat_knowledge_fLane_opsActor_operator -> Feat_knowledge_fUs_scanI_211Ui_211Src_201: "上传素材"
Feat_knowledge_fUs_scanI_211Ui_211Src_201 -> Feat_knowledge_fIn_material: "产出 IN-201"
`;case`dfd002F-src202-1`:return`direction: right

Feat_knowledge_fUs_governI_221Ui_221Src_202: {
  label: "SRC-202 知识库路由"
}
Feat_knowledge_fDao_registry: {
  label: "DAO-201 文档登记访问"
  shape: cylinder
}
Feat_knowledge_fOut_knowledgeStatus: {
  label: "OUT-201 知识状态出参视图"
}

Feat_knowledge_fDao_registry -> Feat_knowledge_fUs_governI_221Ui_221Src_202: "读取登记"
Feat_knowledge_fUs_governI_221Ui_221Src_202 -> Feat_knowledge_fOut_knowledgeStatus: "产出 OUT-201"
`;case`dfd002F-src203-1`:return`direction: right

Feat_knowledge_fUs_scanI_211Ui_211Src_203: {
  label: "SRC-203 素材服务"
}
Feat_knowledge_fIn_material: {
  label: "IN-201 素材入参"
}
Feat_knowledge_fCvt_material: {
  label: "CVT-201 素材转换器"
}
Feat_knowledge_fBiz_candidate: {
  label: "BIZ-201 候选知识对象"
}

Feat_knowledge_fIn_material -> Feat_knowledge_fUs_scanI_211Ui_211Src_203: "入参校验"
Feat_knowledge_fUs_scanI_211Ui_211Src_203 -> Feat_knowledge_fCvt_material: "交给转换"
Feat_knowledge_fCvt_material -> Feat_knowledge_fBiz_candidate: "转为 BIZ-201"
`;case`dfd002F-src204-1`:return`direction: right

Feat_knowledge_fUs_scanI_211Ui_211Src_204: {
  label: "SRC-204 素材批处理"
}
Feat_knowledge_fLane_opsActor_operator: {
  label: "运营人员"
  shape: c4-person
}
Feat_knowledge_fUs_scanI_211Ui_211Src_203: {
  label: "SRC-203 素材服务"
}

Feat_knowledge_fLane_opsActor_operator -> Feat_knowledge_fUs_scanI_211Ui_211Src_204: "批量上传"
Feat_knowledge_fUs_scanI_211Ui_211Src_204 -> Feat_knowledge_fUs_scanI_211Ui_211Src_203: "逐条接入"
`;case`dfd002F-src205-1`:return`direction: right

Feat_knowledge_fUs_governI_221Ui_221Src_205: {
  label: "SRC-205 文档登记簿"
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

Feat_knowledge_fBiz_candidate -> Feat_knowledge_fUs_governI_221Ui_221Src_205: "登记文档标识"
Feat_knowledge_fUs_governI_221Ui_221Src_205 -> Feat_knowledge_fPod_document: "生成 POD-201"
Feat_knowledge_fPod_document -> Feat_knowledge_fDao_registry: "写入"
`;case`dfd002F-src206-1`:return`direction: right

Feat_knowledge_fUs_scanI_211Ui_211Src_206: {
  label: "SRC-206 知识扫描"
}
Feat_knowledge_fLane_extExt_wiki: {
  label: "LLM Wiki"
}
Feat_knowledge_fBiz_candidate: {
  label: "BIZ-201 候选知识对象"
}

Feat_knowledge_fUs_scanI_211Ui_211Src_206 -> Feat_knowledge_fLane_extExt_wiki: "读取 wiki 候选"
Feat_knowledge_fLane_extExt_wiki -> Feat_knowledge_fUs_scanI_211Ui_211Src_206: "返回候选"
Feat_knowledge_fUs_scanI_211Ui_211Src_206 -> Feat_knowledge_fBiz_candidate: "产出候选对象"
`;case`dfd002F-src207-1`:return`direction: right

Feat_knowledge_fUs_governI_221Ui_221Src_207: {
  label: "SRC-207 知识治理"
}
Feat_knowledge_fBiz_candidate: {
  label: "BIZ-201 候选知识对象"
}
Feat_knowledge_fPod_document: {
  label: "POD-201 文档登记实体"
}

Feat_knowledge_fBiz_candidate -> Feat_knowledge_fUs_governI_221Ui_221Src_207: "候选进入治理"
Feat_knowledge_fUs_governI_221Ui_221Src_207 -> Feat_knowledge_fPod_document: "批准后登记"
`;case`dfd002F-src208-1`:return`direction: right

Feat_knowledge_fUs_alertI_231Ui_231Src_208: {
  label: "SRC-208 知识同步"
}
Feat_knowledge_fLane_extExt_ragflow2: {
  label: "RAGFlow"
}

Feat_knowledge_fUs_alertI_231Ui_231Src_208 -> Feat_knowledge_fLane_extExt_ragflow2: "推送已批准知识"
Feat_knowledge_fLane_extExt_ragflow2 -> Feat_knowledge_fUs_alertI_231Ui_231Src_208: "同步确认"
`;case`dfd002F-src209-1`:return`direction: right

Feat_knowledge_fUs_alertI_232Ui_232Src_209: {
  label: "SRC-209 知识生命周期视图"
}
Feat_knowledge_fPod_document: {
  label: "POD-201 文档登记实体"
}
Feat_knowledge_fDao_registry: {
  label: "DAO-201 文档登记访问"
  shape: cylinder
}

Feat_knowledge_fUs_alertI_232Ui_232Src_209 -> Feat_knowledge_fPod_document: "晋升或下线"
Feat_knowledge_fPod_document -> Feat_knowledge_fDao_registry: "更新登记"
`;case`seq001F-i-001-lanes`:return`direction: right

Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}
Feat_answer_fUs_askI_001Ui_001Src_001: {
  label: "SRC-001 微信客服回调入口"
}
Feat_answer_fUs_askI_001I_001_1: {
  label: "I-001-1 归一化提问"
}
Feat_answer_fUs_askI_001I_001_2: {
  label: "I-001-2 检索候选知识"
}
Feat_answer_fUs_askI_001I_001_3: {
  label: "I-001-3 候选排序与择优"
}
Feat_answer_fUs_askI_001Ui_001Src_005: {
  label: "SRC-005 RAGFlow 知识检索"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_answer_fLane_clientActor_customer -> Feat_answer_fUs_askI_001Ui_001Src_001: "①提交提问"
Feat_answer_fUs_askI_001Ui_001Src_001 -> Feat_answer_fUs_askI_001I_001_1: "②解密归一化"
Feat_answer_fUs_askI_001I_001_1 -> Feat_answer_fUs_askI_001I_001_2: "③发起检索"
Feat_answer_fUs_askI_001I_001_2 -> Feat_answer_fUs_askI_001Ui_001Src_005: "④请求RAGFlow"
Feat_answer_fUs_askI_001Ui_001Src_005 -> Feat_answer_fLane_extExt_ragflow: "⑤检索"
Feat_answer_fLane_extExt_ragflow -> Feat_answer_fUs_askI_001Ui_001Src_005: "⑥返回候选"
Feat_answer_fUs_askI_001I_001_2 -> Feat_answer_fUs_askI_001I_001_3: "⑦排序择优"
`;case`seq001F-i-003-lanes`:return`direction: right

Feat_answer_fUs_askI_001Ui_001Src_002: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fUs_askI_003I_003_1: {
  label: "I-003-1 生成答复"
}
Feat_answer_fUs_askI_003I_003_2: {
  label: "I-003-2 下发答复"
}
Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}

Feat_answer_fUs_askI_001Ui_001Src_002 -> Feat_answer_fUs_askI_003I_003_1: "①校验通过"
Feat_answer_fUs_askI_003I_003_1 -> Feat_answer_fUs_askI_003I_003_2: "②答复就绪"
Feat_answer_fUs_askI_003I_003_2 -> Feat_answer_fLane_clientActor_customer: "③答复送达"
`;case`seq001F-i-012-lanes`:return`direction: right

Feat_answer_fUs_askI_001Ui_001Src_002: {
  label: "SRC-002 应答编排器"
}
Feat_answer_fUs_lowConfidenceI_012I_012_1: {
  label: "I-012-1 创建人工工单"
}
Feat_answer_fUs_lowConfidenceI_012I_012_2: {
  label: "I-012-2 告知客户等待"
}
Feat_answer_fLane_clientActor_customer: {
  label: "客户"
  shape: c4-person
}

Feat_answer_fUs_askI_001Ui_001Src_002 -> Feat_answer_fUs_lowConfidenceI_012I_012_1: "①判定转人工"
Feat_answer_fUs_lowConfidenceI_012I_012_1 -> Feat_answer_fUs_lowConfidenceI_012I_012_2: "②工单创建"
Feat_answer_fUs_lowConfidenceI_012I_012_2 -> Feat_answer_fLane_clientActor_customer: "③告知等待"
`;case`seq001NF-i-111-lanes`:return`direction: right

Feat_degrade_nfLane_operatorActor_ops: {
  label: "运营人员"
  shape: c4-person
}
Feat_degrade_nfUs_kbEmptyI_111I_111_1: {
  label: "I-111-1 读取条目数"
}
Feat_degrade_nfUs_kbEmptyI_111I_111_2: {
  label: "I-111-2 判定零条场景"
}

Feat_degrade_nfLane_operatorActor_ops -> Feat_degrade_nfUs_kbEmptyI_111I_111_1: "①发起查询"
Feat_degrade_nfUs_kbEmptyI_111I_111_1 -> Feat_degrade_nfUs_kbEmptyI_111I_111_2: "②判定零条场景"
`;case`seq001NF-i-121-lanes`:return`direction: right

Feat_degrade_nfUs_ragTimeoutI_121I_121_1: {
  label: "I-121-1 启动超时计时"
}
Feat_degrade_nfUs_ragTimeoutI_121I_121_2: {
  label: "I-121-2 判定超时"
}
Feat_answer_fLane_extExt_ragflow: {
  label: "RAGFlow"
}

Feat_degrade_nfUs_ragTimeoutI_121I_121_1 -> Feat_answer_fLane_extExt_ragflow: "①等待 RAGFlow 响应"
Feat_answer_fLane_extExt_ragflow -> Feat_degrade_nfUs_ragTimeoutI_121I_121_2: "②到期判定"
`;case`seq001NF-i-132-lanes`:return`direction: right

Feat_degrade_nfUs_llmDownI_132I_132_1: {
  label: "I-132-1 生成人工工单"
}
Feat_degrade_nfUs_llmDownI_132I_132_2: {
  label: "I-132-2 告知等待人工"
}
Feat_degrade_nfUs_llmDownI_132Ui_132Src_106: {
  label: "SRC-106 告警状态存储"
}

Feat_degrade_nfUs_llmDownI_132I_132_1 -> Feat_degrade_nfUs_llmDownI_132I_132_2: "①工单创建完成"
Feat_degrade_nfUs_llmDownI_132I_132_2 -> Feat_degrade_nfUs_llmDownI_132Ui_132Src_106: "②告警落库"
`;case`seq002F-i-211-lanes`:return`direction: right

Feat_knowledge_fLane_opsActor_operator: {
  label: "运营人员"
  shape: c4-person
}
Feat_knowledge_fUs_scanI_211Ui_211Src_201: {
  label: "SRC-201 素材路由"
}
Feat_knowledge_fUs_scanI_211I_211_1: {
  label: "I-211-1 登记素材"
}
Feat_knowledge_fUs_scanI_211I_211_2: {
  label: "I-211-2 抽取候选知识"
}
Feat_knowledge_fUs_scanI_211I_211_3: {
  label: "I-211-3 提交候选"
}

Feat_knowledge_fLane_opsActor_operator -> Feat_knowledge_fUs_scanI_211Ui_211Src_201: "①上传素材"
Feat_knowledge_fUs_scanI_211Ui_211Src_201 -> Feat_knowledge_fUs_scanI_211I_211_1: "②登记素材"
Feat_knowledge_fUs_scanI_211I_211_1 -> Feat_knowledge_fUs_scanI_211I_211_2: "③抽取候选"
Feat_knowledge_fUs_scanI_211I_211_2 -> Feat_knowledge_fUs_scanI_211I_211_3: "④提交候选"
`;case`seq002F-i-221-lanes`:return`direction: right

Feat_knowledge_fLane_opsActor_operator: {
  label: "运营人员"
  shape: c4-person
}
Feat_knowledge_fUs_governI_221I_221_1: {
  label: "I-221-1 人工审阅候选"
}
Feat_knowledge_fUs_governI_221I_221_2: {
  label: "I-221-2 记录决策"
}
Feat_knowledge_fUs_governI_221I_221_3: {
  label: "I-221-3 晋升知识"
}

Feat_knowledge_fLane_opsActor_operator -> Feat_knowledge_fUs_governI_221I_221_1: "①逐条审阅"
Feat_knowledge_fUs_governI_221I_221_1 -> Feat_knowledge_fUs_governI_221I_221_2: "②记录决策"
Feat_knowledge_fUs_governI_221I_221_2 -> Feat_knowledge_fUs_governI_221I_221_3: "③批准晋升或驳回"
`;case`seq002F-i-231-lanes`:return`direction: right

Feat_knowledge_fUs_alertI_231I_231_1: {
  label: "I-231-1 巡检数据集状态"
}
Feat_knowledge_fUs_alertI_231I_231_2: {
  label: "I-231-2 判定新鲜度异常"
}
Feat_knowledge_fLane_extExt_ragflow2: {
  label: "RAGFlow"
}

Feat_knowledge_fUs_alertI_231I_231_1 -> Feat_knowledge_fLane_extExt_ragflow2: "①巡检数据集"
Feat_knowledge_fLane_extExt_ragflow2 -> Feat_knowledge_fUs_alertI_231I_231_2: "②新鲜度判定"
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
`;case`pano-us`:return`direction: down

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

Feat_answer_f.Us_ask -> Feat_answer_f.Us_lowConfidence: "[...]"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.Us_ask: "持久化工单"
Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Us_ragTimeout: "提交发布判定"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Us_llmDown: "读取告警快照"
Feat_knowledge_f.Us_scan -> Feat_knowledge_f.Us_govern: "[...]"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_scan: "触发扫描"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_alert: "[...]"
Feat_knowledge_f.Us_alert -> Feat_knowledge_f.Us_govern: "晋升或下线"
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

Feat_answer_fUs_ask: {
  label: "US-001 客户提问获得专业答复"
  shape: document

  I_001: {
    label: "I-001 阶段性目标 · 取得可靠候选知识"
  }
  I_002: {
    label: "I-002 阶段性目标 · 判定可否自动答复"
  }
  I_003: {
    label: "I-003 阶段性目标 · 生成并下发答复"
  }
}
Feat_degrade_nfUs_kbEmpty: {
  label: "US-101 知识库为空时运营人员能看见"
  shape: document

  I_111: {
    label: "I-111 阶段性目标 · 读出条目数并判定空库"
  }
  I_112: {
    label: "I-112 阶段性目标 · 把空库显式呈现出来"
  }
}
Feat_knowledge_fUs_scan: {
  label: "US-201 素材入库后自动进入候选知识"
  shape: document

  I_211: {
    label: "I-211 阶段性目标 · 素材入库并产出候选"
  }
}
Feat_knowledge_fUs_govern: {
  label: "US-202 候选知识经我决策后才对外可见"
  shape: document

  I_221: {
    label: "I-221 阶段性目标 · 审阅决策并晋升"
  }
}
Feat_answer_fUs_lowConfidence: {
  label: "US-002 答不准时转人工而非硬答"
  shape: document

  I_011: {
    label: "I-011 阶段性目标 · 判定进入人工路径"
  }
  I_012: {
    label: "I-012 阶段性目标 · 生成工单并告知等待"
  }
}
Feat_degrade_nfUs_ragTimeout: {
  label: "US-102 RAGFlow 超时时客户不被静默等待"
  shape: document

  I_121: {
    label: "I-121 阶段性目标 · 计时并判定超时"
  }
  I_122: {
    label: "I-122 阶段性目标 · 告知客户系统在处理"
  }
}
Feat_knowledge_fUs_alert: {
  label: "US-203 知识陈旧时我能收到提示"
  shape: document

  I_231: {
    label: "I-231 阶段性目标 · 巡检并判定新鲜度"
  }
  I_232: {
    label: "I-232 阶段性目标 · 上报告警并呈现"
  }
}
Feat_degrade_nfUs_llmDown: {
  label: "US-103 LLM 不可用时转人工而非静默失败"
  shape: document

  I_131: {
    label: "I-131 阶段性目标 · 识别模型不可用并转人工"
  }
  I_132: {
    label: "I-132 阶段性目标 · 建单并告知等待"
  }
}

Feat_answer_fUs_ask.I_001 -> Feat_answer_fUs_ask.I_002: "取得候选后进入判定"
Feat_answer_fUs_ask.I_001 -> Feat_answer_fUs_ask.I_003: "请求应答"
Feat_answer_fUs_ask.I_002 -> Feat_answer_fUs_ask.I_003: "校验通过后生成答复"
Feat_answer_fUs_ask.I_003 -> Feat_answer_fUs_ask.I_001: "检索候选知识"
Feat_answer_fUs_ask.I_003 -> Feat_answer_fUs_ask.I_002: "校验置信度"
Feat_answer_fUs_ask.I_002 -> Feat_answer_fUs_lowConfidence.I_011: "校验不通过转人工"
Feat_answer_fUs_ask.I_001 -> Feat_answer_fUs_lowConfidence.I_012: "低置信度时转人工"
Feat_answer_fUs_lowConfidence.I_011 -> Feat_answer_fUs_lowConfidence.I_012: "判定后建单并告知"
Feat_answer_fUs_lowConfidence.I_012 -> Feat_answer_fUs_ask.I_003: "持久化工单"
Feat_degrade_nfUs_kbEmpty.I_111 -> Feat_degrade_nfUs_kbEmpty.I_112: "判定空库后显式呈现"
Feat_degrade_nfUs_kbEmpty.I_112 -> Feat_degrade_nfUs_ragTimeout.I_122: "提交发布判定"
Feat_degrade_nfUs_ragTimeout.I_121 -> Feat_degrade_nfUs_ragTimeout.I_122: "判定超时后告知客户"
Feat_degrade_nfUs_ragTimeout.I_122 -> Feat_degrade_nfUs_llmDown.I_132: "读取告警快照"
Feat_degrade_nfUs_llmDown.I_131 -> Feat_degrade_nfUs_llmDown.I_132: "判定不可用后建单告知"
Feat_knowledge_fUs_scan.I_211 -> Feat_knowledge_fUs_govern.I_221: "提交候选进入治理"
Feat_knowledge_fUs_govern.I_221 -> Feat_knowledge_fUs_scan.I_211: "触发扫描"
Feat_knowledge_fUs_govern.I_221 -> Feat_knowledge_fUs_alert.I_231: "晋升后进入新鲜度巡检"
Feat_knowledge_fUs_alert.I_231 -> Feat_knowledge_fUs_alert.I_232: "判定异常后上报告警"
Feat_knowledge_fUs_alert.I_232 -> Feat_knowledge_fUs_govern.I_221: "晋升或下线"
`;case`pano-i-state`:return`direction: down

Feat_answer_fUs_askI_001: {
  label: "I-001 阶段性目标 · 取得可靠候选知识"

  St_001_pending: {
    label: "S-001 待检索"
  }
  St_001_normalizing: {
    label: "S-002 归一化中"
  }
  St_001_searching: {
    label: "S-003 检索中"
  }
  St_001_got: {
    label: "S-004 已取得候选"
  }
}
Feat_answer_fUs_askI_002: {
  label: "I-002 阶段性目标 · 判定可否自动答复"

  St_002_pending: {
    label: "S-005 待校验"
  }
  St_002_checking: {
    label: "S-006 校验中"
  }
  St_002_passed: {
    label: "S-007 校验通过"
  }
  St_002_failed: {
    label: "S-008 置信度不足"
  }
}
Feat_answer_fUs_askI_003: {
  label: "I-003 阶段性目标 · 生成并下发答复"

  St_003_pending: {
    label: "S-009 待生成"
  }
  St_003_composing: {
    label: "S-010 生成中"
  }
  St_003_delivering: {
    label: "S-011 下发中"
  }
  St_003_answered: {
    label: "S-012 已答复"
  }
}
Feat_answer_fUs_lowConfidenceI_011: {
  label: "I-011 阶段性目标 · 判定进入人工路径"

  St_011_pending: {
    label: "S-101 待判定"
  }
  St_011_judging: {
    label: "S-102 判定中"
  }
  St_011_escalated: {
    label: "S-103 已转人工"
  }
}
Feat_answer_fUs_lowConfidenceI_012: {
  label: "I-012 阶段性目标 · 生成工单并告知等待"

  St_012_pending: {
    label: "S-104 待建单"
  }
  St_012_ticketing: {
    label: "S-105 建单中"
  }
  St_012_notified: {
    label: "S-106 已告知等待"
  }
  St_012_answered: {
    label: "S-107 人工已接管"
  }
}
Feat_degrade_nfUs_kbEmptyI_111: {
  label: "I-111 阶段性目标 · 读出条目数并判定空库"

  St_111_pending: {
    label: "S-111 待读取"
  }
  St_111_counting: {
    label: "S-112 读取中"
  }
  St_111_empty: {
    label: "S-113 判定为空库"
  }
  St_111_ready: {
    label: "S-114 条目正常"
  }
}
Feat_degrade_nfUs_kbEmptyI_112: {
  label: "I-112 阶段性目标 · 把空库显式呈现出来"

  St_112_pending: {
    label: "S-115 待呈现"
  }
  St_112_rendering: {
    label: "S-116 渲染中"
  }
  St_112_shown: {
    label: "S-117 已显式提示"
  }
}
Feat_degrade_nfUs_ragTimeoutI_121: {
  label: "I-121 阶段性目标 · 计时并判定超时"

  St_121_pending: {
    label: "S-121 待计时"
  }
  St_121_waiting: {
    label: "S-122 等待响应"
  }
  St_121_timedOut: {
    label: "S-123 判定超时"
  }
  St_121_returned: {
    label: "S-124 按时返回"
  }
}
Feat_degrade_nfUs_ragTimeoutI_122: {
  label: "I-122 阶段性目标 · 告知客户系统在处理"

  St_122_pending: {
    label: "S-125 待提示"
  }
  St_122_notifying: {
    label: "S-126 提示中"
  }
  St_122_notified: {
    label: "S-127 已告知处理中"
  }
}
Feat_degrade_nfUs_llmDownI_131: {
  label: "I-131 阶段性目标 · 识别模型不可用并转人工"

  St_131_pending: {
    label: "S-131 待调用"
  }
  St_131_calling: {
    label: "S-132 调用中"
  }
  St_131_failed: {
    label: "S-133 模型不可用"
  }
  St_131_ok: {
    label: "S-134 调用成功"
  }
}
Feat_degrade_nfUs_llmDownI_132: {
  label: "I-132 阶段性目标 · 建单并告知等待"

  St_132_pending: {
    label: "S-135 待建单"
  }
  St_132_ticketing: {
    label: "S-136 建单中"
  }
  St_132_notified: {
    label: "S-137 已告知等待"
  }
  St_132_handedOff: {
    label: "S-138 人工已接管"
  }
}
Feat_knowledge_fUs_scanI_211: {
  label: "I-211 阶段性目标 · 素材入库并产出候选"

  St_211_pending: {
    label: "S-211 待接入"
  }
  St_211_registering: {
    label: "S-212 登记中"
  }
  St_211_scanning: {
    label: "S-213 扫描中"
  }
  St_211_submitted: {
    label: "S-214 已提交候选"
  }
}
Feat_knowledge_fUs_governI_221: {
  label: "I-221 阶段性目标 · 审阅决策并晋升"

  St_221_pending: {
    label: "S-221 待审阅"
  }
  St_221_reviewing: {
    label: "S-222 审阅中"
  }
  St_221_decided: {
    label: "S-223 已决策"
  }
  St_221_promoted: {
    label: "S-224 已晋升可检索"
  }
  St_221_rejected: {
    label: "S-225 已驳回退回"
  }
}
Feat_knowledge_fUs_alertI_231: {
  label: "I-231 阶段性目标 · 巡检并判定新鲜度"

  St_231_pending: {
    label: "S-231 待巡检"
  }
  St_231_probing: {
    label: "S-232 巡检中"
  }
  St_231_fresh: {
    label: "S-233 新鲜度正常"
  }
  St_231_stale: {
    label: "S-234 新鲜度异常"
  }
}
Feat_knowledge_fUs_alertI_232: {
  label: "I-232 阶段性目标 · 上报告警并呈现"

  St_232_pending: {
    label: "S-235 待上报"
  }
  St_232_reporting: {
    label: "S-236 上报中"
  }
  St_232_listed: {
    label: "S-237 控制台已列出"
  }
  St_232_fixed: {
    label: "S-238 已修复下线"
  }
}

Feat_answer_fUs_askI_001.St_001_pending -> Feat_answer_fUs_askI_001.St_001_normalizing: "收到企业微信提问"
Feat_answer_fUs_askI_001.St_001_normalizing -> Feat_answer_fUs_askI_001.St_001_searching: "归一化完成"
Feat_answer_fUs_askI_001.St_001_searching -> Feat_answer_fUs_askI_001.St_001_got: "检索返回候选条目"
Feat_answer_fUs_askI_002.St_002_pending -> Feat_answer_fUs_askI_002.St_002_checking: "进入回复策略"
Feat_answer_fUs_askI_002.St_002_checking -> Feat_answer_fUs_askI_002.St_002_passed: "置信度达标"
Feat_answer_fUs_askI_002.St_002_checking -> Feat_answer_fUs_askI_002.St_002_failed: "置信度不足，转 US-002"
Feat_answer_fUs_askI_003.St_003_pending -> Feat_answer_fUs_askI_003.St_003_composing: "校验通过"
Feat_answer_fUs_askI_003.St_003_composing -> Feat_answer_fUs_askI_003.St_003_delivering: "答复正文就绪"
Feat_answer_fUs_askI_003.St_003_delivering -> Feat_answer_fUs_askI_003.St_003_answered: "企业微信回传成功"
Feat_answer_fUs_lowConfidenceI_011.St_011_pending -> Feat_answer_fUs_lowConfidenceI_011.St_011_judging: "置信度不足触发"
Feat_answer_fUs_lowConfidenceI_011.St_011_judging -> Feat_answer_fUs_lowConfidenceI_011.St_011_escalated: "确认无可靠候选"
Feat_answer_fUs_lowConfidenceI_012.St_012_pending -> Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing: "判定已转人工"
Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing -> Feat_answer_fUs_lowConfidenceI_012.St_012_notified: "工单创建完成"
Feat_answer_fUs_lowConfidenceI_012.St_012_notified -> Feat_answer_fUs_lowConfidenceI_012.St_012_answered: "人工接手"
Feat_degrade_nfUs_kbEmptyI_111.St_111_pending -> Feat_degrade_nfUs_kbEmptyI_111.St_111_counting: "运营人员发起查询"
Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -> Feat_degrade_nfUs_kbEmptyI_111.St_111_empty: "条目数为 0"
Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -> Feat_degrade_nfUs_kbEmptyI_111.St_111_ready: "条目数大于 0"
Feat_degrade_nfUs_kbEmptyI_112.St_112_pending -> Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering: "判定为空库"
Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering -> Feat_degrade_nfUs_kbEmptyI_112.St_112_shown: "提示已渲染"
Feat_degrade_nfUs_ragTimeoutI_121.St_121_pending -> Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting: "发起检索并启动计时"
Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -> Feat_degrade_nfUs_ragTimeoutI_121.St_121_timedOut: "超过 8 秒未返回"
Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -> Feat_degrade_nfUs_ragTimeoutI_121.St_121_returned: "8 秒内返回候选"
Feat_degrade_nfUs_ragTimeoutI_122.St_122_pending -> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying: "判定超时"
Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying -> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notified: "提示已下发"
Feat_degrade_nfUs_llmDownI_131.St_131_pending -> Feat_degrade_nfUs_llmDownI_131.St_131_calling: "发起模型调用"
Feat_degrade_nfUs_llmDownI_131.St_131_calling -> Feat_degrade_nfUs_llmDownI_131.St_131_failed: "调用失败或返回异常"
Feat_degrade_nfUs_llmDownI_131.St_131_calling -> Feat_degrade_nfUs_llmDownI_131.St_131_ok: "调用正常返回"
Feat_degrade_nfUs_llmDownI_132.St_132_pending -> Feat_degrade_nfUs_llmDownI_132.St_132_ticketing: "模型判定不可用"
Feat_degrade_nfUs_llmDownI_132.St_132_ticketing -> Feat_degrade_nfUs_llmDownI_132.St_132_notified: "工单创建完成"
Feat_degrade_nfUs_llmDownI_132.St_132_notified -> Feat_degrade_nfUs_llmDownI_132.St_132_handedOff: "人工接手"
Feat_knowledge_fUs_scanI_211.St_211_pending -> Feat_knowledge_fUs_scanI_211.St_211_registering: "上传素材"
Feat_knowledge_fUs_scanI_211.St_211_registering -> Feat_knowledge_fUs_scanI_211.St_211_scanning: "登记完成"
Feat_knowledge_fUs_scanI_211.St_211_scanning -> Feat_knowledge_fUs_scanI_211.St_211_submitted: "候选已抽取并提交"
Feat_knowledge_fUs_governI_221.St_221_pending -> Feat_knowledge_fUs_governI_221.St_221_reviewing: "候选提交到治理"
Feat_knowledge_fUs_governI_221.St_221_reviewing -> Feat_knowledge_fUs_governI_221.St_221_decided: "运营人员记录决策"
Feat_knowledge_fUs_governI_221.St_221_decided -> Feat_knowledge_fUs_governI_221.St_221_promoted: "批准晋升"
Feat_knowledge_fUs_governI_221.St_221_decided -> Feat_knowledge_fUs_governI_221.St_221_rejected: "驳回退回"
Feat_knowledge_fUs_alertI_231.St_231_pending -> Feat_knowledge_fUs_alertI_231.St_231_probing: "到达巡检周期"
Feat_knowledge_fUs_alertI_231.St_231_probing -> Feat_knowledge_fUs_alertI_231.St_231_fresh: "全部在阈值内"
Feat_knowledge_fUs_alertI_231.St_231_probing -> Feat_knowledge_fUs_alertI_231.St_231_stale: "存在超阈值条目"
Feat_knowledge_fUs_alertI_232.St_232_pending -> Feat_knowledge_fUs_alertI_232.St_232_reporting: "判定新鲜度异常"
Feat_knowledge_fUs_alertI_232.St_232_reporting -> Feat_knowledge_fUs_alertI_232.St_232_listed: "告警已落库并展示"
Feat_knowledge_fUs_alertI_232.St_232_listed -> Feat_knowledge_fUs_alertI_232.St_232_fixed: "运营人员修复后下线"
`;case`pano-ui`:return`direction: down

Feat_answer_fUs_ask: {
  label: "US-001 客户提问获得专业答复"
  shape: document

  I_001: {
    label: "I-001 阶段性目标 · 取得可靠候选知识"

    Ui_001: {
      label: "UI-001 会话输入"
    }
  }
  I_003: {
    label: "I-003 阶段性目标 · 生成并下发答复"

    Ui_003: {
      label: "UI-003 答复呈现"
    }
  }
  I_002: {
    label: "I-002 阶段性目标 · 判定可否自动答复"

    Ui_002: {
      label: "UI-002 判定反馈"
    }
  }
}
Feat_answer_fUs_lowConfidence: {
  label: "US-002 答不准时转人工而非硬答"
  shape: document

  I_011Ui_011: {
    label: "UI-011 转接提示"
  }
  I_012Ui_012: {
    label: "UI-012 转人工告知"
  }
}
Feat_degrade_nfUs_kbEmpty: {
  label: "US-101 知识库为空时运营人员能看见"
  shape: document

  I_111: {
    label: "I-111 阶段性目标 · 读出条目数并判定空库"

    Ui_111: {
      label: "UI-111 状态查询"
    }
  }
  I_112: {
    label: "I-112 阶段性目标 · 把空库显式呈现出来"

    Ui_112: {
      label: "UI-112 空库提示呈现"
    }
  }
}
Feat_degrade_nfUs_ragTimeout: {
  label: "US-102 RAGFlow 超时时客户不被静默等待"
  shape: document

  I_121Ui_121: {
    label: "UI-121 等待反馈"
  }
  I_122Ui_122: {
    label: "UI-122 处理中提示"
  }
}
Feat_degrade_nfUs_llmDown: {
  label: "US-103 LLM 不可用时转人工而非静默失败"
  shape: document

  I_131Ui_131: {
    label: "UI-131 调用反馈"
  }
  I_132Ui_132: {
    label: "UI-132 转人工告知"
  }
}
Feat_knowledge_fUs_scan: {
  label: "US-201 素材入库后自动进入候选知识"
  shape: document

  I_211Ui_211: {
    label: "UI-211 素材上传"
  }
}
Feat_knowledge_fUs_govern: {
  label: "US-202 候选知识经我决策后才对外可见"
  shape: document

  I_221Ui_221: {
    label: "UI-221 审阅工作台"
  }
}
Feat_knowledge_fUs_alert: {
  label: "US-203 知识陈旧时我能收到提示"
  shape: document

  I_231: {
    label: "I-231 阶段性目标 · 巡检并判定新鲜度"

    Ui_231: {
      label: "UI-231 巡检状态"
    }
  }
  I_232: {
    label: "I-232 阶段性目标 · 上报告警并呈现"

    Ui_232: {
      label: "UI-232 告警呈现"
    }
  }
}

Feat_answer_fUs_ask.I_001.Ui_001 -> Feat_answer_fUs_ask.I_003.Ui_003: "请求应答"
Feat_answer_fUs_ask.I_003.Ui_003 -> Feat_answer_fUs_ask.I_001.Ui_001: "检索候选知识"
Feat_answer_fUs_ask.I_003.Ui_003 -> Feat_answer_fUs_ask.I_002.Ui_002: "校验置信度"
Feat_answer_fUs_ask.I_001.Ui_001 -> Feat_answer_fUs_lowConfidence.I_012Ui_012: "低置信度时转人工"
Feat_answer_fUs_lowConfidence.I_012Ui_012 -> Feat_answer_fUs_ask.I_003.Ui_003: "持久化工单"
Feat_degrade_nfUs_kbEmpty.I_111.Ui_111 -> Feat_degrade_nfUs_kbEmpty.I_112.Ui_112: "查询空库告警"
Feat_degrade_nfUs_kbEmpty.I_112.Ui_112 -> Feat_degrade_nfUs_ragTimeout.I_122Ui_122: "提交发布判定"
Feat_degrade_nfUs_ragTimeout.I_122Ui_122 -> Feat_degrade_nfUs_llmDown.I_132Ui_132: "读取告警快照"
Feat_knowledge_fUs_scan.I_211Ui_211 -> Feat_knowledge_fUs_govern.I_221Ui_221: "[...]"
Feat_knowledge_fUs_govern.I_221Ui_221 -> Feat_knowledge_fUs_scan.I_211Ui_211: "触发扫描"
Feat_knowledge_fUs_govern.I_221Ui_221 -> Feat_knowledge_fUs_alert.I_231.Ui_231: "批准后推送"
Feat_knowledge_fUs_alert.I_231.Ui_231 -> Feat_knowledge_fUs_alert.I_232.Ui_232: "更新生命周期"
Feat_knowledge_fUs_alert.I_232.Ui_232 -> Feat_knowledge_fUs_govern.I_221Ui_221: "晋升或下线"
`;case`pano-api`:return`direction: down

Feat_answer_fUs_askI_001Ui_001Src_001Api_001: {
  label: "API-001 POST /wechat/callback 微信客服回调"
}
Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002: {
  label: "API-002 GET /handoffs 工单列表"
}
Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101: {
  label: "API-101 GET /integration/status 集成状态"
}
Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201: {
  label: "API-201 POST /materials 素材接入"
}
Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202: {
  label: "API-202 POST /knowledge/scan 知识扫描"
}
Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203: {
  label: "API-203 GET /knowledge/status 知识状态"
}
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
Feat_degrade_nf.Pod_alert -> Feat_degrade_nf.Dao_alert: "写入告警"
Feat_degrade_nf.Cvt_probe -> Feat_degrade_nf.Biz_probeResult: "负责 BIZ-101→OUT-101 映射"
Feat_degrade_nf.Cvt_probe -> Feat_degrade_nf.Pod_alert: "负责 BIZ-101→POD-101 映射"
Feat_knowledge_f.In_material -> Feat_knowledge_f.Biz_candidate: "转换为候选对象"
Feat_knowledge_f.Biz_candidate -> Feat_knowledge_f.Pod_document: "登记为文档实体"
Feat_knowledge_f.Pod_document -> Feat_knowledge_f.Dao_registry: "写入文档标识"
Feat_knowledge_f.Dao_registry -> Feat_knowledge_f.Out_knowledgeStatus: "查询状态"
Feat_knowledge_f.Cvt_material -> Feat_knowledge_f.Biz_candidate: "负责 素材→BIZ-201 映射"
Feat_knowledge_f.Cvt_material -> Feat_knowledge_f.Pod_document: "负责 BIZ-201→POD-201 映射"
`;case`proc-local`:return`direction: down

`;case`proc-prod`:return`direction: down

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

Feat_answer_f.Us_ask -> Feat_answer_f.Us_lowConfidence: "[...]"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.Us_ask: "持久化工单"
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

Feat_answer_f.Us_ask -> Feat_answer_f.Us_lowConfidence: "[...]"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.Us_ask: "持久化工单"
Feat_answer_f.Us_ask -> Feat_answer_f.F_answer: "要求"
Feat_answer_f.Us_lowConfidence -> Feat_answer_f.F_retrieval: "要求"
`;case`chain001F-i-001`:return`direction: down

Feat_answer_fUs_askI_001: {
  label: "I-001 阶段性目标 · 取得可靠候选知识"

  St_001_pending: {
    label: "S-001 待检索"
  }
  St_001_normalizing: {
    label: "S-002 归一化中"
  }
  St_001_searching: {
    label: "S-003 检索中"
  }
  St_001_got: {
    label: "S-004 已取得候选"
  }
  I_001_1: {
    label: "I-001-1 归一化提问"
  }
  I_001_2: {
    label: "I-001-2 检索候选知识"
  }
  I_001_3: {
    label: "I-001-3 候选排序与择优"
  }
}

Feat_answer_fUs_askI_001.St_001_pending -> Feat_answer_fUs_askI_001.St_001_normalizing: "收到企业微信提问"
Feat_answer_fUs_askI_001.St_001_normalizing -> Feat_answer_fUs_askI_001.St_001_searching: "归一化完成"
Feat_answer_fUs_askI_001.St_001_searching -> Feat_answer_fUs_askI_001.St_001_got: "检索返回候选条目"
`;case`chain001F-i-002`:return`direction: down

Feat_answer_fUs_askI_002: {
  label: "I-002 阶段性目标 · 判定可否自动答复"

  St_002_pending: {
    label: "S-005 待校验"
  }
  St_002_checking: {
    label: "S-006 校验中"
  }
  St_002_passed: {
    label: "S-007 校验通过"
  }
  St_002_failed: {
    label: "S-008 置信度不足"
  }
  I_002_1: {
    label: "I-002-1 置信度校验"
  }
}

Feat_answer_fUs_askI_002.St_002_pending -> Feat_answer_fUs_askI_002.St_002_checking: "进入回复策略"
Feat_answer_fUs_askI_002.St_002_checking -> Feat_answer_fUs_askI_002.St_002_passed: "置信度达标"
Feat_answer_fUs_askI_002.St_002_checking -> Feat_answer_fUs_askI_002.St_002_failed: "置信度不足，转 US-002"
`;case`chain001F-i-003`:return`direction: down

Feat_answer_fUs_askI_003: {
  label: "I-003 阶段性目标 · 生成并下发答复"

  St_003_pending: {
    label: "S-009 待生成"
  }
  St_003_composing: {
    label: "S-010 生成中"
  }
  St_003_delivering: {
    label: "S-011 下发中"
  }
  St_003_answered: {
    label: "S-012 已答复"
  }
  I_003_1: {
    label: "I-003-1 生成答复"
  }
  I_003_2: {
    label: "I-003-2 下发答复"
  }
}

Feat_answer_fUs_askI_003.St_003_pending -> Feat_answer_fUs_askI_003.St_003_composing: "校验通过"
Feat_answer_fUs_askI_003.St_003_composing -> Feat_answer_fUs_askI_003.St_003_delivering: "答复正文就绪"
Feat_answer_fUs_askI_003.St_003_delivering -> Feat_answer_fUs_askI_003.St_003_answered: "企业微信回传成功"
`;case`chain001F-i-011`:return`direction: down

Feat_answer_fUs_lowConfidenceI_011: {
  label: "I-011 阶段性目标 · 判定进入人工路径"

  St_011_pending: {
    label: "S-101 待判定"
  }
  St_011_judging: {
    label: "S-102 判定中"
  }
  St_011_escalated: {
    label: "S-103 已转人工"
  }
  I_011_1: {
    label: "I-011-1 判定转人工"
  }
}

Feat_answer_fUs_lowConfidenceI_011.St_011_pending -> Feat_answer_fUs_lowConfidenceI_011.St_011_judging: "置信度不足触发"
Feat_answer_fUs_lowConfidenceI_011.St_011_judging -> Feat_answer_fUs_lowConfidenceI_011.St_011_escalated: "确认无可靠候选"
`;case`chain001F-i-012`:return`direction: down

Feat_answer_fUs_lowConfidenceI_012: {
  label: "I-012 阶段性目标 · 生成工单并告知等待"

  St_012_pending: {
    label: "S-104 待建单"
  }
  St_012_ticketing: {
    label: "S-105 建单中"
  }
  St_012_notified: {
    label: "S-106 已告知等待"
  }
  St_012_answered: {
    label: "S-107 人工已接管"
  }
  I_012_1: {
    label: "I-012-1 创建人工工单"
  }
  I_012_2: {
    label: "I-012-2 告知客户等待"
  }
}

Feat_answer_fUs_lowConfidenceI_012.St_012_pending -> Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing: "判定已转人工"
Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing -> Feat_answer_fUs_lowConfidenceI_012.St_012_notified: "工单创建完成"
Feat_answer_fUs_lowConfidenceI_012.St_012_notified -> Feat_answer_fUs_lowConfidenceI_012.St_012_answered: "人工接手"
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

Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Us_ragTimeout: "提交发布判定"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Us_llmDown: "读取告警快照"
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

Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Us_ragTimeout: "提交发布判定"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Us_llmDown: "读取告警快照"
Feat_degrade_nf.Us_kbEmpty -> Feat_degrade_nf.Nf_kbEmpty: "要求"
Feat_degrade_nf.Us_ragTimeout -> Feat_degrade_nf.Nf_ragTimeout: "要求"
Feat_degrade_nf.Us_llmDown -> Feat_degrade_nf.Nf_llmDown: "要求"
`;case`chain001NF-i-111`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_111: {
  label: "I-111 阶段性目标 · 读出条目数并判定空库"

  St_111_pending: {
    label: "S-111 待读取"
  }
  St_111_counting: {
    label: "S-112 读取中"
  }
  St_111_empty: {
    label: "S-113 判定为空库"
  }
  St_111_ready: {
    label: "S-114 条目正常"
  }
  I_111_1: {
    label: "I-111-1 读取条目数"
  }
  I_111_2: {
    label: "I-111-2 判定零条场景"
  }
}

Feat_degrade_nfUs_kbEmptyI_111.St_111_pending -> Feat_degrade_nfUs_kbEmptyI_111.St_111_counting: "运营人员发起查询"
Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -> Feat_degrade_nfUs_kbEmptyI_111.St_111_empty: "条目数为 0"
Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -> Feat_degrade_nfUs_kbEmptyI_111.St_111_ready: "条目数大于 0"
`;case`chain001NF-i-112`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_112: {
  label: "I-112 阶段性目标 · 把空库显式呈现出来"

  St_112_pending: {
    label: "S-115 待呈现"
  }
  St_112_rendering: {
    label: "S-116 渲染中"
  }
  St_112_shown: {
    label: "S-117 已显式提示"
  }
  I_112_1: {
    label: "I-112-1 渲染空库提示"
  }
}

Feat_degrade_nfUs_kbEmptyI_112.St_112_pending -> Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering: "判定为空库"
Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering -> Feat_degrade_nfUs_kbEmptyI_112.St_112_shown: "提示已渲染"
`;case`chain001NF-i-121`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_121: {
  label: "I-121 阶段性目标 · 计时并判定超时"

  St_121_pending: {
    label: "S-121 待计时"
  }
  St_121_waiting: {
    label: "S-122 等待响应"
  }
  St_121_timedOut: {
    label: "S-123 判定超时"
  }
  St_121_returned: {
    label: "S-124 按时返回"
  }
  I_121_1: {
    label: "I-121-1 启动超时计时"
  }
  I_121_2: {
    label: "I-121-2 判定超时"
  }
}

Feat_degrade_nfUs_ragTimeoutI_121.St_121_pending -> Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting: "发起检索并启动计时"
Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -> Feat_degrade_nfUs_ragTimeoutI_121.St_121_timedOut: "超过 8 秒未返回"
Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -> Feat_degrade_nfUs_ragTimeoutI_121.St_121_returned: "8 秒内返回候选"
`;case`chain001NF-i-122`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_122: {
  label: "I-122 阶段性目标 · 告知客户系统在处理"

  St_122_pending: {
    label: "S-125 待提示"
  }
  St_122_notifying: {
    label: "S-126 提示中"
  }
  St_122_notified: {
    label: "S-127 已告知处理中"
  }
  I_122_1: {
    label: "I-122-1 下发处理中提示"
  }
}

Feat_degrade_nfUs_ragTimeoutI_122.St_122_pending -> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying: "判定超时"
Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying -> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notified: "提示已下发"
`;case`chain001NF-i-131`:return`direction: down

Feat_degrade_nfUs_llmDownI_131: {
  label: "I-131 阶段性目标 · 识别模型不可用并转人工"

  St_131_pending: {
    label: "S-131 待调用"
  }
  St_131_calling: {
    label: "S-132 调用中"
  }
  St_131_failed: {
    label: "S-133 模型不可用"
  }
  St_131_ok: {
    label: "S-134 调用成功"
  }
  I_131_1: {
    label: "I-131-1 判定调用结果"
  }
}

Feat_degrade_nfUs_llmDownI_131.St_131_pending -> Feat_degrade_nfUs_llmDownI_131.St_131_calling: "发起模型调用"
Feat_degrade_nfUs_llmDownI_131.St_131_calling -> Feat_degrade_nfUs_llmDownI_131.St_131_failed: "调用失败或返回异常"
Feat_degrade_nfUs_llmDownI_131.St_131_calling -> Feat_degrade_nfUs_llmDownI_131.St_131_ok: "调用正常返回"
`;case`chain001NF-i-132`:return`direction: down

Feat_degrade_nfUs_llmDownI_132: {
  label: "I-132 阶段性目标 · 建单并告知等待"

  St_132_pending: {
    label: "S-135 待建单"
  }
  St_132_ticketing: {
    label: "S-136 建单中"
  }
  St_132_notified: {
    label: "S-137 已告知等待"
  }
  St_132_handedOff: {
    label: "S-138 人工已接管"
  }
  I_132_1: {
    label: "I-132-1 生成人工工单"
  }
  I_132_2: {
    label: "I-132-2 告知等待人工"
  }
}

Feat_degrade_nfUs_llmDownI_132.St_132_pending -> Feat_degrade_nfUs_llmDownI_132.St_132_ticketing: "模型判定不可用"
Feat_degrade_nfUs_llmDownI_132.St_132_ticketing -> Feat_degrade_nfUs_llmDownI_132.St_132_notified: "工单创建完成"
Feat_degrade_nfUs_llmDownI_132.St_132_notified -> Feat_degrade_nfUs_llmDownI_132.St_132_handedOff: "人工接手"
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

Feat_knowledge_f.Us_scan -> Feat_knowledge_f.Us_govern: "[...]"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_scan: "触发扫描"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_alert: "[...]"
Feat_knowledge_f.Us_alert -> Feat_knowledge_f.Us_govern: "晋升或下线"
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

Feat_knowledge_f.Us_scan -> Feat_knowledge_f.Us_govern: "[...]"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_scan: "触发扫描"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.Us_alert: "[...]"
Feat_knowledge_f.Us_alert -> Feat_knowledge_f.Us_govern: "晋升或下线"
Feat_knowledge_f.Us_scan -> Feat_knowledge_f.F_ingest: "要求"
Feat_knowledge_f.Us_govern -> Feat_knowledge_f.F_govern: "要求"
Feat_knowledge_f.Us_alert -> Feat_knowledge_f.F_govern: "要求"
`;case`chain002F-i-211`:return`direction: down

Feat_knowledge_fUs_scanI_211: {
  label: "I-211 阶段性目标 · 素材入库并产出候选"

  St_211_pending: {
    label: "S-211 待接入"
  }
  St_211_registering: {
    label: "S-212 登记中"
  }
  St_211_scanning: {
    label: "S-213 扫描中"
  }
  St_211_submitted: {
    label: "S-214 已提交候选"
  }
  I_211_1: {
    label: "I-211-1 登记素材"
  }
  I_211_2: {
    label: "I-211-2 抽取候选知识"
  }
  I_211_3: {
    label: "I-211-3 提交候选"
  }
}

Feat_knowledge_fUs_scanI_211.St_211_pending -> Feat_knowledge_fUs_scanI_211.St_211_registering: "上传素材"
Feat_knowledge_fUs_scanI_211.St_211_registering -> Feat_knowledge_fUs_scanI_211.St_211_scanning: "登记完成"
Feat_knowledge_fUs_scanI_211.St_211_scanning -> Feat_knowledge_fUs_scanI_211.St_211_submitted: "候选已抽取并提交"
`;case`chain002F-i-221`:return`direction: down

Feat_knowledge_fUs_governI_221: {
  label: "I-221 阶段性目标 · 审阅决策并晋升"

  St_221_pending: {
    label: "S-221 待审阅"
  }
  St_221_reviewing: {
    label: "S-222 审阅中"
  }
  St_221_decided: {
    label: "S-223 已决策"
  }
  St_221_promoted: {
    label: "S-224 已晋升可检索"
  }
  St_221_rejected: {
    label: "S-225 已驳回退回"
  }
  I_221_1: {
    label: "I-221-1 人工审阅候选"
  }
  I_221_2: {
    label: "I-221-2 记录决策"
  }
  I_221_3: {
    label: "I-221-3 晋升知识"
  }
}

Feat_knowledge_fUs_governI_221.St_221_pending -> Feat_knowledge_fUs_governI_221.St_221_reviewing: "候选提交到治理"
Feat_knowledge_fUs_governI_221.St_221_reviewing -> Feat_knowledge_fUs_governI_221.St_221_decided: "运营人员记录决策"
Feat_knowledge_fUs_governI_221.St_221_decided -> Feat_knowledge_fUs_governI_221.St_221_promoted: "批准晋升"
Feat_knowledge_fUs_governI_221.St_221_decided -> Feat_knowledge_fUs_governI_221.St_221_rejected: "驳回退回"
`;case`chain002F-i-231`:return`direction: down

Feat_knowledge_fUs_alertI_231: {
  label: "I-231 阶段性目标 · 巡检并判定新鲜度"

  St_231_pending: {
    label: "S-231 待巡检"
  }
  St_231_probing: {
    label: "S-232 巡检中"
  }
  St_231_fresh: {
    label: "S-233 新鲜度正常"
  }
  St_231_stale: {
    label: "S-234 新鲜度异常"
  }
  I_231_1: {
    label: "I-231-1 巡检数据集状态"
  }
  I_231_2: {
    label: "I-231-2 判定新鲜度异常"
  }
}

Feat_knowledge_fUs_alertI_231.St_231_pending -> Feat_knowledge_fUs_alertI_231.St_231_probing: "到达巡检周期"
Feat_knowledge_fUs_alertI_231.St_231_probing -> Feat_knowledge_fUs_alertI_231.St_231_fresh: "全部在阈值内"
Feat_knowledge_fUs_alertI_231.St_231_probing -> Feat_knowledge_fUs_alertI_231.St_231_stale: "存在超阈值条目"
`;case`chain002F-i-232`:return`direction: down

Feat_knowledge_fUs_alertI_232: {
  label: "I-232 阶段性目标 · 上报告警并呈现"

  St_232_pending: {
    label: "S-235 待上报"
  }
  St_232_reporting: {
    label: "S-236 上报中"
  }
  St_232_listed: {
    label: "S-237 控制台已列出"
  }
  St_232_fixed: {
    label: "S-238 已修复下线"
  }
  I_232_1: {
    label: "I-232-1 上报告警"
  }
}

Feat_knowledge_fUs_alertI_232.St_232_pending -> Feat_knowledge_fUs_alertI_232.St_232_reporting: "判定新鲜度异常"
Feat_knowledge_fUs_alertI_232.St_232_reporting -> Feat_knowledge_fUs_alertI_232.St_232_listed: "告警已落库并展示"
Feat_knowledge_fUs_alertI_232.St_232_listed -> Feat_knowledge_fUs_alertI_232.St_232_fixed: "运营人员修复后下线"
`;case`pano-src-001F`:return`direction: down

Feat_answer_fUs_ask: {
  label: "US-001 客户提问获得专业答复"
  shape: document

  I_001: {
    label: "I-001 阶段性目标 · 取得可靠候选知识"

    Ui_001: {
      label: "UI-001 会话输入"

      Src_001: {
        label: "SRC-001 微信客服回调入口"
      }
      Src_002: {
        label: "SRC-002 应答编排器"
      }
      Src_005: {
        label: "SRC-005 RAGFlow 知识检索"
      }
    }
  }
  I_003: {
    label: "I-003 阶段性目标 · 生成并下发答复"

    Ui_003Src_003: {
      label: "SRC-003 知识应答循环"
    }
    Ui_003Src_007: {
      label: "SRC-007 本地存储"
    }
  }
  I_002: {
    label: "I-002 阶段性目标 · 判定可否自动答复"

    Ui_002Src_004: {
      label: "SRC-004 回复策略"
    }
  }
}
Feat_answer_fUs_lowConfidence: {
  label: "US-002 答不准时转人工而非硬答"
  shape: document

  I_012Ui_012Src_006: {
    label: "SRC-006 转人工服务"
  }
}

Feat_answer_fUs_ask.I_001.Ui_001.Src_001 -> Feat_answer_fUs_ask.I_001.Ui_001.Src_002: "分发归一化消息"
Feat_answer_fUs_ask.I_001.Ui_001.Src_002 -> Feat_answer_fUs_ask.I_003.Ui_003Src_003: "请求应答"
Feat_answer_fUs_ask.I_003.Ui_003Src_003 -> Feat_answer_fUs_ask.I_001.Ui_001.Src_005: "检索候选知识"
Feat_answer_fUs_ask.I_003.Ui_003Src_003 -> Feat_answer_fUs_ask.I_002.Ui_002Src_004: "校验置信度"
Feat_answer_fUs_ask.I_001.Ui_001.Src_002 -> Feat_answer_fUs_lowConfidence.I_012Ui_012Src_006: "低置信度时转人工"
Feat_answer_fUs_lowConfidence.I_012Ui_012Src_006 -> Feat_answer_fUs_ask.I_003.Ui_003Src_007: "持久化工单"
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
`;case`erm001F-ticket`:return`direction: down

Feat_answer_fPod_ticket: {
  label: "POD-001 工单持久化实体"
}
Feat_answer_fDao_store: {
  label: "DAO-001 本地存储访问"
  shape: cylinder
}

Feat_answer_fPod_ticket -> Feat_answer_fDao_store: "写入工单"
`;case`pano-src-001NF`:return`direction: down

Feat_degrade_nfUs_kbEmpty: {
  label: "US-101 知识库为空时运营人员能看见"
  shape: document

  I_111: {
    label: "I-111 阶段性目标 · 读出条目数并判定空库"

    Ui_111: {
      label: "UI-111 状态查询"

      Src_101: {
        label: "SRC-101 集成状态路由"
      }
      Src_104: {
        label: "SRC-104 RAGFlow 生命周期探针"
      }
    }
  }
  I_112: {
    label: "I-112 阶段性目标 · 把空库显式呈现出来"

    Ui_112Src_103: {
      label: "SRC-103 知识告警"
    }
    Ui_112Src_105: {
      label: "SRC-105 运营人员控制台"
    }
  }
}
Feat_degrade_nfUs_ragTimeout: {
  label: "US-102 RAGFlow 超时时客户不被静默等待"
  shape: document

  I_122Ui_122Src_102: {
    label: "SRC-102 评测闸门"
  }
}
Feat_degrade_nfUs_llmDown: {
  label: "US-103 LLM 不可用时转人工而非静默失败"
  shape: document

  I_132Ui_132Src_106: {
    label: "SRC-106 告警状态存储"
  }
}

Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_101 -> Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_104: "探测数据集状态"
Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_101 -> Feat_degrade_nfUs_kbEmpty.I_112.Ui_112Src_103: "查询空库告警"
Feat_degrade_nfUs_kbEmpty.I_112.Ui_112Src_103 -> Feat_degrade_nfUs_ragTimeout.I_122Ui_122Src_102: "提交发布判定"
Feat_degrade_nfUs_ragTimeout.I_122Ui_122Src_102 -> Feat_degrade_nfUs_llmDown.I_132Ui_132Src_106: "读取告警快照"
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
`;case`erm001NF-alert`:return`direction: down

Feat_degrade_nfPod_alert: {
  label: "POD-101 告警持久化实体"
}
Feat_degrade_nfDao_alert: {
  label: "DAO-101 告警存储访问"
  shape: cylinder
}

Feat_degrade_nfPod_alert -> Feat_degrade_nfDao_alert: "写入告警"
`;case`pano-src-002F`:return`direction: down

Feat_knowledge_fUs_govern: {
  label: "US-202 候选知识经我决策后才对外可见"
  shape: document

  I_221Ui_221Src_202: {
    label: "SRC-202 知识库路由"
  }
  I_221Ui_221Src_207: {
    label: "SRC-207 知识治理"
  }
  I_221Ui_221Src_205: {
    label: "SRC-205 文档登记簿"
  }
}
Feat_knowledge_fUs_scan: {
  label: "US-201 素材入库后自动进入候选知识"
  shape: document

  I_211Ui_211: {
    label: "UI-211 素材上传"

    Src_201: {
      label: "SRC-201 素材路由"
    }
    Src_204: {
      label: "SRC-204 素材批处理"
    }
    Src_206: {
      label: "SRC-206 知识扫描"
    }
    Src_203: {
      label: "SRC-203 素材服务"
    }
  }
}
Feat_knowledge_fUs_alert: {
  label: "US-203 知识陈旧时我能收到提示"
  shape: document

  I_231: {
    label: "I-231 阶段性目标 · 巡检并判定新鲜度"

    Ui_231Src_208: {
      label: "SRC-208 知识同步"
    }
  }
  I_232: {
    label: "I-232 阶段性目标 · 上报告警并呈现"

    Ui_232Src_209: {
      label: "SRC-209 知识生命周期视图"
    }
  }
}

Feat_knowledge_fUs_scan.I_211Ui_211.Src_201 -> Feat_knowledge_fUs_scan.I_211Ui_211.Src_203: "接收素材"
Feat_knowledge_fUs_scan.I_211Ui_211.Src_204 -> Feat_knowledge_fUs_scan.I_211Ui_211.Src_203: "批量接入"
Feat_knowledge_fUs_scan.I_211Ui_211.Src_206 -> Feat_knowledge_fUs_govern.I_221Ui_221Src_207: "提交候选"
Feat_knowledge_fUs_govern.I_221Ui_221Src_202 -> Feat_knowledge_fUs_scan.I_211Ui_211.Src_206: "触发扫描"
Feat_knowledge_fUs_scan.I_211Ui_211.Src_203 -> Feat_knowledge_fUs_govern.I_221Ui_221Src_205: "登记文档"
Feat_knowledge_fUs_govern.I_221Ui_221Src_207 -> Feat_knowledge_fUs_alert.I_231.Ui_231Src_208: "批准后推送"
Feat_knowledge_fUs_alert.I_231.Ui_231Src_208 -> Feat_knowledge_fUs_alert.I_232.Ui_232Src_209: "更新生命周期"
Feat_knowledge_fUs_alert.I_232.Ui_232Src_209 -> Feat_knowledge_fUs_govern.I_221Ui_221Src_205: "晋升或下线"
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
`;case`erm002F-document`:return`direction: down

Feat_knowledge_fPod_document: {
  label: "POD-201 文档登记实体"
}
Feat_knowledge_fDao_registry: {
  label: "DAO-201 文档登记访问"
  shape: cylinder
}

Feat_knowledge_fPod_document -> Feat_knowledge_fDao_registry: "写入文档标识"
`;case`ui001F-001`:return`direction: down

Feat_answer_fUs_askI_001Ui_001: {
  label: "UI-001 会话输入"

  Ui_001_info_1: {
    label: "UI-001-信息设计-001 提问输入信息"
  }
  Ui_001_act_1: {
    label: "UI-001-交互设计-001 提交提问"
  }
}
`;case`ui001F-001-info-1`:return`direction: down

Feat_answer_fUs_askI_001Ui_001: {
  label: "UI-001 会话输入"

  Ui_001_info_1: {
    label: "UI-001-信息设计-001 提问输入信息"
  }
}
`;case`ui001F-001-act-1`:return`direction: down

Feat_answer_fUs_askI_001Ui_001: {
  label: "UI-001 会话输入"

  Ui_001_act_1: {
    label: "UI-001-交互设计-001 提交提问"
  }
}
`;case`ui001F-002`:return`direction: down

Feat_answer_fUs_askI_002Ui_002: {
  label: "UI-002 判定反馈"

  Ui_002_info_1: {
    label: "UI-002-信息设计-001 判定中提示"
  }
  Ui_002_act_1: {
    label: "UI-002-交互设计-001 等待免刷新"
  }
}
`;case`ui001F-002-info-1`:return`direction: down

Feat_answer_fUs_askI_002Ui_002: {
  label: "UI-002 判定反馈"

  Ui_002_info_1: {
    label: "UI-002-信息设计-001 判定中提示"
  }
}
`;case`ui001F-002-act-1`:return`direction: down

Feat_answer_fUs_askI_002Ui_002: {
  label: "UI-002 判定反馈"

  Ui_002_act_1: {
    label: "UI-002-交互设计-001 等待免刷新"
  }
}
`;case`ui001F-003`:return`direction: down

Feat_answer_fUs_askI_003Ui_003: {
  label: "UI-003 答复呈现"

  Ui_003_info_1: {
    label: "UI-003-信息设计-001 答复正文字段"
  }
  Ui_003_info_2: {
    label: "UI-003-信息设计-002 知识来源条目"
  }
  Ui_003_act_1: {
    label: "UI-003-交互设计-001 答复同屏呈现"
  }
}
`;case`ui001F-003-info-1`:return`direction: down

Feat_answer_fUs_askI_003Ui_003: {
  label: "UI-003 答复呈现"

  Ui_003_info_1: {
    label: "UI-003-信息设计-001 答复正文字段"
  }
}
`;case`ui001F-003-info-2`:return`direction: down

Feat_answer_fUs_askI_003Ui_003: {
  label: "UI-003 答复呈现"

  Ui_003_info_2: {
    label: "UI-003-信息设计-002 知识来源条目"
  }
}
`;case`ui001F-003-act-1`:return`direction: down

Feat_answer_fUs_askI_003Ui_003: {
  label: "UI-003 答复呈现"

  Ui_003_act_1: {
    label: "UI-003-交互设计-001 答复同屏呈现"
  }
}
`;case`ui001F-011`:return`direction: down

Feat_answer_fUs_lowConfidenceI_011Ui_011: {
  label: "UI-011 转接提示"

  Ui_011_info_1: {
    label: "UI-011-信息设计-001 转接中提示"
  }
  Ui_011_act_1: {
    label: "UI-011-交互设计-001 转接反馈"
  }
}
`;case`ui001F-011-info-1`:return`direction: down

Feat_answer_fUs_lowConfidenceI_011Ui_011: {
  label: "UI-011 转接提示"

  Ui_011_info_1: {
    label: "UI-011-信息设计-001 转接中提示"
  }
}
`;case`ui001F-011-act-1`:return`direction: down

Feat_answer_fUs_lowConfidenceI_011Ui_011: {
  label: "UI-011 转接提示"

  Ui_011_act_1: {
    label: "UI-011-交互设计-001 转接反馈"
  }
}
`;case`ui001F-012`:return`direction: down

Feat_answer_fUs_lowConfidenceI_012Ui_012: {
  label: "UI-012 转人工告知"

  Ui_012_info_1: {
    label: "UI-012-信息设计-001 等待告知信息"
  }
  Ui_012_act_1: {
    label: "UI-012-交互设计-001 工单状态查看"
  }
}
`;case`ui001F-012-info-1`:return`direction: down

Feat_answer_fUs_lowConfidenceI_012Ui_012: {
  label: "UI-012 转人工告知"

  Ui_012_info_1: {
    label: "UI-012-信息设计-001 等待告知信息"
  }
}
`;case`ui001F-012-act-1`:return`direction: down

Feat_answer_fUs_lowConfidenceI_012Ui_012: {
  label: "UI-012 转人工告知"

  Ui_012_act_1: {
    label: "UI-012-交互设计-001 工单状态查看"
  }
}
`;case`ui001NF-111`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_111Ui_111: {
  label: "UI-111 状态查询"

  Ui_111_info_1: {
    label: "UI-111-信息设计-001 条目数展示"
  }
  Ui_111_act_1: {
    label: "UI-111-交互设计-001 发起查询"
  }
}
`;case`ui001NF-111-info-1`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_111Ui_111: {
  label: "UI-111 状态查询"

  Ui_111_info_1: {
    label: "UI-111-信息设计-001 条目数展示"
  }
}
`;case`ui001NF-111-act-1`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_111Ui_111: {
  label: "UI-111 状态查询"

  Ui_111_act_1: {
    label: "UI-111-交互设计-001 发起查询"
  }
}
`;case`ui001NF-112`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_112Ui_112: {
  label: "UI-112 空库提示呈现"

  Ui_112_info_1: {
    label: "UI-112-信息设计-001 空库提示信息"
  }
  Ui_112_act_1: {
    label: "UI-112-交互设计-001 控制台查看"
  }
}
`;case`ui001NF-112-info-1`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_112Ui_112: {
  label: "UI-112 空库提示呈现"

  Ui_112_info_1: {
    label: "UI-112-信息设计-001 空库提示信息"
  }
}
`;case`ui001NF-112-act-1`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_112Ui_112: {
  label: "UI-112 空库提示呈现"

  Ui_112_act_1: {
    label: "UI-112-交互设计-001 控制台查看"
  }
}
`;case`ui001NF-121`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_121Ui_121: {
  label: "UI-121 等待反馈"

  Ui_121_info_1: {
    label: "UI-121-信息设计-001 等待中提示"
  }
  Ui_121_act_1: {
    label: "UI-121-交互设计-001 免手动刷新"
  }
}
`;case`ui001NF-121-info-1`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_121Ui_121: {
  label: "UI-121 等待反馈"

  Ui_121_info_1: {
    label: "UI-121-信息设计-001 等待中提示"
  }
}
`;case`ui001NF-121-act-1`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_121Ui_121: {
  label: "UI-121 等待反馈"

  Ui_121_act_1: {
    label: "UI-121-交互设计-001 免手动刷新"
  }
}
`;case`ui001NF-122`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_122Ui_122: {
  label: "UI-122 处理中提示"

  Ui_122_info_1: {
    label: "UI-122-信息设计-001 处理中提示信息"
  }
  Ui_122_act_1: {
    label: "UI-122-交互设计-001 提示下发"
  }
}
`;case`ui001NF-122-info-1`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_122Ui_122: {
  label: "UI-122 处理中提示"

  Ui_122_info_1: {
    label: "UI-122-信息设计-001 处理中提示信息"
  }
}
`;case`ui001NF-122-act-1`:return`direction: down

Feat_degrade_nfUs_ragTimeoutI_122Ui_122: {
  label: "UI-122 处理中提示"

  Ui_122_act_1: {
    label: "UI-122-交互设计-001 提示下发"
  }
}
`;case`ui001NF-131`:return`direction: down

Feat_degrade_nfUs_llmDownI_131Ui_131: {
  label: "UI-131 调用反馈"

  Ui_131_info_1: {
    label: "UI-131-信息设计-001 调用异常提示"
  }
  Ui_131_act_1: {
    label: "UI-131-交互设计-001 异常反馈"
  }
}
`;case`ui001NF-131-info-1`:return`direction: down

Feat_degrade_nfUs_llmDownI_131Ui_131: {
  label: "UI-131 调用反馈"

  Ui_131_info_1: {
    label: "UI-131-信息设计-001 调用异常提示"
  }
}
`;case`ui001NF-131-act-1`:return`direction: down

Feat_degrade_nfUs_llmDownI_131Ui_131: {
  label: "UI-131 调用反馈"

  Ui_131_act_1: {
    label: "UI-131-交互设计-001 异常反馈"
  }
}
`;case`ui001NF-132`:return`direction: down

Feat_degrade_nfUs_llmDownI_132Ui_132: {
  label: "UI-132 转人工告知"

  Ui_132_info_1: {
    label: "UI-132-信息设计-001 等待告知信息"
  }
  Ui_132_act_1: {
    label: "UI-132-交互设计-001 告警查看"
  }
}
`;case`ui001NF-132-info-1`:return`direction: down

Feat_degrade_nfUs_llmDownI_132Ui_132: {
  label: "UI-132 转人工告知"

  Ui_132_info_1: {
    label: "UI-132-信息设计-001 等待告知信息"
  }
}
`;case`ui001NF-132-act-1`:return`direction: down

Feat_degrade_nfUs_llmDownI_132Ui_132: {
  label: "UI-132 转人工告知"

  Ui_132_act_1: {
    label: "UI-132-交互设计-001 告警查看"
  }
}
`;case`ui002F-211`:return`direction: down

Feat_knowledge_fUs_scanI_211Ui_211: {
  label: "UI-211 素材上传"

  Ui_211_info_1: {
    label: "UI-211-信息设计-001 上传表单信息"
  }
  Ui_211_act_1: {
    label: "UI-211-交互设计-001 上传提交"
  }
}
`;case`ui002F-211-info-1`:return`direction: down

Feat_knowledge_fUs_scanI_211Ui_211: {
  label: "UI-211 素材上传"

  Ui_211_info_1: {
    label: "UI-211-信息设计-001 上传表单信息"
  }
}
`;case`ui002F-211-act-1`:return`direction: down

Feat_knowledge_fUs_scanI_211Ui_211: {
  label: "UI-211 素材上传"

  Ui_211_act_1: {
    label: "UI-211-交互设计-001 上传提交"
  }
}
`;case`ui002F-221`:return`direction: down

Feat_knowledge_fUs_governI_221Ui_221: {
  label: "UI-221 审阅工作台"

  Ui_221_info_1: {
    label: "UI-221-信息设计-001 候选条目列表"
  }
  Ui_221_info_2: {
    label: "UI-221-信息设计-002 决策记录字段"
  }
  Ui_221_act_1: {
    label: "UI-221-交互设计-001 批准驳回操作"
  }
}
`;case`ui002F-221-info-1`:return`direction: down

Feat_knowledge_fUs_governI_221Ui_221: {
  label: "UI-221 审阅工作台"

  Ui_221_info_1: {
    label: "UI-221-信息设计-001 候选条目列表"
  }
}
`;case`ui002F-221-info-2`:return`direction: down

Feat_knowledge_fUs_governI_221Ui_221: {
  label: "UI-221 审阅工作台"

  Ui_221_info_2: {
    label: "UI-221-信息设计-002 决策记录字段"
  }
}
`;case`ui002F-221-act-1`:return`direction: down

Feat_knowledge_fUs_governI_221Ui_221: {
  label: "UI-221 审阅工作台"

  Ui_221_act_1: {
    label: "UI-221-交互设计-001 批准驳回操作"
  }
}
`;case`ui002F-231`:return`direction: down

Feat_knowledge_fUs_alertI_231Ui_231: {
  label: "UI-231 巡检状态"

  Ui_231_info_1: {
    label: "UI-231-信息设计-001 新鲜度状态"
  }
  Ui_231_act_1: {
    label: "UI-231-交互设计-001 触发巡检"
  }
}
`;case`ui002F-231-info-1`:return`direction: down

Feat_knowledge_fUs_alertI_231Ui_231: {
  label: "UI-231 巡检状态"

  Ui_231_info_1: {
    label: "UI-231-信息设计-001 新鲜度状态"
  }
}
`;case`ui002F-231-act-1`:return`direction: down

Feat_knowledge_fUs_alertI_231Ui_231: {
  label: "UI-231 巡检状态"

  Ui_231_act_1: {
    label: "UI-231-交互设计-001 触发巡检"
  }
}
`;case`ui002F-232`:return`direction: down

Feat_knowledge_fUs_alertI_232Ui_232: {
  label: "UI-232 告警呈现"

  Ui_232_info_1: {
    label: "UI-232-信息设计-001 告警列表"
  }
  Ui_232_act_1: {
    label: "UI-232-交互设计-001 告警处理"
  }
}
`;case`ui002F-232-info-1`:return`direction: down

Feat_knowledge_fUs_alertI_232Ui_232: {
  label: "UI-232 告警呈现"

  Ui_232_info_1: {
    label: "UI-232-信息设计-001 告警列表"
  }
}
`;case`ui002F-232-act-1`:return`direction: down

Feat_knowledge_fUs_alertI_232Ui_232: {
  label: "UI-232 告警呈现"

  Ui_232_act_1: {
    label: "UI-232-交互设计-001 告警处理"
  }
}
`;case`api001F-src001-1`:return`direction: down

Feat_answer_fUs_askI_001Ui_001Src_001: {
  label: "SRC-001 微信客服回调入口"

  Api_001: {
    label: "API-001 POST /wechat/callback 微信客服回调"
  }
}
`;case`api001F-src006-1`:return`direction: down

Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006: {
  label: "SRC-006 转人工服务"

  Api_002: {
    label: "API-002 GET /handoffs 工单列表"
  }
}
`;case`api001NF-src101-1`:return`direction: down

Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101: {
  label: "SRC-101 集成状态路由"

  Api_101: {
    label: "API-101 GET /integration/status 集成状态"
  }
}
`;case`api002F-src201-1`:return`direction: down

Feat_knowledge_fUs_scanI_211Ui_211Src_201: {
  label: "SRC-201 素材路由"

  Api_201: {
    label: "API-201 POST /materials 素材接入"
  }
}
`;case`api002F-src202-1`:return`direction: down

Feat_knowledge_fUs_governI_221Ui_221Src_202: {
  label: "SRC-202 知识库路由"

  Api_202: {
    label: "API-202 POST /knowledge/scan 知识扫描"
  }
}
`;case`api002F-src202-2`:return`direction: down

Feat_knowledge_fUs_governI_221Ui_221Src_202: {
  label: "SRC-202 知识库路由"

  Api_203: {
    label: "API-203 GET /knowledge/status 知识状态"
  }
}
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};
var e=e=>{switch(e){case`dfd001F-src001-1`:return`---
title: "SRC 环 · Feature-001-F · SRC-001-DFD-001 提问进入数据流"
---
graph LR
  Feat_answer_fUs_askI_001Ui_001Src_001@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
  Feat_answer_fIn_chatMessage@{ shape: rectangle, label: "IN-001 客户提问入参" }
  Feat_answer_fCvt_normalize@{ shape: rounded, label: "CVT-001 提问归一化转换器" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fUs_askI_001Ui_001Src_001 -. "\`解密产出 IN-001\`" .-> Feat_answer_fIn_chatMessage
  Feat_answer_fIn_chatMessage -. "\`归一化\`" .-> Feat_answer_fCvt_normalize
  Feat_answer_fCvt_normalize -. "\`转为 BIZ-001\`" .-> Feat_answer_fBiz_query
`;case`dfd001F-src002-1`:return`---
title: "SRC 环 · Feature-001-F · SRC-002-DFD-001 编排分发数据流"
---
graph LR
  Feat_answer_fUs_askI_001Ui_001Src_002@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fBiz_query -. "\`查询进入编排\`" .-> Feat_answer_fUs_askI_001Ui_001Src_002
  Feat_answer_fUs_askI_001Ui_001Src_002 -. "\`低置信度落工单\`" .-> Feat_answer_fPod_ticket
`;case`dfd001F-src003-1`:return`---
title: "SRC 环 · Feature-001-F · SRC-003-DFD-001 应答生成数据流"
---
graph LR
  Feat_answer_fUs_askI_003Ui_003Src_003@{ shape: rectangle, label: "SRC-003 知识应答循环" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fOut_answer@{ shape: rectangle, label: "OUT-001 答复出参视图" }
  Feat_answer_fBiz_query -. "\`候选进入应答循环\`" .-> Feat_answer_fUs_askI_003Ui_003Src_003
  Feat_answer_fUs_askI_003Ui_003Src_003 -. "\`组装 OUT-001\`" .-> Feat_answer_fOut_answer
`;case`dfd001F-src004-1`:return`---
title: "SRC 环 · Feature-001-F · SRC-004-DFD-001 置信度判定数据流"
---
graph LR
  Feat_answer_fUs_askI_002Ui_002Src_004@{ shape: rectangle, label: "SRC-004 回复策略" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fBiz_query -. "\`查询置信度判定\`" .-> Feat_answer_fUs_askI_002Ui_002Src_004
  Feat_answer_fUs_askI_002Ui_002Src_004 -. "\`不足时标记工单\`" .-> Feat_answer_fPod_ticket
`;case`dfd001F-src005-1`:return`---
title: "SRC 环 · Feature-001-F · SRC-005-DFD-001 检索数据流"
---
graph LR
  Feat_answer_fUs_askI_001Ui_001Src_005@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_answer_fBiz_query -. "\`发起检索\`" .-> Feat_answer_fUs_askI_001Ui_001Src_005
  Feat_answer_fUs_askI_001Ui_001Src_005 -. "\`请求 RAGFlow\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`返回候选\`" .-> Feat_answer_fUs_askI_001Ui_001Src_005
`;case`dfd001F-src006-1`:return`---
title: "SRC 环 · Feature-001-F · SRC-006-DFD-001 工单数据流"
---
graph LR
  Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006@{ shape: rectangle, label: "SRC-006 转人工服务" }
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fPod_ticket -. "\`工单数据\`" .-> Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006
  Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006 -. "\`写入工单\`" .-> Feat_answer_fDao_store
`;case`dfd001F-src007-1`:return`---
title: "SRC 环 · Feature-001-F · SRC-007-DFD-001 存储读写数据流"
---
graph LR
  Feat_answer_fUs_askI_003Ui_003Src_007@{ shape: rectangle, label: "SRC-007 本地存储" }
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fOut_answer@{ shape: rectangle, label: "OUT-001 答复出参视图" }
  Feat_answer_fPod_ticket -. "\`读取工单\`" .-> Feat_answer_fUs_askI_003Ui_003Src_007
  Feat_answer_fUs_askI_003Ui_003Src_007 -. "\`落盘\`" .-> Feat_answer_fDao_store
  Feat_answer_fDao_store -. "\`读出答复内容\`" .-> Feat_answer_fOut_answer
`;case`dfd001NF-src101-1`:return`---
title: "SRC 环 · Feature-001-NF · SRC-101-DFD-001 状态查询数据流"
---
graph LR
  Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101@{ shape: rectangle, label: "SRC-101 集成状态路由" }
  Feat_degrade_nfIn_probeQuery@{ shape: rectangle, label: "IN-101 状态探测入参" }
  Feat_degrade_nfOut_status@{ shape: rectangle, label: "OUT-101 状态出参视图" }
  Feat_degrade_nfIn_probeQuery -. "\`入参进入\`" .-> Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101
  Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101 -. "\`产出 OUT-101\`" .-> Feat_degrade_nfOut_status
`;case`dfd001NF-src102-1`:return`---
title: "SRC 环 · Feature-001-NF · SRC-102-DFD-001 发布判定数据流"
---
graph LR
  Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102@{ shape: rectangle, label: "SRC-102 评测闸门" }
  Feat_degrade_nfBiz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfBiz_probeResult -. "\`探测结论判定\`" .-> Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102
  Feat_degrade_nfUs_ragTimeoutI_122Ui_122Src_102 -. "\`异常转告警\`" .-> Feat_degrade_nfPod_alert
`;case`dfd001NF-src103-1`:return`---
title: "SRC 环 · Feature-001-NF · SRC-103-DFD-001 空库告警数据流"
---
graph LR
  Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103@{ shape: rectangle, label: "SRC-103 知识告警" }
  Feat_degrade_nfBiz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfBiz_probeResult -. "\`暴露空库\`" .-> Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103
  Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_103 -. "\`写入告警\`" .-> Feat_degrade_nfPod_alert
`;case`dfd001NF-src104-1`:return`---
title: "SRC 环 · Feature-001-NF · SRC-104-DFD-001 探针数据流"
---
graph LR
  Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104@{ shape: rectangle, label: "SRC-104 RAGFlow 生命周期探针" }
  Feat_degrade_nfBiz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 -. "\`探测数据集\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`返回结论\`" .-> Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104
  Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_104 -. "\`产出 BIZ-101\`" .-> Feat_degrade_nfBiz_probeResult
`;case`dfd001NF-src105-1`:return`---
title: "SRC 环 · Feature-001-NF · SRC-105-DFD-001 控制台渲染数据流"
---
graph LR
  Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105@{ shape: rectangle, label: "SRC-105 运营人员控制台" }
  Feat_degrade_nfOut_status@{ shape: rectangle, label: "OUT-101 状态出参视图" }
  Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1@{ shape: rounded, label: "UI-112-信息设计-001 空库提示信息" }
  Feat_degrade_nfOut_status -. "\`状态载荷\`" .-> Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105
  Feat_degrade_nfUs_kbEmptyI_112Ui_112Src_105 -. "\`呈现提示\`" .-> Feat_degrade_nfUs_kbEmptyI_112Ui_112Ui_112_info_1
`;case`dfd001NF-src106-1`:return`---
title: "SRC 环 · Feature-001-NF · SRC-106-DFD-001 告警快照数据流"
---
graph LR
  Feat_degrade_nfUs_llmDownI_132Ui_132Src_106@{ shape: rectangle, label: "SRC-106 告警状态存储" }
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfDao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  Feat_degrade_nfPod_alert -. "\`告警数据\`" .-> Feat_degrade_nfUs_llmDownI_132Ui_132Src_106
  Feat_degrade_nfUs_llmDownI_132Ui_132Src_106 -. "\`写入快照\`" .-> Feat_degrade_nfDao_alert
`;case`dfd002F-src201-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-201-DFD-001 素材接入数据流"
---
graph LR
  Feat_knowledge_fUs_scanI_211Ui_211Src_201@{ shape: rectangle, label: "SRC-201 素材路由" }
  Feat_knowledge_fIn_material@{ shape: rectangle, label: "IN-201 素材入参" }
  Feat_knowledge_fLane_opsActor_operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_knowledge_fLane_opsActor_operator -. "\`上传素材\`" .-> Feat_knowledge_fUs_scanI_211Ui_211Src_201
  Feat_knowledge_fUs_scanI_211Ui_211Src_201 -. "\`产出 IN-201\`" .-> Feat_knowledge_fIn_material
`;case`dfd002F-src202-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-202-DFD-001 知识状态数据流"
---
graph LR
  Feat_knowledge_fUs_governI_221Ui_221Src_202@{ shape: rectangle, label: "SRC-202 知识库路由" }
  Feat_knowledge_fDao_registry@{ shape: cylinder, label: "DAO-201 文档登记访问" }
  Feat_knowledge_fOut_knowledgeStatus@{ shape: rectangle, label: "OUT-201 知识状态出参视图" }
  Feat_knowledge_fDao_registry -. "\`读取登记\`" .-> Feat_knowledge_fUs_governI_221Ui_221Src_202
  Feat_knowledge_fUs_governI_221Ui_221Src_202 -. "\`产出 OUT-201\`" .-> Feat_knowledge_fOut_knowledgeStatus
`;case`dfd002F-src203-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-203-DFD-001 素材转换数据流"
---
graph LR
  Feat_knowledge_fUs_scanI_211Ui_211Src_203@{ shape: rectangle, label: "SRC-203 素材服务" }
  Feat_knowledge_fIn_material@{ shape: rectangle, label: "IN-201 素材入参" }
  Feat_knowledge_fCvt_material@{ shape: rounded, label: "CVT-201 素材转换器" }
  Feat_knowledge_fBiz_candidate@{ shape: rectangle, label: "BIZ-201 候选知识对象" }
  Feat_knowledge_fIn_material -. "\`入参校验\`" .-> Feat_knowledge_fUs_scanI_211Ui_211Src_203
  Feat_knowledge_fUs_scanI_211Ui_211Src_203 -. "\`交给转换\`" .-> Feat_knowledge_fCvt_material
  Feat_knowledge_fCvt_material -. "\`转为 BIZ-201\`" .-> Feat_knowledge_fBiz_candidate
`;case`dfd002F-src204-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-204-DFD-001 批量接入数据流"
---
graph LR
  Feat_knowledge_fUs_scanI_211Ui_211Src_204@{ shape: rectangle, label: "SRC-204 素材批处理" }
  Feat_knowledge_fLane_opsActor_operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_knowledge_fUs_scanI_211Ui_211Src_203@{ shape: rectangle, label: "SRC-203 素材服务" }
  Feat_knowledge_fLane_opsActor_operator -. "\`批量上传\`" .-> Feat_knowledge_fUs_scanI_211Ui_211Src_204
  Feat_knowledge_fUs_scanI_211Ui_211Src_204 -. "\`逐条接入\`" .-> Feat_knowledge_fUs_scanI_211Ui_211Src_203
`;case`dfd002F-src205-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-205-DFD-001 文档登记数据流"
---
graph LR
  Feat_knowledge_fUs_governI_221Ui_221Src_205@{ shape: rectangle, label: "SRC-205 文档登记簿" }
  Feat_knowledge_fBiz_candidate@{ shape: rectangle, label: "BIZ-201 候选知识对象" }
  Feat_knowledge_fPod_document@{ shape: rectangle, label: "POD-201 文档登记实体" }
  Feat_knowledge_fDao_registry@{ shape: cylinder, label: "DAO-201 文档登记访问" }
  Feat_knowledge_fBiz_candidate -. "\`登记文档标识\`" .-> Feat_knowledge_fUs_governI_221Ui_221Src_205
  Feat_knowledge_fUs_governI_221Ui_221Src_205 -. "\`生成 POD-201\`" .-> Feat_knowledge_fPod_document
  Feat_knowledge_fPod_document -. "\`写入\`" .-> Feat_knowledge_fDao_registry
`;case`dfd002F-src206-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-206-DFD-001 扫描抽取数据流"
---
graph LR
  Feat_knowledge_fUs_scanI_211Ui_211Src_206@{ shape: rectangle, label: "SRC-206 知识扫描" }
  Feat_knowledge_fLane_extExt_wiki@{ shape: rectangle, label: "LLM Wiki" }
  Feat_knowledge_fBiz_candidate@{ shape: rectangle, label: "BIZ-201 候选知识对象" }
  Feat_knowledge_fUs_scanI_211Ui_211Src_206 -. "\`读取 wiki 候选\`" .-> Feat_knowledge_fLane_extExt_wiki
  Feat_knowledge_fLane_extExt_wiki -. "\`返回候选\`" .-> Feat_knowledge_fUs_scanI_211Ui_211Src_206
  Feat_knowledge_fUs_scanI_211Ui_211Src_206 -. "\`产出候选对象\`" .-> Feat_knowledge_fBiz_candidate
`;case`dfd002F-src207-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-207-DFD-001 治理决策数据流"
---
graph LR
  Feat_knowledge_fUs_governI_221Ui_221Src_207@{ shape: rectangle, label: "SRC-207 知识治理" }
  Feat_knowledge_fBiz_candidate@{ shape: rectangle, label: "BIZ-201 候选知识对象" }
  Feat_knowledge_fPod_document@{ shape: rectangle, label: "POD-201 文档登记实体" }
  Feat_knowledge_fBiz_candidate -. "\`候选进入治理\`" .-> Feat_knowledge_fUs_governI_221Ui_221Src_207
  Feat_knowledge_fUs_governI_221Ui_221Src_207 -. "\`批准后登记\`" .-> Feat_knowledge_fPod_document
`;case`dfd002F-src208-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-208-DFD-001 知识同步数据流"
---
graph LR
  Feat_knowledge_fUs_alertI_231Ui_231Src_208@{ shape: rectangle, label: "SRC-208 知识同步" }
  Feat_knowledge_fLane_extExt_ragflow2@{ shape: rectangle, label: "RAGFlow" }
  Feat_knowledge_fUs_alertI_231Ui_231Src_208 -. "\`推送已批准知识\`" .-> Feat_knowledge_fLane_extExt_ragflow2
  Feat_knowledge_fLane_extExt_ragflow2 -. "\`同步确认\`" .-> Feat_knowledge_fUs_alertI_231Ui_231Src_208
`;case`dfd002F-src209-1`:return`---
title: "SRC 环 · Feature-002-F · SRC-209-DFD-001 生命周期数据流"
---
graph LR
  Feat_knowledge_fUs_alertI_232Ui_232Src_209@{ shape: rectangle, label: "SRC-209 知识生命周期视图" }
  Feat_knowledge_fPod_document@{ shape: rectangle, label: "POD-201 文档登记实体" }
  Feat_knowledge_fDao_registry@{ shape: cylinder, label: "DAO-201 文档登记访问" }
  Feat_knowledge_fUs_alertI_232Ui_232Src_209 -. "\`晋升或下线\`" .-> Feat_knowledge_fPod_document
  Feat_knowledge_fPod_document -. "\`更新登记\`" .-> Feat_knowledge_fDao_registry
`;case`seq001F-i-001-lanes`:return`---
title: "I 环 · Feature-001-F · 阶段 I-001 泳道流程"
---
graph LR
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fUs_askI_001Ui_001Src_001@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
  Feat_answer_fUs_askI_001I_001_1@{ shape: rectangle, label: "I-001-1 归一化提问" }
  Feat_answer_fUs_askI_001I_001_2@{ shape: rectangle, label: "I-001-2 检索候选知识" }
  Feat_answer_fUs_askI_001I_001_3@{ shape: rectangle, label: "I-001-3 候选排序与择优" }
  Feat_answer_fUs_askI_001Ui_001Src_005@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_answer_fLane_clientActor_customer -. "\`①提交提问\`" .-> Feat_answer_fUs_askI_001Ui_001Src_001
  Feat_answer_fUs_askI_001Ui_001Src_001 -. "\`②解密归一化\`" .-> Feat_answer_fUs_askI_001I_001_1
  Feat_answer_fUs_askI_001I_001_1 -. "\`③发起检索\`" .-> Feat_answer_fUs_askI_001I_001_2
  Feat_answer_fUs_askI_001I_001_2 -. "\`④请求RAGFlow\`" .-> Feat_answer_fUs_askI_001Ui_001Src_005
  Feat_answer_fUs_askI_001Ui_001Src_005 -. "\`⑤检索\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`⑥返回候选\`" .-> Feat_answer_fUs_askI_001Ui_001Src_005
  Feat_answer_fUs_askI_001I_001_2 -. "\`⑦排序择优\`" .-> Feat_answer_fUs_askI_001I_001_3
`;case`seq001F-i-003-lanes`:return`---
title: "I 环 · Feature-001-F · 阶段 I-003 泳道流程"
---
graph LR
  Feat_answer_fUs_askI_001Ui_001Src_002@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fUs_askI_003I_003_1@{ shape: rectangle, label: "I-003-1 生成答复" }
  Feat_answer_fUs_askI_003I_003_2@{ shape: rectangle, label: "I-003-2 下发答复" }
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fUs_askI_001Ui_001Src_002 -. "\`①校验通过\`" .-> Feat_answer_fUs_askI_003I_003_1
  Feat_answer_fUs_askI_003I_003_1 -. "\`②答复就绪\`" .-> Feat_answer_fUs_askI_003I_003_2
  Feat_answer_fUs_askI_003I_003_2 -. "\`③答复送达\`" .-> Feat_answer_fLane_clientActor_customer
`;case`seq001F-i-012-lanes`:return`---
title: "I 环 · Feature-001-F · 阶段 I-012 泳道流程"
---
graph LR
  Feat_answer_fUs_askI_001Ui_001Src_002@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fUs_lowConfidenceI_012I_012_1@{ shape: rectangle, label: "I-012-1 创建人工工单" }
  Feat_answer_fUs_lowConfidenceI_012I_012_2@{ shape: rectangle, label: "I-012-2 告知客户等待" }
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fUs_askI_001Ui_001Src_002 -. "\`①判定转人工\`" .-> Feat_answer_fUs_lowConfidenceI_012I_012_1
  Feat_answer_fUs_lowConfidenceI_012I_012_1 -. "\`②工单创建\`" .-> Feat_answer_fUs_lowConfidenceI_012I_012_2
  Feat_answer_fUs_lowConfidenceI_012I_012_2 -. "\`③告知等待\`" .-> Feat_answer_fLane_clientActor_customer
`;case`seq001NF-i-111-lanes`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-111 泳道流程"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfUs_kbEmptyI_111I_111_1@{ shape: rectangle, label: "I-111-1 读取条目数" }
  Feat_degrade_nfUs_kbEmptyI_111I_111_2@{ shape: rectangle, label: "I-111-2 判定零条场景" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`①发起查询\`" .-> Feat_degrade_nfUs_kbEmptyI_111I_111_1
  Feat_degrade_nfUs_kbEmptyI_111I_111_1 -. "\`②判定零条场景\`" .-> Feat_degrade_nfUs_kbEmptyI_111I_111_2
`;case`seq001NF-i-121-lanes`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-121 泳道流程"
---
graph LR
  Feat_degrade_nfUs_ragTimeoutI_121I_121_1@{ shape: rectangle, label: "I-121-1 启动超时计时" }
  Feat_degrade_nfUs_ragTimeoutI_121I_121_2@{ shape: rectangle, label: "I-121-2 判定超时" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_degrade_nfUs_ragTimeoutI_121I_121_1 -. "\`①等待 RAGFlow 响应\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`②到期判定\`" .-> Feat_degrade_nfUs_ragTimeoutI_121I_121_2
`;case`seq001NF-i-132-lanes`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-132 泳道流程"
---
graph LR
  Feat_degrade_nfUs_llmDownI_132I_132_1@{ shape: rectangle, label: "I-132-1 生成人工工单" }
  Feat_degrade_nfUs_llmDownI_132I_132_2@{ shape: rectangle, label: "I-132-2 告知等待人工" }
  Feat_degrade_nfUs_llmDownI_132Ui_132Src_106@{ shape: rectangle, label: "SRC-106 告警状态存储" }
  Feat_degrade_nfUs_llmDownI_132I_132_1 -. "\`①工单创建完成\`" .-> Feat_degrade_nfUs_llmDownI_132I_132_2
  Feat_degrade_nfUs_llmDownI_132I_132_2 -. "\`②告警落库\`" .-> Feat_degrade_nfUs_llmDownI_132Ui_132Src_106
`;case`seq002F-i-211-lanes`:return`---
title: "I 环 · Feature-002-F · 阶段 I-211 泳道流程"
---
graph LR
  Feat_knowledge_fLane_opsActor_operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_knowledge_fUs_scanI_211Ui_211Src_201@{ shape: rectangle, label: "SRC-201 素材路由" }
  Feat_knowledge_fUs_scanI_211I_211_1@{ shape: rectangle, label: "I-211-1 登记素材" }
  Feat_knowledge_fUs_scanI_211I_211_2@{ shape: rectangle, label: "I-211-2 抽取候选知识" }
  Feat_knowledge_fUs_scanI_211I_211_3@{ shape: rectangle, label: "I-211-3 提交候选" }
  Feat_knowledge_fLane_opsActor_operator -. "\`①上传素材\`" .-> Feat_knowledge_fUs_scanI_211Ui_211Src_201
  Feat_knowledge_fUs_scanI_211Ui_211Src_201 -. "\`②登记素材\`" .-> Feat_knowledge_fUs_scanI_211I_211_1
  Feat_knowledge_fUs_scanI_211I_211_1 -. "\`③抽取候选\`" .-> Feat_knowledge_fUs_scanI_211I_211_2
  Feat_knowledge_fUs_scanI_211I_211_2 -. "\`④提交候选\`" .-> Feat_knowledge_fUs_scanI_211I_211_3
`;case`seq002F-i-221-lanes`:return`---
title: "I 环 · Feature-002-F · 阶段 I-221 泳道流程"
---
graph LR
  Feat_knowledge_fLane_opsActor_operator@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_knowledge_fUs_governI_221I_221_1@{ shape: rectangle, label: "I-221-1 人工审阅候选" }
  Feat_knowledge_fUs_governI_221I_221_2@{ shape: rectangle, label: "I-221-2 记录决策" }
  Feat_knowledge_fUs_governI_221I_221_3@{ shape: rectangle, label: "I-221-3 晋升知识" }
  Feat_knowledge_fLane_opsActor_operator -. "\`①逐条审阅\`" .-> Feat_knowledge_fUs_governI_221I_221_1
  Feat_knowledge_fUs_governI_221I_221_1 -. "\`②记录决策\`" .-> Feat_knowledge_fUs_governI_221I_221_2
  Feat_knowledge_fUs_governI_221I_221_2 -. "\`③批准晋升或驳回\`" .-> Feat_knowledge_fUs_governI_221I_221_3
`;case`seq002F-i-231-lanes`:return`---
title: "I 环 · Feature-002-F · 阶段 I-231 泳道流程"
---
graph LR
  Feat_knowledge_fUs_alertI_231I_231_1@{ shape: rectangle, label: "I-231-1 巡检数据集状态" }
  Feat_knowledge_fUs_alertI_231I_231_2@{ shape: rectangle, label: "I-231-2 判定新鲜度异常" }
  Feat_knowledge_fLane_extExt_ragflow2@{ shape: rectangle, label: "RAGFlow" }
  Feat_knowledge_fUs_alertI_231I_231_1 -. "\`①巡检数据集\`" .-> Feat_knowledge_fLane_extExt_ragflow2
  Feat_knowledge_fLane_extExt_ragflow2 -. "\`②新鲜度判定\`" .-> Feat_knowledge_fUs_alertI_231I_231_2
`;case`index`:return`---
title: "美妆客服服务 · 全部 Feature 导航"
---
graph TB
  Feat_answer_f@{ shape: rectangle, label: "Feature-001-F 知识应答能力" }
  Feat_degrade_nf@{ shape: rectangle, label: "Feature-001-NF 极端场景保障" }
  Feat_knowledge_f@{ shape: rectangle, label: "Feature-002-F 知识运营能力" }
`;case`pano-us`:return`---
title: "US 环 · 全部 Feature · 用户故事"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Us_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
    Feat_answer_f.Us_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  end
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.Us_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
    Feat_degrade_nf.Us_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
  end
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.Us_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
    Feat_knowledge_f.Us_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
    Feat_knowledge_f.Us_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
  end
  Feat_answer_f.Us_ask -. "\`[...]\`" .-> Feat_answer_f.Us_lowConfidence
  Feat_answer_f.Us_lowConfidence -. "\`持久化工单\`" .-> Feat_answer_f.Us_ask
  Feat_degrade_nf.Us_kbEmpty -. "\`提交发布判定\`" .-> Feat_degrade_nf.Us_ragTimeout
  Feat_degrade_nf.Us_ragTimeout -. "\`读取告警快照\`" .-> Feat_degrade_nf.Us_llmDown
  Feat_knowledge_f.Us_scan -. "\`[...]\`" .-> Feat_knowledge_f.Us_govern
  Feat_knowledge_f.Us_govern -. "\`触发扫描\`" .-> Feat_knowledge_f.Us_scan
  Feat_knowledge_f.Us_govern -. "\`[...]\`" .-> Feat_knowledge_f.Us_alert
  Feat_knowledge_f.Us_alert -. "\`晋升或下线\`" .-> Feat_knowledge_f.Us_govern
`;case`pano-f`:return`---
title: "F 环 · 全部 Feature-NNN-F · 业务能力单元"
---
graph TB
  Feat_answer_fF_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
  Feat_answer_fF_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
  Feat_knowledge_fF_ingest@{ shape: rectangle, label: "F-201 素材接入能力" }
  Feat_knowledge_fF_govern@{ shape: rectangle, label: "F-202 知识治理能力" }
`;case`pano-nf`:return`---
title: "NF 环 · 全部 Feature-NNN-NF · 极端场景单元"
---
graph TB
  Feat_degrade_nfNf_kbEmpty@{ shape: rounded, label: "NF-101 知识库为零条时状态可见" }
  Feat_degrade_nfNf_ragTimeout@{ shape: rounded, label: "NF-102 RAGFlow 超 8 秒时客户可感知" }
  Feat_degrade_nfNf_llmDown@{ shape: rounded, label: "NF-103 LLM 不可用时自动转人工" }
`;case`pano-i`:return`---
title: "I 环 · 全部 Feature · 阶段性目标"
---
graph TB
  subgraph Feat_answer_fUs_ask["\`US-001 客户提问获得专业答复\`"]
    Feat_answer_fUs_ask.I_001@{ shape: rectangle, label: "I-001 阶段性目标 · 取得可靠候选知识" }
    Feat_answer_fUs_ask.I_002@{ shape: rectangle, label: "I-002 阶段性目标 · 判定可否自动答复" }
    Feat_answer_fUs_ask.I_003@{ shape: rectangle, label: "I-003 阶段性目标 · 生成并下发答复" }
  end
  subgraph Feat_degrade_nfUs_kbEmpty["\`US-101 知识库为空时运营人员能看见\`"]
    Feat_degrade_nfUs_kbEmpty.I_111@{ shape: rectangle, label: "I-111 阶段性目标 · 读出条目数并判定空库" }
    Feat_degrade_nfUs_kbEmpty.I_112@{ shape: rectangle, label: "I-112 阶段性目标 · 把空库显式呈现出来" }
  end
  subgraph Feat_knowledge_fUs_scan["\`US-201 素材入库后自动进入候选知识\`"]
    Feat_knowledge_fUs_scan.I_211@{ shape: rectangle, label: "I-211 阶段性目标 · 素材入库并产出候选" }
  end
  subgraph Feat_knowledge_fUs_govern["\`US-202 候选知识经我决策后才对外可见\`"]
    Feat_knowledge_fUs_govern.I_221@{ shape: rectangle, label: "I-221 阶段性目标 · 审阅决策并晋升" }
  end
  subgraph Feat_answer_fUs_lowConfidence["\`US-002 答不准时转人工而非硬答\`"]
    Feat_answer_fUs_lowConfidence.I_011@{ shape: rectangle, label: "I-011 阶段性目标 · 判定进入人工路径" }
    Feat_answer_fUs_lowConfidence.I_012@{ shape: rectangle, label: "I-012 阶段性目标 · 生成工单并告知等待" }
  end
  subgraph Feat_degrade_nfUs_ragTimeout["\`US-102 RAGFlow 超时时客户不被静默等待\`"]
    Feat_degrade_nfUs_ragTimeout.I_121@{ shape: rectangle, label: "I-121 阶段性目标 · 计时并判定超时" }
    Feat_degrade_nfUs_ragTimeout.I_122@{ shape: rectangle, label: "I-122 阶段性目标 · 告知客户系统在处理" }
  end
  subgraph Feat_knowledge_fUs_alert["\`US-203 知识陈旧时我能收到提示\`"]
    Feat_knowledge_fUs_alert.I_231@{ shape: rectangle, label: "I-231 阶段性目标 · 巡检并判定新鲜度" }
    Feat_knowledge_fUs_alert.I_232@{ shape: rectangle, label: "I-232 阶段性目标 · 上报告警并呈现" }
  end
  subgraph Feat_degrade_nfUs_llmDown["\`US-103 LLM 不可用时转人工而非静默失败\`"]
    Feat_degrade_nfUs_llmDown.I_131@{ shape: rectangle, label: "I-131 阶段性目标 · 识别模型不可用并转人工" }
    Feat_degrade_nfUs_llmDown.I_132@{ shape: rectangle, label: "I-132 阶段性目标 · 建单并告知等待" }
  end
  Feat_answer_fUs_ask.I_001 -. "\`取得候选后进入判定\`" .-> Feat_answer_fUs_ask.I_002
  Feat_answer_fUs_ask.I_001 -. "\`请求应答\`" .-> Feat_answer_fUs_ask.I_003
  Feat_answer_fUs_ask.I_002 -. "\`校验通过后生成答复\`" .-> Feat_answer_fUs_ask.I_003
  Feat_answer_fUs_ask.I_003 -. "\`检索候选知识\`" .-> Feat_answer_fUs_ask.I_001
  Feat_answer_fUs_ask.I_003 -. "\`校验置信度\`" .-> Feat_answer_fUs_ask.I_002
  Feat_answer_fUs_ask.I_002 -. "\`校验不通过转人工\`" .-> Feat_answer_fUs_lowConfidence.I_011
  Feat_answer_fUs_ask.I_001 -. "\`低置信度时转人工\`" .-> Feat_answer_fUs_lowConfidence.I_012
  Feat_answer_fUs_lowConfidence.I_011 -. "\`判定后建单并告知\`" .-> Feat_answer_fUs_lowConfidence.I_012
  Feat_answer_fUs_lowConfidence.I_012 -. "\`持久化工单\`" .-> Feat_answer_fUs_ask.I_003
  Feat_degrade_nfUs_kbEmpty.I_111 -. "\`判定空库后显式呈现\`" .-> Feat_degrade_nfUs_kbEmpty.I_112
  Feat_degrade_nfUs_kbEmpty.I_112 -. "\`提交发布判定\`" .-> Feat_degrade_nfUs_ragTimeout.I_122
  Feat_degrade_nfUs_ragTimeout.I_121 -. "\`判定超时后告知客户\`" .-> Feat_degrade_nfUs_ragTimeout.I_122
  Feat_degrade_nfUs_ragTimeout.I_122 -. "\`读取告警快照\`" .-> Feat_degrade_nfUs_llmDown.I_132
  Feat_degrade_nfUs_llmDown.I_131 -. "\`判定不可用后建单告知\`" .-> Feat_degrade_nfUs_llmDown.I_132
  Feat_knowledge_fUs_scan.I_211 -. "\`提交候选进入治理\`" .-> Feat_knowledge_fUs_govern.I_221
  Feat_knowledge_fUs_govern.I_221 -. "\`触发扫描\`" .-> Feat_knowledge_fUs_scan.I_211
  Feat_knowledge_fUs_govern.I_221 -. "\`晋升后进入新鲜度巡检\`" .-> Feat_knowledge_fUs_alert.I_231
  Feat_knowledge_fUs_alert.I_231 -. "\`判定异常后上报告警\`" .-> Feat_knowledge_fUs_alert.I_232
  Feat_knowledge_fUs_alert.I_232 -. "\`晋升或下线\`" .-> Feat_knowledge_fUs_govern.I_221
`;case`pano-i-state`:return`---
title: "I 环 · 全部 Feature · 业务状态"
---
graph TB
  subgraph Feat_answer_fUs_askI_001["\`I-001 阶段性目标 · 取得可靠候选知识\`"]
    Feat_answer_fUs_askI_001.St_001_pending@{ shape: rectangle, label: "S-001 待检索" }
    Feat_answer_fUs_askI_001.St_001_normalizing@{ shape: rectangle, label: "S-002 归一化中" }
    Feat_answer_fUs_askI_001.St_001_searching@{ shape: rectangle, label: "S-003 检索中" }
    Feat_answer_fUs_askI_001.St_001_got@{ shape: rectangle, label: "S-004 已取得候选" }
  end
  subgraph Feat_answer_fUs_askI_002["\`I-002 阶段性目标 · 判定可否自动答复\`"]
    Feat_answer_fUs_askI_002.St_002_pending@{ shape: rectangle, label: "S-005 待校验" }
    Feat_answer_fUs_askI_002.St_002_checking@{ shape: rectangle, label: "S-006 校验中" }
    Feat_answer_fUs_askI_002.St_002_passed@{ shape: rectangle, label: "S-007 校验通过" }
    Feat_answer_fUs_askI_002.St_002_failed@{ shape: rectangle, label: "S-008 置信度不足" }
  end
  subgraph Feat_answer_fUs_askI_003["\`I-003 阶段性目标 · 生成并下发答复\`"]
    Feat_answer_fUs_askI_003.St_003_pending@{ shape: rectangle, label: "S-009 待生成" }
    Feat_answer_fUs_askI_003.St_003_composing@{ shape: rectangle, label: "S-010 生成中" }
    Feat_answer_fUs_askI_003.St_003_delivering@{ shape: rectangle, label: "S-011 下发中" }
    Feat_answer_fUs_askI_003.St_003_answered@{ shape: rectangle, label: "S-012 已答复" }
  end
  subgraph Feat_answer_fUs_lowConfidenceI_011["\`I-011 阶段性目标 · 判定进入人工路径\`"]
    Feat_answer_fUs_lowConfidenceI_011.St_011_pending@{ shape: rectangle, label: "S-101 待判定" }
    Feat_answer_fUs_lowConfidenceI_011.St_011_judging@{ shape: rectangle, label: "S-102 判定中" }
    Feat_answer_fUs_lowConfidenceI_011.St_011_escalated@{ shape: rectangle, label: "S-103 已转人工" }
  end
  subgraph Feat_answer_fUs_lowConfidenceI_012["\`I-012 阶段性目标 · 生成工单并告知等待\`"]
    Feat_answer_fUs_lowConfidenceI_012.St_012_pending@{ shape: rectangle, label: "S-104 待建单" }
    Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing@{ shape: rectangle, label: "S-105 建单中" }
    Feat_answer_fUs_lowConfidenceI_012.St_012_notified@{ shape: rectangle, label: "S-106 已告知等待" }
    Feat_answer_fUs_lowConfidenceI_012.St_012_answered@{ shape: rectangle, label: "S-107 人工已接管" }
  end
  subgraph Feat_degrade_nfUs_kbEmptyI_111["\`I-111 阶段性目标 · 读出条目数并判定空库\`"]
    Feat_degrade_nfUs_kbEmptyI_111.St_111_pending@{ shape: rectangle, label: "S-111 待读取" }
    Feat_degrade_nfUs_kbEmptyI_111.St_111_counting@{ shape: rectangle, label: "S-112 读取中" }
    Feat_degrade_nfUs_kbEmptyI_111.St_111_empty@{ shape: rectangle, label: "S-113 判定为空库" }
    Feat_degrade_nfUs_kbEmptyI_111.St_111_ready@{ shape: rectangle, label: "S-114 条目正常" }
  end
  subgraph Feat_degrade_nfUs_kbEmptyI_112["\`I-112 阶段性目标 · 把空库显式呈现出来\`"]
    Feat_degrade_nfUs_kbEmptyI_112.St_112_pending@{ shape: rectangle, label: "S-115 待呈现" }
    Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering@{ shape: rectangle, label: "S-116 渲染中" }
    Feat_degrade_nfUs_kbEmptyI_112.St_112_shown@{ shape: rectangle, label: "S-117 已显式提示" }
  end
  subgraph Feat_degrade_nfUs_ragTimeoutI_121["\`I-121 阶段性目标 · 计时并判定超时\`"]
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_pending@{ shape: rectangle, label: "S-121 待计时" }
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting@{ shape: rectangle, label: "S-122 等待响应" }
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_timedOut@{ shape: rectangle, label: "S-123 判定超时" }
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_returned@{ shape: rectangle, label: "S-124 按时返回" }
  end
  subgraph Feat_degrade_nfUs_ragTimeoutI_122["\`I-122 阶段性目标 · 告知客户系统在处理\`"]
    Feat_degrade_nfUs_ragTimeoutI_122.St_122_pending@{ shape: rectangle, label: "S-125 待提示" }
    Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying@{ shape: rectangle, label: "S-126 提示中" }
    Feat_degrade_nfUs_ragTimeoutI_122.St_122_notified@{ shape: rectangle, label: "S-127 已告知处理中" }
  end
  subgraph Feat_degrade_nfUs_llmDownI_131["\`I-131 阶段性目标 · 识别模型不可用并转人工\`"]
    Feat_degrade_nfUs_llmDownI_131.St_131_pending@{ shape: rectangle, label: "S-131 待调用" }
    Feat_degrade_nfUs_llmDownI_131.St_131_calling@{ shape: rectangle, label: "S-132 调用中" }
    Feat_degrade_nfUs_llmDownI_131.St_131_failed@{ shape: rectangle, label: "S-133 模型不可用" }
    Feat_degrade_nfUs_llmDownI_131.St_131_ok@{ shape: rectangle, label: "S-134 调用成功" }
  end
  subgraph Feat_degrade_nfUs_llmDownI_132["\`I-132 阶段性目标 · 建单并告知等待\`"]
    Feat_degrade_nfUs_llmDownI_132.St_132_pending@{ shape: rectangle, label: "S-135 待建单" }
    Feat_degrade_nfUs_llmDownI_132.St_132_ticketing@{ shape: rectangle, label: "S-136 建单中" }
    Feat_degrade_nfUs_llmDownI_132.St_132_notified@{ shape: rectangle, label: "S-137 已告知等待" }
    Feat_degrade_nfUs_llmDownI_132.St_132_handedOff@{ shape: rectangle, label: "S-138 人工已接管" }
  end
  subgraph Feat_knowledge_fUs_scanI_211["\`I-211 阶段性目标 · 素材入库并产出候选\`"]
    Feat_knowledge_fUs_scanI_211.St_211_pending@{ shape: rectangle, label: "S-211 待接入" }
    Feat_knowledge_fUs_scanI_211.St_211_registering@{ shape: rectangle, label: "S-212 登记中" }
    Feat_knowledge_fUs_scanI_211.St_211_scanning@{ shape: rectangle, label: "S-213 扫描中" }
    Feat_knowledge_fUs_scanI_211.St_211_submitted@{ shape: rectangle, label: "S-214 已提交候选" }
  end
  subgraph Feat_knowledge_fUs_governI_221["\`I-221 阶段性目标 · 审阅决策并晋升\`"]
    Feat_knowledge_fUs_governI_221.St_221_pending@{ shape: rectangle, label: "S-221 待审阅" }
    Feat_knowledge_fUs_governI_221.St_221_reviewing@{ shape: rectangle, label: "S-222 审阅中" }
    Feat_knowledge_fUs_governI_221.St_221_decided@{ shape: rectangle, label: "S-223 已决策" }
    Feat_knowledge_fUs_governI_221.St_221_promoted@{ shape: rectangle, label: "S-224 已晋升可检索" }
    Feat_knowledge_fUs_governI_221.St_221_rejected@{ shape: rectangle, label: "S-225 已驳回退回" }
  end
  subgraph Feat_knowledge_fUs_alertI_231["\`I-231 阶段性目标 · 巡检并判定新鲜度\`"]
    Feat_knowledge_fUs_alertI_231.St_231_pending@{ shape: rectangle, label: "S-231 待巡检" }
    Feat_knowledge_fUs_alertI_231.St_231_probing@{ shape: rectangle, label: "S-232 巡检中" }
    Feat_knowledge_fUs_alertI_231.St_231_fresh@{ shape: rectangle, label: "S-233 新鲜度正常" }
    Feat_knowledge_fUs_alertI_231.St_231_stale@{ shape: rectangle, label: "S-234 新鲜度异常" }
  end
  subgraph Feat_knowledge_fUs_alertI_232["\`I-232 阶段性目标 · 上报告警并呈现\`"]
    Feat_knowledge_fUs_alertI_232.St_232_pending@{ shape: rectangle, label: "S-235 待上报" }
    Feat_knowledge_fUs_alertI_232.St_232_reporting@{ shape: rectangle, label: "S-236 上报中" }
    Feat_knowledge_fUs_alertI_232.St_232_listed@{ shape: rectangle, label: "S-237 控制台已列出" }
    Feat_knowledge_fUs_alertI_232.St_232_fixed@{ shape: rectangle, label: "S-238 已修复下线" }
  end
  Feat_answer_fUs_askI_001.St_001_pending -. "\`收到企业微信提问\`" .-> Feat_answer_fUs_askI_001.St_001_normalizing
  Feat_answer_fUs_askI_001.St_001_normalizing -. "\`归一化完成\`" .-> Feat_answer_fUs_askI_001.St_001_searching
  Feat_answer_fUs_askI_001.St_001_searching -. "\`检索返回候选条目\`" .-> Feat_answer_fUs_askI_001.St_001_got
  Feat_answer_fUs_askI_002.St_002_pending -. "\`进入回复策略\`" .-> Feat_answer_fUs_askI_002.St_002_checking
  Feat_answer_fUs_askI_002.St_002_checking -. "\`置信度达标\`" .-> Feat_answer_fUs_askI_002.St_002_passed
  Feat_answer_fUs_askI_002.St_002_checking -. "\`置信度不足，转 US-002\`" .-> Feat_answer_fUs_askI_002.St_002_failed
  Feat_answer_fUs_askI_003.St_003_pending -. "\`校验通过\`" .-> Feat_answer_fUs_askI_003.St_003_composing
  Feat_answer_fUs_askI_003.St_003_composing -. "\`答复正文就绪\`" .-> Feat_answer_fUs_askI_003.St_003_delivering
  Feat_answer_fUs_askI_003.St_003_delivering -. "\`企业微信回传成功\`" .-> Feat_answer_fUs_askI_003.St_003_answered
  Feat_answer_fUs_lowConfidenceI_011.St_011_pending -. "\`置信度不足触发\`" .-> Feat_answer_fUs_lowConfidenceI_011.St_011_judging
  Feat_answer_fUs_lowConfidenceI_011.St_011_judging -. "\`确认无可靠候选\`" .-> Feat_answer_fUs_lowConfidenceI_011.St_011_escalated
  Feat_answer_fUs_lowConfidenceI_012.St_012_pending -. "\`判定已转人工\`" .-> Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing
  Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing -. "\`工单创建完成\`" .-> Feat_answer_fUs_lowConfidenceI_012.St_012_notified
  Feat_answer_fUs_lowConfidenceI_012.St_012_notified -. "\`人工接手\`" .-> Feat_answer_fUs_lowConfidenceI_012.St_012_answered
  Feat_degrade_nfUs_kbEmptyI_111.St_111_pending -. "\`运营人员发起查询\`" .-> Feat_degrade_nfUs_kbEmptyI_111.St_111_counting
  Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -. "\`条目数为 0\`" .-> Feat_degrade_nfUs_kbEmptyI_111.St_111_empty
  Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -. "\`条目数大于 0\`" .-> Feat_degrade_nfUs_kbEmptyI_111.St_111_ready
  Feat_degrade_nfUs_kbEmptyI_112.St_112_pending -. "\`判定为空库\`" .-> Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering
  Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering -. "\`提示已渲染\`" .-> Feat_degrade_nfUs_kbEmptyI_112.St_112_shown
  Feat_degrade_nfUs_ragTimeoutI_121.St_121_pending -. "\`发起检索并启动计时\`" .-> Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting
  Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -. "\`超过 8 秒未返回\`" .-> Feat_degrade_nfUs_ragTimeoutI_121.St_121_timedOut
  Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -. "\`8 秒内返回候选\`" .-> Feat_degrade_nfUs_ragTimeoutI_121.St_121_returned
  Feat_degrade_nfUs_ragTimeoutI_122.St_122_pending -. "\`判定超时\`" .-> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying
  Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying -. "\`提示已下发\`" .-> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notified
  Feat_degrade_nfUs_llmDownI_131.St_131_pending -. "\`发起模型调用\`" .-> Feat_degrade_nfUs_llmDownI_131.St_131_calling
  Feat_degrade_nfUs_llmDownI_131.St_131_calling -. "\`调用失败或返回异常\`" .-> Feat_degrade_nfUs_llmDownI_131.St_131_failed
  Feat_degrade_nfUs_llmDownI_131.St_131_calling -. "\`调用正常返回\`" .-> Feat_degrade_nfUs_llmDownI_131.St_131_ok
  Feat_degrade_nfUs_llmDownI_132.St_132_pending -. "\`模型判定不可用\`" .-> Feat_degrade_nfUs_llmDownI_132.St_132_ticketing
  Feat_degrade_nfUs_llmDownI_132.St_132_ticketing -. "\`工单创建完成\`" .-> Feat_degrade_nfUs_llmDownI_132.St_132_notified
  Feat_degrade_nfUs_llmDownI_132.St_132_notified -. "\`人工接手\`" .-> Feat_degrade_nfUs_llmDownI_132.St_132_handedOff
  Feat_knowledge_fUs_scanI_211.St_211_pending -. "\`上传素材\`" .-> Feat_knowledge_fUs_scanI_211.St_211_registering
  Feat_knowledge_fUs_scanI_211.St_211_registering -. "\`登记完成\`" .-> Feat_knowledge_fUs_scanI_211.St_211_scanning
  Feat_knowledge_fUs_scanI_211.St_211_scanning -. "\`候选已抽取并提交\`" .-> Feat_knowledge_fUs_scanI_211.St_211_submitted
  Feat_knowledge_fUs_governI_221.St_221_pending -. "\`候选提交到治理\`" .-> Feat_knowledge_fUs_governI_221.St_221_reviewing
  Feat_knowledge_fUs_governI_221.St_221_reviewing -. "\`运营人员记录决策\`" .-> Feat_knowledge_fUs_governI_221.St_221_decided
  Feat_knowledge_fUs_governI_221.St_221_decided -. "\`批准晋升\`" .-> Feat_knowledge_fUs_governI_221.St_221_promoted
  Feat_knowledge_fUs_governI_221.St_221_decided -. "\`驳回退回\`" .-> Feat_knowledge_fUs_governI_221.St_221_rejected
  Feat_knowledge_fUs_alertI_231.St_231_pending -. "\`到达巡检周期\`" .-> Feat_knowledge_fUs_alertI_231.St_231_probing
  Feat_knowledge_fUs_alertI_231.St_231_probing -. "\`全部在阈值内\`" .-> Feat_knowledge_fUs_alertI_231.St_231_fresh
  Feat_knowledge_fUs_alertI_231.St_231_probing -. "\`存在超阈值条目\`" .-> Feat_knowledge_fUs_alertI_231.St_231_stale
  Feat_knowledge_fUs_alertI_232.St_232_pending -. "\`判定新鲜度异常\`" .-> Feat_knowledge_fUs_alertI_232.St_232_reporting
  Feat_knowledge_fUs_alertI_232.St_232_reporting -. "\`告警已落库并展示\`" .-> Feat_knowledge_fUs_alertI_232.St_232_listed
  Feat_knowledge_fUs_alertI_232.St_232_listed -. "\`运营人员修复后下线\`" .-> Feat_knowledge_fUs_alertI_232.St_232_fixed
`;case`pano-ui`:return`---
title: "UI 环 · 全部 Feature · 界面单元"
---
graph TB
  subgraph Feat_answer_fUs_ask["\`US-001 客户提问获得专业答复\`"]
    subgraph Feat_answer_fUs_ask.I_001["\`I-001 阶段性目标 · 取得可靠候选知识\`"]
      Feat_answer_fUs_ask.I_001.Ui_001@{ shape: rounded, label: "UI-001 会话输入" }
    end
    subgraph Feat_answer_fUs_ask.I_003["\`I-003 阶段性目标 · 生成并下发答复\`"]
      Feat_answer_fUs_ask.I_003.Ui_003@{ shape: rounded, label: "UI-003 答复呈现" }
    end
    subgraph Feat_answer_fUs_ask.I_002["\`I-002 阶段性目标 · 判定可否自动答复\`"]
      Feat_answer_fUs_ask.I_002.Ui_002@{ shape: rounded, label: "UI-002 判定反馈" }
    end
  end
  subgraph Feat_answer_fUs_lowConfidence["\`US-002 答不准时转人工而非硬答\`"]
    Feat_answer_fUs_lowConfidence.I_011Ui_011@{ shape: rounded, label: "UI-011 转接提示" }
    Feat_answer_fUs_lowConfidence.I_012Ui_012@{ shape: rounded, label: "UI-012 转人工告知" }
  end
  subgraph Feat_degrade_nfUs_kbEmpty["\`US-101 知识库为空时运营人员能看见\`"]
    subgraph Feat_degrade_nfUs_kbEmpty.I_111["\`I-111 阶段性目标 · 读出条目数并判定空库\`"]
      Feat_degrade_nfUs_kbEmpty.I_111.Ui_111@{ shape: rounded, label: "UI-111 状态查询" }
    end
    subgraph Feat_degrade_nfUs_kbEmpty.I_112["\`I-112 阶段性目标 · 把空库显式呈现出来\`"]
      Feat_degrade_nfUs_kbEmpty.I_112.Ui_112@{ shape: rounded, label: "UI-112 空库提示呈现" }
    end
  end
  subgraph Feat_degrade_nfUs_ragTimeout["\`US-102 RAGFlow 超时时客户不被静默等待\`"]
    Feat_degrade_nfUs_ragTimeout.I_121Ui_121@{ shape: rounded, label: "UI-121 等待反馈" }
    Feat_degrade_nfUs_ragTimeout.I_122Ui_122@{ shape: rounded, label: "UI-122 处理中提示" }
  end
  subgraph Feat_degrade_nfUs_llmDown["\`US-103 LLM 不可用时转人工而非静默失败\`"]
    Feat_degrade_nfUs_llmDown.I_131Ui_131@{ shape: rounded, label: "UI-131 调用反馈" }
    Feat_degrade_nfUs_llmDown.I_132Ui_132@{ shape: rounded, label: "UI-132 转人工告知" }
  end
  subgraph Feat_knowledge_fUs_scan["\`US-201 素材入库后自动进入候选知识\`"]
    Feat_knowledge_fUs_scan.I_211Ui_211@{ shape: rounded, label: "UI-211 素材上传" }
  end
  subgraph Feat_knowledge_fUs_govern["\`US-202 候选知识经我决策后才对外可见\`"]
    Feat_knowledge_fUs_govern.I_221Ui_221@{ shape: rounded, label: "UI-221 审阅工作台" }
  end
  subgraph Feat_knowledge_fUs_alert["\`US-203 知识陈旧时我能收到提示\`"]
    subgraph Feat_knowledge_fUs_alert.I_231["\`I-231 阶段性目标 · 巡检并判定新鲜度\`"]
      Feat_knowledge_fUs_alert.I_231.Ui_231@{ shape: rounded, label: "UI-231 巡检状态" }
    end
    subgraph Feat_knowledge_fUs_alert.I_232["\`I-232 阶段性目标 · 上报告警并呈现\`"]
      Feat_knowledge_fUs_alert.I_232.Ui_232@{ shape: rounded, label: "UI-232 告警呈现" }
    end
  end
  Feat_answer_fUs_ask.I_001.Ui_001 -. "\`请求应答\`" .-> Feat_answer_fUs_ask.I_003.Ui_003
  Feat_answer_fUs_ask.I_003.Ui_003 -. "\`检索候选知识\`" .-> Feat_answer_fUs_ask.I_001.Ui_001
  Feat_answer_fUs_ask.I_003.Ui_003 -. "\`校验置信度\`" .-> Feat_answer_fUs_ask.I_002.Ui_002
  Feat_answer_fUs_ask.I_001.Ui_001 -. "\`低置信度时转人工\`" .-> Feat_answer_fUs_lowConfidence.I_012Ui_012
  Feat_answer_fUs_lowConfidence.I_012Ui_012 -. "\`持久化工单\`" .-> Feat_answer_fUs_ask.I_003.Ui_003
  Feat_degrade_nfUs_kbEmpty.I_111.Ui_111 -. "\`查询空库告警\`" .-> Feat_degrade_nfUs_kbEmpty.I_112.Ui_112
  Feat_degrade_nfUs_kbEmpty.I_112.Ui_112 -. "\`提交发布判定\`" .-> Feat_degrade_nfUs_ragTimeout.I_122Ui_122
  Feat_degrade_nfUs_ragTimeout.I_122Ui_122 -. "\`读取告警快照\`" .-> Feat_degrade_nfUs_llmDown.I_132Ui_132
  Feat_knowledge_fUs_scan.I_211Ui_211 -. "\`[...]\`" .-> Feat_knowledge_fUs_govern.I_221Ui_221
  Feat_knowledge_fUs_govern.I_221Ui_221 -. "\`触发扫描\`" .-> Feat_knowledge_fUs_scan.I_211Ui_211
  Feat_knowledge_fUs_govern.I_221Ui_221 -. "\`批准后推送\`" .-> Feat_knowledge_fUs_alert.I_231.Ui_231
  Feat_knowledge_fUs_alert.I_231.Ui_231 -. "\`更新生命周期\`" .-> Feat_knowledge_fUs_alert.I_232.Ui_232
  Feat_knowledge_fUs_alert.I_232.Ui_232 -. "\`晋升或下线\`" .-> Feat_knowledge_fUs_govern.I_221Ui_221
`;case`pano-api`:return`---
title: "SRC 环 · 全部 Feature · 对外接口"
---
graph TB
  Feat_answer_fUs_askI_001Ui_001Src_001Api_001@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006Api_002@{ shape: rectangle, label: "API-002 GET /handoffs 工单列表" }
  Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101Api_101@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  Feat_knowledge_fUs_scanI_211Ui_211Src_201Api_201@{ shape: rectangle, label: "API-201 POST /materials 素材接入" }
  Feat_knowledge_fUs_governI_221Ui_221Src_202Api_202@{ shape: rectangle, label: "API-202 POST /knowledge/scan 知识扫描" }
  Feat_knowledge_fUs_governI_221Ui_221Src_202Api_203@{ shape: rectangle, label: "API-203 GET /knowledge/status 知识状态" }
`;case`pano-carrier`:return`---
title: "SRC 环 · 全部 Feature · 数据载体"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Cvt_normalize@{ shape: rounded, label: "CVT-001 提问归一化转换器" }
    Feat_answer_f.In_chatMessage@{ shape: rectangle, label: "IN-001 客户提问入参" }
    Feat_answer_f.Biz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
    Feat_answer_f.Pod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
    Feat_answer_f.Dao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
    Feat_answer_f.Out_answer@{ shape: rectangle, label: "OUT-001 答复出参视图" }
  end
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.In_probeQuery@{ shape: rectangle, label: "IN-101 状态探测入参" }
    Feat_degrade_nf.Cvt_probe@{ shape: rounded, label: "CVT-101 探测结果转换器" }
    Feat_degrade_nf.Biz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
    Feat_degrade_nf.Pod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
    Feat_degrade_nf.Out_status@{ shape: rectangle, label: "OUT-101 状态出参视图" }
    Feat_degrade_nf.Dao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  end
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.In_material@{ shape: rectangle, label: "IN-201 素材入参" }
    Feat_knowledge_f.Cvt_material@{ shape: rounded, label: "CVT-201 素材转换器" }
    Feat_knowledge_f.Biz_candidate@{ shape: rectangle, label: "BIZ-201 候选知识对象" }
    Feat_knowledge_f.Pod_document@{ shape: rectangle, label: "POD-201 文档登记实体" }
    Feat_knowledge_f.Dao_registry@{ shape: cylinder, label: "DAO-201 文档登记访问" }
    Feat_knowledge_f.Out_knowledgeStatus@{ shape: rectangle, label: "OUT-201 知识状态出参视图" }
  end
  Feat_answer_f.In_chatMessage -. "\`转换为检索查询\`" .-> Feat_answer_f.Biz_query
  Feat_answer_f.Biz_query -. "\`低置信度落工单\`" .-> Feat_answer_f.Pod_ticket
  Feat_answer_f.Pod_ticket -. "\`写入工单\`" .-> Feat_answer_f.Dao_store
  Feat_answer_f.Dao_store -. "\`查询答复内容\`" .-> Feat_answer_f.Out_answer
  Feat_answer_f.Cvt_normalize -. "\`负责 报文→IN-001 映射\`" .-> Feat_answer_f.In_chatMessage
  Feat_answer_f.Cvt_normalize -. "\`负责 POD-001→OUT-001 映射\`" .-> Feat_answer_f.Out_answer
  Feat_degrade_nf.In_probeQuery -. "\`转换为探测结果\`" .-> Feat_degrade_nf.Biz_probeResult
  Feat_degrade_nf.Biz_probeResult -. "\`异常转告警实体\`" .-> Feat_degrade_nf.Pod_alert
  Feat_degrade_nf.Biz_probeResult -. "\`渲染状态载荷\`" .-> Feat_degrade_nf.Out_status
  Feat_degrade_nf.Pod_alert -. "\`写入告警\`" .-> Feat_degrade_nf.Dao_alert
  Feat_degrade_nf.Cvt_probe -. "\`负责 BIZ-101→OUT-101 映射\`" .-> Feat_degrade_nf.Biz_probeResult
  Feat_degrade_nf.Cvt_probe -. "\`负责 BIZ-101→POD-101 映射\`" .-> Feat_degrade_nf.Pod_alert
  Feat_knowledge_f.In_material -. "\`转换为候选对象\`" .-> Feat_knowledge_f.Biz_candidate
  Feat_knowledge_f.Biz_candidate -. "\`登记为文档实体\`" .-> Feat_knowledge_f.Pod_document
  Feat_knowledge_f.Pod_document -. "\`写入文档标识\`" .-> Feat_knowledge_f.Dao_registry
  Feat_knowledge_f.Dao_registry -. "\`查询状态\`" .-> Feat_knowledge_f.Out_knowledgeStatus
  Feat_knowledge_f.Cvt_material -. "\`负责 素材→BIZ-201 映射\`" .-> Feat_knowledge_f.Biz_candidate
  Feat_knowledge_f.Cvt_material -. "\`负责 BIZ-201→POD-201 映射\`" .-> Feat_knowledge_f.Pod_document
`;case`proc-local`:return`---
title: "构建部署 · 本地开发环境 · 进程与线程"
---
graph TB
`;case`proc-prod`:return`---
title: "构建部署 · 生产环境 · 进程与线程"
---
graph TB
`;case`chain001F-us`:return`---
title: "US 环 · Feature-001-F · 用户故事"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Us_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
    Feat_answer_f.Us_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  end
  Feat_answer_f.Us_ask -. "\`[...]\`" .-> Feat_answer_f.Us_lowConfidence
  Feat_answer_f.Us_lowConfidence -. "\`持久化工单\`" .-> Feat_answer_f.Us_ask
`;case`chain001F-f`:return`---
title: "F 环 · Feature-001-F · 业务能力单元清单"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Us_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
    Feat_answer_f.Us_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
    Feat_answer_f.F_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
    Feat_answer_f.F_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
  end
  Feat_answer_f.Us_ask -. "\`[...]\`" .-> Feat_answer_f.Us_lowConfidence
  Feat_answer_f.Us_lowConfidence -. "\`持久化工单\`" .-> Feat_answer_f.Us_ask
  Feat_answer_f.Us_ask -. "\`要求\`" .-> Feat_answer_f.F_answer
  Feat_answer_f.Us_lowConfidence -. "\`要求\`" .-> Feat_answer_f.F_retrieval
`;case`chain001F-i-001`:return`---
title: "I 环 · Feature-001-F · 阶段 I-001 取得可靠候选知识"
---
graph TB
  subgraph Feat_answer_fUs_askI_001["\`I-001 阶段性目标 · 取得可靠候选知识\`"]
    Feat_answer_fUs_askI_001.St_001_pending@{ shape: rectangle, label: "S-001 待检索" }
    Feat_answer_fUs_askI_001.St_001_normalizing@{ shape: rectangle, label: "S-002 归一化中" }
    Feat_answer_fUs_askI_001.St_001_searching@{ shape: rectangle, label: "S-003 检索中" }
    Feat_answer_fUs_askI_001.St_001_got@{ shape: rectangle, label: "S-004 已取得候选" }
    Feat_answer_fUs_askI_001.I_001_1@{ shape: rectangle, label: "I-001-1 归一化提问" }
    Feat_answer_fUs_askI_001.I_001_2@{ shape: rectangle, label: "I-001-2 检索候选知识" }
    Feat_answer_fUs_askI_001.I_001_3@{ shape: rectangle, label: "I-001-3 候选排序与择优" }
  end
  Feat_answer_fUs_askI_001.St_001_pending -. "\`收到企业微信提问\`" .-> Feat_answer_fUs_askI_001.St_001_normalizing
  Feat_answer_fUs_askI_001.St_001_normalizing -. "\`归一化完成\`" .-> Feat_answer_fUs_askI_001.St_001_searching
  Feat_answer_fUs_askI_001.St_001_searching -. "\`检索返回候选条目\`" .-> Feat_answer_fUs_askI_001.St_001_got
`;case`chain001F-i-002`:return`---
title: "I 环 · Feature-001-F · 阶段 I-002 判定可否自动答复"
---
graph TB
  subgraph Feat_answer_fUs_askI_002["\`I-002 阶段性目标 · 判定可否自动答复\`"]
    Feat_answer_fUs_askI_002.St_002_pending@{ shape: rectangle, label: "S-005 待校验" }
    Feat_answer_fUs_askI_002.St_002_checking@{ shape: rectangle, label: "S-006 校验中" }
    Feat_answer_fUs_askI_002.St_002_passed@{ shape: rectangle, label: "S-007 校验通过" }
    Feat_answer_fUs_askI_002.St_002_failed@{ shape: rectangle, label: "S-008 置信度不足" }
    Feat_answer_fUs_askI_002.I_002_1@{ shape: rectangle, label: "I-002-1 置信度校验" }
  end
  Feat_answer_fUs_askI_002.St_002_pending -. "\`进入回复策略\`" .-> Feat_answer_fUs_askI_002.St_002_checking
  Feat_answer_fUs_askI_002.St_002_checking -. "\`置信度达标\`" .-> Feat_answer_fUs_askI_002.St_002_passed
  Feat_answer_fUs_askI_002.St_002_checking -. "\`置信度不足，转 US-002\`" .-> Feat_answer_fUs_askI_002.St_002_failed
`;case`chain001F-i-003`:return`---
title: "I 环 · Feature-001-F · 阶段 I-003 生成并下发答复"
---
graph TB
  subgraph Feat_answer_fUs_askI_003["\`I-003 阶段性目标 · 生成并下发答复\`"]
    Feat_answer_fUs_askI_003.St_003_pending@{ shape: rectangle, label: "S-009 待生成" }
    Feat_answer_fUs_askI_003.St_003_composing@{ shape: rectangle, label: "S-010 生成中" }
    Feat_answer_fUs_askI_003.St_003_delivering@{ shape: rectangle, label: "S-011 下发中" }
    Feat_answer_fUs_askI_003.St_003_answered@{ shape: rectangle, label: "S-012 已答复" }
    Feat_answer_fUs_askI_003.I_003_1@{ shape: rectangle, label: "I-003-1 生成答复" }
    Feat_answer_fUs_askI_003.I_003_2@{ shape: rectangle, label: "I-003-2 下发答复" }
  end
  Feat_answer_fUs_askI_003.St_003_pending -. "\`校验通过\`" .-> Feat_answer_fUs_askI_003.St_003_composing
  Feat_answer_fUs_askI_003.St_003_composing -. "\`答复正文就绪\`" .-> Feat_answer_fUs_askI_003.St_003_delivering
  Feat_answer_fUs_askI_003.St_003_delivering -. "\`企业微信回传成功\`" .-> Feat_answer_fUs_askI_003.St_003_answered
`;case`chain001F-i-011`:return`---
title: "I 环 · Feature-001-F · 阶段 I-011 判定进入人工路径"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_011["\`I-011 阶段性目标 · 判定进入人工路径\`"]
    Feat_answer_fUs_lowConfidenceI_011.St_011_pending@{ shape: rectangle, label: "S-101 待判定" }
    Feat_answer_fUs_lowConfidenceI_011.St_011_judging@{ shape: rectangle, label: "S-102 判定中" }
    Feat_answer_fUs_lowConfidenceI_011.St_011_escalated@{ shape: rectangle, label: "S-103 已转人工" }
    Feat_answer_fUs_lowConfidenceI_011.I_011_1@{ shape: rectangle, label: "I-011-1 判定转人工" }
  end
  Feat_answer_fUs_lowConfidenceI_011.St_011_pending -. "\`置信度不足触发\`" .-> Feat_answer_fUs_lowConfidenceI_011.St_011_judging
  Feat_answer_fUs_lowConfidenceI_011.St_011_judging -. "\`确认无可靠候选\`" .-> Feat_answer_fUs_lowConfidenceI_011.St_011_escalated
`;case`chain001F-i-012`:return`---
title: "I 环 · Feature-001-F · 阶段 I-012 生成工单并告知等待"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_012["\`I-012 阶段性目标 · 生成工单并告知等待\`"]
    Feat_answer_fUs_lowConfidenceI_012.St_012_pending@{ shape: rectangle, label: "S-104 待建单" }
    Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing@{ shape: rectangle, label: "S-105 建单中" }
    Feat_answer_fUs_lowConfidenceI_012.St_012_notified@{ shape: rectangle, label: "S-106 已告知等待" }
    Feat_answer_fUs_lowConfidenceI_012.St_012_answered@{ shape: rectangle, label: "S-107 人工已接管" }
    Feat_answer_fUs_lowConfidenceI_012.I_012_1@{ shape: rectangle, label: "I-012-1 创建人工工单" }
    Feat_answer_fUs_lowConfidenceI_012.I_012_2@{ shape: rectangle, label: "I-012-2 告知客户等待" }
  end
  Feat_answer_fUs_lowConfidenceI_012.St_012_pending -. "\`判定已转人工\`" .-> Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing
  Feat_answer_fUs_lowConfidenceI_012.St_012_ticketing -. "\`工单创建完成\`" .-> Feat_answer_fUs_lowConfidenceI_012.St_012_notified
  Feat_answer_fUs_lowConfidenceI_012.St_012_notified -. "\`人工接手\`" .-> Feat_answer_fUs_lowConfidenceI_012.St_012_answered
`;case`chain001NF-us`:return`---
title: "US 环 · Feature-001-NF · 用户故事"
---
graph TB
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.Us_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
    Feat_degrade_nf.Us_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
  end
  Feat_degrade_nf.Us_kbEmpty -. "\`提交发布判定\`" .-> Feat_degrade_nf.Us_ragTimeout
  Feat_degrade_nf.Us_ragTimeout -. "\`读取告警快照\`" .-> Feat_degrade_nf.Us_llmDown
`;case`chain001NF-nf`:return`---
title: "NF 环 · Feature-001-NF · 极端场景单元清单"
---
graph TB
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.Us_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
    Feat_degrade_nf.Nf_kbEmpty@{ shape: rounded, label: "NF-101 知识库为零条时状态可见" }
    Feat_degrade_nf.Us_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
    Feat_degrade_nf.Nf_ragTimeout@{ shape: rounded, label: "NF-102 RAGFlow 超 8 秒时客户可感知" }
    Feat_degrade_nf.Nf_llmDown@{ shape: rounded, label: "NF-103 LLM 不可用时自动转人工" }
  end
  Feat_degrade_nf.Us_kbEmpty -. "\`提交发布判定\`" .-> Feat_degrade_nf.Us_ragTimeout
  Feat_degrade_nf.Us_ragTimeout -. "\`读取告警快照\`" .-> Feat_degrade_nf.Us_llmDown
  Feat_degrade_nf.Us_kbEmpty -. "\`要求\`" .-> Feat_degrade_nf.Nf_kbEmpty
  Feat_degrade_nf.Us_ragTimeout -. "\`要求\`" .-> Feat_degrade_nf.Nf_ragTimeout
  Feat_degrade_nf.Us_llmDown -. "\`要求\`" .-> Feat_degrade_nf.Nf_llmDown
`;case`chain001NF-i-111`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-111 读出条目数并判定空库"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_111["\`I-111 阶段性目标 · 读出条目数并判定空库\`"]
    Feat_degrade_nfUs_kbEmptyI_111.St_111_pending@{ shape: rectangle, label: "S-111 待读取" }
    Feat_degrade_nfUs_kbEmptyI_111.St_111_counting@{ shape: rectangle, label: "S-112 读取中" }
    Feat_degrade_nfUs_kbEmptyI_111.St_111_empty@{ shape: rectangle, label: "S-113 判定为空库" }
    Feat_degrade_nfUs_kbEmptyI_111.St_111_ready@{ shape: rectangle, label: "S-114 条目正常" }
    Feat_degrade_nfUs_kbEmptyI_111.I_111_1@{ shape: rectangle, label: "I-111-1 读取条目数" }
    Feat_degrade_nfUs_kbEmptyI_111.I_111_2@{ shape: rectangle, label: "I-111-2 判定零条场景" }
  end
  Feat_degrade_nfUs_kbEmptyI_111.St_111_pending -. "\`运营人员发起查询\`" .-> Feat_degrade_nfUs_kbEmptyI_111.St_111_counting
  Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -. "\`条目数为 0\`" .-> Feat_degrade_nfUs_kbEmptyI_111.St_111_empty
  Feat_degrade_nfUs_kbEmptyI_111.St_111_counting -. "\`条目数大于 0\`" .-> Feat_degrade_nfUs_kbEmptyI_111.St_111_ready
`;case`chain001NF-i-112`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-112 把空库显式呈现出来"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_112["\`I-112 阶段性目标 · 把空库显式呈现出来\`"]
    Feat_degrade_nfUs_kbEmptyI_112.St_112_pending@{ shape: rectangle, label: "S-115 待呈现" }
    Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering@{ shape: rectangle, label: "S-116 渲染中" }
    Feat_degrade_nfUs_kbEmptyI_112.St_112_shown@{ shape: rectangle, label: "S-117 已显式提示" }
    Feat_degrade_nfUs_kbEmptyI_112.I_112_1@{ shape: rectangle, label: "I-112-1 渲染空库提示" }
  end
  Feat_degrade_nfUs_kbEmptyI_112.St_112_pending -. "\`判定为空库\`" .-> Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering
  Feat_degrade_nfUs_kbEmptyI_112.St_112_rendering -. "\`提示已渲染\`" .-> Feat_degrade_nfUs_kbEmptyI_112.St_112_shown
`;case`chain001NF-i-121`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-121 计时并判定超时"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_121["\`I-121 阶段性目标 · 计时并判定超时\`"]
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_pending@{ shape: rectangle, label: "S-121 待计时" }
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting@{ shape: rectangle, label: "S-122 等待响应" }
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_timedOut@{ shape: rectangle, label: "S-123 判定超时" }
    Feat_degrade_nfUs_ragTimeoutI_121.St_121_returned@{ shape: rectangle, label: "S-124 按时返回" }
    Feat_degrade_nfUs_ragTimeoutI_121.I_121_1@{ shape: rectangle, label: "I-121-1 启动超时计时" }
    Feat_degrade_nfUs_ragTimeoutI_121.I_121_2@{ shape: rectangle, label: "I-121-2 判定超时" }
  end
  Feat_degrade_nfUs_ragTimeoutI_121.St_121_pending -. "\`发起检索并启动计时\`" .-> Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting
  Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -. "\`超过 8 秒未返回\`" .-> Feat_degrade_nfUs_ragTimeoutI_121.St_121_timedOut
  Feat_degrade_nfUs_ragTimeoutI_121.St_121_waiting -. "\`8 秒内返回候选\`" .-> Feat_degrade_nfUs_ragTimeoutI_121.St_121_returned
`;case`chain001NF-i-122`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-122 告知客户系统在处理"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_122["\`I-122 阶段性目标 · 告知客户系统在处理\`"]
    Feat_degrade_nfUs_ragTimeoutI_122.St_122_pending@{ shape: rectangle, label: "S-125 待提示" }
    Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying@{ shape: rectangle, label: "S-126 提示中" }
    Feat_degrade_nfUs_ragTimeoutI_122.St_122_notified@{ shape: rectangle, label: "S-127 已告知处理中" }
    Feat_degrade_nfUs_ragTimeoutI_122.I_122_1@{ shape: rectangle, label: "I-122-1 下发处理中提示" }
  end
  Feat_degrade_nfUs_ragTimeoutI_122.St_122_pending -. "\`判定超时\`" .-> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying
  Feat_degrade_nfUs_ragTimeoutI_122.St_122_notifying -. "\`提示已下发\`" .-> Feat_degrade_nfUs_ragTimeoutI_122.St_122_notified
`;case`chain001NF-i-131`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-131 识别模型不可用并转人工"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_131["\`I-131 阶段性目标 · 识别模型不可用并转人工\`"]
    Feat_degrade_nfUs_llmDownI_131.St_131_pending@{ shape: rectangle, label: "S-131 待调用" }
    Feat_degrade_nfUs_llmDownI_131.St_131_calling@{ shape: rectangle, label: "S-132 调用中" }
    Feat_degrade_nfUs_llmDownI_131.St_131_failed@{ shape: rectangle, label: "S-133 模型不可用" }
    Feat_degrade_nfUs_llmDownI_131.St_131_ok@{ shape: rectangle, label: "S-134 调用成功" }
    Feat_degrade_nfUs_llmDownI_131.I_131_1@{ shape: rectangle, label: "I-131-1 判定调用结果" }
  end
  Feat_degrade_nfUs_llmDownI_131.St_131_pending -. "\`发起模型调用\`" .-> Feat_degrade_nfUs_llmDownI_131.St_131_calling
  Feat_degrade_nfUs_llmDownI_131.St_131_calling -. "\`调用失败或返回异常\`" .-> Feat_degrade_nfUs_llmDownI_131.St_131_failed
  Feat_degrade_nfUs_llmDownI_131.St_131_calling -. "\`调用正常返回\`" .-> Feat_degrade_nfUs_llmDownI_131.St_131_ok
`;case`chain001NF-i-132`:return`---
title: "I 环 · Feature-001-NF · 阶段 I-132 建单并告知等待"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_132["\`I-132 阶段性目标 · 建单并告知等待\`"]
    Feat_degrade_nfUs_llmDownI_132.St_132_pending@{ shape: rectangle, label: "S-135 待建单" }
    Feat_degrade_nfUs_llmDownI_132.St_132_ticketing@{ shape: rectangle, label: "S-136 建单中" }
    Feat_degrade_nfUs_llmDownI_132.St_132_notified@{ shape: rectangle, label: "S-137 已告知等待" }
    Feat_degrade_nfUs_llmDownI_132.St_132_handedOff@{ shape: rectangle, label: "S-138 人工已接管" }
    Feat_degrade_nfUs_llmDownI_132.I_132_1@{ shape: rectangle, label: "I-132-1 生成人工工单" }
    Feat_degrade_nfUs_llmDownI_132.I_132_2@{ shape: rectangle, label: "I-132-2 告知等待人工" }
  end
  Feat_degrade_nfUs_llmDownI_132.St_132_pending -. "\`模型判定不可用\`" .-> Feat_degrade_nfUs_llmDownI_132.St_132_ticketing
  Feat_degrade_nfUs_llmDownI_132.St_132_ticketing -. "\`工单创建完成\`" .-> Feat_degrade_nfUs_llmDownI_132.St_132_notified
  Feat_degrade_nfUs_llmDownI_132.St_132_notified -. "\`人工接手\`" .-> Feat_degrade_nfUs_llmDownI_132.St_132_handedOff
`;case`chain002F-us`:return`---
title: "US 环 · Feature-002-F · 用户故事"
---
graph TB
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.Us_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
    Feat_knowledge_f.Us_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
    Feat_knowledge_f.Us_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
  end
  Feat_knowledge_f.Us_scan -. "\`[...]\`" .-> Feat_knowledge_f.Us_govern
  Feat_knowledge_f.Us_govern -. "\`触发扫描\`" .-> Feat_knowledge_f.Us_scan
  Feat_knowledge_f.Us_govern -. "\`[...]\`" .-> Feat_knowledge_f.Us_alert
  Feat_knowledge_f.Us_alert -. "\`晋升或下线\`" .-> Feat_knowledge_f.Us_govern
`;case`chain002F-f`:return`---
title: "F 环 · Feature-002-F · 业务能力单元清单"
---
graph TB
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.Us_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
    Feat_knowledge_f.Us_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
    Feat_knowledge_f.F_ingest@{ shape: rectangle, label: "F-201 素材接入能力" }
    Feat_knowledge_f.Us_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
    Feat_knowledge_f.F_govern@{ shape: rectangle, label: "F-202 知识治理能力" }
  end
  Feat_knowledge_f.Us_scan -. "\`[...]\`" .-> Feat_knowledge_f.Us_govern
  Feat_knowledge_f.Us_govern -. "\`触发扫描\`" .-> Feat_knowledge_f.Us_scan
  Feat_knowledge_f.Us_govern -. "\`[...]\`" .-> Feat_knowledge_f.Us_alert
  Feat_knowledge_f.Us_alert -. "\`晋升或下线\`" .-> Feat_knowledge_f.Us_govern
  Feat_knowledge_f.Us_scan -. "\`要求\`" .-> Feat_knowledge_f.F_ingest
  Feat_knowledge_f.Us_govern -. "\`要求\`" .-> Feat_knowledge_f.F_govern
  Feat_knowledge_f.Us_alert -. "\`要求\`" .-> Feat_knowledge_f.F_govern
`;case`chain002F-i-211`:return`---
title: "I 环 · Feature-002-F · 阶段 I-211 素材入库并产出候选"
---
graph TB
  subgraph Feat_knowledge_fUs_scanI_211["\`I-211 阶段性目标 · 素材入库并产出候选\`"]
    Feat_knowledge_fUs_scanI_211.St_211_pending@{ shape: rectangle, label: "S-211 待接入" }
    Feat_knowledge_fUs_scanI_211.St_211_registering@{ shape: rectangle, label: "S-212 登记中" }
    Feat_knowledge_fUs_scanI_211.St_211_scanning@{ shape: rectangle, label: "S-213 扫描中" }
    Feat_knowledge_fUs_scanI_211.St_211_submitted@{ shape: rectangle, label: "S-214 已提交候选" }
    Feat_knowledge_fUs_scanI_211.I_211_1@{ shape: rectangle, label: "I-211-1 登记素材" }
    Feat_knowledge_fUs_scanI_211.I_211_2@{ shape: rectangle, label: "I-211-2 抽取候选知识" }
    Feat_knowledge_fUs_scanI_211.I_211_3@{ shape: rectangle, label: "I-211-3 提交候选" }
  end
  Feat_knowledge_fUs_scanI_211.St_211_pending -. "\`上传素材\`" .-> Feat_knowledge_fUs_scanI_211.St_211_registering
  Feat_knowledge_fUs_scanI_211.St_211_registering -. "\`登记完成\`" .-> Feat_knowledge_fUs_scanI_211.St_211_scanning
  Feat_knowledge_fUs_scanI_211.St_211_scanning -. "\`候选已抽取并提交\`" .-> Feat_knowledge_fUs_scanI_211.St_211_submitted
`;case`chain002F-i-221`:return`---
title: "I 环 · Feature-002-F · 阶段 I-221 审阅决策并晋升"
---
graph TB
  subgraph Feat_knowledge_fUs_governI_221["\`I-221 阶段性目标 · 审阅决策并晋升\`"]
    Feat_knowledge_fUs_governI_221.St_221_pending@{ shape: rectangle, label: "S-221 待审阅" }
    Feat_knowledge_fUs_governI_221.St_221_reviewing@{ shape: rectangle, label: "S-222 审阅中" }
    Feat_knowledge_fUs_governI_221.St_221_decided@{ shape: rectangle, label: "S-223 已决策" }
    Feat_knowledge_fUs_governI_221.St_221_promoted@{ shape: rectangle, label: "S-224 已晋升可检索" }
    Feat_knowledge_fUs_governI_221.St_221_rejected@{ shape: rectangle, label: "S-225 已驳回退回" }
    Feat_knowledge_fUs_governI_221.I_221_1@{ shape: rectangle, label: "I-221-1 人工审阅候选" }
    Feat_knowledge_fUs_governI_221.I_221_2@{ shape: rectangle, label: "I-221-2 记录决策" }
    Feat_knowledge_fUs_governI_221.I_221_3@{ shape: rectangle, label: "I-221-3 晋升知识" }
  end
  Feat_knowledge_fUs_governI_221.St_221_pending -. "\`候选提交到治理\`" .-> Feat_knowledge_fUs_governI_221.St_221_reviewing
  Feat_knowledge_fUs_governI_221.St_221_reviewing -. "\`运营人员记录决策\`" .-> Feat_knowledge_fUs_governI_221.St_221_decided
  Feat_knowledge_fUs_governI_221.St_221_decided -. "\`批准晋升\`" .-> Feat_knowledge_fUs_governI_221.St_221_promoted
  Feat_knowledge_fUs_governI_221.St_221_decided -. "\`驳回退回\`" .-> Feat_knowledge_fUs_governI_221.St_221_rejected
`;case`chain002F-i-231`:return`---
title: "I 环 · Feature-002-F · 阶段 I-231 巡检并判定新鲜度"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_231["\`I-231 阶段性目标 · 巡检并判定新鲜度\`"]
    Feat_knowledge_fUs_alertI_231.St_231_pending@{ shape: rectangle, label: "S-231 待巡检" }
    Feat_knowledge_fUs_alertI_231.St_231_probing@{ shape: rectangle, label: "S-232 巡检中" }
    Feat_knowledge_fUs_alertI_231.St_231_fresh@{ shape: rectangle, label: "S-233 新鲜度正常" }
    Feat_knowledge_fUs_alertI_231.St_231_stale@{ shape: rectangle, label: "S-234 新鲜度异常" }
    Feat_knowledge_fUs_alertI_231.I_231_1@{ shape: rectangle, label: "I-231-1 巡检数据集状态" }
    Feat_knowledge_fUs_alertI_231.I_231_2@{ shape: rectangle, label: "I-231-2 判定新鲜度异常" }
  end
  Feat_knowledge_fUs_alertI_231.St_231_pending -. "\`到达巡检周期\`" .-> Feat_knowledge_fUs_alertI_231.St_231_probing
  Feat_knowledge_fUs_alertI_231.St_231_probing -. "\`全部在阈值内\`" .-> Feat_knowledge_fUs_alertI_231.St_231_fresh
  Feat_knowledge_fUs_alertI_231.St_231_probing -. "\`存在超阈值条目\`" .-> Feat_knowledge_fUs_alertI_231.St_231_stale
`;case`chain002F-i-232`:return`---
title: "I 环 · Feature-002-F · 阶段 I-232 上报告警并呈现"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_232["\`I-232 阶段性目标 · 上报告警并呈现\`"]
    Feat_knowledge_fUs_alertI_232.St_232_pending@{ shape: rectangle, label: "S-235 待上报" }
    Feat_knowledge_fUs_alertI_232.St_232_reporting@{ shape: rectangle, label: "S-236 上报中" }
    Feat_knowledge_fUs_alertI_232.St_232_listed@{ shape: rectangle, label: "S-237 控制台已列出" }
    Feat_knowledge_fUs_alertI_232.St_232_fixed@{ shape: rectangle, label: "S-238 已修复下线" }
    Feat_knowledge_fUs_alertI_232.I_232_1@{ shape: rectangle, label: "I-232-1 上报告警" }
  end
  Feat_knowledge_fUs_alertI_232.St_232_pending -. "\`判定新鲜度异常\`" .-> Feat_knowledge_fUs_alertI_232.St_232_reporting
  Feat_knowledge_fUs_alertI_232.St_232_reporting -. "\`告警已落库并展示\`" .-> Feat_knowledge_fUs_alertI_232.St_232_listed
  Feat_knowledge_fUs_alertI_232.St_232_listed -. "\`运营人员修复后下线\`" .-> Feat_knowledge_fUs_alertI_232.St_232_fixed
`;case`pano-src-001F`:return`---
title: "SRC 环 · Feature-001-F · 模块目录全览"
---
graph TB
  subgraph Feat_answer_fUs_ask["\`US-001 客户提问获得专业答复\`"]
    subgraph Feat_answer_fUs_ask.I_001["\`I-001 阶段性目标 · 取得可靠候选知识\`"]
      subgraph Feat_answer_fUs_ask.I_001.Ui_001["\`UI-001 会话输入\`"]
        Feat_answer_fUs_ask.I_001.Ui_001.Src_001@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
        Feat_answer_fUs_ask.I_001.Ui_001.Src_002@{ shape: rectangle, label: "SRC-002 应答编排器" }
        Feat_answer_fUs_ask.I_001.Ui_001.Src_005@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
      end
    end
    subgraph Feat_answer_fUs_ask.I_003["\`I-003 阶段性目标 · 生成并下发答复\`"]
      Feat_answer_fUs_ask.I_003.Ui_003Src_003@{ shape: rectangle, label: "SRC-003 知识应答循环" }
      Feat_answer_fUs_ask.I_003.Ui_003Src_007@{ shape: rectangle, label: "SRC-007 本地存储" }
    end
    subgraph Feat_answer_fUs_ask.I_002["\`I-002 阶段性目标 · 判定可否自动答复\`"]
      Feat_answer_fUs_ask.I_002.Ui_002Src_004@{ shape: rectangle, label: "SRC-004 回复策略" }
    end
  end
  subgraph Feat_answer_fUs_lowConfidence["\`US-002 答不准时转人工而非硬答\`"]
    Feat_answer_fUs_lowConfidence.I_012Ui_012Src_006@{ shape: rectangle, label: "SRC-006 转人工服务" }
  end
  Feat_answer_fUs_ask.I_001.Ui_001.Src_001 -. "\`分发归一化消息\`" .-> Feat_answer_fUs_ask.I_001.Ui_001.Src_002
  Feat_answer_fUs_ask.I_001.Ui_001.Src_002 -. "\`请求应答\`" .-> Feat_answer_fUs_ask.I_003.Ui_003Src_003
  Feat_answer_fUs_ask.I_003.Ui_003Src_003 -. "\`检索候选知识\`" .-> Feat_answer_fUs_ask.I_001.Ui_001.Src_005
  Feat_answer_fUs_ask.I_003.Ui_003Src_003 -. "\`校验置信度\`" .-> Feat_answer_fUs_ask.I_002.Ui_002Src_004
  Feat_answer_fUs_ask.I_001.Ui_001.Src_002 -. "\`低置信度时转人工\`" .-> Feat_answer_fUs_lowConfidence.I_012Ui_012Src_006
  Feat_answer_fUs_lowConfidence.I_012Ui_012Src_006 -. "\`持久化工单\`" .-> Feat_answer_fUs_ask.I_003.Ui_003Src_007
`;case`carrier001F`:return`---
title: "SRC 环 · Feature-001-F · 数据载体"
---
graph TB
  Feat_answer_fCvt_normalize@{ shape: rounded, label: "CVT-001 提问归一化转换器" }
  Feat_answer_fIn_chatMessage@{ shape: rectangle, label: "IN-001 客户提问入参" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fOut_answer@{ shape: rectangle, label: "OUT-001 答复出参视图" }
  Feat_answer_fIn_chatMessage -. "\`转换为检索查询\`" .-> Feat_answer_fBiz_query
  Feat_answer_fBiz_query -. "\`低置信度落工单\`" .-> Feat_answer_fPod_ticket
  Feat_answer_fPod_ticket -. "\`写入工单\`" .-> Feat_answer_fDao_store
  Feat_answer_fDao_store -. "\`查询答复内容\`" .-> Feat_answer_fOut_answer
  Feat_answer_fCvt_normalize -. "\`负责 报文→IN-001 映射\`" .-> Feat_answer_fIn_chatMessage
  Feat_answer_fCvt_normalize -. "\`负责 POD-001→OUT-001 映射\`" .-> Feat_answer_fOut_answer
`;case`erm001F-ticket`:return`---
title: "SRC 环 · Feature-001-F · 数据模型 · 工单"
---
graph TB
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fPod_ticket -. "\`写入工单\`" .-> Feat_answer_fDao_store
`;case`pano-src-001NF`:return`---
title: "SRC 环 · Feature-001-NF · 模块目录全览"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmpty["\`US-101 知识库为空时运营人员能看见\`"]
    subgraph Feat_degrade_nfUs_kbEmpty.I_111["\`I-111 阶段性目标 · 读出条目数并判定空库\`"]
      subgraph Feat_degrade_nfUs_kbEmpty.I_111.Ui_111["\`UI-111 状态查询\`"]
        Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_101@{ shape: rectangle, label: "SRC-101 集成状态路由" }
        Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_104@{ shape: rectangle, label: "SRC-104 RAGFlow 生命周期探针" }
      end
    end
    subgraph Feat_degrade_nfUs_kbEmpty.I_112["\`I-112 阶段性目标 · 把空库显式呈现出来\`"]
      Feat_degrade_nfUs_kbEmpty.I_112.Ui_112Src_103@{ shape: rectangle, label: "SRC-103 知识告警" }
      Feat_degrade_nfUs_kbEmpty.I_112.Ui_112Src_105@{ shape: rectangle, label: "SRC-105 运营人员控制台" }
    end
  end
  subgraph Feat_degrade_nfUs_ragTimeout["\`US-102 RAGFlow 超时时客户不被静默等待\`"]
    Feat_degrade_nfUs_ragTimeout.I_122Ui_122Src_102@{ shape: rectangle, label: "SRC-102 评测闸门" }
  end
  subgraph Feat_degrade_nfUs_llmDown["\`US-103 LLM 不可用时转人工而非静默失败\`"]
    Feat_degrade_nfUs_llmDown.I_132Ui_132Src_106@{ shape: rectangle, label: "SRC-106 告警状态存储" }
  end
  Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_101 -. "\`探测数据集状态\`" .-> Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_104
  Feat_degrade_nfUs_kbEmpty.I_111.Ui_111.Src_101 -. "\`查询空库告警\`" .-> Feat_degrade_nfUs_kbEmpty.I_112.Ui_112Src_103
  Feat_degrade_nfUs_kbEmpty.I_112.Ui_112Src_103 -. "\`提交发布判定\`" .-> Feat_degrade_nfUs_ragTimeout.I_122Ui_122Src_102
  Feat_degrade_nfUs_ragTimeout.I_122Ui_122Src_102 -. "\`读取告警快照\`" .-> Feat_degrade_nfUs_llmDown.I_132Ui_132Src_106
`;case`carrier001NF`:return`---
title: "SRC 环 · Feature-001-NF · 数据载体"
---
graph TB
  Feat_degrade_nfIn_probeQuery@{ shape: rectangle, label: "IN-101 状态探测入参" }
  Feat_degrade_nfCvt_probe@{ shape: rounded, label: "CVT-101 探测结果转换器" }
  Feat_degrade_nfBiz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfOut_status@{ shape: rectangle, label: "OUT-101 状态出参视图" }
  Feat_degrade_nfDao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  Feat_degrade_nfIn_probeQuery -. "\`转换为探测结果\`" .-> Feat_degrade_nfBiz_probeResult
  Feat_degrade_nfBiz_probeResult -. "\`异常转告警实体\`" .-> Feat_degrade_nfPod_alert
  Feat_degrade_nfBiz_probeResult -. "\`渲染状态载荷\`" .-> Feat_degrade_nfOut_status
  Feat_degrade_nfPod_alert -. "\`写入告警\`" .-> Feat_degrade_nfDao_alert
  Feat_degrade_nfCvt_probe -. "\`负责 BIZ-101→OUT-101 映射\`" .-> Feat_degrade_nfBiz_probeResult
  Feat_degrade_nfCvt_probe -. "\`负责 BIZ-101→POD-101 映射\`" .-> Feat_degrade_nfPod_alert
`;case`erm001NF-alert`:return`---
title: "SRC 环 · Feature-001-NF · 数据模型 · 告警"
---
graph TB
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfDao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  Feat_degrade_nfPod_alert -. "\`写入告警\`" .-> Feat_degrade_nfDao_alert
`;case`pano-src-002F`:return`---
title: "SRC 环 · Feature-002-F · 模块目录全览"
---
graph TB
  subgraph Feat_knowledge_fUs_govern["\`US-202 候选知识经我决策后才对外可见\`"]
    Feat_knowledge_fUs_govern.I_221Ui_221Src_202@{ shape: rectangle, label: "SRC-202 知识库路由" }
    Feat_knowledge_fUs_govern.I_221Ui_221Src_207@{ shape: rectangle, label: "SRC-207 知识治理" }
    Feat_knowledge_fUs_govern.I_221Ui_221Src_205@{ shape: rectangle, label: "SRC-205 文档登记簿" }
  end
  subgraph Feat_knowledge_fUs_scan["\`US-201 素材入库后自动进入候选知识\`"]
    subgraph Feat_knowledge_fUs_scan.I_211Ui_211["\`UI-211 素材上传\`"]
      Feat_knowledge_fUs_scan.I_211Ui_211.Src_201@{ shape: rectangle, label: "SRC-201 素材路由" }
      Feat_knowledge_fUs_scan.I_211Ui_211.Src_204@{ shape: rectangle, label: "SRC-204 素材批处理" }
      Feat_knowledge_fUs_scan.I_211Ui_211.Src_206@{ shape: rectangle, label: "SRC-206 知识扫描" }
      Feat_knowledge_fUs_scan.I_211Ui_211.Src_203@{ shape: rectangle, label: "SRC-203 素材服务" }
    end
  end
  subgraph Feat_knowledge_fUs_alert["\`US-203 知识陈旧时我能收到提示\`"]
    subgraph Feat_knowledge_fUs_alert.I_231["\`I-231 阶段性目标 · 巡检并判定新鲜度\`"]
      Feat_knowledge_fUs_alert.I_231.Ui_231Src_208@{ shape: rectangle, label: "SRC-208 知识同步" }
    end
    subgraph Feat_knowledge_fUs_alert.I_232["\`I-232 阶段性目标 · 上报告警并呈现\`"]
      Feat_knowledge_fUs_alert.I_232.Ui_232Src_209@{ shape: rectangle, label: "SRC-209 知识生命周期视图" }
    end
  end
  Feat_knowledge_fUs_scan.I_211Ui_211.Src_201 -. "\`接收素材\`" .-> Feat_knowledge_fUs_scan.I_211Ui_211.Src_203
  Feat_knowledge_fUs_scan.I_211Ui_211.Src_204 -. "\`批量接入\`" .-> Feat_knowledge_fUs_scan.I_211Ui_211.Src_203
  Feat_knowledge_fUs_scan.I_211Ui_211.Src_206 -. "\`提交候选\`" .-> Feat_knowledge_fUs_govern.I_221Ui_221Src_207
  Feat_knowledge_fUs_govern.I_221Ui_221Src_202 -. "\`触发扫描\`" .-> Feat_knowledge_fUs_scan.I_211Ui_211.Src_206
  Feat_knowledge_fUs_scan.I_211Ui_211.Src_203 -. "\`登记文档\`" .-> Feat_knowledge_fUs_govern.I_221Ui_221Src_205
  Feat_knowledge_fUs_govern.I_221Ui_221Src_207 -. "\`批准后推送\`" .-> Feat_knowledge_fUs_alert.I_231.Ui_231Src_208
  Feat_knowledge_fUs_alert.I_231.Ui_231Src_208 -. "\`更新生命周期\`" .-> Feat_knowledge_fUs_alert.I_232.Ui_232Src_209
  Feat_knowledge_fUs_alert.I_232.Ui_232Src_209 -. "\`晋升或下线\`" .-> Feat_knowledge_fUs_govern.I_221Ui_221Src_205
`;case`carrier002F`:return`---
title: "SRC 环 · Feature-002-F · 数据载体"
---
graph TB
  Feat_knowledge_fIn_material@{ shape: rectangle, label: "IN-201 素材入参" }
  Feat_knowledge_fCvt_material@{ shape: rounded, label: "CVT-201 素材转换器" }
  Feat_knowledge_fBiz_candidate@{ shape: rectangle, label: "BIZ-201 候选知识对象" }
  Feat_knowledge_fPod_document@{ shape: rectangle, label: "POD-201 文档登记实体" }
  Feat_knowledge_fDao_registry@{ shape: cylinder, label: "DAO-201 文档登记访问" }
  Feat_knowledge_fOut_knowledgeStatus@{ shape: rectangle, label: "OUT-201 知识状态出参视图" }
  Feat_knowledge_fIn_material -. "\`转换为候选对象\`" .-> Feat_knowledge_fBiz_candidate
  Feat_knowledge_fBiz_candidate -. "\`登记为文档实体\`" .-> Feat_knowledge_fPod_document
  Feat_knowledge_fPod_document -. "\`写入文档标识\`" .-> Feat_knowledge_fDao_registry
  Feat_knowledge_fDao_registry -. "\`查询状态\`" .-> Feat_knowledge_fOut_knowledgeStatus
  Feat_knowledge_fCvt_material -. "\`负责 素材→BIZ-201 映射\`" .-> Feat_knowledge_fBiz_candidate
  Feat_knowledge_fCvt_material -. "\`负责 BIZ-201→POD-201 映射\`" .-> Feat_knowledge_fPod_document
`;case`erm002F-document`:return`---
title: "SRC 环 · Feature-002-F · 数据模型 · 文档"
---
graph TB
  Feat_knowledge_fPod_document@{ shape: rectangle, label: "POD-201 文档登记实体" }
  Feat_knowledge_fDao_registry@{ shape: cylinder, label: "DAO-201 文档登记访问" }
  Feat_knowledge_fPod_document -. "\`写入文档标识\`" .-> Feat_knowledge_fDao_registry
`;case`ui001F-001`:return`---
title: "UI 环 · Feature-001-F · I-001-UI-001 会话输入"
---
graph TB
  subgraph Feat_answer_fUs_askI_001Ui_001["\`UI-001 会话输入\`"]
    Feat_answer_fUs_askI_001Ui_001.Ui_001_info_1@{ shape: rounded, label: "UI-001-信息设计-001 提问输入信息" }
    Feat_answer_fUs_askI_001Ui_001.Ui_001_act_1@{ shape: rounded, label: "UI-001-交互设计-001 提交提问" }
  end
`;case`ui001F-001-info-1`:return`---
title: "UI 环 · Feature-001-F · UI-001-信息设计-001 提问输入信息"
---
graph TB
  subgraph Feat_answer_fUs_askI_001Ui_001["\`UI-001 会话输入\`"]
    Feat_answer_fUs_askI_001Ui_001.Ui_001_info_1@{ shape: rounded, label: "UI-001-信息设计-001 提问输入信息" }
  end
`;case`ui001F-001-act-1`:return`---
title: "UI 环 · Feature-001-F · UI-001-交互设计-001 提交提问"
---
graph TB
  subgraph Feat_answer_fUs_askI_001Ui_001["\`UI-001 会话输入\`"]
    Feat_answer_fUs_askI_001Ui_001.Ui_001_act_1@{ shape: rounded, label: "UI-001-交互设计-001 提交提问" }
  end
`;case`ui001F-002`:return`---
title: "UI 环 · Feature-001-F · I-002-UI-002 判定反馈"
---
graph TB
  subgraph Feat_answer_fUs_askI_002Ui_002["\`UI-002 判定反馈\`"]
    Feat_answer_fUs_askI_002Ui_002.Ui_002_info_1@{ shape: rounded, label: "UI-002-信息设计-001 判定中提示" }
    Feat_answer_fUs_askI_002Ui_002.Ui_002_act_1@{ shape: rounded, label: "UI-002-交互设计-001 等待免刷新" }
  end
`;case`ui001F-002-info-1`:return`---
title: "UI 环 · Feature-001-F · UI-002-信息设计-001 判定中提示"
---
graph TB
  subgraph Feat_answer_fUs_askI_002Ui_002["\`UI-002 判定反馈\`"]
    Feat_answer_fUs_askI_002Ui_002.Ui_002_info_1@{ shape: rounded, label: "UI-002-信息设计-001 判定中提示" }
  end
`;case`ui001F-002-act-1`:return`---
title: "UI 环 · Feature-001-F · UI-002-交互设计-001 等待免刷新"
---
graph TB
  subgraph Feat_answer_fUs_askI_002Ui_002["\`UI-002 判定反馈\`"]
    Feat_answer_fUs_askI_002Ui_002.Ui_002_act_1@{ shape: rounded, label: "UI-002-交互设计-001 等待免刷新" }
  end
`;case`ui001F-003`:return`---
title: "UI 环 · Feature-001-F · I-003-UI-003 答复呈现"
---
graph TB
  subgraph Feat_answer_fUs_askI_003Ui_003["\`UI-003 答复呈现\`"]
    Feat_answer_fUs_askI_003Ui_003.Ui_003_info_1@{ shape: rounded, label: "UI-003-信息设计-001 答复正文字段" }
    Feat_answer_fUs_askI_003Ui_003.Ui_003_info_2@{ shape: rounded, label: "UI-003-信息设计-002 知识来源条目" }
    Feat_answer_fUs_askI_003Ui_003.Ui_003_act_1@{ shape: rounded, label: "UI-003-交互设计-001 答复同屏呈现" }
  end
`;case`ui001F-003-info-1`:return`---
title: "UI 环 · Feature-001-F · UI-003-信息设计-001 答复正文字段"
---
graph TB
  subgraph Feat_answer_fUs_askI_003Ui_003["\`UI-003 答复呈现\`"]
    Feat_answer_fUs_askI_003Ui_003.Ui_003_info_1@{ shape: rounded, label: "UI-003-信息设计-001 答复正文字段" }
  end
`;case`ui001F-003-info-2`:return`---
title: "UI 环 · Feature-001-F · UI-003-信息设计-002 知识来源条目"
---
graph TB
  subgraph Feat_answer_fUs_askI_003Ui_003["\`UI-003 答复呈现\`"]
    Feat_answer_fUs_askI_003Ui_003.Ui_003_info_2@{ shape: rounded, label: "UI-003-信息设计-002 知识来源条目" }
  end
`;case`ui001F-003-act-1`:return`---
title: "UI 环 · Feature-001-F · UI-003-交互设计-001 答复同屏呈现"
---
graph TB
  subgraph Feat_answer_fUs_askI_003Ui_003["\`UI-003 答复呈现\`"]
    Feat_answer_fUs_askI_003Ui_003.Ui_003_act_1@{ shape: rounded, label: "UI-003-交互设计-001 答复同屏呈现" }
  end
`;case`ui001F-011`:return`---
title: "UI 环 · Feature-001-F · I-011-UI-011 转接提示"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_011Ui_011["\`UI-011 转接提示\`"]
    Feat_answer_fUs_lowConfidenceI_011Ui_011.Ui_011_info_1@{ shape: rounded, label: "UI-011-信息设计-001 转接中提示" }
    Feat_answer_fUs_lowConfidenceI_011Ui_011.Ui_011_act_1@{ shape: rounded, label: "UI-011-交互设计-001 转接反馈" }
  end
`;case`ui001F-011-info-1`:return`---
title: "UI 环 · Feature-001-F · UI-011-信息设计-001 转接中提示"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_011Ui_011["\`UI-011 转接提示\`"]
    Feat_answer_fUs_lowConfidenceI_011Ui_011.Ui_011_info_1@{ shape: rounded, label: "UI-011-信息设计-001 转接中提示" }
  end
`;case`ui001F-011-act-1`:return`---
title: "UI 环 · Feature-001-F · UI-011-交互设计-001 转接反馈"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_011Ui_011["\`UI-011 转接提示\`"]
    Feat_answer_fUs_lowConfidenceI_011Ui_011.Ui_011_act_1@{ shape: rounded, label: "UI-011-交互设计-001 转接反馈" }
  end
`;case`ui001F-012`:return`---
title: "UI 环 · Feature-001-F · I-012-UI-012 转人工告知"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_012Ui_012["\`UI-012 转人工告知\`"]
    Feat_answer_fUs_lowConfidenceI_012Ui_012.Ui_012_info_1@{ shape: rounded, label: "UI-012-信息设计-001 等待告知信息" }
    Feat_answer_fUs_lowConfidenceI_012Ui_012.Ui_012_act_1@{ shape: rounded, label: "UI-012-交互设计-001 工单状态查看" }
  end
`;case`ui001F-012-info-1`:return`---
title: "UI 环 · Feature-001-F · UI-012-信息设计-001 等待告知信息"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_012Ui_012["\`UI-012 转人工告知\`"]
    Feat_answer_fUs_lowConfidenceI_012Ui_012.Ui_012_info_1@{ shape: rounded, label: "UI-012-信息设计-001 等待告知信息" }
  end
`;case`ui001F-012-act-1`:return`---
title: "UI 环 · Feature-001-F · UI-012-交互设计-001 工单状态查看"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_012Ui_012["\`UI-012 转人工告知\`"]
    Feat_answer_fUs_lowConfidenceI_012Ui_012.Ui_012_act_1@{ shape: rounded, label: "UI-012-交互设计-001 工单状态查看" }
  end
`;case`ui001NF-111`:return`---
title: "UI 环 · Feature-001-NF · I-111-UI-111 状态查询"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_111Ui_111["\`UI-111 状态查询\`"]
    Feat_degrade_nfUs_kbEmptyI_111Ui_111.Ui_111_info_1@{ shape: rounded, label: "UI-111-信息设计-001 条目数展示" }
    Feat_degrade_nfUs_kbEmptyI_111Ui_111.Ui_111_act_1@{ shape: rounded, label: "UI-111-交互设计-001 发起查询" }
  end
`;case`ui001NF-111-info-1`:return`---
title: "UI 环 · Feature-001-NF · UI-111-信息设计-001 条目数展示"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_111Ui_111["\`UI-111 状态查询\`"]
    Feat_degrade_nfUs_kbEmptyI_111Ui_111.Ui_111_info_1@{ shape: rounded, label: "UI-111-信息设计-001 条目数展示" }
  end
`;case`ui001NF-111-act-1`:return`---
title: "UI 环 · Feature-001-NF · UI-111-交互设计-001 发起查询"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_111Ui_111["\`UI-111 状态查询\`"]
    Feat_degrade_nfUs_kbEmptyI_111Ui_111.Ui_111_act_1@{ shape: rounded, label: "UI-111-交互设计-001 发起查询" }
  end
`;case`ui001NF-112`:return`---
title: "UI 环 · Feature-001-NF · I-112-UI-112 空库提示呈现"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_112Ui_112["\`UI-112 空库提示呈现\`"]
    Feat_degrade_nfUs_kbEmptyI_112Ui_112.Ui_112_info_1@{ shape: rounded, label: "UI-112-信息设计-001 空库提示信息" }
    Feat_degrade_nfUs_kbEmptyI_112Ui_112.Ui_112_act_1@{ shape: rounded, label: "UI-112-交互设计-001 控制台查看" }
  end
`;case`ui001NF-112-info-1`:return`---
title: "UI 环 · Feature-001-NF · UI-112-信息设计-001 空库提示信息"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_112Ui_112["\`UI-112 空库提示呈现\`"]
    Feat_degrade_nfUs_kbEmptyI_112Ui_112.Ui_112_info_1@{ shape: rounded, label: "UI-112-信息设计-001 空库提示信息" }
  end
`;case`ui001NF-112-act-1`:return`---
title: "UI 环 · Feature-001-NF · UI-112-交互设计-001 控制台查看"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_112Ui_112["\`UI-112 空库提示呈现\`"]
    Feat_degrade_nfUs_kbEmptyI_112Ui_112.Ui_112_act_1@{ shape: rounded, label: "UI-112-交互设计-001 控制台查看" }
  end
`;case`ui001NF-121`:return`---
title: "UI 环 · Feature-001-NF · I-121-UI-121 等待反馈"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_121Ui_121["\`UI-121 等待反馈\`"]
    Feat_degrade_nfUs_ragTimeoutI_121Ui_121.Ui_121_info_1@{ shape: rounded, label: "UI-121-信息设计-001 等待中提示" }
    Feat_degrade_nfUs_ragTimeoutI_121Ui_121.Ui_121_act_1@{ shape: rounded, label: "UI-121-交互设计-001 免手动刷新" }
  end
`;case`ui001NF-121-info-1`:return`---
title: "UI 环 · Feature-001-NF · UI-121-信息设计-001 等待中提示"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_121Ui_121["\`UI-121 等待反馈\`"]
    Feat_degrade_nfUs_ragTimeoutI_121Ui_121.Ui_121_info_1@{ shape: rounded, label: "UI-121-信息设计-001 等待中提示" }
  end
`;case`ui001NF-121-act-1`:return`---
title: "UI 环 · Feature-001-NF · UI-121-交互设计-001 免手动刷新"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_121Ui_121["\`UI-121 等待反馈\`"]
    Feat_degrade_nfUs_ragTimeoutI_121Ui_121.Ui_121_act_1@{ shape: rounded, label: "UI-121-交互设计-001 免手动刷新" }
  end
`;case`ui001NF-122`:return`---
title: "UI 环 · Feature-001-NF · I-122-UI-122 处理中提示"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_122Ui_122["\`UI-122 处理中提示\`"]
    Feat_degrade_nfUs_ragTimeoutI_122Ui_122.Ui_122_info_1@{ shape: rounded, label: "UI-122-信息设计-001 处理中提示信息" }
    Feat_degrade_nfUs_ragTimeoutI_122Ui_122.Ui_122_act_1@{ shape: rounded, label: "UI-122-交互设计-001 提示下发" }
  end
`;case`ui001NF-122-info-1`:return`---
title: "UI 环 · Feature-001-NF · UI-122-信息设计-001 处理中提示信息"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_122Ui_122["\`UI-122 处理中提示\`"]
    Feat_degrade_nfUs_ragTimeoutI_122Ui_122.Ui_122_info_1@{ shape: rounded, label: "UI-122-信息设计-001 处理中提示信息" }
  end
`;case`ui001NF-122-act-1`:return`---
title: "UI 环 · Feature-001-NF · UI-122-交互设计-001 提示下发"
---
graph TB
  subgraph Feat_degrade_nfUs_ragTimeoutI_122Ui_122["\`UI-122 处理中提示\`"]
    Feat_degrade_nfUs_ragTimeoutI_122Ui_122.Ui_122_act_1@{ shape: rounded, label: "UI-122-交互设计-001 提示下发" }
  end
`;case`ui001NF-131`:return`---
title: "UI 环 · Feature-001-NF · I-131-UI-131 调用反馈"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_131Ui_131["\`UI-131 调用反馈\`"]
    Feat_degrade_nfUs_llmDownI_131Ui_131.Ui_131_info_1@{ shape: rounded, label: "UI-131-信息设计-001 调用异常提示" }
    Feat_degrade_nfUs_llmDownI_131Ui_131.Ui_131_act_1@{ shape: rounded, label: "UI-131-交互设计-001 异常反馈" }
  end
`;case`ui001NF-131-info-1`:return`---
title: "UI 环 · Feature-001-NF · UI-131-信息设计-001 调用异常提示"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_131Ui_131["\`UI-131 调用反馈\`"]
    Feat_degrade_nfUs_llmDownI_131Ui_131.Ui_131_info_1@{ shape: rounded, label: "UI-131-信息设计-001 调用异常提示" }
  end
`;case`ui001NF-131-act-1`:return`---
title: "UI 环 · Feature-001-NF · UI-131-交互设计-001 异常反馈"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_131Ui_131["\`UI-131 调用反馈\`"]
    Feat_degrade_nfUs_llmDownI_131Ui_131.Ui_131_act_1@{ shape: rounded, label: "UI-131-交互设计-001 异常反馈" }
  end
`;case`ui001NF-132`:return`---
title: "UI 环 · Feature-001-NF · I-132-UI-132 转人工告知"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_132Ui_132["\`UI-132 转人工告知\`"]
    Feat_degrade_nfUs_llmDownI_132Ui_132.Ui_132_info_1@{ shape: rounded, label: "UI-132-信息设计-001 等待告知信息" }
    Feat_degrade_nfUs_llmDownI_132Ui_132.Ui_132_act_1@{ shape: rounded, label: "UI-132-交互设计-001 告警查看" }
  end
`;case`ui001NF-132-info-1`:return`---
title: "UI 环 · Feature-001-NF · UI-132-信息设计-001 等待告知信息"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_132Ui_132["\`UI-132 转人工告知\`"]
    Feat_degrade_nfUs_llmDownI_132Ui_132.Ui_132_info_1@{ shape: rounded, label: "UI-132-信息设计-001 等待告知信息" }
  end
`;case`ui001NF-132-act-1`:return`---
title: "UI 环 · Feature-001-NF · UI-132-交互设计-001 告警查看"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_132Ui_132["\`UI-132 转人工告知\`"]
    Feat_degrade_nfUs_llmDownI_132Ui_132.Ui_132_act_1@{ shape: rounded, label: "UI-132-交互设计-001 告警查看" }
  end
`;case`ui002F-211`:return`---
title: "UI 环 · Feature-002-F · I-211-UI-211 素材上传"
---
graph TB
  subgraph Feat_knowledge_fUs_scanI_211Ui_211["\`UI-211 素材上传\`"]
    Feat_knowledge_fUs_scanI_211Ui_211.Ui_211_info_1@{ shape: rounded, label: "UI-211-信息设计-001 上传表单信息" }
    Feat_knowledge_fUs_scanI_211Ui_211.Ui_211_act_1@{ shape: rounded, label: "UI-211-交互设计-001 上传提交" }
  end
`;case`ui002F-211-info-1`:return`---
title: "UI 环 · Feature-002-F · UI-211-信息设计-001 上传表单信息"
---
graph TB
  subgraph Feat_knowledge_fUs_scanI_211Ui_211["\`UI-211 素材上传\`"]
    Feat_knowledge_fUs_scanI_211Ui_211.Ui_211_info_1@{ shape: rounded, label: "UI-211-信息设计-001 上传表单信息" }
  end
`;case`ui002F-211-act-1`:return`---
title: "UI 环 · Feature-002-F · UI-211-交互设计-001 上传提交"
---
graph TB
  subgraph Feat_knowledge_fUs_scanI_211Ui_211["\`UI-211 素材上传\`"]
    Feat_knowledge_fUs_scanI_211Ui_211.Ui_211_act_1@{ shape: rounded, label: "UI-211-交互设计-001 上传提交" }
  end
`;case`ui002F-221`:return`---
title: "UI 环 · Feature-002-F · I-221-UI-221 审阅工作台"
---
graph TB
  subgraph Feat_knowledge_fUs_governI_221Ui_221["\`UI-221 审阅工作台\`"]
    Feat_knowledge_fUs_governI_221Ui_221.Ui_221_info_1@{ shape: rounded, label: "UI-221-信息设计-001 候选条目列表" }
    Feat_knowledge_fUs_governI_221Ui_221.Ui_221_info_2@{ shape: rounded, label: "UI-221-信息设计-002 决策记录字段" }
    Feat_knowledge_fUs_governI_221Ui_221.Ui_221_act_1@{ shape: rounded, label: "UI-221-交互设计-001 批准驳回操作" }
  end
`;case`ui002F-221-info-1`:return`---
title: "UI 环 · Feature-002-F · UI-221-信息设计-001 候选条目列表"
---
graph TB
  subgraph Feat_knowledge_fUs_governI_221Ui_221["\`UI-221 审阅工作台\`"]
    Feat_knowledge_fUs_governI_221Ui_221.Ui_221_info_1@{ shape: rounded, label: "UI-221-信息设计-001 候选条目列表" }
  end
`;case`ui002F-221-info-2`:return`---
title: "UI 环 · Feature-002-F · UI-221-信息设计-002 决策记录字段"
---
graph TB
  subgraph Feat_knowledge_fUs_governI_221Ui_221["\`UI-221 审阅工作台\`"]
    Feat_knowledge_fUs_governI_221Ui_221.Ui_221_info_2@{ shape: rounded, label: "UI-221-信息设计-002 决策记录字段" }
  end
`;case`ui002F-221-act-1`:return`---
title: "UI 环 · Feature-002-F · UI-221-交互设计-001 批准驳回操作"
---
graph TB
  subgraph Feat_knowledge_fUs_governI_221Ui_221["\`UI-221 审阅工作台\`"]
    Feat_knowledge_fUs_governI_221Ui_221.Ui_221_act_1@{ shape: rounded, label: "UI-221-交互设计-001 批准驳回操作" }
  end
`;case`ui002F-231`:return`---
title: "UI 环 · Feature-002-F · I-231-UI-231 巡检状态"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_231Ui_231["\`UI-231 巡检状态\`"]
    Feat_knowledge_fUs_alertI_231Ui_231.Ui_231_info_1@{ shape: rounded, label: "UI-231-信息设计-001 新鲜度状态" }
    Feat_knowledge_fUs_alertI_231Ui_231.Ui_231_act_1@{ shape: rounded, label: "UI-231-交互设计-001 触发巡检" }
  end
`;case`ui002F-231-info-1`:return`---
title: "UI 环 · Feature-002-F · UI-231-信息设计-001 新鲜度状态"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_231Ui_231["\`UI-231 巡检状态\`"]
    Feat_knowledge_fUs_alertI_231Ui_231.Ui_231_info_1@{ shape: rounded, label: "UI-231-信息设计-001 新鲜度状态" }
  end
`;case`ui002F-231-act-1`:return`---
title: "UI 环 · Feature-002-F · UI-231-交互设计-001 触发巡检"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_231Ui_231["\`UI-231 巡检状态\`"]
    Feat_knowledge_fUs_alertI_231Ui_231.Ui_231_act_1@{ shape: rounded, label: "UI-231-交互设计-001 触发巡检" }
  end
`;case`ui002F-232`:return`---
title: "UI 环 · Feature-002-F · I-232-UI-232 告警呈现"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_232Ui_232["\`UI-232 告警呈现\`"]
    Feat_knowledge_fUs_alertI_232Ui_232.Ui_232_info_1@{ shape: rounded, label: "UI-232-信息设计-001 告警列表" }
    Feat_knowledge_fUs_alertI_232Ui_232.Ui_232_act_1@{ shape: rounded, label: "UI-232-交互设计-001 告警处理" }
  end
`;case`ui002F-232-info-1`:return`---
title: "UI 环 · Feature-002-F · UI-232-信息设计-001 告警列表"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_232Ui_232["\`UI-232 告警呈现\`"]
    Feat_knowledge_fUs_alertI_232Ui_232.Ui_232_info_1@{ shape: rounded, label: "UI-232-信息设计-001 告警列表" }
  end
`;case`ui002F-232-act-1`:return`---
title: "UI 环 · Feature-002-F · UI-232-交互设计-001 告警处理"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_232Ui_232["\`UI-232 告警呈现\`"]
    Feat_knowledge_fUs_alertI_232Ui_232.Ui_232_act_1@{ shape: rounded, label: "UI-232-交互设计-001 告警处理" }
  end
`;case`api001F-src001-1`:return`---
title: "callback 微信客服回调"
---
graph TB
  subgraph Feat_answer_fUs_askI_001Ui_001Src_001["\`SRC-001 微信客服回调入口\`"]
    Feat_answer_fUs_askI_001Ui_001Src_001.Api_001@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  end
`;case`api001F-src006-1`:return`---
title: "handoffs 工单列表"
---
graph TB
  subgraph Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006["\`SRC-006 转人工服务\`"]
    Feat_answer_fUs_lowConfidenceI_012Ui_012Src_006.Api_002@{ shape: rectangle, label: "API-002 GET /handoffs 工单列表" }
  end
`;case`api001NF-src101-1`:return`---
title: "status 集成状态"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101["\`SRC-101 集成状态路由\`"]
    Feat_degrade_nfUs_kbEmptyI_111Ui_111Src_101.Api_101@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  end
`;case`api002F-src201-1`:return`---
title: "materials 素材接入"
---
graph TB
  subgraph Feat_knowledge_fUs_scanI_211Ui_211Src_201["\`SRC-201 素材路由\`"]
    Feat_knowledge_fUs_scanI_211Ui_211Src_201.Api_201@{ shape: rectangle, label: "API-201 POST /materials 素材接入" }
  end
`;case`api002F-src202-1`:return`---
title: "scan 知识扫描"
---
graph TB
  subgraph Feat_knowledge_fUs_governI_221Ui_221Src_202["\`SRC-202 知识库路由\`"]
    Feat_knowledge_fUs_governI_221Ui_221Src_202.Api_202@{ shape: rectangle, label: "API-202 POST /knowledge/scan 知识扫描" }
  end
`;case`api002F-src202-2`:return`---
title: "status 知识状态"
---
graph TB
  subgraph Feat_knowledge_fUs_governI_221Ui_221Src_202["\`SRC-202 知识库路由\`"]
    Feat_knowledge_fUs_governI_221Ui_221Src_202.Api_203@{ shape: rectangle, label: "API-203 GET /knowledge/status 知识状态" }
  end
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
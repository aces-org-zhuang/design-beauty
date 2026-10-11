var e=e=>{switch(e){case`procLocal`:return`---
title: "进程与线程视图 · 本地开发环境"
---
graph TB
`;case`procProd`:return`---
title: "进程与线程视图 · 生产环境"
---
graph TB
`;case`pano-us`:return`---
title: "US 全景 · 全部 Feature"
---
graph TB
  Feat_answer_fUs_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
  Feat_answer_fUs_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  Feat_degrade_nfUs_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
  Feat_degrade_nfUs_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
  Feat_knowledge_fUs_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
  Feat_knowledge_fUs_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
  Feat_knowledge_fUs_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
  Feat_degrade_nfUs_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
`;case`pano-f`:return`---
title: "F 全景 · 全部 F 链的能力单元"
---
graph TB
  Feat_answer_fF_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
  Feat_answer_fF_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
  Feat_knowledge_fF_ingest@{ shape: rectangle, label: "F-201 素材接入能力" }
  Feat_knowledge_fF_govern@{ shape: rectangle, label: "F-202 知识治理能力" }
`;case`pano-nf`:return`---
title: "NF 全景 · 全部 NF 链的极端场景单元"
---
graph TB
  Feat_degrade_nfNf_kbEmpty@{ shape: rounded, label: "NF-101 知识库为零条时状态可见" }
  Feat_degrade_nfNf_ragTimeout@{ shape: rounded, label: "NF-102 RAGFlow 超 8 秒时客户可感知" }
  Feat_degrade_nfNf_llmDown@{ shape: rounded, label: "NF-103 LLM 不可用时自动转人工" }
`;case`pano-i`:return`---
title: "I 全景 · 全部 Feature 的业务逻辑"
---
graph TB
  Feat_answer_fI_goal@{ shape: rectangle, label: "I-001 业务目标" }
  Feat_answer_fI_step@{ shape: rectangle, label: "I-003 业务步骤" }
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.I_step@{ shape: rectangle, label: "I-202 业务步骤" }
    Feat_knowledge_f.I_goal@{ shape: rectangle, label: "I-201 业务目标" }
  end
  Feat_degrade_nfI_goal@{ shape: rectangle, label: "I-101 业务目标" }
  Feat_degrade_nfI_step@{ shape: rectangle, label: "I-102 场景判定逻辑" }
  Feat_knowledge_f.I_step -. "\`推进治理目标\`" .-> Feat_knowledge_f.I_goal
`;case`pano-i-state`:return`---
title: "I 环 · 业务状态全景"
---
graph TB
  St_received@{ shape: rectangle, label: "已接收" }
  St_retrieving@{ shape: rectangle, label: "检索中" }
  St_answering@{ shape: rectangle, label: "应答中" }
  St_waitingHuman@{ shape: rectangle, label: "待人工" }
  St_answered@{ shape: rectangle, label: "已答复" }
  St_received -. "\`发起检索\`" .-> St_retrieving
  St_retrieving -. "\`置信度达标\`" .-> St_answering
  St_answering -. "\`答复已下发\`" .-> St_answered
  St_retrieving -. "\`置信度不足\`" .-> St_waitingHuman
  St_waitingHuman -. "\`人工已接管\`" .-> St_answered
`;case`pano-ui`:return`---
title: "UI 全景 · 全部 Feature 的界面面"
---
graph TB
  Feat_answer_fUi_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
  Feat_answer_fUi_information@{ shape: rounded, label: "UI-002 答复信息设计" }
  Feat_knowledge_fUi_console@{ shape: rounded, label: "UI-201 运营控制台" }
  Feat_knowledge_fUi_information@{ shape: rounded, label: "UI-202 知识运营信息设计" }
  Feat_degrade_nfUi_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
  Feat_degrade_nfUi_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
`;case`pano-src`:return`---
title: "SRC 全景 · 全部 Feature 的源码单元"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Src_wechatCallback@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
    Feat_answer_f.Src_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
    Feat_answer_f.Src_answerLoop@{ shape: rectangle, label: "SRC-003 知识应答循环" }
    Feat_answer_f.Src_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
    Feat_answer_f.Src_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
    Feat_answer_f.Src_ragflowKnowledge@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
    Feat_answer_f.Src_store@{ shape: rectangle, label: "SRC-007 本地存储" }
  end
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Src_integrationRoutes@{ shape: rectangle, label: "SRC-101 集成状态路由" }
    Feat_degrade_nf.Src_knowledgeAlert@{ shape: rectangle, label: "SRC-103 知识告警" }
    Feat_degrade_nf.Src_ragflowProbe@{ shape: rectangle, label: "SRC-104 RAGFlow 生命周期探针" }
    Feat_degrade_nf.Src_evaluationGate@{ shape: rectangle, label: "SRC-102 评测闸门" }
    Feat_degrade_nf.Src_operatorUi@{ shape: rectangle, label: "SRC-105 运营人员控制台" }
    Feat_degrade_nf.Src_storeAlert@{ shape: rectangle, label: "SRC-106 告警状态存储" }
  end
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.Src_materialRoutes@{ shape: rectangle, label: "SRC-201 素材路由" }
    Feat_knowledge_f.Src_materialBatch@{ shape: rectangle, label: "SRC-204 素材批处理" }
    Feat_knowledge_f.Src_knowledgeRoutes@{ shape: rectangle, label: "SRC-202 知识库路由" }
    Feat_knowledge_f.Src_materialService@{ shape: rectangle, label: "SRC-203 素材服务" }
    Feat_knowledge_f.Src_knowledgeScan@{ shape: rectangle, label: "SRC-206 知识扫描" }
    Feat_knowledge_f.Src_governance@{ shape: rectangle, label: "SRC-207 知识治理" }
    Feat_knowledge_f.Src_knowledgeSync@{ shape: rectangle, label: "SRC-208 知识同步" }
    Feat_knowledge_f.Src_lifecycle@{ shape: rectangle, label: "SRC-209 知识生命周期视图" }
    Feat_knowledge_f.Src_documentRegistry@{ shape: rectangle, label: "SRC-205 文档登记簿" }
  end
  Feat_answer_f.Src_wechatCallback -. "\`分发归一化消息\`" .-> Feat_answer_f.Src_answerOrchestrator
  Feat_answer_f.Src_answerOrchestrator -. "\`请求应答\`" .-> Feat_answer_f.Src_answerLoop
  Feat_answer_f.Src_answerLoop -. "\`校验置信度\`" .-> Feat_answer_f.Src_replyPolicy
  Feat_answer_f.Src_answerLoop -. "\`检索候选知识\`" .-> Feat_answer_f.Src_ragflowKnowledge
  Feat_answer_f.Src_answerOrchestrator -. "\`低置信度时转人工\`" .-> Feat_answer_f.Src_handoffService
  Feat_answer_f.Src_handoffService -. "\`持久化工单\`" .-> Feat_answer_f.Src_store
  Feat_degrade_nf.Src_integrationRoutes -. "\`查询空库告警\`" .-> Feat_degrade_nf.Src_knowledgeAlert
  Feat_degrade_nf.Src_knowledgeAlert -. "\`提交发布判定\`" .-> Feat_degrade_nf.Src_evaluationGate
  Feat_degrade_nf.Src_integrationRoutes -. "\`探测数据集状态\`" .-> Feat_degrade_nf.Src_ragflowProbe
  Feat_knowledge_f.Src_materialRoutes -. "\`接收素材\`" .-> Feat_knowledge_f.Src_materialService
  Feat_knowledge_f.Src_materialBatch -. "\`批量接入\`" .-> Feat_knowledge_f.Src_materialService
  Feat_knowledge_f.Src_materialService -. "\`登记文档\`" .-> Feat_knowledge_f.Src_documentRegistry
  Feat_knowledge_f.Src_knowledgeRoutes -. "\`触发扫描\`" .-> Feat_knowledge_f.Src_knowledgeScan
  Feat_knowledge_f.Src_knowledgeScan -. "\`提交候选\`" .-> Feat_knowledge_f.Src_governance
  Feat_knowledge_f.Src_governance -. "\`批准后推送\`" .-> Feat_knowledge_f.Src_knowledgeSync
  Feat_knowledge_f.Src_knowledgeSync -. "\`更新生命周期\`" .-> Feat_knowledge_f.Src_lifecycle
  Feat_knowledge_f.Src_lifecycle -. "\`晋升或下线\`" .-> Feat_knowledge_f.Src_documentRegistry
  Feat_degrade_nf.Src_evaluationGate -. "\`读取告警快照\`" .-> Feat_degrade_nf.Src_storeAlert
`;case`pano-carrier`:return`---
title: "数据载体全景 · 全部 Feature"
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
  Feat_knowledge_f.In_material -. "\`转换为候选对象\`" .-> Feat_knowledge_f.Biz_candidate
  Feat_knowledge_f.Biz_candidate -. "\`登记为文档实体\`" .-> Feat_knowledge_f.Pod_document
  Feat_knowledge_f.Pod_document -. "\`写入文档标识\`" .-> Feat_knowledge_f.Dao_registry
  Feat_knowledge_f.Dao_registry -. "\`查询状态\`" .-> Feat_knowledge_f.Out_knowledgeStatus
  Feat_knowledge_f.Cvt_material -. "\`负责 素材→BIZ-201 映射\`" .-> Feat_knowledge_f.Biz_candidate
  Feat_knowledge_f.Cvt_material -. "\`负责 BIZ-201→POD-201 映射\`" .-> Feat_knowledge_f.Pod_document
  Feat_degrade_nf.Pod_alert -. "\`写入告警\`" .-> Feat_degrade_nf.Dao_alert
  Feat_degrade_nf.Cvt_probe -. "\`负责 BIZ-101→OUT-101 映射\`" .-> Feat_degrade_nf.Biz_probeResult
  Feat_degrade_nf.Cvt_probe -. "\`负责 BIZ-101→POD-101 映射\`" .-> Feat_degrade_nf.Pod_alert
`;case`pano-api`:return`---
title: "API 全景 · 全部 Feature 的对外接口"
---
graph TB
  Feat_answer_fLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
  Feat_knowledge_fLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
  Feat_degrade_nfLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
`;case`srcdir001F`:return`---
title: "SRC 目录视图 · Feature-001-F"
---
graph TB
  Feat_answer_fSrc_wechatCallback@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
  Feat_answer_fSrc_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fSrc_answerLoop@{ shape: rectangle, label: "SRC-003 知识应答循环" }
  Feat_answer_fSrc_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
  Feat_answer_fSrc_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
  Feat_answer_fSrc_ragflowKnowledge@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
  Feat_answer_fSrc_store@{ shape: rectangle, label: "SRC-007 本地存储" }
  Feat_answer_fSrc_wechatCallback -. "\`分发归一化消息\`" .-> Feat_answer_fSrc_answerOrchestrator
  Feat_answer_fSrc_answerOrchestrator -. "\`请求应答\`" .-> Feat_answer_fSrc_answerLoop
  Feat_answer_fSrc_answerLoop -. "\`校验置信度\`" .-> Feat_answer_fSrc_replyPolicy
  Feat_answer_fSrc_answerLoop -. "\`检索候选知识\`" .-> Feat_answer_fSrc_ragflowKnowledge
  Feat_answer_fSrc_answerOrchestrator -. "\`低置信度时转人工\`" .-> Feat_answer_fSrc_handoffService
  Feat_answer_fSrc_handoffService -. "\`持久化工单\`" .-> Feat_answer_fSrc_store
`;case`srcdir001NF`:return`---
title: "SRC 目录视图 · Feature-001-NF"
---
graph TB
  Feat_degrade_nfSrc_integrationRoutes@{ shape: rectangle, label: "SRC-101 集成状态路由" }
  Feat_degrade_nfSrc_knowledgeAlert@{ shape: rectangle, label: "SRC-103 知识告警" }
  Feat_degrade_nfSrc_ragflowProbe@{ shape: rectangle, label: "SRC-104 RAGFlow 生命周期探针" }
  Feat_degrade_nfSrc_evaluationGate@{ shape: rectangle, label: "SRC-102 评测闸门" }
  Feat_degrade_nfSrc_operatorUi@{ shape: rectangle, label: "SRC-105 运营人员控制台" }
  Feat_degrade_nfSrc_storeAlert@{ shape: rectangle, label: "SRC-106 告警状态存储" }
  Feat_degrade_nfSrc_integrationRoutes -. "\`查询空库告警\`" .-> Feat_degrade_nfSrc_knowledgeAlert
  Feat_degrade_nfSrc_knowledgeAlert -. "\`提交发布判定\`" .-> Feat_degrade_nfSrc_evaluationGate
  Feat_degrade_nfSrc_integrationRoutes -. "\`探测数据集状态\`" .-> Feat_degrade_nfSrc_ragflowProbe
  Feat_degrade_nfSrc_evaluationGate -. "\`读取告警快照\`" .-> Feat_degrade_nfSrc_storeAlert
`;case`carrier001F`:return`---
title: "数据载体全景 · Feature-001-F"
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
`;case`carrier001NF`:return`---
title: "数据载体全景 · Feature-001-NF"
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
`;case`erm001F`:return`---
title: "数据模型全景 · Feature-001-F 工单结构"
---
graph TB
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fPod_ticket -. "\`写入工单\`" .-> Feat_answer_fDao_store
`;case`erm001NF`:return`---
title: "数据模型全景 · Feature-001-NF 告警结构"
---
graph TB
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfDao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  Feat_degrade_nfPod_alert -. "\`写入告警\`" .-> Feat_degrade_nfDao_alert
`;case`stateMain`:return`---
title: "I 环 · 业务状态主干"
---
graph TB
  St_received@{ shape: rectangle, label: "已接收" }
  St_retrieving@{ shape: rectangle, label: "检索中" }
  St_answering@{ shape: rectangle, label: "应答中" }
  St_answered@{ shape: rectangle, label: "已答复" }
  St_received -. "\`发起检索\`" .-> St_retrieving
  St_retrieving -. "\`置信度达标\`" .-> St_answering
  St_answering -. "\`答复已下发\`" .-> St_answered
`;case`stateBranchHuman`:return`---
title: "I 环 · 业务状态分支 · 转人工"
---
graph TB
  St_retrieving@{ shape: rectangle, label: "检索中" }
  St_waitingHuman@{ shape: rectangle, label: "待人工" }
  St_retrieving -. "\`置信度不足\`" .-> St_waitingHuman
`;case`index`:return`---
title: "美妆客服服务 · 全部 Feature 导航"
---
graph TB
  Feat_answer_f@{ shape: rectangle, label: "Feature-001-F 知识应答能力" }
  Feat_degrade_nf@{ shape: rectangle, label: "Feature-001-NF 极端场景保障" }
  Feat_knowledge_f@{ shape: rectangle, label: "Feature-002-F 知识运营能力" }
`;case`chain001F-us`:return`---
title: "US 视图 · Feature-001-F"
---
graph TB
  Feat_answer_fUs_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
  Feat_answer_fUs_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
`;case`chain001NF-us`:return`---
title: "US 视图 · Feature-001-NF"
---
graph TB
  Feat_degrade_nfUs_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
  Feat_degrade_nfUs_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
  Feat_degrade_nfUs_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
`;case`chain001F-f`:return`---
title: "能力清单 · Feature-001-F"
---
graph TB
  Feat_answer_fUs_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
  Feat_answer_fUs_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  Feat_answer_fF_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
  Feat_answer_fF_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
  Feat_answer_fUs_ask -. "\`要求\`" .-> Feat_answer_fF_answer
  Feat_answer_fUs_lowConfidence -. "\`要求\`" .-> Feat_answer_fF_retrieval
`;case`chain001NF-nf`:return`---
title: "场景清单 · Feature-001-NF"
---
graph TB
  Feat_degrade_nfUs_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
  Feat_degrade_nfUs_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
  Feat_degrade_nfUs_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
  Feat_degrade_nfNf_kbEmpty@{ shape: rounded, label: "NF-101 知识库为零条时状态可见" }
  Feat_degrade_nfNf_ragTimeout@{ shape: rounded, label: "NF-102 RAGFlow 超 8 秒时客户可感知" }
  Feat_degrade_nfNf_llmDown@{ shape: rounded, label: "NF-103 LLM 不可用时自动转人工" }
  Feat_degrade_nfUs_kbEmpty -. "\`要求\`" .-> Feat_degrade_nfNf_kbEmpty
  Feat_degrade_nfUs_ragTimeout -. "\`要求\`" .-> Feat_degrade_nfNf_ragTimeout
  Feat_degrade_nfUs_llmDown -. "\`要求\`" .-> Feat_degrade_nfNf_llmDown
`;case`chain001F-i-goal`:return`---
title: "I 环 · 业务目标 · Feature-001-F"
---
graph TB
  Feat_answer_fI_goal@{ shape: rectangle, label: "I-001 业务目标" }
`;case`chain001F-i-step`:return`---
title: "I 环 · 业务步骤 · Feature-001-F"
---
graph TB
  Feat_answer_fI_step@{ shape: rectangle, label: "I-003 业务步骤" }
`;case`chain001NF-i-goal`:return`---
title: "I 环 · 业务目标 · Feature-001-NF"
---
graph TB
  Feat_degrade_nfI_goal@{ shape: rectangle, label: "I-101 业务目标" }
`;case`chain001NF-i-step`:return`---
title: "I 环 · 场景判定步骤 · Feature-001-NF"
---
graph TB
  Feat_degrade_nfI_step@{ shape: rectangle, label: "I-102 场景判定逻辑" }
`;case`chain001F-ui`:return`---
title: "UI 环 · Feature-001-F"
---
graph TB
  Feat_answer_fUi_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
  Feat_answer_fUi_information@{ shape: rounded, label: "UI-002 答复信息设计" }
`;case`chain001NF-ui`:return`---
title: "UI 环 · Feature-001-NF"
---
graph TB
  Feat_degrade_nfUi_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
  Feat_degrade_nfUi_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
`;case`chain002F-us`:return`---
title: "US 视图 · Feature-002-F"
---
graph TB
  Feat_knowledge_fUs_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
  Feat_knowledge_fUs_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
  Feat_knowledge_fUs_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
`;case`chain002F-f`:return`---
title: "能力清单 · Feature-002-F"
---
graph TB
  Feat_knowledge_fUs_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
  Feat_knowledge_fUs_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
  Feat_knowledge_fUs_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
  Feat_knowledge_fF_ingest@{ shape: rectangle, label: "F-201 素材接入能力" }
  Feat_knowledge_fF_govern@{ shape: rectangle, label: "F-202 知识治理能力" }
  Feat_knowledge_fUs_scan -. "\`要求\`" .-> Feat_knowledge_fF_ingest
  Feat_knowledge_fUs_govern -. "\`要求\`" .-> Feat_knowledge_fF_govern
  Feat_knowledge_fUs_alert -. "\`要求\`" .-> Feat_knowledge_fF_govern
`;case`chain002F-i-goal`:return`---
title: "I 环 · 业务目标 · Feature-002-F"
---
graph TB
  Feat_knowledge_fI_goal@{ shape: rectangle, label: "I-201 业务目标" }
`;case`chain002F-i-step`:return`---
title: "I 环 · 业务步骤 · Feature-002-F"
---
graph TB
  Feat_knowledge_fI_step@{ shape: rectangle, label: "I-202 业务步骤" }
`;case`chain002F-ui`:return`---
title: "UI 环 · Feature-002-F"
---
graph TB
  Feat_knowledge_fUi_console@{ shape: rounded, label: "UI-201 运营控制台" }
  Feat_knowledge_fUi_information@{ shape: rounded, label: "UI-202 知识运营信息设计" }
`;case`srcdir002F`:return`---
title: "SRC 目录视图 · Feature-002-F"
---
graph TB
  Feat_knowledge_fSrc_materialRoutes@{ shape: rectangle, label: "SRC-201 素材路由" }
  Feat_knowledge_fSrc_materialBatch@{ shape: rectangle, label: "SRC-204 素材批处理" }
  Feat_knowledge_fSrc_knowledgeRoutes@{ shape: rectangle, label: "SRC-202 知识库路由" }
  Feat_knowledge_fSrc_materialService@{ shape: rectangle, label: "SRC-203 素材服务" }
  Feat_knowledge_fSrc_knowledgeScan@{ shape: rectangle, label: "SRC-206 知识扫描" }
  Feat_knowledge_fSrc_governance@{ shape: rectangle, label: "SRC-207 知识治理" }
  Feat_knowledge_fSrc_knowledgeSync@{ shape: rectangle, label: "SRC-208 知识同步" }
  Feat_knowledge_fSrc_lifecycle@{ shape: rectangle, label: "SRC-209 知识生命周期视图" }
  Feat_knowledge_fSrc_documentRegistry@{ shape: rectangle, label: "SRC-205 文档登记簿" }
  Feat_knowledge_fSrc_materialRoutes -. "\`接收素材\`" .-> Feat_knowledge_fSrc_materialService
  Feat_knowledge_fSrc_materialBatch -. "\`批量接入\`" .-> Feat_knowledge_fSrc_materialService
  Feat_knowledge_fSrc_materialService -. "\`登记文档\`" .-> Feat_knowledge_fSrc_documentRegistry
  Feat_knowledge_fSrc_knowledgeRoutes -. "\`触发扫描\`" .-> Feat_knowledge_fSrc_knowledgeScan
  Feat_knowledge_fSrc_knowledgeScan -. "\`提交候选\`" .-> Feat_knowledge_fSrc_governance
  Feat_knowledge_fSrc_governance -. "\`批准后推送\`" .-> Feat_knowledge_fSrc_knowledgeSync
  Feat_knowledge_fSrc_knowledgeSync -. "\`更新生命周期\`" .-> Feat_knowledge_fSrc_lifecycle
  Feat_knowledge_fSrc_lifecycle -. "\`晋升或下线\`" .-> Feat_knowledge_fSrc_documentRegistry
`;case`carrier002F`:return`---
title: "数据载体全景 · Feature-002-F"
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
`;case`erm002F`:return`---
title: "数据模型全景 · Feature-002-F 文档结构"
---
graph TB
  Feat_knowledge_fPod_document@{ shape: rectangle, label: "POD-201 文档登记实体" }
  Feat_knowledge_fDao_registry@{ shape: cylinder, label: "DAO-201 文档登记访问" }
  Feat_knowledge_fPod_document -. "\`写入文档标识\`" .-> Feat_knowledge_fDao_registry
`;case`api002F`:return`---
title: "API 清单 · Feature-002-F"
---
graph TB
  Feat_knowledge_fLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
`;case`seq001F-answer`:return`---
title: "Feature-001-F 主干时序 · 客户提问到答复"
---
graph LR
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fLane_coreStep_answerLane@{ shape: rectangle, label: "I-003 业务步骤（应答泳道）" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_answer_fSrc_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fSrc_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
  Feat_answer_fSrc_ragflowKnowledge@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
  Feat_answer_fSrc_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
  Feat_answer_fLane_clientActor_customer -. "\`企业微信提问\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`分发归一化消息\`" .-> Feat_answer_fSrc_answerOrchestrator
  Feat_answer_fSrc_answerOrchestrator -. "\`请求应答\`" .-> Feat_answer_fLane_coreStep_answerLane
  Feat_answer_fLane_coreStep_answerLane -. "\`检索候选知识\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`返回候选知识\`" .-> Feat_answer_fLane_coreStep_answerLane
  Feat_answer_fLane_coreStep_answerLane -. "\`校验置信度\`" .-> Feat_answer_fSrc_replyPolicy
  Feat_answer_fSrc_replyPolicy -. "\`达标放行\`" .-> Feat_answer_fLane_coreStep_answerLane
  Feat_answer_fLane_coreStep_answerLane -. "\`返回答复\`" .-> Feat_answer_fLane_edgeApi_chatCallback
`;case`seq001F-branch-low-confidence`:return`---
title: "Feature-001-F 分支 · 置信度不足转人工"
---
graph LR
  Feat_answer_fSrc_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
  Feat_answer_fSrc_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fSrc_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
  Feat_answer_fSrc_store@{ shape: rectangle, label: "SRC-007 本地存储" }
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fSrc_replyPolicy -. "\`置信度不足\`" .-> Feat_answer_fSrc_answerOrchestrator
  Feat_answer_fSrc_answerOrchestrator -. "\`转人工\`" .-> Feat_answer_fSrc_handoffService
  Feat_answer_fSrc_handoffService -. "\`持久化工单\`" .-> Feat_answer_fSrc_store
  Feat_answer_fSrc_store -. "\`告知等待人工\`" .-> Feat_answer_fLane_clientActor_customer
`;case`dfd001F-answer`:return`---
title: "DFD 全景 · Feature-001-F 应答数据流"
---
graph LR
  Feat_answer_fUi_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
  Feat_answer_fIn_chatMessage@{ shape: rectangle, label: "IN-001 客户提问入参" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fOut_answer@{ shape: rectangle, label: "OUT-001 答复出参视图" }
  Feat_answer_fUi_information@{ shape: rounded, label: "UI-002 答复信息设计" }
  Feat_answer_fUi_interaction -. "\`提交提问\`" .-> Feat_answer_fIn_chatMessage
  Feat_answer_fIn_chatMessage -. "\`转换为检索查询\`" .-> Feat_answer_fBiz_query
  Feat_answer_fBiz_query -. "\`低置信度落工单\`" .-> Feat_answer_fPod_ticket
  Feat_answer_fPod_ticket -. "\`写入工单\`" .-> Feat_answer_fDao_store
  Feat_answer_fDao_store -. "\`查询答复内容\`" .-> Feat_answer_fOut_answer
  Feat_answer_fOut_answer -. "\`渲染答复\`" .-> Feat_answer_fUi_information
`;case`seq001NF-degrade`:return`---
title: "Feature-001-NF 主干时序 · 场景判定与提示"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfLane_edgeApi_status@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  Feat_degrade_nfLane_coreStep_probeLane@{ shape: rectangle, label: "I-102 场景判定逻辑（判定泳道）" }
  Feat_degrade_nfLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_degrade_nfSrc_evaluationGate@{ shape: rectangle, label: "SRC-102 评测闸门" }
  Feat_degrade_nfUi_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`查询集成状态\`" .-> Feat_degrade_nfLane_edgeApi_status
  Feat_degrade_nfLane_edgeApi_status -. "\`发起探测\`" .-> Feat_degrade_nfLane_coreStep_probeLane
  Feat_degrade_nfLane_coreStep_probeLane -. "\`探测数据集可用性\`" .-> Feat_degrade_nfLane_extExt_ragflow
  Feat_degrade_nfLane_extExt_ragflow -. "\`返回探测结论\`" .-> Feat_degrade_nfLane_coreStep_probeLane
  Feat_degrade_nfLane_coreStep_probeLane -. "\`提交发布判定\`" .-> Feat_degrade_nfSrc_evaluationGate
  Feat_degrade_nfSrc_evaluationGate -. "\`下发场景提示\`" .-> Feat_degrade_nfUi_notice
`;case`dfd001NF-probe`:return`---
title: "DFD 全景 · Feature-001-NF 探测数据流"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfIn_probeQuery@{ shape: rectangle, label: "IN-101 状态探测入参" }
  Feat_degrade_nfBiz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
  Feat_degrade_nfOut_status@{ shape: rectangle, label: "OUT-101 状态出参视图" }
  Feat_degrade_nfUi_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfDao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`构造探测入参\`" .-> Feat_degrade_nfIn_probeQuery
  Feat_degrade_nfIn_probeQuery -. "\`转换为探测结果\`" .-> Feat_degrade_nfBiz_probeResult
  Feat_degrade_nfBiz_probeResult -. "\`渲染状态载荷\`" .-> Feat_degrade_nfOut_status
  Feat_degrade_nfOut_status -. "\`显示条目数与异常提示\`" .-> Feat_degrade_nfUi_status
  Feat_degrade_nfBiz_probeResult -. "\`异常转告警实体\`" .-> Feat_degrade_nfPod_alert
  Feat_degrade_nfPod_alert -. "\`写入告警\`" .-> Feat_degrade_nfDao_alert
`;case`seq001F-i-step-lanes`:return`---
title: "I 环 · 业务步骤泳道流程 · Feature-001-F"
---
graph LR
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fLane_coreStep_answerLane@{ shape: rectangle, label: "I-003 业务步骤（应答泳道）" }
  Feat_answer_fLane_coreI_stepLaneStep@{ shape: rectangle, label: "I-005 校验与生成环节" }
  Feat_answer_fLane_coreI_stepLaneSearch@{ shape: rectangle, label: "I-004 检索环节" }
  Feat_answer_fLane_clientActor_customer -. "\`①提出问题\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`②归一化并派发\`" .-> Feat_answer_fLane_coreStep_answerLane
  Feat_answer_fLane_coreStep_answerLane -. "\`③检索候选知识\`" .-> Feat_answer_fLane_coreI_stepLaneSearch
  Feat_answer_fLane_coreI_stepLaneSearch -. "\`④候选返回\`" .-> Feat_answer_fLane_coreStep_answerLane
  Feat_answer_fLane_coreStep_answerLane -. "\`⑤置信度校验\`" .-> Feat_answer_fLane_coreI_stepLaneStep
  Feat_answer_fLane_coreI_stepLaneStep -. "\`⑥生成答复\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`⑦答复送达\`" .-> Feat_answer_fLane_clientActor_customer
`;case`seq001NF-i-step-lanes`:return`---
title: "I 环 · 场景判定泳道流程 · Feature-001-NF"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfLane_edgeApi_status@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  Feat_degrade_nfLane_coreStep_probeLane@{ shape: rectangle, label: "I-102 场景判定逻辑（判定泳道）" }
  Feat_degrade_nfLane_coreI_stepLaneKbCheck@{ shape: rectangle, label: "I-103 条目数判定" }
  Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck@{ shape: rectangle, label: "I-104 响应耗时判定" }
  Feat_degrade_nfLane_coreI_stepLaneLlmCheck@{ shape: rectangle, label: "I-105 模型可用性判定" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`①查询状态\`" .-> Feat_degrade_nfLane_edgeApi_status
  Feat_degrade_nfLane_edgeApi_status -. "\`②发起探测\`" .-> Feat_degrade_nfLane_coreStep_probeLane
  Feat_degrade_nfLane_coreStep_probeLane -. "\`③判定条目数\`" .-> Feat_degrade_nfLane_coreI_stepLaneKbCheck
  Feat_degrade_nfLane_coreI_stepLaneKbCheck -. "\`④判定响应耗时\`" .-> Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck
  Feat_degrade_nfLane_coreI_stepLaneTimeoutCheck -. "\`⑤判定模型可用性\`" .-> Feat_degrade_nfLane_coreI_stepLaneLlmCheck
  Feat_degrade_nfLane_coreI_stepLaneLlmCheck -. "\`⑥下发提示或转人工\`" .-> Feat_degrade_nfLane_operatorActor_ops
`;case`seq001F-api-chat`:return`---
title: "API 泳道时序 · Feature-001-F 提交提问"
---
graph LR
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fLane_coreStep_answerLane@{ shape: rectangle, label: "I-003 业务步骤（应答泳道）" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_answer_fLane_clientActor_customer -. "\`POST /wechat/callback\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`触发应答\`" .-> Feat_answer_fLane_coreStep_answerLane
  Feat_answer_fLane_coreStep_answerLane -. "\`检索知识\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`返回候选知识\`" .-> Feat_answer_fLane_coreStep_answerLane
  Feat_answer_fLane_coreStep_answerLane -. "\`返回答复\`" .-> Feat_answer_fLane_edgeApi_chatCallback
`;case`seq001NF-api-status`:return`---
title: "API 泳道时序 · Feature-001-NF 查询集成状态"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfLane_edgeApi_status@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  Feat_degrade_nfLane_coreStep_probeLane@{ shape: rectangle, label: "I-102 场景判定逻辑（判定泳道）" }
  Feat_degrade_nfLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`GET /integration/status\`" .-> Feat_degrade_nfLane_edgeApi_status
  Feat_degrade_nfLane_edgeApi_status -. "\`发起探测\`" .-> Feat_degrade_nfLane_coreStep_probeLane
  Feat_degrade_nfLane_coreStep_probeLane -. "\`探测数据集\`" .-> Feat_degrade_nfLane_extExt_ragflow
  Feat_degrade_nfLane_extExt_ragflow -. "\`返回结论\`" .-> Feat_degrade_nfLane_coreStep_probeLane
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
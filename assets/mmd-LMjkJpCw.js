var e=e=>{switch(e){case`proc-local`:return`---
title: "构建部署 · 本地开发环境 · 进程与线程"
---
graph TB
`;case`proc-prod`:return`---
title: "构建部署 · 生产环境 · 进程与线程"
---
graph TB
`;case`pano-us`:return`---
title: "US 环 · 全部 Feature · 用户故事"
---
graph TB
  Feat_answer_fUs_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
  Feat_answer_fUs_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.Us_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
    Feat_knowledge_f.Us_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
    Feat_knowledge_f.Us_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
  end
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.Us_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
    Feat_degrade_nf.Us_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
  end
  Feat_knowledge_f.Us_scan -. "\`提交候选进入治理\`" .-> Feat_knowledge_f.Us_govern
  Feat_knowledge_f.Us_govern -. "\`晋升后进入新鲜度巡检\`" .-> Feat_knowledge_f.Us_alert
  Feat_degrade_nf.Us_kbEmpty -. "\`提交发布判定\`" .-> Feat_degrade_nf.Us_llmDown
  Feat_degrade_nf.Us_ragTimeout -. "\`统一由提示环节下发\`" .-> Feat_degrade_nf.Us_llmDown
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
title: "I 环 · 全部 Feature · 业务目标与步骤"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Us_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
    Feat_answer_f.I_goal@{ shape: rectangle, label: "I-G0 业务目标" }
    Feat_answer_f.Us_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
  end
  Feat_knowledge_fI_goal@{ shape: rectangle, label: "I-G0 业务目标" }
  Feat_knowledge_fUs_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.I_goal@{ shape: rectangle, label: "I-G0 业务目标" }
  end
  Feat_answer_f.I_goal -. "\`支撑下发环节\`" .-> Feat_answer_f.Us_ask
  Feat_answer_f.Us_lowConfidence -. "\`落为业务目标\`" .-> Feat_answer_f.I_goal
  Feat_degrade_nf.Us_kbEmpty -. "\`落为业务目标\`" .-> Feat_degrade_nf.I_goal
`;case`pano-i-state`:return`---
title: "I 环 · 全部 Feature · 业务状态"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.St_received@{ shape: rectangle, label: "S-000 已接收" }
    Feat_answer_f.St_retrieving@{ shape: rectangle, label: "S-001 检索中" }
    Feat_answer_f.St_answering@{ shape: rectangle, label: "S-002 应答中" }
    Feat_answer_f.St_waitingHuman@{ shape: rectangle, label: "S-004 待人工" }
    Feat_answer_f.St_answered@{ shape: rectangle, label: "S-003 已答复" }
  end
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.St_unprobed@{ shape: rectangle, label: "S-100 未探测" }
    Feat_degrade_nf.St_probing@{ shape: rectangle, label: "S-101 探测中" }
    Feat_degrade_nf.St_healthy@{ shape: rectangle, label: "S-102 正常" }
    Feat_degrade_nf.St_scenarioHit@{ shape: rectangle, label: "S-103 命中极端场景" }
    Feat_degrade_nf.St_notified@{ shape: rectangle, label: "S-104 已下发提示" }
  end
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.St_intake@{ shape: rectangle, label: "S-200 待接入" }
    Feat_knowledge_f.St_scanning@{ shape: rectangle, label: "S-201 扫描中" }
    Feat_knowledge_f.St_pendingReview@{ shape: rectangle, label: "S-202 待人工审阅" }
    Feat_knowledge_f.St_published@{ shape: rectangle, label: "S-203 已发布可检索" }
    Feat_knowledge_f.St_stale@{ shape: rectangle, label: "S-204 新鲜度异常" }
  end
  Feat_answer_f.St_received -. "\`发起检索\`" .-> Feat_answer_f.St_retrieving
  Feat_answer_f.St_retrieving -. "\`置信度达标\`" .-> Feat_answer_f.St_answering
  Feat_answer_f.St_answering -. "\`答复已下发\`" .-> Feat_answer_f.St_answered
  Feat_answer_f.St_retrieving -. "\`置信度不足\`" .-> Feat_answer_f.St_waitingHuman
  Feat_answer_f.St_waitingHuman -. "\`人工已接管\`" .-> Feat_answer_f.St_answered
  Feat_degrade_nf.St_unprobed -. "\`发起探测\`" .-> Feat_degrade_nf.St_probing
  Feat_degrade_nf.St_probing -. "\`探测通过\`" .-> Feat_degrade_nf.St_healthy
  Feat_degrade_nf.St_probing -. "\`探测命中异常\`" .-> Feat_degrade_nf.St_scenarioHit
  Feat_degrade_nf.St_scenarioHit -. "\`下发提示\`" .-> Feat_degrade_nf.St_notified
  Feat_degrade_nf.St_notified -. "\`继续巡检\`" .-> Feat_degrade_nf.St_probing
  Feat_knowledge_f.St_intake -. "\`抽取候选知识\`" .-> Feat_knowledge_f.St_scanning
  Feat_knowledge_f.St_scanning -. "\`提交候选\`" .-> Feat_knowledge_f.St_pendingReview
  Feat_knowledge_f.St_pendingReview -. "\`驳回退回\`" .-> Feat_knowledge_f.St_intake
  Feat_knowledge_f.St_pendingReview -. "\`批准晋升\`" .-> Feat_knowledge_f.St_published
  Feat_knowledge_f.St_published -. "\`超出新鲜度阈值\`" .-> Feat_knowledge_f.St_stale
  Feat_knowledge_f.St_stale -. "\`重新扫描\`" .-> Feat_knowledge_f.St_scanning
`;case`pano-ui`:return`---
title: "UI 环 · 全部 Feature · 交互面与信息设计"
---
graph TB
  subgraph Feat_answer_fUs_askI_ask_deliver["\`I-006 下发答复\`"]
    Feat_answer_fUs_askI_ask_deliver.Ui_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
    Feat_answer_fUs_askI_ask_deliver.Ui_information@{ shape: rounded, label: "UI-002 答复信息设计" }
  end
  subgraph Feat_knowledge_fUs_alertI_alert_report["\`I-233 上报告警\`"]
    Feat_knowledge_fUs_alertI_alert_report.Ui_console@{ shape: rounded, label: "UI-201 运营控制台" }
    Feat_knowledge_fUs_alertI_alert_report.Ui_information@{ shape: rounded, label: "UI-202 知识运营信息设计" }
  end
  subgraph Feat_degrade_nfUs_kbEmpty["\`US-101 知识库为空时运营人员能看见\`"]
    Feat_degrade_nfUs_kbEmpty.I_kb_renderUi_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
  end
  subgraph Feat_degrade_nfUs_llmDown["\`US-103 LLM 不可用时转人工而非静默失败\`"]
    Feat_degrade_nfUs_llmDown.I_ll_notifyUi_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
  end
  Feat_answer_fUs_askI_ask_deliver.Ui_interaction -. "\`持久化工单\`" .-> Feat_answer_fUs_askI_ask_deliver.Ui_information
  Feat_knowledge_fUs_alertI_alert_report.Ui_console -. "\`[...]\`" .-> Feat_knowledge_fUs_alertI_alert_report.Ui_information
  Feat_knowledge_fUs_alertI_alert_report.Ui_information -. "\`触发扫描\`" .-> Feat_knowledge_fUs_alertI_alert_report.Ui_console
  Feat_degrade_nfUs_kbEmpty.I_kb_renderUi_status -. "\`提交发布判定\`" .-> Feat_degrade_nfUs_llmDown.I_ll_notifyUi_notice
`;case`pano-src-001F`:return`---
title: "SRC 环 · Feature-001-F · 代码结构"
---
graph TB
  subgraph Feat_answer_fUs_askI_ask_deliverUi_interaction["\`UI-001 企业微信会话交互\`"]
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_wechatCallback@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop@{ shape: rectangle, label: "SRC-003 知识应答循环" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_ragflowKnowledge@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
  end
  subgraph Feat_answer_fUs_askI_ask_deliverUi_information["\`UI-002 答复信息设计\`"]
    Feat_answer_fUs_askI_ask_deliverUi_information.Src_store@{ shape: rectangle, label: "SRC-007 本地存储" }
  end
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_wechatCallback -. "\`分发归一化消息\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -. "\`请求应答\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -. "\`校验置信度\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_replyPolicy
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -. "\`检索候选知识\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_ragflowKnowledge
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -. "\`低置信度时转人工\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService -. "\`持久化工单\`" .-> Feat_answer_fUs_askI_ask_deliverUi_information.Src_store
`;case`pano-src-001NF-empty`:return`---
title: "SRC 环 · Feature-001-NF · 代码结构 · 空库与探测"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status["\`UI-101 控制台状态提示\`"]
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes@{ shape: rectangle, label: "SRC-101 集成状态路由" }
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_knowledgeAlert@{ shape: rectangle, label: "SRC-103 知识告警" }
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_ragflowProbe@{ shape: rectangle, label: "SRC-104 RAGFlow 生命周期探针" }
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_operatorUi@{ shape: rectangle, label: "SRC-105 运营人员控制台" }
  end
  Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -. "\`查询空库告警\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_knowledgeAlert
  Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -. "\`探测数据集状态\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_ragflowProbe
`;case`pano-src-001NF-notice`:return`---
title: "SRC 环 · Feature-001-NF · 代码结构 · 场景提示"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice["\`UI-102 极端场景提示\`"]
    Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_evaluationGate@{ shape: rectangle, label: "SRC-102 评测闸门" }
    Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_storeAlert@{ shape: rectangle, label: "SRC-106 告警状态存储" }
  end
  Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_evaluationGate -. "\`读取告警快照\`" .-> Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_storeAlert
`;case`pano-src-002F`:return`---
title: "SRC 环 · Feature-002-F · 代码结构"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_alert_reportUi_information["\`UI-202 知识运营信息设计\`"]
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeRoutes@{ shape: rectangle, label: "SRC-202 知识库路由" }
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync@{ shape: rectangle, label: "SRC-208 知识同步" }
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle@{ shape: rectangle, label: "SRC-209 知识生命周期视图" }
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry@{ shape: rectangle, label: "SRC-205 文档登记簿" }
  end
  subgraph Feat_knowledge_fUs_alertI_alert_reportUi_console["\`UI-201 运营控制台\`"]
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialRoutes@{ shape: rectangle, label: "SRC-201 素材路由" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialBatch@{ shape: rectangle, label: "SRC-204 素材批处理" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan@{ shape: rectangle, label: "SRC-206 知识扫描" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService@{ shape: rectangle, label: "SRC-203 素材服务" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance@{ shape: rectangle, label: "SRC-207 知识治理" }
  end
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialRoutes -. "\`接收素材\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialBatch -. "\`批量接入\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan -. "\`提交候选\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance
  Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeRoutes -. "\`触发扫描\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService -. "\`登记文档\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance -. "\`批准后推送\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync
  Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync -. "\`更新生命周期\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle
  Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle -. "\`晋升或下线\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry
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
title: "SRC 环 · 全部 Feature · 对外接口"
---
graph TB
  Feat_answer_fLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
  Feat_knowledge_fLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
  Feat_degrade_nfLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
`;case`srcdir001F`:return`---
title: "SRC 环 · Feature-001-F · 代码结构"
---
graph TB
  subgraph Feat_answer_fUs_askI_ask_deliverUi_interaction["\`UI-001 企业微信会话交互\`"]
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_wechatCallback@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop@{ shape: rectangle, label: "SRC-003 知识应答循环" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
    Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_ragflowKnowledge@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
  end
  subgraph Feat_answer_fUs_askI_ask_deliverUi_information["\`UI-002 答复信息设计\`"]
    Feat_answer_fUs_askI_ask_deliverUi_information.Src_store@{ shape: rectangle, label: "SRC-007 本地存储" }
  end
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_wechatCallback -. "\`分发归一化消息\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -. "\`请求应答\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -. "\`校验置信度\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_replyPolicy
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerLoop -. "\`检索候选知识\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_ragflowKnowledge
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_answerOrchestrator -. "\`低置信度时转人工\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService
  Feat_answer_fUs_askI_ask_deliverUi_interaction.Src_handoffService -. "\`持久化工单\`" .-> Feat_answer_fUs_askI_ask_deliverUi_information.Src_store
`;case`srcdir001NF`:return`---
title: "SRC 环 · Feature-001-NF · 代码结构 · 空库与探测"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status["\`UI-101 控制台状态提示\`"]
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes@{ shape: rectangle, label: "SRC-101 集成状态路由" }
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_knowledgeAlert@{ shape: rectangle, label: "SRC-103 知识告警" }
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_ragflowProbe@{ shape: rectangle, label: "SRC-104 RAGFlow 生命周期探针" }
    Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_operatorUi@{ shape: rectangle, label: "SRC-105 运营人员控制台" }
  end
  Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -. "\`查询空库告警\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_knowledgeAlert
  Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_integrationRoutes -. "\`探测数据集状态\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status.Src_ragflowProbe
`;case`srcdir001NF-notice`:return`---
title: "SRC 环 · Feature-001-NF · 代码结构 · 场景提示"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice["\`UI-102 极端场景提示\`"]
    Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_evaluationGate@{ shape: rectangle, label: "SRC-102 评测闸门" }
    Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_storeAlert@{ shape: rectangle, label: "SRC-106 告警状态存储" }
  end
  Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_evaluationGate -. "\`读取告警快照\`" .-> Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice.Src_storeAlert
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
`;case`erm001F-ticket`:return`---
title: "SRC 环 · Feature-001-F · 数据模型 · 工单"
---
graph TB
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fPod_ticket -. "\`写入工单\`" .-> Feat_answer_fDao_store
`;case`erm001NF-alert`:return`---
title: "SRC 环 · Feature-001-NF · 数据模型 · 告警"
---
graph TB
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfDao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  Feat_degrade_nfPod_alert -. "\`写入告警\`" .-> Feat_degrade_nfDao_alert
`;case`chain001F-i-state-main`:return`---
title: "I 环 · Feature-001-F · 业务状态 · 主干"
---
graph TB
  Feat_answer_fSt_received@{ shape: rectangle, label: "S-000 已接收" }
  Feat_answer_fSt_retrieving@{ shape: rectangle, label: "S-001 检索中" }
  Feat_answer_fSt_answering@{ shape: rectangle, label: "S-002 应答中" }
  Feat_answer_fSt_answered@{ shape: rectangle, label: "S-003 已答复" }
  Feat_answer_fSt_received -. "\`发起检索\`" .-> Feat_answer_fSt_retrieving
  Feat_answer_fSt_retrieving -. "\`置信度达标\`" .-> Feat_answer_fSt_answering
  Feat_answer_fSt_answering -. "\`答复已下发\`" .-> Feat_answer_fSt_answered
`;case`chain001F-i-state`:return`---
title: "I 环 · Feature-001-F · 业务状态"
---
graph TB
  Feat_answer_fSt_received@{ shape: rectangle, label: "S-000 已接收" }
  Feat_answer_fSt_retrieving@{ shape: rectangle, label: "S-001 检索中" }
  Feat_answer_fSt_answering@{ shape: rectangle, label: "S-002 应答中" }
  Feat_answer_fSt_waitingHuman@{ shape: rectangle, label: "S-004 待人工" }
  Feat_answer_fSt_answered@{ shape: rectangle, label: "S-003 已答复" }
  Feat_answer_fSt_received -. "\`发起检索\`" .-> Feat_answer_fSt_retrieving
  Feat_answer_fSt_retrieving -. "\`置信度达标\`" .-> Feat_answer_fSt_answering
  Feat_answer_fSt_answering -. "\`答复已下发\`" .-> Feat_answer_fSt_answered
  Feat_answer_fSt_retrieving -. "\`置信度不足\`" .-> Feat_answer_fSt_waitingHuman
  Feat_answer_fSt_waitingHuman -. "\`人工已接管\`" .-> Feat_answer_fSt_answered
`;case`chain001F-i-state-branch-human`:return`---
title: "I 环 · Feature-001-F · 业务状态 · 分支转人工"
---
graph TB
  Feat_answer_fSt_retrieving@{ shape: rectangle, label: "S-001 检索中" }
  Feat_answer_fSt_waitingHuman@{ shape: rectangle, label: "S-004 待人工" }
  Feat_answer_fSt_retrieving -. "\`置信度不足\`" .-> Feat_answer_fSt_waitingHuman
`;case`index`:return`---
title: "美妆客服服务 · 全部 Feature 导航"
---
graph TB
  Feat_answer_f@{ shape: rectangle, label: "Feature-001-F 知识应答能力" }
  Feat_degrade_nf@{ shape: rectangle, label: "Feature-001-NF 极端场景保障" }
  Feat_knowledge_f@{ shape: rectangle, label: "Feature-002-F 知识运营能力" }
`;case`chain001F-us`:return`---
title: "US 环 · Feature-001-F · 用户故事"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Us_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
    Feat_answer_f.Us_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  end
`;case`chain001NF-us`:return`---
title: "US 环 · Feature-001-NF · 用户故事"
---
graph TB
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.Us_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
    Feat_degrade_nf.Us_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
  end
  Feat_degrade_nf.Us_kbEmpty -. "\`提交发布判定\`" .-> Feat_degrade_nf.Us_llmDown
  Feat_degrade_nf.Us_ragTimeout -. "\`统一由提示环节下发\`" .-> Feat_degrade_nf.Us_llmDown
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
  Feat_answer_f.Us_ask -. "\`要求\`" .-> Feat_answer_f.F_answer
  Feat_answer_f.Us_lowConfidence -. "\`要求\`" .-> Feat_answer_f.F_retrieval
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
  Feat_degrade_nf.Us_kbEmpty -. "\`提交发布判定\`" .-> Feat_degrade_nf.Us_llmDown
  Feat_degrade_nf.Us_ragTimeout -. "\`统一由提示环节下发\`" .-> Feat_degrade_nf.Us_llmDown
  Feat_degrade_nf.Us_kbEmpty -. "\`要求\`" .-> Feat_degrade_nf.Nf_kbEmpty
  Feat_degrade_nf.Us_ragTimeout -. "\`要求\`" .-> Feat_degrade_nf.Nf_ragTimeout
  Feat_degrade_nf.Us_llmDown -. "\`要求\`" .-> Feat_degrade_nf.Nf_llmDown
`;case`chain001F-i-goal`:return`---
title: "I 环 · Feature-001-F · 业务目标"
---
graph TB
  Feat_answer_fI_goal@{ shape: rectangle, label: "I-G0 业务目标" }
`;case`chain001F-i-step`:return`---
title: "I 环 · Feature-001-F · 业务步骤"
---
graph TB
  subgraph Feat_answer_fUs_ask["\`US-001 客户提问获得专业答复\`"]
    Feat_answer_fUs_ask.I_ask_normalize@{ shape: rectangle, label: "I-001 归一化提问" }
    Feat_answer_fUs_ask.I_ask_retrieve@{ shape: rectangle, label: "I-002 检索候选知识" }
    Feat_answer_fUs_ask.I_ask_rank@{ shape: rectangle, label: "I-003 候选排序与择优" }
    Feat_answer_fUs_ask.I_ask_verify@{ shape: rectangle, label: "I-004 置信度校验" }
    Feat_answer_fUs_ask.I_ask_compose@{ shape: rectangle, label: "I-005 生成答复" }
    Feat_answer_fUs_ask.I_ask_deliver@{ shape: rectangle, label: "I-006 下发答复" }
  end
  subgraph Feat_answer_fUs_lowConfidence["\`US-002 答不准时转人工而非硬答\`"]
    Feat_answer_fUs_lowConfidence.I_lowEscalate@{ shape: rectangle, label: "I-011 判定转人工" }
    Feat_answer_fUs_lowConfidence.I_lowTicket@{ shape: rectangle, label: "I-012 创建人工工单" }
    Feat_answer_fUs_lowConfidence.I_lowNotify@{ shape: rectangle, label: "I-013 告知客户等待" }
  end
`;case`chain001NF-i-goal`:return`---
title: "I 环 · Feature-001-NF · 业务目标"
---
graph TB
  Feat_degrade_nfI_goal@{ shape: rectangle, label: "I-G0 业务目标" }
`;case`chain001NF-i-state`:return`---
title: "I 环 · Feature-001-NF · 业务状态"
---
graph TB
  Feat_degrade_nfSt_unprobed@{ shape: rectangle, label: "S-100 未探测" }
  Feat_degrade_nfSt_probing@{ shape: rectangle, label: "S-101 探测中" }
  Feat_degrade_nfSt_healthy@{ shape: rectangle, label: "S-102 正常" }
  Feat_degrade_nfSt_scenarioHit@{ shape: rectangle, label: "S-103 命中极端场景" }
  Feat_degrade_nfSt_notified@{ shape: rectangle, label: "S-104 已下发提示" }
  Feat_degrade_nfSt_unprobed -. "\`发起探测\`" .-> Feat_degrade_nfSt_probing
  Feat_degrade_nfSt_probing -. "\`探测通过\`" .-> Feat_degrade_nfSt_healthy
  Feat_degrade_nfSt_probing -. "\`探测命中异常\`" .-> Feat_degrade_nfSt_scenarioHit
  Feat_degrade_nfSt_scenarioHit -. "\`下发提示\`" .-> Feat_degrade_nfSt_notified
  Feat_degrade_nfSt_notified -. "\`继续巡检\`" .-> Feat_degrade_nfSt_probing
`;case`chain001NF-i-step`:return`---
title: "I 环 · Feature-001-NF · 场景判定步骤"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmpty["\`US-101 知识库为空时运营人员能看见\`"]
    Feat_degrade_nfUs_kbEmpty.I_kb_count@{ shape: rectangle, label: "I-111 读取条目数" }
    Feat_degrade_nfUs_kbEmpty.I_kb_judge@{ shape: rectangle, label: "I-112 判定零条场景" }
    Feat_degrade_nfUs_kbEmpty.I_kb_render@{ shape: rectangle, label: "I-113 渲染空库提示" }
  end
  subgraph Feat_degrade_nfUs_ragTimeout["\`US-102 RAGFlow 超时时客户不被静默等待\`"]
    Feat_degrade_nfUs_ragTimeout.I_to_timer@{ shape: rectangle, label: "I-121 启动超时计时" }
    Feat_degrade_nfUs_ragTimeout.I_to_check@{ shape: rectangle, label: "I-122 判定超时" }
    Feat_degrade_nfUs_ragTimeout.I_to_notify@{ shape: rectangle, label: "I-123 下发处理中提示" }
  end
  subgraph Feat_degrade_nfUs_llmDown["\`US-103 LLM 不可用时转人工而非静默失败\`"]
    Feat_degrade_nfUs_llmDown.I_ll_detect@{ shape: rectangle, label: "I-131 判定调用结果" }
    Feat_degrade_nfUs_llmDown.I_ll_ticket@{ shape: rectangle, label: "I-132 生成人工工单" }
    Feat_degrade_nfUs_llmDown.I_ll_notify@{ shape: rectangle, label: "I-133 告知等待人工" }
  end
  Feat_degrade_nfUs_kbEmpty.I_kb_render -. "\`提交发布判定\`" .-> Feat_degrade_nfUs_llmDown.I_ll_notify
  Feat_degrade_nfUs_ragTimeout -. "\`统一由提示环节下发\`" .-> Feat_degrade_nfUs_llmDown.I_ll_notify
`;case`chain001F-ui`:return`---
title: "UI 环 · Feature-001-F · 交互面与信息设计"
---
graph TB
  subgraph Feat_answer_fUs_askI_ask_deliver["\`I-006 下发答复\`"]
    Feat_answer_fUs_askI_ask_deliver.Ui_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
    Feat_answer_fUs_askI_ask_deliver.Ui_information@{ shape: rounded, label: "UI-002 答复信息设计" }
  end
  Feat_answer_fUs_askI_ask_deliver.Ui_interaction -. "\`持久化工单\`" .-> Feat_answer_fUs_askI_ask_deliver.Ui_information
`;case`chain001NF-ui`:return`---
title: "UI 环 · Feature-001-NF · 交互面 · 空库提示"
---
graph TB
  subgraph Feat_degrade_nfUs_kbEmptyI_kb_render["\`I-113 渲染空库提示\`"]
    Feat_degrade_nfUs_kbEmptyI_kb_render.Ui_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
  end
`;case`chain001NF-ui-notice`:return`---
title: "UI 环 · Feature-001-NF · 交互面 · 场景提示"
---
graph TB
  subgraph Feat_degrade_nfUs_llmDownI_ll_notify["\`I-133 告知等待人工\`"]
    Feat_degrade_nfUs_llmDownI_ll_notify.Ui_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
  end
`;case`chain002F-us`:return`---
title: "US 环 · Feature-002-F · 用户故事"
---
graph TB
  subgraph Feat_knowledge_f["\`Feature-002-F 知识运营能力\`"]
    Feat_knowledge_f.Us_scan@{ shape: doc, label: "US-201 素材入库后自动进入候选知识" }
    Feat_knowledge_f.Us_govern@{ shape: doc, label: "US-202 候选知识经我决策后才对外可见" }
    Feat_knowledge_f.Us_alert@{ shape: doc, label: "US-203 知识陈旧时我能收到提示" }
  end
  Feat_knowledge_f.Us_scan -. "\`提交候选进入治理\`" .-> Feat_knowledge_f.Us_govern
  Feat_knowledge_f.Us_govern -. "\`晋升后进入新鲜度巡检\`" .-> Feat_knowledge_f.Us_alert
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
  Feat_knowledge_f.Us_scan -. "\`提交候选进入治理\`" .-> Feat_knowledge_f.Us_govern
  Feat_knowledge_f.Us_govern -. "\`晋升后进入新鲜度巡检\`" .-> Feat_knowledge_f.Us_alert
  Feat_knowledge_f.Us_scan -. "\`要求\`" .-> Feat_knowledge_f.F_ingest
  Feat_knowledge_f.Us_govern -. "\`要求\`" .-> Feat_knowledge_f.F_govern
  Feat_knowledge_f.Us_alert -. "\`要求\`" .-> Feat_knowledge_f.F_govern
`;case`chain002F-i-goal`:return`---
title: "I 环 · Feature-002-F · 业务目标"
---
graph TB
  Feat_knowledge_fI_goal@{ shape: rectangle, label: "I-G0 业务目标" }
`;case`chain002F-i-state`:return`---
title: "I 环 · Feature-002-F · 业务状态"
---
graph TB
  Feat_knowledge_fSt_intake@{ shape: rectangle, label: "S-200 待接入" }
  Feat_knowledge_fSt_scanning@{ shape: rectangle, label: "S-201 扫描中" }
  Feat_knowledge_fSt_pendingReview@{ shape: rectangle, label: "S-202 待人工审阅" }
  Feat_knowledge_fSt_published@{ shape: rectangle, label: "S-203 已发布可检索" }
  Feat_knowledge_fSt_stale@{ shape: rectangle, label: "S-204 新鲜度异常" }
  Feat_knowledge_fSt_intake -. "\`抽取候选知识\`" .-> Feat_knowledge_fSt_scanning
  Feat_knowledge_fSt_scanning -. "\`提交候选\`" .-> Feat_knowledge_fSt_pendingReview
  Feat_knowledge_fSt_pendingReview -. "\`驳回退回\`" .-> Feat_knowledge_fSt_intake
  Feat_knowledge_fSt_pendingReview -. "\`批准晋升\`" .-> Feat_knowledge_fSt_published
  Feat_knowledge_fSt_published -. "\`超出新鲜度阈值\`" .-> Feat_knowledge_fSt_stale
  Feat_knowledge_fSt_stale -. "\`重新扫描\`" .-> Feat_knowledge_fSt_scanning
`;case`chain002F-i-step`:return`---
title: "I 环 · Feature-002-F · 业务步骤"
---
graph TB
  subgraph Feat_knowledge_fUs_scan["\`US-201 素材入库后自动进入候选知识\`"]
    Feat_knowledge_fUs_scan.I_scan_register@{ shape: rectangle, label: "I-211 登记素材" }
    Feat_knowledge_fUs_scan.I_scan_extract@{ shape: rectangle, label: "I-212 抽取候选知识" }
    Feat_knowledge_fUs_scan.I_scan_submit@{ shape: rectangle, label: "I-213 提交候选" }
  end
  subgraph Feat_knowledge_fUs_govern["\`US-202 候选知识经我决策后才对外可见\`"]
    Feat_knowledge_fUs_govern.I_gov_review@{ shape: rectangle, label: "I-221 人工审阅候选" }
    Feat_knowledge_fUs_govern.I_gov_decide@{ shape: rectangle, label: "I-222 记录决策" }
    Feat_knowledge_fUs_govern.I_gov_promote@{ shape: rectangle, label: "I-223 晋升知识" }
  end
  subgraph Feat_knowledge_fUs_alert["\`US-203 知识陈旧时我能收到提示\`"]
    Feat_knowledge_fUs_alert.I_alert_probe@{ shape: rectangle, label: "I-231 巡检数据集状态" }
    Feat_knowledge_fUs_alert.I_alert_judge@{ shape: rectangle, label: "I-232 判定新鲜度异常" }
    Feat_knowledge_fUs_alert.I_alert_report@{ shape: rectangle, label: "I-233 上报告警" }
  end
  Feat_knowledge_fUs_scan.I_scan_submit -. "\`提交候选进入治理\`" .-> Feat_knowledge_fUs_govern.I_gov_review
  Feat_knowledge_fUs_govern.I_gov_promote -. "\`晋升后进入新鲜度巡检\`" .-> Feat_knowledge_fUs_alert.I_alert_judge
`;case`chain002F-ui`:return`---
title: "UI 环 · Feature-002-F · 交互面与信息设计"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_alert_report["\`I-233 上报告警\`"]
    Feat_knowledge_fUs_alertI_alert_report.Ui_console@{ shape: rounded, label: "UI-201 运营控制台" }
    Feat_knowledge_fUs_alertI_alert_report.Ui_information@{ shape: rounded, label: "UI-202 知识运营信息设计" }
  end
  Feat_knowledge_fUs_alertI_alert_report.Ui_console -. "\`[...]\`" .-> Feat_knowledge_fUs_alertI_alert_report.Ui_information
  Feat_knowledge_fUs_alertI_alert_report.Ui_information -. "\`触发扫描\`" .-> Feat_knowledge_fUs_alertI_alert_report.Ui_console
`;case`srcdir002F`:return`---
title: "SRC 环 · Feature-002-F · 代码结构"
---
graph TB
  subgraph Feat_knowledge_fUs_alertI_alert_reportUi_information["\`UI-202 知识运营信息设计\`"]
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeRoutes@{ shape: rectangle, label: "SRC-202 知识库路由" }
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync@{ shape: rectangle, label: "SRC-208 知识同步" }
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle@{ shape: rectangle, label: "SRC-209 知识生命周期视图" }
    Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry@{ shape: rectangle, label: "SRC-205 文档登记簿" }
  end
  subgraph Feat_knowledge_fUs_alertI_alert_reportUi_console["\`UI-201 运营控制台\`"]
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialRoutes@{ shape: rectangle, label: "SRC-201 素材路由" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialBatch@{ shape: rectangle, label: "SRC-204 素材批处理" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan@{ shape: rectangle, label: "SRC-206 知识扫描" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService@{ shape: rectangle, label: "SRC-203 素材服务" }
    Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance@{ shape: rectangle, label: "SRC-207 知识治理" }
  end
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialRoutes -. "\`接收素材\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialBatch -. "\`批量接入\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan -. "\`提交候选\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance
  Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeRoutes -. "\`触发扫描\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_knowledgeScan
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_materialService -. "\`登记文档\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry
  Feat_knowledge_fUs_alertI_alert_reportUi_console.Src_governance -. "\`批准后推送\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync
  Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_knowledgeSync -. "\`更新生命周期\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle
  Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_lifecycle -. "\`晋升或下线\`" .-> Feat_knowledge_fUs_alertI_alert_reportUi_information.Src_documentRegistry
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
`;case`api002F`:return`---
title: "SRC 环 · Feature-002-F · 对外接口"
---
graph TB
  Feat_knowledge_fLane_edge@{ shape: rectangle, label: "服务端接入泳道" }
`;case`seq001F-answer`:return`---
title: "SRC 环 · Feature-001-F · 应答主干时序"
---
graph LR
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
  Feat_answer_fLane_clientActor_customer -. "\`企业微信提问\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`分发归一化消息\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator -. "\`检索候选知识\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge -. "\`请求 RAGFlow\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`返回候选知识\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator -. "\`校验置信度\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy -. "\`达标放行并返回答复\`" .-> Feat_answer_fLane_edgeApi_chatCallback
`;case`seq001F-branch-low-confidence-src`:return`---
title: "SRC 环 · Feature-001-F · 分支时序 · 置信度不足转人工"
---
graph LR
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
  Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store@{ shape: rectangle, label: "SRC-007 本地存储" }
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy -. "\`置信度不足\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator -. "\`转人工\`" .-> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService
  Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService -. "\`持久化工单\`" .-> Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store
`;case`dfd001F-answer`:return`---
title: "SRC 环 · Feature-001-F · 数据流 · 应答"
---
graph LR
  Feat_answer_fUs_askI_ask_deliverUi_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
  Feat_answer_fIn_chatMessage@{ shape: rectangle, label: "IN-001 客户提问入参" }
  Feat_answer_fBiz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
  Feat_answer_fPod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
  Feat_answer_fDao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
  Feat_answer_fOut_answer@{ shape: rectangle, label: "OUT-001 答复出参视图" }
  Feat_answer_fUs_askI_ask_deliverUi_information@{ shape: rounded, label: "UI-002 答复信息设计" }
  Feat_answer_fUs_askI_ask_deliverUi_interaction -. "\`提交提问\`" .-> Feat_answer_fIn_chatMessage
  Feat_answer_fIn_chatMessage -. "\`转换为检索查询\`" .-> Feat_answer_fBiz_query
  Feat_answer_fBiz_query -. "\`低置信度落工单\`" .-> Feat_answer_fPod_ticket
  Feat_answer_fPod_ticket -. "\`写入工单\`" .-> Feat_answer_fDao_store
  Feat_answer_fDao_store -. "\`查询答复内容\`" .-> Feat_answer_fOut_answer
  Feat_answer_fOut_answer -. "\`渲染答复\`" .-> Feat_answer_fUs_askI_ask_deliverUi_information
`;case`seq001NF-degrade`:return`---
title: "SRC 环 · Feature-001-NF · 场景判定时序"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfLane_edgeApi_status@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  Feat_degrade_nfUs_kbEmptyI_kb_count@{ shape: rectangle, label: "I-111 读取条目数" }
  Feat_degrade_nfLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_degrade_nfUs_llmDownI_ll_notify@{ shape: rectangle, label: "I-133 告知等待人工" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`查询集成状态\`" .-> Feat_degrade_nfLane_edgeApi_status
  Feat_degrade_nfLane_edgeApi_status -. "\`发起探测\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_count
  Feat_degrade_nfUs_kbEmptyI_kb_count -. "\`探测数据集可用性\`" .-> Feat_degrade_nfLane_extExt_ragflow
  Feat_degrade_nfLane_extExt_ragflow -. "\`返回探测结论\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_count
  Feat_degrade_nfUs_kbEmptyI_kb_count -. "\`提交发布判定并下发提示\`" .-> Feat_degrade_nfUs_llmDownI_ll_notify
  Feat_degrade_nfUs_llmDownI_ll_notify -. "\`告知客户\`" .-> Feat_degrade_nfLane_operatorActor_ops
`;case`dfd001NF-probe`:return`---
title: "SRC 环 · Feature-001-NF · 数据流 · 探测"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfIn_probeQuery@{ shape: rectangle, label: "IN-101 状态探测入参" }
  Feat_degrade_nfBiz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
  Feat_degrade_nfOut_status@{ shape: rectangle, label: "OUT-101 状态出参视图" }
  Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
  Feat_degrade_nfPod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
  Feat_degrade_nfDao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`构造探测入参\`" .-> Feat_degrade_nfIn_probeQuery
  Feat_degrade_nfIn_probeQuery -. "\`转换为探测结果\`" .-> Feat_degrade_nfBiz_probeResult
  Feat_degrade_nfBiz_probeResult -. "\`渲染状态载荷\`" .-> Feat_degrade_nfOut_status
  Feat_degrade_nfOut_status -. "\`显示条目数与异常提示\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status
  Feat_degrade_nfBiz_probeResult -. "\`异常转告警实体\`" .-> Feat_degrade_nfPod_alert
  Feat_degrade_nfPod_alert -. "\`写入告警\`" .-> Feat_degrade_nfDao_alert
`;case`seq001F-i-step-lanes`:return`---
title: "I 环 · Feature-001-F · 业务步骤泳道流程"
---
graph LR
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fUs_askI_ask_normalize@{ shape: rectangle, label: "I-001 归一化提问" }
  Feat_answer_fUs_askI_ask_retrieve@{ shape: rectangle, label: "I-002 检索候选知识" }
  Feat_answer_fUs_askI_ask_rank@{ shape: rectangle, label: "I-003 候选排序与择优" }
  Feat_answer_fUs_askI_ask_verify@{ shape: rectangle, label: "I-004 置信度校验" }
  Feat_answer_fUs_askI_ask_compose@{ shape: rectangle, label: "I-005 生成答复" }
  Feat_answer_fUs_askI_ask_deliver@{ shape: rectangle, label: "I-006 下发答复" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_answer_fLane_clientActor_customer -. "\`①提出问题\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`②归一化提问\`" .-> Feat_answer_fUs_askI_ask_normalize
  Feat_answer_fUs_askI_ask_normalize -. "\`③发起检索\`" .-> Feat_answer_fUs_askI_ask_retrieve
  Feat_answer_fUs_askI_ask_retrieve -. "\`④请求RAGFlow\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`⑤返回候选知识\`" .-> Feat_answer_fUs_askI_ask_retrieve
  Feat_answer_fUs_askI_ask_retrieve -. "\`⑥候选排序\`" .-> Feat_answer_fUs_askI_ask_rank
  Feat_answer_fUs_askI_ask_rank -. "\`⑦置信度校验\`" .-> Feat_answer_fUs_askI_ask_verify
  Feat_answer_fUs_askI_ask_verify -. "\`⑧生成答复\`" .-> Feat_answer_fUs_askI_ask_compose
  Feat_answer_fUs_askI_ask_compose -. "\`⑨下发答复\`" .-> Feat_answer_fUs_askI_ask_deliver
  Feat_answer_fUs_askI_ask_deliver -. "\`⑩回复会话\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`⑪答复送达\`" .-> Feat_answer_fLane_clientActor_customer
`;case`seq001F-branch-low-confidence`:return`---
title: "I 环 · Feature-001-F · 分支泳道流程 · 置信度不足"
---
graph LR
  Feat_answer_fUs_askI_ask_verify@{ shape: rectangle, label: "I-004 置信度校验" }
  Feat_answer_fUs_lowConfidenceI_lowEscalate@{ shape: rectangle, label: "I-011 判定转人工" }
  Feat_answer_fUs_lowConfidenceI_lowTicket@{ shape: rectangle, label: "I-012 创建人工工单" }
  Feat_answer_fUs_lowConfidenceI_lowNotify@{ shape: rectangle, label: "I-013 告知客户等待" }
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fUs_askI_ask_verify -. "\`置信度不足\`" .-> Feat_answer_fUs_lowConfidenceI_lowEscalate
  Feat_answer_fUs_lowConfidenceI_lowEscalate -. "\`创建工单\`" .-> Feat_answer_fUs_lowConfidenceI_lowTicket
  Feat_answer_fUs_lowConfidenceI_lowTicket -. "\`告知等待\`" .-> Feat_answer_fUs_lowConfidenceI_lowNotify
  Feat_answer_fUs_lowConfidenceI_lowNotify -. "\`回复会话\`" .-> Feat_answer_fLane_edgeApi_chatCallback
`;case`seq001NF-i-step-lanes`:return`---
title: "I 环 · Feature-001-NF · 场景判定泳道流程"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfLane_edgeApi_status@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  Feat_degrade_nfUs_kbEmptyI_kb_count@{ shape: rectangle, label: "I-111 读取条目数" }
  Feat_degrade_nfUs_kbEmptyI_kb_judge@{ shape: rectangle, label: "I-112 判定零条场景" }
  Feat_degrade_nfUs_ragTimeoutI_to_check@{ shape: rectangle, label: "I-122 判定超时" }
  Feat_degrade_nfUs_llmDownI_ll_detect@{ shape: rectangle, label: "I-131 判定调用结果" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`①查询状态\`" .-> Feat_degrade_nfLane_edgeApi_status
  Feat_degrade_nfLane_edgeApi_status -. "\`②发起探测\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_count
  Feat_degrade_nfUs_kbEmptyI_kb_count -. "\`③判定条目数\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_judge
  Feat_degrade_nfUs_kbEmptyI_kb_judge -. "\`④判定响应耗时\`" .-> Feat_degrade_nfUs_ragTimeoutI_to_check
  Feat_degrade_nfUs_ragTimeoutI_to_check -. "\`⑤判定模型可用性\`" .-> Feat_degrade_nfUs_llmDownI_ll_detect
  Feat_degrade_nfUs_llmDownI_ll_detect -. "\`⑥下发提示或转人工\`" .-> Feat_degrade_nfLane_operatorActor_ops
`;case`seq001F-api-chat`:return`---
title: "SRC 环 · Feature-001-F · 接口泳道时序 · 提交提问"
---
graph LR
  Feat_answer_fLane_clientActor_customer@{ icon: "fa:user", shape: rounded, label: "客户" }
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fUs_askI_ask_deliver@{ shape: rectangle, label: "I-006 下发答复" }
  Feat_answer_fLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_answer_fLane_clientActor_customer -. "\`POST /wechat/callback\`" .-> Feat_answer_fLane_edgeApi_chatCallback
  Feat_answer_fLane_edgeApi_chatCallback -. "\`触发应答\`" .-> Feat_answer_fUs_askI_ask_deliver
  Feat_answer_fUs_askI_ask_deliver -. "\`检索知识\`" .-> Feat_answer_fLane_extExt_ragflow
  Feat_answer_fLane_extExt_ragflow -. "\`返回候选知识\`" .-> Feat_answer_fUs_askI_ask_deliver
  Feat_answer_fUs_askI_ask_deliver -. "\`返回答复\`" .-> Feat_answer_fLane_edgeApi_chatCallback
`;case`seq001NF-api-status`:return`---
title: "SRC 环 · Feature-001-NF · 接口泳道时序 · 查询集成状态"
---
graph LR
  Feat_degrade_nfLane_operatorActor_ops@{ icon: "fa:user", shape: rounded, label: "运营人员" }
  Feat_degrade_nfLane_edgeApi_status@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
  Feat_degrade_nfUs_kbEmptyI_kb_count@{ shape: rectangle, label: "I-111 读取条目数" }
  Feat_degrade_nfLane_extExt_ragflow@{ shape: rectangle, label: "RAGFlow" }
  Feat_degrade_nfLane_operatorActor_ops -. "\`GET /integration/status\`" .-> Feat_degrade_nfLane_edgeApi_status
  Feat_degrade_nfLane_edgeApi_status -. "\`发起探测\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_count
  Feat_degrade_nfUs_kbEmptyI_kb_count -. "\`探测数据集\`" .-> Feat_degrade_nfLane_extExt_ragflow
  Feat_degrade_nfLane_extExt_ragflow -. "\`返回结论\`" .-> Feat_degrade_nfUs_kbEmptyI_kb_count
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};
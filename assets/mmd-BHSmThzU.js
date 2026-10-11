var e=e=>{switch(e){case`feat001FChain`:return`---
title: "Feature-001-F 链路总览"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Us_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
    Feat_answer_f.Us_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
    Feat_answer_f.Cvt_normalize@{ shape: rounded, label: "CVT-001 提问归一化转换器" }
    Feat_answer_f.Lane_client@{ shape: rectangle, label: "客户端泳道" }
    Feat_answer_f.F_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
    Feat_answer_f.I_step@{ shape: rectangle, label: "I-003 业务步骤" }
    Feat_answer_f.F_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
    Feat_answer_f.I_goal@{ shape: rectangle, label: "I-001 业务目标" }
    Feat_answer_f.Lane_edge@{ shape: rectangle, label: "服务端接入泳道" }
    Feat_answer_f.I_state@{ shape: rectangle, label: "I-002 业务状态" }
    Feat_answer_f.Ui_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
    Feat_answer_f.Lane_core@{ shape: rectangle, label: "领域层泳道" }
    Feat_answer_f.Src_wechatCallback@{ shape: rectangle, label: "SRC-001 微信客服回调入口" }
    Feat_answer_f.In_chatMessage@{ shape: rectangle, label: "IN-001 客户提问入参" }
    Feat_answer_f.Lane_ext@{ shape: rectangle, label: "外部依赖泳道" }
    Feat_answer_f.Src_answerOrchestrator@{ shape: rectangle, label: "SRC-002 应答编排器" }
    Feat_answer_f.Biz_query@{ shape: rectangle, label: "BIZ-001 检索查询对象" }
    Feat_answer_f.Src_answerLoop@{ shape: rectangle, label: "SRC-003 知识应答循环" }
    Feat_answer_f.Src_handoffService@{ shape: rectangle, label: "SRC-006 转人工服务" }
    Feat_answer_f.Pod_ticket@{ shape: rectangle, label: "POD-001 工单持久化实体" }
    Feat_answer_f.Src_replyPolicy@{ shape: rectangle, label: "SRC-004 回复策略" }
    Feat_answer_f.Src_ragflowKnowledge@{ shape: rectangle, label: "SRC-005 RAGFlow 知识检索" }
    Feat_answer_f.Dao_store@{ shape: cylinder, label: "DAO-001 本地存储访问" }
    Feat_answer_f.Out_answer@{ shape: rectangle, label: "OUT-001 答复出参视图" }
    Feat_answer_f.Ui_information@{ shape: rounded, label: "UI-002 答复信息设计" }
    Feat_answer_f.Src_store@{ shape: rectangle, label: "SRC-007 本地存储" }
  end
  Feat_answer_f.Us_ask -. "\`要求\`" .-> Feat_answer_f.F_answer
  Feat_answer_f.Us_ask -. "\`落为业务步骤\`" .-> Feat_answer_f.I_step
  Feat_answer_f.Us_lowConfidence -. "\`要求\`" .-> Feat_answer_f.F_retrieval
  Feat_answer_f.Us_lowConfidence -. "\`落为业务目标\`" .-> Feat_answer_f.I_goal
  Feat_answer_f.I_state -. "\`展示应答状态\`" .-> Feat_answer_f.Ui_information
  Feat_answer_f.I_step -. "\`推进问答状态\`" .-> Feat_answer_f.I_state
  Feat_answer_f.I_step -. "\`反馈交互\`" .-> Feat_answer_f.Ui_interaction
  Feat_answer_f.Ui_interaction -. "\`由回调触发\`" .-> Feat_answer_f.Src_wechatCallback
  Feat_answer_f.Ui_interaction -. "\`提交提问\`" .-> Feat_answer_f.In_chatMessage
  Feat_answer_f.Ui_information -. "\`读取工单状态\`" .-> Feat_answer_f.Src_store
  Feat_answer_f.Out_answer -. "\`渲染答复\`" .-> Feat_answer_f.Ui_information
  Feat_answer_f.Src_wechatCallback -. "\`分发归一化消息\`" .-> Feat_answer_f.Src_answerOrchestrator
  Feat_answer_f.Src_answerOrchestrator -. "\`请求应答\`" .-> Feat_answer_f.Src_answerLoop
  Feat_answer_f.Src_answerOrchestrator -. "\`低置信度时转人工\`" .-> Feat_answer_f.Src_handoffService
  Feat_answer_f.Src_answerLoop -. "\`校验置信度\`" .-> Feat_answer_f.Src_replyPolicy
  Feat_answer_f.Src_answerLoop -. "\`检索候选知识\`" .-> Feat_answer_f.Src_ragflowKnowledge
  Feat_answer_f.Biz_query -. "\`发起检索\`" .-> Feat_answer_f.Src_ragflowKnowledge
  Feat_answer_f.Src_handoffService -. "\`持久化工单\`" .-> Feat_answer_f.Src_store
  Feat_answer_f.In_chatMessage -. "\`转换为检索查询\`" .-> Feat_answer_f.Biz_query
  Feat_answer_f.Cvt_normalize -. "\`负责 报文→IN-001 映射\`" .-> Feat_answer_f.In_chatMessage
  Feat_answer_f.Biz_query -. "\`低置信度落工单\`" .-> Feat_answer_f.Pod_ticket
  Feat_answer_f.Pod_ticket -. "\`写入工单\`" .-> Feat_answer_f.Dao_store
  Feat_answer_f.Dao_store -. "\`查询答复内容\`" .-> Feat_answer_f.Out_answer
  Feat_answer_f.Cvt_normalize -. "\`负责 POD-001→OUT-001 映射\`" .-> Feat_answer_f.Out_answer
  Feat_answer_f.Lane_client -. "\`企业微信提问\`" .-> Feat_answer_f.Lane_edge
  Feat_answer_f.Lane_edge -. "\`触发应答\`" .-> Feat_answer_f.Lane_core
  Feat_answer_f.Lane_core -. "\`返回答复或工单号\`" .-> Feat_answer_f.Lane_edge
  Feat_answer_f.Lane_core -. "\`检索知识\`" .-> Feat_answer_f.Lane_ext
  Feat_answer_f.Lane_ext -. "\`返回候选知识\`" .-> Feat_answer_f.Lane_core
`;case`feat001NFFChain`:return`---
title: "Feature-001-NF 链路总览"
---
graph TB
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.Us_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
    Feat_degrade_nf.Us_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
    Feat_degrade_nf.Src_integrationRoutes@{ shape: rectangle, label: "SRC-101 集成状态路由" }
    Feat_degrade_nf.Cvt_probe@{ shape: rounded, label: "CVT-101 探测结果转换器" }
    Feat_degrade_nf.Lane_operator@{ shape: rectangle, label: "运营人员泳道" }
    Feat_degrade_nf.Nf_kbEmpty@{ shape: rounded, label: "NF-101 知识库为零条时状态可见" }
    Feat_degrade_nf.I_goal@{ shape: rectangle, label: "I-101 业务目标" }
    Feat_degrade_nf.Nf_ragTimeout@{ shape: rounded, label: "NF-102 RAGFlow 超 8 秒时客户可感知" }
    Feat_degrade_nf.Nf_llmDown@{ shape: rounded, label: "NF-103 LLM 不可用时自动转人工" }
    Feat_degrade_nf.I_step@{ shape: rectangle, label: "I-102 场景判定逻辑" }
    Feat_degrade_nf.Src_ragflowProbe@{ shape: rectangle, label: "SRC-104 RAGFlow 生命周期探针" }
    Feat_degrade_nf.Lane_edge@{ shape: rectangle, label: "服务端接入泳道" }
    Feat_degrade_nf.Ui_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
    Feat_degrade_nf.In_probeQuery@{ shape: rectangle, label: "IN-101 状态探测入参" }
    Feat_degrade_nf.Src_knowledgeAlert@{ shape: rectangle, label: "SRC-103 知识告警" }
    Feat_degrade_nf.Biz_probeResult@{ shape: rectangle, label: "BIZ-101 探测结果对象" }
    Feat_degrade_nf.Src_evaluationGate@{ shape: rectangle, label: "SRC-102 评测闸门" }
    Feat_degrade_nf.Pod_alert@{ shape: rectangle, label: "POD-101 告警持久化实体" }
    Feat_degrade_nf.Out_status@{ shape: rectangle, label: "OUT-101 状态出参视图" }
    Feat_degrade_nf.Lane_ext@{ shape: rectangle, label: "外部依赖泳道" }
    Feat_degrade_nf.Src_storeAlert@{ shape: rectangle, label: "SRC-106 告警状态存储" }
    Feat_degrade_nf.Dao_alert@{ shape: cylinder, label: "DAO-101 告警存储访问" }
    Feat_degrade_nf.Ui_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
    Feat_degrade_nf.Src_operatorUi@{ shape: rectangle, label: "SRC-105 运营人员控制台" }
    Feat_degrade_nf.Lane_core@{ shape: rectangle, label: "判定层泳道" }
  end
  Feat_degrade_nf.Us_kbEmpty -. "\`要求\`" .-> Feat_degrade_nf.Nf_kbEmpty
  Feat_degrade_nf.Us_kbEmpty -. "\`落为业务目标\`" .-> Feat_degrade_nf.I_goal
  Feat_degrade_nf.Us_ragTimeout -. "\`要求\`" .-> Feat_degrade_nf.Nf_ragTimeout
  Feat_degrade_nf.Us_ragTimeout -. "\`落为场景判定逻辑\`" .-> Feat_degrade_nf.I_step
  Feat_degrade_nf.Us_llmDown -. "\`要求\`" .-> Feat_degrade_nf.Nf_llmDown
  Feat_degrade_nf.Us_llmDown -. "\`落为场景判定逻辑\`" .-> Feat_degrade_nf.I_step
  Feat_degrade_nf.I_step -. "\`反馈知识状态\`" .-> Feat_degrade_nf.Ui_status
  Feat_degrade_nf.I_step -. "\`反馈场景提示\`" .-> Feat_degrade_nf.Ui_notice
  Feat_degrade_nf.Ui_status -. "\`渲染于控制台\`" .-> Feat_degrade_nf.Src_operatorUi
  Feat_degrade_nf.Out_status -. "\`显示条目数与异常提示\`" .-> Feat_degrade_nf.Ui_status
  Feat_degrade_nf.Ui_notice -. "\`由门禁决定是否阻断\`" .-> Feat_degrade_nf.Src_evaluationGate
  Feat_degrade_nf.Ui_notice -. "\`上报告警\`" .-> Feat_degrade_nf.Src_knowledgeAlert
  Feat_degrade_nf.Src_integrationRoutes -. "\`查询空库告警\`" .-> Feat_degrade_nf.Src_knowledgeAlert
  Feat_degrade_nf.Src_integrationRoutes -. "\`探测数据集状态\`" .-> Feat_degrade_nf.Src_ragflowProbe
  Feat_degrade_nf.Src_evaluationGate -. "\`读取告警快照\`" .-> Feat_degrade_nf.Src_storeAlert
  Feat_degrade_nf.Src_knowledgeAlert -. "\`提交发布判定\`" .-> Feat_degrade_nf.Src_evaluationGate
  Feat_degrade_nf.In_probeQuery -. "\`转换为探测结果\`" .-> Feat_degrade_nf.Biz_probeResult
  Feat_degrade_nf.Lane_edge -. "\`构造探测入参\`" .-> Feat_degrade_nf.In_probeQuery
  Feat_degrade_nf.Biz_probeResult -. "\`异常转告警实体\`" .-> Feat_degrade_nf.Pod_alert
  Feat_degrade_nf.Biz_probeResult -. "\`渲染状态载荷\`" .-> Feat_degrade_nf.Out_status
  Feat_degrade_nf.Biz_probeResult -. "\`探测数据集可用性\`" .-> Feat_degrade_nf.Lane_ext
  Feat_degrade_nf.Cvt_probe -. "\`负责 BIZ-101→OUT-101 映射\`" .-> Feat_degrade_nf.Biz_probeResult
  Feat_degrade_nf.Lane_ext -. "\`返回探测结论\`" .-> Feat_degrade_nf.Biz_probeResult
  Feat_degrade_nf.Pod_alert -. "\`写入告警\`" .-> Feat_degrade_nf.Dao_alert
  Feat_degrade_nf.Cvt_probe -. "\`负责 BIZ-101→POD-101 映射\`" .-> Feat_degrade_nf.Pod_alert
  Feat_degrade_nf.Lane_operator -. "\`查询状态\`" .-> Feat_degrade_nf.Lane_edge
`;case`feat001FBusiness`:return`---
title: "Feature-001-F 业务设计视角（不含源码）"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.Us_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
    Feat_answer_f.Us_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
    Feat_answer_f.F_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
    Feat_answer_f.I_step@{ shape: rectangle, label: "I-003 业务步骤" }
    Feat_answer_f.F_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
    Feat_answer_f.I_goal@{ shape: rectangle, label: "I-001 业务目标" }
    Feat_answer_f.I_state@{ shape: rectangle, label: "I-002 业务状态" }
    Feat_answer_f.Ui_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
    Feat_answer_f.Ui_information@{ shape: rounded, label: "UI-002 答复信息设计" }
  end
  Feat_answer_f.Us_ask -. "\`要求\`" .-> Feat_answer_f.F_answer
  Feat_answer_f.Us_ask -. "\`落为业务步骤\`" .-> Feat_answer_f.I_step
  Feat_answer_f.Us_lowConfidence -. "\`要求\`" .-> Feat_answer_f.F_retrieval
  Feat_answer_f.Us_lowConfidence -. "\`落为业务目标\`" .-> Feat_answer_f.I_goal
  Feat_answer_f.I_state -. "\`展示应答状态\`" .-> Feat_answer_f.Ui_information
  Feat_answer_f.I_step -. "\`推进问答状态\`" .-> Feat_answer_f.I_state
  Feat_answer_f.I_step -. "\`反馈交互\`" .-> Feat_answer_f.Ui_interaction
`;case`feat001NFBusiness`:return`---
title: "Feature-001-NF 业务设计视角（不含源码）"
---
graph TB
  subgraph Feat_degrade_nf["\`Feature-001-NF 极端场景保障\`"]
    Feat_degrade_nf.Us_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
    Feat_degrade_nf.Us_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
    Feat_degrade_nf.Us_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
    Feat_degrade_nf.Nf_kbEmpty@{ shape: rounded, label: "NF-101 知识库为零条时状态可见" }
    Feat_degrade_nf.I_goal@{ shape: rectangle, label: "I-101 业务目标" }
    Feat_degrade_nf.Nf_ragTimeout@{ shape: rounded, label: "NF-102 RAGFlow 超 8 秒时客户可感知" }
    Feat_degrade_nf.Nf_llmDown@{ shape: rounded, label: "NF-103 LLM 不可用时自动转人工" }
    Feat_degrade_nf.I_step@{ shape: rectangle, label: "I-102 场景判定逻辑" }
    Feat_degrade_nf.Ui_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
    Feat_degrade_nf.Ui_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
  end
  Feat_degrade_nf.Us_kbEmpty -. "\`要求\`" .-> Feat_degrade_nf.Nf_kbEmpty
  Feat_degrade_nf.Us_kbEmpty -. "\`落为业务目标\`" .-> Feat_degrade_nf.I_goal
  Feat_degrade_nf.Us_ragTimeout -. "\`要求\`" .-> Feat_degrade_nf.Nf_ragTimeout
  Feat_degrade_nf.Us_ragTimeout -. "\`落为场景判定逻辑\`" .-> Feat_degrade_nf.I_step
  Feat_degrade_nf.Us_llmDown -. "\`要求\`" .-> Feat_degrade_nf.Nf_llmDown
  Feat_degrade_nf.Us_llmDown -. "\`落为场景判定逻辑\`" .-> Feat_degrade_nf.I_step
  Feat_degrade_nf.I_step -. "\`反馈知识状态\`" .-> Feat_degrade_nf.Ui_status
  Feat_degrade_nf.I_step -. "\`反馈场景提示\`" .-> Feat_degrade_nf.Ui_notice
`;case`feat001FFrame`:return`---
title: "Feature-001-F 能力清单"
---
graph TB
  Feat_answer_fUs_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
  Feat_answer_fUs_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  Feat_answer_fF_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
  Feat_answer_fF_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
  Feat_answer_fUs_ask -. "\`要求\`" .-> Feat_answer_fF_answer
  Feat_answer_fUs_lowConfidence -. "\`要求\`" .-> Feat_answer_fF_retrieval
`;case`feat001NFFrame`:return`---
title: "Feature-001-NF 场景清单"
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
`;case`procLocal`:return`---
title: "进程与线程视图 · 本地开发环境"
---
graph TB
`;case`procProd`:return`---
title: "进程与线程视图 · 生产环境"
---
graph TB
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
title: "数据载体全景 · Feature-001-F 应答链"
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
title: "数据载体全景 · Feature-001-NF 探测链"
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
`;case`api001F`:return`---
title: "API 清单 · Feature-001-F"
---
graph TB
  Feat_answer_fLane_edgeApi_chatCallback@{ shape: rectangle, label: "API-001 POST /wechat/callback 微信客服回调" }
  Feat_answer_fLane_edgeApi_handoffList@{ shape: rectangle, label: "API-002 GET /handoffs 工单列表" }
`;case`api001NF`:return`---
title: "API 清单 · Feature-001-NF"
---
graph TB
  Feat_degrade_nfLane_edgeApi_status@{ shape: rectangle, label: "API-101 GET /integration/status 集成状态" }
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
`;case`usPanorama`:return`---
title: "US 全景 · 谁要什么"
---
graph TB
  Feat_answer_fUs_ask@{ shape: doc, label: "US-001 客户提问获得专业答复" }
  Feat_answer_fUs_lowConfidence@{ shape: doc, label: "US-002 答不准时转人工而非硬答" }
  Feat_degrade_nfUs_kbEmpty@{ shape: doc, label: "US-101 知识库为空时运营人员能看见" }
  Feat_degrade_nfUs_ragTimeout@{ shape: doc, label: "US-102 RAGFlow 超时时客户不被静默等待" }
  Feat_degrade_nfUs_llmDown@{ shape: doc, label: "US-103 LLM 不可用时转人工而非静默失败" }
`;case`fPanorama`:return`---
title: "F 全景 · 系统对外能力"
---
graph TB
  Feat_answer_fF_answer@{ shape: rectangle, label: "F-001 应答编排能力" }
  Feat_answer_fF_retrieval@{ shape: rectangle, label: "F-002 知识检索能力" }
`;case`nfPanorama`:return`---
title: "NF 全景 · 极端场景下的系统表现"
---
graph TB
  Feat_degrade_nfNf_kbEmpty@{ shape: rounded, label: "NF-101 知识库为零条时状态可见" }
  Feat_degrade_nfNf_ragTimeout@{ shape: rounded, label: "NF-102 RAGFlow 超 8 秒时客户可感知" }
  Feat_degrade_nfNf_llmDown@{ shape: rounded, label: "NF-103 LLM 不可用时自动转人工" }
`;case`iPanorama`:return`---
title: "I 全景 · 业务流转"
---
graph TB
  subgraph Feat_answer_f["\`Feature-001-F 知识应答能力\`"]
    Feat_answer_f.I_goal@{ shape: rectangle, label: "I-001 业务目标" }
    Feat_answer_f.I_step@{ shape: rectangle, label: "I-003 业务步骤" }
    Feat_answer_f.I_state@{ shape: rectangle, label: "I-002 业务状态" }
  end
  Feat_degrade_nfI_goal@{ shape: rectangle, label: "I-101 业务目标" }
  Feat_degrade_nfI_step@{ shape: rectangle, label: "I-102 场景判定逻辑" }
  Feat_answer_f.I_step -. "\`推进问答状态\`" .-> Feat_answer_f.I_state
`;case`uiPanorama`:return`---
title: "UI 全景 · 用户能看到什么"
---
graph TB
  Feat_answer_fUi_interaction@{ shape: rounded, label: "UI-001 企业微信会话交互" }
  Feat_answer_fUi_information@{ shape: rounded, label: "UI-002 答复信息设计" }
  Feat_degrade_nfUi_status@{ shape: rounded, label: "UI-101 控制台状态提示" }
  Feat_degrade_nfUi_notice@{ shape: rounded, label: "UI-102 极端场景提示" }
`;case`srcPanorama`:return`---
title: "SRC 全景 · 源码单元全貌"
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
  Feat_answer_f.Src_wechatCallback -. "\`分发归一化消息\`" .-> Feat_answer_f.Src_answerOrchestrator
  Feat_answer_f.Src_answerOrchestrator -. "\`请求应答\`" .-> Feat_answer_f.Src_answerLoop
  Feat_answer_f.Src_answerLoop -. "\`校验置信度\`" .-> Feat_answer_f.Src_replyPolicy
  Feat_answer_f.Src_answerLoop -. "\`检索候选知识\`" .-> Feat_answer_f.Src_ragflowKnowledge
  Feat_answer_f.Src_answerOrchestrator -. "\`低置信度时转人工\`" .-> Feat_answer_f.Src_handoffService
  Feat_answer_f.Src_handoffService -. "\`持久化工单\`" .-> Feat_answer_f.Src_store
  Feat_degrade_nf.Src_integrationRoutes -. "\`查询空库告警\`" .-> Feat_degrade_nf.Src_knowledgeAlert
  Feat_degrade_nf.Src_knowledgeAlert -. "\`提交发布判定\`" .-> Feat_degrade_nf.Src_evaluationGate
  Feat_degrade_nf.Src_integrationRoutes -. "\`探测数据集状态\`" .-> Feat_degrade_nf.Src_ragflowProbe
  Feat_degrade_nf.Src_evaluationGate -. "\`读取告警快照\`" .-> Feat_degrade_nf.Src_storeAlert
`;case`stateMain`:return`---
title: "问答主干状态"
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
title: "问答分支 · 转人工"
---
graph TB
  St_retrieving@{ shape: rectangle, label: "检索中" }
  St_waitingHuman@{ shape: rectangle, label: "待人工" }
  St_retrieving -. "\`置信度不足\`" .-> St_waitingHuman
`;case`index`:return`---
title: "美妆客服服务 · 架构总览"
---
graph TB
  Feat_answer_f@{ shape: rectangle, label: "Feature-001-F 知识应答能力" }
  Feat_degrade_nf@{ shape: rectangle, label: "Feature-001-NF 极端场景保障" }
`;case`seq001FAnswer`:return`---
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
`;case`seq001FBranchLowConfidence`:return`---
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
`;case`dfd001F`:return`---
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
`;case`seq001NFDegrade`:return`---
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
`;case`dfd001NF`:return`---
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
`;case`seq001APIChat`:return`---
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
`;case`seq001NFAPI`:return`---
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
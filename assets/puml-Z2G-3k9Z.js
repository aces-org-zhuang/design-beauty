var e=e=>{switch(e){case`procLocal`:return`@startuml
title "进程与线程视图 · 本地开发环境"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

@enduml
`;case`procProd`:return`@startuml
title "进程与线程视图 · 生产环境"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

@enduml
`;case`pano-us`:return`@startuml
title "US 全景 · 全部 Feature"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_ask>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==US-201 素材入库后自动进入候选知识\\n\\n作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan
  rectangle "==US-202 候选知识经我决策后才对外可见\\n\\n作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern
  rectangle "==US-203 知识陈旧时我能收到提示\\n\\n作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert
}
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
  rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
  rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
}

Feat_knowledge_fUs_scan .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_govern : <color:#0ea5e9>提交候选进入治理
Feat_knowledge_fUs_govern .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_alert : <color:#0ea5e9>晋升后进入新鲜度巡检
Feat_degrade_nfUs_kbEmpty .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeout .[#0ea5e9,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#0ea5e9>统一由提示环节下发
@enduml
`;case`pano-f`:return`@startuml
title "F 全景 · 全部 F 链的能力单元"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fF_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fF_retrieval>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fF_ingest>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fF_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==F-001 应答编排能力\\n\\n决定自动应答还是转人工，串联检索与策略校验。" <<Feat_answer_fF_answer>> as Feat_answer_fF_answer
rectangle "==F-002 知识检索能力\\n\\n从 RAGFlow 检索候选知识并按置信度排序。" <<Feat_answer_fF_retrieval>> as Feat_answer_fF_retrieval
rectangle "==F-201 素材接入能力\\n\\n接收素材并登记文档标识，支持单条与批量。" <<Feat_knowledge_fF_ingest>> as Feat_knowledge_fF_ingest
rectangle "==F-202 知识治理能力\\n\\n候选知识的扫描、决策、晋升与下线。" <<Feat_knowledge_fF_govern>> as Feat_knowledge_fF_govern
@enduml
`;case`pano-nf`:return`@startuml
title "NF 全景 · 全部 NF 链的极端场景单元"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfNf_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==NF-101 知识库为零条时状态可见\\n\\n场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。" <<Feat_degrade_nfNf_kbEmpty>> as Feat_degrade_nfNf_kbEmpty
rectangle "==NF-102 RAGFlow 超 8 秒时客户可感知\\n\\n场景：RAGFlow 响应超时。表现：超过 8 秒下发带说明的提示，客服不必反复刷新。角色：客户。" <<Feat_degrade_nfNf_ragTimeout>> as Feat_degrade_nfNf_ragTimeout
rectangle "==NF-103 LLM 不可用时自动转人工\\n\\n场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。" <<Feat_degrade_nfNf_llmDown>> as Feat_degrade_nfNf_llmDown
@enduml
`;case`pano-i`:return`@startuml
title "I 全景 · 全部 Feature 的业务逻辑"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_ask>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
  rectangle "==I-101 业务目标\\n\\n客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。" <<Feat_answer_fI_goal>> as Feat_answer_fI_goal
  rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
}
rectangle "==I-201 业务目标\\n\\n素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。" <<Feat_knowledge_fI_goal>> as Feat_knowledge_fI_goal
rectangle "==US-201 素材入库后自动进入候选知识\\n\\n作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
  rectangle "==I-141 业务目标\\n\\n三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。" <<Feat_degrade_nfI_goal>> as Feat_degrade_nfI_goal
}

Feat_answer_fI_goal .[#0ea5e9,thickness=2].> Feat_answer_fUs_ask : <color:#0ea5e9>支撑下发环节
Feat_answer_fUs_lowConfidence .[#0ea5e9,thickness=2].> Feat_answer_fI_goal : <color:#0ea5e9>落为业务目标
Feat_degrade_nfUs_kbEmpty .[#0ea5e9,thickness=2].> Feat_degrade_nfI_goal : <color:#0ea5e9>落为业务目标
@enduml
`;case`pano-i-state`:return`@startuml
title "I 环 · 业务状态全景"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fSt_received>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_retrieving>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_answering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_waitingHuman>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==已接收" <<Feat_answer_fSt_received>> as Feat_answer_fSt_received
rectangle "==检索中" <<Feat_answer_fSt_retrieving>> as Feat_answer_fSt_retrieving
rectangle "==应答中" <<Feat_answer_fSt_answering>> as Feat_answer_fSt_answering
rectangle "==待人工" <<Feat_answer_fSt_waitingHuman>> as Feat_answer_fSt_waitingHuman
rectangle "==已答复" <<Feat_answer_fSt_answered>> as Feat_answer_fSt_answered

Feat_answer_fSt_received .[#8D8D8D,thickness=2].> Feat_answer_fSt_retrieving : <color:#8D8D8D>发起检索
Feat_answer_fSt_retrieving .[#8D8D8D,thickness=2].> Feat_answer_fSt_answering : <color:#8D8D8D>置信度达标
Feat_answer_fSt_answering .[#8D8D8D,thickness=2].> Feat_answer_fSt_answered : <color:#8D8D8D>答复已下发
Feat_answer_fSt_retrieving .[#8D8D8D,thickness=2].> Feat_answer_fSt_waitingHuman : <color:#8D8D8D>置信度不足
Feat_answer_fSt_waitingHuman .[#8D8D8D,thickness=2].> Feat_answer_fSt_answered : <color:#8D8D8D>人工已接管
@enduml
`;case`pano-ui`:return`@startuml
title "UI 全景 · 全部 Feature 的界面面"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_askI_ask_deliverUi_interaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_alert_reportUi_console>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_deliverUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_alert_reportUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-006 下发答复" <<Feat_answer_fUs_askI_ask_deliver>> as Feat_answer_fUs_askI_ask_deliver {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_ask_deliver>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_ask_deliver>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_ask_deliver>> dashed

  rectangle "==UI-001 企业微信会话交互\\n\\n客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。" <<Feat_answer_fUs_askI_ask_deliverUi_interaction>> as Feat_answer_fUs_askI_ask_deliverUi_interaction
  rectangle "==UI-002 答复信息设计\\n\\n展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。" <<Feat_answer_fUs_askI_ask_deliverUi_information>> as Feat_answer_fUs_askI_ask_deliverUi_information
}
rectangle "I-233 上报告警" <<Feat_knowledge_fUs_alertI_alert_report>> as Feat_knowledge_fUs_alertI_alert_report {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_alert_report>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_alert_report>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_alert_report>> dashed

  rectangle "==UI-201 运营控制台\\n\\n运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。" <<Feat_knowledge_fUs_alertI_alert_reportUi_console>> as Feat_knowledge_fUs_alertI_alert_reportUi_console
  rectangle "==UI-202 知识运营信息设计\\n\\n字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。" <<Feat_knowledge_fUs_alertI_alert_reportUi_information>> as Feat_knowledge_fUs_alertI_alert_reportUi_information
}
rectangle "US-101 知识库为空时运营人员能看见" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmpty>> dashed

  rectangle "==UI-101 控制台状态提示\\n\\n展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status
}
rectangle "US-103 LLM 不可用时转人工而非静默失败" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDown>> dashed

  rectangle "==UI-102 极端场景提示\\n\\n会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice
}

Feat_answer_fUs_askI_ask_deliverUi_interaction .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_information : <color:#15803d>持久化工单
Feat_knowledge_fUs_alertI_alert_reportUi_console .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_information : <color:#15803d>[...]
Feat_knowledge_fUs_alertI_alert_reportUi_information .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_console : <color:#15803d>触发扫描
Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice : <color:#15803d>提交发布判定
@enduml
`;case`panoSrc001F`:return`@startuml
title "SRC 单元 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-001 企业微信会话交互" <<Feat_answer_fUs_askI_ask_deliverUi_interaction>> as Feat_answer_fUs_askI_ask_deliverUi_interaction {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_ask_deliverUi_interaction>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_ask_deliverUi_interaction>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_ask_deliverUi_interaction>> dashed

  component "==SRC-001 微信客服回调入口\\n\\nsrc/routes/wechat-kf-routes.js — 接收企业微信加密回调并解密分发。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback
  component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator
  component "==SRC-003 知识应答循环\\n\\nsrc/services/knowledge-answer-loop-service.js — 检索增强的应答循环。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop
  component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService
  component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy
  component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge
}
rectangle "UI-002 答复信息设计" <<Feat_answer_fUs_askI_ask_deliverUi_information>> as Feat_answer_fUs_askI_ask_deliverUi_information {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_ask_deliverUi_information>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_ask_deliverUi_information>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_ask_deliverUi_information>> dashed

  component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store>> as Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store
}

Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator : <color:#15803d>分发归一化消息
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop : <color:#15803d>请求应答
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy : <color:#15803d>校验置信度
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge : <color:#15803d>检索候选知识
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService : <color:#15803d>低置信度时转人工
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store : <color:#15803d>持久化工单
@enduml
`;case`panoSrc001NF`:return`@startuml
title "SRC 单元 · Feature-001-NF · 空库与探测"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_operatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-101 控制台状态提示" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> dashed

  component "==SRC-101 集成状态路由\\n\\nsrc/routes/integration-routes.js — 功能概览与集成状态查询。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes
  component "==SRC-103 知识告警\\n\\nsrc/services/knowledge-alert-service.js — 暴露知识新鲜度与空库问题。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert
  component "==SRC-104 RAGFlow 生命周期探针\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 校验 RAGFlow 数据集状态与可用性。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe
  component "==SRC-105 运营人员控制台\\n\\nsrc/ui/operator.html — 运营人员单页控制台。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_operatorUi>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_operatorUi
}

Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert : <color:#15803d>查询空库告警
Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe : <color:#15803d>探测数据集状态
@enduml
`;case`panoSrc001NFnotice`:return`@startuml
title "SRC 单元 · Feature-001-NF · 场景提示"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-102 极端场景提示" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> dashed

  component "==SRC-102 评测闸门\\n\\nsrc/services/evaluation-gate.js — 本地发布策略门禁，判定是否阻断应答。" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate
  component "==SRC-106 告警状态存储\\n\\nsrc/domain/store.js — 本链侧的告警与状态快照存储单元。" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert
}

Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert : <color:#15803d>读取告警快照
@enduml
`;case`panoSrc002F`:return`@startuml
title "SRC 单元 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-202 知识运营信息设计" <<Feat_knowledge_fUs_alertI_alert_reportUi_information>> as Feat_knowledge_fUs_alertI_alert_reportUi_information {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_alert_reportUi_information>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_alert_reportUi_information>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_alert_reportUi_information>> dashed

  component "==SRC-202 知识库路由\\n\\nsrc/routes/knowledge-routes.js — 知识扫描、同步与生命周期接口。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes
  component "==SRC-208 知识同步\\n\\nsrc/services/knowledge-sync-service.js — 把已批准知识推送到 RAGFlow。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync
  component "==SRC-209 知识生命周期视图\\n\\nsrc/services/knowledge-lifecycle-service.js — 知识的晋升与下线。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle
  component "==SRC-205 文档登记簿\\n\\nsrc/services/knowledge-document-registry.js — 跟踪素材与文档标识。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry
}
rectangle "UI-201 运营控制台" <<Feat_knowledge_fUs_alertI_alert_reportUi_console>> as Feat_knowledge_fUs_alertI_alert_reportUi_console {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_alert_reportUi_console>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_alert_reportUi_console>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_alert_reportUi_console>> dashed

  component "==SRC-201 素材路由\\n\\nsrc/routes/material-routes.js — 美妆素材接入接口。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes
  component "==SRC-204 素材批处理\\n\\nsrc/services/material-batch-service.js — 批量素材接入。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch
  component "==SRC-206 知识扫描\\n\\nsrc/services/knowledge-scan-service.js — 发现候选知识。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan
  component "==SRC-203 素材服务\\n\\nsrc/services/material-service.js — 素材接入规则。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService
  component "==SRC-207 知识治理\\n\\nsrc/services/knowledge-governance-service.js — 发布决策与治理。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance
}

Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService : <color:#15803d>接收素材
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService : <color:#15803d>批量接入
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance : <color:#15803d>提交候选
Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan : <color:#15803d>触发扫描
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry : <color:#15803d>登记文档
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync : <color:#15803d>批准后推送
Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle : <color:#15803d>更新生命周期
Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry : <color:#15803d>晋升或下线
@enduml
`;case`pano-carrier`:return`@startuml
title "数据载体全景 · 全部 Feature"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fCvt_normalize>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfIn_probeQuery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfCvt_probe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fIn_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fCvt_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fIn_chatMessage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfBiz_probeResult>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fOut_knowledgeStatus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fOut_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==CVT-001 提问归一化转换器\\n\\nsrc/domain/normalize.js — 覆盖 微信原始报文→IN-001 与 POD-001→OUT-001 两组映射。" <<Feat_answer_fCvt_normalize>> as Feat_answer_fCvt_normalize
  rectangle "==IN-001 客户提问入参\\n\\nsrc/domain/normalize.js — 企业微信回调解密后归一化的提问。" <<Feat_answer_fIn_chatMessage>> as Feat_answer_fIn_chatMessage
  rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
  rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
  database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store
  rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer
}
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==IN-101 状态探测入参\\n\\nsrc/routes/integration-routes.js — 控制台发起的集成状态查询。" <<Feat_degrade_nfIn_probeQuery>> as Feat_degrade_nfIn_probeQuery
  rectangle "==CVT-101 探测结果转换器\\n\\nsrc/services/knowledge-alert-service.js — 覆盖 BIZ-101→OUT-101 与 BIZ-101→POD-101 两组映射。" <<Feat_degrade_nfCvt_probe>> as Feat_degrade_nfCvt_probe
  rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
  rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
  rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status
  database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert
}
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==IN-201 素材入参\\n\\nsrc/routes/material-routes.js — 上传素材的请求载荷。" <<Feat_knowledge_fIn_material>> as Feat_knowledge_fIn_material
  rectangle "==CVT-201 素材转换器\\n\\nsrc/services/material-service.js — 覆盖 素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。" <<Feat_knowledge_fCvt_material>> as Feat_knowledge_fCvt_material
  rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate
  rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
  database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry
  rectangle "==OUT-201 知识状态出参视图\\n\\nsrc/routes/knowledge-routes.js — 面向控制台的扫描与治理状态载荷。" <<Feat_knowledge_fOut_knowledgeStatus>> as Feat_knowledge_fOut_knowledgeStatus
}

Feat_answer_fIn_chatMessage .[#64748b,thickness=2].> Feat_answer_fBiz_query : <color:#64748b>转换为检索查询
Feat_answer_fBiz_query .[#3b82f6,thickness=2].> Feat_answer_fPod_ticket : <color:#3b82f6>低置信度落工单
Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
Feat_answer_fDao_store .[#3b82f6,thickness=2].> Feat_answer_fOut_answer : <color:#3b82f6>查询答复内容
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fIn_chatMessage : <color:#0ea5e9>负责 报文→IN-001 映射
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fOut_answer : <color:#0ea5e9>负责 POD-001→OUT-001 映射
Feat_degrade_nfIn_probeQuery .[#64748b,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#64748b>转换为探测结果
Feat_degrade_nfBiz_probeResult .[#64748b,thickness=2].> Feat_degrade_nfPod_alert : <color:#64748b>异常转告警实体
Feat_degrade_nfBiz_probeResult .[#3b82f6,thickness=2].> Feat_degrade_nfOut_status : <color:#3b82f6>渲染状态载荷
Feat_knowledge_fIn_material .[#64748b,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#64748b>转换为候选对象
Feat_knowledge_fBiz_candidate .[#64748b,thickness=2].> Feat_knowledge_fPod_document : <color:#64748b>登记为文档实体
Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>写入文档标识
Feat_knowledge_fDao_registry .[#3b82f6,thickness=2].> Feat_knowledge_fOut_knowledgeStatus : <color:#3b82f6>查询状态
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#0ea5e9>负责 素材→BIZ-201 映射
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fPod_document : <color:#0ea5e9>负责 BIZ-201→POD-201 映射
Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#0ea5e9>负责 BIZ-101→OUT-101 映射
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfPod_alert : <color:#0ea5e9>负责 BIZ-101→POD-101 映射
@enduml
`;case`pano-api`:return`@startuml
title "API 全景 · 全部 Feature 的对外接口"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fLane_edge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fLane_edge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==服务端接入泳道" <<Feat_answer_fLane_edge>> as Feat_answer_fLane_edge
rectangle "==服务端接入泳道" <<Feat_knowledge_fLane_edge>> as Feat_knowledge_fLane_edge
rectangle "==服务端接入泳道" <<Feat_degrade_nfLane_edge>> as Feat_degrade_nfLane_edge
@enduml
`;case`srcdir001F`:return`@startuml
title "SRC 目录视图 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-001 企业微信会话交互" <<Feat_answer_fUs_askI_ask_deliverUi_interaction>> as Feat_answer_fUs_askI_ask_deliverUi_interaction {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_ask_deliverUi_interaction>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_ask_deliverUi_interaction>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_ask_deliverUi_interaction>> dashed

  component "==SRC-001 微信客服回调入口\\n\\nsrc/routes/wechat-kf-routes.js — 接收企业微信加密回调并解密分发。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback
  component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator
  component "==SRC-003 知识应答循环\\n\\nsrc/services/knowledge-answer-loop-service.js — 检索增强的应答循环。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop
  component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService
  component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy
  component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge
}
rectangle "UI-002 答复信息设计" <<Feat_answer_fUs_askI_ask_deliverUi_information>> as Feat_answer_fUs_askI_ask_deliverUi_information {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_ask_deliverUi_information>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_ask_deliverUi_information>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_ask_deliverUi_information>> dashed

  component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store>> as Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store
}

Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_wechatCallback .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator : <color:#15803d>分发归一化消息
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop : <color:#15803d>请求应答
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy : <color:#15803d>校验置信度
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerLoop .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge : <color:#15803d>检索候选知识
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService : <color:#15803d>低置信度时转人工
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store : <color:#15803d>持久化工单
@enduml
`;case`srcdir001NF`:return`@startuml
title "SRC 目录视图 · Feature-001-NF · 空库与探测"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_operatorUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-101 控制台状态提示" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> dashed

  component "==SRC-101 集成状态路由\\n\\nsrc/routes/integration-routes.js — 功能概览与集成状态查询。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes
  component "==SRC-103 知识告警\\n\\nsrc/services/knowledge-alert-service.js — 暴露知识新鲜度与空库问题。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert
  component "==SRC-104 RAGFlow 生命周期探针\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 校验 RAGFlow 数据集状态与可用性。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe
  component "==SRC-105 运营人员控制台\\n\\nsrc/ui/operator.html — 运营人员单页控制台。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_operatorUi>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_operatorUi
}

Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_knowledgeAlert : <color:#15803d>查询空库告警
Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_integrationRoutes .[#15803d,thickness=2].> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_statusSrc_ragflowProbe : <color:#15803d>探测数据集状态
@enduml
`;case`srcdir001NFnotice`:return`@startuml
title "SRC 目录视图 · Feature-001-NF · 场景提示"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-102 极端场景提示" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> dashed

  component "==SRC-102 评测闸门\\n\\nsrc/services/evaluation-gate.js — 本地发布策略门禁，判定是否阻断应答。" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate
  component "==SRC-106 告警状态存储\\n\\nsrc/domain/store.js — 本链侧的告警与状态快照存储单元。" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert
}

Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_evaluationGate .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDownI_ll_notifyUi_noticeSrc_storeAlert : <color:#15803d>读取告警快照
@enduml
`;case`carrier001F`:return`@startuml
title "数据载体全景 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fCvt_normalize>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fIn_chatMessage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fOut_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==CVT-001 提问归一化转换器\\n\\nsrc/domain/normalize.js — 覆盖 微信原始报文→IN-001 与 POD-001→OUT-001 两组映射。" <<Feat_answer_fCvt_normalize>> as Feat_answer_fCvt_normalize
rectangle "==IN-001 客户提问入参\\n\\nsrc/domain/normalize.js — 企业微信回调解密后归一化的提问。" <<Feat_answer_fIn_chatMessage>> as Feat_answer_fIn_chatMessage
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store
rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer

Feat_answer_fIn_chatMessage .[#64748b,thickness=2].> Feat_answer_fBiz_query : <color:#64748b>转换为检索查询
Feat_answer_fBiz_query .[#3b82f6,thickness=2].> Feat_answer_fPod_ticket : <color:#3b82f6>低置信度落工单
Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
Feat_answer_fDao_store .[#3b82f6,thickness=2].> Feat_answer_fOut_answer : <color:#3b82f6>查询答复内容
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fIn_chatMessage : <color:#0ea5e9>负责 报文→IN-001 映射
Feat_answer_fCvt_normalize .[#0ea5e9,thickness=2].> Feat_answer_fOut_answer : <color:#0ea5e9>负责 POD-001→OUT-001 映射
@enduml
`;case`carrier001NF`:return`@startuml
title "数据载体全景 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfIn_probeQuery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfCvt_probe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfBiz_probeResult>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==IN-101 状态探测入参\\n\\nsrc/routes/integration-routes.js — 控制台发起的集成状态查询。" <<Feat_degrade_nfIn_probeQuery>> as Feat_degrade_nfIn_probeQuery
rectangle "==CVT-101 探测结果转换器\\n\\nsrc/services/knowledge-alert-service.js — 覆盖 BIZ-101→OUT-101 与 BIZ-101→POD-101 两组映射。" <<Feat_degrade_nfCvt_probe>> as Feat_degrade_nfCvt_probe
rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status
database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert

Feat_degrade_nfIn_probeQuery .[#64748b,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#64748b>转换为探测结果
Feat_degrade_nfBiz_probeResult .[#64748b,thickness=2].> Feat_degrade_nfPod_alert : <color:#64748b>异常转告警实体
Feat_degrade_nfBiz_probeResult .[#3b82f6,thickness=2].> Feat_degrade_nfOut_status : <color:#3b82f6>渲染状态载荷
Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#0ea5e9>负责 BIZ-101→OUT-101 映射
Feat_degrade_nfCvt_probe .[#0ea5e9,thickness=2].> Feat_degrade_nfPod_alert : <color:#0ea5e9>负责 BIZ-101→POD-101 映射
@enduml
`;case`erm001F`:return`@startuml
title "数据模型全景 · Feature-001-F 工单结构"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store

Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
@enduml
`;case`erm001NF`:return`@startuml
title "数据模型全景 · Feature-001-NF 告警结构"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert

Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
@enduml
`;case`stateMain`:return`@startuml
title "I 环 · 业务状态主干"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fSt_received>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_retrieving>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_answering>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_answered>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==已接收" <<Feat_answer_fSt_received>> as Feat_answer_fSt_received
rectangle "==检索中" <<Feat_answer_fSt_retrieving>> as Feat_answer_fSt_retrieving
rectangle "==应答中" <<Feat_answer_fSt_answering>> as Feat_answer_fSt_answering
rectangle "==已答复" <<Feat_answer_fSt_answered>> as Feat_answer_fSt_answered

Feat_answer_fSt_received .[#8D8D8D,thickness=2].> Feat_answer_fSt_retrieving : <color:#8D8D8D>发起检索
Feat_answer_fSt_retrieving .[#8D8D8D,thickness=2].> Feat_answer_fSt_answering : <color:#8D8D8D>置信度达标
Feat_answer_fSt_answering .[#8D8D8D,thickness=2].> Feat_answer_fSt_answered : <color:#8D8D8D>答复已下发
@enduml
`;case`stateBranchHuman`:return`@startuml
title "I 环 · 业务状态分支 · 转人工"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fSt_retrieving>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fSt_waitingHuman>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==检索中" <<Feat_answer_fSt_retrieving>> as Feat_answer_fSt_retrieving
rectangle "==待人工" <<Feat_answer_fSt_waitingHuman>> as Feat_answer_fSt_waitingHuman

Feat_answer_fSt_retrieving .[#8D8D8D,thickness=2].> Feat_answer_fSt_waitingHuman : <color:#8D8D8D>置信度不足
@enduml
`;case`index`:return`@startuml
title "美妆客服服务 · 全部 Feature 导航"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_f>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nf>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_f>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Feature-001-F 知识应答能力\\n\\n按业务能力切分。交付边界：客户在企业微信提问美妆问题，能得到基于知识库的专业答复。所属愿景：让美妆咨询有据可依。" <<Feat_answer_f>> as Feat_answer_f
rectangle "==Feature-001-NF 极端场景保障\\n\\n按极端场景切分。交付边界：知识库为空、RAGFlow 超时、LLM 不可用三类场景下，运营人员与客户都能及时察觉并知道下一步。所属愿景：让美妆咨询有据可依。" <<Feat_degrade_nf>> as Feat_degrade_nf
rectangle "==Feature-002-F 知识运营能力\\n\\n按业务能力切分。交付边界：运营人员能把素材变成可检索知识，并能发现知识陈旧。所属愿景：让美妆咨询有据可依。" <<Feat_knowledge_f>> as Feat_knowledge_f
@enduml
`;case`chain001F-us`:return`@startuml
title "US 视图 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_ask>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
  rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
}
@enduml
`;case`chain001NF-us`:return`@startuml
title "US 视图 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
  rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
  rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
}

Feat_degrade_nfUs_kbEmpty .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeout .[#0ea5e9,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#0ea5e9>统一由提示环节下发
@enduml
`;case`chain001F-f`:return`@startuml
title "能力清单 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_ask>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidence>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fF_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fF_retrieval>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-F 知识应答能力" <<Feat_answer_f>> as Feat_answer_f {
  skinparam RectangleBorderColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_f>> dashed

  rectangle "==US-001 客户提问获得专业答复\\n\\n作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask
  rectangle "==US-002 答不准时转人工而非硬答\\n\\n作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence
  rectangle "==F-001 应答编排能力\\n\\n决定自动应答还是转人工，串联检索与策略校验。" <<Feat_answer_fF_answer>> as Feat_answer_fF_answer
  rectangle "==F-002 知识检索能力\\n\\n从 RAGFlow 检索候选知识并按置信度排序。" <<Feat_answer_fF_retrieval>> as Feat_answer_fF_retrieval
}

Feat_answer_fUs_ask .[#0ea5e9,thickness=2].> Feat_answer_fF_answer : <color:#0ea5e9>要求
Feat_answer_fUs_lowConfidence .[#0ea5e9,thickness=2].> Feat_answer_fF_retrieval : <color:#0ea5e9>要求
@enduml
`;case`chain001NF-nf`:return`@startuml
title "场景清单 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUs_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_kbEmpty>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_ragTimeout>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfNf_llmDown>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-001-NF 极端场景保障" <<Feat_degrade_nf>> as Feat_degrade_nf {
  skinparam RectangleBorderColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nf>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nf>> dashed

  rectangle "==US-101 知识库为空时运营人员能看见\\n\\n作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为 0 条。" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty
  rectangle "==US-102 RAGFlow 超时时客户不被静默等待\\n\\n作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过 8 秒未返回时下发带说明的提示。" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout
  rectangle "==NF-101 知识库为零条时状态可见\\n\\n场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。" <<Feat_degrade_nfNf_kbEmpty>> as Feat_degrade_nfNf_kbEmpty
  rectangle "==US-103 LLM 不可用时转人工而非静默失败\\n\\n作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown
  rectangle "==NF-102 RAGFlow 超 8 秒时客户可感知\\n\\n场景：RAGFlow 响应超时。表现：超过 8 秒下发带说明的提示，客服不必反复刷新。角色：客户。" <<Feat_degrade_nfNf_ragTimeout>> as Feat_degrade_nfNf_ragTimeout
  rectangle "==NF-103 LLM 不可用时自动转人工\\n\\n场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。" <<Feat_degrade_nfNf_llmDown>> as Feat_degrade_nfNf_llmDown
}

Feat_degrade_nfUs_kbEmpty .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeout .[#0ea5e9,thickness=2].> Feat_degrade_nfUs_llmDown : <color:#0ea5e9>统一由提示环节下发
Feat_degrade_nfUs_kbEmpty .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_kbEmpty : <color:#0ea5e9>要求
Feat_degrade_nfUs_ragTimeout .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_ragTimeout : <color:#0ea5e9>要求
Feat_degrade_nfUs_llmDown .[#0ea5e9,thickness=2].> Feat_degrade_nfNf_llmDown : <color:#0ea5e9>要求
@enduml
`;case`chain001F-i-goal`:return`@startuml
title "I 环 · 业务目标 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-101 业务目标\\n\\n客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。" <<Feat_answer_fI_goal>> as Feat_answer_fI_goal
@enduml
`;case`chain001F-i-step`:return`@startuml
title "I 环 · 业务步骤 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_askI_ask_normalize>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_retrieve>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_rank>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_verify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_compose>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_deliver>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_lowEscalate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_lowTicket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_lowNotify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-001 客户提问获得专业答复" <<Feat_answer_fUs_ask>> as Feat_answer_fUs_ask {
  skinparam RectangleBorderColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_ask>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_ask>> dashed

  rectangle "==I-001 归一化提问\\n\\n把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。" <<Feat_answer_fUs_askI_ask_normalize>> as Feat_answer_fUs_askI_ask_normalize
  rectangle "==I-002 检索候选知识\\n\\n按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。" <<Feat_answer_fUs_askI_ask_retrieve>> as Feat_answer_fUs_askI_ask_retrieve
  rectangle "==I-003 候选排序与择优\\n\\n按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。" <<Feat_answer_fUs_askI_ask_rank>> as Feat_answer_fUs_askI_ask_rank
  rectangle "==I-004 置信度校验\\n\\n用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。" <<Feat_answer_fUs_askI_ask_verify>> as Feat_answer_fUs_askI_ask_verify
  rectangle "==I-005 生成答复\\n\\n按候选知识组织答复正文，附来源条目，不加入未验证内容。" <<Feat_answer_fUs_askI_ask_compose>> as Feat_answer_fUs_askI_ask_compose
  rectangle "==I-006 下发答复\\n\\n把答复通过企业微信会话回传给客户，完成本次闭环。" <<Feat_answer_fUs_askI_ask_deliver>> as Feat_answer_fUs_askI_ask_deliver
}
rectangle "US-002 答不准时转人工而非硬答" <<Feat_answer_fUs_lowConfidence>> as Feat_answer_fUs_lowConfidence {
  skinparam RectangleBorderColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_lowConfidence>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_lowConfidence>> dashed

  rectangle "==I-011 判定转人工\\n\\n置信度低于阈值或无候选时，判定进入人工路径。" <<Feat_answer_fUs_lowConfidenceI_lowEscalate>> as Feat_answer_fUs_lowConfidenceI_lowEscalate
  rectangle "==I-012 创建人工工单\\n\\n把提问内容、候选摘要与置信度写入工单，供人工接手。" <<Feat_answer_fUs_lowConfidenceI_lowTicket>> as Feat_answer_fUs_lowConfidenceI_lowTicket
  rectangle "==I-013 告知客户等待\\n\\n在会话中告知客户已转人工并给出预计等待，不做内容性答复。" <<Feat_answer_fUs_lowConfidenceI_lowNotify>> as Feat_answer_fUs_lowConfidenceI_lowNotify
}
@enduml
`;case`chain001NF-i-goal`:return`@startuml
title "I 环 · 业务目标 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-141 业务目标\\n\\n三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。" <<Feat_degrade_nfI_goal>> as Feat_degrade_nfI_goal
@enduml
`;case`chain001NF-i-step`:return`@startuml
title "I 环 · 场景判定步骤 · Feature-001-NF"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_kb_count>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_kb_judge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_kb_render>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_to_timer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_to_check>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_to_notify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_ll_detect>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_ll_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_ll_notify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-101 知识库为空时运营人员能看见" <<Feat_degrade_nfUs_kbEmpty>> as Feat_degrade_nfUs_kbEmpty {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmpty>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmpty>> dashed

  rectangle "==I-111 读取条目数\\n\\n从文档登记簿读取当前知识条目数，不做过滤。" <<Feat_degrade_nfUs_kbEmptyI_kb_count>> as Feat_degrade_nfUs_kbEmptyI_kb_count
  rectangle "==I-112 判定零条场景\\n\\n条目数为 0 时判定为空库场景，标记需先补素材。" <<Feat_degrade_nfUs_kbEmptyI_kb_judge>> as Feat_degrade_nfUs_kbEmptyI_kb_judge
  rectangle "==I-113 渲染空库提示\\n\\n在控制台显式提示条目数为 0，不显示空白列表。" <<Feat_degrade_nfUs_kbEmptyI_kb_render>> as Feat_degrade_nfUs_kbEmptyI_kb_render
}
rectangle "US-102 RAGFlow 超时时客户不被静默等待" <<Feat_degrade_nfUs_ragTimeout>> as Feat_degrade_nfUs_ragTimeout {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_ragTimeout>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_ragTimeout>> dashed

  rectangle "==I-121 启动超时计时\\n\\n发起检索时同时启动 8 秒计时。" <<Feat_degrade_nfUs_ragTimeoutI_to_timer>> as Feat_degrade_nfUs_ragTimeoutI_to_timer
  rectangle "==I-122 判定超时\\n\\n计时到期仍未返回候选知识时判定超时场景。" <<Feat_degrade_nfUs_ragTimeoutI_to_check>> as Feat_degrade_nfUs_ragTimeoutI_to_check
  rectangle "==I-123 下发处理中提示\\n\\n在会话中告知系统仍在处理，不让客户反复刷新。" <<Feat_degrade_nfUs_ragTimeoutI_to_notify>> as Feat_degrade_nfUs_ragTimeoutI_to_notify
}
rectangle "US-103 LLM 不可用时转人工而非静默失败" <<Feat_degrade_nfUs_llmDown>> as Feat_degrade_nfUs_llmDown {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDown>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDown>> dashed

  rectangle "==I-131 判定调用结果\\n\\n识别模型服务调用失败或返回异常。" <<Feat_degrade_nfUs_llmDownI_ll_detect>> as Feat_degrade_nfUs_llmDownI_ll_detect
  rectangle "==I-132 生成人工工单\\n\\n把提问内容与失败原因写入工单。" <<Feat_degrade_nfUs_llmDownI_ll_ticket>> as Feat_degrade_nfUs_llmDownI_ll_ticket
  rectangle "==I-133 告知等待人工\\n\\n在会话中告知已转人工，不返回空白内容。" <<Feat_degrade_nfUs_llmDownI_ll_notify>> as Feat_degrade_nfUs_llmDownI_ll_notify
}

Feat_degrade_nfUs_kbEmptyI_kb_render .[#15803d,thickness=2].> Feat_degrade_nfUs_llmDownI_ll_notify : <color:#15803d>提交发布判定
Feat_degrade_nfUs_ragTimeout .[#0ea5e9,thickness=2].> Feat_degrade_nfUs_llmDownI_ll_notify : <color:#0ea5e9>统一由提示环节下发
@enduml
`;case`chain001F-ui`:return`@startuml
title "UI 环 · Feature-001-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_askI_ask_deliverUi_interaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_deliverUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-006 下发答复" <<Feat_answer_fUs_askI_ask_deliver>> as Feat_answer_fUs_askI_ask_deliver {
  skinparam RectangleBorderColor<<Feat_answer_fUs_askI_ask_deliver>> #3b82f6
  skinparam RectangleFontColor<<Feat_answer_fUs_askI_ask_deliver>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_answer_fUs_askI_ask_deliver>> dashed

  rectangle "==UI-001 企业微信会话交互\\n\\n客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。" <<Feat_answer_fUs_askI_ask_deliverUi_interaction>> as Feat_answer_fUs_askI_ask_deliverUi_interaction
  rectangle "==UI-002 答复信息设计\\n\\n展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。" <<Feat_answer_fUs_askI_ask_deliverUi_information>> as Feat_answer_fUs_askI_ask_deliverUi_information
}

Feat_answer_fUs_askI_ask_deliverUi_interaction .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_information : <color:#15803d>持久化工单
@enduml
`;case`chain001NF-ui`:return`@startuml
title "UI 环 · Feature-001-NF · 空库提示"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-113 渲染空库提示" <<Feat_degrade_nfUs_kbEmptyI_kb_render>> as Feat_degrade_nfUs_kbEmptyI_kb_render {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_kbEmptyI_kb_render>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_kbEmptyI_kb_render>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_kbEmptyI_kb_render>> dashed

  rectangle "==UI-101 控制台状态提示\\n\\n展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status
}
@enduml
`;case`chain001NF-uiNotice`:return`@startuml
title "UI 环 · Feature-001-NF · 场景提示"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-133 告知等待人工" <<Feat_degrade_nfUs_llmDownI_ll_notify>> as Feat_degrade_nfUs_llmDownI_ll_notify {
  skinparam RectangleBorderColor<<Feat_degrade_nfUs_llmDownI_ll_notify>> #3b82f6
  skinparam RectangleFontColor<<Feat_degrade_nfUs_llmDownI_ll_notify>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_degrade_nfUs_llmDownI_ll_notify>> dashed

  rectangle "==UI-102 极端场景提示\\n\\n会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。" <<Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice>> as Feat_degrade_nfUs_llmDownI_ll_notifyUi_notice
}
@enduml
`;case`chain002F-us`:return`@startuml
title "US 视图 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fUs_scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==US-201 素材入库后自动进入候选知识\\n\\n作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan
  rectangle "==US-202 候选知识经我决策后才对外可见\\n\\n作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern
  rectangle "==US-203 知识陈旧时我能收到提示\\n\\n作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert
}

Feat_knowledge_fUs_scan .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_govern : <color:#0ea5e9>提交候选进入治理
Feat_knowledge_fUs_govern .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_alert : <color:#0ea5e9>晋升后进入新鲜度巡检
@enduml
`;case`chain002F-f`:return`@startuml
title "能力清单 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fUs_scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fF_ingest>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fF_govern>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Feature-002-F 知识运营能力" <<Feat_knowledge_f>> as Feat_knowledge_f {
  skinparam RectangleBorderColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_f>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_f>> dashed

  rectangle "==US-201 素材入库后自动进入候选知识\\n\\n作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan
  rectangle "==US-202 候选知识经我决策后才对外可见\\n\\n作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern
  rectangle "==F-201 素材接入能力\\n\\n接收素材并登记文档标识，支持单条与批量。" <<Feat_knowledge_fF_ingest>> as Feat_knowledge_fF_ingest
  rectangle "==US-203 知识陈旧时我能收到提示\\n\\n作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert
  rectangle "==F-202 知识治理能力\\n\\n候选知识的扫描、决策、晋升与下线。" <<Feat_knowledge_fF_govern>> as Feat_knowledge_fF_govern
}

Feat_knowledge_fUs_scan .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_govern : <color:#0ea5e9>提交候选进入治理
Feat_knowledge_fUs_govern .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_alert : <color:#0ea5e9>晋升后进入新鲜度巡检
Feat_knowledge_fUs_scan .[#0ea5e9,thickness=2].> Feat_knowledge_fF_ingest : <color:#0ea5e9>要求
Feat_knowledge_fUs_govern .[#0ea5e9,thickness=2].> Feat_knowledge_fF_govern : <color:#0ea5e9>要求
Feat_knowledge_fUs_alert .[#0ea5e9,thickness=2].> Feat_knowledge_fF_govern : <color:#0ea5e9>要求
@enduml
`;case`chain002F-i-goal`:return`@startuml
title "I 环 · 业务目标 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fI_goal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-201 业务目标\\n\\n素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。" <<Feat_knowledge_fI_goal>> as Feat_knowledge_fI_goal
@enduml
`;case`chain002F-i-step`:return`@startuml
title "I 环 · 业务步骤 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fUs_scanI_scan_register>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_scan_extract>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_scanI_scan_submit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_gov_review>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_gov_decide>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_governI_gov_promote>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_alert_probe>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_alert_judge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_alert_report>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "US-201 素材入库后自动进入候选知识" <<Feat_knowledge_fUs_scan>> as Feat_knowledge_fUs_scan {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_scan>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_scan>> dashed

  rectangle "==I-211 登记素材\\n\\n把上传的素材登记到文档簿，生成文档标识。" <<Feat_knowledge_fUs_scanI_scan_register>> as Feat_knowledge_fUs_scanI_scan_register
  rectangle "==I-212 抽取候选知识\\n\\n从素材正文中抽取可独立回答问题的候选条目。" <<Feat_knowledge_fUs_scanI_scan_extract>> as Feat_knowledge_fUs_scanI_scan_extract
  rectangle "==I-213 提交候选\\n\\n把候选条目提交给治理环节，等待决策。" <<Feat_knowledge_fUs_scanI_scan_submit>> as Feat_knowledge_fUs_scanI_scan_submit
}
rectangle "US-202 候选知识经我决策后才对外可见" <<Feat_knowledge_fUs_govern>> as Feat_knowledge_fUs_govern {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_govern>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_govern>> dashed

  rectangle "==I-221 人工审阅候选\\n\\n展示候选条目供运营人员逐条审阅。" <<Feat_knowledge_fUs_governI_gov_review>> as Feat_knowledge_fUs_governI_gov_review
  rectangle "==I-222 记录决策\\n\\n记录批准或驳回，驳回需填写理由。" <<Feat_knowledge_fUs_governI_gov_decide>> as Feat_knowledge_fUs_governI_gov_decide
  rectangle "==I-223 晋升知识\\n\\n批准的候选进入知识库生命周期，进入可检索状态。" <<Feat_knowledge_fUs_governI_gov_promote>> as Feat_knowledge_fUs_governI_gov_promote
}
rectangle "US-203 知识陈旧时我能收到提示" <<Feat_knowledge_fUs_alert>> as Feat_knowledge_fUs_alert {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alert>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alert>> dashed

  rectangle "==I-231 巡检数据集状态\\n\\n定期探测知识库数据集的可用性与新鲜度。" <<Feat_knowledge_fUs_alertI_alert_probe>> as Feat_knowledge_fUs_alertI_alert_probe
  rectangle "==I-232 判定新鲜度异常\\n\\n按更新时间阈值判定是否属于陈旧或异常。" <<Feat_knowledge_fUs_alertI_alert_judge>> as Feat_knowledge_fUs_alertI_alert_judge
  rectangle "==I-233 上报告警\\n\\n把问题条目写入告警并在控制台列出。" <<Feat_knowledge_fUs_alertI_alert_report>> as Feat_knowledge_fUs_alertI_alert_report
}

Feat_knowledge_fUs_scanI_scan_submit .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_governI_gov_review : <color:#0ea5e9>提交候选进入治理
Feat_knowledge_fUs_governI_gov_promote .[#0ea5e9,thickness=2].> Feat_knowledge_fUs_alertI_alert_judge : <color:#0ea5e9>晋升后进入新鲜度巡检
@enduml
`;case`chain002F-ui`:return`@startuml
title "UI 环 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fUs_alertI_alert_reportUi_console>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fUs_alertI_alert_reportUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "I-233 上报告警" <<Feat_knowledge_fUs_alertI_alert_report>> as Feat_knowledge_fUs_alertI_alert_report {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_alert_report>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_alert_report>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_alert_report>> dashed

  rectangle "==UI-201 运营控制台\\n\\n运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。" <<Feat_knowledge_fUs_alertI_alert_reportUi_console>> as Feat_knowledge_fUs_alertI_alert_reportUi_console
  rectangle "==UI-202 知识运营信息设计\\n\\n字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。" <<Feat_knowledge_fUs_alertI_alert_reportUi_information>> as Feat_knowledge_fUs_alertI_alert_reportUi_information
}

Feat_knowledge_fUs_alertI_alert_reportUi_console .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_information : <color:#15803d>[...]
Feat_knowledge_fUs_alertI_alert_reportUi_information .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_console : <color:#15803d>触发扫描
@enduml
`;case`srcdir002F`:return`@startuml
title "SRC 目录视图 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "UI-202 知识运营信息设计" <<Feat_knowledge_fUs_alertI_alert_reportUi_information>> as Feat_knowledge_fUs_alertI_alert_reportUi_information {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_alert_reportUi_information>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_alert_reportUi_information>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_alert_reportUi_information>> dashed

  component "==SRC-202 知识库路由\\n\\nsrc/routes/knowledge-routes.js — 知识扫描、同步与生命周期接口。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes
  component "==SRC-208 知识同步\\n\\nsrc/services/knowledge-sync-service.js — 把已批准知识推送到 RAGFlow。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync
  component "==SRC-209 知识生命周期视图\\n\\nsrc/services/knowledge-lifecycle-service.js — 知识的晋升与下线。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle
  component "==SRC-205 文档登记簿\\n\\nsrc/services/knowledge-document-registry.js — 跟踪素材与文档标识。" <<Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry>> as Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry
}
rectangle "UI-201 运营控制台" <<Feat_knowledge_fUs_alertI_alert_reportUi_console>> as Feat_knowledge_fUs_alertI_alert_reportUi_console {
  skinparam RectangleBorderColor<<Feat_knowledge_fUs_alertI_alert_reportUi_console>> #3b82f6
  skinparam RectangleFontColor<<Feat_knowledge_fUs_alertI_alert_reportUi_console>> #3b82f6
  skinparam RectangleBorderStyle<<Feat_knowledge_fUs_alertI_alert_reportUi_console>> dashed

  component "==SRC-201 素材路由\\n\\nsrc/routes/material-routes.js — 美妆素材接入接口。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes
  component "==SRC-204 素材批处理\\n\\nsrc/services/material-batch-service.js — 批量素材接入。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch
  component "==SRC-206 知识扫描\\n\\nsrc/services/knowledge-scan-service.js — 发现候选知识。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan
  component "==SRC-203 素材服务\\n\\nsrc/services/material-service.js — 素材接入规则。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService
  component "==SRC-207 知识治理\\n\\nsrc/services/knowledge-governance-service.js — 发布决策与治理。" <<Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance>> as Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance
}

Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialRoutes .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService : <color:#15803d>接收素材
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialBatch .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService : <color:#15803d>批量接入
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance : <color:#15803d>提交候选
Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeRoutes .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_knowledgeScan : <color:#15803d>触发扫描
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_materialService .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry : <color:#15803d>登记文档
Feat_knowledge_fUs_alertI_alert_reportUi_consoleSrc_governance .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync : <color:#15803d>批准后推送
Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_knowledgeSync .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle : <color:#15803d>更新生命周期
Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_lifecycle .[#15803d,thickness=2].> Feat_knowledge_fUs_alertI_alert_reportUi_informationSrc_documentRegistry : <color:#15803d>晋升或下线
@enduml
`;case`carrier002F`:return`@startuml
title "数据载体全景 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fIn_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fCvt_material>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fBiz_candidate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_knowledge_fOut_knowledgeStatus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==IN-201 素材入参\\n\\nsrc/routes/material-routes.js — 上传素材的请求载荷。" <<Feat_knowledge_fIn_material>> as Feat_knowledge_fIn_material
rectangle "==CVT-201 素材转换器\\n\\nsrc/services/material-service.js — 覆盖 素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。" <<Feat_knowledge_fCvt_material>> as Feat_knowledge_fCvt_material
rectangle "==BIZ-201 候选知识对象\\n\\nsrc/services/knowledge-scan-service.js — 承载扫描出的候选条目与决策状态。" <<Feat_knowledge_fBiz_candidate>> as Feat_knowledge_fBiz_candidate
rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry
rectangle "==OUT-201 知识状态出参视图\\n\\nsrc/routes/knowledge-routes.js — 面向控制台的扫描与治理状态载荷。" <<Feat_knowledge_fOut_knowledgeStatus>> as Feat_knowledge_fOut_knowledgeStatus

Feat_knowledge_fIn_material .[#64748b,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#64748b>转换为候选对象
Feat_knowledge_fBiz_candidate .[#64748b,thickness=2].> Feat_knowledge_fPod_document : <color:#64748b>登记为文档实体
Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>写入文档标识
Feat_knowledge_fDao_registry .[#3b82f6,thickness=2].> Feat_knowledge_fOut_knowledgeStatus : <color:#3b82f6>查询状态
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fBiz_candidate : <color:#0ea5e9>负责 素材→BIZ-201 映射
Feat_knowledge_fCvt_material .[#0ea5e9,thickness=2].> Feat_knowledge_fPod_document : <color:#0ea5e9>负责 BIZ-201→POD-201 映射
@enduml
`;case`erm002F`:return`@startuml
title "数据模型全景 · Feature-002-F 文档结构"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fPod_document>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_knowledge_fDao_registry>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==POD-201 文档登记实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 documents 数组结构对应。" <<Feat_knowledge_fPod_document>> as Feat_knowledge_fPod_document
database "==DAO-201 文档登记访问\\n\\nsrc/domain/store.js — 素材与文档标识的读写边界。" <<Feat_knowledge_fDao_registry>> as Feat_knowledge_fDao_registry

Feat_knowledge_fPod_document .[#3b82f6,thickness=2].> Feat_knowledge_fDao_registry : <color:#3b82f6>写入文档标识
@enduml
`;case`api002F`:return`@startuml
title "API 清单 · Feature-002-F"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_knowledge_fLane_edge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==服务端接入泳道" <<Feat_knowledge_fLane_edge>> as Feat_knowledge_fLane_edge
@enduml
`;case`seq001F-answer`:return`@startuml
title "Feature-001-F 主干时序 · 客户提问到答复"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_edgeApi_chatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_coreStep_answerLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fLane_edgeApi_chatCallback>> as Feat_answer_fLane_edgeApi_chatCallback
rectangle "==I-201 应答编排（泳道引用）\\n\\n泳道中的编排环节，具体步骤见 US-001 容器下的 I-001~I-006。" <<Feat_answer_fLane_coreStep_answerLane>> as Feat_answer_fLane_coreStep_answerLane
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator
component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy
component "==SRC-005 RAGFlow 知识检索\\n\\nsrc/services/ragflow-knowledge-service.js — 检索与数据集访问。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_ragflowKnowledge
component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService

Feat_answer_fLane_clientActor_customer .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>企业微信提问
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator : <color:#8D8D8D>分发归一化消息
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>请求应答
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>检索候选知识
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>返回候选知识
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy : <color:#8D8D8D>校验置信度
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>达标放行
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>返回答复
@enduml
`;case`seq001F-branch-low-confidence-src`:return`@startuml
title "SRC · 分支时序 · Feature-001-F · 置信度不足转人工"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam component<<Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
component "==SRC-004 回复策略\\n\\nsrc/services/reply-policy-service.js — 置信度与风险阈值判定。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy
component "==SRC-002 应答编排器\\n\\nsrc/services/answer-orchestrator.js — 决定自动应答或转人工。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator
component "==SRC-006 转人工服务\\n\\nsrc/services/handoff-service.js — 创建并跟踪人工工单。" <<Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService>> as Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService
component "==SRC-007 本地存储\\n\\nsrc/domain/store.js — 以 JSON 文件承载工单与反馈状态。" <<Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store>> as Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store

Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_replyPolicy .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator : <color:#8D8D8D>置信度不足
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_answerOrchestrator .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService : <color:#15803d>转人工
Feat_answer_fUs_askI_ask_deliverUi_interactionSrc_handoffService .[#15803d,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_informationSrc_store : <color:#15803d>持久化工单
@enduml
`;case`dfd001F-answer`:return`@startuml
title "DFD 全景 · Feature-001-F 应答数据流"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_askI_ask_deliverUi_interaction>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fIn_chatMessage>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fBiz_query>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fPod_ticket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_answer_fDao_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fOut_answer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_deliverUi_information>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==UI-001 企业微信会话交互\\n\\n客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。" <<Feat_answer_fUs_askI_ask_deliverUi_interaction>> as Feat_answer_fUs_askI_ask_deliverUi_interaction
rectangle "==IN-001 客户提问入参\\n\\nsrc/domain/normalize.js — 企业微信回调解密后归一化的提问。" <<Feat_answer_fIn_chatMessage>> as Feat_answer_fIn_chatMessage
rectangle "==BIZ-001 检索查询对象\\n\\nsrc/services/knowledge-answer-loop-service.js — 承载检索意图与置信度计算。" <<Feat_answer_fBiz_query>> as Feat_answer_fBiz_query
rectangle "==POD-001 工单持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 tickets 数组结构对应。" <<Feat_answer_fPod_ticket>> as Feat_answer_fPod_ticket
database "==DAO-001 本地存储访问\\n\\nsrc/domain/store.js — 工单与反馈的读写边界。" <<Feat_answer_fDao_store>> as Feat_answer_fDao_store
rectangle "==OUT-001 答复出参视图\\n\\nsrc/routes/wechat-kf-routes.js — 面向企业微信会话的答复载荷。" <<Feat_answer_fOut_answer>> as Feat_answer_fOut_answer
rectangle "==UI-002 答复信息设计\\n\\n展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。" <<Feat_answer_fUs_askI_ask_deliverUi_information>> as Feat_answer_fUs_askI_ask_deliverUi_information

Feat_answer_fUs_askI_ask_deliverUi_interaction .[#3b82f6,thickness=2].> Feat_answer_fIn_chatMessage : <color:#3b82f6>提交提问
Feat_answer_fIn_chatMessage .[#64748b,thickness=2].> Feat_answer_fBiz_query : <color:#64748b>转换为检索查询
Feat_answer_fBiz_query .[#3b82f6,thickness=2].> Feat_answer_fPod_ticket : <color:#3b82f6>低置信度落工单
Feat_answer_fPod_ticket .[#3b82f6,thickness=2].> Feat_answer_fDao_store : <color:#3b82f6>写入工单
Feat_answer_fDao_store .[#3b82f6,thickness=2].> Feat_answer_fOut_answer : <color:#3b82f6>查询答复内容
Feat_answer_fOut_answer .[#3b82f6,thickness=2].> Feat_answer_fUs_askI_ask_deliverUi_information : <color:#3b82f6>渲染答复
@enduml
`;case`seq001NF-degrade`:return`@startuml
title "Feature-001-NF 主干时序 · 场景判定与提示"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edgeApi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreStep_probeLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_ll_notify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfLane_edgeApi_status>> as Feat_degrade_nfLane_edgeApi_status
rectangle "==I-151 场景判定（泳道引用）\\n\\n泳道中的判定环节，具体步骤见各 US 容器下的 I-11x~I-13x。" <<Feat_degrade_nfLane_coreStep_probeLane>> as Feat_degrade_nfLane_coreStep_probeLane
rectangle "==RAGFlow\\n\\n检索与知识库服务，超时或不可用即触发本链场景。" <<Feat_degrade_nfLane_extExt_ragflow>> as Feat_degrade_nfLane_extExt_ragflow
rectangle "==I-133 告知等待人工\\n\\n在会话中告知已转人工，不返回空白内容。" <<Feat_degrade_nfUs_llmDownI_ll_notify>> as Feat_degrade_nfUs_llmDownI_ll_notify

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_edgeApi_status : <color:#8D8D8D>查询集成状态
Feat_degrade_nfLane_edgeApi_status .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>发起探测
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_extExt_ragflow : <color:#8D8D8D>探测数据集可用性
Feat_degrade_nfLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>返回探测结论
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_ll_notify : <color:#8D8D8D>提交发布判定并下发提示
Feat_degrade_nfUs_llmDownI_ll_notify .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_operatorActor_ops : <color:#8D8D8D>告知客户
@enduml
`;case`dfd001NF-probe`:return`@startuml
title "DFD 全景 · Feature-001-NF 探测数据流"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfIn_probeQuery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfBiz_probeResult>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfOut_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfPod_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<Feat_degrade_nfDao_alert>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==IN-101 状态探测入参\\n\\nsrc/routes/integration-routes.js — 控制台发起的集成状态查询。" <<Feat_degrade_nfIn_probeQuery>> as Feat_degrade_nfIn_probeQuery
rectangle "==BIZ-101 探测结果对象\\n\\nsrc/services/ragflow-lifecycle-probe-service.js — 承载条目数、响应耗时与调用结果判定。" <<Feat_degrade_nfBiz_probeResult>> as Feat_degrade_nfBiz_probeResult
rectangle "==OUT-101 状态出参视图\\n\\nsrc/routes/integration-routes.js — 面向控制台的状态载荷。" <<Feat_degrade_nfOut_status>> as Feat_degrade_nfOut_status
rectangle "==UI-101 控制台状态提示\\n\\n展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。" <<Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status>> as Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status
rectangle "==POD-101 告警持久化实体\\n\\ndata/local-mvp-store.json — 与 store.json 中 alerts 数组结构对应。" <<Feat_degrade_nfPod_alert>> as Feat_degrade_nfPod_alert
database "==DAO-101 告警存储访问\\n\\nsrc/domain/store.js — 告警与状态快照的读写边界。" <<Feat_degrade_nfDao_alert>> as Feat_degrade_nfDao_alert

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfIn_probeQuery : <color:#8D8D8D>构造探测入参
Feat_degrade_nfIn_probeQuery .[#64748b,thickness=2].> Feat_degrade_nfBiz_probeResult : <color:#64748b>转换为探测结果
Feat_degrade_nfBiz_probeResult .[#3b82f6,thickness=2].> Feat_degrade_nfOut_status : <color:#3b82f6>渲染状态载荷
Feat_degrade_nfOut_status .[#3b82f6,thickness=2].> Feat_degrade_nfUs_kbEmptyI_kb_renderUi_status : <color:#3b82f6>显示条目数与异常提示
Feat_degrade_nfBiz_probeResult .[#64748b,thickness=2].> Feat_degrade_nfPod_alert : <color:#64748b>异常转告警实体
Feat_degrade_nfPod_alert .[#3b82f6,thickness=2].> Feat_degrade_nfDao_alert : <color:#3b82f6>写入告警
@enduml
`;case`seq001F-i-step-lanes`:return`@startuml
title "I 环 · 业务步骤泳道流程 · Feature-001-F"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_edgeApi_chatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_normalize>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_retrieve>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_rank>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_verify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_compose>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_askI_ask_deliver>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fLane_edgeApi_chatCallback>> as Feat_answer_fLane_edgeApi_chatCallback
rectangle "==I-001 归一化提问\\n\\n把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。" <<Feat_answer_fUs_askI_ask_normalize>> as Feat_answer_fUs_askI_ask_normalize
rectangle "==I-002 检索候选知识\\n\\n按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。" <<Feat_answer_fUs_askI_ask_retrieve>> as Feat_answer_fUs_askI_ask_retrieve
rectangle "==I-003 候选排序与择优\\n\\n按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。" <<Feat_answer_fUs_askI_ask_rank>> as Feat_answer_fUs_askI_ask_rank
rectangle "==I-004 置信度校验\\n\\n用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。" <<Feat_answer_fUs_askI_ask_verify>> as Feat_answer_fUs_askI_ask_verify
rectangle "==I-005 生成答复\\n\\n按候选知识组织答复正文，附来源条目，不加入未验证内容。" <<Feat_answer_fUs_askI_ask_compose>> as Feat_answer_fUs_askI_ask_compose
rectangle "==I-006 下发答复\\n\\n把答复通过企业微信会话回传给客户，完成本次闭环。" <<Feat_answer_fUs_askI_ask_deliver>> as Feat_answer_fUs_askI_ask_deliver
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow

Feat_answer_fLane_clientActor_customer .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>①提出问题
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_normalize : <color:#8D8D8D>②归一化提问
Feat_answer_fUs_askI_ask_normalize .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_retrieve : <color:#8D8D8D>③发起检索
Feat_answer_fUs_askI_ask_retrieve .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>④请求RAGFlow
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_retrieve : <color:#8D8D8D>⑤返回候选知识
Feat_answer_fUs_askI_ask_retrieve .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_rank : <color:#8D8D8D>⑥候选排序
Feat_answer_fUs_askI_ask_rank .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_verify : <color:#8D8D8D>⑦置信度校验
Feat_answer_fUs_askI_ask_verify .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_compose : <color:#8D8D8D>⑧生成答复
Feat_answer_fUs_askI_ask_compose .[#8D8D8D,thickness=2].> Feat_answer_fUs_askI_ask_deliver : <color:#8D8D8D>⑨下发答复
Feat_answer_fUs_askI_ask_deliver .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>⑩回复会话
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fLane_clientActor_customer : <color:#8D8D8D>⑪答复送达
@enduml
`;case`seq001F-branch-low-confidence`:return`@startuml
title "I 环 · 分支泳道流程 · Feature-001-F · 置信度不足"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Feat_answer_fUs_askI_ask_verify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_lowEscalate>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_lowTicket>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fUs_lowConfidenceI_lowNotify>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_edgeApi_chatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==I-004 置信度校验\\n\\n用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。" <<Feat_answer_fUs_askI_ask_verify>> as Feat_answer_fUs_askI_ask_verify
rectangle "==I-011 判定转人工\\n\\n置信度低于阈值或无候选时，判定进入人工路径。" <<Feat_answer_fUs_lowConfidenceI_lowEscalate>> as Feat_answer_fUs_lowConfidenceI_lowEscalate
rectangle "==I-012 创建人工工单\\n\\n把提问内容、候选摘要与置信度写入工单，供人工接手。" <<Feat_answer_fUs_lowConfidenceI_lowTicket>> as Feat_answer_fUs_lowConfidenceI_lowTicket
rectangle "==I-013 告知客户等待\\n\\n在会话中告知客户已转人工并给出预计等待，不做内容性答复。" <<Feat_answer_fUs_lowConfidenceI_lowNotify>> as Feat_answer_fUs_lowConfidenceI_lowNotify
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fLane_edgeApi_chatCallback>> as Feat_answer_fLane_edgeApi_chatCallback

Feat_answer_fUs_askI_ask_verify .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_lowEscalate : <color:#8D8D8D>置信度不足
Feat_answer_fUs_lowConfidenceI_lowEscalate .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_lowTicket : <color:#8D8D8D>创建工单
Feat_answer_fUs_lowConfidenceI_lowTicket .[#8D8D8D,thickness=2].> Feat_answer_fUs_lowConfidenceI_lowNotify : <color:#8D8D8D>告知等待
Feat_answer_fUs_lowConfidenceI_lowNotify .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>回复会话
@enduml
`;case`seq001NF-i-step-lanes`:return`@startuml
title "I 环 · 场景判定泳道流程 · Feature-001-NF"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edgeApi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreStep_probeLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_kbEmptyI_kb_judge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_ragTimeoutI_to_check>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfUs_llmDownI_ll_detect>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfLane_edgeApi_status>> as Feat_degrade_nfLane_edgeApi_status
rectangle "==I-151 场景判定（泳道引用）\\n\\n泳道中的判定环节，具体步骤见各 US 容器下的 I-11x~I-13x。" <<Feat_degrade_nfLane_coreStep_probeLane>> as Feat_degrade_nfLane_coreStep_probeLane
rectangle "==I-112 判定零条场景\\n\\n条目数为 0 时判定为空库场景，标记需先补素材。" <<Feat_degrade_nfUs_kbEmptyI_kb_judge>> as Feat_degrade_nfUs_kbEmptyI_kb_judge
rectangle "==I-122 判定超时\\n\\n计时到期仍未返回候选知识时判定超时场景。" <<Feat_degrade_nfUs_ragTimeoutI_to_check>> as Feat_degrade_nfUs_ragTimeoutI_to_check
rectangle "==I-131 判定调用结果\\n\\n识别模型服务调用失败或返回异常。" <<Feat_degrade_nfUs_llmDownI_ll_detect>> as Feat_degrade_nfUs_llmDownI_ll_detect

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_edgeApi_status : <color:#8D8D8D>①查询状态
Feat_degrade_nfLane_edgeApi_status .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>②发起探测
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_kbEmptyI_kb_judge : <color:#8D8D8D>③判定条目数
Feat_degrade_nfUs_kbEmptyI_kb_judge .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_ragTimeoutI_to_check : <color:#8D8D8D>④判定响应耗时
Feat_degrade_nfUs_ragTimeoutI_to_check .[#8D8D8D,thickness=2].> Feat_degrade_nfUs_llmDownI_ll_detect : <color:#8D8D8D>⑤判定模型可用性
Feat_degrade_nfUs_llmDownI_ll_detect .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_operatorActor_ops : <color:#8D8D8D>⑥下发提示或转人工
@enduml
`;case`seq001F-api-chat`:return`@startuml
title "API 泳道时序 · Feature-001-F 提交提问"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_answer_fLane_clientActor_customer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_edgeApi_chatCallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_coreStep_answerLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_answer_fLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==客户" <<Feat_answer_fLane_clientActor_customer>> as Feat_answer_fLane_clientActor_customer
rectangle "==API-001 POST /wechat/callback 微信客服回调\\n\\nsrc/routes/wechat-kf-routes.js:12 — 接收企业微信加密回调。" <<Feat_answer_fLane_edgeApi_chatCallback>> as Feat_answer_fLane_edgeApi_chatCallback
rectangle "==I-201 应答编排（泳道引用）\\n\\n泳道中的编排环节，具体步骤见 US-001 容器下的 I-001~I-006。" <<Feat_answer_fLane_coreStep_answerLane>> as Feat_answer_fLane_coreStep_answerLane
rectangle "==RAGFlow\\n\\n检索与知识库服务。" <<Feat_answer_fLane_extExt_ragflow>> as Feat_answer_fLane_extExt_ragflow

Feat_answer_fLane_clientActor_customer .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>POST /wechat/callback
Feat_answer_fLane_edgeApi_chatCallback .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>触发应答
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_extExt_ragflow : <color:#8D8D8D>检索知识
Feat_answer_fLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_answer_fLane_coreStep_answerLane : <color:#8D8D8D>返回候选知识
Feat_answer_fLane_coreStep_answerLane .[#8D8D8D,thickness=2].> Feat_answer_fLane_edgeApi_chatCallback : <color:#8D8D8D>返回答复
@enduml
`;case`seq001NF-api-status`:return`@startuml
title "API 泳道时序 · Feature-001-NF 查询集成状态"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Feat_degrade_nfLane_operatorActor_ops>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_edgeApi_status>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_coreStep_probeLane>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Feat_degrade_nfLane_extExt_ragflow>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==运营人员" <<Feat_degrade_nfLane_operatorActor_ops>> as Feat_degrade_nfLane_operatorActor_ops
rectangle "==API-101 GET /integration/status 集成状态\\n\\nsrc/routes/integration-routes.js:7 — 查询集成状态与知识条目数。" <<Feat_degrade_nfLane_edgeApi_status>> as Feat_degrade_nfLane_edgeApi_status
rectangle "==I-151 场景判定（泳道引用）\\n\\n泳道中的判定环节，具体步骤见各 US 容器下的 I-11x~I-13x。" <<Feat_degrade_nfLane_coreStep_probeLane>> as Feat_degrade_nfLane_coreStep_probeLane
rectangle "==RAGFlow\\n\\n检索与知识库服务，超时或不可用即触发本链场景。" <<Feat_degrade_nfLane_extExt_ragflow>> as Feat_degrade_nfLane_extExt_ragflow

Feat_degrade_nfLane_operatorActor_ops .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_edgeApi_status : <color:#8D8D8D>GET /integration/status
Feat_degrade_nfLane_edgeApi_status .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>发起探测
Feat_degrade_nfLane_coreStep_probeLane .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_extExt_ragflow : <color:#8D8D8D>探测数据集
Feat_degrade_nfLane_extExt_ragflow .[#8D8D8D,thickness=2].> Feat_degrade_nfLane_coreStep_probeLane : <color:#8D8D8D>返回结论
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};
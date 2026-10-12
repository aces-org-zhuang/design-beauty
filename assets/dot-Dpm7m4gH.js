var e=e=>{switch(e){case`dfd001F-src001-1`:return`digraph {
  likec4_viewId = "dfd001F-src001-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_001" [
    likec4_id = "feat_answer_f.us_ask.i_001.ui_001.src_001";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "in_chatmessage" [
    likec4_id = "feat_answer_f.in_chatMessage";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-001 客户提问入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "cvt_normalize" [
    likec4_id = "feat_answer_f.cvt_normalize";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-001 提问归一化转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN-001 与<BR/>POD-001→OUT-001 两组映射。</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "biz_query" [
    likec4_id = "feat_answer_f.biz_query";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_001" -> "in_chatmessage" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">解密产出 IN-001</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "in_chatmessage" -> "cvt_normalize" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">归一化</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "cvt_normalize" -> "biz_query" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">转为 BIZ-001</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001F-src002-1`:return`digraph {
  likec4_viewId = "dfd001F-src002-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_002" [
    likec4_id = "feat_answer_f.us_ask.i_001.ui_001.src_002";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js — 跨阶段编排：自<BR/>I-001<BR/>入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属<BR/>UI-001 入口分发。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_query" [
    likec4_id = "feat_answer_f.biz_query";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pod_ticket" [
    likec4_id = "feat_answer_f.pod_ticket";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_002" -> "biz_query" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">查询进入编排</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_002" -> "pod_ticket" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">低置信度落工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001F-src003-1`:return`digraph {
  likec4_viewId = "dfd001F-src003-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_003" [
    likec4_id = "feat_answer_f.us_ask.i_003.ui_003.src_003";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-003 知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 检索增强的应答循环。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_query" [
    likec4_id = "feat_answer_f.biz_query";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "out_answer" [
    likec4_id = "feat_answer_f.out_answer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-001 答复出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>面向企业微信会话的答复载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_003" -> "biz_query" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">候选进入应答循环</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_003" -> "out_answer" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">组装 OUT-001</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001F-src004-1`:return`digraph {
  likec4_viewId = "dfd001F-src004-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_004" [
    likec4_id = "feat_answer_f.us_ask.i_002.ui_002.src_004";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_query" [
    likec4_id = "feat_answer_f.biz_query";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pod_ticket" [
    likec4_id = "feat_answer_f.pod_ticket";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_004" -> "biz_query" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">查询置信度判定</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_004" -> "pod_ticket" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">不足时标记工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001F-src005-1`:return`digraph {
  likec4_viewId = "dfd001F-src005-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_005" [
    likec4_id = "feat_answer_f.us_ask.i_001.ui_001.src_005";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问，服务 I-001-2 检索步骤。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_query" [
    likec4_id = "feat_answer_f.biz_query";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ext_ragflow" [
    likec4_id = "feat_answer_f.lane_ext.ext_ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索与知识库服务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_005" -> "biz_query" [
    likec4_id = "step-01";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_005" -> "ext_ragflow" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">请求 RAGFlow</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_005" -> "ext_ragflow" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回候选</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`dfd001F-src006-1`:return`digraph {
  likec4_viewId = "dfd001F-src006-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_006" [
    likec4_id = "feat_answer_f.us_lowConfidence.i_012.ui_012.src_006";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "pod_ticket" [
    likec4_id = "feat_answer_f.pod_ticket";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "dao_store" [
    likec4_id = "feat_answer_f.dao_store";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-001 本地存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "src_006" -> "pod_ticket" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">工单数据</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_006" -> "dao_store" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">写入工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001F-src007-1`:return`digraph {
  likec4_viewId = "dfd001F-src007-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_007" [
    likec4_id = "feat_answer_f.us_ask.i_003.ui_003.src_007";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "pod_ticket" [
    likec4_id = "feat_answer_f.pod_ticket";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "dao_store" [
    likec4_id = "feat_answer_f.dao_store";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-001 本地存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "out_answer" [
    likec4_id = "feat_answer_f.out_answer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-001 答复出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>面向企业微信会话的答复载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_007" -> "pod_ticket" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取工单</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_007" -> "dao_store" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">落盘</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "dao_store" -> "out_answer" [
    likec4_id = "step-03";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读出答复内容</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001NF-src101-1`:return`digraph {
  likec4_viewId = "dfd001NF-src101-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_101" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_111.ui_111.src_101";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-101 集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>功能概览与集成状态查询。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "in_probequery" [
    likec4_id = "feat_degrade_nf.in_probeQuery";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-101 状态探测入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>控制台发起的集成状态查询。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "out_status" [
    likec4_id = "feat_degrade_nf.out_status";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-101 状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>面向控制台的状态载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_101" -> "in_probequery" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">入参进入</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_101" -> "out_status" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">产出 OUT-101</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001NF-src102-1`:return`digraph {
  likec4_viewId = "dfd001NF-src102-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_102" [
    likec4_id = "feat_degrade_nf.us_ragTimeout.i_122.ui_122.src_102";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_proberesult" [
    likec4_id = "feat_degrade_nf.biz_probeResult";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-101 探测结果对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 承载条目数、响应耗时与调用结果判定。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pod_alert" [
    likec4_id = "feat_degrade_nf.pod_alert";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-101 告警持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>alerts 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_102" -> "biz_proberesult" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">探测结论判定</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_102" -> "pod_alert" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">异常转告警</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001NF-src103-1`:return`digraph {
  likec4_viewId = "dfd001NF-src103-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_103" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_112.ui_112.src_103";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-103 知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js —<BR/>暴露知识新鲜度与空库问题。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_proberesult" [
    likec4_id = "feat_degrade_nf.biz_probeResult";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-101 探测结果对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 承载条目数、响应耗时与调用结果判定。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pod_alert" [
    likec4_id = "feat_degrade_nf.pod_alert";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-101 告警持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>alerts 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_103" -> "biz_proberesult" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">暴露空库</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_103" -> "pod_alert" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">写入告警</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001NF-src104-1`:return`digraph {
  likec4_viewId = "dfd001NF-src104-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_104" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_111.ui_111.src_104";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-104 RAGFlow 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 校验 RAGFlow 数据集状态与可用性。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_proberesult" [
    likec4_id = "feat_degrade_nf.biz_probeResult";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-101 探测结果对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 承载条目数、响应耗时与调用结果判定。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ext_ragflow" [
    likec4_id = "feat_answer_f.lane_ext.ext_ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索与知识库服务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_104" -> "ext_ragflow" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">探测数据集</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_104" -> "ext_ragflow" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回结论</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_104" -> "biz_proberesult" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">产出 BIZ-101</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001NF-src105-1`:return`digraph {
  likec4_viewId = "dfd001NF-src105-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_105" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_112.ui_112.src_105";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-105 运营人员控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "out_status" [
    likec4_id = "feat_degrade_nf.out_status";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-101 状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>面向控制台的状态载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ui_112_info_1" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_112.ui_112.ui_112_info_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-112-信息设计-001 空库提示信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "src_105" -> "out_status" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">状态载荷</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_105" -> "ui_112_info_1" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">呈现提示</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001NF-src106-1`:return`digraph {
  likec4_viewId = "dfd001NF-src106-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_106" [
    likec4_id = "feat_degrade_nf.us_llmDown.i_132.ui_132.src_106";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "pod_alert" [
    likec4_id = "feat_degrade_nf.pod_alert";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-101 告警持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>alerts 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "dao_alert" [
    likec4_id = "feat_degrade_nf.dao_alert";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-101 告警存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "src_106" -> "pod_alert" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">告警数据</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_106" -> "dao_alert" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">写入快照</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src201-1`:return`digraph {
  likec4_viewId = "dfd002F-src201-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_201" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.ui_211.src_201";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-201 素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 美妆素材接入接口。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "in_material" [
    likec4_id = "feat_knowledge_f.in_material";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-201 素材入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 上传素材的请求载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_operator" [
    likec4_id = "feat_knowledge_f.lane_ops.actor_operator";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">运营人员</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_201" -> "actor_operator" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">上传素材</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_201" -> "in_material" [
    likec4_id = "step-02";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">产出 IN-201</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src202-1`:return`digraph {
  likec4_viewId = "dfd002F-src202-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_202" [
    likec4_id = "feat_knowledge_f.us_govern.i_221.ui_221.src_202";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-202 知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>知识扫描、同步与生命周期接口。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "dao_registry" [
    likec4_id = "feat_knowledge_f.dao_registry";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-201 文档登记访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "out_knowledgestatus" [
    likec4_id = "feat_knowledge_f.out_knowledgeStatus";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-201 知识状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>面向控制台的扫描与治理状态载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_202" -> "dao_registry" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取登记</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_202" -> "out_knowledgestatus" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">产出 OUT-201</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src203-1`:return`digraph {
  likec4_viewId = "dfd002F-src203-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_203" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.ui_211.src_203";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-203 素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 素材接入规则。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "in_material" [
    likec4_id = "feat_knowledge_f.in_material";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-201 素材入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 上传素材的请求载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "cvt_material" [
    likec4_id = "feat_knowledge_f.cvt_material";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-201 素材转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 覆盖<BR/>素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "biz_candidate" [
    likec4_id = "feat_knowledge_f.biz_candidate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-201 候选知识对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>承载扫描出的候选条目与决策状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_203" -> "in_material" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">入参校验</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_203" -> "cvt_material" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">交给转换</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "cvt_material" -> "biz_candidate" [
    likec4_id = "step-03";
    style = "solid";
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">转为 BIZ-201</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src204-1`:return`digraph {
  likec4_viewId = "dfd002F-src204-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_204" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.ui_211.src_204";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-204 素材批处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-batch-service.js —<BR/>批量素材接入。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "actor_operator" [
    likec4_id = "feat_knowledge_f.lane_ops.actor_operator";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">运营人员</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_203" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.ui_211.src_203";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-203 素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 素材接入规则。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_204" -> "actor_operator" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">批量上传</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_204" -> "src_203" [
    likec4_id = "step-02";
    style = "solid";
    color = "#15803d";
    fontcolor = "#bbfcd3";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">逐条接入</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src205-1`:return`digraph {
  likec4_viewId = "dfd002F-src205-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_205" [
    likec4_id = "feat_knowledge_f.us_govern.i_221.ui_221.src_205";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-205 文档登记簿</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-document-registry.js —<BR/>跟踪素材与文档标识。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_candidate" [
    likec4_id = "feat_knowledge_f.biz_candidate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-201 候选知识对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>承载扫描出的候选条目与决策状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pod_document" [
    likec4_id = "feat_knowledge_f.pod_document";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-201 文档登记实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>documents 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "dao_registry" [
    likec4_id = "feat_knowledge_f.dao_registry";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-201 文档登记访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "src_205" -> "biz_candidate" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">登记文档标识</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_205" -> "pod_document" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">生成 POD-201</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "pod_document" -> "dao_registry" [
    likec4_id = "step-03";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">写入</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src206-1`:return`digraph {
  likec4_viewId = "dfd002F-src206-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_206" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.ui_211.src_206";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-206 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>发现候选知识。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ext_wiki" [
    likec4_id = "feat_knowledge_f.lane_ext.ext_wiki";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">生成的 wiki 候选来源。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "biz_candidate" [
    likec4_id = "feat_knowledge_f.biz_candidate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-201 候选知识对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>承载扫描出的候选条目与决策状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_206" -> "ext_wiki" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取 wiki 候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_206" -> "ext_wiki" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回候选</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_206" -> "biz_candidate" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">产出候选对象</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src207-1`:return`digraph {
  likec4_viewId = "dfd002F-src207-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_207" [
    likec4_id = "feat_knowledge_f.us_govern.i_221.ui_221.src_207";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-207 知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-governance-service.js<BR/>— 发布决策与治理。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "biz_candidate" [
    likec4_id = "feat_knowledge_f.biz_candidate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-201 候选知识对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>承载扫描出的候选条目与决策状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "pod_document" [
    likec4_id = "feat_knowledge_f.pod_document";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-201 文档登记实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>documents 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_207" -> "biz_candidate" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">候选进入治理</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_207" -> "pod_document" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">批准后登记</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd002F-src208-1`:return`digraph {
  likec4_viewId = "dfd002F-src208-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_208" [
    likec4_id = "feat_knowledge_f.us_alert.i_231.ui_231.src_208";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-208 知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-sync-service.js —<BR/>把已批准知识推送到 RAGFlow。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ext_ragflow2" [
    likec4_id = "feat_knowledge_f.lane_ext.ext_ragflow2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识库与检索服务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_208" -> "ext_ragflow2" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">推送已批准知识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_208" -> "ext_ragflow2" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">同步确认</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`dfd002F-src209-1`:return`digraph {
  likec4_viewId = "dfd002F-src209-1";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_209" [
    likec4_id = "feat_knowledge_f.us_alert.i_232.ui_232.src_209";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-209 知识生命周期视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-lifecycle-service.js —<BR/>知识的晋升与下线。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "pod_document" [
    likec4_id = "feat_knowledge_f.pod_document";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-201 文档登记实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>documents 数组结构对应。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "dao_registry" [
    likec4_id = "feat_knowledge_f.dao_registry";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-201 文档登记访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "src_209" -> "pod_document" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "pod_document" -> "dao_registry" [
    likec4_id = "step-02";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">更新登记</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq001F-i-001-lanes`:return`digraph {
  likec4_viewId = "seq001F-i-001-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "actor_customer" [
    likec4_id = "feat_answer_f.lane_client.actor_customer";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">客户</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_001" [
    likec4_id = "feat_answer_f.us_ask.i_001.ui_001.src_001";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "i_001_1" [
    likec4_id = "feat_answer_f.us_ask.i_001.i_001_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001-1 归一化提问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_001_2" [
    likec4_id = "feat_answer_f.us_ask.i_001.i_001_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001-2 检索候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_001_3" [
    likec4_id = "feat_answer_f.us_ask.i_001.i_001_3";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001-3 候选排序与择优</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_005" [
    likec4_id = "feat_answer_f.us_ask.i_001.ui_001.src_005";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问，服务 I-001-2 检索步骤。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ext_ragflow" [
    likec4_id = "feat_answer_f.lane_ext.ext_ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索与知识库服务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_customer" -> "src_001" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①提交提问</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_001" -> "i_001_1" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②解密归一化</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_001_1" -> "i_001_2" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③发起检索</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_001_2" -> "src_005" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">④请求RAGFlow</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_005" -> "ext_ragflow" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑤检索</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_005" -> "ext_ragflow" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑥返回候选</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "i_001_2" -> "i_001_3" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑦排序择优</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq001F-i-003-lanes`:return`digraph {
  likec4_viewId = "seq001F-i-003-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_002" [
    likec4_id = "feat_answer_f.us_ask.i_001.ui_001.src_002";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js — 跨阶段编排：自<BR/>I-001<BR/>入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属<BR/>UI-001 入口分发。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "i_003_1" [
    likec4_id = "feat_answer_f.us_ask.i_003.i_003_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003-1 生成答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_003_2" [
    likec4_id = "feat_answer_f.us_ask.i_003.i_003_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003-2 下发答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_customer" [
    likec4_id = "feat_answer_f.lane_client.actor_customer";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">客户</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_002" -> "i_003_1" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①校验通过</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_003_1" -> "i_003_2" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②答复就绪</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_003_2" -> "actor_customer" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③答复送达</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq001F-i-012-lanes`:return`digraph {
  likec4_viewId = "seq001F-i-012-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "src_002" [
    likec4_id = "feat_answer_f.us_ask.i_001.ui_001.src_002";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js — 跨阶段编排：自<BR/>I-001<BR/>入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属<BR/>UI-001 入口分发。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "i_012_1" [
    likec4_id = "feat_answer_f.us_lowConfidence.i_012.i_012_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-012-1 创建人工工单</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_012_2" [
    likec4_id = "feat_answer_f.us_lowConfidence.i_012.i_012_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-012-2 告知客户等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_customer" [
    likec4_id = "feat_answer_f.lane_client.actor_customer";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">客户</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_002" -> "i_012_1" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①判定转人工</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_012_1" -> "i_012_2" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②工单创建</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_012_2" -> "actor_customer" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③告知等待</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq001NF-i-111-lanes`:return`digraph {
  likec4_viewId = "seq001NF-i-111-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "actor_ops" [
    likec4_id = "feat_degrade_nf.lane_operator.actor_ops";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">运营人员</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_111_1" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_111.i_111_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111-1 读取条目数</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_111_2" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_111.i_111_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111-2 判定零条场景</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_ops" -> "i_111_1" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①发起查询</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_111_1" -> "i_111_2" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②判定零条场景</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq001NF-i-121-lanes`:return`digraph {
  likec4_viewId = "seq001NF-i-121-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "i_121_1" [
    likec4_id = "feat_degrade_nf.us_ragTimeout.i_121.i_121_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-121-1 启动超时计时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">发起检索时同时启动 8 秒计时。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_121_2" [
    likec4_id = "feat_degrade_nf.us_ragTimeout.i_121.i_121_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-121-2 判定超时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ext_ragflow" [
    likec4_id = "feat_answer_f.lane_ext.ext_ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索与知识库服务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_121_1" -> "ext_ragflow" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①等待 RAGFlow 响应</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_121_2" -> "ext_ragflow" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②到期判定</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`seq001NF-i-132-lanes`:return`digraph {
  likec4_viewId = "seq001NF-i-132-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "i_132_1" [
    likec4_id = "feat_degrade_nf.us_llmDown.i_132.i_132_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-132-1 生成人工工单</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把提问内容与失败原因写入工单。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_132_2" [
    likec4_id = "feat_degrade_nf.us_llmDown.i_132.i_132_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-132-2 告知等待人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知已转人工，不返回空白内容。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_106" [
    likec4_id = "feat_degrade_nf.us_llmDown.i_132.ui_132.src_106";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "i_132_1" -> "i_132_2" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①工单创建完成</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_132_2" -> "src_106" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②告警落库</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq002F-i-211-lanes`:return`digraph {
  likec4_viewId = "seq002F-i-211-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "actor_operator" [
    likec4_id = "feat_knowledge_f.lane_ops.actor_operator";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">运营人员</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_201" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.ui_211.src_201";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-201 素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 美妆素材接入接口。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "i_211_1" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.i_211_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211-1 登记素材</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把上传的素材登记到文档簿，生成文档标识。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_211_2" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.i_211_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211-2 抽取候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从素材正文中抽取可独立回答问题的候选条目。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_211_3" [
    likec4_id = "feat_knowledge_f.us_scan.i_211.i_211_3";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211-3 提交候选</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把候选条目提交给治理环节，等待决策。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_operator" -> "src_201" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①上传素材</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_201" -> "i_211_1" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②登记素材</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_211_1" -> "i_211_2" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③抽取候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_211_2" -> "i_211_3" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">④提交候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq002F-i-221-lanes`:return`digraph {
  likec4_viewId = "seq002F-i-221-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "actor_operator" [
    likec4_id = "feat_knowledge_f.lane_ops.actor_operator";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">运营人员</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_221_1" [
    likec4_id = "feat_knowledge_f.us_govern.i_221.i_221_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221-1 人工审阅候选</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示候选条目供运营人员逐条审阅。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_221_2" [
    likec4_id = "feat_knowledge_f.us_govern.i_221.i_221_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221-2 记录决策</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">记录批准或驳回，驳回需填写理由。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_221_3" [
    likec4_id = "feat_knowledge_f.us_govern.i_221.i_221_3";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221-3 晋升知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">批准的候选进入知识库生命周期，进入可检索状态。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_operator" -> "i_221_1" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①逐条审阅</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_221_1" -> "i_221_2" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②记录决策</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_221_2" -> "i_221_3" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③批准晋升或驳回</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq002F-i-231-lanes`:return`digraph {
  likec4_viewId = "seq002F-i-231-lanes";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "i_231_1" [
    likec4_id = "feat_knowledge_f.us_alert.i_231.i_231_1";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-231-1 巡检数据集状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">定期探测知识库数据集的可用性与新鲜度。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_231_2" [
    likec4_id = "feat_knowledge_f.us_alert.i_231.i_231_2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-231-2 判定新鲜度异常</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按更新时间阈值判定是否属于陈旧或异常。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ext_ragflow2" [
    likec4_id = "feat_knowledge_f.lane_ext.ext_ragflow2";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识库与检索服务。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_231_1" -> "ext_ragflow2" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①巡检数据集</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_231_2" -> "ext_ragflow2" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②新鲜度判定</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    feat_answer_f [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature-001-F 知识应答能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按业务能力切分。交付边界：客户在企业微信提问美妆问题，能得到基于知识库的专业答复。所属愿景：让美妆咨询有据可依。</FONT></TD></TR></TABLE>>,
        likec4_id=feat_answer_f,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    feat_degrade_nf [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature-001-NF 极端场景保障</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按极端场景切分。交付边界：知识库为空、RAGFlow 超时、LLM<BR/>不可用三类场景下，运营人员与客户都能及时察觉并知道下一步。所属愿景：让美妆咨询有据可依。</FONT></TD></TR></TABLE>>,
        likec4_id=feat_degrade_nf,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    feat_answer_f -> feat_degrade_nf [style=invis];
    feat_knowledge_f [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature-002-F 知识运营能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按业务能力切分。交付边界：运营人员能把素材变成可检索知识，并能发现知识陈旧。所属愿景：让美妆咨询有据可依。</FONT></TD></TR></TABLE>>,
        likec4_id=feat_knowledge_f,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    feat_degrade_nf -> feat_knowledge_f [style=invis];
}
`;case`pano-us`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-us",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_answer_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-F 知识应答能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_answer_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_ask [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_lowconfidence [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_feat_degrade_nf {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-NF 极端场景保障</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_degrade_nf,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_kbempty [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_ragtimeout [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_llmdown [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_feat_knowledge_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-002-F 知识运营能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_knowledge_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_scan [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_govern [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-202 候选知识经我决策后才对外可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_alert [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-203 知识陈旧时我能收到提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    us_ask -> us_lowconfidence [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1f297z7",
        minlen=0,
        style=solid];
    us_kbempty -> us_ragtimeout [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id="14uk9",
        minlen=1,
        style=solid];
    us_scan -> us_govern [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ciqzea",
        style=solid];
    us_lowconfidence -> us_ask [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id="18xpcqr",
        minlen=0,
        style=solid];
    us_ragtimeout -> us_llmdown [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id="19s6iii",
        minlen=1,
        style=solid];
    us_govern -> us_scan [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id="1s5lodu",
        style=solid];
    us_govern -> us_alert [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1kyd0mb",
        style=solid];
    us_alert -> us_govern [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id=jitslf,
        style=solid];
}
`;case`pano-f`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-f",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    f_answer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-001 应答编排能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.f_answer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_retrieval [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-002 知识检索能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.f_retrieval",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_answer -> f_retrieval [style=invis];
    f_ingest [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-201 素材接入能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收素材并登记文档标识，支持单条与批量。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.f_ingest",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_retrieval -> f_ingest [style=invis];
    f_govern [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-202 知识治理能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">候选知识的扫描、决策、晋升与下线。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.f_govern",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_ingest -> f_govern [style=invis];
}
`;case`pano-nf`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-nf",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    nf_kbempty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-101 知识库为零条时状态可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.nf_kbEmpty",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    nf_ragtimeout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-102 RAGFlow 超 8 秒时客户可感知</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8<BR/>秒下发带说明的提示，客服不必反复刷新。角色：客户。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.nf_ragTimeout",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    nf_kbempty -> nf_ragtimeout [style=invis];
    nf_llmdown [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-103 LLM 不可用时自动转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.nf_llmDown",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    nf_ragtimeout -> nf_llmdown [style=invis];
}
`;case`pano-i`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-i",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_us_ask {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-001 客户提问获得专业答复</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        i_001 [group="feat_answer_f.us_ask",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 阶段性目标 · 取得可靠候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把客户提问变成可用的候选知识条目。这一阶段做完，就掌握了后续判定所需的事实基础。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_001",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_002 [group="feat_answer_f.us_ask",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-002 阶段性目标 · 判定可否自动答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">用置信度与风险阈值判断这条候选知识是否足以自动答复。这一阶段决定走自动路径还是转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_002",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_003 [group="feat_answer_f.us_ask",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 阶段性目标 · 生成并下发答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把通过校验的候选知识组织成答复并送达客户。做到这一步本 US 就完成了。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_003",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_us_kbempty {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-101 知识库为空时运营人员能看见</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        i_111 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111 阶段性目标 · 读出条目数并判定空库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">拿到当前知识条目数并判定是否为空库。做到这一步运营人员就知道该补素材还是该查集成。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_112 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-112 阶段性目标 · 把空库显式呈现出来</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在控制台显式提示条目数为 0，不显示空白列表。做到这一步运营人员就知道要补素材。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_us_scan {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-201 素材入库后自动进入候选知识</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        i_211 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211 阶段性目标 · 素材入库并产出候选</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把上传的素材变成可审阅的候选条目。做到这一步运营人员就有东西可审了。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_us_govern {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-202 候选知识经我决策后才对外可见</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        i_221 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221 阶段性目标 · 审阅决策并晋升</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">让运营人员逐条审阅候选并决定去留，批准的进入可检索状态。做到这一步 US-202 闭环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_us_lowconfidence {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-002 答不准时转人工而非硬答</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        i_011 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-011 阶段性目标 · 判定进入人工路径</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">确认这条提问不能自动答复，转入人工。做完后客户不再等待系统硬答。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_012 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-012 阶段性目标 · 生成工单并告知等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">创建人工工单承接这条提问，并让客户知道等待。做完后 US-002 完成。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_us_ragtimeout {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-102 RAGFLOW 超时时客户不被静默等待</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        i_121 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-121 阶段性目标 · 计时并判定超时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">给检索装上 8 秒上限并判定是否超时。做到这一步就知道该不该给客户提示。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_122 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-122 阶段性目标 · 告知客户系统在处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知系统仍在处理，不让客户反复刷新。做到这一步 US-102 闭环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_us_alert {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-203 知识陈旧时我能收到提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        i_231 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-231 阶段性目标 · 巡检并判定新鲜度</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">定期探测数据集并按更新时间阈值判定是否陈旧。做到这一步就知道哪些条目需要修。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_231",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_232 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-232 阶段性目标 · 上报告警并呈现</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把问题条目写入告警并在控制台列出。做到这一步运营人员能在客户问到之前修好。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_232",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_us_llmdown {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-103 LLM 不可用时转人工而非静默失败</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        i_131 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-131 阶段性目标 · 识别模型不可用并转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">识别模型调用失败并判定转人工。做到这一步客户不会再收到空白回复。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_132 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-132 阶段性目标 · 建单并告知等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">生成人工工单并告知客户等待，不返回空白内容。做到这一步 US-103 闭环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    i_001 -> i_002 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">取得候选后进入判定</FONT></TD></TR></TABLE>>,
        likec4_id=gvztgp,
        style=solid,
        weight=3];
    i_001 -> i_012 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度时转人工</FONT></TD></TR></TABLE>>,
        likec4_id=ckqtr5,
        style=solid];
    i_001 -> i_003 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id=gvztgo,
        style=solid];
    i_111 -> i_112 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定空库后显式呈现</FONT></TD></TR></TABLE>>,
        likec4_id="3htmrt",
        minlen=0,
        style=solid,
        weight=3];
    i_211 -> i_221 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选进入治理</FONT></TD></TR></TABLE>>,
        likec4_id="15emvv5",
        style=solid];
    i_002 -> i_011 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验不通过转人工</FONT></TD></TR></TABLE>>,
        likec4_id="185j41t",
        style=solid];
    i_002 -> i_003 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验通过后生成答复</FONT></TD></TR></TABLE>>,
        likec4_id="1qs8yx7",
        style=solid];
    i_112 -> i_122 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id=xgt7iy,
        style=solid];
    i_221 -> i_211 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id=i6ntgx,
        style=solid];
    i_221 -> i_231 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升后进入新鲜度巡检</FONT></TD></TR></TABLE>>,
        likec4_id="1rvezlu",
        style=solid];
    i_011 -> i_012 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定后建单并告知</FONT></TD></TR></TABLE>>,
        likec4_id="1kmtbu1",
        minlen=0,
        style=solid,
        weight=3];
    i_121 -> i_122 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定超时后告知客户</FONT></TD></TR></TABLE>>,
        likec4_id="19t1y4p",
        minlen=0,
        style=solid,
        weight=3];
    i_012 -> i_003 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id="1y6loeb",
        style=solid];
    i_122 -> i_132 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id=eaxuyj,
        style=solid];
    i_231 -> i_232 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定异常后上报告警</FONT></TD></TR></TABLE>>,
        likec4_id="4uosp",
        minlen=0,
        style=solid,
        weight=3];
    i_003 -> i_001 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id=el2uy0,
        style=solid];
    i_003 -> i_002 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>,
        likec4_id=el2uy3,
        style=solid];
    i_232 -> i_221 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id=oveosh,
        style=solid];
    i_131 -> i_132 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定不可用后建单告知</FONT></TD></TR></TABLE>>,
        likec4_id="15qh221",
        minlen=0,
        style=solid,
        weight=3];
}
`;case`pano-i-state`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-i-state",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_001 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-001 阶段性目标 · 取得可靠候选知识</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_001",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_001_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-001 待检索</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_001_normalizing [height=2.5,
            label=<<FONT POINT-SIZE="20">S-002 归一化中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_normalizing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_001_searching [height=2.5,
            label=<<FONT POINT-SIZE="20">S-003 检索中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_searching",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_001_got [height=2.5,
            label=<<FONT POINT-SIZE="20">S-004 已取得候选</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_got",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_002 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-002 阶段性目标 · 判定可否自动答复</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_002",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_002_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-005 待校验</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_002_checking [height=2.5,
            label=<<FONT POINT-SIZE="20">S-006 校验中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_checking",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_002_passed [height=2.5,
            label=<<FONT POINT-SIZE="20">S-007 校验通过</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_passed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_002_failed [height=2.5,
            label=<<FONT POINT-SIZE="20">S-008 置信度不足</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_failed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_003 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-003 阶段性目标 · 生成并下发答复</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_003",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_003_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-009 待生成</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_003_composing [height=2.5,
            label=<<FONT POINT-SIZE="20">S-010 生成中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_composing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_003_delivering [height=2.5,
            label=<<FONT POINT-SIZE="20">S-011 下发中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_delivering",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_003_answered [height=2.5,
            label=<<FONT POINT-SIZE="20">S-012 已答复</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_answered",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_011 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-011 阶段性目标 · 判定进入人工路径</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_011",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_011_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-101 待判定</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.st_011_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_011_judging [height=2.5,
            label=<<FONT POINT-SIZE="20">S-102 判定中</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.st_011_judging",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_011_escalated [height=2.5,
            label=<<FONT POINT-SIZE="20">S-103 已转人工</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.st_011_escalated",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_012 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-012 阶段性目标 · 生成工单并告知等待</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_012",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_012_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-104 待建单</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_012_ticketing [height=2.5,
            label=<<FONT POINT-SIZE="20">S-105 建单中</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_ticketing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_012_notified [height=2.5,
            label=<<FONT POINT-SIZE="20">S-106 已告知等待</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_notified",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_012_answered [height=2.5,
            label=<<FONT POINT-SIZE="20">S-107 人工已接管</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_answered",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_111 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-111 阶段性目标 · 读出条目数并判定空库</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_111_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-111 待读取</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_111_counting [height=2.5,
            label=<<FONT POINT-SIZE="20">S-112 读取中</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_counting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_111_empty [height=2.5,
            label=<<FONT POINT-SIZE="20">S-113 判定为空库</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_empty",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_111_ready [height=2.5,
            label=<<FONT POINT-SIZE="20">S-114 条目正常</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_ready",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_112 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-112 阶段性目标 · 把空库显式呈现出来</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_112_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-115 待呈现</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.st_112_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_112_rendering [height=2.5,
            label=<<FONT POINT-SIZE="20">S-116 渲染中</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.st_112_rendering",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_112_shown [height=2.5,
            label=<<FONT POINT-SIZE="20">S-117 已显式提示</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.st_112_shown",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_121 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-121 阶段性目标 · 计时并判定超时</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_121_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-121 待计时</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_121_waiting [height=2.5,
            label=<<FONT POINT-SIZE="20">S-122 等待响应</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_waiting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_121_timedout [height=2.5,
            label=<<FONT POINT-SIZE="20">S-123 判定超时</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_timedOut",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_121_returned [height=2.5,
            label=<<FONT POINT-SIZE="20">S-124 按时返回</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_returned",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_122 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-122 阶段性目标 · 告知客户系统在处理</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_122_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-125 待提示</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.st_122_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_122_notifying [height=2.5,
            label=<<FONT POINT-SIZE="20">S-126 提示中</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.st_122_notifying",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_122_notified [height=2.5,
            label=<<FONT POINT-SIZE="20">S-127 已告知处理中</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.st_122_notified",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_131 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-131 阶段性目标 · 识别模型不可用并转人工</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_131",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_131_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-131 待调用</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_131_calling [height=2.5,
            label=<<FONT POINT-SIZE="20">S-132 调用中</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_calling",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_131_failed [height=2.5,
            label=<<FONT POINT-SIZE="20">S-133 模型不可用</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_failed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_131_ok [height=2.5,
            label=<<FONT POINT-SIZE="20">S-134 调用成功</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_ok",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_132 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-132 阶段性目标 · 建单并告知等待</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_132",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_132_pending [height=2.5,
            label=<<FONT POINT-SIZE="20">S-135 待建单</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_132_ticketing [height=2.5,
            label=<<FONT POINT-SIZE="20">S-136 建单中</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_ticketing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_132_notified [height=2.5,
            label=<<FONT POINT-SIZE="20">S-137 已告知等待</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_notified",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_132_handedoff [height=2.5,
            label=<<FONT POINT-SIZE="20">S-138 人工已接管</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_handedOff",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_211 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-211 阶段性目标 · 素材入库并产出候选</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan.i_211",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_211_pending [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-211 待接入</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_211_registering [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-212 登记中</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_registering",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_211_scanning [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-213 扫描中</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_scanning",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_211_submitted [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-214 已提交候选</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_submitted",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_221 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-221 阶段性目标 · 审阅决策并晋升</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_221_pending [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-221 待审阅</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_reviewing [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-222 审阅中</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_reviewing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_decided [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-223 已决策</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_decided",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_promoted [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-224 已晋升可检索</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_promoted",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_rejected [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-225 已驳回退回</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_rejected",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_231 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-231 阶段性目标 · 巡检并判定新鲜度</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_231",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_231_pending [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-231 待巡检</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_231_probing [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-232 巡检中</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_probing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_231_fresh [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-233 新鲜度正常</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_fresh",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_231_stale [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-234 新鲜度异常</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_stale",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_i_232 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-232 阶段性目标 · 上报告警并呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_232",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_232_pending [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-235 待上报</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_232_reporting [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-236 上报中</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_reporting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_232_listed [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-237 控制台已列出</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_listed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_232_fixed [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-238 已修复下线</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_fixed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_001_pending -> st_001_normalizing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">收到企业微信提问</FONT></TD></TR></TABLE>>,
        likec4_id="10f2d85",
        minlen=1,
        style=dashed];
    st_002_pending -> st_002_checking [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">进入回复策略</FONT></TD></TR></TABLE>>,
        likec4_id="1ef5n2r",
        minlen=1,
        style=dashed];
    st_003_pending -> st_003_composing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验通过</FONT></TD></TR></TABLE>>,
        likec4_id=a12bg8,
        minlen=1,
        style=dashed];
    st_011_pending -> st_011_judging [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足触发</FONT></TD></TR></TABLE>>,
        likec4_id="11d33s9",
        minlen=1,
        style=dashed];
    st_012_pending -> st_012_ticketing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定已转人工</FONT></TD></TR></TABLE>>,
        likec4_id=f9bw1d,
        minlen=1,
        style=dashed];
    st_111_pending -> st_111_counting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营人员发起查询</FONT></TD></TR></TABLE>>,
        likec4_id=rzmy7q,
        minlen=1,
        style=dashed];
    st_112_pending -> st_112_rendering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定为空库</FONT></TD></TR></TABLE>>,
        likec4_id="1q96fof",
        minlen=1,
        style=dashed];
    st_121_pending -> st_121_waiting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索并启动计时</FONT></TD></TR></TABLE>>,
        likec4_id="1juk1lq",
        minlen=1,
        style=dashed];
    st_122_pending -> st_122_notifying [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定超时</FONT></TD></TR></TABLE>>,
        likec4_id="1by17ti",
        minlen=1,
        style=dashed];
    st_131_pending -> st_131_calling [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起模型调用</FONT></TD></TR></TABLE>>,
        likec4_id=rt5glz,
        minlen=1,
        style=dashed];
    st_132_pending -> st_132_ticketing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">模型判定不可用</FONT></TD></TR></TABLE>>,
        likec4_id="1mtiesx",
        minlen=1,
        style=dashed];
    st_211_pending -> st_211_registering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">上传素材</FONT></TD></TR></TABLE>>,
        likec4_id="1kvw67w",
        minlen=1,
        style=dashed];
    st_221_pending -> st_221_reviewing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">候选提交到治理</FONT></TD></TR></TABLE>>,
        likec4_id=mc0txr,
        minlen=1,
        style=dashed];
    st_231_pending -> st_231_probing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">到达巡检周期</FONT></TD></TR></TABLE>>,
        likec4_id="107g3kq",
        minlen=1,
        style=dashed];
    st_232_pending -> st_232_reporting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定新鲜度异常</FONT></TD></TR></TABLE>>,
        likec4_id=lfrdln,
        minlen=1,
        style=dashed];
    st_001_normalizing -> st_001_searching [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">归一化完成</FONT></TD></TR></TABLE>>,
        likec4_id="1ludk4k",
        style=dashed];
    st_002_checking -> st_002_passed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id="1dmjhjw",
        minlen=1,
        style=dashed];
    st_002_checking -> st_002_failed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足，转 US-002</FONT></TD></TR></TABLE>>,
        likec4_id="14hn0sv",
        minlen=1,
        style=dashed];
    st_003_composing -> st_003_delivering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">答复正文就绪</FONT></TD></TR></TABLE>>,
        likec4_id=uknrcy,
        style=dashed];
    st_011_judging -> st_011_escalated [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">确认无可靠候选</FONT></TD></TR></TABLE>>,
        likec4_id="12ln1ui",
        minlen=1,
        style=dashed];
    st_012_ticketing -> st_012_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">工单创建完成</FONT></TD></TR></TABLE>>,
        likec4_id="1fg50d8",
        style=dashed];
    st_111_counting -> st_111_empty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">条目数为 0</FONT></TD></TR></TABLE>>,
        likec4_id=cx8uzg,
        minlen=1,
        style=dashed];
    st_111_counting -> st_111_ready [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">条目数大于 0</FONT></TD></TR></TABLE>>,
        likec4_id=d9evpe,
        minlen=1,
        style=dashed];
    st_112_rendering -> st_112_shown [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提示已渲染</FONT></TD></TR></TABLE>>,
        likec4_id=zzqrf1,
        minlen=1,
        style=dashed];
    st_121_waiting -> st_121_timedout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">超过 8 秒未返回</FONT></TD></TR></TABLE>>,
        likec4_id="5pzuce",
        minlen=1,
        style=dashed];
    st_121_waiting -> st_121_returned [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">8 秒内返回候选</FONT></TD></TR></TABLE>>,
        likec4_id=z77ubu,
        minlen=1,
        style=dashed];
    st_122_notifying -> st_122_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提示已下发</FONT></TD></TR></TABLE>>,
        likec4_id=jzukwr,
        minlen=1,
        style=dashed];
    st_131_calling -> st_131_failed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">调用失败或返回异常</FONT></TD></TR></TABLE>>,
        likec4_id=uiw18r,
        minlen=1,
        style=dashed];
    st_131_calling -> st_131_ok [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">调用正常返回</FONT></TD></TR></TABLE>>,
        likec4_id="1iq5bqk",
        minlen=1,
        style=dashed];
    st_132_ticketing -> st_132_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">工单创建完成</FONT></TD></TR></TABLE>>,
        likec4_id="13kt1b0",
        style=dashed];
    st_211_registering -> st_211_scanning [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记完成</FONT></TD></TR></TABLE>>,
        likec4_id=fdahaq,
        style=dashed];
    st_221_reviewing -> st_221_decided [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营人员记录决策</FONT></TD></TR></TABLE>>,
        likec4_id=gge6u6,
        style=dashed];
    st_231_probing -> st_231_fresh [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">全部在阈值内</FONT></TD></TR></TABLE>>,
        likec4_id="12dz0r3",
        minlen=1,
        style=dashed];
    st_231_probing -> st_231_stale [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">存在超阈值条目</FONT></TD></TR></TABLE>>,
        likec4_id="12mh0h6",
        minlen=1,
        style=dashed];
    st_232_reporting -> st_232_listed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">告警已落库并展示</FONT></TD></TR></TABLE>>,
        likec4_id="156aquf",
        style=dashed];
    st_001_searching -> st_001_got [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索返回候选条目</FONT></TD></TR></TABLE>>,
        likec4_id="1bt4tco",
        minlen=1,
        style=dashed];
    st_003_delivering -> st_003_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">企业微信回传成功</FONT></TD></TR></TABLE>>,
        likec4_id="1f91dle",
        minlen=1,
        style=dashed];
    st_012_notified -> st_012_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">人工接手</FONT></TD></TR></TABLE>>,
        likec4_id="13umlnp",
        minlen=1,
        style=dashed];
    st_132_notified -> st_132_handedoff [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">人工接手</FONT></TD></TR></TABLE>>,
        likec4_id="3jb35h",
        minlen=1,
        style=dashed];
    st_211_scanning -> st_211_submitted [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">候选已抽取并提交</FONT></TD></TR></TABLE>>,
        likec4_id="1ppo30a",
        minlen=1,
        style=dashed];
    st_221_decided -> st_221_promoted [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准晋升</FONT></TD></TR></TABLE>>,
        likec4_id="6fzrsu",
        minlen=1,
        style=dashed];
    st_221_decided -> st_221_rejected [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">驳回退回</FONT></TD></TR></TABLE>>,
        likec4_id=nbo6yy,
        minlen=1,
        style=dashed];
    st_232_listed -> st_232_fixed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营人员修复后下线</FONT></TD></TR></TABLE>>,
        likec4_id="1y20fmn",
        minlen=1,
        style=dashed];
}
`;case`pano-ui`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-ui",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_us_ask {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-001 客户提问获得专业答复</B></FONT>>,
            likec4_depth=2,
            likec4_id="feat_answer_f.us_ask",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_i_001 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-001 阶段性目标 · 取得可靠候选知识</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_answer_f.us_ask.i_001",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui_001 [group="feat_answer_f.us_ask",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 会话输入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-001。客户提问的输入界面：提交问题并看到受理反馈。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_001.ui_001",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
        }
        subgraph cluster_i_003 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-003 阶段性目标 · 生成并下发答复</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_answer_f.us_ask.i_003",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui_003 [group="feat_answer_f.us_ask",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-003 答复呈现</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-003。答复的呈现界面：客户在这里读到有据可依的答复。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_003.ui_003",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
        }
        subgraph cluster_i_002 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-002 阶段性目标 · 判定可否自动答复</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_answer_f.us_ask.i_002",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui_002 [group="feat_answer_f.us_ask",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 判定反馈</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-002。判定过程中的客户侧反馈：让客户知道系统在处理。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_002.ui_002",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
        }
    }
    subgraph cluster_us_lowconfidence {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-002 答不准时转人工而非硬答</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_011 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-011 转接提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-011。转接过程中的客户侧提示：让客户知道正在转入人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_012 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-012 转人工告知</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-012。工单创建后的告知界面与运营侧工单查看。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_us_kbempty {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-101 知识库为空时运营人员能看见</B></FONT>>,
            likec4_depth=2,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_i_111 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-111 阶段性目标 · 读出条目数并判定空库</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_111",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui_111 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-111 状态查询</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-111。运营人员发起状态查询并看到判定入口。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
        }
        subgraph cluster_i_112 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-112 阶段性目标 · 把空库显式呈现出来</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_112",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui_112 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-112 空库提示呈现</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-112。空库状态的显式呈现与告警入口。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
        }
    }
    subgraph cluster_us_ragtimeout {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-102 RAGFLOW 超时时客户不被静默等待</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_121 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-121 等待反馈</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-121。检索等待期间的客户侧反馈。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_122 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-122 处理中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-122。超时后的会话内提示下发。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_us_llmdown {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-103 LLM 不可用时转人工而非静默失败</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_131 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-131 调用反馈</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-131。模型调用异常的客户侧反馈。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_132 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-132 转人工告知</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-132。建单后的客户告知与告警呈现。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_us_scan {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-201 素材入库后自动进入候选知识</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_211 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-211 素材上传</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-211。素材上传与扫描进度反馈。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_us_govern {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-202 候选知识经我决策后才对外可见</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_221 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-221 审阅工作台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-221。候选审阅与决策的操作界面。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_us_alert {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-203 知识陈旧时我能收到提示</B></FONT>>,
            likec4_depth=2,
            likec4_id="feat_knowledge_f.us_alert",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_i_231 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-231 阶段性目标 · 巡检并判定新鲜度</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_knowledge_f.us_alert.i_231",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui_231 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-231 巡检状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-231。巡检过程与新鲜度状态呈现。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_alert.i_231.ui_231",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
        }
        subgraph cluster_i_232 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-232 阶段性目标 · 上报告警并呈现</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_knowledge_f.us_alert.i_232",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui_232 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-232 告警呈现</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">对应阶段性目标 I-232。问题条目的告警列表与处理入口。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_alert.i_232.ui_232",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
        }
    }
    ui_011 -> ui_121 [style=invis];
    ui_121 -> ui_131 [style=invis];
    ui_001 -> ui_012 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度时转人工</FONT></TD></TR></TABLE>>,
        likec4_id=iyylfn,
        style=solid];
    ui_001 -> ui_003 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id=xyyfre,
        style=solid];
    ui_111 -> ui_112 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询空库告警</FONT></TD></TR></TABLE>>,
        likec4_id="1cecj8q",
        minlen=0,
        style=solid,
        weight=3];
    ui_211 -> ui_221 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1hhmdle",
        style=solid];
    ui_012 -> ui_003 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id="1fkr51f",
        style=solid];
    ui_112 -> ui_122 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id=bwb8qh,
        style=solid];
    ui_221 -> ui_211 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id=i21viq,
        style=solid];
    ui_221 -> ui_231 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准后推送</FONT></TD></TR></TABLE>>,
        likec4_id=elp5j7,
        style=solid];
    ui_003 -> ui_001 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id=utp4qy,
        style=solid];
    ui_003 -> ui_002 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>,
        likec4_id=uwt016,
        minlen=1,
        style=solid,
        weight=3];
    ui_122 -> ui_132 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id="1ykpf4q",
        minlen=1,
        style=solid];
    ui_231 -> ui_232 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">更新生命周期</FONT></TD></TR></TABLE>>,
        likec4_id="2svm7e",
        minlen=0,
        style=solid,
        weight=3];
    ui_232 -> ui_221 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id=zgbgeb,
        style=solid];
}
`;case`pano-api`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-api",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    api_001 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-001 POST /wechat/callback 微信客服回调</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js:12 —<BR/>接收企业微信加密回调。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_ask.i_001.ui_001.src_001.api_001",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_002 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-002 GET /handoffs 工单列表</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/handoff-routes.js:9 — 运营人员查看人工工单。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.src_006.api_002",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_001 -> api_002 [style=invis];
    api_101 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-101 GET /integration/status 集成状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js:7 —<BR/>查询集成状态与知识条目数。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.src_101.api_101",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_002 -> api_101 [style=invis];
    api_201 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-201 POST /materials 素材接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js:8 — 接收素材。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.src_201.api_201",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_101 -> api_201 [style=invis];
    api_202 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-202 POST /knowledge/scan 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:10 — 触发候选知识扫描。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_202.api_202",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_203 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-203 GET /knowledge/status 知识状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:26 —<BR/>查询扫描与治理状态。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_202.api_203",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_202 -> api_203 [style=invis];
}
`;case`pano-carrier`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-carrier",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_answer_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-F 知识应答能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_answer_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        cvt_normalize [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-001 提问归一化转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN-001 与<BR/>POD-001→OUT-001 两组映射。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.cvt_normalize",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        in_chatmessage [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-001 客户提问入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.in_chatMessage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        biz_query [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.biz_query",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pod_ticket [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.pod_ticket",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        dao_store [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-001 本地存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.dao_store",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        out_answer [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-001 答复出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>面向企业微信会话的答复载荷。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.out_answer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_feat_degrade_nf {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-NF 极端场景保障</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_degrade_nf,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        in_probequery [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-101 状态探测入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>控制台发起的集成状态查询。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.in_probeQuery",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        cvt_probe [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-101 探测结果转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js — 覆盖<BR/>BIZ-101→OUT-101 与 BIZ-101→POD-101 两组映射。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.cvt_probe",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        biz_proberesult [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-101 探测结果对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 承载条目数、响应耗时与调用结果判定。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.biz_probeResult",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pod_alert [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-101 告警持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>alerts 数组结构对应。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.pod_alert",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        out_status [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-101 状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>面向控制台的状态载荷。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.out_status",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        dao_alert [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-101 告警存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.dao_alert",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_feat_knowledge_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-002-F 知识运营能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_knowledge_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        in_material [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-201 素材入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 上传素材的请求载荷。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.in_material",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        cvt_material [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-201 素材转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 覆盖<BR/>素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.cvt_material",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        biz_candidate [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-201 候选知识对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>承载扫描出的候选条目与决策状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.biz_candidate",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pod_document [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-201 文档登记实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>documents 数组结构对应。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.pod_document",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        dao_registry [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-201 文档登记访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.dao_registry",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        out_knowledgestatus [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-201 知识状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>面向控制台的扫描与治理状态载荷。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.out_knowledgeStatus",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    cvt_normalize -> in_chatmessage [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 报文→IN-001 映射</FONT></TD></TR></TABLE>>,
        likec4_id=qx8cu4,
        style=solid];
    cvt_normalize -> out_answer [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 POD-001→OUT-001 映射</FONT></TD></TR></TABLE>>,
        likec4_id=x85v5o,
        style=solid];
    in_probequery -> biz_proberesult [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为探测结果</FONT></TD></TR></TABLE>>,
        likec4_id=p9qlpb,
        minlen=1,
        style=dashed];
    cvt_probe -> biz_proberesult [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 BIZ-101→OUT-101 映射</FONT></TD></TR></TABLE>>,
        likec4_id="4k1zoz",
        style=solid];
    cvt_probe -> pod_alert [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 BIZ-101→POD-101 映射</FONT></TD></TR></TABLE>>,
        likec4_id="12wvz78",
        style=solid];
    in_material -> biz_candidate [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为候选对象</FONT></TD></TR></TABLE>>,
        likec4_id=e6u1xe,
        minlen=1,
        style=dashed];
    cvt_material -> biz_candidate [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 素材→BIZ-201 映射</FONT></TD></TR></TABLE>>,
        likec4_id="19mytj8",
        style=solid];
    cvt_material -> pod_document [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 BIZ-201→POD-201 映射</FONT></TD></TR></TABLE>>,
        likec4_id=jozf5g,
        style=solid];
    in_chatmessage -> biz_query [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为检索查询</FONT></TD></TR></TABLE>>,
        likec4_id="1fkqupv",
        style=dashed];
    biz_proberesult -> pod_alert [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">异常转告警实体</FONT></TD></TR></TABLE>>,
        likec4_id="1y2eqj1",
        style=dashed];
    biz_proberesult -> out_status [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">渲染状态载荷</FONT></TD></TR></TABLE>>,
        likec4_id=vi1a6a,
        minlen=1,
        style=solid];
    biz_candidate -> pod_document [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记为文档实体</FONT></TD></TR></TABLE>>,
        likec4_id=nbdftm,
        style=dashed];
    biz_query -> pod_ticket [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度落工单</FONT></TD></TR></TABLE>>,
        likec4_id=tdax8u,
        style=solid];
    pod_alert -> dao_alert [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入告警</FONT></TD></TR></TABLE>>,
        likec4_id=ig0evv,
        minlen=1,
        style=solid];
    pod_document -> dao_registry [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入文档标识</FONT></TD></TR></TABLE>>,
        likec4_id="1c116g1",
        style=solid];
    pod_ticket -> dao_store [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入工单</FONT></TD></TR></TABLE>>,
        likec4_id=dwf468,
        style=solid];
    dao_registry -> out_knowledgestatus [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询状态</FONT></TD></TR></TABLE>>,
        likec4_id=ghn725,
        minlen=1,
        style=solid];
    dao_store -> out_answer [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询答复内容</FONT></TD></TR></TABLE>>,
        likec4_id="1r9ms19",
        style=solid];
}
`;case`proc-local`:return`digraph {
  likec4_viewId = "proc-local";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
}`;case`proc-prod`:return`digraph {
  likec4_viewId = "proc-prod";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
}`;case`chain001F-us`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-us",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_answer_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-F 知识应答能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_answer_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_ask [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_lowconfidence [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    us_ask -> us_lowconfidence [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1f297z7",
        minlen=0,
        style=solid];
    us_lowconfidence -> us_ask [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id="18xpcqr",
        minlen=0,
        style=solid];
}
`;case`chain001F-f`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-f",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_answer_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-F 知识应答能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_answer_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_ask [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_lowconfidence [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        f_answer [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-001 应答编排能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.f_answer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        f_retrieval [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-002 知识检索能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.f_retrieval",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    us_ask -> us_lowconfidence [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1f297z7",
        style=solid];
    us_ask -> f_answer [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1kuna4v",
        minlen=1,
        style=solid];
    us_lowconfidence -> us_ask [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id="18xpcqr",
        style=solid];
    us_lowconfidence -> f_retrieval [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=tkg14s,
        minlen=1,
        style=solid];
}
`;case`chain001F-i-001`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-001",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_001 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-001 阶段性目标 · 取得可靠候选知识</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_001",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            i_001_1 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001-1 归一化提问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_001.i_001_1",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_001_2 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001-2 检索候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_001.i_001_2",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        st_001_pending [group="feat_answer_f.us_ask.i_001",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-001 待检索</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_001_normalizing [group="feat_answer_f.us_ask.i_001",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-002 归一化中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_normalizing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_001_searching [group="feat_answer_f.us_ask.i_001",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-003 检索中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_searching",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_001_got [group="feat_answer_f.us_ask.i_001",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-004 已取得候选</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_001.st_001_got",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_001_3 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001-3 候选排序与择优</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_001.i_001_3",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_001_1 -> i_001_3 [style=invis];
    }
    st_001_pending -> st_001_normalizing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">收到企业微信提问</FONT></TD></TR></TABLE>>,
        likec4_id="10f2d85",
        minlen=1,
        style=dashed];
    st_001_normalizing -> st_001_searching [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">归一化完成</FONT></TD></TR></TABLE>>,
        likec4_id="1ludk4k",
        style=dashed];
    st_001_searching -> st_001_got [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索返回候选条目</FONT></TD></TR></TABLE>>,
        likec4_id="1bt4tco",
        minlen=1,
        style=dashed];
}
`;case`chain001F-i-002`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-002",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_002 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-002 阶段性目标 · 判定可否自动答复</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_002",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_002_pending [group="feat_answer_f.us_ask.i_002",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-005 待校验</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_002_checking [group="feat_answer_f.us_ask.i_002",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-006 校验中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_checking",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_002_passed [group="feat_answer_f.us_ask.i_002",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-007 校验通过</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_passed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_002_failed [group="feat_answer_f.us_ask.i_002",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-008 置信度不足</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_002.st_002_failed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_002_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-002-1 置信度校验</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_002.i_002_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_002_pending -> st_002_checking [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">进入回复策略</FONT></TD></TR></TABLE>>,
        likec4_id="1ef5n2r",
        minlen=1,
        style=dashed];
    st_002_checking -> st_002_passed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id="1dmjhjw",
        minlen=1,
        style=dashed];
    st_002_checking -> st_002_failed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足，转 US-002</FONT></TD></TR></TABLE>>,
        likec4_id="14hn0sv",
        minlen=1,
        style=dashed];
}
`;case`chain001F-i-003`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-003",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_003 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-003 阶段性目标 · 生成并下发答复</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_003",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_003_pending [group="feat_answer_f.us_ask.i_003",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-009 待生成</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_003_composing [group="feat_answer_f.us_ask.i_003",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-010 生成中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_composing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_003_delivering [group="feat_answer_f.us_ask.i_003",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-011 下发中</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_delivering",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_003_answered [group="feat_answer_f.us_ask.i_003",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-012 已答复</FONT>>,
            likec4_id="feat_answer_f.us_ask.i_003.st_003_answered",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_003_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003-1 生成答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_003.i_003_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_003_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003-2 下发答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_003.i_003_2",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_003_pending -> st_003_composing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验通过</FONT></TD></TR></TABLE>>,
        likec4_id=a12bg8,
        minlen=1,
        style=dashed];
    st_003_composing -> st_003_delivering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">答复正文就绪</FONT></TD></TR></TABLE>>,
        likec4_id=uknrcy,
        style=dashed];
    st_003_delivering -> st_003_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">企业微信回传成功</FONT></TD></TR></TABLE>>,
        likec4_id="1f91dle",
        minlen=1,
        style=dashed];
    i_003_1 -> i_003_2 [style=invis];
}
`;case`chain001F-i-011`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-011",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_011 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-011 阶段性目标 · 判定进入人工路径</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_011",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_011_pending [group="feat_answer_f.us_lowConfidence.i_011",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-101 待判定</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.st_011_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_011_judging [group="feat_answer_f.us_lowConfidence.i_011",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-102 判定中</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.st_011_judging",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_011_escalated [group="feat_answer_f.us_lowConfidence.i_011",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-103 已转人工</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.st_011_escalated",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_011_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-011-1 判定转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">置信度低于阈值或无候选时，判定进入人工路径。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.i_011_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_011_pending -> st_011_judging [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足触发</FONT></TD></TR></TABLE>>,
        likec4_id="11d33s9",
        minlen=1,
        style=dashed];
    st_011_judging -> st_011_escalated [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">确认无可靠候选</FONT></TD></TR></TABLE>>,
        likec4_id="12ln1ui",
        minlen=1,
        style=dashed];
}
`;case`chain001F-i-012`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-012",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_012 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-012 阶段性目标 · 生成工单并告知等待</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_012",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_012_pending [group="feat_answer_f.us_lowConfidence.i_012",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-104 待建单</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_012_ticketing [group="feat_answer_f.us_lowConfidence.i_012",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-105 建单中</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_ticketing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_012_notified [group="feat_answer_f.us_lowConfidence.i_012",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-106 已告知等待</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_notified",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_012_answered [group="feat_answer_f.us_lowConfidence.i_012",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-107 人工已接管</FONT>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.st_012_answered",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_012_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-012-1 创建人工工单</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.i_012_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_012_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-012-2 告知客户等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.i_012_2",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_012_pending -> st_012_ticketing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定已转人工</FONT></TD></TR></TABLE>>,
        likec4_id=f9bw1d,
        minlen=1,
        style=dashed];
    st_012_ticketing -> st_012_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">工单创建完成</FONT></TD></TR></TABLE>>,
        likec4_id="1fg50d8",
        style=dashed];
    st_012_notified -> st_012_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">人工接手</FONT></TD></TR></TABLE>>,
        likec4_id="13umlnp",
        minlen=1,
        style=dashed];
    i_012_1 -> i_012_2 [style=invis];
}
`;case`chain001NF-us`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-us",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_degrade_nf {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-NF 极端场景保障</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_degrade_nf,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_kbempty [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_ragtimeout [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_llmdown [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    us_kbempty -> us_ragtimeout [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id="14uk9",
        minlen=1,
        style=solid];
    us_ragtimeout -> us_llmdown [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id="19s6iii",
        minlen=1,
        style=solid];
}
`;case`chain001NF-nf`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-nf",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_degrade_nf {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-001-NF 极端场景保障</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_degrade_nf,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_kbempty [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_ragtimeout [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        nf_kbempty [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-101 知识库为零条时状态可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_kbEmpty",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        us_llmdown [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        nf_ragtimeout [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-102 RAGFlow 超 8 秒时客户可感知</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8<BR/>秒下发带说明的提示，客服不必反复刷新。角色：客户。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_ragTimeout",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        nf_llmdown [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-103 LLM 不可用时自动转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_llmDown",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    us_kbempty -> us_ragtimeout [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id="14uk9",
        style=solid];
    us_kbempty -> nf_kbempty [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1w7tww4",
        minlen=1,
        style=solid];
    us_ragtimeout -> us_llmdown [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id="19s6iii",
        style=solid];
    us_ragtimeout -> nf_ragtimeout [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="15m14tg",
        minlen=1,
        style=solid];
    us_llmdown -> nf_llmdown [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1wui3tw",
        minlen=1,
        style=solid];
}
`;case`chain001NF-i-111`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-111",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_111 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-111 阶段性目标 · 读出条目数并判定空库</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_111_pending [group="feat_degrade_nf.us_kbEmpty.i_111",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-111 待读取</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_111_counting [group="feat_degrade_nf.us_kbEmpty.i_111",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-112 读取中</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_counting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_111_empty [group="feat_degrade_nf.us_kbEmpty.i_111",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-113 判定为空库</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_empty",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_111_ready [group="feat_degrade_nf.us_kbEmpty.i_111",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-114 条目正常</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.st_111_ready",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_111_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111-1 读取条目数</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.i_111_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_111_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111-2 判定零条场景</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.i_111_2",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_111_pending -> st_111_counting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营人员发起查询</FONT></TD></TR></TABLE>>,
        likec4_id=rzmy7q,
        minlen=1,
        style=dashed];
    st_111_counting -> st_111_empty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">条目数为 0</FONT></TD></TR></TABLE>>,
        likec4_id=cx8uzg,
        minlen=1,
        style=dashed];
    st_111_counting -> st_111_ready [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">条目数大于 0</FONT></TD></TR></TABLE>>,
        likec4_id=d9evpe,
        minlen=1,
        style=dashed];
    i_111_1 -> i_111_2 [style=invis];
}
`;case`chain001NF-i-112`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-112",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_112 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-112 阶段性目标 · 把空库显式呈现出来</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_112_pending [group="feat_degrade_nf.us_kbEmpty.i_112",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-115 待呈现</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.st_112_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_112_rendering [group="feat_degrade_nf.us_kbEmpty.i_112",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-116 渲染中</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.st_112_rendering",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_112_shown [group="feat_degrade_nf.us_kbEmpty.i_112",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-117 已显式提示</FONT>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.st_112_shown",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_112_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-112-1 渲染空库提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在控制台显式提示条目数为 0，不显示空白列表。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.i_112_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_112_pending -> st_112_rendering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定为空库</FONT></TD></TR></TABLE>>,
        likec4_id="1q96fof",
        minlen=1,
        style=dashed];
    st_112_rendering -> st_112_shown [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提示已渲染</FONT></TD></TR></TABLE>>,
        likec4_id=zzqrf1,
        minlen=1,
        style=dashed];
}
`;case`chain001NF-i-121`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-121",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_121 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-121 阶段性目标 · 计时并判定超时</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_121_pending [group="feat_degrade_nf.us_ragTimeout.i_121",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-121 待计时</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_121_waiting [group="feat_degrade_nf.us_ragTimeout.i_121",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-122 等待响应</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_waiting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_121_timedout [group="feat_degrade_nf.us_ragTimeout.i_121",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-123 判定超时</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_timedOut",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_121_returned [group="feat_degrade_nf.us_ragTimeout.i_121",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-124 按时返回</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.st_121_returned",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_121_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-121-1 启动超时计时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">发起检索时同时启动 8 秒计时。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.i_121_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_121_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-121-2 判定超时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.i_121_2",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_121_pending -> st_121_waiting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索并启动计时</FONT></TD></TR></TABLE>>,
        likec4_id="1juk1lq",
        minlen=1,
        style=dashed];
    st_121_waiting -> st_121_timedout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">超过 8 秒未返回</FONT></TD></TR></TABLE>>,
        likec4_id="5pzuce",
        minlen=1,
        style=dashed];
    st_121_waiting -> st_121_returned [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">8 秒内返回候选</FONT></TD></TR></TABLE>>,
        likec4_id=z77ubu,
        minlen=1,
        style=dashed];
    i_121_1 -> i_121_2 [style=invis];
}
`;case`chain001NF-i-122`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-122",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_122 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-122 阶段性目标 · 告知客户系统在处理</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_122_pending [group="feat_degrade_nf.us_ragTimeout.i_122",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-125 待提示</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.st_122_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_122_notifying [group="feat_degrade_nf.us_ragTimeout.i_122",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-126 提示中</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.st_122_notifying",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_122_notified [group="feat_degrade_nf.us_ragTimeout.i_122",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-127 已告知处理中</FONT>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.st_122_notified",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_122_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-122-1 下发处理中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知系统仍在处理，不让客户反复刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.i_122_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_122_pending -> st_122_notifying [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定超时</FONT></TD></TR></TABLE>>,
        likec4_id="1by17ti",
        minlen=1,
        style=dashed];
    st_122_notifying -> st_122_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提示已下发</FONT></TD></TR></TABLE>>,
        likec4_id=jzukwr,
        minlen=1,
        style=dashed];
}
`;case`chain001NF-i-131`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-131",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_131 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-131 阶段性目标 · 识别模型不可用并转人工</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_131",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_131_pending [group="feat_degrade_nf.us_llmDown.i_131",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-131 待调用</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_131_calling [group="feat_degrade_nf.us_llmDown.i_131",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-132 调用中</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_calling",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_131_failed [group="feat_degrade_nf.us_llmDown.i_131",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-133 模型不可用</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_failed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_131_ok [group="feat_degrade_nf.us_llmDown.i_131",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-134 调用成功</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.st_131_ok",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_131_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-131-1 判定调用结果</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">识别模型服务调用失败或返回异常。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.i_131_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_131_pending -> st_131_calling [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起模型调用</FONT></TD></TR></TABLE>>,
        likec4_id=rt5glz,
        minlen=1,
        style=dashed];
    st_131_calling -> st_131_failed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">调用失败或返回异常</FONT></TD></TR></TABLE>>,
        likec4_id=uiw18r,
        minlen=1,
        style=dashed];
    st_131_calling -> st_131_ok [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">调用正常返回</FONT></TD></TR></TABLE>>,
        likec4_id="1iq5bqk",
        minlen=1,
        style=dashed];
}
`;case`chain001NF-i-132`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-132",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_132 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-132 阶段性目标 · 建单并告知等待</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_132",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_132_pending [group="feat_degrade_nf.us_llmDown.i_132",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-135 待建单</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_132_ticketing [group="feat_degrade_nf.us_llmDown.i_132",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-136 建单中</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_ticketing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_132_notified [group="feat_degrade_nf.us_llmDown.i_132",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-137 已告知等待</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_notified",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_132_handedoff [group="feat_degrade_nf.us_llmDown.i_132",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-138 人工已接管</FONT>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.st_132_handedOff",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_132_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-132-1 生成人工工单</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把提问内容与失败原因写入工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.i_132_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_132_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-132-2 告知等待人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知已转人工，不返回空白内容。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.i_132_2",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_132_pending -> st_132_ticketing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">模型判定不可用</FONT></TD></TR></TABLE>>,
        likec4_id="1mtiesx",
        minlen=1,
        style=dashed];
    st_132_ticketing -> st_132_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">工单创建完成</FONT></TD></TR></TABLE>>,
        likec4_id="13kt1b0",
        style=dashed];
    st_132_notified -> st_132_handedoff [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">人工接手</FONT></TD></TR></TABLE>>,
        likec4_id="3jb35h",
        minlen=1,
        style=dashed];
    i_132_1 -> i_132_2 [style=invis];
}
`;case`chain002F-us`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-us",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_knowledge_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-002-F 知识运营能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_knowledge_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_scan [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_govern [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-202 候选知识经我决策后才对外可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_alert [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-203 知识陈旧时我能收到提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    us_scan -> us_govern [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ciqzea",
        style=solid];
    us_govern -> us_scan [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id="1s5lodu",
        style=solid];
    us_govern -> us_alert [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1kyd0mb",
        style=solid];
    us_alert -> us_govern [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id=jitslf,
        style=solid];
}
`;case`chain002F-f`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-f",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_feat_knowledge_f {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FEATURE-002-F 知识运营能力</B></FONT>>,
            likec4_depth=1,
            likec4_id=feat_knowledge_f,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        us_scan [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_govern [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-202 候选知识经我决策后才对外可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        f_ingest [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-201 素材接入能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收素材并登记文档标识，支持单条与批量。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.f_ingest",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_alert [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-203 知识陈旧时我能收到提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        f_govern [group=feat_knowledge_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-202 知识治理能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">候选知识的扫描、决策、晋升与下线。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.f_govern",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    us_scan -> us_govern [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ciqzea",
        style=solid];
    us_scan -> f_ingest [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=h2l113,
        minlen=1,
        style=solid];
    us_govern -> us_scan [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id="1s5lodu",
        style=solid];
    us_govern -> us_alert [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1kyd0mb",
        style=solid];
    us_govern -> f_govern [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="12oly8a",
        style=solid];
    us_alert -> us_govern [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id=jitslf,
        style=solid];
    us_alert -> f_govern [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=bd7x0j,
        style=solid];
}
`;case`chain002F-i-211`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-i-211",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_211 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-211 阶段性目标 · 素材入库并产出候选</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan.i_211",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            i_211_1 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211-1 登记素材</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把上传的素材登记到文档簿，生成文档标识。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_scan.i_211.i_211_1",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_211_2 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211-2 抽取候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从素材正文中抽取可独立回答问题的候选条目。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_scan.i_211.i_211_2",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        st_211_pending [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-211 待接入</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_211_registering [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-212 登记中</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_registering",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_211_scanning [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-213 扫描中</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_scanning",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_211_submitted [group="feat_knowledge_f.us_scan.i_211",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-214 已提交候选</FONT>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.st_211_submitted",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_211_3 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211-3 提交候选</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把候选条目提交给治理环节，等待决策。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.i_211_3",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_211_1 -> i_211_3 [style=invis];
    }
    st_211_pending -> st_211_registering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">上传素材</FONT></TD></TR></TABLE>>,
        likec4_id="1kvw67w",
        minlen=1,
        style=dashed];
    st_211_registering -> st_211_scanning [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记完成</FONT></TD></TR></TABLE>>,
        likec4_id=fdahaq,
        style=dashed];
    st_211_scanning -> st_211_submitted [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">候选已抽取并提交</FONT></TD></TR></TABLE>>,
        likec4_id="1ppo30a",
        minlen=1,
        style=dashed];
}
`;case`chain002F-i-221`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-i-221",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_221 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-221 阶段性目标 · 审阅决策并晋升</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            i_221_1 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221-1 人工审阅候选</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示候选条目供运营人员逐条审阅。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_govern.i_221.i_221_1",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_221_2 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221-2 记录决策</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">记录批准或驳回，驳回需填写理由。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_govern.i_221.i_221_2",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        st_221_pending [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-221 待审阅</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_reviewing [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-222 审阅中</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_reviewing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_decided [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-223 已决策</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_decided",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_promoted [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-224 已晋升可检索</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_promoted",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_221_rejected [group="feat_knowledge_f.us_govern.i_221",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-225 已驳回退回</FONT>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.st_221_rejected",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_221_3 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221-3 晋升知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">批准的候选进入知识库生命周期，进入可检索状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.i_221_3",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_221_1 -> i_221_3 [style=invis];
    }
    st_221_pending -> st_221_reviewing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">候选提交到治理</FONT></TD></TR></TABLE>>,
        likec4_id=mc0txr,
        minlen=1,
        style=dashed];
    st_221_reviewing -> st_221_decided [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营人员记录决策</FONT></TD></TR></TABLE>>,
        likec4_id=gge6u6,
        style=dashed];
    st_221_decided -> st_221_promoted [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准晋升</FONT></TD></TR></TABLE>>,
        likec4_id="6fzrsu",
        minlen=1,
        style=dashed];
    st_221_decided -> st_221_rejected [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">驳回退回</FONT></TD></TR></TABLE>>,
        likec4_id=nbo6yy,
        minlen=1,
        style=dashed];
}
`;case`chain002F-i-231`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-i-231",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_231 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-231 阶段性目标 · 巡检并判定新鲜度</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_231",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_231_pending [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-231 待巡检</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_231_probing [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-232 巡检中</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_probing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_231_fresh [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-233 新鲜度正常</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_fresh",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_231_stale [group="feat_knowledge_f.us_alert.i_231",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-234 新鲜度异常</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.st_231_stale",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_231_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-231-1 巡检数据集状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">定期探测知识库数据集的可用性与新鲜度。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.i_231_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_231_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-231-2 判定新鲜度异常</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按更新时间阈值判定是否属于陈旧或异常。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.i_231_2",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_231_pending -> st_231_probing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">到达巡检周期</FONT></TD></TR></TABLE>>,
        likec4_id="107g3kq",
        minlen=1,
        style=dashed];
    st_231_probing -> st_231_fresh [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">全部在阈值内</FONT></TD></TR></TABLE>>,
        likec4_id="12dz0r3",
        minlen=1,
        style=dashed];
    st_231_probing -> st_231_stale [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">存在超阈值条目</FONT></TD></TR></TABLE>>,
        likec4_id="12mh0h6",
        minlen=1,
        style=dashed];
    i_231_1 -> i_231_2 [style=invis];
}
`;case`chain002F-i-232`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-i-232",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_i_232 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-232 阶段性目标 · 上报告警并呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_232",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        st_232_pending [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-235 待上报</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_pending",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_232_reporting [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-236 上报中</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_reporting",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_232_listed [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-237 控制台已列出</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_listed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_232_fixed [group="feat_knowledge_f.us_alert.i_232",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-238 已修复下线</FONT>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.st_232_fixed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_232_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-232-1 上报告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把问题条目写入告警并在控制台列出。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.i_232_1",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_232_pending -> st_232_reporting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">判定新鲜度异常</FONT></TD></TR></TABLE>>,
        likec4_id=lfrdln,
        minlen=1,
        style=dashed];
    st_232_reporting -> st_232_listed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">告警已落库并展示</FONT></TD></TR></TABLE>>,
        likec4_id="156aquf",
        style=dashed];
    st_232_listed -> st_232_fixed [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营人员修复后下线</FONT></TD></TR></TABLE>>,
        likec4_id="1y20fmn",
        minlen=1,
        style=dashed];
}
`;case`pano-src-001F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-src-001F",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_us_ask {
        graph [color="#1c356c",
            fillcolor="#1c417d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-001 客户提问获得专业答复</B></FONT>>,
            likec4_depth=3,
            likec4_id="feat_answer_f.us_ask",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_i_001 {
            graph [color="#1c3979",
                fillcolor="#1a468d",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-001 阶段性目标 · 取得可靠候选知识</B></FONT>>,
                likec4_depth=2,
                likec4_id="feat_answer_f.us_ask.i_001",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            subgraph cluster_ui_001 {
                graph [color="#1b3d88",
                    fillcolor="#194b9e",
                    label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-001 会话输入</B></FONT>>,
                    likec4_depth=1,
                    likec4_id="feat_answer_f.us_ask.i_001.ui_001",
                    likec4_level=2,
                    margin=40,
                    style=filled
                ];
                src_001 [group="feat_answer_f.us_ask",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>,
                    likec4_id="feat_answer_f.us_ask.i_001.ui_001.src_001",
                    likec4_level=3,
                    margin="0.5,0.223",
                    width=4.584];
                src_002 [group="feat_answer_f.us_ask",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js — 跨阶段编排：自<BR/>I-001<BR/>入口分发，决定走自动应答（I-002→I-003）还是转人工（I-011）。主属<BR/>UI-001 入口分发。</FONT></TD></TR></TABLE>>,
                    likec4_id="feat_answer_f.us_ask.i_001.ui_001.src_002",
                    likec4_level=3,
                    margin="0.5,0.223",
                    width=4.584];
                src_005 [group="feat_answer_f.us_ask",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问，服务 I-001-2 检索步骤。</FONT></TD></TR></TABLE>>,
                    likec4_id="feat_answer_f.us_ask.i_001.ui_001.src_005",
                    likec4_level=3,
                    margin="0.5,0.223",
                    width=4.584];
            }
        }
        subgraph cluster_i_003 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-003 阶段性目标 · 生成并下发答复</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_answer_f.us_ask.i_003",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            src_003 [group="feat_answer_f.us_ask",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-003 知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 检索增强的应答循环。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_003.ui_003.src_003",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            src_007 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_003.ui_003.src_007",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
        subgraph cluster_i_002 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-002 阶段性目标 · 判定可否自动答复</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_answer_f.us_ask.i_002",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            src_004 [group="feat_answer_f.us_ask",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_002.ui_002.src_004",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
    }
    subgraph cluster_us_lowconfidence {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-002 答不准时转人工而非硬答</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        src_006 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.src_006",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_001 -> src_002 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分发归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id=qnhcnd,
        minlen=0,
        style=solid,
        weight=7];
    src_002 -> src_006 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度时转人工</FONT></TD></TR></TABLE>>,
        likec4_id="19ttkp3",
        style=solid];
    src_002 -> src_003 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id="1azkb63",
        style=solid,
        weight=3];
    src_006 -> src_007 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id=ndo35u,
        minlen=1,
        style=solid];
    src_003 -> src_005 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id="17w88wc",
        minlen=1,
        style=solid];
    src_003 -> src_004 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>,
        likec4_id=rev8q5,
        minlen=1,
        style=solid];
}
`;case`carrier001F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=carrier001F,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    cvt_normalize [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-001 提问归一化转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN-001 与<BR/>POD-001→OUT-001 两组映射。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.cvt_normalize",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    in_chatmessage [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-001 客户提问入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.in_chatMessage",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cvt_normalize -> in_chatmessage [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 报文→IN-001 映射</FONT></TD></TR></TABLE>>,
        likec4_id=qx8cu4,
        style=solid];
    out_answer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-001 答复出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>面向企业微信会话的答复载荷。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.out_answer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cvt_normalize -> out_answer [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 POD-001→OUT-001 映射</FONT></TD></TR></TABLE>>,
        likec4_id=x85v5o,
        style=solid];
    biz_query [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.biz_query",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    in_chatmessage -> biz_query [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为检索查询</FONT></TD></TR></TABLE>>,
        likec4_id="1fkqupv",
        style=dashed];
    pod_ticket [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.pod_ticket",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    biz_query -> pod_ticket [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度落工单</FONT></TD></TR></TABLE>>,
        likec4_id=tdax8u,
        style=solid];
    dao_store [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-001 本地存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.dao_store",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    pod_ticket -> dao_store [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入工单</FONT></TD></TR></TABLE>>,
        likec4_id=dwf468,
        style=solid];
    dao_store -> out_answer [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询答复内容</FONT></TD></TR></TABLE>>,
        likec4_id="1r9ms19",
        style=solid];
}
`;case`erm001F-ticket`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="erm001F-ticket",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    pod_ticket [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.pod_ticket",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dao_store [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-001 本地存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.dao_store",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    pod_ticket -> dao_store [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入工单</FONT></TD></TR></TABLE>>,
        likec4_id=dwf468,
        style=solid];
}
`;case`api001F-src001-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="api001F-src001-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_src_001 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SRC-001 微信客服回调入口</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001.src_001",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        api_001 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-001 POST /wechat/callback 微信客服回调</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js:12 —<BR/>接收企业微信加密回调。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001.src_001.api_001",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case`api001F-src006-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="api001F-src006-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_src_006 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SRC-006 转人工服务</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.src_006",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        api_002 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-002 GET /handoffs 工单列表</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/handoff-routes.js:9 — 运营人员查看人工工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.src_006.api_002",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case`pano-src-001NF`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-src-001NF",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_us_kbempty {
        graph [color="#1c356c",
            fillcolor="#1c417d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-101 知识库为空时运营人员能看见</B></FONT>>,
            likec4_depth=3,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_i_111 {
            graph [color="#1c3979",
                fillcolor="#1a468d",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-111 阶段性目标 · 读出条目数并判定空库</B></FONT>>,
                likec4_depth=2,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_111",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            subgraph cluster_ui_111 {
                graph [color="#1b3d88",
                    fillcolor="#194b9e",
                    label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-111 状态查询</B></FONT>>,
                    likec4_depth=1,
                    likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111",
                    likec4_level=2,
                    margin=40,
                    style=filled
                ];
                src_101 [group="feat_degrade_nf.us_kbEmpty",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-101 集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>功能概览与集成状态查询。</FONT></TD></TR></TABLE>>,
                    likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.src_101",
                    likec4_level=3,
                    margin="0.5,0.223",
                    width=4.584];
                src_104 [group="feat_degrade_nf.us_kbEmpty",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-104 RAGFlow 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 校验 RAGFlow 数据集状态与可用性。</FONT></TD></TR></TABLE>>,
                    likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.src_104",
                    likec4_level=3,
                    margin="0.5,0.223",
                    width=4.584];
            }
        }
        subgraph cluster_i_112 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-112 阶段性目标 · 把空库显式呈现出来</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_112",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            src_103 [group="feat_degrade_nf.us_kbEmpty",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-103 知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js —<BR/>暴露知识新鲜度与空库问题。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112.src_103",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            src_105 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-105 运营人员控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112.src_105",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
    }
    subgraph cluster_us_ragtimeout {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-102 RAGFLOW 超时时客户不被静默等待</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        src_102 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122.src_102",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_us_llmdown {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-103 LLM 不可用时转人工而非静默失败</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        src_106 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132.src_106",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_101 -> src_104 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测数据集状态</FONT></TD></TR></TABLE>>,
        likec4_id="19j3ndb",
        minlen=0,
        style=solid,
        weight=5];
    src_101 -> src_103 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询空库告警</FONT></TD></TR></TABLE>>,
        likec4_id="2z56ug",
        style=solid,
        weight=3];
    src_103 -> src_102 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id=aud4m0,
        style=solid];
    src_102 -> src_106 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id="15tc1um",
        minlen=1,
        style=solid];
}
`;case`carrier001NF`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=carrier001NF,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    in_probequery [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-101 状态探测入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>控制台发起的集成状态查询。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.in_probeQuery",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    biz_proberesult [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-101 探测结果对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 承载条目数、响应耗时与调用结果判定。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.biz_probeResult",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    in_probequery -> biz_proberesult [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为探测结果</FONT></TD></TR></TABLE>>,
        likec4_id=p9qlpb,
        minlen=1,
        style=dashed];
    cvt_probe [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-101 探测结果转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js — 覆盖<BR/>BIZ-101→OUT-101 与 BIZ-101→POD-101 两组映射。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.cvt_probe",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    cvt_probe -> biz_proberesult [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 BIZ-101→OUT-101 映射</FONT></TD></TR></TABLE>>,
        likec4_id="4k1zoz",
        style=solid];
    pod_alert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-101 告警持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>alerts 数组结构对应。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.pod_alert",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cvt_probe -> pod_alert [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 BIZ-101→POD-101 映射</FONT></TD></TR></TABLE>>,
        likec4_id="12wvz78",
        style=solid];
    biz_proberesult -> pod_alert [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">异常转告警实体</FONT></TD></TR></TABLE>>,
        likec4_id="1y2eqj1",
        style=dashed];
    out_status [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-101 状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>面向控制台的状态载荷。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.out_status",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    biz_proberesult -> out_status [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">渲染状态载荷</FONT></TD></TR></TABLE>>,
        likec4_id=vi1a6a,
        minlen=1,
        style=solid];
    dao_alert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-101 告警存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.dao_alert",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    pod_alert -> dao_alert [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入告警</FONT></TD></TR></TABLE>>,
        likec4_id=ig0evv,
        minlen=1,
        style=solid];
}
`;case`erm001NF-alert`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="erm001NF-alert",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    pod_alert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-101 告警持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>alerts 数组结构对应。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.pod_alert",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dao_alert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-101 告警存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.dao_alert",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    pod_alert -> dao_alert [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入告警</FONT></TD></TR></TABLE>>,
        likec4_id=ig0evv,
        style=solid];
}
`;case`api001NF-src101-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="api001NF-src101-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_src_101 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SRC-101 集成状态路由</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.src_101",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        api_101 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-101 GET /integration/status 集成状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js:7 —<BR/>查询集成状态与知识条目数。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.src_101.api_101",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case`pano-src-002F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-src-002F",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_us_govern {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-202 候选知识经我决策后才对外可见</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_202 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-202 知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>知识扫描、同步与生命周期接口。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_202",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_207 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-207 知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-governance-service.js<BR/>— 发布决策与治理。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_207",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_205 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-205 文档登记簿</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-document-registry.js —<BR/>跟踪素材与文档标识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_205",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_us_scan {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-201 素材入库后自动进入候选知识</B></FONT>>,
            likec4_depth=2,
            likec4_id="feat_knowledge_f.us_scan",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_ui_211 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-211 素材上传</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_knowledge_f.us_scan.i_211.ui_211",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            src_201 [group="feat_knowledge_f.us_scan.i_211.ui_211",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-201 素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 美妆素材接入接口。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.src_201",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            src_204 [group="feat_knowledge_f.us_scan.i_211.ui_211",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-204 素材批处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-batch-service.js —<BR/>批量素材接入。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.src_204",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            src_206 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-206 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>发现候选知识。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.src_206",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            src_203 [group="feat_knowledge_f.us_scan.i_211.ui_211",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-203 素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 素材接入规则。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.src_203",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
    }
    subgraph cluster_us_alert {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-203 知识陈旧时我能收到提示</B></FONT>>,
            likec4_depth=2,
            likec4_id="feat_knowledge_f.us_alert",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_i_231 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-231 阶段性目标 · 巡检并判定新鲜度</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_knowledge_f.us_alert.i_231",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            src_208 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-208 知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-sync-service.js —<BR/>把已批准知识推送到 RAGFlow。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_alert.i_231.ui_231.src_208",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
        subgraph cluster_i_232 {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-232 阶段性目标 · 上报告警并呈现</B></FONT>>,
                likec4_depth=1,
                likec4_id="feat_knowledge_f.us_alert.i_232",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            src_209 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-209 知识生命周期视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-lifecycle-service.js —<BR/>知识的晋升与下线。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_alert.i_232.ui_232.src_209",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
    }
    src_202 -> src_206 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id=yqd40m,
        minlen=1,
        style=solid];
    src_201 -> src_203 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">接收素材</FONT></TD></TR></TABLE>>,
        likec4_id="1brrqrs",
        minlen=1,
        style=solid,
        weight=7];
    src_204 -> src_203 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批量接入</FONT></TD></TR></TABLE>>,
        likec4_id="1pykz7x",
        minlen=1,
        style=solid,
        weight=7];
    src_206 -> src_207 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选</FONT></TD></TR></TABLE>>,
        likec4_id=w7pslv,
        style=solid];
    src_203 -> src_205 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记文档</FONT></TD></TR></TABLE>>,
        likec4_id=byqu8k,
        style=solid];
    src_207 -> src_208 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准后推送</FONT></TD></TR></TABLE>>,
        likec4_id="1mx86oc",
        style=solid];
    src_208 -> src_209 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">更新生命周期</FONT></TD></TR></TABLE>>,
        likec4_id="14dioy3",
        minlen=0,
        style=solid,
        weight=3];
    src_209 -> src_205 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id="1l5q973",
        style=solid];
}
`;case`carrier002F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=carrier002F,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    in_material [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-201 素材入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 上传素材的请求载荷。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.in_material",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    biz_candidate [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-201 候选知识对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>承载扫描出的候选条目与决策状态。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.biz_candidate",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    in_material -> biz_candidate [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为候选对象</FONT></TD></TR></TABLE>>,
        likec4_id=e6u1xe,
        minlen=1,
        style=dashed];
    cvt_material [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-201 素材转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 覆盖<BR/>素材载荷→BIZ-201 与 BIZ-201→POD-201 两组映射。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.cvt_material",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    cvt_material -> biz_candidate [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 素材→BIZ-201 映射</FONT></TD></TR></TABLE>>,
        likec4_id="19mytj8",
        style=solid];
    pod_document [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-201 文档登记实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>documents 数组结构对应。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.pod_document",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cvt_material -> pod_document [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">负责 BIZ-201→POD-201 映射</FONT></TD></TR></TABLE>>,
        likec4_id=jozf5g,
        style=solid];
    biz_candidate -> pod_document [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记为文档实体</FONT></TD></TR></TABLE>>,
        likec4_id=nbdftm,
        style=dashed];
    dao_registry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-201 文档登记访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.dao_registry",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    pod_document -> dao_registry [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入文档标识</FONT></TD></TR></TABLE>>,
        likec4_id="1c116g1",
        style=solid];
    out_knowledgestatus [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-201 知识状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>面向控制台的扫描与治理状态载荷。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.out_knowledgeStatus",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dao_registry -> out_knowledgestatus [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询状态</FONT></TD></TR></TABLE>>,
        likec4_id=ghn725,
        minlen=1,
        style=solid];
}
`;case`erm002F-document`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="erm002F-document",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    pod_document [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-201 文档登记实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>documents 数组结构对应。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.pod_document",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dao_registry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-201 文档登记访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.dao_registry",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    pod_document -> dao_registry [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入文档标识</FONT></TD></TR></TABLE>>,
        likec4_id="1c116g1",
        style=solid];
}
`;case`api002F-src201-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="api002F-src201-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_src_201 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SRC-201 素材路由</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.src_201",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        api_201 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-201 POST /materials 素材接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js:8 — 接收素材。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.src_201.api_201",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case`api002F-src202-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="api002F-src202-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_src_202 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SRC-202 知识库路由</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_202",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        api_202 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-202 POST /knowledge/scan 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:10 — 触发候选知识扫描。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_202.api_202",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case`api002F-src202-2`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="api002F-src202-2",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_src_202 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SRC-202 知识库路由</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_202",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        api_203 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-203 GET /knowledge/status 知识状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:26 —<BR/>查询扫描与治理状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.src_202.api_203",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
}
`;case`ui001F-001`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-001",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_001 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-001 会话输入</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_001_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001-信息设计-001 提问输入信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：问题原文。覆盖空态（未输入）、加载态（提交中）、错误态（解密失败）、无权限态（未授权会话）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001.ui_001_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_001_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001-交互设计-001 提交提问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户发送提问后立即进入等待，无需任何手动操作；提交失败可原位重试。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001.ui_001_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_001_info_1 -> ui_001_act_1 [style=invis];
}
`;case`ui001F-001-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-001-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_001 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-001 会话输入</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_001_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001-信息设计-001 提问输入信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：问题原文。覆盖空态（未输入）、加载态（提交中）、错误态（解密失败）、无权限态（未授权会话）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001.ui_001_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-001-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-001-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_001 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-001 会话输入</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_001_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001-交互设计-001 提交提问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户发送提问后立即进入等待，无需任何手动操作；提交失败可原位重试。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_001.ui_001.ui_001_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-002`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-002",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_002 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-002 判定反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_002.ui_002",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_002_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002-信息设计-001 判定中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：处理中状态文案。覆盖加载态（校验中）、错误态（校验服务不可用）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_002.ui_002.ui_002_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_002_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002-交互设计-001 等待免刷新</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">判定期间客户无需任何操作，不出现需要手动刷新的界面。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_002.ui_002.ui_002_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_002_info_1 -> ui_002_act_1 [style=invis];
}
`;case`ui001F-002-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-002-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_002 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-002 判定反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_002.ui_002",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_002_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002-信息设计-001 判定中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：处理中状态文案。覆盖加载态（校验中）、错误态（校验服务不可用）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_002.ui_002.ui_002_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-002-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-002-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_002 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-002 判定反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_002.ui_002",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_002_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002-交互设计-001 等待免刷新</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">判定期间客户无需任何操作，不出现需要手动刷新的界面。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_002.ui_002.ui_002_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-003`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-003",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_003 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-003 答复呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            ui_003_info_1 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-003-信息设计-001 答复正文字段</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：答复正文。覆盖加载态（生成中）、错误态（生成失败转人工）。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_003.ui_003.ui_003_info_1",
                likec4_level=1,
                margin="0.278,0.306",
                width=4.445];
            ui_003_info_2 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-003-信息设计-002 知识来源条目</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：来源知识条目标题与链接。空态：无来源（转人工路径不展示）。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_003.ui_003.ui_003_info_2",
                likec4_level=1,
                margin="0.278,0.306",
                width=4.445];
        }
        ui_003_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-003-交互设计-001 答复同屏呈现</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">答复与提问同屏呈现，客户无需滚动查找；答复不可编辑。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003.ui_003_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_003_info_1 -> ui_003_act_1 [style=invis];
    }
}
`;case`ui001F-003-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-003-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_003 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-003 答复呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_003_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-003-信息设计-001 答复正文字段</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：答复正文。覆盖加载态（生成中）、错误态（生成失败转人工）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003.ui_003_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-003-info-2`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-003-info-2",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_003 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-003 答复呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_003_info_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-003-信息设计-002 知识来源条目</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：来源知识条目标题与链接。空态：无来源（转人工路径不展示）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003.ui_003_info_2",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-003-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-003-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_003 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-003 答复呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_003_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-003-交互设计-001 答复同屏呈现</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">答复与提问同屏呈现，客户无需滚动查找；答复不可编辑。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_003.ui_003.ui_003_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-011`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-011",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_011 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-011 转接提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_011_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-011-信息设计-001 转接中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：转接状态文案。覆盖加载态（判定中）、错误态（转接失败重试）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011.ui_011_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_011_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-011-交互设计-001 转接反馈</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">转接期间客户可见状态变化，无需重复提问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011.ui_011_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_011_info_1 -> ui_011_act_1 [style=invis];
}
`;case`ui001F-011-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-011-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_011 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-011 转接提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_011_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-011-信息设计-001 转接中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：转接状态文案。覆盖加载态（判定中）、错误态（转接失败重试）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011.ui_011_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-011-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-011-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_011 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-011 转接提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_011_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-011-交互设计-001 转接反馈</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">转接期间客户可见状态变化，无需重复提问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_011.ui_011.ui_011_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-012`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-012",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_012 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-012 转人工告知</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_012_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-012-信息设计-001 等待告知信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：预计等待说明。覆盖加载态（建单中）、错误态（建单失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.ui_012_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_012_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-012-交互设计-001 工单状态查看</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员通过工单列表查看待接手工单，客户无需操作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.ui_012_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_012_info_1 -> ui_012_act_1 [style=invis];
}
`;case`ui001F-012-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-012-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_012 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-012 转人工告知</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_012_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-012-信息设计-001 等待告知信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：预计等待说明。覆盖加载态（建单中）、错误态（建单失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.ui_012_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001F-012-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001F-012-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_012 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-012 转人工告知</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_012_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-012-交互设计-001 工单状态查看</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员通过工单列表查看待接手工单，客户无需操作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_012.ui_012.ui_012_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-111`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-111",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_111 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-111 状态查询</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_111_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-111-信息设计-001 条目数展示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：当前知识条目数。覆盖空态（尚未入库）、加载态（读取中）、错误态（读取失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.ui_111_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_111_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-111-交互设计-001 发起查询</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员点击查询后立即反馈读取中，无需刷新页面。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.ui_111_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_111_info_1 -> ui_111_act_1 [style=invis];
}
`;case`ui001NF-111-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-111-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_111 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-111 状态查询</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_111_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-111-信息设计-001 条目数展示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：当前知识条目数。覆盖空态（尚未入库）、加载态（读取中）、错误态（读取失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.ui_111_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-111-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-111-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_111 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-111 状态查询</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_111_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-111-交互设计-001 发起查询</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员点击查询后立即反馈读取中，无需刷新页面。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_111.ui_111.ui_111_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-112`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-112",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_112 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-112 空库提示呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_112_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-112-信息设计-001 空库提示信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112.ui_112_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_112_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-112-交互设计-001 控制台查看</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员打开控制台即见提示，无需逐页排查。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112.ui_112_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_112_info_1 -> ui_112_act_1 [style=invis];
}
`;case`ui001NF-112-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-112-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_112 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-112 空库提示呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_112_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-112-信息设计-001 空库提示信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112.ui_112_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-112-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-112-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_112 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-112 空库提示呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_112_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-112-交互设计-001 控制台查看</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员打开控制台即见提示，无需逐页排查。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_112.ui_112.ui_112_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-121`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-121",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_121 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-121 等待反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_121_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-121-信息设计-001 等待中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：等待状态文案。覆盖加载态（检索中）、超时态（判定中）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121.ui_121_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_121_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-121-交互设计-001 免手动刷新</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">等待期间界面持续显示处理中，客户不需反复刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121.ui_121_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_121_info_1 -> ui_121_act_1 [style=invis];
}
`;case`ui001NF-121-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-121-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_121 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-121 等待反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_121_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-121-信息设计-001 等待中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：等待状态文案。覆盖加载态（检索中）、超时态（判定中）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121.ui_121_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-121-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-121-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_121 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-121 等待反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_121_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-121-交互设计-001 免手动刷新</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">等待期间界面持续显示处理中，客户不需反复刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_121.ui_121.ui_121_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-122`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-122",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_122 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-122 处理中提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_122_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-122-信息设计-001 处理中提示信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：处理说明与预计时长。覆盖加载态（判定中）、错误态（判定失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122.ui_122_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_122_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-122-交互设计-001 提示下发</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提示在会话内直接出现，客户无需操作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122.ui_122_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_122_info_1 -> ui_122_act_1 [style=invis];
}
`;case`ui001NF-122-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-122-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_122 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-122 处理中提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_122_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-122-信息设计-001 处理中提示信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：处理说明与预计时长。覆盖加载态（判定中）、错误态（判定失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122.ui_122_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-122-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-122-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_122 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-122 处理中提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_122_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-122-交互设计-001 提示下发</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">提示在会话内直接出现，客户无需操作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_122.ui_122.ui_122_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-131`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-131",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_131 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-131 调用反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_131_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-131-信息设计-001 调用异常提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：异常状态说明。覆盖加载态（调用中）、错误态（模型不可用）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131.ui_131_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_131_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-131-交互设计-001 异常反馈</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">异常时界面不出现空白回复，自动进入转接流程。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131.ui_131_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_131_info_1 -> ui_131_act_1 [style=invis];
}
`;case`ui001NF-131-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-131-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_131 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-131 调用反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_131_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-131-信息设计-001 调用异常提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：异常状态说明。覆盖加载态（调用中）、错误态（模型不可用）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131.ui_131_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-131-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-131-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_131 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-131 调用反馈</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_131_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-131-交互设计-001 异常反馈</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">异常时界面不出现空白回复，自动进入转接流程。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_131.ui_131.ui_131_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-132`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-132",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_132 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-132 转人工告知</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_132_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-132-信息设计-001 等待告知信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：等待说明与失败原因摘要。覆盖加载态（建单中）、错误态（建单失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132.ui_132_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_132_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-132-交互设计-001 告警查看</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员在控制台查看告警并接手工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132.ui_132_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_132_info_1 -> ui_132_act_1 [style=invis];
}
`;case`ui001NF-132-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-132-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_132 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-132 转人工告知</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_132_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-132-信息设计-001 等待告知信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：等待说明与失败原因摘要。覆盖加载态（建单中）、错误态（建单失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132.ui_132_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui001NF-132-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui001NF-132-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_132 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-132 转人工告知</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_132_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-132-交互设计-001 告警查看</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员在控制台查看告警并接手工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_132.ui_132.ui_132_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-211`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-211",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_211 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-211 素材上传</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_211_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-211-信息设计-001 上传表单信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材文件、来源标注。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.ui_211_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_211_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-211-交互设计-001 上传提交</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">上传后立即显示扫描进度，支持批量上传。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.ui_211_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_211_info_1 -> ui_211_act_1 [style=invis];
}
`;case`ui002F-211-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-211-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_211 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-211 素材上传</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_211_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-211-信息设计-001 上传表单信息</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材文件、来源标注。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.ui_211_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-211-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-211-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_211 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-211 素材上传</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_211_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-211-交互设计-001 上传提交</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">上传后立即显示扫描进度，支持批量上传。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_211.ui_211.ui_211_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-221`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-221",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_221 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-221 审阅工作台</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            ui_221_info_1 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-221-信息设计-001 候选条目列表</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材标识、来源、扫描状态。覆盖空态（暂无候选）、加载态（载入中）。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.ui_221_info_1",
                likec4_level=1,
                margin="0.278,0.306",
                width=4.445];
            ui_221_info_2 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-221-信息设计-002 决策记录字段</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：决策结果、驳回理由。驳回时理由必填。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.ui_221_info_2",
                likec4_level=1,
                margin="0.278,0.306",
                width=4.445];
        }
        ui_221_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-221-交互设计-001 批准驳回操作</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">逐条批准或驳回，驳回需先填理由再提交；决策不可撤销需二次确认。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.ui_221_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_221_info_1 -> ui_221_act_1 [style=invis];
    }
}
`;case`ui002F-221-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-221-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_221 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-221 审阅工作台</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_221_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-221-信息设计-001 候选条目列表</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材标识、来源、扫描状态。覆盖空态（暂无候选）、加载态（载入中）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.ui_221_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-221-info-2`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-221-info-2",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_221 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-221 审阅工作台</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_221_info_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-221-信息设计-002 决策记录字段</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：决策结果、驳回理由。驳回时理由必填。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.ui_221_info_2",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-221-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-221-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_221 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-221 审阅工作台</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_221_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-221-交互设计-001 批准驳回操作</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">逐条批准或驳回，驳回需先填理由再提交；决策不可撤销需二次确认。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_221.ui_221.ui_221_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-231`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-231",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_231 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-231 巡检状态</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_231.ui_231",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_231_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-231-信息设计-001 新鲜度状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：新鲜度天数。覆盖正常态（阈值内）、异常态（超阈值标红）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.ui_231.ui_231_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_231_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-231-交互设计-001 触发巡检</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">巡检自动定期执行，也支持手动触发；结果即时刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.ui_231.ui_231_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_231_info_1 -> ui_231_act_1 [style=invis];
}
`;case`ui002F-231-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-231-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_231 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-231 巡检状态</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_231.ui_231",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_231_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-231-信息设计-001 新鲜度状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：新鲜度天数。覆盖正常态（阈值内）、异常态（超阈值标红）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.ui_231.ui_231_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-231-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-231-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_231 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-231 巡检状态</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_231.ui_231",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_231_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-231-交互设计-001 触发巡检</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">巡检自动定期执行，也支持手动触发；结果即时刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_231.ui_231.ui_231_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-232`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-232",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_232 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-232 告警呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_232.ui_232",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_232_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-232-信息设计-001 告警列表</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：问题条目标识、新鲜度天数、异常原因。覆盖空态（无异常）、异常态（列出新问题）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.ui_232.ui_232_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_232_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-232-交互设计-001 告警处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从告警条目直达修复入口，处理后标记下线。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.ui_232.ui_232_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_232_info_1 -> ui_232_act_1 [style=invis];
}
`;case`ui002F-232-info-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-232-info-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_232 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-232 告警呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_232.ui_232",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_232_info_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-232-信息设计-001 告警列表</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：问题条目标识、新鲜度天数、异常原因。覆盖空态（无异常）、异常态（列出新问题）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.ui_232.ui_232_info_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`ui002F-232-act-1`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="ui002F-232-act-1",
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui_232 {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-232 告警呈现</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_232.ui_232",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_232_act_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-232-交互设计-001 告警处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从告警条目直达修复入口，处理后标记下线。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_232.ui_232.ui_232_act_1",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`dfd001F-src001-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2214pt" height="210pt"
 viewBox="0.00 0.00 2214.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- src_001 -->
<g id="node1" class="node">
<title>src_001</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-180 0,-180 0,0 330.05,0 330.05,-180"/>
<text xml:space="preserve" text-anchor="start" x="54.44" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="58.74" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="65" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- in_chatmessage -->
<g id="node2" class="node">
<title>in_chatmessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1000.17,-180 581.63,-180 581.63,0 1000.17,0 1000.17,-180"/>
<text xml:space="preserve" text-anchor="start" x="708.1" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;001 客户提问入参</text>
<text xml:space="preserve" text-anchor="start" x="601.69" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</text>
</g>
<!-- cvt_normalize -->
<g id="node3" class="node">
<title>cvt_normalize</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1598.98,-180 1194.18,-180 1194.18,0 1598.98,0 1598.98,-180"/>
<text xml:space="preserve" text-anchor="start" x="1287.11" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;001 提问归一化转换器</text>
<text xml:space="preserve" text-anchor="start" x="1218.2" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN&#45;001 与</text>
<text xml:space="preserve" text-anchor="start" x="1294.88" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">POD&#45;001→OUT&#45;001 两组映射。</text>
</g>
<!-- biz_query -->
<g id="node4" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2184.39,-180 1835.01,-180 1835.01,0 2184.39,0 2184.39,-180"/>
<text xml:space="preserve" text-anchor="start" x="1921.34" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="1855.07" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="1920.1" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- src_001&#45;&gt;in_chatmessage -->
<g id="edge1" class="edge">
<title>src_001&#45;&gt;in_chatmessage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.94,-90C403.86,-90 492.21,-90 571.63,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="571.25,-92.63 578.75,-90 571.25,-87.38 571.25,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-93 393.05,-125.8 417.05,-125.8 417.05,-93 393.05,-93"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-93 420.05,-125.8 518.63,-125.8 518.63,-93 420.05,-93"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">解密产出 IN&#45;001</text>
</g>
<!-- in_chatmessage&#45;&gt;cvt_normalize -->
<g id="edge2" class="edge">
<title>in_chatmessage&#45;&gt;cvt_normalize</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1000.08,-90C1059.54,-90 1124.38,-90 1184.05,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1183.82,-92.63 1191.32,-90 1183.82,-87.38 1183.82,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1063.17,-93 1063.17,-125.8 1087.17,-125.8 1087.17,-93 1063.17,-93"/>
<text xml:space="preserve" text-anchor="start" x="1071.28" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1090.17,-93 1090.17,-125.8 1131.18,-125.8 1131.18,-93 1090.17,-93"/>
<text xml:space="preserve" text-anchor="start" x="1093.17" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">归一化</text>
</g>
<!-- cvt_normalize&#45;&gt;biz_query -->
<g id="edge3" class="edge">
<title>cvt_normalize&#45;&gt;biz_query</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1598.96,-90C1671.71,-90 1753.43,-90 1824.63,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1824.53,-92.63 1832.03,-90 1824.53,-87.38 1824.53,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1661.98,-93 1661.98,-125.8 1685.98,-125.8 1685.98,-93 1661.98,-93"/>
<text xml:space="preserve" text-anchor="start" x="1670.09" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1688.98,-93 1688.98,-125.8 1772.01,-125.8 1772.01,-93 1688.98,-93"/>
<text xml:space="preserve" text-anchor="start" x="1691.98" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">转为 BIZ&#45;001</text>
</g>
</g>
</svg>
`;case`dfd001F-src002-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1115pt" height="500pt"
 viewBox="0.00 0.00 1115.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_002 -->
<g id="node1" class="node">
<title>src_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="495.13,-325 0,-325 0,-145 495.13,-145 495.13,-325"/>
<text xml:space="preserve" text-anchor="start" x="161.98" y="-265" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="77.53" y="-242" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js — 跨阶段编排：自</text>
<text xml:space="preserve" text-anchor="start" x="230.47" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">I&#45;001</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">入口分发，决定走自动应答（I&#45;002→I&#45;003）还是转人工（I&#45;011）。主属</text>
<text xml:space="preserve" text-anchor="start" x="191.71" y="-188" font-family="Arial" font-size="15.00" fill="#bfdbfe">UI&#45;001 入口分发。</text>
</g>
<!-- biz_query -->
<g id="node2" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1085.2,-470 735.81,-470 735.81,-290 1085.2,-290 1085.2,-470"/>
<text xml:space="preserve" text-anchor="start" x="822.14" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="755.87" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="820.9" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- pod_ticket -->
<g id="node3" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1073.95,-180 747.06,-180 747.06,0 1073.95,0 1073.95,-180"/>
<text xml:space="preserve" text-anchor="start" x="807.7" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="767.11" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="843.41" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- src_002&#45;&gt;biz_query -->
<g id="edge1" class="edge">
<title>src_002&#45;&gt;biz_query</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M504.58,-291.17C582.01,-308.15 665.19,-326.4 735.9,-341.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="505.52,-288.68 497.63,-289.64 504.39,-293.81 505.52,-288.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="563.96,-327.75 563.96,-360.55 587.96,-360.55 587.96,-327.75 563.96,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="572.07" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.96,-327.75 590.96,-360.55 666.98,-360.55 666.98,-327.75 590.96,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="593.96" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">查询进入编排</text>
</g>
<!-- src_002&#45;&gt;pod_ticket -->
<g id="edge2" class="edge">
<title>src_002&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M494.67,-181.01C575.46,-163.28 663.46,-143.98 737.53,-127.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="737.7,-130.38 744.47,-126.21 736.58,-125.25 737.7,-130.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="558.13,-169.85 558.13,-202.65 582.13,-202.65 582.13,-169.85 558.13,-169.85"/>
<text xml:space="preserve" text-anchor="start" x="566.24" y="-183.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="585.13,-169.85 585.13,-202.65 672.81,-202.65 672.81,-169.85 585.13,-169.85"/>
<text xml:space="preserve" text-anchor="start" x="588.13" y="-180.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">低置信度落工单</text>
</g>
</g>
</svg>
`;case`dfd001F-src003-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1021pt" height="500pt"
 viewBox="0.00 0.00 1021.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_003 -->
<g id="node1" class="node">
<title>src_003</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="389.27,-325 0,-325 0,-145 389.27,-145 389.27,-325"/>
<text xml:space="preserve" text-anchor="start" x="100.72" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="123.79" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- biz_query -->
<g id="node2" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="991.01,-470 641.62,-470 641.62,-290 991.01,-290 991.01,-470"/>
<text xml:space="preserve" text-anchor="start" x="727.96" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="661.68" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="726.72" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- out_answer -->
<g id="node3" class="node">
<title>out_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="976.34,-180 656.3,-180 656.3,0 976.34,0 976.34,-180"/>
<text xml:space="preserve" text-anchor="start" x="722.41" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;001 答复出参视图</text>
<text xml:space="preserve" text-anchor="start" x="710.03" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="728.8" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向企业微信会话的答复载荷。</text>
</g>
<!-- src_003&#45;&gt;biz_query -->
<g id="edge1" class="edge">
<title>src_003&#45;&gt;biz_query</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M399.16,-282.62C477.56,-300.97 566.3,-321.73 641.64,-339.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="400.01,-280.13 392.11,-280.97 398.81,-285.24 400.01,-280.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="452.27,-327.75 452.27,-360.55 476.27,-360.55 476.27,-327.75 452.27,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="460.38" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="479.27,-327.75 479.27,-360.55 578.62,-360.55 578.62,-327.75 479.27,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="482.27" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">候选进入应答循环</text>
</g>
<!-- src_003&#45;&gt;out_answer -->
<g id="edge2" class="edge">
<title>src_003&#45;&gt;out_answer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M389.16,-189.72C471.57,-170.43 566.83,-148.14 646.36,-129.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="646.82,-132.12 653.52,-127.86 645.62,-127.01 646.82,-132.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="456.55,-178.49 456.55,-211.29 480.55,-211.29 480.55,-178.49 456.55,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="464.66" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="483.55,-178.49 483.55,-211.29 574.35,-211.29 574.35,-178.49 483.55,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="486.55" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">组装 OUT&#45;001</text>
</g>
</g>
</svg>
`;case`dfd001F-src004-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="950pt" height="500pt"
 viewBox="0.00 0.00 950.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_004 -->
<g id="node1" class="node">
<title>src_004</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-325 0,-325 0,-145 330.05,-145 330.05,-325"/>
<text xml:space="preserve" text-anchor="start" x="87.78" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="43.34" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="96.26" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- biz_query -->
<g id="node2" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="920.12,-470 570.73,-470 570.73,-290 920.12,-290 920.12,-470"/>
<text xml:space="preserve" text-anchor="start" x="657.06" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="590.79" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="655.82" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- pod_ticket -->
<g id="node3" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="908.87,-180 581.98,-180 581.98,0 908.87,0 908.87,-180"/>
<text xml:space="preserve" text-anchor="start" x="642.62" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="602.03" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="678.33" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- src_004&#45;&gt;biz_query -->
<g id="edge1" class="edge">
<title>src_004&#45;&gt;biz_query</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M339.61,-278.52C412.72,-296.85 497.64,-318.13 570.76,-336.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="340.69,-276.08 332.77,-276.8 339.41,-281.17 340.69,-276.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-323.49 393.05,-356.29 417.05,-356.29 417.05,-323.49 393.05,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-323.49 420.05,-356.29 507.73,-356.29 507.73,-323.49 420.05,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">查询置信度判定</text>
</g>
<!-- src_004&#45;&gt;pod_ticket -->
<g id="edge2" class="edge">
<title>src_004&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.84,-193.93C405.59,-174.94 495.58,-152.38 572.33,-133.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="572.53,-135.8 579.17,-131.43 571.26,-130.7 572.53,-135.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-178.49 393.05,-211.29 417.05,-211.29 417.05,-178.49 393.05,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-178.49 420.05,-211.29 507.73,-211.29 507.73,-178.49 420.05,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">不足时标记工单</text>
</g>
</g>
</svg>
`;case`dfd001F-src005-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="998pt" height="509pt"
 viewBox="0.00 0.00 998.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 494.05)">
<!-- src_005 -->
<g id="node1" class="node">
<title>src_005</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="372.59,-325 0,-325 0,-145 372.59,-145 372.59,-325"/>
<text xml:space="preserve" text-anchor="start" x="63.49" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="58.34" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问，服务 I&#45;001&#45;2 检索步骤。</text>
</g>
<!-- biz_query -->
<g id="node2" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="968.1,-479 618.71,-479 618.71,-299 968.1,-299 968.1,-479"/>
<text xml:space="preserve" text-anchor="start" x="705.04" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="638.77" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="703.8" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- ext_ragflow -->
<g id="node3" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="953.42,-180 633.38,-180 633.38,0 953.42,0 953.42,-180"/>
<text xml:space="preserve" text-anchor="start" x="750.62" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="737.14" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- src_005&#45;&gt;biz_query -->
<g id="edge1" class="edge">
<title>src_005&#45;&gt;biz_query</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M382.71,-284.73C458.68,-304.07 545,-326.03 618.74,-344.8"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="383.4,-282.2 375.48,-282.89 382.1,-287.29 383.4,-282.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.81,-328.79 455.81,-361.59 479.81,-361.59 479.81,-328.79 455.81,-328.79"/>
<text xml:space="preserve" text-anchor="start" x="463.92" y="-341.99" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482.81,-328.79 482.81,-361.59 535.49,-361.59 535.49,-328.79 482.81,-328.79"/>
<text xml:space="preserve" text-anchor="start" x="485.81" y="-339.59" font-family="Arial" font-size="14.00" fill="#eff5fd">发起检索</text>
</g>
<!-- src_005&#45;&gt;ext_ragflow -->
<g id="edge2" class="edge">
<title>src_005&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M372.55,-190.61C452.52,-171.44 545.44,-149.18 623.5,-130.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="623.81,-133.1 630.49,-128.8 622.58,-127.99 623.81,-133.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.59,-178.49 435.59,-211.29 459.59,-211.29 459.59,-178.49 435.59,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="443.69" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462.59,-178.49 462.59,-211.29 555.71,-211.29 555.71,-178.49 462.59,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="465.59" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求 RAGFlow</text>
</g>
<!-- src_005&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>src_005&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M312.99,-139.56C349.65,-116.92 391.06,-95.94 432.59,-84.2 496.76,-66.05 569.98,-64.05 633.55,-67.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="311.79,-137.21 306.83,-143.42 314.58,-141.66 311.79,-137.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.81,-87.2 455.81,-120 479.81,-120 479.81,-87.2 455.81,-87.2"/>
<text xml:space="preserve" text-anchor="start" x="463.92" y="-100.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482.81,-87.2 482.81,-120 535.49,-120 535.49,-87.2 482.81,-87.2"/>
<text xml:space="preserve" text-anchor="start" x="485.81" y="-98" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选</text>
</g>
</g>
</svg>
`;case`dfd001F-src006-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="989pt" height="500pt"
 viewBox="0.00 0.00 989.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_006 -->
<g id="node1" class="node">
<title>src_006</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="426.76,-325 0,-325 0,-145 426.76,-145 426.76,-325"/>
<text xml:space="preserve" text-anchor="start" x="127.8" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- pod_ticket -->
<g id="node2" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="959.33,-470 632.43,-470 632.43,-290 959.33,-290 959.33,-470"/>
<text xml:space="preserve" text-anchor="start" x="693.07" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="652.49" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="728.78" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- dao_store -->
<g id="node3" class="node">
<title>dao_store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M958.05,-163.64C958.05,-172.67 885.37,-180 795.88,-180 706.39,-180 633.7,-172.67 633.7,-163.64 633.7,-163.64 633.7,-16.36 633.7,-16.36 633.7,-7.33 706.39,0 795.88,0 885.37,0 958.05,-7.33 958.05,-16.36 958.05,-16.36 958.05,-163.64 958.05,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M958.05,-163.64C958.05,-154.61 885.37,-147.27 795.88,-147.27 706.39,-147.27 633.7,-154.61 633.7,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="701.41" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;001 本地存储访问</text>
<text xml:space="preserve" text-anchor="start" x="653.76" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</text>
</g>
<!-- src_006&#45;&gt;pod_ticket -->
<g id="edge1" class="edge">
<title>src_006&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M436.42,-290.46C501.65,-306.76 571.76,-324.27 632.52,-339.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="437.27,-287.97 429.35,-288.7 435.99,-293.06 437.27,-287.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.76,-323.49 489.76,-356.29 513.76,-356.29 513.76,-323.49 489.76,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="497.86" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="516.76,-323.49 516.76,-356.29 569.43,-356.29 569.43,-323.49 516.76,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="519.76" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">工单数据</text>
</g>
<!-- src_006&#45;&gt;dao_store -->
<g id="edge2" class="edge">
<title>src_006&#45;&gt;dao_store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M426.42,-182.04C491,-165.9 561.16,-148.38 622.77,-132.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="623.4,-135.54 630.04,-131.18 622.12,-130.45 623.4,-135.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.76,-169.85 489.76,-202.65 513.76,-202.65 513.76,-169.85 489.76,-169.85"/>
<text xml:space="preserve" text-anchor="start" x="497.86" y="-183.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="516.76,-169.85 516.76,-202.65 569.43,-202.65 569.43,-169.85 516.76,-169.85"/>
<text xml:space="preserve" text-anchor="start" x="519.76" y="-180.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">写入工单</text>
</g>
</g>
</svg>
`;case`dfd001F-src007-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1549pt" height="500pt"
 viewBox="0.00 0.00 1549.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_007 -->
<g id="node1" class="node">
<title>src_007</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="437.58,-325 0,-325 0,-145 437.58,-145 437.58,-325"/>
<text xml:space="preserve" text-anchor="start" x="141.55" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- pod_ticket -->
<g id="node2" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="970.15,-470 643.26,-470 643.26,-290 970.15,-290 970.15,-470"/>
<text xml:space="preserve" text-anchor="start" x="703.9" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="663.31" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="739.61" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- dao_store -->
<g id="node3" class="node">
<title>dao_store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M968.88,-163.64C968.88,-172.67 896.19,-180 806.7,-180 717.22,-180 644.53,-172.67 644.53,-163.64 644.53,-163.64 644.53,-16.36 644.53,-16.36 644.53,-7.33 717.22,0 806.7,0 896.19,0 968.88,-7.33 968.88,-16.36 968.88,-16.36 968.88,-163.64 968.88,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M968.88,-163.64C968.88,-154.61 896.19,-147.27 806.7,-147.27 717.22,-147.27 644.53,-154.61 644.53,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="712.23" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;001 本地存储访问</text>
<text xml:space="preserve" text-anchor="start" x="664.59" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</text>
</g>
<!-- out_answer -->
<g id="node4" class="node">
<title>out_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1519.2,-180 1199.16,-180 1199.16,0 1519.2,0 1519.2,-180"/>
<text xml:space="preserve" text-anchor="start" x="1265.27" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;001 答复出参视图</text>
<text xml:space="preserve" text-anchor="start" x="1252.9" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="1271.67" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向企业微信会话的答复载荷。</text>
</g>
<!-- src_007&#45;&gt;pod_ticket -->
<g id="edge1" class="edge">
<title>src_007&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M447.58,-291.37C512.95,-307.55 582.88,-324.86 643.44,-339.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="448.4,-288.87 440.49,-289.62 447.14,-293.97 448.4,-288.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="500.58,-327.75 500.58,-360.55 524.58,-360.55 524.58,-327.75 500.58,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="508.69" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="527.58,-327.75 527.58,-360.55 580.26,-360.55 580.26,-327.75 527.58,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="530.58" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取工单</text>
</g>
<!-- src_007&#45;&gt;dao_store -->
<g id="edge2" class="edge">
<title>src_007&#45;&gt;dao_store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M437.55,-181.11C502.3,-165.09 572.31,-147.76 633.72,-132.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="634.31,-135.12 640.96,-130.77 633.04,-130.03 634.31,-135.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="512.25,-165.5 512.25,-198.3 536.25,-198.3 536.25,-165.5 512.25,-165.5"/>
<text xml:space="preserve" text-anchor="start" x="520.36" y="-178.7" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="539.25,-165.5 539.25,-198.3 568.59,-198.3 568.59,-165.5 539.25,-165.5"/>
<text xml:space="preserve" text-anchor="start" x="542.25" y="-176.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">落盘</text>
</g>
<!-- dao_store&#45;&gt;out_answer -->
<g id="edge3" class="edge">
<title>dao_store&#45;&gt;out_answer</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M969.52,-90C1038.6,-90 1119.24,-90 1189.1,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1188.8,-92.63 1196.3,-90 1188.8,-87.38 1188.8,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1033.15,-93 1033.15,-125.8 1057.15,-125.8 1057.15,-93 1033.15,-93"/>
<text xml:space="preserve" text-anchor="start" x="1041.26" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1060.15,-93 1060.15,-125.8 1136.16,-125.8 1136.16,-93 1060.15,-93"/>
<text xml:space="preserve" text-anchor="start" x="1063.15" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">读出答复内容</text>
</g>
</g>
</svg>
`;case`dfd001NF-src101-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="924pt" height="500pt"
 viewBox="0.00 0.00 924.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_101 -->
<g id="node1" class="node">
<title>src_101</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-325 0,-325 0,-145 330.05,-145 330.05,-325"/>
<text xml:space="preserve" text-anchor="start" x="71.11" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="55.81" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="90.01" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- in_probequery -->
<g id="node2" class="node">
<title>in_probequery</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="893.89,-470 573.85,-470 573.85,-290 893.89,-290 893.89,-470"/>
<text xml:space="preserve" text-anchor="start" x="651.07" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;101 状态探测入参</text>
<text xml:space="preserve" text-anchor="start" x="624.66" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="652.6" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">控制台发起的集成状态查询。</text>
</g>
<!-- out_status -->
<g id="node3" class="node">
<title>out_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="893.89,-180 573.85,-180 573.85,0 893.89,0 893.89,-180"/>
<text xml:space="preserve" text-anchor="start" x="639.96" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;101 状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="624.66" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="665.1" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的状态载荷。</text>
</g>
<!-- src_101&#45;&gt;in_probequery -->
<g id="edge1" class="edge">
<title>src_101&#45;&gt;in_probequery</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M339.96,-279.49C414.63,-298.59 501.27,-320.76 574.16,-339.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="340.83,-277.01 332.91,-277.69 339.53,-282.09 340.83,-277.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="412.11,-323.49 412.11,-356.29 436.11,-356.29 436.11,-323.49 412.11,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="420.22" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="439.11,-323.49 439.11,-356.29 491.79,-356.29 491.79,-323.49 439.11,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="442.11" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">入参进入</text>
</g>
<!-- src_101&#45;&gt;out_status -->
<g id="edge2" class="edge">
<title>src_101&#45;&gt;out_status</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.98,-193.06C403.52,-174.25 490.19,-152.08 564.26,-133.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="564.62,-135.75 571.23,-131.35 563.31,-130.66 564.62,-135.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-178.49 393.05,-211.29 417.05,-211.29 417.05,-178.49 393.05,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-178.49 420.05,-211.29 510.85,-211.29 510.85,-178.49 420.05,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">产出 OUT&#45;101</text>
</g>
</g>
</svg>
`;case`dfd001NF-src102-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="930pt" height="500pt"
 viewBox="0.00 0.00 930.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_102 -->
<g id="node1" class="node">
<title>src_102</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-325 0,-325 0,-145 330.05,-145 330.05,-325"/>
<text xml:space="preserve" text-anchor="start" x="87.78" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="56.23" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="52.5" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- biz_proberesult -->
<g id="node2" class="node">
<title>biz_proberesult</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="900.08,-470 559.06,-470 559.06,-290 900.08,-290 900.08,-470"/>
<text xml:space="preserve" text-anchor="start" x="641.21" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;101 探测结果对象</text>
<text xml:space="preserve" text-anchor="start" x="579.12" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="608.71" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载条目数、响应耗时与调用结果判定。</text>
</g>
<!-- pod_alert -->
<g id="node3" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="893.02,-180 566.13,-180 566.13,0 893.02,0 893.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="626.76" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="586.18" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="665.39" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- src_102&#45;&gt;biz_proberesult -->
<g id="edge1" class="edge">
<title>src_102&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M339.67,-279.76C409.63,-297.79 490.05,-318.52 559.53,-336.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="340.72,-277.32 332.8,-277.99 339.41,-282.4 340.72,-277.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-323.49 393.05,-356.29 417.05,-356.29 417.05,-323.49 393.05,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-323.49 420.05,-356.29 496.06,-356.29 496.06,-323.49 420.05,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测结论判定</text>
</g>
<!-- src_102&#45;&gt;pod_alert -->
<g id="edge2" class="edge">
<title>src_102&#45;&gt;pod_alert</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.87,-192.77C400.97,-174.44 484.26,-152.97 556.28,-134.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="556.82,-136.98 563.43,-132.57 555.51,-131.9 556.82,-136.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="398.88,-178.49 398.88,-211.29 422.88,-211.29 422.88,-178.49 398.88,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="406.99" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="425.88,-178.49 425.88,-211.29 490.23,-211.29 490.23,-178.49 425.88,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="428.88" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">异常转告警</text>
</g>
</g>
</svg>
`;case`dfd001NF-src103-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="930pt" height="500pt"
 viewBox="0.00 0.00 930.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_103 -->
<g id="node1" class="node">
<title>src_103</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="353.41,-325 0,-325 0,-145 353.41,-145 353.41,-325"/>
<text xml:space="preserve" text-anchor="start" x="99.46" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="95.44" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- biz_proberesult -->
<g id="node2" class="node">
<title>biz_proberesult</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="900.11,-470 559.09,-470 559.09,-290 900.11,-290 900.11,-470"/>
<text xml:space="preserve" text-anchor="start" x="641.24" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;101 探测结果对象</text>
<text xml:space="preserve" text-anchor="start" x="579.14" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="608.74" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载条目数、响应耗时与调用结果判定。</text>
</g>
<!-- pod_alert -->
<g id="node3" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="893.04,-180 566.15,-180 566.15,0 893.04,0 893.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="626.79" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="586.21" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="665.42" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- src_103&#45;&gt;biz_proberesult -->
<g id="edge1" class="edge">
<title>src_103&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M363.27,-283.84C426.71,-300.54 497.3,-319.12 559.39,-335.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="364,-281.32 356.08,-281.95 362.66,-286.4 364,-281.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.41,-319.18 416.41,-351.98 440.41,-351.98 440.41,-319.18 416.41,-319.18"/>
<text xml:space="preserve" text-anchor="start" x="424.52" y="-332.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.41,-319.18 443.41,-351.98 496.09,-351.98 496.09,-319.18 443.41,-319.18"/>
<text xml:space="preserve" text-anchor="start" x="446.41" y="-329.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">暴露空库</text>
</g>
<!-- src_103&#45;&gt;pod_alert -->
<g id="edge2" class="edge">
<title>src_103&#45;&gt;pod_alert</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M353.15,-188.82C418.16,-171.71 491.77,-152.34 556.48,-135.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="556.87,-137.92 563.45,-133.47 555.53,-132.84 556.87,-137.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.41,-174.18 416.41,-206.98 440.41,-206.98 440.41,-174.18 416.41,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="424.52" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.41,-174.18 443.41,-206.98 496.09,-206.98 496.09,-174.18 443.41,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="446.41" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">写入告警</text>
</g>
</g>
</svg>
`;case`dfd001NF-src104-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="988pt" height="509pt"
 viewBox="0.00 0.00 988.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 494.05)">
<!-- src_104 -->
<g id="node1" class="node">
<title>src_104</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="380.91,-325 0,-325 0,-145 380.91,-145 380.91,-325"/>
<text xml:space="preserve" text-anchor="start" x="50.98" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="70.85" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- biz_proberesult -->
<g id="node2" class="node">
<title>biz_proberesult</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="957.96,-479 616.94,-479 616.94,-299 957.96,-299 957.96,-479"/>
<text xml:space="preserve" text-anchor="start" x="699.09" y="-401" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;101 探测结果对象</text>
<text xml:space="preserve" text-anchor="start" x="636.99" y="-378" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="666.59" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载条目数、响应耗时与调用结果判定。</text>
</g>
<!-- ext_ragflow -->
<g id="node3" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="947.47,-180 627.43,-180 627.43,0 947.47,0 947.47,-180"/>
<text xml:space="preserve" text-anchor="start" x="744.66" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="731.18" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- src_104&#45;&gt;biz_proberesult -->
<g id="edge3" class="edge">
<title>src_104&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M380.53,-283.94C453,-302.7 535.42,-324.03 606.97,-342.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="606.14,-345.04 614.06,-344.38 607.46,-339.96 606.14,-345.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.91,-328.79 443.91,-361.59 467.91,-361.59 467.91,-328.79 443.91,-328.79"/>
<text xml:space="preserve" text-anchor="start" x="452.02" y="-341.99" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="470.91,-328.79 470.91,-361.59 553.94,-361.59 553.94,-328.79 470.91,-328.79"/>
<text xml:space="preserve" text-anchor="start" x="473.91" y="-339.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">产出 BIZ&#45;101</text>
</g>
<!-- src_104&#45;&gt;ext_ragflow -->
<g id="edge1" class="edge">
<title>src_104&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M380.53,-188.92C456.73,-170.35 543.93,-149.1 617.93,-131.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="618.21,-133.7 624.87,-129.38 616.96,-128.6 618.21,-133.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="453.25,-174.18 453.25,-206.98 477.25,-206.98 477.25,-174.18 453.25,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="461.36" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="480.25,-174.18 480.25,-206.98 544.59,-206.98 544.59,-174.18 480.25,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="483.25" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测数据集</text>
</g>
<!-- src_104&#45;&gt;ext_ragflow -->
<g id="edge2" class="edge">
<title>src_104&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.48,-139.54C356.76,-116.9 398.82,-95.93 440.91,-84.2 500.44,-67.61 568,-65.3 627.49,-68.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="318.19,-137.25 313.18,-143.42 320.95,-141.72 318.19,-137.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="459.08,-87.2 459.08,-120 483.08,-120 483.08,-87.2 459.08,-87.2"/>
<text xml:space="preserve" text-anchor="start" x="467.19" y="-100.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="486.08,-87.2 486.08,-120 538.76,-120 538.76,-87.2 486.08,-87.2"/>
<text xml:space="preserve" text-anchor="start" x="489.08" y="-98" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回结论</text>
</g>
</g>
</svg>
`;case`dfd001NF-src105-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1113pt" height="500pt"
 viewBox="0.00 0.00 1113.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_105 -->
<g id="node1" class="node">
<title>src_105</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="354.24,-325 0,-325 0,-145 354.24,-145 354.24,-325"/>
<text xml:space="preserve" text-anchor="start" x="74.87" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- out_status -->
<g id="node2" class="node">
<title>out_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="981.5,-470 661.46,-470 661.46,-290 981.5,-290 981.5,-470"/>
<text xml:space="preserve" text-anchor="start" x="727.57" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;101 状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="712.27" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="752.72" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的状态载荷。</text>
</g>
<!-- ui_112_info_1 -->
<g id="node3" class="node">
<title>ui_112_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1083.04,-180 559.92,-180 559.92,0 1083.04,0 1083.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="681.99" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;112&#45;信息设计&#45;001 空库提示信息</text>
<text xml:space="preserve" text-anchor="start" x="583.93" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。</text>
</g>
<!-- src_105&#45;&gt;out_status -->
<g id="edge1" class="edge">
<title>src_105&#45;&gt;out_status</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M364.29,-277.02C458.45,-298.28 571.55,-323.81 661.58,-344.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="364.92,-274.48 357.03,-275.38 363.76,-279.6 364.92,-274.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="417.24,-310.5 417.24,-343.3 441.24,-343.3 441.24,-310.5 417.24,-310.5"/>
<text xml:space="preserve" text-anchor="start" x="425.35" y="-323.7" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="444.24,-310.5 444.24,-343.3 496.92,-343.3 496.92,-310.5 444.24,-310.5"/>
<text xml:space="preserve" text-anchor="start" x="447.24" y="-321.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">状态载荷</text>
</g>
<!-- src_105&#45;&gt;ui_112_info_1 -->
<g id="edge2" class="edge">
<title>src_105&#45;&gt;ui_112_info_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M354.07,-195.28C414.49,-181.64 483.59,-166.05 549.76,-151.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="550.23,-153.69 556.97,-149.48 549.07,-148.57 550.23,-153.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="417.24,-182.75 417.24,-215.55 441.24,-215.55 441.24,-182.75 417.24,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="425.35" y="-195.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="444.24,-182.75 444.24,-215.55 496.92,-215.55 496.92,-182.75 444.24,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="447.24" y="-193.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">呈现提示</text>
</g>
</g>
</svg>
`;case`dfd001NF-src106-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1012pt" height="500pt"
 viewBox="0.00 0.00 1012.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_106 -->
<g id="node1" class="node">
<title>src_106</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="426.75,-325 0,-325 0,-145 426.75,-145 426.75,-325"/>
<text xml:space="preserve" text-anchor="start" x="119.46" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- pod_alert -->
<g id="node2" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="970.55,-470 643.66,-470 643.66,-290 970.55,-290 970.55,-470"/>
<text xml:space="preserve" text-anchor="start" x="704.3" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="663.71" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="742.92" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- dao_alert -->
<g id="node3" class="node">
<title>dao_alert</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M981.78,-163.64C981.78,-172.67 903.49,-180 807.1,-180 710.72,-180 632.43,-172.67 632.43,-163.64 632.43,-163.64 632.43,-16.36 632.43,-16.36 632.43,-7.33 710.72,0 807.1,0 903.49,0 981.78,-7.33 981.78,-16.36 981.78,-16.36 981.78,-163.64 981.78,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M981.78,-163.64C981.78,-154.61 903.49,-147.27 807.1,-147.27 710.72,-147.27 632.43,-154.61 632.43,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="712.63" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;101 告警存储访问</text>
<text xml:space="preserve" text-anchor="start" x="652.48" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</text>
</g>
<!-- src_106&#45;&gt;pod_alert -->
<g id="edge1" class="edge">
<title>src_106&#45;&gt;pod_alert</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M436.84,-289.51C505.52,-306.34 579.83,-324.55 643.66,-340.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="437.6,-287 429.69,-287.76 436.35,-292.1 437.6,-287"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.75,-323.49 489.75,-356.29 513.75,-356.29 513.75,-323.49 489.75,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="497.86" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="516.75,-323.49 516.75,-356.29 569.43,-356.29 569.43,-323.49 516.75,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="519.75" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">告警数据</text>
</g>
<!-- src_106&#45;&gt;dao_alert -->
<g id="edge2" class="edge">
<title>src_106&#45;&gt;dao_alert</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M426.75,-182.96C490.62,-167.31 560.15,-150.27 622.03,-135.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="622.29,-137.74 628.95,-133.41 621.04,-132.65 622.29,-137.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.75,-169.85 489.75,-202.65 513.75,-202.65 513.75,-169.85 489.75,-169.85"/>
<text xml:space="preserve" text-anchor="start" x="497.86" y="-183.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="516.75,-169.85 516.75,-202.65 569.43,-202.65 569.43,-169.85 516.75,-169.85"/>
<text xml:space="preserve" text-anchor="start" x="519.75" y="-180.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">写入快照</text>
</g>
</g>
</svg>
`;case`dfd002F-src201-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1028pt" height="500pt"
 viewBox="0.00 0.00 1028.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_201 -->
<g id="node1" class="node">
<title>src_201</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="398.41,-325 0,-325 0,-145 398.41,-145 398.41,-325"/>
<text xml:space="preserve" text-anchor="start" x="121.96" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;201 素材路由</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 美妆素材接入接口。</text>
</g>
<!-- in_material -->
<g id="node2" class="node">
<title>in_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="997.69,-470 626.66,-470 626.66,-290 997.69,-290 997.69,-470"/>
<text xml:space="preserve" text-anchor="start" x="746.04" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;201 素材入参</text>
<text xml:space="preserve" text-anchor="start" x="646.72" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 上传素材的请求载荷。</text>
</g>
<!-- actor_operator -->
<g id="node3" class="node">
<title>actor_operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="972.19,-180 652.15,-180 652.15,0 972.19,0 972.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="778.84" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- src_201&#45;&gt;in_material -->
<g id="edge2" class="edge">
<title>src_201&#45;&gt;in_material</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M398.15,-281.98C468.16,-298.59 546.81,-317.26 616.54,-333.81"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="615.92,-336.36 623.82,-335.54 617.13,-331.25 615.92,-336.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="461.41,-323.49 461.41,-356.29 485.41,-356.29 485.41,-323.49 461.41,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="469.52" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.41,-323.49 488.41,-356.29 563.66,-356.29 563.66,-323.49 488.41,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="491.41" y="-334.29" font-family="Arial" font-size="14.00" fill="#eff5fd">产出 IN&#45;201</text>
</g>
<!-- src_201&#45;&gt;actor_operator -->
<g id="edge1" class="edge">
<title>src_201&#45;&gt;actor_operator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M408.33,-185.61C488.1,-166.67 577.77,-145.39 652.22,-127.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="407.78,-183.04 401.09,-187.32 409,-188.15 407.78,-183.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="472.7,-174.18 472.7,-206.98 496.7,-206.98 496.7,-174.18 472.7,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="480.81" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="499.7,-174.18 499.7,-206.98 552.38,-206.98 552.38,-174.18 499.7,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="502.7" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">上传素材</text>
</g>
</g>
</svg>
`;case`dfd002F-src202-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="953pt" height="500pt"
 viewBox="0.00 0.00 953.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_202 -->
<g id="node1" class="node">
<title>src_202</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-325 0,-325 0,-145 330.05,-145 330.05,-325"/>
<text xml:space="preserve" text-anchor="start" x="79.44" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;202 知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="54.98" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="71.26" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口。</text>
</g>
<!-- dao_registry -->
<g id="node2" class="node">
<title>dao_registry</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M923.2,-453.64C923.2,-462.67 844.91,-470 748.53,-470 652.14,-470 573.85,-462.67 573.85,-453.64 573.85,-453.64 573.85,-306.36 573.85,-306.36 573.85,-297.33 652.14,-290 748.53,-290 844.91,-290 923.2,-297.33 923.2,-306.36 923.2,-306.36 923.2,-453.64 923.2,-453.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M923.2,-453.64C923.2,-444.61 844.91,-437.27 748.53,-437.27 652.14,-437.27 573.85,-444.61 573.85,-453.64"/>
<text xml:space="preserve" text-anchor="start" x="654.05" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;201 文档登记访问</text>
<text xml:space="preserve" text-anchor="start" x="593.9" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</text>
</g>
<!-- out_knowledgestatus -->
<g id="node3" class="node">
<title>out_knowledgestatus</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="908.55,-180 588.51,-180 588.51,0 908.55,0 908.55,-180"/>
<text xml:space="preserve" text-anchor="start" x="637.94" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;201 知识状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="638.48" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="648.51" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的扫描与治理状态载荷。</text>
</g>
<!-- src_202&#45;&gt;dao_registry -->
<g id="edge1" class="edge">
<title>src_202&#45;&gt;dao_registry</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M339.79,-278.33C413.49,-296.71 499.22,-318.08 573,-336.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="340.79,-275.87 332.88,-276.61 339.52,-280.97 340.79,-275.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="412.11,-323.49 412.11,-356.29 436.11,-356.29 436.11,-323.49 412.11,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="420.22" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="439.11,-323.49 439.11,-356.29 491.79,-356.29 491.79,-323.49 439.11,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="442.11" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取登记</text>
</g>
<!-- src_202&#45;&gt;out_knowledgestatus -->
<g id="edge2" class="edge">
<title>src_202&#45;&gt;out_knowledgestatus</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.94,-194.13C407.73,-174.73 500.59,-151.58 578.96,-132.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="579.36,-134.64 586,-130.28 578.09,-129.54 579.36,-134.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-178.49 393.05,-211.29 417.05,-211.29 417.05,-178.49 393.05,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-178.49 420.05,-211.29 510.85,-211.29 510.85,-178.49 420.05,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">产出 OUT&#45;201</text>
</g>
</g>
</svg>
`;case`dfd002F-src203-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1564pt" height="500pt"
 viewBox="0.00 0.00 1564.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_203 -->
<g id="node1" class="node">
<title>src_203</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.55,-325 0,-325 0,-145 392.55,-145 392.55,-325"/>
<text xml:space="preserve" text-anchor="start" x="119.03" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;203 素材服务</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 素材接入规则。</text>
</g>
<!-- in_material -->
<g id="node2" class="node">
<title>in_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="973.65,-470 602.62,-470 602.62,-290 973.65,-290 973.65,-470"/>
<text xml:space="preserve" text-anchor="start" x="722" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;201 素材入参</text>
<text xml:space="preserve" text-anchor="start" x="622.67" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 上传素材的请求载荷。</text>
</g>
<!-- cvt_material -->
<g id="node3" class="node">
<title>cvt_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="978.03,-180 598.23,-180 598.23,0 978.03,0 978.03,-180"/>
<text xml:space="preserve" text-anchor="start" x="703.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;201 素材转换器</text>
<text xml:space="preserve" text-anchor="start" x="663.11" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 覆盖</text>
<text xml:space="preserve" text-anchor="start" x="622.25" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材载荷→BIZ&#45;201 与 BIZ&#45;201→POD&#45;201 两组映射。</text>
</g>
<!-- biz_candidate -->
<g id="node4" class="node">
<title>biz_candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1534.1,-180 1214.06,-180 1214.06,0 1534.1,0 1534.1,-180"/>
<text xml:space="preserve" text-anchor="start" x="1285.72" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;201 候选知识对象</text>
<text xml:space="preserve" text-anchor="start" x="1236.12" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1274.06" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载扫描出的候选条目与决策状态。</text>
</g>
<!-- src_203&#45;&gt;in_material -->
<g id="edge1" class="edge">
<title>src_203&#45;&gt;in_material</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M402.44,-285.43C467.6,-301.45 539.22,-319.06 602.81,-334.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="403.31,-282.94 395.4,-283.7 402.06,-288.04 403.31,-282.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.55,-319.18 455.55,-351.98 479.55,-351.98 479.55,-319.18 455.55,-319.18"/>
<text xml:space="preserve" text-anchor="start" x="463.66" y="-332.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482.55,-319.18 482.55,-351.98 535.23,-351.98 535.23,-319.18 482.55,-319.18"/>
<text xml:space="preserve" text-anchor="start" x="485.55" y="-329.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">入参校验</text>
</g>
<!-- src_203&#45;&gt;cvt_material -->
<g id="edge2" class="edge">
<title>src_203&#45;&gt;cvt_material</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M392.46,-187.02C455.35,-171.56 525.1,-154.41 588.25,-138.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="588.73,-141.47 595.39,-137.14 587.48,-136.38 588.73,-141.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.55,-174.18 455.55,-206.98 479.55,-206.98 479.55,-174.18 455.55,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="463.66" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482.55,-174.18 482.55,-206.98 535.23,-206.98 535.23,-174.18 482.55,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="485.55" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">交给转换</text>
</g>
<!-- cvt_material&#45;&gt;biz_candidate -->
<g id="edge3" class="edge">
<title>cvt_material&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M977.92,-90C1050.65,-90 1133.18,-90 1203.94,-90"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1203.77,-92.63 1211.27,-90 1203.77,-87.38 1203.77,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1041.03,-93 1041.03,-125.8 1065.03,-125.8 1065.03,-93 1041.03,-93"/>
<text xml:space="preserve" text-anchor="start" x="1049.14" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#d4f2ff">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068.03,-93 1068.03,-125.8 1151.06,-125.8 1151.06,-93 1068.03,-93"/>
<text xml:space="preserve" text-anchor="start" x="1071.03" y="-103.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">转为 BIZ&#45;201</text>
</g>
</g>
</svg>
`;case`dfd002F-src204-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="971pt" height="500pt"
 viewBox="0.00 0.00 971.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_204 -->
<g id="node1" class="node">
<title>src_204</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="342.56,-325 0,-325 0,-145 342.56,-145 342.56,-325"/>
<text xml:space="preserve" text-anchor="start" x="85.7" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;204 素材批处理</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;batch&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="127.52" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">批量素材接入。</text>
</g>
<!-- actor_operator -->
<g id="node2" class="node">
<title>actor_operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="904.53,-470 584.49,-470 584.49,-290 904.53,-290 904.53,-470"/>
<text xml:space="preserve" text-anchor="start" x="711.17" y="-372" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- src_203 -->
<g id="node3" class="node">
<title>src_203</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="940.79,-180 548.23,-180 548.23,0 940.79,0 940.79,-180"/>
<text xml:space="preserve" text-anchor="start" x="667.27" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;203 素材服务</text>
<text xml:space="preserve" text-anchor="start" x="588.23" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 素材接入规则。</text>
</g>
<!-- src_204&#45;&gt;actor_operator -->
<g id="edge1" class="edge">
<title>src_204&#45;&gt;actor_operator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M352.48,-280.74C427.01,-299.66 512.68,-321.41 584.79,-339.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="353.36,-278.26 345.44,-278.96 352.07,-283.34 353.36,-278.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="405.56,-314.85 405.56,-347.65 429.56,-347.65 429.56,-314.85 405.56,-314.85"/>
<text xml:space="preserve" text-anchor="start" x="413.67" y="-328.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="432.56,-314.85 432.56,-347.65 485.23,-347.65 485.23,-314.85 432.56,-314.85"/>
<text xml:space="preserve" text-anchor="start" x="435.56" y="-325.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">批量上传</text>
</g>
<!-- src_204&#45;&gt;src_203 -->
<g id="edge2" class="edge">
<title>src_204&#45;&gt;src_203</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M342.51,-191.79C404.12,-176.15 474.35,-158.32 538.63,-142.01"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="538.92,-144.64 545.54,-140.25 537.63,-139.55 538.92,-144.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="405.56,-178.49 405.56,-211.29 429.56,-211.29 429.56,-178.49 405.56,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="413.67" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="432.56,-178.49 432.56,-211.29 485.23,-211.29 485.23,-178.49 432.56,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="435.56" y="-189.29" font-family="Arial" font-size="14.00" fill="#bbfcd3">逐条接入</text>
</g>
</g>
</svg>
`;case`dfd002F-src205-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1525pt" height="500pt"
 viewBox="0.00 0.00 1525.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_205 -->
<g id="node1" class="node">
<title>src_205</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="391.77,-325 0,-325 0,-145 391.77,-145 391.77,-325"/>
<text xml:space="preserve" text-anchor="start" x="110.3" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;205 文档登记簿</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;document&#45;registry.js —</text>
<text xml:space="preserve" text-anchor="start" x="133.37" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">跟踪素材与文档标识。</text>
</g>
<!-- biz_candidate -->
<g id="node2" class="node">
<title>biz_candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="959.82,-470 639.78,-470 639.78,-290 959.82,-290 959.82,-470"/>
<text xml:space="preserve" text-anchor="start" x="711.44" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;201 候选知识对象</text>
<text xml:space="preserve" text-anchor="start" x="661.84" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="699.78" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载扫描出的候选条目与决策状态。</text>
</g>
<!-- pod_document -->
<g id="node3" class="node">
<title>pod_document</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="963.25,-180 636.36,-180 636.36,0 963.25,0 963.25,-180"/>
<text xml:space="preserve" text-anchor="start" x="705.33" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;201 文档登记实体</text>
<text xml:space="preserve" text-anchor="start" x="656.41" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="717.27" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents 数组结构对应。</text>
</g>
<!-- dao_registry -->
<g id="node4" class="node">
<title>dao_registry</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1494.94,-163.64C1494.94,-172.67 1416.65,-180 1320.26,-180 1223.88,-180 1145.59,-172.67 1145.59,-163.64 1145.59,-163.64 1145.59,-16.36 1145.59,-16.36 1145.59,-7.33 1223.88,0 1320.26,0 1416.65,0 1494.94,-7.33 1494.94,-16.36 1494.94,-16.36 1494.94,-163.64 1494.94,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1494.94,-163.64C1494.94,-154.61 1416.65,-147.27 1320.26,-147.27 1223.88,-147.27 1145.59,-154.61 1145.59,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="1225.79" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;201 文档登记访问</text>
<text xml:space="preserve" text-anchor="start" x="1165.64" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</text>
</g>
<!-- src_205&#45;&gt;biz_candidate -->
<g id="edge1" class="edge">
<title>src_205&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M401.43,-284.27C479.37,-303.05 566.96,-324.15 640.04,-341.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="402.33,-281.79 394.42,-282.59 401.1,-286.89 402.33,-281.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462.56,-327.75 462.56,-360.55 486.56,-360.55 486.56,-327.75 462.56,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="470.66" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.56,-327.75 489.56,-360.55 565.57,-360.55 565.57,-327.75 489.56,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="492.56" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">登记文档标识</text>
</g>
<!-- src_205&#45;&gt;pod_document -->
<g id="edge2" class="edge">
<title>src_205&#45;&gt;pod_document</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M391.48,-188.12C467.25,-169.87 553.34,-149.13 626.79,-131.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="626.99,-134.09 633.66,-129.78 625.76,-128.99 626.99,-134.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="454.77,-174.18 454.77,-206.98 478.77,-206.98 478.77,-174.18 454.77,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="462.88" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="481.77,-174.18 481.77,-206.98 573.36,-206.98 573.36,-174.18 481.77,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="484.77" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">生成 POD&#45;201</text>
</g>
<!-- pod_document&#45;&gt;dao_registry -->
<g id="edge3" class="edge">
<title>pod_document&#45;&gt;dao_registry</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M963.07,-90C1017.46,-90 1078.5,-90 1134.48,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1134.35,-92.63 1141.85,-90 1134.35,-87.38 1134.35,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1026.25,-93 1026.25,-125.8 1050.25,-125.8 1050.25,-93 1026.25,-93"/>
<text xml:space="preserve" text-anchor="start" x="1034.35" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1053.25,-93 1053.25,-125.8 1082.59,-125.8 1082.59,-93 1053.25,-93"/>
<text xml:space="preserve" text-anchor="start" x="1056.25" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">写入</text>
</g>
</g>
</svg>
`;case`dfd002F-src206-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="943pt" height="509pt"
 viewBox="0.00 0.00 943.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 494.05)">
<!-- src_206 -->
<g id="node1" class="node">
<title>src_206</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="355.92,-334 0,-334 0,-154 355.92,-154 355.92,-334"/>
<text xml:space="preserve" text-anchor="start" x="100.71" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;206 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="134.2" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识。</text>
</g>
<!-- ext_wiki -->
<g id="node2" class="node">
<title>ext_wiki</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="912.74,-479 592.7,-479 592.7,-299 912.74,-299 912.74,-479"/>
<text xml:space="preserve" text-anchor="start" x="711.61" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="686.05" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">生成的 wiki 候选来源。</text>
</g>
<!-- biz_candidate -->
<g id="node3" class="node">
<title>biz_candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="912.74,-180 592.7,-180 592.7,0 912.74,0 912.74,-180"/>
<text xml:space="preserve" text-anchor="start" x="664.36" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;201 候选知识对象</text>
<text xml:space="preserve" text-anchor="start" x="614.77" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="652.7" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载扫描出的候选条目与决策状态。</text>
</g>
<!-- src_206&#45;&gt;ext_wiki -->
<g id="edge1" class="edge">
<title>src_206&#45;&gt;ext_wiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.87,-288.79C428.22,-307.1 511.53,-328.19 583.01,-346.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="582.17,-348.78 590.08,-348.08 583.45,-343.69 582.17,-348.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.92,-332.49 418.92,-365.29 442.92,-365.29 442.92,-332.49 418.92,-332.49"/>
<text xml:space="preserve" text-anchor="start" x="427.02" y="-345.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="445.92,-332.49 445.92,-365.29 529.7,-365.29 529.7,-332.49 445.92,-332.49"/>
<text xml:space="preserve" text-anchor="start" x="448.92" y="-343.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取 wiki 候选</text>
</g>
<!-- src_206&#45;&gt;ext_wiki -->
<g id="edge2" class="edge">
<title>src_206&#45;&gt;ext_wiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M366.09,-222.42C420.77,-221.59 479.99,-226.17 532.7,-242.2 572.23,-254.22 611.11,-276.01 644.88,-299.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="366.05,-219.79 358.6,-222.58 366.16,-225.04 366.05,-219.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="434.47,-245.2 434.47,-278 458.47,-278 458.47,-245.2 434.47,-245.2"/>
<text xml:space="preserve" text-anchor="start" x="442.58" y="-258.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="461.47,-245.2 461.47,-278 514.15,-278 514.15,-245.2 461.47,-245.2"/>
<text xml:space="preserve" text-anchor="start" x="464.47" y="-256" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选</text>
</g>
<!-- src_206&#45;&gt;biz_candidate -->
<g id="edge3" class="edge">
<title>src_206&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.9,-175.84C376,-169.1 396.31,-162.72 415.92,-157.2 469.55,-142.11 528.92,-129.06 582.63,-118.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="583.1,-121.16 589.97,-117.16 582.11,-116.01 583.1,-121.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.8,-160.2 422.8,-193 446.8,-193 446.8,-160.2 422.8,-160.2"/>
<text xml:space="preserve" text-anchor="start" x="430.91" y="-173.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="449.8,-160.2 449.8,-193 525.82,-193 525.82,-160.2 449.8,-160.2"/>
<text xml:space="preserve" text-anchor="start" x="452.8" y="-171" font-family="Arial" font-size="14.00" fill="#c9c9c9">产出候选对象</text>
</g>
</g>
</svg>
`;case`dfd002F-src207-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="972pt" height="500pt"
 viewBox="0.00 0.00 972.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- src_207 -->
<g id="node1" class="node">
<title>src_207</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="385.95,-325 0,-325 0,-145 385.95,-145 385.95,-325"/>
<text xml:space="preserve" text-anchor="start" x="115.73" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;207 知识治理</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="134.63" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 发布决策与治理。</text>
</g>
<!-- biz_candidate -->
<g id="node2" class="node">
<title>biz_candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="938.43,-470 618.39,-470 618.39,-290 938.43,-290 938.43,-470"/>
<text xml:space="preserve" text-anchor="start" x="690.05" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;201 候选知识对象</text>
<text xml:space="preserve" text-anchor="start" x="640.46" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="678.39" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载扫描出的候选条目与决策状态。</text>
</g>
<!-- pod_document -->
<g id="node3" class="node">
<title>pod_document</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="941.86,-180 614.97,-180 614.97,0 941.86,0 941.86,-180"/>
<text xml:space="preserve" text-anchor="start" x="683.94" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;201 文档登记实体</text>
<text xml:space="preserve" text-anchor="start" x="635.02" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="695.88" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents 数组结构对应。</text>
</g>
<!-- src_207&#45;&gt;biz_candidate -->
<g id="edge1" class="edge">
<title>src_207&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M395.6,-285.11C468.54,-303.24 549.82,-323.44 618.57,-340.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="396.67,-282.67 388.76,-283.41 395.41,-287.77 396.67,-282.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="448.95,-323.49 448.95,-356.29 472.95,-356.29 472.95,-323.49 448.95,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="457.06" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="475.95,-323.49 475.95,-356.29 551.97,-356.29 551.97,-323.49 475.95,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="478.95" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">候选进入治理</text>
</g>
<!-- src_207&#45;&gt;pod_document -->
<g id="edge2" class="edge">
<title>src_207&#45;&gt;pod_document</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M385.82,-187.32C456.58,-169.74 536.24,-149.94 605.15,-132.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="605.66,-135.39 612.3,-131.03 604.39,-130.3 605.66,-135.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="454.79,-174.18 454.79,-206.98 478.79,-206.98 478.79,-174.18 454.79,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="462.9" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="481.79,-174.18 481.79,-206.98 546.13,-206.98 546.13,-174.18 481.79,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="484.79" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">批准后登记</text>
</g>
</g>
</svg>
`;case`dfd002F-src208-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="946pt" height="210pt"
 viewBox="0.00 0.00 946.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- src_208 -->
<g id="node1" class="node">
<title>src_208</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="355.08,-180 0,-180 0,0 355.08,0 355.08,-180"/>
<text xml:space="preserve" text-anchor="start" x="100.29" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;208 知识同步</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="80.85" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到 RAGFlow。</text>
</g>
<!-- ext_ragflow2 -->
<g id="node2" class="node">
<title>ext_ragflow2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="915.8,-180 595.76,-180 595.76,0 915.8,0 915.8,-180"/>
<text xml:space="preserve" text-anchor="start" x="713" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="699.52" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识库与检索服务。</text>
</g>
<!-- src_208&#45;&gt;ext_ragflow2 -->
<g id="edge1" class="edge">
<title>src_208&#45;&gt;ext_ragflow2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M354.95,-90C428.43,-90 513.38,-90 586.03,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="585.67,-92.63 593.17,-90 585.67,-87.38 585.67,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.08,-93 418.08,-125.8 442.08,-125.8 442.08,-93 418.08,-93"/>
<text xml:space="preserve" text-anchor="start" x="426.18" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="445.08,-93 445.08,-125.8 532.76,-125.8 532.76,-93 445.08,-93"/>
<text xml:space="preserve" text-anchor="start" x="448.08" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">推送已批准知识</text>
</g>
<!-- src_208&#45;&gt;ext_ragflow2 -->
<g id="edge2" class="edge">
<title>src_208&#45;&gt;ext_ragflow2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M364.94,-33.13C381.77,-29.52 398.66,-26.44 415.08,-24.2 468.22,-16.95 482.69,-16.4 535.76,-24.2 555.5,-27.1 575.93,-31.4 596.01,-36.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="364.76,-30.48 358,-34.66 365.89,-35.61 364.76,-30.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.58,-27.2 435.58,-60 459.58,-60 459.58,-27.2 435.58,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="443.69" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462.58,-27.2 462.58,-60 515.25,-60 515.25,-27.2 462.58,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="465.58" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">同步确认</text>
</g>
</g>
</svg>
`;case`dfd002F-src209-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1507pt" height="210pt"
 viewBox="0.00 0.00 1507.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- src_209 -->
<g id="node1" class="node">
<title>src_209</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="377.58,-180 0,-180 0,0 377.58,0 377.58,-180"/>
<text xml:space="preserve" text-anchor="start" x="78.21" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;209 知识生命周期视图</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;lifecycle&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="132.53" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识的晋升与下线。</text>
</g>
<!-- pod_document -->
<g id="node2" class="node">
<title>pod_document</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="921.82,-180 594.93,-180 594.93,0 921.82,0 921.82,-180"/>
<text xml:space="preserve" text-anchor="start" x="663.9" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;201 文档登记实体</text>
<text xml:space="preserve" text-anchor="start" x="614.98" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="675.84" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents 数组结构对应。</text>
</g>
<!-- dao_registry -->
<g id="node3" class="node">
<title>dao_registry</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1476.85,-163.64C1476.85,-172.67 1398.56,-180 1302.17,-180 1205.79,-180 1127.5,-172.67 1127.5,-163.64 1127.5,-163.64 1127.5,-16.36 1127.5,-16.36 1127.5,-7.33 1205.79,0 1302.17,0 1398.56,0 1476.85,-7.33 1476.85,-16.36 1476.85,-16.36 1476.85,-163.64 1476.85,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1476.85,-163.64C1476.85,-154.61 1398.56,-147.27 1302.17,-147.27 1205.79,-147.27 1127.5,-154.61 1127.5,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="1207.7" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;201 文档登记访问</text>
<text xml:space="preserve" text-anchor="start" x="1147.55" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</text>
</g>
<!-- src_209&#45;&gt;pod_document -->
<g id="edge1" class="edge">
<title>src_209&#45;&gt;pod_document</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M377.21,-90C444.18,-90 519.28,-90 584.93,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="584.85,-92.63 592.35,-90 584.85,-87.38 584.85,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="440.58,-93 440.58,-125.8 464.58,-125.8 464.58,-93 440.58,-93"/>
<text xml:space="preserve" text-anchor="start" x="448.69" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="467.58,-93 467.58,-125.8 531.93,-125.8 531.93,-93 467.58,-93"/>
<text xml:space="preserve" text-anchor="start" x="470.58" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">晋升或下线</text>
</g>
<!-- pod_document&#45;&gt;dao_registry -->
<g id="edge2" class="edge">
<title>pod_document&#45;&gt;dao_registry</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M921.56,-90C982.84,-90 1053.02,-90 1116.23,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1116.19,-92.63 1123.69,-90 1116.19,-87.38 1116.19,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="984.82,-93 984.82,-125.8 1008.82,-125.8 1008.82,-93 984.82,-93"/>
<text xml:space="preserve" text-anchor="start" x="992.93" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1011.82,-93 1011.82,-125.8 1064.5,-125.8 1064.5,-93 1011.82,-93"/>
<text xml:space="preserve" text-anchor="start" x="1014.82" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">更新登记</text>
</g>
</g>
</svg>
`;case`seq001F-i-001-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3453pt" height="500pt"
 viewBox="0.00 0.00 3453.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- actor_customer -->
<g id="node1" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-325 0,-325 0,-145 320.04,-145 320.04,-325"/>
<text xml:space="preserve" text-anchor="start" x="143.35" y="-227" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- src_001 -->
<g id="node2" class="node">
<title>src_001</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="867.43,-325 537.38,-325 537.38,-145 867.43,-145 867.43,-325"/>
<text xml:space="preserve" text-anchor="start" x="591.82" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="596.13" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="602.39" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- i_001_1 -->
<g id="node3" class="node">
<title>i_001_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1524.13,-325 1096.45,-325 1096.45,-145 1524.13,-145 1524.13,-325"/>
<text xml:space="preserve" text-anchor="start" x="1234.15" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001&#45;1 归一化提问</text>
<text xml:space="preserve" text-anchor="start" x="1116.5" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</text>
</g>
<!-- i_001_2 -->
<g id="node4" class="node">
<title>i_001_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2191.67,-325 1741.48,-325 1741.48,-145 2191.67,-145 2191.67,-325"/>
<text xml:space="preserve" text-anchor="start" x="1882.1" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001&#45;2 检索候选知识</text>
<text xml:space="preserve" text-anchor="start" x="1761.53" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</text>
</g>
<!-- i_001_3 -->
<g id="node5" class="node">
<title>i_001_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2885.76,-470 2445.57,-470 2445.57,-290 2885.76,-290 2885.76,-470"/>
<text xml:space="preserve" text-anchor="start" x="2572.86" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001&#45;3 候选排序与择优</text>
<text xml:space="preserve" text-anchor="start" x="2465.63" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</text>
</g>
<!-- src_005 -->
<g id="node6" class="node">
<title>src_005</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2851.96,-180 2479.37,-180 2479.37,0 2851.96,0 2851.96,-180"/>
<text xml:space="preserve" text-anchor="start" x="2542.86" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="2519.37" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="2537.71" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问，服务 I&#45;001&#45;2 检索步骤。</text>
</g>
<!-- ext_ragflow -->
<g id="node7" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3423.14,-180 3103.1,-180 3103.1,0 3423.14,0 3423.14,-180"/>
<text xml:space="preserve" text-anchor="start" x="3220.34" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="3206.86" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- actor_customer&#45;&gt;src_001 -->
<g id="edge1" class="edge">
<title>actor_customer&#45;&gt;src_001</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.87,-235C385.03,-235 460.66,-235 527.31,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="526.98,-237.63 534.48,-235 526.98,-232.38 526.98,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-238 383.04,-270.8 407.04,-270.8 407.04,-238 383.04,-238"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-238 410.04,-270.8 474.38,-270.8 474.38,-238 410.04,-238"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①提交提问</text>
</g>
<!-- src_001&#45;&gt;i_001_1 -->
<g id="edge2" class="edge">
<title>src_001&#45;&gt;i_001_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M867.37,-235C934.73,-235 1013.8,-235 1086.29,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1085.94,-237.63 1093.44,-235 1085.94,-232.38 1085.94,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="930.43,-238 930.43,-270.8 954.43,-270.8 954.43,-238 930.43,-238"/>
<text xml:space="preserve" text-anchor="start" x="938.54" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="957.43,-238 957.43,-270.8 1033.45,-270.8 1033.45,-238 957.43,-238"/>
<text xml:space="preserve" text-anchor="start" x="960.43" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②解密归一化</text>
</g>
<!-- i_001_1&#45;&gt;i_001_2 -->
<g id="edge3" class="edge">
<title>i_001_1&#45;&gt;i_001_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1523.72,-235C1590,-235 1663.47,-235 1731.17,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1731.02,-237.63 1738.52,-235 1731.02,-232.38 1731.02,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1587.13,-238 1587.13,-270.8 1611.13,-270.8 1611.13,-238 1587.13,-238"/>
<text xml:space="preserve" text-anchor="start" x="1595.24" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1614.13,-238 1614.13,-270.8 1678.48,-270.8 1678.48,-238 1614.13,-238"/>
<text xml:space="preserve" text-anchor="start" x="1617.13" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③发起检索</text>
</g>
<!-- i_001_2&#45;&gt;i_001_3 -->
<g id="edge7" class="edge">
<title>i_001_2&#45;&gt;i_001_3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2191.49,-281.58C2269.57,-297.82 2357.26,-316.06 2435.73,-332.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2434.91,-334.89 2442.79,-333.85 2435.98,-329.75 2434.91,-334.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2272.95,-323.49 2272.95,-356.29 2296.95,-356.29 2296.95,-323.49 2272.95,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="2281.05" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2299.95,-323.49 2299.95,-356.29 2364.29,-356.29 2364.29,-323.49 2299.95,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="2302.95" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑦排序择优</text>
</g>
<!-- i_001_2&#45;&gt;src_005 -->
<g id="edge4" class="edge">
<title>i_001_2&#45;&gt;src_005</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2191.49,-188.42C2280.92,-169.82 2382.94,-148.6 2469.3,-130.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2469.71,-133.23 2476.52,-129.14 2468.64,-128.09 2469.71,-133.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2254.67,-178.49 2254.67,-211.29 2278.67,-211.29 2278.67,-178.49 2254.67,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="2262.77" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2281.67,-178.49 2281.67,-211.29 2382.57,-211.29 2382.57,-178.49 2281.67,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="2284.67" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">④请求RAGFlow</text>
</g>
<!-- src_005&#45;&gt;ext_ragflow -->
<g id="edge5" class="edge">
<title>src_005&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2851.81,-90C2928.76,-90 3017.48,-90 3092.69,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3092.69,-92.63 3100.19,-90 3092.69,-87.38 3092.69,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2960.43,-93 2960.43,-125.8 2984.43,-125.8 2984.43,-93 2960.43,-93"/>
<text xml:space="preserve" text-anchor="start" x="2968.54" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2987.43,-93 2987.43,-125.8 3028.44,-125.8 3028.44,-93 2987.43,-93"/>
<text xml:space="preserve" text-anchor="start" x="2990.43" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑤检索</text>
</g>
<!-- src_005&#45;&gt;ext_ragflow -->
<g id="edge6" class="edge">
<title>src_005&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2861.64,-31.94C2919.91,-21.08 2984,-15.51 3043.1,-24.2 3062.84,-27.1 3083.27,-31.4 3103.36,-36.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2861.43,-29.31 2854.56,-33.31 2862.42,-34.46 2861.43,-29.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2948.76,-27.2 2948.76,-60 2972.76,-60 2972.76,-27.2 2948.76,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="2956.87" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2975.76,-27.2 2975.76,-60 3040.1,-60 3040.1,-27.2 2975.76,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="2978.76" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑥返回候选</text>
</g>
</g>
</svg>
`;case`seq001F-i-003-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2215pt" height="210pt"
 viewBox="0.00 0.00 2215.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- src_002 -->
<g id="node1" class="node">
<title>src_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="495.13,-180 0,-180 0,0 495.13,0 495.13,-180"/>
<text xml:space="preserve" text-anchor="start" x="161.98" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="77.53" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js — 跨阶段编排：自</text>
<text xml:space="preserve" text-anchor="start" x="230.47" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">I&#45;001</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">入口分发，决定走自动应答（I&#45;002→I&#45;003）还是转人工（I&#45;011）。主属</text>
<text xml:space="preserve" text-anchor="start" x="191.71" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">UI&#45;001 入口分发。</text>
</g>
<!-- i_003_1 -->
<g id="node2" class="node">
<title>i_003_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1090.15,-180 712.47,-180 712.47,0 1090.15,0 1090.15,-180"/>
<text xml:space="preserve" text-anchor="start" x="833.51" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003&#45;1 生成答复</text>
<text xml:space="preserve" text-anchor="start" x="732.53" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</text>
</g>
<!-- i_003_2 -->
<g id="node3" class="node">
<title>i_003_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1647.67,-180 1307.5,-180 1307.5,0 1647.67,0 1647.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="1409.78" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003&#45;2 下发答复</text>
<text xml:space="preserve" text-anchor="start" x="1327.55" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</text>
</g>
<!-- actor_customer -->
<g id="node4" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2185.05,-180 1865.01,-180 1865.01,0 2185.05,0 2185.05,-180"/>
<text xml:space="preserve" text-anchor="start" x="2008.36" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- src_002&#45;&gt;i_003_1 -->
<g id="edge1" class="edge">
<title>src_002&#45;&gt;i_003_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M494.96,-90C563.4,-90 636.81,-90 702.1,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="701.98,-92.63 709.48,-90 701.98,-87.38 701.98,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="558.13,-93 558.13,-125.8 582.13,-125.8 582.13,-93 558.13,-93"/>
<text xml:space="preserve" text-anchor="start" x="566.24" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="585.13,-93 585.13,-125.8 649.47,-125.8 649.47,-93 585.13,-93"/>
<text xml:space="preserve" text-anchor="start" x="588.13" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①校验通过</text>
</g>
<!-- i_003_1&#45;&gt;i_003_2 -->
<g id="edge2" class="edge">
<title>i_003_1&#45;&gt;i_003_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1089.95,-90C1156.58,-90 1231.35,-90 1297.26,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1297.24,-92.63 1304.74,-90 1297.24,-87.38 1297.24,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1153.15,-93 1153.15,-125.8 1177.15,-125.8 1177.15,-93 1153.15,-93"/>
<text xml:space="preserve" text-anchor="start" x="1161.26" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1180.15,-93 1180.15,-125.8 1244.5,-125.8 1244.5,-93 1180.15,-93"/>
<text xml:space="preserve" text-anchor="start" x="1183.15" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②答复就绪</text>
</g>
<!-- i_003_2&#45;&gt;actor_customer -->
<g id="edge3" class="edge">
<title>i_003_2&#45;&gt;actor_customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1647.43,-90C1713.36,-90 1788.82,-90 1854.79,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1854.76,-92.63 1862.26,-90 1854.76,-87.38 1854.76,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1710.67,-93 1710.67,-125.8 1734.67,-125.8 1734.67,-93 1710.67,-93"/>
<text xml:space="preserve" text-anchor="start" x="1718.77" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1737.67,-93 1737.67,-125.8 1802.01,-125.8 1802.01,-93 1737.67,-93"/>
<text xml:space="preserve" text-anchor="start" x="1740.67" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③答复送达</text>
</g>
</g>
</svg>
`;case`seq001F-i-012-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2252pt" height="210pt"
 viewBox="0.00 0.00 2252.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- src_002 -->
<g id="node1" class="node">
<title>src_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="495.13,-180 0,-180 0,0 495.13,0 495.13,-180"/>
<text xml:space="preserve" text-anchor="start" x="161.98" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="77.53" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js — 跨阶段编排：自</text>
<text xml:space="preserve" text-anchor="start" x="230.47" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">I&#45;001</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">入口分发，决定走自动应答（I&#45;002→I&#45;003）还是转人工（I&#45;011）。主属</text>
<text xml:space="preserve" text-anchor="start" x="191.71" y="-43" font-family="Arial" font-size="15.00" fill="#bfdbfe">UI&#45;001 入口分发。</text>
</g>
<!-- i_012_1 -->
<g id="node2" class="node">
<title>i_012_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1076.82,-180 724.14,-180 724.14,0 1076.82,0 1076.82,-180"/>
<text xml:space="preserve" text-anchor="start" x="816.01" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;012&#45;1 创建人工工单</text>
<text xml:space="preserve" text-anchor="start" x="744.2" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</text>
</g>
<!-- i_012_2 -->
<g id="node3" class="node">
<title>i_012_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1684.34,-180 1294.16,-180 1294.16,0 1684.34,0 1684.34,-180"/>
<text xml:space="preserve" text-anchor="start" x="1404.78" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;012&#45;2 告知客户等待</text>
<text xml:space="preserve" text-anchor="start" x="1314.22" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</text>
</g>
<!-- actor_customer -->
<g id="node4" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2221.73,-180 1901.69,-180 1901.69,0 2221.73,0 2221.73,-180"/>
<text xml:space="preserve" text-anchor="start" x="2045.04" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- src_002&#45;&gt;i_012_1 -->
<g id="edge1" class="edge">
<title>src_002&#45;&gt;i_012_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M495.11,-90C567.67,-90 645.8,-90 713.85,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="713.73,-92.63 721.23,-90 713.73,-87.38 713.73,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="558.13,-93 558.13,-125.8 582.13,-125.8 582.13,-93 558.13,-93"/>
<text xml:space="preserve" text-anchor="start" x="566.24" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="585.13,-93 585.13,-125.8 661.14,-125.8 661.14,-93 585.13,-93"/>
<text xml:space="preserve" text-anchor="start" x="588.13" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①判定转人工</text>
</g>
<!-- i_012_1&#45;&gt;i_012_2 -->
<g id="edge2" class="edge">
<title>i_012_1&#45;&gt;i_012_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1076.74,-90C1141.94,-90 1216.49,-90 1284.07,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1283.89,-92.63 1291.39,-90 1283.89,-87.38 1283.89,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1139.82,-93 1139.82,-125.8 1163.82,-125.8 1163.82,-93 1139.82,-93"/>
<text xml:space="preserve" text-anchor="start" x="1147.92" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1166.82,-93 1166.82,-125.8 1231.16,-125.8 1231.16,-93 1166.82,-93"/>
<text xml:space="preserve" text-anchor="start" x="1169.82" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②工单创建</text>
</g>
<!-- i_012_2&#45;&gt;actor_customer -->
<g id="edge3" class="edge">
<title>i_012_2&#45;&gt;actor_customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1684.18,-90C1751.48,-90 1826.35,-90 1891.5,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1891.34,-92.63 1898.84,-90 1891.34,-87.38 1891.34,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1747.34,-93 1747.34,-125.8 1771.34,-125.8 1771.34,-93 1747.34,-93"/>
<text xml:space="preserve" text-anchor="start" x="1755.45" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1774.34,-93 1774.34,-125.8 1838.69,-125.8 1838.69,-93 1774.34,-93"/>
<text xml:space="preserve" text-anchor="start" x="1777.34" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③告知等待</text>
</g>
</g>
</svg>
`;case`seq001NF-i-111-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1448pt" height="210pt"
 viewBox="0.00 0.00 1448.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- actor_ops -->
<g id="node1" class="node">
<title>actor_ops</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- i_111_1 -->
<g id="node2" class="node">
<title>i_111_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="857.42,-180 537.38,-180 537.38,0 857.42,0 857.42,-180"/>
<text xml:space="preserve" text-anchor="start" x="621.27" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111&#45;1 读取条目数</text>
<text xml:space="preserve" text-anchor="start" x="566.13" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</text>
</g>
<!-- i_111_2 -->
<g id="node3" class="node">
<title>i_111_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1418.15,-180 1098.11,-180 1098.11,0 1418.15,0 1418.15,-180"/>
<text xml:space="preserve" text-anchor="start" x="1173.65" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111&#45;2 判定零条场景</text>
<text xml:space="preserve" text-anchor="start" x="1118.51" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</text>
</g>
<!-- actor_ops&#45;&gt;i_111_1 -->
<g id="edge1" class="edge">
<title>actor_ops&#45;&gt;i_111_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.84,-90C385.23,-90 461.07,-90 527.48,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="527.1,-92.63 534.6,-90 527.1,-87.38 527.1,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 474.38,-125.8 474.38,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①发起查询</text>
</g>
<!-- i_111_1&#45;&gt;i_111_2 -->
<g id="edge2" class="edge">
<title>i_111_1&#45;&gt;i_111_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M857.39,-90C929.48,-90 1014.8,-90 1088.07,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1087.79,-92.63 1095.29,-90 1087.79,-87.38 1087.79,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="920.42,-93 920.42,-125.8 944.42,-125.8 944.42,-93 920.42,-93"/>
<text xml:space="preserve" text-anchor="start" x="928.53" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="947.42,-93 947.42,-125.8 1035.11,-125.8 1035.11,-93 947.42,-93"/>
<text xml:space="preserve" text-anchor="start" x="950.42" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②判定零条场景</text>
</g>
</g>
</svg>
`;case`seq001NF-i-121-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="955pt" height="500pt"
 viewBox="0.00 0.00 955.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- i_121_1 -->
<g id="node1" class="node">
<title>i_121_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-470 0,-470 0,-290 320.04,-290 320.04,-470"/>
<text xml:space="preserve" text-anchor="start" x="75.55" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;121&#45;1 启动超时计时</text>
<text xml:space="preserve" text-anchor="start" x="70.42" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">发起检索时同时启动 8 秒计时。</text>
</g>
<!-- i_121_2 -->
<g id="node2" class="node">
<title>i_121_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="92.22" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;121&#45;2 判定超时</text>
<text xml:space="preserve" text-anchor="start" x="35" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</text>
</g>
<!-- ext_ragflow -->
<g id="node3" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="925.1,-325 605.06,-325 605.06,-145 925.1,-145 925.1,-325"/>
<text xml:space="preserve" text-anchor="start" x="722.3" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="708.82" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- i_121_1&#45;&gt;ext_ragflow -->
<g id="edge1" class="edge">
<title>i_121_1&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.86,-341.81C404.62,-321.43 508.93,-296.35 595.17,-275.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="595.7,-278.19 602.38,-273.88 594.47,-273.08 595.7,-278.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-327.75 383.04,-360.55 407.04,-360.55 407.04,-327.75 383.04,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-327.75 410.04,-360.55 542.06,-360.55 542.06,-327.75 410.04,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">①等待 RAGFlow 响应</text>
</g>
<!-- i_121_2&#45;&gt;ext_ragflow -->
<g id="edge2" class="edge">
<title>i_121_2&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M330.02,-130.63C416.27,-151.37 520.58,-176.45 605.32,-196.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.71,-128.1 322.8,-128.9 329.48,-133.21 330.71,-128.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.88,-182.75 416.88,-215.55 440.88,-215.55 440.88,-182.75 416.88,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="424.98" y="-195.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.88,-182.75 443.88,-215.55 508.22,-215.55 508.22,-182.75 443.88,-182.75"/>
<text xml:space="preserve" text-anchor="start" x="446.88" y="-193.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">②到期判定</text>
</g>
</g>
</svg>
`;case`seq001NF-i-132-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1555pt" height="210pt"
 viewBox="0.00 0.00 1555.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- i_132_1 -->
<g id="node1" class="node">
<title>i_132_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="75.55" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;132&#45;1 生成人工工单</text>
<text xml:space="preserve" text-anchor="start" x="66.25" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把提问内容与失败原因写入工单。</text>
</g>
<!-- i_132_2 -->
<g id="node2" class="node">
<title>i_132_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="880.76,-180 560.72,-180 560.72,0 880.76,0 880.76,-180"/>
<text xml:space="preserve" text-anchor="start" x="636.27" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;132&#45;2 告知等待人工</text>
<text xml:space="preserve" text-anchor="start" x="601.97" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知已转人工，不返回空白内容。</text>
</g>
<!-- src_106 -->
<g id="node3" class="node">
<title>src_106</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1524.86,-180 1098.11,-180 1098.11,0 1524.86,0 1524.86,-180"/>
<text xml:space="preserve" text-anchor="start" x="1217.57" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="1138.11" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- i_132_1&#45;&gt;i_132_2 -->
<g id="edge1" class="edge">
<title>i_132_1&#45;&gt;i_132_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320.01,-90C392.1,-90 477.42,-90 550.68,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="550.41,-92.63 557.91,-90 550.41,-87.38 550.41,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 497.72,-125.8 497.72,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①工单创建完成</text>
</g>
<!-- i_132_2&#45;&gt;src_106 -->
<g id="edge2" class="edge">
<title>i_132_2&#45;&gt;src_106</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M880.68,-90C944.46,-90 1019.09,-90 1088.1,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1087.71,-92.63 1095.21,-90 1087.71,-87.38 1087.71,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="943.76,-93 943.76,-125.8 967.76,-125.8 967.76,-93 943.76,-93"/>
<text xml:space="preserve" text-anchor="start" x="951.87" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="970.76,-93 970.76,-125.8 1035.11,-125.8 1035.11,-93 970.76,-93"/>
<text xml:space="preserve" text-anchor="start" x="973.76" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②告警落库</text>
</g>
</g>
</svg>
`;case`seq002F-i-211-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2578pt" height="210pt"
 viewBox="0.00 0.00 2578.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- actor_operator -->
<g id="node1" class="node">
<title>actor_operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- src_201 -->
<g id="node2" class="node">
<title>src_201</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="935.8,-180 537.38,-180 537.38,0 935.8,0 935.8,-180"/>
<text xml:space="preserve" text-anchor="start" x="659.35" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;201 素材路由</text>
<text xml:space="preserve" text-anchor="start" x="577.38" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 美妆素材接入接口。</text>
</g>
<!-- i_211_1 -->
<g id="node3" class="node">
<title>i_211_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1473.18,-180 1153.14,-180 1153.14,0 1473.18,0 1473.18,-180"/>
<text xml:space="preserve" text-anchor="start" x="1245.36" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211&#45;1 登记素材</text>
<text xml:space="preserve" text-anchor="start" x="1188.14" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把上传的素材登记到文档簿，生成文档标识。</text>
</g>
<!-- i_211_2 -->
<g id="node4" class="node">
<title>i_211_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2010.57,-180 1690.53,-180 1690.53,0 2010.57,0 2010.57,-180"/>
<text xml:space="preserve" text-anchor="start" x="1766.07" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211&#45;2 抽取候选知识</text>
<text xml:space="preserve" text-anchor="start" x="1719.27" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">从素材正文中抽取可独立回答问题的候选条目。</text>
</g>
<!-- i_211_3 -->
<g id="node5" class="node">
<title>i_211_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2547.95,-180 2227.91,-180 2227.91,0 2547.95,0 2547.95,-180"/>
<text xml:space="preserve" text-anchor="start" x="2320.13" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211&#45;3 提交候选</text>
<text xml:space="preserve" text-anchor="start" x="2275.41" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把候选条目提交给治理环节，等待决策。</text>
</g>
<!-- actor_operator&#45;&gt;src_201 -->
<g id="edge1" class="edge">
<title>actor_operator&#45;&gt;src_201</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.93,-90C383.98,-90 458.75,-90 527.08,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="527.02,-92.63 534.52,-90 527.02,-87.38 527.02,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 474.38,-125.8 474.38,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①上传素材</text>
</g>
<!-- src_201&#45;&gt;i_211_1 -->
<g id="edge2" class="edge">
<title>src_201&#45;&gt;i_211_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M935.73,-90C1003.18,-90 1077.92,-90 1142.9,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1142.72,-92.63 1150.22,-90 1142.72,-87.38 1142.72,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="998.8,-93 998.8,-125.8 1022.8,-125.8 1022.8,-93 998.8,-93"/>
<text xml:space="preserve" text-anchor="start" x="1006.9" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1025.8,-93 1025.8,-125.8 1090.14,-125.8 1090.14,-93 1025.8,-93"/>
<text xml:space="preserve" text-anchor="start" x="1028.8" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②登记素材</text>
</g>
<!-- i_211_1&#45;&gt;i_211_2 -->
<g id="edge3" class="edge">
<title>i_211_1&#45;&gt;i_211_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1472.98,-90C1538.38,-90 1614.22,-90 1680.62,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1680.25,-92.63 1687.75,-90 1680.25,-87.38 1680.25,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1536.18,-93 1536.18,-125.8 1560.18,-125.8 1560.18,-93 1536.18,-93"/>
<text xml:space="preserve" text-anchor="start" x="1544.29" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1563.18,-93 1563.18,-125.8 1627.53,-125.8 1627.53,-93 1563.18,-93"/>
<text xml:space="preserve" text-anchor="start" x="1566.18" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③抽取候选</text>
</g>
<!-- i_211_2&#45;&gt;i_211_3 -->
<g id="edge4" class="edge">
<title>i_211_2&#45;&gt;i_211_3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2010.37,-90C2075.76,-90 2151.6,-90 2218.01,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2217.63,-92.63 2225.13,-90 2217.63,-87.38 2217.63,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2073.57,-93 2073.57,-125.8 2097.57,-125.8 2097.57,-93 2073.57,-93"/>
<text xml:space="preserve" text-anchor="start" x="2081.67" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2100.57,-93 2100.57,-125.8 2164.91,-125.8 2164.91,-93 2100.57,-93"/>
<text xml:space="preserve" text-anchor="start" x="2103.57" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">④提交候选</text>
</g>
</g>
</svg>
`;case`seq002F-i-221-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2005pt" height="210pt"
 viewBox="0.00 0.00 2005.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- actor_operator -->
<g id="node1" class="node">
<title>actor_operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- i_221_1 -->
<g id="node2" class="node">
<title>i_221_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="857.42,-180 537.38,-180 537.38,0 857.42,0 857.42,-180"/>
<text xml:space="preserve" text-anchor="start" x="612.93" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221&#45;1 人工审阅候选</text>
<text xml:space="preserve" text-anchor="start" x="597.39" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示候选条目供运营人员逐条审阅。</text>
</g>
<!-- i_221_2 -->
<g id="node3" class="node">
<title>i_221_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1394.81,-180 1074.77,-180 1074.77,0 1394.81,0 1394.81,-180"/>
<text xml:space="preserve" text-anchor="start" x="1166.99" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221&#45;2 记录决策</text>
<text xml:space="preserve" text-anchor="start" x="1134.77" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">记录批准或驳回，驳回需填写理由。</text>
</g>
<!-- i_221_3 -->
<g id="node4" class="node">
<title>i_221_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1974.83,-180 1647.16,-180 1647.16,0 1974.83,0 1974.83,-180"/>
<text xml:space="preserve" text-anchor="start" x="1743.19" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221&#45;3 晋升知识</text>
<text xml:space="preserve" text-anchor="start" x="1667.22" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">批准的候选进入知识库生命周期，进入可检索状态。</text>
</g>
<!-- actor_operator&#45;&gt;i_221_1 -->
<g id="edge1" class="edge">
<title>actor_operator&#45;&gt;i_221_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.84,-90C385.23,-90 461.07,-90 527.48,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="527.1,-92.63 534.6,-90 527.1,-87.38 527.1,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 474.38,-125.8 474.38,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①逐条审阅</text>
</g>
<!-- i_221_1&#45;&gt;i_221_2 -->
<g id="edge2" class="edge">
<title>i_221_1&#45;&gt;i_221_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M857.23,-90C922.62,-90 998.46,-90 1064.87,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1064.49,-92.63 1071.99,-90 1064.49,-87.38 1064.49,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="920.42,-93 920.42,-125.8 944.42,-125.8 944.42,-93 920.42,-93"/>
<text xml:space="preserve" text-anchor="start" x="928.53" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="947.42,-93 947.42,-125.8 1011.77,-125.8 1011.77,-93 947.42,-93"/>
<text xml:space="preserve" text-anchor="start" x="950.42" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②记录决策</text>
</g>
<!-- i_221_2&#45;&gt;i_221_3 -->
<g id="edge3" class="edge">
<title>i_221_2&#45;&gt;i_221_3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1394.59,-90C1469.88,-90 1559.99,-90 1637.01,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1636.77,-92.63 1644.27,-90 1636.77,-87.38 1636.77,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1457.81,-93 1457.81,-125.8 1481.81,-125.8 1481.81,-93 1457.81,-93"/>
<text xml:space="preserve" text-anchor="start" x="1465.92" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1484.81,-93 1484.81,-125.8 1584.16,-125.8 1584.16,-93 1484.81,-93"/>
<text xml:space="preserve" text-anchor="start" x="1487.81" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③批准晋升或驳回</text>
</g>
</g>
</svg>
`;case`seq002F-i-231-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="899pt" height="500pt"
 viewBox="0.00 0.00 899.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- i_231_1 -->
<g id="node1" class="node">
<title>i_231_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-470 0,-470 0,-290 320.04,-290 320.04,-470"/>
<text xml:space="preserve" text-anchor="start" x="67.21" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;231&#45;1 巡检数据集状态</text>
<text xml:space="preserve" text-anchor="start" x="41.25" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">定期探测知识库数据集的可用性与新鲜度。</text>
</g>
<!-- i_231_2 -->
<g id="node2" class="node">
<title>i_231_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="67.21" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;231&#45;2 判定新鲜度异常</text>
<text xml:space="preserve" text-anchor="start" x="41.25" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">按更新时间阈值判定是否属于陈旧或异常。</text>
</g>
<!-- ext_ragflow2 -->
<g id="node3" class="node">
<title>ext_ragflow2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="869.09,-325 549.05,-325 549.05,-145 869.09,-145 869.09,-325"/>
<text xml:space="preserve" text-anchor="start" x="666.29" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="652.81" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识库与检索服务。</text>
</g>
<!-- i_231_1&#45;&gt;ext_ragflow2 -->
<g id="edge1" class="edge">
<title>i_231_1&#45;&gt;ext_ragflow2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.99,-337.87C388.83,-319.62 469.5,-298.24 539.4,-279.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="539.68,-282.35 546.26,-277.89 538.34,-277.27 539.68,-282.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-323.49 383.04,-356.29 407.04,-356.29 407.04,-323.49 383.04,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-323.49 410.04,-356.29 486.05,-356.29 486.05,-323.49 410.04,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">①巡检数据集</text>
</g>
<!-- i_231_2&#45;&gt;ext_ragflow2 -->
<g id="edge2" class="edge">
<title>i_231_2&#45;&gt;ext_ragflow2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.78,-134.73C399.68,-153.26 480.35,-174.64 549.19,-192.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.83,-132.29 322.91,-132.91 329.49,-137.37 330.83,-132.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-178.49 383.04,-211.29 407.04,-211.29 407.04,-178.49 383.04,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-178.49 410.04,-211.29 486.05,-211.29 486.05,-178.49 410.04,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">②新鲜度判定</text>
</g>
</g>
</svg>
`;case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="770pt" height="810pt"
 viewBox="0.00 0.00 770.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- feat_answer_f -->
<g id="node1" class="node">
<title>feat_answer_f</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="740.25,-780 0,-780 0,-600 740.25,-600 740.25,-780"/>
<text xml:space="preserve" text-anchor="start" x="253.42" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature&#45;001&#45;F 知识应答能力</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">按业务能力切分。交付边界：客户在企业微信提问美妆问题，能得到基于知识库的专业答复。所属愿景：让美妆咨询有据可依。</text>
</g>
<!-- feat_degrade_nf -->
<g id="node2" class="node">
<title>feat_degrade_nf</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="665.23,-480 75.01,-480 75.01,-300 665.23,-300 665.23,-480"/>
<text xml:space="preserve" text-anchor="start" x="246.2" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature&#45;001&#45;NF 极端场景保障</text>
<text xml:space="preserve" text-anchor="start" x="183.84" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">按极端场景切分。交付边界：知识库为空、RAGFlow 超时、LLM</text>
<text xml:space="preserve" text-anchor="start" x="95.07" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">不可用三类场景下，运营人员与客户都能及时察觉并知道下一步。所属愿景：让美妆咨询有据可依。</text>
</g>
<!-- feat_knowledge_f -->
<g id="node3" class="node">
<title>feat_knowledge_f</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="721.5,-180 18.75,-180 18.75,0 721.5,0 721.5,-180"/>
<text xml:space="preserve" text-anchor="start" x="253.42" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature&#45;002&#45;F 知识运营能力</text>
<text xml:space="preserve" text-anchor="start" x="38.81" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">按业务能力切分。交付边界：运营人员能把素材变成可检索知识，并能发现知识陈旧。所属愿景：让美妆咨询有据可依。</text>
</g>
<!-- feat_answer_f&#45;&gt;feat_degrade_nf -->
<!-- feat_degrade_nf&#45;&gt;feat_knowledge_f -->
</g>
</svg>
`;case`pano-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3706pt" height="973pt"
 viewBox="0.00 0.00 3706.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-653.6 8,-934.8 1768,-934.8 1768,-653.6 8,-653.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1798,-8 1798,-934.8 2730,-934.8 2730,-8 1798,-8"/>
<text xml:space="preserve" text-anchor="start" x="1806" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_feat_knowledge_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2760,-8 2760,-934.8 3668,-934.8 3668,-8 2760,-8"/>
<text xml:space="preserve" text-anchor="start" x="2768" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;002&#45;F 知识运营能力</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.88,-873.6 48.12,-873.6 48.12,-693.6 825.88,-693.6 825.88,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="316.97" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="68.18" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1727.63,-873.6 962.37,-873.6 962.37,-693.6 1727.63,-693.6 1727.63,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1216.63" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="982.43" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- us_kbempty -->
<g id="node3" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2690.39,-873.6 1837.61,-873.6 1837.61,-693.6 2690.39,-693.6 2690.39,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2118.96" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="1857.67" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="2245.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node4" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2543.27,-550.8 1984.73,-550.8 1984.73,-370.8 2543.27,-370.8 2543.27,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2090.07" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="2004.78" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="2170.23" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node5" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2621.62,-228 1906.38,-228 1906.38,-48 2621.62,-48 2621.62,-228"/>
<text xml:space="preserve" text-anchor="start" x="2096.73" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="1926.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- us_scan -->
<g id="node6" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3627.88,-873.6 2800.12,-873.6 2800.12,-693.6 3627.88,-693.6 3627.88,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="3068.96" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="2820.17" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- us_govern -->
<g id="node7" class="node">
<title>us_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3600.63,-550.8 2835.37,-550.8 2835.37,-370.8 3600.63,-370.8 3600.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="3064.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="2855.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- us_alert -->
<g id="node8" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3608.63,-228 2843.37,-228 2843.37,-48 3608.63,-48 3608.63,-228"/>
<text xml:space="preserve" text-anchor="start" x="3097.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="2863.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- us_ask&#45;&gt;us_lowconfidence -->
<g id="edge1" class="edge">
<title>us_ask&#45;&gt;us_lowconfidence</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M825.69,-757.15C853.41,-756.85 880.94,-757.01 907.62,-757.8 922.22,-758.23 937.08,-758.74 952.09,-759.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="951.89,-761.94 959.49,-759.61 952.09,-756.69 951.89,-761.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="880.63,-757.8 880.63,-780.6 907.62,-780.6 907.62,-757.8 880.63,-757.8"/>
<text xml:space="preserve" text-anchor="start" x="883.63" y="-766" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_lowconfidence&#45;&gt;us_ask -->
<g id="edge4" class="edge">
<title>us_lowconfidence&#45;&gt;us_ask</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M962.64,-783.6C920.8,-783.6 878.12,-783.6 836.08,-783.6"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="836.22,-780.98 828.72,-783.6 836.22,-786.23 836.22,-780.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="861.95,-786.6 861.95,-809.4 926.3,-809.4 926.3,-786.6 861.95,-786.6"/>
<text xml:space="preserve" text-anchor="start" x="864.95" y="-792.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- us_kbempty&#45;&gt;us_ragtimeout -->
<g id="edge2" class="edge">
<title>us_kbempty&#45;&gt;us_ragtimeout</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2264,-693.67C2264,-652.47 2264,-603.36 2264,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2266.63,-561.16 2264,-553.66 2261.38,-561.16 2266.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2264,-610.8 2264,-633.6 2340.01,-633.6 2340.01,-610.8 2264,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2267" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- us_ragtimeout&#45;&gt;us_llmdown -->
<g id="edge5" class="edge">
<title>us_ragtimeout&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2264,-370.87C2264,-329.67 2264,-280.56 2264,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2266.63,-238.36 2264,-230.86 2261.38,-238.36 2266.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2264,-288 2264,-310.8 2340.01,-310.8 2340.01,-288 2264,-288"/>
<text xml:space="preserve" text-anchor="start" x="2267" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
<!-- us_scan&#45;&gt;us_govern -->
<g id="edge3" class="edge">
<title>us_scan&#45;&gt;us_govern</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M3092.22,-693.83C3072.55,-668.87 3062.04,-640.41 3074.01,-610.8 3081.54,-592.17 3092.64,-574.58 3105.39,-558.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3107.14,-560.47 3109.86,-553 3103.07,-557.14 3107.14,-560.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3074.01,-610.8 3074.01,-633.6 3101,-633.6 3101,-610.8 3074.01,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="3077.01" y="-619" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_govern&#45;&gt;us_scan -->
<g id="edge6" class="edge">
<title>us_govern&#45;&gt;us_scan</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3216.89,-550.63C3216.38,-591.81 3215.77,-640.92 3215.24,-683.32"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3212.62,-683.11 3215.15,-690.64 3217.87,-683.17 3212.62,-683.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3216.12,-610.8 3216.12,-633.6 3268.8,-633.6 3268.8,-610.8 3216.12,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="3219.12" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- us_govern&#45;&gt;us_alert -->
<g id="edge7" class="edge">
<title>us_govern&#45;&gt;us_alert</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M3099.76,-371.02C3080.43,-345.96 3070.1,-317.45 3082.01,-288 3089.54,-269.37 3100.64,-251.78 3113.39,-235.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3115.14,-237.67 3117.86,-230.2 3111.07,-234.34 3115.14,-237.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3082.01,-288 3082.01,-310.8 3109,-310.8 3109,-288 3082.01,-288"/>
<text xml:space="preserve" text-anchor="start" x="3085.01" y="-296.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_alert&#45;&gt;us_govern -->
<g id="edge8" class="edge">
<title>us_alert&#45;&gt;us_govern</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3223.78,-227.83C3222.76,-269.01 3221.53,-318.12 3220.48,-360.52"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3217.86,-360.28 3220.29,-367.84 3223.1,-360.41 3217.86,-360.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3222.24,-288 3222.24,-310.8 3286.58,-310.8 3286.58,-288 3222.24,-288"/>
<text xml:space="preserve" text-anchor="start" x="3225.24" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
</g>
</svg>
`;case`pano-f`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="1110pt"
 viewBox="0.00 0.00 350.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- f_answer -->
<g id="node1" class="node">
<title>f_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="81.11" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;001 应答编排能力</text>
<text xml:space="preserve" text-anchor="start" x="22.49" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</text>
</g>
<!-- f_retrieval -->
<g id="node2" class="node">
<title>f_retrieval</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="81.11" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;002 知识检索能力</text>
<text xml:space="preserve" text-anchor="start" x="30" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</text>
</g>
<!-- f_ingest -->
<g id="node3" class="node">
<title>f_ingest</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="81.11" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;201 素材接入能力</text>
<text xml:space="preserve" text-anchor="start" x="35" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收素材并登记文档标识，支持单条与批量。</text>
</g>
<!-- f_govern -->
<g id="node4" class="node">
<title>f_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="81.11" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;202 知识治理能力</text>
<text xml:space="preserve" text-anchor="start" x="53.75" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选知识的扫描、决策、晋升与下线。</text>
</g>
<!-- f_answer&#45;&gt;f_retrieval -->
<!-- f_retrieval&#45;&gt;f_ingest -->
<!-- f_ingest&#45;&gt;f_govern -->
</g>
</svg>
`;case`pano-nf`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="616pt" height="810pt"
 viewBox="0.00 0.00 616.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- nf_kbempty -->
<g id="node1" class="node">
<title>nf_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="585.64,-780 0,-780 0,-600 585.64,-600 585.64,-780"/>
<text xml:space="preserve" text-anchor="start" x="165.01" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;101 知识库为零条时状态可见</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</text>
</g>
<!-- nf_ragtimeout -->
<g id="node2" class="node">
<title>nf_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="476.32,-480 109.32,-480 109.32,-300 476.32,-300 476.32,-480"/>
<text xml:space="preserve" text-anchor="start" x="133.34" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;102 RAGFlow 超 8 秒时客户可感知</text>
<text xml:space="preserve" text-anchor="start" x="171.13" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8</text>
<text xml:space="preserve" text-anchor="start" x="136.54" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">秒下发带说明的提示，客服不必反复刷新。角色：客户。</text>
</g>
<!-- nf_llmdown -->
<g id="node3" class="node">
<title>nf_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="566.89,-180 18.76,-180 18.76,0 566.89,0 566.89,-180"/>
<text xml:space="preserve" text-anchor="start" x="159.45" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;103 LLM 不可用时自动转人工</text>
<text xml:space="preserve" text-anchor="start" x="42.77" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</text>
</g>
<!-- nf_kbempty&#45;&gt;nf_ragtimeout -->
<!-- nf_ragtimeout&#45;&gt;nf_llmdown -->
</g>
</svg>
`;case`pano-i`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="5102pt" height="1055pt"
 viewBox="0.00 0.00 5102.00 1055.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1039.85)">
<g id="clust1" class="cluster">
<title>cluster_us_ask</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1016.8 1235,-1016.8 1235,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1003.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;001 客户提问获得专业答复</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_us_kbempty</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2362,-714.4 2362,-1016.8 3743,-1016.8 3743,-714.4 2362,-714.4"/>
<text xml:space="preserve" text-anchor="start" x="2370" y="-1003.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;101 知识库为空时运营人员能看见</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_us_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="4103,-722.4 4103,-1008.8 4633,-1008.8 4633,-722.4 4103,-722.4"/>
<text xml:space="preserve" text-anchor="start" x="4111" y="-995.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;201 素材入库后自动进入候选知识</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_us_govern</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="4061,-369.2 4061,-655.6 4675,-655.6 4675,-369.2 4061,-369.2"/>
<text xml:space="preserve" text-anchor="start" x="4069" y="-642.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;202 候选知识经我决策后才对外可见</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_us_lowconfidence</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1265,-361.2 1265,-663.6 2443,-663.6 2443,-361.2 1265,-361.2"/>
<text xml:space="preserve" text-anchor="start" x="1273" y="-650.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;002 答不准时转人工而非硬答</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_us_ragtimeout</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2472,-361.2 2472,-663.6 3716,-663.6 3716,-361.2 2472,-361.2"/>
<text xml:space="preserve" text-anchor="start" x="2480" y="-650.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;102 RAGFLOW 超时时客户不被静默等待</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_us_alert</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3746,-8 3746,-310.4 5064,-310.4 5064,-8 3746,-8"/>
<text xml:space="preserve" text-anchor="start" x="3754" y="-297.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;203 知识陈旧时我能收到提示</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_us_llmdown</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2489,-8 2489,-310.4 3716,-310.4 3716,-8 2489,-8"/>
<text xml:space="preserve" text-anchor="start" x="2497" y="-297.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;103 LLM 不可用时转人工而非静默失败</text>
</g>
<!-- i_001 -->
<g id="node1" class="node">
<title>i_001</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="607.1,-934.4 66.9,-934.4 66.9,-754.4 607.1,-754.4 607.1,-934.4"/>
<text xml:space="preserve" text-anchor="start" x="191.96" y="-847.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 阶段性目标 · 取得可靠候选知识</text>
<text xml:space="preserve" text-anchor="start" x="86.95" y="-824.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把客户提问变成可用的候选知识条目。这一阶段做完，就掌握了后续判定所需的事实基础。</text>
</g>
<!-- i_002 -->
<g id="node2" class="node">
<title>i_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="625.86,-581.2 48.14,-581.2 48.14,-401.2 625.86,-401.2 625.86,-581.2"/>
<text xml:space="preserve" text-anchor="start" x="191.96" y="-494.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;002 阶段性目标 · 判定可否自动答复</text>
<text xml:space="preserve" text-anchor="start" x="68.2" y="-471.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">用置信度与风险阈值判断这条候选知识是否足以自动答复。这一阶段决定走自动路径还是转人工。</text>
</g>
<!-- i_003 -->
<g id="node3" class="node">
<title>i_003</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1080.68,-228 611.32,-228 611.32,-48 1080.68,-48 1080.68,-228"/>
<text xml:space="preserve" text-anchor="start" x="709.3" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 阶段性目标 · 生成并下发答复</text>
<text xml:space="preserve" text-anchor="start" x="631.37" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">把通过校验的候选知识组织成答复并送达客户。做到这一步本 US 就完成了。</text>
</g>
<!-- i_111 -->
<g id="node4" class="node">
<title>i_111</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2954.36,-934.4 2401.64,-934.4 2401.64,-754.4 2954.36,-754.4 2954.36,-934.4"/>
<text xml:space="preserve" text-anchor="start" x="2516.29" y="-847.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111 阶段性目标 · 读出条目数并判定空库</text>
<text xml:space="preserve" text-anchor="start" x="2421.7" y="-824.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">拿到当前知识条目数并判定是否为空库。做到这一步运营人员就知道该补素材还是该查集成。</text>
</g>
<!-- i_112 -->
<g id="node5" class="node">
<title>i_112</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3702.86,-934.4 3175.14,-934.4 3175.14,-754.4 3702.86,-754.4 3702.86,-934.4"/>
<text xml:space="preserve" text-anchor="start" x="3285.63" y="-847.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;112 阶段性目标 · 把空库显式呈现出来</text>
<text xml:space="preserve" text-anchor="start" x="3195.2" y="-824.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">在控制台显式提示条目数为 0，不显示空白列表。做到这一步运营人员就知道要补素材。</text>
</g>
<!-- i_211 -->
<g id="node6" class="node">
<title>i_211</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4600.6,-934.4 4135.4,-934.4 4135.4,-754.4 4600.6,-754.4 4600.6,-934.4"/>
<text xml:space="preserve" text-anchor="start" x="4214.63" y="-847.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211 阶段性目标 · 素材入库并产出候选</text>
<text xml:space="preserve" text-anchor="start" x="4155.46" y="-824.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把上传的素材变成可审阅的候选条目。做到这一步运营人员就有东西可审了。</text>
</g>
<!-- i_221 -->
<g id="node7" class="node">
<title>i_221</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4642.7,-581.2 4093.3,-581.2 4093.3,-401.2 4642.7,-401.2 4642.7,-581.2"/>
<text xml:space="preserve" text-anchor="start" x="4231.3" y="-494.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221 阶段性目标 · 审阅决策并晋升</text>
<text xml:space="preserve" text-anchor="start" x="4113.36" y="-471.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">让运营人员逐条审阅候选并决定去留，批准的进入可检索状态。做到这一步 US&#45;202 闭环。</text>
</g>
<!-- i_011 -->
<g id="node8" class="node">
<title>i_011</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1745.1,-581.2 1304.9,-581.2 1304.9,-401.2 1745.1,-401.2 1745.1,-581.2"/>
<text xml:space="preserve" text-anchor="start" x="1379.96" y="-494.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;011 阶段性目标 · 判定进入人工路径</text>
<text xml:space="preserve" text-anchor="start" x="1324.96" y="-471.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">确认这条提问不能自动答复，转入人工。做完后客户不再等待系统硬答。</text>
</g>
<!-- i_012 -->
<g id="node9" class="node">
<title>i_012</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2402.69,-581.2 1953.31,-581.2 1953.31,-401.2 2402.69,-401.2 2402.69,-581.2"/>
<text xml:space="preserve" text-anchor="start" x="2024.63" y="-494.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;012 阶段性目标 · 生成工单并告知等待</text>
<text xml:space="preserve" text-anchor="start" x="1973.37" y="-471.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建人工工单承接这条提问，并让客户知道等待。做完后 US&#45;002 完成。</text>
</g>
<!-- i_121 -->
<g id="node10" class="node">
<title>i_121</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2981.68,-581.2 2512.32,-581.2 2512.32,-401.2 2981.68,-401.2 2981.68,-581.2"/>
<text xml:space="preserve" text-anchor="start" x="2610.3" y="-494.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;121 阶段性目标 · 计时并判定超时</text>
<text xml:space="preserve" text-anchor="start" x="2532.37" y="-471.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">给检索装上 8 秒上限并判定是否超时。做到这一步就知道该不该给客户提示。</text>
</g>
<!-- i_122 -->
<g id="node11" class="node">
<title>i_122</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3676.19,-581.2 3201.81,-581.2 3201.81,-401.2 3676.19,-401.2 3676.19,-581.2"/>
<text xml:space="preserve" text-anchor="start" x="3285.63" y="-494.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;122 阶段性目标 · 告知客户系统在处理</text>
<text xml:space="preserve" text-anchor="start" x="3221.87" y="-471.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知系统仍在处理，不让客户反复刷新。做到这一步 US&#45;102 闭环。</text>
</g>
<!-- i_231 -->
<g id="node12" class="node">
<title>i_231</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4301.6,-228 3786.4,-228 3786.4,-48 4301.6,-48 4301.6,-228"/>
<text xml:space="preserve" text-anchor="start" x="3898.96" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;231 阶段性目标 · 巡检并判定新鲜度</text>
<text xml:space="preserve" text-anchor="start" x="3806.45" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">定期探测数据集并按更新时间阈值判定是否陈旧。做到这一步就知道哪些条目需要修。</text>
</g>
<!-- i_232 -->
<g id="node13" class="node">
<title>i_232</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5024.35,-228 4521.65,-228 4521.65,-48 5024.35,-48 5024.35,-228"/>
<text xml:space="preserve" text-anchor="start" x="4636.3" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;232 阶段性目标 · 上报告警并呈现</text>
<text xml:space="preserve" text-anchor="start" x="4541.7" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">把问题条目写入告警并在控制台列出。做到这一步运营人员能在客户问到之前修好。</text>
</g>
<!-- i_131 -->
<g id="node14" class="node">
<title>i_131</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2969.1,-228 2528.9,-228 2528.9,-48 2969.1,-48 2969.1,-228"/>
<text xml:space="preserve" text-anchor="start" x="2578.96" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;131 阶段性目标 · 识别模型不可用并转人工</text>
<text xml:space="preserve" text-anchor="start" x="2548.96" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">识别模型调用失败并判定转人工。做到这一步客户不会再收到空白回复。</text>
</g>
<!-- i_132 -->
<g id="node15" class="node">
<title>i_132</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3676.19,-228 3201.81,-228 3201.81,-48 3676.19,-48 3676.19,-228"/>
<text xml:space="preserve" text-anchor="start" x="3302.3" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;132 阶段性目标 · 建单并告知等待</text>
<text xml:space="preserve" text-anchor="start" x="3221.87" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">生成人工工单并告知客户等待，不返回空白内容。做到这一步 US&#45;103 闭环。</text>
</g>
<!-- i_001&#45;&gt;i_002 -->
<g id="edge1" class="edge">
<title>i_001&#45;&gt;i_002</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M337,-754.78C337,-705.06 337,-642.91 337,-591.55"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="339.63,-591.63 337,-584.13 334.38,-591.63 339.63,-591.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="337,-671.6 337,-694.4 448.02,-694.4 448.02,-671.6 337,-671.6"/>
<text xml:space="preserve" text-anchor="start" x="340" y="-677.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">取得候选后进入判定</text>
</g>
<!-- i_001&#45;&gt;i_003 -->
<g id="edge3" class="edge">
<title>i_001&#45;&gt;i_003</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M568.62,-754.64C610.43,-730.24 650.4,-700.16 681,-663.6 784.21,-540.3 823.04,-352.18 837.52,-237.9"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="840.09,-238.53 838.4,-230.76 834.88,-237.88 840.09,-238.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="814.37,-479.8 814.37,-502.6 867.04,-502.6 867.04,-479.8 814.37,-479.8"/>
<text xml:space="preserve" text-anchor="start" x="817.37" y="-485.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- i_001&#45;&gt;i_012 -->
<g id="edge2" class="edge">
<title>i_001&#45;&gt;i_012</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M607.08,-834.65C904.36,-819.42 1393.97,-777.72 1800,-663.6 1867.96,-644.5 1939.27,-614.91 2001.4,-585.67"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2002.51,-588.05 2008.16,-582.47 2000.26,-583.3 2002.51,-588.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1761.93,-671.6 1761.93,-694.4 1861.28,-694.4 1861.28,-671.6 1761.93,-671.6"/>
<text xml:space="preserve" text-anchor="start" x="1764.93" y="-677.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- i_002&#45;&gt;i_003 -->
<g id="edge7" class="edge">
<title>i_002&#45;&gt;i_003</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M396.28,-401.33C418.55,-372.4 445.65,-341.75 474.98,-318.4 516.13,-285.64 564.24,-256.91 611.93,-232.58"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="612.92,-235.02 618.43,-229.3 610.56,-230.33 612.92,-235.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="474.98,-318.4 474.98,-341.2 586,-341.2 586,-318.4 474.98,-318.4"/>
<text xml:space="preserve" text-anchor="start" x="477.98" y="-324.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">校验通过后生成答复</text>
</g>
<!-- i_002&#45;&gt;i_011 -->
<g id="edge6" class="edge">
<title>i_002&#45;&gt;i_011</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M501.02,-581.17C564.1,-611 638.03,-640.4 709,-655.37 829.25,-680.72 1143.86,-689.21 1262,-655.37 1311.62,-641.15 1360.97,-614.55 1403.29,-586.84"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1404.61,-589.11 1409.41,-582.77 1401.71,-584.74 1404.61,-589.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="933.32,-671.6 933.32,-694.4 1032.68,-694.4 1032.68,-671.6 933.32,-671.6"/>
<text xml:space="preserve" text-anchor="start" x="936.32" y="-677.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">校验不通过转人工</text>
</g>
<!-- i_003&#45;&gt;i_001 -->
<g id="edge16" class="edge">
<title>i_003&#45;&gt;i_001</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M930.37,-227.77C1031.68,-345.26 1174.48,-553.92 1060,-694.4 1003.76,-763.41 795.63,-801.4 617.03,-821.72"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="616.84,-819.1 609.67,-822.54 617.42,-824.31 616.84,-819.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1102.37,-479.8 1102.37,-502.6 1178.38,-502.6 1178.38,-479.8 1102.37,-479.8"/>
<text xml:space="preserve" text-anchor="start" x="1105.37" y="-485.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- i_003&#45;&gt;i_002 -->
<g id="edge17" class="edge">
<title>i_003&#45;&gt;i_002</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M751.03,-227.82C709.08,-264.96 658.2,-307.27 609,-341.2 581.26,-360.33 550.84,-379.01 520.69,-396.31"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="519.62,-393.9 514.4,-399.9 522.22,-398.46 519.62,-393.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="636.46,-318.4 636.46,-341.2 700.81,-341.2 700.81,-318.4 636.46,-318.4"/>
<text xml:space="preserve" text-anchor="start" x="639.46" y="-324.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- i_111&#45;&gt;i_112 -->
<g id="edge4" class="edge">
<title>i_111&#45;&gt;i_112</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2954.35,-844.4C3022.9,-844.4 3096.33,-844.4 3164.78,-844.4"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="3164.75,-847.03 3172.25,-844.4 3164.75,-841.78 3164.75,-847.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3009.24,-847.4 3009.24,-870.2 3120.26,-870.2 3120.26,-847.4 3009.24,-847.4"/>
<text xml:space="preserve" text-anchor="start" x="3012.24" y="-853.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">判定空库后显式呈现</text>
</g>
<!-- i_112&#45;&gt;i_122 -->
<g id="edge8" class="edge">
<title>i_112&#45;&gt;i_122</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3439,-754.78C3439,-705.06 3439,-642.91 3439,-591.55"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3441.63,-591.63 3439,-584.13 3436.38,-591.63 3441.63,-591.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3439,-671.6 3439,-694.4 3515.01,-694.4 3515.01,-671.6 3439,-671.6"/>
<text xml:space="preserve" text-anchor="start" x="3442" y="-677.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- i_211&#45;&gt;i_221 -->
<g id="edge5" class="edge">
<title>i_211&#45;&gt;i_221</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M4257.58,-754.47C4239.38,-729.52 4229.13,-701.09 4238.65,-671.6 4247.98,-642.71 4263.88,-614.55 4281.41,-589.43"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="4283.43,-591.13 4285.65,-583.5 4279.15,-588.07 4283.43,-591.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4238.65,-671.6 4238.65,-694.4 4338,-694.4 4338,-671.6 4238.65,-671.6"/>
<text xml:space="preserve" text-anchor="start" x="4241.65" y="-677.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">提交候选进入治理</text>
</g>
<!-- i_221&#45;&gt;i_211 -->
<g id="edge9" class="edge">
<title>i_221&#45;&gt;i_211</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M4368,-581.1C4368,-630.86 4368,-693.02 4368,-744.33"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="4365.38,-744.25 4368,-751.75 4370.63,-744.25 4365.38,-744.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4368,-671.6 4368,-694.4 4420.68,-694.4 4420.68,-671.6 4368,-671.6"/>
<text xml:space="preserve" text-anchor="start" x="4371" y="-677.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- i_221&#45;&gt;i_231 -->
<g id="edge10" class="edge">
<title>i_221&#45;&gt;i_231</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M4286.24,-401.58C4239.52,-350.93 4180.88,-287.37 4133,-235.47"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="4135.08,-233.86 4128.07,-230.12 4131.22,-237.42 4135.08,-233.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4225.4,-318.4 4225.4,-341.2 4348.09,-341.2 4348.09,-318.4 4225.4,-318.4"/>
<text xml:space="preserve" text-anchor="start" x="4228.4" y="-324.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">晋升后进入新鲜度巡检</text>
</g>
<!-- i_011&#45;&gt;i_012 -->
<g id="edge11" class="edge">
<title>i_011&#45;&gt;i_012</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1744.71,-491.2C1808.52,-491.2 1878.45,-491.2 1943.15,-491.2"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1942.96,-493.83 1950.46,-491.2 1942.96,-488.58 1942.96,-493.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1799.53,-494.2 1799.53,-517 1898.88,-517 1898.88,-494.2 1799.53,-494.2"/>
<text xml:space="preserve" text-anchor="start" x="1802.53" y="-500" font-family="Arial" font-size="14.00" fill="#d4f2ff">判定后建单并告知</text>
</g>
<!-- i_012&#45;&gt;i_003 -->
<g id="edge13" class="edge">
<title>i_012&#45;&gt;i_003</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1953.55,-409.48C1903.32,-392.57 1850.08,-375.54 1800,-361.2 1561.17,-292.82 1284.26,-230.12 1090.5,-188.89"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1091.31,-186.38 1083.43,-187.39 1090.22,-191.52 1091.31,-186.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1723.54,-318.4 1723.54,-341.2 1787.89,-341.2 1787.89,-318.4 1723.54,-318.4"/>
<text xml:space="preserve" text-anchor="start" x="1726.54" y="-324.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- i_121&#45;&gt;i_122 -->
<g id="edge12" class="edge">
<title>i_121&#45;&gt;i_122</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2981.28,-491.2C3048.97,-491.2 3123.05,-491.2 3191.52,-491.2"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="3191.49,-493.83 3198.99,-491.2 3191.49,-488.58 3191.49,-493.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3036.24,-494.2 3036.24,-517 3147.26,-517 3147.26,-494.2 3036.24,-494.2"/>
<text xml:space="preserve" text-anchor="start" x="3039.24" y="-500" font-family="Arial" font-size="14.00" fill="#d4f2ff">判定超时后告知客户</text>
</g>
<!-- i_122&#45;&gt;i_132 -->
<g id="edge14" class="edge">
<title>i_122&#45;&gt;i_132</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3439,-401.58C3439,-351.86 3439,-289.71 3439,-238.35"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3441.63,-238.43 3439,-230.93 3436.38,-238.43 3441.63,-238.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3439,-318.4 3439,-341.2 3515.01,-341.2 3515.01,-318.4 3439,-318.4"/>
<text xml:space="preserve" text-anchor="start" x="3442" y="-324.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
<!-- i_231&#45;&gt;i_232 -->
<g id="edge15" class="edge">
<title>i_231&#45;&gt;i_232</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M4301.53,-138C4369.54,-138 4443.01,-138 4511.24,-138"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="4511.18,-140.63 4518.68,-138 4511.18,-135.38 4511.18,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4356.12,-141 4356.12,-163.8 4467.14,-163.8 4467.14,-141 4356.12,-141"/>
<text xml:space="preserve" text-anchor="start" x="4359.12" y="-146.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">判定异常后上报告警</text>
</g>
<!-- i_232&#45;&gt;i_221 -->
<g id="edge18" class="edge">
<title>i_232&#45;&gt;i_221</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M4670.61,-227.79C4611.86,-278.74 4538.08,-342.71 4478.08,-394.74"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="4476.69,-392.47 4472.75,-399.37 4480.13,-396.44 4476.69,-392.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4558.36,-318.4 4558.36,-341.2 4622.7,-341.2 4622.7,-318.4 4558.36,-318.4"/>
<text xml:space="preserve" text-anchor="start" x="4561.36" y="-324.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
<!-- i_131&#45;&gt;i_132 -->
<g id="edge19" class="edge">
<title>i_131&#45;&gt;i_132</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2968.74,-138C3039.77,-138 3118.99,-138 3191.86,-138"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="3191.57,-140.63 3199.07,-138 3191.57,-135.38 3191.57,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3024.11,-141 3024.11,-163.8 3146.8,-163.8 3146.8,-141 3024.11,-141"/>
<text xml:space="preserve" text-anchor="start" x="3027.11" y="-146.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">判定不可用后建单告知</text>
</g>
</g>
</svg>
`;case`pano-i-state`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="9024pt" height="1296pt"
 viewBox="0.00 0.00 9024.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 408,-1257.6 408,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;001 阶段性目标 · 取得可靠候选知识</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_i_002</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="438,-330.8 438,-1257.6 1268,-1257.6 1268,-330.8 438,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="446" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;002 阶段性目标 · 判定可否自动答复</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_i_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1298,-8 1298,-1257.6 1698,-1257.6 1698,-8 1298,-8"/>
<text xml:space="preserve" text-anchor="start" x="1306" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;003 阶段性目标 · 生成并下发答复</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_i_011</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1728,-330.8 1728,-1257.6 2128,-1257.6 2128,-330.8 1728,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="1736" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;011 阶段性目标 · 判定进入人工路径</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_i_012</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2158,-8 2158,-1257.6 2558,-1257.6 2558,-8 2158,-8"/>
<text xml:space="preserve" text-anchor="start" x="2166" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;012 阶段性目标 · 生成工单并告知等待</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_i_111</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2588,-330.8 2588,-1257.6 3418,-1257.6 3418,-330.8 2588,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="2596" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;111 阶段性目标 · 读出条目数并判定空库</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_i_112</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3448,-330.8 3448,-1257.6 3848,-1257.6 3848,-330.8 3448,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="3456" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;112 阶段性目标 · 把空库显式呈现出来</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_i_121</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3878,-330.8 3878,-1257.6 4708,-1257.6 4708,-330.8 3878,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="3886" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;121 阶段性目标 · 计时并判定超时</text>
</g>
<g id="clust9" class="cluster">
<title>cluster_i_122</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="4738,-330.8 4738,-1257.6 5138,-1257.6 5138,-330.8 4738,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="4746" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;122 阶段性目标 · 告知客户系统在处理</text>
</g>
<g id="clust10" class="cluster">
<title>cluster_i_131</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="5168,-330.8 5168,-1257.6 5998,-1257.6 5998,-330.8 5168,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="5176" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;131 阶段性目标 · 识别模型不可用并转人工</text>
</g>
<g id="clust11" class="cluster">
<title>cluster_i_132</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="6028,-8 6028,-1257.6 6428,-1257.6 6428,-8 6028,-8"/>
<text xml:space="preserve" text-anchor="start" x="6036" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;132 阶段性目标 · 建单并告知等待</text>
</g>
<g id="clust12" class="cluster">
<title>cluster_i_211</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="6458,-8 6458,-1257.6 6858,-1257.6 6858,-8 6458,-8"/>
<text xml:space="preserve" text-anchor="start" x="6466" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;211 阶段性目标 · 素材入库并产出候选</text>
</g>
<g id="clust13" class="cluster">
<title>cluster_i_221</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="6888,-8 6888,-1257.6 7718,-1257.6 7718,-8 6888,-8"/>
<text xml:space="preserve" text-anchor="start" x="6896" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;221 阶段性目标 · 审阅决策并晋升</text>
</g>
<g id="clust14" class="cluster">
<title>cluster_i_231</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="7726,-330.8 7726,-1257.6 8556,-1257.6 8556,-330.8 7726,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="7734" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;231 阶段性目标 · 巡检并判定新鲜度</text>
</g>
<g id="clust15" class="cluster">
<title>cluster_i_232</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8586,-8 8586,-1257.6 8986,-1257.6 8986,-8 8586,-8"/>
<text xml:space="preserve" text-anchor="start" x="8594" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;232 阶段性目标 · 上报告警并呈现</text>
</g>
<!-- st_001_pending -->
<g id="node1" class="node">
<title>st_001_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1196.4 47.98,-1196.4 47.98,-1016.4 368.02,-1016.4 368.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;001 待检索</text>
</g>
<!-- st_001_normalizing -->
<g id="node2" class="node">
<title>st_001_normalizing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="145.2" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;002 归一化中</text>
</g>
<!-- st_001_searching -->
<g id="node3" class="node">
<title>st_001_searching</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;003 检索中</text>
</g>
<!-- st_001_got -->
<g id="node4" class="node">
<title>st_001_got</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;004 已取得候选</text>
</g>
<!-- st_002_pending -->
<g id="node5" class="node">
<title>st_002_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="950.02,-1196.4 629.98,-1196.4 629.98,-1016.4 950.02,-1016.4 950.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="735.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;005 待校验</text>
</g>
<!-- st_002_checking -->
<g id="node6" class="node">
<title>st_002_checking</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="950.02,-873.6 629.98,-873.6 629.98,-693.6 950.02,-693.6 950.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="735.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;006 校验中</text>
</g>
<!-- st_002_passed -->
<g id="node7" class="node">
<title>st_002_passed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-550.8 477.98,-550.8 477.98,-370.8 798.02,-370.8 798.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="575.2" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;007 校验通过</text>
</g>
<!-- st_002_failed -->
<g id="node8" class="node">
<title>st_002_failed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-550.8 907.98,-550.8 907.98,-370.8 1228.02,-370.8 1228.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="996.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;008 置信度不足</text>
</g>
<!-- st_003_pending -->
<g id="node9" class="node">
<title>st_003_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-1196.4 1337.98,-1196.4 1337.98,-1016.4 1658.02,-1016.4 1658.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1443.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;009 待生成</text>
</g>
<!-- st_003_composing -->
<g id="node10" class="node">
<title>st_003_composing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-873.6 1337.98,-873.6 1337.98,-693.6 1658.02,-693.6 1658.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1443.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;010 生成中</text>
</g>
<!-- st_003_delivering -->
<g id="node11" class="node">
<title>st_003_delivering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-550.8 1337.98,-550.8 1337.98,-370.8 1658.02,-370.8 1658.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1443.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;011 下发中</text>
</g>
<!-- st_003_answered -->
<g id="node12" class="node">
<title>st_003_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-228 1337.98,-228 1337.98,-48 1658.02,-48 1658.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1443.53" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;012 已答复</text>
</g>
<!-- st_011_pending -->
<g id="node13" class="node">
<title>st_011_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2088.02,-1196.4 1767.98,-1196.4 1767.98,-1016.4 2088.02,-1016.4 2088.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1873.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;101 待判定</text>
</g>
<!-- st_011_judging -->
<g id="node14" class="node">
<title>st_011_judging</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2088.02,-873.6 1767.98,-873.6 1767.98,-693.6 2088.02,-693.6 2088.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1873.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;102 判定中</text>
</g>
<!-- st_011_escalated -->
<g id="node15" class="node">
<title>st_011_escalated</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2088.02,-550.8 1767.98,-550.8 1767.98,-370.8 2088.02,-370.8 2088.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1865.2" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;103 已转人工</text>
</g>
<!-- st_012_pending -->
<g id="node16" class="node">
<title>st_012_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2518.02,-1196.4 2197.98,-1196.4 2197.98,-1016.4 2518.02,-1016.4 2518.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2303.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;104 待建单</text>
</g>
<!-- st_012_ticketing -->
<g id="node17" class="node">
<title>st_012_ticketing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2518.02,-873.6 2197.98,-873.6 2197.98,-693.6 2518.02,-693.6 2518.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2303.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;105 建单中</text>
</g>
<!-- st_012_notified -->
<g id="node18" class="node">
<title>st_012_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2518.02,-550.8 2197.98,-550.8 2197.98,-370.8 2518.02,-370.8 2518.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2286.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;106 已告知等待</text>
</g>
<!-- st_012_answered -->
<g id="node19" class="node">
<title>st_012_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2518.02,-228 2197.98,-228 2197.98,-48 2518.02,-48 2518.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="2286.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;107 人工已接管</text>
</g>
<!-- st_111_pending -->
<g id="node20" class="node">
<title>st_111_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3100.02,-1196.4 2779.98,-1196.4 2779.98,-1016.4 3100.02,-1016.4 3100.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2885.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;111 待读取</text>
</g>
<!-- st_111_counting -->
<g id="node21" class="node">
<title>st_111_counting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3100.02,-873.6 2779.98,-873.6 2779.98,-693.6 3100.02,-693.6 3100.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2885.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;112 读取中</text>
</g>
<!-- st_111_empty -->
<g id="node22" class="node">
<title>st_111_empty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2948.02,-550.8 2627.98,-550.8 2627.98,-370.8 2948.02,-370.8 2948.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2716.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;113 判定为空库</text>
</g>
<!-- st_111_ready -->
<g id="node23" class="node">
<title>st_111_ready</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3378.02,-550.8 3057.98,-550.8 3057.98,-370.8 3378.02,-370.8 3378.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="3155.2" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;114 条目正常</text>
</g>
<!-- st_112_pending -->
<g id="node24" class="node">
<title>st_112_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3808.02,-1196.4 3487.98,-1196.4 3487.98,-1016.4 3808.02,-1016.4 3808.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="3593.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;115 待呈现</text>
</g>
<!-- st_112_rendering -->
<g id="node25" class="node">
<title>st_112_rendering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3808.02,-873.6 3487.98,-873.6 3487.98,-693.6 3808.02,-693.6 3808.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="3593.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;116 渲染中</text>
</g>
<!-- st_112_shown -->
<g id="node26" class="node">
<title>st_112_shown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3808.02,-550.8 3487.98,-550.8 3487.98,-370.8 3808.02,-370.8 3808.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="3576.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;117 已显式提示</text>
</g>
<!-- st_121_pending -->
<g id="node27" class="node">
<title>st_121_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4397.02,-1196.4 4076.98,-1196.4 4076.98,-1016.4 4397.02,-1016.4 4397.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="4182.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;121 待计时</text>
</g>
<!-- st_121_waiting -->
<g id="node28" class="node">
<title>st_121_waiting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4397.02,-873.6 4076.98,-873.6 4076.98,-693.6 4397.02,-693.6 4397.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="4174.2" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;122 等待响应</text>
</g>
<!-- st_121_timedout -->
<g id="node29" class="node">
<title>st_121_timedout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4238.02,-550.8 3917.98,-550.8 3917.98,-370.8 4238.02,-370.8 4238.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="4015.2" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;123 判定超时</text>
</g>
<!-- st_121_returned -->
<g id="node30" class="node">
<title>st_121_returned</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4668.02,-550.8 4347.98,-550.8 4347.98,-370.8 4668.02,-370.8 4668.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="4445.2" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;124 按时返回</text>
</g>
<!-- st_122_pending -->
<g id="node31" class="node">
<title>st_122_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5098.02,-1196.4 4777.98,-1196.4 4777.98,-1016.4 5098.02,-1016.4 5098.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="4883.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;125 待提示</text>
</g>
<!-- st_122_notifying -->
<g id="node32" class="node">
<title>st_122_notifying</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5098.02,-873.6 4777.98,-873.6 4777.98,-693.6 5098.02,-693.6 5098.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="4883.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;126 提示中</text>
</g>
<!-- st_122_notified -->
<g id="node33" class="node">
<title>st_122_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5098.02,-550.8 4777.98,-550.8 4777.98,-370.8 5098.02,-370.8 5098.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="4858.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;127 已告知处理中</text>
</g>
<!-- st_131_pending -->
<g id="node34" class="node">
<title>st_131_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5692.02,-1196.4 5371.98,-1196.4 5371.98,-1016.4 5692.02,-1016.4 5692.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="5477.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;131 待调用</text>
</g>
<!-- st_131_calling -->
<g id="node35" class="node">
<title>st_131_calling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5692.02,-873.6 5371.98,-873.6 5371.98,-693.6 5692.02,-693.6 5692.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="5477.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;132 调用中</text>
</g>
<!-- st_131_failed -->
<g id="node36" class="node">
<title>st_131_failed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5528.02,-550.8 5207.98,-550.8 5207.98,-370.8 5528.02,-370.8 5528.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="5296.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;133 模型不可用</text>
</g>
<!-- st_131_ok -->
<g id="node37" class="node">
<title>st_131_ok</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5958.02,-550.8 5637.98,-550.8 5637.98,-370.8 5958.02,-370.8 5958.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="5735.2" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;134 调用成功</text>
</g>
<!-- st_132_pending -->
<g id="node38" class="node">
<title>st_132_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6388.02,-1196.4 6067.98,-1196.4 6067.98,-1016.4 6388.02,-1016.4 6388.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="6173.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;135 待建单</text>
</g>
<!-- st_132_ticketing -->
<g id="node39" class="node">
<title>st_132_ticketing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6388.02,-873.6 6067.98,-873.6 6067.98,-693.6 6388.02,-693.6 6388.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="6173.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;136 建单中</text>
</g>
<!-- st_132_notified -->
<g id="node40" class="node">
<title>st_132_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6388.02,-550.8 6067.98,-550.8 6067.98,-370.8 6388.02,-370.8 6388.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="6156.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;137 已告知等待</text>
</g>
<!-- st_132_handedoff -->
<g id="node41" class="node">
<title>st_132_handedoff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6388.02,-228 6067.98,-228 6067.98,-48 6388.02,-48 6388.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="6156.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;138 人工已接管</text>
</g>
<!-- st_211_pending -->
<g id="node42" class="node">
<title>st_211_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6818.02,-1196.4 6497.98,-1196.4 6497.98,-1016.4 6818.02,-1016.4 6818.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="6603.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;211 待接入</text>
</g>
<!-- st_211_registering -->
<g id="node43" class="node">
<title>st_211_registering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6818.02,-873.6 6497.98,-873.6 6497.98,-693.6 6818.02,-693.6 6818.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="6603.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;212 登记中</text>
</g>
<!-- st_211_scanning -->
<g id="node44" class="node">
<title>st_211_scanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6818.02,-550.8 6497.98,-550.8 6497.98,-370.8 6818.02,-370.8 6818.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="6603.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;213 扫描中</text>
</g>
<!-- st_211_submitted -->
<g id="node45" class="node">
<title>st_211_submitted</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6818.02,-228 6497.98,-228 6497.98,-48 6818.02,-48 6818.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="6586.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;214 已提交候选</text>
</g>
<!-- st_221_pending -->
<g id="node46" class="node">
<title>st_221_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7248.02,-1196.4 6927.98,-1196.4 6927.98,-1016.4 7248.02,-1016.4 7248.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="7033.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;221 待审阅</text>
</g>
<!-- st_221_reviewing -->
<g id="node47" class="node">
<title>st_221_reviewing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7248.02,-873.6 6927.98,-873.6 6927.98,-693.6 7248.02,-693.6 7248.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="7033.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;222 审阅中</text>
</g>
<!-- st_221_decided -->
<g id="node48" class="node">
<title>st_221_decided</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7248.02,-550.8 6927.98,-550.8 6927.98,-370.8 7248.02,-370.8 7248.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="7033.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;223 已决策</text>
</g>
<!-- st_221_promoted -->
<g id="node49" class="node">
<title>st_221_promoted</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7248.02,-228 6927.98,-228 6927.98,-48 7248.02,-48 7248.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="7008.53" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;224 已晋升可检索</text>
</g>
<!-- st_221_rejected -->
<g id="node50" class="node">
<title>st_221_rejected</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="7678.02,-228 7357.98,-228 7357.98,-48 7678.02,-48 7678.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="7446.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;225 已驳回退回</text>
</g>
<!-- st_231_pending -->
<g id="node51" class="node">
<title>st_231_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8241.02,-1196.4 7920.98,-1196.4 7920.98,-1016.4 8241.02,-1016.4 8241.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="8026.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;231 待巡检</text>
</g>
<!-- st_231_probing -->
<g id="node52" class="node">
<title>st_231_probing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8241.02,-873.6 7920.98,-873.6 7920.98,-693.6 8241.02,-693.6 8241.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="8026.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;232 巡检中</text>
</g>
<!-- st_231_fresh -->
<g id="node53" class="node">
<title>st_231_fresh</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8086.02,-550.8 7765.98,-550.8 7765.98,-370.8 8086.02,-370.8 8086.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="7854.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;233 新鲜度正常</text>
</g>
<!-- st_231_stale -->
<g id="node54" class="node">
<title>st_231_stale</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8516.02,-550.8 8195.98,-550.8 8195.98,-370.8 8516.02,-370.8 8516.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="8284.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;234 新鲜度异常</text>
</g>
<!-- st_232_pending -->
<g id="node55" class="node">
<title>st_232_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8946.02,-1196.4 8625.98,-1196.4 8625.98,-1016.4 8946.02,-1016.4 8946.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="8731.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;235 待上报</text>
</g>
<!-- st_232_reporting -->
<g id="node56" class="node">
<title>st_232_reporting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8946.02,-873.6 8625.98,-873.6 8625.98,-693.6 8946.02,-693.6 8946.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="8731.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;236 上报中</text>
</g>
<!-- st_232_listed -->
<g id="node57" class="node">
<title>st_232_listed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8946.02,-550.8 8625.98,-550.8 8625.98,-370.8 8946.02,-370.8 8946.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="8706.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;237 控制台已列出</text>
</g>
<!-- st_232_fixed -->
<g id="node58" class="node">
<title>st_232_fixed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="8946.02,-228 8625.98,-228 8625.98,-48 8946.02,-48 8946.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="8714.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;238 已修复下线</text>
</g>
<!-- st_001_pending&#45;&gt;st_001_normalizing -->
<g id="edge1" class="edge">
<title>st_001_pending&#45;&gt;st_001_normalizing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-1016.47C208,-975.27 208,-926.16 208,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-883.96 208,-876.46 205.38,-883.96 210.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-933.6 208,-956.4 307.35,-956.4 307.35,-933.6 208,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">收到企业微信提问</text>
</g>
<!-- st_001_normalizing&#45;&gt;st_001_searching -->
<g id="edge16" class="edge">
<title>st_001_normalizing&#45;&gt;st_001_searching</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 272.34,-633.6 272.34,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">归一化完成</text>
</g>
<!-- st_001_searching&#45;&gt;st_001_got -->
<g id="edge36" class="edge">
<title>st_001_searching&#45;&gt;st_001_got</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 307.35,-310.8 307.35,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索返回候选条目</text>
</g>
<!-- st_002_pending&#45;&gt;st_002_checking -->
<g id="edge2" class="edge">
<title>st_002_pending&#45;&gt;st_002_checking</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M790,-1016.47C790,-975.27 790,-926.16 790,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="792.63,-883.96 790,-876.46 787.38,-883.96 792.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="790,-933.6 790,-956.4 866.01,-956.4 866.01,-933.6 790,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="793" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">进入回复策略</text>
</g>
<!-- st_002_checking&#45;&gt;st_002_passed -->
<g id="edge17" class="edge">
<title>st_002_checking&#45;&gt;st_002_passed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M747.86,-693.67C728.18,-652.12 704.68,-602.53 684.48,-559.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="686.97,-559.02 681.38,-553.37 682.22,-561.27 686.97,-559.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="718.56,-610.8 718.56,-633.6 782.9,-633.6 782.9,-610.8 718.56,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="721.56" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度达标</text>
</g>
<!-- st_002_checking&#45;&gt;st_002_failed -->
<g id="edge18" class="edge">
<title>st_002_checking&#45;&gt;st_002_failed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M867.07,-693.67C903.45,-651.68 946.95,-601.49 984.15,-558.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="986.11,-560.3 989.04,-552.92 982.14,-556.87 986.11,-560.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="937.34,-610.8 937.34,-633.6 1076.38,-633.6 1076.38,-610.8 937.34,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="940.34" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足，转 US&#45;002</text>
</g>
<!-- st_003_pending&#45;&gt;st_003_composing -->
<g id="edge3" class="edge">
<title>st_003_pending&#45;&gt;st_003_composing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1498,-1016.47C1498,-975.27 1498,-926.16 1498,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1500.63,-883.96 1498,-876.46 1495.38,-883.96 1500.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1498,-933.6 1498,-956.4 1550.68,-956.4 1550.68,-933.6 1498,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1501" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验通过</text>
</g>
<!-- st_003_composing&#45;&gt;st_003_delivering -->
<g id="edge19" class="edge">
<title>st_003_composing&#45;&gt;st_003_delivering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1498,-693.67C1498,-652.47 1498,-603.36 1498,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1500.63,-561.16 1498,-553.66 1495.38,-561.16 1500.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1498,-610.8 1498,-633.6 1574.01,-633.6 1574.01,-610.8 1498,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1501" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">答复正文就绪</text>
</g>
<!-- st_003_delivering&#45;&gt;st_003_answered -->
<g id="edge37" class="edge">
<title>st_003_delivering&#45;&gt;st_003_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1498,-370.87C1498,-329.67 1498,-280.56 1498,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1500.63,-238.36 1498,-230.86 1495.38,-238.36 1500.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1498,-288 1498,-310.8 1597.35,-310.8 1597.35,-288 1498,-288"/>
<text xml:space="preserve" text-anchor="start" x="1501" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">企业微信回传成功</text>
</g>
<!-- st_011_pending&#45;&gt;st_011_judging -->
<g id="edge4" class="edge">
<title>st_011_pending&#45;&gt;st_011_judging</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1928,-1016.47C1928,-975.27 1928,-926.16 1928,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1930.63,-883.96 1928,-876.46 1925.38,-883.96 1930.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1928,-933.6 1928,-956.4 2015.68,-956.4 2015.68,-933.6 1928,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1931" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足触发</text>
</g>
<!-- st_011_judging&#45;&gt;st_011_escalated -->
<g id="edge20" class="edge">
<title>st_011_judging&#45;&gt;st_011_escalated</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1928,-693.67C1928,-652.47 1928,-603.36 1928,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1930.63,-561.16 1928,-553.66 1925.38,-561.16 1930.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1928,-610.8 1928,-633.6 2015.68,-633.6 2015.68,-610.8 1928,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1931" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">确认无可靠候选</text>
</g>
<!-- st_012_pending&#45;&gt;st_012_ticketing -->
<g id="edge5" class="edge">
<title>st_012_pending&#45;&gt;st_012_ticketing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2358,-1016.47C2358,-975.27 2358,-926.16 2358,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2360.63,-883.96 2358,-876.46 2355.38,-883.96 2360.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2358,-933.6 2358,-956.4 2434.01,-956.4 2434.01,-933.6 2358,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="2361" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定已转人工</text>
</g>
<!-- st_012_ticketing&#45;&gt;st_012_notified -->
<g id="edge21" class="edge">
<title>st_012_ticketing&#45;&gt;st_012_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2358,-693.67C2358,-652.47 2358,-603.36 2358,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2360.63,-561.16 2358,-553.66 2355.38,-561.16 2360.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2358,-610.8 2358,-633.6 2434.01,-633.6 2434.01,-610.8 2358,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2361" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">工单创建完成</text>
</g>
<!-- st_012_notified&#45;&gt;st_012_answered -->
<g id="edge38" class="edge">
<title>st_012_notified&#45;&gt;st_012_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2358,-370.87C2358,-329.67 2358,-280.56 2358,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2360.63,-238.36 2358,-230.86 2355.38,-238.36 2360.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2358,-288 2358,-310.8 2410.68,-310.8 2410.68,-288 2358,-288"/>
<text xml:space="preserve" text-anchor="start" x="2361" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">人工接手</text>
</g>
<!-- st_111_pending&#45;&gt;st_111_counting -->
<g id="edge6" class="edge">
<title>st_111_pending&#45;&gt;st_111_counting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2940,-1016.47C2940,-975.27 2940,-926.16 2940,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2942.63,-883.96 2940,-876.46 2937.38,-883.96 2942.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2940,-933.6 2940,-956.4 3039.35,-956.4 3039.35,-933.6 2940,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="2943" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营人员发起查询</text>
</g>
<!-- st_111_counting&#45;&gt;st_111_empty -->
<g id="edge22" class="edge">
<title>st_111_counting&#45;&gt;st_111_empty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2897.86,-693.67C2878.18,-652.12 2854.68,-602.53 2834.48,-559.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2836.97,-559.02 2831.38,-553.37 2832.22,-561.27 2836.97,-559.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2868.56,-610.8 2868.56,-633.6 2932.91,-633.6 2932.91,-610.8 2868.56,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2871.56" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">条目数为 0</text>
</g>
<!-- st_111_counting&#45;&gt;st_111_ready -->
<g id="edge23" class="edge">
<title>st_111_counting&#45;&gt;st_111_ready</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3017.07,-693.67C3053.45,-651.68 3096.95,-601.49 3134.15,-558.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3136.11,-560.3 3139.04,-552.92 3132.14,-556.87 3136.11,-560.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3087.34,-610.8 3087.34,-633.6 3163.36,-633.6 3163.36,-610.8 3087.34,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="3090.34" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">条目数大于 0</text>
</g>
<!-- st_112_pending&#45;&gt;st_112_rendering -->
<g id="edge7" class="edge">
<title>st_112_pending&#45;&gt;st_112_rendering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3648,-1016.47C3648,-975.27 3648,-926.16 3648,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3650.63,-883.96 3648,-876.46 3645.38,-883.96 3650.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3648,-933.6 3648,-956.4 3712.34,-956.4 3712.34,-933.6 3648,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="3651" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定为空库</text>
</g>
<!-- st_112_rendering&#45;&gt;st_112_shown -->
<g id="edge24" class="edge">
<title>st_112_rendering&#45;&gt;st_112_shown</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3648,-693.67C3648,-652.47 3648,-603.36 3648,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3650.63,-561.16 3648,-553.66 3645.38,-561.16 3650.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3648,-610.8 3648,-633.6 3712.34,-633.6 3712.34,-610.8 3648,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="3651" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">提示已渲染</text>
</g>
<!-- st_121_pending&#45;&gt;st_121_waiting -->
<g id="edge8" class="edge">
<title>st_121_pending&#45;&gt;st_121_waiting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4237,-1016.47C4237,-975.27 4237,-926.16 4237,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4239.63,-883.96 4237,-876.46 4234.38,-883.96 4239.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4237,-933.6 4237,-956.4 4348.02,-956.4 4348.02,-933.6 4237,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="4240" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起检索并启动计时</text>
</g>
<!-- st_121_waiting&#45;&gt;st_121_timedout -->
<g id="edge25" class="edge">
<title>st_121_waiting&#45;&gt;st_121_timedout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4192.92,-693.67C4172.33,-652.12 4147.75,-602.53 4126.62,-559.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4129.05,-558.9 4123.37,-553.34 4124.35,-561.23 4129.05,-558.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4162.27,-610.8 4162.27,-633.6 4253.85,-633.6 4253.85,-610.8 4162.27,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="4165.27" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">超过 8 秒未返回</text>
</g>
<!-- st_121_waiting&#45;&gt;st_121_returned -->
<g id="edge26" class="edge">
<title>st_121_waiting&#45;&gt;st_121_returned</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4312.13,-693.67C4347.59,-651.68 4389.99,-601.49 4426.26,-558.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4428.17,-560.37 4431.01,-552.94 4424.16,-556.98 4428.17,-560.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4380.63,-610.8 4380.63,-633.6 4468.32,-633.6 4468.32,-610.8 4380.63,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="4383.63" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">8 秒内返回候选</text>
</g>
<!-- st_122_pending&#45;&gt;st_122_notifying -->
<g id="edge9" class="edge">
<title>st_122_pending&#45;&gt;st_122_notifying</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4938,-1016.47C4938,-975.27 4938,-926.16 4938,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4940.63,-883.96 4938,-876.46 4935.38,-883.96 4940.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4938,-933.6 4938,-956.4 4990.68,-956.4 4990.68,-933.6 4938,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="4941" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定超时</text>
</g>
<!-- st_122_notifying&#45;&gt;st_122_notified -->
<g id="edge27" class="edge">
<title>st_122_notifying&#45;&gt;st_122_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4938,-693.67C4938,-652.47 4938,-603.36 4938,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4940.63,-561.16 4938,-553.66 4935.38,-561.16 4940.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4938,-610.8 4938,-633.6 5002.34,-633.6 5002.34,-610.8 4938,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="4941" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">提示已下发</text>
</g>
<!-- st_131_pending&#45;&gt;st_131_calling -->
<g id="edge10" class="edge">
<title>st_131_pending&#45;&gt;st_131_calling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5532,-1016.47C5532,-975.27 5532,-926.16 5532,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5534.63,-883.96 5532,-876.46 5529.38,-883.96 5534.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5532,-933.6 5532,-956.4 5608.01,-956.4 5608.01,-933.6 5532,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="5535" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起模型调用</text>
</g>
<!-- st_131_calling&#45;&gt;st_131_failed -->
<g id="edge28" class="edge">
<title>st_131_calling&#45;&gt;st_131_failed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5486.53,-693.67C5465.29,-652.12 5439.94,-602.53 5418.15,-559.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5420.54,-558.81 5414.79,-553.32 5415.87,-561.2 5420.54,-558.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5454.92,-610.8 5454.92,-633.6 5565.94,-633.6 5565.94,-610.8 5454.92,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="5457.92" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">调用失败或返回异常</text>
</g>
<!-- st_131_calling&#45;&gt;st_131_ok -->
<g id="edge29" class="edge">
<title>st_131_calling&#45;&gt;st_131_ok</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5605.74,-693.67C5640.55,-651.68 5682.17,-601.49 5717.77,-558.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="5719.65,-560.41 5722.41,-552.96 5715.6,-557.06 5719.65,-560.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5672.98,-610.8 5672.98,-633.6 5748.99,-633.6 5748.99,-610.8 5672.98,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="5675.98" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">调用正常返回</text>
</g>
<!-- st_132_pending&#45;&gt;st_132_ticketing -->
<g id="edge11" class="edge">
<title>st_132_pending&#45;&gt;st_132_ticketing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6228,-1016.47C6228,-975.27 6228,-926.16 6228,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6230.63,-883.96 6228,-876.46 6225.38,-883.96 6230.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6228,-933.6 6228,-956.4 6315.68,-956.4 6315.68,-933.6 6228,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="6231" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">模型判定不可用</text>
</g>
<!-- st_132_ticketing&#45;&gt;st_132_notified -->
<g id="edge30" class="edge">
<title>st_132_ticketing&#45;&gt;st_132_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6228,-693.67C6228,-652.47 6228,-603.36 6228,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6230.63,-561.16 6228,-553.66 6225.38,-561.16 6230.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6228,-610.8 6228,-633.6 6304.01,-633.6 6304.01,-610.8 6228,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="6231" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">工单创建完成</text>
</g>
<!-- st_132_notified&#45;&gt;st_132_handedoff -->
<g id="edge39" class="edge">
<title>st_132_notified&#45;&gt;st_132_handedoff</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6228,-370.87C6228,-329.67 6228,-280.56 6228,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6230.63,-238.36 6228,-230.86 6225.38,-238.36 6230.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6228,-288 6228,-310.8 6280.68,-310.8 6280.68,-288 6228,-288"/>
<text xml:space="preserve" text-anchor="start" x="6231" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">人工接手</text>
</g>
<!-- st_211_pending&#45;&gt;st_211_registering -->
<g id="edge12" class="edge">
<title>st_211_pending&#45;&gt;st_211_registering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6658,-1016.47C6658,-975.27 6658,-926.16 6658,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6660.63,-883.96 6658,-876.46 6655.38,-883.96 6660.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6658,-933.6 6658,-956.4 6710.68,-956.4 6710.68,-933.6 6658,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="6661" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">上传素材</text>
</g>
<!-- st_211_registering&#45;&gt;st_211_scanning -->
<g id="edge31" class="edge">
<title>st_211_registering&#45;&gt;st_211_scanning</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6658,-693.67C6658,-652.47 6658,-603.36 6658,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6660.63,-561.16 6658,-553.66 6655.38,-561.16 6660.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6658,-610.8 6658,-633.6 6710.68,-633.6 6710.68,-610.8 6658,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="6661" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">登记完成</text>
</g>
<!-- st_211_scanning&#45;&gt;st_211_submitted -->
<g id="edge40" class="edge">
<title>st_211_scanning&#45;&gt;st_211_submitted</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6658,-370.87C6658,-329.67 6658,-280.56 6658,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="6660.63,-238.36 6658,-230.86 6655.38,-238.36 6660.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6658,-288 6658,-310.8 6757.35,-310.8 6757.35,-288 6658,-288"/>
<text xml:space="preserve" text-anchor="start" x="6661" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">候选已抽取并提交</text>
</g>
<!-- st_221_pending&#45;&gt;st_221_reviewing -->
<g id="edge13" class="edge">
<title>st_221_pending&#45;&gt;st_221_reviewing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7088,-1016.47C7088,-975.27 7088,-926.16 7088,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7090.63,-883.96 7088,-876.46 7085.38,-883.96 7090.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7088,-933.6 7088,-956.4 7175.68,-956.4 7175.68,-933.6 7088,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="7091" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">候选提交到治理</text>
</g>
<!-- st_221_reviewing&#45;&gt;st_221_decided -->
<g id="edge32" class="edge">
<title>st_221_reviewing&#45;&gt;st_221_decided</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7088,-693.67C7088,-652.47 7088,-603.36 7088,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7090.63,-561.16 7088,-553.66 7085.38,-561.16 7090.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7088,-610.8 7088,-633.6 7187.35,-633.6 7187.35,-610.8 7088,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="7091" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营人员记录决策</text>
</g>
<!-- st_221_decided&#45;&gt;st_221_promoted -->
<g id="edge41" class="edge">
<title>st_221_decided&#45;&gt;st_221_promoted</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7088,-370.87C7088,-329.67 7088,-280.56 7088,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7090.63,-238.36 7088,-230.86 7085.38,-238.36 7090.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7088,-288 7088,-310.8 7140.68,-310.8 7140.68,-288 7088,-288"/>
<text xml:space="preserve" text-anchor="start" x="7091" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">批准晋升</text>
</g>
<!-- st_221_decided&#45;&gt;st_221_rejected -->
<g id="edge42" class="edge">
<title>st_221_decided&#45;&gt;st_221_rejected</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M7207.21,-370.87C7264.3,-328.27 7332.72,-277.23 7390.81,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7392.07,-236.23 7396.51,-229.64 7388.93,-232.02 7392.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7315.89,-288 7315.89,-310.8 7368.57,-310.8 7368.57,-288 7315.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="7318.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">驳回退回</text>
</g>
<!-- st_231_pending&#45;&gt;st_231_probing -->
<g id="edge14" class="edge">
<title>st_231_pending&#45;&gt;st_231_probing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M8081,-1016.47C8081,-975.27 8081,-926.16 8081,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8083.63,-883.96 8081,-876.46 8078.38,-883.96 8083.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8081,-933.6 8081,-956.4 8157.01,-956.4 8157.01,-933.6 8081,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="8084" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">到达巡检周期</text>
</g>
<!-- st_231_probing&#45;&gt;st_231_fresh -->
<g id="edge33" class="edge">
<title>st_231_probing&#45;&gt;st_231_fresh</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M8038.03,-693.67C8017.96,-652.12 7994,-602.53 7973.4,-559.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="7975.86,-558.97 7970.24,-553.36 7971.14,-561.25 7975.86,-558.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8008.15,-610.8 8008.15,-633.6 8084.16,-633.6 8084.16,-610.8 8008.15,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="8011.15" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">全部在阈值内</text>
</g>
<!-- st_231_probing&#45;&gt;st_231_stale -->
<g id="edge34" class="edge">
<title>st_231_probing&#45;&gt;st_231_stale</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M8157.24,-693.67C8193.23,-651.68 8236.25,-601.49 8273.06,-558.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8274.99,-560.33 8277.88,-552.93 8271.01,-556.91 8274.99,-560.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8226.75,-610.8 8226.75,-633.6 8314.43,-633.6 8314.43,-610.8 8226.75,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="8229.75" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">存在超阈值条目</text>
</g>
<!-- st_232_pending&#45;&gt;st_232_reporting -->
<g id="edge15" class="edge">
<title>st_232_pending&#45;&gt;st_232_reporting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M8786,-1016.47C8786,-975.27 8786,-926.16 8786,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8788.63,-883.96 8786,-876.46 8783.38,-883.96 8788.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8786,-933.6 8786,-956.4 8873.68,-956.4 8873.68,-933.6 8786,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="8789" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定新鲜度异常</text>
</g>
<!-- st_232_reporting&#45;&gt;st_232_listed -->
<g id="edge35" class="edge">
<title>st_232_reporting&#45;&gt;st_232_listed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M8786,-693.67C8786,-652.47 8786,-603.36 8786,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8788.63,-561.16 8786,-553.66 8783.38,-561.16 8788.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8786,-610.8 8786,-633.6 8885.35,-633.6 8885.35,-610.8 8786,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="8789" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">告警已落库并展示</text>
</g>
<!-- st_232_listed&#45;&gt;st_232_fixed -->
<g id="edge43" class="edge">
<title>st_232_listed&#45;&gt;st_232_fixed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M8786,-370.87C8786,-329.67 8786,-280.56 8786,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="8788.63,-238.36 8786,-230.86 8783.38,-238.36 8788.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="8786,-288 8786,-310.8 8897.02,-310.8 8897.02,-288 8786,-288"/>
<text xml:space="preserve" text-anchor="start" x="8789" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营人员修复后下线</text>
</g>
</g>
</svg>
`;case`pano-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3725pt" height="1608pt"
 viewBox="0.00 0.00 3725.00 1608.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1592.65)">
<g id="clust1" class="cluster">
<title>cluster_us_ask</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-349.2 8,-1569.6 626,-1569.6 626,-349.2 8,-349.2"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1556.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;001 客户提问获得专业答复</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_i_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="60,-1222 60,-1508.4 586,-1508.4 586,-1222 60,-1222"/>
<text xml:space="preserve" text-anchor="start" x="68" y="-1495.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;001 阶段性目标 · 取得可靠候选知识</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_i_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-815.6 48,-1102 586,-1102 586,-815.6 48,-815.6"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-1089.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;003 阶段性目标 · 生成并下发答复</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_i_002</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-389.2 48,-675.6 586,-675.6 586,-389.2 48,-389.2"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-662.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;002 阶段性目标 · 判定可否自动答复</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_us_lowconfidence</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="634,-807.6 634,-1110 1734,-1110 1734,-807.6 634,-807.6"/>
<text xml:space="preserve" text-anchor="start" x="642" y="-1097.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;002 答不准时转人工而非硬答</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_us_kbempty</title>
<polygon fill="#1a468d" stroke="#1c3979" points="1742,-775.6 1742,-1163.2 2857,-1163.2 2857,-775.6 1742,-775.6"/>
<text xml:space="preserve" text-anchor="start" x="1750" y="-1150.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;101 知识库为空时运营人员能看见</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_i_111</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1782,-815.6 1782,-1102 2258,-1102 2258,-815.6 1782,-815.6"/>
<text xml:space="preserve" text-anchor="start" x="1790" y="-1089.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;111 阶段性目标 · 读出条目数并判定空库</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_i_112</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2379,-815.6 2379,-1102 2817,-1102 2817,-815.6 2379,-815.6"/>
<text xml:space="preserve" text-anchor="start" x="2387" y="-1089.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;112 阶段性目标 · 把空库显式呈现出来</text>
</g>
<g id="clust9" class="cluster">
<title>cluster_us_ragtimeout</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1272,-381.2 1272,-683.6 2147,-683.6 2147,-381.2 1272,-381.2"/>
<text xml:space="preserve" text-anchor="start" x="1280" y="-670.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;102 RAGFLOW 超时时客户不被静默等待</text>
</g>
<g id="clust10" class="cluster">
<title>cluster_us_llmdown</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1263,-8 1263,-310.4 2163,-310.4 2163,-8 1263,-8"/>
<text xml:space="preserve" text-anchor="start" x="1271" y="-297.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;103 LLM 不可用时转人工而非静默失败</text>
</g>
<g id="clust11" class="cluster">
<title>cluster_us_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2955,-1222 2955,-1508.4 3355,-1508.4 3355,-1222 2955,-1222"/>
<text xml:space="preserve" text-anchor="start" x="2963" y="-1495.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;201 素材入库后自动进入候选知识</text>
</g>
<g id="clust12" class="cluster">
<title>cluster_us_govern</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2949,-815.6 2949,-1102 3361,-1102 3361,-815.6 2949,-815.6"/>
<text xml:space="preserve" text-anchor="start" x="2957" y="-1089.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;202 候选知识经我决策后才对外可见</text>
</g>
<g id="clust13" class="cluster">
<title>cluster_us_alert</title>
<polygon fill="#1a468d" stroke="#1c3979" points="2635,-349.2 2635,-736.8 3687,-736.8 3687,-349.2 2635,-349.2"/>
<text xml:space="preserve" text-anchor="start" x="2643" y="-723.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;203 知识陈旧时我能收到提示</text>
</g>
<g id="clust14" class="cluster">
<title>cluster_i_231</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2675,-389.2 2675,-675.6 3087,-675.6 3087,-389.2 2675,-389.2"/>
<text xml:space="preserve" text-anchor="start" x="2683" y="-662.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;231 阶段性目标 · 巡检并判定新鲜度</text>
</g>
<g id="clust15" class="cluster">
<title>cluster_i_232</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3209,-389.2 3209,-675.6 3647,-675.6 3647,-389.2 3209,-389.2"/>
<text xml:space="preserve" text-anchor="start" x="3217" y="-662.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;232 阶段性目标 · 上报告警并呈现</text>
</g>
<!-- ui_001 -->
<g id="node1" class="node">
<title>ui_001</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="553.73,-1434 92.27,-1434 92.27,-1254 553.73,-1254 553.73,-1434"/>
<text xml:space="preserve" text-anchor="start" x="256.87" y="-1347" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 会话输入</text>
<text xml:space="preserve" text-anchor="start" x="116.28" y="-1324" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;001。客户提问的输入界面：提交问题并看到受理反馈。</text>
</g>
<!-- ui_003 -->
<g id="node2" class="node">
<title>ui_003</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="553.98,-1027.6 80.02,-1027.6 80.02,-847.6 553.98,-847.6 553.98,-1027.6"/>
<text xml:space="preserve" text-anchor="start" x="250.87" y="-940.6" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;003 答复呈现</text>
<text xml:space="preserve" text-anchor="start" x="104.03" y="-917.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;003。答复的呈现界面：客户在这里读到有据可依的答复。</text>
</g>
<!-- ui_002 -->
<g id="node3" class="node">
<title>ui_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="553.98,-601.2 80.02,-601.2 80.02,-421.2 553.98,-421.2 553.98,-601.2"/>
<text xml:space="preserve" text-anchor="start" x="250.87" y="-514.2" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 判定反馈</text>
<text xml:space="preserve" text-anchor="start" x="104.03" y="-491.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;002。判定过程中的客户侧反馈：让客户知道系统在处理。</text>
</g>
<!-- ui_011 -->
<g id="node4" class="node">
<title>ui_011</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1160.23,-1027.6 673.77,-1027.6 673.77,-847.6 1160.23,-847.6 1160.23,-1027.6"/>
<text xml:space="preserve" text-anchor="start" x="850.87" y="-940.6" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;011 转接提示</text>
<text xml:space="preserve" text-anchor="start" x="697.78" y="-917.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;011。转接过程中的客户侧提示：让客户知道正在转入人工。</text>
</g>
<!-- ui_012 -->
<g id="node5" class="node">
<title>ui_012</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1693.98,-1027.6 1270.02,-1027.6 1270.02,-847.6 1693.98,-847.6 1693.98,-1027.6"/>
<text xml:space="preserve" text-anchor="start" x="1407.53" y="-940.6" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;012 转人工告知</text>
<text xml:space="preserve" text-anchor="start" x="1294.04" y="-917.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;012。工单创建后的告知界面与运营侧工单查看。</text>
</g>
<!-- ui_111 -->
<g id="node6" class="node">
<title>ui_111</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2225.73,-1027.6 1814.27,-1027.6 1814.27,-847.6 2225.73,-847.6 2225.73,-1027.6"/>
<text xml:space="preserve" text-anchor="start" x="1953.87" y="-940.6" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;111 状态查询</text>
<text xml:space="preserve" text-anchor="start" x="1838.29" y="-917.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;111。运营人员发起状态查询并看到判定入口。</text>
</g>
<!-- ui_112 -->
<g id="node7" class="node">
<title>ui_112</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2784.97,-1027.6 2411.03,-1027.6 2411.03,-847.6 2784.97,-847.6 2784.97,-1027.6"/>
<text xml:space="preserve" text-anchor="start" x="2515.2" y="-940.6" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;112 空库提示呈现</text>
<text xml:space="preserve" text-anchor="start" x="2435.04" y="-917.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;112。空库状态的显式呈现与告警入口。</text>
</g>
<!-- ui_121 -->
<g id="node8" class="node">
<title>ui_121</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1660.47,-601.2 1311.53,-601.2 1311.53,-421.2 1660.47,-421.2 1660.47,-601.2"/>
<text xml:space="preserve" text-anchor="start" x="1419.87" y="-514.2" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;121 等待反馈</text>
<text xml:space="preserve" text-anchor="start" x="1335.55" y="-491.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;121。检索等待期间的客户侧反馈。</text>
</g>
<!-- ui_122 -->
<g id="node9" class="node">
<title>ui_122</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2107.22,-601.2 1770.78,-601.2 1770.78,-421.2 2107.22,-421.2 2107.22,-601.2"/>
<text xml:space="preserve" text-anchor="start" x="1864.53" y="-514.2" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;122 处理中提示</text>
<text xml:space="preserve" text-anchor="start" x="1794.8" y="-491.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;122。超时后的会话内提示下发。</text>
</g>
<!-- ui_131 -->
<g id="node10" class="node">
<title>ui_131</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1651.47,-228 1302.53,-228 1302.53,-48 1651.47,-48 1651.47,-228"/>
<text xml:space="preserve" text-anchor="start" x="1410.87" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;131 调用反馈</text>
<text xml:space="preserve" text-anchor="start" x="1326.55" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;131。模型调用异常的客户侧反馈。</text>
</g>
<!-- ui_132 -->
<g id="node11" class="node">
<title>ui_132</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2122.72,-228 1761.28,-228 1761.28,-48 2122.72,-48 2122.72,-228"/>
<text xml:space="preserve" text-anchor="start" x="1867.53" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;132 转人工告知</text>
<text xml:space="preserve" text-anchor="start" x="1785.29" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;132。建单后的客户告知与告警呈现。</text>
</g>
<!-- ui_211 -->
<g id="node12" class="node">
<title>ui_211</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3323.22,-1434 2986.78,-1434 2986.78,-1254 3323.22,-1254 3323.22,-1434"/>
<text xml:space="preserve" text-anchor="start" x="3088.87" y="-1347" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;211 素材上传</text>
<text xml:space="preserve" text-anchor="start" x="3010.8" y="-1324" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;211。素材上传与扫描进度反馈。</text>
</g>
<!-- ui_221 -->
<g id="node13" class="node">
<title>ui_221</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3329.47,-1027.6 2980.53,-1027.6 2980.53,-847.6 3329.47,-847.6 3329.47,-1027.6"/>
<text xml:space="preserve" text-anchor="start" x="3080.53" y="-940.6" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;221 审阅工作台</text>
<text xml:space="preserve" text-anchor="start" x="3004.55" y="-917.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;221。候选审阅与决策的操作界面。</text>
</g>
<!-- ui_231 -->
<g id="node14" class="node">
<title>ui_231</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3055.47,-601.2 2706.53,-601.2 2706.53,-421.2 3055.47,-421.2 3055.47,-601.2"/>
<text xml:space="preserve" text-anchor="start" x="2814.87" y="-514.2" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;231 巡检状态</text>
<text xml:space="preserve" text-anchor="start" x="2730.55" y="-491.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;231。巡检过程与新鲜度状态呈现。</text>
</g>
<!-- ui_232 -->
<g id="node15" class="node">
<title>ui_232</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3614.97,-601.2 3241.03,-601.2 3241.03,-421.2 3614.97,-421.2 3614.97,-601.2"/>
<text xml:space="preserve" text-anchor="start" x="3361.87" y="-514.2" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;232 告警呈现</text>
<text xml:space="preserve" text-anchor="start" x="3265.04" y="-491.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">对应阶段性目标 I&#45;232。问题条目的告警列表与处理入口。</text>
</g>
<!-- ui_001&#45;&gt;ui_003 -->
<g id="edge4" class="edge">
<title>ui_001&#45;&gt;ui_003</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M245.43,-1254.18C233.05,-1235.43 222.1,-1214.95 215.32,-1194 198.21,-1141.1 217.73,-1083.46 244.08,-1036.35"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="246.27,-1037.81 247.74,-1030 241.72,-1035.18 246.27,-1037.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="215.32,-1171.2 215.32,-1194 268,-1194 268,-1171.2 215.32,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="218.32" y="-1177" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- ui_001&#45;&gt;ui_012 -->
<g id="edge3" class="edge">
<title>ui_001&#45;&gt;ui_012</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M553.34,-1328.15C739.61,-1308.87 1004.56,-1264.63 1215,-1163.2 1280.66,-1131.55 1343.58,-1080.04 1391.83,-1034.32"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1393.35,-1036.51 1396.96,-1029.43 1389.72,-1032.71 1393.35,-1036.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1192.95,-1171.2 1192.95,-1194 1292.3,-1194 1292.3,-1171.2 1192.95,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="1195.95" y="-1177" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- ui_003&#45;&gt;ui_001 -->
<g id="edge11" class="edge">
<title>ui_003&#45;&gt;ui_001</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M318.32,-1027.38C319.26,-1091.23 320.54,-1177.4 321.52,-1243.56"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="318.9,-1243.52 321.63,-1250.98 324.15,-1243.44 318.9,-1243.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="320.71,-1171.2 320.71,-1194 396.73,-1194 396.73,-1171.2 320.71,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="323.71" y="-1177" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- ui_003&#45;&gt;ui_002 -->
<g id="edge12" class="edge">
<title>ui_003&#45;&gt;ui_002</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M317,-847.63C317,-778.59 317,-682.93 317,-611.42"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="319.63,-611.58 317,-604.08 314.38,-611.58 319.63,-611.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="317,-744.8 317,-767.6 381.34,-767.6 381.34,-744.8 317,-744.8"/>
<text xml:space="preserve" text-anchor="start" x="320" y="-750.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- ui_011&#45;&gt;ui_121 -->
<!-- ui_012&#45;&gt;ui_003 -->
<g id="edge7" class="edge">
<title>ui_012&#45;&gt;ui_003</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1395.79,-1027.37C1347.36,-1071.24 1283.06,-1119.45 1215,-1142.57 1087.06,-1186.01 735.77,-1183.48 607,-1142.57 538.26,-1120.73 471.78,-1076.04 419.85,-1033.95"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="421.78,-1032.13 414.31,-1029.41 418.45,-1036.19 421.78,-1032.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="879.83,-1171.2 879.83,-1194 944.17,-1194 944.17,-1171.2 879.83,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="882.83" y="-1177" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- ui_111&#45;&gt;ui_112 -->
<g id="edge5" class="edge">
<title>ui_111&#45;&gt;ui_112</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2225.41,-937.6C2282.38,-937.6 2344.09,-937.6 2400.59,-937.6"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2400.55,-940.23 2408.05,-937.6 2400.55,-934.98 2400.55,-940.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2280.37,-940.6 2280.37,-963.4 2356.38,-963.4 2356.38,-940.6 2280.37,-940.6"/>
<text xml:space="preserve" text-anchor="start" x="2283.37" y="-946.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- ui_112&#45;&gt;ui_122 -->
<g id="edge8" class="edge">
<title>ui_112&#45;&gt;ui_122</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2459.85,-847.63C2350.24,-777.04 2197.38,-678.6 2085.62,-606.62"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2087.24,-604.54 2079.51,-602.69 2084.4,-608.96 2087.24,-604.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2327.53,-744.8 2327.53,-767.6 2403.54,-767.6 2403.54,-744.8 2327.53,-744.8"/>
<text xml:space="preserve" text-anchor="start" x="2330.53" y="-750.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- ui_121&#45;&gt;ui_131 -->
<!-- ui_122&#45;&gt;ui_132 -->
<g id="edge13" class="edge">
<title>ui_122&#45;&gt;ui_132</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1939.72,-421.29C1940.16,-366.16 1940.74,-295.25 1941.2,-238.29"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1943.82,-238.38 1941.26,-230.86 1938.57,-238.33 1943.82,-238.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1940.5,-318.4 1940.5,-341.2 2016.51,-341.2 2016.51,-318.4 1940.5,-318.4"/>
<text xml:space="preserve" text-anchor="start" x="1943.5" y="-324.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
<!-- ui_211&#45;&gt;ui_221 -->
<g id="edge6" class="edge">
<title>ui_211&#45;&gt;ui_221</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3092.37,-1254.26C3081.9,-1235.2 3072.63,-1214.58 3067.01,-1194 3052.64,-1141.41 3069.46,-1083.92 3092.12,-1036.82"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3094.39,-1038.14 3095.37,-1030.25 3089.69,-1035.8 3094.39,-1038.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3067.01,-1171.2 3067.01,-1194 3094,-1194 3094,-1171.2 3067.01,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="3070.01" y="-1179.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">[...]</text>
</g>
<!-- ui_221&#45;&gt;ui_211 -->
<g id="edge9" class="edge">
<title>ui_221&#45;&gt;ui_211</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3155,-1027.38C3155,-1091.23 3155,-1177.4 3155,-1243.56"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3152.38,-1243.48 3155,-1250.98 3157.63,-1243.48 3152.38,-1243.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3155,-1171.2 3155,-1194 3207.68,-1194 3207.68,-1171.2 3155,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="3158" y="-1177" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- ui_221&#45;&gt;ui_231 -->
<g id="edge10" class="edge">
<title>ui_221&#45;&gt;ui_231</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3097.56,-847.63C3052.62,-778.03 2990.21,-681.36 2943.93,-609.67"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2946.28,-608.47 2940.01,-603.59 2941.87,-611.32 2946.28,-608.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3042.54,-744.8 3042.54,-767.6 3106.89,-767.6 3106.89,-744.8 3042.54,-744.8"/>
<text xml:space="preserve" text-anchor="start" x="3045.54" y="-750.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">批准后推送</text>
</g>
<!-- ui_231&#45;&gt;ui_232 -->
<g id="edge14" class="edge">
<title>ui_231&#45;&gt;ui_232</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3055.2,-511.2C3111.11,-511.2 3173.43,-511.2 3230.86,-511.2"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3230.62,-513.83 3238.12,-511.2 3230.62,-508.58 3230.62,-513.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3110.24,-514.2 3110.24,-537 3186.26,-537 3186.26,-514.2 3110.24,-514.2"/>
<text xml:space="preserve" text-anchor="start" x="3113.24" y="-520" font-family="Arial" font-size="14.00" fill="#bbfcd3">更新生命周期</text>
</g>
<!-- ui_232&#45;&gt;ui_221 -->
<g id="edge15" class="edge">
<title>ui_232&#45;&gt;ui_221</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3370.85,-601.05C3326.09,-670.62 3263.91,-767.3 3217.77,-839.01"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3215.72,-837.36 3213.87,-845.09 3220.13,-840.2 3215.72,-837.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3275.15,-744.8 3275.15,-767.6 3339.5,-767.6 3339.5,-744.8 3275.15,-744.8"/>
<text xml:space="preserve" text-anchor="start" x="3278.15" y="-750.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
</g>
</svg>
`;case`pano-api`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="970pt" height="1110pt"
 viewBox="0.00 0.00 970.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- api_001 -->
<g id="node1" class="node">
<title>api_001</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="430.26,-1080 0,-1080 0,-900 430.26,-900 430.26,-1080"/>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1002" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="98.42" y="-979" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="146.37" y="-961" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- api_002 -->
<g id="node2" class="node">
<title>api_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="411.5,-780 18.76,-780 18.76,-600 411.5,-600 411.5,-780"/>
<text xml:space="preserve" text-anchor="start" x="75.62" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;002 GET /handoffs 工单列表</text>
<text xml:space="preserve" text-anchor="start" x="38.82" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/handoff&#45;routes.js:9 — 运营人员查看人工工单。</text>
</g>
<!-- api_101 -->
<g id="node3" class="node">
<title>api_101</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="412.49,-480 17.77,-480 17.77,-300 412.49,-300 412.49,-480"/>
<text xml:space="preserve" text-anchor="start" x="37.83" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="99.66" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="133.86" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
</g>
<!-- api_201 -->
<g id="node4" class="node">
<title>api_201</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="383.56,-180 46.69,-180 46.69,0 383.56,0 383.56,-180"/>
<text xml:space="preserve" text-anchor="start" x="66.75" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;201 POST /materials 素材接入</text>
<text xml:space="preserve" text-anchor="start" x="74.67" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js:8 — 接收素材。</text>
</g>
<!-- api_202 -->
<g id="node5" class="node">
<title>api_202</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="939.71,-1080 540.55,-1080 540.55,-900 939.71,-900 939.71,-1080"/>
<text xml:space="preserve" text-anchor="start" x="560.6" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;202 POST /knowledge/scan 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="561.31" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:10 — 触发候选知识扫描。</text>
</g>
<!-- api_203 -->
<g id="node6" class="node">
<title>api_203</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="938.6,-780 541.66,-780 541.66,-600 938.6,-600 938.6,-780"/>
<text xml:space="preserve" text-anchor="start" x="561.72" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;203 GET /knowledge/status 知识状态</text>
<text xml:space="preserve" text-anchor="start" x="619.66" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:26 —</text>
<text xml:space="preserve" text-anchor="start" x="677.62" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询扫描与治理状态。</text>
</g>
<!-- api_001&#45;&gt;api_002 -->
<!-- api_002&#45;&gt;api_101 -->
<!-- api_101&#45;&gt;api_201 -->
<!-- api_202&#45;&gt;api_203 -->
</g>
</svg>
`;case`pano-carrier`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2723pt" height="1941pt"
 viewBox="0.00 0.00 2723.00 1941.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1926.25)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1903.2 805,-1903.2 805,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1890.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="813,-653.6 813,-1903.2 1715,-1903.2 1715,-653.6 813,-653.6"/>
<text xml:space="preserve" text-anchor="start" x="821" y="-1890.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_feat_knowledge_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1744,-330.8 1744,-1903.2 2685,-1903.2 2685,-330.8 1744,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="1752" y="-1890.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;002&#45;F 知识运营能力</text>
</g>
<!-- cvt_normalize -->
<g id="node1" class="node">
<title>cvt_normalize</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="672.4,-1842 267.6,-1842 267.6,-1662 672.4,-1662 672.4,-1842"/>
<text xml:space="preserve" text-anchor="start" x="360.53" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;001 提问归一化转换器</text>
<text xml:space="preserve" text-anchor="start" x="291.61" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN&#45;001 与</text>
<text xml:space="preserve" text-anchor="start" x="368.3" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">POD&#45;001→OUT&#45;001 两组映射。</text>
</g>
<!-- in_chatmessage -->
<g id="node2" class="node">
<title>in_chatmessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="466.27,-1519.2 47.73,-1519.2 47.73,-1339.2 466.27,-1339.2 466.27,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="174.2" y="-1432.2" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;001 客户提问入参</text>
<text xml:space="preserve" text-anchor="start" x="67.79" y="-1409.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</text>
</g>
<!-- biz_query -->
<g id="node3" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="448.69,-1196.4 99.31,-1196.4 99.31,-1016.4 448.69,-1016.4 448.69,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="185.64" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="119.36" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="184.4" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- pod_ticket -->
<g id="node4" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="446.45,-873.6 119.55,-873.6 119.55,-693.6 446.45,-693.6 446.45,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="180.19" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="139.61" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="215.9" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- dao_store -->
<g id="node5" class="node">
<title>dao_store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M451.18,-534.44C451.18,-543.47 378.49,-550.8 289,-550.8 199.51,-550.8 126.82,-543.47 126.82,-534.44 126.82,-534.44 126.82,-387.16 126.82,-387.16 126.82,-378.13 199.51,-370.8 289,-370.8 378.49,-370.8 451.18,-378.13 451.18,-387.16 451.18,-387.16 451.18,-534.44 451.18,-534.44"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M451.18,-534.44C451.18,-525.41 378.49,-518.07 289,-518.07 199.51,-518.07 126.82,-525.41 126.82,-534.44"/>
<text xml:space="preserve" text-anchor="start" x="194.53" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;001 本地存储访问</text>
<text xml:space="preserve" text-anchor="start" x="146.88" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</text>
</g>
<!-- out_answer -->
<g id="node6" class="node">
<title>out_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="665.02,-228 344.98,-228 344.98,-48 665.02,-48 665.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="411.09" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;001 答复出参视图</text>
<text xml:space="preserve" text-anchor="start" x="398.72" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="417.48" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向企业微信会话的答复载荷。</text>
</g>
<!-- in_probequery -->
<g id="node7" class="node">
<title>in_probequery</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1173.02,-1842 852.98,-1842 852.98,-1662 1173.02,-1662 1173.02,-1842"/>
<text xml:space="preserve" text-anchor="start" x="930.2" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;101 状态探测入参</text>
<text xml:space="preserve" text-anchor="start" x="903.79" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="931.73" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">控制台发起的集成状态查询。</text>
</g>
<!-- cvt_probe -->
<g id="node8" class="node">
<title>cvt_probe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1674.74,-1842 1283.26,-1842 1283.26,-1662 1674.74,-1662 1674.74,-1842"/>
<text xml:space="preserve" text-anchor="start" x="1377.86" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;101 探测结果转换器</text>
<text xml:space="preserve" text-anchor="start" x="1327.71" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js — 覆盖</text>
<text xml:space="preserve" text-anchor="start" x="1307.28" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">BIZ&#45;101→OUT&#45;101 与 BIZ&#45;101→POD&#45;101 两组映射。</text>
</g>
<!-- biz_proberesult -->
<g id="node9" class="node">
<title>biz_proberesult</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1237.51,-1519.2 896.49,-1519.2 896.49,-1339.2 1237.51,-1339.2 1237.51,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="978.64" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;101 探测结果对象</text>
<text xml:space="preserve" text-anchor="start" x="916.55" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="946.14" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载条目数、响应耗时与调用结果判定。</text>
</g>
<!-- pod_alert -->
<g id="node10" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1642.45,-1196.4 1315.55,-1196.4 1315.55,-1016.4 1642.45,-1016.4 1642.45,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1376.19" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="1335.61" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="1414.82" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- out_status -->
<g id="node11" class="node">
<title>out_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1206.02,-1196.4 885.98,-1196.4 885.98,-1016.4 1206.02,-1016.4 1206.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="952.09" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;101 状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="936.79" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="977.24" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的状态载荷。</text>
</g>
<!-- dao_alert -->
<g id="node12" class="node">
<title>dao_alert</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1653.68,-857.24C1653.68,-866.27 1575.38,-873.6 1479,-873.6 1382.62,-873.6 1304.32,-866.27 1304.32,-857.24 1304.32,-857.24 1304.32,-709.96 1304.32,-709.96 1304.32,-700.93 1382.62,-693.6 1479,-693.6 1575.38,-693.6 1653.68,-700.93 1653.68,-709.96 1653.68,-709.96 1653.68,-857.24 1653.68,-857.24"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1653.68,-857.24C1653.68,-848.21 1575.38,-840.87 1479,-840.87 1382.62,-840.87 1304.32,-848.21 1304.32,-857.24"/>
<text xml:space="preserve" text-anchor="start" x="1384.53" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;101 告警存储访问</text>
<text xml:space="preserve" text-anchor="start" x="1324.38" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</text>
</g>
<!-- in_material -->
<g id="node13" class="node">
<title>in_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2155.51,-1842 1784.49,-1842 1784.49,-1662 2155.51,-1662 2155.51,-1842"/>
<text xml:space="preserve" text-anchor="start" x="1903.87" y="-1755" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;201 素材入参</text>
<text xml:space="preserve" text-anchor="start" x="1804.54" y="-1732" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 上传素材的请求载荷。</text>
</g>
<!-- cvt_material -->
<g id="node14" class="node">
<title>cvt_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2644.9,-1842 2265.1,-1842 2265.1,-1662 2644.9,-1662 2644.9,-1842"/>
<text xml:space="preserve" text-anchor="start" x="2370.53" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;201 素材转换器</text>
<text xml:space="preserve" text-anchor="start" x="2329.98" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 覆盖</text>
<text xml:space="preserve" text-anchor="start" x="2289.11" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材载荷→BIZ&#45;201 与 BIZ&#45;201→POD&#45;201 两组映射。</text>
</g>
<!-- biz_candidate -->
<g id="node15" class="node">
<title>biz_candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2235.02,-1519.2 1914.98,-1519.2 1914.98,-1339.2 2235.02,-1339.2 2235.02,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="1986.64" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;201 候选知识对象</text>
<text xml:space="preserve" text-anchor="start" x="1937.04" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1974.98" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载扫描出的候选条目与决策状态。</text>
</g>
<!-- pod_document -->
<g id="node16" class="node">
<title>pod_document</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2523.45,-1196.4 2196.55,-1196.4 2196.55,-1016.4 2523.45,-1016.4 2523.45,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2265.53" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;201 文档登记实体</text>
<text xml:space="preserve" text-anchor="start" x="2216.61" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="2277.47" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents 数组结构对应。</text>
</g>
<!-- dao_registry -->
<g id="node17" class="node">
<title>dao_registry</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M2534.68,-857.24C2534.68,-866.27 2456.38,-873.6 2360,-873.6 2263.62,-873.6 2185.32,-866.27 2185.32,-857.24 2185.32,-857.24 2185.32,-709.96 2185.32,-709.96 2185.32,-700.93 2263.62,-693.6 2360,-693.6 2456.38,-693.6 2534.68,-700.93 2534.68,-709.96 2534.68,-709.96 2534.68,-857.24 2534.68,-857.24"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M2534.68,-857.24C2534.68,-848.21 2456.38,-840.87 2360,-840.87 2263.62,-840.87 2185.32,-848.21 2185.32,-857.24"/>
<text xml:space="preserve" text-anchor="start" x="2265.53" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;201 文档登记访问</text>
<text xml:space="preserve" text-anchor="start" x="2205.38" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</text>
</g>
<!-- out_knowledgestatus -->
<g id="node18" class="node">
<title>out_knowledgestatus</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2520.02,-550.8 2199.98,-550.8 2199.98,-370.8 2520.02,-370.8 2520.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2249.42" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;201 知识状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="2249.95" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="2259.98" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的扫描与治理状态载荷。</text>
</g>
<!-- cvt_normalize&#45;&gt;in_chatmessage -->
<g id="edge1" class="edge">
<title>cvt_normalize&#45;&gt;in_chatmessage</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M410.95,-1662.07C383.25,-1620.34 350.16,-1570.51 321.78,-1527.76"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="323.99,-1526.35 317.65,-1521.55 319.62,-1529.25 323.99,-1526.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="369.89,-1579.2 369.89,-1602 507.37,-1602 507.37,-1579.2 369.89,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="372.89" y="-1585" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 报文→IN&#45;001 映射</text>
</g>
<!-- cvt_normalize&#45;&gt;out_answer -->
<g id="edge2" class="edge">
<title>cvt_normalize&#45;&gt;out_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M516.78,-1662.02C545.57,-1599.06 577,-1511.66 577,-1430.2 577,-1430.2 577,-1430.2 577,-459.8 577,-383.95 557.6,-300.4 538.94,-237.59"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="541.51,-237.01 536.83,-230.58 536.48,-238.52 541.51,-237.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="577,-933.6 577,-956.4 765.05,-956.4 765.05,-933.6 577,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="580" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 POD&#45;001→OUT&#45;001 映射</text>
</g>
<!-- in_chatmessage&#45;&gt;biz_query -->
<g id="edge9" class="edge">
<title>in_chatmessage&#45;&gt;biz_query</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M261.71,-1339.27C263.9,-1298.07 266.5,-1248.96 268.74,-1206.57"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="271.36,-1206.88 269.13,-1199.25 266.11,-1206.6 271.36,-1206.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="266.01,-1256.4 266.01,-1279.2 353.69,-1279.2 353.69,-1256.4 266.01,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="269.01" y="-1262.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为检索查询</text>
</g>
<!-- biz_query&#45;&gt;pod_ticket -->
<g id="edge13" class="edge">
<title>biz_query&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M276.5,-1016.47C277.65,-975.27 279.03,-926.16 280.22,-883.77"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="282.84,-884.03 280.42,-876.46 277.59,-883.88 282.84,-884.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="278.77,-933.6 278.77,-956.4 366.45,-956.4 366.45,-933.6 278.77,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="281.77" y="-939.4" font-family="Arial" font-size="14.00" fill="#eff5fd">低置信度落工单</text>
</g>
<!-- pod_ticket&#45;&gt;dao_store -->
<g id="edge16" class="edge">
<title>pod_ticket&#45;&gt;dao_store</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M284.66,-693.67C285.43,-652.81 286.34,-604.18 287.13,-562.03"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="289.75,-562.32 287.26,-554.77 284.5,-562.22 289.75,-562.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="286.18,-610.8 286.18,-633.6 338.86,-633.6 338.86,-610.8 286.18,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="289.18" y="-616.6" font-family="Arial" font-size="14.00" fill="#eff5fd">写入工单</text>
</g>
<!-- dao_store&#45;&gt;out_answer -->
<g id="edge18" class="edge">
<title>dao_store&#45;&gt;out_answer</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M349.46,-370.01C377.42,-328.48 410.7,-279.06 439.28,-236.6"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="441.42,-238.13 443.43,-230.44 437.06,-235.2 441.42,-238.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="403.48,-288 403.48,-310.8 479.49,-310.8 479.49,-288 403.48,-288"/>
<text xml:space="preserve" text-anchor="start" x="406.48" y="-293.8" font-family="Arial" font-size="14.00" fill="#eff5fd">查询答复内容</text>
</g>
<!-- in_probequery&#45;&gt;biz_proberesult -->
<g id="edge3" class="edge">
<title>in_probequery&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M1019.53,-1662.39C1022.15,-1635.56 1025.68,-1606.08 1030.32,-1579.2 1033.11,-1563 1036.69,-1545.96 1040.51,-1529.42"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1043.06,-1530.04 1042.23,-1522.14 1037.95,-1528.84 1043.06,-1530.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1030.32,-1579.2 1030.32,-1602 1118,-1602 1118,-1579.2 1030.32,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="1033.32" y="-1585" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为探测结果</text>
</g>
<!-- cvt_probe&#45;&gt;biz_proberesult -->
<g id="edge4" class="edge">
<title>cvt_probe&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1351.96,-1662.09C1325.11,-1642.66 1297.15,-1621.94 1271.5,-1602 1240.58,-1577.97 1207.81,-1551.09 1177.77,-1525.87"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1179.53,-1523.92 1172.1,-1521.1 1176.15,-1527.94 1179.53,-1523.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1271.5,-1579.2 1271.5,-1602 1451,-1602 1451,-1579.2 1271.5,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="1274.5" y="-1585" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;101→OUT&#45;101 映射</text>
</g>
<!-- cvt_probe&#45;&gt;pod_alert -->
<g id="edge5" class="edge">
<title>cvt_probe&#45;&gt;pod_alert</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1479,-1662.19C1479,-1542.78 1479,-1331.13 1479,-1206.63"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1481.63,-1206.86 1479,-1199.36 1476.38,-1206.86 1481.63,-1206.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1479,-1417.8 1479,-1440.6 1659.28,-1440.6 1659.28,-1417.8 1479,-1417.8"/>
<text xml:space="preserve" text-anchor="start" x="1482" y="-1423.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;101→POD&#45;101 映射</text>
</g>
<!-- biz_proberesult&#45;&gt;pod_alert -->
<g id="edge10" class="edge">
<title>biz_proberesult&#45;&gt;pod_alert</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M1181.22,-1339.27C1235.81,-1296.76 1301.2,-1245.84 1356.79,-1202.56"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1358.22,-1204.77 1362.53,-1198.09 1355,-1200.63 1358.22,-1204.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1285.35,-1256.4 1285.35,-1279.2 1373.04,-1279.2 1373.04,-1256.4 1285.35,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1288.35" y="-1262.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">异常转告警实体</text>
</g>
<!-- biz_proberesult&#45;&gt;out_status -->
<g id="edge11" class="edge">
<title>biz_proberesult&#45;&gt;out_status</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1061.18,-1339.27C1058.48,-1298.07 1055.27,-1248.96 1052.49,-1206.57"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1055.12,-1206.56 1052.01,-1199.25 1049.88,-1206.91 1055.12,-1206.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1057.13,-1256.4 1057.13,-1279.2 1133.14,-1279.2 1133.14,-1256.4 1057.13,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1060.13" y="-1262.2" font-family="Arial" font-size="14.00" fill="#eff5fd">渲染状态载荷</text>
</g>
<!-- pod_alert&#45;&gt;dao_alert -->
<g id="edge14" class="edge">
<title>pod_alert&#45;&gt;dao_alert</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1479,-1016.47C1479,-975.61 1479,-926.98 1479,-884.83"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1481.63,-885.07 1479,-877.57 1476.38,-885.07 1481.63,-885.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1479,-933.6 1479,-956.4 1531.68,-956.4 1531.68,-933.6 1479,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1482" y="-939.4" font-family="Arial" font-size="14.00" fill="#eff5fd">写入告警</text>
</g>
<!-- in_material&#45;&gt;biz_candidate -->
<g id="edge6" class="edge">
<title>in_material&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M1990.52,-1662.06C1997.36,-1635.21 2005.51,-1605.81 2014.32,-1579.2 2019.78,-1562.69 2026.18,-1545.39 2032.73,-1528.67"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="2035.17,-1529.65 2035.49,-1521.71 2030.29,-1527.72 2035.17,-1529.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2014.32,-1579.2 2014.32,-1602 2102,-1602 2102,-1579.2 2014.32,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="2017.32" y="-1585" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为候选对象</text>
</g>
<!-- cvt_material&#45;&gt;biz_candidate -->
<g id="edge7" class="edge">
<title>cvt_material&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2349.65,-1662.07C2299.41,-1619.65 2239.23,-1568.85 2188.03,-1525.62"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2189.96,-1523.81 2182.54,-1520.98 2186.57,-1527.83 2189.96,-1523.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2276.39,-1579.2 2276.39,-1602 2421.66,-1602 2421.66,-1579.2 2276.39,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="2279.39" y="-1585" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 素材→BIZ&#45;201 映射</text>
</g>
<!-- cvt_material&#45;&gt;pod_document -->
<g id="edge8" class="edge">
<title>cvt_material&#45;&gt;pod_document</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2454.46,-1662.09C2453.61,-1635.38 2451.98,-1606.04 2449,-1579.2 2434.56,-1449.31 2404.43,-1301.55 2383.24,-1206.53"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2385.82,-1206.06 2381.62,-1199.32 2380.7,-1207.21 2385.82,-1206.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2440.78,-1417.8 2440.78,-1440.6 2621.06,-1440.6 2621.06,-1417.8 2440.78,-1417.8"/>
<text xml:space="preserve" text-anchor="start" x="2443.78" y="-1423.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;201→POD&#45;201 映射</text>
</g>
<!-- biz_candidate&#45;&gt;pod_document -->
<g id="edge12" class="edge">
<title>biz_candidate&#45;&gt;pod_document</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M2154.01,-1339.27C2191.38,-1297.2 2236.08,-1246.88 2274.28,-1203.89"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="2276.05,-1205.84 2279.07,-1198.49 2272.13,-1202.36 2276.05,-1205.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2226.05,-1256.4 2226.05,-1279.2 2313.73,-1279.2 2313.73,-1256.4 2226.05,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="2229.05" y="-1262.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">登记为文档实体</text>
</g>
<!-- pod_document&#45;&gt;dao_registry -->
<g id="edge15" class="edge">
<title>pod_document&#45;&gt;dao_registry</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M2360,-1016.47C2360,-975.61 2360,-926.98 2360,-884.83"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="2362.63,-885.07 2360,-877.57 2357.38,-885.07 2362.63,-885.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2360,-933.6 2360,-956.4 2436.01,-956.4 2436.01,-933.6 2360,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="2363" y="-939.4" font-family="Arial" font-size="14.00" fill="#eff5fd">写入文档标识</text>
</g>
<!-- dao_registry&#45;&gt;out_knowledgestatus -->
<g id="edge17" class="edge">
<title>dao_registry&#45;&gt;out_knowledgestatus</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M2360,-692.81C2360,-651.8 2360,-603.09 2360,-561"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="2362.63,-561.26 2360,-553.76 2357.38,-561.26 2362.63,-561.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2360,-610.8 2360,-633.6 2412.68,-633.6 2412.68,-610.8 2360,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2363" y="-616.6" font-family="Arial" font-size="14.00" fill="#eff5fd">查询状态</text>
</g>
</g>
</svg>
`;case`proc-local`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="30pt" height="30pt"
 viewBox="0.00 0.00 30.00 30.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 15.05)">
</g>
</svg>
`;case`proc-prod`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="30pt" height="30pt"
 viewBox="0.00 0.00 30.00 30.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 15.05)">
</g>
</svg>
`;case`chain001F-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1806pt" height="327pt"
 viewBox="0.00 0.00 1806.00 327.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 312.25)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 1768,-289.2 1768,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.88,-228 48.12,-228 48.12,-48 825.88,-48 825.88,-228"/>
<text xml:space="preserve" text-anchor="start" x="316.97" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="68.18" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1727.63,-228 962.37,-228 962.37,-48 1727.63,-48 1727.63,-228"/>
<text xml:space="preserve" text-anchor="start" x="1216.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="982.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- us_ask&#45;&gt;us_lowconfidence -->
<g id="edge1" class="edge">
<title>us_ask&#45;&gt;us_lowconfidence</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M825.69,-111.55C853.41,-111.25 880.94,-111.41 907.62,-112.2 922.22,-112.63 937.08,-113.14 952.09,-113.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="951.89,-116.34 959.49,-114.01 952.09,-111.09 951.89,-116.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="880.63,-112.2 880.63,-135 907.62,-135 907.62,-112.2 880.63,-112.2"/>
<text xml:space="preserve" text-anchor="start" x="883.63" y="-120.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_lowconfidence&#45;&gt;us_ask -->
<g id="edge2" class="edge">
<title>us_lowconfidence&#45;&gt;us_ask</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M962.64,-138C920.8,-138 878.12,-138 836.08,-138"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="836.22,-135.38 828.72,-138 836.22,-140.63 836.22,-135.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="861.95,-141 861.95,-163.8 926.3,-163.8 926.3,-141 861.95,-141"/>
<text xml:space="preserve" text-anchor="start" x="864.95" y="-146.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
</g>
</svg>
`;case`chain001F-f`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1322pt" height="973pt"
 viewBox="0.00 0.00 1322.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 1284,-934.8 1284,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="961.88,-873.6 184.12,-873.6 184.12,-693.6 961.88,-693.6 961.88,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="452.97" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="204.18" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="813.63,-550.8 48.37,-550.8 48.37,-370.8 813.63,-370.8 813.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="302.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="68.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- f_answer -->
<g id="node3" class="node">
<title>f_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1244.02,-550.8 923.98,-550.8 923.98,-370.8 1244.02,-370.8 1244.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1005.09" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;001 应答编排能力</text>
<text xml:space="preserve" text-anchor="start" x="946.47" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</text>
</g>
<!-- f_retrieval -->
<g id="node4" class="node">
<title>f_retrieval</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="591.02,-228 270.98,-228 270.98,-48 591.02,-48 591.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="352.09" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;002 知识检索能力</text>
<text xml:space="preserve" text-anchor="start" x="300.98" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</text>
</g>
<!-- us_ask&#45;&gt;us_lowconfidence -->
<g id="edge1" class="edge">
<title>us_ask&#45;&gt;us_lowconfidence</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M454.7,-693.94C438.15,-675.92 423.56,-655.64 414.01,-633.6 404.26,-611.1 402.47,-585.44 404.56,-560.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="407.17,-561.25 405.36,-553.52 401.95,-560.69 407.17,-561.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="414.01,-610.8 414.01,-633.6 441,-633.6 441,-610.8 414.01,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="417.01" y="-619" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_ask&#45;&gt;f_answer -->
<g id="edge2" class="edge">
<title>us_ask&#45;&gt;f_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M714.66,-693.67C782.79,-650.9 864.48,-599.61 933.69,-556.16"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="934.98,-558.45 939.94,-552.24 932.19,-554 934.98,-558.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="843.82,-610.8 843.82,-633.6 873.16,-633.6 873.16,-610.8 843.82,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="846.82" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_lowconfidence&#45;&gt;us_ask -->
<g id="edge3" class="edge">
<title>us_lowconfidence&#45;&gt;us_ask</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M470.32,-550.63C488.67,-592.08 510.56,-641.54 529.41,-684.13"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="526.97,-685.1 532.41,-690.9 531.77,-682.98 526.97,-685.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="506.26,-610.8 506.26,-633.6 570.6,-633.6 570.6,-610.8 506.26,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="509.26" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- us_lowconfidence&#45;&gt;f_retrieval -->
<g id="edge4" class="edge">
<title>us_lowconfidence&#45;&gt;f_retrieval</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M431,-370.87C431,-329.67 431,-280.56 431,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="433.63,-238.36 431,-230.86 428.38,-238.36 433.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="431,-288 431,-310.8 460.34,-310.8 460.34,-288 431,-288"/>
<text xml:space="preserve" text-anchor="start" x="434" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
</g>
</svg>
`;case`chain001F-i-001`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1544pt" height="1296pt"
 viewBox="0.00 0.00 1544.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 1506,-1257.6 1506,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;001 阶段性目标 · 取得可靠候选知识</text>
</g>
<!-- i_001_1 -->
<g id="node1" class="node">
<title>i_001_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="475.84,-1196.4 48.16,-1196.4 48.16,-1016.4 475.84,-1016.4 475.84,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="185.86" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001&#45;1 归一化提问</text>
<text xml:space="preserve" text-anchor="start" x="68.21" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</text>
</g>
<!-- i_001_2 -->
<g id="node2" class="node">
<title>i_001_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1036.09,-1196.4 585.91,-1196.4 585.91,-1016.4 1036.09,-1016.4 1036.09,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="726.53" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001&#45;2 检索候选知识</text>
<text xml:space="preserve" text-anchor="start" x="605.96" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</text>
</g>
<!-- st_001_pending -->
<g id="node3" class="node">
<title>st_001_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1466.02,-1196.4 1145.98,-1196.4 1145.98,-1016.4 1466.02,-1016.4 1466.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1251.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;001 待检索</text>
</g>
<!-- st_001_normalizing -->
<g id="node4" class="node">
<title>st_001_normalizing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1466.02,-873.6 1145.98,-873.6 1145.98,-693.6 1466.02,-693.6 1466.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1243.2" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;002 归一化中</text>
</g>
<!-- st_001_searching -->
<g id="node5" class="node">
<title>st_001_searching</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1466.02,-550.8 1145.98,-550.8 1145.98,-370.8 1466.02,-370.8 1466.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1251.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;003 检索中</text>
</g>
<!-- st_001_got -->
<g id="node6" class="node">
<title>st_001_got</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1466.02,-228 1145.98,-228 1145.98,-48 1466.02,-48 1466.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1234.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;004 已取得候选</text>
</g>
<!-- i_001_3 -->
<g id="node7" class="node">
<title>i_001_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="488.1,-873.6 47.9,-873.6 47.9,-693.6 488.1,-693.6 488.1,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="175.19" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001&#45;3 候选排序与择优</text>
<text xml:space="preserve" text-anchor="start" x="67.96" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</text>
</g>
<!-- i_001_1&#45;&gt;i_001_3 -->
<!-- st_001_pending&#45;&gt;st_001_normalizing -->
<g id="edge2" class="edge">
<title>st_001_pending&#45;&gt;st_001_normalizing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1306,-1016.47C1306,-975.27 1306,-926.16 1306,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1308.63,-883.96 1306,-876.46 1303.38,-883.96 1308.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1306,-933.6 1306,-956.4 1405.35,-956.4 1405.35,-933.6 1306,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1309" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">收到企业微信提问</text>
</g>
<!-- st_001_normalizing&#45;&gt;st_001_searching -->
<g id="edge3" class="edge">
<title>st_001_normalizing&#45;&gt;st_001_searching</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1306,-693.67C1306,-652.47 1306,-603.36 1306,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1308.63,-561.16 1306,-553.66 1303.38,-561.16 1308.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1306,-610.8 1306,-633.6 1370.34,-633.6 1370.34,-610.8 1306,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1309" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">归一化完成</text>
</g>
<!-- st_001_searching&#45;&gt;st_001_got -->
<g id="edge4" class="edge">
<title>st_001_searching&#45;&gt;st_001_got</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1306,-370.87C1306,-329.67 1306,-280.56 1306,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1308.63,-238.36 1306,-230.86 1303.38,-238.36 1308.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1306,-288 1306,-310.8 1405.35,-310.8 1405.35,-288 1306,-288"/>
<text xml:space="preserve" text-anchor="start" x="1309" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索返回候选条目</text>
</g>
</g>
</svg>
`;case`chain001F-i-002`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1030pt" height="973pt"
 viewBox="0.00 0.00 1030.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_002</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 992,-934.8 992,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;002 阶段性目标 · 判定可否自动答复</text>
</g>
<!-- st_002_pending -->
<g id="node1" class="node">
<title>st_002_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;005 待校验</text>
</g>
<!-- st_002_checking -->
<g id="node2" class="node">
<title>st_002_checking</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;006 校验中</text>
</g>
<!-- st_002_passed -->
<g id="node3" class="node">
<title>st_002_passed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="145.2" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;007 校验通过</text>
</g>
<!-- st_002_failed -->
<g id="node4" class="node">
<title>st_002_failed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="566.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;008 置信度不足</text>
</g>
<!-- i_002_1 -->
<g id="node5" class="node">
<title>i_002_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="952.19,-873.6 477.81,-873.6 477.81,-693.6 952.19,-693.6 952.19,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="638.86" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;002&#45;1 置信度校验</text>
<text xml:space="preserve" text-anchor="start" x="497.87" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US&#45;002 的路径。</text>
</g>
<!-- st_002_pending&#45;&gt;st_002_checking -->
<g id="edge1" class="edge">
<title>st_002_pending&#45;&gt;st_002_checking</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 284.01,-633.6 284.01,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">进入回复策略</text>
</g>
<!-- st_002_checking&#45;&gt;st_002_passed -->
<g id="edge2" class="edge">
<title>st_002_checking&#45;&gt;st_002_passed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 272.34,-310.8 272.34,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度达标</text>
</g>
<!-- st_002_checking&#45;&gt;st_002_failed -->
<g id="edge3" class="edge">
<title>st_002_checking&#45;&gt;st_002_failed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M327.21,-370.87C384.3,-328.27 452.72,-277.23 510.81,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="512.07,-236.23 516.51,-229.64 508.93,-232.02 512.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-288 435.89,-310.8 574.93,-310.8 574.93,-288 435.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="438.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足，转 US&#45;002</text>
</g>
</g>
</svg>
`;case`chain001F-i-003`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="934pt" height="1296pt"
 viewBox="0.00 0.00 934.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 896,-1257.6 896,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;003 阶段性目标 · 生成并下发答复</text>
</g>
<!-- st_003_pending -->
<g id="node1" class="node">
<title>st_003_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1196.4 47.98,-1196.4 47.98,-1016.4 368.02,-1016.4 368.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;009 待生成</text>
</g>
<!-- st_003_composing -->
<g id="node2" class="node">
<title>st_003_composing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;010 生成中</text>
</g>
<!-- st_003_delivering -->
<g id="node3" class="node">
<title>st_003_delivering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;011 下发中</text>
</g>
<!-- st_003_answered -->
<g id="node4" class="node">
<title>st_003_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;012 已答复</text>
</g>
<!-- i_003_1 -->
<g id="node5" class="node">
<title>i_003_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="855.84,-1196.4 478.16,-1196.4 478.16,-1016.4 855.84,-1016.4 855.84,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="599.2" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003&#45;1 生成答复</text>
<text xml:space="preserve" text-anchor="start" x="498.22" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</text>
</g>
<!-- i_003_2 -->
<g id="node6" class="node">
<title>i_003_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="837.09,-873.6 496.91,-873.6 496.91,-693.6 837.09,-693.6 837.09,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="599.2" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003&#45;2 下发答复</text>
<text xml:space="preserve" text-anchor="start" x="516.97" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</text>
</g>
<!-- st_003_pending&#45;&gt;st_003_composing -->
<g id="edge1" class="edge">
<title>st_003_pending&#45;&gt;st_003_composing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-1016.47C208,-975.27 208,-926.16 208,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-883.96 208,-876.46 205.38,-883.96 210.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-933.6 208,-956.4 260.68,-956.4 260.68,-933.6 208,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验通过</text>
</g>
<!-- st_003_composing&#45;&gt;st_003_delivering -->
<g id="edge2" class="edge">
<title>st_003_composing&#45;&gt;st_003_delivering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 284.01,-633.6 284.01,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">答复正文就绪</text>
</g>
<!-- st_003_delivering&#45;&gt;st_003_answered -->
<g id="edge3" class="edge">
<title>st_003_delivering&#45;&gt;st_003_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 307.35,-310.8 307.35,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">企业微信回传成功</text>
</g>
<!-- i_003_1&#45;&gt;i_003_2 -->
</g>
</svg>
`;case`chain001F-i-011`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="973pt"
 viewBox="0.00 0.00 876.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_011</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 838,-934.8 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;011 阶段性目标 · 判定进入人工路径</text>
</g>
<!-- st_011_pending -->
<g id="node1" class="node">
<title>st_011_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;101 待判定</text>
</g>
<!-- st_011_judging -->
<g id="node2" class="node">
<title>st_011_judging</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;102 判定中</text>
</g>
<!-- st_011_escalated -->
<g id="node3" class="node">
<title>st_011_escalated</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="145.2" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;103 已转人工</text>
</g>
<!-- i_011_1 -->
<g id="node4" class="node">
<title>i_011_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="561.86" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;011&#45;1 判定转人工</text>
<text xml:space="preserve" text-anchor="start" x="500.47" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度低于阈值或无候选时，判定进入人工路径。</text>
</g>
<!-- st_011_pending&#45;&gt;st_011_judging -->
<g id="edge1" class="edge">
<title>st_011_pending&#45;&gt;st_011_judging</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 295.68,-633.6 295.68,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足触发</text>
</g>
<!-- st_011_judging&#45;&gt;st_011_escalated -->
<g id="edge2" class="edge">
<title>st_011_judging&#45;&gt;st_011_escalated</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 295.68,-310.8 295.68,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">确认无可靠候选</text>
</g>
</g>
</svg>
`;case`chain001F-i-012`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="946pt" height="1296pt"
 viewBox="0.00 0.00 946.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_012</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 908,-1257.6 908,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;012 阶段性目标 · 生成工单并告知等待</text>
</g>
<!-- st_012_pending -->
<g id="node1" class="node">
<title>st_012_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1196.4 47.98,-1196.4 47.98,-1016.4 368.02,-1016.4 368.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;104 待建单</text>
</g>
<!-- st_012_ticketing -->
<g id="node2" class="node">
<title>st_012_ticketing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;105 建单中</text>
</g>
<!-- st_012_notified -->
<g id="node3" class="node">
<title>st_012_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;106 已告知等待</text>
</g>
<!-- st_012_answered -->
<g id="node4" class="node">
<title>st_012_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;107 人工已接管</text>
</g>
<!-- i_012_1 -->
<g id="node5" class="node">
<title>i_012_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="849.34,-1196.4 496.66,-1196.4 496.66,-1016.4 849.34,-1016.4 849.34,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="588.53" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;012&#45;1 创建人工工单</text>
<text xml:space="preserve" text-anchor="start" x="516.72" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</text>
</g>
<!-- i_012_2 -->
<g id="node6" class="node">
<title>i_012_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="868.09,-873.6 477.91,-873.6 477.91,-693.6 868.09,-693.6 868.09,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="588.53" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;012&#45;2 告知客户等待</text>
<text xml:space="preserve" text-anchor="start" x="497.97" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</text>
</g>
<!-- st_012_pending&#45;&gt;st_012_ticketing -->
<g id="edge1" class="edge">
<title>st_012_pending&#45;&gt;st_012_ticketing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-1016.47C208,-975.27 208,-926.16 208,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-883.96 208,-876.46 205.38,-883.96 210.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-933.6 208,-956.4 284.01,-956.4 284.01,-933.6 208,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定已转人工</text>
</g>
<!-- st_012_ticketing&#45;&gt;st_012_notified -->
<g id="edge2" class="edge">
<title>st_012_ticketing&#45;&gt;st_012_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 284.01,-633.6 284.01,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">工单创建完成</text>
</g>
<!-- st_012_notified&#45;&gt;st_012_answered -->
<g id="edge3" class="edge">
<title>st_012_notified&#45;&gt;st_012_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 260.68,-310.8 260.68,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">人工接手</text>
</g>
<!-- i_012_1&#45;&gt;i_012_2 -->
</g>
</svg>
`;case`chain001NF-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="978pt" height="973pt"
 viewBox="0.00 0.00 978.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 940,-934.8 940,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="900.39,-873.6 47.61,-873.6 47.61,-693.6 900.39,-693.6 900.39,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="328.96" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="67.67" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="455.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node2" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="753.27,-550.8 194.73,-550.8 194.73,-370.8 753.27,-370.8 753.27,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="300.07" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="214.78" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="380.23" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node3" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="831.62,-228 116.38,-228 116.38,-48 831.62,-48 831.62,-228"/>
<text xml:space="preserve" text-anchor="start" x="306.73" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="136.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- us_kbempty&#45;&gt;us_ragtimeout -->
<g id="edge1" class="edge">
<title>us_kbempty&#45;&gt;us_ragtimeout</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M474,-693.67C474,-652.47 474,-603.36 474,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="476.63,-561.16 474,-553.66 471.38,-561.16 476.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="474,-610.8 474,-633.6 550.01,-633.6 550.01,-610.8 474,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="477" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- us_ragtimeout&#45;&gt;us_llmdown -->
<g id="edge2" class="edge">
<title>us_ragtimeout&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M474,-370.87C474,-329.67 474,-280.56 474,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="476.63,-238.36 474,-230.86 471.38,-238.36 476.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="474,-288 474,-310.8 550.01,-310.8 550.01,-288 474,-288"/>
<text xml:space="preserve" text-anchor="start" x="477" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
</g>
</svg>
`;case`chain001NF-nf`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1459pt" height="1296pt"
 viewBox="0.00 0.00 1459.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 1421,-1257.6 1421,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1207.39,-1196.4 354.61,-1196.4 354.61,-1016.4 1207.39,-1016.4 1207.39,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="635.96" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="374.67" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="762.24" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node2" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="685.27,-873.6 126.73,-873.6 126.73,-693.6 685.27,-693.6 685.27,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="232.07" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="146.78" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="312.23" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- nf_kbempty -->
<g id="node3" class="node">
<title>nf_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1380.82,-873.6 795.18,-873.6 795.18,-693.6 1380.82,-693.6 1380.82,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="960.19" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;101 知识库为零条时状态可见</text>
<text xml:space="preserve" text-anchor="start" x="819.19" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</text>
</g>
<!-- us_llmdown -->
<g id="node4" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="763.62,-550.8 48.38,-550.8 48.38,-370.8 763.62,-370.8 763.62,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="238.73" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="68.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- nf_ragtimeout -->
<g id="node5" class="node">
<title>nf_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1240.5,-550.8 873.5,-550.8 873.5,-370.8 1240.5,-370.8 1240.5,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="897.52" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;102 RAGFlow 超 8 秒时客户可感知</text>
<text xml:space="preserve" text-anchor="start" x="935.31" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8</text>
<text xml:space="preserve" text-anchor="start" x="900.72" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">秒下发带说明的提示，客服不必反复刷新。角色：客户。</text>
</g>
<!-- nf_llmdown -->
<g id="node6" class="node">
<title>nf_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="680.06,-228 131.94,-228 131.94,-48 680.06,-48 680.06,-228"/>
<text xml:space="preserve" text-anchor="start" x="272.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;103 LLM 不可用时自动转人工</text>
<text xml:space="preserve" text-anchor="start" x="155.95" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</text>
</g>
<!-- us_kbempty&#45;&gt;us_ragtimeout -->
<g id="edge1" class="edge">
<title>us_kbempty&#45;&gt;us_ragtimeout</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M677.04,-1016.47C627.46,-974.05 568.07,-923.25 517.55,-880.02"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="519.54,-878.28 512.14,-875.4 516.13,-882.27 519.54,-878.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="604.74,-933.6 604.74,-956.4 680.76,-956.4 680.76,-933.6 604.74,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="607.74" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- us_kbempty&#45;&gt;nf_kbempty -->
<g id="edge2" class="edge">
<title>us_kbempty&#45;&gt;nf_kbempty</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M866.11,-1016.47C906.45,-974.31 954.72,-923.87 995.92,-880.82"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="997.61,-882.85 1000.9,-875.62 993.82,-879.22 997.61,-882.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="943.71,-933.6 943.71,-956.4 973.04,-956.4 973.04,-933.6 943.71,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="946.71" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_ragtimeout&#45;&gt;us_llmdown -->
<g id="edge3" class="edge">
<title>us_ragtimeout&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M406,-693.67C406,-652.47 406,-603.36 406,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="408.63,-561.16 406,-553.66 403.38,-561.16 408.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="406,-610.8 406,-633.6 482.01,-633.6 482.01,-610.8 406,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="409" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
<!-- us_ragtimeout&#45;&gt;nf_ragtimeout -->
<g id="edge4" class="edge">
<title>us_ragtimeout&#45;&gt;nf_ragtimeout</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M586.48,-693.67C673.79,-650.64 778.6,-598.99 867.12,-555.37"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="868.17,-557.78 873.74,-552.11 865.85,-553.07 868.17,-557.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="751.02,-610.8 751.02,-633.6 780.36,-633.6 780.36,-610.8 751.02,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="754.02" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_llmdown&#45;&gt;nf_llmdown -->
<g id="edge5" class="edge">
<title>us_llmdown&#45;&gt;nf_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M406,-370.87C406,-329.67 406,-280.56 406,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="408.63,-238.36 406,-230.86 403.38,-238.36 408.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="406,-288 406,-310.8 435.34,-310.8 435.34,-288 406,-288"/>
<text xml:space="preserve" text-anchor="start" x="409" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
</g>
</svg>
`;case`chain001NF-i-111`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="973pt"
 viewBox="0.00 0.00 876.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_111</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 838,-934.8 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;111 阶段性目标 · 读出条目数并判定空库</text>
</g>
<!-- st_111_pending -->
<g id="node1" class="node">
<title>st_111_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;111 待读取</text>
</g>
<!-- st_111_counting -->
<g id="node2" class="node">
<title>st_111_counting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;112 读取中</text>
</g>
<!-- st_111_empty -->
<g id="node3" class="node">
<title>st_111_empty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;113 判定为空库</text>
</g>
<!-- st_111_ready -->
<g id="node4" class="node">
<title>st_111_ready</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="575.2" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;114 条目正常</text>
</g>
<!-- i_111_1 -->
<g id="node5" class="node">
<title>i_111_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="561.86" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111&#45;1 读取条目数</text>
<text xml:space="preserve" text-anchor="start" x="506.72" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</text>
</g>
<!-- i_111_2 -->
<g id="node6" class="node">
<title>i_111_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-550.8 477.98,-550.8 477.98,-370.8 798.02,-370.8 798.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="553.53" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111&#45;2 判定零条场景</text>
<text xml:space="preserve" text-anchor="start" x="498.39" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</text>
</g>
<!-- st_111_pending&#45;&gt;st_111_counting -->
<g id="edge1" class="edge">
<title>st_111_pending&#45;&gt;st_111_counting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 307.35,-633.6 307.35,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营人员发起查询</text>
</g>
<!-- st_111_counting&#45;&gt;st_111_empty -->
<g id="edge2" class="edge">
<title>st_111_counting&#45;&gt;st_111_empty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 272.35,-310.8 272.35,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">条目数为 0</text>
</g>
<!-- st_111_counting&#45;&gt;st_111_ready -->
<g id="edge3" class="edge">
<title>st_111_counting&#45;&gt;st_111_ready</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M327.21,-370.87C384.3,-328.27 452.72,-277.23 510.81,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="512.07,-236.23 516.51,-229.64 508.93,-232.02 512.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-288 435.89,-310.8 511.91,-310.8 511.91,-288 435.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="438.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">条目数大于 0</text>
</g>
<!-- i_111_1&#45;&gt;i_111_2 -->
</g>
</svg>
`;case`chain001NF-i-112`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="973pt"
 viewBox="0.00 0.00 876.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_112</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 838,-934.8 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;112 阶段性目标 · 把空库显式呈现出来</text>
</g>
<!-- st_112_pending -->
<g id="node1" class="node">
<title>st_112_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;115 待呈现</text>
</g>
<!-- st_112_rendering -->
<g id="node2" class="node">
<title>st_112_rendering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;116 渲染中</text>
</g>
<!-- st_112_shown -->
<g id="node3" class="node">
<title>st_112_shown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;117 已显式提示</text>
</g>
<!-- i_112_1 -->
<g id="node4" class="node">
<title>i_112_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="553.53" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;112&#45;1 渲染空库提示</text>
<text xml:space="preserve" text-anchor="start" x="500.47" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">在控制台显式提示条目数为 0，不显示空白列表。</text>
</g>
<!-- st_112_pending&#45;&gt;st_112_rendering -->
<g id="edge1" class="edge">
<title>st_112_pending&#45;&gt;st_112_rendering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 272.34,-633.6 272.34,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定为空库</text>
</g>
<!-- st_112_rendering&#45;&gt;st_112_shown -->
<g id="edge2" class="edge">
<title>st_112_rendering&#45;&gt;st_112_shown</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 272.34,-310.8 272.34,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">提示已渲染</text>
</g>
</g>
</svg>
`;case`chain001NF-i-121`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="973pt"
 viewBox="0.00 0.00 876.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_121</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 838,-934.8 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;121 阶段性目标 · 计时并判定超时</text>
</g>
<!-- st_121_pending -->
<g id="node1" class="node">
<title>st_121_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;121 待计时</text>
</g>
<!-- st_121_waiting -->
<g id="node2" class="node">
<title>st_121_waiting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="145.2" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;122 等待响应</text>
</g>
<!-- st_121_timedout -->
<g id="node3" class="node">
<title>st_121_timedout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="145.2" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;123 判定超时</text>
</g>
<!-- st_121_returned -->
<g id="node4" class="node">
<title>st_121_returned</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="575.2" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;124 按时返回</text>
</g>
<!-- i_121_1 -->
<g id="node5" class="node">
<title>i_121_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="553.53" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;121&#45;1 启动超时计时</text>
<text xml:space="preserve" text-anchor="start" x="548.4" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">发起检索时同时启动 8 秒计时。</text>
</g>
<!-- i_121_2 -->
<g id="node6" class="node">
<title>i_121_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-550.8 477.98,-550.8 477.98,-370.8 798.02,-370.8 798.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="570.2" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;121&#45;2 判定超时</text>
<text xml:space="preserve" text-anchor="start" x="512.98" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</text>
</g>
<!-- st_121_pending&#45;&gt;st_121_waiting -->
<g id="edge1" class="edge">
<title>st_121_pending&#45;&gt;st_121_waiting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 319.02,-633.6 319.02,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起检索并启动计时</text>
</g>
<!-- st_121_waiting&#45;&gt;st_121_timedout -->
<g id="edge2" class="edge">
<title>st_121_waiting&#45;&gt;st_121_timedout</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 299.58,-310.8 299.58,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">超过 8 秒未返回</text>
</g>
<!-- st_121_waiting&#45;&gt;st_121_returned -->
<g id="edge3" class="edge">
<title>st_121_waiting&#45;&gt;st_121_returned</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M327.21,-370.87C384.3,-328.27 452.72,-277.23 510.81,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="512.07,-236.23 516.51,-229.64 508.93,-232.02 512.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-288 435.89,-310.8 523.58,-310.8 523.58,-288 435.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="438.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">8 秒内返回候选</text>
</g>
<!-- i_121_1&#45;&gt;i_121_2 -->
</g>
</svg>
`;case`chain001NF-i-122`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="973pt"
 viewBox="0.00 0.00 876.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_122</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 838,-934.8 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;122 阶段性目标 · 告知客户系统在处理</text>
</g>
<!-- st_122_pending -->
<g id="node1" class="node">
<title>st_122_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;125 待提示</text>
</g>
<!-- st_122_notifying -->
<g id="node2" class="node">
<title>st_122_notifying</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;126 提示中</text>
</g>
<!-- st_122_notified -->
<g id="node3" class="node">
<title>st_122_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="128.53" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;127 已告知处理中</text>
</g>
<!-- i_122_1 -->
<g id="node4" class="node">
<title>i_122_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="545.19" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;122&#45;1 下发处理中提示</text>
<text xml:space="preserve" text-anchor="start" x="500.47" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知系统仍在处理，不让客户反复刷新。</text>
</g>
<!-- st_122_pending&#45;&gt;st_122_notifying -->
<g id="edge1" class="edge">
<title>st_122_pending&#45;&gt;st_122_notifying</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 260.68,-633.6 260.68,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定超时</text>
</g>
<!-- st_122_notifying&#45;&gt;st_122_notified -->
<g id="edge2" class="edge">
<title>st_122_notifying&#45;&gt;st_122_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 272.34,-310.8 272.34,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">提示已下发</text>
</g>
</g>
</svg>
`;case`chain001NF-i-131`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="973pt"
 viewBox="0.00 0.00 876.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_131</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 838,-934.8 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;131 阶段性目标 · 识别模型不可用并转人工</text>
</g>
<!-- st_131_pending -->
<g id="node1" class="node">
<title>st_131_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;131 待调用</text>
</g>
<!-- st_131_calling -->
<g id="node2" class="node">
<title>st_131_calling</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;132 调用中</text>
</g>
<!-- st_131_failed -->
<g id="node3" class="node">
<title>st_131_failed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;133 模型不可用</text>
</g>
<!-- st_131_ok -->
<g id="node4" class="node">
<title>st_131_ok</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="575.2" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;134 调用成功</text>
</g>
<!-- i_131_1 -->
<g id="node5" class="node">
<title>i_131_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="553.53" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;131&#45;1 判定调用结果</text>
<text xml:space="preserve" text-anchor="start" x="537.98" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">识别模型服务调用失败或返回异常。</text>
</g>
<!-- st_131_pending&#45;&gt;st_131_calling -->
<g id="edge1" class="edge">
<title>st_131_pending&#45;&gt;st_131_calling</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 284.01,-633.6 284.01,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起模型调用</text>
</g>
<!-- st_131_calling&#45;&gt;st_131_failed -->
<g id="edge2" class="edge">
<title>st_131_calling&#45;&gt;st_131_failed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 319.02,-310.8 319.02,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">调用失败或返回异常</text>
</g>
<!-- st_131_calling&#45;&gt;st_131_ok -->
<g id="edge3" class="edge">
<title>st_131_calling&#45;&gt;st_131_ok</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M327.21,-370.87C384.3,-328.27 452.72,-277.23 510.81,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="512.07,-236.23 516.51,-229.64 508.93,-232.02 512.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-288 435.89,-310.8 511.91,-310.8 511.91,-288 435.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="438.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">调用正常返回</text>
</g>
</g>
</svg>
`;case`chain001NF-i-132`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="1296pt"
 viewBox="0.00 0.00 876.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_132</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 838,-1257.6 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;132 阶段性目标 · 建单并告知等待</text>
</g>
<!-- st_132_pending -->
<g id="node1" class="node">
<title>st_132_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1196.4 47.98,-1196.4 47.98,-1016.4 368.02,-1016.4 368.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;135 待建单</text>
</g>
<!-- st_132_ticketing -->
<g id="node2" class="node">
<title>st_132_ticketing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;136 建单中</text>
</g>
<!-- st_132_notified -->
<g id="node3" class="node">
<title>st_132_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;137 已告知等待</text>
</g>
<!-- st_132_handedoff -->
<g id="node4" class="node">
<title>st_132_handedoff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;138 人工已接管</text>
</g>
<!-- i_132_1 -->
<g id="node5" class="node">
<title>i_132_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1196.4 477.98,-1196.4 477.98,-1016.4 798.02,-1016.4 798.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="553.53" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;132&#45;1 生成人工工单</text>
<text xml:space="preserve" text-anchor="start" x="544.23" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把提问内容与失败原因写入工单。</text>
</g>
<!-- i_132_2 -->
<g id="node6" class="node">
<title>i_132_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="553.53" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;132&#45;2 告知等待人工</text>
<text xml:space="preserve" text-anchor="start" x="519.23" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知已转人工，不返回空白内容。</text>
</g>
<!-- st_132_pending&#45;&gt;st_132_ticketing -->
<g id="edge1" class="edge">
<title>st_132_pending&#45;&gt;st_132_ticketing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-1016.47C208,-975.27 208,-926.16 208,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-883.96 208,-876.46 205.38,-883.96 210.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-933.6 208,-956.4 295.68,-956.4 295.68,-933.6 208,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">模型判定不可用</text>
</g>
<!-- st_132_ticketing&#45;&gt;st_132_notified -->
<g id="edge2" class="edge">
<title>st_132_ticketing&#45;&gt;st_132_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 284.01,-633.6 284.01,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">工单创建完成</text>
</g>
<!-- st_132_notified&#45;&gt;st_132_handedoff -->
<g id="edge3" class="edge">
<title>st_132_notified&#45;&gt;st_132_handedoff</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 260.68,-310.8 260.68,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">人工接手</text>
</g>
<!-- i_132_1&#45;&gt;i_132_2 -->
</g>
</svg>
`;case`chain002F-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="954pt" height="973pt"
 viewBox="0.00 0.00 954.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_knowledge_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 916,-934.8 916,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;002&#45;F 知识运营能力</text>
</g>
<!-- us_scan -->
<g id="node1" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="875.88,-873.6 48.12,-873.6 48.12,-693.6 875.88,-693.6 875.88,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="316.96" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="68.17" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- us_govern -->
<g id="node2" class="node">
<title>us_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="838.63,-550.8 73.37,-550.8 73.37,-370.8 838.63,-370.8 838.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="302.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="93.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- us_alert -->
<g id="node3" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="834.63,-228 69.37,-228 69.37,-48 834.63,-48 834.63,-228"/>
<text xml:space="preserve" text-anchor="start" x="323.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="89.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- us_scan&#45;&gt;us_govern -->
<g id="edge1" class="edge">
<title>us_scan&#45;&gt;us_govern</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M355.78,-693.74C340.37,-675.55 326.77,-655.28 318.01,-633.6 307.34,-607.22 314.52,-581.67 330.07,-558.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="332.08,-560.4 334.38,-552.8 327.84,-557.31 332.08,-560.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="318.01,-610.8 318.01,-633.6 345,-633.6 345,-610.8 318.01,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="321.01" y="-619" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_govern&#45;&gt;us_scan -->
<g id="edge2" class="edge">
<title>us_govern&#45;&gt;us_scan</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M457.66,-550.63C458.43,-591.81 459.35,-640.92 460.14,-683.32"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="457.52,-683.19 460.28,-690.64 462.76,-683.09 457.52,-683.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="459.18,-610.8 459.18,-633.6 511.86,-633.6 511.86,-610.8 459.18,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="462.18" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- us_govern&#45;&gt;us_alert -->
<g id="edge3" class="edge">
<title>us_govern&#45;&gt;us_alert</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M353.03,-370.98C337.91,-352.72 324.57,-332.42 316.01,-310.8 305.59,-284.5 312.7,-258.98 328.04,-236.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.02,-237.74 332.27,-230.12 325.76,-234.68 330.02,-237.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="316.01,-288 316.01,-310.8 343,-310.8 343,-288 316.01,-288"/>
<text xml:space="preserve" text-anchor="start" x="319.01" y="-296.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_alert&#45;&gt;us_govern -->
<g id="edge4" class="edge">
<title>us_alert&#45;&gt;us_govern</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M453.11,-227.83C453.62,-269.01 454.23,-318.12 454.76,-360.52"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="452.13,-360.37 454.85,-367.84 457.38,-360.31 452.13,-360.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="454.12,-288 454.12,-310.8 518.46,-310.8 518.46,-288 454.12,-288"/>
<text xml:space="preserve" text-anchor="start" x="457.12" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
</g>
</svg>
`;case`chain002F-f`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1322pt" height="1296pt"
 viewBox="0.00 0.00 1322.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_feat_knowledge_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 1284,-1257.6 1284,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;002&#45;F 知识运营能力</text>
</g>
<!-- us_scan -->
<g id="node1" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="986.88,-1196.4 159.12,-1196.4 159.12,-1016.4 986.88,-1016.4 986.88,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="427.96" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="179.17" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- us_govern -->
<g id="node2" class="node">
<title>us_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="813.63,-873.6 48.37,-873.6 48.37,-693.6 813.63,-693.6 813.63,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="277.63" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="68.43" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- f_ingest -->
<g id="node3" class="node">
<title>f_ingest</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1244.02,-873.6 923.98,-873.6 923.98,-693.6 1244.02,-693.6 1244.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1005.09" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;201 素材接入能力</text>
<text xml:space="preserve" text-anchor="start" x="958.98" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收素材并登记文档标识，支持单条与批量。</text>
</g>
<!-- us_alert -->
<g id="node4" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="813.63,-550.8 48.37,-550.8 48.37,-370.8 813.63,-370.8 813.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="302.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="68.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- f_govern -->
<g id="node5" class="node">
<title>f_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="893.02,-228 572.98,-228 572.98,-48 893.02,-48 893.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="654.09" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;202 知识治理能力</text>
<text xml:space="preserve" text-anchor="start" x="626.73" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选知识的扫描、决策、晋升与下线。</text>
</g>
<!-- us_scan&#45;&gt;us_govern -->
<g id="edge1" class="edge">
<title>us_scan&#45;&gt;us_govern</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M454.7,-1016.74C438.15,-998.72 423.56,-978.44 414.01,-956.4 404.26,-933.9 402.47,-908.24 404.56,-883.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="407.17,-884.05 405.36,-876.32 401.95,-883.49 407.17,-884.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="414.01,-933.6 414.01,-956.4 441,-956.4 441,-933.6 414.01,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="417.01" y="-941.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_scan&#45;&gt;f_ingest -->
<g id="edge2" class="edge">
<title>us_scan&#45;&gt;f_ingest</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M714.66,-1016.47C782.79,-973.7 864.48,-922.41 933.69,-878.96"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="934.98,-881.25 939.94,-875.04 932.19,-876.8 934.98,-881.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="843.82,-933.6 843.82,-956.4 873.16,-956.4 873.16,-933.6 843.82,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="846.82" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_govern&#45;&gt;us_scan -->
<g id="edge3" class="edge">
<title>us_govern&#45;&gt;us_scan</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M470.32,-873.43C488.67,-914.88 510.56,-964.34 529.41,-1006.93"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="526.97,-1007.9 532.41,-1013.7 531.77,-1005.78 526.97,-1007.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="506.26,-933.6 506.26,-956.4 558.93,-956.4 558.93,-933.6 506.26,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="509.26" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- us_govern&#45;&gt;us_alert -->
<g id="edge4" class="edge">
<title>us_govern&#45;&gt;us_alert</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" d="M368.37,-693.86C357.9,-674.8 348.63,-654.18 343.01,-633.6 336.22,-608.77 341.43,-583.38 352.04,-559.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="354.28,-561.4 355.21,-553.51 349.56,-559.1 354.28,-561.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="343.01,-610.8 343.01,-633.6 370,-633.6 370,-610.8 343.01,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="346.01" y="-619" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- us_govern&#45;&gt;f_govern -->
<g id="edge5" class="edge">
<title>us_govern&#45;&gt;f_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M706.85,-693.74C771.03,-659.5 831.5,-613.08 869,-550.8 928.67,-451.71 867.74,-323.24 809.47,-236.34"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="811.75,-235.03 805.36,-230.3 807.41,-237.98 811.75,-235.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="893.48,-449.4 893.48,-472.2 922.82,-472.2 922.82,-449.4 893.48,-449.4"/>
<text xml:space="preserve" text-anchor="start" x="896.48" y="-455.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_alert&#45;&gt;us_govern -->
<g id="edge6" class="edge">
<title>us_alert&#45;&gt;us_govern</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M431,-550.63C431,-591.81 431,-640.92 431,-683.32"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="428.38,-683.14 431,-690.64 433.63,-683.14 428.38,-683.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="431,-610.8 431,-633.6 495.34,-633.6 495.34,-610.8 431,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="434" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
<!-- us_alert&#45;&gt;f_govern -->
<g id="edge7" class="edge">
<title>us_alert&#45;&gt;f_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M514.72,-370.87C554.33,-328.8 601.69,-278.48 642.16,-235.49"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="644.07,-237.29 647.3,-230.03 640.25,-233.7 644.07,-237.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="591.06,-288 591.06,-310.8 620.39,-310.8 620.39,-288 591.06,-288"/>
<text xml:space="preserve" text-anchor="start" x="594.06" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
</g>
</svg>
`;case`chain002F-i-211`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="1296pt"
 viewBox="0.00 0.00 1306.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_211</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 1268,-1257.6 1268,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;211 阶段性目标 · 素材入库并产出候选</text>
</g>
<!-- i_211_1 -->
<g id="node1" class="node">
<title>i_211_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1196.4 47.98,-1196.4 47.98,-1016.4 368.02,-1016.4 368.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="140.2" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211&#45;1 登记素材</text>
<text xml:space="preserve" text-anchor="start" x="82.98" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把上传的素材登记到文档簿，生成文档标识。</text>
</g>
<!-- i_211_2 -->
<g id="node2" class="node">
<title>i_211_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1196.4 477.98,-1196.4 477.98,-1016.4 798.02,-1016.4 798.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="553.53" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211&#45;2 抽取候选知识</text>
<text xml:space="preserve" text-anchor="start" x="506.72" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">从素材正文中抽取可独立回答问题的候选条目。</text>
</g>
<!-- st_211_pending -->
<g id="node3" class="node">
<title>st_211_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-1196.4 907.98,-1196.4 907.98,-1016.4 1228.02,-1016.4 1228.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1013.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;211 待接入</text>
</g>
<!-- st_211_registering -->
<g id="node4" class="node">
<title>st_211_registering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-873.6 907.98,-873.6 907.98,-693.6 1228.02,-693.6 1228.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1013.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;212 登记中</text>
</g>
<!-- st_211_scanning -->
<g id="node5" class="node">
<title>st_211_scanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-550.8 907.98,-550.8 907.98,-370.8 1228.02,-370.8 1228.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1013.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;213 扫描中</text>
</g>
<!-- st_211_submitted -->
<g id="node6" class="node">
<title>st_211_submitted</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="996.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;214 已提交候选</text>
</g>
<!-- i_211_3 -->
<g id="node7" class="node">
<title>i_211_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="140.2" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211&#45;3 提交候选</text>
<text xml:space="preserve" text-anchor="start" x="95.48" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">把候选条目提交给治理环节，等待决策。</text>
</g>
<!-- i_211_1&#45;&gt;i_211_3 -->
<!-- st_211_pending&#45;&gt;st_211_registering -->
<g id="edge2" class="edge">
<title>st_211_pending&#45;&gt;st_211_registering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1068,-1016.47C1068,-975.27 1068,-926.16 1068,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1070.63,-883.96 1068,-876.46 1065.38,-883.96 1070.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068,-933.6 1068,-956.4 1120.68,-956.4 1120.68,-933.6 1068,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1071" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">上传素材</text>
</g>
<!-- st_211_registering&#45;&gt;st_211_scanning -->
<g id="edge3" class="edge">
<title>st_211_registering&#45;&gt;st_211_scanning</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1068,-693.67C1068,-652.47 1068,-603.36 1068,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1070.63,-561.16 1068,-553.66 1065.38,-561.16 1070.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068,-610.8 1068,-633.6 1120.68,-633.6 1120.68,-610.8 1068,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1071" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">登记完成</text>
</g>
<!-- st_211_scanning&#45;&gt;st_211_submitted -->
<g id="edge4" class="edge">
<title>st_211_scanning&#45;&gt;st_211_submitted</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1068,-370.87C1068,-329.67 1068,-280.56 1068,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1070.63,-238.36 1068,-230.86 1065.38,-238.36 1070.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068,-288 1068,-310.8 1167.35,-310.8 1167.35,-288 1068,-288"/>
<text xml:space="preserve" text-anchor="start" x="1071" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">候选已抽取并提交</text>
</g>
</g>
</svg>
`;case`chain002F-i-221`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="1296pt"
 viewBox="0.00 0.00 1306.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_221</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 1268,-1257.6 1268,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;221 阶段性目标 · 审阅决策并晋升</text>
</g>
<!-- i_221_1 -->
<g id="node1" class="node">
<title>i_221_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1196.4 47.98,-1196.4 47.98,-1016.4 368.02,-1016.4 368.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="123.53" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221&#45;1 人工审阅候选</text>
<text xml:space="preserve" text-anchor="start" x="107.98" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示候选条目供运营人员逐条审阅。</text>
</g>
<!-- i_221_2 -->
<g id="node2" class="node">
<title>i_221_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1196.4 477.98,-1196.4 477.98,-1016.4 798.02,-1016.4 798.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="570.2" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221&#45;2 记录决策</text>
<text xml:space="preserve" text-anchor="start" x="537.98" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">记录批准或驳回，驳回需填写理由。</text>
</g>
<!-- st_221_pending -->
<g id="node3" class="node">
<title>st_221_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-1196.4 907.98,-1196.4 907.98,-1016.4 1228.02,-1016.4 1228.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1013.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;221 待审阅</text>
</g>
<!-- st_221_reviewing -->
<g id="node4" class="node">
<title>st_221_reviewing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-873.6 907.98,-873.6 907.98,-693.6 1228.02,-693.6 1228.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1013.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;222 审阅中</text>
</g>
<!-- st_221_decided -->
<g id="node5" class="node">
<title>st_221_decided</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-550.8 907.98,-550.8 907.98,-370.8 1228.02,-370.8 1228.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1013.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;223 已决策</text>
</g>
<!-- st_221_promoted -->
<g id="node6" class="node">
<title>st_221_promoted</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="558.53" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;224 已晋升可检索</text>
</g>
<!-- st_221_rejected -->
<g id="node7" class="node">
<title>st_221_rejected</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="996.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;225 已驳回退回</text>
</g>
<!-- i_221_3 -->
<g id="node8" class="node">
<title>i_221_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="375.83,-873.6 48.17,-873.6 48.17,-693.6 375.83,-693.6 375.83,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="144.2" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221&#45;3 晋升知识</text>
<text xml:space="preserve" text-anchor="start" x="68.22" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">批准的候选进入知识库生命周期，进入可检索状态。</text>
</g>
<!-- i_221_1&#45;&gt;i_221_3 -->
<!-- st_221_pending&#45;&gt;st_221_reviewing -->
<g id="edge2" class="edge">
<title>st_221_pending&#45;&gt;st_221_reviewing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1068,-1016.47C1068,-975.27 1068,-926.16 1068,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1070.63,-883.96 1068,-876.46 1065.38,-883.96 1070.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068,-933.6 1068,-956.4 1155.68,-956.4 1155.68,-933.6 1068,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1071" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">候选提交到治理</text>
</g>
<!-- st_221_reviewing&#45;&gt;st_221_decided -->
<g id="edge3" class="edge">
<title>st_221_reviewing&#45;&gt;st_221_decided</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1068,-693.67C1068,-652.47 1068,-603.36 1068,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1070.63,-561.16 1068,-553.66 1065.38,-561.16 1070.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068,-610.8 1068,-633.6 1167.35,-633.6 1167.35,-610.8 1068,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1071" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营人员记录决策</text>
</g>
<!-- st_221_decided&#45;&gt;st_221_promoted -->
<g id="edge4" class="edge">
<title>st_221_decided&#45;&gt;st_221_promoted</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M948.79,-370.87C891.7,-328.27 823.28,-277.23 765.19,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="767.07,-232.02 759.49,-229.64 763.93,-236.23 767.07,-232.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="865.89,-288 865.89,-310.8 918.57,-310.8 918.57,-288 865.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="868.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">批准晋升</text>
</g>
<!-- st_221_decided&#45;&gt;st_221_rejected -->
<g id="edge5" class="edge">
<title>st_221_decided&#45;&gt;st_221_rejected</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1068,-370.87C1068,-329.67 1068,-280.56 1068,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1070.63,-238.36 1068,-230.86 1065.38,-238.36 1070.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068,-288 1068,-310.8 1120.68,-310.8 1120.68,-288 1068,-288"/>
<text xml:space="preserve" text-anchor="start" x="1071" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">驳回退回</text>
</g>
</g>
</svg>
`;case`chain002F-i-231`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="973pt"
 viewBox="0.00 0.00 876.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_i_231</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 838,-934.8 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;231 阶段性目标 · 巡检并判定新鲜度</text>
</g>
<!-- st_231_pending -->
<g id="node1" class="node">
<title>st_231_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;231 待巡检</text>
</g>
<!-- st_231_probing -->
<g id="node2" class="node">
<title>st_231_probing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;232 巡检中</text>
</g>
<!-- st_231_fresh -->
<g id="node3" class="node">
<title>st_231_fresh</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;233 新鲜度正常</text>
</g>
<!-- st_231_stale -->
<g id="node4" class="node">
<title>st_231_stale</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="566.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;234 新鲜度异常</text>
</g>
<!-- i_231_1 -->
<g id="node5" class="node">
<title>i_231_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="545.19" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;231&#45;1 巡检数据集状态</text>
<text xml:space="preserve" text-anchor="start" x="519.23" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">定期探测知识库数据集的可用性与新鲜度。</text>
</g>
<!-- i_231_2 -->
<g id="node6" class="node">
<title>i_231_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-550.8 477.98,-550.8 477.98,-370.8 798.02,-370.8 798.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="545.19" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;231&#45;2 判定新鲜度异常</text>
<text xml:space="preserve" text-anchor="start" x="519.23" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">按更新时间阈值判定是否属于陈旧或异常。</text>
</g>
<!-- st_231_pending&#45;&gt;st_231_probing -->
<g id="edge1" class="edge">
<title>st_231_pending&#45;&gt;st_231_probing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 284.01,-633.6 284.01,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">到达巡检周期</text>
</g>
<!-- st_231_probing&#45;&gt;st_231_fresh -->
<g id="edge2" class="edge">
<title>st_231_probing&#45;&gt;st_231_fresh</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 284.01,-310.8 284.01,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">全部在阈值内</text>
</g>
<!-- st_231_probing&#45;&gt;st_231_stale -->
<g id="edge3" class="edge">
<title>st_231_probing&#45;&gt;st_231_stale</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M327.21,-370.87C384.3,-328.27 452.72,-277.23 510.81,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="512.07,-236.23 516.51,-229.64 508.93,-232.02 512.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-288 435.89,-310.8 523.58,-310.8 523.58,-288 435.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="438.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">存在超阈值条目</text>
</g>
<!-- i_231_1&#45;&gt;i_231_2 -->
</g>
</svg>
`;case`chain002F-i-232`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="876pt" height="1296pt"
 viewBox="0.00 0.00 876.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_i_232</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 838,-1257.6 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;232 阶段性目标 · 上报告警并呈现</text>
</g>
<!-- st_232_pending -->
<g id="node1" class="node">
<title>st_232_pending</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1196.4 47.98,-1196.4 47.98,-1016.4 368.02,-1016.4 368.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;235 待上报</text>
</g>
<!-- st_232_reporting -->
<g id="node2" class="node">
<title>st_232_reporting</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;236 上报中</text>
</g>
<!-- st_232_listed -->
<g id="node3" class="node">
<title>st_232_listed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-550.8 47.98,-550.8 47.98,-370.8 368.02,-370.8 368.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="128.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;237 控制台已列出</text>
</g>
<!-- st_232_fixed -->
<g id="node4" class="node">
<title>st_232_fixed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="136.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;238 已修复下线</text>
</g>
<!-- i_232_1 -->
<g id="node5" class="node">
<title>i_232_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1196.4 477.98,-1196.4 477.98,-1016.4 798.02,-1016.4 798.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="570.2" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;232&#45;1 上报告警</text>
<text xml:space="preserve" text-anchor="start" x="531.73" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把问题条目写入告警并在控制台列出。</text>
</g>
<!-- st_232_pending&#45;&gt;st_232_reporting -->
<g id="edge1" class="edge">
<title>st_232_pending&#45;&gt;st_232_reporting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-1016.47C208,-975.27 208,-926.16 208,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-883.96 208,-876.46 205.38,-883.96 210.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-933.6 208,-956.4 295.68,-956.4 295.68,-933.6 208,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">判定新鲜度异常</text>
</g>
<!-- st_232_reporting&#45;&gt;st_232_listed -->
<g id="edge2" class="edge">
<title>st_232_reporting&#45;&gt;st_232_listed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-693.67C208,-652.47 208,-603.36 208,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-561.16 208,-553.66 205.38,-561.16 210.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-610.8 208,-633.6 307.35,-633.6 307.35,-610.8 208,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">告警已落库并展示</text>
</g>
<!-- st_232_listed&#45;&gt;st_232_fixed -->
<g id="edge3" class="edge">
<title>st_232_listed&#45;&gt;st_232_fixed</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208,-370.87C208,-329.67 208,-280.56 208,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.36 208,-230.86 205.38,-238.36 210.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-288 208,-310.8 319.02,-310.8 319.02,-288 208,-288"/>
<text xml:space="preserve" text-anchor="start" x="211" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营人员修复后下线</text>
</g>
</g>
</svg>
`;case`pano-src-001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2835pt" height="1150pt"
 viewBox="0.00 0.00 2835.00 1150.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1134.65)">
<g id="clust1" class="cluster">
<title>cluster_us_ask</title>
<polygon fill="#1c417d" stroke="#1c356c" points="8,-8 8,-1111.6 2199,-1111.6 2199,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1098.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;001 客户提问获得专业答复</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_i_001</title>
<polygon fill="#1a468d" stroke="#1c3979" points="48,-684 48,-1050.4 1697,-1050.4 1697,-684 48,-684"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-1037.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;001 阶段性目标 · 取得可靠候选知识</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_ui_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="80,-716 80,-997.2 1665,-997.2 1665,-716 80,-716"/>
<text xml:space="preserve" text-anchor="start" x="88" y="-984.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;001 会话输入</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_i_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1142,-364 1142,-645.2 2159,-645.2 2159,-364 1142,-364"/>
<text xml:space="preserve" text-anchor="start" x="1150" y="-632.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;003 阶段性目标 · 生成并下发答复</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_i_002</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1180,-48 1180,-313.2 1574,-313.2 1574,-48 1180,-48"/>
<text xml:space="preserve" text-anchor="start" x="1188" y="-300.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;002 阶段性目标 · 判定可否自动答复</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_us_lowconfidence</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2307,-372 2307,-637.2 2797,-637.2 2797,-372 2307,-372"/>
<text xml:space="preserve" text-anchor="start" x="2315" y="-624.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;002 答不准时转人工而非硬答</text>
</g>
<!-- src_001 -->
<g id="node1" class="node">
<title>src_001</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="932.02,-936 601.98,-936 601.98,-756 932.02,-756 932.02,-936"/>
<text xml:space="preserve" text-anchor="start" x="656.41" y="-858" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="660.72" y="-835" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="666.98" y="-817" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- src_002 -->
<g id="node2" class="node">
<title>src_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1624.56,-936 1129.44,-936 1129.44,-756 1624.56,-756 1624.56,-936"/>
<text xml:space="preserve" text-anchor="start" x="1291.42" y="-876" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1206.96" y="-853" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js — 跨阶段编排：自</text>
<text xml:space="preserve" text-anchor="start" x="1359.91" y="-835" font-family="Arial" font-size="15.00" fill="#bfdbfe">I&#45;001</text>
<text xml:space="preserve" text-anchor="start" x="1169.44" y="-817" font-family="Arial" font-size="15.00" fill="#bfdbfe">入口分发，决定走自动应答（I&#45;002→I&#45;003）还是转人工（I&#45;011）。主属</text>
<text xml:space="preserve" text-anchor="start" x="1321.15" y="-799" font-family="Arial" font-size="15.00" fill="#bfdbfe">UI&#45;001 入口分发。</text>
</g>
<!-- src_005 -->
<g id="node3" class="node">
<title>src_005</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="492.29,-936 119.71,-936 119.71,-756 492.29,-756 492.29,-936"/>
<text xml:space="preserve" text-anchor="start" x="183.19" y="-858" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="159.71" y="-835" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="178.05" y="-817" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问，服务 I&#45;001&#45;2 检索步骤。</text>
</g>
<!-- src_003 -->
<g id="node4" class="node">
<title>src_003</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1571.64,-584 1182.36,-584 1182.36,-404 1571.64,-404 1571.64,-584"/>
<text xml:space="preserve" text-anchor="start" x="1283.08" y="-506" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="1222.36" y="-483" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="1306.15" y="-465" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- src_007 -->
<g id="node5" class="node">
<title>src_007</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2118.79,-584 1681.21,-584 1681.21,-404 2118.79,-404 2118.79,-584"/>
<text xml:space="preserve" text-anchor="start" x="1822.75" y="-497" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1721.21" y="-474" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- src_004 -->
<g id="node6" class="node">
<title>src_004</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1542.02,-260 1211.98,-260 1211.98,-80 1542.02,-80 1542.02,-260"/>
<text xml:space="preserve" text-anchor="start" x="1299.75" y="-182" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="1255.31" y="-159" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1308.24" y="-141" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_006 -->
<g id="node7" class="node">
<title>src_006</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2765.38,-584 2338.62,-584 2338.62,-404 2765.38,-404 2765.38,-584"/>
<text xml:space="preserve" text-anchor="start" x="2466.42" y="-497" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="2378.62" y="-474" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- src_001&#45;&gt;src_002 -->
<g id="edge1" class="edge">
<title>src_001&#45;&gt;src_002</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M931.67,-846C989.45,-846 1055.82,-846 1119.37,-846"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1119.02,-848.63 1126.52,-846 1119.02,-843.38 1119.02,-848.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="986.89,-849 986.89,-871.8 1074.57,-871.8 1074.57,-849 986.89,-849"/>
<text xml:space="preserve" text-anchor="start" x="989.89" y="-854.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">分发归一化消息</text>
</g>
<!-- src_002&#45;&gt;src_003 -->
<g id="edge3" class="edge">
<title>src_002&#45;&gt;src_003</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1377,-756.23C1377,-706.87 1377,-645.31 1377,-594.36"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1379.63,-594.51 1377,-587.01 1374.38,-594.51 1379.63,-594.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1377,-653.2 1377,-676 1429.68,-676 1429.68,-653.2 1377,-653.2"/>
<text xml:space="preserve" text-anchor="start" x="1380" y="-659" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- src_002&#45;&gt;src_006 -->
<g id="edge2" class="edge">
<title>src_002&#45;&gt;src_006</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1624.38,-793.84C1785.92,-758 2000.52,-705.8 2186,-645.2 2236.91,-628.57 2290.76,-608.13 2341.04,-587.75"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2341.95,-590.22 2347.91,-584.96 2339.97,-585.35 2341.95,-590.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2143.29,-653.2 2143.29,-676 2242.64,-676 2242.64,-653.2 2143.29,-653.2"/>
<text xml:space="preserve" text-anchor="start" x="2146.29" y="-659" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- src_003&#45;&gt;src_005 -->
<g id="edge5" class="edge">
<title>src_003&#45;&gt;src_005</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1182.48,-518.82C1010.18,-544.64 754.52,-594.68 547,-684 506.56,-701.4 465.62,-725.71 429.24,-750.18"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="427.81,-747.98 423.08,-754.36 430.76,-752.32 427.81,-747.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="610.88,-653.2 610.88,-676 686.89,-676 686.89,-653.2 610.88,-653.2"/>
<text xml:space="preserve" text-anchor="start" x="613.88" y="-659" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- src_003&#45;&gt;src_004 -->
<g id="edge6" class="edge">
<title>src_003&#45;&gt;src_004</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1377,-404.16C1377,-362.63 1377,-313.02 1377,-270.26"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1379.63,-270.36 1377,-262.86 1374.38,-270.36 1379.63,-270.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1377,-321.2 1377,-344 1441.34,-344 1441.34,-321.2 1377,-321.2"/>
<text xml:space="preserve" text-anchor="start" x="1380" y="-327" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- src_006&#45;&gt;src_007 -->
<g id="edge4" class="edge">
<title>src_006&#45;&gt;src_007</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2338.63,-494C2271.49,-494 2197.09,-494 2128.91,-494"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2128.99,-491.38 2121.49,-494 2128.99,-496.63 2128.99,-491.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2196.53,-497 2196.53,-519.8 2260.88,-519.8 2260.88,-497 2196.53,-497"/>
<text xml:space="preserve" text-anchor="start" x="2199.53" y="-502.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
</g>
</svg>
`;case`carrier001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="802pt" height="1824pt"
 viewBox="0.00 0.00 802.00 1824.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1809.05)">
<!-- cvt_normalize -->
<g id="node1" class="node">
<title>cvt_normalize</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="599.67,-1794 194.87,-1794 194.87,-1614 599.67,-1614 599.67,-1794"/>
<text xml:space="preserve" text-anchor="start" x="287.8" y="-1716" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;001 提问归一化转换器</text>
<text xml:space="preserve" text-anchor="start" x="218.88" y="-1693" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN&#45;001 与</text>
<text xml:space="preserve" text-anchor="start" x="295.57" y="-1675" font-family="Arial" font-size="15.00" fill="#bfdbfe">POD&#45;001→OUT&#45;001 两组映射。</text>
</g>
<!-- in_chatmessage -->
<g id="node2" class="node">
<title>in_chatmessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="418.54,-1471.2 0,-1471.2 0,-1291.2 418.54,-1291.2 418.54,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="126.47" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;001 客户提问入参</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</text>
</g>
<!-- out_answer -->
<g id="node3" class="node">
<title>out_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="578.29,-180 258.25,-180 258.25,0 578.29,0 578.29,-180"/>
<text xml:space="preserve" text-anchor="start" x="324.36" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;001 答复出参视图</text>
<text xml:space="preserve" text-anchor="start" x="311.99" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="330.75" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向企业微信会话的答复载荷。</text>
</g>
<!-- biz_query -->
<g id="node4" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="409.96,-1148.4 60.58,-1148.4 60.58,-968.4 409.96,-968.4 409.96,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="146.91" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="80.63" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="145.67" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- pod_ticket -->
<g id="node5" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="411.72,-825.6 84.82,-825.6 84.82,-645.6 411.72,-645.6 411.72,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="145.46" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="104.88" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="181.17" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- dao_store -->
<g id="node6" class="node">
<title>dao_store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M414.45,-486.44C414.45,-495.47 341.76,-502.8 252.27,-502.8 162.78,-502.8 90.09,-495.47 90.09,-486.44 90.09,-486.44 90.09,-339.16 90.09,-339.16 90.09,-330.13 162.78,-322.8 252.27,-322.8 341.76,-322.8 414.45,-330.13 414.45,-339.16 414.45,-339.16 414.45,-486.44 414.45,-486.44"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M414.45,-486.44C414.45,-477.41 341.76,-470.07 252.27,-470.07 162.78,-470.07 90.09,-477.41 90.09,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="157.8" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;001 本地存储访问</text>
<text xml:space="preserve" text-anchor="start" x="110.15" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</text>
</g>
<!-- cvt_normalize&#45;&gt;in_chatmessage -->
<g id="edge1" class="edge">
<title>cvt_normalize&#45;&gt;in_chatmessage</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M345.15,-1614.07C320.75,-1572.43 291.62,-1522.72 266.6,-1480.03"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="268.91,-1478.78 262.86,-1473.64 264.38,-1481.44 268.91,-1478.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="308.91,-1531.2 308.91,-1554 446.39,-1554 446.39,-1531.2 308.91,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="311.91" y="-1537" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 报文→IN&#45;001 映射</text>
</g>
<!-- cvt_normalize&#45;&gt;out_answer -->
<g id="edge2" class="edge">
<title>cvt_normalize&#45;&gt;out_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M483.11,-1614.07C532.27,-1553.68 584.27,-1469.23 584.27,-1382.2 584.27,-1382.2 584.27,-1382.2 584.27,-411.8 584.27,-330.2 541.38,-248.66 499.2,-188.21"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="501.48,-186.9 495.01,-182.3 497.2,-189.93 501.48,-186.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="584.27,-885.6 584.27,-908.4 772.32,-908.4 772.32,-885.6 584.27,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="587.27" y="-891.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 POD&#45;001→OUT&#45;001 映射</text>
</g>
<!-- in_chatmessage&#45;&gt;biz_query -->
<g id="edge3" class="edge">
<title>in_chatmessage&#45;&gt;biz_query</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M216.48,-1291.27C219.82,-1250.07 223.8,-1200.96 227.23,-1158.57"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="229.84,-1158.93 227.83,-1151.25 224.6,-1158.51 229.84,-1158.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="223.05,-1208.4 223.05,-1231.2 310.73,-1231.2 310.73,-1208.4 223.05,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="226.05" y="-1214.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为检索查询</text>
</g>
<!-- biz_query&#45;&gt;pod_ticket -->
<g id="edge4" class="edge">
<title>biz_query&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M238.87,-968.47C240.54,-927.27 242.53,-878.16 244.25,-835.77"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="246.87,-836.05 244.55,-828.45 241.62,-835.84 246.87,-836.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="242.16,-885.6 242.16,-908.4 329.84,-908.4 329.84,-885.6 242.16,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="245.16" y="-891.4" font-family="Arial" font-size="14.00" fill="#eff5fd">低置信度落工单</text>
</g>
<!-- pod_ticket&#45;&gt;dao_store -->
<g id="edge5" class="edge">
<title>pod_ticket&#45;&gt;dao_store</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M249.38,-645.67C249.89,-604.81 250.49,-556.18 251.02,-514.03"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="253.64,-514.3 251.11,-506.77 248.39,-514.24 253.64,-514.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="250.39,-562.8 250.39,-585.6 303.07,-585.6 303.07,-562.8 250.39,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="253.39" y="-568.6" font-family="Arial" font-size="14.00" fill="#eff5fd">写入工单</text>
</g>
<!-- dao_store&#45;&gt;out_answer -->
<g id="edge6" class="edge">
<title>dao_store&#45;&gt;out_answer</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M298.73,-322.01C320.13,-280.65 345.58,-231.47 367.49,-189.14"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="369.74,-190.49 370.86,-182.62 365.08,-188.08 369.74,-190.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="340.25,-240 340.25,-262.8 416.26,-262.8 416.26,-240 340.25,-240"/>
<text xml:space="preserve" text-anchor="start" x="343.25" y="-245.8" font-family="Arial" font-size="14.00" fill="#eff5fd">查询答复内容</text>
</g>
</g>
</svg>
`;case`erm001F-ticket`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="357pt" height="533pt"
 viewBox="0.00 0.00 357.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- pod_ticket -->
<g id="node1" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="326.89,-502.8 0,-502.8 0,-322.8 326.89,-322.8 326.89,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="60.64" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="96.35" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- dao_store -->
<g id="node2" class="node">
<title>dao_store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M325.62,-163.64C325.62,-172.67 252.93,-180 163.45,-180 73.96,-180 1.27,-172.67 1.27,-163.64 1.27,-163.64 1.27,-16.36 1.27,-16.36 1.27,-7.33 73.96,0 163.45,0 252.93,0 325.62,-7.33 325.62,-16.36 325.62,-16.36 325.62,-163.64 325.62,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M325.62,-163.64C325.62,-154.61 252.93,-147.27 163.45,-147.27 73.96,-147.27 1.27,-154.61 1.27,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="68.97" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;001 本地存储访问</text>
<text xml:space="preserve" text-anchor="start" x="21.33" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</text>
</g>
<!-- pod_ticket&#45;&gt;dao_store -->
<g id="edge1" class="edge">
<title>pod_ticket&#45;&gt;dao_store</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M163.45,-322.87C163.45,-282.01 163.45,-233.38 163.45,-191.23"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="166.07,-191.47 163.45,-183.97 160.82,-191.47 166.07,-191.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="163.45,-240 163.45,-262.8 216.12,-262.8 216.12,-240 163.45,-240"/>
<text xml:space="preserve" text-anchor="start" x="166.45" y="-245.8" font-family="Arial" font-size="14.00" fill="#eff5fd">写入工单</text>
</g>
</g>
</svg>
`;case`api001F-src001-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="540pt" height="311pt"
 viewBox="0.00 0.00 540.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_src_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 502,-273.2 502,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SRC&#45;001 微信客服回调入口</text>
</g>
<!-- api_001 -->
<g id="node1" class="node">
<title>api_001</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="470.13,-220 39.87,-220 39.87,-40 470.13,-40 470.13,-220"/>
<text xml:space="preserve" text-anchor="start" x="59.93" y="-142" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="138.29" y="-119" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="186.24" y="-101" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
</g>
</svg>
`;case`api001F-src006-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="502pt" height="311pt"
 viewBox="0.00 0.00 502.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_src_006</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 464,-273.2 464,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SRC&#45;006 转人工服务</text>
</g>
<!-- api_002 -->
<g id="node1" class="node">
<title>api_002</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="432.37,-220 39.63,-220 39.63,-40 432.37,-40 432.37,-220"/>
<text xml:space="preserve" text-anchor="start" x="96.49" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;002 GET /handoffs 工单列表</text>
<text xml:space="preserve" text-anchor="start" x="59.69" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/handoff&#45;routes.js:9 — 运营人员查看人工工单。</text>
</g>
</g>
</svg>
`;case`pano-src-001NF`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1178pt" height="1462pt"
 viewBox="0.00 0.00 1178.00 1462.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1446.65)">
<g id="clust1" class="cluster">
<title>cluster_us_kbempty</title>
<polygon fill="#1c417d" stroke="#1c356c" points="8,-636 8,-1423.6 1140,-1423.6 1140,-636 8,-636"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1410.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;101 知识库为空时运营人员能看见</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_i_111</title>
<polygon fill="#1a468d" stroke="#1c3979" points="48,-996 48,-1362.4 1100,-1362.4 1100,-996 48,-996"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-1349.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;111 阶段性目标 · 读出条目数并判定空库</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_ui_111</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="80,-1028 80,-1309.2 1068,-1309.2 1068,-1028 80,-1028"/>
<text xml:space="preserve" text-anchor="start" x="88" y="-1296.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;111 状态查询</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_i_112</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="68,-676 68,-957.2 966,-957.2 966,-676 68,-676"/>
<text xml:space="preserve" text-anchor="start" x="76" y="-944.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;112 阶段性目标 · 把空库显式呈现出来</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_us_ragtimeout</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="88,-332 88,-597.2 482,-597.2 482,-332 88,-332"/>
<text xml:space="preserve" text-anchor="start" x="96" y="-584.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;102 RAGFLOW 超时时客户不被静默等待</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_us_llmdown</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-8 40,-273.2 530,-273.2 530,-8 40,-8"/>
<text xml:space="preserve" text-anchor="start" x="48" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;103 LLM 不可用时转人工而非静默失败</text>
</g>
<!-- src_101 -->
<g id="node1" class="node">
<title>src_101</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="450.02,-1248 119.98,-1248 119.98,-1068 450.02,-1068 450.02,-1248"/>
<text xml:space="preserve" text-anchor="start" x="191.08" y="-1170" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="175.79" y="-1147" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="209.99" y="-1129" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- src_104 -->
<g id="node2" class="node">
<title>src_104</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1028.45,-1248 647.55,-1248 647.55,-1068 1028.45,-1068 1028.45,-1248"/>
<text xml:space="preserve" text-anchor="start" x="698.52" y="-1170" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="687.55" y="-1147" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="718.4" y="-1129" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- src_103 -->
<g id="node3" class="node">
<title>src_103</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="461.71,-896 108.29,-896 108.29,-716 461.71,-716 461.71,-896"/>
<text xml:space="preserve" text-anchor="start" x="207.75" y="-818" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="148.29" y="-795" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="203.73" y="-777" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- src_105 -->
<g id="node4" class="node">
<title>src_105</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.12,-896 571.88,-896 571.88,-716 926.12,-716 926.12,-896"/>
<text xml:space="preserve" text-anchor="start" x="646.75" y="-809" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="611.88" y="-786" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- src_102 -->
<g id="node5" class="node">
<title>src_102</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="450.02,-544 119.98,-544 119.98,-364 450.02,-364 450.02,-544"/>
<text xml:space="preserve" text-anchor="start" x="207.75" y="-466" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="176.21" y="-443" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="172.48" y="-425" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- src_106 -->
<g id="node6" class="node">
<title>src_106</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="498.38,-220 71.62,-220 71.62,-40 498.38,-40 498.38,-220"/>
<text xml:space="preserve" text-anchor="start" x="191.08" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="111.62" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- src_101&#45;&gt;src_104 -->
<g id="edge1" class="edge">
<title>src_101&#45;&gt;src_104</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M449.79,-1158C508.74,-1158 575.84,-1158 637.47,-1158"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="637.18,-1160.63 644.68,-1158 637.18,-1155.38 637.18,-1160.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="504.94,-1161 504.94,-1183.8 592.63,-1183.8 592.63,-1161 504.94,-1161"/>
<text xml:space="preserve" text-anchor="start" x="507.94" y="-1166.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">探测数据集状态</text>
</g>
<!-- src_101&#45;&gt;src_103 -->
<g id="edge2" class="edge">
<title>src_101&#45;&gt;src_103</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M285,-1068.23C285,-1018.87 285,-957.31 285,-906.36"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="287.63,-906.51 285,-899.01 282.38,-906.51 287.63,-906.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="285,-965.2 285,-988 361.01,-988 361.01,-965.2 285,-965.2"/>
<text xml:space="preserve" text-anchor="start" x="288" y="-971" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- src_103&#45;&gt;src_102 -->
<g id="edge3" class="edge">
<title>src_103&#45;&gt;src_102</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M285,-716.23C285,-666.87 285,-605.31 285,-554.36"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="287.63,-554.51 285,-547.01 282.38,-554.51 287.63,-554.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="285,-605.2 285,-628 361.01,-628 361.01,-605.2 285,-605.2"/>
<text xml:space="preserve" text-anchor="start" x="288" y="-611" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- src_102&#45;&gt;src_106 -->
<g id="edge4" class="edge">
<title>src_102&#45;&gt;src_106</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M285,-364.16C285,-322.63 285,-273.02 285,-230.26"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="287.63,-230.36 285,-222.86 282.38,-230.36 287.63,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="285,-281.2 285,-304 361.01,-304 361.01,-281.2 285,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="288" y="-287" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
</g>
</svg>
`;case`carrier001NF`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="852pt" height="1178pt"
 viewBox="0.00 0.00 852.00 1178.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- in_probequery -->
<g id="node1" class="node">
<title>in_probequery</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1148.4 0,-1148.4 0,-968.4 320.04,-968.4 320.04,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="77.22" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;101 状态探测入参</text>
<text xml:space="preserve" text-anchor="start" x="50.81" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="78.75" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">控制台发起的集成状态查询。</text>
</g>
<!-- biz_proberesult -->
<g id="node2" class="node">
<title>biz_proberesult</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="384.53,-825.6 43.51,-825.6 43.51,-645.6 384.53,-645.6 384.53,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="125.66" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;101 探测结果对象</text>
<text xml:space="preserve" text-anchor="start" x="63.57" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="93.16" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载条目数、响应耗时与调用结果判定。</text>
</g>
<!-- cvt_probe -->
<g id="node3" class="node">
<title>cvt_probe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="821.76,-1148.4 430.28,-1148.4 430.28,-968.4 821.76,-968.4 821.76,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="524.88" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;101 探测结果转换器</text>
<text xml:space="preserve" text-anchor="start" x="474.73" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js — 覆盖</text>
<text xml:space="preserve" text-anchor="start" x="454.3" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">BIZ&#45;101→OUT&#45;101 与 BIZ&#45;101→POD&#45;101 两组映射。</text>
</g>
<!-- pod_alert -->
<g id="node4" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="789.47,-502.8 462.57,-502.8 462.57,-322.8 789.47,-322.8 789.47,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="523.21" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="482.63" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="561.84" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- out_status -->
<g id="node5" class="node">
<title>out_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="353.04,-502.8 33,-502.8 33,-322.8 353.04,-322.8 353.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="99.11" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;101 状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="83.81" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="124.26" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的状态载荷。</text>
</g>
<!-- dao_alert -->
<g id="node6" class="node">
<title>dao_alert</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M800.7,-163.64C800.7,-172.67 722.4,-180 626.02,-180 529.64,-180 451.34,-172.67 451.34,-163.64 451.34,-163.64 451.34,-16.36 451.34,-16.36 451.34,-7.33 529.64,0 626.02,0 722.4,0 800.7,-7.33 800.7,-16.36 800.7,-16.36 800.7,-163.64 800.7,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M800.7,-163.64C800.7,-154.61 722.4,-147.27 626.02,-147.27 529.64,-147.27 451.34,-154.61 451.34,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="531.55" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;101 告警存储访问</text>
<text xml:space="preserve" text-anchor="start" x="471.4" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</text>
</g>
<!-- in_probequery&#45;&gt;biz_proberesult -->
<g id="edge1" class="edge">
<title>in_probequery&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M146.34,-968.48C144.53,-941.64 144.88,-912.23 150.34,-885.6 153.78,-868.78 159.2,-851.52 165.46,-834.97"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="167.84,-836.08 168.13,-828.14 162.95,-834.17 167.84,-836.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="150.34,-885.6 150.34,-908.4 238.02,-908.4 238.02,-885.6 150.34,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="153.34" y="-891.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为探测结果</text>
</g>
<!-- biz_proberesult&#45;&gt;pod_alert -->
<g id="edge4" class="edge">
<title>biz_proberesult&#45;&gt;pod_alert</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M328.24,-645.67C382.83,-603.16 448.22,-552.24 503.81,-508.96"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="505.24,-511.17 509.55,-504.49 502.02,-507.03 505.24,-511.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="432.37,-562.8 432.37,-585.6 520.06,-585.6 520.06,-562.8 432.37,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="435.37" y="-568.6" font-family="Arial" font-size="14.00" fill="#cbd5e1">异常转告警实体</text>
</g>
<!-- biz_proberesult&#45;&gt;out_status -->
<g id="edge5" class="edge">
<title>biz_proberesult&#45;&gt;out_status</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M208.2,-645.67C205.5,-604.47 202.29,-555.36 199.51,-512.97"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="202.14,-512.96 199.03,-505.65 196.9,-513.31 202.14,-512.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="204.15,-562.8 204.15,-585.6 280.16,-585.6 280.16,-562.8 204.15,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="207.15" y="-568.6" font-family="Arial" font-size="14.00" fill="#eff5fd">渲染状态载荷</text>
</g>
<!-- cvt_probe&#45;&gt;biz_proberesult -->
<g id="edge2" class="edge">
<title>cvt_probe&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M450.08,-968.56C420.02,-950.34 389.99,-930.05 363.52,-908.4 336.64,-886.42 310.61,-859.3 288,-833.15"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="290.25,-831.74 283.38,-827.74 286.26,-835.15 290.25,-831.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="363.52,-885.6 363.52,-908.4 543.02,-908.4 543.02,-885.6 363.52,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="366.52" y="-891.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;101→OUT&#45;101 映射</text>
</g>
<!-- cvt_probe&#45;&gt;pod_alert -->
<g id="edge3" class="edge">
<title>cvt_probe&#45;&gt;pod_alert</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M626.02,-968.59C626.02,-849.18 626.02,-637.53 626.02,-513.03"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="628.65,-513.26 626.02,-505.76 623.4,-513.26 628.65,-513.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="626.02,-724.2 626.02,-747 806.3,-747 806.3,-724.2 626.02,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="629.02" y="-730" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;101→POD&#45;101 映射</text>
</g>
<!-- pod_alert&#45;&gt;dao_alert -->
<g id="edge6" class="edge">
<title>pod_alert&#45;&gt;dao_alert</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M626.02,-322.87C626.02,-282.01 626.02,-233.38 626.02,-191.23"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="628.65,-191.47 626.02,-183.97 623.4,-191.47 628.65,-191.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="626.02,-240 626.02,-262.8 678.7,-262.8 678.7,-240 626.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="629.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#eff5fd">写入告警</text>
</g>
</g>
</svg>
`;case`erm001NF-alert`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="379pt" height="533pt"
 viewBox="0.00 0.00 379.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- pod_alert -->
<g id="node1" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="338.12,-502.8 11.23,-502.8 11.23,-322.8 338.12,-322.8 338.12,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="71.87" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="31.29" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="110.5" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- dao_alert -->
<g id="node2" class="node">
<title>dao_alert</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M349.36,-163.64C349.36,-172.67 271.06,-180 174.68,-180 78.29,-180 0,-172.67 0,-163.64 0,-163.64 0,-16.36 0,-16.36 0,-7.33 78.29,0 174.68,0 271.06,0 349.36,-7.33 349.36,-16.36 349.36,-16.36 349.36,-163.64 349.36,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M349.36,-163.64C349.36,-154.61 271.06,-147.27 174.68,-147.27 78.29,-147.27 0,-154.61 0,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="80.2" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;101 告警存储访问</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</text>
</g>
<!-- pod_alert&#45;&gt;dao_alert -->
<g id="edge1" class="edge">
<title>pod_alert&#45;&gt;dao_alert</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M174.68,-322.87C174.68,-282.01 174.68,-233.38 174.68,-191.23"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="177.3,-191.47 174.68,-183.97 172.05,-191.47 177.3,-191.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="174.68,-240 174.68,-262.8 227.35,-262.8 227.35,-240 174.68,-240"/>
<text xml:space="preserve" text-anchor="start" x="177.68" y="-245.8" font-family="Arial" font-size="14.00" fill="#eff5fd">写入告警</text>
</g>
</g>
</svg>
`;case`api001NF-src101-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="504pt" height="311pt"
 viewBox="0.00 0.00 504.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_src_101</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 466,-273.2 466,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SRC&#45;101 集成状态路由</text>
</g>
<!-- api_101 -->
<g id="node1" class="node">
<title>api_101</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="434.36,-220 39.64,-220 39.64,-40 434.36,-40 434.36,-220"/>
<text xml:space="preserve" text-anchor="start" x="59.7" y="-142" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="121.53" y="-119" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="155.73" y="-101" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
</g>
</g>
</svg>
`;case`pano-src-002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2986pt" height="807pt"
 viewBox="0.00 0.00 2986.00 807.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 791.85)">
<g id="clust1" class="cluster">
<title>cluster_us_govern</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1476,-40 1476,-342.4 2884,-342.4 2884,-40 1476,-40"/>
<text xml:space="preserve" text-anchor="start" x="1484" y="-329.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;202 候选知识经我决策后才对外可见</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_us_scan</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-768.8 1468,-768.8 1468,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-755.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;201 素材入库后自动进入候选知识</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_ui_211</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-40 40,-715.6 1436,-715.6 1436,-40 40,-40"/>
<text xml:space="preserve" text-anchor="start" x="48" y="-702.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;211 素材上传</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_us_alert</title>
<polygon fill="#1a468d" stroke="#1c3979" points="1885,-381.2 1885,-768.8 2948,-768.8 2948,-381.2 1885,-381.2"/>
<text xml:space="preserve" text-anchor="start" x="1893" y="-755.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;203 知识陈旧时我能收到提示</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_i_231</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1925,-421.2 1925,-707.6 2345,-707.6 2345,-421.2 1925,-421.2"/>
<text xml:space="preserve" text-anchor="start" x="1933" y="-694.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;231 阶段性目标 · 巡检并判定新鲜度</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_i_232</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2466,-421.2 2466,-707.6 2908,-707.6 2908,-421.2 2466,-421.2"/>
<text xml:space="preserve" text-anchor="start" x="2474" y="-694.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;232 阶段性目标 · 上报告警并呈现</text>
</g>
<!-- src_202 -->
<g id="node1" class="node">
<title>src_202</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1846.02,-260 1515.98,-260 1515.98,-80 1846.02,-80 1846.02,-260"/>
<text xml:space="preserve" text-anchor="start" x="1595.42" y="-182" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;202 知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="1570.95" y="-159" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="1587.23" y="-141" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口。</text>
</g>
<!-- src_207 -->
<g id="node2" class="node">
<title>src_207</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2341.98,-260 1956.02,-260 1956.02,-80 2341.98,-80 2341.98,-260"/>
<text xml:space="preserve" text-anchor="start" x="2071.75" y="-182" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;207 知识治理</text>
<text xml:space="preserve" text-anchor="start" x="1996.02" y="-159" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="2090.66" y="-141" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 发布决策与治理。</text>
</g>
<!-- src_205 -->
<g id="node3" class="node">
<title>src_205</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2843.89,-260 2452.11,-260 2452.11,-80 2843.89,-80 2843.89,-260"/>
<text xml:space="preserve" text-anchor="start" x="2562.42" y="-182" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;205 文档登记簿</text>
<text xml:space="preserve" text-anchor="start" x="2492.11" y="-159" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;document&#45;registry.js —</text>
<text xml:space="preserve" text-anchor="start" x="2585.49" y="-141" font-family="Arial" font-size="15.00" fill="#bfdbfe">跟踪素材与文档标识。</text>
</g>
<!-- src_201 -->
<g id="node4" class="node">
<title>src_201</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="478.21,-633.2 79.79,-633.2 79.79,-453.2 478.21,-453.2 478.21,-633.2"/>
<text xml:space="preserve" text-anchor="start" x="201.75" y="-546.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;201 素材路由</text>
<text xml:space="preserve" text-anchor="start" x="119.79" y="-523.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 美妆素材接入接口。</text>
</g>
<!-- src_204 -->
<g id="node5" class="node">
<title>src_204</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="930.28,-633.2 587.72,-633.2 587.72,-453.2 930.28,-453.2 930.28,-633.2"/>
<text xml:space="preserve" text-anchor="start" x="673.42" y="-555.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;204 素材批处理</text>
<text xml:space="preserve" text-anchor="start" x="627.72" y="-532.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;batch&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="715.24" y="-514.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">批量素材接入。</text>
</g>
<!-- src_206 -->
<g id="node6" class="node">
<title>src_206</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1395.96,-633.2 1040.04,-633.2 1040.04,-453.2 1395.96,-453.2 1395.96,-633.2"/>
<text xml:space="preserve" text-anchor="start" x="1140.75" y="-555.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;206 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="1080.04" y="-532.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1174.24" y="-514.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识。</text>
</g>
<!-- src_203 -->
<g id="node7" class="node">
<title>src_203</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="955.28,-260 562.72,-260 562.72,-80 955.28,-80 955.28,-260"/>
<text xml:space="preserve" text-anchor="start" x="681.75" y="-173" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;203 素材服务</text>
<text xml:space="preserve" text-anchor="start" x="602.72" y="-150" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 素材接入规则。</text>
</g>
<!-- src_208 -->
<g id="node8" class="node">
<title>src_208</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2312.54,-633.2 1957.46,-633.2 1957.46,-453.2 2312.54,-453.2 2312.54,-633.2"/>
<text xml:space="preserve" text-anchor="start" x="2057.75" y="-555.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;208 知识同步</text>
<text xml:space="preserve" text-anchor="start" x="1997.46" y="-532.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="2038.32" y="-514.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到 RAGFlow。</text>
</g>
<!-- src_209 -->
<g id="node9" class="node">
<title>src_209</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2875.79,-633.2 2498.21,-633.2 2498.21,-453.2 2875.79,-453.2 2875.79,-633.2"/>
<text xml:space="preserve" text-anchor="start" x="2576.41" y="-555.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;209 知识生命周期视图</text>
<text xml:space="preserve" text-anchor="start" x="2538.21" y="-532.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;lifecycle&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="2630.74" y="-514.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识的晋升与下线。</text>
</g>
<!-- src_202&#45;&gt;src_206 -->
<g id="edge1" class="edge">
<title>src_202&#45;&gt;src_206</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1570.2,-259.83C1499.76,-316.31 1408.61,-389.39 1336.68,-447.05"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1335.47,-444.66 1331.26,-451.39 1338.76,-448.75 1335.47,-444.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1449.5,-350.4 1449.5,-373.2 1502.18,-373.2 1502.18,-350.4 1449.5,-350.4"/>
<text xml:space="preserve" text-anchor="start" x="1452.5" y="-356.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- src_207&#45;&gt;src_208 -->
<g id="edge6" class="edge">
<title>src_207&#45;&gt;src_208</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2145.65,-259.83C2143.57,-314.94 2140.9,-385.85 2138.75,-442.82"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2136.13,-442.67 2138.47,-450.26 2141.37,-442.87 2136.13,-442.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2142,-350.4 2142,-373.2 2206.34,-373.2 2206.34,-350.4 2142,-350.4"/>
<text xml:space="preserve" text-anchor="start" x="2145" y="-356.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">批准后推送</text>
</g>
<!-- src_201&#45;&gt;src_203 -->
<g id="edge2" class="edge">
<title>src_201&#45;&gt;src_203</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M393.97,-453.29C467.03,-396.79 561.53,-323.71 636.07,-266.07"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="637.41,-268.35 641.74,-261.68 634.2,-264.19 637.41,-268.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="519,-350.4 519,-373.2 571.68,-373.2 571.68,-350.4 519,-350.4"/>
<text xml:space="preserve" text-anchor="start" x="522" y="-356.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">接收素材</text>
</g>
<!-- src_204&#45;&gt;src_203 -->
<g id="edge3" class="edge">
<title>src_204&#45;&gt;src_203</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M759,-453.29C759,-398.16 759,-327.25 759,-270.29"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="761.63,-270.36 759,-262.86 756.38,-270.36 761.63,-270.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="759,-350.4 759,-373.2 811.68,-373.2 811.68,-350.4 759,-350.4"/>
<text xml:space="preserve" text-anchor="start" x="762" y="-356.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">批量接入</text>
</g>
<!-- src_206&#45;&gt;src_207 -->
<g id="edge4" class="edge">
<title>src_206&#45;&gt;src_207</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1395.94,-506.62C1537.21,-474.53 1737.47,-420.32 1901,-342.4 1944.78,-321.54 1989.36,-293.32 2028.42,-265.81"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2029.61,-268.19 2034.2,-261.71 2026.57,-263.91 2029.61,-268.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1883.74,-350.4 1883.74,-373.2 1936.41,-373.2 1936.41,-350.4 1883.74,-350.4"/>
<text xml:space="preserve" text-anchor="start" x="1886.74" y="-356.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交候选</text>
</g>
<!-- src_203&#45;&gt;src_205 -->
<g id="edge5" class="edge">
<title>src_203&#45;&gt;src_205</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M955.19,-231.59C1092.02,-271.22 1279.7,-319.01 1449,-339.5 1553.57,-352.16 2296.28,-370.32 2397,-339.5 2446.74,-324.28 2495.53,-295.5 2536.66,-265.93"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2538.1,-268.13 2542.61,-261.59 2535,-263.89 2538.1,-268.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1601.66,-350.4 1601.66,-373.2 1654.34,-373.2 1654.34,-350.4 1601.66,-350.4"/>
<text xml:space="preserve" text-anchor="start" x="1604.66" y="-356.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">登记文档</text>
</g>
<!-- src_208&#45;&gt;src_209 -->
<g id="edge7" class="edge">
<title>src_208&#45;&gt;src_209</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2312.31,-543.2C2368.37,-543.2 2430.69,-543.2 2488.15,-543.2"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2487.92,-545.83 2495.42,-543.2 2487.92,-540.58 2487.92,-545.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2367.37,-546.2 2367.37,-569 2443.38,-569 2443.38,-546.2 2367.37,-546.2"/>
<text xml:space="preserve" text-anchor="start" x="2370.37" y="-552" font-family="Arial" font-size="14.00" fill="#bbfcd3">更新生命周期</text>
</g>
<!-- src_209&#45;&gt;src_205 -->
<g id="edge8" class="edge">
<title>src_209&#45;&gt;src_205</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2677.66,-453.29C2671.87,-398.16 2664.42,-327.25 2658.43,-270.29"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2661.04,-270.02 2657.65,-262.84 2655.82,-270.57 2661.04,-270.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2668.67,-350.4 2668.67,-373.2 2733.01,-373.2 2733.01,-350.4 2668.67,-350.4"/>
<text xml:space="preserve" text-anchor="start" x="2671.67" y="-356.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
</g>
</svg>
`;case`carrier002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="891pt" height="1501pt"
 viewBox="0.00 0.00 891.00 1501.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1486.25)">
<!-- in_material -->
<g id="node1" class="node">
<title>in_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="371.03,-1471.2 0,-1471.2 0,-1291.2 371.03,-1291.2 371.03,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="119.38" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;201 素材入参</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 上传素材的请求载荷。</text>
</g>
<!-- biz_candidate -->
<g id="node2" class="node">
<title>biz_candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="450.53,-1148.4 130.49,-1148.4 130.49,-968.4 450.53,-968.4 450.53,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="202.15" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;201 候选知识对象</text>
<text xml:space="preserve" text-anchor="start" x="152.55" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="190.49" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">承载扫描出的候选条目与决策状态。</text>
</g>
<!-- cvt_material -->
<g id="node3" class="node">
<title>cvt_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="860.42,-1471.2 480.61,-1471.2 480.61,-1291.2 860.42,-1291.2 860.42,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="586.05" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;201 素材转换器</text>
<text xml:space="preserve" text-anchor="start" x="545.49" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 覆盖</text>
<text xml:space="preserve" text-anchor="start" x="504.63" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材载荷→BIZ&#45;201 与 BIZ&#45;201→POD&#45;201 两组映射。</text>
</g>
<!-- pod_document -->
<g id="node4" class="node">
<title>pod_document</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="643.96,-825.6 317.07,-825.6 317.07,-645.6 643.96,-645.6 643.96,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="386.04" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;201 文档登记实体</text>
<text xml:space="preserve" text-anchor="start" x="337.12" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="397.98" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents 数组结构对应。</text>
</g>
<!-- dao_registry -->
<g id="node5" class="node">
<title>dao_registry</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M655.19,-486.44C655.19,-495.47 576.9,-502.8 480.51,-502.8 384.13,-502.8 305.84,-495.47 305.84,-486.44 305.84,-486.44 305.84,-339.16 305.84,-339.16 305.84,-330.13 384.13,-322.8 480.51,-322.8 576.9,-322.8 655.19,-330.13 655.19,-339.16 655.19,-339.16 655.19,-486.44 655.19,-486.44"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M655.19,-486.44C655.19,-477.41 576.9,-470.07 480.51,-470.07 384.13,-470.07 305.84,-477.41 305.84,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="386.04" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;201 文档登记访问</text>
<text xml:space="preserve" text-anchor="start" x="325.89" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</text>
</g>
<!-- out_knowledgestatus -->
<g id="node6" class="node">
<title>out_knowledgestatus</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="640.53,-180 320.49,-180 320.49,0 640.53,0 640.53,-180"/>
<text xml:space="preserve" text-anchor="start" x="369.93" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;201 知识状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="370.47" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="380.49" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的扫描与治理状态载荷。</text>
</g>
<!-- in_material&#45;&gt;biz_candidate -->
<g id="edge1" class="edge">
<title>in_material&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M186.48,-1291.27C188.76,-1264.16 193.27,-1234.6 201.83,-1208.4 207.47,-1191.14 215.38,-1173.74 224.17,-1157.22"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="226.39,-1158.64 227.68,-1150.8 221.78,-1156.12 226.39,-1158.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="201.83,-1208.4 201.83,-1231.2 289.51,-1231.2 289.51,-1208.4 201.83,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="204.83" y="-1214.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为候选对象</text>
</g>
<!-- biz_candidate&#45;&gt;pod_document -->
<g id="edge4" class="edge">
<title>biz_candidate&#45;&gt;pod_document</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M343.19,-968.47C367.85,-926.83 397.29,-877.12 422.57,-834.43"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="424.8,-835.82 426.36,-828.03 420.28,-833.15 424.8,-835.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="391.21,-885.6 391.21,-908.4 478.89,-908.4 478.89,-885.6 391.21,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="394.21" y="-891.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">登记为文档实体</text>
</g>
<!-- cvt_material&#45;&gt;biz_candidate -->
<g id="edge2" class="edge">
<title>cvt_material&#45;&gt;biz_candidate</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M521.4,-1291.2C494.11,-1272.62 466.6,-1252.25 442.25,-1231.2 416.08,-1208.58 390.19,-1181.51 367.41,-1155.63"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="369.65,-1154.21 362.74,-1150.29 365.7,-1157.66 369.65,-1154.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="442.25,-1208.4 442.25,-1231.2 587.51,-1231.2 587.51,-1208.4 442.25,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="445.25" y="-1214.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 素材→BIZ&#45;201 映射</text>
</g>
<!-- cvt_material&#45;&gt;pod_document -->
<g id="edge3" class="edge">
<title>cvt_material&#45;&gt;pod_document</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M644.29,-1291.39C609.01,-1171.86 546.44,-959.91 509.7,-835.45"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="512.27,-834.89 507.63,-828.44 507.23,-836.37 512.27,-834.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="600.58,-1047 600.58,-1069.8 780.86,-1069.8 780.86,-1047 600.58,-1047"/>
<text xml:space="preserve" text-anchor="start" x="603.58" y="-1052.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;201→POD&#45;201 映射</text>
</g>
<!-- pod_document&#45;&gt;dao_registry -->
<g id="edge5" class="edge">
<title>pod_document&#45;&gt;dao_registry</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M480.51,-645.67C480.51,-604.81 480.51,-556.18 480.51,-514.03"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="483.14,-514.27 480.51,-506.77 477.89,-514.27 483.14,-514.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="480.51,-562.8 480.51,-585.6 556.53,-585.6 556.53,-562.8 480.51,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="483.51" y="-568.6" font-family="Arial" font-size="14.00" fill="#eff5fd">写入文档标识</text>
</g>
<!-- dao_registry&#45;&gt;out_knowledgestatus -->
<g id="edge6" class="edge">
<title>dao_registry&#45;&gt;out_knowledgestatus</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M480.51,-322.01C480.51,-281 480.51,-232.29 480.51,-190.2"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="483.14,-190.46 480.51,-182.96 477.89,-190.46 483.14,-190.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="480.51,-240 480.51,-262.8 533.19,-262.8 533.19,-240 480.51,-240"/>
<text xml:space="preserve" text-anchor="start" x="483.51" y="-245.8" font-family="Arial" font-size="14.00" fill="#eff5fd">查询状态</text>
</g>
</g>
</svg>
`;case`erm002F-document`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="379pt" height="533pt"
 viewBox="0.00 0.00 379.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- pod_document -->
<g id="node1" class="node">
<title>pod_document</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="338.12,-502.8 11.23,-502.8 11.23,-322.8 338.12,-322.8 338.12,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="80.2" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;201 文档登记实体</text>
<text xml:space="preserve" text-anchor="start" x="31.29" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="92.15" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents 数组结构对应。</text>
</g>
<!-- dao_registry -->
<g id="node2" class="node">
<title>dao_registry</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M349.36,-163.64C349.36,-172.67 271.06,-180 174.68,-180 78.29,-180 0,-172.67 0,-163.64 0,-163.64 0,-16.36 0,-16.36 0,-7.33 78.29,0 174.68,0 271.06,0 349.36,-7.33 349.36,-16.36 349.36,-16.36 349.36,-163.64 349.36,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M349.36,-163.64C349.36,-154.61 271.06,-147.27 174.68,-147.27 78.29,-147.27 0,-154.61 0,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="80.2" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;201 文档登记访问</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 素材与文档标识的读写边界。</text>
</g>
<!-- pod_document&#45;&gt;dao_registry -->
<g id="edge1" class="edge">
<title>pod_document&#45;&gt;dao_registry</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M174.68,-322.87C174.68,-282.01 174.68,-233.38 174.68,-191.23"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="177.3,-191.47 174.68,-183.97 172.05,-191.47 177.3,-191.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="174.68,-240 174.68,-262.8 250.69,-262.8 250.69,-240 174.68,-240"/>
<text xml:space="preserve" text-anchor="start" x="177.68" y="-245.8" font-family="Arial" font-size="14.00" fill="#eff5fd">写入文档标识</text>
</g>
</g>
</svg>
`;case`api002F-src201-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="311pt"
 viewBox="0.00 0.00 446.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_src_201</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 408,-273.2 408,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SRC&#45;201 素材路由</text>
</g>
<!-- api_201 -->
<g id="node1" class="node">
<title>api_201</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="376.43,-220 39.57,-220 39.57,-40 376.43,-40 376.43,-220"/>
<text xml:space="preserve" text-anchor="start" x="59.62" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;201 POST /materials 素材接入</text>
<text xml:space="preserve" text-anchor="start" x="67.54" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js:8 — 接收素材。</text>
</g>
</g>
</svg>
`;case`api002F-src202-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="510pt" height="311pt"
 viewBox="0.00 0.00 510.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_src_202</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 472,-273.2 472,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SRC&#45;202 知识库路由</text>
</g>
<!-- api_202 -->
<g id="node1" class="node">
<title>api_202</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="439.58,-220 40.42,-220 40.42,-40 439.58,-40 439.58,-220"/>
<text xml:space="preserve" text-anchor="start" x="60.47" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;202 POST /knowledge/scan 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="61.18" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:10 — 触发候选知识扫描。</text>
</g>
</g>
</svg>
`;case`api002F-src202-2`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="506pt" height="311pt"
 viewBox="0.00 0.00 506.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_src_202</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 468,-273.2 468,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SRC&#45;202 知识库路由</text>
</g>
<!-- api_203 -->
<g id="node1" class="node">
<title>api_203</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="436.47,-220 39.53,-220 39.53,-40 436.47,-40 436.47,-220"/>
<text xml:space="preserve" text-anchor="start" x="59.59" y="-142" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;203 GET /knowledge/status 知识状态</text>
<text xml:space="preserve" text-anchor="start" x="117.53" y="-119" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:26 —</text>
<text xml:space="preserve" text-anchor="start" x="175.49" y="-101" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询扫描与治理状态。</text>
</g>
</g>
</svg>
`;case`ui001F-001`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="786pt" height="627pt"
 viewBox="0.00 0.00 786.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 748,-589.2 748,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;001 会话输入</text>
</g>
<!-- ui_001_info_1 -->
<g id="node1" class="node">
<title>ui_001_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="708.33,-528 47.67,-528 47.67,-348 708.33,-348 708.33,-528"/>
<text xml:space="preserve" text-anchor="start" x="238.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001&#45;信息设计&#45;001 提问输入信息</text>
<text xml:space="preserve" text-anchor="start" x="71.69" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：问题原文。覆盖空态（未输入）、加载态（提交中）、错误态（解密失败）、无权限态（未授权会话）。</text>
</g>
<!-- ui_001_act_1 -->
<g id="node2" class="node">
<title>ui_001_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="608.31,-228 147.69,-228 147.69,-48 608.31,-48 608.31,-228"/>
<text xml:space="preserve" text-anchor="start" x="255.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001&#45;交互设计&#45;001 提交提问</text>
<text xml:space="preserve" text-anchor="start" x="171.71" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户发送提问后立即进入等待，无需任何手动操作；提交失败可原位重试。</text>
</g>
<!-- ui_001_info_1&#45;&gt;ui_001_act_1 -->
</g>
</svg>
`;case`ui001F-001-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="770pt" height="311pt"
 viewBox="0.00 0.00 770.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 732,-273.2 732,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;001 会话输入</text>
</g>
<!-- ui_001_info_1 -->
<g id="node1" class="node">
<title>ui_001_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="700.33,-220 39.67,-220 39.67,-40 700.33,-40 700.33,-220"/>
<text xml:space="preserve" text-anchor="start" x="230.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001&#45;信息设计&#45;001 提问输入信息</text>
<text xml:space="preserve" text-anchor="start" x="63.69" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：问题原文。覆盖空态（未输入）、加载态（提交中）、错误态（解密失败）、无权限态（未授权会话）。</text>
</g>
</g>
</svg>
`;case`ui001F-001-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="570pt" height="311pt"
 viewBox="0.00 0.00 570.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_001</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 532,-273.2 532,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;001 会话输入</text>
</g>
<!-- ui_001_act_1 -->
<g id="node1" class="node">
<title>ui_001_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="500.31,-220 39.69,-220 39.69,-40 500.31,-40 500.31,-220"/>
<text xml:space="preserve" text-anchor="start" x="147.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001&#45;交互设计&#45;001 提交提问</text>
<text xml:space="preserve" text-anchor="start" x="63.71" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户发送提问后立即进入等待，无需任何手动操作；提交失败可原位重试。</text>
</g>
</g>
</svg>
`;case`ui001F-002`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="612pt" height="627pt"
 viewBox="0.00 0.00 612.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_002</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 574,-589.2 574,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;002 判定反馈</text>
</g>
<!-- ui_002_info_1 -->
<g id="node1" class="node">
<title>ui_002_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="533.81,-528 48.19,-528 48.19,-348 533.81,-348 533.81,-528"/>
<text xml:space="preserve" text-anchor="start" x="159.85" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002&#45;信息设计&#45;001 判定中提示</text>
<text xml:space="preserve" text-anchor="start" x="72.21" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：处理中状态文案。覆盖加载态（校验中）、错误态（校验服务不可用）。</text>
</g>
<!-- ui_002_act_1 -->
<g id="node2" class="node">
<title>ui_002_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="477.55,-228 104.45,-228 104.45,-48 477.55,-48 477.55,-228"/>
<text xml:space="preserve" text-anchor="start" x="159.85" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002&#45;交互设计&#45;001 等待免刷新</text>
<text xml:space="preserve" text-anchor="start" x="128.47" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">判定期间客户无需任何操作，不出现需要手动刷新的界面。</text>
</g>
<!-- ui_002_info_1&#45;&gt;ui_002_act_1 -->
</g>
</svg>
`;case`ui001F-002-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="596pt" height="311pt"
 viewBox="0.00 0.00 596.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_002</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 558,-273.2 558,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;002 判定反馈</text>
</g>
<!-- ui_002_info_1 -->
<g id="node1" class="node">
<title>ui_002_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="525.81,-220 40.19,-220 40.19,-40 525.81,-40 525.81,-220"/>
<text xml:space="preserve" text-anchor="start" x="151.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002&#45;信息设计&#45;001 判定中提示</text>
<text xml:space="preserve" text-anchor="start" x="64.21" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：处理中状态文案。覆盖加载态（校验中）、错误态（校验服务不可用）。</text>
</g>
</g>
</svg>
`;case`ui001F-002-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="484pt" height="311pt"
 viewBox="0.00 0.00 484.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_002</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 446,-273.2 446,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;002 判定反馈</text>
</g>
<!-- ui_002_act_1 -->
<g id="node1" class="node">
<title>ui_002_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="413.55,-220 40.45,-220 40.45,-40 413.55,-40 413.55,-220"/>
<text xml:space="preserve" text-anchor="start" x="95.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002&#45;交互设计&#45;001 等待免刷新</text>
<text xml:space="preserve" text-anchor="start" x="64.47" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">判定期间客户无需任何操作，不出现需要手动刷新的界面。</text>
</g>
</g>
</svg>
`;case`ui001F-003`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1132pt" height="627pt"
 viewBox="0.00 0.00 1132.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1094,-589.2 1094,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;003 答复呈现</text>
</g>
<!-- ui_003_info_1 -->
<g id="node1" class="node">
<title>ui_003_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.06,-528 47.94,-528 47.94,-348 496.06,-348 496.06,-528"/>
<text xml:space="preserve" text-anchor="start" x="132.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;003&#45;信息设计&#45;001 答复正文字段</text>
<text xml:space="preserve" text-anchor="start" x="71.96" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：答复正文。覆盖加载态（生成中）、错误态（生成失败转人工）。</text>
</g>
<!-- ui_003_info_2 -->
<g id="node2" class="node">
<title>ui_003_info_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1054.06,-528 605.94,-528 605.94,-348 1054.06,-348 1054.06,-528"/>
<text xml:space="preserve" text-anchor="start" x="690.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;003&#45;信息设计&#45;002 知识来源条目</text>
<text xml:space="preserve" text-anchor="start" x="629.96" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：来源知识条目标题与链接。空态：无来源（转人工路径不展示）。</text>
</g>
<!-- ui_003_act_1 -->
<g id="node3" class="node">
<title>ui_003_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="458.55,-228 85.45,-228 85.45,-48 458.55,-48 458.55,-228"/>
<text xml:space="preserve" text-anchor="start" x="132.51" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;003&#45;交互设计&#45;001 答复同屏呈现</text>
<text xml:space="preserve" text-anchor="start" x="109.47" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">答复与提问同屏呈现，客户无需滚动查找；答复不可编辑。</text>
</g>
<!-- ui_003_info_1&#45;&gt;ui_003_act_1 -->
</g>
</svg>
`;case`ui001F-003-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="558pt" height="311pt"
 viewBox="0.00 0.00 558.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 520,-273.2 520,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;003 答复呈现</text>
</g>
<!-- ui_003_info_1 -->
<g id="node1" class="node">
<title>ui_003_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="488.06,-220 39.94,-220 39.94,-40 488.06,-40 488.06,-220"/>
<text xml:space="preserve" text-anchor="start" x="124.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;003&#45;信息设计&#45;001 答复正文字段</text>
<text xml:space="preserve" text-anchor="start" x="63.96" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：答复正文。覆盖加载态（生成中）、错误态（生成失败转人工）。</text>
</g>
</g>
</svg>
`;case`ui001F-003-info-2`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="558pt" height="311pt"
 viewBox="0.00 0.00 558.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 520,-273.2 520,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;003 答复呈现</text>
</g>
<!-- ui_003_info_2 -->
<g id="node1" class="node">
<title>ui_003_info_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="488.06,-220 39.94,-220 39.94,-40 488.06,-40 488.06,-220"/>
<text xml:space="preserve" text-anchor="start" x="124.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;003&#45;信息设计&#45;002 知识来源条目</text>
<text xml:space="preserve" text-anchor="start" x="63.96" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：来源知识条目标题与链接。空态：无来源（转人工路径不展示）。</text>
</g>
</g>
</svg>
`;case`ui001F-003-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="484pt" height="311pt"
 viewBox="0.00 0.00 484.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_003</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 446,-273.2 446,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;003 答复呈现</text>
</g>
<!-- ui_003_act_1 -->
<g id="node1" class="node">
<title>ui_003_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="413.55,-220 40.45,-220 40.45,-40 413.55,-40 413.55,-220"/>
<text xml:space="preserve" text-anchor="start" x="87.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;003&#45;交互设计&#45;001 答复同屏呈现</text>
<text xml:space="preserve" text-anchor="start" x="64.47" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">答复与提问同屏呈现，客户无需滚动查找；答复不可编辑。</text>
</g>
</g>
</svg>
`;case`ui001F-011`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="586pt" height="627pt"
 viewBox="0.00 0.00 586.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_011</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 548,-589.2 548,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;011 转接提示</text>
</g>
<!-- ui_011_info_1 -->
<g id="node1" class="node">
<title>ui_011_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="508.31,-528 47.69,-528 47.69,-348 508.31,-348 508.31,-528"/>
<text xml:space="preserve" text-anchor="start" x="146.85" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;011&#45;信息设计&#45;001 转接中提示</text>
<text xml:space="preserve" text-anchor="start" x="71.71" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：转接状态文案。覆盖加载态（判定中）、错误态（转接失败重试）。</text>
</g>
<!-- ui_011_act_1 -->
<g id="node2" class="node">
<title>ui_011_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="438.02,-228 117.98,-228 117.98,-48 438.02,-48 438.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="155.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;011&#45;交互设计&#45;001 转接反馈</text>
<text xml:space="preserve" text-anchor="start" x="152.98" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">转接期间客户可见状态变化，无需重复提问。</text>
</g>
<!-- ui_011_info_1&#45;&gt;ui_011_act_1 -->
</g>
</svg>
`;case`ui001F-011-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="570pt" height="311pt"
 viewBox="0.00 0.00 570.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_011</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 532,-273.2 532,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;011 转接提示</text>
</g>
<!-- ui_011_info_1 -->
<g id="node1" class="node">
<title>ui_011_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="500.31,-220 39.69,-220 39.69,-40 500.31,-40 500.31,-220"/>
<text xml:space="preserve" text-anchor="start" x="138.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;011&#45;信息设计&#45;001 转接中提示</text>
<text xml:space="preserve" text-anchor="start" x="63.71" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：转接状态文案。覆盖加载态（判定中）、错误态（转接失败重试）。</text>
</g>
</g>
</svg>
`;case`ui001F-011-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_011</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;011 转接提示</text>
</g>
<!-- ui_011_act_1 -->
<g id="node1" class="node">
<title>ui_011_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text xml:space="preserve" text-anchor="start" x="77.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;011&#45;交互设计&#45;001 转接反馈</text>
<text xml:space="preserve" text-anchor="start" x="74.98" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">转接期间客户可见状态变化，无需重复提问。</text>
</g>
</g>
</svg>
`;case`ui001F-012`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="562pt" height="627pt"
 viewBox="0.00 0.00 562.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_012</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 524,-589.2 524,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;012 转人工告知</text>
</g>
<!-- ui_012_info_1 -->
<g id="node1" class="node">
<title>ui_012_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="483.8,-528 48.2,-528 48.2,-348 483.8,-348 483.8,-528"/>
<text xml:space="preserve" text-anchor="start" x="126.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;012&#45;信息设计&#45;001 等待告知信息</text>
<text xml:space="preserve" text-anchor="start" x="72.21" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：预计等待说明。覆盖加载态（建单中）、错误态（建单失败）。</text>
</g>
<!-- ui_012_act_1 -->
<g id="node2" class="node">
<title>ui_012_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="446.3,-228 85.7,-228 85.7,-48 446.3,-48 446.3,-228"/>
<text xml:space="preserve" text-anchor="start" x="126.51" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;012&#45;交互设计&#45;001 工单状态查看</text>
<text xml:space="preserve" text-anchor="start" x="109.72" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员通过工单列表查看待接手工单，客户无需操作。</text>
</g>
<!-- ui_012_info_1&#45;&gt;ui_012_act_1 -->
</g>
</svg>
`;case`ui001F-012-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="546pt" height="311pt"
 viewBox="0.00 0.00 546.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_012</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 508,-273.2 508,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;012 转人工告知</text>
</g>
<!-- ui_012_info_1 -->
<g id="node1" class="node">
<title>ui_012_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="475.8,-220 40.2,-220 40.2,-40 475.8,-40 475.8,-220"/>
<text xml:space="preserve" text-anchor="start" x="118.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;012&#45;信息设计&#45;001 等待告知信息</text>
<text xml:space="preserve" text-anchor="start" x="64.21" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：预计等待说明。覆盖加载态（建单中）、错误态（建单失败）。</text>
</g>
</g>
</svg>
`;case`ui001F-012-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="470pt" height="311pt"
 viewBox="0.00 0.00 470.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_012</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 432,-273.2 432,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;012 转人工告知</text>
</g>
<!-- ui_012_act_1 -->
<g id="node1" class="node">
<title>ui_012_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="400.3,-220 39.7,-220 39.7,-40 400.3,-40 400.3,-220"/>
<text xml:space="preserve" text-anchor="start" x="80.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;012&#45;交互设计&#45;001 工单状态查看</text>
<text xml:space="preserve" text-anchor="start" x="63.72" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员通过工单列表查看待接手工单，客户无需操作。</text>
</g>
</g>
</svg>
`;case`ui001NF-111`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="686pt" height="627pt"
 viewBox="0.00 0.00 686.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_111</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 648,-589.2 648,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;111 状态查询</text>
</g>
<!-- ui_111_info_1 -->
<g id="node1" class="node">
<title>ui_111_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="608.32,-528 47.68,-528 47.68,-348 608.32,-348 608.32,-528"/>
<text xml:space="preserve" text-anchor="start" x="196.85" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;111&#45;信息设计&#45;001 条目数展示</text>
<text xml:space="preserve" text-anchor="start" x="71.7" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：当前知识条目数。覆盖空态（尚未入库）、加载态（读取中）、错误态（读取失败）。</text>
</g>
<!-- ui_111_act_1 -->
<g id="node2" class="node">
<title>ui_111_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="502.05,-228 153.95,-228 153.95,-48 502.05,-48 502.05,-228"/>
<text xml:space="preserve" text-anchor="start" x="205.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;111&#45;交互设计&#45;001 发起查询</text>
<text xml:space="preserve" text-anchor="start" x="177.97" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员点击查询后立即反馈读取中，无需刷新页面。</text>
</g>
<!-- ui_111_info_1&#45;&gt;ui_111_act_1 -->
</g>
</svg>
`;case`ui001NF-111-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="670pt" height="311pt"
 viewBox="0.00 0.00 670.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_111</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 632,-273.2 632,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;111 状态查询</text>
</g>
<!-- ui_111_info_1 -->
<g id="node1" class="node">
<title>ui_111_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="600.32,-220 39.68,-220 39.68,-40 600.32,-40 600.32,-220"/>
<text xml:space="preserve" text-anchor="start" x="188.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;111&#45;信息设计&#45;001 条目数展示</text>
<text xml:space="preserve" text-anchor="start" x="63.7" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：当前知识条目数。覆盖空态（尚未入库）、加载态（读取中）、错误态（读取失败）。</text>
</g>
</g>
</svg>
`;case`ui001NF-111-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="458pt" height="311pt"
 viewBox="0.00 0.00 458.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_111</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 420,-273.2 420,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;111 状态查询</text>
</g>
<!-- ui_111_act_1 -->
<g id="node1" class="node">
<title>ui_111_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="388.05,-220 39.95,-220 39.95,-40 388.05,-40 388.05,-220"/>
<text xml:space="preserve" text-anchor="start" x="91.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;111&#45;交互设计&#45;001 发起查询</text>
<text xml:space="preserve" text-anchor="start" x="63.97" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员点击查询后立即反馈读取中，无需刷新页面。</text>
</g>
</g>
</svg>
`;case`ui001NF-112`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="650pt" height="627pt"
 viewBox="0.00 0.00 650.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_112</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 612,-589.2 612,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;112 空库提示呈现</text>
</g>
<!-- ui_112_info_1 -->
<g id="node1" class="node">
<title>ui_112_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="571.56,-528 48.44,-528 48.44,-348 571.56,-348 571.56,-528"/>
<text xml:space="preserve" text-anchor="start" x="170.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;112&#45;信息设计&#45;001 空库提示信息</text>
<text xml:space="preserve" text-anchor="start" x="72.45" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。</text>
</g>
<!-- ui_112_act_1 -->
<g id="node2" class="node">
<title>ui_112_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="470.02,-228 149.98,-228 149.98,-48 470.02,-48 470.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="178.85" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;112&#45;交互设计&#45;001 控制台查看</text>
<text xml:space="preserve" text-anchor="start" x="178.72" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员打开控制台即见提示，无需逐页排查。</text>
</g>
<!-- ui_112_info_1&#45;&gt;ui_112_act_1 -->
</g>
</svg>
`;case`ui001NF-112-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="634pt" height="311pt"
 viewBox="0.00 0.00 634.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_112</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 596,-273.2 596,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;112 空库提示呈现</text>
</g>
<!-- ui_112_info_1 -->
<g id="node1" class="node">
<title>ui_112_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="563.56,-220 40.44,-220 40.44,-40 563.56,-40 563.56,-220"/>
<text xml:space="preserve" text-anchor="start" x="162.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;112&#45;信息设计&#45;001 空库提示信息</text>
<text xml:space="preserve" text-anchor="start" x="64.45" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：空库原因与下一步指引（补素材）。空态显式提示「尚未入库」而非空白列表。</text>
</g>
</g>
</svg>
`;case`ui001NF-112-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_112</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;112 空库提示呈现</text>
</g>
<!-- ui_112_act_1 -->
<g id="node1" class="node">
<title>ui_112_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text xml:space="preserve" text-anchor="start" x="68.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;112&#45;交互设计&#45;001 控制台查看</text>
<text xml:space="preserve" text-anchor="start" x="68.72" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员打开控制台即见提示，无需逐页排查。</text>
</g>
</g>
</svg>
`;case`ui001NF-121`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="550pt" height="627pt"
 viewBox="0.00 0.00 550.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_121</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 512,-589.2 512,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;121 等待反馈</text>
</g>
<!-- ui_121_info_1 -->
<g id="node1" class="node">
<title>ui_121_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="471.55,-528 48.45,-528 48.45,-348 471.55,-348 471.55,-528"/>
<text xml:space="preserve" text-anchor="start" x="128.85" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;121&#45;信息设计&#45;001 等待中提示</text>
<text xml:space="preserve" text-anchor="start" x="72.46" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：等待状态文案。覆盖加载态（检索中）、超时态（判定中）。</text>
</g>
<!-- ui_121_act_1 -->
<g id="node2" class="node">
<title>ui_121_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="427.79,-228 92.21,-228 92.21,-48 427.79,-48 427.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="128.85" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;121&#45;交互设计&#45;001 免手动刷新</text>
<text xml:space="preserve" text-anchor="start" x="116.22" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">等待期间界面持续显示处理中，客户不需反复刷新。</text>
</g>
<!-- ui_121_info_1&#45;&gt;ui_121_act_1 -->
</g>
</svg>
`;case`ui001NF-121-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="534pt" height="311pt"
 viewBox="0.00 0.00 534.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_121</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 496,-273.2 496,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;121 等待反馈</text>
</g>
<!-- ui_121_info_1 -->
<g id="node1" class="node">
<title>ui_121_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="463.55,-220 40.45,-220 40.45,-40 463.55,-40 463.55,-220"/>
<text xml:space="preserve" text-anchor="start" x="120.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;121&#45;信息设计&#45;001 等待中提示</text>
<text xml:space="preserve" text-anchor="start" x="64.46" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：等待状态文案。覆盖加载态（检索中）、超时态（判定中）。</text>
</g>
</g>
</svg>
`;case`ui001NF-121-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="446pt" height="311pt"
 viewBox="0.00 0.00 446.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_121</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 408,-273.2 408,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;121 等待反馈</text>
</g>
<!-- ui_121_act_1 -->
<g id="node1" class="node">
<title>ui_121_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="375.79,-220 40.21,-220 40.21,-40 375.79,-40 375.79,-220"/>
<text xml:space="preserve" text-anchor="start" x="76.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;121&#45;交互设计&#45;001 免手动刷新</text>
<text xml:space="preserve" text-anchor="start" x="64.22" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">等待期间界面持续显示处理中，客户不需反复刷新。</text>
</g>
</g>
</svg>
`;case`ui001NF-122`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="600pt" height="627pt"
 viewBox="0.00 0.00 600.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_122</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 562,-589.2 562,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;122 处理中提示</text>
</g>
<!-- ui_122_info_1 -->
<g id="node1" class="node">
<title>ui_122_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="521.56,-528 48.44,-528 48.44,-348 521.56,-348 521.56,-528"/>
<text xml:space="preserve" text-anchor="start" x="137.18" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;122&#45;信息设计&#45;001 处理中提示信息</text>
<text xml:space="preserve" text-anchor="start" x="72.46" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：处理说明与预计时长。覆盖加载态（判定中）、错误态（判定失败）。</text>
</g>
<!-- ui_122_act_1 -->
<g id="node2" class="node">
<title>ui_122_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="445.02,-228 124.98,-228 124.98,-48 445.02,-48 445.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="162.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;122&#45;交互设计&#45;001 提示下发</text>
<text xml:space="preserve" text-anchor="start" x="172.48" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">提示在会话内直接出现，客户无需操作。</text>
</g>
<!-- ui_122_info_1&#45;&gt;ui_122_act_1 -->
</g>
</svg>
`;case`ui001NF-122-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="584pt" height="311pt"
 viewBox="0.00 0.00 584.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_122</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 546,-273.2 546,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;122 处理中提示</text>
</g>
<!-- ui_122_info_1 -->
<g id="node1" class="node">
<title>ui_122_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="513.56,-220 40.44,-220 40.44,-40 513.56,-40 513.56,-220"/>
<text xml:space="preserve" text-anchor="start" x="129.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;122&#45;信息设计&#45;001 处理中提示信息</text>
<text xml:space="preserve" text-anchor="start" x="64.46" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：处理说明与预计时长。覆盖加载态（判定中）、错误态（判定失败）。</text>
</g>
</g>
</svg>
`;case`ui001NF-122-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_122</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;122 处理中提示</text>
</g>
<!-- ui_122_act_1 -->
<g id="node1" class="node">
<title>ui_122_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text xml:space="preserve" text-anchor="start" x="77.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;122&#45;交互设计&#45;001 提示下发</text>
<text xml:space="preserve" text-anchor="start" x="87.48" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">提示在会话内直接出现，客户无需操作。</text>
</g>
</g>
</svg>
`;case`ui001NF-131`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="574pt" height="627pt"
 viewBox="0.00 0.00 574.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_131</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 536,-589.2 536,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;131 调用反馈</text>
</g>
<!-- ui_131_info_1 -->
<g id="node1" class="node">
<title>ui_131_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="496.06,-528 47.94,-528 47.94,-348 496.06,-348 496.06,-528"/>
<text xml:space="preserve" text-anchor="start" x="132.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;131&#45;信息设计&#45;001 调用异常提示</text>
<text xml:space="preserve" text-anchor="start" x="71.96" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：异常状态说明。覆盖加载态（调用中）、错误态（模型不可用）。</text>
</g>
<!-- ui_131_act_1 -->
<g id="node2" class="node">
<title>ui_131_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="433.54,-228 110.46,-228 110.46,-48 433.54,-48 433.54,-228"/>
<text xml:space="preserve" text-anchor="start" x="149.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;131&#45;交互设计&#45;001 异常反馈</text>
<text xml:space="preserve" text-anchor="start" x="134.47" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">异常时界面不出现空白回复，自动进入转接流程。</text>
</g>
<!-- ui_131_info_1&#45;&gt;ui_131_act_1 -->
</g>
</svg>
`;case`ui001NF-131-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="558pt" height="311pt"
 viewBox="0.00 0.00 558.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_131</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 520,-273.2 520,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;131 调用反馈</text>
</g>
<!-- ui_131_info_1 -->
<g id="node1" class="node">
<title>ui_131_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="488.06,-220 39.94,-220 39.94,-40 488.06,-40 488.06,-220"/>
<text xml:space="preserve" text-anchor="start" x="124.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;131&#45;信息设计&#45;001 调用异常提示</text>
<text xml:space="preserve" text-anchor="start" x="63.96" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：异常状态说明。覆盖加载态（调用中）、错误态（模型不可用）。</text>
</g>
</g>
</svg>
`;case`ui001NF-131-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="434pt" height="311pt"
 viewBox="0.00 0.00 434.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_131</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 396,-273.2 396,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;131 调用反馈</text>
</g>
<!-- ui_131_act_1 -->
<g id="node1" class="node">
<title>ui_131_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="363.54,-220 40.46,-220 40.46,-40 363.54,-40 363.54,-220"/>
<text xml:space="preserve" text-anchor="start" x="79.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;131&#45;交互设计&#45;001 异常反馈</text>
<text xml:space="preserve" text-anchor="start" x="64.47" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">异常时界面不出现空白回复，自动进入转接流程。</text>
</g>
</g>
</svg>
`;case`ui001NF-132`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="624pt" height="627pt"
 viewBox="0.00 0.00 624.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_132</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 586,-589.2 586,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;132 转人工告知</text>
</g>
<!-- ui_132_info_1 -->
<g id="node1" class="node">
<title>ui_132_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="546.06,-528 47.94,-528 47.94,-348 546.06,-348 546.06,-528"/>
<text xml:space="preserve" text-anchor="start" x="157.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;132&#45;信息设计&#45;001 等待告知信息</text>
<text xml:space="preserve" text-anchor="start" x="71.96" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：等待说明与失败原因摘要。覆盖加载态（建单中）、错误态（建单失败）。</text>
</g>
<!-- ui_132_act_1 -->
<g id="node2" class="node">
<title>ui_132_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="457.02,-228 136.98,-228 136.98,-48 457.02,-48 457.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="174.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;132&#45;交互设计&#45;001 告警查看</text>
<text xml:space="preserve" text-anchor="start" x="184.48" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员在控制台查看告警并接手工单。</text>
</g>
<!-- ui_132_info_1&#45;&gt;ui_132_act_1 -->
</g>
</svg>
`;case`ui001NF-132-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="608pt" height="311pt"
 viewBox="0.00 0.00 608.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_132</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 570,-273.2 570,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;132 转人工告知</text>
</g>
<!-- ui_132_info_1 -->
<g id="node1" class="node">
<title>ui_132_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="538.06,-220 39.94,-220 39.94,-40 538.06,-40 538.06,-220"/>
<text xml:space="preserve" text-anchor="start" x="149.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;132&#45;信息设计&#45;001 等待告知信息</text>
<text xml:space="preserve" text-anchor="start" x="63.96" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：等待说明与失败原因摘要。覆盖加载态（建单中）、错误态（建单失败）。</text>
</g>
</g>
</svg>
`;case`ui001NF-132-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_132</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;132 转人工告知</text>
</g>
<!-- ui_132_act_1 -->
<g id="node1" class="node">
<title>ui_132_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text xml:space="preserve" text-anchor="start" x="77.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;132&#45;交互设计&#45;001 告警查看</text>
<text xml:space="preserve" text-anchor="start" x="87.48" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员在控制台查看告警并接手工单。</text>
</g>
</g>
</svg>
`;case`ui002F-211`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="836pt" height="627pt"
 viewBox="0.00 0.00 836.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_211</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 798,-589.2 798,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;211 素材上传</text>
</g>
<!-- ui_211_info_1 -->
<g id="node1" class="node">
<title>ui_211_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="758.33,-528 47.67,-528 47.67,-348 758.33,-348 758.33,-528"/>
<text xml:space="preserve" text-anchor="start" x="263.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;211&#45;信息设计&#45;001 上传表单信息</text>
<text xml:space="preserve" text-anchor="start" x="71.69" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材文件、来源标注。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</text>
</g>
<!-- ui_211_act_1 -->
<g id="node2" class="node">
<title>ui_211_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="563.02,-228 242.98,-228 242.98,-48 563.02,-48 563.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="280.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;211&#45;交互设计&#45;001 上传提交</text>
<text xml:space="preserve" text-anchor="start" x="284.23" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">上传后立即显示扫描进度，支持批量上传。</text>
</g>
<!-- ui_211_info_1&#45;&gt;ui_211_act_1 -->
</g>
</svg>
`;case`ui002F-211-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="820pt" height="311pt"
 viewBox="0.00 0.00 820.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_211</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 782,-273.2 782,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;211 素材上传</text>
</g>
<!-- ui_211_info_1 -->
<g id="node1" class="node">
<title>ui_211_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.33,-220 39.67,-220 39.67,-40 750.33,-40 750.33,-220"/>
<text xml:space="preserve" text-anchor="start" x="255.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;211&#45;信息设计&#45;001 上传表单信息</text>
<text xml:space="preserve" text-anchor="start" x="63.69" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材文件、来源标注。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</text>
</g>
</g>
</svg>
`;case`ui002F-211-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_211</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;211 素材上传</text>
</g>
<!-- ui_211_act_1 -->
<g id="node1" class="node">
<title>ui_211_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text xml:space="preserve" text-anchor="start" x="77.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;211&#45;交互设计&#45;001 上传提交</text>
<text xml:space="preserve" text-anchor="start" x="81.23" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">上传后立即显示扫描进度，支持批量上传。</text>
</g>
</g>
</svg>
`;case`ui002F-221`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1062pt" height="627pt"
 viewBox="0.00 0.00 1062.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_221</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1024,-589.2 1024,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;221 审阅工作台</text>
</g>
<!-- ui_221_info_1 -->
<g id="node1" class="node">
<title>ui_221_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="546.06,-528 47.94,-528 47.94,-348 546.06,-348 546.06,-528"/>
<text xml:space="preserve" text-anchor="start" x="157.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;221&#45;信息设计&#45;001 候选条目列表</text>
<text xml:space="preserve" text-anchor="start" x="71.96" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材标识、来源、扫描状态。覆盖空态（暂无候选）、加载态（载入中）。</text>
</g>
<!-- ui_221_info_2 -->
<g id="node2" class="node">
<title>ui_221_info_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="983.5,-528 656.5,-528 656.5,-348 983.5,-348 983.5,-528"/>
<text xml:space="preserve" text-anchor="start" x="680.51" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;221&#45;信息设计&#45;002 决策记录字段</text>
<text xml:space="preserve" text-anchor="start" x="688.72" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：决策结果、驳回理由。驳回时理由必填。</text>
</g>
<!-- ui_221_act_1 -->
<g id="node3" class="node">
<title>ui_221_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="514.8,-228 79.2,-228 79.2,-48 514.8,-48 514.8,-228"/>
<text xml:space="preserve" text-anchor="start" x="157.51" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;221&#45;交互设计&#45;001 批准驳回操作</text>
<text xml:space="preserve" text-anchor="start" x="103.21" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">逐条批准或驳回，驳回需先填理由再提交；决策不可撤销需二次确认。</text>
</g>
<!-- ui_221_info_1&#45;&gt;ui_221_act_1 -->
</g>
</svg>
`;case`ui002F-221-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="608pt" height="311pt"
 viewBox="0.00 0.00 608.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_221</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 570,-273.2 570,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;221 审阅工作台</text>
</g>
<!-- ui_221_info_1 -->
<g id="node1" class="node">
<title>ui_221_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="538.06,-220 39.94,-220 39.94,-40 538.06,-40 538.06,-220"/>
<text xml:space="preserve" text-anchor="start" x="149.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;221&#45;信息设计&#45;001 候选条目列表</text>
<text xml:space="preserve" text-anchor="start" x="63.96" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材标识、来源、扫描状态。覆盖空态（暂无候选）、加载态（载入中）。</text>
</g>
</g>
</svg>
`;case`ui002F-221-info-2`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="438pt" height="311pt"
 viewBox="0.00 0.00 438.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_221</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 400,-273.2 400,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;221 审阅工作台</text>
</g>
<!-- ui_221_info_2 -->
<g id="node1" class="node">
<title>ui_221_info_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="367.5,-220 40.5,-220 40.5,-40 367.5,-40 367.5,-220"/>
<text xml:space="preserve" text-anchor="start" x="64.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;221&#45;信息设计&#45;002 决策记录字段</text>
<text xml:space="preserve" text-anchor="start" x="72.72" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：决策结果、驳回理由。驳回时理由必填。</text>
</g>
</g>
</svg>
`;case`ui002F-221-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="546pt" height="311pt"
 viewBox="0.00 0.00 546.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_221</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 508,-273.2 508,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;221 审阅工作台</text>
</g>
<!-- ui_221_act_1 -->
<g id="node1" class="node">
<title>ui_221_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="475.8,-220 40.2,-220 40.2,-40 475.8,-40 475.8,-220"/>
<text xml:space="preserve" text-anchor="start" x="118.51" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;221&#45;交互设计&#45;001 批准驳回操作</text>
<text xml:space="preserve" text-anchor="start" x="64.21" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">逐条批准或驳回，驳回需先填理由再提交；决策不可撤销需二次确认。</text>
</g>
</g>
</svg>
`;case`ui002F-231`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="562pt" height="627pt"
 viewBox="0.00 0.00 562.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_231</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 524,-589.2 524,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;231 巡检状态</text>
</g>
<!-- ui_231_info_1 -->
<g id="node1" class="node">
<title>ui_231_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="483.8,-528 48.2,-528 48.2,-348 483.8,-348 483.8,-528"/>
<text xml:space="preserve" text-anchor="start" x="134.85" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;231&#45;信息设计&#45;001 新鲜度状态</text>
<text xml:space="preserve" text-anchor="start" x="72.21" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：新鲜度天数。覆盖正常态（阈值内）、异常态（超阈值标红）。</text>
</g>
<!-- ui_231_act_1 -->
<g id="node2" class="node">
<title>ui_231_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="440.05,-228 91.95,-228 91.95,-48 440.05,-48 440.05,-228"/>
<text xml:space="preserve" text-anchor="start" x="143.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;231&#45;交互设计&#45;001 触发巡检</text>
<text xml:space="preserve" text-anchor="start" x="115.97" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">巡检自动定期执行，也支持手动触发；结果即时刷新。</text>
</g>
<!-- ui_231_info_1&#45;&gt;ui_231_act_1 -->
</g>
</svg>
`;case`ui002F-231-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="546pt" height="311pt"
 viewBox="0.00 0.00 546.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_231</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 508,-273.2 508,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;231 巡检状态</text>
</g>
<!-- ui_231_info_1 -->
<g id="node1" class="node">
<title>ui_231_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="475.8,-220 40.2,-220 40.2,-40 475.8,-40 475.8,-220"/>
<text xml:space="preserve" text-anchor="start" x="126.85" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;231&#45;信息设计&#45;001 新鲜度状态</text>
<text xml:space="preserve" text-anchor="start" x="64.21" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：新鲜度天数。覆盖正常态（阈值内）、异常态（超阈值标红）。</text>
</g>
</g>
</svg>
`;case`ui002F-231-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="458pt" height="311pt"
 viewBox="0.00 0.00 458.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_231</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 420,-273.2 420,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;231 巡检状态</text>
</g>
<!-- ui_231_act_1 -->
<g id="node1" class="node">
<title>ui_231_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="388.05,-220 39.95,-220 39.95,-40 388.05,-40 388.05,-220"/>
<text xml:space="preserve" text-anchor="start" x="91.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;231&#45;交互设计&#45;001 触发巡检</text>
<text xml:space="preserve" text-anchor="start" x="63.97" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">巡检自动定期执行，也支持手动触发；结果即时刷新。</text>
</g>
</g>
</svg>
`;case`ui002F-232`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="700pt" height="627pt"
 viewBox="0.00 0.00 700.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_232</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 662,-589.2 662,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;232 告警呈现</text>
</g>
<!-- ui_232_info_1 -->
<g id="node1" class="node">
<title>ui_232_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="621.57,-528 48.43,-528 48.43,-348 621.57,-348 621.57,-528"/>
<text xml:space="preserve" text-anchor="start" x="212.18" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;232&#45;信息设计&#45;001 告警列表</text>
<text xml:space="preserve" text-anchor="start" x="72.45" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：问题条目标识、新鲜度天数、异常原因。覆盖空态（无异常）、异常态（列出新问题）。</text>
</g>
<!-- ui_232_act_1 -->
<g id="node2" class="node">
<title>ui_232_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="495.02,-228 174.98,-228 174.98,-48 495.02,-48 495.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="212.18" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;232&#45;交互设计&#45;001 告警处理</text>
<text xml:space="preserve" text-anchor="start" x="209.98" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">从告警条目直达修复入口，处理后标记下线。</text>
</g>
<!-- ui_232_info_1&#45;&gt;ui_232_act_1 -->
</g>
</svg>
`;case`ui002F-232-info-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="684pt" height="311pt"
 viewBox="0.00 0.00 684.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_232</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 646,-273.2 646,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;232 告警呈现</text>
</g>
<!-- ui_232_info_1 -->
<g id="node1" class="node">
<title>ui_232_info_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="613.57,-220 40.43,-220 40.43,-40 613.57,-40 613.57,-220"/>
<text xml:space="preserve" text-anchor="start" x="204.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;232&#45;信息设计&#45;001 告警列表</text>
<text xml:space="preserve" text-anchor="start" x="64.45" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：问题条目标识、新鲜度天数、异常原因。覆盖空态（无异常）、异常态（列出新问题）。</text>
</g>
</g>
</svg>
`;case`ui002F-232-act-1`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_ui_232</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;232 告警呈现</text>
</g>
<!-- ui_232_act_1 -->
<g id="node1" class="node">
<title>ui_232_act_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-220 39.98,-220 39.98,-40 360.02,-40 360.02,-220"/>
<text xml:space="preserve" text-anchor="start" x="77.18" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;232&#45;交互设计&#45;001 告警处理</text>
<text xml:space="preserve" text-anchor="start" x="74.98" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">从告警条目直达修复入口，处理后标记下线。</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
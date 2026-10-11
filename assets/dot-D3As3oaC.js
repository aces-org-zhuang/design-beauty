var e=e=>{switch(e){case`procLocal`:return`digraph {
  likec4_viewId = "procLocal";
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
}`;case`procProd`:return`digraph {
  likec4_viewId = "procProd";
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
}`;case`pano-us`:return`digraph {
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
    us_ask [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_ask",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_lowconfidence [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_lowConfidence",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_ask -> us_lowconfidence [style=invis];
    us_kbempty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_kbEmpty",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_lowconfidence -> us_kbempty [style=invis];
    us_ragtimeout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_ragTimeout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_kbempty -> us_ragtimeout [style=invis];
    us_llmdown [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_llmDown",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    i_goal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    i_step [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.i_step",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    i_goal -> i_step [style=invis];
    i_goal_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-101 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    i_step -> i_goal_1 [style=invis];
    i_step_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →<BR/>分发对应提示或工单。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.i_step",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    i_goal_1 -> i_step_1 [style=invis];
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
    st_received [height=2.5,
        label=<<FONT POINT-SIZE="20">已接收</FONT>>,
        likec4_id=st_received,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving [height=2.5,
        label=<<FONT POINT-SIZE="20">检索中</FONT>>,
        likec4_id=st_retrieving,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_received -> st_retrieving [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>,
        likec4_id=q8t4we,
        minlen=1,
        style=dashed];
    st_answering [height=2.5,
        label=<<FONT POINT-SIZE="20">应答中</FONT>>,
        likec4_id=st_answering,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_answering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id="1arookd",
        style=dashed];
    st_waitinghuman [height=2.5,
        label=<<FONT POINT-SIZE="20">待人工</FONT>>,
        likec4_id=st_waitingHuman,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_waitinghuman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>,
        likec4_id=kxyrdh,
        style=dashed];
    st_answered [height=2.5,
        label=<<FONT POINT-SIZE="20">已答复</FONT>>,
        likec4_id=st_answered,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_answering -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">答复已下发</FONT></TD></TR></TABLE>>,
        likec4_id="143sx8r",
        style=dashed];
    st_waitinghuman -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">人工已接管</FONT></TD></TR></TABLE>>,
        likec4_id=b4mlb7,
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
    ui_interaction [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 企业微信会话交互</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.ui_interaction",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_information [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 答复信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.ui_information",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_interaction -> ui_information [style=invis];
    ui_status [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-101 控制台状态提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.ui_status",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_information -> ui_status [style=invis];
    ui_notice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-102 极端场景提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.ui_notice",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_status -> ui_notice [style=invis];
}
`;case`pano-src`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-src",
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
        src_wechatcallback [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_wechatCallback",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_answerorchestrator [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_answerOrchestrator",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_answerloop [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-003 知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 检索增强的应答循环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_answerLoop",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_handoffservice [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_replypolicy [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_replyPolicy",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_ragflowknowledge [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_ragflowKnowledge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_store [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_store",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
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
        src_integrationroutes [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-101 集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>功能概览与集成状态查询。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgealert [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-103 知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js —<BR/>暴露知识新鲜度与空库问题。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_knowledgeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_ragflowprobe [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-104 RAGFlow 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 校验 RAGFlow 数据集状态与可用性。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_ragflowProbe",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_evaluationgate [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_evaluationGate",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_operatorui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-105 运营人员控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_operatorUi",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_storealert [group=feat_degrade_nf,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_storeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_wechatcallback -> src_answerorchestrator [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分发归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id="1sesny5",
        minlen=1,
        style=solid];
    src_integrationroutes -> src_knowledgealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询空库告警</FONT></TD></TR></TABLE>>,
        likec4_id="1plnfnm",
        style=solid];
    src_integrationroutes -> src_ragflowprobe [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测数据集状态</FONT></TD></TR></TABLE>>,
        likec4_id="1x6lz3m",
        minlen=1,
        style=solid];
    src_answerorchestrator -> src_answerloop [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id="1ai76t4",
        style=solid];
    src_answerorchestrator -> src_handoffservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度时转人工</FONT></TD></TR></TABLE>>,
        likec4_id="1pjmo09",
        style=solid];
    src_knowledgealert -> src_evaluationgate [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id=nzxl87,
        style=solid];
    src_answerloop -> src_replypolicy [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>,
        likec4_id=f0ue6w,
        minlen=1,
        style=solid];
    src_answerloop -> src_ragflowknowledge [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id=r5shcu,
        minlen=1,
        style=solid];
    src_handoffservice -> src_store [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id=gu896s,
        minlen=1,
        style=solid];
    src_evaluationgate -> src_storealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id=vpj122,
        minlen=1,
        style=solid];
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
    lane_edge [height=2.5,
        label=<<FONT POINT-SIZE="20">服务端接入泳道</FONT>>,
        likec4_id="feat_answer_f.lane_edge",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lane_edge_1 [height=2.5,
        label=<<FONT POINT-SIZE="20">服务端接入泳道</FONT>>,
        likec4_id="feat_degrade_nf.lane_edge",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lane_edge -> lane_edge_1 [style=invis];
}
`;case`srcdir001F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=srcdir001F,
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
    src_wechatcallback [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.src_wechatCallback",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_answerorchestrator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.src_answerOrchestrator",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_wechatcallback -> src_answerorchestrator [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分发归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id="1sesny5",
        minlen=1,
        style=solid];
    src_answerloop [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-003 知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 检索增强的应答循环。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.src_answerLoop",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_answerorchestrator -> src_answerloop [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id="1ai76t4",
        style=solid];
    src_handoffservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.src_handoffService",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_answerorchestrator -> src_handoffservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度时转人工</FONT></TD></TR></TABLE>>,
        likec4_id="1pjmo09",
        style=solid];
    src_replypolicy [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.src_replyPolicy",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_answerloop -> src_replypolicy [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>,
        likec4_id=f0ue6w,
        minlen=1,
        style=solid];
    src_ragflowknowledge [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.src_ragflowKnowledge",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_answerloop -> src_ragflowknowledge [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id=r5shcu,
        minlen=1,
        style=solid];
    src_store [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.src_store",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_handoffservice -> src_store [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id=gu896s,
        minlen=1,
        style=solid];
}
`;case`srcdir001NF`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=srcdir001NF,
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
    src_integrationroutes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-101 集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>功能概览与集成状态查询。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.src_integrationRoutes",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_knowledgealert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-103 知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js —<BR/>暴露知识新鲜度与空库问题。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.src_knowledgeAlert",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_integrationroutes -> src_knowledgealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询空库告警</FONT></TD></TR></TABLE>>,
        likec4_id="1plnfnm",
        style=solid];
    src_ragflowprobe [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-104 RAGFlow 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 校验 RAGFlow 数据集状态与可用性。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.src_ragflowProbe",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_integrationroutes -> src_ragflowprobe [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测数据集状态</FONT></TD></TR></TABLE>>,
        likec4_id="1x6lz3m",
        minlen=1,
        style=solid];
    src_evaluationgate [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.src_evaluationGate",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_knowledgealert -> src_evaluationgate [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id=nzxl87,
        style=solid];
    src_storealert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.src_storeAlert",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_evaluationgate -> src_storealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id=vpj122,
        minlen=1,
        style=solid];
    src_operatorui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-105 运营人员控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.src_operatorUi",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
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
`;case`erm001F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=erm001F,
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
`;case`erm001NF`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=erm001NF,
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
`;case`stateMain`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=stateMain,
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
    st_received [height=2.5,
        label=<<FONT POINT-SIZE="20">已接收</FONT>>,
        likec4_id=st_received,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving [height=2.5,
        label=<<FONT POINT-SIZE="20">检索中</FONT>>,
        likec4_id=st_retrieving,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_received -> st_retrieving [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>,
        likec4_id=q8t4we,
        minlen=1,
        style=dashed];
    st_answering [height=2.5,
        label=<<FONT POINT-SIZE="20">应答中</FONT>>,
        likec4_id=st_answering,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_answering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id="1arookd",
        style=dashed];
    st_answered [height=2.5,
        label=<<FONT POINT-SIZE="20">已答复</FONT>>,
        likec4_id=st_answered,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_answering -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">答复已下发</FONT></TD></TR></TABLE>>,
        likec4_id="143sx8r",
        minlen=1,
        style=dashed];
}
`;case`stateBranchHuman`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=stateBranchHuman,
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
    st_retrieving [height=2.5,
        label=<<FONT POINT-SIZE="20">检索中</FONT>>,
        likec4_id=st_retrieving,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_waitinghuman [height=2.5,
        label=<<FONT POINT-SIZE="20">待人工</FONT>>,
        likec4_id=st_waitingHuman,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_waitinghuman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>,
        likec4_id=kxyrdh,
        style=dashed];
}
`;case`index`:return`digraph {
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
}
`;case`chain001F-us`:return`digraph {
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
    us_ask [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_ask",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_lowconfidence [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_lowConfidence",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_ask -> us_lowconfidence [style=invis];
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
    us_kbempty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_kbEmpty",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_ragtimeout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_ragTimeout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_kbempty -> us_ragtimeout [style=invis];
    us_llmdown [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_llmDown",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_ragtimeout -> us_llmdown [style=invis];
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
    us_ask [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_ask",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_answer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-001 应答编排能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.f_answer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_ask -> f_answer [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1kuna4v",
        style=solid];
    us_lowconfidence [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.us_lowConfidence",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_retrieval [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-002 知识检索能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.f_retrieval",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_lowconfidence -> f_retrieval [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=tkg14s,
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
    us_kbempty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_kbEmpty",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nf_kbempty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-101 知识库为零条时状态可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.nf_kbEmpty",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    us_kbempty -> nf_kbempty [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1w7tww4",
        style=solid];
    us_ragtimeout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_ragTimeout",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nf_ragtimeout [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-102 RAGFlow 超 8 秒时客户可感知</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8<BR/>秒下发带说明的提示，客服不必反复刷新。角色：客户。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.nf_ragTimeout",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    us_ragtimeout -> nf_ragtimeout [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="15m14tg",
        style=solid];
    us_llmdown [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_llmDown",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    nf_llmdown [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-103 LLM 不可用时自动转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.nf_llmDown",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    us_llmdown -> nf_llmdown [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1wui3tw",
        style=solid];
}
`;case`chain001F-i-goal`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-goal",
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
    i_goal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain001F-i-step`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-step",
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
    i_step [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.i_step",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain001NF-i-goal`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-goal",
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
    i_goal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-101 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain001NF-i-step`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-step",
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
    i_step [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →<BR/>分发对应提示或工单。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.i_step",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain001F-ui`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-ui",
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
    ui_interaction [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 企业微信会话交互</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.ui_interaction",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_information [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 答复信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.ui_information",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_interaction -> ui_information [style=invis];
}
`;case`chain001NF-ui`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-ui",
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
    ui_status [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-101 控制台状态提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.ui_status",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_notice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-102 极端场景提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.ui_notice",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_status -> ui_notice [style=invis];
}
`;case`seq001F-answer`:return`digraph {
  likec4_viewId = "seq001F-answer";
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
  "api_chatcallback" [
    likec4_id = "feat_answer_f.lane_edge.api_chatCallback";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-001 POST /wechat/callback 微信客服回调</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js:12 —<BR/>接收企业微信加密回调。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "step_answerlane" [
    likec4_id = "feat_answer_f.lane_core.step_answerLane";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤（应答泳道）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">编排、检索、校验、生成答复的领域环节。</FONT></TD></TR></TABLE>>;
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
  "src_answerorchestrator" [
    likec4_id = "feat_answer_f.src_answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_replypolicy" [
    likec4_id = "feat_answer_f.src_replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_ragflowknowledge" [
    likec4_id = "feat_answer_f.src_ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_handoffservice" [
    likec4_id = "feat_answer_f.src_handoffService";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "actor_customer" -> "api_chatcallback" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">企业微信提问</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "src_answerorchestrator" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">分发归一化消息</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_answerlane" -> "src_answerorchestrator" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "step_answerlane" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_answerlane" -> "ext_ragflow" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回候选知识</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "step_answerlane" -> "src_replypolicy" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_answerlane" -> "src_replypolicy" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">达标放行</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "api_chatcallback" -> "step_answerlane" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回答复</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`seq001F-branch-low-confidence`:return`digraph {
  likec4_viewId = "seq001F-branch-low-confidence";
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
  "src_replypolicy" [
    likec4_id = "feat_answer_f.src_replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_answerorchestrator" [
    likec4_id = "feat_answer_f.src_answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_handoffservice" [
    likec4_id = "feat_answer_f.src_handoffService";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_store" [
    likec4_id = "feat_answer_f.src_store";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
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
  "src_replypolicy" -> "src_answerorchestrator" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_answerorchestrator" -> "src_handoffservice" [
    likec4_id = "step-02";
    style = "solid";
    color = "#15803d";
    fontcolor = "#bbfcd3";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">转人工</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_handoffservice" -> "src_store" [
    likec4_id = "step-03";
    style = "solid";
    color = "#15803d";
    fontcolor = "#bbfcd3";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_store" -> "actor_customer" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">告知等待人工</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001F-answer`:return`digraph {
  likec4_viewId = "dfd001F-answer";
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
  "ui_interaction" [
    likec4_id = "feat_answer_f.ui_interaction";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 企业微信会话交互</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
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
  "ui_information" [
    likec4_id = "feat_answer_f.ui_information";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 答复信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "ui_interaction" -> "in_chatmessage" [
    likec4_id = "step-01";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">提交提问</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "in_chatmessage" -> "biz_query" [
    likec4_id = "step-02";
    color = "#64748b";
    fontcolor = "#cbd5e1";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">转换为检索查询</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "biz_query" -> "pod_ticket" [
    likec4_id = "step-03";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">低置信度落工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "pod_ticket" -> "dao_store" [
    likec4_id = "step-04";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">写入工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "dao_store" -> "out_answer" [
    likec4_id = "step-05";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">查询答复内容</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "out_answer" -> "ui_information" [
    likec4_id = "step-06";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">渲染答复</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq001NF-degrade`:return`digraph {
  likec4_viewId = "seq001NF-degrade";
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
  "api_status" [
    likec4_id = "feat_degrade_nf.lane_edge.api_status";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-101 GET /integration/status 集成状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js:7 —<BR/>查询集成状态与知识条目数。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "step_probelane" [
    likec4_id = "feat_degrade_nf.lane_core.step_probeLane";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑（判定泳道）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识条目、响应耗时、模型可用性的判定环节。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ext_ragflow" [
    likec4_id = "feat_degrade_nf.lane_ext.ext_ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索与知识库服务，超时或不可用即触发本链场景。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "src_evaluationgate" [
    likec4_id = "feat_degrade_nf.src_evaluationGate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ui_notice" [
    likec4_id = "feat_degrade_nf.ui_notice";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-102 极端场景提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "actor_ops" -> "api_status" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">查询集成状态</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_status" -> "step_probelane" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发起探测</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_probelane" -> "ext_ragflow" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">探测数据集可用性</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_probelane" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回探测结论</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "step_probelane" -> "src_evaluationgate" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_evaluationgate" -> "ui_notice" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">下发场景提示</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`dfd001NF-probe`:return`digraph {
  likec4_viewId = "dfd001NF-probe";
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
  "in_probequery" [
    likec4_id = "feat_degrade_nf.in_probeQuery";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-101 状态探测入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>控制台发起的集成状态查询。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
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
  "out_status" [
    likec4_id = "feat_degrade_nf.out_status";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-101 状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>面向控制台的状态载荷。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ui_status" [
    likec4_id = "feat_degrade_nf.ui_status";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-101 控制台状态提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
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
  "actor_ops" -> "in_probequery" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">构造探测入参</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "in_probequery" -> "biz_proberesult" [
    likec4_id = "step-02";
    color = "#64748b";
    fontcolor = "#cbd5e1";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">转换为探测结果</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "biz_proberesult" -> "out_status" [
    likec4_id = "step-03";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">渲染状态载荷</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "out_status" -> "ui_status" [
    likec4_id = "step-04";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">显示条目数与异常提示</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "biz_proberesult" -> "pod_alert" [
    likec4_id = "step-05";
    color = "#64748b";
    fontcolor = "#cbd5e1";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">异常转告警实体</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "pod_alert" -> "dao_alert" [
    likec4_id = "step-06";
    style = "solid";
    color = "#3b82f6";
    fontcolor = "#eff5fd";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">写入告警</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`seq001F-i-step-lanes`:return`digraph {
  likec4_viewId = "seq001F-i-step-lanes";
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
  "api_chatcallback" [
    likec4_id = "feat_answer_f.lane_edge.api_chatCallback";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-001 POST /wechat/callback 微信客服回调</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js:12 —<BR/>接收企业微信加密回调。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "step_answerlane" [
    likec4_id = "feat_answer_f.lane_core.step_answerLane";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤（应答泳道）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">编排、检索、校验、生成答复的领域环节。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_steplanestep" [
    likec4_id = "feat_answer_f.lane_core.i_stepLaneStep";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-005 校验与生成环节</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按置信度与风险阈值判定放行或转人工，并生成答复正文。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_steplanesearch" [
    likec4_id = "feat_answer_f.lane_core.i_stepLaneSearch";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-004 检索环节</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">向 RAGFlow 发起检索并接收候选知识。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_customer" -> "api_chatcallback" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①提出问题</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "step_answerlane" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②归一化并派发</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_answerlane" -> "i_steplanesearch" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③检索候选知识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_answerlane" -> "i_steplanesearch" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">④候选返回</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "step_answerlane" -> "i_steplanestep" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑤置信度校验</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "i_steplanestep" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑥生成答复</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "actor_customer" -> "api_chatcallback" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑦答复送达</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`seq001NF-i-step-lanes`:return`digraph {
  likec4_viewId = "seq001NF-i-step-lanes";
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
  "api_status" [
    likec4_id = "feat_degrade_nf.lane_edge.api_status";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-101 GET /integration/status 集成状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js:7 —<BR/>查询集成状态与知识条目数。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "step_probelane" [
    likec4_id = "feat_degrade_nf.lane_core.step_probeLane";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑（判定泳道）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识条目、响应耗时、模型可用性的判定环节。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_steplanekbcheck" [
    likec4_id = "feat_degrade_nf.lane_core.i_stepLaneKbCheck";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-103 条目数判定</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">判定知识库当前条目数，为零时标记空库场景。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_steplanetimeoutcheck" [
    likec4_id = "feat_degrade_nf.lane_core.i_stepLaneTimeoutCheck";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-104 响应耗时判定</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">判定 RAGFlow 响应是否超过 8 秒阈值。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_steplanellmcheck" [
    likec4_id = "feat_degrade_nf.lane_core.i_stepLaneLlmCheck";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-105 模型可用性判定</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">判定模型服务调用结果，失败时标记转人工场景。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_ops" -> "api_status" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①查询状态</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_status" -> "step_probelane" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②发起探测</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_probelane" -> "i_steplanekbcheck" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③判定条目数</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_steplanekbcheck" -> "i_steplanetimeoutcheck" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">④判定响应耗时</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_steplanetimeoutcheck" -> "i_steplanellmcheck" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑤判定模型可用性</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "actor_ops" -> "i_steplanellmcheck" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑥下发提示或转人工</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`seq001F-api-chat`:return`digraph {
  likec4_viewId = "seq001F-api-chat";
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
  "api_chatcallback" [
    likec4_id = "feat_answer_f.lane_edge.api_chatCallback";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-001 POST /wechat/callback 微信客服回调</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js:12 —<BR/>接收企业微信加密回调。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "step_answerlane" [
    likec4_id = "feat_answer_f.lane_core.step_answerLane";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤（应答泳道）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">编排、检索、校验、生成答复的领域环节。</FONT></TD></TR></TABLE>>;
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
  "actor_customer" -> "api_chatcallback" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">POST /wechat/callback</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "step_answerlane" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">触发应答</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_answerlane" -> "ext_ragflow" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">检索知识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_answerlane" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回候选知识</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "api_chatcallback" -> "step_answerlane" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回答复</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`seq001NF-api-status`:return`digraph {
  likec4_viewId = "seq001NF-api-status";
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
  "api_status" [
    likec4_id = "feat_degrade_nf.lane_edge.api_status";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-101 GET /integration/status 集成状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js:7 —<BR/>查询集成状态与知识条目数。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "step_probelane" [
    likec4_id = "feat_degrade_nf.lane_core.step_probeLane";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑（判定泳道）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识条目、响应耗时、模型可用性的判定环节。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "ext_ragflow" [
    likec4_id = "feat_degrade_nf.lane_ext.ext_ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索与知识库服务，超时或不可用即触发本链场景。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_ops" -> "api_status" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">GET /integration/status</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_status" -> "step_probelane" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发起探测</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_probelane" -> "ext_ragflow" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">探测数据集</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "step_probelane" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回结论</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`procLocal`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`procProd`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`pano-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1670pt" height="1110pt"
 viewBox="0.00 0.00 1670.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="815.26,-1080 37.51,-1080 37.51,-900 815.26,-900 815.26,-1080"/>
<text xml:space="preserve" text-anchor="start" x="306.35" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="57.56" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="809.01,-780 43.76,-780 43.76,-600 809.01,-600 809.01,-780"/>
<text xml:space="preserve" text-anchor="start" x="298.02" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="63.81" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- us_kbempty -->
<g id="node3" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="852.77,-480 0,-480 0,-300 852.77,-300 852.77,-480"/>
<text xml:space="preserve" text-anchor="start" x="281.35" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="407.63" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node4" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="705.66,-180 147.11,-180 147.11,0 705.66,0 705.66,-180"/>
<text xml:space="preserve" text-anchor="start" x="252.45" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="167.17" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="332.61" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node5" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1640.01,-1080 924.76,-1080 924.76,-900 1640.01,-900 1640.01,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1115.11" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="944.82" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- us_ask&#45;&gt;us_lowconfidence -->
<!-- us_lowconfidence&#45;&gt;us_kbempty -->
<!-- us_kbempty&#45;&gt;us_ragtimeout -->
</g>
</svg>
`;case`pano-f`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="510pt"
 viewBox="0.00 0.00 350.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- f_answer -->
<g id="node1" class="node">
<title>f_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="81.11" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;001 应答编排能力</text>
<text xml:space="preserve" text-anchor="start" x="22.49" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</text>
</g>
<!-- f_retrieval -->
<g id="node2" class="node">
<title>f_retrieval</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="81.11" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;002 知识检索能力</text>
<text xml:space="preserve" text-anchor="start" x="30" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</text>
</g>
<!-- f_answer&#45;&gt;f_retrieval -->
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
<svg width="519pt" height="1110pt"
 viewBox="0.00 0.00 519.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- i_goal -->
<g id="node1" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="408.52,-1080 80.85,-1080 80.85,-900 408.52,-900 408.52,-1080"/>
<text xml:space="preserve" text-anchor="start" x="185.77" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="100.91" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</text>
</g>
<!-- i_step -->
<g id="node2" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="452.28,-780 37.09,-780 37.09,-600 452.28,-600 452.28,-780"/>
<text xml:space="preserve" text-anchor="start" x="185.77" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤</text>
<text xml:space="preserve" text-anchor="start" x="57.15" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</text>
</g>
<!-- i_goal_1 -->
<g id="node3" class="node">
<title>i_goal_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="452.28,-480 37.09,-480 37.09,-300 452.28,-300 452.28,-480"/>
<text xml:space="preserve" text-anchor="start" x="185.77" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;101 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="57.15" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
<!-- i_step_1 -->
<g id="node4" class="node">
<title>i_step_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="489.37,-180 0,-180 0,0 489.37,0 489.37,-180"/>
<text xml:space="preserve" text-anchor="start" x="169.11" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →</text>
<text xml:space="preserve" text-anchor="start" x="182.17" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">分发对应提示或工单。</text>
</g>
<!-- i_goal&#45;&gt;i_step -->
<!-- i_step&#45;&gt;i_goal_1 -->
<!-- i_goal_1&#45;&gt;i_step_1 -->
</g>
</svg>
`;case`pano-i-state`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="1178pt"
 viewBox="0.00 0.00 780.00 1178.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- st_received -->
<g id="node1" class="node">
<title>st_received</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-1148.4 215,-1148.4 215,-968.4 535.04,-968.4 535.04,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="350.02" y="-1050.4" font-family="Arial" font-size="20.00" fill="#eff6ff">已接收</text>
</g>
<!-- st_retrieving -->
<g id="node2" class="node">
<title>st_retrieving</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-825.6 215,-825.6 215,-645.6 535.04,-645.6 535.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="350.02" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">检索中</text>
</g>
<!-- st_answering -->
<g id="node3" class="node">
<title>st_answering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="135.02" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">应答中</text>
</g>
<!-- st_waitinghuman -->
<g id="node4" class="node">
<title>st_waitinghuman</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="565.02" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">待人工</text>
</g>
<!-- st_answered -->
<g id="node5" class="node">
<title>st_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="534.04,-180 214,-180 214,0 534.04,0 534.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="349.02" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">已答复</text>
</g>
<!-- st_received&#45;&gt;st_retrieving -->
<g id="edge1" class="edge">
<title>st_received&#45;&gt;st_retrieving</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-968.47C375.02,-927.27 375.02,-878.16 375.02,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="377.65,-835.96 375.02,-828.46 372.4,-835.96 377.65,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="375.02,-885.6 375.02,-908.4 427.7,-908.4 427.7,-885.6 375.02,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="378.02" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起检索</text>
</g>
<!-- st_retrieving&#45;&gt;st_answering -->
<g id="edge2" class="edge">
<title>st_retrieving&#45;&gt;st_answering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M315.42,-645.67C287.45,-603.94 254.06,-554.11 225.4,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="227.59,-509.91 221.24,-505.14 223.23,-512.84 227.59,-509.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-562.8 273.97,-585.6 338.31,-585.6 338.31,-562.8 273.97,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="276.97" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度达标</text>
</g>
<!-- st_retrieving&#45;&gt;st_waitinghuman -->
<g id="edge3" class="edge">
<title>st_retrieving&#45;&gt;st_waitinghuman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M434.62,-645.67C462.59,-603.94 495.98,-554.11 524.64,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="526.81,-512.84 528.8,-505.14 522.45,-509.91 526.81,-512.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-562.8 488.97,-585.6 553.31,-585.6 553.31,-562.8 488.97,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="491.97" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足</text>
</g>
<!-- st_answering&#45;&gt;st_answered -->
<g id="edge4" class="edge">
<title>st_answering&#45;&gt;st_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219.35,-322.87C247.18,-281.14 280.42,-231.31 308.94,-188.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="311.11,-190.04 313.08,-182.35 306.74,-187.13 311.11,-190.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.44,-240 273.44,-262.8 337.78,-262.8 337.78,-240 273.44,-240"/>
<text xml:space="preserve" text-anchor="start" x="276.44" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">答复已下发</text>
</g>
<!-- st_waitinghuman&#45;&gt;st_answered -->
<g id="edge5" class="edge">
<title>st_waitinghuman&#45;&gt;st_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M530.14,-322.87C502.05,-281.14 468.5,-231.31 439.71,-188.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="441.89,-187.1 435.52,-182.34 437.53,-190.03 441.89,-187.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.5,-240 488.5,-262.8 552.84,-262.8 552.84,-240 488.5,-240"/>
<text xml:space="preserve" text-anchor="start" x="491.5" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">人工已接管</text>
</g>
</g>
</svg>
`;case`pano-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="891pt" height="1110pt"
 viewBox="0.00 0.00 891.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- ui_interaction -->
<g id="node1" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="629.4,-1080 231.3,-1080 231.3,-900 629.4,-900 629.4,-1080"/>
<text xml:space="preserve" text-anchor="start" x="330.87" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="255.31" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- ui_information -->
<g id="node2" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="860.69,-780 0,-780 0,-600 860.69,-600 860.69,-780"/>
<text xml:space="preserve" text-anchor="start" x="347.54" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- ui_status -->
<g id="node3" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="641.9,-480 218.79,-480 218.79,-300 641.9,-300 641.9,-480"/>
<text xml:space="preserve" text-anchor="start" x="339.21" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="242.81" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
<!-- ui_notice -->
<g id="node4" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="748.17,-180 112.52,-180 112.52,0 748.17,0 748.17,-180"/>
<text xml:space="preserve" text-anchor="start" x="347.54" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="136.54" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
<!-- ui_interaction&#45;&gt;ui_information -->
<!-- ui_information&#45;&gt;ui_status -->
<!-- ui_status&#45;&gt;ui_notice -->
</g>
</svg>
`;case`pano-src`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2440pt" height="1296pt"
 viewBox="0.00 0.00 2440.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 1448,-1257.6 1448,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1478,-8 1478,-1257.6 2402,-1257.6 2402,-8 1478,-8"/>
<text xml:space="preserve" text-anchor="start" x="1486" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- src_wechatcallback -->
<g id="node1" class="node">
<title>src_wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1007.02,-1196.4 676.98,-1196.4 676.98,-1016.4 1007.02,-1016.4 1007.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="731.41" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="735.72" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="741.98" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node2" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1007.02,-873.6 676.98,-873.6 676.98,-693.6 1007.02,-693.6 1007.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="756.42" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="717.8" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="773.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_answerloop -->
<g id="node3" class="node">
<title>src_answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="865.64,-550.8 476.36,-550.8 476.36,-370.8 865.64,-370.8 865.64,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="577.08" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="516.36" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="600.15" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- src_handoffservice -->
<g id="node4" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1402.38,-550.8 975.62,-550.8 975.62,-370.8 1402.38,-370.8 1402.38,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1103.42" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="1015.62" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- src_replypolicy -->
<g id="node5" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.02,-228 47.98,-228 47.98,-48 378.02,-48 378.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="135.75" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="91.31" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="144.24" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node6" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="860.29,-228 487.71,-228 487.71,-48 860.29,-48 860.29,-228"/>
<text xml:space="preserve" text-anchor="start" x="551.19" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="527.71" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="617.74" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- src_store -->
<g id="node7" class="node">
<title>src_store</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1407.79,-228 970.21,-228 970.21,-48 1407.79,-48 1407.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="1111.75" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1010.21" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- src_integrationroutes -->
<g id="node8" class="node">
<title>src_integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1874.02,-1196.4 1543.98,-1196.4 1543.98,-1016.4 1874.02,-1016.4 1874.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1615.08" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="1599.79" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="1633.99" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- src_knowledgealert -->
<g id="node9" class="node">
<title>src_knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1871.71,-873.6 1518.29,-873.6 1518.29,-693.6 1871.71,-693.6 1871.71,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1617.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="1558.29" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1613.73" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- src_ragflowprobe -->
<g id="node10" class="node">
<title>src_ragflowprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2362.45,-873.6 1981.55,-873.6 1981.55,-693.6 2362.45,-693.6 2362.45,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2032.52" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="2021.55" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="2052.4" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- src_evaluationgate -->
<g id="node11" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1882.02,-550.8 1551.98,-550.8 1551.98,-370.8 1882.02,-370.8 1882.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1639.75" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="1608.21" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="1604.48" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- src_operatorui -->
<g id="node12" class="node">
<title>src_operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2357.12,-1196.4 2002.88,-1196.4 2002.88,-1016.4 2357.12,-1016.4 2357.12,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2077.75" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="2042.88" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- src_storealert -->
<g id="node13" class="node">
<title>src_storealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1944.38,-228 1517.62,-228 1517.62,-48 1944.38,-48 1944.38,-228"/>
<text xml:space="preserve" text-anchor="start" x="1637.08" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="1557.62" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- src_wechatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge1" class="edge">
<title>src_wechatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M842,-1016.47C842,-975.27 842,-926.16 842,-883.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="844.63,-883.96 842,-876.46 839.38,-883.96 844.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="842,-933.6 842,-956.4 929.68,-956.4 929.68,-933.6 842,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="845" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">分发归一化消息</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_answerloop -->
<g id="edge4" class="edge">
<title>src_answerorchestrator&#45;&gt;src_answerloop</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M794.59,-693.67C772.45,-652.12 746.02,-602.53 723.29,-559.9"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="725.62,-558.68 719.77,-553.3 720.99,-561.15 725.62,-558.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="761.63,-610.8 761.63,-633.6 814.3,-633.6 814.3,-610.8 761.63,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="764.63" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_handoffservice -->
<g id="edge5" class="edge">
<title>src_answerorchestrator&#45;&gt;src_handoffservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M938.2,-693.67C983.89,-651.42 1038.58,-600.87 1085.21,-557.76"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1086.97,-559.7 1090.69,-552.68 1083.4,-555.85 1086.97,-559.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1025.9,-610.8 1025.9,-633.6 1125.26,-633.6 1125.26,-610.8 1025.9,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1028.9" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- src_answerloop&#45;&gt;src_replypolicy -->
<g id="edge7" class="edge">
<title>src_answerloop&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M544.03,-370.87C483.1,-328.19 410.05,-277.02 348.1,-233.63"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="349.95,-231.72 342.3,-229.57 346.94,-236.02 349.95,-231.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.73,-288 455.73,-310.8 520.08,-310.8 520.08,-288 455.73,-288"/>
<text xml:space="preserve" text-anchor="start" x="458.73" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- src_answerloop&#45;&gt;src_ragflowknowledge -->
<g id="edge8" class="edge">
<title>src_answerloop&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M671.83,-370.87C672.22,-329.67 672.68,-280.56 673.07,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="675.7,-238.38 673.14,-230.86 670.45,-238.33 675.7,-238.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="672.59,-288 672.59,-310.8 748.6,-310.8 748.6,-288 672.59,-288"/>
<text xml:space="preserve" text-anchor="start" x="675.59" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- src_handoffservice&#45;&gt;src_store -->
<g id="edge9" class="edge">
<title>src_handoffservice&#45;&gt;src_store</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1189,-370.87C1189,-329.67 1189,-280.56 1189,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1191.63,-238.36 1189,-230.86 1186.38,-238.36 1191.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1189,-288 1189,-310.8 1253.34,-310.8 1253.34,-288 1189,-288"/>
<text xml:space="preserve" text-anchor="start" x="1192" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_knowledgealert -->
<g id="edge2" class="edge">
<title>src_integrationroutes&#45;&gt;src_knowledgealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1705.12,-1016.47C1703.32,-975.27 1701.18,-926.16 1699.33,-883.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1701.96,-883.83 1699.01,-876.45 1696.71,-884.06 1701.96,-883.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1702.42,-933.6 1702.42,-956.4 1778.43,-956.4 1778.43,-933.6 1702.42,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1705.42" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_ragflowprobe -->
<g id="edge3" class="edge">
<title>src_integrationroutes&#45;&gt;src_ragflowprobe</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1837.36,-1016.47C1898.95,-973.79 1972.8,-922.62 2035.43,-879.23"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2036.64,-881.58 2041.31,-875.15 2033.65,-877.27 2036.64,-881.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1954.38,-933.6 1954.38,-956.4 2042.07,-956.4 2042.07,-933.6 1954.38,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1957.38" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">探测数据集状态</text>
</g>
<!-- src_knowledgealert&#45;&gt;src_evaluationgate -->
<g id="edge6" class="edge">
<title>src_knowledgealert&#45;&gt;src_evaluationgate</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1701.1,-693.67C1703.92,-652.47 1707.29,-603.36 1710.2,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1712.81,-561.31 1710.7,-553.65 1707.57,-560.95 1712.81,-561.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1706.66,-610.8 1706.66,-633.6 1782.67,-633.6 1782.67,-610.8 1706.66,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1709.66" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- src_evaluationgate&#45;&gt;src_storealert -->
<g id="edge10" class="edge">
<title>src_evaluationgate&#45;&gt;src_storealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1720.88,-370.87C1722.68,-329.67 1724.82,-280.56 1726.67,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1729.29,-238.46 1726.99,-230.85 1724.04,-238.23 1729.29,-238.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1724.42,-288 1724.42,-310.8 1800.43,-310.8 1800.43,-288 1724.42,-288"/>
<text xml:space="preserve" text-anchor="start" x="1727.42" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
</g>
</svg>
`;case`pano-carrier`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1753pt" height="1941pt"
 viewBox="0.00 0.00 1753.00 1941.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<g id="edge6" class="edge">
<title>in_chatmessage&#45;&gt;biz_query</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M261.71,-1339.27C263.9,-1298.07 266.5,-1248.96 268.74,-1206.57"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="271.36,-1206.88 269.13,-1199.25 266.11,-1206.6 271.36,-1206.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="266.01,-1256.4 266.01,-1279.2 353.69,-1279.2 353.69,-1256.4 266.01,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="269.01" y="-1262.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为检索查询</text>
</g>
<!-- biz_query&#45;&gt;pod_ticket -->
<g id="edge9" class="edge">
<title>biz_query&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M276.5,-1016.47C277.65,-975.27 279.03,-926.16 280.22,-883.77"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="282.84,-884.03 280.42,-876.46 277.59,-883.88 282.84,-884.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="278.77,-933.6 278.77,-956.4 366.45,-956.4 366.45,-933.6 278.77,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="281.77" y="-939.4" font-family="Arial" font-size="14.00" fill="#eff5fd">低置信度落工单</text>
</g>
<!-- pod_ticket&#45;&gt;dao_store -->
<g id="edge11" class="edge">
<title>pod_ticket&#45;&gt;dao_store</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M284.66,-693.67C285.43,-652.81 286.34,-604.18 287.13,-562.03"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="289.75,-562.32 287.26,-554.77 284.5,-562.22 289.75,-562.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="286.18,-610.8 286.18,-633.6 338.86,-633.6 338.86,-610.8 286.18,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="289.18" y="-616.6" font-family="Arial" font-size="14.00" fill="#eff5fd">写入工单</text>
</g>
<!-- dao_store&#45;&gt;out_answer -->
<g id="edge12" class="edge">
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
<g id="edge7" class="edge">
<title>biz_proberesult&#45;&gt;pod_alert</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M1181.22,-1339.27C1235.81,-1296.76 1301.2,-1245.84 1356.79,-1202.56"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1358.22,-1204.77 1362.53,-1198.09 1355,-1200.63 1358.22,-1204.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1285.35,-1256.4 1285.35,-1279.2 1373.04,-1279.2 1373.04,-1256.4 1285.35,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1288.35" y="-1262.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">异常转告警实体</text>
</g>
<!-- biz_proberesult&#45;&gt;out_status -->
<g id="edge8" class="edge">
<title>biz_proberesult&#45;&gt;out_status</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1061.18,-1339.27C1058.48,-1298.07 1055.27,-1248.96 1052.49,-1206.57"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1055.12,-1206.56 1052.01,-1199.25 1049.88,-1206.91 1055.12,-1206.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1057.13,-1256.4 1057.13,-1279.2 1133.14,-1279.2 1133.14,-1256.4 1057.13,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1060.13" y="-1262.2" font-family="Arial" font-size="14.00" fill="#eff5fd">渲染状态载荷</text>
</g>
<!-- pod_alert&#45;&gt;dao_alert -->
<g id="edge10" class="edge">
<title>pod_alert&#45;&gt;dao_alert</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1479,-1016.47C1479,-975.61 1479,-926.98 1479,-884.83"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1481.63,-885.07 1479,-877.57 1476.38,-885.07 1481.63,-885.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1479,-933.6 1479,-956.4 1531.68,-956.4 1531.68,-933.6 1479,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1482" y="-939.4" font-family="Arial" font-size="14.00" fill="#eff5fd">写入告警</text>
</g>
</g>
</svg>
`;case`pano-api`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="510pt"
 viewBox="0.00 0.00 350.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- lane_edge -->
<g id="node1" class="node">
<title>lane_edge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
<!-- lane_edge_1 -->
<g id="node2" class="node">
<title>lane_edge_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
<!-- lane_edge&#45;&gt;lane_edge_1 -->
</g>
</svg>
`;case`srcdir001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1391pt" height="1178pt"
 viewBox="0.00 0.00 1391.00 1178.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- src_wechatcallback -->
<g id="node1" class="node">
<title>src_wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1048.05,-1148.4 718,-1148.4 718,-968.4 1048.05,-968.4 1048.05,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="772.44" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="776.74" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="783" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node2" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1048.05,-825.6 718,-825.6 718,-645.6 1048.05,-645.6 1048.05,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="797.44" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="758.83" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="814.26" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_answerloop -->
<g id="node3" class="node">
<title>src_answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="818.66,-502.8 429.39,-502.8 429.39,-322.8 818.66,-322.8 818.66,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="530.11" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="469.39" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="553.18" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- src_handoffservice -->
<g id="node4" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1355.4,-502.8 928.65,-502.8 928.65,-322.8 1355.4,-322.8 1355.4,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1056.44" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="968.65" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- src_replypolicy -->
<g id="node5" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-180 0,-180 0,0 330.05,0 330.05,-180"/>
<text xml:space="preserve" text-anchor="start" x="87.78" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="43.34" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="96.26" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node6" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="812.32,-180 439.73,-180 439.73,0 812.32,0 812.32,-180"/>
<text xml:space="preserve" text-anchor="start" x="503.22" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="479.73" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="569.76" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- src_store -->
<g id="node7" class="node">
<title>src_store</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1360.82,-180 923.23,-180 923.23,0 1360.82,0 1360.82,-180"/>
<text xml:space="preserve" text-anchor="start" x="1064.78" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="963.23" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- src_wechatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge1" class="edge">
<title>src_wechatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M883.02,-968.47C883.02,-927.27 883.02,-878.16 883.02,-835.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="885.65,-835.96 883.02,-828.46 880.4,-835.96 885.65,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="883.02,-885.6 883.02,-908.4 970.71,-908.4 970.71,-885.6 883.02,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="886.02" y="-891.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">分发归一化消息</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_answerloop -->
<g id="edge2" class="edge">
<title>src_answerorchestrator&#45;&gt;src_answerloop</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M811.22,-645.67C777.33,-603.68 736.8,-553.49 702.14,-510.56"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="704.4,-509.17 697.64,-504.98 700.31,-512.47 704.4,-509.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="761.29,-562.8 761.29,-585.6 813.97,-585.6 813.97,-562.8 761.29,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="764.29" y="-568.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_handoffservice -->
<g id="edge3" class="edge">
<title>src_answerorchestrator&#45;&gt;src_handoffservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M954.83,-645.67C988.72,-603.68 1029.24,-553.49 1063.91,-510.56"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1065.74,-512.47 1068.41,-504.98 1061.65,-509.17 1065.74,-512.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1020.29,-562.8 1020.29,-585.6 1119.64,-585.6 1119.64,-562.8 1020.29,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1023.29" y="-568.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- src_answerloop&#45;&gt;src_replypolicy -->
<g id="edge4" class="edge">
<title>src_answerloop&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M496.78,-322.87C435.71,-280.19 362.51,-229.02 300.41,-185.63"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="302.25,-183.71 294.6,-181.56 299.25,-188.01 302.25,-183.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="408.29,-240 408.29,-262.8 472.63,-262.8 472.63,-240 408.29,-240"/>
<text xml:space="preserve" text-anchor="start" x="411.29" y="-245.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- src_answerloop&#45;&gt;src_ragflowknowledge -->
<g id="edge5" class="edge">
<title>src_answerloop&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M624.58,-322.87C624.84,-281.67 625.14,-232.56 625.41,-190.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="628.03,-190.37 625.45,-182.86 622.78,-190.34 628.03,-190.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="625.08,-240 625.08,-262.8 701.1,-262.8 701.1,-240 625.08,-240"/>
<text xml:space="preserve" text-anchor="start" x="628.08" y="-245.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- src_handoffservice&#45;&gt;src_store -->
<g id="edge6" class="edge">
<title>src_handoffservice&#45;&gt;src_store</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1142.02,-322.87C1142.02,-281.67 1142.02,-232.56 1142.02,-190.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1144.65,-190.36 1142.02,-182.86 1139.4,-190.36 1144.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1142.02,-240 1142.02,-262.8 1206.37,-262.8 1206.37,-240 1142.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="1145.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
</g>
</svg>
`;case`srcdir001NF`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1230pt" height="1178pt"
 viewBox="0.00 0.00 1230.00 1178.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- src_integrationroutes -->
<g id="node1" class="node">
<title>src_integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="735.4,-1148.4 405.35,-1148.4 405.35,-968.4 735.4,-968.4 735.4,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="476.46" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="461.16" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="495.36" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- src_knowledgealert -->
<g id="node2" class="node">
<title>src_knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="390.08,-825.6 36.67,-825.6 36.67,-645.6 390.08,-645.6 390.08,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="136.13" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="76.67" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="132.11" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- src_ragflowprobe -->
<g id="node3" class="node">
<title>src_ragflowprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="880.83,-825.6 499.92,-825.6 499.92,-645.6 880.83,-645.6 880.83,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="550.9" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="539.92" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="570.77" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- src_evaluationgate -->
<g id="node4" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.4,-502.8 48.35,-502.8 48.35,-322.8 378.4,-322.8 378.4,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="136.13" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="104.58" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="100.85" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- src_storealert -->
<g id="node5" class="node">
<title>src_storealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="426.75,-180 0,-180 0,0 426.75,0 426.75,-180"/>
<text xml:space="preserve" text-anchor="start" x="119.46" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- src_operatorui -->
<g id="node6" class="node">
<title>src_operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1199.5,-1148.4 845.25,-1148.4 845.25,-968.4 1199.5,-968.4 1199.5,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="920.12" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="885.25" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_knowledgealert -->
<g id="edge1" class="edge">
<title>src_integrationroutes&#45;&gt;src_knowledgealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M471.4,-968.47C424.3,-926.13 367.9,-875.46 319.86,-832.29"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="321.81,-830.51 314.48,-827.45 318.3,-834.42 321.81,-830.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="402.58,-885.6 402.58,-908.4 478.59,-908.4 478.59,-885.6 402.58,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="405.58" y="-891.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_ragflowprobe -->
<g id="edge2" class="edge">
<title>src_integrationroutes&#45;&gt;src_ragflowprobe</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M603.64,-968.47C619.12,-927.09 637.58,-877.75 653.48,-835.23"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="655.92,-836.21 656.09,-828.26 651,-834.37 655.92,-836.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="633.97,-885.6 633.97,-908.4 721.66,-908.4 721.66,-885.6 633.97,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="636.97" y="-891.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">探测数据集状态</text>
</g>
<!-- src_knowledgealert&#45;&gt;src_evaluationgate -->
<g id="edge3" class="edge">
<title>src_knowledgealert&#45;&gt;src_evaluationgate</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M213.38,-645.67C213.38,-604.47 213.38,-555.36 213.38,-512.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="216,-513.16 213.38,-505.66 210.75,-513.16 216,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="213.38,-562.8 213.38,-585.6 289.39,-585.6 289.39,-562.8 213.38,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="216.38" y="-568.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- src_evaluationgate&#45;&gt;src_storealert -->
<g id="edge4" class="edge">
<title>src_evaluationgate&#45;&gt;src_storealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M213.38,-322.87C213.38,-281.67 213.38,-232.56 213.38,-190.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="216,-190.36 213.38,-182.86 210.75,-190.36 216,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="213.38,-240 213.38,-262.8 289.39,-262.8 289.39,-240 213.38,-240"/>
<text xml:space="preserve" text-anchor="start" x="216.38" y="-245.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
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
`;case`erm001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`erm001NF`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`stateMain`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="1178pt"
 viewBox="0.00 0.00 350.00 1178.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- st_received -->
<g id="node1" class="node">
<title>st_received</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1148.4 0,-1148.4 0,-968.4 320.04,-968.4 320.04,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="135.02" y="-1050.4" font-family="Arial" font-size="20.00" fill="#eff6ff">已接收</text>
</g>
<!-- st_retrieving -->
<g id="node2" class="node">
<title>st_retrieving</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-825.6 0,-825.6 0,-645.6 320.04,-645.6 320.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="135.02" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">检索中</text>
</g>
<!-- st_answering -->
<g id="node3" class="node">
<title>st_answering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="135.02" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">应答中</text>
</g>
<!-- st_answered -->
<g id="node4" class="node">
<title>st_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="135.02" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">已答复</text>
</g>
<!-- st_received&#45;&gt;st_retrieving -->
<g id="edge1" class="edge">
<title>st_received&#45;&gt;st_retrieving</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-968.47C160.02,-927.27 160.02,-878.16 160.02,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="162.65,-835.96 160.02,-828.46 157.4,-835.96 162.65,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-885.6 160.02,-908.4 212.7,-908.4 212.7,-885.6 160.02,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="163.02" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起检索</text>
</g>
<!-- st_retrieving&#45;&gt;st_answering -->
<g id="edge2" class="edge">
<title>st_retrieving&#45;&gt;st_answering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-645.67C160.02,-604.47 160.02,-555.36 160.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="162.65,-513.16 160.02,-505.66 157.4,-513.16 162.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-562.8 160.02,-585.6 224.36,-585.6 224.36,-562.8 160.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="163.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度达标</text>
</g>
<!-- st_answering&#45;&gt;st_answered -->
<g id="edge3" class="edge">
<title>st_answering&#45;&gt;st_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-322.87C160.02,-281.67 160.02,-232.56 160.02,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="162.65,-190.36 160.02,-182.86 157.4,-190.36 162.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-240 160.02,-262.8 224.36,-262.8 224.36,-240 160.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="163.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">答复已下发</text>
</g>
</g>
</svg>
`;case`stateBranchHuman`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="533pt"
 viewBox="0.00 0.00 350.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- st_retrieving -->
<g id="node1" class="node">
<title>st_retrieving</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="135.02" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">检索中</text>
</g>
<!-- st_waitinghuman -->
<g id="node2" class="node">
<title>st_waitinghuman</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="135.02" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">待人工</text>
</g>
<!-- st_retrieving&#45;&gt;st_waitinghuman -->
<g id="edge1" class="edge">
<title>st_retrieving&#45;&gt;st_waitinghuman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-322.87C160.02,-281.67 160.02,-232.56 160.02,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="162.65,-190.36 160.02,-182.86 157.4,-190.36 162.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-240 160.02,-262.8 224.36,-262.8 224.36,-240 160.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="163.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足</text>
</g>
</g>
</svg>
`;case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="770pt" height="510pt"
 viewBox="0.00 0.00 770.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- feat_answer_f -->
<g id="node1" class="node">
<title>feat_answer_f</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="740.25,-480 0,-480 0,-300 740.25,-300 740.25,-480"/>
<text xml:space="preserve" text-anchor="start" x="253.42" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature&#45;001&#45;F 知识应答能力</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">按业务能力切分。交付边界：客户在企业微信提问美妆问题，能得到基于知识库的专业答复。所属愿景：让美妆咨询有据可依。</text>
</g>
<!-- feat_degrade_nf -->
<g id="node2" class="node">
<title>feat_degrade_nf</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="665.23,-180 75.01,-180 75.01,0 665.23,0 665.23,-180"/>
<text xml:space="preserve" text-anchor="start" x="246.2" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Feature&#45;001&#45;NF 极端场景保障</text>
<text xml:space="preserve" text-anchor="start" x="183.84" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">按极端场景切分。交付边界：知识库为空、RAGFlow 超时、LLM</text>
<text xml:space="preserve" text-anchor="start" x="95.07" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">不可用三类场景下，运营人员与客户都能及时察觉并知道下一步。所属愿景：让美妆咨询有据可依。</text>
</g>
<!-- feat_answer_f&#45;&gt;feat_degrade_nf -->
</g>
</svg>
`;case`chain001F-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="808pt" height="510pt"
 viewBox="0.00 0.00 808.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="777.76,-480 0,-480 0,-300 777.76,-300 777.76,-480"/>
<text xml:space="preserve" text-anchor="start" x="268.84" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="771.5,-180 6.25,-180 6.25,0 771.5,0 771.5,-180"/>
<text xml:space="preserve" text-anchor="start" x="260.51" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="26.31" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- us_ask&#45;&gt;us_lowconfidence -->
</g>
</svg>
`;case`chain001NF-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="883pt" height="810pt"
 viewBox="0.00 0.00 883.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="852.77,-780 0,-780 0,-600 852.77,-600 852.77,-780"/>
<text xml:space="preserve" text-anchor="start" x="281.35" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="407.63" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node2" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="705.66,-480 147.11,-480 147.11,-300 705.66,-300 705.66,-480"/>
<text xml:space="preserve" text-anchor="start" x="252.45" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="167.17" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="332.61" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node3" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="784.01,-180 68.76,-180 68.76,0 784.01,0 784.01,-180"/>
<text xml:space="preserve" text-anchor="start" x="259.11" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="88.82" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- us_kbempty&#45;&gt;us_ragtimeout -->
<!-- us_ragtimeout&#45;&gt;us_llmdown -->
</g>
</svg>
`;case`chain001F-f`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1684pt" height="533pt"
 viewBox="0.00 0.00 1684.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="777.76,-502.8 0,-502.8 0,-322.8 777.76,-322.8 777.76,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="268.84" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- f_answer -->
<g id="node2" class="node">
<title>f_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="548.9,-180 228.86,-180 228.86,0 548.9,0 548.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="309.97" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;001 应答编排能力</text>
<text xml:space="preserve" text-anchor="start" x="251.35" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</text>
</g>
<!-- us_lowconfidence -->
<g id="node3" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1653.5,-502.8 888.25,-502.8 888.25,-322.8 1653.5,-322.8 1653.5,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1142.51" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="908.31" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- f_retrieval -->
<g id="node4" class="node">
<title>f_retrieval</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1430.9,-180 1110.86,-180 1110.86,0 1430.9,0 1430.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="1191.97" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;002 知识检索能力</text>
<text xml:space="preserve" text-anchor="start" x="1140.85" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</text>
</g>
<!-- us_ask&#45;&gt;f_answer -->
<g id="edge1" class="edge">
<title>us_ask&#45;&gt;f_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M388.88,-322.87C388.88,-281.67 388.88,-232.56 388.88,-190.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="391.5,-190.36 388.88,-182.86 386.25,-190.36 391.5,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="388.88,-240 388.88,-262.8 418.22,-262.8 418.22,-240 388.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="391.88" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_lowconfidence&#45;&gt;f_retrieval -->
<g id="edge2" class="edge">
<title>us_lowconfidence&#45;&gt;f_retrieval</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1270.88,-322.87C1270.88,-281.67 1270.88,-232.56 1270.88,-190.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1273.5,-190.36 1270.88,-182.86 1268.25,-190.36 1273.5,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1270.88,-240 1270.88,-262.8 1300.22,-262.8 1300.22,-240 1270.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="1273.88" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
</g>
</svg>
`;case`chain001NF-nf`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2377pt" height="533pt"
 viewBox="0.00 0.00 2377.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="852.77,-502.8 0,-502.8 0,-322.8 852.77,-322.8 852.77,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="281.35" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="407.63" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- nf_kbempty -->
<g id="node2" class="node">
<title>nf_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="719.21,-180 133.56,-180 133.56,0 719.21,0 719.21,-180"/>
<text xml:space="preserve" text-anchor="start" x="298.58" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;101 知识库为零条时状态可见</text>
<text xml:space="preserve" text-anchor="start" x="157.58" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</text>
</g>
<!-- us_ragtimeout -->
<g id="node3" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1521.66,-502.8 963.11,-502.8 963.11,-322.8 1521.66,-322.8 1521.66,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1068.45" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="983.17" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="1148.61" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- nf_ragtimeout -->
<g id="node4" class="node">
<title>nf_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1425.88,-180 1058.89,-180 1058.89,0 1425.88,0 1425.88,-180"/>
<text xml:space="preserve" text-anchor="start" x="1082.9" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;102 RAGFlow 超 8 秒时客户可感知</text>
<text xml:space="preserve" text-anchor="start" x="1120.69" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8</text>
<text xml:space="preserve" text-anchor="start" x="1086.1" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">秒下发带说明的提示，客服不必反复刷新。角色：客户。</text>
</g>
<!-- us_llmdown -->
<g id="node5" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.01,-502.8 1631.76,-502.8 1631.76,-322.8 2347.01,-322.8 2347.01,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1822.11" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="1651.82" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- nf_llmdown -->
<g id="node6" class="node">
<title>nf_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2263.45,-180 1715.32,-180 1715.32,0 2263.45,0 2263.45,-180"/>
<text xml:space="preserve" text-anchor="start" x="1856.02" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;103 LLM 不可用时自动转人工</text>
<text xml:space="preserve" text-anchor="start" x="1739.34" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</text>
</g>
<!-- us_kbempty&#45;&gt;nf_kbempty -->
<g id="edge1" class="edge">
<title>us_kbempty&#45;&gt;nf_kbempty</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M426.39,-322.87C426.39,-281.67 426.39,-232.56 426.39,-190.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="429.01,-190.36 426.39,-182.86 423.76,-190.36 429.01,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="426.39,-240 426.39,-262.8 455.72,-262.8 455.72,-240 426.39,-240"/>
<text xml:space="preserve" text-anchor="start" x="429.39" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_ragtimeout&#45;&gt;nf_ragtimeout -->
<g id="edge2" class="edge">
<title>us_ragtimeout&#45;&gt;nf_ragtimeout</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1242.39,-322.87C1242.39,-281.67 1242.39,-232.56 1242.39,-190.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1245.01,-190.36 1242.39,-182.86 1239.76,-190.36 1245.01,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1242.39,-240 1242.39,-262.8 1271.72,-262.8 1271.72,-240 1242.39,-240"/>
<text xml:space="preserve" text-anchor="start" x="1245.39" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_llmdown&#45;&gt;nf_llmdown -->
<g id="edge3" class="edge">
<title>us_llmdown&#45;&gt;nf_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1989.39,-322.87C1989.39,-281.67 1989.39,-232.56 1989.39,-190.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1992.01,-190.36 1989.39,-182.86 1986.76,-190.36 1992.01,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1989.39,-240 1989.39,-262.8 2018.72,-262.8 2018.72,-240 1989.39,-240"/>
<text xml:space="preserve" text-anchor="start" x="1992.39" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
</g>
</svg>
`;case`chain001F-i-goal`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="358pt" height="210pt"
 viewBox="0.00 0.00 358.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- i_goal -->
<g id="node1" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="327.67,-180 0,-180 0,0 327.67,0 327.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="104.92" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</text>
</g>
</g>
</svg>
`;case`chain001F-i-step`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="445pt" height="210pt"
 viewBox="0.00 0.00 445.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- i_step -->
<g id="node1" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="415.19,-180 0,-180 0,0 415.19,0 415.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="148.68" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</text>
</g>
</g>
</svg>
`;case`chain001NF-i-goal`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="445pt" height="210pt"
 viewBox="0.00 0.00 445.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- i_goal -->
<g id="node1" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="415.19,-180 0,-180 0,0 415.19,0 415.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="148.68" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;101 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
</g>
</svg>
`;case`chain001NF-i-step`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="519pt" height="210pt"
 viewBox="0.00 0.00 519.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- i_step -->
<g id="node1" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="489.37,-180 0,-180 0,0 489.37,0 489.37,-180"/>
<text xml:space="preserve" text-anchor="start" x="169.11" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →</text>
<text xml:space="preserve" text-anchor="start" x="182.17" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">分发对应提示或工单。</text>
</g>
</g>
</svg>
`;case`chain001F-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="891pt" height="510pt"
 viewBox="0.00 0.00 891.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- ui_interaction -->
<g id="node1" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="629.4,-480 231.3,-480 231.3,-300 629.4,-300 629.4,-480"/>
<text xml:space="preserve" text-anchor="start" x="330.87" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="255.31" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- ui_information -->
<g id="node2" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="860.69,-180 0,-180 0,0 860.69,0 860.69,-180"/>
<text xml:space="preserve" text-anchor="start" x="347.54" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- ui_interaction&#45;&gt;ui_information -->
</g>
</svg>
`;case`chain001NF-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="666pt" height="510pt"
 viewBox="0.00 0.00 666.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- ui_status -->
<g id="node1" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="529.38,-480 106.27,-480 106.27,-300 529.38,-300 529.38,-480"/>
<text xml:space="preserve" text-anchor="start" x="226.69" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="130.29" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
<!-- ui_notice -->
<g id="node2" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="635.65,-180 0,-180 0,0 635.65,0 635.65,-180"/>
<text xml:space="preserve" text-anchor="start" x="235.02" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
<!-- ui_status&#45;&gt;ui_notice -->
</g>
</svg>
`;case`seq001F-answer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2201pt" height="925pt"
 viewBox="0.00 0.00 2201.00 925.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 910.05)">
<!-- actor_customer -->
<g id="node1" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="373.4,-315 53.36,-315 53.36,-135 373.4,-135 373.4,-315"/>
<text xml:space="preserve" text-anchor="start" x="196.71" y="-217" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- api_chatcallback -->
<g id="node2" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1086.03,-315 655.77,-315 655.77,-135 1086.03,-135 1086.03,-315"/>
<text xml:space="preserve" text-anchor="start" x="675.83" y="-237" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="754.19" y="-214" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="802.14" y="-196" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- step_answerlane -->
<g id="node3" class="node">
<title>step_answerlane</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1611.75,-512 1291.71,-512 1291.71,-332 1611.75,-332 1611.75,-512"/>
<text xml:space="preserve" text-anchor="start" x="1342.8" y="-425" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤（应答泳道）</text>
<text xml:space="preserve" text-anchor="start" x="1332.95" y="-402" font-family="Arial" font-size="15.00" fill="#bfdbfe">编排、检索、校验、生成答复的领域环节。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2165.8,-512 1845.76,-512 1845.76,-332 2165.8,-332 2165.8,-512"/>
<text xml:space="preserve" text-anchor="start" x="1963" y="-425" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1949.52" y="-402" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node5" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2170.81,-180 1840.76,-180 1840.76,0 2170.81,0 2170.81,-180"/>
<text xml:space="preserve" text-anchor="start" x="1920.2" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1881.59" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="1937.02" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_replypolicy -->
<g id="node6" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2170.81,-832 1840.76,-832 1840.76,-652 2170.81,-652 2170.81,-832"/>
<text xml:space="preserve" text-anchor="start" x="1928.54" y="-754" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="1884.1" y="-731" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1937.02" y="-713" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node7" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="399.67,-605 27.08,-605 27.08,-425 399.67,-425 399.67,-605"/>
<text xml:space="preserve" text-anchor="start" x="90.57" y="-527" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="67.08" y="-504" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="157.12" y="-486" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- src_handoffservice -->
<g id="node8" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="426.76,-895 0,-895 0,-715 426.76,-715 426.76,-895"/>
<text xml:space="preserve" text-anchor="start" x="127.8" y="-808" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-785" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- actor_customer&#45;&gt;api_chatcallback -->
<g id="edge1" class="edge">
<title>actor_customer&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M373.06,-225C454.88,-225 556.06,-225 645.71,-225"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="645.49,-227.63 652.99,-225 645.49,-222.38 645.49,-227.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.76,-228 489.76,-260.8 513.76,-260.8 513.76,-228 489.76,-228"/>
<text xml:space="preserve" text-anchor="start" x="497.86" y="-241.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="516.76,-228 516.76,-260.8 592.77,-260.8 592.77,-228 516.76,-228"/>
<text xml:space="preserve" text-anchor="start" x="519.76" y="-238.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">企业微信提问</text>
</g>
<!-- api_chatcallback&#45;&gt;step_answerlane -->
<g id="edge8" class="edge">
<title>api_chatcallback&#45;&gt;step_answerlane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1095.43,-301.08C1161,-323.39 1231.35,-347.34 1292,-367.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1096.6,-298.7 1088.65,-298.77 1094.91,-303.67 1096.6,-298.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.03,-349.94 1149.03,-382.74 1173.03,-382.74 1173.03,-349.94 1149.03,-349.94"/>
<text xml:space="preserve" text-anchor="start" x="1157.14" y="-363.14" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1176.03,-349.94 1176.03,-382.74 1228.71,-382.74 1228.71,-349.94 1176.03,-349.94"/>
<text xml:space="preserve" text-anchor="start" x="1179.03" y="-360.74" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回答复</text>
</g>
<!-- api_chatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge2" class="edge">
<title>api_chatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1085.99,-199.49C1301.73,-173.78 1630.61,-134.59 1830.82,-110.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1831.01,-113.35 1838.14,-109.86 1830.39,-108.14 1831.01,-113.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1394.38,-176.12 1394.38,-208.92 1418.38,-208.92 1418.38,-176.12 1394.38,-176.12"/>
<text xml:space="preserve" text-anchor="start" x="1402.49" y="-189.32" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1421.38,-176.12 1421.38,-208.92 1509.07,-208.92 1509.07,-176.12 1421.38,-176.12"/>
<text xml:space="preserve" text-anchor="start" x="1424.38" y="-186.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">分发归一化消息</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1611.66,-422C1681.8,-422 1764.31,-422 1835.58,-422"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1835.49,-424.63 1842.99,-422 1835.49,-419.38 1835.49,-424.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1674.75,-425 1674.75,-457.8 1698.75,-457.8 1698.75,-425 1674.75,-425"/>
<text xml:space="preserve" text-anchor="start" x="1682.85" y="-438.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1701.75,-425 1701.75,-457.8 1777.76,-457.8 1777.76,-425 1701.75,-425"/>
<text xml:space="preserve" text-anchor="start" x="1704.75" y="-435.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索候选知识</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge5" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1621.4,-366.02C1638.26,-362.03 1655.25,-358.63 1671.75,-356.2 1719.68,-349.15 1732.8,-349.3 1780.76,-356.2 1802.13,-359.27 1824.3,-363.91 1846.01,-369.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1621.1,-363.39 1614.43,-367.72 1622.34,-368.49 1621.1,-363.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1674.75,-359.2 1674.75,-392 1698.75,-392 1698.75,-359.2 1674.75,-359.2"/>
<text xml:space="preserve" text-anchor="start" x="1682.85" y="-372.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1701.75,-359.2 1701.75,-392 1777.76,-392 1777.76,-359.2 1701.75,-359.2"/>
<text xml:space="preserve" text-anchor="start" x="1704.75" y="-370" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选知识</text>
</g>
<!-- step_answerlane&#45;&gt;src_answerorchestrator -->
<g id="edge3" class="edge">
<title>step_answerlane&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1604.44,-326.47C1626.95,-312.52 1649.91,-298.42 1671.75,-285.2 1729.37,-250.33 1793.08,-212.75 1849.21,-179.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1603.07,-324.23 1598.08,-330.41 1605.84,-328.69 1603.07,-324.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1686.41,-288.2 1686.41,-321 1710.41,-321 1710.41,-288.2 1686.41,-288.2"/>
<text xml:space="preserve" text-anchor="start" x="1694.52" y="-301.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1713.41,-288.2 1713.41,-321 1766.09,-321 1766.09,-288.2 1713.41,-288.2"/>
<text xml:space="preserve" text-anchor="start" x="1716.41" y="-299" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求应答</text>
</g>
<!-- step_answerlane&#45;&gt;src_replypolicy -->
<g id="edge6" class="edge">
<title>step_answerlane&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1515.03,-511.93C1554.43,-562.29 1609.55,-622.18 1671.75,-659 1719.78,-687.43 1777.25,-706.17 1830.82,-718.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1829.92,-720.99 1837.82,-720.07 1831.07,-715.87 1829.92,-720.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1680.58,-706.37 1680.58,-739.17 1704.58,-739.17 1704.58,-706.37 1680.58,-706.37"/>
<text xml:space="preserve" text-anchor="start" x="1688.69" y="-719.57" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1707.58,-706.37 1707.58,-739.17 1771.92,-739.17 1771.92,-706.37 1707.58,-706.37"/>
<text xml:space="preserve" text-anchor="start" x="1710.58" y="-717.17" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验置信度</text>
</g>
<!-- step_answerlane&#45;&gt;src_replypolicy -->
<g id="edge7" class="edge">
<title>step_answerlane&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1620.71,-505.35C1672.65,-532.27 1729.63,-562.99 1780.76,-593.2 1811.61,-611.43 1844.1,-632.1 1874.47,-652.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1621.97,-503.05 1614.1,-501.94 1619.56,-507.71 1621.97,-503.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1686.41,-596.2 1686.41,-629 1710.41,-629 1710.41,-596.2 1686.41,-596.2"/>
<text xml:space="preserve" text-anchor="start" x="1694.52" y="-609.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1713.41,-596.2 1713.41,-629 1766.09,-629 1766.09,-596.2 1713.41,-596.2"/>
<text xml:space="preserve" text-anchor="start" x="1716.41" y="-607" font-family="Arial" font-size="14.00" fill="#c9c9c9">达标放行</text>
</g>
</g>
</svg>
`;case`seq001F-branch-low-confidence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2732pt" height="210pt"
 viewBox="0.00 0.00 2732.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- src_replypolicy -->
<g id="node1" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-180 0,-180 0,0 330.05,0 330.05,-180"/>
<text xml:space="preserve" text-anchor="start" x="87.78" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="43.34" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="96.26" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node2" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="877.44,-180 547.39,-180 547.39,0 877.44,0 877.44,-180"/>
<text xml:space="preserve" text-anchor="start" x="626.84" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="588.22" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="643.65" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_handoffservice -->
<g id="node3" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1498.21,-180 1071.45,-180 1071.45,0 1498.21,0 1498.21,-180"/>
<text xml:space="preserve" text-anchor="start" x="1199.25" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="1111.45" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- src_store -->
<g id="node4" class="node">
<title>src_store</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2153.13,-180 1715.55,-180 1715.55,0 2153.13,0 2153.13,-180"/>
<text xml:space="preserve" text-anchor="start" x="1857.1" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1755.55" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- actor_customer -->
<g id="node5" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2702.19,-180 2382.15,-180 2382.15,0 2702.19,0 2702.19,-180"/>
<text xml:space="preserve" text-anchor="start" x="2525.5" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- src_replypolicy&#45;&gt;src_answerorchestrator -->
<g id="edge1" class="edge">
<title>src_replypolicy&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M330.03,-90C395.53,-90 471.02,-90 537.48,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="537.11,-92.63 544.61,-90 537.11,-87.38 537.11,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-93 393.05,-125.8 417.05,-125.8 417.05,-93 393.05,-93"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-93 420.05,-125.8 484.39,-125.8 484.39,-93 420.05,-93"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_handoffservice -->
<g id="edge2" class="edge">
<title>src_answerorchestrator&#45;&gt;src_handoffservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M877.26,-90C934.63,-90 1000.06,-90 1061.4,-90"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1061.08,-92.63 1068.58,-90 1061.08,-87.38 1061.08,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="940.44,-93 940.44,-125.8 964.44,-125.8 964.44,-93 940.44,-93"/>
<text xml:space="preserve" text-anchor="start" x="948.55" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="967.44,-93 967.44,-125.8 1008.45,-125.8 1008.45,-93 967.44,-93"/>
<text xml:space="preserve" text-anchor="start" x="970.44" y="-103.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">转人工</text>
</g>
<!-- src_handoffservice&#45;&gt;src_store -->
<g id="edge3" class="edge">
<title>src_handoffservice&#45;&gt;src_store</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1497.85,-90C1564.24,-90 1637.78,-90 1705.23,-90"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1705.04,-92.63 1712.54,-90 1705.04,-87.38 1705.04,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1561.21,-93 1561.21,-125.8 1585.21,-125.8 1585.21,-93 1561.21,-93"/>
<text xml:space="preserve" text-anchor="start" x="1569.31" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1588.21,-93 1588.21,-125.8 1652.55,-125.8 1652.55,-93 1588.21,-93"/>
<text xml:space="preserve" text-anchor="start" x="1591.21" y="-103.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- src_store&#45;&gt;actor_customer -->
<g id="edge4" class="edge">
<title>src_store&#45;&gt;actor_customer</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2152.77,-90C2224.92,-90 2304.11,-90 2372.06,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2371.91,-92.63 2379.41,-90 2371.91,-87.38 2371.91,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2216.13,-93 2216.13,-125.8 2240.13,-125.8 2240.13,-93 2216.13,-93"/>
<text xml:space="preserve" text-anchor="start" x="2224.24" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2243.13,-93 2243.13,-125.8 2319.15,-125.8 2319.15,-93 2243.13,-93"/>
<text xml:space="preserve" text-anchor="start" x="2246.13" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">告知等待人工</text>
</g>
</g>
</svg>
`;case`dfd001F-answer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="4355pt" height="210pt"
 viewBox="0.00 0.00 4355.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- ui_interaction -->
<g id="node1" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="398.1,-180 0,-180 0,0 398.1,0 398.1,-180"/>
<text xml:space="preserve" text-anchor="start" x="99.58" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- in_chatmessage -->
<g id="node2" class="node">
<title>in_chatmessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1022.32,-180 603.78,-180 603.78,0 1022.32,0 1022.32,-180"/>
<text xml:space="preserve" text-anchor="start" x="730.24" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;001 客户提问入参</text>
<text xml:space="preserve" text-anchor="start" x="623.83" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</text>
</g>
<!-- biz_query -->
<g id="node3" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1612.38,-180 1263,-180 1263,0 1612.38,0 1612.38,-180"/>
<text xml:space="preserve" text-anchor="start" x="1349.33" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="1283.05" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="1348.09" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- pod_ticket -->
<g id="node4" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2179.96,-180 1853.07,-180 1853.07,0 2179.96,0 2179.96,-180"/>
<text xml:space="preserve" text-anchor="start" x="1913.7" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="1873.12" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="1949.41" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- dao_store -->
<g id="node5" class="node">
<title>dao_store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M2709.98,-163.64C2709.98,-172.67 2637.29,-180 2547.81,-180 2458.32,-180 2385.63,-172.67 2385.63,-163.64 2385.63,-163.64 2385.63,-16.36 2385.63,-16.36 2385.63,-7.33 2458.32,0 2547.81,0 2637.29,0 2709.98,-7.33 2709.98,-16.36 2709.98,-16.36 2709.98,-163.64 2709.98,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M2709.98,-163.64C2709.98,-154.61 2637.29,-147.27 2547.81,-147.27 2458.32,-147.27 2385.63,-154.61 2385.63,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="2453.34" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;001 本地存储访问</text>
<text xml:space="preserve" text-anchor="start" x="2405.69" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</text>
</g>
<!-- out_answer -->
<g id="node6" class="node">
<title>out_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3259.04,-180 2939,-180 2939,0 3259.04,0 3259.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="3005.11" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;001 答复出参视图</text>
<text xml:space="preserve" text-anchor="start" x="2992.74" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="3011.5" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向企业微信会话的答复载荷。</text>
</g>
<!-- ui_information -->
<g id="node7" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4325.4,-180 3464.71,-180 3464.71,0 4325.4,0 4325.4,-180"/>
<text xml:space="preserve" text-anchor="start" x="3812.26" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="3488.73" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- ui_interaction&#45;&gt;in_chatmessage -->
<g id="edge1" class="edge">
<title>ui_interaction&#45;&gt;in_chatmessage</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M397.9,-90C460.39,-90 529.78,-90 593.62,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="593.29,-92.63 600.79,-90 593.29,-87.38 593.29,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="461.1,-93 461.1,-125.8 485.1,-125.8 485.1,-93 461.1,-93"/>
<text xml:space="preserve" text-anchor="start" x="469.21" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.1,-93 488.1,-125.8 540.78,-125.8 540.78,-93 488.1,-93"/>
<text xml:space="preserve" text-anchor="start" x="491.1" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">提交提问</text>
</g>
<!-- in_chatmessage&#45;&gt;biz_query -->
<g id="edge2" class="edge">
<title>in_chatmessage&#45;&gt;biz_query</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M1022.24,-90C1096.95,-90 1180.58,-90 1253.05,-90"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1252.68,-92.63 1260.18,-90 1252.68,-87.38 1252.68,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1085.32,-93 1085.32,-125.8 1109.32,-125.8 1109.32,-93 1085.32,-93"/>
<text xml:space="preserve" text-anchor="start" x="1093.42" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#cbd5e1">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1112.32,-93 1112.32,-125.8 1200,-125.8 1200,-93 1112.32,-93"/>
<text xml:space="preserve" text-anchor="start" x="1115.32" y="-103.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为检索查询</text>
</g>
<!-- biz_query&#45;&gt;pod_ticket -->
<g id="edge3" class="edge">
<title>biz_query&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1612.15,-90C1685.19,-90 1769.99,-90 1842.94,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1842.62,-92.63 1850.12,-90 1842.62,-87.38 1842.62,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1675.38,-93 1675.38,-125.8 1699.38,-125.8 1699.38,-93 1675.38,-93"/>
<text xml:space="preserve" text-anchor="start" x="1683.49" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1702.38,-93 1702.38,-125.8 1790.07,-125.8 1790.07,-93 1702.38,-93"/>
<text xml:space="preserve" text-anchor="start" x="1705.38" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">低置信度落工单</text>
</g>
<!-- pod_ticket&#45;&gt;dao_store -->
<g id="edge4" class="edge">
<title>pod_ticket&#45;&gt;dao_store</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M2179.92,-90C2241.52,-90 2311.85,-90 2374.35,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="2374.18,-92.63 2381.68,-90 2374.18,-87.38 2374.18,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2242.96,-93 2242.96,-125.8 2266.96,-125.8 2266.96,-93 2242.96,-93"/>
<text xml:space="preserve" text-anchor="start" x="2251.06" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2269.96,-93 2269.96,-125.8 2322.63,-125.8 2322.63,-93 2269.96,-93"/>
<text xml:space="preserve" text-anchor="start" x="2272.96" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">写入工单</text>
</g>
<!-- dao_store&#45;&gt;out_answer -->
<g id="edge5" class="edge">
<title>dao_store&#45;&gt;out_answer</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M2710.62,-90C2779.38,-90 2859.56,-90 2929.08,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="2928.73,-92.63 2936.23,-90 2928.73,-87.38 2928.73,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2772.98,-93 2772.98,-125.8 2796.98,-125.8 2796.98,-93 2772.98,-93"/>
<text xml:space="preserve" text-anchor="start" x="2781.09" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2799.98,-93 2799.98,-125.8 2876,-125.8 2876,-93 2799.98,-93"/>
<text xml:space="preserve" text-anchor="start" x="2802.98" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">查询答复内容</text>
</g>
<!-- out_answer&#45;&gt;ui_information -->
<g id="edge6" class="edge">
<title>out_answer&#45;&gt;ui_information</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M3258.79,-90C3316.38,-90 3384.58,-90 3454.56,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="3454.37,-92.63 3461.87,-90 3454.37,-87.38 3454.37,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3322.04,-93 3322.04,-125.8 3346.04,-125.8 3346.04,-93 3322.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="3330.14" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3349.04,-93 3349.04,-125.8 3401.71,-125.8 3401.71,-93 3349.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="3352.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">渲染答复</text>
</g>
</g>
</svg>
`;case`seq001NF-degrade`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2947pt" height="509pt"
 viewBox="0.00 0.00 2947.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 494.05)">
<!-- actor_ops -->
<g id="node1" class="node">
<title>actor_ops</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-334 0,-334 0,-154 320.04,-154 320.04,-334"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-236" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- api_status -->
<g id="node2" class="node">
<title>api_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="943.77,-334 549.05,-334 549.05,-154 943.77,-154 943.77,-334"/>
<text xml:space="preserve" text-anchor="start" x="569.11" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="630.94" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="665.14" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
</g>
<!-- step_probelane -->
<g id="node3" class="node">
<title>step_probelane</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1469.48,-334 1149.44,-334 1149.44,-154 1469.48,-154 1469.48,-334"/>
<text xml:space="preserve" text-anchor="start" x="1183.87" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑（判定泳道）</text>
<text xml:space="preserve" text-anchor="start" x="1178.19" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识条目、响应耗时、模型可用性的判定环节。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2050.69,-479 1723.02,-479 1723.02,-299 2050.69,-299 2050.69,-479"/>
<text xml:space="preserve" text-anchor="start" x="1844.07" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1743.08" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务，超时或不可用即触发本链场景。</text>
</g>
<!-- src_evaluationgate -->
<g id="node5" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2051.88,-180 1721.83,-180 1721.83,0 2051.88,0 2051.88,-180"/>
<text xml:space="preserve" text-anchor="start" x="1809.61" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="1778.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="1774.33" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- ui_notice -->
<g id="node6" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2916.54,-180 2280.89,-180 2280.89,0 2916.54,0 2916.54,-180"/>
<text xml:space="preserve" text-anchor="start" x="2515.91" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="2304.91" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
<!-- actor_ops&#45;&gt;api_status -->
<g id="edge1" class="edge">
<title>actor_ops&#45;&gt;api_status</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.94,-244C387.48,-244 467.12,-244 539.12,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.7,-246.63 546.2,-244 538.7,-241.38 538.7,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-247 383.04,-279.8 407.04,-279.8 407.04,-247 383.04,-247"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-247 410.04,-279.8 486.05,-279.8 486.05,-247 410.04,-247"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">查询集成状态</text>
</g>
<!-- api_status&#45;&gt;step_probelane -->
<g id="edge2" class="edge">
<title>api_status&#45;&gt;step_probelane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M943.64,-244C1007.55,-244 1077.89,-244 1139.61,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.31,-246.63 1146.81,-244 1139.31,-241.38 1139.31,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1006.77,-247 1006.77,-279.8 1030.77,-279.8 1030.77,-247 1006.77,-247"/>
<text xml:space="preserve" text-anchor="start" x="1014.87" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1033.77,-247 1033.77,-279.8 1086.44,-279.8 1086.44,-247 1033.77,-247"/>
<text xml:space="preserve" text-anchor="start" x="1036.77" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1469.21,-284.01C1544.98,-303.1 1635.78,-325.98 1713.25,-345.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1712.27,-347.96 1720.18,-347.25 1713.55,-342.87 1712.27,-347.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1532.48,-332.49 1532.48,-365.29 1556.48,-365.29 1556.48,-332.49 1532.48,-332.49"/>
<text xml:space="preserve" text-anchor="start" x="1540.59" y="-345.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1559.48,-332.49 1559.48,-365.29 1658.83,-365.29 1658.83,-332.49 1559.48,-332.49"/>
<text xml:space="preserve" text-anchor="start" x="1562.48" y="-343.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测数据集可用性</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1479.32,-216.43C1538.23,-212.63 1604.03,-215.08 1661.83,-233.2 1705.57,-246.91 1748.24,-272.51 1784.41,-299.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1479.48,-213.79 1472.19,-216.93 1479.85,-219.02 1479.48,-213.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1544.15,-236.2 1544.15,-269 1568.15,-269 1568.15,-236.2 1544.15,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="1552.26" y="-249.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1571.15,-236.2 1571.15,-269 1647.16,-269 1647.16,-236.2 1571.15,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="1574.15" y="-247" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回探测结论</text>
</g>
<!-- step_probelane&#45;&gt;src_evaluationgate -->
<g id="edge5" class="edge">
<title>step_probelane&#45;&gt;src_evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1469.38,-169.89C1489.35,-162.17 1509.71,-155.03 1529.48,-149.2 1587.92,-131.98 1653.31,-119.31 1711.97,-110.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1712.07,-112.85 1719.09,-109.12 1711.28,-107.66 1712.07,-112.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1544.15,-152.2 1544.15,-185 1568.15,-185 1568.15,-152.2 1544.15,-152.2"/>
<text xml:space="preserve" text-anchor="start" x="1552.26" y="-165.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1571.15,-152.2 1571.15,-185 1647.16,-185 1647.16,-152.2 1571.15,-152.2"/>
<text xml:space="preserve" text-anchor="start" x="1574.15" y="-163" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交发布判定</text>
</g>
<!-- src_evaluationgate&#45;&gt;ui_notice -->
<g id="edge6" class="edge">
<title>src_evaluationgate&#45;&gt;ui_notice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2051.6,-90C2117.04,-90 2194.84,-90 2270.91,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2270.62,-92.63 2278.12,-90 2270.62,-87.38 2270.62,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2114.88,-93 2114.88,-125.8 2138.88,-125.8 2138.88,-93 2114.88,-93"/>
<text xml:space="preserve" text-anchor="start" x="2122.99" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2141.88,-93 2141.88,-125.8 2217.89,-125.8 2217.89,-93 2141.88,-93"/>
<text xml:space="preserve" text-anchor="start" x="2144.88" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">下发场景提示</text>
</g>
</g>
</svg>
`;case`dfd001NF-probe`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2747pt" height="500pt"
 viewBox="0.00 0.00 2747.00 500.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 485.05)">
<!-- actor_ops -->
<g id="node1" class="node">
<title>actor_ops</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-325 0,-325 0,-145 320.04,-145 320.04,-325"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-227" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- in_probequery -->
<g id="node2" class="node">
<title>in_probequery</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="869.09,-325 549.05,-325 549.05,-145 869.09,-145 869.09,-325"/>
<text xml:space="preserve" text-anchor="start" x="626.27" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;101 状态探测入参</text>
<text xml:space="preserve" text-anchor="start" x="599.86" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="627.81" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">控制台发起的集成状态查询。</text>
</g>
<!-- biz_proberesult -->
<g id="node3" class="node">
<title>biz_proberesult</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1450.8,-325 1109.78,-325 1109.78,-145 1450.8,-145 1450.8,-325"/>
<text xml:space="preserve" text-anchor="start" x="1191.93" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;101 探测结果对象</text>
<text xml:space="preserve" text-anchor="start" x="1129.83" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="1159.43" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载条目数、响应耗时与调用结果判定。</text>
</g>
<!-- out_status -->
<g id="node4" class="node">
<title>out_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2014.95,-470 1694.91,-470 1694.91,-290 2014.95,-290 2014.95,-470"/>
<text xml:space="preserve" text-anchor="start" x="1761.01" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;101 状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="1745.71" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="1786.16" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的状态载荷。</text>
</g>
<!-- ui_status -->
<g id="node5" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2717.17,-470 2294.06,-470 2294.06,-290 2717.17,-290 2717.17,-470"/>
<text xml:space="preserve" text-anchor="start" x="2414.48" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="2318.08" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
<!-- pod_alert -->
<g id="node6" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2018.37,-180 1691.48,-180 1691.48,0 2018.37,0 2018.37,-180"/>
<text xml:space="preserve" text-anchor="start" x="1752.12" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="1711.54" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="1790.74" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- dao_alert -->
<g id="node7" class="node">
<title>dao_alert</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M2680.29,-163.64C2680.29,-172.67 2602,-180 2505.61,-180 2409.23,-180 2330.94,-172.67 2330.94,-163.64 2330.94,-163.64 2330.94,-16.36 2330.94,-16.36 2330.94,-7.33 2409.23,0 2505.61,0 2602,0 2680.29,-7.33 2680.29,-16.36 2680.29,-16.36 2680.29,-163.64 2680.29,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M2680.29,-163.64C2680.29,-154.61 2602,-147.27 2505.61,-147.27 2409.23,-147.27 2330.94,-154.61 2330.94,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="2411.14" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;101 告警存储访问</text>
<text xml:space="preserve" text-anchor="start" x="2350.99" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</text>
</g>
<!-- actor_ops&#45;&gt;in_probequery -->
<g id="edge1" class="edge">
<title>actor_ops&#45;&gt;in_probequery</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.99,-235C388.69,-235 469.17,-235 538.97,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.66,-237.63 546.16,-235 538.66,-232.38 538.66,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-238 383.04,-270.8 407.04,-270.8 407.04,-238 383.04,-238"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-238 410.04,-270.8 486.05,-270.8 486.05,-238 410.04,-238"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">构造探测入参</text>
</g>
<!-- in_probequery&#45;&gt;biz_proberesult -->
<g id="edge2" class="edge">
<title>in_probequery&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M869.01,-235C940.64,-235 1025.55,-235 1099.49,-235"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1099.32,-237.63 1106.82,-235 1099.32,-232.38 1099.32,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="932.09,-238 932.09,-270.8 956.09,-270.8 956.09,-238 932.09,-238"/>
<text xml:space="preserve" text-anchor="start" x="940.2" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#cbd5e1">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="959.09,-238 959.09,-270.8 1046.78,-270.8 1046.78,-238 959.09,-238"/>
<text xml:space="preserve" text-anchor="start" x="962.09" y="-248.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为探测结果</text>
</g>
<!-- biz_proberesult&#45;&gt;out_status -->
<g id="edge3" class="edge">
<title>biz_proberesult&#45;&gt;out_status</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1450.77,-277.92C1524.79,-296.66 1611.37,-318.58 1685.29,-337.3"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1684.32,-339.76 1692.24,-339.06 1685.61,-334.67 1684.32,-339.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1519.63,-323.49 1519.63,-356.29 1543.63,-356.29 1543.63,-323.49 1519.63,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="1527.74" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1546.63,-323.49 1546.63,-356.29 1622.64,-356.29 1622.64,-323.49 1546.63,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="1549.63" y="-334.29" font-family="Arial" font-size="14.00" fill="#eff5fd">渲染状态载荷</text>
</g>
<!-- biz_proberesult&#45;&gt;pod_alert -->
<g id="edge5" class="edge">
<title>biz_proberesult&#45;&gt;pod_alert</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M1450.77,-192.08C1523.68,-173.62 1608.79,-152.07 1681.97,-133.54"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1682.2,-136.19 1688.82,-131.81 1680.91,-131.1 1682.2,-136.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1513.8,-178.49 1513.8,-211.29 1537.8,-211.29 1537.8,-178.49 1513.8,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="1521.9" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#cbd5e1">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1540.8,-178.49 1540.8,-211.29 1628.48,-211.29 1628.48,-178.49 1540.8,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="1543.8" y="-189.29" font-family="Arial" font-size="14.00" fill="#cbd5e1">异常转告警实体</text>
</g>
<!-- out_status&#45;&gt;ui_status -->
<g id="edge4" class="edge">
<title>out_status&#45;&gt;ui_status</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M2014.61,-380C2095.61,-380 2195.45,-380 2283.83,-380"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="2283.75,-382.63 2291.25,-380 2283.75,-377.38 2283.75,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2081.37,-383 2081.37,-415.8 2105.37,-415.8 2105.37,-383 2081.37,-383"/>
<text xml:space="preserve" text-anchor="start" x="2089.48" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2108.37,-383 2108.37,-415.8 2231.06,-415.8 2231.06,-383 2108.37,-383"/>
<text xml:space="preserve" text-anchor="start" x="2111.37" y="-393.8" font-family="Arial" font-size="14.00" fill="#eff5fd">显示条目数与异常提示</text>
</g>
<!-- pod_alert&#45;&gt;dao_alert -->
<g id="edge6" class="edge">
<title>pod_alert&#45;&gt;dao_alert</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M2018.36,-90C2109.97,-90 2224.76,-90 2319.79,-90"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="2319.58,-92.63 2327.08,-90 2319.58,-87.38 2319.58,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2116.38,-93 2116.38,-125.8 2140.38,-125.8 2140.38,-93 2116.38,-93"/>
<text xml:space="preserve" text-anchor="start" x="2124.48" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#eff5fd">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2143.38,-93 2143.38,-125.8 2196.05,-125.8 2196.05,-93 2143.38,-93"/>
<text xml:space="preserve" text-anchor="start" x="2146.38" y="-103.8" font-family="Arial" font-size="14.00" fill="#eff5fd">写入告警</text>
</g>
</g>
</svg>
`;case`seq001F-i-step-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2164pt" height="526pt"
 viewBox="0.00 0.00 2164.00 526.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 511.05)">
<!-- actor_customer -->
<g id="node1" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="143.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- api_chatcallback -->
<g id="node2" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="967.64,-180 537.38,-180 537.38,0 967.64,0 967.64,-180"/>
<text xml:space="preserve" text-anchor="start" x="557.44" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="635.81" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="683.75" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- step_answerlane -->
<g id="node3" class="node">
<title>step_answerlane</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1528.37,-377 1208.33,-377 1208.33,-197 1528.37,-197 1528.37,-377"/>
<text xml:space="preserve" text-anchor="start" x="1259.42" y="-290" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤（应答泳道）</text>
<text xml:space="preserve" text-anchor="start" x="1249.57" y="-267" font-family="Arial" font-size="15.00" fill="#bfdbfe">编排、检索、校验、生成答复的领域环节。</text>
</g>
<!-- i_steplanestep -->
<g id="node4" class="node">
<title>i_steplanestep</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2134.22,-189 1769.05,-189 1769.05,-9 2134.22,-9 2134.22,-189"/>
<text xml:space="preserve" text-anchor="start" x="1867.72" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;005 校验与生成环节</text>
<text xml:space="preserve" text-anchor="start" x="1789.1" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">按置信度与风险阈值判定放行或转人工，并生成答复正文。</text>
</g>
<!-- i_steplanesearch -->
<g id="node5" class="node">
<title>i_steplanesearch</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2111.66,-496 1791.62,-496 1791.62,-316 2111.66,-316 2111.66,-496"/>
<text xml:space="preserve" text-anchor="start" x="1892.73" y="-409" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;004 检索环节</text>
<text xml:space="preserve" text-anchor="start" x="1834.12" y="-386" font-family="Arial" font-size="15.00" fill="#bfdbfe">向 RAGFlow 发起检索并接收候选知识。</text>
</g>
<!-- actor_customer&#45;&gt;api_chatcallback -->
<g id="edge1" class="edge">
<title>actor_customer&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320.04,-90C383.77,-90 458.35,-90 527.41,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="527.03,-92.63 534.53,-90 527.03,-87.38 527.03,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 474.38,-125.8 474.38,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①提出问题</text>
</g>
<!-- actor_customer&#45;&gt;api_chatcallback -->
<g id="edge7" class="edge">
<title>actor_customer&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.7,-34.02C346.56,-30.03 363.54,-26.63 380.04,-24.2 431.23,-16.68 486.2,-20.06 537.75,-28.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="329.39,-31.39 322.73,-35.72 330.64,-36.49 329.39,-31.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-27.2 383.04,-60 407.04,-60 407.04,-27.2 383.04,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-27.2 410.04,-60 474.38,-60 474.38,-27.2 410.04,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑦答复送达</text>
</g>
<!-- api_chatcallback&#45;&gt;step_answerlane -->
<g id="edge2" class="edge">
<title>api_chatcallback&#45;&gt;step_answerlane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M967.34,-158.62C1043.02,-182.91 1127.03,-209.87 1198.45,-232.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1197.62,-235.28 1205.56,-235.08 1199.22,-230.29 1197.62,-235.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1030.64,-214.94 1030.64,-247.74 1054.64,-247.74 1054.64,-214.94 1030.64,-214.94"/>
<text xml:space="preserve" text-anchor="start" x="1038.75" y="-228.14" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1057.64,-214.94 1057.64,-247.74 1145.33,-247.74 1145.33,-214.94 1057.64,-214.94"/>
<text xml:space="preserve" text-anchor="start" x="1060.64" y="-225.74" font-family="Arial" font-size="14.00" fill="#c9c9c9">②归一化并派发</text>
</g>
<!-- api_chatcallback&#45;&gt;i_steplanestep -->
<g id="edge6" class="edge">
<title>api_chatcallback&#45;&gt;i_steplanestep</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M978,-91.69C1206.84,-93.41 1557.42,-96.04 1769.28,-97.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="978.08,-89.06 970.56,-91.63 978.04,-94.31 978.08,-89.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1322.67,-98.69 1322.67,-131.49 1346.67,-131.49 1346.67,-98.69 1322.67,-98.69"/>
<text xml:space="preserve" text-anchor="start" x="1330.78" y="-111.89" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1349.67,-98.69 1349.67,-131.49 1414.02,-131.49 1414.02,-98.69 1349.67,-98.69"/>
<text xml:space="preserve" text-anchor="start" x="1352.67" y="-109.49" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑥生成答复</text>
</g>
<!-- step_answerlane&#45;&gt;i_steplanestep -->
<g id="edge5" class="edge">
<title>step_answerlane&#45;&gt;i_steplanestep</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1528.19,-235.63C1599.52,-212.56 1684.3,-185.14 1759.13,-160.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1759.93,-163.44 1766.26,-158.63 1758.32,-158.44 1759.93,-163.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1597.2,-218.37 1597.2,-251.17 1621.2,-251.17 1621.2,-218.37 1597.2,-218.37"/>
<text xml:space="preserve" text-anchor="start" x="1605.31" y="-231.57" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1624.2,-218.37 1624.2,-251.17 1700.21,-251.17 1700.21,-218.37 1624.2,-218.37"/>
<text xml:space="preserve" text-anchor="start" x="1627.2" y="-229.17" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑤置信度校验</text>
</g>
<!-- step_answerlane&#45;&gt;i_steplanesearch -->
<g id="edge3" class="edge">
<title>step_answerlane&#45;&gt;i_steplanesearch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1528.12,-352.71C1548.16,-359.35 1568.57,-365.35 1588.37,-370 1650.59,-384.61 1720.18,-393.3 1781.6,-398.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1781.08,-401.05 1788.77,-399.04 1781.51,-395.82 1781.08,-401.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1591.37,-393.61 1591.37,-426.41 1615.37,-426.41 1615.37,-393.61 1591.37,-393.61"/>
<text xml:space="preserve" text-anchor="start" x="1599.47" y="-406.81" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1618.37,-393.61 1618.37,-426.41 1706.05,-426.41 1706.05,-393.61 1618.37,-393.61"/>
<text xml:space="preserve" text-anchor="start" x="1621.37" y="-404.41" font-family="Arial" font-size="14.00" fill="#c9c9c9">③检索候选知识</text>
</g>
<!-- step_answerlane&#45;&gt;i_steplanesearch -->
<g id="edge4" class="edge">
<title>step_answerlane&#45;&gt;i_steplanesearch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1538.39,-284.02C1593.37,-286.1 1654.31,-291.69 1709.05,-304.2 1736.45,-310.46 1764.68,-319.63 1791.76,-329.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1538.81,-281.4 1531.22,-283.77 1538.63,-286.65 1538.81,-281.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1603.03,-307.2 1603.03,-340 1627.03,-340 1627.03,-307.2 1603.03,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="1611.14" y="-320.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1630.03,-307.2 1630.03,-340 1694.38,-340 1694.38,-307.2 1630.03,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="1633.03" y="-318" font-family="Arial" font-size="14.00" fill="#c9c9c9">④候选返回</text>
</g>
</g>
</svg>
`;case`seq001NF-i-step-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3217pt" height="381pt"
 viewBox="0.00 0.00 3217.00 381.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 366.05)">
<!-- actor_ops -->
<g id="node1" class="node">
<title>actor_ops</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- api_status -->
<g id="node2" class="node">
<title>api_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="932.1,-351 537.38,-351 537.38,-171 932.1,-171 932.1,-351"/>
<text xml:space="preserve" text-anchor="start" x="557.44" y="-273" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="619.27" y="-250" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="653.47" y="-232" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
</g>
<!-- step_probelane -->
<g id="node3" class="node">
<title>step_probelane</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1469.48,-351 1149.44,-351 1149.44,-171 1469.48,-171 1469.48,-351"/>
<text xml:space="preserve" text-anchor="start" x="1183.87" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑（判定泳道）</text>
<text xml:space="preserve" text-anchor="start" x="1178.19" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识条目、响应耗时、模型可用性的判定环节。</text>
</g>
<!-- i_steplanekbcheck -->
<g id="node4" class="node">
<title>i_steplanekbcheck</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2053.54,-351 1733.5,-351 1733.5,-171 2053.54,-171 2053.54,-351"/>
<text xml:space="preserve" text-anchor="start" x="1826.28" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;103 条目数判定</text>
<text xml:space="preserve" text-anchor="start" x="1762.25" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">判定知识库当前条目数，为零时标记空库场景。</text>
</g>
<!-- i_steplanetimeoutcheck -->
<g id="node5" class="node">
<title>i_steplanetimeoutcheck</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2614.26,-351 2294.22,-351 2294.22,-171 2614.26,-171 2614.26,-351"/>
<text xml:space="preserve" text-anchor="start" x="2378.66" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;104 响应耗时判定</text>
<text xml:space="preserve" text-anchor="start" x="2334.64" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">判定 RAGFlow 响应是否超过 8 秒阈值。</text>
</g>
<!-- i_steplanellmcheck -->
<g id="node6" class="node">
<title>i_steplanellmcheck</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3186.66,-180 2866.62,-180 2866.62,0 3186.66,0 3186.66,-180"/>
<text xml:space="preserve" text-anchor="start" x="2942.72" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;105 模型可用性判定</text>
<text xml:space="preserve" text-anchor="start" x="2889.11" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">判定模型服务调用结果，失败时标记转人工场景。</text>
</g>
<!-- actor_ops&#45;&gt;api_status -->
<g id="edge1" class="edge">
<title>actor_ops&#45;&gt;api_status</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.79,-137.41C384.08,-156.6 459.15,-179.02 527.58,-199.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="526.79,-201.95 534.73,-201.58 528.29,-196.92 526.79,-201.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-183.63 383.04,-216.43 407.04,-216.43 407.04,-183.63 383.04,-183.63"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-196.83" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-183.63 410.04,-216.43 474.38,-216.43 474.38,-183.63 410.04,-183.63"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-194.43" font-family="Arial" font-size="14.00" fill="#c9c9c9">①查询状态</text>
</g>
<!-- actor_ops&#45;&gt;i_steplanellmcheck -->
<g id="edge6" class="edge">
<title>actor_ops&#45;&gt;i_steplanellmcheck</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M330.1,-51.55C443.62,-29.04 596.89,-5 733.74,-5 733.74,-5 733.74,-5 2455.24,-5 2595.41,-5 2752.86,-30.42 2866.77,-53.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="329.74,-48.94 322.9,-52.99 330.77,-54.09 329.74,-48.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1532.48,-8 1532.48,-40.8 1556.48,-40.8 1556.48,-8 1532.48,-8"/>
<text xml:space="preserve" text-anchor="start" x="1540.59" y="-21.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1559.48,-8 1559.48,-40.8 1670.5,-40.8 1670.5,-8 1559.48,-8"/>
<text xml:space="preserve" text-anchor="start" x="1562.48" y="-18.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑥下发提示或转人工</text>
</g>
<!-- api_status&#45;&gt;step_probelane -->
<g id="edge2" class="edge">
<title>api_status&#45;&gt;step_probelane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M932.04,-261C999.5,-261 1074.4,-261 1139.5,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.33,-263.63 1146.83,-261 1139.33,-258.38 1139.33,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="995.1,-264 995.1,-296.8 1019.1,-296.8 1019.1,-264 995.1,-264"/>
<text xml:space="preserve" text-anchor="start" x="1003.2" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1022.1,-264 1022.1,-296.8 1086.44,-296.8 1086.44,-264 1022.1,-264"/>
<text xml:space="preserve" text-anchor="start" x="1025.1" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②发起探测</text>
</g>
<!-- step_probelane&#45;&gt;i_steplanekbcheck -->
<g id="edge3" class="edge">
<title>step_probelane&#45;&gt;i_steplanekbcheck</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1469.13,-261C1547.97,-261 1643.29,-261 1723.51,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1723.19,-263.63 1730.69,-261 1723.19,-258.38 1723.19,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1549.98,-264 1549.98,-296.8 1573.98,-296.8 1573.98,-264 1549.98,-264"/>
<text xml:space="preserve" text-anchor="start" x="1558.09" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1576.98,-264 1576.98,-296.8 1653,-296.8 1653,-264 1576.98,-264"/>
<text xml:space="preserve" text-anchor="start" x="1579.98" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③判定条目数</text>
</g>
<!-- i_steplanekbcheck&#45;&gt;i_steplanetimeoutcheck -->
<g id="edge4" class="edge">
<title>i_steplanekbcheck&#45;&gt;i_steplanetimeoutcheck</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2053.51,-261C2125.6,-261 2210.92,-261 2284.18,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2283.91,-263.63 2291.41,-261 2283.91,-258.38 2283.91,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2116.54,-264 2116.54,-296.8 2140.54,-296.8 2140.54,-264 2116.54,-264"/>
<text xml:space="preserve" text-anchor="start" x="2124.65" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2143.54,-264 2143.54,-296.8 2231.22,-296.8 2231.22,-264 2143.54,-264"/>
<text xml:space="preserve" text-anchor="start" x="2146.54" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">④判定响应耗时</text>
</g>
<!-- i_steplanetimeoutcheck&#45;&gt;i_steplanellmcheck -->
<g id="edge5" class="edge">
<title>i_steplanetimeoutcheck&#45;&gt;i_steplanellmcheck</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2614.13,-213.37C2689.84,-190.67 2780.43,-163.51 2857.32,-140.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2857.78,-143.06 2864.21,-138.39 2856.27,-138.03 2857.78,-143.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2677.26,-193.82 2677.26,-226.62 2701.26,-226.62 2701.26,-193.82 2677.26,-193.82"/>
<text xml:space="preserve" text-anchor="start" x="2685.37" y="-207.02" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2704.26,-193.82 2704.26,-226.62 2803.62,-226.62 2803.62,-193.82 2704.26,-193.82"/>
<text xml:space="preserve" text-anchor="start" x="2707.26" y="-204.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑤判定模型可用性</text>
</g>
</g>
</svg>
`;case`seq001F-api-chat`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2159pt" height="210pt"
 viewBox="0.00 0.00 2159.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- actor_customer -->
<g id="node1" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="143.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- api_chatcallback -->
<g id="node2" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1054.02,-180 623.76,-180 623.76,0 1054.02,0 1054.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="643.82" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="722.19" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="770.13" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- step_answerlane -->
<g id="node3" class="node">
<title>step_answerlane</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1579.74,-180 1259.7,-180 1259.7,0 1579.74,0 1579.74,-180"/>
<text xml:space="preserve" text-anchor="start" x="1310.8" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤（应答泳道）</text>
<text xml:space="preserve" text-anchor="start" x="1300.94" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">编排、检索、校验、生成答复的领域环节。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2128.79,-180 1808.75,-180 1808.75,0 2128.79,0 2128.79,-180"/>
<text xml:space="preserve" text-anchor="start" x="1925.99" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1912.51" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- actor_customer&#45;&gt;api_chatcallback -->
<g id="edge1" class="edge">
<title>actor_customer&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.72,-90C407.18,-90 517.21,-90 613.36,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="613.29,-92.63 620.79,-90 613.29,-87.38 613.29,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 560.76,-125.8 560.76,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">POST /wechat/callback</text>
</g>
<!-- api_chatcallback&#45;&gt;step_answerlane -->
<g id="edge2" class="edge">
<title>api_chatcallback&#45;&gt;step_answerlane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1053.78,-90C1118.45,-90 1188.54,-90 1249.84,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1249.46,-92.63 1256.96,-90 1249.46,-87.38 1249.46,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.02,-93 1117.02,-125.8 1141.02,-125.8 1141.02,-93 1117.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1125.13" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.02,-93 1144.02,-125.8 1196.7,-125.8 1196.7,-93 1144.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1147.02" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">触发应答</text>
</g>
<!-- api_chatcallback&#45;&gt;step_answerlane -->
<g id="edge5" class="edge">
<title>api_chatcallback&#45;&gt;step_answerlane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1064.42,-25.98C1109.14,-19.72 1155.84,-17.75 1199.7,-24.2 1219.44,-27.1 1239.87,-31.4 1259.95,-36.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1064.03,-23.38 1057,-27.08 1064.8,-28.58 1064.03,-23.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.02,-27.2 1117.02,-60 1141.02,-60 1141.02,-27.2 1117.02,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1125.13" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.02,-27.2 1144.02,-60 1196.7,-60 1196.7,-27.2 1144.02,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1147.02" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回答复</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1579.68,-90C1648.39,-90 1728.86,-90 1798.66,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1798.36,-92.63 1805.86,-90 1798.36,-87.38 1798.36,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1654.41,-93 1654.41,-125.8 1678.41,-125.8 1678.41,-93 1654.41,-93"/>
<text xml:space="preserve" text-anchor="start" x="1662.51" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1681.41,-93 1681.41,-125.8 1734.08,-125.8 1734.08,-93 1681.41,-93"/>
<text xml:space="preserve" text-anchor="start" x="1684.41" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索知识</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1589.39,-34.02C1606.26,-30.03 1623.24,-26.63 1639.74,-24.2 1687.67,-17.15 1700.82,-17.15 1748.75,-24.2 1768.49,-27.1 1788.92,-31.4 1809.01,-36.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1589.09,-31.39 1582.42,-35.72 1590.33,-36.49 1589.09,-31.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1642.74,-27.2 1642.74,-60 1666.74,-60 1666.74,-27.2 1642.74,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1650.84" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1669.74,-27.2 1669.74,-60 1745.75,-60 1745.75,-27.2 1669.74,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1672.74" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选知识</text>
</g>
</g>
</svg>
`;case`seq001NF-api-status`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2118pt" height="210pt"
 viewBox="0.00 0.00 2118.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- actor_ops -->
<g id="node1" class="node">
<title>actor_ops</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- api_status -->
<g id="node2" class="node">
<title>api_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1016.93,-180 622.22,-180 622.22,0 1016.93,0 1016.93,-180"/>
<text xml:space="preserve" text-anchor="start" x="642.27" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="704.11" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="738.31" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
</g>
<!-- step_probelane -->
<g id="node3" class="node">
<title>step_probelane</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1542.65,-180 1222.61,-180 1222.61,0 1542.65,0 1542.65,-180"/>
<text xml:space="preserve" text-anchor="start" x="1257.04" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑（判定泳道）</text>
<text xml:space="preserve" text-anchor="start" x="1251.35" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识条目、响应耗时、模型可用性的判定环节。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2087.66,-180 1759.99,-180 1759.99,0 2087.66,0 2087.66,-180"/>
<text xml:space="preserve" text-anchor="start" x="1881.04" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1780.05" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务，超时或不可用即触发本链场景。</text>
</g>
<!-- actor_ops&#45;&gt;api_status -->
<g id="edge1" class="edge">
<title>actor_ops&#45;&gt;api_status</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.78,-90C407.6,-90 517.75,-90 612.19,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="611.92,-92.63 619.42,-90 611.92,-87.38 611.92,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 559.22,-125.8 559.22,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET /integration/status</text>
</g>
<!-- api_status&#45;&gt;step_probelane -->
<g id="edge2" class="edge">
<title>api_status&#45;&gt;step_probelane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1016.8,-90C1080.71,-90 1151.05,-90 1212.78,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1212.47,-92.63 1219.97,-90 1212.47,-87.38 1212.47,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.93,-93 1079.93,-125.8 1103.93,-125.8 1103.93,-93 1079.93,-93"/>
<text xml:space="preserve" text-anchor="start" x="1088.04" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1106.93,-93 1106.93,-125.8 1159.61,-125.8 1159.61,-93 1106.93,-93"/>
<text xml:space="preserve" text-anchor="start" x="1109.93" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1542.49,-90C1607.79,-90 1683.58,-90 1750.24,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1749.9,-92.63 1757.4,-90 1749.9,-87.38 1749.9,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1605.65,-93 1605.65,-125.8 1629.65,-125.8 1629.65,-93 1605.65,-93"/>
<text xml:space="preserve" text-anchor="start" x="1613.75" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1632.65,-93 1632.65,-125.8 1696.99,-125.8 1696.99,-93 1632.65,-93"/>
<text xml:space="preserve" text-anchor="start" x="1635.65" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测数据集</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1552.3,-34.02C1569.16,-30.03 1586.15,-26.63 1602.65,-24.2 1654.16,-16.63 1709.87,-22.94 1760.16,-34.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1552,-31.39 1545.33,-35.72 1553.24,-36.49 1552,-31.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1611.48,-27.2 1611.48,-60 1635.48,-60 1635.48,-27.2 1611.48,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1619.59" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1638.48,-27.2 1638.48,-60 1691.16,-60 1691.16,-27.2 1638.48,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1641.48" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回结论</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
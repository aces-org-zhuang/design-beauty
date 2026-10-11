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
    us_scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_scan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_govern [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-202 候选知识经我决策后才对外可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_govern",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_scan -> us_govern [style=invis];
    us_alert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-203 知识陈旧时我能收到提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_alert",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_govern -> us_alert [style=invis];
    us_llmdown [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_llmDown",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_alert -> us_llmdown [style=invis];
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
        us_ask [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_lowconfidence [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_goal_1 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-101 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_goal",
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
        us_kbempty [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_goal_2 [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-141 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    i_goal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-201 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_ask -> i_goal [style=invis];
    us_scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_scan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    i_goal -> us_scan [style=invis];
    us_lowconfidence -> i_goal_1 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务目标</FONT></TD></TR></TABLE>>,
        likec4_id="10z9ivk",
        minlen=0,
        style=solid];
    us_kbempty -> i_goal_2 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务目标</FONT></TD></TR></TABLE>>,
        likec4_id="1hxdoyk",
        minlen=0,
        style=solid];
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
        likec4_id="feat_answer_f.st_received",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving [height=2.5,
        label=<<FONT POINT-SIZE="20">检索中</FONT>>,
        likec4_id="feat_answer_f.st_retrieving",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_received -> st_retrieving [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>,
        likec4_id="4gx766",
        minlen=1,
        style=dashed];
    st_answering [height=2.5,
        label=<<FONT POINT-SIZE="20">应答中</FONT>>,
        likec4_id="feat_answer_f.st_answering",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_answering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id=oqfnq5,
        style=dashed];
    st_waitinghuman [height=2.5,
        label=<<FONT POINT-SIZE="20">待人工</FONT>>,
        likec4_id="feat_answer_f.st_waitingHuman",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_waitinghuman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>,
        likec4_id=b13es5,
        style=dashed];
    st_answered [height=2.5,
        label=<<FONT POINT-SIZE="20">已答复</FONT>>,
        likec4_id="feat_answer_f.st_answered",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_answering -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">答复已下发</FONT></TD></TR></TABLE>>,
        likec4_id=kw840b,
        style=dashed];
    st_waitinghuman -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">人工已接管</FONT></TD></TR></TABLE>>,
        likec4_id="16n538j",
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
    ui_console [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-201 运营控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.ui_console",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_information -> ui_console [style=invis];
    ui_information_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-202 知识运营信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.ui_information",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_console -> ui_information_1 [style=invis];
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
        src_materialroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-201 素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 美妆素材接入接口。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_materialRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_materialbatch [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-204 素材批处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-batch-service.js —<BR/>批量素材接入。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_materialBatch",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgeroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-202 知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>知识扫描、同步与生命周期接口。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_knowledgeRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_materialservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-203 素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 素材接入规则。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_materialService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgescan [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-206 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>发现候选知识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_knowledgeScan",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_governance [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-207 知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-governance-service.js<BR/>— 发布决策与治理。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_governance",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgesync [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-208 知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-sync-service.js —<BR/>把已批准知识推送到 RAGFlow。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_knowledgeSync",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_lifecycle [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-209 知识生命周期视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-lifecycle-service.js —<BR/>知识的晋升与下线。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_lifecycle",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_documentregistry [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-205 文档登记簿</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-document-registry.js —<BR/>跟踪素材与文档标识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.src_documentRegistry",
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
    src_materialroutes -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">接收素材</FONT></TD></TR></TABLE>>,
        likec4_id=htkkql,
        minlen=1,
        style=solid];
    src_materialbatch -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批量接入</FONT></TD></TR></TABLE>>,
        likec4_id="1jrszkb",
        minlen=1,
        style=solid];
    src_knowledgeroutes -> src_knowledgescan [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id=ephpq7,
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
    src_materialservice -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记文档</FONT></TD></TR></TABLE>>,
        likec4_id=oiusdi,
        style=solid];
    src_knowledgescan -> src_governance [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选</FONT></TD></TR></TABLE>>,
        likec4_id=d45yi1,
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
    src_governance -> src_knowledgesync [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准后推送</FONT></TD></TR></TABLE>>,
        likec4_id="12x4j1t",
        style=solid];
    src_knowledgesync -> src_lifecycle [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">更新生命周期</FONT></TD></TR></TABLE>>,
        likec4_id="1y2cvux",
        style=solid];
    src_lifecycle -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id="15donk6",
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
        likec4_id="feat_knowledge_f.lane_edge",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lane_edge -> lane_edge_1 [style=invis];
    lane_edge_2 [height=2.5,
        label=<<FONT POINT-SIZE="20">服务端接入泳道</FONT>>,
        likec4_id="feat_degrade_nf.lane_edge",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    lane_edge_1 -> lane_edge_2 [style=invis];
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
        likec4_id="feat_answer_f.st_received",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving [height=2.5,
        label=<<FONT POINT-SIZE="20">检索中</FONT>>,
        likec4_id="feat_answer_f.st_retrieving",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_received -> st_retrieving [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>,
        likec4_id="4gx766",
        minlen=1,
        style=dashed];
    st_answering [height=2.5,
        label=<<FONT POINT-SIZE="20">应答中</FONT>>,
        likec4_id="feat_answer_f.st_answering",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_answering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id=oqfnq5,
        style=dashed];
    st_answered [height=2.5,
        label=<<FONT POINT-SIZE="20">已答复</FONT>>,
        likec4_id="feat_answer_f.st_answered",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_answering -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">答复已下发</FONT></TD></TR></TABLE>>,
        likec4_id=kw840b,
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
        likec4_id="feat_answer_f.st_retrieving",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_waitinghuman [height=2.5,
        label=<<FONT POINT-SIZE="20">待人工</FONT>>,
        likec4_id="feat_answer_f.st_waitingHuman",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_waitinghuman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>,
        likec4_id=b13es5,
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
    feat_knowledge_f [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Feature-002-F 知识运营能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按业务能力切分。交付边界：运营人员能把素材变成可检索知识，并能发现知识陈旧。所属愿景：让美妆咨询有据可依。</FONT></TD></TR></TABLE>>,
        likec4_id=feat_knowledge_f,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    feat_degrade_nf -> feat_knowledge_f [style=invis];
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-101 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-141 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
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
    us_kbempty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-101 知识库为空时运营人员能看见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为<BR/>0 条。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.us_kbEmpty",
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
    us_scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_scan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_govern [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-202 候选知识经我决策后才对外可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_govern",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_scan -> us_govern [style=invis];
    us_alert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-203 知识陈旧时我能收到提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_alert",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_govern -> us_alert [style=invis];
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
    us_scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_scan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_ingest [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-201 素材接入能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收素材并登记文档标识，支持单条与批量。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.f_ingest",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_scan -> f_ingest [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=h2l113,
        style=solid];
    us_govern [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-202 候选知识经我决策后才对外可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_govern",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    f_govern [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-202 知识治理能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">候选知识的扫描、决策、晋升与下线。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.f_govern",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_govern -> f_govern [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="12oly8a",
        minlen=1,
        style=solid];
    us_alert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-203 知识陈旧时我能收到提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_alert",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    us_alert -> f_govern [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=bd7x0j,
        minlen=1,
        style=solid];
}
`;case`chain002F-i-goal`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-i-goal",
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-201 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain002F-i-step`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-i-step",
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
    us_scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-201 素材入库后自动进入候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.us_scan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain002F-ui`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-ui",
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
    ui_console [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-201 运营控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.ui_console",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_information [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-202 知识运营信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.ui_information",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    ui_console -> ui_information [style=invis];
}
`;case`srcdir002F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=srcdir002F,
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
    src_materialroutes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-201 素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 美妆素材接入接口。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_materialRoutes",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_materialservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-203 素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 素材接入规则。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_materialService",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_materialroutes -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">接收素材</FONT></TD></TR></TABLE>>,
        likec4_id=htkkql,
        minlen=1,
        style=solid];
    src_materialbatch [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-204 素材批处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-batch-service.js —<BR/>批量素材接入。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_materialBatch",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_materialbatch -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批量接入</FONT></TD></TR></TABLE>>,
        likec4_id="1jrszkb",
        minlen=1,
        style=solid];
    src_knowledgeroutes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-202 知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>知识扫描、同步与生命周期接口。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_knowledgeRoutes",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_knowledgescan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-206 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>发现候选知识。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_knowledgeScan",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_knowledgeroutes -> src_knowledgescan [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id=ephpq7,
        minlen=1,
        style=solid];
    src_documentregistry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-205 文档登记簿</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-document-registry.js —<BR/>跟踪素材与文档标识。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_documentRegistry",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_materialservice -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记文档</FONT></TD></TR></TABLE>>,
        likec4_id=oiusdi,
        style=solid];
    src_governance [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-207 知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-governance-service.js<BR/>— 发布决策与治理。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_governance",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_knowledgescan -> src_governance [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选</FONT></TD></TR></TABLE>>,
        likec4_id=d45yi1,
        style=solid];
    src_knowledgesync [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-208 知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-sync-service.js —<BR/>把已批准知识推送到 RAGFlow。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_knowledgeSync",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_governance -> src_knowledgesync [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准后推送</FONT></TD></TR></TABLE>>,
        likec4_id="12x4j1t",
        style=solid];
    src_lifecycle [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-209 知识生命周期视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-lifecycle-service.js —<BR/>知识的晋升与下线。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.src_lifecycle",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    src_knowledgesync -> src_lifecycle [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">更新生命周期</FONT></TD></TR></TABLE>>,
        likec4_id="1y2cvux",
        style=solid];
    src_lifecycle -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id="15donk6",
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
`;case`erm002F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=erm002F,
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
`;case`api002F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=api002F,
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
    lane_edge [height=2.5,
        label=<<FONT POINT-SIZE="20">服务端接入泳道</FONT>>,
        likec4_id="feat_knowledge_f.lane_edge",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-201 应答编排（泳道引用）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">泳道中的编排环节，具体步骤见 US-001 容器下的 I-001~I-006。</FONT></TD></TR></TABLE>>;
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
}`;case`seq001F-branch-low-confidence-src`:return`digraph {
  likec4_viewId = "seq001F-branch-low-confidence-src";
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-151 场景判定（泳道引用）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">泳道中的判定环节，具体步骤见各 US 容器下的 I-11x~I-13x。</FONT></TD></TR></TABLE>>;
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
  "i_ask_normalize" [
    likec4_id = "feat_answer_f.us_ask.i_ask_normalize";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 归一化提问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_ask_retrieve" [
    likec4_id = "feat_answer_f.us_ask.i_ask_retrieve";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-002 检索候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_ask_rank" [
    likec4_id = "feat_answer_f.us_ask.i_ask_rank";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 候选排序与择优</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_ask_verify" [
    likec4_id = "feat_answer_f.us_ask.i_ask_verify";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-004 置信度校验</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_ask_compose" [
    likec4_id = "feat_answer_f.us_ask.i_ask_compose";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-005 生成答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_ask_deliver" [
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-006 下发答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">①提出问题</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "i_ask_normalize" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②归一化提问</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_normalize" -> "i_ask_retrieve" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③发起检索</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_retrieve" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">④请求RAGFlow</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_retrieve" -> "ext_ragflow" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑤返回候选知识</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "i_ask_retrieve" -> "i_ask_rank" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑥候选排序</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_rank" -> "i_ask_verify" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑦置信度校验</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_verify" -> "i_ask_compose" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑧生成答复</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_compose" -> "i_ask_deliver" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑨下发答复</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "i_ask_deliver" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑩回复会话</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "actor_customer" -> "api_chatcallback" [
    likec4_id = "step-11";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>11</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑪答复送达</FONT></TD></TR></TABLE>>;
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
  "i_ask_verify" [
    likec4_id = "feat_answer_f.us_ask.i_ask_verify";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-004 置信度校验</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_lowescalate" [
    likec4_id = "feat_answer_f.us_lowConfidence.i_lowEscalate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-011 判定转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">置信度低于阈值或无候选时，判定进入人工路径。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_lowticket" [
    likec4_id = "feat_answer_f.us_lowConfidence.i_lowTicket";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-012 创建人工工单</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_lownotify" [
    likec4_id = "feat_answer_f.us_lowConfidence.i_lowNotify";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-013 告知客户等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</FONT></TD></TR></TABLE>>;
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
  "i_ask_verify" -> "i_lowescalate" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_lowescalate" -> "i_lowticket" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">创建工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_lowticket" -> "i_lownotify" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">告知等待</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_lownotify" -> "api_chatcallback" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">回复会话</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-151 场景判定（泳道引用）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">泳道中的判定环节，具体步骤见各 US 容器下的 I-11x~I-13x。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_kb_judge" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_kb_judge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-112 判定零条场景</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_to_check" [
    likec4_id = "feat_degrade_nf.us_ragTimeout.i_to_check";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-122 判定超时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "i_ll_detect" [
    likec4_id = "feat_degrade_nf.us_llmDown.i_ll_detect";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-131 判定调用结果</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">识别模型服务调用失败或返回异常。</FONT></TD></TR></TABLE>>;
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
  "step_probelane" -> "i_kb_judge" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">③判定条目数</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_kb_judge" -> "i_to_check" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">④判定响应耗时</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_to_check" -> "i_ll_detect" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">⑤判定模型可用性</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "actor_ops" -> "i_ll_detect" [
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-201 应答编排（泳道引用）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">泳道中的编排环节，具体步骤见 US-001 容器下的 I-001~I-006。</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-151 场景判定（泳道引用）</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">泳道中的判定环节，具体步骤见各 US 容器下的 I-11x~I-13x。</FONT></TD></TR></TABLE>>;
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
<svg width="1789pt" height="1110pt"
 viewBox="0.00 0.00 1789.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<!-- us_scan -->
<g id="node5" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1759.27,-1080 931.5,-1080 931.5,-900 1759.27,-900 1759.27,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1200.35" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="951.56" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- us_govern -->
<g id="node6" class="node">
<title>us_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1728.01,-780 962.76,-780 962.76,-600 1728.01,-600 1728.01,-780"/>
<text xml:space="preserve" text-anchor="start" x="1192.01" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="982.81" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- us_alert -->
<g id="node7" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1728.01,-480 962.76,-480 962.76,-300 1728.01,-300 1728.01,-480"/>
<text xml:space="preserve" text-anchor="start" x="1217.02" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="982.81" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- us_llmdown -->
<g id="node8" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1703.01,-180 987.76,-180 987.76,0 1703.01,0 1703.01,-180"/>
<text xml:space="preserve" text-anchor="start" x="1178.11" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="1007.82" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- us_ask&#45;&gt;us_lowconfidence -->
<!-- us_lowconfidence&#45;&gt;us_kbempty -->
<!-- us_kbempty&#45;&gt;us_ragtimeout -->
<!-- us_scan&#45;&gt;us_govern -->
<!-- us_govern&#45;&gt;us_alert -->
<!-- us_alert&#45;&gt;us_llmdown -->
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
<svg width="4018pt" height="881pt"
 viewBox="0.00 0.00 4018.00 881.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 866.25)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-562 8,-843.2 2417,-843.2 2417,-562 8,-562"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-830.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2447,-562 2447,-843.2 3980,-843.2 3980,-562 2447,-562"/>
<text xml:space="preserve" text-anchor="start" x="2455" y="-830.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.88,-782 48.12,-782 48.12,-602 825.88,-602 825.88,-782"/>
<text xml:space="preserve" text-anchor="start" x="316.97" y="-695" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="68.18" y="-672" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1701.63,-782 936.37,-782 936.37,-602 1701.63,-602 1701.63,-782"/>
<text xml:space="preserve" text-anchor="start" x="1190.63" y="-695" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="956.43" y="-672" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- i_goal_1 -->
<g id="node3" class="node">
<title>i_goal_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2377.1,-782 1886.9,-782 1886.9,-602 2377.1,-602 2377.1,-782"/>
<text xml:space="preserve" text-anchor="start" x="2073.09" y="-695" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;101 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="1906.96" y="-672" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。</text>
</g>
<!-- us_kbempty -->
<g id="node4" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3339.39,-782 2486.61,-782 2486.61,-602 3339.39,-602 3339.39,-782"/>
<text xml:space="preserve" text-anchor="start" x="2767.96" y="-704" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="2506.67" y="-681" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="2894.24" y="-663" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- i_goal_2 -->
<g id="node5" class="node">
<title>i_goal_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3939.59,-782 3524.41,-782 3524.41,-602 3939.59,-602 3939.59,-782"/>
<text xml:space="preserve" text-anchor="start" x="3673.09" y="-695" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;141 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="3544.46" y="-672" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
<!-- i_goal -->
<g id="node6" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="644.59,-481 229.41,-481 229.41,-301 644.59,-301 644.59,-481"/>
<text xml:space="preserve" text-anchor="start" x="378.09" y="-394" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;201 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="249.46" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</text>
</g>
<!-- us_scan -->
<g id="node7" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="850.88,-180 23.12,-180 23.12,0 850.88,0 850.88,-180"/>
<text xml:space="preserve" text-anchor="start" x="291.96" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="43.17" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- us_ask&#45;&gt;i_goal -->
<!-- us_lowconfidence&#45;&gt;i_goal_1 -->
<g id="edge3" class="edge">
<title>us_lowconfidence&#45;&gt;i_goal_1</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1701.4,-692C1760.84,-692 1820.97,-692 1876.69,-692"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1876.51,-694.63 1884.01,-692 1876.51,-689.38 1876.51,-694.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1756.26,-695 1756.26,-717.8 1832.27,-717.8 1832.27,-695 1756.26,-695"/>
<text xml:space="preserve" text-anchor="start" x="1759.26" y="-700.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
</g>
<!-- us_kbempty&#45;&gt;i_goal_2 -->
<g id="edge4" class="edge">
<title>us_kbempty&#45;&gt;i_goal_2</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M3339.29,-692C3399.81,-692 3459.85,-692 3514.09,-692"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="3513.98,-694.63 3521.48,-692 3513.98,-689.38 3513.98,-694.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3393.89,-695 3393.89,-717.8 3469.9,-717.8 3469.9,-695 3393.89,-695"/>
<text xml:space="preserve" text-anchor="start" x="3396.89" y="-700.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
</g>
<!-- i_goal&#45;&gt;us_scan -->
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
<svg width="1649pt" height="1110pt"
 viewBox="0.00 0.00 1649.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- ui_interaction -->
<g id="node1" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="641.9,-1080 243.8,-1080 243.8,-900 641.9,-900 641.9,-1080"/>
<text xml:space="preserve" text-anchor="start" x="343.38" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="267.81" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- ui_information -->
<g id="node2" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="873.19,-780 12.5,-780 12.5,-600 873.19,-600 873.19,-780"/>
<text xml:space="preserve" text-anchor="start" x="360.05" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="36.52" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- ui_console -->
<g id="node3" class="node">
<title>ui_console</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="654.4,-480 231.3,-480 231.3,-300 654.4,-300 654.4,-480"/>
<text xml:space="preserve" text-anchor="start" x="368.38" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;201 运营控制台</text>
<text xml:space="preserve" text-anchor="start" x="255.31" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</text>
</g>
<!-- ui_information_1 -->
<g id="node4" class="node">
<title>ui_information_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="885.7,-180 0,-180 0,0 885.7,0 885.7,-180"/>
<text xml:space="preserve" text-anchor="start" x="343.38" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;202 知识运营信息设计</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</text>
</g>
<!-- ui_status -->
<g id="node5" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1512.4,-1080 1089.3,-1080 1089.3,-900 1512.4,-900 1512.4,-1080"/>
<text xml:space="preserve" text-anchor="start" x="1209.71" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="1113.31" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
<!-- ui_notice -->
<g id="node6" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1618.67,-780 983.02,-780 983.02,-600 1618.67,-600 1618.67,-780"/>
<text xml:space="preserve" text-anchor="start" x="1218.05" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="1007.04" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
<!-- ui_interaction&#45;&gt;ui_information -->
<!-- ui_information&#45;&gt;ui_console -->
<!-- ui_console&#45;&gt;ui_information_1 -->
<!-- ui_status&#45;&gt;ui_notice -->
</g>
</svg>
`;case`pano-src`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3818pt" height="1941pt"
 viewBox="0.00 0.00 3818.00 1941.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1926.25)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-653.6 8,-1903.2 1448,-1903.2 1448,-653.6 8,-653.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1890.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1478,-653.6 1478,-1903.2 2402,-1903.2 2402,-653.6 1478,-653.6"/>
<text xml:space="preserve" text-anchor="start" x="1486" y="-1890.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_feat_knowledge_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2410,-8 2410,-1903.2 3780,-1903.2 3780,-8 2410,-8"/>
<text xml:space="preserve" text-anchor="start" x="2418" y="-1890.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;002&#45;F 知识运营能力</text>
</g>
<!-- src_wechatcallback -->
<g id="node1" class="node">
<title>src_wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1007.02,-1842 676.98,-1842 676.98,-1662 1007.02,-1662 1007.02,-1842"/>
<text xml:space="preserve" text-anchor="start" x="731.41" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="735.72" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="741.98" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node2" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1007.02,-1519.2 676.98,-1519.2 676.98,-1339.2 1007.02,-1339.2 1007.02,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="756.42" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="717.8" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="773.24" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_answerloop -->
<g id="node3" class="node">
<title>src_answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="865.64,-1196.4 476.36,-1196.4 476.36,-1016.4 865.64,-1016.4 865.64,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="577.08" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="516.36" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="600.15" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- src_handoffservice -->
<g id="node4" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1402.38,-1196.4 975.62,-1196.4 975.62,-1016.4 1402.38,-1016.4 1402.38,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1103.42" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="1015.62" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- src_replypolicy -->
<g id="node5" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.02,-873.6 47.98,-873.6 47.98,-693.6 378.02,-693.6 378.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="135.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="91.31" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="144.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node6" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="860.29,-873.6 487.71,-873.6 487.71,-693.6 860.29,-693.6 860.29,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="551.19" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="527.71" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="617.74" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- src_store -->
<g id="node7" class="node">
<title>src_store</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1407.79,-873.6 970.21,-873.6 970.21,-693.6 1407.79,-693.6 1407.79,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1111.75" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1010.21" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- src_integrationroutes -->
<g id="node8" class="node">
<title>src_integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1866.02,-1842 1535.98,-1842 1535.98,-1662 1866.02,-1662 1866.02,-1842"/>
<text xml:space="preserve" text-anchor="start" x="1607.08" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="1591.79" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="1625.99" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- src_knowledgealert -->
<g id="node9" class="node">
<title>src_knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1871.71,-1519.2 1518.29,-1519.2 1518.29,-1339.2 1871.71,-1339.2 1871.71,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="1617.75" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="1558.29" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1613.73" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- src_ragflowprobe -->
<g id="node10" class="node">
<title>src_ragflowprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2362.45,-1519.2 1981.55,-1519.2 1981.55,-1339.2 2362.45,-1339.2 2362.45,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="2032.52" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="2021.55" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="2052.4" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- src_evaluationgate -->
<g id="node11" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1882.02,-1196.4 1551.98,-1196.4 1551.98,-1016.4 1882.02,-1016.4 1882.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1639.75" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="1608.21" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="1604.48" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- src_operatorui -->
<g id="node12" class="node">
<title>src_operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2338.12,-1842 1983.88,-1842 1983.88,-1662 2338.12,-1662 2338.12,-1842"/>
<text xml:space="preserve" text-anchor="start" x="2058.75" y="-1755" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="2023.88" y="-1732" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- src_storealert -->
<g id="node13" class="node">
<title>src_storealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1944.38,-873.6 1517.62,-873.6 1517.62,-693.6 1944.38,-693.6 1944.38,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1637.08" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="1557.62" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- src_materialroutes -->
<g id="node14" class="node">
<title>src_materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2848.21,-1842 2449.79,-1842 2449.79,-1662 2848.21,-1662 2848.21,-1842"/>
<text xml:space="preserve" text-anchor="start" x="2571.75" y="-1755" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;201 素材路由</text>
<text xml:space="preserve" text-anchor="start" x="2489.79" y="-1732" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 美妆素材接入接口。</text>
</g>
<!-- src_materialbatch -->
<g id="node15" class="node">
<title>src_materialbatch</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3300.28,-1842 2957.72,-1842 2957.72,-1662 3300.28,-1662 3300.28,-1842"/>
<text xml:space="preserve" text-anchor="start" x="3043.42" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;204 素材批处理</text>
<text xml:space="preserve" text-anchor="start" x="2997.72" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;batch&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="3085.24" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">批量素材接入。</text>
</g>
<!-- src_knowledgeroutes -->
<g id="node16" class="node">
<title>src_knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3740.02,-1842 3409.98,-1842 3409.98,-1662 3740.02,-1662 3740.02,-1842"/>
<text xml:space="preserve" text-anchor="start" x="3489.42" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;202 知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="3464.95" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="3481.23" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口。</text>
</g>
<!-- src_materialservice -->
<g id="node17" class="node">
<title>src_materialservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3248.28,-550.8 2855.72,-550.8 2855.72,-370.8 3248.28,-370.8 3248.28,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2974.75" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;203 素材服务</text>
<text xml:space="preserve" text-anchor="start" x="2895.72" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 素材接入规则。</text>
</g>
<!-- src_knowledgescan -->
<g id="node18" class="node">
<title>src_knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3735.96,-1519.2 3380.04,-1519.2 3380.04,-1339.2 3735.96,-1339.2 3735.96,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="3480.75" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;206 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="3420.04" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="3514.24" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识。</text>
</g>
<!-- src_governance -->
<g id="node19" class="node">
<title>src_governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3739.98,-1196.4 3354.02,-1196.4 3354.02,-1016.4 3739.98,-1016.4 3739.98,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="3469.75" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;207 知识治理</text>
<text xml:space="preserve" text-anchor="start" x="3394.02" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="3488.66" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 发布决策与治理。</text>
</g>
<!-- src_knowledgesync -->
<g id="node20" class="node">
<title>src_knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3724.54,-873.6 3369.46,-873.6 3369.46,-693.6 3724.54,-693.6 3724.54,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="3469.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;208 知识同步</text>
<text xml:space="preserve" text-anchor="start" x="3409.46" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="3450.32" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到 RAGFlow。</text>
</g>
<!-- src_lifecycle -->
<g id="node21" class="node">
<title>src_lifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3735.79,-550.8 3358.21,-550.8 3358.21,-370.8 3735.79,-370.8 3735.79,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="3436.41" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;209 知识生命周期视图</text>
<text xml:space="preserve" text-anchor="start" x="3398.21" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;lifecycle&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="3490.74" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识的晋升与下线。</text>
</g>
<!-- src_documentregistry -->
<g id="node22" class="node">
<title>src_documentregistry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3413.89,-228 3022.11,-228 3022.11,-48 3413.89,-48 3413.89,-228"/>
<text xml:space="preserve" text-anchor="start" x="3132.42" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;205 文档登记簿</text>
<text xml:space="preserve" text-anchor="start" x="3062.11" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;document&#45;registry.js —</text>
<text xml:space="preserve" text-anchor="start" x="3155.49" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">跟踪素材与文档标识。</text>
</g>
<!-- src_wechatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge1" class="edge">
<title>src_wechatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M842,-1662.07C842,-1620.87 842,-1571.76 842,-1529.37"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="844.63,-1529.56 842,-1522.06 839.38,-1529.56 844.63,-1529.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="842,-1579.2 842,-1602 929.68,-1602 929.68,-1579.2 842,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="845" y="-1585" font-family="Arial" font-size="14.00" fill="#bbfcd3">分发归一化消息</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_answerloop -->
<g id="edge7" class="edge">
<title>src_answerorchestrator&#45;&gt;src_answerloop</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M794.59,-1339.27C772.45,-1297.72 746.02,-1248.13 723.29,-1205.5"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="725.62,-1204.28 719.77,-1198.9 720.99,-1206.75 725.62,-1204.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="761.63,-1256.4 761.63,-1279.2 814.3,-1279.2 814.3,-1256.4 761.63,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="764.63" y="-1262.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_handoffservice -->
<g id="edge8" class="edge">
<title>src_answerorchestrator&#45;&gt;src_handoffservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M938.2,-1339.27C983.89,-1297.02 1038.58,-1246.47 1085.21,-1203.36"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1086.97,-1205.3 1090.69,-1198.28 1083.4,-1201.45 1086.97,-1205.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1025.9,-1256.4 1025.9,-1279.2 1125.26,-1279.2 1125.26,-1256.4 1025.9,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1028.9" y="-1262.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- src_answerloop&#45;&gt;src_replypolicy -->
<g id="edge12" class="edge">
<title>src_answerloop&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M544.03,-1016.47C483.1,-973.79 410.05,-922.62 348.1,-879.23"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="349.95,-877.32 342.3,-875.17 346.94,-881.62 349.95,-877.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="455.73,-933.6 455.73,-956.4 520.08,-956.4 520.08,-933.6 455.73,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="458.73" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- src_answerloop&#45;&gt;src_ragflowknowledge -->
<g id="edge13" class="edge">
<title>src_answerloop&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M671.83,-1016.47C672.22,-975.27 672.68,-926.16 673.07,-883.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="675.7,-883.98 673.14,-876.46 670.45,-883.93 675.7,-883.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="672.59,-933.6 672.59,-956.4 748.6,-956.4 748.6,-933.6 672.59,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="675.59" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- src_handoffservice&#45;&gt;src_store -->
<g id="edge14" class="edge">
<title>src_handoffservice&#45;&gt;src_store</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1189,-1016.47C1189,-975.27 1189,-926.16 1189,-883.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1191.63,-883.96 1189,-876.46 1186.38,-883.96 1191.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1189,-933.6 1189,-956.4 1253.34,-956.4 1253.34,-933.6 1189,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1192" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_knowledgealert -->
<g id="edge2" class="edge">
<title>src_integrationroutes&#45;&gt;src_knowledgealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1699.34,-1662.07C1698.57,-1620.87 1697.65,-1571.76 1696.85,-1529.37"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1699.48,-1529.51 1696.72,-1522.06 1694.23,-1529.6 1699.48,-1529.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1698.18,-1579.2 1698.18,-1602 1774.19,-1602 1774.19,-1579.2 1698.18,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="1701.18" y="-1585" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_ragflowprobe -->
<g id="edge3" class="edge">
<title>src_integrationroutes&#45;&gt;src_ragflowprobe</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1831.57,-1662.07C1894.24,-1619.39 1969.36,-1568.22 2033.07,-1524.83"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2034.36,-1527.13 2039.08,-1520.73 2031.4,-1522.79 2034.36,-1527.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1950.62,-1579.2 1950.62,-1602 2038.31,-1602 2038.31,-1579.2 1950.62,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="1953.62" y="-1585" font-family="Arial" font-size="14.00" fill="#bbfcd3">探测数据集状态</text>
</g>
<!-- src_knowledgealert&#45;&gt;src_evaluationgate -->
<g id="edge9" class="edge">
<title>src_knowledgealert&#45;&gt;src_evaluationgate</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1701.1,-1339.27C1703.92,-1298.07 1707.29,-1248.96 1710.2,-1206.57"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1712.81,-1206.91 1710.7,-1199.25 1707.57,-1206.55 1712.81,-1206.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1706.66,-1256.4 1706.66,-1279.2 1782.67,-1279.2 1782.67,-1256.4 1706.66,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1709.66" y="-1262.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- src_evaluationgate&#45;&gt;src_storealert -->
<g id="edge15" class="edge">
<title>src_evaluationgate&#45;&gt;src_storealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1720.88,-1016.47C1722.68,-975.27 1724.82,-926.16 1726.67,-883.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1729.29,-884.06 1726.99,-876.45 1724.04,-883.83 1729.29,-884.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1724.42,-933.6 1724.42,-956.4 1800.43,-956.4 1800.43,-933.6 1724.42,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1727.42" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
<!-- src_materialroutes&#45;&gt;src_materialservice -->
<g id="edge4" class="edge">
<title>src_materialroutes&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2685.36,-1662.06C2708.06,-1598.56 2733,-1510.51 2733,-1430.2 2733,-1430.2 2733,-1430.2 2733,-782.6 2733,-687.87 2803.8,-611.2 2878.69,-556.59"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2879.87,-558.98 2884.43,-552.48 2876.81,-554.71 2879.87,-558.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2733,-1095 2733,-1117.8 2785.68,-1117.8 2785.68,-1095 2733,-1095"/>
<text xml:space="preserve" text-anchor="start" x="2736" y="-1100.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">接收素材</text>
</g>
<!-- src_materialbatch&#45;&gt;src_materialservice -->
<g id="edge5" class="edge">
<title>src_materialbatch&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3112.77,-1662.14C3102.45,-1597.93 3091,-1509 3091,-1430.2 3091,-1430.2 3091,-1430.2 3091,-782.6 3091,-707.93 3080.46,-624.19 3070.34,-561"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3072.93,-560.61 3069.14,-553.63 3067.75,-561.45 3072.93,-560.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3091,-1095 3091,-1117.8 3143.68,-1117.8 3143.68,-1095 3091,-1095"/>
<text xml:space="preserve" text-anchor="start" x="3094" y="-1100.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">批量接入</text>
</g>
<!-- src_knowledgeroutes&#45;&gt;src_knowledgescan -->
<g id="edge6" class="edge">
<title>src_knowledgeroutes&#45;&gt;src_knowledgescan</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3570.29,-1662.07C3568.1,-1620.87 3565.5,-1571.76 3563.26,-1529.37"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3565.89,-1529.4 3562.87,-1522.05 3560.64,-1529.68 3565.89,-1529.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3567.01,-1579.2 3567.01,-1602 3619.69,-1602 3619.69,-1579.2 3567.01,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="3570.01" y="-1585" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- src_materialservice&#45;&gt;src_documentregistry -->
<g id="edge10" class="edge">
<title>src_materialservice&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3098.02,-370.87C3119.52,-329.32 3145.18,-279.73 3167.24,-237.1"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3169.53,-238.39 3170.64,-230.52 3164.87,-235.97 3169.53,-238.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3139.98,-288 3139.98,-310.8 3192.65,-310.8 3192.65,-288 3139.98,-288"/>
<text xml:space="preserve" text-anchor="start" x="3142.98" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">登记文档</text>
</g>
<!-- src_knowledgescan&#45;&gt;src_governance -->
<g id="edge11" class="edge">
<title>src_knowledgescan&#45;&gt;src_governance</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3554.95,-1339.27C3553.54,-1298.07 3551.85,-1248.96 3550.4,-1206.57"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3553.03,-1206.66 3550.15,-1199.25 3547.78,-1206.84 3553.03,-1206.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3552.83,-1256.4 3552.83,-1279.2 3605.51,-1279.2 3605.51,-1256.4 3552.83,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="3555.83" y="-1262.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交候选</text>
</g>
<!-- src_governance&#45;&gt;src_knowledgesync -->
<g id="edge16" class="edge">
<title>src_governance&#45;&gt;src_knowledgesync</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3547,-1016.47C3547,-975.27 3547,-926.16 3547,-883.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3549.63,-883.96 3547,-876.46 3544.38,-883.96 3549.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3547,-933.6 3547,-956.4 3611.34,-956.4 3611.34,-933.6 3547,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="3550" y="-939.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">批准后推送</text>
</g>
<!-- src_knowledgesync&#45;&gt;src_lifecycle -->
<g id="edge17" class="edge">
<title>src_knowledgesync&#45;&gt;src_lifecycle</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3547,-693.67C3547,-652.47 3547,-603.36 3547,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3549.63,-561.16 3547,-553.66 3544.38,-561.16 3549.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3547,-610.8 3547,-633.6 3623.01,-633.6 3623.01,-610.8 3547,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="3550" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">更新生命周期</text>
</g>
<!-- src_lifecycle&#45;&gt;src_documentregistry -->
<g id="edge18" class="edge">
<title>src_lifecycle&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3455.79,-370.87C3412.47,-328.62 3360.62,-278.07 3316.41,-234.96"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3318.47,-233.3 3311.27,-229.94 3314.8,-237.06 3318.47,-233.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3392.36,-288 3392.36,-310.8 3456.71,-310.8 3456.71,-288 3392.36,-288"/>
<text xml:space="preserve" text-anchor="start" x="3395.36" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
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
`;case`pano-api`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="810pt"
 viewBox="0.00 0.00 350.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- lane_edge -->
<g id="node1" class="node">
<title>lane_edge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
<!-- lane_edge_1 -->
<g id="node2" class="node">
<title>lane_edge_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-382" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
<!-- lane_edge_2 -->
<g id="node3" class="node">
<title>lane_edge_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
<!-- lane_edge&#45;&gt;lane_edge_1 -->
<!-- lane_edge_1&#45;&gt;lane_edge_2 -->
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
<svg width="520pt" height="210pt"
 viewBox="0.00 0.00 520.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- i_goal -->
<g id="node1" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="490.2,-180 0,-180 0,0 490.2,0 490.2,-180"/>
<text xml:space="preserve" text-anchor="start" x="186.19" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;101 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。</text>
</g>
</g>
</svg>
`;case`chain001F-i-step`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
<text xml:space="preserve" text-anchor="start" x="148.68" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;141 业务目标</text>
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
<svg width="883pt" height="210pt"
 viewBox="0.00 0.00 883.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="852.77,-180 0,-180 0,0 852.77,0 852.77,-180"/>
<text xml:space="preserve" text-anchor="start" x="281.35" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="407.63" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
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
`;case`chain002F-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="858pt" height="810pt"
 viewBox="0.00 0.00 858.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- us_scan -->
<g id="node1" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="827.77,-780 0,-780 0,-600 827.77,-600 827.77,-780"/>
<text xml:space="preserve" text-anchor="start" x="268.84" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- us_govern -->
<g id="node2" class="node">
<title>us_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="796.51,-480 31.26,-480 31.26,-300 796.51,-300 796.51,-480"/>
<text xml:space="preserve" text-anchor="start" x="260.51" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="51.31" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- us_alert -->
<g id="node3" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="796.51,-180 31.26,-180 31.26,0 796.51,0 796.51,-180"/>
<text xml:space="preserve" text-anchor="start" x="285.51" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="51.31" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- us_scan&#45;&gt;us_govern -->
<!-- us_govern&#45;&gt;us_alert -->
</g>
</svg>
`;case`chain002F-f`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2609pt" height="533pt"
 viewBox="0.00 0.00 2609.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- us_scan -->
<g id="node1" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="827.77,-502.8 0,-502.8 0,-322.8 827.77,-322.8 827.77,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="268.84" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- f_ingest -->
<g id="node2" class="node">
<title>f_ingest</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="573.9,-180 253.86,-180 253.86,0 573.9,0 573.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="334.97" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;201 素材接入能力</text>
<text xml:space="preserve" text-anchor="start" x="288.86" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收素材并登记文档标识，支持单条与批量。</text>
</g>
<!-- us_govern -->
<g id="node3" class="node">
<title>us_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1703.51,-502.8 938.26,-502.8 938.26,-322.8 1703.51,-322.8 1703.51,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1167.51" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="958.31" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- f_govern -->
<g id="node4" class="node">
<title>f_govern</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1918.9,-180 1598.86,-180 1598.86,0 1918.9,0 1918.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="1679.97" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;202 知识治理能力</text>
<text xml:space="preserve" text-anchor="start" x="1652.61" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">候选知识的扫描、决策、晋升与下线。</text>
</g>
<!-- us_alert -->
<g id="node5" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2578.51,-502.8 1813.26,-502.8 1813.26,-322.8 2578.51,-322.8 2578.51,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2067.51" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="1833.31" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- us_scan&#45;&gt;f_ingest -->
<g id="edge1" class="edge">
<title>us_scan&#45;&gt;f_ingest</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M413.88,-322.87C413.88,-281.67 413.88,-232.56 413.88,-190.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="416.51,-190.36 413.88,-182.86 411.26,-190.36 416.51,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="413.88,-240 413.88,-262.8 443.22,-262.8 443.22,-240 413.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="416.88" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_govern&#45;&gt;f_govern -->
<g id="edge2" class="edge">
<title>us_govern&#45;&gt;f_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1442.31,-322.87C1500.46,-280.27 1570.15,-229.23 1629.32,-185.89"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1630.66,-188.17 1635.16,-181.62 1627.56,-183.93 1630.66,-188.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1553.02,-240 1553.02,-262.8 1582.35,-262.8 1582.35,-240 1553.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="1556.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_alert&#45;&gt;f_govern -->
<g id="edge3" class="edge">
<title>us_alert&#45;&gt;f_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2074.73,-322.87C2016.71,-280.27 1947.18,-229.23 1888.15,-185.89"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1889.93,-183.94 1882.33,-181.62 1886.82,-188.18 1889.93,-183.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1990.49,-240 1990.49,-262.8 2019.82,-262.8 2019.82,-240 1990.49,-240"/>
<text xml:space="preserve" text-anchor="start" x="1993.49" y="-245.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
</g>
</svg>
`;case`chain002F-i-goal`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
<text xml:space="preserve" text-anchor="start" x="148.68" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;201 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</text>
</g>
</g>
</svg>
`;case`chain002F-i-step`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="858pt" height="210pt"
 viewBox="0.00 0.00 858.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- us_scan -->
<g id="node1" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="827.77,-180 0,-180 0,0 827.77,0 827.77,-180"/>
<text xml:space="preserve" text-anchor="start" x="268.84" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
</g>
</svg>
`;case`chain002F-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="916pt" height="510pt"
 viewBox="0.00 0.00 916.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- ui_console -->
<g id="node1" class="node">
<title>ui_console</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="654.4,-480 231.3,-480 231.3,-300 654.4,-300 654.4,-480"/>
<text xml:space="preserve" text-anchor="start" x="368.38" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;201 运营控制台</text>
<text xml:space="preserve" text-anchor="start" x="255.31" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</text>
</g>
<!-- ui_information -->
<g id="node2" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="885.7,-180 0,-180 0,0 885.7,0 885.7,-180"/>
<text xml:space="preserve" text-anchor="start" x="343.38" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;202 知识运营信息设计</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</text>
</g>
<!-- ui_console&#45;&gt;ui_information -->
</g>
</svg>
`;case`srcdir002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1372pt" height="1824pt"
 viewBox="0.00 0.00 1372.00 1824.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1809.05)">
<!-- src_materialroutes -->
<g id="node1" class="node">
<title>src_materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="398.41,-1794 0,-1794 0,-1614 398.41,-1614 398.41,-1794"/>
<text xml:space="preserve" text-anchor="start" x="121.96" y="-1707" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;201 素材路由</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-1684" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 美妆素材接入接口。</text>
</g>
<!-- src_materialservice -->
<g id="node2" class="node">
<title>src_materialservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="850.48,-502.8 457.93,-502.8 457.93,-322.8 850.48,-322.8 850.48,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="576.96" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;203 素材服务</text>
<text xml:space="preserve" text-anchor="start" x="497.93" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 素材接入规则。</text>
</g>
<!-- src_materialbatch -->
<g id="node3" class="node">
<title>src_materialbatch</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="850.49,-1794 507.93,-1794 507.93,-1614 850.49,-1614 850.49,-1794"/>
<text xml:space="preserve" text-anchor="start" x="593.63" y="-1716" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;204 素材批处理</text>
<text xml:space="preserve" text-anchor="start" x="547.93" y="-1693" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;batch&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="635.45" y="-1675" font-family="Arial" font-size="15.00" fill="#bfdbfe">批量素材接入。</text>
</g>
<!-- src_knowledgeroutes -->
<g id="node4" class="node">
<title>src_knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1314.23,-1794 984.18,-1794 984.18,-1614 1314.23,-1614 1314.23,-1794"/>
<text xml:space="preserve" text-anchor="start" x="1063.63" y="-1716" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;202 知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="1039.16" y="-1693" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="1055.44" y="-1675" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口。</text>
</g>
<!-- src_knowledgescan -->
<g id="node5" class="node">
<title>src_knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1327.17,-1471.2 971.25,-1471.2 971.25,-1291.2 1327.17,-1291.2 1327.17,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1071.96" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;206 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="1011.25" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1105.45" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识。</text>
</g>
<!-- src_documentregistry -->
<g id="node6" class="node">
<title>src_documentregistry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1097.09,-180 705.32,-180 705.32,0 1097.09,0 1097.09,-180"/>
<text xml:space="preserve" text-anchor="start" x="815.63" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;205 文档登记簿</text>
<text xml:space="preserve" text-anchor="start" x="745.32" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;document&#45;registry.js —</text>
<text xml:space="preserve" text-anchor="start" x="838.69" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">跟踪素材与文档标识。</text>
</g>
<!-- src_governance -->
<g id="node7" class="node">
<title>src_governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1342.18,-1148.4 956.23,-1148.4 956.23,-968.4 1342.18,-968.4 1342.18,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1071.96" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;207 知识治理</text>
<text xml:space="preserve" text-anchor="start" x="996.23" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="1090.86" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 发布决策与治理。</text>
</g>
<!-- src_knowledgesync -->
<g id="node8" class="node">
<title>src_knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1326.74,-825.6 971.67,-825.6 971.67,-645.6 1326.74,-645.6 1326.74,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1071.96" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;208 知识同步</text>
<text xml:space="preserve" text-anchor="start" x="1011.67" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1052.52" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到 RAGFlow。</text>
</g>
<!-- src_lifecycle -->
<g id="node9" class="node">
<title>src_lifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1338,-502.8 960.42,-502.8 960.42,-322.8 1338,-322.8 1338,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1038.62" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;209 知识生命周期视图</text>
<text xml:space="preserve" text-anchor="start" x="1000.42" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;lifecycle&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1092.95" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识的晋升与下线。</text>
</g>
<!-- src_materialroutes&#45;&gt;src_materialservice -->
<g id="edge1" class="edge">
<title>src_materialroutes&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M199.21,-1614.15C199.21,-1549.75 199.21,-1460.59 199.21,-1382.2 199.21,-1382.2 199.21,-1382.2 199.21,-734.6 199.21,-603.09 327.74,-520.75 448.18,-472.46"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="449.11,-474.92 455.13,-469.73 447.19,-470.03 449.11,-474.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="199.21,-1047 199.21,-1069.8 251.88,-1069.8 251.88,-1047 199.21,-1047"/>
<text xml:space="preserve" text-anchor="start" x="202.21" y="-1052.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">接收素材</text>
</g>
<!-- src_materialservice&#45;&gt;src_documentregistry -->
<g id="edge4" class="edge">
<title>src_materialservice&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M722.68,-322.87C754.94,-280.97 793.49,-230.9 826.5,-188.03"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="828.47,-189.77 830.97,-182.23 824.31,-186.57 828.47,-189.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="785.11,-240 785.11,-262.8 837.79,-262.8 837.79,-240 785.11,-240"/>
<text xml:space="preserve" text-anchor="start" x="788.11" y="-245.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">登记文档</text>
</g>
<!-- src_materialbatch&#45;&gt;src_materialservice -->
<g id="edge2" class="edge">
<title>src_materialbatch&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M679.21,-1614.15C679.21,-1549.75 679.21,-1460.59 679.21,-1382.2 679.21,-1382.2 679.21,-1382.2 679.21,-734.6 679.21,-660.12 672.43,-576.2 665.93,-512.88"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="668.55,-512.7 665.16,-505.52 663.33,-513.25 668.55,-512.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="679.21,-1047 679.21,-1069.8 731.88,-1069.8 731.88,-1047 679.21,-1047"/>
<text xml:space="preserve" text-anchor="start" x="682.21" y="-1052.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">批量接入</text>
</g>
<!-- src_knowledgeroutes&#45;&gt;src_knowledgescan -->
<g id="edge3" class="edge">
<title>src_knowledgeroutes&#45;&gt;src_knowledgescan</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1149.21,-1614.07C1149.21,-1572.87 1149.21,-1523.76 1149.21,-1481.37"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1151.83,-1481.56 1149.21,-1474.06 1146.58,-1481.56 1151.83,-1481.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.21,-1531.2 1149.21,-1554 1201.88,-1554 1201.88,-1531.2 1149.21,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1152.21" y="-1537" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- src_knowledgescan&#45;&gt;src_governance -->
<g id="edge5" class="edge">
<title>src_knowledgescan&#45;&gt;src_governance</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1149.21,-1291.27C1149.21,-1250.07 1149.21,-1200.96 1149.21,-1158.57"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1151.83,-1158.76 1149.21,-1151.26 1146.58,-1158.76 1151.83,-1158.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.21,-1208.4 1149.21,-1231.2 1201.88,-1231.2 1201.88,-1208.4 1149.21,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1152.21" y="-1214.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交候选</text>
</g>
<!-- src_governance&#45;&gt;src_knowledgesync -->
<g id="edge6" class="edge">
<title>src_governance&#45;&gt;src_knowledgesync</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1149.21,-968.47C1149.21,-927.27 1149.21,-878.16 1149.21,-835.77"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1151.83,-835.96 1149.21,-828.46 1146.58,-835.96 1151.83,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.21,-885.6 1149.21,-908.4 1213.55,-908.4 1213.55,-885.6 1149.21,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1152.21" y="-891.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">批准后推送</text>
</g>
<!-- src_knowledgesync&#45;&gt;src_lifecycle -->
<g id="edge7" class="edge">
<title>src_knowledgesync&#45;&gt;src_lifecycle</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1149.21,-645.67C1149.21,-604.47 1149.21,-555.36 1149.21,-512.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1151.83,-513.16 1149.21,-505.66 1146.58,-513.16 1151.83,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.21,-562.8 1149.21,-585.6 1225.22,-585.6 1225.22,-562.8 1149.21,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1152.21" y="-568.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">更新生命周期</text>
</g>
<!-- src_lifecycle&#45;&gt;src_documentregistry -->
<g id="edge8" class="edge">
<title>src_lifecycle&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1080.45,-322.87C1048.07,-280.97 1009.36,-230.9 976.21,-188.03"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="978.39,-186.55 971.73,-182.22 974.24,-189.76 978.39,-186.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1032.64,-240 1032.64,-262.8 1096.99,-262.8 1096.99,-240 1032.64,-240"/>
<text xml:space="preserve" text-anchor="start" x="1035.64" y="-245.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
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
`;case`erm002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`api002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="210pt"
 viewBox="0.00 0.00 350.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- lane_edge -->
<g id="node1" class="node">
<title>lane_edge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="101.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
</g>
</svg>
`;case`seq001F-answer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2299pt" height="925pt"
 viewBox="0.00 0.00 2299.00 925.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1709.86,-512 1291.71,-512 1291.71,-332 1709.86,-332 1709.86,-512"/>
<text xml:space="preserve" text-anchor="start" x="1391.86" y="-425" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;201 应答编排（泳道引用）</text>
<text xml:space="preserve" text-anchor="start" x="1311.76" y="-402" font-family="Arial" font-size="15.00" fill="#bfdbfe">泳道中的编排环节，具体步骤见 US&#45;001 容器下的 I&#45;001~I&#45;006。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2263.92,-512 1943.88,-512 1943.88,-332 2263.92,-332 2263.92,-512"/>
<text xml:space="preserve" text-anchor="start" x="2061.12" y="-425" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2047.64" y="-402" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node5" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2268.93,-180 1938.88,-180 1938.88,0 2268.93,0 2268.93,-180"/>
<text xml:space="preserve" text-anchor="start" x="2018.32" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1979.71" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="2035.14" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_replypolicy -->
<g id="node6" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2268.93,-832 1938.88,-832 1938.88,-652 2268.93,-652 2268.93,-832"/>
<text xml:space="preserve" text-anchor="start" x="2026.66" y="-754" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="1982.21" y="-731" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="2035.14" y="-713" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1095.58,-295.18C1159.47,-315.23 1228.81,-336.98 1291.72,-356.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1096.62,-292.75 1088.68,-293.01 1095.05,-297.76 1096.62,-292.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.03,-338.29 1149.03,-371.09 1173.03,-371.09 1173.03,-338.29 1149.03,-338.29"/>
<text xml:space="preserve" text-anchor="start" x="1157.14" y="-351.49" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1176.03,-338.29 1176.03,-371.09 1228.71,-371.09 1228.71,-338.29 1176.03,-338.29"/>
<text xml:space="preserve" text-anchor="start" x="1179.03" y="-349.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回答复</text>
</g>
<!-- api_chatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge2" class="edge">
<title>api_chatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1085.97,-201.52C1324.94,-175.32 1707.08,-133.41 1928.57,-109.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1928.82,-111.73 1935.99,-108.3 1928.25,-106.51 1928.82,-111.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1443.44,-180.48 1443.44,-213.28 1467.44,-213.28 1467.44,-180.48 1443.44,-180.48"/>
<text xml:space="preserve" text-anchor="start" x="1451.55" y="-193.68" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1470.44,-180.48 1470.44,-213.28 1558.13,-213.28 1558.13,-180.48 1470.44,-180.48"/>
<text xml:space="preserve" text-anchor="start" x="1473.44" y="-191.28" font-family="Arial" font-size="14.00" fill="#c9c9c9">分发归一化消息</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1709.5,-422C1782.76,-422 1864.18,-422 1933.86,-422"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1933.52,-424.63 1941.02,-422 1933.52,-419.38 1933.52,-424.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1772.86,-425 1772.86,-457.8 1796.86,-457.8 1796.86,-425 1772.86,-425"/>
<text xml:space="preserve" text-anchor="start" x="1780.97" y="-438.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1799.86,-425 1799.86,-457.8 1875.88,-457.8 1875.88,-425 1799.86,-425"/>
<text xml:space="preserve" text-anchor="start" x="1802.86" y="-435.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索候选知识</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge5" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1719.75,-360.26C1771.79,-352.09 1827.23,-348.77 1878.88,-356.2 1900.24,-359.27 1922.41,-363.91 1944.13,-369.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1719.35,-357.67 1712.37,-361.47 1720.2,-362.85 1719.35,-357.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1772.86,-359.2 1772.86,-392 1796.86,-392 1796.86,-359.2 1772.86,-359.2"/>
<text xml:space="preserve" text-anchor="start" x="1780.97" y="-372.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1799.86,-359.2 1799.86,-392 1875.88,-392 1875.88,-359.2 1799.86,-359.2"/>
<text xml:space="preserve" text-anchor="start" x="1802.86" y="-370" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选知识</text>
</g>
<!-- step_answerlane&#45;&gt;src_answerorchestrator -->
<g id="edge3" class="edge">
<title>step_answerlane&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1673.55,-327.14C1757.32,-280.87 1857.56,-225.51 1940.1,-179.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1672.4,-324.77 1667.11,-330.69 1674.94,-329.36 1672.4,-324.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1784.53,-268.95 1784.53,-301.75 1808.53,-301.75 1808.53,-268.95 1784.53,-268.95"/>
<text xml:space="preserve" text-anchor="start" x="1792.64" y="-282.15" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1811.53,-268.95 1811.53,-301.75 1864.21,-301.75 1864.21,-268.95 1811.53,-268.95"/>
<text xml:space="preserve" text-anchor="start" x="1814.53" y="-279.75" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求应答</text>
</g>
<!-- step_answerlane&#45;&gt;src_replypolicy -->
<g id="edge6" class="edge">
<title>step_answerlane&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1582.17,-511.87C1631.68,-562.05 1699.07,-621.78 1769.86,-659 1818.79,-684.73 1876,-702.71 1929.05,-715.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1928.4,-717.72 1936.3,-716.84 1929.58,-712.61 1928.4,-717.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1778.7,-703.57 1778.7,-736.37 1802.7,-736.37 1802.7,-703.57 1778.7,-703.57"/>
<text xml:space="preserve" text-anchor="start" x="1786.81" y="-716.77" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1805.7,-703.57 1805.7,-736.37 1870.04,-736.37 1870.04,-703.57 1805.7,-703.57"/>
<text xml:space="preserve" text-anchor="start" x="1808.7" y="-714.37" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验置信度</text>
</g>
<!-- step_answerlane&#45;&gt;src_replypolicy -->
<g id="edge7" class="edge">
<title>step_answerlane&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1719.25,-513.56C1772.3,-537.85 1828.31,-565.16 1878.88,-593.2 1910.83,-610.92 1944.18,-631.7 1975.09,-652.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1720.4,-511.2 1712.49,-510.48 1718.22,-515.98 1720.4,-511.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1784.53,-596.2 1784.53,-629 1808.53,-629 1808.53,-596.2 1784.53,-596.2"/>
<text xml:space="preserve" text-anchor="start" x="1792.64" y="-609.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1811.53,-596.2 1811.53,-629 1864.21,-629 1864.21,-596.2 1811.53,-596.2"/>
<text xml:space="preserve" text-anchor="start" x="1814.53" y="-607" font-family="Arial" font-size="14.00" fill="#c9c9c9">达标放行</text>
</g>
</g>
</svg>
`;case`seq001F-branch-low-confidence-src`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2183pt" height="210pt"
 viewBox="0.00 0.00 2183.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<svg width="3026pt" height="509pt"
 viewBox="0.00 0.00 3026.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1548.4,-334 1149.44,-334 1149.44,-154 1548.4,-154 1548.4,-334"/>
<text xml:space="preserve" text-anchor="start" x="1240" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;151 场景判定（泳道引用）</text>
<text xml:space="preserve" text-anchor="start" x="1169.5" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">泳道中的判定环节，具体步骤见各 US 容器下的 I&#45;11x~I&#45;13x。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2129.61,-479 1801.94,-479 1801.94,-299 2129.61,-299 2129.61,-479"/>
<text xml:space="preserve" text-anchor="start" x="1922.99" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1821.99" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务，超时或不可用即触发本链场景。</text>
</g>
<!-- src_evaluationgate -->
<g id="node5" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2130.8,-180 1800.75,-180 1800.75,0 2130.8,0 2130.8,-180"/>
<text xml:space="preserve" text-anchor="start" x="1888.53" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="1856.98" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="1853.25" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- ui_notice -->
<g id="node6" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2995.46,-180 2359.81,-180 2359.81,0 2995.46,0 2995.46,-180"/>
<text xml:space="preserve" text-anchor="start" x="2594.83" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="2383.83" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M943.62,-244C1006.31,-244 1075.89,-244 1139.42,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.03,-246.63 1146.53,-244 1139.03,-241.38 1139.03,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1006.77,-247 1006.77,-279.8 1030.77,-279.8 1030.77,-247 1006.77,-247"/>
<text xml:space="preserve" text-anchor="start" x="1014.87" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1033.77,-247 1033.77,-279.8 1086.44,-279.8 1086.44,-247 1033.77,-247"/>
<text xml:space="preserve" text-anchor="start" x="1036.77" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1548.27,-290.78C1626.78,-309.29 1716.2,-330.38 1792,-348.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1791.28,-350.78 1799.18,-349.95 1792.48,-345.67 1791.28,-350.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1611.4,-336.75 1611.4,-369.55 1635.4,-369.55 1635.4,-336.75 1611.4,-336.75"/>
<text xml:space="preserve" text-anchor="start" x="1619.5" y="-349.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1638.4,-336.75 1638.4,-369.55 1737.75,-369.55 1737.75,-336.75 1638.4,-336.75"/>
<text xml:space="preserve" text-anchor="start" x="1641.4" y="-347.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测数据集可用性</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1558.53,-220.65C1618.39,-219.91 1683.05,-224.98 1740.75,-242.2 1780.96,-254.2 1820.66,-275.99 1855.22,-299.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1558.67,-218.02 1551.22,-220.78 1558.76,-223.27 1558.67,-218.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1623.06,-245.2 1623.06,-278 1647.06,-278 1647.06,-245.2 1623.06,-245.2"/>
<text xml:space="preserve" text-anchor="start" x="1631.17" y="-258.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1650.06,-245.2 1650.06,-278 1726.08,-278 1726.08,-245.2 1650.06,-245.2"/>
<text xml:space="preserve" text-anchor="start" x="1653.06" y="-256" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回探测结论</text>
</g>
<!-- step_probelane&#45;&gt;src_evaluationgate -->
<g id="edge5" class="edge">
<title>step_probelane&#45;&gt;src_evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1548.37,-173.39C1568.53,-167.18 1588.79,-161.32 1608.4,-156.2 1667.25,-140.82 1732.46,-127.62 1790.84,-117.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1791,-119.78 1797.93,-115.88 1790.08,-114.61 1791,-119.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1623.06,-159.2 1623.06,-192 1647.06,-192 1647.06,-159.2 1623.06,-159.2"/>
<text xml:space="preserve" text-anchor="start" x="1631.17" y="-172.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1650.06,-159.2 1650.06,-192 1726.08,-192 1726.08,-159.2 1650.06,-159.2"/>
<text xml:space="preserve" text-anchor="start" x="1653.06" y="-170" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交发布判定</text>
</g>
<!-- src_evaluationgate&#45;&gt;ui_notice -->
<g id="edge6" class="edge">
<title>src_evaluationgate&#45;&gt;ui_notice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2130.52,-90C2195.96,-90 2273.76,-90 2349.82,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2349.53,-92.63 2357.03,-90 2349.53,-87.38 2349.53,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2193.8,-93 2193.8,-125.8 2217.8,-125.8 2217.8,-93 2193.8,-93"/>
<text xml:space="preserve" text-anchor="start" x="2201.9" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2220.8,-93 2220.8,-125.8 2296.81,-125.8 2296.81,-93 2220.8,-93"/>
<text xml:space="preserve" text-anchor="start" x="2223.8" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">下发场景提示</text>
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
<svg width="4880pt" height="654pt"
 viewBox="0.00 0.00 4880.00 654.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 639.05)">
<!-- actor_customer -->
<g id="node1" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="143.35" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- api_chatcallback -->
<g id="node2" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="975.22,-180 544.96,-180 544.96,0 975.22,0 975.22,-180"/>
<text xml:space="preserve" text-anchor="start" x="565.01" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="643.38" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="691.32" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- i_ask_normalize -->
<g id="node3" class="node">
<title>i_ask_normalize</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1631.92,-374 1204.23,-374 1204.23,-194 1631.92,-194 1631.92,-374"/>
<text xml:space="preserve" text-anchor="start" x="1350.83" y="-287" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 归一化提问</text>
<text xml:space="preserve" text-anchor="start" x="1224.29" y="-264" font-family="Arial" font-size="15.00" fill="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</text>
</g>
<!-- i_ask_retrieve -->
<g id="node4" class="node">
<title>i_ask_retrieve</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2299.45,-433 1849.26,-433 1849.26,-253 2299.45,-253 2299.45,-433"/>
<text xml:space="preserve" text-anchor="start" x="1998.77" y="-346" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;002 检索候选知识</text>
<text xml:space="preserve" text-anchor="start" x="1869.32" y="-323" font-family="Arial" font-size="15.00" fill="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</text>
</g>
<!-- i_ask_rank -->
<g id="node5" class="node">
<title>i_ask_rank</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2993.54,-624 2553.35,-624 2553.35,-444 2993.54,-444 2993.54,-624"/>
<text xml:space="preserve" text-anchor="start" x="2689.53" y="-537" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 候选排序与择优</text>
<text xml:space="preserve" text-anchor="start" x="2573.41" y="-514" font-family="Arial" font-size="15.00" fill="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</text>
</g>
<!-- i_ask_verify -->
<g id="node6" class="node">
<title>i_ask_verify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3696.94,-487 3222.56,-487 3222.56,-307 3696.94,-307 3696.94,-487"/>
<text xml:space="preserve" text-anchor="start" x="3392.5" y="-400" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;004 置信度校验</text>
<text xml:space="preserve" text-anchor="start" x="3242.61" y="-377" font-family="Arial" font-size="15.00" fill="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US&#45;002 的路径。</text>
</g>
<!-- i_ask_compose -->
<g id="node7" class="node">
<title>i_ask_compose</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4291.96,-351 3914.28,-351 3914.28,-171 4291.96,-171 4291.96,-351"/>
<text xml:space="preserve" text-anchor="start" x="4044.21" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;005 生成答复</text>
<text xml:space="preserve" text-anchor="start" x="3934.34" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</text>
</g>
<!-- i_ask_deliver -->
<g id="node8" class="node">
<title>i_ask_deliver</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4849.47,-180 4509.3,-180 4509.3,0 4849.47,0 4849.47,-180"/>
<text xml:space="preserve" text-anchor="start" x="4620.48" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;006 下发答复</text>
<text xml:space="preserve" text-anchor="start" x="4529.36" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</text>
</g>
<!-- ext_ragflow -->
<g id="node9" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2933.47,-334 2613.43,-334 2613.43,-154 2933.47,-154 2933.47,-334"/>
<text xml:space="preserve" text-anchor="start" x="2730.66" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2717.19" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- actor_customer&#45;&gt;api_chatcallback -->
<g id="edge1" class="edge">
<title>actor_customer&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.72,-90C385.52,-90 463.05,-90 534.52,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="534.49,-92.63 541.99,-90 534.49,-87.38 534.49,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="386.83,-93 386.83,-125.8 410.83,-125.8 410.83,-93 386.83,-93"/>
<text xml:space="preserve" text-anchor="start" x="394.93" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="413.83,-93 413.83,-125.8 478.17,-125.8 478.17,-93 413.83,-93"/>
<text xml:space="preserve" text-anchor="start" x="416.83" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">①提出问题</text>
</g>
<!-- actor_customer&#45;&gt;api_chatcallback -->
<g id="edge11" class="edge">
<title>actor_customer&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.7,-34.02C346.56,-30.03 363.54,-26.63 380.04,-24.2 433.73,-16.31 491.52,-20.06 545.4,-28.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="329.39,-31.39 322.73,-35.72 330.64,-36.49 329.39,-31.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-27.2 383.04,-60 414.61,-60 414.61,-27.2 383.04,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="391.04" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">11</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="417.61,-27.2 417.61,-60 481.96,-60 481.96,-27.2 417.61,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="420.61" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑪答复送达</text>
</g>
<!-- api_chatcallback&#45;&gt;i_ask_normalize -->
<g id="edge2" class="edge">
<title>api_chatcallback&#45;&gt;i_ask_normalize</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M974.97,-153.25C1045.23,-174.03 1123.47,-197.17 1194.36,-218.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1193.48,-220.61 1201.41,-220.22 1194.97,-215.58 1193.48,-220.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1038.22,-201.62 1038.22,-234.42 1062.22,-234.42 1062.22,-201.62 1038.22,-201.62"/>
<text xml:space="preserve" text-anchor="start" x="1046.32" y="-214.82" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1065.22,-201.62 1065.22,-234.42 1141.23,-234.42 1141.23,-201.62 1065.22,-201.62"/>
<text xml:space="preserve" text-anchor="start" x="1068.22" y="-212.42" font-family="Arial" font-size="14.00" fill="#c9c9c9">②归一化提问</text>
</g>
<!-- api_chatcallback&#45;&gt;i_ask_deliver -->
<g id="edge10" class="edge">
<title>api_chatcallback&#45;&gt;i_ask_deliver</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M985.3,-46.43C1111.61,-25.54 1272.56,-5 1417.07,-5 1417.07,-5 1417.07,-5 4104.12,-5 4241.57,-5 4395.54,-29.12 4509.43,-51.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="985.07,-43.8 978.1,-47.62 985.93,-48.98 985.07,-43.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2723.99,-8 2723.99,-40.8 2755.56,-40.8 2755.56,-8 2723.99,-8"/>
<text xml:space="preserve" text-anchor="start" x="2731.99" y="-21.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2758.56,-8 2758.56,-40.8 2822.91,-40.8 2822.91,-8 2758.56,-8"/>
<text xml:space="preserve" text-anchor="start" x="2761.56" y="-18.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑩回复会话</text>
</g>
<!-- i_ask_normalize&#45;&gt;i_ask_retrieve -->
<g id="edge3" class="edge">
<title>i_ask_normalize&#45;&gt;i_ask_retrieve</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1631.5,-303.16C1697.78,-309.13 1771.25,-315.76 1838.95,-321.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1838.61,-324.47 1846.32,-322.53 1839.08,-319.24 1838.61,-324.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1694.92,-320.03 1694.92,-352.83 1718.92,-352.83 1718.92,-320.03 1694.92,-320.03"/>
<text xml:space="preserve" text-anchor="start" x="1703.02" y="-333.23" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1721.92,-320.03 1721.92,-352.83 1786.26,-352.83 1786.26,-320.03 1721.92,-320.03"/>
<text xml:space="preserve" text-anchor="start" x="1724.92" y="-330.83" font-family="Arial" font-size="14.00" fill="#c9c9c9">③发起检索</text>
</g>
<!-- i_ask_retrieve&#45;&gt;i_ask_rank -->
<g id="edge6" class="edge">
<title>i_ask_retrieve&#45;&gt;i_ask_rank</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2299.28,-404.35C2377.35,-425.75 2465.04,-449.77 2543.52,-471.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2542.69,-473.77 2550.62,-473.22 2544.08,-468.71 2542.69,-473.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2380.73,-458.61 2380.73,-491.41 2404.73,-491.41 2404.73,-458.61 2380.73,-458.61"/>
<text xml:space="preserve" text-anchor="start" x="2388.84" y="-471.81" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2407.73,-458.61 2407.73,-491.41 2472.07,-491.41 2472.07,-458.61 2407.73,-458.61"/>
<text xml:space="preserve" text-anchor="start" x="2410.73" y="-469.41" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑥候选排序</text>
</g>
<!-- i_ask_retrieve&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>i_ask_retrieve&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2299.28,-311.2C2397.99,-297.18 2512.07,-280.98 2603.48,-268"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2603.61,-270.63 2610.66,-266.98 2602.87,-265.43 2603.61,-270.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2362.45,-305.37 2362.45,-338.17 2386.45,-338.17 2386.45,-305.37 2362.45,-305.37"/>
<text xml:space="preserve" text-anchor="start" x="2370.56" y="-318.57" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2389.45,-305.37 2389.45,-338.17 2490.35,-338.17 2490.35,-305.37 2389.45,-305.37"/>
<text xml:space="preserve" text-anchor="start" x="2392.45" y="-316.17" font-family="Arial" font-size="14.00" fill="#c9c9c9">④请求RAGFlow</text>
</g>
<!-- i_ask_retrieve&#45;&gt;ext_ragflow -->
<g id="edge5" class="edge">
<title>i_ask_retrieve&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2260.74,-249.4C2292.92,-236.9 2326.61,-226.04 2359.45,-219.2 2442.25,-201.94 2536.26,-205.81 2613.64,-215.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2260.08,-246.84 2254.07,-252.04 2262.01,-251.72 2260.08,-246.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2369.06,-222.2 2369.06,-255 2393.06,-255 2393.06,-222.2 2369.06,-222.2"/>
<text xml:space="preserve" text-anchor="start" x="2377.17" y="-235.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2396.06,-222.2 2396.06,-255 2483.74,-255 2483.74,-222.2 2396.06,-222.2"/>
<text xml:space="preserve" text-anchor="start" x="2399.06" y="-233" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑤返回候选知识</text>
</g>
<!-- i_ask_rank&#45;&gt;i_ask_verify -->
<g id="edge7" class="edge">
<title>i_ask_rank&#45;&gt;i_ask_verify</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2993.32,-490.18C3063.16,-476.2 3140.9,-460.63 3212.55,-446.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3212.81,-448.92 3219.65,-444.87 3211.78,-443.77 3212.81,-448.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3056.54,-480.77 3056.54,-513.57 3080.54,-513.57 3080.54,-480.77 3056.54,-480.77"/>
<text xml:space="preserve" text-anchor="start" x="3064.65" y="-493.97" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3083.54,-480.77 3083.54,-513.57 3159.56,-513.57 3159.56,-480.77 3083.54,-480.77"/>
<text xml:space="preserve" text-anchor="start" x="3086.54" y="-491.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑦置信度校验</text>
</g>
<!-- i_ask_verify&#45;&gt;i_ask_compose -->
<g id="edge8" class="edge">
<title>i_ask_verify&#45;&gt;i_ask_compose</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3696.84,-346.94C3765.04,-332.48 3838.74,-316.85 3904.35,-302.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3904.64,-305.56 3911.43,-301.43 3903.55,-300.42 3904.64,-305.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3759.94,-336.08 3759.94,-368.88 3783.94,-368.88 3783.94,-336.08 3759.94,-336.08"/>
<text xml:space="preserve" text-anchor="start" x="3768.04" y="-349.28" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3786.94,-336.08 3786.94,-368.88 3851.28,-368.88 3851.28,-336.08 3786.94,-336.08"/>
<text xml:space="preserve" text-anchor="start" x="3789.94" y="-346.88" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑧生成答复</text>
</g>
<!-- i_ask_compose&#45;&gt;i_ask_deliver -->
<g id="edge9" class="edge">
<title>i_ask_compose&#45;&gt;i_ask_deliver</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4291.76,-205.13C4358.66,-185.21 4433.77,-162.84 4499.88,-143.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4500.23,-145.79 4506.67,-141.13 4498.73,-140.76 4500.23,-145.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4354.96,-188.74 4354.96,-221.54 4378.96,-221.54 4378.96,-188.74 4354.96,-188.74"/>
<text xml:space="preserve" text-anchor="start" x="4363.07" y="-201.94" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4381.96,-188.74 4381.96,-221.54 4446.3,-221.54 4446.3,-188.74 4381.96,-188.74"/>
<text xml:space="preserve" text-anchor="start" x="4384.96" y="-199.54" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑨下发答复</text>
</g>
</g>
</svg>
`;case`seq001F-branch-low-confidence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2832pt" height="210pt"
 viewBox="0.00 0.00 2832.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- i_ask_verify -->
<g id="node1" class="node">
<title>i_ask_verify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="474.38,-180 0,-180 0,0 474.38,0 474.38,-180"/>
<text xml:space="preserve" text-anchor="start" x="169.94" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;004 置信度校验</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US&#45;002 的路径。</text>
</g>
<!-- i_lowescalate -->
<g id="node2" class="node">
<title>i_lowescalate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1011.76,-180 691.72,-180 691.72,0 1011.76,0 1011.76,-180"/>
<text xml:space="preserve" text-anchor="start" x="784.5" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;011 判定转人工</text>
<text xml:space="preserve" text-anchor="start" x="714.22" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度低于阈值或无候选时，判定进入人工路径。</text>
</g>
<!-- i_lowticket -->
<g id="node3" class="node">
<title>i_lowticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1570.11,-180 1217.44,-180 1217.44,0 1570.11,0 1570.11,-180"/>
<text xml:space="preserve" text-anchor="start" x="1318.2" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;012 创建人工工单</text>
<text xml:space="preserve" text-anchor="start" x="1237.5" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</text>
</g>
<!-- i_lownotify -->
<g id="node4" class="node">
<title>i_lownotify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2165.97,-180 1775.79,-180 1775.79,0 2165.97,0 2165.97,-180"/>
<text xml:space="preserve" text-anchor="start" x="1895.3" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;013 告知客户等待</text>
<text xml:space="preserve" text-anchor="start" x="1795.84" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</text>
</g>
<!-- api_chatcallback -->
<g id="node5" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2801.9,-180 2371.65,-180 2371.65,0 2801.9,0 2801.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="2391.7" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="2470.07" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="2518.01" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- i_ask_verify&#45;&gt;i_lowescalate -->
<g id="edge1" class="edge">
<title>i_ask_verify&#45;&gt;i_lowescalate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M474.14,-90C543.4,-90 617.74,-90 681.91,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="681.6,-92.63 689.1,-90 681.6,-87.38 681.6,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="537.38,-93 537.38,-125.8 561.38,-125.8 561.38,-93 537.38,-93"/>
<text xml:space="preserve" text-anchor="start" x="545.49" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="564.38,-93 564.38,-125.8 628.72,-125.8 628.72,-93 564.38,-93"/>
<text xml:space="preserve" text-anchor="start" x="567.38" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足</text>
</g>
<!-- i_lowescalate&#45;&gt;i_lowticket -->
<g id="edge2" class="edge">
<title>i_lowescalate&#45;&gt;i_lowticket</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1011.49,-90C1072.92,-90 1143.68,-90 1207.43,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1207.07,-92.63 1214.57,-90 1207.07,-87.38 1207.07,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1074.76,-93 1074.76,-125.8 1098.76,-125.8 1098.76,-93 1074.76,-93"/>
<text xml:space="preserve" text-anchor="start" x="1082.87" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1101.76,-93 1101.76,-125.8 1154.44,-125.8 1154.44,-93 1101.76,-93"/>
<text xml:space="preserve" text-anchor="start" x="1104.76" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">创建工单</text>
</g>
<!-- i_lowticket&#45;&gt;i_lownotify -->
<g id="edge3" class="edge">
<title>i_lowticket&#45;&gt;i_lownotify</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1570.06,-90C1631.84,-90 1701.83,-90 1765.78,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1765.47,-92.63 1772.97,-90 1765.47,-87.38 1765.47,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1633.11,-93 1633.11,-125.8 1657.11,-125.8 1657.11,-93 1633.11,-93"/>
<text xml:space="preserve" text-anchor="start" x="1641.22" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1660.11,-93 1660.11,-125.8 1712.79,-125.8 1712.79,-93 1660.11,-93"/>
<text xml:space="preserve" text-anchor="start" x="1663.11" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">告知等待</text>
</g>
<!-- i_lownotify&#45;&gt;api_chatcallback -->
<g id="edge4" class="edge">
<title>i_lownotify&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2165.7,-90C2227.9,-90 2297.31,-90 2361.5,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2361.23,-92.63 2368.73,-90 2361.23,-87.38 2361.23,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2228.97,-93 2228.97,-125.8 2252.97,-125.8 2252.97,-93 2228.97,-93"/>
<text xml:space="preserve" text-anchor="start" x="2237.08" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2255.97,-93 2255.97,-125.8 2308.65,-125.8 2308.65,-93 2255.97,-93"/>
<text xml:space="preserve" text-anchor="start" x="2258.97" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">回复会话</text>
</g>
</g>
</svg>
`;case`seq001NF-i-step-lanes`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3296pt" height="381pt"
 viewBox="0.00 0.00 3296.00 381.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1548.4,-351 1149.44,-351 1149.44,-171 1548.4,-171 1548.4,-351"/>
<text xml:space="preserve" text-anchor="start" x="1240" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;151 场景判定（泳道引用）</text>
<text xml:space="preserve" text-anchor="start" x="1169.5" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">泳道中的判定环节，具体步骤见各 US 容器下的 I&#45;11x~I&#45;13x。</text>
</g>
<!-- i_kb_judge -->
<g id="node4" class="node">
<title>i_kb_judge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2132.46,-351 1812.42,-351 1812.42,-171 2132.46,-171 2132.46,-351"/>
<text xml:space="preserve" text-anchor="start" x="1896.86" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;112 判定零条场景</text>
<text xml:space="preserve" text-anchor="start" x="1832.82" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</text>
</g>
<!-- i_to_check -->
<g id="node5" class="node">
<title>i_to_check</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2693.18,-351 2373.14,-351 2373.14,-171 2693.18,-171 2693.18,-351"/>
<text xml:space="preserve" text-anchor="start" x="2474.25" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;122 判定超时</text>
<text xml:space="preserve" text-anchor="start" x="2408.13" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</text>
</g>
<!-- i_ll_detect -->
<g id="node6" class="node">
<title>i_ll_detect</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3265.57,-180 2945.53,-180 2945.53,0 3265.57,0 3265.57,-180"/>
<text xml:space="preserve" text-anchor="start" x="3029.97" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;131 判定调用结果</text>
<text xml:space="preserve" text-anchor="start" x="3005.53" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">识别模型服务调用失败或返回异常。</text>
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
<!-- actor_ops&#45;&gt;i_ll_detect -->
<g id="edge6" class="edge">
<title>actor_ops&#45;&gt;i_ll_detect</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M330.1,-51.55C443.62,-29.04 596.89,-5 733.74,-5 733.74,-5 733.74,-5 2534.16,-5 2674.33,-5 2831.77,-30.42 2945.68,-53.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="329.74,-48.94 322.9,-52.99 330.77,-54.09 329.74,-48.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1611.4,-8 1611.4,-40.8 1635.4,-40.8 1635.4,-8 1611.4,-8"/>
<text xml:space="preserve" text-anchor="start" x="1619.5" y="-21.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1638.4,-8 1638.4,-40.8 1749.42,-40.8 1749.42,-8 1638.4,-8"/>
<text xml:space="preserve" text-anchor="start" x="1641.4" y="-18.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑥下发提示或转人工</text>
</g>
<!-- api_status&#45;&gt;step_probelane -->
<g id="edge2" class="edge">
<title>api_status&#45;&gt;step_probelane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M931.96,-261C998.16,-261 1072.26,-261 1139.38,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.13,-263.63 1146.63,-261 1139.13,-258.38 1139.13,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="995.1,-264 995.1,-296.8 1019.1,-296.8 1019.1,-264 995.1,-264"/>
<text xml:space="preserve" text-anchor="start" x="1003.2" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1022.1,-264 1022.1,-296.8 1086.44,-296.8 1086.44,-264 1022.1,-264"/>
<text xml:space="preserve" text-anchor="start" x="1025.1" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②发起探测</text>
</g>
<!-- step_probelane&#45;&gt;i_kb_judge -->
<g id="edge3" class="edge">
<title>step_probelane&#45;&gt;i_kb_judge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1548.28,-261C1629.96,-261 1723.62,-261 1802.02,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1801.96,-263.63 1809.46,-261 1801.96,-258.38 1801.96,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1628.9,-264 1628.9,-296.8 1652.9,-296.8 1652.9,-264 1628.9,-264"/>
<text xml:space="preserve" text-anchor="start" x="1637.01" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1655.9,-264 1655.9,-296.8 1731.91,-296.8 1731.91,-264 1655.9,-264"/>
<text xml:space="preserve" text-anchor="start" x="1658.9" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③判定条目数</text>
</g>
<!-- i_kb_judge&#45;&gt;i_to_check -->
<g id="edge4" class="edge">
<title>i_kb_judge&#45;&gt;i_to_check</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2132.42,-261C2204.52,-261 2289.84,-261 2363.1,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2362.83,-263.63 2370.33,-261 2362.82,-258.38 2362.83,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2195.46,-264 2195.46,-296.8 2219.46,-296.8 2219.46,-264 2195.46,-264"/>
<text xml:space="preserve" text-anchor="start" x="2203.56" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2222.46,-264 2222.46,-296.8 2310.14,-296.8 2310.14,-264 2222.46,-264"/>
<text xml:space="preserve" text-anchor="start" x="2225.46" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">④判定响应耗时</text>
</g>
<!-- i_to_check&#45;&gt;i_ll_detect -->
<g id="edge5" class="edge">
<title>i_to_check&#45;&gt;i_ll_detect</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2693.04,-213.37C2768.75,-190.67 2859.35,-163.51 2936.23,-140.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2936.69,-143.06 2943.12,-138.39 2935.19,-138.03 2936.69,-143.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2756.18,-193.82 2756.18,-226.62 2780.18,-226.62 2780.18,-193.82 2756.18,-193.82"/>
<text xml:space="preserve" text-anchor="start" x="2764.29" y="-207.02" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2783.18,-193.82 2783.18,-226.62 2882.53,-226.62 2882.53,-193.82 2783.18,-193.82"/>
<text xml:space="preserve" text-anchor="start" x="2786.18" y="-204.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑤判定模型可用性</text>
</g>
</g>
</svg>
`;case`seq001F-api-chat`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2257pt" height="210pt"
 viewBox="0.00 0.00 2257.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1677.86,-180 1259.7,-180 1259.7,0 1677.86,0 1677.86,-180"/>
<text xml:space="preserve" text-anchor="start" x="1359.86" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;201 应答编排（泳道引用）</text>
<text xml:space="preserve" text-anchor="start" x="1279.75" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">泳道中的编排环节，具体步骤见 US&#45;001 容器下的 I&#45;001~I&#45;006。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2226.91,-180 1906.87,-180 1906.87,0 2226.91,0 2226.91,-180"/>
<text xml:space="preserve" text-anchor="start" x="2024.11" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2010.63" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1053.78,-90C1116.82,-90 1185.87,-90 1249.19,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1249.19,-92.63 1256.69,-90 1249.19,-87.38 1249.19,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.02,-93 1117.02,-125.8 1141.02,-125.8 1141.02,-93 1117.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1125.13" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.02,-93 1144.02,-125.8 1196.7,-125.8 1196.7,-93 1144.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1147.02" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">触发应答</text>
</g>
<!-- api_chatcallback&#45;&gt;step_answerlane -->
<g id="edge5" class="edge">
<title>api_chatcallback&#45;&gt;step_answerlane</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1063.9,-27.81C1108.72,-21.36 1155.59,-18.87 1199.7,-24.2 1219.32,-26.57 1239.58,-29.89 1259.77,-33.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1063.78,-25.17 1056.75,-28.88 1064.56,-30.36 1063.78,-25.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.02,-27.2 1117.02,-60 1141.02,-60 1141.02,-27.2 1117.02,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1125.13" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.02,-27.2 1144.02,-60 1196.7,-60 1196.7,-27.2 1144.02,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1147.02" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回答复</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1677.85,-90C1749.41,-90 1828.61,-90 1896.7,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1896.57,-92.63 1904.07,-90 1896.57,-87.38 1896.57,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1752.53,-93 1752.53,-125.8 1776.53,-125.8 1776.53,-93 1752.53,-93"/>
<text xml:space="preserve" text-anchor="start" x="1760.63" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1779.53,-93 1779.53,-125.8 1832.2,-125.8 1832.2,-93 1779.53,-93"/>
<text xml:space="preserve" text-anchor="start" x="1782.53" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索知识</text>
</g>
<!-- step_answerlane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_answerlane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1687.77,-28.03C1739.82,-19.87 1795.25,-16.61 1846.87,-24.2 1866.61,-27.1 1887.04,-31.4 1907.12,-36.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1687.38,-25.44 1680.4,-29.24 1688.22,-30.62 1687.38,-25.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1740.86,-27.2 1740.86,-60 1764.86,-60 1764.86,-27.2 1740.86,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1748.96" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1767.86,-27.2 1767.86,-60 1843.87,-60 1843.87,-27.2 1767.86,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1770.86" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选知识</text>
</g>
</g>
</svg>
`;case`seq001NF-api-status`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2197pt" height="210pt"
 viewBox="0.00 0.00 2197.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1621.56,-180 1222.61,-180 1222.61,0 1621.56,0 1621.56,-180"/>
<text xml:space="preserve" text-anchor="start" x="1313.16" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;151 场景判定（泳道引用）</text>
<text xml:space="preserve" text-anchor="start" x="1242.66" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">泳道中的判定环节，具体步骤见各 US 容器下的 I&#45;11x~I&#45;13x。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2166.57,-180 1838.91,-180 1838.91,0 2166.57,0 2166.57,-180"/>
<text xml:space="preserve" text-anchor="start" x="1959.96" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1858.96" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务，超时或不可用即触发本链场景。</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1016.79,-90C1079.47,-90 1149.06,-90 1212.58,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1212.2,-92.63 1219.7,-90 1212.2,-87.38 1212.2,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.93,-93 1079.93,-125.8 1103.93,-125.8 1103.93,-93 1079.93,-93"/>
<text xml:space="preserve" text-anchor="start" x="1088.04" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1106.93,-93 1106.93,-125.8 1159.61,-125.8 1159.61,-93 1106.93,-93"/>
<text xml:space="preserve" text-anchor="start" x="1109.93" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1621.41,-90C1688.8,-90 1763.53,-90 1828.78,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1828.64,-92.63 1836.14,-90 1828.64,-87.38 1828.64,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1684.56,-93 1684.56,-125.8 1708.56,-125.8 1708.56,-93 1684.56,-93"/>
<text xml:space="preserve" text-anchor="start" x="1692.67" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1711.56,-93 1711.56,-125.8 1775.91,-125.8 1775.91,-93 1711.56,-93"/>
<text xml:space="preserve" text-anchor="start" x="1714.56" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测数据集</text>
</g>
<!-- step_probelane&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>step_probelane&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1631.44,-28.33C1679.74,-20.48 1731.02,-17.28 1778.91,-24.2 1798.57,-27.04 1818.91,-31.23 1838.95,-36.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1631.12,-25.73 1624.16,-29.57 1632,-30.9 1631.12,-25.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1690.4,-27.2 1690.4,-60 1714.4,-60 1714.4,-27.2 1690.4,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1698.5" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1717.4,-27.2 1717.4,-60 1770.07,-60 1770.07,-27.2 1717.4,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1720.4" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回结论</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
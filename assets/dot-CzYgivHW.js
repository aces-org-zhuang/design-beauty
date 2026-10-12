var e=e=>{switch(e){case`proc-local`:return`digraph {
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
    us_scan -> us_govern [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选进入治理</FONT></TD></TR></TABLE>>,
        likec4_id="1ciqzea",
        minlen=1,
        style=solid];
    us_kbempty -> us_llmdown [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id="1orz889",
        minlen=1,
        style=solid];
    us_ragtimeout -> us_llmdown [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">统一由提示环节下发</FONT></TD></TR></TABLE>>,
        likec4_id="19s6iii",
        minlen=1,
        style=solid];
    us_govern -> us_alert [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升后进入新鲜度巡检</FONT></TD></TR></TABLE>>,
        likec4_id="1kyd0mb",
        minlen=1,
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
        us_lowconfidence [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-002 答不准时转人工而非硬答</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_goal_1 [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-G0 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_ask [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-001 客户提问获得专业答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask",
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-G0 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    i_goal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-G0 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
        minlen=1,
        style=solid];
    us_kbempty -> i_goal_2 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务目标</FONT></TD></TR></TABLE>>,
        likec4_id="1hxdoyk",
        minlen=0,
        style=solid];
    i_goal_1 -> us_ask [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">支撑下发环节</FONT></TD></TR></TABLE>>,
        likec4_id="8c2gu1",
        minlen=1,
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
        st_received [group=feat_answer_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-000 已接收</FONT>>,
            likec4_id="feat_answer_f.st_received",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_retrieving [group=feat_answer_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-001 检索中</FONT>>,
            likec4_id="feat_answer_f.st_retrieving",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_answering [group=feat_answer_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-002 应答中</FONT>>,
            likec4_id="feat_answer_f.st_answering",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_waitinghuman [group=feat_answer_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-004 待人工</FONT>>,
            likec4_id="feat_answer_f.st_waitingHuman",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_answered [group=feat_answer_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-003 已答复</FONT>>,
            likec4_id="feat_answer_f.st_answered",
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
        st_unprobed [group=feat_degrade_nf,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-100 未探测</FONT>>,
            likec4_id="feat_degrade_nf.st_unprobed",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_probing [group=feat_degrade_nf,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-101 探测中</FONT>>,
            likec4_id="feat_degrade_nf.st_probing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_healthy [group=feat_degrade_nf,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-102 正常</FONT>>,
            likec4_id="feat_degrade_nf.st_healthy",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_scenariohit [group=feat_degrade_nf,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-103 命中极端场景</FONT>>,
            likec4_id="feat_degrade_nf.st_scenarioHit",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_notified [group=feat_degrade_nf,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-104 已下发提示</FONT>>,
            likec4_id="feat_degrade_nf.st_notified",
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
        st_intake [group=feat_knowledge_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-200 待接入</FONT>>,
            likec4_id="feat_knowledge_f.st_intake",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_scanning [group=feat_knowledge_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-201 扫描中</FONT>>,
            likec4_id="feat_knowledge_f.st_scanning",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_pendingreview [group=feat_knowledge_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-202 待人工审阅</FONT>>,
            likec4_id="feat_knowledge_f.st_pendingReview",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_published [group=feat_knowledge_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-203 已发布可检索</FONT>>,
            likec4_id="feat_knowledge_f.st_published",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        st_stale [group=feat_knowledge_f,
            height=2.5,
            label=<<FONT POINT-SIZE="20">S-204 新鲜度异常</FONT>>,
            likec4_id="feat_knowledge_f.st_stale",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    st_received -> st_retrieving [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>,
        likec4_id="4gx766",
        minlen=1,
        style=dashed];
    st_unprobed -> st_probing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起探测</FONT></TD></TR></TABLE>>,
        likec4_id="1aja0og",
        minlen=1,
        style=dashed];
    st_intake -> st_scanning [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">抽取候选知识</FONT></TD></TR></TABLE>>,
        likec4_id=k63dqf,
        style=dashed];
    st_retrieving -> st_answering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id=oqfnq5,
        style=dashed];
    st_retrieving -> st_waitinghuman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>,
        likec4_id=b13es5,
        style=dashed];
    st_probing -> st_healthy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测通过</FONT></TD></TR></TABLE>>,
        likec4_id="10b33cw",
        minlen=1,
        style=dashed];
    st_probing -> st_scenariohit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测命中异常</FONT></TD></TR></TABLE>>,
        likec4_id=ur6wla,
        style=dashed];
    st_scanning -> st_pendingreview [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选</FONT></TD></TR></TABLE>>,
        likec4_id="1014rvi",
        style=dashed];
    st_answering -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">答复已下发</FONT></TD></TR></TABLE>>,
        likec4_id=kw840b,
        style=dashed];
    st_waitinghuman -> st_answered [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">人工已接管</FONT></TD></TR></TABLE>>,
        likec4_id="16n538j",
        style=dashed];
    st_scenariohit -> st_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">下发提示</FONT></TD></TR></TABLE>>,
        likec4_id=itlc3n,
        style=dashed];
    st_pendingreview -> st_intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">驳回退回</FONT></TD></TR></TABLE>>,
        likec4_id="1okcx6b",
        style=dashed];
    st_pendingreview -> st_published [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准晋升</FONT></TD></TR></TABLE>>,
        likec4_id=fwthuf,
        style=dashed];
    st_notified -> st_probing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">继续巡检</FONT></TD></TR></TABLE>>,
        likec4_id="1d6ac0n",
        style=dashed];
    st_published -> st_stale [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">超出新鲜度阈值</FONT></TD></TR></TABLE>>,
        likec4_id="17unjlp",
        style=dashed];
    st_stale -> st_scanning [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">重新扫描</FONT></TD></TR></TABLE>>,
        likec4_id=yyj53o,
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
    subgraph cluster_i_ask_deliver {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-006 下发答复</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_interaction [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 企业微信会话交互</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_information [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 答复信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_information",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_i_alert_report {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-233 上报告警</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_console [group="feat_knowledge_f.us_alert.i_alert_report",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-201 运营控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_information_1 [group="feat_knowledge_f.us_alert.i_alert_report",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-202 知识运营信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_us_kbempty {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-101 知识库为空时运营人员能看见</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_status [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-101 控制台状态提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
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
            margin=32,
            style=filled
        ];
        ui_notice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-102 极端场景提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_interaction -> ui_information [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id="1q98dwc",
        minlen=0,
        style=solid];
    ui_console -> ui_information_1 [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="542m5t",
        minlen=0,
        style=solid];
    ui_status -> ui_notice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id="1bbjwiv",
        style=solid,
        weight=5];
    ui_information_1 -> ui_console [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id="16igii9",
        minlen=0,
        style=solid];
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
    subgraph cluster_ui_interaction {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-001 企业微信会话交互</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_wechatcallback [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_wechatCallback",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_answerorchestrator [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_answerOrchestrator",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_answerloop [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-003 知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 检索增强的应答循环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_answerLoop",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_handoffservice [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_replypolicy [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_replyPolicy",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_ragflowknowledge [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_ragflowKnowledge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_ui_information {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-002 答复信息设计</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_information",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        src_store [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_information.src_store",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_wechatcallback -> src_answerorchestrator [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分发归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id=sdmph9,
        minlen=1,
        style=solid];
    src_answerorchestrator -> src_answerloop [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id="10a1pmg",
        style=solid];
    src_answerorchestrator -> src_handoffservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度时转人工</FONT></TD></TR></TABLE>>,
        likec4_id=zskfrd,
        style=solid,
        weight=3];
    src_answerloop -> src_replypolicy [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>,
        likec4_id="1lruzvc",
        minlen=1,
        style=solid];
    src_answerloop -> src_ragflowknowledge [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id="19bvlsu",
        minlen=1,
        style=solid];
    src_handoffservice -> src_store [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id=a7jslu,
        minlen=1,
        style=solid];
}
`;case`pano-src-001NF-empty`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-src-001NF-empty",
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
    subgraph cluster_ui_status {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-101 控制台状态提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_integrationroutes [group="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-101 集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>功能概览与集成状态查询。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgealert [group="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-103 知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js —<BR/>暴露知识新鲜度与空库问题。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_knowledgeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_ragflowprobe [group="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-104 RAGFlow 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 校验 RAGFlow 数据集状态与可用性。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_ragflowProbe",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_operatorui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-105 运营人员控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_operatorUi",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_integrationroutes -> src_knowledgealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询空库告警</FONT></TD></TR></TABLE>>,
        likec4_id="6626zm",
        minlen=1,
        style=solid];
    src_integrationroutes -> src_ragflowprobe [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测数据集状态</FONT></TD></TR></TABLE>>,
        likec4_id="2jqn9u",
        minlen=1,
        style=solid];
}
`;case`pano-src-001NF-notice`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="pano-src-001NF-notice",
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
    subgraph cluster_ui_notice {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-102 极端场景提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_evaluationgate [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice.src_evaluationGate",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_storealert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice.src_storeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_evaluationgate -> src_storealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id="1ajfvh6",
        style=solid];
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
    subgraph cluster_ui_information {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-202 知识运营信息设计</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_knowledgeroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-202 知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>知识扫描、同步与生命周期接口。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_knowledgeRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgesync [group="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-208 知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-sync-service.js —<BR/>把已批准知识推送到 RAGFlow。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_knowledgeSync",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_lifecycle [group="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-209 知识生命周期视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-lifecycle-service.js —<BR/>知识的晋升与下线。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_lifecycle",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_documentregistry [group="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-205 文档登记簿</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-document-registry.js —<BR/>跟踪素材与文档标识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_documentRegistry",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_ui_console {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-201 运营控制台</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_materialroutes [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-201 素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 美妆素材接入接口。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_materialRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_materialbatch [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-204 素材批处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-batch-service.js —<BR/>批量素材接入。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_materialBatch",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgescan [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-206 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>发现候选知识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_knowledgeScan",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_materialservice [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-203 素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 素材接入规则。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_materialService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_governance [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-207 知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-governance-service.js<BR/>— 发布决策与治理。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_governance",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_knowledgeroutes -> src_knowledgescan [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id="1lqctlw",
        minlen=1,
        style=solid];
    src_materialroutes -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">接收素材</FONT></TD></TR></TABLE>>,
        likec4_id=o00cd,
        minlen=1,
        style=solid,
        weight=3];
    src_materialbatch -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批量接入</FONT></TD></TR></TABLE>>,
        likec4_id=cdp1jf,
        minlen=1,
        style=solid,
        weight=3];
    src_knowledgescan -> src_governance [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选</FONT></TD></TR></TABLE>>,
        likec4_id=itbt7t,
        style=solid,
        weight=3];
    src_materialservice -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记文档</FONT></TD></TR></TABLE>>,
        likec4_id="19midlp",
        style=solid];
    src_governance -> src_knowledgesync [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准后推送</FONT></TD></TR></TABLE>>,
        likec4_id="44xv1m",
        style=solid];
    src_knowledgesync -> src_lifecycle [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">更新生命周期</FONT></TD></TR></TABLE>>,
        likec4_id="1o6stu1",
        style=solid,
        weight=3];
    src_lifecycle -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id="905r6u",
        style=solid,
        weight=3];
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
    api_chatcallback [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-001 POST /wechat/callback 微信客服回调</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js:12 —<BR/>接收企业微信加密回调。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.lane_edge.api_chatCallback",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_handofflist [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-002 GET /handoffs 工单列表</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/handoff-routes.js:9 — 运营人员查看人工工单。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_answer_f.lane_edge.api_handoffList",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_chatcallback -> api_handofflist [style=invis];
    api_status [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-101 GET /integration/status 集成状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js:7 —<BR/>查询集成状态与知识条目数。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.lane_edge.api_status",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_handofflist -> api_status [style=invis];
    api_material [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-201 POST /materials 素材接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js:8 — 接收素材。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.lane_edge.api_material",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_status -> api_material [style=invis];
    api_scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-202 POST /knowledge/scan 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:10 — 触发候选知识扫描。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.lane_edge.api_scan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_status_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-203 GET /knowledge/status 知识状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:26 —<BR/>查询扫描与治理状态。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.lane_edge.api_status",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_scan -> api_status_1 [style=invis];
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
    subgraph cluster_ui_interaction {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-001 企业微信会话交互</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_wechatcallback [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_wechatCallback",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_answerorchestrator [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_answerOrchestrator",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_answerloop [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-003 知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 检索增强的应答循环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_answerLoop",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_handoffservice [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_replypolicy [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_replyPolicy",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_ragflowknowledge [group="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_ragflowKnowledge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_ui_information {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-002 答复信息设计</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_information",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        src_store [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_information.src_store",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_wechatcallback -> src_answerorchestrator [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分发归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id=sdmph9,
        minlen=1,
        style=solid];
    src_answerorchestrator -> src_answerloop [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id="10a1pmg",
        style=solid];
    src_answerorchestrator -> src_handoffservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度时转人工</FONT></TD></TR></TABLE>>,
        likec4_id=zskfrd,
        style=solid,
        weight=3];
    src_answerloop -> src_replypolicy [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>,
        likec4_id="1lruzvc",
        minlen=1,
        style=solid];
    src_answerloop -> src_ragflowknowledge [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id="19bvlsu",
        minlen=1,
        style=solid];
    src_handoffservice -> src_store [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id=a7jslu,
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
    subgraph cluster_ui_status {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-101 控制台状态提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_integrationroutes [group="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-101 集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>功能概览与集成状态查询。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgealert [group="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-103 知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js —<BR/>暴露知识新鲜度与空库问题。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_knowledgeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_ragflowprobe [group="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-104 RAGFlow 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 校验 RAGFlow 数据集状态与可用性。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_ragflowProbe",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_operatorui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-105 运营人员控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status.src_operatorUi",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_integrationroutes -> src_knowledgealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询空库告警</FONT></TD></TR></TABLE>>,
        likec4_id="6626zm",
        minlen=1,
        style=solid];
    src_integrationroutes -> src_ragflowprobe [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测数据集状态</FONT></TD></TR></TABLE>>,
        likec4_id="2jqn9u",
        minlen=1,
        style=solid];
}
`;case`srcdir001NF-notice`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="srcdir001NF-notice",
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
    subgraph cluster_ui_notice {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-102 极端场景提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_evaluationgate [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice.src_evaluationGate",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_storealert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice.src_storeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_evaluationgate -> src_storealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id="1ajfvh6",
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
`;case`chain001F-i-state-main`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-state-main",
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
        label=<<FONT POINT-SIZE="20">S-000 已接收</FONT>>,
        likec4_id="feat_answer_f.st_received",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving [height=2.5,
        label=<<FONT POINT-SIZE="20">S-001 检索中</FONT>>,
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
        label=<<FONT POINT-SIZE="20">S-002 应答中</FONT>>,
        likec4_id="feat_answer_f.st_answering",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_answering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id=oqfnq5,
        style=dashed];
    st_answered [height=2.5,
        label=<<FONT POINT-SIZE="20">S-003 已答复</FONT>>,
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
`;case`chain001F-i-state`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-state",
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
        label=<<FONT POINT-SIZE="20">S-000 已接收</FONT>>,
        likec4_id="feat_answer_f.st_received",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving [height=2.5,
        label=<<FONT POINT-SIZE="20">S-001 检索中</FONT>>,
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
        label=<<FONT POINT-SIZE="20">S-002 应答中</FONT>>,
        likec4_id="feat_answer_f.st_answering",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_answering [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度达标</FONT></TD></TR></TABLE>>,
        likec4_id=oqfnq5,
        style=dashed];
    st_waitinghuman [height=2.5,
        label=<<FONT POINT-SIZE="20">S-004 待人工</FONT>>,
        likec4_id="feat_answer_f.st_waitingHuman",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_retrieving -> st_waitinghuman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">置信度不足</FONT></TD></TR></TABLE>>,
        likec4_id=b13es5,
        style=dashed];
    st_answered [height=2.5,
        label=<<FONT POINT-SIZE="20">S-003 已答复</FONT>>,
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
`;case`chain001F-i-state-branch-human`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001F-i-state-branch-human",
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
        label=<<FONT POINT-SIZE="20">S-001 检索中</FONT>>,
        likec4_id="feat_answer_f.st_retrieving",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_waitinghuman [height=2.5,
        label=<<FONT POINT-SIZE="20">S-004 待人工</FONT>>,
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
    }
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
    us_kbempty -> us_llmdown [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id="1orz889",
        minlen=1,
        style=solid];
    us_ragtimeout -> us_llmdown [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">统一由提示环节下发</FONT></TD></TR></TABLE>>,
        likec4_id="19s6iii",
        minlen=1,
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
    us_ask -> f_answer [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1kuna4v",
        style=solid];
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
    us_kbempty -> nf_kbempty [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1w7tww4",
        minlen=1,
        style=solid];
    us_kbempty -> us_llmdown [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id="1orz889",
        style=solid];
    us_ragtimeout -> us_llmdown [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">统一由提示环节下发</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-G0 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。</FONT></TD></TR></TABLE>>,
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
        {
            graph [rank=same];
            i_ask_normalize [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 归一化提问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_ask_normalize",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_ask_retrieve [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-002 检索候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_ask_retrieve",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_ask_rank [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 候选排序与择优</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_ask_rank",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            i_ask_verify [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-004 置信度校验</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US-002 的路径。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_ask_verify",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_ask_compose [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-005 生成答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_ask_compose",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_ask_deliver [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-006 下发答复</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_ask.i_ask_deliver",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        i_ask_normalize -> i_ask_verify [style=invis];
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
        {
            graph [rank=same];
            i_lowescalate [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-011 判定转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">置信度低于阈值或无候选时，判定进入人工路径。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_lowConfidence.i_lowEscalate",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_lowticket [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-012 创建人工工单</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_answer_f.us_lowConfidence.i_lowTicket",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        i_lownotify [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-013 告知客户等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_lowConfidence.i_lowNotify",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_lowescalate -> i_lownotify [style=invis];
    }
    i_ask_retrieve -> i_ask_rank [style=invis];
    i_ask_rank -> i_ask_compose [style=invis];
    i_ask_compose -> i_ask_deliver [style=invis];
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-G0 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain001NF-i-state`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-i-state",
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
    st_unprobed [height=2.5,
        label=<<FONT POINT-SIZE="20">S-100 未探测</FONT>>,
        likec4_id="feat_degrade_nf.st_unprobed",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_probing [height=2.5,
        label=<<FONT POINT-SIZE="20">S-101 探测中</FONT>>,
        likec4_id="feat_degrade_nf.st_probing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_unprobed -> st_probing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起探测</FONT></TD></TR></TABLE>>,
        likec4_id="1aja0og",
        minlen=1,
        style=dashed];
    st_healthy [height=2.5,
        label=<<FONT POINT-SIZE="20">S-102 正常</FONT>>,
        likec4_id="feat_degrade_nf.st_healthy",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_probing -> st_healthy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测通过</FONT></TD></TR></TABLE>>,
        likec4_id="10b33cw",
        minlen=1,
        style=dashed];
    st_scenariohit [height=2.5,
        label=<<FONT POINT-SIZE="20">S-103 命中极端场景</FONT>>,
        likec4_id="feat_degrade_nf.st_scenarioHit",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_probing -> st_scenariohit [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测命中异常</FONT></TD></TR></TABLE>>,
        likec4_id=ur6wla,
        style=dashed];
    st_notified [height=2.5,
        label=<<FONT POINT-SIZE="20">S-104 已下发提示</FONT>>,
        likec4_id="feat_degrade_nf.st_notified",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_scenariohit -> st_notified [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">下发提示</FONT></TD></TR></TABLE>>,
        likec4_id=itlc3n,
        style=dashed];
    st_notified -> st_probing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">继续巡检</FONT></TD></TR></TABLE>>,
        likec4_id="1d6ac0n",
        style=dashed];
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
        i_kb_count [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111 读取条目数</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_count",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_kb_judge [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-112 判定零条场景</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_judge",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_kb_render [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-113 渲染空库提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在控制台显式提示条目数为 0，不显示空白列表。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render",
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
        {
            graph [rank=same];
            i_to_timer [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-121 启动超时计时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">发起检索时同时启动 8 秒计时。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_degrade_nf.us_ragTimeout.i_to_timer",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            i_to_check [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-122 判定超时</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</FONT></TD></TR></TABLE>>,
                likec4_id="feat_degrade_nf.us_ragTimeout.i_to_check",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        i_to_notify [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-123 下发处理中提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知系统仍在处理，不让客户反复刷新。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout.i_to_notify",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_to_timer -> i_to_notify [minlen=1,
            style=invis];
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
        i_ll_detect [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-131 判定调用结果</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">识别模型服务调用失败或返回异常。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_detect",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_ll_ticket [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-132 生成人工工单</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把提问内容与失败原因写入工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_ticket",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_ll_notify [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-133 告知等待人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知已转人工，不返回空白内容。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    i_kb_count -> i_kb_judge [style=invis];
    i_kb_judge -> i_to_check [style=invis];
    i_kb_render -> i_ll_notify [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id=fruw95,
        minlen=1,
        style=solid];
    i_to_check -> i_ll_detect [style=invis];
    i_to_notify -> i_ll_notify [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        likec4_id="1o7b8v2",
        ltail=cluster_us_ragtimeout,
        style=solid,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">统一由提示环节下发</FONT></TD></TR></TABLE>>];
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
    subgraph cluster_i_ask_deliver {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-006 下发答复</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_interaction [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 企业微信会话交互</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_interaction",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_information [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 答复信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.us_ask.i_ask_deliver.ui_information",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_interaction -> ui_information [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id="1q98dwc",
        style=solid];
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
    subgraph cluster_i_kb_render {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-113 渲染空库提示</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_status [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-101 控制台状态提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
}
`;case`chain001NF-ui-notice`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain001NF-ui-notice",
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
    subgraph cluster_i_ll_notify {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-133 告知等待人工</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui_notice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-102 极端场景提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown.i_ll_notify.ui_notice",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
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
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选进入治理</FONT></TD></TR></TABLE>>,
        likec4_id="1ciqzea",
        minlen=1,
        style=solid];
    us_govern -> us_alert [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升后进入新鲜度巡检</FONT></TD></TR></TABLE>>,
        likec4_id="1kyd0mb",
        minlen=1,
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
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选进入治理</FONT></TD></TR></TABLE>>,
        likec4_id="1ciqzea",
        style=solid];
    us_scan -> f_ingest [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=h2l113,
        minlen=1,
        style=solid];
    us_govern -> us_alert [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升后进入新鲜度巡检</FONT></TD></TR></TABLE>>,
        likec4_id="1kyd0mb",
        style=solid];
    us_govern -> f_govern [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="12oly8a",
        style=solid];
    us_alert -> f_govern [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=bd7x0j,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-G0 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
}
`;case`chain002F-i-state`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId="chain002F-i-state",
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
    st_intake [height=2.5,
        label=<<FONT POINT-SIZE="20">S-200 待接入</FONT>>,
        likec4_id="feat_knowledge_f.st_intake",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_scanning [height=2.5,
        label=<<FONT POINT-SIZE="20">S-201 扫描中</FONT>>,
        likec4_id="feat_knowledge_f.st_scanning",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_intake -> st_scanning [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">抽取候选知识</FONT></TD></TR></TABLE>>,
        likec4_id=k63dqf,
        style=dashed];
    st_pendingreview [height=2.5,
        label=<<FONT POINT-SIZE="20">S-202 待人工审阅</FONT>>,
        likec4_id="feat_knowledge_f.st_pendingReview",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_scanning -> st_pendingreview [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选</FONT></TD></TR></TABLE>>,
        likec4_id="1014rvi",
        style=dashed];
    st_pendingreview -> st_intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">驳回退回</FONT></TD></TR></TABLE>>,
        likec4_id="1okcx6b",
        style=dashed];
    st_published [height=2.5,
        label=<<FONT POINT-SIZE="20">S-203 已发布可检索</FONT>>,
        likec4_id="feat_knowledge_f.st_published",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_pendingreview -> st_published [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准晋升</FONT></TD></TR></TABLE>>,
        likec4_id=fwthuf,
        style=dashed];
    st_stale [height=2.5,
        label=<<FONT POINT-SIZE="20">S-204 新鲜度异常</FONT>>,
        likec4_id="feat_knowledge_f.st_stale",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    st_published -> st_stale [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">超出新鲜度阈值</FONT></TD></TR></TABLE>>,
        likec4_id="17unjlp",
        style=dashed];
    st_stale -> st_scanning [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">重新扫描</FONT></TD></TR></TABLE>>,
        likec4_id=yyj53o,
        style=dashed];
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
    subgraph cluster_us_scan {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>US-201 素材入库后自动进入候选知识</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_scan",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        i_scan_register [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-211 登记素材</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把上传的素材登记到文档簿，生成文档标识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_scan_register",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_scan_extract [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-212 抽取候选知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从素材正文中抽取可独立回答问题的候选条目。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_scan_extract",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_scan_submit [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-213 提交候选</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把候选条目提交给治理环节，等待决策。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_scan.i_scan_submit",
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
            margin=40,
            style=filled
        ];
        i_gov_review [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-221 人工审阅候选</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示候选条目供运营人员逐条审阅。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_gov_review",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_gov_decide [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-222 记录决策</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">记录批准或驳回，驳回需填写理由。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_gov_decide",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_gov_promote [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-223 晋升知识</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">批准的候选进入知识库生命周期，进入可检索状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_govern.i_gov_promote",
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
        i_alert_probe [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-231 巡检数据集状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">定期探测知识库数据集的可用性与新鲜度。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_probe",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_alert_judge [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-232 判定新鲜度异常</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">按更新时间阈值判定是否属于陈旧或异常。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_judge",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_alert_report [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-233 上报告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把问题条目写入告警并在控制台列出。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    i_scan_register -> i_scan_extract [style=invis];
    i_scan_extract -> i_gov_decide [style=invis];
    i_scan_submit -> i_gov_review [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选进入治理</FONT></TD></TR></TABLE>>,
        likec4_id="1ula3st",
        style=solid,
        weight=3];
    i_gov_decide -> i_alert_probe [style=invis];
    i_gov_promote -> i_alert_judge [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升后进入新鲜度巡检</FONT></TD></TR></TABLE>>,
        likec4_id="1ayojck",
        style=solid,
        weight=3];
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
    subgraph cluster_i_alert_report {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>I-233 上报告警</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui_console [group="feat_knowledge_f.us_alert.i_alert_report",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-201 运营控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_information [group="feat_knowledge_f.us_alert.i_alert_report",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-202 知识运营信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    ui_console -> ui_information [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="542m5t",
        minlen=0,
        style=solid];
    ui_information -> ui_console [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id="16igii9",
        minlen=0,
        style=solid];
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
    subgraph cluster_ui_information {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-202 知识运营信息设计</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_knowledgeroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-202 知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js —<BR/>知识扫描、同步与生命周期接口。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_knowledgeRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgesync [group="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-208 知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-sync-service.js —<BR/>把已批准知识推送到 RAGFlow。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_knowledgeSync",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_lifecycle [group="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-209 知识生命周期视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-lifecycle-service.js —<BR/>知识的晋升与下线。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_lifecycle",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_documentregistry [group="feat_knowledge_f.us_alert.i_alert_report.ui_information",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-205 文档登记簿</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-document-registry.js —<BR/>跟踪素材与文档标识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_information.src_documentRegistry",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    subgraph cluster_ui_console {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI-201 运营控制台</B></FONT>>,
            likec4_depth=1,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        src_materialroutes [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-201 素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js — 美妆素材接入接口。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_materialRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_materialbatch [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-204 素材批处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-batch-service.js —<BR/>批量素材接入。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_materialBatch",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_knowledgescan [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-206 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-scan-service.js —<BR/>发现候选知识。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_knowledgeScan",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_materialservice [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-203 素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/material-service.js — 素材接入规则。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_materialService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_governance [group="feat_knowledge_f.us_alert.i_alert_report.ui_console",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-207 知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-governance-service.js<BR/>— 发布决策与治理。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_knowledge_f.us_alert.i_alert_report.ui_console.src_governance",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    src_knowledgeroutes -> src_knowledgescan [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发扫描</FONT></TD></TR></TABLE>>,
        likec4_id="1lqctlw",
        minlen=1,
        style=solid];
    src_materialroutes -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">接收素材</FONT></TD></TR></TABLE>>,
        likec4_id=o00cd,
        minlen=1,
        style=solid,
        weight=3];
    src_materialbatch -> src_materialservice [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批量接入</FONT></TD></TR></TABLE>>,
        likec4_id=cdp1jf,
        minlen=1,
        style=solid,
        weight=3];
    src_knowledgescan -> src_governance [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交候选</FONT></TD></TR></TABLE>>,
        likec4_id=itbt7t,
        style=solid,
        weight=3];
    src_materialservice -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记文档</FONT></TD></TR></TABLE>>,
        likec4_id="19midlp",
        style=solid];
    src_governance -> src_knowledgesync [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批准后推送</FONT></TD></TR></TABLE>>,
        likec4_id="44xv1m",
        style=solid];
    src_knowledgesync -> src_lifecycle [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">更新生命周期</FONT></TD></TR></TABLE>>,
        likec4_id="1o6stu1",
        style=solid,
        weight=3];
    src_lifecycle -> src_documentregistry [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id="905r6u",
        style=solid,
        weight=3];
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
    api_material [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-201 POST /materials 素材接入</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/material-routes.js:8 — 接收素材。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.lane_edge.api_material",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-202 POST /knowledge/scan 知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:10 — 触发候选知识扫描。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.lane_edge.api_scan",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_material -> api_scan [style=invis];
    api_status [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-203 GET /knowledge/status 知识状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/knowledge-routes.js:26 —<BR/>查询扫描与治理状态。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_knowledge_f.lane_edge.api_status",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    api_scan -> api_status [style=invis];
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
  "src_answerorchestrator" [
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_ragflowknowledge" [
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问。</FONT></TD></TR></TABLE>>;
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
  "src_replypolicy" [
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>;
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
  "src_answerorchestrator" -> "src_ragflowknowledge" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_ragflowknowledge" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">请求 RAGFlow</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "src_ragflowknowledge" -> "ext_ragflow" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回候选知识</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "src_answerorchestrator" -> "src_replypolicy" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">校验置信度</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "src_replypolicy" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">达标放行并返回答复</FONT></TD></TR></TABLE>>;
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
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_answerorchestrator" [
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_handoffservice" [
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_interaction.src_handoffService";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "src_store" [
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_information.src_store";
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
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_interaction";
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
    likec4_id = "feat_answer_f.us_ask.i_ask_deliver.ui_information";
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
  "i_kb_count" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_kb_count";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111 读取条目数</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</FONT></TD></TR></TABLE>>;
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
  "i_ll_notify" [
    likec4_id = "feat_degrade_nf.us_llmDown.i_ll_notify";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-133 告知等待人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">在会话中告知已转人工，不返回空白内容。</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "actor_ops" -> "api_status" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">查询集成状态</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_status" -> "i_kb_count" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发起探测</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_kb_count" -> "ext_ragflow" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">探测数据集可用性</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_kb_count" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回探测结论</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "i_kb_count" -> "i_ll_notify" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">提交发布判定并下发提示</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "actor_ops" -> "i_ll_notify" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">告知客户</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
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
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_kb_render.ui_status";
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
  "i_kb_count" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_kb_count";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111 读取条目数</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</FONT></TD></TR></TABLE>>;
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
  "api_status" -> "i_kb_count" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">②发起探测</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_kb_count" -> "i_kb_judge" [
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">POST /wechat/callback</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "api_chatcallback" -> "i_ask_deliver" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">触发应答</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_deliver" -> "ext_ragflow" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">检索知识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_ask_deliver" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回候选知识</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "api_chatcallback" -> "i_ask_deliver" [
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
  "i_kb_count" [
    likec4_id = "feat_degrade_nf.us_kbEmpty.i_kb_count";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-111 读取条目数</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</FONT></TD></TR></TABLE>>;
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
  "api_status" -> "i_kb_count" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发起探测</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_kb_count" -> "ext_ragflow" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">探测数据集</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "i_kb_count" -> "ext_ragflow" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回结论</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`proc-local`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`pano-us`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3425pt" height="973pt"
 viewBox="0.00 0.00 3425.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_knowledge_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 916,-934.8 916,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;002&#45;F 知识运营能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="946,-330.8 946,-934.8 2547,-934.8 2547,-330.8 946,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="954" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="844.63,-550.8 79.37,-550.8 79.37,-370.8 844.63,-370.8 844.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="308.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="99.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- us_alert -->
<g id="node3" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="844.63,-228 79.37,-228 79.37,-48 844.63,-48 844.63,-228"/>
<text xml:space="preserve" text-anchor="start" x="333.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="99.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- us_kbempty -->
<g id="node4" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1838.39,-873.6 985.61,-873.6 985.61,-693.6 1838.39,-693.6 1838.39,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1266.96" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="1005.67" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="1393.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node5" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2507.27,-873.6 1948.73,-873.6 1948.73,-693.6 2507.27,-693.6 2507.27,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2054.07" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="1968.78" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="2134.23" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node6" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2177.62,-550.8 1462.38,-550.8 1462.38,-370.8 2177.62,-370.8 2177.62,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1652.73" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="1482.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- us_ask -->
<g id="node7" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3394.88,-873.6 2617.12,-873.6 2617.12,-693.6 3394.88,-693.6 3394.88,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2885.97" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="2637.18" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node8" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3388.63,-550.8 2623.37,-550.8 2623.37,-370.8 3388.63,-370.8 3388.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2877.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="2643.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- us_scan&#45;&gt;us_govern -->
<g id="edge2" class="edge">
<title>us_scan&#45;&gt;us_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M462,-693.67C462,-652.47 462,-603.36 462,-560.97"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="464.63,-561.16 462,-553.66 459.38,-561.16 464.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462,-610.8 462,-633.6 561.35,-633.6 561.35,-610.8 462,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="465" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">提交候选进入治理</text>
</g>
<!-- us_govern&#45;&gt;us_alert -->
<g id="edge5" class="edge">
<title>us_govern&#45;&gt;us_alert</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M462,-370.87C462,-329.67 462,-280.56 462,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="464.63,-238.36 462,-230.86 459.38,-238.36 464.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462,-288 462,-310.8 584.69,-310.8 584.69,-288 462,-288"/>
<text xml:space="preserve" text-anchor="start" x="465" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">晋升后进入新鲜度巡检</text>
</g>
<!-- us_kbempty&#45;&gt;us_llmdown -->
<g id="edge3" class="edge">
<title>us_kbempty&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1525.11,-693.67C1579.17,-651.16 1643.93,-600.24 1698.98,-556.96"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1700.37,-559.2 1704.65,-552.5 1697.13,-555.07 1700.37,-559.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1628.23,-610.8 1628.23,-633.6 1704.25,-633.6 1704.25,-610.8 1628.23,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1631.23" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- us_ragtimeout&#45;&gt;us_llmdown -->
<g id="edge4" class="edge">
<title>us_ragtimeout&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2114.89,-693.67C2060.83,-651.16 1996.07,-600.24 1941.02,-556.96"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1942.87,-555.07 1935.35,-552.5 1939.63,-559.2 1942.87,-555.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2036.23,-610.8 2036.23,-633.6 2147.25,-633.6 2147.25,-610.8 2036.23,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2039.23" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">统一由提示环节下发</text>
</g>
<!-- us_ask&#45;&gt;us_lowconfidence -->
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
<svg width="3144pt" height="973pt"
 viewBox="0.00 0.00 3144.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 866,-934.8 866,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="890,-653.6 890,-934.8 2423,-934.8 2423,-653.6 890,-653.6"/>
<text xml:space="preserve" text-anchor="start" x="898" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_lowconfidence -->
<g id="node1" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="819.63,-873.6 54.37,-873.6 54.37,-693.6 819.63,-693.6 819.63,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="308.63" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="74.43" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- i_goal_1 -->
<g id="node2" class="node">
<title>i_goal_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="682.1,-550.8 191.9,-550.8 191.9,-370.8 682.1,-370.8 682.1,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="381.43" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;G0 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="211.96" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工；两条路径都不产生编造内容。</text>
</g>
<!-- us_ask -->
<g id="node3" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.88,-228 48.12,-228 48.12,-48 825.88,-48 825.88,-228"/>
<text xml:space="preserve" text-anchor="start" x="316.97" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="68.18" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_kbempty -->
<g id="node4" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1782.39,-873.6 929.61,-873.6 929.61,-693.6 1782.39,-693.6 1782.39,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1210.96" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="949.67" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="1337.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- i_goal_2 -->
<g id="node5" class="node">
<title>i_goal_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2382.59,-873.6 1967.41,-873.6 1967.41,-693.6 2382.59,-693.6 2382.59,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2119.43" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;G0 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="1987.46" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
<!-- i_goal -->
<g id="node6" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2907.59,-873.6 2492.41,-873.6 2492.41,-693.6 2907.59,-693.6 2907.59,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2644.43" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;G0 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="2512.46" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</text>
</g>
<!-- us_scan -->
<g id="node7" class="node">
<title>us_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3113.88,-550.8 2286.12,-550.8 2286.12,-370.8 3113.88,-370.8 3113.88,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2554.96" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="2306.17" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
</g>
<!-- us_lowconfidence&#45;&gt;i_goal_1 -->
<g id="edge2" class="edge">
<title>us_lowconfidence&#45;&gt;i_goal_1</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M437,-693.67C437,-652.47 437,-603.36 437,-560.97"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="439.63,-561.16 437,-553.66 434.38,-561.16 439.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="437,-610.8 437,-633.6 513.01,-633.6 513.01,-610.8 437,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="440" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
</g>
<!-- i_goal_1&#45;&gt;us_ask -->
<g id="edge4" class="edge">
<title>i_goal_1&#45;&gt;us_ask</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M437,-370.87C437,-329.67 437,-280.56 437,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="439.63,-238.36 437,-230.86 434.38,-238.36 439.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="437,-288 437,-310.8 513.01,-310.8 513.01,-288 437,-288"/>
<text xml:space="preserve" text-anchor="start" x="440" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">支撑下发环节</text>
</g>
<!-- us_kbempty&#45;&gt;i_goal_2 -->
<g id="edge3" class="edge">
<title>us_kbempty&#45;&gt;i_goal_2</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1782.29,-783.6C1842.81,-783.6 1902.85,-783.6 1957.09,-783.6"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1956.98,-786.23 1964.48,-783.6 1956.98,-780.98 1956.98,-786.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1836.89,-786.6 1836.89,-809.4 1912.9,-809.4 1912.9,-786.6 1836.89,-786.6"/>
<text xml:space="preserve" text-anchor="start" x="1839.89" y="-792.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
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
<svg width="2690pt" height="1618pt"
 viewBox="0.00 0.00 2690.00 1618.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1603.45)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-330.8 8,-1580.4 838,-1580.4 838,-330.8 8,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1567.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="868,-330.8 868,-1580.4 1971,-1580.4 1971,-330.8 868,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="876" y="-1567.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_feat_knowledge_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1979,-8 1979,-1580.4 2652,-1580.4 2652,-8 1979,-8"/>
<text xml:space="preserve" text-anchor="start" x="1987" y="-1567.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;002&#45;F 知识运营能力</text>
</g>
<!-- st_received -->
<g id="node1" class="node">
<title>st_received</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="457.02,-1519.2 136.98,-1519.2 136.98,-1339.2 457.02,-1339.2 457.02,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="242.53" y="-1421.2" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;000 已接收</text>
</g>
<!-- st_retrieving -->
<g id="node2" class="node">
<title>st_retrieving</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="457.02,-1196.4 136.98,-1196.4 136.98,-1016.4 457.02,-1016.4 457.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="242.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;001 检索中</text>
</g>
<!-- st_answering -->
<g id="node3" class="node">
<title>st_answering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="153.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;002 应答中</text>
</g>
<!-- st_waitinghuman -->
<g id="node4" class="node">
<title>st_waitinghuman</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-873.6 477.98,-873.6 477.98,-693.6 798.02,-693.6 798.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="583.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;004 待人工</text>
</g>
<!-- st_answered -->
<g id="node5" class="node">
<title>st_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="520.02,-550.8 199.98,-550.8 199.98,-370.8 520.02,-370.8 520.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="305.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;003 已答复</text>
</g>
<!-- st_unprobed -->
<g id="node6" class="node">
<title>st_unprobed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-1519.2 1337.98,-1519.2 1337.98,-1339.2 1658.02,-1339.2 1658.02,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="1443.53" y="-1421.2" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;100 未探测</text>
</g>
<!-- st_probing -->
<g id="node7" class="node">
<title>st_probing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-1196.4 1337.98,-1196.4 1337.98,-1016.4 1658.02,-1016.4 1658.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1443.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;101 探测中</text>
</g>
<!-- st_healthy -->
<g id="node8" class="node">
<title>st_healthy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-873.6 907.98,-873.6 907.98,-693.6 1228.02,-693.6 1228.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1021.87" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;102 正常</text>
</g>
<!-- st_scenariohit -->
<g id="node9" class="node">
<title>st_scenariohit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-873.6 1337.98,-873.6 1337.98,-693.6 1658.02,-693.6 1658.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1418.53" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;103 命中极端场景</text>
</g>
<!-- st_notified -->
<g id="node10" class="node">
<title>st_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1862.02,-550.8 1541.98,-550.8 1541.98,-370.8 1862.02,-370.8 1862.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1630.86" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;104 已下发提示</text>
</g>
<!-- st_intake -->
<g id="node11" class="node">
<title>st_intake</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2543.02,-1519.2 2222.98,-1519.2 2222.98,-1339.2 2543.02,-1339.2 2543.02,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="2328.53" y="-1421.2" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;200 待接入</text>
</g>
<!-- st_scanning -->
<g id="node12" class="node">
<title>st_scanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2339.02,-1196.4 2018.98,-1196.4 2018.98,-1016.4 2339.02,-1016.4 2339.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2124.53" y="-1098.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;201 扫描中</text>
</g>
<!-- st_pendingreview -->
<g id="node13" class="node">
<title>st_pendingreview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2610.02,-873.6 2289.98,-873.6 2289.98,-693.6 2610.02,-693.6 2610.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2378.86" y="-775.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;202 待人工审阅</text>
</g>
<!-- st_published -->
<g id="node14" class="node">
<title>st_published</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2610.02,-550.8 2289.98,-550.8 2289.98,-370.8 2610.02,-370.8 2610.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2370.53" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;203 已发布可检索</text>
</g>
<!-- st_stale -->
<g id="node15" class="node">
<title>st_stale</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2436.02,-228 2115.98,-228 2115.98,-48 2436.02,-48 2436.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="2204.86" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;204 新鲜度异常</text>
</g>
<!-- st_received&#45;&gt;st_retrieving -->
<g id="edge1" class="edge">
<title>st_received&#45;&gt;st_retrieving</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M297,-1339.27C297,-1298.07 297,-1248.96 297,-1206.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="299.63,-1206.76 297,-1199.26 294.38,-1206.76 299.63,-1206.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="297,-1256.4 297,-1279.2 349.68,-1279.2 349.68,-1256.4 297,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="300" y="-1262.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起检索</text>
</g>
<!-- st_retrieving&#45;&gt;st_answering -->
<g id="edge4" class="edge">
<title>st_retrieving&#45;&gt;st_answering</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M272.33,-1016.47C260.87,-975.18 247.22,-925.95 235.44,-883.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="237.99,-882.87 233.45,-876.35 232.93,-884.28 237.99,-882.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="255.17,-933.6 255.17,-956.4 319.51,-956.4 319.51,-933.6 255.17,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="258.17" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度达标</text>
</g>
<!-- st_retrieving&#45;&gt;st_waitinghuman -->
<g id="edge5" class="edge">
<title>st_retrieving&#45;&gt;st_waitinghuman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M391.53,-1016.47C436.44,-974.22 490.18,-923.67 536,-880.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="537.71,-882.55 541.37,-875.5 534.11,-878.73 537.71,-882.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="477.72,-933.6 477.72,-956.4 542.07,-956.4 542.07,-933.6 477.72,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="480.72" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度不足</text>
</g>
<!-- st_answering&#45;&gt;st_answered -->
<g id="edge9" class="edge">
<title>st_answering&#45;&gt;st_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M250.14,-693.67C269.82,-652.12 293.32,-602.53 313.52,-559.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="315.78,-561.27 316.62,-553.37 311.03,-559.02 315.78,-561.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="288.56,-610.8 288.56,-633.6 352.9,-633.6 352.9,-610.8 288.56,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="291.56" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">答复已下发</text>
</g>
<!-- st_waitinghuman&#45;&gt;st_answered -->
<g id="edge10" class="edge">
<title>st_waitinghuman&#45;&gt;st_answered</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M560.93,-693.67C524.55,-651.68 481.05,-601.49 443.85,-558.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="445.86,-556.87 438.96,-552.92 441.89,-560.3 445.86,-556.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="507.34,-610.8 507.34,-633.6 571.68,-633.6 571.68,-610.8 507.34,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="510.34" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">人工已接管</text>
</g>
<!-- st_unprobed&#45;&gt;st_probing -->
<g id="edge2" class="edge">
<title>st_unprobed&#45;&gt;st_probing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1498,-1339.27C1498,-1298.07 1498,-1248.96 1498,-1206.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1500.63,-1206.76 1498,-1199.26 1495.38,-1206.76 1500.63,-1206.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1498,-1256.4 1498,-1279.2 1550.68,-1279.2 1550.68,-1256.4 1498,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1501" y="-1262.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- st_probing&#45;&gt;st_healthy -->
<g id="edge6" class="edge">
<title>st_probing&#45;&gt;st_healthy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1378.79,-1016.47C1321.7,-973.87 1253.28,-922.83 1195.19,-879.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1197.07,-877.62 1189.49,-875.24 1193.93,-881.83 1197.07,-877.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1295.89,-933.6 1295.89,-956.4 1348.57,-956.4 1348.57,-933.6 1295.89,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1298.89" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测通过</text>
</g>
<!-- st_probing&#45;&gt;st_scenariohit -->
<g id="edge7" class="edge">
<title>st_probing&#45;&gt;st_scenariohit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1498,-1016.47C1498,-975.27 1498,-926.16 1498,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1500.63,-883.96 1498,-876.46 1495.38,-883.96 1500.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1498,-933.6 1498,-956.4 1574.01,-956.4 1574.01,-933.6 1498,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1501" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测命中异常</text>
</g>
<!-- st_scenariohit&#45;&gt;st_notified -->
<g id="edge11" class="edge">
<title>st_scenariohit&#45;&gt;st_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1554.55,-693.67C1581.09,-651.94 1612.77,-602.11 1639.96,-559.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1642.08,-560.92 1643.89,-553.18 1637.65,-558.1 1642.08,-560.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1606.12,-610.8 1606.12,-633.6 1658.79,-633.6 1658.79,-610.8 1606.12,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1609.12" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">下发提示</text>
</g>
<!-- st_notified&#45;&gt;st_probing -->
<g id="edge14" class="edge">
<title>st_notified&#45;&gt;st_probing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1723.75,-550.39C1740.41,-636.2 1754.27,-768.41 1713,-873.6 1692.85,-924.95 1655.39,-971.7 1617.31,-1009.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1615.89,-1007.28 1612.36,-1014.41 1619.56,-1011.03 1615.89,-1007.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1740.12,-772.2 1740.12,-795 1792.79,-795 1792.79,-772.2 1740.12,-772.2"/>
<text xml:space="preserve" text-anchor="start" x="1743.12" y="-778" font-family="Arial" font-size="14.00" fill="#c9c9c9">继续巡检</text>
</g>
<!-- st_intake&#45;&gt;st_scanning -->
<g id="edge3" class="edge">
<title>st_intake&#45;&gt;st_scanning</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2326.45,-1339.27C2299.91,-1297.54 2268.23,-1247.71 2241.04,-1204.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2243.35,-1203.7 2237.11,-1198.78 2238.92,-1206.52 2243.35,-1203.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2287.12,-1256.4 2287.12,-1279.2 2363.13,-1279.2 2363.13,-1256.4 2287.12,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="2290.12" y="-1262.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">抽取候选知识</text>
</g>
<!-- st_scanning&#45;&gt;st_pendingreview -->
<g id="edge8" class="edge">
<title>st_scanning&#45;&gt;st_pendingreview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2254.13,-1016.47C2289.59,-974.48 2331.99,-924.29 2368.26,-881.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2370.17,-883.17 2373.01,-875.74 2366.16,-879.78 2370.17,-883.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2322.63,-933.6 2322.63,-956.4 2375.3,-956.4 2375.3,-933.6 2322.63,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="2325.63" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交候选</text>
</g>
<!-- st_pendingreview&#45;&gt;st_intake -->
<g id="edge12" class="edge">
<title>st_pendingreview&#45;&gt;st_intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2440.74,-873.54C2428.3,-993 2406.27,-1204.65 2393.32,-1329.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2390.72,-1328.64 2392.56,-1336.38 2395.95,-1329.19 2390.72,-1328.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2425.34,-1095 2425.34,-1117.8 2478.02,-1117.8 2478.02,-1095 2425.34,-1095"/>
<text xml:space="preserve" text-anchor="start" x="2428.34" y="-1100.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">驳回退回</text>
</g>
<!-- st_pendingreview&#45;&gt;st_published -->
<g id="edge13" class="edge">
<title>st_pendingreview&#45;&gt;st_published</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2450,-693.67C2450,-652.47 2450,-603.36 2450,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2452.63,-561.16 2450,-553.66 2447.38,-561.16 2452.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2450,-610.8 2450,-633.6 2502.68,-633.6 2502.68,-610.8 2450,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2453" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">批准晋升</text>
</g>
<!-- st_published&#45;&gt;st_stale -->
<g id="edge15" class="edge">
<title>st_published&#45;&gt;st_stale</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2401.76,-370.87C2379.18,-329.23 2352.22,-279.52 2329.06,-236.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2331.51,-235.83 2325.62,-230.49 2326.89,-238.33 2331.51,-235.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2368.22,-288 2368.22,-310.8 2455.9,-310.8 2455.9,-288 2368.22,-288"/>
<text xml:space="preserve" text-anchor="start" x="2371.22" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">超出新鲜度阈值</text>
</g>
<!-- st_stale&#45;&gt;st_scanning -->
<g id="edge16" class="edge">
<title>st_stale&#45;&gt;st_scanning</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2254.33,-227.83C2247.18,-260.08 2239.82,-296.92 2235,-330.8 2200.68,-571.96 2186.91,-858.52 2181.78,-1006.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2179.16,-1006.08 2181.53,-1013.66 2184.4,-1006.26 2179.16,-1006.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2204.03,-610.8 2204.03,-633.6 2256.71,-633.6 2256.71,-610.8 2204.03,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2207.03" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">重新扫描</text>
</g>
</g>
</svg>
`;case`pano-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3745pt" height="643pt"
 viewBox="0.00 0.00 3745.00 643.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 628.25)">
<g id="clust1" class="cluster">
<title>cluster_i_ask_deliver</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-324 8,-605.2 1520,-605.2 1520,-324 8,-324"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-592.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;006 下发答复</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_i_alert_report</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1550,-324 1550,-605.2 3076,-605.2 3076,-324 1550,-324"/>
<text xml:space="preserve" text-anchor="start" x="1558" y="-592.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;233 上报告警</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_us_kbempty</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3113,-332 3113,-597.2 3601,-597.2 3601,-332 3113,-332"/>
<text xml:space="preserve" text-anchor="start" x="3121" y="-584.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;101 知识库为空时运营人员能看见</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_us_llmdown</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3007,-8 3007,-273.2 3707,-273.2 3707,-8 3007,-8"/>
<text xml:space="preserve" text-anchor="start" x="3015" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;103 LLM 不可用时转人工而非静默失败</text>
</g>
<!-- ui_interaction -->
<g id="node1" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="446.05,-544 47.95,-544 47.95,-364 446.05,-364 446.05,-544"/>
<text xml:space="preserve" text-anchor="start" x="147.53" y="-457" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="71.97" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- ui_information -->
<g id="node2" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1480.35,-544 619.65,-544 619.65,-364 1480.35,-364 1480.35,-544"/>
<text xml:space="preserve" text-anchor="start" x="967.2" y="-457" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="643.67" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- ui_console -->
<g id="node3" class="node">
<title>ui_console</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2013.55,-544 1590.45,-544 1590.45,-364 2013.55,-364 2013.55,-544"/>
<text xml:space="preserve" text-anchor="start" x="1727.53" y="-457" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;201 运营控制台</text>
<text xml:space="preserve" text-anchor="start" x="1614.46" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</text>
</g>
<!-- ui_information_1 -->
<g id="node4" class="node">
<title>ui_information_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3035.85,-544 2150.15,-544 2150.15,-364 3035.85,-364 3035.85,-544"/>
<text xml:space="preserve" text-anchor="start" x="2493.53" y="-457" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;202 知识运营信息设计</text>
<text xml:space="preserve" text-anchor="start" x="2174.17" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</text>
</g>
<!-- ui_status -->
<g id="node5" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3568.55,-544 3145.45,-544 3145.45,-364 3568.55,-364 3568.55,-544"/>
<text xml:space="preserve" text-anchor="start" x="3265.86" y="-457" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="3169.46" y="-434" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
<!-- ui_notice -->
<g id="node6" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3674.82,-220 3039.18,-220 3039.18,-40 3674.82,-40 3674.82,-220"/>
<text xml:space="preserve" text-anchor="start" x="3274.2" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="3063.19" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
<!-- ui_interaction&#45;&gt;ui_information -->
<g id="edge1" class="edge">
<title>ui_interaction&#45;&gt;ui_information</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M446.01,-454C496.29,-454 552.31,-454 609.39,-454"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="609.15,-456.63 616.65,-454 609.15,-451.38 609.15,-456.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="500.68,-457 500.68,-479.8 565.02,-479.8 565.02,-457 500.68,-457"/>
<text xml:space="preserve" text-anchor="start" x="503.68" y="-462.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- ui_console&#45;&gt;ui_information_1 -->
<g id="edge2" class="edge">
<title>ui_console&#45;&gt;ui_information_1</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2013.41,-431.64C2031.97,-430.25 2050.49,-429.06 2068.36,-428.2 2091.77,-427.07 2115.77,-426.42 2140,-426.18"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2139.89,-428.81 2147.37,-426.12 2139.85,-423.56 2139.89,-428.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2068.36,-428.2 2068.36,-451 2095.35,-451 2095.35,-428.2 2068.36,-428.2"/>
<text xml:space="preserve" text-anchor="start" x="2071.36" y="-436.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">[...]</text>
</g>
<!-- ui_information_1&#45;&gt;ui_console -->
<g id="edge4" class="edge">
<title>ui_information_1&#45;&gt;ui_console</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2150.52,-454C2106.79,-454 2063.83,-454 2023.83,-454"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2023.98,-451.38 2016.48,-454 2023.98,-456.63 2023.98,-451.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2055.51,-457 2055.51,-479.8 2108.19,-479.8 2108.19,-457 2055.51,-457"/>
<text xml:space="preserve" text-anchor="start" x="2058.51" y="-462.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- ui_status&#45;&gt;ui_notice -->
<g id="edge3" class="edge">
<title>ui_status&#45;&gt;ui_notice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M3357,-364.16C3357,-322.63 3357,-273.02 3357,-230.26"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3359.63,-230.36 3357,-222.86 3354.38,-230.36 3359.63,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3357,-281.2 3357,-304 3433.01,-304 3433.01,-281.2 3357,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="3360" y="-287" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
</g>
</svg>
`;case`pano-src-001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1562pt" height="1297pt"
 viewBox="0.00 0.00 1562.00 1297.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1281.85)">
<g id="clust1" class="cluster">
<title>cluster_ui_interaction</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1258.8 1014,-1258.8 1014,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1245.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;001 企业微信会话交互</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ui_information</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1022,-16 1022,-281.2 1524,-281.2 1524,-16 1022,-16"/>
<text xml:space="preserve" text-anchor="start" x="1030" y="-268.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;002 答复信息设计</text>
</g>
<!-- src_wechatcallback -->
<g id="node1" class="node">
<title>src_wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.02,-1197.6 595.98,-1197.6 595.98,-1017.6 926.02,-1017.6 926.02,-1197.6"/>
<text xml:space="preserve" text-anchor="start" x="650.41" y="-1119.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="654.72" y="-1096.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="660.98" y="-1078.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node2" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.02,-874.8 595.98,-874.8 595.98,-694.8 926.02,-694.8 926.02,-874.8"/>
<text xml:space="preserve" text-anchor="start" x="675.42" y="-796.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="636.8" y="-773.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="692.24" y="-755.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_answerloop -->
<g id="node3" class="node">
<title>src_answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="437.64,-552 48.36,-552 48.36,-372 437.64,-372 437.64,-552"/>
<text xml:space="preserve" text-anchor="start" x="149.08" y="-474" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="88.36" y="-451" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="172.15" y="-433" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- src_handoffservice -->
<g id="node4" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="974.38,-552 547.62,-552 547.62,-372 974.38,-372 974.38,-552"/>
<text xml:space="preserve" text-anchor="start" x="675.42" y="-465" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="587.62" y="-442" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- src_replypolicy -->
<g id="node5" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="393.02,-228 62.98,-228 62.98,-48 393.02,-48 393.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="150.75" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="106.31" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="159.24" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node6" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="875.29,-228 502.71,-228 502.71,-48 875.29,-48 875.29,-228"/>
<text xml:space="preserve" text-anchor="start" x="566.19" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="542.71" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="632.74" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- src_store -->
<g id="node7" class="node">
<title>src_store</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1491.79,-228 1054.21,-228 1054.21,-48 1491.79,-48 1491.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="1195.75" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1094.21" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- src_wechatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge1" class="edge">
<title>src_wechatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M761,-1017.67C761,-976.47 761,-927.36 761,-884.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="763.63,-885.16 761,-877.66 758.38,-885.16 763.63,-885.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="761,-934.8 761,-957.6 848.68,-957.6 848.68,-934.8 761,-934.8"/>
<text xml:space="preserve" text-anchor="start" x="764" y="-940.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">分发归一化消息</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_answerloop -->
<g id="edge2" class="edge">
<title>src_answerorchestrator&#45;&gt;src_answerloop</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M617.4,-694.87C548.34,-652.1 465.53,-600.81 395.37,-557.36"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="396.77,-555.14 389.01,-553.42 394,-559.6 396.77,-555.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="517.53,-612 517.53,-634.8 570.21,-634.8 570.21,-612 517.53,-612"/>
<text xml:space="preserve" text-anchor="start" x="520.53" y="-617.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_handoffservice -->
<g id="edge3" class="edge">
<title>src_answerorchestrator&#45;&gt;src_handoffservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M761,-694.87C761,-653.67 761,-604.56 761,-562.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="763.63,-562.36 761,-554.86 758.38,-562.36 763.63,-562.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="761,-612 761,-634.8 860.35,-634.8 860.35,-612 761,-612"/>
<text xml:space="preserve" text-anchor="start" x="764" y="-617.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- src_answerloop&#45;&gt;src_replypolicy -->
<g id="edge4" class="edge">
<title>src_answerloop&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M238.86,-372.16C236.93,-330.63 234.62,-281.02 232.62,-238.26"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="235.25,-238.22 232.28,-230.85 230.01,-238.47 235.25,-238.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="235.95,-289.2 235.95,-312 300.29,-312 300.29,-289.2 235.95,-289.2"/>
<text xml:space="preserve" text-anchor="start" x="238.95" y="-295" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- src_answerloop&#45;&gt;src_ragflowknowledge -->
<g id="edge5" class="edge">
<title>src_answerloop&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M366.05,-372.16C425.52,-329.22 496.95,-277.65 557.49,-233.94"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="558.96,-236.12 563.51,-229.6 555.89,-231.86 558.96,-236.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="479.37,-289.2 479.37,-312 555.39,-312 555.39,-289.2 479.37,-289.2"/>
<text xml:space="preserve" text-anchor="start" x="482.37" y="-295" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- src_handoffservice&#45;&gt;src_store -->
<g id="edge6" class="edge">
<title>src_handoffservice&#45;&gt;src_store</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M902.26,-372.16C970.81,-329.05 1053.2,-277.23 1122.89,-233.41"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1124.24,-235.66 1129.19,-229.44 1121.45,-231.21 1124.24,-235.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1032.35,-289.2 1032.35,-312 1096.7,-312 1096.7,-289.2 1032.35,-289.2"/>
<text xml:space="preserve" text-anchor="start" x="1035.35" y="-295" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
</g>
</svg>
`;case`pano-src-001NF-empty`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="970pt" height="650pt"
 viewBox="0.00 0.00 970.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_ui_status</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 932,-612 932,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;101 控制台状态提示</text>
</g>
<!-- src_integrationroutes -->
<g id="node1" class="node">
<title>src_integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="404.02,-550.8 73.98,-550.8 73.98,-370.8 404.02,-370.8 404.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="145.08" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="129.79" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="163.99" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- src_knowledgealert -->
<g id="node2" class="node">
<title>src_knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="401.71,-228 48.29,-228 48.29,-48 401.71,-48 401.71,-228"/>
<text xml:space="preserve" text-anchor="start" x="147.75" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="88.29" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="143.73" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- src_ragflowprobe -->
<g id="node3" class="node">
<title>src_ragflowprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="892.45,-228 511.55,-228 511.55,-48 892.45,-48 892.45,-228"/>
<text xml:space="preserve" text-anchor="start" x="562.52" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="551.55" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="582.4" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- src_operatorui -->
<g id="node4" class="node">
<title>src_operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="887.12,-550.8 532.88,-550.8 532.88,-370.8 887.12,-370.8 887.12,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="607.75" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="572.88" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_knowledgealert -->
<g id="edge1" class="edge">
<title>src_integrationroutes&#45;&gt;src_knowledgealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M235.12,-370.87C233.32,-329.67 231.18,-280.56 229.33,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="231.96,-238.23 229.01,-230.85 226.71,-238.46 231.96,-238.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="232.42,-288 232.42,-310.8 308.43,-310.8 308.43,-288 232.42,-288"/>
<text xml:space="preserve" text-anchor="start" x="235.42" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_ragflowprobe -->
<g id="edge2" class="edge">
<title>src_integrationroutes&#45;&gt;src_ragflowprobe</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M367.36,-370.87C428.95,-328.19 502.8,-277.02 565.43,-233.63"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="566.64,-235.98 571.31,-229.55 563.65,-231.67 566.64,-235.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="484.38,-288 484.38,-310.8 572.07,-310.8 572.07,-288 484.38,-288"/>
<text xml:space="preserve" text-anchor="start" x="487.38" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">探测数据集状态</text>
</g>
</g>
</svg>
`;case`pano-src-001NF-notice`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="552pt" height="650pt"
 viewBox="0.00 0.00 552.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_ui_notice</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 514,-612 514,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;102 极端场景提示</text>
</g>
<!-- src_evaluationgate -->
<g id="node1" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="426.02,-550.8 95.98,-550.8 95.98,-370.8 426.02,-370.8 426.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="183.75" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="152.21" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="148.48" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- src_storealert -->
<g id="node2" class="node">
<title>src_storealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="474.38,-228 47.62,-228 47.62,-48 474.38,-48 474.38,-228"/>
<text xml:space="preserve" text-anchor="start" x="167.08" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="87.62" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- src_evaluationgate&#45;&gt;src_storealert -->
<g id="edge1" class="edge">
<title>src_evaluationgate&#45;&gt;src_storealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M261,-370.87C261,-329.67 261,-280.56 261,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="263.63,-238.36 261,-230.86 258.38,-238.36 263.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="261,-288 261,-310.8 337.01,-310.8 337.01,-288 261,-288"/>
<text xml:space="preserve" text-anchor="start" x="264" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
</g>
</svg>
`;case`pano-src-002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2381pt" height="1165pt"
 viewBox="0.00 0.00 2381.00 1165.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1149.65)">
<g id="clust1" class="cluster">
<title>cluster_ui_information</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-956 902,-956 902,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-943.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;202 知识运营信息设计</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ui_console</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="932,-330.8 932,-956 2343,-956 2343,-330.8 932,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="940" y="-943.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;201 运营控制台</text>
</g>
<!-- src_knowledgeroutes -->
<g id="node1" class="node">
<title>src_knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="862.02,-873.6 531.98,-873.6 531.98,-693.6 862.02,-693.6 862.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="611.42" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;202 知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="586.95" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="603.23" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口。</text>
</g>
<!-- src_knowledgesync -->
<g id="node2" class="node">
<title>src_knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="421.54,-873.6 66.46,-873.6 66.46,-693.6 421.54,-693.6 421.54,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="166.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;208 知识同步</text>
<text xml:space="preserve" text-anchor="start" x="106.46" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="147.32" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到 RAGFlow。</text>
</g>
<!-- src_lifecycle -->
<g id="node3" class="node">
<title>src_lifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="432.79,-550.8 55.21,-550.8 55.21,-370.8 432.79,-370.8 432.79,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="133.41" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;209 知识生命周期视图</text>
<text xml:space="preserve" text-anchor="start" x="95.21" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;lifecycle&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="187.74" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识的晋升与下线。</text>
</g>
<!-- src_documentregistry -->
<g id="node4" class="node">
<title>src_documentregistry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="439.89,-228 48.11,-228 48.11,-48 439.89,-48 439.89,-228"/>
<text xml:space="preserve" text-anchor="start" x="158.42" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;205 文档登记簿</text>
<text xml:space="preserve" text-anchor="start" x="88.11" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;document&#45;registry.js —</text>
<text xml:space="preserve" text-anchor="start" x="181.49" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">跟踪素材与文档标识。</text>
</g>
<!-- src_materialroutes -->
<g id="node5" class="node">
<title>src_materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1370.21,-873.6 971.79,-873.6 971.79,-693.6 1370.21,-693.6 1370.21,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1093.75" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;201 素材路由</text>
<text xml:space="preserve" text-anchor="start" x="1011.79" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 美妆素材接入接口。</text>
</g>
<!-- src_materialbatch -->
<g id="node6" class="node">
<title>src_materialbatch</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1822.28,-873.6 1479.72,-873.6 1479.72,-693.6 1822.28,-693.6 1822.28,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1565.42" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;204 素材批处理</text>
<text xml:space="preserve" text-anchor="start" x="1519.72" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;batch&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1607.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">批量素材接入。</text>
</g>
<!-- src_knowledgescan -->
<g id="node7" class="node">
<title>src_knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2287.96,-873.6 1932.04,-873.6 1932.04,-693.6 2287.96,-693.6 2287.96,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2032.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;206 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="1972.04" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="2066.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识。</text>
</g>
<!-- src_materialservice -->
<g id="node8" class="node">
<title>src_materialservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1367.28,-550.8 974.72,-550.8 974.72,-370.8 1367.28,-370.8 1367.28,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1093.75" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;203 素材服务</text>
<text xml:space="preserve" text-anchor="start" x="1014.72" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 素材接入规则。</text>
</g>
<!-- src_governance -->
<g id="node9" class="node">
<title>src_governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2302.98,-550.8 1917.02,-550.8 1917.02,-370.8 2302.98,-370.8 2302.98,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2032.75" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;207 知识治理</text>
<text xml:space="preserve" text-anchor="start" x="1957.02" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="2051.66" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 发布决策与治理。</text>
</g>
<!-- src_knowledgeroutes&#45;&gt;src_knowledgescan -->
<g id="edge1" class="edge">
<title>src_knowledgeroutes&#45;&gt;src_knowledgescan</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M789.06,-873.58C822.78,-900.71 863.03,-927 905,-941.1 1007.38,-975.49 1773.73,-972.73 1877,-941.1 1919.36,-928.13 1960.96,-904.57 1997.01,-879.55"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1998.49,-881.73 2003.1,-875.26 1995.46,-877.44 1998.49,-881.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1370.66,-964 1370.66,-986.8 1423.34,-986.8 1423.34,-964 1370.66,-964"/>
<text xml:space="preserve" text-anchor="start" x="1373.66" y="-969.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- src_knowledgesync&#45;&gt;src_lifecycle -->
<g id="edge7" class="edge">
<title>src_knowledgesync&#45;&gt;src_lifecycle</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M244,-693.67C244,-652.47 244,-603.36 244,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="246.63,-561.16 244,-553.66 241.38,-561.16 246.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="244,-610.8 244,-633.6 320.01,-633.6 320.01,-610.8 244,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="247" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">更新生命周期</text>
</g>
<!-- src_lifecycle&#45;&gt;src_documentregistry -->
<g id="edge8" class="edge">
<title>src_lifecycle&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M244,-370.87C244,-329.67 244,-280.56 244,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="246.63,-238.36 244,-230.86 241.38,-238.36 246.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="244,-288 244,-310.8 308.34,-310.8 308.34,-288 244,-288"/>
<text xml:space="preserve" text-anchor="start" x="247" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
<!-- src_materialroutes&#45;&gt;src_materialservice -->
<g id="edge2" class="edge">
<title>src_materialroutes&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1171,-693.67C1171,-652.47 1171,-603.36 1171,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1173.63,-561.16 1171,-553.66 1168.38,-561.16 1173.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1171,-610.8 1171,-633.6 1223.68,-633.6 1223.68,-610.8 1171,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1174" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">接收素材</text>
</g>
<!-- src_materialbatch&#45;&gt;src_materialservice -->
<g id="edge3" class="edge">
<title>src_materialbatch&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1517.93,-693.67C1454.07,-650.99 1377.52,-599.82 1312.59,-556.43"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1314.12,-554.3 1306.43,-552.31 1311.21,-558.66 1314.12,-554.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1425.39,-610.8 1425.39,-633.6 1478.07,-633.6 1478.07,-610.8 1425.39,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1428.39" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">批量接入</text>
</g>
<!-- src_knowledgescan&#45;&gt;src_governance -->
<g id="edge4" class="edge">
<title>src_knowledgescan&#45;&gt;src_governance</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2110,-693.67C2110,-652.47 2110,-603.36 2110,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2112.63,-561.16 2110,-553.66 2107.38,-561.16 2112.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2110,-610.8 2110,-633.6 2162.68,-633.6 2162.68,-610.8 2110,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2113" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交候选</text>
</g>
<!-- src_materialservice&#45;&gt;src_documentregistry -->
<g id="edge5" class="edge">
<title>src_materialservice&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1016.18,-370.93C987.69,-356.41 957.83,-342.36 929,-330.8 772.29,-267.96 587.59,-217.53 449.49,-184.19"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="450.48,-181.72 442.57,-182.52 449.25,-186.83 450.48,-181.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="875.23,-288 875.23,-310.8 927.9,-310.8 927.9,-288 875.23,-288"/>
<text xml:space="preserve" text-anchor="start" x="878.23" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">登记文档</text>
</g>
<!-- src_governance&#45;&gt;src_knowledgesync -->
<g id="edge6" class="edge">
<title>src_governance&#45;&gt;src_knowledgesync</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1917.27,-486.69C1515.48,-538.94 614.19,-658.14 477,-693.6 461.9,-697.5 446.43,-702.07 431,-707.04"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="430.59,-704.41 424.28,-709.24 432.23,-709.4 430.59,-704.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="993.79,-610.8 993.79,-633.6 1058.14,-633.6 1058.14,-610.8 993.79,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="996.79" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">批准后推送</text>
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
<svg width="970pt" height="1110pt"
 viewBox="0.00 0.00 970.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- api_chatcallback -->
<g id="node1" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="430.26,-1080 0,-1080 0,-900 430.26,-900 430.26,-1080"/>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1002" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="98.42" y="-979" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="146.37" y="-961" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- api_handofflist -->
<g id="node2" class="node">
<title>api_handofflist</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="411.5,-780 18.76,-780 18.76,-600 411.5,-600 411.5,-780"/>
<text xml:space="preserve" text-anchor="start" x="75.62" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;002 GET /handoffs 工单列表</text>
<text xml:space="preserve" text-anchor="start" x="38.82" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/handoff&#45;routes.js:9 — 运营人员查看人工工单。</text>
</g>
<!-- api_status -->
<g id="node3" class="node">
<title>api_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="412.49,-480 17.77,-480 17.77,-300 412.49,-300 412.49,-480"/>
<text xml:space="preserve" text-anchor="start" x="37.83" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="99.66" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="133.86" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
</g>
<!-- api_material -->
<g id="node4" class="node">
<title>api_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="383.56,-180 46.69,-180 46.69,0 383.56,0 383.56,-180"/>
<text xml:space="preserve" text-anchor="start" x="66.75" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;201 POST /materials 素材接入</text>
<text xml:space="preserve" text-anchor="start" x="74.67" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js:8 — 接收素材。</text>
</g>
<!-- api_scan -->
<g id="node5" class="node">
<title>api_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="939.71,-1080 540.55,-1080 540.55,-900 939.71,-900 939.71,-1080"/>
<text xml:space="preserve" text-anchor="start" x="560.6" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;202 POST /knowledge/scan 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="561.31" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:10 — 触发候选知识扫描。</text>
</g>
<!-- api_status_1 -->
<g id="node6" class="node">
<title>api_status_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="938.6,-780 541.66,-780 541.66,-600 938.6,-600 938.6,-780"/>
<text xml:space="preserve" text-anchor="start" x="561.72" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;203 GET /knowledge/status 知识状态</text>
<text xml:space="preserve" text-anchor="start" x="619.66" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:26 —</text>
<text xml:space="preserve" text-anchor="start" x="677.62" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询扫描与治理状态。</text>
</g>
<!-- api_chatcallback&#45;&gt;api_handofflist -->
<!-- api_handofflist&#45;&gt;api_status -->
<!-- api_status&#45;&gt;api_material -->
<!-- api_scan&#45;&gt;api_status_1 -->
</g>
</svg>
`;case`srcdir001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1562pt" height="1297pt"
 viewBox="0.00 0.00 1562.00 1297.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1281.85)">
<g id="clust1" class="cluster">
<title>cluster_ui_interaction</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1258.8 1014,-1258.8 1014,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1245.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;001 企业微信会话交互</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ui_information</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1022,-16 1022,-281.2 1524,-281.2 1524,-16 1022,-16"/>
<text xml:space="preserve" text-anchor="start" x="1030" y="-268.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;002 答复信息设计</text>
</g>
<!-- src_wechatcallback -->
<g id="node1" class="node">
<title>src_wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.02,-1197.6 595.98,-1197.6 595.98,-1017.6 926.02,-1017.6 926.02,-1197.6"/>
<text xml:space="preserve" text-anchor="start" x="650.41" y="-1119.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="654.72" y="-1096.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="660.98" y="-1078.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node2" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.02,-874.8 595.98,-874.8 595.98,-694.8 926.02,-694.8 926.02,-874.8"/>
<text xml:space="preserve" text-anchor="start" x="675.42" y="-796.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="636.8" y="-773.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="692.24" y="-755.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_answerloop -->
<g id="node3" class="node">
<title>src_answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="437.64,-552 48.36,-552 48.36,-372 437.64,-372 437.64,-552"/>
<text xml:space="preserve" text-anchor="start" x="149.08" y="-474" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="88.36" y="-451" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="172.15" y="-433" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- src_handoffservice -->
<g id="node4" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="974.38,-552 547.62,-552 547.62,-372 974.38,-372 974.38,-552"/>
<text xml:space="preserve" text-anchor="start" x="675.42" y="-465" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="587.62" y="-442" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- src_replypolicy -->
<g id="node5" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="393.02,-228 62.98,-228 62.98,-48 393.02,-48 393.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="150.75" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="106.31" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="159.24" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node6" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="875.29,-228 502.71,-228 502.71,-48 875.29,-48 875.29,-228"/>
<text xml:space="preserve" text-anchor="start" x="566.19" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="542.71" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="632.74" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- src_store -->
<g id="node7" class="node">
<title>src_store</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1491.79,-228 1054.21,-228 1054.21,-48 1491.79,-48 1491.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="1195.75" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1094.21" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- src_wechatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge1" class="edge">
<title>src_wechatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M761,-1017.67C761,-976.47 761,-927.36 761,-884.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="763.63,-885.16 761,-877.66 758.38,-885.16 763.63,-885.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="761,-934.8 761,-957.6 848.68,-957.6 848.68,-934.8 761,-934.8"/>
<text xml:space="preserve" text-anchor="start" x="764" y="-940.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">分发归一化消息</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_answerloop -->
<g id="edge2" class="edge">
<title>src_answerorchestrator&#45;&gt;src_answerloop</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M617.4,-694.87C548.34,-652.1 465.53,-600.81 395.37,-557.36"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="396.77,-555.14 389.01,-553.42 394,-559.6 396.77,-555.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="517.53,-612 517.53,-634.8 570.21,-634.8 570.21,-612 517.53,-612"/>
<text xml:space="preserve" text-anchor="start" x="520.53" y="-617.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_handoffservice -->
<g id="edge3" class="edge">
<title>src_answerorchestrator&#45;&gt;src_handoffservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M761,-694.87C761,-653.67 761,-604.56 761,-562.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="763.63,-562.36 761,-554.86 758.38,-562.36 763.63,-562.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="761,-612 761,-634.8 860.35,-634.8 860.35,-612 761,-612"/>
<text xml:space="preserve" text-anchor="start" x="764" y="-617.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- src_answerloop&#45;&gt;src_replypolicy -->
<g id="edge4" class="edge">
<title>src_answerloop&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M238.86,-372.16C236.93,-330.63 234.62,-281.02 232.62,-238.26"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="235.25,-238.22 232.28,-230.85 230.01,-238.47 235.25,-238.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="235.95,-289.2 235.95,-312 300.29,-312 300.29,-289.2 235.95,-289.2"/>
<text xml:space="preserve" text-anchor="start" x="238.95" y="-295" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- src_answerloop&#45;&gt;src_ragflowknowledge -->
<g id="edge5" class="edge">
<title>src_answerloop&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M366.05,-372.16C425.52,-329.22 496.95,-277.65 557.49,-233.94"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="558.96,-236.12 563.51,-229.6 555.89,-231.86 558.96,-236.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="479.37,-289.2 479.37,-312 555.39,-312 555.39,-289.2 479.37,-289.2"/>
<text xml:space="preserve" text-anchor="start" x="482.37" y="-295" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- src_handoffservice&#45;&gt;src_store -->
<g id="edge6" class="edge">
<title>src_handoffservice&#45;&gt;src_store</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M902.26,-372.16C970.81,-329.05 1053.2,-277.23 1122.89,-233.41"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1124.24,-235.66 1129.19,-229.44 1121.45,-231.21 1124.24,-235.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1032.35,-289.2 1032.35,-312 1096.7,-312 1096.7,-289.2 1032.35,-289.2"/>
<text xml:space="preserve" text-anchor="start" x="1035.35" y="-295" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
</g>
</svg>
`;case`srcdir001NF`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="970pt" height="650pt"
 viewBox="0.00 0.00 970.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_ui_status</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 932,-612 932,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;101 控制台状态提示</text>
</g>
<!-- src_integrationroutes -->
<g id="node1" class="node">
<title>src_integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="404.02,-550.8 73.98,-550.8 73.98,-370.8 404.02,-370.8 404.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="145.08" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="129.79" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="163.99" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- src_knowledgealert -->
<g id="node2" class="node">
<title>src_knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="401.71,-228 48.29,-228 48.29,-48 401.71,-48 401.71,-228"/>
<text xml:space="preserve" text-anchor="start" x="147.75" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="88.29" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="143.73" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- src_ragflowprobe -->
<g id="node3" class="node">
<title>src_ragflowprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="892.45,-228 511.55,-228 511.55,-48 892.45,-48 892.45,-228"/>
<text xml:space="preserve" text-anchor="start" x="562.52" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="551.55" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="582.4" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- src_operatorui -->
<g id="node4" class="node">
<title>src_operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="887.12,-550.8 532.88,-550.8 532.88,-370.8 887.12,-370.8 887.12,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="607.75" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="572.88" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_knowledgealert -->
<g id="edge1" class="edge">
<title>src_integrationroutes&#45;&gt;src_knowledgealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M235.12,-370.87C233.32,-329.67 231.18,-280.56 229.33,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="231.96,-238.23 229.01,-230.85 226.71,-238.46 231.96,-238.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="232.42,-288 232.42,-310.8 308.43,-310.8 308.43,-288 232.42,-288"/>
<text xml:space="preserve" text-anchor="start" x="235.42" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_ragflowprobe -->
<g id="edge2" class="edge">
<title>src_integrationroutes&#45;&gt;src_ragflowprobe</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M367.36,-370.87C428.95,-328.19 502.8,-277.02 565.43,-233.63"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="566.64,-235.98 571.31,-229.55 563.65,-231.67 566.64,-235.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="484.38,-288 484.38,-310.8 572.07,-310.8 572.07,-288 484.38,-288"/>
<text xml:space="preserve" text-anchor="start" x="487.38" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">探测数据集状态</text>
</g>
</g>
</svg>
`;case`srcdir001NF-notice`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="552pt" height="650pt"
 viewBox="0.00 0.00 552.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_ui_notice</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 514,-612 514,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;102 极端场景提示</text>
</g>
<!-- src_evaluationgate -->
<g id="node1" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="426.02,-550.8 95.98,-550.8 95.98,-370.8 426.02,-370.8 426.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="183.75" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="152.21" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="148.48" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- src_storealert -->
<g id="node2" class="node">
<title>src_storealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="474.38,-228 47.62,-228 47.62,-48 474.38,-48 474.38,-228"/>
<text xml:space="preserve" text-anchor="start" x="167.08" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="87.62" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- src_evaluationgate&#45;&gt;src_storealert -->
<g id="edge1" class="edge">
<title>src_evaluationgate&#45;&gt;src_storealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M261,-370.87C261,-329.67 261,-280.56 261,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="263.63,-238.36 261,-230.86 258.38,-238.36 263.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="261,-288 261,-310.8 337.01,-310.8 337.01,-288 261,-288"/>
<text xml:space="preserve" text-anchor="start" x="264" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
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
`;case`chain001F-i-state-main`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
<text xml:space="preserve" text-anchor="start" x="105.55" y="-1050.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;000 已接收</text>
</g>
<!-- st_retrieving -->
<g id="node2" class="node">
<title>st_retrieving</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-825.6 0,-825.6 0,-645.6 320.04,-645.6 320.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="105.55" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;001 检索中</text>
</g>
<!-- st_answering -->
<g id="node3" class="node">
<title>st_answering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="105.55" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;002 应答中</text>
</g>
<!-- st_answered -->
<g id="node4" class="node">
<title>st_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="105.55" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;003 已答复</text>
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
`;case`chain001F-i-state`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
<text xml:space="preserve" text-anchor="start" x="320.55" y="-1050.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;000 已接收</text>
</g>
<!-- st_retrieving -->
<g id="node2" class="node">
<title>st_retrieving</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="535.04,-825.6 215,-825.6 215,-645.6 535.04,-645.6 535.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="320.55" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;001 检索中</text>
</g>
<!-- st_answering -->
<g id="node3" class="node">
<title>st_answering</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="105.55" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;002 应答中</text>
</g>
<!-- st_waitinghuman -->
<g id="node4" class="node">
<title>st_waitinghuman</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="535.55" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;004 待人工</text>
</g>
<!-- st_answered -->
<g id="node5" class="node">
<title>st_answered</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="534.04,-180 214,-180 214,0 534.04,0 534.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="319.55" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;003 已答复</text>
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
`;case`chain001F-i-state-branch-human`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
<text xml:space="preserve" text-anchor="start" x="105.55" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;001 检索中</text>
</g>
<!-- st_waitinghuman -->
<g id="node2" class="node">
<title>st_waitinghuman</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="105.55" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;004 待人工</text>
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
<svg width="904pt" height="627pt"
 viewBox="0.00 0.00 904.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 866,-589.2 866,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.88,-528 48.12,-528 48.12,-348 825.88,-348 825.88,-528"/>
<text xml:space="preserve" text-anchor="start" x="316.97" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="68.18" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="819.63,-228 54.37,-228 54.37,-48 819.63,-48 819.63,-228"/>
<text xml:space="preserve" text-anchor="start" x="308.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="74.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
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
<svg width="1647pt" height="650pt"
 viewBox="0.00 0.00 1647.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 1609,-612 1609,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="900.39,-550.8 47.61,-550.8 47.61,-370.8 900.39,-370.8 900.39,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="328.96" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="67.67" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="455.24" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node2" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1569.27,-550.8 1010.73,-550.8 1010.73,-370.8 1569.27,-370.8 1569.27,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1116.07" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="1030.78" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="1196.23" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node3" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1199.62,-228 484.38,-228 484.38,-48 1199.62,-48 1199.62,-228"/>
<text xml:space="preserve" text-anchor="start" x="674.73" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="504.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- us_kbempty&#45;&gt;us_llmdown -->
<g id="edge1" class="edge">
<title>us_kbempty&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M576.02,-370.87C624.58,-328.53 682.71,-277.86 732.23,-234.69"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="733.89,-236.73 737.82,-229.82 730.44,-232.77 733.89,-236.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="669.03,-288 669.03,-310.8 745.05,-310.8 745.05,-288 669.03,-288"/>
<text xml:space="preserve" text-anchor="start" x="672.03" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- us_ragtimeout&#45;&gt;us_llmdown -->
<g id="edge2" class="edge">
<title>us_ragtimeout&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1165.8,-370.87C1106.32,-328.27 1035.04,-277.23 974.52,-233.89"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="976.14,-231.82 968.51,-229.59 973.08,-236.09 976.14,-231.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.43,-288 1079.43,-310.8 1190.45,-310.8 1190.45,-288 1079.43,-288"/>
<text xml:space="preserve" text-anchor="start" x="1082.43" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">统一由提示环节下发</text>
</g>
</g>
</svg>
`;case`chain001F-f`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1780pt" height="650pt"
 viewBox="0.00 0.00 1780.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 1742,-612 1742,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="825.88,-550.8 48.12,-550.8 48.12,-370.8 825.88,-370.8 825.88,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="316.97" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="68.18" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1701.63,-550.8 936.37,-550.8 936.37,-370.8 1701.63,-370.8 1701.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1190.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="956.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- f_answer -->
<g id="node3" class="node">
<title>f_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="597.02,-228 276.98,-228 276.98,-48 597.02,-48 597.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="358.09" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;001 应答编排能力</text>
<text xml:space="preserve" text-anchor="start" x="299.47" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</text>
</g>
<!-- f_retrieval -->
<g id="node4" class="node">
<title>f_retrieval</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1479.02,-228 1158.98,-228 1158.98,-48 1479.02,-48 1479.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1240.09" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;002 知识检索能力</text>
<text xml:space="preserve" text-anchor="start" x="1188.98" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</text>
</g>
<!-- us_ask&#45;&gt;f_answer -->
<g id="edge1" class="edge">
<title>us_ask&#45;&gt;f_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M437,-370.87C437,-329.67 437,-280.56 437,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="439.63,-238.36 437,-230.86 434.38,-238.36 439.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="437,-288 437,-310.8 466.34,-310.8 466.34,-288 437,-288"/>
<text xml:space="preserve" text-anchor="start" x="440" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_lowconfidence&#45;&gt;f_retrieval -->
<g id="edge2" class="edge">
<title>us_lowconfidence&#45;&gt;f_retrieval</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1319,-370.87C1319,-329.67 1319,-280.56 1319,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1321.63,-238.36 1319,-230.86 1316.38,-238.36 1321.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1319,-288 1319,-310.8 1348.34,-310.8 1348.34,-288 1319,-288"/>
<text xml:space="preserve" text-anchor="start" x="1322" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
</g>
</svg>
`;case`chain001NF-nf`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2013pt" height="973pt"
 viewBox="0.00 0.00 2013.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 1975,-934.8 1975,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1105.39,-873.6 252.61,-873.6 252.61,-693.6 1105.39,-693.6 1105.39,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="533.96" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="272.67" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="660.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node2" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1792.27,-873.6 1233.73,-873.6 1233.73,-693.6 1792.27,-693.6 1792.27,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1339.07" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="1253.78" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="1419.23" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- nf_kbempty -->
<g id="node3" class="node">
<title>nf_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="633.82,-550.8 48.18,-550.8 48.18,-370.8 633.82,-370.8 633.82,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="213.19" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;101 知识库为零条时状态可见</text>
<text xml:space="preserve" text-anchor="start" x="72.19" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</text>
</g>
<!-- us_llmdown -->
<g id="node4" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1458.62,-550.8 743.38,-550.8 743.38,-370.8 1458.62,-370.8 1458.62,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="933.73" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="763.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- nf_ragtimeout -->
<g id="node5" class="node">
<title>nf_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1935.5,-550.8 1568.5,-550.8 1568.5,-370.8 1935.5,-370.8 1935.5,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1592.52" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;102 RAGFlow 超 8 秒时客户可感知</text>
<text xml:space="preserve" text-anchor="start" x="1630.31" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8</text>
<text xml:space="preserve" text-anchor="start" x="1595.72" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">秒下发带说明的提示，客服不必反复刷新。角色：客户。</text>
</g>
<!-- nf_llmdown -->
<g id="node6" class="node">
<title>nf_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1375.06,-228 826.94,-228 826.94,-48 1375.06,-48 1375.06,-228"/>
<text xml:space="preserve" text-anchor="start" x="967.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;103 LLM 不可用时自动转人工</text>
<text xml:space="preserve" text-anchor="start" x="850.95" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</text>
</g>
<!-- us_kbempty&#45;&gt;nf_kbempty -->
<g id="edge1" class="edge">
<title>us_kbempty&#45;&gt;nf_kbempty</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M585.3,-693.67C540.79,-651.42 487.52,-600.87 442.1,-557.76"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="444.03,-555.97 436.79,-552.71 440.42,-559.78 444.03,-555.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="520.13,-610.8 520.13,-633.6 549.47,-633.6 549.47,-610.8 520.13,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="523.13" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_kbempty&#45;&gt;us_llmdown -->
<g id="edge2" class="edge">
<title>us_kbempty&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M795.99,-693.67C851.9,-651.16 918.89,-600.24 975.82,-556.96"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="977.36,-559.09 981.74,-552.46 974.18,-554.91 977.36,-559.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="902.65,-610.8 902.65,-633.6 978.67,-633.6 978.67,-610.8 902.65,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="905.65" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- us_ragtimeout&#45;&gt;us_llmdown -->
<g id="edge3" class="edge">
<title>us_ragtimeout&#45;&gt;us_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1398.78,-693.67C1344.19,-651.16 1278.8,-600.24 1223.21,-556.96"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1225,-555.03 1217.47,-552.49 1221.78,-559.17 1225,-555.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1319.35,-610.8 1319.35,-633.6 1430.37,-633.6 1430.37,-610.8 1319.35,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1322.35" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">统一由提示环节下发</text>
</g>
<!-- us_ragtimeout&#45;&gt;nf_ragtimeout -->
<g id="edge4" class="edge">
<title>us_ragtimeout&#45;&gt;nf_ragtimeout</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1579.26,-693.67C1610.47,-651.77 1647.77,-601.7 1679.72,-558.83"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1681.64,-560.64 1684.01,-553.06 1677.43,-557.5 1681.64,-560.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1639.67,-610.8 1639.67,-633.6 1669,-633.6 1669,-610.8 1639.67,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1642.67" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_llmdown&#45;&gt;nf_llmdown -->
<g id="edge5" class="edge">
<title>us_llmdown&#45;&gt;nf_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1101,-370.87C1101,-329.67 1101,-280.56 1101,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1103.63,-238.36 1101,-230.86 1098.38,-238.36 1103.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1101,-288 1101,-310.8 1130.34,-310.8 1130.34,-288 1101,-288"/>
<text xml:space="preserve" text-anchor="start" x="1104" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
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
<text xml:space="preserve" text-anchor="start" x="189.53" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;G0 业务目标</text>
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
<svg width="2556pt" height="627pt"
 viewBox="0.00 0.00 2556.00 627.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 612.25)">
<g id="clust1" class="cluster">
<title>cluster_us_ask</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1626,-589.2 1626,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;001 客户提问获得专业答复</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_us_lowconfidence</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1656,-8 1656,-589.2 2518,-589.2 2518,-8 1656,-8"/>
<text xml:space="preserve" text-anchor="start" x="1664" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;002 答不准时转人工而非硬答</text>
</g>
<!-- i_ask_normalize -->
<g id="node1" class="node">
<title>i_ask_normalize</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="475.84,-528 48.16,-528 48.16,-348 475.84,-348 475.84,-528"/>
<text xml:space="preserve" text-anchor="start" x="194.75" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 归一化提问</text>
<text xml:space="preserve" text-anchor="start" x="68.21" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">把企业微信加密报文解密并归一化为标准提问，识别客户与问题边界。</text>
</g>
<!-- i_ask_retrieve -->
<g id="node2" class="node">
<title>i_ask_retrieve</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1036.09,-528 585.91,-528 585.91,-348 1036.09,-348 1036.09,-528"/>
<text xml:space="preserve" text-anchor="start" x="735.42" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;002 检索候选知识</text>
<text xml:space="preserve" text-anchor="start" x="605.96" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">按归一化后的查询向 RAGFlow 发起检索，取得候选知识条目与相似度。</text>
</g>
<!-- i_ask_rank -->
<g id="node3" class="node">
<title>i_ask_rank</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1586.1,-528 1145.9,-528 1145.9,-348 1586.1,-348 1586.1,-528"/>
<text xml:space="preserve" text-anchor="start" x="1282.08" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 候选排序与择优</text>
<text xml:space="preserve" text-anchor="start" x="1165.96" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">按相似度与知识新鲜度对候选条目排序，取置信度最高的一条进入校验。</text>
</g>
<!-- i_ask_verify -->
<g id="node4" class="node">
<title>i_ask_verify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="522.19,-228 47.81,-228 47.81,-48 522.19,-48 522.19,-228"/>
<text xml:space="preserve" text-anchor="start" x="217.75" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;004 置信度校验</text>
<text xml:space="preserve" text-anchor="start" x="67.87" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">用回复策略的置信度与风险阈值判定是否达标；不达标则转 US&#45;002 的路径。</text>
</g>
<!-- i_ask_compose -->
<g id="node5" class="node">
<title>i_ask_compose</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1135.84,-228 758.16,-228 758.16,-48 1135.84,-48 1135.84,-228"/>
<text xml:space="preserve" text-anchor="start" x="888.09" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;005 生成答复</text>
<text xml:space="preserve" text-anchor="start" x="778.22" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">按候选知识组织答复正文，附来源条目，不加入未验证内容。</text>
</g>
<!-- i_ask_deliver -->
<g id="node6" class="node">
<title>i_ask_deliver</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1586.09,-228 1245.91,-228 1245.91,-48 1586.09,-48 1586.09,-228"/>
<text xml:space="preserve" text-anchor="start" x="1357.09" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;006 下发答复</text>
<text xml:space="preserve" text-anchor="start" x="1265.97" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</text>
</g>
<!-- i_lowescalate -->
<g id="node7" class="node">
<title>i_lowescalate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2016.02,-528 1695.98,-528 1695.98,-348 2016.02,-348 2016.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="1788.75" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;011 判定转人工</text>
<text xml:space="preserve" text-anchor="start" x="1718.47" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度低于阈值或无候选时，判定进入人工路径。</text>
</g>
<!-- i_lowticket -->
<g id="node8" class="node">
<title>i_lowticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2478.34,-528 2125.66,-528 2125.66,-348 2478.34,-348 2478.34,-528"/>
<text xml:space="preserve" text-anchor="start" x="2226.42" y="-441" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;012 创建人工工单</text>
<text xml:space="preserve" text-anchor="start" x="2145.72" y="-418" font-family="Arial" font-size="15.00" fill="#bfdbfe">把提问内容、候选摘要与置信度写入工单，供人工接手。</text>
</g>
<!-- i_lownotify -->
<g id="node9" class="node">
<title>i_lownotify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2086.09,-228 1695.91,-228 1695.91,-48 2086.09,-48 2086.09,-228"/>
<text xml:space="preserve" text-anchor="start" x="1815.42" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;013 告知客户等待</text>
<text xml:space="preserve" text-anchor="start" x="1715.97" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知客户已转人工并给出预计等待，不做内容性答复。</text>
</g>
<!-- i_ask_normalize&#45;&gt;i_ask_verify -->
<!-- i_ask_retrieve&#45;&gt;i_ask_rank -->
<!-- i_ask_rank&#45;&gt;i_ask_compose -->
<!-- i_ask_compose&#45;&gt;i_ask_deliver -->
<!-- i_lowescalate&#45;&gt;i_lownotify -->
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
<text xml:space="preserve" text-anchor="start" x="152.03" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;G0 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
</g>
</svg>
`;case`chain001NF-i-state`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="970pt" height="1178pt"
 viewBox="0.00 0.00 970.00 1178.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- st_unprobed -->
<g id="node1" class="node">
<title>st_unprobed</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1148.4 430,-1148.4 430,-968.4 750.04,-968.4 750.04,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="535.55" y="-1050.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;100 未探测</text>
</g>
<!-- st_probing -->
<g id="node2" class="node">
<title>st_probing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-825.6 430,-825.6 430,-645.6 750.04,-645.6 750.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="535.55" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;101 探测中</text>
</g>
<!-- st_healthy -->
<g id="node3" class="node">
<title>st_healthy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="113.89" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;102 正常</text>
</g>
<!-- st_scenariohit -->
<g id="node4" class="node">
<title>st_scenariohit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="510.55" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;103 命中极端场景</text>
</g>
<!-- st_notified -->
<g id="node5" class="node">
<title>st_notified</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="940.04,-180 620,-180 620,0 940.04,0 940.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="708.88" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;104 已下发提示</text>
</g>
<!-- st_unprobed&#45;&gt;st_probing -->
<g id="edge1" class="edge">
<title>st_unprobed&#45;&gt;st_probing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-968.47C590.02,-927.27 590.02,-878.16 590.02,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-835.96 590.02,-828.46 587.4,-835.96 592.65,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-885.6 590.02,-908.4 642.7,-908.4 642.7,-885.6 590.02,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- st_probing&#45;&gt;st_healthy -->
<g id="edge2" class="edge">
<title>st_probing&#45;&gt;st_healthy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M470.81,-645.67C413.72,-603.07 345.3,-552.03 287.21,-508.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="289.09,-506.82 281.51,-504.44 285.95,-511.03 289.09,-506.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="387.91,-562.8 387.91,-585.6 440.59,-585.6 440.59,-562.8 387.91,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="390.91" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测通过</text>
</g>
<!-- st_probing&#45;&gt;st_scenariohit -->
<g id="edge3" class="edge">
<title>st_probing&#45;&gt;st_scenariohit</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-645.67C590.02,-604.47 590.02,-555.36 590.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.65,-513.16 590.02,-505.66 587.4,-513.16 592.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-562.8 590.02,-585.6 666.03,-585.6 666.03,-562.8 590.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测命中异常</text>
</g>
<!-- st_scenariohit&#45;&gt;st_notified -->
<g id="edge4" class="edge">
<title>st_scenariohit&#45;&gt;st_notified</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M642.69,-322.87C667.35,-281.23 696.79,-231.52 722.08,-188.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="724.3,-190.22 725.87,-182.43 719.79,-187.55 724.3,-190.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="690.72,-240 690.72,-262.8 743.39,-262.8 743.39,-240 690.72,-240"/>
<text xml:space="preserve" text-anchor="start" x="693.72" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">下发提示</text>
</g>
<!-- st_notified&#45;&gt;st_probing -->
<g id="edge5" class="edge">
<title>st_notified&#45;&gt;st_probing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M806.48,-179.93C827.2,-265.7 846.29,-397.62 805.02,-502.8 784.87,-554.15 747.41,-600.9 709.33,-638.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="707.91,-636.48 704.38,-643.61 711.58,-640.23 707.91,-636.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="829.45,-401.4 829.45,-424.2 882.12,-424.2 882.12,-401.4 829.45,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="832.45" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">继续巡检</text>
</g>
</g>
</svg>
`;case`chain001NF-i-step`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1611pt" height="1550pt"
 viewBox="0.00 0.00 1611.00 1550.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1534.65)">
<g id="clust1" class="cluster">
<title>cluster_us_kbempty</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="743,-929.4 743,-1511.6 1573,-1511.6 1573,-929.4 743,-929.4"/>
<text xml:space="preserve" text-anchor="start" x="751" y="-1498.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;101 知识库为空时运营人员能看见</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_us_ragtimeout</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="355,-318.2 355,-900.4 1185,-900.4 1185,-318.2 355,-318.2"/>
<text xml:space="preserve" text-anchor="start" x="363" y="-887.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;102 RAGFLOW 超时时客户不被静默等待</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_us_llmdown</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 1268,-289.2 1268,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;103 LLM 不可用时转人工而非静默失败</text>
</g>
<!-- i_kb_count -->
<g id="node1" class="node">
<title>i_kb_count</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1103.02,-1450.4 782.98,-1450.4 782.98,-1270.4 1103.02,-1270.4 1103.02,-1450.4"/>
<text xml:space="preserve" text-anchor="start" x="875.75" y="-1363.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111 读取条目数</text>
<text xml:space="preserve" text-anchor="start" x="811.72" y="-1340.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</text>
</g>
<!-- i_kb_judge -->
<g id="node2" class="node">
<title>i_kb_judge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1117.02,-1149.4 796.98,-1149.4 796.98,-969.4 1117.02,-969.4 1117.02,-1149.4"/>
<text xml:space="preserve" text-anchor="start" x="881.42" y="-1062.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;112 判定零条场景</text>
<text xml:space="preserve" text-anchor="start" x="817.39" y="-1039.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</text>
</g>
<!-- i_kb_render -->
<g id="node3" class="node">
<title>i_kb_render</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1533.02,-1450.4 1212.98,-1450.4 1212.98,-1270.4 1533.02,-1270.4 1533.02,-1450.4"/>
<text xml:space="preserve" text-anchor="start" x="1297.42" y="-1363.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;113 渲染空库提示</text>
<text xml:space="preserve" text-anchor="start" x="1235.47" y="-1340.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">在控制台显式提示条目数为 0，不显示空白列表。</text>
</g>
<!-- i_to_timer -->
<g id="node4" class="node">
<title>i_to_timer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="715.02,-839.2 394.98,-839.2 394.98,-659.2 715.02,-659.2 715.02,-839.2"/>
<text xml:space="preserve" text-anchor="start" x="479.42" y="-752.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;121 启动超时计时</text>
<text xml:space="preserve" text-anchor="start" x="465.4" y="-729.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">发起检索时同时启动 8 秒计时。</text>
</g>
<!-- i_to_check -->
<g id="node5" class="node">
<title>i_to_check</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1145.02,-839.2 824.98,-839.2 824.98,-659.2 1145.02,-659.2 1145.02,-839.2"/>
<text xml:space="preserve" text-anchor="start" x="926.09" y="-752.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;122 判定超时</text>
<text xml:space="preserve" text-anchor="start" x="859.98" y="-729.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</text>
</g>
<!-- i_to_notify -->
<g id="node6" class="node">
<title>i_to_notify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="819.02,-538.2 498.98,-538.2 498.98,-358.2 819.02,-358.2 819.02,-538.2"/>
<text xml:space="preserve" text-anchor="start" x="575.08" y="-451.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;123 下发处理中提示</text>
<text xml:space="preserve" text-anchor="start" x="521.47" y="-428.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知系统仍在处理，不让客户反复刷新。</text>
</g>
<!-- i_ll_detect -->
<g id="node7" class="node">
<title>i_ll_detect</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="132.42" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;131 判定调用结果</text>
<text xml:space="preserve" text-anchor="start" x="107.98" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">识别模型服务调用失败或返回异常。</text>
</g>
<!-- i_ll_ticket -->
<g id="node8" class="node">
<title>i_ll_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="562.42" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;132 生成人工工单</text>
<text xml:space="preserve" text-anchor="start" x="544.23" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">把提问内容与失败原因写入工单。</text>
</g>
<!-- i_ll_notify -->
<g id="node9" class="node">
<title>i_ll_notify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="992.42" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;133 告知等待人工</text>
<text xml:space="preserve" text-anchor="start" x="949.23" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知已转人工，不返回空白内容。</text>
</g>
<!-- i_kb_count&#45;&gt;i_kb_judge -->
<!-- i_kb_judge&#45;&gt;i_to_check -->
<!-- i_kb_render&#45;&gt;i_ll_notify -->
<g id="edge4" class="edge">
<title>i_kb_render&#45;&gt;i_ll_notify</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1372.09,-1270.43C1371.56,-1210.97 1371,-1131 1371,-1060.4 1371,-1060.4 1371,-1060.4 1371,-447.2 1371,-358.15 1305.88,-285.43 1236.02,-233.04"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1237.96,-231.2 1230.37,-228.87 1234.85,-235.43 1237.96,-231.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1371,-737.8 1371,-760.6 1447.01,-760.6 1447.01,-737.8 1371,-737.8"/>
<text xml:space="preserve" text-anchor="start" x="1374" y="-743.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- i_to_timer&#45;&gt;i_to_notify -->
<!-- i_to_check&#45;&gt;i_ll_detect -->
<!-- i_to_notify&#45;&gt;i_ll_notify -->
<g id="edge6" class="edge">
<title>i_to_notify&#45;&gt;i_ll_notify</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M830.19,-318.2C867.6,-290.01 906.54,-260.67 941.81,-234.09"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="943.34,-236.22 947.75,-229.61 940.18,-232.03 943.34,-236.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="778.86,-273.22 778.86,-296.02 889.88,-296.02 889.88,-273.22 778.86,-273.22"/>
<text xml:space="preserve" text-anchor="start" x="781.86" y="-279.02" font-family="Arial" font-size="14.00" fill="#d4f2ff">统一由提示环节下发</text>
</g>
</g>
</svg>
`;case`chain001F-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="986pt" height="650pt"
 viewBox="0.00 0.00 986.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_i_ask_deliver</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 948,-612 948,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;006 下发答复</text>
</g>
<!-- ui_interaction -->
<g id="node1" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="677.05,-550.8 278.95,-550.8 278.95,-370.8 677.05,-370.8 677.05,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="378.53" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="302.97" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- ui_information -->
<g id="node2" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="908.35,-228 47.65,-228 47.65,-48 908.35,-48 908.35,-228"/>
<text xml:space="preserve" text-anchor="start" x="395.2" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="71.67" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- ui_interaction&#45;&gt;ui_information -->
<g id="edge1" class="edge">
<title>ui_interaction&#45;&gt;ui_information</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M478,-370.87C478,-329.67 478,-280.56 478,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="480.63,-238.36 478,-230.86 475.38,-238.36 480.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="478,-288 478,-310.8 542.34,-310.8 542.34,-288 478,-288"/>
<text xml:space="preserve" text-anchor="start" x="481" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
</g>
</svg>
`;case`chain001NF-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="534pt" height="311pt"
 viewBox="0.00 0.00 534.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_i_kb_render</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 496,-273.2 496,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;113 渲染空库提示</text>
</g>
<!-- ui_status -->
<g id="node1" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="463.55,-220 40.45,-220 40.45,-40 463.55,-40 463.55,-220"/>
<text xml:space="preserve" text-anchor="start" x="160.86" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="64.46" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
</g>
</svg>
`;case`chain001NF-ui-notice`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="746pt" height="311pt"
 viewBox="0.00 0.00 746.00 311.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_i_ll_notify</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 708,-273.2 708,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;133 告知等待人工</text>
</g>
<!-- ui_notice -->
<g id="node1" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="675.82,-220 40.18,-220 40.18,-40 675.82,-40 675.82,-220"/>
<text xml:space="preserve" text-anchor="start" x="275.2" y="-133" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="64.19" y="-110" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="844.63,-550.8 79.37,-550.8 79.37,-370.8 844.63,-370.8 844.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="308.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;202 候选知识经我决策后才对外可见</text>
<text xml:space="preserve" text-anchor="start" x="99.43" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我需要审核候选知识再决定是否发布，以便错误内容不会直接答给客户。验收：候选知识需经我批准才进入知识库。</text>
</g>
<!-- us_alert -->
<g id="node3" class="node">
<title>us_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="844.63,-228 79.37,-228 79.37,-48 844.63,-48 844.63,-228"/>
<text xml:space="preserve" text-anchor="start" x="333.63" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;203 知识陈旧时我能收到提示</text>
<text xml:space="preserve" text-anchor="start" x="99.43" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，知识过期或数据集异常时，我能被提醒，以便在客户问到之前修好。验收：知识新鲜度异常时控制台列出问题条目。</text>
</g>
<!-- us_scan&#45;&gt;us_govern -->
<g id="edge1" class="edge">
<title>us_scan&#45;&gt;us_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M462,-693.67C462,-652.47 462,-603.36 462,-560.97"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="464.63,-561.16 462,-553.66 459.38,-561.16 464.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462,-610.8 462,-633.6 561.35,-633.6 561.35,-610.8 462,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="465" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">提交候选进入治理</text>
</g>
<!-- us_govern&#45;&gt;us_alert -->
<g id="edge2" class="edge">
<title>us_govern&#45;&gt;us_alert</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M462,-370.87C462,-329.67 462,-280.56 462,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="464.63,-238.36 462,-230.86 459.38,-238.36 464.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462,-288 462,-310.8 584.69,-310.8 584.69,-288 462,-288"/>
<text xml:space="preserve" text-anchor="start" x="465" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">晋升后进入新鲜度巡检</text>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1128.88,-1196.4 301.12,-1196.4 301.12,-1016.4 1128.88,-1016.4 1128.88,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="569.96" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;201 素材入库后自动进入候选知识</text>
<text xml:space="preserve" text-anchor="start" x="321.17" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，我上传美妆素材后，系统能自动扫描出候选知识，以便我不用手工逐条录入。验收：素材入库后能查到扫描出的候选知识条目。</text>
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
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M636.27,-1016.47C599.02,-974.4 554.48,-924.08 516.42,-881.09"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="518.58,-879.57 511.65,-875.7 514.65,-883.05 518.58,-879.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="581.52,-933.6 581.52,-956.4 680.87,-956.4 680.87,-933.6 581.52,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="584.52" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">提交候选进入治理</text>
</g>
<!-- us_scan&#45;&gt;f_ingest -->
<g id="edge2" class="edge">
<title>us_scan&#45;&gt;f_ingest</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M817.3,-1016.47C865.99,-974.13 924.28,-923.46 973.93,-880.29"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="975.6,-882.32 979.54,-875.42 972.16,-878.36 975.6,-882.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="910.56,-933.6 910.56,-956.4 939.9,-956.4 939.9,-933.6 910.56,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="913.56" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_govern&#45;&gt;us_alert -->
<g id="edge3" class="edge">
<title>us_govern&#45;&gt;us_alert</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M431,-693.67C431,-652.47 431,-603.36 431,-560.97"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="433.63,-561.16 431,-553.66 428.38,-561.16 433.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="431,-610.8 431,-633.6 553.69,-633.6 553.69,-610.8 431,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="434" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">晋升后进入新鲜度巡检</text>
</g>
<!-- us_govern&#45;&gt;f_govern -->
<g id="edge4" class="edge">
<title>us_govern&#45;&gt;f_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M706.85,-693.74C771.03,-659.5 831.5,-613.08 869,-550.8 928.67,-451.71 867.74,-323.24 809.47,-236.34"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="811.75,-235.03 805.36,-230.3 807.41,-237.98 811.75,-235.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="893.48,-449.4 893.48,-472.2 922.82,-472.2 922.82,-449.4 893.48,-449.4"/>
<text xml:space="preserve" text-anchor="start" x="896.48" y="-455.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_alert&#45;&gt;f_govern -->
<g id="edge5" class="edge">
<title>us_alert&#45;&gt;f_govern</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M514.72,-370.87C554.33,-328.8 601.69,-278.48 642.16,-235.49"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="644.07,-237.29 647.3,-230.03 640.25,-233.7 644.07,-237.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="591.06,-288 591.06,-310.8 620.39,-310.8 620.39,-288 591.06,-288"/>
<text xml:space="preserve" text-anchor="start" x="594.06" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
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
<text xml:space="preserve" text-anchor="start" x="152.03" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;G0 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材进入系统后，经扫描与治理成为可检索知识；陈旧时能被发现。</text>
</g>
</g>
</svg>
`;case`chain002F-i-state`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="676pt" height="1501pt"
 viewBox="0.00 0.00 676.00 1501.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1486.25)">
<!-- st_intake -->
<g id="node1" class="node">
<title>st_intake</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="510.04,-1471.2 190,-1471.2 190,-1291.2 510.04,-1291.2 510.04,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="295.55" y="-1373.2" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;200 待接入</text>
</g>
<!-- st_scanning -->
<g id="node2" class="node">
<title>st_scanning</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1148.4 0,-1148.4 0,-968.4 320.04,-968.4 320.04,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="105.55" y="-1050.4" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;201 扫描中</text>
</g>
<!-- st_pendingreview -->
<g id="node3" class="node">
<title>st_pendingreview</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="646.04,-825.6 326,-825.6 326,-645.6 646.04,-645.6 646.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="414.88" y="-727.6" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;202 待人工审阅</text>
</g>
<!-- st_published -->
<g id="node4" class="node">
<title>st_published</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="646.04,-502.8 326,-502.8 326,-322.8 646.04,-322.8 646.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="406.55" y="-404.8" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;203 已发布可检索</text>
</g>
<!-- st_stale -->
<g id="node5" class="node">
<title>st_stale</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="405.04,-180 85,-180 85,0 405.04,0 405.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="173.88" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">S&#45;204 新鲜度异常</text>
</g>
<!-- st_intake&#45;&gt;st_scanning -->
<g id="edge1" class="edge">
<title>st_intake&#45;&gt;st_scanning</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M297.35,-1291.27C272.69,-1249.63 243.25,-1199.92 217.96,-1157.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="220.25,-1155.95 214.17,-1150.83 215.74,-1158.62 220.25,-1155.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="260.72,-1208.4 260.72,-1231.2 336.73,-1231.2 336.73,-1208.4 260.72,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="263.72" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">抽取候选知识</text>
</g>
<!-- st_scanning&#45;&gt;st_pendingreview -->
<g id="edge2" class="edge">
<title>st_scanning&#45;&gt;st_pendingreview</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M250.4,-968.47C293.32,-926.22 344.7,-875.67 388.51,-832.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="390.09,-834.68 393.59,-827.55 386.41,-830.94 390.09,-834.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="332.79,-885.6 332.79,-908.4 385.47,-908.4 385.47,-885.6 332.79,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="335.79" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交候选</text>
</g>
<!-- st_pendingreview&#45;&gt;st_intake -->
<g id="edge3" class="edge">
<title>st_pendingreview&#45;&gt;st_intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M467.23,-825.54C441.98,-945 397.26,-1156.65 370.96,-1281.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="368.4,-1280.54 369.41,-1288.42 373.53,-1281.63 368.4,-1280.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.96,-1047 435.96,-1069.8 488.64,-1069.8 488.64,-1047 435.96,-1047"/>
<text xml:space="preserve" text-anchor="start" x="438.96" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">驳回退回</text>
</g>
<!-- st_pendingreview&#45;&gt;st_published -->
<g id="edge4" class="edge">
<title>st_pendingreview&#45;&gt;st_published</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M486.02,-645.67C486.02,-604.47 486.02,-555.36 486.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="488.65,-513.16 486.02,-505.66 483.4,-513.16 488.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="486.02,-562.8 486.02,-585.6 538.7,-585.6 538.7,-562.8 486.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="489.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">批准晋升</text>
</g>
<!-- st_published&#45;&gt;st_stale -->
<g id="edge5" class="edge">
<title>st_published&#45;&gt;st_stale</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M419.21,-322.87C387.73,-280.97 350.12,-230.9 317.91,-188.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="320.17,-186.67 313.57,-182.25 315.98,-189.82 320.17,-186.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="372.75,-240 372.75,-262.8 460.43,-262.8 460.43,-240 372.75,-240"/>
<text xml:space="preserve" text-anchor="start" x="375.75" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">超出新鲜度阈值</text>
</g>
<!-- st_stale&#45;&gt;st_scanning -->
<g id="edge6" class="edge">
<title>st_stale&#45;&gt;st_scanning</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M237.22,-179.72C221.34,-360.24 185.37,-769.14 168.75,-958.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="166.13,-957.93 168.09,-965.63 171.36,-958.39 166.13,-957.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="203.5,-562.8 203.5,-585.6 256.18,-585.6 256.18,-562.8 203.5,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="206.5" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">重新扫描</text>
</g>
</g>
</svg>
`;case`chain002F-i-step`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1740pt" height="1270pt"
 viewBox="0.00 0.00 1740.00 1270.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1255.45)">
<g id="clust1" class="cluster">
<title>cluster_us_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-650.2 8,-1232.4 838,-1232.4 838,-650.2 8,-650.2"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1219.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;201 素材入库后自动进入候选知识</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_us_govern</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-340 8,-621.2 1276,-621.2 1276,-340 8,-340"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-608.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;202 候选知识经我决策后才对外可见</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_us_alert</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="442,-8 442,-289.2 1702,-289.2 1702,-8 442,-8"/>
<text xml:space="preserve" text-anchor="start" x="450" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">US&#45;203 知识陈旧时我能收到提示</text>
</g>
<!-- i_scan_register -->
<g id="node1" class="node">
<title>i_scan_register</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1171.2 47.98,-1171.2 47.98,-991.2 368.02,-991.2 368.02,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="149.09" y="-1084.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;211 登记素材</text>
<text xml:space="preserve" text-anchor="start" x="82.98" y="-1061.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">把上传的素材登记到文档簿，生成文档标识。</text>
</g>
<!-- i_scan_extract -->
<g id="node2" class="node">
<title>i_scan_extract</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-870.2 47.98,-870.2 47.98,-690.2 368.02,-690.2 368.02,-870.2"/>
<text xml:space="preserve" text-anchor="start" x="132.42" y="-783.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;212 抽取候选知识</text>
<text xml:space="preserve" text-anchor="start" x="76.72" y="-760.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">从素材正文中抽取可独立回答问题的候选条目。</text>
</g>
<!-- i_scan_submit -->
<g id="node3" class="node">
<title>i_scan_submit</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1171.2 477.98,-1171.2 477.98,-991.2 798.02,-991.2 798.02,-1171.2"/>
<text xml:space="preserve" text-anchor="start" x="579.09" y="-1084.2" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;213 提交候选</text>
<text xml:space="preserve" text-anchor="start" x="525.48" y="-1061.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">把候选条目提交给治理环节，等待决策。</text>
</g>
<!-- i_gov_review -->
<g id="node4" class="node">
<title>i_gov_review</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-560 477.98,-560 477.98,-380 798.02,-380 798.02,-560"/>
<text xml:space="preserve" text-anchor="start" x="562.42" y="-473" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;221 人工审阅候选</text>
<text xml:space="preserve" text-anchor="start" x="537.98" y="-450" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示候选条目供运营人员逐条审阅。</text>
</g>
<!-- i_gov_decide -->
<g id="node5" class="node">
<title>i_gov_decide</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-560 47.98,-560 47.98,-380 368.02,-380 368.02,-560"/>
<text xml:space="preserve" text-anchor="start" x="149.09" y="-473" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;222 记录决策</text>
<text xml:space="preserve" text-anchor="start" x="107.98" y="-450" font-family="Arial" font-size="15.00" fill="#bfdbfe">记录批准或驳回，驳回需填写理由。</text>
</g>
<!-- i_gov_promote -->
<g id="node6" class="node">
<title>i_gov_promote</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1235.83,-560 908.17,-560 908.17,-380 1235.83,-380 1235.83,-560"/>
<text xml:space="preserve" text-anchor="start" x="1013.09" y="-473" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;223 晋升知识</text>
<text xml:space="preserve" text-anchor="start" x="928.22" y="-450" font-family="Arial" font-size="15.00" fill="#bfdbfe">批准的候选进入知识库生命周期，进入可检索状态。</text>
</g>
<!-- i_alert_probe -->
<g id="node7" class="node">
<title>i_alert_probe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="802.02,-228 481.98,-228 481.98,-48 802.02,-48 802.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="558.08" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;231 巡检数据集状态</text>
<text xml:space="preserve" text-anchor="start" x="523.23" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">定期探测知识库数据集的可用性与新鲜度。</text>
</g>
<!-- i_alert_judge -->
<g id="node8" class="node">
<title>i_alert_judge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1232.02,-228 911.98,-228 911.98,-48 1232.02,-48 1232.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="988.08" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;232 判定新鲜度异常</text>
<text xml:space="preserve" text-anchor="start" x="953.23" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">按更新时间阈值判定是否属于陈旧或异常。</text>
</g>
<!-- i_alert_report -->
<g id="node9" class="node">
<title>i_alert_report</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1662.02,-228 1341.98,-228 1341.98,-48 1662.02,-48 1662.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1443.09" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;233 上报告警</text>
<text xml:space="preserve" text-anchor="start" x="1395.73" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">把问题条目写入告警并在控制台列出。</text>
</g>
<!-- i_scan_register&#45;&gt;i_scan_extract -->
<!-- i_scan_extract&#45;&gt;i_gov_decide -->
<!-- i_scan_submit&#45;&gt;i_gov_review -->
<g id="edge3" class="edge">
<title>i_scan_submit&#45;&gt;i_gov_review</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M638,-991.29C638,-879.09 638,-686.7 638,-569.95"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="640.63,-570.11 638,-562.61 635.38,-570.11 640.63,-570.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-768.8 638,-791.6 737.35,-791.6 737.35,-768.8 638,-768.8"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-774.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">提交候选进入治理</text>
</g>
<!-- i_gov_decide&#45;&gt;i_alert_probe -->
<!-- i_gov_promote&#45;&gt;i_alert_judge -->
<g id="edge5" class="edge">
<title>i_gov_promote&#45;&gt;i_alert_judge</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1072,-380.13C1072,-336.3 1072,-283.28 1072,-238.14"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1074.63,-238.27 1072,-230.77 1069.38,-238.27 1074.63,-238.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1072,-297.2 1072,-320 1194.69,-320 1194.69,-297.2 1072,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="1075" y="-303" font-family="Arial" font-size="14.00" fill="#d4f2ff">晋升后进入新鲜度巡检</text>
</g>
</g>
</svg>
`;case`chain002F-ui`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1572pt" height="327pt"
 viewBox="0.00 0.00 1572.00 327.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 312.25)">
<g id="clust1" class="cluster">
<title>cluster_i_alert_report</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 1534,-289.2 1534,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">I&#45;233 上报告警</text>
</g>
<!-- ui_console -->
<g id="node1" class="node">
<title>ui_console</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="471.55,-228 48.45,-228 48.45,-48 471.55,-48 471.55,-228"/>
<text xml:space="preserve" text-anchor="start" x="185.53" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;201 运营控制台</text>
<text xml:space="preserve" text-anchor="start" x="72.46" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员管理素材、审核候选知识、查看新鲜度告警的单页控制台。</text>
</g>
<!-- ui_information -->
<g id="node2" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1493.85,-228 608.15,-228 608.15,-48 1493.85,-48 1493.85,-228"/>
<text xml:space="preserve" text-anchor="start" x="951.53" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;202 知识运营信息设计</text>
<text xml:space="preserve" text-anchor="start" x="632.17" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">字段：素材标识、来源、扫描状态、决策结果、新鲜度天数。覆盖空态（暂无素材）、加载态（扫描中）、错误态（同步失败）、无权限态（未授权）。</text>
</g>
<!-- ui_console&#45;&gt;ui_information -->
<g id="edge1" class="edge">
<title>ui_console&#45;&gt;ui_information</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M471.41,-115.64C489.97,-114.25 508.49,-113.06 526.36,-112.2 549.77,-111.07 573.77,-110.42 598,-110.18"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="597.89,-112.81 605.37,-110.12 597.85,-107.56 597.89,-112.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="526.36,-112.2 526.36,-135 553.35,-135 553.35,-112.2 526.36,-112.2"/>
<text xml:space="preserve" text-anchor="start" x="529.36" y="-120.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">[...]</text>
</g>
<!-- ui_information&#45;&gt;ui_console -->
<g id="edge2" class="edge">
<title>ui_information&#45;&gt;ui_console</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M608.52,-138C564.79,-138 521.83,-138 481.83,-138"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="481.98,-135.38 474.48,-138 481.98,-140.63 481.98,-135.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="513.51,-141 513.51,-163.8 566.19,-163.8 566.19,-141 513.51,-141"/>
<text xml:space="preserve" text-anchor="start" x="516.51" y="-146.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
</g>
</svg>
`;case`srcdir002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2381pt" height="1165pt"
 viewBox="0.00 0.00 2381.00 1165.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1149.65)">
<g id="clust1" class="cluster">
<title>cluster_ui_information</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-956 902,-956 902,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-943.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;202 知识运营信息设计</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ui_console</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="932,-330.8 932,-956 2343,-956 2343,-330.8 932,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="940" y="-943.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI&#45;201 运营控制台</text>
</g>
<!-- src_knowledgeroutes -->
<g id="node1" class="node">
<title>src_knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="862.02,-873.6 531.98,-873.6 531.98,-693.6 862.02,-693.6 862.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="611.42" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;202 知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="586.95" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="603.23" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口。</text>
</g>
<!-- src_knowledgesync -->
<g id="node2" class="node">
<title>src_knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="421.54,-873.6 66.46,-873.6 66.46,-693.6 421.54,-693.6 421.54,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="166.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;208 知识同步</text>
<text xml:space="preserve" text-anchor="start" x="106.46" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="147.32" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到 RAGFlow。</text>
</g>
<!-- src_lifecycle -->
<g id="node3" class="node">
<title>src_lifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="432.79,-550.8 55.21,-550.8 55.21,-370.8 432.79,-370.8 432.79,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="133.41" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;209 知识生命周期视图</text>
<text xml:space="preserve" text-anchor="start" x="95.21" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;lifecycle&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="187.74" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识的晋升与下线。</text>
</g>
<!-- src_documentregistry -->
<g id="node4" class="node">
<title>src_documentregistry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="439.89,-228 48.11,-228 48.11,-48 439.89,-48 439.89,-228"/>
<text xml:space="preserve" text-anchor="start" x="158.42" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;205 文档登记簿</text>
<text xml:space="preserve" text-anchor="start" x="88.11" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;document&#45;registry.js —</text>
<text xml:space="preserve" text-anchor="start" x="181.49" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">跟踪素材与文档标识。</text>
</g>
<!-- src_materialroutes -->
<g id="node5" class="node">
<title>src_materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1370.21,-873.6 971.79,-873.6 971.79,-693.6 1370.21,-693.6 1370.21,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1093.75" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;201 素材路由</text>
<text xml:space="preserve" text-anchor="start" x="1011.79" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js — 美妆素材接入接口。</text>
</g>
<!-- src_materialbatch -->
<g id="node6" class="node">
<title>src_materialbatch</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1822.28,-873.6 1479.72,-873.6 1479.72,-693.6 1822.28,-693.6 1822.28,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1565.42" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;204 素材批处理</text>
<text xml:space="preserve" text-anchor="start" x="1519.72" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;batch&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1607.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">批量素材接入。</text>
</g>
<!-- src_knowledgescan -->
<g id="node7" class="node">
<title>src_knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2287.96,-873.6 1932.04,-873.6 1932.04,-693.6 2287.96,-693.6 2287.96,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2032.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;206 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="1972.04" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="2066.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识。</text>
</g>
<!-- src_materialservice -->
<g id="node8" class="node">
<title>src_materialservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1367.28,-550.8 974.72,-550.8 974.72,-370.8 1367.28,-370.8 1367.28,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1093.75" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;203 素材服务</text>
<text xml:space="preserve" text-anchor="start" x="1014.72" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js — 素材接入规则。</text>
</g>
<!-- src_governance -->
<g id="node9" class="node">
<title>src_governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2302.98,-550.8 1917.02,-550.8 1917.02,-370.8 2302.98,-370.8 2302.98,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2032.75" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;207 知识治理</text>
<text xml:space="preserve" text-anchor="start" x="1957.02" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="2051.66" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 发布决策与治理。</text>
</g>
<!-- src_knowledgeroutes&#45;&gt;src_knowledgescan -->
<g id="edge1" class="edge">
<title>src_knowledgeroutes&#45;&gt;src_knowledgescan</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M789.06,-873.58C822.78,-900.71 863.03,-927 905,-941.1 1007.38,-975.49 1773.73,-972.73 1877,-941.1 1919.36,-928.13 1960.96,-904.57 1997.01,-879.55"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1998.49,-881.73 2003.1,-875.26 1995.46,-877.44 1998.49,-881.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1370.66,-964 1370.66,-986.8 1423.34,-986.8 1423.34,-964 1370.66,-964"/>
<text xml:space="preserve" text-anchor="start" x="1373.66" y="-969.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">触发扫描</text>
</g>
<!-- src_knowledgesync&#45;&gt;src_lifecycle -->
<g id="edge7" class="edge">
<title>src_knowledgesync&#45;&gt;src_lifecycle</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M244,-693.67C244,-652.47 244,-603.36 244,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="246.63,-561.16 244,-553.66 241.38,-561.16 246.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="244,-610.8 244,-633.6 320.01,-633.6 320.01,-610.8 244,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="247" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">更新生命周期</text>
</g>
<!-- src_lifecycle&#45;&gt;src_documentregistry -->
<g id="edge8" class="edge">
<title>src_lifecycle&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M244,-370.87C244,-329.67 244,-280.56 244,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="246.63,-238.36 244,-230.86 241.38,-238.36 246.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="244,-288 244,-310.8 308.34,-310.8 308.34,-288 244,-288"/>
<text xml:space="preserve" text-anchor="start" x="247" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">晋升或下线</text>
</g>
<!-- src_materialroutes&#45;&gt;src_materialservice -->
<g id="edge2" class="edge">
<title>src_materialroutes&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1171,-693.67C1171,-652.47 1171,-603.36 1171,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1173.63,-561.16 1171,-553.66 1168.38,-561.16 1173.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1171,-610.8 1171,-633.6 1223.68,-633.6 1223.68,-610.8 1171,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1174" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">接收素材</text>
</g>
<!-- src_materialbatch&#45;&gt;src_materialservice -->
<g id="edge3" class="edge">
<title>src_materialbatch&#45;&gt;src_materialservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1517.93,-693.67C1454.07,-650.99 1377.52,-599.82 1312.59,-556.43"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1314.12,-554.3 1306.43,-552.31 1311.21,-558.66 1314.12,-554.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1425.39,-610.8 1425.39,-633.6 1478.07,-633.6 1478.07,-610.8 1425.39,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1428.39" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">批量接入</text>
</g>
<!-- src_knowledgescan&#45;&gt;src_governance -->
<g id="edge4" class="edge">
<title>src_knowledgescan&#45;&gt;src_governance</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2110,-693.67C2110,-652.47 2110,-603.36 2110,-560.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2112.63,-561.16 2110,-553.66 2107.38,-561.16 2112.63,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2110,-610.8 2110,-633.6 2162.68,-633.6 2162.68,-610.8 2110,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2113" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交候选</text>
</g>
<!-- src_materialservice&#45;&gt;src_documentregistry -->
<g id="edge5" class="edge">
<title>src_materialservice&#45;&gt;src_documentregistry</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1016.18,-370.93C987.69,-356.41 957.83,-342.36 929,-330.8 772.29,-267.96 587.59,-217.53 449.49,-184.19"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="450.48,-181.72 442.57,-182.52 449.25,-186.83 450.48,-181.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="875.23,-288 875.23,-310.8 927.9,-310.8 927.9,-288 875.23,-288"/>
<text xml:space="preserve" text-anchor="start" x="878.23" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">登记文档</text>
</g>
<!-- src_governance&#45;&gt;src_knowledgesync -->
<g id="edge6" class="edge">
<title>src_governance&#45;&gt;src_knowledgesync</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1917.27,-486.69C1515.48,-538.94 614.19,-658.14 477,-693.6 461.9,-697.5 446.43,-702.07 431,-707.04"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="430.59,-704.41 424.28,-709.24 432.23,-709.4 430.59,-704.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="993.79,-610.8 993.79,-633.6 1058.14,-633.6 1058.14,-610.8 993.79,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="996.79" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">批准后推送</text>
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
`;case`api002F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="429pt" height="810pt"
 viewBox="0.00 0.00 429.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- api_material -->
<g id="node1" class="node">
<title>api_material</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-780 31.15,-780 31.15,-600 368.02,-600 368.02,-780"/>
<text xml:space="preserve" text-anchor="start" x="51.2" y="-693" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;201 POST /materials 素材接入</text>
<text xml:space="preserve" text-anchor="start" x="59.13" y="-670" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js:8 — 接收素材。</text>
</g>
<!-- api_scan -->
<g id="node2" class="node">
<title>api_scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="399.16,-480 0,-480 0,-300 399.16,-300 399.16,-480"/>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;202 POST /knowledge/scan 知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="20.77" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:10 — 触发候选知识扫描。</text>
</g>
<!-- api_status -->
<g id="node3" class="node">
<title>api_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="398.05,-180 1.11,-180 1.11,0 398.05,0 398.05,-180"/>
<text xml:space="preserve" text-anchor="start" x="21.17" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;203 GET /knowledge/status 知识状态</text>
<text xml:space="preserve" text-anchor="start" x="79.11" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js:26 —</text>
<text xml:space="preserve" text-anchor="start" x="137.07" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询扫描与治理状态。</text>
</g>
<!-- api_material&#45;&gt;api_scan -->
<!-- api_scan&#45;&gt;api_status -->
</g>
</svg>
`;case`seq001F-answer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2748pt" height="517pt"
 viewBox="0.00 0.00 2748.00 517.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 502.05)">
<!-- actor_customer -->
<g id="node1" class="node">
<title>actor_customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-247 0,-247 0,-67 320.04,-67 320.04,-247"/>
<text xml:space="preserve" text-anchor="start" x="143.35" y="-149" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
</g>
<!-- api_chatcallback -->
<g id="node2" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="979.31,-247 549.05,-247 549.05,-67 979.31,-67 979.31,-247"/>
<text xml:space="preserve" text-anchor="start" x="569.11" y="-169" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="647.48" y="-146" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="695.42" y="-128" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- src_answerorchestrator -->
<g id="node3" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1550.04,-401 1219.99,-401 1219.99,-221 1550.04,-221 1550.04,-401"/>
<text xml:space="preserve" text-anchor="start" x="1299.44" y="-323" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1260.82" y="-300" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="1316.26" y="-282" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node4" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2151.64,-487 1779.06,-487 1779.06,-307 2151.64,-307 2151.64,-487"/>
<text xml:space="preserve" text-anchor="start" x="1842.54" y="-409" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="1819.06" y="-386" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1909.09" y="-368" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- ext_ragflow -->
<g id="node5" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2717.81,-487 2397.77,-487 2397.77,-307 2717.81,-307 2717.81,-487"/>
<text xml:space="preserve" text-anchor="start" x="2515.01" y="-400" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2501.53" y="-377" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
</g>
<!-- src_replypolicy -->
<g id="node6" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2130.37,-180 1800.33,-180 1800.33,0 2130.37,0 2130.37,-180"/>
<text xml:space="preserve" text-anchor="start" x="1888.1" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="1843.66" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1896.59" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- actor_customer&#45;&gt;api_chatcallback -->
<g id="edge1" class="edge">
<title>actor_customer&#45;&gt;api_chatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320.02,-157C386.99,-157 466.14,-157 538.88,-157"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.57,-159.63 546.07,-157 538.57,-154.38 538.57,-159.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-160 383.04,-192.8 407.04,-192.8 407.04,-160 383.04,-160"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-173.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-160 410.04,-192.8 486.05,-192.8 486.05,-160 410.04,-160"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-170.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">企业微信提问</text>
</g>
<!-- api_chatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge2" class="edge">
<title>api_chatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M979.02,-210.21C1054.59,-229.02 1138.6,-249.93 1210.43,-267.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1209.63,-270.31 1217.55,-269.57 1210.9,-265.21 1209.63,-270.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1042.31,-255.32 1042.31,-288.12 1066.31,-288.12 1066.31,-255.32 1042.31,-255.32"/>
<text xml:space="preserve" text-anchor="start" x="1050.42" y="-268.52" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1069.31,-255.32 1069.31,-288.12 1156.99,-288.12 1156.99,-255.32 1069.31,-255.32"/>
<text xml:space="preserve" text-anchor="start" x="1072.31" y="-266.12" font-family="Arial" font-size="14.00" fill="#c9c9c9">分发归一化消息</text>
</g>
<!-- api_chatcallback&#45;&gt;src_replypolicy -->
<g id="edge7" class="edge">
<title>api_chatcallback&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M989.46,-141.61C1062.91,-136.76 1144.92,-131.54 1219.99,-127.2 1419.73,-115.67 1649.74,-104.49 1800.59,-97.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="989.49,-138.98 982.18,-142.09 989.83,-144.22 989.49,-138.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1316.01,-130.2 1316.01,-163 1340.01,-163 1340.01,-130.2 1316.01,-130.2"/>
<text xml:space="preserve" text-anchor="start" x="1324.12" y="-143.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1343.01,-130.2 1343.01,-163 1454.03,-163 1454.03,-130.2 1343.01,-130.2"/>
<text xml:space="preserve" text-anchor="start" x="1346.01" y="-141" font-family="Arial" font-size="14.00" fill="#c9c9c9">达标放行并返回答复</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_ragflowknowledge -->
<g id="edge3" class="edge">
<title>src_answerorchestrator&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1549.81,-335.36C1618.07,-345.51 1697.9,-357.38 1769.17,-367.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1768.37,-370.51 1776.17,-369.02 1769.14,-365.32 1768.37,-370.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1613.04,-362.15 1613.04,-394.95 1637.04,-394.95 1637.04,-362.15 1613.04,-362.15"/>
<text xml:space="preserve" text-anchor="start" x="1621.15" y="-375.35" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1640.04,-362.15 1640.04,-394.95 1716.06,-394.95 1716.06,-362.15 1640.04,-362.15"/>
<text xml:space="preserve" text-anchor="start" x="1643.04" y="-372.95" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索候选知识</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_replypolicy -->
<g id="edge6" class="edge">
<title>src_answerorchestrator&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1549.81,-248.41C1625.08,-219.65 1714.4,-185.51 1790.82,-156.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1791.66,-158.8 1797.73,-153.67 1789.78,-153.9 1791.66,-158.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1618.88,-223.29 1618.88,-256.09 1642.88,-256.09 1642.88,-223.29 1618.88,-223.29"/>
<text xml:space="preserve" text-anchor="start" x="1626.98" y="-236.49" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1645.88,-223.29 1645.88,-256.09 1710.22,-256.09 1710.22,-223.29 1645.88,-223.29"/>
<text xml:space="preserve" text-anchor="start" x="1648.88" y="-234.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验置信度</text>
</g>
<!-- src_ragflowknowledge&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>src_ragflowknowledge&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2151.55,-397C2227.13,-397 2313.94,-397 2387.78,-397"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2387.58,-399.63 2395.08,-397 2387.58,-394.38 2387.58,-399.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2214.64,-400 2214.64,-432.8 2238.64,-432.8 2238.64,-400 2214.64,-400"/>
<text xml:space="preserve" text-anchor="start" x="2222.75" y="-413.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2241.64,-400 2241.64,-432.8 2334.77,-432.8 2334.77,-400 2241.64,-400"/>
<text xml:space="preserve" text-anchor="start" x="2244.64" y="-410.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求 RAGFlow</text>
</g>
<!-- src_ragflowknowledge&#45;&gt;ext_ragflow -->
<g id="edge5" class="edge">
<title>src_ragflowknowledge&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2161.77,-338.51C2218.43,-328.03 2280.47,-322.78 2337.77,-331.2 2357.51,-334.1 2377.94,-338.4 2398.02,-343.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2161.47,-335.89 2154.59,-339.88 2162.45,-341.05 2161.47,-335.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2223.2,-334.2 2223.2,-367 2247.2,-367 2247.2,-334.2 2223.2,-334.2"/>
<text xml:space="preserve" text-anchor="start" x="2231.31" y="-347.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2250.2,-334.2 2250.2,-367 2326.21,-367 2326.21,-334.2 2250.2,-334.2"/>
<text xml:space="preserve" text-anchor="start" x="2253.2" y="-345" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选知识</text>
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
<svg width="2115pt" height="526pt"
 viewBox="0.00 0.00 2115.00 526.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 511.05)">
<!-- actor_ops -->
<g id="node1" class="node">
<title>actor_ops</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
</g>
<!-- api_status -->
<g id="node2" class="node">
<title>api_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="943.77,-368 549.05,-368 549.05,-188 943.77,-188 943.77,-368"/>
<text xml:space="preserve" text-anchor="start" x="569.11" y="-290" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="630.94" y="-267" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="665.14" y="-249" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
</g>
<!-- i_kb_count -->
<g id="node3" class="node">
<title>i_kb_count</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1469.48,-385 1149.44,-385 1149.44,-205 1469.48,-205 1469.48,-385"/>
<text xml:space="preserve" text-anchor="start" x="1242.21" y="-298" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111 读取条目数</text>
<text xml:space="preserve" text-anchor="start" x="1178.19" y="-275" font-family="Arial" font-size="15.00" fill="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2084.51,-496 1756.84,-496 1756.84,-316 2084.51,-316 2084.51,-496"/>
<text xml:space="preserve" text-anchor="start" x="1877.89" y="-409" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1776.9" y="-386" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务，超时或不可用即触发本链场景。</text>
</g>
<!-- i_ll_notify -->
<g id="node5" class="node">
<title>i_ll_notify</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2080.69,-189 1760.65,-189 1760.65,-9 2080.69,-9 2080.69,-189"/>
<text xml:space="preserve" text-anchor="start" x="1845.09" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;133 告知等待人工</text>
<text xml:space="preserve" text-anchor="start" x="1801.9" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">在会话中告知已转人工，不返回空白内容。</text>
</g>
<!-- actor_ops&#45;&gt;api_status -->
<g id="edge1" class="edge">
<title>actor_ops&#45;&gt;api_status</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.94,-141.12C387.62,-162.9 467.45,-188.58 539.57,-211.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.41,-214.16 546.35,-213.96 540.01,-209.17 538.41,-214.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-198.26 383.04,-231.06 407.04,-231.06 407.04,-198.26 383.04,-198.26"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-211.46" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-198.26 410.04,-231.06 486.05,-231.06 486.05,-198.26 410.04,-198.26"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-209.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">查询集成状态</text>
</g>
<!-- actor_ops&#45;&gt;i_ll_notify -->
<g id="edge6" class="edge">
<title>actor_ops&#45;&gt;i_ll_notify</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M330.22,-90.87C669.76,-92.6 1429.94,-96.49 1760.78,-98.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.34,-88.24 322.83,-90.83 330.31,-93.49 330.34,-88.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1006.77,-97.71 1006.77,-130.51 1030.77,-130.51 1030.77,-97.71 1006.77,-97.71"/>
<text xml:space="preserve" text-anchor="start" x="1014.87" y="-110.91" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1033.77,-97.71 1033.77,-130.51 1086.44,-130.51 1086.44,-97.71 1033.77,-97.71"/>
<text xml:space="preserve" text-anchor="start" x="1036.77" y="-108.51" font-family="Arial" font-size="14.00" fill="#c9c9c9">告知客户</text>
</g>
<!-- api_status&#45;&gt;i_kb_count -->
<g id="edge2" class="edge">
<title>api_status&#45;&gt;i_kb_count</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M943.64,-283.95C1007.55,-285.88 1077.89,-288.01 1139.61,-289.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.23,-292.5 1146.81,-290.1 1139.39,-287.25 1139.23,-292.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1006.77,-291.02 1006.77,-323.82 1030.77,-323.82 1030.77,-291.02 1006.77,-291.02"/>
<text xml:space="preserve" text-anchor="start" x="1014.87" y="-304.22" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1033.77,-291.02 1033.77,-323.82 1086.44,-323.82 1086.44,-291.02 1033.77,-291.02"/>
<text xml:space="preserve" text-anchor="start" x="1036.77" y="-301.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- i_kb_count&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>i_kb_count&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1469.21,-354.27C1489.3,-360.31 1509.73,-365.77 1529.48,-370 1599.71,-385.04 1678.38,-393.8 1746.59,-398.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1746.32,-401.51 1753.99,-399.43 1746.7,-396.27 1746.32,-401.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1549.98,-396.86 1549.98,-429.66 1573.98,-429.66 1573.98,-396.86 1549.98,-396.86"/>
<text xml:space="preserve" text-anchor="start" x="1558.09" y="-410.06" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1576.98,-396.86 1576.98,-429.66 1676.34,-429.66 1676.34,-396.86 1576.98,-396.86"/>
<text xml:space="preserve" text-anchor="start" x="1579.98" y="-407.66" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测数据集可用性</text>
</g>
<!-- i_kb_count&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>i_kb_count&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1479.65,-284.36C1547.88,-283.85 1626.87,-288.1 1696.84,-304.2 1716.84,-308.8 1737.21,-315.29 1757.12,-322.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1479.72,-281.73 1472.25,-284.44 1479.78,-286.98 1479.72,-281.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1561.65,-307.2 1561.65,-340 1585.65,-340 1585.65,-307.2 1561.65,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="1569.76" y="-320.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1588.65,-307.2 1588.65,-340 1664.67,-340 1664.67,-307.2 1588.65,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="1591.65" y="-318" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回探测结论</text>
</g>
<!-- i_kb_count&#45;&gt;i_ll_notify -->
<g id="edge5" class="edge">
<title>i_kb_count&#45;&gt;i_ll_notify</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1469.34,-239.29C1489.55,-232.42 1509.98,-225.58 1529.48,-219.2 1601.72,-195.58 1681.9,-170.66 1750.7,-149.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1751.46,-152.18 1757.86,-147.49 1749.93,-147.16 1751.46,-152.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1532.48,-222.2 1532.48,-255 1556.48,-255 1556.48,-222.2 1532.48,-222.2"/>
<text xml:space="preserve" text-anchor="start" x="1540.59" y="-235.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1559.48,-222.2 1559.48,-255 1693.84,-255 1693.84,-222.2 1559.48,-222.2"/>
<text xml:space="preserve" text-anchor="start" x="1562.48" y="-233" font-family="Arial" font-size="14.00" fill="#c9c9c9">提交发布判定并下发提示</text>
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
<!-- i_kb_count -->
<g id="node3" class="node">
<title>i_kb_count</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1469.48,-351 1149.44,-351 1149.44,-171 1469.48,-171 1469.48,-351"/>
<text xml:space="preserve" text-anchor="start" x="1242.21" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111 读取条目数</text>
<text xml:space="preserve" text-anchor="start" x="1178.19" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</text>
</g>
<!-- i_kb_judge -->
<g id="node4" class="node">
<title>i_kb_judge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2053.54,-351 1733.5,-351 1733.5,-171 2053.54,-171 2053.54,-351"/>
<text xml:space="preserve" text-anchor="start" x="1817.94" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;112 判定零条场景</text>
<text xml:space="preserve" text-anchor="start" x="1753.91" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">条目数为 0 时判定为空库场景，标记需先补素材。</text>
</g>
<!-- i_to_check -->
<g id="node5" class="node">
<title>i_to_check</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2614.26,-351 2294.22,-351 2294.22,-171 2614.26,-171 2614.26,-351"/>
<text xml:space="preserve" text-anchor="start" x="2395.33" y="-264" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;122 判定超时</text>
<text xml:space="preserve" text-anchor="start" x="2329.22" y="-241" font-family="Arial" font-size="15.00" fill="#bfdbfe">计时到期仍未返回候选知识时判定超时场景。</text>
</g>
<!-- i_ll_detect -->
<g id="node6" class="node">
<title>i_ll_detect</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3186.66,-180 2866.62,-180 2866.62,0 3186.66,0 3186.66,-180"/>
<text xml:space="preserve" text-anchor="start" x="2951.05" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;131 判定调用结果</text>
<text xml:space="preserve" text-anchor="start" x="2926.62" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">识别模型服务调用失败或返回异常。</text>
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
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M330.1,-51.55C443.62,-29.04 596.89,-5 733.74,-5 733.74,-5 733.74,-5 2455.24,-5 2595.41,-5 2752.86,-30.42 2866.77,-53.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="329.74,-48.94 322.9,-52.99 330.77,-54.09 329.74,-48.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1532.48,-8 1532.48,-40.8 1556.48,-40.8 1556.48,-8 1532.48,-8"/>
<text xml:space="preserve" text-anchor="start" x="1540.59" y="-21.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1559.48,-8 1559.48,-40.8 1670.5,-40.8 1670.5,-8 1559.48,-8"/>
<text xml:space="preserve" text-anchor="start" x="1562.48" y="-18.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">⑥下发提示或转人工</text>
</g>
<!-- api_status&#45;&gt;i_kb_count -->
<g id="edge2" class="edge">
<title>api_status&#45;&gt;i_kb_count</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M932.04,-261C999.5,-261 1074.4,-261 1139.5,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1139.33,-263.63 1146.83,-261 1139.33,-258.38 1139.33,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="995.1,-264 995.1,-296.8 1019.1,-296.8 1019.1,-264 995.1,-264"/>
<text xml:space="preserve" text-anchor="start" x="1003.2" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1022.1,-264 1022.1,-296.8 1086.44,-296.8 1086.44,-264 1022.1,-264"/>
<text xml:space="preserve" text-anchor="start" x="1025.1" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">②发起探测</text>
</g>
<!-- i_kb_count&#45;&gt;i_kb_judge -->
<g id="edge3" class="edge">
<title>i_kb_count&#45;&gt;i_kb_judge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1469.13,-261C1547.97,-261 1643.29,-261 1723.51,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1723.19,-263.63 1730.69,-261 1723.19,-258.38 1723.19,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1549.98,-264 1549.98,-296.8 1573.98,-296.8 1573.98,-264 1549.98,-264"/>
<text xml:space="preserve" text-anchor="start" x="1558.09" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1576.98,-264 1576.98,-296.8 1653,-296.8 1653,-264 1576.98,-264"/>
<text xml:space="preserve" text-anchor="start" x="1579.98" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">③判定条目数</text>
</g>
<!-- i_kb_judge&#45;&gt;i_to_check -->
<g id="edge4" class="edge">
<title>i_kb_judge&#45;&gt;i_to_check</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2053.51,-261C2125.6,-261 2210.92,-261 2284.18,-261"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2283.91,-263.63 2291.41,-261 2283.91,-258.38 2283.91,-263.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2116.54,-264 2116.54,-296.8 2140.54,-296.8 2140.54,-264 2116.54,-264"/>
<text xml:space="preserve" text-anchor="start" x="2124.65" y="-277.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2143.54,-264 2143.54,-296.8 2231.22,-296.8 2231.22,-264 2143.54,-264"/>
<text xml:space="preserve" text-anchor="start" x="2146.54" y="-274.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">④判定响应耗时</text>
</g>
<!-- i_to_check&#45;&gt;i_ll_detect -->
<g id="edge5" class="edge">
<title>i_to_check&#45;&gt;i_ll_detect</title>
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
<svg width="2179pt" height="210pt"
 viewBox="0.00 0.00 2179.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<!-- i_ask_deliver -->
<g id="node3" class="node">
<title>i_ask_deliver</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1599.87,-180 1259.7,-180 1259.7,0 1599.87,0 1599.87,-180"/>
<text xml:space="preserve" text-anchor="start" x="1370.87" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;006 下发答复</text>
<text xml:space="preserve" text-anchor="start" x="1279.75" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">把答复通过企业微信会话回传给客户，完成本次闭环。</text>
</g>
<!-- ext_ragflow -->
<g id="node4" class="node">
<title>ext_ragflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2148.92,-180 1828.88,-180 1828.88,0 2148.92,0 2148.92,-180"/>
<text xml:space="preserve" text-anchor="start" x="1946.12" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1932.64" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与知识库服务。</text>
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
<!-- api_chatcallback&#45;&gt;i_ask_deliver -->
<g id="edge2" class="edge">
<title>api_chatcallback&#45;&gt;i_ask_deliver</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1053.74,-90C1118.1,-90 1188.03,-90 1249.87,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1249.59,-92.63 1257.09,-90 1249.59,-87.38 1249.59,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.02,-93 1117.02,-125.8 1141.02,-125.8 1141.02,-93 1117.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1125.13" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.02,-93 1144.02,-125.8 1196.7,-125.8 1196.7,-93 1144.02,-93"/>
<text xml:space="preserve" text-anchor="start" x="1147.02" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">触发应答</text>
</g>
<!-- api_chatcallback&#45;&gt;i_ask_deliver -->
<g id="edge5" class="edge">
<title>api_chatcallback&#45;&gt;i_ask_deliver</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1064.07,-26.44C1108.89,-20.11 1155.71,-18.01 1199.7,-24.2 1219.37,-26.97 1239.71,-31.01 1259.79,-35.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1063.97,-23.81 1056.94,-27.51 1064.74,-29 1063.97,-23.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.02,-27.2 1117.02,-60 1141.02,-60 1141.02,-27.2 1117.02,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1125.13" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.02,-27.2 1144.02,-60 1196.7,-60 1196.7,-27.2 1144.02,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1147.02" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回答复</text>
</g>
<!-- i_ask_deliver&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>i_ask_deliver&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1599.83,-90C1669.26,-90 1749.48,-90 1818.91,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1818.54,-92.63 1826.04,-90 1818.54,-87.38 1818.54,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1674.54,-93 1674.54,-125.8 1698.54,-125.8 1698.54,-93 1674.54,-93"/>
<text xml:space="preserve" text-anchor="start" x="1682.64" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1701.54,-93 1701.54,-125.8 1754.21,-125.8 1754.21,-93 1701.54,-93"/>
<text xml:space="preserve" text-anchor="start" x="1704.54" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索知识</text>
</g>
<!-- i_ask_deliver&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>i_ask_deliver&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1609.83,-32.17C1661.04,-21.89 1717.02,-16.58 1768.88,-24.2 1788.62,-27.1 1809.05,-31.4 1829.14,-36.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1609.43,-29.58 1602.62,-33.68 1610.5,-34.72 1609.43,-29.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1662.87,-27.2 1662.87,-60 1686.87,-60 1686.87,-27.2 1662.87,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1670.98" y="-40.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1689.87,-27.2 1689.87,-60 1765.88,-60 1765.88,-27.2 1689.87,-27.2"/>
<text xml:space="preserve" text-anchor="start" x="1692.87" y="-38" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选知识</text>
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
<!-- i_kb_count -->
<g id="node3" class="node">
<title>i_kb_count</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1542.65,-180 1222.61,-180 1222.61,0 1542.65,0 1542.65,-180"/>
<text xml:space="preserve" text-anchor="start" x="1315.38" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;111 读取条目数</text>
<text xml:space="preserve" text-anchor="start" x="1251.35" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">从文档登记簿读取当前知识条目数，不做过滤。</text>
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
<!-- api_status&#45;&gt;i_kb_count -->
<g id="edge2" class="edge">
<title>api_status&#45;&gt;i_kb_count</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1016.8,-90C1080.71,-90 1151.05,-90 1212.78,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1212.47,-92.63 1219.97,-90 1212.47,-87.38 1212.47,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1079.93,-93 1079.93,-125.8 1103.93,-125.8 1103.93,-93 1079.93,-93"/>
<text xml:space="preserve" text-anchor="start" x="1088.04" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1106.93,-93 1106.93,-125.8 1159.61,-125.8 1159.61,-93 1106.93,-93"/>
<text xml:space="preserve" text-anchor="start" x="1109.93" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起探测</text>
</g>
<!-- i_kb_count&#45;&gt;ext_ragflow -->
<g id="edge3" class="edge">
<title>i_kb_count&#45;&gt;ext_ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1542.49,-90C1607.79,-90 1683.58,-90 1750.24,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1749.9,-92.63 1757.4,-90 1749.9,-87.38 1749.9,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1605.65,-93 1605.65,-125.8 1629.65,-125.8 1629.65,-93 1605.65,-93"/>
<text xml:space="preserve" text-anchor="start" x="1613.75" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1632.65,-93 1632.65,-125.8 1696.99,-125.8 1696.99,-93 1632.65,-93"/>
<text xml:space="preserve" text-anchor="start" x="1635.65" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">探测数据集</text>
</g>
<!-- i_kb_count&#45;&gt;ext_ragflow -->
<g id="edge4" class="edge">
<title>i_kb_count&#45;&gt;ext_ragflow</title>
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
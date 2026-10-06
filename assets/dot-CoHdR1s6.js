var e=e=>{switch(e){case`localDeployment`:return`digraph {
  likec4_viewId = "localDeployment";
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
  "service" [
    likec4_id = "local.appTier.appVm.service";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Beauty Customer Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node.js &gt;=20</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat-based beauty consultation and<BR/>knowledge service</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "store" [
    likec4_id = "local.dataTier.storeVm.store";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local JSON Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">data/local-mvp-store.json</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JSON-file backed state; src/domain/store.js</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "ragflow" [
    likec4_id = "local.dataTier.ragflowVm.ragflow";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">HTTP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "wiki" [
    likec4_id = "local.dataTier.wikiVm.wiki";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">HTTP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM-generated wiki candidate source</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  subgraph "cluster_apptier" {
    likec4_id = "local.appTier";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#194b9e";
    color = "#1b3d88";
    style = "filled";
    margin = 32;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>APPLICATION TIER</B></FONT>>;
    "service";
  }
  subgraph "cluster_datatier" {
    likec4_id = "local.dataTier";
    likec4_level = 0;
    likec4_depth = 2;
    fillcolor = "#1a468d";
    color = "#1c3979";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DATA TIER</B></FONT>>;
    subgraph "cluster_storevm" {
      likec4_id = "local.dataTier.storeVm";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#194b9e";
      color = "#1b3d88";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>LOCAL FILESYSTEM</B></FONT>>;
      "store";
    }
    subgraph "cluster_ragflowvm" {
      likec4_id = "local.dataTier.ragflowVm";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#194b9e";
      color = "#1b3d88";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>LOCALHOST:9380</B></FONT>>;
      "ragflow";
    }
    subgraph "cluster_wikivm" {
      likec4_id = "local.dataTier.wikiVm";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#194b9e";
      color = "#1b3d88";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>LOCALHOST:19828</B></FONT>>;
      "wiki";
    }
  }
  "service" -> "store" [
    likec4_id = "nocwhd";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads and writes</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "service" -> "ragflow" [
    likec4_id = "xuas35";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "service" -> "wiki" [
    likec4_id = "qjokcx";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads candidate wiki</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`wechatDeployment`:return`digraph {
  likec4_viewId = "wechatDeployment";
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
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">End user chatting through WeChat Work<BR/>customer service</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Beauty Customer Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat-based beauty consultation and<BR/>knowledge service</FONT></TD></TR></TABLE>>,
        likec4_id=beauty,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">messages (local dev)</FONT></TD></TR></TABLE>>,
        likec4_id="1httk34",
        minlen=1,
        style=dashed];
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Human operator handling escalated tickets</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses</FONT></TD></TR></TABLE>>,
        likec4_id=r92fuc,
        minlen=1,
        style=dashed];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">WeChat Work customer service platform</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls open API</FONT></TD></TR></TABLE>>,
        likec4_id=g3unbt,
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ybzxqq",
        minlen=1,
        style=dashed];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM-generated wiki candidate source</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> llmwiki [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads candidate wiki</FONT></TD></TR></TABLE>>,
        likec4_id=eyxrl1,
        minlen=1,
        style=dashed];
    wechatwork -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">posts encrypted callback</FONT></TD></TR></TABLE>>,
        likec4_id="1cc3khl",
        style=dashed];
}
`;case`context`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=context,
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
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">End user chatting through WeChat Work<BR/>customer service</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Beauty Customer Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat-based beauty consultation and<BR/>knowledge service</FONT></TD></TR></TABLE>>,
        likec4_id=beauty,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">messages (local dev)</FONT></TD></TR></TABLE>>,
        likec4_id="1httk34",
        minlen=1,
        style=dashed];
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Human operator handling escalated tickets</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses</FONT></TD></TR></TABLE>>,
        likec4_id=r92fuc,
        minlen=1,
        style=dashed];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">WeChat Work customer service platform</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls open API</FONT></TD></TR></TABLE>>,
        likec4_id=g3unbt,
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1ybzxqq",
        minlen=1,
        style=dashed];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM-generated wiki candidate source</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty -> llmwiki [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads candidate wiki</FONT></TD></TR></TABLE>>,
        likec4_id=eyxrl1,
        minlen=1,
        style=dashed];
    wechatwork -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">posts encrypted callback</FONT></TD></TR></TABLE>>,
        likec4_id="1cc3khl",
        style=dashed];
}
`;case`container`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=container,
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
    subgraph cluster_beauty {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BEAUTY CUSTOMER SERVICE</B></FONT>>,
            likec4_depth=1,
            likec4_id=beauty,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        fakewechat [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Fake WeChat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Local message ingress kept for regression;<BR/>src/services/fake-wechat-platform.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.fakeWechat",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        operatorui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single-page console for operators;<BR/>src/ui/operator.html</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.operatorUi",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        wechatcallback [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Callback</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Receives encrypted WeChat Work callbacks;<BR/>src/routes/wechat-kf-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.wechatCallback",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        answerorchestrator [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Answer Orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Decides auto-reply vs handoff;<BR/>src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.answerOrchestrator",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        knowledgeroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;<BR/>src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.knowledgeRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        materialroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Material Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Beauty material ingestion endpoints;<BR/>src/routes/material-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.materialRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        integrationroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Integration Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Feature overview and integration status;<BR/>src/routes/integration-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        answerloop [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Answer Loop</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieval-augmented answer loop;<BR/>src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.answerLoop",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        handoffservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Handoff Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Creates and tracks human handoff tickets;<BR/>src/services/handoff-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        ragflowknowledge [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Knowledge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow retrieval and dataset access;<BR/>src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.ragflowKnowledge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        wechatplatform [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat Work conversation operations;<BR/>src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.wechatPlatform",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        store [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JSON-file backed state; src/domain/store.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.store",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    fakewechat -> answerorchestrator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">forwards message</FONT></TD></TR></TABLE>>,
        likec4_id="1c714pp",
        minlen=1,
        style=dashed];
    operatorui -> knowledgeroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">operates knowledge</FONT></TD></TR></TABLE>>,
        likec4_id=w0v1ym,
        minlen=1,
        style=dashed];
    operatorui -> integrationroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks status</FONT></TD></TR></TABLE>>,
        likec4_id="59ixqa",
        minlen=1,
        style=dashed];
    wechatcallback -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">decrypts and dispatches</FONT></TD></TR></TABLE>>,
        likec4_id=zrxxrw,
        style=dashed,
        weight=2];
    answerorchestrator -> answerloop [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks for answer</FONT></TD></TR></TABLE>>,
        likec4_id=iygt08,
        style=dashed];
    answerorchestrator -> handoffservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">escalates when uncertain</FONT></TD></TR></TABLE>>,
        likec4_id="164k6uh",
        style=dashed];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM-generated wiki candidate source</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    materialroutes -> llmwiki [style=invis];
    answerloop -> ragflowknowledge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves candidates</FONT></TD></TR></TABLE>>,
        likec4_id="1k4739a",
        style=dashed,
        weight=2];
    handoffservice -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies customer</FONT></TD></TR></TABLE>>,
        likec4_id="1deweqw",
        style=dashed,
        weight=2];
    handoffservice -> store [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">persists ticket</FONT></TD></TR></TABLE>>,
        likec4_id="1iu7yf8",
        minlen=1,
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ragflowknowledge -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queries datasets</FONT></TD></TR></TABLE>>,
        likec4_id="19fkz54",
        minlen=1,
        style=dashed];
    wechatplatform -> answerorchestrator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">passes normalized message</FONT></TD></TR></TABLE>>,
        likec4_id="1fmgq4r",
        style=dashed,
        weight=2];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">WeChat Work customer service platform</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    wechatplatform -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls open API</FONT></TD></TR></TABLE>>,
        likec4_id=e2fuec,
        style=dashed];
    wechatwork -> wechatcallback [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">posts encrypted callback</FONT></TD></TR></TABLE>>,
        likec4_id="18n1ipe",
        style=dashed];
}
`;case`answerPath`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=answerPath,
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
    wechatcallback [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Callback</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Receives encrypted WeChat Work callbacks;<BR/>src/routes/wechat-kf-routes.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.wechatCallback",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    wechatplatform [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat Work conversation operations;<BR/>src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.wechatPlatform",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    wechatcallback -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">decrypts and dispatches</FONT></TD></TR></TABLE>>,
        likec4_id=zrxxrw,
        style=dashed,
        weight=2];
    fakewechat [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Fake WeChat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Local message ingress kept for regression;<BR/>src/services/fake-wechat-platform.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.fakeWechat",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerorchestrator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Answer Orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Decides auto-reply vs handoff;<BR/>src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.answerOrchestrator",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    fakewechat -> answerorchestrator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">forwards message</FONT></TD></TR></TABLE>>,
        likec4_id="1c714pp",
        minlen=1,
        style=dashed];
    wechatplatform -> answerorchestrator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">passes normalized message</FONT></TD></TR></TABLE>>,
        likec4_id="1fmgq4r",
        style=dashed,
        weight=2];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">WeChat Work customer service platform</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    wechatplatform -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls open API</FONT></TD></TR></TABLE>>,
        likec4_id=e2fuec,
        style=dashed];
    answerloop [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Answer Loop</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieval-augmented answer loop;<BR/>src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.answerLoop",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerorchestrator -> answerloop [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks for answer</FONT></TD></TR></TABLE>>,
        likec4_id=iygt08,
        style=dashed];
    handoffservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Handoff Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Creates and tracks human handoff tickets;<BR/>src/services/handoff-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.handoffService",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerorchestrator -> handoffservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">escalates when uncertain</FONT></TD></TR></TABLE>>,
        likec4_id="164k6uh",
        style=dashed];
    wechatwork -> wechatcallback [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">posts encrypted callback</FONT></TD></TR></TABLE>>,
        likec4_id="18n1ipe",
        style=dashed];
    replypolicy [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Reply Policy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Confidence and risk thresholds for<BR/>auto-reply;<BR/>src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.replyPolicy",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerloop -> replypolicy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks thresholds</FONT></TD></TR></TABLE>>,
        likec4_id="1nmiw6w",
        style=dashed];
    ragflowknowledge [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Knowledge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow retrieval and dataset access;<BR/>src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.ragflowKnowledge",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerloop -> ragflowknowledge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves candidates</FONT></TD></TR></TABLE>>,
        likec4_id="1k4739a",
        style=dashed,
        weight=2];
    handoffservice -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies customer</FONT></TD></TR></TABLE>>,
        likec4_id="1deweqw",
        style=dashed,
        weight=2];
    store [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JSON-file backed state; src/domain/store.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.store",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    handoffservice -> store [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">persists ticket</FONT></TD></TR></TABLE>>,
        likec4_id="1iu7yf8",
        style=dashed];
    evaluationgate [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Evaluation Gate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Local publication policy gate;<BR/>src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.evaluationGate",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    replypolicy -> evaluationgate [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gates publication</FONT></TD></TR></TABLE>>,
        likec4_id="1ggx1p5",
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ragflowknowledge -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queries datasets</FONT></TD></TR></TABLE>>,
        likec4_id="19fkz54",
        minlen=1,
        style=dashed];
    evaluationgate -> store [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads feedback candidates</FONT></TD></TR></TABLE>>,
        likec4_id="1mtrbis",
        style=dashed];
}
`;case`knowledgeLifecycle`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=knowledgeLifecycle,
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
    knowledgeroutes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;<BR/>src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeRoutes",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgescan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Scan</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Discovers candidate knowledge;<BR/>src/services/knowledge-scan-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeScan",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgeroutes -> knowledgescan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">starts scan</FONT></TD></TR></TABLE>>,
        likec4_id="1sxefbz",
        style=dashed];
    knowledgesync [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Sync</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Pushes approved knowledge to RAGFlow;<BR/>src/services/knowledge-sync-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeSync",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgeroutes -> knowledgesync [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triggers sync</FONT></TD></TR></TABLE>>,
        likec4_id="1sxe6zr",
        style=dashed,
        weight=2];
    knowledgelifecycle [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Lifecycle</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Promotion and retirement of knowledge;<BR/>src/services/knowledge-lifecycle-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeLifecycle",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    ragflowlifecycleprobe [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Lifecycle Probe</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Verifies RAGFlow dataset state;<BR/>src/services/ragflow-lifecycle-probe-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.ragflowLifecycleProbe",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgelifecycle -> ragflowlifecycleprobe [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">verifies dataset state</FONT></TD></TR></TABLE>>,
        likec4_id="1psl778",
        style=dashed,
        weight=2];
    documentregistry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Document Registry</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Tracks material and document identity;<BR/>src/services/knowledge-document-registry.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.documentRegistry",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgelifecycle -> documentregistry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">promotes or retires</FONT></TD></TR></TABLE>>,
        likec4_id="1fsr9hw",
        style=dashed];
    materialroutes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Material Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Beauty material ingestion endpoints;<BR/>src/routes/material-routes.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.materialRoutes",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    materialservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Material Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Material ingestion rules;<BR/>src/services/material-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.materialService",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    materialroutes -> materialservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">accepts material</FONT></TD></TR></TABLE>>,
        likec4_id="1tvlbst",
        minlen=1,
        style=dashed];
    materialbatch [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Material Batch</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Batch material processing;<BR/>src/services/material-batch-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.materialBatch",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    materialbatch -> materialservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">batch ingests</FONT></TD></TR></TABLE>>,
        likec4_id="3ugd63",
        minlen=1,
        style=dashed];
    knowledgealert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Alert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Surfaces knowledge freshness issues;<BR/>src/services/knowledge-alert-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeAlert",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    store [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JSON-file backed state; src/domain/store.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.store",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    knowledgealert -> store [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reports freshness</FONT></TD></TR></TABLE>>,
        likec4_id="93qg9",
        minlen=1,
        style=dashed];
    governance [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Governance</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Publication decisions and governance;<BR/>src/services/knowledge-governance-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.governance",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgescan -> governance [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">submits candidates</FONT></TD></TR></TABLE>>,
        likec4_id="1vijps9",
        style=dashed];
    ragflowknowledge [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Knowledge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow retrieval and dataset access;<BR/>src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.ragflowKnowledge",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgesync -> ragflowknowledge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">pushes dataset</FONT></TD></TR></TABLE>>,
        likec4_id="1fwusqz",
        style=dashed,
        weight=2];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM-generated wiki candidate source</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    knowledgesync -> llmwiki [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads candidate wiki</FONT></TD></TR></TABLE>>,
        likec4_id="1aqd9zy",
        minlen=1,
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ragflowlifecycleprobe -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">inspects datasets</FONT></TD></TR></TABLE>>,
        likec4_id="19icgx2",
        style=dashed];
    materialservice -> documentregistry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">registers document</FONT></TD></TR></TABLE>>,
        likec4_id="10tffly",
        style=dashed];
    evaluationgate [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Evaluation Gate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Local publication policy gate;<BR/>src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.evaluationGate",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    governance -> evaluationgate [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">applies decision</FONT></TD></TR></TABLE>>,
        likec4_id="1nts5et",
        style=dashed];
    ragflowknowledge -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queries datasets</FONT></TD></TR></TABLE>>,
        likec4_id="19fkz54",
        style=dashed];
    evaluationgate -> store [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads feedback candidates</FONT></TD></TR></TABLE>>,
        likec4_id="1mtrbis",
        style=dashed];
}
`;case`operatorSurface`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=operatorSurface,
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
    subgraph cluster_beauty {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BEAUTY CUSTOMER SERVICE</B></FONT>>,
            likec4_depth=1,
            likec4_id=beauty,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        operatorui [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single-page console for operators;<BR/>src/ui/operator.html</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.operatorUi",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        handoffroutes [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Handoff Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Human handoff ticket endpoints;<BR/>src/routes/handoff-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.handoffRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        knowledgeroutes [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;<BR/>src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.knowledgeRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        integrationroutes [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Integration Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Feature overview and integration status;<BR/>src/routes/integration-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        handoffservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Handoff Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Creates and tracks human handoff tickets;<BR/>src/services/handoff-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        materialroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Material Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Beauty material ingestion endpoints;<BR/>src/routes/material-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.materialRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Human operator handling escalated tickets</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> operatorui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses</FONT></TD></TR></TABLE>>,
        likec4_id="1bfoxae",
        minlen=1,
        style=dashed];
    operatorui -> handoffroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages tickets</FONT></TD></TR></TABLE>>,
        likec4_id="1ts1e40",
        minlen=1,
        style=dashed,
        weight=2];
    operatorui -> knowledgeroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">operates knowledge</FONT></TD></TR></TABLE>>,
        likec4_id=w0v1ym,
        minlen=1,
        style=dashed,
        weight=2];
    operatorui -> integrationroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks status</FONT></TD></TR></TABLE>>,
        likec4_id="59ixqa",
        minlen=1,
        style=dashed,
        weight=2];
    handoffservice -> materialroutes [style=invis];
}
`;case`chatToAnswer`:return`digraph {
  likec4_viewId = "chatToAnswer";
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
  "customer" [
    likec4_id = "customer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">End user chatting through WeChat Work<BR/>customer service</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "fakewechat" [
    likec4_id = "beauty.fakeWechat";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Fake WeChat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Local message ingress kept for regression;<BR/>src/services/fake-wechat-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" [
    likec4_id = "beauty.answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Answer Orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Decides auto-reply vs handoff;<BR/>src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerloop" [
    likec4_id = "beauty.answerLoop";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Answer Loop</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieval-augmented answer loop;<BR/>src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflowknowledge" [
    likec4_id = "beauty.ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Knowledge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow retrieval and dataset access;<BR/>src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflow" [
    likec4_id = "ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "replypolicy" [
    likec4_id = "beauty.replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Reply Policy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Confidence and risk thresholds for<BR/>auto-reply;<BR/>src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "wechatplatform" [
    likec4_id = "beauty.wechatPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat Work conversation operations;<BR/>src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "wechatwork" [
    likec4_id = "wechatWork";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat Work</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">WeChat Work customer service platform</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "customer" -> "fakewechat" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">asks a beauty question</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "fakewechat" -> "answerorchestrator" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">forwards message</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "answerloop" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">requests answer</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerloop" -> "ragflowknowledge" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">retrieves candidates</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflow" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">queries dataset</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflow" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">returns passages</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "answerloop" -> "replypolicy" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">checks confidence</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "replypolicy" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">auto-reply allowed</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "answerorchestrator" -> "wechatplatform" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">sends reply</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "wechatplatform" -> "wechatwork" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">posts message</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`retrievalSequence`:return`digraph {
  likec4_viewId = "retrievalSequence";
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
  "customer" [
    likec4_id = "customer";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">End user chatting through WeChat Work<BR/>customer service</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "wechatcallback" [
    likec4_id = "beauty.wechatCallback";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Callback</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Receives encrypted WeChat Work callbacks;<BR/>src/routes/wechat-kf-routes.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "wechatplatform" [
    likec4_id = "beauty.wechatPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat Work conversation operations;<BR/>src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" [
    likec4_id = "beauty.answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Answer Orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Decides auto-reply vs handoff;<BR/>src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerloop" [
    likec4_id = "beauty.answerLoop";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Answer Loop</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieval-augmented answer loop;<BR/>src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflowknowledge" [
    likec4_id = "beauty.ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Knowledge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow retrieval and dataset access;<BR/>src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflow" [
    likec4_id = "ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG and knowledge base service</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "replypolicy" [
    likec4_id = "beauty.replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Reply Policy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Confidence and risk thresholds for<BR/>auto-reply;<BR/>src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "customer" -> "wechatcallback" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">sends question</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "wechatcallback" -> "wechatplatform" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">decrypts</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "wechatplatform" -> "answerorchestrator" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">normalized message</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "answerloop" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">asks for answer</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerloop" -> "ragflowknowledge" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">retrieve</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflow" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">query</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerloop" -> "ragflowknowledge" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">passages</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "answerloop" -> "replypolicy" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">confidence</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "replypolicy" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">decision</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`evaluationSequence`:return`digraph {
  likec4_viewId = "evaluationSequence";
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
  "answerorchestrator" [
    likec4_id = "beauty.answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Answer Orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Decides auto-reply vs handoff;<BR/>src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "evaluationgate" [
    likec4_id = "beauty.evaluationGate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Evaluation Gate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Local publication policy gate;<BR/>src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "store" [
    likec4_id = "beauty.store";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JSON-file backed state; src/domain/store.js</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "replypolicy" [
    likec4_id = "beauty.replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Reply Policy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Confidence and risk thresholds for<BR/>auto-reply;<BR/>src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" -> "evaluationgate" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">evaluate</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "evaluationgate" -> "store" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">read candidates</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "evaluationgate" -> "replypolicy" [
    likec4_id = "step-03.1";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3.1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">check thresholds</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "evaluationgate" -> "store" [
    likec4_id = "step-03.2";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3.2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">read policy state</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`handoffSequence`:return`digraph {
  likec4_viewId = "handoffSequence";
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
  "answerorchestrator" [
    likec4_id = "beauty.answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Answer Orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Decides auto-reply vs handoff;<BR/>src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "handoffservice" [
    likec4_id = "beauty.handoffService";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Handoff Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Creates and tracks human handoff tickets;<BR/>src/services/handoff-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "store" [
    likec4_id = "beauty.store";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JSON-file backed state; src/domain/store.js</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "wechatplatform" [
    likec4_id = "beauty.wechatPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WeChat KF Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WeChat Work conversation operations;<BR/>src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "operator" [
    likec4_id = "operator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Human operator handling escalated tickets</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "operatorui" [
    likec4_id = "beauty.operatorUi";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single-page console for operators;<BR/>src/ui/operator.html</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "handoffroutes" [
    likec4_id = "beauty.handoffRoutes";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Handoff Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Human handoff ticket endpoints;<BR/>src/routes/handoff-routes.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" -> "handoffservice" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">create ticket</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "handoffservice" -> "store" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">persist ticket</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "handoffservice" -> "wechatplatform" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">notify customer</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "operator" -> "operatorui" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">opens ticket</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "operatorui" -> "handoffroutes" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">claim ticket</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`knowledgeSyncSequence`:return`digraph {
  likec4_viewId = "knowledgeSyncSequence";
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
  "operator" [
    likec4_id = "operator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Human operator handling escalated tickets</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "operatorui" [
    likec4_id = "beauty.operatorUi";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Single-page console for operators;<BR/>src/ui/operator.html</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "knowledgeroutes" [
    likec4_id = "beauty.knowledgeRoutes";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Routes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;<BR/>src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "knowledgescan" [
    likec4_id = "beauty.knowledgeScan";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Scan</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Discovers candidate knowledge;<BR/>src/services/knowledge-scan-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "governance" [
    likec4_id = "beauty.governance";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Governance</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Publication decisions and governance;<BR/>src/services/knowledge-governance-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "evaluationgate" [
    likec4_id = "beauty.evaluationGate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Evaluation Gate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Local publication policy gate;<BR/>src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "knowledgesync" [
    likec4_id = "beauty.knowledgeSync";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Knowledge Sync</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Pushes approved knowledge to RAGFlow;<BR/>src/services/knowledge-sync-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "llmwiki" [
    likec4_id = "llmWiki";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM-generated wiki candidate source</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "ragflowknowledge" [
    likec4_id = "beauty.ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Knowledge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow retrieval and dataset access;<BR/>src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "operator" -> "operatorui" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">triggers sync</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "operatorui" -> "knowledgeroutes" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">request sync</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgeroutes" -> "knowledgescan" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">scan candidates</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgescan" -> "governance" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">submit for decision</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "governance" -> "evaluationgate" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">apply publication rule</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgeroutes" -> "knowledgesync" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">push approved</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgesync" -> "llmwiki" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">read candidate wiki</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgesync" -> "ragflowknowledge" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">write dataset</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`configGatedFlow`:return`digraph {
  likec4_viewId = "configGatedFlow";
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
  "answerorchestrator" [
    likec4_id = "beauty.answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Answer Orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Decides auto-reply vs handoff;<BR/>src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflowknowledge" [
    likec4_id = "beauty.ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow Knowledge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow retrieval and dataset access;<BR/>src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" -> "ragflowknowledge" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">attempts retrieval</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflowknowledge" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">checks config gate</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`localDeployment`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1438pt" height="761pt"
 viewBox="0.00 0.00 1438.00 761.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 746.45)">
<g id="clust1" class="cluster">
<title>cluster_apptier</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="516,-458.2 516,-723.4 900,-723.4 900,-458.2 516,-458.2"/>
<text xml:space="preserve" text-anchor="start" x="524" y="-710.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">APPLICATION TIER</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_datatier</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-394.4 1400,-394.4 1400,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-381.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DATA TIER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_storevm</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="58,-58 58,-323.2 450,-323.2 450,-58 58,-58"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LOCAL FILESYSTEM</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_ragflowvm</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="516,-58 516,-323.2 900,-323.2 900,-58 516,-58"/>
<text xml:space="preserve" text-anchor="start" x="524" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LOCALHOST:9380</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_wikivm</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="966,-58 966,-323.2 1350,-323.2 1350,-58 966,-58"/>
<text xml:space="preserve" text-anchor="start" x="974" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LOCALHOST:19828</text>
</g>
<!-- service -->
<g id="node1" class="node">
<title>service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="868.02,-670.2 547.98,-670.2 547.98,-490.2 868.02,-490.2 868.02,-670.2"/>
<text xml:space="preserve" text-anchor="start" x="594.62" y="-602" font-family="Arial" font-size="20.00" fill="#eff6ff">Beauty Customer Service</text>
<text xml:space="preserve" text-anchor="start" x="669.33" y="-581" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node.js &gt;=20</text>
<text xml:space="preserve" text-anchor="start" x="576.67" y="-559.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat&#45;based beauty consultation and</text>
<text xml:space="preserve" text-anchor="start" x="646.3" y="-541.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">knowledge service</text>
</g>
<!-- store -->
<g id="node2" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M417.86,-253.64C417.86,-262.67 344.42,-270 254,-270 163.58,-270 90.14,-262.67 90.14,-253.64 90.14,-253.64 90.14,-106.36 90.14,-106.36 90.14,-97.33 163.58,-90 254,-90 344.42,-90 417.86,-97.33 417.86,-106.36 417.86,-106.36 417.86,-253.64 417.86,-253.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M417.86,-253.64C417.86,-244.61 344.42,-237.27 254,-237.27 163.58,-237.27 90.14,-244.61 90.14,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="173.97" y="-192.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Local JSON Store</text>
<text xml:space="preserve" text-anchor="start" x="181.39" y="-171.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json</text>
<text xml:space="preserve" text-anchor="start" x="110.2" y="-150.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON&#45;file backed state; src/domain/store.js</text>
</g>
<!-- ragflow -->
<g id="node3" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="868.02,-270 547.98,-270 547.98,-90 868.02,-90 868.02,-270"/>
<text xml:space="preserve" text-anchor="start" x="665.22" y="-192.8" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="691.03" y="-171.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">HTTP</text>
<text xml:space="preserve" text-anchor="start" x="595.02" y="-150.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- wiki -->
<g id="node4" class="node">
<title>wiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1318.02,-270 997.98,-270 997.98,-90 1318.02,-90 1318.02,-270"/>
<text xml:space="preserve" text-anchor="start" x="1116.89" y="-192.8" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="1141.03" y="-171.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">HTTP</text>
<text xml:space="preserve" text-anchor="start" x="1033.35" y="-150.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM&#45;generated wiki candidate source</text>
</g>
<!-- service&#45;&gt;store -->
<g id="edge1" class="edge">
<title>service&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M597.56,-490.22C561.03,-460.23 520.42,-426.27 484,-394.4 441.17,-356.92 394.98,-314.48 355.31,-277.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="357.46,-275.79 350.19,-272.58 353.87,-279.62 357.46,-275.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="513.87,-402.4 513.87,-425.2 622.59,-425.2 622.59,-402.4 513.87,-402.4"/>
<text xml:space="preserve" text-anchor="start" x="516.87" y="-408.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
</g>
<!-- service&#45;&gt;ragflow -->
<g id="edge2" class="edge">
<title>service&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M708,-490.33C708,-428 708,-344.61 708,-280.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="710.63,-280.47 708,-272.97 705.38,-280.47 710.63,-280.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="708,-402.4 708,-425.2 734.99,-425.2 734.99,-402.4 708,-402.4"/>
<text xml:space="preserve" text-anchor="start" x="711" y="-410.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- service&#45;&gt;wiki -->
<g id="edge3" class="edge">
<title>service&#45;&gt;wiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M818.61,-490.41C855.15,-460.43 895.72,-426.43 932,-394.4 974.56,-356.83 1020.3,-314.1 1059.43,-276.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1060.86,-279.06 1064.47,-271.98 1057.23,-275.26 1060.86,-279.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="920.25,-402.4 920.25,-425.2 1053.1,-425.2 1053.1,-402.4 920.25,-402.4"/>
<text xml:space="preserve" text-anchor="start" x="923.25" y="-408.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
</g>
</svg>
`;case`wechatDeployment`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1237pt" height="856pt"
 viewBox="0.00 0.00 1237.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="424.04,-825.6 104,-825.6 104,-645.6 424.04,-645.6 424.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="220.68" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="129.37" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">End user chatting through WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="207.34" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">customer service</text>
</g>
<!-- beauty -->
<g id="node2" class="node">
<title>beauty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="640.04,-502.8 320,-502.8 320,-322.8 640.04,-322.8 640.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="366.64" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Beauty Customer Service</text>
<text xml:space="preserve" text-anchor="start" x="348.69" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat&#45;based beauty consultation and</text>
<text xml:space="preserve" text-anchor="start" x="418.32" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">knowledge service</text>
</g>
<!-- operator -->
<g id="node3" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="858.24,-825.6 533.8,-825.6 533.8,-645.6 858.24,-645.6 858.24,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="656.56" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="553.85" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Human operator handling escalated tickets</text>
</g>
<!-- wechatwork -->
<g id="node4" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="97.79" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="25.4" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">WeChat Work customer service platform</text>
</g>
<!-- ragflow -->
<g id="node5" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="777.04,-180 457,-180 457,0 777.04,0 777.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="574.24" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="504.04" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- llmwiki -->
<g id="node6" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1207.04,-180 887,-180 887,0 1207.04,0 1207.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1005.91" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="922.37" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM&#45;generated wiki candidate source</text>
</g>
<!-- customer&#45;&gt;beauty -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M323.9,-645.67C351.99,-603.94 385.54,-554.11 414.33,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="416.51,-512.83 418.52,-505.14 412.15,-509.9 416.51,-512.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="378.5,-562.8 378.5,-585.6 516.77,-585.6 516.77,-562.8 378.5,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="381.5" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">messages (local dev)</text>
</g>
<!-- beauty&#45;&gt;wechatwork -->
<g id="edge3" class="edge">
<title>beauty&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320.15,-389.31C243.16,-369.56 157.54,-332.46 110.52,-262.8 95.88,-241.11 96.25,-215.07 103.34,-189.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="105.82,-190.77 105.58,-182.83 100.81,-189.18 105.82,-190.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="110.52,-240 110.52,-262.8 206.02,-262.8 206.02,-240 110.52,-240"/>
<text xml:space="preserve" text-anchor="start" x="113.52" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- beauty&#45;&gt;ragflow -->
<g id="edge4" class="edge">
<title>beauty&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M518,-322.87C535.71,-281.41 556.83,-231.94 575.01,-189.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="577.36,-190.54 577.9,-182.61 572.54,-188.48 577.36,-190.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="552.63,-240 552.63,-262.8 579.62,-262.8 579.62,-240 552.63,-240"/>
<text xml:space="preserve" text-anchor="start" x="555.63" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- beauty&#45;&gt;llmwiki -->
<g id="edge5" class="edge">
<title>beauty&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M637.21,-322.87C713.1,-279.92 804.18,-228.39 881.18,-184.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="882.15,-187.3 887.38,-181.32 879.56,-182.73 882.15,-187.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="780.52,-240 780.52,-262.8 913.37,-262.8 913.37,-240 780.52,-240"/>
<text xml:space="preserve" text-anchor="start" x="783.52" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
<!-- operator&#45;&gt;beauty -->
<g id="edge2" class="edge">
<title>operator&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M636.14,-645.67C608.05,-603.94 574.5,-554.11 545.71,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="547.89,-509.9 541.52,-505.14 543.53,-512.83 547.89,-509.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="594.5,-562.8 594.5,-585.6 630.07,-585.6 630.07,-562.8 594.5,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="597.5" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses</text>
</g>
<!-- wechatwork&#45;&gt;beauty -->
<g id="edge6" class="edge">
<title>wechatwork&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M248.63,-179.83C290.67,-221.97 340.97,-272.41 383.93,-315.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="382.01,-317.27 389.17,-320.72 385.73,-313.56 382.01,-317.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="329.61,-240 329.61,-262.8 488.92,-262.8 488.92,-240 329.61,-240"/>
<text xml:space="preserve" text-anchor="start" x="332.61" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">posts encrypted callback</text>
</g>
</g>
</svg>
`;case`context`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1237pt" height="856pt"
 viewBox="0.00 0.00 1237.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="424.04,-825.6 104,-825.6 104,-645.6 424.04,-645.6 424.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="220.68" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="129.37" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">End user chatting through WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="207.34" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">customer service</text>
</g>
<!-- beauty -->
<g id="node2" class="node">
<title>beauty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="640.04,-502.8 320,-502.8 320,-322.8 640.04,-322.8 640.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="366.64" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Beauty Customer Service</text>
<text xml:space="preserve" text-anchor="start" x="348.69" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat&#45;based beauty consultation and</text>
<text xml:space="preserve" text-anchor="start" x="418.32" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">knowledge service</text>
</g>
<!-- operator -->
<g id="node3" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="858.24,-825.6 533.8,-825.6 533.8,-645.6 858.24,-645.6 858.24,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="656.56" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="553.85" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Human operator handling escalated tickets</text>
</g>
<!-- wechatwork -->
<g id="node4" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="97.79" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="25.4" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">WeChat Work customer service platform</text>
</g>
<!-- ragflow -->
<g id="node5" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="777.04,-180 457,-180 457,0 777.04,0 777.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="574.24" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="504.04" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- llmwiki -->
<g id="node6" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1207.04,-180 887,-180 887,0 1207.04,0 1207.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1005.91" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="922.37" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM&#45;generated wiki candidate source</text>
</g>
<!-- customer&#45;&gt;beauty -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M323.9,-645.67C351.99,-603.94 385.54,-554.11 414.33,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="416.51,-512.83 418.52,-505.14 412.15,-509.9 416.51,-512.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="378.5,-562.8 378.5,-585.6 516.77,-585.6 516.77,-562.8 378.5,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="381.5" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">messages (local dev)</text>
</g>
<!-- beauty&#45;&gt;wechatwork -->
<g id="edge3" class="edge">
<title>beauty&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320.15,-389.31C243.16,-369.56 157.54,-332.46 110.52,-262.8 95.88,-241.11 96.25,-215.07 103.34,-189.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="105.82,-190.77 105.58,-182.83 100.81,-189.18 105.82,-190.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="110.52,-240 110.52,-262.8 206.02,-262.8 206.02,-240 110.52,-240"/>
<text xml:space="preserve" text-anchor="start" x="113.52" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- beauty&#45;&gt;ragflow -->
<g id="edge4" class="edge">
<title>beauty&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M518,-322.87C535.71,-281.41 556.83,-231.94 575.01,-189.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="577.36,-190.54 577.9,-182.61 572.54,-188.48 577.36,-190.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="552.63,-240 552.63,-262.8 579.62,-262.8 579.62,-240 552.63,-240"/>
<text xml:space="preserve" text-anchor="start" x="555.63" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- beauty&#45;&gt;llmwiki -->
<g id="edge5" class="edge">
<title>beauty&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M637.21,-322.87C713.1,-279.92 804.18,-228.39 881.18,-184.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="882.15,-187.3 887.38,-181.32 879.56,-182.73 882.15,-187.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="780.52,-240 780.52,-262.8 913.37,-262.8 913.37,-240 780.52,-240"/>
<text xml:space="preserve" text-anchor="start" x="783.52" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
<!-- operator&#45;&gt;beauty -->
<g id="edge2" class="edge">
<title>operator&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M636.14,-645.67C608.05,-603.94 574.5,-554.11 545.71,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="547.89,-509.9 541.52,-505.14 543.53,-512.83 547.89,-509.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="594.5,-562.8 594.5,-585.6 630.07,-585.6 630.07,-562.8 594.5,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="597.5" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses</text>
</g>
<!-- wechatwork&#45;&gt;beauty -->
<g id="edge6" class="edge">
<title>wechatwork&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M248.63,-179.83C290.67,-221.97 340.97,-272.41 383.93,-315.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="382.01,-317.27 389.17,-320.72 385.73,-313.56 382.01,-317.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="329.61,-240 329.61,-262.8 488.92,-262.8 488.92,-240 329.61,-240"/>
<text xml:space="preserve" text-anchor="start" x="332.61" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">posts encrypted callback</text>
</g>
</g>
</svg>
`;case`container`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2204pt" height="1570pt"
 viewBox="0.00 0.00 2204.00 1570.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1555.45)">
<g id="clust1" class="cluster">
<title>cluster_beauty</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1532.4 1814,-1532.4 1814,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1519.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BEAUTY CUSTOMER SERVICE</text>
</g>
<!-- fakewechat -->
<g id="node1" class="node">
<title>fakewechat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="413.99,-1471.2 48.01,-1471.2 48.01,-1291.2 413.99,-1291.2 413.99,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="169.87" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Fake WeChat</text>
<text xml:space="preserve" text-anchor="start" x="88.01" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Local message ingress kept for regression;</text>
<text xml:space="preserve" text-anchor="start" x="111.8" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/fake&#45;wechat&#45;platform.js</text>
</g>
<!-- operatorui -->
<g id="node2" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="844.02,-1471.2 523.98,-1471.2 523.98,-1291.2 844.02,-1291.2 844.02,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="605.07" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator Console</text>
<text xml:space="preserve" text-anchor="start" x="569.35" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single&#45;page console for operators;</text>
<text xml:space="preserve" text-anchor="start" x="619.81" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html</text>
</g>
<!-- wechatcallback -->
<g id="node3" class="node">
<title>wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1333.64,-1471.2 954.36,-1471.2 954.36,-1291.2 1333.64,-1291.2 1333.64,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1051.19" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Callback</text>
<text xml:space="preserve" text-anchor="start" x="994.36" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Receives encrypted WeChat Work callbacks;</text>
<text xml:space="preserve" text-anchor="start" x="1046.05" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js</text>
</g>
<!-- answerorchestrator -->
<g id="node4" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.02,-1148.4 47.98,-1148.4 47.98,-968.4 378.02,-968.4 378.02,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="121.31" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Answer Orchestrator</text>
<text xml:space="preserve" text-anchor="start" x="111.7" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Decides auto&#45;reply vs handoff;</text>
<text xml:space="preserve" text-anchor="start" x="97.14" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js</text>
</g>
<!-- knowledgeroutes -->
<g id="node5" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="877.68,-1148.4 488.32,-1148.4 488.32,-968.4 877.68,-968.4 877.68,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="599.05" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Routes</text>
<text xml:space="preserve" text-anchor="start" x="528.32" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="581.29" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js</text>
</g>
<!-- materialroutes -->
<g id="node6" class="node">
<title>materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1774.02,-1471.2 1443.98,-1471.2 1443.98,-1291.2 1774.02,-1291.2 1774.02,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1538.97" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Material Routes</text>
<text xml:space="preserve" text-anchor="start" x="1488.09" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Beauty material ingestion endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="1516.47" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js</text>
</g>
<!-- integrationroutes -->
<g id="node7" class="node">
<title>integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1334.41,-1148.4 987.59,-1148.4 987.59,-968.4 1334.41,-968.4 1334.41,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1079.28" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Integration Routes</text>
<text xml:space="preserve" text-anchor="start" x="1027.59" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Feature overview and integration status;</text>
<text xml:space="preserve" text-anchor="start" x="1060.12" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js</text>
</g>
<!-- answerloop -->
<g id="node8" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="437.64,-825.6 48.36,-825.6 48.36,-645.6 437.64,-645.6 437.64,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="132.37" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Answer Loop</text>
<text xml:space="preserve" text-anchor="start" x="128.77" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieval&#45;augmented answer loop;</text>
<text xml:space="preserve" text-anchor="start" x="88.36" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- handoffservice -->
<g id="node9" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="914.49,-825.6 553.51,-825.6 553.51,-645.6 914.49,-645.6 914.49,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="662.85" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Handoff Service</text>
<text xml:space="preserve" text-anchor="start" x="593.51" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Creates and tracks human handoff tickets;</text>
<text xml:space="preserve" text-anchor="start" x="633.55" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node10" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="420.96,-502.8 65.04,-502.8 65.04,-322.8 420.96,-322.8 420.96,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="147.96" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Knowledge</text>
<text xml:space="preserve" text-anchor="start" x="113.36" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow retrieval and dataset access;</text>
<text xml:space="preserve" text-anchor="start" x="105.04" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- wechatplatform -->
<g id="node11" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1324.47,-502.8 983.53,-502.8 983.53,-322.8 1324.47,-322.8 1324.47,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1062.31" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Platform</text>
<text xml:space="preserve" text-anchor="start" x="1023.53" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat Work conversation operations;</text>
<text xml:space="preserve" text-anchor="start" x="1043.14" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- store -->
<g id="node12" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M873.86,-486.44C873.86,-495.47 800.42,-502.8 710,-502.8 619.58,-502.8 546.14,-495.47 546.14,-486.44 546.14,-486.44 546.14,-339.16 546.14,-339.16 546.14,-330.13 619.58,-322.8 710,-322.8 800.42,-322.8 873.86,-330.13 873.86,-339.16 873.86,-339.16 873.86,-486.44 873.86,-486.44"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M873.86,-486.44C873.86,-477.41 800.42,-470.07 710,-470.07 619.58,-470.07 546.14,-477.41 546.14,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="659.41" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Local Store</text>
<text xml:space="preserve" text-anchor="start" x="566.2" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON&#45;file backed state; src/domain/store.js</text>
</g>
<!-- llmwiki -->
<g id="node13" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2174.02,-1148.4 1853.98,-1148.4 1853.98,-968.4 2174.02,-968.4 2174.02,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1972.89" y="-1061.4" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="1889.35" y="-1038.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM&#45;generated wiki candidate source</text>
</g>
<!-- ragflow -->
<g id="node14" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="403.02,-180 82.98,-180 82.98,0 403.02,0 403.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="200.22" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="130.02" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- wechatwork -->
<g id="node15" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1657.02,-180 1336.98,-180 1336.98,0 1657.02,0 1657.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="1434.77" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="1362.38" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">WeChat Work customer service platform</text>
</g>
<!-- fakewechat&#45;&gt;answerorchestrator -->
<g id="edge1" class="edge">
<title>fakewechat&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M226.01,-1291.27C223.7,-1250.07 220.94,-1200.96 218.56,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="221.19,-1158.59 218.15,-1151.25 215.95,-1158.89 221.19,-1158.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="222.54,-1208.4 222.54,-1231.2 342.92,-1231.2 342.92,-1208.4 222.54,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="225.54" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards message</text>
</g>
<!-- operatorui&#45;&gt;knowledgeroutes -->
<g id="edge2" class="edge">
<title>operatorui&#45;&gt;knowledgeroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M683.72,-1291.27C683.59,-1250.07 683.44,-1200.96 683.31,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="685.93,-1158.75 683.29,-1151.26 680.68,-1158.76 685.93,-1158.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="683.53,-1208.4 683.53,-1231.2 814.84,-1231.2 814.84,-1208.4 683.53,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="686.53" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">operates knowledge</text>
</g>
<!-- operatorui&#45;&gt;integrationroutes -->
<g id="edge3" class="edge">
<title>operatorui&#45;&gt;integrationroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M816.24,-1291.27C879.7,-1248.59 955.77,-1197.42 1020.3,-1154.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1021.65,-1156.28 1026.41,-1149.92 1018.72,-1151.93 1021.65,-1156.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="936.8,-1208.4 936.8,-1231.2 1027.62,-1231.2 1027.62,-1208.4 936.8,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="939.8" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks status</text>
</g>
<!-- wechatcallback&#45;&gt;wechatplatform -->
<g id="edge4" class="edge">
<title>wechatcallback&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1275.08,-1291.24C1319.97,-1253.08 1364.92,-1204.33 1389,-1148.4 1484.33,-926.97 1329.34,-653.66 1228.97,-510.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1231.27,-509.67 1224.79,-505.06 1226.99,-512.7 1231.27,-509.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1410.18,-885.6 1410.18,-908.4 1567.16,-908.4 1567.16,-885.6 1410.18,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1413.18" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">decrypts and dispatches</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge5" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M221.32,-968.47C225.17,-927.27 229.76,-878.16 233.73,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="236.33,-836.16 234.41,-828.44 231.1,-835.67 236.33,-836.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="228.9,-885.6 228.9,-908.4 332.93,-908.4 332.93,-885.6 228.9,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="231.9" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks for answer</text>
</g>
<!-- answerorchestrator&#45;&gt;handoffservice -->
<g id="edge6" class="edge">
<title>answerorchestrator&#45;&gt;handoffservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M357.44,-968.47C427.03,-925.61 510.52,-874.2 581.18,-830.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="582.15,-833.18 587.16,-827.02 579.39,-828.71 582.15,-833.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.12,-885.6 489.12,-908.4 653.11,-908.4 653.11,-885.6 489.12,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="492.12" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">escalates when uncertain</text>
</g>
<!-- materialroutes&#45;&gt;llmwiki -->
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge8" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M243,-645.67C243,-604.47 243,-555.36 243,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="245.63,-513.16 243,-505.66 240.38,-513.16 245.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="243,-562.8 243,-585.6 374.29,-585.6 374.29,-562.8 243,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="246" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieves candidates</text>
</g>
<!-- handoffservice&#45;&gt;wechatplatform -->
<g id="edge9" class="edge">
<title>handoffservice&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M850.44,-645.67C906.08,-603.16 972.75,-552.24 1029.42,-508.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1030.93,-511.11 1035.3,-504.47 1027.74,-506.93 1030.93,-511.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="956.59,-562.8 956.59,-585.6 1068.41,-585.6 1068.41,-562.8 956.59,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="959.59" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">notifies customer</text>
</g>
<!-- handoffservice&#45;&gt;store -->
<g id="edge10" class="edge">
<title>handoffservice&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M727.35,-645.67C724.29,-604.81 720.65,-556.18 717.5,-514.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="720.13,-514.05 716.95,-506.76 714.9,-514.44 720.13,-514.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="722.72,-562.8 722.72,-585.6 813.52,-585.6 813.52,-562.8 722.72,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="725.72" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">persists ticket</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge11" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M243,-322.87C243,-281.67 243,-232.56 243,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="245.63,-190.36 243,-182.86 240.38,-190.36 245.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="243,-240 243,-262.8 351.73,-262.8 351.73,-240 243,-240"/>
<text xml:space="preserve" text-anchor="start" x="246" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries datasets</text>
</g>
<!-- wechatplatform&#45;&gt;answerorchestrator -->
<g id="edge12" class="edge">
<title>wechatplatform&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1138.41,-502.39C1117.01,-596.94 1069.14,-744.09 969,-825.6 777.8,-981.23 667.68,-892.87 433,-968.4 418.06,-973.21 402.69,-978.56 387.36,-984.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="386.78,-981.59 380.66,-986.66 388.61,-986.52 386.78,-981.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1091.47,-724.2 1091.47,-747 1274.89,-747 1274.89,-724.2 1091.47,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1094.47" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">passes normalized message</text>
</g>
<!-- wechatplatform&#45;&gt;wechatwork -->
<g id="edge13" class="edge">
<title>wechatplatform&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1249.09,-322.87C1294.26,-280.62 1348.31,-230.07 1394.4,-186.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1396.13,-188.94 1399.81,-181.9 1392.54,-185.1 1396.13,-188.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1335.78,-240 1335.78,-262.8 1431.28,-262.8 1431.28,-240 1335.78,-240"/>
<text xml:space="preserve" text-anchor="start" x="1338.78" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- wechatwork&#45;&gt;wechatcallback -->
<g id="edge14" class="edge">
<title>wechatwork&#45;&gt;wechatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1573.59,-179.95C1618.3,-241 1666,-326.19 1666,-411.8 1666,-1059.4 1666,-1059.4 1666,-1059.4 1666,-1138.39 1490.32,-1233.7 1342.79,-1299.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1342.11,-1297.24 1336.33,-1302.69 1344.25,-1302.03 1342.11,-1297.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1666,-724.2 1666,-747 1825.3,-747 1825.3,-724.2 1666,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1669" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">posts encrypted callback</text>
</g>
</g>
</svg>
`;case`answerPath`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1459pt" height="2147pt"
 viewBox="0.00 0.00 1459.00 2147.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2131.85)">
<!-- wechatcallback -->
<g id="node1" class="node">
<title>wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="716.66,-2116.8 337.38,-2116.8 337.38,-1936.8 716.66,-1936.8 716.66,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="434.21" y="-2038.8" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Callback</text>
<text xml:space="preserve" text-anchor="start" x="377.38" y="-2015.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Receives encrypted WeChat Work callbacks;</text>
<text xml:space="preserve" text-anchor="start" x="429.07" y="-1997.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js</text>
</g>
<!-- wechatplatform -->
<g id="node2" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="740.49,-1794 399.55,-1794 399.55,-1614 740.49,-1614 740.49,-1794"/>
<text xml:space="preserve" text-anchor="start" x="478.33" y="-1716" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Platform</text>
<text xml:space="preserve" text-anchor="start" x="439.55" y="-1693" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat Work conversation operations;</text>
<text xml:space="preserve" text-anchor="start" x="459.16" y="-1675" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- fakewechat -->
<g id="node3" class="node">
<title>fakewechat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1193.01,-2116.8 827.03,-2116.8 827.03,-1936.8 1193.01,-1936.8 1193.01,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="948.89" y="-2038.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Fake WeChat</text>
<text xml:space="preserve" text-anchor="start" x="867.03" y="-2015.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Local message ingress kept for regression;</text>
<text xml:space="preserve" text-anchor="start" x="890.82" y="-1997.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/fake&#45;wechat&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node4" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1122.04,-1471.2 792,-1471.2 792,-1291.2 1122.04,-1291.2 1122.04,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="865.33" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Answer Orchestrator</text>
<text xml:space="preserve" text-anchor="start" x="855.72" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Decides auto&#45;reply vs handoff;</text>
<text xml:space="preserve" text-anchor="start" x="841.16" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js</text>
</g>
<!-- wechatwork -->
<g id="node5" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-1471.2 0,-1471.2 0,-1291.2 320.04,-1291.2 320.04,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="97.79" y="-1384.2" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="25.4" y="-1361.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">WeChat Work customer service platform</text>
</g>
<!-- answerloop -->
<g id="node6" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1343.66,-1148.4 954.38,-1148.4 954.38,-968.4 1343.66,-968.4 1343.66,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1038.39" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Answer Loop</text>
<text xml:space="preserve" text-anchor="start" x="1034.79" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieval&#45;augmented answer loop;</text>
<text xml:space="preserve" text-anchor="start" x="994.38" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- handoffservice -->
<g id="node7" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.51,-1148.4 389.53,-1148.4 389.53,-968.4 750.51,-968.4 750.51,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="498.87" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Handoff Service</text>
<text xml:space="preserve" text-anchor="start" x="429.53" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Creates and tracks human handoff tickets;</text>
<text xml:space="preserve" text-anchor="start" x="469.57" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js</text>
</g>
<!-- replypolicy -->
<g id="node8" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="963.04,-825.6 633,-825.6 633,-645.6 963.04,-645.6 963.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="743" y="-756.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Reply Policy</text>
<text xml:space="preserve" text-anchor="start" x="684.21" y="-733.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Confidence and risk thresholds for</text>
<text xml:space="preserve" text-anchor="start" x="762.59" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">auto&#45;reply;</text>
<text xml:space="preserve" text-anchor="start" x="684.67" y="-697.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node9" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1428.98,-825.6 1073.06,-825.6 1073.06,-645.6 1428.98,-645.6 1428.98,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1155.98" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Knowledge</text>
<text xml:space="preserve" text-anchor="start" x="1121.38" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow retrieval and dataset access;</text>
<text xml:space="preserve" text-anchor="start" x="1113.06" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- store -->
<g id="node10" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M715.88,-163.64C715.88,-172.67 642.44,-180 552.02,-180 461.6,-180 388.16,-172.67 388.16,-163.64 388.16,-163.64 388.16,-16.36 388.16,-16.36 388.16,-7.33 461.6,0 552.02,0 642.44,0 715.88,-7.33 715.88,-16.36 715.88,-16.36 715.88,-163.64 715.88,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M715.88,-163.64C715.88,-154.61 642.44,-147.27 552.02,-147.27 461.6,-147.27 388.16,-154.61 388.16,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="501.43" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Local Store</text>
<text xml:space="preserve" text-anchor="start" x="408.22" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON&#45;file backed state; src/domain/store.js</text>
</g>
<!-- evaluationgate -->
<g id="node11" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="963.04,-502.8 633,-502.8 633,-322.8 963.04,-322.8 963.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="726.86" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Evaluation Gate</text>
<text xml:space="preserve" text-anchor="start" x="702.12" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Local publication policy gate;</text>
<text xml:space="preserve" text-anchor="start" x="697.56" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js</text>
</g>
<!-- ragflow -->
<g id="node12" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1411.04,-502.8 1091,-502.8 1091,-322.8 1411.04,-322.8 1411.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1208.24" y="-415.8" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1138.04" y="-392.8" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- wechatcallback&#45;&gt;wechatplatform -->
<g id="edge1" class="edge">
<title>wechatcallback&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M538.94,-1936.87C544.46,-1895.67 551.05,-1846.56 556.73,-1804.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="559.32,-1804.61 557.71,-1796.83 554.11,-1803.91 559.32,-1804.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="549.81,-1854 549.81,-1876.8 706.79,-1876.8 706.79,-1854 549.81,-1854"/>
<text xml:space="preserve" text-anchor="start" x="552.81" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">decrypts and dispatches</text>
</g>
<!-- wechatplatform&#45;&gt;answerorchestrator -->
<g id="edge3" class="edge">
<title>wechatplatform&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M653.8,-1614.34C681.45,-1586.66 712.99,-1556.72 743.6,-1531.2 765.57,-1512.89 789.72,-1494.52 813.63,-1477.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="815.05,-1479.46 819.61,-1472.96 811.99,-1475.2 815.05,-1479.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="743.6,-1531.2 743.6,-1554 927.02,-1554 927.02,-1531.2 743.6,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="746.6" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">passes normalized message</text>
</g>
<!-- wechatplatform&#45;&gt;wechatwork -->
<g id="edge4" class="edge">
<title>wechatplatform&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M456.36,-1614.07C402.03,-1571.56 336.95,-1520.64 281.64,-1477.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="283.46,-1475.45 275.93,-1472.89 280.22,-1479.58 283.46,-1475.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="377.31,-1531.2 377.31,-1554 472.81,-1554 472.81,-1531.2 377.31,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="380.31" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- fakewechat&#45;&gt;answerorchestrator -->
<g id="edge2" class="edge">
<title>fakewechat&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1002.71,-1936.99C992.87,-1817.58 975.44,-1605.93 965.19,-1481.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="967.82,-1481.41 964.59,-1474.15 962.59,-1481.84 967.82,-1481.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="990.51,-1692.6 990.51,-1715.4 1110.89,-1715.4 1110.89,-1692.6 990.51,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="993.51" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards message</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge5" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1010.25,-1291.27C1035.17,-1249.63 1064.92,-1199.92 1090.47,-1157.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1092.7,-1158.61 1094.3,-1150.83 1088.2,-1155.91 1092.7,-1158.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1058.78,-1208.4 1058.78,-1231.2 1162.81,-1231.2 1162.81,-1208.4 1058.78,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1061.78" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks for answer</text>
</g>
<!-- answerorchestrator&#45;&gt;handoffservice -->
<g id="edge6" class="edge">
<title>answerorchestrator&#45;&gt;handoffservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M849.73,-1291.27C798.56,-1248.85 737.28,-1198.05 685.14,-1154.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="686.96,-1152.93 679.51,-1150.16 683.61,-1156.97 686.96,-1152.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="775.12,-1208.4 775.12,-1231.2 939.11,-1231.2 939.11,-1208.4 775.12,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="778.12" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">escalates when uncertain</text>
</g>
<!-- wechatwork&#45;&gt;wechatcallback -->
<g id="edge7" class="edge">
<title>wechatwork&#45;&gt;wechatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M144.15,-1470.91C133.09,-1558.89 129.03,-1694.59 185.72,-1794 218.88,-1852.15 273.31,-1898.73 329.06,-1934.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="327.35,-1936.47 335.1,-1938.25 330.15,-1932.03 327.35,-1936.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="185.72,-1692.6 185.72,-1715.4 345.02,-1715.4 345.02,-1692.6 185.72,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="188.72" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">posts encrypted callback</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1051.71,-968.47C1005.4,-926.13 949.95,-875.46 902.72,-832.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="904.75,-830.59 897.45,-827.47 901.21,-834.47 904.75,-830.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="984.04,-885.6 984.04,-908.4 1102.1,-908.4 1102.1,-885.6 984.04,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="987.04" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks thresholds</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge9" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1177.3,-968.47C1190.45,-927.09 1206.14,-877.75 1219.66,-835.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1222.09,-836.26 1221.86,-828.31 1217.08,-834.67 1222.09,-836.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1203.08,-885.6 1203.08,-908.4 1334.37,-908.4 1334.37,-885.6 1203.08,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1206.08" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieves candidates</text>
</g>
<!-- handoffservice&#45;&gt;wechatplatform -->
<g id="edge10" class="edge">
<title>handoffservice&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M570.02,-1148.34C570.02,-1267.8 570.02,-1479.45 570.02,-1603.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="567.4,-1603.66 570.02,-1611.16 572.65,-1603.66 567.4,-1603.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="570.02,-1369.8 570.02,-1392.6 681.84,-1392.6 681.84,-1369.8 570.02,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="573.02" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">notifies customer</text>
</g>
<!-- handoffservice&#45;&gt;store -->
<g id="edge11" class="edge">
<title>handoffservice&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M568.37,-968.65C565.01,-788.44 557.42,-380.75 553.89,-191.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="556.51,-191.25 553.75,-183.8 551.26,-191.34 556.51,-191.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="561.23,-562.8 561.23,-585.6 652.03,-585.6 652.03,-562.8 561.23,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="564.23" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">persists ticket</text>
</g>
<!-- replypolicy&#45;&gt;evaluationgate -->
<g id="edge12" class="edge">
<title>replypolicy&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M798.02,-645.67C798.02,-604.47 798.02,-555.36 798.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="800.65,-513.16 798.02,-505.66 795.4,-513.16 800.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="798.02,-562.8 798.02,-585.6 909.1,-585.6 909.1,-562.8 798.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="801.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">gates publication</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge13" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1251.02,-645.67C1251.02,-604.47 1251.02,-555.36 1251.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1253.65,-513.16 1251.02,-505.66 1248.4,-513.16 1253.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1251.02,-562.8 1251.02,-585.6 1359.75,-585.6 1359.75,-562.8 1251.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1254.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries datasets</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge14" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M729.82,-322.87C697.96,-281.32 659.94,-231.73 627.24,-189.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="629.48,-187.7 622.83,-183.35 625.31,-190.89 629.48,-187.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="682.4,-240 682.4,-262.8 855.73,-262.8 855.73,-240 682.4,-240"/>
<text xml:space="preserve" text-anchor="start" x="685.4" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads feedback candidates</text>
</g>
</g>
</svg>
`;case`knowledgeLifecycle`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3126pt" height="1501pt"
 viewBox="0.00 0.00 3126.00 1501.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1486.25)">
<!-- knowledgeroutes -->
<g id="node1" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1261.05,-1471.2 871.7,-1471.2 871.7,-1291.2 1261.05,-1291.2 1261.05,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="982.43" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Routes</text>
<text xml:space="preserve" text-anchor="start" x="911.7" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="964.66" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js</text>
</g>
<!-- knowledgescan -->
<g id="node2" class="node">
<title>knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="765,-1148.4 425.75,-1148.4 425.75,-968.4 765,-968.4 765,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="520.32" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Scan</text>
<text xml:space="preserve" text-anchor="start" x="487.81" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Discovers candidate knowledge;</text>
<text xml:space="preserve" text-anchor="start" x="465.75" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js</text>
</g>
<!-- knowledgesync -->
<g id="node3" class="node">
<title>knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1247.28,-1148.4 885.46,-1148.4 885.46,-968.4 1247.28,-968.4 1247.28,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="991.88" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Sync</text>
<text xml:space="preserve" text-anchor="start" x="925.46" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pushes approved knowledge to RAGFlow;</text>
<text xml:space="preserve" text-anchor="start" x="937.17" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js</text>
</g>
<!-- knowledgelifecycle -->
<g id="node4" class="node">
<title>knowledgelifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2200.83,-1471.2 1839.92,-1471.2 1839.92,-1291.2 2200.83,-1291.2 2200.83,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1929.2" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Lifecycle</text>
<text xml:space="preserve" text-anchor="start" x="1887.38" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Promotion and retirement of knowledge;</text>
<text xml:space="preserve" text-anchor="start" x="1879.92" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;lifecycle&#45;service.js</text>
</g>
<!-- ragflowlifecycleprobe -->
<g id="node5" class="node">
<title>ragflowlifecycleprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2202.83,-825.6 1821.92,-825.6 1821.92,-645.6 2202.83,-645.6 2202.83,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1898.44" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Lifecycle Probe</text>
<text xml:space="preserve" text-anchor="start" x="1906.08" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Verifies RAGFlow dataset state;</text>
<text xml:space="preserve" text-anchor="start" x="1861.92" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
</g>
<!-- documentregistry -->
<g id="node6" class="node">
<title>documentregistry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2687.92,-825.6 2312.82,-825.6 2312.82,-645.6 2687.92,-645.6 2687.92,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="2415.34" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Document Registry</text>
<text xml:space="preserve" text-anchor="start" x="2371.56" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Tracks material and document identity;</text>
<text xml:space="preserve" text-anchor="start" x="2352.82" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;document&#45;registry.js</text>
</g>
<!-- materialroutes -->
<g id="node7" class="node">
<title>materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2656.4,-1471.2 2326.35,-1471.2 2326.35,-1291.2 2656.4,-1291.2 2656.4,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="2421.34" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Material Routes</text>
<text xml:space="preserve" text-anchor="start" x="2370.46" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Beauty material ingestion endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="2398.84" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js</text>
</g>
<!-- materialservice -->
<g id="node8" class="node">
<title>materialservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2665.4,-1148.4 2335.35,-1148.4 2335.35,-968.4 2665.4,-968.4 2665.4,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2428.68" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Material Service</text>
<text xml:space="preserve" text-anchor="start" x="2421.17" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Material ingestion rules;</text>
<text xml:space="preserve" text-anchor="start" x="2398.27" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;service.js</text>
</g>
<!-- materialbatch -->
<g id="node9" class="node">
<title>materialbatch</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3096.4,-1471.2 2766.35,-1471.2 2766.35,-1291.2 3096.4,-1291.2 3096.4,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="2867.46" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Material Batch</text>
<text xml:space="preserve" text-anchor="start" x="2843" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Batch material processing;</text>
<text xml:space="preserve" text-anchor="start" x="2808.43" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/material&#45;batch&#45;service.js</text>
</g>
<!-- knowledgealert -->
<g id="node10" class="node">
<title>knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="336.74,-1471.2 0,-1471.2 0,-1291.2 336.74,-1291.2 336.74,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="95.55" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Alert</text>
<text xml:space="preserve" text-anchor="start" x="40.81" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Surfaces knowledge freshness issues;</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js</text>
</g>
<!-- store -->
<g id="node11" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M417.23,-163.64C417.23,-172.67 343.79,-180 253.37,-180 162.96,-180 89.51,-172.67 89.51,-163.64 89.51,-163.64 89.51,-16.36 89.51,-16.36 89.51,-7.33 162.96,0 253.37,0 343.79,0 417.23,-7.33 417.23,-16.36 417.23,-16.36 417.23,-163.64 417.23,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M417.23,-163.64C417.23,-154.61 343.79,-147.27 253.37,-147.27 162.96,-147.27 89.51,-154.61 89.51,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="202.79" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Local Store</text>
<text xml:space="preserve" text-anchor="start" x="109.57" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON&#45;file backed state; src/domain/store.js</text>
</g>
<!-- governance -->
<g id="node12" class="node">
<title>governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="778.35,-825.6 392.39,-825.6 392.39,-645.6 778.35,-645.6 778.35,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="478.63" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Governance</text>
<text xml:space="preserve" text-anchor="start" x="457.37" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Publication decisions and governance;</text>
<text xml:space="preserve" text-anchor="start" x="432.39" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node13" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1244.33,-825.6 888.41,-825.6 888.41,-645.6 1244.33,-645.6 1244.33,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="971.33" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Knowledge</text>
<text xml:space="preserve" text-anchor="start" x="936.73" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow retrieval and dataset access;</text>
<text xml:space="preserve" text-anchor="start" x="928.41" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- llmwiki -->
<g id="node14" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1674.39,-825.6 1354.35,-825.6 1354.35,-645.6 1674.39,-645.6 1674.39,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1473.26" y="-738.6" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="1389.72" y="-715.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM&#45;generated wiki candidate source</text>
</g>
<!-- ragflow -->
<g id="node15" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1699.39,-502.8 1379.35,-502.8 1379.35,-322.8 1699.39,-322.8 1699.39,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1496.59" y="-415.8" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1426.39" y="-392.8" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- evaluationgate -->
<g id="node16" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="686.4,-502.8 356.35,-502.8 356.35,-322.8 686.4,-322.8 686.4,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="450.21" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Evaluation Gate</text>
<text xml:space="preserve" text-anchor="start" x="425.48" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Local publication policy gate;</text>
<text xml:space="preserve" text-anchor="start" x="420.91" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgescan -->
<g id="edge1" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgescan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M935.8,-1291.27C873.14,-1248.59 798.02,-1197.42 734.3,-1154.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="735.97,-1151.99 728.29,-1149.93 733.01,-1156.33 735.97,-1151.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="844.99,-1208.4 844.99,-1231.2 918.68,-1231.2 918.68,-1208.4 844.99,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="847.99" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">starts scan</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgesync -->
<g id="edge2" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgesync</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1066.37,-1291.27C1066.37,-1250.07 1066.37,-1200.96 1066.37,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1069,-1158.76 1066.37,-1151.26 1063.75,-1158.76 1069,-1158.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1066.37,-1208.4 1066.37,-1231.2 1151.73,-1231.2 1151.73,-1208.4 1066.37,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1069.37" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">triggers sync</text>
</g>
<!-- knowledgescan&#45;&gt;governance -->
<g id="edge8" class="edge">
<title>knowledgescan&#45;&gt;governance</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M592.6,-968.47C591.32,-927.27 589.78,-878.16 588.46,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="591.09,-835.87 588.23,-828.46 585.84,-836.03 591.09,-835.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.67,-885.6 590.67,-908.4 716.51,-908.4 716.51,-885.6 590.67,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="593.67" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">submits candidates</text>
</g>
<!-- knowledgesync&#45;&gt;ragflowknowledge -->
<g id="edge9" class="edge">
<title>knowledgesync&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1066.37,-968.47C1066.37,-927.27 1066.37,-878.16 1066.37,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1069,-835.96 1066.37,-828.46 1063.75,-835.96 1069,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1066.37,-885.6 1066.37,-908.4 1167.33,-908.4 1167.33,-885.6 1066.37,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1069.37" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">pushes dataset</text>
</g>
<!-- knowledgesync&#45;&gt;llmwiki -->
<g id="edge10" class="edge">
<title>knowledgesync&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1190.57,-968.47C1250.05,-925.87 1321.33,-874.83 1381.85,-831.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1383.29,-833.69 1387.86,-827.19 1380.23,-829.42 1383.29,-833.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1303.8,-885.6 1303.8,-908.4 1436.65,-908.4 1436.65,-885.6 1303.8,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1306.8" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
<!-- knowledgelifecycle&#45;&gt;ragflowlifecycleprobe -->
<g id="edge3" class="edge">
<title>knowledgelifecycle&#45;&gt;ragflowlifecycleprobe</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2019.27,-1291.39C2017.78,-1171.98 2015.15,-960.33 2013.6,-835.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2016.23,-836.03 2013.51,-828.56 2010.98,-836.09 2016.23,-836.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2017.43,-1047 2017.43,-1069.8 2151.83,-1069.8 2151.83,-1047 2017.43,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2020.43" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">verifies dataset state</text>
</g>
<!-- knowledgelifecycle&#45;&gt;documentregistry -->
<g id="edge4" class="edge">
<title>knowledgelifecycle&#45;&gt;documentregistry</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1940.94,-1291.33C1872.53,-1203.53 1794.97,-1068.24 1864.89,-968.4 1971.37,-816.35 2083,-889.25 2257.37,-825.6 2272.31,-820.15 2287.77,-814.5 2303.31,-808.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2304.01,-811.35 2310.15,-806.31 2302.21,-806.42 2304.01,-811.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1864.89,-1047 1864.89,-1069.8 1988.37,-1069.8 1988.37,-1047 1864.89,-1047"/>
<text xml:space="preserve" text-anchor="start" x="1867.89" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">promotes or retires</text>
</g>
<!-- ragflowlifecycleprobe&#45;&gt;ragflow -->
<g id="edge11" class="edge">
<title>ragflowlifecycleprobe&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1881.24,-645.67C1818.31,-602.99 1742.88,-551.82 1678.89,-508.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1680.53,-506.37 1672.85,-504.33 1677.58,-510.71 1680.53,-506.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1790.05,-562.8 1790.05,-585.6 1904.23,-585.6 1904.23,-562.8 1790.05,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1793.05" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">inspects datasets</text>
</g>
<!-- materialroutes&#45;&gt;materialservice -->
<g id="edge5" class="edge">
<title>materialroutes&#45;&gt;materialservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2493.87,-1291.27C2495.02,-1250.07 2496.4,-1200.96 2497.59,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2500.21,-1158.83 2497.79,-1151.26 2494.96,-1158.68 2500.21,-1158.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2496.14,-1208.4 2496.14,-1231.2 2604.07,-1231.2 2604.07,-1208.4 2496.14,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="2499.14" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">accepts material</text>
</g>
<!-- materialservice&#45;&gt;documentregistry -->
<g id="edge12" class="edge">
<title>materialservice&#45;&gt;documentregistry</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2500.37,-968.47C2500.37,-927.27 2500.37,-878.16 2500.37,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2503,-835.96 2500.37,-828.46 2497.75,-835.96 2503,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2500.37,-885.6 2500.37,-908.4 2625.43,-908.4 2625.43,-885.6 2500.37,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2503.37" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">registers document</text>
</g>
<!-- materialbatch&#45;&gt;materialservice -->
<g id="edge6" class="edge">
<title>materialbatch&#45;&gt;materialservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2811.89,-1291.27C2754.66,-1248.67 2686.09,-1197.63 2627.86,-1154.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2629.73,-1152.41 2622.14,-1150.04 2626.59,-1156.62 2629.73,-1152.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2728.79,-1208.4 2728.79,-1231.2 2817.29,-1231.2 2817.29,-1208.4 2728.79,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="2731.79" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">batch ingests</text>
</g>
<!-- knowledgealert&#45;&gt;store -->
<g id="edge7" class="edge">
<title>knowledgealert&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M168.37,-1291.35C168.37,-1226.95 168.37,-1137.79 168.37,-1059.4 168.37,-1059.4 168.37,-1059.4 168.37,-411.8 168.37,-335.92 190.87,-253.2 212.72,-190.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="215.16,-191.73 215.2,-183.78 210.21,-189.97 215.16,-191.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="168.37,-724.2 168.37,-747 282.53,-747 282.53,-724.2 168.37,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="171.37" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">reports freshness</text>
</g>
<!-- governance&#45;&gt;evaluationgate -->
<g id="edge13" class="edge">
<title>governance&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M567.63,-645.67C559.39,-604.38 549.57,-555.15 541.1,-512.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="543.73,-512.44 539.69,-505.6 538.58,-513.47 543.73,-512.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="555.29,-562.8 555.29,-585.6 660.91,-585.6 660.91,-562.8 555.29,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="558.29" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">applies decision</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge14" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1197.5,-645.67C1260.43,-602.99 1335.87,-551.82 1399.85,-508.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1401.16,-510.71 1405.89,-504.33 1398.21,-506.37 1401.16,-510.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1317.05,-562.8 1317.05,-585.6 1425.78,-585.6 1425.78,-562.8 1317.05,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1320.05" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries datasets</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge15" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M447.07,-322.87C412.29,-281.23 370.77,-231.52 335.1,-188.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="337.28,-187.34 330.45,-183.27 333.25,-190.71 337.28,-187.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="395.41,-240 395.41,-262.8 568.74,-262.8 568.74,-240 395.41,-240"/>
<text xml:space="preserve" text-anchor="start" x="398.41" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads feedback candidates</text>
</g>
</g>
</svg>
`;case`operatorSurface`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1852pt" height="913pt"
 viewBox="0.00 0.00 1852.00 913.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 897.85)">
<g id="clust1" class="cluster">
<title>cluster_beauty</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 1814,-612 1814,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BEAUTY CUSTOMER SERVICE</text>
</g>
<!-- operatorui -->
<g id="node1" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="843.02,-550.8 522.98,-550.8 522.98,-370.8 843.02,-370.8 843.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="604.07" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator Console</text>
<text xml:space="preserve" text-anchor="start" x="568.35" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single&#45;page console for operators;</text>
<text xml:space="preserve" text-anchor="start" x="618.81" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html</text>
</g>
<!-- handoffroutes -->
<g id="node2" class="node">
<title>handoffroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.02,-228 47.98,-228 47.98,-48 378.02,-48 378.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="143.51" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">Handoff Routes</text>
<text xml:space="preserve" text-anchor="start" x="105.43" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">Human handoff ticket endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="122.12" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/handoff&#45;routes.js</text>
</g>
<!-- knowledgeroutes -->
<g id="node3" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="877.68,-228 488.32,-228 488.32,-48 877.68,-48 877.68,-228"/>
<text xml:space="preserve" text-anchor="start" x="599.05" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Routes</text>
<text xml:space="preserve" text-anchor="start" x="528.32" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="581.29" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js</text>
</g>
<!-- integrationroutes -->
<g id="node4" class="node">
<title>integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1334.41,-228 987.59,-228 987.59,-48 1334.41,-48 1334.41,-228"/>
<text xml:space="preserve" text-anchor="start" x="1079.28" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">Integration Routes</text>
<text xml:space="preserve" text-anchor="start" x="1027.59" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">Feature overview and integration status;</text>
<text xml:space="preserve" text-anchor="start" x="1060.12" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js</text>
</g>
<!-- handoffservice -->
<g id="node5" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1774.49,-550.8 1413.51,-550.8 1413.51,-370.8 1774.49,-370.8 1774.49,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1522.85" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Handoff Service</text>
<text xml:space="preserve" text-anchor="start" x="1453.51" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Creates and tracks human handoff tickets;</text>
<text xml:space="preserve" text-anchor="start" x="1493.55" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js</text>
</g>
<!-- materialroutes -->
<g id="node6" class="node">
<title>materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1774.02,-228 1443.98,-228 1443.98,-48 1774.02,-48 1774.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1538.97" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">Material Routes</text>
<text xml:space="preserve" text-anchor="start" x="1488.09" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">Beauty material ingestion endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="1516.47" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/material&#45;routes.js</text>
</g>
<!-- operator -->
<g id="node7" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="845.22,-882.8 520.78,-882.8 520.78,-702.8 845.22,-702.8 845.22,-882.8"/>
<text xml:space="preserve" text-anchor="start" x="643.54" y="-795.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="540.83" y="-772.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Human operator handling escalated tickets</text>
</g>
<!-- operatorui&#45;&gt;handoffroutes -->
<g id="edge2" class="edge">
<title>operatorui&#45;&gt;handoffroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M552.7,-370.87C490.17,-328.19 415.21,-277.02 351.64,-233.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="353.32,-231.6 345.64,-229.54 350.36,-235.93 353.32,-231.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="462.09,-288 462.09,-310.8 569.25,-310.8 569.25,-288 462.09,-288"/>
<text xml:space="preserve" text-anchor="start" x="465.09" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">manages tickets</text>
</g>
<!-- operatorui&#45;&gt;knowledgeroutes -->
<g id="edge3" class="edge">
<title>operatorui&#45;&gt;knowledgeroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M683,-370.87C683,-329.67 683,-280.56 683,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="685.63,-238.36 683,-230.86 680.38,-238.36 685.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="683,-288 683,-310.8 814.31,-310.8 814.31,-288 683,-288"/>
<text xml:space="preserve" text-anchor="start" x="686" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">operates knowledge</text>
</g>
<!-- operatorui&#45;&gt;integrationroutes -->
<g id="edge4" class="edge">
<title>operatorui&#45;&gt;integrationroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M815.51,-370.87C879.11,-328.19 955.34,-277.02 1020,-233.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1021.36,-235.88 1026.13,-229.52 1018.44,-231.52 1021.36,-235.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="936.33,-288 936.33,-310.8 1027.15,-310.8 1027.15,-288 936.33,-288"/>
<text xml:space="preserve" text-anchor="start" x="939.33" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks status</text>
</g>
<!-- handoffservice&#45;&gt;materialroutes -->
<!-- operator&#45;&gt;operatorui -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M683,-702.93C683,-659.1 683,-606.08 683,-560.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="685.63,-561.07 683,-553.57 680.38,-561.07 685.63,-561.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="683,-620 683,-642.8 718.57,-642.8 718.57,-620 683,-620"/>
<text xml:space="preserve" text-anchor="start" x="686" y="-625.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">uses</text>
</g>
</g>
</svg>
`;case`chatToAnswer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3499pt" height="845pt"
 viewBox="0.00 0.00 3499.00 845.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 830.05)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-490 0,-490 0,-310 320.04,-310 320.04,-490"/>
<text xml:space="preserve" text-anchor="start" x="116.68" y="-412" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="25.37" y="-389" font-family="Arial" font-size="15.00" fill="#bfdbfe">End user chatting through WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="103.34" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">customer service</text>
</g>
<!-- fakewechat -->
<g id="node2" class="node">
<title>fakewechat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="988.22,-490 622.25,-490 622.25,-310 988.22,-310 988.22,-490"/>
<text xml:space="preserve" text-anchor="start" x="744.1" y="-412" font-family="Arial" font-size="20.00" fill="#eff6ff">Fake WeChat</text>
<text xml:space="preserve" text-anchor="start" x="662.25" y="-389" font-family="Arial" font-size="15.00" fill="#bfdbfe">Local message ingress kept for regression;</text>
<text xml:space="preserve" text-anchor="start" x="686.04" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/fake&#45;wechat&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node3" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1591.65,-490 1261.6,-490 1261.6,-310 1591.65,-310 1591.65,-490"/>
<text xml:space="preserve" text-anchor="start" x="1334.93" y="-412" font-family="Arial" font-size="20.00" fill="#eff6ff">Answer Orchestrator</text>
<text xml:space="preserve" text-anchor="start" x="1325.32" y="-389" font-family="Arial" font-size="15.00" fill="#bfdbfe">Decides auto&#45;reply vs handoff;</text>
<text xml:space="preserve" text-anchor="start" x="1310.76" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js</text>
</g>
<!-- answerloop -->
<g id="node4" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2242.64,-729 1853.36,-729 1853.36,-549 2242.64,-549 2242.64,-729"/>
<text xml:space="preserve" text-anchor="start" x="1937.37" y="-651" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Answer Loop</text>
<text xml:space="preserve" text-anchor="start" x="1933.77" y="-628" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieval&#45;augmented answer loop;</text>
<text xml:space="preserve" text-anchor="start" x="1893.36" y="-610" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node5" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2882.84,-815 2526.93,-815 2526.93,-635 2882.84,-635 2882.84,-815"/>
<text xml:space="preserve" text-anchor="start" x="2609.84" y="-737" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Knowledge</text>
<text xml:space="preserve" text-anchor="start" x="2575.25" y="-714" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow retrieval and dataset access;</text>
<text xml:space="preserve" text-anchor="start" x="2566.93" y="-696" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- ragflow -->
<g id="node6" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3469.28,-815 3149.24,-815 3149.24,-635 3469.28,-635 3469.28,-815"/>
<text xml:space="preserve" text-anchor="start" x="3266.47" y="-728" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="3196.28" y="-705" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- replypolicy -->
<g id="node7" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2869.91,-508 2539.86,-508 2539.86,-328 2869.91,-328 2869.91,-508"/>
<text xml:space="preserve" text-anchor="start" x="2649.86" y="-439" font-family="Arial" font-size="20.00" fill="#eff6ff">Reply Policy</text>
<text xml:space="preserve" text-anchor="start" x="2591.07" y="-416" font-family="Arial" font-size="15.00" fill="#bfdbfe">Confidence and risk thresholds for</text>
<text xml:space="preserve" text-anchor="start" x="2669.45" y="-398" font-family="Arial" font-size="15.00" fill="#bfdbfe">auto&#45;reply;</text>
<text xml:space="preserve" text-anchor="start" x="2591.53" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- wechatplatform -->
<g id="node8" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2218.47,-180 1877.53,-180 1877.53,0 2218.47,0 2218.47,-180"/>
<text xml:space="preserve" text-anchor="start" x="1956.31" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Platform</text>
<text xml:space="preserve" text-anchor="start" x="1917.53" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat Work conversation operations;</text>
<text xml:space="preserve" text-anchor="start" x="1937.14" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- wechatwork -->
<g id="node9" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2864.9,-180 2544.86,-180 2544.86,0 2864.9,0 2864.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="2642.65" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="2570.27" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">WeChat Work customer service platform</text>
</g>
<!-- customer&#45;&gt;fakewechat -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;fakewechat</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M320.02,-400C408.32,-400 518.81,-400 611.94,-400"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="611.81,-402.63 619.31,-400 611.81,-397.38 611.81,-402.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-403 383.04,-435.8 407.04,-435.8 407.04,-403 383.04,-403"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-416.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-403 410.04,-435.8 559.25,-435.8 559.25,-403 410.04,-403"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-413.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks a beauty question</text>
</g>
<!-- fakewechat&#45;&gt;answerorchestrator -->
<g id="edge2" class="edge">
<title>fakewechat&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M987.89,-400C1070.98,-400 1169.01,-400 1251.21,-400"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1251.14,-402.63 1258.64,-400 1251.14,-397.38 1251.14,-402.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1051.22,-403 1051.22,-435.8 1075.22,-435.8 1075.22,-403 1051.22,-403"/>
<text xml:space="preserve" text-anchor="start" x="1059.33" y="-416.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1078.22,-403 1078.22,-435.8 1198.6,-435.8 1198.6,-403 1078.22,-403"/>
<text xml:space="preserve" text-anchor="start" x="1081.22" y="-413.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards message</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge3" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1591.57,-463.26C1669.05,-493.16 1762.28,-529.14 1844.16,-560.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1842.81,-563.02 1850.75,-563.27 1844.7,-558.13 1842.81,-563.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1654.65,-543.91 1654.65,-576.71 1678.65,-576.71 1678.65,-543.91 1654.65,-543.91"/>
<text xml:space="preserve" text-anchor="start" x="1662.75" y="-557.11" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1681.65,-543.91 1681.65,-576.71 1790.36,-576.71 1790.36,-543.91 1681.65,-543.91"/>
<text xml:space="preserve" text-anchor="start" x="1684.65" y="-554.71" font-family="Arial" font-size="14.00" fill="#c9c9c9">requests answer</text>
</g>
<!-- answerorchestrator&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerorchestrator&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1601.7,-402.46C1848.9,-405.94 2298.39,-412.28 2539.93,-415.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1602.1,-399.84 1594.56,-402.35 1602.02,-405.09 1602.1,-399.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1974.69,-414.37 1974.69,-447.17 1998.69,-447.17 1998.69,-414.37 1974.69,-414.37"/>
<text xml:space="preserve" text-anchor="start" x="1982.8" y="-427.57" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2001.69,-414.37 2001.69,-447.17 2121.31,-447.17 2121.31,-414.37 2001.69,-414.37"/>
<text xml:space="preserve" text-anchor="start" x="2004.69" y="-425.17" font-family="Arial" font-size="14.00" fill="#c9c9c9">auto&#45;reply allowed</text>
</g>
<!-- answerorchestrator&#45;&gt;wechatplatform -->
<g id="edge9" class="edge">
<title>answerorchestrator&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1590.73,-310C1611.15,-299.12 1631.83,-288.3 1651.65,-278.2 1721.98,-242.37 1800.3,-204.64 1868.56,-172.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1869.29,-175.01 1874.96,-169.44 1867.05,-170.26 1869.29,-175.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1670.21,-281.2 1670.21,-314 1694.21,-314 1694.21,-281.2 1670.21,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1678.32" y="-294.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1697.21,-281.2 1697.21,-314 1774.8,-314 1774.8,-281.2 1697.21,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1700.21" y="-292" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends reply</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge4" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2242.39,-664.4C2329.02,-675.77 2430.79,-689.14 2516.69,-700.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2516.3,-703.01 2524.08,-701.39 2516.99,-697.81 2516.3,-703.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2305.64,-695.23 2305.64,-728.03 2329.64,-728.03 2329.64,-695.23 2305.64,-695.23"/>
<text xml:space="preserve" text-anchor="start" x="2313.74" y="-708.43" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2332.64,-695.23 2332.64,-728.03 2463.93,-728.03 2463.93,-695.23 2332.64,-695.23"/>
<text xml:space="preserve" text-anchor="start" x="2335.64" y="-706.03" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieves candidates</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge7" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2242.39,-573.74C2333.56,-542.97 2441.49,-506.55 2530.05,-476.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2530.79,-479.19 2537.05,-474.3 2529.11,-474.21 2530.79,-479.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2310.69,-551.29 2310.69,-584.09 2334.69,-584.09 2334.69,-551.29 2310.69,-551.29"/>
<text xml:space="preserve" text-anchor="start" x="2318.8" y="-564.49" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2337.69,-551.29 2337.69,-584.09 2458.87,-584.09 2458.87,-551.29 2337.69,-551.29"/>
<text xml:space="preserve" text-anchor="start" x="2340.69" y="-562.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks confidence</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge5" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2882.55,-725C2963.53,-725 3059.09,-725 3139.13,-725"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3138.78,-727.63 3146.28,-725 3138.78,-722.38 3138.78,-727.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2951.67,-728 2951.67,-760.8 2975.67,-760.8 2975.67,-728 2951.67,-728"/>
<text xml:space="preserve" text-anchor="start" x="2959.78" y="-741.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2978.67,-728 2978.67,-760.8 3080.4,-760.8 3080.4,-728 2978.67,-728"/>
<text xml:space="preserve" text-anchor="start" x="2981.67" y="-738.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries dataset</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge6" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2892.62,-668.13C2909.49,-664.52 2926.4,-661.44 2942.84,-659.2 3007.31,-650.42 3024.86,-649.74 3089.24,-659.2 3108.97,-662.1 3129.4,-666.4 3149.49,-671.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2892.42,-665.48 2885.66,-669.66 2893.55,-670.61 2892.42,-665.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2945.84,-662.2 2945.84,-695 2969.84,-695 2969.84,-662.2 2945.84,-662.2"/>
<text xml:space="preserve" text-anchor="start" x="2953.95" y="-675.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2972.84,-662.2 2972.84,-695 3086.24,-695 3086.24,-662.2 2972.84,-662.2"/>
<text xml:space="preserve" text-anchor="start" x="2975.84" y="-673" font-family="Arial" font-size="14.00" fill="#c9c9c9">returns passages</text>
</g>
<!-- wechatplatform&#45;&gt;wechatwork -->
<g id="edge10" class="edge">
<title>wechatplatform&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2218.07,-90C2315.44,-90 2437.41,-90 2534.78,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2534.49,-92.63 2541.99,-90 2534.49,-87.38 2534.49,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2317.42,-93 2317.42,-125.8 2348.99,-125.8 2348.99,-93 2317.42,-93"/>
<text xml:space="preserve" text-anchor="start" x="2325.42" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2351.99,-93 2351.99,-125.8 2452.15,-125.8 2452.15,-93 2351.99,-93"/>
<text xml:space="preserve" text-anchor="start" x="2354.99" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">posts message</text>
</g>
</g>
</svg>
`;case`retrievalSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3897pt" height="526pt"
 viewBox="0.00 0.00 3897.00 526.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 511.05)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="116.68" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer</text>
<text xml:space="preserve" text-anchor="start" x="25.37" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">End user chatting through WeChat Work</text>
<text xml:space="preserve" text-anchor="start" x="103.34" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">customer service</text>
</g>
<!-- wechatcallback -->
<g id="node2" class="node">
<title>wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="952.49,-180 573.22,-180 573.22,0 952.49,0 952.49,-180"/>
<text xml:space="preserve" text-anchor="start" x="670.05" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Callback</text>
<text xml:space="preserve" text-anchor="start" x="613.22" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Receives encrypted WeChat Work callbacks;</text>
<text xml:space="preserve" text-anchor="start" x="664.91" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js</text>
</g>
<!-- wechatplatform -->
<g id="node3" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1505.35,-180 1164.4,-180 1164.4,0 1505.35,0 1505.35,-180"/>
<text xml:space="preserve" text-anchor="start" x="1243.19" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Platform</text>
<text xml:space="preserve" text-anchor="start" x="1204.4" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat Work conversation operations;</text>
<text xml:space="preserve" text-anchor="start" x="1224.02" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node4" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2123.57,-180 1793.52,-180 1793.52,0 2123.57,0 2123.57,-180"/>
<text xml:space="preserve" text-anchor="start" x="1866.85" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Answer Orchestrator</text>
<text xml:space="preserve" text-anchor="start" x="1857.24" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Decides auto&#45;reply vs handoff;</text>
<text xml:space="preserve" text-anchor="start" x="1842.69" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js</text>
</g>
<!-- answerloop -->
<g id="node5" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2769.88,-377 2380.61,-377 2380.61,-197 2769.88,-197 2769.88,-377"/>
<text xml:space="preserve" text-anchor="start" x="2464.61" y="-299" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Answer Loop</text>
<text xml:space="preserve" text-anchor="start" x="2461.01" y="-276" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieval&#45;augmented answer loop;</text>
<text xml:space="preserve" text-anchor="start" x="2420.61" y="-258" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node6" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3352.51,-496 2996.59,-496 2996.59,-316 3352.51,-316 3352.51,-496"/>
<text xml:space="preserve" text-anchor="start" x="3079.51" y="-418" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Knowledge</text>
<text xml:space="preserve" text-anchor="start" x="3044.91" y="-395" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow retrieval and dataset access;</text>
<text xml:space="preserve" text-anchor="start" x="3036.59" y="-377" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- ragflow -->
<g id="node7" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3866.57,-496 3546.53,-496 3546.53,-316 3866.57,-316 3866.57,-496"/>
<text xml:space="preserve" text-anchor="start" x="3663.77" y="-409" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="3593.57" y="-386" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG and knowledge base service</text>
</g>
<!-- replypolicy -->
<g id="node8" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3339.58,-189 3009.53,-189 3009.53,-9 3339.58,-9 3339.58,-189"/>
<text xml:space="preserve" text-anchor="start" x="3119.53" y="-120" font-family="Arial" font-size="20.00" fill="#eff6ff">Reply Policy</text>
<text xml:space="preserve" text-anchor="start" x="3060.74" y="-97" font-family="Arial" font-size="15.00" fill="#bfdbfe">Confidence and risk thresholds for</text>
<text xml:space="preserve" text-anchor="start" x="3139.12" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">auto&#45;reply;</text>
<text xml:space="preserve" text-anchor="start" x="3061.2" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- customer&#45;&gt;wechatcallback -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;wechatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.67,-90C394.35,-90 484.21,-90 563.35,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="562.92,-92.63 570.42,-90 562.92,-87.38 562.92,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 510.22,-125.8 510.22,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends question</text>
</g>
<!-- wechatcallback&#45;&gt;wechatplatform -->
<g id="edge2" class="edge">
<title>wechatcallback&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M952.48,-90C1017.56,-90 1090.24,-90 1154.56,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1154.28,-92.63 1161.78,-90 1154.28,-87.38 1154.28,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1015.49,-93 1015.49,-125.8 1039.49,-125.8 1039.49,-93 1015.49,-93"/>
<text xml:space="preserve" text-anchor="start" x="1023.6" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1042.49,-93 1042.49,-125.8 1101.4,-125.8 1101.4,-93 1042.49,-93"/>
<text xml:space="preserve" text-anchor="start" x="1045.49" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">decrypts</text>
</g>
<!-- wechatplatform&#45;&gt;answerorchestrator -->
<g id="edge3" class="edge">
<title>wechatplatform&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1505.34,-90C1591.54,-90 1696.17,-90 1783.06,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1783.04,-92.63 1790.54,-90 1783.04,-87.38 1783.04,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1568.35,-93 1568.35,-125.8 1592.35,-125.8 1592.35,-93 1568.35,-93"/>
<text xml:space="preserve" text-anchor="start" x="1576.46" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1595.35,-93 1595.35,-125.8 1730.52,-125.8 1730.52,-93 1595.35,-93"/>
<text xml:space="preserve" text-anchor="start" x="1598.35" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">normalized message</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge4" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2123.47,-142.53C2199.51,-166.9 2290.65,-196.11 2371.02,-221.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2369.94,-224.28 2377.88,-224.07 2371.54,-219.28 2369.94,-224.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2186.57,-203.29 2186.57,-236.09 2210.57,-236.09 2210.57,-203.29 2186.57,-203.29"/>
<text xml:space="preserve" text-anchor="start" x="2194.68" y="-216.49" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2213.57,-203.29 2213.57,-236.09 2317.61,-236.09 2317.61,-203.29 2213.57,-203.29"/>
<text xml:space="preserve" text-anchor="start" x="2216.57" y="-214.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks for answer</text>
</g>
<!-- answerorchestrator&#45;&gt;replypolicy -->
<g id="edge9" class="edge">
<title>answerorchestrator&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2133.6,-91.29C2367.8,-93.03 2781.31,-96.09 3010,-97.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2133.82,-88.67 2126.3,-91.24 2133.78,-93.92 2133.82,-88.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2533.06,-98.98 2533.06,-131.78 2557.06,-131.78 2557.06,-98.98 2533.06,-98.98"/>
<text xml:space="preserve" text-anchor="start" x="2541.17" y="-112.18" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2560.06,-98.98 2560.06,-131.78 2617.42,-131.78 2617.42,-98.98 2560.06,-98.98"/>
<text xml:space="preserve" text-anchor="start" x="2563.06" y="-109.78" font-family="Arial" font-size="14.00" fill="#c9c9c9">decision</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge5" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2769.65,-354.93C2789.83,-360.62 2810.17,-365.79 2829.88,-370 2880.21,-380.74 2935.39,-388.33 2986.53,-393.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2985.97,-396.25 2993.69,-394.4 2986.5,-391.02 2985.97,-396.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2843.39,-390.34 2843.39,-423.14 2867.39,-423.14 2867.39,-390.34 2843.39,-390.34"/>
<text xml:space="preserve" text-anchor="start" x="2851.5" y="-403.54" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2870.39,-390.34 2870.39,-423.14 2923.08,-423.14 2923.08,-390.34 2870.39,-390.34"/>
<text xml:space="preserve" text-anchor="start" x="2873.39" y="-401.14" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieve</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge7" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2779.95,-284.03C2831.55,-286.74 2886.53,-292.65 2936.59,-304.2 2956.45,-308.78 2976.73,-314.95 2996.65,-321.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2780.31,-281.42 2772.7,-283.68 2780.06,-286.67 2780.31,-281.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2836.77,-307.2 2836.77,-340 2860.77,-340 2860.77,-307.2 2836.77,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="2844.88" y="-320.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2863.77,-307.2 2863.77,-340 2929.7,-340 2929.7,-307.2 2863.77,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="2866.77" y="-318" font-family="Arial" font-size="14.00" fill="#c9c9c9">passages</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2769.76,-226.09C2843.95,-202.74 2928.06,-176.27 3000.24,-153.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3000.63,-156.18 3007,-151.42 2999.06,-151.17 3000.63,-156.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2832.88,-207.26 2832.88,-240.06 2856.88,-240.06 2856.88,-207.26 2832.88,-207.26"/>
<text xml:space="preserve" text-anchor="start" x="2840.98" y="-220.46" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2859.88,-207.26 2859.88,-240.06 2933.59,-240.06 2933.59,-207.26 2859.88,-207.26"/>
<text xml:space="preserve" text-anchor="start" x="2862.88" y="-218.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">confidence</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge6" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3352.4,-406C3411.61,-406 3477.45,-406 3536.08,-406"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3536.03,-408.63 3543.53,-406 3536.03,-403.38 3536.03,-408.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3415.51,-409 3415.51,-441.8 3439.51,-441.8 3439.51,-409 3415.51,-409"/>
<text xml:space="preserve" text-anchor="start" x="3423.62" y="-422.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3442.51,-409 3442.51,-441.8 3483.53,-441.8 3483.53,-409 3442.51,-409"/>
<text xml:space="preserve" text-anchor="start" x="3445.51" y="-419.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">query</text>
</g>
</g>
</svg>
`;case`evaluationSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1508pt" height="509pt"
 viewBox="0.00 0.00 1508.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 494.05)">
<!-- answerorchestrator -->
<g id="node1" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-334 0,-334 0,-154 330.05,-154 330.05,-334"/>
<text xml:space="preserve" text-anchor="start" x="73.33" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Answer Orchestrator</text>
<text xml:space="preserve" text-anchor="start" x="63.72" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Decides auto&#45;reply vs handoff;</text>
<text xml:space="preserve" text-anchor="start" x="49.16" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js</text>
</g>
<!-- evaluationgate -->
<g id="node2" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="872.03,-334 541.98,-334 541.98,-154 872.03,-154 872.03,-334"/>
<text xml:space="preserve" text-anchor="start" x="635.85" y="-256" font-family="Arial" font-size="20.00" fill="#eff6ff">Evaluation Gate</text>
<text xml:space="preserve" text-anchor="start" x="611.11" y="-233" font-family="Arial" font-size="15.00" fill="#bfdbfe">Local publication policy gate;</text>
<text xml:space="preserve" text-anchor="start" x="606.54" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js</text>
</g>
<!-- store -->
<g id="node3" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1476.43,-462.64C1476.43,-471.67 1402.98,-479 1312.57,-479 1222.15,-479 1148.71,-471.67 1148.71,-462.64 1148.71,-462.64 1148.71,-315.36 1148.71,-315.36 1148.71,-306.33 1222.15,-299 1312.57,-299 1402.98,-299 1476.43,-306.33 1476.43,-315.36 1476.43,-315.36 1476.43,-462.64 1476.43,-462.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1476.43,-462.64C1476.43,-453.61 1402.98,-446.27 1312.57,-446.27 1222.15,-446.27 1148.71,-453.61 1148.71,-462.64"/>
<text xml:space="preserve" text-anchor="start" x="1261.98" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">Local Store</text>
<text xml:space="preserve" text-anchor="start" x="1168.76" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON&#45;file backed state; src/domain/store.js</text>
</g>
<!-- replypolicy -->
<g id="node4" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1477.59,-180 1147.54,-180 1147.54,0 1477.59,0 1477.59,-180"/>
<text xml:space="preserve" text-anchor="start" x="1257.55" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">Reply Policy</text>
<text xml:space="preserve" text-anchor="start" x="1198.76" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Confidence and risk thresholds for</text>
<text xml:space="preserve" text-anchor="start" x="1277.13" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">auto&#45;reply;</text>
<text xml:space="preserve" text-anchor="start" x="1199.21" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- answerorchestrator&#45;&gt;evaluationgate -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.87,-244C393.79,-244 467.16,-244 532.03,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="531.83,-246.63 539.33,-244 531.83,-241.38 531.83,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-247 393.05,-279.8 417.05,-279.8 417.05,-247 393.05,-247"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-247 420.05,-279.8 478.98,-279.8 478.98,-247 420.05,-247"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">evaluate</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge2" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M871.73,-283.33C954.09,-303.12 1053.93,-327.11 1137.66,-347.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1136.94,-349.75 1144.84,-348.95 1138.16,-344.64 1136.94,-349.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="943.47,-336.75 943.47,-369.55 967.47,-369.55 967.47,-336.75 943.47,-336.75"/>
<text xml:space="preserve" text-anchor="start" x="951.58" y="-349.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="970.47,-336.75 970.47,-369.55 1076.1,-369.55 1076.1,-336.75 970.47,-336.75"/>
<text xml:space="preserve" text-anchor="start" x="973.47" y="-347.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">read candidates</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge4" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M871.9,-216.14C940,-210.47 1018.98,-211.7 1087.54,-233.2 1128.14,-245.93 1167.82,-268.9 1202.23,-293.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1200.33,-295.23 1207.95,-297.49 1203.41,-290.97 1200.33,-295.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="936.58,-236.2 936.58,-269 972.04,-269 972.04,-236.2 936.58,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="944.58" y="-249.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3.2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="975.04,-236.2 975.04,-269 1082.99,-269 1082.99,-236.2 975.04,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="978.04" y="-247" font-family="Arial" font-size="14.00" fill="#c9c9c9">read policy state</text>
</g>
<!-- evaluationgate&#45;&gt;replypolicy -->
<g id="edge3" class="edge">
<title>evaluationgate&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M872.01,-167.45C891.96,-159.84 912.27,-152.85 932.03,-147.2 998.01,-128.32 1072.33,-115.37 1137.6,-106.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1137.9,-109.25 1144.99,-105.67 1137.21,-104.04 1137.9,-109.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="935.03,-150.2 935.03,-183 970.49,-183 970.49,-150.2 935.03,-150.2"/>
<text xml:space="preserve" text-anchor="start" x="943.03" y="-163.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3.1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="973.49,-150.2 973.49,-183 1084.54,-183 1084.54,-150.2 973.49,-150.2"/>
<text xml:space="preserve" text-anchor="start" x="976.49" y="-161" font-family="Arial" font-size="14.00" fill="#c9c9c9">check thresholds</text>
</g>
</g>
</svg>
`;case`handoffSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1550pt" height="790pt"
 viewBox="0.00 0.00 1550.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 775.05)">
<!-- answerorchestrator -->
<g id="node1" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-325 0,-325 0,-145 330.05,-145 330.05,-325"/>
<text xml:space="preserve" text-anchor="start" x="73.33" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">Answer Orchestrator</text>
<text xml:space="preserve" text-anchor="start" x="63.72" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">Decides auto&#45;reply vs handoff;</text>
<text xml:space="preserve" text-anchor="start" x="49.16" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js</text>
</g>
<!-- handoffservice -->
<g id="node2" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="925.5,-325 564.52,-325 564.52,-145 925.5,-145 925.5,-325"/>
<text xml:space="preserve" text-anchor="start" x="673.87" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">Handoff Service</text>
<text xml:space="preserve" text-anchor="start" x="604.52" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">Creates and tracks human handoff tickets;</text>
<text xml:space="preserve" text-anchor="start" x="644.57" y="-206" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js</text>
</g>
<!-- store -->
<g id="node3" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1513.76,-453.64C1513.76,-462.67 1440.32,-470 1349.9,-470 1259.48,-470 1186.04,-462.67 1186.04,-453.64 1186.04,-453.64 1186.04,-306.36 1186.04,-306.36 1186.04,-297.33 1259.48,-290 1349.9,-290 1440.32,-290 1513.76,-297.33 1513.76,-306.36 1513.76,-306.36 1513.76,-453.64 1513.76,-453.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1513.76,-453.64C1513.76,-444.61 1440.32,-437.27 1349.9,-437.27 1259.48,-437.27 1186.04,-444.61 1186.04,-453.64"/>
<text xml:space="preserve" text-anchor="start" x="1299.31" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">Local Store</text>
<text xml:space="preserve" text-anchor="start" x="1206.1" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">JSON&#45;file backed state; src/domain/store.js</text>
</g>
<!-- wechatplatform -->
<g id="node4" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1520.37,-180 1179.43,-180 1179.43,0 1520.37,0 1520.37,-180"/>
<text xml:space="preserve" text-anchor="start" x="1258.21" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">WeChat KF Platform</text>
<text xml:space="preserve" text-anchor="start" x="1219.43" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">WeChat Work conversation operations;</text>
<text xml:space="preserve" text-anchor="start" x="1239.04" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- operator -->
<g id="node5" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="327.25,-760 2.8,-760 2.8,-580 327.25,-580 327.25,-760"/>
<text xml:space="preserve" text-anchor="start" x="125.56" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="22.86" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">Human operator handling escalated tickets</text>
</g>
<!-- operatorui -->
<g id="node6" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="905.03,-760 584.99,-760 584.99,-580 905.03,-580 905.03,-760"/>
<text xml:space="preserve" text-anchor="start" x="666.08" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator Console</text>
<text xml:space="preserve" text-anchor="start" x="630.36" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single&#45;page console for operators;</text>
<text xml:space="preserve" text-anchor="start" x="680.82" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html</text>
</g>
<!-- handoffroutes -->
<g id="node7" class="node">
<title>handoffroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1514.92,-760 1184.88,-760 1184.88,-580 1514.92,-580 1514.92,-760"/>
<text xml:space="preserve" text-anchor="start" x="1280.41" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Handoff Routes</text>
<text xml:space="preserve" text-anchor="start" x="1242.33" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">Human handoff ticket endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="1259.02" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/handoff&#45;routes.js</text>
</g>
<!-- answerorchestrator&#45;&gt;handoffservice -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;handoffservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.72,-235C399.7,-235 481.82,-235 554.42,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="554.07,-237.63 561.57,-235 554.07,-232.38 554.07,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-238 393.05,-270.8 417.05,-270.8 417.05,-238 393.05,-238"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-238 420.05,-270.8 501.52,-270.8 501.52,-238 420.05,-238"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">create ticket</text>
</g>
<!-- handoffservice&#45;&gt;store -->
<g id="edge2" class="edge">
<title>handoffservice&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M925.27,-278.11C1004.32,-297.13 1096.87,-319.39 1175.27,-338.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1174.4,-340.73 1182.31,-339.93 1175.63,-335.63 1174.4,-340.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="997.06,-327.75 997.06,-360.55 1021.06,-360.55 1021.06,-327.75 997.06,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="1005.17" y="-340.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1024.06,-327.75 1024.06,-360.55 1107.86,-360.55 1107.86,-327.75 1024.06,-327.75"/>
<text xml:space="preserve" text-anchor="start" x="1027.06" y="-338.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">persist ticket</text>
</g>
<!-- handoffservice&#45;&gt;wechatplatform -->
<g id="edge3" class="edge">
<title>handoffservice&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M925.27,-191.89C1002.49,-173.31 1092.59,-151.64 1169.8,-133.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1170.01,-135.72 1176.69,-131.42 1168.79,-130.62 1170.01,-135.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="988.5,-178.49 988.5,-211.29 1012.5,-211.29 1012.5,-178.49 988.5,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="996.61" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1015.5,-178.49 1015.5,-211.29 1116.43,-211.29 1116.43,-178.49 1015.5,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="1018.5" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">notify customer</text>
</g>
<!-- operator&#45;&gt;operatorui -->
<g id="edge4" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M327.03,-670C404.23,-670 496.7,-670 574.93,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="574.85,-672.63 582.35,-670 574.85,-667.38 574.85,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.43,-673 393.43,-705.8 417.43,-705.8 417.43,-673 393.43,-673"/>
<text xml:space="preserve" text-anchor="start" x="401.54" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.43,-673 420.43,-705.8 501.14,-705.8 501.14,-673 420.43,-673"/>
<text xml:space="preserve" text-anchor="start" x="423.43" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">opens ticket</text>
</g>
<!-- operatorui&#45;&gt;handoffroutes -->
<g id="edge5" class="edge">
<title>operatorui&#45;&gt;handoffroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M904.81,-670C987.78,-670 1089.49,-670 1174.63,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1174.4,-672.63 1181.9,-670 1174.4,-667.38 1174.4,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1001.35,-673 1001.35,-705.8 1025.35,-705.8 1025.35,-673 1001.35,-673"/>
<text xml:space="preserve" text-anchor="start" x="1009.45" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1028.35,-673 1028.35,-705.8 1103.58,-705.8 1103.58,-673 1028.35,-673"/>
<text xml:space="preserve" text-anchor="start" x="1031.35" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">claim ticket</text>
</g>
</g>
</svg>
`;case`knowledgeSyncSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3448pt" height="790pt"
 viewBox="0.00 0.00 3448.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 775.05)">
<!-- operator -->
<g id="node1" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="324.45,-615 0,-615 0,-435 324.45,-435 324.45,-615"/>
<text xml:space="preserve" text-anchor="start" x="122.76" y="-528" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">Human operator handling escalated tickets</text>
</g>
<!-- operatorui -->
<g id="node2" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="882.84,-615 562.8,-615 562.8,-435 882.84,-435 882.84,-615"/>
<text xml:space="preserve" text-anchor="start" x="643.89" y="-537" font-family="Arial" font-size="20.00" fill="#eff6ff">Operator Console</text>
<text xml:space="preserve" text-anchor="start" x="608.17" y="-514" font-family="Arial" font-size="15.00" fill="#bfdbfe">Single&#45;page console for operators;</text>
<text xml:space="preserve" text-anchor="start" x="658.63" y="-496" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html</text>
</g>
<!-- knowledgeroutes -->
<g id="node3" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1510.57,-615 1121.22,-615 1121.22,-435 1510.57,-435 1510.57,-615"/>
<text xml:space="preserve" text-anchor="start" x="1231.95" y="-537" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Routes</text>
<text xml:space="preserve" text-anchor="start" x="1161.22" y="-514" font-family="Arial" font-size="15.00" fill="#bfdbfe">Knowledge scan, sync and lifecycle endpoints;</text>
<text xml:space="preserve" text-anchor="start" x="1214.18" y="-496" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/knowledge&#45;routes.js</text>
</g>
<!-- knowledgescan -->
<g id="node4" class="node">
<title>knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2121.28,-760 1782.03,-760 1782.03,-580 2121.28,-580 2121.28,-760"/>
<text xml:space="preserve" text-anchor="start" x="1876.6" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Scan</text>
<text xml:space="preserve" text-anchor="start" x="1844.1" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">Discovers candidate knowledge;</text>
<text xml:space="preserve" text-anchor="start" x="1822.03" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;scan&#45;service.js</text>
</g>
<!-- governance -->
<g id="node5" class="node">
<title>governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2797.37,-760 2411.42,-760 2411.42,-580 2797.37,-580 2797.37,-760"/>
<text xml:space="preserve" text-anchor="start" x="2497.66" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Governance</text>
<text xml:space="preserve" text-anchor="start" x="2476.39" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">Publication decisions and governance;</text>
<text xml:space="preserve" text-anchor="start" x="2451.42" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;governance&#45;service.js</text>
</g>
<!-- evaluationgate -->
<g id="node6" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3417.95,-760 3087.9,-760 3087.9,-580 3417.95,-580 3417.95,-760"/>
<text xml:space="preserve" text-anchor="start" x="3181.77" y="-682" font-family="Arial" font-size="20.00" fill="#eff6ff">Evaluation Gate</text>
<text xml:space="preserve" text-anchor="start" x="3157.03" y="-659" font-family="Arial" font-size="15.00" fill="#bfdbfe">Local publication policy gate;</text>
<text xml:space="preserve" text-anchor="start" x="3152.47" y="-641" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js</text>
</g>
<!-- knowledgesync -->
<g id="node7" class="node">
<title>knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2132.57,-470 1770.75,-470 1770.75,-290 2132.57,-290 2132.57,-470"/>
<text xml:space="preserve" text-anchor="start" x="1877.17" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">Knowledge Sync</text>
<text xml:space="preserve" text-anchor="start" x="1810.75" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pushes approved knowledge to RAGFlow;</text>
<text xml:space="preserve" text-anchor="start" x="1822.46" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;sync&#45;service.js</text>
</g>
<!-- llmwiki -->
<g id="node8" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2764.41,-470 2444.37,-470 2444.37,-290 2764.41,-290 2764.41,-470"/>
<text xml:space="preserve" text-anchor="start" x="2563.28" y="-383" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="2479.74" y="-360" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM&#45;generated wiki candidate source</text>
</g>
<!-- ragflowknowledge -->
<g id="node9" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2782.35,-180 2426.43,-180 2426.43,0 2782.35,0 2782.35,-180"/>
<text xml:space="preserve" text-anchor="start" x="2509.35" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Knowledge</text>
<text xml:space="preserve" text-anchor="start" x="2474.76" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow retrieval and dataset access;</text>
<text xml:space="preserve" text-anchor="start" x="2466.43" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- operator&#45;&gt;operatorui -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M324.42,-525C395.98,-525 480.22,-525 552.68,-525"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="552.3,-527.63 559.8,-525 552.3,-522.38 552.3,-527.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="387.45,-528 387.45,-560.8 411.45,-560.8 411.45,-528 387.45,-528"/>
<text xml:space="preserve" text-anchor="start" x="395.55" y="-541.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="414.45,-528 414.45,-560.8 499.8,-560.8 499.8,-528 414.45,-528"/>
<text xml:space="preserve" text-anchor="start" x="417.45" y="-538.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">triggers sync</text>
</g>
<!-- operatorui&#45;&gt;knowledgeroutes -->
<g id="edge2" class="edge">
<title>operatorui&#45;&gt;knowledgeroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M882.61,-525C952.82,-525 1036.25,-525 1111,-525"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1110.96,-527.63 1118.46,-525 1110.96,-522.38 1110.96,-527.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="945.84,-528 945.84,-560.8 969.84,-560.8 969.84,-528 945.84,-528"/>
<text xml:space="preserve" text-anchor="start" x="953.95" y="-541.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="972.84,-528 972.84,-560.8 1058.22,-560.8 1058.22,-528 972.84,-528"/>
<text xml:space="preserve" text-anchor="start" x="975.84" y="-538.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">request sync</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgescan -->
<g id="edge3" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgescan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1510.49,-569.29C1593.83,-588.36 1690.65,-610.51 1772.23,-629.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1771.25,-631.65 1779.15,-630.76 1772.42,-626.53 1771.25,-631.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1573.57,-617.75 1573.57,-650.55 1597.57,-650.55 1597.57,-617.75 1573.57,-617.75"/>
<text xml:space="preserve" text-anchor="start" x="1581.68" y="-630.95" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1600.57,-617.75 1600.57,-650.55 1707.75,-650.55 1707.75,-617.75 1600.57,-617.75"/>
<text xml:space="preserve" text-anchor="start" x="1603.57" y="-628.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">scan candidates</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgesync -->
<g id="edge6" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgesync</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1510.49,-480.71C1589.99,-462.52 1681.76,-441.52 1760.87,-423.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1761.27,-426.02 1768,-421.79 1760.1,-420.9 1761.27,-426.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1577.84,-468.49 1577.84,-501.29 1601.84,-501.29 1601.84,-468.49 1577.84,-468.49"/>
<text xml:space="preserve" text-anchor="start" x="1585.95" y="-481.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1604.84,-468.49 1604.84,-501.29 1703.47,-501.29 1703.47,-468.49 1604.84,-468.49"/>
<text xml:space="preserve" text-anchor="start" x="1607.84" y="-479.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">push approved</text>
</g>
<!-- knowledgescan&#45;&gt;governance -->
<g id="edge4" class="edge">
<title>knowledgescan&#45;&gt;governance</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2121.09,-670C2206.66,-670 2311.28,-670 2401.19,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2400.99,-672.63 2408.49,-670 2400.99,-667.38 2400.99,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2197.13,-673 2197.13,-705.8 2221.13,-705.8 2221.13,-673 2197.13,-673"/>
<text xml:space="preserve" text-anchor="start" x="2205.24" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2224.13,-673 2224.13,-705.8 2346.85,-705.8 2346.85,-673 2224.13,-673"/>
<text xml:space="preserve" text-anchor="start" x="2227.13" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">submit for decision</text>
</g>
<!-- governance&#45;&gt;evaluationgate -->
<g id="edge5" class="edge">
<title>governance&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2797.19,-670C2886.09,-670 2990.98,-670 3077.61,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3077.55,-672.63 3085.05,-670 3077.55,-667.38 3077.55,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2860.37,-673 2860.37,-705.8 2884.37,-705.8 2884.37,-673 2860.37,-673"/>
<text xml:space="preserve" text-anchor="start" x="2868.48" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2887.37,-673 2887.37,-705.8 3024.9,-705.8 3024.9,-673 2887.37,-673"/>
<text xml:space="preserve" text-anchor="start" x="2890.37" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">apply publication rule</text>
</g>
<!-- knowledgesync&#45;&gt;llmwiki -->
<g id="edge7" class="edge">
<title>knowledgesync&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2132.2,-380C2226.47,-380 2341.35,-380 2434.07,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2433.87,-382.63 2441.37,-380 2433.87,-377.38 2433.87,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2195.57,-383 2195.57,-415.8 2219.57,-415.8 2219.57,-383 2195.57,-383"/>
<text xml:space="preserve" text-anchor="start" x="2203.68" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2222.57,-383 2222.57,-415.8 2348.42,-415.8 2348.42,-383 2222.57,-383"/>
<text xml:space="preserve" text-anchor="start" x="2225.57" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">read candidate wiki</text>
</g>
<!-- knowledgesync&#45;&gt;ragflowknowledge -->
<g id="edge8" class="edge">
<title>knowledgesync&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2132.2,-299.99C2220.85,-260.48 2327.72,-212.85 2417.25,-172.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2418.15,-175.43 2423.93,-169.98 2416.01,-170.63 2418.15,-175.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2215.81,-272.5 2215.81,-305.3 2239.81,-305.3 2239.81,-272.5 2215.81,-272.5"/>
<text xml:space="preserve" text-anchor="start" x="2223.91" y="-285.7" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2242.81,-272.5 2242.81,-305.3 2328.18,-305.3 2328.18,-272.5 2242.81,-272.5"/>
<text xml:space="preserve" text-anchor="start" x="2245.81" y="-283.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">write dataset</text>
</g>
</g>
</svg>
`;case`configGatedFlow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="982pt" height="359pt"
 viewBox="0.00 0.00 982.00 359.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 343.85)">
<!-- answerorchestrator -->
<g id="node1" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="330.05,-180 0,-180 0,0 330.05,0 330.05,-180"/>
<text xml:space="preserve" text-anchor="start" x="73.33" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">Answer Orchestrator</text>
<text xml:space="preserve" text-anchor="start" x="63.72" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">Decides auto&#45;reply vs handoff;</text>
<text xml:space="preserve" text-anchor="start" x="49.16" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node2" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="952.34,-180 596.42,-180 596.42,0 952.34,0 952.34,-180"/>
<text xml:space="preserve" text-anchor="start" x="679.34" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow Knowledge</text>
<text xml:space="preserve" text-anchor="start" x="644.74" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow retrieval and dataset access;</text>
<text xml:space="preserve" text-anchor="start" x="636.42" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- answerorchestrator&#45;&gt;ragflowknowledge -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.98,-90C408.99,-90 504.13,-90 585.99,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="585.9,-92.63 593.4,-90 585.9,-87.38 585.9,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.05,-93 393.05,-125.8 417.05,-125.8 417.05,-93 393.05,-93"/>
<text xml:space="preserve" text-anchor="start" x="401.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.05,-93 420.05,-125.8 533.42,-125.8 533.42,-93 420.05,-93"/>
<text xml:space="preserve" text-anchor="start" x="423.05" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">attempts retrieval</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflowknowledge -->
<g id="edge2" class="edge">
<title>ragflowknowledge&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M720.28,-179.98C706.97,-236.28 725,-290 774.38,-290 820.77,-290 839.49,-242.58 830.55,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="833.15,-189.77 829.08,-182.95 828.01,-190.82 833.15,-189.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="699.9,-293 699.9,-325.8 723.9,-325.8 723.9,-293 699.9,-293"/>
<text xml:space="preserve" text-anchor="start" x="708.01" y="-306.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="726.9,-293 726.9,-325.8 848.86,-325.8 848.86,-293 726.9,-293"/>
<text xml:space="preserve" text-anchor="start" x="729.9" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks config gate</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
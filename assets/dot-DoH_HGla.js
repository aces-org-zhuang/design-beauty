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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Beauty Customer Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node.js &gt;=20</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">基于企业微信的美妆咨询与知识服务</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "store" [
    likec4_id = "local.dataTier.storeVm.store";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Local JSON Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">data/local-mvp-store.json</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "ragflow" [
    likec4_id = "local.dataTier.ragflowVm.ragflow";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">HTTP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">HTTP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM 生成的 wiki 候选来源</FONT></TD></TR></TABLE>>;
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">客户</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">通过企业微信咨询的终端用户</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">美妆客服服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">基于企业微信的美妆咨询与知识服务</FONT></TD></TR></TABLE>>,
        likec4_id=beauty,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发送消息（本地开发）</FONT></TD></TR></TABLE>>,
        likec4_id="1httk34",
        minlen=1,
        style=dashed];
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">处理升级工单的人工运营人员</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">使用</FONT></TD></TR></TABLE>>,
        likec4_id=r92fuc,
        minlen=1,
        style=dashed];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">企业微信</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">企业微信客服平台</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki 候选源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM 生成的 wiki 候选来源</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">回调加密报文</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">客户</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">通过企业微信咨询的终端用户</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    beauty [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">美妆客服服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">基于企业微信的美妆咨询与知识服务</FONT></TD></TR></TABLE>>,
        likec4_id=beauty,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发送消息（本地开发）</FONT></TD></TR></TABLE>>,
        likec4_id="1httk34",
        minlen=1,
        style=dashed];
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">处理升级工单的人工运营人员</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> beauty [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">使用</FONT></TD></TR></TABLE>>,
        likec4_id=r92fuc,
        minlen=1,
        style=dashed];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">企业微信</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">企业微信客服平台</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki 候选源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM 生成的 wiki 候选来源</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">回调加密报文</FONT></TD></TR></TABLE>>,
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
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>美妆客服服务</B></FONT>>,
            likec4_depth=1,
            likec4_id=beauty,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        fakewechat [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">模拟微信入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">保留用于回归验证的本地消息入口；src/services/fake-wechat-platform.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.fakeWechat",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        operatorui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员 Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.operatorUi",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        wechatcallback [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收加密的企业微信回调；src/routes/wechat-kf-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.wechatCallback",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        answerorchestrator [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动回复还是转人工；src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.answerOrchestrator",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        knowledgeroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.knowledgeRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        materialroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">美妆素材接入接口；src/routes/material-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.materialRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        integrationroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">功能概览与集成状态；src/routes/integration-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        answerloop [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索增强的应答循环；src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.answerLoop",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        handoffservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        ragflowknowledge [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow<BR/>检索与数据集访问；src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.ragflowKnowledge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        wechatplatform [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服平台适配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">企业微信会话操作；src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.wechatPlatform",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        store [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.store",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    fakewechat -> answerorchestrator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转发消息</FONT></TD></TR></TABLE>>,
        likec4_id="1c714pp",
        minlen=1,
        style=dashed];
    operatorui -> knowledgeroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营知识库</FONT></TD></TR></TABLE>>,
        likec4_id=w0v1ym,
        minlen=1,
        style=dashed];
    operatorui -> integrationroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查看状态</FONT></TD></TR></TABLE>>,
        likec4_id="59ixqa",
        minlen=1,
        style=dashed];
    wechatcallback -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">解密并分发</FONT></TD></TR></TABLE>>,
        likec4_id=zrxxrw,
        style=dashed,
        weight=2];
    answerorchestrator -> answerloop [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id=iygt08,
        style=dashed];
    answerorchestrator -> handoffservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">不确定时升级人工</FONT></TD></TR></TABLE>>,
        likec4_id="164k6uh",
        style=dashed];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki 候选源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM 生成的 wiki 候选来源</FONT></TD></TR></TABLE>>,
        likec4_id=llmWiki,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    materialroutes -> llmwiki [style=invis];
    answerloop -> ragflowknowledge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id="1k4739a",
        style=dashed,
        weight=2];
    handoffservice -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">通知客户</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">传递归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id="1fmgq4r",
        style=dashed,
        weight=2];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">企业微信</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">企业微信客服平台</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    wechatplatform -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls open API</FONT></TD></TR></TABLE>>,
        likec4_id=e2fuec,
        style=dashed];
    wechatwork -> wechatcallback [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">回调加密报文</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收加密的企业微信回调；src/routes/wechat-kf-routes.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.wechatCallback",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    wechatplatform [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服平台适配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">企业微信会话操作；src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.wechatPlatform",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    wechatcallback -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">解密并分发</FONT></TD></TR></TABLE>>,
        likec4_id=zrxxrw,
        style=dashed,
        weight=2];
    fakewechat [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">模拟微信入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">保留用于回归验证的本地消息入口；src/services/fake-wechat-platform.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.fakeWechat",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerorchestrator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动回复还是转人工；src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.answerOrchestrator",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    fakewechat -> answerorchestrator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转发消息</FONT></TD></TR></TABLE>>,
        likec4_id="1c714pp",
        minlen=1,
        style=dashed];
    wechatplatform -> answerorchestrator [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">传递归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id="1fmgq4r",
        style=dashed,
        weight=2];
    wechatwork [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">企业微信</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">企业微信客服平台</FONT></TD></TR></TABLE>>,
        likec4_id=wechatWork,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    wechatplatform -> wechatwork [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">calls open API</FONT></TD></TR></TABLE>>,
        likec4_id=e2fuec,
        style=dashed];
    answerloop [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索增强的应答循环；src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.answerLoop",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerorchestrator -> answerloop [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>,
        likec4_id=iygt08,
        style=dashed];
    handoffservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.handoffService",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerorchestrator -> handoffservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">不确定时升级人工</FONT></TD></TR></TABLE>>,
        likec4_id="164k6uh",
        style=dashed];
    wechatwork -> wechatcallback [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">回调加密报文</FONT></TD></TR></TABLE>>,
        likec4_id="18n1ipe",
        style=dashed];
    replypolicy [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.replyPolicy",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerloop -> replypolicy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验阈值</FONT></TD></TR></TABLE>>,
        likec4_id="1nmiw6w",
        style=dashed];
    ragflowknowledge [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow<BR/>检索与数据集访问；src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.ragflowKnowledge",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    answerloop -> ragflowknowledge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>,
        likec4_id="1k4739a",
        style=dashed,
        weight=2];
    handoffservice -> wechatplatform [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">通知客户</FONT></TD></TR></TABLE>>,
        likec4_id="1deweqw",
        style=dashed,
        weight=2];
    store [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">评测���禁</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">本地发布策略门禁；src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.evaluationGate",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    replypolicy -> evaluationgate [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">把控发布</FONT></TD></TR></TABLE>>,
        likec4_id="1ggx1p5",
        style=dashed];
    ragflow [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeRoutes",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgescan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">发现候选知识；src/services/knowledge-scan-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeScan",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgeroutes -> knowledgescan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">starts scan</FONT></TD></TR></TABLE>>,
        likec4_id="1sxefbz",
        style=dashed];
    knowledgesync [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把已批准知识推送到<BR/>RAGFlow；src/services/knowledge-sync-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeSync",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgeroutes -> knowledgesync [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发同步</FONT></TD></TR></TABLE>>,
        likec4_id="1sxe6zr",
        style=dashed,
        weight=2];
    knowledgelifecycle [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识生命周期视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识的晋升与下线；src/services/knowledge-lifecycle-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeLifecycle",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    ragflowlifecycleprobe [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">校验 RAGFlow<BR/>数据集状态；src/services/ragflow-lifecycle-probe-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.ragflowLifecycleProbe",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgelifecycle -> ragflowlifecycleprobe [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">校验数据集状态</FONT></TD></TR></TABLE>>,
        likec4_id="1psl778",
        style=dashed,
        weight=2];
    documentregistry [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">文档登记簿</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">跟踪素材与文档标识；src/services/knowledge-document-registry.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.documentRegistry",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgelifecycle -> documentregistry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">晋升或下线</FONT></TD></TR></TABLE>>,
        likec4_id="1fsr9hw",
        style=dashed];
    materialroutes [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">美妆素材接入接口；src/routes/material-routes.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.materialRoutes",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    materialservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">素材服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">素材接入规则；src/services/material-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.materialService",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    materialroutes -> materialservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">接收素材</FONT></TD></TR></TABLE>>,
        likec4_id="1tvlbst",
        minlen=1,
        style=dashed];
    materialbatch [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">素材批处理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">素材批处理；src/services/material-batch-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.materialBatch",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    materialbatch -> materialservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">批量接入</FONT></TD></TR></TABLE>>,
        likec4_id="3ugd63",
        minlen=1,
        style=dashed];
    knowledgealert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">暴露知识新鲜度问题；src/services/knowledge-alert-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.knowledgeAlert",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    store [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.store",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    knowledgealert -> store [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">报告新鲜度</FONT></TD></TR></TABLE>>,
        likec4_id="93qg9",
        minlen=1,
        style=dashed];
    governance [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">发布决策与治理；src/services/knowledge-governance-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.governance",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgescan -> governance [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">submits candidates</FONT></TD></TR></TABLE>>,
        likec4_id="1vijps9",
        style=dashed];
    ragflowknowledge [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow<BR/>检索与数据集访问；src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.ragflowKnowledge",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    knowledgesync -> ragflowknowledge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">推送数据集</FONT></TD></TR></TABLE>>,
        likec4_id="1fwusqz",
        style=dashed,
        weight=2];
    llmwiki [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki 候选源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM 生成的 wiki 候选来源</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>,
        likec4_id=ragflow,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ragflowlifecycleprobe -> ragflow [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">inspects datasets</FONT></TD></TR></TABLE>>,
        likec4_id="19icgx2",
        style=dashed];
    materialservice -> documentregistry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">登记文档</FONT></TD></TR></TABLE>>,
        likec4_id="10tffly",
        style=dashed];
    evaluationgate [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">评测���禁</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">本地发布策略门禁；src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>,
        likec4_id="beauty.evaluationGate",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    governance -> evaluationgate [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">applies 决策结果</FONT></TD></TR></TABLE>>,
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
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>美妆客服服务</B></FONT>>,
            likec4_depth=1,
            likec4_id=beauty,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        operatorui [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员 Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.operatorUi",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        handoffroutes [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">转人工路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">人工转接工单接口；src/routes/handoff-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.handoffRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        knowledgeroutes [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.knowledgeRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        integrationroutes [group=beauty,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">功能概览与集成状态；src/routes/integration-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        handoffservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff-service.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        materialroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">素材路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">美妆素材接入接口；src/routes/material-routes.js</FONT></TD></TR></TABLE>>,
            likec4_id="beauty.materialRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    operator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">处理升级工单的人工运营人员</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> operatorui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">使用</FONT></TD></TR></TABLE>>,
        likec4_id="1bfoxae",
        minlen=1,
        style=dashed];
    operatorui -> handoffroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">管理工单</FONT></TD></TR></TABLE>>,
        likec4_id="1ts1e40",
        minlen=1,
        style=dashed,
        weight=2];
    operatorui -> knowledgeroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">运营知识库</FONT></TD></TR></TABLE>>,
        likec4_id=w0v1ym,
        minlen=1,
        style=dashed,
        weight=2];
    operatorui -> integrationroutes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查看状态</FONT></TD></TR></TABLE>>,
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">客户</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">通过企业微信咨询的终端用户</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "fakewechat" [
    likec4_id = "beauty.fakeWechat";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">模拟微信入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">保留用于回归验证的本地消息入口；src/services/fake-wechat-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" [
    likec4_id = "beauty.answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动回复还是转人工；src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerloop" [
    likec4_id = "beauty.answerLoop";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索增强的应答循环；src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflowknowledge" [
    likec4_id = "beauty.ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow<BR/>检索与数据集访问；src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflow" [
    likec4_id = "ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "wechatplatform" [
    likec4_id = "beauty.wechatPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服平台适配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">企业微信会话操作；src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "wechatwork" [
    likec4_id = "wechatWork";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">企业微信</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">企业微信客服平台</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "customer" -> "fakewechat" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">提出美妆咨询</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "fakewechat" -> "answerorchestrator" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">转发消息</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "answerloop" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">requests answer</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerloop" -> "ragflowknowledge" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">检索候选知识</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflow" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">queries dataset</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflow" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回知识片段</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "answerloop" -> "replypolicy" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">评估置信度</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "replypolicy" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">允许自动回复</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "answerorchestrator" -> "wechatplatform" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发送回复</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "wechatplatform" -> "wechatwork" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发送消息</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">客户</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">通过企业微信咨询的终端用户</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "wechatcallback" [
    likec4_id = "beauty.wechatCallback";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">接收加密的企业微信回调；src/routes/wechat-kf-routes.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "wechatplatform" [
    likec4_id = "beauty.wechatPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服平台适配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">企业微信会话操作；src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" [
    likec4_id = "beauty.answerOrchestrator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动回复还是转人工；src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerloop" [
    likec4_id = "beauty.answerLoop";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">检索增强的应答循环；src/services/knowledge-answer-loop-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflowknowledge" [
    likec4_id = "beauty.ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow<BR/>检索与数据集访问；src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflow" [
    likec4_id = "ragflow";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">RAG 与知识库服务</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "customer" -> "wechatcallback" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发送问题</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "wechatcallback" -> "wechatplatform" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">解密</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "wechatplatform" -> "answerorchestrator" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">归一化消息</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "answerloop" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">请求应答</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerloop" -> "ragflowknowledge" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflow" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">查询知识库</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerloop" -> "ragflowknowledge" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">返回知识片段</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "answerloop" -> "replypolicy" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">置信度</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "answerorchestrator" -> "replypolicy" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">决策结果</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动回复还是转人工；src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "evaluationgate" [
    likec4_id = "beauty.evaluationGate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">评测���禁</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">本地发布策略门禁；src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "store" [
    likec4_id = "beauty.store";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "replypolicy" [
    likec4_id = "beauty.replyPolicy";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply-policy-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" -> "evaluationgate" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">执行评测</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "evaluationgate" -> "store" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取候选</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "evaluationgate" -> "replypolicy" [
    likec4_id = "step-03.1";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3.1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">校验阈值</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "evaluationgate" -> "store" [
    likec4_id = "step-03.2";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3.2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取策略状态</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动回复还是转人工；src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "handoffservice" [
    likec4_id = "beauty.handoffService";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "store" [
    likec4_id = "beauty.store";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "wechatplatform" [
    likec4_id = "beauty.wechatPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">微信客服平台适配</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">企业微信会话操作；src/services/wechat-kf-platform.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "operator" [
    likec4_id = "operator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">处理升级工单的人工运营人员</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "operatorui" [
    likec4_id = "beauty.operatorUi";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员 Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "handoffroutes" [
    likec4_id = "beauty.handoffRoutes";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">转人工路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">人工转接工单接口；src/routes/handoff-routes.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" -> "handoffservice" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">创建工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "handoffservice" -> "store" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "handoffservice" -> "wechatplatform" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">通知客户</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "operator" -> "operatorui" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">打开工单</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "operatorui" -> "handoffroutes" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">认领工单</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">处理升级工单的人工运营人员</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "operatorui" [
    likec4_id = "beauty.operatorUi";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">运营人员 Console</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</FONT></TD></TR></TABLE>>;
    margin = "0.278,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "knowledgeroutes" [
    likec4_id = "beauty.knowledgeRoutes";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识库路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge-routes.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "knowledgescan" [
    likec4_id = "beauty.knowledgeScan";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识扫描</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">发现候选知识；src/services/knowledge-scan-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "governance" [
    likec4_id = "beauty.governance";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识治理</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">发布决策与治理；src/services/knowledge-governance-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "evaluationgate" [
    likec4_id = "beauty.evaluationGate";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">评测���禁</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">本地发布策略门禁；src/services/evaluation-gate.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "knowledgesync" [
    likec4_id = "beauty.knowledgeSync";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">知识同步</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">把已批准知识推送到<BR/>RAGFlow；src/services/knowledge-sync-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "llmwiki" [
    likec4_id = "llmWiki";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">LLM Wiki 候选源</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">LLM 生成的 wiki 候选来源</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow<BR/>检索与数据集访问；src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "operator" -> "operatorui" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">触发同步</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "operatorui" -> "knowledgeroutes" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">请求同步</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgeroutes" -> "knowledgescan" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">扫描候选项</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgescan" -> "governance" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">submit for 决策结果</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "governance" -> "evaluationgate" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">应用发布规则</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgeroutes" -> "knowledgesync" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">推送已批准项</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgesync" -> "llmwiki" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">读取候选 wiki</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "knowledgesync" -> "ragflowknowledge" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">写入数据集</FONT></TD></TR></TABLE>>;
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
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动回复还是转人工；src/services/answer-orchestrator.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "ragflowknowledge" [
    likec4_id = "beauty.ragflowKnowledge";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">RAGFlow 知识库 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">RAGFlow<BR/>检索与数据集访问；src/services/ragflow-knowledge-service.js</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
  ];
  "answerorchestrator" -> "ragflowknowledge" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">尝试检索</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "ragflowknowledge" -> "ragflowknowledge" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">检查配置门控</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`localDeployment`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1430pt" height="761pt"
 viewBox="0.00 0.00 1430.00 761.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 746.45)">
<g id="clust1" class="cluster">
<title>cluster_apptier</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="508,-458.2 508,-723.4 892,-723.4 892,-458.2 508,-458.2"/>
<text xml:space="preserve" text-anchor="start" x="516" y="-710.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">APPLICATION TIER</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_datatier</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-394.4 1392,-394.4 1392,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-381.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DATA TIER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_storevm</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="58,-58 58,-323.2 442,-323.2 442,-58 58,-58"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LOCAL FILESYSTEM</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_ragflowvm</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="508,-58 508,-323.2 892,-323.2 892,-58 508,-58"/>
<text xml:space="preserve" text-anchor="start" x="516" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LOCALHOST:9380</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_wikivm</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="958,-58 958,-323.2 1342,-323.2 1342,-58 958,-58"/>
<text xml:space="preserve" text-anchor="start" x="966" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LOCALHOST:19828</text>
</g>
<!-- service -->
<g id="node1" class="node">
<title>service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="860.02,-670.2 539.98,-670.2 539.98,-490.2 860.02,-490.2 860.02,-670.2"/>
<text xml:space="preserve" text-anchor="start" x="586.62" y="-593" font-family="Arial" font-size="20.00" fill="#eff6ff">Beauty Customer Service</text>
<text xml:space="preserve" text-anchor="start" x="661.33" y="-572" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node.js &gt;=20</text>
<text xml:space="preserve" text-anchor="start" x="599.98" y="-550.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">基于企业微信的美妆咨询与知识服务</text>
</g>
<!-- store -->
<g id="node2" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M410.02,-253.64C410.02,-262.67 338.3,-270 250,-270 161.7,-270 89.98,-262.67 89.98,-253.64 89.98,-253.64 89.98,-106.36 89.98,-106.36 89.98,-97.33 161.7,-90 250,-90 338.3,-90 410.02,-97.33 410.02,-106.36 410.02,-106.36 410.02,-253.64 410.02,-253.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M410.02,-253.64C410.02,-244.61 338.3,-237.27 250,-237.27 161.7,-237.27 89.98,-244.61 89.98,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="169.97" y="-192.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Local JSON Store</text>
<text xml:space="preserve" text-anchor="start" x="177.39" y="-171.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json</text>
<text xml:space="preserve" text-anchor="start" x="112.88" y="-150.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- ragflow -->
<g id="node3" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="860.02,-270 539.98,-270 539.98,-90 860.02,-90 860.02,-270"/>
<text xml:space="preserve" text-anchor="start" x="657.22" y="-192.8" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="683.03" y="-171.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">HTTP</text>
<text xml:space="preserve" text-anchor="start" x="644.16" y="-150.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- wiki -->
<g id="node4" class="node">
<title>wiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1310.02,-270 989.98,-270 989.98,-90 1310.02,-90 1310.02,-270"/>
<text xml:space="preserve" text-anchor="start" x="1108.89" y="-192.8" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki</text>
<text xml:space="preserve" text-anchor="start" x="1133.03" y="-171.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">HTTP</text>
<text xml:space="preserve" text-anchor="start" x="1072.9" y="-150.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM 生成的 wiki 候选来源</text>
</g>
<!-- service&#45;&gt;store -->
<g id="edge1" class="edge">
<title>service&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M589.39,-490.41C552.85,-460.43 512.28,-426.43 476,-394.4 433.63,-357 388.11,-314.48 349.09,-277.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="351.32,-275.79 344.08,-272.51 347.69,-279.58 351.32,-275.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="505.78,-402.4 505.78,-425.2 614.5,-425.2 614.5,-402.4 505.78,-402.4"/>
<text xml:space="preserve" text-anchor="start" x="508.78" y="-408.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
</g>
<!-- service&#45;&gt;ragflow -->
<g id="edge2" class="edge">
<title>service&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M700,-490.33C700,-428 700,-344.61 700,-280.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="702.63,-280.47 700,-272.97 697.38,-280.47 702.63,-280.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="700,-402.4 700,-425.2 726.99,-425.2 726.99,-402.4 700,-402.4"/>
<text xml:space="preserve" text-anchor="start" x="703" y="-410.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- service&#45;&gt;wiki -->
<g id="edge3" class="edge">
<title>service&#45;&gt;wiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M810.61,-490.41C847.15,-460.43 887.72,-426.43 924,-394.4 966.56,-356.83 1012.3,-314.1 1051.43,-276.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1052.86,-279.06 1056.47,-271.98 1049.23,-275.26 1052.86,-279.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="912.25,-402.4 912.25,-425.2 1045.1,-425.2 1045.1,-402.4 912.25,-402.4"/>
<text xml:space="preserve" text-anchor="start" x="915.25" y="-408.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
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
<svg width="1210pt" height="856pt"
 viewBox="0.00 0.00 1210.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="436.04,-825.6 116,-825.6 116,-645.6 436.04,-645.6 436.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="259.35" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
<text xml:space="preserve" text-anchor="start" x="194.75" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">通过企业微信咨询的终端用户</text>
</g>
<!-- beauty -->
<g id="node2" class="node">
<title>beauty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="651.04,-502.8 331,-502.8 331,-322.8 651.04,-322.8 651.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="441.01" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">美妆客服服务</text>
<text xml:space="preserve" text-anchor="start" x="391" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">基于企业微信的美妆咨询与知识服务</text>
</g>
<!-- operator -->
<g id="node3" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="866.04,-825.6 546,-825.6 546,-645.6 866.04,-645.6 866.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="672.68" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
<text xml:space="preserve" text-anchor="start" x="624.75" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">处理升级工单的人工运营人员</text>
</g>
<!-- wechatwork -->
<g id="node4" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">企业微信</text>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">企业微信客服平台</text>
</g>
<!-- ragflow -->
<g id="node5" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="519.45" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="534.18" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- llmwiki -->
<g id="node6" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="951.12" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki 候选源</text>
<text xml:space="preserve" text-anchor="start" x="942.92" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM 生成的 wiki 候选来源</text>
</g>
<!-- customer&#45;&gt;beauty -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M335.62,-645.67C363.59,-603.94 396.98,-554.11 425.64,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="427.81,-512.84 429.8,-505.14 423.45,-509.91 427.81,-512.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="389.97,-562.8 389.97,-585.6 512.66,-585.6 512.66,-562.8 389.97,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="392.97" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">发送消息（本地开发）</text>
</g>
<!-- beauty&#45;&gt;wechatwork -->
<g id="edge3" class="edge">
<title>beauty&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M331.22,-379.87C266.46,-358.23 197.99,-322.27 159.52,-262.8 145.78,-241.56 141.2,-215.54 141.22,-190.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="143.84,-190.41 141.4,-182.85 138.59,-190.28 143.84,-190.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="159.52,-240 159.52,-262.8 255.02,-262.8 255.02,-240 159.52,-240"/>
<text xml:space="preserve" text-anchor="start" x="162.52" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- beauty&#45;&gt;ragflow -->
<g id="edge4" class="edge">
<title>beauty&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M518.47,-322.87C531.23,-281.49 546.46,-232.15 559.58,-189.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="562.01,-190.66 561.71,-182.72 556.99,-189.11 562.01,-190.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="543.49,-240 543.49,-262.8 570.48,-262.8 570.48,-240 543.49,-240"/>
<text xml:space="preserve" text-anchor="start" x="546.49" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- beauty&#45;&gt;llmwiki -->
<g id="edge5" class="edge">
<title>beauty&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M637.67,-322.87C708.34,-280.01 793.11,-228.6 864.86,-185.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="865.9,-187.53 870.95,-181.4 863.18,-183.04 865.9,-187.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="771.38,-240 771.38,-262.8 904.23,-262.8 904.23,-240 771.38,-240"/>
<text xml:space="preserve" text-anchor="start" x="774.38" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
<!-- operator&#45;&gt;beauty -->
<g id="edge2" class="edge">
<title>operator&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M646.42,-645.67C618.45,-603.94 585.06,-554.11 556.4,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="558.59,-509.91 552.24,-505.14 554.23,-512.84 558.59,-509.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="604.97,-562.8 604.97,-585.6 634.3,-585.6 634.3,-562.8 604.97,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="607.97" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">使用</text>
</g>
<!-- wechatwork&#45;&gt;beauty -->
<g id="edge6" class="edge">
<title>wechatwork&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M251.67,-179.83C295.25,-222.06 347.41,-272.62 391.9,-315.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="389.87,-317.42 397.08,-320.76 393.53,-313.65 389.87,-317.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="335.44,-240 335.44,-262.8 411.46,-262.8 411.46,-240 335.44,-240"/>
<text xml:space="preserve" text-anchor="start" x="338.44" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">回调加密报文</text>
</g>
</g>
</svg>
`;case`context`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1210pt" height="856pt"
 viewBox="0.00 0.00 1210.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="436.04,-825.6 116,-825.6 116,-645.6 436.04,-645.6 436.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="259.35" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
<text xml:space="preserve" text-anchor="start" x="194.75" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">通过企业微信咨询的终端用户</text>
</g>
<!-- beauty -->
<g id="node2" class="node">
<title>beauty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="651.04,-502.8 331,-502.8 331,-322.8 651.04,-322.8 651.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="441.01" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">美妆客服服务</text>
<text xml:space="preserve" text-anchor="start" x="391" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">基于企业微信的美妆咨询与知识服务</text>
</g>
<!-- operator -->
<g id="node3" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="866.04,-825.6 546,-825.6 546,-645.6 866.04,-645.6 866.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="672.68" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
<text xml:space="preserve" text-anchor="start" x="624.75" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">处理升级工单的人工运营人员</text>
</g>
<!-- wechatwork -->
<g id="node4" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">企业微信</text>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">企业微信客服平台</text>
</g>
<!-- ragflow -->
<g id="node5" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="519.45" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="534.18" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- llmwiki -->
<g id="node6" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="951.12" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki 候选源</text>
<text xml:space="preserve" text-anchor="start" x="942.92" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM 生成的 wiki 候选来源</text>
</g>
<!-- customer&#45;&gt;beauty -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M335.62,-645.67C363.59,-603.94 396.98,-554.11 425.64,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="427.81,-512.84 429.8,-505.14 423.45,-509.91 427.81,-512.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="389.97,-562.8 389.97,-585.6 512.66,-585.6 512.66,-562.8 389.97,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="392.97" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">发送消息（本地开发）</text>
</g>
<!-- beauty&#45;&gt;wechatwork -->
<g id="edge3" class="edge">
<title>beauty&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M331.22,-379.87C266.46,-358.23 197.99,-322.27 159.52,-262.8 145.78,-241.56 141.2,-215.54 141.22,-190.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="143.84,-190.41 141.4,-182.85 138.59,-190.28 143.84,-190.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="159.52,-240 159.52,-262.8 255.02,-262.8 255.02,-240 159.52,-240"/>
<text xml:space="preserve" text-anchor="start" x="162.52" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- beauty&#45;&gt;ragflow -->
<g id="edge4" class="edge">
<title>beauty&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M518.47,-322.87C531.23,-281.49 546.46,-232.15 559.58,-189.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="562.01,-190.66 561.71,-182.72 556.99,-189.11 562.01,-190.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="543.49,-240 543.49,-262.8 570.48,-262.8 570.48,-240 543.49,-240"/>
<text xml:space="preserve" text-anchor="start" x="546.49" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- beauty&#45;&gt;llmwiki -->
<g id="edge5" class="edge">
<title>beauty&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M637.67,-322.87C708.34,-280.01 793.11,-228.6 864.86,-185.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="865.9,-187.53 870.95,-181.4 863.18,-183.04 865.9,-187.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="771.38,-240 771.38,-262.8 904.23,-262.8 904.23,-240 771.38,-240"/>
<text xml:space="preserve" text-anchor="start" x="774.38" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
<!-- operator&#45;&gt;beauty -->
<g id="edge2" class="edge">
<title>operator&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M646.42,-645.67C618.45,-603.94 585.06,-554.11 556.4,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="558.59,-509.91 552.24,-505.14 554.23,-512.84 558.59,-509.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="604.97,-562.8 604.97,-585.6 634.3,-585.6 634.3,-562.8 604.97,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="607.97" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">使用</text>
</g>
<!-- wechatwork&#45;&gt;beauty -->
<g id="edge6" class="edge">
<title>wechatwork&#45;&gt;beauty</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M251.67,-179.83C295.25,-222.06 347.41,-272.62 391.9,-315.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="389.87,-317.42 397.08,-320.76 393.53,-313.65 389.87,-317.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="335.44,-240 335.44,-262.8 411.46,-262.8 411.46,-240 335.44,-240"/>
<text xml:space="preserve" text-anchor="start" x="338.44" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">回调加密报文</text>
</g>
</g>
</svg>
`;case`container`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2469pt" height="1570pt"
 viewBox="0.00 0.00 2469.00 1570.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1555.45)">
<g id="clust1" class="cluster">
<title>cluster_beauty</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1532.4 2079,-1532.4 2079,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1519.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">美妆客服服务</text>
</g>
<!-- fakewechat -->
<g id="node1" class="node">
<title>fakewechat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="566.22,-1471.2 47.78,-1471.2 47.78,-1291.2 566.22,-1291.2 566.22,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="256.99" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">模拟微信入口</text>
<text xml:space="preserve" text-anchor="start" x="87.78" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">保留用于回归验证的本地消息入口；src/services/fake&#45;wechat&#45;platform.js</text>
</g>
<!-- operatorui -->
<g id="node2" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1015.47,-1471.2 676.53,-1471.2 676.53,-1291.2 1015.47,-1291.2 1015.47,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="773.19" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员 Console</text>
<text xml:space="preserve" text-anchor="start" x="700.54" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</text>
</g>
<!-- wechatcallback -->
<g id="node3" class="node">
<title>wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1550.96,-1471.2 1125.04,-1471.2 1125.04,-1291.2 1550.96,-1291.2 1550.96,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1271.32" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="1165.04" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收加密的企业微信回调；src/routes/wechat&#45;kf&#45;routes.js</text>
</g>
<!-- answerorchestrator -->
<g id="node4" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="509.88,-1148.4 48.12,-1148.4 48.12,-968.4 509.88,-968.4 509.88,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="237.33" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="88.12" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- knowledgeroutes -->
<g id="node5" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1090.48,-1148.4 619.52,-1148.4 619.52,-968.4 1090.48,-968.4 1090.48,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="813.33" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="659.52" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge&#45;routes.js</text>
</g>
<!-- materialroutes -->
<g id="node6" class="node">
<title>materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2038.79,-1471.2 1661.21,-1471.2 1661.21,-1291.2 2038.79,-1291.2 2038.79,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1816.66" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">素材路由</text>
<text xml:space="preserve" text-anchor="start" x="1701.21" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">美妆素材接入接口；src/routes/material&#45;routes.js</text>
</g>
<!-- integrationroutes -->
<g id="node7" class="node">
<title>integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1607.39,-1148.4 1200.61,-1148.4 1200.61,-968.4 1607.39,-968.4 1607.39,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1353.99" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="1240.61" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态；src/routes/integration&#45;routes.js</text>
</g>
<!-- answerloop -->
<g id="node8" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="562.15,-825.6 47.85,-825.6 47.85,-645.6 562.15,-645.6 562.15,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="254.99" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="87.85" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索增强的应答循环；src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- handoffservice -->
<g id="node9" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1191.46,-825.6 760.54,-825.6 760.54,-645.6 1191.46,-645.6 1191.46,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="934.33" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="800.54" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node10" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="539.22,-502.8 70.78,-502.8 70.78,-322.8 539.22,-322.8 539.22,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="198.32" y="-424.8" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="272.91" y="-401.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="110.78" y="-383.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- wechatplatform -->
<g id="node11" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1649.12,-502.8 1234.88,-502.8 1234.88,-322.8 1649.12,-322.8 1649.12,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1375.32" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="1274.88" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- store -->
<g id="node12" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1125.02,-486.44C1125.02,-495.47 1053.3,-502.8 965,-502.8 876.7,-502.8 804.98,-495.47 804.98,-486.44 804.98,-486.44 804.98,-339.16 804.98,-339.16 804.98,-330.13 876.7,-322.8 965,-322.8 1053.3,-322.8 1125.02,-330.13 1125.02,-339.16 1125.02,-339.16 1125.02,-486.44 1125.02,-486.44"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1125.02,-486.44C1125.02,-477.41 1053.3,-470.07 965,-470.07 876.7,-470.07 804.98,-477.41 804.98,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="931.66" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">本地存储</text>
<text xml:space="preserve" text-anchor="start" x="827.88" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- llmwiki -->
<g id="node13" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2439.02,-1148.4 2118.98,-1148.4 2118.98,-968.4 2439.02,-968.4 2439.02,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2210.1" y="-1061.4" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki 候选源</text>
<text xml:space="preserve" text-anchor="start" x="2201.9" y="-1038.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM 生成的 wiki 候选来源</text>
</g>
<!-- ragflow -->
<g id="node14" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="465.02,-180 144.98,-180 144.98,0 465.02,0 465.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="234.43" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="249.16" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- wechatwork -->
<g id="node15" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1938.02,-180 1617.98,-180 1617.98,0 1938.02,0 1938.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="1744.66" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">企业微信</text>
<text xml:space="preserve" text-anchor="start" x="1727.99" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">企业微信客服平台</text>
</g>
<!-- fakewechat&#45;&gt;answerorchestrator -->
<g id="edge1" class="edge">
<title>fakewechat&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M299.24,-1291.27C295.64,-1250.07 291.36,-1200.96 287.66,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="290.28,-1158.49 287.02,-1151.25 285.05,-1158.94 290.28,-1158.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="293.84,-1208.4 293.84,-1231.2 346.52,-1231.2 346.52,-1208.4 293.84,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="296.84" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">转发消息</text>
</g>
<!-- operatorui&#45;&gt;knowledgeroutes -->
<g id="edge2" class="edge">
<title>operatorui&#45;&gt;knowledgeroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M848.5,-1291.27C849.65,-1250.07 851.03,-1200.96 852.22,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="854.84,-1158.83 852.42,-1151.26 849.59,-1158.68 854.84,-1158.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="850.77,-1208.4 850.77,-1231.2 915.11,-1231.2 915.11,-1208.4 850.77,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="853.77" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营知识库</text>
</g>
<!-- operatorui&#45;&gt;integrationroutes -->
<g id="edge3" class="edge">
<title>operatorui&#45;&gt;integrationroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1000.69,-1291.27C1075.38,-1248.32 1165.01,-1196.79 1240.79,-1153.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1241.67,-1155.75 1246.87,-1149.74 1239.06,-1151.2 1241.67,-1155.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1141.73,-1208.4 1141.73,-1231.2 1194.41,-1231.2 1194.41,-1208.4 1141.73,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1144.73" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">查看状态</text>
</g>
<!-- wechatcallback&#45;&gt;wechatplatform -->
<g id="edge4" class="edge">
<title>wechatcallback&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1523.48,-1291.22C1578.21,-1255.06 1631.56,-1207.6 1662,-1148.4 1772.12,-934.22 1616.76,-655.93 1516.13,-511.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1518.37,-509.7 1511.92,-505.06 1514.07,-512.71 1518.37,-509.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1692.74,-885.6 1692.74,-908.4 1757.08,-908.4 1757.08,-885.6 1692.74,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1695.74" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">解密并分发</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge5" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M286.21,-968.47C289.55,-927.27 293.53,-878.16 296.96,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="299.57,-836.13 297.56,-828.45 294.33,-835.71 299.57,-836.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="292.78,-885.6 292.78,-908.4 345.46,-908.4 345.46,-885.6 292.78,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="295.78" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求应答</text>
</g>
<!-- answerorchestrator&#45;&gt;handoffservice -->
<g id="edge6" class="edge">
<title>answerorchestrator&#45;&gt;handoffservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M472.23,-968.47C565.9,-925.35 678.38,-873.58 773.28,-829.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="774.23,-832.35 779.95,-826.83 772.04,-827.59 774.23,-832.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="648.4,-885.6 648.4,-908.4 747.75,-908.4 747.75,-885.6 648.4,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="651.4" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">不确定时升级人工</text>
</g>
<!-- materialroutes&#45;&gt;llmwiki -->
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge8" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M305,-645.67C305,-604.47 305,-555.36 305,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="307.63,-513.16 305,-505.66 302.38,-513.16 307.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="305,-562.8 305,-585.6 381.01,-585.6 381.01,-562.8 305,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="308" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索候选知识</text>
</g>
<!-- handoffservice&#45;&gt;wechatplatform -->
<g id="edge9" class="edge">
<title>handoffservice&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1105.19,-645.67C1167.18,-602.99 1241.51,-551.82 1304.54,-508.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1305.78,-510.76 1310.47,-504.35 1302.81,-506.44 1305.78,-510.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1222.97,-562.8 1222.97,-585.6 1275.65,-585.6 1275.65,-562.8 1222.97,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1225.97" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">通知客户</text>
</g>
<!-- handoffservice&#45;&gt;store -->
<g id="edge10" class="edge">
<title>handoffservice&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M972.95,-645.67C971.55,-604.81 969.88,-556.18 968.44,-514.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="971.07,-514.17 968.19,-506.77 965.82,-514.35 971.07,-514.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="970.83,-562.8 970.83,-585.6 1061.63,-585.6 1061.63,-562.8 970.83,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="973.83" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">persists ticket</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge11" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M305,-322.87C305,-281.67 305,-232.56 305,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="307.63,-190.36 305,-182.86 302.38,-190.36 307.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="305,-240 305,-262.8 413.73,-262.8 413.73,-240 305,-240"/>
<text xml:space="preserve" text-anchor="start" x="308" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries datasets</text>
</g>
<!-- wechatplatform&#45;&gt;answerorchestrator -->
<g id="edge12" class="edge">
<title>wechatplatform&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1424.12,-502.72C1400.26,-597.55 1348.52,-744.94 1246,-825.6 1002.96,-1016.82 864.31,-890.63 565,-968.4 550.24,-972.23 535.11,-976.36 519.88,-980.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="519.28,-978.1 512.78,-982.68 520.71,-983.15 519.28,-978.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1373.28,-724.2 1373.28,-747 1460.97,-747 1460.97,-724.2 1373.28,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1376.28" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">传递归一化消息</text>
</g>
<!-- wechatplatform&#45;&gt;wechatwork -->
<g id="edge13" class="edge">
<title>wechatplatform&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1535.15,-322.87C1579.39,-280.62 1632.35,-230.07 1677.5,-186.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1679.16,-189 1682.77,-181.92 1675.53,-185.2 1679.16,-189"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1620.07,-240 1620.07,-262.8 1715.57,-262.8 1715.57,-240 1620.07,-240"/>
<text xml:space="preserve" text-anchor="start" x="1623.07" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- wechatwork&#45;&gt;wechatcallback -->
<g id="edge14" class="edge">
<title>wechatwork&#45;&gt;wechatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1850.49,-179.84C1893.23,-241.18 1939,-326.74 1939,-411.8 1939,-1059.4 1939,-1059.4 1939,-1059.4 1939,-1148.35 1731.54,-1243.51 1560.4,-1306.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1559.71,-1304.34 1553.58,-1309.4 1561.52,-1309.27 1559.71,-1304.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1939,-724.2 1939,-747 2015.01,-747 2015.01,-724.2 1939,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1942" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">回调加密报文</text>
</g>
</g>
</svg>
`;case`answerPath`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1598pt" height="2147pt"
 viewBox="0.00 0.00 1598.00 2147.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2131.85)">
<!-- wechatcallback -->
<g id="node1" class="node">
<title>wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="642.98,-2116.8 217.06,-2116.8 217.06,-1936.8 642.98,-1936.8 642.98,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="363.34" y="-2029.8" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="257.06" y="-2006.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收加密的企业微信回调；src/routes/wechat&#45;kf&#45;routes.js</text>
</g>
<!-- wechatplatform -->
<g id="node2" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="753.14,-1794 338.9,-1794 338.9,-1614 753.14,-1614 753.14,-1794"/>
<text xml:space="preserve" text-anchor="start" x="479.34" y="-1707" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="378.9" y="-1684" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- fakewechat -->
<g id="node3" class="node">
<title>fakewechat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1271.24,-2116.8 752.8,-2116.8 752.8,-1936.8 1271.24,-1936.8 1271.24,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="962.01" y="-2029.8" font-family="Arial" font-size="20.00" fill="#eff6ff">模拟微信入口</text>
<text xml:space="preserve" text-anchor="start" x="792.8" y="-2006.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">保留用于回归验证的本地消息入口；src/services/fake&#45;wechat&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node4" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1170.9,-1471.2 709.14,-1471.2 709.14,-1291.2 1170.9,-1291.2 1170.9,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="898.35" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="749.14" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- wechatwork -->
<g id="node5" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-1471.2 0,-1471.2 0,-1291.2 320.04,-1291.2 320.04,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-1384.2" font-family="Arial" font-size="20.00" fill="#f8fafc">企业微信</text>
<text xml:space="preserve" text-anchor="start" x="110.01" y="-1361.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">企业微信客服平台</text>
</g>
<!-- answerloop -->
<g id="node6" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1488.17,-1148.4 973.87,-1148.4 973.87,-968.4 1488.17,-968.4 1488.17,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1181.01" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="1013.87" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索增强的应答循环；src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- handoffservice -->
<g id="node7" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="761.48,-1148.4 330.56,-1148.4 330.56,-968.4 761.48,-968.4 761.48,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="504.35" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="370.56" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff&#45;service.js</text>
</g>
<!-- replypolicy -->
<g id="node8" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="989.89,-825.6 508.15,-825.6 508.15,-645.6 989.89,-645.6 989.89,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="715.68" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">回复策略</text>
<text xml:space="preserve" text-anchor="start" x="548.15" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node9" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1568.24,-825.6 1099.8,-825.6 1099.8,-645.6 1568.24,-645.6 1568.24,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1227.34" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="1301.93" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1139.8" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- store -->
<g id="node10" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M587.04,-163.64C587.04,-172.67 515.32,-180 427.02,-180 338.72,-180 267,-172.67 267,-163.64 267,-163.64 267,-16.36 267,-16.36 267,-7.33 338.72,0 427.02,0 515.32,0 587.04,-7.33 587.04,-16.36 587.04,-16.36 587.04,-163.64 587.04,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M587.04,-163.64C587.04,-154.61 515.32,-147.27 427.02,-147.27 338.72,-147.27 267,-154.61 267,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="393.68" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">本地存储</text>
<text xml:space="preserve" text-anchor="start" x="289.9" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- evaluationgate -->
<g id="node11" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="912.74,-502.8 519.3,-502.8 519.3,-322.8 912.74,-322.8 912.74,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="666.01" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">评测���禁</text>
<text xml:space="preserve" text-anchor="start" x="559.3" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁；src/services/evaluation&#45;gate.js</text>
</g>
<!-- ragflow -->
<g id="node12" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1494.04,-502.8 1174,-502.8 1174,-322.8 1494.04,-322.8 1494.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1263.45" y="-415.8" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="1278.18" y="-392.8" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- wechatcallback&#45;&gt;wechatplatform -->
<g id="edge1" class="edge">
<title>wechatcallback&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M462.18,-1936.87C477.14,-1895.49 494.98,-1846.15 510.35,-1803.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="512.79,-1804.62 512.87,-1796.68 507.85,-1802.84 512.79,-1804.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="491.5,-1854 491.5,-1876.8 555.84,-1876.8 555.84,-1854 491.5,-1854"/>
<text xml:space="preserve" text-anchor="start" x="494.5" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">解密并分发</text>
</g>
<!-- wechatplatform&#45;&gt;answerorchestrator -->
<g id="edge3" class="edge">
<title>wechatplatform&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M655.25,-1614.07C707.34,-1571.65 769.74,-1520.85 822.82,-1477.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="824.42,-1479.71 828.57,-1472.94 821.1,-1475.64 824.42,-1479.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="754.83,-1531.2 754.83,-1554 842.52,-1554 842.52,-1531.2 754.83,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="757.83" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">传递归一化消息</text>
</g>
<!-- wechatplatform&#45;&gt;wechatwork -->
<g id="edge4" class="edge">
<title>wechatplatform&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M439.01,-1614.07C387.97,-1571.65 326.85,-1520.85 274.84,-1477.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="276.68,-1475.74 269.23,-1472.96 273.32,-1479.78 276.68,-1475.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="364.59,-1531.2 364.59,-1554 460.09,-1554 460.09,-1531.2 364.59,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="367.59" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">calls open API</text>
</g>
<!-- fakewechat&#45;&gt;answerorchestrator -->
<g id="edge2" class="edge">
<title>fakewechat&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1002.08,-1936.99C988.73,-1817.58 965.05,-1605.93 951.12,-1481.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="953.75,-1481.31 950.31,-1474.14 948.53,-1481.89 953.75,-1481.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="985.52,-1692.6 985.52,-1715.4 1038.19,-1715.4 1038.19,-1692.6 985.52,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="988.52" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">转发消息</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge5" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1020.69,-1291.27C1058.85,-1249.2 1104.49,-1198.88 1143.49,-1155.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1145.31,-1157.79 1148.41,-1150.47 1141.43,-1154.26 1145.31,-1157.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1094.25,-1208.4 1094.25,-1231.2 1146.92,-1231.2 1146.92,-1208.4 1094.25,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1097.25" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求应答</text>
</g>
<!-- answerorchestrator&#45;&gt;handoffservice -->
<g id="edge6" class="edge">
<title>answerorchestrator&#45;&gt;handoffservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M830.79,-1291.27C778.7,-1248.85 716.3,-1198.05 663.22,-1154.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="664.94,-1152.84 657.47,-1150.14 661.62,-1156.91 664.94,-1152.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="754.83,-1208.4 754.83,-1231.2 854.19,-1231.2 854.19,-1208.4 754.83,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="757.83" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">不确定时升级人工</text>
</g>
<!-- wechatwork&#45;&gt;wechatcallback -->
<g id="edge7" class="edge">
<title>wechatwork&#45;&gt;wechatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M154.46,-1470.98C152.6,-1557.52 159.42,-1690.78 208.01,-1794 232.02,-1845.02 271.75,-1891.93 311,-1930"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="308.9,-1931.63 316.14,-1934.92 312.53,-1927.83 308.9,-1931.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208.01,-1692.6 208.01,-1715.4 284.02,-1715.4 284.02,-1692.6 208.01,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="211.01" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">回调加密报文</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1097.4,-968.47C1033.27,-925.79 956.4,-874.62 891.2,-831.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="892.7,-829.08 885.01,-827.11 889.79,-833.45 892.7,-829.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1004.47,-885.6 1004.47,-908.4 1057.15,-908.4 1057.15,-885.6 1004.47,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1007.47" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验阈值</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge9" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1259.57,-968.47C1272.86,-927.09 1288.7,-877.75 1302.35,-835.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1304.78,-836.26 1304.57,-828.31 1299.78,-834.65 1304.78,-836.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1285.61,-885.6 1285.61,-908.4 1361.62,-908.4 1361.62,-885.6 1285.61,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1288.61" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索候选知识</text>
</g>
<!-- handoffservice&#45;&gt;wechatplatform -->
<g id="edge10" class="edge">
<title>handoffservice&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M546.02,-1148.34C546.02,-1267.8 546.02,-1479.45 546.02,-1603.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="543.4,-1603.66 546.02,-1611.16 548.65,-1603.66 543.4,-1603.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="546.02,-1369.8 546.02,-1392.6 598.7,-1392.6 598.7,-1369.8 546.02,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="549.02" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">通知客户</text>
</g>
<!-- handoffservice&#45;&gt;store -->
<g id="edge11" class="edge">
<title>handoffservice&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M501.97,-968.58C483.24,-926.34 463.36,-874.49 453.02,-825.6 405.93,-603 411.82,-334.16 419.74,-191.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="422.35,-191.63 420.16,-183.99 417.11,-191.33 422.35,-191.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.7,-562.8 420.7,-585.6 511.5,-585.6 511.5,-562.8 420.7,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="423.7" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">persists ticket</text>
</g>
<!-- replypolicy&#45;&gt;evaluationgate -->
<g id="edge12" class="edge">
<title>replypolicy&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M739.87,-645.67C735.63,-604.47 730.58,-555.36 726.22,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="728.85,-512.83 725.47,-505.64 723.62,-513.37 728.85,-512.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="733.51,-562.8 733.51,-585.6 786.19,-585.6 786.19,-562.8 733.51,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="736.51" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">把控发布</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge13" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1334.02,-645.67C1334.02,-604.47 1334.02,-555.36 1334.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1336.65,-513.16 1334.02,-505.66 1331.4,-513.16 1336.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1334.02,-562.8 1334.02,-585.6 1442.75,-585.6 1442.75,-562.8 1334.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1337.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries datasets</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge14" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M635.9,-322.87C598.32,-281.15 553.43,-231.32 514.91,-188.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="517.04,-187.01 510.07,-183.19 513.14,-190.52 517.04,-187.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="580.19,-240 580.19,-262.8 753.52,-262.8 753.52,-240 580.19,-240"/>
<text xml:space="preserve" text-anchor="start" x="583.19" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads feedback candidates</text>
</g>
</g>
</svg>
`;case`knowledgeLifecycle`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3528pt" height="1501pt"
 viewBox="0.00 0.00 3528.00 1501.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1486.25)">
<!-- knowledgeroutes -->
<g id="node1" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1470.36,-1471.2 999.4,-1471.2 999.4,-1291.2 1470.36,-1291.2 1470.36,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1193.21" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="1039.4" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge&#45;routes.js</text>
</g>
<!-- knowledgescan -->
<g id="node2" class="node">
<title>knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="889.27,-1148.4 462.5,-1148.4 462.5,-968.4 889.27,-968.4 889.27,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="642.54" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="502.5" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识；src/services/knowledge&#45;scan&#45;service.js</text>
</g>
<!-- knowledgesync -->
<g id="node3" class="node">
<title>knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1442.43,-1148.4 1027.34,-1148.4 1027.34,-968.4 1442.43,-968.4 1442.43,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1201.54" y="-1070.4" font-family="Arial" font-size="20.00" fill="#eff6ff">知识同步</text>
<text xml:space="preserve" text-anchor="start" x="1178.62" y="-1047.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到</text>
<text xml:space="preserve" text-anchor="start" x="1067.34" y="-1029.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow；src/services/knowledge&#45;sync&#45;service.js</text>
</g>
<!-- knowledgelifecycle -->
<g id="node4" class="node">
<title>knowledgelifecycle</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2473.6,-1471.2 2000.17,-1471.2 2000.17,-1291.2 2473.6,-1291.2 2473.6,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="2170.2" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">知识生命周期视图</text>
<text xml:space="preserve" text-anchor="start" x="2040.17" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识的晋升与下线；src/services/knowledge&#45;lifecycle&#45;service.js</text>
</g>
<!-- ragflowlifecycleprobe -->
<g id="node5" class="node">
<title>ragflowlifecycleprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2464.85,-825.6 2008.92,-825.6 2008.92,-645.6 2464.85,-645.6 2464.85,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="2113.53" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="2190.21" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">校验 RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2048.92" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">数据集状态；src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
</g>
<!-- documentregistry -->
<g id="node6" class="node">
<title>documentregistry</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3074.95,-825.6 2574.82,-825.6 2574.82,-645.6 3074.95,-645.6 3074.95,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="2783.21" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">文档登记簿</text>
<text xml:space="preserve" text-anchor="start" x="2614.82" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">跟踪素材与文档标识；src/services/knowledge&#45;document&#45;registry.js</text>
</g>
<!-- materialroutes -->
<g id="node7" class="node">
<title>materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2987.67,-1471.2 2610.1,-1471.2 2610.1,-1291.2 2987.67,-1291.2 2987.67,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="2765.54" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">素材路由</text>
<text xml:space="preserve" text-anchor="start" x="2650.1" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">美妆素材接入接口；src/routes/material&#45;routes.js</text>
</g>
<!-- materialservice -->
<g id="node8" class="node">
<title>materialservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3010.74,-1148.4 2639.03,-1148.4 2639.03,-968.4 3010.74,-968.4 3010.74,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="2791.54" y="-1061.4" font-family="Arial" font-size="20.00" fill="#eff6ff">素材服务</text>
<text xml:space="preserve" text-anchor="start" x="2679.03" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材接入规则；src/services/material&#45;service.js</text>
</g>
<!-- materialbatch -->
<g id="node9" class="node">
<title>materialbatch</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3498.34,-1471.2 3097.43,-1471.2 3097.43,-1291.2 3498.34,-1291.2 3498.34,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="3256.21" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">素材批处理</text>
<text xml:space="preserve" text-anchor="start" x="3137.43" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">素材批处理；src/services/material&#45;batch&#45;service.js</text>
</g>
<!-- knowledgealert -->
<g id="node10" class="node">
<title>knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="461.77,-1471.2 0,-1471.2 0,-1291.2 461.77,-1291.2 461.77,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="197.54" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">知识告警</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度问题；src/services/knowledge&#45;alert&#45;service.js</text>
</g>
<!-- store -->
<g id="node11" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M475.9,-163.64C475.9,-172.67 404.18,-180 315.88,-180 227.59,-180 155.86,-172.67 155.86,-163.64 155.86,-163.64 155.86,-16.36 155.86,-16.36 155.86,-7.33 227.59,0 315.88,0 404.18,0 475.9,-7.33 475.9,-16.36 475.9,-16.36 475.9,-163.64 475.9,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M475.9,-163.64C475.9,-154.61 404.18,-147.27 315.88,-147.27 227.59,-147.27 155.86,-154.61 155.86,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="282.54" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">本地存储</text>
<text xml:space="preserve" text-anchor="start" x="178.77" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- governance -->
<g id="node12" class="node">
<title>governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="890.87,-825.6 404.9,-825.6 404.9,-645.6 890.87,-645.6 890.87,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="614.54" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">知识治理</text>
<text xml:space="preserve" text-anchor="start" x="444.9" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">发布决策与治理；src/services/knowledge&#45;governance&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node13" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1469.1,-825.6 1000.66,-825.6 1000.66,-645.6 1469.1,-645.6 1469.1,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1128.2" y="-747.6" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="1202.8" y="-724.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="1040.66" y="-706.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- llmwiki -->
<g id="node14" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1898.9,-825.6 1578.86,-825.6 1578.86,-645.6 1898.9,-645.6 1898.9,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1669.99" y="-738.6" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki 候选源</text>
<text xml:space="preserve" text-anchor="start" x="1661.79" y="-715.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM 生成的 wiki 候选来源</text>
</g>
<!-- ragflow -->
<g id="node15" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1895.9,-502.8 1575.86,-502.8 1575.86,-322.8 1895.9,-322.8 1895.9,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1665.32" y="-415.8" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="1680.04" y="-392.8" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- evaluationgate -->
<g id="node16" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="804.6,-502.8 411.16,-502.8 411.16,-322.8 804.6,-322.8 804.6,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="557.87" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">评测���禁</text>
<text xml:space="preserve" text-anchor="start" x="451.16" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁；src/services/evaluation&#45;gate.js</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgescan -->
<g id="edge1" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgescan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1079.91,-1291.27C1005.09,-1248.32 915.3,-1196.79 839.38,-1153.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="841.11,-1151.19 833.3,-1149.74 838.49,-1155.75 841.11,-1151.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="972.14,-1208.4 972.14,-1231.2 1045.83,-1231.2 1045.83,-1208.4 972.14,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="975.14" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">starts scan</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgesync -->
<g id="edge2" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgesync</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1234.88,-1291.27C1234.88,-1250.07 1234.88,-1200.96 1234.88,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1237.51,-1158.76 1234.88,-1151.26 1232.26,-1158.76 1237.51,-1158.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1234.88,-1208.4 1234.88,-1231.2 1287.56,-1231.2 1287.56,-1208.4 1234.88,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1237.88" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">触发同步</text>
</g>
<!-- knowledgescan&#45;&gt;governance -->
<g id="edge8" class="edge">
<title>knowledgescan&#45;&gt;governance</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M668.12,-968.47C664.53,-927.27 660.24,-878.16 656.54,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="659.17,-835.69 655.9,-828.45 653.94,-836.14 659.17,-835.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="662.72,-885.6 662.72,-908.4 788.56,-908.4 788.56,-885.6 662.72,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="665.72" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">submits candidates</text>
</g>
<!-- knowledgesync&#45;&gt;ragflowknowledge -->
<g id="edge9" class="edge">
<title>knowledgesync&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1234.88,-968.47C1234.88,-927.27 1234.88,-878.16 1234.88,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1237.51,-835.96 1234.88,-828.46 1232.26,-835.96 1237.51,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1234.88,-885.6 1234.88,-908.4 1299.23,-908.4 1299.23,-885.6 1234.88,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1237.88" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">推送数据集</text>
</g>
<!-- knowledgesync&#45;&gt;llmwiki -->
<g id="edge10" class="edge">
<title>knowledgesync&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1374.61,-968.47C1441.8,-925.7 1522.37,-874.41 1590.64,-830.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1591.86,-833.3 1596.77,-827.05 1589.04,-828.87 1591.86,-833.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1502,-885.6 1502,-908.4 1634.84,-908.4 1634.84,-885.6 1502,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1505" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads candidate wiki</text>
</g>
<!-- knowledgelifecycle&#45;&gt;ragflowlifecycleprobe -->
<g id="edge3" class="edge">
<title>knowledgelifecycle&#45;&gt;ragflowlifecycleprobe</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2236.88,-1291.39C2236.88,-1171.98 2236.88,-960.33 2236.88,-835.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2239.51,-836.06 2236.88,-828.56 2234.26,-836.06 2239.51,-836.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2236.88,-1047 2236.88,-1069.8 2324.57,-1069.8 2324.57,-1047 2236.88,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2239.88" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验数据集状态</text>
</g>
<!-- knowledgelifecycle&#45;&gt;documentregistry -->
<g id="edge4" class="edge">
<title>knowledgelifecycle&#45;&gt;documentregistry</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2179.91,-1291.36C2130.59,-1202.02 2077.05,-1064.14 2145.54,-968.4 2158.81,-949.85 2379.02,-876.73 2565.17,-817.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2565.89,-820.03 2572.25,-815.26 2564.3,-815.03 2565.89,-820.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2145.54,-1047 2145.54,-1069.8 2209.88,-1069.8 2209.88,-1047 2145.54,-1047"/>
<text xml:space="preserve" text-anchor="start" x="2148.54" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">晋升或下线</text>
</g>
<!-- ragflowlifecycleprobe&#45;&gt;ragflow -->
<g id="edge11" class="edge">
<title>ragflowlifecycleprobe&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2097.99,-645.67C2031.2,-602.9 1951.11,-551.61 1883.25,-508.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1884.89,-506.1 1877.16,-504.26 1882.06,-510.52 1884.89,-506.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2001.41,-562.8 2001.41,-585.6 2115.58,-585.6 2115.58,-562.8 2001.41,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2004.41" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">inspects datasets</text>
</g>
<!-- materialroutes&#45;&gt;materialservice -->
<g id="edge5" class="edge">
<title>materialroutes&#45;&gt;materialservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2806.09,-1291.27C2809.43,-1250.07 2813.41,-1200.96 2816.85,-1158.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2819.45,-1158.93 2817.44,-1151.25 2814.22,-1158.51 2819.45,-1158.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2812.66,-1208.4 2812.66,-1231.2 2865.34,-1231.2 2865.34,-1208.4 2812.66,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="2815.66" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">接收素材</text>
</g>
<!-- materialservice&#45;&gt;documentregistry -->
<g id="edge12" class="edge">
<title>materialservice&#45;&gt;documentregistry</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2824.88,-968.47C2824.88,-927.27 2824.88,-878.16 2824.88,-835.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2827.51,-835.96 2824.88,-828.46 2822.26,-835.96 2827.51,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2824.88,-885.6 2824.88,-908.4 2877.56,-908.4 2877.56,-885.6 2824.88,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2827.88" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">登记文档</text>
</g>
<!-- materialbatch&#45;&gt;materialservice -->
<g id="edge6" class="edge">
<title>materialbatch&#45;&gt;materialservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3166.76,-1291.27C3103.83,-1248.59 3028.39,-1197.42 2964.4,-1154.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2966.04,-1151.97 2958.36,-1149.93 2963.1,-1156.31 2966.04,-1151.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3075.57,-1208.4 3075.57,-1231.2 3128.24,-1231.2 3128.24,-1208.4 3075.57,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="3078.57" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">批量接入</text>
</g>
<!-- knowledgealert&#45;&gt;store -->
<g id="edge7" class="edge">
<title>knowledgealert&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M230.88,-1291.35C230.88,-1226.95 230.88,-1137.79 230.88,-1059.4 230.88,-1059.4 230.88,-1059.4 230.88,-411.8 230.88,-335.92 253.38,-253.2 275.23,-190.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="277.67,-191.73 277.71,-183.78 272.73,-189.97 277.67,-191.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="230.88,-724.2 230.88,-747 295.23,-747 295.23,-724.2 230.88,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="233.88" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">报告新鲜度</text>
</g>
<!-- governance&#45;&gt;evaluationgate -->
<g id="edge13" class="edge">
<title>governance&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M636.79,-645.67C631.66,-604.47 625.53,-555.36 620.25,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="622.87,-512.75 619.33,-505.63 617.66,-513.4 622.87,-512.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="629.08,-562.8 629.08,-585.6 730.01,-585.6 730.01,-562.8 629.08,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="632.08" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">applies 决策结果</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge14" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1373.77,-645.67C1440.56,-602.9 1520.66,-551.61 1588.52,-508.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1589.71,-510.52 1594.61,-504.26 1586.88,-506.1 1589.71,-510.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1500.41,-562.8 1500.41,-585.6 1609.14,-585.6 1609.14,-562.8 1500.41,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1503.41" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries datasets</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge15" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M526.93,-322.87C488.96,-281.15 443.6,-231.32 404.69,-188.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="406.78,-186.96 399.79,-183.18 402.9,-190.5 406.78,-186.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="470.64,-240 470.64,-262.8 643.98,-262.8 643.98,-240 470.64,-240"/>
<text xml:space="preserve" text-anchor="start" x="473.64" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads feedback candidates</text>
</g>
</g>
</svg>
`;case`operatorSurface`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2086pt" height="913pt"
 viewBox="0.00 0.00 2086.00 913.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 897.85)">
<g id="clust1" class="cluster">
<title>cluster_beauty</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-612 2048,-612 2048,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">美妆客服服务</text>
</g>
<!-- operatorui -->
<g id="node1" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="937.47,-550.8 598.53,-550.8 598.53,-370.8 937.47,-370.8 937.47,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="695.19" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员 Console</text>
<text xml:space="preserve" text-anchor="start" x="622.54" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</text>
</g>
<!-- handoffroutes -->
<g id="node2" class="node">
<title>handoffroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="422.14,-228 47.86,-228 47.86,-48 422.14,-48 422.14,-228"/>
<text xml:space="preserve" text-anchor="start" x="193.33" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工路由</text>
<text xml:space="preserve" text-anchor="start" x="87.86" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">人工转接工单接口；src/routes/handoff&#45;routes.js</text>
</g>
<!-- knowledgeroutes -->
<g id="node3" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1003.48,-228 532.52,-228 532.52,-48 1003.48,-48 1003.48,-228"/>
<text xml:space="preserve" text-anchor="start" x="726.33" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="572.52" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge&#45;routes.js</text>
</g>
<!-- integrationroutes -->
<g id="node4" class="node">
<title>integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1520.39,-228 1113.61,-228 1113.61,-48 1520.39,-48 1520.39,-228"/>
<text xml:space="preserve" text-anchor="start" x="1266.99" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="1153.61" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态；src/routes/integration&#45;routes.js</text>
</g>
<!-- handoffservice -->
<g id="node5" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2008.46,-550.8 1577.54,-550.8 1577.54,-370.8 2008.46,-370.8 2008.46,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1751.33" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="1617.54" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff&#45;service.js</text>
</g>
<!-- materialroutes -->
<g id="node6" class="node">
<title>materialroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2007.79,-228 1630.21,-228 1630.21,-48 2007.79,-48 2007.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="1785.66" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">素材路由</text>
<text xml:space="preserve" text-anchor="start" x="1670.21" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">美妆素材接入接口；src/routes/material&#45;routes.js</text>
</g>
<!-- operator -->
<g id="node7" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="928.02,-882.8 607.98,-882.8 607.98,-702.8 928.02,-702.8 928.02,-882.8"/>
<text xml:space="preserve" text-anchor="start" x="734.66" y="-795.8" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
<text xml:space="preserve" text-anchor="start" x="686.73" y="-772.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">处理升级工单的人工运营人员</text>
</g>
<!-- operatorui&#45;&gt;handoffroutes -->
<g id="edge2" class="edge">
<title>operatorui&#45;&gt;handoffroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M620.24,-370.87C549.04,-328.01 463.63,-276.6 391.34,-233.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="392.96,-231.01 385.18,-229.39 390.25,-235.51 392.96,-231.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="517.48,-288 517.48,-310.8 570.16,-310.8 570.16,-288 517.48,-288"/>
<text xml:space="preserve" text-anchor="start" x="520.48" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">管理工单</text>
</g>
<!-- operatorui&#45;&gt;knowledgeroutes -->
<g id="edge3" class="edge">
<title>operatorui&#45;&gt;knowledgeroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M768,-370.87C768,-329.67 768,-280.56 768,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="770.63,-238.36 768,-230.86 765.38,-238.36 770.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="768,-288 768,-310.8 832.34,-310.8 832.34,-288 768,-288"/>
<text xml:space="preserve" text-anchor="start" x="771" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">运营知识库</text>
</g>
<!-- operatorui&#45;&gt;integrationroutes -->
<g id="edge4" class="edge">
<title>operatorui&#45;&gt;integrationroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M920.2,-370.87C993.54,-328.01 1081.51,-276.6 1155.97,-233.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1157.22,-235.41 1162.37,-229.36 1154.57,-230.87 1157.22,-235.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1058.96,-288 1058.96,-310.8 1111.64,-310.8 1111.64,-288 1058.96,-288"/>
<text xml:space="preserve" text-anchor="start" x="1061.96" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">查看状态</text>
</g>
<!-- handoffservice&#45;&gt;materialroutes -->
<!-- operator&#45;&gt;operatorui -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M768,-702.93C768,-659.1 768,-606.08 768,-560.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="770.63,-561.07 768,-553.57 765.38,-561.07 770.63,-561.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="768,-620 768,-642.8 797.34,-642.8 797.34,-620 768,-620"/>
<text xml:space="preserve" text-anchor="start" x="771" y="-625.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">使用</text>
</g>
</g>
</svg>
`;case`chatToAnswer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3827pt" height="845pt"
 viewBox="0.00 0.00 3827.00 845.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 830.05)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-490 0,-490 0,-310 320.04,-310 320.04,-490"/>
<text xml:space="preserve" text-anchor="start" x="143.35" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
<text xml:space="preserve" text-anchor="start" x="78.75" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">通过企业微信咨询的终端用户</text>
</g>
<!-- fakewechat -->
<g id="node2" class="node">
<title>fakewechat</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1067.49,-490 549.05,-490 549.05,-310 1067.49,-310 1067.49,-490"/>
<text xml:space="preserve" text-anchor="start" x="758.26" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">模拟微信入口</text>
<text xml:space="preserve" text-anchor="start" x="589.05" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">保留用于回归验证的本地消息入口；src/services/fake&#45;wechat&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node3" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1734.92,-490 1273.16,-490 1273.16,-310 1734.92,-310 1734.92,-490"/>
<text xml:space="preserve" text-anchor="start" x="1462.37" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1313.16" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- answerloop -->
<g id="node4" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2510.93,-729 1996.63,-729 1996.63,-549 2510.93,-549 2510.93,-729"/>
<text xml:space="preserve" text-anchor="start" x="2203.77" y="-642" font-family="Arial" font-size="20.00" fill="#eff6ff">知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="2036.63" y="-619" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索增强的应答循环；src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node5" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3215.04,-815 2746.6,-815 2746.6,-635 3215.04,-635 3215.04,-815"/>
<text xml:space="preserve" text-anchor="start" x="2874.13" y="-737" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="2948.73" y="-714" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2786.6" y="-696" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- ragflow -->
<g id="node6" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3796.46,-815 3476.42,-815 3476.42,-635 3796.46,-635 3796.46,-815"/>
<text xml:space="preserve" text-anchor="start" x="3565.87" y="-728" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="3580.59" y="-705" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- replypolicy -->
<g id="node7" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3221.69,-508 2739.94,-508 2739.94,-328 3221.69,-328 3221.69,-508"/>
<text xml:space="preserve" text-anchor="start" x="2947.48" y="-421" font-family="Arial" font-size="20.00" fill="#eff6ff">回复策略</text>
<text xml:space="preserve" text-anchor="start" x="2779.94" y="-398" font-family="Arial" font-size="15.00" fill="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- wechatplatform -->
<g id="node8" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2460.9,-180 2046.67,-180 2046.67,0 2460.9,0 2460.9,-180"/>
<text xml:space="preserve" text-anchor="start" x="2187.1" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="2086.67" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- wechatwork -->
<g id="node9" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3140.84,-180 2820.8,-180 2820.8,0 3140.84,0 3140.84,-180"/>
<text xml:space="preserve" text-anchor="start" x="2947.48" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">企业微信</text>
<text xml:space="preserve" text-anchor="start" x="2930.81" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">企业微信客服平台</text>
</g>
<!-- customer&#45;&gt;fakewechat -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;fakewechat</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.94,-400C385.88,-400 464.26,-400 538.66,-400"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.6,-402.63 546.1,-400 538.6,-397.38 538.6,-402.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-403 383.04,-435.8 407.04,-435.8 407.04,-403 383.04,-403"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-416.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-403 410.04,-435.8 486.05,-435.8 486.05,-403 410.04,-403"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-413.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">提出美妆咨询</text>
</g>
<!-- fakewechat&#45;&gt;answerorchestrator -->
<g id="edge2" class="edge">
<title>fakewechat&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1067.11,-400C1131.19,-400 1199.61,-400 1262.81,-400"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1262.79,-402.63 1270.29,-400 1262.79,-397.38 1262.79,-402.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1130.49,-403 1130.49,-435.8 1154.49,-435.8 1154.49,-403 1130.49,-403"/>
<text xml:space="preserve" text-anchor="start" x="1138.6" y="-416.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1157.49,-403 1157.49,-435.8 1210.16,-435.8 1210.16,-403 1157.49,-403"/>
<text xml:space="preserve" text-anchor="start" x="1160.49" y="-413.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">转发消息</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge3" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1734.72,-473.41C1814.44,-498.89 1904.48,-527.67 1986.87,-554.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1986.05,-556.5 1993.99,-556.28 1987.65,-551.5 1986.05,-556.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1797.92,-536.81 1797.92,-569.61 1821.92,-569.61 1821.92,-536.81 1797.92,-536.81"/>
<text xml:space="preserve" text-anchor="start" x="1806.02" y="-550.01" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1824.92,-536.81 1824.92,-569.61 1933.63,-569.61 1933.63,-536.81 1824.92,-536.81"/>
<text xml:space="preserve" text-anchor="start" x="1827.92" y="-547.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">requests answer</text>
</g>
<!-- answerorchestrator&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerorchestrator&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1745.16,-402.93C2019.51,-406.28 2465.82,-411.73 2740.02,-415.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1745.22,-400.31 1737.69,-402.84 1745.16,-405.56 1745.22,-400.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2202.28,-415.23 2202.28,-448.03 2226.28,-448.03 2226.28,-415.23 2202.28,-415.23"/>
<text xml:space="preserve" text-anchor="start" x="2210.38" y="-428.43" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2229.28,-415.23 2229.28,-448.03 2305.29,-448.03 2305.29,-415.23 2229.28,-415.23"/>
<text xml:space="preserve" text-anchor="start" x="2232.28" y="-426.03" font-family="Arial" font-size="14.00" fill="#c9c9c9">允许自动回复</text>
</g>
<!-- answerorchestrator&#45;&gt;wechatplatform -->
<g id="edge9" class="edge">
<title>answerorchestrator&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1718.67,-310.01C1744.35,-299.26 1770.22,-288.47 1794.92,-278.2 1874.04,-245.32 1960.98,-209.5 2037.64,-178.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2038.2,-180.64 2044.14,-175.36 2036.2,-175.78 2038.2,-180.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1825.94,-281.2 1825.94,-314 1849.94,-314 1849.94,-281.2 1825.94,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1834.04" y="-294.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1852.94,-281.2 1852.94,-314 1905.61,-314 1905.61,-281.2 1852.94,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1855.94" y="-292" font-family="Arial" font-size="14.00" fill="#c9c9c9">发送回复</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge4" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2510.91,-669.38C2584.28,-678.08 2664.03,-687.54 2736.6,-696.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2736.02,-698.73 2743.78,-697 2736.64,-693.51 2736.02,-698.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2573.93,-690.15 2573.93,-722.95 2597.93,-722.95 2597.93,-690.15 2573.93,-690.15"/>
<text xml:space="preserve" text-anchor="start" x="2582.04" y="-703.35" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2600.93,-690.15 2600.93,-722.95 2676.94,-722.95 2676.94,-690.15 2600.93,-690.15"/>
<text xml:space="preserve" text-anchor="start" x="2603.93" y="-700.95" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索候选知识</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge7" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2510.91,-560.93C2582.14,-539.22 2659.38,-515.67 2730.23,-494.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2730.88,-496.62 2737.28,-491.93 2729.35,-491.6 2730.88,-496.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2579.77,-544.73 2579.77,-577.53 2603.77,-577.53 2603.77,-544.73 2579.77,-544.73"/>
<text xml:space="preserve" text-anchor="start" x="2587.87" y="-557.93" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2606.77,-544.73 2606.77,-577.53 2671.11,-577.53 2671.11,-544.73 2606.77,-544.73"/>
<text xml:space="preserve" text-anchor="start" x="2609.77" y="-555.53" font-family="Arial" font-size="14.00" fill="#c9c9c9">评估置信度</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge5" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3215.02,-725C3298,-725 3389.77,-725 3466.35,-725"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3466.04,-727.63 3473.54,-725 3466.04,-722.38 3466.04,-727.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3284.69,-728 3284.69,-760.8 3308.69,-760.8 3308.69,-728 3284.69,-728"/>
<text xml:space="preserve" text-anchor="start" x="3292.79" y="-741.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3311.69,-728 3311.69,-760.8 3413.42,-760.8 3413.42,-728 3311.69,-728"/>
<text xml:space="preserve" text-anchor="start" x="3314.69" y="-738.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries dataset</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge6" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3225.28,-662.54C3287.57,-653.59 3354.46,-650.09 3416.42,-659.2 3436.15,-662.1 3456.58,-666.4 3476.67,-671.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3224.94,-659.93 3217.91,-663.63 3225.72,-665.12 3224.94,-659.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3297.54,-662.2 3297.54,-695 3321.54,-695 3321.54,-662.2 3297.54,-662.2"/>
<text xml:space="preserve" text-anchor="start" x="3305.65" y="-675.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3324.54,-662.2 3324.54,-695 3400.56,-695 3400.56,-662.2 3324.54,-662.2"/>
<text xml:space="preserve" text-anchor="start" x="3327.54" y="-673" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回知识片段</text>
</g>
<!-- wechatplatform&#45;&gt;wechatwork -->
<g id="edge10" class="edge">
<title>wechatplatform&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2460.61,-90C2571.32,-90 2706.17,-90 2810.7,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2810.51,-92.63 2818.01,-90 2810.51,-87.38 2810.51,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2581.81,-93 2581.81,-125.8 2613.39,-125.8 2613.39,-93 2581.81,-93"/>
<text xml:space="preserve" text-anchor="start" x="2589.81" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2616.39,-93 2616.39,-125.8 2669.06,-125.8 2669.06,-93 2616.39,-93"/>
<text xml:space="preserve" text-anchor="start" x="2619.39" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">发送消息</text>
</g>
</g>
</svg>
`;case`retrievalSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="4226pt" height="526pt"
 viewBox="0.00 0.00 4226.00 526.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 511.05)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="143.35" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">客户</text>
<text xml:space="preserve" text-anchor="start" x="78.75" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">通过企业微信咨询的终端用户</text>
</g>
<!-- wechatcallback -->
<g id="node2" class="node">
<title>wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="951.64,-180 525.72,-180 525.72,0 951.64,0 951.64,-180"/>
<text xml:space="preserve" text-anchor="start" x="672" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="565.72" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收加密的企业微信回调；src/routes/wechat&#45;kf&#45;routes.js</text>
</g>
<!-- wechatplatform -->
<g id="node3" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1548.21,-180 1133.98,-180 1133.98,0 1548.21,0 1548.21,-180"/>
<text xml:space="preserve" text-anchor="start" x="1274.41" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="1173.98" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node4" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2227.31,-180 1765.55,-180 1765.55,0 2227.31,0 2227.31,-180"/>
<text xml:space="preserve" text-anchor="start" x="1954.76" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1805.55" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- answerloop -->
<g id="node5" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2947.28,-377 2432.98,-377 2432.98,-197 2947.28,-197 2947.28,-377"/>
<text xml:space="preserve" text-anchor="start" x="2640.12" y="-290" font-family="Arial" font-size="20.00" fill="#eff6ff">知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="2472.98" y="-267" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索增强的应答循环；src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node6" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3651.38,-496 3182.94,-496 3182.94,-316 3651.38,-316 3651.38,-496"/>
<text xml:space="preserve" text-anchor="start" x="3310.48" y="-418" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="3385.08" y="-395" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="3222.94" y="-377" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- ragflow -->
<g id="node7" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4195.42,-496 3875.38,-496 3875.38,-316 4195.42,-316 4195.42,-496"/>
<text xml:space="preserve" text-anchor="start" x="3964.83" y="-409" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="3979.56" y="-386" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- replypolicy -->
<g id="node8" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3658.03,-189 3176.29,-189 3176.29,-9 3658.03,-9 3658.03,-189"/>
<text xml:space="preserve" text-anchor="start" x="3383.82" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">回复策略</text>
<text xml:space="preserve" text-anchor="start" x="3216.29" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- customer&#45;&gt;wechatcallback -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;wechatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.74,-90C380.18,-90 450.23,-90 515.49,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="515.39,-92.63 522.89,-90 515.39,-87.38 515.39,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 462.72,-125.8 462.72,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">发送问题</text>
</g>
<!-- wechatcallback&#45;&gt;wechatplatform -->
<g id="edge2" class="edge">
<title>wechatcallback&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M951.36,-90C1007.22,-90 1067.57,-90 1123.68,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1123.58,-92.63 1131.08,-90 1123.58,-87.38 1123.58,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1014.64,-93 1014.64,-125.8 1038.64,-125.8 1038.64,-93 1014.64,-93"/>
<text xml:space="preserve" text-anchor="start" x="1022.75" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1041.64,-93 1041.64,-125.8 1070.98,-125.8 1070.98,-93 1041.64,-93"/>
<text xml:space="preserve" text-anchor="start" x="1044.64" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">解密</text>
</g>
<!-- wechatplatform&#45;&gt;answerorchestrator -->
<g id="edge3" class="edge">
<title>wechatplatform&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1547.92,-90C1613.73,-90 1687.17,-90 1755.22,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1755.12,-92.63 1762.62,-90 1755.12,-87.38 1755.12,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1611.21,-93 1611.21,-125.8 1635.21,-125.8 1635.21,-93 1611.21,-93"/>
<text xml:space="preserve" text-anchor="start" x="1619.32" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1638.21,-93 1638.21,-125.8 1702.55,-125.8 1702.55,-93 1638.21,-93"/>
<text xml:space="preserve" text-anchor="start" x="1641.21" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">归一化消息</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge4" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2227.28,-155.46C2290.1,-173.35 2358.69,-192.89 2423.34,-211.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2422.42,-213.77 2430.35,-213.3 2423.86,-208.72 2422.42,-213.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2290.31,-197.41 2290.31,-230.21 2314.31,-230.21 2314.31,-197.41 2290.31,-197.41"/>
<text xml:space="preserve" text-anchor="start" x="2298.41" y="-210.61" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2317.31,-197.41 2317.31,-230.21 2369.98,-230.21 2369.98,-197.41 2317.31,-197.41"/>
<text xml:space="preserve" text-anchor="start" x="2320.31" y="-208.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求应答</text>
</g>
<!-- answerorchestrator&#45;&gt;replypolicy -->
<g id="edge9" class="edge">
<title>answerorchestrator&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2237.35,-91.52C2498.85,-93.18 2914.82,-95.82 3176.3,-97.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2237.5,-88.9 2229.98,-91.48 2237.46,-94.15 2237.5,-88.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2650.29,-98.98 2650.29,-131.78 2674.29,-131.78 2674.29,-98.98 2650.29,-98.98"/>
<text xml:space="preserve" text-anchor="start" x="2658.4" y="-112.18" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2677.29,-98.98 2677.29,-131.78 2729.97,-131.78 2729.97,-98.98 2677.29,-98.98"/>
<text xml:space="preserve" text-anchor="start" x="2680.29" y="-109.78" font-family="Arial" font-size="14.00" fill="#c9c9c9">决策结果</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge5" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2946.99,-358.06C2967.3,-362.51 2987.57,-366.57 3007.28,-370 3060.57,-379.27 3118.2,-386.21 3172.92,-391.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3172.37,-393.97 3180.08,-392.05 3172.86,-388.74 3172.37,-393.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3021.95,-387.43 3021.95,-420.23 3045.95,-420.23 3045.95,-387.43 3021.95,-387.43"/>
<text xml:space="preserve" text-anchor="start" x="3030.06" y="-400.63" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3048.95,-387.43 3048.95,-420.23 3101.62,-420.23 3101.62,-387.43 3048.95,-387.43"/>
<text xml:space="preserve" text-anchor="start" x="3051.95" y="-398.23" font-family="Arial" font-size="14.00" fill="#c9c9c9">发起检索</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge7" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2957.29,-286.04C3010.28,-289.14 3065.29,-294.72 3116.29,-304.2 3138.19,-308.27 3160.66,-313.6 3182.97,-319.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2957.73,-283.44 2950.1,-285.64 2957.44,-288.68 2957.73,-283.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3010.28,-307.2 3010.28,-340 3034.28,-340 3034.28,-307.2 3010.28,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="3018.39" y="-320.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3037.28,-307.2 3037.28,-340 3113.29,-340 3113.29,-307.2 3037.28,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="3040.28" y="-318" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回知识片段</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2947.26,-220.59C3018.49,-202.12 3095.73,-182.09 3166.58,-163.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3167,-166.32 3173.6,-161.9 3165.68,-161.24 3167,-166.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3027.78,-207.26 3027.78,-240.06 3051.78,-240.06 3051.78,-207.26 3027.78,-207.26"/>
<text xml:space="preserve" text-anchor="start" x="3035.89" y="-220.46" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3054.78,-207.26 3054.78,-240.06 3095.79,-240.06 3095.79,-207.26 3054.78,-207.26"/>
<text xml:space="preserve" text-anchor="start" x="3057.78" y="-218.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">置信度</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge6" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3651.14,-406C3722.31,-406 3799.19,-406 3865.27,-406"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3865.25,-408.63 3872.75,-406 3865.25,-403.38 3865.25,-408.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3721.03,-409 3721.03,-441.8 3745.03,-441.8 3745.03,-409 3721.03,-409"/>
<text xml:space="preserve" text-anchor="start" x="3729.14" y="-422.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3748.03,-409 3748.03,-441.8 3812.38,-441.8 3812.38,-409 3748.03,-409"/>
<text xml:space="preserve" text-anchor="start" x="3751.03" y="-419.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">查询知识库</text>
</g>
</g>
</svg>
`;case`evaluationSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1813pt" height="509pt"
 viewBox="0.00 0.00 1813.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 494.05)">
<!-- answerorchestrator -->
<g id="node1" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="461.75,-334 0,-334 0,-154 461.75,-154 461.75,-334"/>
<text xml:space="preserve" text-anchor="start" x="189.2" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- evaluationgate -->
<g id="node2" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1060.87,-334 667.43,-334 667.43,-154 1060.87,-154 1060.87,-334"/>
<text xml:space="preserve" text-anchor="start" x="814.14" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">评测���禁</text>
<text xml:space="preserve" text-anchor="start" x="707.43" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁；src/services/evaluation&#45;gate.js</text>
</g>
<!-- store -->
<g id="node3" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1702.23,-462.64C1702.23,-471.67 1630.51,-479 1542.21,-479 1453.92,-479 1382.19,-471.67 1382.19,-462.64 1382.19,-462.64 1382.19,-315.36 1382.19,-315.36 1382.19,-306.33 1453.92,-299 1542.21,-299 1630.51,-299 1702.23,-306.33 1702.23,-315.36 1702.23,-315.36 1702.23,-462.64 1702.23,-462.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1702.23,-462.64C1702.23,-453.61 1630.51,-446.27 1542.21,-446.27 1453.92,-446.27 1382.19,-453.61 1382.19,-462.64"/>
<text xml:space="preserve" text-anchor="start" x="1508.87" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1405.1" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- replypolicy -->
<g id="node4" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1783.08,-180 1301.34,-180 1301.34,0 1783.08,0 1783.08,-180"/>
<text xml:space="preserve" text-anchor="start" x="1508.87" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">回复策略</text>
<text xml:space="preserve" text-anchor="start" x="1341.34" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- answerorchestrator&#45;&gt;evaluationgate -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.57,-244C525.52,-244 594.56,-244 657.06,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="656.91,-246.63 664.41,-244 656.91,-241.38 656.91,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="524.75,-247 524.75,-279.8 548.75,-279.8 548.75,-247 524.75,-247"/>
<text xml:space="preserve" text-anchor="start" x="532.86" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.75,-247 551.75,-279.8 604.43,-279.8 604.43,-247 551.75,-247"/>
<text xml:space="preserve" text-anchor="start" x="554.75" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">执行评测</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge2" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1060.69,-285.94C1158.9,-307 1276.75,-332.28 1371.15,-352.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1370.53,-355.08 1378.42,-354.08 1371.64,-349.94 1370.53,-355.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1141.27,-323.85 1141.27,-356.65 1165.27,-356.65 1165.27,-323.85 1141.27,-323.85"/>
<text xml:space="preserve" text-anchor="start" x="1149.38" y="-337.05" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1168.27,-323.85 1168.27,-356.65 1220.94,-356.65 1220.94,-323.85 1168.27,-323.85"/>
<text xml:space="preserve" text-anchor="start" x="1171.27" y="-334.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取候选</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge4" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1060.55,-218.74C1119.35,-216.38 1183.58,-219.09 1241.34,-233.2 1295.8,-246.5 1351.38,-271.58 1399.66,-297.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1398.1,-299.93 1405.94,-301.24 1400.63,-295.33 1398.1,-299.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1123.87,-236.2 1123.87,-269 1159.33,-269 1159.33,-236.2 1123.87,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="1131.87" y="-249.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3.2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1162.33,-236.2 1162.33,-269 1238.34,-269 1238.34,-236.2 1162.33,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="1165.33" y="-247" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取策略状态</text>
</g>
<!-- evaluationgate&#45;&gt;replypolicy -->
<g id="edge3" class="edge">
<title>evaluationgate&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1060.83,-170.24C1080.95,-163.95 1101.22,-158.12 1120.87,-153.2 1175.49,-139.53 1234.88,-128.4 1291.36,-119.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1291.5,-122.13 1298.51,-118.39 1290.7,-116.95 1291.5,-122.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1135.54,-156.2 1135.54,-189 1171,-189 1171,-156.2 1135.54,-156.2"/>
<text xml:space="preserve" text-anchor="start" x="1143.54" y="-169.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3.1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1174,-156.2 1174,-189 1226.68,-189 1226.68,-156.2 1174,-156.2"/>
<text xml:space="preserve" text-anchor="start" x="1177" y="-167" font-family="Arial" font-size="14.00" fill="#c9c9c9">校验阈值</text>
</g>
</g>
</svg>
`;case`handoffSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1760pt" height="790pt"
 viewBox="0.00 0.00 1760.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 775.05)">
<!-- answerorchestrator -->
<g id="node1" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="461.75,-325 0,-325 0,-145 461.75,-145 461.75,-325"/>
<text xml:space="preserve" text-anchor="start" x="189.2" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- handoffservice -->
<g id="node2" class="node">
<title>handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1098.35,-325 667.43,-325 667.43,-145 1098.35,-145 1098.35,-325"/>
<text xml:space="preserve" text-anchor="start" x="841.22" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="707.43" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff&#45;service.js</text>
</g>
<!-- store -->
<g id="node3" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1682.84,-453.64C1682.84,-462.67 1611.11,-470 1522.82,-470 1434.52,-470 1362.8,-462.67 1362.8,-453.64 1362.8,-453.64 1362.8,-306.36 1362.8,-306.36 1362.8,-297.33 1434.52,-290 1522.82,-290 1611.11,-290 1682.84,-297.33 1682.84,-306.36 1682.84,-306.36 1682.84,-453.64 1682.84,-453.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1682.84,-453.64C1682.84,-444.61 1611.11,-437.27 1522.82,-437.27 1434.52,-437.27 1362.8,-444.61 1362.8,-453.64"/>
<text xml:space="preserve" text-anchor="start" x="1489.48" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1385.7" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- wechatplatform -->
<g id="node4" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1729.93,-180 1315.7,-180 1315.7,0 1729.93,0 1729.93,-180"/>
<text xml:space="preserve" text-anchor="start" x="1456.14" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="1355.7" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- operator -->
<g id="node5" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="390.9,-760 70.86,-760 70.86,-580 390.9,-580 390.9,-760"/>
<text xml:space="preserve" text-anchor="start" x="197.54" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
<text xml:space="preserve" text-anchor="start" x="149.61" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">处理升级工单的人工运营人员</text>
</g>
<!-- operatorui -->
<g id="node6" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1052.36,-760 713.42,-760 713.42,-580 1052.36,-580 1052.36,-760"/>
<text xml:space="preserve" text-anchor="start" x="810.08" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员 Console</text>
<text xml:space="preserve" text-anchor="start" x="737.44" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</text>
</g>
<!-- handoffroutes -->
<g id="node7" class="node">
<title>handoffroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1709.95,-760 1335.68,-760 1335.68,-580 1709.95,-580 1709.95,-760"/>
<text xml:space="preserve" text-anchor="start" x="1481.14" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工路由</text>
<text xml:space="preserve" text-anchor="start" x="1375.68" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">人工转接工单接口；src/routes/handoff&#45;routes.js</text>
</g>
<!-- answerorchestrator&#45;&gt;handoffservice -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;handoffservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.5,-235C525.01,-235 593.85,-235 657.08,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="657.06,-237.63 664.56,-235 657.06,-232.38 657.06,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="524.75,-238 524.75,-270.8 548.75,-270.8 548.75,-238 524.75,-238"/>
<text xml:space="preserve" text-anchor="start" x="532.86" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.75,-238 551.75,-270.8 604.43,-270.8 604.43,-238 551.75,-238"/>
<text xml:space="preserve" text-anchor="start" x="554.75" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">创建工单</text>
</g>
<!-- handoffservice&#45;&gt;store -->
<g id="edge2" class="edge">
<title>handoffservice&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1098.09,-283.69C1180.79,-302.48 1274.06,-323.68 1351.99,-341.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1351.06,-343.88 1358.96,-342.98 1352.23,-338.76 1351.06,-343.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1161.35,-319.18 1161.35,-351.98 1185.35,-351.98 1185.35,-319.18 1161.35,-319.18"/>
<text xml:space="preserve" text-anchor="start" x="1169.46" y="-332.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1188.35,-319.18 1188.35,-351.98 1252.7,-351.98 1252.7,-319.18 1188.35,-319.18"/>
<text xml:space="preserve" text-anchor="start" x="1191.35" y="-329.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">持久化工单</text>
</g>
<!-- handoffservice&#45;&gt;wechatplatform -->
<g id="edge3" class="edge">
<title>handoffservice&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1098.09,-186.31C1164.88,-171.13 1238.56,-154.38 1305.5,-139.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1306.07,-141.73 1312.8,-137.51 1304.91,-136.61 1306.07,-141.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1167.19,-174.18 1167.19,-206.98 1191.19,-206.98 1191.19,-174.18 1167.19,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="1175.3" y="-187.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1194.19,-174.18 1194.19,-206.98 1246.86,-206.98 1246.86,-174.18 1194.19,-174.18"/>
<text xml:space="preserve" text-anchor="start" x="1197.19" y="-184.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">通知客户</text>
</g>
<!-- operator&#45;&gt;operatorui -->
<g id="edge4" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M390.89,-670C485.36,-670 605.41,-670 703.16,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="702.92,-672.63 710.42,-670 702.92,-667.38 702.92,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="524.75,-673 524.75,-705.8 548.75,-705.8 548.75,-673 524.75,-673"/>
<text xml:space="preserve" text-anchor="start" x="532.86" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.75,-673 551.75,-705.8 604.43,-705.8 604.43,-673 551.75,-673"/>
<text xml:space="preserve" text-anchor="start" x="554.75" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">打开工单</text>
</g>
<!-- operatorui&#45;&gt;handoffroutes -->
<g id="edge5" class="edge">
<title>operatorui&#45;&gt;handoffroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1052.33,-670C1136.22,-670 1238.13,-670 1325.54,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1325.32,-672.63 1332.82,-670 1325.32,-667.38 1325.32,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1167.19,-673 1167.19,-705.8 1191.19,-705.8 1191.19,-673 1167.19,-673"/>
<text xml:space="preserve" text-anchor="start" x="1175.3" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1194.19,-673 1194.19,-705.8 1246.86,-705.8 1246.86,-673 1194.19,-673"/>
<text xml:space="preserve" text-anchor="start" x="1197.19" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">认领工单</text>
</g>
</g>
</svg>
`;case`knowledgeSyncSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3607pt" height="790pt"
 viewBox="0.00 0.00 3607.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 775.05)">
<!-- operator -->
<g id="node1" class="node">
<title>operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-615 0,-615 0,-435 320.04,-435 320.04,-615"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-528" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员</text>
<text xml:space="preserve" text-anchor="start" x="78.75" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">处理升级工单的人工运营人员</text>
</g>
<!-- operatorui -->
<g id="node2" class="node">
<title>operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="864.66,-615 525.72,-615 525.72,-435 864.66,-435 864.66,-615"/>
<text xml:space="preserve" text-anchor="start" x="622.38" y="-528" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员 Console</text>
<text xml:space="preserve" text-anchor="start" x="549.73" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</text>
</g>
<!-- knowledgeroutes -->
<g id="node3" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1541.29,-615 1070.33,-615 1070.33,-435 1541.29,-435 1541.29,-615"/>
<text xml:space="preserve" text-anchor="start" x="1264.14" y="-528" font-family="Arial" font-size="20.00" fill="#eff6ff">知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="1110.33" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge&#45;routes.js</text>
</g>
<!-- knowledgescan -->
<g id="node4" class="node">
<title>knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2197.07,-760 1770.31,-760 1770.31,-580 2197.07,-580 2197.07,-760"/>
<text xml:space="preserve" text-anchor="start" x="1950.35" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="1810.31" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识；src/services/knowledge&#45;scan&#45;service.js</text>
</g>
<!-- governance -->
<g id="node5" class="node">
<title>governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2954.07,-760 2468.1,-760 2468.1,-580 2954.07,-580 2954.07,-760"/>
<text xml:space="preserve" text-anchor="start" x="2677.75" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">知识治理</text>
<text xml:space="preserve" text-anchor="start" x="2508.1" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">发布决策与治理；src/services/knowledge&#45;governance&#45;service.js</text>
</g>
<!-- evaluationgate -->
<g id="node6" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3576.53,-760 3183.09,-760 3183.09,-580 3576.53,-580 3576.53,-760"/>
<text xml:space="preserve" text-anchor="start" x="3329.8" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">评测���禁</text>
<text xml:space="preserve" text-anchor="start" x="3223.09" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁；src/services/evaluation&#45;gate.js</text>
</g>
<!-- knowledgesync -->
<g id="node7" class="node">
<title>knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2191.23,-470 1776.15,-470 1776.15,-290 2191.23,-290 2191.23,-470"/>
<text xml:space="preserve" text-anchor="start" x="1950.35" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">知识同步</text>
<text xml:space="preserve" text-anchor="start" x="1927.43" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到</text>
<text xml:space="preserve" text-anchor="start" x="1816.15" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow；src/services/knowledge&#45;sync&#45;service.js</text>
</g>
<!-- llmwiki -->
<g id="node8" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2871.11,-470 2551.07,-470 2551.07,-290 2871.11,-290 2871.11,-470"/>
<text xml:space="preserve" text-anchor="start" x="2642.19" y="-383" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki 候选源</text>
<text xml:space="preserve" text-anchor="start" x="2633.99" y="-360" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM 生成的 wiki 候选来源</text>
</g>
<!-- ragflowknowledge -->
<g id="node9" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2945.31,-180 2476.87,-180 2476.87,0 2945.31,0 2945.31,-180"/>
<text xml:space="preserve" text-anchor="start" x="2604.4" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="2679" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2516.87" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- operator&#45;&gt;operatorui -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.9,-525C381.39,-525 452.07,-525 515.33,-525"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="515.29,-527.63 522.79,-525 515.29,-522.38 515.29,-527.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-528 383.04,-560.8 407.04,-560.8 407.04,-528 383.04,-528"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-541.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-528 410.04,-560.8 462.72,-560.8 462.72,-528 410.04,-528"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-538.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">触发同步</text>
</g>
<!-- operatorui&#45;&gt;knowledgeroutes -->
<g id="edge2" class="edge">
<title>operatorui&#45;&gt;knowledgeroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M864.51,-525C924.96,-525 994.42,-525 1060.03,-525"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1060,-527.63 1067.5,-525 1060,-522.38 1060,-527.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="927.66,-528 927.66,-560.8 951.66,-560.8 951.66,-528 927.66,-528"/>
<text xml:space="preserve" text-anchor="start" x="935.77" y="-541.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="954.66,-528 954.66,-560.8 1007.33,-560.8 1007.33,-528 954.66,-528"/>
<text xml:space="preserve" text-anchor="start" x="957.66" y="-538.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">请求同步</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgescan -->
<g id="edge3" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgescan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1540.83,-575.21C1612.05,-590.48 1690.09,-607.23 1760.5,-622.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1759.54,-624.81 1767.42,-623.82 1760.64,-619.68 1759.54,-624.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1610.13,-613.49 1610.13,-646.29 1634.13,-646.29 1634.13,-613.49 1610.13,-613.49"/>
<text xml:space="preserve" text-anchor="start" x="1618.24" y="-626.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1637.13,-613.49 1637.13,-646.29 1701.47,-646.29 1701.47,-613.49 1637.13,-613.49"/>
<text xml:space="preserve" text-anchor="start" x="1640.13" y="-624.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">扫描候选项</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgesync -->
<g id="edge6" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgesync</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1540.83,-474.79C1613.96,-459.11 1694.28,-441.87 1766.16,-426.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1766.5,-429.07 1773.28,-424.93 1765.4,-423.93 1766.5,-429.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1604.29,-464.18 1604.29,-496.98 1628.29,-496.98 1628.29,-464.18 1604.29,-464.18"/>
<text xml:space="preserve" text-anchor="start" x="1612.4" y="-477.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1631.29,-464.18 1631.29,-496.98 1707.31,-496.98 1707.31,-464.18 1631.29,-464.18"/>
<text xml:space="preserve" text-anchor="start" x="1634.29" y="-474.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">推送已批准项</text>
</g>
<!-- knowledgescan&#45;&gt;governance -->
<g id="edge4" class="edge">
<title>knowledgescan&#45;&gt;governance</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2196.94,-670C2278.71,-670 2372.87,-670 2458.03,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2457.84,-672.63 2465.34,-670 2457.84,-667.38 2457.84,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2260.07,-673 2260.07,-705.8 2284.07,-705.8 2284.07,-673 2260.07,-673"/>
<text xml:space="preserve" text-anchor="start" x="2268.18" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2287.07,-673 2287.07,-705.8 2405.1,-705.8 2405.1,-673 2287.07,-673"/>
<text xml:space="preserve" text-anchor="start" x="2290.07" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">submit for 决策结果</text>
</g>
<!-- governance&#45;&gt;evaluationgate -->
<g id="edge5" class="edge">
<title>governance&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2953.73,-670C3025.66,-670 3103.76,-670 3173.17,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3172.81,-672.63 3180.31,-670 3172.81,-667.38 3172.81,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3017.07,-673 3017.07,-705.8 3041.07,-705.8 3041.07,-673 3017.07,-673"/>
<text xml:space="preserve" text-anchor="start" x="3025.18" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3044.07,-673 3044.07,-705.8 3120.09,-705.8 3120.09,-673 3044.07,-673"/>
<text xml:space="preserve" text-anchor="start" x="3047.07" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">应用发布规则</text>
</g>
<!-- knowledgesync&#45;&gt;llmwiki -->
<g id="edge7" class="edge">
<title>knowledgesync&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2191.1,-380C2301.76,-380 2436.4,-380 2540.82,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2540.62,-382.63 2548.12,-380 2540.62,-377.38 2540.62,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2279.14,-383 2279.14,-415.8 2303.14,-415.8 2303.14,-383 2279.14,-383"/>
<text xml:space="preserve" text-anchor="start" x="2287.24" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2306.14,-383 2306.14,-415.8 2386.03,-415.8 2386.03,-383 2306.14,-383"/>
<text xml:space="preserve" text-anchor="start" x="2309.14" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">读取候选 wiki</text>
</g>
<!-- knowledgesync&#45;&gt;ragflowknowledge -->
<g id="edge8" class="edge">
<title>knowledgesync&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2191.1,-297.48C2279.79,-262.02 2383.89,-220.41 2475.49,-183.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2476.36,-186.27 2482.35,-181.04 2474.41,-181.39 2476.36,-186.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2286.91,-272.5 2286.91,-305.3 2310.91,-305.3 2310.91,-272.5 2286.91,-272.5"/>
<text xml:space="preserve" text-anchor="start" x="2295.02" y="-285.7" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2313.91,-272.5 2313.91,-305.3 2378.26,-305.3 2378.26,-272.5 2313.91,-272.5"/>
<text xml:space="preserve" text-anchor="start" x="2316.91" y="-283.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">写入数据集</text>
</g>
</g>
</svg>
`;case`configGatedFlow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1166pt" height="359pt"
 viewBox="0.00 0.00 1166.00 359.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 343.85)">
<!-- answerorchestrator -->
<g id="node1" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="461.75,-180 0,-180 0,0 461.75,0 461.75,-180"/>
<text xml:space="preserve" text-anchor="start" x="189.2" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node2" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1135.87,-180 667.43,-180 667.43,0 1135.87,0 1135.87,-180"/>
<text xml:space="preserve" text-anchor="start" x="794.96" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="869.56" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="707.43" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- answerorchestrator&#45;&gt;ragflowknowledge -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.56,-90C524.71,-90 593.39,-90 657.28,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="656.97,-92.63 664.47,-90 656.97,-87.38 656.97,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="524.75,-93 524.75,-125.8 548.75,-125.8 548.75,-93 524.75,-93"/>
<text xml:space="preserve" text-anchor="start" x="532.86" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.75,-93 551.75,-125.8 604.43,-125.8 604.43,-93 551.75,-93"/>
<text xml:space="preserve" text-anchor="start" x="554.75" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">尝试检索</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflowknowledge -->
<g id="edge2" class="edge">
<title>ragflowknowledge&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M843.04,-179.98C828.62,-236.28 848.16,-290 901.65,-290 951.9,-290 972.18,-242.58 962.5,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="965.09,-189.7 960.91,-182.94 959.96,-190.83 965.09,-189.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="850.14,-293 850.14,-325.8 874.14,-325.8 874.14,-293 850.14,-293"/>
<text xml:space="preserve" text-anchor="start" x="858.25" y="-306.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="877.14,-293 877.14,-325.8 953.16,-325.8 953.16,-293 877.14,-293"/>
<text xml:space="preserve" text-anchor="start" x="880.14" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">检查配置门控</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
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
<svg width="4034pt" height="845pt"
 viewBox="0.00 0.00 4034.00 845.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1140.68,-490 622.25,-490 622.25,-310 1140.68,-310 1140.68,-490"/>
<text xml:space="preserve" text-anchor="start" x="831.45" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">模拟微信入口</text>
<text xml:space="preserve" text-anchor="start" x="662.25" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">保留用于回归验证的本地消息入口；src/services/fake&#45;wechat&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node3" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1875.81,-490 1414.06,-490 1414.06,-310 1875.81,-310 1875.81,-490"/>
<text xml:space="preserve" text-anchor="start" x="1603.26" y="-403" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1454.06" y="-380" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- answerloop -->
<g id="node4" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2651.83,-729 2137.53,-729 2137.53,-549 2651.83,-549 2651.83,-729"/>
<text xml:space="preserve" text-anchor="start" x="2344.67" y="-642" font-family="Arial" font-size="20.00" fill="#eff6ff">知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="2177.53" y="-619" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索增强的应答循环；src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node5" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3411.21,-815 2942.77,-815 2942.77,-635 3411.21,-635 3411.21,-815"/>
<text xml:space="preserve" text-anchor="start" x="3070.3" y="-737" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="3144.9" y="-714" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2982.77" y="-696" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- ragflow -->
<g id="node6" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4004.29,-815 3684.25,-815 3684.25,-635 4004.29,-635 4004.29,-815"/>
<text xml:space="preserve" text-anchor="start" x="3773.7" y="-728" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="3788.43" y="-705" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- replypolicy -->
<g id="node7" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3417.86,-508 2936.12,-508 2936.12,-328 3417.86,-328 3417.86,-508"/>
<text xml:space="preserve" text-anchor="start" x="3143.65" y="-421" font-family="Arial" font-size="20.00" fill="#eff6ff">回复策略</text>
<text xml:space="preserve" text-anchor="start" x="2976.12" y="-398" font-family="Arial" font-size="15.00" fill="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- wechatplatform -->
<g id="node8" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2601.79,-180 2187.56,-180 2187.56,0 2601.79,0 2601.79,-180"/>
<text xml:space="preserve" text-anchor="start" x="2328" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="2227.56" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- wechatwork -->
<g id="node9" class="node">
<title>wechatwork</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3337.01,-180 3016.97,-180 3016.97,0 3337.01,0 3337.01,-180"/>
<text xml:space="preserve" text-anchor="start" x="3143.65" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">企业微信</text>
<text xml:space="preserve" text-anchor="start" x="3126.98" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">企业微信客服平台</text>
</g>
<!-- customer&#45;&gt;fakewechat -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;fakewechat</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.8,-400C405.52,-400 513.67,-400 612.06,-400"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="611.94,-402.63 619.44,-400 611.94,-397.38 611.94,-402.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-403 383.04,-435.8 407.04,-435.8 407.04,-403 383.04,-403"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-416.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-403 410.04,-435.8 559.25,-435.8 559.25,-403 410.04,-403"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-413.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks a beauty question</text>
</g>
<!-- fakewechat&#45;&gt;answerorchestrator -->
<g id="edge2" class="edge">
<title>fakewechat&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1140.53,-400C1225.73,-400 1320.11,-400 1403.91,-400"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1403.81,-402.63 1411.31,-400 1403.81,-397.38 1403.81,-402.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1203.68,-403 1203.68,-435.8 1227.68,-435.8 1227.68,-403 1203.68,-403"/>
<text xml:space="preserve" text-anchor="start" x="1211.79" y="-416.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1230.68,-403 1230.68,-435.8 1351.06,-435.8 1351.06,-403 1230.68,-403"/>
<text xml:space="preserve" text-anchor="start" x="1233.68" y="-413.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards message</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge3" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1875.62,-473.41C1955.33,-498.89 2045.37,-527.67 2127.76,-554.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2126.94,-556.5 2134.89,-556.28 2128.54,-551.5 2126.94,-556.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1938.81,-536.81 1938.81,-569.61 1962.81,-569.61 1962.81,-536.81 1938.81,-536.81"/>
<text xml:space="preserve" text-anchor="start" x="1946.92" y="-550.01" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1965.81,-536.81 1965.81,-569.61 2074.53,-569.61 2074.53,-536.81 1965.81,-536.81"/>
<text xml:space="preserve" text-anchor="start" x="1968.81" y="-547.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">requests answer</text>
</g>
<!-- answerorchestrator&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerorchestrator&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1885.53,-402.82C2172.28,-406.19 2649.57,-411.81 2936.34,-415.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1885.97,-400.2 1878.44,-402.74 1885.91,-405.45 1885.97,-400.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2321.37,-414.66 2321.37,-447.46 2345.37,-447.46 2345.37,-414.66 2321.37,-414.66"/>
<text xml:space="preserve" text-anchor="start" x="2329.48" y="-427.86" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2348.37,-414.66 2348.37,-447.46 2467.99,-447.46 2467.99,-414.66 2348.37,-414.66"/>
<text xml:space="preserve" text-anchor="start" x="2351.37" y="-425.46" font-family="Arial" font-size="14.00" fill="#c9c9c9">auto&#45;reply allowed</text>
</g>
<!-- answerorchestrator&#45;&gt;wechatplatform -->
<g id="edge9" class="edge">
<title>answerorchestrator&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1859.57,-310.01C1885.25,-299.26 1911.11,-288.47 1935.81,-278.2 2014.94,-245.32 2101.87,-209.5 2178.54,-178.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2179.09,-180.64 2185.04,-175.36 2177.1,-175.78 2179.09,-180.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1954.37,-281.2 1954.37,-314 1978.37,-314 1978.37,-281.2 1954.37,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1962.48" y="-294.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1981.37,-281.2 1981.37,-314 2058.97,-314 2058.97,-281.2 1981.37,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="1984.37" y="-292" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends reply</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge4" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2651.72,-667.22C2742.1,-677.18 2843.42,-688.35 2932.71,-698.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2932.23,-700.78 2939.97,-698.99 2932.81,-695.56 2932.23,-700.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2714.83,-692.7 2714.83,-725.5 2738.83,-725.5 2738.83,-692.7 2714.83,-692.7"/>
<text xml:space="preserve" text-anchor="start" x="2722.93" y="-705.9" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2741.83,-692.7 2741.83,-725.5 2873.12,-725.5 2873.12,-692.7 2741.83,-692.7"/>
<text xml:space="preserve" text-anchor="start" x="2744.83" y="-703.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieves candidates</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge7" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2651.72,-566.48C2739.86,-541.52 2838.39,-513.61 2926.03,-488.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2926.7,-491.33 2933.21,-486.76 2925.27,-486.28 2926.7,-491.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2719.88,-551.29 2719.88,-584.09 2743.88,-584.09 2743.88,-551.29 2719.88,-551.29"/>
<text xml:space="preserve" text-anchor="start" x="2727.99" y="-564.49" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2746.88,-551.29 2746.88,-584.09 2868.06,-584.09 2868.06,-551.29 2746.88,-551.29"/>
<text xml:space="preserve" text-anchor="start" x="2749.88" y="-562.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks confidence</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge5" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3411.14,-725C3497.79,-725 3594.37,-725 3674.21,-725"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3673.83,-727.63 3681.33,-725 3673.83,-722.38 3673.83,-727.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3486.69,-728 3486.69,-760.8 3510.69,-760.8 3510.69,-728 3486.69,-728"/>
<text xml:space="preserve" text-anchor="start" x="3494.79" y="-741.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3513.69,-728 3513.69,-760.8 3615.42,-760.8 3615.42,-728 3513.69,-728"/>
<text xml:space="preserve" text-anchor="start" x="3516.69" y="-738.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queries dataset</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge6" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3421.14,-663.19C3487.05,-653.52 3558.38,-649.52 3624.25,-659.2 3643.99,-662.1 3664.42,-666.4 3684.5,-671.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3421.05,-660.55 3414.03,-664.27 3421.84,-665.74 3421.05,-660.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3480.86,-662.2 3480.86,-695 3504.86,-695 3504.86,-662.2 3480.86,-662.2"/>
<text xml:space="preserve" text-anchor="start" x="3488.96" y="-675.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3507.86,-662.2 3507.86,-695 3621.25,-695 3621.25,-662.2 3507.86,-662.2"/>
<text xml:space="preserve" text-anchor="start" x="3510.86" y="-673" font-family="Arial" font-size="14.00" fill="#c9c9c9">returns passages</text>
</g>
<!-- wechatplatform&#45;&gt;wechatwork -->
<g id="edge10" class="edge">
<title>wechatplatform&#45;&gt;wechatwork</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2601.72,-90C2728.07,-90 2887.86,-90 3006.79,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3006.55,-92.63 3014.05,-90 3006.55,-87.38 3006.55,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2726.61,-93 2726.61,-125.8 2758.18,-125.8 2758.18,-93 2726.61,-93"/>
<text xml:space="preserve" text-anchor="start" x="2734.61" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2761.18,-93 2761.18,-125.8 2861.34,-125.8 2861.34,-93 2761.18,-93"/>
<text xml:space="preserve" text-anchor="start" x="2764.18" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">posts message</text>
</g>
</g>
</svg>
`;case`retrievalSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="4399pt" height="526pt"
 viewBox="0.00 0.00 4399.00 526.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="999.14,-180 573.22,-180 573.22,0 999.14,0 999.14,-180"/>
<text xml:space="preserve" text-anchor="start" x="719.5" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="613.22" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收加密的企业微信回调；src/routes/wechat&#45;kf&#45;routes.js</text>
</g>
<!-- wechatplatform -->
<g id="node3" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1625.29,-180 1211.05,-180 1211.05,0 1625.29,0 1625.29,-180"/>
<text xml:space="preserve" text-anchor="start" x="1351.49" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="1251.05" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
</g>
<!-- answerorchestrator -->
<g id="node4" class="node">
<title>answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2375.21,-180 1913.46,-180 1913.46,0 2375.21,0 2375.21,-180"/>
<text xml:space="preserve" text-anchor="start" x="2102.66" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1953.46" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动回复还是转人工；src/services/answer&#45;orchestrator.js</text>
</g>
<!-- answerloop -->
<g id="node5" class="node">
<title>answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3146.54,-377 2632.24,-377 2632.24,-197 3146.54,-197 3146.54,-377"/>
<text xml:space="preserve" text-anchor="start" x="2839.38" y="-290" font-family="Arial" font-size="20.00" fill="#eff6ff">知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="2672.24" y="-267" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索增强的应答循环；src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
</g>
<!-- ragflowknowledge -->
<g id="node6" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3848.35,-496 3379.91,-496 3379.91,-316 3848.35,-316 3848.35,-496"/>
<text xml:space="preserve" text-anchor="start" x="3507.44" y="-418" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="3582.04" y="-395" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="3419.91" y="-377" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- ragflow -->
<g id="node7" class="node">
<title>ragflow</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4369.06,-496 4049.02,-496 4049.02,-316 4369.06,-316 4369.06,-496"/>
<text xml:space="preserve" text-anchor="start" x="4138.47" y="-409" font-family="Arial" font-size="20.00" fill="#f8fafc">RAGFlow 知识库</text>
<text xml:space="preserve" text-anchor="start" x="4153.2" y="-386" font-family="Arial" font-size="15.00" fill="#cbd5e1">RAG 与知识库服务</text>
</g>
<!-- replypolicy -->
<g id="node8" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3855,-189 3373.26,-189 3373.26,-9 3855,-9 3855,-189"/>
<text xml:space="preserve" text-anchor="start" x="3580.79" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">回复策略</text>
<text xml:space="preserve" text-anchor="start" x="3413.26" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- customer&#45;&gt;wechatcallback -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;wechatcallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.73,-90C393.59,-90 482.71,-90 563.11,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="562.84,-92.63 570.34,-90 562.84,-87.38 562.84,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-93 383.04,-125.8 407.04,-125.8 407.04,-93 383.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-93 410.04,-125.8 510.22,-125.8 510.22,-93 410.04,-93"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends question</text>
</g>
<!-- wechatcallback&#45;&gt;wechatplatform -->
<g id="edge2" class="edge">
<title>wechatcallback&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M998.71,-90C1063.77,-90 1135.46,-90 1200.84,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1200.75,-92.63 1208.25,-90 1200.75,-87.38 1200.75,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1062.14,-93 1062.14,-125.8 1086.14,-125.8 1086.14,-93 1062.14,-93"/>
<text xml:space="preserve" text-anchor="start" x="1070.25" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1089.14,-93 1089.14,-125.8 1148.05,-125.8 1148.05,-93 1089.14,-93"/>
<text xml:space="preserve" text-anchor="start" x="1092.14" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">decrypts</text>
</g>
<!-- wechatplatform&#45;&gt;answerorchestrator -->
<g id="edge3" class="edge">
<title>wechatplatform&#45;&gt;answerorchestrator</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1625.23,-90C1711.89,-90 1813.29,-90 1903.29,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1903.12,-92.63 1910.62,-90 1903.12,-87.38 1903.12,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1688.29,-93 1688.29,-125.8 1712.29,-125.8 1712.29,-93 1688.29,-93"/>
<text xml:space="preserve" text-anchor="start" x="1696.39" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1715.29,-93 1715.29,-125.8 1850.46,-125.8 1850.46,-93 1715.29,-93"/>
<text xml:space="preserve" text-anchor="start" x="1718.29" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">normalized message</text>
</g>
<!-- answerorchestrator&#45;&gt;answerloop -->
<g id="edge4" class="edge">
<title>answerorchestrator&#45;&gt;answerloop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2375.1,-150.92C2453.44,-171.69 2541.67,-195.08 2622.61,-216.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2621.59,-218.98 2629.51,-218.37 2622.94,-213.91 2621.59,-218.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2438.21,-203.29 2438.21,-236.09 2462.21,-236.09 2462.21,-203.29 2438.21,-203.29"/>
<text xml:space="preserve" text-anchor="start" x="2446.32" y="-216.49" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2465.21,-203.29 2465.21,-236.09 2569.24,-236.09 2569.24,-203.29 2465.21,-203.29"/>
<text xml:space="preserve" text-anchor="start" x="2468.21" y="-214.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks for answer</text>
</g>
<!-- answerorchestrator&#45;&gt;replypolicy -->
<g id="edge9" class="edge">
<title>answerorchestrator&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2385.52,-91.47C2658.29,-93.15 3100.75,-95.86 3373.36,-97.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2385.62,-88.85 2378.11,-91.43 2385.59,-94.1 2385.62,-88.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2847.21,-99.12 2847.21,-131.92 2871.21,-131.92 2871.21,-99.12 2847.21,-99.12"/>
<text xml:space="preserve" text-anchor="start" x="2855.32" y="-112.32" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2874.21,-99.12 2874.21,-131.92 2931.58,-131.92 2931.58,-99.12 2874.21,-99.12"/>
<text xml:space="preserve" text-anchor="start" x="2877.21" y="-109.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">decision</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge5" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3146.25,-358.05C3166.56,-362.5 3186.83,-366.57 3206.54,-370 3259.01,-379.14 3315.71,-386.02 3369.64,-391.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3369.31,-393.78 3377.02,-391.87 3369.8,-388.55 3369.31,-393.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3220.06,-387.39 3220.06,-420.19 3244.06,-420.19 3244.06,-387.39 3220.06,-387.39"/>
<text xml:space="preserve" text-anchor="start" x="3228.16" y="-400.59" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3247.06,-387.39 3247.06,-420.19 3299.74,-420.19 3299.74,-387.39 3247.06,-387.39"/>
<text xml:space="preserve" text-anchor="start" x="3250.06" y="-398.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">retrieve</text>
</g>
<!-- answerloop&#45;&gt;ragflowknowledge -->
<g id="edge7" class="edge">
<title>answerloop&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3156.76,-286.21C3208.96,-289.32 3263.06,-294.86 3313.26,-304.2 3335.15,-308.27 3357.62,-313.61 3379.94,-319.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3157.01,-283.6 3149.37,-285.79 3156.71,-288.84 3157.01,-283.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3213.43,-307.2 3213.43,-340 3237.43,-340 3237.43,-307.2 3213.43,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="3221.54" y="-320.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3240.43,-307.2 3240.43,-340 3306.36,-340 3306.36,-307.2 3240.43,-307.2"/>
<text xml:space="preserve" text-anchor="start" x="3243.43" y="-318" font-family="Arial" font-size="14.00" fill="#c9c9c9">passages</text>
</g>
<!-- answerloop&#45;&gt;replypolicy -->
<g id="edge8" class="edge">
<title>answerloop&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3146.47,-220.39C3217.04,-202.03 3293.48,-182.15 3363.67,-163.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3364.01,-166.51 3370.61,-162.09 3362.69,-161.43 3364.01,-166.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3209.54,-207.26 3209.54,-240.06 3233.54,-240.06 3233.54,-207.26 3209.54,-207.26"/>
<text xml:space="preserve" text-anchor="start" x="3217.65" y="-220.46" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3236.54,-207.26 3236.54,-240.06 3310.26,-240.06 3310.26,-207.26 3236.54,-207.26"/>
<text xml:space="preserve" text-anchor="start" x="3239.54" y="-218.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">confidence</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflow -->
<g id="edge6" class="edge">
<title>ragflowknowledge&#45;&gt;ragflow</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3848.19,-406C3911.94,-406 3979.8,-406 4039.21,-406"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4038.9,-408.63 4046.4,-406 4038.9,-403.38 4038.9,-408.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3918,-409 3918,-441.8 3942,-441.8 3942,-409 3918,-409"/>
<text xml:space="preserve" text-anchor="start" x="3926.11" y="-422.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3945,-409 3945,-441.8 3986.02,-441.8 3986.02,-409 3945,-409"/>
<text xml:space="preserve" text-anchor="start" x="3948" y="-419.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">query</text>
</g>
</g>
</svg>
`;case`evaluationSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1854pt" height="509pt"
 viewBox="0.00 0.00 1854.00 509.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1067.12,-334 673.68,-334 673.68,-154 1067.12,-154 1067.12,-334"/>
<text xml:space="preserve" text-anchor="start" x="820.39" y="-247" font-family="Arial" font-size="20.00" fill="#eff6ff">评测���禁</text>
<text xml:space="preserve" text-anchor="start" x="713.68" y="-224" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁；src/services/evaluation&#45;gate.js</text>
</g>
<!-- store -->
<g id="node3" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1743.53,-462.64C1743.53,-471.67 1671.81,-479 1583.51,-479 1495.21,-479 1423.49,-471.67 1423.49,-462.64 1423.49,-462.64 1423.49,-315.36 1423.49,-315.36 1423.49,-306.33 1495.21,-299 1583.51,-299 1671.81,-299 1743.53,-306.33 1743.53,-315.36 1743.53,-315.36 1743.53,-462.64 1743.53,-462.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1743.53,-462.64C1743.53,-453.61 1671.81,-446.27 1583.51,-446.27 1495.21,-446.27 1423.49,-453.61 1423.49,-462.64"/>
<text xml:space="preserve" text-anchor="start" x="1550.17" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1446.39" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- replypolicy -->
<g id="node4" class="node">
<title>replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1824.38,-180 1342.64,-180 1342.64,0 1824.38,0 1824.38,-180"/>
<text xml:space="preserve" text-anchor="start" x="1550.17" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">回复策略</text>
<text xml:space="preserve" text-anchor="start" x="1382.64" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">自动回复的置信度与风险阈值；src/services/reply&#45;policy&#45;service.js</text>
</g>
<!-- answerorchestrator&#45;&gt;evaluationgate -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.59,-244C527.55,-244 599.04,-244 663.48,-244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="663.23,-246.63 670.73,-244 663.23,-241.38 663.23,-246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="524.75,-247 524.75,-279.8 548.75,-279.8 548.75,-247 524.75,-247"/>
<text xml:space="preserve" text-anchor="start" x="532.86" y="-260.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.75,-247 551.75,-279.8 610.68,-279.8 610.68,-247 551.75,-247"/>
<text xml:space="preserve" text-anchor="start" x="554.75" y="-257.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">evaluate</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge2" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1066.66,-283.81C1174.99,-305.9 1308.43,-333.11 1412.45,-354.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1411.9,-356.89 1419.78,-355.82 1412.95,-351.75 1411.9,-356.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1138.57,-328.18 1138.57,-360.98 1162.57,-360.98 1162.57,-328.18 1138.57,-328.18"/>
<text xml:space="preserve" text-anchor="start" x="1146.68" y="-341.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1165.57,-328.18 1165.57,-360.98 1271.2,-360.98 1271.2,-328.18 1165.57,-328.18"/>
<text xml:space="preserve" text-anchor="start" x="1168.57" y="-338.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">read candidates</text>
</g>
<!-- evaluationgate&#45;&gt;store -->
<g id="edge4" class="edge">
<title>evaluationgate&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1066.9,-217.93C1135.92,-214.21 1213.52,-216.32 1282.64,-233.2 1337.1,-246.5 1392.68,-271.58 1440.96,-297.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1439.4,-299.93 1447.23,-301.24 1441.93,-295.33 1439.4,-299.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1131.68,-236.2 1131.68,-269 1167.14,-269 1167.14,-236.2 1131.68,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="1139.68" y="-249.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3.2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1170.14,-236.2 1170.14,-269 1278.08,-269 1278.08,-236.2 1170.14,-236.2"/>
<text xml:space="preserve" text-anchor="start" x="1173.14" y="-247" font-family="Arial" font-size="14.00" fill="#c9c9c9">read policy state</text>
</g>
<!-- evaluationgate&#45;&gt;replypolicy -->
<g id="edge3" class="edge">
<title>evaluationgate&#45;&gt;replypolicy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1066.9,-167.35C1087.05,-160.94 1107.38,-155.06 1127.12,-150.2 1192.95,-133.99 1265.28,-121.9 1332.52,-112.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1332.74,-115.61 1339.84,-112.04 1332.06,-110.41 1332.74,-115.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1130.12,-153.2 1130.12,-186 1165.59,-186 1165.59,-153.2 1130.12,-153.2"/>
<text xml:space="preserve" text-anchor="start" x="1138.12" y="-166.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3.1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1168.59,-153.2 1168.59,-186 1279.64,-186 1279.64,-153.2 1168.59,-153.2"/>
<text xml:space="preserve" text-anchor="start" x="1171.59" y="-164" font-family="Arial" font-size="14.00" fill="#c9c9c9">check thresholds</text>
</g>
</g>
</svg>
`;case`handoffSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1825pt" height="790pt"
 viewBox="0.00 0.00 1825.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1127.15,-325 696.23,-325 696.23,-145 1127.15,-145 1127.15,-325"/>
<text xml:space="preserve" text-anchor="start" x="870.02" y="-238" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="736.23" y="-215" font-family="Arial" font-size="15.00" fill="#bfdbfe">创建并跟踪人工转接工单；src/services/handoff&#45;service.js</text>
</g>
<!-- store -->
<g id="node3" class="node">
<title>store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1748.21,-453.64C1748.21,-462.67 1676.49,-470 1588.19,-470 1499.9,-470 1428.17,-462.67 1428.17,-453.64 1428.17,-453.64 1428.17,-306.36 1428.17,-306.36 1428.17,-297.33 1499.9,-290 1588.19,-290 1676.49,-290 1748.21,-297.33 1748.21,-306.36 1748.21,-306.36 1748.21,-453.64 1748.21,-453.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1748.21,-453.64C1748.21,-444.61 1676.49,-437.27 1588.19,-437.27 1499.9,-437.27 1428.17,-444.61 1428.17,-453.64"/>
<text xml:space="preserve" text-anchor="start" x="1554.85" y="-383" font-family="Arial" font-size="20.00" fill="#eff6ff">本地存储</text>
<text xml:space="preserve" text-anchor="start" x="1451.08" y="-360" font-family="Arial" font-size="15.00" fill="#bfdbfe">以 JSON 文件承载状态；src/domain/store.js</text>
</g>
<!-- wechatplatform -->
<g id="node4" class="node">
<title>wechatplatform</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1795.31,-180 1381.08,-180 1381.08,0 1795.31,0 1795.31,-180"/>
<text xml:space="preserve" text-anchor="start" x="1521.51" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">微信客服平台适配</text>
<text xml:space="preserve" text-anchor="start" x="1421.08" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">企业微信会话操作；src/services/wechat&#45;kf&#45;platform.js</text>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1081.16,-760 742.22,-760 742.22,-580 1081.16,-580 1081.16,-760"/>
<text xml:space="preserve" text-anchor="start" x="838.88" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员 Console</text>
<text xml:space="preserve" text-anchor="start" x="766.24" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</text>
</g>
<!-- handoffroutes -->
<g id="node7" class="node">
<title>handoffroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1775.33,-760 1401.06,-760 1401.06,-580 1775.33,-580 1775.33,-760"/>
<text xml:space="preserve" text-anchor="start" x="1546.52" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">转人工路由</text>
<text xml:space="preserve" text-anchor="start" x="1441.06" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">人工转接工单接口；src/routes/handoff&#45;routes.js</text>
</g>
<!-- answerorchestrator&#45;&gt;handoffservice -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;handoffservice</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.69,-235C534.15,-235 614.08,-235 686.16,-235"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="685.75,-237.63 693.25,-235 685.75,-232.38 685.75,-237.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="524.75,-238 524.75,-270.8 548.75,-270.8 548.75,-238 524.75,-238"/>
<text xml:space="preserve" text-anchor="start" x="532.86" y="-251.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.75,-238 551.75,-270.8 633.23,-270.8 633.23,-238 551.75,-238"/>
<text xml:space="preserve" text-anchor="start" x="554.75" y="-248.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">create ticket</text>
</g>
<!-- handoffservice&#45;&gt;store -->
<g id="edge2" class="edge">
<title>handoffservice&#45;&gt;store</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1127.03,-281.08C1220.73,-301.22 1329.09,-324.51 1417.11,-343.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1416.35,-345.96 1424.23,-344.97 1417.45,-340.82 1416.35,-345.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1198.72,-323.49 1198.72,-356.29 1222.72,-356.29 1222.72,-323.49 1198.72,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="1206.82" y="-336.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1225.72,-323.49 1225.72,-356.29 1309.52,-356.29 1309.52,-323.49 1225.72,-323.49"/>
<text xml:space="preserve" text-anchor="start" x="1228.72" y="-334.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">persist ticket</text>
</g>
<!-- handoffservice&#45;&gt;wechatplatform -->
<g id="edge3" class="edge">
<title>handoffservice&#45;&gt;wechatplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1127.03,-188.92C1205,-172.16 1293.11,-153.22 1371.21,-136.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1371.44,-139.07 1378.22,-134.92 1370.34,-133.93 1371.44,-139.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1190.15,-178.49 1190.15,-211.29 1214.15,-211.29 1214.15,-178.49 1190.15,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="1198.26" y="-191.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1217.15,-178.49 1217.15,-211.29 1318.08,-211.29 1318.08,-178.49 1217.15,-178.49"/>
<text xml:space="preserve" text-anchor="start" x="1220.15" y="-189.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">notify customer</text>
</g>
<!-- operator&#45;&gt;operatorui -->
<g id="edge4" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M390.6,-670C492.79,-670 625.83,-670 731.77,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="731.73,-672.63 739.23,-670 731.73,-667.38 731.73,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="525.14,-673 525.14,-705.8 549.14,-705.8 549.14,-673 525.14,-673"/>
<text xml:space="preserve" text-anchor="start" x="533.24" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="552.14,-673 552.14,-705.8 632.85,-705.8 632.85,-673 552.14,-673"/>
<text xml:space="preserve" text-anchor="start" x="555.14" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">opens ticket</text>
</g>
<!-- operatorui&#45;&gt;handoffroutes -->
<g id="edge5" class="edge">
<title>operatorui&#45;&gt;handoffroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1081.16,-670C1175.18,-670 1292.8,-670 1390.97,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1390.79,-672.63 1398.29,-670 1390.79,-667.38 1390.79,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1203,-673 1203,-705.8 1227,-705.8 1227,-673 1203,-673"/>
<text xml:space="preserve" text-anchor="start" x="1211.11" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1230,-673 1230,-705.8 1305.23,-705.8 1305.23,-673 1230,-673"/>
<text xml:space="preserve" text-anchor="start" x="1233" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">claim ticket</text>
</g>
</g>
</svg>
`;case`knowledgeSyncSequence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="3773pt" height="790pt"
 viewBox="0.00 0.00 3773.00 790.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="897.34,-615 558.4,-615 558.4,-435 897.34,-435 897.34,-615"/>
<text xml:space="preserve" text-anchor="start" x="655.06" y="-528" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员 Console</text>
<text xml:space="preserve" text-anchor="start" x="582.41" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">运营人员使用的单页控制台；src/ui/operator.html</text>
</g>
<!-- knowledgeroutes -->
<g id="node3" class="node">
<title>knowledgeroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1606.67,-615 1135.71,-615 1135.71,-435 1606.67,-435 1606.67,-615"/>
<text xml:space="preserve" text-anchor="start" x="1329.52" y="-528" font-family="Arial" font-size="20.00" fill="#eff6ff">知识库路由</text>
<text xml:space="preserve" text-anchor="start" x="1175.71" y="-505" font-family="Arial" font-size="15.00" fill="#bfdbfe">知识扫描、同步与生命周期接口；src/routes/knowledge&#45;routes.js</text>
</g>
<!-- knowledgescan -->
<g id="node4" class="node">
<title>knowledgescan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2293.62,-760 1866.85,-760 1866.85,-580 2293.62,-580 2293.62,-760"/>
<text xml:space="preserve" text-anchor="start" x="2046.89" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">知识扫描</text>
<text xml:space="preserve" text-anchor="start" x="1906.85" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">发现候选知识；src/services/knowledge&#45;scan&#45;service.js</text>
</g>
<!-- governance -->
<g id="node5" class="node">
<title>governance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3058.44,-760 2572.46,-760 2572.46,-580 3058.44,-580 3058.44,-760"/>
<text xml:space="preserve" text-anchor="start" x="2782.11" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">知识治理</text>
<text xml:space="preserve" text-anchor="start" x="2612.46" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">发布决策与治理；src/services/knowledge&#45;governance&#45;service.js</text>
</g>
<!-- evaluationgate -->
<g id="node6" class="node">
<title>evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3742.41,-760 3348.97,-760 3348.97,-580 3742.41,-580 3742.41,-760"/>
<text xml:space="preserve" text-anchor="start" x="3495.68" y="-673" font-family="Arial" font-size="20.00" fill="#eff6ff">评测���禁</text>
<text xml:space="preserve" text-anchor="start" x="3388.97" y="-650" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁；src/services/evaluation&#45;gate.js</text>
</g>
<!-- knowledgesync -->
<g id="node7" class="node">
<title>knowledgesync</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2287.78,-470 1872.69,-470 1872.69,-290 2287.78,-290 2287.78,-470"/>
<text xml:space="preserve" text-anchor="start" x="2046.89" y="-392" font-family="Arial" font-size="20.00" fill="#eff6ff">知识同步</text>
<text xml:space="preserve" text-anchor="start" x="2023.97" y="-369" font-family="Arial" font-size="15.00" fill="#bfdbfe">把已批准知识推送到</text>
<text xml:space="preserve" text-anchor="start" x="1912.69" y="-351" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow；src/services/knowledge&#45;sync&#45;service.js</text>
</g>
<!-- llmwiki -->
<g id="node8" class="node">
<title>llmwiki</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2975.47,-470 2655.43,-470 2655.43,-290 2975.47,-290 2975.47,-470"/>
<text xml:space="preserve" text-anchor="start" x="2746.55" y="-383" font-family="Arial" font-size="20.00" fill="#f8fafc">LLM Wiki 候选源</text>
<text xml:space="preserve" text-anchor="start" x="2738.35" y="-360" font-family="Arial" font-size="15.00" fill="#cbd5e1">LLM 生成的 wiki 候选来源</text>
</g>
<!-- ragflowknowledge -->
<g id="node9" class="node">
<title>ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3049.67,-180 2581.23,-180 2581.23,0 3049.67,0 3049.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="2708.77" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="2783.36" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="2621.23" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- operator&#45;&gt;operatorui -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;operatorui</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.77,-525C390.96,-525 475.23,-525 548.58,-525"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="548.33,-527.63 555.83,-525 548.33,-522.38 548.33,-527.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-528 383.04,-560.8 407.04,-560.8 407.04,-528 383.04,-528"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-541.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-528 410.04,-560.8 495.4,-560.8 495.4,-528 410.04,-528"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-538.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">triggers sync</text>
</g>
<!-- operatorui&#45;&gt;knowledgeroutes -->
<g id="edge2" class="edge">
<title>operatorui&#45;&gt;knowledgeroutes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M896.95,-525C966.83,-525 1049.32,-525 1125.69,-525"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1125.41,-527.63 1132.91,-525 1125.41,-522.38 1125.41,-527.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="960.34,-528 960.34,-560.8 984.34,-560.8 984.34,-528 960.34,-528"/>
<text xml:space="preserve" text-anchor="start" x="968.45" y="-541.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="987.34,-528 987.34,-560.8 1072.71,-560.8 1072.71,-528 987.34,-528"/>
<text xml:space="preserve" text-anchor="start" x="990.34" y="-538.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">request sync</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgescan -->
<g id="edge3" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgescan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1606.65,-573.08C1687.21,-589.6 1777.12,-608.04 1856.71,-624.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1856.03,-626.9 1863.9,-625.84 1857.08,-621.76 1856.03,-626.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1669.67,-613.49 1669.67,-646.29 1693.67,-646.29 1693.67,-613.49 1669.67,-613.49"/>
<text xml:space="preserve" text-anchor="start" x="1677.78" y="-626.69" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1696.67,-613.49 1696.67,-646.29 1803.85,-646.29 1803.85,-613.49 1696.67,-613.49"/>
<text xml:space="preserve" text-anchor="start" x="1699.67" y="-624.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">scan candidates</text>
</g>
<!-- knowledgeroutes&#45;&gt;knowledgesync -->
<g id="edge6" class="edge">
<title>knowledgeroutes&#45;&gt;knowledgesync</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1606.65,-476.92C1689.31,-459.97 1781.81,-441 1862.9,-424.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1862.95,-427.04 1869.77,-422.96 1861.89,-421.89 1862.95,-427.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1673.95,-464.18 1673.95,-496.98 1697.95,-496.98 1697.95,-464.18 1673.95,-464.18"/>
<text xml:space="preserve" text-anchor="start" x="1682.06" y="-477.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1700.95,-464.18 1700.95,-496.98 1799.58,-496.98 1799.58,-464.18 1700.95,-464.18"/>
<text xml:space="preserve" text-anchor="start" x="1703.95" y="-474.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">push approved</text>
</g>
<!-- knowledgescan&#45;&gt;governance -->
<g id="edge4" class="edge">
<title>knowledgescan&#45;&gt;governance</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2293.31,-670C2377.32,-670 2474.59,-670 2562.17,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2562,-672.63 2569.5,-670 2562,-667.38 2562,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2358.18,-673 2358.18,-705.8 2382.18,-705.8 2382.18,-673 2358.18,-673"/>
<text xml:space="preserve" text-anchor="start" x="2366.29" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2385.18,-673 2385.18,-705.8 2507.9,-705.8 2507.9,-673 2385.18,-673"/>
<text xml:space="preserve" text-anchor="start" x="2388.18" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">submit for decision</text>
</g>
<!-- governance&#45;&gt;evaluationgate -->
<g id="edge5" class="edge">
<title>governance&#45;&gt;evaluationgate</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3058.44,-670C3149.31,-670 3251.66,-670 3338.94,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3338.71,-672.63 3346.21,-670 3338.71,-667.38 3338.71,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3121.44,-673 3121.44,-705.8 3145.44,-705.8 3145.44,-673 3121.44,-673"/>
<text xml:space="preserve" text-anchor="start" x="3129.55" y="-686.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3148.44,-673 3148.44,-705.8 3285.97,-705.8 3285.97,-673 3148.44,-673"/>
<text xml:space="preserve" text-anchor="start" x="3151.44" y="-683.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">apply publication rule</text>
</g>
<!-- knowledgesync&#45;&gt;llmwiki -->
<g id="edge7" class="edge">
<title>knowledgesync&#45;&gt;llmwiki</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2287.43,-380C2400.47,-380 2538.87,-380 2645.47,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2645.16,-382.63 2652.66,-380 2645.16,-377.38 2645.16,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2356.62,-383 2356.62,-415.8 2380.62,-415.8 2380.62,-383 2356.62,-383"/>
<text xml:space="preserve" text-anchor="start" x="2364.72" y="-396.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2383.62,-383 2383.62,-415.8 2509.46,-415.8 2509.46,-383 2383.62,-383"/>
<text xml:space="preserve" text-anchor="start" x="2386.62" y="-393.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">read candidate wiki</text>
</g>
<!-- knowledgesync&#45;&gt;ragflowknowledge -->
<g id="edge8" class="edge">
<title>knowledgesync&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2287.43,-298.45C2377.62,-262.77 2483.95,-220.72 2577.39,-183.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2578.15,-186.28 2584.16,-181.08 2576.22,-181.4 2578.15,-186.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2376.85,-272.5 2376.85,-305.3 2400.85,-305.3 2400.85,-272.5 2376.85,-272.5"/>
<text xml:space="preserve" text-anchor="start" x="2384.96" y="-285.7" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2403.85,-272.5 2403.85,-305.3 2489.23,-305.3 2489.23,-272.5 2403.85,-272.5"/>
<text xml:space="preserve" text-anchor="start" x="2406.85" y="-283.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">write dataset</text>
</g>
</g>
</svg>
`;case`configGatedFlow`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1227pt" height="359pt"
 viewBox="0.00 0.00 1227.00 359.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1196.56,-180 728.12,-180 728.12,0 1196.56,0 1196.56,-180"/>
<text xml:space="preserve" text-anchor="start" x="855.66" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">RAGFlow 知识库 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="930.26" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">RAGFlow</text>
<text xml:space="preserve" text-anchor="start" x="768.12" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问；src/services/ragflow&#45;knowledge&#45;service.js</text>
</g>
<!-- answerorchestrator&#45;&gt;ragflowknowledge -->
<g id="edge1" class="edge">
<title>answerorchestrator&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M461.68,-90C543.27,-90 635.33,-90 718.01,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="717.78,-92.63 725.28,-90 717.78,-87.38 717.78,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="524.75,-93 524.75,-125.8 548.75,-125.8 548.75,-93 524.75,-93"/>
<text xml:space="preserve" text-anchor="start" x="532.86" y="-106.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.75,-93 551.75,-125.8 665.12,-125.8 665.12,-93 551.75,-93"/>
<text xml:space="preserve" text-anchor="start" x="554.75" y="-103.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">attempts retrieval</text>
</g>
<!-- ragflowknowledge&#45;&gt;ragflowknowledge -->
<g id="edge2" class="edge">
<title>ragflowknowledge&#45;&gt;ragflowknowledge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M898.46,-179.98C882.75,-236.28 904.04,-290 962.34,-290 1017.12,-290 1039.23,-242.58 1028.68,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1031.24,-189.6 1026.94,-182.93 1026.14,-190.83 1031.24,-189.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="887.87,-293 887.87,-325.8 911.87,-325.8 911.87,-293 887.87,-293"/>
<text xml:space="preserve" text-anchor="start" x="895.97" y="-306.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="914.87,-293 914.87,-325.8 1036.82,-325.8 1036.82,-293 914.87,-293"/>
<text xml:space="preserve" text-anchor="start" x="917.87" y="-303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks config gate</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};
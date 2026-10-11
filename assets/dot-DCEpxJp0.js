var e=e=>{switch(e){case`feat001FChain`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=feat001FChain,
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
        cvt_normalize [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-001 提问归一化转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN-001 与<BR/>POD-001→OUT-001 两组映射。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.cvt_normalize",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        lane_client [height=2.5,
            label=<<FONT POINT-SIZE="20">客户端泳道</FONT>>,
            likec4_id="feat_answer_f.lane_client",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        f_answer [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-001 应答编排能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.f_answer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_step [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_step",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        f_retrieval [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-002 知识检索能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.f_retrieval",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_goal [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        lane_edge [height=2.5,
            label=<<FONT POINT-SIZE="20">服务端接入泳道</FONT>>,
            likec4_id="feat_answer_f.lane_edge",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_state [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-002 业务状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">问答状态：已接收 → 检索中 → 应答中 → 已答复 / 待人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_state",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ui_interaction [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 企业微信会话交互</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.ui_interaction",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        lane_core [height=2.5,
            label=<<FONT POINT-SIZE="20">领域层泳道</FONT>>,
            likec4_id="feat_answer_f.lane_core",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_wechatcallback [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-001 微信客服回调入口</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>接收企业微信加密回调并解密分发。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_wechatCallback",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        in_chatmessage [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-001 客户提问入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.in_chatMessage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        lane_ext [height=2.5,
            label=<<FONT POINT-SIZE="20">外部依赖泳道</FONT>>,
            likec4_id="feat_answer_f.lane_ext",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_answerorchestrator [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-002 应答编排器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/answer-orchestrator.js —<BR/>决定自动应答或转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_answerOrchestrator",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        biz_query [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-001 检索查询对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 承载检索意图与置信度计算。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.biz_query",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_answerloop [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-003 知识应答循环</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-answer-loop-service.js<BR/>— 检索增强的应答循环。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_answerLoop",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_handoffservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-006 转人工服务</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/handoff-service.js — 创建并跟踪人工工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_handoffService",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        pod_ticket [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-001 工单持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>tickets 数组结构对应。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.pod_ticket",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_replypolicy [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-004 回复策略</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/reply-policy-service.js —<BR/>置信度与风险阈值判定。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_replyPolicy",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        src_ragflowknowledge [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-005 RAGFlow 知识检索</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-knowledge-service.js —<BR/>检索与数据集访问。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_ragflowKnowledge",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        dao_store [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-001 本地存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.dao_store",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        out_answer [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-001 答复出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/wechat-kf-routes.js —<BR/>面向企业微信会话的答复载荷。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.out_answer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ui_information [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 答复信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.ui_information",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        src_store [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-007 本地存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.src_store",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
    }
    us_ask -> f_answer [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1kuna4v",
        minlen=1,
        style=solid];
    us_ask -> i_step [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务步骤</FONT></TD></TR></TABLE>>,
        likec4_id="1yw2bri",
        style=solid];
    us_lowconfidence -> f_retrieval [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=tkg14s,
        minlen=1,
        style=solid];
    us_lowconfidence -> i_goal [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务目标</FONT></TD></TR></TABLE>>,
        likec4_id="10z9ivk",
        minlen=1,
        style=solid];
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
    lane_client -> lane_edge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">企业微信提问</FONT></TD></TR></TABLE>>,
        likec4_id="1jz415c",
        minlen=1,
        style=dashed];
    i_step -> i_state [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">推进问答状态</FONT></TD></TR></TABLE>>,
        likec4_id=p4nmi7,
        style=solid];
    i_step -> ui_interaction [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">反馈交互</FONT></TD></TR></TABLE>>,
        likec4_id=lvc3pz,
        style=solid];
    lane_edge -> lane_core [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">触发应答</FONT></TD></TR></TABLE>>,
        likec4_id=lb9lv6,
        style=dashed];
    i_state -> ui_information [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">展示应答状态</FONT></TD></TR></TABLE>>,
        likec4_id=wsubpg,
        style=solid];
    ui_interaction -> src_wechatcallback [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">由回调触发</FONT></TD></TR></TABLE>>,
        likec4_id="3n1wgb",
        style=solid];
    ui_interaction -> in_chatmessage [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交提问</FONT></TD></TR></TABLE>>,
        likec4_id="12cptjy",
        style=solid];
    lane_core -> lane_edge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">返回答复或工单号</FONT></TD></TR></TABLE>>,
        likec4_id="1yd6tde",
        style=dashed];
    lane_core -> lane_ext [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">检索知识</FONT></TD></TR></TABLE>>,
        likec4_id=li5o8o,
        style=dashed];
    src_wechatcallback -> src_answerorchestrator [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">分发归一化消息</FONT></TD></TR></TABLE>>,
        likec4_id="1sesny5",
        style=solid];
    in_chatmessage -> biz_query [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为检索查询</FONT></TD></TR></TABLE>>,
        likec4_id="1fkqupv",
        style=dashed];
    lane_ext -> lane_core [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">返回候选知识</FONT></TD></TR></TABLE>>,
        likec4_id="18wfdiw",
        style=dashed];
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
    biz_query -> pod_ticket [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">低置信度落工单</FONT></TD></TR></TABLE>>,
        likec4_id=tdax8u,
        style=solid];
    biz_query -> src_ragflowknowledge [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">发起检索</FONT></TD></TR></TABLE>>,
        likec4_id="1s3pf0n",
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
        style=solid];
    src_handoffservice -> src_store [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">持久化工单</FONT></TD></TR></TABLE>>,
        likec4_id=gu896s,
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
    out_answer -> ui_information [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">渲染答复</FONT></TD></TR></TABLE>>,
        likec4_id="383ufc",
        style=solid];
    ui_information -> src_store [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取工单状态</FONT></TD></TR></TABLE>>,
        likec4_id="1tfaecn",
        style=solid];
}
`;case`feat001NFFChain`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=feat001NFFChain,
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
        us_ragtimeout [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_llmdown [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_integrationroutes [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-101 集成状态路由</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>功能概览与集成状态查询。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_integrationRoutes",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        cvt_probe [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">CVT-101 探测结果转换器</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js — 覆盖<BR/>BIZ-101→OUT-101 与 BIZ-101→POD-101 两组映射。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.cvt_probe",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        lane_operator [height=2.5,
            label=<<FONT POINT-SIZE="20">运营人员泳道</FONT>>,
            likec4_id="feat_degrade_nf.lane_operator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        nf_kbempty [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-101 知识库为零条时状态可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_kbEmpty",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        i_goal [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-101 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        nf_ragtimeout [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-102 RAGFlow 超 8 秒时客户可感知</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8<BR/>秒下发带说明的提示，客服不必反复刷新。角色：客户。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_ragTimeout",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        nf_llmdown [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-103 LLM 不可用时自动转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_llmDown",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        i_step [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →<BR/>分发对应提示或工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.i_step",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_ragflowprobe [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-104 RAGFlow 生命周期探针</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 校验 RAGFlow 数据集状态与可用性。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_ragflowProbe",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        lane_edge [height=2.5,
            label=<<FONT POINT-SIZE="20">服务端接入泳道</FONT>>,
            likec4_id="feat_degrade_nf.lane_edge",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ui_notice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-102 极端场景提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.ui_notice",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        in_probequery [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">IN-101 状态探测入参</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>控制台发起的集成状态查询。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.in_probeQuery",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_knowledgealert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-103 知识告警</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/knowledge-alert-service.js —<BR/>暴露知识新鲜度与空库问题。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_knowledgeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        biz_proberesult [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">BIZ-101 探测结果对象</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/ragflow-lifecycle-probe-service.js<BR/>— 承载条目数、响应耗时与调用结果判定。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.biz_probeResult",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_evaluationgate [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-102 评测闸门</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/services/evaluation-gate.js —<BR/>本地发布策略门禁，判定是否阻断应答。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_evaluationGate",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        pod_alert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">POD-101 告警持久化实体</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">data/local-mvp-store.json — 与 store.json 中<BR/>alerts 数组结构对应。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.pod_alert",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        out_status [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OUT-101 状态出参视图</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js —<BR/>面向控制台的状态载荷。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.out_status",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        lane_ext [height=2.5,
            label=<<FONT POINT-SIZE="20">外部依赖泳道</FONT>>,
            likec4_id="feat_degrade_nf.lane_ext",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        src_storealert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-106 告警状态存储</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_storeAlert",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        dao_alert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">DAO-101 告警存储访问</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.dao_alert",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        ui_status [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-101 控制台状态提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.ui_status",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        src_operatorui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SRC-105 运营人员控制台</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.src_operatorUi",
            likec4_level=1,
            margin="0.5,0.223",
            width=4.584];
        lane_core [height=2.5,
            label=<<FONT POINT-SIZE="20">判定层泳道</FONT>>,
            likec4_id="feat_degrade_nf.lane_core",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    us_kbempty -> nf_kbempty [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1w7tww4",
        minlen=1,
        style=solid];
    us_kbempty -> i_goal [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务目标</FONT></TD></TR></TABLE>>,
        likec4_id="1hxdoyk",
        minlen=1,
        style=solid];
    us_ragtimeout -> nf_ragtimeout [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="15m14tg",
        minlen=1,
        style=solid];
    us_ragtimeout -> i_step [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为场景判定逻辑</FONT></TD></TR></TABLE>>,
        likec4_id=rln8k8,
        style=solid];
    us_llmdown -> nf_llmdown [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1wui3tw",
        minlen=1,
        style=solid];
    us_llmdown -> i_step [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为场景判定逻辑</FONT></TD></TR></TABLE>>,
        likec4_id=tcfh9k,
        style=solid];
    src_integrationroutes -> src_ragflowprobe [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测数据集状态</FONT></TD></TR></TABLE>>,
        likec4_id="1x6lz3m",
        minlen=1,
        style=solid];
    src_integrationroutes -> src_knowledgealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询空库告警</FONT></TD></TR></TABLE>>,
        likec4_id="1plnfnm",
        style=solid];
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
    lane_operator -> lane_edge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">查询状态</FONT></TD></TR></TABLE>>,
        likec4_id=nmj1l5,
        minlen=1,
        style=dashed];
    i_step -> ui_notice [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">反馈场景提示</FONT></TD></TR></TABLE>>,
        likec4_id=ksj4if,
        style=solid];
    i_step -> ui_status [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">反馈知识状态</FONT></TD></TR></TABLE>>,
        likec4_id="12zi3ix",
        style=solid];
    lane_edge -> in_probequery [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">构造探测入参</FONT></TD></TR></TABLE>>,
        likec4_id="11z8amg",
        style=dashed];
    ui_notice -> src_knowledgealert [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">上报告警</FONT></TD></TR></TABLE>>,
        likec4_id=dgoufm,
        style=solid];
    ui_notice -> src_evaluationgate [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">由门禁决定是否阻断</FONT></TD></TR></TABLE>>,
        likec4_id="1k4ov67",
        style=solid];
    in_probequery -> biz_proberesult [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">转换为探测结果</FONT></TD></TR></TABLE>>,
        likec4_id=p9qlpb,
        style=dashed];
    src_knowledgealert -> src_evaluationgate [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">提交发布判定</FONT></TD></TR></TABLE>>,
        likec4_id=nzxl87,
        style=solid];
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
        style=solid];
    biz_proberesult -> lane_ext [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">探测数据集可用性</FONT></TD></TR></TABLE>>,
        likec4_id="18z8e47",
        style=solid];
    src_evaluationgate -> src_storealert [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">读取告警快照</FONT></TD></TR></TABLE>>,
        likec4_id=vpj122,
        minlen=1,
        style=solid];
    pod_alert -> dao_alert [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">写入告警</FONT></TD></TR></TABLE>>,
        likec4_id=ig0evv,
        minlen=1,
        style=solid];
    out_status -> ui_status [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">显示条目数与异常提示</FONT></TD></TR></TABLE>>,
        likec4_id=aw212w,
        style=solid];
    lane_ext -> biz_proberesult [arrowhead=normal,
        color="#3b82f6",
        fontcolor="#eff5fd",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">返回探测结论</FONT></TD></TR></TABLE>>,
        likec4_id="1wo1ic7",
        style=solid];
    ui_status -> src_operatorui [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">渲染于控制台</FONT></TD></TR></TABLE>>,
        likec4_id=qrhgf0,
        minlen=1,
        style=solid];
}
`;case`feat001FBusiness`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=feat001FBusiness,
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
        f_answer [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">F-001 应答编排能力</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.f_answer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_step [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_step",
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
        i_goal [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_state [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-002 业务状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">问答状态：已接收 → 检索中 → 应答中 → 已答复 / 待人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_state",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ui_interaction [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-001 企业微信会话交互</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.ui_interaction",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_information [group=feat_answer_f,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-002 答复信息设计</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.ui_information",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    us_ask -> f_answer [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1kuna4v",
        minlen=1,
        style=solid];
    us_ask -> i_step [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务步骤</FONT></TD></TR></TABLE>>,
        likec4_id="1yw2bri",
        style=solid];
    us_lowconfidence -> f_retrieval [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id=tkg14s,
        minlen=1,
        style=solid];
    us_lowconfidence -> i_goal [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务目标</FONT></TD></TR></TABLE>>,
        likec4_id="10z9ivk",
        minlen=1,
        style=solid];
    i_step -> i_state [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">推进问答状态</FONT></TD></TR></TABLE>>,
        likec4_id=p4nmi7,
        style=solid];
    i_step -> ui_interaction [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">反馈交互</FONT></TD></TR></TABLE>>,
        likec4_id=lvc3pz,
        minlen=1,
        style=solid];
    i_state -> ui_information [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">展示应答状态</FONT></TD></TR></TABLE>>,
        likec4_id=wsubpg,
        minlen=1,
        style=solid];
}
`;case`feat001NFBusiness`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=feat001NFBusiness,
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
        us_ragtimeout [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-102 RAGFlow 超时时客户不被静默等待</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过<BR/>8 秒未返回时下发带说明的提示。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_ragTimeout",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        us_llmdown [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">US-103 LLM 不可用时转人工而非静默失败</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.us_llmDown",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        nf_kbempty [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-101 知识库为零条时状态可见</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_kbEmpty",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        i_goal [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-101 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        nf_ragtimeout [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-102 RAGFlow 超 8 秒时客户可感知</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8<BR/>秒下发带说明的提示，客服不必反复刷新。角色：客户。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_ragTimeout",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        nf_llmdown [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">NF-103 LLM 不可用时自动转人工</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.nf_llmDown",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        i_step [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →<BR/>分发对应提示或工单。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.i_step",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ui_status [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-101 控制台状态提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.ui_status",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        ui_notice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">UI-102 极端场景提示</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_degrade_nf.ui_notice",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    us_kbempty -> nf_kbempty [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1w7tww4",
        minlen=1,
        style=solid];
    us_kbempty -> i_goal [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为业务目标</FONT></TD></TR></TABLE>>,
        likec4_id="1hxdoyk",
        minlen=1,
        style=solid];
    us_ragtimeout -> nf_ragtimeout [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="15m14tg",
        minlen=1,
        style=solid];
    us_ragtimeout -> i_step [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为场景判定逻辑</FONT></TD></TR></TABLE>>,
        likec4_id=rln8k8,
        style=solid];
    us_llmdown -> nf_llmdown [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">要求</FONT></TD></TR></TABLE>>,
        likec4_id="1wui3tw",
        minlen=1,
        style=solid];
    us_llmdown -> i_step [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">落为场景判定逻辑</FONT></TD></TR></TABLE>>,
        likec4_id=tcfh9k,
        style=solid];
    i_step -> ui_status [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">反馈知识状态</FONT></TD></TR></TABLE>>,
        likec4_id="12zi3ix",
        minlen=1,
        style=solid];
    i_step -> ui_notice [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">反馈场景提示</FONT></TD></TR></TABLE>>,
        likec4_id=ksj4if,
        minlen=1,
        style=solid];
}
`;case`feat001FFrame`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=feat001FFrame,
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
`;case`feat001NFFrame`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=feat001NFFrame,
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
`;case`procLocal`:return`digraph {
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
}`;case`srcdir001F`:return`digraph {
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
`;case`api001F`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=api001F,
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
}
`;case`api001NF`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=api001NF,
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
    api_status [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API-101 GET /integration/status 集成状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">src/routes/integration-routes.js:7 —<BR/>查询集成状态与知识条目数。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.lane_edge.api_status",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
`;case`usPanorama`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=usPanorama,
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
`;case`fPanorama`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=fPanorama,
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
`;case`nfPanorama`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=nfPanorama,
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
`;case`iPanorama`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=iPanorama,
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
        i_goal [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-001 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_goal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_step [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-003 业务步骤</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_step",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        i_state [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-002 业务状态</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">问答状态：已接收 → 检索中 → 应答中 → 已答复 / 待人工。</FONT></TD></TR></TABLE>>,
            likec4_id="feat_answer_f.i_state",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    i_goal_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-101 业务目标</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.i_goal",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    i_goal -> i_goal_1 [style=invis];
    i_step -> i_state [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">推进问答状态</FONT></TD></TR></TABLE>>,
        likec4_id=p4nmi7,
        style=solid];
    i_step_1 [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">I-102 场景判定逻辑</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →<BR/>分发对应提示或工单。</FONT></TD></TR></TABLE>>,
        likec4_id="feat_degrade_nf.i_step",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    i_goal_1 -> i_step_1 [style=invis];
}
`;case`uiPanorama`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=uiPanorama,
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
`;case`srcPanorama`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=srcPanorama,
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
`;case`seq001FAnswer`:return`digraph {
  likec4_viewId = "seq001FAnswer";
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
}`;case`seq001FBranchLowConfidence`:return`digraph {
  likec4_viewId = "seq001FBranchLowConfidence";
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
}`;case`dfd001F`:return`digraph {
  likec4_viewId = "dfd001F";
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
}`;case`seq001NFDegrade`:return`digraph {
  likec4_viewId = "seq001NFDegrade";
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
}`;case`dfd001NF`:return`digraph {
  likec4_viewId = "dfd001NF";
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
}`;case`seq001APIChat`:return`digraph {
  likec4_viewId = "seq001APIChat";
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
}`;case`seq001NFAPI`:return`digraph {
  likec4_viewId = "seq001NFAPI";
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
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`feat001FChain`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2724pt" height="3232pt"
 viewBox="0.00 0.00 2724.00 3232.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3217.45)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-3194.4 2686,-3194.4 2686,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-3181.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2215.88,-3133.2 1438.12,-3133.2 1438.12,-2953.2 2215.88,-2953.2 2215.88,-3133.2"/>
<text xml:space="preserve" text-anchor="start" x="1706.97" y="-3046.2" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="1458.18" y="-3023.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="813.63,-3133.2 48.37,-3133.2 48.37,-2953.2 813.63,-2953.2 813.63,-3133.2"/>
<text xml:space="preserve" text-anchor="start" x="302.63" y="-3046.2" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="68.43" y="-3023.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- cvt_normalize -->
<g id="node3" class="node">
<title>cvt_normalize</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1328.4,-3133.2 923.6,-3133.2 923.6,-2953.2 1328.4,-2953.2 1328.4,-3133.2"/>
<text xml:space="preserve" text-anchor="start" x="1016.53" y="-3055.2" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;001 提问归一化转换器</text>
<text xml:space="preserve" text-anchor="start" x="947.61" y="-3032.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 覆盖 微信原始报文→IN&#45;001 与</text>
<text xml:space="preserve" text-anchor="start" x="1024.3" y="-3014.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">POD&#45;001→OUT&#45;001 两组映射。</text>
</g>
<!-- lane_client -->
<g id="node4" class="node">
<title>lane_client</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2646.02,-3133.2 2325.98,-3133.2 2325.98,-2953.2 2646.02,-2953.2 2646.02,-3133.2"/>
<text xml:space="preserve" text-anchor="start" x="2444.33" y="-3035.2" font-family="Arial" font-size="20.00" fill="#eff6ff">客户端泳道</text>
</g>
<!-- f_answer -->
<g id="node5" class="node">
<title>f_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2207.02,-2810.4 1886.98,-2810.4 1886.98,-2630.4 2207.02,-2630.4 2207.02,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="1968.09" y="-2723.4" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;001 应答编排能力</text>
<text xml:space="preserve" text-anchor="start" x="1909.47" y="-2700.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</text>
</g>
<!-- i_step -->
<g id="node6" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1776.59,-2810.4 1361.41,-2810.4 1361.41,-2630.4 1776.59,-2630.4 1776.59,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="1510.09" y="-2723.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤</text>
<text xml:space="preserve" text-anchor="start" x="1381.46" y="-2700.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</text>
</g>
<!-- f_retrieval -->
<g id="node7" class="node">
<title>f_retrieval</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-2810.4 47.98,-2810.4 47.98,-2630.4 368.02,-2630.4 368.02,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="129.09" y="-2723.4" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;002 知识检索能力</text>
<text xml:space="preserve" text-anchor="start" x="77.98" y="-2700.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</text>
</g>
<!-- i_goal -->
<g id="node8" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="805.83,-2810.4 478.17,-2810.4 478.17,-2630.4 805.83,-2630.4 805.83,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="583.09" y="-2723.4" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="498.22" y="-2700.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</text>
</g>
<!-- lane_edge -->
<g id="node9" class="node">
<title>lane_edge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2646.02,-2810.4 2325.98,-2810.4 2325.98,-2630.4 2646.02,-2630.4 2646.02,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="2427.66" y="-2712.4" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
<!-- i_state -->
<g id="node10" class="node">
<title>i_state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2215.84,-2487.6 1838.16,-2487.6 1838.16,-2307.6 2215.84,-2307.6 2215.84,-2487.6"/>
<text xml:space="preserve" text-anchor="start" x="1968.09" y="-2400.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;002 业务状态</text>
<text xml:space="preserve" text-anchor="start" x="1858.22" y="-2377.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">问答状态：已接收 → 检索中 → 应答中 → 已答复 / 待人工。</text>
</g>
<!-- ui_interaction -->
<g id="node11" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1728.05,-2487.6 1329.95,-2487.6 1329.95,-2307.6 1728.05,-2307.6 1728.05,-2487.6"/>
<text xml:space="preserve" text-anchor="start" x="1429.53" y="-2400.6" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="1353.97" y="-2377.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- lane_core -->
<g id="node12" class="node">
<title>lane_core</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2646.02,-2487.6 2325.98,-2487.6 2325.98,-2307.6 2646.02,-2307.6 2646.02,-2487.6"/>
<text xml:space="preserve" text-anchor="start" x="2444.33" y="-2389.6" font-family="Arial" font-size="20.00" fill="#eff6ff">领域层泳道</text>
</g>
<!-- src_wechatcallback -->
<g id="node13" class="node">
<title>src_wechatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1775.02,-2164.8 1444.98,-2164.8 1444.98,-1984.8 1775.02,-1984.8 1775.02,-2164.8"/>
<text xml:space="preserve" text-anchor="start" x="1499.41" y="-2086.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;001 微信客服回调入口</text>
<text xml:space="preserve" text-anchor="start" x="1503.72" y="-2063.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="1509.98" y="-2045.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调并解密分发。</text>
</g>
<!-- in_chatmessage -->
<g id="node14" class="node">
<title>in_chatmessage</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1335.27,-2164.8 916.73,-2164.8 916.73,-1984.8 1335.27,-1984.8 1335.27,-2164.8"/>
<text xml:space="preserve" text-anchor="start" x="1043.2" y="-2077.8" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;001 客户提问入参</text>
<text xml:space="preserve" text-anchor="start" x="936.79" y="-2054.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/normalize.js — 企业微信回调解密后归一化的提问。</text>
</g>
<!-- lane_ext -->
<g id="node15" class="node">
<title>lane_ext</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2646.02,-2164.8 2325.98,-2164.8 2325.98,-1984.8 2646.02,-1984.8 2646.02,-2164.8"/>
<text xml:space="preserve" text-anchor="start" x="2435.99" y="-2066.8" font-family="Arial" font-size="20.00" fill="#eff6ff">外部依赖泳道</text>
</g>
<!-- src_answerorchestrator -->
<g id="node16" class="node">
<title>src_answerorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1775.02,-1842 1444.98,-1842 1444.98,-1662 1775.02,-1662 1775.02,-1842"/>
<text xml:space="preserve" text-anchor="start" x="1524.42" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;002 应答编排器</text>
<text xml:space="preserve" text-anchor="start" x="1485.8" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/answer&#45;orchestrator.js —</text>
<text xml:space="preserve" text-anchor="start" x="1541.24" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答或转人工。</text>
</g>
<!-- biz_query -->
<g id="node17" class="node">
<title>biz_query</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1300.69,-1842 951.31,-1842 951.31,-1662 1300.69,-1662 1300.69,-1842"/>
<text xml:space="preserve" text-anchor="start" x="1037.64" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;001 检索查询对象</text>
<text xml:space="preserve" text-anchor="start" x="971.36" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="1036.4" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载检索意图与置信度计算。</text>
</g>
<!-- src_answerloop -->
<g id="node18" class="node">
<title>src_answerloop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1722.64,-1519.2 1333.36,-1519.2 1333.36,-1339.2 1722.64,-1339.2 1722.64,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="1434.08" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;003 知识应答循环</text>
<text xml:space="preserve" text-anchor="start" x="1373.36" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;answer&#45;loop&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="1457.15" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 检索增强的应答循环。</text>
</g>
<!-- src_handoffservice -->
<g id="node19" class="node">
<title>src_handoffservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2259.38,-1519.2 1832.62,-1519.2 1832.62,-1339.2 2259.38,-1339.2 2259.38,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="1960.42" y="-1432.2" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;006 转人工服务</text>
<text xml:space="preserve" text-anchor="start" x="1872.62" y="-1409.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/handoff&#45;service.js — 创建并跟踪人工工单。</text>
</g>
<!-- pod_ticket -->
<g id="node20" class="node">
<title>pod_ticket</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="951.45,-1519.2 624.55,-1519.2 624.55,-1339.2 951.45,-1339.2 951.45,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="685.19" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;001 工单持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="644.61" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="720.9" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">tickets 数组结构对应。</text>
</g>
<!-- src_replypolicy -->
<g id="node21" class="node">
<title>src_replypolicy</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1872.02,-1196.4 1541.98,-1196.4 1541.98,-1016.4 1872.02,-1016.4 1872.02,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1629.75" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;004 回复策略</text>
<text xml:space="preserve" text-anchor="start" x="1585.31" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/reply&#45;policy&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1638.24" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">置信度与风险阈值判定。</text>
</g>
<!-- src_ragflowknowledge -->
<g id="node22" class="node">
<title>src_ragflowknowledge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1432.29,-1196.4 1059.71,-1196.4 1059.71,-1016.4 1432.29,-1016.4 1432.29,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1123.19" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;005 RAGFlow 知识检索</text>
<text xml:space="preserve" text-anchor="start" x="1099.71" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;knowledge&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1189.74" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">检索与数据集访问。</text>
</g>
<!-- dao_store -->
<g id="node23" class="node">
<title>dao_store</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M950.18,-1180.04C950.18,-1189.07 877.49,-1196.4 788,-1196.4 698.51,-1196.4 625.82,-1189.07 625.82,-1180.04 625.82,-1180.04 625.82,-1032.76 625.82,-1032.76 625.82,-1023.73 698.51,-1016.4 788,-1016.4 877.49,-1016.4 950.18,-1023.73 950.18,-1032.76 950.18,-1032.76 950.18,-1180.04 950.18,-1180.04"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M950.18,-1180.04C950.18,-1171.01 877.49,-1163.67 788,-1163.67 698.51,-1163.67 625.82,-1171.01 625.82,-1180.04"/>
<text xml:space="preserve" text-anchor="start" x="693.53" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;001 本地存储访问</text>
<text xml:space="preserve" text-anchor="start" x="645.88" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 工单与反馈的读写边界。</text>
</g>
<!-- out_answer -->
<g id="node24" class="node">
<title>out_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="948.02,-873.6 627.98,-873.6 627.98,-693.6 948.02,-693.6 948.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="694.09" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;001 答复出参视图</text>
<text xml:space="preserve" text-anchor="start" x="681.72" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="700.48" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向企业微信会话的答复载荷。</text>
</g>
<!-- ui_information -->
<g id="node25" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2361.35,-550.8 1500.65,-550.8 1500.65,-370.8 2361.35,-370.8 2361.35,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1848.2" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="1524.67" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- src_store -->
<g id="node26" class="node">
<title>src_store</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2420.79,-228 1983.21,-228 1983.21,-48 2420.79,-48 2420.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="2124.75" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;007 本地存储</text>
<text xml:space="preserve" text-anchor="start" x="2023.21" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 以 JSON 文件承载工单与反馈状态。</text>
</g>
<!-- us_ask&#45;&gt;f_answer -->
<g id="edge1" class="edge">
<title>us_ask&#45;&gt;f_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1887.99,-2953.27C1916.66,-2911.46 1950.92,-2861.51 1980.28,-2818.69"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1982.29,-2820.4 1984.37,-2812.73 1977.96,-2817.43 1982.29,-2820.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1943.6,-2870.4 1943.6,-2893.2 1972.93,-2893.2 1972.93,-2870.4 1943.6,-2870.4"/>
<text xml:space="preserve" text-anchor="start" x="1946.6" y="-2876.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_ask&#45;&gt;i_step -->
<g id="edge2" class="edge">
<title>us_ask&#45;&gt;i_step</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1755.48,-2953.27C1721.78,-2911.37 1681.51,-2861.3 1647.03,-2818.43"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1649.08,-2816.79 1642.34,-2812.59 1644.99,-2820.08 1649.08,-2816.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1705.74,-2870.4 1705.74,-2893.2 1781.75,-2893.2 1781.75,-2870.4 1705.74,-2870.4"/>
<text xml:space="preserve" text-anchor="start" x="1708.74" y="-2876.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务步骤</text>
</g>
<!-- us_lowconfidence&#45;&gt;f_retrieval -->
<g id="edge3" class="edge">
<title>us_lowconfidence&#45;&gt;f_retrieval</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M369.18,-2953.27C340.12,-2911.46 305.39,-2861.51 275.63,-2818.69"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="277.91,-2817.38 271.48,-2812.72 273.6,-2820.37 277.91,-2817.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="326.19,-2870.4 326.19,-2893.2 355.52,-2893.2 355.52,-2870.4 326.19,-2870.4"/>
<text xml:space="preserve" text-anchor="start" x="329.19" y="-2876.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_lowconfidence&#45;&gt;i_goal -->
<g id="edge4" class="edge">
<title>us_lowconfidence&#45;&gt;i_goal</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M489.5,-2953.27C516.94,-2911.54 549.71,-2861.71 577.83,-2818.96"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="579.98,-2820.47 581.91,-2812.76 575.6,-2817.58 579.98,-2820.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="542.83,-2870.4 542.83,-2893.2 618.84,-2893.2 618.84,-2870.4 542.83,-2870.4"/>
<text xml:space="preserve" text-anchor="start" x="545.83" y="-2876.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
</g>
<!-- cvt_normalize&#45;&gt;in_chatmessage -->
<g id="edge5" class="edge">
<title>cvt_normalize&#45;&gt;in_chatmessage</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1126,-2953.45C1126,-2772.9 1126,-2363.99 1126,-2175"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1128.63,-2175.05 1126,-2167.55 1123.38,-2175.05 1128.63,-2175.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1126,-2547.6 1126,-2570.4 1263.48,-2570.4 1263.48,-2547.6 1126,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="1129" y="-2553.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 报文→IN&#45;001 映射</text>
</g>
<!-- cvt_normalize&#45;&gt;out_answer -->
<g id="edge6" class="edge">
<title>cvt_normalize&#45;&gt;out_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1080.97,-2953.44C967.29,-2723.77 670.6,-2088.11 570,-1519.2 557.64,-1449.28 550.41,-1068.29 571,-1016.4 591.39,-965.03 629.09,-918.34 667.42,-880.55"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="668.85,-882.81 672.4,-875.71 665.19,-879.05 668.85,-882.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="667.07,-1902 667.07,-1924.8 855.13,-1924.8 855.13,-1902 667.07,-1902"/>
<text xml:space="preserve" text-anchor="start" x="670.07" y="-1907.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 POD&#45;001→OUT&#45;001 映射</text>
</g>
<!-- lane_client&#45;&gt;lane_edge -->
<g id="edge7" class="edge">
<title>lane_client&#45;&gt;lane_edge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2486,-2953.27C2486,-2912.07 2486,-2862.96 2486,-2820.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2488.63,-2820.76 2486,-2813.26 2483.38,-2820.76 2488.63,-2820.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2486,-2870.4 2486,-2893.2 2562.01,-2893.2 2562.01,-2870.4 2486,-2870.4"/>
<text xml:space="preserve" text-anchor="start" x="2489" y="-2876.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">企业微信提问</text>
</g>
<!-- i_step&#45;&gt;i_state -->
<g id="edge8" class="edge">
<title>i_step&#45;&gt;i_state</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1695.97,-2630.47C1756.9,-2587.79 1829.95,-2536.62 1891.9,-2493.23"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1893.06,-2495.62 1897.7,-2489.17 1890.05,-2491.32 1893.06,-2495.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1811.73,-2547.6 1811.73,-2570.4 1887.75,-2570.4 1887.75,-2547.6 1811.73,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="1814.73" y="-2553.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">推进问答状态</text>
</g>
<!-- i_step&#45;&gt;ui_interaction -->
<g id="edge9" class="edge">
<title>i_step&#45;&gt;ui_interaction</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1557.91,-2630.47C1552.77,-2589.27 1546.65,-2540.16 1541.37,-2497.77"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1543.98,-2497.55 1540.45,-2490.43 1538.77,-2498.2 1543.98,-2497.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1550.2,-2547.6 1550.2,-2570.4 1602.88,-2570.4 1602.88,-2547.6 1550.2,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="1553.2" y="-2553.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">反馈交互</text>
</g>
<!-- lane_edge&#45;&gt;lane_core -->
<g id="edge10" class="edge">
<title>lane_edge&#45;&gt;lane_core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2367.2,-2630.81C2350.58,-2612.78 2335.92,-2592.48 2326.32,-2570.4 2314.56,-2543.34 2322.25,-2517.84 2339.32,-2495.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2341.14,-2497.11 2343.83,-2489.63 2337.06,-2493.8 2341.14,-2497.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2326.32,-2547.6 2326.32,-2570.4 2379,-2570.4 2379,-2547.6 2326.32,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="2329.32" y="-2553.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">触发应答</text>
</g>
<!-- i_state&#45;&gt;ui_information -->
<g id="edge11" class="edge">
<title>i_state&#45;&gt;ui_information</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2080.64,-2307.64C2183.07,-2126.84 2389.89,-1702.76 2314,-1339.2 2251.42,-1039.4 2080.5,-716.61 1989.62,-559.25"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1992.1,-558.29 1986.07,-553.12 1987.56,-560.93 1992.1,-558.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2330.37,-1417.8 2330.37,-1440.6 2406.38,-1440.6 2406.38,-1417.8 2330.37,-1417.8"/>
<text xml:space="preserve" text-anchor="start" x="2333.37" y="-1423.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">展示应答状态</text>
</g>
<!-- ui_interaction&#45;&gt;src_wechatcallback -->
<g id="edge12" class="edge">
<title>ui_interaction&#45;&gt;src_wechatcallback</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1551.46,-2307.67C1561.88,-2266.38 1574.31,-2217.15 1585.03,-2174.7"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1587.54,-2175.48 1586.83,-2167.56 1582.45,-2174.19 1587.54,-2175.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1571.93,-2224.8 1571.93,-2247.6 1636.27,-2247.6 1636.27,-2224.8 1571.93,-2224.8"/>
<text xml:space="preserve" text-anchor="start" x="1574.93" y="-2230.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">由回调触发</text>
</g>
<!-- ui_interaction&#45;&gt;in_chatmessage -->
<g id="edge13" class="edge">
<title>ui_interaction&#45;&gt;in_chatmessage</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1417.28,-2307.67C1363.88,-2265.16 1299.91,-2214.24 1245.54,-2170.96"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1247.46,-2169.13 1239.96,-2166.51 1244.19,-2173.24 1247.46,-2169.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1339.58,-2224.8 1339.58,-2247.6 1392.26,-2247.6 1392.26,-2224.8 1339.58,-2224.8"/>
<text xml:space="preserve" text-anchor="start" x="1342.58" y="-2230.6" font-family="Arial" font-size="14.00" fill="#eff5fd">提交提问</text>
</g>
<!-- lane_core&#45;&gt;lane_edge -->
<g id="edge14" class="edge">
<title>lane_core&#45;&gt;lane_edge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2486,-2487.43C2486,-2528.61 2486,-2577.72 2486,-2620.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2483.38,-2619.94 2486,-2627.44 2488.63,-2619.94 2483.38,-2619.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2486,-2547.6 2486,-2570.4 2585.35,-2570.4 2585.35,-2547.6 2486,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="2489" y="-2553.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回答复或工单号</text>
</g>
<!-- lane_core&#45;&gt;lane_ext -->
<g id="edge15" class="edge">
<title>lane_core&#45;&gt;lane_ext</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2381.81,-2307.94C2366.51,-2289.67 2353,-2269.31 2344.32,-2247.6 2333.79,-2221.22 2340.97,-2195.83 2356.57,-2173.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2358.54,-2174.79 2360.88,-2167.2 2354.31,-2171.67 2358.54,-2174.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2344.32,-2224.8 2344.32,-2247.6 2397,-2247.6 2397,-2224.8 2344.32,-2224.8"/>
<text xml:space="preserve" text-anchor="start" x="2347.32" y="-2230.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">检索知识</text>
</g>
<!-- src_wechatcallback&#45;&gt;src_answerorchestrator -->
<g id="edge16" class="edge">
<title>src_wechatcallback&#45;&gt;src_answerorchestrator</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1610,-1984.87C1610,-1943.67 1610,-1894.56 1610,-1852.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1612.63,-1852.36 1610,-1844.86 1607.38,-1852.36 1612.63,-1852.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1610,-1902 1610,-1924.8 1697.68,-1924.8 1697.68,-1902 1610,-1902"/>
<text xml:space="preserve" text-anchor="start" x="1613" y="-1907.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">分发归一化消息</text>
</g>
<!-- in_chatmessage&#45;&gt;biz_query -->
<g id="edge17" class="edge">
<title>in_chatmessage&#45;&gt;biz_query</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M1126,-1984.87C1126,-1943.67 1126,-1894.56 1126,-1852.17"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1128.63,-1852.36 1126,-1844.86 1123.38,-1852.36 1128.63,-1852.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1126,-1902 1126,-1924.8 1213.68,-1924.8 1213.68,-1902 1126,-1902"/>
<text xml:space="preserve" text-anchor="start" x="1129" y="-1907.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为检索查询</text>
</g>
<!-- lane_ext&#45;&gt;lane_core -->
<g id="edge18" class="edge">
<title>lane_ext&#45;&gt;lane_core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2486,-2164.63C2486,-2205.81 2486,-2254.92 2486,-2297.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2483.38,-2297.14 2486,-2304.64 2488.63,-2297.14 2483.38,-2297.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2486,-2224.8 2486,-2247.6 2562.01,-2247.6 2562.01,-2224.8 2486,-2224.8"/>
<text xml:space="preserve" text-anchor="start" x="2489" y="-2230.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">返回候选知识</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_answerloop -->
<g id="edge19" class="edge">
<title>src_answerorchestrator&#45;&gt;src_answerloop</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1587.27,-1662.07C1576.71,-1620.78 1564.13,-1571.55 1553.28,-1529.1"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1555.86,-1528.58 1551.46,-1521.96 1550.77,-1529.88 1555.86,-1528.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1571.46,-1579.2 1571.46,-1602 1624.13,-1602 1624.13,-1579.2 1571.46,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="1574.46" y="-1585" font-family="Arial" font-size="14.00" fill="#bbfcd3">请求应答</text>
</g>
<!-- src_answerorchestrator&#45;&gt;src_handoffservice -->
<g id="edge20" class="edge">
<title>src_answerorchestrator&#45;&gt;src_handoffservice</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1730.87,-1662.07C1788.76,-1619.47 1858.13,-1568.43 1917.03,-1525.09"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1918.35,-1527.38 1922.83,-1520.82 1915.24,-1523.15 1918.35,-1527.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1841.07,-1579.2 1841.07,-1602 1940.42,-1602 1940.42,-1579.2 1841.07,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="1844.07" y="-1585" font-family="Arial" font-size="14.00" fill="#bbfcd3">低置信度时转人工</text>
</g>
<!-- biz_query&#45;&gt;pod_ticket -->
<g id="edge21" class="edge">
<title>biz_query&#45;&gt;pod_ticket</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1032.3,-1662.07C987.79,-1619.82 934.52,-1569.27 889.1,-1526.16"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="891.03,-1524.37 883.79,-1521.11 887.42,-1528.18 891.03,-1524.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="967.13,-1579.2 967.13,-1602 1054.82,-1602 1054.82,-1579.2 967.13,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="970.13" y="-1585" font-family="Arial" font-size="14.00" fill="#eff5fd">低置信度落工单</text>
</g>
<!-- biz_query&#45;&gt;src_ragflowknowledge -->
<g id="edge22" class="edge">
<title>biz_query&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1142.56,-1662.19C1164.82,-1542.78 1204.28,-1331.13 1227.5,-1206.63"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1230.07,-1207.17 1228.86,-1199.31 1224.91,-1206.2 1230.07,-1207.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1201.83,-1417.8 1201.83,-1440.6 1254.51,-1440.6 1254.51,-1417.8 1201.83,-1417.8"/>
<text xml:space="preserve" text-anchor="start" x="1204.83" y="-1423.6" font-family="Arial" font-size="14.00" fill="#eff5fd">发起检索</text>
</g>
<!-- src_answerloop&#45;&gt;src_replypolicy -->
<g id="edge23" class="edge">
<title>src_answerloop&#45;&gt;src_replypolicy</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1577.62,-1339.27C1600.85,-1297.63 1628.59,-1247.92 1652.41,-1205.23"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1654.6,-1206.7 1655.96,-1198.87 1650.01,-1204.14 1654.6,-1206.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1622.87,-1256.4 1622.87,-1279.2 1687.21,-1279.2 1687.21,-1256.4 1622.87,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1625.87" y="-1262.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">校验置信度</text>
</g>
<!-- src_answerloop&#45;&gt;src_ragflowknowledge -->
<g id="edge24" class="edge">
<title>src_answerloop&#45;&gt;src_ragflowknowledge</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1449.82,-1339.27C1412.84,-1297.2 1368.61,-1246.88 1330.82,-1203.89"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1333.01,-1202.4 1326.08,-1198.5 1329.06,-1205.87 1333.01,-1202.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1395.46,-1256.4 1395.46,-1279.2 1471.47,-1279.2 1471.47,-1256.4 1395.46,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="1398.46" y="-1262.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">检索候选知识</text>
</g>
<!-- src_handoffservice&#45;&gt;src_store -->
<g id="edge25" class="edge">
<title>src_handoffservice&#45;&gt;src_store</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2259.31,-1356.53C2365.71,-1305.95 2472,-1225.79 2472,-1107.4 2472,-1107.4 2472,-1107.4 2472,-459.8 2472,-369.39 2408.45,-291.19 2343.01,-234.64"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2344.74,-232.67 2337.33,-229.82 2341.34,-236.67 2344.74,-232.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2472,-772.2 2472,-795 2536.34,-795 2536.34,-772.2 2472,-772.2"/>
<text xml:space="preserve" text-anchor="start" x="2475" y="-778" font-family="Arial" font-size="14.00" fill="#bbfcd3">持久化工单</text>
</g>
<!-- pod_ticket&#45;&gt;dao_store -->
<g id="edge26" class="edge">
<title>pod_ticket&#45;&gt;dao_store</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M788,-1339.27C788,-1298.41 788,-1249.78 788,-1207.63"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="790.63,-1207.87 788,-1200.37 785.38,-1207.87 790.63,-1207.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="788,-1256.4 788,-1279.2 840.68,-1279.2 840.68,-1256.4 788,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="791" y="-1262.2" font-family="Arial" font-size="14.00" fill="#eff5fd">写入工单</text>
</g>
<!-- dao_store&#45;&gt;out_answer -->
<g id="edge27" class="edge">
<title>dao_store&#45;&gt;out_answer</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M788,-1015.61C788,-974.6 788,-925.89 788,-883.8"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="790.63,-884.06 788,-876.56 785.38,-884.06 790.63,-884.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="788,-933.6 788,-956.4 864.01,-956.4 864.01,-933.6 788,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="791" y="-939.4" font-family="Arial" font-size="14.00" fill="#eff5fd">查询答复内容</text>
</g>
<!-- out_answer&#45;&gt;ui_information -->
<g id="edge28" class="edge">
<title>out_answer&#45;&gt;ui_information</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M947.83,-737.74C1117.11,-690.23 1389.08,-613.9 1604.1,-553.55"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1604.55,-556.15 1611.06,-551.6 1603.13,-551.1 1604.55,-556.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1393.77,-610.8 1393.77,-633.6 1446.45,-633.6 1446.45,-610.8 1393.77,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1396.77" y="-616.6" font-family="Arial" font-size="14.00" fill="#eff5fd">渲染答复</text>
</g>
<!-- ui_information&#45;&gt;src_store -->
<g id="edge29" class="edge">
<title>ui_information&#45;&gt;src_store</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2006.13,-370.87C2041.59,-328.88 2083.99,-278.69 2120.26,-235.76"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2122.17,-237.57 2125.01,-230.14 2118.16,-234.18 2122.17,-237.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2074.63,-288 2074.63,-310.8 2150.64,-310.8 2150.64,-288 2074.63,-288"/>
<text xml:space="preserve" text-anchor="start" x="2077.63" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">读取工单状态</text>
</g>
</g>
</svg>
`;case`feat001NFFChain`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="4275pt" height="2910pt"
 viewBox="0.00 0.00 4275.00 2910.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2894.65)">
<g id="clust1" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-2871.6 4237,-2871.6 4237,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-2858.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="900.39,-2810.4 47.61,-2810.4 47.61,-2630.4 900.39,-2630.4 900.39,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="328.96" y="-2732.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="67.67" y="-2709.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="455.24" y="-2691.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node2" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1569.27,-2810.4 1010.73,-2810.4 1010.73,-2630.4 1569.27,-2630.4 1569.27,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="1116.07" y="-2732.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="1030.78" y="-2709.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="1196.23" y="-2691.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node3" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2394.62,-2810.4 1679.38,-2810.4 1679.38,-2630.4 2394.62,-2630.4 2394.62,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="1869.73" y="-2723.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="1699.43" y="-2700.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- src_integrationroutes -->
<g id="node4" class="node">
<title>src_integrationroutes</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2835.02,-2810.4 2504.98,-2810.4 2504.98,-2630.4 2835.02,-2630.4 2835.02,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="2576.08" y="-2732.4" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;101 集成状态路由</text>
<text xml:space="preserve" text-anchor="start" x="2560.79" y="-2709.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="2594.99" y="-2691.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">功能概览与集成状态查询。</text>
</g>
<!-- cvt_probe -->
<g id="node5" class="node">
<title>cvt_probe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3336.74,-2810.4 2945.26,-2810.4 2945.26,-2630.4 3336.74,-2630.4 3336.74,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="3039.86" y="-2732.4" font-family="Arial" font-size="20.00" fill="#eff6ff">CVT&#45;101 探测结果转换器</text>
<text xml:space="preserve" text-anchor="start" x="2989.71" y="-2709.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js — 覆盖</text>
<text xml:space="preserve" text-anchor="start" x="2969.28" y="-2691.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">BIZ&#45;101→OUT&#45;101 与 BIZ&#45;101→POD&#45;101 两组映射。</text>
</g>
<!-- lane_operator -->
<g id="node6" class="node">
<title>lane_operator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3767.02,-2810.4 3446.98,-2810.4 3446.98,-2630.4 3767.02,-2630.4 3767.02,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="3556.99" y="-2712.4" font-family="Arial" font-size="20.00" fill="#eff6ff">运营人员泳道</text>
</g>
<!-- nf_kbempty -->
<g id="node7" class="node">
<title>nf_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1158.82,-2487.6 573.18,-2487.6 573.18,-2307.6 1158.82,-2307.6 1158.82,-2487.6"/>
<text xml:space="preserve" text-anchor="start" x="738.19" y="-2400.6" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;101 知识库为零条时状态可见</text>
<text xml:space="preserve" text-anchor="start" x="597.19" y="-2377.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</text>
</g>
<!-- i_goal -->
<g id="node8" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="463.59,-2487.6 48.41,-2487.6 48.41,-2307.6 463.59,-2307.6 463.59,-2487.6"/>
<text xml:space="preserve" text-anchor="start" x="197.09" y="-2400.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;101 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="68.46" y="-2377.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
<!-- nf_ragtimeout -->
<g id="node9" class="node">
<title>nf_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1380.5,-1519.2 1013.5,-1519.2 1013.5,-1339.2 1380.5,-1339.2 1380.5,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="1037.52" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;102 RAGFlow 超 8 秒时客户可感知</text>
<text xml:space="preserve" text-anchor="start" x="1075.31" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8</text>
<text xml:space="preserve" text-anchor="start" x="1040.72" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">秒下发带说明的提示，客服不必反复刷新。角色：客户。</text>
</g>
<!-- nf_llmdown -->
<g id="node10" class="node">
<title>nf_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2446.06,-1519.2 1897.94,-1519.2 1897.94,-1339.2 2446.06,-1339.2 2446.06,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="2038.63" y="-1432.2" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;103 LLM 不可用时自动转人工</text>
<text xml:space="preserve" text-anchor="start" x="1921.95" y="-1409.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</text>
</g>
<!-- i_step -->
<g id="node11" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1893.69,-2487.6 1404.31,-2487.6 1404.31,-2307.6 1893.69,-2307.6 1893.69,-2487.6"/>
<text xml:space="preserve" text-anchor="start" x="1573.42" y="-2409.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑</text>
<text xml:space="preserve" text-anchor="start" x="1424.37" y="-2386.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →</text>
<text xml:space="preserve" text-anchor="start" x="1586.49" y="-2368.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">分发对应提示或工单。</text>
</g>
<!-- src_ragflowprobe -->
<g id="node12" class="node">
<title>src_ragflowprobe</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3043.45,-873.6 2662.55,-873.6 2662.55,-693.6 3043.45,-693.6 3043.45,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2713.52" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;104 RAGFlow 生命周期探针</text>
<text xml:space="preserve" text-anchor="start" x="2702.55" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="2733.4" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 校验 RAGFlow 数据集状态与可用性。</text>
</g>
<!-- lane_edge -->
<g id="node13" class="node">
<title>lane_edge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3835.02,-2487.6 3514.98,-2487.6 3514.98,-2307.6 3835.02,-2307.6 3835.02,-2487.6"/>
<text xml:space="preserve" text-anchor="start" x="3616.66" y="-2389.6" font-family="Arial" font-size="20.00" fill="#eff6ff">服务端接入泳道</text>
</g>
<!-- ui_notice -->
<g id="node14" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1819.82,-1196.4 1184.18,-1196.4 1184.18,-1016.4 1819.82,-1016.4 1819.82,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1419.2" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="1208.19" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
<!-- in_probequery -->
<g id="node15" class="node">
<title>in_probequery</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3835.02,-2164.8 3514.98,-2164.8 3514.98,-1984.8 3835.02,-1984.8 3835.02,-2164.8"/>
<text xml:space="preserve" text-anchor="start" x="3592.2" y="-2086.8" font-family="Arial" font-size="20.00" fill="#eff6ff">IN&#45;101 状态探测入参</text>
<text xml:space="preserve" text-anchor="start" x="3565.79" y="-2063.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="3593.73" y="-2045.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">控制台发起的集成状态查询。</text>
</g>
<!-- src_knowledgealert -->
<g id="node16" class="node">
<title>src_knowledgealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2076.71,-873.6 1723.29,-873.6 1723.29,-693.6 2076.71,-693.6 2076.71,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1822.75" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;103 知识告警</text>
<text xml:space="preserve" text-anchor="start" x="1763.29" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/knowledge&#45;alert&#45;service.js —</text>
<text xml:space="preserve" text-anchor="start" x="1818.73" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">暴露知识新鲜度与空库问题。</text>
</g>
<!-- biz_proberesult -->
<g id="node17" class="node">
<title>biz_proberesult</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3761.51,-1842 3420.49,-1842 3420.49,-1662 3761.51,-1662 3761.51,-1842"/>
<text xml:space="preserve" text-anchor="start" x="3502.64" y="-1764" font-family="Arial" font-size="20.00" fill="#eff6ff">BIZ&#45;101 探测结果对象</text>
<text xml:space="preserve" text-anchor="start" x="3440.55" y="-1741" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/ragflow&#45;lifecycle&#45;probe&#45;service.js</text>
<text xml:space="preserve" text-anchor="start" x="3470.14" y="-1723" font-family="Arial" font-size="15.00" fill="#bfdbfe">— 承载条目数、响应耗时与调用结果判定。</text>
</g>
<!-- src_evaluationgate -->
<g id="node18" class="node">
<title>src_evaluationgate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1725.02,-550.8 1394.98,-550.8 1394.98,-370.8 1725.02,-370.8 1725.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1482.75" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;102 评测闸门</text>
<text xml:space="preserve" text-anchor="start" x="1451.21" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/services/evaluation&#45;gate.js —</text>
<text xml:space="preserve" text-anchor="start" x="1447.48" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">本地发布策略门禁，判定是否阻断应答。</text>
</g>
<!-- pod_alert -->
<g id="node19" class="node">
<title>pod_alert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3290.45,-1519.2 2963.55,-1519.2 2963.55,-1339.2 3290.45,-1339.2 3290.45,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="3024.19" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">POD&#45;101 告警持久化实体</text>
<text xml:space="preserve" text-anchor="start" x="2983.61" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">data/local&#45;mvp&#45;store.json — 与 store.json 中</text>
<text xml:space="preserve" text-anchor="start" x="3062.82" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">alerts 数组结构对应。</text>
</g>
<!-- out_status -->
<g id="node20" class="node">
<title>out_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3720.02,-1519.2 3399.98,-1519.2 3399.98,-1339.2 3720.02,-1339.2 3720.02,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="3466.09" y="-1441.2" font-family="Arial" font-size="20.00" fill="#eff6ff">OUT&#45;101 状态出参视图</text>
<text xml:space="preserve" text-anchor="start" x="3450.79" y="-1418.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js —</text>
<text xml:space="preserve" text-anchor="start" x="3491.24" y="-1400.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">面向控制台的状态载荷。</text>
</g>
<!-- lane_ext -->
<g id="node21" class="node">
<title>lane_ext</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4150.02,-1519.2 3829.98,-1519.2 3829.98,-1339.2 4150.02,-1339.2 4150.02,-1519.2"/>
<text xml:space="preserve" text-anchor="start" x="3939.99" y="-1421.2" font-family="Arial" font-size="20.00" fill="#eff6ff">外部依赖泳道</text>
</g>
<!-- src_storealert -->
<g id="node22" class="node">
<title>src_storealert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1773.38,-228 1346.62,-228 1346.62,-48 1773.38,-48 1773.38,-228"/>
<text xml:space="preserve" text-anchor="start" x="1466.08" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;106 告警状态存储</text>
<text xml:space="preserve" text-anchor="start" x="1386.62" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 本链侧的告警与状态快照存储单元。</text>
</g>
<!-- dao_alert -->
<g id="node23" class="node">
<title>dao_alert</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M3381.68,-1180.04C3381.68,-1189.07 3303.38,-1196.4 3207,-1196.4 3110.62,-1196.4 3032.32,-1189.07 3032.32,-1180.04 3032.32,-1180.04 3032.32,-1032.76 3032.32,-1032.76 3032.32,-1023.73 3110.62,-1016.4 3207,-1016.4 3303.38,-1016.4 3381.68,-1023.73 3381.68,-1032.76 3381.68,-1032.76 3381.68,-1180.04 3381.68,-1180.04"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M3381.68,-1180.04C3381.68,-1171.01 3303.38,-1163.67 3207,-1163.67 3110.62,-1163.67 3032.32,-1171.01 3032.32,-1180.04"/>
<text xml:space="preserve" text-anchor="start" x="3112.53" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">DAO&#45;101 告警存储访问</text>
<text xml:space="preserve" text-anchor="start" x="3052.38" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/domain/store.js — 告警与状态快照的读写边界。</text>
</g>
<!-- ui_status -->
<g id="node24" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2581.55,-1196.4 2158.45,-1196.4 2158.45,-1016.4 2581.55,-1016.4 2581.55,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2278.86" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="2182.46" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
<!-- src_operatorui -->
<g id="node25" class="node">
<title>src_operatorui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2547.12,-873.6 2192.88,-873.6 2192.88,-693.6 2547.12,-693.6 2547.12,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2267.75" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">SRC&#45;105 运营人员控制台</text>
<text xml:space="preserve" text-anchor="start" x="2232.88" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/ui/operator.html — 运营人员单页控制台。</text>
</g>
<!-- lane_core -->
<g id="node26" class="node">
<title>lane_core</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4197.02,-2810.4 3876.98,-2810.4 3876.98,-2630.4 4197.02,-2630.4 4197.02,-2810.4"/>
<text xml:space="preserve" text-anchor="start" x="3995.33" y="-2712.4" font-family="Arial" font-size="20.00" fill="#eff6ff">判定层泳道</text>
</g>
<!-- us_kbempty&#45;&gt;nf_kbempty -->
<g id="edge1" class="edge">
<title>us_kbempty&#45;&gt;nf_kbempty</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M582.67,-2630.47C634.51,-2588.05 696.58,-2537.25 749.4,-2494.02"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="750.97,-2496.13 755.11,-2489.35 747.65,-2492.07 750.97,-2496.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="681.75,-2547.6 681.75,-2570.4 711.09,-2570.4 711.09,-2547.6 681.75,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="684.75" y="-2553.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_kbempty&#45;&gt;i_goal -->
<g id="edge2" class="edge">
<title>us_kbempty&#45;&gt;i_goal</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M413.56,-2630.47C385.15,-2588.66 351.21,-2538.71 322.12,-2495.89"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="324.45,-2494.66 318.07,-2489.93 320.11,-2497.61 324.45,-2494.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="371.54,-2547.6 371.54,-2570.4 447.55,-2570.4 447.55,-2547.6 371.54,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="374.54" y="-2553.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
</g>
<!-- us_ragtimeout&#45;&gt;nf_ragtimeout -->
<g id="edge3" class="edge">
<title>us_ragtimeout&#45;&gt;nf_ragtimeout</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1281.49,-2630.64C1276.05,-2566.29 1270,-2477.14 1270,-2398.6 1270,-2398.6 1270,-2398.6 1270,-1751 1270,-1675.23 1250.4,-1591.85 1231.51,-1529.09"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1234.07,-1528.5 1229.37,-1522.09 1229.05,-1530.03 1234.07,-1528.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1270,-2063.4 1270,-2086.2 1299.34,-2086.2 1299.34,-2063.4 1270,-2063.4"/>
<text xml:space="preserve" text-anchor="start" x="1273" y="-2069.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_ragtimeout&#45;&gt;i_step -->
<g id="edge4" class="edge">
<title>us_ragtimeout&#45;&gt;i_step</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1389.52,-2630.47C1436.9,-2588.13 1493.61,-2537.46 1541.91,-2494.29"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1543.49,-2496.4 1547.34,-2489.45 1539.99,-2492.49 1543.49,-2496.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1480.26,-2547.6 1480.26,-2570.4 1579.62,-2570.4 1579.62,-2547.6 1480.26,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="1483.26" y="-2553.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为场景判定逻辑</text>
</g>
<!-- us_llmdown&#45;&gt;nf_llmdown -->
<g id="edge5" class="edge">
<title>us_llmdown&#45;&gt;nf_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2065.8,-2630.55C2083.96,-2566.73 2104,-2478.25 2104,-2398.6 2104,-2398.6 2104,-2398.6 2104,-1751 2104,-1675.34 2122.32,-1591.79 2139.95,-1528.92"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2142.41,-1529.86 2141.94,-1521.93 2137.36,-1528.42 2142.41,-1529.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2104,-2063.4 2104,-2086.2 2133.34,-2086.2 2133.34,-2063.4 2104,-2063.4"/>
<text xml:space="preserve" text-anchor="start" x="2107" y="-2069.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_llmdown&#45;&gt;i_step -->
<g id="edge6" class="edge">
<title>us_llmdown&#45;&gt;i_step</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1929.44,-2630.47C1878.13,-2588.05 1816.69,-2537.25 1764.41,-2494.02"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1766.22,-2492.11 1758.77,-2489.36 1762.88,-2496.16 1766.22,-2492.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1854.63,-2547.6 1854.63,-2570.4 1953.99,-2570.4 1953.99,-2547.6 1854.63,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="1857.63" y="-2553.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为场景判定逻辑</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_ragflowprobe -->
<g id="edge7" class="edge">
<title>src_integrationroutes&#45;&gt;src_ragflowprobe</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2753.73,-2630.49C2801.92,-2569.95 2853,-2485.32 2853,-2398.6 2853,-2398.6 2853,-2398.6 2853,-1105.4 2853,-1031.14 2853,-947.22 2853,-883.84"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2855.63,-883.98 2853,-876.48 2850.38,-883.98 2855.63,-883.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2853,-1740.6 2853,-1763.4 2940.68,-1763.4 2940.68,-1740.6 2853,-1740.6"/>
<text xml:space="preserve" text-anchor="start" x="2856" y="-1746.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">探测数据集状态</text>
</g>
<!-- src_integrationroutes&#45;&gt;src_knowledgealert -->
<g id="edge8" class="edge">
<title>src_integrationroutes&#45;&gt;src_knowledgealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M2620.6,-2630.72C2590.19,-2567.89 2557,-2480.53 2557,-2398.6 2557,-2398.6 2557,-2398.6 2557,-1589.6 2557,-1475.56 2576.47,-1424.7 2501,-1339.2 2376.64,-1198.31 2243.21,-1321.53 2103,-1196.4 2009.33,-1112.8 1954.08,-976.18 1925.43,-883.44"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1927.97,-882.79 1923.28,-876.37 1922.95,-884.31 1927.97,-882.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2557,-1740.6 2557,-1763.4 2633.01,-1763.4 2633.01,-1740.6 2557,-1740.6"/>
<text xml:space="preserve" text-anchor="start" x="2560" y="-1746.4" font-family="Arial" font-size="14.00" fill="#bbfcd3">查询空库告警</text>
</g>
<!-- cvt_probe&#45;&gt;biz_proberesult -->
<g id="edge9" class="edge">
<title>cvt_probe&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M3176.13,-2630.4C3231.99,-2490.84 3346.42,-2212.88 3460,-1984.8 3482.32,-1939.99 3509.2,-1891.6 3532.79,-1850.69"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="3534.92,-1852.24 3536.41,-1844.43 3530.38,-1849.61 3534.92,-1852.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3344.94,-2224.8 3344.94,-2247.6 3524.44,-2247.6 3524.44,-2224.8 3344.94,-2224.8"/>
<text xml:space="preserve" text-anchor="start" x="3347.94" y="-2230.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;101→OUT&#45;101 映射</text>
</g>
<!-- cvt_probe&#45;&gt;pod_alert -->
<g id="edge10" class="edge">
<title>cvt_probe&#45;&gt;pod_alert</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M3123.92,-2630.58C3113.05,-2566.38 3101,-2477.46 3101,-2398.6 3101,-2398.6 3101,-2398.6 3101,-1751 3101,-1676.5 3108.05,-1592.59 3114.81,-1529.27"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="3117.41,-1529.64 3115.61,-1521.9 3112.19,-1529.08 3117.41,-1529.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3101,-2063.4 3101,-2086.2 3281.28,-2086.2 3281.28,-2063.4 3101,-2063.4"/>
<text xml:space="preserve" text-anchor="start" x="3104" y="-2069.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">负责 BIZ&#45;101→POD&#45;101 映射</text>
</g>
<!-- lane_operator&#45;&gt;lane_edge -->
<g id="edge11" class="edge">
<title>lane_operator&#45;&gt;lane_edge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3625.85,-2630.47C3634.6,-2589.18 3645.04,-2539.95 3654.04,-2497.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3656.56,-2498.27 3655.54,-2490.39 3651.42,-2497.18 3656.56,-2498.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3643.04,-2547.6 3643.04,-2570.4 3695.71,-2570.4 3695.71,-2547.6 3643.04,-2547.6"/>
<text xml:space="preserve" text-anchor="start" x="3646.04" y="-2553.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">查询状态</text>
</g>
<!-- i_step&#45;&gt;ui_notice -->
<g id="edge12" class="edge">
<title>i_step&#45;&gt;ui_notice</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1578.09,-2307.89C1536.08,-2246.43 1491,-2160.7 1491,-2075.8 1491,-2075.8 1491,-2075.8 1491,-1428.2 1491,-1353.9 1493.98,-1269.98 1496.84,-1206.61"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1499.46,-1206.86 1497.18,-1199.25 1494.21,-1206.62 1499.46,-1206.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1491,-1740.6 1491,-1763.4 1567.01,-1763.4 1567.01,-1740.6 1491,-1740.6"/>
<text xml:space="preserve" text-anchor="start" x="1494" y="-1746.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">反馈场景提示</text>
</g>
<!-- i_step&#45;&gt;ui_status -->
<g id="edge13" class="edge">
<title>i_step&#45;&gt;ui_status</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1710.33,-2307.61C1747.19,-2245.52 1787,-2159.16 1787,-2075.8 1787,-2075.8 1787,-2075.8 1787,-1589.6 1787,-1475.56 1770.57,-1427.28 1843,-1339.2 1919.72,-1245.9 2041.46,-1189.03 2148.6,-1154.99"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2149.33,-1157.51 2155.7,-1152.77 2147.76,-1152.5 2149.33,-1157.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1787,-1740.6 1787,-1763.4 1863.01,-1763.4 1863.01,-1740.6 1787,-1740.6"/>
<text xml:space="preserve" text-anchor="start" x="1790" y="-1746.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">反馈知识状态</text>
</g>
<!-- lane_edge&#45;&gt;in_probequery -->
<g id="edge14" class="edge">
<title>lane_edge&#45;&gt;in_probequery</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3675,-2307.67C3675,-2266.47 3675,-2217.36 3675,-2174.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3677.63,-2175.16 3675,-2167.66 3672.38,-2175.16 3677.63,-2175.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3675,-2224.8 3675,-2247.6 3751.01,-2247.6 3751.01,-2224.8 3675,-2224.8"/>
<text xml:space="preserve" text-anchor="start" x="3678" y="-2230.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">构造探测入参</text>
</g>
<!-- ui_notice&#45;&gt;src_knowledgealert -->
<g id="edge15" class="edge">
<title>ui_notice&#45;&gt;src_knowledgealert</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1612.34,-1016.47C1664.96,-974.05 1727.99,-923.25 1781.61,-880.02"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1783.25,-882.08 1787.44,-875.33 1779.95,-877.99 1783.25,-882.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1712.93,-933.6 1712.93,-956.4 1765.61,-956.4 1765.61,-933.6 1712.93,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1715.93" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">上报告警</text>
</g>
<!-- ui_notice&#45;&gt;src_evaluationgate -->
<g id="edge16" class="edge">
<title>ui_notice&#45;&gt;src_evaluationgate</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1510,-1016.59C1520.76,-897.18 1539.84,-685.53 1551.06,-561.03"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1553.65,-561.46 1551.71,-553.75 1548.43,-560.98 1553.65,-561.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1538.65,-772.2 1538.65,-795 1649.67,-795 1649.67,-772.2 1538.65,-772.2"/>
<text xml:space="preserve" text-anchor="start" x="1541.65" y="-778" font-family="Arial" font-size="14.00" fill="#d4f2ff">由门禁决定是否阻断</text>
</g>
<!-- in_probequery&#45;&gt;biz_proberesult -->
<g id="edge17" class="edge">
<title>in_probequery&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M3651.71,-1984.87C3640.9,-1943.58 3628.01,-1894.35 3616.9,-1851.9"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3619.47,-1851.35 3615.03,-1844.76 3614.39,-1852.68 3619.47,-1851.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3635.52,-1902 3635.52,-1924.8 3723.2,-1924.8 3723.2,-1902 3635.52,-1902"/>
<text xml:space="preserve" text-anchor="start" x="3638.52" y="-1907.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">转换为探测结果</text>
</g>
<!-- src_knowledgealert&#45;&gt;src_evaluationgate -->
<g id="edge18" class="edge">
<title>src_knowledgealert&#45;&gt;src_evaluationgate</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1805.74,-693.67C1760.97,-651.42 1707.39,-600.87 1661.7,-557.76"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1663.6,-555.94 1656.35,-552.71 1660,-559.76 1663.6,-555.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1740.19,-610.8 1740.19,-633.6 1816.21,-633.6 1816.21,-610.8 1740.19,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1743.19" y="-616.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">提交发布判定</text>
</g>
<!-- biz_proberesult&#45;&gt;pod_alert -->
<g id="edge19" class="edge">
<title>biz_proberesult&#45;&gt;pod_alert</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,2" d="M3462.37,-1662.07C3400.64,-1619.39 3326.63,-1568.22 3263.87,-1524.83"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3265.63,-1522.86 3257.97,-1520.75 3262.65,-1527.18 3265.63,-1522.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3372.91,-1579.2 3372.91,-1602 3460.6,-1602 3460.6,-1579.2 3372.91,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="3375.91" y="-1585" font-family="Arial" font-size="14.00" fill="#cbd5e1">异常转告警实体</text>
</g>
<!-- biz_proberesult&#45;&gt;out_status -->
<g id="edge20" class="edge">
<title>biz_proberesult&#45;&gt;out_status</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M3575.69,-1662.17C3572.73,-1642.41 3569.94,-1621.53 3567.99,-1602 3565.64,-1578.58 3563.98,-1553.29 3562.81,-1529.51"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="3565.43,-1529.45 3562.46,-1522.08 3560.19,-1529.7 3565.43,-1529.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3567.99,-1579.2 3567.99,-1602 3644,-1602 3644,-1579.2 3567.99,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="3570.99" y="-1585" font-family="Arial" font-size="14.00" fill="#eff5fd">渲染状态载荷</text>
</g>
<!-- biz_proberesult&#45;&gt;lane_ext -->
<g id="edge21" class="edge">
<title>biz_proberesult&#45;&gt;lane_ext</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M3761.25,-1676.5C3799.3,-1655.53 3837.86,-1630.52 3870,-1602 3893.94,-1580.76 3915.6,-1553.82 3933.72,-1527.62"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="3935.73,-1529.33 3937.77,-1521.65 3931.39,-1526.38 3935.73,-1529.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3890.29,-1579.2 3890.29,-1602 3989.64,-1602 3989.64,-1579.2 3890.29,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="3893.29" y="-1585" font-family="Arial" font-size="14.00" fill="#eff5fd">探测数据集可用性</text>
</g>
<!-- src_evaluationgate&#45;&gt;src_storealert -->
<g id="edge22" class="edge">
<title>src_evaluationgate&#45;&gt;src_storealert</title>
<path fill="none" stroke="#15803d" stroke-width="2" d="M1560,-370.87C1560,-329.67 1560,-280.56 1560,-238.17"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1562.63,-238.36 1560,-230.86 1557.38,-238.36 1562.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1560,-288 1560,-310.8 1636.01,-310.8 1636.01,-288 1560,-288"/>
<text xml:space="preserve" text-anchor="start" x="1563" y="-293.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">读取告警快照</text>
</g>
<!-- pod_alert&#45;&gt;dao_alert -->
<g id="edge23" class="edge">
<title>pod_alert&#45;&gt;dao_alert</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M3149.18,-1339.27C3159.39,-1298.32 3171.55,-1249.57 3182.07,-1207.36"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="3184.57,-1208.19 3183.84,-1200.28 3179.48,-1206.92 3184.57,-1208.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3169.4,-1256.4 3169.4,-1279.2 3222.07,-1279.2 3222.07,-1256.4 3169.4,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="3172.4" y="-1262.2" font-family="Arial" font-size="14.00" fill="#eff5fd">写入告警</text>
</g>
<!-- out_status&#45;&gt;ui_status -->
<g id="edge24" class="edge">
<title>out_status&#45;&gt;ui_status</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M3400.21,-1357.71C3381.79,-1350.89 3363.12,-1344.53 3345,-1339.2 3202.12,-1297.15 3160.65,-1311.72 3015.31,-1279.2 2873.35,-1247.44 2715.52,-1205.54 2591.48,-1171.07"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="2592.33,-1168.58 2584.4,-1169.1 2590.92,-1173.64 2592.33,-1168.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3015.31,-1256.4 3015.31,-1279.2 3138,-1279.2 3138,-1256.4 3015.31,-1256.4"/>
<text xml:space="preserve" text-anchor="start" x="3018.31" y="-1262.2" font-family="Arial" font-size="14.00" fill="#eff5fd">显示条目数与异常提示</text>
</g>
<!-- lane_ext&#45;&gt;biz_proberesult -->
<g id="edge25" class="edge">
<title>lane_ext&#45;&gt;biz_proberesult</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M3848.29,-1519.16C3820.66,-1538.09 3792.4,-1558.6 3766.99,-1579.2 3738.49,-1602.3 3709.29,-1629.25 3683.08,-1654.86"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="3681.44,-1652.79 3677.93,-1659.92 3685.12,-1656.54 3681.44,-1652.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3766.99,-1579.2 3766.99,-1602 3843,-1602 3843,-1579.2 3766.99,-1579.2"/>
<text xml:space="preserve" text-anchor="start" x="3769.99" y="-1585" font-family="Arial" font-size="14.00" fill="#eff5fd">返回探测结论</text>
</g>
<!-- ui_status&#45;&gt;src_operatorui -->
<g id="edge26" class="edge">
<title>ui_status&#45;&gt;src_operatorui</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2370,-1016.47C2370,-975.27 2370,-926.16 2370,-883.77"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2372.63,-883.96 2370,-876.46 2367.38,-883.96 2372.63,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2370,-933.6 2370,-956.4 2446.01,-956.4 2446.01,-933.6 2370,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="2373" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">渲染于控制台</text>
</g>
</g>
</svg>
`;case`feat001FBusiness`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1840pt" height="1296pt"
 viewBox="0.00 0.00 1840.00 1296.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1280.65)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 1802,-1257.6 1802,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<!-- us_ask -->
<g id="node1" class="node">
<title>us_ask</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="855.88,-1196.4 78.12,-1196.4 78.12,-1016.4 855.88,-1016.4 855.88,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="346.97" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;001 客户提问获得专业答复</text>
<text xml:space="preserve" text-anchor="start" x="98.18" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，我在企业微信提问美妆问题，以便拿到有依据的答复而不是广告。验收：答复内容来自知识库检索结果且不含未验证成分。</text>
</g>
<!-- us_lowconfidence -->
<g id="node2" class="node">
<title>us_lowconfidence</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1746.63,-1196.4 981.37,-1196.4 981.37,-1016.4 1746.63,-1016.4 1746.63,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1235.63" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;002 答不准时转人工而非硬答</text>
<text xml:space="preserve" text-anchor="start" x="1001.43" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，当知识库没有覆盖我的问题时，以便被转给人工而不是收到编造答案。验收：置信度不足时生成人工工单并告知我等待。</text>
</g>
<!-- f_answer -->
<g id="node3" class="node">
<title>f_answer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-873.6 47.98,-873.6 47.98,-693.6 368.02,-693.6 368.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="129.09" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;001 应答编排能力</text>
<text xml:space="preserve" text-anchor="start" x="70.47" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">决定自动应答还是转人工，串联检索与策略校验。</text>
</g>
<!-- i_step -->
<g id="node4" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="893.59,-873.6 478.41,-873.6 478.41,-693.6 893.59,-693.6 893.59,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="627.09" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤</text>
<text xml:space="preserve" text-anchor="start" x="498.46" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</text>
</g>
<!-- f_retrieval -->
<g id="node5" class="node">
<title>f_retrieval</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1324.02,-873.6 1003.98,-873.6 1003.98,-693.6 1324.02,-693.6 1324.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1085.09" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">F&#45;002 知识检索能力</text>
<text xml:space="preserve" text-anchor="start" x="1033.98" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">从 RAGFlow 检索候选知识并按置信度排序。</text>
</g>
<!-- i_goal -->
<g id="node6" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1761.83,-873.6 1434.17,-873.6 1434.17,-693.6 1761.83,-693.6 1761.83,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1539.09" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="1454.22" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</text>
</g>
<!-- i_state -->
<g id="node7" class="node">
<title>i_state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="674.84,-550.8 297.16,-550.8 297.16,-370.8 674.84,-370.8 674.84,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="427.09" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;002 业务状态</text>
<text xml:space="preserve" text-anchor="start" x="317.22" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">问答状态：已接收 → 检索中 → 应答中 → 已答复 / 待人工。</text>
</g>
<!-- ui_interaction -->
<g id="node8" class="node">
<title>ui_interaction</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1183.05,-550.8 784.95,-550.8 784.95,-370.8 1183.05,-370.8 1183.05,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="884.53" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;001 企业微信会话交互</text>
<text xml:space="preserve" text-anchor="start" x="808.97" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户在企业微信会话中提问与接收答复；答复与提问同屏呈现。</text>
</g>
<!-- ui_information -->
<g id="node9" class="node">
<title>ui_information</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="916.35,-228 55.65,-228 55.65,-48 916.35,-48 916.35,-228"/>
<text xml:space="preserve" text-anchor="start" x="403.2" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;002 答复信息设计</text>
<text xml:space="preserve" text-anchor="start" x="79.67" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示字段：问题原文、知识来源条目、答复正文。覆盖空态（无检索结果）、加载态（检索中）、错误态（检索失败）、无权限态（未授权知识）。</text>
</g>
<!-- us_ask&#45;&gt;f_answer -->
<g id="edge1" class="edge">
<title>us_ask&#45;&gt;f_answer</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M395.2,-1016.47C361.3,-974.48 320.78,-924.29 286.12,-881.36"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="288.37,-879.97 281.62,-875.78 284.29,-883.27 288.37,-879.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="345.27,-933.6 345.27,-956.4 374.6,-956.4 374.6,-933.6 345.27,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="348.27" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_ask&#45;&gt;i_step -->
<g id="edge2" class="edge">
<title>us_ask&#45;&gt;i_step</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M527.71,-1016.47C556.25,-974.66 590.35,-924.71 619.58,-881.89"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="621.59,-883.6 623.65,-875.93 617.26,-880.64 621.59,-883.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="583.07,-933.6 583.07,-956.4 659.08,-956.4 659.08,-933.6 583.07,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="586.07" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务步骤</text>
</g>
<!-- us_lowconfidence&#45;&gt;f_retrieval -->
<g id="edge3" class="edge">
<title>us_lowconfidence&#45;&gt;f_retrieval</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1308.55,-1016.47C1282.54,-974.74 1251.48,-924.91 1224.82,-882.16"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1227.18,-880.97 1220.98,-876 1222.72,-883.75 1227.18,-880.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1270,-933.6 1270,-956.4 1299.33,-956.4 1299.33,-933.6 1270,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1273" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_lowconfidence&#45;&gt;i_goal -->
<g id="edge4" class="edge">
<title>us_lowconfidence&#45;&gt;i_goal</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1428.87,-1016.47C1459.37,-974.66 1495.8,-924.71 1527.03,-881.89"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1529.12,-883.48 1531.42,-875.88 1524.88,-880.39 1529.12,-883.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1488.02,-933.6 1488.02,-956.4 1564.03,-956.4 1564.03,-933.6 1488.02,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1491.02" y="-939.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
</g>
<!-- i_step&#45;&gt;i_state -->
<g id="edge5" class="edge">
<title>i_step&#45;&gt;i_state</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M630.55,-693.67C604.54,-651.94 573.48,-602.11 546.82,-559.36"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="549.18,-558.17 542.98,-553.2 544.72,-560.95 549.18,-558.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="592,-610.8 592,-633.6 668.01,-633.6 668.01,-610.8 592,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="595" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">推进问答状态</text>
</g>
<!-- i_step&#45;&gt;ui_interaction -->
<g id="edge6" class="edge">
<title>i_step&#45;&gt;ui_interaction</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M768.61,-693.67C807.69,-651.6 854.43,-601.28 894.37,-558.29"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="896.24,-560.13 899.42,-552.85 892.4,-556.56 896.24,-560.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="843.94,-610.8 843.94,-633.6 896.61,-633.6 896.61,-610.8 843.94,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="846.94" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">反馈交互</text>
</g>
<!-- i_state&#45;&gt;ui_information -->
<g id="edge7" class="edge">
<title>i_state&#45;&gt;ui_information</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M486,-370.87C486,-329.67 486,-280.56 486,-238.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="488.63,-238.36 486,-230.86 483.38,-238.36 488.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="486,-288 486,-310.8 562.01,-310.8 562.01,-288 486,-288"/>
<text xml:space="preserve" text-anchor="start" x="489" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">展示应答状态</text>
</g>
</g>
</svg>
`;case`feat001NFBusiness`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="2971pt" height="973pt"
 viewBox="0.00 0.00 2971.00 973.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 957.85)">
<g id="clust1" class="cluster">
<title>cluster_feat_degrade_nf</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-934.8 2933,-934.8 2933,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-921.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;NF 极端场景保障</text>
</g>
<!-- us_kbempty -->
<g id="node1" class="node">
<title>us_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1122.39,-873.6 269.61,-873.6 269.61,-693.6 1122.39,-693.6 1122.39,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="550.96" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;101 知识库为空时运营人员能看见</text>
<text xml:space="preserve" text-anchor="start" x="289.67" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为运营人员，新知识还没入库时，我能看见知识库为空的状态，以便知道要先补素材而不是以为系统坏了。验收：控制台显式提示当前知识条目为</text>
<text xml:space="preserve" text-anchor="start" x="677.24" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">0 条。</text>
</g>
<!-- us_ragtimeout -->
<g id="node2" class="node">
<title>us_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1872.27,-873.6 1313.73,-873.6 1313.73,-693.6 1872.27,-693.6 1872.27,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1419.07" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;102 RAGFlow 超时时客户不被静默等待</text>
<text xml:space="preserve" text-anchor="start" x="1333.78" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，RAGFlow 响应慢时，我能被告知系统在处理而不是一直等不到回复。验收：超过</text>
<text xml:space="preserve" text-anchor="start" x="1499.23" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">8 秒未返回时下发带说明的提示。</text>
</g>
<!-- us_llmdown -->
<g id="node3" class="node">
<title>us_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2753.62,-873.6 2038.38,-873.6 2038.38,-693.6 2753.62,-693.6 2753.62,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="2228.73" y="-786.6" font-family="Arial" font-size="20.00" fill="#eff6ff">US&#45;103 LLM 不可用时转人工而非静默失败</text>
<text xml:space="preserve" text-anchor="start" x="2058.43" y="-763.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">作为客户，模型服务不可用时，我能被转给人工而不是收到空白回复。验收：模型调用失败时生成人工工单并告知我等待。</text>
</g>
<!-- nf_kbempty -->
<g id="node4" class="node">
<title>nf_kbempty</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="633.82,-550.8 48.18,-550.8 48.18,-370.8 633.82,-370.8 633.82,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="213.19" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;101 知识库为零条时状态可见</text>
<text xml:space="preserve" text-anchor="start" x="72.19" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：知识库尚未入库。表现：控制台显式提示条目数为 0，不显示空白列表。角色：运营人员。</text>
</g>
<!-- i_goal -->
<g id="node5" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1158.59,-550.8 743.41,-550.8 743.41,-370.8 1158.59,-370.8 1158.59,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="892.09" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;101 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="763.46" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
<!-- nf_ragtimeout -->
<g id="node6" class="node">
<title>nf_ragtimeout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1635.5,-550.8 1268.5,-550.8 1268.5,-370.8 1635.5,-370.8 1635.5,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1292.52" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;102 RAGFlow 超 8 秒时客户可感知</text>
<text xml:space="preserve" text-anchor="start" x="1330.31" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：RAGFlow 响应超时。表现：超过 8</text>
<text xml:space="preserve" text-anchor="start" x="1295.72" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">秒下发带说明的提示，客服不必反复刷新。角色：客户。</text>
</g>
<!-- nf_llmdown -->
<g id="node7" class="node">
<title>nf_llmdown</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2893.06,-550.8 2344.94,-550.8 2344.94,-370.8 2893.06,-370.8 2893.06,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="2485.63" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">NF&#45;103 LLM 不可用时自动转人工</text>
<text xml:space="preserve" text-anchor="start" x="2368.95" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">场景：模型服务不可用。表现：生成人工工单并告知等待，不出现空白回复。角色：客户。</text>
</g>
<!-- i_step -->
<g id="node8" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2234.69,-550.8 1745.31,-550.8 1745.31,-370.8 2234.69,-370.8 2234.69,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1914.42" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑</text>
<text xml:space="preserve" text-anchor="start" x="1765.37" y="-449.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →</text>
<text xml:space="preserve" text-anchor="start" x="1927.49" y="-431.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">分发对应提示或工单。</text>
</g>
<!-- ui_status -->
<g id="node9" class="node">
<title>ui_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1966.55,-228 1543.45,-228 1543.45,-48 1966.55,-48 1966.55,-228"/>
<text xml:space="preserve" text-anchor="start" x="1663.86" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;101 控制台状态提示</text>
<text xml:space="preserve" text-anchor="start" x="1567.46" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">展示知识条目数与集成状态；空态显式提示「尚未入库」而非空白。</text>
</g>
<!-- ui_notice -->
<g id="node10" class="node">
<title>ui_notice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2711.82,-228 2076.18,-228 2076.18,-48 2711.82,-48 2711.82,-228"/>
<text xml:space="preserve" text-anchor="start" x="2311.2" y="-141" font-family="Arial" font-size="20.00" fill="#eff6ff">UI&#45;102 极端场景提示</text>
<text xml:space="preserve" text-anchor="start" x="2100.19" y="-118" font-family="Arial" font-size="15.00" fill="#bfdbfe">会话内提示层：说明原因并给出下一步（等待或转人工）。覆盖加载态（判定中）与错误态（判定失败）。</text>
</g>
<!-- us_kbempty&#45;&gt;nf_kbempty -->
<g id="edge1" class="edge">
<title>us_kbempty&#45;&gt;nf_kbempty</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M597.58,-693.67C550.74,-651.33 494.66,-600.66 446.89,-557.49"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="448.87,-555.74 441.55,-552.66 445.35,-559.64 448.87,-555.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="529.14,-610.8 529.14,-633.6 558.48,-633.6 558.48,-610.8 529.14,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="532.14" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_kbempty&#45;&gt;i_goal -->
<g id="edge2" class="edge">
<title>us_kbempty&#45;&gt;i_goal</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M766.69,-693.67C800,-651.77 839.8,-601.7 873.88,-558.83"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="875.89,-560.5 878.51,-553 871.79,-557.24 875.89,-560.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="831.15,-610.8 831.15,-633.6 907.16,-633.6 907.16,-610.8 831.15,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="834.15" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为业务目标</text>
</g>
<!-- us_ragtimeout&#45;&gt;nf_ragtimeout -->
<g id="edge3" class="edge">
<title>us_ragtimeout&#45;&gt;nf_ragtimeout</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1553.91,-693.67C1535.69,-652.21 1513.95,-602.74 1495.23,-560.16"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1497.68,-559.21 1492.26,-553.4 1492.88,-561.32 1497.68,-559.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1526.73,-610.8 1526.73,-633.6 1556.07,-633.6 1556.07,-610.8 1526.73,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1529.73" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_ragtimeout&#45;&gt;i_step -->
<g id="edge4" class="edge">
<title>us_ragtimeout&#45;&gt;i_step</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1703.06,-693.67C1755.55,-651.25 1818.42,-600.45 1871.91,-557.22"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1873.53,-559.29 1877.72,-552.53 1870.23,-555.2 1873.53,-559.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1803.4,-610.8 1803.4,-633.6 1902.76,-633.6 1902.76,-610.8 1803.4,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1806.4" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为场景判定逻辑</text>
</g>
<!-- us_llmdown&#45;&gt;nf_llmdown -->
<g id="edge5" class="edge">
<title>us_llmdown&#45;&gt;nf_llmdown</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2457.82,-693.67C2486.88,-651.86 2521.61,-601.91 2551.37,-559.09"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2553.4,-560.77 2555.52,-553.12 2549.09,-557.78 2553.4,-560.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2514.19,-610.8 2514.19,-633.6 2543.52,-633.6 2543.52,-610.8 2514.19,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2517.19" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">要求</text>
</g>
<!-- us_llmdown&#45;&gt;i_step -->
<g id="edge6" class="edge">
<title>us_llmdown&#45;&gt;i_step</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2283.45,-693.67C2229.65,-651.16 2165.21,-600.24 2110.43,-556.96"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2112.31,-555.1 2104.8,-552.51 2109.05,-559.22 2112.31,-555.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2205.17,-610.8 2205.17,-633.6 2304.53,-633.6 2304.53,-610.8 2205.17,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2208.17" y="-616.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">落为场景判定逻辑</text>
</g>
<!-- i_step&#45;&gt;ui_status -->
<g id="edge7" class="edge">
<title>i_step&#45;&gt;ui_status</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M1924.85,-370.87C1894.23,-329.06 1857.63,-279.11 1826.27,-236.29"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1828.41,-234.77 1821.86,-230.27 1824.17,-237.87 1828.41,-234.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1879.55,-288 1879.55,-310.8 1955.56,-310.8 1955.56,-288 1879.55,-288"/>
<text xml:space="preserve" text-anchor="start" x="1882.55" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">反馈知识状态</text>
</g>
<!-- i_step&#45;&gt;ui_notice -->
<g id="edge8" class="edge">
<title>i_step&#45;&gt;ui_notice</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M2102,-370.87C2155.53,-328.36 2219.66,-277.44 2274.16,-234.16"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2275.52,-236.43 2279.76,-229.71 2272.26,-232.32 2275.52,-236.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2204.11,-288 2204.11,-310.8 2280.13,-310.8 2280.13,-288 2204.11,-288"/>
<text xml:space="preserve" text-anchor="start" x="2207.11" y="-293.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">反馈场景提示</text>
</g>
</g>
</svg>
`;case`feat001FFrame`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`feat001NFFrame`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`procLocal`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`api001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="460pt" height="510pt"
 viewBox="0.00 0.00 460.00 510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 495.05)">
<!-- api_chatcallback -->
<g id="node1" class="node">
<title>api_chatcallback</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="430.26,-480 0,-480 0,-300 430.26,-300 430.26,-480"/>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-402" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;001 POST /wechat/callback 微信客服回调</text>
<text xml:space="preserve" text-anchor="start" x="98.42" y="-379" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/wechat&#45;kf&#45;routes.js:12 —</text>
<text xml:space="preserve" text-anchor="start" x="146.37" y="-361" font-family="Arial" font-size="15.00" fill="#bfdbfe">接收企业微信加密回调。</text>
</g>
<!-- api_handofflist -->
<g id="node2" class="node">
<title>api_handofflist</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="411.5,-180 18.76,-180 18.76,0 411.5,0 411.5,-180"/>
<text xml:space="preserve" text-anchor="start" x="75.62" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;002 GET /handoffs 工单列表</text>
<text xml:space="preserve" text-anchor="start" x="38.82" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/handoff&#45;routes.js:9 — 运营人员查看人工工单。</text>
</g>
<!-- api_chatcallback&#45;&gt;api_handofflist -->
</g>
</svg>
`;case`api001NF`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="425pt" height="210pt"
 viewBox="0.00 0.00 425.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- api_status -->
<g id="node1" class="node">
<title>api_status</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="394.71,-180 0,-180 0,0 394.71,0 394.71,-180"/>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">API&#45;101 GET /integration/status 集成状态</text>
<text xml:space="preserve" text-anchor="start" x="81.89" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">src/routes/integration&#45;routes.js:7 —</text>
<text xml:space="preserve" text-anchor="start" x="116.09" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">查询集成状态与知识条目数。</text>
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
`;case`usPanorama`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`fPanorama`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`nfPanorama`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`iPanorama`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.5 (0)
 -->
<!-- Pages: 1 -->
<svg width="1464pt" height="903pt"
 viewBox="0.00 0.00 1464.00 903.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 888.05)">
<g id="clust1" class="cluster">
<title>cluster_feat_answer_f</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-261 8,-865 941,-865 941,-261 8,-261"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-852.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FEATURE&#45;001&#45;F 知识应答能力</text>
</g>
<!-- i_goal -->
<g id="node1" class="node">
<title>i_goal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="900.83,-803.8 573.17,-803.8 573.17,-623.8 900.83,-623.8 900.83,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="678.09" y="-716.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;001 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="593.22" y="-693.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">客户提问后得到有据可依的答复，或明确被转人工。</text>
</g>
<!-- i_step -->
<g id="node2" class="node">
<title>i_step</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="463.59,-803.8 48.41,-803.8 48.41,-623.8 463.59,-623.8 463.59,-803.8"/>
<text xml:space="preserve" text-anchor="start" x="197.09" y="-716.8" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;003 业务步骤</text>
<text xml:space="preserve" text-anchor="start" x="68.46" y="-693.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：接收消息 → 检索候选知识 → 置信度校验 → 生成答复。</text>
</g>
<!-- i_state -->
<g id="node3" class="node">
<title>i_state</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="444.84,-481 67.16,-481 67.16,-301 444.84,-301 444.84,-481"/>
<text xml:space="preserve" text-anchor="start" x="197.09" y="-394" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;002 业务状态</text>
<text xml:space="preserve" text-anchor="start" x="87.22" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">问答状态：已接收 → 检索中 → 应答中 → 已答复 / 待人工。</text>
</g>
<!-- i_goal_1 -->
<g id="node4" class="node">
<title>i_goal_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1396.59,-481 981.41,-481 981.41,-301 1396.59,-301 1396.59,-481"/>
<text xml:space="preserve" text-anchor="start" x="1130.09" y="-394" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;101 业务目标</text>
<text xml:space="preserve" text-anchor="start" x="1001.46" y="-371" font-family="Arial" font-size="15.00" fill="#bfdbfe">三类极端场景下，运营人员与客户都能察觉异常并知道下一步动作。</text>
</g>
<!-- i_step_1 -->
<g id="node5" class="node">
<title>i_step_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1433.69,-180 944.31,-180 944.31,0 1433.69,0 1433.69,-180"/>
<text xml:space="preserve" text-anchor="start" x="1113.42" y="-102" font-family="Arial" font-size="20.00" fill="#eff6ff">I&#45;102 场景判定逻辑</text>
<text xml:space="preserve" text-anchor="start" x="964.37" y="-79" font-family="Arial" font-size="15.00" fill="#bfdbfe">主干步骤：判定知识库条目数 → 判定 RAG 响应耗时 → 判定 LLM 调用结果 →</text>
<text xml:space="preserve" text-anchor="start" x="1126.49" y="-61" font-family="Arial" font-size="15.00" fill="#bfdbfe">分发对应提示或工单。</text>
</g>
<!-- i_goal&#45;&gt;i_goal_1 -->
<!-- i_step&#45;&gt;i_state -->
<g id="edge2" class="edge">
<title>i_step&#45;&gt;i_state</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" d="M256,-623.87C256,-582.67 256,-533.56 256,-491.17"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="258.63,-491.36 256,-483.86 253.38,-491.36 258.63,-491.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="256,-541 256,-563.8 332.01,-563.8 332.01,-541 256,-541"/>
<text xml:space="preserve" text-anchor="start" x="259" y="-546.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">推进问答状态</text>
</g>
<!-- i_goal_1&#45;&gt;i_step_1 -->
</g>
</svg>
`;case`uiPanorama`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`srcPanorama`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`seq001FAnswer`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`seq001FBranchLowConfidence`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`dfd001F`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`seq001NFDegrade`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`dfd001NF`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`seq001APIChat`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;case`seq001NFAPI`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
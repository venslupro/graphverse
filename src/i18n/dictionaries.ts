import type { Locale } from "./config";

const en = {
  meta: {
    title: "GraphVerse — Graph World Models",
    description:
      "The world's first open academic and collaboration hub dedicated to Graph World Models: bridging graph neural networks and world-model dynamics for physical simulation, embodied AI, AI for Science and complex network control.",
  },
  nav: {
    mission: "Mission",
    modules: "Platform",
    applications: "Applications",
    invest: "Invest & Partner",
    contact: "Contact",
    cta: "Get in touch",
    switchTo: "中文",
    switchLabel: "切换到中文",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Open Science · Graph World Models",
    titleA: "Where graph structure",
    titleB: "meets world dynamics.",
    subtitle:
      "GraphVerse is the world's first open academic exchange and collaboration platform dedicated to Graph World Models — uniting structured topological representation with dynamical simulation to power the next generation of AI.",
    primary: "Partner or invest",
    secondary: "Explore the platform",
    tags: ["Physical Simulation", "Embodied AI", "AI for Science", "Complex Networks"],
  },
  mission: {
    eyebrow: "Mission & Vision",
    title: "Closing the gap between structure and dynamics",
    body: "We are dedicated to bridging the technical gap between structured topological representation (Graph Neural Networks) and dynamical reasoning (World Models). By bringing together world-class academic resources, frontier literature and open-source tools, we drive theoretical breakthroughs and real-world deployment of Graph World Models.",
    pillars: [
      {
        k: "Graph Neural Networks",
        v: "Relational, compositional representations of entities and their interactions.",
      },
      {
        k: "World Models",
        v: "Learned dynamics that predict, imagine and plan how systems evolve over time.",
      },
      {
        k: "Graph World Models",
        v: "Structured, interpretable simulators that generalize across scales and domains.",
      },
    ],
  },
  modules: {
    eyebrow: "Key Modules",
    title: "One hub for the entire research workflow",
    items: [
      {
        title: "Literature & Code Hub",
        body: "Systematically categorizes and tracks the latest results from NeurIPS, ICLR, ICML and arXiv. Following Open Science principles, we host no paper files — only public links to arXiv, official journals and official GitHub repositories.",
        chips: ["NeurIPS", "ICLR", "ICML", "arXiv", "GitHub"],
      },
      {
        title: "Academic Activities & Feeds",
        body: "Aggregates top-conference workshops, online reading-group announcements and Call for Papers news, plus a daily feed of newly published papers powered by the arXiv API.",
        chips: ["Workshops", "Reading Groups", "CFP", "Daily arXiv"],
      },
      {
        title: "Interactive Playground & Tools",
        body: "Structured state-evolution demos, domain benchmark datasets and reference implementations in mainstream graph-learning frameworks — a one-stop navigator for research and development.",
        chips: ["PyTorch Geometric", "DGL", "JAX", "Benchmarks"],
      },
    ],
  },
  applications: {
    eyebrow: "Commercial Potential",
    title: "Frontier research with industrial-scale impact",
    subtitle:
      "Graph World Models show exceptional promise wherever systems are made of interacting parts that evolve over time.",
    items: [
      { title: "Embodied Intelligence", body: "Structured world models for robot perception, manipulation and control." },
      { title: "Industrial Simulation", body: "High-fidelity surrogates for complex industrial and physical systems." },
      { title: "Drug & Molecular Design", body: "Graph-native dynamics for molecules, proteins and biomedical discovery." },
      { title: "Transport & Energy Networks", body: "Forecasting and optimal control of traffic, grid and infrastructure networks." },
    ],
  },
  ecosystem: {
    eyebrow: "Our Ecosystem",
    title: "A closed loop from research to capital",
    steps: [
      { k: "Research", v: "Frontier theory & open literature" },
      { k: "Technology", v: "Tools, benchmarks & open source" },
      { k: "Industry", v: "Deployment in real-world systems" },
      { k: "Capital", v: "Investment that accelerates the loop" },
    ],
  },
  invest: {
    eyebrow: "Investment & Collaboration",
    title: "Build the future of Graph World Models with us",
    subtitle:
      "We warmly invite colleagues across academia and industry worldwide to engage in deep collaboration.",
    cards: [
      {
        tag: "Academia & Community",
        title: "Academic exchange & community building",
        body: "Research teams are welcome to submit their latest work, co-host online and offline workshops, or contribute to the platform's open-source development.",
        points: ["Submit papers & code", "Co-host workshops & reading groups", "Contribute to open source"],
      },
      {
        tag: "Industry & Capital",
        title: "Industrial deployment & capital empowerment",
        body: "We are actively seeking strategic partnerships and early-stage investment from venture capital firms, industrial funds and corporate R&D labs to jointly accelerate the commercialization of frontier technology.",
        points: ["Venture capital & early-stage investment", "Industrial & strategic funds", "Corporate R&D lab partnerships"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Let's talk.",
    body: "Interested in frontier Graph World Model research, or have ideas for technical exchange, paper recommendations, project collaboration or investment? We'd love to hear from you.",
    emailLabel: "Email",
    write: "Send an email",
    copy: "Copy address",
    copied: "Copied!",
    subject: "GraphVerse — Collaboration / Investment Inquiry",
  },
  footer: {
    tagline: "The open hub for Graph World Models.",
    openScience:
      "Open Science: GraphVerse does not store any paper files. All literature links point to arXiv, official journals and official GitHub repositories.",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;

const zh: Dictionary = {
  meta: {
    title: "GraphVerse — 图世界模型",
    description:
      "全球首个专注于“图世界模型”前沿研究与产业应用的开放性学术交流与协同平台，弥合图神经网络与世界模型之间的技术鸿沟，推动物理仿真、具身智能、AI for Science 及复杂网络调控的突破与落地。",
  },
  nav: {
    mission: "愿景",
    modules: "平台",
    applications: "应用",
    invest: "投资合作",
    contact: "联系",
    cta: "联系我们",
    switchTo: "EN",
    switchLabel: "Switch to English",
    menu: "菜单",
  },
  hero: {
    eyebrow: "开放科学 · 图世界模型",
    titleA: "当图结构",
    titleB: "遇见世界动力学",
    subtitle:
      "GraphVerse 是全球首个专注于“图世界模型”前沿研究与产业应用的开放性学术交流与协同平台——融合结构化拓扑表征与动力学推演，驱动下一代人工智能。",
    primary: "投资与合作",
    secondary: "探索平台",
    tags: ["物理仿真", "具身智能", "AI for Science", "复杂网络调控"],
  },
  mission: {
    eyebrow: "定位与愿景",
    title: "弥合结构与动力学之间的鸿沟",
    body: "我们致力于弥合结构化拓扑表征（Graph Neural Networks）与动力学推演（World Models）之间的技术鸿沟，汇聚全球顶级学术资源、前沿文献与开源工具，推动图世界模型在物理仿真、具身智能、AI for Science 及复杂网络调控等领域的理论突破与产业落地。",
    pillars: [
      { k: "图神经网络", v: "对实体及其相互作用进行关系化、组合化的结构表征。" },
      { k: "世界模型", v: "学习系统动力学，对演化过程进行预测、想象与规划。" },
      { k: "图世界模型", v: "结构化、可解释、可跨尺度与跨领域泛化的智能仿真器。" },
    ],
  },
  modules: {
    eyebrow: "核心板块与服务",
    title: "覆盖完整科研流程的一站式平台",
    items: [
      {
        title: "前沿文献与开源索引",
        body: "系统化分类与追踪 NeurIPS、ICLR、ICML 等顶级学术会议及 arXiv 上的最新研究成果。本平台秉持 Open Science 原则，自身不存储任何论文文件，仅提供指向 arXiv、官方学术期刊及 GitHub 官方仓库的公开访问与下载链接。",
        chips: ["NeurIPS", "ICLR", "ICML", "arXiv", "GitHub"],
      },
      {
        title: "实时学术动态",
        body: "整合全球顶会主题研讨会（Workshops）、线上学术读书会（Reading Groups）预告与 Call for Papers (CFP) 资讯，并基于 arXiv API 提供每日最新增量论文推送。",
        chips: ["Workshops", "读书会", "CFP", "每日 arXiv"],
      },
      {
        title: "交互推演与开发工具",
        body: "汇集结构化状态演化 Demo、领域基准数据集（Benchmarks）以及主流图学习框架（PyTorch Geometric、DGL、JAX）的实现代码，提供一站式研究与开发导航。",
        chips: ["PyTorch Geometric", "DGL", "JAX", "Benchmarks"],
      },
    ],
  },
  applications: {
    eyebrow: "商业应用潜力",
    title: "前沿研究，产业级影响",
    subtitle: "凡是由相互作用的组件构成、并随时间演化的系统，都是图世界模型大显身手的舞台。",
    items: [
      { title: "具身智能控制", body: "面向机器人感知、操作与控制的结构化世界模型。" },
      { title: "复杂工业系统仿真", body: "为复杂工业与物理系统构建高保真代理模型。" },
      { title: "生物医药分子设计", body: "以图原生动力学赋能分子、蛋白质与生物医药发现。" },
      { title: "交通 / 能源网络优化", body: "对交通、电网及基础设施网络进行预测与最优调控。" },
    ],
  },
  ecosystem: {
    eyebrow: "生态闭环",
    title: "学术研究 — 技术演进 — 产业落地 — 资本赋能",
    steps: [
      { k: "学术研究", v: "前沿理论与开放文献" },
      { k: "技术演进", v: "工具、基准与开源生态" },
      { k: "产业落地", v: "在真实系统中规模化部署" },
      { k: "资本赋能", v: "加速整个闭环的正向循环" },
    ],
  },
  invest: {
    eyebrow: "合作、投资与交流",
    title: "与我们共同塑造图世界模型的未来",
    subtitle: "我们诚邀全球学术界与产业界的同仁展开深度合作。",
    cards: [
      {
        tag: "学术与社区",
        title: "学术交流与社区共建",
        body: "欢迎研究团队提交最新成果、联合举办线上/线下研讨会，或参与平台开源建设。",
        points: ["提交论文与代码", "联合举办研讨会与读书会", "参与平台开源建设"],
      },
      {
        tag: "产业与资本",
        title: "产业落地与资本赋能",
        body: "我们积极寻求风险投资机构（VC）、产业基金以及企业 R&D 实验室的战略合作与早期投资，共同加速前沿技术的商业化进程。",
        points: ["风险投资与早期投资", "产业基金与战略投资", "企业 R&D 实验室合作"],
      },
    ],
  },
  contact: {
    eyebrow: "联系方式",
    title: "期待与您交流",
    body: "如果您对图世界模型的前沿研究感兴趣，或有技术交流、论文推荐、项目合作及商业投资意向，欢迎随时与我们联系。",
    emailLabel: "电子邮箱",
    write: "发送邮件",
    copy: "复制邮箱",
    copied: "已复制！",
    subject: "GraphVerse — 合作 / 投资咨询",
  },
  footer: {
    tagline: "图世界模型的开放枢纽。",
    openScience:
      "Open Science 声明：本平台不存储任何论文文件，所有文献链接均指向 arXiv、官方学术期刊及 GitHub 官方仓库。",
    rights: "保留所有权利。",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

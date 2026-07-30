import type { Lang, PlatformSnapshot } from "./models";

export const languages: Lang[] = ["zh", "en"];

export const copy = {
  zh: {
    meta: {
      title: "黄彬｜LLM 与 Agent 研究工程师",
      description:
        "黄彬的中英双语研究工程作品集：多 Agent、RAG、知识工程、医疗 AI、推理优化与真实业务落地。"
    },
    nav: {
      home: "首页",
      research: "研究",
      projects: "项目",
      writing: "写作",
      about: "关于"
    },
    hero: {
      eyebrow: "LLM · AGENT · KNOWLEDGE ENGINEERING",
      name: "黄彬",
      role: "LLM 与 Agent 研究工程师",
      headline: "把 LLM 研究做成可运行系统，把技术方案推进到真实业务结果。",
      body:
        "聚焦多 Agent 协作、RAG、知识工程与医疗 AI。我从研究问题出发，完成方法设计、实验验证、系统实现与业务落地。",
      status: "开放 LLM / Agent 实习与研究合作",
      location: "郑州 · 广州 · 远程",
      primary: "查看研究成果",
      secondary: "了解工程案例"
    },
    metrics: [
      ["5+", "第一作者研究"],
      ["8.5×", "BLEU-4 提升"],
      ["33,214", "知识图谱实体"],
      ["2.35×", "推理加速"],
      ["12万+", "公开内容播放"],
      ["8台 / 4万", "销量 / 净利润"]
    ],
    sections: {
      researchKicker: "SELECTED RESEARCH",
      researchTitle: "研究不是标题列表，而是可验证的贡献",
      researchBody: "从医疗报告生成到风险受控的金融 Agent，用明确问题、方法和指标呈现研究价值。",
      projectKicker: "ENGINEERING & BUSINESS",
      projectTitle: "从原型、系统到真实业务闭环",
      projectBody: "同一套能力贯穿数据、模型、Agent 运行时、性能边界与客户交付。",
      timelineKicker: "TRAJECTORY",
      timelineTitle: "研究、工程与业务经验",
      writingKicker: "WRITING & OUTREACH",
      writingTitle: "把复杂技术讲清楚，也把方法沉淀为公开资产",
      awardsKicker: "RECOGNITION",
      awardsTitle: "长期积累形成的可验证证据",
      contactKicker: "CONTACT",
      contactTitle: "如果这些工作与你正在做的事情有关，欢迎联系我",
      contactBody: "我愿意交流 LLM / Agent 实习、科研合作、技术项目和博士方向。",
      viewAll: "查看全部",
      readCase: "查看案例",
      readArticle: "阅读全文",
      contribution: "我的贡献",
      evidence: "结果证据",
      methodology: "方法与过程",
      allAwards: "展开完整荣誉",
      close: "关闭"
    },
    timeline: [
      {
        period: "2025.09 — 2028.06",
        title: "郑州大学 · 计算机科学与技术硕士",
        meta: "郑州大学 NLP 实验室 · GPA 3.93 / 4.3",
        detail: "研究方向聚焦 LLM 应用架构、多 Agent、RAG、少样本学习与医疗 AI。"
      },
      {
        period: "2026.05",
        title: "超聚变 · 企业级 Agent 校企合作",
        meta: "Scenario Profile 与运行时指导机制",
        detail: "参与自然语言到结构化业务 Profile 的生成，以及 Profile 与 Skill Template 的合并理解。"
      },
      {
        period: "2025.04 — 2025.09",
        title: "广东星云开物科技股份有限公司",
        meta: "海外市场实习生 · AI Hardware & Overseas GTM",
        detail: "连接技术与业务，协同完成新业务线首次落地，销售 8 台设备并实现净利润 4 万元。"
      },
      {
        period: "2021.09 — 2025.07",
        title: "广州大学 · 软件工程本科",
        meta: "GPA 3.98 / 4.00 · 专业排名 1 / 127",
        detail: "拔尖创新班，连续四年一等奖学金，获国家奖学金并通过推荐免试进入硕士阶段。"
      }
    ],
    contact: {
      email: "邮箱",
      github: "GitHub",
      wechat: "微信",
      copy: "复制微信号",
      copied: "已复制 bennyjob",
      zhihu: "知乎",
      bilibili: "B站"
    },
    footer: "研究、工程与真实世界结果。",
    dataNote: "平台数据核验于 2026 年 7 月，仅用于证明持续创作与公开传播。"
  },
  en: {
    meta: {
      title: "Bin Huang | LLM & Agent Research Engineer",
      description:
        "Bilingual research engineering portfolio of Bin Huang: multi-agent systems, RAG, knowledge engineering, medical AI, inference optimization, and business delivery."
    },
    nav: {
      home: "Home",
      research: "Research",
      projects: "Projects",
      writing: "Writing",
      about: "About"
    },
    hero: {
      eyebrow: "LLM · AGENT · KNOWLEDGE ENGINEERING",
      name: "Bin Huang",
      role: "LLM & Agent Research Engineer",
      headline: "I turn LLM research into working systems—and technical ideas into measurable outcomes.",
      body:
        "My work spans multi-agent collaboration, RAG, knowledge engineering, and medical AI, from problem formulation and experiments to system implementation and business delivery.",
      status: "Open to LLM / Agent internships and research collaborations",
      location: "Zhengzhou · Guangzhou · Remote",
      primary: "Explore research",
      secondary: "View engineering cases"
    },
    metrics: [
      ["5+", "First-author works"],
      ["8.5×", "BLEU-4 gain"],
      ["33,214", "KG entities"],
      ["2.35×", "Inference speedup"],
      ["120K+", "Content views"],
      ["8 / ¥40K", "Units / net profit"]
    ],
    sections: {
      researchKicker: "SELECTED RESEARCH",
      researchTitle: "Research presented as verifiable contribution—not a title list",
      researchBody:
        "From radiology reporting to risk-controlled finance agents, each work is framed by a concrete problem, method, and result.",
      projectKicker: "ENGINEERING & BUSINESS",
      projectTitle: "From prototype and system design to real-world delivery",
      projectBody:
        "The same execution loop connects data, models, agent runtime, performance boundaries, and customer outcomes.",
      timelineKicker: "TRAJECTORY",
      timelineTitle: "Research, engineering, and business experience",
      writingKicker: "WRITING & OUTREACH",
      writingTitle: "Explaining complex systems and turning methods into public assets",
      awardsKicker: "RECOGNITION",
      awardsTitle: "Evidence built through long-term work",
      contactKicker: "CONTACT",
      contactTitle: "If any of this overlaps with your work, feel free to get in touch",
      contactBody:
        "I am open to LLM / Agent internships, research collaborations, technical projects, and PhD conversations.",
      viewAll: "View all",
      readCase: "View case",
      readArticle: "Read article",
      contribution: "My contribution",
      evidence: "Evidence",
      methodology: "Method",
      allAwards: "Show all recognition",
      close: "Close"
    },
    timeline: [
      {
        period: "Sep 2025 — Jun 2028",
        title: "Zhengzhou University · M.Sc. in Computer Science",
        meta: "ZZU NLP Lab · GPA 3.93 / 4.3",
        detail:
          "Research on LLM application architectures, multi-agent systems, RAG, few-shot learning, and medical AI."
      },
      {
        period: "May 2026",
        title: "xFusion · Enterprise Agent Collaboration",
        meta: "Scenario Profile and runtime guidance",
        detail:
          "Contributed to natural-language-to-Profile generation and the runtime interpretation of Profiles with Skill Templates."
      },
      {
        period: "Apr 2025 — Sep 2025",
        title: "Guangdong Xingyun Kaiwu Technology Co., Ltd.",
        meta: "Overseas Market Intern · AI Hardware & GTM",
        detail:
          "Bridged technology and customer needs; supported a new product-line launch that sold eight devices and generated ¥40K net profit."
      },
      {
        period: "Sep 2021 — Jul 2025",
        title: "Guangzhou University · B.Eng. in Software Engineering",
        meta: "GPA 3.98 / 4.00 · Ranked 1 / 127",
        detail:
          "Innovation program; four consecutive first-class scholarships, National Scholarship, and recommendation-based graduate admission."
      }
    ],
    contact: {
      email: "Email",
      github: "GitHub",
      wechat: "WeChat",
      copy: "Copy WeChat ID",
      copied: "Copied bennyjob",
      zhihu: "Zhihu",
      bilibili: "Bilibili"
    },
    footer: "Research, engineering, and real-world outcomes.",
    dataNote: "Platform figures verified in July 2026 and shown as evidence of sustained public communication."
  }
} as const;

export const platforms: Record<Lang, PlatformSnapshot[]> = {
  zh: [
    {
      name: "知乎",
      handle: "年轻人第一性原理",
      url: "https://www.zhihu.com/people/42-29-40-28",
      metrics: ["61 篇文章", "51 个回答", "75 位关注者"],
      note: "AI、产品化、职业成长与第一性原理"
    },
    {
      name: "哔哩哔哩",
      handle: "刷题狂魔怪",
      url: "https://space.bilibili.com/3493106871700084",
      metrics: ["251 个投稿", "39 个合集", "约 12 万播放"],
      note: "算法教学、工程实践与职业方法"
    }
  ],
  en: [
    {
      name: "Zhihu",
      handle: "First Principles for Young Builders",
      url: "https://www.zhihu.com/people/42-29-40-28",
      metrics: ["61 articles", "51 answers", "75 followers"],
      note: "AI, productization, career growth, and first-principles thinking"
    },
    {
      name: "Bilibili",
      handle: "Algorithm Practice Creator",
      url: "https://space.bilibili.com/3493106871700084",
      metrics: ["251 uploads", "39 series", "~120K views"],
      note: "Algorithms, engineering practice, and career methods"
    }
  ]
};

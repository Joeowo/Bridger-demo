// BRIDGER Demo Mock Data
// 用于前端展示的模拟数据

// ==================== 企业数据 ====================
export const companies = [
  {
    id: "byte-001",
    name: "字节跳动",
    logo: "/logos/bytedance.png",
    scale: "10000+人",
    industry: "互联网",
    location: "北京",
    description: "全球领先的互联网公司，旗下产品包括抖音、今日头条、飞书等",
    jobs: [
      {
        id: "byte-job-001",
        title: "Java后端开发工程师",
        salary: "25-40K",
        experience: "3-5年",
        location: "北京",
        requirements: [
          "扎实的Java基础，熟悉JVM、多线程、并发编程",
          "熟悉Spring Boot、Spring Cloud等微服务框架",
          "熟悉MySQL数据库设计与优化",
          "熟悉Redis缓存使用",
          "了解消息队列（Kafka/RocketMQ）",
          "有分布式系统设计经验"
        ],
        responsibilities: [
          "负责后端服务开发和维护",
          "参与系统架构设计和优化",
          "解决高并发场景下的技术难题",
          "编写高质量代码和技术文档"
        ],
        benefits: ["免费三餐", "下午茶", "租房补贴", "打车补贴", "免费健身房", "补充医疗"]
      },
      {
        id: "byte-job-002",
        title: "后端开发工程师（应届）",
        salary: "25-30K",
        experience: "应届",
        location: "北京",
        requirements: [
          "本科及以上学历，计算机相关专业",
          "扎实的计算机基础知识",
          "熟悉至少一门编程语言",
          "良好的编程能力和算法基础"
        ],
        responsibilities: [
          "参与业务系统开发",
          "学习并掌握公司技术栈",
          "完成导师分配的开发任务"
        ],
        benefits: ["免费三餐", "下午茶", "租房补贴", "导师带教"]
      }
    ]
  },

  {
    id: "ali-001",
    name: "阿里巴巴",
    logo: "/logos/alibaba.png",
    scale: "10000+人",
    industry: "互联网",
    location: "杭州/北京",
    description: "全球领先的云计算和人工智能科技公司",
    jobs: [
      {
        id: "ali-job-001",
        title: "Java开发工程师",
        salary: "20-40K",
        experience: "3-5年",
        location: "杭州",
        requirements: [
          "Java基础扎实，熟悉JVM原理和调优",
          "熟悉Spring、MyBatis等框架",
          "熟悉MySQL、Redis等中间件",
          "有高并发系统经验",
          "良好的编码规范和文档习惯"
        ],
        responsibilities: [
          "负责核心业务系统开发",
          "参与系统设计和优化",
          "解决线上技术问题"
        ],
        benefits: ["五险一金", "年终奖", "股票期权", "年度体检"]
      },
      {
        id: "ali-job-002",
        title: "研发工程师JAVA（校招）",
        salary: "20-27K",
        experience: "应届",
        location: "杭州/北京",
        requirements: [
          "计算机相关专业本科及以上学历",
          "扎实的编程基础",
          "熟悉Java/C++等编程语言",
          "对分布式系统有了解优先"
        ],
        responsibilities: [
          "参与基础软件设计和开发",
          "学习和使用阿里技术体系",
          "完成分配的开发任务"
        ],
        benefits: ["导师制", "培训体系", "五险一金", "年终奖"]
      }
    ]
  },

  {
    id: "tencent-001",
    name: "腾讯",
    logo: "/logos/tencent.png",
    scale: "10000+人",
    industry: "互联网",
    location: "深圳/北京",
    description: "中国领先的互联网增值服务提供商",
    jobs: [
      {
        id: "tencent-job-001",
        title: "后台开发工程师",
        salary: "25-50K",
        experience: "3-5年",
        location: "深圳",
        requirements: [
          "本科及以上学历，计算机相关专业",
          "熟练掌握C++/Java/Go等语言",
          "熟悉Linux系统开发",
          "熟悉网络编程和数据库原理",
          "有高并发服务开发经验"
        ],
        responsibilities: [
          "负责后台服务开发和维护",
          "参与系统架构设计",
          "优化服务性能和稳定性"
        ],
        benefits: ["五险一金", "年终奖", "股票激励", "免费班车", "食堂"]
      },
      {
        id: "tencent-job-002",
        title: "后端开发工程师（校招）",
        salary: "20-30K",
        experience: "应届",
        location: "深圳",
        requirements: [
          "本科及以上学历，计算机相关专业",
          "扎实的编程能力",
          "掌握C/C++、Java等相关编程语言",
          "良好的算法和数据结构基础"
        ],
        responsibilities: [
          "参与后端服务开发",
          "学习腾讯技术体系",
          "完成导师分配的任务"
        ],
        benefits: ["导师制", "培训机会", "五险一金", "年终奖"]
      }
    ]
  },

  {
    id: "meituan-001",
    name: "美团",
    logo: "/logos/meituan.png",
    scale: "10000+人",
    industry: "互联网",
    location: "北京",
    description: "中国领先的本地生活服务平台",
    jobs: [
      {
        id: "meituan-job-001",
        title: "Java后端开发工程师",
        salary: "20-35K",
        experience: "3-5年",
        location: "北京",
        requirements: [
          "Java基础扎实，熟悉集合、多线程等",
          "熟悉Spring Boot/Cloud框架",
          "熟悉MySQL、Redis、消息队列",
          "有高并发系统经验优先",
          "良好的问题分析和解决能力"
        ],
        responsibilities: [
          "负责业务系统后端开发",
          "参与系统设计和优化",
          "解决技术难题"
        ],
        benefits: ["五险一金", "年终奖", "带薪年假", "年度体检"]
      },
      {
        id: "meituan-job-002",
        title: "后端开发工程师（校招）",
        salary: "18-23K",
        experience: "应届",
        location: "北京",
        requirements: [
          "本科及以上学历",
          "计算机相关专业",
          "扎实的编程基础",
          "熟悉Java/C++等语言"
        ],
        responsibilities: [
          "参与后端系统开发",
          "学习美团技术体系",
          "完成开发任务"
        ],
        benefits: ["导师制", "五险一金", "年终奖"]
      }
    ]
  },

  {
    id: "pdd-001",
    name: "拼多多",
    logo: "/logos/pinduoduo.png",
    scale: "10000+人",
    industry: "互联网电商",
    location: "上海",
    description: "新电商开创者，专注于社交电商",
    jobs: [
      {
        id: "pdd-job-001",
        title: "服务端研发工程师",
        salary: "30-50K",
        experience: "3-5年",
        location: "上海",
        requirements: [
          "扎实的计算机基础知识",
          "精通至少一种开发语言（Java/C++/Go）",
          "熟悉常用存储系统和中间件",
          "有高并发系统经验",
          "良好的技术视野和学习能力"
        ],
        responsibilities: [
          "负责核心业务系统开发",
          "参与架构设计",
          "技术难点攻关"
        ],
        benefits: ["有竞争力薪酬", "五险一金", "年终奖", "股票期权"]
      },
      {
        id: "pdd-job-002",
        title: "服务端研发工程师（校招）",
        salary: "25-35K",
        experience: "应届",
        location: "上海",
        requirements: [
          "2026届毕业生",
          "本科及以上学历",
          "扎实的数据结构和算法能力",
          "精通至少一种开发语言"
        ],
        responsibilities: [
          "参与服务端开发",
          "学习公司技术体系",
          "完成分配任务"
        ],
        benefits: ["有竞争力薪酬", "五险一金", "签字费"]
      }
    ]
  },

  {
    id: "jd-001",
    name: "京东",
    logo: "/logos/jd.png",
    scale: "10000+人",
    industry: "互联网电商",
    location: "北京",
    description: "中国领先的技术驱动型电商和零售基础设施服务商",
    jobs: [
      {
        id: "jd-job-001",
        title: "Java后端开发工程师",
        salary: "20-40K",
        experience: "3-5年",
        location: "北京",
        requirements: [
          "Java基础扎实，熟悉JVM",
          "熟悉Spring框架",
          "熟悉MySQL、Redis",
          "有电商经验优先",
          "良好的系统设计能力"
        ],
        responsibilities: [
          "负责电商系统后端开发",
          "参与系统架构设计",
          "性能优化"
        ],
        benefits: ["五险一金", "年终奖", "带薪年假", "内购优惠"]
      },
      {
        id: "jd-job-002",
        title: "后端开发工程师（校招）",
        salary: "20-25K",
        experience: "应届",
        location: "北京",
        requirements: [
          "2026届毕业生",
          "计算机相关专业",
          "扎实的编程基础",
          "熟悉Java优先"
        ],
        responsibilities: [
          "参与后端开发",
          "学习京东技术体系",
          "完成开发任务"
        ],
        benefits: ["五险一金", "年终奖", "导师制"]
      }
    ]
  },

  {
    id: "netease-001",
    name: "网易",
    logo: "/logos/netease.png",
    scale: "10000+人",
    industry: "互联网",
    location: "杭州/广州",
    description: "中国领先的互联网技术公司",
    jobs: [
      {
        id: "netease-job-001",
        title: "资深Java开发工程师",
        salary: "25-45K",
        experience: "3-5年",
        location: "杭州",
        requirements: [
          "精通Java语言",
          "熟悉Spring Boot等框架",
          "了解JVM原理",
          "有Linux平台开发经验",
          "具备高并发系统设计经验"
        ],
        responsibilities: [
          "负责核心系统开发",
          "参与架构设计",
          "技术攻关"
        ],
        benefits: ["五险一金", "年终奖", "带薪年假", "年度体检"]
      },
      {
        id: "netease-job-002",
        title: "Java开发工程师（校招）",
        salary: "15-20K",
        experience: "应届",
        location: "杭州/北京",
        requirements: [
          "本科及以上学历",
          "计算机相关专业",
          "扎实的Java基础",
          "良好的学习能力"
        ],
        responsibilities: [
          "参与系统开发",
          "学习网易技术体系",
          "完成开发任务"
        ],
        benefits: ["五险一金", "年终奖", "导师制"]
      }
    ]
  },

  {
    id: "xhs-001",
    name: "小红书",
    logo: "/logos/xiaohongshu.png",
    scale: "1000-10000人",
    industry: "互联网社交",
    location: "上海",
    description: "生活方式平台和消费决策入口",
    jobs: [
      {
        id: "xhs-job-001",
        title: "后端开发工程师",
        salary: "30-50K",
        experience: "3-5年",
        location: "上海",
        requirements: [
          "扎实的编程基础",
          "熟悉Java/Go等语言",
          "熟悉高并发、高可用架构",
          "有内容安全/推荐系统经验优先",
          "良好的技术视野"
        ],
        responsibilities: [
          "负责内容安全系统开发",
          "参与架构优化",
          "技术攻关"
        ],
        benefits: ["有竞争力薪酬", "五险一金", "年终奖", "下午茶"]
      },
      {
        id: "xhs-job-002",
        title: "后端开发工程师（校招）",
        salary: "20-40K",
        experience: "应届",
        location: "上海",
        requirements: [
          "2026届毕业生",
          "本科及以上学历",
          "扎实的计算机基础",
          "熟悉至少一门编程语言"
        ],
        responsibilities: [
          "参与后端系统开发",
          "学习公司技术体系",
          "完成开发任务"
        ],
        benefits: ["有竞争力薪酬", "五险一金", "年终奖", "租房补贴"]
      }
    ]
  }
]

// ==================== 匹配结果数据 ====================
export const matchResults = [
  {
    id: "match-001",
    companyId: "byte-001",
    jobId: "byte-job-001",
    matchScore: 85,
    aiAnalysis: {
      strongPoints: [
        "Java技能高度匹配",
        "有2个相似项目经验",
        "熟悉Spring Boot微服务框架"
      ],
      suggestions: [
        "建议准备并发编程相关问题",
        "复习JVM原理和调优",
        "了解字节跳动的技术栈和业务"
      ]
    },
    recentHires: "近期录用5人，平均3.2年经验"
  },
  {
    id: "match-002",
    companyId: "ali-001",
    jobId: "ali-job-001",
    matchScore: 78,
    aiAnalysis: {
      strongPoints: [
        "Java基础扎实",
        "有高并发系统经验",
        "熟悉MySQL优化"
      ],
      suggestions: [
        "重点准备分布式事务问题",
        "复习Spring原理",
        "了解阿里中间件的使用"
      ]
    },
    recentHires: "近期录用8人，平均4年经验"
  },
  {
    id: "match-003",
    companyId: "tencent-001",
    jobId: "tencent-job-001",
    matchScore: 72,
    aiAnalysis: {
      strongPoints: [
        "有后端服务开发经验",
        "熟悉网络编程",
        "了解高并发处理"
      ],
      suggestions: [
        "补充Linux系统知识",
        "准备网络编程相关题目",
        "了解腾讯的业务和技术体系"
      ]
    },
    recentHires: "近期录用6人，平均3.5年经验"
  },
  {
    id: "match-004",
    companyId: "meituan-001",
    jobId: "meituan-job-001",
    matchScore: 80,
    aiAnalysis: {
      strongPoints: [
        "Spring Boot经验丰富",
        "有电商相关项目经验",
        "熟悉Redis使用"
      ],
      suggestions: [
        "准备分布式系统设计题",
        "复习消息队列使用场景",
        "了解美团的业务架构"
      ]
    },
    recentHires: "近期录用10人，平均3年经验"
  },
  {
    id: "match-005",
    companyId: "pdd-001",
    jobId: "pdd-job-001",
    matchScore: 68,
    aiAnalysis: {
      strongPoints: [
        "有高并发系统经验",
        "编程基础扎实",
        "学习能力较强"
      ],
      suggestions: [
        "深入学习数据结构和算法",
        "准备系统设计题目",
        "了解拼多多技术体系"
      ]
    },
    recentHires: "近期录用4人，平均4年经验"
  },
  {
    id: "match-006",
    companyId: "jd-001",
    jobId: "jd-job-001",
    matchScore: 75,
    aiAnalysis: {
      strongPoints: [
        "有Java后端经验",
        "熟悉电商业务",
        "有系统设计经验"
      ],
      suggestions: [
        "准备分布式缓存方案",
        "复习数据库分库分表",
        "了解京东技术栈"
      ]
    },
    recentHires: "近期录用7人，平均3.8年经验"
  }
]

// ==================== 社交媒体数据（面经/经验贴） ====================
export const socialMediaPosts = [
  // 字节跳动面经
  {
    platform: "知乎",
    title: "耗时三月上岸字节跳动后端实习！面经分享",
    author: "匿名用户",
    summary: "作者分享了从投递到最终拿到offer的完整过程，包含3轮技术面+1轮HR面的详细经历，重点考察算法题和项目经验。",
    url: "https://zhuanlan.zhihu.com/p/577241076",
    publishedAt: "2025-03-15",
    highlights: [
      "算法题非常重要，LeetCode中等题要刷200+",
      "项目会被深挖，要准备QPS等指标",
      "八股文：Java基础、数据库、Spring、JVM"
    ]
  },
  {
    platform: "牛客网",
    title: "字节跳动后端开发面经",
    author: "牛友3829",
    summary: "包含5轮面试的完整流程，每轮的面试题和考察重点都有详细记录。",
    url: "https://leetcode.cn/discuss/post/3468083/",
    publishedAt: "2025-02-20",
    highlights: [
      "手撕代码是重点",
      "数据库：分库分表、Redis与MySQL一致性",
      "场景题：实际应用场景的解决方案"
    ]
  },

  // 阿里巴巴面经
  {
    platform: "牛客网",
    title: "阿里Java后端社招面经",
    author: "牛友1056",
    summary: "阿里后端社招面试经验，面试注重项目挖掘和基础知识的考察。",
    url: "https://www.nowcoder.com/discuss/632209244900646912",
    publishedAt: "2025-01-10",
    highlights: [
      "项目会被深入挖掘",
      "需要了解工具的实现原理",
      "八股文：Java核心、多线程、JVM调优"
    ]
  },
  {
    platform: "知乎",
    title: "阿里巴巴校招面经汇总",
    author: "前端小王子",
    summary: "汇总了阿里校招的高频面试题和知识点，涵盖并发、分布式、数据库等核心领域。",
    url: "https://developer.aliyun.com/article/661429",
    publishedAt: "2024-12-05",
    highlights: [
      "并发编程是重点",
      "分布式系统设计",
      "MySQL索引优化和事务"
    ]
  },

  // 腾讯面经
  {
    platform: "知乎",
    title: "腾讯后端开发日常实习一二三面面经",
    author: "求职者小张",
    summary: "详细记录了腾讯后端实习的3轮面试，包含时间线和每轮的具体题目。",
    url: "https://zhuanlan.zhihu.com/p/23713475198",
    publishedAt: "2025-03-01",
    highlights: [
      "一面：基础知识和算法",
      "二面：项目深挖和系统设计",
      "三面：综合能力和文化匹配"
    ]
  },
  {
    platform: "知乎",
    title: "腾讯云后端开发一面面经",
    author: "技术小白",
    summary: "腾讯云部门的后端开发一面经验，面试时长1.5小时，涉及较多系统设计问题。",
    url: "https://zhuanlan.zhihu.com/p/24810001906",
    publishedAt: "2025-02-15",
    highlights: [
      "系统设计占比较大",
      "网络编程相关知识点",
      "Linux系统知识"
    ]
  },

  // 美团面经
  {
    platform: "牛客网",
    title: "美团校招面经汇总",
    author: "美团官方",
    summary: "牛客网已有7794条美团求职者真实面试经验，涵盖面试难度、面试风格、轮次等。",
    url: "https://www.nowcoder.com/enterprise/179/interview",
    publishedAt: "持续更新",
    highlights: [
      "面试难度中等",
      "注重基础知识和项目经验",
      "算法题是必考项"
    ]
  },
  {
    platform: "知乎",
    title: "美团后端开发面经",
    author: "匿名用户",
    summary: "美团后端开发的完整面试流程，包含技术面和HR面的详细内容。",
    url: "https://blog.nowcoder.net/n/74a4f2038f534442b5c6a9bae6cb4e5f",
    publishedAt: "2025-01-20",
    highlights: [
      "项目相关问题很重要",
      "HashMap实现原理是高频题",
      "Redis数据结构使用场景"
    ]
  },

  // 小红书薪资信息
  {
    platform: "小红书",
    title: "26届校招开奖！小红书42K×16太香了",
    author: "求职分享",
    summary: "小红书2026届后端校招薪资42K×16，年包约67.2万，堪称行业top1水平。",
    url: "https://www.nowcoder.com/discuss/detail/xxxxx",
    publishedAt: "2025-03-10",
    highlights: [
      "薪资天花板级别",
      "42K×16=67.2万年包",
      "算法岗和开发岗待遇对标"
    ]
  }
]

// ==================== 模拟用户简历数据 ====================
export const sampleResume = {
  personalInfo: {
    name: "张三",
    phone: "138****8888",
    email: "zhangsan@example.com",
    education: "本科 - 计算机科学与技术 - 某某大学 - 2020届"
  },
  skills: [
    "Java (熟练)",
    "Spring Boot",
    "Spring Cloud",
    "MySQL",
    "Redis",
    "消息队列",
    "微服务架构",
    "Git"
  ],
  workExperience: [
    {
      company: "某互联网公司",
      position: "Java后端开发工程师",
      duration: "2020.07 - 至今",
      responsibilities: [
        "负责电商系统的后端开发",
        "参与系统架构设计和优化",
        "解决高并发场景下的技术问题"
      ]
    }
  ],
  projects: [
    {
      name: "电商订单系统",
      role: "后端开发",
      description: "负责订单系统的设计和开发，支持日均10万单",
      technologies: ["Java", "Spring Cloud", "MySQL", "Redis"]
    },
    {
      name: "用户中心系统",
      role: "后端开发",
      description: "负责用户中心的设计和开发，支持千万级用户",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis"]
    }
  ],
  jobIntention: {
    targetPosition: "Java后端开发工程师",
    targetIndustry: "互联网",
    location: "北京/上海/杭州",
    salaryRange: "20-35K",
    companyScale: "大厂/中型公司",
    workYears: "3-5年"
  }
}

// ==================== 聊天消息数据 ====================
export const chatMessages = {
  "byte-001": [
    { id: 1, sender: "hr", content: "您好，我看了您的简历，觉得您的背景和我们岗位很匹配", time: "10:30" },
    { id: 2, sender: "user", content: "谢谢关注，想了解下这个岗位的主要工作内容", time: "10:32" },
    { id: 3, sender: "hr", content: "主要是负责抖音推荐系统的后端开发，处理高并发场景", time: "10:35" },
    { id: 4, sender: "user", content: "听起来很有挑战性，我对这个岗位很感兴趣", time: "10:36" },
    { id: 5, sender: "hr", content: "太好了！方便安排一个技术面试吗？", time: "10:38", typing: true }
  ],
  "ali-001": [
    { id: 1, sender: "hr", content: "你好，看到了你在电商系统的经验，想和你聊聊", time: "14:20" },
    { id: 2, sender: "user", content: "您好，请问是哪个岗位呢？", time: "14:22" },
    { id: 3, sender: "hr", content: "阿里云的Java开发岗位，你的项目经验很对口", time: "14:25" }
  ],
  "tencent-001": [
    { id: 1, sender: "hr", content: "你好，看了你的简历，想约个面试", time: "09:15" },
    { id: 2, sender: "user", content: "好的，请问什么时间方便？", time: "09:18" },
    { id: 3, sender: "hr", content: "这周三或周四下午，你哪个时间段方便？", time: "09:20" }
  ]
}

// ==================== 握手状态数据 ====================
export const handshakeStatus = {
  "byte-001": "success",  // 初始 | sent | success
  "ali-001": "sent",
  "tencent-001": "initial",
  "meituan-001": "initial",
  "pdd-001": "initial",
  "jd-001": "initial"
}

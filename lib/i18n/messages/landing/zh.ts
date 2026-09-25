import type { LandingMessages } from "./en";

const zh: LandingMessages = {
  hero: {
    iconAlt: "Steps 应用图标",
    titleLead: "每一步都算数。",
    titleAccent: "每个里程碑都看得见。",
    subtitle: "一款简洁优雅的 iPhone 和 Apple Watch 计步器与运动记录应用，由 Apple 健康提供支持。",
    freeDownload: "免费下载",
  },
  trust: {
    featuredIn: "媒体报道",
    videoAria: "在 YouTube 观看由 Erick the Architect 主演的 Appreciation",
    videoTitle: "APPRECIATION",
    videoCredit: "Erick the Architect 主演",
    lovedBy: "深受 10,000+ 步行者喜爱",
    fiveStars: "5 星（满分 5 星）",
  },
  spotlights: {
    "route-3d": {
      eyebrow: "1.27 新功能",
      title: "3D 路线回放",
      description:
        "用电影感的 3D 跟随镜头回放你的运动路线。选择地图样式、调整播放速度，用你喜欢的方式重温每一次锻炼。",
    },
    "ai-coach": {
      eyebrow: "Apple 智能",
      title: "AI 教练",
      description: "为每次锻炼提供个性化反馈，还能就任何活动进行对话——由设备端 Apple 智能驱动。",
    },
    stepboard: {
      eyebrow: "与好友比拼",
      title: "Stepboard",
      description:
        "和好友一起的每日排行榜。创建私人榜单，通过 getsteps.app/join 链接邀请好友，按步数或距离排名。",
    },
    "apple-watch": {
      eyebrow: "戴在手腕上",
      title: "Apple Watch 锻炼",
      description: "在手腕上开始并记录锻炼，支持 GPS 路线、实时数据，并实时同步到 iPhone。",
    },
  },
  spotlightImageAlt: "Steps 应用中的{title}",
  yearly: {
    badge: "所有人免费",
    title: "你的年度回顾",
    subtitle: "把你的健身历程变成多彩、可分享的可视化图卡。",
    cards: {
      receipt: {
        title: "健身小票",
        description: "把你一年的数据做成专属小票",
      },
      tickets: {
        title: "成就机票",
        description: "把里程碑成就做成机票",
      },
      stamps: {
        title: "护照印章",
        description: "每达成一个里程碑就收集一枚印章",
      },
    },
  },
  features: {
    title: "你想要的其他功能，一应俱全",
    subtitle: "为 iPhone 和 Apple Watch 原生打造，由 Apple 健康提供支持。",
    healthBadgeAlt: "支持 Apple 健康",
    grid: {
      LineChart: { title: "清晰图表", description: "按小时、周、月查看" },
      Flame: { title: "目标与连续记录", description: "每天保持动力" },
      LayoutGrid: { title: "主屏幕小组件", description: "10 款主屏幕小组件" },
      Lock: { title: "应用锁", description: "达成目标前锁定应用" },
      Route: { title: "GPX 导出", description: "导出并分享你的运动路线" },
      HeartPulse: { title: "Apple 健康同步", description: "精准、自动记录" },
    },
    recordsTitle: "{count} 项个人纪录",
    records: {
      Zap: "最快配速",
      Flame: "最多卡路里",
      Sunrise: "最早开始",
      Mountain: "最大爬升",
      Timer: "最长时长",
      Ruler: "最远距离",
      Moon: "最晚锻炼",
      HeartPulse: "最高心率",
    },
    workoutsTitle: "{count} 种锻炼类型",
    workouts: {
      Footprints: "跑步",
      PersonStanding: "步行",
      Bike: "骑行",
      Mountain: "徒步",
      Waves: "游泳",
      Dumbbell: "力量训练",
      Flower2: "瑜伽",
      CircleDot: "匹克球",
    },
    moreWorkouts: "另有 15 种",
  },
  privacy: {
    title: "默认情况下，你的数据保存在你的设备上",
    body: "健康数据存储在本地，并在你授权后通过 Apple HealthKit 安全读取。如果你选择加入 Stepboard 排行榜，部分指标会同步以生成排名。",
  },
  cta: {
    title: "准备好记录每一步了吗？",
    footnote: "永久免费 · 无需账号 · 提供 Pro 功能",
  },
  stepboard: {
    sectionLabel: "Stepboard 社区总步数",
    counterLabel: "Steps 社区累计行走 {total} 步",
    footer: "Stepboard 成员累计行走总步数",
  },
};

export default zh;

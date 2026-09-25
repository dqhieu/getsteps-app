import type { ActivityToStepsMessages } from "./en";

const zh: ActivityToStepsMessages = {
  meta: {
    title: "运动换算步数计算器——把任何锻炼换成步数",
    description:
      "把骑行、游泳、瑜伽、划船等 10 多种运动换成等效步数。适合步数挑战和健身记录。",
    keywords: [
      "运动换算步数",
      "锻炼换成步数",
      "骑行等效步数",
      "游泳等效步数",
      "等效步数计算器",
      "非步行步数",
    ],
    ogTitle: "运动换算步数计算器——把任何锻炼换成步数",
    ogDescription:
      "把骑行、游泳、瑜伽、划船等 10 多种运动换成等效步数。适合步数挑战和健身记录。",
    ogImageAlt: "运动换算步数计算器",
  },
  hero: {
    title: "运动换算步数计算器",
    subtitle: "把骑行、游泳、瑜伽等任何运动换成等效步数，用于步数挑战或健身目标。",
    intro:
      "选择运动、输入时长，立刻看到等效步数。采用 MET（代谢当量）数值，在 10 种运动之间准确换算。",
  },
  appCta: {
    headline: "每种运动都自动计成步数",
    description: "Steps 在后台记录你全天的活动，并换成等效步数，不用手动填写。",
  },
  stickyCta: "用 Steps 记录你的步数",
  calculator: {
    yourActivity: "你的运动",
    activityType: "运动类型",
    duration: "时长（分钟）",
    intensity: "强度",
    intensities: {
      low: "低",
      medium: "中",
      high: "高",
    },
    calorieToggle: "用于热量计算（可选）",
    bodyWeight: "体重",
    equivalentSteps: "等效步数",
    equivalentFor: "相当于 {activity} {duration} min 的步数",
    walkingTime: "步行时间",
    minutes: "{minutes} min",
    distance: "距离",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "热量",
    kcal: "kcal",
    metNote: "根据 MET（Metabolic Equivalent of Task）数值计算",
    activities: {
      cycling: "骑行",
      swimming: "游泳",
      elliptical: "椭圆机",
      rowing: "划船",
      jump_rope: "跳绳",
      dancing: "跳舞",
      yoga: "瑜伽",
      basketball: "篮球",
      hiking: "徒步",
      pilates: "普拉提",
    },
  },
  info: {
    title: "等效步数怎么算",
  },
  faq: [
    {
      question: "运动步数是怎么计算的？",
      answer:
        "这个换算器使用 MET（Metabolic Equivalent of Task，代谢当量），这是运动科学里衡量强度的标准。正常配速步行的 MET 为 3.5，大约每分钟 100 步。每种运动的 MET 都会和步行比较，从而得到等效步数。例如 MET 为 7.0 的运动（步行的两倍）每分钟产生两倍的等效步数。",
    },
    {
      question: "骑行能算成步行步数吗？",
      answer:
        "可以。中等强度骑行 30 分钟（MET 约 6.8）大约相当于 7,000–9,000 步，具体看配速。高强度竞技骑行 30 分钟可以超过 14,000 等效步。计步器不会把它们记成真实脚步，但这个换算能让步数挑战的比较更公平。",
    },
    {
      question: "游泳算步数吗？",
      answer:
        "大多数健身应用和计步器不会把游泳直接记成步数。不过中等强度游泳 30 分钟（MET 约 7.0）大约相当于 6,000–8,000 步。如果挑战允许手动记录，可以用这个换算器把游泳计入目标。",
    },
    {
      question: "为什么要把运动换成步数？",
      answer:
        "公司或健身应用里的步数挑战通常用步数衡量进度，但骑行、游泳和瑜伽的 GPS 步数天然更少。把非步行运动换成等效步数，你就能公平参与挑战、记录全天活动，并在同一尺度上比较不同运动的消耗。",
    },
  ],
  related: [
    { title: "步数换算热量计算器", href: "/tools/steps-to-calories-calculator" },
    { title: "每日步数目标计算器", href: "/tools/daily-step-goal-calculator" },
    { title: "步行热量计算器", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "记录你的健康之旅",
    description: "用 Steps 应用自动记录你每天的活动和步数。",
  },
  howTo: {
    name: "如何把运动换成等效步数",
    description: "输入运动类型、时长和强度，得到每日目标对应的等效步数。",
    steps: [
      {
        name: "选择一项运动",
        text: "支持骑行、游泳、瑜伽、力量训练等数十种运动。",
      },
      {
        name: "输入时长和强度",
        text: "时长以分钟计，再选择低、中或高强度。",
      },
      {
        name: "查看等效步数",
        text: "计算器根据 MET 数值给出等效步数，即使你没有走路，也能完成每日步数目标。",
      },
    ],
  },
};

export default zh;

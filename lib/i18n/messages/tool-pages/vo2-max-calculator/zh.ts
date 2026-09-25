import type { Vo2MaxCalculatorMessages } from "./en";

const zh: Vo2MaxCalculatorMessages = {
  meta: {
    title: "最大摄氧量 (VO2 max) 计算器——估算你的有氧体能",
    description:
      "用心率法或 Cooper 12 分钟跑测试估算最大摄氧量 (VO2 max)，了解你的有氧体能以及如何提升。",
    keywords: [
      "最大摄氧量计算器",
      "VO2 max 计算器",
      "有氧体能计算器",
      "Cooper 测试计算器",
      "如何计算最大摄氧量",
      "按年龄的最大摄氧量",
      "心血管体能测试",
    ],
    ogTitle: "最大摄氧量 (VO2 max) 计算器——估算你的有氧体能",
    ogDescription:
      "用心率法或 Cooper 12 分钟跑测试估算最大摄氧量 (VO2 max)，了解你的有氧体能以及如何提升。",
    ogImageAlt: "最大摄氧量 (VO2 max) 计算器",
  },
  hero: {
    title: "最大摄氧量 (VO2 max) 计算器",
    subtitle:
      "用心率或 12 分钟跑测试估算最大摄氧量 (VO2 max)——有氧体能的金标准。",
  },
  intro:
    "输入年龄、性别和静息心率（或 Cooper 12 分钟跑的距离），估算最大摄氧量 (VO2 max)，并了解你在同龄人中的位置。",
  calculator: {
    method: "方法",
    heartRateMethod: "心率法",
    cooperMethod: "Cooper 12 分钟跑",
    gender: "性别",
    male: "男",
    female: "女",
    age: "年龄",
    years: { one: "岁", other: "岁" },
    restingHeartRate: "静息心率",
    bpm: "bpm",
    restingHint: "早上起床前第一时间测量。",
    distanceLabel: "12 分钟内跑过的距离",
    km: "km",
    miles: "英里",
    distanceHint: "在平坦跑道上全力跑满 12 分钟，并记录距离。",
    calculate: "计算最大摄氧量 (VO2 max)",
    yourEstimate: "你的估计最大摄氧量 (VO2 max)",
    unit: "ml/kg/min",
    improvementTip: "提升建议",
    disclaimer:
      "最大摄氧量 (VO2 max) 是有氧体能的金标准，即剧烈运动时身体所能利用的最大氧气量。数值越高，心血管能力越好。标准会随年龄变化；这里的阈值经过简化，仅供一般参考。",
    categories: {
      superior: {
        label: "极佳",
        description: "有氧能力出色。你的心血管体能非常突出，接近竞技耐力运动员的水平。",
        tip: "用周期训练来保持：把长跑、节奏跑和恢复周搭配起来，避免过度训练。",
      },
      excellent: {
        label: "优秀",
        description: "有氧体能明显高于平均。心脏和肺部能高效地把氧气送到工作中的肌肉。",
        tip: "每周增加一次最大摄氧量间歇（例如 5×3 分钟高强度），向极佳区间推进。",
      },
      good: {
        label: "良好",
        description: "高于平均的体能。你已有扎实的有氧基础，能支持日常活动和休闲运动。",
        tip: "每周做 3–4 次有氧。加入一次节奏跑和一次更长的轻松跑，巩固基础。",
      },
      fair: {
        label: "一般",
        description: "有氧能力处于平均水平。规律训练可以在 8–12 周内明显提高最大摄氧量 (VO2 max)。",
        tip: "先从每周 3 次、每次 30 分钟的二区跑开始。打基础 4 周后再每周加一次 HIIT。",
      },
      poor: {
        label: "较差",
        description: "有氧能力低于平均。好消息是：这个水平对持续训练反应很快。",
        tip: "先从每周 5 次、每次 20–30 分钟的快走开始。2–3 周后过渡到跑走间歇。",
      },
    },
  },
  info: {
    title: "最大摄氧量 (VO2 max)——常见问题",
  },
  faq: [
    {
      question: "什么是最大摄氧量 (VO2 max)？",
      answer:
        "最大摄氧量 (VO2 max) 是剧烈运动时身体消耗氧气的最大速率，单位是每公斤体重每分钟的毫升氧气（ml/kg/min）。它被广泛视为有氧体能和心血管健康的金标准。最大摄氧量越高，说明心脏、肺和肌肉在持续运动中输送和利用氧气的效率越高。",
    },
    {
      question: "多少算好的最大摄氧量 (VO2 max)？",
      answer:
        "男性 40–50 ml/kg/min 算良好，高于 55 算优秀。女性 35–45 算良好，高于 50 算优秀。马拉松和自行车等精英耐力运动员常达到 60–85 ml/kg/min，这反映了多年训练带来的心血管适应。未经训练的成年人，女性多在 30 多，男性多在 40 出头。",
    },
    {
      question: "如何提高最大摄氧量 (VO2 max)？",
      answer:
        "最有效的方法是高强度间歇训练（HIIT）、节奏跑和长距离慢跑（LSD）。HIIT——例如 4–6 组接近最大努力的 3–5 分钟间歇——直接刺激有氧系统，带来最大的最大摄氧量提升。再配合每周两到三次轻松的二区跑，初学者和中等训练者通常能在 8–12 周内提高 10–20%。",
    },
    {
      question: "什么是 Cooper 12 分钟跑测试？",
      answer:
        "Cooper 测试由 Kenneth Cooper 博士在 1968 年为美国军方体能评估设计，要求在平坦地面上用正好 12 分钟尽可能跑得更远。跑过的距离用公式预测最大摄氧量：VO2max = (distanceMeters − 504.9) / 44.73。它仍是运动科学中使用最广的场地测试之一，因为不需要实验室设备——只要一条量过的跑道和一块秒表。",
    },
    {
      question: "最大摄氧量 (VO2 max) 会随年龄下降吗？",
      answer:
        "会。大约 25 岁以后，久坐人群的最大摄氧量平均每年下降约 1%。规律的有氧训练能明显减缓这种下降——六七十岁仍保持运动的人，最大摄氧量常常接近比他们年轻 20 岁的久坐者。关键是持续的心血管运动：即使是适量的跑步、骑车或游泳，也能把有氧能力保持到较高年龄。",
    },
  ],
  cta: {
    title: "记录你的有氧体能进展",
    description: "用 Steps 应用记录每天的活动，提升有氧体能。",
  },
  howTo: {
    name: "如何估算最大摄氧量 (VO2 max)",
    description: "根据静息心率和最大心率，或用 Cooper 12 分钟跑测试估算最大摄氧量 (VO2 max)。",
    steps: [
      {
        name: "选择输入方法",
        text: "可以选择心率法（年龄 + 静息心率），或 Cooper 测试（12 分钟跑过的距离）。",
      },
      {
        name: "输入数值",
        text: "填写年龄和静息心率，或全力跑 12 分钟所覆盖的距离。",
      },
      {
        name: "查看最大摄氧量估计值",
        text: "计算器会给出以 ml/kg/min 为单位的最大摄氧量估计值，以及你在同年龄、同性别中的体能百分位。",
      },
    ],
  },
};

export default zh;

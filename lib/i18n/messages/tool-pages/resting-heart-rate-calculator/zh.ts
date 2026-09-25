import type { RestingHeartRateCalculatorMessages } from "./en";

const zh: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "静息心率计算器——体能水平与 Karvonen 区间",
    description:
      "根据静息心率评估体能水平，并计算个性化的 Karvonen 心率训练区间。输入年龄和实测静息心率即可得到结果。",
    keywords: [
      "静息心率计算器",
      "按年龄的静息心率",
      "正常静息心率是多少",
      "心率储备计算器",
      "Karvonen 公式",
      "静息心率体能水平",
    ],
    ogTitle: "静息心率计算器——体能水平与 Karvonen 区间",
    ogDescription:
      "根据静息心率评估体能水平，并计算个性化的 Karvonen 心率训练区间。输入年龄和实测静息心率即可得到结果。",
    ogImageAlt: "静息心率计算器",
  },
  hero: {
    title: "静息心率计算器",
    subtitle: "查看你的心血管体能水平，并根据心率储备获得个性化训练区间。",
  },
  intro:
    "输入年龄、性别和实测静息心率，查看体能类别，并计算适合燃脂、有氧耐力和峰值表现的 Karvonen 心率区间。",
  calculator: {
    yourDetails: "你的信息",
    gender: "性别",
    male: "男",
    female: "女",
    age: "年龄",
    years: { one: "岁", other: "岁" },
    restingHeartRate: "静息心率",
    bpm: "bpm",
    rhrHint: "提示：早上起床前测量。静坐 5 分钟，然后数 60 秒的心跳次数。",
    calculate: "计算",
    fitnessLevel: "你的体能水平",
    hrMax: "最大心率",
    hrr: "心率储备",
    zonesTitle: "Karvonen 训练区间",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "运动员",
      excellent: "优秀",
      good: "良好",
      above_average: "高于平均",
      average: "平均",
      below_average: "低于平均",
      poor: "较差",
    },
    zones: {
      activeRecovery: { name: "主动恢复", purpose: "恢复" },
      fatBurn: { name: "燃脂", purpose: "燃脂" },
      aerobicEndurance: { name: "有氧耐力", purpose: "有氧" },
      lactateThreshold: { name: "乳酸阈", purpose: "阈值" },
      vo2Max: { name: "最大摄氧量 (VO2 max)", purpose: "最大摄氧量 (VO2 max)" },
    },
  },
  info: {
    title: "静息心率常见问题",
  },
  faq: [
    {
      question: "正常的静息心率是多少？",
      answer:
        "对大多数成年人来说，正常静息心率在每分钟 60 到 100 次（bpm）之间。训练有素的运动员常在 40–60 bpm，因为心脏更强，每次搏动泵出的血液更多。低于 60 bpm（心动过缓）对体能好的人可以是正常的，但如果伴随症状，应请医生评估。",
    },
    {
      question: "如何测量静息心率？",
      answer:
        "早上起床前测量静息心率。静卧 5 分钟，然后用两根手指放在手腕（桡动脉）或颈部（颈动脉），数 60 秒的心跳。避免在喝咖啡、运动或紧张之后测量。连续三个早晨取平均值最准确。",
    },
    {
      question: "体能提高后静息心率会改善吗？",
      answer:
        "会。规律的心血管运动会增强心肌，使每次搏动泵出更多血液。每搏输出量增加后，心脏用更少的次数就能输送同样多的血液。持续的有氧训练通常会在几个月内把静息心率降低 5–25 bpm，幅度取决于你的起始体能。",
    },
    {
      question: "静息心率和最大心率有什么区别？",
      answer:
        "静息心率是完全休息时每分钟的心跳次数。最大心率是全力运动时心脏能达到的最高每分钟心跳，估算为 220 减去你的年龄。心率储备是两者之差，代表运动中心脏可以工作的范围。Karvonen 方法用心率储备计算个性化训练区间。",
    },
    {
      question: "怎样降低静息心率？",
      answer:
        "最有效的方法是规律的有氧运动：每周 3–5 次持续的中等强度有氧，例如步行、慢跑、骑车或游泳。充足睡眠（7–9 小时）、压力管理（冥想、深呼吸）、限制咖啡因和酒精，以及保持健康体重，都有助于降低静息心率。坚持训练后，通常 4–8 周就能看出变化。",
    },
  ],
  cta: {
    title: "改善你的心脏健康",
    description: "记录每天的步数，逐步改善心血管健康。",
  },
  howTo: {
    name: "如何根据静息心率查看体能类别",
    description: "输入年龄和静息心率，查看心血管体能水平以及 Karvonen 训练区间。",
    steps: [
      {
        name: "输入年龄和静息心率",
        text: "早上第一时间、喝咖啡之前、仍躺在床上时测量静息心率。",
      },
      {
        name: "查看体能类别",
        text: "计算器会按年龄对应的静息心率范围，把你放在从运动员到较差的体能刻度上。",
      },
      {
        name: "查看 Karvonen 区间",
        text: "同时给出根据你的静息心率个性化的 5 个心率训练区间。",
      },
    ],
  },
};

export default zh;

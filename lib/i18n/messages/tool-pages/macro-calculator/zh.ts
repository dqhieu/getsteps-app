import type { MacroCalculatorMessages } from "./en";

const zh: MacroCalculatorMessages = {
  meta: {
    title: "宏量营养素计算器——按目标计算蛋白质、碳水化合物和脂肪",
    description:
      "根据你的 TDEE 和健身目标，计算减重、维持或增肌所需的每日宏量营养素（蛋白质、碳水化合物、脂肪）。",
    keywords: [
      "宏量营养素计算器",
      "宏量计算",
      "减重蛋白质计算器",
      "计算宏量营养素",
      "每天需要多少克蛋白质",
      "宏量营养素配比",
      "IIFYM 计算器",
    ],
    ogTitle: "宏量营养素计算器——按目标计算蛋白质、碳水化合物和脂肪",
    ogDescription: "计算减重、维持或增肌所需的每日宏量营养素（蛋白质、碳水化合物、脂肪）。",
  },
  hero: {
    title: "宏量营养素计算器",
    subtitle: "根据身体数据和健身目标，得到每日蛋白质、碳水化合物和脂肪目标。",
  },
  intro:
    "输入你的数据并选择目标，计算每日宏量营养素。无论是减脂、维持还是增肌，合适的配比都会带来差别。",
  calculator: {
    gender: "性别",
    male: "男",
    female: "女",
    age: "年龄",
    weight: "体重",
    height: "身高 (cm)",
    activityLevel: "活动水平",
    activity: {
      sedentary: "久坐",
      light: "轻度活动",
      moderate: "中度活动",
      active: "活跃",
      very_active: "非常活跃",
    },
    goal: "目标",
    goals: {
      weight_loss: "减重",
      maintenance: "维持",
      muscle_gain: "增肌",
    },
    calculate: "计算宏量营养素",
    dailyTarget: "你的每日目标",
    cal: "cal",
    bmrTdee: "BMR：{bmr} · TDEE：{tdee}",
    protein: "蛋白质",
    carbs: "碳水化合物",
    fat: "脂肪",
    grams: "{grams}g",
  },
  info: {
    title: "了解宏量营养素",
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "什么是宏量营养素？",
      answer:
        "宏量营养素（蛋白质、碳水化合物、脂肪）是三种主要热量来源。蛋白质和碳水化合物每克提供 4 千卡，脂肪每克提供 9 千卡。按目标取得合适的平衡，决定身体成分的结果。",
    },
    {
      question: "每天该吃多少蛋白质？",
      answer:
        "活跃的人应按每千克体重 1.6–2.4 g 蛋白质来安排。较高一端（2.2–2.4 g/kg）适合增肌，或在热量缺口中用来保住肌肉。",
    },
    {
      question: "该计算宏量营养素，还是只算热量？",
      answer:
        "追踪宏量营养素对身体成分控制更强。减重时如果只算热量，蛋白质过低会导致掉肌肉——宏量营养素能让你减脂肪，同时保留瘦体重。",
    },
    {
      question: "减重时怎样的宏量配比比较好？",
      answer:
        "高蛋白配比最适合减重：大约 35–40% 蛋白质以保住肌肉，25% 脂肪以维持激素健康，30–35% 碳水化合物提供能量。优先达到蛋白质目标。",
    },
    {
      question: "每天需要多少克碳水化合物？",
      answer:
        "活跃成年人通常为 150–300 g。减重时取较低一端，耐力运动或增肌时取较高一端。碳水需求随训练量上升。",
    },
  ],
  cta: {
    title: "把宏量目标与每日步数搭配起来",
    description: "把宏量目标与每日步数目标搭配，效果更好。",
  },
  howTo: {
    name: "如何计算你的每日宏量营养素",
    description: "输入数据和目标，得到每日蛋白质、碳水化合物和脂肪的克数与热量。",
    steps: [
      {
        name: "输入你的数据",
        text: "年龄、性别、体重、身高和活动水平——与 TDEE 计算器相同的输入。",
      },
      {
        name: "选择目标",
        text: "减脂、维持或增肌。每个目标使用不同的宏量营养素比例。",
      },
      {
        name: "查看宏量目标",
        text: "计算器会给出蛋白质、碳水化合物和脂肪的克数与热量，以及每日总热量。",
      },
    ],
  },
};

export default zh;

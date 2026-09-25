import type { TdeeCalculatorMessages } from "./en";

const zh: TdeeCalculatorMessages = {
  meta: {
    title: "TDEE 计算器——每日总能量消耗与热量需求",
    description:
      "计算你的每日总能量消耗（TDEE）和基础代谢率（BMR）。找出减重、维持或增肌所需的每日热量。",
    keywords: [
      "TDEE 计算器",
      "每日总能量消耗计算器",
      "热量计算器",
      "BMR 计算器",
      "我每天该吃多少热量",
      "维持热量计算器",
      "每日热量需求",
    ],
    ogTitle: "TDEE 计算器——每日总能量消耗与热量需求",
    ogDescription: "计算你的每日总能量消耗（TDEE）和基础代谢率（BMR）。找出减重、维持或增肌所需的每日热量。",
  },
  hero: {
    title: "TDEE 计算器",
    subtitle: "根据身体数据和活动水平，计算你每天消耗多少热量。",
  },
  intro:
    "输入性别、年龄、体重、身高和活动水平，计算你的每日总能量消耗（TDEE）——身体每天烧掉的热量。用它来设定适合你目标的热量。",
  calculator: {
    details: "你的数据",
    gender: "性别",
    male: "男",
    female: "女",
    age: "年龄",
    years: "岁",
    weight: "体重",
    height: "身高",
    activityLevel: "活动水平",
    activity: {
      sedentary: "久坐",
      light: "轻度活动",
      moderate: "中度活动",
      active: "活跃",
      very_active: "非常活跃",
    },
    calculate: "计算 TDEE",
    results: "你的结果",
    bmr: "BMR",
    bmrUnit: "静息 cal/天",
    tdee: "TDEE",
    tdeeUnit: "总计 cal/天",
    calorieGoals: "热量目标",
    maintenanceBadge: "维持",
    belowMinimum: "低于最低值",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "激进减重", weekly: "-1 kg / 周" },
      moderate_loss: { label: "适度减重", weekly: "-0.5 kg / 周" },
      mild_loss: { label: "轻度减重", weekly: "-0.25 kg / 周" },
      maintenance: { label: "维持", weekly: "0 kg / 周" },
      mild_gain: { label: "轻度增重", weekly: "+0.25 kg / 周" },
      muscle_gain: { label: "增肌", weekly: "+0.5 kg / 周" },
    },
  },
  faqTitle: "TDEE 与热量常见问题",
  faq: [
    {
      question: "什么是 TDEE？",
      answer:
        "TDEE 是每日总能量消耗——身体一天烧掉的总热量。它包括基础代谢率（静息消耗）、身体活动所用的能量，以及食物热效应（消化食物消耗的热量）。设定减重、维持或增肌的热量目标时，TDEE 是最重要的数字。",
    },
    {
      question: "TDEE 有多准确？",
      answer:
        "使用 Mifflin-St Jeor 方程的 TDEE 计算器，对大多数人的误差一般在 10–15% 以内。遗传、肌肉量、激素和代谢适应会造成个体差异，使真实值偏移。把结果当作起点，追踪体重 2–3 周，再按实际进展把摄入上下调整 100–200 千卡。",
    },
    {
      question: "BMR 和 TDEE 有什么区别？",
      answer:
        "BMR（基础代谢率）是身体完全静息时消耗的热量——维持呼吸、循环和细胞修复所需的最低能量。TDEE 在 BMR 之上加上其他消耗：身体活动、运动和消化。TDEE 始终高于 BMR，设定热量目标时应使用 TDEE。",
    },
    {
      question: "比 TDEE 少吃多少热量才能减重？",
      answer:
        "每天比 TDEE 少 250–500 千卡，适合每周可持续减掉 0.25–0.5 kg。缺口更大可能导致掉肌肉、营养不足和代谢适应。在没有医疗监督时，女性一般不应低于每天 1,200 千卡，男性不应低于每天 1,500 千卡。适度缺口加上更多日常步数，往往比单纯限制更有效。",
    },
    {
      question: "TDEE 会随年龄变化吗？",
      answer:
        "会。20 岁以后，TDEE 通常每十年下降约 1–2%，主要因为肌肉量减少（肌少症）。肌肉代谢活跃，静息时比脂肪组织消耗更多热量。力量训练和保持活动可以明显减缓这种下降。激素变化，尤其是绝经期，也会降低女性的 TDEE。",
    },
  ],
  cta: {
    title: "用自然的方式提高 TDEE",
    description: "多走日常步数，用自然的方式提高 TDEE。在 Steps 应用里记录它们。",
  },
  howTo: {
    name: "如何计算你的每日总能量消耗",
    description: "输入年龄、性别、体重、身高和活动水平，用 Mifflin-St Jeor 方程得到 BMR 和 TDEE。",
    steps: [
      {
        name: "输入年龄、性别、体重和身高",
        text: "Mifflin-St Jeor 公式所需的输入，它对一般人群最准确。",
      },
      {
        name: "选择活动水平",
        text: "久坐（办公室工作）、轻度活动（每周运动 1–3 天）、中度活动（3–5 天）、非常活跃（6–7 天）或额外活跃。",
      },
      {
        name: "查看 BMR 和 TDEE",
        text: "计算器会给出基础代谢率（静息维持生命的热量）和每日总能量消耗（维持体重的热量）。",
      },
    ],
  },
};

export default zh;

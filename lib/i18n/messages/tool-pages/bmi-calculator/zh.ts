import type { BmiCalculatorMessages } from "./en";

const zh: BmiCalculatorMessages = {
  meta: {
    title: "BMI 计算器——计算你的身体质量指数",
    description:
      "计算你的身体质量指数（BMI），了解你的体重是否处于健康范围，并获取个性化的健康建议和步数推荐。",
    keywords: [
      "BMI 计算器",
      "身体质量指数",
      "计算 BMI",
      "健康体重计算器",
      "BMI 对照表",
      "身高体重",
      "BMI 分类",
      "健康 BMI 范围",
    ],
    ogTitle: "BMI 计算器",
    ogDescription: "计算你的身体质量指数（BMI），了解你的体重是否处于健康范围。",
  },
  hero: {
    title: "BMI 计算器",
    subtitle: "计算你的身体质量指数，了解你的体重类别，并获取个性化的健康建议。",
  },
  calculator: {
    measurements: "你的身体数据",
    weight: "体重",
    height: "身高",
    yourBmi: "你的 BMI",
    healthyRange: "健康体重范围",
    recommendedSteps: "推荐每日步数",
    aboveRange: "你的体重比该身高的健康体重范围高出 {amount}。",
    belowRange: "你的体重比该身高的健康体重范围低 {amount}。",
    categoriesTitle: "BMI 分类",
    categoriesSubtitle: "世界卫生组织成人 BMI 分类标准",
    categoryColumn: "类别",
    rangeColumn: "BMI 范围",
    categories: {
      underweight: "体重过轻",
      normal: "正常",
      overweight: "超重",
      "obese-1": "一级肥胖",
      "obese-2": "二级肥胖",
      "obese-3": "三级肥胖",
    },
  },
  info: {
    title: "了解 BMI",
    intro:
      "身体质量指数（BMI）是一种根据身高和体重进行的简单计算，用于估算体脂并判断你的体重是否健康。它被广泛用作体重类别的筛查工具。",
    formulaTitle: "计算公式",
    formula: "BMI = 体重（kg）÷ 身高（m）²",
    exampleLabel: "示例：",
    example: "体重 70 kg、身高 1.75 m 的人，BMI = 70 ÷ (1.75 × 1.75) = 22.9",
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "多少 BMI 算健康？",
      answer:
        "对大多数成年人来说，BMI 在 18.5 到 24.9 之间被视为健康。不过，BMI 没有考虑肌肉量、骨密度和脂肪分布，因此它只是评估整体健康的因素之一。",
    },
    {
      question: "BMI 对所有人都准确吗？",
      answer:
        "对于肌肉量大的运动员、老年人或某些体型的人，BMI 可能不够准确。它是一种有用的筛查工具，但应结合其他健康指标一起参考。",
    },
    {
      question: "如何改善我的 BMI？",
      answer:
        "如果你的 BMI 不在健康范围内，请专注于可持续的生活方式改变：规律运动（例如每天步行）、均衡饮食和充足睡眠。如需个性化建议，请咨询医疗专业人士。",
    },
    {
      question: "根据我的 BMI，每天应该走多少步？",
      answer:
        "要保持健康的 BMI，建议每天走 10,000 步。如果想减重，可以考虑 12,000 步以上。从你当前的水平开始，每周逐步增加 1,000 步。",
    },
    {
      question: "儿童的 BMI 有什么不同吗？",
      answer:
        "是的，儿童和青少年的 BMI 计算方式不同，需要与按年龄和性别划分的百分位数进行比较。本计算器适用于 18 岁及以上的成年人。儿童请咨询儿科医生。",
    },
  ],
  cta: {
    title: "记录你的健康之旅",
    description: "下载 Steps 应用，记录你的日常活动，一步步迈向更健康的体重。",
  },
  howTo: {
    name: "如何计算你的 BMI",
    description:
      "身体质量指数（BMI）根据身高和体重估算你的身体成分类别，采用美国疾控中心（CDC）的成人分类标准。",
    steps: [
      {
        name: "输入身高",
        text: "以厘米或英尺/英寸为单位输入身高。",
      },
      {
        name: "输入体重",
        text: "以千克或磅为单位输入体重。",
      },
      {
        name: "查看 BMI 与类别",
        text: "计算器会显示你的 BMI 数值和 CDC 健康类别（体重过轻、健康、超重、肥胖），并附上每个类别的简短说明。",
      },
    ],
  },
};

export default zh;

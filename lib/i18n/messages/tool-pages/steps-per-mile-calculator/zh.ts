import type { StepsPerMileCalculatorMessages } from "./en";

const zh: StepsPerMileCalculatorMessages = {
  meta: {
    title: "一英里有多少步？免费计算器",
    description:
      "一英里有多少步？大约 2,000–2,500 步，取决于身高和配速。获取个性化的每英里和每公里步数，并附步行与跑步对照表。",
    keywords: [
      "每英里步数",
      "每公里步数",
      "一英里有多少步",
      "一英里多少步",
      "一公里多少步",
      "步长计算器",
      "步行每英里步数",
      "步数换算英里",
      "英里换算步数",
    ],
    ogTitle: "一英里有多少步？免费计算器",
    ogDescription: "一英里有多少步？大约 2,000–2,500 步，取决于你的身高。查看个性化的每英里和每公里步数。",
    ogImageAlt: "每英里步数计算器",
  },
  hero: {
    title: "一英里有多少步？",
    subtitle:
      "一英里有多少步？大多数成年人大约 2,000–2,500 步。输入身高，获得个性化的每英里和每公里步数。",
  },
  resultCta: {
    headline: "了解你真实的每英里步数",
    description: "Steps 会自动记录你的步数和距离，让你看到真实配速和步幅，而不是估算值。",
  },
  stickyCta: "用 Steps 记录你的步数",
  calculator: {
    yourInformation: "你的信息",
    height: "身高",
    gender: "性别",
    male: "男",
    female: "女",
    stepLength: "你的估算步长：{cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "（{value} 英寸）",
    stepsPerMile: "每英里步数",
    stepsPerKm: "每公里步数",
    stepsUnit: "步",
    referenceTitle: "距离对照表",
    referenceSubtitle: "根据你的步长，常见距离需要的步数",
    colDistance: "距离",
    colSteps: "步数",
    distances: ["1 km", "1 英里", "5 km", "5 英里", "10 km", "半程马拉松", "马拉松"],
  },
  info: {
    title: "我们如何计算每英里步数",
    intro:
      "每英里步数取决于你的步长，而步长主要由身高和性别决定。个子更高的人步幅通常更长，走同样的距离需要的步数更少。",
    formulaTitle: "计算公式",
    stepLengthLabel: "步长：",
    stepLengthFormula: "身高（cm）× 0.415（男）或 0.413（女）",
    perKmLabel: "每公里步数：",
    perKmFormula: "100,000 ÷ 步长（cm）",
    perMileLabel: "每英里步数：",
    perMileFormula: "每公里步数 × 1.609",
    heightTitle: "不同身高的平均步数",
    heights: [
      { height: "5'0\"（152 cm）：", steps: "约 2,500 步/英里" },
      { height: "5'6\"（168 cm）：", steps: "约 2,300 步/英里" },
      { height: "6'0\"（183 cm）：", steps: "约 2,100 步/英里" },
      { height: "6'6\"（198 cm）：", steps: "约 1,950 步/英里" },
    ],
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "一英里有多少步？",
      answer:
        "平均来说，一英里大约 2,000–2,500 步。具体数字取决于你的身高和步幅。个子较矮的人步数更多，个子较高的人步数更少。",
    },
    {
      question: "一公里有多少步？",
      answer:
        "平均来说，一公里大约 1,250–1,550 步。这大约是一英里步数的 62%，因为一公里约等于 0.62 英里。",
    },
    {
      question: "步行速度会影响每英里步数吗？",
      answer:
        "会，但影响不大。走得更快或跑步时，步幅会变长，每英里步数就会减少。对大多数步行速度来说，差别相对较小。",
    },
    {
      question: "怎样测量自己的实际步长？",
      answer:
        "以正常速度走一段已知距离（例如 30 米），并数步数。用距离除以步数，就得到平均步长。你也可以标记起点，走 10 步，再量出走过的距离。",
    },
  ],
  cta: {
    title: "记录你的步数和距离",
    description: "下载 Steps 应用，在 iPhone 和 Apple Watch 上自动记录步数和距离。",
  },
  howTo: {
    name: "如何计算每英里步数",
    description: "输入身高和步行配速，估算你走一英里（以及一公里）需要多少步。",
    steps: [
      {
        name: "输入身高",
        text: "个子更高的人每一步覆盖的距离更长，因此身高会调整结果。",
      },
      {
        name: "选择配速",
        text: "快走和跑步的步幅比慢走更长。选择你关心的配速。",
      },
      {
        name: "查看每英里步数",
        text: "结果会根据你在该配速下的个人步幅，显示每英里和每公里的步数。",
      },
    ],
  },
};

export default zh;

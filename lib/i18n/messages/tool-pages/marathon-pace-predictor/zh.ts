import type { MarathonPacePredictorMessages } from "./en";

const zh: MarathonPacePredictorMessages = {
  meta: {
    title: "马拉松成绩预测：用任意比赛成绩预测完赛时间",
    description:
      "跑过 5 公里或 10 公里？用 Riegel 公式立刻预测马拉松和半程马拉松的完赛时间。免费计算器，附配速表和训练提示。",
    keywords: [
      "马拉松成绩预测",
      "比赛成绩预测",
      "马拉松时间计算器",
      "半程马拉松时间预测",
      "Riegel 公式计算器",
      "预测马拉松完赛时间",
      "5 公里换算马拉松时间",
    ],
    ogTitle: "马拉松成绩预测：用任意比赛成绩预测完赛时间",
    ogDescription: "跑过 5 公里或 10 公里？用 Riegel 公式立刻预测马拉松和半程马拉松的完赛时间。",
    ogImageAlt: "马拉松成绩预测",
  },
  hero: {
    title: "马拉松成绩预测",
    subtitle: "输入最近的比赛成绩，预测各标准距离的完赛时间。",
  },
  intro:
    "输入最近的比赛时间和距离，用 Riegel 公式立刻预测 5 公里、10 公里、半程马拉松和马拉松的完赛时间。Riegel 公式是比赛成绩预测的公认标准。",
  calculator: {
    distanceLabel: "你的比赛距离",
    customDistanceLabel: "距离 (km)",
    finishTimeLabel: "你的完赛时间",
    hour: "时",
    minute: "分",
    second: "秒",
    invalidDistance: "请输入有效的距离。",
    invalidTime: "请输入有效的时间。",
    predict: "预测完赛时间",
    resultsTitle: "预计完赛时间",
    distanceColumn: "距离",
    timeColumn: "时间",
    paceKmColumn: "配速 (km)",
    paceMileColumn: "配速 (mi)",
    speedColumn: "速度",
    you: "你",
    footnote: "预测使用 Riegel 公式（疲劳系数 1.06）。最近、强度相近的比赛结果最准确。",
    races: {
      "5k": "5 公里",
      "10k": "10 公里",
      half: "半程马拉松",
      marathon: "马拉松",
      custom: "自定义 (km)",
    },
  },
  info: {
    title: "关于比赛成绩预测",
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "Riegel 公式有多准？",
      answer:
        "对训练有素的跑者，在相近距离之间预测时，Riegel 公式的误差大约在 ±5–10%。距离差距很大（例如从 5 公里推到马拉松），或输入的比赛并非全力时，准确度会下降。",
    },
    {
      question: "什么是 Riegel 公式？",
      answer:
        "T2 = T1 × (D2/D1)^1.06。T1 是已知完赛时间，D1 是已知距离，D2 是目标距离，T2 是预测时间。指数 1.06 用来体现距离变长后疲劳逐渐加重。",
    },
    {
      question: "能用 5 公里成绩预测马拉松吗？",
      answer:
        "可以，但预测会没那么准。公式在输入距离更接近目标距离时效果最好。预测马拉松时，最近的 10 公里或半程马拉松成绩最可靠。",
    },
    {
      question: "马拉松完赛时间多少算好？",
      answer:
        "初学：4:30–5:30｜中级：3:30–4:30｜进阶：3:30 以内｜精英：2:30 以内。马拉松平均完赛时间大约男性 4:30、女性 4:55。",
    },
    {
      question: "怎么用它来分配比赛配速？",
      answer:
        "用目标距离那一列的配速来制定每公里策略。例如预测马拉松配速是 5:30/km，前半程可以略慢（5:35/km），后半程再做负分段。",
    },
  ],
  cta: {
    title: "用 Steps: Workout & Pedometer 更聪明地训练",
    description: "在 Steps: Workout & Pedometer 应用里记录每日步数和活动，让训练更有条理。",
  },
  howTo: {
    name: "如何预测马拉松时间",
    description: "输入最近一次比赛的距离和时间，预测马拉松（以及 5 公里、10 公里、半程）的完赛时间。",
    steps: [
      {
        name: "输入已知的比赛距离和时间",
        text: "用最近一次尽力的成绩——5 公里、10 公里、半程马拉松，或你最近跑过的任意距离。",
      },
      {
        name: "查看预测时间",
        text: "计算器使用 Riegel 公式，预测 5 公里、10 公里、半程马拉松和马拉松的完赛时间。",
      },
    ],
  },
};

export default zh;

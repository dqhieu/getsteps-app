import type { RaceTimePredictorMessages } from "./en";

const zh: RaceTimePredictorMessages = {
  meta: {
    title: "比赛成绩预测：计算 5 公里、10 公里、半程与全程马拉松时间",
    description:
      "免费的比赛成绩预测——输入配速得到完赛时间，或设定目标时间找出所需配速。立刻得出 5 公里、10 公里、半程马拉松和马拉松的结果。",
    keywords: [
      "比赛成绩预测",
      "完赛时间计算器",
      "半程马拉松跑进 2 小时需要什么配速",
      "5 公里完赛时间计算",
      "马拉松配速计算器",
      "跑步目标时间计算器",
    ],
    ogTitle: "比赛成绩预测：计算 5 公里、10 公里、半程与全程马拉松时间",
    ogDescription:
      "免费的比赛成绩预测——输入配速得到完赛时间，或设定目标时间找出所需配速。立刻得出 5 公里、10 公里、半程马拉松和马拉松的结果。",
    ogImageAlt: "比赛成绩预测",
  },
  hero: {
    title: "比赛成绩预测",
    subtitle: "用目标配速计算完赛时间，或找出达成目标时间所需的准确配速。",
  },
  intro:
    "输入比赛距离，以及目标配速或目标完赛时间。立刻看到预计完赛时间或所需的每公里配速，还有 5 公里分段，帮你把比赛配速跑准。",
  calculator: {
    title: "比赛设置",
    distanceLabel: "比赛距离",
    customPlaceholder: "距离（公里）",
    modeLabel: "你想计算什么？",
    finishTimeMode: "完赛时间",
    requiredPaceMode: "所需配速",
    paceLabel: "你的配速（min/km，例如 5:30）",
    goalLabel: "目标完赛时间（H:MM:SS 或 MM:SS）",
    calculate: "计算",
    predictedFinish: "预计完赛时间",
    requiredPaceResult: "所需配速",
    pacePerKm: "配速 /km",
    pacePerMi: "配速 /mi",
    speedKmh: "速度 km/h",
    speedMph: "速度 mph",
    splitsTitle: "5 公里分段",
    markerColumn: "标记",
    cumulativeColumn: "累计时间",
    races: {
      "5k": "5 公里",
      "10k": "10 公里",
      half: "半程马拉松",
      marathon: "马拉松",
      custom: "自定义",
    },
  },
  faqTitle: "比赛配速常见问题",
  faq: [
    {
      question: "半程马拉松跑进 2 小时需要什么配速？",
      answer:
        "你需要保持 5:41/km（9:09/mile），大约相当于 10.6 km/h。用上面的计算器，选择「所需配速」，选半程马拉松，再把目标时间设为 2:00:00。",
    },
    {
      question: "25 分钟跑完 5 公里需要什么配速？",
      answer:
        "25 分钟的 5 公里需要 5:00/km（8:03/mile）。这是扎实的中级目标——大多数初学者从大约 6:30–7:00/km 开始，再逐步加快。",
    },
    {
      question: "比赛中怎么用分段？",
      answer:
        "均匀分段（每 5 公里配速相同）最容易预测成绩。负分段——后半程比前半程更快——是理想做法，也是精英选手追求的。避免在第一公里冲得太快。",
    },
    {
      question: "10 公里跑多少算好？",
      answer:
        "初学：60–70 分钟；中级：50–60 分钟；进阶：40–50 分钟；精英：35 分钟以内。世界纪录在 27 分钟以内。大多数休闲跑者在 50 到 65 分钟之间完赛。",
    },
    {
      question: "半程马拉松怎么分配配速？",
      answer:
        "前 10 公里按目标配速起跑，如果后程感觉还强，再在最后 11 公里推进。不要一开始就快于目标配速——无论配速如何，后半程都会比前半程更难。",
    },
  ],
  cta: {
    title: "在 Steps 应用里记录每天的训练步数。",
    description: "用 Steps 应用记录每一次跑步、跟踪分段，并达成比赛目标。",
  },
  howTo: {
    name: "如何预测比赛完赛时间",
    description: "输入距离，以及配速或目标完赛时间，算出缺的那一项。",
    steps: [
      {
        name: "输入比赛距离",
        text: "选择常见比赛（5 公里、10 公里、半程马拉松、马拉松），或输入自定义距离。",
      },
      {
        name: "输入配速或目标时间",
        text: "两者填一个即可，计算器会补上另一个。",
      },
      {
        name: "查看预计时间或所需配速",
        text: "结果会显示预计完赛时间，以及常见比赛距离的分段。",
      },
    ],
  },
};

export default zh;

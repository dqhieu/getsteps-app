import type { DistanceEquivalentCalculatorMessages } from "./en";

const zh: DistanceEquivalentCalculatorMessages = {
  meta: {
    title: "距离换算器——公里、英里、米、步数",
    description:
      "在公里、英里、米和码之间换算跑步距离。同时查看对应步数、预计用时，以及走路、慢跑或跑步消耗的热量。",
    keywords: [
      "距离换算",
      "公里转英里",
      "一英里多少步",
      "距离等价计算器",
      "米转英里",
      "跑步距离计算器",
      "跑步公里换英里",
    ],
    ogTitle: "距离换算器——公里、英里、米、步数",
    ogDescription:
      "在公里、英里、米和码之间换算跑步距离。同时查看对应步数、预计用时，以及走路、慢跑或跑步消耗的热量。",
    ogImageAlt: "距离换算器",
  },
  hero: {
    title: "距离换算器",
    subtitle: "在公里、英里、米和码之间换算任意距离，并查看对应的步数、用时和热量。",
  },
  intro:
    "输入公里、英里、米或码，立刻看到全部换算结果。包含估算步数、走路或跑步所需时间，以及大致消耗的热量。",
  calculator: {
    enterDistance: "输入距离",
    placeholder: "5",
    units: {
      km: "公里",
      miles: "英里",
      meters: "米",
      yards: "码",
    },
    quick: {
      "5k": "5 公里",
      "10k": "10 公里",
      half: "半程马拉松",
      marathon: "全程马拉松",
    },
    equivalents: "距离换算",
    kilometers: "公里",
    miles: "英里",
    meters: "米",
    yards: "码",
    feet: "英尺",
    approxSteps: "大约步数",
    context: "运动对照",
    activity: "活动",
    speed: "速度",
    time: "时间",
    calories: "热量",
    activities: {
      walking: "走路",
      jogging: "慢跑",
      running: "跑步",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "热量按 70 kg 的人估算",
  },
  faqTitle: "距离换算常见问题",
  faq: [
    {
      question: "1 英里等于多少公里？",
      answer:
        "1 英里 = 1.60934 公里。反过来，1 公里 = 0.62137 英里。所以 5 英里大约是 8.05 公里，10 公里大约是 6.21 英里。",
    },
    {
      question: "1 英里大约多少步？",
      answer:
        "大约 2,000–2,500 步，取决于身高和步幅。平均值大约是每英里 2,112 步（每公里 1,312 步）。个子更高、步幅更长的人步数会少一些。",
    },
    {
      question: "马拉松是多少公里？",
      answer:
        "全程马拉松正好是 42.195 公里（26.219 英里）。半程马拉松是 21.0975 公里（13.109 英里）。这些距离由世界田联规定。",
    },
    {
      question: "5 公里大约多少步？",
      answer:
        "大多数人大约 6,250–7,500 步。按平均每公里 1,312 步计算，5 公里大约是 6,560 步。实际步数会因身高、步态和路面而变化。",
    },
    {
      question: "走 1 英里要多久？",
      answer:
        "按平均步行速度 5 km/h，大约每英里 12 分钟。快走 6 km/h 大约 10 分钟。走得比较快的人可以在 9 分钟以内走完 1 英里。",
    },
  ],
  cta: {
    title: "在 Steps 里看清你今天走了多远。",
    description: "每一步、每一公里、每一卡路里，都会自动记下。",
  },
  howTo: {
    name: "如何在距离单位之间换算",
    description:
      "用任意单位输入距离（公里、英里、米、码、步），得到全部换算结果，以及步行时间和热量。",
    steps: [
      {
        name: "选择你知道的单位",
        text: "公里、英里、米、码、英尺或步——任意单位都可以作为输入。",
      },
      {
        name: "输入距离",
        text: "填写距离数值。",
      },
      {
        name: "查看全部换算",
        text: "计算器会给出每一种单位，以及按平均体重和配速估算的步行时间和热量。",
      },
    ],
  },
};

export default zh;

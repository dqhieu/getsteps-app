import type { PaceToSpeedConverterMessages } from "./en";

const zh: PaceToSpeedConverterMessages = {
  meta: {
    title: "配速与速度换算——min/km、min/mile、km/h、mph",
    description:
      "立刻在跑步配速和速度之间换算。把 min/km 换成 km/h，把 min/mile 换成 mph，并查看任意配速下的 5 公里和 10 公里完赛时间。",
    keywords: [
      "配速速度换算",
      "每公里配速换算 km/h",
      "跑步配速计算器",
      "配速换算速度",
      "min/km 换算 mph",
      "跑步速度换算",
      "配速换算器",
    ],
    ogTitle: "配速与速度换算——min/km、min/mile、km/h、mph",
    ogDescription:
      "立刻在跑步配速和速度之间换算。把 min/km 换成 km/h，把 min/mile 换成 mph，并查看任意配速下的 5 公里和 10 公里完赛时间。",
    ogImageAlt: "配速与速度换算",
  },
  hero: {
    title: "配速与速度换算",
    subtitle: "立刻在跑步配速（min/km、min/mile）和速度（km/h、mph）之间换算。",
  },
  intro:
    "输入任意配速或速度，其他单位会立刻更新。同时查看预计的 5 公里和 10 公里完赛时间，以及 30 分钟或 60 分钟能跑多远。",
  calculator: {
    title: "输入任意数值进行换算",
    paceKm: "配速 (min/km)",
    paceMile: "配速 (min/mile)",
    speedKmh: "速度 (km/h)",
    speedMph: "速度 (mph)",
    distanceTitle: "跑过的距离",
    min30: "30 分钟",
    min60: "60 分钟",
    raceTitle: "完赛时间",
    referenceTitle: "参考配速",
    activityColumn: "活动",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "点击一行即可载入该配速",
    races: {
      "5k": "5 公里",
      "10k": "10 公里",
    },
    activities: {
      walking: "走路",
      jogging: "慢跑",
      running: "跑步",
      fast: "快跑",
      sprint: "冲刺",
    },
  },
  faqTitle: "配速与速度常见问题",
  faq: [
    {
      question: "如何把 min/km 换成 km/h？",
      answer: "用 60 除以你的 min/km 配速。例如配速 5:00/km 等于 60 ÷ 5 = 12 km/h。较慢的 6:00/km 等于 60 ÷ 6 = 10 km/h。",
    },
    {
      question: "用 km/h 看，什么样的跑步速度算好？",
      answer: "轻松慢跑：7–9 km/h；中等跑步：9–12 km/h；较快跑步：12–16 km/h；精英马拉松配速：18 km/h 以上。大多数休闲跑者在 8–11 km/h。",
    },
    {
      question: "如何把 min/km 换成 min/mile？",
      answer: "把 min/km 配速乘以 1.60934 得到 min/mile。例如 5:00/km × 1.60934 = 8:03/mile。这个换算器会自动完成。",
    },
    {
      question: "30 分钟跑完 5 公里是什么速度？",
      answer: "30 分钟的 5 公里需要 6:00/km 的配速，等于 10.0 km/h 或 6.2 mph。这是扎实的休闲跑步配速。",
    },
    {
      question: "配速和速度有什么区别？",
      answer: "配速是单位距离所用的时间（例如 min/km）——数字越小越快。速度是单位时间跑过的距离（例如 km/h）——数字越大越快。它们描述的是同一件事，只是单位互为倒数。",
    },
  ],
  cta: {
    title: "在 Steps 应用里记录跑步和步数。",
    description: "在一个地方查看配速、距离和每日步数。",
  },
  howTo: {
    name: "如何在配速和速度之间换算",
    description: "输入任意一个值——每公里分钟、每英里分钟、km/h 或 mph——即可得到其余单位。",
    steps: [
      {
        name: "选择你知道的单位",
        text: "选择你已有数值的单位（例如 min/km）。",
      },
      {
        name: "输入数值",
        text: "填入配速或速度。",
      },
      {
        name: "查看换算结果",
        text: "四个单位会一起更新：min/km、min/mile、km/h、mph。",
      },
    ],
  },
};

export default zh;

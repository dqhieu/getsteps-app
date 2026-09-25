import type { WalkingTimeCalculatorMessages } from "./en";

const zh: WalkingTimeCalculatorMessages = {
  meta: {
    title: "步行时间计算器：1 公里 ≈ 12 分钟，1 英里 ≈ 18 分钟",
    description:
      "走 1 公里要多久？约 12 分钟。1 英里？约 18 分钟。5 公里？约 60 分钟。免费计算器，支持慢走、常速、快走和快速。",
    keywords: [
      "步行时间",
      "步行时间计算器",
      "走 5 公里要多久",
      "8 公里步行时间",
      "走一英里要多久",
      "步行距离时间",
      "步行配速计算器",
      "走 10000 步要多久",
      "步行时长计算器",
    ],
    ogTitle: "步行时间计算器：1 公里 ≈ 12 分钟，1 英里 ≈ 18 分钟",
    ogDescription: "常速下 1 公里 ≈ 12 分钟，1 英里 ≈ 18 分钟，5 公里 ≈ 60 分钟。任意距离的免费计算器。",
    ogImageAlt: "步行时间计算器",
  },
  hero: {
    title: "步行时间计算器",
    subtitle: "走 5 公里、8 公里或 28 英里要多久？输入任意距离，查看慢走、常速、快走和快速的时间估算。",
  },
  resultCta: {
    headline: "自动记录每一次步行",
    description: "Steps 在后台记录步行时间、距离和配速，让你看到真实步行是如何累加的。",
  },
  stickyCta: "用 Steps 记录你的步数",
  calculator: {
    title: "计算步行时间",
    distance: "距离",
    miles: "英里",
    walkingSpeed: "步行速度",
    speeds: {
      slow: { label: "慢走", description: "3.2 km/h", inline: "慢走" },
      normal: { label: "常速", description: "5.0 km/h", inline: "常速" },
      brisk: { label: "快走", description: "6.4 km/h", inline: "快走" },
      fast: { label: "快速", description: "7.2 km/h", inline: "快速" },
    },
    includeBreaks: "计入休息（每 30 分钟休息 5 分钟）",
    walkingTime: "步行时间",
    breaksDetail: "步行 {walking} + 休息 {breaks} 分钟",
    distanceLabel: "距离",
    stepsLabel: "步数",
    caloriesLabel: "热量",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "约 {calories}",
    referenceTitle: "步行时间参考",
    referenceSubtitle: "以{pace}配速（{speed} km/h）走常见距离所需时间",
    colDistance: "距离",
    colTime: "时间",
    hoursMinutes: "{hours} 小时 {minutes} 分钟",
    hoursOnly: "{hours} 小时",
    minutesOnly: "{minutes} 分钟",
    distances: ["1 km", "1 英里", "2 km", "3 km", "5 km", "5 英里", "10 km", "半程马拉松"],
  },
  info: {
    title: "步行速度指南",
    intro: "步行速度会因体能、地形和目的而不同。了解不同配速，有助于你安排步行。",
    paceTitle: "配速指南",
    paces: [
      {
        label: "慢走（3.2 km/h / 2 mph）：",
        text: "悠闲散步，适合恢复或边走边聊天",
      },
      {
        label: "常速（5 km/h / 3.1 mph）：",
        text: "大多数成年人的平均步行速度",
      },
      {
        label: "快走（6.4 km/h / 4 mph）：",
        text: "有目的的步行，会提高心率",
      },
      {
        label: "快速（7.2 km/h / 4.5 mph）：",
        text: "竞走式配速，接近慢跑",
      },
    ],
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "走 1 公里要多久？",
      answer:
        "常速（5 km/h）下，走 1 公里大约 12 分钟。慢走（3.2 km/h）约 19 分钟，快走（6.4 km/h）大约 9 分钟可以走完。对普通成年人来说，大约是 1,300 步。",
    },
    {
      question: "走 5 公里要多久？",
      answer: "常速（5 km/h）下，走 5 公里大约 60 分钟。快走（6.4 km/h）大约 47 分钟可以走完。",
    },
    {
      question: "走 1 英里要多久？",
      answer: "常速步行下一英里大约 15-20 分钟。快走可以在 12-15 分钟内完成。",
    },
    {
      question: "走 10,000 步要多久？",
      answer:
        "10,000 步大约相当于 7-8 公里（4-5 英里）。常速下大约需要 1 小时 20 到 40 分钟。你不必一次走完，可以分散在一整天里。",
    },
    {
      question: "走 7 公里要多久？",
      answer:
        "常速（5 km/h）下，走 7 公里大约 84 分钟（1 小时 24 分钟）。快走（6.4 km/h）大约 66 分钟可以走完。对普通成年人来说，大约是 9,100 步。",
    },
    {
      question: "走 8 公里要多久？",
      answer:
        "常速（5 km/h）下走 8 公里大约 96 分钟（1 小时 36 分钟），快走大约 75 分钟。大约是 10,400 步。",
    },
    {
      question: "步行时间要不要算上休息？",
      answer:
        "超过 30 分钟的步行，短暂停下有助于保持体力和减轻疲劳。如果你打开这个选项，计算器会每步行 30 分钟加上 5 分钟休息。",
    },
  ],
  precomputedTitle: "已算好的步行时间",
  precomputed: ["走 10,000 步要多久", "走 5 英里要多久", "走 3 英里要多久", "走 1 英里要多久"],
  allConversions: "全部换算 →",
  cta: {
    title: "自动记录你的步行",
    description: "下载 Steps 应用，自动记录步行时间、距离和配速。",
  },
  howTo: {
    name: "如何使用步行时间计算器",
    description: "输入距离和配速，获得以分钟计的步行时间估算——支持公里、英里或步数。",
    steps: [
      {
        name: "输入距离",
        text: "填写你计划走的距离。可以在公里和英里之间切换，也可以输入步数。",
      },
      {
        name: "选择配速",
        text: "选择慢走（3.2 km/h）、常速（5 km/h）、快走（6.4 km/h）或快速（7.2 km/h）。常速是典型成年人的默认值。",
      },
      {
        name: "查看步行时间",
        text: "计算器会显示各配速下走完这段距离的预计分钟数，以及总步数估算。",
      },
    ],
  },
};

export default zh;

import type { RunningPaceCalculatorMessages } from "./en";

const zh: RunningPaceCalculatorMessages = {
  meta: {
    title: "跑步配速计算器——换算配速、速度与完赛时间",
    description:
      "计算你的跑步配速（min/km 或 min/mile），在配速和速度之间换算，并预测 5 公里、10 公里、半程马拉松和马拉松的完赛时间。",
    keywords: [
      "跑步配速计算器",
      "配速计算器",
      "每公里配速计算",
      "每英里配速计算",
      "比赛成绩预测",
      "跑步速度计算器",
      "5 公里配速计算器",
    ],
    ogTitle: "跑步配速计算器——换算配速、速度与完赛时间",
    ogDescription:
      "计算你的跑步配速（min/km 或 min/mile），在配速和速度之间换算，并预测 5 公里、10 公里、半程马拉松和马拉松的完赛时间。",
    ogImageAlt: "跑步配速计算器",
  },
  hero: {
    title: "跑步配速计算器",
    subtitle: "在跑步配速、速度和完赛时间之间换算。适用于从 5 公里到马拉松的任意距离。",
  },
  intro:
    "输入配速、速度，或时间与距离，即可立刻换算各项跑步指标，并预测从 5 公里到马拉松任意距离的完赛时间。",
  calculator: {
    title: "计算配速",
    tabs: {
      pace: "配速",
      speed: "速度",
      timeDistance: "时间 + 距离",
    },
    paceLabel: "配速 (MM:SS)",
    paceHint: "按分:秒格式输入配速（例如 5:30）",
    speedLabel: "速度",
    distanceLabel: "距离",
    finishTimeLabel: "完赛时间 (MM:SS 或 H:MM:SS)",
    statsTitle: "你的跑步数据",
    pacePerKm: "配速 /km",
    pacePerMi: "配速 /mi",
    speedKmh: "速度 km/h",
    speedMph: "速度 mph",
    predictionsTitle: "完赛时间预测",
    distanceColumn: "距离",
    finishTimeColumn: "完赛时间",
    races: {
      "5k": "5 公里",
      "10k": "10 公里",
      half: "半程马拉松",
      marathon: "马拉松",
    },
  },
  faqTitle: "了解跑步配速",
  faq: [
    {
      question: "什么样的跑步配速算好？",
      answer:
        "这取决于你的经验。初学者通常在 7–9 min/km（11–14 min/mile）。中级跑者平均 5–7 min/km（8–11 min/mile）。进阶跑者能保持在 5 min/km 以内（8 min/mile 以内）。精英马拉松选手能维持低于 3:00/km 的配速。最好的配速，是让你跑完后觉得有挑战、但还没有彻底耗尽的那个。",
    },
    {
      question: "如何把 min/km 换成 min/mile？",
      answer:
        "把 min/km 配速乘以 1.60934，就得到 min/mile。例如 5:00/km 等于 5:00 × 1.60934 = 8:03/mile。反过来，把 min/mile 除以 1.60934 就得到 min/km。切换单位时，这个计算器会自动换算。",
    },
    {
      question: "半程马拉松要跑进 2 小时，需要什么配速？",
      answer:
        "半程马拉松（21.0975 km）要在 2 小时内完赛，配速需要快于 5:41/km（9:09/mile），大约相当于 10.6 km/h（6.6 mph）。这是常见的中级目标——先稳定在 6:00–6:30/km 打好基础，再去冲击 2 小时以内。",
    },
    {
      question: "平均跑步配速是多少？",
      answer:
        "大多数休闲跑者在 6–8 min/km（10–13 min/mile）。5 公里比赛的平均完赛时间大约 28–35 分钟，对应配速约 5:30–7:00/km。半程马拉松的平均完赛时间大约在 2:00–2:20，全程马拉松大约在 4:20–4:45。年龄、体能和地形都会带来明显差异。",
    },
    {
      question: "怎样提高跑步配速？",
      answer:
        "把三种训练结合起来效果最好：间歇跑（用比比赛更快的配速短促加速，中间恢复）、长距离慢跑（用能聊天的配速打有氧基础），以及节奏跑（以略感吃力、但能持续的配速跑）。每周加 1–2 次力量训练来预防受伤。最重要的是坚持——每周至少跑 3 次，周跑量增幅不超过 10%，以免受伤。",
    },
  ],
  cta: {
    title: "记录你的健康进展",
    description: "在 Steps 应用里同时记录跑步和每日步数。",
  },
  howTo: {
    name: "如何使用跑步配速计算器",
    description: "在配速、速度和时间之间换算——距离、配速、完赛时间中任选两项，计算器会算出第三项。",
    steps: [
      {
        name: "选择你想求的未知量",
        text: "选择你想得到配速、时间还是距离。另外两项由你输入。",
      },
      {
        name: "输入已知的两项",
        text: "输入距离和时间得到配速，或输入配速和距离得到完赛时间，以此类推。支持每公里分钟和每英里分钟。",
      },
      {
        name: "查看结果",
        text: "计算器会同时给出公制和英制结果，并附上你的成绩与常见比赛配速的对照。",
      },
    ],
  },
};

export default zh;

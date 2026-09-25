import type { WalkingCaloriesMessages } from "./en";

const zh: WalkingCaloriesMessages = {
  meta: {
    title: "步行热量计算器：按体重和配速免费计算",
    description:
      "步行热量：70 kg 成人以 5.6 km/h 走 30 分钟约消耗 150 kcal。免费计算器——按体重、速度、时间、距离或步数即时估算。",
    keywords: [
      "步行热量计算器",
      "走路消耗热量计算",
      "步行 MET 值",
      "步行 5 km/h MET",
      "步行 MET 5 公里",
      "快走 MET 值",
      "平均配速步行 MET",
      "中等配速步行 MET",
      "走路消耗的卡路里",
      "每公里步行热量",
      "步行 4 km/h MET",
      "步行 4.5 km/h MET",
      "步行 6 km/h MET",
      "步行热量计算公式 MET",
    ],
    ogTitle: "步行热量计算器：按体重和配速免费计算",
    ogDescription:
      "70 kg 成人中等配速走 30 分钟约消耗 150 kcal。免费步行热量计算器——按体重、速度、时间、距离或步数即时出结果。",
    ogImageAlt: "步行热量计算器",
  },
  hero: {
    title: "步行热量计算器与 MET 值",
    subtitle:
      "用 MET（代谢当量）按每种步行速度计算消耗的热量——从 2 km/h 的慢走到 7 km/h 以上的竞走式快走。附完整 MET 对照表。",
  },
  appCta: {
    headline: "记录你真正消耗的热量",
    description: "Steps 在后台计算每一步，并换成你每天实际消耗的热量，不用手动记录。",
  },
  stickyCta: "用 Steps 记录你的步数",
  calculator: {
    calculateBy: "计算方式",
    distance: "距离",
    time: "时间",
    weight: "体重",
    duration: "时长",
    minutes: "分钟",
    miles: "英里",
    walkingSpeed: "步行速度",
    speeds: {
      slow: { label: "慢速", description: "3.2 km/h (2 mph)" },
      normal: { label: "正常", description: "5 km/h (3.1 mph)" },
      brisk: { label: "快走", description: "6.4 km/h (4 mph)" },
      fast: { label: "极速", description: "7.2 km/h (4.5 mph)" },
    },
    caloriesBurned: "消耗热量",
    walkingTime: "步行时间",
    distanceResult: "距离",
    steps: "步数",
    fatBurned: "消耗脂肪",
    metValue: "MET 值",
    metTableTitle: "步行速度与 MET 值",
    metTableIntro: "MET（Metabolic Equivalent of Task）表示活动的能量消耗。MET 越高，消耗的热量越多。",
    columns: {
      speed: "速度",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "说明",
    },
    paceDescriptions: {
      slow: "悠闲散步",
      normal: "平均配速",
      brisk: "快走",
      fast: "竞走式快走",
    },
  },
  info: {
    title: "我们如何计算步行热量",
    intro:
      "我们用 MET（Metabolic Equivalent of Task，代谢当量）方法计算消耗的热量。这种有研究依据的方法会考虑你的体重、步行时长和强度。",
    formulaTitle: "公式",
    formula: "热量 = MET × 体重 (kg) × 时长 (小时)",
    metLabel: "MET：",
    metText: "Metabolic Equivalent of Task——相对于静息状态的能量消耗",
    exampleLabel: "示例：",
    example: "70 kg 的人以正常配速步行（MET 3.5）1 小时：3.5 × 70 × 1 = 245 千卡",
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "走 1 英里消耗多少热量？",
      answer: "对大多数人来说，走 1 英里大约消耗 80–100 千卡。具体取决于体重和速度。体重越大，每英里消耗越多。",
    },
    {
      question: "走 30 分钟消耗多少热量？",
      answer:
        "正常配速走 30 分钟，大多数成人大约消耗 100–150 千卡。快走可以提高到 150–200 千卡。用上面的计算器得到针对你的估算。",
    },
    {
      question: "走 40 分钟消耗多少热量？",
      answer:
        "对 70 kg 成人，中等配速（4.8 km/h）走 40 分钟大约消耗 140–200 千卡，快走（5.6–6.4 km/h）约 200–280 千卡。竞走式配速 8 km/h 时，同样 40 分钟约 290 千卡。9.7 km/h（很快的走或轻慢跑，MET 约 7.0）时，70 kg 的人 40 分钟大约消耗 325–330 千卡。",
    },
    {
      question: "以 9.7 km/h 走 40 分钟消耗多少热量？",
      answer:
        "以 9.7 km/h（6.0 mph）走 40 分钟——跑步机上的竞走式配速，MET 约 7.0——70 kg（155 lb）的人大约消耗 327 千卡。更重的人消耗更多：约 82 kg 为 380 kcal，约 91 kg 为 422 kcal。大多数成人维持不了这种真正的步行速度，往往会变成轻慢跑。用上面的计算器按你的体重得到精确数字。",
    },
    {
      question: "步行速度会影响热量消耗吗？",
      answer:
        "会，而且差别明显。走得越快，MET 越高，每分钟消耗的热量越多。快走（6.4 km/h）比悠闲散步（3.2 km/h）大约多消耗 30% 的热量。",
    },
    {
      question: "什么是 MET，为什么重要？",
      answer:
        "MET（Metabolic Equivalent of Task）是衡量能量消耗的科学指标。1 MET 代表你的静息代谢率。正常配速步行的 MET 为 3.5，也就是消耗的热量是静息时的 3.5 倍。",
    },
    {
      question: "平均配速步行的 MET 值是多少？",
      answer:
        "平均配速步行（约 5 km/h 或 3.1 mph）的 MET 值是 3.5。这是成人最常见的步行速度，也是大多数热量计算器的基准。70 kg 的人按这个配速每小时大约消耗 245 千卡。",
    },
    {
      question: "中等配速步行的 MET 值是多少？",
      answer:
        "中等配速（4.0–4.5 km/h 或 2.5–2.8 mph）的 MET 在 3.0 到 3.3 之间。这是可以边走边说话的舒适配速，适合日常步行。70 kg 的人中等配速每小时消耗 210–231 千卡。",
    },
    {
      question: "5 km/h（3.1 mph）步行的 MET 值是多少？",
      answer:
        "5 km/h（3.1 mph）步行的 MET 值是 3.5，属于正常配速。70 kg 的人按这个速度每小时大约消耗 245 千卡（3.5 × 70 = 245 kcal/h）。",
    },
    {
      question: "4.5 km/h（2.8 mph）步行的 MET 值是多少？",
      answer:
        "4.5 km/h（2.8 mph）步行的 MET 值是 3.3，属于稳定、舒适的配速。70 kg 的人每小时大约消耗 231 千卡（3.3 × 70 = 231 kcal/h）。",
    },
    {
      question: "6 km/h 快走的 MET 值是多少？",
      answer:
        "6.0 km/h（3.7 mph）快走的 MET 值是 4.5，比正常步行（MET 3.5）大约多 30% 的能量消耗。70 kg 的人按这个配速每小时大约消耗 315 千卡。",
    },
    {
      question: "走路能消耗多少脂肪？",
      answer:
        "1 公斤体脂大约含 7,700 千卡。每天走 10,000 步（约 400 千卡），在饮食不变的情况下，大约每 19 天消耗 1 kg 脂肪。配合健康饮食效果更好。",
    },
  ],
  formula: {
    title: "步行热量公式如何计算",
    intro:
      "{name}使用 {source} 中的 MET（Metabolic Equivalent of Task）数值——全球运动生理学家使用的同一参考。公式是：",
    name: "步行消耗热量计算器公式",
    source: "Compendium of Physical Activities",
    equation: "热量 = MET × 体重 (kg) × 时长 (小时)",
    glance: "每种步行速度都有对应的 MET 值。以下是搜索最多的 MET 值：",
    highlights: [
      { phrase: "步行 4.8 km/h 的 MET 值", detail: "(3 mph) =" },
      { phrase: "中等配速的 MET 值", detail: "(5 km/h) =" },
      { phrase: "快走的 MET 值", detail: "(6.4 km/h) =" },
      { phrase: "步行 5 km/h 的 MET 值", detail: "(3.1 mph) =" },
    ],
    chartNote: "完整对照见我们的{chart}，从慢走到竞走的每种速度，以及坡度和地形的调整。",
    chartLabel: "步行 MET 值图表",
  },
  understanding: {
    title: "理解步行的 MET 值",
    term: "MET（Metabolic Equivalent of Task）",
    body:
      "{term}是衡量运动强度的科学标准。1 MET 等于身体完全静息时的能量消耗——大约每公斤体重每小时 1 千卡。活动的 MET 为 3.5 时，表示你消耗的能量是静坐时的 3.5 倍。",
    levels: {
      light: { title: "轻度步行", detail: "慢走、逛街配速（2–4 km/h）" },
      moderate: { title: "中等步行", detail: "正常到快走，最常见（4–6 km/h）" },
      vigorous: { title: "高强度步行", detail: "竞走式快走、竞走或上坡（6+ km/h）" },
    },
    footnote:
      "计算器中的 MET 值来自 Compendium of Physical Activities，这是全球运动科学使用的标准参考。5 km/h（3.1 mph）是搜索最多的速度，MET 为 3.5，70 kg 的人按这个配速每小时消耗 245 千卡。",
  },
  metTable: {
    title: "各步行速度的完整 MET 值",
    intro:
      "MET（Metabolic Equivalent of Task）衡量能量消耗。1.0 MET 等于你的静息代谢率。用下表查找你的步行速度对应的 MET。数值依据 Compendium of Physical Activities。",
    columns: {
      activity: "步行活动",
      kmh: "速度 (km/h)",
      mph: "速度 (mph)",
      met: "MET 值",
      cal: "千卡/小时 (70 kg)",
    },
    activities: {
      "very-slow": "极慢走",
      "slow-stroll": "慢速散步",
      leisurely: "悠闲步行",
      comfortable: "舒适配速",
      moderate: "中等步行",
      steady: "稳定配速",
      normal: "正常步行",
      purposeful: "有目的的步行",
      brisk: "快走",
      fast: "快速步行",
      "very-fast": "极快走",
      race: "竞走",
      "uphill-3": "上坡步行（3% 坡度）",
      "uphill-6": "上坡步行（6% 坡度）",
    },
    footnote:
      "每小时热量按 70 kg（154 lb）计算。实际消耗取决于你的体重——用上面的计算器得到个性化估算。高亮行是最常见的配速。来源：Compendium of Physical Activities。",
  },
  cta: {
    title: "记录你的步行训练",
    description: "下载 Steps 应用，自动记录步行、消耗的热量和长期进展。",
  },
  howTo: {
    name: "如何计算步行消耗的热量",
    description: "输入步行时长、配速和体重，用 MET 值估算消耗的热量。",
    steps: [
      {
        name: "输入时长或距离",
        text: "可以在走了多久和走了多远之间切换。两种方式得到同一估算。",
      },
      {
        name: "选择步行配速",
        text: "慢速、正常、快走或极速。配速越快，MET 越高，每分钟消耗的热量越多。",
      },
      {
        name: "输入体重",
        text: "体重是热量消耗最大的乘数。",
      },
      {
        name: "查看热量估算",
        text: "计算器会给出消耗的热量、每分钟平均值，以及使用的 MET 值。",
      },
    ],
  },
};

export default zh;

import type { ConversionValuesMessages } from "./en";

const zh: ConversionValuesMessages = {
  ui: {
    breadcrumb: "面包屑",
    quickAnswer: "快速答案",
    forContext: "参考：",
    distanceByHeightTitle: "距离取决于你的身高",
    distanceByHeightBody: "步幅大约是身高的 0.41 倍——个子较矮的人每一步走得更近。",
    heightColumn: "你的身高",
    strideColumn: "步幅",
    milesColumn: "英里",
    kilometersColumn: "公里",
    stepsColumn: "步",
    stepsRequiredTitle: "需要的步数取决于你的身高",
    stepsRequiredBody: "个子较矮的人要走更多步才能覆盖同样的距离。",
    caloriesTitle: "按体重和配速消耗的卡路里",
    caloriesBody: "卡路里随体重线性增加。配速更快会消耗更多，但走路时只多一点点。",
    weightColumn: "你的体重",
    timeTitle: "要走多久？",
    timeBody: "时间取决于你的配速。大多数成年人以大约 3 mph 的正常配速走路。",
    paceColumn: "配速",
    speedColumn: "速度",
    timeColumn: "时间",
    cm: "{value} 厘米",
    mi: "{value} 英里",
    km: "{value} 公里",
    cal: "{value} 卡",
    mph: "{value} mph",
    ctaTitle: "用 Steps 记录你的真实数据",
    ctaBody:
      "这些换算使用平均值。Steps 应用会记录你的{actual}步幅、卡路里和步行时间——并与 iPhone 和 Apple Watch 同步。",
    ctaActual: "实际",
    relatedTitle: "相关换算",
    faqTitle: "常见问题",
    heights: [
      "147 厘米——娇小",
      "163 厘米——女性平均",
      "175 厘米——成人平均",
      "183 厘米——男性平均",
      "193 厘米——高个子",
    ],
    weights: [
      "54 公斤（120 磅）",
      "68 公斤（150 磅）",
      "82 公斤（180 磅）",
      "95 公斤（210 磅）",
      "113 公斤（250 磅）",
    ],
    paces: ["慢走（2 mph）", "正常（3.1 mph）", "快走（4 mph）"],
    duration: {
      minutes: "{count} 分钟",
      hours: "{count} 小时",
      hoursMinutes: "{hours} 小时 {minutes} 分钟",
    },
  },
  plurals: {
    mile: { one: "1 英里", other: "{count} 英里" },
    mileArticle: { one: "1 英里", other: "{count} 英里" },
    mileInSteps: { one: "{count} 英里等于多少步", other: "{count} 英里等于多少步" },
    mileToSteps: { one: "{count} 英里换成步", other: "{count} 英里换成步" },
    howManyStepsInMile: {
      one: "{count} 英里有多少步",
      other: "{count} 英里有多少步",
    },
    howManyStepsIsMile: {
      one: "{count} 英里是多少步",
      other: "{count} 英里是多少步",
    },
    mileWalkSteps: "{count} 英里步行步数",
    howLongDoesMile: {
      one: "走 {count} 英里要多久",
      other: "走 {count} 英里要多久",
    },
    howLongToMile: {
      one: "{count} 英里步行时间",
      other: "{count} 英里步行时间",
    },
    walkingTimeMile: {
      one: "步行时间 {count} 英里",
      other: "步行时间 {count} 英里",
    },
    mileWalkingTime: {
      one: "{count} 英里要走多久",
      other: "{count} 英里要走多久",
    },
    walkMileTime: {
      one: "走 {count} 英里——时间",
      other: "走 {count} 英里——时间",
    },
  },
  familiar: {
    olympic: "一圈 400 米奥林匹克跑道",
    centralPark: "纽约中央公园的长度",
    fiveK: "一场 5 公里比赛",
    tenK: "一场 10 公里比赛",
    brooklyn: "布鲁克林大桥往返",
    half: "半程马拉松",
    marathon: "全程马拉松",
  },
  foods: {
    banana: "一根香蕉（105 卡）",
    apple: "一个苹果（95 卡）",
    bread: "一片面包（80 卡）",
    coffee: "一杯加奶油的咖啡（50 卡）",
    cookie: "一块巧克力曲奇（160 卡）",
    juice: "一杯橙汁（110 卡）",
  },
  stepsToKm: {
    meta: {
      title: "{steps}步是多少公里——{steps}步等于多少公里",
      description:
        "对普通成年人来说，{steps}步 ≈ {km} 公里（{miles} 英里）。按你的身高查看准确距离、消耗的卡路里和步行时间。",
      keywords: [
        "{steps}步是多少公里",
        "{steps}步等于多少公里",
        "{steps}步换算公里",
        "{steps}步走多远",
      ],
      ogImageAlt: "{steps}步是多少公里",
    },
    h1: "{steps}步是多少公里",
    subheading: "走到 {steps}步时，你走了多远？",
    primary: "{km} 公里",
    secondary: "{miles} 英里 · 正常配速约 {time} · 70 公斤的人消耗 {calories} 卡",
    intro:
      "对普通成年人来说，走 {steps}步大约是 {km} 公里（{miles} 英里），按典型的 76 厘米（2.5 英尺）步幅计算。以 5 公里/小时的正常配速，大约需要 {time}，70 公斤（155 磅）的人大约消耗 {calories} 卡。准确距离取决于你的身高——个子更高的人每一步走得更远。见下方表格。",
    crumb: "步换算公里",
    crumbValue: "{steps}步",
    related: "{steps}步是多少公里",
    relatedHub: "一公里有多少步？",
    relatedMiles: "{steps}步是多少英里",
    faq: [
      {
        question: "{steps}步是多少公里？",
        answer:
          "对步幅 76 厘米的普通成年人来说，{steps}步大约是 {km} 公里（{miles} 英里）。个子较矮的人距离稍短，较高的人稍长——本页身高表可以查到你的数字。",
      },
      {
        question: "走 {steps}步要多久？",
        answer:
          "以 5 公里/小时的正常配速，{steps}步大约需要 {time}。以 6.4 公里/小时的快走大约 {brisk}。以 3.2 公里/小时的慢走大约 {slow}。",
      },
      {
        question: "{steps}步消耗多少卡路里？",
        answer:
          "70 公斤（155 磅）的人以正常配速走 {steps}步，大约消耗 {calories} 卡。体重较轻的人每步消耗更少，较重的人更多。本页卡路里表可以按你的体重查看。",
      },
      {
        question: "步换算公里是怎么算的？",
        answer:
          "我们使用 76 厘米（2.5 英尺）的成人平均步幅。步数 × 步幅（厘米）÷ 100,000 = 公里数。所以 {steps}步 × 76 厘米 ÷ 100,000 ≈ {km} 公里。你的实际步幅大约是身高的 0.41 倍。",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "{steps}步是多少英里——{steps}步等于多少英里",
      description:
        "对普通成年人来说，{steps}步 ≈ {miles} 英里（{km} 公里）。按你的身高查看准确距离、消耗的卡路里和步行时间。",
      keywords: [
        "{steps}步是多少英里",
        "{steps}步换算英里",
        "{steps}步等于多少英里",
        "{steps}步",
        "{steps}步距离",
        "{steps}步卡路里",
      ],
      ogImageAlt: "{steps}步是多少英里",
    },
    h1: "{steps}步是多少英里",
    subheading: "走到 {steps}步时，你走了多远？",
    primary: "{miles} 英里",
    secondary: "{km} 公里 · 正常配速约 {time} · 155 磅（70 公斤）的人消耗 {calories} 卡",
    intro:
      "对普通成年人来说，走 {steps}步大约是 {miles} 英里（{km} 公里），按典型的 76 厘米（2.5 英尺）步幅计算。以 3 mph 的正常配速，大约需要 {time}，155 磅（70 公斤）的人大约消耗 {calories} 卡。准确距离取决于你的身高——个子更高的人每一步走得更远。见下方表格。",
    crumb: "步换算英里",
    crumbValue: "{steps}步",
    related: "{steps}步是多少英里",
    relatedHub: "一英里有多少步？",
    relatedCalories: "{steps}步消耗多少卡路里",
    realWorld: {
      roughly: "{miles} 英里大致相当于 {name} 的距离。",
      times: "大约是 {name} 的 {factor} 倍。",
      shorter: "大约比 {name} 短 {factor} 倍。",
    },
    faq: [
      {
        question: "{steps}步是多少英里？",
        answer:
          "对步幅 76 厘米的普通成年人来说，{steps}步大约是 {miles} 英里（{km} 公里）。个子较矮的人距离稍短，较高的人稍长——本页身高表可以查到你的数字。",
      },
      {
        question: "走 {steps}步要多久？",
        answer:
          "以 3 mph 的正常配速，{steps}步大约需要 {time}。以 4 mph 的快走大约 {brisk}。以 2 mph 的慢走大约 {slow}。",
      },
      {
        question: "{steps}步消耗多少卡路里？",
        answer:
          "155 磅（70 公斤）的人以正常配速走 {steps}步，大约消耗 {calories} 卡。体重较轻的人每步消耗更少，较重的人更多。本页卡路里表可以按你的体重查看。",
      },
      {
        question: "这个换算是怎么算的？",
        answer:
          "我们使用 76 厘米（2.5 英尺）的成人平均步幅，这是 CDC 和梅奥诊所最常引用的数字。步数 × 步幅 = 行走距离。你的实际步幅大约是身高的 0.41 倍——本页身高表给出了五种常见身高的计算。",
      },
    ],
    daily: {
      question: "{steps}步是合适的每日目标吗？",
      below:
        "{steps}步低于大多数卫生机构建议成年人的每日 7,000–10,000 步。可以把它当作起点再慢慢增加——每天多走 1,000 步也有助于心血管健康。",
      mid: "是的——{steps}步正落在大多数研究和 CDC 建议成年人的范围内。长期达到这个量与较低的心血管疾病风险和更好的长期健康有关。",
      above:
        "{steps}步高于常见的每日 10,000 步目标。这是很扎实的运动量，有助于心肺健康和体重管理——但低运动量的恢复日同样健康。",
    },
  },
  milesToSteps: {
    meta: {
      title: "{miles}是多少步？——{steps}步",
      description:
        "对普通成年人来说，{miles} ≈ {steps}步。按你的身高查看准确步数、消耗的卡路里和步行时间。",
      ogImageAlt: "{miles}是多少步",
    },
    h1: "{milesArticle}是多少步？",
    subheading: "普通成年人的答案，以及它如何随你的身高变化。",
    primary: "{steps}步",
    secondary:
      "{miles} · {km} 公里 · 正常配速约 {time} · 155 磅（70 公斤）的人消耗 {calories} 卡",
    intro:
      "对普通成年人来说，走 {miles}大约需要 {steps}步，按典型的 76 厘米（2.5 英尺）步幅计算。以 3 mph 的正常配速，大约需要 {time}，155 磅（70 公斤）的人大约消耗 {calories} 卡。准确步数取决于你的身高——个子较矮的人走同样距离需要更多步。见下方表格。",
    crumb: "英里换算步",
    relatedHub: "步换算英里",
    relatedCalories: "{steps}步消耗多少卡路里",
    faq: [
      {
        question: "{miles}是多少步？",
        answer:
          "对步幅 76 厘米的普通成年人来说，{miles}大约是 {steps}步。个子较矮的人走同样距离需要更多步——本页身高表可以查到你的数字。",
      },
      {
        question: "走 {miles}要多久？",
        answer:
          "以 3 mph 的正常配速，{miles}大约需要 {time}。以 4 mph 的快走大约 {brisk}。以 2 mph 的慢走大约 {slow}。",
      },
      {
        question: "{milesArticle}消耗多少卡路里？",
        answer:
          "155 磅（70 公斤）的人以正常配速走 {miles}，大约消耗 {calories} 卡。体重较轻的人消耗更少，较重的人更多——见本页卡路里表。",
      },
      {
        question: "英里换算步是怎么算的？",
        answer:
          "我们把以米计的距离乘以 100（厘米/米），再除以 76 厘米的平均步幅。所以 {miles} = {meters} 米 × 100 ÷ 76 ≈ {steps}步。你的实际步幅大约是身高的 0.41 倍。",
      },
    ],
    exercise: {
      question: "每天走 {miles}够不够？",
      yes: "够——如果以正常到较快的配速走，每天 {miles}（{steps}步）很容易达到 CDC 建议的每周 150 分钟中等强度有氧活动。",
      start:
        "每天走 {miles}是不错的开始。它让你处于活动量范围内，也计入 CDC 建议的每周 150 分钟有氧活动，但每天再加一次步行，健康收益会更明显。",
      below:
        "每天走不到 {miles}低于 CDC 的最低建议。可以慢慢增加——每天多走 1,000 步也有助于心血管健康。",
    },
  },
  kmToSteps: {
    meta: {
      title: "{km}公里是多少步？——{steps}步",
      description:
        "对普通成年人来说，{km} 公里 ≈ {steps}步。按你的身高查看准确步数、消耗的卡路里和步行时间。",
      keywords: [
        "{km}公里是多少步",
        "{km}公里换算步",
        "{km}公里有多少步",
        "{km}千米是多少步",
      ],
      ogImageAlt: "{km}公里是多少步",
    },
    h1: "{km}公里是多少步？",
    subheading: "普通成年人的答案，以及它如何随你的身高变化。",
    primary: "{steps}步",
    secondary: "{km} 公里 · 正常配速约 {time} · 70 公斤的人消耗 {calories} 卡",
    intro:
      "对普通成年人来说，走 {km} 公里大约需要 {steps}步，按典型的 76 厘米（2.5 英尺）步幅计算。以 5 公里/小时的正常配速，大约需要 {time}，70 公斤（155 磅）的人大约消耗 {calories} 卡。准确步数取决于你的身高——个子较矮的人走同样距离需要更多步。",
    crumb: "公里换算步",
    crumbValue: "{km} 公里",
    related: "{km}公里是多少步",
    relatedHub: "步换算公里",
    faq: [
      {
        question: "{km}公里是多少步？",
        answer:
          "对步幅 76 厘米的普通成年人来说，{km} 公里大约是 {steps}步。个子较矮的人走同样距离需要更多步——本页身高表可以查到你的数字。",
      },
      {
        question: "走 {km}公里要多久？",
        answer:
          "以 5 公里/小时的正常配速，{km} 公里大约需要 {time}。以 6.4 公里/小时的快走大约 {brisk}。以 3.2 公里/小时的慢走大约 {slow}。",
      },
      {
        question: "走 {km}公里消耗多少卡路里？",
        answer:
          "70 公斤（155 磅）的人以正常配速走 {km} 公里，大约消耗 {calories} 卡。本页卡路里表可以按你的体重查看。",
      },
      {
        question: "公里换算步是怎么算的？",
        answer:
          "我们把距离乘以 100,000（厘米/公里），再除以 76 厘米的平均步幅。所以 {km} 公里 = {cm} 厘米 ÷ 76 厘米 ≈ {steps}步。你的实际步幅大约是身高的 0.41 倍。",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "{steps}步消耗多少卡路里——{steps}步能燃烧多少热量",
      description:
        "对普通成年人来说，{steps}步大约消耗 {calories} 卡。按你的体重、配速和步行时间查看消耗。",
      keywords: [
        "{steps}步卡路里",
        "{steps}步消耗多少卡路里",
        "{steps}步热量",
        "{steps}步燃烧卡路里",
        "{steps}步等于多少卡",
      ],
      ogImageAlt: "{steps}步卡路里",
    },
    h1: "{steps}步消耗多少卡路里？",
    subheading: "走 {steps}步消耗的卡路里，按你的体重和配速。",
    primary: "≈ {calories} 卡",
    secondary: "155 磅（70 公斤）、正常配速 · 约 {miles} 英里 / {km} 公里 · 大约 {time}",
    intro:
      "普通成年人（155 磅 / 70 公斤）以正常配速走 {steps}步，大约消耗 {calories} 卡。这相当于 {miles} 英里（{km} 公里），大约需要 {time}。卡路里消耗随体重变化——较轻的人消耗更少，较重的人消耗更多。",
    crumb: "步换算卡路里",
    crumbValue: "{steps}步",
    related: "{steps}步卡路里",
    relatedMiles: "{steps}步是多少英里",
    relatedTool: "步行卡路里计算器",
    realWorld: {
      roughly: "{calories} 卡大致相当于 {name}。",
      times: "{calories} 卡大约是 {name} 的 {factor} 倍。",
      less: "{calories} 卡大约比 {name} 少 {factor} 倍。",
    },
    faq: [
      {
        question: "{steps}步消耗多少卡路里？",
        answer:
          "155 磅（70 公斤）的人以 3 mph 的正常配速走 {steps}步，大约消耗 {calories} 卡。体重更重的人消耗更多——见本页体重表。",
      },
      {
        question: "配速会改变卡路里消耗吗？",
        answer:
          "会，但不多。以 4 mph（快走）走路，每分钟消耗的卡路里大约比 2 mph（慢走）多 30%，但你也会更快走完这段距离，所以固定步数的总消耗比想象中更接近。对 150 磅的人，总量大约从 {slowCal}（慢）到 {briskCal}（快）。",
      },
      {
        question: "走 {steps}步要多久？",
        answer: "正常配速（3 mph）大约 {time}。4 mph 的较快配速：{brisk}。2 mph 的慢走：{slow}。",
      },
      {
        question: "这些数字背后的公式是什么？",
        answer:
          "我们使用标准的 MET 卡路里公式：卡路里 = MET × 体重（公斤）× 时间（小时）。正常步行配速的 MET = 3.5。我们用 76 厘米的平均步幅把步数换成距离，再把距离换成步行时间。",
      },
    ],
    loss: {
      question: "{steps}步消耗的卡路里够减肥吗？",
      yes: "{calories} 卡是每日缺口里相当可观的一块——如果不多吃回来，两周大约相当于减掉 0.5 磅。再加上适度的饮食调整，可以带来稳定的减重。",
      no: "{calories} 卡有帮助，但单靠这些不足以减肥。目标是每天至少 7,500–10,000 步，同时通过饮食形成适度的热量缺口。",
    },
  },
  stepsToTime: {
    meta: {
      title: "走 {steps}步要多久？",
      description: "{steps}步在正常配速下大约需要 {time}。查看三种配速的步行时间、距离和卡路里消耗。",
      keywords: [
        "走 {steps}步要多久",
        "{steps}步需要多长时间",
        "{steps}步多少分钟",
        "{steps}步步行时间",
        "{steps}步时长",
      ],
      ogImageAlt: "{steps}步的步行时间",
    },
    h1: "走 {steps}步要多久？",
    subheading: "{steps}步的步行时间、距离和卡路里。",
    primary: "≈ {time}",
    secondary: "正常配速 3 mph · 约 {miles} 英里 / {km} 公里 · {calories} 卡",
    intro:
      "以 3 mph（5 公里/小时）的正常配速，走 {steps}步大约需要 {time}。4 mph 的快走会缩短到 {brisk}；2 mph 的慢走会延长到 {slow}。你会走 {miles} 英里（{km} 公里），大约消耗 {calories} 卡。",
    crumb: "步行时间",
    crumbValue: "{steps}步",
    related: "{steps}步——步行时间",
    relatedMiles: "{steps}步是多少英里",
    relatedTool: "步行时间计算器",
    faq: [
      {
        question: "走 {steps}步要多久？",
        answer: "以 3 mph 的正常配速大约 {time}。较快配速（4 mph）：{brisk}。慢走（2 mph）：{slow}。",
      },
      {
        question: "步行时间会随身高变化吗？",
        answer:
          "时间大致不变——变的是步数。个子更高的人走同样距离步数更少，但大多数人的步频相近（大约每分钟 100 步）。所以时间主要取决于配速，而不是身高。",
      },
      {
        question: "{steps}步有多远？",
        answer: "对普通成年人来说，{steps}步大约是 {miles} 英里（{km} 公里）。",
      },
      {
        question: "步行时间是怎么算的？",
        answer:
          "时间 = 距离 ÷ 配速。我们用 76 厘米的平均步幅从步数算出距离，再除以步行速度。默认是正常配速（3 mph / 5 公里/小时）——本页表格列出了三种配速。",
      },
    ],
    spread: {
      question: "可以把 {steps}步分散到一天里吗？",
      high: "完全可以——大多数每天走到 {steps}步的人，是靠散步、办事和日常走动攒起来的。三次 15 分钟的步行加上平时的活动，通常就够了。",
      low: "可以——即使只走 20–30 分钟，再加上日常活动（走到车边、在办公室走动等），通常也能到 {steps}步，不必专门走很长一段。",
    },
  },
  milesToTime: {
    meta: {
      title: "走 {miles}要多久？",
      description:
        "以 3 mph 的正常配速走 {miles}大约需要 {time}。查看三种配速的时间，以及步数和卡路里。",
      ogImageAlt: "{miles}的步行时间",
    },
    h1: "走 {milesArticle}要多久？",
    subheading: "{miles}的步行时间、步数和卡路里。",
    primary: "≈ {time}",
    secondary: "正常配速 3 mph · {steps}步 · 70 公斤的人消耗 {calories} 卡",
    intro:
      "以 3 mph（5 公里/小时）的正常配速，走 {miles}大约需要 {time}。4 mph 的快走是 {brisk}，2 mph 的悠闲配速是 {slow}。你会走大约 {steps}步，消耗大约 {calories} 卡。",
    crumb: "步行时间",
    relatedTool: "步行时间计算器",
    faq: [
      {
        question: "走 {milesArticle}要多久？",
        answer: "以 3 mph 的正常配速大约 {time}。4 mph 快走：{brisk}。2 mph 慢走：{slow}。",
      },
      {
        question: "{miles}是多少步？",
        answer: "对步幅 76 厘米的普通成年人来说，{miles}大约是 {steps}步。个子较矮的人步数更多——见本页身高表。",
      },
      {
        question: "走 {miles}会消耗多少卡路里？",
        answer: "70 公斤（155 磅）的人以正常配速大约消耗 {calories} 卡。体重更重的人消耗更多——见体重表。",
      },
      {
        question: "步行时间是怎么算的？",
        answer:
          "时间 = 距离 ÷ 配速。{miles} = {km} 公里。以 5 公里/小时计算是 {time}。我们使用 CDC 和 ACSM 公布的三种中等强度活动配速。",
      },
    ],
    exercise: {
      question: "每天走 {miles}够不够？",
      yes: "够——如果以正常到较快的配速走，每天 {miles}很容易达到 CDC 建议的每周 150 分钟中等强度有氧活动。",
      start: "每天走 {miles}是不错的开始。加上日常活动，你就处于活动量范围内，但再加一次步行，健康收益会更明显。",
      below: "每天走不到 {miles}低于 CDC 的最低建议。可以慢慢增加——每天多走 0.5 英里也有助于心血管健康。",
    },
  },
};

export default zh;

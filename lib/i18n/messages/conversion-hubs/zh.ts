import type { ConversionHubsMessages } from "./en";

const zh: ConversionHubsMessages = {
  breadcrumbLabel: "面包屑",
  openCalculator: "打开计算器 →",
  units: {
    steps: "{count} 步",
    miles: "{count} 英里",
    mi: "{count} 英里",
    km: "{count} 公里",
    cal: "{count} 千卡",
    strideCm: "{stride} 厘米",
    detailSteps: "{count} 步 →",
    detailArrow: "{count} →",
    detailKm: "{count} 公里 →",
    detailMi: "{count} 英里 →",
  },
  mile: {
    one: "{count} 英里",
    other: "{count} 英里",
  },
  mileArrow: {
    one: "{count} 英里 →",
    other: "{count} 英里 →",
  },
  duration: {
    minutes: "{minutes} 分钟",
    hours: "{hours} 小时",
    hoursMinutes: "{hours} 小时 {minutes} 分钟",
  },
  heights: [
    "147 厘米 — 娇小",
    "163 厘米 — 女性平均",
    "175 厘米 — 成人平均",
    "183 厘米 — 男性平均",
    "193 厘米 — 高个",
  ],
  heightShort: {
    petite: "147 厘米",
    tall: "193 厘米",
  },
  paces: {
    slow: "慢速（2 mph）",
    normal: "正常（3 mph）",
    brisk: "快走（4 mph）",
  },
  hub: {
    meta: {
      title: "步数换算——英里、公里与卡路里",
      description:
        "在步数、英里、公里和卡路里之间换算。快速答案、完整换算表，以及按你的身高和体重个性化的计算器。",
      keywords: [
        "步数换算",
        "步数换算表",
        "步数换算英里",
        "英里换算步数",
        "步数换算卡路里",
        "步数距离换算",
      ],
      ogTitle: "步数换算",
      ogDescription: "在步数、英里、公里和卡路里之间换算。快速答案和完整换算表。",
      ogImageAlt: "步数换算",
    },
    title: "步数换算",
    subtitle: "步数、英里、公里、卡路里和步行时间的常见换算，快速给出准确答案。",
    seeAll: "查看全部 {count} 项 →",
    categories: {
      "steps-to-miles": {
        title: "步数换算英里",
        description: "把任意步数换算成行走的英里",
      },
      "miles-to-steps": {
        title: "英里换算步数",
        description: "把英里换算成对应的步数",
      },
      "steps-to-calories": {
        title: "步数换算卡路里",
        description: "估算任意步数消耗的卡路里",
      },
      "steps-to-km": {
        title: "步数换算公里",
        description: "把任意步数换算成行走的公里",
      },
      "km-to-steps": {
        title: "公里换算步数",
        description: "把公里换算成对应的步数",
      },
      "steps-to-time": {
        title: "步数换算步行时间",
        description: "走完任意步数需要多久",
      },
      "miles-to-time": {
        title: "英里换算步行时间",
        description: "走完任意英里需要多久",
      },
    },
    stepsToMilesTitle: "热门：步数换算英里",
    milesToStepsTitle: "热门：英里换算步数",
    stepsToCaloriesTitle: "热门：步数换算卡路里",
    personalTitle: "想要个性化的数字？",
    personalBody: "这些表使用平均值。计算器可以输入你的身高、体重和配速，得到精确答案。",
    distanceCta: "步数距离计算器",
    calorieCta: "卡路里计算器",
  },
  stepsToMiles: {
    meta: {
      title: "步数换算英里——换算表与计算器",
      description:
        "把任意步数换算成英里。{ten} 步 ≈ {tenMiles} 英里 · {five} 步 ≈ {fiveMiles} 英里。完整换算表从 {from} 到 {to} 步。",
      keywords: [
        "步数换算英里",
        "把步数换成英里",
        "步数英里换算器",
        "步数英里对照表",
        "步数与英里换算",
        "多少步是多少英里",
      ],
      ogTitle: "步数换算英里——换算表与计算器",
      ogDescription: "把任意步数换算成英里。{ten} 步 ≈ {tenMiles} 英里。换算表 {from} → {to} 步。",
      ogImageAlt: "步数换算英里",
    },
    crumb: "步数换算英里",
    title: "步数换算英里",
    intro: "把任意步数换算成英里。每一行都链到详情页，包含消耗的卡路里、步行时间和按身高排列的步幅表。",
    formulaTitle: "快速公式",
    formula: "英里 ≈ 步数 × {factor}",
    formulaNote:
      "按成人平均步幅 {stride} 厘米（{feet} 英尺）计算。个子更高的人每步稍远，个子更矮的人每步稍近。想看你自己的数字，点击表中任意一行。",
    tableTitle: "完整换算表",
    columns: {
      steps: "步数",
      miles: "英里",
      kilometers: "公里",
      detail: "详情页",
    },
    exactTitle: "想要按你的身高得到精确数字？",
    exactBody: "步数距离计算器会按{your}步幅算出精确答案——只需输入你的身高。",
    your: "你的",
    accuracyTitle: "步数换算英里有多准确？",
    accuracyBody:
      "默认步幅 {stride} 厘米 / {feet} 英尺，是 CDC、梅奥诊所和哈佛健康对平均身高成人最常引用的数字。实际步幅大约从 {short} 厘米（娇小）到 {tall} 厘米（高个），个人距离可能相差 ±{low}–{high}%。",
    accuracyApp:
      "想要最准确的数字，请在 iPhone 或 Apple Watch 上安装 Steps——它会根据你的运动记录测量实际步长。",
  },
  milesToSteps: {
    meta: {
      title: "一英里有多少步？——{steps} 步（附换算表）",
      description:
        "{one} 英里 ≈ {steps} 步（平均成人）。用表格把英里换成步数，或打开详情查看按身高计算的卡路里和步行时间。",
      keywords: ["一英里多少步", "英里换算步数", "英里等于多少步", "1 英里多少步", "一英里的步数", "把英里换成步数"],
      ogTitle: "一英里有多少步？——{steps} 步",
      ogDescription: "{one} 英里 ≈ {steps} 步（平均成人）。完整换算表，并按身高计算。",
      ogImageAlt: "英里换算步数",
    },
    crumb: "英里换算步数",
    title: "一英里有多少步？",
    intro: "简短答案：平均成人大约 {highlight}。完整数字取决于你的身高——请看下面的表。",
    quickLabel: "快速答案",
    heroFigure: "≈ {steps}",
    heroNote: "平均成人，步幅 {stride} 厘米（{feet} 英尺）。你的数字取决于身高。",
    heightTitle: "按身高计算的每英里步数",
    heightIntro: "步幅大约是身高的 {ratio} 倍。个子更矮的人走同样的距离需要更多步。",
    heightColumns: {
      height: "身高",
      stride: "步幅",
      steps: "每英里步数",
    },
    formulaTitle: "换算公式",
    formula: "步数 ≈ 英里 × {steps}",
    formulaNote: "或者：{one} 英里 = {meters} 米 × {cm} 厘米 ÷ {stride} 厘米步幅 ≈ {steps} 步。",
    tableTitle: "英里 → 步数换算表",
    columns: {
      miles: "英里",
      steps: "步数（平均成人）",
      detail: "详情页",
    },
    exactTitle: "想要按你的身高得到精确数字？",
    exactBody: "使用步数距离计算器——输入一次身高，就能得到你个人的每英里步数。",
    whyTitle: "为什么不直接说「一英里 {rule} 步」？",
    whyBody:
      "{rule} 步的经验法则很好用，但会留下明显差距。按 CDC 和梅奥诊所公布的成人平均步幅 {stride} 厘米计算，大约是 {perMile}，而不是 {rule}。在 {daily} 步的一天里，更简单的规则大约会少算四分之一英里。",
    perMile: "每英里 {steps} 步",
    connectionTitle: "和每天 {daily} 步的关系",
    connectionBody:
      "常见的每天 {daily} 步目标，对平均成人大约是 {distance}。所以走完 {daily} 步，按正常配速大约需要 {minutes} 分钟，分散在一整天里。",
    distance: "{miles} 英里（{km} 公里）",
    faq: [
      {
        question: "一英里有多少步？",
        answer:
          "平均成人、步幅 {stride} 厘米（{feet} 英尺）时大约 {steps} 步。具体大约从 {tallHeight} 的 {tallSteps} 步，到 {petiteHeight} 的 {petiteSteps} 步。",
      },
      {
        question: "2 英里有多少步？",
        answer: "平均成人大约 {steps} 步。其他距离见本页换算表。",
      },
      {
        question: "5 英里有多少步？",
        answer: "大约 {steps} 步——接近每天 {daily} 步的常见目标。",
      },
      {
        question: "一英里的步数和身高有关吗？",
        answer:
          "有关。步幅大约是身高的 {ratio} 倍。{petiteHeight} 的人每英里大约 {petiteSteps} 步，{tallHeight} 的人大约 {tallSteps} 步——相差 {percent}%。",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "步数换算公里——换算表与计算器",
      description: "把任意步数换算成公里。{steps} 步 ≈ {km} 公里。完整换算表从 {from} 到 {to} 步。",
      keywords: ["步数换算公里", "步数换算千米", "把步数换成公里", "步数公里换算", "步数公里对照表", "多少步是多少公里"],
      ogTitle: "步数换算公里",
      ogDescription: "把任意步数换算成公里。{steps} 步 ≈ {km} 公里。完整换算表。",
      ogImageAlt: "步数换算公里",
    },
    crumb: "步数换算公里",
    title: "步数换算公里",
    intro:
      "把任意步数换算成公里。每一行都链到详情页，包含卡路里、步行时间和按身高排列的步幅表。想要精确、个性化的答案，请使用{calculator}。",
    calculatorLink: "步数距离计算器",
    formulaTitle: "快速公式",
    formula: "公里 ≈ 步数 × {factor}",
    formulaNote:
      "或者：步数 × {stride} 厘米步幅 ÷ {perKm} = 公里距离。成人平均步幅为 {stride} 厘米（{feet} 英尺）。",
    tableTitle: "完整换算表",
    columns: {
      steps: "步数",
      kilometers: "公里",
      miles: "英里",
      detail: "详情页",
    },
    exactTitle: "想要按你的身高得到精确数字？",
    exactBody: "步数距离计算器会按你的步幅算出精确答案——只需输入你的身高。",
  },
  kmToSteps: {
    meta: {
      title: "一公里有多少步？——{steps} 步（附换算表）",
      description: "{one} 公里 ≈ {steps} 步（平均成人）。{from}–{to} 公里的完整换算表，并可按身高计算你的精确步数。",
      keywords: ["一公里多少步", "公里换算步数", "千米换算步数", "1 公里多少步", "5 公里多少步", "把公里换成步数"],
      ogTitle: "一公里有多少步？——{steps} 步",
      ogDescription: "{one} 公里 ≈ {steps} 步（平均成人）。完整换算表。",
      ogImageAlt: "公里换算步数",
    },
    crumb: "公里换算步数",
    title: "一公里有多少步？",
    intro: "简短答案：平均成人大约 {highlight}。完整数字取决于你的身高——请看表。",
    quickLabel: "快速答案",
    heroFigure: "≈ {steps}",
    heroNote: "平均成人，步幅 {stride} 厘米（{feet} 英尺）。你的数字取决于身高。",
    heightTitle: "按身高计算的每公里步数",
    heightIntro: "步幅大约是身高的 {ratio} 倍。个子更矮的人走同样的距离需要更多步。",
    heightColumns: {
      height: "身高",
      stride: "步幅",
      steps: "每公里步数",
    },
    formulaTitle: "换算公式",
    formula: "步数 ≈ 公里 × {steps}",
    formulaNote: "或者：{one} 公里 = {cm} 厘米 ÷ {stride} 厘米步幅 ≈ {steps} 步。",
    tableTitle: "公里 → 步数换算表",
    columns: {
      kilometers: "公里",
      steps: "步数（平均成人）",
      detail: "详情页",
    },
    exactTitle: "想要按你的身高得到精确数字？",
    exactBody: "使用步数距离计算器——输入一次身高，就能得到你个人的每公里步数。",
    faq: [
      {
        question: "一公里有多少步？",
        answer: "平均成人、步幅 {stride} 厘米时大约 {steps} 步。大约从 {tall}（高个）到 {petite}（娇小）。",
      },
      {
        question: "5 公里有多少步？",
        answer: "平均成人大约 {steps} 步——一次典型的 5 公里跑步。",
      },
      {
        question: "10 公里有多少步？",
        answer: "大约 {steps} 步——超过每天 {daily} 步的常见目标。",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "步数换算卡路里——每步多少卡？",
      description: "把任意步数换算成消耗的卡路里。{steps} 步 ≈ {calories} 卡路里。从 {from} 到 {to} 步的完整表，并按体重区分。",
      keywords: ["步数换算卡路里", "每步卡路里", "步数卡路里换算", "走路消耗多少卡路里", "把步数换成卡路里"],
      ogTitle: "步数换算卡路里",
      ogDescription: "{steps} 步 ≈ {calories} 卡路里。完整换算表 {from}–{to} 步。",
      ogImageAlt: "步数换算卡路里",
    },
    crumb: "步数换算卡路里",
    title: "步数换算卡路里",
    intro: "把任意步数换算成消耗的卡路里，再打开详情，按体重、配速和步行时间查看。",
    formulaTitle: "快速公式",
    formula: "卡路里 ≈ 步数 × {factor} ×（体重千克 ÷ {weight}）",
    formulaNote: "平均成人大约每 {per} 步消耗 {one} 卡路里。体重更大的人按比例消耗更多。",
    tableTitle: "完整换算表（{lb} 磅 / {kg} 千克成人，正常配速）",
    columns: {
      steps: "步数",
      calories: "卡路里",
      detail: "详情页",
    },
    exactTitle: "想要个性化的卡路里消耗？",
    exactBody: "使用步数卡路里计算器，输入你的体重、年龄和性别，得到更准确的数字。",
  },
  stepsToTime: {
    meta: {
      title: "走完若干步要多久？——时间换算表",
      description: "任意步数的步行时间。正常配速下 {steps} 步 ≈ {hours} 小时 {mins} 分钟。从 {from} → {to} 步、三种配速的完整表。",
      keywords: ["走多少步要多久", "步数换算步行时间", "每步步行时间", "步数换算分钟", "走完若干步要多久"],
      ogTitle: "走完若干步要多久？",
      ogDescription: "任意步数的步行时间。三种配速的完整表。",
      ogImageAlt: "步数换算步行时间",
    },
    crumb: "步行时间",
    title: "走完若干步要多久？",
    intro: "任意步数在三种常见配速下的步行时间。点击一行查看卡路里和步幅详情。",
    formulaTitle: "快速公式",
    formula: "分钟 ≈ 步数 ÷ {cadence}",
    formulaNote:
      "大多数成人在正常配速下大约每分钟 {cadence} 步。因此 {steps} 步 ≈ {minutes} 分钟（{hours} 小时 {mins} 分钟）的步行。稍快一些（{mph} mph）会降到 {fastHours} 小时 {fastMins} 分钟。",
    tableTitle: "按步数和配速的步行时间",
    columns: {
      steps: "步数",
      detail: "详情",
    },
    exactTitle: "想规划一次具体的步行？",
    exactBody: "步行时间计算器可以估算任意距离或步数所需的时间，并给出出发和到达时间。",
  },
  milesToTime: {
    meta: {
      title: "走完若干英里要多久？——按配速",
      description:
        "任意英里距离的步行时间。{one} 英里 ≈ {oneMin} 分钟，{three} 英里 ≈ {threeHours} 小时，{five} 英里 ≈ {fiveHours} 小时 {fiveMins} 分钟。三种配速的完整表。",
      keywords: ["走一英里要多久", "走若干英里要多久", "英里步行时间", "英里换算步行时间", "走 5 英里要多久", "走 3 英里要多久"],
      ogTitle: "走完若干英里要多久？",
      ogDescription: "任意英里距离的步行时间，覆盖三种配速。",
      ogImageAlt: "英里换算步行时间",
    },
    crumb: "英里换算步行时间",
    title: "走完若干英里要多久？",
    intro: "任意距离在三种常见配速下的步行时间。点击一行查看详情。",
    formulaTitle: "快速规则",
    formula: "分钟 ≈ 英里 × {minutes}",
    formulaNote:
      "按正常配速 {normal} mph。快走（{brisk} mph）大约少 {briskCut}%；慢走（{slow} mph）大约多 {slowAdd}%。",
    tableTitle: "按距离和配速的步行时间",
    columns: {
      distance: "距离",
      detail: "详情",
    },
    exactTitle: "在规划一条具体路线？",
    exactBody: "步行时间计算器可以处理任意距离，并包含出发与到达时间、休息和配速。",
    faq: [
      {
        question: "走 1 英里要多久？",
        answer:
          "正常配速 {normalMph} mph 大约 {normalMin} 分钟。快走（{briskMph} mph）：{briskMin} 分钟。慢走（{slowMph} mph）：{slowMin} 分钟。",
      },
      {
        question: "走 3 英里要多久？",
        answer: "正常配速大约 {hours} 小时。快走：{briskMin} 分钟。慢走：{slowHours} 小时 {slowMins} 分钟。",
      },
      {
        question: "走 5 英里要多久？",
        answer:
          "正常配速大约 {hours} 小时 {mins} 分钟。快走：{briskHours} 小时 {briskMins} 分钟。慢走：{slowHours} 小时 {slowMins} 分钟。",
      },
    ],
  },
};

export default zh;

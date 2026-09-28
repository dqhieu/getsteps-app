import type { ConversionHubsMessages } from "./en";

const ja: ConversionHubsMessages = {
  breadcrumbLabel: "パンくず",
  openCalculator: "カリキュレーターを開く →",
  units: {
    steps: "{count}歩",
    miles: "{count}マイル",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} kcal",
    strideCm: "{stride} cm",
    detailSteps: "{count}歩 →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count}マイル",
    other: "{count}マイル",
  },
  mileArrow: {
    one: "{count}マイル →",
    other: "{count}マイル →",
  },
  duration: {
    minutes: "{minutes}分",
    hours: "{hours}時間",
    hoursMinutes: "{hours}時間{minutes}分",
  },
  heights: [
    `4'10" (147 cm) — 小柄`,
    `5'4" (163 cm) — 平均的な女性`,
    `5'9" (175 cm) — 平均的な成人`,
    `6'0" (183 cm) — 平均的な男性`,
    `6'4" (193 cm) — 高身長`,
  ],
  heightShort: {
    petite: `4'10"`,
    tall: `6'4"`,
  },
  paces: {
    slow: "ゆっくり (2 mph)",
    normal: "普通 (3 mph)",
    brisk: "速歩 (4 mph)",
  },
  hub: {
    meta: {
      title: "歩数換算 — マイル・キロメートル・カロリー",
      description:
        "歩数、マイル、キロメートル、カロリーを換算します。すぐわかる答え、換算表、身長と体重に合わせたカリキュレーターがあります。",
      keywords: [
        "歩数換算",
        "歩数換算表",
        "歩数 マイル",
        "マイル 歩数",
        "歩数 カロリー",
        "歩数 距離 換算",
      ],
      ogTitle: "歩数換算",
      ogDescription: "歩数、マイル、キロメートル、カロリーを換算します。すぐわかる答えと換算表です。",
      ogImageAlt: "歩数換算",
    },
    title: "歩数換算",
    subtitle:
      "よく使う歩数の換算に、すぐ正確な答えを出します。マイル、キロメートル、カロリー、ウォーキング時間です。",
    seeAll: "{count}件すべて見る →",
    categories: {
      "steps-to-miles": {
        title: "歩数をマイルに",
        description: "歩数を歩いたマイルに換算します",
      },
      "miles-to-steps": {
        title: "マイルを歩数に",
        description: "マイルを同じ距離の歩数に換算します",
      },
      "steps-to-calories": {
        title: "歩数をカロリーに",
        description: "歩数から消費カロリーを見積もります",
      },
      "steps-to-km": {
        title: "歩数をキロメートルに",
        description: "歩数を歩いたキロメートルに換算します",
      },
      "km-to-steps": {
        title: "キロメートルを歩数に",
        description: "キロメートルを同じ距離の歩数に換算します",
      },
      "steps-to-time": {
        title: "歩数をウォーキング時間に",
        description: "その歩数を歩くのにかかる時間です",
      },
      "miles-to-time": {
        title: "マイルをウォーキング時間に",
        description: "そのマイルを歩くのにかかる時間です",
      },
    },
    stepsToMilesTitle: "人気: 歩数をマイルに",
    milesToStepsTitle: "人気: マイルを歩数に",
    stepsToCaloriesTitle: "人気: 歩数をカロリーに",
    personalTitle: "自分の数字が必要ですか？",
    personalBody:
      "この表は平均です。カリキュレーターに身長、体重、ペースを入れると、正確な答えが出ます。",
    distanceCta: "歩数の距離カリキュレーター",
    calorieCta: "カロリーカリキュレーター",
  },
  stepsToMiles: {
    meta: {
      title: "歩数をマイルに換算 — 早見表とカリキュレーター",
      description:
        "歩数をマイルに換算します。{ten}歩 ≈ {tenMiles}マイル · {five}歩 ≈ {fiveMiles}マイル。{from}歩から{to}歩までの換算表です。",
      keywords: [
        "歩数 マイル 換算",
        "歩数をマイルに変換",
        "歩数マイル換算",
        "歩数マイル早見表",
        "歩数 マイル 計算",
        "歩数は何マイル",
      ],
      ogTitle: "歩数をマイルに換算 — 早見表とカリキュレーター",
      ogDescription:
        "歩数をマイルに換算します。{ten}歩 ≈ {tenMiles}マイル。換算表は{from} → {to}歩です。",
      ogImageAlt: "歩数をマイルに",
    },
    crumb: "歩数をマイルに",
    title: "歩数をマイルに換算",
    intro:
      "歩数をマイルに換算します。各行から、消費カロリー、ウォーキング時間、身長別の歩幅表がある詳細ページへ進めます。",
    formulaTitle: "すぐ使える式",
    formula: "マイル ≈ 歩数 × {factor}",
    formulaNote:
      "成人の平均歩幅 {stride} cm（{feet}フィート）で計算しています。身長が高いほど1歩が少し長く、低いほど短くなります。自分の数字は下の表の行を選んでください。",
    tableTitle: "換算表",
    columns: {
      steps: "歩数",
      miles: "マイル",
      kilometers: "キロメートル",
      detail: "詳細ページ",
    },
    exactTitle: "身長に合わせた正確な数字が必要ですか？",
    exactBody:
      "歩数の距離カリキュレーターは、{your}歩幅の正確な答えを出します。身長を入れるだけです。",
    your: "あなたの",
    accuracyTitle: "歩数からマイルへの換算はどのくらい正確ですか？",
    accuracyBody:
      "標準の歩幅 {stride} cm / {feet}フィートは、平均的な身長の成人について CDC、Mayo Clinic、Harvard Health がよく示す数字です。実際の歩幅はおよそ {short} cm（小柄）から {tall} cm（高身長）で、距離は ±{low}–{high}% 変わります。",
    accuracyApp:
      "いちばん正確な数字は、iPhone または Apple Watch に Steps を入れるとわかります。ワークアウトから、実際の歩幅を時間をかけて測ります。",
  },
  milesToSteps: {
    meta: {
      title: "1マイルは何歩？ — {steps}歩（換算表つき）",
      description:
        "平均的な成人では {one}マイル ≈ {steps}歩です。マイルを歩数に換算する表と、身長別のカロリーとウォーキング時間があります。",
      keywords: [
        "1マイル 何歩",
        "マイル 歩数",
        "マイルを歩数に",
        "1マイル 歩数",
        "マイルは何歩",
        "マイル 歩数 換算",
      ],
      ogTitle: "1マイルは何歩？ — {steps}歩",
      ogDescription:
        "平均的な成人では {one}マイル ≈ {steps}歩です。換算表と身長別の計算があります。",
      ogImageAlt: "マイルを歩数に",
    },
    crumb: "マイルを歩数に",
    title: "1マイルは何歩ですか？",
    intro:
      "短い答えは、平均的な成人で約{highlight}です。正確な数字は身長で変わります。表をご覧ください。",
    quickLabel: "すぐわかる答え",
    heroFigure: "≈ {steps}",
    heroNote: "平均的な成人、歩幅 {stride} cm（{feet}フィート）です。数字は身長で変わります。",
    heightTitle: "身長別の1マイルの歩数",
    heightIntro:
      "歩幅は身長のおよそ {ratio} 倍です。身長が低いほど、同じ距離に多くの歩数が必要です。",
    heightColumns: {
      height: "身長",
      stride: "歩幅",
      steps: "1マイルの歩数",
    },
    formulaTitle: "換算の式",
    formula: "歩数 ≈ マイル × {steps}",
    formulaNote: "別の書き方: {one}マイル = {meters} m × {cm} cm ÷ 歩幅 {stride} cm ≈ {steps}歩です。",
    tableTitle: "マイル → 歩数の換算表",
    columns: {
      miles: "マイル",
      steps: "歩数（平均的な成人）",
      detail: "詳細ページ",
    },
    exactTitle: "身長に合わせた正確な数字が必要ですか？",
    exactBody:
      "歩数の距離カリキュレーターに身長を一度入れると、1マイルあたりの歩数が出ます。",
    whyTitle: "なぜ「1マイルは{rule}歩」と言い切らないのですか？",
    whyBody:
      "{rule}歩という目安は便利ですが、ずれが残ります。CDC と Mayo Clinic が示す成人の平均歩幅 {stride} cm では、約{perMile}になり、{rule}ではありません。1日{daily}歩では、簡単な目安だと約4分の1マイル分がずれます。",
    perMile: "1マイルあたり{steps}歩",
    connectionTitle: "1日{daily}歩との関係",
    connectionBody:
      "一般的な1日{daily}歩の目標は、平均的な成人で約{distance}です。だから{daily}歩は、普通のペースのウォーキング約{minutes}分を1日に分けた量です。",
    distance: "{miles}マイル（{km} km）",
    faq: [
      {
        question: "1マイルは何歩ですか？",
        answer:
          "歩幅 {stride} cm（{feet}フィート）の平均的な成人で約{steps}歩です。{tallHeight}の人はおよそ{tallSteps}歩、{petiteHeight}の人はおよそ{petiteSteps}歩です。",
      },
      {
        question: "2マイルは何歩ですか？",
        answer: "平均的な成人で約{steps}歩です。ほかの距離はこのページの換算表を見てください。",
      },
      {
        question: "5マイルは何歩ですか？",
        answer: "約{steps}歩で、一般的な1日{daily}歩の目標とほぼ同じです。",
      },
      {
        question: "1マイルの歩数は身長で変わりますか？",
        answer:
          "はい。歩幅は身長のおよそ {ratio} 倍です。{petiteHeight}の人は1マイル約{petiteSteps}歩、{tallHeight}の人は約{tallSteps}歩で、差は{percent}%です。",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "歩数をキロメートルに換算 — 早見表とカリキュレーター",
      description:
        "歩数をキロメートルに換算します。{steps}歩 ≈ {km} km。{from}歩から{to}歩までの換算表です。",
      keywords: [
        "歩数 km 換算",
        "歩数 キロメートル",
        "歩数をkmに変換",
        "歩数 キロ 換算",
        "歩数km早見表",
        "歩数は何km",
      ],
      ogTitle: "歩数をkmに換算",
      ogDescription: "歩数をkmに換算します。{steps}歩 ≈ {km} km。換算表です。",
      ogImageAlt: "歩数をキロメートルに",
    },
    crumb: "歩数をkmに",
    title: "歩数をキロメートルに換算",
    intro:
      "歩数をキロメートルに換算します。各行から、消費カロリー、ウォーキング時間、身長別の歩幅表がある詳細ページへ進めます。正確な個人の数字は{calculator}で出せます。",
    calculatorLink: "歩数の距離カリキュレーター",
    formulaTitle: "すぐ使える式",
    formula: "km ≈ 歩数 × {factor}",
    formulaNote:
      "別の書き方: 歩数 × 歩幅 {stride} cm ÷ {perKm} = kmの距離。成人の平均歩幅は {stride} cm（{feet}フィート）です。",
    tableTitle: "換算表",
    columns: {
      steps: "歩数",
      kilometers: "キロメートル",
      miles: "マイル",
      detail: "詳細ページ",
    },
    exactTitle: "身長に合わせた正確な数字が必要ですか？",
    exactBody:
      "歩数の距離カリキュレーターは、歩幅の正確な答えを出します。身長を入れるだけです。",
  },
  kmToSteps: {
    meta: {
      title: "1kmは何歩？ — {steps}歩（換算表つき）",
      description:
        "平均的な成人では {one} km ≈ {steps}歩です。{from}–{to} kmの換算表と、身長に合わせた正確な歩数の計算があります。",
      keywords: [
        "1km 何歩",
        "km 歩数",
        "キロメートル 歩数",
        "1km 歩数",
        "5km 歩数",
        "kmを歩数に換算",
      ],
      ogTitle: "1kmは何歩？ — {steps}歩",
      ogDescription: "平均的な成人では {one} km ≈ {steps}歩です。換算表です。",
      ogImageAlt: "kmを歩数に",
    },
    crumb: "kmを歩数に",
    title: "1キロメートルは何歩ですか？",
    intro:
      "短い答えは、平均的な成人で約{highlight}です。正確な数字は身長で変わります。表をご覧ください。",
    quickLabel: "すぐわかる答え",
    heroFigure: "≈ {steps}",
    heroNote: "平均的な成人、歩幅 {stride} cm（{feet}フィート）です。数字は身長で変わります。",
    heightTitle: "身長別の1kmの歩数",
    heightIntro: "歩幅は身長のおよそ {ratio} 倍です。身長が低いほど、同じ距離の歩数は多くなります。",
    heightColumns: {
      height: "身長",
      stride: "歩幅",
      steps: "1kmの歩数",
    },
    formulaTitle: "換算の式",
    formula: "歩数 ≈ km × {steps}",
    formulaNote: "別の書き方: {one} km = {cm} cm ÷ 歩幅 {stride} cm ≈ {steps}歩です。",
    tableTitle: "km → 歩数の換算表",
    columns: {
      kilometers: "キロメートル",
      steps: "歩数（平均的な成人）",
      detail: "詳細ページ",
    },
    exactTitle: "身長に合わせた正確な数字が必要ですか？",
    exactBody: "歩数の距離カリキュレーターに身長を一度入れると、1kmあたりの歩数が出ます。",
    faq: [
      {
        question: "1キロメートルは何歩ですか？",
        answer:
          "歩幅 {stride} cm の平均的な成人で約{steps}歩です。およそ {tall}（高身長）から {petite}（小柄）の範囲です。",
      },
      {
        question: "5kmは何歩ですか？",
        answer: "平均的な成人で約{steps}歩です。一般的な5Kのレースにあたります。",
      },
      {
        question: "10kmは何歩ですか？",
        answer: "約{steps}歩で、一般的な1日{daily}歩の目標を超えます。",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "歩数をカロリーに換算 — 1歩のカロリーは？",
      description:
        "歩数を消費カロリーに換算します。{steps}歩 ≈ {calories}カロリー。{from}歩から{to}歩まで、体重別の換算表です。",
      keywords: [
        "歩数 カロリー",
        "1歩 カロリー",
        "歩数 カロリー 換算",
        "歩数は何カロリー",
        "歩数をカロリーに変換",
      ],
      ogTitle: "歩数をカロリーに換算",
      ogDescription: "{steps}歩 ≈ {calories}カロリー。{from}–{to}歩の換算表です。",
      ogImageAlt: "歩数をカロリーに",
    },
    crumb: "歩数をカロリーに",
    title: "歩数をカロリーに換算",
    intro:
      "歩数を消費カロリーに換算し、体重、ペース、ウォーキング時間ごとの内訳へ進めます。",
    formulaTitle: "すぐ使える式",
    formula: "カロリー ≈ 歩数 × {factor} × (体重 kg ÷ {weight})",
    formulaNote:
      "平均的な成人で、約{per}歩あたり{one}カロリーです。体重が多いほど、消費も比例して増えます。",
    tableTitle: "換算表（{lb} lb / {kg} kg の成人、普通のペース）",
    columns: {
      steps: "歩数",
      calories: "カロリー",
      detail: "詳細ページ",
    },
    exactTitle: "自分の消費カロリーが必要ですか？",
    exactBody:
      "歩数カロリーカリキュレーターに体重、年齢、性別を入れると、より正確な数字が出ます。",
  },
  stepsToTime: {
    meta: {
      title: "歩数を歩く時間は？ — 時間の換算表",
      description:
        "歩数ごとのウォーキング時間です。普通のペースで{steps}歩 ≈ {hours}時間{mins}分。{from} → {to}歩を3つのペースで載せた表です。",
      keywords: [
        "歩数 歩く時間",
        "歩数 ウォーキング時間",
        "1歩 歩く時間",
        "歩数 分",
        "何歩 何分 歩く",
      ],
      ogTitle: "歩数を歩くのに何分かかりますか？",
      ogDescription: "歩数ごとのウォーキング時間です。3つのペースの表があります。",
      ogImageAlt: "歩数とウォーキング時間",
    },
    crumb: "ウォーキング時間",
    title: "歩数を歩くのに何分かかりますか？",
    intro:
      "3つのよくあるペースで、歩数ごとのウォーキング時間を出します。行を選ぶと、カロリーと歩幅の詳細ページが開きます。",
    formulaTitle: "すぐ使える式",
    formula: "分 ≈ 歩数 ÷ {cadence}",
    formulaNote:
      "ほとんどの成人は、普通のペースで1分あたり約{cadence}歩で歩きます。だから{steps}歩は約{minutes}分（{hours}時間{mins}分）のウォーキングです。少し速いペース（{mph} mph）だと{fastHours}時間{fastMins}分になります。",
    tableTitle: "歩数とペース別のウォーキング時間",
    columns: {
      steps: "歩数",
      detail: "詳細",
    },
    exactTitle: "特定のウォーキングを計画しますか？",
    exactBody:
      "ウォーキング時間カリキュレーターは、距離や歩数の所要時間を、出発と到着の時刻つきで見積もります。",
  },
  milesToTime: {
    meta: {
      title: "マイルを歩く時間は？ — ペース別",
      description:
        "マイルの距離ごとのウォーキング時間です。{one}マイル ≈ {oneMin}分、{three}マイル ≈ {threeHours}時間、{five}マイル ≈ {fiveHours}時間{fiveMins}分。3つのペースの表です。",
      keywords: [
        "1マイル 歩く時間",
        "マイル 歩く 何分",
        "マイル ウォーキング時間",
        "マイル 所要時間",
        "5マイル 歩く時間",
        "3マイル 歩く時間",
      ],
      ogTitle: "マイルを歩くのに何分かかりますか？",
      ogDescription: "マイルの距離ごとのウォーキング時間です。3つのペースがあります。",
      ogImageAlt: "マイルとウォーキング時間",
    },
    crumb: "マイルのウォーキング時間",
    title: "マイルを歩くのに何分かかりますか？",
    intro: "3つのよくあるペースで、距離ごとのウォーキング時間を出します。行を選ぶと詳細ページが開きます。",
    formulaTitle: "すぐ使える目安",
    formula: "分 ≈ マイル × {minutes}",
    formulaNote:
      "普通のウォーキングペース {normal} mph の場合です。速歩（{brisk} mph）だと約{briskCut}%短く、ゆっくり（{slow} mph）だと{slowAdd}%長くなります。",
    tableTitle: "距離とペース別のウォーキング時間",
    columns: {
      distance: "距離",
      detail: "詳細",
    },
    exactTitle: "特定のルートを計画していますか？",
    exactBody:
      "ウォーキング時間カリキュレーターは、出発と到着の時刻、休憩、ペースを含めて、どの距離も計算します。",
    faq: [
      {
        question: "1マイル歩くのに何分かかりますか？",
        answer:
          "普通のペース {normalMph} mph で約{normalMin}分です。速歩（{briskMph} mph）は{briskMin}分。ゆっくり（{slowMph} mph）は{slowMin}分です。",
      },
      {
        question: "3マイル歩くのに何分かかりますか？",
        answer:
          "普通のペースで約{hours}時間です。速歩は{briskMin}分。ゆっくりは{slowHours}時間{slowMins}分です。",
      },
      {
        question: "5マイル歩くのに何分かかりますか？",
        answer:
          "普通のペースで約{hours}時間{mins}分です。速歩は{briskHours}時間{briskMins}分。ゆっくりは{slowHours}時間{slowMins}分です。",
      },
    ],
  },
};

export default ja;

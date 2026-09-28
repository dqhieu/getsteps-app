import type { ConversionValuesMessages } from "./en";

const ja: ConversionValuesMessages = {
  ui: {
    breadcrumb: "パンくずリスト",
    quickAnswer: "すぐわかる答え",
    forContext: "参考：",
    distanceByHeightTitle: "距離は身長によって変わります",
    distanceByHeightBody:
      "歩幅は身長のおよそ0.41倍です。身長が低い人は、一歩で進む距離が短くなります。",
    heightColumn: "身長",
    strideColumn: "歩幅",
    milesColumn: "マイル",
    kilometersColumn: "キロメートル",
    stepsColumn: "歩数",
    stepsRequiredTitle: "必要な歩数は身長によって変わります",
    stepsRequiredBody: "身長が低い人は、同じ距離を歩くのにより多くの歩数が必要です。",
    caloriesTitle: "体重とペース別の消費カロリー",
    caloriesBody:
      "カロリーは体重に比例して増えます。ペースが速いと消費は増えますが、歩行では少し増える程度です。",
    weightColumn: "体重",
    timeTitle: "どのくらいかかりますか？",
    timeBody: "時間は歩くペースによって決まります。多くの大人は、およそ3 mphの普通のペースで歩きます。",
    paceColumn: "ペース",
    speedColumn: "速度",
    timeColumn: "時間",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} cal",
    mph: "{value} mph",
    ctaTitle: "Stepsで実際の数字を記録しましょう",
    ctaBody:
      "この換算は平均値を使っています。Stepsアプリは、iPhoneとApple Watchから同期したあなたの{actual}歩幅、カロリー、歩行時間を記録します。",
    ctaActual: "実際の",
    relatedTitle: "関連する換算",
    faqTitle: "よくある質問",
    heights: [
      `4'10" (147 cm) — 小柄`,
      `5'4" (163 cm) — 女性の平均`,
      `5'9" (175 cm) — 大人の平均`,
      `6'0" (183 cm) — 男性の平均`,
      `6'4" (193 cm) — 高身長`,
    ],
    weights: [
      "120 lb (54 kg)",
      "150 lb (68 kg)",
      "180 lb (82 kg)",
      "210 lb (95 kg)",
      "250 lb (113 kg)",
    ],
    paces: ["ゆっくり（2 mph）", "普通（3.1 mph）", "速歩（4 mph）"],
    duration: {
      minutes: "{count}分",
      hours: "{count}時間",
      hoursMinutes: "{hours}時間{minutes}分",
    },
  },
  plurals: {
    mile: { one: "1マイル", other: "{count}マイル" },
    mileArticle: { one: "1マイル", other: "{count}マイル" },
    mileInSteps: { one: "{count}マイルの歩数", other: "{count}マイルの歩数" },
    mileToSteps: { one: "{count}マイルを歩数に", other: "{count}マイルを歩数に" },
    howManyStepsInMile: {
      one: "{count}マイルは何歩",
      other: "{count}マイルは何歩",
    },
    howManyStepsIsMile: {
      one: "{count}マイルは何歩か",
      other: "{count}マイルは何歩か",
    },
    mileWalkSteps: "{count}マイル歩行の歩数",
    howLongDoesMile: {
      one: "{count}マイル歩くのにどれくらい",
      other: "{count}マイル歩くのにどれくらい",
    },
    howLongToMile: {
      one: "{count}マイル歩く時間",
      other: "{count}マイル歩く時間",
    },
    walkingTimeMile: {
      one: "歩行時間 {count}マイル",
      other: "歩行時間 {count}マイル",
    },
    mileWalkingTime: {
      one: "{count}マイルの所要時間",
      other: "{count}マイルの所要時間",
    },
    walkMileTime: {
      one: "{count}マイルを歩く — 時間",
      other: "{count}マイルを歩く — 時間",
    },
  },
  familiar: {
    olympic: "Olympicの400mトラック1周",
    centralPark: "Central Park（NYC）の長さ",
    fiveK: "5Kのレース",
    tenK: "10Kのレース",
    brooklyn: "Brooklyn Bridgeの往復",
    half: "ハーフマラソン",
    marathon: "フルマラソン",
  },
  foods: {
    banana: "バナナ1本（105 cal）",
    apple: "りんご1個（95 cal）",
    bread: "パン1枚（80 cal）",
    coffee: "クリーム入りコーヒー1杯（50 cal）",
    cookie: "チョコチップクッキー1枚（160 cal）",
    juice: "オレンジジュース1杯（110 cal）",
  },
  stepsToKm: {
    meta: {
      title: "{steps}歩は何kmですか — {steps}歩は何キロメートルですか",
      description:
        "平均的な大人の場合、{steps}歩 ≈ {km} km（{miles}マイル）です。身長ごとの正確な距離、消費カロリー、歩行時間を確認できます。",
      keywords: [
        "{steps}歩 km",
        "{steps}歩は何km",
        "{steps}歩をキロメートルに",
        "{steps}歩は何キロ",
      ],
      ogImageAlt: "{steps}歩をkmに",
    },
    h1: "{steps}歩をキロメートルに",
    subheading: "{steps}歩に達すると、どれくらい歩いているのでしょうか？",
    primary: "{km} km",
    secondary: "{miles}マイル · 普通のペースで約{time} · 体重70 kgの人で{calories}カロリー",
    intro:
      "平均的な大人の場合、典型的な歩幅76 cm（2.5 ft）で{steps}歩歩くと約{km} km（{miles}マイル）になります。普通の歩行ペース5 km/hでは約{time}かかり、体重70 kg（155 lb）の人ではおよそ{calories}カロリーを消費します。正確な距離は身長によって変わります。身長が高い人ほど、一歩で進む距離が長くなります。下の表をご覧ください。",
    crumb: "歩数からkm",
    crumbValue: "{steps}歩",
    related: "{steps}歩をkmに",
    relatedHub: "1kmは何歩ですか？",
    relatedMiles: "{steps}歩をマイルに",
    faq: [
      {
        question: "{steps}歩は何kmですか？",
        answer:
          "歩幅76 cmの平均的な大人の場合、{steps}歩は約{km} km（{miles}マイル）です。身長が低い人は少し短く、高い人は少し長くなります。このページの身長表で、ご自身の数字を確認できます。",
      },
      {
        question: "{steps}歩を歩くのにどのくらいかかりますか？",
        answer:
          "普通の歩行ペース5 km/hでは、{steps}歩に約{time}かかります。速歩の6.4 km/hでは約{brisk}です。ゆっくりした3.2 km/hの散歩では約{slow}です。",
      },
      {
        question: "{steps}歩で何カロリー消費しますか？",
        answer:
          "体重70 kg（155 lb）の人が普通のペースで歩くと、{steps}歩でおよそ{calories}カロリーを消費します。体重が軽い人は一歩あたりのカロリーが少なく、重い人は多くなります。このページのカロリー表で、ご自身の体重を確認できます。",
      },
      {
        question: "歩数からkmへの換算はどう計算しますか？",
        answer:
          "平均的な大人の歩幅76 cm（2.5 ft）を使います。歩数 × 歩幅（cm） ÷ 100,000 = kmの距離です。つまり{steps}歩 × 76 cm ÷ 100,000 ≈ {km} kmです。実際の歩幅は、身長のおよそ0.41倍です。",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "{steps}歩は何マイルですか — {steps}歩は何マイルですか",
      description:
        "平均的な大人の場合、{steps}歩 ≈ {miles}マイル（{km} km）です。身長ごとの正確な距離、消費カロリー、歩行時間を確認できます。",
      keywords: [
        "{steps}歩 マイル",
        "{steps}歩は何マイル",
        "{steps}歩をマイルに",
        "{steps}歩",
        "{steps}歩 距離",
        "{steps}歩 カロリー",
      ],
      ogImageAlt: "{steps}歩をマイルに",
    },
    h1: "{steps}歩をマイルに",
    subheading: "{steps}歩に達すると、どれくらい歩いているのでしょうか？",
    primary: "{miles}マイル",
    secondary:
      "{km} km · 普通のペースで約{time} · 体重155 lb（70 kg）の人で{calories}カロリー",
    intro:
      "平均的な大人の場合、典型的な歩幅76 cm（2.5 ft）で{steps}歩歩くと約{miles}マイル（{km} km）になります。普通の歩行ペース3 mphでは約{time}かかり、体重155 lb（70 kg）の人ではおよそ{calories}カロリーを消費します。正確な距離は身長によって変わります。身長が高い人ほど、一歩で進む距離が長くなります。下の表をご覧ください。",
    crumb: "歩数からマイル",
    crumbValue: "{steps}歩",
    related: "{steps}歩をマイルに",
    relatedHub: "1マイルは何歩ですか？",
    relatedCalories: "{steps}歩をカロリーに",
    realWorld: {
      roughly: "{miles}マイルは、およそ{name}の距離です。",
      times: "{name}の約{factor}倍の距離です。",
      shorter: "{name}より約{factor}倍短い距離です。",
    },
    faq: [
      {
        question: "{steps}歩は何マイルですか？",
        answer:
          "歩幅76 cmの平均的な大人の場合、{steps}歩は約{miles}マイル（{km} km）です。身長が低い人は少し短く、高い人は少し長くなります。このページの身長表で、ご自身の数字を確認できます。",
      },
      {
        question: "{steps}歩を歩くのにどのくらいかかりますか？",
        answer:
          "普通の歩行ペース3 mphでは、{steps}歩に約{time}かかります。速歩の4 mphでは約{brisk}です。ゆっくりした2 mphの散歩では約{slow}です。",
      },
      {
        question: "{steps}歩で何カロリー消費しますか？",
        answer:
          "体重155 lb（70 kg）の人が普通のペースで歩くと、{steps}歩でおよそ{calories}カロリーを消費します。体重が軽い人は一歩あたりのカロリーが少なく、重い人は多くなります。このページのカロリー表で、ご自身の体重を確認できます。",
      },
      {
        question: "この換算はどう計算しますか？",
        answer:
          "CDCとMayo Clinicが最もよく挙げる、平均的な大人の歩幅76 cm（2.5 ft）を使います。歩数 × 歩幅 = 歩いた距離です。実際の歩幅は身長のおよそ0.41倍で、このページの身長表に一般的な5つの身長の計算を載せています。",
      },
    ],
    daily: {
      question: "{steps}歩は良い1日の目標ですか？",
      below:
        "{steps}歩は、多くの保健機関が大人に勧める1日7,000〜10,000歩の目標を下回ります。まずはここから始めて、少しずつ増やしてください。1日1,000歩増やすだけでも、心臓の健康に役立ちます。",
      mid: "はい。{steps}歩は、多くの研究とCDCが大人に示すちょうどよい範囲に入ります。これを続けて達成すると、心血管疾患のリスク低下と長期的な健康につながります。",
      above:
        "{steps}歩は、標準的な1日10,000歩の目標を上回ります。心臓の体力と体重管理に役立つ優れた運動量ですが、歩数を抑えた回復日も健康に良いです。",
    },
  },
  milesToSteps: {
    meta: {
      title: "{miles}は何歩ですか — {steps}歩",
      description:
        "平均的な大人の場合、{miles} ≈ {steps}歩です。身長ごとの正確な歩数、消費カロリー、歩行時間を確認できます。",
      ogImageAlt: "{miles}の歩数",
    },
    h1: "{milesArticle}は何歩ですか？",
    subheading: "平均的な大人の答えと、身長による変わり方です。",
    primary: "{steps}歩",
    secondary:
      "{miles} · {km} km · 普通のペースで約{time} · 体重155 lb（70 kg）の人で{calories}カロリー",
    intro:
      "平均的な大人の場合、典型的な歩幅76 cm（2.5 ft）で{miles}を歩くと約{steps}歩になります。普通の歩行ペース3 mphでは約{time}かかり、体重155 lb（70 kg）の人ではおよそ{calories}カロリーを消費します。正確な歩数は身長によって変わります。身長が低い人は、同じ距離でも歩数が増えます。下の表をご覧ください。",
    crumb: "マイルから歩数",
    relatedHub: "歩数からマイルへの換算",
    relatedCalories: "{steps}歩をカロリーに",
    faq: [
      {
        question: "{miles}は何歩ですか？",
        answer:
          "歩幅76 cmの平均的な大人の場合、{miles}は約{steps}歩です。身長が低い人は、同じ距離を歩くのにより多くの歩数が必要です。このページの身長表で、ご自身の数字を確認できます。",
      },
      {
        question: "{miles}を歩くのにどのくらいかかりますか？",
        answer:
          "普通の歩行ペース3 mphでは、{miles}に約{time}かかります。速歩の4 mphでは約{brisk}です。ゆっくりした2 mphの散歩では約{slow}です。",
      },
      {
        question: "{milesArticle}で何カロリー消費しますか？",
        answer:
          "{miles}を歩くと、体重155 lb（70 kg）の人は普通のペースでおよそ{calories}カロリーを消費します。体重が軽い人は少なく、重い人は多くなります。このページのカロリー表をご覧ください。",
      },
      {
        question: "マイルから歩数への換算はどう計算しますか？",
        answer:
          "距離をメートルで100倍し（cm/m）、平均歩幅76 cmで割ります。つまり{miles} = {meters} m × 100 ÷ 76 ≈ {steps}歩です。実際の歩幅は、身長のおよそ0.41倍です。",
      },
    ],
    exercise: {
      question: "1日{miles}歩けば運動として十分ですか？",
      yes: "はい。1日{miles}（{steps}歩）を普通から速歩のペースで歩けば、CDCが勧める週150分の中程度の有酸素運動を十分に満たします。",
      start:
        "1日{miles}は良いスタートです。活動的な範囲に入り、CDCが勧める週150分の有酸素運動にもつながります。1日にもう1回歩くと、健康への効果はさらに大きくなります。",
      below:
        "1日{miles}未満は、CDCの最低推奨を下回ります。少しずつ増やしてください。1日1,000歩増やすだけでも、心臓の健康に役立ちます。",
    },
  },
  kmToSteps: {
    meta: {
      title: "{km} kmは何歩ですか — {steps}歩",
      description:
        "平均的な大人の場合、{km} km ≈ {steps}歩です。身長ごとの正確な歩数、消費カロリー、歩行時間を確認できます。",
      keywords: ["{km} km 歩数", "{km} kmは何歩", "{km} kmを歩に換算", "{km}キロメートルの歩数"],
      ogImageAlt: "{km} kmの歩数",
    },
    h1: "{km} kmは何歩ですか？",
    subheading: "平均的な大人の答えと、身長による変わり方です。",
    primary: "{steps}歩",
    secondary: "{km} km · 普通のペースで約{time} · 体重70 kgの人で{calories}カロリー",
    intro:
      "平均的な大人の場合、典型的な歩幅76 cm（2.5 ft）で{km} kmを歩くと約{steps}歩になります。普通の歩行ペース5 km/hでは約{time}かかり、体重70 kg（155 lb）の人ではおよそ{calories}カロリーを消費します。正確な歩数は身長によって変わります。身長が低い人は、同じ距離でも歩数が増えます。",
    crumb: "kmから歩数",
    crumbValue: "{km} km",
    related: "{km} kmの歩数",
    relatedHub: "歩数からkmへの換算",
    faq: [
      {
        question: "{km} kmは何歩ですか？",
        answer:
          "歩幅76 cmの平均的な大人の場合、{km} kmは約{steps}歩です。身長が低い人は、同じ距離を歩くのにより多くの歩数が必要です。このページの身長表で、ご自身の数字を確認できます。",
      },
      {
        question: "{km} kmを歩くのにどのくらいかかりますか？",
        answer:
          "普通の歩行ペース5 km/hでは、{km} kmに約{time}かかります。速歩の6.4 km/hでは約{brisk}です。ゆっくりした3.2 km/hでは約{slow}です。",
      },
      {
        question: "{km} km歩くと何カロリー消費しますか？",
        answer:
          "体重70 kg（155 lb）の人が普通のペースで{km} km歩くと、およそ{calories}カロリーを消費します。このページのカロリー表で、ご自身の体重を確認できます。",
      },
      {
        question: "kmから歩数への換算はどう計算しますか？",
        answer:
          "距離を100,000倍し（cm/km）、平均歩幅76 cmで割ります。つまり{km} km = {cm} cm ÷ 76 cm ≈ {steps}歩です。実際の歩幅は、身長のおよそ0.41倍です。",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "{steps}歩のカロリー — {steps}歩で何カロリー消費しますか？",
      description:
        "平均的な大人の場合、{steps}歩でおよそ{calories}カロリーを消費します。体重、ペース、歩行時間ごとの消費量を確認できます。",
      keywords: [
        "{steps}歩 カロリー",
        "{steps}歩 何カロリー",
        "{steps}歩の消費カロリー",
        "{steps}歩で消費するカロリー",
        "{steps}歩は何カロリー",
      ],
      ogImageAlt: "{steps}歩のカロリー",
    },
    h1: "{steps}歩のカロリー — 何カロリー消費しますか？",
    subheading: "{steps}歩歩いたときの消費カロリーを、体重とペース別に示します。",
    primary: "≈ {calories}カロリー",
    secondary: "体重155 lb（70 kg）、普通のペース · {miles} mi / {km} km · 約{time}",
    intro:
      "平均的な大人（155 lb / 70 kg）が普通のペースで{steps}歩歩くと、約{calories}カロリーを消費します。距離は{miles}マイル（{km} km）で、およそ{time}かかります。消費カロリーは体重とともに増えます。軽い人は少なく、重い人は多くなります。",
    crumb: "歩数からカロリー",
    crumbValue: "{steps}歩",
    related: "{steps}歩のカロリー",
    relatedMiles: "{steps}歩をマイルに",
    relatedTool: "歩行カロリー計算",
    realWorld: {
      roughly: "{calories}カロリーは、およそ{name}です。",
      times: "{calories}カロリーは、{name}の約{factor}倍です。",
      less: "{calories}カロリーは、{name}より約{factor}倍少ないです。",
    },
    faq: [
      {
        question: "{steps}歩で何カロリー消費しますか？",
        answer:
          "体重155 lb（70 kg）の人が普通のペース3 mphで歩くと、{steps}歩で約{calories}カロリーを消費します。体重が重い人はもっと消費します。このページの体重表をご覧ください。",
      },
      {
        question: "歩くペースで消費カロリーは変わりますか？",
        answer:
          "少し変わります。4 mph（速歩）は2 mph（ゆっくり）より1分あたり約30%多くカロリーを消費しますが、距離も早く歩き終わるため、歩数が同じなら合計の差は思ったより小さくなります。体重150 lbの人では、合計がおよそ{slowCal}（ゆっくり）から{briskCal}（速歩）です。",
      },
      {
        question: "{steps}歩を歩くのにどのくらいかかりますか？",
        answer:
          "普通の歩行ペース（3 mph）で約{time}です。速い4 mphでは{brisk}です。ゆっくりした2 mphの散歩では{slow}です。",
      },
      {
        question: "この数字の計算式は何ですか？",
        answer:
          "標準的なMETのカロリー式を使います。カロリー = MET × 体重（kg） × 時間（h）です。普通の歩行ペースではMET = 3.5です。平均歩幅76 cmで歩数を距離に直し、その距離を歩行時間に換算します。",
      },
    ],
    loss: {
      question: "{steps}歩のカロリーで体重は減りますか？",
      yes: "{calories}カロリーは、1日の不足分として意味のある量です。食べて埋めなければ、2週間でおよそ0.5 lbの減量になります。食事を少し調整するだけでも、着実な減量につながります。",
      no: "{calories}カロリーは役に立ちますが、それだけでは体重は減りません。食事で控えめなカロリー不足を作り、1日少なくとも7,500〜10,000歩を目指してください。",
    },
  },
  stepsToTime: {
    meta: {
      title: "{steps}歩を歩くのにどのくらいかかりますか？",
      description:
        "{steps}歩は、普通のペースで約{time}です。5つのペースの歩行時間、距離、消費カロリーを確認できます。",
      keywords: [
        "{steps}歩 歩く時間",
        "{steps}歩 何分",
        "{steps}歩 所要時間",
        "{steps}歩の歩行時間",
        "{steps}歩 どれくらい",
      ],
      ogImageAlt: "{steps}歩の歩行時間",
    },
    h1: "{steps}歩を歩くのにどのくらいかかりますか？",
    subheading: "{steps}歩の歩行時間、距離、カロリーです。",
    primary: "≈ {time}",
    secondary: "普通のペース3 mph · {miles} mi / {km} km · {calories}カロリー",
    intro:
      "{steps}歩は、普通のペース3 mph（5 km/h）で約{time}です。速歩の4 mphでは{brisk}に短くなり、ゆっくりした2 mphの散歩では{slow}に伸びます。距離は{miles}マイル（{km} km）で、約{calories}カロリーを消費します。",
    crumb: "歩行時間",
    crumbValue: "{steps}歩",
    related: "{steps}歩 — 歩行時間",
    relatedMiles: "{steps}歩をマイルに",
    relatedTool: "歩行時間の計算",
    faq: [
      {
        question: "{steps}歩を歩くのにどのくらいかかりますか？",
        answer:
          "普通の歩行ペース3 mphで約{time}です。速歩（4 mph）では{brisk}です。ゆっくりした散歩（2 mph）では{slow}です。",
      },
      {
        question: "歩行時間は身長で変わりますか？",
        answer:
          "時間はほぼ同じです。変わるのは歩数です。身長が高い人は同じ距離でも歩数が少なくなりますが、多くの人は同じくらいのケイデンス（1分あたり約100歩）で歩きます。そのため時間は身長より、主にペースで決まります。",
      },
      {
        question: "{steps}歩はどのくらいの距離ですか？",
        answer: "平均的な大人の場合、{steps}歩は約{miles}マイル（{km} km）です。",
      },
      {
        question: "歩行時間はどう計算しますか？",
        answer:
          "時間 = 距離 ÷ ペースです。平均歩幅76 cmで歩数から距離を出し、歩行速度で割ります。普通のペース（3 mph / 5 km/h）が初期値で、このページの表に3つのペースを載せています。",
      },
    ],
    spread: {
      question: "{steps}歩を1日の中で分けて歩けますか？",
      high: "はい。1日{steps}歩に達する人の多くは、散歩、用事、ふだんの動きの中で積み上げています。15分の散歩を3回と、いつもの活動を足せば、たいていは届きます。",
      low: "はい。20〜30分の散歩1回と、ふだんの動き（車まで歩く、職場を歩くなど）だけでも、長い散歩を別にしなくても、たいていは{steps}歩に届きます。",
    },
  },
  milesToTime: {
    meta: {
      title: "{miles}を歩くのにどのくらいかかりますか？",
      description:
        "{miles}は、普通のペース3 mphで約{time}です。3つのペースの歩行時間に加え、歩数とカロリーを確認できます。",
      ogImageAlt: "{miles}の歩行時間",
    },
    h1: "{milesArticle}を歩くのにどのくらいかかりますか？",
    subheading: "{miles}の歩行時間、歩数、カロリーです。",
    primary: "≈ {time}",
    secondary: "普通のペース3 mph · {steps}歩 · 体重70 kgの人で{calories}カロリー",
    intro:
      "{miles}は、普通のペース3 mph（5 km/h）で約{time}です。速歩の4 mphでは{brisk}に短くなり、ゆったりした2 mphでは{slow}に伸びます。歩数は約{steps}歩で、およそ{calories}カロリーを消費します。",
    crumb: "歩行時間",
    relatedTool: "歩行時間の計算",
    faq: [
      {
        question: "{milesArticle}を歩くのにどのくらいかかりますか？",
        answer: "普通のペース3 mphで約{time}です。速歩の4 mphでは{brisk}です。ゆっくりした2 mphでは{slow}です。",
      },
      {
        question: "{miles}は何歩ですか？",
        answer:
          "歩幅76 cmの平均的な大人の場合、{miles}は約{steps}歩です。身長が低い人は歩数が増えます。このページの身長表をご覧ください。",
      },
      {
        question: "{miles}を歩くと何カロリー消費しますか？",
        answer:
          "体重70 kg（155 lb）の人が普通のペースで歩くと、およそ{calories}カロリーです。体重が重い人はもっと消費します。体重表をご覧ください。",
      },
      {
        question: "歩行時間はどう計算しますか？",
        answer:
          "時間 = 距離 ÷ ペースです。{miles} = {km} kmです。5 km/hでは{time}になります。CDCとACSMが中程度の身体活動として公表している、同じ3つのペースを使います。",
      },
    ],
    exercise: {
      question: "1日{miles}歩けば運動として十分ですか？",
      yes: "はい。1日{miles}を普通から速歩のペースで歩けば、CDCが勧める週150分の中程度の有酸素運動を十分に満たします。",
      start:
        "1日{miles}は良いスタートです。ふだんの活動と合わせれば活動的な範囲に入りますが、もう1回歩くと健康への効果はさらに大きくなります。",
      below:
        "1日{miles}未満は、CDCの最低推奨を下回ります。少しずつ増やしてください。1日0.5マイル増やすだけでも、心臓の健康に役立ちます。",
    },
  },
};

export default ja;

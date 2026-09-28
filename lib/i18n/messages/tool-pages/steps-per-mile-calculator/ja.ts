import type { StepsPerMileCalculatorMessages } from "./en";

const ja: StepsPerMileCalculatorMessages = {
  meta: {
    title: "1マイルは何歩？計算機［無料］",
    description:
      "1マイルは何歩ですか。身長とペースによっておよそ2,000〜2,500歩です。あなた向けの1マイルと1 kmの歩数を、ウォーキングとランニングの表つきで出します。",
    keywords: [
      "1マイルの歩数",
      "1kmの歩数",
      "1マイルは何歩",
      "マイル 歩数",
      "1キロメートルの歩数",
      "歩幅 計算",
      "ウォーキング 1マイル 歩数",
      "歩数 マイル 変換",
      "マイル 歩数 変換",
    ],
    ogTitle: "1マイルは何歩？計算機［無料］",
    ogDescription:
      "1マイルは何歩ですか。身長によって2,000〜2,500歩です。あなた向けの1マイルと1 kmの歩数を出します。",
    ogImageAlt: "マイルあたり歩数計算機",
  },
  hero: {
    title: "1マイルは何歩ですか？",
    subtitle:
      "1マイルは何歩ですか。ほとんどの成人でおよそ2,000〜2,500歩です。身長を入れると、1マイルと1 kmあたりの歩数がわかります。",
  },
  resultCta: {
    headline: "実際の1マイルあたりの歩数を知る",
    description:
      "Stepsは実際の歩数と距離を自動で記録するので、推定ではなく本当のペースと歩幅が見えます。",
  },
  stickyCta: "Stepsで歩数を記録する",
  calculator: {
    yourInformation: "あなたの情報",
    height: "身長",
    gender: "性別",
    male: "男性",
    female: "女性",
    stepLength: "推定歩幅：{cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "（{value}インチ）",
    stepsPerMile: "1マイルの歩数",
    stepsPerKm: "1キロメートルの歩数",
    stepsUnit: "歩",
    referenceTitle: "距離の早見表",
    referenceSubtitle: "あなたの歩幅で、よくある距離に必要な歩数",
    colDistance: "距離",
    colSteps: "歩数",
    distances: ["1 km", "1マイル", "5 km", "5マイル", "10 km", "ハーフマラソン", "マラソン"],
  },
  info: {
    title: "1マイルの歩数の計算方法",
    intro:
      "1マイルの歩数は歩幅で決まり、歩幅は主に身長と性別で決まります。身長が高い人は歩幅が長く、同じ距離をより少ない歩数で進みます。",
    formulaTitle: "計算式",
    stepLengthLabel: "歩幅：",
    stepLengthFormula: "身長（cm）× 0.415（男性）または 0.413（女性）",
    perKmLabel: "1 kmの歩数：",
    perKmFormula: "100,000 ÷ 歩幅（cm）",
    perMileLabel: "1マイルの歩数：",
    perMileFormula: "1 kmの歩数 × 1.609",
    heightTitle: "身長別の平均歩数",
    heights: [
      { height: "5'0\" (152 cm):", steps: "約2,500歩/マイル" },
      { height: "5'6\" (168 cm):", steps: "約2,300歩/マイル" },
      { height: "6'0\" (183 cm):", steps: "約2,100歩/マイル" },
      { height: "6'6\" (198 cm):", steps: "約1,950歩/マイル" },
    ],
    faqTitle: "よくある質問",
  },
  faq: [
    {
      question: "1マイルは何歩ですか？",
      answer:
        "平均すると、1マイルはおよそ2,000〜2,500歩です。正確な数は身長と歩幅で変わります。身長が低い人は歩数が多く、高い人は少なくなります。",
    },
    {
      question: "1キロメートルは何歩ですか？",
      answer:
        "平均すると、1キロメートルはおよそ1,250〜1,550歩です。1マイルの歩数のおよそ62%です。1キロメートルは約0.62マイルだからです。",
    },
    {
      question: "歩く速さは1マイルの歩数に影響しますか？",
      answer:
        "はい、少し影響します。速く歩くか走ると歩幅が伸びるので、1マイルの歩数は減ります。ただ、ふつうの歩行速度では差は比較的小さいです。",
    },
    {
      question: "実際の歩幅はどう測りますか？",
      answer:
        "わかっている距離（たとえば100フィート）をいつものペースで歩き、歩数を数えます。距離を歩数で割ると平均の歩幅になります。スタート地点を印して10歩歩き、進んだ距離を測っても同じです。",
    },
  ],
  cta: {
    title: "歩数と距離を記録する",
    description:
      "Stepsアプリをダウンロードして、歩数と距離をiPhoneとApple Watchで自動記録しましょう。",
  },
  howTo: {
    name: "1マイルの歩数を計算する方法",
    description:
      "身長とウォーキングのペースを入力すると、あなた自身の1マイルと1キロメートルの歩数を推定します。",
    steps: [
      {
        name: "身長を入力する",
        text: "身長が高い人は一歩でより進むので、身長が結果を調整します。",
      },
      {
        name: "ペースを選ぶ",
        text: "速歩やランニングは、ゆっくり歩きより歩幅が長くなります。知りたいペースを選んでください。",
      },
      {
        name: "1マイルの歩数を読む",
        text: "結果には、そのペースでのあなたの歩幅に基づく1マイルと1キロメートルの歩数が出ます。",
      },
    ],
  },
};

export default ja;

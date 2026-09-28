import type { StepDistanceCalculatorMessages } from "./en";

const ja: StepDistanceCalculatorMessages = {
  meta: {
    title: "歩数から距離の計算機：1 km ≈ 1,300歩",
    description:
      "1 km ≈ 1,300歩。1マイル ≈ 2,100歩。5,000歩 ≈ 3.8 km / 2.4 mi。身長と歩幅で調整できる無料の歩数距離計算機です。",
    keywords: [
      "km 歩数",
      "歩数 km 変換",
      "1km 何歩",
      "2km 何歩",
      "3km 何歩",
      "6500歩 何km",
      "歩数 距離 計算",
      "歩幅 計算",
      "歩数 距離",
      "距離 歩数",
      "ウォーキング 距離 計算",
      "歩幅 計算機",
      "1kmあたりの歩数",
      "歩数 マイル",
    ],
    ogTitle: "歩数から距離の計算機：1 km ≈ 1,300歩",
    ogDescription:
      "1 km ≈ 1,300歩 · 5,000歩 ≈ 3.8 km / 2.4 mi · 10,000歩 ≈ 7.6 km / 4.7 mi。身長に合わせた無料の歩数距離計算機です。",
    ogImageAlt: "歩数距離計算機",
  },
  hero: {
    title: "歩数距離計算機",
    subtitle:
      "歩数を距離に、距離を歩数に変換します。身長、性別、歩幅に合わせた結果が出ます。",
  },
  resultCta: {
    headline: "実際の歩数と距離を記録する",
    description:
      "Stepsは歩数を自動で数え、毎日の実際の距離、ペース、カロリーを表示します。手入力は不要です。",
  },
  stickyCta: "Stepsで歩数を記録する",
  calculator: {
    yourInformation: "あなたの情報",
    gender: "性別",
    male: "男性",
    female: "女性",
    age: "年齢",
    years: "歳",
    height: "身長",
    stepLength: "推定歩幅：{cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "（{value}インチ）",
    stepsToDistance: "歩数から距離",
    distanceToSteps: "距離から歩数",
    numberOfSteps: "歩数",
    stepsPlaceholder: "歩数を入力",
    distance: "距離",
    distancePlaceholder: "距離を入力",
    miles: "マイル",
    result: "結果",
    kmValue: "{distance} km",
    milesParen: "（{distance}マイル）",
    stepsValue: "{steps}歩",
    estimatedCalories: "推定カロリー",
    kcalValue: "{calories} kcal",
    walkingTime: "ウォーキング時間",
    hoursMinutes: "{hours}時間 {minutes} min",
    minutesOnly: "{minutes} min",
    referenceTitle: "早見表",
    referenceSubtitle: "あなたのプロフィールに基づく、よくある歩数目標と相当する距離",
    colSteps: "歩数",
    colDistance: "距離",
    colCalories: "カロリー",
    colTime: "時間",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "歩幅の計算方法",
    intro:
      "歩幅は、一歩でどれだけ進むかを決める要素です。身長、性別、年齢を考慮した研究に基づく式で歩幅を推定します。",
    formulaTitle: "計算式",
    maleLabel: "男性：",
    maleFormula: "歩幅 = 身長（cm）× 0.415",
    femaleLabel: "女性：",
    femaleFormula: "歩幅 = 身長（cm）× 0.413",
    ageLabel: "年齢補正：",
    ageFormula: "40歳を過ぎると、歩幅は10年ごとにおよそ1%短くなります",
    average:
      "成人の平均歩幅は60〜80 cm（24〜31インチ）です。歩く速さ、地形、体力によって実際の歩幅は変わります。",
    faqTitle: "よくある質問",
  },
  faq: [
    {
      question: "1マイルは何歩ですか？",
      answer:
        "平均すると、1マイルはおよそ2,000〜2,500歩です。歩幅によって変わります。歩幅が長い人は、同じ距離をより少ない歩数で進みます。",
    },
    {
      question: "1キロメートルは何歩ですか？",
      answer:
        "平均すると、1キロメートルはおよそ1,250〜1,550歩です。上の計算機に自分の情報を入れると、個人に合わせた推定が出ます。",
    },
    {
      question: "1日10,000歩で十分ですか？",
      answer:
        "1日10,000歩はよくある目標で、ウォーキングおよそ5マイル（8 km）に相当します。研究では、1日7,000〜8,000歩でも健康への効果は大きいとされています。負荷があり、かつ達成できる目標がいちばんよいです。",
    },
    {
      question: "1.8 kmは何歩ですか？",
      answer:
        "1.8 kmは、平均的な成人（歩幅約77 cm）でおよそ2,340歩です。より正確には、上の計算機に身長を入力してください。",
    },
    {
      question: "3.5 kmは何歩ですか？",
      answer:
        "3.5 kmは、平均的な成人でおよそ4,550歩です。身長が高い人は歩幅が長く歩数が少なく、低い人は歩数が多くなります。",
    },
    {
      question: "この計算機の精度はどのくらいですか？",
      answer:
        "身体の特徴に基づく妥当な推定です。より正確にするには、わかっている距離を歩いて歩数を数え、実際の歩幅を測ってください。",
    },
  ],
  conversionsTitle: "変換の早見表",
  conversions: [
    "10,000歩をマイルに",
    "5,000歩をマイルに",
    "1マイルの歩数",
    "1 kmの歩数",
    "歩数からkmの表",
    "歩数からマイルの表",
    "歩数からカロリーの表",
  ],
  allConversions: "すべての変換 →",
  stepsToKm: {
    title: "歩数からkm：歩数は何キロメートルか",
    intro:
      "「{phrase}」の変換は歩幅により、歩幅は身長で変わります。目安は、平均的な成人で{ruleA}、そして{ruleB}です。",
    phrase: "歩数をkmに",
    ruleA: "1,000歩 ≈ 0.75 km",
    ruleB: "1 km ≈ 1,300歩",
    cards: [
      { value: "0.75 km", label: "1,000歩" },
      { value: "3.8 km", label: "5,000歩" },
      { value: "7.5 km", label: "10,000歩" },
      { value: "15 km", label: "20,000歩" },
    ],
    guide:
      "これは平均です。実際の距離は身長と歩幅で変わります。個人の変換は上の計算機を使うか、身長別の表がある{link}の詳しい解説を見てください。",
    guideLink: "1キロメートルは何歩か",
  },
  kmTable: {
    title: "kmから歩数の早見表",
    intro:
      "よくある距離のおよその歩数です。平均歩幅0.75 m（平均的な成人）に基づきます。",
    colDistance: "距離",
    colSteps: "歩数（目安）",
    colTime: "ウォーキング時間",
    rows: [
      { distance: "0.5 km", steps: "650", time: "約6 min" },
      { distance: "1 km", steps: "1,300", time: "約12 min" },
      { distance: "1.5 km", steps: "1,950", time: "約18 min" },
      { distance: "1.8 km", steps: "2,340", time: "約22 min" },
      { distance: "2 km", steps: "2,600", time: "約24 min" },
      { distance: "2.5 km", steps: "3,250", time: "約30 min" },
      { distance: "3 km", steps: "3,900", time: "約36 min" },
      { distance: "3.5 km", steps: "4,550", time: "約42 min" },
      { distance: "4 km", steps: "5,200", time: "約48 min" },
      { distance: "5 km（約3.1マイル）", steps: "6,500", time: "約60 min" },
      { distance: "6 km", steps: "7,800", time: "約72 min" },
      { distance: "7 km", steps: "9,100", time: "約84 min" },
      { distance: "8 km（約5マイル）", steps: "10,400", time: "約96 min" },
      { distance: "10 km（約6.2マイル）", steps: "13,000", time: "約2時間" },
      { distance: "12 km", steps: "15,600", time: "約2時間24 min" },
      { distance: "15 km", steps: "19,500", time: "約3時間" },
      { distance: "20 km", steps: "26,000", time: "約4時間" },
    ],
    footnote:
      "平均歩幅（約0.75 m）とふつうのウォーキングペース（約5 km/h）に基づきます。身長と性別に合わせた結果は上の計算機を使ってください。",
  },
  stepsTable: {
    title: "歩数からkm・マイルの早見表",
    intro:
      "よくある歩数のおよその距離（kmとマイル）です。平均歩幅0.75 mに基づきます。",
    colSteps: "歩数",
    colKm: "Km",
    colMiles: "マイル",
    rows: [
      { steps: "1,000", km: "0.75 km", miles: "0.47 mi" },
      { steps: "2,000", km: "1.5 km", miles: "0.93 mi" },
      { steps: "2,500", km: "1.9 km", miles: "1.17 mi" },
      { steps: "3,000", km: "2.25 km", miles: "1.4 mi" },
      { steps: "5,000", km: "3.8 km", miles: "2.4 mi" },
      { steps: "6,000", km: "4.5 km", miles: "2.8 mi" },
      { steps: "6,500", km: "4.9 km", miles: "3.0 mi" },
      { steps: "7,000", km: "5.25 km", miles: "3.3 mi" },
      { steps: "7,500", km: "5.6 km", miles: "3.5 mi" },
      { steps: "10,000", km: "7.5 km", miles: "4.7 mi" },
      { steps: "12,000", km: "9.0 km", miles: "5.6 mi" },
      { steps: "13,000", km: "9.75 km", miles: "6.05 mi" },
      { steps: "15,000", km: "11.25 km", miles: "7.0 mi" },
      { steps: "20,000", km: "15 km", miles: "9.3 mi" },
    ],
    footnote:
      "距離は平均的な成人の歩幅を前提にしています。身長が高い人は一歩でより進み、低い人は少なく進みます。身長に合わせた結果は上の計算機を使ってください。",
  },
  cta: {
    title: "歩数を自動で記録する",
    description:
      "Stepsアプリをダウンロードして、毎日の歩数、距離、カロリーをiPhoneとApple Watchで自動記録しましょう。",
  },
  howTo: {
    name: "歩数を距離に（または距離を歩数に）変換する方法",
    description:
      "身長と、歩数または距離を入力します。計算機はあなたの歩幅から変換を推定します。",
    steps: [
      {
        name: "身長を入力する",
        text: "身長から平均の歩幅を推定します。ウォーキングの歩幅は、女性がおよそ身長 × 0.413、男性が身長 × 0.415です。",
      },
      {
        name: "歩数または距離を入力する",
        text: "入力を歩数に切り替えると距離が、距離に切り替えると相当する歩数が出ます。メートル法とヤード・ポンド法の両方に対応しています。",
      },
      {
        name: "変換結果を読む",
        text: "結果には変換値と、メートルおよびフィートでの推定歩幅が表示されます。",
      },
    ],
  },
};

export default ja;

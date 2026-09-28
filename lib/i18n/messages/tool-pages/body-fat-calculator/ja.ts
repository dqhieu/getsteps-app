import type { BodyFatCalculatorMessages } from "./en";

const ja: BodyFatCalculatorMessages = {
  meta: {
    title: "体脂肪率カリキュレーター — Navy法（器具なし）",
    description:
      "正確なNavy法で体脂肪率を計算します。寸法を入れるだけです。体脂肪計やジムの器具は不要です。",
    keywords: [
      "体脂肪率 カリキュレーター",
      "体脂肪 計算",
      "Navy法 体脂肪",
      "体脂肪率の計算方法",
      "男性 体脂肪率",
      "女性 体脂肪率",
    ],
    ogTitle: "体脂肪率カリキュレーター — Navy法",
    ogDescription:
      "正確なNavy法で体脂肪率を計算します。寸法を入れるだけです。体脂肪計やジムの器具は不要です。",
    ogImageAlt: "体脂肪率カリキュレーター",
  },
  hero: {
    title: "体脂肪率カリキュレーター",
    subtitle: "Navy法で体脂肪率を正確に計算します。必要なのはメジャーだけです。",
  },
  intro:
    "性別、身長、周囲径を入れると、実績のあるNavyの式で体脂肪率を計算します。体脂肪計やジムの器具は不要です。",
  calculator: {
    measurements: "あなたの寸法",
    gender: "性別",
    male: "男性",
    female: "女性",
    height: "身長",
    weight: "体重",
    circumferenceUnit: "周囲径の単位",
    waist: "ウエスト周囲",
    neck: "首周囲",
    hip: "ヒップ周囲",
    measurementHint: "周囲はいちばん細い位置で測ります。",
    invalidTitle: "寸法を確認してください",
    invalidDetail: "ウエストは首より大きくする必要があります。",
    yourBodyFat: "あなたの体脂肪",
    percent: "{value}%",
    fatMass: "脂肪量",
    leanMass: "除脂肪量",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "おすすめの1日の歩数",
    categoriesTitle: "体脂肪の区分",
    categoriesSubtitleMale: "American Council on Exercise（ACE）の男性向け分類",
    categoriesSubtitleFemale: "American Council on Exercise（ACE）の女性向け分類",
    categoryColumn: "区分",
    rangeColumn: "体脂肪の範囲",
    categories: {
      essential: "必須脂肪",
      athletic: "アスリート",
      fitness: "フィットネス",
      acceptable: "許容",
      obese: "肥満",
    },
  },
  info: {
    title: "体脂肪率とは",
    intro:
      "体脂肪率は、BMIだけより体の状態を正確に示します。BMIは体重と身長だけですが、体脂肪率は脂肪量と除脂肪量（筋肉、骨、水分）を分けます。",
    faqTitle: "よくある質問",
  },
  faq: [
    {
      question: "健康的な体脂肪率はどれくらいですか？",
      answer:
        "男性はフィットネス14–17%、許容18–24%が健康的とされます。女性はフィットネス21–24%、許容25–31%です。競技者はさらに低く、男性6–13%、女性14–20%が一般的です。",
    },
    {
      question: "Navy法の精度はどのくらいですか？",
      answer:
        "Navy法はDEXAとの差がおおむね3–4%で、器具なしのメジャー法ではいちばん正確な部類です。同じ手順で丁寧に測ると精度が上がります。",
    },
    {
      question: "ウエストはどこで測りますか？",
      answer:
        "いちばん細い位置、多くはへそかその少し上です。メジャーは床と平行にし、普通に息を吐いたあとに測ります。お腹は引っ込めません。",
    },
    {
      question: "体脂肪とBMIの違いは何ですか？",
      answer:
        "BMIは身長と体重だけなので、脂肪と筋肉を区別できません。筋肉質のアスリートはBMIが高くても体脂肪は低いことがあります。体脂肪率の方が体組成と健康リスクを正確に示します。",
    },
    {
      question: "体脂肪を減らすには？",
      answer:
        "定期的なウォーキングや有酸素、筋力トレーニング、控えめなカロリー不足を組み合わせます。目安は週0.5–1 kgの脂肪です。1日10,000歩以上は、きつい運動なしで消費を増やす続けやすい方法です。",
    },
  ],
  cta: {
    title: "健康の記録をつけましょう",
    description: "体組成の目標を、Stepsの毎日の歩数記録と組み合わせられます。",
  },
  howTo: {
    name: "体脂肪率の計算方法（Navy法）",
    description: "首、ウエスト、ヒップの周囲、身長、性別を入れると、Navyの式で体脂肪率を推定します。",
    steps: [
      {
        name: "首を測ります",
        text: "柔らかいメジャーで、喉仏のすぐ下の首回りを測ります。",
      },
      {
        name: "ウエストを測ります",
        text: "男性はへその高さ、女性はウエストのいちばん細い位置です。",
      },
      {
        name: "ヒップを測ります（女性のみ）",
        text: "女性はヒップのいちばん広い位置も足します。",
      },
      {
        name: "周囲と身長を入れます",
        text: "すべての周囲と身長を入力します。メートル法とヤード・ポンド法に対応しています。",
      },
      {
        name: "体脂肪率と区分を確認します",
        text: "推定体脂肪率とACEの区分（必須脂肪、アスリート、フィットネス、平均、肥満）を返します。",
      },
    ],
  },
};

export default ja;

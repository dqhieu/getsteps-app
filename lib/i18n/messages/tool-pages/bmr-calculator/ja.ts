import type { BmrCalculatorMessages } from "./en";

const ja: BmrCalculatorMessages = {
  meta: {
    title: "BMRカリキュレーター: 基礎代謝を3つの式で",
    description:
      "Mifflin-St Jeor、Harris-Benedict、Katch-McArdleでBMRを並べて計算します。30歳・75 kgの男性は安静時に1日約1,699カロリーを消費します。無料のカリキュレーターです。",
    keywords: [
      "BMR カリキュレーター",
      "基礎代謝 計算",
      "安静時代謝",
      "Mifflin-St Jeor 式",
      "Harris-Benedict 式",
      "Katch-McArdle 式",
      "安静時に何カロリー消費するか",
      "BMR と TDEE",
      "代謝 カリキュレーター",
    ],
    ogTitle: "BMRカリキュレーター: 基礎代謝を3つの式で",
    ogDescription:
      "3つの臨床式で基礎代謝を並べて計算し、活動レベルごとの1日のカロリーも出します。",
    ogImageAlt: "BMRカリキュレーター",
  },
  hero: {
    title: "BMRカリキュレーター",
    subtitle:
      "完全な安静時に体が消費するカロリーがわかります。3つの臨床式を並べるので、一つの数字が正確そうに見える代わりに、幅が見えます。",
  },
  calculator: {
    details: "あなたの情報",
    gender: "性別",
    male: "男性",
    female: "女性",
    age: "年齢",
    years: "歳",
    weight: "体重",
    height: "身長",
    bodyFat: "体脂肪率",
    bodyFatOptional: "（任意: Katch-McArdleが使えます）",
    bodyFatPlaceholder: "例: 20",
    activity: "活動レベル",
    activityLevels: {
      sedentary: "ほぼ運動なし",
      light: "軽い活動",
      moderate: "中程度の活動",
      active: "活動的",
      very_active: "とても活動的",
    },
    activityDescriptions: {
      sedentary: "デスクワークで、運動はほとんどなし",
      light: "軽い運動を週1–3日",
      moderate: "中程度の運動を週3–5日",
      active: "きつい運動を週6–7日",
      very_active: "体を使う仕事、または1日2回のトレーニング",
    },
    calculate: "BMRを計算",
    results: "結果",
    bmr: "BMR",
    atRest: "安静時のカロリー/日",
    maintenance: "維持カロリー",
    maintenanceAt: "{level}のとき",
    leanMass:
      "除脂肪体重: {mass}。体脂肪率を入れたので、主な数字はKatch-McArdleです。",
    kgValue: "{value} kg",
    share: "一日中座っていても、消費カロリーの約{percent}%はBMRです。",
    formulasTitle: "3つの式",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "改訂 Harris-Benedict",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "現代の集団で検証されています。体脂肪が不明なときの臨床上の標準で、いちばん信頼できます。",
      harris:
        "1919年の原式を1984年に改訂したものです。対象が今より細く活動的だったため、およそ5%高めに出やすいです。",
      katch:
        "除脂肪体重から計算し、性別と身長を使いません。細い体や筋肉質の体ではいちばん正確です。",
      katchLocked: "体脂肪率が必要です。上に入れるとこの推定が見られます。",
    },
    used: "使用中",
    calValue: "{value} cal",
    byActivity: "活動レベル別の1日のカロリー",
    resultCta: {
      headline: "BMRは床です。歩数がレバーです。",
      description:
        "安静時の消費はほとんど動かせませんが、その上は動かせます。Stepsは毎日の活動を自動で記録し、いま計算した数字に何が上乗せされるかを示します。",
    },
  },
  info: {
    title: "BMRの計算方法",
    intro:
      "臨床でよく使う式は3つあり、差は無視できません。一つを選んで幅を隠す代わりに、このカリキュレーターは3つとも計算します。",
    formulaTitle: "計算式",
    formulas: [
      {
        title: "Mifflin-St Jeor（1990）",
        lines: [
          "男性: (10 × 体重 kg) + (6.25 × 身長 cm) − (5 × 年齢) + 5",
          "女性: (10 × 体重 kg) + (6.25 × 身長 cm) − (5 × 年齢) − 161",
        ],
      },
      {
        title: "改訂 Harris-Benedict（1984）",
        lines: [
          "男性: 88.362 + (13.397 × 体重) + (4.799 × 身長) − (5.677 × 年齢)",
          "女性: 447.593 + (9.247 × 体重) + (3.098 × 身長) − (4.330 × 年齢)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: ["370 + (21.6 × 除脂肪体重 kg)。除脂肪体重 = 体重 × (1 − 体脂肪率)"],
      },
    ],
    exampleLabel: "例:",
    example:
      "30歳、75 kg、175 cmの男性は、Mifflin-St Jeorで1,699、Harris-Benedictで1,763です。体脂肪20%ではKatch-McArdleが1,666を返します。",
    primary:
      "体脂肪率を入れない限り、主な数字はMifflin-St Jeorです。入れた場合はKatch-McArdleが代わります。3つのうち、身長と性別から推測せず、安静時消費を実際に担う組織を測るのはこれだけです。",
    activityFactors:
      "BMRに活動係数を掛けるとTDEEになります。ほぼ運動なし1.2、軽い活動1.375、中程度1.55、活動的1.725、とても活動的1.9です。カリキュレーターは5つすべてを表示します。",
  },
  faqTitle: "よくある質問",
  faq: [
    {
      question: "BMRとは何ですか？",
      answer:
        "BMR（基礎代謝）は、何もしていないときに体が使うエネルギーです。呼吸、血流、体温、細胞の修復が含まれます。12時間の絶食後、目を覚ました状態で静かに横になって測ります。多くの成人では1日のカロリーの60〜75%を占め、消費のいちばん大きい部分です。",
    },
    {
      question: "BMRと安静時代謝の違いは何ですか？",
      answer:
        "BMRは実験室の厳しい条件で測ります。完全な安静、絶食、温度が中立な部屋です。安静時代謝（RMR）は条件がゆるく、消化と小さな動きが少し入るため、およそ10%高く出ます。日常では言葉が混ざります。このカリキュレーターを含め、ネット上の計算は実際にはRMRに近い値を推定しています。",
    },
    {
      question: "いちばん正確なBMRの式はどれですか？",
      answer:
        "多くの人にはMifflin-St Jeorです。現代の集団で間接熱量測定と照合され、成人のおよそ80%で誤差は約10%以内です。Harris-Benedictは1984年の改訂でも約5%高めです。1919年の対象がより細く活動的だったためです。体脂肪率がわかればKatch-McArdleが両方を上回ります。安静時消費を実際に動かす除脂肪体重から計算するからです。",
    },
    {
      question: "BMRとTDEEの違いは何ですか？",
      answer:
        "BMRは完全な安静時の消費です。TDEE（1日の総消費エネルギー）はBMRに活動係数を掛けたもので、動き、運動、食事の消化が含まれます。TDEEは必ず高く、ほぼ動かない日でもBMRの約1.2倍です。カロリーの目標はBMRではなくTDEEに合わせます。",
    },
    {
      question: "減量のためにBMRちょうどを食べてよいですか？",
      answer:
        "いいえ。BMRちょうどを食べるのは、一日中動かなかった前提です。動く前に数百から千カロリーの不足ができます。筋肉を落としやすく、多くの人では女性1,200、男性1,500カロリーの下限を下回ります。TDEEから250〜500カロリーを引いてください。",
    },
    {
      question: "BMRが思ったより低いのはなぜですか？",
      answer:
        "体の大きさが主な入力なので、小さく軽い人ほど数字は低く、どの式も年齢を引きます。体組成も影響します。筋肉は脂肪のおよそ3倍を安静時に消費するので、同じ体重でも200カロリー以上ずれることがあります。長いカロリー不足のあとでは、適応熱産生で実際のBMRが予測より10〜15%下がることがあります。",
    },
    {
      question: "BMRは上げられますか？",
      answer:
        "少しずつなら上げられます。続く手段は筋肉を増やすことだけです。筋肉1 kgあたり安静時に約13カロリーなので、しっかり1年筋トレしても50〜100カロリー程度です。本物ですが大きくはありません。毎日の動きを増やす方がTDEEはずっと動きます。代謝の工夫より、歩数の方が結果が早く変わります。",
    },
  ],
  cta: {
    title: "安静時を上回る消費を記録",
    description:
      "Stepsアプリで一歩ずつ自動で数え、BMRの上に1日の消費カロリーが積み上がる様子を確認できます。",
  },
  sticky: "Stepsで歩数を記録",
  howTo: {
    name: "BMRの計算方法",
    description:
      "性別、年齢、体重、身長を入れると、3つの臨床式による基礎代謝と、活動レベルごとの1日のカロリーがわかります。",
    steps: [
      {
        name: "体の数値を入れます",
        text: "性別、年齢、体重、身長を入れます。体重はキログラムとポンド、身長はセンチメートルとフィート／インチを切り替えられます。",
      },
      {
        name: "わかる場合は体脂肪率を足します",
        text: "任意です。入れるとKatch-McArdleが使えます。除脂肪体重から計算し、細い体や筋肉質の体でいちばん正確です。",
      },
      {
        name: "活動レベルを選びます",
        text: "ほぼ運動なしからとても活動的までです。BMRは変わりませんが、強調する維持カロリーが決まります。",
      },
      {
        name: "BMRと維持カロリーを確認します",
        text: "BMR、3つの推定を並べた結果、5つの活動レベルそれぞれの1日の総カロリーを返します。",
      },
    ],
  },
};

export default ja;

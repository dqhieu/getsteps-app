import type { RestingHeartRateCalculatorMessages } from "./en";

const ja: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "安静時心拍数カリキュレーター — 体力レベルとKarvonenゾーン",
    description:
      "安静時心拍数から体力レベルと、個人のKarvonen心拍トレーニングゾーンを計算します。年齢と測定値を入れるとすぐ結果が出ます。",
    keywords: [
      "安静時心拍数 カリキュレーター",
      "年齢別 安静時心拍数",
      "安静時心拍数 正常値",
      "心拍予備 計算",
      "Karvonen 公式",
      "安静時心拍数 体力レベル",
    ],
    ogTitle: "安静時心拍数カリキュレーター — 体力レベルとKarvonenゾーン",
    ogDescription:
      "安静時心拍数から体力レベルと、個人のKarvonen心拍トレーニングゾーンを計算します。年齢と測定値を入れるとすぐ結果が出ます。",
    ogImageAlt: "安静時心拍数カリキュレーター",
  },
  hero: {
    title: "安静時心拍数カリキュレーター",
    subtitle:
      "心肺の体力レベルを確認し、心拍予備に基づくトレーニングゾーンを得られます。",
  },
  intro:
    "年齢、性別、測った安静時心拍数を入れると、体力の区分と、脂肪燃焼・有酸素持久力・ピーク向けのKarvonenゾーンが出ます。",
  calculator: {
    yourDetails: "あなたのデータ",
    gender: "性別",
    male: "男性",
    female: "女性",
    age: "年齢",
    years: { one: "歳", other: "歳" },
    restingHeartRate: "安静時心拍数",
    bpm: "bpm",
    rhrHint:
      "ヒント: 朝、起きる前に測ります。5分静かに座り、60秒間の拍動を数えてください。",
    calculate: "計算",
    fitnessLevel: "体力レベル",
    hrMax: "最大心拍数",
    hrr: "心拍予備",
    zonesTitle: "Karvonenトレーニングゾーン",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "アスリート",
      excellent: "非常に良い",
      good: "良い",
      above_average: "平均以上",
      average: "平均",
      below_average: "平均以下",
      poor: "低い",
    },
    zones: {
      activeRecovery: { name: "積極的回復", purpose: "回復" },
      fatBurn: { name: "脂肪燃焼", purpose: "脂肪燃焼" },
      aerobicEndurance: { name: "有酸素持久力", purpose: "有酸素" },
      lactateThreshold: { name: "乳酸性閾値", purpose: "閾値" },
      vo2Max: { name: "VO2 max", purpose: "VO2 max" },
    },
  },
  info: {
    title: "安静時心拍数の質問",
  },
  faq: [
    {
      question: "正常な安静時心拍数はどのくらいですか？",
      answer:
        "多くの大人では、正常な安静時心拍数は1分あたり60〜100拍（bpm）です。鍛えた選手は心臓が強く、1拍で多くの血液を送るため、40–60 bpmであることがよくあります。60 bpm未満（徐脈）は体力がある人では正常なこともありますが、症状があるときは医師に診てもらってください。",
    },
    {
      question: "安静時心拍数はどう測りますか？",
      answer:
        "朝、ベッドから出る前に測ります。5分じっと横になり、手首（橈骨動脈）か首（頸動脈）に指を2本当て、60秒間の拍動を数えます。コーヒー、運動、ストレスのあとは避けてください。連続した3朝の平均が最も正確です。",
    },
    {
      question: "体力が上がると安静時心拍数は下がりますか？",
      answer:
        "はい。定期的な有酸素運動は心筋を強くし、1拍で送る血液を増やします。一回拍出量が増えると、同じ量の血液を送るのに必要な拍数が減ります。継続した有酸素トレーニングでは、出発点の体力により、数か月で安静時心拍数がだいたい5–25 bpm下がります。",
    },
    {
      question: "安静時心拍数と最大心拍数の違いは何ですか？",
      answer:
        "安静時心拍数は、完全に休んでいるときの1分あたりの拍数です。最大心拍数は全力時に心臓が出せる最大の拍数で、220から年齢を引いて推定します。心拍予備はその差で、運動中に心臓が動ける幅です。Karvonen法は心拍予備で個人のトレーニングゾーンを計算します。",
    },
    {
      question: "安静時心拍数を下げるには？",
      answer:
        "最も効果的なのは定期的な有酸素運動です。歩行、軽い走り、自転車、水泳など、中程度の強さを持続する運動を週3–5回目指してください。十分な睡眠（7–9時間）、ストレス対策（瞑想、深い呼吸）、カフェインとアルコールを控えること、健康的な体重も安静時心拍数を下げます。継続すると、変化はだいたい4–8週間でわかります。",
    },
  ],
  cta: {
    title: "心臓の健康を高める",
    description: "毎日の歩数を記録して、時間をかけて心肺の健康を高めましょう。",
  },
  howTo: {
    name: "安静時心拍数で体力区分を確認する方法",
    description:
      "年齢と安静時心拍数を入れると、心肺の体力レベルとKarvonenトレーニングゾーンが出ます。",
    steps: [
      {
        name: "年齢と安静時心拍数を入力",
        text: "安静時心拍数は朝いちばん、カフェインの前、まだベッドに横になったまま測ります。",
      },
      {
        name: "体力区分を確認",
        text: "年齢ごとの安静時心拍数の範囲から、アスリートから低いまで体力の位置がわかります。",
      },
      {
        name: "Karvonenゾーンを確認",
        text: "安静時心拍数に合わせた5つの心拍トレーニングゾーンも返ります。",
      },
    ],
  },
};

export default ja;

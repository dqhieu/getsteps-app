import type { PaceToSpeedConverterMessages } from "./en";

const ja: PaceToSpeedConverterMessages = {
  meta: {
    title: "ペース速度変換 — min/km、min/mile、km/h、mph",
    description:
      "ランニングのペースと速度をすぐに相互変換します。min/kmからkm/h、min/mileからmph、どのペースでも5Kと10Kのタイムがわかります。",
    keywords: [
      "ペース 速度 変換",
      "キロ ペース km/h",
      "ランニングペース 計算",
      "ペースを速度に変換",
      "min/km を mph",
      "ランニング速度 変換",
      "ペース 変換",
    ],
    ogTitle: "ペース速度変換 — min/km、min/mile、km/h、mph",
    ogDescription:
      "ランニングのペースと速度をすぐに相互変換します。min/kmからkm/h、min/mileからmph、どのペースでも5Kと10Kのタイムがわかります。",
    ogImageAlt: "ペース速度変換",
  },
  hero: {
    title: "ペース速度変換",
    subtitle:
      "ランニングペース（min/km、min/mile）と速度（km/h、mph）をすぐに変換します。",
  },
  intro:
    "ペースか速度を一つ入れると、ほかの単位がすぐに更新されます。5Kと10Kの目安タイムと、30分・60分で走れる距離も出ます。",
  calculator: {
    title: "どれか一つ入力して変換",
    paceKm: "ペース（min/km）",
    paceMile: "ペース（min/mile）",
    speedKmh: "速度（km/h）",
    speedMph: "速度（mph）",
    distanceTitle: "進む距離",
    min30: "30分",
    min60: "60分",
    raceTitle: "フィニッシュタイム",
    referenceTitle: "参考ペース",
    activityColumn: "活動",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "行を押すとそのペースを読み込みます",
    races: {
      "5k": "5K",
      "10k": "10K",
    },
    activities: {
      walking: "歩く",
      jogging: "ジョギング",
      running: "走る",
      fast: "速い走り",
      sprint: "スプリント",
    },
  },
  faqTitle: "ペースと速度の質問",
  faq: [
    {
      question: "min/kmをkm/hに変換するには？",
      answer:
        "60をmin/kmのペースで割ります。たとえば5:00/kmなら60 ÷ 5 = 12 km/hです。より遅い6:00/kmなら60 ÷ 6 = 10 km/hです。",
    },
    {
      question: "km/hでよいランニングペースは？",
      answer:
        "軽いジョグ: 7–9 km/h、普通の走り: 9–12 km/h、速い走り: 12–16 km/h、エリートのマラソンペース: 18 km/h以上です。趣味のランナーの多くは8–11 km/hです。",
    },
    {
      question: "min/kmをmin/mileに変換するには？",
      answer:
        "min/kmのペースに1.60934を掛けるとmin/mileになります。たとえば5:00/km × 1.60934 = 8:03/mileです。この変換は自動で行います。",
    },
    {
      question: "30分の5Kはどの速度ですか？",
      answer:
        "30分の5Kには6:00/kmが必要で、10.0 km/h、6.2 mphです。しっかりした趣味ランのペースです。",
    },
    {
      question: "ペースと速度の違いは何ですか？",
      answer:
        "ペースは距離あたりの時間（例: min/km）で、小さいほど速いです。速度は時間あたりの距離（例: km/h）で、大きいほど速いです。単位が逆なだけで、表しているものは同じです。",
    },
  ],
  cta: {
    title: "Stepsでランと歩数を記録しましょう。",
    description: "ペース、距離、1日の歩数を一つの場所で確認できます。",
  },
  howTo: {
    name: "ランニングペースを速度に変換する方法（速度からペースも）",
    description:
      "1キロあたりの分、1マイルあたりの分、km/h、mphのどれかを入れると、残りが出ます。",
    steps: [
      {
        name: "わかっている単位を選ぶ",
        text: "数値がある単位を選びます（たとえばmin/km）。",
      },
      {
        name: "値を入力",
        text: "ペースか速度を入力します。",
      },
      {
        name: "変換結果を確認",
        text: "4つの単位が一緒に更新されます。min/km、min/mile、km/h、mphです。",
      },
    ],
  },
};

export default ja;

import type { MarathonPacePredictorMessages } from "./en";

const ja: MarathonPacePredictorMessages = {
  meta: {
    title: "マラソンタイム予測: どのレース結果からでもフィニッシュを予測",
    description:
      "5Kや10Kを走りましたか？Riegelの式でマラソンとハーフマラソンのタイムをすぐに予測します。ペース表つきの無料カリキュレーターです。",
    keywords: [
      "マラソン タイム予測",
      "レースタイム 予測",
      "マラソン タイム 計算",
      "ハーフマラソン タイム予測",
      "Riegel 公式 計算",
      "マラソン 完走タイム 予測",
      "5K から マラソン タイム",
    ],
    ogTitle: "マラソンタイム予測: どのレース結果からでもフィニッシュを予測",
    ogDescription:
      "5Kや10Kを走りましたか？Riegelの式でマラソンとハーフマラソンのタイムをすぐに予測します。",
    ogImageAlt: "マラソンタイム予測",
  },
  hero: {
    title: "マラソンタイム予測",
    subtitle:
      "最近のレース結果を入れると、標準的な距離ごとのフィニッシュタイムを予測します。",
  },
  intro:
    "最近のタイムと距離を入れると、Riegelの式で5K、10K、ハーフマラソン、マラソンのタイムがすぐに出ます。レースタイム予測の基準になる式です。",
  calculator: {
    distanceLabel: "レース距離",
    customDistanceLabel: "距離（km）",
    finishTimeLabel: "フィニッシュタイム",
    hour: "時",
    minute: "分",
    second: "秒",
    invalidDistance: "有効な距離を入力してください。",
    invalidTime: "有効なタイムを入力してください。",
    predict: "タイムを予測",
    resultsTitle: "予測フィニッシュタイム",
    distanceColumn: "距離",
    timeColumn: "タイム",
    paceKmColumn: "ペース（km）",
    paceMileColumn: "ペース（mi）",
    speedColumn: "速度",
    you: "あなた",
    footnote:
      "予測はRiegelの式（疲労係数1.06）です。近い努力の最近のレースほど正確です。",
    races: {
      "5k": "5K",
      "10k": "10K",
      half: "ハーフマラソン",
      marathon: "マラソン",
      custom: "カスタム（km）",
    },
  },
  info: {
    title: "レースタイム予測について",
    faqTitle: "よくある質問",
  },
  faq: [
    {
      question: "Riegelの式はどれくらい正確ですか？",
      answer:
        "よく鍛えたランナーが近い距離を予測する場合、Riegelの式はおおよそ±5–10%に収まります。距離の差が大きいとき（たとえば5Kからマラソン）や、入力したレースが全力でないときは精度が下がります。",
    },
    {
      question: "Riegelの式とは何ですか？",
      answer:
        "T2 = T1 × (D2/D1)^1.06です。T1はわかっているタイム、D1はその距離、D2は目標の距離、T2は予測タイムです。指数1.06は、距離が長くなるほど疲労の影響が大きくなることを表します。",
    },
    {
      question: "5Kからマラソンを予測できますか？",
      answer:
        "できますが、精度は下がります。式は、入力した距離が目標に近いほどよく働きます。マラソンなら、最近の10Kかハーフマラソンが最も信頼できます。",
    },
    {
      question: "よいマラソンタイムとはどのくらいですか？",
      answer:
        "初心者は4:30–5:30、中級は3:30–4:30、上級は3:30未満、エリートは2:30未満です。マラソンの平均完走タイムは、男性で約4:30、女性で約4:55です。",
    },
    {
      question: "この予測でペースはどう配分しますか？",
      answer:
        "目標距離のペース列を、1キロごとの作戦に使います。予測マラソンペースが5:30/kmなら、前半は少し遅く（5:35/km）、後半は前半より速く走ります。",
    },
  ],
  cta: {
    title: "Steps: Workout & Pedometerで賢く練習する",
    description:
      "Steps: Workout & Pedometerで毎日の歩数と活動を記録して、賢く練習しましょう。",
  },
  howTo: {
    name: "マラソンタイムの予測方法",
    description:
      "最近のレース距離とタイムを入れると、マラソン（および5K、10K、ハーフ）のフィニッシュを予測します。",
    steps: [
      {
        name: "わかっている距離とタイムを入力",
        text: "最近のきつい努力を使います。5K、10K、ハーフマラソン、または最近走った距離です。",
      },
      {
        name: "予測タイムを確認",
        text: "Riegelの式で、5K、10K、ハーフマラソン、マラソンのタイムを予測します。",
      },
    ],
  },
};

export default ja;

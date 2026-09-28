import type { WalkingTimeCalculatorMessages } from "./en";

const ja: WalkingTimeCalculatorMessages = {
  meta: {
    title: "ウォーキング時間の計算：1 km ≈ 12 min、1マイル ≈ 18 min",
    description:
      "1 kmはどのくらい？約12 min。1マイルは？約18 min。5 kmは？約60 min。遅い、普通、速い、とても速いペースで、どの距離でも使える無料計算機です。",
    keywords: [
      "ウォーキング 時間",
      "ウォーキング 時間 計算",
      "5km 歩く時間",
      "8km 歩く時間",
      "1マイル 歩く時間",
      "ウォーキング 距離 時間",
      "ウォーキング ペース 計算",
      "10000歩 歩く時間",
      "ウォーキング 所要時間 計算",
    ],
    ogTitle: "ウォーキング時間の計算：1 km ≈ 12 min、1マイル ≈ 18 min",
    ogDescription:
      "普通のペースで1 km ≈ 12 min、1マイル ≈ 18 min、5 km ≈ 60 min。どの距離でも使える無料計算機です。",
    ogImageAlt: "ウォーキング時間計算機",
  },
  hero: {
    title: "ウォーキング時間計算機",
    subtitle:
      "5 km、8 km、28マイルを歩くのにどれくらいかかりますか？距離を入れると、遅い、普通、速い、とても速いペースの時間がわかります。",
  },
  resultCta: {
    headline: "すべてのウォーキングを自動で記録しましょう",
    description:
      "Stepsは時間、距離、ペースをバックグラウンドで記録するので、実際のウォーキングの合計が見えます。",
  },
  stickyCta: "Stepsで歩数を記録しましょう",
  calculator: {
    title: "ウォーキング時間を計算する",
    distance: "距離",
    miles: "マイル",
    walkingSpeed: "ウォーキングの速度",
    speeds: {
      slow: { label: "遅い", description: "3.2 km/h", inline: "遅い" },
      normal: { label: "普通", description: "5.0 km/h", inline: "普通の" },
      brisk: { label: "速い", description: "6.4 km/h", inline: "速い" },
      fast: { label: "とても速い", description: "7.2 km/h", inline: "とても速い" },
    },
    includeBreaks: "休憩を含める（30 minごとに5 min）",
    walkingTime: "ウォーキングの時間",
    breaksDetail: "歩行 {walking} + 休憩 {breaks} min",
    distanceLabel: "距離",
    stepsLabel: "歩数",
    caloriesLabel: "カロリー",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "ウォーキング時間の目安",
    referenceSubtitle: "よくある距離を{pace}ペース（{speed} km/h）で歩く時間",
    colDistance: "距離",
    colTime: "時間",
    hoursMinutes: "{hours}時間{minutes}分",
    hoursOnly: "{hours}時間",
    minutesOnly: "{minutes} min",
    distances: ["1 km", "1マイル", "2 km", "3 km", "5 km", "5マイル", "10 km", "ハーフマラソン"],
  },
  info: {
    title: "ウォーキング速度の目安",
    intro:
      "速度は体力、路面、目的で変わります。ペースの違いがわかると、ウォーキングを計画しやすくなります。",
    paceTitle: "ペースの目安",
    paces: [
      {
        label: "遅い（3.2 km/h / 2 mph）:",
        text: "ゆっくりした散歩。回復や会話に向いています",
      },
      {
        label: "普通（5 km/h / 3.1 mph）:",
        text: "多くの大人の平均的なペース",
      },
      {
        label: "速い（6.4 km/h / 4 mph）:",
        text: "心拍が上がる、目的のある歩き",
      },
      {
        label: "とても速い（7.2 km/h / 4.5 mph）:",
        text: "ジョギングに近い、とても速い歩き",
      },
    ],
    faqTitle: "よくある質問",
  },
  faq: [
    {
      question: "1 km歩くのにどれくらいかかりますか？",
      answer:
        "普通のペース（5 km/h）では、1 kmは約12分です。遅いペース（3.2 km/h）では約19分、速いペース（6.4 km/h）では約9分で終わります。平均的な大人でおよそ1,300歩です。",
    },
    {
      question: "5 km歩くのにどれくらいかかりますか？",
      answer:
        "普通のペース（5 km/h）では、5 kmは約60分です。速いペース（6.4 km/h）なら約47分で歩き切れます。",
    },
    {
      question: "1マイル歩くのにどれくらいかかりますか？",
      answer:
        "1マイルは普通のペースでおよそ15〜20分です。速く歩く人は12〜15分で終わります。",
    },
    {
      question: "10,000歩歩くのにどれくらいかかりますか？",
      answer:
        "10,000歩はおよそ7〜8 km（4〜5マイル）です。普通のペースでは約1時間20〜40分です。一度に歩く必要はありません。一日のうちに分けてください。",
    },
    {
      question: "7 km歩くのにどれくらいかかりますか？",
      answer:
        "普通のペース（5 km/h）では、7 kmは約84分（1時間24分）です。速いペース（6.4 km/h）なら約66分で終わります。平均的な大人でおよそ9,100歩です。",
    },
    {
      question: "8 km歩くのにどれくらいかかりますか？",
      answer:
        "8 kmは普通のペース（5 km/h）で約96分（1時間36分）、速いペースで約75分です。およそ10,400歩です。",
    },
    {
      question: "ウォーキングの時間に休憩を含めるべきですか？",
      answer:
        "30分を超えるウォーキングでは、短い休憩が体力を保ち、疲れにくくします。このオプションをオンにすると、歩く30分ごとに5分の休憩を加えられます。",
    },
  ],
  precomputedTitle: "計算済みのウォーキング時間",
  precomputed: [
    "10,000歩歩く時間",
    "5マイル歩く時間",
    "3マイル歩く時間",
    "1マイル歩く時間",
  ],
  allConversions: "すべての換算 →",
  cta: {
    title: "ウォーキングを自動で記録しましょう",
    description:
      "Stepsアプリをダウンロードすると、ウォーキングの時間、距離、ペースを自動で記録できます。",
  },
  howTo: {
    name: "ウォーキング時間計算機の使い方",
    description:
      "距離とペースを入力すると、分単位の推定時間がわかります。キロメートル、マイル、歩数に対応しています。",
    steps: [
      {
        name: "距離を入力する",
        text: "歩く予定の距離を入力します。キロメートルとマイルを切り替えたり、歩数を入力したりできます。",
      },
      {
        name: "ペースを選ぶ",
        text: "遅い（3.2 km/h）、普通（5 km/h）、速い（6.4 km/h）、とても速い（7.2 km/h）から選びます。普通は典型的な大人の初期値です。",
      },
      {
        name: "ウォーキング時間を読む",
        text: "その距離を各ペースで歩く推定分数と、合計歩数の推定が表示されます。",
      },
    ],
  },
};

export default ja;

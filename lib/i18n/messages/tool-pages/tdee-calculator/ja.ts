import type { TdeeCalculatorMessages } from "./en";

const ja: TdeeCalculatorMessages = {
  meta: {
    title: "TDEE計算機 — 1日の総消費エネルギーと必要カロリー",
    description:
      "1日の総消費エネルギー（TDEE）と基礎代謝量（BMR）を計算します。減量、維持、筋肉増加のための1日のカロリーがわかります。",
    keywords: [
      "TDEE 計算",
      "総消費エネルギー 計算",
      "カロリー計算",
      "BMR 計算",
      "1日何カロリー食べる",
      "維持カロリー 計算",
      "1日の必要カロリー",
    ],
    ogTitle: "TDEE計算機 — 1日の総消費エネルギーと必要カロリー",
    ogDescription:
      "1日の総消費エネルギー（TDEE）と基礎代謝量（BMR）を計算します。減量、維持、筋肉増加のための1日のカロリーがわかります。",
  },
  hero: {
    title: "TDEE計算機",
    subtitle: "体の数値と活動量から、1日に消費するカロリーを計算します。",
  },
  intro:
    "性別、年齢、体重、身長、活動量を入力すると、1日の総消費エネルギー（TDEE）、体が1日に消費するカロリーがわかります。目標に合ったカロリーの目安に使ってください。",
  calculator: {
    details: "あなたの情報",
    gender: "性別",
    male: "男性",
    female: "女性",
    age: "年齢",
    years: "歳",
    weight: "体重",
    height: "身長",
    activityLevel: "活動量",
    activity: {
      sedentary: "ほぼ運動しない",
      light: "軽い活動",
      moderate: "中程度の活動",
      active: "活動的",
      very_active: "非常に活動的",
    },
    calculate: "TDEEを計算",
    results: "結果",
    bmr: "BMR",
    bmrUnit: "安静時 cal/日",
    tdee: "TDEE",
    tdeeUnit: "合計 cal/日",
    calorieGoals: "カロリー目標",
    maintenanceBadge: "維持",
    belowMinimum: "最低を下回る",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "積極的な減量", weekly: "−1 kg / 週" },
      moderate_loss: { label: "中程度の減量", weekly: "−0.5 kg / 週" },
      mild_loss: { label: "ゆるやかな減量", weekly: "−0.25 kg / 週" },
      maintenance: { label: "維持", weekly: "0 kg / 週" },
      mild_gain: { label: "ゆるやかな増量", weekly: "+0.25 kg / 週" },
      muscle_gain: { label: "筋肉増加", weekly: "+0.5 kg / 週" },
    },
  },
  faqTitle: "TDEEとカロリーの質問",
  faq: [
    {
      question: "TDEEとは何ですか？",
      answer:
        "TDEEは1日の総消費エネルギー、体が1日に消費するカロリーの合計です。基礎代謝量BMR（安静時のカロリー）、身体活動で使うエネルギー、食事誘発性熱産生（消化で消費するカロリー）を含みます。減量、維持、筋肉増加のカロリー目標を決めるうえで、いちばん大事な数字です。",
    },
    {
      question: "TDEEの精度はどのくらいですか？",
      answer:
        "Mifflin-St Jeor式のTDEE計算機は、多くの人で10〜15%以内の精度です。遺伝、筋肉量、ホルモン、代謝適応で真の値はずれます。結果を出発点にして2〜3週間体重を追い、実際の変化に合わせて摂取を100〜200カロリー増減してください。",
    },
    {
      question: "BMRとTDEEの違いは何ですか？",
      answer:
        "BMR（基礎代謝量）は完全な安静時に体が消費するカロリーで、呼吸、循環、細胞の修復を保つ最小のエネルギーです。TDEEはBMRに、身体活動、運動、消化の消費を足したものです。TDEEは必ずBMRより高く、カロリー目標にはこちらを使います。",
    },
    {
      question: "減量するにはTDEEより何カロリー減らせばよいですか？",
      answer:
        "週0.25〜0.5 kgの持続可能な減量には、TDEEより1日250〜500カロリー低い不足が推奨されます。それより大きい不足は、筋肉の減少、栄養不足、代謝適応を招くことがあります。医学的な管理がない限り、女性は1日1,200カロリー未満、男性は1,500カロリー未満にしないのが一般的です。中程度の不足に毎日の歩数を足すほうが、制限だけより効果的なことが多いです。",
    },
    {
      question: "TDEEは年齢で変わりますか？",
      answer:
        "はい。20歳以降、TDEEは10年ごとにおよそ1〜2%下がります。主な理由は筋肉量の減少（サルコペニア）です。筋肉は代謝が活発で、安静時に脂肪組織より多くのカロリーを消費します。筋力トレーニングと活動的な生活は、この低下をかなり遅らせます。ホルモンの変化、特に閉経期は、女性のTDEEを下げることもあります。",
    },
  ],
  cta: {
    title: "TDEEを自然に上げる",
    description: "毎日の歩数を足して、TDEEを自然に上げましょう。Stepsアプリで記録できます。",
  },
  howTo: {
    name: "1日の総消費エネルギーを計算する方法",
    description:
      "年齢、性別、体重、身長、活動量を入力すると、Mifflin-St Jeor式でBMRとTDEEが出ます。",
    steps: [
      {
        name: "年齢、性別、体重、身長を入力する",
        text: "Mifflin-St Jeor式に必要な入力です。一般の人に最も正確とされる式です。",
      },
      {
        name: "活動量を選ぶ",
        text: "ほぼ運動しない（デスクワーク）、軽い活動（週1〜3日の運動）、中程度（週3〜5日）、非常に活動的（週6〜7日）、またはそれ以上です。",
      },
      {
        name: "BMRとTDEEを読む",
        text: "計算機は基礎代謝量BMR（安静で生命を保つカロリー）と、1日の総消費エネルギーTDEE（体重を維持するカロリー）を返します。",
      },
    ],
  },
};

export default ja;

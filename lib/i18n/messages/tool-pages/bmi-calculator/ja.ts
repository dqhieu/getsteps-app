import type { BmiCalculatorMessages } from "./en";

const ja: BmiCalculatorMessages = {
  meta: {
    title: "BMIカリキュレーター — 体格指数を計算",
    description:
      "体格指数（BMI）を計算し、健康的な体重の範囲に入っているかを確認できます。健康の目安と歩数の提案も表示します。",
    keywords: [
      "BMI カリキュレーター",
      "体格指数",
      "BMI 計算",
      "健康体重 計算",
      "BMI 表",
      "身長別 体重",
      "BMI 分類",
      "健康的なBMI",
    ],
    ogTitle: "BMIカリキュレーター",
    ogDescription: "体格指数（BMI）を計算し、健康的な体重の範囲に入っているかを確認できます。",
  },
  hero: {
    title: "BMIカリキュレーター",
    subtitle: "体格指数を計算して体重の区分を知り、あなた向けの健康の目安を確認します。",
  },
  calculator: {
    measurements: "あなたの数値",
    weight: "体重",
    height: "身長",
    yourBmi: "あなたのBMI",
    healthyRange: "健康的な体重の範囲",
    recommendedSteps: "おすすめの1日の歩数",
    aboveRange: "身長に対する健康的な体重の範囲より {amount} 上回っています。",
    belowRange: "身長に対する健康的な体重の範囲より {amount} 下回っています。",
    categoriesTitle: "BMIの区分",
    categoriesSubtitle: "成人向けのWHOによるBMI分類",
    categoryColumn: "区分",
    rangeColumn: "BMIの範囲",
    categories: {
      underweight: "低体重",
      normal: "普通",
      overweight: "過体重",
      "obese-1": "肥満（I度）",
      "obese-2": "肥満（II度）",
      "obese-3": "肥満（III度）",
    },
  },
  info: {
    title: "BMIとは",
    intro:
      "体格指数（BMI）は、身長と体重から体脂肪の目安と体重の区分を見る簡単な計算です。体重区分のスクリーニングとして広く使われています。",
    formulaTitle: "計算式",
    formula: "BMI = 体重 (kg) ÷ 身長 (m)²",
    exampleLabel: "例:",
    example: "体重70 kg、身長1.75 mの人は BMI = 70 ÷ (1.75 × 1.75) = 22.9",
    faqTitle: "よくある質問",
  },
  faq: [
    {
      question: "健康的なBMIはどれくらいですか？",
      answer:
        "多くの成人では18.5から24.9が健康的とされます。ただしBMIは筋肉量、骨密度、脂肪の分布を見ないので、健康を判断する要素の一つです。",
    },
    {
      question: "BMIは誰にでも正確ですか？",
      answer:
        "筋肉量の多いアスリート、高齢者、体型によっては正確でないことがあります。便利なスクリーニングですが、ほかの健康指標と合わせて見てください。",
    },
    {
      question: "BMIを改善するには？",
      answer:
        "健康的な範囲の外にあるときは、続けられる変化を優先します。毎日のウォーキングなどの運動、バランスの取れた食事、十分な睡眠です。個人の助言は医療の専門家に相談してください。",
    },
    {
      question: "BMIに合わせて何歩歩けばよいですか？",
      answer:
        "健康的なBMIを保つ目安は1日10,000歩です。減量が目的なら12,000歩以上を検討してください。今の歩数から始め、週に1,000歩ずつ増やします。",
    },
    {
      question: "子どものBMIは違いますか？",
      answer:
        "はい。子どもと10代のBMIは計算方法が異なり、年齢と性別のパーセンタイルと比べます。このカリキュレーターは18歳以上の成人向けです。子どもは小児科医に相談してください。",
    },
  ],
  cta: {
    title: "健康の記録をつけましょう",
    description: "Stepsアプリで毎日の活動を記録し、より健康的な体重に近づけます。",
  },
  howTo: {
    name: "BMIの計算方法",
    description:
      "体格指数（BMI）は、身長と体重から体組成の区分を推定します。成人の区分はCDCに基づきます。",
    steps: [
      {
        name: "身長を入れます",
        text: "身長をセンチメートル、またはフィート／インチで入れます。",
      },
      {
        name: "体重を入れます",
        text: "体重をキログラム、またはポンドで入れます。",
      },
      {
        name: "BMIと区分を確認します",
        text: "BMIの値とCDCの健康区分（低体重、標準、過体重、肥満）を、それぞれの短い説明つきで返します。",
      },
    ],
  },
};

export default ja;

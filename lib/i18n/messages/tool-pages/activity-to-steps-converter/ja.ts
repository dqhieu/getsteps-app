import type { ActivityToStepsMessages } from "./en";

const ja: ActivityToStepsMessages = {
  meta: {
    title: "アクティビティを歩数に換算 — どんな運動も歩数に変換",
    description:
      "サイクリング、水泳、ヨガ、ローイングなど10種類以上の運動を相当歩数に換算します。歩数チャレンジや活動量の記録に使えます。",
    keywords: [
      "アクティビティ 歩数 換算",
      "運動を歩数に変換",
      "サイクリング 歩数 換算",
      "水泳 歩数 換算",
      "歩数換算カリキュレーター",
      "ウォーキング以外の歩数",
    ],
    ogTitle: "アクティビティを歩数に換算 — どんな運動も歩数に変換",
    ogDescription:
      "サイクリング、水泳、ヨガ、ローイングなど10種類以上の運動を相当歩数に換算します。歩数チャレンジや活動量の記録に使えます。",
    ogImageAlt: "アクティビティ歩数換算",
  },
  hero: {
    title: "アクティビティを歩数に換算",
    subtitle:
      "サイクリング、水泳、ヨガなどの運動を、歩数チャレンジや目標のための相当歩数に換算します。",
    intro:
      "アクティビティと時間を入れると、相当歩数がすぐにわかります。10種類の運動をMETの値で正確に換算します。",
  },
  appCta: {
    headline: "あらゆる活動を歩数として自動で数えます",
    description:
      "Stepsは日中の動きをバックグラウンドで記録し、手入力なしで活動を相当歩数に変えます。",
  },
  stickyCta: "Stepsで歩数を記録",
  calculator: {
    yourActivity: "あなたのアクティビティ",
    activityType: "アクティビティの種類",
    duration: "時間（分）",
    intensity: "強度",
    intensities: {
      low: "低",
      medium: "中",
      high: "高",
    },
    calorieToggle: "カロリー計算用（任意）",
    bodyWeight: "体重",
    equivalentSteps: "相当歩数",
    equivalentFor: "{activity} {duration} minの相当歩数",
    walkingTime: "ウォーキング時間",
    minutes: "{minutes} min",
    distance: "距離",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "カロリー",
    kcal: "kcal",
    metNote: "MET（メッツ、運動の代謝当量）の値で計算しています",
    activities: {
      cycling: "サイクリング",
      swimming: "水泳",
      elliptical: "エリプティカル",
      rowing: "ローイング",
      jump_rope: "縄跳び",
      dancing: "ダンス",
      yoga: "ヨガ",
      basketball: "バスケットボール",
      hiking: "ハイキング",
      pilates: "ピラティス",
    },
  },
  info: {
    title: "相当歩数のしくみ",
  },
  faq: [
    {
      question: "アクティビティの歩数はどう計算しますか？",
      answer:
        "この換算はMET（メッツ、運動の代謝当量）を使います。運動科学で使う強度の標準です。普通のペースのウォーキングはMET 3.5で、1分あたりおよそ100歩です。各アクティビティのMETをウォーキングと比べて相当歩数を出します。たとえばMET 7.0（ウォーキングの2倍）なら、1分あたりの相当歩数も2倍になります。",
    },
    {
      question: "サイクリングはウォーキングの歩数と同じですか？",
      answer:
        "はい。中強度のサイクリング30分（MET 約6.8）は、ペースによっておよそ7,000〜9,000歩に相当します。高強度の競技サイクリングなら、30分で14,000歩以上になることもあります。歩数計はこれを実際の歩数としては数えませんが、歩数チャレンジでは公平な比較になります。",
    },
    {
      question: "水泳は歩数に入りますか？",
      answer:
        "水泳は、多くのアプリや歩数計では歩数として記録されません。それでも中強度の水泳30分（MET 約7.0）は、およそ6,000〜8,000歩に相当します。手入力ができるチャレンジでは、この換算で泳いだ分を数えられます。",
    },
    {
      question: "なぜ運動を歩数に換算するのですか？",
      answer:
        "職場やアプリの歩数チャレンジは歩数で進みを測りますが、サイクリング、水泳、ヨガは位置情報の歩数が少なくなりがちです。ウォーキング以外の活動を相当歩数にすると、公平に参加でき、1日の活動量を追え、違う運動の負荷を同じ尺度で比べられます。",
    },
  ],
  related: [
    { title: "歩数からカロリーのカリキュレーター", href: "/tools/steps-to-calories-calculator" },
    { title: "1日の歩数目標カリキュレーター", href: "/tools/daily-step-goal-calculator" },
    { title: "ウォーキングのカロリーカリキュレーター", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "健康の記録をつけましょう",
    description: "Stepsアプリで、日々の活動と歩数を自動で記録できます。",
  },
  howTo: {
    name: "アクティビティを相当歩数に換算する方法",
    description:
      "アクティビティの種類、時間、強度を入れると、1日の目標に対する相当歩数がわかります。",
    steps: [
      {
        name: "アクティビティを選びます",
        text: "サイクリング、水泳、ヨガ、筋力トレーニングなど、数十種類に対応しています。",
      },
      {
        name: "時間と強度を入れます",
        text: "分数と、軽い・中程度・激しいの強度を選びます。",
      },
      {
        name: "相当歩数を確認します",
        text: "METの値から相当歩数を返します。実際に歩いていなくても、1日の歩数目標に近づけます。",
      },
    ],
  },
};

export default ja;

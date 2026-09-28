import type { LandingMessages } from "./en";

const ja: LandingMessages = {
  hero: {
    iconAlt: "Steps アプリアイコン",
    titleLead: "一歩一歩が、カウントされる。",
    titleAccent: "すべての節目が、見える。",
    subtitle:
      "iPhone と Apple Watch のための、美しくシンプルな歩数計・ワークアウトトラッカー。Apple Health と連携します。",
    freeDownload: "無料ダウンロード",
  },
  trust: {
    featuredIn: "掲載メディア",
    videoAria: "YouTube で Erick the Architect 主演の Appreciation を見る",
    videoTitle: "APPRECIATION",
    videoCredit: "主演 Erick the Architect",
    lovedBy: "1万人以上のウォーカーに愛用されています",
    fiveStars: "5つ星のうち5",
  },
  spotlights: {
    "route-3d": {
      eyebrow: "1.27 の新機能",
      title: "3Dルート再生",
      description:
        "シネマティックな3D追従カメラでアクティビティのルートを再生。地図のスタイルと再生速度を選んで、ワークアウトを自分らしく振り返れます。",
    },
    "ai-coach": {
      eyebrow: "Apple Intelligence",
      title: "AIコーチ",
      description:
        "ワークアウトごとのパーソナルなフィードバックと、どんなアクティビティについても話せるチャット。端末上の Apple Intelligence で動きます。",
    },
    stepboard: {
      eyebrow: "友だちと競う",
      title: "Stepboard",
      description:
        "友だちとの毎日のランキング。非公開ボードを作り、getsteps.app/join のリンクで招待して、歩数か距離で順位をつけられます。",
    },
    "apple-watch": {
      eyebrow: "手首の上で",
      title: "Apple Watch ワークアウト",
      description:
        "手首からワークアウトを開始して記録。GPSルート、ライブの指標、iPhone へのリアルタイムミラーリングに対応しています。",
    },
  },
  spotlightImageAlt: "Steps アプリの{title}",
  yearly: {
    badge: "だれでも無料",
    title: "あなたの1年をふりかえる",
    subtitle: "フィットネスの1年を、シェアできるカラフルなビジュアルに。",
    cards: {
      receipt: {
        title: "フィットネスレシート",
        description: "1年の記録を、あなただけのレシートに",
      },
      tickets: {
        title: "達成チケット",
        description: "節目の達成を、航空券のように",
      },
      stamps: {
        title: "パスポートスタンプ",
        description: "たどり着いた節目ごとにスタンプを集める",
      },
    },
  },
  features: {
    title: "ほかに欲しいものも、そろっています",
    subtitle: "iPhone と Apple Watch のためにネイティブで作り、Apple Health と連携します。",
    healthBadgeAlt: "Apple Health に対応",
    grid: {
      LineChart: { title: "見やすいグラフ", description: "時間・週・月で表示" },
      Flame: { title: "目標と連続記録", description: "毎日のモチベーションに" },
      LayoutGrid: { title: "ホーム画面ウィジェット", description: "ホーム画面用ウィジェット 10種" },
      Lock: { title: "アプリロック", description: "目標までアプリをブロック" },
      Route: { title: "GPX 書き出し", description: "ワークアウトのルートを書き出して共有" },
      HeartPulse: { title: "Apple Health 同期", description: "正確な自動記録" },
    },
    recordsTitle: "自己ベスト {count} 項目",
    records: {
      Zap: "最速ペース",
      Flame: "最多カロリー",
      Sunrise: "最も早いスタート",
      Mountain: "最大標高",
      Timer: "最長時間",
      Ruler: "最長距離",
      Moon: "最も遅い夜",
      HeartPulse: "最大心拍数",
    },
    workoutsTitle: "ワークアウト {count} 種類",
    workouts: {
      Footprints: "ランニング",
      PersonStanding: "ウォーキング",
      Bike: "サイクリング",
      Mountain: "ハイキング",
      Waves: "水泳",
      Dumbbell: "筋力トレーニング",
      Flower2: "ヨガ",
      CircleDot: "ピックルボール",
    },
    moreWorkouts: "ほか15種",
  },
  privacy: {
    title: "データは、初期設定では端末の中に",
    body: "健康データは端末内に保存され、許可したときだけ Apple HealthKit から安全に読み取られます。Stepboard のランキングに参加すると、選んだ指標が順位のために同期されます。",
  },
  cta: {
    title: "一歩ずつ、記録する準備はできましたか？",
    footnote: "ずっと無料 · アカウント不要 · Pro 機能あり",
  },
  stepboard: {
    sectionLabel: "Stepboard コミュニティの合計歩数",
    counterLabel: "Steps コミュニティが歩いた歩数 {total}",
    footer: "Stepboard メンバーが歩いた合計歩数",
  },
};

export default ja;

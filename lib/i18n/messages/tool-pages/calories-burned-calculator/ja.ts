import type { CaloriesBurnedMessages } from "./en";

const ja: CaloriesBurnedMessages = {
  meta: {
    title: "消費カロリーカリキュレーター: 50種類以上、MET基準",
    description:
      "ウォーキングからHIITまで50種類以上の消費カロリーを計算します。70 kgの成人はランニング30分で360カロリー、ウォーキングで129カロリーです。無料のMETカリキュレーターです。",
    keywords: [
      "消費カロリー カリキュレーター",
      "カロリー消費 計算",
      "運動 カロリー 計算",
      "ワークアウト カロリー",
      "アクティビティ カロリー",
      "ランニング 消費カロリー",
      "サイクリング 消費カロリー",
      "水泳 消費カロリー",
      "MET カリキュレーター",
      "何カロリー消費したか",
    ],
    ogTitle: "消費カロリーカリキュレーター: 50種類以上、MET基準",
    ogDescription:
      "Compendium of Physical ActivitiesのMETで、50種類以上の消費カロリーを計算します。",
    ogImageAlt: "消費カロリーカリキュレーター",
  },
  hero: {
    title: "消費カロリーカリキュレーター",
    subtitle:
      "ゆっくり歩くところからHIITまで、50種類以上の消費カロリーです。Compendium of Physical ActivitiesのMETを使い、総消費と活動が実際に足した分を分けます。",
  },
  appCta: {
    headline: "ワークアウトを一つずつ見積もるのをやめましょう",
    description:
      "Stepsは一日の動きをバックグラウンドで数え、活動を選ばずに消費カロリーの累計にします。",
  },
  stickyCta: "Stepsで歩数を記録",
  calculator: {
    pickActivity: "アクティビティを選ぶ",
    category: "カテゴリ",
    activity: "アクティビティ",
    activityOption: "{name} · {met} MET",
    yourWeight: "体重",
    duration: "時間",
    durationPreset: "{minutes} min",
    minutes: "min",
    calculate: "消費カロリーを計算",
    yourResults: "結果",
    caloriesBurned: "消費カロリー",
    resultMeta: "{activity} · {duration} min · {met} MET",
    netBurn: "純消費",
    aboveResting: "安静時を上回る分",
    perHour: "1時間あたり",
    calories: "カロリー",
    stepEquivalent: "相当歩数",
    steps: "歩数",
    bodyFat: "体脂肪",
    grams: "グラム",
    walkingEquivalent: {
      one: "同じ消費なら、中程度のウォーキング約{minutes}分、およそ{steps}歩です。",
      other: "同じ消費なら、中程度のウォーキング約{minutes}分、およそ{steps}歩です。",
    },
    comparison: "同じ{duration}分、別のアクティビティ",
    cal: "{calories} cal",
    categories: {
      "Walking & Running": "ウォーキングとランニング",
      Cycling: "サイクリング",
      "Gym & Strength": "ジムと筋力",
      Sports: "スポーツ",
      Water: "水上・水中",
      "Outdoor & Winter": "屋外と冬",
      "Home & Daily": "家事と日常",
    },
    activities: {
      "walking-slow": "ウォーキング、ゆっくり（3.2 km/h）",
      "walking-moderate": "ウォーキング、中程度（5 km/h）",
      "walking-brisk": "ウォーキング、速歩（6.4 km/h）",
      "walking-uphill": "上り坂のウォーキング（5 km/h、勾配5%）",
      hiking: "クロスカントリーのハイキング",
      stairs: "階段の上り",
      jogging: "ジョギング（8 km/h）",
      "running-10": "ランニング（10 km/h）",
      "running-12": "ランニング（12 km/h）",
      "running-16": "ランニング（16 km/h）",
      "cycling-light": "サイクリング、軽め（16–19 km/h）",
      "cycling-moderate": "サイクリング、中程度（19–22 km/h）",
      "cycling-vigorous": "サイクリング、強め（22–25 km/h）",
      "cycling-stationary": "エアロバイク、中程度",
      spinning: "スピニング",
      "weight-light": "ウェイトトレーニング、軽め",
      "weight-vigorous": "ウェイトトレーニング、強め",
      circuit: "サーキットトレーニング",
      hiit: "HIIT",
      elliptical: "エリプティカル",
      "rowing-machine": "ローイングマシン、中程度",
      yoga: "ヨガ、ハタ",
      pilates: "ピラティス",
      stretching: "ストレッチ",
      "jump-rope": "縄跳び、中程度",
      basketball: "バスケットボール、試合",
      soccer: "サッカー、カジュアル",
      tennis: "テニス、シングルス",
      badminton: "バドミントン、カジュアル",
      golf: "ゴルフ、クラブを持って歩く",
      volleyball: "バレーボール、カジュアル",
      "boxing-bag": "ボクシング、サンドバッグ",
      "martial-arts": "格闘技",
      "table-tennis": "卓球",
      "swimming-leisure": "水泳、ゆっくり",
      "swimming-freestyle": "水泳、クロール中程度",
      "swimming-vigorous": "水泳、クロール強め",
      "water-aerobics": "水中エアロビクス",
      kayaking: "カヤック",
      surfing: "サーフィン",
      "skiing-downhill": "スキー、中程度の滑降",
      "skiing-cross": "クロスカントリースキー",
      snowboarding: "スノーボード",
      "ice-skating": "アイススケート",
      "rock-climbing": "ロッククライミング、登攀",
      rucking: "荷物を背負ったハイキング",
      cleaning: "家の掃除、中程度",
      gardening: "ガーデニング",
      mowing: "芝刈り、手押し式",
      "shovelling-snow": "雪かき",
      "grocery-shopping": "食料品の買い物",
      childcare: "子どもと元気に遊ぶ",
      "desk-work": "デスクワーク、座位",
    },
  },
  info: {
    title: "消費カロリーの計算方法",
    intro:
      "各アクティビティにはMETがあります。座っているときの何倍のエネルギーかです。数値は2011年のCompendium of Physical Activitiesから取っています。研究者がまさにこの目的で使う資料です。",
    formulaTitle: "計算式",
    perMinuteLabel: "1分あたりのカロリー",
    perMinute: "= MET × 3.5 × 体重 (kg) ÷ 200",
    netLabel: "純カロリー",
    net: "= 総量 × (MET − 1) ÷ MET。安静にしていても使っていたエネルギーを除きます",
    oneMet: "1 MET = 3.5 ml O₂/kg/min。安静時の酸素摂取量です",
    exampleLabel: "例:",
    example:
      "70 kgで10 km/hのランニングは9.8 METなので、12.0 cal/min、30分で360カロリー、うち323が純消費です。",
    walkingNote:
      "結果はウォーキングの分と歩数にも換算します。10 km/hで30分走ることは、中程度のウォーキング約84分、およそ8,400歩です。一日を歩数で追うなら、カロリーだけの数字より役立ちます。",
  },
  faqTitle: "よくある質問",
  faq: [
    {
      question: "消費カロリーはどう計算しますか？",
      answer:
        "METで計算します。1 METは安静時代謝で、体重1 kgあたり1分に酸素3.5 mlと定義されます。8 METの活動はその8倍です。式は、1分のカロリー = MET × 3.5 × 体重 kg ÷ 200です。70 kgの成人が10 km/hで走る（9.8 MET）と1分約12カロリー、30分で360カロリーです。",
    },
    {
      question: "総カロリーと純カロリーの違いは何ですか？",
      answer:
        "総カロリーは活動中に消費したすべてで、ソファに座っていても使っていた安静時の分を含みます。純カロリーは活動が足した分だけです。30分のランニングでは差は約10%ですが、低強度ではずっと大きく、30分のウォーキングは総量129、純量92になることがあります。運動をカロリー予算に入れるなら、正直な数字は純量です。TDEEは安静時の分をすでに数えています。",
    },
    {
      question: "METの推定はどのくらい正確ですか？",
      answer:
        "多くの人でおよそ10〜15%以内です。代謝測定装置を使わない範囲ではほぼ上限です。METは集団の平均なので、効率、体力、体組成は見えません。同じペースでも、動きが経済的な熟練ランナーは未経験者より少なく消費します。結果は測定ではなく、良い推定として扱ってください。",
    },
    {
      question: "トラッカーの数字が違うのはなぜですか？",
      answer:
        "多くの腕時計型はMETではなく心拍数から推定します。心拍数は努力だけでなく、暑さ、カフェイン、ストレス、脱水にも反応します。トラッカーは総カロリーを出すことが多く、カロリーアプリは純カロリーを期待します。ジムのマシンはさらにずれやすく、標準の体重を仮定して消費を15〜25%多めに出すことがよくあります。",
    },
    {
      question: "体重で消費カロリーは変わりますか？",
      answer:
        "大きく、比例して変わります。カロリーは体重に直線で比例するので、90 kgの人は70 kgの人より、同じ活動を同じ時間すると約29%多く消費します。だから体重が重い人は同じメニューでも最初の減量が早く見えやすく、軽くなるほど消費は減ります。",
    },
    {
      question: "いちばんカロリーを使う活動はどれですか？",
      answer:
        "1分あたりでは速いランニング、縄跳び、格闘技が上位で、およそ11〜14.5 METです。ただし合計は強度×時間なので順位は変わります。14 METを数分以上続けられる人は少なく、5 METのウォーキングは1時間でも楽です。速歩1時間は、10分のスプリントに勝ちます。",
    },
    {
      question: "ウォーキングはランニングと比べて何カロリーですか？",
      answer:
        "ランニングは1分あたりおよそ2倍です。70 kgの成人では、中程度のウォーキング（3.5 MET）が1分約4.3カロリー、10 km/hのランニング（9.8 MET）が約12カロリーです。現実的に比べると差は縮みます。ウォーキング60分は258カロリー、初心者が実際に続けられるランニング20分は240カロリーです。",
    },
  ],
  cta: {
    title: "すべてのカロリーを自動で記録",
    description:
      "Stepsアプリなら、記録しなくても一日中バックグラウンドで歩数と消費カロリーを数えられます。",
  },
  howTo: {
    name: "消費カロリーの計算方法",
    description:
      "アクティビティ、体重、時間を入れると、Compendium of Physical ActivitiesのMETで消費カロリーがわかります。",
    steps: [
      {
        name: "カテゴリとアクティビティを選びます",
        text: "ウォーキングとランニング、スポーツなどのカテゴリから具体的な活動を選びます。各項目にMETが表示されます。",
      },
      {
        name: "体重を入れます",
        text: "消費カロリーは体重に直接比例するので、いちばん重要な入力です。キログラムとポンドを切り替えられます。",
      },
      {
        name: "時間を決めます",
        text: "15分から90分のプリセットを使うか、正確な数字を入力します。",
      },
      {
        name: "総カロリーと純カロリーを確認します",
        text: "総カロリー、安静時を上回る純カロリー、1時間あたり、ウォーキングと歩数の換算、同じ時間のほかの活動との比較表を返します。",
      },
    ],
  },
};

export default ja;

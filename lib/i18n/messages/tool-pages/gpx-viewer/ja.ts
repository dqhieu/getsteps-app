import type { GpxViewerMessages } from "./en";

const ja: GpxViewerMessages = {
  meta: {
    title: "GPXビューア — GPXファイルを無料でオンライン表示 | Steps",
    description:
      "GPXファイルを無料でアップロードして表示できます。標高グラフ、距離、速度、経由点、ルートデータをインタラクティブな地図で確認できます。登録は不要です。",
    keywords: [
      "GPXビューア",
      "GPXリーダー",
      "GPXファイル 表示",
      "GPXファイル 見る",
      "GPXファイル 読み込み",
      "GPXビューア オンライン",
      "GPXファイル オンライン",
      "GPXファイル 開く",
      "GPX 開き方",
      "GPX解析",
      "GPXエディタ",
    ],
    ogTitle: "GPXビューア — GPXファイルを無料でオンライン表示",
    ogDescription:
      "GPXファイルをインタラクティブな地図に表示します。標高グラフ、距離、速度、経由点データも確認できます。",
    ogImageAlt: "GPXビューア — GPXファイルをオンラインで表示",
  },
  hero: {
    title: "GPXビューア — GPXファイルをオンラインで表示",
    subtitle:
      "GPXファイルをアップロードして表示します。インタラクティブな地図にトラック、標高グラフ、距離、速度、経由点を出します。",
  },
  intro:
    ".gpxファイルをドロップすると、ルートがすぐに地図に表示されます。Strava、Garmin、Apple Watch、Komootなど、どのGPS機器やアプリのファイルでも使えます。",
  tool: {
    dropTitle: "GPXファイルをここにドロップ",
    dropHint: "またはクリックして選択",
    dropFormats: "Strava、Garmin、Apple Watchなどの.gpxファイルに対応",
    errors: {
      notGpx: ".gpxファイルをアップロードしてください",
      noTrack: "このGPXファイルにトラックデータがありません",
      parse: "GPXファイルを解析できませんでした。形式を確認してください。",
    },
    newFile: "新しいファイル",
    points: {
      one: "{count}地点",
      other: "{count}地点",
    },
    waypoints: {
      one: "{count}経由点",
      other: "{count}経由点",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "距離",
      duration: "時間",
      avgSpeed: "平均速度",
      maxSpeed: "最高速度",
      elevationGain: "獲得標高",
      elevationLoss: "下降標高",
      maxElevation: "最高標高",
      minElevation: "最低標高",
    },
    na: "なし",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "標高グラフ",
    waypointsTitle: "経由点（{count}）",
    waypointFallback: "経由点 {n}",
    start: "スタート",
    end: "ゴール",
  },
  about: {
    title: "GPXファイルとは",
    p1: "GPX（GPS Exchange Format）は、GPSデータを保存する標準のXML形式です。トラック、ルート、経由点の緯度、経度、標高、時刻が入っています。Garmin、Strava、Apple Watch、Komoot、AllTrailsなど、ほぼすべてのGPS機器とフィットネスアプリで使われます。",
    p2: "ランニングやサイクリングのルート記録、ハイキングコースの計画、ルートの共有、獲得標高・距離・ペースの分析に使います。この無料ビューアは、ソフトを入れずにブラウザだけでGPXファイルを開けます。",
  },
  faqTitle: "よくある質問",
  faq: [
    {
      question: "GPXファイルはどう開けますか？",
      answer:
        "上の領域に.gpxファイルをドロップするか、クリックしてファイルを選んでください。ビューアがすぐに解析し、距離、標高、速度などの数値とともにトラックをインタラクティブな地図に表示します。処理はすべてブラウザ内で行われ、サーバーには何も送信されません。",
    },
    {
      question: "GPXファイルには何が入っていますか？",
      answer:
        "GPXファイルには3種類のデータがあります。トラック（GPSが記録した経路）、ルート（計画した経路）、経由点（個別の地点）です。各地点には緯度と経度があり、標高と時刻が含まれることもあります。これで距離、速度、獲得標高と下降標高、所要時間を計算できます。",
    },
    {
      question: "フィットネスアプリからGPXを書き出すには？",
      answer:
        "ほとんどのフィットネスアプリはGPXの書き出しに対応しています。Stravaではアクティビティを開き、メニューからGPXの書き出しを選びます。Garmin Connectではアクティビティを開き、歯車アイコンから書き出します。Apple WatchではStepsか他のツールでワークアウトをGPXとして書き出します。お使いのアプリの設定や書き出し項目を確認してください。",
    },
    {
      question: "GPXデータは非公開のままですか？",
      answer:
        "はい。このビューアはJavaScriptでファイルをブラウザ内だけで処理します。GPXデータがサーバーに送られることも、保存されることもありません。ページを閉じればデータは消えます。個人のルートや位置情報を見るのに安全です。",
    },
    {
      question: "GPXファイルを作るアプリは？",
      answer:
        "Strava、Garmin Connect、Apple Watch（Stepsや他のアプリ経由）、Komoot、AllTrails、MapMyRun、Runkeeper、Suunto、Polar、Wahoo、Corosなど、多くのGPS・フィットネスアプリがGPXを作ります。GarminやWahooなどのGPS機器からも書き出せます。",
    },
  ],
  cta: {
    title: "StepsでGPXを記録して書き出す",
    description:
      "iPhoneとApple WatchのStepsでワークアウトを記録し、GPXファイルをそのまま書き出せます。",
  },
  howTo: {
    name: "GPXファイルをオンラインで見る方法",
    description:
      "GPXファイルをアップロードすると、距離、所要時間、ペース、標高つきでルートがインタラクティブな地図に表示されます。",
    steps: [
      {
        name: "GPXファイルをドロップ",
        text: ".gpxファイルをブラウザにドラッグするか、クリックして端末から選びます。",
      },
      {
        name: "地図と数値を確認",
        text: "ビューアがルートをインタラクティブな地図に描き、総距離、獲得標高、所要時間、平均ペースを出します。",
      },
      {
        name: "経由点と標高をたどる",
        text: "地図か標高グラフにカーソルを合わせると、各地点の速度と標高がわかります。",
      },
    ],
  },
};

export default ja;

import type { GpxViewerMessages } from "./en";

const zh: GpxViewerMessages = {
  meta: {
    title: "GPX 查看器——免费在线打开 GPX 文件 | Steps",
    description:
      "免费上传并查看 GPX 文件。在交互地图上查看轨迹、海拔剖面、距离、速度、航点和路线数据。无需注册。",
    keywords: [
      "gpx 查看器",
      "gpx 阅读器",
      "gpx 文件查看",
      "查看 gpx 文件",
      "gpx 文件阅读器",
      "在线 gpx 查看器",
      "在线查看 gpx",
      "打开 gpx 文件",
      "gpx 文件打开",
      "gpx 分析",
      "gpx 编辑器",
    ],
    ogTitle: "GPX 查看器——免费在线查看 GPX 文件",
    ogDescription: "上传 GPX 文件，在交互地图上查看海拔剖面、距离、速度和航点。",
    ogImageAlt: "GPX 查看器——在线查看 GPX 文件",
  },
  hero: {
    title: "GPX 查看器——在线查看 GPX 文件",
    subtitle: "上传并查看 GPX 文件。在交互地图上显示轨迹、海拔剖面、距离、速度和航点。",
  },
  intro:
    "把任意 .gpx 文件拖进来，路线立刻出现在地图上。支持 Strava、Garmin、Apple Watch、Komoot，以及其他 GPS 设备或应用导出的文件。",
  tool: {
    dropTitle: "把 GPX 文件拖到这里",
    dropHint: "或点击选择文件",
    dropFormats: "支持来自 Strava、Garmin、Apple Watch 等的 .gpx 文件",
    errors: {
      notGpx: "请上传 .gpx 文件",
      noTrack: "这个 GPX 文件里没有轨迹数据",
      parse: "无法解析 GPX 文件。请检查文件格式。",
    },
    newFile: "换一个文件",
    points: {
      one: "{count} 个点",
      other: "{count} 个点",
    },
    waypoints: {
      one: "{count} 个航点",
      other: "{count} 个航点",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "距离",
      duration: "时长",
      avgSpeed: "平均速度",
      maxSpeed: "最高速度",
      elevationGain: "累计爬升",
      elevationLoss: "累计下降",
      maxElevation: "最高海拔",
      minElevation: "最低海拔",
    },
    na: "无",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "海拔剖面",
    waypointsTitle: "航点（{count}）",
    waypointFallback: "航点 {n}",
    start: "起点",
    end: "终点",
  },
  about: {
    title: "什么是 GPX 文件？",
    p1: "GPX（GPS Exchange Format）是保存 GPS 数据的标准 XML 格式。它记录轨迹、路线和航点的纬度、经度、海拔和时间。Garmin、Strava、Apple Watch、Komoot、AllTrails 等几乎所有 GPS 设备和健身应用都使用它。",
    p2: "常见用途包括记录跑步或骑行路线、规划徒步、分享路线，以及分析爬升、距离和配速。这个免费查看器让你直接在浏览器里打开任意 GPX 文件，不用安装软件。",
  },
  faqTitle: "常见问题",
  faq: [
    {
      question: "怎么打开 GPX 文件？",
      answer:
        "把 .gpx 文件拖到上方区域，或点击选择文件。查看器会立刻解析，并在交互地图上显示轨迹，以及距离、海拔和速度。文件完全在浏览器里处理，不会上传到任何服务器。",
    },
    {
      question: "GPX 文件里有什么数据？",
      answer:
        "GPX 保存三类数据：轨迹（GPS 记录的路径）、路线（计划的导航路径）和航点（单独的兴趣点）。每个点包含纬度和经度，有时还有海拔和时间。据此可以计算距离、速度、爬升和时长。",
    },
    {
      question: "怎么从健身应用导出 GPX？",
      answer:
        "大多数健身应用都支持导出 GPX。在 Strava 中打开一条活动，选择“Export GPX”。在 Garmin Connect 中进入活动，点击齿轮图标导出。在 Apple Watch 上，可以用 Steps 或第三方工具把锻炼导出为 GPX。具体入口在各应用的设置或导出选项里。",
    },
    {
      question: "我的 GPX 数据安全吗？",
      answer:
        "安全。这个查看器用 JavaScript 在你的浏览器里处理文件。GPX 数据不会上传，也不会被保存。关掉页面后，数据就没有了。查看个人路线和位置是安全的。",
    },
    {
      question: "哪些应用会生成 GPX 文件？",
      answer:
        "大多数 GPS 和健身应用都会生成 GPX，包括 Strava、Garmin Connect、Apple Watch（通过 Steps 或第三方应用）、Komoot、AllTrails、MapMyRun、Runkeeper、Suunto、Polar、Wahoo、Coros 等。Garmin、Wahoo 及同类品牌的 GPS 设备也可以导出 GPX。",
    },
  ],
  cta: {
    title: "用 Steps 记录并导出 GPX",
    description: "在 iPhone 和 Apple Watch 上用 Steps 记录锻炼，并直接导出 GPX 文件。",
  },
  howTo: {
    name: "如何在线查看 GPX 文件",
    description: "上传任意 GPX 文件，在交互地图上查看路线，以及距离、时长、配速和海拔。",
    steps: [
      {
        name: "放入 GPX 文件",
        text: "把 .gpx 文件拖进浏览器，或点击从设备中选择。",
      },
      {
        name: "查看地图和数据",
        text: "查看器会在交互地图上画出路线，并显示总距离、累计爬升、时长和平均配速。",
      },
      {
        name: "浏览航点和海拔",
        text: "在地图或海拔图上悬停，查看每个点的速度和海拔。",
      },
    ],
  },
};

export default zh;

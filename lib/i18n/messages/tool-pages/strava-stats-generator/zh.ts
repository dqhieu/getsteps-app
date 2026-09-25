import type { StravaStatsGeneratorMessages } from "./en";

const zh: StravaStatsGeneratorMessages = {
  meta: {
    title: "Strava 数据卡片生成器——免费训练统计图 | Steps",
    description:
      "把 Strava 跑步记录做成透明统计贴图，用在 Instagram Stories。填写距离和时间，自动计算配速，免费下载 1080x1080 透明 PNG。",
    keywords: [
      "strava 数据生成器",
      "strava 训练数据",
      "strava 统计贴图",
      "透明训练数据 png",
      "跑步数据 instagram 贴图",
      "训练数据图片",
      "分享跑步数据",
      "instagram 故事跑步数据",
    ],
    ogTitle: "Strava 数据卡片生成器——透明训练贴图",
    ogDescription:
      "把 Strava 跑步记录做成透明统计贴图，用在 Instagram Stories。距离、移动时间和自动配速，免费下载 PNG。",
    ogImageAlt: "Strava 数据卡片生成器——免费训练统计图",
  },
  hero: {
    title: "Strava 数据卡片生成器",
    subtitle:
      "把刚记下的跑步做成透明统计贴图，放进你的 Story。填写距离和时间——我们算出配速，给你一张可以直接叠在照片上的免费 PNG。",
  },
  tool: {
    workout: "你的训练",
    distance: "距离",
    switchToMiles: "切换到英里",
    switchToKilometers: "切换到公里",
    movingTime: "移动时间（MM:SS 或 H:MM:SS）",
    durationPlaceholder: "52:30",
    paceHint: "配速会根据距离和时间自动计算。",
    overlay: "你的贴图",
    overlayAria: "训练数据贴图：{distance} {distanceUnit}，{time}，{pace} {paceUnit}",
    saved: "已保存！",
    download: "下载透明 PNG",
    downloadHint:
      "1080×1080，背景透明——可以直接叠在 Instagram Stories 的照片上。全部在浏览器里完成，不会上传任何内容。",
    canvas: {
      distance: "距离",
      pace: "配速",
      time: "时间",
    },
  },
  inlineCta: {
    headline: "记下 Strava 漏掉的步数",
    description:
      "Steps 读取 iPhone 和 Apple Watch 的每一步，并和你的跑步放在一起——还有连续记录、趋势和免费的年度回顾。",
  },
  about: {
    title: "为什么用透明贴图？",
    p1: "照片才是这条动态的主角。你在折返点或终点拍的那张，才是别人想看的——一块实心数据卡片会把它盖住。透明 PNG 保留照片，只把最要紧的三个数字叠上去：距离、移动时间和配速，尺寸在手机上也能看清。",
    p2: "跑步、走路、骑行都可以用，不管你记在 Strava、Garmin Connect、Apple Watch、Nike Run Club，还是根本没开记录的跑步机上。填上你做了什么，几秒就能出图——不用账号，不用邮箱，没有水印。",
  },
  faqTitle: "常见问题",
  faq: [
    {
      question: "怎么用 Strava 跑步记录做一张数据贴图？",
      answer:
        "在 Strava 里打开那条活动，看清距离和移动时间，填到上面的表单里。配速会自动算好。点下载，保存一张只含这三个数据的透明 PNG。",
    },
    {
      question: "怎么把贴图放到照片上？",
      answer:
        "打开 Instagram Stories，选好要发的照片。点贴纸按钮，选择照片贴纸，再选刚下载的 PNG。背景是透明的，所以只有文字落在图片上——捏合调整大小，拖到合适的位置。TikTok、Snapchat 以及支持图层的修图应用也可以这样用。",
    },
    {
      question: "这个工具和 Strava 有关系吗？",
      answer:
        "没有。这是 Steps 的免费工具，与 Strava 没有附属、背书或关联。它根据你填写的数字生成原创、无品牌的图，不是 Strava 活动页面的复制品。",
    },
    {
      question: "配速是怎么算的？",
      answer:
        "配速是移动时间除以距离，按你选的单位显示为每公里或每英里的分和秒。10 km 跑 52:30，配速就是每公里 5:15。你不用自己填配速，它始终由距离和时间得出。",
    },
    {
      question: "图片是多大？",
      answer:
        "1080×1080 像素，1:1 正方形，可以当信息流帖子，也能叠在 Stories 或 TikTok 照片上再捏合调整。数据居中，放在哪个位置都容易读。",
    },
    {
      question: "为什么背景是透明的？",
      answer:
        "这样贴图是叠在你已经拍好的照片上，而不是换掉它。实心卡片会挡住跑步照片；透明 PNG 让数据浮在上面。文字带一点投影，在雪地或天空这类亮背景上也能看清。",
    },
    {
      question: "我的训练数据会上传吗？",
      answer:
        "不会。贴图在浏览器里用画布绘制，并直接保存到你的设备。你输入的内容不会发送、存储或记录。",
    },
    {
      question: "Strava 会显示步数吗？",
      answer:
        "不会。Strava 记录距离、时间和配速，但不统计你一天的步数。如果想把步数和跑步放在一起看，Steps 会读取 iPhone 和 Apple Watch 的步数，并显示在训练旁边。",
    },
  ],
  disclaimer:
    "Steps 与 Strava 没有附属、背书或关联。Strava 是 Strava, Inc. 的商标。这里生成的贴图是根据你填写的数字制作的原创图形。",
  howTo: {
    name: "如何制作透明的训练数据贴图",
    description:
      "填写一次跑步的距离和移动时间，下载透明 PNG，再叠到你自己的照片上，发到 Instagram Stories。",
    steps: [
      {
        name: "填写距离和移动时间",
        text: "输入完成的距离，并在公里和英里之间切换，再按 MM:SS 或 H:MM:SS 填写移动时间。",
      },
      {
        name: "下载透明 PNG",
        text: "配速由距离和时间算出。点下载，保存一张没有背景的 1080x1080 PNG——只有这三个数据。",
      },
      {
        name: "叠到照片上",
        text: "在 Instagram Stories 里选好照片，点贴纸按钮，选择照片贴纸，再选这张 PNG。画面上只出现数据——捏合调整大小并拖到合适位置。",
      },
    ],
  },
};

export default zh;

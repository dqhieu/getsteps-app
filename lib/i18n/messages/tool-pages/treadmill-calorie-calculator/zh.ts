import type { TreadmillCalorieCalculatorMessages } from "./en";

const zh: TreadmillCalorieCalculatorMessages = {
  meta: {
    title: "跑步机卡路里计算器：含坡度的免费计算",
    description:
      "按速度、坡度和体重计算跑步机卡路里。155 lb 的成人在平地 3 mph 走 30 分钟约消耗 120 cal，5% 坡度约 200 cal。基于 ACSM 的免费计算器。",
    keywords: [
      "跑步机卡路里计算器",
      "跑步机消耗卡路里",
      "跑步机坡度卡路里",
      "跑步机燃烧卡路里",
      "跑步机步行卡路里",
      "坡度跑步机卡路里",
      "12-3-30 消耗卡路里",
      "ACSM 代谢公式",
      "跑步机 MET",
    ],
    ogTitle: "跑步机卡路里计算器：含坡度的免费计算",
    ogDescription: "按速度、坡度、体重和时长计算跑步机卡路里。使用 ACSM 代谢公式的免费计算器。",
    ogImageAlt: "跑步机卡路里计算器",
  },
  hero: {
    title: "跑步机卡路里计算器",
    subtitle:
      "根据速度、坡度、体重和时长计算你在跑步机上消耗的卡路里。使用 ACSM 代谢公式，坡度会被正确计入，而不是被忽略。",
  },
  calculator: {
    session: "你的跑步机训练",
    weight: "体重",
    speed: "速度",
    incline: "坡度：{percent}%",
    duration: "时长",
    minutes: "分钟",
    caloriesBurned: "消耗的卡路里",
    kcalValue: "{value} kcal",
    inclineAdds: "{grade}% 坡度比同一组平地训练多消耗 {extra} kcal（平地为 {flat} kcal）。",
    met: "MET",
    distance: "距离",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "估计步数",
    fatBurned: "脂肪消耗",
    grams: "{value} g",
    equation: "使用 ACSM {gait}代谢公式（{vo2} ml/kg/min VO₂）。",
    gaitWalking: "步行",
    gaitRunning: "跑步",
    tableTitle: "各坡度的卡路里",
    tableSubtitle: "体重、速度和时长相同，只改变坡度。",
    colIncline: "坡度",
    colMet: "MET",
    colCalories: "卡路里",
    colVsFlat: "相对平地",
    vsFlat: "+{percent}%",
  },
  resultCta: {
    headline: "记录你实际消耗的卡路里",
    description: "Steps 在后台计算每一步，并换成你每天真实消耗的卡路里，无需手动记录。",
  },
  info: {
    title: "我们如何计算跑步机卡路里",
    intro:
      "单个 MET 值无法描述跑步机运动，因为坡度会改变每个速度下的能量消耗。我们使用 ACSM 代谢公式，分别根据速度和坡度估算摄氧量，再换算成卡路里。",
    formulaTitle: "公式",
    formulas: [
      { strong: "步行 VO₂", rest: "= (0.1 × S) + (1.8 × S × G) + 3.5" },
      { strong: "跑步 VO₂", rest: "= (0.2 × S) + (0.9 × S × G) + 3.5" },
      {
        strong: "",
        rest: "S 是速度，单位为米/分钟；G 是坡度的小数形式（5% = 0.05）。VO₂ 单位为 ml/kg/min。",
      },
      { strong: "MET", rest: "= VO₂ ÷ 3.5，并且 kcal/min = MET × 3.5 × 体重(kg) ÷ 200" },
      {
        strong: "示例：",
        rest: "70 kg、5 km/h、5% 坡度的 VO₂ 为 19.3，约 5.5 MET，大约每小时 405 kcal。",
      },
    ],
    note: "步行公式适用于 6.5 km/h 以下，跑步公式适用于该速度及以上，这是大多数人从快走过渡到慢跑的区间。估算假设你没有扶着扶手。",
  },
  faqTitle: "常见问题",
  faq: [
    {
      question: "在跑步机上 30 分钟消耗多少卡路里？",
      answer:
        "70 kg（155 lb）的成人在平地以 5 km/h（3.1 mph）走 30 分钟大约消耗 125 卡路里。坡度提到 5%，同一组大约 205 卡路里。10% 时更接近 285。坡度比你能改的任何其他设置都更重要。",
    },
    {
      question: "坡度真的会消耗更多卡路里吗？",
      answer:
        "会，而且幅度很大。每 1% 坡度都在水平移动之外增加垂直做功。步行速度下，5% 坡度比平地大约提高 60% 的能量消耗，10% 坡度可以超过一倍，速度和时长都不变。",
    },
    {
      question: "12-3-30 训练消耗多少卡路里？",
      answer:
        "12-3-30 指 12% 坡度、3 mph、30 分钟。70 kg 的成人大约消耗 300 卡路里，而同样 30 分钟、3 mph 的平地大约只有 120 卡路里。坡度承担了大部分工作：大约占总消耗的 60%。",
    },
    {
      question: "跑步机自己的卡路里读数准吗？",
      answer:
        "通常不准。大多数机器假设一个默认体重，并忽略你在面板上输入的体重，显示值通常会高估 15% 到 25%。基于你的实际体重、速度和坡度的计算更可靠。",
    },
    {
      question: "坡度步行和平地跑步，哪个消耗更多卡路里？",
      answer:
        "它们可以相当，但需要较陡的坡度。5 km/h、12% 坡度的步行约 8.5 MET，基本等于平地 8 km/h 慢跑（8.6 MET）。较缓的 10% 坡度是 7.7 MET，略低一些。坡度步行的优势是能量消耗相近，关节冲击却低得多。",
    },
    {
      question: "我应该扶着扶手吗？",
      answer:
        "如果目标是消耗卡路里，不要扶。扶着扶手会把一部分体重转移到手臂，实际能量消耗可能降低 20% 到 25%，坡度越陡越明显，而面板仍按没有扶持的数字显示。",
    },
  ],
  cta: {
    title: "记录你的跑步机训练",
    description: "下载 Steps 应用，自动记录你的步行、消耗的卡路里和长期进展。",
  },
  sticky: "用 Steps 记录你的步数",
};

export default zh;

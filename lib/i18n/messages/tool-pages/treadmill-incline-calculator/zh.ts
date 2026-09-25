import type { TreadmillInclineCalculatorMessages } from "./en";

const zh: TreadmillInclineCalculatorMessages = {
  meta: {
    title: "跑步机坡度计算器：配速与爬升换算",
    description:
      "把跑步机坡度换算成平地配速，并查看你爬升的高度。3 mph、12% 坡度约等于平地慢跑 4.7 mph。基于 ACSM 公式的免费计算器。",
    keywords: [
      "跑步机坡度计算器",
      "跑步机配速计算器",
      "跑步机爬升计算器",
      "坡度步行卡路里计算器",
      "跑步机坡度换算表",
      "12-3-30 配速等效",
      "跑步机坡度换平地配速",
      "跑步机爬升",
    ],
    ogTitle: "跑步机坡度计算器：配速与爬升换算",
    ogDescription:
      "把任意跑步机坡度换成它对应的平地配速，并查看你爬升了多少。使用 ACSM 代谢公式的免费计算器。",
    ogImageAlt: "跑步机坡度计算器",
  },
  hero: {
    title: "跑步机坡度计算器",
    subtitle:
      "把任意坡度换成它实际对应的平地配速，并查看你爬升了多少。使用 ACSM 代谢公式，坡度按真实消耗计算，而不是大致估算。",
  },
  calculator: {
    yourSetting: "你的跑步机设置",
    beltSpeed: "跑带速度",
    incline: "坡度：{percent}%",
    duration: "时长",
    minutes: "分钟",
    effortVsFlat: "相对同一速度平地跑带的强度",
    flatBelt: "平地跑带，你的配速就是你的强度",
    between:
      "{speed}、{grade}% 坡度比任何你能持续的平地步行都更累，又还没到最慢的平地慢跑，所以没有单一的平地速度能对应它。",
    sameEffort: "强度相当于平地{gait} {speed}（{pace}）。",
    gaitWalk: "步行",
    gaitJog: "慢跑",
    kindWalk: "步行",
    kindJog: "慢跑",
    betweenLabel: "介于步行和慢跑之间",
    perKmPace: "{pace} / km",
    perMilePace: "{pace} / mi",
    yourPace: "你的配速",
    perKm: "每 km",
    perMile: "每 mi",
    met: "MET",
    distance: "距离",
    distanceValue: "{km} km / {mi} mi",
    elevationTitle: "爬升高度",
    elevationSubtitle: "{speed}、{grade}% 坡度，持续 {minutes} 分钟。",
    verticalMetres: "垂直米数",
    verticalFeet: "垂直英尺",
    storeys: "楼层",
    stairSteps: "台阶数",
    briskWalk: "若要让 {speed} 的强度达到平地 6 km/h（3.7 mph）的快走，把坡度设为 {grade}。",
    tableTitle: "各坡度的平地配速等效",
    tableSubtitle: "跑带速度固定为 {speed}，只改变坡度。",
    colIncline: "坡度",
    colFeelsLike: "体感相当于",
    colMet: "MET",
    colVsFlat: "相对平地",
    multiplier: "{value}x",
  },
  resultCta: {
    headline: "知道你的步行真正值多少",
    description: "Steps 在后台记录每一次步行，并换算成真实的距离、爬升和卡路里，无需手动记录。",
  },
  info: {
    title: "我们如何计算坡度等效",
    intro:
      "两种跑步机设置在耗氧量相同时视为等效。我们用 ACSM 代谢公式根据速度和坡度估算摄氧量，再反解平地公式，找出消耗相同的平地配速。",
    formulaTitle: "公式",
    formulas: [
      { strong: "步行 VO₂", rest: "= (0.1 × S) + (1.8 × S × G) + 3.5" },
      { strong: "跑步 VO₂", rest: "= (0.2 × S) + (0.9 × S × G) + 3.5" },
      {
        strong: "",
        rest: "S 是速度，单位为米/分钟；G 是坡度的小数形式（5% = 0.05）。VO₂ 单位为 ml/kg/min。",
      },
      {
        strong: "强度倍数",
        rest: "= 1 + 18G，由两条步行公式相等直接得出。任意坡度都成立。",
      },
      { strong: "爬升", rest: "= 跑带距离 × G" },
      {
        strong: "示例：",
        rest: "4.8 km/h、5% 坡度为 5.3 MET，强度倍数 1.9×，30 分钟爬升 120 米。",
      },
    ],
    note: "两条 ACSM 公式并不衔接：平地步行最高约 14.3 ml/kg/min，平地跑步从约 25.2 起算。中等坡度的步行落在两者之间，没有平地配速能匹配这份强度。计算器会直接说明这一点，而不是把公式外推到未经验证的范围；无论哪种情况，强度倍数仍然有意义。",
  },
  faqTitle: "常见问题",
  faq: [
    {
      question: "3 mph、12% 坡度的步行相当于多快的平地配速？",
      answer:
        "大约是 4.7 mph 的慢跑。3 mph、12% 坡度的步行耗氧约 29 ml/kg/min，大约 8.3 MET。平地上没有可持续的步行配速能达到这个强度，所以诚实的比较对象是慢跑，而不是快走。这也是 12-3-30 训练感觉比速度所显示的更累的原因。",
    },
    {
      question: "如何把跑步机坡度换算成平地配速？",
      answer:
        "强度几乎线性增加：坡度把步行的能量消耗乘以（1 + 18 × 小数形式的坡度），所以 5% 坡度大约是同一速度平地的 1.9 倍。只有结果仍落在步行范围内时，才能把这个倍数换成平地速度；按常见配速，大约是 2% 到 3.5% 以下。再高的话，强度已经超过任何可持续步行，又还没到最慢的慢跑，没有单一的平地配速能对应。",
    },
    {
      question: "在跑步机上能爬升多少高度？",
      answer:
        "垂直爬升是跑带距离乘以坡度。5 km/h 走 30 分钟是 2.5 km，10% 坡度就是 250 米垂直高度，约 820 英尺，大约 83 层楼。跑步机显示的坡度是升高量相对跑带距离的比值，本计算正是按这个定义。",
    },
    {
      question: "1% 坡度真的能模拟户外跑步吗？",
      answer:
        "这是一个合理的惯例，不是精确定律。1% 的调整来自 Jones 与 Doust 1996 年的研究：速度高于约 8 mph 时，1% 坡度的能量消耗与户外跑步相当。大多数人步行或慢跑的速度更慢，空气阻力可以忽略，0% 跑带已经接近户外强度。",
    },
    {
      question: "坡度步行比平地跑步更好吗？",
      answer:
        "若要在更低冲击下获得相近的能量消耗，是的。5 km/h、12% 坡度约 8.5 MET，基本相当于平地 8 km/h 慢跑的 8.6 MET，但地面反作用力低得多，因为双脚不会同时离开跑带。代价是坡度步行对小腿和跟腱的负荷明显更大。",
    },
    {
      question: "为什么很小的坡度就会明显改变强度？",
      answer:
        "因为垂直抬起身体比水平移动身体贵得多。在 ACSM 步行公式里，垂直项系数是 1.8，水平项是 0.1，所以每 1% 坡度大约让同一速度的步行能量消耗增加 18%。5% 接近翻倍，12% 大约是三倍。",
    },
    {
      question: "跑步机的坡度读数可信吗？",
      answer:
        "把它当作近似值。跑带校准会漂移，很多家用机器显示的是电机指令坡度，而不是实测值。承重时跑台形变也会让有效坡度略低。这里的关系仍然成立，但绝对数字会继承机器本身的误差。",
    },
  ],
  cta: {
    title: "记录你的跑步机训练",
    description: "下载 Steps 应用，自动记录你的步行、消耗的卡路里和长期进展。",
  },
  sticky: "用 Steps 记录你的步数",
  howTo: {
    name: "如何把跑步机坡度换算成平地配速",
    description: "输入跑带速度、坡度和时长，查看消耗相同的平地配速、坡度让训练难了多少，以及你爬升的高度。",
    steps: [
      {
        name: "输入跑带速度",
        text: "填写跑步机面板上的速度。可在 km/h 和 mph 之间切换，所有结果都跟随你选择的单位。",
      },
      {
        name: "设置坡度",
        text: "拖动滑块，或点选 0% 到 15% 的预设。预设覆盖大多数家用跑步机的坡度，包括 12-3-30 训练使用的 12%。",
      },
      {
        name: "输入步行时长",
        text: "以分钟计。时长不改变配速等效，但会决定距离和爬升高度。",
      },
      {
        name: "查看平地配速等效",
        text: "主数字是消耗相同氧气的平地配速。大约超过 3% 坡度后，没有步行配速能匹配，比较会改成慢跑并加以说明。",
      },
      {
        name: "查看爬升和对照表",
        text: "以垂直米、英尺、楼层和台阶查看爬升，再在等效表中比较你这个速度下的各个标准坡度。",
      },
    ],
  },
};

export default zh;

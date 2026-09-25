import type { RuckingCalorieCalculatorMessages } from "./en";

const zh: RuckingCalorieCalculatorMessages = {
  meta: {
    title: "负重徒步卡路里计算器：背包重量、地形与坡度",
    description:
      "用 Pandolf 公式，根据背包重量、配速、坡度和地形计算负重徒步卡路里。70 kg 的人背 15 kg 走一小时大约消耗 350 卡路里。免费计算器。",
    keywords: [
      "负重徒步卡路里计算器",
      "负重行军卡路里",
      "负重徒步消耗",
      "负重背心卡路里计算器",
      "背包徒步卡路里",
      "Pandolf 公式",
      "负重能量消耗",
      "背包徒步卡路里",
    ],
    ogTitle: "负重徒步卡路里计算器：背包重量、地形与坡度",
    ogDescription: "根据背包重量、配速、坡度和地形计算负重徒步消耗的卡路里。使用 Pandolf 负重公式的免费计算器。",
    ogImageAlt: "负重徒步卡路里计算器",
  },
  hero: {
    title: "负重徒步卡路里计算器",
    subtitle: "根据背包重量、配速、坡度和地形计算负重徒步消耗的卡路里。使用 Pandolf 负重公式，背上的重量会被真正计入。",
  },
  calculator: {
    yourRuck: "你的负重徒步",
    switchImperial: "切换到 lbs / mph",
    switchMetric: "切换到 kg / km/h",
    bodyWeight: "体重",
    packWeight: "背包重量",
    pace: "配速",
    duration: "时长",
    minutes: "分钟",
    grade: "坡度：{percent}%",
    terrain: "地形",
    terrains: {
      blacktop: { label: "铺装路面", inline: "铺装路面", description: "沥青路或跑步机。参考路面。" },
      gravel: { label: "碎石路", inline: "碎石路", description: "土路或碎石路，有少量灌木。" },
      trail: { label: "徒步小径", inline: "徒步小径", description: "压实的单线小径，有树根和石头。" },
      "heavy-brush": { label: "茂密灌木", inline: "茂密灌木", description: "浓密的下层植被，没有现成的路。" },
      swampy: { label: "沼泽", inline: "沼泽", description: "松软、浸透的地面，脚下会下陷。" },
      sand: { label: "松软沙地", inline: "松软沙地", description: "干燥的沙滩。常见路面里消耗最高的一种。" },
    },
    terrainFactor: "{description}地形系数 {factor}。",
    caloriesBurned: "消耗的卡路里",
    packAdds: "{load} 的背包比同样的空手步行多消耗 {extra} kcal（空手为 {unloaded} kcal）。",
    heavyLoad:
      "这个背包是你体重的 {percent}%。超过体重约三分之一的负重会明显提高受伤风险，Pandolf 模型在这个区间也最不可靠。循序增加，不要一下子加到这个重量。",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "距离",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "背包 / 体重",
    equation: "Pandolf 负重公式，{watts} 瓦，{terrain}，坡度 {grade}%。",
    tableTitle: "各背包重量的卡路里",
    tableSubtitle: "配速、坡度、地形和时长相同，只改变负重。",
    colPack: "背包",
    colCalories: "卡路里",
    colVsUnloaded: "相对空手",
    vsUnloaded: "+{percent}%",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "自动记录每一次负重徒步",
    description: "Steps 在后台记录你的距离和步数，负重徒步会和其余步行一起自动入账。",
  },
  info: {
    title: "我们如何计算负重徒步卡路里",
    intro:
      "MET 表和 ACSM 公式完全没有负重项：背包是空的还是装着 30 公斤，它们给出的消耗都一样。我们改用 Pandolf 公式，它就是为了给负重行走定价而建立的。",
    formulaTitle: "公式",
    formulas: [
      { strong: "M", rest: "= 1.5W + 2.0(W+L)(L/W)² + η(W+L)(1.5V² + 0.35VG)" },
      {
        strong: "",
        rest: "M 是代谢率，单位为瓦；W 是体重 kg；L 是负重 kg；V 是速度 m/s；G 是坡度百分比；η 是地形系数。",
      },
      { strong: "kcal/min", rest: "= 瓦 × 60 ÷ 4184" },
      { strong: "", rest: "中间一项是负重惩罚，它按 (L/W)² 增长。背包重量翻倍，这一项的增幅超过一倍。" },
      { strong: "示例：", rest: "70 kg 背 20 kg、4.8 km/h、沥青路面为 360 瓦，大约每分钟 5.2 kcal。" },
    ],
    note: "Pandolf 覆盖平地和上坡步行。下坡需要另外的 Santee 修正，所以这里把下坡按平地处理，而不是给出模型无法支持的数字。",
  },
  faqTitle: "常见问题",
  faq: [
    {
      question: "负重徒步消耗多少卡路里？",
      answer:
        "70 kg（155 lb）的人在铺装路面以 5 km/h 背 15 kg（33 lb）走一小时大约消耗 310 卡路里。同样一小时空手步行大约 265，所以背包大约贡献 45。背包重量、坡度和地形都会大幅改变这个数字，所以单一的“每小时卡路里”会误导。",
    },
    {
      question: "负重徒步比步行消耗更多卡路里吗？",
      answer:
        "是的，而且比多出来的重量本身所暗示的更多。负重的能量成本有两层：你要移动额外的质量，还要为“这重量是背着的、而不是身体的一部分”再付一笔代价。在 Pandolf 公式里，这笔代价按负重与体重之比的平方增长，所以每多一公斤都比前一公斤更贵。",
    },
    {
      question: "我应该背多重？",
      answer:
        "多数建议让初学者从体重的 10% 开始，最多逐步加到约三分之一。超过体重大约三分之一后，膝盖、下背和脚的受伤风险会急剧上升，Pandolf 模型本身也不那么可靠，因为它主要在这个比例以下得到验证。先慢慢加重，再增加距离。",
    },
    {
      question: "地形会改变负重徒步的卡路里吗？",
      answer:
        "会，而且幅度很大。Pandolf 公式用地形系数乘以移动成本：铺装路是 1.0 的参考，土路和小径大约 1.2，茂密灌木 1.5，沼泽地 1.8，松软沙地 2.1。在干燥沙滩上负重徒步的移动能耗大约是同样负重在沥青路上的两倍。",
    },
    {
      question: "什么是 Pandolf 公式？",
      answer:
        "它是计算负重代谢成本的标准模型，由 Pandolf、Givoni 和 Goldman 于 1977 年为美国陆军发表。它根据体重、负重、步行速度、坡度和地形预测以瓦为单位的代谢率。和 MET 表以及 ACSM 公式不同，它把负重当作真正的输入，而不是忽略。",
    },
    {
      question: "为什么这个计算器不接受下坡？",
      answer:
        "因为 Pandolf 公式只在平地和上坡步行上得到验证。输入负坡度会给出低得不合理的消耗：公式里下坡比平地更省，但现实中不会无限省下去。正确建模下坡需要另外的 Santee 修正，所以这个计算器把下坡按平地处理，而不是报告一个它无法负责的数字。",
    },
    {
      question: "减脂时，负重徒步比跑步更好吗？",
      answer:
        "它更容易坚持，而这通常比每分钟的强度更重要。负重徒步大约在 6 到 8 MET，取决于负重和坡度，低于大多数跑步，但冲击低，人们能承受多得多的每周总量，而不会出现让跑步周期中断的关节压力。推动减脂的是每周总能量消耗，不是单次训练的强度。",
    },
  ],
  cta: {
    title: "记录你的负重徒步",
    description: "下载 Steps 应用，自动记录你的步行、消耗的卡路里和长期进展。",
  },
  sticky: "用 Steps 记录你的步数",
  howTo: {
    name: "如何计算负重徒步卡路里",
    description: "输入体重、背包重量、配速、坡度和地形，得到消耗的卡路里，以及其中有多少来自负重。",
    steps: [
      {
        name: "输入体重和背包重量",
        text: "两者都可以用千克或磅。负重惩罚按背包与体重之比的平方增长，所以两个数字都重要，不只是背包。",
      },
      {
        name: "设置配速和时长",
        text: "负重徒步配速用 km/h 或 mph，再加上你移动了多久。两者一起决定走过的距离。",
      },
      {
        name: "加上坡度",
        text: "平均上坡坡度，以百分比计。下坡按平地处理，因为 Pandolf 公式只在平地和上坡步行上得到验证。",
      },
      {
        name: "选择地形",
        text: "从铺装路到小径、茂密灌木和松软沙地。地形会乘以移动成本，沙子是沥青路的两倍以上。",
      },
      {
        name: "查看卡路里和负重贡献",
        text: "计算器给出总卡路里、其中仅来自背包的部分、以瓦计的代谢率，以及常见负重下的卡路里表。",
      },
    ],
  },
};

export default zh;

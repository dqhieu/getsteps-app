import type { BmrCalculatorMessages } from "./en";

const zh: BmrCalculatorMessages = {
  meta: {
    title: "基础代谢率计算器：三种公式对照",
    description:
      "用 Mifflin-St Jeor、Harris-Benedict 和 Katch-McArdle 并排计算基础代谢率。一名 30 岁、75 千克的男性静息时每天大约消耗 1,699 卡。免费计算器。",
    keywords: [
      "BMR 计算器",
      "基础代谢率计算器",
      "静息代谢率",
      "Mifflin-St Jeor 公式",
      "Harris-Benedict 公式",
      "Katch-McArdle 公式",
      "静息时消耗多少热量",
      "BMR 与 TDEE",
      "代谢计算器",
    ],
    ogTitle: "基础代谢率计算器：三种公式对照",
    ogDescription: "用三种临床公式并排计算基础代谢率，并查看每个活动水平下的每日热量需求。",
    ogImageAlt: "基础代谢率计算器",
  },
  hero: {
    title: "基础代谢率计算器",
    subtitle: "看看你的身体在完全静息时消耗多少热量。三种临床公式同时计算，让你看到差值，而不是一个装作确定的数字。",
  },
  calculator: {
    details: "你的数据",
    gender: "性别",
    male: "男",
    female: "女",
    age: "年龄",
    years: "岁",
    weight: "体重",
    height: "身高",
    bodyFat: "体脂率",
    bodyFatOptional: "（可选：解锁 Katch-McArdle）",
    bodyFatPlaceholder: "例如 20",
    activity: "活动水平",
    activityLevels: {
      sedentary: "久坐",
      light: "轻度活动",
      moderate: "中度活动",
      active: "活跃",
      very_active: "非常活跃",
    },
    activityDescriptions: {
      sedentary: "办公室工作，很少或不运动",
      light: "每周轻度运动 1–3 天",
      moderate: "每周中等运动 3–5 天",
      active: "每周高强度运动 6–7 天",
      very_active: "体力工作，或每天训练两次",
    },
    calculate: "计算基础代谢率",
    results: "你的结果",
    bmr: "BMR",
    atRest: "静息每日热量",
    maintenance: "维持热量",
    maintenanceAt: "（{level}）",
    leanMass: "去脂体重：{mass}。因为你填写了体脂率，主结果使用 Katch-McArdle。",
    kgValue: "{value} kg",
    share: "即使整天坐着，基础代谢率也大约占你消耗热量的 {percent}%。",
    formulasTitle: "三种公式",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "修订版 Harris-Benedict",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin: "在现代人群中验证过。目前的临床默认公式，在不知道体脂时最可靠。",
      harris: "1919 年原版，1984 年修订。平均大约偏高 5%，因为当时的研究对象比今天的人更瘦、更活跃。",
      katch: "按去脂体重计算，不考虑性别和身高，对偏瘦或肌肉较多的人最准确。",
      katchLocked: "需要体脂率。在上面填写后即可看到这个估算。",
    },
    used: "采用",
    calValue: "{value} cal",
    byActivity: "按活动水平的每日热量",
    resultCta: {
      headline: "基础代谢率是底线，步数才是杠杆。",
      description: "静息消耗几乎挪不动，但它以上的部分可以。Steps 会自动记录日常活动，并显示它在你刚算出的数字上加了多少。",
    },
  },
  info: {
    title: "我们如何计算基础代谢率",
    intro: "临床上常用三种公式，它们的差距大到值得看见。这个计算器不会只选一个然后藏起差值，而是三种都算。",
    formulaTitle: "公式",
    formulas: [
      {
        title: "Mifflin-St Jeor（1990）",
        lines: [
          "男性：（10 × 体重 kg）+（6.25 × 身高 cm）−（5 × 年龄）+ 5",
          "女性：（10 × 体重 kg）+（6.25 × 身高 cm）−（5 × 年龄）− 161",
        ],
      },
      {
        title: "修订版 Harris-Benedict（1984）",
        lines: [
          "男性：88.362 +（13.397 × 体重）+（4.799 × 身高）−（5.677 × 年龄）",
          "女性：447.593 +（9.247 × 体重）+（3.098 × 身高）−（4.330 × 年龄）",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: ["370 +（21.6 × 去脂体重 kg），去脂体重 = 体重 ×（1 − 体脂率）"],
      },
    ],
    exampleLabel: "示例：",
    example: "一名 30 岁男性，75 kg、175 cm，Mifflin-St Jeor 为 1,699，Harris-Benedict 为 1,763。体脂 20% 时，Katch-McArdle 为 1,666。",
    primary: "除非你提供体脂率，否则主结果是 Mifflin-St Jeor；提供之后由 Katch-McArdle 接管。三种里只有它直接衡量真正决定静息消耗的组织，而不是从身高和性别推算。",
    activityFactors: "把基础代谢率乘以活动系数得到 TDEE：久坐 1.2，轻度活动 1.375，中度活动 1.55，活跃 1.725，非常活跃 1.9。计算器会列出全部五个。",
  },
  faqTitle: "常见问题",
  faq: [
    {
      question: "什么是基础代谢率？",
      answer: "基础代谢率（BMR）是身体什么都不做时消耗的能量：呼吸、血液循环、维持体温、修复细胞。测量条件是躺着、清醒、空腹 12 小时。对大多数成年人，它占每日总热量的 60% 到 75%，是消耗里最大的一块。",
    },
    {
      question: "BMR 和 RMR 有什么区别？",
      answer: "BMR 在严格实验室条件下测量：完全静息、空腹、室温中性。静息代谢率（RMR）的条件更宽松，结果大约高 10%，因为包含一点消化和轻微动作。日常里这两个词经常混用，网上的计算器，包括这个，估出来的其实更接近 RMR。",
    },
    {
      question: "哪种基础代谢率公式最准？",
      answer: "对大多数人是 Mifflin-St Jeor。它用间接测热法在现代人群中验证过，大约 80% 的成年人误差在 10% 以内。Harris-Benedict 即使是 1984 年修订版，也大约偏高 5%，因为 1919 年的研究对象更瘦、更活跃。如果你知道体脂率，Katch-McArdle 比两者都好，因为它按去脂体重计算，而这正是驱动静息消耗的组织。",
    },
    {
      question: "BMR 和 TDEE 有什么区别？",
      answer: "基础代谢率是完全静息时的消耗。TDEE（每日总能量消耗）是基础代谢率乘以活动系数，加上走动、运动和消化食物的消耗。TDEE 总是更高：即使整天久坐，也大约是 BMR 的 1.2 倍。热量目标应对着 TDEE，而不是 BMR。",
    },
    {
      question: "为了减重，我应该按基础代谢率来吃吗？",
      answer: "不应该。按 BMR 吃等于假设你整天一动不动，还没开始活动就已经有几百到一千卡的缺口。这足够让你掉肌肉，而且很多人会掉到女性 1,200 卡或男性 1,500 卡的下限以下。应该从 TDEE 里减去 250 到 500 卡。",
    },
    {
      question: "为什么我的基础代谢率比预想的低？",
      answer: "体型是主要因素，更小、更轻的人数字更低，而且每个公式都会扣年龄。身体成分也有影响：每千克肌肉的静息消耗大约是脂肪的三倍，所以体重相同的两个人可以相差 200 卡甚至更多。如果长期处于热量缺口，适应性产热可以把实际 BMR 压到预测值以下 10% 到 15%。",
    },
    {
      question: "我能提高基础代谢率吗？",
      answer: "能提高一点，但很慢。增加肌肉是唯一持久的办法：每千克肌肉静息时每天大约多消耗 13 卡，认真力量训练一年也许能多 50 到 100 卡。这是真的，但幅度不大。增加日常活动对 TDEE 的影响远大于你对 BMR 能做的任何事，所以步数比“提高代谢”的窍门见效更快。",
    },
  ],
  cta: {
    title: "记录静息以上的消耗",
    description: "下载 Steps 应用，自动计算每一步，看每日热量消耗如何叠在基础代谢率之上。",
  },
  sticky: "用 Steps 记录你的步数",
  howTo: {
    name: "如何计算基础代谢率",
    description: "输入性别、年龄、体重和身高，用三种临床公式得到基础代谢率，以及每个活动水平下的每日热量需求。",
    steps: [
      {
        name: "输入身体数据",
        text: "设置性别、年龄、体重和身高。体重可在千克和磅之间切换，身高可在厘米和英尺/英寸之间切换。",
      },
      {
        name: "如果知道体脂率，可以填上",
        text: "可选。填写后会解锁 Katch-McArdle，它按去脂体重计算，对偏瘦或肌肉较多的人最准确。",
      },
      {
        name: "选择活动水平",
        text: "从久坐到非常活跃。这不会改变基础代谢率，但决定高亮哪一个维持热量。",
      },
      {
        name: "查看基础代谢率和维持热量",
        text: "计算器会给出基础代谢率、三种公式的并排结果，以及五个活动水平各自的每日总热量。",
      },
    ],
  },
};

export default zh;

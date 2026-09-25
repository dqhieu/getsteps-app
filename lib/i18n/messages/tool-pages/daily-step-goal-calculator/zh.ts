import type { DailyStepGoalCalculatorMessages } from "./en";

const zh: DailyStepGoalCalculatorMessages = {
  meta: {
    title: "每日步数目标计算器 - 个性化步数建议",
    description: "根据你的年龄、活动水平和健康目标，获得个性化的每日步数目标。了解你每天应该走多少步。",
    keywords: [
      "每日步数目标",
      "我每天应该走多少步",
      "按年龄的步数目标",
      "每天推荐步数",
      "个性化步数目标",
      "步数目标计算器",
      "每日步行目标",
      "减肥步数",
    ],
    ogTitle: "每日步数目标计算器",
    ogDescription: "根据你的年龄、活动水平和健康目标，获得个性化的每日步数目标。",
    ogImageAlt: "每日步数目标计算器",
  },
  hero: {
    title: "每日步数目标计算器",
    subtitle: "根据你的年龄、当前活动水平和健康目标，获得个性化的每日步数建议。",
  },
  resultCta: {
    headline: "自动达成你的每日步数目标",
    description: "Steps 在后台记录步数，无需手动填写，帮你真正达到上面的目标，并养成长期习惯。",
  },
  stickyCta: "用 Steps 记录你的步数",
  calculator: {
    yourProfile: "你的资料",
    age: "年龄",
    years: "岁",
    gender: "性别",
    male: "男",
    female: "女",
    activityLevel: "当前活动水平",
    activity: {
      sedentary: "久坐",
      lightly_active: "轻度活动",
      active: "活跃",
      very_active: "非常活跃",
    },
    healthGoal: "健康目标",
    goals: {
      maintain: "保持健康",
      lose_weight: "减重",
      improve_fitness: "提升体能",
      train_event: "为赛事训练",
    },
    currentSteps: "当前每日步数（可选）",
    currentStepsPlaceholder: "例如 5000",
    currentStepsHint: "填写你的日均步数，以获得更个性化的建议",
    resultTitle: "为你推荐的每日步数目标",
    stepsValue: "{steps} 步",
    perDay: "每天",
    weeklyGoal: "每周目标",
    distancePerDay: "每天距离",
    caloriesPerDay: "每天热量",
    kmValue: "{distance} km",
    approxCalories: "约 {calories}",
    planTitle: "8 周进阶计划",
    planSubtitle: "用每周里程碑，逐步达到你的目标",
    weekLabel: "第 {week} 周",
    tipsTitle: "达成目标的建议",
    tips: {
      sedentary: [
        "先从午休时走 10 分钟开始",
        "走楼梯，少坐电梯",
        "把车停得离入口远一点",
      ],
      lightlyActive: [
        "在日常安排里加上 15 分钟晨走",
        "打电话时边走边说",
      ],
      loseWeight: [
        "步行配合均衡饮食，效果更好",
        "尽量保持较快配速，以消耗更多热量",
      ],
      improveFitness: [
        "逐渐提高你的配速",
        "加入一些坡道或爬楼梯",
      ],
      trainEvent: [
        "遵循循序渐进的训练计划",
        "安排休息日用于恢复",
      ],
      general: [
        "每天记录步数，保持动力",
        "找一个步行伙伴，互相督促",
      ],
    },
  },
  info: {
    title: "理解步数目标",
    intro:
      "合适的步数目标取决于你的个人情况。10,000 步是常见目标，但研究表明，健康收益会因年龄和体能不同而出现在不同的步数上。",
    ageTitle: "按年龄推荐的步数",
    ages: [
      { label: "儿童与青少年（18 岁以下）：", steps: "每天 12,000-15,000 步" },
      { label: "成年人（18-64 岁）：", steps: "每天 10,000-12,000 步" },
      { label: "老年人（65 岁及以上）：", steps: "每天 7,000-10,000 步" },
    ],
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "每天必须走 10,000 步吗？",
      answer:
        "不必。10,000 步并不是一个神奇数字。近期研究表明，显著的健康收益大约从每天 7,000-8,000 步开始。关键是比你现在更活跃。",
    },
    {
      question: "减重要走多少步？",
      answer:
        "如果目标是减重，建议每天走 12,000 步以上，并配合均衡饮食。这每天可以额外消耗大约 400-600 千卡。坚持比每天都刚好达到某个数字更重要。",
    },
    {
      question: "怎样增加每日步数？",
      answer:
        "在当前平均步数上，每周增加 1,000 步。开会时走动、把车停远一点、走楼梯而不是坐电梯，并在一天中安排几次短时步行。",
    },
    {
      question: "如果达不到目标怎么办？",
      answer:
        "活动量的任何增加都有好处。如果目标显得太高，就把它调到你能坚持的水平。最好的目标是你能长期保持的目标。关注进步，而不是完美。",
    },
  ],
  cta: {
    title: "追踪你的步数目标",
    description: "下载 Steps 应用，设定每日目标、查看进度，并养成健康的步行习惯。",
  },
  howTo: {
    name: "如何确定你的每日步数目标",
    description: "输入年龄、性别、体重、身高、活动水平和目标，获得个性化的每日步数目标。",
    steps: [
      {
        name: "填写你的资料",
        text: "填写年龄、性别、体重和身高。计算器会用这些信息估算基础能量消耗。",
      },
      {
        name: "选择当前活动水平",
        text: "选择久坐、轻度活动、中度活动或非常活跃。请如实填写——目标会从你现在的水平出发。",
      },
      {
        name: "选择你的目标",
        text: "选项包括一般健身、减重、心血管健康和长寿。每一种都采用有研究依据的步数目标。",
      },
      {
        name: "查看每日步数目标",
        text: "计算器会给出个性化的每日步数目标、每周总量，以及在你起点较低时的进阶计划。",
      },
    ],
  },
};

export default zh;

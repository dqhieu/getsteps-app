import type { IdealWeightCalculatorMessages } from "./en";

const zh: IdealWeightCalculatorMessages = {
  meta: {
    title: "理想体重计算器：4 种公式加上健康 BMI 范围",
    description:
      "Devine、Robinson、Miller 与 Hamwi 并列，并给出健康 BMI 区间。一名 175 cm 的男性结果在 68.7 到 72 kg 之间。免费理想体重计算器。",
    keywords: [
      "理想体重计算器",
      "理想体重计算",
      "健康体重计算器",
      "我应该多重",
      "Devine 公式",
      "Robinson 公式",
      "Hamwi 公式",
      "按身高计算理想体重",
      "健康体重范围",
    ],
    ogTitle: "理想体重计算器：4 种公式加上健康 BMI 范围",
    ogDescription: "四种临床理想体重公式并列，并给出你身高对应的健康 BMI 范围。",
  },
  hero: {
    title: "理想体重计算器",
    subtitle: "四种临床公式并列，旁边是健康 BMI 范围。看它们差多少，是这个计算器最有用的地方。",
  },
  calculator: {
    details: "你的数据",
    gender: "性别",
    male: "男",
    female: "女",
    height: "身高",
    currentWeight: "当前体重",
    optional: "（可选）",
    placeholderKg: "例如 78",
    placeholderLbs: "例如 172",
    calculate: "计算理想体重",
    results: "你的结果",
    formulaAverage: "公式平均值",
    range: "范围 {min}–{max}",
    healthyBmiRange: "健康 BMI 范围",
    to: "至 {weight}",
    verdictWithin: "你的体重处在该身高的健康 BMI 范围内。公式平均值只是这个区间里的一个点，不是必须达到的目标。",
    verdictAbove: "你的体重比该身高的健康 BMI 范围高出 {amount}。",
    verdictBelow: "你的体重比该身高的健康 BMI 范围低 {amount}。",
    fourFormulas: "四种公式",
    disclaimer:
      "四种公式只看身高和性别。它们不考虑肌肉量和骨架，所以肌肉较多的身体在每个公式上都会偏高。健康 BMI 范围更有用：它是一个区间，不是单一目标。",
    formulas: {
      devine: {
        name: "Devine",
        note: "引用最广，至今仍是药物剂量的默认公式。为计算用药剂量而写，不是为身材目标而写。",
      },
      robinson: {
        name: "Robinson",
        note: "用更大样本修订 Devine。在身高较高时，结果低于 Devine。",
      },
      miller: {
        name: "Miller",
        note: "四种里最平：身高对结果影响最小，所以矮个子偏高、高个子偏低。",
      },
      hamwi: {
        name: "Hamwi",
        note: "四种里最老，为糖尿病护理而设。每英寸增重最陡，所以在身高较高时结果最高。",
      },
    },
  },
  resultCta: {
    headline: "习惯才会推动这个数字。",
    description: "Steps 会自动记录你的日常活动，帮你建立真正能在几个月里改变体重的持续性。",
  },
  sticky: "用 Steps 记录你的步数",
  info: {
    title: "我们如何计算理想体重",
    intro: "四种公式形状相同：以 5 ft 为基准体重，再为高出的每一英寸加上固定重量。不同的只是常数。",
    formulasTitle: "公式",
    formulas: [
      {
        name: "Devine (1974)",
        body: "男性：50 kg + 超过 5 ft 后每英寸 2.3 kg。女性：45.5 kg + 每英寸 2.3 kg。",
      },
      {
        name: "Robinson (1983)",
        body: "男性：52 kg + 每英寸 1.9 kg。女性：49 kg + 每英寸 1.7 kg。",
      },
      {
        name: "Miller (1983)",
        body: "男性：56.2 kg + 每英寸 1.41 kg。女性：53.1 kg + 每英寸 1.36 kg。",
      },
      {
        name: "Hamwi (1964)",
        body: "男性：48 kg + 每英寸 2.7 kg。女性：45.5 kg + 每英寸 2.2 kg。",
      },
      {
        name: "健康 BMI 范围",
        body: "按你的身高，对应 BMI 18.5 到 24.9 的体重。",
      },
      {
        name: "示例：",
        body: "一名 175 cm 的男性得到 70.5（Devine）、68.9（Robinson）、68.7（Miller）和 72.0（Hamwi），平均 70.0 kg。健康 BMI 区间为 56.7 到 76.3 kg。",
      },
    ],
    notice:
      "四种公式的平均值靠近将近 20 kg 宽的 BMI 区间中部。这个差距就是诚实的结论：这些公式给出的是更大健康范围里的一个合理点，不是你没踩中就算没达到的目标。",
  },
  faqTitle: "常见问题",
  faq: [
    {
      question: "什么是理想体重？",
      answer:
        "它是根据身高和性别估算的临床健康体重，来源值得知道：四种常用公式都是为药物剂量设计的，不是为身材目标。Devine 在 1974 年写下自己的公式，用来计算庆大霉素剂量。后来它们被当作健康目标，所以用在这个用途上会显得别扭。",
    },
    {
      question: "我该用哪个理想体重公式？",
      answer:
        "不要只用一个。平均身高时它们相差 3 到 4 kg，极端身高差得更多，这说明真正能提供的精度有限。四个的平均值是合理的中点，但健康 BMI 范围更有用，因为它给你大约 20 kg 的区间，而不是一个必须命中的数字。",
    },
    {
      question: "为什么四种公式结果不同？",
      answer:
        "它们来自不同人群，对身高每增加一英寸该加多少体重意见不同。男性中 Hamwi 每英寸加 2.7 kg，Miller 只加 1.41。175 cm 时差距不大，但 195 cm 时 Hamwi 大约 87 kg，Miller 大约 78 kg。你越高或越矮，它们分得越开。",
    },
    {
      question: "理想体重对肌肉多的人准确吗？",
      answer:
        "不准确，这是这些公式最明显的失败。它们只看身高和性别，分不清 80 kg 肌肉和 80 kg 脂肪。训练有素的运动员在四种公式和 BMI 上都会显示超重。如果你有可观的肌肉，体脂率和腰臀比比任何体重目标都更有用。",
    },
    {
      question: "健康 BMI 范围是多少？",
      answer:
        "18.5 到 24.9。换算成 175 cm 的体重是 56.7 到 76.3 kg，将近 20 kg 宽。宽度才是重点：健康体重是一个范围，不是一个数字，你落在哪里取决于体型、肌肉，以及你真正能维持的水平。",
    },
    {
      question: "我应该去达到理想体重吗？",
      answer:
        "只有当它碰巧和你能长期维持的状态重合时才值得。健康结果更跟着行为走，而不是秤上的数字：体重较高但活跃的人，通常比体重较低但久坐的人更好。如果你的体重已经在健康 BMI 范围内，去追某个公式的中点意义不大。",
    },
  ],
  cta: {
    title: "建立能推动数字的习惯",
    description: "下载 Steps 应用，记录每日步数，在真正改变体重的那几个月里保持稳定。",
  },
  howTo: {
    name: "如何计算你的理想体重",
    description: "输入性别和身高，查看 Devine、Robinson、Miller 和 Hamwi 公式的理想体重，以及健康 BMI 范围。",
    steps: [
      {
        name: "选择性别",
        text: "四种公式对男性和女性使用不同的基准体重和每英寸增量。",
      },
      {
        name: "输入身高",
        text: "可在厘米和英尺/英寸之间切换。身高是四种公式真正使用的唯一变量。",
      },
      {
        name: "如需对比，可加上当前体重",
        text: "可选。填入后会显示你离公式平均值有多远，以及是否落在健康 BMI 范围内。",
      },
      {
        name: "看范围，而不是那个数字",
        text: "计算器会给出四种估算、它们的平均值，以及你身高对应的健康 BMI 体重区间。区间更宽，也更有用。",
      },
    ],
  },
};

export default zh;

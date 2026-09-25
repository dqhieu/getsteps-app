import type { BodyFatCalculatorMessages } from "./en";

const zh: BodyFatCalculatorMessages = {
  meta: {
    title: "体脂率计算器——美国海军法（无需设备）",
    description:
      "用准确的美国海军法计算体脂率。只需填写围度，不用体脂秤，也不用健身房设备。",
    keywords: [
      "体脂率计算器",
      "体脂计算器",
      "海军法体脂",
      "如何计算体脂",
      "男性体脂率",
      "女性体脂率",
    ],
    ogTitle: "体脂率计算器——美国海军法",
    ogDescription:
      "用准确的美国海军法计算体脂率。只需填写围度，不用体脂秤，也不用健身房设备。",
    ogImageAlt: "体脂率计算器",
  },
  hero: {
    title: "体脂率计算器",
    subtitle: "用美国海军法准确计算体脂率——一把软尺就够了。",
  },
  intro:
    "填写性别、身高和身体围度，用经过验证的美国海军公式计算体脂率——不需要体脂秤或健身房设备。",
  calculator: {
    measurements: "你的身体数据",
    gender: "性别",
    male: "男",
    female: "女",
    height: "身高",
    weight: "体重",
    circumferenceUnit: "围度单位",
    waist: "腰围",
    neck: "颈围",
    hip: "臀围",
    measurementHint: "每处都量在最细的位置。",
    invalidTitle: "请检查你的测量数据",
    invalidDetail: "腰围必须大于颈围。",
    yourBodyFat: "你的体脂",
    percent: "{value}%",
    fatMass: "脂肪量",
    leanMass: "去脂体重",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "建议每日步数",
    categoriesTitle: "体脂分类",
    categoriesSubtitleMale: "美国运动协会（ACE）男性体脂分类",
    categoriesSubtitleFemale: "美国运动协会（ACE）女性体脂分类",
    categoryColumn: "类别",
    rangeColumn: "体脂范围",
    categories: {
      essential: "必需脂肪",
      athletic: "运动员",
      fitness: "健康",
      acceptable: "可接受",
      obese: "肥胖",
    },
  },
  info: {
    title: "了解体脂率",
    intro:
      "体脂率比单看 BMI 更能反映体能状况。BMI 只看体重和身高，体脂率则把脂肪量和去脂体重（肌肉、骨骼、水分）分开。",
    faqTitle: "常见问题",
  },
  faq: [
    {
      question: "健康的体脂率是多少？",
      answer:
        "男性健康体能范围是 14–17%，可接受范围是 18–24%。女性体能范围是 21–24%，可接受范围是 25–31%。运动员通常更低——男性 6–13%，女性 14–20%。",
    },
    {
      question: "美国海军法准不准？",
      answer:
        "美国海军法的结果通常与 DEXA 扫描相差 3–4%，是不借助设备时较准确的软尺方法。测量仔细、每次手法一致，结果会更稳。",
    },
    {
      question: "腰围应该量在哪里？",
      answer:
        "量在腰部最细处，一般在肚脐或略高于肚脐。软尺与地面保持平行，正常呼气后测量——不要收腹。",
    },
    {
      question: "体脂率和 BMI 有什么区别？",
      answer:
        "BMI 只用身高和体重，分不清脂肪和肌肉。肌肉量大的运动员 BMI 可能偏高，体脂却很低。体脂率更能反映真实身体成分和健康风险。",
    },
    {
      question: "怎样降低体脂？",
      answer:
        "把规律步行或有氧、力量训练和适度热量缺口结合起来。每周减脂目标放在 0.5–1 kg。每天 10,000 步以上能稳定增加消耗，又不需要高强度训练。",
    },
  ],
  cta: {
    title: "记录你的健康进展",
    description: "在 Steps 里把体成分目标和每日步数记在一起。",
  },
  howTo: {
    name: "如何用美国海军法计算体脂率",
    description: "填写颈围、腰围、臀围、身高和性别，用美国海军公式估算体脂率。",
    steps: [
      {
        name: "测量颈围",
        text: "用软尺量喉结正下方的颈围。",
      },
      {
        name: "测量腰围",
        text: "男性量在肚脐高度。女性量在腰部最细处。",
      },
      {
        name: "测量臀围（仅女性）",
        text: "女性再量臀部最宽处。",
      },
      {
        name: "填写围度和身高",
        text: "输入全部围度和身高。计算器支持公制和英制。",
      },
      {
        name: "查看体脂率和分类",
        text: "结果会给出估算体脂率，以及 ACE 分类（必需脂肪、运动员、健康、普通、肥胖）。",
      },
    ],
  },
};

export default zh;

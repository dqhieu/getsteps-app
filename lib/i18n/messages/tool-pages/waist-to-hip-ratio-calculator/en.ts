import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Waist to Hip Ratio Calculator: WHO Risk Bands",
    description:
      "Calculate your waist-to-hip ratio against WHO thresholds. Risk rises above 0.90 for men and 0.85 for women. Free calculator with waist circumference check.",
    keywords: [
      "waist to hip ratio calculator",
      "WHR calculator",
      "waist hip ratio",
      "body shape calculator",
      "visceral fat calculator",
      "waist circumference risk",
      "apple vs pear body shape",
      "WHO waist hip ratio",
    ],
    ogTitle: "Waist to Hip Ratio Calculator: WHO Risk Bands",
    ogDescription:
      "Calculate your waist-to-hip ratio and see where it falls against WHO cardiovascular risk thresholds.",
  },
  hero: {
    title: "Waist to Hip Ratio Calculator",
    subtitle:
      "Two tape measurements predict cardiovascular risk better than BMI, because they show where your body stores fat rather than just how much of it there is.",
  },
  calculator: {
    measurements: "Your Measurements",
    gender: "Gender",
    male: "Male",
    female: "Female",
    genderHint: "The WHO uses different risk thresholds for men and women.",
    waistHip: "Waist & Hip",
    waist: "waist",
    hip: "hip",
    howToMeasure: "How to measure",
    waistLabel: "Waist:",
    waistMeasure:
      "the narrowest point between your lowest rib and the top of your hip bone, measured at the end of a normal breath out.",
    hipLabel: "Hip:",
    hipMeasure: "the widest point around your buttocks.",
    tapeMeasure:
      "Keep the tape level and snug without compressing the skin. Measure over bare skin or thin clothing.",
    calculate: "Calculate My Ratio",
    results: "Your Results",
    ratioLabel: "Waist-to-hip ratio",
    waistCheck: "Waist circumference check",
    targetWaist:
      "At your current hip measurement, a waist of {waist} or less would put you in the low-risk band.",
    bandsTitle: "WHO Risk Bands for {group}",
    men: "Men",
    women: "Women",
    groupMen: "men",
    groupWomen: "women",
    rangeAndAbove: "{min} and above",
    rangeBelow: "below {max}",
    rangeBetween: "{min} – {max}",
    disclaimer:
      "Waist-to-hip ratio is a screening measure, not a diagnosis. It tracks where fat sits rather than how much there is, which is why it predicts cardiovascular risk better than BMI alone. Discuss any result in the moderate or high band with a doctor.",
    levels: {
      low: {
        label: "Low risk",
        description:
          "Fat distribution is not concentrated around the abdomen. This is the lowest-risk pattern for {group}.",
      },
      moderate: {
        label: "Moderate risk",
        description:
          "Some central fat accumulation. Associated with a measurable rise in cardiovascular and type 2 diabetes risk.",
      },
      high: {
        label: "High risk",
        description:
          "Substantially elevated risk of cardiovascular disease and type 2 diabetes. Worth discussing with a doctor.",
      },
    },
    waistVerdict: {
      high: "A waist of {waist} cm is at or above the {threshold} cm mark where the WHO flags substantially increased risk for {group}.",
      moderate:
        "A waist of {waist} cm is above the {threshold} cm mark where the WHO flags increased risk for {group}.",
      low: "A waist of {waist} cm is below the {threshold} cm threshold the WHO uses for {group}.",
    },
  },
  resultCta: {
    headline: "Walking targets the fat this measures",
    description:
      "Regular aerobic activity reduces visceral fat specifically, even at stable body weight. Steps tracks yours automatically so the habit sticks.",
  },
  sticky: "Track your steps with Steps",
  info: {
    title: "How We Calculate Your Risk Band",
    intro:
      "The arithmetic is trivial. The value is in the thresholds, which come from the WHO's 2008 expert consultation on waist circumference and waist-hip ratio.",
    formulaTitle: "The Formula and Thresholds",
    formulas: [
      { name: "WHR", body: "waist circumference ÷ hip circumference" },
      { name: "Men:", body: "low below 0.90, moderate 0.90 to 0.99, high 1.0 and above" },
      { name: "Women:", body: "low below 0.80, moderate 0.80 to 0.84, high 0.85 and above" },
      { name: "Waist alone (men):", body: "increased risk at 94 cm, substantially increased at 102 cm" },
      { name: "Waist alone (women):", body: "increased risk at 80 cm, substantially increased at 88 cm" },
      {
        name: "Example:",
        body: "a man with a 90 cm waist and 100 cm hips scores 0.90, the bottom of the moderate band.",
      },
    ],
    conflict:
      "The waist circumference check runs independently of the ratio, because the two can disagree. Wide hips can pull a ratio into the low-risk band while the waist measurement alone would still be flagged. When they conflict, the more cautious reading is the one to act on.",
    screening:
      "This is a screening measure, not a diagnosis. A result in the moderate or high band is worth raising with a doctor, particularly alongside blood pressure, fasting glucose or lipid results.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "What is a healthy waist-to-hip ratio?",
      answer:
        "The WHO puts low risk below 0.90 for men and below 0.80 for women. Between 0.90 and 0.99 for men, or 0.80 and 0.84 for women, is moderate risk. At or above 1.0 for men and 0.85 for women, risk is substantially elevated. Women's thresholds sit lower because they naturally carry more hip and thigh fat, so the same ratio means more abdominal fat in a woman than in a man.",
    },
    {
      question: "Why does waist-to-hip ratio matter more than BMI?",
      answer:
        "Because it can see where the fat is, and BMI cannot. Visceral fat packed around the abdominal organs is metabolically active: it releases inflammatory signals and free fatty acids straight into the portal circulation. Fat on the hips and thighs does not behave that way. Two people with identical BMIs can carry very different risk depending on distribution, and WHR picks that up.",
    },
    {
      question: "How do I measure my waist and hips correctly?",
      answer:
        "Waist at the narrowest point between your lowest rib and the top of your hip bone, measured at the end of a normal breath out, not sucked in. Hips at the widest point around your buttocks. Keep the tape level and snug without compressing the skin, and measure over bare skin or thin clothing. Measuring at a different height is the most common source of error, so use the same landmarks each time.",
    },
    {
      question: "What is the difference between an apple and a pear body shape?",
      answer:
        "Apple shapes carry fat around the middle, producing a higher ratio and the greater metabolic risk. Pear shapes carry it on the hips and thighs, giving a lower ratio and a more favourable risk profile. Distribution is largely genetic and strongly influenced by sex hormones, which is why many women shift toward an apple pattern after menopause even without gaining weight.",
    },
    {
      question: "Can I reduce my waist-to-hip ratio?",
      answer:
        "Yes, though not by targeting it directly. Spot reduction does not work: no amount of abdominal exercise preferentially burns abdominal fat. What does work is an overall calorie deficit, and visceral fat happens to be among the first stores mobilised, so early weight loss often improves the ratio faster than it improves total weight. Regular aerobic activity reduces visceral fat specifically, even at stable body weight.",
    },
    {
      question: "Does walking reduce belly fat?",
      answer:
        "It reduces visceral fat, which is the part that matters here. Regular moderate aerobic activity lowers visceral fat measurably even when body weight does not change much, and walking is the easiest form to sustain at the volume required. Trials generally use 150 to 300 minutes a week of moderate activity, which is 30 to 60 minutes most days.",
    },
    {
      question: "Should I use waist circumference or the ratio?",
      answer:
        "Both, which is why this calculator reports both. The ratio can be misleading on its own: someone with a large waist and unusually wide hips can score in the low-risk band despite a waist circumference that the WHO would flag independently. The thresholds there are 94 and 102 cm for men, 80 and 88 cm for women. When the two measures disagree, take the more cautious reading.",
    },
  ],
  cta: {
    title: "Walk Off the Fat That Matters",
    description:
      "Download the Steps app to track your daily walking and build the aerobic habit that reduces visceral fat.",
  },
  howTo: TOOL_HOW_TO["waist-to-hip-ratio-calculator"],
};

export type WaistToHipRatioCalculatorMessages = typeof en;
export default en;

import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Body Fat Percentage Calculator - Navy Method (No Equipment Needed)",
    description:
      "Calculate your body fat percentage using the accurate U.S. Navy method. Just enter your measurements — no gym equipment or body fat scale required.",
    keywords: [
      "body fat percentage calculator",
      "body fat calculator",
      "navy method body fat",
      "how to calculate body fat",
      "body fat percentage men",
      "body fat percentage women",
    ],
    ogTitle: "Body Fat Percentage Calculator - Navy Method",
    ogDescription:
      "Calculate your body fat percentage using the accurate U.S. Navy method. Just enter your measurements — no gym equipment or body fat scale required.",
    ogImageAlt: "Body Fat Percentage Calculator",
  },
  hero: {
    title: "Body Fat Percentage Calculator",
    subtitle:
      "Calculate your body fat percentage accurately using the U.S. Navy method — just a tape measure required.",
  },
  intro:
    "Enter your gender, height, and body measurements to calculate body fat percentage using the proven U.S. Navy formula — no body fat scale or gym equipment needed.",
  calculator: {
    measurements: "Your Measurements",
    gender: "Gender",
    male: "Male",
    female: "Female",
    height: "Height",
    weight: "Weight",
    circumferenceUnit: "Circumference Unit",
    waist: "Waist Circumference",
    neck: "Neck Circumference",
    hip: "Hip Circumference",
    measurementHint: "All measurements should be taken at the narrowest point.",
    invalidTitle: "Please check your measurements",
    invalidDetail: "Waist must be greater than neck circumference.",
    yourBodyFat: "Your Body Fat",
    percent: "{value}%",
    fatMass: "Fat Mass",
    leanMass: "Lean Mass",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "Recommended Daily Steps",
    categoriesTitle: "Body Fat Categories",
    categoriesSubtitleMale: "American Council on Exercise (ACE) classification for men",
    categoriesSubtitleFemale: "American Council on Exercise (ACE) classification for women",
    categoryColumn: "Category",
    rangeColumn: "Body Fat Range",
    categories: {
      essential: "Essential Fat",
      athletic: "Athletic",
      fitness: "Fitness",
      acceptable: "Acceptable",
      obese: "Obese",
    },
  },
  info: {
    title: "Understanding Body Fat Percentage",
    intro:
      "Body fat percentage is a more accurate measure of fitness than BMI alone. While BMI only considers weight and height, body fat percentage distinguishes between fat mass and lean mass (muscle, bone, water).",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "What is a healthy body fat percentage?",
      answer:
        "For men, a fitness range of 14–17% and acceptable range of 18–24% are considered healthy. For women, fitness falls between 21–24% and acceptable between 25–31%. Athletes typically carry less — 6–13% for men and 14–20% for women.",
    },
    {
      question: "How accurate is the Navy method?",
      answer:
        "The U.S. Navy method is typically within 3–4% of a DEXA scan result, making it one of the most accurate tape-measure methods available without equipment. Accuracy improves when measurements are taken carefully and consistently.",
    },
    {
      question: "Where should I measure my waist?",
      answer:
        "Measure your waist at the narrowest point, usually at or just above the navel. Keep the tape measure parallel to the floor and measure after exhaling normally — do not suck in your stomach.",
    },
    {
      question: "What's the difference between body fat and BMI?",
      answer:
        "BMI only uses height and weight, so it cannot distinguish between fat and muscle. A muscular athlete may have a high BMI but low body fat. Body fat percentage is a more precise indicator of actual body composition and health risk.",
    },
    {
      question: "How can I reduce body fat?",
      answer:
        "Combine regular walking or cardio with strength training and a modest calorie deficit. Aim for 0.5–1 kg of fat loss per week. Daily step goals of 10,000+ steps are an effective and sustainable way to increase calorie expenditure without intense exercise.",
    },
  ],
  cta: {
    title: "Track Your Health Journey",
    description: "Pair your body composition goals with daily step tracking in Steps.",
  },
  howTo: TOOL_HOW_TO["body-fat-calculator"],
};

export type BodyFatCalculatorMessages = typeof en;
export default en;

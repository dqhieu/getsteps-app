import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Calorie Deficit Calculator - How Much to Eat to Lose Weight",
    description:
      "Calculate your daily calorie deficit to reach your weight loss goal safely. Get your TDEE, target daily calories, and recommended daily steps to boost results.",
    keywords: [
      "calorie deficit calculator",
      "how many calories to lose weight",
      "calorie deficit for weight loss",
      "daily calorie goal calculator",
      "TDEE for weight loss",
      "how big should my calorie deficit be",
    ],
    ogTitle: "Calorie Deficit Calculator - How Much to Eat to Lose Weight",
    ogDescription:
      "Calculate your daily calorie deficit to reach your weight loss goal safely. Get your TDEE, target daily calories, and recommended daily steps to boost results.",
    ogImageAlt: "Calorie Deficit Calculator",
  },
  hero: {
    title: "Calorie Deficit Calculator",
    subtitle:
      "Find out exactly how many calories to eat per day to reach your goal weight safely and sustainably.",
  },
  intro:
    "Enter your current stats, goal weight, and timeframe to calculate your daily calorie target, required deficit, and how many extra steps per day will help you reach your goal faster.",
  calculator: {
    details: "Your Details",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: "years",
    currentWeight: "Current Weight",
    height: "Height",
    activity: "Activity Level",
    activityLevels: {
      sedentary: "Sedentary",
      light: "Lightly Active",
      moderate: "Moderately Active",
      active: "Active",
      very_active: "Very Active",
    },
    goalWeight: "Goal Weight",
    timeframe: "Timeframe",
    weeks: "{count}w",
    plan: "Your Plan",
    atGoalTitle: "You're already at your goal!",
    atGoalBody: "Focus on maintaining your weight with a balanced diet and regular activity.",
    tdee: "Your TDEE (maintenance)",
    deficit: "Daily deficit needed",
    target: "Target daily calories",
    extraSteps: "Extra steps to add",
    stepsHint: "to burn deficit through walking",
    calPerDay: "cal/day",
    stepsPerDay: "steps/day",
    unsafe:
      "Warning: This deficit exceeds {max} cal/day. Consider extending your timeline for safer results.",
    belowMin:
      "Warning: Your target calories fall below the recommended minimum of {min} cal/day. Please consult a healthcare professional.",
    safe: "This is a safe, sustainable deficit.",
  },
  info: {
    title: "What Is a Calorie Deficit?",
    body: "A calorie deficit occurs when you consume fewer calories than your body burns. Over time, this forces your body to use stored fat for energy, leading to weight loss. The key is finding the right deficit — large enough to see results, but not so large that it's unsustainable or unhealthy.",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How big should my calorie deficit be?",
      answer:
        "A deficit of 500–750 calories per day is generally sustainable and leads to about 0.5–0.75 kg of fat loss per week. Deficits above 1,000 cal/day are not recommended — they can cause muscle loss, nutrient deficiencies, and are hard to maintain long-term.",
    },
    {
      question: "How long does it take to lose 1 kg?",
      answer:
        "Since 1 kg of fat contains approximately 7,700 calories, at a 500 cal/day deficit it takes about 15 days to lose 1 kg. At a 1,000 cal/day deficit, roughly 8 days. Actual results vary based on water retention, muscle gain, and metabolic adaptation.",
    },
    {
      question: "What is TDEE?",
      answer:
        "TDEE stands for Total Daily Energy Expenditure — the total number of calories your body burns per day, including your basal metabolic rate (BMR) plus all physical activity. It is your \"maintenance\" calorie level: eating at TDEE means no weight change.",
    },
    {
      question: "Can I lose weight just by walking?",
      answer:
        "Yes! Adding 10,000 extra steps per day burns approximately 400 extra calories, which alone creates a meaningful deficit over time. Walking is low-impact, sustainable, and can be combined with a modest dietary reduction for excellent results.",
    },
    {
      question: "Is it safe to eat below 1,200 calories?",
      answer:
        "Generally no. Very low calorie intakes (below 1,200 for women, below 1,500 for men) can lead to muscle loss, nutrient deficiencies, hormonal disruption, and metabolic slowdown. If your calculated target falls below these thresholds, extend your timeline or consult a healthcare professional.",
    },
  ],
  cta: {
    title: "Track Your Health Journey",
    description: "Add more daily steps to boost your calorie deficit naturally with the Steps app.",
  },
  howTo: TOOL_HOW_TO["calorie-deficit-calculator"],
};

export type CalorieDeficitMessages = typeof en;
export default en;

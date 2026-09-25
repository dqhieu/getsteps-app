import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Macro Calculator - Daily Protein, Carbs & Fat for Your Goals",
    description:
      "Calculate your personalized daily macros (protein, carbs, fat) for weight loss, maintenance, or muscle gain. Based on your TDEE and fitness goals.",
    keywords: [
      "macro calculator",
      "macros calculator",
      "protein calculator for weight loss",
      "calculate macros",
      "how many grams of protein per day",
      "macronutrient calculator",
      "IIFYM calculator",
    ],
    ogTitle: "Macro Calculator - Daily Protein, Carbs & Fat for Your Goals",
    ogDescription:
      "Calculate your personalized daily macros (protein, carbs, fat) for weight loss, maintenance, or muscle gain.",
  },
  hero: {
    title: "Macro Calculator",
    subtitle:
      "Get your personalized daily protein, carbs, and fat targets based on your body stats and fitness goal.",
  },
  intro:
    "Enter your stats and select your goal to calculate your daily macronutrient targets. Whether you're cutting, maintaining, or building muscle, the right macro split makes the difference.",
  calculator: {
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    weight: "Weight",
    height: "Height (cm)",
    activityLevel: "Activity Level",
    activity: {
      sedentary: "Sedentary",
      light: "Lightly Active",
      moderate: "Moderately Active",
      active: "Active",
      very_active: "Very Active",
    },
    goal: "Goal",
    goals: {
      weight_loss: "Weight Loss",
      maintenance: "Maintenance",
      muscle_gain: "Muscle Gain",
    },
    calculate: "Calculate Macros",
    dailyTarget: "Your daily target",
    cal: "cal",
    bmrTdee: "BMR: {bmr} · TDEE: {tdee}",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    grams: "{grams}g",
  },
  info: {
    title: "Understanding Macros",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "What are macros?",
      answer:
        "Macronutrients (protein, carbs, fat) are the three main calorie sources. Protein and carbs provide 4 calories per gram, while fat provides 9 calories per gram. Getting the right balance for your goal determines body composition results.",
    },
    {
      question: "How much protein should I eat per day?",
      answer:
        "Active individuals should aim for 1.6–2.4g of protein per kg of body weight. The higher end (2.2–2.4g/kg) is recommended for muscle gain or during a calorie deficit to preserve muscle mass.",
    },
    {
      question: "Should I count macros or just calories?",
      answer:
        "Tracking macros gives more control over body composition. Counting only calories during weight loss can lead to muscle loss if protein is too low — macros ensure you're losing fat while preserving lean tissue.",
    },
    {
      question: "What is a good macro split for weight loss?",
      answer:
        "A high-protein split works best for weight loss: roughly 35–40% protein to preserve muscle, 25% fat for hormonal health, and 30–35% carbs for energy. Prioritise hitting your protein target above all else.",
    },
    {
      question: "How many grams of carbs per day?",
      answer:
        "Typically 150–300g for active adults. Aim for the lower end during weight loss and higher for endurance athletes or those focused on muscle gain. Carb needs scale with training volume.",
    },
  ],
  cta: {
    title: "Pair Your Macro Goals With Daily Steps",
    description: "Pair your macro goals with a daily step target for maximum results.",
  },
  howTo: TOOL_HOW_TO["macro-calculator"],
};

export type MacroCalculatorMessages = typeof en;
export default en;

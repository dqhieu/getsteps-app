import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Steps to Calories Calculator: 10K Steps Burn 280-520 Cal",
    description:
      "10,000 steps ≈ 280 cal (130 lb), 400 cal (170 lb), 520 cal (220 lb). Free steps-to-calories calculator personalized by your weight — full chart inside.",
    keywords: [
      "steps to calories",
      "steps to calories calculator",
      "step calorie calculator",
      "steps calories calculator",
      "steps calorie calculator",
      "steps to calories converter",
      "3000 steps calories",
      "15000 steps calories",
      "15k steps calories",
      "calories burned walking",
      "how many calories in 10000 steps",
      "how many steps to burn 500 calories",
      "how many steps to burn 100 calories",
      "calories burned 10000 steps 70 kg",
      "calories burned per 1000 steps",
      "calories per step",
      "calories burned per step",
    ],
    ogTitle: "Steps to Calories Calculator: 10K Steps Burn 280-520 Cal",
    ogDescription:
      "10,000 steps ≈ 280-520 cal depending on body weight. Free steps-to-calories calculator personalized by your weight — full chart inside.",
    ogImageAlt: "Steps to Calories Calculator",
  },
  hero: {
    title: "Steps to Calories Calculator",
    subtitle:
      "Convert your daily steps to calories burned. Enter your steps, weight, and age for a personalized estimate — or use our reference tables below for quick lookups by body weight.",
  },
  appCta: {
    headline: "See the calories behind your real step count",
    description:
      "Steps tracks your steps automatically and shows the calories you burn every day, so you never have to estimate again.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    yourInformation: "Your Information",
    steps: "Number of Steps",
    stepsPlaceholder: "Enter number of steps",
    weight: "Weight",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: "years",
    caloriesBurned: "Calories Burned",
    fromSteps: {
      one: "from {steps} step",
      other: "from {steps} steps",
    },
    distanceWalked: "Distance Walked",
    distanceKm: "{distance} km",
    distanceMiles: "({miles} miles)",
    walkingTime: "Walking Time",
    equivalentTo: "Equivalent To",
    foods: {
      Banana: "Banana",
      Apple: "Apple",
      "Slice of bread": "Slice of bread",
      Egg: "Egg",
      "Cup of rice": "Cup of rice",
      "Chocolate bar": "Chocolate bar",
      "Slice of pizza": "Slice of pizza",
      Cheeseburger: "Cheeseburger",
    },
    referenceTitle: "Steps to Calories Reference",
    referenceIntro:
      "Calories burned for common step counts based on your weight ({weight} {unit})",
    columns: {
      steps: "Steps",
      calories: "Calories",
    },
    kcal: "{calories} kcal",
  },
  info: {
    title: "How We Calculate Calories from Steps",
    intro:
      "The calories you burn while walking depend on several factors, including your body weight, walking speed, and distance covered. Our calculator uses a research-based formula to estimate your calorie burn.",
    formulaTitle: "The Formula",
    baseLabel: "Base:",
    baseText: "Approximately 0.04 calories per step for a 70kg (154 lbs) person",
    weightLabel: "Weight adjustment:",
    weightText: "Calories scale proportionally with body weight",
    exampleLabel: "Example:",
    exampleText: "A 70kg person burns ~400 calories walking 10,000 steps",
    heavier:
      "Heavier individuals burn more calories per step because it takes more energy to move a larger body. Walking faster also increases calorie burn, but our calculator uses an average walking pace for simplicity.",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How many calories does 10,000 steps burn?",
      answer:
        "For an average adult weighing 70kg (154 lbs), 10,000 steps burns approximately 400-500 calories. This varies based on your weight, walking speed, and terrain.",
    },
    {
      question: "How many steps to burn 500 calories?",
      answer:
        "To burn 500 calories walking, you need approximately 12,500 steps if you weigh 70 kg (154 lbs). At 60 kg you'd need ~14,700 steps, and at 85 kg about 10,300 steps. The heavier you are, the fewer steps required. Use the calculator above for your exact number.",
    },
    {
      question: "How many steps to burn 100 calories?",
      answer:
        "To burn 100 calories, you need about 2,500 steps at 70 kg body weight. Lighter individuals (55 kg) need around 3,200 steps, while heavier individuals (100 kg) only need about 1,750 steps. That's roughly 20-30 minutes of walking.",
    },
    {
      question: "How many calories are burned per step?",
      answer:
        "On average, you burn about 0.04 calories per step at 70 kg body weight. This scales with weight: a 55 kg person burns ~0.031 cal/step, while a 100 kg person burns ~0.057 cal/step. These values assume a normal walking pace of about 5 km/h.",
    },
    {
      question: "Does walking speed affect calories burned?",
      answer:
        "Yes, walking faster burns more calories per minute. However, for the same number of steps, the difference is minimal. Brisk walking (about 6 km/h) can burn 10-20% more calories than a leisurely stroll.",
    },
    {
      question: "Is counting calories from steps accurate?",
      answer:
        "Step-based calorie calculations provide a reasonable estimate but aren't perfectly accurate. Factors like terrain, incline, and individual metabolism can affect actual calorie burn. Use these numbers as a general guide.",
    },
    {
      question: "How many calories does 10,000 steps burn at 70 kg?",
      answer:
        "A 70 kg (154 lbs) person burns approximately 400 calories walking 10,000 steps at a normal pace. This is based on roughly 0.04 calories per step, scaled by body weight.",
    },
    {
      question: "How many calories do 1,000 steps burn?",
      answer:
        "For a 70 kg person, 1,000 steps burns about 40 calories. For a 60 kg person it's ~34 cal, and for an 80 kg person it's ~46 cal. The heavier you are, the more calories each step burns.",
    },
  ],
  table: {
    title: "Steps to Calories by Body Weight",
    intro:
      "Quick reference table showing calories burned at different step counts for common body weights. Based on average walking pace.",
    steps: "Steps",
    cal: "cal",
    footnote:
      "Calorie values based on average walking pace (~5 km/h). Actual burn varies with walking speed, terrain, and individual metabolism. Use the calculator above for a personalized estimate.",
  },
  cta: {
    title: "Track Your Steps & Calories Automatically",
    description:
      "Download the Steps app to track your daily steps and calories burned automatically on your iPhone and Apple Watch.",
  },
  howTo: TOOL_HOW_TO["steps-to-calories-calculator"],
};

export type StepsToCaloriesMessages = typeof en;
export default en;

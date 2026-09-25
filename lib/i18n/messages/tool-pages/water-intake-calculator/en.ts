import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Water Intake Calculator - How Much Water Should I Drink Per Day?",
    description:
      "Calculate your daily water intake based on weight, activity level, and climate. Get personalized hydration recommendations.",
    keywords: [
      "water intake calculator",
      "how much water should I drink",
      "daily water intake",
      "hydration calculator",
      "water per day",
      "daily water recommendation",
    ],
    ogTitle: "Water Intake Calculator - How Much Water Should I Drink Per Day?",
    ogDescription:
      "Calculate your daily water intake based on weight, activity level, and climate. Get personalized hydration recommendations.",
    ogImageAlt: "Water Intake Calculator",
  },
  hero: {
    title: "Water Intake Calculator",
    subtitle:
      "Find out exactly how much water you should drink daily based on your body weight and activity level.",
  },
  intro:
    "Use this free water intake calculator to find your personalized daily hydration goal. Enter your weight and activity level to get an instant recommendation in liters, ounces, and cups.",
  calculator: {
    yourDetails: "Your Details",
    bodyWeight: "Body Weight",
    activityLevel: "Activity Level",
    climate: "Climate",
    activities: {
      sedentary: "Sedentary",
      moderate: "Moderately Active",
      active: "Active",
      very_active: "Very Active",
    },
    climates: {
      temperate: "Temperate",
      hot: "Hot / Humid",
    },
    dailyIntake: "Daily Water Intake",
    perDay: "L / day",
    ozPerDay: "oz / day",
    cupsPerDay: "cups / day",
    glassesPerDay: "glasses / day",
    tipLabel: "Hydration Tip",
    tips: {
      sedentary:
        "Try drinking a glass of water every 2 hours as a reminder to stay hydrated throughout your day.",
      moderate:
        "Drink water before, during, and after any exercise session. Carry a reusable bottle to stay on track.",
      active: "Add 500ml extra on workout days and replenish electrolytes if you sweat heavily.",
      very_active:
        "Weigh yourself before and after intense sessions — drink 500ml for every 0.5kg lost to sweat.",
    },
  },
  info: {
    title: "Why Hydration Matters",
  },
  faq: [
    {
      question: "How much water should I drink per day?",
      answer:
        "The commonly cited \"8 glasses a day\" guideline is a rough approximation. A more accurate method is to base your intake on body weight: roughly 33ml per kilogram of body weight. For a 70kg adult that is about 2.3 liters, but activity level and climate can push that figure significantly higher. This calculator applies those adjustments automatically.",
    },
    {
      question: "Does exercise affect how much water I need?",
      answer:
        "Yes, significantly. During exercise you lose water through sweat and respiration. A moderate workout can add 500ml or more to your needs, while an intense session or endurance sport can require 1–2 extra liters. Always drink before you feel thirsty — thirst is a late signal of dehydration. This calculator boosts your target by 20–60% depending on your chosen activity level.",
    },
    {
      question: "Can I count coffee and tea toward my water intake?",
      answer:
        "Partially. Coffee and tea do contribute to overall fluid intake, but caffeine has a mild diuretic effect that offsets some of the benefit. A good rule of thumb is to count caffeinated drinks at about 50–75% of their volume toward your daily target, and for every cup of coffee drink an extra half cup of plain water to compensate.",
    },
    {
      question: "Does the climate affect my hydration needs?",
      answer:
        "Hot or humid weather increases sweat rate even at rest, raising your baseline requirement by 500–1000ml per day. High altitude also increases fluid loss through faster breathing. Selecting \"Hot / Humid\" in the calculator adds 500ml to your daily total to reflect this. On particularly hot days or after outdoor activity in the heat, consider drinking even more.",
    },
  ],
  cta: {
    title: "Track Your Health Journey",
    description: "Track your daily steps and stay active with the Steps app.",
  },
  howTo: TOOL_HOW_TO["water-intake-calculator"],
};

export type WaterIntakeCalculatorMessages = typeof en;
export default en;

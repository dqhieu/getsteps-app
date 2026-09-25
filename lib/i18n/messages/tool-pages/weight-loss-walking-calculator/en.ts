import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Weight Loss Walking Calculator — How Many Steps to Lose Weight",
    description:
      "Free steps to lose weight calculator. Find how many steps a day you need to reach your goal weight. Get a personalized daily step target, calorie deficit plan, and timeline.",
    keywords: [
      "how many steps to lose weight calculator",
      "how many steps to lose weight",
      "steps to lose weight calculator",
      "walking for weight loss",
      "how much walking to lose weight",
      "steps to lose weight",
      "walking weight loss calculator",
      "weight loss step goal",
      "walking calorie deficit",
      "daily step goal for weight loss",
      "how many steps per day to lose weight",
    ],
    ogTitle: "Weight Loss Walking Calculator — How Many Steps to Lose Weight",
    ogDescription:
      "Free steps to lose weight calculator. Find your personalized daily step target and calorie deficit plan.",
    ogImageAlt: "Weight Loss Walking Calculator",
  },
  hero: {
    title: "Weight Loss Walking Calculator",
    subtitle:
      "Calculate exactly how much walking you need to reach your weight loss goal. Get a personalized daily step target and timeline.",
  },
  calculator: {
    goal: "Your Weight Loss Goal",
    switchUnit: "Switch to {unit}",
    currentWeight: "Current Weight",
    targetWeight: "Target Weight",
    timeframe: "Timeframe",
    timeframes: {
      "1_month": "1 Month",
      "2_months": "2 Months",
      "3_months": "3 Months",
      "6_months": "6 Months",
      "1_year": "1 Year",
    },
    walkingDays: "Walking Days Per Week: {days}",
    days: {
      one: "{count} day",
      other: "{count} days",
    },
    safetyTitle: "Safety Warning",
    warningWeekly:
      "This plan requires losing more than {max} kg per week. Consider extending your timeframe for safer, more sustainable results.",
    warningDeficit:
      "This plan requires a daily calorie deficit of {deficit} kcal, which exceeds the recommended {max} kcal. Consider a longer timeframe.",
    dailyRequirement: "Daily Walking Requirement",
    stepsValue: "{count} steps",
    distancePerDay: "{km} km ({miles} miles) per walking day",
    walkingTime: "Walking Time",
    hoursMinutes: "{hours}h {minutes}m",
    hoursOnly: "{hours}h",
    minutesOnly: "{minutes} min",
    dailyBurn: "Daily Calorie Burn",
    kcalValue: "{value} kcal",
    weeklyDistance: "Weekly Distance",
    kmValue: "{value} km",
    totalToLose: "Total to Lose",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    progress: "Expected Progress",
    progressHint: "Your projected weight at each milestone (assuming consistent effort)",
    weekColumn: "Week",
    weightColumn: "Expected Weight",
    week: "Week {week}",
    notesTitle: "Important Notes",
    notes: [
      "These calculations assume walking is your primary calorie-burning activity. For best results, combine with a balanced diet.",
      "Safe weight loss is typically 0.5-1 kg (1-2 lbs) per week. Faster weight loss may not be sustainable.",
      "Walking alone may not create a large enough calorie deficit for significant weight loss. Consider combining with dietary changes.",
      "Consult a healthcare professional before starting any weight loss program, especially if you have health conditions.",
    ],
    resultCta: {
      headline: "Hit your daily step target — automatically",
      description:
        "Steps tracks your steps in the background, no manual logging, so you actually reach the number above and stay on track to your goal weight.",
    },
  },
  info: {
    title: "Walking for Weight Loss",
    intro:
      "Walking is one of the most accessible and effective forms of exercise for weight loss. It's low-impact, requires no equipment, and can be done almost anywhere.",
    scienceTitle: "The Science",
    scienceLeads: [
      "1 kg of fat = ~7,700 calories",
      "Walking burns ~60-80 kcal/km",
      "Safe loss: 0.5-1 kg/week",
    ],
    science: [
      "{lead} - This is the energy stored in body fat",
      "{lead} - Varies based on body weight",
      "{lead} - Sustainable rate for long-term success",
    ],
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How many steps do I need to lose weight?",
      answer:
        "For weight loss, most people need 12,000-15,000 steps daily, combined with a healthy diet. The exact number depends on your current weight, goal, and timeframe. Use our calculator for a personalized recommendation.",
    },
    {
      question: "Can I lose weight by walking alone?",
      answer:
        "Yes, but it's most effective when combined with a balanced diet. Walking creates a calorie deficit, but managing food intake accelerates results. Walking 10,000 steps burns about 400-500 calories.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "With consistent walking and proper diet, you may notice changes in 2-3 weeks. Significant weight loss typically becomes visible after 4-6 weeks. Remember, sustainable weight loss is gradual.",
    },
    {
      question: "Should I walk every day?",
      answer:
        "Walking 5-6 days per week with 1-2 rest days is ideal for most people. Rest days help prevent burnout and allow your body to recover. You can still do light activity on rest days.",
    },
    {
      question: "Is brisk walking better for weight loss?",
      answer:
        "Yes, brisk walking (about 6 km/h) burns more calories per minute than leisurely walking. However, the total distance matters more than speed. Walk at a pace you can maintain consistently.",
    },
    {
      question: "How many steps a day to lose 1 pound a week?",
      answer:
        "To lose 1 pound (0.45 kg) per week, you need a 500 calorie daily deficit. Walking about 12,500 extra steps (beyond your baseline) burns roughly 500 calories for a 70 kg person. Combined with diet, fewer additional steps may be needed.",
    },
    {
      question: "How many steps to lose 2 pounds a week?",
      answer:
        "Losing 2 pounds per week requires a 1,000 calorie daily deficit. Walking alone would require 25,000+ extra steps daily, which isn't realistic. Instead, combine 10,000-15,000 daily steps with a 500-calorie dietary reduction for sustainable results.",
    },
  ],
  cta: {
    title: "Track Your Weight Loss Journey",
    description:
      "Download the Steps app to track your daily steps, monitor progress, and stay motivated on your weight loss journey.",
  },
  sticky: "Track your steps with Steps",
  howTo: TOOL_HOW_TO["weight-loss-walking-calculator"],
};

export type WeightLossWalkingMessages = typeof en;
export default en;

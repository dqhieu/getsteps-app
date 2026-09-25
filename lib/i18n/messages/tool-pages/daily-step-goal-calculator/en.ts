import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Daily Step Goal Calculator - Personalized Step Recommendations",
    description:
      "Get a personalized daily step goal based on your age, activity level, and health goals. Find out how many steps you should walk each day.",
    keywords: [
      "daily step goal",
      "how many steps should I walk",
      "step goal by age",
      "recommended steps per day",
      "personalized step goal",
      "step goal calculator",
      "daily walking goal",
      "steps for weight loss",
    ],
    ogTitle: "Daily Step Goal Calculator",
    ogDescription:
      "Get a personalized daily step goal based on your age, activity level, and health goals.",
    ogImageAlt: "Daily Step Goal Calculator",
  },
  hero: {
    title: "Daily Step Goal Calculator",
    subtitle:
      "Get a personalized daily step goal recommendation based on your age, current activity level, and health objectives.",
  },
  resultCta: {
    headline: "Hit your daily step goal — automatically",
    description:
      "Steps tracks your steps in the background, no manual logging, so you actually reach the goal above and build a lasting habit.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    yourProfile: "Your Profile",
    age: "Age",
    years: "years",
    gender: "Gender",
    male: "Male",
    female: "Female",
    activityLevel: "Current Activity Level",
    activity: {
      sedentary: "Sedentary",
      lightly_active: "Lightly Active",
      active: "Active",
      very_active: "Very Active",
    },
    healthGoal: "Health Goal",
    goals: {
      maintain: "Maintain Health",
      lose_weight: "Lose Weight",
      improve_fitness: "Improve Fitness",
      train_event: "Train for Event",
    },
    currentSteps: "Current Daily Steps (Optional)",
    currentStepsPlaceholder: "e.g., 5000",
    currentStepsHint:
      "Enter your average daily steps for a more personalized recommendation",
    resultTitle: "Your Recommended Daily Step Goal",
    stepsValue: "{steps} steps",
    perDay: "per day",
    weeklyGoal: "Weekly Goal",
    distancePerDay: "Distance/Day",
    caloriesPerDay: "Calories/Day",
    kmValue: "{distance} km",
    approxCalories: "~{calories}",
    planTitle: "8-Week Progression Plan",
    planSubtitle: "Gradually build up to your goal with weekly milestones",
    weekLabel: "Week {week}",
    tipsTitle: "Tips to Reach Your Goal",
    tips: {
      sedentary: [
        "Start with a 10-minute walk during lunch break",
        "Take the stairs instead of the elevator",
        "Park farther away from entrances",
      ],
      lightlyActive: [
        "Add a 15-minute morning walk to your routine",
        "Walk while taking phone calls",
      ],
      loseWeight: [
        "Combine walking with a balanced diet for best results",
        "Try to maintain a brisk pace to maximize calorie burn",
      ],
      improveFitness: [
        "Gradually increase your pace over time",
        "Include some incline walking or stairs",
      ],
      trainEvent: [
        "Follow a progressive training plan",
        "Include rest days for recovery",
      ],
      general: [
        "Track your steps daily to stay motivated",
        "Find a walking buddy for accountability",
      ],
    },
  },
  info: {
    title: "Understanding Step Goals",
    intro:
      "The right step goal depends on your individual circumstances. While 10,000 steps is a popular target, research shows that health benefits can be achieved with different amounts depending on your age and fitness level.",
    ageTitle: "Recommended Steps by Age",
    ages: [
      { label: "Children & Teens (under 18):", steps: "12,000-15,000 steps/day" },
      { label: "Adults (18-64):", steps: "10,000-12,000 steps/day" },
      { label: "Seniors (65+):", steps: "7,000-10,000 steps/day" },
    ],
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "Is 10,000 steps a day necessary?",
      answer:
        "No, 10,000 steps isn't a magic number. Recent studies show significant health benefits start at around 7,000-8,000 steps per day. The key is to be more active than you currently are.",
    },
    {
      question: "How many steps for weight loss?",
      answer:
        "For weight loss, aim for 12,000+ steps daily combined with a balanced diet. This can burn an extra 400-600 calories per day. Remember, consistency matters more than hitting a perfect number every day.",
    },
    {
      question: "How do I increase my daily steps?",
      answer:
        "Start by adding 1,000 steps per week to your current average. Take walking meetings, park farther away, use stairs instead of elevators, and schedule short walking breaks throughout the day.",
    },
    {
      question: "What if I can't reach my goal?",
      answer:
        "Any increase in activity is beneficial. If your goal feels too ambitious, adjust it to something more achievable. The best goal is one you can maintain consistently. Focus on progress, not perfection.",
    },
  ],
  cta: {
    title: "Track Your Step Goals",
    description:
      "Download the Steps app to set daily goals, track your progress, and build healthy walking habits.",
  },
  howTo: TOOL_HOW_TO["daily-step-goal-calculator"],
};

export type DailyStepGoalCalculatorMessages = typeof en;
export default en;

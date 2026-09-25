import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Weight Loss Calculator: Calories, Timeline & Goal Date",
    description:
      "Work out the daily calories and the timeline to hit your goal weight. Losing 10 kg at 0.5 kg a week takes 20 weeks on a 550 calorie deficit. Free calculator.",
    keywords: [
      "weight loss calculator",
      "calorie calculator for weight loss",
      "how many calories to lose weight",
      "goal weight calculator",
      "weight loss timeline calculator",
      "calorie deficit calculator",
      "how long will it take to lose weight",
      "weight loss planner",
    ],
    ogTitle: "Weight Loss Calculator: Calories, Timeline & Goal Date",
    ogDescription:
      "Enter your stats and goal weight to get a daily calorie target, a realistic timeline, and week-by-week milestones.",
    ogImageAlt: "Weight Loss Calculator",
  },
  hero: {
    title: "Weight Loss Calculator",
    subtitle:
      "Enter your stats and your goal weight to get a daily calorie target, a realistic timeline, and the week-by-week milestones between here and there.",
  },
  calculator: {
    details: "Your Details",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: "years",
    height: "Height",
    weights: "Current & Goal Weight",
    now: "now",
    goal: "goal",
    activity: "Activity Level",
    activityLevels: {
      sedentary: "Sedentary",
      light: "Lightly Active",
      moderate: "Moderately Active",
      active: "Active",
      very_active: "Very Active",
    },
    activityDescriptions: {
      sedentary: "Desk job, little or no exercise",
      light: "Light exercise 1–3 days per week",
      moderate: "Moderate exercise 3–5 days per week",
      active: "Hard exercise 6–7 days per week",
      very_active: "Physical job or twice-daily training",
    },
    rate: "Rate of Loss",
    rates: {
      mild: { label: "Mild", description: "0.25 kg (0.5 lb) per week" },
      moderate: { label: "Moderate", description: "0.5 kg (1 lb) per week" },
      aggressive: { label: "Aggressive", description: "0.75 kg (1.5 lb) per week" },
      rapid: { label: "Rapid", description: "1 kg (2 lb) per week" },
    },
    calculate: "Calculate My Plan",
    plan: "Your Plan",
    gainGoal:
      "Your goal weight is at or above your current weight. Set a lower goal to see a loss plan.",
    eatPerDay: "Eat per day",
    calories: "calories",
    dailyDeficit: "Daily deficit",
    belowTdee: "below TDEE",
    toLose: "To lose",
    timeToGoal: "Time to goal",
    weeks: "weeks",
    yourBmr: "Your BMR",
    yourTdee: "Your TDEE",
    calValue: "{value} cal",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    warnings: {
      floorMale:
        "A {rate} kg/week rate would put you at {raw} calories a day, below the {floor} calorie floor for men. The target has been raised to {floor}, so actual loss will be slower than the rate you picked.",
      floorFemale:
        "A {rate} kg/week rate would put you at {raw} calories a day, below the {floor} calorie floor for women. The target has been raised to {floor}, so actual loss will be slower than the rate you picked.",
      tooFast:
        "Losing {rate} kg a week is more than 1% of your body weight. Above that, a larger share of the loss comes from muscle rather than fat.",
      longPlan:
        "Projections past about three months drift optimistic. Resting expenditure falls as you lose weight, so recalculate every 4–6 weeks with your new body weight.",
    },
    milestones: "Projected Milestones",
    week: "Week {week}",
    resultCta: {
      headline: "The deficit is easier to hold when you can see it",
      description:
        "Steps tracks your daily activity automatically, so the movement side of your deficit is measured rather than guessed.",
    },
  },
  info: {
    title: "How This Calculator Works",
    intro: "Three steps: estimate what you burn, subtract what you want to lose, and check the result against safety floors.",
    methodTitle: "The Method",
    steps: [
      {
        marker: "1. BMR",
        text: "{marker} via Mifflin-St Jeor, the equation with the best validation on modern populations.",
      },
      {
        marker: "2. TDEE",
        text: "{marker} = BMR × activity factor (1.2 sedentary through 1.9 very active).",
      },
      {
        marker: "3. Deficit",
        text: "{marker} = your chosen weekly rate × 7,700 ÷ 7. A 0.5 kg per week goal needs 550 calories a day.",
      },
      {
        marker: "4. Timeline",
        text: "{marker} = weight to lose ÷ weekly rate, recomputed if the safety floor raised your calorie target.",
      },
    ],
    exampleLabel: "Example:",
    example: "80 kg to 70 kg at 0.5 kg per week is a 550 calorie daily deficit over about 20 weeks.",
    wishnofsky:
      "The 7,700 calories per kilogram figure is the Wishnofsky rule. It is a linear approximation that holds reasonably for the first two to three months and then drifts optimistic, because your resting burn falls as you get lighter. The calculator flags this on any plan longer than 13 weeks.",
    floors:
      "Calorie targets are floored at 1,200 for women and 1,500 for men. If your chosen rate would push below that, the target is raised and the timeline extended to match, rather than showing you a number you should not eat at.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "How many calories should I eat to lose weight?",
      answer:
        "Take your TDEE and subtract 250 to 500 calories. That produces roughly 0.25 to 0.5 kg (0.5 to 1 lb) of loss per week, which is the range most clinical guidance considers sustainable. The calculator does this for you and refuses to drop below 1,200 calories for women or 1,500 for men, the floors below which meeting micronutrient needs becomes difficult.",
    },
    {
      question: "How long will it take me to lose 10 kg?",
      answer:
        "At a moderate 0.5 kg per week, about 20 weeks, or roughly five months. At an aggressive 1 kg per week it would be 10 weeks, but sustaining a 1,100 calorie daily deficit that long is difficult and costs more lean mass. Most people do better treating the faster number as a best case and planning against the moderate one.",
    },
    {
      question: "Is 1 kg per week a safe rate of weight loss?",
      answer:
        "Only for people carrying substantial excess weight. The usual guidance is to stay under 1% of body weight per week: at 100 kg that permits 1 kg, at 65 kg it means 0.65 kg. Above that threshold, a growing share of what you lose is muscle and water rather than fat, and the deficit required is large enough to be hard to hold.",
    },
    {
      question: "Why do these projections get less accurate over time?",
      answer:
        "They assume 7,700 calories per kilogram of fat and a fixed metabolic rate, and the second assumption breaks down. As you get lighter, your BMR falls because there is less tissue to maintain, and your body burns fewer calories doing the same activities. Real loss curves flatten while a linear projection keeps its slope. Recalculate every four to six weeks with your current weight.",
    },
    {
      question: "Should I create the deficit by eating less or moving more?",
      answer:
        "Both, weighted toward eating for the bulk of it. Diet changes generate a larger deficit for less effort: skipping a 400 calorie snack takes no time, while burning 400 calories takes about 90 minutes of brisk walking. But adding activity preserves lean mass during a deficit and stops your TDEE from falling as fast, so a deficit built entirely from food restriction tends to stall sooner.",
    },
    {
      question: "Why has my weight loss stalled?",
      answer:
        "Most commonly your TDEE has fallen: you are lighter, so the same deficit no longer exists. It can also be water retention masking real fat loss, which is normal after a hard workout or a high-sodium day and can hide two weeks of progress. Recalculate at your current weight, and judge progress on a two-to-three week trend rather than day-to-day readings.",
    },
    {
      question: "How many steps a day do I need to lose weight?",
      answer:
        "There is no fixed number, because it depends on the size of your deficit and your weight. As a rough guide, 10,000 steps burns roughly 300 to 500 calories for most adults, which is about half a typical daily deficit. Walking is the easiest activity to sustain at that volume, which is why it holds up better than more intense options over the months a real goal takes.",
    },
  ],
  cta: {
    title: "Make the Movement Side Automatic",
    description: "Download the Steps app to track your daily steps and calories burned without logging a thing.",
  },
  sticky: "Track your steps with Steps",
  howTo: TOOL_HOW_TO["weight-loss-calculator"],
};

export type WeightLossCalculatorMessages = typeof en;
export default en;

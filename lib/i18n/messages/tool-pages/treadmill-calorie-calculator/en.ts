const en = {
  meta: {
    title: "Treadmill Calorie Calculator: Free Calculator with Incline",
    description:
      "Treadmill calories by speed, incline and weight. A 155 lb adult burns ~120 cal in 30 min at 3 mph flat, ~200 cal at 5% incline. Free ACSM-based calculator.",
    keywords: [
      "treadmill calorie calculator",
      "treadmill calories burned",
      "treadmill incline calorie calculator",
      "calories burned on treadmill",
      "treadmill walking calories",
      "incline treadmill calories",
      "12-3-30 calories burned",
      "ACSM metabolic equation",
      "treadmill MET values",
    ],
    ogTitle: "Treadmill Calorie Calculator: Free Calculator with Incline",
    ogDescription:
      "Calculate treadmill calories by speed, incline, weight and time. Free calculator using the ACSM metabolic equations.",
    ogImageAlt: "Treadmill Calorie Calculator",
  },
  hero: {
    title: "Treadmill Calorie Calculator",
    subtitle:
      "Calculate calories burned on a treadmill from your speed, incline, weight and time. Uses the ACSM metabolic equations, so the incline is factored properly instead of ignored.",
  },
  calculator: {
    session: "Your Treadmill Session",
    weight: "Weight",
    speed: "Speed",
    incline: "Incline: {percent}%",
    duration: "Duration",
    minutes: "minutes",
    caloriesBurned: "Calories Burned",
    kcalValue: "{value} kcal",
    inclineAdds:
      "The {grade}% incline adds {extra} kcal versus the same session on the flat ({flat} kcal).",
    met: "MET",
    distance: "Distance",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "Est. steps",
    fatBurned: "Fat burned",
    grams: "{value} g",
    equation: "Using the ACSM {gait} metabolic equation ({vo2} ml/kg/min VO₂).",
    gaitWalking: "walking",
    gaitRunning: "running",
    tableTitle: "Calories by Incline",
    tableSubtitle: "Same weight, speed and duration. Only the grade changes.",
    colIncline: "Incline",
    colMet: "MET",
    colCalories: "Calories",
    colVsFlat: "vs flat",
    vsFlat: "+{percent}%",
  },
  resultCta: {
    headline: "Track the calories you actually burn",
    description:
      "Steps counts every step in the background and turns it into real calories burned each day, no manual logging needed.",
  },
  info: {
    title: "How We Calculate Treadmill Calories",
    intro:
      "A single MET value cannot describe treadmill work, because grade changes the energy cost at every speed. We use the ACSM metabolic equations, which estimate oxygen uptake from speed and grade separately, then convert that to calories.",
    formulaTitle: "The Formulas",
    formulas: [
      { strong: "Walking VO₂", rest: "= (0.1 × S) + (1.8 × S × G) + 3.5" },
      { strong: "Running VO₂", rest: "= (0.2 × S) + (0.9 × S × G) + 3.5" },
      {
        strong: "",
        rest: "S is speed in metres per minute, G is grade as a fraction (5% = 0.05). VO₂ is in ml/kg/min.",
      },
      {
        strong: "METs",
        rest: "= VO₂ ÷ 3.5, and kcal/min = METs × 3.5 × weight(kg) ÷ 200",
      },
      {
        strong: "Example:",
        rest: "70 kg at 5 km/h and 5% grade gives VO₂ 19.3, about 5.5 METs, roughly 405 kcal per hour.",
      },
    ],
    note: "The walking equation applies below 6.5 km/h and the running equation at or above it, which is where most people transition from a fast walk to a jog. Estimates assume you are not holding the handrails.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "How many calories does 30 minutes on the treadmill burn?",
      answer:
        "A 70 kg (155 lb) adult walking 30 minutes at 5 km/h (3.1 mph) on a flat belt burns roughly 125 calories. Raise the incline to 5% and the same session burns about 205 calories. At 10% it is closer to 285. Incline matters more than any other setting you can change.",
    },
    {
      question: "Does incline really burn more calories?",
      answer:
        "Substantially. Every 1% of grade adds vertical work on top of horizontal movement. At walking speeds a 5% incline raises energy cost by roughly 60% versus flat ground, and a 10% incline can more than double it, all at the same speed and duration.",
    },
    {
      question: "How many calories does the 12-3-30 workout burn?",
      answer:
        "12-3-30 means 12% incline, 3 mph, 30 minutes. For a 70 kg adult that is approximately 300 calories, versus about 120 calories for the same 30 minutes at 3 mph on the flat. The incline is doing most of the work: it accounts for roughly 60% of the total burn.",
    },
    {
      question: "Is the treadmill's own calorie readout accurate?",
      answer:
        "Usually not. Most machines assume a default body weight and ignore the weight you enter for the console display, which typically overstates burn by 15 to 25%. A calculation based on your actual weight, speed and grade is more reliable.",
    },
    {
      question: "Do I burn more calories walking on an incline or running flat?",
      answer:
        "They can match, but you need a steep grade. Walking at 5 km/h on a 12% incline is about 8.5 METs, which is essentially the same as jogging at 8 km/h on the flat (8.6 METs). At a gentler 10% grade the incline walk is 7.7 METs, so slightly less. The advantage of the incline walk is comparable energy cost at much lower joint impact.",
    },
    {
      question: "Should I hold the handrails?",
      answer:
        "No, if calorie burn is the goal. Holding the rails transfers part of your body weight to your arms and can cut actual energy expenditure by 20 to 25%, especially at steep inclines, while the console keeps reporting the unsupported figure.",
    },
  ],
  cta: {
    title: "Track Your Treadmill Workouts",
    description:
      "Download the Steps app to automatically track your walks, calories burned, and progress over time.",
  },
  sticky: "Track your steps with Steps",
};

export type TreadmillCalorieCalculatorMessages = typeof en;
export default en;

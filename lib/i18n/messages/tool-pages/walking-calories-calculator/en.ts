import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Walking Calorie Calculator: Free Calculator by Weight & Pace",
    description:
      "Walking calories: a 155 lb adult burns ~150 cal in 30 min at 3.5 mph. Free calculator — instant cal estimate by weight, speed, time, distance, or steps.",
    keywords: [
      "walking calorie calculator",
      "walking calories calculator",
      "MET value walking",
      "MET walking 5 km/h",
      "MET value for walking 3.1 mph",
      "MET value brisk walking",
      "MET value walking average pace",
      "MET value walking moderate pace",
      "calories burned walking",
      "calories burned walking per km",
      "MET value walking 4 km/h",
      "MET value walking 4.5 km/h",
      "MET value walking 6 km/h",
      "calories burned walking calculator formula met",
    ],
    ogTitle: "Walking Calorie Calculator: Free Calculator by Weight & Pace",
    ogDescription:
      "A 155 lb adult burns ~150 cal in 30 min at 3.5 mph. Free walking calorie calculator — instant results by weight, speed, time, distance, or steps.",
    ogImageAlt: "Walking Calories Calculator",
  },
  hero: {
    title: "Walking Calorie Calculator & MET Values",
    subtitle:
      "Calculate calories burned walking using MET (Metabolic Equivalent) values for every walking speed — from slow strolls at 2 km/h to power walking at 7+ km/h. Includes a complete MET reference table.",
  },
  appCta: {
    headline: "Track the calories you actually burn",
    description:
      "Steps counts every step in the background and turns it into real calories burned each day, no manual logging needed.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    calculateBy: "Calculate By",
    distance: "Distance",
    time: "Time",
    weight: "Weight",
    duration: "Duration",
    minutes: "minutes",
    miles: "miles",
    walkingSpeed: "Walking Speed",
    speeds: {
      slow: { label: "Slow", description: "3.2 km/h (2 mph)" },
      normal: { label: "Normal", description: "5 km/h (3.1 mph)" },
      brisk: { label: "Brisk", description: "6.4 km/h (4 mph)" },
      fast: { label: "Fast", description: "7.2 km/h (4.5 mph)" },
    },
    caloriesBurned: "Calories Burned",
    walkingTime: "Walking Time",
    distanceResult: "Distance",
    steps: "Steps",
    fatBurned: "Fat Burned",
    metValue: "MET Value",
    metTableTitle: "Walking Speed & MET Values",
    metTableIntro:
      "MET (Metabolic Equivalent of Task) represents the energy cost of activities. Higher MET means more calories burned.",
    columns: {
      speed: "Speed",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "Description",
    },
    paceDescriptions: {
      slow: "Leisurely stroll",
      normal: "Average pace",
      brisk: "Fast walking",
      fast: "Power walking",
    },
  },
  info: {
    title: "How We Calculate Walking Calories",
    intro:
      "We use the MET (Metabolic Equivalent of Task) method to calculate calories burned. This scientifically-backed approach accounts for your body weight, walking duration, and intensity level.",
    formulaTitle: "The Formula",
    formula: "Calories = MET × Weight (kg) × Duration (hours)",
    metLabel: "MET:",
    metText:
      "Metabolic Equivalent of Task - represents energy expenditure relative to rest",
    exampleLabel: "Example:",
    example:
      "A 70kg person walking at normal pace (MET 3.5) for 1 hour burns: 3.5 × 70 × 1 = 245 calories",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How many calories does walking 1 mile burn?",
      answer:
        "Walking 1 mile burns approximately 80-100 calories for most people. The exact amount depends on your weight and walking speed. Heavier individuals burn more calories per mile.",
    },
    {
      question: "How many calories does 30 minutes of walking burn?",
      answer:
        "A 30-minute walk at normal pace burns roughly 100-150 calories for most adults. Walking briskly can increase this to 150-200 calories. Use the calculator above for a personalized estimate.",
    },
    {
      question: "How many calories does 40 minutes of walking burn?",
      answer:
        "A 40-minute walk burns roughly 140-200 calories at a moderate pace (3.0 mph) and 200-280 calories at a brisk pace (3.5-4.0 mph) for a 155 lb adult. At a power-walk pace of 5.0 mph, the same 40 minutes burns about 290 calories. At 6.0 mph (a fast walk or light jog, MET ~7.0), 40 minutes burns approximately 325-330 calories for a 155 lb person.",
    },
    {
      question: "How many calories does walking 40 minutes at 6.0 mph burn?",
      answer:
        "Walking 40 minutes at 6.0 mph (9.7 km/h) — a treadmill power-walking pace, MET ~7.0 — burns about 327 calories for a 155 lb (70 kg) person. Heavier walkers burn more: roughly 380 cal at 180 lbs, 422 cal at 200 lbs. Most adults can't sustain a true walk at this speed; many transition to a light jog. Use the calculator above for a precise number based on your weight.",
    },
    {
      question: "Does walking speed affect calorie burn?",
      answer:
        "Yes, significantly. Walking faster increases your MET value and burns more calories per minute. Brisk walking (6.4 km/h) burns about 30% more calories than a leisurely stroll (3.2 km/h).",
    },
    {
      question: "What is MET and why does it matter?",
      answer:
        "MET (Metabolic Equivalent of Task) is a scientific measure of energy expenditure. A MET of 1 represents your resting metabolic rate. Walking at normal pace has a MET of 3.5, meaning you burn 3.5 times more calories than at rest.",
    },
    {
      question: "What is the MET value for walking at average pace?",
      answer:
        "The MET value for walking at an average pace (about 5 km/h or 3.1 mph) is 3.5. This is the most common walking speed for adults and the baseline used in most calorie calculators. A 70 kg person burns approximately 245 calories per hour at this pace.",
    },
    {
      question: "What is the MET value for walking at moderate pace?",
      answer:
        "A moderate walking pace (4.0-4.5 km/h or 2.5-2.8 mph) has a MET value between 3.0 and 3.3. This is a comfortable, conversational pace ideal for daily walking. A 70 kg person burns 210-231 calories per hour at moderate pace.",
    },
    {
      question: "What is the MET value for walking at 5 km/h (3.1 mph)?",
      answer:
        "The MET value for walking at 5 km/h (3.1 mph) is 3.5. This is considered a normal walking pace. A 70 kg person walking at this speed burns approximately 245 calories per hour (3.5 × 70 = 245 kcal/hr).",
    },
    {
      question: "What is the MET value for walking at 4.5 km/h (2.8 mph)?",
      answer:
        "The MET value for walking at 4.5 km/h (2.8 mph) is 3.3. This is a steady, comfortable walking pace. For a 70 kg person, this burns about 231 calories per hour (3.3 × 70 = 231 kcal/hr).",
    },
    {
      question: "What is the MET value for brisk walking at 6 km/h?",
      answer:
        "Brisk walking at 6.0 km/h (3.7 mph) has a MET value of 4.5. This is about 30% more energy-intensive than normal walking (MET 3.5). A 70 kg person burns roughly 315 calories per hour at this pace.",
    },
    {
      question: "How much fat can I burn from walking?",
      answer:
        "One kilogram of body fat contains approximately 7,700 calories. Walking 10,000 steps daily (about 400 calories) would burn roughly 1 kg of fat every 19 days, assuming no change in diet. Combine walking with a healthy diet for best results.",
    },
  ],
  formula: {
    title: "How the Walking Calories Formula Works",
    intro:
      "The {name} uses MET (Metabolic Equivalent of Task) values from the {source} — the same reference used by exercise physiologists worldwide. The formula is:",
    name: "calories burned walking calculator formula",
    source: "Compendium of Physical Activities",
    equation: "Calories = MET × Weight (kg) × Duration (hours)",
    glance:
      "Each walking speed has a specific MET value. Here are the most searched MET values at a glance:",
    highlights: [
      { phrase: "MET value walking 3 mph", detail: "(4.8 km/h) =" },
      { phrase: "MET value moderate pace", detail: "(3.1 mph) =" },
      { phrase: "MET value brisk walking", detail: "(4 mph) =" },
      { phrase: "MET value walking 5 km/h", detail: "(3.1 mph) =" },
    ],
    chartNote:
      "For a complete breakdown, see our {chart} with every speed from slow strolls to race walking, plus incline and terrain adjustments.",
    chartLabel: "MET Values for Walking Chart",
  },
  understanding: {
    title: "Understanding MET Values for Walking",
    term: "MET (Metabolic Equivalent of Task)",
    body:
      "{term} is the standard scientific measure of exercise intensity. One MET equals your body's energy expenditure at complete rest — about 1 calorie per kilogram of body weight per hour. When an activity has a MET value of 3.5, it means you're burning 3.5 times more energy than sitting still.",
    levels: {
      light: {
        title: "Light Walking",
        detail: "Slow stroll, window shopping pace (2–4 km/h)",
      },
      moderate: {
        title: "Moderate Walking",
        detail: "Normal to brisk pace, most common (4–6 km/h)",
      },
      vigorous: {
        title: "Vigorous Walking",
        detail: "Power walking, race walking, or uphill (6+ km/h)",
      },
    },
    footnote:
      "The MET values in our calculator come from the Compendium of Physical Activities, the gold-standard reference used by exercise scientists worldwide. Walking at 5 km/h (3.1 mph) — the most commonly searched speed — has a MET value of 3.5, meaning a 70 kg person burns 245 calories per hour at that pace.",
  },
  metTable: {
    title: "Complete MET Values for Walking Speeds",
    intro:
      "MET (Metabolic Equivalent of Task) measures energy expenditure. A MET of 1.0 equals your resting metabolic rate. Use the table below to find the exact MET value for your walking speed. Values are based on the Compendium of Physical Activities.",
    columns: {
      activity: "Walking Activity",
      kmh: "Speed (km/h)",
      mph: "Speed (mph)",
      met: "MET Value",
      cal: "Cal/hr (70 kg)",
    },
    activities: {
      "very-slow": "Very slow walk",
      "slow-stroll": "Slow stroll",
      leisurely: "Leisurely walk",
      comfortable: "Comfortable pace",
      moderate: "Moderate walk",
      steady: "Steady pace",
      normal: "Normal walking",
      purposeful: "Purposeful walk",
      brisk: "Brisk walking",
      fast: "Fast walking",
      "very-fast": "Very fast walk",
      race: "Race walking",
      "uphill-3": "Walking uphill (3% grade)",
      "uphill-6": "Walking uphill (6% grade)",
    },
    footnote:
      "Calories per hour calculated for a 70 kg (154 lbs) person. Your actual calorie burn depends on your weight — use the calculator above for a personalized estimate. Highlighted rows show the most common walking paces. Source: Compendium of Physical Activities.",
  },
  cta: {
    title: "Track Your Walking Workouts",
    description:
      "Download the Steps app to automatically track your walks, calories burned, and progress over time.",
  },
  howTo: TOOL_HOW_TO["walking-calories-calculator"],
};

export type WalkingCaloriesMessages = typeof en;
export default en;

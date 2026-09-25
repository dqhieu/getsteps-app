import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Steps to Distance Calculator: 1 km ≈ 1,300 Steps",
    description:
      "1 km ≈ 1,300 steps. 1 mile ≈ 2,100 steps. 5,000 steps ≈ 3.8 km / 2.4 mi. Free step distance calculator — personalize by your height and stride length.",
    keywords: [
      "km in steps",
      "steps to km",
      "1 km in steps",
      "2 km in steps",
      "3 km in steps",
      "6500 steps in km",
      "step distance calculator",
      "stride length calculator",
      "steps to distance",
      "distance to steps",
      "walking distance calculator",
      "step length calculator",
      "how many steps per km",
      "steps to miles",
    ],
    ogTitle: "Steps to Distance Calculator: 1 km ≈ 1,300 Steps",
    ogDescription:
      "1 km ≈ 1,300 steps · 5,000 steps ≈ 3.8 km / 2.4 mi · 10,000 ≈ 7.6 km / 4.7 mi. Free step distance calculator personalized by your height.",
    ogImageAlt: "Step Distance Calculator",
  },
  hero: {
    title: "Step Distance Calculator",
    subtitle:
      "Convert steps to distance or distance to steps. Get personalized results based on your height, gender, and stride length.",
  },
  resultCta: {
    headline: "Track your real steps and distance",
    description:
      "Steps counts your steps automatically and shows your real distance, pace, and calories every day, no manual entry needed.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    yourInformation: "Your Information",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: "years",
    height: "Height",
    stepLength: "Your estimated step length: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} inches)",
    stepsToDistance: "Steps to Distance",
    distanceToSteps: "Distance to Steps",
    numberOfSteps: "Number of Steps",
    stepsPlaceholder: "Enter number of steps",
    distance: "Distance",
    distancePlaceholder: "Enter distance",
    miles: "miles",
    result: "Result",
    kmValue: "{distance} km",
    milesParen: "({distance} miles)",
    stepsValue: "{steps} steps",
    estimatedCalories: "Estimated Calories",
    kcalValue: "{calories} kcal",
    walkingTime: "Walking Time",
    hoursMinutes: "{hours}h {minutes}m",
    minutesOnly: "{minutes} min",
    referenceTitle: "Quick Reference Table",
    referenceSubtitle:
      "Common step goals and their equivalent distances based on your profile",
    colSteps: "Steps",
    colDistance: "Distance",
    colCalories: "Calories",
    colTime: "Time",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "How We Calculate Your Step Length",
    intro:
      "Your step length is a key factor in determining how far you travel with each step. We estimate your step length using a research-based formula that considers your height, gender, and age.",
    formulaTitle: "The Formula",
    maleLabel: "Male:",
    maleFormula: "Step Length = Height (cm) x 0.415",
    femaleLabel: "Female:",
    femaleFormula: "Step Length = Height (cm) x 0.413",
    ageLabel: "Age adjustment:",
    ageFormula: "Step length decreases by approximately 1% per decade after age 40",
    average:
      "The average step length for adults ranges from 60 to 80 cm (24 to 31 inches). Factors like walking speed, terrain, and fitness level can also affect your actual step length.",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How many steps are in a mile?",
      answer:
        "On average, there are approximately 2,000 to 2,500 steps in a mile, depending on your step length. A person with a longer stride will take fewer steps to cover the same distance.",
    },
    {
      question: "How many steps are in a kilometer?",
      answer:
        "On average, there are approximately 1,250 to 1,550 steps in a kilometer. Use the calculator above to get a personalized estimate based on your profile.",
    },
    {
      question: "Is 10,000 steps a day enough?",
      answer:
        "10,000 steps per day is a popular goal and equals roughly 5 miles (8 km) of walking. Research suggests that even 7,000-8,000 steps per day can provide significant health benefits. The best goal is one that challenges you while remaining achievable.",
    },
    {
      question: "How many steps is 1.8 km?",
      answer:
        "1.8 km is approximately 2,340 steps for an average adult (stride length ~77 cm). Use the calculator above with your height for a more precise estimate.",
    },
    {
      question: "How many steps is 3.5 km?",
      answer:
        "3.5 km is approximately 4,550 steps for an average adult. Taller people take fewer steps (longer stride), while shorter people take more.",
    },
    {
      question: "How accurate is this calculator?",
      answer:
        "This calculator provides a reasonable estimate based on your physical characteristics. For the most accurate results, you can measure your actual step length by walking a known distance and counting your steps.",
    },
  ],
  conversionsTitle: "Quick conversion tables",
  conversions: [
    "10,000 steps to miles",
    "5,000 steps to miles",
    "Steps in a mile",
    "Steps in a km",
    "Steps to km table",
    "Steps to miles table",
    "Steps to calories table",
  ],
  allConversions: "All conversions →",
  stepsToKm: {
    title: "Steps to Km: How Many Kilometers in Your Steps?",
    intro:
      "Converting {phrase} depends on your stride length, which varies by height. As a quick rule of thumb: {ruleA} for an average adult, and {ruleB}.",
    phrase: "steps to km",
    ruleA: "1,000 steps ≈ 0.75 km",
    ruleB: "1 km ≈ 1,300 steps",
    cards: [
      { value: "0.75 km", label: "1,000 steps" },
      { value: "3.8 km", label: "5,000 steps" },
      { value: "7.5 km", label: "10,000 steps" },
      { value: "15 km", label: "20,000 steps" },
    ],
    guide:
      "These are averages — your actual distance depends on your height and stride length. Use the calculator above for a personalized conversion, or see our detailed guide on {link} with height-based charts.",
    guideLink: "how many steps in a kilometer",
  },
  kmTable: {
    title: "Km to Steps Quick Reference",
    intro:
      "Approximate step counts for common distances, based on an average stride length of 0.75 m (average adult).",
    colDistance: "Distance",
    colSteps: "Steps (approx.)",
    colTime: "Walking Time",
    rows: [
      { distance: "0.5 km", steps: "650", time: "~6 min" },
      { distance: "1 km", steps: "1,300", time: "~12 min" },
      { distance: "1.5 km", steps: "1,950", time: "~18 min" },
      { distance: "1.8 km", steps: "2,340", time: "~22 min" },
      { distance: "2 km", steps: "2,600", time: "~24 min" },
      { distance: "2.5 km", steps: "3,250", time: "~30 min" },
      { distance: "3 km", steps: "3,900", time: "~36 min" },
      { distance: "3.5 km", steps: "4,550", time: "~42 min" },
      { distance: "4 km", steps: "5,200", time: "~48 min" },
      { distance: "5 km (~3.1 miles)", steps: "6,500", time: "~60 min" },
      { distance: "6 km", steps: "7,800", time: "~72 min" },
      { distance: "7 km", steps: "9,100", time: "~84 min" },
      { distance: "8 km (~5 miles)", steps: "10,400", time: "~96 min" },
      { distance: "10 km (~6.2 miles)", steps: "13,000", time: "~2 hr" },
      { distance: "12 km", steps: "15,600", time: "~2 hr 24 min" },
      { distance: "15 km", steps: "19,500", time: "~3 hr" },
      { distance: "20 km", steps: "26,000", time: "~4 hr" },
    ],
    footnote:
      "Based on average stride length (~0.75 m) and normal walking pace (~5 km/h). Use the calculator above for results personalized to your height and gender.",
  },
  stepsTable: {
    title: "Steps to Km & Miles Quick Reference",
    intro:
      "Approximate distance in km and miles for common step counts, based on an average stride length of 0.75 m.",
    colSteps: "Steps",
    colKm: "Km",
    colMiles: "Miles",
    rows: [
      { steps: "1,000", km: "0.75 km", miles: "0.47 mi" },
      { steps: "2,000", km: "1.5 km", miles: "0.93 mi" },
      { steps: "2,500", km: "1.9 km", miles: "1.17 mi" },
      { steps: "3,000", km: "2.25 km", miles: "1.4 mi" },
      { steps: "5,000", km: "3.8 km", miles: "2.4 mi" },
      { steps: "6,000", km: "4.5 km", miles: "2.8 mi" },
      { steps: "6,500", km: "4.9 km", miles: "3.0 mi" },
      { steps: "7,000", km: "5.25 km", miles: "3.3 mi" },
      { steps: "7,500", km: "5.6 km", miles: "3.5 mi" },
      { steps: "10,000", km: "7.5 km", miles: "4.7 mi" },
      { steps: "12,000", km: "9.0 km", miles: "5.6 mi" },
      { steps: "13,000", km: "9.75 km", miles: "6.05 mi" },
      { steps: "15,000", km: "11.25 km", miles: "7.0 mi" },
      { steps: "20,000", km: "15 km", miles: "9.3 mi" },
    ],
    footnote:
      "Distances assume an average adult stride. Taller walkers cover more ground per step; shorter walkers cover less. Use the calculator above for a personalized result based on your height.",
  },
  cta: {
    title: "Track Your Steps Automatically",
    description:
      "Download the Steps app to track your daily steps, distance, and calories automatically on your iPhone and Apple Watch.",
  },
  howTo: TOOL_HOW_TO["step-distance-calculator"],
};

export type StepDistanceCalculatorMessages = typeof en;
export default en;

import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Distance Equivalent Calculator - km, Miles, Meters, Steps",
    description:
      "Convert any running distance between kilometers, miles, meters, and yards. See equivalent steps, estimated time, and calories burned for walking, jogging, or running.",
    keywords: [
      "distance converter",
      "km to miles calculator",
      "how many steps in a mile",
      "distance equivalent calculator",
      "meters to miles converter",
      "running distance calculator",
      "km to miles running",
    ],
    ogTitle: "Distance Equivalent Calculator - km, Miles, Meters, Steps",
    ogDescription:
      "Convert any running distance between kilometers, miles, meters, and yards. See equivalent steps, estimated time, and calories burned for walking, jogging, or running.",
    ogImageAlt: "Distance Equivalent Calculator",
  },
  hero: {
    title: "Distance Equivalent Calculator",
    subtitle:
      "Convert any distance between km, miles, meters, and yards — and see equivalent steps, time, and calories.",
  },
  intro:
    "Enter any distance in kilometers, miles, meters, or yards and instantly see all equivalent values. Includes estimated step count, time to cover the distance walking or running, and approximate calories burned.",
  calculator: {
    enterDistance: "Enter Distance",
    placeholder: "5",
    units: {
      km: "km",
      miles: "miles",
      meters: "meters",
      yards: "yards",
    },
    quick: {
      "5k": "5K",
      "10k": "10K",
      half: "Half Marathon",
      marathon: "Marathon",
    },
    equivalents: "Distance Equivalents",
    kilometers: "Kilometers",
    miles: "Miles",
    meters: "Meters",
    yards: "Yards",
    feet: "Feet",
    approxSteps: "Approx. Steps",
    context: "Running Context",
    activity: "Activity",
    speed: "Speed",
    time: "Time",
    calories: "Calories",
    activities: {
      walking: "Walking",
      jogging: "Jogging",
      running: "Running",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "Calories estimated for a 70 kg person",
  },
  faqTitle: "Distance Conversion FAQ",
  faq: [
    {
      question: "How many km is a mile?",
      answer:
        "1 mile = 1.60934 km. Conversely, 1 km = 0.62137 miles. So a 5-mile run is about 8.05 km, and a 10 km run is about 6.21 miles.",
    },
    {
      question: "How many steps is 1 mile?",
      answer:
        "Approximately 2,000–2,500 steps depending on your height and stride length. The average is around 2,112 steps per mile (1,312 steps per km). Taller people with longer strides take fewer steps.",
    },
    {
      question: "How many km is a marathon?",
      answer:
        "A marathon is exactly 42.195 km (26.219 miles). A half marathon is 21.0975 km (13.109 miles). These distances are fixed by World Athletics regulations.",
    },
    {
      question: "How many steps is 5K?",
      answer:
        "Approximately 6,250–7,500 steps for most people. At the average stride of 1,312 steps/km, a 5K equals about 6,560 steps. This varies based on your height, gait, and terrain.",
    },
    {
      question: "How long does it take to walk 1 mile?",
      answer:
        "At an average walking pace of 5 km/h, about 12 minutes per mile. At a brisk walk of 6 km/h, about 10 minutes. Fitness walkers can cover a mile in under 9 minutes.",
    },
  ],
  cta: {
    title: "See exactly how far you've walked today in the Steps app.",
    description: "Track every step, every kilometer, and every calorie burned — all automatically.",
  },
  howTo: TOOL_HOW_TO["distance-equivalent-calculator"],
};

export type DistanceEquivalentCalculatorMessages = typeof en;
export default en;

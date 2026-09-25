import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Pace to Speed Converter - min/km, min/mile, km/h, mph",
    description:
      "Instantly convert running pace to speed and back. Convert min/km to km/h, min/mile to mph, and see your 5K and 10K finish times at any pace.",
    keywords: [
      "pace to speed converter",
      "min per km to km/h",
      "running pace calculator",
      "convert pace to speed",
      "min/km to mph",
      "running speed converter",
      "pace converter",
    ],
    ogTitle: "Pace to Speed Converter - min/km, min/mile, km/h, mph",
    ogDescription:
      "Instantly convert running pace to speed and back. Convert min/km to km/h, min/mile to mph, and see your 5K and 10K finish times at any pace.",
    ogImageAlt: "Pace to Speed Converter",
  },
  hero: {
    title: "Pace to Speed Converter",
    subtitle:
      "Instantly convert between running pace (min/km, min/mile) and speed (km/h, mph).",
  },
  intro:
    "Type any pace or speed value and all other units update instantly. See your estimated 5K and 10K finish times and how far you'd run in 30 or 60 minutes.",
  calculator: {
    title: "Enter any value to convert",
    paceKm: "Pace (min/km)",
    paceMile: "Pace (min/mile)",
    speedKmh: "Speed (km/h)",
    speedMph: "Speed (mph)",
    distanceTitle: "Distance Covered",
    min30: "30 min",
    min60: "60 min",
    raceTitle: "Race Finish Times",
    referenceTitle: "Reference Paces",
    activityColumn: "Activity",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "Click a row to load that pace",
    races: {
      "5k": "5K",
      "10k": "10K",
    },
    activities: {
      walking: "Walking",
      jogging: "Jogging",
      running: "Running",
      fast: "Fast Running",
      sprint: "Sprint",
    },
  },
  faqTitle: "Pace & Speed FAQ",
  faq: [
    {
      question: "How do I convert min/km to km/h?",
      answer:
        "Divide 60 by your min/km pace. For example, a pace of 5:00/km gives 60 ÷ 5 = 12 km/h. A slower pace of 6:00/km gives 60 ÷ 6 = 10 km/h.",
    },
    {
      question: "What is a good running pace in km/h?",
      answer:
        "Casual jog: 7–9 km/h; moderate running: 9–12 km/h; fast running: 12–16 km/h; elite marathon pace: 18+ km/h. Most recreational runners fall in the 8–11 km/h range.",
    },
    {
      question: "How do I convert min/km to min/mile?",
      answer:
        "Multiply your min/km pace by 1.60934 to get min/mile. For example, 5:00/km × 1.60934 = 8:03/mile. This converter handles that automatically.",
    },
    {
      question: "What speed is a 30-minute 5K?",
      answer:
        "A 30-minute 5K requires a pace of 6:00/km, which equals 10.0 km/h or 6.2 mph. That's a solid recreational running pace.",
    },
    {
      question: "What's the difference between pace and speed?",
      answer:
        "Pace is time per unit of distance (e.g., min/km) — lower is faster. Speed is distance per unit of time (e.g., km/h) — higher is faster. They represent the same thing with inverted units.",
    },
  ],
  cta: {
    title: "Track your runs and steps in the Steps app.",
    description: "Monitor your pace, distance, and daily step count — all in one place.",
  },
  howTo: TOOL_HOW_TO["pace-to-speed-converter"],
};

export type PaceToSpeedConverterMessages = typeof en;
export default en;

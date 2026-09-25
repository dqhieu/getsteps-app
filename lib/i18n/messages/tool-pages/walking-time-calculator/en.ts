import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Walking Time Calculator: 1 KM ≈ 12 min, 1 Mile ≈ 18 min",
    description:
      "How long to walk 1 km? ~12 min. 1 mile? ~18 min. 5 km? ~60 min. Free calculator for any distance at slow, normal, brisk, or fast pace.",
    keywords: [
      "walking time",
      "walking time calculator",
      "how long to walk 5 km",
      "8km walk time",
      "how long to walk a mile",
      "walking distance time",
      "walking pace calculator",
      "how long to walk 10000 steps",
      "walk duration calculator",
    ],
    ogTitle: "Walking Time Calculator: 1 KM ≈ 12 min, 1 Mile ≈ 18 min",
    ogDescription:
      "1 km ≈ 12 min, 1 mile ≈ 18 min, 5 km ≈ 60 min at normal pace. Free calculator for any distance at slow, normal, brisk, or fast pace.",
    ogImageAlt: "Walking Time Calculator",
  },
  hero: {
    title: "Walking Time Calculator",
    subtitle:
      "How long does it take to walk 5 km, 8 km, or 28 miles? Enter any distance and get walking time estimates for slow, normal, brisk, and fast paces.",
  },
  resultCta: {
    headline: "Track every walk automatically",
    description:
      "Steps logs your walking time, distance, and pace in the background, so you can see how all your real walks add up.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    title: "Calculate Walking Time",
    distance: "Distance",
    miles: "miles",
    walkingSpeed: "Walking Speed",
    speeds: {
      slow: { label: "Slow", description: "3.2 km/h", inline: "slow" },
      normal: { label: "Normal", description: "5.0 km/h", inline: "normal" },
      brisk: { label: "Brisk", description: "6.4 km/h", inline: "brisk" },
      fast: { label: "Fast", description: "7.2 km/h", inline: "fast" },
    },
    includeBreaks: "Include rest breaks (5 min every 30 min)",
    walkingTime: "Walking Time",
    breaksDetail: "{walking} walking + {breaks} min breaks",
    distanceLabel: "Distance",
    stepsLabel: "Steps",
    caloriesLabel: "Calories",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "Walking Time Reference",
    referenceSubtitle: "Time to walk common distances at {pace} pace ({speed} km/h)",
    colDistance: "Distance",
    colTime: "Time",
    hoursMinutes: "{hours}h {minutes}m",
    hoursOnly: "{hours}h",
    minutesOnly: "{minutes} min",
    distances: ["1 km", "1 mile", "2 km", "3 km", "5 km", "5 miles", "10 km", "Half Marathon"],
  },
  info: {
    title: "Walking Speed Guide",
    intro:
      "Walking speed varies based on fitness level, terrain, and purpose. Understanding different walking paces helps you plan your walks effectively.",
    paceTitle: "Walking Pace Guide",
    paces: [
      {
        label: "Slow (3.2 km/h / 2 mph):",
        text: "A leisurely stroll, suitable for recovery walks or casual conversation",
      },
      {
        label: "Normal (5 km/h / 3.1 mph):",
        text: "Average walking pace for most adults",
      },
      {
        label: "Brisk (6.4 km/h / 4 mph):",
        text: "Purposeful walking that elevates heart rate",
      },
      {
        label: "Fast (7.2 km/h / 4.5 mph):",
        text: "Power walking pace, borderline jogging",
      },
    ],
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How long does it take to walk 1 km?",
      answer:
        "At a normal pace (5 km/h), it takes about 12 minutes to walk 1 km. At a slow pace (3.2 km/h) it's ~19 minutes, and at a brisk pace (6.4 km/h) you can finish in about 9 minutes. That's roughly 1,300 steps for an average adult.",
    },
    {
      question: "How long does it take to walk 5 km?",
      answer:
        "At a normal pace (5 km/h), it takes about 60 minutes to walk 5 km. At a brisk pace (6.4 km/h), you can complete it in about 47 minutes.",
    },
    {
      question: "How long does it take to walk 1 mile?",
      answer:
        "A mile takes approximately 15-20 minutes at a normal walking pace. Brisk walkers can complete it in 12-15 minutes.",
    },
    {
      question: "How long does it take to walk 10,000 steps?",
      answer:
        "10,000 steps equals roughly 7-8 km (4-5 miles). At a normal pace, this takes about 1 hour and 20-40 minutes. You don't need to do this all at once – spread it throughout the day.",
    },
    {
      question: "How long does it take to walk 7 km?",
      answer:
        "At a normal pace (5 km/h), it takes about 84 minutes (1 hour 24 min) to walk 7 km. At a brisk pace (6.4 km/h), you can finish in about 66 minutes. That's roughly 9,100 steps for an average adult.",
    },
    {
      question: "How long does it take to walk 8 km?",
      answer:
        "Walking 8 km takes about 96 minutes (1 hour 36 min) at a normal pace (5 km/h), or about 75 minutes at a brisk pace. That's approximately 10,400 steps.",
    },
    {
      question: "Should I include breaks in my walking time?",
      answer:
        "For walks longer than 30 minutes, short breaks can help maintain energy and prevent fatigue. Our calculator can add 5-minute breaks for every 30 minutes of walking if you enable this option.",
    },
  ],
  precomputedTitle: "Pre-computed walking times",
  precomputed: [
    "How long to walk 10,000 steps",
    "How long to walk 5 miles",
    "How long to walk 3 miles",
    "How long to walk 1 mile",
  ],
  allConversions: "All conversions →",
  cta: {
    title: "Track Your Walks Automatically",
    description:
      "Download the Steps app to track your walking time, distance, and pace automatically.",
  },
  howTo: TOOL_HOW_TO["walking-time-calculator"],
};

export type WalkingTimeCalculatorMessages = typeof en;
export default en;

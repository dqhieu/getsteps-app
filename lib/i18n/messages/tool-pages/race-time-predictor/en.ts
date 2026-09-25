import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Race Time Predictor: Calculate Your 5K, 10K, Half & Full Marathon Time",
    description:
      "Free race time predictor — enter your pace to get your finish time, or set a goal time to find the pace you need. Instant results for 5K, 10K, half marathon, and marathon.",
    keywords: [
      "race time predictor",
      "race finish time calculator",
      "what pace do I need for a sub-2 hour half marathon",
      "5k finish time calculator",
      "marathon pace calculator",
      "running goal time calculator",
    ],
    ogTitle: "Race Time Predictor: Calculate Your 5K, 10K, Half & Full Marathon Time",
    ogDescription:
      "Free race time predictor — enter your pace to get your finish time, or set a goal time to find the pace you need. Instant results for 5K, 10K, half marathon, and marathon.",
    ogImageAlt: "Race Time Predictor",
  },
  hero: {
    title: "Race Time Predictor",
    subtitle:
      "Calculate your race finish time from your target pace, or find the exact pace you need to hit your goal time.",
  },
  intro:
    "Enter your race distance and either your target pace or goal finish time. Instantly see your predicted finish time or required per-kilometer pace, plus 5K splits to pace your race perfectly.",
  calculator: {
    title: "Race Settings",
    distanceLabel: "Race Distance",
    customPlaceholder: "Distance in km",
    modeLabel: "What do you want to calculate?",
    finishTimeMode: "Finish Time",
    requiredPaceMode: "Required Pace",
    paceLabel: "Your Pace (min/km, e.g. 5:30)",
    goalLabel: "Goal Finish Time (H:MM:SS or MM:SS)",
    calculate: "Calculate",
    predictedFinish: "Predicted Finish Time",
    requiredPaceResult: "Required Pace",
    pacePerKm: "Pace /km",
    pacePerMi: "Pace /mi",
    speedKmh: "Speed km/h",
    speedMph: "Speed mph",
    splitsTitle: "5km Splits",
    markerColumn: "Marker",
    cumulativeColumn: "Cumulative Time",
    races: {
      "5k": "5K",
      "10k": "10K",
      half: "Half Marathon",
      marathon: "Marathon",
      custom: "Custom",
    },
  },
  faqTitle: "Race Pacing FAQ",
  faq: [
    {
      question: "What pace do I need for a sub-2 hour half marathon?",
      answer:
        "You need to maintain 5:41/km (9:09/mile), equivalent to about 10.6 km/h. Use the calculator above and select 'Required Pace', choose Half Marathon, and enter 2:00:00 as your goal time.",
    },
    {
      question: "What pace do I need to run a 25-minute 5K?",
      answer:
        "A 25-minute 5K requires a pace of 5:00/km (8:03/mile). That's a solid intermediate goal — most beginners start around 6:30–7:00/km and work down from there.",
    },
    {
      question: "How do I use splits in a race?",
      answer:
        "Run even splits (same pace every 5km) for the most predictable performance. Negative splits — running the second half faster than the first — are ideal and what elite runners aim for. Avoid going out too fast in the first km.",
    },
    {
      question: "What is a good 10K time?",
      answer:
        "Beginner: 60–70 min; Intermediate: 50–60 min; Advanced: 40–50 min; Elite: under 35 min. The world record is under 27 minutes. Most recreational runners finish between 50 and 65 minutes.",
    },
    {
      question: "How do I pace myself in a half marathon?",
      answer:
        "Start at your goal pace for the first 10km, then push the final 11km if you feel strong. Avoid running faster than goal pace early — the second half feels much harder than the first regardless of pace.",
    },
  ],
  cta: {
    title: "Track your training steps every day in the Steps app.",
    description: "Log every run, track your splits, and hit your race goals with the Steps app.",
  },
  howTo: TOOL_HOW_TO["race-time-predictor"],
};

export type RaceTimePredictorMessages = typeof en;
export default en;

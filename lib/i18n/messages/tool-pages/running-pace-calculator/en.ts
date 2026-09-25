import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Running Pace Calculator - Convert Pace, Speed & Race Times",
    description:
      "Calculate your running pace in min/km or min/mile, convert between pace and speed, and predict finish times for 5K, 10K, half marathon, and marathon.",
    keywords: [
      "running pace calculator",
      "pace calculator",
      "min per km calculator",
      "min per mile calculator",
      "race time predictor",
      "running speed calculator",
      "5k pace calculator",
    ],
    ogTitle: "Running Pace Calculator - Convert Pace, Speed & Race Times",
    ogDescription:
      "Calculate your running pace in min/km or min/mile, convert between pace and speed, and predict finish times for 5K, 10K, half marathon, and marathon.",
    ogImageAlt: "Running Pace Calculator",
  },
  hero: {
    title: "Running Pace Calculator",
    subtitle:
      "Convert between running pace, speed, and race finish times. Works for any distance — from 5K to marathon.",
  },
  intro:
    "Enter your pace, speed, or time and distance to instantly convert between all running metrics and predict your finish time for any race distance from 5K to marathon.",
  calculator: {
    title: "Calculate Pace",
    tabs: {
      pace: "Pace",
      speed: "Speed",
      timeDistance: "Time + Distance",
    },
    paceLabel: "Pace (MM:SS)",
    paceHint: "Enter pace in minutes:seconds format (e.g., 5:30)",
    speedLabel: "Speed",
    distanceLabel: "Distance",
    finishTimeLabel: "Finish Time (MM:SS or H:MM:SS)",
    statsTitle: "Your Running Stats",
    pacePerKm: "Pace /km",
    pacePerMi: "Pace /mi",
    speedKmh: "Speed km/h",
    speedMph: "Speed mph",
    predictionsTitle: "Race Time Predictions",
    distanceColumn: "Distance",
    finishTimeColumn: "Finish Time",
    races: {
      "5k": "5K",
      "10k": "10K",
      half: "Half Marathon",
      marathon: "Marathon",
    },
  },
  faqTitle: "Understanding Running Pace",
  faq: [
    {
      question: "What is a good running pace?",
      answer:
        "It depends on your experience level. Beginners typically run at 7–9 min/km (11–14 min/mile). Intermediate runners average 5–7 min/km (8–11 min/mile). Advanced runners maintain under 5 min/km (under 8 min/mile). Elite marathon runners sustain paces below 3:00/km. The best pace is the one that lets you finish your run feeling challenged but not completely exhausted.",
    },
    {
      question: "How do I convert min/km to min/mile?",
      answer:
        "Multiply your min/km pace by 1.60934 to get min/mile. For example, a 5:00/km pace equals 5:00 × 1.60934 = 8:03/mile. Conversely, divide your min/mile pace by 1.60934 to get min/km. This calculator handles the conversion automatically when you toggle between units.",
    },
    {
      question: "What pace do I need to run a sub-2-hour half marathon?",
      answer:
        "To finish a half marathon (21.0975 km) in under 2 hours, you need to maintain a pace faster than 5:41/km (9:09/mile), which equals a speed of about 10.6 km/h (6.6 mph). This is a common intermediate goal — aim to build your base by consistently running at 6:00–6:30/km before targeting the sub-2-hour barrier.",
    },
    {
      question: "What is the average running pace?",
      answer:
        "Most recreational runners run at 6–8 min/km (10–13 min/mile). The average finish time for a 5K race is around 28–35 minutes, implying a pace of 5:30–7:00/km. For half marathons, average finish times cluster around 2:00–2:20, and for full marathons around 4:20–4:45. These vary significantly by age, fitness level, and terrain.",
    },
    {
      question: "How can I improve my running pace?",
      answer:
        "Combine three types of training for best results: interval runs (short bursts at faster-than-race pace with recovery), long slow runs (build aerobic base at conversational pace), and tempo runs (sustained effort at comfortably hard pace). Add strength training 1–2 times per week for injury prevention. Consistency matters most — aim to run at least 3 times per week and increase weekly mileage by no more than 10% to avoid injury.",
    },
  ],
  cta: {
    title: "Track Your Health Journey",
    description: "Track your runs and daily steps together in the Steps app.",
  },
  howTo: TOOL_HOW_TO["running-pace-calculator"],
};

export type RunningPaceCalculatorMessages = typeof en;
export default en;

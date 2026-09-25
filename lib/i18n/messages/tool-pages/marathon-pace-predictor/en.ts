import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Marathon Time Predictor: Predict Your Finish Time from Any Race Result",
    description:
      "Ran a 5K or 10K? Predict your marathon and half marathon finish time instantly using the Riegel formula. Free calculator with pace tables and training tips.",
    keywords: [
      "marathon race predictor",
      "race time predictor",
      "marathon time calculator",
      "half marathon time predictor",
      "Riegel formula calculator",
      "predict marathon finish time",
      "5k to marathon time converter",
    ],
    ogTitle: "Marathon Time Predictor: Predict Your Finish Time from Any Race Result",
    ogDescription:
      "Ran a 5K or 10K? Predict your marathon and half marathon finish time instantly using the Riegel formula.",
    ogImageAlt: "Marathon Race Predictor",
  },
  hero: {
    title: "Marathon Race Predictor",
    subtitle:
      "Enter any recent race result to predict your finish times across all standard race distances.",
  },
  intro:
    "Enter your recent race time and distance to instantly predict your 5K, 10K, half marathon, and marathon finish times using the Riegel formula — the gold standard for race time prediction.",
  calculator: {
    distanceLabel: "Your Race Distance",
    customDistanceLabel: "Distance (km)",
    finishTimeLabel: "Your Finish Time",
    hour: "H",
    minute: "M",
    second: "S",
    invalidDistance: "Please enter a valid distance.",
    invalidTime: "Please enter a valid time.",
    predict: "Predict Race Times",
    resultsTitle: "Predicted Finish Times",
    distanceColumn: "Distance",
    timeColumn: "Time",
    paceKmColumn: "Pace (km)",
    paceMileColumn: "Pace (mi)",
    speedColumn: "Speed",
    you: "you",
    footnote:
      "Predictions use the Riegel formula (fatigue factor 1.06). Most accurate for recent races at similar effort.",
    races: {
      "5k": "5K",
      "10k": "10K",
      half: "Half Marathon",
      marathon: "Marathon",
      custom: "Custom (km)",
    },
  },
  info: {
    title: "About Race Time Prediction",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How accurate is the Riegel formula?",
      answer:
        "The Riegel formula is accurate to within ±5–10% for well-trained runners predicting across similar distances. Accuracy decreases with large distance gaps (e.g. 5K to marathon) or when the input race was not run at maximum effort.",
    },
    {
      question: "What is the Riegel formula?",
      answer:
        "T2 = T1 × (D2/D1)^1.06, where T1 is your known finish time, D1 is the known distance, D2 is the target distance, and T2 is the predicted time. The exponent 1.06 accounts for the increasing effect of fatigue over longer distances.",
    },
    {
      question: "Can I predict a marathon from a 5K?",
      answer:
        "Yes, but the prediction will be less accurate. The formula works best with input races closer to the target distance. For marathon prediction, a recent 10K or half marathon result will give the most reliable estimate.",
    },
    {
      question: "What is a good marathon finish time?",
      answer:
        "Beginner: 4:30–5:30 | Intermediate: 3:30–4:30 | Advanced: under 3:30 | Elite: under 2:30. The average marathon finish time is around 4:30 for men and 4:55 for women.",
    },
    {
      question: "How do I use this to pace my race?",
      answer:
        "Use the pace column for your target distance to set your per-kilometer strategy. For example, if your predicted marathon pace is 5:30/km, aim to run the first half slightly slower (5:35/km) and negative split the second half.",
    },
  ],
  cta: {
    title: "Train Smarter With the Steps: Workout & Pedometer",
    description:
      "Train smarter by tracking your daily steps and activity in the Steps: Workout & Pedometer app.",
  },
  howTo: TOOL_HOW_TO["marathon-pace-predictor"],
};

export type MarathonPacePredictorMessages = typeof en;
export default en;

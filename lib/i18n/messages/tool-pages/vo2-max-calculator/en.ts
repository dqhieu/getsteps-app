import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "VO2 Max Calculator - Estimate Your Aerobic Fitness Level",
    description:
      "Estimate your VO2 max using the heart rate method or Cooper 12-minute run test. Find out your aerobic fitness level and how to improve it.",
    keywords: [
      "VO2 max calculator",
      "vo2max calculator",
      "aerobic fitness calculator",
      "Cooper test calculator",
      "how to calculate VO2 max",
      "VO2 max by age",
      "cardiovascular fitness test",
    ],
    ogTitle: "VO2 Max Calculator - Estimate Your Aerobic Fitness Level",
    ogDescription:
      "Estimate your VO2 max using the heart rate method or Cooper 12-minute run test. Find out your aerobic fitness level and how to improve it.",
    ogImageAlt: "VO2 Max Calculator",
  },
  hero: {
    title: "VO2 Max Calculator",
    subtitle:
      "Estimate your VO2 max — the gold standard measure of aerobic fitness — using your heart rate or a 12-minute run test.",
  },
  intro:
    "Enter your age, gender, and resting heart rate (or Cooper 12-minute run distance) to estimate your VO2 max and discover where you rank among your age group.",
  calculator: {
    method: "Method",
    heartRateMethod: "Heart Rate Method",
    cooperMethod: "Cooper 12-Min Run",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: { one: "year", other: "years" },
    restingHeartRate: "Resting Heart Rate",
    bpm: "bpm",
    restingHint: "Measure first thing in the morning before getting out of bed.",
    distanceLabel: "Distance covered in 12 minutes",
    km: "km",
    miles: "miles",
    distanceHint: "Run on a flat track for exactly 12 minutes and record your distance.",
    calculate: "Calculate VO2 Max",
    yourEstimate: "Your Estimated VO2 Max",
    unit: "ml/kg/min",
    improvementTip: "Improvement Tip",
    disclaimer:
      "VO2 max is the gold standard measure of aerobic fitness — maximum oxygen your body can use during intense exercise. Higher = better cardiovascular capacity. Norms vary by age; these thresholds are simplified for general guidance.",
    categories: {
      superior: {
        label: "Superior",
        description:
          "Outstanding aerobic capacity. You have exceptional cardiovascular fitness, typical of competitive endurance athletes.",
        tip: "Maintain with periodized training: mix long runs, tempo sessions, and recovery weeks to avoid overtraining.",
      },
      excellent: {
        label: "Excellent",
        description:
          "Well above average aerobic fitness. Your heart and lungs efficiently deliver oxygen to working muscles.",
        tip: "Add one VO2max interval session per week (e.g., 5×3 min at hard effort) to push into Superior range.",
      },
      good: {
        label: "Good",
        description:
          "Above average fitness. You have a solid aerobic base that supports healthy daily activity and recreational sport.",
        tip: "Aim for 3-4 cardio sessions per week. Include one tempo run and one longer easy run to build your base.",
      },
      fair: {
        label: "Fair",
        description:
          "Average aerobic capacity. Regular training can meaningfully improve your VO2 max within 8-12 weeks.",
        tip: "Start with 30-minute Zone 2 runs 3× per week. Add one HIIT session weekly after 4 weeks of base training.",
      },
      poor: {
        label: "Poor",
        description:
          "Below average aerobic capacity. The good news: this level responds quickly to consistent training.",
        tip: "Begin with 20-30 min brisk walks 5× per week. Transition to run-walk intervals after 2-3 weeks.",
      },
    },
  },
  info: {
    title: "VO2 Max — Common Questions",
  },
  faq: [
    {
      question: "What is VO2 max?",
      answer:
        "VO2 max is the maximum rate at which your body can consume oxygen during intense exercise, measured in millilitres of oxygen per kilogram of body weight per minute (ml/kg/min). It is widely regarded as the gold standard indicator of aerobic fitness and cardiovascular health. A higher VO2 max means your heart, lungs, and muscles work more efficiently together to deliver and use oxygen during sustained effort.",
    },
    {
      question: "What is a good VO2 max?",
      answer:
        "For men, a VO2 max of 40–50 ml/kg/min is considered good, and above 55 is excellent. For women, 35–45 is good, and above 50 is excellent. Elite endurance athletes such as marathon runners and cyclists often score 60–85 ml/kg/min — values that reflect years of training-driven cardiovascular adaptation. The average untrained adult scores in the 30s for women and low 40s for men.",
    },
    {
      question: "How can I improve my VO2 max?",
      answer:
        "The most effective methods are high-intensity interval training (HIIT), tempo runs, and long slow distance (LSD) runs. HIIT sessions — such as 4–6 intervals of 3–5 minutes near maximum effort — directly stress the aerobic system and produce the largest VO2 max gains. Combined with two or three easy Zone 2 runs per week, improvements of 10–20% are typical within 8–12 weeks for beginners and moderately trained athletes.",
    },
    {
      question: "What is the Cooper 12-minute run test?",
      answer:
        "The Cooper test, developed by Dr. Kenneth Cooper in 1968 for U.S. military fitness assessment, involves running as far as possible in exactly 12 minutes on a flat surface. The distance covered predicts VO2 max using the formula: VO2max = (distanceMeters − 504.9) / 44.73. It remains one of the most widely used field tests in sports science because it requires no lab equipment — just a measured track and a stopwatch.",
    },
    {
      question: "Does VO2 max decline with age?",
      answer:
        "Yes. After approximately age 25, VO2 max declines at roughly 1% per year on average in sedentary individuals. However, regular aerobic training significantly slows this decline — active individuals in their 60s and 70s often maintain VO2 max values comparable to sedentary people 20 years younger. The key is consistent cardiovascular exercise: even moderate amounts of running, cycling, or swimming preserve aerobic capacity well into older age.",
    },
  ],
  cta: {
    title: "Track Your Aerobic Fitness Journey",
    description: "Track your daily activity and improve your aerobic fitness with the Steps app.",
  },
  howTo: TOOL_HOW_TO["vo2-max-calculator"],
};

export type Vo2MaxCalculatorMessages = typeof en;
export default en;

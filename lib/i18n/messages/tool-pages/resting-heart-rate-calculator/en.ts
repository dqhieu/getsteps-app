import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Resting Heart Rate Calculator - Fitness Level & Karvonen Zones",
    description:
      "Calculate your resting heart rate fitness level and personalized Karvonen heart rate training zones. Enter your age and measured RHR for instant results.",
    keywords: [
      "resting heart rate calculator",
      "resting heart rate by age",
      "what is a good resting heart rate",
      "heart rate reserve calculator",
      "Karvonen formula",
      "resting heart rate fitness level",
    ],
    ogTitle: "Resting Heart Rate Calculator - Fitness Level & Karvonen Zones",
    ogDescription:
      "Calculate your resting heart rate fitness level and personalized Karvonen heart rate training zones. Enter your age and measured RHR for instant results.",
    ogImageAlt: "Resting Heart Rate Calculator",
  },
  hero: {
    title: "Resting Heart Rate Calculator",
    subtitle:
      "Check your cardiovascular fitness level and get personalized training zones based on your heart rate reserve.",
  },
  intro:
    "Enter your age, gender, and measured resting heart rate to see your fitness category and calculate Karvonen heart rate zones optimized for fat burn, aerobic endurance, and peak performance.",
  calculator: {
    yourDetails: "Your Details",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: { one: "year", other: "years" },
    restingHeartRate: "Resting Heart Rate",
    bpm: "bpm",
    rhrHint:
      "Tip: Measure in the morning before getting up. Sit quietly for 5 min, then count beats for 60 sec.",
    calculate: "Calculate",
    fitnessLevel: "Your Fitness Level",
    hrMax: "HRmax",
    hrr: "HRR",
    zonesTitle: "Karvonen Training Zones",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "Athlete",
      excellent: "Excellent",
      good: "Good",
      above_average: "Above Average",
      average: "Average",
      below_average: "Below Average",
      poor: "Poor",
    },
    zones: {
      activeRecovery: { name: "Active Recovery", purpose: "Recovery" },
      fatBurn: { name: "Fat Burn", purpose: "Fat Burn" },
      aerobicEndurance: { name: "Aerobic Endurance", purpose: "Aerobic" },
      lactateThreshold: { name: "Lactate Threshold", purpose: "Threshold" },
      vo2Max: { name: "VO2 Max", purpose: "VO2 Max" },
    },
  },
  info: {
    title: "Resting Heart Rate FAQ",
  },
  faq: [
    {
      question: "What is a normal resting heart rate?",
      answer:
        "For most adults, a normal resting heart rate is between 60 and 100 beats per minute (bpm). Trained athletes often have resting heart rates of 40–60 bpm because their hearts are stronger and pump more blood per beat. Values below 60 bpm (bradycardia) can be normal for fit individuals but should be evaluated by a doctor if accompanied by symptoms.",
    },
    {
      question: "How do I measure my resting heart rate?",
      answer:
        "Measure your RHR in the morning before getting out of bed. Lie still for 5 minutes, then place two fingers on your wrist (radial artery) or neck (carotid artery) and count the beats for 60 seconds. Avoid measuring after coffee, exercise, or stress. Taking the average of three consecutive mornings gives the most accurate reading.",
    },
    {
      question: "Does resting heart rate improve with fitness?",
      answer:
        "Yes. Regular cardiovascular exercise strengthens the heart muscle, allowing it to pump more blood per beat. This increased stroke volume means the heart needs to beat fewer times per minute to deliver the same amount of blood. Consistent aerobic training typically lowers RHR by 5–25 bpm over several months, depending on your starting fitness level.",
    },
    {
      question: "What's the difference between resting and max heart rate?",
      answer:
        "Resting heart rate (RHR) is the number of beats per minute while completely at rest. Maximum heart rate (HRmax) is the highest number of beats per minute your heart can achieve during all-out effort, estimated as 220 minus your age. Heart Rate Reserve (HRR) is the difference between the two and represents the range your heart can operate in during exercise. The Karvonen method uses HRR to calculate personalized training zones.",
    },
    {
      question: "How can I lower my resting heart rate?",
      answer:
        "The most effective way is regular aerobic exercise — aim for 3–5 sessions per week of sustained moderate-intensity cardio such as walking, jogging, cycling, or swimming. Adequate sleep (7–9 hours), stress management (meditation, deep breathing), limiting caffeine and alcohol, and maintaining a healthy body weight all contribute to a lower RHR. Improvements are typically noticeable within 4–8 weeks of consistent training.",
    },
  ],
  cta: {
    title: "Improve Your Heart Health",
    description: "Track your daily steps to improve your cardiovascular health over time.",
  },
  howTo: TOOL_HOW_TO["resting-heart-rate-calculator"],
};

export type RestingHeartRateCalculatorMessages = typeof en;
export default en;

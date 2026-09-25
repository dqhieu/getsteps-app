import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Heart Rate Zone Calculator - Find Your 5 Training Zones",
    description:
      "Calculate your 5 heart rate training zones based on age and resting heart rate. Optimize your workouts for fat burning, endurance, and performance.",
    keywords: [
      "heart rate zone calculator",
      "target heart rate zones",
      "heart rate training zones",
      "max heart rate calculator",
      "fat burning heart rate zone",
      "zone 2 training",
    ],
    ogTitle: "Heart Rate Zone Calculator - Find Your 5 Training Zones",
    ogDescription:
      "Calculate your 5 heart rate training zones based on age and resting heart rate. Optimize your workouts for fat burning, endurance, and performance.",
    ogImageAlt: "Heart Rate Zone Calculator",
  },
  hero: {
    title: "Heart Rate Zone Calculator",
    subtitle:
      "Discover your personalized heart rate training zones to maximize fat burn, build endurance, and improve performance.",
  },
  intro:
    "Enter your age to instantly see your 5 personalized heart rate training zones. Add your resting heart rate to use the Karvonen method for more accurate, individualized zones.",
  calculator: {
    yourDetails: "Your Details",
    age: "Age",
    years: { one: "year", other: "years" },
    advanced: "Advanced Options",
    knowResting: "I know my resting heart rate",
    restingHint: "Measure first thing in the morning before getting out of bed.",
    knowMax: "I know my maximum heart rate",
    maxHint: "From a recent lab test or all-out effort during exercise.",
    bpm: "bpm",
    maxHeartRate: "Max Heart Rate",
    methodKarvonen: "Personalized (Karvonen)",
    methodStandard: "Standard (220 − age)",
    zoneBadge: "Z{n}",
    bpmRange: "{min} – {max}",
    pctRange: "{min}–{max}%",
    zones: {
      recovery: { name: "Recovery", benefit: "Active recovery, low intensity" },
      fatBurn: { name: "Fat Burn", benefit: "Aerobic base, optimal fat burning" },
      aerobic: { name: "Aerobic", benefit: "Endurance, cardiovascular fitness" },
      threshold: { name: "Threshold", benefit: "Speed work, lactate threshold" },
      maximum: { name: "Maximum", benefit: "Peak performance, VO2 max" },
    },
  },
  info: {
    title: "Understanding Heart Rate Zones",
  },
  faq: [
    {
      question: "What are heart rate training zones?",
      answer:
        "Heart rate zones are ranges of beats per minute that correspond to different exercise intensities. There are five zones, each defined as a percentage of your maximum heart rate. Training in different zones produces different physiological adaptations — from active recovery and fat burning at the low end to peak speed and VO2 max development at the high end. Structuring your workouts across zones leads to more balanced and effective fitness gains.",
    },
    {
      question: "What is the fat burning zone?",
      answer:
        "Zone 2 (60–70% of max HR) is often called the fat burning zone because the body relies primarily on fat as its fuel source at this intensity. While higher intensities burn more total calories, a greater proportion comes from carbohydrates. For sustained fat loss, combining Zone 2 cardio sessions with overall caloric balance is most effective. Zone 2 also builds mitochondrial density and aerobic base without excessive recovery demands.",
    },
    {
      question: "How do I calculate my maximum heart rate?",
      answer:
        "The standard formula is 220 minus your age. For a 30-year-old that gives a max HR of 190 bpm. This is an estimate with a margin of roughly ±10–12 bpm — genetics, fitness level, and medications can all shift your true maximum. If you have access to a lab stress test or have recorded a true all-out effort during a race or hard workout, enter that value in the \"Advanced Options\" section for more accurate zones.",
    },
    {
      question: "What is Zone 2 training?",
      answer:
        "Zone 2 training — also called low-intensity steady-state (LISS) cardio — has surged in popularity thanks to research on longevity and endurance performance. It involves sustained effort at 60–70% of max HR where you can hold a full conversation. Elite endurance athletes often spend 80% of their total training volume in Zone 2. Benefits include improved fat metabolism, mitochondrial efficiency, cardiac output, and faster recovery between hard sessions.",
    },
    {
      question: "How does the Karvonen method differ?",
      answer:
        "The Karvonen method uses your Heart Rate Reserve (HRR) — the difference between your maximum and resting heart rate — to calculate zones. The formula is: Target HR = Resting HR + (HRR × Zone percentage). Because it accounts for your cardiovascular fitness baseline, it produces more personalized and typically more accurate zones than the simple percentage method. A well-trained athlete with a low resting HR of 45 bpm will get meaningfully different zones than a sedentary person with a resting HR of 75 bpm, even at the same age.",
    },
  ],
  cta: {
    title: "Track Your Health Journey",
    description:
      "Use Steps to track your daily walks and keep your heart rate in the optimal zone.",
  },
  howTo: TOOL_HOW_TO["heart-rate-zones-calculator"],
};

export type HeartRateZonesCalculatorMessages = typeof en;
export default en;

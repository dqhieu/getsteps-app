import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "How Many Steps Are in a Mile? Calculator [Free]",
    description:
      "How many steps are in a mile? About 2,000-2,500 depending on height and pace. Get personalized steps per mile and per km — walking vs running table included.",
    keywords: [
      "steps per mile",
      "steps per km",
      "how many steps are in a mile",
      "how many steps in a mile",
      "steps in a kilometer",
      "step length calculator",
      "walking steps per mile",
      "steps to miles",
      "miles to steps",
    ],
    ogTitle: "How Many Steps Are in a Mile? Calculator [Free]",
    ogDescription:
      "How many steps are in a mile? 2,000-2,500 depending on your height. Get personalized steps per mile and per km.",
    ogImageAlt: "Steps Per Mile Calculator",
  },
  hero: {
    title: "How Many Steps Are in a Mile?",
    subtitle:
      "How many steps are in a mile? About 2,000–2,500 for most adults. Enter your height for a personalized steps-per-mile and per-km count.",
  },
  resultCta: {
    headline: "Know your real steps per mile",
    description:
      "Steps tracks your actual steps and distance automatically, so you see your true pace and stride instead of an estimate.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    yourInformation: "Your Information",
    height: "Height",
    gender: "Gender",
    male: "Male",
    female: "Female",
    stepLength: "Your estimated step length: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} inches)",
    stepsPerMile: "Steps per Mile",
    stepsPerKm: "Steps per Kilometer",
    stepsUnit: "steps",
    referenceTitle: "Distance Reference Table",
    referenceSubtitle: "Steps needed for common distances based on your step length",
    colDistance: "Distance",
    colSteps: "Steps",
    distances: ["1 km", "1 mile", "5 km", "5 miles", "10 km", "Half Marathon", "Marathon"],
  },
  info: {
    title: "How We Calculate Steps Per Mile",
    intro:
      "The number of steps you take per mile depends on your step length, which is primarily determined by your height and gender. Taller people generally have longer strides and take fewer steps to cover the same distance.",
    formulaTitle: "The Formula",
    stepLengthLabel: "Step length:",
    stepLengthFormula: "Height (cm) × 0.415 (male) or 0.413 (female)",
    perKmLabel: "Steps per km:",
    perKmFormula: "100,000 ÷ step length (cm)",
    perMileLabel: "Steps per mile:",
    perMileFormula: "Steps per km × 1.609",
    heightTitle: "Average Steps by Height",
    heights: [
      { height: "5'0\" (152 cm):", steps: "~2,500 steps/mile" },
      { height: "5'6\" (168 cm):", steps: "~2,300 steps/mile" },
      { height: "6'0\" (183 cm):", steps: "~2,100 steps/mile" },
      { height: "6'6\" (198 cm):", steps: "~1,950 steps/mile" },
    ],
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "How many steps are in a mile?",
      answer:
        "On average, there are about 2,000-2,500 steps in a mile. The exact number depends on your height and stride length. Shorter people take more steps, while taller people take fewer.",
    },
    {
      question: "How many steps are in a kilometer?",
      answer:
        "On average, there are about 1,250-1,550 steps in a kilometer. This is roughly 62% of the steps in a mile, since a kilometer is about 0.62 miles.",
    },
    {
      question: "Does walking speed affect steps per mile?",
      answer:
        "Yes, slightly. When you walk faster or run, your stride lengthens, so you take fewer steps per mile. However, for most walking speeds, the difference is relatively small.",
    },
    {
      question: "How can I measure my actual step length?",
      answer:
        "Walk a known distance (like 100 feet) at your normal pace and count your steps. Divide the distance by the number of steps to get your average step length. You can also mark a starting point, take 10 steps, and measure the distance covered.",
    },
  ],
  cta: {
    title: "Track Your Steps & Distance",
    description:
      "Download the Steps app to automatically track your steps and distance on your iPhone and Apple Watch.",
  },
  howTo: TOOL_HOW_TO["steps-per-mile-calculator"],
};

export type StepsPerMileCalculatorMessages = typeof en;
export default en;

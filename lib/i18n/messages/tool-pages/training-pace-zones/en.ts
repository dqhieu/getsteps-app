import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Training Pace Zones Calculator - Running Pace Zones for Your Fitness",
    description:
      "Calculate your 5 running training pace zones from any recent race result. Get exact pace ranges for easy runs, tempo, threshold, and VO2 max intervals.",
    keywords: [
      "training pace zones",
      "running pace zones calculator",
      "Jack Daniels running zones",
      "tempo run pace calculator",
      "easy run pace calculator",
      "interval training pace",
      "threshold pace calculator",
    ],
    ogTitle: "Training Pace Zones Calculator - Running Pace Zones for Your Fitness",
    ogDescription:
      "Calculate your 5 running training pace zones from any recent race result. Get exact pace ranges for easy runs, tempo, threshold, and VO2 max intervals.",
    ogImageAlt: "Training Pace Zones Calculator",
  },
  hero: {
    title: "Training Pace Zones Calculator",
    subtitle: "Get your personalized running training zones based on your recent race performance.",
  },
  intro:
    "Enter a recent race time to calculate your 5 running training pace zones — from easy recovery runs to high-intensity intervals. Use these to structure your training for maximum improvement.",
  calculator: {
    distanceLabel: "Race Distance",
    customDistanceLabel: "Distance (km)",
    finishTimeLabel: "Finish Time",
    hour: "hr",
    minute: "min",
    second: "sec",
    invalidTime: "Please enter a valid race time.",
    invalidDistance: "Please enter a valid distance.",
    calculate: "Calculate Training Zones",
    footnote:
      "Enter a recent race result at race effort for most accurate zones. Zones shift as your fitness improves — recalculate after key races.",
    races: {
      "5k": "5K",
      "10k": "10K",
      half: "Half Marathon",
      marathon: "Marathon",
      custom: "Custom",
    },
    zones: {
      easy: {
        name: "Easy / Recovery",
        description:
          "Very light effort. Full conversation possible. Builds aerobic base and aids recovery.",
        usage: "~80% of all runs",
      },
      aerobic: {
        name: "Aerobic Base",
        description:
          "Comfortable, sustainable pace. Breathing elevated but steady. Core long-run zone.",
        usage: "Weekly long run",
      },
      tempo: {
        name: "Tempo",
        description:
          "Comfortably hard. Breathing labored. Progression runs and marathon-pace work.",
        usage: "Progression runs",
      },
      threshold: {
        name: "Threshold",
        description: "Hard sustained effort. Lactate threshold pace. 20-40 min tempo runs.",
        usage: "Tempo runs (20-40 min)",
      },
      interval: {
        name: "Interval / VO2",
        description:
          "Near-maximum effort. Short intervals (400m-1600m). Develops VO2 max and speed.",
        usage: "Track intervals",
      },
    },
  },
  faqTitle: "Understanding Training Pace Zones",
  faq: [
    {
      question: "What are training pace zones?",
      answer:
        "Training pace zones are specific pace ranges that target different energy systems during running. Each zone produces distinct physiological adaptations: easy zones build aerobic base and mitochondrial density, while harder zones develop lactate threshold and VO2 max. Running at the right intensity for each workout — rather than always going moderately hard — is one of the most important principles in structured endurance training.",
    },
    {
      question: "How many pace zones are there?",
      answer:
        "Most training systems use 5 zones, though some coaches prefer 3 (easy, moderate, hard) or 7 (used in Garmin and Polar systems). The 5-zone model — Easy, Aerobic, Tempo, Threshold, and VO2 Interval — is the most practical for recreational and competitive runners. It aligns with Jack Daniels' VDOT framework and is widely supported by sports science research on optimal training intensity distribution.",
    },
    {
      question: "What pace should my easy runs be?",
      answer:
        "Easy runs (Zone 1–2) should feel genuinely comfortable — you should be able to hold a full conversation without gasping. They are typically 60–90 seconds per kilometre slower than your 5K race pace. Many runners make the mistake of running their easy days too hard, accumulating fatigue that compromises quality in hard sessions. True easy running is slower than most people think, and it is where the majority of your aerobic adaptations actually occur.",
    },
    {
      question: "How often should I run in each zone?",
      answer:
        "The 80/20 rule, supported by research on elite distance runners, recommends spending approximately 80% of training volume in Zones 1–2 and 20% in Zones 3–5. This polarized approach produces better results than training at moderate intensity most of the time. A typical weekly structure might include 3–4 easy runs, one long run, one tempo session (Zone 4), and one interval session (Zone 5) — all in the right zones, not just hard effort.",
    },
    {
      question: "How do I improve my threshold pace?",
      answer:
        "Lactate threshold pace (Zone 4) improves most effectively with weekly tempo runs of 20–40 minutes at a comfortably hard effort — the pace you could sustain for roughly one hour in a race. As your body adapts, it clears lactate more efficiently, allowing you to run faster before accumulating fatigue. Adding one threshold session per week for 8–12 weeks typically produces measurable improvements in 10K and half marathon race times.",
    },
  ],
  cta: {
    title: "Track Your Runs and Daily Steps",
    description: "Track your runs and daily steps together in the Steps app.",
  },
  howTo: TOOL_HOW_TO["training-pace-zones"],
};

export type TrainingPaceZonesMessages = typeof en;
export default en;

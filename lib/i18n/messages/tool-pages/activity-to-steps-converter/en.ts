import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Activity to Steps Converter - Convert Any Exercise to Steps",
    description:
      "Convert cycling, swimming, yoga, rowing, and 10+ activities into equivalent steps. Perfect for step challenges and fitness tracking.",
    keywords: [
      "activity to steps converter",
      "convert exercise to steps",
      "cycling steps equivalent",
      "swimming steps equivalent",
      "steps equivalent calculator",
      "non-walking steps",
    ],
    ogTitle: "Activity to Steps Converter - Convert Any Exercise to Steps",
    ogDescription:
      "Convert cycling, swimming, yoga, rowing, and 10+ activities into equivalent steps. Perfect for step challenges and fitness tracking.",
    ogImageAlt: "Activity to Steps Converter",
  },
  hero: {
    title: "Activity to Steps Converter",
    subtitle:
      "Convert any activity — cycling, swimming, yoga, and more — into equivalent steps for your step challenge or fitness goal.",
    intro:
      "Select your activity, enter the duration, and instantly see your equivalent step count. Uses MET (Metabolic Equivalent) values for accurate conversions across 10 activities.",
  },
  appCta: {
    headline: "Count every activity as steps — automatically",
    description:
      "Steps tracks your daily movement in the background and turns your activity into step-equivalents, no manual entry needed.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    yourActivity: "Your Activity",
    activityType: "Activity Type",
    duration: "Duration (minutes)",
    intensity: "Intensity",
    intensities: {
      low: "Low",
      medium: "Medium",
      high: "High",
    },
    calorieToggle: "For calorie calculation (optional)",
    bodyWeight: "Body Weight",
    equivalentSteps: "Equivalent Steps",
    equivalentFor: "steps equivalent for {duration} min of {activity}",
    walkingTime: "Walking Time",
    minutes: "{minutes} min",
    distance: "Distance",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "Calories",
    kcal: "kcal",
    metNote: "Calculated using MET (Metabolic Equivalent of Task) values",
    activities: {
      cycling: "Cycling",
      swimming: "Swimming",
      elliptical: "Elliptical",
      rowing: "Rowing",
      jump_rope: "Jump Rope",
      dancing: "Dancing",
      yoga: "Yoga",
      basketball: "Basketball",
      hiking: "Hiking",
      pilates: "Pilates",
    },
  },
  info: {
    title: "How Step Equivalents Work",
  },
  faq: [
    {
      question: "How are activity steps calculated?",
      answer:
        "This converter uses MET (Metabolic Equivalent of Task) values — a standard measure of exercise intensity used in exercise science. Walking at a normal pace has a MET of 3.5, equating to roughly 100 steps per minute. Each activity's MET is compared to walking to produce an equivalent step count. For example, an activity with MET 7.0 (twice walking) produces twice as many equivalent steps per minute.",
    },
    {
      question: "Is cycling equivalent to walking steps?",
      answer:
        "Yes — 30 minutes of cycling at medium intensity (MET ~6.8) is approximately 7,000–9,000 equivalent steps depending on your pace. Competitive cycling at high intensity can reach 14,000+ equivalent steps in 30 minutes. While pedometers won't count these as literal steps, this conversion gives you a fair comparison for step challenge purposes.",
    },
    {
      question: "Does swimming count as steps?",
      answer:
        "Swimming isn't natively tracked as steps by most fitness apps and pedometers. However, 30 minutes of swimming at medium intensity (MET ~7.0) is equivalent to roughly 6,000–8,000 steps. Use this converter to get credit for your swim sessions in step challenges that allow manual activity logging.",
    },
    {
      question: "Why convert activities to steps?",
      answer:
        "Step challenges at work or through fitness apps often measure progress in steps, but cyclists, swimmers, and yogis naturally accumulate fewer GPS-tracked steps. Converting your non-walking activities to equivalent steps lets you participate fairly in step challenges, track your overall daily activity, and compare effort across different exercise types on a common scale.",
    },
  ],
  related: [
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "Track Your Health Journey",
    description: "Track all your daily activities and steps automatically with the Steps app.",
  },
  howTo: TOOL_HOW_TO["activity-to-steps-converter"],
};

export type ActivityToStepsMessages = typeof en;
export default en;

import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "BMR Calculator: Basal Metabolic Rate in 3 Formulas",
    description:
      "Calculate your BMR with Mifflin-St Jeor, Harris-Benedict and Katch-McArdle side by side. A 30-year-old 75 kg man burns ~1,699 calories a day at rest. Free calculator.",
    keywords: [
      "BMR calculator",
      "basal metabolic rate calculator",
      "resting metabolic rate",
      "Mifflin-St Jeor equation",
      "Harris-Benedict equation",
      "Katch-McArdle formula",
      "how many calories do I burn at rest",
      "BMR vs TDEE",
      "metabolism calculator",
    ],
    ogTitle: "BMR Calculator: Basal Metabolic Rate in 3 Formulas",
    ogDescription:
      "Calculate your basal metabolic rate with three clinical formulas side by side, plus daily calorie needs at every activity level.",
    ogImageAlt: "BMR Calculator",
  },
  hero: {
    title: "BMR Calculator",
    subtitle:
      "Find the calories your body burns at complete rest. Three clinical formulas run side by side, so you see the spread instead of one number pretending to be certain.",
  },
  calculator: {
    details: "Your Details",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: "years",
    weight: "Weight",
    height: "Height",
    bodyFat: "Body Fat %",
    bodyFatOptional: "(optional: unlocks Katch-McArdle)",
    bodyFatPlaceholder: "e.g. 20",
    activity: "Activity Level",
    activityLevels: {
      sedentary: "Sedentary",
      light: "Lightly Active",
      moderate: "Moderately Active",
      active: "Active",
      very_active: "Very Active",
    },
    activityDescriptions: {
      sedentary: "Desk job, little or no exercise",
      light: "Light exercise 1–3 days per week",
      moderate: "Moderate exercise 3–5 days per week",
      active: "Hard exercise 6–7 days per week",
      very_active: "Physical job or twice-daily training",
    },
    calculate: "Calculate BMR",
    results: "Your Results",
    bmr: "BMR",
    atRest: "calories/day at rest",
    maintenance: "Maintenance",
    maintenanceAt: "at {level}",
    leanMass:
      "Lean body mass: {mass}. Because you supplied a body fat percentage, the headline number uses Katch-McArdle.",
    kgValue: "{value} kg",
    share: "Even sitting still all day, BMR accounts for about {percent}% of the calories you burn.",
    formulasTitle: "All Three Formulas",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "Revised Harris-Benedict",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "Validated on a modern population. The current clinical default and the most reliable choice when body fat is unknown.",
      harris:
        "The 1919 original, revised in 1984. Tends to read about 5% high because its study group was leaner and more active than the population today.",
      katch:
        "Works from lean body mass and ignores sex and height, which makes it the most accurate option for lean or muscular bodies.",
      katchLocked: "Needs a body fat percentage. Enter one above to see this estimate.",
    },
    used: "Used",
    calValue: "{value} cal",
    byActivity: "Daily Calories by Activity Level",
    resultCta: {
      headline: "BMR is the floor. Steps are the lever.",
      description:
        "You can barely move your resting burn, but you can move everything above it. Steps tracks your daily activity automatically and shows what it adds to the number you just calculated.",
    },
  },
  info: {
    title: "How We Calculate BMR",
    intro:
      "Three equations are in common clinical use, and they disagree by enough to matter. Rather than pick one and hide the spread, this calculator runs all three.",
    formulaTitle: "The Formulas",
    formulas: [
      {
        title: "Mifflin-St Jeor (1990)",
        lines: [
          "Men: (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5",
          "Women: (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161",
        ],
      },
      {
        title: "Revised Harris-Benedict (1984)",
        lines: [
          "Men: 88.362 + (13.397 × weight) + (4.799 × height) − (5.677 × age)",
          "Women: 447.593 + (9.247 × weight) + (3.098 × height) − (4.330 × age)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: [
          "370 + (21.6 × lean body mass kg), where lean mass = weight × (1 − body fat %)",
        ],
      },
    ],
    exampleLabel: "Example:",
    example:
      "a 30-year-old man, 75 kg, 175 cm gives 1,699 by Mifflin-St Jeor and 1,763 by Harris-Benedict. At 20% body fat, Katch-McArdle returns 1,666.",
    primary:
      "Mifflin-St Jeor is the headline number unless you supply a body fat percentage, in which case Katch-McArdle takes over. It is the only one of the three that measures the tissue actually responsible for resting expenditure rather than inferring it from height and sex.",
    activityFactors:
      "Multiply BMR by an activity factor to get TDEE: 1.2 sedentary, 1.375 lightly active, 1.55 moderately active, 1.725 active, 1.9 very active. The calculator shows all five.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "What is BMR?",
      answer:
        "BMR, or basal metabolic rate, is the energy your body spends doing nothing at all: breathing, circulating blood, maintaining body temperature, repairing cells. It is measured lying still, awake, after a 12-hour fast. For most adults BMR accounts for 60 to 75% of total daily calories, which makes it the single largest component of what you burn.",
    },
    {
      question: "What is the difference between BMR and RMR?",
      answer:
        "BMR is measured under strict laboratory conditions: complete rest, fasted, in a thermally neutral room. RMR (resting metabolic rate) is measured under looser conditions and comes out roughly 10% higher because it includes some digestion and minor movement. The terms are used interchangeably in everyday contexts, and every calculator you will find online, including this one, actually estimates something closer to RMR.",
    },
    {
      question: "Which BMR formula is most accurate?",
      answer:
        "Mifflin-St Jeor for most people. It was validated against indirect calorimetry on a modern population and predicts within about 10% for roughly 80% of adults. Harris-Benedict, even in its 1984 revision, runs about 5% high because its 1919 study group was leaner and more active. Katch-McArdle beats both if you know your body fat percentage, because it works from lean body mass, the tissue that actually drives resting expenditure.",
    },
    {
      question: "What is the difference between BMR and TDEE?",
      answer:
        "BMR is what you burn at complete rest. TDEE (total daily energy expenditure) is BMR multiplied by an activity factor, so it adds movement, exercise and the energy cost of digesting food. TDEE is always higher: even a fully sedentary day comes to about 1.2 times BMR. Set calorie goals against TDEE, not BMR.",
    },
    {
      question: "Should I eat at my BMR to lose weight?",
      answer:
        "No. Eating at your BMR means eating as though you spent the entire day motionless, which creates a deficit of several hundred to a thousand calories before you have moved. That is aggressive enough to cost you muscle and, for many people, drops below the 1,200 (women) or 1,500 (men) calorie floor. Subtract 250 to 500 calories from TDEE instead.",
    },
    {
      question: "Why is my BMR lower than I expected?",
      answer:
        "Body size is the dominant input, so smaller and lighter people get lower numbers, and every formula subtracts for age. Body composition matters too: muscle burns roughly three times more at rest than fat per kilogram, so two people at the same weight can differ by 200 calories or more. If you have been in a long calorie deficit, adaptive thermogenesis can suppress actual BMR by 10 to 15% below the predicted figure.",
    },
    {
      question: "Can I increase my BMR?",
      answer:
        "Somewhat, and slowly. Adding muscle is the only durable lever: each kilogram of muscle adds roughly 13 calories a day at rest, so a serious year of resistance training might buy you 50 to 100 calories. That is real but modest. Increasing daily movement changes your TDEE far more than anything you can do to BMR, which is why step count moves the needle faster than metabolism hacking.",
    },
  ],
  cta: {
    title: "Track What You Burn Above Resting",
    description:
      "Download the Steps app to count every step automatically and see your daily calorie burn build on top of your BMR.",
  },
  sticky: "Track your steps with Steps",
  howTo: TOOL_HOW_TO["bmr-calculator"],
};

export type BmrCalculatorMessages = typeof en;
export default en;

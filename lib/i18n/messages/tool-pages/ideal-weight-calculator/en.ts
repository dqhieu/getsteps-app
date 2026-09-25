import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Ideal Weight Calculator: 4 Formulas Plus Healthy BMI Range",
    description:
      "Devine, Robinson, Miller and Hamwi side by side, plus the healthy BMI band. A 175 cm man lands between 68.7 and 72 kg. Free ideal body weight calculator.",
    keywords: [
      "ideal weight calculator",
      "ideal body weight calculator",
      "healthy weight calculator",
      "how much should I weigh",
      "Devine formula",
      "Robinson formula",
      "Hamwi formula",
      "ideal weight for height",
      "healthy weight range",
    ],
    ogTitle: "Ideal Weight Calculator: 4 Formulas Plus Healthy BMI Range",
    ogDescription:
      "Four clinical ideal body weight formulas side by side, plus the healthy BMI range for your height.",
  },
  hero: {
    title: "Ideal Weight Calculator",
    subtitle:
      "Four clinical formulas run side by side, with the healthy BMI range alongside them. Seeing how much they disagree is the most useful thing this calculator does.",
  },
  calculator: {
    details: "Your Details",
    gender: "Gender",
    male: "Male",
    female: "Female",
    height: "Height",
    currentWeight: "Current Weight",
    optional: "(optional)",
    placeholderKg: "e.g. 78",
    placeholderLbs: "e.g. 172",
    calculate: "Calculate Ideal Weight",
    results: "Your Results",
    formulaAverage: "Formula average",
    range: "range {min}–{max}",
    healthyBmiRange: "Healthy BMI range",
    to: "to {weight}",
    verdictWithin:
      "Your weight sits inside the healthy BMI range for your height. The formula average is a single point inside that band, not a target you need to hit.",
    verdictAbove: "Your weight is {amount} above the healthy BMI range for your height.",
    verdictBelow: "Your weight is {amount} below the healthy BMI range for your height.",
    fourFormulas: "The Four Formulas",
    disclaimer:
      "All four formulas see only your height and sex. They cannot account for muscle mass or frame size, so a muscular body will read high on every one of them. Treat the healthy BMI range as the more useful answer: it is a band, not a single target.",
    formulas: {
      devine: {
        name: "Devine",
        note: "The most widely cited formula and still the default for drug dosing. Written for medication calculations, not body goals.",
      },
      robinson: {
        name: "Robinson",
        note: "A revision of Devine using a larger sample. Reads lower than Devine at tall heights.",
      },
      miller: {
        name: "Miller",
        note: "The flattest of the four: height changes the result least, so it reads highest for short people and lowest for tall.",
      },
      hamwi: {
        name: "Hamwi",
        note: "The oldest of the four, developed for diabetes care. The steepest per-inch increase, so it reads highest at tall heights.",
      },
    },
  },
  resultCta: {
    headline: "Habits move the number. Nothing else does.",
    description:
      "Steps tracks your daily activity automatically, so you can build the consistency that actually shifts body weight over months.",
  },
  sticky: "Track your steps with Steps",
  info: {
    title: "How We Calculate Ideal Weight",
    intro:
      "All four formulas share a shape: a base weight at 5 feet, plus a fixed amount for every inch above that. Only the constants differ.",
    formulasTitle: "The Formulas",
    formulas: [
      {
        name: "Devine (1974)",
        body: "Men: 50 kg + 2.3 kg per inch over 5 ft. Women: 45.5 kg + 2.3 kg per inch.",
      },
      {
        name: "Robinson (1983)",
        body: "Men: 52 kg + 1.9 kg per inch. Women: 49 kg + 1.7 kg per inch.",
      },
      {
        name: "Miller (1983)",
        body: "Men: 56.2 kg + 1.41 kg per inch. Women: 53.1 kg + 1.36 kg per inch.",
      },
      {
        name: "Hamwi (1964)",
        body: "Men: 48 kg + 2.7 kg per inch. Women: 45.5 kg + 2.2 kg per inch.",
      },
      {
        name: "Healthy BMI range",
        body: "Weight for BMI 18.5 to 24.9 at your height.",
      },
      {
        name: "Example:",
        body: "a 175 cm man gets 70.5 (Devine), 68.9 (Robinson), 68.7 (Miller) and 72.0 (Hamwi), averaging 70.0 kg. The healthy BMI band is 56.7 to 76.3 kg.",
      },
    ],
    notice:
      "Notice that the four-formula average sits near the middle of a BMI band nearly 20 kg wide. That gap is the honest summary: these equations produce a plausible point inside a much larger healthy range, not a target you have missed if you are not on it.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "What is ideal body weight?",
      answer:
        "It is a clinical estimate of a healthy weight based on height and sex, and it is worth knowing where it came from: all four common formulas were developed for drug dosing, not for body goals. Devine wrote his in 1974 to calculate gentamicin doses. They were adopted as health targets afterwards, which is why they behave oddly when used that way.",
    },
    {
      question: "Which ideal weight formula should I use?",
      answer:
        "None of them alone. They disagree by 3 to 4 kg at an average height and diverge further at the extremes, which tells you how much precision is really on offer. The average of the four is a reasonable midpoint, but the healthy BMI range is the more useful answer because it gives you a band of about 20 kg rather than a single number to hit.",
    },
    {
      question: "Why do the four formulas give different answers?",
      answer:
        "They were built from different populations and disagree about how much weight each inch of height should add. Hamwi adds 2.7 kg per inch for men, Miller only 1.41. At 175 cm that spread is small, but at 195 cm Hamwi returns around 87 kg and Miller around 78. The taller or shorter you are, the more they part company.",
    },
    {
      question: "Is ideal weight accurate for muscular people?",
      answer:
        "No, and this is the formulas' clearest failure. They see only height and sex, so they cannot distinguish 80 kg of muscle from 80 kg of fat. A trained athlete will read as overweight on all four and on BMI too. If you carry meaningful muscle, body fat percentage and waist-to-hip ratio will tell you far more than any weight target.",
    },
    {
      question: "What is a healthy BMI range?",
      answer:
        "18.5 to 24.9. Converted to weight at 175 cm that is 56.7 to 76.3 kg, a band of nearly 20 kg. That width is the point: healthy weight is a range, not a number, and where you sit within it depends on your build, muscle mass and what you can actually maintain.",
    },
    {
      question: "Should I try to reach my ideal weight?",
      answer:
        "Only if it happens to line up with something sustainable for you. Health outcomes track behaviours more reliably than they track a number on a scale: people who are active at a higher weight generally do better than sedentary people at a lower one. If your weight already sits inside the healthy BMI range, chasing a formula's midpoint is not worth much.",
    },
  ],
  cta: {
    title: "Build the Habit That Moves the Number",
    description:
      "Download the Steps app to track your daily steps and stay consistent over the months that actually change body weight.",
  },
  howTo: TOOL_HOW_TO["ideal-weight-calculator"],
};

export type IdealWeightCalculatorMessages = typeof en;
export default en;

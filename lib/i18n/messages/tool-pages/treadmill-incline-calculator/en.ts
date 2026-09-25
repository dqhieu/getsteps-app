import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Treadmill Incline Calculator: Pace & Elevation Equivalents",
    description:
      "Convert treadmill incline to a flat-pace equivalent, and see the elevation you climbed. 3 mph at 12% incline equals jogging 4.7 mph on the flat. Free ACSM-based calculator.",
    keywords: [
      "treadmill incline calculator",
      "treadmill pace calculator",
      "treadmill elevation calculator",
      "incline walking calorie calculator",
      "treadmill incline conversion chart",
      "12-3-30 pace equivalent",
      "treadmill grade to flat pace",
      "treadmill elevation gain",
    ],
    ogTitle: "Treadmill Incline Calculator: Pace & Elevation Equivalents",
    ogDescription:
      "Turn any treadmill incline into the flat pace it is worth, and see how much elevation you climbed. Free calculator using the ACSM metabolic equations.",
    ogImageAlt: "Treadmill Incline Calculator",
  },
  hero: {
    title: "Treadmill Incline Calculator",
    subtitle:
      "Turn any incline into the flat pace it is actually worth, and see how much elevation you climbed. Uses the ACSM metabolic equations, so the grade is priced properly instead of guessed at.",
  },
  calculator: {
    yourSetting: "Your Treadmill Setting",
    beltSpeed: "Belt speed",
    incline: "Incline: {percent}%",
    duration: "Duration",
    minutes: "minutes",
    effortVsFlat: "Effort versus the same speed on a flat belt",
    flatBelt: "Flat belt, so your pace is your effort",
    between:
      "A {grade}% grade at {speed} is harder than any pace you would sustain as a flat walk, and still easier than the slowest flat jog, so no single level speed matches it.",
    sameEffort: "Same effort as {gait} on the flat at {speed} ({pace}).",
    gaitWalk: "walking",
    gaitJog: "jogging",
    kindWalk: "walk",
    kindJog: "jog",
    betweenLabel: "between a walk and a jog",
    perKmPace: "{pace} per km",
    perMilePace: "{pace} per mile",
    yourPace: "Your pace",
    perKm: "Per km",
    perMile: "Per mile",
    met: "MET",
    distance: "Distance",
    distanceValue: "{km} km / {mi} mi",
    elevationTitle: "Elevation Climbed",
    elevationSubtitle: "A {grade}% grade for {minutes} minutes at {speed}.",
    verticalMetres: "Vertical metres",
    verticalFeet: "Vertical feet",
    storeys: "Building storeys",
    stairSteps: "Stair steps",
    briskWalk:
      "To make {speed} as demanding as a brisk 6 km/h (3.7 mph) walk on the flat, set the incline to {grade}.",
    tableTitle: "Flat-Pace Equivalent by Incline",
    tableSubtitle: "Belt speed held at {speed}. Only the grade changes.",
    colIncline: "Incline",
    colFeelsLike: "Feels like",
    colMet: "MET",
    colVsFlat: "vs flat",
    multiplier: "{value}x",
  },
  resultCta: {
    headline: "Know what your walks are really worth",
    description:
      "Steps tracks every walk in the background and turns it into real distance, elevation and calories, no manual logging needed.",
  },
  info: {
    title: "How We Calculate Incline Equivalents",
    intro:
      "Two treadmill settings are equivalent when they cost the same oxygen. We estimate oxygen uptake from speed and grade with the ACSM metabolic equations, then solve the level-ground equation backwards to find the flat pace with the same cost.",
    formulaTitle: "The Formulas",
    formulas: [
      { strong: "Walking VO₂", rest: "= (0.1 × S) + (1.8 × S × G) + 3.5" },
      { strong: "Running VO₂", rest: "= (0.2 × S) + (0.9 × S × G) + 3.5" },
      {
        strong: "",
        rest: "S is speed in metres per minute, G is grade as a fraction (5% = 0.05). VO₂ is in ml/kg/min.",
      },
      {
        strong: "Effort multiplier",
        rest: "= 1 + 18G, which falls straight out of setting two walking equations equal. It is valid at any grade.",
      },
      { strong: "Elevation gain", rest: "= belt distance × G" },
      {
        strong: "Example:",
        rest: "4.8 km/h at 5% grade is 5.3 METs, a 1.9× effort multiplier, and climbs 120 vertical metres in 30 minutes.",
      },
    ],
    note: "The two ACSM equations do not meet: flat walking tops out around 14.3 ml/kg/min and flat running starts near 25.2. Moderate incline walks land between those, where no level pace matches the effort. The calculator says so rather than extrapolating an equation past the range it was validated on, and the effort multiplier stays meaningful either way.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "What flat pace is equal to walking at 3 mph on a 12% incline?",
      answer:
        "Roughly a 4.7 mph jog. Walking at 3 mph on a 12% grade costs about 29 ml/kg/min of oxygen, which is around 8.3 METs. No sustainable walking pace on level ground reaches that, so the honest comparison is to a slow run rather than a fast walk. This is why the 12-3-30 workout feels far harder than its speed suggests.",
    },
    {
      question: "How do I convert treadmill incline to a flat pace?",
      answer:
        "The effort scales almost linearly: a grade multiplies the energy cost of walking by (1 + 18 x the grade as a decimal), so a 5% incline is 1.9 times as hard as the same speed on the flat. Turning that multiplier into a flat speed only works while the answer stays inside walking range, which at typical paces means grades under about 2 to 3.5%. Beyond that the effort passes what any sustainable walk produces without yet reaching the slowest jog, and no single level pace matches it.",
    },
    {
      question: "How much elevation do I gain on a treadmill?",
      answer:
        "Vertical gain is the belt distance multiplied by the grade. Thirty minutes at 5 km/h covers 2.5 km, and at a 10% incline that is 250 vertical metres, about 820 feet, or roughly 83 storeys of a building. The treadmill reports grade as rise over belt distance, which is exactly what this calculation assumes.",
    },
    {
      question: "Does 1% incline really simulate outdoor running?",
      answer:
        "It is a reasonable convention rather than a precise law. The 1% adjustment comes from a 1996 study by Jones and Doust, which found that a 1% grade matched the energy cost of outdoor running at speeds above about 8 mph. At the slower speeds most people walk or jog, air resistance is negligible and a 0% belt is already close to outdoor effort.",
    },
    {
      question: "Is walking on an incline better than running on the flat?",
      answer:
        "For a comparable energy cost at much lower impact, yes. Walking 5 km/h at a 12% grade is around 8.5 METs, essentially matching an 8 km/h flat jog at 8.6 METs, but the ground reaction forces are far lower because both feet never leave the belt at once. The trade-off is that incline walking loads the calves and Achilles considerably more.",
    },
    {
      question: "Why does a small incline change the effort so much?",
      answer:
        "Because lifting your body vertically is expensive relative to moving it horizontally. In the ACSM walking equation the vertical term carries a coefficient of 1.8 against 0.1 for the horizontal term, so each 1% of grade adds about 18% to the energy cost of walking at the same speed. Five percent nearly doubles it, and twelve percent roughly triples it.",
    },
    {
      question: "Should I trust my treadmill's incline reading?",
      answer:
        "Treat it as approximate. Belt calibration drifts, and many consumer machines report the motor's commanded grade rather than a measured one. Deck flex under load also reduces the effective grade slightly. The relationships here hold regardless, but the absolute numbers inherit whatever error the machine carries.",
    },
  ],
  cta: {
    title: "Track Your Treadmill Workouts",
    description:
      "Download the Steps app to automatically track your walks, calories burned, and progress over time.",
  },
  sticky: "Track your steps with Steps",
  howTo: TOOL_HOW_TO["treadmill-incline-calculator"],
};

export type TreadmillInclineCalculatorMessages = typeof en;
export default en;

const en = {
  breadcrumbLabel: "Breadcrumb",
  openCalculator: "Open the calculator →",
  units: {
    steps: "{count} steps",
    miles: "{count} miles",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} cal",
    strideCm: "{stride} cm",
    detailSteps: "{count} steps →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count} mile",
    other: "{count} miles",
  },
  mileArrow: {
    one: "{count} mile →",
    other: "{count} miles →",
  },
  duration: {
    minutes: "{minutes} min",
    hours: "{hours} h",
    hoursMinutes: "{hours} h {minutes} min",
  },
  heights: [
    `4'10" (147 cm) — petite`,
    `5'4" (163 cm) — avg woman`,
    `5'9" (175 cm) — avg adult`,
    `6'0" (183 cm) — avg man`,
    `6'4" (193 cm) — tall`,
  ],
  heightShort: {
    petite: `4'10"`,
    tall: `6'4"`,
  },
  paces: {
    slow: "Slow (2 mph)",
    normal: "Normal (3 mph)",
    brisk: "Brisk (4 mph)",
  },
  hub: {
    meta: {
      title: "Steps Conversion Hub — Steps to Miles, Miles to Steps, Calories",
      description:
        "Convert between steps, miles, kilometers, and calories. Quick answers, full conversion tables, and a calculator personalized to your height and weight.",
      keywords: [
        "steps conversion",
        "step conversion table",
        "steps to miles",
        "miles to steps",
        "steps to calories",
        "step distance conversion",
      ],
      ogTitle: "Steps Conversion Hub",
      ogDescription:
        "Convert between steps, miles, kilometers, and calories. Quick answers + full tables.",
      ogImageAlt: "Steps Conversion Hub",
    },
    title: "Steps conversion hub",
    subtitle:
      "Quick, accurate answers for every common step conversion — miles, kilometers, calories, and walking time.",
    seeAll: "See all {count} →",
    categories: {
      "steps-to-miles": {
        title: "Steps to Miles",
        description: "Convert any step count to miles walked",
      },
      "miles-to-steps": {
        title: "Miles to Steps",
        description: "Convert miles to the equivalent number of steps",
      },
      "steps-to-calories": {
        title: "Steps to Calories",
        description: "Estimate calories burned from any step count",
      },
      "steps-to-km": {
        title: "Steps to Kilometers",
        description: "Convert any step count to kilometers walked",
      },
      "km-to-steps": {
        title: "Kilometers to Steps",
        description: "Convert kilometers to the equivalent number of steps",
      },
      "steps-to-time": {
        title: "Steps to Walking Time",
        description: "How long it takes to walk any number of steps",
      },
      "miles-to-time": {
        title: "Miles to Walking Time",
        description: "How long it takes to walk any number of miles",
      },
    },
    stepsToMilesTitle: "Popular: steps to miles",
    milesToStepsTitle: "Popular: miles to steps",
    stepsToCaloriesTitle: "Popular: steps to calories",
    personalTitle: "Want personalized numbers?",
    personalBody:
      "These tables use averages. Our calculators let you enter your actual height, weight, and pace for an exact answer.",
    distanceCta: "Step distance calculator",
    calorieCta: "Calorie calculator",
  },
  stepsToMiles: {
    meta: {
      title: "Steps to Miles Converter — Quick Conversion Table & Calculator",
      description:
        "Convert any number of steps to miles. {ten} steps ≈ {tenMiles} miles · {five} steps ≈ {fiveMiles} miles. Full conversion table from {from} to {to} steps.",
      keywords: [
        "steps to miles",
        "convert steps to miles",
        "steps to miles converter",
        "steps to mile chart",
        "step to mile conversion",
        "how many miles is X steps",
      ],
      ogTitle: "Steps to Miles Converter — Quick Conversion Table & Calculator",
      ogDescription:
        "Convert any number of steps to miles. {ten} steps ≈ {tenMiles} miles. Full conversion table {from} → {to} steps.",
      ogImageAlt: "Steps to Miles",
    },
    crumb: "Steps to Miles",
    title: "Steps to miles converter",
    intro:
      "Convert any step count to miles. Each row below links to a detailed page with calorie burn, walking time, and a stride-length table by height.",
    formulaTitle: "The quick formula",
    formula: "miles ≈ steps × {factor}",
    formulaNote:
      "This assumes an average adult stride of {stride} cm ({feet} ft). Taller walkers cover slightly more per step; shorter walkers cover less. For your specific number, click any row in the table below.",
    tableTitle: "Full conversion table",
    columns: {
      steps: "Steps",
      miles: "Miles",
      kilometers: "Kilometers",
      detail: "Detail page",
    },
    exactTitle: "Want exact numbers for your height?",
    exactBody:
      "Our step distance calculator computes the exact answer for {your} stride length — just enter your height.",
    your: "your",
    accuracyTitle: "How accurate is the steps-to-miles conversion?",
    accuracyBody:
      "The {stride} cm / {feet} ft default stride length is the figure most commonly cited by the CDC, Mayo Clinic, and Harvard Health for an average-height adult. Real stride lengths range from about {short} cm (petite walkers) to {tall} cm (tall walkers), so individual mileage can vary by ±{low}–{high}%.",
    accuracyApp:
      "For the most accurate number, install Steps on your iPhone or Apple Watch — it measures your actual step length from your workouts over time.",
  },
  milesToSteps: {
    meta: {
      title: "How Many Steps in a Mile? — {steps} Steps (Plus Conversion Table)",
      description:
        "{one} mile ≈ {steps} steps for an average adult. Use the table to convert any miles to steps, or click through for calorie burn and walking time by your height.",
      keywords: [
        "how many steps in a mile",
        "miles to steps",
        "miles in steps",
        "1 mile in steps",
        "steps in a mile",
        "convert miles to steps",
      ],
      ogTitle: "How Many Steps in a Mile? — {steps} Steps",
      ogDescription:
        "{one} mile ≈ {steps} steps for an average adult. Full conversion table + height-based calculator.",
      ogImageAlt: "Miles to Steps",
    },
    crumb: "Miles to Steps",
    title: "How many steps are in a mile?",
    intro:
      "Short answer: about {highlight} for an average adult. The full number depends on your height — keep reading for the table.",
    quickLabel: "Quick answer",
    heroFigure: "≈ {steps}",
    heroNote:
      "Average adult, {stride} cm ({feet} ft) stride length. Your number depends on your height.",
    heightTitle: "Steps per mile by height",
    heightIntro:
      "Stride length is roughly {ratio} × your height. Shorter walkers take more steps to cover the same distance.",
    heightColumns: {
      height: "Height",
      stride: "Stride",
      steps: "Steps per mile",
    },
    formulaTitle: "The conversion formula",
    formula: "steps ≈ miles × {steps}",
    formulaNote:
      "Or: {one} mile = {meters} m × {cm} cm ÷ {stride} cm stride ≈ {steps} steps.",
    tableTitle: "Miles → steps conversion table",
    columns: {
      miles: "Miles",
      steps: "Steps (avg adult)",
      detail: "Detail page",
    },
    exactTitle: "Want the exact number for your height?",
    exactBody:
      "Use the step distance calculator — enter your height once and get your personal steps-per-mile number.",
    whyTitle: `Why not just say "{rule} steps in a mile"?`,
    whyBody:
      "The {rule}-step rule of thumb is a useful shortcut, but it leaves a meaningful gap. Using {stride} cm as the average adult stride — which is what the CDC and Mayo Clinic publish — gives about {perMile}, not {rule}. Over a {daily}-step day, that's roughly a quarter-mile of distance the simpler rule would miss.",
    perMile: "{steps} steps per mile",
    connectionTitle: "The {daily}-step connection",
    connectionBody:
      "The standard {daily}-step daily target translates to about {distance} for an average adult. That's why hitting {daily} steps takes roughly {minutes} minutes of normal-pace walking spread across a day.",
    distance: "{miles} miles ({km} km)",
    faq: [
      {
        question: "How many steps are in a mile?",
        answer:
          "About {steps} steps for an average adult using a {stride} cm ({feet} ft) stride length. The exact number ranges from roughly {tallSteps} steps for someone {tallHeight} to {petiteSteps} steps for someone {petiteHeight}.",
      },
      {
        question: "How many steps are in 2 miles?",
        answer:
          "About {steps} steps for an average adult. See the conversion table on this page for other distances.",
      },
      {
        question: "How many steps in 5 miles?",
        answer:
          "About {steps} steps — roughly the standard {daily}-steps daily target.",
      },
      {
        question: "Does the number of steps in a mile depend on height?",
        answer:
          "Yes. Your stride length is roughly {ratio} × your height. A {petiteHeight} walker takes about {petiteSteps} steps per mile, while a {tallHeight} walker takes about {tallSteps} steps per mile — a {percent}% difference.",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "Steps to KM Converter — Quick Conversion Table & Calculator",
      description:
        "Convert any number of steps to kilometers. {steps} steps ≈ {km} km. Full conversion table from {from} to {to} steps.",
      keywords: [
        "steps to km",
        "steps to kilometers",
        "convert steps to km",
        "step to km conversion",
        "steps to km chart",
        "how many km is X steps",
      ],
      ogTitle: "Steps to KM Converter",
      ogDescription:
        "Convert any number of steps to km. {steps} steps ≈ {km} km. Full conversion table.",
      ogImageAlt: "Steps to Kilometers",
    },
    crumb: "Steps to KM",
    title: "Steps to kilometers converter",
    intro:
      "Convert any step count to kilometers. Each row links to a detailed page with calorie burn, walking time, and a stride-length table by height. For an exact, personalized answer, use the {calculator}.",
    calculatorLink: "step distance calculator",
    formulaTitle: "The quick formula",
    formula: "km ≈ steps × {factor}",
    formulaNote:
      "Or: steps × {stride} cm stride ÷ {perKm} = distance in km. Average adult stride is {stride} cm ({feet} ft).",
    tableTitle: "Full conversion table",
    columns: {
      steps: "Steps",
      kilometers: "Kilometers",
      miles: "Miles",
      detail: "Detail page",
    },
    exactTitle: "Want exact numbers for your height?",
    exactBody:
      "Our step distance calculator computes the exact answer for your stride length — just enter your height.",
  },
  kmToSteps: {
    meta: {
      title: "How Many Steps in a KM? — {steps} Steps (Plus Conversion Table)",
      description:
        "{one} km ≈ {steps} steps for an average adult. Full conversion table {from}–{to} km plus height-adjusted calculator for your exact step count.",
      keywords: [
        "how many steps in a km",
        "km to steps",
        "kilometers to steps",
        "1 km in steps",
        "5 km in steps",
        "convert km to steps",
      ],
      ogTitle: "How Many Steps in a KM? — {steps} Steps",
      ogDescription: "{one} km ≈ {steps} steps for an average adult. Full conversion table.",
      ogImageAlt: "KM to Steps",
    },
    crumb: "KM to Steps",
    title: "How many steps are in a kilometer?",
    intro:
      "Short answer: about {highlight} for an average adult. Full number depends on your height — see the table.",
    quickLabel: "Quick answer",
    heroFigure: "≈ {steps}",
    heroNote: "Average adult, {stride} cm ({feet} ft) stride. Your number depends on your height.",
    heightTitle: "Steps per km by height",
    heightIntro:
      "Stride length is roughly {ratio} × your height. Shorter walkers take more steps for the same distance.",
    heightColumns: {
      height: "Height",
      stride: "Stride",
      steps: "Steps per km",
    },
    formulaTitle: "The conversion formula",
    formula: "steps ≈ km × {steps}",
    formulaNote: "Or: {one} km = {cm} cm ÷ {stride} cm stride ≈ {steps} steps.",
    tableTitle: "KM → steps conversion table",
    columns: {
      kilometers: "Kilometers",
      steps: "Steps (avg adult)",
      detail: "Detail page",
    },
    exactTitle: "Want exact numbers for your height?",
    exactBody:
      "Use the step distance calculator — enter your height once and get your personal steps-per-km number.",
    faq: [
      {
        question: "How many steps are in a kilometer?",
        answer:
          "About {steps} steps for an average adult using a {stride} cm stride. Ranges roughly {tall} (tall walker) to {petite} (petite walker).",
      },
      {
        question: "How many steps in 5 km?",
        answer: "About {steps} steps for an average adult — a typical 5K race.",
      },
      {
        question: "How many steps in 10 km?",
        answer: "About {steps} steps — exceeding the standard {daily}-step daily target.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Steps to Calories Converter — How Many Calories Per Step?",
      description:
        "Convert any step count to calories burned. {steps} steps ≈ {calories} calories. Full table from {from} to {to} steps with calorie burn by your body weight.",
      keywords: [
        "steps to calories",
        "calories per step",
        "step to calorie conversion",
        "how many calories in steps",
        "convert steps to calories",
      ],
      ogTitle: "Steps to Calories Converter",
      ogDescription: "{steps} steps ≈ {calories} calories. Full conversion table {from}–{to} steps.",
      ogImageAlt: "Steps to Calories",
    },
    crumb: "Steps to Calories",
    title: "Steps to calories converter",
    intro:
      "Convert any step count to calories burned, then click through for the calorie breakdown by your weight, pace, and walking time.",
    formulaTitle: "The quick formula",
    formula: "calories ≈ steps × {factor} × (weight in kg ÷ {weight})",
    formulaNote:
      "About {one} calorie per {per} steps for an average adult. Heavier walkers burn proportionally more.",
    tableTitle: "Full conversion table ({lb} lb / {kg} kg adult, normal pace)",
    columns: {
      steps: "Steps",
      calories: "Calories",
      detail: "Detail page",
    },
    exactTitle: "Want personalized calorie burn?",
    exactBody:
      "Use the steps-to-calories calculator to enter your weight, age, and gender for a more accurate number.",
  },
  stepsToTime: {
    meta: {
      title: "How Long Does It Take to Walk X Steps? — Time Conversion Table",
      description:
        "Walking time for any step count. {steps} steps ≈ {hours}h {mins}m at normal pace. Full table for {from} → {to} steps across three walking paces.",
      keywords: [
        "how long does it take to walk steps",
        "steps to walking time",
        "walking time per step",
        "steps to minutes",
        "how long to walk X steps",
      ],
      ogTitle: "How Long Does It Take to Walk X Steps?",
      ogDescription: "Walking time for any step count. Full table with three paces.",
      ogImageAlt: "Steps to walking time",
    },
    crumb: "Walking Time",
    title: "How long does it take to walk X steps?",
    intro:
      "Walking time for any step count, across three common paces. Click any row for a detailed page with calorie burn and stride-length breakdowns.",
    formulaTitle: "The quick formula",
    formula: "minutes ≈ steps ÷ {cadence}",
    formulaNote:
      "Most adults walk at a cadence of about {cadence} steps per minute at a normal pace. So {steps} steps ≈ {minutes} minutes ({hours}h {mins}m) of walking. Slightly faster ({mph} mph) gets it down to {fastHours}h {fastMins}m.",
    tableTitle: "Walking time by step count and pace",
    columns: {
      steps: "Steps",
      detail: "Detail",
    },
    exactTitle: "Want to plan a specific walk?",
    exactBody:
      "The walking time calculator estimates time for any distance or step count, with departure and arrival time.",
  },
  milesToTime: {
    meta: {
      title: "How Long to Walk X Miles? — Walking Time by Pace",
      description:
        "Walking time for any distance in miles. {one} mile ≈ {oneMin} min, {three} miles ≈ {threeHours} h, {five} miles ≈ {fiveHours} h {fiveMins} m. Full table at three walking paces.",
      keywords: [
        "how long does it take to walk a mile",
        "how long to walk miles",
        "walking time miles",
        "miles to walking time",
        "how long to walk 5 miles",
        "how long to walk 3 miles",
      ],
      ogTitle: "How Long Does It Take to Walk X Miles?",
      ogDescription: "Walking time for any distance in miles, across three paces.",
      ogImageAlt: "Miles to walking time",
    },
    crumb: "Miles to Walking Time",
    title: "How long does it take to walk X miles?",
    intro:
      "Walking time for any distance, across three common paces. Click any row for a detailed page.",
    formulaTitle: "The quick rule",
    formula: "minutes ≈ miles × {minutes}",
    formulaNote:
      "At a normal {normal} mph walking pace. Brisk walkers ({brisk} mph) shave about {briskCut}%; slow walkers ({slow} mph) add {slowAdd}%.",
    tableTitle: "Walking time by distance and pace",
    columns: {
      distance: "Distance",
      detail: "Detail",
    },
    exactTitle: "Planning a specific route?",
    exactBody:
      "The walking time calculator handles any distance with departure & arrival time, breaks, and pace.",
    faq: [
      {
        question: "How long does it take to walk 1 mile?",
        answer:
          "About {normalMin} minutes at a normal {normalMph} mph walking pace. Brisk pace ({briskMph} mph): {briskMin} minutes. Slow pace ({slowMph} mph): {slowMin} minutes.",
      },
      {
        question: "How long does it take to walk 3 miles?",
        answer:
          "About {hours} hour at a normal pace. Brisk: {briskMin} minutes. Slow: {slowHours} hour {slowMins} minutes.",
      },
      {
        question: "How long does it take to walk 5 miles?",
        answer:
          "About {hours} hour {mins} minutes at a normal pace. Brisk: {briskHours} hour {briskMins} minutes. Slow: {slowHours} hours {slowMins} minutes.",
      },
    ],
  },
};

export type ConversionHubsMessages = typeof en;
export default en;

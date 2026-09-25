const en = {
  ui: {
    breadcrumb: "Breadcrumb",
    quickAnswer: "Quick answer",
    forContext: "For context:",
    distanceByHeightTitle: "Distance depends on your height",
    distanceByHeightBody:
      "Your stride length is roughly 0.41 × your height — so a shorter walker covers less ground per step.",
    heightColumn: "Your height",
    strideColumn: "Stride",
    milesColumn: "Miles",
    kilometersColumn: "Kilometers",
    stepsColumn: "Steps",
    stepsRequiredTitle: "Steps required depend on your height",
    stepsRequiredBody: "Shorter walkers take more steps to cover the same distance.",
    caloriesTitle: "Calories burned by weight and pace",
    caloriesBody:
      "Calories scale linearly with body weight. Faster paces burn more — but only modestly more for walking.",
    weightColumn: "Your weight",
    timeTitle: "How long will it take?",
    timeBody:
      "Time depends on your walking pace. Most adults walk at a normal pace of about 3 mph.",
    paceColumn: "Pace",
    speedColumn: "Speed",
    timeColumn: "Time",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} cal",
    mph: "{value} mph",
    ctaTitle: "Track your real numbers with Steps",
    ctaBody:
      "These conversions use averages. The Steps app tracks your {actual} step length, calories, and walking time — synced from your iPhone and Apple Watch.",
    ctaActual: "actual",
    relatedTitle: "Related conversions",
    faqTitle: "Frequently asked questions",
    heights: [
      `4'10" (147 cm) — petite`,
      `5'4" (163 cm) — avg woman`,
      `5'9" (175 cm) — avg adult`,
      `6'0" (183 cm) — avg man`,
      `6'4" (193 cm) — tall`,
    ],
    weights: [
      "120 lb (54 kg)",
      "150 lb (68 kg)",
      "180 lb (82 kg)",
      "210 lb (95 kg)",
      "250 lb (113 kg)",
    ],
    paces: ["Slow (2 mph)", "Normal (3.1 mph)", "Brisk (4 mph)"],
    duration: {
      minutes: "{count} min",
      hours: "{count} h",
      hoursMinutes: "{hours} h {minutes} min",
    },
  },
  plurals: {
    mile: { one: "1 mile", other: "{count} miles" },
    mileArticle: { one: "a mile", other: "{count} miles" },
    mileInSteps: { one: "{count} mile in steps", other: "{count} miles in steps" },
    mileToSteps: { one: "{count} mile to steps", other: "{count} miles to steps" },
    howManyStepsInMile: {
      one: "how many steps in {count} mile",
      other: "how many steps in {count} miles",
    },
    howManyStepsIsMile: {
      one: "how many steps is {count} mile",
      other: "how many steps is {count} miles",
    },
    mileWalkSteps: "{count} mile walk steps",
    howLongDoesMile: {
      one: "how long does it take to walk {count} mile",
      other: "how long does it take to walk {count} miles",
    },
    howLongToMile: {
      one: "how long to walk {count} mile",
      other: "how long to walk {count} miles",
    },
    walkingTimeMile: {
      one: "walking time {count} mile",
      other: "walking time {count} miles",
    },
    mileWalkingTime: {
      one: "{count} mile walking time",
      other: "{count} miles walking time",
    },
    walkMileTime: {
      one: "Walk {count} mile — time",
      other: "Walk {count} miles — time",
    },
  },
  familiar: {
    olympic: "an Olympic 400m track lap",
    centralPark: "the length of Central Park (NYC)",
    fiveK: "a 5K race",
    tenK: "a 10K race",
    brooklyn: "the Brooklyn Bridge crossing (round trip)",
    half: "a half-marathon",
    marathon: "a full marathon",
  },
  foods: {
    banana: "a banana (105 cal)",
    apple: "an apple (95 cal)",
    bread: "a slice of bread (80 cal)",
    coffee: "a cup of coffee with cream (50 cal)",
    cookie: "a chocolate chip cookie (160 cal)",
    juice: "a glass of orange juice (110 cal)",
  },
  stepsToKm: {
    meta: {
      title: "{steps} Steps to KM — How Many Kilometers Is {steps} Steps?",
      description:
        "{steps} steps ≈ {km} km ({miles} miles) for an average adult. See exact distance by your height, calories burned, and walking time.",
      keywords: [
        "{steps} steps to km",
        "{steps} steps in km",
        "{steps} steps to kilometers",
        "how many km is {steps} steps",
      ],
      ogImageAlt: "{steps} steps to km",
    },
    h1: "{steps} steps to kilometers",
    subheading: "How far do you walk when you hit {steps} steps?",
    primary: "{km} km",
    secondary:
      "{miles} miles · about {time} at a normal pace · {calories} calories for a 70 kg walker",
    intro:
      "Walking {steps} steps covers about {km} km ({miles} miles) for an average adult, using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 5 km/h that takes about {time}, and burns roughly {calories} calories for a 70 kg (155 lb) person. Your exact distance depends on your height — taller people cover more ground per step. See the table below.",
    crumb: "Steps to KM",
    crumbValue: "{steps} steps",
    related: "{steps} steps to km",
    relatedHub: "How many steps in a km?",
    relatedMiles: "{steps} steps to miles",
    faq: [
      {
        question: "How many km is {steps} steps?",
        answer:
          "{steps} steps is about {km} km ({miles} miles) for an average adult with a 76 cm stride length. Shorter walkers cover slightly less distance, taller walkers more — see the height table on this page for your specific number.",
      },
      {
        question: "How long does it take to walk {steps} steps?",
        answer:
          "At a normal walking pace of 5 km/h, {steps} steps takes about {time}. At a brisk 6.4 km/h pace it takes about {brisk}. At a slower 3.2 km/h stroll it takes about {slow}.",
      },
      {
        question: "How many calories does {steps} steps burn?",
        answer:
          "{steps} steps burns roughly {calories} calories for a 70 kg (155 lb) person at a normal walking pace. Lighter people burn fewer calories per step; heavier people burn more. See the calorie table on this page for your weight.",
      },
      {
        question: "How is the steps-to-km conversion calculated?",
        answer:
          "We use an average adult stride length of 76 cm (2.5 ft). Steps × stride length (cm) ÷ 100,000 = distance in km. So {steps} steps × 76 cm ÷ 100,000 ≈ {km} km. Your actual stride is roughly 0.41 × your height.",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "{steps} Steps to Miles — How Many Miles Is {steps} Steps?",
      description:
        "{steps} steps ≈ {miles} miles ({km} km) for an average adult. See exact distance by your height, calories burned, and walking time.",
      keywords: [
        "{steps} steps to miles",
        "{steps} steps in miles",
        "how many miles is {steps} steps",
        "{steps} steps",
        "{steps} steps distance",
        "{steps} steps calories",
      ],
      ogImageAlt: "{steps} steps to miles",
    },
    h1: "{steps} steps to miles",
    subheading: "How far do you walk when you hit {steps} steps?",
    primary: "{miles} miles",
    secondary:
      "{km} km · about {time} at a normal pace · {calories} calories for a 155 lb (70 kg) walker",
    intro:
      "Walking {steps} steps covers about {miles} miles ({km} km) for an average adult, using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 3 mph that takes about {time}, and burns roughly {calories} calories for a 155 lb (70 kg) person. Your exact distance depends on your height — taller people cover more ground per step. See the table below.",
    crumb: "Steps to Miles",
    crumbValue: "{steps} steps",
    related: "{steps} steps to miles",
    relatedHub: "How many steps in a mile?",
    relatedCalories: "{steps} steps to calories",
    realWorld: {
      roughly: "{miles} miles is roughly the distance of {name}.",
      times: "That's about {factor}× the distance of {name}.",
      shorter: "That's about {factor}× shorter than {name}.",
    },
    faq: [
      {
        question: "How many miles is {steps} steps?",
        answer:
          "{steps} steps is about {miles} miles ({km} km) for an average adult with a 76 cm stride length. Shorter walkers cover slightly less distance, taller walkers more — see the height table on this page for your specific number.",
      },
      {
        question: "How long does it take to walk {steps} steps?",
        answer:
          "At a normal walking pace of 3 mph, {steps} steps takes about {time}. At a brisk 4 mph pace it takes about {brisk}. At a slower 2 mph stroll it takes about {slow}.",
      },
      {
        question: "How many calories does {steps} steps burn?",
        answer:
          "{steps} steps burns roughly {calories} calories for a 155 lb (70 kg) person at a normal walking pace. Lighter people burn fewer calories per step; heavier people burn more. See the calorie table on this page for your weight.",
      },
      {
        question: "How is the conversion calculated?",
        answer:
          "We use an average adult stride length of 76 cm (2.5 ft), which is the figure most commonly cited by the CDC and Mayo Clinic. Steps × stride length = distance walked. Your real stride is roughly 0.41 × your height — the height table on this page shows the math for five common heights.",
      },
    ],
    daily: {
      question: "Is {steps} steps a good daily target?",
      below:
        "{steps} steps is below the 7,000–10,000 step daily target most health authorities recommend for adults. Use it as a starting point and build up gradually — even 1,000 extra steps per day improves cardiovascular health.",
      mid: "Yes — {steps} steps lands in the sweet spot most research and the CDC suggest for adults. Hitting this consistently is linked to lower risk of cardiovascular disease and improved long-term health.",
      above:
        "{steps} steps is above the standard 10,000 daily target. It's an excellent volume associated with strong cardiovascular fitness and weight management — but recovery days at lower volumes are also healthy.",
    },
  },
  milesToSteps: {
    meta: {
      title: "How Many Steps in {miles}? — {steps} Steps",
      description:
        "{miles} ≈ {steps} steps for an average adult. See exact step count by your height, calories burned, and walking time.",
      ogImageAlt: "{miles} in steps",
    },
    h1: "How many steps in {milesArticle}?",
    subheading: "The answer — for an average adult — and how it changes with your height.",
    primary: "{steps} steps",
    secondary:
      "{miles} · {km} km · about {time} at a normal pace · {calories} calories for a 155 lb (70 kg) walker",
    intro:
      "Walking {miles} takes about {steps} steps for an average adult, using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 3 mph that takes about {time}, and burns roughly {calories} calories for a 155 lb (70 kg) person. Your exact step count depends on your height — shorter walkers take more steps for the same distance. See the table below.",
    crumb: "Miles to Steps",
    relatedHub: "Steps to miles converter",
    relatedCalories: "{steps} steps to calories",
    faq: [
      {
        question: "How many steps is {miles}?",
        answer:
          "{miles} is about {steps} steps for an average adult with a 76 cm stride length. Shorter walkers take more steps to cover the same distance — see the height table on this page for your specific number.",
      },
      {
        question: "How long does it take to walk {miles}?",
        answer:
          "At a normal walking pace of 3 mph, {miles} takes about {time}. At a brisk 4 mph pace it takes about {brisk}. At a slower 2 mph stroll it takes about {slow}.",
      },
      {
        question: "How many calories does {milesArticle} burn?",
        answer:
          "Walking {miles} burns roughly {calories} calories for a 155 lb (70 kg) person at a normal walking pace. Lighter people burn less; heavier people burn more — see the calorie table on this page.",
      },
      {
        question: "How is the miles-to-steps conversion calculated?",
        answer:
          "We multiply the distance in meters by 100 (cm/m) and divide by an average stride length of 76 cm. So {miles} = {meters} m × 100 ÷ 76 ≈ {steps} steps. Your actual stride length is roughly 0.41 × your height.",
      },
    ],
    exercise: {
      question: "Is walking {miles} a day enough exercise?",
      yes: "Yes — walking {miles} a day ({steps} steps) easily meets the CDC's recommended 150 minutes of moderate aerobic activity per week if done at a normal-to-brisk pace.",
      start:
        "Walking {miles} a day is a solid start. It puts you in the active range and contributes to the CDC's recommended 150 minutes of weekly aerobic activity, but adding a second daily walk would get you to a stronger health benefit.",
      below:
        "Walking less than {miles} a day is below the CDC's minimum recommendation. Build up gradually — even an extra 1,000 steps per day improves cardiovascular health.",
    },
  },
  kmToSteps: {
    meta: {
      title: "How Many Steps in {km} km? — {steps} Steps",
      description:
        "{km} km ≈ {steps} steps for an average adult. See exact step count by your height, calories burned, and walking time.",
      keywords: [
        "{km} km to steps",
        "{km} km in steps",
        "how many steps in {km} km",
        "{km} kilometers in steps",
      ],
      ogImageAlt: "{km} km in steps",
    },
    h1: "How many steps in {km} km?",
    subheading: "The answer — for an average adult — and how it changes with your height.",
    primary: "{steps} steps",
    secondary:
      "{km} km · about {time} at a normal pace · {calories} calories for a 70 kg walker",
    intro:
      "Walking {km} km takes about {steps} steps for an average adult, using a typical 76 cm (2.5 ft) stride. At a normal walking pace of 5 km/h that takes about {time}, and burns roughly {calories} calories for a 70 kg (155 lb) person. Your exact step count depends on your height — shorter walkers take more steps for the same distance.",
    crumb: "KM to Steps",
    crumbValue: "{km} km",
    related: "{km} km in steps",
    relatedHub: "Steps to km converter",
    faq: [
      {
        question: "How many steps is {km} km?",
        answer:
          "{km} km is about {steps} steps for an average adult with a 76 cm stride length. Shorter walkers take more steps to cover the same distance — see the height table on this page for your specific number.",
      },
      {
        question: "How long does it take to walk {km} km?",
        answer:
          "At a normal walking pace of 5 km/h, {km} km takes about {time}. At a brisk 6.4 km/h pace it takes about {brisk}. At a slow 3.2 km/h pace it takes about {slow}.",
      },
      {
        question: "How many calories does walking {km} km burn?",
        answer:
          "Walking {km} km burns roughly {calories} calories for a 70 kg (155 lb) person at a normal pace. See the calorie table on this page for your weight.",
      },
      {
        question: "How is the km-to-steps conversion calculated?",
        answer:
          "We multiply the distance by 100,000 (cm/km) and divide by an average stride length of 76 cm. So {km} km = {cm} cm ÷ 76 cm ≈ {steps} steps. Your actual stride is roughly 0.41 × your height.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "{steps} Steps Calories — How Many Calories Does {steps} Steps Burn?",
      description:
        "{steps} steps burns roughly {calories} calories for an average adult. See the calorie burn by your weight, pace, and walking time.",
      keywords: [
        "{steps} steps calories",
        "{steps} steps how many calories",
        "calories in {steps} steps",
        "{steps} steps burned calories",
        "how many calories is {steps} steps",
      ],
      ogImageAlt: "{steps} steps calories",
    },
    h1: "{steps} steps calories — how many calories do you burn?",
    subheading: "Calorie burn from walking {steps} steps, by your body weight and pace.",
    primary: "≈ {calories} calories",
    secondary:
      "For a 155 lb (70 kg) walker at a normal pace · covers {miles} mi / {km} km · about {time}",
    intro:
      "Walking {steps} steps burns about {calories} calories for an average adult (155 lb / 70 kg) at a normal pace. That's the distance of {miles} miles ({km} km) and takes around {time}. Calorie burn scales with body weight — lighter walkers burn less, heavier walkers burn more.",
    crumb: "Steps to Calories",
    crumbValue: "{steps} steps",
    related: "{steps} steps calories",
    relatedMiles: "{steps} steps to miles",
    relatedTool: "Walking calorie calculator",
    realWorld: {
      roughly: "{calories} calories is roughly {name}.",
      times: "{calories} calories is about {factor}× {name}.",
      less: "{calories} calories is about {factor}× less than {name}.",
    },
    faq: [
      {
        question: "How many calories does {steps} steps burn?",
        answer:
          "{steps} steps burns about {calories} calories for a 155 lb (70 kg) person walking at a normal 3 mph pace. Heavier walkers burn more — see the weight table on this page.",
      },
      {
        question: "Does walking pace change calorie burn?",
        answer:
          "Slightly. Walking at 4 mph (brisk) burns about 30% more calories per minute than 2 mph (slow), but you also cover the distance faster, so the total calorie burn for a fixed step count is closer than you'd think. Total calories range from about {slowCal} (slow) to {briskCal} (brisk) for a 150 lb person.",
      },
      {
        question: "How long does it take to walk {steps} steps?",
        answer:
          "About {time} at a normal walking pace (3 mph). Faster pace at 4 mph: {brisk}. Slower 2 mph stroll: {slow}.",
      },
      {
        question: "What's the formula behind these numbers?",
        answer:
          "We use the standard MET-based calorie formula: Calories = MET × weight (kg) × time (hours). For a normal walking pace MET = 3.5. We assume an average stride of 76 cm to convert steps into distance, then distance into walking time.",
      },
    ],
    loss: {
      question: "Does {steps} steps burn enough calories to lose weight?",
      yes: "{calories} calories is a meaningful chunk of a daily deficit — roughly 0.5 lb of weight loss over two weeks if you don't compensate by eating more. Combined with even modest dietary adjustments, it can drive steady weight loss.",
      no: "{calories} calories is a useful contribution but won't drive weight loss on its own. Aim for at least 7,500–10,000 steps a day combined with a modest calorie deficit from diet.",
    },
  },
  stepsToTime: {
    meta: {
      title: "How Long Does It Take to Walk {steps} Steps?",
      description:
        "{steps} steps takes about {time} at a normal pace. See walking time at 5 paces, distance, and calorie burn.",
      keywords: [
        "how long does it take to walk {steps} steps",
        "how long to walk {steps} steps",
        "{steps} steps in minutes",
        "{steps} steps walking time",
        "{steps} steps how long",
      ],
      ogImageAlt: "Walking time for {steps} steps",
    },
    h1: "How long does it take to walk {steps} steps?",
    subheading: "Walking time, distance, and calories for {steps} steps.",
    primary: "≈ {time}",
    secondary: "At a normal 3 mph pace · covers {miles} mi / {km} km · {calories} calories",
    intro:
      "Walking {steps} steps takes about {time} at a normal pace of 3 mph (5 km/h). A brisk 4 mph pace cuts that to {brisk}; a slow 2 mph stroll stretches it to {slow}. You'll cover {miles} miles ({km} km) and burn about {calories} calories.",
    crumb: "Walking Time",
    crumbValue: "{steps} steps",
    related: "{steps} steps — walking time",
    relatedMiles: "{steps} steps to miles",
    relatedTool: "Walking time calculator",
    faq: [
      {
        question: "How long does it take to walk {steps} steps?",
        answer:
          "About {time} at a normal walking pace of 3 mph. Faster brisk pace (4 mph): {brisk}. Slow stroll (2 mph): {slow}.",
      },
      {
        question: "Does walking time change with my height?",
        answer:
          "Time stays roughly the same — what changes is how many steps you take. Taller walkers take fewer steps to cover the same distance, but most people walk at a similar cadence (about 100 steps per minute). So time depends mostly on your pace, not your height.",
      },
      {
        question: "How far is {steps} steps?",
        answer: "{steps} steps covers about {miles} miles ({km} km) for an average adult.",
      },
      {
        question: "How is walking time calculated?",
        answer:
          "Time = distance ÷ pace. We compute distance from your step count using a 76 cm average stride, then divide by your walking speed. Normal pace (3 mph / 5 km/h) is the default — the table on this page shows all three paces.",
      },
    ],
    spread: {
      question: "Can I spread {steps} steps throughout the day?",
      high: "Absolutely — most people who hit {steps} steps a day accumulate them across walks, errands, and incidental movement. Three 15-minute walks plus normal daily activity typically gets there.",
      low: "Yes — even a single 20-30 minute walk + normal daily activity (walking to your car, around the office, etc.) will usually get you to {steps} steps without a dedicated long walk.",
    },
  },
  milesToTime: {
    meta: {
      title: "How Long Does It Take to Walk {miles}?",
      description:
        "Walking {miles} takes about {time} at a normal 3 mph pace. See walking time at three paces, plus step count and calories.",
      ogImageAlt: "{miles} walking time",
    },
    h1: "How long does it take to walk {milesArticle}?",
    subheading: "Walking time, steps, and calories for {miles}.",
    primary: "≈ {time}",
    secondary: "At a normal 3 mph pace · {steps} steps · {calories} calories for a 70 kg walker",
    intro:
      "Walking {miles} takes about {time} at a normal pace of 3 mph (5 km/h). Cut to {brisk} at a brisk 4 mph pace, or stretched to {slow} at a leisurely 2 mph. You'll take about {steps} steps and burn roughly {calories} calories.",
    crumb: "Walking Time",
    relatedTool: "Walking time calculator",
    faq: [
      {
        question: "How long does it take to walk {milesArticle}?",
        answer: "About {time} at a normal 3 mph pace. Brisk 4 mph: {brisk}. Slow 2 mph: {slow}.",
      },
      {
        question: "How many steps is {miles}?",
        answer:
          "{miles} is about {steps} steps for an average adult with a 76 cm stride. Shorter walkers take more steps — see the height table on this page.",
      },
      {
        question: "How many calories will I burn walking {miles}?",
        answer:
          "Roughly {calories} calories for a 70 kg (155 lb) person at a normal pace. Heavier walkers burn more — see the weight table.",
      },
      {
        question: "How is walking time calculated?",
        answer:
          "Time = distance ÷ pace. {miles} = {km} km. At 5 km/h that's {time}. We use the same three paces the CDC and ACSM publish for moderate physical activity.",
      },
    ],
    exercise: {
      question: "Is walking {miles} a day enough exercise?",
      yes: "Yes — walking {miles} a day easily meets the CDC's 150-minutes-per-week recommendation for moderate aerobic activity if done at a normal-to-brisk pace.",
      start:
        "Walking {miles} a day is a solid start. Combined with normal daily activity it puts you in the active range, but adding another walk would get to a stronger health benefit.",
      below:
        "Less than {miles} a day is below the CDC's minimum recommendation. Build up gradually — even an extra 0.5 mile/day improves cardiovascular health.",
    },
  },
};

export type ConversionValuesMessages = typeof en;
export default en;

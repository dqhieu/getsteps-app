import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Calories Burned Calculator: 50+ Activities, MET-Based",
    description:
      "Calculate calories burned for 50+ activities from walking to HIIT. A 70 kg adult burns 360 calories running 30 minutes, 129 walking. Free MET-based calculator.",
    keywords: [
      "calories burned calculator",
      "calorie burn calculator",
      "exercise calorie calculator",
      "workout calorie calculator",
      "activity calorie calculator",
      "calories burned running calculator",
      "calories burned cycling calculator",
      "calories burned swimming calculator",
      "MET calculator",
      "how many calories did I burn",
    ],
    ogTitle: "Calories Burned Calculator: 50+ Activities, MET-Based",
    ogDescription:
      "Calculate calories burned across 50+ activities using MET values from the Compendium of Physical Activities.",
    ogImageAlt: "Calories Burned Calculator",
  },
  hero: {
    title: "Calories Burned Calculator",
    subtitle:
      "Calories burned across 50+ activities, from a slow walk to a HIIT session. Uses MET values from the Compendium of Physical Activities, and separates gross burn from what the activity actually added.",
  },
  appCta: {
    headline: "Stop estimating one workout at a time",
    description:
      "Steps counts your movement all day in the background and turns it into a running calorie total, no activity picker required.",
  },
  stickyCta: "Track your steps with Steps",
  calculator: {
    pickActivity: "Pick Your Activity",
    category: "Category",
    activity: "Activity",
    activityOption: "{name} · {met} MET",
    yourWeight: "Your Weight",
    duration: "Duration",
    durationPreset: "{minutes} min",
    minutes: "min",
    calculate: "Calculate Calories Burned",
    yourResults: "Your Results",
    caloriesBurned: "Calories burned",
    resultMeta: "{activity} · {duration} min · {met} MET",
    netBurn: "Net burn",
    aboveResting: "above resting",
    perHour: "Per hour",
    calories: "calories",
    stepEquivalent: "Step equivalent",
    steps: "steps",
    bodyFat: "Body fat",
    grams: "grams",
    walkingEquivalent: {
      one: "The same burn would take about {minutes} minute of moderate walking, roughly {steps} steps.",
      other: "The same burn would take about {minutes} minutes of moderate walking, roughly {steps} steps.",
    },
    comparison: "Same {duration} Minutes, Different Activities",
    cal: "{calories} cal",
    categories: {
      "Walking & Running": "Walking & Running",
      Cycling: "Cycling",
      "Gym & Strength": "Gym & Strength",
      Sports: "Sports",
      Water: "Water",
      "Outdoor & Winter": "Outdoor & Winter",
      "Home & Daily": "Home & Daily",
    },
    activities: {
      "walking-slow": "Walking, slow (3.2 km/h)",
      "walking-moderate": "Walking, moderate (5 km/h)",
      "walking-brisk": "Walking, brisk (6.4 km/h)",
      "walking-uphill": "Walking uphill (5 km/h, 5% grade)",
      hiking: "Hiking, cross-country",
      stairs: "Stair climbing",
      jogging: "Jogging (8 km/h)",
      "running-10": "Running (10 km/h)",
      "running-12": "Running (12 km/h)",
      "running-16": "Running (16 km/h)",
      "cycling-light": "Cycling, light (16–19 km/h)",
      "cycling-moderate": "Cycling, moderate (19–22 km/h)",
      "cycling-vigorous": "Cycling, vigorous (22–25 km/h)",
      "cycling-stationary": "Stationary bike, moderate",
      spinning: "Spinning class",
      "weight-light": "Weight training, light",
      "weight-vigorous": "Weight training, vigorous",
      circuit: "Circuit training",
      hiit: "HIIT",
      elliptical: "Elliptical trainer",
      "rowing-machine": "Rowing machine, moderate",
      yoga: "Yoga, hatha",
      pilates: "Pilates",
      stretching: "Stretching",
      "jump-rope": "Jump rope, moderate",
      basketball: "Basketball, game",
      soccer: "Soccer, casual",
      tennis: "Tennis, singles",
      badminton: "Badminton, casual",
      golf: "Golf, walking with clubs",
      volleyball: "Volleyball, casual",
      "boxing-bag": "Boxing, punching bag",
      "martial-arts": "Martial arts",
      "table-tennis": "Table tennis",
      "swimming-leisure": "Swimming, leisurely",
      "swimming-freestyle": "Swimming, freestyle moderate",
      "swimming-vigorous": "Swimming, freestyle vigorous",
      "water-aerobics": "Water aerobics",
      kayaking: "Kayaking",
      surfing: "Surfing",
      "skiing-downhill": "Skiing, downhill moderate",
      "skiing-cross": "Cross-country skiing",
      snowboarding: "Snowboarding",
      "ice-skating": "Ice skating",
      "rock-climbing": "Rock climbing, ascending",
      rucking: "Backpacking with load",
      cleaning: "House cleaning, moderate",
      gardening: "Gardening",
      mowing: "Mowing the lawn, push mower",
      "shovelling-snow": "Shovelling snow",
      "grocery-shopping": "Grocery shopping",
      childcare: "Playing with children, vigorous",
      "desk-work": "Desk work, sitting",
    },
  },
  info: {
    title: "How We Calculate Calories Burned",
    intro:
      "Every activity carries a MET rating, its energy cost as a multiple of sitting still. Those ratings come from the 2011 Compendium of Physical Activities, the reference researchers use for exactly this purpose.",
    formulaTitle: "The Formula",
    perMinuteLabel: "Calories per minute",
    perMinute: "= MET × 3.5 × weight(kg) ÷ 200",
    netLabel: "Net calories",
    net: "= gross × (MET − 1) ÷ MET, stripping out the resting energy you would have spent anyway",
    oneMet: "1 MET = 3.5 ml O₂/kg/min, the oxygen uptake of a body at rest",
    exampleLabel: "Example:",
    example:
      "70 kg running at 10 km/h is 9.8 MET, so 12.0 cal/min, 360 calories over 30 minutes, of which 323 are net.",
    walkingNote:
      "Every result also converts to a walking equivalent in minutes and steps. A 30 minute run at 10 km/h comes out at roughly 84 minutes of moderate walking, about 8,400 steps, which is a more useful frame than a bare calorie figure if you track your day in steps.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "How are calories burned calculated?",
      answer:
        "Through MET values. One MET is your resting metabolic rate, defined as 3.5 ml of oxygen per kilogram per minute. An activity rated 8 METs costs eight times that. The arithmetic is: calories per minute = MET × 3.5 × weight in kg ÷ 200. A 70 kg adult running at 10 km/h (9.8 MET) burns about 12 calories a minute, so 360 over half an hour.",
    },
    {
      question: "What is the difference between gross and net calories?",
      answer:
        "Gross calories are everything you burned during the activity, including the resting energy you would have spent sitting on the sofa. Net calories are the extra cost of the activity alone. For a 30 minute run the difference is around 10%, but for low-intensity activity it is much larger: half an hour of walking might show 129 gross and only 92 net. If you are logging exercise against a calorie budget, net is the honest number, because your TDEE already counted the resting portion.",
    },
    {
      question: "How accurate are MET-based estimates?",
      answer:
        "Within roughly 10 to 15% for most people, which is about as good as anything short of a metabolic cart. MET values are population averages, so they cannot see your efficiency, fitness level, or body composition. A trained runner burns less than an untrained one at the same pace because their movement is more economical. Treat the output as a good estimate, not a measurement.",
    },
    {
      question: "Why does my fitness tracker give a different number?",
      answer:
        "Most wrist trackers estimate from heart rate rather than MET values, and heart rate responds to heat, caffeine, stress and dehydration as well as to effort. Trackers also frequently report gross calories while your calorie app expects net. Gym machines are worse still: they typically assume a default body weight and overstate burn by 15 to 25%.",
    },
    {
      question: "Does body weight change how many calories I burn?",
      answer:
        "Substantially, and proportionally. Calorie cost scales linearly with body mass, so a 90 kg person burns about 29% more than a 70 kg person doing exactly the same activity for the same time. This is why heavier people often see faster early weight loss from the same routine, and why the burn shrinks as they get lighter.",
    },
    {
      question: "Which activity burns the most calories?",
      answer:
        "Per minute, running fast, jump rope and martial arts sit at the top, around 11 to 14.5 METs. But total burn is intensity multiplied by duration, and that is where the ranking changes. Most people cannot sustain 14 METs for more than a few minutes, while a 5 MET walk can run for an hour without difficulty. An hour of brisk walking beats ten minutes of sprinting.",
    },
    {
      question: "How many calories does walking burn compared to running?",
      answer:
        "Running roughly doubles the per-minute rate. For a 70 kg adult, moderate walking (3.5 MET) burns about 4.3 calories a minute and running at 10 km/h (9.8 MET) about 12. But the gap narrows on any realistic comparison: 60 minutes of walking burns 258 calories, while the 20 minutes of running most beginners can actually manage burns 240.",
    },
  ],
  cta: {
    title: "Track Every Calorie Automatically",
    description:
      "Download the Steps app to count your steps and calories burned in the background, all day, without logging anything.",
  },
  howTo: TOOL_HOW_TO["calories-burned-calculator"],
};

export type CaloriesBurnedMessages = typeof en;
export default en;

import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Rucking Calorie Calculator: Pack Weight, Terrain & Grade",
    description:
      "Calculate rucking calories from pack weight, pace, grade and terrain using the Pandolf equation. A 70 kg rucker carrying 15 kg for an hour burns ~350 calories. Free calculator.",
    keywords: [
      "rucking calorie calculator",
      "ruck march calorie calculator",
      "rucking calories burned",
      "weighted vest calorie calculator",
      "backpacking calorie calculator",
      "Pandolf equation",
      "load carriage energy cost",
      "hiking with pack calories",
    ],
    ogTitle: "Rucking Calorie Calculator: Pack Weight, Terrain & Grade",
    ogDescription:
      "Calculate calories burned rucking from pack weight, pace, grade and terrain. Free calculator using the Pandolf load-carriage equation.",
    ogImageAlt: "Rucking Calorie Calculator",
  },
  hero: {
    title: "Rucking Calorie Calculator",
    subtitle:
      "Calculate calories burned rucking from your pack weight, pace, grade and terrain. Uses the Pandolf load-carriage equation, so the weight on your back actually counts.",
  },
  calculator: {
    yourRuck: "Your Ruck",
    switchImperial: "Switch to lbs / mph",
    switchMetric: "Switch to kg / km/h",
    bodyWeight: "Body weight",
    packWeight: "Pack weight",
    pace: "Pace",
    duration: "Duration",
    minutes: "minutes",
    grade: "Grade: {percent}%",
    terrain: "Terrain",
    terrains: {
      blacktop: {
        label: "Paved road",
        inline: "paved road",
        description: "Blacktop or treadmill. The reference surface.",
      },
      gravel: {
        label: "Gravel road",
        inline: "gravel road",
        description: "Dirt or gravel road, light brush.",
      },
      trail: {
        label: "Hiking trail",
        inline: "hiking trail",
        description: "Packed singletrack with roots and rock.",
      },
      "heavy-brush": {
        label: "Heavy brush",
        inline: "heavy brush",
        description: "Thick undergrowth, no established path.",
      },
      swampy: {
        label: "Swampy bog",
        inline: "swampy bog",
        description: "Soft, saturated ground that gives underfoot.",
      },
      sand: {
        label: "Loose sand",
        inline: "loose sand",
        description: "Dry beach sand. The most expensive common surface.",
      },
    },
    terrainFactor: "{description} Terrain factor {factor}.",
    caloriesBurned: "Calories Burned",
    packAdds:
      "The {load} pack adds {extra} kcal over the same walk carrying nothing ({unloaded} kcal).",
    heavyLoad:
      "That pack is {percent}% of your body weight. Loads above about a third of body weight raise injury risk sharply, and the Pandolf model is least reliable there. Build up gradually rather than jumping to this load.",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "Distance",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "Pack / body weight",
    equation: "Pandolf load-carriage equation at {watts} watts, {terrain}, {grade}% grade.",
    tableTitle: "Calories by Pack Weight",
    tableSubtitle: "Same pace, grade, terrain and duration. Only the load changes.",
    colPack: "Pack",
    colCalories: "Calories",
    colVsUnloaded: "vs unloaded",
    vsUnloaded: "+{percent}%",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "Track every ruck automatically",
    description:
      "Steps counts your distance and steps in the background, so your rucks log themselves alongside the rest of your walking.",
  },
  info: {
    title: "How We Calculate Rucking Calories",
    intro:
      "MET tables and the ACSM equations have no load term at all: they return the same burn whether your pack is empty or holds 30 kilograms. We use the Pandolf equation instead, which was built specifically to price load carriage.",
    formulaTitle: "The Formula",
    formulas: [
      {
        strong: "M",
        rest: "= 1.5W + 2.0(W+L)(L/W)² + η(W+L)(1.5V² + 0.35VG)",
      },
      {
        strong: "",
        rest: "M is metabolic rate in watts, W body mass in kg, L load in kg, V speed in m/s, G grade as a percentage, and η the terrain factor.",
      },
      { strong: "kcal/min", rest: "= watts × 60 ÷ 4184" },
      {
        strong: "",
        rest: "The middle term is the load penalty, and it scales with (L/W)². Doubling your pack more than doubles that term.",
      },
      {
        strong: "Example:",
        rest: "70 kg carrying 20 kg at 4.8 km/h on blacktop is 360 watts, about 5.2 kcal per minute.",
      },
    ],
    note: "Pandolf covers level and uphill walking. Downhill needs the separate Santee correction, so descents are treated as level ground here rather than returning a figure the model cannot support.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "How many calories does rucking burn?",
      answer:
        "A 70 kg (155 lb) person rucking 5 km/h on pavement with a 15 kg (33 lb) pack burns roughly 310 calories an hour. The same hour walking unloaded is about 265, so the pack accounts for around 45 of them. Pack weight, grade and terrain all move that figure substantially, which is why a single calories-per-hour number is misleading.",
    },
    {
      question: "Does rucking burn more calories than walking?",
      answer:
        "Yes, and more than the added weight alone suggests. Carrying a load costs energy twice over: you move the extra mass, and you pay a separate penalty for the load being carried rather than being part of your body. In the Pandolf equation that penalty scales with the square of the load-to-bodyweight ratio, so each additional kilogram costs more than the one before it.",
    },
    {
      question: "How much weight should I ruck with?",
      answer:
        "Most guidance starts beginners at 10 percent of body weight and builds toward a third at most. Above roughly a third of body weight, injury risk to the knees, lower back and feet climbs sharply, and the Pandolf model itself becomes less reliable because it was validated mostly below that ratio. Add weight slowly and before you add distance.",
    },
    {
      question: "Does terrain change how many calories rucking burns?",
      answer:
        "Considerably. The Pandolf equation applies a terrain factor to the movement cost: paved road is the 1.0 reference, dirt road and trail are about 1.2, heavy brush 1.5, swampy ground 1.8, and loose sand 2.1. Rucking on dry beach sand costs roughly twice the movement energy of the same ruck on blacktop.",
    },
    {
      question: "What is the Pandolf equation?",
      answer:
        "It is the standard model for the metabolic cost of carrying a load, published by Pandolf, Givoni and Goldman in 1977 for the US Army. It predicts metabolic rate in watts from body mass, load mass, walking speed, grade and terrain. Unlike MET tables and the ACSM equations, it treats the load as a real input rather than ignoring it.",
    },
    {
      question: "Why does this calculator not accept downhill grades?",
      answer:
        "Because the Pandolf equation was validated for level and uphill walking only. Fed a negative grade it returns implausibly low costs, since descending is cheaper than level walking in the formula but not indefinitely so in reality. Modelling downhill correctly needs the separate Santee correction, so this calculator treats descents as level ground rather than reporting a number it cannot stand behind.",
    },
    {
      question: "Is rucking better than running for fat loss?",
      answer:
        "It is easier to sustain, which usually matters more than the per-minute rate. Rucking sits around 6 to 8 METs depending on load and grade, below most running, but the low impact means people tolerate far more weekly volume without the joint stress that ends running blocks. Total weekly energy expenditure, not the intensity of any single session, is what drives fat loss.",
    },
  ],
  cta: {
    title: "Track Your Rucks",
    description:
      "Download the Steps app to automatically track your walks, calories burned, and progress over time.",
  },
  sticky: "Track your steps with Steps",
  howTo: TOOL_HOW_TO["rucking-calorie-calculator"],
};

export type RuckingCalorieCalculatorMessages = typeof en;
export default en;

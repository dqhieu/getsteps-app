import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "TDEE Calculator - Total Daily Energy Expenditure & Calorie Needs",
    description:
      "Calculate your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR). Find your daily calorie needs for weight loss, maintenance, or muscle gain.",
    keywords: [
      "TDEE calculator",
      "total daily energy expenditure calculator",
      "calorie calculator",
      "BMR calculator",
      "how many calories should I eat",
      "maintenance calories calculator",
      "daily calorie needs",
    ],
    ogTitle: "TDEE Calculator - Total Daily Energy Expenditure & Calorie Needs",
    ogDescription:
      "Calculate your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR). Find your daily calorie needs for weight loss, maintenance, or muscle gain.",
  },
  hero: {
    title: "TDEE Calculator",
    subtitle: "Calculate how many calories you burn per day based on your body stats and activity level.",
  },
  intro:
    "Enter your gender, age, weight, height, and activity level to calculate your Total Daily Energy Expenditure (TDEE) — the number of calories your body burns per day. Use it to set the right calorie target for your goals.",
  calculator: {
    details: "Your Details",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    years: "years",
    weight: "Weight",
    height: "Height",
    activityLevel: "Activity Level",
    activity: {
      sedentary: "Sedentary",
      light: "Lightly Active",
      moderate: "Moderately Active",
      active: "Active",
      very_active: "Very Active",
    },
    calculate: "Calculate TDEE",
    results: "Your Results",
    bmr: "BMR",
    bmrUnit: "cal/day at rest",
    tdee: "TDEE",
    tdeeUnit: "cal/day total",
    calorieGoals: "Calorie Goals",
    maintenanceBadge: "Maintenance",
    belowMinimum: "Below minimum",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "Aggressive Loss", weekly: "-1 kg / week" },
      moderate_loss: { label: "Moderate Loss", weekly: "-0.5 kg / week" },
      mild_loss: { label: "Mild Loss", weekly: "-0.25 kg / week" },
      maintenance: { label: "Maintenance", weekly: "0 kg / week" },
      mild_gain: { label: "Mild Gain", weekly: "+0.25 kg / week" },
      muscle_gain: { label: "Muscle Gain", weekly: "+0.5 kg / week" },
    },
  },
  faqTitle: "TDEE & Calorie FAQ",
  faq: [
    {
      question: "What is TDEE?",
      answer:
        "TDEE stands for Total Daily Energy Expenditure — the total number of calories your body burns in a day. It includes your Basal Metabolic Rate (calories burned at rest), the energy used during physical activity, and the thermic effect of food (calories burned digesting meals). TDEE is the most important number for setting calorie targets for weight loss, maintenance, or muscle gain.",
    },
    {
      question: "How accurate is TDEE?",
      answer:
        "TDEE calculators using the Mifflin-St Jeor equation are generally accurate within 10–15% for most people. Individual variation due to genetics, muscle mass, hormonal factors, and metabolic adaptation can shift the true value. Use the result as a starting point, track your weight for 2–3 weeks, and adjust your intake up or down by 100–200 calories based on actual progress.",
    },
    {
      question: "What is the difference between BMR and TDEE?",
      answer:
        "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest — the minimum energy needed to keep basic functions like breathing, circulation, and cell repair running. TDEE adds all other energy expenditure on top of BMR: physical activity, exercise, and digestion. TDEE is always higher than BMR and is the number you should use for setting calorie goals.",
    },
    {
      question: "How many calories below TDEE to lose weight?",
      answer:
        "A daily deficit of 250–500 calories below TDEE is recommended for sustainable weight loss of 0.25–0.5 kg per week. Larger deficits can cause muscle loss, nutrient deficiencies, and metabolic adaptation. Women should generally not eat below 1,200 calories/day and men below 1,500 calories/day without medical supervision. Combining a moderate deficit with increased daily steps is often more effective than restriction alone.",
    },
    {
      question: "Does TDEE change with age?",
      answer:
        "Yes. TDEE typically decreases by approximately 1–2% per decade after age 20, primarily due to loss of muscle mass (sarcopenia). Muscle tissue is metabolically active and burns more calories at rest than fat tissue. Resistance training and maintaining an active lifestyle can significantly slow this decline. Hormonal changes, particularly during menopause, can also reduce TDEE for women.",
    },
  ],
  cta: {
    title: "Increase Your TDEE Naturally",
    description: "Increase your TDEE naturally by adding more daily steps. Track them in the Steps app.",
  },
  howTo: TOOL_HOW_TO["tdee-calculator"],
};

export type TdeeCalculatorMessages = typeof en;
export default en;

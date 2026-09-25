import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "BMI Calculator - Calculate Your Body Mass Index",
    description:
      "Calculate your Body Mass Index (BMI) and find out if you're in a healthy weight range. Get personalized health insights and step recommendations.",
    keywords: [
      "BMI calculator",
      "body mass index",
      "calculate BMI",
      "healthy weight calculator",
      "BMI chart",
      "weight for height",
      "BMI categories",
      "healthy BMI range",
    ],
    ogTitle: "BMI Calculator",
    ogDescription:
      "Calculate your Body Mass Index (BMI) and find out if you're in a healthy weight range.",
  },
  hero: {
    title: "BMI Calculator",
    subtitle:
      "Calculate your Body Mass Index to understand your weight category and get personalized health recommendations.",
  },
  calculator: {
    measurements: "Your Measurements",
    weight: "Weight",
    height: "Height",
    yourBmi: "Your BMI",
    healthyRange: "Healthy Weight Range",
    recommendedSteps: "Recommended Daily Steps",
    aboveRange: "You are {amount} above the healthy weight range for your height.",
    belowRange: "You are {amount} below the healthy weight range for your height.",
    categoriesTitle: "BMI Categories",
    categoriesSubtitle: "World Health Organization BMI classification for adults",
    categoryColumn: "Category",
    rangeColumn: "BMI Range",
    categories: {
      underweight: "Underweight",
      normal: "Normal",
      overweight: "Overweight",
      "obese-1": "Obese Class I",
      "obese-2": "Obese Class II",
      "obese-3": "Obese Class III",
    },
  },
  info: {
    title: "Understanding BMI",
    intro:
      "Body Mass Index (BMI) is a simple calculation using your height and weight to estimate body fat and assess whether you're at a healthy weight. It's widely used as a screening tool for weight categories.",
    formulaTitle: "The Formula",
    formula: "BMI = Weight (kg) ÷ Height (m)²",
    exampleLabel: "Example:",
    example: "A person weighing 70 kg with height 1.75 m has BMI = 70 ÷ (1.75 × 1.75) = 22.9",
    faqTitle: "Common Questions",
  },
  faq: [
    {
      question: "What is a healthy BMI?",
      answer:
        "A BMI between 18.5 and 24.9 is considered healthy for most adults. However, BMI doesn't account for muscle mass, bone density, or fat distribution, so it's just one factor in assessing overall health.",
    },
    {
      question: "Is BMI accurate for everyone?",
      answer:
        "BMI may not be accurate for athletes with high muscle mass, elderly individuals, or people with certain body types. It's a useful screening tool but should be considered alongside other health indicators.",
    },
    {
      question: "How can I improve my BMI?",
      answer:
        "If your BMI is outside the healthy range, focus on sustainable lifestyle changes: regular physical activity (like daily walking), balanced nutrition, and adequate sleep. Consult a healthcare professional for personalized advice.",
    },
    {
      question: "How many steps should I walk based on my BMI?",
      answer:
        "For maintaining a healthy BMI, aim for 10,000 steps daily. If you're looking to lose weight, consider 12,000+ steps. Start with your current level and gradually increase by 1,000 steps per week.",
    },
    {
      question: "Is BMI different for children?",
      answer:
        "Yes, BMI for children and teens is calculated differently and compared to age and sex-specific percentiles. This calculator is designed for adults 18 and older. For children, consult a pediatrician.",
    },
  ],
  cta: {
    title: "Track Your Health Journey",
    description:
      "Download the Steps app to track your daily activity and work towards a healthier weight.",
  },
  howTo: TOOL_HOW_TO["bmi-calculator"],
};

export type BmiCalculatorMessages = typeof en;
export default en;

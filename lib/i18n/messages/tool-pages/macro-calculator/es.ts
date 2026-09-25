import type { MacroCalculatorMessages } from "./en";

const es: MacroCalculatorMessages = {
  meta: {
    title: "Calculadora de macronutrientes – proteína, carbohidratos y grasa",
    description:
      "Calcula tus macronutrientes diarios (proteína, carbohidratos y grasa) para perder peso, mantener o ganar músculo. Según tu TDEE y tus objetivos.",
    keywords: [
      "calculadora de macros",
      "calculadora de macronutrientes",
      "calculadora de proteína para perder peso",
      "calcular macros",
      "cuántos gramos de proteína al día",
      "reparto de macronutrientes",
      "calculadora IIFYM",
    ],
    ogTitle: "Calculadora de macronutrientes – proteína, carbohidratos y grasa",
    ogDescription:
      "Calcula tus macronutrientes diarios (proteína, carbohidratos y grasa) para perder peso, mantener o ganar músculo.",
  },
  hero: {
    title: "Calculadora de macronutrientes",
    subtitle:
      "Obtén tus objetivos diarios de proteína, carbohidratos y grasa según tus datos y tu meta.",
  },
  intro:
    "Introduce tus datos y elige tu objetivo para calcular tus macronutrientes diarios. Ya sea que estés en definición, mantenimiento o ganancia muscular, el reparto adecuado marca la diferencia.",
  calculator: {
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    weight: "Peso",
    height: "Altura (cm)",
    activityLevel: "Nivel de actividad",
    activity: {
      sedentary: "Sedentario",
      light: "Ligeramente activo",
      moderate: "Moderadamente activo",
      active: "Activo",
      very_active: "Muy activo",
    },
    goal: "Objetivo",
    goals: {
      weight_loss: "Pérdida de peso",
      maintenance: "Mantenimiento",
      muscle_gain: "Ganancia muscular",
    },
    calculate: "Calcular macronutrientes",
    dailyTarget: "Tu objetivo diario",
    cal: "cal",
    bmrTdee: "BMR: {bmr} · TDEE: {tdee}",
    protein: "Proteína",
    carbs: "Carbohidratos",
    fat: "Grasa",
    grams: "{grams}g",
  },
  info: {
    title: "Entender los macronutrientes",
    faqTitle: "Preguntas habituales",
  },
  faq: [
    {
      question: "¿Qué son los macronutrientes?",
      answer:
        "Los macronutrientes (proteína, carbohidratos y grasa) son las tres fuentes principales de calorías. La proteína y los carbohidratos aportan 4 calorías por gramo, y la grasa 9 calorías por gramo. El equilibrio adecuado para tu objetivo determina la composición corporal.",
    },
    {
      question: "¿Cuánta proteína debería comer al día?",
      answer:
        "Quien está activo debería apuntar a 1,6–2,4 g de proteína por kg de peso. El extremo alto (2,2–2,4 g/kg) se recomienda para ganar músculo o durante un déficit calórico, para conservar la masa muscular.",
    },
    {
      question: "¿Debo contar macronutrientes o solo calorías?",
      answer:
        "Seguir los macronutrientes da más control sobre la composición corporal. Contar solo calorías al perder peso puede hacerte perder músculo si la proteína es demasiado baja — los macronutrientes hacen que pierdas grasa y conserves tejido magro.",
    },
    {
      question: "¿Cuál es un buen reparto de macronutrientes para perder peso?",
      answer:
        "Un reparto alto en proteína funciona mejor: alrededor de un 35–40 % de proteína para conservar músculo, un 25 % de grasa para la salud hormonal y un 30–35 % de carbohidratos para la energía. Cumplir la proteína va por delante de todo lo demás.",
    },
    {
      question: "¿Cuántos gramos de carbohidratos al día?",
      answer:
        "Por lo general 150–300 g para un adulto activo. Apunta al extremo bajo al perder peso y más alto si haces resistencia o buscas ganar músculo. Las necesidades de carbohidratos crecen con el volumen de entrenamiento.",
    },
  ],
  cta: {
    title: "Combina tus macronutrientes con un objetivo de pasos",
    description: "Combina tus objetivos de macronutrientes con una meta diaria de pasos para mejores resultados.",
  },
  howTo: {
    name: "Cómo calcular tus macronutrientes diarios",
    description:
      "Introduce tus datos y tu objetivo para obtener proteína, carbohidratos y grasa diarios en gramos y calorías.",
    steps: [
      {
        name: "Introduce tus datos",
        text: "Edad, sexo, peso, altura y nivel de actividad — las mismas entradas que la calculadora TDEE.",
      },
      {
        name: "Elige tu objetivo",
        text: "Definición (perder peso), mantenimiento o volumen (ganar músculo). Cada objetivo usa proporciones de macronutrientes distintas.",
      },
      {
        name: "Lee tus objetivos de macronutrientes",
        text: "La calculadora devuelve gramos y calorías de proteína, carbohidratos y grasa, más las calorías diarias totales.",
      },
    ],
  },
};

export default es;

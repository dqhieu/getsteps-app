import type { BodyFatCalculatorMessages } from "./en";

const es: BodyFatCalculatorMessages = {
  meta: {
    title: "Calculadora de grasa corporal – método Navy (sin aparatos)",
    description:
      "Calcula tu porcentaje de grasa corporal con el método preciso de la Marina de EE. UU. Introduce tus medidas — sin báscula ni equipo de gimnasio.",
    keywords: [
      "calculadora de grasa corporal",
      "porcentaje de grasa corporal",
      "método navy grasa corporal",
      "cómo calcular la grasa corporal",
      "grasa corporal hombres",
      "grasa corporal mujeres",
    ],
    ogTitle: "Calculadora de grasa corporal – método Navy",
    ogDescription:
      "Calcula tu porcentaje de grasa corporal con el método preciso de la Marina de EE. UU. Introduce tus medidas — sin báscula ni equipo de gimnasio.",
    ogImageAlt: "Calculadora de porcentaje de grasa corporal",
  },
  hero: {
    title: "Calculadora de porcentaje de grasa corporal",
    subtitle:
      "Calcula tu grasa corporal con precisión usando el método de la Marina de EE. UU. — solo hace falta una cinta métrica.",
  },
  intro:
    "Introduce sexo, altura y perímetros para calcular el porcentaje de grasa con la fórmula contrastada de la Marina de EE. UU. — sin báscula de grasa ni material de gimnasio.",
  calculator: {
    measurements: "Tus medidas",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    height: "Altura",
    weight: "Peso",
    circumferenceUnit: "Unidad de perímetro",
    waist: "Perímetro de cintura",
    neck: "Perímetro de cuello",
    hip: "Perímetro de cadera",
    measurementHint: "Toma cada medida en el punto más estrecho.",
    invalidTitle: "Revisa tus medidas",
    invalidDetail: "El perímetro de cintura debe ser mayor que el del cuello.",
    yourBodyFat: "Tu grasa corporal",
    percent: "{value} %",
    fatMass: "Masa grasa",
    leanMass: "Masa magra",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "Pasos diarios recomendados",
    categoriesTitle: "Categorías de grasa corporal",
    categoriesSubtitleMale: "Clasificación del American Council on Exercise (ACE) para hombres",
    categoriesSubtitleFemale: "Clasificación del American Council on Exercise (ACE) para mujeres",
    categoryColumn: "Categoría",
    rangeColumn: "Rango de grasa corporal",
    categories: {
      essential: "Grasa esencial",
      athletic: "Atlético",
      fitness: "Fitness",
      acceptable: "Aceptable",
      obese: "Obesidad",
    },
  },
  info: {
    title: "Entender el porcentaje de grasa corporal",
    intro:
      "El porcentaje de grasa describe tu forma mejor que el IMC solo. El IMC solo mira peso y altura; la grasa corporal separa la masa grasa de la masa magra (músculo, hueso, agua).",
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Cuál es un porcentaje de grasa saludable?",
      answer:
        "En hombres, un rango fitness del 14–17 % y uno aceptable del 18–24 % se consideran saludables. En mujeres, el fitness está entre el 21–24 % y el aceptable entre el 25–31 %. Quienes compiten suelen estar más bajos — 6–13 % en hombres y 14–20 % en mujeres.",
    },
    {
      question: "¿Qué precisión tiene el método Navy?",
      answer:
        "El método de la Marina de EE. UU. suele quedar a un 3–4 % de un escáner DEXA, así que es de los métodos con cinta más fiables sin aparatos. La precisión mejora si mides con cuidado y siempre igual.",
    },
    {
      question: "¿Dónde mido la cintura?",
      answer:
        "Mide la cintura en el punto más estrecho, normalmente a la altura del ombligo o justo encima. Mantén la cinta paralela al suelo y mide tras espirar con normalidad — no metas la tripa.",
    },
    {
      question: "¿En qué se diferencian la grasa corporal y el IMC?",
      answer:
        "El IMC solo usa altura y peso, así que no distingue grasa y músculo. Un atleta musculoso puede tener un IMC alto y poca grasa. El porcentaje de grasa indica mejor la composición real y el riesgo para la salud.",
    },
    {
      question: "¿Cómo bajo la grasa corporal?",
      answer:
        "Combina caminar o cardio habitual, fuerza y un déficit calórico moderado. Apunta a perder 0,5–1 kg de grasa por semana. Un objetivo de 10.000 pasos o más al día sube el gasto sin entrenos duros.",
    },
  ],
  cta: {
    title: "Sigue tu camino de salud",
    description: "Une tus metas de composición corporal al conteo diario de pasos en Steps.",
  },
  howTo: {
    name: "Cómo calcular el porcentaje de grasa corporal (método Navy)",
    description:
      "Introduce perímetro de cuello, cintura y cadera, altura y sexo para estimar la grasa corporal con la fórmula de la Marina de EE. UU.",
    steps: [
      {
        name: "Mide el cuello",
        text: "Mide el cuello justo debajo de la nuez con una cinta blanda.",
      },
      {
        name: "Mide la cintura",
        text: "En hombres, mide a la altura del ombligo. En mujeres, en el punto más estrecho de la cintura.",
      },
      {
        name: "Mide la cadera (solo mujeres)",
        text: "En mujeres, añade una medida en el punto más ancho de la cadera.",
      },
      {
        name: "Introduce medidas y altura",
        text: "Escribe todos los perímetros y tu altura. La calculadora admite unidades métricas e imperiales.",
      },
      {
        name: "Lee el porcentaje y la categoría",
        text: "El resultado muestra el porcentaje estimado de grasa y la categoría ACE (grasa esencial, atletas, fitness, media, obesidad).",
      },
    ],
  },
};

export default es;

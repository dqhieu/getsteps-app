import type { CalorieDeficitMessages } from "./en";

const es: CalorieDeficitMessages = {
  meta: {
    title: "Calculadora de déficit calórico – Cuánto comer para adelgazar",
    description:
      "Calcula tu déficit calórico diario para llegar a tu peso objetivo con seguridad. Obtén tu TDEE, las calorías objetivo y los pasos diarios recomendados.",
    keywords: [
      "calculadora déficit calórico",
      "cuántas calorías para adelgazar",
      "déficit calórico para perder peso",
      "calculadora de calorías diarias",
      "TDEE para adelgazar",
      "qué tamaño debe tener mi déficit calórico",
    ],
    ogTitle: "Calculadora de déficit calórico – Cuánto comer para adelgazar",
    ogDescription:
      "Calcula tu déficit calórico diario para llegar a tu peso objetivo con seguridad. Obtén tu TDEE, las calorías objetivo y los pasos diarios recomendados.",
    ogImageAlt: "Calculadora de déficit calórico",
  },
  hero: {
    title: "Calculadora de déficit calórico",
    subtitle:
      "Descubre exactamente cuántas calorías comer al día para alcanzar tu peso objetivo de forma segura y sostenible.",
  },
  intro:
    "Introduce tus datos, tu peso objetivo y el plazo para calcular las calorías diarias, el déficit necesario y cuántos pasos extra al día te ayudan a llegar antes.",
  calculator: {
    details: "Tus datos",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    years: "años",
    currentWeight: "Peso actual",
    height: "Altura",
    activity: "Nivel de actividad",
    activityLevels: {
      sedentary: "Sedentario",
      light: "Ligeramente activo",
      moderate: "Moderadamente activo",
      active: "Activo",
      very_active: "Muy activo",
    },
    goalWeight: "Peso objetivo",
    timeframe: "Plazo",
    weeks: "{count} sem.",
    plan: "Tu plan",
    atGoalTitle: "¡Ya alcanzaste tu objetivo!",
    atGoalBody: "Céntrate en mantener tu peso con una alimentación equilibrada y actividad regular.",
    tdee: "Tu TDEE (mantenimiento)",
    deficit: "Déficit diario necesario",
    target: "Calorías diarias objetivo",
    extraSteps: "Pasos extra que añadir",
    stepsHint: "para quemar el déficit caminando",
    calPerDay: "cal/día",
    stepsPerDay: "pasos/día",
    unsafe:
      "Aviso: este déficit supera {max} cal/día. Alarga el plazo para un resultado más seguro.",
    belowMin:
      "Aviso: tus calorías objetivo quedan por debajo del mínimo recomendado de {min} cal/día. Consulta a un profesional sanitario.",
    safe: "Es un déficit seguro y sostenible.",
  },
  info: {
    title: "¿Qué es un déficit calórico?",
    body: "Un déficit calórico aparece cuando consumes menos calorías de las que tu cuerpo quema. Con el tiempo, el organismo usa la grasa almacenada y bajas de peso. La clave es el déficit adecuado — suficiente para ver resultados, pero no tan grande que sea insostenible o poco saludable.",
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿De qué tamaño debe ser mi déficit calórico?",
      answer:
        "Un déficit de 500–750 calorías al día suele ser sostenible y supone unos 0,5–0,75 kg de grasa a la semana. Los déficits por encima de 1.000 cal/día no se recomiendan — pueden causar pérdida muscular, carencias y son difíciles de mantener.",
    },
    {
      question: "¿Cuánto se tarda en perder 1 kg?",
      answer:
        "Como 1 kg de grasa contiene unas 7.700 calorías, con un déficit de 500 cal/día tardas unos 15 días en perder 1 kg. A 1.000 cal/día, unos 8 días. Los resultados reales varían por la retención de líquidos, la ganancia muscular y la adaptación metabólica.",
    },
    {
      question: "¿Qué es el TDEE?",
      answer:
        "TDEE significa gasto energético diario total — las calorías que tu cuerpo quema al día, metabolismo basal (BMR) más toda la actividad física. Es tu nivel de « mantenimiento »: comer al nivel del TDEE no cambia el peso.",
    },
    {
      question: "¿Puedo adelgazar solo caminando?",
      answer:
        "¡Sí! Añadir 10.000 pasos extra al día quema unas 400 calorías más y por sí solo crea un déficit útil con el tiempo. Caminar es de bajo impacto, sostenible y se combina bien con una reducción moderada de la comida.",
    },
    {
      question: "¿Es seguro comer por debajo de 1.200 calorías?",
      answer:
        "En general, no. Ingestas muy bajas (por debajo de 1.200 en mujeres y de 1.500 en hombres) pueden provocar pérdida muscular, carencias, alteraciones hormonales y un metabolismo más lento. Si tu objetivo cae bajo esos umbrales, alarga el plazo o consulta a un profesional sanitario.",
    },
  ],
  cta: {
    title: "Sigue tu camino de salud",
    description: "Suma más pasos al día para ampliar tu déficit calórico de forma natural con la app Steps.",
  },
  howTo: {
    name: "Cómo calcular un déficit calórico para adelgazar",
    description:
      "Introduce tu TDEE (o tus datos) y el ritmo de pérdida que quieres por semana para obtener un objetivo de calorías al día.",
    steps: [
      {
        name: "Introduce tu TDEE o tus datos",
        text: "Pega un TDEE que ya conozcas o introduce edad, sexo, peso, altura y nivel de actividad.",
      },
      {
        name: "Elige tu ritmo de pérdida de peso",
        text: "De 0,25 a 1 kg por semana es el rango sostenible. Ritmos más altos aumentan el riesgo de perder músculo.",
      },
      {
        name: "Lee tu objetivo de calorías diarias",
        text: "La calculadora muestra las calorías diarias objetivo y el tamaño del déficit frente al mantenimiento.",
      },
    ],
  },
};

export default es;

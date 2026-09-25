import type { WalkingTimeCalculatorMessages } from "./en";

const es: WalkingTimeCalculatorMessages = {
  meta: {
    title: "Calculadora de tiempo caminando: 1 km ≈ 12 min, 1 milla ≈ 18 min",
    description:
      "¿Cuánto se tarda en caminar 1 km? ~12 min. ¿1 milla? ~18 min. ¿5 km? ~60 min. Calculadora gratis para cualquier distancia a ritmo lento, normal, vivo o rápido.",
    keywords: [
      "tiempo caminando",
      "calculadora de tiempo caminando",
      "cuánto se tarda en caminar 5 km",
      "tiempo para caminar 8 km",
      "cuánto se tarda en caminar una milla",
      "tiempo según la distancia",
      "calculadora de ritmo al caminar",
      "cuánto se tarda en caminar 10000 pasos",
      "calculadora de duración de caminata",
    ],
    ogTitle: "Calculadora de tiempo caminando: 1 km ≈ 12 min, 1 milla ≈ 18 min",
    ogDescription:
      "1 km ≈ 12 min, 1 milla ≈ 18 min, 5 km ≈ 60 min a ritmo normal. Calculadora gratis para cualquier distancia.",
    ogImageAlt: "Calculadora de tiempo caminando",
  },
  hero: {
    title: "Calculadora de tiempo caminando",
    subtitle:
      "¿Cuánto se tarda en caminar 5 km, 8 km o 28 millas? Introduce cualquier distancia y obtén estimaciones para ritmo lento, normal, vivo y rápido.",
  },
  resultCta: {
    headline: "Registra cada caminata automáticamente",
    description:
      "Steps anota tu tiempo, distancia y ritmo en segundo plano, para que veas cómo se suman tus caminatas reales.",
  },
  stickyCta: "Sigue tus pasos con Steps",
  calculator: {
    title: "Calcular el tiempo caminando",
    distance: "Distancia",
    miles: "millas",
    walkingSpeed: "Velocidad al caminar",
    speeds: {
      slow: { label: "Lento", description: "3,2 km/h", inline: "lento" },
      normal: { label: "Normal", description: "5,0 km/h", inline: "normal" },
      brisk: { label: "Vivo", description: "6,4 km/h", inline: "vivo" },
      fast: { label: "Rápido", description: "7,2 km/h", inline: "rápido" },
    },
    includeBreaks: "Incluir descansos (5 min cada 30 min)",
    walkingTime: "Tiempo caminando",
    breaksDetail: "{walking} caminando + {breaks} min de descanso",
    distanceLabel: "Distancia",
    stepsLabel: "Pasos",
    caloriesLabel: "Calorías",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "Tiempos de referencia",
    referenceSubtitle: "Tiempo para caminar distancias habituales a ritmo {pace} ({speed} km/h)",
    colDistance: "Distancia",
    colTime: "Tiempo",
    hoursMinutes: "{hours} h {minutes} min",
    hoursOnly: "{hours} h",
    minutesOnly: "{minutes} min",
    distances: ["1 km", "1 milla", "2 km", "3 km", "5 km", "5 millas", "10 km", "Media maratón"],
  },
  info: {
    title: "Guía de velocidades al caminar",
    intro:
      "La velocidad cambia según tu forma física, el terreno y el propósito. Entender los ritmos te ayuda a planificar las caminatas.",
    paceTitle: "Guía de ritmos",
    paces: [
      {
        label: "Lento (3,2 km/h / 2 mph):",
        text: "Un paseo tranquilo, adecuado para recuperarte o conversar",
      },
      {
        label: "Normal (5 km/h / 3,1 mph):",
        text: "Ritmo medio de la mayoría de los adultos",
      },
      {
        label: "Vivo (6,4 km/h / 4 mph):",
        text: "Caminata con intención que eleva la frecuencia cardíaca",
      },
      {
        label: "Rápido (7,2 km/h / 4,5 mph):",
        text: "Marcha rápida, al límite del trote",
      },
    ],
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Cuánto se tarda en caminar 1 km?",
      answer:
        "A ritmo normal (5 km/h), se tarda unos 12 minutos en caminar 1 km. A ritmo lento (3,2 km/h) son ~19 minutos, y a ritmo vivo (6,4 km/h) puedes terminarlo en unos 9 minutos. Eso son unos 1.300 pasos para un adulto medio.",
    },
    {
      question: "¿Cuánto se tarda en caminar 5 km?",
      answer:
        "A ritmo normal (5 km/h), se tarda unos 60 minutos en caminar 5 km. A ritmo vivo (6,4 km/h), puedes completarlos en unos 47 minutos.",
    },
    {
      question: "¿Cuánto se tarda en caminar 1 milla?",
      answer:
        "Una milla lleva unos 15-20 minutos a ritmo normal. Quien camina a buen ritmo puede hacerla en 12-15 minutos.",
    },
    {
      question: "¿Cuánto se tarda en caminar 10.000 pasos?",
      answer:
        "10.000 pasos equivalen a unos 7-8 km (4-5 millas). A ritmo normal, esto lleva alrededor de 1 hora y 20-40 minutos. No tienes que hacerlo de una vez: repártelo a lo largo del día.",
    },
    {
      question: "¿Cuánto se tarda en caminar 7 km?",
      answer:
        "A ritmo normal (5 km/h), se tarda unos 84 minutos (1 hora 24 min) en caminar 7 km. A ritmo vivo (6,4 km/h), puedes terminarlo en unos 66 minutos. Eso son unos 9.100 pasos para un adulto medio.",
    },
    {
      question: "¿Cuánto se tarda en caminar 8 km?",
      answer:
        "Caminar 8 km lleva unos 96 minutos (1 hora 36 min) a ritmo normal (5 km/h), o unos 75 minutos a ritmo vivo. Eso son aproximadamente 10.400 pasos.",
    },
    {
      question: "¿Debo incluir los descansos en el tiempo de caminata?",
      answer:
        "En caminatas de más de 30 minutos, los descansos cortos ayudan a mantener la energía y a evitar la fatiga. La calculadora puede añadir descansos de 5 minutos cada 30 minutos de caminata si activas esta opción.",
    },
  ],
  precomputedTitle: "Tiempos de caminata ya calculados",
  precomputed: [
    "Cuánto se tarda en caminar 10.000 pasos",
    "Cuánto se tarda en caminar 5 millas",
    "Cuánto se tarda en caminar 3 millas",
    "Cuánto se tarda en caminar 1 milla",
  ],
  allConversions: "Todas las conversiones →",
  cta: {
    title: "Registra tus caminatas automáticamente",
    description:
      "Descarga la app Steps para seguir automáticamente tu tiempo, distancia y ritmo al caminar.",
  },
  howTo: {
    name: "Cómo usar la calculadora de tiempo caminando",
    description:
      "Introduce una distancia y un ritmo para obtener el tiempo estimado en minutos: en kilómetros, millas o a partir de un número de pasos.",
    steps: [
      {
        name: "Introduce la distancia",
        text: "Escribe la distancia que piensas caminar. Puedes cambiar entre kilómetros y millas, o introducir un número de pasos.",
      },
      {
        name: "Elige un ritmo",
        text: "Elige lento (3,2 km/h), normal (5 km/h), vivo (6,4 km/h) o rápido (7,2 km/h). Normal es el valor por defecto para un adulto típico.",
      },
      {
        name: "Lee tu tiempo caminando",
        text: "La calculadora muestra los minutos estimados para cubrir la distancia en cada ritmo, más una estimación del total de pasos.",
      },
    ],
  },
};

export default es;

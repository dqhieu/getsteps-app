import type { TrainingPaceZonesMessages } from "./en";

const es: TrainingPaceZonesMessages = {
  meta: {
    title: "Calculadora de zonas de ritmo: zonas de entrenamiento según tu forma",
    description:
      "Calcula tus 5 zonas de ritmo a partir de un resultado reciente. Obtén los rangos exactos para rodajes suaves, tempo, umbral e intervalos de VO2 max.",
    keywords: [
      "zonas de ritmo de entrenamiento",
      "calculadora de zonas de ritmo",
      "zonas de carrera Jack Daniels",
      "calculadora de ritmo tempo",
      "calculadora de ritmo suave",
      "ritmo de intervalos",
      "calculadora de ritmo umbral",
    ],
    ogTitle: "Calculadora de zonas de ritmo: zonas de entrenamiento según tu forma",
    ogDescription:
      "Calcula tus 5 zonas de ritmo a partir de un resultado reciente. Obtén los rangos exactos para rodajes suaves, tempo, umbral e intervalos de VO2 max.",
    ogImageAlt: "Calculadora de zonas de ritmo",
  },
  hero: {
    title: "Calculadora de zonas de ritmo",
    subtitle: "Consigue zonas de entrenamiento personalizadas a partir de tu rendimiento reciente.",
  },
  intro:
    "Introduce un tiempo de carrera reciente para calcular tus 5 zonas de ritmo, desde el rodaje suave de recuperación hasta los intervalos intensos. Úsalas para estructurar el entrenamiento.",
  calculator: {
    distanceLabel: "Distancia de carrera",
    customDistanceLabel: "Distancia (km)",
    finishTimeLabel: "Tiempo de llegada",
    hour: "h",
    minute: "min",
    second: "s",
    invalidTime: "Introduce un tiempo de carrera válido.",
    invalidDistance: "Introduce una distancia válida.",
    calculate: "Calcular las zonas",
    footnote:
      "Un resultado reciente al esfuerzo de carrera da las zonas más precisas. Las zonas cambian con tu forma: vuelve a calcular después de las carreras importantes.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Media maratón",
      marathon: "Maratón",
      custom: "Personalizada",
    },
    zones: {
      easy: {
        name: "Suave / Recuperación",
        description: "Esfuerzo muy ligero. Puedes conversar del todo. Construye la base aeróbica y ayuda a recuperar.",
        usage: "~80 % de todas las salidas",
      },
      aerobic: {
        name: "Base aeróbica",
        description: "Ritmo cómodo y sostenible. Respiración elevada pero estable. Zona principal de la tirada larga.",
        usage: "Tirada larga semanal",
      },
      tempo: {
        name: "Tempo",
        description: "Cómodamente duro. Respiración trabajosa. Rodajes progresivos y trabajo a ritmo de maratón.",
        usage: "Rodajes progresivos",
      },
      threshold: {
        name: "Umbral",
        description: "Esfuerzo duro y sostenido. Ritmo de umbral de lactato. Rodajes de 20-40 min.",
        usage: "Rodajes a tempo (20-40 min)",
      },
      interval: {
        name: "Intervalo / VO2",
        description: "Esfuerzo cerca del máximo. Intervalos cortos (400 m-1600 m). Desarrolla el VO2 max y la velocidad.",
        usage: "Intervalos en pista",
      },
    },
  },
  faqTitle: "Entender las zonas de ritmo",
  faq: [
    {
      question: "¿Qué son las zonas de ritmo de entrenamiento?",
      answer:
        "Las zonas de ritmo son rangos que trabajan sistemas energéticos distintos. Cada zona produce adaptaciones diferentes: las zonas suaves construyen la base aeróbica y la densidad mitocondrial, y las más duras desarrollan el umbral de lactato y el VO2 max. Correr a la intensidad adecuada en cada sesión —en lugar de ir siempre moderadamente fuerte— es uno de los principios más importantes del entrenamiento de resistencia.",
    },
    {
      question: "¿Cuántas zonas de ritmo hay?",
      answer:
        "La mayoría de los sistemas usan 5 zonas, aunque algunos entrenadores prefieren 3 (suave, moderado, duro) o 7 (como en Garmin y Polar). El modelo de 5 zonas —Suave, Aeróbica, Tempo, Umbral e Intervalo de VO2— es el más práctico para corredores recreativos y de competición. Se alinea con el marco VDOT de Jack Daniels y cuenta con apoyo de la ciencia del deporte.",
    },
    {
      question: "¿A qué ritmo deben ir mis rodajes suaves?",
      answer:
        "Los rodajes suaves (zonas 1–2) deben sentirse de verdad cómodos: tienes que poder mantener una conversación completa sin jadear. Suelen ir 60–90 segundos por kilómetro más lentos que tu ritmo de 5 km. Muchos corren los días suaves demasiado fuerte y acumulan fatiga que estropea las sesiones de calidad. El suave de verdad es más lento de lo que la mayoría cree, y ahí ocurre la mayor parte de las adaptaciones aeróbicas.",
    },
    {
      question: "¿Con qué frecuencia correr en cada zona?",
      answer:
        "La regla 80/20, respaldada por investigación con fondistas de élite, recomienda cerca del 80 % del volumen en las zonas 1–2 y el 20 % en las zonas 3–5. Este enfoque polarizado rinde más que entrenar la mayor parte del tiempo a intensidad moderada. Una semana típica puede incluir 3–4 rodajes suaves, una tirada larga, una sesión a tempo (zona 4) y una de intervalos (zona 5), en las zonas correctas, no solo “fuerte”.",
    },
    {
      question: "¿Cómo mejoro mi ritmo de umbral?",
      answer:
        "El ritmo de umbral de lactato (zona 4) mejora sobre todo con un rodaje semanal de 20–40 minutos a un esfuerzo cómodamente duro: el ritmo que podrías sostener cerca de una hora en carrera. A medida que el cuerpo se adapta, aclara el lactato con más eficacia y corres más rápido antes de acumular fatiga. Una sesión de umbral por semana durante 8–12 semanas suele mejorar los tiempos de 10 km y media maratón.",
    },
  ],
  cta: {
    title: "Sigue tus carreras y tus pasos diarios",
    description: "Sigue tus carreras y tus pasos diarios juntos en la app Steps.",
  },
  howTo: {
    name: "Cómo obtener tus zonas de ritmo de entrenamiento",
    description:
      "Introduce una distancia y un tiempo de carrera recientes para obtener 5 zonas de ritmo personalizadas para rodajes suaves, tempo, umbral e intervalos.",
    steps: [
      {
        name: "Introduce un resultado reciente",
        text: "Un tiempo exigente de 5 km, 10 km o media maratón.",
      },
      {
        name: "Lee tus 5 zonas",
        text: "La calculadora devuelve los ritmos de recuperación, resistencia, tempo, umbral e intervalos en min/km y min/mile.",
      },
    ],
  },
};

export default es;

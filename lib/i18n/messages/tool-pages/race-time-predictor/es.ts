import type { RaceTimePredictorMessages } from "./en";

const es: RaceTimePredictorMessages = {
  meta: {
    title: "Predictor de tiempo de carrera: 5 km, 10 km, media y maratón",
    description:
      "Predictor gratuito: introduce tu ritmo para obtener el tiempo de llegada, o fija un tiempo objetivo para encontrar el ritmo que necesitas. Resultados al instante en 5 km, 10 km, media maratón y maratón.",
    keywords: [
      "predictor de tiempo de carrera",
      "calculadora de tiempo de llegada",
      "qué ritmo para una media maratón por debajo de 2 horas",
      "calculadora de tiempo de 5 km",
      "calculadora de ritmo de maratón",
      "calculadora de tiempo objetivo",
    ],
    ogTitle: "Predictor de tiempo de carrera: 5 km, 10 km, media y maratón",
    ogDescription:
      "Predictor gratuito: introduce tu ritmo para obtener el tiempo de llegada, o fija un tiempo objetivo para encontrar el ritmo que necesitas. Resultados al instante en 5 km, 10 km, media maratón y maratón.",
    ogImageAlt: "Predictor de tiempo de carrera",
  },
  hero: {
    title: "Predictor de tiempo de carrera",
    subtitle:
      "Calcula tu tiempo de llegada a partir del ritmo que buscas, o encuentra el ritmo exacto para tu tiempo objetivo.",
  },
  intro:
    "Introduce la distancia y tu ritmo objetivo o el tiempo de llegada. Mira al instante el tiempo previsto o el ritmo por kilómetro necesario, más parciales de 5 km para dosificar la carrera.",
  calculator: {
    title: "Ajustes de carrera",
    distanceLabel: "Distancia de carrera",
    customPlaceholder: "Distancia en km",
    modeLabel: "¿Qué quieres calcular?",
    finishTimeMode: "Tiempo de llegada",
    requiredPaceMode: "Ritmo necesario",
    paceLabel: "Tu ritmo (min/km, p. ej. 5:30)",
    goalLabel: "Tiempo objetivo (H:MM:SS o MM:SS)",
    calculate: "Calcular",
    predictedFinish: "Tiempo de llegada previsto",
    requiredPaceResult: "Ritmo necesario",
    pacePerKm: "Ritmo /km",
    pacePerMi: "Ritmo /mi",
    speedKmh: "Velocidad km/h",
    speedMph: "Velocidad mph",
    splitsTitle: "Parciales de 5 km",
    markerColumn: "Marca",
    cumulativeColumn: "Tiempo acumulado",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Media maratón",
      marathon: "Maratón",
      custom: "Personalizada",
    },
  },
  faqTitle: "Preguntas sobre el ritmo de carrera",
  faq: [
    {
      question: "¿Qué ritmo necesito para una media maratón por debajo de 2 horas?",
      answer:
        "Necesitas mantener 5:41/km (9:09/mile), unos 10,6 km/h. Usa la calculadora de arriba, elige «Ritmo necesario», selecciona Media maratón e introduce 2:00:00 como tiempo objetivo.",
    },
    {
      question: "¿Qué ritmo necesito para un 5 km en 25 minutos?",
      answer:
        "Un 5 km en 25 minutos exige un ritmo de 5:00/km (8:03/mile). Es un objetivo intermedio sólido: la mayoría de quienes empiezan parten alrededor de 6:30–7:00/km y bajan desde ahí.",
    },
    {
      question: "¿Cómo uso los parciales en una carrera?",
      answer:
        "Corre parciales iguales (el mismo ritmo cada 5 km) para un rendimiento predecible. Los parciales negativos —la segunda mitad más rápida que la primera— son lo ideal y lo que buscan los corredores de élite. Evita salir demasiado rápido en el primer kilómetro.",
    },
    {
      question: "¿Cuál es un buen tiempo de 10 km?",
      answer:
        "Principiante: 60–70 min; intermedio: 50–60 min; avanzado: 40–50 min; élite: por debajo de 35 min. El récord mundial está por debajo de 27 minutos. La mayoría de los corredores recreativos termina entre 50 y 65 minutos.",
    },
    {
      question: "¿Cómo dosifico el ritmo en una media maratón?",
      answer:
        "Sal al ritmo objetivo los primeros 10 km y empuja los 11 km finales si te sientes fuerte. Evita correr más rápido que el ritmo objetivo al principio: la segunda mitad se siente mucho más dura que la primera, sea cual sea el ritmo.",
    },
  ],
  cta: {
    title: "Sigue tus pasos de entrenamiento cada día en la app Steps.",
    description: "Registra cada carrera, sigue tus parciales y cumple tus objetivos con la app Steps.",
  },
  howTo: {
    name: "Cómo predecir un tiempo de llegada",
    description: "Introduce la distancia y un ritmo o un tiempo objetivo para obtener el valor que falta.",
    steps: [
      {
        name: "Introduce la distancia de carrera",
        text: "Elige una carrera habitual (5 km, 10 km, media maratón, maratón) o una distancia personalizada.",
      },
      {
        name: "Introduce el ritmo o el tiempo objetivo",
        text: "Basta con uno de los dos: la calculadora completa el otro.",
      },
      {
        name: "Lee el tiempo previsto o el ritmo necesario",
        text: "El resultado muestra el tiempo de llegada previsto y los parciales de las distancias de carrera habituales.",
      },
    ],
  },
};

export default es;

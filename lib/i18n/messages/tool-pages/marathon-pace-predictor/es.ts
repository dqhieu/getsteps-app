import type { MarathonPacePredictorMessages } from "./en";

const es: MarathonPacePredictorMessages = {
  meta: {
    title: "Predictor de maratón: estima tu tiempo a partir de cualquier resultado",
    description:
      "¿Corriste un 5 km o un 10 km? Predice al instante tus tiempos de maratón y media maratón con la fórmula de Riegel. Calculadora gratis con tablas de ritmo y consejos.",
    keywords: [
      "predictor de maratón",
      "predictor de tiempo de carrera",
      "calculadora de tiempo de maratón",
      "predictor de media maratón",
      "calculadora de la fórmula de Riegel",
      "predecir tiempo de maratón",
      "convertir un 5 km en tiempo de maratón",
    ],
    ogTitle: "Predictor de maratón: estima tu tiempo a partir de cualquier resultado",
    ogDescription:
      "¿Corriste un 5 km o un 10 km? Predice al instante tus tiempos de maratón y media maratón con la fórmula de Riegel.",
    ogImageAlt: "Predictor de maratón",
  },
  hero: {
    title: "Predictor de maratón",
    subtitle: "Introduce un resultado reciente para predecir tus tiempos en todas las distancias estándar.",
  },
  intro:
    "Introduce un tiempo y una distancia recientes para predecir al instante tus tiempos de 5 km, 10 km, media maratón y maratón con la fórmula de Riegel, la referencia para predecir tiempos de carrera.",
  calculator: {
    distanceLabel: "Tu distancia de carrera",
    customDistanceLabel: "Distancia (km)",
    finishTimeLabel: "Tu tiempo de llegada",
    hour: "h",
    minute: "min",
    second: "s",
    invalidDistance: "Introduce una distancia válida.",
    invalidTime: "Introduce un tiempo válido.",
    predict: "Predecir los tiempos",
    resultsTitle: "Tiempos de llegada previstos",
    distanceColumn: "Distancia",
    timeColumn: "Tiempo",
    paceKmColumn: "Ritmo (km)",
    paceMileColumn: "Ritmo (mi)",
    speedColumn: "Velocidad",
    you: "tú",
    footnote:
      "Las predicciones usan la fórmula de Riegel (factor de fatiga 1,06). Son más fiables con carreras recientes a un esfuerzo parecido.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Media maratón",
      marathon: "Maratón",
      custom: "Personalizada (km)",
    },
  },
  info: {
    title: "Sobre la predicción de tiempos de carrera",
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Qué precisión tiene la fórmula de Riegel?",
      answer:
        "La fórmula de Riegel acierta dentro de un ±5–10 % en corredores bien entrenados que predicen entre distancias parecidas. La precisión baja con saltos grandes de distancia (p. ej., de 5 km a maratón) o si la carrera introducida no se corrió al máximo.",
    },
    {
      question: "¿Qué es la fórmula de Riegel?",
      answer:
        "T2 = T1 × (D2/D1)^1,06, donde T1 es tu tiempo conocido, D1 la distancia conocida, D2 la distancia objetivo y T2 el tiempo previsto. El exponente 1,06 recoge el aumento de la fatiga en distancias largas.",
    },
    {
      question: "¿Puedo predecir un maratón a partir de un 5 km?",
      answer:
        "Sí, pero la predicción será menos precisa. La fórmula funciona mejor cuando la carrera de partida está cerca de la distancia objetivo. Para un maratón, un 10 km o una media maratón recientes dan la estimación más fiable.",
    },
    {
      question: "¿Cuál es un buen tiempo de maratón?",
      answer:
        "Principiante: 4:30–5:30 | intermedio: 3:30–4:30 | avanzado: por debajo de 3:30 | élite: por debajo de 2:30. El tiempo medio de maratón ronda 4:30 en hombres y 4:55 en mujeres.",
    },
    {
      question: "¿Cómo lo uso para dosificar el ritmo?",
      answer:
        "Usa la columna de ritmo de la distancia objetivo para la estrategia por kilómetro. Si tu ritmo de maratón previsto es 5:30/km, apunta un poco más lento en la primera mitad (5:35/km) y un parcial negativo en la segunda.",
    },
  ],
  cta: {
    title: "Entrena mejor con Steps: Workout & Pedometer",
    description:
      "Entrena mejor siguiendo tus pasos y tu actividad diarios en la app Steps: Workout & Pedometer.",
  },
  howTo: {
    name: "Cómo predecir tu tiempo de maratón",
    description:
      "Introduce una distancia y un tiempo de carrera recientes para predecir tu tiempo en maratón (y en 5 km, 10 km y media).",
    steps: [
      {
        name: "Introduce una distancia y un tiempo conocidos",
        text: "Usa un esfuerzo reciente y duro: 5 km, 10 km, media maratón o cualquier distancia que hayas corrido hace poco.",
      },
      {
        name: "Lee tus tiempos previstos",
        text: "Con la fórmula de Riegel, la calculadora predice tus tiempos de 5 km, 10 km, media maratón y maratón.",
      },
    ],
  },
};

export default es;

import type { RunningPaceCalculatorMessages } from "./en";

const es: RunningPaceCalculatorMessages = {
  meta: {
    title: "Calculadora de ritmo: convierte ritmo, velocidad y tiempos de carrera",
    description:
      "Calcula tu ritmo en min/km o min/mile, convierte entre ritmo y velocidad y predice los tiempos de 5 km, 10 km, media maratón y maratón.",
    keywords: [
      "calculadora de ritmo",
      "calcular ritmo de carrera",
      "calculadora min por km",
      "calculadora min por milla",
      "predictor de tiempo de carrera",
      "calculadora de velocidad de carrera",
      "calculadora de ritmo de 5 km",
    ],
    ogTitle: "Calculadora de ritmo: convierte ritmo, velocidad y tiempos de carrera",
    ogDescription:
      "Calcula tu ritmo en min/km o min/mile, convierte entre ritmo y velocidad y predice los tiempos de 5 km, 10 km, media maratón y maratón.",
    ogImageAlt: "Calculadora de ritmo de carrera",
  },
  hero: {
    title: "Calculadora de ritmo de carrera",
    subtitle:
      "Convierte entre ritmo, velocidad y tiempo de llegada. Sirve para cualquier distancia, de 5 km a maratón.",
  },
  intro:
    "Introduce tu ritmo, tu velocidad o el tiempo y la distancia para convertir al instante todas las medidas de carrera y predecir tu tiempo de llegada, de 5 km a maratón.",
  calculator: {
    title: "Calcular el ritmo",
    tabs: {
      pace: "Ritmo",
      speed: "Velocidad",
      timeDistance: "Tiempo + distancia",
    },
    paceLabel: "Ritmo (MM:SS)",
    paceHint: "Introduce el ritmo en formato minutos:segundos (p. ej., 5:30)",
    speedLabel: "Velocidad",
    distanceLabel: "Distancia",
    finishTimeLabel: "Tiempo de llegada (MM:SS o H:MM:SS)",
    statsTitle: "Tus datos de carrera",
    pacePerKm: "Ritmo /km",
    pacePerMi: "Ritmo /mi",
    speedKmh: "Velocidad km/h",
    speedMph: "Velocidad mph",
    predictionsTitle: "Tiempos de llegada previstos",
    distanceColumn: "Distancia",
    finishTimeColumn: "Tiempo de llegada",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Media maratón",
      marathon: "Maratón",
    },
  },
  faqTitle: "Entender el ritmo de carrera",
  faq: [
    {
      question: "¿Qué es un buen ritmo de carrera?",
      answer:
        "Depende de tu nivel. Quienes empiezan suelen correr a 7–9 min/km (11–14 min/mile). Los corredores intermedios promedian 5–7 min/km (8–11 min/mile). Los avanzados se mantienen por debajo de 5 min/km (por debajo de 8 min/mile). Los maratonianos de élite sostienen ritmos por debajo de 3:00/km. El mejor ritmo es el que te deja terminar exigido, pero no completamente agotado.",
    },
    {
      question: "¿Cómo convierto min/km a min/mile?",
      answer:
        "Multiplica tu ritmo en min/km por 1,60934 para obtener min/mile. Por ejemplo, 5:00/km equivale a 5:00 × 1,60934 = 8:03/mile. A la inversa, divide tu ritmo en min/mile por 1,60934. Esta calculadora hace la conversión sola cuando cambias de unidad.",
    },
    {
      question: "¿Qué ritmo necesito para una media maratón por debajo de 2 horas?",
      answer:
        "Para terminar una media maratón (21,0975 km) en menos de 2 horas necesitas mantener un ritmo más rápido que 5:41/km (9:09/mile), unos 10,6 km/h (6,6 mph). Es un objetivo intermedio habitual: construye primero la base corriendo de forma constante a 6:00–6:30/km antes de buscar la barrera de las 2 horas.",
    },
    {
      question: "¿Cuál es el ritmo medio de carrera?",
      answer:
        "La mayoría de los corredores recreativos corren a 6–8 min/km (10–13 min/mile). El tiempo medio de un 5 km ronda los 28–35 minutos, es decir, un ritmo de 5:30–7:00/km. En media maratón los tiempos medios se agrupan en torno a 2:00–2:20, y en maratón en torno a 4:20–4:45. La edad, la forma y el terreno cambian mucho estas cifras.",
    },
    {
      question: "¿Cómo puedo mejorar mi ritmo?",
      answer:
        "Combina tres tipos de entrenamiento: series (tramos cortos más rápidos que el ritmo de carrera, con recuperación), tiradas largas suaves (base aeróbica a ritmo de conversación) y rodajes a tempo (esfuerzo sostenido, cómodamente duro). Añade fuerza 1–2 veces por semana para prevenir lesiones. Lo que más importa es la constancia: corre al menos 3 veces por semana y no aumentes el kilometraje semanal más de un 10 %.",
    },
  ],
  cta: {
    title: "Sigue tu camino de salud",
    description: "Sigue tus carreras y tus pasos diarios juntos en la app Steps.",
  },
  howTo: {
    name: "Cómo usar la calculadora de ritmo",
    description:
      "Convierte entre ritmo, velocidad y tiempo: introduce dos valores entre distancia, ritmo y tiempo de llegada, y la calculadora completa el tercero.",
    steps: [
      {
        name: "Elige la incógnita",
        text: "Decide si quieres el ritmo, el tiempo o la distancia. Tú aportas los otros dos valores.",
      },
      {
        name: "Introduce los dos valores conocidos",
        text: "Distancia y tiempo dan el ritmo, ritmo y distancia dan el tiempo de llegada, etc. Admite minutos por km y minutos por milla.",
      },
      {
        name: "Lee el resultado",
        text: "La calculadora devuelve el tercer valor en unidades métricas e imperiales, más una tabla de ritmos comparada con las distancias de carrera habituales.",
      },
    ],
  },
};

export default es;

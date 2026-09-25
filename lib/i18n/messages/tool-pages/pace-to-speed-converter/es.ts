import type { PaceToSpeedConverterMessages } from "./en";

const es: PaceToSpeedConverterMessages = {
  meta: {
    title: "Conversor de ritmo a velocidad — min/km, min/mile, km/h, mph",
    description:
      "Convierte al instante el ritmo de carrera en velocidad y al revés. Pasa de min/km a km/h, de min/mile a mph y mira tus tiempos de 5 km y 10 km a cualquier ritmo.",
    keywords: [
      "conversor de ritmo a velocidad",
      "min por km a km/h",
      "calculadora de ritmo",
      "convertir ritmo a velocidad",
      "min/km a mph",
      "conversor de velocidad de carrera",
      "conversor de ritmo",
    ],
    ogTitle: "Conversor de ritmo a velocidad — min/km, min/mile, km/h, mph",
    ogDescription:
      "Convierte al instante el ritmo de carrera en velocidad y al revés. Pasa de min/km a km/h, de min/mile a mph y mira tus tiempos de 5 km y 10 km a cualquier ritmo.",
    ogImageAlt: "Conversor de ritmo a velocidad",
  },
  hero: {
    title: "Conversor de ritmo a velocidad",
    subtitle: "Convierte al instante entre ritmo de carrera (min/km, min/mile) y velocidad (km/h, mph).",
  },
  intro:
    "Escribe cualquier ritmo o velocidad y el resto de unidades se actualiza al instante. Mira tus tiempos estimados de 5 km y 10 km y cuánto correrías en 30 o 60 minutos.",
  calculator: {
    title: "Introduce cualquier valor para convertir",
    paceKm: "Ritmo (min/km)",
    paceMile: "Ritmo (min/mile)",
    speedKmh: "Velocidad (km/h)",
    speedMph: "Velocidad (mph)",
    distanceTitle: "Distancia recorrida",
    min30: "30 min",
    min60: "60 min",
    raceTitle: "Tiempos de llegada",
    referenceTitle: "Ritmos de referencia",
    activityColumn: "Actividad",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "Pulsa una fila para cargar ese ritmo",
    races: {
      "5k": "5 km",
      "10k": "10 km",
    },
    activities: {
      walking: "Caminar",
      jogging: "Trote",
      running: "Carrera",
      fast: "Carrera rápida",
      sprint: "Sprint",
    },
  },
  faqTitle: "Preguntas sobre ritmo y velocidad",
  faq: [
    {
      question: "¿Cómo convierto min/km a km/h?",
      answer:
        "Divide 60 entre tu ritmo en min/km. Por ejemplo, un ritmo de 5:00/km da 60 ÷ 5 = 12 km/h. Un ritmo más lento de 6:00/km da 60 ÷ 6 = 10 km/h.",
    },
    {
      question: "¿Qué es un buen ritmo en km/h?",
      answer:
        "Trote suave: 7–9 km/h; carrera moderada: 9–12 km/h; carrera rápida: 12–16 km/h; ritmo de maratón de élite: 18+ km/h. La mayoría de los corredores recreativos está entre 8 y 11 km/h.",
    },
    {
      question: "¿Cómo convierto min/km a min/mile?",
      answer:
        "Multiplica tu ritmo en min/km por 1,60934 para obtener min/mile. Por ejemplo, 5:00/km × 1,60934 = 8:03/mile. Este conversor lo hace automáticamente.",
    },
    {
      question: "¿Qué velocidad es un 5 km en 30 minutos?",
      answer:
        "Un 5 km en 30 minutos exige un ritmo de 6:00/km, que equivale a 10,0 km/h o 6,2 mph. Es un ritmo recreativo sólido.",
    },
    {
      question: "¿Cuál es la diferencia entre ritmo y velocidad?",
      answer:
        "El ritmo es el tiempo por unidad de distancia (p. ej., min/km): cuanto más bajo, más rápido. La velocidad es la distancia por unidad de tiempo (p. ej., km/h): cuanto más alta, más rápido. Es lo mismo, con unidades invertidas.",
    },
  ],
  cta: {
    title: "Sigue tus carreras y tus pasos en la app Steps.",
    description: "Controla tu ritmo, tu distancia y tu recuento diario de pasos, todo en un solo lugar.",
  },
  howTo: {
    name: "Cómo convertir el ritmo de carrera en velocidad (o la velocidad en ritmo)",
    description:
      "Introduce cualquier valor — minutos por kilómetro, minutos por milla, km/h o mph — y obtén los demás.",
    steps: [
      {
        name: "Elige la unidad que conoces",
        text: "Selecciona la unidad de la que tienes un valor (por ejemplo, min/km).",
      },
      {
        name: "Introduce el valor",
        text: "Escribe el ritmo o la velocidad.",
      },
      {
        name: "Lee las conversiones",
        text: "Las cuatro unidades se actualizan juntas: min/km, min/mile, km/h, mph.",
      },
    ],
  },
};

export default es;

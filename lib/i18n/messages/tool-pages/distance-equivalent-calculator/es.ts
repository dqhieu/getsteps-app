import type { DistanceEquivalentCalculatorMessages } from "./en";

const es: DistanceEquivalentCalculatorMessages = {
  meta: {
    title: "Conversor de distancia – km, millas, metros, pasos",
    description:
      "Convierte una distancia de carrera entre kilómetros, millas, metros y yardas. Mira los pasos equivalentes, el tiempo estimado y las calorías al caminar, trotar o correr.",
    keywords: [
      "conversor de distancia",
      "km a millas",
      "cuántos pasos tiene una milla",
      "equivalencia de distancias",
      "metros a millas",
      "calculadora distancia running",
      "km a millas running",
    ],
    ogTitle: "Conversor de distancia – km, millas, metros, pasos",
    ogDescription:
      "Convierte una distancia de carrera entre kilómetros, millas, metros y yardas. Mira los pasos equivalentes, el tiempo estimado y las calorías al caminar, trotar o correr.",
    ogImageAlt: "Conversor de distancia",
  },
  hero: {
    title: "Conversor de equivalencias de distancia",
    subtitle:
      "Convierte cualquier distancia entre km, millas, metros y yardas — y mira pasos, tiempo y calorías equivalentes.",
  },
  intro:
    "Introduce una distancia en kilómetros, millas, metros o yardas y verás al momento todas las equivalencias. Incluye pasos estimados, tiempo para cubrirla caminando o corriendo y calorías aproximadas.",
  calculator: {
    enterDistance: "Introduce la distancia",
    placeholder: "5",
    units: {
      km: "km",
      miles: "millas",
      meters: "metros",
      yards: "yardas",
    },
    quick: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Media maratón",
      marathon: "Maratón",
    },
    equivalents: "Equivalencias",
    kilometers: "Kilómetros",
    miles: "Millas",
    meters: "Metros",
    yards: "Yardas",
    feet: "Pies",
    approxSteps: "Pasos aprox.",
    context: "En carrera",
    activity: "Actividad",
    speed: "Velocidad",
    time: "Tiempo",
    calories: "Calorías",
    activities: {
      walking: "Caminar",
      jogging: "Trote",
      running: "Correr",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "Calorías estimadas para una persona de 70 kg",
  },
  faqTitle: "Preguntas sobre conversión de distancias",
  faq: [
    {
      question: "¿Cuántos km son una milla?",
      answer:
        "1 milla = 1,60934 km. Al revés, 1 km = 0,62137 millas. Una carrera de 5 millas son unos 8,05 km, y un 10 km son unas 6,21 millas.",
    },
    {
      question: "¿Cuántos pasos son 1 milla?",
      answer:
        "Unos 2.000–2.500 pasos, según tu altura y la longitud de la zancada. La media ronda los 2.112 pasos por milla (1.312 pasos por km). Quien es más alto y da zancadas más largas da menos pasos.",
    },
    {
      question: "¿Cuántos km son un maratón?",
      answer:
        "Un maratón son exactamente 42,195 km (26,219 millas). Una media maratón son 21,0975 km (13,109 millas). Esas distancias las fija World Athletics.",
    },
    {
      question: "¿Cuántos pasos son 5 km?",
      answer:
        "Unos 6.250–7.500 pasos para la mayoría. Con una zancada media de 1.312 pasos/km, un 5 km son unos 6.560 pasos. Cambia con la altura, la forma de andar y el terreno.",
    },
    {
      question: "¿Cuánto se tarda en caminar 1 milla?",
      answer:
        "A un ritmo medio de 5 km/h, unos 12 minutos por milla. A paso ligero de 6 km/h, unos 10 minutos. Quien camina en forma puede bajar de 9 minutos.",
    },
  ],
  cta: {
    title: "Mira exactamente cuánto has caminado hoy en la app Steps.",
    description: "Cada paso, cada kilómetro y cada caloría quemada — de forma automática.",
  },
  howTo: {
    name: "Cómo convertir unidades de distancia",
    description:
      "Introduce una distancia en cualquier unidad (km, millas, metros, yardas, pasos) para ver todas las equivalencias, más el tiempo caminando y las calorías.",
    steps: [
      {
        name: "Elige la unidad de origen",
        text: "Kilómetros, millas, metros, yardas, pies o pasos — cualquier unidad vale como entrada.",
      },
      {
        name: "Introduce la distancia",
        text: "Escribe la distancia.",
      },
      {
        name: "Lee todas las equivalencias",
        text: "La calculadora devuelve cada unidad, más el tiempo caminando y las calorías estimadas para alguien de peso y ritmo medios.",
      },
    ],
  },
};

export default es;

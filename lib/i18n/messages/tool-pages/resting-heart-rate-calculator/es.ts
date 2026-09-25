import type { RestingHeartRateCalculatorMessages } from "./en";

const es: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "Calculadora de frecuencia cardíaca en reposo: forma y zonas de Karvonen",
    description:
      "Calcula tu nivel de forma a partir de la frecuencia cardíaca en reposo y tus zonas de entrenamiento de Karvonen personalizadas. Introduce tu edad y la medición para un resultado al instante.",
    keywords: [
      "calculadora frecuencia cardíaca en reposo",
      "frecuencia cardíaca en reposo por edad",
      "cuál es una buena frecuencia cardíaca en reposo",
      "calculadora reserva de frecuencia cardíaca",
      "fórmula de Karvonen",
      "nivel de forma frecuencia cardíaca en reposo",
    ],
    ogTitle: "Calculadora de frecuencia cardíaca en reposo: forma y zonas de Karvonen",
    ogDescription:
      "Calcula tu nivel de forma a partir de la frecuencia cardíaca en reposo y tus zonas de entrenamiento de Karvonen personalizadas. Introduce tu edad y la medición para un resultado al instante.",
    ogImageAlt: "Calculadora de frecuencia cardíaca en reposo",
  },
  hero: {
    title: "Calculadora de frecuencia cardíaca en reposo",
    subtitle:
      "Comprueba tu nivel de forma cardiovascular y obtén zonas de entrenamiento personalizadas según tu reserva de frecuencia cardíaca.",
  },
  intro:
    "Introduce tu edad, sexo y frecuencia cardíaca en reposo medida para ver tu categoría de forma y calcular zonas de Karvonen orientadas a la quema de grasa, la resistencia aeróbica y el rendimiento máximo.",
  calculator: {
    yourDetails: "Tus datos",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    years: { one: "año", other: "años" },
    restingHeartRate: "Frecuencia cardíaca en reposo",
    bpm: "bpm",
    rhrHint:
      "Consejo: mídela por la mañana antes de levantarte. Siéntate en silencio 5 min y cuenta los latidos durante 60 s.",
    calculate: "Calcular",
    fitnessLevel: "Tu nivel de forma",
    hrMax: "FCmáx",
    hrr: "RFC",
    zonesTitle: "Zonas de entrenamiento de Karvonen",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "Atleta",
      excellent: "Excelente",
      good: "Bueno",
      above_average: "Por encima de la media",
      average: "Promedio",
      below_average: "Por debajo de la media",
      poor: "Bajo",
    },
    zones: {
      activeRecovery: { name: "Recuperación activa", purpose: "Recuperación" },
      fatBurn: { name: "Quema de grasa", purpose: "Grasa" },
      aerobicEndurance: { name: "Resistencia aeróbica", purpose: "Aeróbico" },
      lactateThreshold: { name: "Umbral de lactato", purpose: "Umbral" },
      vo2Max: { name: "VO2 máx", purpose: "VO2 máx" },
    },
  },
  info: {
    title: "Preguntas sobre la frecuencia cardíaca en reposo",
  },
  faq: [
    {
      question: "¿Cuál es una frecuencia cardíaca en reposo normal?",
      answer:
        "En la mayoría de los adultos, una frecuencia cardíaca en reposo normal está entre 60 y 100 latidos por minuto (bpm). Los atletas entrenados suelen tener una frecuencia cardíaca en reposo de 40–60 bpm porque su corazón es más fuerte y bombea más sangre en cada latido. Los valores por debajo de 60 bpm (bradicardia) pueden ser normales en personas en forma, pero deben valorarse con un médico si hay síntomas.",
    },
    {
      question: "¿Cómo mido mi frecuencia cardíaca en reposo?",
      answer:
        "Mide tu frecuencia cardíaca en reposo por la mañana, antes de levantarte. Quédate quieto 5 minutos, coloca dos dedos en la muñeca (arteria radial) o el cuello (arteria carótida) y cuenta los latidos durante 60 segundos. Evita medir después del café, el ejercicio o el estrés. La media de tres mañanas seguidas da la lectura más precisa.",
    },
    {
      question: "¿La frecuencia cardíaca en reposo mejora con la forma física?",
      answer:
        "Sí. El ejercicio cardiovascular regular fortalece el músculo cardíaco y le permite bombear más sangre en cada latido. Ese mayor volumen sistólico hace que el corazón necesite latir menos veces por minuto para entregar la misma cantidad de sangre. El entrenamiento aeróbico constante suele bajar la frecuencia cardíaca en reposo entre 5 y 25 bpm en varios meses, según tu nivel de partida.",
    },
    {
      question: "¿Cuál es la diferencia entre la frecuencia cardíaca en reposo y la máxima?",
      answer:
        "La frecuencia cardíaca en reposo es el número de latidos por minuto en reposo completo. La frecuencia cardíaca máxima (FCmáx) es el mayor número de latidos por minuto que el corazón puede alcanzar en un esfuerzo máximo, estimada como 220 menos tu edad. La reserva de frecuencia cardíaca (RFC) es la diferencia entre ambas y representa el rango en el que el corazón puede trabajar durante el ejercicio. El método de Karvonen usa la RFC para calcular zonas de entrenamiento personalizadas.",
    },
    {
      question: "¿Cómo puedo bajar mi frecuencia cardíaca en reposo?",
      answer:
        "La forma más eficaz es el ejercicio aeróbico regular: busca 3–5 sesiones por semana de cardio sostenido de intensidad moderada, como caminar, trotar, ir en bici o nadar. Dormir lo suficiente (7–9 horas), gestionar el estrés (meditación, respiración profunda), limitar la cafeína y el alcohol y mantener un peso saludable también ayudan a una frecuencia cardíaca en reposo más baja. Las mejoras suelen notarse en 4–8 semanas de entrenamiento constante.",
    },
  ],
  cta: {
    title: "Mejora tu salud cardíaca",
    description: "Registra tus pasos diarios para mejorar tu salud cardiovascular con el tiempo.",
  },
  howTo: {
    name: "Cómo comprobar tu categoría de forma según la frecuencia cardíaca en reposo",
    description:
      "Introduce la edad y la frecuencia cardíaca en reposo para ver tu nivel de forma cardiovascular y las zonas de entrenamiento de Karvonen.",
    steps: [
      {
        name: "Introduce la edad y la frecuencia cardíaca en reposo",
        text: "Mide la frecuencia cardíaca en reposo a primera hora, antes de la cafeína, todavía tumbado en la cama.",
      },
      {
        name: "Lee tu categoría de forma",
        text: "La calculadora te sitúa en una escala de forma, de atleta a bajo, según rangos de frecuencia cardíaca en reposo ajustados a la edad.",
      },
      {
        name: "Lee tus zonas de Karvonen",
        text: "También devuelve 5 zonas de entrenamiento cardíaco personalizadas según tu frecuencia cardíaca en reposo.",
      },
    ],
  },
};

export default es;

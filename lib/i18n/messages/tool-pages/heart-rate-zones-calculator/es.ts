import type { HeartRateZonesCalculatorMessages } from "./en";

const es: HeartRateZonesCalculatorMessages = {
  meta: {
    title: "Calculadora de zonas de frecuencia cardíaca: tus 5 zonas de entrenamiento",
    description:
      "Calcula tus 5 zonas de entrenamiento cardíaco según tu edad y tu frecuencia cardíaca en reposo. Optimiza tus sesiones para quemar grasa, ganar resistencia y rendir mejor.",
    keywords: [
      "calculadora zonas frecuencia cardíaca",
      "zonas de frecuencia cardíaca objetivo",
      "zonas de entrenamiento cardíaco",
      "calculadora frecuencia cardíaca máxima",
      "zona de quema de grasa",
      "entrenamiento zona 2",
    ],
    ogTitle: "Calculadora de zonas de frecuencia cardíaca: tus 5 zonas de entrenamiento",
    ogDescription:
      "Calcula tus 5 zonas de entrenamiento cardíaco según tu edad y tu frecuencia cardíaca en reposo. Optimiza tus sesiones para quemar grasa, ganar resistencia y rendir mejor.",
    ogImageAlt: "Calculadora de zonas de frecuencia cardíaca",
  },
  hero: {
    title: "Calculadora de zonas de frecuencia cardíaca",
    subtitle:
      "Descubre tus zonas de entrenamiento cardíaco personalizadas para maximizar la quema de grasa, desarrollar resistencia y mejorar el rendimiento.",
  },
  intro:
    "Introduce tu edad para ver al instante tus 5 zonas de entrenamiento cardíaco personalizadas. Añade tu frecuencia cardíaca en reposo para usar el método de Karvonen y obtener zonas más precisas.",
  calculator: {
    yourDetails: "Tus datos",
    age: "Edad",
    years: { one: "año", other: "años" },
    advanced: "Opciones avanzadas",
    knowResting: "Conozco mi frecuencia cardíaca en reposo",
    restingHint: "Mídela a primera hora de la mañana, antes de levantarte.",
    knowMax: "Conozco mi frecuencia cardíaca máxima",
    maxHint: "De una prueba de laboratorio reciente o de un esfuerzo máximo durante el ejercicio.",
    bpm: "bpm",
    maxHeartRate: "Frecuencia cardíaca máxima",
    methodKarvonen: "Personalizado (Karvonen)",
    methodStandard: "Estándar (220 − edad)",
    zoneBadge: "Z{n}",
    bpmRange: "{min} – {max}",
    pctRange: "{min}–{max}%",
    zones: {
      recovery: { name: "Recuperación", benefit: "Recuperación activa, baja intensidad" },
      fatBurn: { name: "Quema de grasa", benefit: "Base aeróbica, quema de grasa óptima" },
      aerobic: { name: "Aeróbico", benefit: "Resistencia, forma cardiovascular" },
      threshold: { name: "Umbral", benefit: "Trabajo de velocidad, umbral de lactato" },
      maximum: { name: "Máximo", benefit: "Rendimiento máximo, VO2 máx" },
    },
  },
  info: {
    title: "Entender las zonas de frecuencia cardíaca",
  },
  faq: [
    {
      question: "¿Qué son las zonas de entrenamiento cardíaco?",
      answer:
        "Las zonas de frecuencia cardíaca son rangos de latidos por minuto que corresponden a distintas intensidades de ejercicio. Hay cinco zonas, cada una definida como un porcentaje de tu frecuencia cardíaca máxima. Entrenar en zonas diferentes produce adaptaciones distintas: desde la recuperación activa y la quema de grasa en el extremo bajo hasta la velocidad máxima y el desarrollo del VO2 máx en el extremo alto. Repartir los entrenamientos entre zonas da progresos más equilibrados y eficaces.",
    },
    {
      question: "¿Qué es la zona de quema de grasa?",
      answer:
        "La zona 2 (60–70 % de la FC máx) suele llamarse zona de quema de grasa porque a esa intensidad el cuerpo usa sobre todo grasa como combustible. Las intensidades más altas queman más calorías en total, pero una mayor proporción procede de los hidratos de carbono. Para perder grasa de forma sostenida, lo más eficaz es combinar sesiones de cardio en zona 2 con un balance calórico global. La zona 2 también aumenta la densidad mitocondrial y la base aeróbica sin exigir una recuperación excesiva.",
    },
    {
      question: "¿Cómo calculo mi frecuencia cardíaca máxima?",
      answer:
        "La fórmula estándar es 220 menos tu edad. A los 30 años da una FC máx de 190 bpm. Es una estimación con un margen de unos ±10–12 bpm: la genética, el nivel de forma y los medicamentos pueden desplazar tu máximo real. Si tienes una prueba de esfuerzo en laboratorio o registraste un esfuerzo máximo real en una carrera o un entrenamiento duro, introduce ese valor en «Opciones avanzadas» para zonas más precisas.",
    },
    {
      question: "¿Qué es el entrenamiento en zona 2?",
      answer:
        "El entrenamiento en zona 2 — también llamado cardio continuo de baja intensidad (LISS) — se ha popularizado gracias a la investigación sobre longevidad y rendimiento de resistencia. Consiste en un esfuerzo sostenido al 60–70 % de la FC máx, a una intensidad en la que puedes mantener una conversación. Los atletas de resistencia de élite suelen dedicar el 80 % de su volumen de entrenamiento a la zona 2. Los beneficios incluyen un mejor metabolismo de las grasas, mitocondrias más eficientes, mayor gasto cardíaco y una recuperación más rápida entre sesiones duras.",
    },
    {
      question: "¿En qué se diferencia el método de Karvonen?",
      answer:
        "El método de Karvonen usa tu reserva de frecuencia cardíaca (RFC) — la diferencia entre la frecuencia cardíaca máxima y la frecuencia cardíaca en reposo — para calcular las zonas. La fórmula es: FC objetivo = FC en reposo + (RFC × porcentaje de la zona). Como tiene en cuenta tu nivel cardiovascular de partida, produce zonas más personalizadas y, en general, más precisas que el método de porcentaje simple. Un atleta bien entrenado con una frecuencia cardíaca en reposo de 45 bpm obtendrá zonas muy distintas a las de una persona sedentaria con 75 bpm, aunque tengan la misma edad.",
    },
  ],
  cta: {
    title: "Sigue tu camino de salud",
    description:
      "Usa Steps para registrar tus caminatas diarias y mantener la frecuencia cardíaca en la zona óptima.",
  },
  howTo: {
    name: "Cómo encontrar tus zonas de frecuencia cardíaca",
    description:
      "Introduce la edad o la frecuencia cardíaca máxima (y, si quieres, la frecuencia cardíaca en reposo) para obtener tus 5 zonas de entrenamiento con el método de Karvonen.",
    steps: [
      {
        name: "Introduce tu edad",
        text: "La edad sirve para estimar la frecuencia cardíaca máxima (220 − edad) si no introduces una directamente.",
      },
      {
        name: "Opcional: introduce la frecuencia cardíaca en reposo",
        text: "Si indicas la frecuencia cardíaca en reposo, la calculadora usa el método de Karvonen para zonas más personalizadas.",
      },
      {
        name: "Lee tus 5 zonas",
        text: "La calculadora muestra las zonas 1 a 5 con rangos en bpm y el objetivo del entrenamiento (recuperación, resistencia, ritmo, umbral, intervalos).",
      },
    ],
  },
};

export default es;

import type { StepsPerMileCalculatorMessages } from "./en";

const es: StepsPerMileCalculatorMessages = {
  meta: {
    title: "¿Cuántos pasos hay en una milla? Calculadora gratis",
    description:
      "¿Cuántos pasos hay en una milla? Unos 2.000-2.500 según tu altura y ritmo. Pasos personalizados por milla y por km, con tabla de caminar y correr.",
    keywords: [
      "pasos por milla",
      "pasos por km",
      "cuántos pasos hay en una milla",
      "pasos en una milla",
      "pasos en un kilómetro",
      "calculadora de longitud de paso",
      "pasos caminando por milla",
      "pasos a millas",
      "millas a pasos",
    ],
    ogTitle: "¿Cuántos pasos hay en una milla? Calculadora gratis",
    ogDescription:
      "¿Cuántos pasos hay en una milla? 2.000-2.500 según tu altura. Obtén tus pasos por milla y por km.",
    ogImageAlt: "Calculadora de pasos por milla",
  },
  hero: {
    title: "¿Cuántos pasos hay en una milla?",
    subtitle:
      "¿Cuántos pasos hay en una milla? Unos 2.000–2.500 para la mayoría de los adultos. Introduce tu altura para un recuento personalizado por milla y por km.",
  },
  resultCta: {
    headline: "Conoce tus pasos reales por milla",
    description:
      "Steps cuenta tus pasos y tu distancia automáticamente, para que veas tu ritmo y tu zancada reales, no una estimación.",
  },
  stickyCta: "Sigue tus pasos con Steps",
  calculator: {
    yourInformation: "Tus datos",
    height: "Altura",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    stepLength: "Tu longitud de paso estimada: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} pulgadas)",
    stepsPerMile: "Pasos por milla",
    stepsPerKm: "Pasos por kilómetro",
    stepsUnit: "pasos",
    referenceTitle: "Tabla de distancias",
    referenceSubtitle: "Pasos necesarios para distancias habituales según tu longitud de paso",
    colDistance: "Distancia",
    colSteps: "Pasos",
    distances: ["1 km", "1 milla", "5 km", "5 millas", "10 km", "Media maratón", "Maratón"],
  },
  info: {
    title: "Cómo calculamos los pasos por milla",
    intro:
      "El número de pasos por milla depende de tu longitud de paso, determinada sobre todo por tu altura y tu sexo. Las personas más altas suelen tener una zancada más larga y dan menos pasos para la misma distancia.",
    formulaTitle: "La fórmula",
    stepLengthLabel: "Longitud de paso:",
    stepLengthFormula: "Altura (cm) × 0,415 (hombre) o 0,413 (mujer)",
    perKmLabel: "Pasos por km:",
    perKmFormula: "100.000 ÷ longitud de paso (cm)",
    perMileLabel: "Pasos por milla:",
    perMileFormula: "Pasos por km × 1,609",
    heightTitle: "Pasos medios según la altura",
    heights: [
      { height: "5'0\" (152 cm):", steps: "~2.500 pasos/milla" },
      { height: "5'6\" (168 cm):", steps: "~2.300 pasos/milla" },
      { height: "6'0\" (183 cm):", steps: "~2.100 pasos/milla" },
      { height: "6'6\" (198 cm):", steps: "~1.950 pasos/milla" },
    ],
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Cuántos pasos hay en una milla?",
      answer:
        "De media, una milla son unos 2.000-2.500 pasos. El número exacto depende de tu altura y de tu zancada. Las personas más bajas dan más pasos y las más altas, menos.",
    },
    {
      question: "¿Cuántos pasos hay en un kilómetro?",
      answer:
        "De media, un kilómetro son unos 1.250-1.550 pasos. Es aproximadamente el 62 % de los pasos de una milla, porque un kilómetro equivale a unas 0,62 millas.",
    },
    {
      question: "¿La velocidad al caminar cambia los pasos por milla?",
      answer:
        "Sí, un poco. Si caminas más rápido o corres, tu zancada se alarga y das menos pasos por milla. En la mayoría de ritmos de caminata, la diferencia es pequeña.",
    },
    {
      question: "¿Cómo mido mi longitud de paso real?",
      answer:
        "Camina una distancia conocida (por ejemplo 30 metros) a tu ritmo habitual y cuenta los pasos. Divide la distancia entre el número de pasos para obtener tu longitud media. También puedes marcar un punto de salida, dar 10 pasos y medir la distancia recorrida.",
    },
  ],
  cta: {
    title: "Sigue tus pasos y tu distancia",
    description:
      "Descarga la app Steps para registrar automáticamente tus pasos y tu distancia en tu iPhone y tu Apple Watch.",
  },
  howTo: {
    name: "Cómo calcular los pasos por milla",
    description:
      "Introduce tu altura y tu ritmo al caminar para estimar cuántos pasos hay en una milla (y en un kilómetro) para ti.",
    steps: [
      {
        name: "Introduce tu altura",
        text: "Las personas más altas cubren más terreno por paso, así que la altura ajusta el resultado.",
      },
      {
        name: "Elige un ritmo",
        text: "Caminar a buen ritmo y correr tienen una zancada más larga que caminar despacio. Elige el ritmo que te interesa.",
      },
      {
        name: "Lee la estimación de pasos por milla",
        text: "El resultado muestra los pasos por milla y por kilómetro según tu zancada personal a ese ritmo.",
      },
    ],
  },
};

export default es;

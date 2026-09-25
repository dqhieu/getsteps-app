import type { StepDistanceCalculatorMessages } from "./en";

const es: StepDistanceCalculatorMessages = {
  meta: {
    title: "Calculadora de pasos y distancia: 1 km ≈ 1.300 pasos",
    description:
      "1 km ≈ 1.300 pasos. 1 milla ≈ 2.100 pasos. 5.000 pasos ≈ 3,8 km / 2,4 mi. Calculadora gratis: personalízala con tu altura y tu zancada.",
    keywords: [
      "km en pasos",
      "pasos a km",
      "1 km en pasos",
      "2 km en pasos",
      "3 km en pasos",
      "6500 pasos en km",
      "calculadora de distancia de pasos",
      "calculadora de longitud de zancada",
      "pasos a distancia",
      "distancia a pasos",
      "calculadora de distancia caminando",
      "calculadora de longitud de paso",
      "cuántos pasos por km",
      "pasos a millas",
    ],
    ogTitle: "Calculadora de pasos y distancia: 1 km ≈ 1.300 pasos",
    ogDescription:
      "1 km ≈ 1.300 pasos · 5.000 pasos ≈ 3,8 km / 2,4 mi · 10.000 ≈ 7,6 km / 4,7 mi. Calculadora gratis personalizada por tu altura.",
    ogImageAlt: "Calculadora de distancia de pasos",
  },
  hero: {
    title: "Calculadora de distancia de pasos",
    subtitle:
      "Convierte pasos en distancia o distancia en pasos. Resultados personalizados según tu altura, sexo y zancada.",
  },
  resultCta: {
    headline: "Sigue tus pasos y tu distancia reales",
    description:
      "Steps cuenta tus pasos automáticamente y muestra cada día tu distancia, ritmo y calorías reales, sin registro manual.",
  },
  stickyCta: "Sigue tus pasos con Steps",
  calculator: {
    yourInformation: "Tus datos",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    years: "años",
    height: "Altura",
    stepLength: "Tu longitud de paso estimada: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} pulgadas)",
    stepsToDistance: "Pasos a distancia",
    distanceToSteps: "Distancia a pasos",
    numberOfSteps: "Número de pasos",
    stepsPlaceholder: "Introduce el número de pasos",
    distance: "Distancia",
    distancePlaceholder: "Introduce la distancia",
    miles: "millas",
    result: "Resultado",
    kmValue: "{distance} km",
    milesParen: "({distance} millas)",
    stepsValue: "{steps} pasos",
    estimatedCalories: "Calorías estimadas",
    kcalValue: "{calories} kcal",
    walkingTime: "Tiempo caminando",
    hoursMinutes: "{hours} h {minutes} min",
    minutesOnly: "{minutes} min",
    referenceTitle: "Tabla de referencia",
    referenceSubtitle: "Objetivos de pasos habituales y su distancia equivalente según tu perfil",
    colSteps: "Pasos",
    colDistance: "Distancia",
    colCalories: "Calorías",
    colTime: "Tiempo",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "Cómo calculamos tu longitud de paso",
    intro:
      "La longitud de paso decide cuánto avanzas con cada paso. La estimamos con una fórmula basada en la investigación, que tiene en cuenta tu altura, sexo y edad.",
    formulaTitle: "La fórmula",
    maleLabel: "Hombre:",
    maleFormula: "Longitud de paso = altura (cm) x 0,415",
    femaleLabel: "Mujer:",
    femaleFormula: "Longitud de paso = altura (cm) x 0,413",
    ageLabel: "Ajuste por edad:",
    ageFormula: "La longitud de paso baja aproximadamente un 1% por década a partir de los 40",
    average:
      "En adultos, la longitud media del paso va de 60 a 80 cm (24 a 31 pulgadas). La velocidad, el terreno y la forma física también pueden cambiar la longitud real.",
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Cuántos pasos hay en una milla?",
      answer:
        "De media, una milla son unos 2.000 a 2.500 pasos, según tu longitud de paso. Con una zancada más larga necesitas menos pasos para la misma distancia.",
    },
    {
      question: "¿Cuántos pasos hay en un kilómetro?",
      answer:
        "De media, un kilómetro son unos 1.250 a 1.550 pasos. Usa la calculadora de arriba para una estimación según tu perfil.",
    },
    {
      question: "¿Bastan 10.000 pasos al día?",
      answer:
        "10.000 pasos al día es un objetivo popular y equivale a unos 5 millas (8 km) caminando. La investigación sugiere que incluso 7.000-8.000 pasos al día aportan beneficios importantes. El mejor objetivo es el que te reta y sigues pudiendo cumplir.",
    },
    {
      question: "¿Cuántos pasos son 1,8 km?",
      answer:
        "1,8 km son unos 2.340 pasos para un adulto medio (zancada ~77 cm). Usa la calculadora de arriba con tu altura para una estimación más precisa.",
    },
    {
      question: "¿Cuántos pasos son 3,5 km?",
      answer:
        "3,5 km son unos 4.550 pasos para un adulto medio. Las personas más altas dan menos pasos (zancada más larga) y las más bajas, más.",
    },
    {
      question: "¿Qué precisión tiene esta calculadora?",
      answer:
        "La calculadora ofrece una estimación razonable a partir de tus características físicas. Para más precisión, mide tu longitud de paso real caminando una distancia conocida y contando los pasos.",
    },
  ],
  conversionsTitle: "Tablas de conversión rápidas",
  conversions: [
    "10.000 pasos a millas",
    "5.000 pasos a millas",
    "Pasos en una milla",
    "Pasos en un km",
    "Tabla de pasos a km",
    "Tabla de pasos a millas",
    "Tabla de pasos a calorías",
  ],
  allConversions: "Todas las conversiones →",
  stepsToKm: {
    title: "Pasos a km: ¿cuántos kilómetros hay en tus pasos?",
    intro:
      "Convertir {phrase} depende de tu zancada, que varía con la altura. Como referencia: {ruleA} para un adulto medio, y {ruleB}.",
    phrase: "pasos a km",
    ruleA: "1.000 pasos ≈ 0,75 km",
    ruleB: "1 km ≈ 1.300 pasos",
    cards: [
      { value: "0,75 km", label: "1.000 pasos" },
      { value: "3,8 km", label: "5.000 pasos" },
      { value: "7,5 km", label: "10.000 pasos" },
      { value: "15 km", label: "20.000 pasos" },
    ],
    guide:
      "Son medias: tu distancia real depende de tu altura y tu zancada. Usa la calculadora de arriba para una conversión personal, o consulta la guía sobre {link} con tablas por altura.",
    guideLink: "cuántos pasos hay en un kilómetro",
  },
  kmTable: {
    title: "Km a pasos: referencia rápida",
    intro:
      "Número aproximado de pasos para distancias habituales, con una zancada media de 0,75 m (adulto medio).",
    colDistance: "Distancia",
    colSteps: "Pasos (aprox.)",
    colTime: "Tiempo caminando",
    rows: [
      { distance: "0,5 km", steps: "650", time: "~6 min" },
      { distance: "1 km", steps: "1.300", time: "~12 min" },
      { distance: "1,5 km", steps: "1.950", time: "~18 min" },
      { distance: "1,8 km", steps: "2.340", time: "~22 min" },
      { distance: "2 km", steps: "2.600", time: "~24 min" },
      { distance: "2,5 km", steps: "3.250", time: "~30 min" },
      { distance: "3 km", steps: "3.900", time: "~36 min" },
      { distance: "3,5 km", steps: "4.550", time: "~42 min" },
      { distance: "4 km", steps: "5.200", time: "~48 min" },
      { distance: "5 km (~3,1 millas)", steps: "6.500", time: "~60 min" },
      { distance: "6 km", steps: "7.800", time: "~72 min" },
      { distance: "7 km", steps: "9.100", time: "~84 min" },
      { distance: "8 km (~5 millas)", steps: "10.400", time: "~96 min" },
      { distance: "10 km (~6,2 millas)", steps: "13.000", time: "~2 h" },
      { distance: "12 km", steps: "15.600", time: "~2 h 24 min" },
      { distance: "15 km", steps: "19.500", time: "~3 h" },
      { distance: "20 km", steps: "26.000", time: "~4 h" },
    ],
    footnote:
      "Basado en una zancada media (~0,75 m) y un ritmo normal (~5 km/h). Usa la calculadora de arriba para un resultado según tu altura y tu sexo.",
  },
  stepsTable: {
    title: "Pasos a km y millas: referencia rápida",
    intro:
      "Distancia aproximada en km y millas para recuentos habituales, con una zancada media de 0,75 m.",
    colSteps: "Pasos",
    colKm: "Km",
    colMiles: "Millas",
    rows: [
      { steps: "1.000", km: "0,75 km", miles: "0,47 mi" },
      { steps: "2.000", km: "1,5 km", miles: "0,93 mi" },
      { steps: "2.500", km: "1,9 km", miles: "1,17 mi" },
      { steps: "3.000", km: "2,25 km", miles: "1,4 mi" },
      { steps: "5.000", km: "3,8 km", miles: "2,4 mi" },
      { steps: "6.000", km: "4,5 km", miles: "2,8 mi" },
      { steps: "6.500", km: "4,9 km", miles: "3,0 mi" },
      { steps: "7.000", km: "5,25 km", miles: "3,3 mi" },
      { steps: "7.500", km: "5,6 km", miles: "3,5 mi" },
      { steps: "10.000", km: "7,5 km", miles: "4,7 mi" },
      { steps: "12.000", km: "9,0 km", miles: "5,6 mi" },
      { steps: "13.000", km: "9,75 km", miles: "6,05 mi" },
      { steps: "15.000", km: "11,25 km", miles: "7,0 mi" },
      { steps: "20.000", km: "15 km", miles: "9,3 mi" },
    ],
    footnote:
      "Las distancias asumen la zancada de un adulto medio. Quien es más alto cubre más terreno por paso; quien es más bajo, menos. Usa la calculadora de arriba para un resultado según tu altura.",
  },
  cta: {
    title: "Sigue tus pasos automáticamente",
    description:
      "Descarga la app Steps para registrar automáticamente tus pasos, distancia y calorías en tu iPhone y tu Apple Watch.",
  },
  howTo: {
    name: "Cómo convertir pasos en distancia (o distancia en pasos)",
    description:
      "Introduce tu altura y un número de pasos o una distancia. La calculadora estima la conversión a partir de tu longitud de paso.",
    steps: [
      {
        name: "Introduce tu altura",
        text: "La altura sirve para estimar tu longitud de paso media. La zancada al caminar es aproximadamente 0,413 × la altura en mujeres y 0,415 × la altura en hombres.",
      },
      {
        name: "Introduce pasos o distancia",
        text: "Cambia a pasos para obtener una distancia, o a distancia para obtener un número de pasos. Se admiten unidades métricas e imperiales.",
      },
      {
        name: "Lee el valor convertido",
        text: "El resultado muestra la conversión y tu longitud de paso estimada en metros y pies.",
      },
    ],
  },
};

export default es;

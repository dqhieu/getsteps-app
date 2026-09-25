import type { ConversionHubsMessages } from "./en";

const es: ConversionHubsMessages = {
  breadcrumbLabel: "Miga de pan",
  openCalculator: "Abrir la calculadora →",
  units: {
    steps: "{count} pasos",
    miles: "{count} millas",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} kcal",
    strideCm: "{stride} cm",
    detailSteps: "{count} pasos →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count} milla",
    other: "{count} millas",
  },
  mileArrow: {
    one: "{count} milla →",
    other: "{count} millas →",
  },
  duration: {
    minutes: "{minutes} min",
    hours: "{hours} h",
    hoursMinutes: "{hours} h {minutes} min",
  },
  heights: [
    "1,47 m (147 cm) — baja",
    "1,63 m (163 cm) — mujer media",
    "1,75 m (175 cm) — adulto medio",
    "1,83 m (183 cm) — hombre medio",
    "1,93 m (193 cm) — alto",
  ],
  heightShort: {
    petite: "1,47 m",
    tall: "1,93 m",
  },
  paces: {
    slow: "Lento (2 mph)",
    normal: "Normal (3 mph)",
    brisk: "Rápido (4 mph)",
  },
  hub: {
    meta: {
      title: "Conversiones de pasos — millas, kilómetros y calorías",
      description:
        "Convierte entre pasos, millas, kilómetros y calorías. Respuestas rápidas, tablas completas y una calculadora según tu altura y tu peso.",
      keywords: [
        "conversión de pasos",
        "tabla de conversión de pasos",
        "pasos a millas",
        "millas a pasos",
        "pasos a calorías",
        "conversión de distancia en pasos",
      ],
      ogTitle: "Conversiones de pasos",
      ogDescription:
        "Convierte entre pasos, millas, kilómetros y calorías. Respuestas rápidas y tablas completas.",
      ogImageAlt: "Conversiones de pasos",
    },
    title: "Conversiones de pasos",
    subtitle:
      "Respuestas rápidas y precisas para cada conversión habitual — millas, kilómetros, calorías y tiempo de caminata.",
    seeAll: "Ver las {count} →",
    categories: {
      "steps-to-miles": {
        title: "Pasos a millas",
        description: "Convierte cualquier número de pasos en millas caminadas",
      },
      "miles-to-steps": {
        title: "Millas a pasos",
        description: "Convierte millas al número equivalente de pasos",
      },
      "steps-to-calories": {
        title: "Pasos a calorías",
        description: "Estima las calorías quemadas para cualquier número de pasos",
      },
      "steps-to-km": {
        title: "Pasos a kilómetros",
        description: "Convierte cualquier número de pasos en kilómetros caminados",
      },
      "km-to-steps": {
        title: "Kilómetros a pasos",
        description: "Convierte kilómetros al número equivalente de pasos",
      },
      "steps-to-time": {
        title: "Pasos a tiempo de caminata",
        description: "Cuánto se tarda en caminar cualquier número de pasos",
      },
      "miles-to-time": {
        title: "Millas a tiempo de caminata",
        description: "Cuánto se tarda en caminar cualquier número de millas",
      },
    },
    stepsToMilesTitle: "Popular: pasos a millas",
    milesToStepsTitle: "Popular: millas a pasos",
    stepsToCaloriesTitle: "Popular: pasos a calorías",
    personalTitle: "¿Quieres cifras personalizadas?",
    personalBody:
      "Estas tablas usan promedios. Las calculadoras te permiten introducir tu altura, tu peso y tu ritmo para una respuesta exacta.",
    distanceCta: "Calculadora de distancia por pasos",
    calorieCta: "Calculadora de calorías",
  },
  stepsToMiles: {
    meta: {
      title: "Convertir pasos a millas — tabla y calculadora",
      description:
        "Convierte cualquier número de pasos a millas. {ten} pasos ≈ {tenMiles} millas · {five} pasos ≈ {fiveMiles} millas. Tabla completa de {from} a {to} pasos.",
      keywords: [
        "pasos a millas",
        "convertir pasos a millas",
        "conversor de pasos a millas",
        "tabla de pasos a millas",
        "conversión de paso a milla",
        "cuántas millas son X pasos",
      ],
      ogTitle: "Convertir pasos a millas — tabla y calculadora",
      ogDescription:
        "Convierte cualquier número de pasos a millas. {ten} pasos ≈ {tenMiles} millas. Tabla de {from} → {to} pasos.",
      ogImageAlt: "Pasos a millas",
    },
    crumb: "Pasos a millas",
    title: "Conversor de pasos a millas",
    intro:
      "Convierte cualquier número de pasos a millas. Cada fila enlaza a una página con calorías, tiempo de caminata y una tabla de zancada según la altura.",
    formulaTitle: "La fórmula rápida",
    formula: "millas ≈ pasos × {factor}",
    formulaNote:
      "Supone una zancada media de adulto de {stride} cm ({feet} pies). Quien es más alto cubre un poco más por paso; quien es más bajo, un poco menos. Para tu cifra, haz clic en una fila de la tabla.",
    tableTitle: "Tabla de conversión completa",
    columns: {
      steps: "Pasos",
      miles: "Millas",
      kilometers: "Kilómetros",
      detail: "Página de detalle",
    },
    exactTitle: "¿Quieres la cifra exacta para tu altura?",
    exactBody:
      "Nuestra calculadora de distancia por pasos calcula la respuesta exacta para {your} longitud de zancada — solo introduce tu altura.",
    your: "tu",
    accuracyTitle: "¿Qué precisión tiene la conversión de pasos a millas?",
    accuracyBody:
      "La zancada predeterminada de {stride} cm / {feet} pies es la cifra que más citan los CDC, la Mayo Clinic y Harvard Health para un adulto de estatura media. Las zancadas reales van de unos {short} cm (estatura baja) a {tall} cm (estatura alta), así que la distancia puede variar un ±{low}–{high} %.",
    accuracyApp:
      "Para la cifra más precisa, instala Steps en tu iPhone o tu Apple Watch: mide la longitud real de tu paso a partir de tus entrenamientos.",
  },
  milesToSteps: {
    meta: {
      title: "¿Cuántos pasos hay en una milla? — {steps} pasos (y tabla)",
      description:
        "{one} milla ≈ {steps} pasos para un adulto medio. Usa la tabla para convertir millas a pasos, o entra al detalle para calorías y tiempo de caminata según tu altura.",
      keywords: [
        "cuántos pasos hay en una milla",
        "millas a pasos",
        "millas en pasos",
        "1 milla en pasos",
        "pasos en una milla",
        "convertir millas a pasos",
      ],
      ogTitle: "¿Cuántos pasos hay en una milla? — {steps} pasos",
      ogDescription:
        "{one} milla ≈ {steps} pasos para un adulto medio. Tabla completa y cálculo según la altura.",
      ogImageAlt: "Millas a pasos",
    },
    crumb: "Millas a pasos",
    title: "¿Cuántos pasos hay en una milla?",
    intro:
      "Respuesta corta: unos {highlight} para un adulto medio. La cifra completa depende de tu altura — sigue leyendo la tabla.",
    quickLabel: "Respuesta rápida",
    heroFigure: "≈ {steps}",
    heroNote:
      "Adulto medio, zancada de {stride} cm ({feet} pies). Tu cifra depende de tu altura.",
    heightTitle: "Pasos por milla según la altura",
    heightIntro:
      "La zancada es aproximadamente {ratio} × tu altura. Quien es más bajo da más pasos para cubrir la misma distancia.",
    heightColumns: {
      height: "Altura",
      stride: "Zancada",
      steps: "Pasos por milla",
    },
    formulaTitle: "La fórmula de conversión",
    formula: "pasos ≈ millas × {steps}",
    formulaNote:
      "O bien: {one} milla = {meters} m × {cm} cm ÷ zancada de {stride} cm ≈ {steps} pasos.",
    tableTitle: "Tabla de millas → pasos",
    columns: {
      miles: "Millas",
      steps: "Pasos (adulto medio)",
      detail: "Página de detalle",
    },
    exactTitle: "¿Quieres la cifra exacta para tu altura?",
    exactBody:
      "Usa la calculadora de distancia por pasos — introduce tu altura una vez y obtén tus pasos por milla.",
    whyTitle: `¿Por qué no decir simplemente «{rule} pasos en una milla»?`,
    whyBody:
      "La regla de {rule} pasos es un atajo útil, pero deja una diferencia real. Con {stride} cm como zancada media — la cifra que publican los CDC y la Mayo Clinic — salen unos {perMile}, no {rule}. En un día de {daily} pasos, la regla simple se deja aproximadamente un cuarto de milla.",
    perMile: "{steps} pasos por milla",
    connectionTitle: "La relación con los {daily} pasos",
    connectionBody:
      "La meta diaria habitual de {daily} pasos equivale a unos {distance} para un adulto medio. Por eso llegar a {daily} pasos lleva unos {minutes} minutos de caminata a ritmo normal, repartidos en el día.",
    distance: "{miles} millas ({km} km)",
    faq: [
      {
        question: "¿Cuántos pasos hay en una milla?",
        answer:
          "Unos {steps} pasos para un adulto medio con una zancada de {stride} cm ({feet} pies). La cifra va de aproximadamente {tallSteps} pasos para alguien de {tallHeight} a {petiteSteps} pasos para alguien de {petiteHeight}.",
      },
      {
        question: "¿Cuántos pasos hay en 2 millas?",
        answer:
          "Unos {steps} pasos para un adulto medio. Mira la tabla de esta página para otras distancias.",
      },
      {
        question: "¿Cuántos pasos hay en 5 millas?",
        answer: "Unos {steps} pasos — más o menos la meta diaria habitual de {daily} pasos.",
      },
      {
        question: "¿El número de pasos de una milla depende de la altura?",
        answer:
          "Sí. Tu zancada es aproximadamente {ratio} × tu altura. Alguien de {petiteHeight} da unos {petiteSteps} pasos por milla, y alguien de {tallHeight} unos {tallSteps} — una diferencia del {percent} %.",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "Convertir pasos a km — tabla de conversión y calculadora",
      description:
        "Convierte cualquier número de pasos a kilómetros. {steps} pasos ≈ {km} km. Tabla completa de {from} a {to} pasos.",
      keywords: [
        "convertir pasos a km",
        "pasos a kilómetros",
        "conversión de pasos a km",
        "paso a km",
        "tabla de pasos a km",
        "cuántos km son X pasos",
      ],
      ogTitle: "Convertir pasos a km",
      ogDescription:
        "Convierte cualquier número de pasos a km. {steps} pasos ≈ {km} km. Tabla de conversión completa.",
      ogImageAlt: "Pasos a kilómetros",
    },
    crumb: "Pasos a km",
    title: "Conversor de pasos a kilómetros",
    intro:
      "Convierte cualquier número de pasos a kilómetros. Cada fila enlaza a una página con calorías, tiempo de caminata y una tabla de zancada según la altura. Para una respuesta exacta y personalizada, usa la {calculator}.",
    calculatorLink: "calculadora de distancia por pasos",
    formulaTitle: "La fórmula rápida",
    formula: "km ≈ pasos × {factor}",
    formulaNote:
      "O bien: pasos × zancada de {stride} cm ÷ {perKm} = distancia en km. La zancada media de un adulto es de {stride} cm ({feet} pies).",
    tableTitle: "Tabla de conversión completa",
    columns: {
      steps: "Pasos",
      kilometers: "Kilómetros",
      miles: "Millas",
      detail: "Página de detalle",
    },
    exactTitle: "¿Quieres la cifra exacta para tu altura?",
    exactBody:
      "Nuestra calculadora de distancia por pasos calcula la respuesta exacta para tu longitud de zancada — solo introduce tu altura.",
  },
  kmToSteps: {
    meta: {
      title: "¿Cuántos pasos hay en un km? — {steps} pasos (y tabla)",
      description:
        "{one} km ≈ {steps} pasos para un adulto medio. Tabla completa de {from}–{to} km, más una calculadora según la altura para tu cifra exacta.",
      keywords: [
        "cuántos pasos hay en un km",
        "km a pasos",
        "kilómetros a pasos",
        "1 km en pasos",
        "5 km en pasos",
        "convertir km a pasos",
      ],
      ogTitle: "¿Cuántos pasos hay en un km? — {steps} pasos",
      ogDescription: "{one} km ≈ {steps} pasos para un adulto medio. Tabla de conversión completa.",
      ogImageAlt: "Km a pasos",
    },
    crumb: "Km a pasos",
    title: "¿Cuántos pasos hay en un kilómetro?",
    intro:
      "Respuesta corta: unos {highlight} para un adulto medio. La cifra completa depende de tu altura — mira la tabla.",
    quickLabel: "Respuesta rápida",
    heroFigure: "≈ {steps}",
    heroNote: "Adulto medio, zancada de {stride} cm ({feet} pies). Tu cifra depende de tu altura.",
    heightTitle: "Pasos por km según la altura",
    heightIntro:
      "La zancada es aproximadamente {ratio} × tu altura. Quien es más bajo da más pasos para la misma distancia.",
    heightColumns: {
      height: "Altura",
      stride: "Zancada",
      steps: "Pasos por km",
    },
    formulaTitle: "La fórmula de conversión",
    formula: "pasos ≈ km × {steps}",
    formulaNote: "O bien: {one} km = {cm} cm ÷ zancada de {stride} cm ≈ {steps} pasos.",
    tableTitle: "Tabla de km → pasos",
    columns: {
      kilometers: "Kilómetros",
      steps: "Pasos (adulto medio)",
      detail: "Página de detalle",
    },
    exactTitle: "¿Quieres la cifra exacta para tu altura?",
    exactBody:
      "Usa la calculadora de distancia por pasos — introduce tu altura una vez y obtén tus pasos por km.",
    faq: [
      {
        question: "¿Cuántos pasos hay en un kilómetro?",
        answer:
          "Unos {steps} pasos para un adulto medio con una zancada de {stride} cm. El rango va de unos {tall} (persona alta) a {petite} (persona baja).",
      },
      {
        question: "¿Cuántos pasos hay en 5 km?",
        answer: "Unos {steps} pasos para un adulto medio — una carrera de 5 km típica.",
      },
      {
        question: "¿Cuántos pasos hay en 10 km?",
        answer: "Unos {steps} pasos — por encima de la meta diaria habitual de {daily} pasos.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Pasos a calorías — ¿cuántas calorías por paso?",
      description:
        "Convierte cualquier número de pasos en calorías quemadas. {steps} pasos ≈ {calories} calorías. Tabla de {from} a {to} pasos según tu peso.",
      keywords: [
        "pasos a calorías",
        "calorías por paso",
        "conversión de paso a caloría",
        "cuántas calorías son los pasos",
        "convertir pasos a calorías",
      ],
      ogTitle: "Conversor de pasos a calorías",
      ogDescription:
        "{steps} pasos ≈ {calories} calorías. Tabla de conversión de {from}–{to} pasos.",
      ogImageAlt: "Pasos a calorías",
    },
    crumb: "Pasos a calorías",
    title: "Conversor de pasos a calorías",
    intro:
      "Convierte cualquier número de pasos en calorías quemadas y entra al detalle según tu peso, tu ritmo y el tiempo de caminata.",
    formulaTitle: "La fórmula rápida",
    formula: "calorías ≈ pasos × {factor} × (peso en kg ÷ {weight})",
    formulaNote:
      "Aproximadamente {one} caloría cada {per} pasos para un adulto medio. Quien pesa más quema proporcionalmente más.",
    tableTitle: "Tabla completa (adulto de {lb} lb / {kg} kg, ritmo normal)",
    columns: {
      steps: "Pasos",
      calories: "Calorías",
      detail: "Página de detalle",
    },
    exactTitle: "¿Quieres el gasto calórico personalizado?",
    exactBody:
      "Usa la calculadora de pasos a calorías e introduce tu peso, tu edad y tu sexo para una cifra más precisa.",
  },
  stepsToTime: {
    meta: {
      title: "¿Cuánto se tarda en caminar X pasos? — tabla de tiempo",
      description:
        "Tiempo de caminata para cualquier número de pasos. {steps} pasos ≈ {hours} h {mins} min a ritmo normal. Tabla de {from} → {to} pasos en tres ritmos.",
      keywords: [
        "cuánto se tarda en caminar pasos",
        "pasos a tiempo de caminata",
        "tiempo de caminata por paso",
        "pasos a minutos",
        "cuánto tardar en caminar X pasos",
      ],
      ogTitle: "¿Cuánto se tarda en caminar X pasos?",
      ogDescription: "Tiempo de caminata para cualquier número de pasos. Tabla con tres ritmos.",
      ogImageAlt: "Pasos a tiempo de caminata",
    },
    crumb: "Tiempo de caminata",
    title: "¿Cuánto se tarda en caminar X pasos?",
    intro:
      "Tiempo de caminata para cualquier número de pasos, en tres ritmos habituales. Haz clic en una fila para la página con calorías y zancada.",
    formulaTitle: "La fórmula rápida",
    formula: "minutos ≈ pasos ÷ {cadence}",
    formulaNote:
      "La mayoría de los adultos camina a unos {cadence} pasos por minuto a ritmo normal. Así, {steps} pasos ≈ {minutes} minutos ({hours} h {mins} min) de caminata. Un poco más rápido ({mph} mph) baja a {fastHours} h {fastMins} min.",
    tableTitle: "Tiempo de caminata por número de pasos y ritmo",
    columns: {
      steps: "Pasos",
      detail: "Detalle",
    },
    exactTitle: "¿Quieres planear una caminata concreta?",
    exactBody:
      "La calculadora de tiempo de caminata estima la duración de cualquier distancia o número de pasos, con hora de salida y de llegada.",
  },
  milesToTime: {
    meta: {
      title: "¿Cuánto se tarda en caminar X millas? — según el ritmo",
      description:
        "Tiempo de caminata para una distancia en millas. {one} milla ≈ {oneMin} min, {three} millas ≈ {threeHours} h, {five} millas ≈ {fiveHours} h {fiveMins} min. Tabla en tres ritmos.",
      keywords: [
        "cuánto se tarda en caminar una milla",
        "cuánto tardar en caminar millas",
        "tiempo de caminata en millas",
        "millas a tiempo de caminata",
        "cuánto se tarda en caminar 5 millas",
        "cuánto se tarda en caminar 3 millas",
      ],
      ogTitle: "¿Cuánto se tarda en caminar X millas?",
      ogDescription: "Tiempo de caminata para una distancia en millas, en tres ritmos.",
      ogImageAlt: "Millas a tiempo de caminata",
    },
    crumb: "Millas a tiempo de caminata",
    title: "¿Cuánto se tarda en caminar X millas?",
    intro:
      "Tiempo de caminata para cualquier distancia, en tres ritmos habituales. Haz clic en una fila para la página de detalle.",
    formulaTitle: "La regla rápida",
    formula: "minutos ≈ millas × {minutes}",
    formulaNote:
      "A un ritmo normal de {normal} mph. Quien camina rápido ({brisk} mph) recorta cerca de un {briskCut} %; quien camina lento ({slow} mph) suma un {slowAdd} %.",
    tableTitle: "Tiempo de caminata por distancia y ritmo",
    columns: {
      distance: "Distancia",
      detail: "Detalle",
    },
    exactTitle: "¿Estás planeando una ruta concreta?",
    exactBody:
      "La calculadora de tiempo de caminata cubre cualquier distancia, con hora de salida y llegada, descansos y ritmo.",
    faq: [
      {
        question: "¿Cuánto se tarda en caminar 1 milla?",
        answer:
          "Unos {normalMin} minutos a un ritmo normal de {normalMph} mph. Ritmo rápido ({briskMph} mph): {briskMin} minutos. Ritmo lento ({slowMph} mph): {slowMin} minutos.",
      },
      {
        question: "¿Cuánto se tarda en caminar 3 millas?",
        answer:
          "Aproximadamente {hours} hora a ritmo normal. Rápido: {briskMin} minutos. Lento: {slowHours} hora {slowMins} minutos.",
      },
      {
        question: "¿Cuánto se tarda en caminar 5 millas?",
        answer:
          "Aproximadamente {hours} hora {mins} minutos a ritmo normal. Rápido: {briskHours} hora {briskMins} minutos. Lento: {slowHours} horas {slowMins} minutos.",
      },
    ],
  },
};

export default es;

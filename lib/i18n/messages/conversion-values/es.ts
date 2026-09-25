import type { ConversionValuesMessages } from "./en";

const es: ConversionValuesMessages = {
  ui: {
    breadcrumb: "Miga de pan",
    quickAnswer: "Respuesta rápida",
    forContext: "Para situarlo:",
    distanceByHeightTitle: "La distancia depende de tu estatura",
    distanceByHeightBody:
      "Tu zancada mide aproximadamente 0,41 × tu estatura, así que una persona más baja recorre menos terreno por paso.",
    heightColumn: "Tu estatura",
    strideColumn: "Zancada",
    milesColumn: "Millas",
    kilometersColumn: "Kilómetros",
    stepsColumn: "Pasos",
    stepsRequiredTitle: "Los pasos necesarios dependen de tu estatura",
    stepsRequiredBody: "Las personas más bajas dan más pasos para cubrir la misma distancia.",
    caloriesTitle: "Calorías quemadas según el peso y el ritmo",
    caloriesBody:
      "Las calorías aumentan de forma lineal con el peso. Un ritmo más rápido quema más, pero al caminar solo un poco más.",
    weightColumn: "Tu peso",
    timeTitle: "¿Cuánto tiempo tardarás?",
    timeBody:
      "El tiempo depende de tu ritmo. La mayoría de los adultos camina a un ritmo normal de unos 3 mph.",
    paceColumn: "Ritmo",
    speedColumn: "Velocidad",
    timeColumn: "Tiempo",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} cal",
    mph: "{value} mph",
    ctaTitle: "Registra tus cifras reales con Steps",
    ctaBody:
      "Estas conversiones usan promedios. La app Steps registra tu longitud de paso {actual}, las calorías y el tiempo caminando, sincronizados desde tu iPhone y tu Apple Watch.",
    ctaActual: "real",
    relatedTitle: "Conversiones relacionadas",
    faqTitle: "Preguntas frecuentes",
    heights: [
      "147 cm (4′10″) — menuda",
      "163 cm (5′4″) — mujer media",
      "175 cm (5′9″) — adulto medio",
      "183 cm (6′0″) — hombre medio",
      "193 cm (6′4″) — alto",
    ],
    weights: [
      "54 kg (120 lb)",
      "68 kg (150 lb)",
      "82 kg (180 lb)",
      "95 kg (210 lb)",
      "113 kg (250 lb)",
    ],
    paces: ["Lento (2 mph)", "Normal (3,1 mph)", "Rápido (4 mph)"],
    duration: {
      minutes: "{count} min",
      hours: "{count} h",
      hoursMinutes: "{hours} h {minutes} min",
    },
  },
  plurals: {
    mile: { one: "1 milla", other: "{count} millas" },
    mileArticle: { one: "una milla", other: "{count} millas" },
    mileInSteps: { one: "{count} milla en pasos", other: "{count} millas en pasos" },
    mileToSteps: { one: "{count} milla a pasos", other: "{count} millas a pasos" },
    howManyStepsInMile: {
      one: "cuántos pasos hay en {count} milla",
      other: "cuántos pasos hay en {count} millas",
    },
    howManyStepsIsMile: {
      one: "cuántos pasos son {count} milla",
      other: "cuántos pasos son {count} millas",
    },
    mileWalkSteps: "{count} milla caminar pasos",
    howLongDoesMile: {
      one: "cuánto se tarda en caminar {count} milla",
      other: "cuánto se tarda en caminar {count} millas",
    },
    howLongToMile: {
      one: "cuánto tardar en caminar {count} milla",
      other: "cuánto tardar en caminar {count} millas",
    },
    walkingTimeMile: {
      one: "tiempo caminando {count} milla",
      other: "tiempo caminando {count} millas",
    },
    mileWalkingTime: {
      one: "{count} milla tiempo de caminata",
      other: "{count} millas tiempo de caminata",
    },
    walkMileTime: {
      one: "Caminar {count} milla — tiempo",
      other: "Caminar {count} millas — tiempo",
    },
  },
  familiar: {
    olympic: "una vuelta a una pista olímpica de 400 m",
    centralPark: "el largo de Central Park (Nueva York)",
    fiveK: "una carrera de 5 km",
    tenK: "una carrera de 10 km",
    brooklyn: "cruzar el puente de Brooklyn (ida y vuelta)",
    half: "una media maratón",
    marathon: "una maratón",
  },
  foods: {
    banana: "un plátano (105 cal)",
    apple: "una manzana (95 cal)",
    bread: "una rebanada de pan (80 cal)",
    coffee: "una taza de café con crema (50 cal)",
    cookie: "una galleta con chips de chocolate (160 cal)",
    juice: "un vaso de zumo de naranja (110 cal)",
  },
  stepsToKm: {
    meta: {
      title: "¿Cuántos km son {steps} pasos? — {steps} pasos en kilómetros",
      description:
        "{steps} pasos ≈ {km} km ({miles} millas) para un adulto medio. Mira la distancia exacta según tu estatura, las calorías quemadas y el tiempo caminando.",
      keywords: [
        "{steps} pasos en km",
        "{steps} pasos a kilómetros",
        "cuántos km son {steps} pasos",
        "{steps} pasos distancia km",
      ],
      ogImageAlt: "{steps} pasos en km",
    },
    h1: "¿Cuántos km son {steps} pasos?",
    subheading: "¿Qué distancia caminas al llegar a {steps} pasos?",
    primary: "{km} km",
    secondary:
      "{miles} millas · unos {time} a ritmo normal · {calories} calorías para una persona de 70 kg",
    intro:
      "Caminar {steps} pasos cubre unos {km} km ({miles} millas) para un adulto medio, con una zancada típica de 76 cm (2,5 ft). A un ritmo normal de 5 km/h tardas unos {time} y quemas aproximadamente {calories} calorías si pesas 70 kg (155 lb). La distancia exacta depende de tu estatura: las personas más altas cubren más terreno por paso. Mira la tabla de abajo.",
    crumb: "Pasos a km",
    crumbValue: "{steps} pasos",
    related: "{steps} pasos en km",
    relatedHub: "¿Cuántos pasos hay en un km?",
    relatedMiles: "{steps} pasos a millas",
    faq: [
      {
        question: "¿Cuántos km son {steps} pasos?",
        answer:
          "{steps} pasos son unos {km} km ({miles} millas) para un adulto medio con una zancada de 76 cm. Quien es más bajo recorre un poco menos y quien es más alto, un poco más. En la tabla de estaturas de esta página está tu cifra.",
      },
      {
        question: "¿Cuánto se tarda en caminar {steps} pasos?",
        answer:
          "A un ritmo normal de 5 km/h, {steps} pasos tardan unos {time}. A un ritmo rápido de 6,4 km/h, unos {brisk}. A un paseo lento de 3,2 km/h, unos {slow}.",
      },
      {
        question: "¿Cuántas calorías queman {steps} pasos?",
        answer:
          "{steps} pasos queman unas {calories} calorías para una persona de 70 kg (155 lb) a ritmo normal. Las personas más ligeras queman menos calorías por paso; las más pesadas, más. Mira la tabla de calorías de esta página para tu peso.",
      },
      {
        question: "¿Cómo se calcula la conversión de pasos a km?",
        answer:
          "Usamos una zancada media de adulto de 76 cm (2,5 ft). Pasos × longitud de zancada (cm) ÷ 100.000 = distancia en km. Así, {steps} pasos × 76 cm ÷ 100.000 ≈ {km} km. Tu zancada real es aproximadamente 0,41 × tu estatura.",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "¿Cuántas millas son {steps} pasos? — {steps} pasos en millas",
      description:
        "{steps} pasos ≈ {miles} millas ({km} km) para un adulto medio. Mira la distancia exacta según tu estatura, las calorías quemadas y el tiempo caminando.",
      keywords: [
        "{steps} pasos en millas",
        "{steps} pasos a millas",
        "cuántas millas son {steps} pasos",
        "{steps} pasos",
        "distancia de {steps} pasos",
        "calorías de {steps} pasos",
      ],
      ogImageAlt: "{steps} pasos en millas",
    },
    h1: "{steps} pasos en millas",
    subheading: "¿Qué distancia caminas al llegar a {steps} pasos?",
    primary: "{miles} millas",
    secondary:
      "{km} km · unos {time} a ritmo normal · {calories} calorías para una persona de 155 lb (70 kg)",
    intro:
      "Caminar {steps} pasos cubre unas {miles} millas ({km} km) para un adulto medio, con una zancada típica de 76 cm (2,5 ft). A un ritmo normal de 3 mph tardas unos {time} y quemas aproximadamente {calories} calorías si pesas 155 lb (70 kg). La distancia exacta depende de tu estatura: las personas más altas cubren más terreno por paso. Mira la tabla de abajo.",
    crumb: "Pasos a millas",
    crumbValue: "{steps} pasos",
    related: "{steps} pasos en millas",
    relatedHub: "¿Cuántos pasos hay en una milla?",
    relatedCalories: "{steps} pasos a calorías",
    realWorld: {
      roughly: "{miles} millas equivalen más o menos a la distancia de {name}.",
      times: "Es unas {factor}× la distancia de {name}.",
      shorter: "Es unas {factor}× más corto que {name}.",
    },
    faq: [
      {
        question: "¿Cuántas millas son {steps} pasos?",
        answer:
          "{steps} pasos son unas {miles} millas ({km} km) para un adulto medio con una zancada de 76 cm. Quien es más bajo recorre un poco menos y quien es más alto, un poco más. En la tabla de estaturas de esta página está tu cifra.",
      },
      {
        question: "¿Cuánto se tarda en caminar {steps} pasos?",
        answer:
          "A un ritmo normal de 3 mph, {steps} pasos tardan unos {time}. A un ritmo rápido de 4 mph, unos {brisk}. A un paseo lento de 2 mph, unos {slow}.",
      },
      {
        question: "¿Cuántas calorías queman {steps} pasos?",
        answer:
          "{steps} pasos queman unas {calories} calorías para una persona de 155 lb (70 kg) a ritmo normal. Las personas más ligeras queman menos calorías por paso; las más pesadas, más. Mira la tabla de calorías de esta página para tu peso.",
      },
      {
        question: "¿Cómo se calcula la conversión?",
        answer:
          "Usamos una zancada media de adulto de 76 cm (2,5 ft), la cifra que más citan los CDC y la Mayo Clinic. Pasos × longitud de zancada = distancia recorrida. Tu zancada real es aproximadamente 0,41 × tu estatura. La tabla de estaturas de esta página muestra el cálculo para cinco estaturas habituales.",
      },
    ],
    daily: {
      question: "¿Son {steps} pasos un buen objetivo diario?",
      below:
        "{steps} pasos están por debajo del objetivo diario de 7.000–10.000 pasos que la mayoría de las autoridades sanitarias recomiendan a los adultos. Úsalo como punto de partida y sube poco a poco: incluso 1.000 pasos extra al día mejoran la salud cardiovascular.",
      mid: "Sí: {steps} pasos caen en el rango que la mayoría de los estudios y los CDC sugieren para adultos. Mantenerlo de forma constante se relaciona con menos riesgo cardiovascular y mejor salud a largo plazo.",
      above:
        "{steps} pasos superan el objetivo habitual de 10.000 al día. Es un volumen excelente, asociado a buena forma cardiovascular y al control del peso, aunque los días de recuperación con menos volumen también son sanos.",
    },
  },
  milesToSteps: {
    meta: {
      title: "¿Cuántos pasos hay en {miles}? — {steps} pasos",
      description:
        "{miles} ≈ {steps} pasos para un adulto medio. Mira el número exacto de pasos según tu estatura, las calorías quemadas y el tiempo caminando.",
      ogImageAlt: "{miles} en pasos",
    },
    h1: "¿Cuántos pasos hay en {milesArticle}?",
    subheading: "La respuesta, para un adulto medio, y cómo cambia con tu estatura.",
    primary: "{steps} pasos",
    secondary:
      "{miles} · {km} km · unos {time} a ritmo normal · {calories} calorías para una persona de 155 lb (70 kg)",
    intro:
      "Caminar {miles} supone unos {steps} pasos para un adulto medio, con una zancada típica de 76 cm (2,5 ft). A un ritmo normal de 3 mph tardas unos {time} y quemas aproximadamente {calories} calorías si pesas 155 lb (70 kg). El número exacto de pasos depende de tu estatura: las personas más bajas dan más pasos para la misma distancia. Mira la tabla de abajo.",
    crumb: "Millas a pasos",
    relatedHub: "Conversor de pasos a millas",
    relatedCalories: "{steps} pasos a calorías",
    faq: [
      {
        question: "¿Cuántos pasos son {miles}?",
        answer:
          "{miles} son unos {steps} pasos para un adulto medio con una zancada de 76 cm. Las personas más bajas dan más pasos para cubrir la misma distancia. En la tabla de estaturas de esta página está tu cifra.",
      },
      {
        question: "¿Cuánto se tarda en caminar {miles}?",
        answer:
          "A un ritmo normal de 3 mph, {miles} tardan unos {time}. A un ritmo rápido de 4 mph, unos {brisk}. A un paseo lento de 2 mph, unos {slow}.",
      },
      {
        question: "¿Cuántas calorías quema {milesArticle}?",
        answer:
          "Caminar {miles} quema unas {calories} calorías para una persona de 155 lb (70 kg) a ritmo normal. Las personas más ligeras queman menos; las más pesadas, más. Mira la tabla de calorías de esta página.",
      },
      {
        question: "¿Cómo se calcula la conversión de millas a pasos?",
        answer:
          "Multiplicamos la distancia en metros por 100 (cm/m) y dividimos por una zancada media de 76 cm. Así, {miles} = {meters} m × 100 ÷ 76 ≈ {steps} pasos. Tu zancada real es aproximadamente 0,41 × tu estatura.",
      },
    ],
    exercise: {
      question: "¿Caminar {miles} al día es suficiente ejercicio?",
      yes: "Sí: caminar {miles} al día ({steps} pasos) cubre de sobra los 150 minutos semanales de actividad aeróbica moderada que recomiendan los CDC, si caminas a ritmo normal o rápido.",
      start:
        "Caminar {miles} al día es un buen comienzo. Te sitúa en un rango activo y suma a los 150 minutos semanales de actividad aeróbica que recomiendan los CDC, pero un segundo paseo al día daría un beneficio más claro.",
      below:
        "Caminar menos de {miles} al día está por debajo del mínimo de los CDC. Sube poco a poco: incluso 1.000 pasos extra al día mejoran la salud cardiovascular.",
    },
  },
  kmToSteps: {
    meta: {
      title: "¿Cuántos pasos hay en {km} km? — {steps} pasos",
      description:
        "{km} km ≈ {steps} pasos para un adulto medio. Mira el número exacto de pasos según tu estatura, las calorías quemadas y el tiempo caminando.",
      keywords: [
        "{km} km a pasos",
        "{km} km en pasos",
        "cuántos pasos hay en {km} km",
        "{km} kilómetros en pasos",
      ],
      ogImageAlt: "{km} km en pasos",
    },
    h1: "¿Cuántos pasos hay en {km} km?",
    subheading: "La respuesta, para un adulto medio, y cómo cambia con tu estatura.",
    primary: "{steps} pasos",
    secondary:
      "{km} km · unos {time} a ritmo normal · {calories} calorías para una persona de 70 kg",
    intro:
      "Caminar {km} km supone unos {steps} pasos para un adulto medio, con una zancada típica de 76 cm (2,5 ft). A un ritmo normal de 5 km/h tardas unos {time} y quemas aproximadamente {calories} calorías si pesas 70 kg (155 lb). El número exacto de pasos depende de tu estatura: las personas más bajas dan más pasos para la misma distancia.",
    crumb: "Km a pasos",
    crumbValue: "{km} km",
    related: "{km} km en pasos",
    relatedHub: "Conversor de pasos a km",
    faq: [
      {
        question: "¿Cuántos pasos son {km} km?",
        answer:
          "{km} km son unos {steps} pasos para un adulto medio con una zancada de 76 cm. Las personas más bajas dan más pasos para cubrir la misma distancia. En la tabla de estaturas de esta página está tu cifra.",
      },
      {
        question: "¿Cuánto se tarda en caminar {km} km?",
        answer:
          "A un ritmo normal de 5 km/h, {km} km tardan unos {time}. A un ritmo rápido de 6,4 km/h, unos {brisk}. A un ritmo lento de 3,2 km/h, unos {slow}.",
      },
      {
        question: "¿Cuántas calorías quema caminar {km} km?",
        answer:
          "Caminar {km} km quema unas {calories} calorías para una persona de 70 kg (155 lb) a ritmo normal. Mira la tabla de calorías de esta página para tu peso.",
      },
      {
        question: "¿Cómo se calcula la conversión de km a pasos?",
        answer:
          "Multiplicamos la distancia por 100.000 (cm/km) y dividimos por una zancada media de 76 cm. Así, {km} km = {cm} cm ÷ 76 cm ≈ {steps} pasos. Tu zancada real es aproximadamente 0,41 × tu estatura.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Calorías de {steps} pasos — ¿cuántas calorías queman {steps} pasos?",
      description:
        "{steps} pasos queman unas {calories} calorías para un adulto medio. Mira el gasto según tu peso, tu ritmo y el tiempo caminando.",
      keywords: [
        "calorías {steps} pasos",
        "{steps} pasos cuántas calorías",
        "calorías en {steps} pasos",
        "calorías quemadas {steps} pasos",
        "cuántas calorías son {steps} pasos",
      ],
      ogImageAlt: "calorías de {steps} pasos",
    },
    h1: "Calorías de {steps} pasos — ¿cuántas calorías quemas?",
    subheading: "Calorías al caminar {steps} pasos, según tu peso y tu ritmo.",
    primary: "≈ {calories} calorías",
    secondary:
      "Para una persona de 155 lb (70 kg) a ritmo normal · cubre {miles} mi / {km} km · unos {time}",
    intro:
      "Caminar {steps} pasos quema unas {calories} calorías para un adulto medio (155 lb / 70 kg) a ritmo normal. Eso es la distancia de {miles} millas ({km} km) y tarda unos {time}. El gasto calórico sigue el peso: quien pesa menos quema menos y quien pesa más, más.",
    crumb: "Pasos a calorías",
    crumbValue: "{steps} pasos",
    related: "calorías de {steps} pasos",
    relatedMiles: "{steps} pasos a millas",
    relatedTool: "Calculadora de calorías al caminar",
    realWorld: {
      roughly: "{calories} calorías equivalen más o menos a {name}.",
      times: "{calories} calorías son unas {factor}× {name}.",
      less: "{calories} calorías son unas {factor}× menos que {name}.",
    },
    faq: [
      {
        question: "¿Cuántas calorías queman {steps} pasos?",
        answer:
          "{steps} pasos queman unas {calories} calorías para una persona de 155 lb (70 kg) caminando a 3 mph. Quien pesa más quema más. Mira la tabla de pesos de esta página.",
      },
      {
        question: "¿El ritmo al caminar cambia las calorías quemadas?",
        answer:
          "Un poco. Caminar a 4 mph (rápido) quema alrededor de un 30 % más de calorías por minuto que a 2 mph (lento), pero también cubres la distancia antes, así que el total para un número fijo de pasos es más parecido de lo que parece. El total va de unas {slowCal} (lento) a {briskCal} (rápido) para una persona de 150 lb.",
      },
      {
        question: "¿Cuánto se tarda en caminar {steps} pasos?",
        answer:
          "Unos {time} a ritmo normal (3 mph). Ritmo más rápido a 4 mph: {brisk}. Paseo lento a 2 mph: {slow}.",
      },
      {
        question: "¿Qué fórmula hay detrás de estas cifras?",
        answer:
          "Usamos la fórmula estándar de calorías con MET: Calorías = MET × peso (kg) × tiempo (horas). Para un ritmo normal, MET = 3,5. Suponemos una zancada media de 76 cm para pasar de pasos a distancia y de distancia a tiempo caminando.",
      },
    ],
    loss: {
      question: "¿{steps} pasos queman suficientes calorías para adelgazar?",
      yes: "{calories} calorías son una parte útil de un déficit diario: unas 0,5 lb de pérdida de peso en dos semanas si no lo compensas comiendo más. Con un ajuste moderado de la dieta, puede impulsar una pérdida constante.",
      no: "{calories} calorías ayudan, pero no bastan por sí solas para adelgazar. Apunta al menos a 7.500–10.000 pasos al día junto con un déficit calórico moderado en la dieta.",
    },
  },
  stepsToTime: {
    meta: {
      title: "¿Cuánto se tarda en caminar {steps} pasos?",
      description:
        "{steps} pasos tardan unos {time} a ritmo normal. Mira el tiempo a tres ritmos, la distancia y las calorías quemadas.",
      keywords: [
        "cuánto se tarda en caminar {steps} pasos",
        "cuánto tardar en caminar {steps} pasos",
        "{steps} pasos en minutos",
        "tiempo de caminata {steps} pasos",
        "{steps} pasos cuánto tiempo",
      ],
      ogImageAlt: "Tiempo caminando para {steps} pasos",
    },
    h1: "¿Cuánto se tarda en caminar {steps} pasos?",
    subheading: "Tiempo caminando, distancia y calorías para {steps} pasos.",
    primary: "≈ {time}",
    secondary: "A un ritmo normal de 3 mph · cubre {miles} mi / {km} km · {calories} calorías",
    intro:
      "Caminar {steps} pasos tarda unos {time} a un ritmo normal de 3 mph (5 km/h). Un ritmo rápido de 4 mph lo baja a {brisk}; un paseo lento de 2 mph lo alarga a {slow}. Recorrerás {miles} millas ({km} km) y quemarás unas {calories} calorías.",
    crumb: "Tiempo caminando",
    crumbValue: "{steps} pasos",
    related: "{steps} pasos — tiempo caminando",
    relatedMiles: "{steps} pasos a millas",
    relatedTool: "Calculadora de tiempo caminando",
    faq: [
      {
        question: "¿Cuánto se tarda en caminar {steps} pasos?",
        answer:
          "Unos {time} a un ritmo normal de 3 mph. Ritmo rápido (4 mph): {brisk}. Paseo lento (2 mph): {slow}.",
      },
      {
        question: "¿El tiempo caminando cambia con mi estatura?",
        answer:
          "El tiempo se mantiene más o menos igual: lo que cambia es cuántos pasos das. Las personas más altas dan menos pasos para cubrir la misma distancia, pero la mayoría camina a una cadencia parecida (unos 100 pasos por minuto). El tiempo depende sobre todo del ritmo, no de la estatura.",
      },
      {
        question: "¿Qué distancia son {steps} pasos?",
        answer: "{steps} pasos cubren unas {miles} millas ({km} km) para un adulto medio.",
      },
      {
        question: "¿Cómo se calcula el tiempo caminando?",
        answer:
          "Tiempo = distancia ÷ ritmo. Calculamos la distancia a partir de los pasos con una zancada media de 76 cm y luego dividimos por la velocidad. El ritmo normal (3 mph / 5 km/h) es el predeterminado. La tabla de esta página muestra los tres ritmos.",
      },
    ],
    spread: {
      question: "¿Puedo repartir {steps} pasos a lo largo del día?",
      high: "Sí: la mayoría de quienes llegan a {steps} pasos al día los acumulan entre paseos, recados y movimiento cotidiano. Tres caminatas de 15 minutos más la actividad normal suelen bastar.",
      low: "Sí: incluso un solo paseo de 20-30 minutos más la actividad diaria (ir al coche, moverte por la oficina, etc.) suele llevarte a {steps} pasos sin una caminata larga dedicada.",
    },
  },
  milesToTime: {
    meta: {
      title: "¿Cuánto se tarda en caminar {miles}?",
      description:
        "Caminar {miles} tarda unos {time} a un ritmo normal de 3 mph. Mira el tiempo a tres ritmos, más los pasos y las calorías.",
      ogImageAlt: "tiempo caminando {miles}",
    },
    h1: "¿Cuánto se tarda en caminar {milesArticle}?",
    subheading: "Tiempo caminando, pasos y calorías para {miles}.",
    primary: "≈ {time}",
    secondary: "A un ritmo normal de 3 mph · {steps} pasos · {calories} calorías para una persona de 70 kg",
    intro:
      "Caminar {miles} tarda unos {time} a un ritmo normal de 3 mph (5 km/h). Baja a {brisk} a un ritmo rápido de 4 mph, o se alarga a {slow} a un ritmo tranquilo de 2 mph. Darás unos {steps} pasos y quemarás aproximadamente {calories} calorías.",
    crumb: "Tiempo caminando",
    relatedTool: "Calculadora de tiempo caminando",
    faq: [
      {
        question: "¿Cuánto se tarda en caminar {milesArticle}?",
        answer: "Unos {time} a un ritmo normal de 3 mph. Rápido a 4 mph: {brisk}. Lento a 2 mph: {slow}.",
      },
      {
        question: "¿Cuántos pasos son {miles}?",
        answer:
          "{miles} son unos {steps} pasos para un adulto medio con una zancada de 76 cm. Las personas más bajas dan más pasos. Mira la tabla de estaturas de esta página.",
      },
      {
        question: "¿Cuántas calorías quemaré caminando {miles}?",
        answer:
          "Unas {calories} calorías para una persona de 70 kg (155 lb) a ritmo normal. Quien pesa más quema más. Mira la tabla de pesos.",
      },
      {
        question: "¿Cómo se calcula el tiempo caminando?",
        answer:
          "Tiempo = distancia ÷ ritmo. {miles} = {km} km. A 5 km/h son {time}. Usamos los mismos tres ritmos que publican los CDC y el ACSM para la actividad física moderada.",
      },
    ],
    exercise: {
      question: "¿Caminar {miles} al día es suficiente ejercicio?",
      yes: "Sí: caminar {miles} al día cubre de sobra la recomendación de los CDC de 150 minutos semanales de actividad aeróbica moderada, si caminas a ritmo normal o rápido.",
      start:
        "Caminar {miles} al día es un buen comienzo. Junto con la actividad diaria te sitúa en un rango activo, pero otro paseo daría un beneficio más claro.",
      below:
        "Menos de {miles} al día está por debajo del mínimo de los CDC. Sube poco a poco: incluso 0,5 milla extra al día mejora la salud cardiovascular.",
    },
  },
};

export default es;

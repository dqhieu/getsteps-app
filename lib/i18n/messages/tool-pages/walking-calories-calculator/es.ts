import type { WalkingCaloriesMessages } from "./en";

const es: WalkingCaloriesMessages = {
  meta: {
    title: "Calculadora de calorías caminando: gratis según peso y ritmo",
    description:
      "Calorías al caminar: un adulto de 70 kg quema ~150 kcal en 30 min a 5,6 km/h. Calculadora gratis: estimación al instante por peso, velocidad, tiempo, distancia o pasos.",
    keywords: [
      "calculadora calorías caminando",
      "calorías quemadas caminando",
      "valor MET caminar",
      "MET caminar 5 km/h",
      "valor MET caminar 5 km/h",
      "valor MET caminata rápida",
      "valor MET ritmo medio",
      "valor MET ritmo moderado",
      "calorías gastadas caminando",
      "calorías caminando por km",
      "valor MET caminar 4 km/h",
      "valor MET caminar 4,5 km/h",
      "valor MET caminar 6 km/h",
      "fórmula calculadora calorías caminando MET",
    ],
    ogTitle: "Calculadora de calorías caminando: gratis según peso y ritmo",
    ogDescription:
      "Un adulto de 70 kg quema ~150 kcal en 30 min a ritmo moderado. Calculadora gratis: resultado al instante por peso, velocidad, tiempo, distancia o pasos.",
    ogImageAlt: "Calculadora de calorías caminando",
  },
  hero: {
    title: "Calculadora de calorías caminando y valores MET",
    subtitle:
      "Calcula las calorías que quemas al caminar con valores MET (equivalente metabólico) para cada velocidad: desde un paseo lento a 2 km/h hasta marcha atlética por encima de 7 km/h. Incluye una tabla MET completa.",
  },
  appCta: {
    headline: "Registra las calorías que realmente quemas",
    description:
      "Steps cuenta cada paso en segundo plano y lo convierte en las calorías que quemas cada día, sin anotarlo a mano.",
  },
  stickyCta: "Sigue tus pasos con Steps",
  calculator: {
    calculateBy: "Calcular por",
    distance: "Distancia",
    time: "Tiempo",
    weight: "Peso",
    duration: "Duración",
    minutes: "minutos",
    miles: "millas",
    walkingSpeed: "Velocidad al caminar",
    speeds: {
      slow: { label: "Lenta", description: "3,2 km/h (2 mph)" },
      normal: { label: "Normal", description: "5 km/h (3,1 mph)" },
      brisk: { label: "Rápida", description: "6,4 km/h (4 mph)" },
      fast: { label: "Muy rápida", description: "7,2 km/h (4,5 mph)" },
    },
    caloriesBurned: "Calorías quemadas",
    walkingTime: "Tiempo caminando",
    distanceResult: "Distancia",
    steps: "Pasos",
    fatBurned: "Grasa quemada",
    metValue: "Valor MET",
    metTableTitle: "Velocidad al caminar y valores MET",
    metTableIntro:
      "El MET (Metabolic Equivalent of Task) representa el coste energético de una actividad. Un MET más alto significa más calorías quemadas.",
    columns: {
      speed: "Velocidad",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "Descripción",
    },
    paceDescriptions: {
      slow: "Paseo tranquilo",
      normal: "Ritmo medio",
      brisk: "Marcha rápida",
      fast: "Marcha atlética",
    },
  },
  info: {
    title: "Cómo calculamos las calorías al caminar",
    intro:
      "Usamos el método MET (Metabolic Equivalent of Task) para calcular las calorías quemadas. Este enfoque, respaldado por la investigación, tiene en cuenta tu peso, la duración y la intensidad.",
    formulaTitle: "La fórmula",
    formula: "Calorías = MET × peso (kg) × duración (horas)",
    metLabel: "MET:",
    metText: "Metabolic Equivalent of Task: el gasto de energía respecto al reposo",
    exampleLabel: "Ejemplo:",
    example:
      "Una persona de 70 kg que camina a ritmo normal (MET 3,5) durante 1 hora quema: 3,5 × 70 × 1 = 245 calorías",
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Cuántas calorías quema caminar 1 milla?",
      answer:
        "Caminar 1 milla quema unas 80-100 calorías para la mayoría de las personas. La cifra exacta depende de tu peso y de tu velocidad. Quien pesa más quema más calorías por milla.",
    },
    {
      question: "¿Cuántas calorías queman 30 minutos caminando?",
      answer:
        "Una caminata de 30 minutos a ritmo normal quema unas 100-150 calorías en la mayoría de los adultos. Caminar rápido puede subir a 150-200 calorías. Usa la calculadora de arriba para una estimación personal.",
    },
    {
      question: "¿Cuántas calorías queman 40 minutos caminando?",
      answer:
        "40 minutos caminando queman unas 140-200 calorías a ritmo moderado (4,8 km/h) y 200-280 a ritmo rápido (5,6-6,4 km/h) en un adulto de 70 kg. A ritmo de marcha atlética de 8 km/h, esos 40 minutos queman unas 290 calorías. A 9,7 km/h (caminata muy rápida o trote ligero, MET ~7,0), 40 minutos queman unas 325-330 calorías en una persona de 70 kg.",
    },
    {
      question: "¿Cuántas calorías queman 40 minutos caminando a 9,7 km/h?",
      answer:
        "Caminar 40 minutos a 9,7 km/h (6,0 mph) — ritmo de marcha atlética en cinta, MET ~7,0 — quema unas 327 calorías en una persona de 70 kg (155 lb). Quien pesa más quema más: unas 380 kcal a 82 kg y 422 kcal a 91 kg. La mayoría de los adultos no sostiene una caminata real a esa velocidad y pasa a un trote ligero. Usa la calculadora de arriba para un número preciso según tu peso.",
    },
    {
      question: "¿La velocidad al caminar cambia las calorías quemadas?",
      answer:
        "Sí, de forma clara. Caminar más rápido sube tu valor MET y quema más calorías por minuto. La marcha rápida (6,4 km/h) quema cerca de un 30 % más que un paseo tranquilo (3,2 km/h).",
    },
    {
      question: "¿Qué es el MET y por qué importa?",
      answer:
        "El MET (Metabolic Equivalent of Task) es una medida científica del gasto de energía. Un MET de 1 es tu metabolismo en reposo. Caminar a ritmo normal tiene un MET de 3,5: quemas 3,5 veces más calorías que en reposo.",
    },
    {
      question: "¿Cuál es el valor MET al caminar a ritmo medio?",
      answer:
        "El valor MET de caminar a ritmo medio (unos 5 km/h o 3,1 mph) es 3,5. Es la velocidad más habitual en adultos y la base de la mayoría de calculadoras. Una persona de 70 kg quema unas 245 calorías por hora a ese ritmo.",
    },
    {
      question: "¿Cuál es el valor MET al caminar a ritmo moderado?",
      answer:
        "Un ritmo moderado (4,0-4,5 km/h o 2,5-2,8 mph) tiene un MET entre 3,0 y 3,3. Es un ritmo cómodo, de conversación, ideal para el día a día. Una persona de 70 kg quema 210-231 calorías por hora.",
    },
    {
      question: "¿Cuál es el valor MET al caminar a 5 km/h (3,1 mph)?",
      answer:
        "El valor MET al caminar a 5 km/h (3,1 mph) es 3,5. Se considera un ritmo normal. Una persona de 70 kg quema unas 245 calorías por hora (3,5 × 70 = 245 kcal/h).",
    },
    {
      question: "¿Cuál es el valor MET al caminar a 4,5 km/h (2,8 mph)?",
      answer:
        "El valor MET al caminar a 4,5 km/h (2,8 mph) es 3,3. Es un ritmo constante y cómodo. En una persona de 70 kg son unas 231 calorías por hora (3,3 × 70 = 231 kcal/h).",
    },
    {
      question: "¿Cuál es el valor MET de la marcha rápida a 6 km/h?",
      answer:
        "La marcha rápida a 6,0 km/h (3,7 mph) tiene un MET de 4,5. Es cerca de un 30 % más exigente que caminar normal (MET 3,5). Una persona de 70 kg quema unas 315 calorías por hora a ese ritmo.",
    },
    {
      question: "¿Cuánta grasa puedo quemar caminando?",
      answer:
        "Un kilogramo de grasa corporal contiene unas 7.700 calorías. Caminar 10.000 pasos al día (unas 400 calorías) quemaría cerca de 1 kg de grasa cada 19 días, si no cambias la dieta. Combina la caminata con una alimentación equilibrada.",
    },
  ],
  formula: {
    title: "Cómo funciona la fórmula de calorías al caminar",
    intro:
      "La {name} usa valores MET (Metabolic Equivalent of Task) del {source}, la misma referencia de los fisiólogos del ejercicio en todo el mundo. La fórmula es:",
    name: "fórmula de la calculadora de calorías quemadas caminando",
    source: "Compendium of Physical Activities",
    equation: "Calorías = MET × peso (kg) × duración (horas)",
    glance: "Cada velocidad tiene un valor MET concreto. Estos son los MET más buscados:",
    highlights: [
      { phrase: "Valor MET caminar 4,8 km/h", detail: "(3 mph) =" },
      { phrase: "Valor MET ritmo moderado", detail: "(5 km/h) =" },
      { phrase: "Valor MET marcha rápida", detail: "(6,4 km/h) =" },
      { phrase: "Valor MET caminar 5 km/h", detail: "(3,1 mph) =" },
    ],
    chartNote:
      "Para el desglose completo, consulta nuestra {chart}: cada velocidad, del paseo lento a la marcha atlética, más ajustes de pendiente y terreno.",
    chartLabel: "tabla de valores MET al caminar",
  },
  understanding: {
    title: "Entender los valores MET al caminar",
    term: "MET (Metabolic Equivalent of Task)",
    body:
      "El {term} es la medida científica estándar de la intensidad del ejercicio. Un MET equivale al gasto de energía de tu cuerpo en reposo completo: cerca de 1 caloría por kilogramo de peso y hora. Un MET de 3,5 significa que quemas 3,5 veces más energía que sentado quieto.",
    levels: {
      light: { title: "Caminata ligera", detail: "Paseo lento, ritmo de mirar escaparates (2–4 km/h)" },
      moderate: { title: "Caminata moderada", detail: "Ritmo normal a rápido, el más habitual (4–6 km/h)" },
      vigorous: { title: "Caminata vigorosa", detail: "Marcha atlética, marcha de competición o cuesta (6+ km/h)" },
    },
    footnote:
      "Los valores MET de la calculadora vienen del Compendium of Physical Activities, la referencia de los científicos del ejercicio. Caminar a 5 km/h (3,1 mph), la velocidad más buscada, tiene un MET de 3,5: una persona de 70 kg quema 245 calorías por hora a ese ritmo.",
  },
  metTable: {
    title: "Valores MET completos según la velocidad",
    intro:
      "El MET (Metabolic Equivalent of Task) mide el gasto de energía. Un MET de 1,0 equivale a tu metabolismo en reposo. Usa la tabla para el MET exacto de tu velocidad. Valores del Compendium of Physical Activities.",
    columns: {
      activity: "Actividad al caminar",
      kmh: "Velocidad (km/h)",
      mph: "Velocidad (mph)",
      met: "Valor MET",
      cal: "kcal/h (70 kg)",
    },
    activities: {
      "very-slow": "Caminata muy lenta",
      "slow-stroll": "Paseo lento",
      leisurely: "Caminata tranquila",
      comfortable: "Ritmo cómodo",
      moderate: "Caminata moderada",
      steady: "Ritmo constante",
      normal: "Caminata normal",
      purposeful: "Caminata con propósito",
      brisk: "Marcha rápida",
      fast: "Caminata veloz",
      "very-fast": "Caminata muy rápida",
      race: "Marcha atlética",
      "uphill-3": "Caminar cuesta arriba (pendiente 3 %)",
      "uphill-6": "Caminar cuesta arriba (pendiente 6 %)",
    },
    footnote:
      "Calorías por hora calculadas para una persona de 70 kg (154 lb). Tu gasto real depende de tu peso: usa la calculadora de arriba para una estimación personal. Las filas resaltadas son los ritmos más habituales. Fuente: Compendium of Physical Activities.",
  },
  cta: {
    title: "Registra tus caminatas",
    description: "Descarga la app Steps para seguir automáticamente tus caminatas, las calorías quemadas y tu progreso.",
  },
  howTo: {
    name: "Cómo calcular las calorías que quemas caminando",
    description: "Introduce la duración, el ritmo y tu peso para estimar las calorías quemadas con valores MET.",
    steps: [
      { name: "Introduce duración o distancia", text: "Puedes cambiar entre cuánto tiempo caminaste y cuánto recorriste. Las dos dan la misma estimación." },
      { name: "Elige tu ritmo", text: "Lento, normal, rápido o muy rápido. Un ritmo mayor usa un MET más alto y quema más calorías por minuto." },
      { name: "Introduce tu peso", text: "El peso es el mayor multiplicador del gasto calórico." },
      { name: "Lee tu estimación", text: "La calculadora muestra las calorías quemadas, la media por minuto y el valor MET usado." },
    ],
  },
};

export default es;

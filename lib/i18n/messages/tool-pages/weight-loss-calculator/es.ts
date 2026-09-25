import type { WeightLossCalculatorMessages } from "./en";

const es: WeightLossCalculatorMessages = {
  meta: {
    title: "Calculadora de pérdida de peso: calorías, plazo y fecha objetivo",
    description:
      "Calcula las calorías diarias y el plazo para tu peso objetivo. Perder 10 kg a 0,5 kg por semana lleva 20 semanas con un déficit de 550 calorías. Calculadora gratis.",
    keywords: [
      "calculadora de pérdida de peso",
      "calculadora de calorías para adelgazar",
      "cuántas calorías para perder peso",
      "calculadora de peso objetivo",
      "calculadora de plazo para adelgazar",
      "calculadora de déficit calórico",
      "cuánto tardaré en adelgazar",
      "plan de pérdida de peso",
    ],
    ogTitle: "Calculadora de pérdida de peso: calorías, plazo y fecha objetivo",
    ogDescription:
      "Introduce tus datos y tu peso objetivo para obtener calorías diarias, un plazo realista e hitos semana a semana.",
    ogImageAlt: "Calculadora de pérdida de peso",
  },
  hero: {
    title: "Calculadora de pérdida de peso",
    subtitle:
      "Introduce tus datos y tu peso objetivo para obtener calorías diarias, un plazo realista y los hitos semana a semana.",
  },
  calculator: {
    details: "Tus datos",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    years: "años",
    height: "Altura",
    weights: "Peso actual y objetivo",
    now: "ahora",
    goal: "objetivo",
    activity: "Nivel de actividad",
    activityLevels: {
      sedentary: "Sedentario",
      light: "Ligeramente activo",
      moderate: "Moderadamente activo",
      active: "Activo",
      very_active: "Muy activo",
    },
    activityDescriptions: {
      sedentary: "Trabajo de escritorio, poco o ningún ejercicio",
      light: "Ejercicio ligero 1–3 días por semana",
      moderate: "Ejercicio moderado 3–5 días por semana",
      active: "Ejercicio intenso 6–7 días por semana",
      very_active: "Trabajo físico o dos entrenamientos al día",
    },
    rate: "Ritmo de pérdida",
    rates: {
      mild: { label: "Suave", description: "0,25 kg (0,5 lb) por semana" },
      moderate: { label: "Moderado", description: "0,5 kg (1 lb) por semana" },
      aggressive: { label: "Intenso", description: "0,75 kg (1,5 lb) por semana" },
      rapid: { label: "Rápido", description: "1 kg (2 lb) por semana" },
    },
    calculate: "Calcular mi plan",
    plan: "Tu plan",
    gainGoal: "Tu peso objetivo es igual o mayor que el actual. Pon un objetivo más bajo para ver un plan de pérdida.",
    eatPerDay: "Comer al día",
    calories: "calorías",
    dailyDeficit: "Déficit diario",
    belowTdee: "por debajo del TDEE",
    toLose: "A perder",
    timeToGoal: "Tiempo hasta la meta",
    weeks: "semanas",
    yourBmr: "Tu metabolismo basal",
    yourTdee: "Tu TDEE",
    calValue: "{value} cal",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    warnings: {
      floorMale:
        "Un ritmo de {rate} kg/semana te dejaría en {raw} calorías al día, por debajo del suelo de {floor} calorías para hombres. El objetivo se ha subido a {floor}, así que la pérdida real será más lenta que el ritmo que elegiste.",
      floorFemale:
        "Un ritmo de {rate} kg/semana te dejaría en {raw} calorías al día, por debajo del suelo de {floor} calorías para mujeres. El objetivo se ha subido a {floor}, así que la pérdida real será más lenta que el ritmo que elegiste.",
      tooFast:
        "Perder {rate} kg a la semana es más del 1 % de tu peso. Por encima, una parte mayor de lo que pierdes sale del músculo y no de la grasa.",
      longPlan:
        "Pasados unos tres meses, las proyecciones se vuelven optimistas. El gasto en reposo baja al adelgazar: vuelve a calcular cada 4–6 semanas con tu peso nuevo.",
    },
    milestones: "Hitos previstos",
    week: "Semana {week}",
    resultCta: {
      headline: "El déficit se sostiene mejor cuando lo ves",
      description:
        "Steps registra tu actividad sola, así que la parte de movimiento de tu déficit se mide en lugar de suponerse.",
    },
  },
  info: {
    title: "Cómo funciona esta calculadora",
    intro: "Tres pasos: estimar lo que quemas, restar lo que quieres perder y comprobar el resultado frente a los suelos de seguridad.",
    methodTitle: "El método",
    steps: [
      {
        marker: "1. BMR",
        text: "{marker} con Mifflin-St Jeor, la ecuación mejor validada en poblaciones modernas.",
      },
      {
        marker: "2. TDEE",
        text: "{marker} = metabolismo basal × factor de actividad (1,2 sedentario hasta 1,9 muy activo).",
      },
      {
        marker: "3. Déficit",
        text: "{marker} = ritmo semanal elegido × 7.700 ÷ 7. Un objetivo de 0,5 kg por semana necesita 550 calorías al día.",
      },
      {
        marker: "4. Plazo",
        text: "{marker} = peso a perder ÷ ritmo semanal, recalculado si el suelo de seguridad subió tu objetivo de calorías.",
      },
    ],
    exampleLabel: "Ejemplo:",
    example: "de 80 kg a 70 kg a 0,5 kg por semana es un déficit diario de 550 calorías durante unas 20 semanas.",
    wishnofsky:
      "Las 7.700 calorías por kilogramo son la regla de Wishnofsky. Es una aproximación lineal que aguanta los dos o tres primeros meses y luego se vuelve optimista, porque el gasto en reposo baja al adelgazar. La calculadora lo marca en cualquier plan de más de 13 semanas.",
    floors:
      "Los objetivos de calorías tienen un suelo de 1.200 para mujeres y 1.500 para hombres. Si el ritmo elegido bajaría de ahí, el objetivo se sube y el plazo se alarga, en lugar de mostrarte un número al que no deberías comer.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cuántas calorías debo comer para adelgazar?",
      answer:
        "Toma tu TDEE y resta de 250 a 500 calorías. Eso produce unos 0,25 a 0,5 kg (0,5 a 1 lb) de pérdida por semana, el rango que la mayoría de las guías clínicas considera sostenible. La calculadora lo hace por ti y no baja de 1.200 calorías en mujeres ni de 1.500 en hombres, los suelos bajo los cuales cubrir micronutrientes se vuelve difícil.",
    },
    {
      question: "¿Cuánto tardaré en perder 10 kg?",
      answer:
        "A un ritmo moderado de 0,5 kg por semana, unas 20 semanas, más o menos cinco meses. A 1 kg por semana serían 10 semanas, pero sostener un déficit diario de 1.100 calorías tanto tiempo es difícil y cuesta más masa magra. A la mayoría le va mejor tratar el número rápido como el mejor caso y planear con el ritmo moderado.",
    },
    {
      question: "¿Es seguro perder 1 kg por semana?",
      answer:
        "Solo si llevas un exceso de peso importante. Lo habitual es quedarse por debajo del 1 % del peso corporal por semana: a 100 kg permite 1 kg, a 65 kg significa 0,65 kg. Por encima, una parte creciente de lo que pierdes es músculo y agua en lugar de grasa, y el déficit exigido es demasiado grande para sostenerlo.",
    },
    {
      question: "¿Por qué estas proyecciones pierden precisión?",
      answer:
        "Suponen 7.700 calorías por kilogramo de grasa y un metabolismo fijo, y la segunda suposición se rompe. Al adelgazar, el metabolismo basal baja porque hay menos tejido que mantener, y las mismas actividades queman menos. La curva real se aplana mientras una proyección lineal conserva la pendiente. Vuelve a calcular cada cuatro a seis semanas con tu peso actual.",
    },
    {
      question: "¿Creo el déficit comiendo menos o moviéndome más?",
      answer:
        "Las dos cosas, con el grueso en la comida. Cambiar la dieta genera un déficit mayor con menos esfuerzo: saltarte un tentempié de 400 calorías no lleva tiempo, quemar 400 calorías lleva unos 90 minutos de caminata rápida. Pero añadir actividad conserva masa magra durante el déficit y frena la caída del TDEE, así que un déficit hecho solo de restricción tiende a estancarse antes.",
    },
    {
      question: "¿Por qué se ha estancado mi pérdida de peso?",
      answer:
        "Lo más habitual es que tu TDEE haya bajado: pesas menos, así que el mismo déficit ya no existe. También puede ser retención de líquidos que tapa grasa perdida de verdad, normal tras un entrenamiento duro o un día con mucha sal, y puede ocultar dos semanas de progreso. Recalcula con tu peso actual y juzga una tendencia de dos a tres semanas, no el día a día.",
    },
    {
      question: "¿Cuántos pasos al día necesito para adelgazar?",
      answer:
        "No hay un número fijo, depende del tamaño de tu déficit y de tu peso. Como guía, 10.000 pasos queman unas 300 a 500 calorías en la mayoría de los adultos, cerca de la mitad de un déficit diario típico. Caminar es la actividad más fácil de sostener a ese volumen, y por eso aguanta mejor que opciones más intensas durante los meses que pide un objetivo real.",
    },
  ],
  cta: {
    title: "Haz automática la parte de movimiento",
    description: "Descarga la app Steps para seguir tus pasos y las calorías quemadas sin anotar nada.",
  },
  sticky: "Sigue tus pasos con Steps",
  howTo: {
    name: "Cómo planificar tu pérdida de peso",
    description:
      "Introduce tus datos y tu peso objetivo para obtener calorías diarias, las semanas hasta la meta e hitos semana a semana.",
    steps: [
      {
        name: "Introduce tus datos corporales",
        text: "Indica sexo, edad y altura, luego el peso actual y el objetivo. Los dos pesos usan el mismo cambio de unidad.",
      },
      {
        name: "Elige tu nivel de actividad",
        text: "De sedentario a muy activo. Esto determina tu TDEE, a partir del cual se calcula el objetivo de calorías.",
      },
      {
        name: "Elige un ritmo de pérdida",
        text: "Suave es 0,25 kg por semana, moderado 0,5 kg, intenso 0,75 kg, rápido 1 kg. Los ritmos más rápidos piden déficits mayores y son más difíciles de sostener.",
      },
      {
        name: "Lee tu plan",
        text: "Obtienes un objetivo de calorías al día, el déficit que crea, las semanas hasta la meta y los hitos previstos. Aparecen avisos si el ritmo te empujaría por debajo de suelos calóricos seguros.",
      },
    ],
  },
};

export default es;

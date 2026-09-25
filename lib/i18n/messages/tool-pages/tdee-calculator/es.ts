import type { TdeeCalculatorMessages } from "./en";

const es: TdeeCalculatorMessages = {
  meta: {
    title: "Calculadora TDEE – gasto energético diario total y calorías",
    description:
      "Calcula tu gasto energético diario total (TDEE) y tu tasa metabólica basal (BMR). Encuentra tus calorías diarias para perder peso, mantener o ganar músculo.",
    keywords: [
      "calculadora TDEE",
      "calculadora de gasto energético diario total",
      "calculadora de calorías",
      "calculadora BMR",
      "cuántas calorías debería comer",
      "calculadora de calorías de mantenimiento",
      "necesidades calóricas diarias",
    ],
    ogTitle: "Calculadora TDEE – gasto energético diario total y calorías",
    ogDescription:
      "Calcula tu gasto energético diario total (TDEE) y tu tasa metabólica basal (BMR). Encuentra tus calorías diarias para perder peso, mantener o ganar músculo.",
  },
  hero: {
    title: "Calculadora TDEE",
    subtitle: "Calcula cuántas calorías quemas al día según tus datos y tu nivel de actividad.",
  },
  intro:
    "Introduce tu sexo, edad, peso, altura y nivel de actividad para calcular tu gasto energético diario total (TDEE) — las calorías que tu cuerpo quema al día. Úsalo para fijar el objetivo calórico adecuado.",
  calculator: {
    details: "Tus datos",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    years: "años",
    weight: "Peso",
    height: "Altura",
    activityLevel: "Nivel de actividad",
    activity: {
      sedentary: "Sedentario",
      light: "Ligeramente activo",
      moderate: "Moderadamente activo",
      active: "Activo",
      very_active: "Muy activo",
    },
    calculate: "Calcular TDEE",
    results: "Tus resultados",
    bmr: "BMR",
    bmrUnit: "cal/día en reposo",
    tdee: "TDEE",
    tdeeUnit: "cal/día en total",
    calorieGoals: "Objetivos de calorías",
    maintenanceBadge: "Mantenimiento",
    belowMinimum: "Por debajo del mínimo",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "Pérdida agresiva", weekly: "-1 kg / semana" },
      moderate_loss: { label: "Pérdida moderada", weekly: "-0.5 kg / semana" },
      mild_loss: { label: "Pérdida leve", weekly: "-0.25 kg / semana" },
      maintenance: { label: "Mantenimiento", weekly: "0 kg / semana" },
      mild_gain: { label: "Ganancia leve", weekly: "+0.25 kg / semana" },
      muscle_gain: { label: "Ganancia muscular", weekly: "+0.5 kg / semana" },
    },
  },
  faqTitle: "Preguntas sobre TDEE y calorías",
  faq: [
    {
      question: "¿Qué es el TDEE?",
      answer:
        "TDEE significa gasto energético diario total — las calorías que tu cuerpo quema en un día. Incluye la tasa metabólica basal (calorías en reposo), la energía de la actividad física y el efecto térmico de los alimentos (calorías al digerir). El TDEE es el número más importante para fijar objetivos de pérdida de peso, mantenimiento o ganancia muscular.",
    },
    {
      question: "¿Qué tan preciso es el TDEE?",
      answer:
        "Las calculadoras de TDEE con la ecuación de Mifflin-St Jeor suelen acertar dentro de un 10–15 % para la mayoría de las personas. La variación individual por genética, masa muscular, hormonas y adaptación metabólica puede desplazar el valor real. Usa el resultado como punto de partida, sigue tu peso 2–3 semanas y ajusta la ingesta 100–200 calorías según el progreso real.",
    },
    {
      question: "¿Cuál es la diferencia entre BMR y TDEE?",
      answer:
        "El BMR (tasa metabólica basal) son las calorías que el cuerpo quema en reposo completo — la energía mínima para respirar, circular la sangre y reparar células. El TDEE suma el resto encima del BMR: actividad, ejercicio y digestión. El TDEE siempre es más alto que el BMR y es el número para fijar objetivos calóricos.",
    },
    {
      question: "¿Cuántas calorías por debajo del TDEE para perder peso?",
      answer:
        "Un déficit diario de 250–500 calorías por debajo del TDEE se recomienda para una pérdida sostenible de 0,25–0,5 kg por semana. Déficits mayores pueden causar pérdida de músculo, carencias y adaptación metabólica. Las mujeres en general no deberían bajar de 1.200 calorías/día ni los hombres de 1.500 calorías/día sin supervisión médica. Un déficit moderado más más pasos diarios suele funcionar mejor que solo restringir.",
    },
    {
      question: "¿El TDEE cambia con la edad?",
      answer:
        "Sí. El TDEE suele bajar alrededor de un 1–2 % por década después de los 20 años, sobre todo por la pérdida de masa muscular (sarcopenia). El músculo es metabólicamente activo y quema más calorías en reposo que el tejido graso. El entrenamiento de fuerza y un estilo de vida activo pueden frenar mucho ese descenso. Los cambios hormonales, en especial en la menopausia, también pueden reducir el TDEE en las mujeres.",
    },
  ],
  cta: {
    title: "Aumenta tu TDEE de forma natural",
    description: "Aumenta tu TDEE de forma natural sumando más pasos cada día. Regístralos en la app Steps.",
  },
  howTo: {
    name: "Cómo calcular tu gasto energético diario total",
    description:
      "Introduce edad, sexo, peso, altura y nivel de actividad para obtener tu BMR y tu TDEE con la ecuación de Mifflin-St Jeor.",
    steps: [
      {
        name: "Introduce edad, sexo, peso y altura",
        text: "Datos necesarios para la fórmula de Mifflin-St Jeor, la más precisa para la población general.",
      },
      {
        name: "Elige tu nivel de actividad",
        text: "Sedentario (trabajo de escritorio), ligeramente activo (ejercicio 1-3 días/semana), moderadamente activo (3-5 días), muy activo (6-7 días) o extra activo.",
      },
      {
        name: "Lee el BMR y el TDEE",
        text: "La calculadora devuelve tu tasa metabólica basal (calorías para seguir vivo en reposo) y tu gasto energético diario total (calorías para mantener el peso).",
      },
    ],
  },
};

export default es;

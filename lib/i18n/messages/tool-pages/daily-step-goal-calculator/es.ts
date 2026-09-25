import type { DailyStepGoalCalculatorMessages } from "./en";

const es: DailyStepGoalCalculatorMessages = {
  meta: {
    title: "Calculadora de objetivo de pasos diario – recomendación personal",
    description:
      "Consigue un objetivo de pasos diario personalizado según tu edad, nivel de actividad y metas de salud. Descubre cuántos pasos deberías caminar cada día.",
    keywords: [
      "objetivo de pasos diario",
      "cuántos pasos debo caminar",
      "objetivo de pasos por edad",
      "pasos recomendados al día",
      "objetivo de pasos personalizado",
      "calculadora de objetivo de pasos",
      "meta de caminata diaria",
      "pasos para perder peso",
    ],
    ogTitle: "Calculadora de objetivo de pasos diario",
    ogDescription:
      "Consigue un objetivo de pasos diario personalizado según tu edad, nivel de actividad y metas de salud.",
    ogImageAlt: "Calculadora de objetivo de pasos diario",
  },
  hero: {
    title: "Calculadora de objetivo de pasos diario",
    subtitle:
      "Consigue una recomendación personal de pasos diarios según tu edad, tu nivel de actividad actual y tus objetivos de salud.",
  },
  resultCta: {
    headline: "Cumple tu objetivo de pasos, automáticamente",
    description:
      "Steps cuenta tus pasos en segundo plano, sin registro manual, para que de verdad alcances el objetivo de arriba y crees un hábito que dure.",
  },
  stickyCta: "Sigue tus pasos con Steps",
  calculator: {
    yourProfile: "Tu perfil",
    age: "Edad",
    years: "años",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    activityLevel: "Nivel de actividad actual",
    activity: {
      sedentary: "Sedentario",
      lightly_active: "Poco activo",
      active: "Activo",
      very_active: "Muy activo",
    },
    healthGoal: "Objetivo de salud",
    goals: {
      maintain: "Mantener la salud",
      lose_weight: "Perder peso",
      improve_fitness: "Mejorar la forma",
      train_event: "Entrenar para un evento",
    },
    currentSteps: "Pasos diarios actuales (opcional)",
    currentStepsPlaceholder: "p. ej., 5000",
    currentStepsHint: "Introduce tu media de pasos diarios para una recomendación más personal",
    resultTitle: "Tu objetivo diario de pasos recomendado",
    stepsValue: "{steps} pasos",
    perDay: "al día",
    weeklyGoal: "Objetivo semanal",
    distancePerDay: "Distancia/día",
    caloriesPerDay: "Calorías/día",
    kmValue: "{distance} km",
    approxCalories: "~{calories}",
    planTitle: "Plan de progresión de 8 semanas",
    planSubtitle: "Llega poco a poco a tu objetivo con metas semanales",
    weekLabel: "Semana {week}",
    tipsTitle: "Consejos para alcanzar tu objetivo",
    tips: {
      sedentary: [
        "Empieza con una caminata de 10 minutos en la pausa del almuerzo",
        "Usa las escaleras en lugar del ascensor",
        "Aparca más lejos de la entrada",
      ],
      lightlyActive: [
        "Añade una caminata de 15 minutos por la mañana a tu rutina",
        "Camina mientras hablas por teléfono",
      ],
      loseWeight: [
        "Combina la caminata con una alimentación equilibrada para mejores resultados",
        "Intenta mantener un ritmo vivo para quemar más calorías",
      ],
      improveFitness: [
        "Aumenta el ritmo de forma gradual",
        "Incluye algo de cuesta o escaleras",
      ],
      trainEvent: [
        "Sigue un plan de entrenamiento progresivo",
        "Incluye días de descanso para recuperarte",
      ],
      general: [
        "Registra tus pasos cada día para mantener la motivación",
        "Busca un compañero de caminata que te ayude a ser constante",
      ],
    },
  },
  info: {
    title: "Entender los objetivos de pasos",
    intro:
      "El objetivo adecuado depende de tu situación. 10.000 pasos es una meta popular, pero la investigación muestra que los beneficios para la salud pueden llegar con cantidades distintas según tu edad y tu forma física.",
    ageTitle: "Pasos recomendados por edad",
    ages: [
      { label: "Niños y adolescentes (menores de 18):", steps: "12.000-15.000 pasos/día" },
      { label: "Adultos (18-64):", steps: "10.000-12.000 pasos/día" },
      { label: "Mayores (65+):", steps: "7.000-10.000 pasos/día" },
    ],
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Hacen falta 10.000 pasos al día?",
      answer:
        "No, 10.000 pasos no es un número mágico. Estudios recientes muestran que los beneficios importantes para la salud empiezan alrededor de 7.000-8.000 pasos al día. La clave es estar más activo de lo que estás ahora.",
    },
    {
      question: "¿Cuántos pasos para perder peso?",
      answer:
        "Para perder peso, apunta a 12.000 pasos o más al día, junto con una alimentación equilibrada. Puede quemar 400-600 calorías extra al día. La constancia importa más que acertar un número perfecto cada día.",
    },
    {
      question: "¿Cómo aumento mis pasos diarios?",
      answer:
        "Suma 1.000 pasos por semana a tu media actual. Haz reuniones caminando, aparca más lejos, usa las escaleras en lugar del ascensor y programa pausas cortas para caminar durante el día.",
    },
    {
      question: "¿Y si no llego a mi objetivo?",
      answer:
        "Cualquier aumento de actividad ayuda. Si el objetivo te parece demasiado ambicioso, ajústalo a algo que puedas mantener. El mejor objetivo es el que sostienes con constancia. Céntrate en el progreso, no en la perfección.",
    },
  ],
  cta: {
    title: "Sigue tus objetivos de pasos",
    description:
      "Descarga la app Steps para fijar metas diarias, seguir tu progreso y crear hábitos de caminata saludables.",
  },
  howTo: {
    name: "Cómo encontrar tu objetivo de pasos diario",
    description:
      "Introduce edad, sexo, peso, altura, nivel de actividad y objetivo para obtener una meta de pasos diaria personalizada.",
    steps: [
      {
        name: "Introduce tu perfil",
        text: "Rellena edad, sexo, peso y altura. La calculadora los usa para estimar tu gasto energético basal.",
      },
      {
        name: "Elige tu nivel de actividad actual",
        text: "Selecciona sedentario, poco activo, moderadamente activo o muy activo. Sé sincero: el objetivo parte de donde estás.",
      },
      {
        name: "Elige tu objetivo",
        text: "Las opciones incluyen forma general, pérdida de peso, salud cardiovascular y longevidad. Cada una usa metas de pasos basadas en la evidencia.",
      },
      {
        name: "Lee tu objetivo diario",
        text: "La calculadora devuelve un objetivo de pasos personalizado, un total semanal y un plan de progresión si partes de un nivel más bajo.",
      },
    ],
  },
};

export default es;

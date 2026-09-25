import type { ActivityToStepsMessages } from "./en";

const es: ActivityToStepsMessages = {
  meta: {
    title: "Conversor de actividad a pasos: convierte cualquier ejercicio en pasos",
    description:
      "Convierte ciclismo, natación, yoga, remo y más de 10 actividades en pasos equivalentes. Ideal para retos de pasos y seguimiento fitness.",
    keywords: [
      "conversor actividad a pasos",
      "convertir ejercicio en pasos",
      "equivalente en pasos ciclismo",
      "equivalente en pasos natación",
      "calculadora de pasos equivalentes",
      "pasos sin caminar",
    ],
    ogTitle: "Conversor de actividad a pasos: convierte cualquier ejercicio en pasos",
    ogDescription:
      "Convierte ciclismo, natación, yoga, remo y más de 10 actividades en pasos equivalentes. Ideal para retos de pasos y seguimiento fitness.",
    ogImageAlt: "Conversor de actividad a pasos",
  },
  hero: {
    title: "Conversor de actividad a pasos",
    subtitle:
      "Convierte cualquier actividad — ciclismo, natación, yoga y más — en pasos equivalentes para tu reto de pasos o tu objetivo de forma.",
    intro:
      "Elige tu actividad, introduce la duración y ve al instante los pasos equivalentes. Usa valores MET (equivalente metabólico) para convertir con precisión 10 actividades.",
  },
  appCta: {
    headline: "Cuenta cada actividad como pasos, automáticamente",
    description:
      "Steps registra tu movimiento diario en segundo plano y lo convierte en equivalentes de pasos, sin anotarlo a mano.",
  },
  stickyCta: "Sigue tus pasos con Steps",
  calculator: {
    yourActivity: "Tu actividad",
    activityType: "Tipo de actividad",
    duration: "Duración (minutos)",
    intensity: "Intensidad",
    intensities: {
      low: "Baja",
      medium: "Media",
      high: "Alta",
    },
    calorieToggle: "Para el cálculo de calorías (opcional)",
    bodyWeight: "Peso corporal",
    equivalentSteps: "Pasos equivalentes",
    equivalentFor: "pasos equivalentes por {duration} min de {activity}",
    walkingTime: "Tiempo caminando",
    minutes: "{minutes} min",
    distance: "Distancia",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "Calorías",
    kcal: "kcal",
    metNote: "Calculado con valores MET (Metabolic Equivalent of Task)",
    activities: {
      cycling: "Ciclismo",
      swimming: "Natación",
      elliptical: "Elíptica",
      rowing: "Remo",
      jump_rope: "Saltar la cuerda",
      dancing: "Baile",
      yoga: "Yoga",
      basketball: "Baloncesto",
      hiking: "Senderismo",
      pilates: "Pilates",
    },
  },
  info: {
    title: "Cómo funcionan los pasos equivalentes",
  },
  faq: [
    {
      question: "¿Cómo se calculan los pasos de una actividad?",
      answer:
        "Este conversor usa valores MET (Metabolic Equivalent of Task), la medida estándar de intensidad en ciencias del ejercicio. Caminar a ritmo normal tiene un MET de 3,5, unos 100 pasos por minuto. El MET de cada actividad se compara con el de caminar para obtener los pasos equivalentes. Una actividad con MET 7,0 (el doble que caminar) produce el doble de pasos equivalentes por minuto.",
    },
    {
      question: "¿El ciclismo equivale a pasos caminando?",
      answer:
        "Sí: 30 minutos de ciclismo a intensidad media (MET ~6,8) son unos 7.000–9.000 pasos equivalentes según tu ritmo. El ciclismo de competición a alta intensidad puede superar los 14.000 pasos equivalentes en 30 minutos. Un podómetro no los cuenta como pasos literales, pero la conversión es una comparación justa para un reto de pasos.",
    },
    {
      question: "¿Nadar cuenta como pasos?",
      answer:
        "La natación no se registra de forma nativa como pasos en la mayoría de apps y podómetros. Aun así, 30 minutos de natación a intensidad media (MET ~7,0) equivalen a unos 6.000–8.000 pasos. Usa este conversor para que tus sesiones cuenten en retos que permiten registrar la actividad a mano.",
    },
    {
      question: "¿Por qué convertir actividades en pasos?",
      answer:
        "Los retos de pasos, en el trabajo o en apps, miden el progreso en pasos, pero ciclistas, nadadores y quien hace yoga acumulan menos pasos por GPS. Convertir tus actividades que no son caminar te deja participar en igualdad, seguir tu actividad diaria y comparar el esfuerzo de distintos deportes en la misma escala.",
    },
  ],
  related: [
    { title: "Calculadora de pasos a calorías", href: "/tools/steps-to-calories-calculator" },
    { title: "Calculadora de objetivo diario de pasos", href: "/tools/daily-step-goal-calculator" },
    { title: "Calculadora de calorías caminando", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "Sigue tu camino de salud",
    description: "Registra todas tus actividades y tus pasos automáticamente con la app Steps.",
  },
  howTo: {
    name: "Cómo convertir actividades en pasos equivalentes",
    description:
      "Indica el tipo de actividad, la duración y la intensidad para obtener los pasos equivalentes de tu objetivo diario.",
    steps: [
      {
        name: "Elige una actividad",
        text: "Ciclismo, natación, yoga, fuerza y decenas más están disponibles.",
      },
      {
        name: "Introduce duración e intensidad",
        text: "Duración en minutos más un selector de intensidad ligera, moderada o vigorosa.",
      },
      {
        name: "Lee los pasos equivalentes",
        text: "La calculadora devuelve los pasos equivalentes según valores MET, para alcanzar un objetivo diario aunque no hayas caminado.",
      },
    ],
  },
};

export default es;

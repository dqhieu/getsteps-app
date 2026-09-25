import type { TreadmillCalorieCalculatorMessages } from "./en";

const es: TreadmillCalorieCalculatorMessages = {
  meta: {
    title: "Calculadora de calorías en cinta: gratis, con inclinación",
    description:
      "Calorías en cinta según velocidad, inclinación y peso. Un adulto de 155 lb quema ~120 cal en 30 min a 3 mph en llano, ~200 cal al 5% de inclinación. Calculadora gratis basada en ACSM.",
    keywords: [
      "calculadora calorías cinta",
      "calorías quemadas cinta",
      "calculadora calorías inclinación cinta",
      "calorías quemadas en cinta",
      "calorías caminar en cinta",
      "calorías cinta inclinada",
      "calorías 12-3-30",
      "ecuación metabólica ACSM",
      "valores MET cinta",
    ],
    ogTitle: "Calculadora de calorías en cinta: gratis, con inclinación",
    ogDescription:
      "Calcula las calorías en cinta según velocidad, inclinación, peso y tiempo. Calculadora gratis con las ecuaciones metabólicas ACSM.",
    ogImageAlt: "Calculadora de calorías en cinta",
  },
  hero: {
    title: "Calculadora de calorías en cinta",
    subtitle:
      "Calcula las calorías quemadas en una cinta a partir de tu velocidad, inclinación, peso y tiempo. Las ecuaciones metabólicas ACSM tienen en cuenta la inclinación en lugar de ignorarla.",
  },
  calculator: {
    session: "Tu sesión en la cinta",
    weight: "Peso",
    speed: "Velocidad",
    incline: "Inclinación: {percent}%",
    duration: "Duración",
    minutes: "minutos",
    caloriesBurned: "Calorías quemadas",
    kcalValue: "{value} kcal",
    inclineAdds:
      "La inclinación del {grade}% suma {extra} kcal frente a la misma sesión en llano ({flat} kcal).",
    met: "MET",
    distance: "Distancia",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "Pasos estimados",
    fatBurned: "Grasa quemada",
    grams: "{value} g",
    equation: "Ecuación metabólica ACSM de {gait} ({vo2} ml/kg/min de VO₂).",
    gaitWalking: "caminata",
    gaitRunning: "carrera",
    tableTitle: "Calorías según la inclinación",
    tableSubtitle: "Mismo peso, velocidad y duración. Solo cambia la pendiente.",
    colIncline: "Inclinación",
    colMet: "MET",
    colCalories: "Calorías",
    colVsFlat: "vs llano",
    vsFlat: "+{percent}%",
  },
  resultCta: {
    headline: "Registra las calorías que quemas de verdad",
    description:
      "Steps cuenta cada paso en segundo plano y lo convierte en calorías reales quemadas cada día, sin registro manual.",
  },
  info: {
    title: "Cómo calculamos las calorías en cinta",
    intro:
      "Un solo valor MET no puede describir el trabajo en cinta, porque la pendiente cambia el coste energético a cada velocidad. Usamos las ecuaciones metabólicas ACSM, que estiman el consumo de oxígeno a partir de la velocidad y la pendiente por separado y luego lo convierten en calorías.",
    formulaTitle: "Las fórmulas",
    formulas: [
      { strong: "VO₂ al caminar", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ al correr", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S es la velocidad en metros por minuto, G la pendiente como fracción (5% = 0,05). La VO₂ está en ml/kg/min.",
      },
      { strong: "MET", rest: "= VO₂ ÷ 3,5, y kcal/min = MET × 3,5 × peso(kg) ÷ 200" },
      {
        strong: "Ejemplo:",
        rest: "70 kg a 5 km/h y 5% de pendiente dan una VO₂ de 19,3, unos 5,5 MET, aproximadamente 405 kcal por hora.",
      },
    ],
    note: "La ecuación de caminata se aplica por debajo de 6,5 km/h y la de carrera a partir de ahí, que es donde la mayoría pasa de una caminata rápida a un trote. Las estimaciones suponen que no te agarras a los pasamanos.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cuántas calorías queman 30 minutos en la cinta?",
      answer:
        "Un adulto de 70 kg (155 lb) que camina 30 minutos a 5 km/h (3,1 mph) en cinta plana quema unas 125 calorías. Sube la inclinación al 5% y la misma sesión quema unas 205 calorías. Al 10% se acerca a 285. La inclinación importa más que cualquier otro ajuste que puedas cambiar.",
    },
    {
      question: "¿La inclinación quema de verdad más calorías?",
      answer:
        "Sí, y bastante. Cada 1% de pendiente añade trabajo vertical al movimiento horizontal. A velocidades de caminata, un 5% de inclinación sube el coste energético cerca de un 60% respecto al llano, y un 10% puede más que duplicarlo, con la misma velocidad y duración.",
    },
    {
      question: "¿Cuántas calorías quema el entrenamiento 12-3-30?",
      answer:
        "12-3-30 significa 12% de inclinación, 3 mph, 30 minutos. Para un adulto de 70 kg son aproximadamente 300 calorías, frente a unas 120 calorías por los mismos 30 minutos a 3 mph en llano. La inclinación hace la mayor parte del trabajo: cerca del 60% del gasto total.",
    },
    {
      question: "¿Es precisa la lectura de calorías de la propia cinta?",
      answer:
        "Normalmente no. La mayoría de las máquinas asumen un peso por defecto e ignoran el peso que introduces en la consola, lo que suele inflar el gasto entre un 15 y un 25%. Un cálculo con tu peso real, tu velocidad y tu pendiente es más fiable.",
    },
    {
      question: "¿Quemo más calorías caminando en pendiente o corriendo en llano?",
      answer:
        "Pueden igualarse, pero necesitas una pendiente pronunciada. Caminar a 5 km/h con un 12% son unos 8,5 MET, básicamente lo mismo que trotar a 8 km/h en llano (8,6 MET). Con un 10% más suave, la caminata en pendiente es de 7,7 MET, así que un poco menos. La ventaja de caminar en pendiente es un coste energético comparable con mucho menos impacto articular.",
    },
    {
      question: "¿Debo agarrarme a los pasamanos?",
      answer:
        "No, si el objetivo es quemar calorías. Agarrarte a las barras pasa parte de tu peso a los brazos y puede recortar el gasto real un 20–25%, sobre todo en pendientes fuertes, mientras la consola sigue mostrando la cifra sin apoyo.",
    },
  ],
  cta: {
    title: "Registra tus entrenamientos en cinta",
    description:
      "Descarga la app Steps para registrar automáticamente tus caminatas, las calorías quemadas y tu progreso.",
  },
  sticky: "Cuenta tus pasos con Steps",
};

export default es;

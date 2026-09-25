import type { TreadmillInclineCalculatorMessages } from "./en";

const es: TreadmillInclineCalculatorMessages = {
  meta: {
    title: "Calculadora de inclinación de cinta: ritmo y desnivel",
    description:
      "Convierte la inclinación de la cinta en un ritmo equivalente en llano y mira el desnivel que subiste. 3 mph al 12% equivale a trotar a 4,7 mph en llano. Calculadora gratis basada en ACSM.",
    keywords: [
      "calculadora inclinación cinta",
      "calculadora ritmo cinta",
      "calculadora desnivel cinta",
      "calorías caminar en pendiente",
      "tabla conversión inclinación cinta",
      "equivalente ritmo 12-3-30",
      "pendiente de cinta a ritmo llano",
      "desnivel en cinta",
    ],
    ogTitle: "Calculadora de inclinación de cinta: ritmo y desnivel",
    ogDescription:
      "Convierte cualquier inclinación de la cinta en el ritmo en llano que vale y mira cuánto desnivel subiste. Calculadora gratis con las ecuaciones metabólicas ACSM.",
    ogImageAlt: "Calculadora de inclinación de cinta",
  },
  hero: {
    title: "Calculadora de inclinación de cinta",
    subtitle:
      "Convierte cualquier inclinación en el ritmo en llano que realmente vale y mira cuánto desnivel subiste. Las ecuaciones metabólicas ACSM valoran la pendiente en lugar de estimarla.",
  },
  calculator: {
    yourSetting: "Tu ajuste de la cinta",
    beltSpeed: "Velocidad de la cinta",
    incline: "Inclinación: {percent}%",
    duration: "Duración",
    minutes: "minutos",
    effortVsFlat: "Esfuerzo frente a la misma velocidad en llano",
    flatBelt: "Cinta plana: tu ritmo es tu esfuerzo",
    between:
      "Una pendiente del {grade}% a {speed} es más dura que cualquier ritmo de caminata en llano que pudieras sostener, y todavía más fácil que el trote en llano más lento: ninguna velocidad en llano la iguala.",
    sameEffort: "El mismo esfuerzo que {gait} en llano a {speed} ({pace}).",
    gaitWalk: "caminar",
    gaitJog: "trotar",
    kindWalk: "caminata",
    kindJog: "trote",
    betweenLabel: "entre una caminata y un trote",
    perKmPace: "{pace} por km",
    perMilePace: "{pace} por milla",
    yourPace: "Tu ritmo",
    perKm: "Por km",
    perMile: "Por milla",
    met: "MET",
    distance: "Distancia",
    distanceValue: "{km} km / {mi} mi",
    elevationTitle: "Desnivel subido",
    elevationSubtitle: "Pendiente del {grade}% durante {minutes} minutos a {speed}.",
    verticalMetres: "Metros verticales",
    verticalFeet: "Pies verticales",
    storeys: "Pisos",
    stairSteps: "Escalones",
    briskWalk:
      "Para que {speed} exija tanto como una caminata rápida a 6 km/h (3,7 mph) en llano, pon la inclinación en {grade}.",
    tableTitle: "Ritmo en llano equivalente según la inclinación",
    tableSubtitle: "Velocidad de la cinta fija en {speed}. Solo cambia la pendiente.",
    colIncline: "Inclinación",
    colFeelsLike: "Se siente como",
    colMet: "MET",
    colVsFlat: "vs llano",
    multiplier: "{value}x",
  },
  resultCta: {
    headline: "Entiende lo que valen de verdad tus caminatas",
    description:
      "Steps registra cada caminata en segundo plano y la convierte en distancia, desnivel y calorías reales, sin registro manual.",
  },
  info: {
    title: "Cómo calculamos los equivalentes de inclinación",
    intro:
      "Dos ajustes de la cinta son equivalentes cuando cuestan el mismo oxígeno. Estimamos el consumo de oxígeno a partir de la velocidad y la pendiente con las ecuaciones metabólicas ACSM y luego resolvemos al revés la ecuación en llano para hallar el ritmo con el mismo coste.",
    formulaTitle: "Las fórmulas",
    formulas: [
      { strong: "VO₂ al caminar", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ al correr", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S es la velocidad en metros por minuto, G la pendiente como fracción (5% = 0,05). La VO₂ está en ml/kg/min.",
      },
      {
        strong: "Multiplicador de esfuerzo",
        rest: "= 1 + 18G, que sale directamente al igualar las dos ecuaciones de caminata. Vale en cualquier pendiente.",
      },
      { strong: "Desnivel", rest: "= distancia de la cinta × G" },
      {
        strong: "Ejemplo:",
        rest: "4,8 km/h al 5% de pendiente son 5,3 MET, un multiplicador de 1,9× y 120 metros verticales en 30 minutos.",
      },
    ],
    note: "Las dos ecuaciones ACSM no se encuentran: caminar en llano llega como máximo a unos 14,3 ml/kg/min y correr en llano empieza cerca de 25,2. Las caminatas con pendiente moderada caen en medio, donde ningún ritmo en llano iguala el esfuerzo. La calculadora lo dice, en lugar de extrapolar una ecuación fuera del rango en el que se validó, y el multiplicador de esfuerzo sigue teniendo sentido en ambos casos.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Qué ritmo en llano equivale a caminar a 3 mph con un 12% de inclinación?",
      answer:
        "Aproximadamente un trote a 4,7 mph. Caminar a 3 mph con un 12% cuesta unos 29 ml/kg/min de oxígeno, alrededor de 8,3 MET. Ningún ritmo de caminata sostenible en llano llega ahí, así que la comparación honesta es un trote lento, no una caminata rápida. Por eso el entrenamiento 12-3-30 se siente mucho más duro de lo que sugiere su velocidad.",
    },
    {
      question: "¿Cómo convierto la inclinación de la cinta en un ritmo en llano?",
      answer:
        "El esfuerzo escala casi de forma lineal: una pendiente multiplica el coste energético de caminar por (1 + 18 × la pendiente en decimal), así que un 5% es 1,9 veces más duro que la misma velocidad en llano. Convertir ese multiplicador en una velocidad en llano solo funciona mientras la respuesta se queda en el rango de caminata, que a ritmos habituales significa pendientes por debajo de unos 2 a 3,5%. Más allá, el esfuerzo supera lo que produce cualquier caminata sostenible sin llegar todavía al trote más lento, y ningún ritmo en llano lo iguala.",
    },
    {
      question: "¿Cuánto desnivel gano en una cinta?",
      answer:
        "El desnivel vertical es la distancia de la cinta multiplicada por la pendiente. Treinta minutos a 5 km/h cubren 2,5 km y al 10% son 250 metros verticales, unos 820 pies, o unas 83 plantas. La cinta informa la pendiente como subida sobre la distancia de la cinta, que es exactamente lo que asume este cálculo.",
    },
    {
      question: "¿Un 1% de inclinación simula de verdad correr al aire libre?",
      answer:
        "Es una convención razonable, no una ley precisa. El ajuste del 1% viene de un estudio de 1996 de Jones y Doust, que encontró que una pendiente del 1% igualaba el coste energético de correr al aire libre por encima de unos 8 mph. A las velocidades más lentas a las que la mayoría camina o trota, la resistencia del aire es negligible y una cinta al 0% ya se acerca al esfuerzo al aire libre.",
    },
    {
      question: "¿Caminar en pendiente es mejor que correr en llano?",
      answer:
        "Para un coste energético comparable con mucho menos impacto, sí. Caminar a 5 km/h al 12% ronda los 8,5 MET, básicamente como un trote en llano a 8 km/h (8,6 MET), pero las fuerzas de reacción del suelo son mucho menores porque los dos pies nunca dejan la cinta a la vez. La contrapartida es que caminar en pendiente carga bastante más las pantorrillas y el tendón de Aquiles.",
    },
    {
      question: "¿Por qué una inclinación pequeña cambia tanto el esfuerzo?",
      answer:
        "Porque levantar el cuerpo en vertical sale caro respecto a moverlo en horizontal. En la ecuación ACSM de caminata el término vertical tiene un coeficiente de 1,8 frente a 0,1 del horizontal, así que cada 1% de pendiente suma cerca de un 18% al coste energético de caminar a la misma velocidad. Un cinco por ciento casi lo duplica y un doce por ciento lo triplica aproximadamente.",
    },
    {
      question: "¿Debes fiarte de la inclinación que marca la cinta?",
      answer:
        "Tómala como aproximada. La calibración de la cinta se desvía y muchas máquinas de consumo muestran la pendiente que ordena el motor, no una medida. La flexión de la plataforma bajo carga también reduce un poco la pendiente efectiva. Las relaciones de aquí se mantienen, pero los números absolutos heredan el error de la máquina.",
    },
  ],
  cta: {
    title: "Registra tus entrenamientos en cinta",
    description:
      "Descarga la app Steps para registrar automáticamente tus caminatas, las calorías quemadas y tu progreso.",
  },
  sticky: "Cuenta tus pasos con Steps",
  howTo: {
    name: "Cómo convertir la inclinación de la cinta en un ritmo en llano",
    description:
      "Introduce la velocidad de la cinta, la inclinación y la duración para ver el ritmo en llano que cuesta el mismo esfuerzo, cuánto endurece la pendiente y el desnivel que subiste.",
    steps: [
      {
        name: "Introduce la velocidad de la cinta",
        text: "Pon la velocidad que muestra la consola. Cambia entre km/h y mph; cada resultado sigue la unidad que elijas.",
      },
      {
        name: "Ajusta la inclinación",
        text: "Arrastra el control o toca un ajuste de 0% a 15%. Los ajustes cubren las pendientes de la mayoría de cintas domésticas, incluido el 12% del entrenamiento 12-3-30.",
      },
      {
        name: "Indica cuánto tiempo caminaste",
        text: "Duración en minutos. No cambia la equivalencia de ritmo, pero fija la distancia y el desnivel.",
      },
      {
        name: "Lee el ritmo en llano equivalente",
        text: "La cifra principal es el ritmo en llano que cuesta el mismo oxígeno. Por encima de un 3% aproximado de pendiente ningún ritmo de caminata coincide, así que la comparación pasa a un trote y lo dice.",
      },
      {
        name: "Revisa el desnivel y la tabla",
        text: "Mira la subida en metros verticales, pies, plantas y escalones, y luego compara cada pendiente habitual a tu velocidad en la tabla de equivalencia.",
      },
    ],
  },
};

export default es;

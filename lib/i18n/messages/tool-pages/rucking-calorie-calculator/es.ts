import type { RuckingCalorieCalculatorMessages } from "./en";

const es: RuckingCalorieCalculatorMessages = {
  meta: {
    title: "Calculadora de calorías de rucking: peso de la mochila, terreno y pendiente",
    description:
      "Calcula las calorías de rucking a partir del peso de la mochila, el ritmo, la pendiente y el terreno con la ecuación de Pandolf. Una persona de 70 kg con 15 kg durante una hora quema ~350 calorías. Calculadora gratis.",
    keywords: [
      "calculadora calorías rucking",
      "calorías marcha con mochila",
      "calorías quemadas rucking",
      "calculadora calorías chaleco lastrado",
      "calorías senderismo con mochila",
      "ecuación de Pandolf",
      "coste energético transporte de carga",
      "calorías caminar con mochila",
    ],
    ogTitle: "Calculadora de calorías de rucking: peso de la mochila, terreno y pendiente",
    ogDescription:
      "Calcula las calorías quemadas en rucking según el peso de la mochila, el ritmo, la pendiente y el terreno. Calculadora gratis con la ecuación de Pandolf para el transporte de carga.",
    ogImageAlt: "Calculadora de calorías de rucking",
  },
  hero: {
    title: "Calculadora de calorías de rucking",
    subtitle:
      "Calcula las calorías quemadas en rucking (marcha lastrada) según el peso de tu mochila, el ritmo, la pendiente y el terreno. La ecuación de Pandolf para el transporte de carga hace que el peso de la espalda cuente de verdad.",
  },
  calculator: {
    yourRuck: "Tu rucking",
    switchImperial: "Cambiar a lbs / mph",
    switchMetric: "Cambiar a kg / km/h",
    bodyWeight: "Peso corporal",
    packWeight: "Peso de la mochila",
    pace: "Ritmo",
    duration: "Duración",
    minutes: "minutos",
    grade: "Pendiente: {percent}%",
    terrain: "Terreno",
    terrains: {
      blacktop: {
        label: "Carretera asfaltada",
        inline: "carretera asfaltada",
        description: "Asfalto o cinta. La superficie de referencia.",
      },
      gravel: {
        label: "Camino de grava",
        inline: "camino de grava",
        description: "Camino de tierra o grava, matorral ligero.",
      },
      trail: {
        label: "Sendero",
        inline: "sendero",
        description: "Sendero compacto, con raíces y roca.",
      },
      "heavy-brush": {
        label: "Matorral denso",
        inline: "matorral denso",
        description: "Sotobosque espeso, sin un camino establecido.",
      },
      swampy: {
        label: "Terreno pantanoso",
        inline: "terreno pantanoso",
        description: "Suelo blando y saturado que cede bajo el pie.",
      },
      sand: {
        label: "Arena suelta",
        inline: "arena suelta",
        description: "Arena seca de playa. La superficie habitual más costosa.",
      },
    },
    terrainFactor: "{description} Factor de terreno {factor}.",
    caloriesBurned: "Calorías quemadas",
    packAdds:
      "La mochila de {load} suma {extra} kcal respecto a la misma caminata sin carga ({unloaded} kcal).",
    heavyLoad:
      "Esa mochila es el {percent}% de tu peso. Las cargas por encima de cerca de un tercio del peso corporal suben mucho el riesgo de lesión, y el modelo de Pandolf es menos fiable ahí. Sube poco a poco en lugar de saltar a esta carga.",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "Distancia",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "Mochila / peso corporal",
    equation:
      "Ecuación de Pandolf para el transporte de carga a {watts} vatios, {terrain}, pendiente del {grade}%.",
    tableTitle: "Calorías según el peso de la mochila",
    tableSubtitle: "Mismo ritmo, pendiente, terreno y duración. Solo cambia la carga.",
    colPack: "Mochila",
    colCalories: "Calorías",
    colVsUnloaded: "vs sin carga",
    vsUnloaded: "+{percent}%",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "Registra cada rucking automáticamente",
    description:
      "Steps cuenta tu distancia y tus pasos en segundo plano, así que tus salidas de rucking se anotan junto al resto de tu caminata.",
  },
  info: {
    title: "Cómo calculamos las calorías de rucking",
    intro:
      "Las tablas MET y las ecuaciones ACSM no tienen ningún término de carga: devuelven el mismo gasto tanto si la mochila está vacía como si lleva 30 kilogramos. Usamos la ecuación de Pandolf, hecha precisamente para valorar el transporte de carga.",
    formulaTitle: "La fórmula",
    formulas: [
      { strong: "M", rest: "= 1,5W + 2,0(W+L)(L/W)² + η(W+L)(1,5V² + 0,35VG)" },
      {
        strong: "",
        rest: "M es la tasa metabólica en vatios, W la masa corporal en kg, L la carga en kg, V la velocidad en m/s, G la pendiente en porcentaje y η el factor de terreno.",
      },
      { strong: "kcal/min", rest: "= vatios × 60 ÷ 4184" },
      {
        strong: "",
        rest: "El término central es la penalización de la carga y crece con (L/W)². Doblar la mochila hace más que doblar ese término.",
      },
      {
        strong: "Ejemplo:",
        rest: "70 kg con 20 kg a 4,8 km/h sobre asfalto son 360 vatios, unos 5,2 kcal por minuto.",
      },
    ],
    note: "Pandolf cubre la caminata en llano y en subida. La bajada necesita la corrección aparte de Santee, así que aquí las bajadas se tratan como llano en lugar de devolver una cifra que el modelo no puede sostener.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cuántas calorías quema el rucking?",
      answer:
        "Una persona de 70 kg (155 lb) haciendo rucking a 5 km/h sobre asfalto con una mochila de 15 kg (33 lb) quema unas 310 calorías por hora. La misma hora caminando sin carga son unas 265, así que la mochila explica unas 45. El peso de la mochila, la pendiente y el terreno mueven bastante esa cifra, por eso un solo número de calorías por hora engaña.",
    },
    {
      question: "¿El rucking quema más calorías que caminar?",
      answer:
        "Sí, y más de lo que sugiere solo el peso añadido. Llevar una carga cuesta energía dos veces: mueves la masa extra y pagas una penalización aparte porque la carga se transporta en lugar de formar parte del cuerpo. En la ecuación de Pandolf esa penalización crece con el cuadrado de la relación carga/peso, así que cada kilogramo adicional cuesta más que el anterior.",
    },
    {
      question: "¿Con cuánto peso deberías hacer rucking?",
      answer:
        "La mayoría de las guías empiezan a los principiantes en el 10 por ciento del peso corporal y suben como mucho hacia un tercio. Por encima de cerca de un tercio del peso, el riesgo de lesión en rodillas, zona lumbar y pies sube con fuerza, y el propio modelo de Pandolf se vuelve menos fiable porque se validó sobre todo por debajo de esa relación. Añade peso despacio, y antes de añadir distancia.",
    },
    {
      question: "¿El terreno cambia cuántas calorías quema el rucking?",
      answer:
        "Bastante. La ecuación de Pandolf aplica un factor de terreno al coste del movimiento: la carretera asfaltada es la referencia 1,0, el camino de tierra y el sendero unos 1,2, el matorral denso 1,5, el suelo pantanoso 1,8 y la arena suelta 2,1. El rucking sobre arena seca de playa cuesta aproximadamente el doble de energía de movimiento que el mismo rucking sobre asfalto.",
    },
    {
      question: "¿Qué es la ecuación de Pandolf?",
      answer:
        "Es el modelo de referencia del coste metabólico de llevar una carga, publicado por Pandolf, Givoni y Goldman en 1977 para el ejército de Estados Unidos. Predice la tasa metabólica en vatios a partir de la masa corporal, la carga, la velocidad de marcha, la pendiente y el terreno. A diferencia de las tablas MET y de las ecuaciones ACSM, trata la carga como un dato real en lugar de ignorarla.",
    },
    {
      question: "¿Por qué esta calculadora no acepta pendientes de bajada?",
      answer:
        "Porque la ecuación de Pandolf solo se validó para caminar en llano y en subida. Con una pendiente negativa devuelve costes demasiado bajos para ser creíbles: bajar sale más barato que el llano en la fórmula, pero no de forma indefinida en la realidad. Modelar bien la bajada necesita la corrección aparte de Santee, así que esta calculadora trata las bajadas como llano en lugar de informar un número que no puede defender.",
    },
    {
      question: "¿El rucking es mejor que correr para perder grasa?",
      answer:
        "Es más fácil de mantener, y eso suele importar más que el ritmo por minuto. El rucking ronda los 6 a 8 MET según la carga y la pendiente, por debajo de la mayoría de las carreras, pero el bajo impacto permite mucho más volumen semanal sin el estrés articular que corta los bloques de carrera. Lo que impulsa la pérdida de grasa es el gasto energético total de la semana, no la intensidad de una sola sesión.",
    },
  ],
  cta: {
    title: "Registra tus salidas de rucking",
    description:
      "Descarga la app Steps para registrar automáticamente tus caminatas, las calorías quemadas y tu progreso.",
  },
  sticky: "Cuenta tus pasos con Steps",
  howTo: {
    name: "Cómo calcular las calorías de rucking",
    description:
      "Introduce tu peso, el peso de la mochila, el ritmo, la pendiente y el terreno para obtener las calorías quemadas y cuánto de ese gasto se debe a la carga.",
    steps: [
      {
        name: "Introduce el peso del cuerpo y de la mochila",
        text: "Ambos en kilogramos o libras. La penalización de la carga crece con el cuadrado de la relación mochila/cuerpo, así que importan las dos cifras, no solo la mochila.",
      },
      {
        name: "Ajusta el ritmo y la duración",
        text: "Ritmo de rucking en km/h o mph y cuánto tiempo estuviste en movimiento. Juntos fijan la distancia recorrida.",
      },
      {
        name: "Añade la pendiente",
        text: "Pendiente media de subida, en porcentaje. Las bajadas se tratan como llano, porque la ecuación de Pandolf solo está validada para caminar en llano y en subida.",
      },
      {
        name: "Elige el terreno",
        text: "Desde carretera asfaltada hasta sendero, matorral denso y arena suelta. El terreno multiplica el coste del movimiento, y la arena es más del doble que el asfalto.",
      },
      {
        name: "Lee las calorías y la aportación de la carga",
        text: "La calculadora devuelve las calorías totales, cuántas vienen solo de la mochila, la tasa metabólica en vatios y una tabla de calorías con cargas de rucking habituales.",
      },
    ],
  },
};

export default es;

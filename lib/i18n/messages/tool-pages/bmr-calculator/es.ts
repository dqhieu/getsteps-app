import type { BmrCalculatorMessages } from "./en";

const es: BmrCalculatorMessages = {
  meta: {
    title: "Calculadora de metabolismo basal: BMR en 3 fórmulas",
    description:
      "Calcula tu metabolismo basal con Mifflin-St Jeor, Harris-Benedict y Katch-McArdle a la vez. Un hombre de 30 años y 75 kg quema unas 1.699 calorías al día en reposo. Calculadora gratis.",
    keywords: [
      "calculadora BMR",
      "calculadora de metabolismo basal",
      "metabolismo en reposo",
      "ecuación de Mifflin-St Jeor",
      "ecuación de Harris-Benedict",
      "fórmula de Katch-McArdle",
      "cuántas calorías quemo en reposo",
      "BMR y TDEE",
      "calculadora de metabolismo",
    ],
    ogTitle: "Calculadora de metabolismo basal: BMR en 3 fórmulas",
    ogDescription:
      "Calcula tu metabolismo basal con tres fórmulas clínicas a la vez, más las calorías diarias en cada nivel de actividad.",
    ogImageAlt: "Calculadora de metabolismo basal",
  },
  hero: {
    title: "Calculadora de metabolismo basal",
    subtitle:
      "Descubre las calorías que tu cuerpo quema en reposo completo. Tres fórmulas clínicas corren a la vez, para que veas la diferencia en lugar de un solo número que finge ser exacto.",
  },
  calculator: {
    details: "Tus datos",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    years: "años",
    weight: "Peso",
    height: "Altura",
    bodyFat: "Grasa corporal %",
    bodyFatOptional: "(opcional: desbloquea Katch-McArdle)",
    bodyFatPlaceholder: "p. ej. 20",
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
    calculate: "Calcular el metabolismo basal",
    results: "Tus resultados",
    bmr: "BMR",
    atRest: "calorías/día en reposo",
    maintenance: "Mantenimiento",
    maintenanceAt: "en {level}",
    leanMass:
      "Masa magra: {mass}. Como indicaste un porcentaje de grasa, la cifra principal usa Katch-McArdle.",
    kgValue: "{value} kg",
    share: "Aunque pases el día sentado, el metabolismo basal supone cerca del {percent} % de las calorías que quemas.",
    formulasTitle: "Las tres fórmulas",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "Harris-Benedict revisada",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "Validada en una población moderna. El estándar clínico actual y la opción más fiable cuando no se conoce la grasa corporal.",
      harris:
        "La original de 1919, revisada en 1984. Tiende a quedar un 5 % alta porque su grupo de estudio era más delgado y más activo que la población actual.",
      katch:
        "Parte de la masa magra e ignora sexo y altura, así que es la opción más precisa para cuerpos delgados o musculosos.",
      katchLocked: "Necesita un porcentaje de grasa corporal. Introdúcelo arriba para ver esta estimación.",
    },
    used: "Usada",
    calValue: "{value} cal",
    byActivity: "Calorías diarias según el nivel de actividad",
    resultCta: {
      headline: "El metabolismo basal es el suelo. Los pasos son la palanca.",
      description:
        "El gasto en reposo apenas se mueve, pero todo lo que está por encima sí. Steps registra tu actividad sola y muestra lo que suma al número que acabas de calcular.",
    },
  },
  info: {
    title: "Cómo calculamos el metabolismo basal",
    intro:
      "Tres ecuaciones se usan en la clínica y discrepan lo bastante como para importar. En lugar de elegir una y ocultar la diferencia, esta calculadora ejecuta las tres.",
    formulaTitle: "Las fórmulas",
    formulas: [
      {
        title: "Mifflin-St Jeor (1990)",
        lines: [
          "Hombres: (10 × peso kg) + (6,25 × altura cm) − (5 × edad) + 5",
          "Mujeres: (10 × peso kg) + (6,25 × altura cm) − (5 × edad) − 161",
        ],
      },
      {
        title: "Harris-Benedict revisada (1984)",
        lines: [
          "Hombres: 88,362 + (13,397 × peso) + (4,799 × altura) − (5,677 × edad)",
          "Mujeres: 447,593 + (9,247 × peso) + (3,098 × altura) − (4,330 × edad)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: [
          "370 + (21,6 × masa magra kg), donde masa magra = peso × (1 − % de grasa corporal)",
        ],
      },
    ],
    exampleLabel: "Ejemplo:",
    example:
      "un hombre de 30 años, 75 kg y 175 cm da 1.699 con Mifflin-St Jeor y 1.763 con Harris-Benedict. Con un 20 % de grasa, Katch-McArdle devuelve 1.666.",
    primary:
      "Mifflin-St Jeor es la cifra principal, salvo que indiques un porcentaje de grasa: entonces toma el relevo Katch-McArdle. Es la única de las tres que mide el tejido que de verdad sostiene el gasto en reposo, en lugar de inferirlo de la altura y el sexo.",
    activityFactors:
      "Multiplica el metabolismo basal por un factor de actividad para obtener el TDEE: 1,2 sedentario, 1,375 ligeramente activo, 1,55 moderadamente activo, 1,725 activo, 1,9 muy activo. La calculadora muestra los cinco.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Qué es el metabolismo basal?",
      answer:
        "El metabolismo basal (BMR) es la energía que tu cuerpo gasta sin hacer nada: respirar, mover la sangre, mantener la temperatura, reparar células. Se mide tumbado, despierto, tras un ayuno de 12 horas. En la mayoría de los adultos supone del 60 al 75 % de las calorías diarias, y es el mayor componente de lo que quemas.",
    },
    {
      question: "¿Cuál es la diferencia entre BMR y RMR?",
      answer:
        "El BMR se mide en laboratorio estricto: reposo completo, en ayunas, en una sala térmicamente neutra. El metabolismo en reposo (RMR) se mide con condiciones más laxas y sale cerca de un 10 % más alto porque incluye algo de digestión y pequeños movimientos. En el día a día los términos se mezclan, y toda calculadora en línea, esta incluida, estima en realidad algo más cercano al RMR.",
    },
    {
      question: "¿Qué fórmula de metabolismo basal es más precisa?",
      answer:
        "Mifflin-St Jeor para la mayoría. Se validó con calorimetría indirecta en una población moderna y acierta dentro de un 10 % en cerca del 80 % de los adultos. Harris-Benedict, incluso en la revisión de 1984, queda un 5 % alta porque su grupo de 1919 era más delgado y más activo. Katch-McArdle supera a ambas si conoces tu grasa corporal, porque parte de la masa magra, el tejido que de verdad mueve el gasto en reposo.",
    },
    {
      question: "¿Cuál es la diferencia entre BMR y TDEE?",
      answer:
        "El metabolismo basal es lo que quemas en reposo completo. El TDEE (gasto energético diario total) es el BMR multiplicado por un factor de actividad: suma movimiento, ejercicio y el coste de digerir. El TDEE siempre es mayor: incluso un día del todo sedentario ronda 1,2 veces el BMR. Fija tus objetivos de calorías contra el TDEE, no contra el BMR.",
    },
    {
      question: "¿Debo comer a la altura de mi metabolismo basal para adelgazar?",
      answer:
        "No. Comer a la altura del BMR es comer como si hubieras pasado el día inmóvil, y crea un déficit de varios cientos a mil calorías antes de moverte. Es lo bastante agresivo como para costarte músculo y, en muchas personas, cae por debajo del suelo de 1.200 (mujeres) o 1.500 (hombres) calorías. Resta de 250 a 500 calorías del TDEE.",
    },
    {
      question: "¿Por qué mi metabolismo basal es más bajo de lo que esperaba?",
      answer:
        "El tamaño corporal manda: las personas más pequeñas y ligeras obtienen cifras más bajas, y cada fórmula resta la edad. También importa la composición: el músculo quema en reposo unas tres veces más que la grasa por kilogramo, así que dos personas del mismo peso pueden diferir en 200 calorías o más. Tras un déficit largo, la termogénesis adaptativa puede bajar el BMR real un 10 a un 15 % por debajo de la cifra prevista.",
    },
    {
      question: "¿Puedo aumentar mi metabolismo basal?",
      answer:
        "Algo, y despacio. Ganar músculo es la única palanca duradera: cada kilogramo de músculo suma unas 13 calorías al día en reposo, así que un año serio de fuerza puede darte de 50 a 100 calorías. Es real, pero modesto. Moverte más cambia el TDEE mucho más que cualquier cosa que hagas con el BMR, y por eso el recuento de pasos mueve la aguja antes que los trucos metabólicos.",
    },
  ],
  cta: {
    title: "Sigue lo que quemas por encima del reposo",
    description:
      "Descarga la app Steps para contar cada paso sola y ver cómo tu gasto calórico diario se construye sobre el metabolismo basal.",
  },
  sticky: "Sigue tus pasos con Steps",
  howTo: {
    name: "Cómo calcular tu metabolismo basal",
    description:
      "Introduce sexo, edad, peso y altura para obtener el metabolismo basal con tres fórmulas clínicas, más las calorías diarias en cada nivel de actividad.",
    steps: [
      {
        name: "Introduce tus datos corporales",
        text: "Indica sexo, edad, peso y altura. El peso cambia entre kilogramos y libras, la altura entre centímetros y pies/pulgadas.",
      },
      {
        name: "Añade el porcentaje de grasa si lo conoces",
        text: "Opcional. Al indicarlo se desbloquea Katch-McArdle, que parte de la masa magra y es la más precisa para cuerpos delgados o musculosos.",
      },
      {
        name: "Elige tu nivel de actividad",
        text: "De sedentario a muy activo. No cambia el metabolismo basal, pero decide qué cifra de calorías de mantenimiento se destaca.",
      },
      {
        name: "Lee tu BMR y las calorías de mantenimiento",
        text: "La calculadora devuelve tu metabolismo basal, las tres estimaciones a la vez y las calorías diarias totales en cada uno de los cinco niveles.",
      },
    ],
  },
};

export default es;

import type { WaistToHipRatioCalculatorMessages } from "./en";

const es: WaistToHipRatioCalculatorMessages = {
  meta: {
    title: "Calculadora de índice cintura-cadera: bandas de riesgo de la OMS",
    description:
      "Calcula tu índice cintura-cadera según los umbrales de la OMS. El riesgo sube por encima de 0,90 en hombres y de 0,85 en mujeres. Calculadora gratuita con control del perímetro de cintura.",
    keywords: [
      "calculadora índice cintura cadera",
      "calculadora ICC",
      "índice cintura cadera",
      "calculadora de forma corporal",
      "calculadora de grasa visceral",
      "riesgo del perímetro de cintura",
      "forma de manzana o de pera",
      "índice cintura cadera OMS",
    ],
    ogTitle: "Calculadora de índice cintura-cadera: bandas de riesgo de la OMS",
    ogDescription:
      "Calcula tu índice cintura-cadera y mira dónde cae frente a los umbrales de riesgo cardiovascular de la OMS.",
  },
  hero: {
    title: "Calculadora de índice cintura-cadera",
    subtitle:
      "Dos medidas con cinta predicen mejor el riesgo cardiovascular que el IMC, porque muestran dónde guarda grasa el cuerpo, no solo cuánta hay.",
  },
  calculator: {
    measurements: "Tus medidas",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    genderHint: "La OMS usa umbrales de riesgo distintos para hombres y mujeres.",
    waistHip: "Cintura y cadera",
    waist: "cintura",
    hip: "cadera",
    howToMeasure: "Cómo medir",
    waistLabel: "Cintura:",
    waistMeasure:
      "el punto más estrecho entre la última costilla y la parte alta del hueso de la cadera, al final de una espiración normal.",
    hipLabel: "Cadera:",
    hipMeasure: "el punto más ancho alrededor de los glúteos.",
    tapeMeasure:
      "Mantén la cinta nivelada y ajustada sin comprimir la piel. Mide sobre la piel o ropa fina.",
    calculate: "Calcular mi índice",
    results: "Tus resultados",
    ratioLabel: "Índice cintura-cadera",
    waistCheck: "Control del perímetro de cintura",
    targetWaist:
      "Con tu medida actual de cadera, una cintura de {waist} o menos te situaría en la banda de riesgo bajo.",
    bandsTitle: "Bandas de riesgo de la OMS para {group}",
    men: "hombres",
    women: "mujeres",
    groupMen: "los hombres",
    groupWomen: "las mujeres",
    rangeAndAbove: "{min} y más",
    rangeBelow: "por debajo de {max}",
    rangeBetween: "{min} – {max}",
    disclaimer:
      "El índice cintura-cadera es un cribado, no un diagnóstico. Sigue dónde está la grasa y no cuánta hay, y por eso predice mejor el riesgo cardiovascular que el IMC solo. Comenta cualquier resultado en banda moderada o alta con un médico.",
    levels: {
      low: {
        label: "Riesgo bajo",
        description:
          "La grasa no está concentrada alrededor del abdomen. Es el patrón de menor riesgo para {group}.",
      },
      moderate: {
        label: "Riesgo moderado",
        description:
          "Algo de grasa central. Se asocia a un aumento medible del riesgo cardiovascular y de diabetes tipo 2.",
      },
      high: {
        label: "Riesgo alto",
        description:
          "Riesgo sustancialmente elevado de enfermedad cardiovascular y diabetes tipo 2. Conviene comentarlo con un médico.",
      },
    },
    waistVerdict: {
      high: "Una cintura de {waist} cm está en o por encima de la marca de {threshold} cm en la que la OMS señala un riesgo sustancialmente aumentado para {group}.",
      moderate:
        "Una cintura de {waist} cm está por encima de la marca de {threshold} cm en la que la OMS señala un riesgo aumentado para {group}.",
      low: "Una cintura de {waist} cm está por debajo del umbral de {threshold} cm que usa la OMS para {group}.",
    },
  },
  resultCta: {
    headline: "Caminar actúa sobre la grasa que esto mide",
    description:
      "La actividad aeróbica regular reduce la grasa visceral de forma específica, incluso con el peso estable. Steps registra la tuya automáticamente para que el hábito se mantenga.",
  },
  sticky: "Registra tus pasos con Steps",
  info: {
    title: "Cómo calculamos tu banda de riesgo",
    intro:
      "La cuenta es trivial. El valor está en los umbrales, que vienen de la consulta de expertos de la OMS de 2008 sobre el perímetro de cintura y el índice cintura-cadera.",
    formulaTitle: "La fórmula y los umbrales",
    formulas: [
      { name: "ICC", body: "perímetro de cintura ÷ perímetro de cadera" },
      { name: "Hombres:", body: "bajo por debajo de 0,90, moderado de 0,90 a 0,99, alto de 1,0 en adelante" },
      { name: "Mujeres:", body: "bajo por debajo de 0,80, moderado de 0,80 a 0,84, alto de 0,85 en adelante" },
      { name: "Solo cintura (hombres):", body: "riesgo aumentado a 94 cm, sustancialmente aumentado a 102 cm" },
      { name: "Solo cintura (mujeres):", body: "riesgo aumentado a 80 cm, sustancialmente aumentado a 88 cm" },
      {
        name: "Ejemplo:",
        body: "un hombre con 90 cm de cintura y 100 cm de cadera obtiene 0,90, el límite bajo de la banda moderada.",
      },
    ],
    conflict:
      "El control del perímetro de cintura es independiente del índice, porque pueden no coincidir. Unas caderas anchas pueden llevar el índice a la banda de riesgo bajo mientras la cintura sola seguiría marcada. Si entran en conflicto, actúa según la lectura más prudente.",
    screening:
      "Es una medida de cribado, no un diagnóstico. Un resultado en banda moderada o alta merece comentarse con un médico, sobre todo junto con la tensión, la glucosa en ayunas o los lípidos.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cuál es un índice cintura-cadera saludable?",
      answer:
        "La OMS sitúa el riesgo bajo por debajo de 0,90 en hombres y de 0,80 en mujeres. Entre 0,90 y 0,99 en hombres, o 0,80 y 0,84 en mujeres, el riesgo es moderado. A partir de 1,0 en hombres y de 0,85 en mujeres, el riesgo está sustancialmente elevado. Los umbrales de las mujeres son más bajos porque acumulan de forma natural más grasa en caderas y muslos: el mismo índice significa más grasa abdominal en una mujer que en un hombre.",
    },
    {
      question: "¿Por qué el índice cintura-cadera importa más que el IMC?",
      answer:
        "Porque ve dónde está la grasa, y el IMC no puede. La grasa visceral alrededor de los órganos abdominales es metabólicamente activa: libera señales inflamatorias y ácidos grasos libres directo a la circulación portal. La grasa de caderas y muslos no se comporta así. Dos personas con el mismo IMC pueden tener riesgos muy distintos según la distribución, y el ICC lo detecta.",
    },
    {
      question: "¿Cómo mido bien la cintura y la cadera?",
      answer:
        "La cintura en el punto más estrecho entre la última costilla y la parte alta del hueso de la cadera, al final de una espiración normal, sin meter el abdomen. La cadera en el punto más ancho alrededor de los glúteos. Mantén la cinta nivelada y ajustada sin comprimir la piel, sobre la piel o ropa fina. Medir a otra altura es el error más habitual: usa las mismas referencias cada vez.",
    },
    {
      question: "¿Cuál es la diferencia entre forma de manzana y de pera?",
      answer:
        "La forma de manzana acumula grasa alrededor del centro, con un índice más alto y mayor riesgo metabólico. La forma de pera la lleva en caderas y muslos, con un índice más bajo y un perfil de riesgo más favorable. La distribución es en gran parte genética y está muy influida por las hormonas sexuales, por eso muchas mujeres se desplazan hacia un patrón de manzana tras la menopausia aunque no ganen peso.",
    },
    {
      question: "¿Puedo reducir mi índice cintura-cadera?",
      answer:
        "Sí, aunque no dirigiéndolo de forma directa. La reducción localizada no funciona: ningún ejercicio abdominal quema de forma preferente la grasa del abdomen. Lo que funciona es un déficit calórico global, y la grasa visceral suele ser de las primeras reservas que se movilizan, así que la pérdida inicial suele mejorar el índice antes que el peso total. La actividad aeróbica regular reduce la grasa visceral de forma específica, incluso con el peso estable.",
    },
    {
      question: "¿Caminar reduce la grasa abdominal?",
      answer:
        "Reduce la grasa visceral, que es la parte que importa aquí. La actividad aeróbica moderada y regular baja la grasa visceral de forma medible aunque el peso apenas cambie, y caminar es la forma más fácil de sostener el volumen necesario. Los ensayos suelen usar de 150 a 300 minutos por semana de actividad moderada, es decir, de 30 a 60 minutos casi todos los días.",
    },
    {
      question: "¿Debo usar el perímetro de cintura o el índice?",
      answer:
        "Los dos, y por eso esta calculadora informa de ambos. El índice solo puede engañar: alguien con una cintura grande y unas caderas inusualmente anchas puede caer en la banda de riesgo bajo aunque la OMS marcaría el perímetro de cintura por separado. Esos umbrales son 94 y 102 cm en hombres, 80 y 88 cm en mujeres. Si las dos medidas no coinciden, quédate con la lectura más prudente.",
    },
  ],
  cta: {
    title: "Camina la grasa que importa",
    description:
      "Descarga la app Steps para registrar tu caminata diaria y crear el hábito aeróbico que reduce la grasa visceral.",
  },
  howTo: {
    name: "Cómo calcular tu índice cintura-cadera",
    description:
      "Mide la cintura y la cadera, introduce ambas y mira dónde cae tu índice frente a los umbrales de riesgo cardiovascular de la OMS.",
    steps: [
      {
        name: "Selecciona tu sexo",
        text: "La OMS fija umbrales más bajos para las mujeres, que acumulan de forma natural más grasa en caderas y muslos.",
      },
      {
        name: "Mide tu cintura",
        text: "Encuentra el punto más estrecho entre la última costilla y la parte alta del hueso de la cadera. Mide al final de una espiración normal, sin meter el abdomen.",
      },
      {
        name: "Mide tu cadera",
        text: "Mide el punto más ancho alrededor de los glúteos, con la cinta nivelada y ajustada sin comprimir la piel.",
      },
      {
        name: "Lee tu banda de riesgo",
        text: "La calculadora devuelve tu índice, la banda de riesgo de la OMS, un control aparte del perímetro de cintura y la cintura que te situaría en la banda de riesgo bajo.",
      },
    ],
  },
};

export default es;

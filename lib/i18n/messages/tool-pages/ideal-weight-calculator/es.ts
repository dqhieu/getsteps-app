import type { IdealWeightCalculatorMessages } from "./en";

const es: IdealWeightCalculatorMessages = {
  meta: {
    title: "Calculadora de peso ideal: 4 fórmulas y rango de IMC saludable",
    description:
      "Devine, Robinson, Miller y Hamwi juntas, más el rango de IMC saludable. Un hombre de 175 cm queda entre 68,7 y 72 kg. Calculadora gratuita de peso ideal.",
    keywords: [
      "calculadora de peso ideal",
      "calculadora de peso corporal ideal",
      "calculadora de peso saludable",
      "cuánto debería pesar",
      "fórmula de Devine",
      "fórmula de Robinson",
      "fórmula de Hamwi",
      "peso ideal según la altura",
      "rango de peso saludable",
    ],
    ogTitle: "Calculadora de peso ideal: 4 fórmulas y rango de IMC saludable",
    ogDescription:
      "Cuatro fórmulas clínicas de peso ideal juntas, más el rango de IMC saludable para tu altura.",
  },
  hero: {
    title: "Calculadora de peso ideal",
    subtitle:
      "Cuatro fórmulas clínicas juntas, con el rango de IMC saludable. Ver cuánto discrepan es lo más útil de esta calculadora.",
  },
  calculator: {
    details: "Tus datos",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    height: "Altura",
    currentWeight: "Peso actual",
    optional: "(opcional)",
    placeholderKg: "p. ej. 78",
    placeholderLbs: "p. ej. 172",
    calculate: "Calcular peso ideal",
    results: "Tus resultados",
    formulaAverage: "Media de las fórmulas",
    range: "rango {min}–{max}",
    healthyBmiRange: "Rango de IMC saludable",
    to: "hasta {weight}",
    verdictWithin:
      "Tu peso está dentro del rango de IMC saludable para tu altura. La media de las fórmulas es un punto dentro de esa banda, no un objetivo que tengas que alcanzar.",
    verdictAbove: "Tu peso está {amount} por encima del rango de IMC saludable para tu altura.",
    verdictBelow: "Tu peso está {amount} por debajo del rango de IMC saludable para tu altura.",
    fourFormulas: "Las cuatro fórmulas",
    disclaimer:
      "Las cuatro fórmulas solo ven tu altura y tu sexo. No tienen en cuenta la masa muscular ni la complexión, así que un cuerpo musculoso saldrá alto en todas. El rango de IMC saludable es la respuesta más útil: es una banda, no un único objetivo.",
    formulas: {
      devine: {
        name: "Devine",
        note: "La fórmula más citada y todavía la referencia para dosificar fármacos. Escrita para calcular dosis, no objetivos corporales.",
      },
      robinson: {
        name: "Robinson",
        note: "Una revisión de Devine con una muestra más amplia. Da un peso más bajo que Devine en personas altas.",
      },
      miller: {
        name: "Miller",
        note: "La más plana de las cuatro: la altura cambia menos el resultado, así que es la más alta en personas bajas y la más baja en personas altas.",
      },
      hamwi: {
        name: "Hamwi",
        note: "La más antigua, desarrollada para el cuidado de la diabetes. El aumento por pulgada más pronunciado, así que es la más alta en personas altas.",
      },
    },
  },
  resultCta: {
    headline: "Los hábitos mueven el número. Nada más.",
    description:
      "Steps registra tu actividad diaria de forma automática, para que construyas la constancia que de verdad mueve el peso corporal a lo largo de los meses.",
  },
  sticky: "Registra tus pasos con Steps",
  info: {
    title: "Cómo calculamos el peso ideal",
    intro:
      "Las cuatro fórmulas tienen la misma forma: un peso base a 5 ft, más una cantidad fija por cada pulgada por encima. Solo cambian las constantes.",
    formulasTitle: "Las fórmulas",
    formulas: [
      {
        name: "Devine (1974)",
        body: "Hombres: 50 kg + 2,3 kg por pulgada por encima de 5 ft. Mujeres: 45,5 kg + 2,3 kg por pulgada.",
      },
      {
        name: "Robinson (1983)",
        body: "Hombres: 52 kg + 1,9 kg por pulgada. Mujeres: 49 kg + 1,7 kg por pulgada.",
      },
      {
        name: "Miller (1983)",
        body: "Hombres: 56,2 kg + 1,41 kg por pulgada. Mujeres: 53,1 kg + 1,36 kg por pulgada.",
      },
      {
        name: "Hamwi (1964)",
        body: "Hombres: 48 kg + 2,7 kg por pulgada. Mujeres: 45,5 kg + 2,2 kg por pulgada.",
      },
      {
        name: "Rango de IMC saludable",
        body: "Peso para un IMC de 18,5 a 24,9 a tu altura.",
      },
      {
        name: "Ejemplo:",
        body: "un hombre de 175 cm obtiene 70,5 (Devine), 68,9 (Robinson), 68,7 (Miller) y 72,0 (Hamwi), con una media de 70,0 kg. La banda de IMC saludable es de 56,7 a 76,3 kg.",
      },
    ],
    notice:
      "La media de las cuatro fórmulas queda cerca del centro de una banda de IMC de casi 20 kg. Esa brecha es el resumen honesto: estas ecuaciones dan un punto plausible dentro de un rango saludable mucho más amplio, no un objetivo que hayas fallado si no estás encima.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Qué es el peso corporal ideal?",
      answer:
        "Es una estimación clínica de un peso saludable a partir de la altura y el sexo, y conviene saber de dónde sale: las cuatro fórmulas habituales se crearon para dosificar fármacos, no para objetivos corporales. Devine escribió la suya en 1974 para calcular dosis de gentamicina. Después se adoptaron como metas de salud, y por eso se comportan de forma extraña en ese uso.",
    },
    {
      question: "¿Qué fórmula de peso ideal debo usar?",
      answer:
        "Ninguna sola. Difieren de 3 a 4 kg a una altura media y más en los extremos, y eso dice cuánta precisión hay de verdad. La media de las cuatro es un punto intermedio razonable, pero el rango de IMC saludable es más útil porque te da una banda de unos 20 kg en lugar de un número que alcanzar.",
    },
    {
      question: "¿Por qué las cuatro fórmulas dan respuestas distintas?",
      answer:
        "Se construyeron con poblaciones distintas y no coinciden en cuánto peso debe sumar cada pulgada de altura. Hamwi suma 2,7 kg por pulgada en hombres, Miller solo 1,41. A 175 cm la diferencia es pequeña, pero a 195 cm Hamwi da unos 87 kg y Miller unos 78. Cuanto más alto o más bajo seas, más se separan.",
    },
    {
      question: "¿El peso ideal es preciso en personas musculosas?",
      answer:
        "No, y es el fallo más claro de las fórmulas. Solo ven altura y sexo, así que no distinguen 80 kg de músculo de 80 kg de grasa. Un deportista entrenado saldrá con sobrepeso en las cuatro y también en el IMC. Si tienes músculo de verdad, el porcentaje de grasa y el índice cintura-cadera dicen mucho más que cualquier meta de peso.",
    },
    {
      question: "¿Cuál es un rango de IMC saludable?",
      answer:
        "De 18,5 a 24,9. En peso a 175 cm son 56,7 a 76,3 kg, una banda de casi 20 kg. Esa anchura es el punto: el peso saludable es un rango, no un número, y dónde te sitúas depende de tu complexión, tu masa muscular y lo que puedas mantener.",
    },
    {
      question: "¿Debería intentar alcanzar mi peso ideal?",
      answer:
        "Solo si coincide con algo sostenible para ti. Los resultados de salud siguen más los hábitos que un número en la báscula: quien está activo con un peso más alto suele estar mejor que quien es sedentario con un peso más bajo. Si tu peso ya está en el rango de IMC saludable, perseguir el punto medio de una fórmula no aporta mucho.",
    },
  ],
  cta: {
    title: "Construye el hábito que mueve el número",
    description:
      "Descarga la app Steps para registrar tus pasos diarios y mantener la constancia durante los meses que de verdad cambian el peso.",
  },
  howTo: {
    name: "Cómo calcular tu peso ideal",
    description:
      "Introduce tu sexo y tu altura para ver el peso corporal ideal según Devine, Robinson, Miller y Hamwi, más el rango de IMC saludable.",
    steps: [
      {
        name: "Selecciona tu sexo",
        text: "Cada una de las cuatro fórmulas usa un peso base y un incremento por pulgada distintos para hombres y mujeres.",
      },
      {
        name: "Introduce tu altura",
        text: "Cambia entre centímetros y pies/pulgadas. La altura es la única variable que las cuatro fórmulas usan de verdad.",
      },
      {
        name: "Añade tu peso actual si quieres una comparación",
        text: "Opcional. Muestra cuánto te alejas de la media de las fórmulas y si caes dentro del rango de IMC saludable.",
      },
      {
        name: "Lee el rango, no el número",
        text: "La calculadora devuelve las cuatro estimaciones, su media y la banda de peso del IMC saludable para tu altura, que es la respuesta más amplia y útil.",
      },
    ],
  },
};

export default es;

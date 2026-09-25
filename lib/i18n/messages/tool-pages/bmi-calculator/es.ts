import type { BmiCalculatorMessages } from "./en";

const es: BmiCalculatorMessages = {
  meta: {
    title: "Calculadora de IMC: calcula tu índice de masa corporal",
    description:
      "Calcula tu índice de masa corporal (IMC) y descubre si estás en un rango de peso saludable. Obtén consejos de salud y recomendaciones de pasos personalizados.",
    keywords: [
      "calculadora IMC",
      "índice de masa corporal",
      "calcular IMC",
      "calculadora de peso saludable",
      "tabla IMC",
      "peso según altura",
      "categorías de IMC",
      "IMC saludable",
    ],
    ogTitle: "Calculadora de IMC",
    ogDescription:
      "Calcula tu índice de masa corporal (IMC) y descubre si estás en un rango de peso saludable.",
  },
  hero: {
    title: "Calculadora de IMC",
    subtitle:
      "Calcula tu índice de masa corporal para conocer tu categoría de peso y obtener recomendaciones de salud personalizadas.",
  },
  calculator: {
    measurements: "Tus medidas",
    weight: "Peso",
    height: "Altura",
    yourBmi: "Tu IMC",
    healthyRange: "Rango de peso saludable",
    recommendedSteps: "Pasos diarios recomendados",
    aboveRange: "Estás {amount} por encima del rango de peso saludable para tu altura.",
    belowRange: "Estás {amount} por debajo del rango de peso saludable para tu altura.",
    categoriesTitle: "Categorías de IMC",
    categoriesSubtitle: "Clasificación del IMC en adultos de la Organización Mundial de la Salud",
    categoryColumn: "Categoría",
    rangeColumn: "Rango de IMC",
    categories: {
      underweight: "Bajo peso",
      normal: "Normal",
      overweight: "Sobrepeso",
      "obese-1": "Obesidad clase I",
      "obese-2": "Obesidad clase II",
      "obese-3": "Obesidad clase III",
    },
  },
  info: {
    title: "Entender el IMC",
    intro:
      "El índice de masa corporal (IMC) es un cálculo sencillo a partir de tu altura y tu peso que estima la grasa corporal y evalúa si tienes un peso saludable. Se usa ampliamente como herramienta de detección de categorías de peso.",
    formulaTitle: "La fórmula",
    formula: "IMC = peso (kg) ÷ altura (m)²",
    exampleLabel: "Ejemplo:",
    example: "Una persona de 70 kg que mide 1,75 m tiene un IMC = 70 ÷ (1,75 × 1,75) = 22,9",
    faqTitle: "Preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Cuál es un IMC saludable?",
      answer:
        "Un IMC entre 18,5 y 24,9 se considera saludable para la mayoría de los adultos. Sin embargo, el IMC no tiene en cuenta la masa muscular, la densidad ósea ni la distribución de la grasa, así que es solo un factor para valorar tu salud general.",
    },
    {
      question: "¿El IMC es preciso para todo el mundo?",
      answer:
        "El IMC puede no ser preciso en deportistas con mucha masa muscular, personas mayores o ciertos tipos de cuerpo. Es una herramienta de detección útil, pero conviene valorarla junto con otros indicadores de salud.",
    },
    {
      question: "¿Cómo puedo mejorar mi IMC?",
      answer:
        "Si tu IMC está fuera del rango saludable, apuesta por cambios sostenibles: actividad física regular (como caminar a diario), alimentación equilibrada y un buen descanso. Consulta a un profesional sanitario para recibir consejos personalizados.",
    },
    {
      question: "¿Cuántos pasos debería caminar según mi IMC?",
      answer:
        "Para mantener un IMC saludable, apunta a 10.000 pasos al día. Si quieres perder peso, plantéate 12.000 o más. Empieza por tu nivel actual y ve sumando 1.000 pasos por semana.",
    },
    {
      question: "¿El IMC es diferente en los niños?",
      answer:
        "Sí, el IMC de niños y adolescentes se calcula de otra forma y se compara con percentiles por edad y sexo. Esta calculadora está pensada para adultos de 18 años o más. En el caso de los niños, consulta con un pediatra.",
    },
  ],
  cta: {
    title: "Sigue tu camino hacia una vida más sana",
    description:
      "Descarga la app Steps para registrar tu actividad diaria y avanzar hacia un peso más saludable.",
  },
  howTo: {
    name: "Cómo calcular tu IMC",
    description:
      "El índice de masa corporal (IMC) estima tu categoría de composición corporal a partir de la altura y el peso, según las categorías para adultos de los CDC.",
    steps: [
      {
        name: "Introduce tu altura",
        text: "Introduce la altura en centímetros o en pies/pulgadas.",
      },
      {
        name: "Introduce tu peso",
        text: "Introduce el peso en kilogramos o libras.",
      },
      {
        name: "Consulta tu IMC y tu categoría",
        text: "La calculadora muestra tu IMC y la categoría de salud de los CDC (bajo peso, saludable, sobrepeso, obesidad) con una breve descripción de cada una.",
      },
    ],
  },
};

export default es;

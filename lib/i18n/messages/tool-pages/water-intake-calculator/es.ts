import type { WaterIntakeCalculatorMessages } from "./en";

const es: WaterIntakeCalculatorMessages = {
  meta: {
    title: "Calculadora de agua: ¿cuánta deberías beber al día?",
    description:
      "Calcula tu agua diaria según el peso, el nivel de actividad y el clima. Recomendaciones de hidratación personalizadas.",
    keywords: [
      "calculadora de agua",
      "cuánta agua beber",
      "agua diaria",
      "calculadora de hidratación",
      "agua al día",
      "recomendación diaria de agua",
    ],
    ogTitle: "Calculadora de agua: ¿cuánta deberías beber al día?",
    ogDescription:
      "Calcula tu agua diaria según el peso, el nivel de actividad y el clima. Recomendaciones de hidratación personalizadas.",
    ogImageAlt: "Calculadora de agua",
  },
  hero: {
    title: "Calculadora de agua",
    subtitle:
      "Descubre exactamente cuánta agua deberías beber cada día según tu peso y tu nivel de actividad.",
  },
  intro:
    "Usa esta calculadora gratis para encontrar tu objetivo de hidratación diario. Introduce tu peso y tu nivel de actividad y obtén al momento una recomendación en litros, onzas y tazas.",
  calculator: {
    yourDetails: "Tus datos",
    bodyWeight: "Peso",
    activityLevel: "Nivel de actividad",
    climate: "Clima",
    activities: {
      sedentary: "Sedentario",
      moderate: "Moderadamente activo",
      active: "Activo",
      very_active: "Muy activo",
    },
    climates: {
      temperate: "Templado",
      hot: "Caluroso / húmedo",
    },
    dailyIntake: "Agua diaria",
    perDay: "L / día",
    ozPerDay: "oz / día",
    cupsPerDay: "tazas / día",
    glassesPerDay: "vasos / día",
    tipLabel: "Consejo de hidratación",
    tips: {
      sedentary: "Prueba a beber un vaso de agua cada 2 horas para mantenerte hidratado durante el día.",
      moderate:
        "Bebe antes, durante y después de cada sesión. Lleva una botella reutilizable para no perder el ritmo.",
      active: "Añade 500 ml los días de entrenamiento y repón electrolitos si sudas mucho.",
      very_active:
        "Pésate antes y después de las sesiones intensas: bebe 500 ml por cada 0,5 kg que pierdas en sudor.",
    },
  },
  info: {
    title: "Por qué importa la hidratación",
  },
  faq: [
    {
      question: "¿Cuánta agua deberías beber al día?",
      answer:
        "La norma tan citada de «8 vasos al día» es solo una aproximación. Un método más preciso parte del peso: unos 33 ml por kilogramo. Para un adulto de 70 kg son unos 2,3 litros, pero el nivel de actividad y el clima pueden subir bastante esa cifra. Esta calculadora aplica esos ajustes automáticamente.",
    },
    {
      question: "¿El ejercicio cambia cuánta agua necesitas?",
      answer:
        "Sí, y bastante. Durante el ejercicio pierdes agua por el sudor y la respiración. Un entrenamiento moderado puede sumar 500 ml o más, y una sesión intensa o un deporte de resistencia puede pedir 1–2 litros extra. Bebe antes de tener sed: la sed es una señal tardía de deshidratación. Esta calculadora sube tu objetivo un 20–60% según el nivel de actividad que elijas.",
    },
    {
      question: "¿El café y el té cuentan en el agua diaria?",
      answer:
        "En parte. El café y el té aportan al líquido total, pero la cafeína tiene un leve efecto diurético que compensa parte del beneficio. Una regla útil es contar las bebidas con cafeína al 50–75% de su volumen en el objetivo del día y beber medio vaso de agua extra por cada taza de café.",
    },
    {
      question: "¿El clima cambia tus necesidades de hidratación?",
      answer:
        "El calor o la humedad aumentan el sudor incluso en reposo y suben el requisito base en 500–1000 ml al día. La altitud también aumenta la pérdida por una respiración más rápida. Elegir «Caluroso / húmedo» en la calculadora suma 500 ml al total del día. En días especialmente calurosos, o tras actividad al aire libre con calor, bebe todavía más.",
    },
  ],
  cta: {
    title: "Sigue tu camino de salud",
    description: "Registra tus pasos diarios y mantente activo con la app Steps.",
  },
  howTo: {
    name: "Cómo calcular el agua diaria",
    description:
      "Introduce el peso, el nivel de actividad y el clima para estimar el agua del día en litros u onzas.",
    steps: [
      {
        name: "Introduce tu peso",
        text: "Las necesidades de agua crecen con el tamaño del cuerpo. Introduce el peso en kilogramos o libras.",
      },
      {
        name: "Elige tu nivel de actividad",
        text: "Añade líquido si haces ejercicio, sudas mucho o vives en un clima caluroso.",
      },
      {
        name: "Lee tu objetivo de agua del día",
        text: "La calculadora devuelve el agua del día en litros y onzas, más un desglose en vasos.",
      },
    ],
  },
};

export default es;

import type { Vo2MaxCalculatorMessages } from "./en";

const es: Vo2MaxCalculatorMessages = {
  meta: {
    title: "Calculadora de VO2 máx: estima tu nivel aeróbico",
    description:
      "Estima tu VO2 máx con el método de frecuencia cardíaca o el test de carrera de Cooper de 12 minutos. Descubre tu nivel aeróbico y cómo mejorarlo.",
    keywords: [
      "calculadora VO2 máx",
      "calculadora vo2max",
      "calculadora de forma aeróbica",
      "calculadora test de Cooper",
      "cómo calcular el VO2 máx",
      "VO2 máx por edad",
      "test de forma cardiovascular",
    ],
    ogTitle: "Calculadora de VO2 máx: estima tu nivel aeróbico",
    ogDescription:
      "Estima tu VO2 máx con el método de frecuencia cardíaca o el test de carrera de Cooper de 12 minutos. Descubre tu nivel aeróbico y cómo mejorarlo.",
    ogImageAlt: "Calculadora de VO2 máx",
  },
  hero: {
    title: "Calculadora de VO2 máx",
    subtitle:
      "Estima tu VO2 máx — la referencia de la forma aeróbica — con tu frecuencia cardíaca o un test de carrera de 12 minutos.",
  },
  intro:
    "Introduce tu edad, sexo y frecuencia cardíaca en reposo (o la distancia de la carrera de Cooper de 12 minutos) para estimar tu VO2 máx y ver dónde estás en tu grupo de edad.",
  calculator: {
    method: "Método",
    heartRateMethod: "Método de frecuencia cardíaca",
    cooperMethod: "Carrera de Cooper de 12 min",
    gender: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    years: { one: "año", other: "años" },
    restingHeartRate: "Frecuencia cardíaca en reposo",
    bpm: "bpm",
    restingHint: "Mídela a primera hora de la mañana, antes de levantarte.",
    distanceLabel: "Distancia recorrida en 12 minutos",
    km: "km",
    miles: "millas",
    distanceHint: "Corre en una pista llana durante exactamente 12 minutos y anota tu distancia.",
    calculate: "Calcular el VO2 máx",
    yourEstimate: "Tu VO2 máx estimado",
    unit: "ml/kg/min",
    improvementTip: "Consejo para mejorar",
    disclaimer:
      "El VO2 máx es la referencia de la forma aeróbica: el oxígeno máximo que tu cuerpo puede usar durante un esfuerzo intenso. Cuanto más alto, mejor es tu capacidad cardiovascular. Las normas varían con la edad; estos umbrales están simplificados como orientación general.",
    categories: {
      superior: {
        label: "Superior",
        description:
          "Capacidad aeróbica excepcional. Tienes una forma cardiovascular destacada, típica de atletas de resistencia de competición.",
        tip: "Mantenla con un entrenamiento periodizado: combina tiradas largas, sesiones de ritmo y semanas de recuperación para evitar el sobreentrenamiento.",
      },
      excellent: {
        label: "Excelente",
        description:
          "Forma aeróbica muy por encima de la media. Tu corazón y tus pulmones llevan oxígeno de forma eficiente a los músculos que trabajan.",
        tip: "Añade una sesión de intervalos de VO2 máx por semana (por ejemplo, 5×3 min a esfuerzo alto) para entrar en el rango Superior.",
      },
      good: {
        label: "Bueno",
        description:
          "Forma por encima de la media. Tienes una base aeróbica sólida para la actividad diaria y el deporte recreativo.",
        tip: "Busca 3-4 sesiones de cardio por semana. Incluye una carrera a ritmo y una fácil más larga para construir la base.",
      },
      fair: {
        label: "Regular",
        description:
          "Capacidad aeróbica media. Un entrenamiento regular puede mejorar de forma clara tu VO2 máx en 8-12 semanas.",
        tip: "Empieza con carreras de 30 minutos en zona 2, 3 veces por semana. Añade una sesión HIIT semanal después de 4 semanas de base.",
      },
      poor: {
        label: "Bajo",
        description:
          "Capacidad aeróbica por debajo de la media. La buena noticia: este nivel responde rápido a un entrenamiento constante.",
        tip: "Empieza con caminatas rápidas de 20-30 min, 5 veces por semana. Pasa a intervalos de carrera-caminata después de 2-3 semanas.",
      },
    },
  },
  info: {
    title: "VO2 máx — preguntas frecuentes",
  },
  faq: [
    {
      question: "¿Qué es el VO2 máx?",
      answer:
        "El VO2 máx es la tasa máxima a la que tu cuerpo puede consumir oxígeno durante un ejercicio intenso, medida en mililitros de oxígeno por kilogramo de peso corporal y por minuto (ml/kg/min). Se considera la referencia de la forma aeróbica y la salud cardiovascular. Un VO2 máx más alto significa que el corazón, los pulmones y los músculos trabajan juntos con más eficiencia para entregar y usar oxígeno durante un esfuerzo sostenido.",
    },
    {
      question: "¿Qué es un buen VO2 máx?",
      answer:
        "En hombres, un VO2 máx de 40–50 ml/kg/min se considera bueno y por encima de 55, excelente. En mujeres, 35–45 es bueno y por encima de 50, excelente. Los atletas de resistencia de élite, como maratonianos y ciclistas, suelen alcanzar 60–85 ml/kg/min, valores que reflejan años de adaptación cardiovascular. Un adulto no entrenado suele estar en los 30 en mujeres y en la parte baja de los 40 en hombres.",
    },
    {
      question: "¿Cómo puedo mejorar mi VO2 máx?",
      answer:
        "Los métodos más eficaces son el entrenamiento por intervalos de alta intensidad (HIIT), las carreras a ritmo y las tiradas largas y lentas (LSD). Las sesiones HIIT — por ejemplo, 4–6 intervalos de 3–5 minutos cerca del esfuerzo máximo — estresan directamente el sistema aeróbico y producen las mayores ganancias de VO2 máx. Combinadas con dos o tres carreras fáciles en zona 2 por semana, mejoras del 10–20 % son habituales en 8–12 semanas para principiantes y deportistas con un entrenamiento moderado.",
    },
    {
      question: "¿Qué es el test de carrera de Cooper de 12 minutos?",
      answer:
        "El test de Cooper, desarrollado por el Dr. Kenneth Cooper en 1968 para la evaluación física del ejército de EE. UU., consiste en correr lo más lejos posible en exactamente 12 minutos sobre una superficie llana. La distancia recorrida predice el VO2 máx con la fórmula: VO2max = (distanceMeters − 504,9) / 44,73. Sigue siendo una de las pruebas de campo más usadas en ciencias del deporte porque no requiere equipo de laboratorio: solo una pista medida y un cronómetro.",
    },
    {
      question: "¿El VO2 máx baja con la edad?",
      answer:
        "Sí. A partir de unos 25 años, el VO2 máx baja de media alrededor de un 1 % al año en personas sedentarias. El entrenamiento aeróbico regular frena mucho ese descenso: personas activas de 60 y 70 años suelen mantener valores de VO2 máx comparables a los de personas sedentarias 20 años más jóvenes. La clave es el ejercicio cardiovascular constante: incluso cantidades moderadas de carrera, ciclismo o natación conservan la capacidad aeróbica hasta edades avanzadas.",
    },
  ],
  cta: {
    title: "Sigue tu progreso aeróbico",
    description: "Registra tu actividad diaria y mejora tu forma aeróbica con la app Steps.",
  },
  howTo: {
    name: "Cómo estimar tu VO2 máx",
    description:
      "Estima el VO2 máx a partir de la frecuencia cardíaca en reposo y la máxima, o con el test de carrera de Cooper de 12 minutos.",
    steps: [
      {
        name: "Elige el método",
        text: "El método de frecuencia cardíaca (edad + frecuencia cardíaca en reposo) o el test de Cooper (distancia recorrida en 12 minutos).",
      },
      {
        name: "Introduce los valores",
        text: "Indica la edad y la frecuencia cardíaca en reposo, o la distancia recorrida en 12 minutos de carrera a tope.",
      },
      {
        name: "Lee tu estimación de VO2 máx",
        text: "La calculadora devuelve un VO2 máx estimado en ml/kg/min más tu percentil de forma para tu edad y sexo.",
      },
    ],
  },
};

export default es;

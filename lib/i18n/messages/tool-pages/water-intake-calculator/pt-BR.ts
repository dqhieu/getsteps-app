import type { WaterIntakeCalculatorMessages } from "./en";

const ptBR: WaterIntakeCalculatorMessages = {
  meta: {
    title: "Calculadora de água: quanto você deve beber por dia?",
    description:
      "Calcule sua água diária com base no peso, no nível de atividade e no clima. Recomendações de hidratação personalizadas.",
    keywords: [
      "calculadora de água",
      "quanta água beber",
      "água diária",
      "calculadora de hidratação",
      "água por dia",
      "recomendação diária de água",
    ],
    ogTitle: "Calculadora de água: quanto você deve beber por dia?",
    ogDescription:
      "Calcule sua água diária com base no peso, no nível de atividade e no clima. Recomendações de hidratação personalizadas.",
    ogImageAlt: "Calculadora de água",
  },
  hero: {
    title: "Calculadora de água",
    subtitle:
      "Descubra exatamente quanta água você deve beber por dia com base no peso e no nível de atividade.",
  },
  intro:
    "Use esta calculadora grátis para achar sua meta diária de hidratação. Informe o peso e o nível de atividade para receber na hora uma recomendação em litros, onças e xícaras.",
  calculator: {
    yourDetails: "Seus dados",
    bodyWeight: "Peso",
    activityLevel: "Nível de atividade",
    climate: "Clima",
    activities: {
      sedentary: "Sedentário",
      moderate: "Moderadamente ativo",
      active: "Ativo",
      very_active: "Muito ativo",
    },
    climates: {
      temperate: "Temperado",
      hot: "Quente / úmido",
    },
    dailyIntake: "Água diária",
    perDay: "L / dia",
    ozPerDay: "oz / dia",
    cupsPerDay: "xícaras / dia",
    glassesPerDay: "copos / dia",
    tipLabel: "Dica de hidratação",
    tips: {
      sedentary: "Tente beber um copo de água a cada 2 horas para se manter hidratado ao longo do dia.",
      moderate:
        "Beba antes, durante e depois de cada treino. Leve uma garrafa reutilizável para não sair do ritmo.",
      active: "Some 500 ml nos dias de treino e reponha eletrólitos se você suar muito.",
      very_active:
        "Pese-se antes e depois de sessões intensas: beba 500 ml para cada 0,5 kg perdido no suor.",
    },
  },
  info: {
    title: "Por que a hidratação importa",
  },
  faq: [
    {
      question: "Quanta água você deve beber por dia?",
      answer:
        "A regra tão citada de “8 copos por dia” é só uma aproximação. Um método mais preciso parte do peso: cerca de 33 ml por quilograma. Para um adulto de 70 kg são cerca de 2,3 litros, mas o nível de atividade e o clima podem elevar bastante esse número. Esta calculadora aplica esses ajustes automaticamente.",
    },
    {
      question: "O exercício muda quanta água você precisa?",
      answer:
        "Sim, e bastante. Durante o exercício você perde água pelo suor e pela respiração. Um treino moderado pode somar 500 ml ou mais, e uma sessão intensa ou um esporte de endurance pode pedir 1–2 litros a mais. Beba antes de sentir sede: a sede é um sinal tardio de desidratação. Esta calculadora aumenta sua meta em 20–60% conforme o nível de atividade escolhido.",
    },
    {
      question: "Café e chá contam na água do dia?",
      answer:
        "Em parte. Café e chá contribuem para o líquido total, mas a cafeína tem um leve efeito diurético que compensa parte do benefício. Uma regra prática é contar bebidas com cafeína em cerca de 50–75% do volume na meta do dia e beber meio copo de água a mais para cada xícara de café.",
    },
    {
      question: "O clima muda suas necessidades de hidratação?",
      answer:
        "Tempo quente ou úmido aumenta o suor mesmo em repouso e eleva a necessidade de base em 500–1000 ml por dia. A altitude também aumenta a perda por uma respiração mais rápida. Escolher “Quente / úmido” na calculadora soma 500 ml ao total do dia. Em dias especialmente quentes, ou depois de atividade ao ar livre no calor, beba ainda mais.",
    },
  ],
  cta: {
    title: "Acompanhe sua jornada de saúde",
    description: "Registre seus passos diários e mantenha-se ativo com o app Steps.",
  },
  howTo: {
    name: "Como calcular a água diária",
    description:
      "Informe o peso, o nível de atividade e o clima para estimar a água do dia em litros ou onças.",
    steps: [
      {
        name: "Informe seu peso",
        text: "A necessidade de água acompanha o tamanho do corpo. Informe o peso em quilogramas ou libras.",
      },
      {
        name: "Escolha seu nível de atividade",
        text: "Some líquido se você se exercita, sua muito ou vive em um clima quente.",
      },
      {
        name: "Leia sua meta de água do dia",
        text: "A calculadora devolve a água do dia em litros e onças, além de uma divisão em copos.",
      },
    ],
  },
};

export default ptBR;

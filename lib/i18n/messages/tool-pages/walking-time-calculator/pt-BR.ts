import type { WalkingTimeCalculatorMessages } from "./en";

const ptBR: WalkingTimeCalculatorMessages = {
  meta: {
    title: "Calculadora de tempo de caminhada: 1 km ≈ 12 min, 1 milha ≈ 18 min",
    description:
      "Quanto tempo para caminhar 1 km? ~12 min. 1 milha? ~18 min. 5 km? ~60 min. Calculadora grátis para qualquer distância em ritmo lento, normal, acelerado ou rápido.",
    keywords: [
      "tempo de caminhada",
      "calculadora de tempo de caminhada",
      "quanto tempo para caminhar 5 km",
      "tempo para caminhar 8 km",
      "quanto tempo para caminhar uma milha",
      "tempo pela distância",
      "calculadora de ritmo de caminhada",
      "quanto tempo para caminhar 10000 passos",
      "calculadora de duração da caminhada",
    ],
    ogTitle: "Calculadora de tempo de caminhada: 1 km ≈ 12 min, 1 milha ≈ 18 min",
    ogDescription:
      "1 km ≈ 12 min, 1 milha ≈ 18 min, 5 km ≈ 60 min em ritmo normal. Calculadora grátis para qualquer distância.",
    ogImageAlt: "Calculadora de tempo de caminhada",
  },
  hero: {
    title: "Calculadora de tempo de caminhada",
    subtitle:
      "Quanto tempo leva para caminhar 5 km, 8 km ou 28 milhas? Informe qualquer distância e veja estimativas para ritmo lento, normal, acelerado e rápido.",
  },
  resultCta: {
    headline: "Registre cada caminhada automaticamente",
    description:
      "O Steps anota seu tempo, distância e ritmo em segundo plano, para você ver como as caminhadas reais se somam.",
  },
  stickyCta: "Acompanhe seus passos com o Steps",
  calculator: {
    title: "Calcular o tempo de caminhada",
    distance: "Distância",
    miles: "milhas",
    walkingSpeed: "Velocidade da caminhada",
    speeds: {
      slow: { label: "Lento", description: "3,2 km/h", inline: "lento" },
      normal: { label: "Normal", description: "5,0 km/h", inline: "normal" },
      brisk: { label: "Acelerado", description: "6,4 km/h", inline: "acelerado" },
      fast: { label: "Rápido", description: "7,2 km/h", inline: "rápido" },
    },
    includeBreaks: "Incluir pausas (5 min a cada 30 min)",
    walkingTime: "Tempo de caminhada",
    breaksDetail: "{walking} caminhando + {breaks} min de pausa",
    distanceLabel: "Distância",
    stepsLabel: "Passos",
    caloriesLabel: "Calorias",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "Tempos de referência",
    referenceSubtitle: "Tempo para caminhar distâncias comuns em ritmo {pace} ({speed} km/h)",
    colDistance: "Distância",
    colTime: "Tempo",
    hoursMinutes: "{hours} h {minutes} min",
    hoursOnly: "{hours} h",
    minutesOnly: "{minutes} min",
    distances: ["1 km", "1 milha", "2 km", "3 km", "5 km", "5 milhas", "10 km", "Meia maratona"],
  },
  info: {
    title: "Guia de velocidade da caminhada",
    intro:
      "A velocidade muda conforme o condicionamento, o terreno e o objetivo. Entender os ritmos ajuda você a planejar as caminhadas.",
    paceTitle: "Guia de ritmos",
    paces: [
      {
        label: "Lento (3,2 km/h / 2 mph):",
        text: "Um passeio tranquilo, bom para recuperação ou conversa",
      },
      {
        label: "Normal (5 km/h / 3,1 mph):",
        text: "Ritmo médio da maioria dos adultos",
      },
      {
        label: "Acelerado (6,4 km/h / 4 mph):",
        text: "Caminhada com propósito que eleva a frequência cardíaca",
      },
      {
        label: "Rápido (7,2 km/h / 4,5 mph):",
        text: "Caminhada vigorosa, no limite do trote",
      },
    ],
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "Quanto tempo leva para caminhar 1 km?",
      answer:
        "Em ritmo normal (5 km/h), leva cerca de 12 minutos para caminhar 1 km. Em ritmo lento (3,2 km/h) são ~19 minutos, e em ritmo acelerado (6,4 km/h) você termina em cerca de 9 minutos. Isso dá uns 1.300 passos para um adulto médio.",
    },
    {
      question: "Quanto tempo leva para caminhar 5 km?",
      answer:
        "Em ritmo normal (5 km/h), leva cerca de 60 minutos para caminhar 5 km. Em ritmo acelerado (6,4 km/h), você completa em cerca de 47 minutos.",
    },
    {
      question: "Quanto tempo leva para caminhar 1 milha?",
      answer:
        "Uma milha leva cerca de 15-20 minutos em ritmo normal. Quem caminha mais rápido faz em 12-15 minutos.",
    },
    {
      question: "Quanto tempo leva para caminhar 10.000 passos?",
      answer:
        "10.000 passos equivalem a cerca de 7-8 km (4-5 milhas). Em ritmo normal, isso leva cerca de 1 hora e 20-40 minutos. Você não precisa fazer tudo de uma vez: distribua ao longo do dia.",
    },
    {
      question: "Quanto tempo leva para caminhar 7 km?",
      answer:
        "Em ritmo normal (5 km/h), leva cerca de 84 minutos (1 hora e 24 min) para caminhar 7 km. Em ritmo acelerado (6,4 km/h), você termina em cerca de 66 minutos. Isso dá uns 9.100 passos para um adulto médio.",
    },
    {
      question: "Quanto tempo leva para caminhar 8 km?",
      answer:
        "Caminhar 8 km leva cerca de 96 minutos (1 hora e 36 min) em ritmo normal (5 km/h), ou cerca de 75 minutos em ritmo acelerado. São aproximadamente 10.400 passos.",
    },
    {
      question: "Devo incluir pausas no tempo de caminhada?",
      answer:
        "Em caminhadas de mais de 30 minutos, pausas curtas ajudam a manter a energia e a evitar o cansaço. A calculadora pode acrescentar 5 minutos de pausa a cada 30 minutos de caminhada se você ativar essa opção.",
    },
  ],
  precomputedTitle: "Tempos de caminhada já calculados",
  precomputed: [
    "Quanto tempo para caminhar 10.000 passos",
    "Quanto tempo para caminhar 5 milhas",
    "Quanto tempo para caminhar 3 milhas",
    "Quanto tempo para caminhar 1 milha",
  ],
  allConversions: "Todas as conversões →",
  cta: {
    title: "Registre suas caminhadas automaticamente",
    description:
      "Baixe o app Steps para acompanhar automaticamente tempo, distância e ritmo da caminhada.",
  },
  howTo: {
    name: "Como usar a calculadora de tempo de caminhada",
    description:
      "Informe uma distância e um ritmo para obter o tempo estimado em minutos — em quilômetros, milhas ou a partir de uma contagem de passos.",
    steps: [
      {
        name: "Informe a distância",
        text: "Digite a distância que você pretende caminhar. Você pode alternar entre quilômetros e milhas ou informar uma contagem de passos.",
      },
      {
        name: "Escolha um ritmo",
        text: "Escolha lento (3,2 km/h), normal (5 km/h), acelerado (6,4 km/h) ou rápido (7,2 km/h). Normal é o padrão para um adulto típico.",
      },
      {
        name: "Leia o tempo de caminhada",
        text: "A calculadora mostra os minutos estimados para cobrir a distância em cada ritmo, além de uma estimativa do total de passos.",
      },
    ],
  },
};

export default ptBR;

import type { MarathonPacePredictorMessages } from "./en";

const ptBR: MarathonPacePredictorMessages = {
  meta: {
    title: "Previsor de maratona: estime o tempo a partir de qualquer resultado",
    description:
      "Correu 5 km ou 10 km? Preveja na hora os tempos de maratona e meia maratona com a fórmula de Riegel. Calculadora gratuita com tabelas de pace e dicas de treino.",
    keywords: [
      "previsor de maratona",
      "previsor de tempo de prova",
      "calculadora de tempo de maratona",
      "previsor de meia maratona",
      "calculadora da fórmula de Riegel",
      "prever tempo de maratona",
      "converter 5 km em tempo de maratona",
    ],
    ogTitle: "Previsor de maratona: estime o tempo a partir de qualquer resultado",
    ogDescription:
      "Correu 5 km ou 10 km? Preveja na hora os tempos de maratona e meia maratona com a fórmula de Riegel.",
    ogImageAlt: "Previsor de maratona",
  },
  hero: {
    title: "Previsor de maratona",
    subtitle: "Informe um resultado recente para prever os tempos em todas as distâncias padrão.",
  },
  intro:
    "Informe um tempo e uma distância recentes para prever na hora os tempos de 5 km, 10 km, meia maratona e maratona com a fórmula de Riegel, a referência para previsão de tempos de prova.",
  calculator: {
    distanceLabel: "Sua distância de prova",
    customDistanceLabel: "Distância (km)",
    finishTimeLabel: "Seu tempo de chegada",
    hour: "h",
    minute: "min",
    second: "s",
    invalidDistance: "Informe uma distância válida.",
    invalidTime: "Informe um tempo válido.",
    predict: "Prever os tempos",
    resultsTitle: "Tempos de chegada previstos",
    distanceColumn: "Distância",
    timeColumn: "Tempo",
    paceKmColumn: "Pace (km)",
    paceMileColumn: "Pace (mi)",
    speedColumn: "Velocidade",
    you: "você",
    footnote:
      "As previsões usam a fórmula de Riegel (fator de fadiga 1,06). São mais precisas para provas recentes com esforço parecido.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Meia maratona",
      marathon: "Maratona",
      custom: "Personalizada (km)",
    },
  },
  info: {
    title: "Sobre a previsão de tempos de prova",
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "A fórmula de Riegel é precisa?",
      answer:
        "A fórmula de Riegel fica dentro de ±5–10% para corredores bem treinados que preveem entre distâncias parecidas. A precisão cai com grandes saltos de distância (por exemplo, de 5 km para maratona) ou quando a prova informada não foi no esforço máximo.",
    },
    {
      question: "O que é a fórmula de Riegel?",
      answer:
        "T2 = T1 × (D2/D1)^1,06, em que T1 é o tempo conhecido, D1 a distância conhecida, D2 a distância-alvo e T2 o tempo previsto. O expoente 1,06 representa o aumento da fadiga em distâncias mais longas.",
    },
    {
      question: "Posso prever uma maratona a partir de um 5 km?",
      answer:
        "Sim, mas a previsão será menos precisa. A fórmula funciona melhor quando a prova de entrada está perto da distância-alvo. Para maratona, um 10 km ou uma meia maratona recentes dão a estimativa mais confiável.",
    },
    {
      question: "Qual é um bom tempo de maratona?",
      answer:
        "Iniciante: 4:30–5:30 | intermediário: 3:30–4:30 | avançado: abaixo de 3:30 | elite: abaixo de 2:30. O tempo médio de maratona fica em torno de 4:30 para homens e 4:55 para mulheres.",
    },
    {
      question: "Como uso isso para dosar o pace da prova?",
      answer:
        "Use a coluna de pace da distância-alvo para a estratégia por quilômetro. Se o pace de maratona previsto é 5:30/km, mire um pouco mais lento na primeira metade (5:35/km) e uma parcial negativa na segunda.",
    },
  ],
  cta: {
    title: "Treine melhor com o Steps: Workout & Pedometer",
    description:
      "Treine melhor acompanhando os passos e a atividade diários no app Steps: Workout & Pedometer.",
  },
  howTo: {
    name: "Como prever seu tempo de maratona",
    description:
      "Informe uma distância e um tempo de prova recentes para prever o tempo na maratona (e em 5 km, 10 km e meia).",
    steps: [
      {
        name: "Informe uma distância e um tempo conhecidos",
        text: "Use um esforço recente e forte — 5 km, 10 km, meia maratona ou qualquer distância que você correu há pouco.",
      },
      {
        name: "Leia os tempos previstos",
        text: "Com a fórmula de Riegel, a calculadora prevê os tempos de 5 km, 10 km, meia maratona e maratona.",
      },
    ],
  },
};

export default ptBR;

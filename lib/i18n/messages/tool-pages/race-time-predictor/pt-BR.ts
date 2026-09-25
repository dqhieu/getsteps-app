import type { RaceTimePredictorMessages } from "./en";

const ptBR: RaceTimePredictorMessages = {
  meta: {
    title: "Previsor de tempo de prova: 5 km, 10 km, meia e maratona",
    description:
      "Previsor gratuito — informe seu pace para ver o tempo de chegada, ou defina um tempo-alvo para achar o pace que você precisa. Resultados na hora para 5 km, 10 km, meia maratona e maratona.",
    keywords: [
      "previsor de tempo de prova",
      "calculadora de tempo de chegada",
      "qual pace para meia maratona abaixo de 2 horas",
      "calculadora de tempo de 5 km",
      "calculadora de pace de maratona",
      "calculadora de tempo-alvo de corrida",
    ],
    ogTitle: "Previsor de tempo de prova: 5 km, 10 km, meia e maratona",
    ogDescription:
      "Previsor gratuito — informe seu pace para ver o tempo de chegada, ou defina um tempo-alvo para achar o pace que você precisa. Resultados na hora para 5 km, 10 km, meia maratona e maratona.",
    ogImageAlt: "Previsor de tempo de prova",
  },
  hero: {
    title: "Previsor de tempo de prova",
    subtitle:
      "Calcule o tempo de chegada a partir do pace que você mira, ou encontre o pace exato para o tempo que você quer.",
  },
  intro:
    "Informe a distância e o pace-alvo ou o tempo de chegada. Veja na hora o tempo previsto ou o pace por quilômetro necessário, além de parciais de 5 km para conduzir a prova.",
  calculator: {
    title: "Ajustes da prova",
    distanceLabel: "Distância da prova",
    customPlaceholder: "Distância em km",
    modeLabel: "O que você quer calcular?",
    finishTimeMode: "Tempo de chegada",
    requiredPaceMode: "Pace necessário",
    paceLabel: "Seu pace (min/km, ex.: 5:30)",
    goalLabel: "Tempo-alvo (H:MM:SS ou MM:SS)",
    calculate: "Calcular",
    predictedFinish: "Tempo de chegada previsto",
    requiredPaceResult: "Pace necessário",
    pacePerKm: "Pace /km",
    pacePerMi: "Pace /mi",
    speedKmh: "Velocidade km/h",
    speedMph: "Velocidade mph",
    splitsTitle: "Parciais de 5 km",
    markerColumn: "Marcação",
    cumulativeColumn: "Tempo acumulado",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Meia maratona",
      marathon: "Maratona",
      custom: "Personalizada",
    },
  },
  faqTitle: "Perguntas sobre pace de prova",
  faq: [
    {
      question: "Qual pace preciso para uma meia maratona abaixo de 2 horas?",
      answer:
        "Você precisa manter 5:41/km (9:09/mile), cerca de 10,6 km/h. Use a calculadora acima, escolha «Pace necessário», selecione Meia maratona e informe 2:00:00 como tempo-alvo.",
    },
    {
      question: "Qual pace preciso para um 5 km em 25 minutos?",
      answer:
        "Um 5 km em 25 minutos exige um pace de 5:00/km (8:03/mile). É uma meta intermediária sólida — a maioria dos iniciantes começa em torno de 6:30–7:00/km e vai descendo.",
    },
    {
      question: "Como uso as parciais em uma prova?",
      answer:
        "Corra parciais iguais (o mesmo pace a cada 5 km) para um desempenho previsível. Parciais negativas — a segunda metade mais rápida que a primeira — são o ideal e o que os atletas de elite buscam. Evite sair rápido demais no primeiro quilômetro.",
    },
    {
      question: "Qual é um bom tempo de 10 km?",
      answer:
        "Iniciante: 60–70 min; intermediário: 50–60 min; avançado: 40–50 min; elite: abaixo de 35 min. O recorde mundial fica abaixo de 27 minutos. A maioria dos corredores recreativos termina entre 50 e 65 minutos.",
    },
    {
      question: "Como dosar o pace em uma meia maratona?",
      answer:
        "Comece no pace-alvo nos primeiros 10 km e acelere os 11 km finais se você se sentir forte. Evite correr mais rápido que o pace-alvo no começo — a segunda metade parece bem mais difícil que a primeira, qualquer que seja o pace.",
    },
  ],
  cta: {
    title: "Acompanhe seus passos de treino todos os dias no app Steps.",
    description: "Registre cada corrida, acompanhe as parciais e bata suas metas de prova com o app Steps.",
  },
  howTo: {
    name: "Como prever um tempo de chegada",
    description: "Informe a distância e um pace ou um tempo-alvo para obter o valor que falta.",
    steps: [
      {
        name: "Informe a distância da prova",
        text: "Escolha uma prova comum (5 km, 10 km, meia maratona, maratona) ou uma distância personalizada.",
      },
      {
        name: "Informe o pace ou o tempo-alvo",
        text: "Basta um dos dois — a calculadora preenche o outro.",
      },
      {
        name: "Leia o tempo previsto ou o pace necessário",
        text: "O resultado mostra o tempo de chegada previsto e as parciais das distâncias de prova mais comuns.",
      },
    ],
  },
};

export default ptBR;

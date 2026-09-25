import type { RunningPaceCalculatorMessages } from "./en";

const ptBR: RunningPaceCalculatorMessages = {
  meta: {
    title: "Calculadora de pace — converta pace, velocidade e tempos de prova",
    description:
      "Calcule seu pace em min/km ou min/mile, converta entre pace e velocidade e preveja os tempos de 5 km, 10 km, meia maratona e maratona.",
    keywords: [
      "calculadora de pace",
      "calcular pace de corrida",
      "calculadora min por km",
      "calculadora min por milha",
      "previsor de tempo de prova",
      "calculadora de velocidade de corrida",
      "calculadora de pace de 5 km",
    ],
    ogTitle: "Calculadora de pace — converta pace, velocidade e tempos de prova",
    ogDescription:
      "Calcule seu pace em min/km ou min/mile, converta entre pace e velocidade e preveja os tempos de 5 km, 10 km, meia maratona e maratona.",
    ogImageAlt: "Calculadora de pace de corrida",
  },
  hero: {
    title: "Calculadora de pace de corrida",
    subtitle:
      "Converta entre pace, velocidade e tempo de chegada. Serve para qualquer distância, dos 5 km à maratona.",
  },
  intro:
    "Informe o pace, a velocidade ou o tempo e a distância para converter na hora todas as medidas da corrida e prever seu tempo de chegada, dos 5 km à maratona.",
  calculator: {
    title: "Calcular o pace",
    tabs: {
      pace: "Pace",
      speed: "Velocidade",
      timeDistance: "Tempo + distância",
    },
    paceLabel: "Pace (MM:SS)",
    paceHint: "Digite o pace no formato minutos:segundos (ex.: 5:30)",
    speedLabel: "Velocidade",
    distanceLabel: "Distância",
    finishTimeLabel: "Tempo de chegada (MM:SS ou H:MM:SS)",
    statsTitle: "Seus dados de corrida",
    pacePerKm: "Pace /km",
    pacePerMi: "Pace /mi",
    speedKmh: "Velocidade km/h",
    speedMph: "Velocidade mph",
    predictionsTitle: "Tempos de chegada previstos",
    distanceColumn: "Distância",
    finishTimeColumn: "Tempo de chegada",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Meia maratona",
      marathon: "Maratona",
    },
  },
  faqTitle: "Entendendo o pace de corrida",
  faq: [
    {
      question: "Qual é um bom pace de corrida?",
      answer:
        "Depende do seu nível. Iniciantes costumam correr a 7–9 min/km (11–14 min/mile). Corredores intermediários ficam em 5–7 min/km (8–11 min/mile). Avançados mantêm abaixo de 5 min/km (abaixo de 8 min/mile). Maratonistas de elite sustentam paces abaixo de 3:00/km. O melhor pace é o que deixa você terminar desafiado, mas não completamente esgotado.",
    },
    {
      question: "Como converter min/km em min/mile?",
      answer:
        "Multiplique seu pace em min/km por 1,60934 para obter min/mile. Por exemplo, 5:00/km equivale a 5:00 × 1,60934 = 8:03/mile. No sentido inverso, divida o pace em min/mile por 1,60934. Esta calculadora faz a conversão automaticamente quando você troca a unidade.",
    },
    {
      question: "Qual pace preciso para uma meia maratona abaixo de 2 horas?",
      answer:
        "Para terminar uma meia maratona (21,0975 km) em menos de 2 horas, você precisa manter um pace mais rápido que 5:41/km (9:09/mile), cerca de 10,6 km/h (6,6 mph). É uma meta intermediária comum: construa a base correndo de forma constante a 6:00–6:30/km antes de mirar a barreira das 2 horas.",
    },
    {
      question: "Qual é o pace médio de corrida?",
      answer:
        "A maioria dos corredores recreativos corre a 6–8 min/km (10–13 min/mile). O tempo médio de uma prova de 5 km fica em torno de 28–35 minutos, ou seja, um pace de 5:30–7:00/km. Na meia maratona, os tempos médios se agrupam em torno de 2:00–2:20, e na maratona em torno de 4:20–4:45. Idade, condicionamento e terreno mudam bastante esses números.",
    },
    {
      question: "Como posso melhorar meu pace?",
      answer:
        "Combine três tipos de treino: tiros (trechos curtos mais rápidos que o pace de prova, com recuperação), longos lentos (base aeróbica em pace de conversa) e treinos de tempo (esforço sustentado, confortavelmente forte). Inclua força 1–2 vezes por semana para prevenir lesões. A consistência pesa mais: corra pelo menos 3 vezes por semana e não aumente a quilometragem semanal em mais de 10%.",
    },
  ],
  cta: {
    title: "Acompanhe sua jornada de saúde",
    description: "Acompanhe suas corridas e os passos diários juntos no app Steps.",
  },
  howTo: {
    name: "Como usar a calculadora de pace",
    description:
      "Converta entre pace, velocidade e tempo: informe dois valores entre distância, pace e tempo de chegada, e a calculadora preenche o terceiro.",
    steps: [
      {
        name: "Escolha o valor que falta",
        text: "Decida se você quer o pace, o tempo ou a distância. Você informa os outros dois valores.",
      },
      {
        name: "Informe os dois valores conhecidos",
        text: "Distância e tempo geram o pace, pace e distância geram o tempo de chegada, e assim por diante. Aceita minutos por km e minutos por milha.",
      },
      {
        name: "Leia o resultado",
        text: "A calculadora devolve o terceiro valor em unidades métricas e imperiais, além de uma tabela de pace comparada às distâncias de prova mais comuns.",
      },
    ],
  },
};

export default ptBR;

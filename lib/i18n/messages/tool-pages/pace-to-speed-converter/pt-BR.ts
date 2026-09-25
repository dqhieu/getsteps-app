import type { PaceToSpeedConverterMessages } from "./en";

const ptBR: PaceToSpeedConverterMessages = {
  meta: {
    title: "Conversor de pace para velocidade — min/km, min/mile, km/h, mph",
    description:
      "Converta na hora o pace de corrida em velocidade e o contrário. Passe de min/km para km/h, de min/mile para mph e veja os tempos de 5 km e 10 km em qualquer pace.",
    keywords: [
      "conversor de pace para velocidade",
      "min por km em km/h",
      "calculadora de pace",
      "converter pace em velocidade",
      "min/km em mph",
      "conversor de velocidade de corrida",
      "conversor de pace",
    ],
    ogTitle: "Conversor de pace para velocidade — min/km, min/mile, km/h, mph",
    ogDescription:
      "Converta na hora o pace de corrida em velocidade e o contrário. Passe de min/km para km/h, de min/mile para mph e veja os tempos de 5 km e 10 km em qualquer pace.",
    ogImageAlt: "Conversor de pace para velocidade",
  },
  hero: {
    title: "Conversor de pace para velocidade",
    subtitle: "Converta na hora entre pace de corrida (min/km, min/mile) e velocidade (km/h, mph).",
  },
  intro:
    "Digite qualquer pace ou velocidade e as outras unidades se atualizam na hora. Veja os tempos estimados de 5 km e 10 km e quanta distância você corre em 30 ou 60 minutos.",
  calculator: {
    title: "Digite qualquer valor para converter",
    paceKm: "Pace (min/km)",
    paceMile: "Pace (min/mile)",
    speedKmh: "Velocidade (km/h)",
    speedMph: "Velocidade (mph)",
    distanceTitle: "Distância percorrida",
    min30: "30 min",
    min60: "60 min",
    raceTitle: "Tempos de chegada",
    referenceTitle: "Paces de referência",
    activityColumn: "Atividade",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "Toque em uma linha para carregar esse pace",
    races: {
      "5k": "5 km",
      "10k": "10 km",
    },
    activities: {
      walking: "Caminhada",
      jogging: "Trote",
      running: "Corrida",
      fast: "Corrida rápida",
      sprint: "Sprint",
    },
  },
  faqTitle: "Perguntas sobre pace e velocidade",
  faq: [
    {
      question: "Como converter min/km em km/h?",
      answer:
        "Divida 60 pelo seu pace em min/km. Por exemplo, 5:00/km dá 60 ÷ 5 = 12 km/h. Um pace mais lento de 6:00/km dá 60 ÷ 6 = 10 km/h.",
    },
    {
      question: "Qual é um bom pace em km/h?",
      answer:
        "Trote leve: 7–9 km/h; corrida moderada: 9–12 km/h; corrida rápida: 12–16 km/h; pace de maratona de elite: 18+ km/h. A maioria dos corredores recreativos fica entre 8 e 11 km/h.",
    },
    {
      question: "Como converter min/km em min/mile?",
      answer:
        "Multiplique o pace em min/km por 1,60934 para obter min/mile. Por exemplo, 5:00/km × 1,60934 = 8:03/mile. Este conversor faz isso automaticamente.",
    },
    {
      question: "Qual velocidade é um 5 km em 30 minutos?",
      answer:
        "Um 5 km em 30 minutos exige um pace de 6:00/km, o que equivale a 10,0 km/h ou 6,2 mph. É um pace recreativo sólido.",
    },
    {
      question: "Qual é a diferença entre pace e velocidade?",
      answer:
        "Pace é o tempo por unidade de distância (por exemplo, min/km) — quanto menor, mais rápido. Velocidade é a distância por unidade de tempo (por exemplo, km/h) — quanto maior, mais rápido. É a mesma coisa, com unidades invertidas.",
    },
  ],
  cta: {
    title: "Acompanhe corridas e passos no app Steps.",
    description: "Acompanhe pace, distância e a contagem diária de passos, tudo em um só lugar.",
  },
  howTo: {
    name: "Como converter pace de corrida em velocidade (ou velocidade em pace)",
    description:
      "Informe qualquer valor — minutos por quilômetro, minutos por milha, km/h ou mph — e obtenha os outros.",
    steps: [
      {
        name: "Escolha a unidade que você conhece",
        text: "Selecione a unidade para a qual você tem um valor (por exemplo, min/km).",
      },
      {
        name: "Informe o valor",
        text: "Digite o pace ou a velocidade.",
      },
      {
        name: "Leia as conversões",
        text: "As quatro unidades se atualizam juntas: min/km, min/mile, km/h, mph.",
      },
    ],
  },
};

export default ptBR;

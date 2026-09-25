import type { StepsPerMileCalculatorMessages } from "./en";

const ptBR: StepsPerMileCalculatorMessages = {
  meta: {
    title: "Quantos passos tem uma milha? Calculadora grátis",
    description:
      "Quantos passos tem uma milha? Cerca de 2.000-2.500, conforme altura e ritmo. Passos personalizados por milha e por km, com tabela de caminhada e corrida.",
    keywords: [
      "passos por milha",
      "passos por km",
      "quantos passos tem uma milha",
      "passos em uma milha",
      "passos em um quilômetro",
      "calculadora de comprimento do passo",
      "passos de caminhada por milha",
      "passos em milhas",
      "milhas em passos",
    ],
    ogTitle: "Quantos passos tem uma milha? Calculadora grátis",
    ogDescription:
      "Quantos passos tem uma milha? 2.000-2.500 conforme a sua altura. Veja seus passos por milha e por km.",
    ogImageAlt: "Calculadora de passos por milha",
  },
  hero: {
    title: "Quantos passos tem uma milha?",
    subtitle:
      "Quantos passos tem uma milha? Cerca de 2.000–2.500 para a maioria dos adultos. Informe sua altura para um número personalizado por milha e por km.",
  },
  resultCta: {
    headline: "Conheça seus passos reais por milha",
    description:
      "O Steps conta seus passos e sua distância automaticamente, para você ver seu ritmo e sua passada de verdade, e não uma estimativa.",
  },
  stickyCta: "Acompanhe seus passos com o Steps",
  calculator: {
    yourInformation: "Seus dados",
    height: "Altura",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    stepLength: "Seu comprimento de passo estimado: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} polegadas)",
    stepsPerMile: "Passos por milha",
    stepsPerKm: "Passos por quilômetro",
    stepsUnit: "passos",
    referenceTitle: "Tabela de distâncias",
    referenceSubtitle: "Passos necessários para distâncias comuns, com base no seu comprimento de passo",
    colDistance: "Distância",
    colSteps: "Passos",
    distances: ["1 km", "1 milha", "5 km", "5 milhas", "10 km", "Meia maratona", "Maratona"],
  },
  info: {
    title: "Como calculamos os passos por milha",
    intro:
      "O número de passos por milha depende do comprimento do seu passo, determinado sobretudo pela altura e pelo sexo. Pessoas mais altas geralmente têm uma passada maior e dão menos passos para a mesma distância.",
    formulaTitle: "A fórmula",
    stepLengthLabel: "Comprimento do passo:",
    stepLengthFormula: "Altura (cm) × 0,415 (homem) ou 0,413 (mulher)",
    perKmLabel: "Passos por km:",
    perKmFormula: "100.000 ÷ comprimento do passo (cm)",
    perMileLabel: "Passos por milha:",
    perMileFormula: "Passos por km × 1,609",
    heightTitle: "Passos médios por altura",
    heights: [
      { height: "5'0\" (152 cm):", steps: "~2.500 passos/milha" },
      { height: "5'6\" (168 cm):", steps: "~2.300 passos/milha" },
      { height: "6'0\" (183 cm):", steps: "~2.100 passos/milha" },
      { height: "6'6\" (198 cm):", steps: "~1.950 passos/milha" },
    ],
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "Quantos passos tem uma milha?",
      answer:
        "Em média, uma milha tem cerca de 2.000-2.500 passos. O número exato depende da sua altura e da sua passada. Pessoas mais baixas dão mais passos; pessoas mais altas, menos.",
    },
    {
      question: "Quantos passos tem um quilômetro?",
      answer:
        "Em média, um quilômetro tem cerca de 1.250-1.550 passos. Isso é aproximadamente 62% dos passos de uma milha, já que um quilômetro equivale a cerca de 0,62 milha.",
    },
    {
      question: "A velocidade da caminhada muda os passos por milha?",
      answer:
        "Sim, um pouco. Quando você caminha mais rápido ou corre, a passada aumenta e você dá menos passos por milha. Na maioria dos ritmos de caminhada, a diferença é pequena.",
    },
    {
      question: "Como medir o comprimento real do meu passo?",
      answer:
        "Caminhe uma distância conhecida (por exemplo, 30 metros) no seu ritmo habitual e conte os passos. Divida a distância pelo número de passos para obter a média. Você também pode marcar um ponto de partida, dar 10 passos e medir a distância percorrida.",
    },
  ],
  cta: {
    title: "Acompanhe seus passos e sua distância",
    description:
      "Baixe o app Steps para registrar automaticamente seus passos e sua distância no iPhone e no Apple Watch.",
  },
  howTo: {
    name: "Como calcular os passos por milha",
    description:
      "Informe sua altura e seu ritmo de caminhada para estimar quantos passos você dá em uma milha (e em um quilômetro).",
    steps: [
      {
        name: "Informe sua altura",
        text: "Pessoas mais altas cobrem mais terreno a cada passo, então a altura ajusta o resultado.",
      },
      {
        name: "Escolha um ritmo",
        text: "Caminhada rápida e corrida têm uma passada maior do que a caminhada lenta. Escolha o ritmo que importa para você.",
      },
      {
        name: "Leia a estimativa de passos por milha",
        text: "O resultado mostra passos por milha e por quilômetro com base na sua passada pessoal nesse ritmo.",
      },
    ],
  },
};

export default ptBR;

import type { StepDistanceCalculatorMessages } from "./en";

const ptBR: StepDistanceCalculatorMessages = {
  meta: {
    title: "Calculadora de passos e distância: 1 km ≈ 1.300 passos",
    description:
      "1 km ≈ 1.300 passos. 1 milha ≈ 2.100 passos. 5.000 passos ≈ 3,8 km / 2,4 mi. Calculadora grátis: personalize pela sua altura e passada.",
    keywords: [
      "km em passos",
      "passos em km",
      "1 km em passos",
      "2 km em passos",
      "3 km em passos",
      "6500 passos em km",
      "calculadora de distância de passos",
      "calculadora de comprimento do passo",
      "passos em distância",
      "distância em passos",
      "calculadora de distância da caminhada",
      "calculadora de comprimento de passo",
      "quantos passos por km",
      "passos em milhas",
    ],
    ogTitle: "Calculadora de passos e distância: 1 km ≈ 1.300 passos",
    ogDescription:
      "1 km ≈ 1.300 passos · 5.000 passos ≈ 3,8 km / 2,4 mi · 10.000 ≈ 7,6 km / 4,7 mi. Calculadora grátis personalizada pela sua altura.",
    ogImageAlt: "Calculadora de distância de passos",
  },
  hero: {
    title: "Calculadora de distância de passos",
    subtitle:
      "Converta passos em distância ou distância em passos. Resultados personalizados pela sua altura, sexo e passada.",
  },
  resultCta: {
    headline: "Acompanhe seus passos e sua distância reais",
    description:
      "O Steps conta seus passos automaticamente e mostra todos os dias sua distância, ritmo e calorias reais, sem preenchimento manual.",
  },
  stickyCta: "Acompanhe seus passos com o Steps",
  calculator: {
    yourInformation: "Seus dados",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    age: "Idade",
    years: "anos",
    height: "Altura",
    stepLength: "Seu comprimento de passo estimado: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} polegadas)",
    stepsToDistance: "Passos para distância",
    distanceToSteps: "Distância para passos",
    numberOfSteps: "Número de passos",
    stepsPlaceholder: "Informe o número de passos",
    distance: "Distância",
    distancePlaceholder: "Informe a distância",
    miles: "milhas",
    result: "Resultado",
    kmValue: "{distance} km",
    milesParen: "({distance} milhas)",
    stepsValue: "{steps} passos",
    estimatedCalories: "Calorias estimadas",
    kcalValue: "{calories} kcal",
    walkingTime: "Tempo de caminhada",
    hoursMinutes: "{hours} h {minutes} min",
    minutesOnly: "{minutes} min",
    referenceTitle: "Tabela de referência",
    referenceSubtitle: "Metas de passos comuns e as distâncias equivalentes para o seu perfil",
    colSteps: "Passos",
    colDistance: "Distância",
    colCalories: "Calorias",
    colTime: "Tempo",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "Como calculamos o comprimento do seu passo",
    intro:
      "O comprimento do passo define quanto você avança a cada passo. Estimamos com uma fórmula baseada em pesquisa, que considera altura, sexo e idade.",
    formulaTitle: "A fórmula",
    maleLabel: "Homem:",
    maleFormula: "Comprimento do passo = altura (cm) x 0,415",
    femaleLabel: "Mulher:",
    femaleFormula: "Comprimento do passo = altura (cm) x 0,413",
    ageLabel: "Ajuste por idade:",
    ageFormula: "O comprimento do passo diminui cerca de 1% por década depois dos 40 anos",
    average:
      "Em adultos, o comprimento médio do passo fica entre 60 e 80 cm (24 a 31 polegadas). Velocidade, terreno e condicionamento também podem mudar o comprimento real.",
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "Quantos passos tem uma milha?",
      answer:
        "Em média, uma milha tem cerca de 2.000 a 2.500 passos, conforme o comprimento do seu passo. Com uma passada maior, você precisa de menos passos para a mesma distância.",
    },
    {
      question: "Quantos passos tem um quilômetro?",
      answer:
        "Em média, um quilômetro tem cerca de 1.250 a 1.550 passos. Use a calculadora acima para uma estimativa com base no seu perfil.",
    },
    {
      question: "10.000 passos por dia são suficientes?",
      answer:
        "10.000 passos por dia é uma meta popular e equivale a cerca de 5 milhas (8 km) de caminhada. Pesquisas sugerem que até 7.000-8.000 passos por dia já trazem benefícios importantes. A melhor meta é a que desafia você e continua possível.",
    },
    {
      question: "Quantos passos são 1,8 km?",
      answer:
        "1,8 km são cerca de 2.340 passos para um adulto médio (passada de ~77 cm). Use a calculadora acima com a sua altura para uma estimativa mais precisa.",
    },
    {
      question: "Quantos passos são 3,5 km?",
      answer:
        "3,5 km são cerca de 4.550 passos para um adulto médio. Pessoas mais altas dão menos passos (passada maior); pessoas mais baixas, mais.",
    },
    {
      question: "Qual é a precisão desta calculadora?",
      answer:
        "A calculadora oferece uma estimativa razoável a partir das suas características físicas. Para mais precisão, meça o comprimento real do passo caminhando uma distância conhecida e contando os passos.",
    },
  ],
  conversionsTitle: "Tabelas de conversão rápidas",
  conversions: [
    "10.000 passos em milhas",
    "5.000 passos em milhas",
    "Passos em uma milha",
    "Passos em um km",
    "Tabela de passos para km",
    "Tabela de passos para milhas",
    "Tabela de passos para calorias",
  ],
  allConversions: "Todas as conversões →",
  stepsToKm: {
    title: "Passos em km: quantos quilômetros há nos seus passos?",
    intro:
      "Converter {phrase} depende da sua passada, que varia com a altura. Como referência: {ruleA} para um adulto médio, e {ruleB}.",
    phrase: "passos em km",
    ruleA: "1.000 passos ≈ 0,75 km",
    ruleB: "1 km ≈ 1.300 passos",
    cards: [
      { value: "0,75 km", label: "1.000 passos" },
      { value: "3,8 km", label: "5.000 passos" },
      { value: "7,5 km", label: "10.000 passos" },
      { value: "15 km", label: "20.000 passos" },
    ],
    guide:
      "São médias: a sua distância real depende da altura e da passada. Use a calculadora acima para uma conversão personalizada, ou veja o guia sobre {link} com tabelas por altura.",
    guideLink: "quantos passos tem um quilômetro",
  },
  kmTable: {
    title: "Km em passos: referência rápida",
    intro:
      "Número aproximado de passos para distâncias comuns, com uma passada média de 0,75 m (adulto médio).",
    colDistance: "Distância",
    colSteps: "Passos (aprox.)",
    colTime: "Tempo de caminhada",
    rows: [
      { distance: "0,5 km", steps: "650", time: "~6 min" },
      { distance: "1 km", steps: "1.300", time: "~12 min" },
      { distance: "1,5 km", steps: "1.950", time: "~18 min" },
      { distance: "1,8 km", steps: "2.340", time: "~22 min" },
      { distance: "2 km", steps: "2.600", time: "~24 min" },
      { distance: "2,5 km", steps: "3.250", time: "~30 min" },
      { distance: "3 km", steps: "3.900", time: "~36 min" },
      { distance: "3,5 km", steps: "4.550", time: "~42 min" },
      { distance: "4 km", steps: "5.200", time: "~48 min" },
      { distance: "5 km (~3,1 milhas)", steps: "6.500", time: "~60 min" },
      { distance: "6 km", steps: "7.800", time: "~72 min" },
      { distance: "7 km", steps: "9.100", time: "~84 min" },
      { distance: "8 km (~5 milhas)", steps: "10.400", time: "~96 min" },
      { distance: "10 km (~6,2 milhas)", steps: "13.000", time: "~2 h" },
      { distance: "12 km", steps: "15.600", time: "~2 h 24 min" },
      { distance: "15 km", steps: "19.500", time: "~3 h" },
      { distance: "20 km", steps: "26.000", time: "~4 h" },
    ],
    footnote:
      "Com base em uma passada média (~0,75 m) e ritmo normal (~5 km/h). Use a calculadora acima para um resultado pela sua altura e sexo.",
  },
  stepsTable: {
    title: "Passos em km e milhas: referência rápida",
    intro:
      "Distância aproximada em km e milhas para contagens comuns, com uma passada média de 0,75 m.",
    colSteps: "Passos",
    colKm: "Km",
    colMiles: "Milhas",
    rows: [
      { steps: "1.000", km: "0,75 km", miles: "0,47 mi" },
      { steps: "2.000", km: "1,5 km", miles: "0,93 mi" },
      { steps: "2.500", km: "1,9 km", miles: "1,17 mi" },
      { steps: "3.000", km: "2,25 km", miles: "1,4 mi" },
      { steps: "5.000", km: "3,8 km", miles: "2,4 mi" },
      { steps: "6.000", km: "4,5 km", miles: "2,8 mi" },
      { steps: "6.500", km: "4,9 km", miles: "3,0 mi" },
      { steps: "7.000", km: "5,25 km", miles: "3,3 mi" },
      { steps: "7.500", km: "5,6 km", miles: "3,5 mi" },
      { steps: "10.000", km: "7,5 km", miles: "4,7 mi" },
      { steps: "12.000", km: "9,0 km", miles: "5,6 mi" },
      { steps: "13.000", km: "9,75 km", miles: "6,05 mi" },
      { steps: "15.000", km: "11,25 km", miles: "7,0 mi" },
      { steps: "20.000", km: "15 km", miles: "9,3 mi" },
    ],
    footnote:
      "As distâncias assumem a passada de um adulto médio. Pessoas mais altas cobrem mais terreno por passo; pessoas mais baixas, menos. Use a calculadora acima para um resultado pela sua altura.",
  },
  cta: {
    title: "Acompanhe seus passos automaticamente",
    description:
      "Baixe o app Steps para registrar automaticamente seus passos, distância e calorias no iPhone e no Apple Watch.",
  },
  howTo: {
    name: "Como converter passos em distância (ou distância em passos)",
    description:
      "Informe sua altura e um número de passos ou uma distância. A calculadora estima a conversão com base no comprimento do seu passo.",
    steps: [
      {
        name: "Informe sua altura",
        text: "A altura serve para estimar o comprimento médio do passo. A passada da caminhada é cerca de 0,413 × a altura para mulheres e 0,415 × a altura para homens.",
      },
      {
        name: "Informe passos ou distância",
        text: "Mude para passos para obter uma distância, ou para distância para obter um número de passos. Unidades métricas e imperiais são aceitas.",
      },
      {
        name: "Leia o valor convertido",
        text: "O resultado mostra a conversão e o comprimento estimado do seu passo em metros e pés.",
      },
    ],
  },
};

export default ptBR;

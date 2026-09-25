import type { RestingHeartRateCalculatorMessages } from "./en";

const ptBR: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "Calculadora de frequência cardíaca em repouso: condicionamento e zonas de Karvonen",
    description:
      "Calcule o seu nível de condicionamento pela frequência cardíaca em repouso e as zonas de treino de Karvonen personalizadas. Informe a idade e a medição para um resultado na hora.",
    keywords: [
      "calculadora de frequência cardíaca em repouso",
      "frequência cardíaca em repouso por idade",
      "qual é uma boa frequência cardíaca em repouso",
      "calculadora de reserva de frequência cardíaca",
      "fórmula de Karvonen",
      "nível de condicionamento frequência cardíaca em repouso",
    ],
    ogTitle: "Calculadora de frequência cardíaca em repouso: condicionamento e zonas de Karvonen",
    ogDescription:
      "Calcule o seu nível de condicionamento pela frequência cardíaca em repouso e as zonas de treino de Karvonen personalizadas. Informe a idade e a medição para um resultado na hora.",
    ogImageAlt: "Calculadora de frequência cardíaca em repouso",
  },
  hero: {
    title: "Calculadora de frequência cardíaca em repouso",
    subtitle:
      "Confira o seu nível de condicionamento cardiovascular e obtenha zonas de treino personalizadas com base na reserva de frequência cardíaca.",
  },
  intro:
    "Informe a sua idade, sexo e frequência cardíaca em repouso medida para ver a sua categoria de condicionamento e calcular zonas de Karvonen para queima de gordura, resistência aeróbica e desempenho máximo.",
  calculator: {
    yourDetails: "Seus dados",
    gender: "Sexo",
    male: "Masculino",
    female: "Feminino",
    age: "Idade",
    years: { one: "ano", other: "anos" },
    restingHeartRate: "Frequência cardíaca em repouso",
    bpm: "bpm",
    rhrHint:
      "Dica: meça de manhã antes de se levantar. Sente-se em silêncio por 5 min e conte as batidas por 60 s.",
    calculate: "Calcular",
    fitnessLevel: "Seu nível de condicionamento",
    hrMax: "FCmáx",
    hrr: "RFC",
    zonesTitle: "Zonas de treino de Karvonen",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "Atleta",
      excellent: "Excelente",
      good: "Bom",
      above_average: "Acima da média",
      average: "Médio",
      below_average: "Abaixo da média",
      poor: "Fraco",
    },
    zones: {
      activeRecovery: { name: "Recuperação ativa", purpose: "Recuperação" },
      fatBurn: { name: "Queima de gordura", purpose: "Gordura" },
      aerobicEndurance: { name: "Resistência aeróbica", purpose: "Aeróbico" },
      lactateThreshold: { name: "Limiar de lactato", purpose: "Limiar" },
      vo2Max: { name: "VO2 máx", purpose: "VO2 máx" },
    },
  },
  info: {
    title: "Perguntas sobre a frequência cardíaca em repouso",
  },
  faq: [
    {
      question: "Qual é uma frequência cardíaca em repouso normal?",
      answer:
        "Para a maioria dos adultos, uma frequência cardíaca em repouso normal fica entre 60 e 100 batimentos por minuto (bpm). Atletas treinados costumam ter frequência cardíaca em repouso de 40–60 bpm porque o coração é mais forte e bombeia mais sangue a cada batida. Valores abaixo de 60 bpm (bradicardia) podem ser normais em pessoas condicionadas, mas devem ser avaliados por um médico se houver sintomas.",
    },
    {
      question: "Como medir a minha frequência cardíaca em repouso?",
      answer:
        "Meça a sua frequência cardíaca em repouso de manhã, antes de se levantar. Fique imóvel por 5 minutos, coloque dois dedos no pulso (artéria radial) ou no pescoço (artéria carótida) e conte as batidas por 60 segundos. Evite medir depois de café, exercício ou estresse. A média de três manhãs seguidas dá a leitura mais precisa.",
    },
    {
      question: "A frequência cardíaca em repouso melhora com o condicionamento?",
      answer:
        "Sim. O exercício cardiovascular regular fortalece o músculo cardíaco, que passa a bombear mais sangue a cada batida. Esse maior volume sistólico faz o coração precisar bater menos vezes por minuto para entregar a mesma quantidade de sangue. O treino aeróbico constante costuma reduzir a frequência cardíaca em repouso em 5–25 bpm ao longo de vários meses, conforme o seu ponto de partida.",
    },
    {
      question: "Qual é a diferença entre frequência cardíaca em repouso e máxima?",
      answer:
        "A frequência cardíaca em repouso é o número de batimentos por minuto em repouso total. A frequência cardíaca máxima (FCmáx) é o maior número de batimentos por minuto que o coração alcança em um esforço máximo, estimada como 220 menos a sua idade. A reserva de frequência cardíaca (RFC) é a diferença entre as duas e representa a faixa em que o coração pode trabalhar durante o exercício. O método de Karvonen usa a RFC para calcular zonas de treino personalizadas.",
    },
    {
      question: "Como posso baixar a minha frequência cardíaca em repouso?",
      answer:
        "O jeito mais eficaz é o exercício aeróbico regular: faça 3–5 sessões por semana de cardio contínuo de intensidade moderada, como caminhada, corrida leve, ciclismo ou natação. Sono adequado (7–9 horas), controle do estresse (meditação, respiração profunda), limitar cafeína e álcool e manter um peso saudável também ajudam a baixar a frequência cardíaca em repouso. As melhoras costumam aparecer em 4–8 semanas de treino consistente.",
    },
  ],
  cta: {
    title: "Melhore a saúde do seu coração",
    description: "Acompanhe os seus passos diários para melhorar a saúde cardiovascular ao longo do tempo.",
  },
  howTo: {
    name: "Como ver a sua categoria de condicionamento pela frequência cardíaca em repouso",
    description:
      "Informe a idade e a frequência cardíaca em repouso para ver o seu nível cardiovascular e as zonas de treino de Karvonen.",
    steps: [
      {
        name: "Informe a idade e a frequência cardíaca em repouso",
        text: "Meça a frequência cardíaca em repouso logo de manhã, antes da cafeína, ainda deitado na cama.",
      },
      {
        name: "Leia a sua categoria de condicionamento",
        text: "A calculadora coloca você em uma escala de atleta a fraco, com base em faixas de frequência cardíaca em repouso ajustadas à idade.",
      },
      {
        name: "Leia as suas zonas de Karvonen",
        text: "Também devolve 5 zonas de treino cardíaco personalizadas para a sua frequência cardíaca em repouso.",
      },
    ],
  },
};

export default ptBR;

import type { ActivityToStepsMessages } from "./en";

const pt: ActivityToStepsMessages = {
  meta: {
    title: "Conversor de atividade em passos – Converta qualquer exercício em passos",
    description:
      "Converta ciclismo, natação, yoga, remo e mais de 10 atividades em passos equivalentes. Ideal para desafios de passos e acompanhamento fitness.",
    keywords: [
      "conversor atividade em passos",
      "converter exercício em passos",
      "equivalente em passos ciclismo",
      "equivalente em passos natação",
      "calculadora de passos equivalentes",
      "passos sem caminhar",
    ],
    ogTitle: "Conversor de atividade em passos – Converta qualquer exercício em passos",
    ogDescription:
      "Converta ciclismo, natação, yoga, remo e mais de 10 atividades em passos equivalentes. Ideal para desafios de passos e acompanhamento fitness.",
    ogImageAlt: "Conversor de atividade em passos",
  },
  hero: {
    title: "Conversor de atividade em passos",
    subtitle:
      "Converta qualquer atividade — ciclismo, natação, yoga e mais — em passos equivalentes para o seu desafio de passos ou meta de condicionamento.",
    intro:
      "Escolha a atividade, informe a duração e veja na hora a contagem de passos equivalentes. Usa valores MET (equivalente metabólico) para converter 10 atividades com precisão.",
  },
  appCta: {
    headline: "Conte cada atividade como passos — automaticamente",
    description:
      "O Steps acompanha seu movimento o dia todo em segundo plano e transforma a atividade em equivalentes de passos, sem lançamento manual.",
  },
  stickyCta: "Acompanhe seus passos com o Steps",
  calculator: {
    yourActivity: "Sua atividade",
    activityType: "Tipo de atividade",
    duration: "Duração (minutos)",
    intensity: "Intensidade",
    intensities: {
      low: "Baixa",
      medium: "Média",
      high: "Alta",
    },
    calorieToggle: "Para o cálculo de calorias (opcional)",
    bodyWeight: "Peso corporal",
    equivalentSteps: "Passos equivalentes",
    equivalentFor: "passos equivalentes para {duration} min de {activity}",
    walkingTime: "Tempo de caminhada",
    minutes: "{minutes} min",
    distance: "Distância",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "Calorias",
    kcal: "kcal",
    metNote: "Calculado com valores MET (Metabolic Equivalent of Task)",
    activities: {
      cycling: "Ciclismo",
      swimming: "Natação",
      elliptical: "Elíptico",
      rowing: "Remo",
      jump_rope: "Pular corda",
      dancing: "Dança",
      yoga: "Yoga",
      basketball: "Basquete",
      hiking: "Trilha",
      pilates: "Pilates",
    },
  },
  info: {
    title: "Como funcionam os passos equivalentes",
  },
  faq: [
    {
      question: "Como os passos de uma atividade são calculados?",
      answer:
        "Este conversor usa valores MET (Metabolic Equivalent of Task), a medida padrão de intensidade nas ciências do exercício. Caminhar em ritmo normal tem MET 3,5, cerca de 100 passos por minuto. O MET de cada atividade é comparado ao da caminhada para gerar os passos equivalentes. Uma atividade com MET 7,0 (o dobro da caminhada) produz o dobro de passos equivalentes por minuto.",
    },
    {
      question: "Ciclismo equivale a passos de caminhada?",
      answer:
        "Sim — 30 minutos de ciclismo em intensidade média (MET ~6,8) são cerca de 7.000–9.000 passos equivalentes, conforme o ritmo. O ciclismo competitivo em alta intensidade pode passar de 14.000 passos equivalentes em 30 minutos. O pedômetro não conta isso como passos literais, mas a conversão é uma comparação justa para um desafio de passos.",
    },
    {
      question: "Natação conta como passos?",
      answer:
        "A natação não é registrada nativamente como passos na maioria dos apps e pedômetros. Mesmo assim, 30 minutos de natação em intensidade média (MET ~7,0) equivalem a cerca de 6.000–8.000 passos. Use este conversor para creditar seus treinos em desafios que aceitam lançamento manual.",
    },
    {
      question: "Por que converter atividades em passos?",
      answer:
        "Desafios de passos no trabalho ou em apps medem o progresso em passos, mas quem pedala, nada ou faz yoga acumula menos passos de GPS. Converter atividades que não são caminhada permite participar de forma justa, acompanhar o movimento do dia e comparar o esforço de esportes diferentes na mesma escala.",
    },
  ],
  related: [
    { title: "Calculadora de passos para calorias", href: "/tools/steps-to-calories-calculator" },
    { title: "Calculadora de meta diária de passos", href: "/tools/daily-step-goal-calculator" },
    { title: "Calculadora de calorias da caminhada", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "Acompanhe sua jornada de saúde",
    description: "Registre todas as suas atividades e passos automaticamente com o app Steps.",
  },
  howTo: {
    name: "Como converter atividades em passos equivalentes",
    description:
      "Informe o tipo de atividade, a duração e a intensidade para obter a contagem de passos equivalentes da sua meta diária.",
    steps: [
      {
        name: "Escolha uma atividade",
        text: "Ciclismo, natação, yoga, treino de força e dezenas de outras são aceitas.",
      },
      {
        name: "Informe duração e intensidade",
        text: "Duração em minutos mais um seletor de intensidade leve, moderada ou vigorosa.",
      },
      {
        name: "Leia os passos equivalentes",
        text: "A calculadora devolve a contagem equivalente com base nos valores MET, para você bater a meta diária mesmo sem ter caminhado.",
      },
    ],
  },
};

export default pt;

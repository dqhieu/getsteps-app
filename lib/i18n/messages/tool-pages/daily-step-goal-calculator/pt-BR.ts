import type { DailyStepGoalCalculatorMessages } from "./en";

const ptBR: DailyStepGoalCalculatorMessages = {
  meta: {
    title: "Calculadora de meta diária de passos – recomendação personalizada",
    description:
      "Receba uma meta diária de passos personalizada com base na sua idade, no nível de atividade e nos objetivos de saúde. Descubra quantos passos caminhar por dia.",
    keywords: [
      "meta diária de passos",
      "quantos passos devo caminhar",
      "meta de passos por idade",
      "passos recomendados por dia",
      "meta de passos personalizada",
      "calculadora de meta de passos",
      "meta de caminhada diária",
      "passos para emagrecer",
    ],
    ogTitle: "Calculadora de meta diária de passos",
    ogDescription:
      "Receba uma meta diária de passos personalizada com base na sua idade, no nível de atividade e nos objetivos de saúde.",
    ogImageAlt: "Calculadora de meta diária de passos",
  },
  hero: {
    title: "Calculadora de meta diária de passos",
    subtitle:
      "Receba uma recomendação personalizada de passos diários com base na sua idade, no nível de atividade atual e nos seus objetivos de saúde.",
  },
  resultCta: {
    headline: "Bata sua meta diária de passos — automaticamente",
    description:
      "O Steps conta seus passos em segundo plano, sem registro manual, para você realmente alcançar a meta acima e criar um hábito que dure.",
  },
  stickyCta: "Acompanhe seus passos com o Steps",
  calculator: {
    yourProfile: "Seu perfil",
    age: "Idade",
    years: "anos",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    activityLevel: "Nível de atividade atual",
    activity: {
      sedentary: "Sedentário",
      lightly_active: "Pouco ativo",
      active: "Ativo",
      very_active: "Muito ativo",
    },
    healthGoal: "Objetivo de saúde",
    goals: {
      maintain: "Manter a saúde",
      lose_weight: "Perder peso",
      improve_fitness: "Melhorar o condicionamento",
      train_event: "Treinar para um evento",
    },
    currentSteps: "Passos diários atuais (opcional)",
    currentStepsPlaceholder: "ex.: 5000",
    currentStepsHint: "Informe sua média de passos diários para uma recomendação mais personalizada",
    resultTitle: "Sua meta diária de passos recomendada",
    stepsValue: "{steps} passos",
    perDay: "por dia",
    weeklyGoal: "Meta semanal",
    distancePerDay: "Distância/dia",
    caloriesPerDay: "Calorias/dia",
    kmValue: "{distance} km",
    approxCalories: "~{calories}",
    planTitle: "Plano de progressão de 8 semanas",
    planSubtitle: "Chegue à sua meta aos poucos, com marcos semanais",
    weekLabel: "Semana {week}",
    tipsTitle: "Dicas para alcançar sua meta",
    tips: {
      sedentary: [
        "Comece com uma caminhada de 10 minutos no intervalo do almoço",
        "Use a escada em vez do elevador",
        "Estacione mais longe da entrada",
      ],
      lightlyActive: [
        "Inclua uma caminhada de 15 minutos de manhã na sua rotina",
        "Caminhe enquanto fala ao telefone",
      ],
      loseWeight: [
        "Combine a caminhada com uma alimentação equilibrada para melhores resultados",
        "Tente manter um ritmo acelerado para queimar mais calorias",
      ],
      improveFitness: [
        "Aumente o ritmo aos poucos",
        "Inclua um pouco de subida ou escadas",
      ],
      trainEvent: [
        "Siga um plano de treino progressivo",
        "Inclua dias de descanso para recuperar",
      ],
      general: [
        "Acompanhe seus passos todos os dias para manter a motivação",
        "Encontre um parceiro de caminhada para ajudar na constância",
      ],
    },
  },
  info: {
    title: "Entendendo as metas de passos",
    intro:
      "A meta certa depende da sua situação. 10.000 passos é um alvo popular, mas a pesquisa mostra que os benefícios para a saúde podem aparecer com quantidades diferentes conforme a idade e o condicionamento.",
    ageTitle: "Passos recomendados por idade",
    ages: [
      { label: "Crianças e adolescentes (menos de 18):", steps: "12.000-15.000 passos/dia" },
      { label: "Adultos (18-64):", steps: "10.000-12.000 passos/dia" },
      { label: "Idosos (65+):", steps: "7.000-10.000 passos/dia" },
    ],
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "É necessário fazer 10.000 passos por dia?",
      answer:
        "Não, 10.000 passos não é um número mágico. Estudos recentes mostram que benefícios importantes para a saúde começam por volta de 7.000-8.000 passos por dia. O essencial é ser mais ativo do que você é hoje.",
    },
    {
      question: "Quantos passos para perder peso?",
      answer:
        "Para perder peso, mire em 12.000 passos ou mais por dia, junto com uma alimentação equilibrada. Isso pode queimar 400-600 calorias extras por dia. A constância importa mais do que acertar um número perfeito todos os dias.",
    },
    {
      question: "Como aumentar meus passos diários?",
      answer:
        "Some 1.000 passos por semana à sua média atual. Faça reuniões caminhando, estacione mais longe, use a escada em vez do elevador e reserve pausas curtas para caminhar ao longo do dia.",
    },
    {
      question: "E se eu não conseguir atingir a meta?",
      answer:
        "Qualquer aumento de atividade ajuda. Se a meta parecer ambiciosa demais, ajuste para algo que você consiga manter. A melhor meta é a que você sustenta com constância. Foque no progresso, não na perfeição.",
    },
  ],
  cta: {
    title: "Acompanhe suas metas de passos",
    description:
      "Baixe o app Steps para definir metas diárias, acompanhar seu progresso e criar hábitos saudáveis de caminhada.",
  },
  howTo: {
    name: "Como encontrar sua meta diária de passos",
    description:
      "Informe idade, sexo, peso, altura, nível de atividade e objetivo para receber uma meta diária de passos personalizada.",
    steps: [
      {
        name: "Preencha seu perfil",
        text: "Informe idade, sexo, peso e altura. A calculadora usa esses dados para estimar seu gasto energético basal.",
      },
      {
        name: "Escolha seu nível de atividade atual",
        text: "Selecione sedentário, pouco ativo, moderadamente ativo ou muito ativo. Seja honesto: a meta parte de onde você está.",
      },
      {
        name: "Escolha seu objetivo",
        text: "As opções incluem condicionamento geral, perda de peso, saúde cardiovascular e longevidade. Cada uma usa metas de passos baseadas em evidências.",
      },
      {
        name: "Leia sua meta diária",
        text: "A calculadora mostra uma meta de passos personalizada, um total semanal e um plano de progressão se você começa de um nível mais baixo.",
      },
    ],
  },
};

export default ptBR;

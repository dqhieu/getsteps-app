import type { TdeeCalculatorMessages } from "./en";

const ptBR: TdeeCalculatorMessages = {
  meta: {
    title: "Calculadora TDEE – gasto energético diário total e calorias",
    description:
      "Calcule seu gasto energético diário total (TDEE) e sua taxa metabólica basal (BMR). Encontre suas calorias diárias para perder peso, manter ou ganhar músculo.",
    keywords: [
      "calculadora TDEE",
      "calculadora de gasto energético diário total",
      "calculadora de calorias",
      "calculadora BMR",
      "quantas calorias devo comer",
      "calculadora de calorias de manutenção",
      "necessidade calórica diária",
    ],
    ogTitle: "Calculadora TDEE – gasto energético diário total e calorias",
    ogDescription:
      "Calcule seu gasto energético diário total (TDEE) e sua taxa metabólica basal (BMR). Encontre suas calorias diárias para perder peso, manter ou ganhar músculo.",
  },
  hero: {
    title: "Calculadora TDEE",
    subtitle: "Calcule quantas calorias você queima por dia com base nos seus dados e no nível de atividade.",
  },
  intro:
    "Informe sexo, idade, peso, altura e nível de atividade para calcular seu gasto energético diário total (TDEE) — as calorias que o corpo queima por dia. Use o resultado para definir a meta calórica certa para os seus objetivos.",
  calculator: {
    details: "Seus dados",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    age: "Idade",
    years: "anos",
    weight: "Peso",
    height: "Altura",
    activityLevel: "Nível de atividade",
    activity: {
      sedentary: "Sedentário",
      light: "Levemente ativo",
      moderate: "Moderadamente ativo",
      active: "Ativo",
      very_active: "Muito ativo",
    },
    calculate: "Calcular TDEE",
    results: "Seus resultados",
    bmr: "BMR",
    bmrUnit: "cal/dia em repouso",
    tdee: "TDEE",
    tdeeUnit: "cal/dia no total",
    calorieGoals: "Metas de calorias",
    maintenanceBadge: "Manutenção",
    belowMinimum: "Abaixo do mínimo",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "Perda agressiva", weekly: "-1 kg / semana" },
      moderate_loss: { label: "Perda moderada", weekly: "-0.5 kg / semana" },
      mild_loss: { label: "Perda leve", weekly: "-0.25 kg / semana" },
      maintenance: { label: "Manutenção", weekly: "0 kg / semana" },
      mild_gain: { label: "Ganho leve", weekly: "+0.25 kg / semana" },
      muscle_gain: { label: "Ganho muscular", weekly: "+0.5 kg / semana" },
    },
  },
  faqTitle: "Perguntas sobre TDEE e calorias",
  faq: [
    {
      question: "O que é TDEE?",
      answer:
        "TDEE significa gasto energético diário total — as calorias que o corpo queima em um dia. Inclui a taxa metabólica basal (calorias em repouso), a energia da atividade física e o efeito térmico dos alimentos (calorias para digerir). O TDEE é o número mais importante para definir metas de perda de peso, manutenção ou ganho muscular.",
    },
    {
      question: "O TDEE é preciso?",
      answer:
        "Calculadoras de TDEE com a equação de Mifflin-St Jeor em geral acertam dentro de 10–15% para a maioria das pessoas. Variação individual por genética, massa muscular, hormônios e adaptação metabólica pode deslocar o valor real. Use o resultado como ponto de partida, acompanhe o peso por 2–3 semanas e ajuste a ingestão em 100–200 calorias conforme o progresso real.",
    },
    {
      question: "Qual é a diferença entre BMR e TDEE?",
      answer:
        "BMR (taxa metabólica basal) são as calorias que o corpo queima em repouso completo — a energia mínima para respiração, circulação e reparo celular. O TDEE soma todo o resto em cima do BMR: atividade, exercício e digestão. O TDEE é sempre maior que o BMR e é o número para definir metas calóricas.",
    },
    {
      question: "Quantas calorias abaixo do TDEE para perder peso?",
      answer:
        "Um déficit diário de 250–500 calorias abaixo do TDEE é recomendado para uma perda sustentável de 0,25–0,5 kg por semana. Déficits maiores podem causar perda de músculo, deficiências e adaptação metabólica. Mulheres em geral não devem ficar abaixo de 1.200 calorias/dia e homens abaixo de 1.500 calorias/dia sem acompanhamento médico. Um déficit moderado com mais passos diários costuma funcionar melhor do que só restringir.",
    },
    {
      question: "O TDEE muda com a idade?",
      answer:
        "Sim. O TDEE costuma cair cerca de 1–2% por década depois dos 20 anos, principalmente pela perda de massa muscular (sarcopenia). O músculo é metabolicamente ativo e queima mais calorias em repouso do que o tecido adiposo. Treino de força e um estilo de vida ativo podem desacelerar bastante essa queda. Mudanças hormonais, sobretudo na menopausa, também podem reduzir o TDEE em mulheres.",
    },
  ],
  cta: {
    title: "Aumente seu TDEE de forma natural",
    description: "Aumente seu TDEE de forma natural com mais passos diários. Acompanhe-os no app Steps.",
  },
  howTo: {
    name: "Como calcular seu gasto energético diário total",
    description:
      "Informe idade, sexo, peso, altura e nível de atividade para obter BMR e TDEE com a equação de Mifflin-St Jeor.",
    steps: [
      {
        name: "Informe idade, sexo, peso e altura",
        text: "Dados exigidos pela fórmula de Mifflin-St Jeor, a mais precisa para a população geral.",
      },
      {
        name: "Escolha seu nível de atividade",
        text: "Sedentário (trabalho de escritório), levemente ativo (exercício 1-3 dias/semana), moderadamente ativo (3-5 dias), muito ativo (6-7 dias) ou extra ativo.",
      },
      {
        name: "Leia o BMR e o TDEE",
        text: "A calculadora devolve sua taxa metabólica basal (calorias para se manter vivo em repouso) e seu gasto energético diário total (calorias para manter o peso).",
      },
    ],
  },
};

export default ptBR;

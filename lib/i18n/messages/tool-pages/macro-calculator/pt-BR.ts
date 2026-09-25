import type { MacroCalculatorMessages } from "./en";

const ptBR: MacroCalculatorMessages = {
  meta: {
    title: "Calculadora de macronutrientes – proteína, carboidratos e gordura",
    description:
      "Calcule seus macronutrientes diários (proteína, carboidratos e gordura) para perder peso, manter ou ganhar músculo. Com base no seu TDEE e nos seus objetivos.",
    keywords: [
      "calculadora de macros",
      "calculadora de macronutrientes",
      "calculadora de proteína para perder peso",
      "calcular macros",
      "quantas gramas de proteína por dia",
      "divisão de macronutrientes",
      "calculadora IIFYM",
    ],
    ogTitle: "Calculadora de macronutrientes – proteína, carboidratos e gordura",
    ogDescription:
      "Calcule seus macronutrientes diários (proteína, carboidratos e gordura) para perder peso, manter ou ganhar músculo.",
  },
  hero: {
    title: "Calculadora de macronutrientes",
    subtitle:
      "Veja suas metas diárias de proteína, carboidratos e gordura com base nos seus dados e no seu objetivo.",
  },
  intro:
    "Informe seus dados e escolha o objetivo para calcular suas metas diárias de macronutrientes. Seja em cutting, manutenção ou ganho de músculo, a divisão certa faz a diferença.",
  calculator: {
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    age: "Idade",
    weight: "Peso",
    height: "Altura (cm)",
    activityLevel: "Nível de atividade",
    activity: {
      sedentary: "Sedentário",
      light: "Levemente ativo",
      moderate: "Moderadamente ativo",
      active: "Ativo",
      very_active: "Muito ativo",
    },
    goal: "Objetivo",
    goals: {
      weight_loss: "Perda de peso",
      maintenance: "Manutenção",
      muscle_gain: "Ganho muscular",
    },
    calculate: "Calcular macronutrientes",
    dailyTarget: "Sua meta diária",
    cal: "cal",
    bmrTdee: "BMR: {bmr} · TDEE: {tdee}",
    protein: "Proteína",
    carbs: "Carboidratos",
    fat: "Gordura",
    grams: "{grams}g",
  },
  info: {
    title: "Entendendo os macronutrientes",
    faqTitle: "Perguntas comuns",
  },
  faq: [
    {
      question: "O que são macronutrientes?",
      answer:
        "Macronutrientes (proteína, carboidratos e gordura) são as três principais fontes de calorias. Proteína e carboidratos fornecem 4 calorias por grama, e a gordura fornece 9 calorias por grama. O equilíbrio certo para o seu objetivo determina a composição corporal.",
    },
    {
      question: "Quanta proteína devo comer por dia?",
      answer:
        "Quem é ativo deve mirar 1,6–2,4 g de proteína por kg de peso. A faixa alta (2,2–2,4 g/kg) é recomendada para ganho muscular ou durante um déficit calórico, para preservar massa muscular.",
    },
    {
      question: "Devo contar macronutrientes ou só calorias?",
      answer:
        "Acompanhar macronutrientes dá mais controle sobre a composição corporal. Contar só calorias na perda de peso pode levar à perda de músculo se a proteína estiver baixa — os macronutrientes fazem você perder gordura e preservar tecido magro.",
    },
    {
      question: "Qual é uma boa divisão de macronutrientes para perder peso?",
      answer:
        "Uma divisão rica em proteína funciona melhor: cerca de 35–40% de proteína para preservar músculo, 25% de gordura para a saúde hormonal e 30–35% de carboidratos para energia. Bater a meta de proteína vem antes de todo o resto.",
    },
    {
      question: "Quantas gramas de carboidratos por dia?",
      answer:
        "Em geral 150–300 g para adultos ativos. Mire a faixa baixa na perda de peso e mais alto para endurance ou ganho muscular. A necessidade de carboidratos acompanha o volume de treino.",
    },
  ],
  cta: {
    title: "Junte seus macronutrientes a uma meta de passos",
    description: "Junte suas metas de macronutrientes a uma meta diária de passos para melhores resultados.",
  },
  howTo: {
    name: "Como calcular seus macronutrientes diários",
    description:
      "Informe seus dados e seu objetivo para obter proteína, carboidratos e gordura diários em gramas e calorias.",
    steps: [
      {
        name: "Informe seus dados",
        text: "Idade, sexo, peso, altura e nível de atividade — as mesmas entradas da calculadora TDEE.",
      },
      {
        name: "Escolha seu objetivo",
        text: "Cutting (perder peso), manutenção ou bulking (ganhar músculo). Cada objetivo usa proporções diferentes de macronutrientes.",
      },
      {
        name: "Leia suas metas de macronutrientes",
        text: "A calculadora devolve gramas e calorias de proteína, carboidratos e gordura, mais as calorias diárias totais.",
      },
    ],
  },
};

export default ptBR;

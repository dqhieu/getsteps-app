import type { BmiCalculatorMessages } from "./en";

const ptBR: BmiCalculatorMessages = {
  meta: {
    title: "Calculadora de IMC: calcule seu índice de massa corporal",
    description:
      "Calcule seu índice de massa corporal (IMC) e descubra se você está em uma faixa de peso saudável. Receba dicas de saúde e recomendações de passos personalizadas.",
    keywords: [
      "calculadora de IMC",
      "índice de massa corporal",
      "calcular IMC",
      "calculadora de peso saudável",
      "tabela de IMC",
      "peso por altura",
      "categorias de IMC",
      "IMC ideal",
    ],
    ogTitle: "Calculadora de IMC",
    ogDescription:
      "Calcule seu índice de massa corporal (IMC) e descubra se você está em uma faixa de peso saudável.",
  },
  hero: {
    title: "Calculadora de IMC",
    subtitle:
      "Calcule seu índice de massa corporal para entender sua categoria de peso e receber recomendações de saúde personalizadas.",
  },
  calculator: {
    measurements: "Suas medidas",
    weight: "Peso",
    height: "Altura",
    yourBmi: "Seu IMC",
    healthyRange: "Faixa de peso saudável",
    recommendedSteps: "Passos diários recomendados",
    aboveRange: "Você está {amount} acima da faixa de peso saudável para a sua altura.",
    belowRange: "Você está {amount} abaixo da faixa de peso saudável para a sua altura.",
    categoriesTitle: "Categorias de IMC",
    categoriesSubtitle: "Classificação de IMC para adultos da Organização Mundial da Saúde",
    categoryColumn: "Categoria",
    rangeColumn: "Faixa de IMC",
    categories: {
      underweight: "Abaixo do peso",
      normal: "Normal",
      overweight: "Sobrepeso",
      "obese-1": "Obesidade grau I",
      "obese-2": "Obesidade grau II",
      "obese-3": "Obesidade grau III",
    },
  },
  info: {
    title: "Entendendo o IMC",
    intro:
      "O índice de massa corporal (IMC) é um cálculo simples com base na sua altura e no seu peso para estimar a gordura corporal e avaliar se você está com um peso saudável. É muito usado como ferramenta de triagem de categorias de peso.",
    formulaTitle: "A fórmula",
    formula: "IMC = peso (kg) ÷ altura (m)²",
    exampleLabel: "Exemplo:",
    example: "Uma pessoa com 70 kg e 1,75 m de altura tem IMC = 70 ÷ (1,75 × 1,75) = 22,9",
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "Qual é um IMC saudável?",
      answer:
        "Um IMC entre 18,5 e 24,9 é considerado saudável para a maioria dos adultos. Porém, o IMC não leva em conta massa muscular, densidade óssea ou distribuição de gordura, então é apenas um dos fatores para avaliar sua saúde geral.",
    },
    {
      question: "O IMC é preciso para todo mundo?",
      answer:
        "O IMC pode não ser preciso para atletas com muita massa muscular, idosos ou pessoas com certos tipos físicos. É uma ferramenta de triagem útil, mas deve ser considerada junto com outros indicadores de saúde.",
    },
    {
      question: "Como posso melhorar meu IMC?",
      answer:
        "Se o seu IMC estiver fora da faixa saudável, foque em mudanças sustentáveis: atividade física regular (como caminhar todos os dias), alimentação equilibrada e sono adequado. Consulte um profissional de saúde para orientações personalizadas.",
    },
    {
      question: "Quantos passos devo dar de acordo com meu IMC?",
      answer:
        "Para manter um IMC saudável, busque 10.000 passos por dia. Se quiser emagrecer, considere 12.000 ou mais. Comece do seu nível atual e aumente aos poucos 1.000 passos por semana.",
    },
    {
      question: "O IMC é diferente para crianças?",
      answer:
        "Sim, o IMC de crianças e adolescentes é calculado de outra forma e comparado com percentis por idade e sexo. Esta calculadora é para adultos a partir de 18 anos. Para crianças, consulte um pediatra.",
    },
  ],
  cta: {
    title: "Acompanhe sua jornada de saúde",
    description:
      "Baixe o app Steps para acompanhar sua atividade diária e chegar a um peso mais saudável.",
  },
  howTo: {
    name: "Como calcular seu IMC",
    description:
      "O índice de massa corporal (IMC) estima sua categoria de composição corporal a partir da altura e do peso, usando as categorias para adultos do CDC.",
    steps: [
      {
        name: "Informe sua altura",
        text: "Informe a altura em centímetros ou em pés/polegadas.",
      },
      {
        name: "Informe seu peso",
        text: "Informe o peso em quilos ou libras.",
      },
      {
        name: "Veja seu IMC e sua categoria",
        text: "A calculadora mostra seu IMC e a categoria de saúde do CDC (abaixo do peso, saudável, sobrepeso, obesidade) com uma breve descrição de cada uma.",
      },
    ],
  },
};

export default ptBR;

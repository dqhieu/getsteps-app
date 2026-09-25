import type { IdealWeightCalculatorMessages } from "./en";

const ptBR: IdealWeightCalculatorMessages = {
  meta: {
    title: "Calculadora de peso ideal: 4 fórmulas e faixa de IMC saudável",
    description:
      "Devine, Robinson, Miller e Hamwi lado a lado, mais a faixa de IMC saudável. Um homem de 175 cm fica entre 68,7 e 72 kg. Calculadora gratuita de peso ideal.",
    keywords: [
      "calculadora de peso ideal",
      "calculadora de peso corporal ideal",
      "calculadora de peso saudável",
      "quanto eu deveria pesar",
      "fórmula de Devine",
      "fórmula de Robinson",
      "fórmula de Hamwi",
      "peso ideal pela altura",
      "faixa de peso saudável",
    ],
    ogTitle: "Calculadora de peso ideal: 4 fórmulas e faixa de IMC saudável",
    ogDescription:
      "Quatro fórmulas clínicas de peso ideal lado a lado, mais a faixa de IMC saudável para a sua altura.",
  },
  hero: {
    title: "Calculadora de peso ideal",
    subtitle:
      "Quatro fórmulas clínicas lado a lado, com a faixa de IMC saudável. Ver o quanto elas discordam é o que esta calculadora faz de mais útil.",
  },
  calculator: {
    details: "Seus dados",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    height: "Altura",
    currentWeight: "Peso atual",
    optional: "(opcional)",
    placeholderKg: "ex.: 78",
    placeholderLbs: "ex.: 172",
    calculate: "Calcular peso ideal",
    results: "Seus resultados",
    formulaAverage: "Média das fórmulas",
    range: "faixa {min}–{max}",
    healthyBmiRange: "Faixa de IMC saudável",
    to: "até {weight}",
    verdictWithin:
      "Seu peso está dentro da faixa de IMC saudável para a sua altura. A média das fórmulas é um ponto dentro dessa banda, não um alvo que você precise atingir.",
    verdictAbove: "Seu peso está {amount} acima da faixa de IMC saudável para a sua altura.",
    verdictBelow: "Seu peso está {amount} abaixo da faixa de IMC saudável para a sua altura.",
    fourFormulas: "As quatro fórmulas",
    disclaimer:
      "As quatro fórmulas só veem altura e sexo. Elas não consideram massa muscular nem estrutura óssea, então um corpo musculoso fica alto em todas. A faixa de IMC saudável é a resposta mais útil: é uma banda, não um único alvo.",
    formulas: {
      devine: {
        name: "Devine",
        note: "A fórmula mais citada e ainda o padrão para dosagem de medicamentos. Escrita para calcular doses, não metas corporais.",
      },
      robinson: {
        name: "Robinson",
        note: "Uma revisão de Devine com uma amostra maior. Fica abaixo de Devine em pessoas altas.",
      },
      miller: {
        name: "Miller",
        note: "A mais plana das quatro: a altura muda menos o resultado, então ela fica mais alta em pessoas baixas e mais baixa em pessoas altas.",
      },
      hamwi: {
        name: "Hamwi",
        note: "A mais antiga, criada para o cuidado do diabetes. O maior aumento por polegada, então fica mais alta em pessoas altas.",
      },
    },
  },
  resultCta: {
    headline: "Hábitos movem o número. Nada mais faz isso.",
    description:
      "O Steps registra sua atividade diária automaticamente, para você construir a consistência que de fato muda o peso ao longo dos meses.",
  },
  sticky: "Acompanhe seus passos com o Steps",
  info: {
    title: "Como calculamos o peso ideal",
    intro:
      "As quatro fórmulas têm a mesma forma: um peso base em 5 ft, mais uma quantidade fixa para cada polegada acima disso. Só as constantes mudam.",
    formulasTitle: "As fórmulas",
    formulas: [
      {
        name: "Devine (1974)",
        body: "Homens: 50 kg + 2,3 kg por polegada acima de 5 ft. Mulheres: 45,5 kg + 2,3 kg por polegada.",
      },
      {
        name: "Robinson (1983)",
        body: "Homens: 52 kg + 1,9 kg por polegada. Mulheres: 49 kg + 1,7 kg por polegada.",
      },
      {
        name: "Miller (1983)",
        body: "Homens: 56,2 kg + 1,41 kg por polegada. Mulheres: 53,1 kg + 1,36 kg por polegada.",
      },
      {
        name: "Hamwi (1964)",
        body: "Homens: 48 kg + 2,7 kg por polegada. Mulheres: 45,5 kg + 2,2 kg por polegada.",
      },
      {
        name: "Faixa de IMC saudável",
        body: "Peso para IMC de 18,5 a 24,9 na sua altura.",
      },
      {
        name: "Exemplo:",
        body: "um homem de 175 cm obtém 70,5 (Devine), 68,9 (Robinson), 68,7 (Miller) e 72,0 (Hamwi), com média de 70,0 kg. A faixa de IMC saudável vai de 56,7 a 76,3 kg.",
      },
    ],
    notice:
      "A média das quatro fórmulas fica perto do meio de uma faixa de IMC de quase 20 kg. Essa folga é o resumo honesto: as equações produzem um ponto plausível dentro de um intervalo saudável bem maior, não um alvo que você errou se não estiver nele.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "O que é peso corporal ideal?",
      answer:
        "É uma estimativa clínica de um peso saudável com base na altura e no sexo, e vale saber de onde veio: as quatro fórmulas comuns foram criadas para dosagem de medicamentos, não para metas corporais. Devine escreveu a dele em 1974 para calcular doses de gentamicina. Depois elas foram adotadas como metas de saúde, e por isso se comportam de um jeito estranho nesse uso.",
    },
    {
      question: "Qual fórmula de peso ideal devo usar?",
      answer:
        "Nenhuma sozinha. Elas discordam em 3 a 4 kg numa altura média e ainda mais nos extremos, o que mostra quanta precisão existe de fato. A média das quatro é um meio razoável, mas a faixa de IMC saudável é mais útil porque dá uma banda de cerca de 20 kg em vez de um número para acertar.",
    },
    {
      question: "Por que as quatro fórmulas dão respostas diferentes?",
      answer:
        "Elas foram construídas com populações diferentes e não concordam sobre quanto peso cada polegada de altura deve somar. Hamwi soma 2,7 kg por polegada nos homens, Miller só 1,41. Em 175 cm a diferença é pequena, mas em 195 cm Hamwi devolve cerca de 87 kg e Miller cerca de 78. Quanto mais alto ou mais baixo você for, mais elas se afastam.",
    },
    {
      question: "O peso ideal é preciso para pessoas musculosas?",
      answer:
        "Não, e essa é a falha mais clara das fórmulas. Elas só veem altura e sexo, então não distinguem 80 kg de músculo de 80 kg de gordura. Um atleta treinado aparece com sobrepeso nas quatro e também no IMC. Se você carrega músculo de verdade, o percentual de gordura e a relação cintura-quadril dizem muito mais do que qualquer meta de peso.",
    },
    {
      question: "Qual é uma faixa de IMC saudável?",
      answer:
        "De 18,5 a 24,9. Em peso a 175 cm isso é 56,7 a 76,3 kg, uma banda de quase 20 kg. Essa largura é o ponto: peso saudável é uma faixa, não um número, e onde você fica dentro dela depende da sua estrutura, da massa muscular e do que você consegue manter.",
    },
    {
      question: "Devo tentar chegar ao meu peso ideal?",
      answer:
        "Só se isso coincidir com algo sustentável para você. Resultados de saúde acompanham comportamentos com mais confiança do que um número na balança: quem é ativo com um peso mais alto em geral se sai melhor do que quem é sedentário com um peso mais baixo. Se o seu peso já está na faixa de IMC saudável, perseguir o meio de uma fórmula não vale muito.",
    },
  ],
  cta: {
    title: "Crie o hábito que move o número",
    description:
      "Baixe o app Steps para registrar seus passos diários e manter a consistência nos meses que de fato mudam o peso.",
  },
  howTo: {
    name: "Como calcular seu peso ideal",
    description:
      "Informe sexo e altura para ver o peso corporal ideal pelas fórmulas de Devine, Robinson, Miller e Hamwi, mais a faixa de IMC saudável.",
    steps: [
      {
        name: "Selecione seu sexo",
        text: "Cada uma das quatro fórmulas usa um peso base e um acréscimo por polegada diferentes para homens e mulheres.",
      },
      {
        name: "Informe sua altura",
        text: "Alterne entre centímetros e pés/polegadas. A altura é a única variável que as quatro fórmulas realmente usam.",
      },
      {
        name: "Adicione seu peso atual se quiser uma comparação",
        text: "Opcional. Mostra a que distância você está da média das fórmulas e se você está na faixa de IMC saudável.",
      },
      {
        name: "Leia a faixa, não o número",
        text: "A calculadora devolve as quatro estimativas, a média delas e a banda de peso do IMC saudável para a sua altura, que é a resposta mais ampla e útil.",
      },
    ],
  },
};

export default ptBR;

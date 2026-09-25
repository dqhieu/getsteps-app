import type { WaistToHipRatioCalculatorMessages } from "./en";

const ptBR: WaistToHipRatioCalculatorMessages = {
  meta: {
    title: "Calculadora de relação cintura-quadril: faixas de risco da OMS",
    description:
      "Calcule sua relação cintura-quadril pelos limiares da OMS. O risco sobe acima de 0,90 nos homens e de 0,85 nas mulheres. Calculadora gratuita com checagem da circunferência da cintura.",
    keywords: [
      "calculadora relação cintura quadril",
      "calculadora RCQ",
      "relação cintura quadril",
      "calculadora de formato corporal",
      "calculadora de gordura visceral",
      "risco da circunferência da cintura",
      "formato maçã ou pera",
      "relação cintura quadril OMS",
    ],
    ogTitle: "Calculadora de relação cintura-quadril: faixas de risco da OMS",
    ogDescription:
      "Calcule sua relação cintura-quadril e veja onde ela cai em relação aos limiares de risco cardiovascular da OMS.",
  },
  hero: {
    title: "Calculadora de relação cintura-quadril",
    subtitle:
      "Duas medidas com fita preveem o risco cardiovascular melhor do que o IMC, porque mostram onde o corpo guarda gordura, não só quanto existe.",
  },
  calculator: {
    measurements: "Suas medidas",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    genderHint: "A OMS usa limiares de risco diferentes para homens e mulheres.",
    waistHip: "Cintura e quadril",
    waist: "cintura",
    hip: "quadril",
    howToMeasure: "Como medir",
    waistLabel: "Cintura:",
    waistMeasure:
      "o ponto mais estreito entre a última costela e o topo do osso do quadril, no fim de uma expiração normal.",
    hipLabel: "Quadril:",
    hipMeasure: "o ponto mais largo ao redor dos glúteos.",
    tapeMeasure:
      "Mantenha a fita nivelada e justa sem comprimir a pele. Meça sobre a pele ou uma roupa fina.",
    calculate: "Calcular minha relação",
    results: "Seus resultados",
    ratioLabel: "Relação cintura-quadril",
    waistCheck: "Checagem da circunferência da cintura",
    targetWaist:
      "Com a medida atual do quadril, uma cintura de {waist} ou menos colocaria você na faixa de risco baixo.",
    bandsTitle: "Faixas de risco da OMS para {group}",
    men: "homens",
    women: "mulheres",
    groupMen: "homens",
    groupWomen: "mulheres",
    rangeAndAbove: "{min} e acima",
    rangeBelow: "abaixo de {max}",
    rangeBetween: "{min} – {max}",
    disclaimer:
      "A relação cintura-quadril é um rastreamento, não um diagnóstico. Ela acompanha onde a gordura está, não quanto existe, e por isso prevê melhor o risco cardiovascular do que o IMC sozinho. Converse sobre qualquer resultado na faixa moderada ou alta com um médico.",
    levels: {
      low: {
        label: "Risco baixo",
        description:
          "A gordura não está concentrada ao redor do abdômen. Este é o padrão de menor risco para {group}.",
      },
      moderate: {
        label: "Risco moderado",
        description:
          "Algum acúmulo de gordura central. Associado a um aumento mensurável do risco cardiovascular e de diabetes tipo 2.",
      },
      high: {
        label: "Risco alto",
        description:
          "Risco substancialmente elevado de doença cardiovascular e diabetes tipo 2. Vale conversar com um médico.",
      },
    },
    waistVerdict: {
      high: "Uma cintura de {waist} cm está no nível ou acima da marca de {threshold} cm em que a OMS sinaliza risco substancialmente aumentado para {group}.",
      moderate:
        "Uma cintura de {waist} cm está acima da marca de {threshold} cm em que a OMS sinaliza risco aumentado para {group}.",
      low: "Uma cintura de {waist} cm está abaixo do limiar de {threshold} cm que a OMS usa para {group}.",
    },
  },
  resultCta: {
    headline: "Caminhar atinge a gordura que isto mede",
    description:
      "Atividade aeróbica regular reduz a gordura visceral de forma específica, mesmo com o peso estável. O Steps registra a sua automaticamente para o hábito permanecer.",
  },
  sticky: "Acompanhe seus passos com o Steps",
  info: {
    title: "Como calculamos sua faixa de risco",
    intro:
      "A conta é trivial. O valor está nos limiares, que vêm da consulta de especialistas da OMS de 2008 sobre circunferência da cintura e relação cintura-quadril.",
    formulaTitle: "A fórmula e os limiares",
    formulas: [
      { name: "RCQ", body: "circunferência da cintura ÷ circunferência do quadril" },
      { name: "Homens:", body: "baixo abaixo de 0,90, moderado de 0,90 a 0,99, alto de 1,0 para cima" },
      { name: "Mulheres:", body: "baixo abaixo de 0,80, moderado de 0,80 a 0,84, alto de 0,85 para cima" },
      { name: "Só a cintura (homens):", body: "risco aumentado em 94 cm, substancialmente aumentado em 102 cm" },
      { name: "Só a cintura (mulheres):", body: "risco aumentado em 80 cm, substancialmente aumentado em 88 cm" },
      {
        name: "Exemplo:",
        body: "um homem com 90 cm de cintura e 100 cm de quadril marca 0,90, a base da faixa moderada.",
      },
    ],
    conflict:
      "A checagem da circunferência da cintura corre independente da relação, porque as duas podem discordar. Quadris largos podem puxar a relação para a faixa de risco baixo enquanto a cintura sozinha ainda seria sinalizada. Quando conflitam, aja pela leitura mais cautelosa.",
    screening:
      "É uma medida de rastreamento, não um diagnóstico. Um resultado na faixa moderada ou alta vale a conversa com um médico, sobretudo junto com pressão arterial, glicemia de jejum ou lipídios.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "Qual é uma relação cintura-quadril saudável?",
      answer:
        "A OMS coloca risco baixo abaixo de 0,90 nos homens e abaixo de 0,80 nas mulheres. Entre 0,90 e 0,99 nos homens, ou 0,80 e 0,84 nas mulheres, o risco é moderado. A partir de 1,0 nos homens e de 0,85 nas mulheres, o risco está substancialmente elevado. Os limiares das mulheres são mais baixos porque elas carregam naturalmente mais gordura no quadril e nas coxas: a mesma relação significa mais gordura abdominal numa mulher do que num homem.",
    },
    {
      question: "Por que a relação cintura-quadril importa mais do que o IMC?",
      answer:
        "Porque ela vê onde a gordura está, e o IMC não consegue. A gordura visceral ao redor dos órgãos abdominais é metabolicamente ativa: libera sinais inflamatórios e ácidos graxos livres direto na circulação portal. A gordura do quadril e das coxas não se comporta assim. Duas pessoas com o mesmo IMC podem ter riscos muito diferentes conforme a distribuição, e a RCQ captura isso.",
    },
    {
      question: "Como medir corretamente a cintura e o quadril?",
      answer:
        "A cintura no ponto mais estreito entre a última costela e o topo do osso do quadril, no fim de uma expiração normal, sem sugar a barriga. O quadril no ponto mais largo ao redor dos glúteos. Mantenha a fita nivelada e justa sem comprimir a pele, sobre a pele ou uma roupa fina. Medir numa altura diferente é o erro mais comum: use os mesmos pontos de referência toda vez.",
    },
    {
      question: "Qual é a diferença entre formato maçã e pera?",
      answer:
        "O formato maçã carrega gordura ao redor do meio, com uma relação mais alta e maior risco metabólico. O formato pera a carrega no quadril e nas coxas, com uma relação mais baixa e um perfil de risco mais favorável. A distribuição é em grande parte genética e muito influenciada por hormônios sexuais, por isso muitas mulheres se deslocam para um padrão maçã depois da menopausa mesmo sem ganhar peso.",
    },
    {
      question: "Posso reduzir minha relação cintura-quadril?",
      answer:
        "Sim, mas não mirando nela diretamente. Redução localizada não funciona: nenhum exercício abdominal queima de preferência a gordura da barriga. O que funciona é um déficit calórico geral, e a gordura visceral está entre as primeiras reservas mobilizadas, então a perda inicial muitas vezes melhora a relação mais rápido do que o peso total. Atividade aeróbica regular reduz a gordura visceral de forma específica, mesmo com o peso estável.",
    },
    {
      question: "Caminhar reduz gordura da barriga?",
      answer:
        "Reduz gordura visceral, que é a parte que importa aqui. Atividade aeróbica moderada e regular baixa a gordura visceral de forma mensurável mesmo quando o peso muda pouco, e caminhar é a forma mais fácil de sustentar o volume necessário. Os estudos em geral usam 150 a 300 minutos por semana de atividade moderada, ou seja, 30 a 60 minutos na maioria dos dias.",
    },
    {
      question: "Devo usar a circunferência da cintura ou a relação?",
      answer:
        "As duas, e é por isso que esta calculadora informa ambas. A relação sozinha pode enganar: alguém com cintura grande e quadris incomumente largos pode cair na faixa de risco baixo mesmo com uma circunferência que a OMS sinalizaria à parte. Esses limiares são 94 e 102 cm nos homens, 80 e 88 cm nas mulheres. Quando as duas medidas discordam, fique com a leitura mais cautelosa.",
    },
  ],
  cta: {
    title: "Caminhe a gordura que importa",
    description:
      "Baixe o app Steps para registrar sua caminhada diária e criar o hábito aeróbico que reduz a gordura visceral.",
  },
  howTo: {
    name: "Como calcular sua relação cintura-quadril",
    description:
      "Meça a cintura e o quadril, informe os dois e veja onde a relação cai em relação aos limiares de risco cardiovascular da OMS.",
    steps: [
      {
        name: "Selecione seu sexo",
        text: "A OMS define limiares mais baixos para mulheres, que carregam naturalmente mais gordura no quadril e nas coxas.",
      },
      {
        name: "Meça sua cintura",
        text: "Encontre o ponto mais estreito entre a última costela e o topo do osso do quadril. Meça no fim de uma expiração normal, sem sugar a barriga.",
      },
      {
        name: "Meça seu quadril",
        text: "Meça o ponto mais largo ao redor dos glúteos, com a fita nivelada e justa sem comprimir a pele.",
      },
      {
        name: "Leia sua faixa de risco",
        text: "A calculadora devolve sua relação, a faixa de risco da OMS, uma checagem separada da circunferência da cintura e a cintura que colocaria você na faixa de risco baixo.",
      },
    ],
  },
};

export default ptBR;

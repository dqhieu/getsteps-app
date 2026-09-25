import type { TreadmillCalorieCalculatorMessages } from "./en";

const ptBR: TreadmillCalorieCalculatorMessages = {
  meta: {
    title: "Calculadora de calorias na esteira: grátis, com inclinação",
    description:
      "Calorias na esteira por velocidade, inclinação e peso. Um adulto de 155 lb queima ~120 cal em 30 min a 3 mph no plano, ~200 cal a 5% de inclinação. Calculadora grátis baseada no ACSM.",
    keywords: [
      "calculadora de calorias na esteira",
      "calorias queimadas na esteira",
      "calculadora de calorias com inclinação",
      "calorias gastas na esteira",
      "calorias caminhada na esteira",
      "calorias esteira inclinada",
      "calorias 12-3-30",
      "equação metabólica ACSM",
      "valores MET da esteira",
    ],
    ogTitle: "Calculadora de calorias na esteira: grátis, com inclinação",
    ogDescription:
      "Calcule as calorias na esteira por velocidade, inclinação, peso e tempo. Calculadora grátis com as equações metabólicas do ACSM.",
    ogImageAlt: "Calculadora de calorias na esteira",
  },
  hero: {
    title: "Calculadora de calorias na esteira",
    subtitle:
      "Calcule as calorias gastas na esteira a partir da sua velocidade, inclinação, peso e tempo. As equações metabólicas do ACSM entram com a inclinação em vez de ignorá-la.",
  },
  calculator: {
    session: "Sua sessão na esteira",
    weight: "Peso",
    speed: "Velocidade",
    incline: "Inclinação: {percent}%",
    duration: "Duração",
    minutes: "minutos",
    caloriesBurned: "Calorias gastas",
    kcalValue: "{value} kcal",
    inclineAdds:
      "A inclinação de {grade}% adiciona {extra} kcal em relação à mesma sessão no plano ({flat} kcal).",
    met: "MET",
    distance: "Distância",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "Passos estimados",
    fatBurned: "Gordura queimada",
    grams: "{value} g",
    equation: "Equação metabólica ACSM de {gait} ({vo2} ml/kg/min de VO₂).",
    gaitWalking: "caminhada",
    gaitRunning: "corrida",
    tableTitle: "Calorias por inclinação",
    tableSubtitle: "Mesmo peso, velocidade e duração. Só a inclinação muda.",
    colIncline: "Inclinação",
    colMet: "MET",
    colCalories: "Calorias",
    colVsFlat: "vs plano",
    vsFlat: "+{percent}%",
  },
  resultCta: {
    headline: "Acompanhe as calorias que você realmente gasta",
    description:
      "O Steps conta cada passo em segundo plano e transforma nas calorias realmente gastas a cada dia, sem lançamento manual.",
  },
  info: {
    title: "Como calculamos as calorias na esteira",
    intro:
      "Um único valor de MET não descreve o trabalho na esteira, porque a inclinação muda o custo energético em cada velocidade. Usamos as equações metabólicas do ACSM, que estimam o consumo de oxigênio a partir da velocidade e da inclinação separadamente e depois convertem isso em calorias.",
    formulaTitle: "As fórmulas",
    formulas: [
      { strong: "VO₂ da caminhada", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ da corrida", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S é a velocidade em metros por minuto, G a inclinação como fração (5% = 0,05). A VO₂ está em ml/kg/min.",
      },
      { strong: "MET", rest: "= VO₂ ÷ 3,5, e kcal/min = MET × 3,5 × peso(kg) ÷ 200" },
      {
        strong: "Exemplo:",
        rest: "70 kg a 5 km/h e 5% de inclinação dão VO₂ 19,3, cerca de 5,5 MET, aproximadamente 405 kcal por hora.",
      },
    ],
    note: "A equação de caminhada vale abaixo de 6,5 km/h e a de corrida a partir daí, que é onde a maioria passa de uma caminhada rápida para um trote. As estimativas assumem que você não está segurando os corrimãos.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "Quantas calorias 30 minutos na esteira queimam?",
      answer:
        "Um adulto de 70 kg (155 lb) caminhando 30 minutos a 5 km/h (3,1 mph) em esteira plana queima cerca de 125 calorias. Suba a inclinação para 5% e a mesma sessão queima cerca de 205 calorias. A 10% fica mais perto de 285. A inclinação importa mais do que qualquer outro ajuste que você possa mudar.",
    },
    {
      question: "A inclinação realmente queima mais calorias?",
      answer:
        "Sim, e bastante. Cada 1% de inclinação acrescenta trabalho vertical ao movimento horizontal. Em velocidades de caminhada, 5% de inclinação elevam o custo energético em cerca de 60% em relação ao plano, e 10% podem mais do que dobrá-lo, na mesma velocidade e duração.",
    },
    {
      question: "Quantas calorias o treino 12-3-30 queima?",
      answer:
        "12-3-30 significa 12% de inclinação, 3 mph, 30 minutos. Para um adulto de 70 kg são aproximadamente 300 calorias, contra cerca de 120 calorias nos mesmos 30 minutos a 3 mph no plano. A inclinação faz a maior parte do trabalho: cerca de 60% do gasto total.",
    },
    {
      question: "A leitura de calorias da própria esteira é precisa?",
      answer:
        "Em geral, não. A maioria das máquinas assume um peso padrão e ignora o peso que você informa no painel, o que costuma superestimar o gasto em 15 a 25%. Um cálculo com o seu peso real, a velocidade e a inclinação é mais confiável.",
    },
    {
      question: "Você gasta mais calorias caminhando em inclinação ou correndo no plano?",
      answer:
        "Elas podem se igualar, mas você precisa de uma inclinação íngreme. Caminhar a 5 km/h a 12% fica em cerca de 8,5 MET, basicamente o mesmo que trotar a 8 km/h no plano (8,6 MET). A 10%, mais suave, a caminhada inclinada é 7,7 MET, um pouco menos. A vantagem da caminhada inclinada é um custo energético parecido com muito menos impacto nas articulações.",
    },
    {
      question: "Você deve segurar os corrimãos?",
      answer:
        "Não, se o objetivo é gastar calorias. Segurar as barras transfere parte do peso do corpo para os braços e pode cortar o gasto real em 20 a 25%, sobretudo em inclinações fortes, enquanto o painel continua mostrando o número sem apoio.",
    },
  ],
  cta: {
    title: "Acompanhe seus treinos na esteira",
    description:
      "Baixe o app Steps para registrar automaticamente suas caminhadas, as calorias gastas e o progresso ao longo do tempo.",
  },
  sticky: "Conte seus passos com o Steps",
};

export default ptBR;

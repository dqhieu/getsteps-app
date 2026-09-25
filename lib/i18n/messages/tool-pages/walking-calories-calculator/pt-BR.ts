import type { WalkingCaloriesMessages } from "./en";

const pt: WalkingCaloriesMessages = {
  meta: {
    title: "Calculadora de calorias da caminhada: grátis por peso e ritmo",
    description:
      "Calorias da caminhada: um adulto de 70 kg queima ~150 kcal em 30 min a 5,6 km/h. Calculadora grátis — estimativa na hora por peso, velocidade, tempo, distância ou passos.",
    keywords: [
      "calculadora calorias caminhada",
      "calorias queimadas caminhando",
      "valor MET caminhada",
      "MET caminhada 5 km/h",
      "valor MET caminhar 5 km/h",
      "valor MET caminhada rápida",
      "valor MET ritmo médio",
      "valor MET ritmo moderado",
      "gasto calórico caminhada",
      "calorias caminhada por km",
      "valor MET caminhada 4 km/h",
      "valor MET caminhada 4,5 km/h",
      "valor MET caminhada 6 km/h",
      "fórmula calculadora calorias caminhada MET",
    ],
    ogTitle: "Calculadora de calorias da caminhada: grátis por peso e ritmo",
    ogDescription:
      "Um adulto de 70 kg queima ~150 kcal em 30 min em ritmo moderado. Calculadora grátis — resultado na hora por peso, velocidade, tempo, distância ou passos.",
    ogImageAlt: "Calculadora de calorias da caminhada",
  },
  hero: {
    title: "Calculadora de calorias da caminhada e valores MET",
    subtitle:
      "Calcule as calorias queimadas na caminhada com valores MET (equivalente metabólico) para cada velocidade — do passeio lento a 2 km/h à caminhada atlética acima de 7 km/h. Com tabela MET completa.",
  },
  appCta: {
    headline: "Acompanhe as calorias que você realmente queima",
    description:
      "O Steps conta cada passo em segundo plano e transforma isso nas calorias que você queima por dia, sem lançar nada na mão.",
  },
  stickyCta: "Acompanhe seus passos com o Steps",
  calculator: {
    calculateBy: "Calcular por",
    distance: "Distância",
    time: "Tempo",
    weight: "Peso",
    duration: "Duração",
    minutes: "minutos",
    miles: "milhas",
    walkingSpeed: "Velocidade da caminhada",
    speeds: {
      slow: { label: "Lenta", description: "3,2 km/h (2 mph)" },
      normal: { label: "Normal", description: "5 km/h (3,1 mph)" },
      brisk: { label: "Acelerada", description: "6,4 km/h (4 mph)" },
      fast: { label: "Rápida", description: "7,2 km/h (4,5 mph)" },
    },
    caloriesBurned: "Calorias queimadas",
    walkingTime: "Tempo de caminhada",
    distanceResult: "Distância",
    steps: "Passos",
    fatBurned: "Gordura queimada",
    metValue: "Valor MET",
    metTableTitle: "Velocidade da caminhada e valores MET",
    metTableIntro:
      "O MET (Metabolic Equivalent of Task) representa o custo energético de uma atividade. MET mais alto significa mais calorias queimadas.",
    columns: {
      speed: "Velocidade",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "Descrição",
    },
    paceDescriptions: {
      slow: "Caminhada tranquila",
      normal: "Ritmo médio",
      brisk: "Caminhada rápida",
      fast: "Caminhada atlética",
    },
  },
  info: {
    title: "Como calculamos as calorias da caminhada",
    intro:
      "Usamos o método MET (Metabolic Equivalent of Task) para calcular as calorias queimadas. Essa abordagem, baseada em pesquisa, considera seu peso, a duração e a intensidade.",
    formulaTitle: "A fórmula",
    formula: "Calorias = MET × peso (kg) × duração (horas)",
    metLabel: "MET:",
    metText: "Metabolic Equivalent of Task — o gasto de energia em relação ao repouso",
    exampleLabel: "Exemplo:",
    example:
      "Uma pessoa de 70 kg caminhando em ritmo normal (MET 3,5) por 1 hora queima: 3,5 × 70 × 1 = 245 calorias",
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "Quantas calorias 1 milha de caminhada queima?",
      answer:
        "Caminhar 1 milha queima cerca de 80 a 100 calorias para a maioria das pessoas. O valor exato depende do seu peso e da velocidade. Quem pesa mais queima mais calorias por milha.",
    },
    {
      question: "Quantas calorias 30 minutos de caminhada queimam?",
      answer:
        "Uma caminhada de 30 minutos em ritmo normal queima cerca de 100 a 150 calorias para a maioria dos adultos. Caminhar rápido pode subir para 150–200 calorias. Use a calculadora acima para uma estimativa personalizada.",
    },
    {
      question: "Quantas calorias 40 minutos de caminhada queimam?",
      answer:
        "40 minutos queimam cerca de 140 a 200 calorias em ritmo moderado (4,8 km/h) e 200 a 280 em ritmo acelerado (5,6–6,4 km/h) para um adulto de 70 kg. No ritmo de caminhada atlética de 8 km/h, os mesmos 40 minutos queimam cerca de 290 calorias. A 9,7 km/h (caminhada muito rápida ou trote leve, MET ~7,0), 40 minutos queimam cerca de 325 a 330 calorias para uma pessoa de 70 kg.",
    },
    {
      question: "Quantas calorias 40 minutos a 9,7 km/h queimam?",
      answer:
        "Caminhar 40 minutos a 9,7 km/h (6,0 mph) — ritmo de caminhada atlética na esteira, MET ~7,0 — queima cerca de 327 calorias para uma pessoa de 70 kg (155 lb). Quem pesa mais queima mais: cerca de 380 kcal a 82 kg e 422 kcal a 91 kg. A maioria dos adultos não sustenta uma caminhada de verdade nessa velocidade e passa para um trote leve. Use a calculadora acima para um número preciso com o seu peso.",
    },
    {
      question: "A velocidade da caminhada muda as calorias queimadas?",
      answer:
        "Sim, e bastante. Caminhar mais rápido aumenta o valor MET e queima mais calorias por minuto. A caminhada rápida (6,4 km/h) queima cerca de 30% a mais do que um passeio tranquilo (3,2 km/h).",
    },
    {
      question: "O que é MET e por que isso importa?",
      answer:
        "MET (Metabolic Equivalent of Task) é uma medida científica do gasto de energia. Um MET de 1 é o seu metabolismo em repouso. Caminhar em ritmo normal tem MET 3,5: você queima 3,5 vezes mais calorias do que em repouso.",
    },
    {
      question: "Qual é o valor MET da caminhada em ritmo médio?",
      answer:
        "O valor MET da caminhada em ritmo médio (cerca de 5 km/h ou 3,1 mph) é 3,5. É a velocidade mais comum em adultos e a base da maioria das calculadoras. Uma pessoa de 70 kg queima cerca de 245 calorias por hora nesse ritmo.",
    },
    {
      question: "Qual é o valor MET da caminhada em ritmo moderado?",
      answer:
        "Um ritmo moderado (4,0–4,5 km/h ou 2,5–2,8 mph) tem MET entre 3,0 e 3,3. É um ritmo confortável, em que dá para conversar, ideal no dia a dia. Uma pessoa de 70 kg queima 210 a 231 calorias por hora.",
    },
    {
      question: "Qual é o valor MET da caminhada a 5 km/h (3,1 mph)?",
      answer:
        "O valor MET a 5 km/h (3,1 mph) é 3,5. Isso é considerado ritmo normal. Uma pessoa de 70 kg queima cerca de 245 calorias por hora (3,5 × 70 = 245 kcal/h).",
    },
    {
      question: "Qual é o valor MET da caminhada a 4,5 km/h (2,8 mph)?",
      answer:
        "O valor MET a 4,5 km/h (2,8 mph) é 3,3. É um ritmo estável e confortável. Para uma pessoa de 70 kg, são cerca de 231 calorias por hora (3,3 × 70 = 231 kcal/h).",
    },
    {
      question: "Qual é o valor MET da caminhada rápida a 6 km/h?",
      answer:
        "A caminhada rápida a 6,0 km/h (3,7 mph) tem MET 4,5. É cerca de 30% mais intensa do que a caminhada normal (MET 3,5). Uma pessoa de 70 kg queima cerca de 315 calorias por hora nesse ritmo.",
    },
    {
      question: "Quanta gordura eu posso queimar caminhando?",
      answer:
        "Um quilograma de gordura corporal contém cerca de 7.700 calorias. Caminhar 10.000 passos por dia (cerca de 400 calorias) queimaria cerca de 1 kg de gordura a cada 19 dias, sem mudar a dieta. Combine a caminhada com uma alimentação equilibrada.",
    },
  ],
  formula: {
    title: "Como funciona a fórmula das calorias da caminhada",
    intro:
      "A {name} usa valores MET (Metabolic Equivalent of Task) do {source} — a mesma referência dos fisiologistas do exercício no mundo. A fórmula é:",
    name: "fórmula da calculadora de calorias queimadas na caminhada",
    source: "Compendium of Physical Activities",
    equation: "Calorias = MET × peso (kg) × duração (horas)",
    glance: "Cada velocidade tem um valor MET específico. Estes são os MET mais buscados:",
    highlights: [
      { phrase: "Valor MET caminhada 4,8 km/h", detail: "(3 mph) =" },
      { phrase: "Valor MET ritmo moderado", detail: "(5 km/h) =" },
      { phrase: "Valor MET caminhada rápida", detail: "(6,4 km/h) =" },
      { phrase: "Valor MET caminhada 5 km/h", detail: "(3,1 mph) =" },
    ],
    chartNote:
      "Para o detalhamento completo, veja nossa {chart}: cada velocidade, do passeio lento à marcha atlética, mais ajustes de inclinação e terreno.",
    chartLabel: "tabela de valores MET da caminhada",
  },
  understanding: {
    title: "Entenda os valores MET da caminhada",
    term: "MET (Metabolic Equivalent of Task)",
    body:
      "O {term} é a medida científica padrão da intensidade do exercício. Um MET equivale ao gasto de energia do seu corpo em repouso total — cerca de 1 caloria por quilograma de peso por hora. Um MET de 3,5 significa que você queima 3,5 vezes mais energia do que sentado parado.",
    levels: {
      light: { title: "Caminhada leve", detail: "Passeio lento, ritmo de vitrine (2–4 km/h)" },
      moderate: { title: "Caminhada moderada", detail: "Ritmo normal a acelerado, o mais comum (4–6 km/h)" },
      vigorous: { title: "Caminhada vigorosa", detail: "Caminhada atlética, marcha ou subida (6+ km/h)" },
    },
    footnote:
      "Os valores MET da calculadora vêm do Compendium of Physical Activities, a referência dos cientistas do exercício. Caminhar a 5 km/h (3,1 mph) — a velocidade mais buscada — tem MET 3,5: uma pessoa de 70 kg queima 245 calorias por hora nesse ritmo.",
  },
  metTable: {
    title: "Valores MET completos por velocidade da caminhada",
    intro:
      "O MET (Metabolic Equivalent of Task) mede o gasto de energia. Um MET de 1,0 equivale à sua taxa metabólica de repouso. Use a tabela para o MET exato da sua velocidade. Valores do Compendium of Physical Activities.",
    columns: {
      activity: "Atividade de caminhada",
      kmh: "Velocidade (km/h)",
      mph: "Velocidade (mph)",
      met: "Valor MET",
      cal: "kcal/h (70 kg)",
    },
    activities: {
      "very-slow": "Caminhada muito lenta",
      "slow-stroll": "Passeio lento",
      leisurely: "Caminhada tranquila",
      comfortable: "Ritmo confortável",
      moderate: "Caminhada moderada",
      steady: "Ritmo constante",
      normal: "Caminhada normal",
      purposeful: "Caminhada com propósito",
      brisk: "Caminhada acelerada",
      fast: "Caminhada rápida",
      "very-fast": "Caminhada muito rápida",
      race: "Marcha atlética",
      "uphill-3": "Caminhada em subida (inclinação 3%)",
      "uphill-6": "Caminhada em subida (inclinação 6%)",
    },
    footnote:
      "Calorias por hora calculadas para uma pessoa de 70 kg (154 lb). O gasto real depende do seu peso — use a calculadora acima para uma estimativa personalizada. As linhas em destaque são os ritmos mais comuns. Fonte: Compendium of Physical Activities.",
  },
  cta: {
    title: "Acompanhe seus treinos de caminhada",
    description: "Baixe o app Steps para registrar automaticamente suas caminhadas, as calorias queimadas e o progresso.",
  },
  howTo: {
    name: "Como calcular as calorias queimadas na caminhada",
    description: "Informe a duração, o ritmo e o seu peso para estimar as calorias queimadas com valores MET.",
    steps: [
      { name: "Informe duração ou distância", text: "Você pode alternar entre quanto tempo caminhou e qual distância percorreu. Os dois dão a mesma estimativa." },
      { name: "Escolha o ritmo", text: "Lento, normal, acelerado ou rápido. Um ritmo maior usa um MET mais alto e queima mais calorias por minuto." },
      { name: "Informe o seu peso", text: "O peso é o maior multiplicador do gasto calórico." },
      { name: "Leia a estimativa", text: "A calculadora mostra as calorias queimadas, a média por minuto e o valor MET usado." },
    ],
  },
};

export default pt;

import type { BmrCalculatorMessages } from "./en";

const ptBR: BmrCalculatorMessages = {
  meta: {
    title: "Calculadora de taxa metabólica basal: BMR em 3 fórmulas",
    description:
      "Calcule sua taxa metabólica basal com Mifflin-St Jeor, Harris-Benedict e Katch-McArdle lado a lado. Um homem de 30 anos e 75 kg queima cerca de 1.699 calorias por dia em repouso. Calculadora grátis.",
    keywords: [
      "calculadora de BMR",
      "calculadora de taxa metabólica basal",
      "taxa metabólica de repouso",
      "equação de Mifflin-St Jeor",
      "equação de Harris-Benedict",
      "fórmula de Katch-McArdle",
      "quantas calorias queimo em repouso",
      "BMR e TDEE",
      "calculadora de metabolismo",
    ],
    ogTitle: "Calculadora de taxa metabólica basal: BMR em 3 fórmulas",
    ogDescription:
      "Calcule sua taxa metabólica basal com três fórmulas clínicas lado a lado, mais as calorias diárias em cada nível de atividade.",
    ogImageAlt: "Calculadora de taxa metabólica basal",
  },
  hero: {
    title: "Calculadora de taxa metabólica basal",
    subtitle:
      "Veja as calorias que seu corpo queima em repouso completo. Três fórmulas clínicas rodam juntas, para você ver a diferença em vez de um número só fingindo certeza.",
  },
  calculator: {
    details: "Seus dados",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    age: "Idade",
    years: "anos",
    weight: "Peso",
    height: "Altura",
    bodyFat: "Gordura corporal %",
    bodyFatOptional: "(opcional: libera Katch-McArdle)",
    bodyFatPlaceholder: "ex.: 20",
    activity: "Nível de atividade",
    activityLevels: {
      sedentary: "Sedentário",
      light: "Levemente ativo",
      moderate: "Moderadamente ativo",
      active: "Ativo",
      very_active: "Muito ativo",
    },
    activityDescriptions: {
      sedentary: "Trabalho de escritório, pouco ou nenhum exercício",
      light: "Exercício leve 1–3 dias por semana",
      moderate: "Exercício moderado 3–5 dias por semana",
      active: "Exercício intenso 6–7 dias por semana",
      very_active: "Trabalho físico ou dois treinos por dia",
    },
    calculate: "Calcular a taxa metabólica basal",
    results: "Seus resultados",
    bmr: "BMR",
    atRest: "calorias/dia em repouso",
    maintenance: "Manutenção",
    maintenanceAt: "em {level}",
    leanMass:
      "Massa magra: {mass}. Como você informou a gordura corporal, o número principal usa Katch-McArdle.",
    kgValue: "{value} kg",
    share: "Mesmo sentado o dia inteiro, a taxa metabólica basal responde por cerca de {percent}% das calorias que você queima.",
    formulasTitle: "As três fórmulas",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "Harris-Benedict revisada",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "Validada em uma população moderna. O padrão clínico atual e a escolha mais confiável quando a gordura corporal é desconhecida.",
      harris:
        "A original de 1919, revisada em 1984. Tende a ficar cerca de 5% acima porque o grupo do estudo era mais magro e mais ativo do que a população de hoje.",
      katch:
        "Parte da massa magra e ignora sexo e altura, o que a torna a opção mais precisa para corpos magros ou musculosos.",
      katchLocked: "Precisa de um percentual de gordura corporal. Informe acima para ver esta estimativa.",
    },
    used: "Usada",
    calValue: "{value} cal",
    byActivity: "Calorias diárias por nível de atividade",
    resultCta: {
      headline: "A taxa metabólica basal é o piso. Os passos são a alavanca.",
      description:
        "O gasto em repouso quase não se move, mas tudo acima dele se move. O Steps registra sua atividade sozinho e mostra o que ela soma ao número que você acabou de calcular.",
    },
  },
  info: {
    title: "Como calculamos a taxa metabólica basal",
    intro:
      "Três equações são de uso clínico comum e divergem o bastante para importar. Em vez de escolher uma e esconder a diferença, esta calculadora roda as três.",
    formulaTitle: "As fórmulas",
    formulas: [
      {
        title: "Mifflin-St Jeor (1990)",
        lines: [
          "Homens: (10 × peso kg) + (6,25 × altura cm) − (5 × idade) + 5",
          "Mulheres: (10 × peso kg) + (6,25 × altura cm) − (5 × idade) − 161",
        ],
      },
      {
        title: "Harris-Benedict revisada (1984)",
        lines: [
          "Homens: 88,362 + (13,397 × peso) + (4,799 × altura) − (5,677 × idade)",
          "Mulheres: 447,593 + (9,247 × peso) + (3,098 × altura) − (4,330 × idade)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: [
          "370 + (21,6 × massa magra kg), em que massa magra = peso × (1 − % de gordura corporal)",
        ],
      },
    ],
    exampleLabel: "Exemplo:",
    example:
      "um homem de 30 anos, 75 kg e 175 cm chega a 1.699 por Mifflin-St Jeor e 1.763 por Harris-Benedict. Com 20% de gordura, Katch-McArdle devolve 1.666.",
    primary:
      "Mifflin-St Jeor é o número principal, a menos que você informe a gordura corporal: aí Katch-McArdle assume. É a única das três que mede o tecido de fato responsável pelo gasto em repouso, em vez de inferi-lo da altura e do sexo.",
    activityFactors:
      "Multiplique a taxa metabólica basal por um fator de atividade para obter o TDEE: 1,2 sedentário, 1,375 levemente ativo, 1,55 moderadamente ativo, 1,725 ativo, 1,9 muito ativo. A calculadora mostra os cinco.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "O que é taxa metabólica basal?",
      answer:
        "A taxa metabólica basal (BMR) é a energia que o corpo gasta sem fazer nada: respirar, circular o sangue, manter a temperatura, reparar células. É medida deitado, acordado, após 12 horas de jejum. Na maioria dos adultos ela responde por 60 a 75% das calorias diárias, e por isso é o maior componente do que você queima.",
    },
    {
      question: "Qual é a diferença entre BMR e RMR?",
      answer:
        "O BMR é medido em laboratório rigoroso: repouso completo, em jejum, em sala termicamente neutra. A taxa metabólica de repouso (RMR) é medida em condições mais frouxas e sai cerca de 10% mais alta porque inclui um pouco de digestão e pequenos movimentos. No dia a dia os termos se misturam, e toda calculadora online, inclusive esta, estima algo mais próximo do RMR.",
    },
    {
      question: "Qual fórmula de taxa metabólica basal é mais precisa?",
      answer:
        "Mifflin-St Jeor para a maioria das pessoas. Foi validada por calorimetria indireta em uma população moderna e acerta dentro de cerca de 10% para uns 80% dos adultos. Harris-Benedict, mesmo na revisão de 1984, fica cerca de 5% acima porque o grupo de 1919 era mais magro e mais ativo. Katch-McArdle supera as duas se você souber a gordura corporal, porque parte da massa magra, o tecido que de fato move o gasto em repouso.",
    },
    {
      question: "Qual é a diferença entre BMR e TDEE?",
      answer:
        "A taxa metabólica basal é o que você queima em repouso completo. O TDEE (gasto energético diário total) é o BMR multiplicado por um fator de atividade: soma deslocamento, exercício e o custo de digerir. O TDEE é sempre maior: mesmo um dia totalmente sedentário fica em cerca de 1,2 vez o BMR. Defina metas calóricas pelo TDEE, não pelo BMR.",
    },
    {
      question: "Devo comer no nível da taxa metabólica basal para emagrecer?",
      answer:
        "Não. Comer no BMR é comer como se você tivesse passado o dia inteiro imóvel, o que cria um déficit de várias centenas a mil calorias antes de você se mover. É agressivo o bastante para custar músculo e, para muita gente, cai abaixo do piso de 1.200 (mulheres) ou 1.500 (homens) calorias. Em vez disso, tire de 250 a 500 calorias do TDEE.",
    },
    {
      question: "Por que minha taxa metabólica basal está mais baixa do que eu esperava?",
      answer:
        "O tamanho do corpo domina: pessoas menores e mais leves recebem números menores, e toda fórmula desconta a idade. A composição também importa: o músculo queima em repouso cerca de três vezes mais que a gordura por quilograma, então duas pessoas do mesmo peso podem diferir em 200 calorias ou mais. Depois de um déficit longo, a termogênese adaptativa pode deixar o BMR real 10 a 15% abaixo do valor previsto.",
    },
    {
      question: "Dá para aumentar a taxa metabólica basal?",
      answer:
        "Um pouco, e devagar. Ganhar músculo é a única alavanca durável: cada quilograma de músculo soma cerca de 13 calorias por dia em repouso, então um ano sério de treino de força pode render de 50 a 100 calorias. É real, mas modesto. Mexer-se mais muda o TDEE bem mais do que qualquer coisa que você faça no BMR, e por isso a contagem de passos move o ponteiro mais rápido do que truques de metabolismo.",
    },
  ],
  cta: {
    title: "Acompanhe o que você queima acima do repouso",
    description:
      "Baixe o app Steps para contar cada passo automaticamente e ver o gasto calórico diário se somar à sua taxa metabólica basal.",
  },
  sticky: "Acompanhe seus passos com o Steps",
  howTo: {
    name: "Como calcular sua taxa metabólica basal",
    description:
      "Informe sexo, idade, peso e altura para obter a taxa metabólica basal em três fórmulas clínicas, mais as calorias diárias em cada nível de atividade.",
    steps: [
      {
        name: "Informe seus dados corporais",
        text: "Defina sexo, idade, peso e altura. O peso alterna entre quilogramas e libras, a altura entre centímetros e pés/polegadas.",
      },
      {
        name: "Adicione a gordura corporal se souber",
        text: "Opcional. Informar libera Katch-McArdle, que parte da massa magra e é a mais precisa para corpos magros ou musculosos.",
      },
      {
        name: "Escolha o nível de atividade",
        text: "De sedentário a muito ativo. Isso não muda a taxa metabólica basal, mas define qual número de calorias de manutenção fica em destaque.",
      },
      {
        name: "Leia o BMR e as calorias de manutenção",
        text: "A calculadora devolve sua taxa metabólica basal, as três estimativas lado a lado e as calorias diárias totais em cada um dos cinco níveis.",
      },
    ],
  },
};

export default ptBR;

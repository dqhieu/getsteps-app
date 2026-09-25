import type { RuckingCalorieCalculatorMessages } from "./en";

const ptBR: RuckingCalorieCalculatorMessages = {
  meta: {
    title: "Calculadora de calorias de rucking: peso da mochila, terreno e inclinação",
    description:
      "Calcule as calorias de rucking a partir do peso da mochila, do ritmo, da inclinação e do terreno com a equação de Pandolf. Uma pessoa de 70 kg com 15 kg por uma hora queima ~350 calorias. Calculadora grátis.",
    keywords: [
      "calculadora de calorias de rucking",
      "calorias marcha com mochila",
      "calorias gastas no rucking",
      "calculadora de calorias colete com peso",
      "calorias trilha com mochila",
      "equação de Pandolf",
      "custo energético de carga",
      "calorias caminhada com mochila",
    ],
    ogTitle: "Calculadora de calorias de rucking: peso da mochila, terreno e inclinação",
    ogDescription:
      "Calcule as calorias gastas no rucking a partir do peso da mochila, do ritmo, da inclinação e do terreno. Calculadora grátis com a equação de Pandolf para transporte de carga.",
    ogImageAlt: "Calculadora de calorias de rucking",
  },
  hero: {
    title: "Calculadora de calorias de rucking",
    subtitle:
      "Calcule as calorias gastas no rucking (caminhada com carga) a partir do peso da mochila, do ritmo, da inclinação e do terreno. A equação de Pandolf para transporte de carga faz o peso nas costas contar de verdade.",
  },
  calculator: {
    yourRuck: "Seu rucking",
    switchImperial: "Mudar para lbs / mph",
    switchMetric: "Mudar para kg / km/h",
    bodyWeight: "Peso corporal",
    packWeight: "Peso da mochila",
    pace: "Ritmo",
    duration: "Duração",
    minutes: "minutos",
    grade: "Inclinação: {percent}%",
    terrain: "Terreno",
    terrains: {
      blacktop: {
        label: "Estrada pavimentada",
        inline: "estrada pavimentada",
        description: "Asfalto ou esteira. A superfície de referência.",
      },
      gravel: {
        label: "Estrada de cascalho",
        inline: "estrada de cascalho",
        description: "Estrada de terra ou cascalho, vegetação leve.",
      },
      trail: {
        label: "Trilha",
        inline: "trilha",
        description: "Trilha compacta, com raízes e pedra.",
      },
      "heavy-brush": {
        label: "Mato fechado",
        inline: "mato fechado",
        description: "Vegetação densa, sem um caminho estabelecido.",
      },
      swampy: {
        label: "Terreno pantanoso",
        inline: "terreno pantanoso",
        description: "Solo macio e encharcado que cede sob o pé.",
      },
      sand: {
        label: "Areia solta",
        inline: "areia solta",
        description: "Areia seca de praia. A superfície comum mais cara.",
      },
    },
    terrainFactor: "{description} Fator de terreno {factor}.",
    caloriesBurned: "Calorias gastas",
    packAdds:
      "A mochila de {load} adiciona {extra} kcal em relação à mesma caminhada sem carga ({unloaded} kcal).",
    heavyLoad:
      "Essa mochila é {percent}% do seu peso. Cargas acima de cerca de um terço do peso corporal aumentam muito o risco de lesão, e o modelo de Pandolf é menos confiável nessa faixa. Aumente aos poucos em vez de pular para essa carga.",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "Distância",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "Mochila / peso corporal",
    equation:
      "Equação de Pandolf para transporte de carga a {watts} watts, {terrain}, inclinação de {grade}%.",
    tableTitle: "Calorias por peso da mochila",
    tableSubtitle: "Mesmo ritmo, inclinação, terreno e duração. Só a carga muda.",
    colPack: "Mochila",
    colCalories: "Calorias",
    colVsUnloaded: "vs sem carga",
    vsUnloaded: "+{percent}%",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "Registre cada rucking automaticamente",
    description:
      "O Steps conta sua distância e seus passos em segundo plano, então os seus ruckings entram junto com o restante da caminhada.",
  },
  info: {
    title: "Como calculamos as calorias de rucking",
    intro:
      "Tabelas de MET e as equações do ACSM não têm nenhum termo de carga: devolvem o mesmo gasto se a mochila estiver vazia ou com 30 quilogramas. Usamos a equação de Pandolf, feita especificamente para precificar o transporte de carga.",
    formulaTitle: "A fórmula",
    formulas: [
      { strong: "M", rest: "= 1,5W + 2,0(W+L)(L/W)² + η(W+L)(1,5V² + 0,35VG)" },
      {
        strong: "",
        rest: "M é a taxa metabólica em watts, W a massa corporal em kg, L a carga em kg, V a velocidade em m/s, G a inclinação em porcentagem e η o fator de terreno.",
      },
      { strong: "kcal/min", rest: "= watts × 60 ÷ 4184" },
      {
        strong: "",
        rest: "O termo do meio é a penalidade da carga e cresce com (L/W)². Dobrar a mochila faz mais do que dobrar esse termo.",
      },
      {
        strong: "Exemplo:",
        rest: "70 kg carregando 20 kg a 4,8 km/h no asfalto são 360 watts, cerca de 5,2 kcal por minuto.",
      },
    ],
    note: "Pandolf cobre caminhada no plano e em subida. A descida precisa da correção separada de Santee, então as descidas aqui são tratadas como plano em vez de devolver um número que o modelo não sustenta.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "Quantas calorias o rucking queima?",
      answer:
        "Uma pessoa de 70 kg (155 lb) em rucking a 5 km/h no asfalto com uma mochila de 15 kg (33 lb) queima cerca de 310 calorias por hora. A mesma hora caminhando sem carga fica em cerca de 265, então a mochila responde por cerca de 45. O peso da mochila, a inclinação e o terreno mudam bastante esse número, por isso um único valor de calorias por hora engana.",
    },
    {
      question: "O rucking queima mais calorias do que caminhar?",
      answer:
        "Sim, e mais do que o peso extra sozinho sugere. Carregar uma carga custa energia duas vezes: você move a massa a mais e paga uma penalidade separada porque a carga é transportada em vez de fazer parte do corpo. Na equação de Pandolf essa penalidade cresce com o quadrado da relação carga/peso, então cada quilograma a mais custa mais do que o anterior.",
    },
    {
      question: "Com quanto peso você deve fazer rucking?",
      answer:
        "A maioria das orientações começa iniciantes em 10 por cento do peso corporal e sobe no máximo até cerca de um terço. Acima de aproximadamente um terço do peso, o risco de lesão nos joelhos, na lombar e nos pés sobe bastante, e o próprio modelo de Pandolf fica menos confiável porque foi validado sobretudo abaixo dessa relação. Acrescente peso devagar, e antes de acrescentar distância.",
    },
    {
      question: "O terreno muda quantas calorias o rucking queima?",
      answer:
        "Bastante. A equação de Pandolf aplica um fator de terreno ao custo do movimento: a estrada pavimentada é a referência 1,0, terra e trilha cerca de 1,2, mato fechado 1,5, solo pantanoso 1,8 e areia solta 2,1. Rucking na areia seca da praia custa cerca do dobro da energia de movimento do mesmo rucking no asfalto.",
    },
    {
      question: "O que é a equação de Pandolf?",
      answer:
        "É o modelo padrão do custo metabólico de carregar uma carga, publicado por Pandolf, Givoni e Goldman em 1977 para o exército dos Estados Unidos. Ela prevê a taxa metabólica em watts a partir da massa corporal, da carga, da velocidade de caminhada, da inclinação e do terreno. Diferente das tabelas de MET e das equações do ACSM, ela trata a carga como uma entrada real em vez de ignorá-la.",
    },
    {
      question: "Por que esta calculadora não aceita descidas?",
      answer:
        "Porque a equação de Pandolf só foi validada para caminhada no plano e em subida. Com inclinação negativa ela devolve custos baixos demais para serem críveis: descer é mais barato do que o plano na fórmula, mas não de forma indefinida na realidade. Modelar a descida corretamente precisa da correção separada de Santee, então esta calculadora trata descidas como plano em vez de informar um número que não pode sustentar.",
    },
    {
      question: "O rucking é melhor do que correr para perder gordura?",
      answer:
        "É mais fácil de manter, e isso costuma importar mais do que a taxa por minuto. O rucking fica em torno de 6 a 8 MET conforme a carga e a inclinação, abaixo da maioria das corridas, mas o baixo impacto permite bem mais volume semanal sem o estresse articular que interrompe blocos de corrida. O que impulsiona a perda de gordura é o gasto energético total da semana, não a intensidade de uma única sessão.",
    },
  ],
  cta: {
    title: "Acompanhe os seus ruckings",
    description:
      "Baixe o app Steps para registrar automaticamente suas caminhadas, as calorias gastas e o progresso ao longo do tempo.",
  },
  sticky: "Conte seus passos com o Steps",
  howTo: {
    name: "Como calcular as calorias de rucking",
    description:
      "Informe seu peso, o peso da mochila, o ritmo, a inclinação e o terreno para obter as calorias gastas e quanto desse gasto vem da carga.",
    steps: [
      {
        name: "Informe o peso do corpo e da mochila",
        text: "Os dois em quilogramas ou libras. A penalidade da carga cresce com o quadrado da relação mochila/corpo, então os dois números importam, não só a mochila.",
      },
      {
        name: "Defina o ritmo e a duração",
        text: "Ritmo de rucking em km/h ou mph e por quanto tempo você esteve em movimento. Juntos, eles definem a distância percorrida.",
      },
      {
        name: "Adicione a inclinação",
        text: "Inclinação média de subida, em porcentagem. Descidas são tratadas como plano, porque a equação de Pandolf só é validada para caminhada no plano e em subida.",
      },
      {
        name: "Escolha o terreno",
        text: "Da estrada pavimentada à trilha, ao mato fechado e à areia solta. O terreno multiplica o custo do movimento, e a areia passa do dobro do asfalto.",
      },
      {
        name: "Leia as calorias e a contribuição da carga",
        text: "A calculadora devolve as calorias totais, quantas vieram só da mochila, a taxa metabólica em watts e uma tabela de calorias para cargas comuns de rucking.",
      },
    ],
  },
};

export default ptBR;

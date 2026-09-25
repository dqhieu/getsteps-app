import type { ConversionHubsMessages } from "./en";

const ptBR: ConversionHubsMessages = {
  breadcrumbLabel: "Trilha de navegação",
  openCalculator: "Abrir a calculadora →",
  units: {
    steps: "{count} passos",
    miles: "{count} milhas",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} kcal",
    strideCm: "{stride} cm",
    detailSteps: "{count} passos →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count} milha",
    other: "{count} milhas",
  },
  mileArrow: {
    one: "{count} milha →",
    other: "{count} milhas →",
  },
  duration: {
    minutes: "{minutes} min",
    hours: "{hours} h",
    hoursMinutes: "{hours} h {minutes} min",
  },
  heights: [
    "1,47 m (147 cm) — baixa",
    "1,63 m (163 cm) — mulher média",
    "1,75 m (175 cm) — adulto médio",
    "1,83 m (183 cm) — homem médio",
    "1,93 m (193 cm) — alto",
  ],
  heightShort: {
    petite: "1,47 m",
    tall: "1,93 m",
  },
  paces: {
    slow: "Lento (2 mph)",
    normal: "Normal (3 mph)",
    brisk: "Rápido (4 mph)",
  },
  hub: {
    meta: {
      title: "Conversões de passos — milhas, quilômetros e calorias",
      description:
        "Converta entre passos, milhas, quilômetros e calorias. Respostas rápidas, tabelas completas e uma calculadora para a sua altura e o seu peso.",
      keywords: [
        "conversão de passos",
        "tabela de conversão de passos",
        "passos em milhas",
        "milhas em passos",
        "passos em calorias",
        "conversão de distância em passos",
      ],
      ogTitle: "Conversões de passos",
      ogDescription:
        "Converta entre passos, milhas, quilômetros e calorias. Respostas rápidas e tabelas completas.",
      ogImageAlt: "Conversões de passos",
    },
    title: "Conversões de passos",
    subtitle:
      "Respostas rápidas e precisas para cada conversão comum — milhas, quilômetros, calorias e tempo de caminhada.",
    seeAll: "Ver todas as {count} →",
    categories: {
      "steps-to-miles": {
        title: "Passos em milhas",
        description: "Converta qualquer número de passos em milhas percorridas",
      },
      "miles-to-steps": {
        title: "Milhas em passos",
        description: "Converta milhas no número equivalente de passos",
      },
      "steps-to-calories": {
        title: "Passos em calorias",
        description: "Estime as calorias queimadas para qualquer número de passos",
      },
      "steps-to-km": {
        title: "Passos em quilômetros",
        description: "Converta qualquer número de passos em quilômetros percorridos",
      },
      "km-to-steps": {
        title: "Quilômetros em passos",
        description: "Converta quilômetros no número equivalente de passos",
      },
      "steps-to-time": {
        title: "Passos em tempo de caminhada",
        description: "Quanto tempo leva para caminhar qualquer número de passos",
      },
      "miles-to-time": {
        title: "Milhas em tempo de caminhada",
        description: "Quanto tempo leva para caminhar qualquer número de milhas",
      },
    },
    stepsToMilesTitle: "Popular: passos em milhas",
    milesToStepsTitle: "Popular: milhas em passos",
    stepsToCaloriesTitle: "Popular: passos em calorias",
    personalTitle: "Quer números personalizados?",
    personalBody:
      "Estas tabelas usam médias. As calculadoras permitem que você informe sua altura, seu peso e seu ritmo para uma resposta exata.",
    distanceCta: "Calculadora de distância por passos",
    calorieCta: "Calculadora de calorias",
  },
  stepsToMiles: {
    meta: {
      title: "Converter passos em milhas — tabela e calculadora",
      description:
        "Converta qualquer número de passos em milhas. {ten} passos ≈ {tenMiles} milhas · {five} passos ≈ {fiveMiles} milhas. Tabela completa de {from} a {to} passos.",
      keywords: [
        "passos em milhas",
        "converter passos em milhas",
        "conversor de passos em milhas",
        "tabela de passos em milhas",
        "conversão de passo em milha",
        "quantas milhas são X passos",
      ],
      ogTitle: "Converter passos em milhas — tabela e calculadora",
      ogDescription:
        "Converta qualquer número de passos em milhas. {ten} passos ≈ {tenMiles} milhas. Tabela de {from} → {to} passos.",
      ogImageAlt: "Passos em milhas",
    },
    crumb: "Passos em milhas",
    title: "Conversor de passos em milhas",
    intro:
      "Converta qualquer número de passos em milhas. Cada linha leva a uma página com calorias, tempo de caminhada e uma tabela de passada conforme a altura.",
    formulaTitle: "A fórmula rápida",
    formula: "milhas ≈ passos × {factor}",
    formulaNote:
      "Isso assume uma passada média de adulto de {stride} cm ({feet} pés). Quem é mais alto cobre um pouco mais por passo; quem é mais baixo, um pouco menos. Para o seu número, clique em uma linha da tabela.",
    tableTitle: "Tabela de conversão completa",
    columns: {
      steps: "Passos",
      miles: "Milhas",
      kilometers: "Quilômetros",
      detail: "Página de detalhe",
    },
    exactTitle: "Quer o número exato para a sua altura?",
    exactBody:
      "Nossa calculadora de distância por passos calcula a resposta exata para {your} comprimento de passada — basta informar sua altura.",
    your: "o seu",
    accuracyTitle: "Qual é a precisão da conversão de passos em milhas?",
    accuracyBody:
      "A passada padrão de {stride} cm / {feet} pés é o número mais citado pelo CDC, pela Mayo Clinic e pela Harvard Health para um adulto de estatura média. Passadas reais vão de cerca de {short} cm (estatura baixa) a {tall} cm (estatura alta), então a distância pode variar ±{low}–{high}%.",
    accuracyApp:
      "Para o número mais preciso, instale o Steps no seu iPhone ou Apple Watch — o app mede o comprimento real do seu passo a partir dos treinos.",
  },
  milesToSteps: {
    meta: {
      title: "Quantos passos há em uma milha? — {steps} passos (e tabela)",
      description:
        "{one} milha ≈ {steps} passos para um adulto médio. Use a tabela para converter milhas em passos, ou abra o detalhe para calorias e tempo de caminhada conforme a sua altura.",
      keywords: [
        "quantos passos em uma milha",
        "milhas em passos",
        "milha em passos",
        "1 milha em passos",
        "passos em uma milha",
        "converter milhas em passos",
      ],
      ogTitle: "Quantos passos há em uma milha? — {steps} passos",
      ogDescription:
        "{one} milha ≈ {steps} passos para um adulto médio. Tabela completa e cálculo pela altura.",
      ogImageAlt: "Milhas em passos",
    },
    crumb: "Milhas em passos",
    title: "Quantos passos há em uma milha?",
    intro:
      "Resposta curta: cerca de {highlight} para um adulto médio. O número completo depende da sua altura — a tabela está abaixo.",
    quickLabel: "Resposta rápida",
    heroFigure: "≈ {steps}",
    heroNote:
      "Adulto médio, passada de {stride} cm ({feet} pés). O seu número depende da sua altura.",
    heightTitle: "Passos por milha conforme a altura",
    heightIntro:
      "A passada é cerca de {ratio} × a sua altura. Quem é mais baixo dá mais passos para cobrir a mesma distância.",
    heightColumns: {
      height: "Altura",
      stride: "Passada",
      steps: "Passos por milha",
    },
    formulaTitle: "A fórmula de conversão",
    formula: "passos ≈ milhas × {steps}",
    formulaNote:
      "Ou: {one} milha = {meters} m × {cm} cm ÷ passada de {stride} cm ≈ {steps} passos.",
    tableTitle: "Tabela milhas → passos",
    columns: {
      miles: "Milhas",
      steps: "Passos (adulto médio)",
      detail: "Página de detalhe",
    },
    exactTitle: "Quer o número exato para a sua altura?",
    exactBody:
      "Use a calculadora de distância por passos — informe sua altura uma vez e veja os seus passos por milha.",
    whyTitle: `Por que não dizer simplesmente “{rule} passos em uma milha”?`,
    whyBody:
      "A regra dos {rule} passos é um atalho útil, mas deixa uma diferença real. Com {stride} cm como passada média — o número publicado pelo CDC e pela Mayo Clinic — o resultado é cerca de {perMile}, não {rule}. Em um dia de {daily} passos, a regra simples deixa de fora cerca de um quarto de milha.",
    perMile: "{steps} passos por milha",
    connectionTitle: "A relação com os {daily} passos",
    connectionBody:
      "A meta diária padrão de {daily} passos equivale a cerca de {distance} para um adulto médio. Por isso chegar a {daily} passos leva cerca de {minutes} minutos de caminhada em ritmo normal, espalhados pelo dia.",
    distance: "{miles} milhas ({km} km)",
    faq: [
      {
        question: "Quantos passos há em uma milha?",
        answer:
          "Cerca de {steps} passos para um adulto médio com passada de {stride} cm ({feet} pés). O número vai de aproximadamente {tallSteps} passos para alguém de {tallHeight} a {petiteSteps} passos para alguém de {petiteHeight}.",
      },
      {
        question: "Quantos passos há em 2 milhas?",
        answer:
          "Cerca de {steps} passos para um adulto médio. Veja a tabela desta página para outras distâncias.",
      },
      {
        question: "Quantos passos há em 5 milhas?",
        answer: "Cerca de {steps} passos — mais ou menos a meta diária padrão de {daily} passos.",
      },
      {
        question: "O número de passos em uma milha depende da altura?",
        answer:
          "Sim. A sua passada é cerca de {ratio} × a sua altura. Alguém de {petiteHeight} dá cerca de {petiteSteps} passos por milha, enquanto alguém de {tallHeight} dá cerca de {tallSteps} — uma diferença de {percent}%.",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "Converter passos em km — tabela de conversão e calculadora",
      description:
        "Converta qualquer número de passos em quilômetros. {steps} passos ≈ {km} km. Tabela completa de {from} a {to} passos.",
      keywords: [
        "converter passos em km",
        "passos em quilômetros",
        "conversão de passos em km",
        "passo em km",
        "tabela de passos em km",
        "quantos km são X passos",
      ],
      ogTitle: "Converter passos em km",
      ogDescription:
        "Converta qualquer número de passos em km. {steps} passos ≈ {km} km. Tabela de conversão completa.",
      ogImageAlt: "Passos em quilômetros",
    },
    crumb: "Passos em km",
    title: "Conversor de passos em quilômetros",
    intro:
      "Converta qualquer número de passos em quilômetros. Cada linha leva a uma página com calorias, tempo de caminhada e uma tabela de passada conforme a altura. Para uma resposta exata e personalizada, use a {calculator}.",
    calculatorLink: "calculadora de distância por passos",
    formulaTitle: "A fórmula rápida",
    formula: "km ≈ passos × {factor}",
    formulaNote:
      "Ou: passos × passada de {stride} cm ÷ {perKm} = distância em km. A passada média de um adulto é de {stride} cm ({feet} pés).",
    tableTitle: "Tabela de conversão completa",
    columns: {
      steps: "Passos",
      kilometers: "Quilômetros",
      miles: "Milhas",
      detail: "Página de detalhe",
    },
    exactTitle: "Quer o número exato para a sua altura?",
    exactBody:
      "Nossa calculadora de distância por passos calcula a resposta exata para o seu comprimento de passada — basta informar sua altura.",
  },
  kmToSteps: {
    meta: {
      title: "Quantos passos há em um km? — {steps} passos (e tabela)",
      description:
        "{one} km ≈ {steps} passos para um adulto médio. Tabela completa de {from}–{to} km, mais um cálculo pela altura para a sua contagem exata.",
      keywords: [
        "quantos passos em um km",
        "km em passos",
        "quilômetros em passos",
        "1 km em passos",
        "5 km em passos",
        "converter km em passos",
      ],
      ogTitle: "Quantos passos há em um km? — {steps} passos",
      ogDescription: "{one} km ≈ {steps} passos para um adulto médio. Tabela de conversão completa.",
      ogImageAlt: "Km em passos",
    },
    crumb: "Km em passos",
    title: "Quantos passos há em um quilômetro?",
    intro:
      "Resposta curta: cerca de {highlight} para um adulto médio. O número completo depende da sua altura — veja a tabela.",
    quickLabel: "Resposta rápida",
    heroFigure: "≈ {steps}",
    heroNote: "Adulto médio, passada de {stride} cm ({feet} pés). O seu número depende da sua altura.",
    heightTitle: "Passos por km conforme a altura",
    heightIntro:
      "A passada é cerca de {ratio} × a sua altura. Quem é mais baixo dá mais passos para a mesma distância.",
    heightColumns: {
      height: "Altura",
      stride: "Passada",
      steps: "Passos por km",
    },
    formulaTitle: "A fórmula de conversão",
    formula: "passos ≈ km × {steps}",
    formulaNote: "Ou: {one} km = {cm} cm ÷ passada de {stride} cm ≈ {steps} passos.",
    tableTitle: "Tabela km → passos",
    columns: {
      kilometers: "Quilômetros",
      steps: "Passos (adulto médio)",
      detail: "Página de detalhe",
    },
    exactTitle: "Quer o número exato para a sua altura?",
    exactBody:
      "Use a calculadora de distância por passos — informe sua altura uma vez e veja os seus passos por km.",
    faq: [
      {
        question: "Quantos passos há em um quilômetro?",
        answer:
          "Cerca de {steps} passos para um adulto médio com passada de {stride} cm. A faixa vai de cerca de {tall} (pessoa alta) a {petite} (pessoa baixa).",
      },
      {
        question: "Quantos passos há em 5 km?",
        answer: "Cerca de {steps} passos para um adulto médio — uma prova típica de 5 km.",
      },
      {
        question: "Quantos passos há em 10 km?",
        answer: "Cerca de {steps} passos — acima da meta diária padrão de {daily} passos.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Passos em calorias — quantas calorias por passo?",
      description:
        "Converta qualquer número de passos em calorias queimadas. {steps} passos ≈ {calories} calorias. Tabela de {from} a {to} passos conforme o seu peso.",
      keywords: [
        "passos em calorias",
        "calorias por passo",
        "conversão de passo em caloria",
        "quantas calorias são os passos",
        "converter passos em calorias",
      ],
      ogTitle: "Conversor de passos em calorias",
      ogDescription:
        "{steps} passos ≈ {calories} calorias. Tabela de conversão de {from}–{to} passos.",
      ogImageAlt: "Passos em calorias",
    },
    crumb: "Passos em calorias",
    title: "Conversor de passos em calorias",
    intro:
      "Converta qualquer número de passos em calorias queimadas e abra o detalhe por peso, ritmo e tempo de caminhada.",
    formulaTitle: "A fórmula rápida",
    formula: "calorias ≈ passos × {factor} × (peso em kg ÷ {weight})",
    formulaNote:
      "Cerca de {one} caloria a cada {per} passos para um adulto médio. Quem pesa mais queima proporcionalmente mais.",
    tableTitle: "Tabela completa (adulto de {lb} lb / {kg} kg, ritmo normal)",
    columns: {
      steps: "Passos",
      calories: "Calorias",
      detail: "Página de detalhe",
    },
    exactTitle: "Quer o gasto calórico personalizado?",
    exactBody:
      "Use a calculadora de passos em calorias e informe seu peso, sua idade e seu sexo para um número mais preciso.",
  },
  stepsToTime: {
    meta: {
      title: "Quanto tempo para caminhar X passos? — tabela",
      description:
        "Tempo de caminhada para qualquer número de passos. {steps} passos ≈ {hours} h {mins} min em ritmo normal. Tabela de {from} → {to} passos em três ritmos.",
      keywords: [
        "quanto tempo para caminhar passos",
        "passos em tempo de caminhada",
        "tempo de caminhada por passo",
        "passos em minutos",
        "quanto tempo para caminhar X passos",
      ],
      ogTitle: "Quanto tempo para caminhar X passos?",
      ogDescription: "Tempo de caminhada para qualquer número de passos. Tabela com três ritmos.",
      ogImageAlt: "Passos em tempo de caminhada",
    },
    crumb: "Tempo de caminhada",
    title: "Quanto tempo leva para caminhar X passos?",
    intro:
      "Tempo de caminhada para qualquer número de passos, em três ritmos comuns. Clique em uma linha para a página com calorias e passada.",
    formulaTitle: "A fórmula rápida",
    formula: "minutos ≈ passos ÷ {cadence}",
    formulaNote:
      "A maioria dos adultos caminha a cerca de {cadence} passos por minuto em ritmo normal. Assim, {steps} passos ≈ {minutes} minutos ({hours} h {mins} min) de caminhada. Um pouco mais rápido ({mph} mph) cai para {fastHours} h {fastMins} min.",
    tableTitle: "Tempo de caminhada por número de passos e ritmo",
    columns: {
      steps: "Passos",
      detail: "Detalhe",
    },
    exactTitle: "Quer planejar uma caminhada específica?",
    exactBody:
      "A calculadora de tempo de caminhada estima a duração de qualquer distância ou número de passos, com horário de saída e de chegada.",
  },
  milesToTime: {
    meta: {
      title: "Quanto tempo para caminhar X milhas? — conforme o ritmo",
      description:
        "Tempo de caminhada para uma distância em milhas. {one} milha ≈ {oneMin} min, {three} milhas ≈ {threeHours} h, {five} milhas ≈ {fiveHours} h {fiveMins} min. Tabela em três ritmos.",
      keywords: [
        "quanto tempo para caminhar uma milha",
        "quanto tempo para caminhar milhas",
        "tempo de caminhada em milhas",
        "milhas em tempo de caminhada",
        "quanto tempo para caminhar 5 milhas",
        "quanto tempo para caminhar 3 milhas",
      ],
      ogTitle: "Quanto tempo para caminhar X milhas?",
      ogDescription: "Tempo de caminhada para uma distância em milhas, em três ritmos.",
      ogImageAlt: "Milhas em tempo de caminhada",
    },
    crumb: "Milhas em tempo de caminhada",
    title: "Quanto tempo leva para caminhar X milhas?",
    intro:
      "Tempo de caminhada para qualquer distância, em três ritmos comuns. Clique em uma linha para a página de detalhe.",
    formulaTitle: "A regra rápida",
    formula: "minutos ≈ milhas × {minutes}",
    formulaNote:
      "Em um ritmo normal de {normal} mph. Quem caminha rápido ({brisk} mph) reduz cerca de {briskCut}%; quem caminha devagar ({slow} mph) acrescenta {slowAdd}%.",
    tableTitle: "Tempo de caminhada por distância e ritmo",
    columns: {
      distance: "Distância",
      detail: "Detalhe",
    },
    exactTitle: "Está planejando uma rota específica?",
    exactBody:
      "A calculadora de tempo de caminhada cobre qualquer distância, com horário de saída e chegada, pausas e ritmo.",
    faq: [
      {
        question: "Quanto tempo leva para caminhar 1 milha?",
        answer:
          "Cerca de {normalMin} minutos em um ritmo normal de {normalMph} mph. Ritmo rápido ({briskMph} mph): {briskMin} minutos. Ritmo lento ({slowMph} mph): {slowMin} minutos.",
      },
      {
        question: "Quanto tempo leva para caminhar 3 milhas?",
        answer:
          "Cerca de {hours} hora em ritmo normal. Rápido: {briskMin} minutos. Lento: {slowHours} hora {slowMins} minutos.",
      },
      {
        question: "Quanto tempo leva para caminhar 5 milhas?",
        answer:
          "Cerca de {hours} hora {mins} minutos em ritmo normal. Rápido: {briskHours} hora {briskMins} minutos. Lento: {slowHours} horas {slowMins} minutos.",
      },
    ],
  },
};

export default ptBR;

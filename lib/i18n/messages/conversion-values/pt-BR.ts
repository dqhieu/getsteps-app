import type { ConversionValuesMessages } from "./en";

const ptBR: ConversionValuesMessages = {
  ui: {
    breadcrumb: "Trilha de navegação",
    quickAnswer: "Resposta rápida",
    forContext: "Para comparar:",
    distanceByHeightTitle: "A distância depende da sua altura",
    distanceByHeightBody:
      "O seu passo mede cerca de 0,41 × a sua altura — quem é mais baixo percorre menos terreno a cada passo.",
    heightColumn: "Sua altura",
    strideColumn: "Passada",
    milesColumn: "Milhas",
    kilometersColumn: "Quilômetros",
    stepsColumn: "Passos",
    stepsRequiredTitle: "Os passos necessários dependem da sua altura",
    stepsRequiredBody: "Quem é mais baixo dá mais passos para cobrir a mesma distância.",
    caloriesTitle: "Calorias queimadas por peso e ritmo",
    caloriesBody:
      "As calorias sobem de forma linear com o peso. Um ritmo mais rápido queima mais — mas, na caminhada, só um pouco mais.",
    weightColumn: "Seu peso",
    timeTitle: "Quanto tempo vai levar?",
    timeBody:
      "O tempo depende do seu ritmo. A maioria dos adultos caminha num ritmo normal de cerca de 3 mph.",
    paceColumn: "Ritmo",
    speedColumn: "Velocidade",
    timeColumn: "Tempo",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} cal",
    mph: "{value} mph",
    ctaTitle: "Acompanhe seus números reais com Steps",
    ctaBody:
      "Estas conversões usam médias. O app Steps registra o seu comprimento de passo {actual}, as calorias e o tempo de caminhada — sincronizados do seu iPhone e do Apple Watch.",
    ctaActual: "real",
    relatedTitle: "Conversões relacionadas",
    faqTitle: "Perguntas frequentes",
    heights: [
      "147 cm (4′10″) — baixa",
      "163 cm (5′4″) — mulher média",
      "175 cm (5′9″) — adulto médio",
      "183 cm (6′0″) — homem médio",
      "193 cm (6′4″) — alto",
    ],
    weights: [
      "54 kg (120 lb)",
      "68 kg (150 lb)",
      "82 kg (180 lb)",
      "95 kg (210 lb)",
      "113 kg (250 lb)",
    ],
    paces: ["Lento (2 mph)", "Normal (3,1 mph)", "Rápido (4 mph)"],
    duration: {
      minutes: "{count} min",
      hours: "{count} h",
      hoursMinutes: "{hours} h {minutes} min",
    },
  },
  plurals: {
    mile: { one: "1 milha", other: "{count} milhas" },
    mileArticle: { one: "uma milha", other: "{count} milhas" },
    mileInSteps: { one: "{count} milha em passos", other: "{count} milhas em passos" },
    mileToSteps: { one: "{count} milha em passos", other: "{count} milhas em passos" },
    howManyStepsInMile: {
      one: "quantos passos em {count} milha",
      other: "quantos passos em {count} milhas",
    },
    howManyStepsIsMile: {
      one: "quantos passos são {count} milha",
      other: "quantos passos são {count} milhas",
    },
    mileWalkSteps: "{count} milha caminhada passos",
    howLongDoesMile: {
      one: "quanto tempo leva para caminhar {count} milha",
      other: "quanto tempo leva para caminhar {count} milhas",
    },
    howLongToMile: {
      one: "quanto tempo para caminhar {count} milha",
      other: "quanto tempo para caminhar {count} milhas",
    },
    walkingTimeMile: {
      one: "tempo de caminhada {count} milha",
      other: "tempo de caminhada {count} milhas",
    },
    mileWalkingTime: {
      one: "{count} milha tempo de caminhada",
      other: "{count} milhas tempo de caminhada",
    },
    walkMileTime: {
      one: "Caminhar {count} milha — tempo",
      other: "Caminhar {count} milhas — tempo",
    },
  },
  familiar: {
    olympic: "uma volta numa pista olímpica de 400 m",
    centralPark: "o comprimento do Central Park (Nova York)",
    fiveK: "uma prova de 5 km",
    tenK: "uma prova de 10 km",
    brooklyn: "a travessia da ponte do Brooklyn (ida e volta)",
    half: "uma meia-maratona",
    marathon: "uma maratona",
  },
  foods: {
    banana: "uma banana (105 cal)",
    apple: "uma maçã (95 cal)",
    bread: "uma fatia de pão (80 cal)",
    coffee: "uma xícara de café com creme (50 cal)",
    cookie: "um cookie com gotas de chocolate (160 cal)",
    juice: "um copo de suco de laranja (110 cal)",
  },
  stepsToKm: {
    meta: {
      title: "Quantos km são {steps} passos? — {steps} passos em quilômetros",
      description:
        "{steps} passos ≈ {km} km ({miles} milhas) para um adulto médio. Veja a distância exata pela sua altura, as calorias queimadas e o tempo de caminhada.",
      keywords: [
        "{steps} passos em km",
        "{steps} passos em quilômetros",
        "quantos km são {steps} passos",
        "{steps} passos distância km",
      ],
      ogImageAlt: "{steps} passos em km",
    },
    h1: "Quantos km são {steps} passos?",
    subheading: "Qual distância você percorre ao chegar a {steps} passos?",
    primary: "{km} km",
    secondary:
      "{miles} milhas · cerca de {time} num ritmo normal · {calories} calorias para uma pessoa de 70 kg",
    intro:
      "Caminhar {steps} passos cobre cerca de {km} km ({miles} milhas) para um adulto médio, com uma passada típica de 76 cm (2,5 ft). Num ritmo normal de 5 km/h, isso leva cerca de {time} e queima aproximadamente {calories} calorias para uma pessoa de 70 kg (155 lb). A distância exata depende da sua altura — pessoas mais altas cobrem mais terreno por passo. Veja a tabela abaixo.",
    crumb: "Passos em km",
    crumbValue: "{steps} passos",
    related: "{steps} passos em km",
    relatedHub: "Quantos passos cabem em um km?",
    relatedMiles: "{steps} passos em milhas",
    faq: [
      {
        question: "Quantos km são {steps} passos?",
        answer:
          "{steps} passos são cerca de {km} km ({miles} milhas) para um adulto médio com passada de 76 cm. Quem é mais baixo percorre um pouco menos; quem é mais alto, um pouco mais — a tabela de alturas desta página mostra o seu número.",
      },
      {
        question: "Quanto tempo leva para caminhar {steps} passos?",
        answer:
          "Num ritmo normal de 5 km/h, {steps} passos levam cerca de {time}. Num ritmo rápido de 6,4 km/h, cerca de {brisk}. Num passeio lento de 3,2 km/h, cerca de {slow}.",
      },
      {
        question: "Quantas calorias {steps} passos queimam?",
        answer:
          "{steps} passos queimam cerca de {calories} calorias para uma pessoa de 70 kg (155 lb) num ritmo normal. Pessoas mais leves queimam menos calorias por passo; pessoas mais pesadas queimam mais. Veja a tabela de calorias desta página para o seu peso.",
      },
      {
        question: "Como a conversão de passos para km é calculada?",
        answer:
          "Usamos uma passada média de adulto de 76 cm (2,5 ft). Passos × comprimento da passada (cm) ÷ 100.000 = distância em km. Então {steps} passos × 76 cm ÷ 100.000 ≈ {km} km. A sua passada real é cerca de 0,41 × a sua altura.",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "Quantas milhas são {steps} passos? — {steps} passos em milhas",
      description:
        "{steps} passos ≈ {miles} milhas ({km} km) para um adulto médio. Veja a distância exata pela sua altura, as calorias queimadas e o tempo de caminhada.",
      keywords: [
        "{steps} passos em milhas",
        "{steps} passos para milhas",
        "quantas milhas são {steps} passos",
        "{steps} passos",
        "distância de {steps} passos",
        "calorias de {steps} passos",
      ],
      ogImageAlt: "{steps} passos em milhas",
    },
    h1: "{steps} passos em milhas",
    subheading: "Qual distância você percorre ao chegar a {steps} passos?",
    primary: "{miles} milhas",
    secondary:
      "{km} km · cerca de {time} num ritmo normal · {calories} calorias para uma pessoa de 155 lb (70 kg)",
    intro:
      "Caminhar {steps} passos cobre cerca de {miles} milhas ({km} km) para um adulto médio, com uma passada típica de 76 cm (2,5 ft). Num ritmo normal de 3 mph, isso leva cerca de {time} e queima aproximadamente {calories} calorias para uma pessoa de 155 lb (70 kg). A distância exata depende da sua altura — pessoas mais altas cobrem mais terreno por passo. Veja a tabela abaixo.",
    crumb: "Passos em milhas",
    crumbValue: "{steps} passos",
    related: "{steps} passos em milhas",
    relatedHub: "Quantos passos cabem em uma milha?",
    relatedCalories: "{steps} passos em calorias",
    realWorld: {
      roughly: "{miles} milhas equivalem mais ou menos à distância de {name}.",
      times: "Isso é cerca de {factor}× a distância de {name}.",
      shorter: "Isso é cerca de {factor}× mais curto que {name}.",
    },
    faq: [
      {
        question: "Quantas milhas são {steps} passos?",
        answer:
          "{steps} passos são cerca de {miles} milhas ({km} km) para um adulto médio com passada de 76 cm. Quem é mais baixo percorre um pouco menos; quem é mais alto, um pouco mais — a tabela de alturas desta página mostra o seu número.",
      },
      {
        question: "Quanto tempo leva para caminhar {steps} passos?",
        answer:
          "Num ritmo normal de 3 mph, {steps} passos levam cerca de {time}. Num ritmo rápido de 4 mph, cerca de {brisk}. Num passeio lento de 2 mph, cerca de {slow}.",
      },
      {
        question: "Quantas calorias {steps} passos queimam?",
        answer:
          "{steps} passos queimam cerca de {calories} calorias para uma pessoa de 155 lb (70 kg) num ritmo normal. Pessoas mais leves queimam menos calorias por passo; pessoas mais pesadas queimam mais. Veja a tabela de calorias desta página para o seu peso.",
      },
      {
        question: "Como a conversão é calculada?",
        answer:
          "Usamos uma passada média de adulto de 76 cm (2,5 ft), o número mais citado pelo CDC e pela Mayo Clinic. Passos × comprimento da passada = distância percorrida. A sua passada real é cerca de 0,41 × a sua altura — a tabela de alturas desta página mostra a conta para cinco alturas comuns.",
      },
    ],
    daily: {
      question: "{steps} passos são uma boa meta diária?",
      below:
        "{steps} passos ficam abaixo da meta diária de 7.000–10.000 passos que a maioria das autoridades de saúde recomenda para adultos. Use como ponto de partida e aumente aos poucos — até 1.000 passos a mais por dia melhoram a saúde cardiovascular.",
      mid: "Sim — {steps} passos ficam na faixa que a maioria das pesquisas e o CDC sugerem para adultos. Manter isso com constância está ligado a menor risco cardiovascular e a uma saúde melhor no longo prazo.",
      above:
        "{steps} passos ficam acima da meta padrão de 10.000 por dia. É um volume excelente, associado a boa forma cardiovascular e ao controle de peso — mas dias de recuperação com volume menor também são saudáveis.",
    },
  },
  milesToSteps: {
    meta: {
      title: "Quantos passos há em {miles}? — {steps} passos",
      description:
        "{miles} ≈ {steps} passos para um adulto médio. Veja a contagem exata pela sua altura, as calorias queimadas e o tempo de caminhada.",
      ogImageAlt: "{miles} em passos",
    },
    h1: "Quantos passos há em {milesArticle}?",
    subheading: "A resposta — para um adulto médio — e como ela muda com a sua altura.",
    primary: "{steps} passos",
    secondary:
      "{miles} · {km} km · cerca de {time} num ritmo normal · {calories} calorias para uma pessoa de 155 lb (70 kg)",
    intro:
      "Caminhar {miles} exige cerca de {steps} passos para um adulto médio, com uma passada típica de 76 cm (2,5 ft). Num ritmo normal de 3 mph, isso leva cerca de {time} e queima aproximadamente {calories} calorias para uma pessoa de 155 lb (70 kg). A contagem exata depende da sua altura — quem é mais baixo dá mais passos para a mesma distância. Veja a tabela abaixo.",
    crumb: "Milhas em passos",
    relatedHub: "Conversor de passos para milhas",
    relatedCalories: "{steps} passos em calorias",
    faq: [
      {
        question: "Quantos passos são {miles}?",
        answer:
          "{miles} são cerca de {steps} passos para um adulto médio com passada de 76 cm. Quem é mais baixo dá mais passos para cobrir a mesma distância — a tabela de alturas desta página mostra o seu número.",
      },
      {
        question: "Quanto tempo leva para caminhar {miles}?",
        answer:
          "Num ritmo normal de 3 mph, {miles} levam cerca de {time}. Num ritmo rápido de 4 mph, cerca de {brisk}. Num passeio lento de 2 mph, cerca de {slow}.",
      },
      {
        question: "Quantas calorias {milesArticle} queima?",
        answer:
          "Caminhar {miles} queima cerca de {calories} calorias para uma pessoa de 155 lb (70 kg) num ritmo normal. Pessoas mais leves queimam menos; pessoas mais pesadas queimam mais — veja a tabela de calorias desta página.",
      },
      {
        question: "Como a conversão de milhas para passos é calculada?",
        answer:
          "Multiplicamos a distância em metros por 100 (cm/m) e dividimos por uma passada média de 76 cm. Então {miles} = {meters} m × 100 ÷ 76 ≈ {steps} passos. A sua passada real é cerca de 0,41 × a sua altura.",
      },
    ],
    exercise: {
      question: "Caminhar {miles} por dia é exercício suficiente?",
      yes: "Sim — caminhar {miles} por dia ({steps} passos) cobre com folga os 150 minutos semanais de atividade aeróbica moderada recomendados pelo CDC, se você caminhar num ritmo normal ou rápido.",
      start:
        "Caminhar {miles} por dia é um bom começo. Coloca você numa faixa ativa e contribui para os 150 minutos semanais de atividade aeróbica recomendados pelo CDC, mas uma segunda caminhada diária traria um benefício mais claro.",
      below:
        "Caminhar menos de {miles} por dia fica abaixo do mínimo do CDC. Aumente aos poucos — até 1.000 passos a mais por dia melhoram a saúde cardiovascular.",
    },
  },
  kmToSteps: {
    meta: {
      title: "Quantos passos há em {km} km? — {steps} passos",
      description:
        "{km} km ≈ {steps} passos para um adulto médio. Veja a contagem exata pela sua altura, as calorias queimadas e o tempo de caminhada.",
      keywords: [
        "{km} km em passos",
        "{km} km para passos",
        "quantos passos em {km} km",
        "{km} quilômetros em passos",
      ],
      ogImageAlt: "{km} km em passos",
    },
    h1: "Quantos passos há em {km} km?",
    subheading: "A resposta — para um adulto médio — e como ela muda com a sua altura.",
    primary: "{steps} passos",
    secondary:
      "{km} km · cerca de {time} num ritmo normal · {calories} calorias para uma pessoa de 70 kg",
    intro:
      "Caminhar {km} km exige cerca de {steps} passos para um adulto médio, com uma passada típica de 76 cm (2,5 ft). Num ritmo normal de 5 km/h, isso leva cerca de {time} e queima aproximadamente {calories} calorias para uma pessoa de 70 kg (155 lb). A contagem exata depende da sua altura — quem é mais baixo dá mais passos para a mesma distância.",
    crumb: "Km em passos",
    crumbValue: "{km} km",
    related: "{km} km em passos",
    relatedHub: "Conversor de passos para km",
    faq: [
      {
        question: "Quantos passos são {km} km?",
        answer:
          "{km} km são cerca de {steps} passos para um adulto médio com passada de 76 cm. Quem é mais baixo dá mais passos para cobrir a mesma distância — a tabela de alturas desta página mostra o seu número.",
      },
      {
        question: "Quanto tempo leva para caminhar {km} km?",
        answer:
          "Num ritmo normal de 5 km/h, {km} km levam cerca de {time}. Num ritmo rápido de 6,4 km/h, cerca de {brisk}. Num ritmo lento de 3,2 km/h, cerca de {slow}.",
      },
      {
        question: "Quantas calorias queima caminhar {km} km?",
        answer:
          "Caminhar {km} km queima cerca de {calories} calorias para uma pessoa de 70 kg (155 lb) num ritmo normal. Veja a tabela de calorias desta página para o seu peso.",
      },
      {
        question: "Como a conversão de km para passos é calculada?",
        answer:
          "Multiplicamos a distância por 100.000 (cm/km) e dividimos por uma passada média de 76 cm. Então {km} km = {cm} cm ÷ 76 cm ≈ {steps} passos. A sua passada real é cerca de 0,41 × a sua altura.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Calorias de {steps} passos — quantas calorias {steps} passos queimam?",
      description:
        "{steps} passos queimam cerca de {calories} calorias para um adulto médio. Veja o gasto pelo seu peso, ritmo e tempo de caminhada.",
      keywords: [
        "calorias {steps} passos",
        "{steps} passos quantas calorias",
        "calorias em {steps} passos",
        "calorias queimadas {steps} passos",
        "quantas calorias são {steps} passos",
      ],
      ogImageAlt: "calorias de {steps} passos",
    },
    h1: "Calorias de {steps} passos — quantas calorias você queima?",
    subheading: "Calorias ao caminhar {steps} passos, pelo seu peso e ritmo.",
    primary: "≈ {calories} calorias",
    secondary:
      "Para uma pessoa de 155 lb (70 kg) num ritmo normal · cobre {miles} mi / {km} km · cerca de {time}",
    intro:
      "Caminhar {steps} passos queima cerca de {calories} calorias para um adulto médio (155 lb / 70 kg) num ritmo normal. Essa é a distância de {miles} milhas ({km} km) e leva cerca de {time}. O gasto calórico acompanha o peso — quem é mais leve queima menos, quem é mais pesado queima mais.",
    crumb: "Passos em calorias",
    crumbValue: "{steps} passos",
    related: "calorias de {steps} passos",
    relatedMiles: "{steps} passos em milhas",
    relatedTool: "Calculadora de calorias da caminhada",
    realWorld: {
      roughly: "{calories} calorias equivalem mais ou menos a {name}.",
      times: "{calories} calorias são cerca de {factor}× {name}.",
      less: "{calories} calorias são cerca de {factor}× menos que {name}.",
    },
    faq: [
      {
        question: "Quantas calorias {steps} passos queimam?",
        answer:
          "{steps} passos queimam cerca de {calories} calorias para uma pessoa de 155 lb (70 kg) caminhando a 3 mph. Quem pesa mais queima mais — veja a tabela de pesos desta página.",
      },
      {
        question: "O ritmo muda as calorias queimadas?",
        answer:
          "Um pouco. Caminhar a 4 mph (rápido) queima cerca de 30% mais calorias por minuto do que a 2 mph (lento), mas você também cobre a distância mais depressa, então o total para uma contagem fixa de passos é mais próximo do que parece. O total vai de cerca de {slowCal} (lento) a {briskCal} (rápido) para uma pessoa de 150 lb.",
      },
      {
        question: "Quanto tempo leva para caminhar {steps} passos?",
        answer:
          "Cerca de {time} num ritmo normal (3 mph). Ritmo mais rápido a 4 mph: {brisk}. Passeio lento a 2 mph: {slow}.",
      },
      {
        question: "Qual fórmula está por trás desses números?",
        answer:
          "Usamos a fórmula padrão de calorias com MET: Calorias = MET × peso (kg) × tempo (horas). Para um ritmo normal, MET = 3,5. Assumimos uma passada média de 76 cm para converter passos em distância e depois a distância em tempo de caminhada.",
      },
    ],
    loss: {
      question: "{steps} passos queimam calorias suficientes para emagrecer?",
      yes: "{calories} calorias são uma parte útil de um déficit diário — cerca de 0,5 lb de perda de peso em duas semanas se você não compensar comendo mais. Com um ajuste modesto na dieta, isso pode levar a uma perda constante.",
      no: "{calories} calorias ajudam, mas não emagrecem sozinhas. Mire em pelo menos 7.500–10.000 passos por dia junto com um déficit calórico modesto na dieta.",
    },
  },
  stepsToTime: {
    meta: {
      title: "Quanto tempo leva para caminhar {steps} passos?",
      description:
        "{steps} passos levam cerca de {time} num ritmo normal. Veja o tempo em três ritmos, a distância e as calorias queimadas.",
      keywords: [
        "quanto tempo leva para caminhar {steps} passos",
        "quanto tempo para caminhar {steps} passos",
        "{steps} passos em minutos",
        "tempo de caminhada {steps} passos",
        "{steps} passos quanto tempo",
      ],
      ogImageAlt: "Tempo de caminhada para {steps} passos",
    },
    h1: "Quanto tempo leva para caminhar {steps} passos?",
    subheading: "Tempo de caminhada, distância e calorias para {steps} passos.",
    primary: "≈ {time}",
    secondary: "Num ritmo normal de 3 mph · cobre {miles} mi / {km} km · {calories} calorias",
    intro:
      "Caminhar {steps} passos leva cerca de {time} num ritmo normal de 3 mph (5 km/h). Um ritmo rápido de 4 mph reduz isso para {brisk}; um passeio lento de 2 mph alonga para {slow}. Você percorre {miles} milhas ({km} km) e queima cerca de {calories} calorias.",
    crumb: "Tempo de caminhada",
    crumbValue: "{steps} passos",
    related: "{steps} passos — tempo de caminhada",
    relatedMiles: "{steps} passos em milhas",
    relatedTool: "Calculadora de tempo de caminhada",
    faq: [
      {
        question: "Quanto tempo leva para caminhar {steps} passos?",
        answer:
          "Cerca de {time} num ritmo normal de 3 mph. Ritmo rápido (4 mph): {brisk}. Passeio lento (2 mph): {slow}.",
      },
      {
        question: "O tempo de caminhada muda com a minha altura?",
        answer:
          "O tempo fica mais ou menos igual — o que muda é quantos passos você dá. Pessoas mais altas dão menos passos para cobrir a mesma distância, mas a maioria caminha numa cadência parecida (cerca de 100 passos por minuto). O tempo depende sobretudo do ritmo, não da altura.",
      },
      {
        question: "Qual a distância de {steps} passos?",
        answer: "{steps} passos cobrem cerca de {miles} milhas ({km} km) para um adulto médio.",
      },
      {
        question: "Como o tempo de caminhada é calculado?",
        answer:
          "Tempo = distância ÷ ritmo. Calculamos a distância a partir dos passos com uma passada média de 76 cm e depois dividimos pela velocidade. O ritmo normal (3 mph / 5 km/h) é o padrão — a tabela desta página mostra os três ritmos.",
      },
    ],
    spread: {
      question: "Posso distribuir {steps} passos ao longo do dia?",
      high: "Com certeza — a maioria de quem chega a {steps} passos por dia soma isso entre caminhadas, recados e movimento do dia a dia. Três caminhadas de 15 minutos mais a atividade normal costumam bastar.",
      low: "Sim — até uma única caminhada de 20 a 30 minutos mais a atividade diária (até o carro, pelo escritório etc.) costuma levar você a {steps} passos sem uma caminhada longa dedicada.",
    },
  },
  milesToTime: {
    meta: {
      title: "Quanto tempo leva para caminhar {miles}?",
      description:
        "Caminhar {miles} leva cerca de {time} num ritmo normal de 3 mph. Veja o tempo em três ritmos, além dos passos e das calorias.",
      ogImageAlt: "tempo de caminhada {miles}",
    },
    h1: "Quanto tempo leva para caminhar {milesArticle}?",
    subheading: "Tempo de caminhada, passos e calorias para {miles}.",
    primary: "≈ {time}",
    secondary: "Num ritmo normal de 3 mph · {steps} passos · {calories} calorias para uma pessoa de 70 kg",
    intro:
      "Caminhar {miles} leva cerca de {time} num ritmo normal de 3 mph (5 km/h). Cai para {brisk} num ritmo rápido de 4 mph, ou se estende para {slow} num ritmo tranquilo de 2 mph. Você dará cerca de {steps} passos e queimará aproximadamente {calories} calorias.",
    crumb: "Tempo de caminhada",
    relatedTool: "Calculadora de tempo de caminhada",
    faq: [
      {
        question: "Quanto tempo leva para caminhar {milesArticle}?",
        answer: "Cerca de {time} num ritmo normal de 3 mph. Rápido a 4 mph: {brisk}. Lento a 2 mph: {slow}.",
      },
      {
        question: "Quantos passos são {miles}?",
        answer:
          "{miles} são cerca de {steps} passos para um adulto médio com passada de 76 cm. Quem é mais baixo dá mais passos — veja a tabela de alturas desta página.",
      },
      {
        question: "Quantas calorias vou queimar caminhando {miles}?",
        answer:
          "Cerca de {calories} calorias para uma pessoa de 70 kg (155 lb) num ritmo normal. Quem pesa mais queima mais — veja a tabela de pesos.",
      },
      {
        question: "Como o tempo de caminhada é calculado?",
        answer:
          "Tempo = distância ÷ ritmo. {miles} = {km} km. A 5 km/h, isso dá {time}. Usamos os mesmos três ritmos que o CDC e o ACSM publicam para atividade física moderada.",
      },
    ],
    exercise: {
      question: "Caminhar {miles} por dia é exercício suficiente?",
      yes: "Sim — caminhar {miles} por dia cobre com folga a recomendação do CDC de 150 minutos por semana de atividade aeróbica moderada, se você caminhar num ritmo normal ou rápido.",
      start:
        "Caminhar {miles} por dia é um bom começo. Junto com a atividade diária, coloca você numa faixa ativa, mas outra caminhada traria um benefício mais claro.",
      below:
        "Menos de {miles} por dia fica abaixo do mínimo do CDC. Aumente aos poucos — até 0,5 milha a mais por dia melhora a saúde cardiovascular.",
    },
  },
};

export default ptBR;

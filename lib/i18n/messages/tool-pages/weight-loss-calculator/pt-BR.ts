import type { WeightLossCalculatorMessages } from "./en";

const ptBR: WeightLossCalculatorMessages = {
  meta: {
    title: "Calculadora de perda de peso: calorias, prazo e data da meta",
    description:
      "Calcule as calorias diárias e o prazo até o peso desejado. Perder 10 kg a 0,5 kg por semana leva 20 semanas com um déficit de 550 calorias. Calculadora grátis.",
    keywords: [
      "calculadora de perda de peso",
      "calculadora de calorias para emagrecer",
      "quantas calorias para perder peso",
      "calculadora de peso desejado",
      "calculadora de prazo para emagrecer",
      "calculadora de déficit calórico",
      "quanto tempo para emagrecer",
      "planejador de perda de peso",
    ],
    ogTitle: "Calculadora de perda de peso: calorias, prazo e data da meta",
    ogDescription:
      "Informe seus dados e o peso desejado para obter calorias diárias, um prazo realista e marcos semana a semana.",
    ogImageAlt: "Calculadora de perda de peso",
  },
  hero: {
    title: "Calculadora de perda de peso",
    subtitle:
      "Informe seus dados e o peso desejado para obter calorias diárias, um prazo realista e os marcos semana a semana.",
  },
  calculator: {
    details: "Seus dados",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    age: "Idade",
    years: "anos",
    height: "Altura",
    weights: "Peso atual e desejado",
    now: "agora",
    goal: "meta",
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
    rate: "Ritmo de perda",
    rates: {
      mild: { label: "Leve", description: "0,25 kg (0,5 lb) por semana" },
      moderate: { label: "Moderado", description: "0,5 kg (1 lb) por semana" },
      aggressive: { label: "Intenso", description: "0,75 kg (1,5 lb) por semana" },
      rapid: { label: "Rápido", description: "1 kg (2 lb) por semana" },
    },
    calculate: "Calcular meu plano",
    plan: "Seu plano",
    gainGoal: "Seu peso desejado é igual ou maior que o atual. Defina uma meta mais baixa para ver um plano de perda.",
    eatPerDay: "Comer por dia",
    calories: "calorias",
    dailyDeficit: "Déficit diário",
    belowTdee: "abaixo do TDEE",
    toLose: "A perder",
    timeToGoal: "Tempo até a meta",
    weeks: "semanas",
    yourBmr: "Sua taxa metabólica basal",
    yourTdee: "Seu TDEE",
    calValue: "{value} cal",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    warnings: {
      floorMale:
        "Um ritmo de {rate} kg/semana deixaria você em {raw} calorias por dia, abaixo do piso de {floor} calorias para homens. A meta foi elevada para {floor}, então a perda real será mais lenta que o ritmo escolhido.",
      floorFemale:
        "Um ritmo de {rate} kg/semana deixaria você em {raw} calorias por dia, abaixo do piso de {floor} calorias para mulheres. A meta foi elevada para {floor}, então a perda real será mais lenta que o ritmo escolhido.",
      tooFast:
        "Perder {rate} kg por semana é mais de 1% do seu peso. Acima disso, uma parte maior da perda vem do músculo, não da gordura.",
      longPlan:
        "Depois de cerca de três meses, as projeções ficam otimistas. O gasto em repouso cai conforme você emagrece: recalcule a cada 4–6 semanas com o peso novo.",
    },
    milestones: "Marcos previstos",
    week: "Semana {week}",
    resultCta: {
      headline: "O déficit fica mais fácil de manter quando você o vê",
      description:
        "O Steps registra sua atividade sozinho, então o lado do movimento do déficit é medido em vez de estimado.",
    },
  },
  info: {
    title: "Como esta calculadora funciona",
    intro: "Três passos: estimar o que você queima, subtrair o que quer perder e conferir o resultado contra os pisos de segurança.",
    methodTitle: "O método",
    steps: [
      {
        marker: "1. BMR",
        text: "{marker} por Mifflin-St Jeor, a equação com melhor validação em populações modernas.",
      },
      {
        marker: "2. TDEE",
        text: "{marker} = taxa metabólica basal × fator de atividade (1,2 sedentário até 1,9 muito ativo).",
      },
      {
        marker: "3. Déficit",
        text: "{marker} = ritmo semanal escolhido × 7.700 ÷ 7. Uma meta de 0,5 kg por semana precisa de 550 calorias por dia.",
      },
      {
        marker: "4. Prazo",
        text: "{marker} = peso a perder ÷ ritmo semanal, recalculado se o piso de segurança elevou sua meta calórica.",
      },
    ],
    exampleLabel: "Exemplo:",
    example: "de 80 kg para 70 kg a 0,5 kg por semana é um déficit diário de 550 calorias por cerca de 20 semanas.",
    wishnofsky:
      "As 7.700 calorias por quilograma são a regra de Wishnofsky. É uma aproximação linear que se sustenta nos primeiros dois ou três meses e depois fica otimista, porque o gasto em repouso cai conforme você fica mais leve. A calculadora sinaliza isso em qualquer plano com mais de 13 semanas.",
    floors:
      "As metas calóricas têm piso de 1.200 para mulheres e 1.500 para homens. Se o ritmo escolhido cair abaixo disso, a meta sobe e o prazo se alonga, em vez de mostrar um número no qual você não deveria comer.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "Quantas calorias devo comer para emagrecer?",
      answer:
        "Pegue seu TDEE e subtraia de 250 a 500 calorias. Isso produz cerca de 0,25 a 0,5 kg (0,5 a 1 lb) de perda por semana, a faixa que a maior parte da orientação clínica considera sustentável. A calculadora faz isso por você e não desce de 1.200 calorias para mulheres nem de 1.500 para homens, os pisos abaixo dos quais cobrir micronutrientes fica difícil.",
    },
    {
      question: "Quanto tempo vou levar para perder 10 kg?",
      answer:
        "Em um ritmo moderado de 0,5 kg por semana, cerca de 20 semanas, mais ou menos cinco meses. A 1 kg por semana seriam 10 semanas, mas sustentar um déficit diário de 1.100 calorias por tanto tempo é difícil e custa mais massa magra. A maioria se sai melhor tratando o número rápido como o melhor caso e planejando pelo ritmo moderado.",
    },
    {
      question: "1 kg por semana é um ritmo seguro?",
      answer:
        "Só para quem carrega um excesso de peso importante. A orientação usual é ficar abaixo de 1% do peso corporal por semana: a 100 kg isso permite 1 kg, a 65 kg significa 0,65 kg. Acima disso, uma parte crescente do que você perde é músculo e água, não gordura, e o déficit exigido é grande demais para manter.",
    },
    {
      question: "Por que essas projeções ficam menos precisas com o tempo?",
      answer:
        "Elas assumem 7.700 calorias por quilograma de gordura e um metabolismo fixo, e a segunda premissa quebra. Conforme você fica mais leve, a taxa metabólica basal cai porque há menos tecido para manter, e as mesmas atividades queimam menos. A curva real achata enquanto uma projeção linear mantém a inclinação. Recalcule a cada quatro a seis semanas com o peso atual.",
    },
    {
      question: "Devo criar o déficit comendo menos ou me movendo mais?",
      answer:
        "Os dois, com o grosso na comida. Mudar a dieta gera um déficit maior com menos esforço: pular um lanche de 400 calorias não leva tempo, queimar 400 calorias leva cerca de 90 minutos de caminhada rápida. Mas acrescentar atividade preserva massa magra no déficit e segura a queda do TDEE, então um déficit feito só de restrição tende a estagnar antes.",
    },
    {
      question: "Por que minha perda de peso estagnou?",
      answer:
        "Na maioria das vezes o TDEE caiu: você está mais leve, então o mesmo déficit não existe mais. Também pode ser retenção de líquido mascarando gordura perdida de verdade, normal depois de um treino duro ou um dia rico em sódio, e pode esconder duas semanas de progresso. Recalcule no peso atual e julgue uma tendência de duas a três semanas, não o dia a dia.",
    },
    {
      question: "Quantos passos por dia eu preciso para emagrecer?",
      answer:
        "Não há um número fixo, porque depende do tamanho do déficit e do seu peso. Como referência, 10.000 passos queimam cerca de 300 a 500 calorias para a maioria dos adultos, cerca de metade de um déficit diário típico. Caminhar é a atividade mais fácil de sustentar nesse volume, e por isso aguenta melhor do que opções mais intensas ao longo dos meses que uma meta real exige.",
    },
  ],
  cta: {
    title: "Deixe o lado do movimento automático",
    description: "Baixe o app Steps para acompanhar passos e calorias queimadas sem anotar nada.",
  },
  sticky: "Acompanhe seus passos com o Steps",
  howTo: {
    name: "Como planejar sua perda de peso",
    description:
      "Informe seus dados e o peso desejado para obter calorias diárias, as semanas até a meta e marcos semana a semana.",
    steps: [
      {
        name: "Informe seus dados corporais",
        text: "Defina sexo, idade e altura, depois o peso atual e o desejado. Os dois pesos usam a mesma troca de unidade.",
      },
      {
        name: "Escolha o nível de atividade",
        text: "De sedentário a muito ativo. Isso determina o TDEE, a partir do qual a meta calórica é calculada.",
      },
      {
        name: "Escolha um ritmo de perda",
        text: "Leve é 0,25 kg por semana, moderado 0,5 kg, intenso 0,75 kg, rápido 1 kg. Ritmos mais rápidos pedem déficits maiores e são mais difíceis de sustentar.",
      },
      {
        name: "Leia seu plano",
        text: "Você recebe uma meta diária de calorias, o déficit que ela cria, as semanas até a meta e os marcos previstos. Avisos aparecem se o ritmo empurraria você abaixo de pisos calóricos seguros.",
      },
    ],
  },
};

export default ptBR;

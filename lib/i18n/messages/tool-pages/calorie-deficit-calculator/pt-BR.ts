import type { CalorieDeficitMessages } from "./en";

const ptBR: CalorieDeficitMessages = {
  meta: {
    title: "Calculadora de déficit calórico – Quanto comer para emagrecer",
    description:
      "Calcule seu déficit calórico diário para chegar ao peso desejado com segurança. Veja seu TDEE, as calorias-alvo e os passos diários recomendados.",
    keywords: [
      "calculadora de déficit calórico",
      "quantas calorias para emagrecer",
      "déficit calórico para perder peso",
      "calculadora de meta calórica diária",
      "TDEE para emagrecer",
      "qual o tamanho do meu déficit calórico",
    ],
    ogTitle: "Calculadora de déficit calórico – Quanto comer para emagrecer",
    ogDescription:
      "Calcule seu déficit calórico diário para chegar ao peso desejado com segurança. Veja seu TDEE, as calorias-alvo e os passos diários recomendados.",
    ogImageAlt: "Calculadora de déficit calórico",
  },
  hero: {
    title: "Calculadora de déficit calórico",
    subtitle:
      "Descubra exatamente quantas calorias comer por dia para chegar ao peso desejado de forma segura e sustentável.",
  },
  intro:
    "Informe seus dados, o peso desejado e o prazo para calcular a meta diária de calorias, o déficit necessário e quantos passos extras por dia ajudam você a chegar mais rápido.",
  calculator: {
    details: "Seus dados",
    gender: "Sexo",
    male: "Homem",
    female: "Mulher",
    age: "Idade",
    years: "anos",
    currentWeight: "Peso atual",
    height: "Altura",
    activity: "Nível de atividade",
    activityLevels: {
      sedentary: "Sedentário",
      light: "Levemente ativo",
      moderate: "Moderadamente ativo",
      active: "Ativo",
      very_active: "Muito ativo",
    },
    goalWeight: "Peso desejado",
    timeframe: "Prazo",
    weeks: "{count} sem.",
    plan: "Seu plano",
    atGoalTitle: "Você já chegou ao seu objetivo!",
    atGoalBody: "Foque em manter o peso com uma alimentação equilibrada e atividade regular.",
    tdee: "Seu TDEE (manutenção)",
    deficit: "Déficit diário necessário",
    target: "Calorias diárias alvo",
    extraSteps: "Passos extras para acrescentar",
    stepsHint: "para queimar o déficit caminhando",
    calPerDay: "cal/dia",
    stepsPerDay: "passos/dia",
    unsafe:
      "Aviso: este déficit passa de {max} cal/dia. Considere alongar o prazo para um resultado mais seguro.",
    belowMin:
      "Aviso: suas calorias-alvo ficam abaixo do mínimo recomendado de {min} cal/dia. Procure um profissional de saúde.",
    safe: "Este é um déficit seguro e sustentável.",
  },
  info: {
    title: "O que é um déficit calórico?",
    body: "Um déficit calórico acontece quando você consome menos calorias do que o corpo gasta. Com o tempo, o organismo usa a gordura armazenada e o peso cai. O ponto é achar o déficit certo — grande o bastante para ver resultado, mas não tão grande que fique insustentável ou prejudicial.",
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "Qual deve ser o tamanho do meu déficit calórico?",
      answer:
        "Um déficit de 500–750 calorias por dia costuma ser sustentável e leva a cerca de 0,5–0,75 kg de gordura por semana. Déficits acima de 1.000 cal/dia não são recomendados — podem causar perda muscular, deficiências e são difíceis de manter.",
    },
    {
      question: "Quanto tempo leva para perder 1 kg?",
      answer:
        "Como 1 kg de gordura contém cerca de 7.700 calorias, um déficit de 500 cal/dia leva uns 15 dias para perder 1 kg. A 1.000 cal/dia, cerca de 8 dias. Os resultados reais variam com retenção de líquido, ganho muscular e adaptação metabólica.",
    },
    {
      question: "O que é TDEE?",
      answer:
        "TDEE é o gasto energético diário total — as calorias que o corpo queima por dia, incluindo a taxa metabólica basal (BMR) e toda a atividade física. É o seu nível de « manutenção »: comer no TDEE não muda o peso.",
    },
    {
      question: "Dá para emagrecer só caminhando?",
      answer:
        "Sim! Acrescentar 10.000 passos extras por dia queima cerca de 400 calorias a mais e, sozinho, cria um déficit relevante ao longo do tempo. Caminhar tem baixo impacto, é sustentável e combina bem com uma redução moderada na alimentação.",
    },
    {
      question: "É seguro comer menos de 1.200 calorias?",
      answer:
        "Em geral, não. Ingestões muito baixas (abaixo de 1.200 para mulheres e de 1.500 para homens) podem levar a perda muscular, deficiências, desequilíbrio hormonal e metabolismo mais lento. Se a meta cair abaixo desses limites, alongue o prazo ou procure um profissional de saúde.",
    },
  ],
  cta: {
    title: "Acompanhe sua jornada",
    description: "Some mais passos por dia para aumentar seu déficit calórico de forma natural com o app Steps.",
  },
  howTo: {
    name: "Como calcular um déficit calórico para emagrecer",
    description:
      "Informe seu TDEE (ou seus dados) e o ritmo de perda desejado por semana para obter uma meta diária de calorias.",
    steps: [
      {
        name: "Informe o TDEE ou seus dados",
        text: "Cole um TDEE que você já conhece ou informe idade, sexo, peso, altura e nível de atividade.",
      },
      {
        name: "Escolha o ritmo de perda de peso",
        text: "De 0,25 a 1 kg por semana é a faixa sustentável. Ritmos maiores aumentam o risco de perder músculo.",
      },
      {
        name: "Leia sua meta diária de calorias",
        text: "A calculadora mostra a meta diária de calorias e o tamanho do déficit em relação à manutenção.",
      },
    ],
  },
};

export default ptBR;

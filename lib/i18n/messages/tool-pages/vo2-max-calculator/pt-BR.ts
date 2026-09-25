import type { Vo2MaxCalculatorMessages } from "./en";

const ptBR: Vo2MaxCalculatorMessages = {
  meta: {
    title: "Calculadora de VO2 máx: estime o seu condicionamento aeróbico",
    description:
      "Estime o seu VO2 máx com o método da frequência cardíaca ou o teste de corrida de Cooper de 12 minutos. Veja o seu nível aeróbico e como melhorá-lo.",
    keywords: [
      "calculadora de VO2 máx",
      "calculadora vo2max",
      "calculadora de condicionamento aeróbico",
      "calculadora do teste de Cooper",
      "como calcular o VO2 máx",
      "VO2 máx por idade",
      "teste de condicionamento cardiovascular",
    ],
    ogTitle: "Calculadora de VO2 máx: estime o seu condicionamento aeróbico",
    ogDescription:
      "Estime o seu VO2 máx com o método da frequência cardíaca ou o teste de corrida de Cooper de 12 minutos. Veja o seu nível aeróbico e como melhorá-lo.",
    ogImageAlt: "Calculadora de VO2 máx",
  },
  hero: {
    title: "Calculadora de VO2 máx",
    subtitle:
      "Estime o seu VO2 máx — a referência do condicionamento aeróbico — pela frequência cardíaca ou por um teste de corrida de 12 minutos.",
  },
  intro:
    "Informe a sua idade, sexo e frequência cardíaca em repouso (ou a distância da corrida de Cooper de 12 minutos) para estimar o VO2 máx e ver onde você se coloca na sua faixa etária.",
  calculator: {
    method: "Método",
    heartRateMethod: "Método da frequência cardíaca",
    cooperMethod: "Corrida de Cooper de 12 min",
    gender: "Sexo",
    male: "Masculino",
    female: "Feminino",
    age: "Idade",
    years: { one: "ano", other: "anos" },
    restingHeartRate: "Frequência cardíaca em repouso",
    bpm: "bpm",
    restingHint: "Meça logo de manhã, antes de se levantar.",
    distanceLabel: "Distância percorrida em 12 minutos",
    km: "km",
    miles: "milhas",
    distanceHint: "Corra em uma pista plana por exatamente 12 minutos e anote a sua distância.",
    calculate: "Calcular o VO2 máx",
    yourEstimate: "Seu VO2 máx estimado",
    unit: "ml/kg/min",
    improvementTip: "Dica para melhorar",
    disclaimer:
      "O VO2 máx é a referência do condicionamento aeróbico — o oxigênio máximo que o seu corpo consegue usar em um esforço intenso. Quanto maior, melhor a capacidade cardiovascular. As normas variam com a idade; estes limites são simplificados como orientação geral.",
    categories: {
      superior: {
        label: "Superior",
        description:
          "Capacidade aeróbica excepcional. Você tem um condicionamento cardiovascular destacado, típico de atletas de endurance de competição.",
        tip: "Mantenha com treino periodizado: alterne treinos longos, sessões de ritmo e semanas de recuperação para evitar o excesso de treino.",
      },
      excellent: {
        label: "Excelente",
        description:
          "Condicionamento aeróbico bem acima da média. O coração e os pulmões levam oxigênio com eficiência aos músculos em trabalho.",
        tip: "Inclua uma sessão de intervalos de VO2 máx por semana (por exemplo, 5×3 min em esforço forte) para chegar à faixa Superior.",
      },
      good: {
        label: "Bom",
        description:
          "Condicionamento acima da média. Você tem uma base aeróbica sólida para a atividade diária e o esporte recreativo.",
        tip: "Faça 3-4 sessões de cardio por semana. Inclua uma corrida de ritmo e uma fácil mais longa para construir a base.",
      },
      fair: {
        label: "Regular",
        description:
          "Capacidade aeróbica média. Um treino regular pode melhorar de forma clara o seu VO2 máx em 8-12 semanas.",
        tip: "Comece com corridas de 30 minutos na zona 2, 3 vezes por semana. Depois de 4 semanas de base, inclua uma sessão de HIIT por semana.",
      },
      poor: {
        label: "Fraco",
        description:
          "Capacidade aeróbica abaixo da média. A boa notícia: este nível responde rápido a um treino consistente.",
        tip: "Comece com caminhadas rápidas de 20-30 min, 5 vezes por semana. Passe para intervalos de corrida e caminhada depois de 2-3 semanas.",
      },
    },
  },
  info: {
    title: "VO2 máx — perguntas frequentes",
  },
  faq: [
    {
      question: "O que é VO2 máx?",
      answer:
        "O VO2 máx é a taxa máxima com que o seu corpo consegue consumir oxigênio durante um exercício intenso, medida em mililitros de oxigênio por quilograma de peso corporal por minuto (ml/kg/min). É amplamente considerado a referência do condicionamento aeróbico e da saúde cardiovascular. Um VO2 máx mais alto significa que coração, pulmões e músculos trabalham juntos com mais eficiência para entregar e usar oxigênio em um esforço prolongado.",
    },
    {
      question: "O que é um bom VO2 máx?",
      answer:
        "Para homens, um VO2 máx de 40–50 ml/kg/min é considerado bom, e acima de 55 é excelente. Para mulheres, 35–45 é bom, e acima de 50 é excelente. Atletas de endurance de elite, como maratonistas e ciclistas, costumam alcançar 60–85 ml/kg/min — valores que refletem anos de adaptação cardiovascular. Um adulto sem treino fica, em média, na casa dos 30 para mulheres e no começo dos 40 para homens.",
    },
    {
      question: "Como posso melhorar o meu VO2 máx?",
      answer:
        "Os métodos mais eficazes são o treino intervalado de alta intensidade (HIIT), as corridas de ritmo e as corridas longas e leves (LSD). Sessões de HIIT — como 4–6 intervalos de 3–5 minutos perto do esforço máximo — exigem diretamente o sistema aeróbico e produzem os maiores ganhos de VO2 máx. Combinadas com duas ou três corridas fáceis na zona 2 por semana, melhoras de 10–20% são típicas em 8–12 semanas para iniciantes e atletas com treino moderado.",
    },
    {
      question: "O que é o teste de corrida de Cooper de 12 minutos?",
      answer:
        "O teste de Cooper, criado pelo Dr. Kenneth Cooper em 1968 para a avaliação física das forças armadas dos EUA, consiste em correr o mais longe possível em exatamente 12 minutos em uma superfície plana. A distância percorrida estima o VO2 máx com a fórmula: VO2max = (distanceMeters − 504,9) / 44,73. Continua sendo um dos testes de campo mais usados na ciência do esporte porque não exige equipamento de laboratório — só uma pista medida e um cronômetro.",
    },
    {
      question: "O VO2 máx diminui com a idade?",
      answer:
        "Sim. Depois de cerca de 25 anos, o VO2 máx cai em média cerca de 1% ao ano em pessoas sedentárias. O treino aeróbico regular desacelera bastante essa queda — pessoas ativas na casa dos 60 e 70 anos costumam manter valores de VO2 máx comparáveis aos de sedentários 20 anos mais jovens. O essencial é o exercício cardiovascular consistente: até volumes moderados de corrida, ciclismo ou natação preservam a capacidade aeróbica até idades mais avançadas.",
    },
  ],
  cta: {
    title: "Acompanhe a sua evolução aeróbica",
    description: "Registre a sua atividade diária e melhore o condicionamento aeróbico com o app Steps.",
  },
  howTo: {
    name: "Como estimar o seu VO2 máx",
    description:
      "Estime o VO2 máx a partir da frequência cardíaca em repouso e da máxima, ou com o teste de corrida de Cooper de 12 minutos.",
    steps: [
      {
        name: "Escolha o método",
        text: "O método da frequência cardíaca (idade + frequência cardíaca em repouso) ou o teste de Cooper (distância percorrida em 12 minutos).",
      },
      {
        name: "Informe os valores",
        text: "Informe a idade e a frequência cardíaca em repouso, ou a distância percorrida em 12 minutos de corrida no máximo.",
      },
      {
        name: "Leia a estimativa de VO2 máx",
        text: "A calculadora devolve um VO2 máx estimado em ml/kg/min, além do seu percentil de condicionamento para a sua idade e sexo.",
      },
    ],
  },
};

export default ptBR;

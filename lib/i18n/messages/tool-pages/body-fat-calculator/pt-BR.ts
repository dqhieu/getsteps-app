import type { BodyFatCalculatorMessages } from "./en";

const ptBR: BodyFatCalculatorMessages = {
  meta: {
    title: "Calculadora de gordura corporal – método da Marinha (sem equipamento)",
    description:
      "Calcule seu percentual de gordura corporal com o método preciso da Marinha dos EUA. Informe suas medidas — sem balança nem aparelho de academia.",
    keywords: [
      "calculadora de gordura corporal",
      "percentual de gordura",
      "método da marinha gordura corporal",
      "como calcular gordura corporal",
      "gordura corporal homens",
      "gordura corporal mulheres",
    ],
    ogTitle: "Calculadora de gordura corporal – método da Marinha",
    ogDescription:
      "Calcule seu percentual de gordura corporal com o método preciso da Marinha dos EUA. Informe suas medidas — sem balança nem aparelho de academia.",
    ogImageAlt: "Calculadora de percentual de gordura corporal",
  },
  hero: {
    title: "Calculadora de percentual de gordura corporal",
    subtitle:
      "Calcule sua gordura corporal com precisão pelo método da Marinha dos EUA — só uma fita métrica.",
  },
  intro:
    "Informe sexo, altura e circunferências para calcular o percentual de gordura com a fórmula consagrada da Marinha dos EUA — sem balança de bioimpedância nem equipamento de academia.",
  calculator: {
    measurements: "Suas medidas",
    gender: "Sexo",
    male: "Masculino",
    female: "Feminino",
    height: "Altura",
    weight: "Peso",
    circumferenceUnit: "Unidade da circunferência",
    waist: "Circunferência da cintura",
    neck: "Circunferência do pescoço",
    hip: "Circunferência do quadril",
    measurementHint: "Meça cada ponto na parte mais estreita.",
    invalidTitle: "Confira suas medidas",
    invalidDetail: "A circunferência da cintura precisa ser maior que a do pescoço.",
    yourBodyFat: "Sua gordura corporal",
    percent: "{value}%",
    fatMass: "Massa gorda",
    leanMass: "Massa magra",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "Passos diários recomendados",
    categoriesTitle: "Categorias de gordura corporal",
    categoriesSubtitleMale: "Classificação do American Council on Exercise (ACE) para homens",
    categoriesSubtitleFemale: "Classificação do American Council on Exercise (ACE) para mulheres",
    categoryColumn: "Categoria",
    rangeColumn: "Faixa de gordura corporal",
    categories: {
      essential: "Gordura essencial",
      athletic: "Atlético",
      fitness: "Fitness",
      acceptable: "Aceitável",
      obese: "Obeso",
    },
  },
  info: {
    title: "Entendendo o percentual de gordura corporal",
    intro:
      "O percentual de gordura descreve seu condicionamento melhor do que o IMC sozinho. O IMC só olha peso e altura; a gordura corporal separa a massa gorda da massa magra (músculo, osso, água).",
    faqTitle: "Perguntas frequentes",
  },
  faq: [
    {
      question: "Qual é um percentual de gordura saudável?",
      answer:
        "Para homens, a faixa fitness de 14–17% e a aceitável de 18–24% são consideradas saudáveis. Para mulheres, fitness fica entre 21–24% e aceitável entre 25–31%. Quem treina em alto nível costuma ficar abaixo — 6–13% nos homens e 14–20% nas mulheres.",
    },
    {
      question: "O método da Marinha é preciso?",
      answer:
        "O método da Marinha dos EUA costuma ficar a 3–4% de um exame DEXA, o que o coloca entre os métodos de fita mais confiáveis sem equipamento. A precisão sobe quando você mede com cuidado e sempre do mesmo jeito.",
    },
    {
      question: "Onde medir a cintura?",
      answer:
        "Meça a cintura no ponto mais estreito, em geral na altura do umbigo ou um pouco acima. Mantenha a fita paralela ao chão e meça depois de expirar normalmente — não contraia a barriga.",
    },
    {
      question: "Qual a diferença entre gordura corporal e IMC?",
      answer:
        "O IMC usa só altura e peso, então não separa gordura de músculo. Um atleta musculoso pode ter IMC alto e pouca gordura. O percentual de gordura mostra melhor a composição real e o risco à saúde.",
    },
    {
      question: "Como reduzir a gordura corporal?",
      answer:
        "Una caminhada ou cardio regular, treino de força e um déficit calórico moderado. Mire em 0,5–1 kg de gordura a menos por semana. Uma meta de 10.000 passos ou mais por dia aumenta o gasto sem treinos intensos.",
    },
  ],
  cta: {
    title: "Acompanhe sua jornada de saúde",
    description: "Una suas metas de composição corporal ao registro diário de passos no Steps.",
  },
  howTo: {
    name: "Como calcular o percentual de gordura corporal (método da Marinha)",
    description:
      "Informe circunferência de pescoço, cintura e quadril, altura e sexo para estimar a gordura corporal com a fórmula da Marinha dos EUA.",
    steps: [
      {
        name: "Meça o pescoço",
        text: "Meça o pescoço logo abaixo do pomo de Adão com uma fita macia.",
      },
      {
        name: "Meça a cintura",
        text: "Nos homens, meça na altura do umbigo. Nas mulheres, no ponto mais estreito da cintura.",
      },
      {
        name: "Meça o quadril (somente mulheres)",
        text: "Nas mulheres, inclua uma medida no ponto mais largo do quadril.",
      },
      {
        name: "Informe as medidas e a altura",
        text: "Digite todas as circunferências e a altura. A calculadora aceita unidades métricas e imperiais.",
      },
      {
        name: "Leia o percentual e a categoria",
        text: "O resultado mostra o percentual estimado de gordura e a categoria ACE (gordura essencial, atletas, fitness, média, obeso).",
      },
    ],
  },
};

export default ptBR;

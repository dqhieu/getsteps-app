import type { HeartRateZonesCalculatorMessages } from "./en";

const ptBR: HeartRateZonesCalculatorMessages = {
  meta: {
    title: "Calculadora de zonas de frequência cardíaca: suas 5 zonas de treino",
    description:
      "Calcule suas 5 zonas de treino cardíaco com base na idade e na frequência cardíaca em repouso. Otimize os treinos para queima de gordura, resistência e desempenho.",
    keywords: [
      "calculadora de zonas de frequência cardíaca",
      "zonas de frequência cardíaca alvo",
      "zonas de treino cardíaco",
      "calculadora de frequência cardíaca máxima",
      "zona de queima de gordura",
      "treino na zona 2",
    ],
    ogTitle: "Calculadora de zonas de frequência cardíaca: suas 5 zonas de treino",
    ogDescription:
      "Calcule suas 5 zonas de treino cardíaco com base na idade e na frequência cardíaca em repouso. Otimize os treinos para queima de gordura, resistência e desempenho.",
    ogImageAlt: "Calculadora de zonas de frequência cardíaca",
  },
  hero: {
    title: "Calculadora de zonas de frequência cardíaca",
    subtitle:
      "Descubra suas zonas de treino cardíaco personalizadas para maximizar a queima de gordura, ganhar resistência e melhorar o desempenho.",
  },
  intro:
    "Informe a sua idade para ver na hora as suas 5 zonas de treino cardíaco personalizadas. Adicione a sua frequência cardíaca em repouso para usar o método de Karvonen e obter zonas mais precisas.",
  calculator: {
    yourDetails: "Seus dados",
    age: "Idade",
    years: { one: "ano", other: "anos" },
    advanced: "Opções avançadas",
    knowResting: "Eu sei a minha frequência cardíaca em repouso",
    restingHint: "Meça logo de manhã, antes de se levantar.",
    knowMax: "Eu sei a minha frequência cardíaca máxima",
    maxHint: "De um teste de laboratório recente ou de um esforço máximo durante o exercício.",
    bpm: "bpm",
    maxHeartRate: "Frequência cardíaca máxima",
    methodKarvonen: "Personalizado (Karvonen)",
    methodStandard: "Padrão (220 − idade)",
    zoneBadge: "Z{n}",
    bpmRange: "{min} – {max}",
    pctRange: "{min}–{max}%",
    zones: {
      recovery: { name: "Recuperação", benefit: "Recuperação ativa, baixa intensidade" },
      fatBurn: { name: "Queima de gordura", benefit: "Base aeróbica, queima de gordura ideal" },
      aerobic: { name: "Aeróbico", benefit: "Resistência, condicionamento cardiovascular" },
      threshold: { name: "Limiar", benefit: "Trabalho de velocidade, limiar de lactato" },
      maximum: { name: "Máximo", benefit: "Desempenho máximo, VO2 máx" },
    },
  },
  info: {
    title: "Entenda as zonas de frequência cardíaca",
  },
  faq: [
    {
      question: "O que são zonas de treino cardíaco?",
      answer:
        "As zonas de frequência cardíaca são faixas de batimentos por minuto que correspondem a diferentes intensidades de exercício. Existem cinco zonas, cada uma definida como uma porcentagem da sua frequência cardíaca máxima. Treinar em zonas diferentes produz adaptações distintas — da recuperação ativa e da queima de gordura na intensidade baixa até a velocidade máxima e o desenvolvimento do VO2 máx na intensidade alta. Distribuir os treinos entre as zonas deixa os ganhos mais equilibrados e eficazes.",
    },
    {
      question: "O que é a zona de queima de gordura?",
      answer:
        "A zona 2 (60–70% da FC máx) costuma ser chamada de zona de queima de gordura porque, nessa intensidade, o corpo usa principalmente gordura como combustível. Intensidades mais altas queimam mais calorias no total, mas uma parcela maior vem dos carboidratos. Para perder gordura de forma sustentável, o mais eficaz é combinar sessões de cardio na zona 2 com equilíbrio calórico geral. A zona 2 também aumenta a densidade mitocondrial e a base aeróbica sem exigir recuperação excessiva.",
    },
    {
      question: "Como calcular a minha frequência cardíaca máxima?",
      answer:
        "A fórmula padrão é 220 menos a sua idade. Aos 30 anos, isso dá uma FC máx de 190 bpm. É uma estimativa com margem de cerca de ±10–12 bpm — genética, condicionamento e medicamentos podem deslocar o seu máximo real. Se você tiver um teste de esforço em laboratório ou tiver registrado um esforço máximo real em uma prova ou treino forte, informe esse valor em \"Opções avançadas\" para zonas mais precisas.",
    },
    {
      question: "O que é o treino na zona 2?",
      answer:
        "O treino na zona 2 — também chamado de cardio contínuo de baixa intensidade (LISS) — ficou popular graças às pesquisas sobre longevidade e desempenho de endurance. É um esforço sustentado a 60–70% da FC máx, em uma intensidade na qual você consegue manter uma conversa. Atletas de endurance de elite costumam passar 80% do volume de treino na zona 2. Os benefícios incluem melhor metabolismo de gordura, mitocôndrias mais eficientes, maior débito cardíaco e recuperação mais rápida entre sessões fortes.",
    },
    {
      question: "Em que o método de Karvonen é diferente?",
      answer:
        "O método de Karvonen usa a sua reserva de frequência cardíaca (RFC) — a diferença entre a frequência cardíaca máxima e a frequência cardíaca em repouso — para calcular as zonas. A fórmula é: FC alvo = FC em repouso + (RFC × porcentagem da zona). Como considera o seu ponto de partida cardiovascular, ele gera zonas mais personalizadas e, em geral, mais precisas do que o método simples de porcentagem. Um atleta bem treinado com frequência cardíaca em repouso de 45 bpm terá zonas bem diferentes de uma pessoa sedentária com 75 bpm, mesmo na mesma idade.",
    },
  ],
  cta: {
    title: "Acompanhe a sua jornada de saúde",
    description:
      "Use o Steps para registrar as suas caminhadas diárias e manter a frequência cardíaca na zona ideal.",
  },
  howTo: {
    name: "Como encontrar as suas zonas de frequência cardíaca",
    description:
      "Informe a idade ou a frequência cardíaca máxima (e, se quiser, a frequência cardíaca em repouso) para obter as suas 5 zonas de treino com o método de Karvonen.",
    steps: [
      {
        name: "Informe a sua idade",
        text: "A idade estima a frequência cardíaca máxima (220 − idade) se você não informar uma diretamente.",
      },
      {
        name: "Opcional: informe a frequência cardíaca em repouso",
        text: "Se você informar a frequência cardíaca em repouso, a calculadora usa o método de Karvonen para zonas mais personalizadas.",
      },
      {
        name: "Leia as suas 5 zonas",
        text: "A calculadora mostra as zonas 1 a 5 com faixas em bpm e o objetivo do treino (recuperação, resistência, ritmo, limiar, intervalo).",
      },
    ],
  },
};

export default ptBR;

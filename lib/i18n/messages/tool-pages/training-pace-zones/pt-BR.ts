import type { TrainingPaceZonesMessages } from "./en";

const ptBR: TrainingPaceZonesMessages = {
  meta: {
    title: "Calculadora de zonas de pace — zonas de treino para o seu condicionamento",
    description:
      "Calcule suas 5 zonas de pace a partir de um resultado recente. Veja as faixas exatas para corridas leves, tempo, limiar e intervalos de VO2 max.",
    keywords: [
      "zonas de pace de treino",
      "calculadora de zonas de pace",
      "zonas de corrida Jack Daniels",
      "calculadora de pace de tempo",
      "calculadora de pace leve",
      "pace de intervalado",
      "calculadora de pace de limiar",
    ],
    ogTitle: "Calculadora de zonas de pace — zonas de treino para o seu condicionamento",
    ogDescription:
      "Calcule suas 5 zonas de pace a partir de um resultado recente. Veja as faixas exatas para corridas leves, tempo, limiar e intervalos de VO2 max.",
    ogImageAlt: "Calculadora de zonas de pace",
  },
  hero: {
    title: "Calculadora de zonas de pace",
    subtitle: "Receba zonas de treino personalizadas com base no seu desempenho recente.",
  },
  intro:
    "Informe um tempo de prova recente para calcular suas 5 zonas de pace, da corrida leve de recuperação aos intervalados intensos. Use-as para organizar o treino.",
  calculator: {
    distanceLabel: "Distância da prova",
    customDistanceLabel: "Distância (km)",
    finishTimeLabel: "Tempo de chegada",
    hour: "h",
    minute: "min",
    second: "s",
    invalidTime: "Informe um tempo de prova válido.",
    invalidDistance: "Informe uma distância válida.",
    calculate: "Calcular as zonas",
    footnote:
      "Um resultado recente no esforço de prova dá as zonas mais precisas. As zonas mudam conforme você evolui — recalcule depois das provas importantes.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Meia maratona",
      marathon: "Maratona",
      custom: "Personalizada",
    },
    zones: {
      easy: {
        name: "Leve / Recuperação",
        description: "Esforço muito leve. Dá para conversar o tempo todo. Constrói a base aeróbica e ajuda na recuperação.",
        usage: "~80% de todas as corridas",
      },
      aerobic: {
        name: "Base aeróbica",
        description: "Pace confortável e sustentável. Respiração elevada, mas estável. Zona principal do longão.",
        usage: "Longão semanal",
      },
      tempo: {
        name: "Tempo",
        description: "Confortavelmente forte. Respiração pesada. Treinos progressivos e trabalho no pace de maratona.",
        usage: "Treinos progressivos",
      },
      threshold: {
        name: "Limiar",
        description: "Esforço forte e sustentado. Pace de limiar de lactato. Treinos de 20–40 min.",
        usage: "Treinos de tempo (20–40 min)",
      },
      interval: {
        name: "Intervalo / VO2",
        description: "Esforço perto do máximo. Tiros curtos (400 m–1600 m). Desenvolve o VO2 max e a velocidade.",
        usage: "Intervalados na pista",
      },
    },
  },
  faqTitle: "Entendendo as zonas de pace",
  faq: [
    {
      question: "O que são zonas de pace de treino?",
      answer:
        "Zonas de pace são faixas que trabalham sistemas de energia diferentes. Cada zona produz adaptações distintas: as zonas leves constroem a base aeróbica e a densidade mitocondrial, as mais fortes desenvolvem o limiar de lactato e o VO2 max. Correr na intensidade certa em cada treino — em vez de ir sempre moderadamente forte — é um dos princípios mais importantes do treinamento de endurance.",
    },
    {
      question: "Quantas zonas de pace existem?",
      answer:
        "A maioria dos sistemas usa 5 zonas, embora alguns treinadores prefiram 3 (leve, moderado, forte) ou 7 (como nos sistemas Garmin e Polar). O modelo de 5 zonas — Leve, Aeróbica, Tempo, Limiar e Intervalo de VO2 — é o mais prático para corredores recreativos e competitivos. Ele se alinha ao quadro VDOT de Jack Daniels e tem apoio da ciência do esporte.",
    },
    {
      question: "Qual deve ser o pace das corridas leves?",
      answer:
        "As corridas leves (zonas 1–2) devem ser de fato confortáveis: você precisa conseguir conversar sem ofegar. Em geral ficam 60–90 segundos por quilômetro mais lentas que o seu pace de 5 km. Muita gente corre os dias leves forte demais e acumula fadiga que prejudica os treinos de qualidade. O leve de verdade é mais lento do que a maioria imagina, e é onde acontece a maior parte das adaptações aeróbicas.",
    },
    {
      question: "Com que frequência correr em cada zona?",
      answer:
        "A regra 80/20, apoiada por pesquisas com fundistas de elite, recomenda cerca de 80% do volume nas zonas 1–2 e 20% nas zonas 3–5. Essa abordagem polarizada rende mais do que treinar na maior parte do tempo em intensidade moderada. Uma semana típica pode ter 3–4 corridas leves, um longão, um treino de tempo (zona 4) e um intervalado (zona 5) — nas zonas certas, não só “forte”.",
    },
    {
      question: "Como melhorar meu pace de limiar?",
      answer:
        "O pace de limiar de lactato (zona 4) melhora sobretudo com um treino semanal de 20–40 minutos em esforço confortavelmente forte — o pace que você aguentaria por cerca de uma hora em prova. Conforme o corpo se adapta, ele elimina lactato com mais eficiência e você corre mais rápido antes de acumular fadiga. Uma sessão de limiar por semana durante 8–12 semanas costuma melhorar os tempos de 10 km e meia maratona.",
    },
  ],
  cta: {
    title: "Acompanhe corridas e passos diários",
    description: "Acompanhe suas corridas e os passos diários juntos no app Steps.",
  },
  howTo: {
    name: "Como obter suas zonas de pace de treino",
    description:
      "Informe uma distância e um tempo de prova recentes para receber 5 zonas de pace personalizadas para corridas leves, tempo, limiar e intervalados.",
    steps: [
      {
        name: "Informe um resultado recente",
        text: "Um tempo forte de 5 km, 10 km ou meia maratona.",
      },
      {
        name: "Leia suas 5 zonas",
        text: "A calculadora devolve os paces de recuperação, endurance, tempo, limiar e intervalado em min/km e min/mile.",
      },
    ],
  },
};

export default ptBR;

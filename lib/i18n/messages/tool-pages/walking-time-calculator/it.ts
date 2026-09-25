import type { WalkingTimeCalculatorMessages } from "./en";

const it: WalkingTimeCalculatorMessages = {
  meta: {
    title: "Calcolatore tempo di camminata: 1 km ≈ 12 min, 1 miglio ≈ 18 min",
    description:
      "Quanto ci vuole per camminare 1 km? ~12 min. 1 miglio? ~18 min. 5 km? ~60 min. Calcolatore gratuito per qualsiasi distanza a ritmo lento, normale, sostenuto o veloce.",
    keywords: [
      "tempo di camminata",
      "calcolatore tempo di camminata",
      "quanto ci vuole per camminare 5 km",
      "tempo camminata 8 km",
      "quanto ci vuole per camminare un miglio",
      "tempo in base alla distanza",
      "calcolatore ritmo di camminata",
      "quanto ci vuole per 10000 passi",
      "calcolatore durata camminata",
    ],
    ogTitle: "Calcolatore tempo di camminata: 1 km ≈ 12 min, 1 miglio ≈ 18 min",
    ogDescription:
      "1 km ≈ 12 min, 1 miglio ≈ 18 min, 5 km ≈ 60 min a ritmo normale. Calcolatore gratuito per qualsiasi distanza.",
    ogImageAlt: "Calcolatore tempo di camminata",
  },
  hero: {
    title: "Calcolatore tempo di camminata",
    subtitle:
      "Quanto ci vuole per camminare 5 km, 8 km o 28 miglia? Inserisci una distanza e ottieni stime per ritmo lento, normale, sostenuto e veloce.",
  },
  resultCta: {
    headline: "Registra ogni camminata in automatico",
    description:
      "Steps registra tempo, distanza e ritmo in background, così vedi come si sommano le tue camminate vere.",
  },
  stickyCta: "Tieni traccia dei passi con Steps",
  calculator: {
    title: "Calcola il tempo di camminata",
    distance: "Distanza",
    miles: "miglia",
    walkingSpeed: "Velocità di camminata",
    speeds: {
      slow: { label: "Lento", description: "3,2 km/h", inline: "lento" },
      normal: { label: "Normale", description: "5,0 km/h", inline: "normale" },
      brisk: { label: "Sostenuto", description: "6,4 km/h", inline: "sostenuto" },
      fast: { label: "Veloce", description: "7,2 km/h", inline: "veloce" },
    },
    includeBreaks: "Includi le pause (5 min ogni 30 min)",
    walkingTime: "Tempo di camminata",
    breaksDetail: "{walking} di camminata + {breaks} min di pausa",
    distanceLabel: "Distanza",
    stepsLabel: "Passi",
    caloriesLabel: "Calorie",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "Tempi di camminata di riferimento",
    referenceSubtitle: "Tempo per camminare le distanze comuni a ritmo {pace} ({speed} km/h)",
    colDistance: "Distanza",
    colTime: "Tempo",
    hoursMinutes: "{hours} h {minutes} min",
    hoursOnly: "{hours} h",
    minutesOnly: "{minutes} min",
    distances: ["1 km", "1 miglio", "2 km", "3 km", "5 km", "5 miglia", "10 km", "Mezza maratona"],
  },
  info: {
    title: "Guida alle velocità di camminata",
    intro:
      "La velocità cambia in base a forma fisica, terreno e scopo. Conoscere i diversi ritmi ti aiuta a pianificare le camminate.",
    paceTitle: "Guida ai ritmi",
    paces: [
      {
        label: "Lento (3,2 km/h / 2 mph):",
        text: "Una passeggiata tranquilla, adatta al recupero o a una chiacchierata",
      },
      {
        label: "Normale (5 km/h / 3,1 mph):",
        text: "Ritmo medio della maggior parte degli adulti",
      },
      {
        label: "Sostenuto (6,4 km/h / 4 mph):",
        text: "Camminata decisa che alza la frequenza cardiaca",
      },
      {
        label: "Veloce (7,2 km/h / 4,5 mph):",
        text: "Power walking, al confine con la corsa leggera",
      },
    ],
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Quanto ci vuole per camminare 1 km?",
      answer:
        "A ritmo normale (5 km/h) ci vogliono circa 12 minuti per 1 km. A ritmo lento (3,2 km/h) sono ~19 minuti e a ritmo sostenuto (6,4 km/h) puoi finire in circa 9 minuti. Sono circa 1.300 passi per un adulto medio.",
    },
    {
      question: "Quanto ci vuole per camminare 5 km?",
      answer:
        "A ritmo normale (5 km/h) ci vogliono circa 60 minuti per 5 km. A ritmo sostenuto (6,4 km/h) puoi completarli in circa 47 minuti.",
    },
    {
      question: "Quanto ci vuole per camminare 1 miglio?",
      answer:
        "Un miglio richiede circa 15-20 minuti a ritmo normale. Chi cammina sostenuto può farlo in 12-15 minuti.",
    },
    {
      question: "Quanto ci vuole per camminare 10.000 passi?",
      answer:
        "10.000 passi sono circa 7-8 km (4-5 miglia). A ritmo normale servono circa 1 ora e 20-40 minuti. Non devi farli tutti insieme: distribuiscili durante la giornata.",
    },
    {
      question: "Quanto ci vuole per camminare 7 km?",
      answer:
        "A ritmo normale (5 km/h) ci vogliono circa 84 minuti (1 ora e 24 min) per 7 km. A ritmo sostenuto (6,4 km/h) puoi finire in circa 66 minuti. Sono circa 9.100 passi per un adulto medio.",
    },
    {
      question: "Quanto ci vuole per camminare 8 km?",
      answer:
        "Camminare 8 km richiede circa 96 minuti (1 ora e 36 min) a ritmo normale (5 km/h), o circa 75 minuti a ritmo sostenuto. Sono circa 10.400 passi.",
    },
    {
      question: "Devo includere le pause nel tempo di camminata?",
      answer:
        "Per camminate più lunghe di 30 minuti, pause brevi aiutano a mantenere le energie e a limitare la fatica. Il calcolatore può aggiungere 5 minuti di pausa ogni 30 minuti di camminata se attivi l'opzione.",
    },
  ],
  precomputedTitle: "Tempi di camminata già calcolati",
  precomputed: [
    "Quanto ci vuole per camminare 10.000 passi",
    "Quanto ci vuole per camminare 5 miglia",
    "Quanto ci vuole per camminare 3 miglia",
    "Quanto ci vuole per camminare 1 miglio",
  ],
  allConversions: "Tutte le conversioni →",
  cta: {
    title: "Registra le tue camminate in automatico",
    description:
      "Scarica l'app Steps per tenere traccia automaticamente di tempo, distanza e ritmo.",
  },
  howTo: {
    name: "Come usare il calcolatore del tempo di camminata",
    description:
      "Inserisci una distanza e un ritmo per ottenere il tempo stimato in minuti — in chilometri, miglia o a partire da un numero di passi.",
    steps: [
      {
        name: "Inserisci la distanza",
        text: "Scrivi la distanza che vuoi camminare. Puoi passare da chilometri a miglia o inserire un numero di passi.",
      },
      {
        name: "Scegli un ritmo",
        text: "Scegli lento (3,2 km/h), normale (5 km/h), sostenuto (6,4 km/h) o veloce (7,2 km/h). Normale è il valore predefinito per un adulto tipico.",
      },
      {
        name: "Leggi il tempo di camminata",
        text: "Il calcolatore mostra i minuti stimati per coprire la distanza a ogni ritmo, più una stima dei passi totali.",
      },
    ],
  },
};

export default it;

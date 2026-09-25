import type { ActivityToStepsMessages } from "./en";

const it: ActivityToStepsMessages = {
  meta: {
    title: "Convertitore da attività a passi – Trasforma ogni esercizio in passi",
    description:
      "Converti ciclismo, nuoto, yoga, canottaggio e oltre 10 attività in passi equivalenti. Per le sfide di passi e il monitoraggio fitness.",
    keywords: [
      "convertitore attività in passi",
      "convertire esercizio in passi",
      "equivalente passi ciclismo",
      "equivalente passi nuoto",
      "calcolatore passi equivalenti",
      "passi senza camminare",
    ],
    ogTitle: "Convertitore da attività a passi – Trasforma ogni esercizio in passi",
    ogDescription:
      "Converti ciclismo, nuoto, yoga, canottaggio e oltre 10 attività in passi equivalenti. Per le sfide di passi e il monitoraggio fitness.",
    ogImageAlt: "Convertitore da attività a passi",
  },
  hero: {
    title: "Convertitore da attività a passi",
    subtitle:
      "Converti qualsiasi attività — ciclismo, nuoto, yoga e altro — in passi equivalenti per la tua sfida di passi o il tuo obiettivo fitness.",
    intro:
      "Scegli l'attività, inserisci la durata e vedi subito i passi equivalenti. I valori MET (equivalente metabolico) rendono precisa la conversione su 10 attività.",
  },
  appCta: {
    headline: "Conta ogni attività come passi, in automatico",
    description:
      "Steps segue il tuo movimento tutto il giorno in background e lo trasforma in equivalenti di passi, senza inserimenti manuali.",
  },
  stickyCta: "Segui i tuoi passi con Steps",
  calculator: {
    yourActivity: "La tua attività",
    activityType: "Tipo di attività",
    duration: "Durata (minuti)",
    intensity: "Intensità",
    intensities: {
      low: "Bassa",
      medium: "Media",
      high: "Alta",
    },
    calorieToggle: "Per il calcolo delle calorie (facoltativo)",
    bodyWeight: "Peso corporeo",
    equivalentSteps: "Passi equivalenti",
    equivalentFor: "passi equivalenti per {duration} min di {activity}",
    walkingTime: "Tempo di cammino",
    minutes: "{minutes} min",
    distance: "Distanza",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "Calorie",
    kcal: "kcal",
    metNote: "Calcolato con i valori MET (Metabolic Equivalent of Task)",
    activities: {
      cycling: "Ciclismo",
      swimming: "Nuoto",
      elliptical: "Ellittica",
      rowing: "Canottaggio",
      jump_rope: "Salto con la corda",
      dancing: "Ballo",
      yoga: "Yoga",
      basketball: "Pallacanestro",
      hiking: "Escursionismo",
      pilates: "Pilates",
    },
  },
  info: {
    title: "Come funzionano i passi equivalenti",
  },
  faq: [
    {
      question: "Come si calcolano i passi di un'attività?",
      answer:
        "Questo convertitore usa i valori MET (Metabolic Equivalent of Task), la misura standard dell'intensità nelle scienze motorie. Camminare a ritmo normale ha un MET di 3,5, circa 100 passi al minuto. Il MET di ogni attività viene confrontato con la camminata per ottenere i passi equivalenti. Un'attività con MET 7,0 (il doppio della camminata) produce il doppio dei passi equivalenti al minuto.",
    },
    {
      question: "Il ciclismo equivale a passi camminati?",
      answer:
        "Sì: 30 minuti di ciclismo a intensità media (MET ~6,8) sono circa 7.000–9.000 passi equivalenti secondo il ritmo. Il ciclismo agonistico ad alta intensità può superare i 14.000 passi equivalenti in 30 minuti. Un contapassi non li conta come passi veri, ma la conversione è un confronto equo per una sfida di passi.",
    },
    {
      question: "Il nuoto conta come passi?",
      answer:
        "Il nuoto non viene registrato in automatico come passi dalla maggior parte di app e contapassi. Tuttavia 30 minuti di nuoto a intensità media (MET ~7,0) equivalgono a circa 6.000–8.000 passi. Usa questo convertitore per far valere le sessioni nelle sfide che accettano l'inserimento manuale.",
    },
    {
      question: "Perché convertire le attività in passi?",
      answer:
        "Le sfide di passi, al lavoro o nelle app, misurano i progressi in passi, ma chi va in bici, nuota o fa yoga accumula meno passi GPS. Convertire le attività che non sono camminata ti fa partecipare in modo equo, seguire il movimento della giornata e confrontare lo sforzo di sport diversi sulla stessa scala.",
    },
  ],
  related: [
    { title: "Calcolatore da passi a calorie", href: "/tools/steps-to-calories-calculator" },
    { title: "Calcolatore obiettivo passi giornaliero", href: "/tools/daily-step-goal-calculator" },
    { title: "Calcolatore calorie camminata", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "Segui il tuo percorso di salute",
    description: "Registra tutte le attività e i passi in automatico con l'app Steps.",
  },
  howTo: {
    name: "Come convertire le attività in passi equivalenti",
    description:
      "Inserisci tipo di attività, durata e intensità per ottenere i passi equivalenti del tuo obiettivo giornaliero.",
    steps: [
      {
        name: "Scegli un'attività",
        text: "Ciclismo, nuoto, yoga, allenamento di forza e decine di altre sono supportate.",
      },
      {
        name: "Inserisci durata e intensità",
        text: "Durata in minuti più un selettore di intensità leggera, moderata o vigorosa.",
      },
      {
        name: "Leggi i passi equivalenti",
        text: "Il calcolatore restituisce i passi equivalenti in base ai valori MET, così raggiungi un obiettivo giornaliero anche senza aver camminato.",
      },
    ],
  },
};

export default it;

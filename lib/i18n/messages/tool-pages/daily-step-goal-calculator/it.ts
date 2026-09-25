import type { DailyStepGoalCalculatorMessages } from "./en";

const it: DailyStepGoalCalculatorMessages = {
  meta: {
    title: "Calcolatore obiettivo passi giornaliero – consigli personalizzati",
    description:
      "Ottieni un obiettivo di passi giornaliero personalizzato in base a età, livello di attività e obiettivi di salute. Scopri quanti passi camminare ogni giorno.",
    keywords: [
      "obiettivo passi giornaliero",
      "quanti passi devo fare",
      "obiettivo passi per età",
      "passi consigliati al giorno",
      "obiettivo passi personalizzato",
      "calcolatore obiettivo passi",
      "obiettivo camminata giornaliero",
      "passi per dimagrire",
    ],
    ogTitle: "Calcolatore obiettivo passi giornaliero",
    ogDescription:
      "Ottieni un obiettivo di passi giornaliero personalizzato in base a età, livello di attività e obiettivi di salute.",
    ogImageAlt: "Calcolatore obiettivo passi giornaliero",
  },
  hero: {
    title: "Calcolatore obiettivo passi giornaliero",
    subtitle:
      "Ottieni un obiettivo di passi giornaliero personalizzato in base alla tua età, al livello di attività attuale e ai tuoi obiettivi di salute.",
  },
  resultCta: {
    headline: "Raggiungi il tuo obiettivo di passi, in automatico",
    description:
      "Steps conta i tuoi passi in background, senza inserimenti manuali, così raggiungi davvero l'obiettivo qui sopra e crei un'abitudine duratura.",
  },
  stickyCta: "Tieni traccia dei passi con Steps",
  calculator: {
    yourProfile: "Il tuo profilo",
    age: "Età",
    years: "anni",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    activityLevel: "Livello di attività attuale",
    activity: {
      sedentary: "Sedentario",
      lightly_active: "Poco attivo",
      active: "Attivo",
      very_active: "Molto attivo",
    },
    healthGoal: "Obiettivo di salute",
    goals: {
      maintain: "Mantenere la salute",
      lose_weight: "Perdere peso",
      improve_fitness: "Migliorare la forma",
      train_event: "Preparare un evento",
    },
    currentSteps: "Passi giornalieri attuali (facoltativo)",
    currentStepsPlaceholder: "es. 5000",
    currentStepsHint: "Inserisci la media dei tuoi passi giornalieri per un consiglio più personalizzato",
    resultTitle: "Il tuo obiettivo di passi giornaliero consigliato",
    stepsValue: "{steps} passi",
    perDay: "al giorno",
    weeklyGoal: "Obiettivo settimanale",
    distancePerDay: "Distanza/giorno",
    caloriesPerDay: "Calorie/giorno",
    kmValue: "{distance} km",
    approxCalories: "~{calories}",
    planTitle: "Piano di progressione di 8 settimane",
    planSubtitle: "Arriva gradualmente al tuo obiettivo con traguardi settimanali",
    weekLabel: "Settimana {week}",
    tipsTitle: "Consigli per raggiungere il tuo obiettivo",
    tips: {
      sedentary: [
        "Inizia con una camminata di 10 minuti nella pausa pranzo",
        "Prendi le scale invece dell'ascensore",
        "Parcheggia più lontano dall'ingresso",
      ],
      lightlyActive: [
        "Aggiungi una camminata mattutina di 15 minuti alla tua routine",
        "Cammina mentre sei al telefono",
      ],
      loseWeight: [
        "Abbina la camminata a un'alimentazione equilibrata per risultati migliori",
        "Cerca di mantenere un ritmo sostenuto per bruciare più calorie",
      ],
      improveFitness: [
        "Aumenta il ritmo poco alla volta",
        "Includi un po' di salita o di scale",
      ],
      trainEvent: [
        "Segui un piano di allenamento progressivo",
        "Inserisci giorni di riposo per recuperare",
      ],
      general: [
        "Tieni traccia dei passi ogni giorno per restare motivato",
        "Trova un compagno di camminata che ti aiuti a essere costante",
      ],
    },
  },
  info: {
    title: "Capire gli obiettivi di passi",
    intro:
      "L'obiettivo giusto dipende dalla tua situazione. 10.000 passi è un traguardo popolare, ma la ricerca mostra che i benefici per la salute possono arrivare con quantità diverse in base a età e forma fisica.",
    ageTitle: "Passi consigliati per età",
    ages: [
      { label: "Bambini e adolescenti (sotto i 18):", steps: "12.000-15.000 passi/giorno" },
      { label: "Adulti (18-64):", steps: "10.000-12.000 passi/giorno" },
      { label: "Over 65:", steps: "7.000-10.000 passi/giorno" },
    ],
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Servono davvero 10.000 passi al giorno?",
      answer:
        "No, 10.000 passi non è un numero magico. Studi recenti mostrano che benefici importanti per la salute iniziano intorno a 7.000-8.000 passi al giorno. La chiave è essere più attivo di quanto sei ora.",
    },
    {
      question: "Quanti passi per dimagrire?",
      answer:
        "Per dimagrire, punta a 12.000 passi o più al giorno, insieme a un'alimentazione equilibrata. Può bruciare 400-600 calorie in più al giorno. La costanza conta più di centrare un numero perfetto ogni giorno.",
    },
    {
      question: "Come aumento i miei passi giornalieri?",
      answer:
        "Aggiungi 1.000 passi a settimana alla tua media attuale. Fai riunioni camminando, parcheggia più lontano, usa le scale invece dell'ascensore e programma brevi pause a piedi durante la giornata.",
    },
    {
      question: "E se non riesco a raggiungere l'obiettivo?",
      answer:
        "Qualsiasi aumento di attività è utile. Se l'obiettivo ti sembra troppo ambizioso, adattalo a qualcosa di sostenibile. Il miglior obiettivo è quello che riesci a mantenere. Punta al progresso, non alla perfezione.",
    },
  ],
  cta: {
    title: "Tieni traccia dei tuoi obiettivi di passi",
    description:
      "Scarica l'app Steps per impostare obiettivi giornalieri, seguire i progressi e costruire abitudini di camminata sane.",
  },
  howTo: {
    name: "Come trovare il tuo obiettivo di passi giornaliero",
    description:
      "Inserisci età, sesso, peso, altezza, livello di attività e obiettivo per ottenere un target di passi giornaliero personalizzato.",
    steps: [
      {
        name: "Inserisci il tuo profilo",
        text: "Compila età, sesso, peso e altezza. Il calcolatore li usa per stimare il dispendio energetico di base.",
      },
      {
        name: "Scegli il tuo livello di attività attuale",
        text: "Seleziona sedentario, poco attivo, moderatamente attivo o molto attivo. Sii sincero: l'obiettivo parte da dove sei ora.",
      },
      {
        name: "Scegli il tuo obiettivo",
        text: "Le opzioni includono forma generale, perdita di peso, salute cardiovascolare e longevità. Ognuna usa target di passi basati sulle evidenze.",
      },
      {
        name: "Leggi il tuo obiettivo giornaliero",
        text: "Il calcolatore restituisce un obiettivo di passi personalizzato, un totale settimanale e un piano di progressione se parti da un livello più basso.",
      },
    ],
  },
};

export default it;

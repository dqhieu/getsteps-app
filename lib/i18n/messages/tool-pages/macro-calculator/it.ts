import type { MacroCalculatorMessages } from "./en";

const it: MacroCalculatorMessages = {
  meta: {
    title: "Calcolatore di macronutrienti – proteine, carboidrati e grassi",
    description:
      "Calcola i tuoi macronutrienti giornalieri (proteine, carboidrati, grassi) per dimagrire, mantenere o aumentare la massa muscolare. In base al tuo TDEE e ai tuoi obiettivi.",
    keywords: [
      "calcolatore macro",
      "calcolatore macronutrienti",
      "calcolatore proteine per dimagrire",
      "calcolare i macro",
      "quanti grammi di proteine al giorno",
      "ripartizione macronutrienti",
      "calcolatore IIFYM",
    ],
    ogTitle: "Calcolatore di macronutrienti – proteine, carboidrati e grassi",
    ogDescription:
      "Calcola i tuoi macronutrienti giornalieri (proteine, carboidrati, grassi) per dimagrire, mantenere o aumentare la massa muscolare.",
  },
  hero: {
    title: "Calcolatore di macronutrienti",
    subtitle:
      "Ottieni i tuoi obiettivi giornalieri di proteine, carboidrati e grassi in base ai tuoi dati e al tuo obiettivo.",
  },
  intro:
    "Inserisci i tuoi dati e scegli l'obiettivo per calcolare i macronutrienti giornalieri. Che tu sia in definizione, in mantenimento o in aumento muscolare, la ripartizione giusta fa la differenza.",
  calculator: {
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    weight: "Peso",
    height: "Altezza (cm)",
    activityLevel: "Livello di attività",
    activity: {
      sedentary: "Sedentario",
      light: "Leggermente attivo",
      moderate: "Moderatamente attivo",
      active: "Attivo",
      very_active: "Molto attivo",
    },
    goal: "Obiettivo",
    goals: {
      weight_loss: "Dimagrimento",
      maintenance: "Mantenimento",
      muscle_gain: "Aumento muscolare",
    },
    calculate: "Calcola i macronutrienti",
    dailyTarget: "Il tuo obiettivo giornaliero",
    cal: "cal",
    bmrTdee: "BMR: {bmr} · TDEE: {tdee}",
    protein: "Proteine",
    carbs: "Carboidrati",
    fat: "Grassi",
    grams: "{grams}g",
  },
  info: {
    title: "Capire i macronutrienti",
    faqTitle: "Domande comuni",
  },
  faq: [
    {
      question: "Cosa sono i macronutrienti?",
      answer:
        "I macronutrienti (proteine, carboidrati, grassi) sono le tre principali fonti di calorie. Proteine e carboidrati forniscono 4 calorie per grammo, i grassi 9 calorie per grammo. L'equilibrio giusto per il tuo obiettivo determina la composizione corporea.",
    },
    {
      question: "Quante proteine dovrei mangiare al giorno?",
      answer:
        "Chi è attivo punta a 1,6–2,4 g di proteine per kg di peso. La fascia alta (2,2–2,4 g/kg) è consigliata per l'aumento muscolare o durante un deficit calorico, per preservare la massa muscolare.",
    },
    {
      question: "Devo contare i macronutrienti o solo le calorie?",
      answer:
        "Tracciare i macronutrienti dà più controllo sulla composizione corporea. Contare solo le calorie in dimagrimento può far perdere muscolo se le proteine sono troppo basse — i macronutrienti fanno sì che perda grasso preservando la massa magra.",
    },
    {
      question: "Qual è una buona ripartizione dei macronutrienti per dimagrire?",
      answer:
        "Una ripartizione ricca di proteine funziona meglio: circa 35–40% di proteine per preservare il muscolo, 25% di grassi per l'equilibrio ormonale e 30–35% di carboidrati per l'energia. Raggiungere le proteine viene prima di tutto il resto.",
    },
    {
      question: "Quanti grammi di carboidrati al giorno?",
      answer:
        "Di solito 150–300 g per un adulto attivo. Punta al basso in dimagrimento e più in alto per gli sport di endurance o l'aumento muscolare. Il fabbisogno di carboidrati segue il volume di allenamento.",
    },
  ],
  cta: {
    title: "Abbina i macronutrienti a un obiettivo di passi",
    description: "Abbina i tuoi obiettivi di macronutrienti a un obiettivo di passi giornaliero per risultati migliori.",
  },
  howTo: {
    name: "Come calcolare i tuoi macronutrienti giornalieri",
    description:
      "Inserisci i tuoi dati e l'obiettivo per ottenere proteine, carboidrati e grassi giornalieri in grammi e calorie.",
    steps: [
      {
        name: "Inserisci i tuoi dati",
        text: "Età, sesso, peso, altezza e livello di attività — gli stessi dati del calcolatore TDEE.",
      },
      {
        name: "Scegli l'obiettivo",
        text: "Definizione (dimagrire), mantenimento o massa (aumentare il muscolo). Ogni obiettivo usa rapporti di macronutrienti diversi.",
      },
      {
        name: "Leggi i tuoi obiettivi di macronutrienti",
        text: "Il calcolatore restituisce grammi e calorie per proteine, carboidrati e grassi, più le calorie giornaliere totali.",
      },
    ],
  },
};

export default it;

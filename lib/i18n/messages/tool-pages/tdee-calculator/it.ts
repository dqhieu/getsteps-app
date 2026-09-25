import type { TdeeCalculatorMessages } from "./en";

const it: TdeeCalculatorMessages = {
  meta: {
    title: "Calcolatore TDEE – dispendio energetico giornaliero totale e calorie",
    description:
      "Calcola il tuo dispendio energetico giornaliero totale (TDEE) e il metabolismo basale (BMR). Trova il fabbisogno calorico per dimagrire, mantenere o aumentare la massa muscolare.",
    keywords: [
      "calcolatore TDEE",
      "calcolatore dispendio energetico giornaliero totale",
      "calcolatore calorie",
      "calcolatore BMR",
      "quante calorie dovrei mangiare",
      "calcolatore calorie di mantenimento",
      "fabbisogno calorico giornaliero",
    ],
    ogTitle: "Calcolatore TDEE – dispendio energetico giornaliero totale e calorie",
    ogDescription:
      "Calcola il tuo dispendio energetico giornaliero totale (TDEE) e il metabolismo basale (BMR). Trova il fabbisogno calorico per dimagrire, mantenere o aumentare la massa muscolare.",
  },
  hero: {
    title: "Calcolatore TDEE",
    subtitle: "Calcola quante calorie bruci al giorno in base ai tuoi dati e al livello di attività.",
  },
  intro:
    "Inserisci sesso, età, peso, altezza e livello di attività per calcolare il tuo dispendio energetico giornaliero totale (TDEE) — le calorie che il corpo brucia in un giorno. Usalo per fissare il giusto obiettivo calorico.",
  calculator: {
    details: "I tuoi dati",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    years: "anni",
    weight: "Peso",
    height: "Altezza",
    activityLevel: "Livello di attività",
    activity: {
      sedentary: "Sedentario",
      light: "Leggermente attivo",
      moderate: "Moderatamente attivo",
      active: "Attivo",
      very_active: "Molto attivo",
    },
    calculate: "Calcola il TDEE",
    results: "I tuoi risultati",
    bmr: "BMR",
    bmrUnit: "cal/giorno a riposo",
    tdee: "TDEE",
    tdeeUnit: "cal/giorno totali",
    calorieGoals: "Obiettivi calorici",
    maintenanceBadge: "Mantenimento",
    belowMinimum: "Sotto il minimo",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "Perdita aggressiva", weekly: "-1 kg / settimana" },
      moderate_loss: { label: "Perdita moderata", weekly: "-0.5 kg / settimana" },
      mild_loss: { label: "Perdita lieve", weekly: "-0.25 kg / settimana" },
      maintenance: { label: "Mantenimento", weekly: "0 kg / settimana" },
      mild_gain: { label: "Aumento lieve", weekly: "+0.25 kg / settimana" },
      muscle_gain: { label: "Aumento muscolare", weekly: "+0.5 kg / settimana" },
    },
  },
  faqTitle: "FAQ su TDEE e calorie",
  faq: [
    {
      question: "Che cos'è il TDEE?",
      answer:
        "TDEE significa dispendio energetico giornaliero totale — le calorie che il corpo brucia in un giorno. Include il metabolismo basale (calorie a riposo), l'energia usata nell'attività fisica e l'effetto termico del cibo (calorie per digerire). Il TDEE è il numero più importante per fissare obiettivi calorici di dimagrimento, mantenimento o aumento muscolare.",
    },
    {
      question: "Quanto è preciso il TDEE?",
      answer:
        "I calcolatori di TDEE con l'equazione di Mifflin-St Jeor sono in genere accurati entro il 10–15% per la maggior parte delle persone. La variazione individuale dovuta a genetica, massa muscolare, ormoni e adattamento metabolico può spostare il valore reale. Usa il risultato come punto di partenza, segui il peso per 2–3 settimane e aggiusta l'apporto di 100–200 calorie in base ai progressi reali.",
    },
    {
      question: "Qual è la differenza tra BMR e TDEE?",
      answer:
        "Il BMR (metabolismo basale) sono le calorie che il corpo brucia a riposo completo — l'energia minima per respirazione, circolazione e riparazione cellulare. Il TDEE aggiunge tutto il resto sopra il BMR: attività fisica, esercizio e digestione. Il TDEE è sempre più alto del BMR ed è il numero da usare per gli obiettivi calorici.",
    },
    {
      question: "Quante calorie sotto il TDEE per dimagrire?",
      answer:
        "Un deficit giornaliero di 250–500 calorie sotto il TDEE è consigliato per una perdita sostenibile di 0,25–0,5 kg a settimana. Deficit più ampi possono causare perdita di muscolo, carenze e adattamento metabolico. Le donne in genere non dovrebbero scendere sotto 1.200 calorie/giorno e gli uomini sotto 1.500 calorie/giorno senza controllo medico. Un deficit moderato più più passi quotidiani è spesso più efficace della sola restrizione.",
    },
    {
      question: "Il TDEE cambia con l'età?",
      answer:
        "Sì. Il TDEE di solito scende di circa l'1–2% per decennio dopo i 20 anni, soprattutto per la perdita di massa muscolare (sarcopenia). Il muscolo è metabolicamente attivo e brucia più calorie a riposo del tessuto adiposo. L'allenamento di forza e uno stile di vita attivo possono rallentare molto questo calo. I cambiamenti ormonali, in particolare in menopausa, possono ridurre il TDEE anche nelle donne.",
    },
  ],
  cta: {
    title: "Aumenta il tuo TDEE in modo naturale",
    description: "Aumenta il tuo TDEE in modo naturale aggiungendo passi ogni giorno. Registrali nell'app Steps.",
  },
  howTo: {
    name: "Come calcolare il tuo dispendio energetico giornaliero totale",
    description:
      "Inserisci età, sesso, peso, altezza e livello di attività per ottenere BMR e TDEE con l'equazione di Mifflin-St Jeor.",
    steps: [
      {
        name: "Inserisci età, sesso, peso e altezza",
        text: "Dati richiesti per la formula di Mifflin-St Jeor, la più accurata per la popolazione generale.",
      },
      {
        name: "Scegli il livello di attività",
        text: "Sedentario (lavoro da scrivania), leggermente attivo (esercizio 1-3 giorni/settimana), moderatamente attivo (3-5 giorni), molto attivo (6-7 giorni) o extra attivo.",
      },
      {
        name: "Leggi BMR e TDEE",
        text: "Il calcolatore restituisce il metabolismo basale (calorie per restare in vita a riposo) e il dispendio energetico giornaliero totale (calorie per mantenere il peso).",
      },
    ],
  },
};

export default it;

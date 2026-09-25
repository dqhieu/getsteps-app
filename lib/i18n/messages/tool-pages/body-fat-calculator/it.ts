import type { BodyFatCalculatorMessages } from "./en";

const it: BodyFatCalculatorMessages = {
  meta: {
    title: "Calcolatore massa grassa – metodo Navy (senza strumenti)",
    description:
      "Calcola la percentuale di grasso corporeo con il metodo preciso della Marina USA. Inserisci le misure — niente bilancia o attrezzi da palestra.",
    keywords: [
      "calcolatore massa grassa",
      "percentuale grasso corporeo",
      "metodo navy grasso corporeo",
      "come calcolare la massa grassa",
      "grasso corporeo uomini",
      "grasso corporeo donne",
    ],
    ogTitle: "Calcolatore massa grassa – metodo Navy",
    ogDescription:
      "Calcola la percentuale di grasso corporeo con il metodo preciso della Marina USA. Inserisci le misure — niente bilancia o attrezzi da palestra.",
    ogImageAlt: "Calcolatore della percentuale di grasso corporeo",
  },
  hero: {
    title: "Calcolatore della percentuale di grasso corporeo",
    subtitle:
      "Calcola il grasso corporeo con precisione usando il metodo della Marina USA — basta un metro da sarta.",
  },
  intro:
    "Inserisci sesso, altezza e circonferenze per calcolare la percentuale di grasso con la formula collaudata della Marina USA — senza bilancia impedenziometrica né attrezzi.",
  calculator: {
    measurements: "Le tue misure",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    height: "Altezza",
    weight: "Peso",
    circumferenceUnit: "Unità delle circonferenze",
    waist: "Circonferenza vita",
    neck: "Circonferenza collo",
    hip: "Circonferenza fianchi",
    measurementHint: "Prendi ogni misura nel punto più stretto.",
    invalidTitle: "Controlla le misure",
    invalidDetail: "La circonferenza della vita deve essere maggiore di quella del collo.",
    yourBodyFat: "Il tuo grasso corporeo",
    percent: "{value}%",
    fatMass: "Massa grassa",
    leanMass: "Massa magra",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "Passi giornalieri consigliati",
    categoriesTitle: "Categorie di grasso corporeo",
    categoriesSubtitleMale: "Classificazione dell'American Council on Exercise (ACE) per gli uomini",
    categoriesSubtitleFemale: "Classificazione dell'American Council on Exercise (ACE) per le donne",
    categoryColumn: "Categoria",
    rangeColumn: "Intervallo di grasso",
    categories: {
      essential: "Grasso essenziale",
      athletic: "Atletico",
      fitness: "Fitness",
      acceptable: "Accettabile",
      obese: "Obeso",
    },
  },
  info: {
    title: "Capire la percentuale di grasso corporeo",
    intro:
      "La percentuale di grasso descrive la forma meglio del solo BMI. Il BMI considera solo peso e altezza, mentre il grasso corporeo distingue la massa grassa dalla massa magra (muscoli, ossa, acqua).",
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Qual è una percentuale di grasso sana?",
      answer:
        "Per gli uomini, un intervallo fitness del 14–17% e uno accettabile del 18–24% sono considerati sani. Per le donne, il fitness sta tra il 21–24% e l'accettabile tra il 25–31%. Gli atleti stanno di solito più in basso — 6–13% per gli uomini e 14–20% per le donne.",
    },
    {
      question: "Quanto è preciso il metodo Navy?",
      answer:
        "Il metodo della Marina USA resta in genere entro il 3–4% da una scansione DEXA: è tra i metodi con il metro più affidabili, senza strumenti. La precisione sale se misuri con cura e sempre allo stesso modo.",
    },
    {
      question: "Dove misuro la vita?",
      answer:
        "Misura la vita nel punto più stretto, di solito all'ombelico o appena sopra. Tieni il metro parallelo al pavimento e misura dopo un'espirazione normale — non tirare in dentro la pancia.",
    },
    {
      question: "Che differenza c'è tra grasso corporeo e BMI?",
      answer:
        "Il BMI usa solo altezza e peso, quindi non distingue grasso e muscolo. Un atleta muscoloso può avere un BMI alto e poco grasso. La percentuale di grasso indica meglio la composizione reale e il rischio per la salute.",
    },
    {
      question: "Come riduco il grasso corporeo?",
      answer:
        "Unisci camminata o cardio regolari, allenamento di forza e un deficit calorico moderato. Punta a 0,5–1 kg di grasso in meno a settimana. Un obiettivo di 10.000 passi o più al giorno alza il dispendio senza allenamenti intensi.",
    },
  ],
  cta: {
    title: "Segui il tuo percorso di salute",
    description: "Abbina gli obiettivi di composizione corporea al conteggio quotidiano dei passi in Steps.",
  },
  howTo: {
    name: "Come calcolare la percentuale di grasso corporeo (metodo Navy)",
    description:
      "Inserisci circonferenza di collo, vita e fianchi, altezza e sesso per stimare il grasso corporeo con la formula della Marina USA.",
    steps: [
      {
        name: "Misura il collo",
        text: "Misura il collo appena sotto il pomo d'Adamo con un metro morbido.",
      },
      {
        name: "Misura la vita",
        text: "Per gli uomini, misura all'altezza dell'ombelico. Per le donne, nel punto più stretto della vita.",
      },
      {
        name: "Misura i fianchi (solo donne)",
        text: "Per le donne, aggiungi una misura nel punto più largo dei fianchi.",
      },
      {
        name: "Inserisci misure e altezza",
        text: "Digita tutte le circonferenze più l'altezza. Il calcolatore accetta unità metriche e imperiali.",
      },
      {
        name: "Leggi percentuale e categoria",
        text: "Il risultato mostra la percentuale stimata di grasso e la categoria ACE (grasso essenziale, atleti, fitness, media, obeso).",
      },
    ],
  },
};

export default it;

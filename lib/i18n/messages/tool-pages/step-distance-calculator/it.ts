import type { StepDistanceCalculatorMessages } from "./en";

const it: StepDistanceCalculatorMessages = {
  meta: {
    title: "Calcolatore passi e distanza: 1 km ≈ 1.300 passi",
    description:
      "1 km ≈ 1.300 passi. 1 miglio ≈ 2.100 passi. 5.000 passi ≈ 3,8 km / 2,4 mi. Calcolatore gratuito: personalizzalo con la tua altezza e la tua falcata.",
    keywords: [
      "km in passi",
      "passi in km",
      "1 km in passi",
      "2 km in passi",
      "3 km in passi",
      "6500 passi in km",
      "calcolatore distanza passi",
      "calcolatore lunghezza del passo",
      "passi in distanza",
      "distanza in passi",
      "calcolatore distanza a piedi",
      "calcolatore lunghezza passo",
      "quanti passi per km",
      "passi in miglia",
    ],
    ogTitle: "Calcolatore passi e distanza: 1 km ≈ 1.300 passi",
    ogDescription:
      "1 km ≈ 1.300 passi · 5.000 passi ≈ 3,8 km / 2,4 mi · 10.000 ≈ 7,6 km / 4,7 mi. Calcolatore gratuito personalizzato sulla tua altezza.",
    ogImageAlt: "Calcolatore distanza dei passi",
  },
  hero: {
    title: "Calcolatore distanza dei passi",
    subtitle:
      "Converti i passi in distanza o la distanza in passi. Risultati personalizzati in base ad altezza, sesso e falcata.",
  },
  resultCta: {
    headline: "Tieni traccia dei tuoi passi e della distanza reali",
    description:
      "Steps conta i tuoi passi in automatico e mostra ogni giorno distanza, ritmo e calorie reali, senza inserimenti manuali.",
  },
  stickyCta: "Tieni traccia dei passi con Steps",
  calculator: {
    yourInformation: "I tuoi dati",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    years: "anni",
    height: "Altezza",
    stepLength: "La tua lunghezza del passo stimata: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} pollici)",
    stepsToDistance: "Passi in distanza",
    distanceToSteps: "Distanza in passi",
    numberOfSteps: "Numero di passi",
    stepsPlaceholder: "Inserisci il numero di passi",
    distance: "Distanza",
    distancePlaceholder: "Inserisci la distanza",
    miles: "miglia",
    result: "Risultato",
    kmValue: "{distance} km",
    milesParen: "({distance} miglia)",
    stepsValue: "{steps} passi",
    estimatedCalories: "Calorie stimate",
    kcalValue: "{calories} kcal",
    walkingTime: "Tempo di camminata",
    hoursMinutes: "{hours} h {minutes} min",
    minutesOnly: "{minutes} min",
    referenceTitle: "Tabella di riferimento",
    referenceSubtitle: "Obiettivi di passi comuni e distanze equivalenti in base al tuo profilo",
    colSteps: "Passi",
    colDistance: "Distanza",
    colCalories: "Calorie",
    colTime: "Tempo",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "Come calcoliamo la lunghezza del tuo passo",
    intro:
      "La lunghezza del passo decide quanta strada fai a ogni passo. La stimiamo con una formula basata sulla ricerca, che considera altezza, sesso ed età.",
    formulaTitle: "La formula",
    maleLabel: "Uomo:",
    maleFormula: "Lunghezza del passo = altezza (cm) x 0,415",
    femaleLabel: "Donna:",
    femaleFormula: "Lunghezza del passo = altezza (cm) x 0,413",
    ageLabel: "Aggiustamento per età:",
    ageFormula: "La lunghezza del passo diminuisce di circa l'1% per decennio dopo i 40 anni",
    average:
      "Negli adulti la lunghezza media del passo va da 60 a 80 cm (24-31 pollici). Velocità, terreno e forma fisica possono cambiare la lunghezza reale.",
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Quanti passi ci sono in un miglio?",
      answer:
        "In media un miglio corrisponde a circa 2.000-2.500 passi, in base alla lunghezza del passo. Con una falcata più lunga servono meno passi per la stessa distanza.",
    },
    {
      question: "Quanti passi ci sono in un chilometro?",
      answer:
        "In media un chilometro corrisponde a circa 1.250-1.550 passi. Usa il calcolatore qui sopra per una stima in base al tuo profilo.",
    },
    {
      question: "10.000 passi al giorno bastano?",
      answer:
        "10.000 passi al giorno è un obiettivo diffuso e corrisponde a circa 5 miglia (8 km) di camminata. La ricerca suggerisce che anche 7.000-8.000 passi al giorno danno benefici importanti. Il miglior obiettivo è quello che ti stimola e resta sostenibile.",
    },
    {
      question: "Quanti passi sono 1,8 km?",
      answer:
        "1,8 km sono circa 2.340 passi per un adulto medio (falcata ~77 cm). Usa il calcolatore qui sopra con la tua altezza per una stima più precisa.",
    },
    {
      question: "Quanti passi sono 3,5 km?",
      answer:
        "3,5 km sono circa 4.550 passi per un adulto medio. Le persone più alte fanno meno passi (falcata più lunga), quelle più basse ne fanno di più.",
    },
    {
      question: "Quanto è preciso questo calcolatore?",
      answer:
        "Il calcolatore fornisce una stima ragionevole in base alle tue caratteristiche fisiche. Per più precisione, misura la lunghezza reale del passo camminando una distanza nota e contando i passi.",
    },
  ],
  conversionsTitle: "Tabelle di conversione rapide",
  conversions: [
    "10.000 passi in miglia",
    "5.000 passi in miglia",
    "Passi in un miglio",
    "Passi in un km",
    "Tabella passi in km",
    "Tabella passi in miglia",
    "Tabella passi in calorie",
  ],
  allConversions: "Tutte le conversioni →",
  stepsToKm: {
    title: "Passi in km: quanti chilometri ci sono nei tuoi passi?",
    intro:
      "Convertire i {phrase} dipende dalla falcata, che varia con l'altezza. Come riferimento: {ruleA} per un adulto medio, e {ruleB}.",
    phrase: "passi in km",
    ruleA: "1.000 passi ≈ 0,75 km",
    ruleB: "1 km ≈ 1.300 passi",
    cards: [
      { value: "0,75 km", label: "1.000 passi" },
      { value: "3,8 km", label: "5.000 passi" },
      { value: "7,5 km", label: "10.000 passi" },
      { value: "15 km", label: "20.000 passi" },
    ],
    guide:
      "Sono medie: la tua distanza reale dipende da altezza e falcata. Usa il calcolatore qui sopra per una conversione personalizzata, oppure leggi la guida su {link} con tabelle per altezza.",
    guideLink: "quanti passi in un chilometro",
  },
  kmTable: {
    title: "Km in passi: riferimento rapido",
    intro:
      "Numero approssimativo di passi per distanze comuni, con una falcata media di 0,75 m (adulto medio).",
    colDistance: "Distanza",
    colSteps: "Passi (circa)",
    colTime: "Tempo di camminata",
    rows: [
      { distance: "0,5 km", steps: "650", time: "~6 min" },
      { distance: "1 km", steps: "1.300", time: "~12 min" },
      { distance: "1,5 km", steps: "1.950", time: "~18 min" },
      { distance: "1,8 km", steps: "2.340", time: "~22 min" },
      { distance: "2 km", steps: "2.600", time: "~24 min" },
      { distance: "2,5 km", steps: "3.250", time: "~30 min" },
      { distance: "3 km", steps: "3.900", time: "~36 min" },
      { distance: "3,5 km", steps: "4.550", time: "~42 min" },
      { distance: "4 km", steps: "5.200", time: "~48 min" },
      { distance: "5 km (~3,1 miglia)", steps: "6.500", time: "~60 min" },
      { distance: "6 km", steps: "7.800", time: "~72 min" },
      { distance: "7 km", steps: "9.100", time: "~84 min" },
      { distance: "8 km (~5 miglia)", steps: "10.400", time: "~96 min" },
      { distance: "10 km (~6,2 miglia)", steps: "13.000", time: "~2 h" },
      { distance: "12 km", steps: "15.600", time: "~2 h 24 min" },
      { distance: "15 km", steps: "19.500", time: "~3 h" },
      { distance: "20 km", steps: "26.000", time: "~4 h" },
    ],
    footnote:
      "Basato su una falcata media (~0,75 m) e un ritmo normale (~5 km/h). Usa il calcolatore qui sopra per un risultato in base ad altezza e sesso.",
  },
  stepsTable: {
    title: "Passi in km e miglia: riferimento rapido",
    intro:
      "Distanza approssimativa in km e miglia per numeri di passi comuni, con una falcata media di 0,75 m.",
    colSteps: "Passi",
    colKm: "Km",
    colMiles: "Miglia",
    rows: [
      { steps: "1.000", km: "0,75 km", miles: "0,47 mi" },
      { steps: "2.000", km: "1,5 km", miles: "0,93 mi" },
      { steps: "2.500", km: "1,9 km", miles: "1,17 mi" },
      { steps: "3.000", km: "2,25 km", miles: "1,4 mi" },
      { steps: "5.000", km: "3,8 km", miles: "2,4 mi" },
      { steps: "6.000", km: "4,5 km", miles: "2,8 mi" },
      { steps: "6.500", km: "4,9 km", miles: "3,0 mi" },
      { steps: "7.000", km: "5,25 km", miles: "3,3 mi" },
      { steps: "7.500", km: "5,6 km", miles: "3,5 mi" },
      { steps: "10.000", km: "7,5 km", miles: "4,7 mi" },
      { steps: "12.000", km: "9,0 km", miles: "5,6 mi" },
      { steps: "13.000", km: "9,75 km", miles: "6,05 mi" },
      { steps: "15.000", km: "11,25 km", miles: "7,0 mi" },
      { steps: "20.000", km: "15 km", miles: "9,3 mi" },
    ],
    footnote:
      "Le distanze assumono la falcata di un adulto medio. Chi è più alto copre più terreno a ogni passo; chi è più basso, meno. Usa il calcolatore qui sopra per un risultato in base alla tua altezza.",
  },
  cta: {
    title: "Tieni traccia dei passi in automatico",
    description:
      "Scarica l'app Steps per registrare automaticamente passi, distanza e calorie su iPhone e Apple Watch.",
  },
  howTo: {
    name: "Come convertire i passi in distanza (o la distanza in passi)",
    description:
      "Inserisci l'altezza e un numero di passi oppure una distanza. Il calcolatore stima la conversione in base alla tua lunghezza del passo.",
    steps: [
      {
        name: "Inserisci la tua altezza",
        text: "L'altezza serve a stimare la lunghezza media del passo. La falcata di camminata è circa 0,413 × altezza per le donne e 0,415 × altezza per gli uomini.",
      },
      {
        name: "Inserisci passi o distanza",
        text: "Passa ai passi per ottenere una distanza, o alla distanza per ottenere un numero di passi. Sono supportate unità metriche e imperiali.",
      },
      {
        name: "Leggi il valore convertito",
        text: "Il risultato mostra la conversione e la lunghezza stimata del passo in metri e piedi.",
      },
    ],
  },
};

export default it;

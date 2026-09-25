import type { TreadmillCalorieCalculatorMessages } from "./en";

const it: TreadmillCalorieCalculatorMessages = {
  meta: {
    title: "Calcolatore di calorie sul tapis roulant: gratis, con inclinazione",
    description:
      "Calorie sul tapis roulant per velocità, inclinazione e peso. Un adulto di 155 lb brucia ~120 cal in 30 min a 3 mph in piano, ~200 cal al 5% di inclinazione. Calcolatore gratuito basato sull'ACSM.",
    keywords: [
      "calcolatore calorie tapis roulant",
      "calorie bruciate tapis roulant",
      "calorie inclinazione tapis roulant",
      "calorie bruciate sul tapis roulant",
      "calorie camminata su tapis roulant",
      "calorie tapis roulant inclinato",
      "calorie 12-3-30",
      "equazione metabolica ACSM",
      "valori MET tapis roulant",
    ],
    ogTitle: "Calcolatore di calorie sul tapis roulant: gratis, con inclinazione",
    ogDescription:
      "Calcola le calorie sul tapis roulant da velocità, inclinazione, peso e tempo. Calcolatore gratuito con le equazioni metaboliche ACSM.",
    ogImageAlt: "Calcolatore di calorie sul tapis roulant",
  },
  hero: {
    title: "Calcolatore di calorie sul tapis roulant",
    subtitle:
      "Calcola le calorie bruciate sul tapis roulant da velocità, inclinazione, peso e tempo. Le equazioni metaboliche ACSM tengono conto dell'inclinazione invece di ignorarla.",
  },
  calculator: {
    session: "La tua sessione sul tapis roulant",
    weight: "Peso",
    speed: "Velocità",
    incline: "Inclinazione: {percent}%",
    duration: "Durata",
    minutes: "minuti",
    caloriesBurned: "Calorie bruciate",
    kcalValue: "{value} kcal",
    inclineAdds:
      "L'inclinazione del {grade}% aggiunge {extra} kcal rispetto alla stessa sessione in piano ({flat} kcal).",
    met: "MET",
    distance: "Distanza",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "Passi stimati",
    fatBurned: "Grasso bruciato",
    grams: "{value} g",
    equation: "Equazione metabolica ACSM della {gait} ({vo2} ml/kg/min di VO₂).",
    gaitWalking: "camminata",
    gaitRunning: "corsa",
    tableTitle: "Calorie per inclinazione",
    tableSubtitle: "Stesso peso, stessa velocità e stessa durata. Cambia solo la pendenza.",
    colIncline: "Inclinazione",
    colMet: "MET",
    colCalories: "Calorie",
    colVsFlat: "vs piano",
    vsFlat: "+{percent}%",
  },
  resultCta: {
    headline: "Tieni traccia delle calorie che bruci davvero",
    description:
      "Steps conta ogni passo in background e lo trasforma nelle calorie realmente bruciate ogni giorno, senza inserimento manuale.",
  },
  info: {
    title: "Come calcoliamo le calorie sul tapis roulant",
    intro:
      "Un solo valore MET non può descrivere il lavoro sul tapis roulant, perché la pendenza cambia il costo energetico a ogni velocità. Usiamo le equazioni metaboliche ACSM, che stimano il consumo di ossigeno da velocità e pendenza separatamente e poi lo convertono in calorie.",
    formulaTitle: "Le formule",
    formulas: [
      { strong: "VO₂ camminata", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ corsa", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S è la velocità in metri al minuto, G la pendenza come frazione (5% = 0,05). La VO₂ è in ml/kg/min.",
      },
      { strong: "MET", rest: "= VO₂ ÷ 3,5, e kcal/min = MET × 3,5 × peso(kg) ÷ 200" },
      {
        strong: "Esempio:",
        rest: "70 kg a 5 km/h e 5% di pendenza danno VO₂ 19,3, circa 5,5 MET, all'incirca 405 kcal all'ora.",
      },
    ],
    note: "L'equazione della camminata vale sotto i 6,5 km/h e quella della corsa da quella velocità in su, dove la maggior parte delle persone passa da una camminata veloce a un jogging. Le stime assumono che tu non tenga i corrimano.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Quante calorie bruciano 30 minuti sul tapis roulant?",
      answer:
        "Un adulto di 70 kg (155 lb) che cammina 30 minuti a 5 km/h (3,1 mph) su nastro piano brucia circa 125 calorie. Porta l'inclinazione al 5% e la stessa sessione brucia circa 205 calorie. Al 10% si avvicina a 285. L'inclinazione conta più di qualsiasi altra impostazione che puoi cambiare.",
    },
    {
      question: "L'inclinazione brucia davvero più calorie?",
      answer:
        "Sì, in modo netto. Ogni 1% di pendenza aggiunge lavoro verticale al movimento orizzontale. Alle velocità di camminata un'inclinazione del 5% alza il costo energetico di circa il 60% rispetto al piano, e il 10% può più che raddoppiarlo, a parità di velocità e durata.",
    },
    {
      question: "Quante calorie brucia l'allenamento 12-3-30?",
      answer:
        "12-3-30 significa 12% di inclinazione, 3 mph, 30 minuti. Per un adulto di 70 kg sono circa 300 calorie, contro circa 120 calorie per gli stessi 30 minuti a 3 mph in piano. L'inclinazione fa la maggior parte del lavoro: circa il 60% del consumo totale.",
    },
    {
      question: "Il conteggio calorie del tapis roulant è accurato?",
      answer:
        "Di solito no. La maggior parte delle macchine assume un peso predefinito e ignora il peso che inserisci per il display, il che di solito sovrastima il consumo del 15–25%. Un calcolo basato sul tuo peso reale, sulla velocità e sulla pendenza è più affidabile.",
    },
    {
      question: "Bruci più calorie camminando in salita o correndo in piano?",
      answer:
        "Possono equivalersi, ma serve una pendenza ripida. Camminare a 5 km/h al 12% è circa 8,5 MET, in pratica come un jogging a 8 km/h in piano (8,6 MET). A un 10% più dolce la camminata in salita è 7,7 MET, quindi un po' meno. Il vantaggio della camminata in salita è un costo energetico paragonabile con un impatto sulle articolazioni molto più basso.",
    },
    {
      question: "Devi tenere i corrimano?",
      answer:
        "No, se l'obiettivo è bruciare calorie. Tenere i corrimano trasferisce parte del peso del corpo sulle braccia e può tagliare il dispendio reale del 20–25%, soprattutto sulle pendenze ripide, mentre la console continua a mostrare la cifra senza appoggio.",
    },
  ],
  cta: {
    title: "Tieni traccia degli allenamenti sul tapis roulant",
    description:
      "Scarica l'app Steps per registrare automaticamente le tue camminate, le calorie bruciate e i progressi nel tempo.",
  },
  sticky: "Conta i tuoi passi con Steps",
};

export default it;

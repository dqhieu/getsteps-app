import type { DistanceEquivalentCalculatorMessages } from "./en";

const it: DistanceEquivalentCalculatorMessages = {
  meta: {
    title: "Convertitore di distanza – km, miglia, metri, passi",
    description:
      "Converti una distanza di corsa tra chilometri, miglia, metri e iarde. Vedi i passi equivalenti, il tempo stimato e le calorie per camminata, jogging o corsa.",
    keywords: [
      "convertitore di distanza",
      "km in miglia",
      "quanti passi in un miglio",
      "equivalenza distanze",
      "metri in miglia",
      "calcolatore distanza corsa",
      "km in miglia running",
    ],
    ogTitle: "Convertitore di distanza – km, miglia, metri, passi",
    ogDescription:
      "Converti una distanza di corsa tra chilometri, miglia, metri e iarde. Vedi i passi equivalenti, il tempo stimato e le calorie per camminata, jogging o corsa.",
    ogImageAlt: "Convertitore di distanza",
  },
  hero: {
    title: "Convertitore di equivalenze di distanza",
    subtitle:
      "Converti qualsiasi distanza tra km, miglia, metri e iarde — e vedi passi, tempo e calorie equivalenti.",
  },
  intro:
    "Inserisci una distanza in chilometri, miglia, metri o iarde e vedi subito tutte le equivalenze. Con passi stimati, tempo per coprirla camminando o correndo e calorie approssimative.",
  calculator: {
    enterDistance: "Inserisci la distanza",
    placeholder: "5",
    units: {
      km: "km",
      miles: "miglia",
      meters: "metri",
      yards: "iarde",
    },
    quick: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Mezza maratona",
      marathon: "Maratona",
    },
    equivalents: "Equivalenze",
    kilometers: "Chilometri",
    miles: "Miglia",
    meters: "Metri",
    yards: "Iarde",
    feet: "Piedi",
    approxSteps: "Passi circa",
    context: "In corsa",
    activity: "Attività",
    speed: "Velocità",
    time: "Tempo",
    calories: "Calorie",
    activities: {
      walking: "Camminata",
      jogging: "Jogging",
      running: "Corsa",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "Calorie stimate per una persona di 70 kg",
  },
  faqTitle: "Domande sulle conversioni di distanza",
  faq: [
    {
      question: "Quanti km è un miglio?",
      answer:
        "1 miglio = 1,60934 km. Al contrario, 1 km = 0,62137 miglia. Una corsa da 5 miglia è circa 8,05 km e una 10 km è circa 6,21 miglia.",
    },
    {
      question: "Quanti passi è 1 miglio?",
      answer:
        "Circa 2.000–2.500 passi, in base ad altezza e lunghezza del passo. La media è intorno a 2.112 passi per miglio (1.312 passi per km). Chi è più alto, con un passo più lungo, ne fa di meno.",
    },
    {
      question: "Quanti km è una maratona?",
      answer:
        "Una maratona è esattamente 42,195 km (26,219 miglia). Una mezza maratona è 21,0975 km (13,109 miglia). Queste distanze sono fissate da World Athletics.",
    },
    {
      question: "Quanti passi è una 5 km?",
      answer:
        "Circa 6.250–7.500 passi per la maggior parte delle persone. Con una falcata media di 1.312 passi/km, una 5 km vale circa 6.560 passi. Cambia con altezza, andatura e terreno.",
    },
    {
      question: "Quanto ci vuole a camminare 1 miglio?",
      answer:
        "A un passo medio di 5 km/h, circa 12 minuti per miglio. A una camminata svelta di 6 km/h, circa 10 minuti. Chi cammina bene può scendere sotto i 9 minuti.",
    },
  ],
  cta: {
    title: "Vedi esattamente quanta strada hai fatto oggi nell'app Steps.",
    description: "Ogni passo, ogni chilometro e ogni caloria bruciata — in automatico.",
  },
  howTo: {
    name: "Come convertire le unità di distanza",
    description:
      "Inserisci una distanza in qualsiasi unità (km, miglia, metri, iarde, passi) per avere tutte le equivalenze, più tempo di cammino e calorie.",
    steps: [
      {
        name: "Scegli l'unità di partenza",
        text: "Chilometri, miglia, metri, iarde, piedi o passi — qualsiasi unità va bene come input.",
      },
      {
        name: "Inserisci la distanza",
        text: "Scrivi la distanza.",
      },
      {
        name: "Leggi tutte le equivalenze",
        text: "Il calcolatore restituisce ogni unità, più tempo di cammino e calorie stimati per una persona di peso e passo medi.",
      },
    ],
  },
};

export default it;

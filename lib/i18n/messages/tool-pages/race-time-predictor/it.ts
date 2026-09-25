import type { RaceTimePredictorMessages } from "./en";

const it: RaceTimePredictorMessages = {
  meta: {
    title: "Previsore del tempo di gara: 5 km, 10 km, mezza e maratona",
    description:
      "Previsore gratuito: inserisci il passo per ottenere il tempo di arrivo, oppure fissa un obiettivo per trovare il passo che ti serve. Risultati immediati su 5 km, 10 km, mezza maratona e maratona.",
    keywords: [
      "previsore tempo di gara",
      "calcolo tempo di arrivo",
      "che passo per una mezza maratona sotto le 2 ore",
      "calcolatore tempo 5 km",
      "calcolatore passo maratona",
      "calcolatore obiettivo di corsa",
    ],
    ogTitle: "Previsore del tempo di gara: 5 km, 10 km, mezza e maratona",
    ogDescription:
      "Previsore gratuito: inserisci il passo per ottenere il tempo di arrivo, oppure fissa un obiettivo per trovare il passo che ti serve. Risultati immediati su 5 km, 10 km, mezza maratona e maratona.",
    ogImageAlt: "Previsore del tempo di gara",
  },
  hero: {
    title: "Previsore del tempo di gara",
    subtitle:
      "Calcola il tempo di arrivo dal passo che punti, oppure trova il passo esatto per il tempo che vuoi.",
  },
  intro:
    "Inserisci la distanza e il passo obiettivo oppure il tempo di arrivo. Vedi subito il tempo previsto o il passo al chilometro necessario, più i parziali ogni 5 km per gestire la gara.",
  calculator: {
    title: "Impostazioni gara",
    distanceLabel: "Distanza di gara",
    customPlaceholder: "Distanza in km",
    modeLabel: "Cosa vuoi calcolare?",
    finishTimeMode: "Tempo di arrivo",
    requiredPaceMode: "Passo necessario",
    paceLabel: "Il tuo passo (min/km, es. 5:30)",
    goalLabel: "Tempo obiettivo (H:MM:SS o MM:SS)",
    calculate: "Calcola",
    predictedFinish: "Tempo di arrivo previsto",
    requiredPaceResult: "Passo necessario",
    pacePerKm: "Passo /km",
    pacePerMi: "Passo /mi",
    speedKmh: "Velocità km/h",
    speedMph: "Velocità mph",
    splitsTitle: "Parziali ogni 5 km",
    markerColumn: "Riferimento",
    cumulativeColumn: "Tempo cumulato",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Mezza maratona",
      marathon: "Maratona",
      custom: "Personalizzata",
    },
  },
  faqTitle: "FAQ sul passo di gara",
  faq: [
    {
      question: "Che passo serve per una mezza maratona sotto le 2 ore?",
      answer:
        "Devi tenere 5:41/km (9:09/mile), circa 10,6 km/h. Usa il calcolatore sopra, scegli «Passo necessario», seleziona Mezza maratona e inserisci 2:00:00 come tempo obiettivo.",
    },
    {
      question: "Che passo serve per un 5 km in 25 minuti?",
      answer:
        "Un 5 km in 25 minuti richiede un passo di 5:00/km (8:03/mile). È un obiettivo intermedio solido: la maggior parte dei principianti parte intorno a 6:30–7:00/km e scende da lì.",
    },
    {
      question: "Come uso i parziali in gara?",
      answer:
        "Corri parziali regolari (stesso passo ogni 5 km) per una prestazione prevedibile. I parziali negativi — seconda metà più veloce della prima — sono l'ideale e ciò che cercano gli atleti d'élite. Evita di partire troppo forte nel primo chilometro.",
    },
    {
      question: "Qual è un buon tempo sui 10 km?",
      answer:
        "Principiante: 60–70 min; intermedio: 50–60 min; avanzato: 40–50 min; élite: sotto i 35 min. Il record del mondo è sotto i 27 minuti. La maggior parte dei runner amatoriali chiude tra 50 e 65 minuti.",
    },
    {
      question: "Come gestisco il passo in mezza maratona?",
      answer:
        "Parti al passo obiettivo per i primi 10 km, poi spingi gli ultimi 11 km se ti senti forte. Evita di correre più veloce del passo obiettivo all'inizio: la seconda metà è sempre più dura della prima, qualunque sia il passo.",
    },
  ],
  cta: {
    title: "Segui i passi di allenamento ogni giorno nell'app Steps.",
    description: "Registra ogni corsa, segui i parziali e raggiungi gli obiettivi di gara con l'app Steps.",
  },
  howTo: {
    name: "Come prevedere un tempo di arrivo",
    description: "Inserisci la distanza e un passo oppure un tempo obiettivo per ottenere il valore mancante.",
    steps: [
      {
        name: "Inserisci la distanza di gara",
        text: "Scegli una gara comune (5 km, 10 km, mezza maratona, maratona) o una distanza personalizzata.",
      },
      {
        name: "Inserisci passo o tempo obiettivo",
        text: "Basta uno dei due: il calcolatore completa l'altro.",
      },
      {
        name: "Leggi il tempo previsto o il passo necessario",
        text: "Il risultato mostra il tempo di arrivo previsto più i parziali per le distanze di gara più comuni.",
      },
    ],
  },
};

export default it;

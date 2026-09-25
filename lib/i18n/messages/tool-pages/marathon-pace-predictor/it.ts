import type { MarathonPacePredictorMessages } from "./en";

const it: MarathonPacePredictorMessages = {
  meta: {
    title: "Previsore di maratona: stima il tempo da qualsiasi risultato",
    description:
      "Hai corso un 5 km o un 10 km? Prevedi subito i tempi di maratona e mezza maratona con la formula di Riegel. Calcolatore gratuito con tabelle di passo e consigli.",
    keywords: [
      "previsore di maratona",
      "previsore tempo di gara",
      "calcolo tempo di maratona",
      "previsore mezza maratona",
      "calcolatore formula di Riegel",
      "prevedere il tempo di maratona",
      "convertire un 5 km in tempo di maratona",
    ],
    ogTitle: "Previsore di maratona: stima il tempo da qualsiasi risultato",
    ogDescription:
      "Hai corso un 5 km o un 10 km? Prevedi subito i tempi di maratona e mezza maratona con la formula di Riegel.",
    ogImageAlt: "Previsore di maratona",
  },
  hero: {
    title: "Previsore di maratona",
    subtitle: "Inserisci un risultato recente per prevedere i tempi su tutte le distanze standard.",
  },
  intro:
    "Inserisci un tempo e una distanza recenti per prevedere subito i tempi su 5 km, 10 km, mezza maratona e maratona con la formula di Riegel, il riferimento per la previsione dei tempi di gara.",
  calculator: {
    distanceLabel: "La tua distanza di gara",
    customDistanceLabel: "Distanza (km)",
    finishTimeLabel: "Il tuo tempo di arrivo",
    hour: "h",
    minute: "min",
    second: "s",
    invalidDistance: "Inserisci una distanza valida.",
    invalidTime: "Inserisci un tempo valido.",
    predict: "Prevedi i tempi",
    resultsTitle: "Tempi di arrivo previsti",
    distanceColumn: "Distanza",
    timeColumn: "Tempo",
    paceKmColumn: "Passo (km)",
    paceMileColumn: "Passo (mi)",
    speedColumn: "Velocità",
    you: "tu",
    footnote:
      "Le previsioni usano la formula di Riegel (fattore di fatica 1,06). Sono più accurate per gare recenti a sforzo simile.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Mezza maratona",
      marathon: "Maratona",
      custom: "Personalizzata (km)",
    },
  },
  info: {
    title: "Sulla previsione dei tempi di gara",
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Quanto è precisa la formula di Riegel?",
      answer:
        "La formula di Riegel è precisa entro ±5–10 % per runner ben allenati che prevedono tra distanze simili. La precisione cala con grandi salti di distanza (per es. da 5 km a maratona) o se la gara inserita non è stata corsa al massimo.",
    },
    {
      question: "Cos'è la formula di Riegel?",
      answer:
        "T2 = T1 × (D2/D1)^1,06, dove T1 è il tempo noto, D1 la distanza nota, D2 la distanza obiettivo e T2 il tempo previsto. L'esponente 1,06 tiene conto della fatica che cresce sulle distanze lunghe.",
    },
    {
      question: "Posso prevedere una maratona da un 5 km?",
      answer:
        "Sì, ma la previsione sarà meno precisa. La formula funziona meglio se la gara di partenza è vicina alla distanza obiettivo. Per la maratona, un 10 km o una mezza maratona recenti danno la stima più affidabile.",
    },
    {
      question: "Qual è un buon tempo di maratona?",
      answer:
        "Principiante: 4:30–5:30 | intermedio: 3:30–4:30 | avanzato: sotto 3:30 | élite: sotto 2:30. Il tempo medio di maratona è circa 4:30 per gli uomini e 4:55 per le donne.",
    },
    {
      question: "Come lo uso per gestire il passo in gara?",
      answer:
        "Usa la colonna del passo della distanza obiettivo per la strategia al chilometro. Se il passo di maratona previsto è 5:30/km, punta un po' più lento nella prima metà (5:35/km) e un parziale negativo nella seconda.",
    },
  ],
  cta: {
    title: "Allenati meglio con Steps: Workout & Pedometer",
    description:
      "Allenati meglio seguendo passi e attività quotidiani nell'app Steps: Workout & Pedometer.",
  },
  howTo: {
    name: "Come prevedere il tuo tempo di maratona",
    description:
      "Inserisci una distanza e un tempo di gara recenti per prevedere il tempo in maratona (e su 5 km, 10 km, mezza).",
    steps: [
      {
        name: "Inserisci una distanza e un tempo noti",
        text: "Usa uno sforzo recente e duro — 5 km, 10 km, mezza maratona o qualsiasi distanza corsa di recente.",
      },
      {
        name: "Leggi i tempi previsti",
        text: "Con la formula di Riegel, il calcolatore prevede i tempi su 5 km, 10 km, mezza maratona e maratona.",
      },
    ],
  },
};

export default it;

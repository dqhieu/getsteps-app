import type { StepsPerMileCalculatorMessages } from "./en";

const it: StepsPerMileCalculatorMessages = {
  meta: {
    title: "Quanti passi ci sono in un miglio? Calcolatore gratuito",
    description:
      "Quanti passi ci sono in un miglio? Circa 2.000-2.500, in base ad altezza e ritmo. Passi personalizzati per miglio e per km, con tabella camminata e corsa.",
    keywords: [
      "passi per miglio",
      "passi per km",
      "quanti passi in un miglio",
      "passi in un miglio",
      "passi in un chilometro",
      "calcolatore lunghezza del passo",
      "passi di camminata per miglio",
      "passi in miglia",
      "miglia in passi",
    ],
    ogTitle: "Quanti passi ci sono in un miglio? Calcolatore gratuito",
    ogDescription:
      "Quanti passi ci sono in un miglio? 2.000-2.500 in base alla tua altezza. Passi personalizzati per miglio e per km.",
    ogImageAlt: "Calcolatore passi per miglio",
  },
  hero: {
    title: "Quanti passi ci sono in un miglio?",
    subtitle:
      "Quanti passi ci sono in un miglio? Circa 2.000–2.500 per la maggior parte degli adulti. Inserisci la tua altezza per un conteggio personalizzato per miglio e per km.",
  },
  resultCta: {
    headline: "Scopri i tuoi veri passi per miglio",
    description:
      "Steps conta i tuoi passi e la distanza in automatico, così vedi il tuo ritmo e la tua falcata reali, non una stima.",
  },
  stickyCta: "Tieni traccia dei passi con Steps",
  calculator: {
    yourInformation: "I tuoi dati",
    height: "Altezza",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    stepLength: "La tua lunghezza del passo stimata: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} pollici)",
    stepsPerMile: "Passi per miglio",
    stepsPerKm: "Passi per chilometro",
    stepsUnit: "passi",
    referenceTitle: "Tabella delle distanze",
    referenceSubtitle: "Passi necessari per le distanze più comuni, in base alla tua lunghezza del passo",
    colDistance: "Distanza",
    colSteps: "Passi",
    distances: ["1 km", "1 miglio", "5 km", "5 miglia", "10 km", "Mezza maratona", "Maratona"],
  },
  info: {
    title: "Come calcoliamo i passi per miglio",
    intro:
      "Il numero di passi per miglio dipende dalla lunghezza del passo, determinata soprattutto da altezza e sesso. Le persone più alte hanno in genere una falcata più lunga e fanno meno passi per la stessa distanza.",
    formulaTitle: "La formula",
    stepLengthLabel: "Lunghezza del passo:",
    stepLengthFormula: "Altezza (cm) × 0,415 (uomo) o 0,413 (donna)",
    perKmLabel: "Passi per km:",
    perKmFormula: "100.000 ÷ lunghezza del passo (cm)",
    perMileLabel: "Passi per miglio:",
    perMileFormula: "Passi per km × 1,609",
    heightTitle: "Passi medi in base all'altezza",
    heights: [
      { height: "5'0\" (152 cm):", steps: "~2.500 passi/miglio" },
      { height: "5'6\" (168 cm):", steps: "~2.300 passi/miglio" },
      { height: "6'0\" (183 cm):", steps: "~2.100 passi/miglio" },
      { height: "6'6\" (198 cm):", steps: "~1.950 passi/miglio" },
    ],
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Quanti passi ci sono in un miglio?",
      answer:
        "In media un miglio corrisponde a circa 2.000-2.500 passi. Il numero esatto dipende dalla tua altezza e dalla falcata. Le persone più basse fanno più passi, quelle più alte ne fanno meno.",
    },
    {
      question: "Quanti passi ci sono in un chilometro?",
      answer:
        "In media un chilometro corrisponde a circa 1.250-1.550 passi. È circa il 62% dei passi di un miglio, perché un chilometro equivale a circa 0,62 miglia.",
    },
    {
      question: "La velocità di camminata cambia i passi per miglio?",
      answer:
        "Sì, leggermente. Se cammini più veloce o corri, la falcata si allunga e fai meno passi per miglio. Per la maggior parte dei ritmi di camminata, però, la differenza resta piccola.",
    },
    {
      question: "Come misuro la mia vera lunghezza del passo?",
      answer:
        "Cammina una distanza nota (per esempio 30 metri) al tuo ritmo abituale e conta i passi. Dividi la distanza per il numero di passi per ottenere la lunghezza media. Puoi anche segnare un punto di partenza, fare 10 passi e misurare la distanza percorsa.",
    },
  ],
  cta: {
    title: "Tieni traccia di passi e distanza",
    description:
      "Scarica l'app Steps per registrare automaticamente passi e distanza su iPhone e Apple Watch.",
  },
  howTo: {
    name: "Come calcolare i passi per miglio",
    description:
      "Inserisci altezza e ritmo di camminata per stimare quanti passi fai in un miglio (e in un chilometro).",
    steps: [
      {
        name: "Inserisci la tua altezza",
        text: "Le persone più alte coprono più terreno a ogni passo, quindi l'altezza corregge il risultato.",
      },
      {
        name: "Scegli un ritmo",
        text: "La camminata veloce e la corsa hanno una falcata più lunga della camminata lenta. Scegli il ritmo che ti interessa.",
      },
      {
        name: "Leggi la stima dei passi per miglio",
        text: "Il risultato mostra i passi per miglio e per chilometro in base alla tua falcata personale a quel ritmo.",
      },
    ],
  },
};

export default it;

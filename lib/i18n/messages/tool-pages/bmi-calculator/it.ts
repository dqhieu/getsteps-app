import type { BmiCalculatorMessages } from "./en";

const it: BmiCalculatorMessages = {
  meta: {
    title: "Calcolatore BMI – Calcola il tuo indice di massa corporea",
    description:
      "Calcola il tuo indice di massa corporea (BMI) e scopri se sei in un intervallo di peso sano. Ricevi consigli sulla salute e obiettivi di passi personalizzati.",
    keywords: [
      "calcolatore BMI",
      "indice di massa corporea",
      "calcolare BMI",
      "calcolatore peso forma",
      "tabella BMI",
      "peso per altezza",
      "categorie BMI",
      "BMI normale",
    ],
    ogTitle: "Calcolatore BMI",
    ogDescription:
      "Calcola il tuo indice di massa corporea (BMI) e scopri se sei in un intervallo di peso sano.",
  },
  hero: {
    title: "Calcolatore BMI",
    subtitle:
      "Calcola il tuo indice di massa corporea per capire la tua categoria di peso e ricevere consigli sulla salute personalizzati.",
  },
  calculator: {
    measurements: "Le tue misure",
    weight: "Peso",
    height: "Altezza",
    yourBmi: "Il tuo BMI",
    healthyRange: "Intervallo di peso sano",
    recommendedSteps: "Passi giornalieri consigliati",
    aboveRange: "Sei {amount} sopra l'intervallo di peso sano per la tua altezza.",
    belowRange: "Sei {amount} sotto l'intervallo di peso sano per la tua altezza.",
    categoriesTitle: "Categorie di BMI",
    categoriesSubtitle: "Classificazione del BMI per adulti dell'Organizzazione Mondiale della Sanità",
    categoryColumn: "Categoria",
    rangeColumn: "Intervallo BMI",
    categories: {
      underweight: "Sottopeso",
      normal: "Normopeso",
      overweight: "Sovrappeso",
      "obese-1": "Obesità di classe I",
      "obese-2": "Obesità di classe II",
      "obese-3": "Obesità di classe III",
    },
  },
  info: {
    title: "Capire il BMI",
    intro:
      "L'indice di massa corporea (BMI) è un semplice calcolo basato su altezza e peso che stima il grasso corporeo e valuta se il tuo peso è nella norma. È ampiamente usato come strumento di screening delle categorie di peso.",
    formulaTitle: "La formula",
    formula: "BMI = peso (kg) ÷ altezza (m)²",
    exampleLabel: "Esempio:",
    example: "Una persona di 70 kg alta 1,75 m ha BMI = 70 ÷ (1,75 × 1,75) = 22,9",
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Qual è un BMI sano?",
      answer:
        "Un BMI tra 18,5 e 24,9 è considerato sano per la maggior parte degli adulti. Il BMI però non tiene conto di massa muscolare, densità ossea o distribuzione del grasso, quindi è solo uno dei fattori per valutare la salute complessiva.",
    },
    {
      question: "Il BMI è accurato per tutti?",
      answer:
        "Il BMI può essere poco preciso per atleti molto muscolosi, anziani o persone con determinate corporature. È un utile strumento di screening, da considerare insieme ad altri indicatori di salute.",
    },
    {
      question: "Come posso migliorare il mio BMI?",
      answer:
        "Se il tuo BMI è fuori dall'intervallo sano, punta su cambiamenti sostenibili: attività fisica regolare (come camminare ogni giorno), alimentazione equilibrata e sonno adeguato. Rivolgiti a un professionista sanitario per consigli personalizzati.",
    },
    {
      question: "Quanti passi dovrei fare in base al mio BMI?",
      answer:
        "Per mantenere un BMI sano, punta a 10.000 passi al giorno. Se vuoi perdere peso, considera 12.000 passi o più. Parti dal tuo livello attuale e aumenta gradualmente di 1.000 passi a settimana.",
    },
    {
      question: "Il BMI è diverso per i bambini?",
      answer:
        "Sì, il BMI di bambini e ragazzi si calcola in modo diverso e si confronta con percentili specifici per età e sesso. Questo calcolatore è pensato per adulti dai 18 anni in su. Per i bambini, rivolgiti a un pediatra.",
    },
  ],
  cta: {
    title: "Monitora il tuo percorso di salute",
    description:
      "Scarica l'app Steps per monitorare la tua attività quotidiana e raggiungere un peso più sano.",
  },
  howTo: {
    name: "Come calcolare il tuo BMI",
    description:
      "L'indice di massa corporea (BMI) stima la categoria di composizione corporea a partire da altezza e peso, secondo le categorie per adulti dei CDC.",
    steps: [
      {
        name: "Inserisci la tua altezza",
        text: "Inserisci l'altezza in centimetri o in piedi/pollici.",
      },
      {
        name: "Inserisci il tuo peso",
        text: "Inserisci il peso in chilogrammi o libbre.",
      },
      {
        name: "Leggi il BMI e la categoria",
        text: "Il calcolatore mostra il valore del BMI e la categoria di salute dei CDC (sottopeso, normopeso, sovrappeso, obesità) con una breve descrizione di ciascuna.",
      },
    ],
  },
};

export default it;

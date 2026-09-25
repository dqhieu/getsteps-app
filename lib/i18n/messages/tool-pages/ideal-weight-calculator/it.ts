import type { IdealWeightCalculatorMessages } from "./en";

const it: IdealWeightCalculatorMessages = {
  meta: {
    title: "Calcolatore del peso ideale: 4 formule e intervallo di BMI sano",
    description:
      "Devine, Robinson, Miller e Hamwi affiancate, più l'intervallo di BMI sano. Un uomo di 175 cm sta tra 68,7 e 72 kg. Calcolatore gratuito del peso corporeo ideale.",
    keywords: [
      "calcolatore peso ideale",
      "calcolatore peso corporeo ideale",
      "calcolatore peso sano",
      "quanto dovrei pesare",
      "formula di Devine",
      "formula di Robinson",
      "formula di Hamwi",
      "peso ideale per altezza",
      "intervallo di peso sano",
    ],
    ogTitle: "Calcolatore del peso ideale: 4 formule e intervallo di BMI sano",
    ogDescription:
      "Quattro formule cliniche di peso ideale affiancate, più l'intervallo di BMI sano per la tua altezza.",
  },
  hero: {
    title: "Calcolatore del peso ideale",
    subtitle:
      "Quattro formule cliniche affiancate, con l'intervallo di BMI sano. Vedere quanto divergono è la cosa più utile di questo calcolatore.",
  },
  calculator: {
    details: "I tuoi dati",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    height: "Altezza",
    currentWeight: "Peso attuale",
    optional: "(facoltativo)",
    placeholderKg: "es. 78",
    placeholderLbs: "es. 172",
    calculate: "Calcola il peso ideale",
    results: "I tuoi risultati",
    formulaAverage: "Media delle formule",
    range: "intervallo {min}–{max}",
    healthyBmiRange: "Intervallo di BMI sano",
    to: "fino a {weight}",
    verdictWithin:
      "Il tuo peso è nell'intervallo di BMI sano per la tua altezza. La media delle formule è un punto dentro quella fascia, non un bersaglio da colpire.",
    verdictAbove: "Il tuo peso è di {amount} sopra l'intervallo di BMI sano per la tua altezza.",
    verdictBelow: "Il tuo peso è di {amount} sotto l'intervallo di BMI sano per la tua altezza.",
    fourFormulas: "Le quattro formule",
    disclaimer:
      "Tutte e quattro le formule vedono solo altezza e sesso. Non tengono conto della massa muscolare né della corporatura, quindi un corpo muscoloso risulta alto su ognuna. L'intervallo di BMI sano è la risposta più utile: è una fascia, non un singolo bersaglio.",
    formulas: {
      devine: {
        name: "Devine",
        note: "La formula più citata e ancora lo standard per il dosaggio dei farmaci. Scritta per calcolare le dosi, non gli obiettivi corporei.",
      },
      robinson: {
        name: "Robinson",
        note: "Una revisione di Devine su un campione più ampio. Risulta più bassa di Devine nelle persone alte.",
      },
      miller: {
        name: "Miller",
        note: "La più piatta delle quattro: l'altezza cambia meno il risultato, quindi è la più alta per le persone basse e la più bassa per le persone alte.",
      },
      hamwi: {
        name: "Hamwi",
        note: "La più antica, sviluppata per la cura del diabete. L'aumento per pollice più ripido, quindi la più alta nelle persone alte.",
      },
    },
  },
  resultCta: {
    headline: "Le abitudini spostano il numero. Nient'altro.",
    description:
      "Steps registra la tua attività quotidiana in automatico, così costruisci la costanza che sposta davvero il peso corporeo nei mesi.",
  },
  sticky: "Tieni traccia dei tuoi passi con Steps",
  info: {
    title: "Come calcoliamo il peso ideale",
    intro:
      "Tutte e quattro le formule hanno la stessa forma: un peso base a 5 ft, più una quantità fissa per ogni pollice sopra. Cambiano solo le costanti.",
    formulasTitle: "Le formule",
    formulas: [
      {
        name: "Devine (1974)",
        body: "Uomini: 50 kg + 2,3 kg per pollice oltre 5 ft. Donne: 45,5 kg + 2,3 kg per pollice.",
      },
      {
        name: "Robinson (1983)",
        body: "Uomini: 52 kg + 1,9 kg per pollice. Donne: 49 kg + 1,7 kg per pollice.",
      },
      {
        name: "Miller (1983)",
        body: "Uomini: 56,2 kg + 1,41 kg per pollice. Donne: 53,1 kg + 1,36 kg per pollice.",
      },
      {
        name: "Hamwi (1964)",
        body: "Uomini: 48 kg + 2,7 kg per pollice. Donne: 45,5 kg + 2,2 kg per pollice.",
      },
      {
        name: "Intervallo di BMI sano",
        body: "Peso per un BMI da 18,5 a 24,9 alla tua altezza.",
      },
      {
        name: "Esempio:",
        body: "un uomo di 175 cm ottiene 70,5 (Devine), 68,9 (Robinson), 68,7 (Miller) e 72,0 (Hamwi), in media 70,0 kg. La fascia di BMI sano è da 56,7 a 76,3 kg.",
      },
    ],
    notice:
      "La media delle quattro formule sta vicino al centro di una fascia di BMI larga quasi 20 kg. Quel divario è il riassunto onesto: queste equazioni producono un punto plausibile dentro un intervallo sano molto più ampio, non un bersaglio che hai mancato se non ci sei sopra.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Che cos'è il peso corporeo ideale?",
      answer:
        "È una stima clinica di un peso sano basata su altezza e sesso, e conviene sapere da dove arriva: tutte e quattro le formule comuni sono nate per il dosaggio dei farmaci, non per obiettivi corporei. Devine scrisse la sua nel 1974 per calcolare le dosi di gentamicina. Sono state adottate come bersagli di salute dopo, ed è per questo che si comportano in modo strano in quell'uso.",
    },
    {
      question: "Quale formula del peso ideale devo usare?",
      answer:
        "Nessuna da sola. Divergono di 3–4 kg a un'altezza media e ancora di più agli estremi, e questo dice quanta precisione c'è davvero. La media delle quattro è un punto intermedio ragionevole, ma l'intervallo di BMI sano è più utile perché dà una fascia di circa 20 kg invece di un singolo numero da colpire.",
    },
    {
      question: "Perché le quattro formule danno risposte diverse?",
      answer:
        "Sono state costruite su popolazioni diverse e non concordano su quanto peso aggiungere per ogni pollice di altezza. Hamwi aggiunge 2,7 kg per pollice negli uomini, Miller solo 1,41. A 175 cm lo scarto è piccolo, ma a 195 cm Hamwi restituisce circa 87 kg e Miller circa 78. Più sei alto o basso, più si allontanano.",
    },
    {
      question: "Il peso ideale è accurato per chi è muscoloso?",
      answer:
        "No, ed è il fallimento più chiaro delle formule. Vedono solo altezza e sesso, quindi non distinguono 80 kg di muscolo da 80 kg di grasso. Un atleta allenato risulta in sovrappeso su tutte e quattro e anche sul BMI. Se porti muscolo vero, la percentuale di grasso e il rapporto vita-fianchi dicono molto di più di qualsiasi bersaglio di peso.",
    },
    {
      question: "Qual è un intervallo di BMI sano?",
      answer:
        "Da 18,5 a 24,9. Convertito in peso a 175 cm sono 56,7–76,3 kg, una fascia di quasi 20 kg. Quella larghezza è il punto: il peso sano è un intervallo, non un numero, e dove ti trovi dipende da corporatura, massa muscolare e da ciò che riesci davvero a mantenere.",
    },
    {
      question: "Devo cercare di raggiungere il mio peso ideale?",
      answer:
        "Solo se capita di coincidere con qualcosa di sostenibile per te. Gli esiti di salute seguono i comportamenti più delle cifre sulla bilancia: chi è attivo a un peso più alto in genere sta meglio di chi è sedentario a un peso più basso. Se il tuo peso è già nell'intervallo di BMI sano, inseguire il punto medio di una formula vale poco.",
    },
  ],
  cta: {
    title: "Costruisci l'abitudine che sposta il numero",
    description:
      "Scarica l'app Steps per registrare i passi quotidiani e restare costante nei mesi che cambiano davvero il peso corporeo.",
  },
  howTo: {
    name: "Come calcolare il tuo peso ideale",
    description:
      "Inserisci sesso e altezza per vedere il peso corporeo ideale secondo Devine, Robinson, Miller e Hamwi, più l'intervallo di BMI sano.",
    steps: [
      {
        name: "Seleziona il tuo sesso",
        text: "Ognuna delle quattro formule usa un peso base e un incremento per pollice diversi per uomini e donne.",
      },
      {
        name: "Inserisci la tua altezza",
        text: "Passa da centimetri a piedi/pollici. L'altezza è l'unica variabile che le quattro formule usano davvero.",
      },
      {
        name: "Aggiungi il peso attuale se vuoi un confronto",
        text: "Facoltativo. Mostra quanto disti dalla media delle formule e se rientri nell'intervallo di BMI sano.",
      },
      {
        name: "Leggi l'intervallo, non il numero",
        text: "Il calcolatore restituisce le quattro stime, la loro media e la fascia di peso del BMI sano per la tua altezza, che è la risposta più ampia e utile.",
      },
    ],
  },
};

export default it;

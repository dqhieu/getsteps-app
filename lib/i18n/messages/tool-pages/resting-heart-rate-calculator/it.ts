import type { RestingHeartRateCalculatorMessages } from "./en";

const it: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "Calcolatore frequenza cardiaca a riposo – Forma e zone di Karvonen",
    description:
      "Calcola il tuo livello di forma dalla frequenza cardiaca a riposo e le zone di allenamento di Karvonen personalizzate. Inserisci età e valore misurato per un risultato immediato.",
    keywords: [
      "calcolatore frequenza cardiaca a riposo",
      "frequenza cardiaca a riposo per età",
      "qual è una buona frequenza cardiaca a riposo",
      "calcolatore riserva di frequenza cardiaca",
      "formula di Karvonen",
      "livello di forma frequenza cardiaca a riposo",
    ],
    ogTitle: "Calcolatore frequenza cardiaca a riposo – Forma e zone di Karvonen",
    ogDescription:
      "Calcola il tuo livello di forma dalla frequenza cardiaca a riposo e le zone di allenamento di Karvonen personalizzate. Inserisci età e valore misurato per un risultato immediato.",
    ogImageAlt: "Calcolatore frequenza cardiaca a riposo",
  },
  hero: {
    title: "Calcolatore frequenza cardiaca a riposo",
    subtitle:
      "Controlla il tuo livello di forma cardiovascolare e ottieni zone di allenamento personalizzate in base alla riserva di frequenza cardiaca.",
  },
  intro:
    "Inserisci età, sesso e frequenza cardiaca a riposo misurata per vedere la tua categoria di forma e calcolare le zone di Karvonen per consumo dei grassi, resistenza aerobica e prestazione di picco.",
  calculator: {
    yourDetails: "I tuoi dati",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    years: { one: "anno", other: "anni" },
    restingHeartRate: "Frequenza cardiaca a riposo",
    bpm: "bpm",
    rhrHint:
      "Suggerimento: misurala al mattino prima di alzarti. Resta seduto in silenzio per 5 min, poi conta i battiti per 60 sec.",
    calculate: "Calcola",
    fitnessLevel: "Il tuo livello di forma",
    hrMax: "FCmax",
    hrr: "RFC",
    zonesTitle: "Zone di allenamento di Karvonen",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "Atleta",
      excellent: "Eccellente",
      good: "Buono",
      above_average: "Sopra la media",
      average: "Nella media",
      below_average: "Sotto la media",
      poor: "Scarso",
    },
    zones: {
      activeRecovery: { name: "Recupero attivo", purpose: "Recupero" },
      fatBurn: { name: "Consumo dei grassi", purpose: "Grassi" },
      aerobicEndurance: { name: "Resistenza aerobica", purpose: "Aerobico" },
      lactateThreshold: { name: "Soglia del lattato", purpose: "Soglia" },
      vo2Max: { name: "VO2 max", purpose: "VO2 max" },
    },
  },
  info: {
    title: "Domande sulla frequenza cardiaca a riposo",
  },
  faq: [
    {
      question: "Qual è una frequenza cardiaca a riposo normale?",
      answer:
        "Per la maggior parte degli adulti, una frequenza cardiaca a riposo normale è tra 60 e 100 battiti al minuto (bpm). Gli atleti allenati hanno spesso una frequenza cardiaca a riposo di 40–60 bpm, perché il cuore è più forte e pompa più sangue a ogni battito. Valori sotto 60 bpm (bradicardia) possono essere normali nelle persone in forma, ma vanno valutati da un medico se compaiono sintomi.",
    },
    {
      question: "Come misuro la mia frequenza cardiaca a riposo?",
      answer:
        "Misura la frequenza cardiaca a riposo al mattino, prima di alzarti. Resta fermo 5 minuti, poi appoggia due dita sul polso (arteria radiale) o sul collo (arteria carotide) e conta i battiti per 60 secondi. Evita di misurare dopo caffè, esercizio o stress. La media di tre mattine consecutive dà la lettura più accurata.",
    },
    {
      question: "La frequenza cardiaca a riposo migliora con la forma?",
      answer:
        "Sì. L'esercizio cardiovascolare regolare rafforza il muscolo cardiaco, che pompa più sangue a ogni battito. Questa maggiore gittata sistolica significa che il cuore deve battere meno volte al minuto per fornire la stessa quantità di sangue. Un allenamento aerobico costante abbassa in genere la frequenza cardiaca a riposo di 5–25 bpm in diversi mesi, a seconda del livello di partenza.",
    },
    {
      question: "Che differenza c'è tra frequenza cardiaca a riposo e massima?",
      answer:
        "La frequenza cardiaca a riposo è il numero di battiti al minuto a riposo completo. La frequenza cardiaca massima (FCmax) è il numero più alto di battiti al minuto che il cuore può raggiungere in uno sforzo massimale, stimata come 220 meno la tua età. La riserva di frequenza cardiaca (RFC) è la differenza tra le due e rappresenta l'intervallo in cui il cuore può lavorare durante l'esercizio. Il metodo di Karvonen usa la RFC per calcolare zone di allenamento personalizzate.",
    },
    {
      question: "Come posso abbassare la frequenza cardiaca a riposo?",
      answer:
        "Il modo più efficace è l'esercizio aerobico regolare: punta a 3–5 sedute a settimana di cardio a intensità moderata e sostenuta, come camminata, corsa leggera, ciclismo o nuoto. Sonno adeguato (7–9 ore), gestione dello stress (meditazione, respirazione profonda), limitare caffeina e alcol e mantenere un peso sano contribuiscono a una frequenza cardiaca a riposo più bassa. I miglioramenti si notano di solito in 4–8 settimane di allenamento costante.",
    },
  ],
  cta: {
    title: "Migliora la salute del cuore",
    description: "Registra i passi quotidiani per migliorare nel tempo la salute cardiovascolare.",
  },
  howTo: {
    name: "Come verificare la categoria di forma dalla frequenza cardiaca a riposo",
    description:
      "Inserisci età e frequenza cardiaca a riposo per vedere il livello di forma cardiovascolare e le zone di allenamento di Karvonen.",
    steps: [
      {
        name: "Inserisci età e frequenza cardiaca a riposo",
        text: "Misura la frequenza cardiaca a riposo al mattino, prima della caffeina, ancora disteso a letto.",
      },
      {
        name: "Leggi la tua categoria di forma",
        text: "Il calcolatore ti colloca su una scala di forma, da atleta a scarso, in base a intervalli di frequenza cardiaca a riposo rapportati all'età.",
      },
      {
        name: "Leggi le zone di Karvonen",
        text: "Restituisce anche 5 zone di allenamento cardiaco personalizzate sulla tua frequenza cardiaca a riposo.",
      },
    ],
  },
};

export default it;

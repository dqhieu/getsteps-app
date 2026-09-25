import type { Vo2MaxCalculatorMessages } from "./en";

const it: Vo2MaxCalculatorMessages = {
  meta: {
    title: "Calcolatore VO2 max – Stima il tuo livello aerobico",
    description:
      "Stima il tuo VO2 max con il metodo della frequenza cardiaca o il test di corsa di Cooper da 12 minuti. Scopri il tuo livello aerobico e come migliorarlo.",
    keywords: [
      "calcolatore VO2 max",
      "calcolatore vo2max",
      "calcolatore fitness aerobico",
      "calcolatore test di Cooper",
      "come calcolare il VO2 max",
      "VO2 max per età",
      "test di forma cardiovascolare",
    ],
    ogTitle: "Calcolatore VO2 max – Stima il tuo livello aerobico",
    ogDescription:
      "Stima il tuo VO2 max con il metodo della frequenza cardiaca o il test di corsa di Cooper da 12 minuti. Scopri il tuo livello aerobico e come migliorarlo.",
    ogImageAlt: "Calcolatore VO2 max",
  },
  hero: {
    title: "Calcolatore VO2 max",
    subtitle:
      "Stima il tuo VO2 max — il riferimento della forma aerobica — dalla frequenza cardiaca o da un test di corsa di 12 minuti.",
  },
  intro:
    "Inserisci età, sesso e frequenza cardiaca a riposo (o la distanza della corsa di Cooper da 12 minuti) per stimare il VO2 max e vedere dove ti collochi nella tua fascia d'età.",
  calculator: {
    method: "Metodo",
    heartRateMethod: "Metodo della frequenza cardiaca",
    cooperMethod: "Corsa di Cooper (12 min)",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    years: { one: "anno", other: "anni" },
    restingHeartRate: "Frequenza cardiaca a riposo",
    bpm: "bpm",
    restingHint: "Misurala al mattino, prima di alzarti dal letto.",
    distanceLabel: "Distanza percorsa in 12 minuti",
    km: "km",
    miles: "miglia",
    distanceHint: "Corri su una pista piana per esattamente 12 minuti e annota la distanza.",
    calculate: "Calcola il VO2 max",
    yourEstimate: "Il tuo VO2 max stimato",
    unit: "ml/kg/min",
    improvementTip: "Consiglio per migliorare",
    disclaimer:
      "Il VO2 max è il riferimento della forma aerobica: l'ossigeno massimo che il corpo può usare durante uno sforzo intenso. Più è alto, migliore è la capacità cardiovascolare. Le norme variano con l'età; queste soglie sono semplificate come guida generale.",
    categories: {
      superior: {
        label: "Superiore",
        description:
          "Capacità aerobica eccezionale. Hai una forma cardiovascolare notevole, tipica degli atleti di endurance agonisti.",
        tip: "Mantienila con un allenamento periodizzato: alterna lunghi, sedute di ritmo e settimane di recupero per evitare il sovrallenamento.",
      },
      excellent: {
        label: "Eccellente",
        description:
          "Forma aerobica ben sopra la media. Cuore e polmoni portano ossigeno in modo efficiente ai muscoli al lavoro.",
        tip: "Aggiungi una seduta di intervalli VO2 max a settimana (per esempio 5×3 min a sforzo alto) per entrare nella fascia Superiore.",
      },
      good: {
        label: "Buono",
        description:
          "Forma sopra la media. Hai una base aerobica solida per l'attività quotidiana e lo sport amatoriale.",
        tip: "Punta a 3-4 sedute cardio a settimana. Includi una corsa di ritmo e una corsa facile più lunga per costruire la base.",
      },
      fair: {
        label: "Discreto",
        description:
          "Capacità aerobica nella media. Un allenamento regolare può migliorare in modo concreto il VO2 max in 8-12 settimane.",
        tip: "Inizia con corse di 30 minuti in zona 2, 3 volte a settimana. Aggiungi una seduta HIIT a settimana dopo 4 settimane di base.",
      },
      poor: {
        label: "Scarso",
        description:
          "Capacità aerobica sotto la media. La buona notizia: questo livello risponde in fretta a un allenamento costante.",
        tip: "Inizia con camminate veloci di 20-30 min, 5 volte a settimana. Passa agli intervalli corsa-camminata dopo 2-3 settimane.",
      },
    },
  },
  info: {
    title: "VO2 max — domande frequenti",
  },
  faq: [
    {
      question: "Che cos'è il VO2 max?",
      answer:
        "Il VO2 max è la velocità massima con cui il corpo può consumare ossigeno durante uno sforzo intenso, misurata in millilitri di ossigeno per chilogrammo di peso corporeo al minuto (ml/kg/min). È considerato il riferimento della forma aerobica e della salute cardiovascolare. Un VO2 max più alto significa che cuore, polmoni e muscoli lavorano insieme in modo più efficiente per portare e usare l'ossigeno durante uno sforzo prolungato.",
    },
    {
      question: "Qual è un buon VO2 max?",
      answer:
        "Per gli uomini, un VO2 max di 40–50 ml/kg/min è considerato buono e sopra 55 eccellente. Per le donne, 35–45 è buono e sopra 50 eccellente. Gli atleti di endurance di alto livello, come maratoneti e ciclisti, raggiungono spesso 60–85 ml/kg/min — valori che riflettono anni di adattamento cardiovascolare. Un adulto non allenato si colloca in media intorno ai 30 per le donne e nella parte bassa dei 40 per gli uomini.",
    },
    {
      question: "Come posso migliorare il mio VO2 max?",
      answer:
        "I metodi più efficaci sono l'interval training ad alta intensità (HIIT), le corse di ritmo e le uscite lunghe e lente (LSD). Le sedute HIIT — per esempio 4–6 intervalli di 3–5 minuti vicini allo sforzo massimo — sollecitano direttamente il sistema aerobico e producono i guadagni di VO2 max più grandi. Unite a due o tre corse facili in zona 2 a settimana, miglioramenti del 10–20% sono tipici in 8–12 settimane per principianti e atleti moderatamente allenati.",
    },
    {
      question: "Che cos'è il test di corsa di Cooper da 12 minuti?",
      answer:
        "Il test di Cooper, ideato dal dott. Kenneth Cooper nel 1968 per la valutazione fisica dell'esercito statunitense, consiste nel correre il più lontano possibile in esattamente 12 minuti su una superficie piana. La distanza percorsa stima il VO2 max con la formula: VO2max = (distanceMeters − 504,9) / 44,73. Resta uno dei test da campo più usati nelle scienze dello sport perché non richiede attrezzatura da laboratorio: bastano una pista misurata e un cronometro.",
    },
    {
      question: "Il VO2 max cala con l'età?",
      answer:
        "Sì. Dopo circa 25 anni, il VO2 max cala in media di circa l'1% all'anno nelle persone sedentarie. Un allenamento aerobico regolare rallenta molto questo calo: persone attive tra i 60 e i 70 anni mantengono spesso valori di VO2 max paragonabili a quelli di sedentari di 20 anni più giovani. La chiave è l'esercizio cardiovascolare costante: anche quantità moderate di corsa, ciclismo o nuoto preservano la capacità aerobica fino all'età avanzata.",
    },
  ],
  cta: {
    title: "Segui i progressi della tua forma aerobica",
    description: "Registra l'attività quotidiana e migliora la forma aerobica con l'app Steps.",
  },
  howTo: {
    name: "Come stimare il tuo VO2 max",
    description:
      "Stima il VO2 max dalla frequenza cardiaca a riposo e massima, oppure con il test di corsa di Cooper da 12 minuti.",
    steps: [
      {
        name: "Scegli il metodo",
        text: "Il metodo della frequenza cardiaca (età + frequenza cardiaca a riposo) oppure il test di Cooper (distanza percorsa in 12 minuti).",
      },
      {
        name: "Inserisci i valori",
        text: "Indica età e frequenza cardiaca a riposo, oppure la distanza percorsa in 12 minuti di corsa al massimo.",
      },
      {
        name: "Leggi la stima del VO2 max",
        text: "Il calcolatore restituisce un VO2 max stimato in ml/kg/min più il percentile di forma per età e sesso.",
      },
    ],
  },
};

export default it;

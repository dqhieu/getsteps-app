import type { WaistToHipRatioCalculatorMessages } from "./en";

const it: WaistToHipRatioCalculatorMessages = {
  meta: {
    title: "Calcolatore del rapporto vita-fianchi: fasce di rischio OMS",
    description:
      "Calcola il tuo rapporto vita-fianchi rispetto alle soglie OMS. Il rischio sale sopra 0,90 negli uomini e 0,85 nelle donne. Calcolatore gratuito con controllo della circonferenza vita.",
    keywords: [
      "calcolatore rapporto vita fianchi",
      "calcolatore WHR",
      "rapporto vita fianchi",
      "calcolatore forma del corpo",
      "calcolatore grasso viscerale",
      "rischio circonferenza vita",
      "forma a mela o a pera",
      "rapporto vita fianchi OMS",
    ],
    ogTitle: "Calcolatore del rapporto vita-fianchi: fasce di rischio OMS",
    ogDescription:
      "Calcola il tuo rapporto vita-fianchi e vedi dove cade rispetto alle soglie di rischio cardiovascolare dell'OMS.",
  },
  hero: {
    title: "Calcolatore del rapporto vita-fianchi",
    subtitle:
      "Due misure con il metro predicono il rischio cardiovascolare meglio del BMI, perché mostrano dove il corpo accumula il grasso, non solo quanto ce n'è.",
  },
  calculator: {
    measurements: "Le tue misure",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    genderHint: "L'OMS usa soglie di rischio diverse per uomini e donne.",
    waistHip: "Vita e fianchi",
    waist: "vita",
    hip: "fianchi",
    howToMeasure: "Come misurare",
    waistLabel: "Vita:",
    waistMeasure:
      "il punto più stretto tra l'ultima costola e la parte alta dell'osso dell'anca, alla fine di un'espirazione normale.",
    hipLabel: "Fianchi:",
    hipMeasure: "il punto più largo intorno ai glutei.",
    tapeMeasure:
      "Tieni il metro in piano e aderente senza comprimere la pelle. Misura sulla pelle nuda o su un indumento sottile.",
    calculate: "Calcola il mio rapporto",
    results: "I tuoi risultati",
    ratioLabel: "Rapporto vita-fianchi",
    waistCheck: "Controllo della circonferenza vita",
    targetWaist:
      "Con la misura attuale dei fianchi, una vita di {waist} o meno ti metterebbe nella fascia a basso rischio.",
    bandsTitle: "Fasce di rischio OMS per {group}",
    men: "uomini",
    women: "donne",
    groupMen: "gli uomini",
    groupWomen: "le donne",
    rangeAndAbove: "{min} e oltre",
    rangeBelow: "sotto {max}",
    rangeBetween: "{min} – {max}",
    disclaimer:
      "Il rapporto vita-fianchi è uno screening, non una diagnosi. Segue dove si trova il grasso e non quanto ce n'è, ed è per questo che predice il rischio cardiovascolare meglio del solo BMI. Parla di un risultato in fascia moderata o alta con un medico.",
    levels: {
      low: {
        label: "Rischio basso",
        description:
          "Il grasso non è concentrato intorno all'addome. È il profilo a rischio più basso per {group}.",
      },
      moderate: {
        label: "Rischio moderato",
        description:
          "Un po' di grasso centrale. Associato a un aumento misurabile del rischio cardiovascolare e di diabete di tipo 2.",
      },
      high: {
        label: "Rischio alto",
        description:
          "Rischio sostanzialmente più alto di malattie cardiovascolari e diabete di tipo 2. Vale la pena parlarne con un medico.",
      },
    },
    waistVerdict: {
      high: "Una vita di {waist} cm è pari o superiore alla soglia di {threshold} cm in cui l'OMS segnala un rischio sostanzialmente aumentato per {group}.",
      moderate:
        "Una vita di {waist} cm è sopra la soglia di {threshold} cm in cui l'OMS segnala un rischio aumentato per {group}.",
      low: "Una vita di {waist} cm è sotto la soglia di {threshold} cm che l'OMS usa per {group}.",
    },
  },
  resultCta: {
    headline: "Camminare colpisce il grasso che questo misura",
    description:
      "L'attività aerobica regolare riduce in modo specifico il grasso viscerale, anche a peso stabile. Steps registra la tua in automatico così l'abitudine resta.",
  },
  sticky: "Tieni traccia dei tuoi passi con Steps",
  info: {
    title: "Come calcoliamo la tua fascia di rischio",
    intro:
      "L'aritmetica è banale. Il valore sta nelle soglie, che vengono dalla consultazione di esperti OMS del 2008 su circonferenza vita e rapporto vita-fianchi.",
    formulaTitle: "Formula e soglie",
    formulas: [
      { name: "WHR", body: "circonferenza vita ÷ circonferenza fianchi" },
      { name: "Uomini:", body: "basso sotto 0,90, moderato da 0,90 a 0,99, alto da 1,0 in su" },
      { name: "Donne:", body: "basso sotto 0,80, moderato da 0,80 a 0,84, alto da 0,85 in su" },
      { name: "Solo vita (uomini):", body: "rischio aumentato a 94 cm, sostanzialmente aumentato a 102 cm" },
      { name: "Solo vita (donne):", body: "rischio aumentato a 80 cm, sostanzialmente aumentato a 88 cm" },
      {
        name: "Esempio:",
        body: "un uomo con vita 90 cm e fianchi 100 cm ottiene 0,90, il limite basso della fascia moderata.",
      },
    ],
    conflict:
      "Il controllo della circonferenza vita è indipendente dal rapporto, perché i due possono non concordare. Fianchi larghi possono portare un rapporto nella fascia a basso rischio mentre la sola vita resterebbe segnalata. Quando sono in conflitto, segui la lettura più prudente.",
    screening:
      "È una misura di screening, non una diagnosi. Un risultato in fascia moderata o alta va discusso con un medico, soprattutto insieme a pressione, glicemia a digiuno o lipidi.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Qual è un rapporto vita-fianchi sano?",
      answer:
        "L'OMS mette il rischio basso sotto 0,90 per gli uomini e sotto 0,80 per le donne. Tra 0,90 e 0,99 negli uomini, o 0,80 e 0,84 nelle donne, il rischio è moderato. Da 1,0 negli uomini e da 0,85 nelle donne il rischio è sostanzialmente elevato. Le soglie delle donne sono più basse perché portano naturalmente più grasso su fianchi e cosce: lo stesso rapporto significa più grasso addominale in una donna che in un uomo.",
    },
    {
      question: "Perché il rapporto vita-fianchi conta più del BMI?",
      answer:
        "Perché vede dove sta il grasso, e il BMI no. Il grasso viscerale intorno agli organi addominali è attivo dal punto di vista metabolico: rilascia segnali infiammatori e acidi grassi liberi direttamente nella circolazione portale. Il grasso su fianchi e cosce non si comporta così. Due persone con lo stesso BMI possono avere rischi molto diversi secondo la distribuzione, e il WHR lo intercetta.",
    },
    {
      question: "Come misuro correttamente vita e fianchi?",
      answer:
        "La vita nel punto più stretto tra l'ultima costola e la parte alta dell'osso dell'anca, alla fine di un'espirazione normale, senza tirare in dentro la pancia. I fianchi nel punto più largo intorno ai glutei. Tieni il metro in piano e aderente senza comprimere la pelle, su pelle nuda o indumento sottile. Misurare a un'altezza diversa è l'errore più comune: usa gli stessi punti di riferimento ogni volta.",
    },
    {
      question: "Qual è la differenza tra forma a mela e a pera?",
      answer:
        "La forma a mela porta il grasso intorno al centro, con un rapporto più alto e un rischio metabolico maggiore. La forma a pera lo porta su fianchi e cosce, con un rapporto più basso e un profilo di rischio più favorevole. La distribuzione è in gran parte genetica e fortemente influenzata dagli ormoni sessuali: per questo molte donne si spostano verso un profilo a mela dopo la menopausa anche senza aumentare di peso.",
    },
    {
      question: "Posso ridurre il mio rapporto vita-fianchi?",
      answer:
        "Sì, ma non puntandolo direttamente. La riduzione localizzata non funziona: nessun esercizio addominale brucia in modo preferenziale il grasso della pancia. Quello che funziona è un deficit calorico complessivo, e il grasso viscerale è tra le prime riserve mobilitate, quindi la perdita di peso iniziale spesso migliora il rapporto più in fretta del peso totale. L'attività aerobica regolare riduce in modo specifico il grasso viscerale, anche a peso stabile.",
    },
    {
      question: "Camminare riduce il grasso della pancia?",
      answer:
        "Riduce il grasso viscerale, che è la parte che conta qui. Un'attività aerobica moderata e regolare abbassa il grasso viscerale in modo misurabile anche quando il peso cambia poco, e camminare è la forma più facile da sostenere al volume necessario. Gli studi usano in genere 150–300 minuti a settimana di attività moderata, cioè 30–60 minuti quasi tutti i giorni.",
    },
    {
      question: "Devo usare la circonferenza vita o il rapporto?",
      answer:
        "Entrambi, ed è per questo che il calcolatore riporta entrambi. Il rapporto da solo può ingannare: una persona con vita ampia e fianchi insolitamente larghi può finire nella fascia a basso rischio anche se l'OMS segnalerebbe la circonferenza vita da sola. Quelle soglie sono 94 e 102 cm negli uomini, 80 e 88 cm nelle donne. Quando le due misure non concordano, prendi la lettura più prudente.",
    },
  ],
  cta: {
    title: "Cammina via il grasso che conta",
    description:
      "Scarica l'app Steps per registrare la camminata quotidiana e costruire l'abitudine aerobica che riduce il grasso viscerale.",
  },
  howTo: {
    name: "Come calcolare il tuo rapporto vita-fianchi",
    description:
      "Misura vita e fianchi, inserisci entrambi e vedi dove cade il rapporto rispetto alle soglie di rischio cardiovascolare dell'OMS.",
    steps: [
      {
        name: "Seleziona il tuo sesso",
        text: "L'OMS fissa soglie più basse per le donne, che portano naturalmente più grasso su fianchi e cosce.",
      },
      {
        name: "Misura la vita",
        text: "Trova il punto più stretto tra l'ultima costola e la parte alta dell'osso dell'anca. Misura alla fine di un'espirazione normale, senza tirare in dentro la pancia.",
      },
      {
        name: "Misura i fianchi",
        text: "Misura il punto più largo intorno ai glutei, con il metro in piano e aderente senza comprimere la pelle.",
      },
      {
        name: "Leggi la tua fascia di rischio",
        text: "Il calcolatore restituisce il rapporto, la fascia di rischio OMS, un controllo separato della circonferenza vita e la misura di vita che ti metterebbe nella fascia a basso rischio.",
      },
    ],
  },
};

export default it;

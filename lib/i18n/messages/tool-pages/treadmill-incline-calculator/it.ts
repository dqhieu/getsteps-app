import type { TreadmillInclineCalculatorMessages } from "./en";

const it: TreadmillInclineCalculatorMessages = {
  meta: {
    title: "Calcolatore di inclinazione del tapis roulant: ritmo e dislivello",
    description:
      "Converti l'inclinazione del tapis roulant in un ritmo equivalente in piano e vedi il dislivello che hai salito. 3 mph al 12% equivalgono a un jogging a 4,7 mph in piano. Calcolatore gratuito basato sull'ACSM.",
    keywords: [
      "calcolatore inclinazione tapis roulant",
      "calcolatore ritmo tapis roulant",
      "calcolatore dislivello tapis roulant",
      "calorie camminata in salita",
      "tabella conversione inclinazione",
      "equivalente ritmo 12-3-30",
      "pendenza tapis roulant in ritmo piano",
      "dislivello tapis roulant",
    ],
    ogTitle: "Calcolatore di inclinazione del tapis roulant: ritmo e dislivello",
    ogDescription:
      "Trasforma qualsiasi inclinazione del tapis roulant nel ritmo in piano che vale, e vedi quanto dislivello hai salito. Calcolatore gratuito con le equazioni metaboliche ACSM.",
    ogImageAlt: "Calcolatore di inclinazione del tapis roulant",
  },
  hero: {
    title: "Calcolatore di inclinazione del tapis roulant",
    subtitle:
      "Trasforma qualsiasi inclinazione nel ritmo in piano che vale davvero e vedi quanto dislivello hai salito. Le equazioni metaboliche ACSM valutano la pendenza invece di stimarla.",
  },
  calculator: {
    yourSetting: "La tua impostazione del tapis roulant",
    beltSpeed: "Velocità del nastro",
    incline: "Inclinazione: {percent}%",
    duration: "Durata",
    minutes: "minuti",
    effortVsFlat: "Sforzo rispetto alla stessa velocità in piano",
    flatBelt: "Nastro in piano: il tuo ritmo è il tuo sforzo",
    between:
      "Una pendenza del {grade}% a {speed} è più dura di qualsiasi passo di camminata in piano che riusciresti a tenere, e ancora più facile del jogging in piano più lento: nessuna singola velocità in piano la eguaglia.",
    sameEffort: "Stesso sforzo di {gait} in piano a {speed} ({pace}).",
    gaitWalk: "camminare",
    gaitJog: "fare jogging",
    kindWalk: "camminata",
    kindJog: "jogging",
    betweenLabel: "tra una camminata e un jogging",
    perKmPace: "{pace} per km",
    perMilePace: "{pace} per miglio",
    yourPace: "Il tuo ritmo",
    perKm: "Per km",
    perMile: "Per miglio",
    met: "MET",
    distance: "Distanza",
    distanceValue: "{km} km / {mi} mi",
    elevationTitle: "Dislivello salito",
    elevationSubtitle: "Pendenza del {grade}% per {minutes} minuti a {speed}.",
    verticalMetres: "Metri verticali",
    verticalFeet: "Piedi verticali",
    storeys: "Piani",
    stairSteps: "Gradini",
    briskWalk:
      "Per rendere {speed} impegnativo come una camminata sostenuta a 6 km/h (3,7 mph) in piano, imposta l'inclinazione su {grade}.",
    tableTitle: "Ritmo in piano equivalente per inclinazione",
    tableSubtitle: "Velocità del nastro ferma a {speed}. Cambia solo la pendenza.",
    colIncline: "Inclinazione",
    colFeelsLike: "Equivale a",
    colMet: "MET",
    colVsFlat: "vs piano",
    multiplier: "{value}x",
  },
  resultCta: {
    headline: "Scopri quanto valgono davvero le tue camminate",
    description:
      "Steps registra ogni camminata in background e la trasforma in distanza, dislivello e calorie reali, senza inserimento manuale.",
  },
  info: {
    title: "Come calcoliamo gli equivalenti di inclinazione",
    intro:
      "Due impostazioni del tapis roulant sono equivalenti quando costano lo stesso ossigeno. Stimiamo il consumo di ossigeno da velocità e pendenza con le equazioni metaboliche ACSM, poi risolviamo al contrario l'equazione in piano per trovare il ritmo con lo stesso costo.",
    formulaTitle: "Le formule",
    formulas: [
      { strong: "VO₂ camminata", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ corsa", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S è la velocità in metri al minuto, G la pendenza come frazione (5% = 0,05). La VO₂ è in ml/kg/min.",
      },
      {
        strong: "Moltiplicatore di sforzo",
        rest: "= 1 + 18G, che esce direttamente uguagliando le due equazioni della camminata. Vale a qualsiasi pendenza.",
      },
      { strong: "Dislivello", rest: "= distanza del nastro × G" },
      {
        strong: "Esempio:",
        rest: "4,8 km/h al 5% di pendenza sono 5,3 MET, un moltiplicatore di 1,9× e 120 metri verticali in 30 minuti.",
      },
    ],
    note: "Le due equazioni ACSM non si incontrano: la camminata in piano arriva a circa 14,3 ml/kg/min e la corsa in piano parte vicino a 25,2. Le camminate a pendenza moderata cadono in mezzo, dove nessun ritmo in piano corrisponde allo sforzo. Il calcolatore lo dice, invece di estrapolare un'equazione oltre l'intervallo in cui è stata validata, e il moltiplicatore di sforzo resta significativo in entrambi i casi.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Quale ritmo in piano equivale a camminare a 3 mph con il 12% di inclinazione?",
      answer:
        "Circa un jogging a 4,7 mph. Camminare a 3 mph su una pendenza del 12% costa circa 29 ml/kg/min di ossigeno, intorno a 8,3 MET. Nessun ritmo di camminata sostenibile in piano arriva lì, quindi il confronto onesto è una corsa lenta, non una camminata veloce. Per questo l'allenamento 12-3-30 sembra molto più duro di quanto suggerisca la velocità.",
    },
    {
      question: "Come converto l'inclinazione del tapis roulant in un ritmo in piano?",
      answer:
        "Lo sforzo cresce quasi in modo lineare: una pendenza moltiplica il costo energetico della camminata per (1 + 18 × la pendenza in decimale), quindi il 5% è 1,9 volte più duro della stessa velocità in piano. Trasformare quel moltiplicatore in una velocità in piano funziona solo finché il risultato resta nella fascia della camminata, cioè, ai ritmi tipici, pendenze sotto circa il 2–3,5%. Oltre, lo sforzo supera qualsiasi camminata sostenibile senza ancora raggiungere il jogging più lento, e nessun singolo ritmo in piano corrisponde.",
    },
    {
      question: "Quanto dislivello guadagni su un tapis roulant?",
      answer:
        "Il guadagno verticale è la distanza del nastro moltiplicata per la pendenza. Trenta minuti a 5 km/h coprono 2,5 km e al 10% sono 250 metri verticali, circa 820 piedi, o circa 83 piani di un edificio. Il tapis roulant indica la pendenza come salita sulla distanza del nastro, ed è esattamente ciò che assume questo calcolo.",
    },
    {
      question: "L'1% di inclinazione simula davvero la corsa all'aperto?",
      answer:
        "È una convenzione ragionevole, non una legge precisa. L'aggiustamento dell'1% viene da uno studio del 1996 di Jones e Doust, che ha trovato che una pendenza dell'1% eguagliava il costo energetico della corsa all'aperto sopra circa 8 mph. Alle velocità più lente a cui la maggior parte delle persone cammina o fa jogging, la resistenza dell'aria è trascurabile e un nastro allo 0% è già vicino allo sforzo all'aperto.",
    },
    {
      question: "Camminare in salita è meglio che correre in piano?",
      answer:
        "Per un costo energetico paragonabile con un impatto molto più basso, sì. Camminare a 5 km/h al 12% è intorno a 8,5 MET, in pratica come un jogging in piano a 8 km/h (8,6 MET), ma le forze di reazione al suolo sono molto più basse perché i due piedi non lasciano mai il nastro insieme. Il compromesso è che la camminata in salita carica molto di più polpacci e tendine d'Achille.",
    },
    {
      question: "Perché una piccola inclinazione cambia così tanto lo sforzo?",
      answer:
        "Perché sollevare il corpo in verticale costa caro rispetto a spostarlo in orizzontale. Nell'equazione ACSM della camminata il termine verticale ha coefficiente 1,8 contro 0,1 per quello orizzontale, quindi ogni 1% di pendenza aggiunge circa il 18% al costo energetico della camminata alla stessa velocità. Il cinque percento quasi lo raddoppia, il dodici percento circa lo triplica.",
    },
    {
      question: "Devi fidarti della lettura di inclinazione del tapis roulant?",
      answer:
        "Considerala approssimativa. La calibrazione del nastro deriva e molte macchine consumer mostrano la pendenza comandata al motore, non una misurata. La flessione del piano sotto carico riduce anche un po' la pendenza effettiva. Le relazioni qui restano valide, ma i numeri assoluti ereditano l'errore della macchina.",
    },
  ],
  cta: {
    title: "Tieni traccia degli allenamenti sul tapis roulant",
    description:
      "Scarica l'app Steps per registrare automaticamente le tue camminate, le calorie bruciate e i progressi nel tempo.",
  },
  sticky: "Conta i tuoi passi con Steps",
  howTo: {
    name: "Come convertire l'inclinazione del tapis roulant in un ritmo in piano",
    description:
      "Inserisci velocità del nastro, inclinazione e durata per vedere il ritmo in piano con lo stesso sforzo, quanto la pendenza rende più duro l'allenamento e il dislivello che hai salito.",
    steps: [
      {
        name: "Inserisci la velocità del nastro",
        text: "Imposta la velocità mostrata sulla console. Passa tra km/h e mph: ogni risultato segue l'unità che scegli.",
      },
      {
        name: "Imposta l'inclinazione",
        text: "Trascina il cursore o tocca un preset da 0% a 15%. I preset coprono le pendenze dei tapis roulant consumer, incluso il 12% dell'allenamento 12-3-30.",
      },
      {
        name: "Inserisci per quanto hai camminato",
        text: "Durata in minuti. Non cambia l'equivalenza del ritmo, ma fissa distanza e dislivello.",
      },
      {
        name: "Leggi il ritmo in piano equivalente",
        text: "Il numero principale è il ritmo in piano che costa lo stesso ossigeno. Sopra circa il 3% di pendenza nessun passo di camminata corrisponde, quindi il confronto passa al jogging e lo dice.",
      },
      {
        name: "Controlla dislivello e tabella",
        text: "Vedi la salita in metri verticali, piedi, piani e gradini, poi confronta ogni pendenza standard alla tua velocità nella tabella di equivalenza.",
      },
    ],
  },
};

export default it;

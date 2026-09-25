import type { RuckingCalorieCalculatorMessages } from "./en";

const it: RuckingCalorieCalculatorMessages = {
  meta: {
    title: "Calcolatore di calorie del rucking: peso dello zaino, terreno e pendenza",
    description:
      "Calcola le calorie del rucking da peso dello zaino, ritmo, pendenza e terreno con l'equazione di Pandolf. Una persona di 70 kg con 15 kg per un'ora brucia ~350 calorie. Calcolatore gratuito.",
    keywords: [
      "calcolatore calorie rucking",
      "calorie marcia con zaino",
      "calorie bruciate rucking",
      "calcolatore calorie giubbotto zavorrato",
      "calorie trekking con zaino",
      "equazione di Pandolf",
      "costo energetico trasporto carico",
      "calorie escursione con zaino",
    ],
    ogTitle: "Calcolatore di calorie del rucking: peso dello zaino, terreno e pendenza",
    ogDescription:
      "Calcola le calorie bruciate nel rucking da peso dello zaino, ritmo, pendenza e terreno. Calcolatore gratuito con l'equazione di Pandolf per il trasporto del carico.",
    ogImageAlt: "Calcolatore di calorie del rucking",
  },
  hero: {
    title: "Calcolatore di calorie del rucking",
    subtitle:
      "Calcola le calorie bruciate nel rucking (marcia zavorrata) dal peso dello zaino, dal ritmo, dalla pendenza e dal terreno. L'equazione di Pandolf per il trasporto del carico fa contare davvero il peso sulla schiena.",
  },
  calculator: {
    yourRuck: "Il tuo rucking",
    switchImperial: "Passa a lbs / mph",
    switchMetric: "Passa a kg / km/h",
    bodyWeight: "Peso corporeo",
    packWeight: "Peso dello zaino",
    pace: "Ritmo",
    duration: "Durata",
    minutes: "minuti",
    grade: "Pendenza: {percent}%",
    terrain: "Terreno",
    terrains: {
      blacktop: {
        label: "Strada asfaltata",
        inline: "strada asfaltata",
        description: "Asfalto o tapis roulant. La superficie di riferimento.",
      },
      gravel: {
        label: "Strada sterrata",
        inline: "strada sterrata",
        description: "Strada di terra o ghiaia, vegetazione leggera.",
      },
      trail: {
        label: "Sentiero",
        inline: "sentiero",
        description: "Singletrack compatto, con radici e roccia.",
      },
      "heavy-brush": {
        label: "Vegetazione fitta",
        inline: "vegetazione fitta",
        description: "Sottobosco spesso, senza un sentiero stabilito.",
      },
      swampy: {
        label: "Terreno paludoso",
        inline: "terreno paludoso",
        description: "Suolo morbido e saturo che cede sotto il piede.",
      },
      sand: {
        label: "Sabbia sciolta",
        inline: "sabbia sciolta",
        description: "Sabbia asciutta di spiaggia. La superficie comune più costosa.",
      },
    },
    terrainFactor: "{description} Fattore di terreno {factor}.",
    caloriesBurned: "Calorie bruciate",
    packAdds:
      "Lo zaino da {load} aggiunge {extra} kcal rispetto alla stessa camminata a vuoto ({unloaded} kcal).",
    heavyLoad:
      "Quello zaino è il {percent}% del tuo peso. Carichi sopra circa un terzo del peso corporeo alzano nettamente il rischio di infortunio, e il modello di Pandolf lì è meno affidabile. Aumenta gradualmente invece di saltare a questo carico.",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "Distanza",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "Zaino / peso corporeo",
    equation: "Equazione di Pandolf per il trasporto del carico a {watts} watt, {terrain}, pendenza {grade}%.",
    tableTitle: "Calorie per peso dello zaino",
    tableSubtitle: "Stesso ritmo, pendenza, terreno e durata. Cambia solo il carico.",
    colPack: "Zaino",
    colCalories: "Calorie",
    colVsUnloaded: "vs a vuoto",
    vsUnloaded: "+{percent}%",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "Registra ogni rucking in automatico",
    description:
      "Steps conta distanza e passi in background, così i tuoi rucking si registrano insieme al resto della camminata.",
  },
  info: {
    title: "Come calcoliamo le calorie del rucking",
    intro:
      "Le tabelle MET e le equazioni ACSM non hanno alcun termine di carico: restituiscono lo stesso consumo che lo zaino sia vuoto o contenga 30 chilogrammi. Usiamo invece l'equazione di Pandolf, costruita apposta per prezzare il trasporto del carico.",
    formulaTitle: "La formula",
    formulas: [
      { strong: "M", rest: "= 1,5W + 2,0(W+L)(L/W)² + η(W+L)(1,5V² + 0,35VG)" },
      {
        strong: "",
        rest: "M è il metabolismo in watt, W la massa corporea in kg, L il carico in kg, V la velocità in m/s, G la pendenza in percentuale e η il fattore di terreno.",
      },
      { strong: "kcal/min", rest: "= watt × 60 ÷ 4184" },
      {
        strong: "",
        rest: "Il termine centrale è la penalità del carico e cresce con (L/W)². Raddoppiare lo zaino fa più che raddoppiare quel termine.",
      },
      {
        strong: "Esempio:",
        rest: "70 kg che portano 20 kg a 4,8 km/h sull'asfalto sono 360 watt, circa 5,2 kcal al minuto.",
      },
    ],
    note: "Pandolf copre la camminata in piano e in salita. La discesa richiede la correzione separata di Santee, quindi le discese qui sono trattate come piano invece di restituire una cifra che il modello non può sostenere.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Quante calorie brucia il rucking?",
      answer:
        "Una persona di 70 kg (155 lb) in rucking a 5 km/h su asfalto con uno zaino da 15 kg (33 lb) brucia circa 310 calorie all'ora. La stessa ora di camminata a vuoto è circa 265, quindi lo zaino ne spiega circa 45. Peso dello zaino, pendenza e terreno spostano parecchio quella cifra, ed è per questo che un solo numero di calorie all'ora è fuorviante.",
    },
    {
      question: "Il rucking brucia più calorie della camminata?",
      answer:
        "Sì, e più di quanto suggerisca il solo peso aggiunto. Portare un carico costa energia due volte: muovi la massa extra e paghi una penalità separata perché il carico è trasportato invece di far parte del corpo. Nell'equazione di Pandolf quella penalità cresce con il quadrato del rapporto carico/peso, quindi ogni chilogrammo in più costa più del precedente.",
    },
    {
      question: "Con quanto peso dovresti fare rucking?",
      answer:
        "La maggior parte delle indicazioni fa partire i principianti al 10 percento del peso corporeo e arriva al massimo verso un terzo. Sopra circa un terzo del peso, il rischio di infortunio a ginocchia, zona lombare e piedi sale in modo netto, e il modello di Pandolf stesso diventa meno affidabile perché è stato validato soprattutto sotto quel rapporto. Aggiungi peso piano, e prima di aggiungere distanza.",
    },
    {
      question: "Il terreno cambia quante calorie brucia il rucking?",
      answer:
        "Parecchio. L'equazione di Pandolf applica un fattore di terreno al costo del movimento: la strada asfaltata è il riferimento 1,0, sterrato e sentiero circa 1,2, vegetazione fitta 1,5, terreno paludoso 1,8 e sabbia sciolta 2,1. Il rucking sulla sabbia asciutta di spiaggia costa circa il doppio dell'energia di movimento dello stesso carico sull'asfalto.",
    },
    {
      question: "Cos'è l'equazione di Pandolf?",
      answer:
        "È il modello di riferimento del costo metabolico del trasporto di un carico, pubblicato da Pandolf, Givoni e Goldman nel 1977 per l'esercito degli Stati Uniti. Prevede il metabolismo in watt da massa corporea, carico, velocità di cammino, pendenza e terreno. A differenza delle tabelle MET e delle equazioni ACSM, tratta il carico come un input vero invece di ignorarlo.",
    },
    {
      question: "Perché questo calcolatore non accetta pendenze in discesa?",
      answer:
        "Perché l'equazione di Pandolf è stata validata solo per la camminata in piano e in salita. Con una pendenza negativa restituisce costi troppo bassi per essere credibili: scendere è più economico del piano nella formula, ma non all'infinito nella realtà. Modellare bene la discesa richiede la correzione separata di Santee, quindi questo calcolatore tratta le discese come piano invece di riportare un numero che non può sostenere.",
    },
    {
      question: "Il rucking è meglio della corsa per perdere grasso?",
      answer:
        "È più facile da sostenere, e di solito conta più del ritmo al minuto. Il rucking sta intorno a 6–8 MET a seconda di carico e pendenza, sotto la maggior parte della corsa, ma il basso impatto permette molto più volume settimanale senza lo stress articolare che interrompe i blocchi di corsa. È la spesa energetica totale della settimana, non l'intensità di una singola sessione, a far perdere grasso.",
    },
  ],
  cta: {
    title: "Tieni traccia dei tuoi rucking",
    description:
      "Scarica l'app Steps per registrare automaticamente le tue camminate, le calorie bruciate e i progressi nel tempo.",
  },
  sticky: "Conta i tuoi passi con Steps",
  howTo: {
    name: "Come calcolare le calorie del rucking",
    description:
      "Inserisci peso corporeo, peso dello zaino, ritmo, pendenza e terreno per ottenere le calorie bruciate e quanta parte di quel consumo dipende dal carico.",
    steps: [
      {
        name: "Inserisci peso del corpo e dello zaino",
        text: "Entrambi in chilogrammi o libbre. La penalità del carico cresce con il quadrato del rapporto zaino/corpo, quindi contano entrambe le cifre, non solo lo zaino.",
      },
      {
        name: "Imposta ritmo e durata",
        text: "Ritmo di rucking in km/h o mph e per quanto ti sei mosso. Insieme fissano la distanza percorsa.",
      },
      {
        name: "Aggiungi la pendenza",
        text: "Pendenza media in salita, in percentuale. Le discese sono trattate come piano, perché l'equazione di Pandolf è validata solo per la camminata in piano e in salita.",
      },
      {
        name: "Scegli il terreno",
        text: "Dalla strada asfaltata al sentiero, alla vegetazione fitta e alla sabbia sciolta. Il terreno moltiplica il costo del movimento, e la sabbia è più del doppio dell'asfalto.",
      },
      {
        name: "Leggi calorie e contributo del carico",
        text: "Il calcolatore restituisce le calorie totali, quante vengono solo dallo zaino, il metabolismo in watt e una tabella di calorie per carichi di rucking comuni.",
      },
    ],
  },
};

export default it;

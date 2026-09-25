import type { BmrCalculatorMessages } from "./en";

const it: BmrCalculatorMessages = {
  meta: {
    title: "Calcolatore del metabolismo basale: BMR in 3 formule",
    description:
      "Calcola il metabolismo basale con Mifflin-St Jeor, Harris-Benedict e Katch-McArdle affiancate. Un uomo di 30 anni e 75 kg brucia circa 1.699 calorie al giorno a riposo. Calcolatore gratuito.",
    keywords: [
      "calcolatore BMR",
      "calcolatore metabolismo basale",
      "metabolismo a riposo",
      "equazione di Mifflin-St Jeor",
      "equazione di Harris-Benedict",
      "formula di Katch-McArdle",
      "quante calorie brucio a riposo",
      "BMR e TDEE",
      "calcolatore del metabolismo",
    ],
    ogTitle: "Calcolatore del metabolismo basale: BMR in 3 formule",
    ogDescription:
      "Calcola il metabolismo basale con tre formule cliniche affiancate, più il fabbisogno calorico giornaliero a ogni livello di attività.",
    ogImageAlt: "Calcolatore del metabolismo basale",
  },
  hero: {
    title: "Calcolatore del metabolismo basale",
    subtitle:
      "Scopri le calorie che il corpo brucia a riposo completo. Tre formule cliniche girano insieme, così vedi lo scarto invece di un solo numero che finge di essere certo.",
  },
  calculator: {
    details: "I tuoi dati",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    years: "anni",
    weight: "Peso",
    height: "Altezza",
    bodyFat: "Grasso corporeo %",
    bodyFatOptional: "(facoltativo: sblocca Katch-McArdle)",
    bodyFatPlaceholder: "es. 20",
    activity: "Livello di attività",
    activityLevels: {
      sedentary: "Sedentario",
      light: "Leggermente attivo",
      moderate: "Moderatamente attivo",
      active: "Attivo",
      very_active: "Molto attivo",
    },
    activityDescriptions: {
      sedentary: "Lavoro da scrivania, poco o nessun esercizio",
      light: "Esercizio leggero 1–3 giorni a settimana",
      moderate: "Esercizio moderato 3–5 giorni a settimana",
      active: "Esercizio intenso 6–7 giorni a settimana",
      very_active: "Lavoro fisico o due allenamenti al giorno",
    },
    calculate: "Calcola il metabolismo basale",
    results: "I tuoi risultati",
    bmr: "BMR",
    atRest: "calorie/giorno a riposo",
    maintenance: "Mantenimento",
    maintenanceAt: "da {level}",
    leanMass:
      "Massa magra: {mass}. Poiché hai indicato la percentuale di grasso, il numero principale usa Katch-McArdle.",
    kgValue: "{value} kg",
    share: "Anche restando seduto tutto il giorno, il metabolismo basale copre circa il {percent}% delle calorie che bruci.",
    formulasTitle: "Tutte e tre le formule",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "Harris-Benedict rivista",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "Validata su una popolazione moderna. Lo standard clinico attuale e la scelta più affidabile quando il grasso corporeo è sconosciuto.",
      harris:
        "L'originale del 1919, rivista nel 1984. Tende a sovrastimare di circa il 5%, perché il gruppo di studio era più magro e più attivo della popolazione di oggi.",
      katch:
        "Parte dalla massa magra e ignora sesso e altezza: è l'opzione più accurata per corpi magri o muscolosi.",
      katchLocked: "Serve una percentuale di grasso corporeo. Inseriscila sopra per vedere questa stima.",
    },
    used: "Usata",
    calValue: "{value} cal",
    byActivity: "Calorie giornaliere per livello di attività",
    resultCta: {
      headline: "Il metabolismo basale è il pavimento. I passi sono la leva.",
      description:
        "Il consumo a riposo si sposta poco, tutto ciò che sta sopra sì. Steps registra l'attività in automatico e mostra quanto aggiunge al numero che hai appena calcolato.",
    },
  },
  info: {
    title: "Come calcoliamo il metabolismo basale",
    intro:
      "Tre equazioni sono di uso clinico comune e divergono abbastanza da contare. Invece di sceglierne una e nascondere lo scarto, questo calcolatore le esegue tutte e tre.",
    formulaTitle: "Le formule",
    formulas: [
      {
        title: "Mifflin-St Jeor (1990)",
        lines: [
          "Uomini: (10 × peso kg) + (6,25 × altezza cm) − (5 × età) + 5",
          "Donne: (10 × peso kg) + (6,25 × altezza cm) − (5 × età) − 161",
        ],
      },
      {
        title: "Harris-Benedict rivista (1984)",
        lines: [
          "Uomini: 88,362 + (13,397 × peso) + (4,799 × altezza) − (5,677 × età)",
          "Donne: 447,593 + (9,247 × peso) + (3,098 × altezza) − (4,330 × età)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: [
          "370 + (21,6 × massa magra kg), dove massa magra = peso × (1 − % di grasso)",
        ],
      },
    ],
    exampleLabel: "Esempio:",
    example:
      "un uomo di 30 anni, 75 kg, 175 cm ottiene 1.699 con Mifflin-St Jeor e 1.763 con Harris-Benedict. Al 20% di grasso, Katch-McArdle restituisce 1.666.",
    primary:
      "Mifflin-St Jeor è il numero principale, a meno che tu non indichi la percentuale di grasso: in quel caso subentra Katch-McArdle. È l'unica delle tre che misura il tessuto davvero responsabile della spesa a riposo, invece di dedurlo da altezza e sesso.",
    activityFactors:
      "Moltiplica il metabolismo basale per un fattore di attività per ottenere il TDEE: 1,2 sedentario, 1,375 leggermente attivo, 1,55 moderatamente attivo, 1,725 attivo, 1,9 molto attivo. Il calcolatore mostra tutti e cinque.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Che cos'è il metabolismo basale?",
      answer:
        "Il metabolismo basale (BMR) è l'energia che il corpo spende senza fare nulla: respirare, far circolare il sangue, tenere la temperatura, riparare le cellule. Si misura sdraiati, svegli, dopo un digiuno di 12 ore. Nella maggior parte degli adulti copre dal 60 al 75% delle calorie giornaliere, ed è quindi la quota più grande di ciò che bruci.",
    },
    {
      question: "Qual è la differenza tra BMR e RMR?",
      answer:
        "Il BMR si misura in laboratorio con condizioni strette: riposo completo, a digiuno, in una stanza termicamente neutra. Il metabolismo a riposo (RMR) si misura in condizioni più larghe e risulta circa il 10% più alto, perché include un po' di digestione e piccoli movimenti. Nell'uso comune i termini si scambiano, e ogni calcolatore online, questo compreso, stima in realtà qualcosa di più vicino all'RMR.",
    },
    {
      question: "Quale formula del metabolismo basale è più accurata?",
      answer:
        "Mifflin-St Jeor per la maggior parte delle persone. È stata validata con calorimetria indiretta su una popolazione moderna e prevede entro circa il 10% per circa l'80% degli adulti. Harris-Benedict, anche nella revisione del 1984, sovrastima di circa il 5% perché il gruppo del 1919 era più magro e più attivo. Katch-McArdle batte entrambe se conosci la percentuale di grasso, perché parte dalla massa magra, il tessuto che guida davvero la spesa a riposo.",
    },
    {
      question: "Qual è la differenza tra BMR e TDEE?",
      answer:
        "Il metabolismo basale è ciò che bruci a riposo completo. Il TDEE (dispendio energetico giornaliero totale) è il BMR moltiplicato per un fattore di attività: aggiunge movimento, esercizio e il costo della digestione. Il TDEE è sempre più alto: anche una giornata del tutto sedentaria vale circa 1,2 volte il BMR. Imposta gli obiettivi calorici sul TDEE, non sul BMR.",
    },
    {
      question: "Devo mangiare al livello del metabolismo basale per dimagrire?",
      answer:
        "No. Mangiare al BMR significa mangiare come se avessi passato l'intera giornata immobile, e crea un deficit di diverse centinaia fino a un migliaio di calorie prima ancora di muoverti. È abbastanza aggressivo da costarti muscolo e, per molti, scende sotto il pavimento di 1.200 (donne) o 1.500 (uomini) calorie. Sottrai invece 250–500 calorie dal TDEE.",
    },
    {
      question: "Perché il mio metabolismo basale è più basso del previsto?",
      answer:
        "La corporatura domina: persone più piccole e più leggere ottengono numeri più bassi, e ogni formula sottrae l'età. Conta anche la composizione: il muscolo brucia a riposo circa tre volte più del grasso per chilogrammo, quindi due persone dello stesso peso possono differire di 200 calorie o più. Dopo un lungo deficit, la termogenesi adattativa può abbassare il BMR reale del 10–15% sotto la stima.",
    },
    {
      question: "Posso aumentare il metabolismo basale?",
      answer:
        "Un po', e lentamente. Aggiungere muscolo è l'unica leva duratura: ogni chilogrammo di muscolo aggiunge circa 13 calorie al giorno a riposo, quindi un anno serio di allenamento con i pesi può valere 50–100 calorie. È reale, ma modesto. Muoversi di più cambia il TDEE molto più di qualunque intervento sul BMR: per questo il conteggio dei passi sposta l'ago più in fretta dei trucchi sul metabolismo.",
    },
  ],
  cta: {
    title: "Tieni traccia di ciò che bruci sopra il riposo",
    description:
      "Scarica l'app Steps per contare ogni passo in automatico e vedere il consumo calorico giornaliero costruirsi sopra il metabolismo basale.",
  },
  sticky: "Tieni traccia dei passi con Steps",
  howTo: {
    name: "Come calcolare il metabolismo basale",
    description:
      "Inserisci sesso, età, peso e altezza per ottenere il metabolismo basale da tre formule cliniche, più il fabbisogno giornaliero a ogni livello di attività.",
    steps: [
      {
        name: "Inserisci i dati corporei",
        text: "Imposta sesso, età, peso e altezza. Il peso passa da chilogrammi a libbre, l'altezza da centimetri a piedi/pollici.",
      },
      {
        name: "Aggiungi la percentuale di grasso se la conosci",
        text: "Facoltativo. Inserirla sblocca Katch-McArdle, che parte dalla massa magra ed è la più accurata per corpi magri o muscolosi.",
      },
      {
        name: "Scegli il livello di attività",
        text: "Da sedentario a molto attivo. Non cambia il metabolismo basale, ma decide quale cifra di calorie di mantenimento viene evidenziata.",
      },
      {
        name: "Leggi BMR e calorie di mantenimento",
        text: "Il calcolatore restituisce il metabolismo basale, le tre stime affiancate e le calorie giornaliere totali a ciascuno dei cinque livelli.",
      },
    ],
  },
};

export default it;

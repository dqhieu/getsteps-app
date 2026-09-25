import type { WeightLossCalculatorMessages } from "./en";

const it: WeightLossCalculatorMessages = {
  meta: {
    title: "Calcolatore di perdita di peso: calorie, tempi e data obiettivo",
    description:
      "Calcola le calorie giornaliere e i tempi per il peso obiettivo. Perdere 10 kg a 0,5 kg a settimana richiede 20 settimane con un deficit di 550 calorie. Calcolatore gratuito.",
    keywords: [
      "calcolatore perdita di peso",
      "calcolatore calorie per dimagrire",
      "quante calorie per perdere peso",
      "calcolatore peso obiettivo",
      "calcolatore tempi dimagrimento",
      "calcolatore deficit calorico",
      "quanto tempo per dimagrire",
      "piano di dimagrimento",
    ],
    ogTitle: "Calcolatore di perdita di peso: calorie, tempi e data obiettivo",
    ogDescription:
      "Inserisci i tuoi dati e il peso obiettivo per calorie giornaliere, tempi realistici e tappe settimana per settimana.",
    ogImageAlt: "Calcolatore di perdita di peso",
  },
  hero: {
    title: "Calcolatore di perdita di peso",
    subtitle:
      "Inserisci i tuoi dati e il peso obiettivo per ottenere calorie giornaliere, tempi realistici e le tappe settimana per settimana.",
  },
  calculator: {
    details: "I tuoi dati",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    years: "anni",
    height: "Altezza",
    weights: "Peso attuale e obiettivo",
    now: "ora",
    goal: "obiettivo",
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
    rate: "Ritmo di perdita",
    rates: {
      mild: { label: "Leggero", description: "0,25 kg (0,5 lb) a settimana" },
      moderate: { label: "Moderato", description: "0,5 kg (1 lb) a settimana" },
      aggressive: { label: "Sostenuto", description: "0,75 kg (1,5 lb) a settimana" },
      rapid: { label: "Rapido", description: "1 kg (2 lb) a settimana" },
    },
    calculate: "Calcola il mio piano",
    plan: "Il tuo piano",
    gainGoal: "Il peso obiettivo è uguale o superiore al peso attuale. Imposta un obiettivo più basso per vedere un piano di perdita.",
    eatPerDay: "Da mangiare al giorno",
    calories: "calorie",
    dailyDeficit: "Deficit giornaliero",
    belowTdee: "sotto il TDEE",
    toLose: "Da perdere",
    timeToGoal: "Tempo all'obiettivo",
    weeks: "settimane",
    yourBmr: "Il tuo metabolismo basale",
    yourTdee: "Il tuo TDEE",
    calValue: "{value} cal",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    warnings: {
      floorMale:
        "Un ritmo di {rate} kg/settimana ti porterebbe a {raw} calorie al giorno, sotto il pavimento di {floor} calorie per gli uomini. L'obiettivo è stato alzato a {floor}, quindi la perdita reale sarà più lenta del ritmo scelto.",
      floorFemale:
        "Un ritmo di {rate} kg/settimana ti porterebbe a {raw} calorie al giorno, sotto il pavimento di {floor} calorie per le donne. L'obiettivo è stato alzato a {floor}, quindi la perdita reale sarà più lenta del ritmo scelto.",
      tooFast:
        "Perdere {rate} kg a settimana è più dell'1% del tuo peso. Oltre quella soglia, una quota maggiore della perdita viene dal muscolo invece che dal grasso.",
      longPlan:
        "Oltre circa tre mesi le proiezioni diventano ottimistiche. La spesa a riposo cala mentre dimagrisci: ricalcola ogni 4–6 settimane con il nuovo peso.",
    },
    milestones: "Tappe previste",
    week: "Settimana {week}",
    resultCta: {
      headline: "Il deficit è più facile da tenere quando lo vedi",
      description:
        "Steps registra l'attività in automatico, così la parte movimento del deficit è misurata e non stimata.",
    },
  },
  info: {
    title: "Come funziona questo calcolatore",
    intro: "Tre passaggi: stimare ciò che bruci, sottrarre ciò che vuoi perdere e controllare il risultato rispetto ai pavimenti di sicurezza.",
    methodTitle: "Il metodo",
    steps: [
      {
        marker: "1. BMR",
        text: "{marker} con Mifflin-St Jeor, l'equazione meglio validata sulle popolazioni moderne.",
      },
      {
        marker: "2. TDEE",
        text: "{marker} = metabolismo basale × fattore di attività (1,2 sedentario fino a 1,9 molto attivo).",
      },
      {
        marker: "3. Deficit",
        text: "{marker} = ritmo settimanale scelto × 7.700 ÷ 7. Un obiettivo di 0,5 kg a settimana richiede 550 calorie al giorno.",
      },
      {
        marker: "4. Tempi",
        text: "{marker} = peso da perdere ÷ ritmo settimanale, ricalcolato se il pavimento di sicurezza ha alzato l'obiettivo calorico.",
      },
    ],
    exampleLabel: "Esempio:",
    example: "da 80 kg a 70 kg a 0,5 kg a settimana è un deficit giornaliero di 550 calorie per circa 20 settimane.",
    wishnofsky:
      "Le 7.700 calorie per chilogrammo sono la regola di Wishnofsky. È un'approssimazione lineare che regge per i primi due o tre mesi e poi diventa ottimistica, perché la spesa a riposo cala mentre dimagrisci. Il calcolatore lo segnala su ogni piano oltre le 13 settimane.",
    floors:
      "Gli obiettivi calorici hanno un pavimento di 1.200 per le donne e 1.500 per gli uomini. Se il ritmo scelto scenderebbe sotto, l'obiettivo viene alzato e i tempi allungati, invece di mostrarti un numero a cui non dovresti mangiare.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Quante calorie dovrei mangiare per dimagrire?",
      answer:
        "Prendi il TDEE e togli da 250 a 500 calorie. Produce circa 0,25–0,5 kg (0,5–1 lb) di perdita a settimana, l'intervallo che la maggior parte delle indicazioni cliniche considera sostenibile. Il calcolatore lo fa per te e non scende sotto 1.200 calorie per le donne o 1.500 per gli uomini, i pavimenti sotto i quali coprire i micronutrienti diventa difficile.",
    },
    {
      question: "Quanto ci metterò a perdere 10 kg?",
      answer:
        "A un ritmo moderato di 0,5 kg a settimana, circa 20 settimane, più o meno cinque mesi. A 1 kg a settimana sarebbero 10 settimane, ma sostenere un deficit di 1.100 calorie al giorno così a lungo è difficile e costa più massa magra. La maggior parte delle persone fa meglio a trattare il numero veloce come caso migliore e a pianificare sul ritmo moderato.",
    },
    {
      question: "1 kg a settimana è un ritmo sicuro?",
      answer:
        "Solo per chi ha un eccesso di peso consistente. La guida usuale è restare sotto l'1% del peso corporeo a settimana: a 100 kg consente 1 kg, a 65 kg significa 0,65 kg. Sopra quella soglia, una quota crescente di ciò che perdi è muscolo e acqua invece che grasso, e il deficit richiesto è troppo grande da tenere.",
    },
    {
      question: "Perché queste proiezioni diventano meno accurate?",
      answer:
        "Assumono 7.700 calorie per chilogrammo di grasso e un metabolismo fisso, e la seconda ipotesi non regge. Dimagrendo, il metabolismo basale cala perché c'è meno tessuto da mantenere, e le stesse attività bruciano meno. La curva reale si appiattisce mentre una proiezione lineare tiene la pendenza. Ricalcola ogni quattro-sei settimane con il peso attuale.",
    },
    {
      question: "Creo il deficit mangiando meno o muovendomi di più?",
      answer:
        "Entrambi, con il grosso dal cibo. Cambiare la dieta genera un deficit più grande con meno sforzo: saltare uno spuntino da 400 calorie non richiede tempo, bruciarne 400 richiede circa 90 minuti di camminata sostenuta. Ma aggiungere attività preserva la massa magra nel deficit e frena la caduta del TDEE, quindi un deficit fatto solo di restrizione tende a bloccarsi prima.",
    },
    {
      question: "Perché la mia perdita di peso si è fermata?",
      answer:
        "Di solito il TDEE è sceso: sei più leggero, quindi lo stesso deficit non c'è più. Può anche essere ritenzione idrica che maschera grasso perso davvero, normale dopo un allenamento duro o una giornata ricca di sodio, e può nascondere due settimane di progresso. Ricalcola al peso attuale e giudica un trend di due-tre settimane, non il giorno singolo.",
    },
    {
      question: "Quanti passi al giorno mi servono per dimagrire?",
      answer:
        "Non c'è un numero fisso, dipende dall'ampiezza del deficit e dal peso. Come ordine di grandezza, 10.000 passi bruciano circa 300–500 calorie per la maggior parte degli adulti, circa metà di un deficit giornaliero tipico. Camminare è l'attività più facile da sostenere a quel volume, e per questo regge meglio di opzioni più intense nei mesi che un obiettivo vero richiede.",
    },
  ],
  cta: {
    title: "Rendi automatica la parte movimento",
    description: "Scarica l'app Steps per seguire passi e calorie bruciate senza annotare nulla.",
  },
  sticky: "Tieni traccia dei passi con Steps",
  howTo: {
    name: "Come pianificare la perdita di peso",
    description:
      "Inserisci i tuoi dati e il peso obiettivo per calorie giornaliere, le settimane all'obiettivo e tappe settimana per settimana.",
    steps: [
      {
        name: "Inserisci i dati corporei",
        text: "Imposta sesso, età e altezza, poi peso attuale e peso obiettivo. Entrambi i pesi usano lo stesso cambio di unità.",
      },
      {
        name: "Scegli il livello di attività",
        text: "Da sedentario a molto attivo. Determina il TDEE, da cui si calcola l'obiettivo calorico.",
      },
      {
        name: "Scegli un ritmo di perdita",
        text: "Leggero è 0,25 kg a settimana, moderato 0,5 kg, sostenuto 0,75 kg, rapido 1 kg. Ritmi più veloci richiedono deficit più grandi e sono più difficili da tenere.",
      },
      {
        name: "Leggi il piano",
        text: "Ottieni un obiettivo calorico giornaliero, il deficit che crea, le settimane all'obiettivo e le tappe previste. Compaiono avvisi se il ritmo ti spingerebbe sotto pavimenti calorici sicuri.",
      },
    ],
  },
};

export default it;

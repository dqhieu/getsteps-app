import type { CalorieDeficitMessages } from "./en";

const it: CalorieDeficitMessages = {
  meta: {
    title: "Calcolatore del deficit calorico – Quanto mangiare per dimagrire",
    description:
      "Calcola il tuo deficit calorico giornaliero per raggiungere l'obiettivo di peso in sicurezza. Ottieni il TDEE, le calorie target e i passi giornalieri consigliati.",
    keywords: [
      "calcolatore deficit calorico",
      "quante calorie per dimagrire",
      "deficit calorico per perdere peso",
      "calcolatore calorie giornaliere",
      "TDEE per dimagrire",
      "quanto deve essere il deficit calorico",
    ],
    ogTitle: "Calcolatore del deficit calorico – Quanto mangiare per dimagrire",
    ogDescription:
      "Calcola il tuo deficit calorico giornaliero per raggiungere l'obiettivo di peso in sicurezza. Ottieni il TDEE, le calorie target e i passi giornalieri consigliati.",
    ogImageAlt: "Calcolatore del deficit calorico",
  },
  hero: {
    title: "Calcolatore del deficit calorico",
    subtitle:
      "Scopri esattamente quante calorie mangiare al giorno per raggiungere il peso obiettivo in modo sicuro e sostenibile.",
  },
  intro:
    "Inserisci i tuoi dati, il peso obiettivo e il periodo per calcolare le calorie giornaliere, il deficit necessario e quanti passi in più al giorno ti aiutano ad arrivare prima.",
  calculator: {
    details: "I tuoi dati",
    gender: "Sesso",
    male: "Uomo",
    female: "Donna",
    age: "Età",
    years: "anni",
    currentWeight: "Peso attuale",
    height: "Altezza",
    activity: "Livello di attività",
    activityLevels: {
      sedentary: "Sedentario",
      light: "Leggermente attivo",
      moderate: "Moderatamente attivo",
      active: "Attivo",
      very_active: "Molto attivo",
    },
    goalWeight: "Peso obiettivo",
    timeframe: "Periodo",
    weeks: "{count} sett.",
    plan: "Il tuo piano",
    atGoalTitle: "Hai già raggiunto il tuo obiettivo!",
    atGoalBody: "Concentrati sul mantenere il peso con un'alimentazione equilibrata e attività regolare.",
    tdee: "Il tuo TDEE (mantenimento)",
    deficit: "Deficit giornaliero necessario",
    target: "Calorie giornaliere target",
    extraSteps: "Passi extra da aggiungere",
    stepsHint: "per bruciare il deficit camminando",
    calPerDay: "cal/giorno",
    stepsPerDay: "passi/giorno",
    unsafe:
      "Attenzione: questo deficit supera {max} cal/giorno. Allunga il periodo per un risultato più sicuro.",
    belowMin:
      "Attenzione: le calorie target scendono sotto il minimo consigliato di {min} cal/giorno. Consulta un professionista sanitario.",
    safe: "È un deficit sicuro e sostenibile.",
  },
  info: {
    title: "Che cos'è un deficit calorico?",
    body: "Un deficit calorico si ha quando assumi meno calorie di quante il corpo ne brucia. Col tempo l'organismo usa il grasso di riserva e il peso scende. Il punto è trovare il deficit giusto — abbastanza ampio da vedere risultati, ma non così grande da diventare insostenibile o dannoso.",
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Quanto deve essere grande il mio deficit calorico?",
      answer:
        "Un deficit di 500–750 calorie al giorno è in genere sostenibile e porta a circa 0,5–0,75 kg di grasso persi a settimana. Deficit sopra 1.000 cal/giorno non sono consigliati — possono causare perdita di muscolo, carenze e sono difficili da mantenere.",
    },
    {
      question: "Quanto tempo serve per perdere 1 kg?",
      answer:
        "Poiché 1 kg di grasso contiene circa 7.700 calorie, con un deficit di 500 cal/giorno servono circa 15 giorni per perdere 1 kg. A 1.000 cal/giorno, circa 8 giorni. I risultati reali variano per ritenzione idrica, guadagno muscolare e adattamento metabolico.",
    },
    {
      question: "Che cos'è il TDEE?",
      answer:
        "TDEE significa dispendio energetico giornaliero totale — le calorie che il corpo brucia in un giorno, metabolismo basale (BMR) più tutta l'attività fisica. È il livello di « mantenimento »: mangiare al TDEE non cambia il peso.",
    },
    {
      question: "Posso dimagrire solo camminando?",
      answer:
        "Sì! Aggiungere 10.000 passi extra al giorno brucia circa 400 calorie in più e da solo crea un deficit utile nel tempo. Camminare ha basso impatto, è sostenibile e si combina bene con una riduzione alimentare moderata.",
    },
    {
      question: "È sicuro mangiare sotto le 1.200 calorie?",
      answer:
        "In genere no. Apporti molto bassi (sotto 1.200 per le donne, sotto 1.500 per gli uomini) possono portare a perdita di muscolo, carenze, squilibri ormonali e rallentamento metabolico. Se il target scende sotto queste soglie, allunga i tempi o consulta un professionista sanitario.",
    },
  ],
  cta: {
    title: "Segui il tuo percorso",
    description: "Aggiungi passi ogni giorno per aumentare in modo naturale il deficit calorico con l'app Steps.",
  },
  howTo: {
    name: "Come calcolare un deficit calorico per dimagrire",
    description:
      "Inserisci il TDEE (o i tuoi dati) e il ritmo di perdita desiderato a settimana per ottenere un obiettivo calorico giornaliero.",
    steps: [
      {
        name: "Inserisci il TDEE o i tuoi dati",
        text: "Incolla un TDEE che conosci già oppure inserisci età, sesso, peso, altezza e livello di attività.",
      },
      {
        name: "Scegli il ritmo di perdita di peso",
        text: "Da 0,25 a 1 kg a settimana è l'intervallo sostenibile. Ritmi più alti aumentano il rischio di perdere muscolo.",
      },
      {
        name: "Leggi l'obiettivo calorico giornaliero",
        text: "Il calcolatore mostra le calorie giornaliere target e l'ampiezza del deficit rispetto al mantenimento.",
      },
    ],
  },
};

export default it;

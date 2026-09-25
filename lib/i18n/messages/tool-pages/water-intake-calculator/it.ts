import type { WaterIntakeCalculatorMessages } from "./en";

const it: WaterIntakeCalculatorMessages = {
  meta: {
    title: "Calcolatore di acqua: quanta berne al giorno?",
    description:
      "Calcola l'acqua quotidiana in base a peso, livello di attività e clima. Raccomandazioni di idratazione personalizzate.",
    keywords: [
      "calcolatore acqua",
      "quanta acqua bere",
      "acqua quotidiana",
      "calcolatore idratazione",
      "acqua al giorno",
      "raccomandazione acqua giornaliera",
    ],
    ogTitle: "Calcolatore di acqua: quanta berne al giorno?",
    ogDescription:
      "Calcola l'acqua quotidiana in base a peso, livello di attività e clima. Raccomandazioni di idratazione personalizzate.",
    ogImageAlt: "Calcolatore di acqua",
  },
  hero: {
    title: "Calcolatore di acqua",
    subtitle:
      "Scopri esattamente quanta acqua bere ogni giorno in base al peso e al livello di attività.",
  },
  intro:
    "Usa questo calcolatore gratuito per trovare il tuo obiettivo di idratazione quotidiano. Inserisci peso e livello di attività per una raccomandazione immediata in litri, once e tazze.",
  calculator: {
    yourDetails: "I tuoi dati",
    bodyWeight: "Peso",
    activityLevel: "Livello di attività",
    climate: "Clima",
    activities: {
      sedentary: "Sedentario",
      moderate: "Moderatamente attivo",
      active: "Attivo",
      very_active: "Molto attivo",
    },
    climates: {
      temperate: "Temperato",
      hot: "Caldo / umido",
    },
    dailyIntake: "Acqua quotidiana",
    perDay: "L / giorno",
    ozPerDay: "oz / giorno",
    cupsPerDay: "tazze / giorno",
    glassesPerDay: "bicchieri / giorno",
    tipLabel: "Consiglio di idratazione",
    tips: {
      sedentary: "Prova a bere un bicchiere d'acqua ogni 2 ore per restare idratato durante la giornata.",
      moderate:
        "Bevi prima, durante e dopo ogni allenamento. Porta una borraccia riutilizzabile per non perdere il ritmo.",
      active: "Aggiungi 500 ml nei giorni di allenamento e reintegra gli elettroliti se sudi molto.",
      very_active:
        "Pesati prima e dopo le sessioni intense: bevi 500 ml per ogni 0,5 kg perso in sudore.",
    },
  },
  info: {
    title: "Perché l'idratazione conta",
  },
  faq: [
    {
      question: "Quanta acqua dovresti bere al giorno?",
      answer:
        "La regola spesso citata degli «8 bicchieri al giorno» è solo un'approssimazione. Un metodo più accurato parte dal peso: circa 33 ml per chilogrammo. Per un adulto di 70 kg sono circa 2,3 litri, ma livello di attività e clima possono alzare parecchio quella cifra. Questo calcolatore applica quegli aggiustamenti in automatico.",
    },
    {
      question: "L'esercizio cambia quanta acqua ti serve?",
      answer:
        "Sì, in modo netto. Durante l'attività perdi acqua con sudore e respiro. Un allenamento moderato può aggiungere 500 ml o più, una sessione intensa o uno sport di endurance può richiedere 1–2 litri in più. Bevi prima di avere sete: la sete è un segnale tardivo di disidratazione. Il calcolatore alza il tuo obiettivo del 20–60% in base al livello di attività scelto.",
    },
    {
      question: "Caffè e tè contano nell'acqua quotidiana?",
      answer:
        "In parte. Caffè e tè contribuiscono ai liquidi totali, ma la caffeina ha un lieve effetto diuretico che ne compensa una parte. Una regola utile è contare le bevande con caffeina a circa il 50–75% del volume nell'obiettivo del giorno e bere mezzo bicchiere d'acqua in più per ogni tazza di caffè.",
    },
    {
      question: "Il clima cambia il tuo fabbisogno di idratazione?",
      answer:
        "Il caldo o l'umidità aumentano la sudorazione anche a riposo e alzano il fabbisogno di base di 500–1000 ml al giorno. Anche l'alta quota aumenta le perdite con un respiro più rapido. Selezionare «Caldo / umido» nel calcolatore aggiunge 500 ml al totale del giorno. Nei giorni particolarmente caldi, o dopo attività all'aperto con il caldo, bevi ancora di più.",
    },
  ],
  cta: {
    title: "Segui il tuo percorso di salute",
    description: "Tieni traccia dei passi quotidiani e resta attivo con l'app Steps.",
  },
  howTo: {
    name: "Come calcolare l'acqua quotidiana",
    description:
      "Inserisci peso, livello di attività e clima per stimare il fabbisogno del giorno in litri o once.",
    steps: [
      {
        name: "Inserisci il peso",
        text: "Il fabbisogno di acqua cresce con la corporatura. Inserisci il peso in chilogrammi o libbre.",
      },
      {
        name: "Scegli il livello di attività",
        text: "Aggiungi liquidi se ti alleni, sudi molto o vivi in un clima caldo.",
      },
      {
        name: "Leggi l'obiettivo di acqua del giorno",
        text: "Il calcolatore restituisce l'acqua del giorno in litri e once, più una suddivisione in bicchieri.",
      },
    ],
  },
};

export default it;

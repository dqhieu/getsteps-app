import type { RunningPaceCalculatorMessages } from "./en";

const it: RunningPaceCalculatorMessages = {
  meta: {
    title: "Calcolatore del passo — converti passo, velocità e tempi di gara",
    description:
      "Calcola il tuo passo in min/km o min/mile, converti tra passo e velocità e prevedi i tempi su 5 km, 10 km, mezza maratona e maratona.",
    keywords: [
      "calcolatore del passo",
      "calcolo passo corsa",
      "calcolatore min per km",
      "calcolatore min per miglio",
      "previsione tempo di gara",
      "calcolatore velocità di corsa",
      "calcolatore passo 5 km",
    ],
    ogTitle: "Calcolatore del passo — converti passo, velocità e tempi di gara",
    ogDescription:
      "Calcola il tuo passo in min/km o min/mile, converti tra passo e velocità e prevedi i tempi su 5 km, 10 km, mezza maratona e maratona.",
    ogImageAlt: "Calcolatore del passo di corsa",
  },
  hero: {
    title: "Calcolatore del passo di corsa",
    subtitle:
      "Converti tra passo, velocità e tempo di arrivo. Vale per qualsiasi distanza, dai 5 km alla maratona.",
  },
  intro:
    "Inserisci passo, velocità oppure tempo e distanza per convertire subito tutte le misure della corsa e prevedere il tempo di arrivo, dai 5 km alla maratona.",
  calculator: {
    title: "Calcola il passo",
    tabs: {
      pace: "Passo",
      speed: "Velocità",
      timeDistance: "Tempo + distanza",
    },
    paceLabel: "Passo (MM:SS)",
    paceHint: "Inserisci il passo nel formato minuti:secondi (es. 5:30)",
    speedLabel: "Velocità",
    distanceLabel: "Distanza",
    finishTimeLabel: "Tempo di arrivo (MM:SS o H:MM:SS)",
    statsTitle: "I tuoi dati di corsa",
    pacePerKm: "Passo /km",
    pacePerMi: "Passo /mi",
    speedKmh: "Velocità km/h",
    speedMph: "Velocità mph",
    predictionsTitle: "Tempi di arrivo previsti",
    distanceColumn: "Distanza",
    finishTimeColumn: "Tempo di arrivo",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Mezza maratona",
      marathon: "Maratona",
    },
  },
  faqTitle: "Capire il passo di corsa",
  faq: [
    {
      question: "Qual è un buon passo di corsa?",
      answer:
        "Dipende dal tuo livello. I principianti corrono di solito a 7–9 min/km (11–14 min/mile). I runner intermedi stanno su 5–7 min/km (8–11 min/mile). Quelli avanzati restano sotto i 5 min/km (sotto gli 8 min/mile). I maratoneti d'élite tengono passi sotto 3:00/km. Il passo migliore è quello che ti fa arrivare messo alla prova, ma non completamente esausto.",
    },
    {
      question: "Come converto min/km in min/mile?",
      answer:
        "Moltiplica il passo in min/km per 1,60934 per ottenere min/mile. Per esempio, 5:00/km equivale a 5:00 × 1,60934 = 8:03/mile. Al contrario, dividi il passo in min/mile per 1,60934. Questo calcolatore fa la conversione da solo quando cambi unità.",
    },
    {
      question: "Che passo serve per una mezza maratona sotto le 2 ore?",
      answer:
        "Per chiudere una mezza maratona (21,0975 km) in meno di 2 ore ti serve un passo più veloce di 5:41/km (9:09/mile), circa 10,6 km/h (6,6 mph). È un obiettivo intermedio comune: costruisci prima la base correndo con costanza a 6:00–6:30/km, poi punta alla barriera delle 2 ore.",
    },
    {
      question: "Qual è il passo medio di corsa?",
      answer:
        "La maggior parte dei runner amatoriali corre a 6–8 min/km (10–13 min/mile). Il tempo medio sui 5 km è intorno ai 28–35 minuti, cioè un passo di 5:30–7:00/km. In mezza maratona i tempi medi si raggruppano intorno a 2:00–2:20, in maratona intorno a 4:20–4:45. Età, forma e percorso cambiano molto questi numeri.",
    },
    {
      question: "Come posso migliorare il mio passo?",
      answer:
        "Combina tre tipi di allenamento: ripetute (tratti brevi più veloci del passo gara, con recupero), lunghi lenti (base aerobica a passo conversazione) e prove a ritmo (sforzo sostenuto, comodamente duro). Aggiungi forza 1–2 volte a settimana per prevenire gli infortuni. Conta soprattutto la costanza: punta ad almeno 3 uscite a settimana e non aumentare il chilometraggio settimanale di più del 10%.",
    },
  ],
  cta: {
    title: "Segui il tuo percorso di salute",
    description: "Tieni traccia di corse e passi quotidiani insieme nell'app Steps.",
  },
  howTo: {
    name: "Come usare il calcolatore del passo",
    description:
      "Converti tra passo, velocità e tempo: inserisci due valori tra distanza, passo e tempo di arrivo e il calcolatore ricava il terzo.",
    steps: [
      {
        name: "Scegli l'incognita",
        text: "Decidi se vuoi il passo, il tempo o la distanza. Gli altri due valori li inserisci tu.",
      },
      {
        name: "Inserisci i due valori noti",
        text: "Distanza e tempo danno il passo, passo e distanza il tempo di arrivo, e così via. Sono supportati minuti per km e minuti per miglio.",
      },
      {
        name: "Leggi il risultato",
        text: "Il calcolatore restituisce il terzo valore in unità metriche e imperiali, più una tabella di passo confrontata con le distanze di gara più comuni.",
      },
    ],
  },
};

export default it;

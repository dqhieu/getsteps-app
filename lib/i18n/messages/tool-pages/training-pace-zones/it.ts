import type { TrainingPaceZonesMessages } from "./en";

const it: TrainingPaceZonesMessages = {
  meta: {
    title: "Calcolatore delle zone di passo — zone di allenamento sulla tua forma",
    description:
      "Calcola le tue 5 zone di passo da un risultato recente. Ottieni gli intervalli esatti per le corse facili, il tempo, la soglia e le ripetute di VO2 max.",
    keywords: [
      "zone di passo",
      "calcolatore zone di passo",
      "zone di corsa Jack Daniels",
      "calcolatore passo tempo",
      "calcolatore passo facile",
      "passo delle ripetute",
      "calcolatore passo soglia",
    ],
    ogTitle: "Calcolatore delle zone di passo — zone di allenamento sulla tua forma",
    ogDescription:
      "Calcola le tue 5 zone di passo da un risultato recente. Ottieni gli intervalli esatti per le corse facili, il tempo, la soglia e le ripetute di VO2 max.",
    ogImageAlt: "Calcolatore delle zone di passo",
  },
  hero: {
    title: "Calcolatore delle zone di passo",
    subtitle: "Ottieni zone di allenamento personalizzate dalla tua prestazione recente.",
  },
  intro:
    "Inserisci un tempo di gara recente per calcolare le tue 5 zone di passo, dal recupero facile alle ripetute intense. Usale per strutturare l'allenamento.",
  calculator: {
    distanceLabel: "Distanza di gara",
    customDistanceLabel: "Distanza (km)",
    finishTimeLabel: "Tempo di arrivo",
    hour: "h",
    minute: "min",
    second: "s",
    invalidTime: "Inserisci un tempo di gara valido.",
    invalidDistance: "Inserisci una distanza valida.",
    calculate: "Calcola le zone",
    footnote:
      "Un risultato recente corso all'impegno di gara dà le zone più accurate. Le zone si spostano con la forma: ricalcola dopo le gare importanti.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Mezza maratona",
      marathon: "Maratona",
      custom: "Personalizzata",
    },
    zones: {
      easy: {
        name: "Facile / Recupero",
        description: "Sforzo molto leggero. Conversazione completa possibile. Costruisce la base aerobica e aiuta il recupero.",
        usage: "~80% di tutte le uscite",
      },
      aerobic: {
        name: "Base aerobica",
        description: "Passo comodo e sostenibile. Respiro più alto ma stabile. Zona principale del lungo.",
        usage: "Lungo settimanale",
      },
      tempo: {
        name: "Tempo",
        description: "Comodamente duro. Respiro affannoso. Progressivi e lavoro a passo maratona.",
        usage: "Progressivi",
      },
      threshold: {
        name: "Soglia",
        description: "Sforzo sostenuto e duro. Passo di soglia del lattato. Prove di 20-40 min.",
        usage: "Prove di tempo (20-40 min)",
      },
      interval: {
        name: "Intervallo / VO2",
        description: "Sforzo vicino al massimo. Ripetute brevi (400 m-1600 m). Sviluppa il VO2 max e la velocità.",
        usage: "Intervalli in pista",
      },
    },
  },
  faqTitle: "Capire le zone di passo",
  faq: [
    {
      question: "Cosa sono le zone di passo di allenamento?",
      answer:
        "Le zone di passo sono intervalli che colpiscono sistemi energetici diversi. Ogni zona produce adattamenti distinti: le zone facili costruiscono la base aerobica e la densità mitocondriale, quelle più dure sviluppano la soglia del lattato e il VO2 max. Correre all'intensità giusta per ogni seduta — invece di andare sempre moderatamente forte — è uno dei principi più importanti dell'allenamento di endurance.",
    },
    {
      question: "Quante zone di passo esistono?",
      answer:
        "La maggior parte dei sistemi usa 5 zone, anche se alcuni allenatori preferiscono 3 (facile, moderato, duro) o 7 (come in Garmin e Polar). Il modello a 5 zone — Facile, Aerobico, Tempo, Soglia e Intervallo VO2 — è il più pratico per amatori e agonisti. Si allinea al quadro VDOT di Jack Daniels ed è sostenuto dalla ricerca in scienze dello sport.",
    },
    {
      question: "A che passo devono essere le corse facili?",
      answer:
        "Le corse facili (zone 1–2) devono essere davvero comode: devi poter tenere una conversazione intera senza ansare. Di solito sono 60–90 secondi al chilometro più lente del tuo passo sui 5 km. Molti corrono i giorni facili troppo forte e accumulano fatica che rovina le sedute di qualità. Il vero facile è più lento di quanto si pensi, ed è lì che avviene la maggior parte degli adattamenti aerobici.",
    },
    {
      question: "Quanto spesso correre in ogni zona?",
      answer:
        "La regola 80/20, sostenuta dalla ricerca sui fondisti d'élite, consiglia circa l'80% del volume nelle zone 1–2 e il 20% nelle zone 3–5. Questo approccio polarizzato rende più che allenarsi quasi sempre a intensità moderata. Una settimana tipo può avere 3–4 corse facili, un lungo, una seduta a tempo (zona 4) e una di ripetute (zona 5) — nelle zone giuste, non solo «forte».",
    },
    {
      question: "Come miglioro il passo di soglia?",
      answer:
        "Il passo di soglia del lattato (zona 4) migliora soprattutto con una prova settimanale di 20–40 minuti a sforzo comodamente duro — il passo che potresti tenere circa un'ora in gara. Con l'adattamento il corpo smaltisce il lattato meglio e corri più veloce prima di accumulare fatica. Una seduta di soglia a settimana per 8–12 settimane di solito migliora i tempi sui 10 km e in mezza maratona.",
    },
  ],
  cta: {
    title: "Tieni traccia di corse e passi quotidiani",
    description: "Tieni traccia di corse e passi quotidiani insieme nell'app Steps.",
  },
  howTo: {
    name: "Come ottenere le tue zone di passo",
    description:
      "Inserisci una distanza e un tempo di gara recenti per ottenere 5 zone di passo personalizzate per corse facili, tempo, soglia e ripetute.",
    steps: [
      {
        name: "Inserisci un risultato recente",
        text: "Un tempo duro su 5 km, 10 km o mezza maratona.",
      },
      {
        name: "Leggi le tue 5 zone",
        text: "Il calcolatore restituisce i passi di recupero, endurance, tempo, soglia e ripetute in min/km e min/mile.",
      },
    ],
  },
};

export default it;

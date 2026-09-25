import type { HeartRateZonesCalculatorMessages } from "./en";

const it: HeartRateZonesCalculatorMessages = {
  meta: {
    title: "Calcolatore zone di frequenza cardiaca – Trova le tue 5 zone",
    description:
      "Calcola le tue 5 zone di allenamento cardiaco in base a età e frequenza cardiaca a riposo. Ottimizza gli allenamenti per il consumo dei grassi, la resistenza e la prestazione.",
    keywords: [
      "calcolatore zone frequenza cardiaca",
      "zone di frequenza cardiaca target",
      "zone di allenamento cardiaco",
      "calcolatore frequenza cardiaca massima",
      "zona consumo grassi",
      "allenamento zona 2",
    ],
    ogTitle: "Calcolatore zone di frequenza cardiaca – Trova le tue 5 zone",
    ogDescription:
      "Calcola le tue 5 zone di allenamento cardiaco in base a età e frequenza cardiaca a riposo. Ottimizza gli allenamenti per il consumo dei grassi, la resistenza e la prestazione.",
    ogImageAlt: "Calcolatore zone di frequenza cardiaca",
  },
  hero: {
    title: "Calcolatore zone di frequenza cardiaca",
    subtitle:
      "Scopri le tue zone di allenamento cardiaco personalizzate per massimizzare il consumo dei grassi, costruire resistenza e migliorare la prestazione.",
  },
  intro:
    "Inserisci la tua età per vedere subito le tue 5 zone di allenamento cardiaco personalizzate. Aggiungi la frequenza cardiaca a riposo per usare il metodo di Karvonen e ottenere zone più precise.",
  calculator: {
    yourDetails: "I tuoi dati",
    age: "Età",
    years: { one: "anno", other: "anni" },
    advanced: "Opzioni avanzate",
    knowResting: "Conosco la mia frequenza cardiaca a riposo",
    restingHint: "Misurala al mattino, prima di alzarti dal letto.",
    knowMax: "Conosco la mia frequenza cardiaca massima",
    maxHint: "Da un test di laboratorio recente o da uno sforzo massimale in allenamento.",
    bpm: "bpm",
    maxHeartRate: "Frequenza cardiaca massima",
    methodKarvonen: "Personalizzato (Karvonen)",
    methodStandard: "Standard (220 − età)",
    zoneBadge: "Z{n}",
    bpmRange: "{min} – {max}",
    pctRange: "{min}–{max}%",
    zones: {
      recovery: { name: "Recupero", benefit: "Recupero attivo, bassa intensità" },
      fatBurn: { name: "Consumo dei grassi", benefit: "Base aerobica, consumo ottimale dei grassi" },
      aerobic: { name: "Aerobico", benefit: "Resistenza, forma cardiovascolare" },
      threshold: { name: "Soglia", benefit: "Lavoro di velocità, soglia del lattato" },
      maximum: { name: "Massimo", benefit: "Prestazione di picco, VO2 max" },
    },
  },
  info: {
    title: "Capire le zone di frequenza cardiaca",
  },
  faq: [
    {
      question: "Cosa sono le zone di allenamento cardiaco?",
      answer:
        "Le zone di frequenza cardiaca sono intervalli di battiti al minuto che corrispondono a diverse intensità di esercizio. Ce ne sono cinque, ciascuna definita come percentuale della tua frequenza cardiaca massima. Allenarsi in zone diverse produce adattamenti diversi — dal recupero attivo e dal consumo dei grassi alle intensità basse, fino alla velocità di picco e allo sviluppo del VO2 max alle intensità alte. Distribuire gli allenamenti tra le zone rende i progressi più equilibrati ed efficaci.",
    },
    {
      question: "Cos'è la zona di consumo dei grassi?",
      answer:
        "La zona 2 (60–70% della FC max) è spesso chiamata zona di consumo dei grassi perché a questa intensità il corpo usa soprattutto i grassi come carburante. Le intensità più alte bruciano più calorie totali, ma una quota maggiore arriva dai carboidrati. Per una perdita di grasso duratura, unire sedute di cardio in zona 2 a un bilancio calorico complessivo è la strategia più efficace. La zona 2 aumenta anche la densità mitocondriale e la base aerobica senza richiedere un recupero eccessivo.",
    },
    {
      question: "Come calcolo la mia frequenza cardiaca massima?",
      answer:
        "La formula standard è 220 meno la tua età. A 30 anni dà una FC max di 190 bpm. È una stima con un margine di circa ±10–12 bpm — genetica, livello di forma e farmaci possono spostare il tuo vero massimo. Se hai un test da sforzo in laboratorio o hai registrato uno sforzo massimale reale in gara o in un allenamento duro, inserisci quel valore nella sezione «Opzioni avanzate» per zone più accurate.",
    },
    {
      question: "Cos'è l'allenamento in zona 2?",
      answer:
        "L'allenamento in zona 2 — detto anche cardio a bassa intensità costante (LISS) — è diventato molto popolare grazie alla ricerca su longevità e prestazione di resistenza. Consiste in uno sforzo prolungato al 60–70% della FC max, a un'intensità in cui riesci a sostenere una conversazione. Gli atleti di endurance di alto livello spesso dedicano l'80% del volume di allenamento alla zona 2. I benefici includono un metabolismo dei grassi migliore, mitocondri più efficienti, una maggiore gittata cardiaca e un recupero più rapido tra le sedute dure.",
    },
    {
      question: "In che cosa differisce il metodo di Karvonen?",
      answer:
        "Il metodo di Karvonen usa la tua riserva di frequenza cardiaca (RFC) — la differenza tra frequenza cardiaca massima e frequenza cardiaca a riposo — per calcolare le zone. La formula è: FC target = FC a riposo + (RFC × percentuale della zona). Poiché tiene conto del tuo livello cardiovascolare di partenza, produce zone più personalizzate e di solito più accurate del semplice metodo percentuale. Un atleta ben allenato con una frequenza cardiaca a riposo di 45 bpm otterrà zone molto diverse da una persona sedentaria a 75 bpm, anche alla stessa età.",
    },
  ],
  cta: {
    title: "Segui il tuo percorso di salute",
    description:
      "Usa Steps per registrare le camminate quotidiane e tenere la frequenza cardiaca nella zona ottimale.",
  },
  howTo: {
    name: "Come trovare le tue zone di frequenza cardiaca",
    description:
      "Inserisci età o frequenza cardiaca massima (e, se vuoi, la frequenza cardiaca a riposo) per ottenere le tue 5 zone di allenamento con il metodo di Karvonen.",
    steps: [
      {
        name: "Inserisci la tua età",
        text: "L'età serve a stimare la frequenza cardiaca massima (220 − età) se non ne inserisci una direttamente.",
      },
      {
        name: "Inserisci se vuoi la frequenza cardiaca a riposo",
        text: "Se indichi la frequenza cardiaca a riposo, il calcolatore usa il metodo di Karvonen per zone più personalizzate.",
      },
      {
        name: "Leggi le tue 5 zone",
        text: "Il calcolatore mostra le zone da 1 a 5 con gli intervalli in bpm e lo scopo dell'allenamento (recupero, resistenza, ritmo, soglia, intervalli).",
      },
    ],
  },
};

export default it;

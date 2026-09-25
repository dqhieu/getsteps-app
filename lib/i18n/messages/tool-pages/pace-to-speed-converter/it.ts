import type { PaceToSpeedConverterMessages } from "./en";

const it: PaceToSpeedConverterMessages = {
  meta: {
    title: "Convertitore passo-velocità — min/km, min/mile, km/h, mph",
    description:
      "Converti subito il passo di corsa in velocità e viceversa. Da min/km a km/h, da min/mile a mph, e vedi i tempi sui 5 km e 10 km a qualsiasi passo.",
    keywords: [
      "convertitore passo velocità",
      "min per km in km/h",
      "calcolatore del passo",
      "convertire passo in velocità",
      "min/km in mph",
      "convertitore velocità di corsa",
      "convertitore di passo",
    ],
    ogTitle: "Convertitore passo-velocità — min/km, min/mile, km/h, mph",
    ogDescription:
      "Converti subito il passo di corsa in velocità e viceversa. Da min/km a km/h, da min/mile a mph, e vedi i tempi sui 5 km e 10 km a qualsiasi passo.",
    ogImageAlt: "Convertitore passo-velocità",
  },
  hero: {
    title: "Convertitore passo-velocità",
    subtitle: "Converti subito tra passo di corsa (min/km, min/mile) e velocità (km/h, mph).",
  },
  intro:
    "Inserisci un passo o una velocità e le altre unità si aggiornano subito. Vedi i tempi stimati sui 5 km e 10 km e quanta strada fai in 30 o 60 minuti.",
  calculator: {
    title: "Inserisci un valore da convertire",
    paceKm: "Passo (min/km)",
    paceMile: "Passo (min/mile)",
    speedKmh: "Velocità (km/h)",
    speedMph: "Velocità (mph)",
    distanceTitle: "Distanza percorsa",
    min30: "30 min",
    min60: "60 min",
    raceTitle: "Tempi di arrivo",
    referenceTitle: "Passi di riferimento",
    activityColumn: "Attività",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "Tocca una riga per caricare quel passo",
    races: {
      "5k": "5 km",
      "10k": "10 km",
    },
    activities: {
      walking: "Camminata",
      jogging: "Jogging",
      running: "Corsa",
      fast: "Corsa veloce",
      sprint: "Sprint",
    },
  },
  faqTitle: "FAQ passo e velocità",
  faq: [
    {
      question: "Come converto min/km in km/h?",
      answer:
        "Dividi 60 per il tuo passo in min/km. Per esempio, 5:00/km dà 60 ÷ 5 = 12 km/h. Un passo più lento di 6:00/km dà 60 ÷ 6 = 10 km/h.",
    },
    {
      question: "Qual è un buon passo in km/h?",
      answer:
        "Jogging tranquillo: 7–9 km/h; corsa moderata: 9–12 km/h; corsa veloce: 12–16 km/h; passo da maratona d'élite: 18+ km/h. La maggior parte dei runner amatoriali sta tra 8 e 11 km/h.",
    },
    {
      question: "Come converto min/km in min/mile?",
      answer:
        "Moltiplica il passo in min/km per 1,60934 per ottenere min/mile. Per esempio, 5:00/km × 1,60934 = 8:03/mile. Questo convertitore lo fa da solo.",
    },
    {
      question: "Che velocità è un 5 km in 30 minuti?",
      answer:
        "Un 5 km in 30 minuti richiede un passo di 6:00/km, cioè 10,0 km/h o 6,2 mph. È un passo di corsa amatoriale solido.",
    },
    {
      question: "Che differenza c'è tra passo e velocità?",
      answer:
        "Il passo è il tempo per unità di distanza (es. min/km): più è basso, più vai veloce. La velocità è la distanza per unità di tempo (es. km/h): più è alta, più vai veloce. È la stessa cosa, con unità invertite.",
    },
  ],
  cta: {
    title: "Tieni traccia di corse e passi nell'app Steps.",
    description: "Controlla passo, distanza e passi quotidiani, tutto in un unico posto.",
  },
  howTo: {
    name: "Come convertire il passo in velocità (o la velocità in passo)",
    description:
      "Inserisci un valore — minuti per chilometro, minuti per miglio, km/h o mph — e ottieni gli altri.",
    steps: [
      {
        name: "Scegli l'unità che conosci",
        text: "Seleziona l'unità di cui hai un valore (per esempio min/km).",
      },
      {
        name: "Inserisci il valore",
        text: "Digita il passo o la velocità.",
      },
      {
        name: "Leggi le conversioni",
        text: "Tutte e quattro le unità si aggiornano insieme: min/km, min/mile, km/h, mph.",
      },
    ],
  },
};

export default it;

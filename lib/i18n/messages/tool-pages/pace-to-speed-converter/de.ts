import type { PaceToSpeedConverterMessages } from "./en";

const de: PaceToSpeedConverterMessages = {
  meta: {
    title: "Pace-Geschwindigkeit-Umrechner – min/km, min/mile, km/h, mph",
    description:
      "Rechne Lauf-Pace sofort in Geschwindigkeit um und zurück. Von min/km nach km/h, von min/mile nach mph, plus 5-km- und 10-km-Zeiten bei jeder Pace.",
    keywords: [
      "Pace in Geschwindigkeit umrechnen",
      "Minuten pro km in km/h",
      "Lauf-Pace-Rechner",
      "Pace zu Tempo",
      "min/km in mph",
      "Laufgeschwindigkeit umrechnen",
      "Pace-Umrechner",
    ],
    ogTitle: "Pace-Geschwindigkeit-Umrechner – min/km, min/mile, km/h, mph",
    ogDescription:
      "Rechne Lauf-Pace sofort in Geschwindigkeit um und zurück. Von min/km nach km/h, von min/mile nach mph, plus 5-km- und 10-km-Zeiten bei jeder Pace.",
    ogImageAlt: "Pace-Geschwindigkeit-Umrechner",
  },
  hero: {
    title: "Pace-Geschwindigkeit-Umrechner",
    subtitle: "Rechne sofort zwischen Lauf-Pace (min/km, min/mile) und Geschwindigkeit (km/h, mph) um.",
  },
  intro:
    "Gib eine Pace oder Geschwindigkeit ein, alle anderen Einheiten aktualisieren sich sofort. Sieh deine geschätzten 5-km- und 10-km-Zeiten und wie weit du in 30 oder 60 Minuten kommst.",
  calculator: {
    title: "Beliebigen Wert zum Umrechnen eingeben",
    paceKm: "Pace (min/km)",
    paceMile: "Pace (min/mile)",
    speedKmh: "Tempo (km/h)",
    speedMph: "Tempo (mph)",
    distanceTitle: "Zurückgelegte Distanz",
    min30: "30 Min.",
    min60: "60 Min.",
    raceTitle: "Zielzeiten",
    referenceTitle: "Referenz-Paces",
    activityColumn: "Aktivität",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "Zeile antippen, um diese Pace zu laden",
    races: {
      "5k": "5 km",
      "10k": "10 km",
    },
    activities: {
      walking: "Gehen",
      jogging: "Joggen",
      running: "Laufen",
      fast: "Schnelles Laufen",
      sprint: "Sprint",
    },
  },
  faqTitle: "FAQ zu Pace und Geschwindigkeit",
  faq: [
    {
      question: "Wie rechne ich min/km in km/h um?",
      answer:
        "Teile 60 durch deine min/km-Pace. Eine Pace von 5:00/km ergibt 60 ÷ 5 = 12 km/h. Eine langsamere Pace von 6:00/km ergibt 60 ÷ 6 = 10 km/h.",
    },
    {
      question: "Was ist eine gute Laufgeschwindigkeit in km/h?",
      answer:
        "Lockeres Joggen: 7–9 km/h; moderates Laufen: 9–12 km/h; schnelles Laufen: 12–16 km/h; Elite-Marathonpace: 18+ km/h. Die meisten Freizeitläufer liegen bei 8–11 km/h.",
    },
    {
      question: "Wie rechne ich min/km in min/mile um?",
      answer:
        "Multipliziere deine min/km-Pace mit 1,60934, um min/mile zu erhalten. Zum Beispiel 5:00/km × 1,60934 = 8:03/mile. Dieser Umrechner erledigt das automatisch.",
    },
    {
      question: "Welche Geschwindigkeit ist ein 5 km in 30 Minuten?",
      answer:
        "Ein 5 km in 30 Minuten verlangt eine Pace von 6:00/km, das sind 10,0 km/h oder 6,2 mph. Eine solide Freizeit-Laufpace.",
    },
    {
      question: "Was ist der Unterschied zwischen Pace und Geschwindigkeit?",
      answer:
        "Pace ist Zeit pro Distanz (z. B. min/km) — niedriger ist schneller. Geschwindigkeit ist Distanz pro Zeit (z. B. km/h) — höher ist schneller. Es ist dasselbe, nur mit umgekehrten Einheiten.",
    },
  ],
  cta: {
    title: "Verfolge Läufe und Schritte in der Steps-App.",
    description: "Behalte Pace, Distanz und tägliche Schritte an einem Ort im Blick.",
  },
  howTo: {
    name: "So rechnest du Lauf-Pace in Geschwindigkeit um (oder umgekehrt)",
    description:
      "Gib einen Wert ein — Minuten pro Kilometer, Minuten pro Meile, km/h oder mph — und erhalte die anderen.",
    steps: [
      {
        name: "Wähle die Einheit, die du kennst",
        text: "Nimm die Einheit, für die du einen Wert hast (zum Beispiel min/km).",
      },
      {
        name: "Gib den Wert ein",
        text: "Tippe Pace oder Geschwindigkeit ein.",
      },
      {
        name: "Lies die Umrechnungen",
        text: "Alle vier Einheiten aktualisieren sich zusammen: min/km, min/mile, km/h, mph.",
      },
    ],
  },
};

export default de;

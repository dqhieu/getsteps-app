import type { RaceTimePredictorMessages } from "./en";

const de: RaceTimePredictorMessages = {
  meta: {
    title: "Zielzeit-Rechner: 5 km, 10 km, Halbmarathon und Marathon",
    description:
      "Kostenloser Zielzeit-Rechner — gib deine Pace ein und erhalte die Zielzeit, oder setze eine Zielzeit und finde die nötige Pace. Sofortige Ergebnisse für 5 km, 10 km, Halbmarathon und Marathon.",
    keywords: [
      "Zielzeit-Rechner",
      "Rennergebnis berechnen",
      "welche Pace für Halbmarathon unter 2 Stunden",
      "5-km-Zeit Rechner",
      "Marathon-Pace-Rechner",
      "Laufziel-Rechner",
    ],
    ogTitle: "Zielzeit-Rechner: 5 km, 10 km, Halbmarathon und Marathon",
    ogDescription:
      "Kostenloser Zielzeit-Rechner — gib deine Pace ein und erhalte die Zielzeit, oder setze eine Zielzeit und finde die nötige Pace. Sofortige Ergebnisse für 5 km, 10 km, Halbmarathon und Marathon.",
    ogImageAlt: "Zielzeit-Rechner",
  },
  hero: {
    title: "Zielzeit-Rechner",
    subtitle:
      "Berechne deine Zielzeit aus der angepeilten Pace, oder finde die genaue Pace für deine Wunschzeit.",
  },
  intro:
    "Gib die Renndistanz und entweder deine Ziel-Pace oder die Wunschzeit ein. Sieh sofort die prognostizierte Zielzeit oder die nötige Pace pro Kilometer, plus 5-km-Zwischenzeiten für ein sauberes Rennen.",
  calculator: {
    title: "Renneinstellungen",
    distanceLabel: "Renndistanz",
    customPlaceholder: "Distanz in km",
    modeLabel: "Was möchtest du berechnen?",
    finishTimeMode: "Zielzeit",
    requiredPaceMode: "Benötigte Pace",
    paceLabel: "Deine Pace (min/km, z. B. 5:30)",
    goalLabel: "Wunschzeit (H:MM:SS oder MM:SS)",
    calculate: "Berechnen",
    predictedFinish: "Prognostizierte Zielzeit",
    requiredPaceResult: "Benötigte Pace",
    pacePerKm: "Pace /km",
    pacePerMi: "Pace /mi",
    speedKmh: "Tempo km/h",
    speedMph: "Tempo mph",
    splitsTitle: "5-km-Zwischenzeiten",
    markerColumn: "Marke",
    cumulativeColumn: "Gesamtzeit",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Halbmarathon",
      marathon: "Marathon",
      custom: "Eigene",
    },
  },
  faqTitle: "FAQ zur Renn-Pace",
  faq: [
    {
      question: "Welche Pace brauche ich für einen Halbmarathon unter 2 Stunden?",
      answer:
        "Du musst 5:41/km (9:09/mile) halten, etwa 10,6 km/h. Nutze den Rechner oben, wähle „Benötigte Pace“, dann Halbmarathon, und gib 2:00:00 als Wunschzeit ein.",
    },
    {
      question: "Welche Pace brauche ich für 5 km in 25 Minuten?",
      answer:
        "5 km in 25 Minuten verlangen eine Pace von 5:00/km (8:03/mile). Ein solides Zwischenziel — die meisten Einsteiger starten bei etwa 6:30–7:00/km und arbeiten sich nach unten.",
    },
    {
      question: "Wie nutze ich Zwischenzeiten im Rennen?",
      answer:
        "Gleiche Splits (dieselbe Pace alle 5 km) geben die berechenbarste Leistung. Negative Splits — die zweite Hälfte schneller als die erste — sind ideal und das Ziel von Elite-Läufern. Starte nicht zu schnell im ersten Kilometer.",
    },
    {
      question: "Was ist eine gute 10-km-Zeit?",
      answer:
        "Einsteiger: 60–70 Min.; fortgeschritten: 50–60 Min.; ambitioniert: 40–50 Min.; Elite: unter 35 Min. Der Weltrekord liegt unter 27 Minuten. Die meisten Freizeitläufer finishen zwischen 50 und 65 Minuten.",
    },
    {
      question: "Wie teile ich mir die Pace im Halbmarathon ein?",
      answer:
        "Starte die ersten 10 km in Ziel-Pace und schiebe die letzten 11 km an, wenn du dich stark fühlst. Laufe am Anfang nicht schneller als die Ziel-Pace — die zweite Hälfte fühlt sich unabhängig von der Pace deutlich härter an.",
    },
  ],
  cta: {
    title: "Verfolge deine Trainingsschritte jeden Tag in der Steps-App.",
    description: "Logge jeden Lauf, verfolge deine Splits und erreiche deine Rennziele mit der Steps-App.",
  },
  howTo: {
    name: "So sagst du eine Zielzeit voraus",
    description: "Gib Distanz und entweder eine Pace oder eine Wunschzeit ein, um den fehlenden Wert zu erhalten.",
    steps: [
      {
        name: "Gib die Renndistanz ein",
        text: "Wähle ein übliches Rennen (5 km, 10 km, Halbmarathon, Marathon) oder eine eigene Distanz.",
      },
      {
        name: "Gib Pace oder Wunschzeit ein",
        text: "Eines von beiden reicht — der Rechner ergänzt das andere.",
      },
      {
        name: "Lies die prognostizierte Zeit oder die nötige Pace",
        text: "Das Ergebnis zeigt die prognostizierte Zielzeit plus Zwischenzeiten für übliche Renndistanzen.",
      },
    ],
  },
};

export default de;

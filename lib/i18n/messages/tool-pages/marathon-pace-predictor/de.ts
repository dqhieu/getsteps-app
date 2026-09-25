import type { MarathonPacePredictorMessages } from "./en";

const de: MarathonPacePredictorMessages = {
  meta: {
    title: "Marathon-Zeitprognose: Zielzeit aus jedem Rennergebnis",
    description:
      "Einen 5 km oder 10 km gelaufen? Sage Halbmarathon- und Marathonzeit sofort mit der Riegel-Formel voraus. Kostenloser Rechner mit Pace-Tabellen und Trainingstipps.",
    keywords: [
      "Marathon-Prognose",
      "Zielzeit-Rechner",
      "Marathonzeit berechnen",
      "Halbmarathon-Zeitprognose",
      "Riegel-Formel Rechner",
      "Marathon-Zielzeit vorhersagen",
      "5 km in Marathonzeit umrechnen",
    ],
    ogTitle: "Marathon-Zeitprognose: Zielzeit aus jedem Rennergebnis",
    ogDescription:
      "Einen 5 km oder 10 km gelaufen? Sage Halbmarathon- und Marathonzeit sofort mit der Riegel-Formel voraus.",
    ogImageAlt: "Marathon-Prognose",
  },
  hero: {
    title: "Marathon-Prognose",
    subtitle: "Gib ein aktuelles Rennergebnis ein und erhalte Zielzeiten für alle Standarddistanzen.",
  },
  intro:
    "Gib eine aktuelle Rennzeit und Distanz ein, um sofort 5-km-, 10-km-, Halbmarathon- und Marathonzeiten mit der Riegel-Formel vorherzusagen — dem Standard für Zielzeit-Prognosen.",
  calculator: {
    distanceLabel: "Deine Renndistanz",
    customDistanceLabel: "Distanz (km)",
    finishTimeLabel: "Deine Zielzeit",
    hour: "Std",
    minute: "Min",
    second: "Sek",
    invalidDistance: "Bitte gib eine gültige Distanz ein.",
    invalidTime: "Bitte gib eine gültige Zeit ein.",
    predict: "Zielzeiten vorhersagen",
    resultsTitle: "Prognostizierte Zielzeiten",
    distanceColumn: "Distanz",
    timeColumn: "Zeit",
    paceKmColumn: "Pace (km)",
    paceMileColumn: "Pace (mi)",
    speedColumn: "Tempo",
    you: "du",
    footnote:
      "Die Prognosen nutzen die Riegel-Formel (Ermüdungsfaktor 1,06). Am genauesten bei aktuellen Rennen mit ähnlicher Belastung.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Halbmarathon",
      marathon: "Marathon",
      custom: "Eigene (km)",
    },
  },
  info: {
    title: "Über die Zielzeit-Prognose",
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Wie genau ist die Riegel-Formel?",
      answer:
        "Die Riegel-Formel liegt bei gut trainierten Läufern und ähnlichen Distanzen bei etwa ±5–10 %. Die Genauigkeit sinkt bei großen Distanzsprüngen (z. B. 5 km auf Marathon) oder wenn das Eingaberennen nicht mit vollem Einsatz gelaufen wurde.",
    },
    {
      question: "Was ist die Riegel-Formel?",
      answer:
        "T2 = T1 × (D2/D1)^1,06. T1 ist deine bekannte Zielzeit, D1 die bekannte Distanz, D2 die Zieldistanz und T2 die prognostizierte Zeit. Der Exponent 1,06 bildet die zunehmende Ermüdung über längere Distanzen ab.",
    },
    {
      question: "Kann ich einen Marathon aus einem 5 km vorhersagen?",
      answer:
        "Ja, aber die Prognose ist weniger genau. Die Formel arbeitet am besten, wenn die Eingabedistanz nah an der Zieldistanz liegt. Für einen Marathon liefert ein aktueller 10 km oder Halbmarathon die verlässlichste Schätzung.",
    },
    {
      question: "Was ist eine gute Marathonzeit?",
      answer:
        "Einsteiger: 4:30–5:30 | fortgeschritten: 3:30–4:30 | ambitioniert: unter 3:30 | Elite: unter 2:30. Die durchschnittliche Marathonzeit liegt bei etwa 4:30 für Männer und 4:55 für Frauen.",
    },
    {
      question: "Wie nutze ich das für meine Renn-Pace?",
      answer:
        "Nimm die Pace-Spalte deiner Zieldistanz für die Strategie pro Kilometer. Liegt deine prognostizierte Marathon-Pace bei 5:30/km, laufe die erste Hälfte etwas langsamer (5:35/km) und die zweite Hälfte als negativen Split.",
    },
  ],
  cta: {
    title: "Trainiere klüger mit Steps: Workout & Pedometer",
    description:
      "Trainiere klüger, indem du tägliche Schritte und Aktivität in der App Steps: Workout & Pedometer verfolgst.",
  },
  howTo: {
    name: "So sagst du deine Marathonzeit voraus",
    description:
      "Gib eine aktuelle Renndistanz und -zeit ein, um deine Zielzeit für den Marathon (und 5 km, 10 km, Halbmarathon) vorherzusagen.",
    steps: [
      {
        name: "Gib eine bekannte Distanz und Zeit ein",
        text: "Nutze eine aktuelle, harte Belastung — 5 km, 10 km, Halbmarathon oder jede Distanz, die du kürzlich gerannt bist.",
      },
      {
        name: "Lies deine prognostizierten Zeiten",
        text: "Mit der Riegel-Formel sagt der Rechner Zielzeiten für 5 km, 10 km, Halbmarathon und Marathon voraus.",
      },
    ],
  },
};

export default de;

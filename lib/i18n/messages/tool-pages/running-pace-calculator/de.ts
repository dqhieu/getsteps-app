import type { RunningPaceCalculatorMessages } from "./en";

const de: RunningPaceCalculatorMessages = {
  meta: {
    title: "Lauf-Pace-Rechner – Pace, Tempo und Zielzeiten umrechnen",
    description:
      "Berechne deine Lauf-Pace in min/km oder min/mile, rechne zwischen Pace und Geschwindigkeit um und sage Zielzeiten für 5 km, 10 km, Halbmarathon und Marathon voraus.",
    keywords: [
      "Lauf-Pace-Rechner",
      "Pace-Rechner",
      "Minuten pro km Rechner",
      "Minuten pro Meile Rechner",
      "Zielzeit-Rechner",
      "Laufgeschwindigkeit Rechner",
      "5-km-Pace-Rechner",
    ],
    ogTitle: "Lauf-Pace-Rechner – Pace, Tempo und Zielzeiten umrechnen",
    ogDescription:
      "Berechne deine Lauf-Pace in min/km oder min/mile, rechne zwischen Pace und Geschwindigkeit um und sage Zielzeiten für 5 km, 10 km, Halbmarathon und Marathon voraus.",
    ogImageAlt: "Lauf-Pace-Rechner",
  },
  hero: {
    title: "Lauf-Pace-Rechner",
    subtitle:
      "Rechne zwischen Lauf-Pace, Geschwindigkeit und Zielzeit um. Für jede Distanz — vom 5 km bis zum Marathon.",
  },
  intro:
    "Gib Pace, Geschwindigkeit oder Zeit und Distanz ein, um sofort zwischen allen Laufwerten umzurechnen und deine Zielzeit für jede Distanz vom 5 km bis zum Marathon vorherzusagen.",
  calculator: {
    title: "Pace berechnen",
    tabs: {
      pace: "Pace",
      speed: "Tempo",
      timeDistance: "Zeit + Distanz",
    },
    paceLabel: "Pace (MM:SS)",
    paceHint: "Pace im Format Minuten:Sekunden eingeben (z. B. 5:30)",
    speedLabel: "Tempo",
    distanceLabel: "Distanz",
    finishTimeLabel: "Zielzeit (MM:SS oder H:MM:SS)",
    statsTitle: "Deine Laufwerte",
    pacePerKm: "Pace /km",
    pacePerMi: "Pace /mi",
    speedKmh: "Tempo km/h",
    speedMph: "Tempo mph",
    predictionsTitle: "Zielzeit-Prognosen",
    distanceColumn: "Distanz",
    finishTimeColumn: "Zielzeit",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Halbmarathon",
      marathon: "Marathon",
    },
  },
  faqTitle: "Lauf-Pace verstehen",
  faq: [
    {
      question: "Was ist eine gute Lauf-Pace?",
      answer:
        "Das hängt von deinem Niveau ab. Einsteiger laufen meist mit 7–9 min/km (11–14 min/mile). Fortgeschrittene liegen bei 5–7 min/km (8–11 min/mile). Ambitionierte Läufer halten unter 5 min/km (unter 8 min/mile). Elite-Marathonläufer halten Paces unter 3:00/km. Die beste Pace ist die, mit der du gefordert, aber nicht völlig erschöpft ins Ziel kommst.",
    },
    {
      question: "Wie rechne ich min/km in min/mile um?",
      answer:
        "Multipliziere deine min/km-Pace mit 1,60934, um min/mile zu erhalten. Eine Pace von 5:00/km entspricht 5:00 × 1,60934 = 8:03/mile. Umgekehrt teilst du die min/mile-Pace durch 1,60934. Dieser Rechner macht die Umrechnung automatisch, wenn du die Einheit wechselst.",
    },
    {
      question: "Welche Pace brauche ich für einen Halbmarathon unter 2 Stunden?",
      answer:
        "Für einen Halbmarathon (21,0975 km) unter 2 Stunden musst du schneller als 5:41/km (9:09/mile) laufen, das sind etwa 10,6 km/h (6,6 mph). Ein übliches Zwischenziel: Baue zuerst eine Basis mit konstanten Läufen bei 6:00–6:30/km auf, bevor du die 2-Stunden-Marke angehst.",
    },
    {
      question: "Was ist die durchschnittliche Lauf-Pace?",
      answer:
        "Die meisten Freizeitläufer laufen mit 6–8 min/km (10–13 min/mile). Die durchschnittliche 5-km-Zeit liegt bei etwa 28–35 Minuten, also einer Pace von 5:30–7:00/km. Beim Halbmarathon gruppieren sich die Zeiten um 2:00–2:20, beim Marathon um 4:20–4:45. Alter, Form und Strecke verändern das deutlich.",
    },
    {
      question: "Wie verbessere ich meine Lauf-Pace?",
      answer:
        "Kombiniere drei Trainingsformen: Intervalle (kurze, schnellere Abschnitte als Renntempo mit Trabpause), lange lockere Läufe (aerobe Basis im Unterhaltungstempo) und Tempoläufe (gehaltenes, angenehm hartes Tempo). Ein- bis zweimal pro Woche Krafttraining beugt Verletzungen vor. Beständigkeit zählt am meisten — laufe mindestens 3-mal pro Woche und steigere den Wochenumfang um höchstens 10 %.",
    },
  ],
  cta: {
    title: "Verfolge deinen Gesundheitsweg",
    description: "Verfolge deine Läufe und täglichen Schritte gemeinsam in der Steps-App.",
  },
  howTo: {
    name: "So benutzt du den Lauf-Pace-Rechner",
    description:
      "Rechne zwischen Pace, Geschwindigkeit und Zeit um — gib zwei von Distanz, Pace oder Zielzeit ein, der Rechner ergänzt den dritten Wert.",
    steps: [
      {
        name: "Wähle die gesuchte Größe",
        text: "Entscheide, ob du Pace, Zeit oder Distanz suchst. Die anderen beiden Werte gibst du ein.",
      },
      {
        name: "Gib die zwei bekannten Werte ein",
        text: "Distanz und Zeit ergeben die Pace, Pace und Distanz die Zielzeit und so weiter. Minuten pro km und Minuten pro Meile werden unterstützt.",
      },
      {
        name: "Lies das Ergebnis",
        text: "Der Rechner liefert den dritten Wert in metrischen und imperialen Einheiten plus eine Pace-Tabelle im Vergleich zu üblichen Renndistanzen.",
      },
    ],
  },
};

export default de;

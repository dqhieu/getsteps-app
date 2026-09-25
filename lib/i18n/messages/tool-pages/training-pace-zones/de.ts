import type { TrainingPaceZonesMessages } from "./en";

const de: TrainingPaceZonesMessages = {
  meta: {
    title: "Trainings-Pace-Zonen-Rechner — Laufzonen für deine Form",
    description:
      "Berechne deine 5 Trainings-Pace-Zonen aus einem aktuellen Rennergebnis. Exakte Pace-Bereiche für lockere Läufe, Tempo, Schwelle und VO2-max-Intervalle.",
    keywords: [
      "Trainings-Pace-Zonen",
      "Lauf-Pace-Zonen-Rechner",
      "Jack Daniels Laufzonen",
      "Tempolauf-Pace-Rechner",
      "lockerer Lauf Pace",
      "Intervall-Pace",
      "Schwellen-Pace-Rechner",
    ],
    ogTitle: "Trainings-Pace-Zonen-Rechner — Laufzonen für deine Form",
    ogDescription:
      "Berechne deine 5 Trainings-Pace-Zonen aus einem aktuellen Rennergebnis. Exakte Pace-Bereiche für lockere Läufe, Tempo, Schwelle und VO2-max-Intervalle.",
    ogImageAlt: "Trainings-Pace-Zonen-Rechner",
  },
  hero: {
    title: "Trainings-Pace-Zonen-Rechner",
    subtitle: "Hol dir persönliche Lauf-Trainingszonen aus deiner letzten Rennleistung.",
  },
  intro:
    "Gib eine aktuelle Rennzeit ein und berechne deine 5 Trainings-Pace-Zonen — vom lockeren Regenerationslauf bis zu intensiven Intervallen. Nutze sie, um dein Training zu strukturieren.",
  calculator: {
    distanceLabel: "Renndistanz",
    customDistanceLabel: "Distanz (km)",
    finishTimeLabel: "Zielzeit",
    hour: "Std",
    minute: "Min",
    second: "Sek",
    invalidTime: "Bitte gib eine gültige Rennzeit ein.",
    invalidDistance: "Bitte gib eine gültige Distanz ein.",
    calculate: "Trainingszonen berechnen",
    footnote:
      "Ein aktuelles Ergebnis im Rennaufwand liefert die genauesten Zonen. Sie verschieben sich mit deiner Form — rechne nach wichtigen Rennen neu.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Halbmarathon",
      marathon: "Marathon",
      custom: "Eigene",
    },
    zones: {
      easy: {
        name: "Locker / Regeneration",
        description: "Sehr leichter Aufwand. Volle Unterhaltung möglich. Baut die aerobe Basis auf und hilft der Regeneration.",
        usage: "~80 % aller Läufe",
      },
      aerobic: {
        name: "Aerobe Basis",
        description: "Bequeme, haltbare Pace. Atmung erhöht, aber gleichmäßig. Kernzone für den langen Lauf.",
        usage: "Wöchentlicher langer Lauf",
      },
      tempo: {
        name: "Tempo",
        description: "Angenehm hart. Atmung angestrengt. Steigerungsläufe und Marathon-Pace-Arbeit.",
        usage: "Steigerungsläufe",
      },
      threshold: {
        name: "Schwelle",
        description: "Hartes, gehaltenes Tempo. Laktatschwellentempo. Tempoläufe von 20–40 Min.",
        usage: "Tempoläufe (20–40 Min.)",
      },
      interval: {
        name: "Intervall / VO2",
        description: "Nahe am Maximum. Kurze Intervalle (400 m–1600 m). Entwickelt VO2 max und Schnelligkeit.",
        usage: "Bahnintervalle",
      },
    },
  },
  faqTitle: "Trainings-Pace-Zonen verstehen",
  faq: [
    {
      question: "Was sind Trainings-Pace-Zonen?",
      answer:
        "Trainings-Pace-Zonen sind Pace-Bereiche, die unterschiedliche Energiesysteme ansprechen. Jede Zone erzeugt eigene Anpassungen: lockere Zonen bauen die aerobe Basis und die Mitochondriendichte auf, härtere Zonen entwickeln Laktatschwelle und VO2 max. Die richtige Intensität für jede Einheit — statt immer mittelhart — gehört zu den wichtigsten Prinzipien im Ausdauertraining.",
    },
    {
      question: "Wie viele Pace-Zonen gibt es?",
      answer:
        "Die meisten Systeme nutzen 5 Zonen, manche Trainer bevorzugen 3 (locker, moderat, hart) oder 7 (wie bei Garmin und Polar). Das 5-Zonen-Modell — Locker, Aerob, Tempo, Schwelle und VO2-Intervall — ist für Freizeit- und Wettkampfläufer am praktikabelsten. Es passt zum VDOT-Rahmen von Jack Daniels und wird von der Sportwissenschaft gestützt.",
    },
    {
      question: "Welche Pace sollen meine lockeren Läufe haben?",
      answer:
        "Lockere Läufe (Zonen 1–2) sollen sich wirklich bequem anfühlen — du solltest ein volles Gespräch führen können, ohne zu schnaufen. Sie liegen typisch 60–90 Sekunden pro Kilometer langsamer als deine 5-km-Rennpace. Viele laufen die lockeren Tage zu hart und sammeln Ermüdung, die die harten Einheiten schlechter macht. Echtes lockeres Laufen ist langsamer, als die meisten denken, und genau dort entstehen die meisten aeroben Anpassungen.",
    },
    {
      question: "Wie oft soll ich in jeder Zone laufen?",
      answer:
        "Die 80/20-Regel, gestützt durch Forschung an Elite-Langstreckenläufern, empfiehlt etwa 80 % des Umfangs in den Zonen 1–2 und 20 % in den Zonen 3–5. Dieser polarisierte Ansatz bringt mehr als dauerhaft moderate Intensität. Eine typische Woche: 3–4 lockere Läufe, ein langer Lauf, eine Tempoeinheit (Zone 4) und eine Intervalleinheit (Zone 5) — in den richtigen Zonen, nicht nur „hart“.",
    },
    {
      question: "Wie verbessere ich meine Schwellen-Pace?",
      answer:
        "Die Laktatschwellen-Pace (Zone 4) verbessert sich am besten mit einem wöchentlichen Tempolauf von 20–40 Minuten bei angenehm hartem Aufwand — der Pace, die du im Rennen etwa eine Stunde halten könntest. Mit der Anpassung räumt der Körper Laktat effizienter ab, und du läufst schneller, bevor die Ermüdung kommt. Eine Schwelleneinheit pro Woche über 8–12 Wochen bringt meist messbare Verbesserungen über 10 km und Halbmarathon.",
    },
  ],
  cta: {
    title: "Verfolge Läufe und tägliche Schritte",
    description: "Verfolge deine Läufe und täglichen Schritte gemeinsam in der Steps-App.",
  },
  howTo: {
    name: "So bekommst du deine Trainings-Pace-Zonen",
    description:
      "Gib eine aktuelle Renndistanz und -zeit ein und erhalte 5 persönliche Pace-Zonen für lockere Läufe, Tempo, Schwelle und Intervalle.",
    steps: [
      {
        name: "Gib ein aktuelles Rennergebnis ein",
        text: "Eine harte 5-km-, 10-km- oder Halbmarathonzeit.",
      },
      {
        name: "Lies deine 5 Trainingszonen",
        text: "Der Rechner liefert Regenerations-, Ausdauer-, Tempo-, Schwellen- und Intervallpaces in min/km und min/mile.",
      },
    ],
  },
};

export default de;

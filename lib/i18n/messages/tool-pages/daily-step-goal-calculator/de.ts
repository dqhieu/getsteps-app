import type { DailyStepGoalCalculatorMessages } from "./en";

const de: DailyStepGoalCalculatorMessages = {
  meta: {
    title: "Tagesziel-Rechner für Schritte – persönliche Empfehlung",
    description:
      "Hol dir ein persönliches Tagesziel für Schritte, passend zu Alter, Aktivitätslevel und Gesundheitszielen. Finde heraus, wie viele Schritte du täglich gehen solltest.",
    keywords: [
      "tägliches Schrittziel",
      "wie viele Schritte sollte ich gehen",
      "Schrittziel nach Alter",
      "empfohlene Schritte pro Tag",
      "persönliches Schrittziel",
      "Schrittziel Rechner",
      "tägliches Gehziel",
      "Schritte zum Abnehmen",
    ],
    ogTitle: "Tagesziel-Rechner für Schritte",
    ogDescription:
      "Hol dir ein persönliches Tagesziel für Schritte, passend zu Alter, Aktivitätslevel und Gesundheitszielen.",
    ogImageAlt: "Tagesziel-Rechner für Schritte",
  },
  hero: {
    title: "Tagesziel-Rechner für Schritte",
    subtitle:
      "Hol dir eine persönliche Empfehlung für dein tägliches Schrittziel, basierend auf Alter, aktuellem Aktivitätslevel und Gesundheitszielen.",
  },
  resultCta: {
    headline: "Erreiche dein Tagesziel — automatisch",
    description:
      "Steps zählt deine Schritte im Hintergrund, ohne manuelles Eintragen, damit du das Ziel oben wirklich erreichst und eine dauerhafte Gewohnheit aufbaust.",
  },
  stickyCta: "Verfolge deine Schritte mit Steps",
  calculator: {
    yourProfile: "Dein Profil",
    age: "Alter",
    years: "Jahre",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    activityLevel: "Aktuelles Aktivitätslevel",
    activity: {
      sedentary: "Sitzend",
      lightly_active: "Leicht aktiv",
      active: "Aktiv",
      very_active: "Sehr aktiv",
    },
    healthGoal: "Gesundheitsziel",
    goals: {
      maintain: "Gesund bleiben",
      lose_weight: "Abnehmen",
      improve_fitness: "Fitness verbessern",
      train_event: "Auf ein Event trainieren",
    },
    currentSteps: "Aktuelle tägliche Schritte (optional)",
    currentStepsPlaceholder: "z. B. 5000",
    currentStepsHint: "Gib deine durchschnittlichen täglichen Schritte ein, für eine persönlichere Empfehlung",
    resultTitle: "Dein empfohlenes tägliches Schrittziel",
    stepsValue: "{steps} Schritte",
    perDay: "pro Tag",
    weeklyGoal: "Wochenziel",
    distancePerDay: "Distanz/Tag",
    caloriesPerDay: "Kalorien/Tag",
    kmValue: "{distance} km",
    approxCalories: "~{calories}",
    planTitle: "8-Wochen-Aufbauplan",
    planSubtitle: "Arbeite dich mit wöchentlichen Meilensteinen schrittweise an dein Ziel heran",
    weekLabel: "Woche {week}",
    tipsTitle: "Tipps, um dein Ziel zu erreichen",
    tips: {
      sedentary: [
        "Starte mit einem 10-Minuten-Spaziergang in der Mittagspause",
        "Nimm die Treppe statt des Aufzugs",
        "Parke weiter weg vom Eingang",
      ],
      lightlyActive: [
        "Baue einen 15-minütigen Morgenspaziergang in deine Routine ein",
        "Geh spazieren, während du telefonierst",
      ],
      loseWeight: [
        "Kombiniere Gehen mit einer ausgewogenen Ernährung für die besten Ergebnisse",
        "Halte ein zügiges Tempo, um mehr Kalorien zu verbrennen",
      ],
      improveFitness: [
        "Steigere dein Tempo nach und nach",
        "Baue etwas Steigung oder Treppen ein",
      ],
      trainEvent: [
        "Folge einem progressiven Trainingsplan",
        "Plane Ruhetage zur Erholung ein",
      ],
      general: [
        "Verfolge deine Schritte täglich, um motiviert zu bleiben",
        "Such dir eine Gehbegleitung, die dich dranbleiben lässt",
      ],
    },
  },
  info: {
    title: "Schrittziele verstehen",
    intro:
      "Das richtige Schrittziel hängt von deiner Situation ab. 10.000 Schritte sind ein beliebtes Ziel, aber Studien zeigen, dass Gesundheitsvorteile je nach Alter und Fitness schon bei anderen Mengen entstehen.",
    ageTitle: "Empfohlene Schritte nach Alter",
    ages: [
      { label: "Kinder und Jugendliche (unter 18):", steps: "12.000–15.000 Schritte/Tag" },
      { label: "Erwachsene (18–64):", steps: "10.000–12.000 Schritte/Tag" },
      { label: "Ältere (65+):", steps: "7.000–10.000 Schritte/Tag" },
    ],
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Sind 10.000 Schritte am Tag nötig?",
      answer:
        "Nein, 10.000 Schritte sind keine magische Zahl. Neuere Studien zeigen, dass deutliche Gesundheitsvorteile schon bei etwa 7.000–8.000 Schritten pro Tag beginnen. Wichtig ist, aktiver zu sein als bisher.",
    },
    {
      question: "Wie viele Schritte zum Abnehmen?",
      answer:
        "Zum Abnehmen sind 12.000+ Schritte täglich sinnvoll, zusammen mit einer ausgewogenen Ernährung. Das kann zusätzlich 400–600 Kalorien pro Tag verbrennen. Regelmäßigkeit zählt mehr als jeden Tag eine perfekte Zahl zu treffen.",
    },
    {
      question: "Wie erhöhe ich meine täglichen Schritte?",
      answer:
        "Lege jede Woche 1.000 Schritte auf deinen aktuellen Durchschnitt drauf. Mach Walking-Meetings, park weiter weg, nimm die Treppe statt des Aufzugs und plane kurze Gehpausen über den Tag.",
    },
    {
      question: "Was, wenn ich mein Ziel nicht schaffe?",
      answer:
        "Jede Steigerung der Aktivität hilft. Wenn dir das Ziel zu ehrgeizig vorkommt, setz es so, dass du es halten kannst. Das beste Ziel ist eines, das du dauerhaft schaffst. Konzentrier dich auf Fortschritt, nicht auf Perfektion.",
    },
  ],
  cta: {
    title: "Verfolge deine Schrittziele",
    description:
      "Lade die Steps-App herunter, um Tagesziele zu setzen, deinen Fortschritt zu sehen und gesunde Gehgewohnheiten aufzubauen.",
  },
  howTo: {
    name: "So findest du dein tägliches Schrittziel",
    description:
      "Gib Alter, Geschlecht, Gewicht, Größe, Aktivitätslevel und Ziel ein, um ein persönliches Tagesziel für Schritte zu erhalten.",
    steps: [
      {
        name: "Gib dein Profil ein",
        text: "Trage Alter, Geschlecht, Gewicht und Größe ein. Der Rechner schätzt damit deinen Grundumsatz.",
      },
      {
        name: "Wähle dein aktuelles Aktivitätslevel",
        text: "Wähle sitzend, leicht aktiv, mäßig aktiv oder sehr aktiv. Sei ehrlich — das Ziel startet da, wo du gerade bist.",
      },
      {
        name: "Wähle dein Ziel",
        text: "Zur Auswahl gehören allgemeine Fitness, Abnehmen, Herz-Kreislauf-Gesundheit und Langlebigkeit. Jede Option nutzt evidenzbasierte Schrittziele.",
      },
      {
        name: "Lies dein tägliches Schrittziel",
        text: "Der Rechner zeigt ein persönliches Tagesziel, ein Wochenziel und einen Aufbauplan, wenn du von einem niedrigeren Ausgangspunkt startest.",
      },
    ],
  },
};

export default de;

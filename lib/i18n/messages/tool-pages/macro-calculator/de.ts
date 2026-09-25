import type { MacroCalculatorMessages } from "./en";

const de: MacroCalculatorMessages = {
  meta: {
    title: "Makronährstoff-Rechner – Protein, Kohlenhydrate und Fett",
    description:
      "Berechne deine täglichen Makronährstoffe (Protein, Kohlenhydrate, Fett) für Abnehmen, Halten oder Muskelaufbau. Auf Basis deines TDEE und deiner Ziele.",
    keywords: [
      "Makro Rechner",
      "Makronährstoff Rechner",
      "Protein Rechner zum Abnehmen",
      "Makros berechnen",
      "wie viel Gramm Protein pro Tag",
      "Makronährstoffe berechnen",
      "IIFYM Rechner",
    ],
    ogTitle: "Makronährstoff-Rechner – Protein, Kohlenhydrate und Fett",
    ogDescription:
      "Berechne deine täglichen Makronährstoffe (Protein, Kohlenhydrate, Fett) für Abnehmen, Halten oder Muskelaufbau.",
  },
  hero: {
    title: "Makronährstoff-Rechner",
    subtitle:
      "Hol dir deine täglichen Ziele für Protein, Kohlenhydrate und Fett anhand deiner Körperdaten und deines Ziels.",
  },
  intro:
    "Gib deine Daten ein und wähle dein Ziel, um deine täglichen Makronährstoff-Ziele zu berechnen. Ob Diät, Erhalt oder Muskelaufbau: Die richtige Aufteilung macht den Unterschied.",
  calculator: {
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    weight: "Gewicht",
    height: "Größe (cm)",
    activityLevel: "Aktivitätslevel",
    activity: {
      sedentary: "Sitzend",
      light: "Leicht aktiv",
      moderate: "Mäßig aktiv",
      active: "Aktiv",
      very_active: "Sehr aktiv",
    },
    goal: "Ziel",
    goals: {
      weight_loss: "Abnehmen",
      maintenance: "Erhalt",
      muscle_gain: "Muskelaufbau",
    },
    calculate: "Makronährstoffe berechnen",
    dailyTarget: "Dein Tagesziel",
    cal: "cal",
    bmrTdee: "BMR: {bmr} · TDEE: {tdee}",
    protein: "Protein",
    carbs: "Kohlenhydrate",
    fat: "Fett",
    grams: "{grams}g",
  },
  info: {
    title: "Makronährstoffe verstehen",
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Was sind Makronährstoffe?",
      answer:
        "Makronährstoffe (Protein, Kohlenhydrate, Fett) sind die drei wichtigsten Kalorienquellen. Protein und Kohlenhydrate liefern 4 Kalorien pro Gramm, Fett 9 Kalorien pro Gramm. Die passende Balance für dein Ziel bestimmt die Körperzusammensetzung.",
    },
    {
      question: "Wie viel Protein sollte ich pro Tag essen?",
      answer:
        "Aktive Menschen zielen auf 1,6–2,4 g Protein pro kg Körpergewicht. Das obere Ende (2,2–2,4 g/kg) ist für Muskelaufbau oder in einem Kaloriendefizit empfohlen, um Muskelmasse zu erhalten.",
    },
    {
      question: "Soll ich Makros oder nur Kalorien zählen?",
      answer:
        "Makros zu tracken gibt mehr Kontrolle über die Körperzusammensetzung. Nur Kalorien zu zählen kann beim Abnehmen zu Muskelverlust führen, wenn das Protein zu niedrig ist — Makros sorgen dafür, dass du Fett verlierst und magere Masse behältst.",
    },
    {
      question: "Welche Makro-Aufteilung eignet sich zum Abnehmen?",
      answer:
        "Eine proteinreiche Aufteilung funktioniert am besten: etwa 35–40 % Protein zum Muskelerhalt, 25 % Fett für die Hormonbalance und 30–35 % Kohlenhydrate für Energie. Das Proteinziel hat Vorrang vor allem anderen.",
    },
    {
      question: "Wie viele Gramm Kohlenhydrate pro Tag?",
      answer:
        "Typisch 150–300 g für aktive Erwachsene. Beim Abnehmen eher das untere Ende, höher für Ausdauersport oder Muskelaufbau. Der Kohlenhydratbedarf skaliert mit dem Trainingsumfang.",
    },
  ],
  cta: {
    title: "Kombiniere deine Makros mit einem Schrittziel",
    description: "Kombiniere deine Makro-Ziele mit einem täglichen Schrittziel für bessere Ergebnisse.",
  },
  howTo: {
    name: "So berechnest du deine täglichen Makronährstoffe",
    description:
      "Gib deine Daten und dein Ziel ein, um tägliche Ziele für Protein, Kohlenhydrate und Fett in Gramm und Kalorien zu erhalten.",
    steps: [
      {
        name: "Gib deine Daten ein",
        text: "Alter, Geschlecht, Gewicht, Größe und Aktivitätslevel — dieselben Eingaben wie beim TDEE-Rechner.",
      },
      {
        name: "Wähle dein Ziel",
        text: "Diät (abnehmen), Erhalt oder Aufbau (Muskeln zunehmen). Jedes Ziel nutzt andere Makro-Verhältnisse.",
      },
      {
        name: "Lies deine Makro-Ziele",
        text: "Der Rechner liefert Gramm und Kalorien für Protein, Kohlenhydrate und Fett plus die täglichen Gesamtkalorien.",
      },
    ],
  },
};

export default de;

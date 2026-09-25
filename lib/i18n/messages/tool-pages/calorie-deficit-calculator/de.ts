import type { CalorieDeficitMessages } from "./en";

const de: CalorieDeficitMessages = {
  meta: {
    title: "Kaloriendefizit-Rechner – Wie viel essen, um abzunehmen",
    description:
      "Berechne dein tägliches Kaloriendefizit, um dein Abnehmziel sicher zu erreichen. Du bekommst deinen TDEE, die Zielkalorien und empfohlene tägliche Schritte.",
    keywords: [
      "Kaloriendefizit Rechner",
      "wie viele Kalorien zum Abnehmen",
      "Kaloriendefizit zum Abnehmen",
      "tägliches Kalorienziel Rechner",
      "TDEE zum Abnehmen",
      "wie groß sollte mein Kaloriendefizit sein",
    ],
    ogTitle: "Kaloriendefizit-Rechner – Wie viel essen, um abzunehmen",
    ogDescription:
      "Berechne dein tägliches Kaloriendefizit, um dein Abnehmziel sicher zu erreichen. Du bekommst deinen TDEE, die Zielkalorien und empfohlene tägliche Schritte.",
    ogImageAlt: "Kaloriendefizit-Rechner",
  },
  hero: {
    title: "Kaloriendefizit-Rechner",
    subtitle:
      "Finde genau heraus, wie viele Kalorien du pro Tag essen solltest, um dein Zielgewicht sicher und dauerhaft zu erreichen.",
  },
  intro:
    "Gib deine aktuellen Werte, dein Zielgewicht und den Zeitraum ein, um dein tägliches Kalorienziel, das nötige Defizit und die zusätzlichen Schritte zu berechnen, die dich schneller ans Ziel bringen.",
  calculator: {
    details: "Deine Angaben",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    years: "Jahre",
    currentWeight: "Aktuelles Gewicht",
    height: "Größe",
    activity: "Aktivitätslevel",
    activityLevels: {
      sedentary: "Sitzend",
      light: "Leicht aktiv",
      moderate: "Mäßig aktiv",
      active: "Aktiv",
      very_active: "Sehr aktiv",
    },
    goalWeight: "Zielgewicht",
    timeframe: "Zeitraum",
    weeks: "{count} Wo.",
    plan: "Dein Plan",
    atGoalTitle: "Du hast dein Ziel schon erreicht!",
    atGoalBody: "Halte dein Gewicht mit ausgewogener Ernährung und regelmäßiger Bewegung.",
    tdee: "Dein TDEE (Erhaltung)",
    deficit: "Nötiges Tagesdefizit",
    target: "Tägliche Zielkalorien",
    extraSteps: "Zusätzliche Schritte",
    stepsHint: "um das Defizit durch Gehen zu verbrennen",
    calPerDay: "cal/Tag",
    stepsPerDay: "Schritte/Tag",
    unsafe:
      "Warnung: Dieses Defizit liegt über {max} cal/Tag. Verlängere den Zeitraum für ein sichereres Ergebnis.",
    belowMin:
      "Warnung: Deine Zielkalorien liegen unter dem empfohlenen Minimum von {min} cal/Tag. Sprich mit einer medizinischen Fachperson.",
    safe: "Das ist ein sicheres, haltbares Defizit.",
  },
  info: {
    title: "Was ist ein Kaloriendefizit?",
    body: "Ein Kaloriendefizit entsteht, wenn du weniger Kalorien aufnimmst, als dein Körper verbrennt. Mit der Zeit greift der Körper auf gespeichertes Fett zurück, und du nimmst ab. Entscheidend ist das richtige Defizit — groß genug für Ergebnisse, aber nicht so groß, dass es unhaltbar oder ungesund wird.",
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Wie groß sollte mein Kaloriendefizit sein?",
      answer:
        "Ein Defizit von 500–750 Kalorien pro Tag ist meist haltbar und führt zu etwa 0,5–0,75 kg Fettverlust pro Woche. Defizite über 1.000 cal/Tag sind nicht zu empfehlen — sie können Muskelabbau und Nährstoffmangel auslösen und lassen sich schlecht durchhalten.",
    },
    {
      question: "Wie lange dauert es, 1 kg abzunehmen?",
      answer:
        "Da 1 kg Fett etwa 7.700 Kalorien enthält, dauert es bei 500 cal/Tag ungefähr 15 Tage, 1 kg zu verlieren. Bei 1.000 cal/Tag sind es etwa 8 Tage. Die tatsächlichen Ergebnisse hängen von Wassereinlagerungen, Muskelaufbau und metabolischer Anpassung ab.",
    },
    {
      question: "Was ist der TDEE?",
      answer:
        "TDEE steht für Gesamtenergieumsatz — die Kalorien, die dein Körper pro Tag verbrennt, inklusive Grundumsatz (BMR) und aller Bewegung. Das ist dein Erhaltungsniveau: Wer auf TDEE-Höhe isst, verändert sein Gewicht nicht.",
    },
    {
      question: "Kann ich nur durch Gehen abnehmen?",
      answer:
        "Ja! 10.000 zusätzliche Schritte pro Tag verbrennen etwa 400 Extra-Kalorien und erzeugen damit allein ein spürbares Defizit. Gehen ist gelenkschonend, dauerhaft machbar und lässt sich gut mit einer moderaten Ernährungsumstellung kombinieren.",
    },
    {
      question: "Ist es sicher, unter 1.200 Kalorien zu essen?",
      answer:
        "In der Regel nein. Sehr niedrige Zufuhr (unter 1.200 bei Frauen, unter 1.500 bei Männern) kann Muskelabbau, Nährstoffmangel, Hormonstörungen und einen langsameren Stoffwechsel auslösen. Liegt dein Ziel darunter, verlängere den Zeitraum oder hol dir medizinischen Rat.",
    },
  ],
  cta: {
    title: "Begleite deinen Weg",
    description: "Geh mehr Schritte am Tag und vergrößere dein Kaloriendefizit natürlich mit der Steps-App.",
  },
  howTo: {
    name: "So berechnest du ein Kaloriendefizit zum Abnehmen",
    description:
      "Gib deinen TDEE (oder deine Werte) und das gewünschte Abnehmtempo pro Woche ein, um ein tägliches Kalorienziel zu bekommen.",
    steps: [
      {
        name: "TDEE oder Körperwerte eingeben",
        text: "Füge einen TDEE ein, den du schon kennst, oder gib Alter, Geschlecht, Gewicht, Größe und Aktivitätslevel ein.",
      },
      {
        name: "Abnehmtempo wählen",
        text: "0,25 bis 1 kg pro Woche ist der haltbare Bereich. Schnellere Raten erhöhen das Risiko von Muskelabbau.",
      },
      {
        name: "Tägliches Kalorienziel ablesen",
        text: "Der Rechner zeigt das tägliche Kalorienziel und die Größe des Defizits gegenüber dem Erhaltungsumsatz.",
      },
    ],
  },
};

export default de;

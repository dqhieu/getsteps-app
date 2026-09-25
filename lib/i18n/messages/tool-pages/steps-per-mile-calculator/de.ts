import type { StepsPerMileCalculatorMessages } from "./en";

const de: StepsPerMileCalculatorMessages = {
  meta: {
    title: "Wie viele Schritte sind eine Meile? Rechner [kostenlos]",
    description:
      "Wie viele Schritte sind eine Meile? Etwa 2.000–2.500, je nach Größe und Tempo. Persönliche Schritte pro Meile und pro km — mit Tabelle für Gehen und Laufen.",
    keywords: [
      "Schritte pro Meile",
      "Schritte pro km",
      "wie viele Schritte sind eine Meile",
      "Schritte in einer Meile",
      "Schritte in einem Kilometer",
      "Schrittlängen-Rechner",
      "Gehschritte pro Meile",
      "Schritte in Meilen",
      "Meilen in Schritte",
    ],
    ogTitle: "Wie viele Schritte sind eine Meile? Rechner [kostenlos]",
    ogDescription:
      "Wie viele Schritte sind eine Meile? 2.000–2.500 je nach deiner Größe. Persönliche Schritte pro Meile und pro km.",
    ogImageAlt: "Schritte-pro-Meile-Rechner",
  },
  hero: {
    title: "Wie viele Schritte sind eine Meile?",
    subtitle:
      "Wie viele Schritte sind eine Meile? Für die meisten Erwachsenen etwa 2.000–2.500. Gib deine Größe ein und erhalte deine Schritte pro Meile und pro km.",
  },
  resultCta: {
    headline: "Kenne deine echten Schritte pro Meile",
    description:
      "Steps zählt deine Schritte und deine Distanz automatisch, damit du dein echtes Tempo und deine Schrittlänge siehst, nicht nur eine Schätzung.",
  },
  stickyCta: "Verfolge deine Schritte mit Steps",
  calculator: {
    yourInformation: "Deine Angaben",
    height: "Größe",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    stepLength: "Deine geschätzte Schrittlänge: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} Zoll)",
    stepsPerMile: "Schritte pro Meile",
    stepsPerKm: "Schritte pro Kilometer",
    stepsUnit: "Schritte",
    referenceTitle: "Distanz-Tabelle",
    referenceSubtitle: "Schritte für gängige Distanzen, basierend auf deiner Schrittlänge",
    colDistance: "Distanz",
    colSteps: "Schritte",
    distances: ["1 km", "1 Meile", "5 km", "5 Meilen", "10 km", "Halbmarathon", "Marathon"],
  },
  info: {
    title: "So berechnen wir die Schritte pro Meile",
    intro:
      "Wie viele Schritte du pro Meile machst, hängt von deiner Schrittlänge ab, vor allem von Größe und Geschlecht. Größere Menschen haben meist eine längere Schrittlänge und brauchen weniger Schritte für dieselbe Distanz.",
    formulaTitle: "Die Formel",
    stepLengthLabel: "Schrittlänge:",
    stepLengthFormula: "Größe (cm) × 0,415 (männlich) oder 0,413 (weiblich)",
    perKmLabel: "Schritte pro km:",
    perKmFormula: "100.000 ÷ Schrittlänge (cm)",
    perMileLabel: "Schritte pro Meile:",
    perMileFormula: "Schritte pro km × 1,609",
    heightTitle: "Durchschnittliche Schritte nach Größe",
    heights: [
      { height: "5'0\" (152 cm):", steps: "~2.500 Schritte/Meile" },
      { height: "5'6\" (168 cm):", steps: "~2.300 Schritte/Meile" },
      { height: "6'0\" (183 cm):", steps: "~2.100 Schritte/Meile" },
      { height: "6'6\" (198 cm):", steps: "~1.950 Schritte/Meile" },
    ],
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Wie viele Schritte sind eine Meile?",
      answer:
        "Im Durchschnitt sind eine Meile etwa 2.000–2.500 Schritte. Die genaue Zahl hängt von deiner Größe und Schrittlänge ab. Kleinere Menschen machen mehr Schritte, größere weniger.",
    },
    {
      question: "Wie viele Schritte sind ein Kilometer?",
      answer:
        "Im Durchschnitt sind ein Kilometer etwa 1.250–1.550 Schritte. Das sind ungefähr 62 % der Schritte einer Meile, weil ein Kilometer etwa 0,62 Meilen entspricht.",
    },
    {
      question: "Beeinflusst das Gehtempo die Schritte pro Meile?",
      answer:
        "Ja, etwas. Wenn du schneller gehst oder läufst, wird deine Schrittlänge länger und du brauchst weniger Schritte pro Meile. Bei den meisten Gehtempi bleibt der Unterschied aber klein.",
    },
    {
      question: "Wie messe ich meine echte Schrittlänge?",
      answer:
        "Geh eine bekannte Strecke (zum Beispiel 30 Meter) in deinem normalen Tempo und zähle die Schritte. Teile die Strecke durch die Schrittzahl, um deine durchschnittliche Schrittlänge zu erhalten. Du kannst auch einen Startpunkt markieren, 10 Schritte gehen und die Distanz messen.",
    },
  ],
  cta: {
    title: "Verfolge deine Schritte und Distanz",
    description:
      "Lade die Steps-App herunter und tracke Schritte und Distanz automatisch auf deinem iPhone und deiner Apple Watch.",
  },
  howTo: {
    name: "So berechnest du die Schritte pro Meile",
    description:
      "Gib deine Größe und dein Gehtempo ein, um zu schätzen, wie viele Schritte du in einer Meile (und in einem Kilometer) machst.",
    steps: [
      {
        name: "Gib deine Größe ein",
        text: "Größere Menschen legen pro Schritt mehr Weg zurück, deshalb passt die Größe das Ergebnis an.",
      },
      {
        name: "Wähle ein Tempo",
        text: "Zügiges Gehen und Laufen haben eine längere Schrittlänge als langsames Gehen. Wähle das Tempo, das dich interessiert.",
      },
      {
        name: "Lies die Schritte pro Meile",
        text: "Das Ergebnis zeigt Schritte pro Meile und pro Kilometer, basierend auf deiner persönlichen Schrittlänge in diesem Tempo.",
      },
    ],
  },
};

export default de;

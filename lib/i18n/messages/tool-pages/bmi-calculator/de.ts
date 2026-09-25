import type { BmiCalculatorMessages } from "./en";

const de: BmiCalculatorMessages = {
  meta: {
    title: "BMI-Rechner – Berechne deinen Body-Mass-Index",
    description:
      "Berechne deinen Body-Mass-Index (BMI) und finde heraus, ob du im gesunden Gewichtsbereich liegst. Mit persönlichen Gesundheitstipps und Schrittempfehlungen.",
    keywords: [
      "BMI-Rechner",
      "Body-Mass-Index",
      "BMI berechnen",
      "Idealgewicht-Rechner",
      "BMI-Tabelle",
      "Gewicht zur Größe",
      "BMI-Kategorien",
      "gesunder BMI",
    ],
    ogTitle: "BMI-Rechner",
    ogDescription:
      "Berechne deinen Body-Mass-Index (BMI) und finde heraus, ob du im gesunden Gewichtsbereich liegst.",
  },
  hero: {
    title: "BMI-Rechner",
    subtitle:
      "Berechne deinen Body-Mass-Index, um deine Gewichtsklasse zu verstehen und persönliche Gesundheitsempfehlungen zu erhalten.",
  },
  calculator: {
    measurements: "Deine Maße",
    weight: "Gewicht",
    height: "Größe",
    yourBmi: "Dein BMI",
    healthyRange: "Gesunder Gewichtsbereich",
    recommendedSteps: "Empfohlene tägliche Schritte",
    aboveRange: "Du liegst {amount} über dem gesunden Gewichtsbereich für deine Größe.",
    belowRange: "Du liegst {amount} unter dem gesunden Gewichtsbereich für deine Größe.",
    categoriesTitle: "BMI-Kategorien",
    categoriesSubtitle: "BMI-Klassifikation der Weltgesundheitsorganisation für Erwachsene",
    categoryColumn: "Kategorie",
    rangeColumn: "BMI-Bereich",
    categories: {
      underweight: "Untergewicht",
      normal: "Normalgewicht",
      overweight: "Übergewicht",
      "obese-1": "Adipositas Grad I",
      "obese-2": "Adipositas Grad II",
      "obese-3": "Adipositas Grad III",
    },
  },
  info: {
    title: "Den BMI verstehen",
    intro:
      "Der Body-Mass-Index (BMI) ist eine einfache Berechnung aus Größe und Gewicht, mit der sich der Körperfettanteil schätzen und beurteilen lässt, ob dein Gewicht im gesunden Bereich liegt. Er ist ein weit verbreitetes Screening-Instrument für Gewichtsklassen.",
    formulaTitle: "Die Formel",
    formula: "BMI = Gewicht (kg) ÷ Größe (m)²",
    exampleLabel: "Beispiel:",
    example: "Eine Person mit 70 kg und 1,75 m Größe hat einen BMI = 70 ÷ (1,75 × 1,75) = 22,9",
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Was ist ein gesunder BMI?",
      answer:
        "Ein BMI zwischen 18,5 und 24,9 gilt für die meisten Erwachsenen als gesund. Der BMI berücksichtigt jedoch weder Muskelmasse noch Knochendichte oder Fettverteilung und ist daher nur ein Faktor bei der Beurteilung deiner Gesundheit.",
    },
    {
      question: "Ist der BMI für alle genau?",
      answer:
        "Bei Sportlern mit viel Muskelmasse, älteren Menschen oder bestimmten Körpertypen kann der BMI ungenau sein. Er ist ein nützliches Screening-Instrument, sollte aber zusammen mit anderen Gesundheitswerten betrachtet werden.",
    },
    {
      question: "Wie kann ich meinen BMI verbessern?",
      answer:
        "Liegt dein BMI außerhalb des gesunden Bereichs, setze auf nachhaltige Veränderungen: regelmäßige Bewegung (etwa tägliches Gehen), ausgewogene Ernährung und ausreichend Schlaf. Lass dich für persönliche Empfehlungen ärztlich beraten.",
    },
    {
      question: "Wie viele Schritte sollte ich je nach BMI gehen?",
      answer:
        "Um einen gesunden BMI zu halten, peile 10.000 Schritte pro Tag an. Möchtest du abnehmen, sind 12.000 oder mehr sinnvoll. Starte bei deinem aktuellen Niveau und steigere dich pro Woche um 1.000 Schritte.",
    },
    {
      question: "Ist der BMI bei Kindern anders?",
      answer:
        "Ja, der BMI von Kindern und Jugendlichen wird anders berechnet und mit alters- und geschlechtsspezifischen Perzentilen verglichen. Dieser Rechner ist für Erwachsene ab 18 Jahren gedacht. Wende dich bei Kindern an eine Kinderärztin oder einen Kinderarzt.",
    },
  ],
  cta: {
    title: "Begleite deine Gesundheitsreise",
    description:
      "Lade die Steps-App, um deine tägliche Aktivität zu erfassen und auf ein gesünderes Gewicht hinzuarbeiten.",
  },
  howTo: {
    name: "So berechnest du deinen BMI",
    description:
      "Der Body-Mass-Index (BMI) schätzt anhand von Größe und Gewicht deine Körperkategorie ein – nach den Erwachsenen-Kategorien der CDC.",
    steps: [
      {
        name: "Gib deine Größe ein",
        text: "Gib deine Größe in Zentimetern oder in Fuß/Zoll ein.",
      },
      {
        name: "Gib dein Gewicht ein",
        text: "Gib dein Gewicht in Kilogramm oder Pfund ein.",
      },
      {
        name: "Lies deinen BMI und deine Kategorie ab",
        text: "Der Rechner zeigt deinen BMI-Wert und die CDC-Gesundheitskategorie (Untergewicht, Normalgewicht, Übergewicht, Adipositas) mit einer kurzen Beschreibung.",
      },
    ],
  },
};

export default de;

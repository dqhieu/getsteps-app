import type { BodyFatCalculatorMessages } from "./en";

const de: BodyFatCalculatorMessages = {
  meta: {
    title: "Körperfettanteil-Rechner – Navy-Methode (ohne Gerät)",
    description:
      "Berechne deinen Körperfettanteil mit der genauen US-Navy-Methode. Trag einfach deine Maße ein — keine Waage und kein Studio-Gerät nötig.",
    keywords: [
      "körperfett rechner",
      "körperfettanteil berechnen",
      "navy methode körperfett",
      "körperfettanteil messen",
      "körperfettanteil männer",
      "körperfettanteil frauen",
    ],
    ogTitle: "Körperfettanteil-Rechner – Navy-Methode",
    ogDescription:
      "Berechne deinen Körperfettanteil mit der genauen US-Navy-Methode. Trag einfach deine Maße ein — keine Waage und kein Studio-Gerät nötig.",
    ogImageAlt: "Körperfettanteil-Rechner",
  },
  hero: {
    title: "Körperfettanteil-Rechner",
    subtitle:
      "Berechne deinen Körperfettanteil genau mit der US-Navy-Methode — ein Maßband reicht.",
  },
  intro:
    "Gib Geschlecht, Größe und Körperumfänge ein und berechne den Körperfettanteil mit der bewährten US-Navy-Formel — ohne Körperfettwaage und ohne Studio-Gerät.",
  calculator: {
    measurements: "Deine Maße",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    height: "Größe",
    weight: "Gewicht",
    circumferenceUnit: "Einheit für Umfänge",
    waist: "Taillenumfang",
    neck: "Halsumfang",
    hip: "Hüftumfang",
    measurementHint: "Miss jede Stelle an der schmalsten Stelle.",
    invalidTitle: "Prüfe deine Maße",
    invalidDetail: "Der Taillenumfang muss größer sein als der Halsumfang.",
    yourBodyFat: "Dein Körperfett",
    percent: "{value} %",
    fatMass: "Fettmasse",
    leanMass: "Magermasse",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "Empfohlene Schritte pro Tag",
    categoriesTitle: "Körperfett-Kategorien",
    categoriesSubtitleMale: "Einteilung des American Council on Exercise (ACE) für Männer",
    categoriesSubtitleFemale: "Einteilung des American Council on Exercise (ACE) für Frauen",
    categoryColumn: "Kategorie",
    rangeColumn: "Körperfett-Bereich",
    categories: {
      essential: "Essenzielles Fett",
      athletic: "Athletisch",
      fitness: "Fitness",
      acceptable: "Akzeptabel",
      obese: "Adipös",
    },
  },
  info: {
    title: "Körperfettanteil verstehen",
    intro:
      "Der Körperfettanteil sagt mehr über deine Fitness aus als der BMI allein. Der BMI kennt nur Gewicht und Größe, der Körperfettanteil trennt Fettmasse von Magermasse (Muskeln, Knochen, Wasser).",
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Was ist ein gesunder Körperfettanteil?",
      answer:
        "Bei Männern gelten 14–17 % als Fitness-Bereich und 18–24 % als akzeptabel. Bei Frauen liegt Fitness bei 21–24 % und akzeptabel bei 25–31 %. Athletinnen und Athleten liegen meist darunter — 6–13 % bei Männern und 14–20 % bei Frauen.",
    },
    {
      question: "Wie genau ist die Navy-Methode?",
      answer:
        "Die US-Navy-Methode liegt typischerweise 3–4 % neben einem DEXA-Scan und gehört damit zu den genauesten Maßband-Methoden ohne Gerät. Sorgfältige, gleichbleibende Messungen machen das Ergebnis besser.",
    },
    {
      question: "Wo messe ich den Taillenumfang?",
      answer:
        "Miss die Taille an der schmalsten Stelle, meist auf Nabelhöhe oder knapp darüber. Halte das Maßband parallel zum Boden und miss nach normalem Ausatmen — den Bauch nicht einziehen.",
    },
    {
      question: "Was ist der Unterschied zwischen Körperfett und BMI?",
      answer:
        "Der BMI nutzt nur Größe und Gewicht und kann Fett nicht von Muskeln trennen. Ein muskulöser Athlet kann einen hohen BMI und wenig Körperfett haben. Der Körperfettanteil zeigt die tatsächliche Körperzusammensetzung und das Gesundheitsrisiko genauer.",
    },
    {
      question: "Wie senke ich den Körperfettanteil?",
      answer:
        "Kombiniere regelmäßiges Gehen oder Cardio mit Krafttraining und einem moderaten Kaloriendefizit. Ziel sind 0,5–1 kg Fettverlust pro Woche. 10.000+ Schritte am Tag steigern den Verbrauch, ohne dass du hart trainieren musst.",
    },
  ],
  cta: {
    title: "Begleite deinen Weg zu mehr Gesundheit",
    description: "Verbinde deine Ziele zur Körperzusammensetzung mit dem täglichen Schrittetracking in Steps.",
  },
  howTo: {
    name: "So berechnest du den Körperfettanteil (Navy-Methode)",
    description:
      "Gib Hals-, Taillen- und Hüftumfang, Größe und Geschlecht ein, um den Körperfettanteil mit der US-Navy-Formel zu schätzen.",
    steps: [
      {
        name: "Miss deinen Hals",
        text: "Miss den Halsumfang knapp unter dem Adamsapfel mit einem weichen Maßband.",
      },
      {
        name: "Miss deine Taille",
        text: "Bei Männern auf Nabelhöhe messen. Bei Frauen an der schmalsten Stelle der Taille.",
      },
      {
        name: "Miss die Hüfte (nur Frauen)",
        text: "Frauen ergänzen eine Messung an der breitesten Stelle der Hüfte.",
      },
      {
        name: "Maße und Größe eintragen",
        text: "Trag alle Umfänge plus deine Größe ein. Der Rechner kennt metrische und imperiale Einheiten.",
      },
      {
        name: "Körperfettanteil und Kategorie ablesen",
        text: "Du siehst den geschätzten Körperfettanteil und die ACE-Kategorie (essenzielles Fett, Athleten, Fitness, Durchschnitt, adipös).",
      },
    ],
  },
};

export default de;

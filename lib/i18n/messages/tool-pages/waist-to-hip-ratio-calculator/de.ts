import type { WaistToHipRatioCalculatorMessages } from "./en";

const de: WaistToHipRatioCalculatorMessages = {
  meta: {
    title: "Taille-Hüft-Verhältnis-Rechner: WHO-Risikobänder",
    description:
      "Berechne dein Taille-Hüft-Verhältnis nach WHO-Schwellen. Das Risiko steigt über 0,90 bei Männern und 0,85 bei Frauen. Kostenloser Rechner mit Taillenumfang-Check.",
    keywords: [
      "Taille Hüft Verhältnis Rechner",
      "WHR Rechner",
      "Taille Hüft Verhältnis",
      "Körperform Rechner",
      "viszerales Fett Rechner",
      "Taillenumfang Risiko",
      "Apfelform oder Birnenform",
      "WHO Taille Hüft Verhältnis",
    ],
    ogTitle: "Taille-Hüft-Verhältnis-Rechner: WHO-Risikobänder",
    ogDescription:
      "Berechne dein Taille-Hüft-Verhältnis und sieh, wo es gegenüber den kardiovaskulären WHO-Schwellen liegt.",
  },
  hero: {
    title: "Taille-Hüft-Verhältnis-Rechner",
    subtitle:
      "Zwei Maßbandmessungen sagen das kardiovaskuläre Risiko besser voraus als der BMI, weil sie zeigen, wo der Körper Fett speichert, nicht nur wie viel.",
  },
  calculator: {
    measurements: "Deine Maße",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    genderHint: "Die WHO nutzt unterschiedliche Risikoschwellen für Männer und Frauen.",
    waistHip: "Taille und Hüfte",
    waist: "Taille",
    hip: "Hüfte",
    howToMeasure: "So misst du",
    waistLabel: "Taille:",
    waistMeasure:
      "die schmalste Stelle zwischen der untersten Rippe und dem oberen Rand des Hüftknochens, am Ende einer normalen Ausatmung.",
    hipLabel: "Hüfte:",
    hipMeasure: "die breiteste Stelle um das Gesäß.",
    tapeMeasure:
      "Halte das Band waagerecht und anliegend, ohne die Haut einzudrücken. Miss auf nackter Haut oder dünner Kleidung.",
    calculate: "Mein Verhältnis berechnen",
    results: "Deine Ergebnisse",
    ratioLabel: "Taille-Hüft-Verhältnis",
    waistCheck: "Taillenumfang-Check",
    targetWaist:
      "Bei deinem aktuellen Hüftumfang würde eine Taille von {waist} oder weniger dich ins Band mit niedrigem Risiko bringen.",
    bandsTitle: "WHO-Risikobänder für {group}",
    men: "Männer",
    women: "Frauen",
    groupMen: "Männer",
    groupWomen: "Frauen",
    rangeAndAbove: "{min} und darüber",
    rangeBelow: "unter {max}",
    rangeBetween: "{min} – {max}",
    disclaimer:
      "Das Taille-Hüft-Verhältnis ist ein Screening, keine Diagnose. Es erfasst, wo das Fett sitzt, nicht wie viel da ist, und sagt das kardiovaskuläre Risiko deshalb besser voraus als der BMI allein. Sprich ein Ergebnis im mittleren oder hohen Band mit einer Ärztin oder einem Arzt.",
    levels: {
      low: {
        label: "Niedriges Risiko",
        description:
          "Das Fett ist nicht um den Bauch konzentriert. Das ist das Muster mit dem niedrigsten Risiko für {group}.",
      },
      moderate: {
        label: "Mittleres Risiko",
        description:
          "Etwas zentrale Fettansammlung. Verbunden mit einem messbaren Anstieg des Risikos für Herz-Kreislauf-Erkrankungen und Typ-2-Diabetes.",
      },
      high: {
        label: "Hohes Risiko",
        description:
          "Deutlich erhöhtes Risiko für Herz-Kreislauf-Erkrankungen und Typ-2-Diabetes. Ein Gespräch mit einer Ärztin oder einem Arzt lohnt sich.",
      },
    },
    waistVerdict: {
      high: "Ein Taillenumfang von {waist} cm liegt auf oder über der Marke von {threshold} cm, ab der die WHO ein deutlich erhöhtes Risiko für {group} sieht.",
      moderate:
        "Ein Taillenumfang von {waist} cm liegt über der Marke von {threshold} cm, ab der die WHO ein erhöhtes Risiko für {group} sieht.",
      low: "Ein Taillenumfang von {waist} cm liegt unter der Schwelle von {threshold} cm, die die WHO für {group} nutzt.",
    },
  },
  resultCta: {
    headline: "Gehen trifft das Fett, das hier gemessen wird",
    description:
      "Regelmäßige aerobe Aktivität senkt viszerales Fett gezielt, auch bei stabilem Körpergewicht. Steps erfasst deine automatisch, damit die Gewohnheit bleibt.",
  },
  sticky: "Verfolge deine Schritte mit Steps",
  info: {
    title: "So berechnen wir dein Risikoband",
    intro:
      "Die Rechnung ist trivial. Der Wert steckt in den Schwellen aus der WHO-Expertenkonsultation 2008 zu Taillenumfang und Taille-Hüft-Verhältnis.",
    formulaTitle: "Formel und Schwellen",
    formulas: [
      { name: "WHR", body: "Taillenumfang ÷ Hüftumfang" },
      { name: "Männer:", body: "niedrig unter 0,90, mittel 0,90 bis 0,99, hoch 1,0 und darüber" },
      { name: "Frauen:", body: "niedrig unter 0,80, mittel 0,80 bis 0,84, hoch 0,85 und darüber" },
      { name: "Nur Taille (Männer):", body: "erhöhtes Risiko ab 94 cm, deutlich erhöht ab 102 cm" },
      { name: "Nur Taille (Frauen):", body: "erhöhtes Risiko ab 80 cm, deutlich erhöht ab 88 cm" },
      {
        name: "Beispiel:",
        body: "ein Mann mit 90 cm Taille und 100 cm Hüfte erreicht 0,90, den unteren Rand des mittleren Bands.",
      },
    ],
    conflict:
      "Der Taillenumfang-Check läuft unabhängig vom Verhältnis, weil beide auseinanderlaufen können. Breite Hüften können ein Verhältnis ins niedrige Band ziehen, während die Taille allein noch auffällig wäre. Wenn sie sich widersprechen, handle nach der vorsichtigeren Lesart.",
    screening:
      "Das ist ein Screening, keine Diagnose. Ein Ergebnis im mittleren oder hohen Band solltest du mit einer Ärztin oder einem Arzt besprechen, besonders zusammen mit Blutdruck, Nüchternblutzucker oder Blutfetten.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Was ist ein gesundes Taille-Hüft-Verhältnis?",
      answer:
        "Die WHO setzt niedriges Risiko unter 0,90 bei Männern und unter 0,80 bei Frauen. Zwischen 0,90 und 0,99 bei Männern oder 0,80 und 0,84 bei Frauen ist das Risiko mittel. Ab 1,0 bei Männern und 0,85 bei Frauen ist es deutlich erhöht. Die Schwellen der Frauen liegen niedriger, weil sie von Natur aus mehr Fett an Hüfte und Oberschenkeln tragen: Dasselbe Verhältnis bedeutet bei einer Frau mehr Bauchfett als bei einem Mann.",
    },
    {
      question: "Warum zählt das Taille-Hüft-Verhältnis mehr als der BMI?",
      answer:
        "Weil es sieht, wo das Fett sitzt, und der BMI das nicht kann. Viszerales Fett um die Bauchorgane ist stoffwechselaktiv: Es gibt Entzündungssignale und freie Fettsäuren direkt in den Pfortaderkreislauf ab. Fett an Hüfte und Oberschenkeln verhält sich nicht so. Zwei Menschen mit identischem BMI können je nach Verteilung sehr unterschiedliches Risiko tragen, und das WHR erfasst das.",
    },
    {
      question: "Wie messe ich Taille und Hüfte richtig?",
      answer:
        "Die Taille an der schmalsten Stelle zwischen der untersten Rippe und dem oberen Rand des Hüftknochens, am Ende einer normalen Ausatmung, nicht eingezogen. Die Hüfte an der breitesten Stelle um das Gesäß. Halte das Band waagerecht und anliegend, ohne die Haut einzudrücken, auf nackter Haut oder dünner Kleidung. Eine andere Höhe ist die häufigste Fehlerquelle, also nimm jedes Mal dieselben Orientierungspunkte.",
    },
    {
      question: "Was ist der Unterschied zwischen Apfel- und Birnenform?",
      answer:
        "Apfelformen tragen Fett um die Mitte, mit höherem Verhältnis und größerem Stoffwechselrisiko. Birnenformen tragen es an Hüfte und Oberschenkeln, mit niedrigerem Verhältnis und günstigerem Risikoprofil. Die Verteilung ist weitgehend genetisch und stark von Sexualhormonen geprägt. Deshalb verschieben sich viele Frauen nach der Menopause Richtung Apfelform, auch ohne zuzunehmen.",
    },
    {
      question: "Kann ich mein Taille-Hüft-Verhältnis senken?",
      answer:
        "Ja, aber nicht, indem du es direkt ansteuerst. Punktuelles Wegtrainieren funktioniert nicht: Kein Bauchtraining verbrennt bevorzugt Bauchfett. Was wirkt, ist ein gesamtes Kaloriendefizit, und viszerales Fett gehört zu den ersten Speichern, die mobilisiert werden. Früher Gewichtsverlust verbessert das Verhältnis oft schneller als das Gesamtgewicht. Regelmäßige aerobe Aktivität senkt viszerales Fett gezielt, auch bei stabilem Körpergewicht.",
    },
    {
      question: "Reduziert Gehen Bauchfett?",
      answer:
        "Es reduziert viszerales Fett, und das ist hier der relevante Teil. Regelmäßige moderate aerobe Aktivität senkt viszerales Fett messbar, auch wenn das Körpergewicht sich kaum ändert, und Gehen ist die Form, die sich im nötigen Umfang am leichtesten halten lässt. Studien nutzen meist 150 bis 300 Minuten moderate Aktivität pro Woche, also 30 bis 60 Minuten an den meisten Tagen.",
    },
    {
      question: "Soll ich den Taillenumfang oder das Verhältnis nutzen?",
      answer:
        "Beides, deshalb zeigt dieser Rechner beides. Das Verhältnis allein kann in die Irre führen: Jemand mit großer Taille und ungewöhnlich breiten Hüften kann im niedrigen Band liegen, obwohl die WHO den Taillenumfang für sich genommen markieren würde. Diese Schwellen sind 94 und 102 cm bei Männern, 80 und 88 cm bei Frauen. Wenn die Maße sich widersprechen, nimm die vorsichtigere Lesart.",
    },
  ],
  cta: {
    title: "Geh das Fett ab, das zählt",
    description:
      "Lade die Steps-App, um dein tägliches Gehen zu erfassen und die aerobe Gewohnheit aufzubauen, die viszerales Fett senkt.",
  },
  howTo: {
    name: "So berechnest du dein Taille-Hüft-Verhältnis",
    description:
      "Miss Taille und Hüfte, gib beide ein und sieh, wo dein Verhältnis gegenüber den kardiovaskulären WHO-Schwellen liegt.",
    steps: [
      {
        name: "Wähle dein Geschlecht",
        text: "Die WHO setzt für Frauen niedrigere Schwellen, weil sie von Natur aus mehr Fett an Hüfte und Oberschenkeln tragen.",
      },
      {
        name: "Miss deine Taille",
        text: "Finde die schmalste Stelle zwischen der untersten Rippe und dem oberen Rand des Hüftknochens. Miss am Ende einer normalen Ausatmung, ohne den Bauch einzuziehen.",
      },
      {
        name: "Miss deine Hüfte",
        text: "Miss die breiteste Stelle um das Gesäß. Das Band bleibt waagerecht und anliegend, ohne die Haut einzudrücken.",
      },
      {
        name: "Lies dein Risikoband",
        text: "Der Rechner liefert dein Verhältnis, das WHO-Risikoband, einen separaten Taillenumfang-Check und die Taille, die dich ins Band mit niedrigem Risiko bringen würde.",
      },
    ],
  },
};

export default de;

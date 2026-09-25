import type { IdealWeightCalculatorMessages } from "./en";

const de: IdealWeightCalculatorMessages = {
  meta: {
    title: "Idealgewicht-Rechner: 4 Formeln plus gesunder BMI-Bereich",
    description:
      "Devine, Robinson, Miller und Hamwi nebeneinander, plus der gesunde BMI-Bereich. Ein Mann mit 175 cm liegt zwischen 68,7 und 72 kg. Kostenloser Idealgewicht-Rechner.",
    keywords: [
      "Idealgewicht Rechner",
      "Idealgewicht berechnen",
      "gesundes Gewicht Rechner",
      "wie viel sollte ich wiegen",
      "Devine Formel",
      "Robinson Formel",
      "Hamwi Formel",
      "Idealgewicht nach Größe",
      "gesunder Gewichtsbereich",
    ],
    ogTitle: "Idealgewicht-Rechner: 4 Formeln plus gesunder BMI-Bereich",
    ogDescription:
      "Vier klinische Idealgewicht-Formeln nebeneinander, plus der gesunde BMI-Bereich für deine Größe.",
  },
  hero: {
    title: "Idealgewicht-Rechner",
    subtitle:
      "Vier klinische Formeln nebeneinander, mit dem gesunden BMI-Bereich. Zu sehen, wie weit sie auseinanderliegen, ist das Nützlichste an diesem Rechner.",
  },
  calculator: {
    details: "Deine Angaben",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    height: "Größe",
    currentWeight: "Aktuelles Gewicht",
    optional: "(optional)",
    placeholderKg: "z. B. 78",
    placeholderLbs: "z. B. 172",
    calculate: "Idealgewicht berechnen",
    results: "Deine Ergebnisse",
    formulaAverage: "Formel-Mittelwert",
    range: "Bereich {min}–{max}",
    healthyBmiRange: "Gesunder BMI-Bereich",
    to: "bis {weight}",
    verdictWithin:
      "Dein Gewicht liegt im gesunden BMI-Bereich für deine Größe. Der Formel-Mittelwert ist ein Punkt in diesem Band, kein Ziel, das du treffen musst.",
    verdictAbove: "Dein Gewicht liegt {amount} über dem gesunden BMI-Bereich für deine Größe.",
    verdictBelow: "Dein Gewicht liegt {amount} unter dem gesunden BMI-Bereich für deine Größe.",
    fourFormulas: "Die vier Formeln",
    disclaimer:
      "Alle vier Formeln sehen nur Größe und Geschlecht. Muskelmasse und Knochenbau fehlen, deshalb liegt ein muskulöser Körper bei jeder Formel hoch. Der gesunde BMI-Bereich ist die nützlichere Antwort: ein Band, kein einzelner Zielwert.",
    formulas: {
      devine: {
        name: "Devine",
        note: "Die meistzitierte Formel und immer noch Standard für die Medikamentendosierung. Für Dosisberechnungen geschrieben, nicht für Körperziele.",
      },
      robinson: {
        name: "Robinson",
        note: "Eine Überarbeitung von Devine mit einer größeren Stichprobe. Liegt bei großer Körpergröße unter Devine.",
      },
      miller: {
        name: "Miller",
        note: "Die flachste der vier: Die Größe ändert das Ergebnis am wenigsten, deshalb liegt sie bei kleinen Menschen am höchsten und bei großen am niedrigsten.",
      },
      hamwi: {
        name: "Hamwi",
        note: "Die älteste der vier, für die Diabetesversorgung entwickelt. Der steilste Zuwachs pro Zoll, deshalb bei großer Körpergröße am höchsten.",
      },
    },
  },
  resultCta: {
    headline: "Gewohnheiten bewegen die Zahl. Sonst nichts.",
    description:
      "Steps erfasst deine tägliche Aktivität automatisch, damit du die Beständigkeit aufbaust, die das Körpergewicht über Monate wirklich verschiebt.",
  },
  sticky: "Verfolge deine Schritte mit Steps",
  info: {
    title: "So berechnen wir das Idealgewicht",
    intro:
      "Alle vier Formeln haben dieselbe Form: ein Basisgewicht bei 5 ft, plus ein fester Betrag für jeden Zoll darüber. Nur die Konstanten unterscheiden sich.",
    formulasTitle: "Die Formeln",
    formulas: [
      {
        name: "Devine (1974)",
        body: "Männer: 50 kg + 2,3 kg pro Zoll über 5 ft. Frauen: 45,5 kg + 2,3 kg pro Zoll.",
      },
      {
        name: "Robinson (1983)",
        body: "Männer: 52 kg + 1,9 kg pro Zoll. Frauen: 49 kg + 1,7 kg pro Zoll.",
      },
      {
        name: "Miller (1983)",
        body: "Männer: 56,2 kg + 1,41 kg pro Zoll. Frauen: 53,1 kg + 1,36 kg pro Zoll.",
      },
      {
        name: "Hamwi (1964)",
        body: "Männer: 48 kg + 2,7 kg pro Zoll. Frauen: 45,5 kg + 2,2 kg pro Zoll.",
      },
      {
        name: "Gesunder BMI-Bereich",
        body: "Gewicht für BMI 18,5 bis 24,9 bei deiner Größe.",
      },
      {
        name: "Beispiel:",
        body: "ein Mann mit 175 cm erhält 70,5 (Devine), 68,9 (Robinson), 68,7 (Miller) und 72,0 (Hamwi), im Mittel 70,0 kg. Der gesunde BMI-Bereich ist 56,7 bis 76,3 kg.",
      },
    ],
    notice:
      "Der Mittelwert der vier Formeln liegt nahe der Mitte eines fast 20 kg breiten BMI-Bands. Diese Lücke ist die ehrliche Zusammenfassung: Die Gleichungen liefern einen plausiblen Punkt in einem viel größeren gesunden Bereich, kein Ziel, das du verfehlt hast, wenn du nicht darauf liegst.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Was ist das Idealgewicht?",
      answer:
        "Es ist eine klinische Schätzung eines gesunden Gewichts aus Größe und Geschlecht, und es lohnt sich zu wissen, woher sie kommt: Alle vier gängigen Formeln wurden für die Medikamentendosierung entwickelt, nicht für Körperziele. Devine schrieb seine 1974, um Gentamicin-Dosen zu berechnen. Danach wurden sie als Gesundheitsziele übernommen, deshalb verhalten sie sich in dieser Rolle eigenartig.",
    },
    {
      question: "Welche Idealgewicht-Formel soll ich nutzen?",
      answer:
        "Keine allein. Sie weichen bei durchschnittlicher Größe um 3 bis 4 kg ab und an den Extremen noch mehr. Das zeigt, wie viel Präzision wirklich drinsteckt. Der Mittelwert der vier ist eine vernünftige Mitte, aber der gesunde BMI-Bereich ist nützlicher, weil er ein Band von etwa 20 kg gibt statt einer einzelnen Zahl.",
    },
    {
      question: "Warum geben die vier Formeln verschiedene Antworten?",
      answer:
        "Sie stammen aus verschiedenen Populationen und sind sich nicht einig, wie viel Gewicht jeder Zoll Größe hinzufügen soll. Hamwi addiert bei Männern 2,7 kg pro Zoll, Miller nur 1,41. Bei 175 cm ist die Spanne klein, bei 195 cm liefert Hamwi etwa 87 kg und Miller etwa 78. Je größer oder kleiner du bist, desto weiter liegen sie auseinander.",
    },
    {
      question: "Ist das Idealgewicht bei muskulösen Menschen genau?",
      answer:
        "Nein, und das ist das klarste Versagen der Formeln. Sie sehen nur Größe und Geschlecht und können 80 kg Muskel nicht von 80 kg Fett unterscheiden. Ein trainierter Athlet gilt bei allen vier und auch beim BMI als übergewichtig. Wenn du nennenswert Muskeln trägst, sagen Körperfettanteil und Taille-Hüft-Verhältnis viel mehr als jedes Gewichtsziel.",
    },
    {
      question: "Was ist ein gesunder BMI-Bereich?",
      answer:
        "18,5 bis 24,9. In Gewicht bei 175 cm sind das 56,7 bis 76,3 kg, ein Band von fast 20 kg. Diese Breite ist der Punkt: Gesundes Gewicht ist ein Bereich, keine Zahl, und wo du darin liegst, hängt von Statur, Muskelmasse und dem ab, was du halten kannst.",
    },
    {
      question: "Soll ich mein Idealgewicht erreichen?",
      answer:
        "Nur wenn es zufällig zu etwas passt, das du halten kannst. Gesundheitsergebnisse folgen Verhalten zuverlässiger als einer Zahl auf der Waage: Aktive Menschen mit höherem Gewicht schneiden meist besser ab als sitzende Menschen mit niedrigerem. Liegt dein Gewicht schon im gesunden BMI-Bereich, lohnt die Mitte einer Formel wenig.",
    },
  ],
  cta: {
    title: "Bau die Gewohnheit auf, die die Zahl bewegt",
    description:
      "Lade die Steps-App, um deine täglichen Schritte zu erfassen und über die Monate konstant zu bleiben, die das Körpergewicht wirklich ändern.",
  },
  howTo: {
    name: "So berechnest du dein Idealgewicht",
    description:
      "Gib Geschlecht und Größe ein, um das Idealgewicht nach Devine, Robinson, Miller und Hamwi zu sehen, plus den gesunden BMI-Bereich.",
    steps: [
      {
        name: "Wähle dein Geschlecht",
        text: "Jede der vier Formeln nutzt ein anderes Basisgewicht und einen anderen Zuwachs pro Zoll für Männer und Frauen.",
      },
      {
        name: "Gib deine Größe ein",
        text: "Wechsle zwischen Zentimetern und Fuß/Zoll. Die Größe ist die einzige Variable, die die vier Formeln wirklich nutzen.",
      },
      {
        name: "Füge dein aktuelles Gewicht hinzu, wenn du einen Vergleich willst",
        text: "Optional. Damit siehst du, wie weit du vom Formel-Mittelwert entfernt bist und ob du im gesunden BMI-Bereich liegst.",
      },
      {
        name: "Lies den Bereich, nicht die Zahl",
        text: "Der Rechner liefert alle vier Schätzungen, ihren Mittelwert und das gesunde BMI-Gewichtsband für deine Größe, die breitere und nützlichere Antwort.",
      },
    ],
  },
};

export default de;

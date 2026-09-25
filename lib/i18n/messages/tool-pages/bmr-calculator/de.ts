import type { BmrCalculatorMessages } from "./en";

const de: BmrCalculatorMessages = {
  meta: {
    title: "Grundumsatz-Rechner: BMR in 3 Formeln",
    description:
      "Berechne deinen Grundumsatz mit Mifflin-St Jeor, Harris-Benedict und Katch-McArdle nebeneinander. Ein 30-jähriger Mann mit 75 kg verbrennt in Ruhe etwa 1.699 Kalorien am Tag. Kostenloser Rechner.",
    keywords: [
      "Grundumsatz Rechner",
      "BMR Rechner",
      "Ruheumsatz",
      "Mifflin-St Jeor Gleichung",
      "Harris-Benedict Gleichung",
      "Katch-McArdle Formel",
      "wie viele Kalorien verbrenne ich in Ruhe",
      "BMR und TDEE",
      "Stoffwechsel Rechner",
    ],
    ogTitle: "Grundumsatz-Rechner: BMR in 3 Formeln",
    ogDescription:
      "Berechne deinen Grundumsatz mit drei klinischen Formeln nebeneinander, plus den Tagesbedarf auf jedem Aktivitätslevel.",
    ogImageAlt: "Grundumsatz-Rechner",
  },
  hero: {
    title: "Grundumsatz-Rechner",
    subtitle:
      "Finde die Kalorien, die dein Körper in völliger Ruhe verbrennt. Drei klinische Formeln laufen nebeneinander, damit du die Spanne siehst statt einer Zahl, die sich sicher gibt.",
  },
  calculator: {
    details: "Deine Angaben",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    years: "Jahre",
    weight: "Gewicht",
    height: "Größe",
    bodyFat: "Körperfett %",
    bodyFatOptional: "(optional: schaltet Katch-McArdle frei)",
    bodyFatPlaceholder: "z. B. 20",
    activity: "Aktivitätslevel",
    activityLevels: {
      sedentary: "Sitzend",
      light: "Leicht aktiv",
      moderate: "Mäßig aktiv",
      active: "Aktiv",
      very_active: "Sehr aktiv",
    },
    activityDescriptions: {
      sedentary: "Bürotätigkeit, wenig oder kein Sport",
      light: "Leichter Sport an 1–3 Tagen pro Woche",
      moderate: "Mäßiger Sport an 3–5 Tagen pro Woche",
      active: "Harter Sport an 6–7 Tagen pro Woche",
      very_active: "Körperliche Arbeit oder zwei Einheiten am Tag",
    },
    calculate: "Grundumsatz berechnen",
    results: "Deine Ergebnisse",
    bmr: "BMR",
    atRest: "Kalorien/Tag in Ruhe",
    maintenance: "Erhaltung",
    maintenanceAt: "bei {level}",
    leanMass:
      "Fettfreie Masse: {mass}. Weil du einen Körperfettanteil angegeben hast, nutzt die Hauptzahl Katch-McArdle.",
    kgValue: "{value} kg",
    share: "Selbst wenn du den ganzen Tag sitzt, macht der Grundumsatz etwa {percent} % der Kalorien aus, die du verbrennst.",
    formulasTitle: "Alle drei Formeln",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "Revidierte Harris-Benedict",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "An einer modernen Bevölkerung validiert. Der aktuelle klinische Standard und die verlässlichste Wahl, wenn der Körperfettanteil unbekannt ist.",
      harris:
        "Das Original von 1919, 1984 überarbeitet. Liegt im Schnitt etwa 5 % zu hoch, weil die Studiengruppe schlanker und aktiver war als die heutige Bevölkerung.",
      katch:
        "Rechnet mit der fettfreien Masse und ignoriert Geschlecht und Größe. Damit ist sie für schlanke oder muskulöse Körper die genaueste Option.",
      katchLocked: "Braucht einen Körperfettanteil. Trag ihn oben ein, um diese Schätzung zu sehen.",
    },
    used: "Verwendet",
    calValue: "{value} cal",
    byActivity: "Tageskalorien nach Aktivitätslevel",
    resultCta: {
      headline: "Der Grundumsatz ist der Boden. Schritte sind der Hebel.",
      description:
        "Deinen Ruheverbrauch kannst du kaum verschieben, alles darüber schon. Steps erfasst deine Bewegung automatisch und zeigt, was sie zu der Zahl hinzufügt, die du gerade berechnet hast.",
    },
  },
  info: {
    title: "So berechnen wir den Grundumsatz",
    intro:
      "Drei Gleichungen sind klinisch üblich, und sie weichen genug voneinander ab, dass es zählt. Statt eine auszuwählen und die Spanne zu verstecken, rechnet dieser Rechner alle drei.",
    formulaTitle: "Die Formeln",
    formulas: [
      {
        title: "Mifflin-St Jeor (1990)",
        lines: [
          "Männer: (10 × Gewicht kg) + (6,25 × Größe cm) − (5 × Alter) + 5",
          "Frauen: (10 × Gewicht kg) + (6,25 × Größe cm) − (5 × Alter) − 161",
        ],
      },
      {
        title: "Revidierte Harris-Benedict (1984)",
        lines: [
          "Männer: 88,362 + (13,397 × Gewicht) + (4,799 × Größe) − (5,677 × Alter)",
          "Frauen: 447,593 + (9,247 × Gewicht) + (3,098 × Größe) − (4,330 × Alter)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: [
          "370 + (21,6 × fettfreie Masse kg), wobei fettfreie Masse = Gewicht × (1 − Körperfett %)",
        ],
      },
    ],
    exampleLabel: "Beispiel:",
    example:
      "ein 30-jähriger Mann, 75 kg, 175 cm, kommt auf 1.699 nach Mifflin-St Jeor und 1.763 nach Harris-Benedict. Bei 20 % Körperfett liefert Katch-McArdle 1.666.",
    primary:
      "Mifflin-St Jeor ist die Hauptzahl, außer du gibst einen Körperfettanteil an: dann übernimmt Katch-McArdle. Nur sie misst das Gewebe, das den Ruheverbrauch tatsächlich treibt, statt ihn aus Größe und Geschlecht abzuleiten.",
    activityFactors:
      "Multipliziere den Grundumsatz mit einem Aktivitätsfaktor für den TDEE: 1,2 sitzend, 1,375 leicht aktiv, 1,55 mäßig aktiv, 1,725 aktiv, 1,9 sehr aktiv. Der Rechner zeigt alle fünf.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Was ist der Grundumsatz?",
      answer:
        "Der Grundumsatz (BMR) ist die Energie, die dein Körper im Nichtstun verbraucht: atmen, Blut bewegen, Temperatur halten, Zellen reparieren. Gemessen wird er liegend, wach, nach 12 Stunden Fasten. Bei den meisten Erwachsenen macht er 60 bis 75 % der Tageskalorien aus und ist damit der größte einzelne Posten.",
    },
    {
      question: "Was ist der Unterschied zwischen BMR und RMR?",
      answer:
        "Der BMR wird unter strengen Laborbedingungen gemessen: völlige Ruhe, nüchtern, in einem thermisch neutralen Raum. Der Ruheumsatz (RMR) wird lockerer gemessen und liegt etwa 10 % höher, weil etwas Verdauung und kleine Bewegungen dazukommen. Im Alltag werden die Begriffe vermischt, und jeder Online-Rechner, auch dieser, schätzt eher etwas in der Nähe des RMR.",
    },
    {
      question: "Welche BMR-Formel ist am genauesten?",
      answer:
        "Mifflin-St Jeor für die meisten Menschen. Sie wurde per indirekter Kalorimetrie an einer modernen Bevölkerung geprüft und trifft bei etwa 80 % der Erwachsenen auf rund 10 %. Harris-Benedict, auch in der Fassung von 1984, liegt etwa 5 % zu hoch, weil die Gruppe von 1919 schlanker und aktiver war. Katch-McArdle schlägt beide, wenn du deinen Körperfettanteil kennst, weil sie von der fettfreien Masse ausgeht, dem Gewebe, das den Ruheverbrauch wirklich antreibt.",
    },
    {
      question: "Was ist der Unterschied zwischen BMR und TDEE?",
      answer:
        "Der Grundumsatz ist, was du in völliger Ruhe verbrennst. Der TDEE (Gesamtenergieumsatz) ist der BMR mal Aktivitätsfaktor, also plus Bewegung, Training und die Energie der Verdauung. Der TDEE ist immer höher: selbst ein ganz sitzender Tag liegt bei etwa dem 1,2-Fachen des BMR. Setze Kalorienziele gegen den TDEE, nicht gegen den BMR.",
    },
    {
      question: "Soll ich auf Höhe meines Grundumsatzes essen, um abzunehmen?",
      answer:
        "Nein. Auf BMR-Höhe zu essen heißt, zu essen, als wärst du den ganzen Tag reglos gewesen. Das erzeugt ein Defizit von mehreren Hundert bis tausend Kalorien, bevor du dich bewegt hast. Das ist aggressiv genug, um Muskeln zu kosten, und fällt bei vielen unter die Grenze von 1.200 (Frauen) oder 1.500 (Männer) Kalorien. Zieh stattdessen 250 bis 500 Kalorien vom TDEE ab.",
    },
    {
      question: "Warum ist mein Grundumsatz niedriger als gedacht?",
      answer:
        "Die Körpergröße dominiert: kleinere und leichtere Menschen bekommen niedrigere Zahlen, und jede Formel zieht das Alter ab. Die Zusammensetzung zählt auch: Muskeln verbrennen in Ruhe pro Kilogramm etwa dreimal so viel wie Fett, deshalb können zwei Menschen mit gleichem Gewicht um 200 Kalorien oder mehr auseinanderliegen. Nach einem langen Defizit kann adaptive Thermogenese den tatsächlichen BMR 10 bis 15 % unter den Schätzwert drücken.",
    },
    {
      question: "Kann ich meinen Grundumsatz steigern?",
      answer:
        "Etwas, und langsam. Muskeln aufbauen ist der einzige dauerhafte Hebel: jedes Kilogramm Muskel bringt in Ruhe etwa 13 Kalorien am Tag, ein ernstes Jahr Krafttraining also vielleicht 50 bis 100 Kalorien. Das ist real, aber bescheiden. Mehr Bewegung am Tag verändert deinen TDEE weit stärker als alles, was du am BMR ändern kannst. Deshalb bewegt die Schrittzahl die Nadel schneller als Stoffwechseltricks.",
    },
  ],
  cta: {
    title: "Verfolge, was du über der Ruhe verbrennst",
    description:
      "Lade die Steps-App, um jeden Schritt automatisch zu zählen und zu sehen, wie dein Tagesverbrauch auf dem Grundumsatz aufbaut.",
  },
  sticky: "Verfolge deine Schritte mit Steps",
  howTo: {
    name: "So berechnest du deinen Grundumsatz",
    description:
      "Gib Geschlecht, Alter, Gewicht und Größe ein, um deinen Grundumsatz aus drei klinischen Formeln zu bekommen, plus den Tagesbedarf auf jedem Aktivitätslevel.",
    steps: [
      {
        name: "Körperwerte eingeben",
        text: "Setze Geschlecht, Alter, Gewicht und Größe. Das Gewicht wechselt zwischen Kilogramm und Pfund, die Größe zwischen Zentimetern und Fuß/Zoll.",
      },
      {
        name: "Körperfettanteil ergänzen, wenn du ihn kennst",
        text: "Optional. Damit wird Katch-McArdle freigeschaltet. Die Formel rechnet mit der fettfreien Masse und ist für schlanke oder muskulöse Körper am genauesten.",
      },
      {
        name: "Aktivitätslevel wählen",
        text: "Von sitzend bis sehr aktiv. Das ändert den Grundumsatz nicht, legt aber fest, welche Erhaltungskalorien hervorgehoben werden.",
      },
      {
        name: "Grundumsatz und Erhaltungskalorien ablesen",
        text: "Der Rechner liefert deinen Grundumsatz, alle drei Schätzungen nebeneinander und die Tageskalorien auf jedem der fünf Aktivitätslevel.",
      },
    ],
  },
};

export default de;

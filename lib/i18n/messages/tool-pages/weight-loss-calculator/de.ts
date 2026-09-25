import type { WeightLossCalculatorMessages } from "./en";

const de: WeightLossCalculatorMessages = {
  meta: {
    title: "Abnehm-Rechner: Kalorien, Zeitplan und Zieldatum",
    description:
      "Rechne die Tageskalorien und den Zeitplan bis zum Zielgewicht aus. 10 kg bei 0,5 kg pro Woche dauern 20 Wochen bei einem Defizit von 550 Kalorien. Kostenloser Rechner.",
    keywords: [
      "Abnehm Rechner",
      "Kalorienrechner zum Abnehmen",
      "wie viele Kalorien zum Abnehmen",
      "Zielgewicht Rechner",
      "Abnehm Zeitplan Rechner",
      "Kaloriendefizit Rechner",
      "wie lange dauert Abnehmen",
      "Abnehmplan",
    ],
    ogTitle: "Abnehm-Rechner: Kalorien, Zeitplan und Zieldatum",
    ogDescription:
      "Gib deine Werte und dein Zielgewicht ein und bekomme Tageskalorien, einen realistischen Zeitplan und Meilensteine Woche für Woche.",
    ogImageAlt: "Abnehm-Rechner",
  },
  hero: {
    title: "Abnehm-Rechner",
    subtitle:
      "Gib deine Werte und dein Zielgewicht ein und bekomme Tageskalorien, einen realistischen Zeitplan und die Meilensteine Woche für Woche dazwischen.",
  },
  calculator: {
    details: "Deine Angaben",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    years: "Jahre",
    height: "Größe",
    weights: "Aktuelles und Zielgewicht",
    now: "jetzt",
    goal: "Ziel",
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
    rate: "Abnehmtempo",
    rates: {
      mild: { label: "Mild", description: "0,25 kg (0,5 lb) pro Woche" },
      moderate: { label: "Moderat", description: "0,5 kg (1 lb) pro Woche" },
      aggressive: { label: "Fors", description: "0,75 kg (1,5 lb) pro Woche" },
      rapid: { label: "Schnell", description: "1 kg (2 lb) pro Woche" },
    },
    calculate: "Meinen Plan berechnen",
    plan: "Dein Plan",
    gainGoal: "Dein Zielgewicht liegt auf oder über deinem aktuellen Gewicht. Setze ein niedrigeres Ziel, um einen Abnehmplan zu sehen.",
    eatPerDay: "Essen pro Tag",
    calories: "Kalorien",
    dailyDeficit: "Tagesdefizit",
    belowTdee: "unter dem TDEE",
    toLose: "Abnehmen",
    timeToGoal: "Zeit bis zum Ziel",
    weeks: "Wochen",
    yourBmr: "Dein Grundumsatz",
    yourTdee: "Dein TDEE",
    calValue: "{value} cal",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    warnings: {
      floorMale:
        "Ein Tempo von {rate} kg/Woche würde dich auf {raw} Kalorien am Tag bringen, unter der Grenze von {floor} Kalorien für Männer. Das Ziel wurde auf {floor} angehoben, die tatsächliche Abnahme ist also langsamer als das Tempo, das du gewählt hast.",
      floorFemale:
        "Ein Tempo von {rate} kg/Woche würde dich auf {raw} Kalorien am Tag bringen, unter der Grenze von {floor} Kalorien für Frauen. Das Ziel wurde auf {floor} angehoben, die tatsächliche Abnahme ist also langsamer als das Tempo, das du gewählt hast.",
      tooFast:
        "{rate} kg pro Woche zu verlieren ist mehr als 1 % deines Körpergewichts. Darüber kommt ein größerer Teil des Verlusts aus Muskeln statt aus Fett.",
      longPlan:
        "Prognosen über etwa drei Monate hinaus werden optimistisch. Der Ruheverbrauch sinkt, wenn du leichter wirst. Rechne alle 4–6 Wochen mit deinem neuen Gewicht neu.",
    },
    milestones: "Voraussichtliche Meilensteine",
    week: "Woche {week}",
    resultCta: {
      headline: "Das Defizit hält sich leichter, wenn du es siehst",
      description:
        "Steps erfasst deine Bewegung automatisch, die Bewegungsseite deines Defizits ist also gemessen statt geschätzt.",
    },
  },
  info: {
    title: "So funktioniert dieser Rechner",
    intro: "Drei Schritte: schätzen, was du verbrennst, abziehen, was du verlieren willst, und das Ergebnis gegen Sicherheitsgrenzen prüfen.",
    methodTitle: "Die Methode",
    steps: [
      {
        marker: "1. BMR",
        text: "{marker} nach Mifflin-St Jeor, der Gleichung mit der besten Validierung an modernen Bevölkerungen.",
      },
      {
        marker: "2. TDEE",
        text: "{marker} = Grundumsatz × Aktivitätsfaktor (1,2 sitzend bis 1,9 sehr aktiv).",
      },
      {
        marker: "3. Defizit",
        text: "{marker} = gewähltes Wochentempo × 7.700 ÷ 7. Ein Ziel von 0,5 kg pro Woche braucht 550 Kalorien am Tag.",
      },
      {
        marker: "4. Zeitplan",
        text: "{marker} = abzunehmendes Gewicht ÷ Wochentempo, neu gerechnet, wenn die Sicherheitsgrenze dein Kalorienziel angehoben hat.",
      },
    ],
    exampleLabel: "Beispiel:",
    example: "von 80 kg auf 70 kg bei 0,5 kg pro Woche ist ein Tagesdefizit von 550 Kalorien über etwa 20 Wochen.",
    wishnofsky:
      "Die 7.700 Kalorien pro Kilogramm sind die Wishnofsky-Regel. Sie ist eine lineare Näherung, die die ersten zwei bis drei Monate einigermaßen hält und danach optimistisch wird, weil dein Ruheverbrauch sinkt, wenn du leichter wirst. Der Rechner markiert das bei jedem Plan über 13 Wochen.",
    floors:
      "Kalorienziele sind bei Frauen auf 1.200 und bei Männern auf 1.500 begrenzt. Würde dein Tempo darunter rutschen, wird das Ziel angehoben und der Zeitplan verlängert, statt dir eine Zahl zu zeigen, bei der du nicht essen solltest.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Wie viele Kalorien soll ich essen, um abzunehmen?",
      answer:
        "Nimm deinen TDEE und zieh 250 bis 500 Kalorien ab. Das ergibt etwa 0,25 bis 0,5 kg (0,5 bis 1 lb) Verlust pro Woche, den Bereich, den die meisten klinischen Empfehlungen für haltbar halten. Der Rechner macht das für dich und geht nicht unter 1.200 Kalorien für Frauen oder 1.500 für Männer, die Grenzen, unter denen Mikronährstoffe schwer zu decken sind.",
    },
    {
      question: "Wie lange brauche ich, um 10 kg abzunehmen?",
      answer:
        "Bei moderaten 0,5 kg pro Woche etwa 20 Wochen, also ungefähr fünf Monate. Bei forschen 1 kg pro Woche wären es 10 Wochen, aber ein Tagesdefizit von 1.100 Kalorien so lange zu halten ist schwer und kostet mehr fettfreie Masse. Die meisten fahren besser, wenn sie die schnellere Zahl als Bestfall behandeln und gegen das moderate Tempo planen.",
    },
    {
      question: "Ist 1 kg pro Woche ein sicheres Tempo?",
      answer:
        "Nur wenn du deutlich Übergewicht trägst. Üblich ist, unter 1 % des Körpergewichts pro Woche zu bleiben: bei 100 kg sind das 1 kg, bei 65 kg 0,65 kg. Darüber ist ein wachsender Anteil dessen, was du verlierst, Muskel und Wasser statt Fett, und das nötige Defizit ist zu groß, um es zu halten.",
    },
    {
      question: "Warum werden diese Prognosen mit der Zeit ungenauer?",
      answer:
        "Sie nehmen 7.700 Kalorien pro Kilogramm Fett und einen festen Stoffwechsel an, und die zweite Annahme bricht. Wenn du leichter wirst, sinkt dein Grundumsatz, weil weniger Gewebe zu versorgen ist, und dieselben Aktivitäten verbrennen weniger. Die echte Kurve flacht ab, eine lineare Prognose behält ihre Steigung. Rechne alle vier bis sechs Wochen mit deinem aktuellen Gewicht neu.",
    },
    {
      question: "Soll ich das Defizit durch weniger Essen oder mehr Bewegung erzeugen?",
      answer:
        "Beides, der größere Teil über das Essen. Ernährung ändert das Defizit mit weniger Aufwand: einen 400-Kalorien-Snack wegzulassen kostet keine Zeit, 400 Kalorien zu verbrennen etwa 90 Minuten zügiges Gehen. Bewegung erhält aber fettfreie Masse im Defizit und bremst den Fall des TDEE, deshalb stockt ein Defizit nur aus Essenseinschränkung eher.",
    },
    {
      question: "Warum stockt meine Abnahme?",
      answer:
        "Meist ist dein TDEE gesunken: du bist leichter, also gibt es dasselbe Defizit nicht mehr. Es kann auch Wasser sein, das echten Fettverlust verdeckt, normal nach hartem Training oder einem salzreichen Tag, und das kann zwei Wochen Fortschritt verstecken. Rechne mit deinem aktuellen Gewicht neu und beurteile den Trend über zwei bis drei Wochen, nicht den Tag.",
    },
    {
      question: "Wie viele Schritte am Tag brauche ich zum Abnehmen?",
      answer:
        "Es gibt keine feste Zahl, sie hängt von der Größe deines Defizits und deinem Gewicht ab. Als Größenordnung verbrennen 10.000 Schritte bei den meisten Erwachsenen etwa 300 bis 500 Kalorien, ungefähr die Hälfte eines typischen Tagesdefizits. Gehen lässt sich in diesem Umfang am leichtesten durchhalten, deshalb trägt es über die Monate eines echten Ziels besser als intensivere Optionen.",
    },
  ],
  cta: {
    title: "Mach die Bewegungsseite automatisch",
    description: "Lade die Steps-App, um tägliche Schritte und verbrannte Kalorien zu verfolgen, ohne etwas einzutragen.",
  },
  sticky: "Verfolge deine Schritte mit Steps",
  howTo: {
    name: "So planst du deine Abnahme",
    description:
      "Gib deine Werte und dein Zielgewicht ein und bekomme Tageskalorien, die Wochen bis zum Ziel und Meilensteine Woche für Woche.",
    steps: [
      {
        name: "Körperwerte eingeben",
        text: "Setze Geschlecht, Alter und Größe, dann aktuelles Gewicht und Zielgewicht. Beide Gewichte nutzen denselben Einheitenwechsel.",
      },
      {
        name: "Aktivitätslevel wählen",
        text: "Von sitzend bis sehr aktiv. Das bestimmt deinen TDEE, aus dem das Kalorienziel berechnet wird.",
      },
      {
        name: "Abnehmtempo wählen",
        text: "Mild ist 0,25 kg pro Woche, moderat 0,5 kg, fors 0,75 kg, schnell 1 kg. Schnellere Tempi brauchen größere Defizite und sind schwerer durchzuhalten.",
      },
      {
        name: "Plan ablesen",
        text: "Du bekommst ein Tageskalorienziel, das Defizit, die Wochen bis zum Ziel und voraussichtliche Meilensteine. Warnungen erscheinen, wenn das Tempo dich unter sichere Kaloriengrenzen drücken würde.",
      },
    ],
  },
};

export default de;

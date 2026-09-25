import type { WalkingCaloriesMessages } from "./en";

const de: WalkingCaloriesMessages = {
  meta: {
    title: "Gehkalorien-Rechner: kostenlos nach Gewicht und Tempo",
    description:
      "Gehkalorien: Ein Erwachsener mit 70 kg verbrennt ~150 kcal in 30 min bei 5,6 km/h. Kostenloser Rechner — sofortige Schätzung nach Gewicht, Tempo, Zeit, Strecke oder Schritten.",
    keywords: [
      "gehkalorien rechner",
      "kalorien beim gehen rechner",
      "MET wert gehen",
      "MET gehen 5 km/h",
      "MET wert gehen 5 km/h",
      "MET wert zügiges gehen",
      "MET wert durchschnittstempo",
      "MET wert moderates gehen",
      "kalorienverbrauch gehen",
      "kalorien gehen pro km",
      "MET wert gehen 4 km/h",
      "MET wert gehen 4,5 km/h",
      "MET wert gehen 6 km/h",
      "formel kalorienverbrauch gehen MET",
    ],
    ogTitle: "Gehkalorien-Rechner: kostenlos nach Gewicht und Tempo",
    ogDescription:
      "Ein Erwachsener mit 70 kg verbrennt ~150 kcal in 30 min bei moderatem Tempo. Kostenloser Rechner — sofort nach Gewicht, Tempo, Zeit, Strecke oder Schritten.",
    ogImageAlt: "Gehkalorien-Rechner",
  },
  hero: {
    title: "Gehkalorien-Rechner und MET-Werte",
    subtitle:
      "Berechne verbrannte Kalorien beim Gehen mit MET-Werten (metabolisches Äquivalent) für jedes Tempo — vom langsamen Schlendern bei 2 km/h bis zum Power Walking über 7 km/h. Mit vollständiger MET-Tabelle.",
  },
  appCta: {
    headline: "Verfolge die Kalorien, die du wirklich verbrennst",
    description:
      "Steps zählt jeden Schritt im Hintergrund und macht daraus die Kalorien, die du an dem Tag wirklich verbrennst — ohne manuelles Eintragen.",
  },
  stickyCta: "Verfolge deine Schritte mit Steps",
  calculator: {
    calculateBy: "Berechnen nach",
    distance: "Strecke",
    time: "Zeit",
    weight: "Gewicht",
    duration: "Dauer",
    minutes: "Minuten",
    miles: "Meilen",
    walkingSpeed: "Gehtempo",
    speeds: {
      slow: { label: "Langsam", description: "3,2 km/h (2 mph)" },
      normal: { label: "Normal", description: "5 km/h (3,1 mph)" },
      brisk: { label: "Zügig", description: "6,4 km/h (4 mph)" },
      fast: { label: "Schnell", description: "7,2 km/h (4,5 mph)" },
    },
    caloriesBurned: "Verbrannte Kalorien",
    walkingTime: "Gehzeit",
    distanceResult: "Strecke",
    steps: "Schritte",
    fatBurned: "Verbranntes Fett",
    metValue: "MET-Wert",
    metTableTitle: "Gehtempo und MET-Werte",
    metTableIntro:
      "MET (Metabolic Equivalent of Task) steht für den Energieaufwand einer Aktivität. Ein höherer MET bedeutet mehr verbrannte Kalorien.",
    columns: {
      speed: "Tempo",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "Beschreibung",
    },
    paceDescriptions: {
      slow: "Gemütlicher Spaziergang",
      normal: "Durchschnittstempo",
      brisk: "Schnelles Gehen",
      fast: "Power Walking",
    },
  },
  info: {
    title: "So berechnen wir Gehkalorien",
    intro:
      "Wir nutzen die MET-Methode (Metabolic Equivalent of Task), um verbrannte Kalorien zu berechnen. Dieser forschungsbasierte Ansatz berücksichtigt dein Körpergewicht, die Gehdauer und die Intensität.",
    formulaTitle: "Die Formel",
    formula: "Kalorien = MET × Gewicht (kg) × Dauer (Stunden)",
    metLabel: "MET:",
    metText:
      "Metabolic Equivalent of Task — der Energieaufwand im Vergleich zur Ruhe",
    exampleLabel: "Beispiel:",
    example:
      "Eine 70-kg-Person, die eine Stunde im normalen Tempo geht (MET 3,5), verbrennt: 3,5 × 70 × 1 = 245 Kalorien",
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Wie viele Kalorien verbrennt 1 Meile Gehen?",
      answer:
        "1 Meile Gehen verbrennt bei den meisten Menschen etwa 80–100 Kalorien. Der genaue Wert hängt von deinem Gewicht und deinem Tempo ab. Schwerere Personen verbrennen mehr Kalorien pro Meile.",
    },
    {
      question: "Wie viele Kalorien verbrennen 30 Minuten Gehen?",
      answer:
        "30 Minuten Gehen im normalen Tempo verbrennen bei den meisten Erwachsenen etwa 100–150 Kalorien. Zügiges Gehen kann das auf 150–200 Kalorien erhöhen. Nutze den Rechner oben für eine persönliche Schätzung.",
    },
    {
      question: "Wie viele Kalorien verbrennen 40 Minuten Gehen?",
      answer:
        "40 Minuten Gehen verbrennen bei einem Erwachsenen mit 70 kg etwa 140–200 Kalorien im moderaten Tempo (4,8 km/h) und 200–280 Kalorien im zügigen Tempo (5,6–6,4 km/h). Beim Power-Walking-Tempo von 8 km/h sind es etwa 290 Kalorien. Bei 9,7 km/h (sehr schnelles Gehen oder leichtes Joggen, MET ~7,0) verbrennst du in 40 Minuten etwa 325–330 Kalorien bei 70 kg.",
    },
    {
      question: "Wie viele Kalorien verbrennen 40 Minuten Gehen bei 9,7 km/h?",
      answer:
        "40 Minuten bei 9,7 km/h (6,0 mph) — Power-Walking-Tempo auf dem Laufband, MET ~7,0 — verbrennen etwa 327 Kalorien bei 70 kg (155 lb). Schwerere Personen verbrennen mehr: etwa 380 kcal bei 82 kg, 422 kcal bei 91 kg. Die meisten Erwachsenen halten echtes Gehen in diesem Tempo nicht durch und wechseln in ein leichtes Joggen. Nutze den Rechner oben für eine genaue Zahl nach deinem Gewicht.",
    },
    {
      question: "Beeinflusst das Gehtempo den Kalorienverbrauch?",
      answer:
        "Ja, deutlich. Schnelleres Gehen erhöht deinen MET-Wert und verbrennt mehr Kalorien pro Minute. Zügiges Gehen (6,4 km/h) verbrennt etwa 30 % mehr Kalorien als ein gemütlicher Spaziergang (3,2 km/h).",
    },
    {
      question: "Was ist MET und warum ist das wichtig?",
      answer:
        "MET (Metabolic Equivalent of Task) ist ein wissenschaftliches Maß für den Energieaufwand. Ein MET von 1 entspricht deinem Ruheumsatz. Gehen im normalen Tempo hat einen MET von 3,5: Du verbrennst 3,5-mal mehr Kalorien als in Ruhe.",
    },
    {
      question: "Welchen MET-Wert hat Gehen im Durchschnittstempo?",
      answer:
        "Der MET-Wert für Gehen im Durchschnittstempo (etwa 5 km/h oder 3,1 mph) ist 3,5. Das ist das häufigste Gehtempo bei Erwachsenen und die Basis der meisten Kalorienrechner. Eine Person mit 70 kg verbrennt dabei etwa 245 Kalorien pro Stunde.",
    },
    {
      question: "Welchen MET-Wert hat moderates Gehen?",
      answer:
        "Ein moderates Tempo (4,0–4,5 km/h oder 2,5–2,8 mph) hat einen MET zwischen 3,0 und 3,3. Das ist ein bequemes Unterhaltungstempo für den Alltag. Eine Person mit 70 kg verbrennt dabei 210–231 Kalorien pro Stunde.",
    },
    {
      question: "Welchen MET-Wert hat Gehen bei 5 km/h (3,1 mph)?",
      answer:
        "Der MET-Wert für Gehen bei 5 km/h (3,1 mph) ist 3,5. Das gilt als normales Gehtempo. Eine Person mit 70 kg verbrennt dabei etwa 245 Kalorien pro Stunde (3,5 × 70 = 245 kcal/h).",
    },
    {
      question: "Welchen MET-Wert hat Gehen bei 4,5 km/h (2,8 mph)?",
      answer:
        "Der MET-Wert für Gehen bei 4,5 km/h (2,8 mph) ist 3,3. Das ist ein gleichmäßiges, bequemes Tempo. Bei 70 kg sind das etwa 231 Kalorien pro Stunde (3,3 × 70 = 231 kcal/h).",
    },
    {
      question: "Welchen MET-Wert hat zügiges Gehen bei 6 km/h?",
      answer:
        "Zügiges Gehen bei 6,0 km/h (3,7 mph) hat einen MET von 4,5. Das ist etwa 30 % anstrengender als normales Gehen (MET 3,5). Eine Person mit 70 kg verbrennt dabei etwa 315 Kalorien pro Stunde.",
    },
    {
      question: "Wie viel Fett kann ich durch Gehen verbrennen?",
      answer:
        "Ein Kilogramm Körperfett enthält etwa 7.700 Kalorien. 10.000 Schritte am Tag (etwa 400 Kalorien) würden bei unveränderter Ernährung ungefähr 1 kg Fett alle 19 Tage verbrennen. Kombiniere das Gehen mit einer ausgewogenen Ernährung.",
    },
  ],
  formula: {
    title: "So funktioniert die Formel für Gehkalorien",
    intro:
      "Die {name} nutzt MET-Werte (Metabolic Equivalent of Task) aus dem {source} — derselben Referenz, die Sportphysiologen weltweit verwenden. Die Formel lautet:",
    name: "Formel des Rechners für verbrannte Kalorien beim Gehen",
    source: "Compendium of Physical Activities",
    equation: "Kalorien = MET × Gewicht (kg) × Dauer (Stunden)",
    glance: "Jedes Gehtempo hat einen eigenen MET-Wert. Die meistgesuchten MET-Werte auf einen Blick:",
    highlights: [
      { phrase: "MET-Wert Gehen 4,8 km/h", detail: "(3 mph) =" },
      { phrase: "MET-Wert moderates Tempo", detail: "(5 km/h) =" },
      { phrase: "MET-Wert zügiges Gehen", detail: "(6,4 km/h) =" },
      { phrase: "MET-Wert Gehen 5 km/h", detail: "(3,1 mph) =" },
    ],
    chartNote:
      "Die vollständige Aufschlüsselung steht in unserer {chart}: jedes Tempo vom Schlendern bis zur Wettkampfmarche, plus Anpassungen für Steigung und Untergrund.",
    chartLabel: "MET-Tabelle fürs Gehen",
  },
  understanding: {
    title: "MET-Werte beim Gehen verstehen",
    term: "MET (Metabolic Equivalent of Task)",
    body:
      "{term} ist das wissenschaftliche Standardmaß für Trainingsintensität. Ein MET entspricht dem Energieaufwand deines Körpers in völliger Ruhe — etwa 1 Kalorie pro Kilogramm Körpergewicht und Stunde. Ein MET von 3,5 bedeutet, dass du 3,5-mal mehr Energie verbrennst als im Sitzen.",
    levels: {
      light: {
        title: "Leichtes Gehen",
        detail: "Langsamer Spaziergang, Schaufenster-Tempo (2–4 km/h)",
      },
      moderate: {
        title: "Moderates Gehen",
        detail: "Normales bis zügiges Tempo, am häufigsten (4–6 km/h)",
      },
      vigorous: {
        title: "Intensives Gehen",
        detail: "Power Walking, Wettkampfmarche oder bergauf (6+ km/h)",
      },
    },
    footnote:
      "Die MET-Werte im Rechner stammen aus dem Compendium of Physical Activities, der Referenz der Sportwissenschaft weltweit. Gehen bei 5 km/h (3,1 mph) — das meistgesuchte Tempo — hat einen MET von 3,5: Eine Person mit 70 kg verbrennt dabei 245 Kalorien pro Stunde.",
  },
  metTable: {
    title: "Vollständige MET-Werte nach Gehtempo",
    intro:
      "MET (Metabolic Equivalent of Task) misst den Energieaufwand. Ein MET von 1,0 entspricht deinem Ruheumsatz. In der Tabelle findest du den genauen MET-Wert für dein Tempo. Grundlage ist das Compendium of Physical Activities.",
    columns: {
      activity: "Gehaktivität",
      kmh: "Tempo (km/h)",
      mph: "Tempo (mph)",
      met: "MET-Wert",
      cal: "kcal/h (70 kg)",
    },
    activities: {
      "very-slow": "Sehr langsames Gehen",
      "slow-stroll": "Langsamer Spaziergang",
      leisurely: "Gemütliches Gehen",
      comfortable: "Bequemes Tempo",
      moderate: "Moderates Gehen",
      steady: "Gleichmäßiges Tempo",
      normal: "Normales Gehen",
      purposeful: "Zielstrebiges Gehen",
      brisk: "Zügiges Gehen",
      fast: "Schnelles Gehen",
      "very-fast": "Sehr schnelles Gehen",
      race: "Wettkampfmarche",
      "uphill-3": "Bergauf gehen (3 % Steigung)",
      "uphill-6": "Bergauf gehen (6 % Steigung)",
    },
    footnote:
      "Kalorien pro Stunde für eine Person mit 70 kg (154 lb). Dein tatsächlicher Verbrauch hängt vom Gewicht ab — nutze den Rechner oben für eine persönliche Schätzung. Hervorgehobene Zeilen zeigen die häufigsten Tempi. Quelle: Compendium of Physical Activities.",
  },
  cta: {
    title: "Verfolge deine Geheinheiten",
    description:
      "Lade die Steps-App, um deine Spaziergänge, verbrannte Kalorien und Fortschritte automatisch zu erfassen.",
  },
  howTo: {
    name: "So berechnest du verbrannte Kalorien beim Gehen",
    description:
      "Gib Dauer, Tempo und Körpergewicht ein, um die verbrannten Kalorien über MET-Werte zu schätzen.",
    steps: [
      {
        name: "Gib Dauer oder Strecke ein",
        text: "Du kannst zwischen Gehzeit und Strecke wechseln. Beides führt zur selben Schätzung.",
      },
      {
        name: "Wähle dein Gehtempo",
        text: "Langsam, normal, zügig oder schnell. Ein höheres Tempo nutzt einen höheren MET und verbrennt mehr Kalorien pro Minute.",
      },
      {
        name: "Gib dein Körpergewicht ein",
        text: "Das Gewicht ist der größte Multiplikator beim Kalorienverbrauch.",
      },
      {
        name: "Lies deine Schätzung ab",
        text: "Der Rechner zeigt verbrannte Kalorien, den Durchschnitt pro Minute und den verwendeten MET-Wert.",
      },
    ],
  },
};

export default de;

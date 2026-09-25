import type { StepDistanceCalculatorMessages } from "./en";

const de: StepDistanceCalculatorMessages = {
  meta: {
    title: "Schritte-zu-Distanz-Rechner: 1 km ≈ 1.300 Schritte",
    description:
      "1 km ≈ 1.300 Schritte. 1 Meile ≈ 2.100 Schritte. 5.000 Schritte ≈ 3,8 km / 2,4 mi. Kostenloser Rechner — angepasst an deine Größe und Schrittlänge.",
    keywords: [
      "km in Schritten",
      "Schritte in km",
      "1 km in Schritten",
      "2 km in Schritten",
      "3 km in Schritten",
      "6500 Schritte in km",
      "Schrittdistanz Rechner",
      "Schrittlänge Rechner",
      "Schritte in Distanz",
      "Distanz in Schritte",
      "Gehstrecke Rechner",
      "Schrittlängenrechner",
      "wie viele Schritte pro km",
      "Schritte in Meilen",
    ],
    ogTitle: "Schritte-zu-Distanz-Rechner: 1 km ≈ 1.300 Schritte",
    ogDescription:
      "1 km ≈ 1.300 Schritte · 5.000 Schritte ≈ 3,8 km / 2,4 mi · 10.000 ≈ 7,6 km / 4,7 mi. Kostenloser Rechner, angepasst an deine Größe.",
    ogImageAlt: "Schrittdistanz-Rechner",
  },
  hero: {
    title: "Schrittdistanz-Rechner",
    subtitle:
      "Rechne Schritte in Distanz oder Distanz in Schritte um. Persönliche Ergebnisse nach Größe, Geschlecht und Schrittlänge.",
  },
  resultCta: {
    headline: "Verfolge deine echten Schritte und deine Distanz",
    description:
      "Steps zählt deine Schritte automatisch und zeigt jeden Tag deine echte Distanz, dein Tempo und deine Kalorien, ohne manuelles Eintragen.",
  },
  stickyCta: "Verfolge deine Schritte mit Steps",
  calculator: {
    yourInformation: "Deine Angaben",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    years: "Jahre",
    height: "Größe",
    stepLength: "Deine geschätzte Schrittlänge: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} Zoll)",
    stepsToDistance: "Schritte zu Distanz",
    distanceToSteps: "Distanz zu Schritten",
    numberOfSteps: "Anzahl der Schritte",
    stepsPlaceholder: "Schrittzahl eingeben",
    distance: "Distanz",
    distancePlaceholder: "Distanz eingeben",
    miles: "Meilen",
    result: "Ergebnis",
    kmValue: "{distance} km",
    milesParen: "({distance} Meilen)",
    stepsValue: "{steps} Schritte",
    estimatedCalories: "Geschätzte Kalorien",
    kcalValue: "{calories} kcal",
    walkingTime: "Gehzeit",
    hoursMinutes: "{hours} Std. {minutes} Min.",
    minutesOnly: "{minutes} Min.",
    referenceTitle: "Schnellübersicht",
    referenceSubtitle: "Gängige Schrittziele und die passende Distanz für dein Profil",
    colSteps: "Schritte",
    colDistance: "Distanz",
    colCalories: "Kalorien",
    colTime: "Zeit",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "So berechnen wir deine Schrittlänge",
    intro:
      "Die Schrittlänge entscheidet, wie weit du mit jedem Schritt kommst. Wir schätzen sie mit einer forschungsbasierten Formel aus Größe, Geschlecht und Alter.",
    formulaTitle: "Die Formel",
    maleLabel: "Männlich:",
    maleFormula: "Schrittlänge = Größe (cm) x 0,415",
    femaleLabel: "Weiblich:",
    femaleFormula: "Schrittlänge = Größe (cm) x 0,413",
    ageLabel: "Altersanpassung:",
    ageFormula: "Die Schrittlänge nimmt nach dem 40. Lebensjahr etwa 1 % pro Jahrzehnt ab",
    average:
      "Bei Erwachsenen liegt die Schrittlänge meist zwischen 60 und 80 cm (24 bis 31 Zoll). Tempo, Untergrund und Fitness können die tatsächliche Länge zusätzlich verändern.",
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Wie viele Schritte sind eine Meile?",
      answer:
        "Im Durchschnitt sind eine Meile etwa 2.000 bis 2.500 Schritte, je nach Schrittlänge. Wer eine längere Schrittlänge hat, braucht weniger Schritte für dieselbe Distanz.",
    },
    {
      question: "Wie viele Schritte sind ein Kilometer?",
      answer:
        "Im Durchschnitt sind ein Kilometer etwa 1.250 bis 1.550 Schritte. Nutze den Rechner oben für eine Schätzung nach deinem Profil.",
    },
    {
      question: "Reichen 10.000 Schritte am Tag?",
      answer:
        "10.000 Schritte am Tag sind ein beliebtes Ziel und entsprechen ungefähr 5 Meilen (8 km) Gehen. Studien deuten darauf hin, dass schon 7.000–8.000 Schritte am Tag deutliche Gesundheitsvorteile bringen. Das beste Ziel fordert dich und bleibt machbar.",
    },
    {
      question: "Wie viele Schritte sind 1,8 km?",
      answer:
        "1,8 km sind für einen durchschnittlichen Erwachsenen etwa 2.340 Schritte (Schrittlänge ~77 cm). Nutze den Rechner oben mit deiner Größe für eine genauere Schätzung.",
    },
    {
      question: "Wie viele Schritte sind 3,5 km?",
      answer:
        "3,5 km sind für einen durchschnittlichen Erwachsenen etwa 4.550 Schritte. Größere Menschen machen weniger Schritte (längere Schrittlänge), kleinere mehr.",
    },
    {
      question: "Wie genau ist dieser Rechner?",
      answer:
        "Der Rechner liefert eine brauchbare Schätzung anhand deiner Körperdaten. Für mehr Genauigkeit kannst du deine echte Schrittlänge messen: Geh eine bekannte Strecke und zähle die Schritte.",
    },
  ],
  conversionsTitle: "Schnelle Umrechnungstabellen",
  conversions: [
    "10.000 Schritte in Meilen",
    "5.000 Schritte in Meilen",
    "Schritte in einer Meile",
    "Schritte in einem km",
    "Tabelle Schritte zu km",
    "Tabelle Schritte zu Meilen",
    "Tabelle Schritte zu Kalorien",
  ],
  allConversions: "Alle Umrechnungen →",
  stepsToKm: {
    title: "Schritte in km: Wie viele Kilometer stecken in deinen Schritten?",
    intro:
      "{phrase} umzurechnen hängt von deiner Schrittlänge ab, und die hängt von der Größe ab. Als Faustregel: {ruleA} für einen durchschnittlichen Erwachsenen, und {ruleB}.",
    phrase: "Schritte in km",
    ruleA: "1.000 Schritte ≈ 0,75 km",
    ruleB: "1 km ≈ 1.300 Schritte",
    cards: [
      { value: "0,75 km", label: "1.000 Schritte" },
      { value: "3,8 km", label: "5.000 Schritte" },
      { value: "7,5 km", label: "10.000 Schritte" },
      { value: "15 km", label: "20.000 Schritte" },
    ],
    guide:
      "Das sind Durchschnittswerte — deine echte Distanz hängt von Größe und Schrittlänge ab. Nutze den Rechner oben für eine persönliche Umrechnung oder lies unseren ausführlichen Guide zu {link} mit Tabellen nach Größe.",
    guideLink: "wie viele Schritte in einem Kilometer",
  },
  kmTable: {
    title: "Km in Schritte: Schnellübersicht",
    intro:
      "Ungefähre Schrittzahlen für gängige Distanzen, bei einer durchschnittlichen Schrittlänge von 0,75 m (durchschnittlicher Erwachsener).",
    colDistance: "Distanz",
    colSteps: "Schritte (ca.)",
    colTime: "Gehzeit",
    rows: [
      { distance: "0,5 km", steps: "650", time: "~6 Min." },
      { distance: "1 km", steps: "1.300", time: "~12 Min." },
      { distance: "1,5 km", steps: "1.950", time: "~18 Min." },
      { distance: "1,8 km", steps: "2.340", time: "~22 Min." },
      { distance: "2 km", steps: "2.600", time: "~24 Min." },
      { distance: "2,5 km", steps: "3.250", time: "~30 Min." },
      { distance: "3 km", steps: "3.900", time: "~36 Min." },
      { distance: "3,5 km", steps: "4.550", time: "~42 Min." },
      { distance: "4 km", steps: "5.200", time: "~48 Min." },
      { distance: "5 km (~3,1 Meilen)", steps: "6.500", time: "~60 Min." },
      { distance: "6 km", steps: "7.800", time: "~72 Min." },
      { distance: "7 km", steps: "9.100", time: "~84 Min." },
      { distance: "8 km (~5 Meilen)", steps: "10.400", time: "~96 Min." },
      { distance: "10 km (~6,2 Meilen)", steps: "13.000", time: "~2 Std." },
      { distance: "12 km", steps: "15.600", time: "~2 Std. 24 Min." },
      { distance: "15 km", steps: "19.500", time: "~3 Std." },
      { distance: "20 km", steps: "26.000", time: "~4 Std." },
    ],
    footnote:
      "Grundlage: durchschnittliche Schrittlänge (~0,75 m) und normales Gehtempo (~5 km/h). Nutze den Rechner oben für ein Ergebnis nach deiner Größe und deinem Geschlecht.",
  },
  stepsTable: {
    title: "Schritte in km und Meilen: Schnellübersicht",
    intro:
      "Ungefähre Distanz in km und Meilen für gängige Schrittzahlen, bei einer durchschnittlichen Schrittlänge von 0,75 m.",
    colSteps: "Schritte",
    colKm: "Km",
    colMiles: "Meilen",
    rows: [
      { steps: "1.000", km: "0,75 km", miles: "0,47 mi" },
      { steps: "2.000", km: "1,5 km", miles: "0,93 mi" },
      { steps: "2.500", km: "1,9 km", miles: "1,17 mi" },
      { steps: "3.000", km: "2,25 km", miles: "1,4 mi" },
      { steps: "5.000", km: "3,8 km", miles: "2,4 mi" },
      { steps: "6.000", km: "4,5 km", miles: "2,8 mi" },
      { steps: "6.500", km: "4,9 km", miles: "3,0 mi" },
      { steps: "7.000", km: "5,25 km", miles: "3,3 mi" },
      { steps: "7.500", km: "5,6 km", miles: "3,5 mi" },
      { steps: "10.000", km: "7,5 km", miles: "4,7 mi" },
      { steps: "12.000", km: "9,0 km", miles: "5,6 mi" },
      { steps: "13.000", km: "9,75 km", miles: "6,05 mi" },
      { steps: "15.000", km: "11,25 km", miles: "7,0 mi" },
      { steps: "20.000", km: "15 km", miles: "9,3 mi" },
    ],
    footnote:
      "Die Distanzen gehen von einer durchschnittlichen Erwachsenen-Schrittlänge aus. Größere Menschen legen pro Schritt mehr Weg zurück, kleinere weniger. Nutze den Rechner oben für ein Ergebnis nach deiner Größe.",
  },
  cta: {
    title: "Verfolge deine Schritte automatisch",
    description:
      "Lade die Steps-App herunter und tracke Schritte, Distanz und Kalorien automatisch auf deinem iPhone und deiner Apple Watch.",
  },
  howTo: {
    name: "So rechnest du Schritte in Distanz um (oder Distanz in Schritte)",
    description:
      "Gib deine Größe und entweder eine Schrittzahl oder eine Distanz ein. Der Rechner schätzt die Umrechnung anhand deiner persönlichen Schrittlänge.",
    steps: [
      {
        name: "Gib deine Größe ein",
        text: "Die Größe dient dazu, deine durchschnittliche Schrittlänge zu schätzen. Die Gehschrittlänge liegt ungefähr bei 0,413 × Größe für Frauen und 0,415 × Größe für Männer.",
      },
      {
        name: "Gib Schritte oder Distanz ein",
        text: "Wechsle auf Schritte, um eine Distanz zu erhalten, oder auf Distanz, um eine Schrittzahl zu erhalten. Metrische und imperiale Einheiten werden unterstützt.",
      },
      {
        name: "Lies den umgerechneten Wert",
        text: "Das Ergebnis zeigt die Umrechnung plus deine geschätzte Schrittlänge in Metern und Fuß.",
      },
    ],
  },
};

export default de;

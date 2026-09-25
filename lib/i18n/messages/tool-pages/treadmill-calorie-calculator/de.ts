import type { TreadmillCalorieCalculatorMessages } from "./en";

const de: TreadmillCalorieCalculatorMessages = {
  meta: {
    title: "Laufband-Kalorienrechner: kostenlos, mit Steigung",
    description:
      "Laufbandkalorien nach Tempo, Steigung und Gewicht. Ein Erwachsener mit 155 lb verbrennt ~120 cal in 30 min bei 3 mph flach, ~200 cal bei 5 % Steigung. Kostenloser Rechner auf ACSM-Basis.",
    keywords: [
      "Laufband Kalorienrechner",
      "Kalorien verbrannt Laufband",
      "Laufband Steigung Kalorien",
      "Kalorien auf dem Laufband",
      "Laufband Gehen Kalorien",
      "Schräglaufband Kalorien",
      "12-3-30 Kalorien",
      "ACSM Stoffwechselgleichung",
      "Laufband MET Werte",
    ],
    ogTitle: "Laufband-Kalorienrechner: kostenlos, mit Steigung",
    ogDescription:
      "Berechne Laufbandkalorien nach Tempo, Steigung, Gewicht und Zeit. Kostenloser Rechner mit den ACSM-Stoffwechselgleichungen.",
    ogImageAlt: "Laufband-Kalorienrechner",
  },
  hero: {
    title: "Laufband-Kalorienrechner",
    subtitle:
      "Berechne die Kalorien auf dem Laufband aus Tempo, Steigung, Gewicht und Zeit. Die ACSM-Stoffwechselgleichungen rechnen die Steigung richtig ein, statt sie zu ignorieren.",
  },
  calculator: {
    session: "Deine Laufbandeinheit",
    weight: "Gewicht",
    speed: "Tempo",
    incline: "Steigung: {percent} %",
    duration: "Dauer",
    minutes: "Minuten",
    caloriesBurned: "Verbrannte Kalorien",
    kcalValue: "{value} kcal",
    inclineAdds:
      "Die Steigung von {grade} % bringt {extra} kcal mehr als dieselbe Einheit in der Ebene ({flat} kcal).",
    met: "MET",
    distance: "Distanz",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "Geschätzte Schritte",
    fatBurned: "Verbranntes Fett",
    grams: "{value} g",
    equation: "ACSM-{gait}-Stoffwechselgleichung ({vo2} ml/kg/min VO₂).",
    gaitWalking: "Gehen",
    gaitRunning: "Laufen",
    tableTitle: "Kalorien nach Steigung",
    tableSubtitle: "Gleiches Gewicht, gleiches Tempo, gleiche Dauer. Nur die Steigung ändert sich.",
    colIncline: "Steigung",
    colMet: "MET",
    colCalories: "Kalorien",
    colVsFlat: "vs. flach",
    vsFlat: "+{percent} %",
  },
  resultCta: {
    headline: "Erfasse die Kalorien, die du wirklich verbrennst",
    description:
      "Steps zählt jeden Schritt im Hintergrund und macht daraus echte verbrannte Kalorien pro Tag, ohne manuelles Eintragen.",
  },
  info: {
    title: "So berechnen wir Laufbandkalorien",
    intro:
      "Ein einzelner MET-Wert kann Laufbandarbeit nicht beschreiben, weil die Steigung die Energiekosten bei jedem Tempo verändert. Wir nutzen die ACSM-Stoffwechselgleichungen, die die Sauerstoffaufnahme getrennt aus Tempo und Steigung schätzen und das dann in Kalorien umrechnen.",
    formulaTitle: "Die Formeln",
    formulas: [
      { strong: "Gehen VO₂", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "Laufen VO₂", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S ist die Geschwindigkeit in Metern pro Minute, G die Steigung als Bruch (5 % = 0,05). VO₂ ist in ml/kg/min.",
      },
      {
        strong: "MET",
        rest: "= VO₂ ÷ 3,5, und kcal/min = MET × 3,5 × Gewicht(kg) ÷ 200",
      },
      {
        strong: "Beispiel:",
        rest: "70 kg bei 5 km/h und 5 % Steigung ergeben VO₂ 19,3, etwa 5,5 MET, ungefähr 405 kcal pro Stunde.",
      },
    ],
    note: "Die Gehgleichung gilt unter 6,5 km/h, die Laufgleichung ab diesem Tempo. Dort wechseln die meisten vom schnellen Gehen zum Joggen. Die Schätzung nimmt an, dass du die Handläufe nicht hältst.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Wie viele Kalorien verbrennst du in 30 Minuten auf dem Laufband?",
      answer:
        "Ein Erwachsener mit 70 kg (155 lb), der 30 Minuten mit 5 km/h (3,1 mph) auf flachem Band geht, verbrennt ungefähr 125 Kalorien. Bei 5 % Steigung sind es etwa 205 Kalorien. Bei 10 % näher an 285. Die Steigung zählt mehr als jede andere Einstellung, die du ändern kannst.",
    },
    {
      question: "Verbrennt Steigung wirklich mehr Kalorien?",
      answer:
        "Deutlich. Jedes Prozent Steigung legt vertikale Arbeit auf die horizontale Bewegung. Bei Gehtempi erhöht 5 % Steigung die Energiekosten um etwa 60 % gegenüber der Ebene, und 10 % können sie mehr als verdoppeln, bei gleichem Tempo und gleicher Dauer.",
    },
    {
      question: "Wie viele Kalorien verbrennt das 12-3-30-Workout?",
      answer:
        "12-3-30 heißt 12 % Steigung, 3 mph, 30 Minuten. Für einen Erwachsenen mit 70 kg sind das ungefähr 300 Kalorien, gegenüber etwa 120 Kalorien für dieselben 30 Minuten bei 3 mph in der Ebene. Die Steigung macht den größten Teil der Arbeit: rund 60 % des Gesamtverbrauchs.",
    },
    {
      question: "Stimmt die Kalorienanzeige des Laufbands?",
      answer:
        "Meist nicht. Die meisten Geräte nehmen ein Standardgewicht an und ignorieren das Gewicht, das du für die Anzeige eingibst. Das überzeichnet den Verbrauch typischerweise um 15 bis 25 %. Eine Rechnung mit deinem echten Gewicht, Tempo und deiner Steigung ist zuverlässiger.",
    },
    {
      question: "Verbrennst du mehr Kalorien beim Gehen mit Steigung oder beim Laufen in der Ebene?",
      answer:
        "Sie können gleichziehen, aber du brauchst eine steile Steigung. Gehen mit 5 km/h bei 12 % liegt bei etwa 8,5 MET, im Wesentlichen wie Joggen mit 8 km/h in der Ebene (8,6 MET). Bei sanfteren 10 % sind es 7,7 MET, also etwas weniger. Der Vorteil des Steigungsgehens ist vergleichbarer Energieaufwand bei viel geringerer Gelenkbelastung.",
    },
    {
      question: "Sollst du die Handläufe halten?",
      answer:
        "Nein, wenn Kalorienverbrennen das Ziel ist. Wer die Läufe hält, verlagert einen Teil des Körpergewichts auf die Arme und kann den tatsächlichen Energieverbrauch um 20 bis 25 % senken, besonders bei steilen Steigungen, während die Konsole weiter die Zahl ohne Abstützen anzeigt.",
    },
  ],
  cta: {
    title: "Verfolge deine Laufband-Workouts",
    description:
      "Lade die Steps-App, um deine Walks, verbrannte Kalorien und deinen Fortschritt automatisch zu erfassen.",
  },
  sticky: "Zähl deine Schritte mit Steps",
};

export default de;

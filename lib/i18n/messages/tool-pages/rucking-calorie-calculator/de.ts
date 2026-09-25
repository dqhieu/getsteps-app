import type { RuckingCalorieCalculatorMessages } from "./en";

const de: RuckingCalorieCalculatorMessages = {
  meta: {
    title: "Rucking-Kalorienrechner: Packgewicht, Untergrund und Steigung",
    description:
      "Berechne Rucking-Kalorien aus Packgewicht, Tempo, Steigung und Untergrund mit der Pandolf-Gleichung. Eine 70-kg-Person mit 15 kg für eine Stunde verbrennt ~350 Kalorien. Kostenloser Rechner.",
    keywords: [
      "Rucking Kalorienrechner",
      "Kalorien Rucksackmarsch",
      "Rucking Kalorien verbrannt",
      "Gewichtsweste Kalorienrechner",
      "Kalorien Wandern mit Rucksack",
      "Pandolf Gleichung",
      "Energiekosten Lasttragen",
      "Kalorien Wandern mit Pack",
    ],
    ogTitle: "Rucking-Kalorienrechner: Packgewicht, Untergrund und Steigung",
    ogDescription:
      "Berechne verbrannte Kalorien beim Rucking aus Packgewicht, Tempo, Steigung und Untergrund. Kostenloser Rechner mit der Pandolf-Gleichung für Lasttragen.",
    ogImageAlt: "Rucking-Kalorienrechner",
  },
  hero: {
    title: "Rucking-Kalorienrechner",
    subtitle:
      "Berechne die Kalorien beim Rucking (Marsch mit Gepäck) aus Packgewicht, Tempo, Steigung und Untergrund. Die Pandolf-Gleichung für Lasttragen rechnet das Gewicht auf dem Rücken wirklich ein.",
  },
  calculator: {
    yourRuck: "Dein Rucking",
    switchImperial: "Zu lbs / mph wechseln",
    switchMetric: "Zu kg / km/h wechseln",
    bodyWeight: "Körpergewicht",
    packWeight: "Packgewicht",
    pace: "Tempo",
    duration: "Dauer",
    minutes: "Minuten",
    grade: "Steigung: {percent} %",
    terrain: "Untergrund",
    terrains: {
      blacktop: {
        label: "Asphaltstraße",
        inline: "Asphaltstraße",
        description: "Asphalt oder Laufband. Die Bezugsfläche.",
      },
      gravel: {
        label: "Schotterstraße",
        inline: "Schotterstraße",
        description: "Feld- oder Schotterweg, leichter Bewuchs.",
      },
      trail: {
        label: "Wanderpfad",
        inline: "Wanderpfad",
        description: "Festgetretener Singletrail mit Wurzeln und Fels.",
      },
      "heavy-brush": {
        label: "Dickicht",
        inline: "Dickicht",
        description: "Dichtes Unterholz, kein bestehender Weg.",
      },
      swampy: {
        label: "Sumpf",
        inline: "Sumpf",
        description: "Weicher, durchnässter Boden, der unter dem Fuß nachgibt.",
      },
      sand: {
        label: "Loser Sand",
        inline: "loser Sand",
        description: "Trockener Strandsand. Die teuerste übliche Fläche.",
      },
    },
    terrainFactor: "{description} Geländefaktor {factor}.",
    caloriesBurned: "Verbrannte Kalorien",
    packAdds:
      "Das Pack von {load} bringt {extra} kcal mehr als derselbe Walk ohne Last ({unloaded} kcal).",
    heavyLoad:
      "Dieses Pack ist {percent} % deines Körpergewichts. Lasten über etwa einem Drittel des Körpergewichts erhöhen das Verletzungsrisiko stark, und das Pandolf-Modell ist dort am wenigsten zuverlässig. Steigere dich allmählich, statt direkt auf diese Last zu springen.",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "Distanz",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "Pack / Körpergewicht",
    equation: "Pandolf-Gleichung für Lasttragen bei {watts} Watt, {terrain}, {grade} % Steigung.",
    tableTitle: "Kalorien nach Packgewicht",
    tableSubtitle: "Gleiches Tempo, gleiche Steigung, gleicher Untergrund, gleiche Dauer. Nur die Last ändert sich.",
    colPack: "Pack",
    colCalories: "Kalorien",
    colVsUnloaded: "vs. unbeladen",
    vsUnloaded: "+{percent} %",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "Erfasse jedes Rucking automatisch",
    description:
      "Steps zählt Distanz und Schritte im Hintergrund, damit sich deine Ruckings neben dem restlichen Gehen von selbst eintragen.",
  },
  info: {
    title: "So berechnen wir Rucking-Kalorien",
    intro:
      "MET-Tabellen und die ACSM-Gleichungen haben gar keinen Lastterm: Sie liefern denselben Verbrauch, ob der Rucksack leer ist oder 30 Kilogramm fasst. Wir nutzen stattdessen die Pandolf-Gleichung, die eigens gebaut wurde, um Lasttragen zu bewerten.",
    formulaTitle: "Die Formel",
    formulas: [
      { strong: "M", rest: "= 1,5W + 2,0(W+L)(L/W)² + η(W+L)(1,5V² + 0,35VG)" },
      {
        strong: "",
        rest: "M ist die Stoffwechselrate in Watt, W die Körpermasse in kg, L die Last in kg, V die Geschwindigkeit in m/s, G die Steigung in Prozent und η der Geländefaktor.",
      },
      { strong: "kcal/min", rest: "= Watt × 60 ÷ 4184" },
      {
        strong: "",
        rest: "Der mittlere Term ist die Laststrafe, und er wächst mit (L/W)². Den Rucksack zu verdoppeln macht mehr als diesen Term zu verdoppeln.",
      },
      {
        strong: "Beispiel:",
        rest: "70 kg mit 20 kg bei 4,8 km/h auf Asphalt sind 360 Watt, etwa 5,2 kcal pro Minute.",
      },
    ],
    note: "Pandolf deckt ebenes und bergauf gerichtetes Gehen ab. Bergab braucht die separate Santee-Korrektur, deshalb werden Abstiege hier als Ebene behandelt, statt eine Zahl zu liefern, die das Modell nicht tragen kann.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Wie viele Kalorien verbrennt Rucking?",
      answer:
        "Eine Person mit 70 kg (155 lb), die mit 5 km/h auf Asphalt und 15 kg (33 lb) Pack ruckt, verbrennt ungefähr 310 Kalorien pro Stunde. Dieselbe Stunde unbeladenes Gehen liegt bei etwa 265, das Pack macht also rund 45 aus. Packgewicht, Steigung und Untergrund verschieben diese Zahl deutlich, deshalb täuscht eine einzelne Kalorien-pro-Stunde-Zahl.",
    },
    {
      question: "Verbrennt Rucking mehr Kalorien als Gehen?",
      answer:
        "Ja, und mehr, als das zusätzliche Gewicht allein vermuten lässt. Eine Last zu tragen kostet Energie doppelt: Du bewegst die Extra-Masse, und du zahlst eine eigene Strafe dafür, dass die Last getragen wird statt Teil des Körpers zu sein. In der Pandolf-Gleichung wächst diese Strafe mit dem Quadrat des Verhältnisses Last zu Körpergewicht, jedes weitere Kilogramm kostet also mehr als das vorige.",
    },
    {
      question: "Mit welchem Gewicht solltest du rucken?",
      answer:
        "Die meisten Empfehlungen starten Einsteiger bei 10 Prozent des Körpergewichts und bauen höchstens auf etwa ein Drittel auf. Über ungefähr einem Drittel des Körpergewichts steigt das Verletzungsrisiko für Knie, unteren Rücken und Füße stark, und das Pandolf-Modell selbst wird weniger zuverlässig, weil es vor allem unter diesem Verhältnis geprüft wurde. Nimm Gewicht langsam dazu, und bevor du Distanz dazunimmst.",
    },
    {
      question: "Ändert der Untergrund, wie viele Kalorien Rucking verbrennt?",
      answer:
        "Deutlich. Die Pandolf-Gleichung legt einen Geländefaktor auf die Bewegungskosten: Asphalt ist die 1,0-Referenz, Feldweg und Trail etwa 1,2, dichtes Gestrüpp 1,5, sumpfiger Boden 1,8 und loser Sand 2,1. Rucking auf trockenem Strandsand kostet ungefähr doppelt so viel Bewegungsenergie wie dasselbe Rucking auf Asphalt.",
    },
    {
      question: "Was ist die Pandolf-Gleichung?",
      answer:
        "Sie ist das Standardmodell für die Stoffwechselkosten des Lasttragens, 1977 von Pandolf, Givoni und Goldman für die US-Armee veröffentlicht. Sie sagt die Stoffwechselrate in Watt aus Körpermasse, Last, Gehgeschwindigkeit, Steigung und Untergrund voraus. Anders als MET-Tabellen und die ACSM-Gleichungen behandelt sie die Last als echte Eingabe, statt sie zu ignorieren.",
    },
    {
      question: "Warum nimmt dieser Rechner keine Gefällestrecken an?",
      answer:
        "Weil die Pandolf-Gleichung nur für ebenes und bergauf gerichtetes Gehen geprüft wurde. Mit negativer Steigung liefert sie unglaubwürdig niedrige Kosten, denn Absteigen ist in der Formel billiger als die Ebene, in der Wirklichkeit aber nicht unbegrenzt. Bergab richtig zu modellieren braucht die separate Santee-Korrektur, deshalb behandelt dieser Rechner Abstiege als Ebene, statt eine Zahl auszugeben, hinter der er nicht stehen kann.",
    },
    {
      question: "Ist Rucking zum Fettabbau besser als Laufen?",
      answer:
        "Es lässt sich leichter durchhalten, und das zählt meist mehr als die Rate pro Minute. Rucking liegt je nach Last und Steigung bei etwa 6 bis 8 MET, unter den meisten Läufen, aber die geringe Belastung erlaubt viel mehr Wochenumfang ohne den Gelenkstress, der Laufblöcke beendet. Der gesamte Wochenenergieverbrauch treibt den Fettabbau, nicht die Intensität einer einzelnen Einheit.",
    },
  ],
  cta: {
    title: "Verfolge deine Ruckings",
    description:
      "Lade die Steps-App, um deine Walks, verbrannte Kalorien und deinen Fortschritt automatisch zu erfassen.",
  },
  sticky: "Zähl deine Schritte mit Steps",
  howTo: {
    name: "So berechnest du Rucking-Kalorien",
    description:
      "Gib Körpergewicht, Packgewicht, Tempo, Steigung und Untergrund ein, um die verbrannten Kalorien zu sehen und wie viel davon die Last ausmacht.",
    steps: [
      {
        name: "Körper- und Packgewicht eingeben",
        text: "Beides in Kilogramm oder Pfund. Die Laststrafe wächst mit dem Quadrat des Verhältnisses Pack zu Körper, also zählen beide Zahlen, nicht nur das Pack.",
      },
      {
        name: "Tempo und Dauer setzen",
        text: "Rucking-Tempo in km/h oder mph und wie lange du unterwegs warst. Zusammen ergeben sie die zurückgelegte Distanz.",
      },
      {
        name: "Steigung ergänzen",
        text: "Durchschnittliche Bergauf-Steigung in Prozent. Abstiege gelten als Ebene, weil die Pandolf-Gleichung nur für ebenes und bergauf gerichtetes Gehen geprüft ist.",
      },
      {
        name: "Untergrund wählen",
        text: "Von der Asphaltstraße über Trail und Dickicht bis zu losem Sand. Der Untergrund multipliziert die Bewegungskosten, und Sand ist mehr als doppelt so teuer wie Asphalt.",
      },
      {
        name: "Kalorien und Lastanteil ablesen",
        text: "Der Rechner liefert die Gesamtkalorien, wie viele allein vom Pack kommen, die Stoffwechselrate in Watt und eine Tabelle der Kalorien bei üblichen Rucking-Lasten.",
      },
    ],
  },
};

export default de;

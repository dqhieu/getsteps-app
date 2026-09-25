import type { ConversionHubsMessages } from "./en";

const de: ConversionHubsMessages = {
  breadcrumbLabel: "Brotkrumen",
  openCalculator: "Rechner öffnen →",
  units: {
    steps: "{count} Schritte",
    miles: "{count} Meilen",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} kcal",
    strideCm: "{stride} cm",
    detailSteps: "{count} Schritte →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count} Meile",
    other: "{count} Meilen",
  },
  mileArrow: {
    one: "{count} Meile →",
    other: "{count} Meilen →",
  },
  duration: {
    minutes: "{minutes} Min.",
    hours: "{hours} Std.",
    hoursMinutes: "{hours} Std. {minutes} Min.",
  },
  heights: [
    "1,47 m (147 cm) — klein",
    "1,63 m (163 cm) — Durchschnittsfrau",
    "1,75 m (175 cm) — Durchschnittserwachsener",
    "1,83 m (183 cm) — Durchschnittsmann",
    "1,93 m (193 cm) — groß",
  ],
  heightShort: {
    petite: "1,47 m",
    tall: "1,93 m",
  },
  paces: {
    slow: "Langsam (2 mph)",
    normal: "Normal (3 mph)",
    brisk: "Zügig (4 mph)",
  },
  hub: {
    meta: {
      title: "Schritte umrechnen — Meilen, Kilometer und Kalorien",
      description:
        "Rechne zwischen Schritten, Meilen, Kilometern und Kalorien um. Schnelle Antworten, vollständige Tabellen und ein Rechner für deine Größe und dein Gewicht.",
      keywords: [
        "Schritte umrechnen",
        "Schritt-Umrechnungstabelle",
        "Schritte in Meilen",
        "Meilen in Schritte",
        "Schritte in Kalorien",
        "Schrittdistanz umrechnen",
      ],
      ogTitle: "Schritte umrechnen",
      ogDescription:
        "Rechne zwischen Schritten, Meilen, Kilometern und Kalorien um. Schnelle Antworten und vollständige Tabellen.",
      ogImageAlt: "Schritte umrechnen",
    },
    title: "Schritte umrechnen",
    subtitle:
      "Schnelle, genaue Antworten für jede gängige Umrechnung — Meilen, Kilometer, Kalorien und Gehzeit.",
    seeAll: "Alle {count} anzeigen →",
    categories: {
      "steps-to-miles": {
        title: "Schritte in Meilen",
        description: "Rechne eine Schrittzahl in gelaufene Meilen um",
      },
      "miles-to-steps": {
        title: "Meilen in Schritte",
        description: "Rechne Meilen in die entsprechende Schrittzahl um",
      },
      "steps-to-calories": {
        title: "Schritte in Kalorien",
        description: "Schätze verbrannte Kalorien für eine Schrittzahl",
      },
      "steps-to-km": {
        title: "Schritte in Kilometer",
        description: "Rechne eine Schrittzahl in gelaufene Kilometer um",
      },
      "km-to-steps": {
        title: "Kilometer in Schritte",
        description: "Rechne Kilometer in die entsprechende Schrittzahl um",
      },
      "steps-to-time": {
        title: "Schritte in Gehzeit",
        description: "Wie lange du für eine Schrittzahl zu Fuß brauchst",
      },
      "miles-to-time": {
        title: "Meilen in Gehzeit",
        description: "Wie lange du für eine Anzahl Meilen zu Fuß brauchst",
      },
    },
    stepsToMilesTitle: "Beliebt: Schritte in Meilen",
    milesToStepsTitle: "Beliebt: Meilen in Schritte",
    stepsToCaloriesTitle: "Beliebt: Schritte in Kalorien",
    personalTitle: "Du willst persönliche Zahlen?",
    personalBody:
      "Diese Tabellen nutzen Durchschnittswerte. In den Rechnern gibst du deine Größe, dein Gewicht und dein Tempo ein und bekommst eine genaue Antwort.",
    distanceCta: "Schritt-Distanz-Rechner",
    calorieCta: "Kalorienrechner",
  },
  stepsToMiles: {
    meta: {
      title: "Schritte in Meilen umrechnen — Tabelle und Rechner",
      description:
        "Rechne eine Schrittzahl in Meilen um. {ten} Schritte ≈ {tenMiles} Meilen · {five} Schritte ≈ {fiveMiles} Meilen. Vollständige Tabelle von {from} bis {to} Schritten.",
      keywords: [
        "Schritte in Meilen",
        "Schritte in Meilen umrechnen",
        "Schritte-Meilen-Rechner",
        "Schritte-Meilen-Tabelle",
        "Schritt-Meile-Umrechnung",
        "wie viele Meilen sind X Schritte",
      ],
      ogTitle: "Schritte in Meilen umrechnen — Tabelle und Rechner",
      ogDescription:
        "Rechne eine Schrittzahl in Meilen um. {ten} Schritte ≈ {tenMiles} Meilen. Tabelle von {from} → {to} Schritten.",
      ogImageAlt: "Schritte in Meilen",
    },
    crumb: "Schritte in Meilen",
    title: "Schritte in Meilen umrechnen",
    intro:
      "Rechne eine Schrittzahl in Meilen um. Jede Zeile führt zu einer Detailseite mit Kalorien, Gehzeit und einer Schrittlängen-Tabelle nach Körpergröße.",
    formulaTitle: "Die schnelle Formel",
    formula: "Meilen ≈ Schritte × {factor}",
    formulaNote:
      "Das nimmt eine durchschnittliche Schrittlänge von {stride} cm ({feet} Fuß) an. Größere Menschen legen pro Schritt etwas mehr zurück, kleinere etwas weniger. Für deine Zahl klickst du eine Zeile in der Tabelle an.",
    tableTitle: "Vollständige Umrechnungstabelle",
    columns: {
      steps: "Schritte",
      miles: "Meilen",
      kilometers: "Kilometer",
      detail: "Detailseite",
    },
    exactTitle: "Du willst die genaue Zahl für deine Größe?",
    exactBody:
      "Unser Schritt-Distanz-Rechner berechnet die genaue Antwort für {your} Schrittlänge — gib einfach deine Größe ein.",
    your: "deine",
    accuracyTitle: "Wie genau ist die Umrechnung von Schritten in Meilen?",
    accuracyBody:
      "Die Standard-Schrittlänge von {stride} cm / {feet} Fuß ist der Wert, den CDC, Mayo Clinic und Harvard Health für einen Erwachsenen durchschnittlicher Größe am häufigsten nennen. Echte Schrittlängen liegen etwa zwischen {short} cm (klein) und {tall} cm (groß), die Distanz kann also um ±{low}–{high} % abweichen.",
    accuracyApp:
      "Für die genaueste Zahl installierst du Steps auf deinem iPhone oder deiner Apple Watch — die App misst deine tatsächliche Schrittlänge aus deinen Trainingseinheiten.",
  },
  milesToSteps: {
    meta: {
      title: "Wie viele Schritte sind eine Meile? — {steps} Schritte (plus Tabelle)",
      description:
        "{one} Meile ≈ {steps} Schritte für einen durchschnittlichen Erwachsenen. Nutze die Tabelle, um Meilen in Schritte umzurechnen, oder öffne die Details für Kalorien und Gehzeit nach deiner Größe.",
      keywords: [
        "wie viele Schritte hat eine Meile",
        "Meilen in Schritte",
        "Meile in Schritten",
        "1 Meile in Schritten",
        "Schritte in einer Meile",
        "Meilen in Schritte umrechnen",
      ],
      ogTitle: "Wie viele Schritte sind eine Meile? — {steps} Schritte",
      ogDescription:
        "{one} Meile ≈ {steps} Schritte für einen durchschnittlichen Erwachsenen. Tabelle plus Rechner nach Größe.",
      ogImageAlt: "Meilen in Schritte",
    },
    crumb: "Meilen in Schritte",
    title: "Wie viele Schritte sind eine Meile?",
    intro:
      "Kurzantwort: etwa {highlight} für einen durchschnittlichen Erwachsenen. Die genaue Zahl hängt von deiner Größe ab — die Tabelle steht unten.",
    quickLabel: "Kurzantwort",
    heroFigure: "≈ {steps}",
    heroNote:
      "Durchschnittlicher Erwachsener, Schrittlänge {stride} cm ({feet} Fuß). Deine Zahl hängt von deiner Größe ab.",
    heightTitle: "Schritte pro Meile nach Größe",
    heightIntro:
      "Die Schrittlänge ist ungefähr {ratio} × deine Körpergröße. Kleinere Menschen brauchen mehr Schritte für dieselbe Distanz.",
    heightColumns: {
      height: "Größe",
      stride: "Schrittlänge",
      steps: "Schritte pro Meile",
    },
    formulaTitle: "Die Umrechnungsformel",
    formula: "Schritte ≈ Meilen × {steps}",
    formulaNote:
      "Oder: {one} Meile = {meters} m × {cm} cm ÷ {stride} cm Schrittlänge ≈ {steps} Schritte.",
    tableTitle: "Tabelle Meilen → Schritte",
    columns: {
      miles: "Meilen",
      steps: "Schritte (Durchschnitt)",
      detail: "Detailseite",
    },
    exactTitle: "Du willst die genaue Zahl für deine Größe?",
    exactBody:
      "Nutze den Schritt-Distanz-Rechner — gib deine Größe einmal ein und erhalte deine persönlichen Schritte pro Meile.",
    whyTitle: `Warum nicht einfach „{rule} Schritte pro Meile“ sagen?`,
    whyBody:
      "Die Faustregel von {rule} Schritten ist eine nützliche Abkürzung, lässt aber eine echte Lücke. Mit {stride} cm als durchschnittlicher Schrittlänge — dem Wert von CDC und Mayo Clinic — sind es etwa {perMile}, nicht {rule}. An einem Tag mit {daily} Schritten fehlt der einfacheren Regel ungefähr eine Viertelmeile.",
    perMile: "{steps} Schritte pro Meile",
    connectionTitle: "Der Zusammenhang mit {daily} Schritten",
    connectionBody:
      "Das übliche Tagesziel von {daily} Schritten entspricht etwa {distance} für einen durchschnittlichen Erwachsenen. Deshalb dauern {daily} Schritte ungefähr {minutes} Minuten Gehen in normalem Tempo, über den Tag verteilt.",
    distance: "{miles} Meilen ({km} km)",
    faq: [
      {
        question: "Wie viele Schritte sind in einer Meile?",
        answer:
          "Etwa {steps} Schritte für einen durchschnittlichen Erwachsenen bei {stride} cm ({feet} Fuß) Schrittlänge. Die Spanne reicht von ungefähr {tallSteps} Schritten bei {tallHeight} bis {petiteSteps} Schritten bei {petiteHeight}.",
      },
      {
        question: "Wie viele Schritte sind 2 Meilen?",
        answer:
          "Etwa {steps} Schritte für einen durchschnittlichen Erwachsenen. Weitere Distanzen stehen in der Tabelle auf dieser Seite.",
      },
      {
        question: "Wie viele Schritte sind 5 Meilen?",
        answer: "Etwa {steps} Schritte — ungefähr das übliche Tagesziel von {daily} Schritten.",
      },
      {
        question: "Hängt die Schrittzahl pro Meile von der Körpergröße ab?",
        answer:
          "Ja. Deine Schrittlänge ist ungefähr {ratio} × deine Größe. Jemand mit {petiteHeight} macht etwa {petiteSteps} Schritte pro Meile, jemand mit {tallHeight} etwa {tallSteps} — ein Unterschied von {percent} %.",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "Schritte in km umrechnen — Tabelle und Rechner",
      description:
        "Rechne eine Schrittzahl in Kilometer um. {steps} Schritte ≈ {km} km. Vollständige Tabelle von {from} bis {to} Schritten.",
      keywords: [
        "Schritte in km umrechnen",
        "Schritte in Kilometer",
        "Schritte in km",
        "Schritt-km-Umrechnung",
        "Schritte-km-Tabelle",
        "wie viele km sind X Schritte",
      ],
      ogTitle: "Schritte in km umrechnen",
      ogDescription:
        "Rechne eine Schrittzahl in km um. {steps} Schritte ≈ {km} km. Vollständige Umrechnungstabelle.",
      ogImageAlt: "Schritte in Kilometer",
    },
    crumb: "Schritte in km",
    title: "Schritte in Kilometer umrechnen",
    intro:
      "Rechne eine Schrittzahl in Kilometer um. Jede Zeile führt zu einer Detailseite mit Kalorien, Gehzeit und einer Schrittlängen-Tabelle nach Größe. Für eine genaue, persönliche Antwort nutze den {calculator}.",
    calculatorLink: "Schritt-Distanz-Rechner",
    formulaTitle: "Die schnelle Formel",
    formula: "km ≈ Schritte × {factor}",
    formulaNote:
      "Oder: Schritte × {stride} cm Schrittlänge ÷ {perKm} = Distanz in km. Die durchschnittliche Schrittlänge eines Erwachsenen beträgt {stride} cm ({feet} Fuß).",
    tableTitle: "Vollständige Umrechnungstabelle",
    columns: {
      steps: "Schritte",
      kilometers: "Kilometer",
      miles: "Meilen",
      detail: "Detailseite",
    },
    exactTitle: "Du willst die genaue Zahl für deine Größe?",
    exactBody:
      "Unser Schritt-Distanz-Rechner berechnet die genaue Antwort für deine Schrittlänge — gib einfach deine Größe ein.",
  },
  kmToSteps: {
    meta: {
      title: "Wie viele Schritte sind ein km? — {steps} Schritte (plus Tabelle)",
      description:
        "{one} km ≈ {steps} Schritte für einen durchschnittlichen Erwachsenen. Tabelle von {from}–{to} km plus Rechner nach Größe für deine genaue Schrittzahl.",
      keywords: [
        "wie viele Schritte hat ein km",
        "km in Schritte",
        "Kilometer in Schritte",
        "1 km in Schritten",
        "5 km in Schritten",
        "km in Schritte umrechnen",
      ],
      ogTitle: "Wie viele Schritte sind ein km? — {steps} Schritte",
      ogDescription:
        "{one} km ≈ {steps} Schritte für einen durchschnittlichen Erwachsenen. Vollständige Tabelle.",
      ogImageAlt: "Km in Schritte",
    },
    crumb: "Km in Schritte",
    title: "Wie viele Schritte sind ein Kilometer?",
    intro:
      "Kurzantwort: etwa {highlight} für einen durchschnittlichen Erwachsenen. Die volle Zahl hängt von deiner Größe ab — sieh in die Tabelle.",
    quickLabel: "Kurzantwort",
    heroFigure: "≈ {steps}",
    heroNote:
      "Durchschnittlicher Erwachsener, Schrittlänge {stride} cm ({feet} Fuß). Deine Zahl hängt von deiner Größe ab.",
    heightTitle: "Schritte pro km nach Größe",
    heightIntro:
      "Die Schrittlänge ist ungefähr {ratio} × deine Körpergröße. Kleinere Menschen brauchen mehr Schritte für dieselbe Distanz.",
    heightColumns: {
      height: "Größe",
      stride: "Schrittlänge",
      steps: "Schritte pro km",
    },
    formulaTitle: "Die Umrechnungsformel",
    formula: "Schritte ≈ km × {steps}",
    formulaNote: "Oder: {one} km = {cm} cm ÷ {stride} cm Schrittlänge ≈ {steps} Schritte.",
    tableTitle: "Tabelle km → Schritte",
    columns: {
      kilometers: "Kilometer",
      steps: "Schritte (Durchschnitt)",
      detail: "Detailseite",
    },
    exactTitle: "Du willst die genaue Zahl für deine Größe?",
    exactBody:
      "Nutze den Schritt-Distanz-Rechner — gib deine Größe einmal ein und erhalte deine persönlichen Schritte pro km.",
    faq: [
      {
        question: "Wie viele Schritte sind in einem Kilometer?",
        answer:
          "Etwa {steps} Schritte für einen durchschnittlichen Erwachsenen bei {stride} cm Schrittlänge. Die Spanne liegt ungefähr bei {tall} (groß) bis {petite} (klein).",
      },
      {
        question: "Wie viele Schritte sind 5 km?",
        answer: "Etwa {steps} Schritte für einen durchschnittlichen Erwachsenen — ein typischer 5-km-Lauf.",
      },
      {
        question: "Wie viele Schritte sind 10 km?",
        answer: "Etwa {steps} Schritte — über dem üblichen Tagesziel von {daily} Schritten.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Schritte in Kalorien umrechnen — wie viele Kalorien pro Schritt?",
      description:
        "Rechne eine Schrittzahl in verbrannte Kalorien um. {steps} Schritte ≈ {calories} Kalorien. Tabelle von {from} bis {to} Schritten, abhängig von deinem Gewicht.",
      keywords: [
        "Schritte in Kalorien",
        "Kalorien pro Schritt",
        "Schritt-Kalorien-Umrechnung",
        "wie viele Kalorien sind Schritte",
        "Schritte in Kalorien umrechnen",
      ],
      ogTitle: "Schritte in Kalorien umrechnen",
      ogDescription:
        "{steps} Schritte ≈ {calories} Kalorien. Umrechnungstabelle von {from}–{to} Schritten.",
      ogImageAlt: "Schritte in Kalorien",
    },
    crumb: "Schritte in Kalorien",
    title: "Schritte in Kalorien umrechnen",
    intro:
      "Rechne eine Schrittzahl in verbrannte Kalorien um und öffne dann die Aufschlüsselung nach Gewicht, Tempo und Gehzeit.",
    formulaTitle: "Die schnelle Formel",
    formula: "Kalorien ≈ Schritte × {factor} × (Gewicht in kg ÷ {weight})",
    formulaNote:
      "Etwa {one} Kalorie pro {per} Schritte für einen durchschnittlichen Erwachsenen. Schwerere Menschen verbrennen anteilig mehr.",
    tableTitle: "Vollständige Tabelle (Erwachsener, {lb} lb / {kg} kg, normales Tempo)",
    columns: {
      steps: "Schritte",
      calories: "Kalorien",
      detail: "Detailseite",
    },
    exactTitle: "Du willst deinen persönlichen Kalorienverbrauch?",
    exactBody:
      "Nutze den Schritte-in-Kalorien-Rechner und gib Gewicht, Alter und Geschlecht ein, für eine genauere Zahl.",
  },
  stepsToTime: {
    meta: {
      title: "Wie lange dauert es, X Schritte zu gehen? — Zeit-Tabelle",
      description:
        "Gehzeit für eine Schrittzahl. {steps} Schritte ≈ {hours} Std. {mins} Min. bei normalem Tempo. Tabelle von {from} → {to} Schritten in drei Tempi.",
      keywords: [
        "wie lange dauert es Schritte zu gehen",
        "Schritte in Gehzeit",
        "Gehzeit pro Schritt",
        "Schritte in Minuten",
        "wie lange für X Schritte",
      ],
      ogTitle: "Wie lange dauert es, X Schritte zu gehen?",
      ogDescription: "Gehzeit für eine Schrittzahl. Vollständige Tabelle mit drei Tempi.",
      ogImageAlt: "Schritte in Gehzeit",
    },
    crumb: "Gehzeit",
    title: "Wie lange dauert es, X Schritte zu gehen?",
    intro:
      "Gehzeit für eine Schrittzahl, in drei üblichen Tempi. Klick eine Zeile für die Detailseite mit Kalorien und Schrittlänge an.",
    formulaTitle: "Die schnelle Formel",
    formula: "Minuten ≈ Schritte ÷ {cadence}",
    formulaNote:
      "Die meisten Erwachsenen gehen mit etwa {cadence} Schritten pro Minute in normalem Tempo. {steps} Schritte ≈ {minutes} Minuten ({hours} Std. {mins} Min.) Gehen. Etwas schneller ({mph} mph) sind es {fastHours} Std. {fastMins} Min.",
    tableTitle: "Gehzeit nach Schrittzahl und Tempo",
    columns: {
      steps: "Schritte",
      detail: "Detail",
    },
    exactTitle: "Du willst einen bestimmten Gang planen?",
    exactBody:
      "Der Gehzeit-Rechner schätzt die Dauer für jede Distanz oder Schrittzahl, mit Abfahrts- und Ankunftszeit.",
  },
  milesToTime: {
    meta: {
      title: "Wie lange dauert es, X Meilen zu gehen? — nach Tempo",
      description:
        "Gehzeit für eine Distanz in Meilen. {one} Meile ≈ {oneMin} Min., {three} Meilen ≈ {threeHours} Std., {five} Meilen ≈ {fiveHours} Std. {fiveMins} Min. Tabelle in drei Tempi.",
      keywords: [
        "wie lange dauert eine Meile zu Fuß",
        "wie lange Meilen gehen",
        "Gehzeit Meilen",
        "Meilen in Gehzeit",
        "wie lange sind 5 Meilen zu Fuß",
        "wie lange sind 3 Meilen zu Fuß",
      ],
      ogTitle: "Wie lange dauert es, X Meilen zu gehen?",
      ogDescription: "Gehzeit für eine Distanz in Meilen, in drei Tempi.",
      ogImageAlt: "Meilen in Gehzeit",
    },
    crumb: "Meilen in Gehzeit",
    title: "Wie lange dauert es, X Meilen zu gehen?",
    intro:
      "Gehzeit für eine Distanz, in drei üblichen Tempi. Klick eine Zeile für die Detailseite an.",
    formulaTitle: "Die schnelle Regel",
    formula: "Minuten ≈ Meilen × {minutes}",
    formulaNote:
      "Bei normalem Tempo von {normal} mph. Zügige Geher ({brisk} mph) sparen etwa {briskCut} %; langsame Geher ({slow} mph) brauchen {slowAdd} % mehr.",
    tableTitle: "Gehzeit nach Distanz und Tempo",
    columns: {
      distance: "Distanz",
      detail: "Detail",
    },
    exactTitle: "Du planst eine bestimmte Route?",
    exactBody:
      "Der Gehzeit-Rechner deckt jede Distanz ab, mit Abfahrts- und Ankunftszeit, Pausen und Tempo.",
    faq: [
      {
        question: "Wie lange dauert 1 Meile zu Fuß?",
        answer:
          "Etwa {normalMin} Minuten bei normalem Tempo von {normalMph} mph. Zügig ({briskMph} mph): {briskMin} Minuten. Langsam ({slowMph} mph): {slowMin} Minuten.",
      },
      {
        question: "Wie lange dauern 3 Meilen zu Fuß?",
        answer:
          "Etwa {hours} Stunde bei normalem Tempo. Zügig: {briskMin} Minuten. Langsam: {slowHours} Stunde {slowMins} Minuten.",
      },
      {
        question: "Wie lange dauern 5 Meilen zu Fuß?",
        answer:
          "Etwa {hours} Stunde {mins} Minuten bei normalem Tempo. Zügig: {briskHours} Stunde {briskMins} Minuten. Langsam: {slowHours} Stunden {slowMins} Minuten.",
      },
    ],
  },
};

export default de;

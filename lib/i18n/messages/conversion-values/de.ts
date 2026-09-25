import type { ConversionValuesMessages } from "./en";

const de: ConversionValuesMessages = {
  ui: {
    breadcrumb: "Brotkrumen",
    quickAnswer: "Kurzantwort",
    forContext: "Zum Vergleich:",
    distanceByHeightTitle: "Die Strecke hängt von deiner Größe ab",
    distanceByHeightBody:
      "Deine Schrittlänge beträgt etwa das 0,41-Fache deiner Körpergröße — kleinere Menschen legen pro Schritt weniger Strecke zurück.",
    heightColumn: "Deine Größe",
    strideColumn: "Schrittlänge",
    milesColumn: "Meilen",
    kilometersColumn: "Kilometer",
    stepsColumn: "Schritte",
    stepsRequiredTitle: "Die nötigen Schritte hängen von deiner Größe ab",
    stepsRequiredBody: "Kleinere Menschen brauchen mehr Schritte für dieselbe Strecke.",
    caloriesTitle: "Verbrannte Kalorien nach Gewicht und Tempo",
    caloriesBody:
      "Die Kalorien steigen linear mit dem Körpergewicht. Schnelleres Tempo verbrennt mehr — beim Gehen aber nur etwas mehr.",
    weightColumn: "Dein Gewicht",
    timeTitle: "Wie lange dauert es?",
    timeBody:
      "Die Zeit hängt von deinem Gehtempo ab. Die meisten Erwachsenen gehen normal mit etwa 3 mph.",
    paceColumn: "Tempo",
    speedColumn: "Geschwindigkeit",
    timeColumn: "Zeit",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} kcal",
    mph: "{value} mph",
    ctaTitle: "Verfolge deine echten Werte mit Steps",
    ctaBody:
      "Diese Umrechnungen nutzen Durchschnittswerte. Die Steps-App erfasst deine {actual} Schrittlänge, Kalorien und Gehzeit — synchronisiert von deinem iPhone und deiner Apple Watch.",
    ctaActual: "tatsächliche",
    relatedTitle: "Ähnliche Umrechnungen",
    faqTitle: "Häufige Fragen",
    heights: [
      "147 cm (4′10″) — zierlich",
      "163 cm (5′4″) — Durchschnittsfrau",
      "175 cm (5′9″) — Durchschnittserwachsener",
      "183 cm (6′0″) — Durchschnittsmann",
      "193 cm (6′4″) — groß",
    ],
    weights: [
      "54 kg (120 lb)",
      "68 kg (150 lb)",
      "82 kg (180 lb)",
      "95 kg (210 lb)",
      "113 kg (250 lb)",
    ],
    paces: ["Langsam (2 mph)", "Normal (3,1 mph)", "Zügig (4 mph)"],
    duration: {
      minutes: "{count} Min.",
      hours: "{count} Std.",
      hoursMinutes: "{hours} Std. {minutes} Min.",
    },
  },
  plurals: {
    mile: { one: "1 Meile", other: "{count} Meilen" },
    mileArticle: { one: "eine Meile", other: "{count} Meilen" },
    mileInSteps: { one: "{count} Meile in Schritten", other: "{count} Meilen in Schritten" },
    mileToSteps: { one: "{count} Meile in Schritte", other: "{count} Meilen in Schritte" },
    howManyStepsInMile: {
      one: "wie viele Schritte in {count} Meile",
      other: "wie viele Schritte in {count} Meilen",
    },
    howManyStepsIsMile: {
      one: "wie viele Schritte sind {count} Meile",
      other: "wie viele Schritte sind {count} Meilen",
    },
    mileWalkSteps: "{count} Meile Gehen Schritte",
    howLongDoesMile: {
      one: "wie lange dauert es {count} Meile zu gehen",
      other: "wie lange dauert es {count} Meilen zu gehen",
    },
    howLongToMile: {
      one: "wie lange {count} Meile gehen",
      other: "wie lange {count} Meilen gehen",
    },
    walkingTimeMile: {
      one: "Gehzeit {count} Meile",
      other: "Gehzeit {count} Meilen",
    },
    mileWalkingTime: {
      one: "{count} Meile Gehzeit",
      other: "{count} Meilen Gehzeit",
    },
    walkMileTime: {
      one: "{count} Meile gehen — Zeit",
      other: "{count} Meilen gehen — Zeit",
    },
  },
  familiar: {
    olympic: "eine olympische 400-m-Runde",
    centralPark: "die Länge des Central Park (New York)",
    fiveK: "ein 5-km-Lauf",
    tenK: "ein 10-km-Lauf",
    brooklyn: "die Brooklyn Bridge hin und zurück",
    half: "ein Halbmarathon",
    marathon: "ein Marathon",
  },
  foods: {
    banana: "eine Banane (105 kcal)",
    apple: "ein Apfel (95 kcal)",
    bread: "eine Scheibe Brot (80 kcal)",
    coffee: "eine Tasse Kaffee mit Sahne (50 kcal)",
    cookie: "ein Schokoladenkeks (160 kcal)",
    juice: "ein Glas Orangensaft (110 kcal)",
  },
  stepsToKm: {
    meta: {
      title: "{steps} Schritte in km — wie viele Kilometer sind {steps} Schritte?",
      description:
        "{steps} Schritte ≈ {km} km ({miles} Meilen) für einen durchschnittlichen Erwachsenen. Sieh die genaue Strecke nach deiner Größe, verbrannte Kalorien und Gehzeit.",
      keywords: [
        "{steps} schritte in km",
        "{steps} schritte in kilometer",
        "wie viele km sind {steps} schritte",
        "{steps} schritte kilometer",
      ],
      ogImageAlt: "{steps} Schritte in km",
    },
    h1: "{steps} Schritte in Kilometer",
    subheading: "Wie weit gehst du, wenn du {steps} Schritte erreichst?",
    primary: "{km} km",
    secondary:
      "{miles} Meilen · etwa {time} bei normalem Tempo · {calories} Kalorien für eine 70-kg-Person",
    intro:
      "Beim Gehen von {steps} Schritten legst du als durchschnittlicher Erwachsener etwa {km} km ({miles} Meilen) zurück, bei einer typischen Schrittlänge von 76 cm (2,5 ft). Bei normalem Tempo von 5 km/h dauert das etwa {time} und verbrennt ungefähr {calories} Kalorien für eine Person mit 70 kg (155 lb). Die genaue Strecke hängt von deiner Größe ab — größere Menschen kommen pro Schritt weiter. Siehe die Tabelle unten.",
    crumb: "Schritte in km",
    crumbValue: "{steps} Schritte",
    related: "{steps} Schritte in km",
    relatedHub: "Wie viele Schritte sind ein km?",
    relatedMiles: "{steps} Schritte in Meilen",
    faq: [
      {
        question: "Wie viele km sind {steps} Schritte?",
        answer:
          "{steps} Schritte sind etwa {km} km ({miles} Meilen) für einen durchschnittlichen Erwachsenen mit 76 cm Schrittlänge. Kleinere Menschen legen etwas weniger zurück, größere etwas mehr — in der Größentabelle auf dieser Seite steht deine Zahl.",
      },
      {
        question: "Wie lange dauert es, {steps} Schritte zu gehen?",
        answer:
          "Bei normalem Tempo von 5 km/h dauern {steps} Schritte etwa {time}. Bei zügigem Tempo von 6,4 km/h etwa {brisk}. Bei langsamem Tempo von 3,2 km/h etwa {slow}.",
      },
      {
        question: "Wie viele Kalorien verbrennen {steps} Schritte?",
        answer:
          "{steps} Schritte verbrennen ungefähr {calories} Kalorien für eine Person mit 70 kg (155 lb) bei normalem Tempo. Leichtere Menschen verbrennen weniger Kalorien pro Schritt, schwerere mehr. Siehe die Kalorientabelle auf dieser Seite für dein Gewicht.",
      },
      {
        question: "Wie wird die Umrechnung von Schritten in km berechnet?",
        answer:
          "Wir nutzen eine durchschnittliche Schrittlänge von 76 cm (2,5 ft). Schritte × Schrittlänge (cm) ÷ 100.000 = Strecke in km. Also {steps} Schritte × 76 cm ÷ 100.000 ≈ {km} km. Deine tatsächliche Schrittlänge ist etwa das 0,41-Fache deiner Größe.",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "{steps} Schritte in Meilen — wie viele Meilen sind {steps} Schritte?",
      description:
        "{steps} Schritte ≈ {miles} Meilen ({km} km) für einen durchschnittlichen Erwachsenen. Sieh die genaue Strecke nach deiner Größe, verbrannte Kalorien und Gehzeit.",
      keywords: [
        "{steps} schritte in meilen",
        "{steps} schritte in miles",
        "wie viele meilen sind {steps} schritte",
        "{steps} schritte",
        "{steps} schritte distanz",
        "{steps} schritte kalorien",
      ],
      ogImageAlt: "{steps} Schritte in Meilen",
    },
    h1: "{steps} Schritte in Meilen",
    subheading: "Wie weit gehst du, wenn du {steps} Schritte erreichst?",
    primary: "{miles} Meilen",
    secondary:
      "{km} km · etwa {time} bei normalem Tempo · {calories} Kalorien für eine Person mit 155 lb (70 kg)",
    intro:
      "Beim Gehen von {steps} Schritten legst du als durchschnittlicher Erwachsener etwa {miles} Meilen ({km} km) zurück, bei einer typischen Schrittlänge von 76 cm (2,5 ft). Bei normalem Tempo von 3 mph dauert das etwa {time} und verbrennt ungefähr {calories} Kalorien für eine Person mit 155 lb (70 kg). Die genaue Strecke hängt von deiner Größe ab — größere Menschen kommen pro Schritt weiter. Siehe die Tabelle unten.",
    crumb: "Schritte in Meilen",
    crumbValue: "{steps} Schritte",
    related: "{steps} Schritte in Meilen",
    relatedHub: "Wie viele Schritte sind eine Meile?",
    relatedCalories: "{steps} Schritte in Kalorien",
    realWorld: {
      roughly: "{miles} Meilen entsprechen ungefähr der Strecke von {name}.",
      times: "Das ist etwa {factor}× die Strecke von {name}.",
      shorter: "Das ist etwa {factor}× kürzer als {name}.",
    },
    faq: [
      {
        question: "Wie viele Meilen sind {steps} Schritte?",
        answer:
          "{steps} Schritte sind etwa {miles} Meilen ({km} km) für einen durchschnittlichen Erwachsenen mit 76 cm Schrittlänge. Kleinere Menschen legen etwas weniger zurück, größere etwas mehr — in der Größentabelle auf dieser Seite steht deine Zahl.",
      },
      {
        question: "Wie lange dauert es, {steps} Schritte zu gehen?",
        answer:
          "Bei normalem Tempo von 3 mph dauern {steps} Schritte etwa {time}. Bei zügigem Tempo von 4 mph etwa {brisk}. Bei langsamem Tempo von 2 mph etwa {slow}.",
      },
      {
        question: "Wie viele Kalorien verbrennen {steps} Schritte?",
        answer:
          "{steps} Schritte verbrennen ungefähr {calories} Kalorien für eine Person mit 155 lb (70 kg) bei normalem Tempo. Leichtere Menschen verbrennen weniger Kalorien pro Schritt, schwerere mehr. Siehe die Kalorientabelle auf dieser Seite für dein Gewicht.",
      },
      {
        question: "Wie wird die Umrechnung berechnet?",
        answer:
          "Wir nutzen eine durchschnittliche Schrittlänge von 76 cm (2,5 ft), die Zahl, die CDC und Mayo Clinic am häufigsten nennen. Schritte × Schrittlänge = gegangene Strecke. Deine echte Schrittlänge ist etwa das 0,41-Fache deiner Größe — die Größentabelle auf dieser Seite zeigt die Rechnung für fünf übliche Größen.",
      },
    ],
    daily: {
      question: "Sind {steps} Schritte ein gutes Tagesziel?",
      below:
        "{steps} Schritte liegen unter dem Tagesziel von 7.000–10.000 Schritten, das die meisten Gesundheitsbehörden Erwachsenen empfehlen. Nimm es als Start und steigere dich langsam — schon 1.000 zusätzliche Schritte am Tag verbessern die Herzgesundheit.",
      mid: "Ja — {steps} Schritte liegen in dem Bereich, den die meisten Studien und die CDC für Erwachsene nennen. Wer das regelmäßig schafft, hat ein geringeres Risiko für Herz-Kreislauf-Erkrankungen und eine bessere Gesundheit auf Dauer.",
      above:
        "{steps} Schritte liegen über dem üblichen Tagesziel von 10.000. Das ist ein starkes Volumen für Herz-Kreislauf-Fitness und Gewicht — Erholungstage mit weniger Schritten sind aber ebenfalls gesund.",
    },
  },
  milesToSteps: {
    meta: {
      title: "Wie viele Schritte sind {miles}? — {steps} Schritte",
      description:
        "{miles} ≈ {steps} Schritte für einen durchschnittlichen Erwachsenen. Sieh die genaue Schrittzahl nach deiner Größe, verbrannte Kalorien und Gehzeit.",
      ogImageAlt: "{miles} in Schritten",
    },
    h1: "Wie viele Schritte sind {milesArticle}?",
    subheading: "Die Antwort — für einen durchschnittlichen Erwachsenen — und wie sie sich mit deiner Größe ändert.",
    primary: "{steps} Schritte",
    secondary:
      "{miles} · {km} km · etwa {time} bei normalem Tempo · {calories} Kalorien für eine Person mit 155 lb (70 kg)",
    intro:
      "{miles} zu gehen braucht etwa {steps} Schritte für einen durchschnittlichen Erwachsenen, bei einer typischen Schrittlänge von 76 cm (2,5 ft). Bei normalem Tempo von 3 mph dauert das etwa {time} und verbrennt ungefähr {calories} Kalorien für eine Person mit 155 lb (70 kg). Die genaue Schrittzahl hängt von deiner Größe ab — kleinere Menschen brauchen mehr Schritte für dieselbe Strecke. Siehe die Tabelle unten.",
    crumb: "Meilen in Schritte",
    relatedHub: "Schritte-in-Meilen-Umrechner",
    relatedCalories: "{steps} Schritte in Kalorien",
    faq: [
      {
        question: "Wie viele Schritte sind {miles}?",
        answer:
          "{miles} sind etwa {steps} Schritte für einen durchschnittlichen Erwachsenen mit 76 cm Schrittlänge. Kleinere Menschen brauchen mehr Schritte für dieselbe Strecke — in der Größentabelle auf dieser Seite steht deine Zahl.",
      },
      {
        question: "Wie lange dauert es, {miles} zu gehen?",
        answer:
          "Bei normalem Tempo von 3 mph dauern {miles} etwa {time}. Bei zügigem Tempo von 4 mph etwa {brisk}. Bei langsamem Tempo von 2 mph etwa {slow}.",
      },
      {
        question: "Wie viele Kalorien verbrennt {milesArticle}?",
        answer:
          "{miles} zu gehen verbrennt ungefähr {calories} Kalorien für eine Person mit 155 lb (70 kg) bei normalem Tempo. Leichtere Menschen verbrennen weniger, schwerere mehr — siehe die Kalorientabelle auf dieser Seite.",
      },
      {
        question: "Wie wird die Umrechnung von Meilen in Schritte berechnet?",
        answer:
          "Wir multiplizieren die Strecke in Metern mit 100 (cm/m) und teilen durch eine durchschnittliche Schrittlänge von 76 cm. Also {miles} = {meters} m × 100 ÷ 76 ≈ {steps} Schritte. Deine tatsächliche Schrittlänge ist etwa das 0,41-Fache deiner Größe.",
      },
    ],
    exercise: {
      question: "Reicht {miles} am Tag als Bewegung?",
      yes: "Ja — {miles} am Tag ({steps} Schritte) erfüllen locker die vom CDC empfohlenen 150 Minuten moderate Ausdaueraktivität pro Woche, wenn du normal bis zügig gehst.",
      start:
        "{miles} am Tag sind ein guter Anfang. Du liegst im aktiven Bereich und trägst zu den vom CDC empfohlenen 150 Minuten Ausdaueraktivität pro Woche bei, aber ein zweiter Spaziergang am Tag bringt einen deutlicheren Nutzen.",
      below:
        "Weniger als {miles} am Tag liegt unter der Mindestempfehlung des CDC. Steigere dich langsam — schon 1.000 zusätzliche Schritte am Tag verbessern die Herzgesundheit.",
    },
  },
  kmToSteps: {
    meta: {
      title: "Wie viele Schritte sind {km} km? — {steps} Schritte",
      description:
        "{km} km ≈ {steps} Schritte für einen durchschnittlichen Erwachsenen. Sieh die genaue Schrittzahl nach deiner Größe, verbrannte Kalorien und Gehzeit.",
      keywords: [
        "{km} km in schritte",
        "{km} km in schritten",
        "wie viele schritte in {km} km",
        "{km} kilometer in schritten",
      ],
      ogImageAlt: "{km} km in Schritten",
    },
    h1: "Wie viele Schritte sind {km} km?",
    subheading: "Die Antwort — für einen durchschnittlichen Erwachsenen — und wie sie sich mit deiner Größe ändert.",
    primary: "{steps} Schritte",
    secondary:
      "{km} km · etwa {time} bei normalem Tempo · {calories} Kalorien für eine 70-kg-Person",
    intro:
      "{km} km zu gehen braucht etwa {steps} Schritte für einen durchschnittlichen Erwachsenen, bei einer typischen Schrittlänge von 76 cm (2,5 ft). Bei normalem Tempo von 5 km/h dauert das etwa {time} und verbrennt ungefähr {calories} Kalorien für eine Person mit 70 kg (155 lb). Die genaue Schrittzahl hängt von deiner Größe ab — kleinere Menschen brauchen mehr Schritte für dieselbe Strecke.",
    crumb: "Km in Schritte",
    crumbValue: "{km} km",
    related: "{km} km in Schritten",
    relatedHub: "Schritte-in-km-Umrechner",
    faq: [
      {
        question: "Wie viele Schritte sind {km} km?",
        answer:
          "{km} km sind etwa {steps} Schritte für einen durchschnittlichen Erwachsenen mit 76 cm Schrittlänge. Kleinere Menschen brauchen mehr Schritte für dieselbe Strecke — in der Größentabelle auf dieser Seite steht deine Zahl.",
      },
      {
        question: "Wie lange dauert es, {km} km zu gehen?",
        answer:
          "Bei normalem Tempo von 5 km/h dauern {km} km etwa {time}. Bei zügigem Tempo von 6,4 km/h etwa {brisk}. Bei langsamem Tempo von 3,2 km/h etwa {slow}.",
      },
      {
        question: "Wie viele Kalorien verbrennt das Gehen von {km} km?",
        answer:
          "{km} km zu gehen verbrennt ungefähr {calories} Kalorien für eine Person mit 70 kg (155 lb) bei normalem Tempo. Siehe die Kalorientabelle auf dieser Seite für dein Gewicht.",
      },
      {
        question: "Wie wird die Umrechnung von km in Schritte berechnet?",
        answer:
          "Wir multiplizieren die Strecke mit 100.000 (cm/km) und teilen durch eine durchschnittliche Schrittlänge von 76 cm. Also {km} km = {cm} cm ÷ 76 cm ≈ {steps} Schritte. Deine tatsächliche Schrittlänge ist etwa das 0,41-Fache deiner Größe.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "{steps} Schritte Kalorien — wie viele Kalorien verbrennen {steps} Schritte?",
      description:
        "{steps} Schritte verbrennen ungefähr {calories} Kalorien für einen durchschnittlichen Erwachsenen. Sieh den Verbrauch nach Gewicht, Tempo und Gehzeit.",
      keywords: [
        "{steps} schritte kalorien",
        "{steps} schritte wie viele kalorien",
        "kalorien bei {steps} schritten",
        "{steps} schritte kalorienverbrauch",
        "wie viele kalorien sind {steps} schritte",
      ],
      ogImageAlt: "{steps} Schritte Kalorien",
    },
    h1: "{steps} Schritte Kalorien — wie viele Kalorien verbrennst du?",
    subheading: "Kalorienverbrauch beim Gehen von {steps} Schritten, nach Gewicht und Tempo.",
    primary: "≈ {calories} Kalorien",
    secondary:
      "Für eine Person mit 155 lb (70 kg) bei normalem Tempo · {miles} mi / {km} km · etwa {time}",
    intro:
      "{steps} Schritte verbrennen etwa {calories} Kalorien für einen durchschnittlichen Erwachsenen (155 lb / 70 kg) bei normalem Tempo. Das entspricht {miles} Meilen ({km} km) und dauert ungefähr {time}. Der Kalorienverbrauch steigt mit dem Gewicht — leichtere Menschen verbrennen weniger, schwerere mehr.",
    crumb: "Schritte in Kalorien",
    crumbValue: "{steps} Schritte",
    related: "{steps} Schritte Kalorien",
    relatedMiles: "{steps} Schritte in Meilen",
    relatedTool: "Kalorienrechner fürs Gehen",
    realWorld: {
      roughly: "{calories} Kalorien entsprechen ungefähr {name}.",
      times: "{calories} Kalorien sind etwa {factor}× {name}.",
      less: "{calories} Kalorien sind etwa {factor}× weniger als {name}.",
    },
    faq: [
      {
        question: "Wie viele Kalorien verbrennen {steps} Schritte?",
        answer:
          "{steps} Schritte verbrennen etwa {calories} Kalorien für eine Person mit 155 lb (70 kg) bei normalem Tempo von 3 mph. Schwerere Menschen verbrennen mehr — siehe die Gewichtstabelle auf dieser Seite.",
      },
      {
        question: "Ändert das Gehtempo den Kalorienverbrauch?",
        answer:
          "Etwas. Gehen mit 4 mph (zügig) verbrennt etwa 30 % mehr Kalorien pro Minute als 2 mph (langsam), aber du legst die Strecke auch schneller zurück, deshalb liegt der Gesamtwert bei fester Schrittzahl näher beieinander als man denkt. Die Summe reicht von etwa {slowCal} (langsam) bis {briskCal} (zügig) für eine Person mit 150 lb.",
      },
      {
        question: "Wie lange dauert es, {steps} Schritte zu gehen?",
        answer:
          "Etwa {time} bei normalem Tempo (3 mph). Schnelleres Tempo mit 4 mph: {brisk}. Langsames Gehen mit 2 mph: {slow}.",
      },
      {
        question: "Welche Formel steckt hinter diesen Zahlen?",
        answer:
          "Wir nutzen die übliche MET-Formel: Kalorien = MET × Gewicht (kg) × Zeit (Stunden). Für normales Gehtempo ist MET = 3,5. Wir nehmen eine durchschnittliche Schrittlänge von 76 cm, rechnen Schritte in Strecke um und die Strecke dann in Gehzeit.",
      },
    ],
    loss: {
      question: "Verbrennen {steps} Schritte genug Kalorien zum Abnehmen?",
      yes: "{calories} Kalorien sind ein spürbarer Teil eines Tagesdefizits — etwa 0,5 lb Gewichtsverlust in zwei Wochen, wenn du nicht mehr isst, um sie auszugleichen. Zusammen mit einer kleinen Ernährungsumstellung kann das stetiges Abnehmen bringen.",
      no: "{calories} Kalorien helfen, reichen allein aber nicht zum Abnehmen. Ziele auf mindestens 7.500–10.000 Schritte am Tag plus ein kleines Kaloriendefizit über die Ernährung.",
    },
  },
  stepsToTime: {
    meta: {
      title: "Wie lange dauert es, {steps} Schritte zu gehen?",
      description:
        "{steps} Schritte dauern etwa {time} bei normalem Tempo. Sieh die Gehzeit bei drei Tempi, die Strecke und den Kalorienverbrauch.",
      keywords: [
        "wie lange dauert es {steps} schritte zu gehen",
        "wie lange {steps} schritte gehen",
        "{steps} schritte in minuten",
        "{steps} schritte gehzeit",
        "{steps} schritte wie lange",
      ],
      ogImageAlt: "Gehzeit für {steps} Schritte",
    },
    h1: "Wie lange dauert es, {steps} Schritte zu gehen?",
    subheading: "Gehzeit, Strecke und Kalorien für {steps} Schritte.",
    primary: "≈ {time}",
    secondary: "Bei normalem Tempo von 3 mph · {miles} mi / {km} km · {calories} Kalorien",
    intro:
      "{steps} Schritte dauern etwa {time} bei normalem Tempo von 3 mph (5 km/h). Zügiges Tempo von 4 mph verkürzt das auf {brisk}; langsames Gehen mit 2 mph dehnt es auf {slow}. Du legst {miles} Meilen ({km} km) zurück und verbrennst etwa {calories} Kalorien.",
    crumb: "Gehzeit",
    crumbValue: "{steps} Schritte",
    related: "{steps} Schritte — Gehzeit",
    relatedMiles: "{steps} Schritte in Meilen",
    relatedTool: "Gehzeit-Rechner",
    faq: [
      {
        question: "Wie lange dauert es, {steps} Schritte zu gehen?",
        answer:
          "Etwa {time} bei normalem Tempo von 3 mph. Zügiges Tempo (4 mph): {brisk}. Langsames Gehen (2 mph): {slow}.",
      },
      {
        question: "Ändert sich die Gehzeit mit meiner Größe?",
        answer:
          "Die Zeit bleibt ungefähr gleich — was sich ändert, ist die Schrittzahl. Größere Menschen brauchen weniger Schritte für dieselbe Strecke, die meisten gehen aber mit ähnlicher Frequenz (etwa 100 Schritte pro Minute). Die Zeit hängt also vor allem vom Tempo ab, nicht von der Größe.",
      },
      {
        question: "Wie weit sind {steps} Schritte?",
        answer: "{steps} Schritte sind etwa {miles} Meilen ({km} km) für einen durchschnittlichen Erwachsenen.",
      },
      {
        question: "Wie wird die Gehzeit berechnet?",
        answer:
          "Zeit = Strecke ÷ Tempo. Wir rechnen die Strecke aus der Schrittzahl mit einer durchschnittlichen Schrittlänge von 76 cm und teilen dann durch die Gehgeschwindigkeit. Normales Tempo (3 mph / 5 km/h) ist der Standard — die Tabelle auf dieser Seite zeigt alle drei Tempi.",
      },
    ],
    spread: {
      question: "Kann ich {steps} Schritte über den Tag verteilen?",
      high: "Ja — die meisten, die {steps} Schritte am Tag schaffen, sammeln sie über Spaziergänge, Erledigungen und Alltagsbewegung. Drei Spaziergänge von 15 Minuten plus normale Aktivität reichen meist.",
      low: "Ja — schon ein Spaziergang von 20–30 Minuten plus Alltagsbewegung (zum Auto, im Büro und so weiter) bringt dich meist auf {steps} Schritte, ohne eine extra lange Runde.",
    },
  },
  milesToTime: {
    meta: {
      title: "Wie lange dauert es, {miles} zu gehen?",
      description:
        "{miles} zu gehen dauert etwa {time} bei normalem Tempo von 3 mph. Sieh die Gehzeit bei drei Tempi, plus Schrittzahl und Kalorien.",
      ogImageAlt: "Gehzeit {miles}",
    },
    h1: "Wie lange dauert es, {milesArticle} zu gehen?",
    subheading: "Gehzeit, Schritte und Kalorien für {miles}.",
    primary: "≈ {time}",
    secondary: "Bei normalem Tempo von 3 mph · {steps} Schritte · {calories} Kalorien für eine 70-kg-Person",
    intro:
      "{miles} zu gehen dauert etwa {time} bei normalem Tempo von 3 mph (5 km/h). Bei zügigem Tempo von 4 mph sind es {brisk}, bei gemütlichen 2 mph {slow}. Du machst etwa {steps} Schritte und verbrennst ungefähr {calories} Kalorien.",
    crumb: "Gehzeit",
    relatedTool: "Gehzeit-Rechner",
    faq: [
      {
        question: "Wie lange dauert es, {milesArticle} zu gehen?",
        answer: "Etwa {time} bei normalem Tempo von 3 mph. Zügig mit 4 mph: {brisk}. Langsam mit 2 mph: {slow}.",
      },
      {
        question: "Wie viele Schritte sind {miles}?",
        answer:
          "{miles} sind etwa {steps} Schritte für einen durchschnittlichen Erwachsenen mit 76 cm Schrittlänge. Kleinere Menschen brauchen mehr Schritte — siehe die Größentabelle auf dieser Seite.",
      },
      {
        question: "Wie viele Kalorien verbrenne ich beim Gehen von {miles}?",
        answer:
          "Ungefähr {calories} Kalorien für eine Person mit 70 kg (155 lb) bei normalem Tempo. Schwerere Menschen verbrennen mehr — siehe die Gewichtstabelle.",
      },
      {
        question: "Wie wird die Gehzeit berechnet?",
        answer:
          "Zeit = Strecke ÷ Tempo. {miles} = {km} km. Bei 5 km/h sind das {time}. Wir nutzen dieselben drei Tempi, die CDC und ACSM für moderate Bewegung angeben.",
      },
    ],
    exercise: {
      question: "Reicht {miles} am Tag als Bewegung?",
      yes: "Ja — {miles} am Tag erfüllen locker die Empfehlung des CDC von 150 Minuten moderater Ausdaueraktivität pro Woche, wenn du normal bis zügig gehst.",
      start:
        "{miles} am Tag sind ein guter Anfang. Zusammen mit normaler Alltagsbewegung liegst du im aktiven Bereich, aber ein weiterer Spaziergang bringt einen deutlicheren Nutzen.",
      below:
        "Weniger als {miles} am Tag liegt unter der Mindestempfehlung des CDC. Steigere dich langsam — schon 0,5 Meile mehr am Tag verbessert die Herzgesundheit.",
    },
  },
};

export default de;

import type { TreadmillInclineCalculatorMessages } from "./en";

const de: TreadmillInclineCalculatorMessages = {
  meta: {
    title: "Laufband-Steigungsrechner: Pace und Höhenmeter",
    description:
      "Rechne die Laufbandsteigung in ein flaches Pace-Äquivalent um und sieh die Höhe, die du gestiegen bist. 3 mph bei 12 % entsprechen einem Joggen mit 4,7 mph in der Ebene. Kostenloser Rechner auf ACSM-Basis.",
    keywords: [
      "Laufband Steigungsrechner",
      "Laufband Pace Rechner",
      "Laufband Höhenmeter",
      "Kalorien Steigung gehen",
      "Laufband Steigung Umrechnung",
      "12-3-30 Pace Äquivalent",
      "Laufband Steigung flaches Tempo",
      "Laufband Höhengewinn",
    ],
    ogTitle: "Laufband-Steigungsrechner: Pace und Höhenmeter",
    ogDescription:
      "Mach aus jeder Laufbandsteigung das flache Tempo, das sie wert ist, und sieh, wie viel Höhe du gestiegen bist. Kostenloser Rechner mit den ACSM-Stoffwechselgleichungen.",
    ogImageAlt: "Laufband-Steigungsrechner",
  },
  hero: {
    title: "Laufband-Steigungsrechner",
    subtitle:
      "Mach aus jeder Steigung das flache Tempo, das sie wirklich wert ist, und sieh, wie viel Höhe du gestiegen bist. Die ACSM-Stoffwechselgleichungen bewerten die Steigung, statt sie zu schätzen.",
  },
  calculator: {
    yourSetting: "Deine Laufbandeinstellung",
    beltSpeed: "Bandgeschwindigkeit",
    incline: "Steigung: {percent} %",
    duration: "Dauer",
    minutes: "Minuten",
    effortVsFlat: "Anstrengung gegenüber derselben Geschwindigkeit in der Ebene",
    flatBelt: "Flaches Band, also ist dein Tempo deine Anstrengung",
    between:
      "Eine Steigung von {grade} % bei {speed} ist härter als jedes flache Gehtempo, das du durchhältst, und noch leichter als der langsamste flache Trab. Keine einzelne ebene Geschwindigkeit passt dazu.",
    sameEffort: "Gleicher Aufwand wie {gait} in der Ebene bei {speed} ({pace}).",
    gaitWalk: "Gehen",
    gaitJog: "Joggen",
    kindWalk: "Gehen",
    kindJog: "Joggen",
    betweenLabel: "zwischen Gehen und Joggen",
    perKmPace: "{pace} pro km",
    perMilePace: "{pace} pro Meile",
    yourPace: "Dein Tempo",
    perKm: "Pro km",
    perMile: "Pro Meile",
    met: "MET",
    distance: "Distanz",
    distanceValue: "{km} km / {mi} mi",
    elevationTitle: "Gestiegene Höhe",
    elevationSubtitle: "{grade} % Steigung für {minutes} Minuten bei {speed}.",
    verticalMetres: "Höhenmeter",
    verticalFeet: "Höhenfuß",
    storeys: "Stockwerke",
    stairSteps: "Treppenstufen",
    briskWalk:
      "Damit sich {speed} so anstrengend anfühlt wie zügiges Gehen mit 6 km/h (3,7 mph) in der Ebene, stell die Steigung auf {grade}.",
    tableTitle: "Flaches Pace-Äquivalent nach Steigung",
    tableSubtitle: "Bandgeschwindigkeit bleibt bei {speed}. Nur die Steigung ändert sich.",
    colIncline: "Steigung",
    colFeelsLike: "Fühlt sich an wie",
    colMet: "MET",
    colVsFlat: "vs. flach",
    multiplier: "{value}x",
  },
  resultCta: {
    headline: "Sieh, was deine Walks wirklich wert sind",
    description:
      "Steps erfasst jeden Walk im Hintergrund und macht daraus echte Distanz, Höhe und Kalorien, ohne manuelles Eintragen.",
  },
  info: {
    title: "So berechnen wir Steigungsäquivalente",
    intro:
      "Zwei Laufbandeinstellungen sind gleichwertig, wenn sie gleich viel Sauerstoff kosten. Wir schätzen die Sauerstoffaufnahme aus Tempo und Steigung mit den ACSM-Stoffwechselgleichungen und lösen die Gleichung für die Ebene rückwärts, um das flache Tempo mit denselben Kosten zu finden.",
    formulaTitle: "Die Formeln",
    formulas: [
      { strong: "Gehen VO₂", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "Laufen VO₂", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S ist die Geschwindigkeit in Metern pro Minute, G die Steigung als Bruch (5 % = 0,05). VO₂ ist in ml/kg/min.",
      },
      {
        strong: "Aufwandsfaktor",
        rest: "= 1 + 18G. Er folgt direkt daraus, dass zwei Gehgleichungen gleichgesetzt werden. Er gilt bei jeder Steigung.",
      },
      { strong: "Höhengewinn", rest: "= Bandstrecke × G" },
      {
        strong: "Beispiel:",
        rest: "4,8 km/h bei 5 % Steigung sind 5,3 MET, ein Aufwandsfaktor von 1,9×, und 120 Höhenmeter in 30 Minuten.",
      },
    ],
    note: "Die beiden ACSM-Gleichungen treffen sich nicht: flaches Gehen endet bei etwa 14,3 ml/kg/min, flaches Laufen beginnt nahe 25,2. Mäßige Steigungswanderungen liegen dazwischen, wo kein ebenes Tempo zum Aufwand passt. Der Rechner sagt das, statt eine Gleichung über ihren gültigen Bereich hinaus zu verlängern. Der Aufwandsfaktor bleibt in beiden Fällen aussagekräftig.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Welches flache Tempo entspricht Gehen mit 3 mph bei 12 % Steigung?",
      answer:
        "Ungefähr ein Joggen mit 4,7 mph. Gehen mit 3 mph bei 12 % kostet etwa 29 ml/kg/min Sauerstoff, rund 8,3 MET. Kein durchhaltbares Gehtempo in der Ebene erreicht das, der ehrliche Vergleich ist also ein langsamer Lauf, kein schnelles Gehen. Deshalb fühlt sich das 12-3-30-Workout viel härter an, als die Geschwindigkeit vermuten lässt.",
    },
    {
      question: "Wie rechnest du Laufbandsteigung in ein flaches Tempo um?",
      answer:
        "Der Aufwand steigt fast linear: Eine Steigung multipliziert die Energiekosten des Gehens mit (1 + 18 × Steigung als Dezimalzahl), 5 % sind also 1,9-mal so hart wie dasselbe Tempo in der Ebene. Diesen Faktor in eine flache Geschwindigkeit zu verwandeln, funktioniert nur, solange das Ergebnis im Gehbereich bleibt. Bei üblichen Tempi sind das Steigungen unter etwa 2 bis 3,5 %. Darüber hinaus übersteigt der Aufwand jedes durchhaltbare Gehen, ohne schon den langsamsten Trab zu erreichen, und kein einzelnes ebenes Tempo passt.",
    },
    {
      question: "Wie viel Höhe gewinnst du auf dem Laufband?",
      answer:
        "Der Höhengewinn ist die Bandstrecke mal die Steigung. Dreißig Minuten bei 5 km/h sind 2,5 km, bei 10 % also 250 Höhenmeter, etwa 820 Fuß oder rund 83 Stockwerke. Das Laufband gibt die Steigung als Anstieg über die Bandstrecke an, genau das nimmt diese Rechnung an.",
    },
    {
      question: "Simuliert 1 % Steigung wirklich Laufen im Freien?",
      answer:
        "Es ist eine brauchbare Konvention, kein exaktes Gesetz. Die 1-%-Anpassung stammt aus einer Studie von Jones und Doust von 1996: Eine Steigung von 1 % entsprach den Energiekosten des Laufens im Freien oberhalb von etwa 8 mph. Bei den langsameren Tempi, in denen die meisten gehen oder joggen, ist der Luftwiderstand vernachlässigbar, und ein Band mit 0 % liegt schon nah am Aufwand draußen.",
    },
    {
      question: "Ist Gehen mit Steigung besser als Laufen in der Ebene?",
      answer:
        "Für vergleichbare Energiekosten bei viel weniger Belastung, ja. Gehen mit 5 km/h bei 12 % liegt bei etwa 8,5 MET und entspricht im Wesentlichen einem flachen Joggen mit 8 km/h (8,6 MET). Die Bodenreaktionskräfte sind aber deutlich niedriger, weil beide Füße das Band nie gleichzeitig verlassen. Der Preis: Steigungsgehen belastet Waden und Achillessehne erheblich stärker.",
    },
    {
      question: "Warum verändert schon wenig Steigung den Aufwand so stark?",
      answer:
        "Weil den Körper senkrecht zu heben im Verhältnis zur horizontalen Bewegung teuer ist. In der ACSM-Gehgleichung hat der vertikale Term den Koeffizienten 1,8, der horizontale 0,1. Jedes Prozent Steigung erhöht die Energiekosten des Gehens bei gleicher Geschwindigkeit um etwa 18 %. Fünf Prozent verdoppeln sie fast, zwölf Prozent ungefähr verdreifachen sie.",
    },
    {
      question: "Kannst du der Steigungsanzeige deines Laufbands trauen?",
      answer:
        "Nimm sie als Näherung. Die Bandkalibrierung driftet, und viele Geräte für zu Hause zeigen die vom Motor befohlene Steigung statt einer gemessenen. Durchbiegung der Lauffläche unter Last senkt die wirksame Steigung zusätzlich etwas. Die Zusammenhänge hier gelten trotzdem, die absoluten Zahlen übernehmen aber den Fehler der Maschine.",
    },
  ],
  cta: {
    title: "Verfolge deine Laufband-Workouts",
    description:
      "Lade die Steps-App, um deine Walks, verbrannte Kalorien und deinen Fortschritt automatisch zu erfassen.",
  },
  sticky: "Zähl deine Schritte mit Steps",
  howTo: {
    name: "So rechnest du Laufbandsteigung in ein flaches Tempo um",
    description:
      "Gib Bandgeschwindigkeit, Steigung und Dauer ein, um das flache Tempo mit gleichem Aufwand zu sehen, wie viel härter die Steigung macht und welche Höhe du gestiegen bist.",
    steps: [
      {
        name: "Bandgeschwindigkeit eingeben",
        text: "Trag die Geschwindigkeit von der Konsole ein. Wechsle zwischen km/h und mph; jedes Ergebnis folgt der Einheit, die du wählst.",
      },
      {
        name: "Steigung einstellen",
        text: "Zieh den Regler oder tippe eine Vorgabe von 0 % bis 15 %. Die Vorgaben decken die Steigungen der meisten Heimlaufbänder ab, einschließlich der 12 % des 12-3-30-Workouts.",
      },
      {
        name: "Dauer eingeben",
        text: "Dauer in Minuten. Sie ändert die Tempo-Äquivalenz nicht, bestimmt aber Strecke und gestiegene Höhe.",
      },
      {
        name: "Flaches Tempo ablesen",
        text: "Die große Zahl ist das ebene Tempo, das denselben Sauerstoff kostet. Über etwa 3 % Steigung passt kein Gehtempo mehr, der Vergleich wechselt zum Joggen und sagt das.",
      },
      {
        name: "Höhe und Tabelle prüfen",
        text: "Sieh den Anstieg in Höhenmetern, Fuß, Stockwerken und Treppenstufen und vergleiche dann jede Standardsteigung bei deinem Tempo in der Tabelle.",
      },
    ],
  },
};

export default de;

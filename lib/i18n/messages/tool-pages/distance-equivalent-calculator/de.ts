import type { DistanceEquivalentCalculatorMessages } from "./en";

const de: DistanceEquivalentCalculatorMessages = {
  meta: {
    title: "Distanz-Umrechner – km, Meilen, Meter, Schritte",
    description:
      "Rechne eine Laufdistanz zwischen Kilometern, Meilen, Metern und Yards um. Sieh passende Schritte, geschätzte Zeit und Kalorien für Gehen, Joggen oder Laufen.",
    keywords: [
      "distanz umrechner",
      "km in meilen rechner",
      "wie viele schritte ist eine meile",
      "distanz äquivalent rechner",
      "meter in meilen",
      "laufdistanz rechner",
      "km in meilen laufen",
    ],
    ogTitle: "Distanz-Umrechner – km, Meilen, Meter, Schritte",
    ogDescription:
      "Rechne eine Laufdistanz zwischen Kilometern, Meilen, Metern und Yards um. Sieh passende Schritte, geschätzte Zeit und Kalorien für Gehen, Joggen oder Laufen.",
    ogImageAlt: "Distanz-Umrechner",
  },
  hero: {
    title: "Distanz-Umrechner",
    subtitle:
      "Rechne jede Distanz zwischen km, Meilen, Metern und Yards um — und sieh Schritte, Zeit und Kalorien.",
  },
  intro:
    "Gib eine Distanz in Kilometern, Meilen, Metern oder Yards ein und sieh sofort alle Entsprechungen. Mit geschätzter Schrittzahl, Zeit zum Zurücklegen zu Fuß oder laufend und ungefähren Kalorien.",
  calculator: {
    enterDistance: "Distanz eingeben",
    placeholder: "5",
    units: {
      km: "km",
      miles: "Meilen",
      meters: "Meter",
      yards: "Yards",
    },
    quick: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Halbmarathon",
      marathon: "Marathon",
    },
    equivalents: "Entsprechungen",
    kilometers: "Kilometer",
    miles: "Meilen",
    meters: "Meter",
    yards: "Yards",
    feet: "Fuß",
    approxSteps: "Schritte ca.",
    context: "Im Lauf",
    activity: "Aktivität",
    speed: "Tempo",
    time: "Zeit",
    calories: "Kalorien",
    activities: {
      walking: "Gehen",
      jogging: "Joggen",
      running: "Laufen",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "Kalorien geschätzt für eine Person mit 70 kg",
  },
  faqTitle: "Fragen zur Distanzumrechnung",
  faq: [
    {
      question: "Wie viele km sind eine Meile?",
      answer:
        "1 Meile = 1,60934 km. Umgekehrt sind 1 km = 0,62137 Meilen. Ein 5-Meilen-Lauf sind etwa 8,05 km, ein 10-km-Lauf etwa 6,21 Meilen.",
    },
    {
      question: "Wie viele Schritte sind 1 Meile?",
      answer:
        "Ungefähr 2.000–2.500 Schritte, je nach Größe und Schrittlänge. Der Durchschnitt liegt bei etwa 2.112 Schritten pro Meile (1.312 Schritte pro km). Größere Menschen mit längerer Schrittlänge brauchen weniger Schritte.",
    },
    {
      question: "Wie viele km ist ein Marathon?",
      answer:
        "Ein Marathon ist genau 42,195 km (26,219 Meilen). Ein Halbmarathon ist 21,0975 km (13,109 Meilen). Diese Distanzen legt World Athletics fest.",
    },
    {
      question: "Wie viele Schritte sind 5 km?",
      answer:
        "Für die meisten etwa 6.250–7.500 Schritte. Bei durchschnittlich 1.312 Schritten/km sind 5 km ungefähr 6.560 Schritte. Das hängt von Größe, Gang und Untergrund ab.",
    },
    {
      question: "Wie lange dauert 1 Meile zu Fuß?",
      answer:
        "Bei einem durchschnittlichen Gehtempo von 5 km/h etwa 12 Minuten pro Meile. Bei zügigem Gehen mit 6 km/h etwa 10 Minuten. Wer flott geht, schafft eine Meile in unter 9 Minuten.",
    },
  ],
  cta: {
    title: "Sieh in der Steps-App genau, wie weit du heute gelaufen bist.",
    description: "Jeder Schritt, jeder Kilometer und jede verbrannte Kalorie — automatisch.",
  },
  howTo: {
    name: "So rechnest du Distanzeinheiten um",
    description:
      "Gib eine Distanz in einer beliebigen Einheit ein (km, Meilen, Meter, Yards, Schritte) und erhalte alle Entsprechungen plus Gehzeit und Kalorien.",
    steps: [
      {
        name: "Wähle die Ausgangseinheit",
        text: "Kilometer, Meilen, Meter, Yards, Fuß oder Schritte — jede Einheit funktioniert als Eingabe.",
      },
      {
        name: "Distanz eingeben",
        text: "Trag die Distanz ein.",
      },
      {
        name: "Alle Entsprechungen ablesen",
        text: "Der Rechner liefert jede Einheit plus geschätzte Gehzeit und Kalorien für eine Person mit durchschnittlichem Gewicht und Tempo.",
      },
    ],
  },
};

export default de;

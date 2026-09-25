import type { WaterIntakeCalculatorMessages } from "./en";

const de: WaterIntakeCalculatorMessages = {
  meta: {
    title: "Wasserrechner: Wie viel sollst du am Tag trinken?",
    description:
      "Berechne deine tägliche Wassermenge nach Gewicht, Aktivitätslevel und Klima. Persönliche Empfehlungen zur Flüssigkeitszufuhr.",
    keywords: [
      "Wasserrechner",
      "wie viel Wasser trinken",
      "tägliche Wassermenge",
      "Hydrationsrechner",
      "Wasser pro Tag",
      "tägliche Wasserempfehlung",
    ],
    ogTitle: "Wasserrechner: Wie viel sollst du am Tag trinken?",
    ogDescription:
      "Berechne deine tägliche Wassermenge nach Gewicht, Aktivitätslevel und Klima. Persönliche Empfehlungen zur Flüssigkeitszufuhr.",
    ogImageAlt: "Wasserrechner",
  },
  hero: {
    title: "Wasserrechner",
    subtitle:
      "Finde genau heraus, wie viel Wasser du täglich trinken solltest, abhängig von Gewicht und Aktivitätslevel.",
  },
  intro:
    "Nutze diesen kostenlosen Wasserrechner für dein persönliches Tagesziel. Gib Gewicht und Aktivitätslevel ein und erhalte sofort eine Empfehlung in Litern, Unzen und Tassen.",
  calculator: {
    yourDetails: "Deine Angaben",
    bodyWeight: "Körpergewicht",
    activityLevel: "Aktivitätslevel",
    climate: "Klima",
    activities: {
      sedentary: "Sitzend",
      moderate: "Mäßig aktiv",
      active: "Aktiv",
      very_active: "Sehr aktiv",
    },
    climates: {
      temperate: "Gemäßigt",
      hot: "Heiß / schwül",
    },
    dailyIntake: "Tägliche Wassermenge",
    perDay: "L / Tag",
    ozPerDay: "oz / Tag",
    cupsPerDay: "Tassen / Tag",
    glassesPerDay: "Gläser / Tag",
    tipLabel: "Trinktipp",
    tips: {
      sedentary: "Trink alle 2 Stunden ein Glas Wasser, damit du über den Tag hydriert bleibst.",
      moderate:
        "Trink vor, während und nach jeder Einheit. Nimm eine wiederverwendbare Flasche mit, damit du dranbleibst.",
      active: "Leg an Trainingstagen 500 ml drauf und ersetze Elektrolyte, wenn du stark schwitzt.",
      very_active:
        "Wieg dich vor und nach intensiven Einheiten: Trink 500 ml für jedes 0,5 kg, das du durch Schweiß verlierst.",
    },
  },
  info: {
    title: "Warum Flüssigkeit zählt",
  },
  faq: [
    {
      question: "Wie viel Wasser solltest du am Tag trinken?",
      answer:
        "Die oft genannte Regel „8 Gläser am Tag“ ist nur eine grobe Näherung. Genauer ist es, vom Gewicht auszugehen: etwa 33 ml pro Kilogramm. Für einen Erwachsenen mit 70 kg sind das ungefähr 2,3 Liter, Aktivitätslevel und Klima können die Zahl aber deutlich nach oben schieben. Dieser Rechner setzt diese Anpassungen automatisch.",
    },
    {
      question: "Verändert Sport, wie viel Wasser du brauchst?",
      answer:
        "Ja, deutlich. Beim Training verlierst du Wasser über Schweiß und Atmung. Eine moderate Einheit kann 500 ml oder mehr dazugeben, eine intensive Einheit oder Ausdauersport 1–2 Liter extra. Trink, bevor du Durst hast: Durst ist ein spätes Signal für Dehydrierung. Der Rechner hebt dein Ziel je nach gewähltem Aktivitätslevel um 20–60 % an.",
    },
    {
      question: "Zählen Kaffee und Tee zur Wassermenge?",
      answer:
        "Teilweise. Kaffee und Tee tragen zur gesamten Flüssigkeit bei, Koffein hat aber eine leichte harntreibende Wirkung, die einen Teil davon aufhebt. Eine brauchbare Faustregel: koffeinhaltige Getränke mit etwa 50–75 % ihres Volumens auf das Tagesziel anrechnen und zu jeder Tasse Kaffee ein halbes Glas Wasser extra trinken.",
    },
    {
      question: "Beeinflusst das Klima deinen Flüssigkeitsbedarf?",
      answer:
        "Heißes oder schwüles Wetter erhöht die Schweißrate auch in Ruhe und hebt den Grundbedarf um 500–1000 ml pro Tag. Auch Höhe steigert den Verlust durch schnellere Atmung. „Heiß / schwül“ im Rechner addiert 500 ml zur Tagesmenge, um das abzubilden. An besonders heißen Tagen oder nach Aktivität draußen in der Hitze trink noch mehr.",
    },
  ],
  cta: {
    title: "Verfolge deinen Weg",
    description: "Erfasse deine täglichen Schritte und bleib aktiv mit der Steps-App.",
  },
  howTo: {
    name: "So berechnest du die tägliche Wassermenge",
    description:
      "Gib Gewicht, Aktivitätslevel und Klima ein, um den Tagesbedarf in Litern oder Unzen zu schätzen.",
    steps: [
      {
        name: "Körpergewicht eingeben",
        text: "Der Wasserbedarf wächst mit der Körpergröße. Trag das Gewicht in Kilogramm oder Pfund ein.",
      },
      {
        name: "Aktivitätslevel wählen",
        text: "Nimm extra Flüssigkeit dazu, wenn du trainierst, stark schwitzt oder in heißem Klima lebst.",
      },
      {
        name: "Tagesziel ablesen",
        text: "Der Rechner gibt das Wasser des Tages in Litern und Unzen aus, plus eine Aufteilung in Gläser.",
      },
    ],
  },
};

export default de;

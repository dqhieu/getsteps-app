import type { TdeeCalculatorMessages } from "./en";

const de: TdeeCalculatorMessages = {
  meta: {
    title: "TDEE-Rechner – Gesamtenergieverbrauch und Kalorienbedarf",
    description:
      "Berechne deinen Gesamtenergieverbrauch (TDEE) und deinen Grundumsatz (BMR). Finde deinen täglichen Kalorienbedarf für Abnehmen, Halten oder Muskelaufbau.",
    keywords: [
      "TDEE Rechner",
      "Gesamtenergieverbrauch Rechner",
      "Kalorienrechner",
      "BMR Rechner",
      "wie viele Kalorien sollte ich essen",
      "Erhaltungskalorien Rechner",
      "täglicher Kalorienbedarf",
    ],
    ogTitle: "TDEE-Rechner – Gesamtenergieverbrauch und Kalorienbedarf",
    ogDescription:
      "Berechne deinen Gesamtenergieverbrauch (TDEE) und deinen Grundumsatz (BMR). Finde deinen täglichen Kalorienbedarf für Abnehmen, Halten oder Muskelaufbau.",
  },
  hero: {
    title: "TDEE-Rechner",
    subtitle: "Berechne, wie viele Kalorien du pro Tag verbrennst, anhand deiner Körperdaten und deines Aktivitätslevels.",
  },
  intro:
    "Gib Geschlecht, Alter, Gewicht, Größe und Aktivitätslevel ein, um deinen Gesamtenergieverbrauch (TDEE) zu berechnen — die Kalorien, die dein Körper pro Tag verbrennt. Nutze ihn, um das passende Kalorienziel für deine Ziele zu setzen.",
  calculator: {
    details: "Deine Angaben",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    years: "Jahre",
    weight: "Gewicht",
    height: "Größe",
    activityLevel: "Aktivitätslevel",
    activity: {
      sedentary: "Sitzend",
      light: "Leicht aktiv",
      moderate: "Mäßig aktiv",
      active: "Aktiv",
      very_active: "Sehr aktiv",
    },
    calculate: "TDEE berechnen",
    results: "Deine Ergebnisse",
    bmr: "BMR",
    bmrUnit: "cal/Tag in Ruhe",
    tdee: "TDEE",
    tdeeUnit: "cal/Tag gesamt",
    calorieGoals: "Kalorienziele",
    maintenanceBadge: "Erhalt",
    belowMinimum: "Unter dem Minimum",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "Starker Verlust", weekly: "-1 kg / Woche" },
      moderate_loss: { label: "Mäßiger Verlust", weekly: "-0.5 kg / Woche" },
      mild_loss: { label: "Leichter Verlust", weekly: "-0.25 kg / Woche" },
      maintenance: { label: "Erhalt", weekly: "0 kg / Woche" },
      mild_gain: { label: "Leichte Zunahme", weekly: "+0.25 kg / Woche" },
      muscle_gain: { label: "Muskelaufbau", weekly: "+0.5 kg / Woche" },
    },
  },
  faqTitle: "TDEE- und Kalorien-FAQ",
  faq: [
    {
      question: "Was ist TDEE?",
      answer:
        "TDEE steht für Gesamtenergieverbrauch (Total Daily Energy Expenditure) — die Kalorien, die dein Körper an einem Tag verbrennt. Darin stecken der Grundumsatz (Kalorien in Ruhe), die Energie für körperliche Aktivität und der thermische Effekt der Nahrung (Kalorien für die Verdauung). TDEE ist die wichtigste Zahl, um Kalorienziele für Abnehmen, Halten oder Muskelaufbau zu setzen.",
    },
    {
      question: "Wie genau ist der TDEE?",
      answer:
        "TDEE-Rechner mit der Mifflin-St-Jeor-Gleichung liegen bei den meisten Menschen etwa innerhalb von 10–15 %. Individuelle Unterschiede durch Genetik, Muskelmasse, Hormone und metabolische Anpassung können den wahren Wert verschieben. Nimm das Ergebnis als Start, verfolge dein Gewicht 2–3 Wochen und passe die Zufuhr um 100–200 Kalorien an den tatsächlichen Verlauf an.",
    },
    {
      question: "Was ist der Unterschied zwischen BMR und TDEE?",
      answer:
        "BMR (Grundumsatz) sind die Kalorien, die dein Körper in völliger Ruhe verbrennt — die Mindestenergie für Atmung, Kreislauf und Zellreparatur. TDEE legt alle weitere Ausgabe oben drauf: Aktivität, Training und Verdauung. TDEE ist immer höher als BMR und die Zahl, mit der du Kalorienziele setzt.",
    },
    {
      question: "Wie viele Kalorien unter dem TDEE zum Abnehmen?",
      answer:
        "Ein tägliches Defizit von 250–500 Kalorien unter dem TDEE ist für einen haltbaren Verlust von 0,25–0,5 kg pro Woche empfohlen. Größere Defizite können Muskelverlust, Nährstoffmangel und metabolische Anpassung auslösen. Frauen sollten in der Regel nicht unter 1.200 Kalorien/Tag und Männer nicht unter 1.500 Kalorien/Tag gehen, ohne ärztliche Begleitung. Ein moderates Defizit plus mehr tägliche Schritte wirkt oft besser als Einschränkung allein.",
    },
    {
      question: "Ändert sich der TDEE mit dem Alter?",
      answer:
        "Ja. Der TDEE sinkt nach dem 20. Lebensjahr typischerweise um etwa 1–2 % pro Jahrzehnt, vor allem durch Verlust von Muskelmasse (Sarkopenie). Muskelgewebe ist stoffwechselaktiv und verbrennt in Ruhe mehr Kalorien als Fettgewebe. Krafttraining und ein aktiver Alltag können diesen Rückgang deutlich bremsen. Hormonelle Veränderungen, besonders in den Wechseljahren, können den TDEE bei Frauen zusätzlich senken.",
    },
  ],
  cta: {
    title: "Steigere deinen TDEE auf natürliche Weise",
    description: "Steigere deinen TDEE auf natürliche Weise mit mehr täglichen Schritten. Erfasse sie in der Steps-App.",
  },
  howTo: {
    name: "So berechnest du deinen Gesamtenergieverbrauch",
    description:
      "Gib Alter, Geschlecht, Gewicht, Größe und Aktivitätslevel ein, um BMR und TDEE mit der Mifflin-St-Jeor-Gleichung zu erhalten.",
    steps: [
      {
        name: "Gib Alter, Geschlecht, Gewicht und Größe ein",
        text: "Pflichtangaben für die Mifflin-St-Jeor-Formel, die für die Allgemeinbevölkerung am genauesten ist.",
      },
      {
        name: "Wähle dein Aktivitätslevel",
        text: "Sitzend (Bürojob), leicht aktiv (1–3 Trainingstage/Woche), mäßig aktiv (3–5 Tage), sehr aktiv (6–7 Tage) oder extra aktiv.",
      },
      {
        name: "Lies BMR und TDEE",
        text: "Der Rechner liefert deinen Grundumsatz (Kalorien, um in Ruhe am Leben zu bleiben) und deinen Gesamtenergieverbrauch (Kalorien, um das Gewicht zu halten).",
      },
    ],
  },
};

export default de;

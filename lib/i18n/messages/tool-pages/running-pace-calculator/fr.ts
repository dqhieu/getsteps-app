import type { RunningPaceCalculatorMessages } from "./en";

const fr: RunningPaceCalculatorMessages = {
  meta: {
    title: "Calculateur d'allure — convertissez allure, vitesse et temps de course",
    description:
      "Calculez votre allure en min/km ou min/mile, convertissez allure et vitesse, et prédisez vos temps sur 5 km, 10 km, semi-marathon et marathon.",
    keywords: [
      "calculateur d'allure",
      "calcul allure course",
      "calculateur min par km",
      "calculateur min par mile",
      "prédicteur de temps de course",
      "calculateur de vitesse de course",
      "calculateur allure 5 km",
    ],
    ogTitle: "Calculateur d'allure — convertissez allure, vitesse et temps de course",
    ogDescription:
      "Calculez votre allure en min/km ou min/mile, convertissez allure et vitesse, et prédisez vos temps sur 5 km, 10 km, semi-marathon et marathon.",
    ogImageAlt: "Calculateur d'allure de course",
  },
  hero: {
    title: "Calculateur d'allure de course",
    subtitle:
      "Convertissez allure, vitesse et temps d'arrivée. Pour n'importe quelle distance, du 5 km au marathon.",
  },
  intro:
    "Saisissez votre allure, votre vitesse, ou un temps et une distance pour convertir instantanément toutes les mesures de course et prédire votre temps d'arrivée, du 5 km au marathon.",
  calculator: {
    title: "Calculer l'allure",
    tabs: {
      pace: "Allure",
      speed: "Vitesse",
      timeDistance: "Temps + distance",
    },
    paceLabel: "Allure (MM:SS)",
    paceHint: "Saisissez l'allure au format minutes:secondes (ex. 5:30)",
    speedLabel: "Vitesse",
    distanceLabel: "Distance",
    finishTimeLabel: "Temps d'arrivée (MM:SS ou H:MM:SS)",
    statsTitle: "Vos données de course",
    pacePerKm: "Allure /km",
    pacePerMi: "Allure /mi",
    speedKmh: "Vitesse km/h",
    speedMph: "Vitesse mph",
    predictionsTitle: "Temps d'arrivée estimés",
    distanceColumn: "Distance",
    finishTimeColumn: "Temps d'arrivée",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Semi-marathon",
      marathon: "Marathon",
    },
  },
  faqTitle: "Comprendre l'allure de course",
  faq: [
    {
      question: "Quelle est une bonne allure de course ?",
      answer:
        "Cela dépend de votre niveau. Les débutants courent en général à 7–9 min/km (11–14 min/mile). Les coureurs intermédiaires tournent autour de 5–7 min/km (8–11 min/mile). Les coureurs confirmés restent sous 5 min/km (sous 8 min/mile). Les marathoniens d'élite tiennent des allures sous 3:00/km. La meilleure allure est celle qui vous laisse terminer en vous sentant sollicité, sans être complètement épuisé.",
    },
    {
      question: "Comment convertir des min/km en min/mile ?",
      answer:
        "Multipliez votre allure en min/km par 1,60934 pour obtenir des min/mile. Par exemple, 5:00/km équivaut à 5:00 × 1,60934 = 8:03/mile. À l'inverse, divisez votre allure en min/mile par 1,60934 pour obtenir des min/km. Ce calculateur fait la conversion automatiquement lorsque vous changez d'unité.",
    },
    {
      question: "Quelle allure pour un semi-marathon sous les 2 heures ?",
      answer:
        "Pour finir un semi-marathon (21,0975 km) en moins de 2 heures, vous devez tenir une allure plus rapide que 5:41/km (9:09/mile), soit environ 10,6 km/h (6,6 mph). C'est un objectif intermédiaire courant : construisez d'abord votre base en courant régulièrement à 6:00–6:30/km avant de viser la barre des 2 heures.",
    },
    {
      question: "Quelle est l'allure moyenne en course à pied ?",
      answer:
        "La plupart des coureurs loisir courent à 6–8 min/km (10–13 min/mile). Le temps moyen sur 5 km se situe autour de 28–35 minutes, soit une allure de 5:30–7:00/km. Sur semi-marathon, les temps moyens se regroupent autour de 2:00–2:20, et sur marathon autour de 4:20–4:45. L'âge, la forme et le terrain font beaucoup varier ces chiffres.",
    },
    {
      question: "Comment améliorer mon allure ?",
      answer:
        "Combinez trois types de séances : des intervalles (efforts courts plus rapides que l'allure de course, avec récupération), des sorties longues lentes (base aérobie à allure conversation) et des sorties tempo (effort soutenu, confortablement dur). Ajoutez 1 à 2 séances de renforcement par semaine pour limiter les blessures. La régularité compte le plus : visez au moins 3 sorties par semaine et n'augmentez pas le volume hebdomadaire de plus de 10 %.",
    },
  ],
  cta: {
    title: "Suivez votre parcours santé",
    description: "Suivez vos courses et vos pas quotidiens ensemble dans l'application Steps.",
  },
  howTo: {
    name: "Comment utiliser le calculateur d'allure",
    description:
      "Convertissez allure, vitesse et temps : saisissez deux valeurs parmi la distance, l'allure et le temps d'arrivée, le calculateur trouve la troisième.",
    steps: [
      {
        name: "Choisissez l'inconnue",
        text: "Indiquez si vous cherchez l'allure, le temps ou la distance. Vous fournirez les deux autres valeurs.",
      },
      {
        name: "Saisissez les deux valeurs connues",
        text: "Distance et temps pour l'allure, ou allure et distance pour le temps d'arrivée, etc. Minutes par km et minutes par mile sont prises en charge.",
      },
      {
        name: "Lisez le résultat",
        text: "Le calculateur renvoie la troisième valeur en unités métriques et impériales, plus un tableau d'allures comparé aux distances de course courantes.",
      },
    ],
  },
};

export default fr;

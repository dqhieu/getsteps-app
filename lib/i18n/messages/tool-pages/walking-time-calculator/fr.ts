import type { WalkingTimeCalculatorMessages } from "./en";

const fr: WalkingTimeCalculatorMessages = {
  meta: {
    title: "Calculateur de temps de marche : 1 km ≈ 12 min, 1 mile ≈ 18 min",
    description:
      "Combien de temps pour marcher 1 km ? ~12 min. 1 mile ? ~18 min. 5 km ? ~60 min. Calculateur gratuit pour toute distance, allure lente, normale, soutenue ou rapide.",
    keywords: [
      "temps de marche",
      "calculateur temps de marche",
      "combien de temps pour marcher 5 km",
      "temps de marche 8 km",
      "combien de temps pour marcher un mile",
      "durée de marche selon la distance",
      "calculateur allure de marche",
      "combien de temps pour 10000 pas",
      "calculateur durée de marche",
    ],
    ogTitle: "Calculateur de temps de marche : 1 km ≈ 12 min, 1 mile ≈ 18 min",
    ogDescription:
      "1 km ≈ 12 min, 1 mile ≈ 18 min, 5 km ≈ 60 min à allure normale. Calculateur gratuit pour toute distance, allure lente, normale, soutenue ou rapide.",
    ogImageAlt: "Calculateur de temps de marche",
  },
  hero: {
    title: "Calculateur de temps de marche",
    subtitle:
      "Combien de temps pour marcher 5 km, 8 km ou 28 miles ? Indiquez n'importe quelle distance et obtenez une estimation pour les allures lente, normale, soutenue et rapide.",
  },
  resultCta: {
    headline: "Suivez chaque marche automatiquement",
    description:
      "Steps enregistre votre temps de marche, votre distance et votre allure en arrière-plan, pour que vous voyiez comment vos vraies marches s'additionnent.",
  },
  stickyCta: "Suivez vos pas avec Steps",
  calculator: {
    title: "Calculer le temps de marche",
    distance: "Distance",
    miles: "miles",
    walkingSpeed: "Vitesse de marche",
    speeds: {
      slow: { label: "Lente", description: "3,2 km/h", inline: "lente" },
      normal: { label: "Normale", description: "5,0 km/h", inline: "normale" },
      brisk: { label: "Soutenue", description: "6,4 km/h", inline: "soutenue" },
      fast: { label: "Rapide", description: "7,2 km/h", inline: "rapide" },
    },
    includeBreaks: "Inclure des pauses (5 min toutes les 30 min)",
    walkingTime: "Temps de marche",
    breaksDetail: "{walking} de marche + {breaks} min de pause",
    distanceLabel: "Distance",
    stepsLabel: "Pas",
    caloriesLabel: "Calories",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "Référence des temps de marche",
    referenceSubtitle: "Temps pour marcher les distances courantes à allure {pace} ({speed} km/h)",
    colDistance: "Distance",
    colTime: "Temps",
    hoursMinutes: "{hours} h {minutes} min",
    hoursOnly: "{hours} h",
    minutesOnly: "{minutes} min",
    distances: ["1 km", "1 mile", "2 km", "3 km", "5 km", "5 miles", "10 km", "Semi-marathon"],
  },
  info: {
    title: "Guide des vitesses de marche",
    intro:
      "La vitesse de marche varie selon la condition physique, le terrain et l'objectif. Comprendre les différentes allures vous aide à planifier vos marches.",
    paceTitle: "Guide des allures",
    paces: [
      {
        label: "Lente (3,2 km/h / 2 mph) :",
        text: "Une promenade tranquille, adaptée à la récupération ou à une conversation",
      },
      {
        label: "Normale (5 km/h / 3,1 mph) :",
        text: "Allure moyenne de la plupart des adultes",
      },
      {
        label: "Soutenue (6,4 km/h / 4 mph) :",
        text: "Marche volontaire qui fait monter le rythme cardiaque",
      },
      {
        label: "Rapide (7,2 km/h / 4,5 mph) :",
        text: "Marche athlétique, à la limite du jogging",
      },
    ],
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Combien de temps faut-il pour marcher 1 km ?",
      answer:
        "À allure normale (5 km/h), il faut environ 12 minutes pour marcher 1 km. À allure lente (3,2 km/h), comptez ~19 minutes, et à allure soutenue (6,4 km/h) vous pouvez finir en environ 9 minutes. Cela représente à peu près 1\u202f300 pas pour un adulte moyen.",
    },
    {
      question: "Combien de temps faut-il pour marcher 5 km ?",
      answer:
        "À allure normale (5 km/h), il faut environ 60 minutes pour marcher 5 km. À allure soutenue (6,4 km/h), vous pouvez les faire en environ 47 minutes.",
    },
    {
      question: "Combien de temps faut-il pour marcher 1 mile ?",
      answer:
        "Un mile prend environ 15 à 20 minutes à allure normale. En marche soutenue, on peut le faire en 12 à 15 minutes.",
    },
    {
      question: "Combien de temps faut-il pour marcher 10\u202f000 pas ?",
      answer:
        "10\u202f000 pas représentent à peu près 7 à 8 km (4 à 5 miles). À allure normale, cela prend environ 1 heure 20 à 40 minutes. Vous n'avez pas besoin de tout faire d'un coup : répartissez-les dans la journée.",
    },
    {
      question: "Combien de temps faut-il pour marcher 7 km ?",
      answer:
        "À allure normale (5 km/h), il faut environ 84 minutes (1 h 24 min) pour marcher 7 km. À allure soutenue (6,4 km/h), vous pouvez finir en environ 66 minutes. Cela représente à peu près 9\u202f100 pas pour un adulte moyen.",
    },
    {
      question: "Combien de temps faut-il pour marcher 8 km ?",
      answer:
        "Marcher 8 km prend environ 96 minutes (1 h 36 min) à allure normale (5 km/h), ou environ 75 minutes à allure soutenue. Cela fait approximativement 10\u202f400 pas.",
    },
    {
      question: "Faut-il inclure les pauses dans le temps de marche ?",
      answer:
        "Pour les marches de plus de 30 minutes, de courtes pauses aident à garder de l'énergie et à limiter la fatigue. Le calculateur peut ajouter 5 minutes de pause toutes les 30 minutes de marche si vous activez cette option.",
    },
  ],
  precomputedTitle: "Temps de marche déjà calculés",
  precomputed: [
    "Combien de temps pour marcher 10\u202f000 pas",
    "Combien de temps pour marcher 5 miles",
    "Combien de temps pour marcher 3 miles",
    "Combien de temps pour marcher 1 mile",
  ],
  allConversions: "Toutes les conversions →",
  cta: {
    title: "Suivez vos marches automatiquement",
    description:
      "Téléchargez l'application Steps pour suivre automatiquement votre temps de marche, votre distance et votre allure.",
  },
  howTo: {
    name: "Comment utiliser le calculateur de temps de marche",
    description:
      "Indiquez une distance et une allure pour obtenir un temps de marche estimé en minutes — en kilomètres, en miles ou à partir d'un nombre de pas.",
    steps: [
      {
        name: "Indiquez la distance",
        text: "Saisissez la distance que vous prévoyez de marcher. Vous pouvez passer des kilomètres aux miles, ou entrer un nombre de pas.",
      },
      {
        name: "Choisissez une allure",
        text: "Choisissez lente (3,2 km/h), normale (5 km/h), soutenue (6,4 km/h) ou rapide (7,2 km/h). Normale est le réglage par défaut pour un adulte type.",
      },
      {
        name: "Lisez votre temps de marche",
        text: "Le calculateur affiche les minutes estimées pour couvrir la distance à chaque allure, plus une estimation du nombre total de pas.",
      },
    ],
  },
};

export default fr;

import type { StepDistanceCalculatorMessages } from "./en";

const fr: StepDistanceCalculatorMessages = {
  meta: {
    title: "Calculateur pas et distance : 1 km ≈ 1\u202f300 pas",
    description:
      "1 km ≈ 1\u202f300 pas. 1 mile ≈ 2\u202f100 pas. 5\u202f000 pas ≈ 3,8 km / 2,4 mi. Calculateur gratuit — personnalisez selon votre taille et votre foulée.",
    keywords: [
      "km en pas",
      "pas en km",
      "1 km en pas",
      "2 km en pas",
      "3 km en pas",
      "6500 pas en km",
      "calculateur distance de pas",
      "calculateur longueur de foulée",
      "pas en distance",
      "distance en pas",
      "calculateur distance de marche",
      "calculateur longueur de pas",
      "combien de pas par km",
      "pas en miles",
    ],
    ogTitle: "Calculateur pas et distance : 1 km ≈ 1\u202f300 pas",
    ogDescription:
      "1 km ≈ 1\u202f300 pas · 5\u202f000 pas ≈ 3,8 km / 2,4 mi · 10\u202f000 ≈ 7,6 km / 4,7 mi. Calculateur gratuit personnalisé selon votre taille.",
    ogImageAlt: "Calculateur de distance de pas",
  },
  hero: {
    title: "Calculateur de distance de pas",
    subtitle:
      "Convertissez des pas en distance ou une distance en pas. Des résultats personnalisés selon votre taille, votre sexe et votre foulée.",
  },
  resultCta: {
    headline: "Suivez vos vrais pas et votre vraie distance",
    description:
      "Steps compte vos pas automatiquement et affiche chaque jour votre distance, votre allure et vos calories réelles, sans saisie manuelle.",
  },
  stickyCta: "Suivez vos pas avec Steps",
  calculator: {
    yourInformation: "Vos informations",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    years: "ans",
    height: "Taille",
    stepLength: "Votre longueur de pas estimée : {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} pouces)",
    stepsToDistance: "Pas vers distance",
    distanceToSteps: "Distance vers pas",
    numberOfSteps: "Nombre de pas",
    stepsPlaceholder: "Indiquez le nombre de pas",
    distance: "Distance",
    distancePlaceholder: "Indiquez la distance",
    miles: "miles",
    result: "Résultat",
    kmValue: "{distance} km",
    milesParen: "({distance} miles)",
    stepsValue: "{steps} pas",
    estimatedCalories: "Calories estimées",
    kcalValue: "{calories} kcal",
    walkingTime: "Temps de marche",
    hoursMinutes: "{hours} h {minutes} min",
    minutesOnly: "{minutes} min",
    referenceTitle: "Tableau de référence",
    referenceSubtitle: "Objectifs de pas courants et distances équivalentes selon votre profil",
    colSteps: "Pas",
    colDistance: "Distance",
    colCalories: "Calories",
    colTime: "Temps",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "Comment nous calculons votre longueur de pas",
    intro:
      "La longueur de pas détermine la distance parcourue à chaque pas. Nous l'estimons avec une formule issue de la recherche, qui tient compte de votre taille, de votre sexe et de votre âge.",
    formulaTitle: "La formule",
    maleLabel: "Homme :",
    maleFormula: "Longueur de pas = taille (cm) x 0,415",
    femaleLabel: "Femme :",
    femaleFormula: "Longueur de pas = taille (cm) x 0,413",
    ageLabel: "Ajustement selon l'âge :",
    ageFormula: "La longueur de pas diminue d'environ 1 % par décennie après 40 ans",
    average:
      "Chez l'adulte, la longueur de pas moyenne se situe entre 60 et 80 cm (24 à 31 pouces). La vitesse, le terrain et la condition physique peuvent aussi modifier votre longueur réelle.",
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Combien de pas y a-t-il dans un mile ?",
      answer:
        "En moyenne, un mile représente environ 2\u202f000 à 2\u202f500 pas, selon votre longueur de pas. Une foulée plus longue demande moins de pas pour la même distance.",
    },
    {
      question: "Combien de pas y a-t-il dans un kilomètre ?",
      answer:
        "En moyenne, un kilomètre représente environ 1\u202f250 à 1\u202f550 pas. Utilisez le calculateur ci-dessus pour une estimation selon votre profil.",
    },
    {
      question: "10\u202f000 pas par jour, est-ce suffisant ?",
      answer:
        "10\u202f000 pas par jour est un objectif courant et équivaut à environ 5 miles (8 km) de marche. Les recherches suggèrent que 7\u202f000 à 8\u202f000 pas par jour apportent déjà des bénéfices importants. Le meilleur objectif est celui qui vous pousse tout en restant tenable.",
    },
    {
      question: "Combien de pas font 1,8 km ?",
      answer:
        "1,8 km représente environ 2\u202f340 pas pour un adulte moyen (foulée d'environ 77 cm). Utilisez le calculateur ci-dessus avec votre taille pour une estimation plus précise.",
    },
    {
      question: "Combien de pas font 3,5 km ?",
      answer:
        "3,5 km représente environ 4\u202f550 pas pour un adulte moyen. Les personnes plus grandes font moins de pas (foulée plus longue), les plus petites en font davantage.",
    },
    {
      question: "Ce calculateur est-il précis ?",
      answer:
        "Ce calculateur donne une estimation raisonnable à partir de vos caractéristiques physiques. Pour plus de précision, mesurez votre longueur de pas réelle en marchant une distance connue et en comptant vos pas.",
    },
  ],
  conversionsTitle: "Tableaux de conversion rapides",
  conversions: [
    "10\u202f000 pas en miles",
    "5\u202f000 pas en miles",
    "Pas dans un mile",
    "Pas dans un km",
    "Tableau pas vers km",
    "Tableau pas vers miles",
    "Tableau pas vers calories",
  ],
  allConversions: "Toutes les conversions →",
  stepsToKm: {
    title: "Pas en km : combien de kilomètres dans vos pas ?",
    intro:
      "Convertir des {phrase} dépend de votre foulée, qui varie avec la taille. En ordre de grandeur : {ruleA} pour un adulte moyen, et {ruleB}.",
    phrase: "pas en km",
    ruleA: "1\u202f000 pas ≈ 0,75 km",
    ruleB: "1 km ≈ 1\u202f300 pas",
    cards: [
      { value: "0,75 km", label: "1\u202f000 pas" },
      { value: "3,8 km", label: "5\u202f000 pas" },
      { value: "7,5 km", label: "10\u202f000 pas" },
      { value: "15 km", label: "20\u202f000 pas" },
    ],
    guide:
      "Ce sont des moyennes — votre distance réelle dépend de votre taille et de votre foulée. Utilisez le calculateur ci-dessus pour une conversion personnalisée, ou consultez notre guide détaillé sur {link} avec des tableaux selon la taille.",
    guideLink: "combien de pas dans un kilomètre",
  },
  kmTable: {
    title: "Km en pas : référence rapide",
    intro:
      "Nombre de pas approximatif pour des distances courantes, avec une foulée moyenne de 0,75 m (adulte moyen).",
    colDistance: "Distance",
    colSteps: "Pas (approx.)",
    colTime: "Temps de marche",
    rows: [
      { distance: "0,5 km", steps: "650", time: "~6 min" },
      { distance: "1 km", steps: "1\u202f300", time: "~12 min" },
      { distance: "1,5 km", steps: "1\u202f950", time: "~18 min" },
      { distance: "1,8 km", steps: "2\u202f340", time: "~22 min" },
      { distance: "2 km", steps: "2\u202f600", time: "~24 min" },
      { distance: "2,5 km", steps: "3\u202f250", time: "~30 min" },
      { distance: "3 km", steps: "3\u202f900", time: "~36 min" },
      { distance: "3,5 km", steps: "4\u202f550", time: "~42 min" },
      { distance: "4 km", steps: "5\u202f200", time: "~48 min" },
      { distance: "5 km (~3,1 miles)", steps: "6\u202f500", time: "~60 min" },
      { distance: "6 km", steps: "7\u202f800", time: "~72 min" },
      { distance: "7 km", steps: "9\u202f100", time: "~84 min" },
      { distance: "8 km (~5 miles)", steps: "10\u202f400", time: "~96 min" },
      { distance: "10 km (~6,2 miles)", steps: "13\u202f000", time: "~2 h" },
      { distance: "12 km", steps: "15\u202f600", time: "~2 h 24 min" },
      { distance: "15 km", steps: "19\u202f500", time: "~3 h" },
      { distance: "20 km", steps: "26\u202f000", time: "~4 h" },
    ],
    footnote:
      "Basé sur une foulée moyenne (~0,75 m) et une allure normale (~5 km/h). Utilisez le calculateur ci-dessus pour un résultat selon votre taille et votre sexe.",
  },
  stepsTable: {
    title: "Pas en km et en miles : référence rapide",
    intro:
      "Distance approximative en km et en miles pour des nombres de pas courants, avec une foulée moyenne de 0,75 m.",
    colSteps: "Pas",
    colKm: "Km",
    colMiles: "Miles",
    rows: [
      { steps: "1\u202f000", km: "0,75 km", miles: "0,47 mi" },
      { steps: "2\u202f000", km: "1,5 km", miles: "0,93 mi" },
      { steps: "2\u202f500", km: "1,9 km", miles: "1,17 mi" },
      { steps: "3\u202f000", km: "2,25 km", miles: "1,4 mi" },
      { steps: "5\u202f000", km: "3,8 km", miles: "2,4 mi" },
      { steps: "6\u202f000", km: "4,5 km", miles: "2,8 mi" },
      { steps: "6\u202f500", km: "4,9 km", miles: "3,0 mi" },
      { steps: "7\u202f000", km: "5,25 km", miles: "3,3 mi" },
      { steps: "7\u202f500", km: "5,6 km", miles: "3,5 mi" },
      { steps: "10\u202f000", km: "7,5 km", miles: "4,7 mi" },
      { steps: "12\u202f000", km: "9,0 km", miles: "5,6 mi" },
      { steps: "13\u202f000", km: "9,75 km", miles: "6,05 mi" },
      { steps: "15\u202f000", km: "11,25 km", miles: "7,0 mi" },
      { steps: "20\u202f000", km: "15 km", miles: "9,3 mi" },
    ],
    footnote:
      "Les distances supposent une foulée d'adulte moyen. Les personnes plus grandes couvrent plus de terrain par pas ; les plus petites, moins. Utilisez le calculateur ci-dessus pour un résultat selon votre taille.",
  },
  cta: {
    title: "Suivez vos pas automatiquement",
    description:
      "Téléchargez l'application Steps pour suivre automatiquement vos pas, votre distance et vos calories sur votre iPhone et votre Apple Watch.",
  },
  howTo: {
    name: "Comment convertir des pas en distance (ou une distance en pas)",
    description:
      "Indiquez votre taille et soit un nombre de pas, soit une distance. Le calculateur estime la conversion à partir de votre longueur de pas.",
    steps: [
      {
        name: "Indiquez votre taille",
        text: "La taille sert à estimer votre longueur de pas moyenne. La foulée de marche vaut environ 0,413 × la taille chez les femmes et 0,415 × la taille chez les hommes.",
      },
      {
        name: "Indiquez des pas ou une distance",
        text: "Passez en mode pas pour obtenir une distance, ou en mode distance pour obtenir un nombre de pas. Les unités métriques et impériales sont prises en charge.",
      },
      {
        name: "Lisez la valeur convertie",
        text: "Le résultat affiche la conversion ainsi que votre longueur de pas estimée en mètres et en pieds.",
      },
    ],
  },
};

export default fr;

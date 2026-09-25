import type { StepsPerMileCalculatorMessages } from "./en";

const fr: StepsPerMileCalculatorMessages = {
  meta: {
    title: "Combien de pas dans un mile ? Calculateur gratuit",
    description:
      "Combien de pas dans un mile ? Environ 2\u202f000 à 2\u202f500 selon votre taille et votre allure. Pas par mile et par km personnalisés, avec un tableau marche et course.",
    keywords: [
      "pas par mile",
      "pas par km",
      "combien de pas dans un mile",
      "nombre de pas dans un mile",
      "pas dans un kilomètre",
      "calculateur longueur de pas",
      "pas de marche par mile",
      "pas en miles",
      "miles en pas",
    ],
    ogTitle: "Combien de pas dans un mile ? Calculateur gratuit",
    ogDescription:
      "Combien de pas dans un mile ? 2\u202f000 à 2\u202f500 selon votre taille. Obtenez vos pas par mile et par km.",
    ogImageAlt: "Calculateur de pas par mile",
  },
  hero: {
    title: "Combien de pas dans un mile ?",
    subtitle:
      "Combien de pas dans un mile ? Environ 2\u202f000 à 2\u202f500 pour la plupart des adultes. Indiquez votre taille pour un nombre de pas par mile et par km personnalisé.",
  },
  resultCta: {
    headline: "Connaissez vos vrais pas par mile",
    description:
      "Steps compte vos pas et votre distance automatiquement, pour que vous voyiez votre vraie allure et votre foulée, pas une estimation.",
  },
  stickyCta: "Suivez vos pas avec Steps",
  calculator: {
    yourInformation: "Vos informations",
    height: "Taille",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    stepLength: "Votre longueur de pas estimée : {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value} pouces)",
    stepsPerMile: "Pas par mile",
    stepsPerKm: "Pas par kilomètre",
    stepsUnit: "pas",
    referenceTitle: "Tableau des distances",
    referenceSubtitle: "Pas nécessaires pour les distances courantes, selon votre longueur de pas",
    colDistance: "Distance",
    colSteps: "Pas",
    distances: ["1 km", "1 mile", "5 km", "5 miles", "10 km", "Semi-marathon", "Marathon"],
  },
  info: {
    title: "Comment nous calculons les pas par mile",
    intro:
      "Le nombre de pas par mile dépend de votre longueur de pas, surtout déterminée par votre taille et votre sexe. Les personnes plus grandes ont en général une foulée plus longue et font moins de pas pour la même distance.",
    formulaTitle: "La formule",
    stepLengthLabel: "Longueur de pas :",
    stepLengthFormula: "Taille (cm) × 0,415 (homme) ou 0,413 (femme)",
    perKmLabel: "Pas par km :",
    perKmFormula: "100\u202f000 ÷ longueur de pas (cm)",
    perMileLabel: "Pas par mile :",
    perMileFormula: "Pas par km × 1,609",
    heightTitle: "Pas moyens selon la taille",
    heights: [
      { height: "5'0\" (152 cm) :", steps: "~2\u202f500 pas/mile" },
      { height: "5'6\" (168 cm) :", steps: "~2\u202f300 pas/mile" },
      { height: "6'0\" (183 cm) :", steps: "~2\u202f100 pas/mile" },
      { height: "6'6\" (198 cm) :", steps: "~1\u202f950 pas/mile" },
    ],
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Combien de pas y a-t-il dans un mile ?",
      answer:
        "En moyenne, un mile représente environ 2\u202f000 à 2\u202f500 pas. Le nombre exact dépend de votre taille et de votre foulée. Les personnes plus petites font plus de pas, les plus grandes en font moins.",
    },
    {
      question: "Combien de pas y a-t-il dans un kilomètre ?",
      answer:
        "En moyenne, un kilomètre représente environ 1\u202f250 à 1\u202f550 pas. C'est à peu près 62 % des pas d'un mile, puisqu'un kilomètre fait environ 0,62 mile.",
    },
    {
      question: "La vitesse de marche change-t-elle le nombre de pas par mile ?",
      answer:
        "Oui, légèrement. Quand vous marchez plus vite ou que vous courez, votre foulée s'allonge et vous faites moins de pas par mile. Pour la plupart des allures de marche, l'écart reste assez faible.",
    },
    {
      question: "Comment mesurer ma vraie longueur de pas ?",
      answer:
        "Marchez une distance connue (par exemple 30 mètres) à votre allure habituelle et comptez vos pas. Divisez la distance par le nombre de pas pour obtenir votre longueur moyenne. Vous pouvez aussi marquer un point de départ, faire 10 pas, puis mesurer la distance parcourue.",
    },
  ],
  cta: {
    title: "Suivez vos pas et votre distance",
    description:
      "Téléchargez l'application Steps pour suivre automatiquement vos pas et votre distance sur votre iPhone et votre Apple Watch.",
  },
  howTo: {
    name: "Comment calculer les pas par mile",
    description:
      "Indiquez votre taille et votre allure de marche pour estimer combien de pas vous faites dans un mile (et dans un kilomètre).",
    steps: [
      {
        name: "Indiquez votre taille",
        text: "Les personnes plus grandes couvrent plus de terrain à chaque pas, donc la taille ajuste le résultat.",
      },
      {
        name: "Choisissez une allure",
        text: "La marche rapide et la course ont une foulée plus longue que la marche lente. Choisissez l'allure qui vous intéresse.",
      },
      {
        name: "Lisez l'estimation des pas par mile",
        text: "Le résultat affiche les pas par mile et par kilomètre selon votre foulée personnelle à cette allure.",
      },
    ],
  },
};

export default fr;

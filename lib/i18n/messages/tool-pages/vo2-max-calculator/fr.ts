import type { Vo2MaxCalculatorMessages } from "./en";

const fr: Vo2MaxCalculatorMessages = {
  meta: {
    title: "Calculateur de VO2 max – Estimez votre niveau aérobie",
    description:
      "Estimez votre VO2 max avec la méthode par fréquence cardiaque ou le test de course de Cooper de 12 minutes. Découvrez votre niveau aérobie et comment l'améliorer.",
    keywords: [
      "calculateur VO2 max",
      "calculateur vo2max",
      "calculateur forme aérobie",
      "calculateur test de Cooper",
      "comment calculer le VO2 max",
      "VO2 max selon l'âge",
      "test de forme cardiovasculaire",
    ],
    ogTitle: "Calculateur de VO2 max – Estimez votre niveau aérobie",
    ogDescription:
      "Estimez votre VO2 max avec la méthode par fréquence cardiaque ou le test de course de Cooper de 12 minutes. Découvrez votre niveau aérobie et comment l'améliorer.",
    ogImageAlt: "Calculateur de VO2 max",
  },
  hero: {
    title: "Calculateur de VO2 max",
    subtitle:
      "Estimez votre VO2 max — la référence de la forme aérobie — à partir de votre fréquence cardiaque ou d'un test de course de 12 minutes.",
  },
  intro:
    "Indiquez votre âge, votre sexe et votre fréquence cardiaque au repos (ou la distance du test de Cooper de 12 minutes) pour estimer votre VO2 max et voir où vous vous situez dans votre tranche d'âge.",
  calculator: {
    method: "Méthode",
    heartRateMethod: "Méthode par fréquence cardiaque",
    cooperMethod: "Course de Cooper (12 min)",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    years: { one: "an", other: "ans" },
    restingHeartRate: "Fréquence cardiaque au repos",
    bpm: "bpm",
    restingHint: "Mesurez-la au réveil, avant de sortir du lit.",
    distanceLabel: "Distance parcourue en 12 minutes",
    km: "km",
    miles: "miles",
    distanceHint: "Courez sur une piste plate pendant exactement 12 minutes et notez votre distance.",
    calculate: "Calculer le VO2 max",
    yourEstimate: "Votre VO2 max estimé",
    unit: "ml/kg/min",
    improvementTip: "Conseil pour progresser",
    disclaimer:
      "Le VO2 max est la référence de la forme aérobie : la quantité maximale d'oxygène que votre corps peut utiliser lors d'un effort intense. Plus il est élevé, meilleure est votre capacité cardiovasculaire. Les normes varient avec l'âge ; ces seuils sont simplifiés à titre indicatif.",
    categories: {
      superior: {
        label: "Supérieur",
        description:
          "Capacité aérobie exceptionnelle. Vous avez une forme cardiovasculaire remarquable, typique des athlètes d'endurance de compétition.",
        tip: "Entretenez-la avec un entraînement périodisé : alternez longues sorties, séances au seuil et semaines de récupération pour éviter le surentraînement.",
      },
      excellent: {
        label: "Excellent",
        description:
          "Forme aérobie bien au-dessus de la moyenne. Votre cœur et vos poumons apportent efficacement l'oxygène aux muscles au travail.",
        tip: "Ajoutez une séance d'intervalles VO2 max par semaine (par exemple 5×3 min à effort soutenu) pour viser la catégorie Supérieur.",
      },
      good: {
        label: "Bon",
        description:
          "Forme au-dessus de la moyenne. Vous avez une base aérobie solide pour l'activité quotidienne et le sport de loisir.",
        tip: "Visez 3 à 4 séances cardio par semaine. Incluez une sortie au seuil et une sortie facile plus longue pour consolider votre base.",
      },
      fair: {
        label: "Passable",
        description:
          "Capacité aérobie moyenne. Un entraînement régulier peut améliorer nettement votre VO2 max en 8 à 12 semaines.",
        tip: "Commencez par des sorties de 30 minutes en zone 2, 3 fois par semaine. Ajoutez une séance HIIT par semaine après 4 semaines de base.",
      },
      poor: {
        label: "Médiocre",
        description:
          "Capacité aérobie sous la moyenne. La bonne nouvelle : ce niveau répond vite à un entraînement régulier.",
        tip: "Commencez par des marches rapides de 20 à 30 min, 5 fois par semaine. Passez aux intervalles course-marche après 2 à 3 semaines.",
      },
    },
  },
  info: {
    title: "VO2 max — questions fréquentes",
  },
  faq: [
    {
      question: "Qu'est-ce que le VO2 max ?",
      answer:
        "Le VO2 max est le débit maximal auquel votre corps peut consommer de l'oxygène lors d'un effort intense, mesuré en millilitres d'oxygène par kilogramme de poids corporel et par minute (ml/kg/min). C'est largement considéré comme la référence de la forme aérobie et de la santé cardiovasculaire. Un VO2 max plus élevé signifie que votre cœur, vos poumons et vos muscles travaillent plus efficacement ensemble pour apporter et utiliser l'oxygène pendant un effort prolongé.",
    },
    {
      question: "Qu'est-ce qu'un bon VO2 max ?",
      answer:
        "Chez les hommes, un VO2 max de 40–50 ml/kg/min est considéré comme bon, et au-dessus de 55 comme excellent. Chez les femmes, 35–45 est bon, et au-dessus de 50 est excellent. Les athlètes d'endurance de haut niveau, comme les marathoniens et les cyclistes, atteignent souvent 60–85 ml/kg/min — des valeurs qui reflètent des années d'adaptation cardiovasculaire. Un adulte non entraîné se situe en moyenne dans les 30 pour les femmes et dans le bas des 40 pour les hommes.",
    },
    {
      question: "Comment améliorer mon VO2 max ?",
      answer:
        "Les méthodes les plus efficaces sont l'entraînement par intervalles à haute intensité (HIIT), les sorties au seuil et les sorties longues à allure facile (LSD). Les séances HIIT — par exemple 4 à 6 intervalles de 3 à 5 minutes proches de l'effort maximal — sollicitent directement le système aérobie et produisent les plus grands gains de VO2 max. Associées à deux ou trois sorties faciles en zone 2 par semaine, des progrès de 10–20 % sont typiques en 8 à 12 semaines pour les débutants et les sportifs moyennement entraînés.",
    },
    {
      question: "Qu'est-ce que le test de course de Cooper de 12 minutes ?",
      answer:
        "Le test de Cooper, mis au point par le Dr Kenneth Cooper en 1968 pour l'évaluation de la condition physique de l'armée américaine, consiste à courir le plus loin possible en exactement 12 minutes sur une surface plane. La distance parcourue prédit le VO2 max avec la formule : VO2max = (distanceMeters − 504,9) / 44,73. C'est encore l'un des tests de terrain les plus utilisés en sciences du sport, car il ne demande aucun matériel de laboratoire — seulement une piste mesurée et un chronomètre.",
    },
    {
      question: "Le VO2 max baisse-t-il avec l'âge ?",
      answer:
        "Oui. Après environ 25 ans, le VO2 max baisse en moyenne d'environ 1 % par an chez les personnes sédentaires. Un entraînement aérobie régulier ralentit nettement cette baisse : des personnes actives de 60 ou 70 ans conservent souvent un VO2 max comparable à celui de personnes sédentaires de 20 ans plus jeunes. L'essentiel est un exercice cardiovasculaire régulier : même des volumes modérés de course, de vélo ou de natation préservent la capacité aérobie jusqu'à un âge avancé.",
    },
  ],
  cta: {
    title: "Suivez votre progression aérobie",
    description: "Suivez votre activité quotidienne et améliorez votre forme aérobie avec l'application Steps.",
  },
  howTo: {
    name: "Comment estimer votre VO2 max",
    description:
      "Estimez le VO2 max à partir de la fréquence cardiaque au repos et maximale, ou avec le test de course de Cooper de 12 minutes.",
    steps: [
      {
        name: "Choisissez la méthode",
        text: "Soit la méthode par fréquence cardiaque (âge + fréquence cardiaque au repos), soit le test de Cooper (distance parcourue en 12 minutes).",
      },
      {
        name: "Saisissez les valeurs",
        text: "Indiquez l'âge et la fréquence cardiaque au repos, ou la distance parcourue en 12 minutes de course à fond.",
      },
      {
        name: "Lisez votre estimation de VO2 max",
        text: "Le calculateur renvoie un VO2 max estimé en ml/kg/min, plus votre percentile de forme pour votre âge et votre sexe.",
      },
    ],
  },
};

export default fr;

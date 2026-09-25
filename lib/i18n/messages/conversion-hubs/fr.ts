import type { ConversionHubsMessages } from "./en";

const fr: ConversionHubsMessages = {
  breadcrumbLabel: "Fil d'Ariane",
  openCalculator: "Ouvrir le calculateur →",
  units: {
    steps: "{count} pas",
    miles: "{count} miles",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} kcal",
    strideCm: "{stride} cm",
    detailSteps: "{count} pas →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count} mile",
    other: "{count} miles",
  },
  mileArrow: {
    one: "{count} mile →",
    other: "{count} miles →",
  },
  duration: {
    minutes: "{minutes} min",
    hours: "{hours} h",
    hoursMinutes: "{hours} h {minutes} min",
  },
  heights: [
    "1,47 m (147 cm) — petite",
    "1,63 m (163 cm) — femme moyenne",
    "1,75 m (175 cm) — adulte moyen",
    "1,83 m (183 cm) — homme moyen",
    "1,93 m (193 cm) — grand",
  ],
  heightShort: {
    petite: "1,47 m",
    tall: "1,93 m",
  },
  paces: {
    slow: "Lent (2 mph)",
    normal: "Normal (3 mph)",
    brisk: "Rapide (4 mph)",
  },
  hub: {
    meta: {
      title: "Conversions de pas — miles, kilomètres et calories",
      description:
        "Convertissez les pas, les miles, les kilomètres et les calories. Réponses rapides, tableaux complets et un calculateur adapté à votre taille et à votre poids.",
      keywords: [
        "conversion de pas",
        "tableau de conversion de pas",
        "pas en miles",
        "miles en pas",
        "pas en calories",
        "conversion distance pas",
      ],
      ogTitle: "Conversions de pas",
      ogDescription:
        "Convertissez les pas, les miles, les kilomètres et les calories. Réponses rapides et tableaux complets.",
      ogImageAlt: "Conversions de pas",
    },
    title: "Conversions de pas",
    subtitle:
      "Des réponses rapides et précises pour chaque conversion courante — miles, kilomètres, calories et temps de marche.",
    seeAll: "Voir les {count} →",
    categories: {
      "steps-to-miles": {
        title: "Pas en miles",
        description: "Convertissez un nombre de pas en miles parcourus",
      },
      "miles-to-steps": {
        title: "Miles en pas",
        description: "Convertissez des miles en nombre de pas équivalent",
      },
      "steps-to-calories": {
        title: "Pas en calories",
        description: "Estimez les calories brûlées pour un nombre de pas",
      },
      "steps-to-km": {
        title: "Pas en kilomètres",
        description: "Convertissez un nombre de pas en kilomètres parcourus",
      },
      "km-to-steps": {
        title: "Kilomètres en pas",
        description: "Convertissez des kilomètres en nombre de pas équivalent",
      },
      "steps-to-time": {
        title: "Pas en temps de marche",
        description: "Combien de temps il faut pour marcher un nombre de pas",
      },
      "miles-to-time": {
        title: "Miles en temps de marche",
        description: "Combien de temps il faut pour marcher un nombre de miles",
      },
    },
    stepsToMilesTitle: "Populaire : pas en miles",
    milesToStepsTitle: "Populaire : miles en pas",
    stepsToCaloriesTitle: "Populaire : pas en calories",
    personalTitle: "Vous voulez des chiffres personnalisés ?",
    personalBody:
      "Ces tableaux utilisent des moyennes. Nos calculateurs vous permettent d'entrer votre taille, votre poids et votre allure pour une réponse exacte.",
    distanceCta: "Calculateur de distance en pas",
    calorieCta: "Calculateur de calories",
  },
  stepsToMiles: {
    meta: {
      title: "Convertir des pas en miles — tableau et calculateur",
      description:
        "Convertissez un nombre de pas en miles. {ten} pas ≈ {tenMiles} miles · {five} pas ≈ {fiveMiles} miles. Tableau complet de {from} à {to} pas.",
      keywords: [
        "pas en miles",
        "convertir pas en miles",
        "convertisseur pas miles",
        "tableau pas miles",
        "conversion pas mile",
        "combien de miles font X pas",
      ],
      ogTitle: "Convertir des pas en miles — tableau et calculateur",
      ogDescription:
        "Convertissez un nombre de pas en miles. {ten} pas ≈ {tenMiles} miles. Tableau complet de {from} → {to} pas.",
      ogImageAlt: "Pas en miles",
    },
    crumb: "Pas en miles",
    title: "Convertisseur pas en miles",
    intro:
      "Convertissez un nombre de pas en miles. Chaque ligne mène à une page détaillée avec les calories brûlées, le temps de marche et un tableau de foulée selon la taille.",
    formulaTitle: "La formule rapide",
    formula: "miles ≈ pas × {factor}",
    formulaNote:
      "Cela suppose une foulée adulte moyenne de {stride} cm ({feet} pi). Les marcheurs plus grands couvrent un peu plus à chaque pas ; les plus petits, un peu moins. Pour votre chiffre, cliquez sur une ligne du tableau.",
    tableTitle: "Tableau de conversion complet",
    columns: {
      steps: "Pas",
      miles: "Miles",
      kilometers: "Kilomètres",
      detail: "Page détaillée",
    },
    exactTitle: "Vous voulez le chiffre exact pour votre taille ?",
    exactBody:
      "Notre calculateur de distance en pas donne la réponse exacte pour {your} longueur de foulée — indiquez simplement votre taille.",
    your: "votre",
    accuracyTitle: "Quelle est la précision de la conversion pas → miles ?",
    accuracyBody:
      "La foulée par défaut de {stride} cm / {feet} pi est le chiffre le plus souvent cité par le CDC, la Mayo Clinic et Harvard Health pour un adulte de taille moyenne. Les foulées réelles vont d'environ {short} cm (petite stature) à {tall} cm (grande stature), donc la distance peut varier de ±{low}–{high} %.",
    accuracyApp:
      "Pour le chiffre le plus précis, installez Steps sur votre iPhone ou votre Apple Watch — l'app mesure votre longueur de pas réelle à partir de vos séances.",
  },
  milesToSteps: {
    meta: {
      title: "Combien de pas dans un mile ? — {steps} pas (et tableau)",
      description:
        "{one} mile ≈ {steps} pas pour un adulte moyen. Utilisez le tableau pour convertir des miles en pas, ou ouvrez le détail pour les calories et le temps de marche selon votre taille.",
      keywords: [
        "combien de pas dans un mile",
        "miles en pas",
        "mile en pas",
        "1 mile en pas",
        "pas dans un mile",
        "convertir miles en pas",
      ],
      ogTitle: "Combien de pas dans un mile ? — {steps} pas",
      ogDescription:
        "{one} mile ≈ {steps} pas pour un adulte moyen. Tableau complet et calcul selon la taille.",
      ogImageAlt: "Miles en pas",
    },
    crumb: "Miles en pas",
    title: "Combien de pas dans un mile ?",
    intro:
      "Réponse courte : environ {highlight} pour un adulte moyen. Le chiffre exact dépend de votre taille — le tableau est plus bas.",
    quickLabel: "Réponse rapide",
    heroFigure: "≈ {steps}",
    heroNote:
      "Adulte moyen, foulée de {stride} cm ({feet} pi). Votre chiffre dépend de votre taille.",
    heightTitle: "Pas par mile selon la taille",
    heightIntro:
      "La longueur de foulée vaut environ {ratio} × votre taille. Les marcheurs plus petits font plus de pas pour la même distance.",
    heightColumns: {
      height: "Taille",
      stride: "Foulée",
      steps: "Pas par mile",
    },
    formulaTitle: "La formule de conversion",
    formula: "pas ≈ miles × {steps}",
    formulaNote:
      "Soit : {one} mile = {meters} m × {cm} cm ÷ foulée de {stride} cm ≈ {steps} pas.",
    tableTitle: "Tableau miles → pas",
    columns: {
      miles: "Miles",
      steps: "Pas (adulte moyen)",
      detail: "Page détaillée",
    },
    exactTitle: "Vous voulez le chiffre exact pour votre taille ?",
    exactBody:
      "Utilisez le calculateur de distance en pas — indiquez votre taille une fois et obtenez votre nombre de pas par mile.",
    whyTitle: `Pourquoi ne pas dire simplement « {rule} pas dans un mile » ?`,
    whyBody:
      "La règle des {rule} pas est un raccourci utile, mais elle laisse un écart réel. Avec une foulée moyenne de {stride} cm — le chiffre publié par le CDC et la Mayo Clinic — on obtient environ {perMile}, et non {rule}. Sur une journée de {daily} pas, cela représente environ un quart de mile que la règle simplifiée manquerait.",
    perMile: "{steps} pas par mile",
    connectionTitle: "Le lien avec les {daily} pas",
    connectionBody:
      "L'objectif quotidien standard de {daily} pas correspond à environ {distance} pour un adulte moyen. C'est pourquoi atteindre {daily} pas prend environ {minutes} minutes de marche à allure normale, réparties sur la journée.",
    distance: "{miles} miles ({km} km)",
    faq: [
      {
        question: "Combien de pas y a-t-il dans un mile ?",
        answer:
          "Environ {steps} pas pour un adulte moyen avec une foulée de {stride} cm ({feet} pi). Le chiffre exact va d'environ {tallSteps} pas pour quelqu'un de {tallHeight} à {petiteSteps} pas pour quelqu'un de {petiteHeight}.",
      },
      {
        question: "Combien de pas dans 2 miles ?",
        answer:
          "Environ {steps} pas pour un adulte moyen. Consultez le tableau de cette page pour les autres distances.",
      },
      {
        question: "Combien de pas dans 5 miles ?",
        answer:
          "Environ {steps} pas — à peu près l'objectif quotidien standard de {daily} pas.",
      },
      {
        question: "Le nombre de pas dans un mile dépend-il de la taille ?",
        answer:
          "Oui. Votre foulée vaut environ {ratio} × votre taille. Une personne de {petiteHeight} fait environ {petiteSteps} pas par mile, tandis qu'une personne de {tallHeight} en fait environ {tallSteps} — un écart de {percent} %.",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "Convertir pas en km — tableau de conversion et calculateur",
      description:
        "Convertissez un nombre de pas en kilomètres. {steps} pas ≈ {km} km. Tableau complet de {from} à {to} pas.",
      keywords: [
        "convertir pas en km",
        "pas en kilomètres",
        "conversion pas km",
        "pas vers km",
        "tableau pas km",
        "combien de km font X pas",
      ],
      ogTitle: "Convertir pas en km",
      ogDescription:
        "Convertissez un nombre de pas en km. {steps} pas ≈ {km} km. Tableau de conversion complet.",
      ogImageAlt: "Pas en kilomètres",
    },
    crumb: "Pas en km",
    title: "Convertisseur pas en kilomètres",
    intro:
      "Convertissez un nombre de pas en kilomètres. Chaque ligne mène à une page détaillée avec les calories, le temps de marche et un tableau de foulée selon la taille. Pour une réponse exacte et personnalisée, utilisez le {calculator}.",
    calculatorLink: "calculateur de distance en pas",
    formulaTitle: "La formule rapide",
    formula: "km ≈ pas × {factor}",
    formulaNote:
      "Soit : pas × foulée de {stride} cm ÷ {perKm} = distance en km. La foulée moyenne d'un adulte est de {stride} cm ({feet} pi).",
    tableTitle: "Tableau de conversion complet",
    columns: {
      steps: "Pas",
      kilometers: "Kilomètres",
      miles: "Miles",
      detail: "Page détaillée",
    },
    exactTitle: "Vous voulez le chiffre exact pour votre taille ?",
    exactBody:
      "Notre calculateur de distance en pas donne la réponse exacte pour votre longueur de foulée — indiquez simplement votre taille.",
  },
  kmToSteps: {
    meta: {
      title: "Combien de pas dans un km ? — {steps} pas (et tableau)",
      description:
        "{one} km ≈ {steps} pas pour un adulte moyen. Tableau complet de {from}–{to} km, plus un calcul selon la taille pour votre nombre de pas exact.",
      keywords: [
        "combien de pas dans un km",
        "km en pas",
        "kilomètres en pas",
        "1 km en pas",
        "5 km en pas",
        "convertir km en pas",
      ],
      ogTitle: "Combien de pas dans un km ? — {steps} pas",
      ogDescription: "{one} km ≈ {steps} pas pour un adulte moyen. Tableau de conversion complet.",
      ogImageAlt: "Km en pas",
    },
    crumb: "Km en pas",
    title: "Combien de pas dans un kilomètre ?",
    intro:
      "Réponse courte : environ {highlight} pour un adulte moyen. Le chiffre complet dépend de votre taille — voir le tableau.",
    quickLabel: "Réponse rapide",
    heroFigure: "≈ {steps}",
    heroNote:
      "Adulte moyen, foulée de {stride} cm ({feet} pi). Votre chiffre dépend de votre taille.",
    heightTitle: "Pas par km selon la taille",
    heightIntro:
      "La longueur de foulée vaut environ {ratio} × votre taille. Les marcheurs plus petits font plus de pas pour la même distance.",
    heightColumns: {
      height: "Taille",
      stride: "Foulée",
      steps: "Pas par km",
    },
    formulaTitle: "La formule de conversion",
    formula: "pas ≈ km × {steps}",
    formulaNote: "Soit : {one} km = {cm} cm ÷ foulée de {stride} cm ≈ {steps} pas.",
    tableTitle: "Tableau km → pas",
    columns: {
      kilometers: "Kilomètres",
      steps: "Pas (adulte moyen)",
      detail: "Page détaillée",
    },
    exactTitle: "Vous voulez le chiffre exact pour votre taille ?",
    exactBody:
      "Utilisez le calculateur de distance en pas — indiquez votre taille une fois et obtenez votre nombre de pas par km.",
    faq: [
      {
        question: "Combien de pas y a-t-il dans un kilomètre ?",
        answer:
          "Environ {steps} pas pour un adulte moyen avec une foulée de {stride} cm. La fourchette va d'environ {tall} (grande taille) à {petite} (petite taille).",
      },
      {
        question: "Combien de pas dans 5 km ?",
        answer: "Environ {steps} pas pour un adulte moyen — une course de 5 km typique.",
      },
      {
        question: "Combien de pas dans 10 km ?",
        answer:
          "Environ {steps} pas — au-dessus de l'objectif quotidien standard de {daily} pas.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Pas en calories — combien de calories par pas ?",
      description:
        "Convertissez un nombre de pas en calories brûlées. {steps} pas ≈ {calories} calories. Tableau complet de {from} à {to} pas, selon votre poids.",
      keywords: [
        "pas en calories",
        "calories par pas",
        "conversion pas calories",
        "combien de calories pour des pas",
        "convertir pas en calories",
      ],
      ogTitle: "Convertisseur pas en calories",
      ogDescription:
        "{steps} pas ≈ {calories} calories. Tableau de conversion complet de {from}–{to} pas.",
      ogImageAlt: "Pas en calories",
    },
    crumb: "Pas en calories",
    title: "Convertisseur pas en calories",
    intro:
      "Convertissez un nombre de pas en calories brûlées, puis ouvrez le détail pour la répartition selon votre poids, votre allure et le temps de marche.",
    formulaTitle: "La formule rapide",
    formula: "calories ≈ pas × {factor} × (poids en kg ÷ {weight})",
    formulaNote:
      "Environ {one} calorie pour {per} pas chez un adulte moyen. Les marcheurs plus lourds brûlent proportionnellement plus.",
    tableTitle: "Tableau de conversion complet (adulte de {lb} lb / {kg} kg, allure normale)",
    columns: {
      steps: "Pas",
      calories: "Calories",
      detail: "Page détaillée",
    },
    exactTitle: "Vous voulez une dépense calorique personnalisée ?",
    exactBody:
      "Utilisez le calculateur pas → calories pour indiquer votre poids, votre âge et votre sexe et obtenir un chiffre plus précis.",
  },
  stepsToTime: {
    meta: {
      title: "Combien de temps pour marcher X pas ? — tableau",
      description:
        "Temps de marche pour un nombre de pas. {steps} pas ≈ {hours} h {mins} min à allure normale. Tableau de {from} → {to} pas sur trois allures.",
      keywords: [
        "combien de temps pour marcher des pas",
        "pas en temps de marche",
        "temps de marche par pas",
        "pas en minutes",
        "durée pour marcher X pas",
      ],
      ogTitle: "Combien de temps pour marcher X pas ?",
      ogDescription: "Temps de marche pour un nombre de pas. Tableau complet sur trois allures.",
      ogImageAlt: "Pas en temps de marche",
    },
    crumb: "Temps de marche",
    title: "Combien de temps faut-il pour marcher X pas ?",
    intro:
      "Temps de marche pour un nombre de pas, sur trois allures courantes. Cliquez sur une ligne pour la page détaillée avec les calories et la foulée.",
    formulaTitle: "La formule rapide",
    formula: "minutes ≈ pas ÷ {cadence}",
    formulaNote:
      "La plupart des adultes marchent à environ {cadence} pas par minute à allure normale. Ainsi, {steps} pas ≈ {minutes} minutes ({hours} h {mins} min) de marche. Un peu plus vite ({mph} mph), cela descend à {fastHours} h {fastMins} min.",
    tableTitle: "Temps de marche selon le nombre de pas et l'allure",
    columns: {
      steps: "Pas",
      detail: "Détail",
    },
    exactTitle: "Vous voulez planifier une marche précise ?",
    exactBody:
      "Le calculateur de temps de marche estime la durée pour n'importe quelle distance ou nombre de pas, avec l'heure de départ et d'arrivée.",
  },
  milesToTime: {
    meta: {
      title: "Combien de temps pour marcher X miles ? — selon l'allure",
      description:
        "Temps de marche pour une distance en miles. {one} mile ≈ {oneMin} min, {three} miles ≈ {threeHours} h, {five} miles ≈ {fiveHours} h {fiveMins} min. Tableau sur trois allures.",
      keywords: [
        "combien de temps pour marcher un mile",
        "temps pour marcher des miles",
        "temps de marche en miles",
        "miles en temps de marche",
        "temps pour marcher 5 miles",
        "temps pour marcher 3 miles",
      ],
      ogTitle: "Combien de temps pour marcher X miles ?",
      ogDescription: "Temps de marche pour une distance en miles, sur trois allures.",
      ogImageAlt: "Miles en temps de marche",
    },
    crumb: "Miles en temps de marche",
    title: "Combien de temps faut-il pour marcher X miles ?",
    intro:
      "Temps de marche pour une distance, sur trois allures courantes. Cliquez sur une ligne pour la page détaillée.",
    formulaTitle: "La règle rapide",
    formula: "minutes ≈ miles × {minutes}",
    formulaNote:
      "À une allure normale de {normal} mph. Les marcheurs rapides ({brisk} mph) gagnent environ {briskCut} % ; les marcheurs lents ({slow} mph) ajoutent {slowAdd} %.",
    tableTitle: "Temps de marche selon la distance et l'allure",
    columns: {
      distance: "Distance",
      detail: "Détail",
    },
    exactTitle: "Vous préparez un itinéraire précis ?",
    exactBody:
      "Le calculateur de temps de marche gère n'importe quelle distance, avec l'heure de départ et d'arrivée, les pauses et l'allure.",
    faq: [
      {
        question: "Combien de temps pour marcher 1 mile ?",
        answer:
          "Environ {normalMin} minutes à une allure normale de {normalMph} mph. Allure rapide ({briskMph} mph) : {briskMin} minutes. Allure lente ({slowMph} mph) : {slowMin} minutes.",
      },
      {
        question: "Combien de temps pour marcher 3 miles ?",
        answer:
          "Environ {hours} heure à allure normale. Rapide : {briskMin} minutes. Lent : {slowHours} heure {slowMins} minutes.",
      },
      {
        question: "Combien de temps pour marcher 5 miles ?",
        answer:
          "Environ {hours} heure {mins} minutes à allure normale. Rapide : {briskHours} heure {briskMins} minutes. Lent : {slowHours} heures {slowMins} minutes.",
      },
    ],
  },
};

export default fr;

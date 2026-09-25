import type { ConversionValuesMessages } from "./en";

const fr: ConversionValuesMessages = {
  ui: {
    breadcrumb: "Fil d'Ariane",
    quickAnswer: "Réponse rapide",
    forContext: "Pour situer :",
    distanceByHeightTitle: "La distance dépend de votre taille",
    distanceByHeightBody:
      "Votre foulée mesure environ 0,41 × votre taille — une personne plus petite parcourt donc moins de distance à chaque pas.",
    heightColumn: "Votre taille",
    strideColumn: "Foulée",
    milesColumn: "Miles",
    kilometersColumn: "Kilomètres",
    stepsColumn: "Pas",
    stepsRequiredTitle: "Le nombre de pas dépend de votre taille",
    stepsRequiredBody: "Les personnes plus petites font plus de pas pour couvrir la même distance.",
    caloriesTitle: "Calories brûlées selon le poids et l'allure",
    caloriesBody:
      "Les calories augmentent de façon linéaire avec le poids. Une allure plus rapide brûle davantage — mais seulement un peu plus, à la marche.",
    weightColumn: "Votre poids",
    timeTitle: "Combien de temps cela prend-il ?",
    timeBody:
      "La durée dépend de votre allure. La plupart des adultes marchent à une allure normale d'environ 3 mph.",
    paceColumn: "Allure",
    speedColumn: "Vitesse",
    timeColumn: "Durée",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} cal",
    mph: "{value} mph",
    ctaTitle: "Suivez vos vrais chiffres avec Steps",
    ctaBody:
      "Ces conversions utilisent des moyennes. L'app Steps suit votre longueur de pas {actual}, vos calories et votre temps de marche — synchronisés depuis votre iPhone et votre Apple Watch.",
    ctaActual: "réelle",
    relatedTitle: "Conversions associées",
    faqTitle: "Questions fréquentes",
    heights: [
      "147 cm (4′10″) — petite",
      "163 cm (5′4″) — femme moyenne",
      "175 cm (5′9″) — adulte moyen",
      "183 cm (6′0″) — homme moyen",
      "193 cm (6′4″) — grand",
    ],
    weights: [
      "54 kg (120 lb)",
      "68 kg (150 lb)",
      "82 kg (180 lb)",
      "95 kg (210 lb)",
      "113 kg (250 lb)",
    ],
    paces: ["Lente (2 mph)", "Normale (3,1 mph)", "Rapide (4 mph)"],
    duration: {
      minutes: "{count} min",
      hours: "{count} h",
      hoursMinutes: "{hours} h {minutes} min",
    },
  },
  plurals: {
    mile: { one: "1 mile", other: "{count} miles" },
    mileArticle: { one: "un mile", other: "{count} miles" },
    mileInSteps: { one: "{count} mile en pas", other: "{count} miles en pas" },
    mileToSteps: { one: "{count} mile en pas", other: "{count} miles en pas" },
    howManyStepsInMile: {
      one: "combien de pas dans {count} mile",
      other: "combien de pas dans {count} miles",
    },
    howManyStepsIsMile: {
      one: "combien de pas font {count} mile",
      other: "combien de pas font {count} miles",
    },
    mileWalkSteps: "{count} mile marche pas",
    howLongDoesMile: {
      one: "combien de temps pour marcher {count} mile",
      other: "combien de temps pour marcher {count} miles",
    },
    howLongToMile: {
      one: "temps de marche {count} mile",
      other: "temps de marche {count} miles",
    },
    walkingTimeMile: {
      one: "durée de marche {count} mile",
      other: "durée de marche {count} miles",
    },
    mileWalkingTime: {
      one: "temps de marche de {count} mile",
      other: "temps de marche de {count} miles",
    },
    walkMileTime: {
      one: "Marcher {count} mile — durée",
      other: "Marcher {count} miles — durée",
    },
  },
  familiar: {
    olympic: "un tour de piste olympique de 400 m",
    centralPark: "la longueur de Central Park (New York)",
    fiveK: "un 5 km",
    tenK: "un 10 km",
    brooklyn: "la traversée du pont de Brooklyn (aller-retour)",
    half: "un semi-marathon",
    marathon: "un marathon",
  },
  foods: {
    banana: "une banane (105 cal)",
    apple: "une pomme (95 cal)",
    bread: "une tranche de pain (80 cal)",
    coffee: "une tasse de café avec de la crème (50 cal)",
    cookie: "un cookie aux pépites de chocolat (160 cal)",
    juice: "un verre de jus d'orange (110 cal)",
  },
  stepsToKm: {
    meta: {
      title: "{steps} pas en km — combien de kilomètres font {steps} pas ?",
      description:
        "{steps} pas ≈ {km} km ({miles} miles) pour un adulte moyen. Voyez la distance exacte selon votre taille, les calories brûlées et le temps de marche.",
      keywords: [
        "{steps} pas en km",
        "{steps} pas en kilomètres",
        "combien de km font {steps} pas",
        "{steps} pas distance km",
      ],
      ogImageAlt: "{steps} pas en km",
    },
    h1: "{steps} pas en kilomètres",
    subheading: "Quelle distance parcourez-vous en atteignant {steps} pas ?",
    primary: "{km} km",
    secondary:
      "{miles} miles · environ {time} à allure normale · {calories} calories pour une personne de 70 kg",
    intro:
      "Marcher {steps} pas couvre environ {km} km ({miles} miles) pour un adulte moyen, avec une foulée type de 76 cm (2,5 ft). À une allure normale de 5 km/h, cela prend environ {time} et brûle à peu près {calories} calories pour une personne de 70 kg (155 lb). La distance exacte dépend de votre taille — les personnes plus grandes couvrent plus de terrain à chaque pas. Voir le tableau ci-dessous.",
    crumb: "Pas en km",
    crumbValue: "{steps} pas",
    related: "{steps} pas en km",
    relatedHub: "Combien de pas dans un km ?",
    relatedMiles: "{steps} pas en miles",
    faq: [
      {
        question: "Combien de km font {steps} pas ?",
        answer:
          "{steps} pas représentent environ {km} km ({miles} miles) pour un adulte moyen avec une foulée de 76 cm. Les personnes plus petites parcourent un peu moins, les plus grandes un peu plus — consultez le tableau des tailles sur cette page pour votre chiffre.",
      },
      {
        question: "Combien de temps faut-il pour marcher {steps} pas ?",
        answer:
          "À une allure normale de 5 km/h, {steps} pas prennent environ {time}. À une allure rapide de 6,4 km/h, comptez environ {brisk}. À une allure lente de 3,2 km/h, comptez environ {slow}.",
      },
      {
        question: "Combien de calories brûlent {steps} pas ?",
        answer:
          "{steps} pas brûlent environ {calories} calories pour une personne de 70 kg (155 lb) à allure normale. Les personnes plus légères brûlent moins de calories par pas ; les personnes plus lourdes en brûlent plus. Consultez le tableau des calories sur cette page pour votre poids.",
      },
      {
        question: "Comment le calcul pas vers km est-il fait ?",
        answer:
          "Nous utilisons une foulée moyenne d'adulte de 76 cm (2,5 ft). Pas × longueur de foulée (cm) ÷ 100 000 = distance en km. Donc {steps} pas × 76 cm ÷ 100 000 ≈ {km} km. Votre foulée réelle vaut environ 0,41 × votre taille.",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "{steps} pas en miles — combien de miles font {steps} pas ?",
      description:
        "{steps} pas ≈ {miles} miles ({km} km) pour un adulte moyen. Voyez la distance exacte selon votre taille, les calories brûlées et le temps de marche.",
      keywords: [
        "{steps} pas en miles",
        "{steps} pas en mile",
        "combien de miles font {steps} pas",
        "{steps} pas",
        "distance de {steps} pas",
        "calories de {steps} pas",
      ],
      ogImageAlt: "{steps} pas en miles",
    },
    h1: "{steps} pas en miles",
    subheading: "Quelle distance parcourez-vous en atteignant {steps} pas ?",
    primary: "{miles} miles",
    secondary:
      "{km} km · environ {time} à allure normale · {calories} calories pour une personne de 155 lb (70 kg)",
    intro:
      "Marcher {steps} pas couvre environ {miles} miles ({km} km) pour un adulte moyen, avec une foulée type de 76 cm (2,5 ft). À une allure normale de 3 mph, cela prend environ {time} et brûle à peu près {calories} calories pour une personne de 155 lb (70 kg). La distance exacte dépend de votre taille — les personnes plus grandes couvrent plus de terrain à chaque pas. Voir le tableau ci-dessous.",
    crumb: "Pas en miles",
    crumbValue: "{steps} pas",
    related: "{steps} pas en miles",
    relatedHub: "Combien de pas dans un mile ?",
    relatedCalories: "{steps} pas en calories",
    realWorld: {
      roughly: "{miles} miles correspondent à peu près à la distance de {name}.",
      times: "C'est environ {factor}× la distance de {name}.",
      shorter: "C'est environ {factor}× plus court que {name}.",
    },
    faq: [
      {
        question: "Combien de miles font {steps} pas ?",
        answer:
          "{steps} pas représentent environ {miles} miles ({km} km) pour un adulte moyen avec une foulée de 76 cm. Les personnes plus petites parcourent un peu moins, les plus grandes un peu plus — consultez le tableau des tailles sur cette page pour votre chiffre.",
      },
      {
        question: "Combien de temps faut-il pour marcher {steps} pas ?",
        answer:
          "À une allure normale de 3 mph, {steps} pas prennent environ {time}. À une allure rapide de 4 mph, comptez environ {brisk}. À une allure lente de 2 mph, comptez environ {slow}.",
      },
      {
        question: "Combien de calories brûlent {steps} pas ?",
        answer:
          "{steps} pas brûlent environ {calories} calories pour une personne de 155 lb (70 kg) à allure normale. Les personnes plus légères brûlent moins de calories par pas ; les personnes plus lourdes en brûlent plus. Consultez le tableau des calories sur cette page pour votre poids.",
      },
      {
        question: "Comment la conversion est-elle calculée ?",
        answer:
          "Nous utilisons une foulée moyenne d'adulte de 76 cm (2,5 ft), le chiffre le plus souvent cité par le CDC et la Mayo Clinic. Pas × longueur de foulée = distance parcourue. Votre foulée réelle vaut environ 0,41 × votre taille — le tableau des tailles sur cette page montre le calcul pour cinq tailles courantes.",
      },
    ],
    daily: {
      question: "{steps} pas sont-ils un bon objectif quotidien ?",
      below:
        "{steps} pas sont en dessous de l'objectif quotidien de 7 000 à 10 000 pas que la plupart des autorités de santé recommandent aux adultes. Prenez-le comme point de départ et augmentez progressivement — même 1 000 pas de plus par jour améliorent la santé cardiovasculaire.",
      mid: "Oui — {steps} pas se situent dans la zone que la plupart des recherches et le CDC suggèrent pour les adultes. Atteindre ce volume régulièrement est lié à un moindre risque cardiovasculaire et à une meilleure santé à long terme.",
      above:
        "{steps} pas dépassent l'objectif standard de 10 000 pas par jour. C'est un excellent volume, associé à une bonne forme cardiovasculaire et à la gestion du poids — mais des jours de récupération à plus faible volume sont aussi sains.",
    },
  },
  milesToSteps: {
    meta: {
      title: "Combien de pas dans {miles} ? — {steps} pas",
      description:
        "{miles} ≈ {steps} pas pour un adulte moyen. Voyez le nombre exact de pas selon votre taille, les calories brûlées et le temps de marche.",
      ogImageAlt: "{miles} en pas",
    },
    h1: "Combien de pas dans {milesArticle} ?",
    subheading: "La réponse — pour un adulte moyen — et comment elle change avec votre taille.",
    primary: "{steps} pas",
    secondary:
      "{miles} · {km} km · environ {time} à allure normale · {calories} calories pour une personne de 155 lb (70 kg)",
    intro:
      "Marcher {miles} demande environ {steps} pas pour un adulte moyen, avec une foulée type de 76 cm (2,5 ft). À une allure normale de 3 mph, cela prend environ {time} et brûle à peu près {calories} calories pour une personne de 155 lb (70 kg). Le nombre exact de pas dépend de votre taille — les personnes plus petites font plus de pas pour la même distance. Voir le tableau ci-dessous.",
    crumb: "Miles en pas",
    relatedHub: "Convertisseur pas en miles",
    relatedCalories: "{steps} pas en calories",
    faq: [
      {
        question: "Combien de pas font {miles} ?",
        answer:
          "{miles} représentent environ {steps} pas pour un adulte moyen avec une foulée de 76 cm. Les personnes plus petites font plus de pas pour couvrir la même distance — consultez le tableau des tailles sur cette page pour votre chiffre.",
      },
      {
        question: "Combien de temps faut-il pour marcher {miles} ?",
        answer:
          "À une allure normale de 3 mph, {miles} prennent environ {time}. À une allure rapide de 4 mph, comptez environ {brisk}. À une allure lente de 2 mph, comptez environ {slow}.",
      },
      {
        question: "Combien de calories brûle {milesArticle} ?",
        answer:
          "Marcher {miles} brûle environ {calories} calories pour une personne de 155 lb (70 kg) à allure normale. Les personnes plus légères brûlent moins ; les personnes plus lourdes brûlent plus — consultez le tableau des calories sur cette page.",
      },
      {
        question: "Comment la conversion miles vers pas est-elle calculée ?",
        answer:
          "Nous multiplions la distance en mètres par 100 (cm/m) et divisons par une foulée moyenne de 76 cm. Donc {miles} = {meters} m × 100 ÷ 76 ≈ {steps} pas. Votre foulée réelle vaut environ 0,41 × votre taille.",
      },
    ],
    exercise: {
      question: "Marcher {miles} par jour est-il assez d'exercice ?",
      yes: "Oui — marcher {miles} par jour ({steps} pas) couvre largement les 150 minutes d'activité aérobie modérée par semaine recommandées par le CDC, si vous marchez à une allure normale ou rapide.",
      start:
        "Marcher {miles} par jour est un bon début. Cela vous place dans une zone active et contribue aux 150 minutes d'activité aérobie hebdomadaire recommandées par le CDC, mais une seconde marche quotidienne apporterait un bénéfice plus net.",
      below:
        "Marcher moins de {miles} par jour est en dessous du minimum recommandé par le CDC. Augmentez progressivement — même 1 000 pas de plus par jour améliorent la santé cardiovasculaire.",
    },
  },
  kmToSteps: {
    meta: {
      title: "Combien de pas dans {km} km ? — {steps} pas",
      description:
        "{km} km ≈ {steps} pas pour un adulte moyen. Voyez le nombre exact de pas selon votre taille, les calories brûlées et le temps de marche.",
      keywords: [
        "{km} km en pas",
        "{km} km vers pas",
        "combien de pas dans {km} km",
        "{km} kilomètres en pas",
      ],
      ogImageAlt: "{km} km en pas",
    },
    h1: "Combien de pas dans {km} km ?",
    subheading: "La réponse — pour un adulte moyen — et comment elle change avec votre taille.",
    primary: "{steps} pas",
    secondary:
      "{km} km · environ {time} à allure normale · {calories} calories pour une personne de 70 kg",
    intro:
      "Marcher {km} km demande environ {steps} pas pour un adulte moyen, avec une foulée type de 76 cm (2,5 ft). À une allure normale de 5 km/h, cela prend environ {time} et brûle à peu près {calories} calories pour une personne de 70 kg (155 lb). Le nombre exact de pas dépend de votre taille — les personnes plus petites font plus de pas pour la même distance.",
    crumb: "Km en pas",
    crumbValue: "{km} km",
    related: "{km} km en pas",
    relatedHub: "Convertisseur pas en km",
    faq: [
      {
        question: "Combien de pas font {km} km ?",
        answer:
          "{km} km représentent environ {steps} pas pour un adulte moyen avec une foulée de 76 cm. Les personnes plus petites font plus de pas pour couvrir la même distance — consultez le tableau des tailles sur cette page pour votre chiffre.",
      },
      {
        question: "Combien de temps faut-il pour marcher {km} km ?",
        answer:
          "À une allure normale de 5 km/h, {km} km prennent environ {time}. À une allure rapide de 6,4 km/h, comptez environ {brisk}. À une allure lente de 3,2 km/h, comptez environ {slow}.",
      },
      {
        question: "Combien de calories brûle la marche de {km} km ?",
        answer:
          "Marcher {km} km brûle environ {calories} calories pour une personne de 70 kg (155 lb) à allure normale. Consultez le tableau des calories sur cette page pour votre poids.",
      },
      {
        question: "Comment la conversion km vers pas est-elle calculée ?",
        answer:
          "Nous multiplions la distance par 100 000 (cm/km) et divisons par une foulée moyenne de 76 cm. Donc {km} km = {cm} cm ÷ 76 cm ≈ {steps} pas. Votre foulée réelle vaut environ 0,41 × votre taille.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Calories de {steps} pas — combien de calories brûlent {steps} pas ?",
      description:
        "{steps} pas brûlent environ {calories} calories pour un adulte moyen. Voyez la dépense selon votre poids, votre allure et le temps de marche.",
      keywords: [
        "calories {steps} pas",
        "{steps} pas combien de calories",
        "calories pour {steps} pas",
        "calories brûlées {steps} pas",
        "combien de calories font {steps} pas",
      ],
      ogImageAlt: "calories de {steps} pas",
    },
    h1: "Calories de {steps} pas — combien de calories brûlez-vous ?",
    subheading: "Calories brûlées en marchant {steps} pas, selon votre poids et votre allure.",
    primary: "≈ {calories} calories",
    secondary:
      "Pour une personne de 155 lb (70 kg) à allure normale · couvre {miles} mi / {km} km · environ {time}",
    intro:
      "Marcher {steps} pas brûle environ {calories} calories pour un adulte moyen (155 lb / 70 kg) à allure normale. Cela correspond à {miles} miles ({km} km) et prend environ {time}. La dépense calorique suit le poids — les personnes plus légères brûlent moins, les plus lourdes brûlent plus.",
    crumb: "Pas en calories",
    crumbValue: "{steps} pas",
    related: "calories de {steps} pas",
    relatedMiles: "{steps} pas en miles",
    relatedTool: "Calculateur de calories de marche",
    realWorld: {
      roughly: "{calories} calories correspondent à peu près à {name}.",
      times: "{calories} calories représentent environ {factor}× {name}.",
      less: "{calories} calories représentent environ {factor}× moins que {name}.",
    },
    faq: [
      {
        question: "Combien de calories brûlent {steps} pas ?",
        answer:
          "{steps} pas brûlent environ {calories} calories pour une personne de 155 lb (70 kg) marchant à 3 mph. Les personnes plus lourdes brûlent davantage — consultez le tableau des poids sur cette page.",
      },
      {
        question: "L'allure change-t-elle les calories brûlées ?",
        answer:
          "Un peu. Marcher à 4 mph (rapide) brûle environ 30 % de calories de plus par minute qu'à 2 mph (lent), mais vous couvrez aussi la distance plus vite, donc le total pour un nombre de pas fixe est plus proche qu'on ne le pense. Le total va d'environ {slowCal} (lent) à {briskCal} (rapide) pour une personne de 150 lb.",
      },
      {
        question: "Combien de temps faut-il pour marcher {steps} pas ?",
        answer:
          "Environ {time} à allure normale (3 mph). Allure plus rapide à 4 mph : {brisk}. Promenade lente à 2 mph : {slow}.",
      },
      {
        question: "Quelle formule se cache derrière ces chiffres ?",
        answer:
          "Nous utilisons la formule standard des calories basée sur les MET : Calories = MET × poids (kg) × temps (heures). Pour une allure de marche normale, MET = 3,5. Nous supposons une foulée moyenne de 76 cm pour convertir les pas en distance, puis la distance en temps de marche.",
      },
    ],
    loss: {
      question: "{steps} pas brûlent-ils assez de calories pour perdre du poids ?",
      yes: "{calories} calories représentent une part utile d'un déficit quotidien — environ 0,5 lb de perte de poids sur deux semaines si vous ne compensez pas en mangeant plus. Avec même un léger ajustement alimentaire, cela peut entraîner une perte régulière.",
      no: "{calories} calories sont une contribution utile, mais ne suffisent pas à elles seules pour perdre du poids. Visez au moins 7 500 à 10 000 pas par jour, avec un léger déficit calorique alimentaire.",
    },
  },
  stepsToTime: {
    meta: {
      title: "Combien de temps pour marcher {steps} pas ?",
      description:
        "{steps} pas prennent environ {time} à allure normale. Voyez le temps de marche à trois allures, la distance et les calories brûlées.",
      keywords: [
        "combien de temps pour marcher {steps} pas",
        "durée de marche {steps} pas",
        "{steps} pas en minutes",
        "temps de marche {steps} pas",
        "{steps} pas combien de temps",
      ],
      ogImageAlt: "Temps de marche pour {steps} pas",
    },
    h1: "Combien de temps faut-il pour marcher {steps} pas ?",
    subheading: "Temps de marche, distance et calories pour {steps} pas.",
    primary: "≈ {time}",
    secondary: "À une allure normale de 3 mph · couvre {miles} mi / {km} km · {calories} calories",
    intro:
      "Marcher {steps} pas prend environ {time} à une allure normale de 3 mph (5 km/h). Une allure rapide de 4 mph réduit cela à {brisk} ; une promenade lente de 2 mph l'allonge à {slow}. Vous couvrirez {miles} miles ({km} km) et brûlerez environ {calories} calories.",
    crumb: "Temps de marche",
    crumbValue: "{steps} pas",
    related: "{steps} pas — temps de marche",
    relatedMiles: "{steps} pas en miles",
    relatedTool: "Calculateur de temps de marche",
    faq: [
      {
        question: "Combien de temps faut-il pour marcher {steps} pas ?",
        answer:
          "Environ {time} à une allure normale de 3 mph. Allure rapide (4 mph) : {brisk}. Promenade lente (2 mph) : {slow}.",
      },
      {
        question: "Le temps de marche change-t-il avec ma taille ?",
        answer:
          "Le temps reste à peu près le même — ce qui change, c'est le nombre de pas. Les personnes plus grandes font moins de pas pour couvrir la même distance, mais la plupart des gens marchent à une cadence proche (environ 100 pas par minute). Le temps dépend donc surtout de votre allure, pas de votre taille.",
      },
      {
        question: "Quelle distance font {steps} pas ?",
        answer: "{steps} pas couvrent environ {miles} miles ({km} km) pour un adulte moyen.",
      },
      {
        question: "Comment le temps de marche est-il calculé ?",
        answer:
          "Temps = distance ÷ allure. Nous calculons la distance à partir du nombre de pas avec une foulée moyenne de 76 cm, puis nous divisons par votre vitesse de marche. L'allure normale (3 mph / 5 km/h) est la valeur par défaut — le tableau de cette page montre les trois allures.",
      },
    ],
    spread: {
      question: "Puis-je répartir {steps} pas sur la journée ?",
      high: "Tout à fait — la plupart des gens qui atteignent {steps} pas par jour les cumulent entre les marches, les courses et les déplacements du quotidien. Trois marches de 15 minutes plus l'activité habituelle suffisent en général.",
      low: "Oui — même une seule marche de 20 à 30 minutes plus l'activité quotidienne (jusqu'à la voiture, dans le bureau, etc.) vous amène en général à {steps} pas sans une longue marche dédiée.",
    },
  },
  milesToTime: {
    meta: {
      title: "Combien de temps pour marcher {miles} ?",
      description:
        "Marcher {miles} prend environ {time} à une allure normale de 3 mph. Voyez le temps à trois allures, plus le nombre de pas et les calories.",
      ogImageAlt: "temps de marche {miles}",
    },
    h1: "Combien de temps faut-il pour marcher {milesArticle} ?",
    subheading: "Temps de marche, pas et calories pour {miles}.",
    primary: "≈ {time}",
    secondary: "À une allure normale de 3 mph · {steps} pas · {calories} calories pour une personne de 70 kg",
    intro:
      "Marcher {miles} prend environ {time} à une allure normale de 3 mph (5 km/h). Comptez {brisk} à une allure rapide de 4 mph, ou {slow} à une allure tranquille de 2 mph. Vous ferez environ {steps} pas et brûlerez à peu près {calories} calories.",
    crumb: "Temps de marche",
    relatedTool: "Calculateur de temps de marche",
    faq: [
      {
        question: "Combien de temps faut-il pour marcher {milesArticle} ?",
        answer: "Environ {time} à une allure normale de 3 mph. Rapide à 4 mph : {brisk}. Lent à 2 mph : {slow}.",
      },
      {
        question: "Combien de pas font {miles} ?",
        answer:
          "{miles} représentent environ {steps} pas pour un adulte moyen avec une foulée de 76 cm. Les personnes plus petites font plus de pas — consultez le tableau des tailles sur cette page.",
      },
      {
        question: "Combien de calories vais-je brûler en marchant {miles} ?",
        answer:
          "Environ {calories} calories pour une personne de 70 kg (155 lb) à allure normale. Les personnes plus lourdes brûlent davantage — consultez le tableau des poids.",
      },
      {
        question: "Comment le temps de marche est-il calculé ?",
        answer:
          "Temps = distance ÷ allure. {miles} = {km} km. À 5 km/h, cela fait {time}. Nous utilisons les trois allures que le CDC et l'ACSM publient pour l'activité physique modérée.",
      },
    ],
    exercise: {
      question: "Marcher {miles} par jour est-il assez d'exercice ?",
      yes: "Oui — marcher {miles} par jour couvre largement la recommandation du CDC de 150 minutes par semaine d'activité aérobie modérée, si vous marchez à une allure normale ou rapide.",
      start:
        "Marcher {miles} par jour est un bon début. Avec l'activité quotidienne, cela vous place dans une zone active, mais une marche supplémentaire apporterait un bénéfice plus net.",
      below:
        "Moins de {miles} par jour est en dessous du minimum recommandé par le CDC. Augmentez progressivement — même 0,5 mile de plus par jour améliore la santé cardiovasculaire.",
    },
  },
};

export default fr;

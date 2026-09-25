import type { WalkingCaloriesMessages } from "./en";

const fr: WalkingCaloriesMessages = {
  meta: {
    title: "Calculateur de calories de marche : gratuit, selon le poids et l'allure",
    description:
      "Calories de marche : un adulte de 70 kg brûle ~150 cal en 30 min à 5,6 km/h. Calculateur gratuit — estimation immédiate selon le poids, la vitesse, le temps, la distance ou les pas.",
    keywords: [
      "calculateur calories marche",
      "calories brûlées en marchant",
      "valeur MET marche",
      "MET marche 5 km/h",
      "valeur MET marche 5 km/h",
      "valeur MET marche rapide",
      "valeur MET allure moyenne",
      "valeur MET allure modérée",
      "calories dépensées marche",
      "calories marche par km",
      "valeur MET marche 4 km/h",
      "valeur MET marche 4,5 km/h",
      "valeur MET marche 6 km/h",
      "formule calculateur calories marche MET",
    ],
    ogTitle: "Calculateur de calories de marche : gratuit, selon le poids et l'allure",
    ogDescription:
      "Un adulte de 70 kg brûle ~150 cal en 30 min à allure modérée. Calculateur gratuit — résultat immédiat selon le poids, la vitesse, le temps, la distance ou les pas.",
    ogImageAlt: "Calculateur de calories de marche",
  },
  hero: {
    title: "Calculateur de calories de marche et valeurs MET",
    subtitle:
      "Calculez les calories brûlées en marchant avec les valeurs MET (équivalent métabolique) pour chaque vitesse — de la promenade lente à 2 km/h à la marche athlétique au-delà de 7 km/h. Avec un tableau MET complet.",
  },
  appCta: {
    headline: "Suivez les calories que vous brûlez vraiment",
    description:
      "Steps compte chaque pas en arrière-plan et le transforme en calories réellement brûlées chaque jour, sans saisie manuelle.",
  },
  stickyCta: "Suivez vos pas avec Steps",
  calculator: {
    calculateBy: "Calculer selon",
    distance: "Distance",
    time: "Durée",
    weight: "Poids",
    duration: "Durée",
    minutes: "minutes",
    miles: "miles",
    walkingSpeed: "Vitesse de marche",
    speeds: {
      slow: { label: "Lente", description: "3,2 km/h (2 mph)" },
      normal: { label: "Normale", description: "5 km/h (3,1 mph)" },
      brisk: { label: "Rapide", description: "6,4 km/h (4 mph)" },
      fast: { label: "Très rapide", description: "7,2 km/h (4,5 mph)" },
    },
    caloriesBurned: "Calories brûlées",
    walkingTime: "Temps de marche",
    distanceResult: "Distance",
    steps: "Pas",
    fatBurned: "Graisse brûlée",
    metValue: "Valeur MET",
    metTableTitle: "Vitesse de marche et valeurs MET",
    metTableIntro:
      "Le MET (Metabolic Equivalent of Task) représente le coût énergétique d'une activité. Plus le MET est élevé, plus vous brûlez de calories.",
    columns: {
      speed: "Vitesse",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "Description",
    },
    paceDescriptions: {
      slow: "Promenade tranquille",
      normal: "Allure moyenne",
      brisk: "Marche rapide",
      fast: "Marche athlétique",
    },
  },
  info: {
    title: "Comment nous calculons les calories de marche",
    intro:
      "Nous utilisons la méthode MET (Metabolic Equivalent of Task) pour calculer les calories brûlées. Cette approche, appuyée par la recherche, tient compte de votre poids, de la durée de marche et de l'intensité.",
    formulaTitle: "La formule",
    formula: "Calories = MET × poids (kg) × durée (heures)",
    metLabel: "MET :",
    metText:
      "Metabolic Equivalent of Task — représente la dépense d'énergie par rapport au repos",
    exampleLabel: "Exemple :",
    example:
      "Une personne de 70 kg marchant à allure normale (MET 3,5) pendant 1 heure brûle : 3,5 × 70 × 1 = 245 calories",
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Combien de calories brûle 1 mile de marche ?",
      answer:
        "Marcher 1 mile brûle environ 80 à 100 calories pour la plupart des gens. Le chiffre exact dépend de votre poids et de votre vitesse. Une personne plus lourde brûle davantage de calories par mile.",
    },
    {
      question: "Combien de calories brûle 30 minutes de marche ?",
      answer:
        "Une marche de 30 minutes à allure normale brûle environ 100 à 150 calories pour la plupart des adultes. Une marche rapide peut monter à 150–200 calories. Utilisez le calculateur ci-dessus pour une estimation personnalisée.",
    },
    {
      question: "Combien de calories brûle 40 minutes de marche ?",
      answer:
        "Une marche de 40 minutes brûle environ 140 à 200 calories à allure modérée (4,8 km/h) et 200 à 280 calories à allure rapide (5,6–6,4 km/h) pour un adulte de 70 kg. À une allure de marche athlétique de 8 km/h, ces 40 minutes brûlent environ 290 calories. À 9,7 km/h (marche très rapide ou jogging léger, MET ~7,0), 40 minutes brûlent environ 325 à 330 calories pour une personne de 70 kg.",
    },
    {
      question: "Combien de calories brûle 40 minutes de marche à 9,7 km/h ?",
      answer:
        "Marcher 40 minutes à 9,7 km/h (6,0 mph) — allure de marche athlétique sur tapis, MET ~7,0 — brûle environ 327 calories pour une personne de 70 kg (155 lb). Les marcheurs plus lourds brûlent davantage : environ 380 cal à 82 kg, 422 cal à 91 kg. La plupart des adultes ne tiennent pas une vraie marche à cette vitesse ; beaucoup passent à un jogging léger. Utilisez le calculateur ci-dessus pour un chiffre précis selon votre poids.",
    },
    {
      question: "La vitesse de marche change-t-elle la dépense calorique ?",
      answer:
        "Oui, nettement. Marcher plus vite augmente votre valeur MET et brûle plus de calories par minute. La marche rapide (6,4 km/h) brûle environ 30 % de calories de plus qu'une promenade tranquille (3,2 km/h).",
    },
    {
      question: "Qu'est-ce que le MET et pourquoi est-ce important ?",
      answer:
        "Le MET (Metabolic Equivalent of Task) est une mesure scientifique de la dépense d'énergie. Un MET de 1 correspond à votre métabolisme de repos. La marche à allure normale a un MET de 3,5 : vous brûlez 3,5 fois plus de calories qu'au repos.",
    },
    {
      question: "Quelle est la valeur MET de la marche à allure moyenne ?",
      answer:
        "La valeur MET de la marche à allure moyenne (environ 5 km/h ou 3,1 mph) est de 3,5. C'est la vitesse la plus courante chez les adultes et la référence de la plupart des calculateurs. Une personne de 70 kg brûle environ 245 calories par heure à cette allure.",
    },
    {
      question: "Quelle est la valeur MET de la marche à allure modérée ?",
      answer:
        "Une allure modérée (4,0–4,5 km/h ou 2,5–2,8 mph) a un MET entre 3,0 et 3,3. C'est une allure confortable, où l'on peut parler, idéale au quotidien. Une personne de 70 kg brûle 210 à 231 calories par heure à allure modérée.",
    },
    {
      question: "Quelle est la valeur MET de la marche à 5 km/h (3,1 mph) ?",
      answer:
        "La valeur MET de la marche à 5 km/h (3,1 mph) est de 3,5. C'est considéré comme une allure normale. Une personne de 70 kg à cette vitesse brûle environ 245 calories par heure (3,5 × 70 = 245 kcal/h).",
    },
    {
      question: "Quelle est la valeur MET de la marche à 4,5 km/h (2,8 mph) ?",
      answer:
        "La valeur MET de la marche à 4,5 km/h (2,8 mph) est de 3,3. C'est une allure régulière et confortable. Pour une personne de 70 kg, cela brûle environ 231 calories par heure (3,3 × 70 = 231 kcal/h).",
    },
    {
      question: "Quelle est la valeur MET de la marche rapide à 6 km/h ?",
      answer:
        "La marche rapide à 6,0 km/h (3,7 mph) a un MET de 4,5. C'est environ 30 % plus coûteux que la marche normale (MET 3,5). Une personne de 70 kg brûle environ 315 calories par heure à cette allure.",
    },
    {
      question: "Combien de graisse puis-je brûler en marchant ?",
      answer:
        "Un kilogramme de graisse corporelle contient environ 7 700 calories. Marcher 10 000 pas par jour (environ 400 calories) brûlerait à peu près 1 kg de graisse tous les 19 jours, à alimentation inchangée. Associez la marche à une alimentation équilibrée pour de meilleurs résultats.",
    },
  ],
  formula: {
    title: "Comment fonctionne la formule des calories de marche",
    intro:
      "La {name} utilise les valeurs MET (Metabolic Equivalent of Task) du {source} — la même référence que les physiologistes de l'exercice dans le monde. La formule est :",
    name: "formule du calculateur de calories brûlées en marchant",
    source: "Compendium of Physical Activities",
    equation: "Calories = MET × poids (kg) × durée (heures)",
    glance:
      "Chaque vitesse de marche a une valeur MET précise. Voici les valeurs MET les plus recherchées :",
    highlights: [
      { phrase: "Valeur MET marche 4,8 km/h", detail: "(3 mph) =" },
      { phrase: "Valeur MET allure modérée", detail: "(5 km/h) =" },
      { phrase: "Valeur MET marche rapide", detail: "(6,4 km/h) =" },
      { phrase: "Valeur MET marche 5 km/h", detail: "(3,1 mph) =" },
    ],
    chartNote:
      "Pour le détail complet, consultez notre {chart} : toutes les vitesses, de la promenade lente à la marche athlétique, plus les ajustements de pente et de terrain.",
    chartLabel: "tableau des valeurs MET de la marche",
  },
  understanding: {
    title: "Comprendre les valeurs MET de la marche",
    term: "MET (Metabolic Equivalent of Task)",
    body:
      "Le {term} est la mesure scientifique standard de l'intensité d'un exercice. Un MET correspond à la dépense d'énergie de votre corps au repos complet — environ 1 calorie par kilogramme de poids et par heure. Une activité à MET 3,5 signifie que vous brûlez 3,5 fois plus d'énergie qu'assis sans bouger.",
    levels: {
      light: {
        title: "Marche légère",
        detail: "Promenade lente, allure de lèche-vitrines (2–4 km/h)",
      },
      moderate: {
        title: "Marche modérée",
        detail: "Allure normale à rapide, la plus courante (4–6 km/h)",
      },
      vigorous: {
        title: "Marche vigoureuse",
        detail: "Marche athlétique, marche de compétition ou montée (6+ km/h)",
      },
    },
    footnote:
      "Les valeurs MET de notre calculateur viennent du Compendium of Physical Activities, la référence utilisée par les chercheurs en exercice dans le monde. La marche à 5 km/h (3,1 mph) — la vitesse la plus recherchée — a un MET de 3,5 : une personne de 70 kg brûle 245 calories par heure à cette allure.",
  },
  metTable: {
    title: "Valeurs MET complètes selon la vitesse de marche",
    intro:
      "Le MET (Metabolic Equivalent of Task) mesure la dépense d'énergie. Un MET de 1,0 correspond à votre métabolisme de repos. Utilisez le tableau pour trouver la valeur MET exacte de votre vitesse. Valeurs issues du Compendium of Physical Activities.",
    columns: {
      activity: "Activité de marche",
      kmh: "Vitesse (km/h)",
      mph: "Vitesse (mph)",
      met: "Valeur MET",
      cal: "Cal/h (70 kg)",
    },
    activities: {
      "very-slow": "Marche très lente",
      "slow-stroll": "Promenade lente",
      leisurely: "Marche tranquille",
      comfortable: "Allure confortable",
      moderate: "Marche modérée",
      steady: "Allure régulière",
      normal: "Marche normale",
      purposeful: "Marche déterminée",
      brisk: "Marche rapide",
      fast: "Marche vive",
      "very-fast": "Marche très rapide",
      race: "Marche athlétique",
      "uphill-3": "Marche en montée (pente 3 %)",
      "uphill-6": "Marche en montée (pente 6 %)",
    },
    footnote:
      "Calories par heure calculées pour une personne de 70 kg (154 lb). Votre dépense réelle dépend de votre poids — utilisez le calculateur ci-dessus pour une estimation personnalisée. Les lignes en surbrillance montrent les allures les plus courantes. Source : Compendium of Physical Activities.",
  },
  cta: {
    title: "Suivez vos séances de marche",
    description:
      "Téléchargez l'appli Steps pour suivre automatiquement vos marches, les calories brûlées et vos progrès.",
  },
  howTo: {
    name: "Comment calculer les calories brûlées en marchant",
    description:
      "Indiquez la durée, l'allure et votre poids pour estimer les calories brûlées à l'aide des valeurs MET.",
    steps: [
      {
        name: "Indiquez la durée ou la distance",
        text: "Vous pouvez saisir soit le temps de marche, soit la distance. Les deux donnent la même estimation finale.",
      },
      {
        name: "Choisissez votre allure",
        text: "Lente, normale, rapide ou très rapide. Une allure plus vive utilise un MET plus élevé et brûle plus de calories par minute.",
      },
      {
        name: "Indiquez votre poids",
        text: "Le poids est le plus grand multiplicateur de la dépense calorique.",
      },
      {
        name: "Lisez votre estimation",
        text: "Le calculateur affiche les calories brûlées, la moyenne par minute et la valeur MET utilisée.",
      },
    ],
  },
};

export default fr;

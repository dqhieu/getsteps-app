import type { TreadmillCalorieCalculatorMessages } from "./en";

const fr: TreadmillCalorieCalculatorMessages = {
  meta: {
    title: "Calculateur de calories sur tapis : gratuit, avec inclinaison",
    description:
      "Calories sur tapis selon vitesse, inclinaison et poids. Un adulte de 155 lb brûle ~120 cal en 30 min à 3 mph à plat, ~200 cal à 5 % d'inclinaison. Calculateur gratuit fondé sur l'ACSM.",
    keywords: [
      "calculateur calories tapis",
      "calories brûlées tapis",
      "calculateur calories inclinaison tapis",
      "calories brûlées sur tapis de course",
      "calories marche sur tapis",
      "calories tapis incliné",
      "calories 12-3-30",
      "équation métabolique ACSM",
      "valeurs MET tapis",
    ],
    ogTitle: "Calculateur de calories sur tapis : gratuit, avec inclinaison",
    ogDescription:
      "Calculez les calories sur tapis selon la vitesse, l'inclinaison, le poids et la durée. Calculateur gratuit avec les équations métaboliques de l'ACSM.",
    ogImageAlt: "Calculateur de calories sur tapis",
  },
  hero: {
    title: "Calculateur de calories sur tapis",
    subtitle:
      "Calculez les calories brûlées sur un tapis à partir de votre vitesse, de votre inclinaison, de votre poids et de la durée. Les équations métaboliques de l'ACSM intègrent l'inclinaison au lieu de l'ignorer.",
  },
  calculator: {
    session: "Votre séance sur tapis",
    weight: "Poids",
    speed: "Vitesse",
    incline: "Inclinaison : {percent} %",
    duration: "Durée",
    minutes: "minutes",
    caloriesBurned: "Calories brûlées",
    kcalValue: "{value} kcal",
    inclineAdds:
      "L'inclinaison de {grade} % ajoute {extra} kcal par rapport à la même séance à plat ({flat} kcal).",
    met: "MET",
    distance: "Distance",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "Pas estimés",
    fatBurned: "Graisse brûlée",
    grams: "{value} g",
    equation: "Équation métabolique ACSM de {gait} ({vo2} ml/kg/min de VO₂).",
    gaitWalking: "marche",
    gaitRunning: "course",
    tableTitle: "Calories selon l'inclinaison",
    tableSubtitle: "Même poids, même vitesse et même durée. Seule la pente change.",
    colIncline: "Inclinaison",
    colMet: "MET",
    colCalories: "Calories",
    colVsFlat: "vs plat",
    vsFlat: "+{percent} %",
  },
  resultCta: {
    headline: "Suivez les calories que vous brûlez vraiment",
    description:
      "Steps compte chaque pas en arrière-plan et le transforme en calories réellement brûlées chaque jour, sans saisie manuelle.",
  },
  info: {
    title: "Comment nous calculons les calories sur tapis",
    intro:
      "Une seule valeur MET ne peut pas décrire le travail sur tapis, parce que la pente change le coût énergétique à chaque vitesse. Nous utilisons les équations métaboliques de l'ACSM, qui estiment la consommation d'oxygène à partir de la vitesse et de la pente séparément, puis la convertissent en calories.",
    formulaTitle: "Les formules",
    formulas: [
      { strong: "VO₂ marche", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ course", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S est la vitesse en mètres par minute, G la pente en fraction (5 % = 0,05). La VO₂ est en ml/kg/min.",
      },
      {
        strong: "MET",
        rest: "= VO₂ ÷ 3,5, et kcal/min = MET × 3,5 × poids(kg) ÷ 200",
      },
      {
        strong: "Exemple :",
        rest: "70 kg à 5 km/h et 5 % de pente donnent une VO₂ de 19,3, environ 5,5 MET, soit à peu près 405 kcal par heure.",
      },
    ],
    note: "L'équation de marche s'applique sous 6,5 km/h et celle de course à partir de ce seuil, là où la plupart des gens passent de la marche rapide au jogging. Les estimations supposent que vous ne tenez pas les rampes.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Combien de calories brûle 30 minutes sur tapis ?",
      answer:
        "Un adulte de 70 kg (155 lb) qui marche 30 minutes à 5 km/h (3,1 mph) sur un tapis plat brûle environ 125 calories. Passez l'inclinaison à 5 % et la même séance brûle environ 205 calories. À 10 %, c'est plus proche de 285. L'inclinaison compte plus que n'importe quel autre réglage que vous pouvez changer.",
    },
    {
      question: "L'inclinaison brûle-t-elle vraiment plus de calories ?",
      answer:
        "Oui, nettement. Chaque 1 % de pente ajoute un travail vertical au déplacement horizontal. Aux vitesses de marche, 5 % d'inclinaison augmentent le coût énergétique d'environ 60 % par rapport au plat, et 10 % peuvent plus que le doubler, à vitesse et durée identiques.",
    },
    {
      question: "Combien de calories brûle l'entraînement 12-3-30 ?",
      answer:
        "12-3-30 signifie 12 % d'inclinaison, 3 mph, 30 minutes. Pour un adulte de 70 kg, c'est environ 300 calories, contre environ 120 calories pour les mêmes 30 minutes à 3 mph à plat. L'inclinaison fait l'essentiel du travail : elle représente à peu près 60 % de la dépense totale.",
    },
    {
      question: "L'affichage de calories du tapis est-il fiable ?",
      answer:
        "En général, non. La plupart des machines supposent un poids par défaut et ignorent le poids que vous saisissez pour l'écran, ce qui surestime souvent la dépense de 15 à 25 %. Un calcul fondé sur votre poids réel, votre vitesse et votre pente est plus fiable.",
    },
    {
      question: "Brûlez-vous plus en marchant en pente ou en courant à plat ?",
      answer:
        "Les deux peuvent se rejoindre, mais il faut une pente raide. Marcher à 5 km/h sur 12 % fait environ 8,5 MET, soit essentiellement la même chose qu'un jogging à 8 km/h à plat (8,6 MET). À 10 %, plus doux, la marche en pente est à 7,7 MET, donc un peu moins. L'avantage de la marche en pente est un coût énergétique comparable pour un impact articulaire bien plus faible.",
    },
    {
      question: "Faut-il tenir les rampes ?",
      answer:
        "Non, si le but est de brûler des calories. Tenir les rampes transfère une partie du poids du corps vers les bras et peut réduire la dépense réelle de 20 à 25 %, surtout sur les fortes pentes, pendant que la console continue d'afficher le chiffre sans appui.",
    },
  ],
  cta: {
    title: "Suivez vos séances sur tapis",
    description:
      "Téléchargez l'application Steps pour suivre automatiquement vos marches, les calories brûlées et vos progrès.",
  },
  sticky: "Suivez vos pas avec Steps",
};

export default fr;

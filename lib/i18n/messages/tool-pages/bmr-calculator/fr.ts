import type { BmrCalculatorMessages } from "./en";

const fr: BmrCalculatorMessages = {
  meta: {
    title: "Calculateur de BMR : métabolisme de base selon 3 formules",
    description:
      "Calculez votre métabolisme de base avec Mifflin-St Jeor, Harris-Benedict et Katch-McArdle côte à côte. Un homme de 30 ans et 75 kg brûle environ 1 699 calories au repos. Calculateur gratuit.",
    keywords: [
      "calculateur BMR",
      "calculateur métabolisme de base",
      "métabolisme au repos",
      "équation de Mifflin-St Jeor",
      "équation de Harris-Benedict",
      "formule de Katch-McArdle",
      "combien de calories je brûle au repos",
      "BMR et TDEE",
      "calculateur de métabolisme",
    ],
    ogTitle: "Calculateur de BMR : métabolisme de base selon 3 formules",
    ogDescription:
      "Calculez votre métabolisme de base avec trois formules cliniques côte à côte, plus les besoins caloriques quotidiens à chaque niveau d'activité.",
    ogImageAlt: "Calculateur de BMR",
  },
  hero: {
    title: "Calculateur de BMR",
    subtitle:
      "Découvrez les calories que votre corps brûle au repos complet. Trois formules cliniques tournent en parallèle, pour voir l'écart au lieu d'un seul chiffre qui se prétend certain.",
  },
  calculator: {
    details: "Vos informations",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    years: "ans",
    weight: "Poids",
    height: "Taille",
    bodyFat: "Masse grasse %",
    bodyFatOptional: "(facultatif : débloque Katch-McArdle)",
    bodyFatPlaceholder: "p. ex. 20",
    activity: "Niveau d'activité",
    activityLevels: {
      sedentary: "Sédentaire",
      light: "Légèrement actif",
      moderate: "Modérément actif",
      active: "Actif",
      very_active: "Très actif",
    },
    activityDescriptions: {
      sedentary: "Travail de bureau, peu ou pas d'exercice",
      light: "Exercice léger 1 à 3 jours par semaine",
      moderate: "Exercice modéré 3 à 5 jours par semaine",
      active: "Exercice intense 6 à 7 jours par semaine",
      very_active: "Métier physique ou deux entraînements par jour",
    },
    calculate: "Calculer le métabolisme de base",
    results: "Vos résultats",
    bmr: "BMR",
    atRest: "calories/jour au repos",
    maintenance: "Maintenance",
    maintenanceAt: "en étant {level}",
    leanMass:
      "Masse maigre : {mass}. Comme vous avez indiqué un pourcentage de masse grasse, le chiffre principal utilise Katch-McArdle.",
    kgValue: "{value} kg",
    share: "Même en restant assis toute la journée, le métabolisme de base représente environ {percent} % des calories que vous brûlez.",
    formulasTitle: "Les trois formules",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "Harris-Benedict révisée",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "Validée sur une population moderne. La référence clinique actuelle, et le choix le plus fiable quand la masse grasse est inconnue.",
      harris:
        "L'originale de 1919, révisée en 1984. Elle surestime d'environ 5 %, car son groupe d'étude était plus mince et plus actif que la population d'aujourd'hui.",
      katch:
        "Part de la masse maigre et ignore le sexe et la taille, ce qui en fait l'option la plus précise pour les corps minces ou musclés.",
      katchLocked: "Nécessite un pourcentage de masse grasse. Saisissez-le ci-dessus pour voir cette estimation.",
    },
    used: "Utilisée",
    calValue: "{value} cal",
    byActivity: "Calories quotidiennes selon le niveau d'activité",
    resultCta: {
      headline: "Le métabolisme de base est le plancher. Les pas sont le levier.",
      description:
        "Vous pouvez à peine faire bouger votre dépense au repos, mais tout ce qui est au-dessus, oui. Steps suit votre activité automatiquement et montre ce qu'elle ajoute au chiffre que vous venez de calculer.",
    },
  },
  info: {
    title: "Comment nous calculons le métabolisme de base",
    intro:
      "Trois équations sont d'usage clinique courant, et leur écart compte. Plutôt que d'en choisir une et de masquer l'écart, ce calculateur les fait toutes tourner.",
    formulaTitle: "Les formules",
    formulas: [
      {
        title: "Mifflin-St Jeor (1990)",
        lines: [
          "Hommes : (10 × poids kg) + (6,25 × taille cm) − (5 × âge) + 5",
          "Femmes : (10 × poids kg) + (6,25 × taille cm) − (5 × âge) − 161",
        ],
      },
      {
        title: "Harris-Benedict révisée (1984)",
        lines: [
          "Hommes : 88,362 + (13,397 × poids) + (4,799 × taille) − (5,677 × âge)",
          "Femmes : 447,593 + (9,247 × poids) + (3,098 × taille) − (4,330 × âge)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: [
          "370 + (21,6 × masse maigre kg), où masse maigre = poids × (1 − % de masse grasse)",
        ],
      },
    ],
    exampleLabel: "Exemple :",
    example:
      "un homme de 30 ans, 75 kg, 175 cm obtient 1 699 avec Mifflin-St Jeor et 1 763 avec Harris-Benedict. À 20 % de masse grasse, Katch-McArdle donne 1 666.",
    primary:
      "Mifflin-St Jeor est le chiffre principal, sauf si vous indiquez un pourcentage de masse grasse : Katch-McArdle prend alors le relais. C'est la seule des trois qui mesure le tissu réellement responsable de la dépense au repos, au lieu de l'inférer à partir de la taille et du sexe.",
    activityFactors:
      "Multipliez le métabolisme de base par un facteur d'activité pour obtenir le TDEE : 1,2 sédentaire, 1,375 légèrement actif, 1,55 modérément actif, 1,725 actif, 1,9 très actif. Le calculateur affiche les cinq.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Qu'est-ce que le métabolisme de base ?",
      answer:
        "Le métabolisme de base (BMR) est l'énergie que votre corps dépense sans rien faire : respirer, faire circuler le sang, maintenir la température, réparer les cellules. Il se mesure allongé, éveillé, après un jeûne de 12 heures. Chez la plupart des adultes, il représente 60 à 75 % des calories quotidiennes, et donc la plus grande part de ce que vous brûlez.",
    },
    {
      question: "Quelle est la différence entre BMR et RMR ?",
      answer:
        "Le BMR se mesure en laboratoire strict : repos complet, à jeun, dans une pièce thermiquement neutre. Le métabolisme au repos (RMR) se mesure dans des conditions plus souples et sort environ 10 % plus haut, car il inclut un peu de digestion et de petits mouvements. Au quotidien les termes se confondent, et tous les calculateurs en ligne, celui-ci compris, estiment en réalité quelque chose de plus proche du RMR.",
    },
    {
      question: "Quelle formule de métabolisme de base est la plus précise ?",
      answer:
        "Mifflin-St Jeor pour la plupart des gens. Elle a été validée par calorimétrie indirecte sur une population moderne et tombe à environ 10 % près pour près de 80 % des adultes. Harris-Benedict, même révisée en 1984, surestime d'environ 5 %, car son groupe de 1919 était plus mince et plus actif. Katch-McArdle les dépasse toutes les deux si vous connaissez votre masse grasse, car elle part de la masse maigre, le tissu qui détermine vraiment la dépense au repos.",
    },
    {
      question: "Quelle est la différence entre BMR et TDEE ?",
      answer:
        "Le métabolisme de base est ce que vous brûlez au repos complet. Le TDEE (dépense énergétique journalière totale) est le BMR multiplié par un facteur d'activité : il ajoute les déplacements, l'exercice et le coût de la digestion. Le TDEE est toujours plus élevé : même une journée entièrement sédentaire vaut environ 1,2 fois le BMR. Fixez vos objectifs caloriques sur le TDEE, pas sur le BMR.",
    },
    {
      question: "Dois-je manger à hauteur de mon métabolisme de base pour maigrir ?",
      answer:
        "Non. Manger à hauteur du BMR, c'est manger comme si vous étiez resté immobile toute la journée, ce qui crée un déficit de plusieurs centaines à un millier de calories avant même d'avoir bougé. C'est assez agressif pour coûter du muscle et, pour beaucoup, cela passe sous le plancher de 1 200 (femmes) ou 1 500 (hommes) calories. Retirez plutôt 250 à 500 calories du TDEE.",
    },
    {
      question: "Pourquoi mon métabolisme de base est-il plus bas que prévu ?",
      answer:
        "La taille du corps domine : les personnes plus petites et plus légères obtiennent des chiffres plus bas, et chaque formule retranche l'âge. La composition compte aussi : le muscle brûle environ trois fois plus au repos que la graisse, au kilogramme, donc deux personnes du même poids peuvent différer de 200 calories ou plus. Après un long déficit, la thermogenèse adaptative peut abaisser le BMR réel de 10 à 15 % sous la valeur prédite.",
    },
    {
      question: "Puis-je augmenter mon métabolisme de base ?",
      answer:
        "Un peu, et lentement. Ajouter du muscle est le seul levier durable : chaque kilogramme de muscle ajoute environ 13 calories par jour au repos, donc une année sérieuse de musculation peut vous rapporter 50 à 100 calories. C'est réel, mais modeste. Bouger davantage change votre TDEE bien plus que tout ce que vous pouvez faire au BMR : c'est pourquoi le nombre de pas fait bouger l'aiguille plus vite que les astuces métaboliques.",
    },
  ],
  cta: {
    title: "Suivez ce que vous brûlez au-dessus du repos",
    description:
      "Téléchargez l'application Steps pour compter chaque pas automatiquement et voir votre dépense calorique quotidienne s'ajouter à votre métabolisme de base.",
  },
  sticky: "Suivez vos pas avec Steps",
  howTo: {
    name: "Comment calculer votre métabolisme de base",
    description:
      "Indiquez votre sexe, votre âge, votre poids et votre taille pour obtenir votre métabolisme de base selon trois formules cliniques, plus les besoins caloriques quotidiens à chaque niveau d'activité.",
    steps: [
      {
        name: "Saisissez vos mensurations",
        text: "Indiquez le sexe, l'âge, le poids et la taille. Le poids passe des kilogrammes aux livres, la taille des centimètres aux pieds/pouces.",
      },
      {
        name: "Ajoutez le pourcentage de masse grasse si vous le connaissez",
        text: "Facultatif. L'indiquer débloque la formule de Katch-McArdle, qui part de la masse maigre et reste la plus précise pour les corps minces ou musclés.",
      },
      {
        name: "Choisissez votre niveau d'activité",
        text: "De sédentaire à très actif. Cela ne change pas le métabolisme de base, mais détermine quel chiffre de calories de maintenance est mis en avant.",
      },
      {
        name: "Lisez votre BMR et vos calories de maintenance",
        text: "Le calculateur renvoie votre métabolisme de base, les trois estimations côte à côte, et les calories quotidiennes totales à chacun des cinq niveaux d'activité.",
      },
    ],
  },
};

export default fr;

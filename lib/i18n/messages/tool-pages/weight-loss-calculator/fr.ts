import type { WeightLossCalculatorMessages } from "./en";

const fr: WeightLossCalculatorMessages = {
  meta: {
    title: "Calculateur de perte de poids : calories, durée et date d'objectif",
    description:
      "Calculez les calories quotidiennes et le délai pour atteindre votre poids cible. Perdre 10 kg à 0,5 kg par semaine prend 20 semaines avec un déficit de 550 calories. Calculateur gratuit.",
    keywords: [
      "calculateur perte de poids",
      "calculateur de calories pour maigrir",
      "combien de calories pour perdre du poids",
      "calculateur de poids cible",
      "calculateur de délai de perte de poids",
      "calculateur de déficit calorique",
      "combien de temps pour perdre du poids",
      "planificateur de perte de poids",
    ],
    ogTitle: "Calculateur de perte de poids : calories, durée et date d'objectif",
    ogDescription:
      "Indiquez vos mensurations et votre poids cible pour obtenir des calories quotidiennes, un délai réaliste et des jalons semaine par semaine.",
    ogImageAlt: "Calculateur de perte de poids",
  },
  hero: {
    title: "Calculateur de perte de poids",
    subtitle:
      "Indiquez vos mensurations et votre poids cible pour obtenir des calories quotidiennes, un délai réaliste et les jalons semaine par semaine entre ici et là.",
  },
  calculator: {
    details: "Vos informations",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    years: "ans",
    height: "Taille",
    weights: "Poids actuel et poids cible",
    now: "actuel",
    goal: "cible",
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
    rate: "Rythme de perte",
    rates: {
      mild: { label: "Doux", description: "0,25 kg (0,5 lb) par semaine" },
      moderate: { label: "Modéré", description: "0,5 kg (1 lb) par semaine" },
      aggressive: { label: "Soutenu", description: "0,75 kg (1,5 lb) par semaine" },
      rapid: { label: "Rapide", description: "1 kg (2 lb) par semaine" },
    },
    calculate: "Calculer mon plan",
    plan: "Votre plan",
    gainGoal: "Votre poids cible est égal ou supérieur à votre poids actuel. Indiquez un objectif plus bas pour voir un plan de perte.",
    eatPerDay: "À manger par jour",
    calories: "calories",
    dailyDeficit: "Déficit quotidien",
    belowTdee: "sous le TDEE",
    toLose: "À perdre",
    timeToGoal: "Délai",
    weeks: "semaines",
    yourBmr: "Votre métabolisme de base",
    yourTdee: "Votre TDEE",
    calValue: "{value} cal",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    warnings: {
      floorMale:
        "Un rythme de {rate} kg/semaine vous placerait à {raw} calories par jour, sous le plancher de {floor} calories pour les hommes. La cible a été relevée à {floor}, donc la perte réelle sera plus lente que le rythme choisi.",
      floorFemale:
        "Un rythme de {rate} kg/semaine vous placerait à {raw} calories par jour, sous le plancher de {floor} calories pour les femmes. La cible a été relevée à {floor}, donc la perte réelle sera plus lente que le rythme choisi.",
      tooFast:
        "Perdre {rate} kg par semaine dépasse 1 % de votre poids. Au-delà, une plus grande part de la perte vient du muscle plutôt que de la graisse.",
      longPlan:
        "Au-delà d'environ trois mois, les projections deviennent optimistes. La dépense au repos baisse à mesure que vous maigrissez : recalculez toutes les 4 à 6 semaines avec votre nouveau poids.",
    },
    milestones: "Jalons prévus",
    week: "Semaine {week}",
    resultCta: {
      headline: "Le déficit est plus facile à tenir quand vous le voyez",
      description:
        "Steps suit votre activité automatiquement, donc la part mouvement de votre déficit est mesurée plutôt que devinée.",
    },
  },
  info: {
    title: "Comment fonctionne ce calculateur",
    intro: "Trois étapes : estimer ce que vous brûlez, retirer ce que vous voulez perdre, puis vérifier le résultat face aux planchers de sécurité.",
    methodTitle: "La méthode",
    steps: [
      {
        marker: "1. BMR",
        text: "{marker} selon Mifflin-St Jeor, l'équation la mieux validée sur les populations modernes.",
      },
      {
        marker: "2. TDEE",
        text: "{marker} = métabolisme de base × facteur d'activité (1,2 sédentaire jusqu'à 1,9 très actif).",
      },
      {
        marker: "3. Déficit",
        text: "{marker} = rythme hebdomadaire choisi × 7 700 ÷ 7. Un objectif de 0,5 kg par semaine demande 550 calories par jour.",
      },
      {
        marker: "4. Délai",
        text: "{marker} = poids à perdre ÷ rythme hebdomadaire, recalculé si le plancher de sécurité a relevé votre cible calorique.",
      },
    ],
    exampleLabel: "Exemple :",
    example: "de 80 kg à 70 kg à 0,5 kg par semaine, c'est un déficit quotidien de 550 calories sur environ 20 semaines.",
    wishnofsky:
      "Le chiffre de 7 700 calories par kilogramme est la règle de Wishnofsky. C'est une approximation linéaire qui tient raisonnablement les deux ou trois premiers mois, puis devient optimiste, car votre dépense au repos baisse quand vous maigrissez. Le calculateur le signale pour tout plan de plus de 13 semaines.",
    floors:
      "Les cibles caloriques ont un plancher de 1 200 pour les femmes et de 1 500 pour les hommes. Si le rythme choisi passerait en dessous, la cible est relevée et le délai allongé, plutôt que de vous montrer un chiffre auquel vous ne devriez pas manger.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Combien de calories dois-je manger pour perdre du poids ?",
      answer:
        "Prenez votre TDEE et retirez 250 à 500 calories. Cela produit environ 0,25 à 0,5 kg (0,5 à 1 lb) de perte par semaine, la fourchette que la plupart des recommandations cliniques jugent tenable. Le calculateur le fait pour vous et refuse de descendre sous 1 200 calories pour les femmes ou 1 500 pour les hommes, seuils sous lesquels couvrir les micronutriments devient difficile.",
    },
    {
      question: "Combien de temps me faudra-t-il pour perdre 10 kg ?",
      answer:
        "À un rythme modéré de 0,5 kg par semaine, environ 20 semaines, soit à peu près cinq mois. À un rythme soutenu de 1 kg par semaine, ce serait 10 semaines, mais tenir un déficit quotidien de 1 100 calories aussi longtemps est difficile et coûte plus de masse maigre. La plupart des gens ont intérêt à traiter le chiffre rapide comme un meilleur cas et à planifier sur le rythme modéré.",
    },
    {
      question: "1 kg par semaine est-il un rythme sûr ?",
      answer:
        "Seulement si vous portez un excès de poids important. La recommandation habituelle est de rester sous 1 % du poids corporel par semaine : à 100 kg cela autorise 1 kg, à 65 kg cela veut dire 0,65 kg. Au-dessus, une part croissante de ce que vous perdez est du muscle et de l'eau plutôt que de la graisse, et le déficit demandé est trop grand pour être tenu.",
    },
    {
      question: "Pourquoi ces projections deviennent-elles moins précises ?",
      answer:
        "Elles supposent 7 700 calories par kilogramme de graisse et un métabolisme fixe, et la seconde hypothèse ne tient pas. En maigrissant, votre métabolisme de base baisse parce qu'il y a moins de tissu à entretenir, et vous brûlez moins en faisant les mêmes activités. La courbe réelle s'aplatit alors qu'une projection linéaire garde sa pente. Recalculez toutes les quatre à six semaines avec votre poids actuel.",
    },
    {
      question: "Dois-je créer le déficit en mangeant moins ou en bougeant plus ?",
      answer:
        "Les deux, avec le gros du déficit côté assiette. Changer l'alimentation crée un plus grand déficit pour moins d'effort : sauter un encas de 400 calories ne prend pas de temps, alors que brûler 400 calories demande environ 90 minutes de marche rapide. Mais ajouter de l'activité préserve la masse maigre pendant le déficit et empêche le TDEE de chuter aussi vite, donc un déficit construit uniquement par la restriction alimentaire a tendance à caler plus tôt.",
    },
    {
      question: "Pourquoi ma perte de poids s'est-elle arrêtée ?",
      answer:
        "Le plus souvent, votre TDEE a baissé : vous êtes plus léger, donc le même déficit n'existe plus. Cela peut aussi être de l'eau qui masque une vraie perte de graisse, ce qui est normal après un entraînement dur ou une journée riche en sodium, et peut cacher deux semaines de progrès. Recalculez à votre poids actuel, et jugez sur une tendance de deux à trois semaines plutôt que jour après jour.",
    },
    {
      question: "De combien de pas par jour ai-je besoin pour perdre du poids ?",
      answer:
        "Il n'y a pas de chiffre fixe, car cela dépend de la taille de votre déficit et de votre poids. En ordre de grandeur, 10 000 pas brûlent environ 300 à 500 calories pour la plupart des adultes, soit à peu près la moitié d'un déficit quotidien typique. La marche est l'activité la plus facile à tenir à ce volume, ce qui explique qu'elle tienne mieux que des options plus intenses sur les mois qu'un vrai objectif demande.",
    },
  ],
  cta: {
    title: "Rendez la part mouvement automatique",
    description: "Téléchargez l'application Steps pour suivre vos pas et les calories brûlées sans rien noter.",
  },
  sticky: "Suivez vos pas avec Steps",
  howTo: {
    name: "Comment planifier votre perte de poids",
    description:
      "Indiquez vos mensurations et votre poids cible pour obtenir des calories quotidiennes, le nombre de semaines jusqu'à l'objectif et des jalons semaine par semaine.",
    steps: [
      {
        name: "Saisissez vos mensurations",
        text: "Indiquez le sexe, l'âge et la taille, puis le poids actuel et le poids cible. Les deux poids utilisent le même choix d'unité.",
      },
      {
        name: "Choisissez votre niveau d'activité",
        text: "De sédentaire à très actif. Cela détermine votre TDEE, à partir duquel la cible calorique est calculée.",
      },
      {
        name: "Choisissez un rythme de perte",
        text: "Doux correspond à 0,25 kg par semaine, modéré à 0,5 kg, soutenu à 0,75 kg, rapide à 1 kg. Les rythmes plus rapides demandent de plus grands déficits et sont plus difficiles à tenir.",
      },
      {
        name: "Lisez votre plan",
        text: "Vous obtenez une cible calorique quotidienne, le déficit qu'elle crée, les semaines jusqu'à l'objectif et les jalons prévus. Des avertissements apparaissent si le rythme vous ferait passer sous les planchers caloriques sûrs.",
      },
    ],
  },
};

export default fr;

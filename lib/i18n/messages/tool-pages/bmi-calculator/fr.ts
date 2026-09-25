import type { BmiCalculatorMessages } from "./en";

const fr: BmiCalculatorMessages = {
  meta: {
    title: "Calculateur d'IMC – Calculez votre indice de masse corporelle",
    description:
      "Calculez votre indice de masse corporelle (IMC) et découvrez si votre poids se situe dans une fourchette saine. Des conseils santé et des recommandations de pas personnalisés.",
    keywords: [
      "calculateur IMC",
      "indice de masse corporelle",
      "calculer IMC",
      "calculateur poids santé",
      "tableau IMC",
      "poids selon la taille",
      "catégories IMC",
      "IMC normal",
    ],
    ogTitle: "Calculateur d'IMC",
    ogDescription:
      "Calculez votre indice de masse corporelle (IMC) et découvrez si votre poids se situe dans une fourchette saine.",
  },
  hero: {
    title: "Calculateur d'IMC",
    subtitle:
      "Calculez votre indice de masse corporelle pour connaître votre catégorie de poids et obtenir des recommandations santé personnalisées.",
  },
  calculator: {
    measurements: "Vos mensurations",
    weight: "Poids",
    height: "Taille",
    yourBmi: "Votre IMC",
    healthyRange: "Fourchette de poids santé",
    recommendedSteps: "Pas quotidiens recommandés",
    aboveRange: "Vous êtes {amount} au-dessus de la fourchette de poids santé pour votre taille.",
    belowRange: "Vous êtes {amount} en dessous de la fourchette de poids santé pour votre taille.",
    categoriesTitle: "Catégories d'IMC",
    categoriesSubtitle: "Classification de l'IMC chez l'adulte selon l'Organisation mondiale de la santé",
    categoryColumn: "Catégorie",
    rangeColumn: "Plage d'IMC",
    categories: {
      underweight: "Insuffisance pondérale",
      normal: "Normal",
      overweight: "Surpoids",
      "obese-1": "Obésité de classe I",
      "obese-2": "Obésité de classe II",
      "obese-3": "Obésité de classe III",
    },
  },
  info: {
    title: "Comprendre l'IMC",
    intro:
      "L'indice de masse corporelle (IMC) est un calcul simple à partir de votre taille et de votre poids, qui permet d'estimer la masse grasse et d'évaluer si votre poids est sain. C'est un outil de dépistage largement utilisé pour classer les catégories de poids.",
    formulaTitle: "La formule",
    formula: "IMC = poids (kg) ÷ taille (m)²",
    exampleLabel: "Exemple :",
    example: "Une personne de 70 kg mesurant 1,75 m a un IMC = 70 ÷ (1,75 × 1,75) = 22,9",
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Qu'est-ce qu'un IMC sain ?",
      answer:
        "Un IMC compris entre 18,5 et 24,9 est considéré comme sain pour la plupart des adultes. L'IMC ne tient toutefois pas compte de la masse musculaire, de la densité osseuse ni de la répartition des graisses : ce n'est qu'un indicateur parmi d'autres de votre santé globale.",
    },
    {
      question: "L'IMC est-il fiable pour tout le monde ?",
      answer:
        "L'IMC peut être imprécis chez les sportifs très musclés, les personnes âgées ou certaines morphologies. C'est un outil de dépistage utile, à considérer avec d'autres indicateurs de santé.",
    },
    {
      question: "Comment améliorer mon IMC ?",
      answer:
        "Si votre IMC sort de la fourchette saine, misez sur des changements durables : activité physique régulière (comme la marche quotidienne), alimentation équilibrée et sommeil suffisant. Consultez un professionnel de santé pour des conseils personnalisés.",
    },
    {
      question: "Combien de pas faire selon mon IMC ?",
      answer:
        "Pour maintenir un IMC sain, visez 10 000 pas par jour. Si vous souhaitez perdre du poids, envisagez 12 000 pas ou plus. Partez de votre niveau actuel et ajoutez progressivement 1 000 pas par semaine.",
    },
    {
      question: "L'IMC est-il différent chez les enfants ?",
      answer:
        "Oui, l'IMC des enfants et des adolescents se calcule différemment et se compare à des percentiles selon l'âge et le sexe. Ce calculateur est conçu pour les adultes de 18 ans et plus. Pour un enfant, consultez un pédiatre.",
    },
  ],
  cta: {
    title: "Suivez votre parcours santé",
    description:
      "Téléchargez l'application Steps pour suivre votre activité quotidienne et avancer vers un poids plus sain.",
  },
  howTo: {
    name: "Comment calculer votre IMC",
    description:
      "L'indice de masse corporelle (IMC) estime votre catégorie de composition corporelle à partir de la taille et du poids, selon les catégories adultes du CDC.",
    steps: [
      {
        name: "Saisissez votre taille",
        text: "Indiquez votre taille en centimètres ou en pieds/pouces.",
      },
      {
        name: "Saisissez votre poids",
        text: "Indiquez votre poids en kilogrammes ou en livres.",
      },
      {
        name: "Lisez votre IMC et votre catégorie",
        text: "Le calculateur affiche votre IMC et la catégorie de santé du CDC (insuffisance pondérale, poids normal, surpoids, obésité), avec une courte description de chacune.",
      },
    ],
  },
};

export default fr;

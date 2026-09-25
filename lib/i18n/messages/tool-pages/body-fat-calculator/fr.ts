import type { BodyFatCalculatorMessages } from "./en";

const fr: BodyFatCalculatorMessages = {
  meta: {
    title: "Calculateur de masse grasse – méthode Navy (sans appareil)",
    description:
      "Calculez votre pourcentage de masse grasse avec la méthode précise de l'US Navy. Saisissez vos mensurations — pas besoin de balance ou d'appareil de salle.",
    keywords: [
      "calculateur masse grasse",
      "pourcentage de graisse corporelle",
      "méthode navy masse grasse",
      "comment calculer la masse grasse",
      "masse grasse homme",
      "masse grasse femme",
    ],
    ogTitle: "Calculateur de masse grasse – méthode Navy",
    ogDescription:
      "Calculez votre pourcentage de masse grasse avec la méthode précise de l'US Navy. Saisissez vos mensurations — pas besoin de balance ou d'appareil de salle.",
    ogImageAlt: "Calculateur de pourcentage de masse grasse",
  },
  hero: {
    title: "Calculateur de pourcentage de masse grasse",
    subtitle:
      "Calculez votre masse grasse avec précision grâce à la méthode de l'US Navy — un mètre ruban suffit.",
  },
  intro:
    "Indiquez votre sexe, votre taille et vos tours de corps pour calculer le pourcentage de masse grasse avec la formule éprouvée de l'US Navy — sans impédancemètre ni matériel de salle.",
  calculator: {
    measurements: "Vos mensurations",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    height: "Taille",
    weight: "Poids",
    circumferenceUnit: "Unité des tours",
    waist: "Tour de taille",
    neck: "Tour de cou",
    hip: "Tour de hanches",
    measurementHint: "Prenez chaque mesure à l'endroit le plus étroit.",
    invalidTitle: "Vérifiez vos mensurations",
    invalidDetail: "Le tour de taille doit être supérieur au tour de cou.",
    yourBodyFat: "Votre masse grasse",
    percent: "{value} %",
    fatMass: "Masse grasse",
    leanMass: "Masse maigre",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "Pas quotidiens recommandés",
    categoriesTitle: "Catégories de masse grasse",
    categoriesSubtitleMale: "Classification de l'American Council on Exercise (ACE) pour les hommes",
    categoriesSubtitleFemale: "Classification de l'American Council on Exercise (ACE) pour les femmes",
    categoryColumn: "Catégorie",
    rangeColumn: "Plage de masse grasse",
    categories: {
      essential: "Graisse essentielle",
      athletic: "Athlétique",
      fitness: "Forme",
      acceptable: "Acceptable",
      obese: "Obésité",
    },
  },
  info: {
    title: "Comprendre le pourcentage de masse grasse",
    intro:
      "Le pourcentage de masse grasse décrit mieux votre forme que l'IMC seul. L'IMC ne tient compte que du poids et de la taille, alors que la masse grasse distingue la graisse de la masse maigre (muscle, os, eau).",
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Quel est un pourcentage de masse grasse sain ?",
      answer:
        "Chez les hommes, une fourchette fitness de 14–17 % et une fourchette acceptable de 18–24 % sont considérées comme saines. Chez les femmes, la forme se situe entre 21–24 % et l'acceptable entre 25–31 %. Les athlètes sont en général plus bas — 6–13 % chez les hommes et 14–20 % chez les femmes.",
    },
    {
      question: "La méthode Navy est-elle fiable ?",
      answer:
        "La méthode de l'US Navy se situe en général à 3–4 % d'un examen DEXA, ce qui en fait l'une des méthodes au mètre ruban les plus fiables sans appareil. La précision s'améliore si vous mesurez avec soin et toujours de la même façon.",
    },
    {
      question: "Où mesurer le tour de taille ?",
      answer:
        "Mesurez la taille à l'endroit le plus étroit, en général au niveau du nombril ou juste au-dessus. Gardez le mètre parallèle au sol et mesurez après une expiration normale — ne rentrez pas le ventre.",
    },
    {
      question: "Quelle est la différence entre masse grasse et IMC ?",
      answer:
        "L'IMC n'utilise que la taille et le poids, donc il ne distingue pas la graisse du muscle. Un athlète musclé peut avoir un IMC élevé et peu de masse grasse. Le pourcentage de masse grasse reflète mieux la composition réelle du corps et le risque pour la santé.",
    },
    {
      question: "Comment réduire la masse grasse ?",
      answer:
        "Associez marche ou cardio régulier, renforcement musculaire et un léger déficit calorique. Visez 0,5–1 kg de graisse en moins par semaine. Un objectif de 10 000 pas ou plus par jour augmente la dépense sans entraînement intense, et ça tient dans la durée.",
    },
  ],
  cta: {
    title: "Suivez votre parcours santé",
    description: "Reliez vos objectifs de composition corporelle au suivi quotidien des pas dans Steps.",
  },
  howTo: {
    name: "Comment calculer votre pourcentage de masse grasse (méthode Navy)",
    description:
      "Saisissez les tours de cou, de taille et de hanches, la taille et le sexe pour estimer le pourcentage de masse grasse avec la formule de l'US Navy.",
    steps: [
      {
        name: "Mesurez votre cou",
        text: "Mesurez le tour de cou juste sous la pomme d'Adam, avec un mètre souple.",
      },
      {
        name: "Mesurez votre taille",
        text: "Chez les hommes, mesurez au niveau du nombril. Chez les femmes, mesurez à l'endroit le plus étroit de la taille.",
      },
      {
        name: "Mesurez les hanches (femmes uniquement)",
        text: "Pour les femmes, ajoutez une mesure au point le plus large des hanches.",
      },
      {
        name: "Saisissez les mensurations et la taille",
        text: "Entrez toutes les mesures plus votre taille. Le calculateur accepte les unités métriques et impériales.",
      },
      {
        name: "Lisez votre pourcentage et votre catégorie",
        text: "Le résultat donne le pourcentage de masse grasse estimé et la catégorie ACE (graisse essentielle, athlètes, forme, moyenne, obésité).",
      },
    ],
  },
};

export default fr;

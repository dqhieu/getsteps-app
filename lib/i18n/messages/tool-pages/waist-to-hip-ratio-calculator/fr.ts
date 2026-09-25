import type { WaistToHipRatioCalculatorMessages } from "./en";

const fr: WaistToHipRatioCalculatorMessages = {
  meta: {
    title: "Calculateur du rapport taille-hanches : seuils de risque OMS",
    description:
      "Calculez votre rapport taille-hanches selon les seuils de l'OMS. Le risque augmente au-dessus de 0,90 chez les hommes et de 0,85 chez les femmes. Calculateur gratuit avec contrôle du tour de taille.",
    keywords: [
      "calculateur rapport taille hanches",
      "calculateur RTH",
      "rapport taille hanches",
      "calculateur de morphologie",
      "calculateur de graisse viscérale",
      "risque tour de taille",
      "morphologie pomme ou poire",
      "rapport taille hanches OMS",
    ],
    ogTitle: "Calculateur du rapport taille-hanches : seuils de risque OMS",
    ogDescription:
      "Calculez votre rapport taille-hanches et voyez où il se place par rapport aux seuils de risque cardiovasculaire de l'OMS.",
  },
  hero: {
    title: "Calculateur du rapport taille-hanches",
    subtitle:
      "Deux mesures au mètre prédisent mieux le risque cardiovasculaire que l'IMC, parce qu'elles montrent où le corps stocke la graisse, pas seulement combien il y en a.",
  },
  calculator: {
    measurements: "Vos mensurations",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    genderHint: "L'OMS utilise des seuils de risque différents pour les hommes et les femmes.",
    waistHip: "Taille et hanches",
    waist: "taille",
    hip: "hanches",
    howToMeasure: "Comment mesurer",
    waistLabel: "Taille :",
    waistMeasure:
      "le point le plus étroit entre votre dernière côte et le haut de l'os de la hanche, à la fin d'une expiration normale.",
    hipLabel: "Hanches :",
    hipMeasure: "le point le plus large autour des fesses.",
    tapeMeasure:
      "Gardez le mètre horizontal et ajusté sans comprimer la peau. Mesurez sur la peau nue ou un vêtement fin.",
    calculate: "Calculer mon rapport",
    results: "Vos résultats",
    ratioLabel: "Rapport taille-hanches",
    waistCheck: "Contrôle du tour de taille",
    targetWaist:
      "Avec votre tour de hanches actuel, une taille de {waist} ou moins vous placerait dans la bande de risque faible.",
    bandsTitle: "Bandes de risque OMS pour {group}",
    men: "les hommes",
    women: "les femmes",
    groupMen: "les hommes",
    groupWomen: "les femmes",
    rangeAndAbove: "{min} et plus",
    rangeBelow: "en dessous de {max}",
    rangeBetween: "{min} – {max}",
    disclaimer:
      "Le rapport taille-hanches est un outil de dépistage, pas un diagnostic. Il suit l'emplacement de la graisse plutôt que sa quantité, ce qui explique qu'il prédise mieux le risque cardiovasculaire que l'IMC seul. Parlez de tout résultat en bande modérée ou élevée avec un médecin.",
    levels: {
      low: {
        label: "Risque faible",
        description:
          "La graisse n'est pas concentrée autour de l'abdomen. C'est le profil de risque le plus bas pour {group}.",
      },
      moderate: {
        label: "Risque modéré",
        description:
          "Un peu de graisse centrale. Associé à une hausse mesurable du risque cardiovasculaire et de diabète de type 2.",
      },
      high: {
        label: "Risque élevé",
        description:
          "Risque nettement plus élevé de maladie cardiovasculaire et de diabète de type 2. À discuter avec un médecin.",
      },
    },
    waistVerdict: {
      high: "Un tour de taille de {waist} cm est au niveau ou au-dessus du seuil de {threshold} cm où l'OMS signale un risque nettement accru pour {group}.",
      moderate:
        "Un tour de taille de {waist} cm est au-dessus du seuil de {threshold} cm où l'OMS signale un risque accru pour {group}.",
      low: "Un tour de taille de {waist} cm est en dessous du seuil de {threshold} cm que l'OMS utilise pour {group}.",
    },
  },
  resultCta: {
    headline: "La marche cible la graisse que ceci mesure",
    description:
      "L'activité aérobie régulière réduit spécifiquement la graisse viscérale, même à poids stable. Steps suit la vôtre automatiquement pour que l'habitude tienne.",
  },
  sticky: "Suivez vos pas avec Steps",
  info: {
    title: "Comment nous calculons votre bande de risque",
    intro:
      "Le calcul est trivial. La valeur est dans les seuils, issus de la consultation d'experts de l'OMS de 2008 sur le tour de taille et le rapport taille-hanches.",
    formulaTitle: "La formule et les seuils",
    formulas: [
      { name: "RTH", body: "tour de taille ÷ tour de hanches" },
      { name: "Hommes :", body: "faible en dessous de 0,90, modéré de 0,90 à 0,99, élevé à 1,0 et plus" },
      { name: "Femmes :", body: "faible en dessous de 0,80, modéré de 0,80 à 0,84, élevé à 0,85 et plus" },
      { name: "Taille seule (hommes) :", body: "risque accru à 94 cm, nettement accru à 102 cm" },
      { name: "Taille seule (femmes) :", body: "risque accru à 80 cm, nettement accru à 88 cm" },
      {
        name: "Exemple :",
        body: "un homme avec 90 cm de taille et 100 cm de hanches obtient 0,90, le bas de la bande modérée.",
      },
    ],
    conflict:
      "Le contrôle du tour de taille est indépendant du rapport, parce que les deux peuvent diverger. Des hanches larges peuvent tirer un rapport dans la bande de risque faible alors que la taille seule serait encore signalée. En cas de conflit, suivez la lecture la plus prudente.",
    screening:
      "C'est une mesure de dépistage, pas un diagnostic. Un résultat en bande modérée ou élevée mérite d'être évoqué avec un médecin, surtout avec la tension, la glycémie à jeun ou un bilan lipidique.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Quel est un rapport taille-hanches sain ?",
      answer:
        "L'OMS place le risque faible en dessous de 0,90 chez les hommes et de 0,80 chez les femmes. Entre 0,90 et 0,99 chez les hommes, ou 0,80 et 0,84 chez les femmes, le risque est modéré. À partir de 1,0 chez les hommes et de 0,85 chez les femmes, le risque est nettement élevé. Les seuils des femmes sont plus bas parce qu'elles portent naturellement plus de graisse aux hanches et aux cuisses : le même rapport signifie plus de graisse abdominale chez une femme que chez un homme.",
    },
    {
      question: "Pourquoi le rapport taille-hanches compte-t-il plus que l'IMC ?",
      answer:
        "Parce qu'il voit où est la graisse, et l'IMC ne le peut pas. La graisse viscérale autour des organes abdominaux est active sur le plan métabolique : elle libère des signaux inflammatoires et des acides gras libres directement dans la circulation porte. La graisse des hanches et des cuisses ne se comporte pas ainsi. Deux personnes avec le même IMC peuvent avoir des risques très différents selon la répartition, et le RTH le détecte.",
    },
    {
      question: "Comment mesurer correctement la taille et les hanches ?",
      answer:
        "La taille au point le plus étroit entre la dernière côte et le haut de l'os de la hanche, à la fin d'une expiration normale, sans rentrer le ventre. Les hanches au point le plus large autour des fesses. Gardez le mètre horizontal et ajusté sans comprimer la peau, sur la peau nue ou un vêtement fin. Mesurer à une hauteur différente est la source d'erreur la plus courante : utilisez les mêmes repères à chaque fois.",
    },
    {
      question: "Quelle est la différence entre une morphologie pomme et poire ?",
      answer:
        "La morphologie pomme porte la graisse autour du milieu, avec un rapport plus élevé et un risque métabolique plus grand. La morphologie poire la porte sur les hanches et les cuisses, avec un rapport plus bas et un profil de risque plus favorable. La répartition est largement génétique et fortement influencée par les hormones sexuelles, ce qui explique que beaucoup de femmes basculent vers un profil pomme après la ménopause sans prendre de poids.",
    },
    {
      question: "Puis-je réduire mon rapport taille-hanches ?",
      answer:
        "Oui, mais pas en le ciblant directement. La réduction localisée ne fonctionne pas : aucun exercice abdominal ne brûle préférentiellement la graisse du ventre. Ce qui fonctionne, c'est un déficit calorique global, et la graisse viscérale est parmi les premières réserves mobilisées : la perte de poids précoce améliore souvent le rapport plus vite que le poids total. L'activité aérobie régulière réduit spécifiquement la graisse viscérale, même à poids stable.",
    },
    {
      question: "La marche réduit-elle la graisse du ventre ?",
      answer:
        "Elle réduit la graisse viscérale, qui est la part qui compte ici. Une activité aérobie modérée régulière fait baisser la graisse viscérale de façon mesurable même quand le poids change peu, et la marche est la forme la plus facile à tenir au volume nécessaire. Les essais utilisent en général 150 à 300 minutes par semaine d'activité modérée, soit 30 à 60 minutes la plupart des jours.",
    },
    {
      question: "Faut-il utiliser le tour de taille ou le rapport ?",
      answer:
        "Les deux, et c'est pour cela que ce calculateur les donne tous les deux. Le rapport seul peut tromper : une personne avec une taille large et des hanches inhabituellement larges peut tomber dans la bande de risque faible alors que l'OMS signalerait le tour de taille à part. Ces seuils sont 94 et 102 cm chez les hommes, 80 et 88 cm chez les femmes. Quand les deux mesures divergent, retenez la lecture la plus prudente.",
    },
  ],
  cta: {
    title: "Marchez pour la graisse qui compte",
    description:
      "Téléchargez l'application Steps pour suivre votre marche quotidienne et construire l'habitude aérobie qui réduit la graisse viscérale.",
  },
  howTo: {
    name: "Comment calculer votre rapport taille-hanches",
    description:
      "Mesurez votre taille et vos hanches, saisissez les deux, et voyez où se place votre rapport par rapport aux seuils de risque cardiovasculaire de l'OMS.",
    steps: [
      {
        name: "Choisissez votre sexe",
        text: "L'OMS fixe des seuils plus bas pour les femmes, qui portent naturellement plus de graisse aux hanches et aux cuisses.",
      },
      {
        name: "Mesurez votre taille",
        text: "Trouvez le point le plus étroit entre votre dernière côte et le haut de l'os de la hanche. Mesurez à la fin d'une expiration normale, sans rentrer le ventre.",
      },
      {
        name: "Mesurez vos hanches",
        text: "Mesurez le point le plus large autour des fesses, le mètre horizontal et ajusté sans comprimer la peau.",
      },
      {
        name: "Lisez votre bande de risque",
        text: "Le calculateur renvoie votre rapport, la bande de risque OMS, un contrôle séparé du tour de taille, et la taille qui vous placerait dans la bande de risque faible.",
      },
    ],
  },
};

export default fr;

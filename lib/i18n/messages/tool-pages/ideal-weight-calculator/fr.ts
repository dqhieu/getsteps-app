import type { IdealWeightCalculatorMessages } from "./en";

const fr: IdealWeightCalculatorMessages = {
  meta: {
    title: "Calculateur de poids idéal : 4 formules et fourchette d'IMC saine",
    description:
      "Devine, Robinson, Miller et Hamwi côte à côte, plus la fourchette d'IMC saine. Un homme de 175 cm se situe entre 68,7 et 72 kg. Calculateur de poids idéal gratuit.",
    keywords: [
      "calculateur de poids idéal",
      "calculateur de poids corporel idéal",
      "calculateur de poids santé",
      "combien devrais-je peser",
      "formule de Devine",
      "formule de Robinson",
      "formule de Hamwi",
      "poids idéal selon la taille",
      "fourchette de poids santé",
    ],
    ogTitle: "Calculateur de poids idéal : 4 formules et fourchette d'IMC saine",
    ogDescription:
      "Quatre formules cliniques de poids idéal côte à côte, plus la fourchette d'IMC saine pour votre taille.",
  },
  hero: {
    title: "Calculateur de poids idéal",
    subtitle:
      "Quatre formules cliniques côte à côte, avec la fourchette d'IMC saine. Voir à quel point elles divergent est ce que ce calculateur fait de plus utile.",
  },
  calculator: {
    details: "Vos données",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    height: "Taille",
    currentWeight: "Poids actuel",
    optional: "(facultatif)",
    placeholderKg: "p. ex. 78",
    placeholderLbs: "p. ex. 172",
    calculate: "Calculer le poids idéal",
    results: "Vos résultats",
    formulaAverage: "Moyenne des formules",
    range: "fourchette {min}–{max}",
    healthyBmiRange: "Fourchette d'IMC saine",
    to: "à {weight}",
    verdictWithin:
      "Votre poids se situe dans la fourchette d'IMC saine pour votre taille. La moyenne des formules est un point dans cette bande, pas une cible à atteindre.",
    verdictAbove: "Votre poids est de {amount} au-dessus de la fourchette d'IMC saine pour votre taille.",
    verdictBelow: "Votre poids est de {amount} en dessous de la fourchette d'IMC saine pour votre taille.",
    fourFormulas: "Les quatre formules",
    disclaimer:
      "Les quatre formules ne voient que votre taille et votre sexe. Elles ne tiennent pas compte de la masse musculaire ni de l'ossature : un corps musclé sortira haut sur chacune. La fourchette d'IMC saine est la réponse la plus utile : c'est une bande, pas une cible unique.",
    formulas: {
      devine: {
        name: "Devine",
        note: "La formule la plus citée, encore la référence pour les posologies. Écrite pour calculer des doses de médicaments, pas des objectifs corporels.",
      },
      robinson: {
        name: "Robinson",
        note: "Une révision de Devine sur un échantillon plus large. Elle donne un poids plus bas que Devine chez les personnes grandes.",
      },
      miller: {
        name: "Miller",
        note: "La plus plate des quatre : la taille change le moins le résultat, donc elle est la plus haute pour les personnes petites et la plus basse pour les personnes grandes.",
      },
      hamwi: {
        name: "Hamwi",
        note: "La plus ancienne, conçue pour le suivi du diabète. La plus forte hausse par pouce, donc la plus haute chez les personnes grandes.",
      },
    },
  },
  resultCta: {
    headline: "Les habitudes font bouger le chiffre. Rien d'autre.",
    description:
      "Steps enregistre votre activité quotidienne automatiquement, pour construire la régularité qui change vraiment le poids sur plusieurs mois.",
  },
  sticky: "Suivez vos pas avec Steps",
  info: {
    title: "Comment nous calculons le poids idéal",
    intro:
      "Les quatre formules ont la même forme : un poids de base à 5 ft, plus une quantité fixe pour chaque pouce au-dessus. Seules les constantes changent.",
    formulasTitle: "Les formules",
    formulas: [
      {
        name: "Devine (1974)",
        body: "Hommes : 50 kg + 2,3 kg par pouce au-dessus de 5 ft. Femmes : 45,5 kg + 2,3 kg par pouce.",
      },
      {
        name: "Robinson (1983)",
        body: "Hommes : 52 kg + 1,9 kg par pouce. Femmes : 49 kg + 1,7 kg par pouce.",
      },
      {
        name: "Miller (1983)",
        body: "Hommes : 56,2 kg + 1,41 kg par pouce. Femmes : 53,1 kg + 1,36 kg par pouce.",
      },
      {
        name: "Hamwi (1964)",
        body: "Hommes : 48 kg + 2,7 kg par pouce. Femmes : 45,5 kg + 2,2 kg par pouce.",
      },
      {
        name: "Fourchette d'IMC saine",
        body: "Poids pour un IMC de 18,5 à 24,9 à votre taille.",
      },
      {
        name: "Exemple :",
        body: "un homme de 175 cm obtient 70,5 (Devine), 68,9 (Robinson), 68,7 (Miller) et 72,0 (Hamwi), soit une moyenne de 70,0 kg. La bande d'IMC saine va de 56,7 à 76,3 kg.",
      },
    ],
    notice:
      "La moyenne des quatre formules se place près du milieu d'une bande d'IMC de près de 20 kg. Cet écart est le résumé honnête : ces équations donnent un point plausible dans une fourchette saine bien plus large, pas une cible que vous auriez manquée si vous n'êtes pas dessus.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Qu'est-ce que le poids corporel idéal ?",
      answer:
        "C'est une estimation clinique d'un poids sain à partir de la taille et du sexe, et il vaut mieux savoir d'où elle vient : les quatre formules courantes ont été conçues pour les posologies, pas pour des objectifs corporels. Devine a écrit la sienne en 1974 pour calculer des doses de gentamicine. Elles ont été reprises ensuite comme cibles de santé, ce qui explique leurs bizarreries dans cet usage.",
    },
    {
      question: "Quelle formule de poids idéal utiliser ?",
      answer:
        "Aucune seule. Elles divergent de 3 à 4 kg à une taille moyenne, et davantage aux extrêmes, ce qui montre la précision réellement disponible. La moyenne des quatre est un milieu raisonnable, mais la fourchette d'IMC saine est plus utile : elle donne une bande d'environ 20 kg plutôt qu'un chiffre à atteindre.",
    },
    {
      question: "Pourquoi les quatre formules donnent-elles des réponses différentes ?",
      answer:
        "Elles ont été construites sur des populations différentes et ne s'accordent pas sur le poids à ajouter par pouce de taille. Hamwi ajoute 2,7 kg par pouce chez les hommes, Miller seulement 1,41. À 175 cm l'écart est faible, mais à 195 cm Hamwi donne environ 87 kg et Miller environ 78. Plus vous êtes grand ou petit, plus elles s'éloignent.",
    },
    {
      question: "Le poids idéal est-il fiable pour les personnes musclées ?",
      answer:
        "Non, et c'est l'échec le plus net de ces formules. Elles ne voient que la taille et le sexe, donc elles ne distinguent pas 80 kg de muscle de 80 kg de graisse. Un sportif entraîné sortira en surpoids sur les quatre, et aussi à l'IMC. Si vous portez une masse musculaire réelle, le pourcentage de graisse et le rapport taille-hanches vous en diront bien plus qu'une cible de poids.",
    },
    {
      question: "Quelle est une fourchette d'IMC saine ?",
      answer:
        "De 18,5 à 24,9. Converti en poids à 175 cm, cela fait 56,7 à 76,3 kg, une bande de près de 20 kg. Cette largeur est le point important : un poids sain est une fourchette, pas un chiffre, et votre place dedans dépend de votre morphologie, de votre muscle et de ce que vous pouvez tenir.",
    },
    {
      question: "Faut-il chercher à atteindre son poids idéal ?",
      answer:
        "Seulement si cela coïncide avec quelque chose de tenable pour vous. Les résultats de santé suivent les comportements plus sûrement qu'un chiffre sur la balance : les personnes actives à un poids plus élevé s'en sortent en général mieux que les personnes sédentaires à un poids plus bas. Si votre poids est déjà dans la fourchette d'IMC saine, viser le milieu d'une formule n'apporte pas grand-chose.",
    },
  ],
  cta: {
    title: "Construisez l'habitude qui fait bouger le chiffre",
    description:
      "Téléchargez l'application Steps pour suivre vos pas quotidiens et rester régulier sur les mois qui changent vraiment le poids.",
  },
  howTo: {
    name: "Comment calculer votre poids idéal",
    description:
      "Indiquez votre sexe et votre taille pour voir le poids corporel idéal selon les formules de Devine, Robinson, Miller et Hamwi, plus la fourchette d'IMC saine.",
    steps: [
      {
        name: "Choisissez votre sexe",
        text: "Chacune des quatre formules utilise un poids de base et un incrément par pouce différents pour les hommes et les femmes.",
      },
      {
        name: "Indiquez votre taille",
        text: "Basculez entre centimètres et pieds/pouces. La taille est la seule variable que les quatre formules utilisent vraiment.",
      },
      {
        name: "Ajoutez votre poids actuel si vous voulez une comparaison",
        text: "Facultatif. Il montre à quelle distance vous êtes de la moyenne des formules et si vous êtes dans la fourchette d'IMC saine.",
      },
      {
        name: "Lisez la fourchette, pas le chiffre",
        text: "Le calculateur renvoie les quatre estimations, leur moyenne et la bande de poids d'IMC saine pour votre taille, qui est la réponse la plus large et la plus utile.",
      },
    ],
  },
};

export default fr;

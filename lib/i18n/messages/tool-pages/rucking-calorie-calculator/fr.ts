import type { RuckingCalorieCalculatorMessages } from "./en";

const fr: RuckingCalorieCalculatorMessages = {
  meta: {
    title: "Calculateur de calories en rucking : poids du sac, terrain et pente",
    description:
      "Calculez les calories de rucking selon le poids du sac, l'allure, la pente et le terrain avec l'équation de Pandolf. Une personne de 70 kg portant 15 kg pendant une heure brûle ~350 calories. Calculateur gratuit.",
    keywords: [
      "calculateur calories rucking",
      "calories marche avec sac",
      "calories brûlées rucking",
      "calculateur calories gilet lesté",
      "calories randonnée avec sac",
      "équation de Pandolf",
      "coût énergétique port de charge",
      "calories randonnée sac à dos",
    ],
    ogTitle: "Calculateur de calories en rucking : poids du sac, terrain et pente",
    ogDescription:
      "Calculez les calories brûlées en rucking selon le poids du sac, l'allure, la pente et le terrain. Calculateur gratuit avec l'équation de Pandolf pour le port de charge.",
    ogImageAlt: "Calculateur de calories en rucking",
  },
  hero: {
    title: "Calculateur de calories en rucking",
    subtitle:
      "Calculez les calories brûlées en rucking (marche lestée) selon le poids de votre sac, votre allure, la pente et le terrain. L'équation de Pandolf pour le port de charge fait vraiment compter le poids sur votre dos.",
  },
  calculator: {
    yourRuck: "Votre rucking",
    switchImperial: "Passer en lbs / mph",
    switchMetric: "Passer en kg / km/h",
    bodyWeight: "Poids du corps",
    packWeight: "Poids du sac",
    pace: "Allure",
    duration: "Durée",
    minutes: "minutes",
    grade: "Pente : {percent} %",
    terrain: "Terrain",
    terrains: {
      blacktop: {
        label: "Route goudronnée",
        inline: "route goudronnée",
        description: "Bitume ou tapis. La surface de référence.",
      },
      gravel: {
        label: "Route gravillonnée",
        inline: "route gravillonnée",
        description: "Chemin de terre ou de gravier, broussailles légères.",
      },
      trail: {
        label: "Sentier",
        inline: "sentier",
        description: "Singletrack tassé, avec racines et rochers.",
      },
      "heavy-brush": {
        label: "Broussailles denses",
        inline: "broussailles denses",
        description: "Sous-bois épais, sans chemin établi.",
      },
      swampy: {
        label: "Tourbière",
        inline: "tourbière",
        description: "Sol mou et saturé qui cède sous le pied.",
      },
      sand: {
        label: "Sable meuble",
        inline: "sable meuble",
        description: "Sable de plage sec. La surface courante la plus coûteuse.",
      },
    },
    terrainFactor: "{description} Facteur de terrain {factor}.",
    caloriesBurned: "Calories brûlées",
    packAdds:
      "Le sac de {load} ajoute {extra} kcal par rapport à la même marche à vide ({unloaded} kcal).",
    heavyLoad:
      "Ce sac représente {percent} % de votre poids. Au-dessus d'environ un tiers du poids du corps, le risque de blessure monte nettement, et le modèle de Pandolf y est le moins fiable. Augmentez progressivement plutôt que de passer d'un coup à cette charge.",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "Distance",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "Sac / poids du corps",
    equation: "Équation de Pandolf pour le port de charge à {watts} watts, {terrain}, pente de {grade} %.",
    tableTitle: "Calories selon le poids du sac",
    tableSubtitle: "Même allure, pente, terrain et durée. Seule la charge change.",
    colPack: "Sac",
    colCalories: "Calories",
    colVsUnloaded: "vs à vide",
    vsUnloaded: "+{percent} %",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "Suivez chaque rucking automatiquement",
    description:
      "Steps compte votre distance et vos pas en arrière-plan, pour que vos sorties de rucking s'enregistrent avec le reste de votre marche.",
  },
  info: {
    title: "Comment nous calculons les calories de rucking",
    intro:
      "Les tables MET et les équations ACSM n'ont aucun terme de charge : elles renvoient la même dépense que le sac soit vide ou contienne 30 kilogrammes. Nous utilisons plutôt l'équation de Pandolf, construite précisément pour chiffrer le port de charge.",
    formulaTitle: "La formule",
    formulas: [
      { strong: "M", rest: "= 1,5W + 2,0(W+L)(L/W)² + η(W+L)(1,5V² + 0,35VG)" },
      {
        strong: "",
        rest: "M est le métabolisme en watts, W la masse corporelle en kg, L la charge en kg, V la vitesse en m/s, G la pente en pourcentage, et η le facteur de terrain.",
      },
      { strong: "kcal/min", rest: "= watts × 60 ÷ 4184" },
      {
        strong: "",
        rest: "Le terme du milieu est la pénalité de charge, et il croît avec (L/W)². Doubler le sac fait plus que doubler ce terme.",
      },
      {
        strong: "Exemple :",
        rest: "70 kg portant 20 kg à 4,8 km/h sur bitume, c'est 360 watts, environ 5,2 kcal par minute.",
      },
    ],
    note: "Pandolf couvre la marche à plat et en montée. La descente exige la correction séparée de Santee, donc les descentes sont traitées ici comme du plat plutôt que de renvoyer un chiffre que le modèle ne peut pas soutenir.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Combien de calories le rucking brûle-t-il ?",
      answer:
        "Une personne de 70 kg (155 lb) en rucking à 5 km/h sur route avec un sac de 15 kg (33 lb) brûle environ 310 calories par heure. La même heure de marche à vide est d'environ 265, donc le sac en représente autour de 45. Le poids du sac, la pente et le terrain déplacent nettement ce chiffre, c'est pourquoi un seul nombre de calories par heure est trompeur.",
    },
    {
      question: "Le rucking brûle-t-il plus de calories que la marche ?",
      answer:
        "Oui, et plus que le poids ajouté seul ne le suggère. Porter une charge coûte de l'énergie deux fois : vous déplacez la masse en plus, et vous payez une pénalité séparée parce que la charge est portée au lieu de faire partie du corps. Dans l'équation de Pandolf, cette pénalité croît avec le carré du rapport charge/poids, donc chaque kilogramme supplémentaire coûte plus que le précédent.",
    },
    {
      question: "Avec quel poids faut-il faire du rucking ?",
      answer:
        "La plupart des conseils commencent les débutants à 10 % du poids du corps et montent au plus vers un tiers. Au-dessus d'environ un tiers du poids, le risque de blessure aux genoux, au bas du dos et aux pieds grimpe nettement, et le modèle de Pandolf lui-même devient moins fiable parce qu'il a surtout été validé sous ce rapport. Ajoutez du poids lentement, et avant d'ajouter de la distance.",
    },
    {
      question: "Le terrain change-t-il les calories brûlées en rucking ?",
      answer:
        "Beaucoup. L'équation de Pandolf applique un facteur de terrain au coût du déplacement : la route goudronnée est la référence à 1,0, chemin de terre et sentier environ 1,2, broussailles denses 1,5, sol marécageux 1,8, et sable meuble 2,1. Le rucking sur sable de plage sec coûte à peu près deux fois l'énergie de déplacement du même sac sur bitume.",
    },
    {
      question: "Qu'est-ce que l'équation de Pandolf ?",
      answer:
        "C'est le modèle de référence du coût métabolique du port de charge, publié par Pandolf, Givoni et Goldman en 1977 pour l'armée américaine. Elle prédit le métabolisme en watts à partir de la masse corporelle, de la charge, de la vitesse de marche, de la pente et du terrain. Contrairement aux tables MET et aux équations ACSM, elle traite la charge comme une vraie donnée au lieu de l'ignorer.",
    },
    {
      question: "Pourquoi ce calculateur n'accepte-t-il pas les pentes en descente ?",
      answer:
        "Parce que l'équation de Pandolf n'a été validée que pour la marche à plat et en montée. Avec une pente négative, elle renvoie des coûts trop bas pour être crédibles : descendre est moins cher que le plat dans la formule, mais pas indéfiniment dans la réalité. Modéliser correctement la descente exige la correction séparée de Santee, donc ce calculateur traite les descentes comme du plat plutôt que d'afficher un nombre qu'il ne peut pas défendre.",
    },
    {
      question: "Le rucking est-il meilleur que la course pour perdre du gras ?",
      answer:
        "Il est plus facile à tenir, ce qui compte en général plus que le débit par minute. Le rucking se situe autour de 6 à 8 MET selon la charge et la pente, sous la plupart des courses, mais le faible impact permet un volume hebdomadaire bien plus élevé sans le stress articulaire qui interrompt les blocs de course. C'est la dépense énergétique totale de la semaine, pas l'intensité d'une seule séance, qui fait perdre du gras.",
    },
  ],
  cta: {
    title: "Suivez vos sorties de rucking",
    description:
      "Téléchargez l'application Steps pour suivre automatiquement vos marches, les calories brûlées et vos progrès.",
  },
  sticky: "Suivez vos pas avec Steps",
  howTo: {
    name: "Comment calculer les calories de rucking",
    description:
      "Saisissez votre poids, le poids du sac, l'allure, la pente et le terrain pour obtenir les calories brûlées, et la part de cette dépense due à la charge.",
    steps: [
      {
        name: "Saisissez le poids du corps et du sac",
        text: "Les deux en kilogrammes ou en livres. La pénalité de charge croît avec le carré du rapport sac/corps, donc les deux chiffres comptent, pas seulement le sac.",
      },
      {
        name: "Réglez l'allure et la durée",
        text: "Allure de rucking en km/h ou mph, et le temps pendant lequel vous avez bougé. Ensemble, ils fixent la distance parcourue.",
      },
      {
        name: "Ajoutez la pente",
        text: "Pente moyenne en montée, en pourcentage. Les descentes sont traitées comme du plat, parce que l'équation de Pandolf n'est validée que pour la marche à plat et en montée.",
      },
      {
        name: "Choisissez le terrain",
        text: "De la route goudronnée au sentier, aux broussailles denses et au sable meuble. Le terrain multiplie le coût du déplacement, et le sable dépasse le double du bitume.",
      },
      {
        name: "Lisez les calories et la part de la charge",
        text: "Le calculateur renvoie les calories totales, combien viennent du sac seul, le métabolisme en watts, et un tableau de calories pour des charges de rucking courantes.",
      },
    ],
  },
};

export default fr;

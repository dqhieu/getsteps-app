import type { LandingMessages } from "./en";

const fr: LandingMessages = {
  hero: {
    iconAlt: "Icône de l'application Steps",
    titleLead: "Chaque pas compte.",
    titleAccent: "Chaque étape se voit.",
    subtitle:
      "Un podomètre et un suivi d'entraînement d'une grande simplicité pour iPhone et Apple Watch, basé sur Apple Santé.",
    freeDownload: "Téléchargement gratuit",
  },
  trust: {
    featuredIn: "VU DANS",
    videoAria: "Regarder Appreciation, avec Erick the Architect, sur YouTube",
    videoTitle: "APPRECIATION",
    videoCredit: "avec Erick the Architect",
    lovedBy: "ADORÉ PAR PLUS DE 10 000 MARCHEURS",
    fiveStars: "5 étoiles sur 5",
  },
  spotlights: {
    "route-3d": {
      eyebrow: "Nouveau dans la 1.27",
      title: "Relecture 3D des parcours",
      description:
        "Revivez vos parcours avec une caméra 3D cinématographique qui vous suit. Choisissez le style de carte et ajustez la vitesse de lecture pour revivre chaque séance à votre façon.",
    },
    "ai-coach": {
      eyebrow: "Apple Intelligence",
      title: "Coach IA",
      description:
        "Un retour personnalisé sur chaque séance, et une discussion sur n'importe quelle activité, grâce à Apple Intelligence sur l'appareil.",
    },
    stepboard: {
      eyebrow: "Défiez vos amis",
      title: "Stepboard",
      description:
        "Des classements quotidiens entre amis. Créez des tableaux privés, invitez avec un lien getsteps.app/join et classez par pas ou par distance.",
    },
    "apple-watch": {
      eyebrow: "À votre poignet",
      title: "Entraînements sur Apple Watch",
      description:
        "Lancez et suivez vos séances depuis votre poignet avec tracés GPS, métriques en direct et recopie en temps réel sur votre iPhone.",
    },
  },
  spotlightImageAlt: "{title} dans l'application Steps",
  yearly: {
    badge: "Gratuit pour tous",
    title: "Votre bilan de l'année",
    subtitle: "Votre parcours fitness transformé en visuels colorés et faciles à partager.",
    cards: {
      receipt: {
        title: "Ticket fitness",
        description: "Les stats de votre année sous forme de ticket personnalisé",
      },
      tickets: {
        title: "Billets de réussite",
        description: "Vos étapes clés sous forme de billets d'avion",
      },
      stamps: {
        title: "Tampons de passeport",
        description: "Un tampon pour chaque étape franchie",
      },
    },
  },
  features: {
    title: "Tout ce que vous pourriez vouloir d'autre",
    subtitle: "Conçu nativement pour iPhone et Apple Watch, basé sur Apple Santé.",
    healthBadgeAlt: "Compatible avec Apple Santé",
    grid: {
      LineChart: { title: "Graphiques clairs", description: "Vues par heure, semaine et mois" },
      Flame: { title: "Objectifs et séries", description: "Restez motivé chaque jour" },
      LayoutGrid: { title: "Widgets d'accueil", description: "10 widgets pour votre écran d'accueil" },
      Lock: { title: "Verrouillage d'apps", description: "Bloquez des apps jusqu'à atteindre votre objectif" },
      Route: { title: "Export GPX", description: "Exportez et partagez vos parcours" },
      HeartPulse: { title: "Synchro Apple Santé", description: "Un suivi précis et automatique" },
    },
    recordsTitle: "{count} RECORDS PERSONNELS",
    records: {
      Zap: "Allure la plus rapide",
      Flame: "Plus de calories",
      Sunrise: "Départ le plus matinal",
      Mountain: "Plus de dénivelé",
      Timer: "Durée la plus longue",
      Ruler: "Distance la plus longue",
      Moon: "Séance la plus tardive",
      HeartPulse: "Fréquence cardiaque max",
    },
    workoutsTitle: "{count} TYPES D'ENTRAÎNEMENT",
    workouts: {
      Footprints: "Course",
      PersonStanding: "Marche",
      Bike: "Vélo",
      Mountain: "Randonnée",
      Waves: "Natation",
      Dumbbell: "Musculation",
      Flower2: "Yoga",
      CircleDot: "Pickleball",
    },
    moreWorkouts: "+15 autres",
  },
  privacy: {
    title: "Vos données restent sur votre appareil par défaut",
    body: "Les données de santé sont stockées localement et consultées en toute sécurité via Apple HealthKit, avec votre autorisation. Si vous rejoignez le classement Stepboard, certaines métriques sont synchronisées pour établir les classements.",
  },
  cta: {
    title: "Prêt à compter chaque pas ?",
    footnote: "Gratuit pour toujours · Aucun compte requis · Fonctions Pro disponibles",
  },
  stepboard: {
    sectionLabel: "Total de pas de la communauté Stepboard",
    counterLabel: "{total} pas parcourus par la communauté Steps",
    footer: "Total des pas parcourus par les membres Stepboard",
  },
};

export default fr;

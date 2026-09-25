import type { GpxViewerMessages } from "./en";

const fr: GpxViewerMessages = {
  meta: {
    title: "Visionneuse GPX – ouvrir un fichier GPX en ligne gratuitement | Steps",
    description:
      "Importez et visualisez vos fichiers GPX gratuitement. Carte interactive, profil d'altitude, distance, vitesse, waypoints et données d'itinéraire. Sans inscription.",
    keywords: [
      "visionneuse gpx",
      "lecteur gpx",
      "ouvrir fichier gpx",
      "voir fichier gpx",
      "lire fichier gpx",
      "gpx en ligne",
      "visualiser gpx en ligne",
      "ouvrir un gpx",
      "lecteur de fichier gpx",
      "analyseur gpx",
      "éditeur gpx",
    ],
    ogTitle: "Visionneuse GPX – ouvrir un fichier GPX en ligne",
    ogDescription:
      "Importez vos fichiers GPX et visualisez-les sur une carte interactive, avec profil d'altitude, distance, vitesse et waypoints.",
    ogImageAlt: "Visionneuse GPX – voir un fichier GPX en ligne",
  },
  hero: {
    title: "Visionneuse GPX – voir un fichier GPX en ligne",
    subtitle:
      "Importez et visualisez vos fichiers GPX. Tracés sur une carte interactive, avec profil d'altitude, distance, vitesse et waypoints.",
  },
  intro:
    "Glissez-déposez un fichier .gpx pour voir votre itinéraire sur la carte. Compatible avec Strava, Garmin, Apple Watch, Komoot et tout autre appareil ou appli GPS.",
  tool: {
    dropTitle: "Déposez votre fichier GPX ici",
    dropHint: "ou cliquez pour parcourir",
    dropFormats: "Fichiers .gpx de Strava, Garmin, Apple Watch et d'autres",
    errors: {
      notGpx: "Importez un fichier .gpx",
      noTrack: "Aucune trace trouvée dans ce fichier GPX",
      parse: "Impossible de lire ce fichier GPX. Vérifiez le format.",
    },
    newFile: "Nouveau fichier",
    points: {
      one: "{count} point",
      other: "{count} points",
    },
    waypoints: {
      one: "{count} point de passage",
      other: "{count} points de passage",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "Distance",
      duration: "Durée",
      avgSpeed: "Vitesse moy.",
      maxSpeed: "Vitesse max.",
      elevationGain: "Dénivelé positif",
      elevationLoss: "Dénivelé négatif",
      maxElevation: "Altitude max.",
      minElevation: "Altitude min.",
    },
    na: "N/D",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "Profil d'altitude",
    waypointsTitle: "Points de passage ({count})",
    waypointFallback: "Point de passage {n}",
    start: "Départ",
    end: "Arrivée",
  },
  about: {
    title: "Qu'est-ce qu'un fichier GPX ?",
    p1: "Le GPX (GPS Exchange Format) est le format XML standard pour les données GPS. Il contient latitude, longitude, altitude et horodatage des traces, itinéraires et waypoints. Presque tous les GPS et applis fitness l'utilisent : Garmin, Strava, Apple Watch, Komoot, AllTrails.",
    p2: "On s'en sert pour enregistrer un parcours de course ou de vélo, préparer une randonnée, partager un itinéraire ou analyser dénivelé, distance et allure. Cette visionneuse gratuite ouvre n'importe quel GPX dans le navigateur — rien à installer.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Comment ouvrir un fichier GPX ?",
      answer:
        "Glissez-déposez votre fichier .gpx dans la zone ci-dessus, ou cliquez pour le choisir. La visionneuse le lit tout de suite et affiche vos traces sur une carte interactive, avec distance, altitude et vitesse. Tout se fait dans votre navigateur — rien n'est envoyé à un serveur.",
    },
    {
      question: "Que contient un fichier GPX ?",
      answer:
        "Un GPX stocke trois types de données : les traces (parcours enregistrés par le GPS), les itinéraires (parcours prévus) et les waypoints (points d'intérêt). Chaque point a une latitude, une longitude, et parfois une altitude et une heure. On peut ainsi calculer distance, vitesse, dénivelé et durée.",
    },
    {
      question: "Comment exporter un GPX depuis mon appli fitness ?",
      answer:
        "La plupart des applis savent exporter en GPX. Dans Strava, ouvrez une activité et choisissez « Export GPX ». Dans Garmin Connect, ouvrez l'activité et cliquez sur l'engrenage. Sur Apple Watch, utilisez Steps ou un outil tiers pour exporter les séances en GPX. Regardez les réglages ou les options d'export de votre appli.",
    },
    {
      question: "Mes données GPX restent-elles privées ?",
      answer:
        "Oui. Cette visionneuse traite le fichier entièrement dans votre navigateur, en JavaScript. Vos données ne sont ni envoyées ni stockées. Quand vous fermez la page, elles disparaissent. Vous pouvez consulter vos itinéraires personnels en toute tranquillité.",
    },
    {
      question: "Quelles applis créent des fichiers GPX ?",
      answer:
        "La plupart des applis GPS et fitness : Strava, Garmin Connect, Apple Watch (via Steps ou une appli tierce), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros, et bien d'autres. Les GPS Garmin, Wahoo et marques proches exportent aussi le GPX.",
    },
  ],
  cta: {
    title: "Enregistrez et exportez le GPX avec Steps",
    description:
      "Suivez vos séances et exportez des fichiers GPX directement depuis Steps sur iPhone et Apple Watch.",
  },
  howTo: {
    name: "Comment voir un fichier GPX en ligne",
    description:
      "Importez un fichier GPX et voyez l'itinéraire sur une carte interactive, avec distance, durée, allure et altitude.",
    steps: [
      {
        name: "Déposez votre fichier GPX",
        text: "Glissez un fichier .gpx dans le navigateur, ou cliquez pour le choisir sur votre appareil.",
      },
      {
        name: "Regardez la carte et les stats",
        text: "La visionneuse trace l'itinéraire sur une carte interactive, avec distance totale, dénivelé positif, durée et allure moyenne.",
      },
      {
        name: "Parcourez waypoints et altitude",
        text: "Survolez la carte ou le profil d'altitude pour voir vitesse et altitude à chaque point.",
      },
    ],
  },
};

export default fr;

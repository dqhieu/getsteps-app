import type { GpxViewerMessages } from "./en";

const es: GpxViewerMessages = {
  meta: {
    title: "Visor GPX – abre archivos GPX online gratis | Steps",
    description:
      "Sube y visualiza archivos GPX gratis. Mapa interactivo con perfil de elevación, distancia, velocidad, waypoints y datos de ruta. Sin registro.",
    keywords: [
      "visor gpx",
      "lector gpx",
      "abrir archivo gpx",
      "ver archivo gpx",
      "leer archivo gpx",
      "gpx online",
      "visor gpx online",
      "abrir gpx",
      "abridor de archivos gpx",
      "analizador gpx",
      "editor gpx",
    ],
    ogTitle: "Visor GPX – ver archivos GPX online gratis",
    ogDescription:
      "Sube tus archivos GPX y míralos en un mapa interactivo con perfil de elevación, distancia, velocidad y waypoints.",
    ogImageAlt: "Visor GPX – ver archivos GPX online",
  },
  hero: {
    title: "Visor GPX – ver archivos GPX online",
    subtitle:
      "Sube y visualiza tus archivos GPX. Tracks en un mapa interactivo, con perfil de elevación, distancia, velocidad y waypoints.",
  },
  intro:
    "Arrastra un archivo .gpx para ver la ruta al momento en el mapa. Funciona con archivos de Strava, Garmin, Apple Watch, Komoot y cualquier otro GPS o app.",
  tool: {
    dropTitle: "Suelta aquí tu archivo GPX",
    dropHint: "o haz clic para buscar",
    dropFormats: "Archivos .gpx de Strava, Garmin, Apple Watch y más",
    errors: {
      notGpx: "Sube un archivo .gpx",
      noTrack: "No hay datos de track en este archivo GPX",
      parse: "No se pudo leer el archivo GPX. Revisa el formato.",
    },
    newFile: "Archivo nuevo",
    points: {
      one: "{count} punto",
      other: "{count} puntos",
    },
    waypoints: {
      one: "{count} waypoint",
      other: "{count} waypoints",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "Distancia",
      duration: "Duración",
      avgSpeed: "Velocidad media",
      maxSpeed: "Velocidad máx.",
      elevationGain: "Desnivel positivo",
      elevationLoss: "Desnivel negativo",
      maxElevation: "Altitud máx.",
      minElevation: "Altitud mín.",
    },
    na: "N/D",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "Perfil de elevación",
    waypointsTitle: "Waypoints ({count})",
    waypointFallback: "Waypoint {n}",
    start: "Inicio",
    end: "Fin",
  },
  about: {
    title: "¿Qué es un archivo GPX?",
    p1: "GPX (GPS Exchange Format) es el formato XML estándar para datos GPS. Guarda latitud, longitud, altitud y marcas de tiempo de tracks, rutas y waypoints. Lo usan casi todos los GPS y apps de fitness, incluidos Garmin, Strava, Apple Watch, Komoot y AllTrails.",
    p2: "Sirve para grabar rutas de carrera o bici, planear senderos, compartir recorridos y analizar desnivel, distancia y ritmo. Este visor gratuito abre cualquier GPX en el navegador — no instalas nada.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cómo abro un archivo GPX?",
      answer:
        "Arrastra tu archivo .gpx a la zona de arriba o haz clic para buscarlo. El visor lo lee al momento y muestra los tracks en un mapa interactivo, con distancia, altitud y velocidad. Todo ocurre en tu navegador — no se sube nada a un servidor.",
    },
    {
      question: "¿Qué datos contiene un archivo GPX?",
      answer:
        "Un GPX guarda tres tipos de datos: tracks (recorridos grabados por el GPS), rutas (caminos planificados) y waypoints (puntos de interés). Cada punto incluye latitud, longitud y, si existen, altitud y hora. Con eso se calculan distancia, velocidad, desnivel y duración.",
    },
    {
      question: "¿Cómo exporto un GPX desde mi app de fitness?",
      answer:
        "Casi todas las apps exportan GPX. En Strava abre una actividad y elige «Export GPX». En Garmin Connect entra en la actividad y pulsa el engranaje. En el Apple Watch usa Steps o una herramienta de terceros para exportar entrenos como GPX. Revisa los ajustes o las opciones de exportación de tu app.",
    },
    {
      question: "¿Mis datos GPX son privados?",
      answer:
        "Sí. Este visor procesa el archivo por completo en tu navegador con JavaScript. Los datos GPX no se suben ni se guardan. Al cerrar la página, desaparecen. Puedes ver rutas y ubicaciones personales con tranquilidad.",
    },
    {
      question: "¿Qué apps crean archivos GPX?",
      answer:
        "La mayoría de apps GPS y de fitness: Strava, Garmin Connect, Apple Watch (con Steps o apps de terceros), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros y muchas más. Los GPS de Garmin, Wahoo y marcas parecidas también exportan GPX.",
    },
  ],
  cta: {
    title: "Graba y exporta GPX con Steps",
    description:
      "Registra tus entrenos y exporta archivos GPX directamente desde la app Steps en el iPhone y el Apple Watch.",
  },
  howTo: {
    name: "Cómo ver un archivo GPX online",
    description:
      "Sube cualquier archivo GPX y mira la ruta en un mapa interactivo, con distancia, duración, ritmo y altitud.",
    steps: [
      {
        name: "Suelta tu archivo GPX",
        text: "Arrastra un archivo .gpx al navegador o haz clic para elegirlo en tu dispositivo.",
      },
      {
        name: "Mira el mapa y las cifras",
        text: "El visor dibuja la ruta en un mapa interactivo con distancia total, desnivel, duración y ritmo medio.",
      },
      {
        name: "Recorre waypoints y elevación",
        text: "Pasa el cursor por el mapa o el perfil de elevación para ver velocidad y altitud en cada punto.",
      },
    ],
  },
};

export default es;

import type { GpxViewerMessages } from "./en";

const it: GpxViewerMessages = {
  meta: {
    title: "Visualizzatore GPX – apri file GPX online gratis | Steps",
    description:
      "Carica e visualizza file GPX gratis. Mappa interattiva con profilo altimetrico, distanza, velocità, waypoint e dati del percorso. Senza registrazione.",
    keywords: [
      "visualizzatore gpx",
      "lettore gpx",
      "aprire file gpx",
      "vedere file gpx",
      "leggere file gpx",
      "gpx online",
      "visualizzare gpx online",
      "apri file gpx",
      "apri gpx",
      "analizzatore gpx",
      "editor gpx",
    ],
    ogTitle: "Visualizzatore GPX – apri file GPX online gratis",
    ogDescription:
      "Carica i tuoi file GPX e visualizzali su una mappa interattiva con profilo altimetrico, distanza, velocità e waypoint.",
    ogImageAlt: "Visualizzatore GPX – vedere file GPX online",
  },
  hero: {
    title: "Visualizzatore GPX – vedere file GPX online",
    subtitle:
      "Carica e visualizza i tuoi file GPX. Tracce su una mappa interattiva, con profilo altimetrico, distanza, velocità e waypoint.",
  },
  intro:
    "Trascina un file .gpx per vedere subito il percorso sulla mappa. Funziona con file di Strava, Garmin, Apple Watch, Komoot e qualsiasi altro GPS o app.",
  tool: {
    dropTitle: "Trascina qui il file GPX",
    dropHint: "oppure clicca per cercare",
    dropFormats: "File .gpx da Strava, Garmin, Apple Watch e altri",
    errors: {
      notGpx: "Carica un file .gpx",
      noTrack: "Nessuna traccia in questo file GPX",
      parse: "Impossibile leggere il file GPX. Controlla il formato.",
    },
    newFile: "Nuovo file",
    points: {
      one: "{count} punto",
      other: "{count} punti",
    },
    waypoints: {
      one: "{count} waypoint",
      other: "{count} waypoint",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "Distanza",
      duration: "Durata",
      avgSpeed: "Velocità media",
      maxSpeed: "Velocità max",
      elevationGain: "Dislivello positivo",
      elevationLoss: "Dislivello negativo",
      maxElevation: "Quota max",
      minElevation: "Quota min",
    },
    na: "N/D",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "Profilo altimetrico",
    waypointsTitle: "Waypoint ({count})",
    waypointFallback: "Waypoint {n}",
    start: "Partenza",
    end: "Arrivo",
  },
  about: {
    title: "Che cos'è un file GPX?",
    p1: "GPX (GPS Exchange Format) è il formato XML standard per i dati GPS. Contiene latitudine, longitudine, quota e orari di tracce, rotte e waypoint. Lo usano quasi tutti i GPS e le app di fitness, tra cui Garmin, Strava, Apple Watch, Komoot e AllTrails.",
    p2: "Serve per registrare corsa o bici, pianificare un trekking, condividere un percorso e analizzare dislivello, distanza e passo. Questo visualizzatore gratuito apre qualsiasi GPX nel browser — niente da installare.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Come apro un file GPX?",
      answer:
        "Trascina il file .gpx nell'area qui sopra, oppure clicca per cercarlo. Il visualizzatore lo legge subito e mostra le tracce su una mappa interattiva, con distanza, quota e velocità. Tutto avviene nel browser — niente viene caricato su un server.",
    },
    {
      question: "Quali dati contiene un file GPX?",
      answer:
        "Un GPX conserva tre tipi di dati: tracce (percorsi registrati dal GPS), rotte (percorsi pianificati) e waypoint (punti di interesse). Ogni punto ha latitudine, longitudine e, se presenti, quota e orario. Così si calcolano distanza, velocità, dislivello e durata.",
    },
    {
      question: "Come esporto un GPX dalla mia app di fitness?",
      answer:
        "Quasi tutte le app esportano in GPX. In Strava apri un'attività e scegli «Export GPX». In Garmin Connect vai all'attività e clicca l'ingranaggio. Su Apple Watch usa Steps o uno strumento di terze parti per esportare gli allenamenti in GPX. Controlla impostazioni o opzioni di esportazione della tua app.",
    },
    {
      question: "I miei dati GPX restano privati?",
      answer:
        "Sì. Questo visualizzatore elabora il file interamente nel browser, in JavaScript. I dati GPX non vengono caricati né salvati. Quando chiudi la pagina, spariscono. Puoi guardare percorsi e posizioni personali in sicurezza.",
    },
    {
      question: "Quali app creano file GPX?",
      answer:
        "La maggior parte delle app GPS e fitness: Strava, Garmin Connect, Apple Watch (con Steps o app di terze parti), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros e molte altre. Anche i GPS Garmin, Wahoo e marche simili esportano GPX.",
    },
  ],
  cta: {
    title: "Registra ed esporta GPX con Steps",
    description:
      "Traccia gli allenamenti ed esporta file GPX direttamente dall'app Steps su iPhone e Apple Watch.",
  },
  howTo: {
    name: "Come vedere un file GPX online",
    description:
      "Carica un file GPX e guarda il percorso su una mappa interattiva, con distanza, durata, passo e quota.",
    steps: [
      {
        name: "Trascina il file GPX",
        text: "Trascina un file .gpx nel browser oppure clicca per sceglierlo dal dispositivo.",
      },
      {
        name: "Guarda mappa e dati",
        text: "Il visualizzatore disegna il percorso su una mappa interattiva con distanza totale, dislivello, durata e passo medio.",
      },
      {
        name: "Sfoglia waypoint e quota",
        text: "Passa sulla mappa o sul profilo altimetrico per vedere velocità e quota in ogni punto.",
      },
    ],
  },
};

export default it;

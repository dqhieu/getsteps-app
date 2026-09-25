import type { LandingMessages } from "./en";

const it: LandingMessages = {
  hero: {
    iconAlt: "Icona dell'app Steps",
    titleLead: "Ogni passo conta.",
    titleAccent: "Ogni traguardo si vede.",
    subtitle:
      "Un contapassi e tracker di allenamenti meravigliosamente semplice per iPhone e Apple Watch, basato su Apple Salute.",
    freeDownload: "Download gratuito",
  },
  trust: {
    featuredIn: "PARLANO DI NOI",
    videoAria: "Guarda Appreciation, con Erick the Architect, su YouTube",
    videoTitle: "APPRECIATION",
    videoCredit: "con Erick the Architect",
    lovedBy: "AMATA DA OLTRE 10.000 CAMMINATORI",
    fiveStars: "5 stelle su 5",
  },
  spotlights: {
    "route-3d": {
      eyebrow: "Novità della 1.27",
      title: "Riproduzione 3D dei percorsi",
      description:
        "Rivivi i tuoi percorsi con una telecamera 3D cinematografica che ti segue. Scegli lo stile della mappa e regola la velocità per rivivere ogni allenamento a modo tuo.",
    },
    "ai-coach": {
      eyebrow: "Apple Intelligence",
      title: "Coach IA",
      description:
        "Feedback personalizzati su ogni allenamento e chat su qualsiasi attività, con Apple Intelligence sul dispositivo.",
    },
    stepboard: {
      eyebrow: "Sfida i tuoi amici",
      title: "Stepboard",
      description:
        "Classifiche giornaliere con gli amici. Crea bacheche private, invita con un link getsteps.app/join e ordina per passi o distanza.",
    },
    "apple-watch": {
      eyebrow: "Al tuo polso",
      title: "Allenamenti su Apple Watch",
      description:
        "Avvia e monitora gli allenamenti dal polso con percorsi GPS, metriche in tempo reale e duplicazione istantanea sull'iPhone.",
    },
  },
  spotlightImageAlt: "{title} nell'app Steps",
  yearly: {
    badge: "Gratis per tutti",
    title: "Il tuo anno in sintesi",
    subtitle: "Il tuo percorso fitness trasformato in grafiche colorate e condivisibili.",
    cards: {
      receipt: {
        title: "Scontrino fitness",
        description: "Le statistiche del tuo anno come uno scontrino personalizzato",
      },
      tickets: {
        title: "Biglietti dei traguardi",
        description: "I tuoi traguardi come biglietti aerei",
      },
      stamps: {
        title: "Timbri del passaporto",
        description: "Colleziona un timbro per ogni traguardo raggiunto",
      },
    },
  },
  features: {
    title: "Tutto il resto che potresti desiderare",
    subtitle: "Creata nativamente per iPhone e Apple Watch, basata su Apple Salute.",
    healthBadgeAlt: "Funziona con Apple Salute",
    grid: {
      LineChart: { title: "Grafici chiari", description: "Viste orarie, settimanali e mensili" },
      Flame: { title: "Obiettivi e serie", description: "Resta motivato ogni giorno" },
      LayoutGrid: { title: "Widget per la Home", description: "10 widget per la schermata Home" },
      Lock: { title: "Blocco app", description: "Blocca le app finché non raggiungi l'obiettivo" },
      Route: { title: "Esportazione GPX", description: "Esporta e condividi i tuoi percorsi" },
      HeartPulse: { title: "Sincronizzazione Apple Salute", description: "Monitoraggio preciso e automatico" },
    },
    recordsTitle: "{count} RECORD PERSONALI",
    records: {
      Zap: "Passo più veloce",
      Flame: "Più calorie",
      Sunrise: "Partenza più presto",
      Mountain: "Più dislivello",
      Timer: "Durata più lunga",
      Ruler: "Distanza più lunga",
      Moon: "Allenamento più tardi",
      HeartPulse: "Frequenza cardiaca max",
    },
    workoutsTitle: "{count} TIPI DI ALLENAMENTO",
    workouts: {
      Footprints: "Corsa",
      PersonStanding: "Camminata",
      Bike: "Ciclismo",
      Mountain: "Escursionismo",
      Waves: "Nuoto",
      Dumbbell: "Forza",
      Flower2: "Yoga",
      CircleDot: "Pickleball",
    },
    moreWorkouts: "+15 altri",
  },
  privacy: {
    title: "Per impostazione predefinita i tuoi dati restano sul dispositivo",
    body: "I dati sulla salute sono archiviati in locale e letti in modo sicuro tramite Apple HealthKit, con il tuo permesso. Se partecipi alla classifica Stepboard, alcune metriche vengono sincronizzate per generare le classifiche.",
  },
  cta: {
    title: "Pronto a contare ogni passo?",
    footnote: "Gratis per sempre · Nessun account richiesto · Funzioni Pro disponibili",
  },
  stepboard: {
    sectionLabel: "Totale passi della community Stepboard",
    counterLabel: "{total} passi percorsi dalla community di Steps",
    footer: "Passi totali percorsi dai membri di Stepboard",
  },
};

export default it;

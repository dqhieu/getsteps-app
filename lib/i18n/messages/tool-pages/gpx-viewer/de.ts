import type { GpxViewerMessages } from "./en";

const de: GpxViewerMessages = {
  meta: {
    title: "GPX-Viewer – GPX-Dateien kostenlos online öffnen | Steps",
    description:
      "Lade GPX-Dateien kostenlos hoch und sieh sie dir an. Interaktive Karte mit Höhenprofil, Distanz, Tempo, Wegpunkten und Routendaten. Ohne Anmeldung.",
    keywords: [
      "gpx viewer",
      "gpx reader",
      "gpx datei öffnen",
      "gpx datei ansehen",
      "gpx datei lesen",
      "gpx viewer online",
      "gpx datei online öffnen",
      "gpx öffnen",
      "gpx datei opener",
      "gpx analyzer",
      "gpx editor",
    ],
    ogTitle: "GPX-Viewer – GPX-Dateien kostenlos online ansehen",
    ogDescription:
      "Lade deine GPX-Dateien hoch und sieh sie auf einer interaktiven Karte mit Höhenprofil, Distanz, Tempo und Wegpunkten.",
    ogImageAlt: "GPX-Viewer – GPX-Dateien online ansehen",
  },
  hero: {
    title: "GPX-Viewer – GPX-Dateien online ansehen",
    subtitle:
      "Lade deine GPX-Dateien hoch und visualisiere sie. Tracks auf einer interaktiven Karte, mit Höhenprofil, Distanz, Tempo und Wegpunkten.",
  },
  intro:
    "Zieh eine .gpx-Datei hierher und sieh die Route sofort auf der Karte. Funktioniert mit Dateien von Strava, Garmin, Apple Watch, Komoot und jedem anderen GPS-Gerät oder jeder App.",
  tool: {
    dropTitle: "GPX-Datei hier ablegen",
    dropHint: "oder klicken und auswählen",
    dropFormats: "Unterstützt .gpx-Dateien von Strava, Garmin, Apple Watch und mehr",
    errors: {
      notGpx: "Bitte eine .gpx-Datei hochladen",
      noTrack: "In dieser GPX-Datei sind keine Trackdaten",
      parse: "GPX-Datei konnte nicht gelesen werden. Prüfe das Format.",
    },
    newFile: "Neue Datei",
    points: {
      one: "{count} Punkt",
      other: "{count} Punkte",
    },
    waypoints: {
      one: "{count} Wegpunkt",
      other: "{count} Wegpunkte",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "Distanz",
      duration: "Dauer",
      avgSpeed: "Ø Tempo",
      maxSpeed: "Max. Tempo",
      elevationGain: "Höhenmeter",
      elevationLoss: "Höhenverlust",
      maxElevation: "Max. Höhe",
      minElevation: "Min. Höhe",
    },
    na: "k. A.",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "Höhenprofil",
    waypointsTitle: "Wegpunkte ({count})",
    waypointFallback: "Wegpunkt {n}",
    start: "Start",
    end: "Ziel",
  },
  about: {
    title: "Was ist eine GPX-Datei?",
    p1: "GPX (GPS Exchange Format) ist das Standard-XML-Format für GPS-Daten. Es speichert Breitengrad, Längengrad, Höhe und Zeitstempel von Tracks, Routen und Wegpunkten. Fast jedes GPS und jede Fitness-App nutzt es, darunter Garmin, Strava, Apple Watch, Komoot und AllTrails.",
    p2: "Typisch sind Lauf- und Radstrecken, Wanderplanung, geteilte Routen und die Auswertung von Höhenmetern, Distanz und Pace. Dieser kostenlose Viewer öffnet jede GPX-Datei direkt im Browser — ohne Installation.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Wie öffne ich eine GPX-Datei?",
      answer:
        "Zieh deine .gpx-Datei in das Feld oben oder klicke, um sie auszuwählen. Der Viewer liest die Datei sofort und zeigt deine Tracks auf einer interaktiven Karte mit Distanz, Höhe und Tempo. Alles passiert in deinem Browser — nichts wird auf einen Server geladen.",
    },
    {
      question: "Welche Daten stecken in einer GPX-Datei?",
      answer:
        "Eine GPX-Datei speichert drei Arten von Daten: Tracks (aufgezeichnete GPS-Wege), Routen (geplante Wege) und Wegpunkte (einzelne Orte). Jeder Punkt hat Breiten- und Längengrad, optional Höhe und Zeitstempel. Daraus lassen sich Distanz, Tempo, Höhenmeter und Dauer berechnen.",
    },
    {
      question: "Wie exportiere ich eine GPX-Datei aus meiner Fitness-App?",
      answer:
        "Die meisten Apps können GPX exportieren. In Strava öffnest du eine Aktivität und wählst „Export GPX“. In Garmin Connect gehst du zur Aktivität und klickst auf das Zahnrad. Auf der Apple Watch exportierst du Workouts über Steps oder ein Drittanbieter-Tool als GPX. Schau in den Einstellungen oder Exportoptionen deiner App.",
    },
    {
      question: "Bleiben meine GPX-Daten privat?",
      answer:
        "Ja. Dieser Viewer verarbeitet die Datei komplett in deinem Browser mit JavaScript. Deine GPX-Daten werden weder hochgeladen noch gespeichert. Sobald du die Seite schließt, sind sie weg. Persönliche Routen und Standortdaten kannst du damit unbesorgt ansehen.",
    },
    {
      question: "Welche Apps erzeugen GPX-Dateien?",
      answer:
        "Die meisten GPS- und Fitness-Apps, darunter Strava, Garmin Connect, Apple Watch (über Steps oder Drittanbieter-Apps), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros und viele mehr. Auch GPS-Geräte von Garmin, Wahoo und ähnlichen Marken exportieren GPX.",
    },
  ],
  cta: {
    title: "GPX mit Steps aufzeichnen und exportieren",
    description:
      "Tracke deine Workouts und exportiere GPX-Dateien direkt aus der Steps-App auf iPhone und Apple Watch.",
  },
  howTo: {
    name: "So siehst du eine GPX-Datei online an",
    description:
      "Lade eine GPX-Datei hoch und sieh die Route auf einer interaktiven Karte mit Distanz, Dauer, Pace und Höhendaten.",
    steps: [
      {
        name: "GPX-Datei ablegen",
        text: "Zieh eine .gpx-Datei in den Browser oder klicke, um eine Datei vom Gerät zu wählen.",
      },
      {
        name: "Karte und Werte ansehen",
        text: "Der Viewer zeichnet die Route auf eine interaktive Karte mit Gesamtdistanz, Höhenmetern, Dauer und Durchschnittspace.",
      },
      {
        name: "Wegpunkte und Höhe durchsehen",
        text: "Fahre über die Karte oder das Höhenprofil, um Tempo und Höhe an jedem Punkt zu sehen.",
      },
    ],
  },
};

export default de;

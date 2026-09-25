import type { GpxViewerMessages } from "./en";

const ptBR: GpxViewerMessages = {
  meta: {
    title: "Visualizador GPX – abra arquivos GPX online grátis | Steps",
    description:
      "Envie e visualize arquivos GPX de graça. Mapa interativo com perfil de elevação, distância, velocidade, waypoints e dados da rota. Sem cadastro.",
    keywords: [
      "visualizador gpx",
      "leitor gpx",
      "abrir arquivo gpx",
      "ver arquivo gpx",
      "ler arquivo gpx",
      "gpx online",
      "visualizador gpx online",
      "abrir gpx",
      "abrir arquivo gpx online",
      "analisador gpx",
      "editor gpx",
    ],
    ogTitle: "Visualizador GPX – ver arquivos GPX online grátis",
    ogDescription:
      "Envie seus arquivos GPX e veja no mapa interativo, com perfil de elevação, distância, velocidade e waypoints.",
    ogImageAlt: "Visualizador GPX – ver arquivos GPX online",
  },
  hero: {
    title: "Visualizador GPX – ver arquivos GPX online",
    subtitle:
      "Envie e visualize seus arquivos GPX. Trilhas em um mapa interativo, com perfil de elevação, distância, velocidade e waypoints.",
  },
  intro:
    "Arraste um arquivo .gpx para ver a rota no mapa na hora. Funciona com arquivos do Strava, Garmin, Apple Watch, Komoot e qualquer outro GPS ou app.",
  tool: {
    dropTitle: "Solte seu arquivo GPX aqui",
    dropHint: "ou clique para procurar",
    dropFormats: "Arquivos .gpx do Strava, Garmin, Apple Watch e outros",
    errors: {
      notGpx: "Envie um arquivo .gpx",
      noTrack: "Nenhum trajeto encontrado neste arquivo GPX",
      parse: "Não foi possível ler o arquivo GPX. Confira o formato.",
    },
    newFile: "Novo arquivo",
    points: {
      one: "{count} ponto",
      other: "{count} pontos",
    },
    waypoints: {
      one: "{count} waypoint",
      other: "{count} waypoints",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "Distância",
      duration: "Duração",
      avgSpeed: "Velocidade média",
      maxSpeed: "Velocidade máx.",
      elevationGain: "Ganho de elevação",
      elevationLoss: "Perda de elevação",
      maxElevation: "Elevação máx.",
      minElevation: "Elevação mín.",
    },
    na: "N/D",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "Perfil de elevação",
    waypointsTitle: "Waypoints ({count})",
    waypointFallback: "Waypoint {n}",
    start: "Início",
    end: "Fim",
  },
  about: {
    title: "O que é um arquivo GPX?",
    p1: "GPX (GPS Exchange Format) é o formato XML padrão para dados de GPS. Ele guarda latitude, longitude, elevação e horários de trilhas, rotas e waypoints. Quase todo GPS e app de treino usa, inclusive Garmin, Strava, Apple Watch, Komoot e AllTrails.",
    p2: "Serve para gravar corrida ou pedal, planejar trilha, compartilhar rota e analisar elevação, distância e pace. Este visualizador gratuito abre qualquer GPX no navegador — sem instalar nada.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "Como abro um arquivo GPX?",
      answer:
        "Arraste o arquivo .gpx para a área acima ou clique para procurar. O visualizador lê na hora e mostra as trilhas num mapa interativo, com distância, elevação e velocidade. Tudo acontece no seu navegador — nada é enviado a um servidor.",
    },
    {
      question: "Que dados um arquivo GPX contém?",
      answer:
        "Um GPX guarda três tipos de dados: trilhas (percursos gravados pelo GPS), rotas (caminhos planejados) e waypoints (pontos de interesse). Cada ponto tem latitude, longitude e, se houver, elevação e horário. Dá para calcular distância, velocidade, ganho de elevação e duração.",
    },
    {
      question: "Como exporto um GPX do meu app de treino?",
      answer:
        "A maioria dos apps exporta GPX. No Strava, abra uma atividade e escolha \"Export GPX\". No Garmin Connect, vá à atividade e clique na engrenagem. No Apple Watch, use o Steps ou uma ferramenta de terceiros para exportar treinos em GPX. Veja as configurações ou as opções de exportação do seu app.",
    },
    {
      question: "Meus dados GPX ficam privados?",
      answer:
        "Sim. Este visualizador processa o arquivo inteiro no navegador, em JavaScript. Os dados GPX não são enviados nem armazenados. Quando você fecha a página, eles somem. Dá para ver rotas e locais pessoais com segurança.",
    },
    {
      question: "Quais apps criam arquivos GPX?",
      answer:
        "A maioria dos apps de GPS e treino: Strava, Garmin Connect, Apple Watch (pelo Steps ou apps de terceiros), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros e muitos outros. Aparelhos Garmin, Wahoo e marcas parecidas também exportam GPX.",
    },
  ],
  cta: {
    title: "Grave e exporte GPX com o Steps",
    description:
      "Registre seus treinos e exporte arquivos GPX direto do app Steps no iPhone e no Apple Watch.",
  },
  howTo: {
    name: "Como ver um arquivo GPX online",
    description:
      "Envie qualquer arquivo GPX e veja a rota num mapa interativo, com distância, duração, pace e elevação.",
    steps: [
      {
        name: "Solte o arquivo GPX",
        text: "Arraste um arquivo .gpx para o navegador ou clique para escolher um no dispositivo.",
      },
      {
        name: "Veja o mapa e os números",
        text: "O visualizador desenha a rota num mapa interativo com distância total, ganho de elevação, duração e pace médio.",
      },
      {
        name: "Percorra waypoints e elevação",
        text: "Passe o cursor no mapa ou no perfil de elevação para ver velocidade e altitude em cada ponto.",
      },
    ],
  },
};

export default ptBR;

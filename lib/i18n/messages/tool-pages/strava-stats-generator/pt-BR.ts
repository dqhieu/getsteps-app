import type { StravaStatsGeneratorMessages } from "./en";

const ptBR: StravaStatsGeneratorMessages = {
  meta: {
    title: "Gerador de stats do Strava – card de treino grátis | Steps",
    description:
      "Transforme sua corrida do Strava em um overlay transparente para os Stories do Instagram. Distância, tempo, pace calculado e um PNG transparente 1080x1080 grátis.",
    keywords: [
      "gerador de stats strava",
      "estatísticas de treino strava",
      "overlay stats strava",
      "png de stats transparente",
      "overlay corrida instagram",
      "imagem de stats do treino",
      "compartilhar stats de corrida",
      "stats de corrida story instagram",
    ],
    ogTitle: "Gerador de stats do Strava – overlay transparente",
    ogDescription:
      "Transforme sua corrida do Strava em um overlay transparente para os Stories do Instagram. Distância, tempo em movimento e pace calculado em um PNG grátis.",
    ogImageAlt: "Gerador de stats do Strava – card de treino grátis",
  },
  hero: {
    title: "Gerador de stats do Strava",
    subtitle:
      "Transforme a corrida que você acabou de registrar em um overlay transparente para o seu Story. Informe distância e tempo — a gente calcula o pace e entrega um PNG grátis para colocar na foto.",
  },
  tool: {
    workout: "Seu treino",
    distance: "Distância",
    switchToMiles: "Mudar para milhas",
    switchToKilometers: "Mudar para quilômetros",
    movingTime: "Tempo em movimento (MM:SS ou H:MM:SS)",
    durationPlaceholder: "52:30",
    paceHint: "O pace é calculado a partir da distância e do tempo.",
    overlay: "Seu overlay",
    overlayAria: "Overlay de stats: {distance} {distanceUnit}, {time}, {pace} {paceUnit}",
    saved: "Salvo!",
    download: "Baixar PNG transparente",
    downloadHint:
      "1080×1080 com fundo transparente — coloque direto na foto nos Stories do Instagram. Tudo roda no navegador; nada é enviado.",
    canvas: {
      distance: "Distância",
      pace: "Pace",
      time: "Tempo",
    },
  },
  inlineCta: {
    headline: "Conte os passos que o Strava não vê",
    description:
      "O Steps conta cada passo do seu iPhone e do Apple Watch e mostra ao lado das corridas — com sequências, tendências e uma retrospectiva anual grátis.",
  },
  about: {
    title: "Por que um overlay transparente?",
    p1: "A foto é o post. Você tirou na volta ou na chegada, e é isso que as pessoas querem ver — um card cheio de números cobre a imagem. Um PNG transparente mantém a foto e coloca em cima os três números que importam — distância, tempo em movimento e pace — num tamanho legível no celular.",
    p2: "Funciona para corrida, caminhada ou pedal, tenha você gravado no Strava, Garmin Connect, Apple Watch, Nike Run Club ou numa esteira sem rastreamento. Digite o que fez e o overlay fica pronto em segundos — sem conta, sem e-mail, sem marca d'água.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "Como faço um overlay da minha corrida no Strava?",
      answer:
        "Abra a atividade no Strava, anote a distância e o tempo em movimento e digite os dois no formulário. O pace é calculado para você. Toque em Baixar para salvar um PNG transparente só com esses três números.",
    },
    {
      question: "Como coloco o overlay na minha foto?",
      answer:
        "Abra os Stories do Instagram e escolha a foto. Toque no botão de figurinhas, escolha a figurinha de foto e selecione o PNG baixado. O fundo é transparente, então só o texto cai na imagem — belisque para redimensionar e arraste para onde ficar melhor. O mesmo vale no TikTok, no Snapchat e em qualquer editor com camadas.",
    },
    {
      question: "Esta ferramenta tem ligação com o Strava?",
      answer:
        "Não. É uma ferramenta grátis do Steps e não é afiliada, endossada nem ligada ao Strava. Ela gera um gráfico original, sem marca, com os números que você digita — não uma cópia de uma tela de atividade do Strava.",
    },
    {
      question: "Como o pace é calculado?",
      answer:
        "O pace é o tempo em movimento dividido pela distância, em minutos e segundos por quilômetro ou por milha, conforme a unidade. Uma corrida de 10 km em 52:30 dá 5:15 por quilômetro. Você nunca digita o pace: ele sempre sai da distância e do tempo.",
    },
    {
      question: "Qual é o tamanho da imagem?",
      answer:
        "1080 por 1080 pixels — um quadrado 1:1 que serve de post no feed e encaixa numa foto de Stories ou TikTok, onde você pode beliscar para redimensionar. Os números ficam centralizados e se leem bem em qualquer posição.",
    },
    {
      question: "Por que o fundo é transparente?",
      answer:
        "Para o overlay ficar sobre uma foto que você já tirou, em vez de substituí-la. Um card opaco cobre a foto da corrida; um PNG transparente deixa os números por cima. O texto tem uma sombra leve para continuar legível na neve ou no céu.",
    },
    {
      question: "Os dados do meu treino são enviados para algum lugar?",
      answer:
        "Não. O overlay é desenhado no navegador com um canvas e salvo direto no seu aparelho. Nada do que você digita é enviado, armazenado ou registrado.",
    },
    {
      question: "O Strava mostra a contagem de passos?",
      answer:
        "Não — o Strava registra distância, tempo e pace, mas não conta os passos do dia. Se você quer os passos junto das corridas, o app Steps lê os dados do iPhone e do Apple Watch e mostra ao lado dos treinos.",
    },
  ],
  disclaimer:
    "O Steps não é afiliado, endossado nem ligado ao Strava. Strava é marca da Strava, Inc. Os overlays gerados aqui são gráficos originais feitos com os números que você informa.",
  howTo: {
    name: "Como fazer um overlay transparente de stats",
    description:
      "Informe a distância e o tempo em movimento de uma corrida, baixe um PNG transparente e coloque sobre a sua foto nos Stories do Instagram.",
    steps: [
      {
        name: "Informe distância e tempo em movimento",
        text: "Digite a distância percorrida e alterne entre quilômetros e milhas; depois o tempo em movimento como MM:SS ou H:MM:SS.",
      },
      {
        name: "Baixe o PNG transparente",
        text: "O pace sai da distância e do tempo. Toque em Baixar para salvar um PNG 1080x1080 sem fundo — só os três números.",
      },
      {
        name: "Coloque sobre a foto",
        text: "Nos Stories do Instagram, escolha a foto, toque no botão de figurinhas, escolha a figurinha de foto e selecione o PNG. Só as stats aparecem — belisque para redimensionar e arraste.",
      },
    ],
  },
};

export default ptBR;

import type { LandingMessages } from "./en";

const ru: LandingMessages = {
  hero: {
    iconAlt: "Значок приложения Steps",
    titleLead: "Каждый шаг на счету.",
    titleAccent: "Каждый рубеж виден.",
    subtitle:
      "Простой и красивый шагомер и трекер тренировок для iPhone и Apple Watch — на базе Apple Health.",
    freeDownload: "Скачать бесплатно",
  },
  trust: {
    featuredIn: "О НАС ПИШУТ",
    videoAria: "Смотреть Appreciation с Erick the Architect на YouTube",
    videoTitle: "APPRECIATION",
    videoCredit: "в главной роли Erick the Architect",
    lovedBy: "НАС ЛЮБЯТ 10 000+ ПЕШЕХОДОВ",
    fiveStars: "5 из 5 звёзд",
  },
  spotlights: {
    "route-3d": {
      eyebrow: "Новое в 1.27",
      title: "3D-повтор маршрута",
      description:
        "Пересматривайте маршруты с кинематографичной 3D-камерой. Выберите стиль карты и скорость воспроизведения, чтобы заново пройти каждую тренировку.",
    },
    "ai-coach": {
      eyebrow: "Apple Intelligence",
      title: "ИИ-тренер",
      description:
        "Персональные комментарии к каждой тренировке и чат о любой активности — прямо на устройстве, с Apple Intelligence.",
    },
    stepboard: {
      eyebrow: "Соревнуйтесь с друзьями",
      title: "Stepboard",
      description:
        "Ежедневные таблицы лидеров с друзьями. Создавайте закрытые доски, приглашайте по ссылке getsteps.app/join и соревнуйтесь по шагам или дистанции.",
    },
    "apple-watch": {
      eyebrow: "На запястье",
      title: "Тренировки на Apple Watch",
      description:
        "Начинайте и записывайте тренировки с запястья: маршруты GPS, живые показатели и зеркалирование на iPhone в реальном времени.",
    },
  },
  spotlightImageAlt: "{title} в приложении Steps",
  yearly: {
    badge: "Бесплатно для всех",
    title: "Ваш год в обзоре",
    subtitle: "Ваш фитнес-путь — в ярких карточках, которыми можно поделиться.",
    cards: {
      receipt: {
        title: "Фитнес-чек",
        description: "Статистика года в виде персонального чека",
      },
      tickets: {
        title: "Билеты достижений",
        description: "Рубежи в виде авиабилетов",
      },
      stamps: {
        title: "Штампы в паспорте",
        description: "Штамп за каждый достигнутый рубеж",
      },
    },
  },
  features: {
    title: "И всё остальное, что вам нужно",
    subtitle: "Нативно для iPhone и Apple Watch, на базе Apple Health.",
    healthBadgeAlt: "Работает с Apple Health",
    grid: {
      LineChart: { title: "Понятные графики", description: "По часам, неделям и месяцам" },
      Flame: { title: "Цели и серии", description: "Мотивация каждый день" },
      LayoutGrid: { title: "Виджеты", description: "10 виджетов для домашнего экрана" },
      Lock: { title: "Блокировка приложений", description: "Закрывает приложения, пока цель не достигнута" },
      Route: { title: "Экспорт GPX", description: "Экспортируйте и делитесь маршрутами" },
      HeartPulse: { title: "Синхронизация Apple Health", description: "Точный автоматический учёт" },
    },
    recordsTitle: "{count} ЛИЧНЫХ РЕКОРДОВ",
    records: {
      Zap: "Лучший темп",
      Flame: "Больше всего калорий",
      Sunrise: "Самый ранний старт",
      Mountain: "Максимальный набор высоты",
      Timer: "Самая долгая тренировка",
      Ruler: "Самая большая дистанция",
      Moon: "Самая поздняя ночь",
      HeartPulse: "Максимальный пульс",
    },
    workoutsTitle: "{count} ТИПОВ ТРЕНИРОВОК",
    workouts: {
      Footprints: "Бег",
      PersonStanding: "Ходьба",
      Bike: "Велосипед",
      Mountain: "Походы",
      Waves: "Плавание",
      Dumbbell: "Силовая",
      Flower2: "Йога",
      CircleDot: "Пиклбол",
    },
    moreWorkouts: "ещё 15",
  },
  privacy: {
    title: "По умолчанию данные остаются на устройстве",
    body: "Данные о здоровье хранятся локально и читаются через Apple HealthKit только с вашего разрешения. Если вы участвуете в таблице Stepboard, выбранные показатели синхронизируются для рейтинга.",
  },
  cta: {
    title: "Готовы считать каждый шаг?",
    footnote: "Бесплатно навсегда · Аккаунт не нужен · Есть функции Pro",
  },
  stepboard: {
    sectionLabel: "Сумма шагов сообщества Stepboard",
    counterLabel: "{total} шагов пройдено сообществом Steps",
    footer: "Всего шагов участников Stepboard",
  },
};

export default ru;

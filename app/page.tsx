import Image from "next/image";

export default function Home() {
  const screenshots = [
    "/screenshots/screenshot1.png",
    "/screenshots/screenshot2.png",
    "/screenshots/screenshot3.png",
    "/screenshots/screenshot4.png",
    "/screenshots/screenshot5.png",
    "/screenshots/screenshot6.png",
    "/screenshots/screenshot7.png",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden selection:bg-blue-500/30">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center z-10">

        {/* App Icon */}
        <div className="relative w-24 h-24 mb-8 shadow-xl rounded-[22px] overflow-hidden">
          <Image
            src="/app_icon.png"
            alt="Steps App Icon"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
          Steps: Workout & Pedometer
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          Your complete step and workout tracking companion with Apple Watch sync, beautiful charts, workout analytics, and personalized goals to keep you moving.
        </p>

        {/* App Store Badge */}
        <a
          href="https://apps.apple.com/us/app/steps-workout-pedometer/id6746096378"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105 active:scale-95 mb-16 inline-block"
          aria-label="Download on the App Store"
          data-fast-goal="open-app-store"
        >
          <Image
            src="/badge_light_mode.svg"
            alt="Download on the App Store"
            width={120}
            height={40}
            className="h-12 w-auto dark:hidden"
          />
          <Image
            src="/badge_dark_mode.svg"
            alt="Download on the App Store"
            width={120}
            height={40}
            className="h-12 w-auto hidden dark:block"
          />
        </a>

        {/* Carousel Section */}
        <div className="w-full max-w-[1400px] relative group">
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-32 scrollbar-hide -mx-4 md:mx-0">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="snap-center shrink-0 first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0"
              >
                <div className="relative w-[280px] md:w-[320px] aspect-[1170/2532] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={src}
                    alt={`App screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority={index < 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const CALCULATOR_LINKS = [
  { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
  { title: "Walking Time Calculator", href: "/tools/walking-time-calculator" },
  { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
  { title: "BMI Calculator", href: "/tools/bmi-calculator" },
];

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 md:gap-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/app_icon.png"
                alt="Steps"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Track your daily steps and reach your fitness goals.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              © {currentYear} {SITE_CONFIG.shortName} · Built by runners 🏃
            </p>
          </div>

          {/* Calculators column */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Fitness Calculators
            </h3>
            <ul className="space-y-2">
              {CALCULATOR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* App Store badge */}
            <a
              href={SITE_CONFIG.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 transition-transform hover:scale-105 active:scale-95"
              aria-label="Download on the App Store"
            >
              <Image
                src="/badge_light_mode.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto dark:hidden"
              />
              <Image
                src="/badge_dark_mode.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto hidden dark:block"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

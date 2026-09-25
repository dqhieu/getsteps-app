import Image from "next/image";
import Link from "next/link";
import { ContactLink } from "@/components/contact-link";
import { AppStoreBadge } from "@/components/app-store-badge";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { docsPath, localizePath } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { getToolsMessages, type ToolSlug } from "@/lib/i18n/messages/tools";

const STEP_WALKING_TOOLS: ToolSlug[] = [
  "step-distance-calculator",
  "steps-to-calories-calculator",
  "steps-per-mile-calculator",
  "walking-calories-calculator",
  "walking-time-calculator",
  "daily-step-goal-calculator",
  "weight-loss-walking-calculator",
  "activity-to-steps-converter",
  "distance-equivalent-calculator",
];

const RUNNING_FITNESS_TOOLS: ToolSlug[] = [
  "running-pace-calculator",
  "marathon-pace-predictor",
  "race-time-predictor",
  "training-pace-zones",
  "pace-to-speed-converter",
  "vo2-max-calculator",
  "heart-rate-zones-calculator",
  "resting-heart-rate-calculator",
  "bmi-calculator",
  "body-fat-calculator",
  "tdee-calculator",
  "macro-calculator",
  "calorie-deficit-calculator",
  "water-intake-calculator",
];

const LINK_CLASS =
  "text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors";

// The English footer uses shorter labels than the directory titles for these.
const ENGLISH_TOOL_LABELS: Partial<Record<ToolSlug, string>> = {
  "body-fat-calculator": "Body Fat Calculator",
  "marathon-pace-predictor": "Marathon Pace Predictor",
};

export function LandingFooter({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const currentYear = new Date().getFullYear();
  const t = getCommonMessages(locale);
  const tools = getToolsMessages(locale).tools;

  const toolLabel = (slug: ToolSlug) =>
    (locale === DEFAULT_LOCALE && ENGLISH_TOOL_LABELS[slug]) || tools[slug].title;

  const toolColumn = (title: string, slugs: ToolSlug[]) => (
    <div>
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={localizePath(locale, `/tools/${slug}`)} className={LINK_CLASS}>
              {toolLabel(slug)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_auto_auto_auto] gap-8 md:gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/app_icon.png"
                alt="Steps"
                width={32}
                height={32}
                className="rounded-lg ring-1 ring-black/10 dark:ring-white/10"
              />
              <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              © {currentYear} {SITE_CONFIG.shortName} · {t.footer.builtBy}
            </p>
          </div>

          {toolColumn(t.footer.stepWalkingTools, STEP_WALKING_TOOLS)}
          {toolColumn(t.footer.runningFitnessTools, RUNNING_FITNESS_TOOLS)}

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={LINK_CLASS}>
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/blog" className={LINK_CLASS}>
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link href="/for" className={LINK_CLASS}>
                  {t.footer.stepsFor}
                </Link>
              </li>
              <li>
                <Link href="/press" className={LINK_CLASS}>
                  {t.footer.press}
                </Link>
              </li>
              <li>
                <Link href="/feedback" className={LINK_CLASS}>
                  {t.footer.feedback}
                </Link>
              </li>
              <li>
                <Link href={docsPath(locale)} className={LINK_CLASS}>
                  {t.footer.docs}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={LINK_CLASS}>
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className={LINK_CLASS}>
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <ContactLink email={SITE_CONFIG.supportEmail} className={LINK_CLASS}>
                  {t.footer.contact}
                </ContactLink>
              </li>
            </ul>

            <AppStoreBadge
              locale={locale}
              className="inline-block mt-6 transition-transform duration-150 hover:scale-105 active:scale-[0.96]"
              imageClassName="h-10 w-auto"
            />
          </div>
        </div>

        {/* Recent activity widget */}
        <div className="mt-8 flex justify-end -mr-12">
          <iframe
            src="https://datafa.st/widgets/6925318ce43b7634d244dc04/recent?mainTextSize=16&primaryColor=%23ee772f"
            style={{ background: "transparent", border: "none", width: "100%", height: "400px", maxWidth: "400px" }}
            frameBorder="0"
            title="DataFast Widget"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}

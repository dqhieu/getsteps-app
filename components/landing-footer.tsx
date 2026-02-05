import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/app_icon.png"
              alt="Steps"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} {SITE_CONFIG.shortName}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/tools/step-distance-calculator"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/blog"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/privacy"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Terms
            </Link>
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {SITE_CONFIG.supportEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

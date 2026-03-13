import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-white/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
            ClawX
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            Own the runtime. Keep the data local. Let ClawX run the work.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
            Product
          </p>
          <div className="flex flex-col gap-2 text-sm text-[var(--ink)]">
            <Link href="/deploy">Deploy</Link>
            <Link href="/install">Install</Link>
            <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
            Legal
          </p>
          <div className="flex flex-col gap-2 text-sm text-[var(--ink)]">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

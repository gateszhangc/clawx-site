import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(5,7,13,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.28em] text-[var(--ink)] uppercase"
        >
          <span className="flex size-10 items-center justify-center rounded-[1.1rem] border border-[var(--line-strong)] bg-[linear-gradient(180deg,rgba(214,255,87,0.18),rgba(10,15,24,0.95))] shadow-[0_18px_40px_-28px_rgba(214,255,87,0.5)]">
            <span className="font-[family:var(--font-display)] text-lg font-bold">
              CX
            </span>
          </span>
          <span>ClawX</span>
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--signal)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm">
          <Link
            href={siteConfig.deployUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="header-deploy-cta"
          >
            Deploy in 1 minute
          </Link>
        </Button>
      </div>
    </header>
  );
}

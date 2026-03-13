import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  CloudOff,
  Download,
  ExternalLink,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { DeployDemo } from "@/components/site/deploy-demo";
import { Button } from "@/components/ui/button";
import {
  comparisonRows,
  faqItems,
  featureCards,
  proofItems,
  siteConfig,
  useCases,
} from "@/lib/site-config";

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted)] uppercase shadow-sm">
                <BadgeCheck className="size-4 text-[var(--signal-deep)]" />
                Open source. Self-hosted. Built on OpenClaw.
              </div>
              <div className="space-y-4">
                <p className="eyebrow">Deploy-first AI operations</p>
                <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-7xl">
                  Deploy ClawX in 1 minute.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                  Run a local-first AI research assistant that keeps monitoring,
                  collecting, and delivering updates for you, 24/7.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link
                  href={siteConfig.deployUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-primary-cta"
                >
                  Deploy in 1 minute
                  <ExternalLink />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/install" data-testid="hero-secondary-cta">
                  Install locally
                  <Download />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-semibold tracking-[0.17em] text-[var(--muted)] uppercase">
              <span className="rounded-full border border-[var(--line)] bg-white/75 px-4 py-2">
                Set tasks once
              </span>
              <span className="rounded-full border border-[var(--line)] bg-white/75 px-4 py-2">
                Let ClawX keep working
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="panel-shell relative overflow-hidden p-6 md:p-8">
              <div className="absolute inset-x-6 top-6 flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="size-2.5 rounded-full bg-[#ffd166]" />
                <span className="size-2.5 rounded-full bg-[#8bc34a]" />
              </div>
              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between gap-4 rounded-[28px] border border-[var(--line-strong)] bg-white/90 p-4">
                  <div>
                    <p className="eyebrow">Control Surface</p>
                    <h2 className="font-[family:var(--font-display)] text-2xl text-[var(--ink)]">
                      24/7 signal flow
                    </h2>
                  </div>
                  <span className="rounded-full bg-[var(--signal)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--ink)] uppercase">
                    active
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-[1fr_0.78fr]">
                  <div className="rounded-[30px] border border-[var(--line-strong)] bg-[var(--panel)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-[var(--ink)]">
                      <Layers3 className="size-4 text-[var(--signal-deep)]" />
                      Morning run
                    </div>
                    <div className="space-y-3 text-sm text-[var(--muted)]">
                      <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3">
                        <span>Source sweep</span>
                        <span>14 feeds</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3">
                        <span>Model route</span>
                        <span>Claude / GPT</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3">
                        <span>Delivery</span>
                        <span>Slack digest</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="metric-card min-h-28">
                      <span>Next dispatch</span>
                      <strong>11 min</strong>
                    </div>
                    <div className="metric-card min-h-28">
                      <span>Tracked channels</span>
                      <strong>20+</strong>
                    </div>
                    <div className="metric-card min-h-28">
                      <span>Mode</span>
                      <strong>Local-first</strong>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[26px] border border-[var(--line)] bg-white/75 p-4">
                    <CloudOff className="mb-3 size-5 text-[var(--signal-deep)]" />
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      No cloud lock-in
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-[var(--line)] bg-white/75 p-4">
                    <ShieldCheck className="mb-3 size-5 text-[var(--signal-deep)]" />
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      Data stays closer
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-[var(--line)] bg-white/75 p-4">
                    <Clock3 className="mb-3 size-5 text-[var(--signal-deep)]" />
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      Ongoing execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="grid gap-3 rounded-[30px] border border-[var(--line)] bg-white/60 p-4 md:grid-cols-5">
          {proofItems.map((item) => (
            <div
              key={item}
              className="rounded-[22px] border border-[var(--line)] bg-white/85 px-4 py-3 text-sm font-medium text-[var(--ink)] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-8 max-w-3xl space-y-4">
          <SectionLabel>Why teams remember it</SectionLabel>
          <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
            The homepage sells deployment, but the product earns the revisit.
          </h2>
          <p className="text-base leading-8 text-[var(--muted)]">
            ClawX should look like a command center with editorial discipline:
            fast to deploy, easy to scan, and specific about what happens after
            the first launch.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature, index) => (
            <article
              key={feature.title}
              className="panel-shell group p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--panel)] font-[family:var(--font-display)] text-xl font-bold text-[var(--ink)]">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <DeployDemo />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-4">
            <SectionLabel>Deploy-first narrative</SectionLabel>
            <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
              This is not another chat tab with a better headline.
            </h2>
            <p className="text-base leading-8 text-[var(--muted)]">
              The important contrast is operational: chat tools wait for prompts.
              ClawX keeps executing after the setup is done.
            </p>
          </div>

          <div className="panel-shell overflow-hidden p-3">
            <div className="grid grid-cols-[1.1fr_1.1fr_1.4fr] gap-3 rounded-[28px] bg-[var(--panel)] p-4 text-sm">
              <div className="px-3 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                Signal
              </div>
              <div className="px-3 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                Chat tools
              </div>
              <div className="px-3 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
                ClawX
              </div>
              {comparisonRows.map((row) => (
                <div className="contents" key={row.label}>
                  <div className="rounded-2xl border border-[var(--line)] bg-white/80 px-3 py-4 font-medium text-[var(--ink)]">
                    {row.label}
                  </div>
                  <div className="rounded-2xl border border-[var(--line)] bg-white/60 px-3 py-4 text-[var(--muted)]">
                    {row.chat}
                  </div>
                  <div className="rounded-2xl border border-[rgba(190,246,128,0.6)] bg-[rgba(190,246,128,0.2)] px-3 py-4 font-semibold text-[var(--ink)]">
                    {row.clawx}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-8 max-w-2xl space-y-4">
          <SectionLabel>Use cases</SectionLabel>
          <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
            Built for people who need signal on a schedule.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="panel-shell p-6">
              <h3 className="text-2xl font-semibold text-[var(--ink)]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {useCase.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
              Questions the homepage should answer before the first click.
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="panel-shell group overflow-hidden p-0 open:bg-white/95"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-[var(--ink)] marker:hidden">
                  {item.question}
                  <span className="text-[var(--muted)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm leading-7 text-[var(--muted)]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="panel-shell relative overflow-hidden px-6 py-10 md:px-10 md:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(190,246,128,0.24),transparent_34%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <SectionLabel>Final CTA</SectionLabel>
              <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
                Own the runtime. Keep the data local. Let ClawX run the work.
              </h2>
              <p className="text-base leading-8 text-[var(--muted)]">
                Move from a one-time setup to continuous research with a deploy
                path that points straight at the product.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={siteConfig.deployUrl} target="_blank" rel="noreferrer">
                  Deploy in 1 minute
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/deploy">See deployment notes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

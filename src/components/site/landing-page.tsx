import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BellDot,
  Bot,
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
  return (
    <div className="inline-flex items-center gap-3">
      <span className="status-dot" />
      <p className="eyebrow">{children}</p>
    </div>
  );
}

const heroStats = [
  { label: "Launch path", value: "01 min" },
  { label: "Execution", value: "24/7" },
  { label: "Delivery", value: "Slack + more" },
];

const heroSignals = [
  {
    icon: CloudOff,
    title: "No cloud lock-in",
    body: "Deploy fast without giving up runtime ownership.",
  },
  {
    icon: ShieldCheck,
    title: "Closer data boundary",
    body: "Local-first by default, self-managed by design.",
  },
  {
    icon: Clock3,
    title: "Continuous operation",
    body: "Tasks keep running after the first setup click.",
  },
];

const runtimeQueue = [
  { label: "Source sweep", value: "18 feeds online" },
  { label: "Reasoning route", value: "Claude + GPT" },
  { label: "Digest cadence", value: "Every 15 min" },
  { label: "Outbound rail", value: "Slack / Telegram" },
];

const runtimeTimeline = [
  {
    time: "08:31 UTC",
    title: "Market radar refreshed",
    detail: "4 new catalysts ranked and routed to the desk channel.",
  },
  {
    time: "08:42 UTC",
    title: "Research brief compiled",
    detail: "Sources merged into a daily operating summary for the team.",
  },
  {
    time: "08:48 UTC",
    title: "Launch tracker diffed",
    detail: "Homepage copy shifts captured before the end-of-day digest.",
  },
];

const useCaseOutputs = [
  "Pre-market digests",
  "Daily executive brief",
  "Competitor change alerts",
];

export function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-8 pt-12 md:px-8 md:pb-10 md:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-8">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(10,14,24,0.78)] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)]">
              <BadgeCheck className="size-4 text-[var(--signal)]" />
              Open source agent runtime. Local-first control.
            </div>

            <div className="space-y-5">
              <SectionLabel>Deploy-first AI operations</SectionLabel>
              <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl leading-[0.92] tracking-[-0.07em] text-[var(--ink)] sm:text-6xl md:text-7xl xl:text-[5.6rem]">
                Deploy ClawX in 1 minute.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted-copy)] md:text-xl">
                Run a local-first AI research assistant that keeps monitoring,
                collecting, and delivering updates for you, even after the tab
                is closed.
              </p>
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

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="metric-card min-h-32">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {heroSignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div
                    key={signal.title}
                    className="terminal-row p-5 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.88)]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-2xl border border-[rgba(214,255,87,0.22)] bg-[rgba(214,255,87,0.08)] text-[var(--signal)]">
                        <Icon className="size-4" />
                      </span>
                      <p className="text-sm font-semibold tracking-[0.08em] text-[var(--ink)] uppercase">
                        {signal.title}
                      </p>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-[var(--muted-copy)]">
                      {signal.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10">
            <div className="panel-shell overflow-hidden p-5 md:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,255,87,0.55),rgba(111,146,255,0.48),transparent)]" />
              <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(214,255,87,0.16),transparent_68%)] blur-2xl" />
              <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(111,146,255,0.18),transparent_70%)] blur-2xl" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#ff7a7a]" />
                    <span className="size-2.5 rounded-full bg-[#ffd166]" />
                    <span className="size-2.5 rounded-full bg-[#c2ff5c]" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(214,255,87,0.22)] bg-[rgba(214,255,87,0.1)] px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[var(--signal)] uppercase">
                    <span className="status-dot" />
                    Runtime active
                  </div>
                </div>

                <div className="space-y-3">
                  <SectionLabel>Control Surface</SectionLabel>
                  <h2 className="max-w-lg font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.05em] text-[var(--ink)] md:text-[2.6rem]">
                    AI command center already running.
                  </h2>
                  <p className="max-w-xl text-sm leading-7 text-[var(--muted-copy)] md:text-base">
                    The homepage should feel like a live control room: incoming
                    signals, scheduled execution, outbound delivery, and a clear
                    reason to deploy now rather than bookmark later.
                  </p>
                </div>

                <div className="signal-divider" />

                <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-4">
                    <div className="terminal-row p-5">
                      <div className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[var(--ink)] uppercase">
                        <Layers3 className="size-4 text-[var(--signal)]" />
                        Live orchestration
                      </div>
                      <div className="space-y-3">
                        {runtimeQueue.map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[rgba(12,18,28,0.78)] px-4 py-3"
                          >
                            <span className="text-sm text-[var(--muted-copy)]">
                              {item.label}
                            </span>
                            <span className="text-sm font-semibold text-[var(--ink)]">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="terminal-row p-5">
                      <div className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[var(--ink)] uppercase">
                        <Bot className="size-4 text-[var(--blue-glow)]" />
                        Mission brief
                      </div>
                      <p className="text-sm leading-7 text-[var(--muted-copy)]">
                        Set the workflow once, keep the stack under your own
                        control, and let ClawX continue monitoring, summarizing,
                        and dispatching after the first launch.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                      {proofItems.slice(0, 3).map((item, index) => (
                        <div key={item} className="metric-card min-h-28">
                          <span>0{index + 1}</span>
                          <strong className="text-[1.35rem] leading-tight">
                            {item}
                          </strong>
                        </div>
                      ))}
                    </div>

                    <div className="terminal-row p-5">
                      <div className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[var(--ink)] uppercase">
                        <BellDot className="size-4 text-[var(--signal)]" />
                        Timeline
                      </div>
                      <div className="space-y-3">
                        {runtimeTimeline.map((item) => (
                          <div
                            key={`${item.time}-${item.title}`}
                            className="rounded-[1.35rem] border border-[var(--line)] bg-[rgba(12,18,28,0.8)] px-4 py-4"
                          >
                            <div className="mb-2 flex items-center justify-between gap-4 text-[11px] font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase">
                              <span>{item.time}</span>
                              <span>Dispatched</span>
                            </div>
                            <p className="text-sm font-semibold text-[var(--ink)]">
                              {item.title}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[var(--muted-copy)]">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-6 md:px-8 md:pb-10">
        <div className="panel-shell p-3">
          <div className="grid gap-3 md:grid-cols-5">
            {proofItems.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(11,16,26,0.88)] px-4 py-4"
              >
                <p className="mb-2 text-[11px] font-semibold tracking-[0.22em] text-[var(--muted-copy)] uppercase">
                  Signal 0{index + 1}
                </p>
                <p className="text-sm font-semibold leading-6 text-[var(--ink)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-5">
            <SectionLabel>Why teams remember it</SectionLabel>
            <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-5xl">
              The interface looks like work already in motion.
            </h2>
            <p className="max-w-xl text-base leading-8 text-[var(--muted-copy)]">
              A deploy-first site only works if the product surface feels
              operational from the first glance. The goal is not a prettier
              chat wrapper. The goal is a control room that implies schedule,
              ownership, and output.
            </p>
            <div className="panel-shell p-5">
              <p className="text-sm leading-7 text-[var(--muted-copy)]">
                ClawX should feel editorial in layout and technical in posture:
                high-contrast, tightly paced, and explicit about what happens
                after deployment.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featureCards.map((feature, index) => (
              <article
                key={feature.title}
                className={`panel-shell p-6 ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--muted-copy)] uppercase">
                    <span className="status-dot" />
                    Module 0{index + 1}
                  </span>
                  <span className="font-[family:var(--font-code)] text-xs text-[var(--muted-copy)]">
                    /feature/{index + 1}
                  </span>
                </div>
                <h3 className="max-w-lg text-2xl font-semibold leading-tight text-[var(--ink)]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted-copy)]">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <DeployDemo />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="space-y-5">
            <SectionLabel>Deploy-first narrative</SectionLabel>
            <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-5xl">
              This is not another chat tab with a sharper headline.
            </h2>
            <p className="text-base leading-8 text-[var(--muted-copy)]">
              The key contrast is operational. Chat tools wait for prompts.
              ClawX is built for recurring execution, persistent monitoring, and
              delivery outside the original tab.
            </p>
            <div className="terminal-row p-5">
              <p className="text-sm leading-7 text-[var(--muted-copy)]">
                If the page only says “AI assistant,” it disappears into the
                category. If it shows timing, dispatch, and control, it becomes
                memorable.
              </p>
            </div>
          </div>

          <div className="panel-shell overflow-hidden p-4 md:p-5">
            <div className="mb-4 grid grid-cols-[0.9fr_1fr_1.1fr] gap-3 px-2 text-[11px] font-semibold tracking-[0.2em] text-[var(--muted-copy)] uppercase">
              <div>Signal</div>
              <div>Chat tools</div>
              <div className="flex items-center gap-2 text-[var(--signal)]">
                <span className="status-dot" />
                ClawX
              </div>
            </div>
            <div className="space-y-3">
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="terminal-row grid gap-3 p-3 md:grid-cols-[0.9fr_1fr_1.1fr] md:items-stretch"
                >
                  <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(12,18,28,0.82)] px-4 py-4 text-sm font-semibold text-[var(--ink)]">
                    {row.label}
                  </div>
                  <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(12,18,28,0.62)] px-4 py-4 text-sm leading-6 text-[var(--muted-copy)]">
                    {row.chat}
                  </div>
                  <div className="rounded-[1.25rem] border border-[rgba(214,255,87,0.26)] bg-[linear-gradient(180deg,rgba(214,255,87,0.16),rgba(214,255,87,0.05))] px-4 py-4 text-sm font-semibold leading-6 text-[var(--ink)]">
                    {row.clawx}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-5">
            <SectionLabel>Use cases</SectionLabel>
            <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-5xl">
              Built for operators who need signal on a schedule.
            </h2>
            <p className="text-base leading-8 text-[var(--muted-copy)]">
              The product shines when it turns scattered monitoring into an
              owned cadence. These are not vague personas. They are recurring
              workflows with a defined destination.
            </p>
          </div>

          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <article key={useCase.title} className="panel-shell p-5 md:p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[var(--muted-copy)] uppercase">
                      <span className="status-dot" />
                      Workflow 0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--ink)]">
                      {useCase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-copy)]">
                      {useCase.body}
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-[rgba(214,255,87,0.18)] bg-[rgba(214,255,87,0.08)] px-4 py-3 text-sm font-semibold text-[var(--ink)]">
                    {useCaseOutputs[index]}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-5xl">
              Questions the page should answer before the first click.
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="panel-shell group overflow-hidden open:border-[rgba(214,255,87,0.22)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-[var(--ink)] marker:hidden">
                  {item.question}
                  <span className="text-[var(--muted-copy)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm leading-7 text-[var(--muted-copy)]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="panel-shell overflow-hidden px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="space-y-4">
              <SectionLabel>Final CTA</SectionLabel>
              <h2 className="font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-5xl">
                Own the runtime. Keep the data local. Let ClawX run the work.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted-copy)]">
                Move from a one-time setup to continuous research with a deploy
                path that points straight into a live operating surface.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="metric-card min-h-28">
                  <span>Deploy</span>
                  <strong>easyclaw.pro</strong>
                </div>
                <div className="metric-card min-h-28">
                  <span>Fallback path</span>
                  <strong>Local install</strong>
                </div>
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
        </div>
      </section>
    </main>
  );
}

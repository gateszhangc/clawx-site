import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { deploySteps, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Deploy",
  description:
    "Go from zero to a running ClawX workspace in 1 minute and point the runtime at your own recurring research workflows.",
  alternates: {
    canonical: "/deploy",
  },
};

export default function DeployPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">Deploy ClawX</p>
          <h1 className="font-[family:var(--font-display)] text-5xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-7xl">
            Go from zero to a running ClawX workspace in 1 minute.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted-copy)]">
            Deploy ClawX, add your model credentials, and start running
            recurring research workflows from a self-managed environment. The
            fast path points to a real deployment entry on easyclaw.pro.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link
                href={siteConfig.deployUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="deploy-page-primary-cta"
              >
                Deploy in 1 minute
                <ExternalLink />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/install">
                Install locally
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="panel-shell p-6 md:p-8">
          <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-[var(--ink)]">
            <ShieldCheck className="size-4 text-[var(--signal-deep)]" />
            What this page promises
          </div>
          <div className="space-y-4 text-sm leading-7 text-[var(--muted-copy)]">
            <p>
              The deployment CTA is intentionally singular: one prominent action,
              one destination, one fast path.
            </p>
            <p>
              After launch, users still need to connect their preferred model
              provider and define the first recurring task, but the stack entry
              point is not hidden behind docs sprawl.
            </p>
            <p>
              Prefer a desktop-first setup? Use the install path instead and
              manage everything through the local application.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-3">
        {deploySteps.map((step, index) => (
          <article key={step.label} className="panel-shell p-6">
            <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--panel)] font-[family:var(--font-display)] text-xl font-bold text-[var(--ink)]">
              0{index + 1}
            </div>
            <h2 className="text-xl font-semibold text-[var(--ink)]">{step.label}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted-copy)]">
              {step.detail}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="panel-shell p-6 md:p-8">
          <p className="eyebrow">After the deploy click</p>
          <h2 className="mt-3 font-[family:var(--font-display)] text-3xl leading-tight text-[var(--ink)] md:text-4xl">
            The first minute should end with a live surface, not a setup maze.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted-copy)] md:text-base">
            <p>
              ClawX is built to move quickly from launch to operations. The goal
              is not a flashy button with no follow-through; the goal is a
              working workspace that can monitor, summarize, and route updates.
            </p>
            <p>
              Use the deploy path when you want a direct runtime entry. Use the
              install path when you want the desktop-first experience.
            </p>
          </div>
        </div>

        <div className="panel-shell p-6 md:p-8">
          <p className="eyebrow">Quick checks</p>
          <div className="mt-4 space-y-3">
            {[
              "Deployment opens in a new tab to easyclaw.pro",
              "No fake one-click tooling claims on the site",
              "Install and deploy remain clearly separate user paths",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-4"
              >
                <CheckCircle2 className="mt-0.5 size-4 text-[var(--signal-deep)]" />
                <p className="text-sm leading-6 text-[var(--ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

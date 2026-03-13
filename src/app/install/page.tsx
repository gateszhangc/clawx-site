import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { installSteps, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Install Locally",
  description:
    "Install ClawX locally with the desktop release flow, then connect your model provider and recurring tasks.",
  alternates: {
    canonical: "/install",
  },
};

export default function InstallPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">Install locally</p>
          <h1 className="font-[family:var(--font-display)] text-5xl leading-none tracking-[-0.06em] text-[var(--ink)] md:text-7xl">
            Prefer the desktop path? Start from the release build.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted-copy)]">
            ClawX also ships as a desktop interface for OpenClaw AI agents.
            Install it locally when you want the most direct on-machine
            experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={siteConfig.releasesUrl} target="_blank" rel="noreferrer">
                Download release
                <Download />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
                View GitHub
                <Github />
              </Link>
            </Button>
          </div>
        </div>

        <div className="panel-shell p-6 md:p-8">
          <p className="eyebrow">Install flow</p>
          <div className="mt-4 space-y-4">
            {installSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-[var(--line)] bg-white/85 px-4 py-4"
              >
                <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase">
                  Step 0{index + 1}
                </p>
                <p className="text-sm leading-7 text-[var(--ink)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 panel-shell p-6 md:p-8">
        <p className="eyebrow">When to choose install over deploy</p>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {[
            "You want the official desktop workflow and release artifacts.",
            "You prefer a local GUI from the first run instead of a hosted deployment entry.",
            "You want the shortest path to guided setup and later developer mode access.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-[var(--line)] bg-white/80 p-5 text-sm leading-7 text-[var(--muted-copy)]"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="outline">
            <Link href="/deploy">
              Compare with deploy flow
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

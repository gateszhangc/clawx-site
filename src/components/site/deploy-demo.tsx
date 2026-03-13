"use client";

import { useMemo, useState, useTransition } from "react";
import { ArrowRight, BellDot, Bot, Clock3, Radar, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { demoOptions, demoSummaries } from "@/lib/site-config";

function buildSummary(source: string, cadence: string, channel: string) {
  return (
    demoSummaries[`${source}|${cadence}|${channel}`] ??
    `${source} is scheduled for ${cadence}. ClawX will collect updates, summarize the signal, and deliver the digest to ${channel}.`
  );
}

export function DeployDemo() {
  const [source, setSource] = useState(demoOptions.sources[0]);
  const [cadence, setCadence] = useState(demoOptions.cadences[0]);
  const [channel, setChannel] = useState(demoOptions.channels[0]);
  const [isPending, startTransition] = useTransition();

  const summary = useMemo(
    () => buildSummary(source, cadence, channel),
    [cadence, channel, source],
  );

  const activate = (
    type: "source" | "cadence" | "channel",
    value: string,
  ) => {
    startTransition(() => {
      if (type === "source") setSource(value);
      if (type === "cadence") setCadence(value);
      if (type === "channel") setChannel(value);
    });
  };

  return (
    <section
      id="demo"
      className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
      data-testid="deploy-demo"
    >
      <div className="panel-shell space-y-6 p-6 md:p-8">
        <div className="space-y-3">
          <p className="eyebrow">Deployment Preview</p>
          <h2 className="font-[family:var(--font-display)] text-3xl leading-tight text-[var(--ink)] md:text-4xl">
            Turn one setup into continuous research.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
            This is the flow users remember: choose the signal, define the
            cadence, route the output, and let ClawX keep running after the tab
            is closed.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
              <Radar className="size-4" />
              Source
            </div>
            {demoOptions.sources.map((item) => (
              <button
                key={item}
                type="button"
                data-testid={`source-option-${item.replaceAll(" ", "-").toLowerCase()}`}
                onClick={() => activate("source", item)}
                className={`choice-chip ${source === item ? "choice-chip-active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
              <Clock3 className="size-4" />
              Cadence
            </div>
            {demoOptions.cadences.map((item) => (
              <button
                key={item}
                type="button"
                data-testid={`cadence-option-${item.replaceAll(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`}
                onClick={() => activate("cadence", item)}
                className={`choice-chip ${cadence === item ? "choice-chip-active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
              <BellDot className="size-4" />
              Channel
            </div>
            {demoOptions.channels.map((item) => (
              <button
                key={item}
                type="button"
                data-testid={`channel-option-${item.toLowerCase()}`}
                onClick={() => activate("channel", item)}
                className={`choice-chip ${channel === item ? "choice-chip-active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="panel-shell relative overflow-hidden p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(190,246,128,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,78,216,0.15),transparent_30%)]" />
        <div className="relative space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Live Panel</p>
              <h3
                className="font-[family:var(--font-display)] text-2xl text-[var(--ink)]"
                data-testid="demo-summary-heading"
              >
                {source}
              </h3>
            </div>
            <div className="rounded-full border border-[var(--line-strong)] bg-white/90 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
              {isPending ? "Refreshing" : "Running"}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="metric-card">
              <span>Cadence</span>
              <strong>{cadence}</strong>
            </div>
            <div className="metric-card">
              <span>Delivery</span>
              <strong>{channel}</strong>
            </div>
            <div className="metric-card">
              <span>Mode</span>
              <strong>Autonomous</strong>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--line-strong)] bg-[var(--panel)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-[var(--ink)]">
              <Bot className="size-4 text-[var(--signal-deep)]" />
              Summary preview
            </div>
            <p
              className="text-sm leading-7 text-[var(--muted)] md:text-base"
              data-testid="demo-summary-body"
            >
              {summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="button">
              <Sparkles />
              Trigger next run
            </Button>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--muted)] uppercase">
              Digest routed to {channel}
              <ArrowRight className="size-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

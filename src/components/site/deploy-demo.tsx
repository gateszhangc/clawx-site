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
      className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]"
      data-testid="deploy-demo"
    >
      <div className="panel-shell space-y-6 p-6 md:p-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="status-dot" />
            <p className="eyebrow">Deployment Preview</p>
          </div>
          <h2 className="font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.04em] text-[var(--ink)] md:text-4xl">
            Turn one setup into continuous research.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted-copy)] md:text-base">
            Pick the signal, lock the cadence, route the output, and preview
            the exact kind of operating summary ClawX should keep shipping after
            deployment.
          </p>
        </div>

        <div className="space-y-4">
          <div className="terminal-row p-4">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase">
              <Radar className="size-4 text-[var(--signal)]" />
              Source
            </div>
            <div className="grid gap-3">
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
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="terminal-row p-4">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase">
                <Clock3 className="size-4 text-[var(--blue-glow)]" />
                Cadence
              </div>
              <div className="grid gap-3">
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
            </div>

            <div className="terminal-row p-4">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase">
                <BellDot className="size-4 text-[var(--signal)]" />
                Channel
              </div>
              <div className="grid gap-3">
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
        </div>
      </div>

      <div className="panel-shell relative overflow-hidden p-6 md:p-8">
        <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(214,255,87,0.18),transparent_68%)] blur-2xl" />
        <div className="absolute -left-12 bottom-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(111,146,255,0.18),transparent_70%)] blur-2xl" />

        <div className="relative space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Live Panel</p>
              <h3
                className="mt-2 font-[family:var(--font-display)] text-3xl tracking-[-0.04em] text-[var(--ink)]"
                data-testid="demo-summary-heading"
              >
                {source}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(214,255,87,0.24)] bg-[rgba(214,255,87,0.1)] px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              <span className="status-dot" />
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

          <div className="terminal-row p-5">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[var(--ink)] uppercase">
              <Bot className="size-4 text-[var(--signal)]" />
              Summary preview
            </div>
            <p
              className="text-sm leading-7 text-[var(--muted-copy)] md:text-base"
              data-testid="demo-summary-body"
            >
              {summary}
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="terminal-row p-5">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase">
                Runbook
              </p>
              <div className="space-y-3">
                {[
                  `Watch ${source.toLowerCase()} sources`,
                  `Execute on ${cadence.toLowerCase()}`,
                  `Dispatch into ${channel}`,
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-[var(--line)] bg-[rgba(12,18,28,0.78)] px-4 py-3 text-sm text-[var(--ink)]"
                  >
                    <span className="mr-3 font-[family:var(--font-code)] text-[var(--muted-copy)]">
                      0{index + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="terminal-row p-5">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[var(--muted-copy)] uppercase">
                Output preview
              </p>
              <div className="space-y-3">
                {[
                  "New sources ranked by urgency",
                  "Digest includes linked evidence",
                  "Delivery stays outside the chat tab",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-[rgba(214,255,87,0.18)] bg-[rgba(214,255,87,0.08)] px-4 py-3 text-sm font-semibold text-[var(--ink)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="button">
              <Sparkles />
              Trigger next run
            </Button>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(12,18,28,0.78)] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--muted-copy)] uppercase">
              Digest routed to {channel}
              <ArrowRight className="size-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

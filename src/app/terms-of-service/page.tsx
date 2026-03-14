import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import { legalContact } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Review the ClawX terms of service for using the clawx.lol website, deployment links, release artifacts, and related launch content.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <article className="panel-shell p-6 md:p-10">
        <p className="eyebrow">Terms of Service</p>
        <h1 className="mt-3 font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
          Terms of Service
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-8 text-[var(--muted-copy)] md:text-base">
          <p>
            This site provides information about ClawX, links to deployment and
            installation paths, and related launch content. By using the site,
            you agree not to misuse the content, infrastructure, or linked
            resources.
          </p>
          <p>
            Product capabilities, release artifacts, and external deployment
            flows may change over time. Always validate the current deployment
            target and the associated documentation before running sensitive
            workloads.
          </p>
          <p>
            The site content is provided on an as-is basis without warranty.
            Users remain responsible for their own model-provider usage, API
            costs, infrastructure configuration, and compliance requirements.
          </p>
          <p>
            Questions about these terms can be directed to {legalContact}. This
            page is intended as a launch baseline and should be reviewed before
            production use in regulated or high-risk environments.
          </p>
        </div>
      </article>
    </main>
  );
}

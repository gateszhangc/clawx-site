import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import { legalContact } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the ClawX privacy policy for the clawx.lol website, analytics handling, support contact details, and local-first product context.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <article className="panel-shell p-6 md:p-10">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="mt-3 font-[family:var(--font-display)] text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-8 text-[var(--muted-copy)] md:text-base">
          <p>
            ClawX is presented as a local-first product. This website itself is
            a marketing and documentation surface; any product runtime behavior
            is governed by the environment where ClawX is installed or deployed.
          </p>
          <p>
            We may collect standard website analytics, request logs, and contact
            form information when available in order to improve the site and
            respond to support requests.
          </p>
          <p>
            If you choose to follow external deployment or release links, those
            destinations may operate under separate privacy practices. Review
            them before submitting credentials or personal information.
          </p>
          <p>
            For privacy-related questions, contact {legalContact}. This page is
            a baseline legal page for launch readiness and should be reviewed
            against your final production analytics and support stack.
          </p>
        </div>
      </article>
    </main>
  );
}

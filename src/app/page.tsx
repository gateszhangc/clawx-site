import type { Metadata } from "next";

import { LandingPage } from "@/components/site/landing-page";
import { createPageMetadata } from "@/lib/metadata";
import { faqItems, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  description:
    "Discover ClawX, the local-first AI research assistant for recurring monitoring, source collection, and multi-channel delivery.",
  keywords: [
    "ClawX",
    "what is ClawX",
    "ClawX AI assistant",
    "local-first AI research assistant",
    ...siteConfig.keywords,
  ],
});

export default function Home() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ClawX",
    description: siteConfig.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Windows, Linux",
    isAccessibleForFree: true,
    softwareRequirements: "AI provider credentials",
    brand: {
      "@type": "Brand",
      name: "ClawX",
    },
    url: siteConfig.url,
    downloadUrl: siteConfig.releasesUrl,
    codeRepository: siteConfig.githubUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <LandingPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
    </>
  );
}

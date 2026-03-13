import type { Metadata } from "next";

import { LandingPage } from "@/components/site/landing-page";
import { faqItems, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Deploy in 1 minute",
};

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

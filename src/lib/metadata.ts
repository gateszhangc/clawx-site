import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
};

const defaultImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: siteConfig.ogImageAlt,
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords,
}: PageMetadataInput = {}): Metadata {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const pageUrl =
    normalizedPath === "/"
      ? siteConfig.url
      : `${siteConfig.url}${normalizedPath}`;

  return {
    ...(title ? { title } : {}),
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}

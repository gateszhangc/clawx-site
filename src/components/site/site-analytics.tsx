import Script from "next/script";

const claritySnippet = (projectId: string) =>
  `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${projectId}");`;

type SiteAnalyticsProps = {
  clarityProjectId?: string;
  gaMeasurementId?: string;
};

export function SiteAnalytics({
  clarityProjectId,
  gaMeasurementId,
}: SiteAnalyticsProps) {
  return (
    <>
      {gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "${gaMeasurementId}", { anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {clarityProjectId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {claritySnippet(clarityProjectId)}
        </Script>
      ) : null}
    </>
  );
}

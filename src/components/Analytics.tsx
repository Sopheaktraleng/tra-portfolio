/**
 * Analytics — environment-gated tracking scripts.
 *
 * Scripts only render when the corresponding env vars are set,
 * so they are automatically skipped in development and CI.
 *
 * Required env vars (add to .env.local / deployment settings):
 *   NEXT_PUBLIC_UMAMI_URL         – full URL to your Umami script.js
 *   NEXT_PUBLIC_UMAMI_WEBSITE_ID  – Umami website ID
 *   NEXT_PUBLIC_MATOMO_URL        – base URL of your Matomo instance (with trailing slash)
 *   NEXT_PUBLIC_MATOMO_SITE_ID    – Matomo site ID (number as string)
 */

import Script from "next/script";

const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL;
const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

export default function Analytics() {
    return (
        <>
            {umamiUrl && umamiId && (
                <Script
                    id="umami"
                    src={umamiUrl}
                    data-website-id={umamiId}
                    strategy="afterInteractive"
                />
            )}

            {matomoUrl && matomoSiteId && (
                <Script id="matomo" strategy="afterInteractive">
                    {`
var _paq = window._paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="${matomoUrl}";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '${matomoSiteId}']);
  var d=document, g=d.createElement('script'),
      s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'matomo.js';
  s.parentNode.insertBefore(g,s);
})();
                    `}
                </Script>
            )}
        </>
    );
}

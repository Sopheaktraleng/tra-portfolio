/**
 * Analytics — tracking scripts with deployment-configurable settings.
 *
 * Umami uses the portfolio's Cloud Umami site by default. Environment
 * variables can override those defaults for another deployment.
 *
 * Optional env vars (add to .env.local / deployment settings):
 *   NEXT_PUBLIC_UMAMI_URL         – override the Umami script.js URL
 *   NEXT_PUBLIC_UMAMI_WEBSITE_ID  – override the Umami website ID
 *   NEXT_PUBLIC_MATOMO_URL        – base URL of your Matomo instance (with trailing slash)
 *   NEXT_PUBLIC_MATOMO_SITE_ID    – Matomo site ID (number as string)
 */

import Script from "next/script";

const umamiUrl =
    process.env.NEXT_PUBLIC_UMAMI_URL ?? "https://cloud.umami.is/script.js";
const umamiId =
    process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ??
    "9ef7d197-aa4f-49f5-8943-6336a0d6a951";
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

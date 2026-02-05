import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";

const Navbar = dynamic(() => import("@/components/Navbar"), {
    ssr: true,
    loading: () => <div aria-hidden className="h-14 w-full" />,
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Leng Sopheaktra",
        template: "%s · Leng Sopheaktra",
    },
    description:
        "Full-stack developer portfolio — building modern web apps with JavaScript, Python, PHP, Docker, AWS, and DevOps automation.",
    icons: {
        icon: [
            {
                url: "/icons/superhero.png",
                type: "image/png",
                sizes: "512x512",
            },
            { url: "/favicon.ico" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",

    openGraph: {
        type: "website",
        siteName: "Leng Sopheaktra Portfolio",
        url: siteUrl,
        title: "Leng Sopheaktra",
        description:
            "Full-stack developer portfolio — building modern web apps with JavaScript, Python, PHP, Docker, AWS, and DevOps automation.",
        images: ["/og.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Leng Sopheaktra",
        description:
            "Full-stack developer portfolio — building modern web apps with JavaScript, Python, PHP, Docker, AWS, and DevOps automation.",
        images: ["/og.png"],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const year = new Date().getFullYear();

    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        >
            <Script
                id="umami"
                src="https://8e1a919935ba.ngrok-free.app/script.js"
                data-website-id="d9ec3cba-3f7c-4309-8d2e-1e3e3ebed4a7"
                strategy="afterInteractive"
            />
            <Script id="matomo" strategy="afterInteractive">
                {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//localhost:8080/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), 
                  s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; 
              s.parentNode.insertBefore(g,s);
            })();
          `}
            </Script>
            <body className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
                <ThemeProvider>
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-black focus:text-white"
                    >
                        Skip to content
                    </a>

                    <Navbar />

                    <main
                        id="main-content"
                        className="flex-1 px-4 py-6 md:px-6 lg:px-8"
                    >
                        {children}
                    </main>

                    <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                        © {year} Leng Sopheaktra. All rights reserved.
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}

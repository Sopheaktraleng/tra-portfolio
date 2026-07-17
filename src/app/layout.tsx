import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk, Caveat, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Analytics from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";
import { StyleModeProvider } from "@/components/StyleModeProvider";
import LayoutContainer from "@/components/LayoutContainer";
import { LanguageProvider } from "@/components/LanguageProvider";
import SkipLink from "@/components/SkipLink";

const Navbar = dynamic(() => import("@/components/Navbar"), {
    ssr: true,
    loading: () => <div aria-hidden className="h-14 w-full" />,
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    display: "swap",
});

const caveat = Caveat({
    variable: "--font-scrapbook",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

const notoSansKhmer = Noto_Sans_Khmer({
    variable: "--font-khmer",
    subsets: ["khmer"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
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
    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
            className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${caveat.variable} ${notoSansKhmer.variable} antialiased h-full`}
        >
            <Analytics />
            <body className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
                <ThemeProvider>
                    <LanguageProvider>
                      <StyleModeProvider>
                        <LayoutContainer>
                            <SkipLink />

                            <Navbar />

                            <main
                                id="main-content"
                                className="flex-1 px-4 py-6 md:px-6 lg:px-8"
                            >
                                {children}
                            </main>

                            <Footer />
                        </LayoutContainer>
                      </StyleModeProvider>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

// app/layout.tsx
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

// Lazy-load client Navbar to reduce initial JS for the shell.
// We still server-render the rest of the layout.
const Navbar = dynamic(() => import("@/components/Navbar"), {
    ssr: true,
    loading: () => (
        <div aria-hidden className="h-14 w-full" /> // reserves space to avoid layout shift
    ),
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

export const metadata: Metadata = {
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
    // Optional: if you ship a manifest.json
    manifest: "/site.webmanifest",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
    openGraph: {
        title: "Leng Sopheaktra",
        description:
            "Full-stack developer portfolio — building modern web apps with JavaScript, Python, PHP, Docker, AWS, and DevOps automation.",
        type: "website",
        siteName: "Leng Sopheaktra Portfolio",
        images: ["/icons/superhero.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Leng Sopheaktra",
        description:
            "Full-stack developer portfolio — building modern web apps with JavaScript, Python, PHP, Docker, AWS, and DevOps automation.",
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    // themeColor removed here to avoid overriding the color-scheme-aware metadata.themeColor
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
            <body className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
                <ThemeProvider>
                    {/* Skip link comes first for better a11y tab order */}
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-black focus:text-white"
                    >
                        Skip to content
                    </a>

                    {/* Global navigation (client, dynamically loaded) */}
                    <Navbar />

                    {/* Main content area */}
                    <main
                        id="main-content"
                        className="flex-1 px-4 py-6 md:px-6 lg:px-8"
                    >
                        {children}
                    </main>

                    {/* Global footer */}
                    <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                        © {year} Leng Sopheaktra. All rights reserved.
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}

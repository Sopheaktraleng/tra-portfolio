"use client";

import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useStyleMode } from "@/components/StyleModeProvider";
import { cn } from "@/lib/cn";

export const Footer = () => {
    const { styleMode } = useStyleMode();
    const isScrapbook = styleMode === "scrapbook";

    return (
        <footer role="contentinfo" aria-label="Site footer" className="w-full select-none">
            {isScrapbook ? (
                <div className="w-full border-t-[3px] border-dashed border-slate-900 dark:border-white opacity-40" />
            ) : (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent dark:via-fuchsia-500/40" />
            )}

            <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            aria-hidden
                            className={cn(
                                isScrapbook
                                    ? "size-9 border-2 border-black dark:border-white bg-yellow-200 dark:bg-yellow-300 flex items-center justify-center rounded shadow-[2px_2px_0px_#000] rotate-[-5deg]"
                                    : "size-9 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 dark:from-violet-400/15 dark:to-fuchsia-400/15 border border-black/5 dark:border-white/10 backdrop-blur flex items-center justify-center"
                            )}
                        >
                            <span className={cn(
                                isScrapbook
                                    ? "text-xs font-bold text-slate-900"
                                    : "text-xs font-semibold tracking-wide text-violet-700 dark:text-fuchsia-200"
                            )}>
                                LS
                            </span>
                        </div>
                        <div className="leading-tight">
                            <span className="block text-sm md:text-base font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                                Leng Sopheaktra
                            </span>
                            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                                Full-Stack Developer
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <Social
                            href="https://www.facebook.com/leng.sopheaktra.71/"
                            label="Facebook"
                        >
                            <Facebook className="size-4" />
                        </Social>
                        <Social
                            href="https://github.com/Sopheaktraleng"
                            label="GitHub"
                        >
                            <Github className="size-4" />
                        </Social>
                        <Social
                            href="https://instagram.com/traa__a"
                            label="Instagram"
                        >
                            <Instagram className="size-4" />
                        </Social>
                        <Social
                            href="https://www.linkedin.com/in/leng-sopheaktra-828009321/"
                            label="LinkedIn"
                        >
                            <Linkedin className="size-4" />
                        </Social>
                    </div>
                </div>

                <div className="mt-5 h-px w-full bg-black/[0.06] dark:bg-white/[0.08]" />

                <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
                    <nav
                        aria-label="Footer navigation"
                        className={cn(
                            "flex items-center gap-1.5",
                            isScrapbook
                                ? "text-sm font-bold text-slate-750 dark:text-slate-350"
                                : "text-xs font-medium text-slate-500 dark:text-slate-400"
                        )}
                    >
                        <FooterLink href="/projects">Projects</FooterLink>
                        <Dot />
                        <FooterLink href="/experience">Experience</FooterLink>
                        <Dot />
                        <FooterLink href="/contact">Contact</FooterLink>
                    </nav>

                    <p className={cn(
                        isScrapbook
                            ? "text-sm font-bold text-slate-700 dark:text-slate-400"
                            : "text-[11px] leading-tight text-slate-400 dark:text-slate-500"
                    )}>
                        © {new Date().getFullYear()} Leng Sopheaktra. Made with ♥ All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

function Social({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    const { styleMode } = useStyleMode();
    const isScrapbook = styleMode === "scrapbook";
    const external = /^https?:\/\//i.test(href);
    const cls = isScrapbook
        ? "inline-flex items-center justify-center size-9 border-2 border-black dark:border-white bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] dark:hover:shadow-[3px_3px_0px_#fff] transition-all"
        : "social-icon-btn text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-fuchsia-400 hover:border-violet-500/30 dark:hover:border-fuchsia-400/30 transition-colors";

    return external ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cls}
        >
            {children}
            <span className="sr-only">{label}</span>
        </a>
    ) : (
        <Link href={href} className={cls} aria-label={label}>
            {children}
            <span className="sr-only">{label}</span>
        </Link>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const { styleMode } = useStyleMode();
    const isScrapbook = styleMode === "scrapbook";
    const external = /^https?:\/\//i.test(href);
    const cls = isScrapbook
        ? "px-2 py-1 text-sm font-bold text-slate-800 dark:text-slate-200 hover:underline hover:rotate-[1deg] transition-all"
        : "px-2.5 py-1 rounded-md text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-fuchsia-400 " +
          "hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-200 " +
          "focus:outline-none focus:ring-2 focus:ring-violet-300/70 dark:focus:ring-fuchsia-400/40";
    return external ? (
        <a href={href} className={cls}>
            {children}
        </a>
    ) : (
        <Link href={href} className={cls}>
            {children}
        </Link>
    );
}

function Dot() {
    return (
        <span aria-hidden className="text-slate-300 dark:text-slate-700 select-none">
            •
        </span>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Check, Menu, X } from "lucide-react";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import DisplayPreferences from "@/components/DisplayPreferences";
import { cn } from "@/lib/cn";
import { useStyleMode } from "@/components/StyleModeProvider";

const navLinks = [
    { href: "/home", labelKey: "nav.home" },
    { href: "/skills", labelKey: "nav.skills" },
    { href: "/education", labelKey: "nav.education" },
    { href: "/experience", labelKey: "nav.experience" },
    { href: "/projects", labelKey: "nav.projects" },
    { href: "/contact", labelKey: "nav.contact" },
] as const;

const isHashLink = (href: string) => href.startsWith("/#");
const getId = (href: string) => href.slice(2);
const isHomePath = (pathname: string) =>
    pathname === "/" || pathname === "/home";

const onMobileLinkClick =
    (href: string, close: () => void) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isHashLink(href)) return;
        e.preventDefault();
        const id = getId(href);
        const el = document.getElementById(id);
        close();
        requestAnimationFrame(() => {
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            if (window.location.hash !== `#${id}`) window.location.hash = id;
        });
    };

function useHash(): string {
    const [hash, setHash] = useState<string>("");
    useEffect(() => {
        setHash(window.location.hash);
        const onHash = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, []);
    return hash;
}

function useScrollSpy(ids: string[], rootMargin = "-45% 0px -45% 0px") {
    const [active, setActive] = useState<string>("#home");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
        if (!sections.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            (b.intersectionRatio ?? 0) -
                            (a.intersectionRatio ?? 0)
                    );
                if (visible[0]?.target?.id)
                    setActive(`#${visible[0].target.id}`);
                else if (window.scrollY < 20) setActive("#home");
            },
            { root: null, rootMargin, threshold: [0.2, 0.5, 0.8] }
        );

        sections.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [ids, rootMargin]);

    return active;
}

function NavLink({
    href,
    label,
    currentHash,
    urlHash,
}: {
    href: string;
    label: string;
    currentHash?: string;
    urlHash?: string;
}) {
    const pathname = usePathname();
    const { styleMode } = useStyleMode();

    const isActive = useMemo(() => {
        if (href === "/" || href === "/home") return isHomePath(pathname);
        if (isHashLink(href)) {
            const target = `#${getId(href)}`;
            const h = isHomePath(pathname) ? urlHash || currentHash : undefined;
            return isHomePath(pathname) && h === target;
        }
        return pathname === href || (href !== "/" && pathname.startsWith(href));
    }, [pathname, urlHash, href, currentHash]);

    const handleClick = useCallback<React.MouseEventHandler<HTMLAnchorElement>>(
        (e) => {
            if (!isHashLink(href)) return;
            e.preventDefault();
            const id = getId(href);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                if (window.location.hash !== `#${id}`)
                    window.location.hash = id;
            }
        },
        [href]
    );

    if (styleMode === "scrapbook") {
        return (
            <Link
                href={href}
                onClick={handleClick}
                className={cn(
                    "relative inline-flex items-center justify-center px-4 py-1 text-sm font-bold transition-all duration-200 font-sans",
                    isActive
                        ? "text-black bg-yellow-200 dark:bg-yellow-300 border-2 border-black dark:border-white shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)] rotate-[-2deg]"
                        : "text-slate-800 dark:text-slate-200 hover:rotate-[1deg] hover:bg-black/5 dark:hover:bg-white/10 rounded-md"
                )}
                aria-current={isActive ? "page" : undefined}
            >
                {label}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={cn(
                "relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full",
                "transition-all duration-200 ease-in-out",
                "ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 dark:focus-visible:ring-fuchsia-400/40",
                isActive
                    ? "text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md hover:shadow-lg"
                    : "text-slate-800 dark:text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-md hover:ring-[1.5px] hover:ring-fuchsia-400/60 dark:hover:ring-violet-400/60"
            )}
            aria-current={isActive ? "page" : undefined}
        >
            {label}
        </Link>
    );
}

export default function Navbar() {
    const { t } = useLanguage();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen((v) => !v), []);
    const close = useCallback(() => setOpen(false), []);
    const urlHash = useHash();

    const spy = useScrollSpy([
        "home",
        "skills",
        "education",
        "experience",
        "projects",
        "contact",
    ]);

    useEffect(() => setOpen(false), [pathname, urlHash]);

    useEffect(() => {
        if (!open) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, close]);

    useEffect(() => {
        const onResize = () => {
            if (window.matchMedia("(min-width: 1024px)").matches) close();
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [close]);

    const [scrolled, setScrolled] = useState(false);
    const { styleMode } = useStyleMode();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 2);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isScrapbook = styleMode === "scrapbook";

    return (
        <header
            role="banner"
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrapbook
                    ? "bg-transparent"
                    : open
                    ? "bg-transparent backdrop-blur-xl ring-0 shadow-none"
                    : "bg-white/50 dark:bg-black/40 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10",
                scrolled && !open && !isScrapbook && "shadow-sm"
            )}
        >
            <div className={cn(
                "mx-auto max-w-7xl px-3 sm:px-6",
                isScrapbook && "mt-2 rounded-xl bg-amber-50/90 dark:bg-[#1a1a1c]/90 border-[3px] border-slate-900 dark:border-white shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)]"
            )}>
                <div className="flex h-14 items-center justify-between px-2 sm:px-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 min-w-0"
                        aria-label={t("nav.homeAria")}
                    >
                        <Image
                            src="/icons/superhero.png"
                            alt="Logo"
                            width={28}
                            height={28}
                            className={cn("rounded", isScrapbook && "rotate-[-3deg] border-2 border-black dark:border-white")}
                            priority
                        />
                        {isScrapbook && (
                            <span className="font-sans text-lg font-bold rotate-[-1deg] text-slate-900 dark:text-white">
                                Sopheaktra
                            </span>
                        )}
                    </Link>

                    <nav
                        aria-label={t("nav.primary")}
                        className={cn(
                            "hidden lg:flex items-center gap-2",
                            isScrapbook
                                ? "bg-transparent px-0 py-0 ring-0"
                                : "rounded-full px-2 py-1 bg-white/30 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10"
                        )}
                    >
                        {navLinks.map((l) => (
                            <NavLink
                                key={l.href}
                                href={l.href}
                                label={t(l.labelKey)}
                                currentHash={spy}
                                urlHash={urlHash}
                            />
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <DisplayPreferences />

                        <button
                            onClick={toggle}
                            className={cn(
                                "lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-300 dark:focus-visible:ring-fuchsia-400/40",
                                isScrapbook
                                    ? "bg-yellow-100/50 dark:bg-white/5 border-2 border-black dark:border-white"
                                    : "bg-white/60 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10"
                            )}
                            aria-label={open ? t("nav.close") : t("nav.open")}
                            aria-expanded={open}
                            aria-controls="nav-mobile-menu"
                        >
                            {open ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <>
                    <div
                        className="lg:hidden fixed inset-0 z-40 pointer-events-auto transition-opacity duration-200"
                        aria-hidden
                        onClick={close}
                    />
                    <div
                        id="nav-mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label={t("nav.menu")}
                        className="lg:hidden fixed inset-x-5 top-16 z-[100] flex justify-end transition-transform duration-200"
                    >
                        <div className={cn(
                            "w-full max-w-sm p-3",
                            isScrapbook
                                ? "bg-amber-50 dark:bg-[#1a1a1c] border-[3px] border-slate-900 dark:border-white shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] rotate-[-1deg] rounded-lg"
                                : "rounded-2xl bg-white/95 text-slate-900 ring-1 ring-black/10 shadow-2xl backdrop-blur-xl dark:bg-slate-900/85 dark:text-slate-100 dark:ring-white/10"
                        )}>
                            <nav aria-label={t("nav.mobile")} className="space-y-1">
                                {navLinks.map((l) => {
                                    const isActive = (() => {
                                        if (l.href === "/home")
                                            return isHomePath(pathname);
                                        if (l.href.startsWith("/#")) {
                                            const target = `#${l.href.slice(2)}`;
                                            const h = isHomePath(pathname)
                                                ? urlHash || spy
                                                : undefined;
                                            return (
                                                isHomePath(pathname) &&
                                                h === target
                                            );
                                        }
                                        return (
                                            pathname === l.href ||
                                            pathname.startsWith(l.href)
                                        );
                                    })();

                                    return (
                                        <Link
                                            key={l.href}
                                            href={l.href}
                                            onClick={onMobileLinkClick(
                                                l.href,
                                                close
                                            )}
                                            className={cn(
                                                "group flex items-center justify-between w-full",
                                                "rounded-xl px-3 py-2.5 text-[15px]",
                                                "transition-all duration-150",
                                                isActive
                                                    ? isScrapbook
                                                        ? "bg-yellow-200 dark:bg-yellow-300 text-black border-2 border-black font-bold shadow-[2px_2px_0px_#000]"
                                                        : "bg-violet-100 text-violet-300 ring-1 ring-violet-200 shadow-inner dark:bg-violet-500/85 dark:text-white dark:ring-white/10"
                                                    : isScrapbook
                                                        ? "hover:bg-black/5 dark:hover:bg-white/5 text-slate-900 dark:text-slate-100"
                                                        : "hover:bg-slate-100 dark:hover:bg-white/5"
                                            )}
                                            aria-current={
                                                isActive ? "page" : undefined
                                            }
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span
                                                    className={cn(
                                                        "shrink-0 size-4",
                                                        isActive
                                                            ? "text-violet-300 dark:text-white/90"
                                                            : "text-slate-400/90"
                                                    )}
                                                />
                                                <span
                                                    className={cn(
                                                        "text-sm",
                                                        isActive
                                                            ? "font-semibold text-violet-300 dark:text-white"
                                                            : "text-slate-900 dark:text-slate-100"
                                                    )}
                                                >
                                                    {t(l.labelKey)}
                                                </span>
                                            </div>

                                            <span
                                                className={cn(
                                                    "ml-2 transition-opacity duration-150",
                                                    isActive
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            >
                                                <Check className="size-4 text-violet-700 dark:text-white/90" />
                                            </span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Check, Menu, X } from "lucide-react";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import DarkModeSelector from "@/components/DarkModeSelector";

const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#skills", label: "Skills" },
    { href: "/#education", label: "Education" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
] as const;

const cx = (...c: Array<string | false | null | undefined>) =>
    c.filter(Boolean).join(" ");
const isHashLink = (href: string) => href.startsWith("/#");
const getId = (href: string) => href.slice(2);

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

    const isActive = useMemo(() => {
        if (href === "/") {
            const spyActive = currentHash && currentHash !== "#home";
            const hasUrlSection = urlHash && urlHash !== "#home";
            return pathname === "/" && !spyActive && !hasUrlSection;
        }
        if (isHashLink(href)) {
            const target = `#${getId(href)}`;
            const h = pathname === "/" ? urlHash || currentHash : undefined;
            return pathname === "/" && h === target;
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

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={cx(
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
            if (window.matchMedia("(min-width: 768px)").matches) close();
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [close]);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 2);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            role="banner"
            className={cx(
                "sticky top-0 z-50 w-full transition-all duration-300",
                open
                    ? "bg-transparent backdrop-blur-xl ring-0 shadow-none"
                    : "bg-white/50 dark:bg-black/40 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10",
                scrolled && !open && "shadow-sm"
            )}
        >
            <div className="mx-auto max-w-7xl px-3 sm:px-6">
                <div className="flex h-14 items-center justify-between px-2 sm:px-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 min-w-0"
                        aria-label="Go to home"
                    >
                        <Image
                            src="/icons/superhero.png"
                            alt="Logo"
                            width={28}
                            height={28}
                            className="rounded"
                            priority
                        />
                    </Link>

                    <nav
                        aria-label="Primary"
                        className="hidden md:flex items-center gap-2 rounded-full px-2 py-1 bg-white/30 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10"
                    >
                        {navLinks.map((l) => (
                            <NavLink
                                key={l.href}
                                {...l}
                                currentHash={spy}
                                urlHash={urlHash}
                            />
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <DarkModeSelector />
                        <button
                            onClick={toggle}
                            className="md:hidden inline-flex items-center justify-center rounded-xl p-2.5
              bg-white/60 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              focus-visible:ring-violet-300 dark:focus-visible:ring-fuchsia-400/40"
                            aria-label={open ? "Close menu" : "Open menu"}
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
                        className="md:hidden fixed inset-0 z-40 pointer-events-auto transition-opacity duration-200"
                        aria-hidden
                        onClick={close}
                    ></div>
                    <div
                        id="nav-mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        className="md:hidden fixed inset-x-5 top-16 z-100 flex justify-end transition-transform duration-200"
                    >
                        <div
                            className="
                w-[60%] max-w-sm rounded-2xl
                bg-white/95 text-slate-900 ring-1 ring-black/10 shadow-2xl backdrop-blur-xl
                dark:bg-slate-900/85 dark:text-slate-100 dark:ring-white/10
                p-2
              "
                        >
                            <nav
                                aria-label="Mobile Primary"
                                className="space-y-1"
                            >
                                {navLinks.map((l) => {
                                    const isActive = (() => {
                                        if (l.href === "/#home") {
                                            const spyActive =
                                                spy && spy !== "#home";
                                            const hasUrlSection =
                                                urlHash && urlHash !== "#home";
                                            return (
                                                pathname === "/" &&
                                                !spyActive &&
                                                !hasUrlSection
                                            );
                                        }
                                        if (l.href.startsWith("/#")) {
                                            const target = `#${l.href.slice(
                                                2
                                            )}`;
                                            const h =
                                                pathname === "/"
                                                    ? urlHash || spy
                                                    : undefined;
                                            return (
                                                pathname === "/" && h === target
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
                                            className={cx(
                                                "group flex items-center justify-between w-full",
                                                "rounded-xl px-3 py-2.5 text-[15px]",
                                                "transition-all duration-150",
                                                isActive
                                                    ? "bg-violet-100 text-violet-300 ring-1 ring-violet-200 shadow-inner dark:bg-violet-500/85 dark:text-white dark:ring-white/10"
                                                    : "hover:bg-slate-100 dark:hover:bg-white/5"
                                            )}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span
                                                    className={cx(
                                                        "shrink-0 size-4",
                                                        isActive
                                                            ? "text-violet-300 dark:text-white/90"
                                                            : "text-slate-400/90"
                                                    )}
                                                />
                                                <span
                                                    className={cx(
                                                        "text-sm",
                                                        isActive
                                                            ? "font-semibold text-violet-300 dark:text-white"
                                                            : "text-slate-900 dark:text-slate-100"
                                                    )}
                                                >
                                                    {l.label}
                                                </span>
                                            </div>

                                            <span
                                                className={cx(
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

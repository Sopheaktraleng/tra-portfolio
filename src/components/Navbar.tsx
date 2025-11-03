"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import DarkModeSelector from "@/components/DarkModeSelector";

/* ---------------------------- Configurable links --------------------------- */
const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#skills", label: "Skills" },
    { href: "/#education", label: "Education" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
] as const;

/* --------------------------------- Utils ---------------------------------- */
const cx = (...c: Array<string | false | null | undefined>) =>
    c.filter(Boolean).join(" ");

const isHashLink = (href: string) => href.startsWith("/#");
const getId = (href: string) => href.slice(2);

function useHash(): string {
    const [hash, setHash] = useState<string>(
        typeof window !== "undefined" ? window.location.hash : ""
    );
    useEffect(() => {
        const onHash = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, []);
    return hash;
}

/* ----------------------------- Scroll spy --------------------------------- */
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

                if (visible[0]?.target?.id) {
                    setActive(`#${visible[0].target.id}`);
                } else if (window.scrollY < 20) {
                    setActive("#home");
                }
            },
            { root: null, rootMargin, threshold: [0.2, 0.5, 0.8] }
        );

        sections.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [ids, rootMargin]);

    return active;
}

/* --------------------------------- Link ----------------------------------- */
function NavLink({
    href,
    label,
    currentHash, // from scroll spy
    urlHash, // from useHash
}: {
    href: string;
    label: string;
    currentHash?: string;
    urlHash?: string;
}) {
    const pathname = usePathname();

    // Home is active only when we're on "/" and no section is active
    const isActive = useMemo(() => {
        if (href === "/") {
            const spyActive = currentHash && currentHash !== "#home";
            const hasUrlSection = urlHash && urlHash !== "#home";
            return pathname === "/" && !spyActive && !hasUrlSection;
        }

        if (isHashLink(href)) {
            const target = `#${getId(href)}`;
            const h = pathname === "/" && currentHash ? currentHash : urlHash;
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
                if (window.location.hash !== `#${id}`) {
                    history.pushState(null, "", href);
                }
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

/* -------------------------------- Navbar ---------------------------------- */
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

    // Close mobile when route/hash changes
    useEffect(() => setOpen(false), [pathname, urlHash]);

    // Tiny shadow when scrolled
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
                "sticky top-0 z-50 w-full",
                "bg-white/50 dark:bg-black/40 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10",
                scrolled && "shadow-sm"
            )}
        >
            <div className="mx-auto max-w-7xl px-3 sm:px-6">
                <div className="flex h-14 items-center justify-between px-3 sm:px-4">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-2"
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
                        <span className="text-sm sm:text-base font-semibold tracking-tight hidden xs:inline">
                            Leng Sopheaktra
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav
                        aria-label="Primary"
                        className="hidden md:flex items-center gap-2 rounded-full px-2 py-1 
            bg-white/30 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10 backdrop-blur-md"
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

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <DarkModeSelector />
                        <button
                            onClick={toggle}
                            className="md:hidden inline-flex items-center justify-center rounded-xl p-2
              bg-white/60 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              focus-visible:ring-violet-300 dark:focus-visible:ring-fuchsia-400/40"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
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

            {/* Mobile sheet */}
            <div
                id="mobile-menu"
                className={cx(
                    "md:hidden px-3 sm:px-6 transition-all duration-200",
                    open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                )}
            >
                <div className="mb-3 rounded-2xl bg-white/90 dark:bg-black/70 backdrop-blur-lg shadow-xl overflow-hidden ring-1 ring-white/30 dark:ring-white/10">
                    <nav
                        aria-label="Mobile Primary"
                        className="divide-y divide-white/30 dark:divide-white/10"
                    >
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={close}
                                className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:rounded-full transition-all duration-200 dark:text-slate-200 dark:hover:bg-gradient-to-r dark:hover:from-violet-500 dark:hover:to-fuchsia-500"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

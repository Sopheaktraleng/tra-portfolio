"use client";

import { useEffect, useRef, useState } from "react";
import {
    Check,
    ChevronDown,
    Languages,
    Monitor,
    Moon,
    Palette,
    SlidersHorizontal,
    Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatedIcon } from "@/components/AnimatedIcon";
import { useLanguage } from "@/components/LanguageProvider";
import { useStyleMode, type StyleMode } from "@/components/StyleModeProvider";
import { cn } from "@/lib/cn";

type ThemeId = "light" | "dark" | "system";

export default function DisplayPreferences() {
    const { language, setLanguage, t } = useLanguage();
    const { styleMode, setStyleMode } = useStyleMode();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrapbook = styleMode === "scrapbook";
    const activeTheme: ThemeId =
        mounted && (theme === "light" || theme === "dark" || theme === "system")
            ? theme
            : "system";

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!open) return;

        const closeOnOutsideClick = (event: PointerEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("pointerdown", closeOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);
        return () => {
            document.removeEventListener("pointerdown", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [open]);

    const themeOptions: Array<{
        id: ThemeId;
        label: string;
        Icon: typeof Sun;
    }> = [
        { id: "light", label: t("theme.light"), Icon: Sun },
        { id: "dark", label: t("theme.dark"), Icon: Moon },
        { id: "system", label: t("theme.system"), Icon: Monitor },
    ];

    const styleOptions: Array<{
        id: StyleMode;
        label: string;
        description: string;
        Icon: typeof Monitor;
    }> = [
        {
            id: "clean",
            label: t("mode.studioShort"),
            description: t("display.studioDescription"),
            Icon: Monitor,
        },
        {
            id: "scrapbook",
            label: t("mode.scrapbookShort"),
            description: t("display.scrapbookDescription"),
            Icon: Palette,
        },
    ];

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className={cn(
                    "group inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap px-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                    isScrapbook
                        ? "rotate-[1deg] rounded-md border-2 border-slate-900 bg-yellow-200 text-slate-950 shadow-[2px_2px_0px_#0f172a] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0f172a] dark:border-white dark:bg-yellow-300"
                        : "rounded-full border border-slate-200/90 bg-white/80 text-slate-700 shadow-sm backdrop-blur-xl hover:border-violet-300 hover:text-violet-700 hover:shadow-md dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:border-fuchsia-400/50 dark:hover:text-fuchsia-200"
                )}
                aria-label={open ? t("display.close") : t("display.open")}
                aria-expanded={open}
                aria-controls="display-preferences-panel"
            >
                <AnimatedIcon icon={SlidersHorizontal} animation="wiggle" className="size-4" />
                <span className="hidden xl:inline">{t("display.button")}</span>
                <span
                    className={cn(
                        "hidden size-1.5 rounded-full sm:block",
                        activeTheme === "dark" ? "bg-indigo-400" : "bg-amber-400"
                    )}
                    aria-hidden
                />
                <ChevronDown
                    className={cn("size-3.5 transition-transform", open && "rotate-180")}
                    aria-hidden
                />
            </button>

            {open && (
                <div
                    id="display-preferences-panel"
                    className={cn(
                        "fixed right-3 top-16 z-[120] w-[min(22rem,calc(100vw-1.5rem))] origin-top-right p-4 text-left sm:absolute sm:right-0 sm:top-full sm:mt-3",
                        "animate-in fade-in zoom-in-95 duration-150",
                        isScrapbook
                            ? "rotate-[-0.5deg] rounded-md border-[3px] border-slate-900 bg-[#fffaf0] text-slate-950 shadow-[6px_6px_0px_#0f172a] dark:border-white dark:bg-[#1a1a1c] dark:text-white dark:shadow-[6px_6px_0px_#fff]"
                            : "rounded-2xl border border-slate-200/80 bg-white/95 text-slate-950 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 dark:text-white dark:shadow-black/40"
                    )}
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-base font-bold">{t("display.title")}</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                                {t("display.subtitle")}
                            </p>
                        </div>
                        <div
                            className={cn(
                                "grid size-9 shrink-0 place-items-center",
                                isScrapbook
                                    ? "rotate-3 rounded border-2 border-black bg-cyan-200 text-slate-950 shadow-[2px_2px_0px_#000]"
                                    : "rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md"
                            )}
                        >
                            <SlidersHorizontal className="size-4" aria-hidden />
                        </div>
                    </div>

                    <div className="my-4 h-px bg-slate-200 dark:bg-white/10" />

                    <PreferenceGroup
                        label={t("display.style")}
                        hint={t("display.styleHint")}
                    >
                        <div className="grid grid-cols-2 gap-2">
                            {styleOptions.map(({ id, label, description, Icon }) => {
                                const selected = styleMode === id;
                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => setStyleMode(id)}
                                        className={cn(
                                            "relative flex min-h-[76px] items-start gap-2.5 rounded-xl border p-3 text-left transition-all",
                                            selected
                                                ? isScrapbook
                                                    ? "border-2 border-black bg-yellow-200 text-slate-950 shadow-[2px_2px_0px_#000]"
                                                    : "border-violet-400 bg-violet-50 text-violet-950 ring-2 ring-violet-200 dark:border-fuchsia-400 dark:bg-fuchsia-400/10 dark:text-white dark:ring-fuchsia-400/20"
                                                : "border-slate-200 bg-white/60 text-slate-700 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                                        )}
                                        aria-pressed={selected}
                                    >
                                        <Icon className="mt-0.5 size-4 shrink-0" aria-hidden />
                                        <span>
                                            <span className="block text-xs font-bold">{label}</span>
                                            <span className="mt-1 block text-[10px] leading-snug opacity-65">
                                                {description}
                                            </span>
                                        </span>
                                        {selected && (
                                            <Check className="absolute right-2 top-2 size-3.5" aria-hidden />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </PreferenceGroup>

                    <PreferenceGroup
                        label={t("display.theme")}
                        hint={t("display.themeHint")}
                    >
                        <div className="grid grid-cols-3 gap-2">
                            {themeOptions.map(({ id, label, Icon }) => {
                                const selected = activeTheme === id;
                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => setTheme(id)}
                                        disabled={!mounted}
                                        className={cn(
                                            "flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-center text-[11px] font-bold transition-all",
                                            selected
                                                ? isScrapbook
                                                    ? "border-2 border-black bg-cyan-200 text-slate-950 shadow-[2px_2px_0px_#000]"
                                                    : "border-violet-400 bg-violet-50 text-violet-800 ring-2 ring-violet-200 dark:border-fuchsia-400 dark:bg-fuchsia-400/10 dark:text-fuchsia-100 dark:ring-fuchsia-400/20"
                                                : "border-slate-200 bg-white/60 text-slate-600 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                                        )}
                                        aria-pressed={selected}
                                    >
                                        <Icon className="size-4" aria-hidden />
                                        <span>{label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </PreferenceGroup>

                    <PreferenceGroup
                        label={t("display.language")}
                        hint={t("display.languageHint")}
                        last
                    >
                        <div className="grid grid-cols-2 gap-2">
                            {(["en", "km"] as const).map((id) => {
                                const selected = language === id;
                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => setLanguage(id)}
                                        className={cn(
                                            "relative flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all",
                                            selected
                                                ? isScrapbook
                                                    ? "border-2 border-black bg-pink-200 text-slate-950 shadow-[2px_2px_0px_#000]"
                                                    : "border-violet-400 bg-violet-50 text-violet-900 ring-2 ring-violet-200 dark:border-fuchsia-400 dark:bg-fuchsia-400/10 dark:text-white dark:ring-fuchsia-400/20"
                                                : "border-slate-200 bg-white/60 text-slate-600 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                                        )}
                                        aria-pressed={selected}
                                    >
                                        <Languages className="size-4 shrink-0" aria-hidden />
                                        <span>
                                            <span className="block text-xs font-bold">
                                                {id === "en" ? "English" : "ខ្មែរ"}
                                            </span>
                                            <span className="block text-[10px] opacity-60">
                                                {id === "en" ? "EN" : "KM"}
                                            </span>
                                        </span>
                                        {selected && (
                                            <Check className="absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2" aria-hidden />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </PreferenceGroup>
                </div>
            )}
        </div>
    );
}

function PreferenceGroup({
    label,
    hint,
    last = false,
    children,
}: {
    label: string;
    hint: string;
    last?: boolean;
    children: React.ReactNode;
}) {
    return (
        <section className={cn(!last && "mb-4")}>
            <div className="mb-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{label}</p>
                <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">{hint}</p>
            </div>
            {children}
        </section>
    );
}

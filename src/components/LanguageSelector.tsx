"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/cn";

export default function LanguageSelector({ className }: { className?: string }) {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div
            className={cn(
                "inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/60 p-1 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10",
                className
            )}
            role="group"
            aria-label={t("language.label")}
        >
            <Languages className="mx-1 size-4 text-slate-600 dark:text-slate-300" aria-hidden />
            {(["en", "km"] as const).map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => setLanguage(option)}
                    className={cn(
                        "rounded-full px-2 py-1 text-xs font-bold transition-colors",
                        language === option
                            ? "bg-violet-600 text-white shadow-sm dark:bg-fuchsia-500"
                            : "text-slate-600 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10"
                    )}
                    aria-pressed={language === option}
                    title={option === "en" ? t("language.english") : t("language.khmer")}
                >
                    {option === "en" ? "EN" : "ខ្មែរ"}
                </button>
            ))}
        </div>
    );
}

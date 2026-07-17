"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function SkipLink() {
    const { t } = useLanguage();

    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
            {t("nav.skip")}
        </a>
    );
}

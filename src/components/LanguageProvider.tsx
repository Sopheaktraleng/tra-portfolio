"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Language, messages, TranslationKey } from "@/i18n/messages";

const STORAGE_KEY = "portfolio-language";

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "en" || saved === "km") setLanguage(saved);
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.classList.toggle("lang-km", language === "km");
        window.localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const value = useMemo<LanguageContextValue>(
        () => ({
            language,
            setLanguage,
            t: (key) => messages[language][key] ?? messages.en[key],
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const value = useContext(LanguageContext);
    if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
    return value;
}

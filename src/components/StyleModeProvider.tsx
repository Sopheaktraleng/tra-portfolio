"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type StyleMode = "clean" | "scrapbook";

interface StyleModeContextType {
    styleMode: StyleMode;
    setStyleMode: (mode: StyleMode) => void;
    toggleStyleMode: () => void;
}

const StyleModeContext = createContext<StyleModeContextType | undefined>(undefined);

export function StyleModeProvider({ children }: { children: React.ReactNode }) {
    const [styleMode, setStyleModeState] = useState<StyleMode>("clean");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load initial style mode from localStorage
        const savedMode = localStorage.getItem("portfolio-style-mode") as StyleMode;
        if (savedMode === "scrapbook" || savedMode === "clean") {
            setStyleModeState(savedMode);
        }
        setMounted(true);
    }, []);

    const setStyleMode = (mode: StyleMode) => {
        setStyleModeState(mode);
        localStorage.setItem("portfolio-style-mode", mode);
    };

    const toggleStyleMode = () => {
        const nextMode = styleMode === "clean" ? "scrapbook" : "clean";
        setStyleMode(nextMode);
    };

    useEffect(() => {
        if (!mounted) return;

        const html = document.documentElement;
        if (styleMode === "scrapbook") {
            html.classList.add("style-scrapbook");
            html.classList.remove("style-clean");
        } else {
            html.classList.add("style-clean");
            html.classList.remove("style-scrapbook");
        }
    }, [styleMode, mounted]);

    return (
        <StyleModeContext.Provider value={{ styleMode, setStyleMode, toggleStyleMode }}>
            {children}
        </StyleModeContext.Provider>
    );
}

export function useStyleMode() {
    const context = useContext(StyleModeContext);
    if (context === undefined) {
        throw new Error("useStyleMode must be used within a StyleModeProvider");
    }
    return context;
}

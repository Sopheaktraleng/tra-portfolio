"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
    children: React.ReactNode;
}

/**
 * Wraps the app in next-themes for dark/light/system mode support.
 * MUI ThemeProvider and CssBaseline were removed — styling is handled
 * entirely by Tailwind CSS, which is lighter and doesn't require SSR hydration patches.
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    );
}

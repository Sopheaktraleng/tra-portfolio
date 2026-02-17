"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ProviderProps {
    children: React.ReactNode;
}

const muiTheme = createTheme({
    typography: {
        fontFamily:
            'var(--font-sans), "Space Grotesk", "Segoe UI", system-ui, -apple-system, sans-serif',
    },
});

export default function Provider({ children }: ProviderProps) {
    return (
        <NextThemesProvider attribute="class">
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </NextThemesProvider>
    );
}

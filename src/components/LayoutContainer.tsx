"use client";

import React from "react";
import { useStyleMode } from "@/components/StyleModeProvider";

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
    const { styleMode } = useStyleMode();

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${styleMode === "scrapbook" ? "scrapbook-bg-grid" : ""}`}>
            {children}
        </div>
    );
}

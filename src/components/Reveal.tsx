"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    duration?: number;
    once?: boolean;
    className?: string;
};

const cx = (...c: Array<string | false | null | undefined>) =>
    c.filter(Boolean).join(" ");

export default function Reveal({
    children,
    delay = 0,
    y = 16,
    duration = 0.55,
    once = true,
    className,
}: RevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reducedMotion || !("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setVisible(true);
                if (once) observer.disconnect();
            },
            { rootMargin: "80px 0px", threshold: 0.12 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={elementRef}
            className={cx("reveal-lite", visible && "reveal-lite-visible", className)}
            style={
                {
                    "--reveal-delay": `${delay}s`,
                    "--reveal-duration": `${duration}s`,
                    "--reveal-y": `${y}px`,
                } as React.CSSProperties
            }
        >
            {children}
        </div>
    );
}

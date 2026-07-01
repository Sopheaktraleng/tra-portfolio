"use client";

import React from "react";

// Cute hand-drawn star
export function DoodleStar({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {/* Primary star path */}
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            {/* Sketchy overlapping line */}
            <path
                d="M12.2 2.5l2.9 6.1 6.1 1-4.4 4.3 1.1 6.1-5.7-3-5.7 3 1.1-6.1-4.4-4.3 6.1-1z"
                opacity="0.65"
                strokeWidth="1.5"
            />
        </svg>
    );
}

// Hand-drawn arrow pointing downwards/right
export function DoodleArrow({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {/* Arrow tail curve */}
            <path d="M6 10c12 2 24 8 28 20" />
            <path d="M6 10c10 4 20 12 28 20" opacity="0.4" strokeWidth="1.5" />
            {/* Arrowhead */}
            <path d="M22 28l12 2 2-12" />
            <path d="M23 27l11 3 3-11" opacity="0.6" strokeWidth="1.5" />
        </svg>
    );
}

// Hand-drawn curvy underline
export function DoodleUnderline({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 120 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            className={className}
            preserveAspectRatio="none"
            {...props}
        >
            {/* Double sketchy swash line */}
            <path d="M4 8c20-2 40-4 60-3s40 3 52 1" />
            <path d="M2 10c22-3 44-3 66-1s38 4 50 1" opacity="0.6" strokeWidth="2" />
        </svg>
    );
}

// Curvy wobbly circle to wrap items
export function DoodleCircle({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className={className}
            preserveAspectRatio="none"
            {...props}
        >
            {/* curviest hand drawn oval circle that overlaps slightly at the end */}
            <path d="M12 50C12 25 35 10 60 10C85 10 93 30 90 55C87 80 65 92 40 90C15 88 8 68 15 48C18 38 28 15 52 13" />
        </svg>
    );
}

// Pushpin used to pin pictures/cards
export function DoodlePin({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {/* Red plastic head */}
            <path d="M12 2c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.1 3 5.2v2.8H7v2h10v-2h-2v-2.8c1.8-1.1 3-3 3-5.2 0-3.3-2.7-6-6-6z" fill="#EF4444" />
            <path d="M12 2c-3.3 0-6 2.7-6 6 0 2.2 1.2 4.1 3 5.2v2.8H7v2h10v-2h-2v-2.8c1.8-1.1 3-3 3-5.2 0-3.3-2.7-6-6-6z" fill="none" stroke="#1E1E24" strokeWidth="2" />
            {/* Metal needle pin */}
            <path d="M12 18v5" stroke="#9CA3AF" strokeWidth="2.5" />
            {/* Highlight bubble */}
            <circle cx="10" cy="6" r="1.5" fill="white" opacity="0.6" />
        </svg>
    );
}

// Paperclip SVG
export function DoodlePaperclip({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    );
}

// Coffee Stain ring outline
export function DoodleCoffeeRing({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={className}
            {...props}
        >
            {/* outer faint, sketchy coffee ring */}
            <path d="M85 50C85 69.3 69.3 85 50 85C30.7 85 15 69.3 15 50C15 30.7 30.7 15 50 15C69.3 15 85 30.7 85 50Z" strokeDasharray="3 2" opacity="0.3" />
            <path d="M82 48C82 66.8 66.8 82 48 82C29.2 82 14 66.8 14 48C14 29.2 29.2 14 48 14C66.8 14 82 29.2 82 48Z" opacity="0.15" />
            {/* coffee drops */}
            <circle cx="35" cy="85" r="1.5" fill="currentColor" opacity="0.25" />
            <circle cx="78" cy="22" r="1" fill="currentColor" opacity="0.2" />
        </svg>
    );
}

// Hand-drawn heart doodle
export function DoodleHeart({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            <path
                d="M19.8 5.6a4.5 4.5 0 0 0-6.3 0L12 7.1 10.5 5.6a4.5 4.5 0 0 0-6.3 6.3l1.5 1.5 6.3 6.3 6.3-6.3 1.5-1.5a4.5 4.5 0 0 0 0-6.3z"
                opacity="0.6"
                strokeWidth="1.5"
            />
        </svg>
    );
}

// Notebook spiral spine with wire bindings
export function NotebookSpine({ count = 10, className }: { count?: number; className?: string }) {
    return (
        <div className={`flex justify-around items-center w-full px-4 ${className}`}>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                    {/* The metal ring */}
                    <div className="scrapbook-spiral" />
                    {/* Hole punch */}
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900/10 dark:bg-black/40 -mt-1 z-0" />
                </div>
            ))}
        </div>
    );
}

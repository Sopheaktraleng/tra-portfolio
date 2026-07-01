"use client";

import { BadgeCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { EducationItem } from "@/types";
import { DoodlePaperclip, DoodleStar } from "@/components/Doodles";
import { useStyleMode } from "@/components/StyleModeProvider";

const AnimeFlameIcon = () => (
    <span className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
        {/* Flame SVG with crisp glowing drop-shadow */}
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:animate-bounce drop-shadow-[0_0_3px_rgba(249,115,22,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            aria-hidden
        >
            <defs>
                <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" /> {/* Orange 500 */}
                    <stop offset="50%" stopColor="#ef4444" /> {/* Red 500 */}
                    <stop offset="100%" stopColor="#eab308" /> {/* Yellow 500 */}
                </linearGradient>
            </defs>
            <path
                d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                fill="url(#flame-gradient)"
            />
        </svg>
    </span>
);

const AnimeSparkleBullet = () => (
    <span className="relative flex-shrink-0 w-3.5 h-3.5 mt-0.5 flex items-center justify-center">
        {/* 4-point Anime Sparkle with crisp glowing drop-shadow */}
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-3 h-3 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110 drop-shadow-[0_0_2px_rgba(236,72,153,0.3)] group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.8)]"
            aria-hidden
        >
            <defs>
                <linearGradient id="bullet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" /> {/* Pink 500 */}
                    <stop offset="100%" stopColor="#a855f7" /> {/* Purple 500 */}
                </linearGradient>
            </defs>
            <path
                d="M12 2C12 8.5 8.5 12 2 12C8.5 12 12 15.5 12 22C12 15.5 15.5 12 22 12C15.5 12 12 8.5 12 2Z"
                fill="url(#bullet-gradient)"
            />
        </svg>
    </span>
);

interface EducationCardProps {
    edu: EducationItem;
}

const EducationCard = ({ edu }: EducationCardProps) => {
    const { styleMode } = useStyleMode();
    const hasCertificate = Boolean(edu.certificate?.url?.trim());
    const certificateLabel = edu.certificate?.label ?? "View Certificate";

    if (styleMode === "scrapbook") {
        return (
            <div className="group w-96 p-5 border-[3px] border-slate-900 dark:border-white bg-[#faf8f5] dark:bg-[#1a1a1c] text-slate-900 dark:text-slate-100 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,1)] transition-all text-left relative rounded-sm">
                {/* Spiral notebook spine simulation paperclip */}
                <DoodlePaperclip className="absolute -top-4 right-4 w-7 h-7 text-slate-700 dark:text-slate-900 rotate-[15deg] drop-shadow-sm z-20" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white dark:bg-white border-2 border-black rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                        <Image
                            src={edu.img}
                            alt={`${edu.school} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>

                    <div className="min-w-0">
                        <p className="text-lg font-bold leading-tight truncate text-slate-900 dark:text-white font-sans">
                            {edu.degree}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            <span className="marker-highlight dark:text-slate-900 py-0.5 px-1.5">{edu.school}</span>
                        </p>
                    </div>
                </div>

                {/* Date tape sticker style */}
                <div className="mb-4 flex flex-wrap items-center gap-2">
                    <div className="scrapbook-washi scrapbook-washi-blue text-[11px] py-1 px-2.5 scale-95 rotate-[-1deg]">
                        {edu.date}
                    </div>
                    {hasCertificate && (
                        <div className="scrapbook-washi scrapbook-washi-green text-[11px] py-1 px-2.5 scale-95 rotate-[1.5deg]">
                            ★ Certified
                        </div>
                    )}
                </div>

                <div className="divider bg-black/20 dark:bg-white/20 mb-3" />

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4 font-sans font-medium text-slate-800 dark:text-slate-200">
                    {edu.description}
                </p>

                {/* Highlights */}
                <p className="flex items-center gap-1.5 text-sm font-bold mb-2 text-slate-900 dark:text-white">
                    <DoodleStar className="w-4 h-4 text-amber-500" />
                    Key Highlights:
                </p>

                <ul className="space-y-2 text-sm font-sans font-medium text-slate-800 dark:text-slate-200">
                    {edu.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                            <span className="text-slate-800 dark:text-slate-400 font-bold mt-0.5">▪</span>
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>

                {/* Certificate */}
                {hasCertificate && (
                    <div className="mt-4 rounded-lg border-2 border-dashed border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 p-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-200">
                                <BadgeCheck className="h-4 w-4" />
                                Verified credential
                            </span>
                            <a
                                href={edu.certificate?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 rounded bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold border-2 border-black px-3 py-1 text-xs shadow-[2px_2px_0px_#000] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all"
                                aria-label={`${certificateLabel} for ${edu.degree}`}
                            >
                                <ExternalLink className="h-3.5 w-3.5" />
                                {certificateLabel}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="group w-96 glass-card glass-card-hover bg-gradient-to-b from-white/90 to-white/70 dark:from-white/10 dark:to-white/5 p-5 focus-within:ring-2 focus-within:ring-black/10 dark:focus-within:ring-white/20 text-left">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <div className="media-tile">
                    <Image
                        src={edu.img}
                        alt={`${edu.school} logo`}
                        width={48}
                        height={48}
                        className="rounded-lg object-contain"
                    />
                </div>

                <div className="min-w-0">
                    <p className="text-lg font-semibold leading-tight truncate text-slate-900 dark:text-white">
                        {edu.degree}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-white/80">
                        {edu.school}
                    </p>
                    <div className="mt-1 flex min-w-0 items-center gap-2 text-xs text-slate-500 dark:text-white/60">
                        <span className="min-w-0 truncate">{edu.date}</span>
                        {hasCertificate && (
                            <span className="inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-medium text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200 whitespace-nowrap">
                                <BadgeCheck className="h-3.5 w-3.5" />
                                Certified
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-4 text-slate-800 dark:text-white/90">
                {edu.description}
            </p>

            <div className="divider mb-3" />

            {/* Highlights */}
            <p className="flex items-center gap-2 text-sm font-medium mb-2 text-slate-900 dark:text-white">
                <AnimeFlameIcon />
                Key Highlights:
            </p>

            <ul className="space-y-2 text-sm">
                {edu.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                        <AnimeSparkleBullet />
                        <span className="text-slate-800 dark:text-white/90">
                            {highlight}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Certificate */}
            {hasCertificate && (
                <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
                    <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-200">
                            <BadgeCheck className="h-4 w-4" />
                            Verified credential
                        </span>
                        <a
                            href={edu.certificate?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-sm transition hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-400/40"
                            aria-label={`${certificateLabel} for ${edu.degree}`}
                        >
                            <ExternalLink className="h-4 w-4" />
                            {certificateLabel}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EducationCard;

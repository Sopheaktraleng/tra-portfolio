"use client";
import { useRef } from "react";
import Image from "next/image";
import {
    ArrowRight,
    BriefcaseBusiness,
    ChevronDown,
    Download,
    Github,
    MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useStyleMode } from "@/components/StyleModeProvider";
import { DoodleArrow, DoodlePin, DoodleStar, DoodleUnderline } from "@/components/Doodles";

const RESUME_URL = "https://flowcv.com/resume/tkwwsww93lh0";
const GITHUB_URL = "https://github.com/Sopheaktraleng";

const FLOAT_TRANSITION = {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut",
};

/** Reusable floating badge chip shown around the profile image. */
function FloatingBadge({
    label,
    className,
}: {
    label: string;
    className: string;
}) {
    return (
        <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={FLOAT_TRANSITION}
            className={className}
        >
            <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white">
                {label}
            </span>
        </motion.div>
    );
}

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { styleMode } = useStyleMode();

    const handleScrollHintClick = () => {
        const skills = document.getElementById("skills");
        if (skills) {
            skills.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
        const next = sectionRef.current
            ?.nextElementSibling as HTMLElement | null;
        if (next) {
            next.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    };

    if (styleMode === "scrapbook") {
        return (
            <section
                ref={sectionRef}
                className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-10"
            >
                {/* Decorative background doodles */}
                <div className="absolute top-10 left-10 text-slate-400 dark:text-white/10 hidden md:block">
                    <DoodleStar className="w-16 h-16 rotate-[-12deg]" />
                </div>
                <div className="absolute bottom-20 right-16 text-slate-400 dark:text-white/10 hidden md:block">
                    <DoodleStar className="w-12 h-12 rotate-[25deg]" />
                </div>

                <div className="w-full md:max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Text column */}
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-start order-last lg:order-first">
                            <div className="scrapbook-sticker scrapbook-sticker-hover rotate-[-2deg] text-sm mb-3">
                                <span>🎨</span>
                                <span>Welcome to my sketchbook!</span>
                            </div>

                            <div className="relative mt-2">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                                    Leng Sopheaktra
                                </h1>
                                <DoodleUnderline className="w-full h-4 text-violet-500/80 dark:text-fuchsia-400/80 mt-1" />
                            </div>

                            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                                <span className="marker-highlight dark:text-slate-900">
                                    Full-Stack Developer
                                </span>
                            </h2>

                            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200 max-w-2xl font-sans font-medium">
                                Full-stack developer building reliable public-data
                                platforms and internal business systems—from responsive
                                interfaces and scalable APIs to cloud deployment and
                                DevOps automation.
                            </p>

                            <div className="mt-7 flex w-full flex-col sm:w-auto sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3">
                                <a
                                    href="#projects"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-200 dark:bg-yellow-300 text-slate-900 border-[3px] border-slate-900 font-bold rounded-md shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000] transition-all rotate-[-1deg]"
                                >
                                    View My Work
                                    <ArrowRight className="h-4 w-4" aria-hidden />
                                </a>
                                <a
                                    href={RESUME_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-100 text-slate-900 border-[3px] border-slate-900 font-bold rounded-md shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] transition-all rotate-[1deg]"
                                >
                                    <Download className="h-4 w-4" aria-hidden />
                                    Download Résumé
                                </a>
                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-200 dark:bg-cyan-300 text-slate-900 border-[3px] border-slate-900 font-bold rounded-md shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] transition-all rotate-[-0.5deg]"
                                >
                                    <Github className="h-4 w-4" aria-hidden />
                                    GitHub
                                </a>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-sm font-bold text-slate-700 dark:text-slate-300 font-sans">
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4 text-rose-500" aria-hidden />
                                    Phnom Penh, Cambodia
                                </span>
                                <span className="hidden sm:inline" aria-hidden>·</span>
                                <span className="inline-flex items-center gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" aria-hidden />
                                    Available for opportunities
                                </span>
                                <span className="hidden sm:inline" aria-hidden>·</span>
                                <span className="inline-flex items-center gap-1.5">
                                    <BriefcaseBusiness className="h-4 w-4 text-violet-500" aria-hidden />
                                    Full-stack &amp; DevOps
                                </span>
                            </div>
                        </div>

                        {/* Image column */}
                        <div className="relative flex justify-center items-center">
                            <div className="relative rotate-[3deg] hover:rotate-[1deg] transition-transform duration-300">
                                {/* Polaroid card frame */}
                                <div className="polaroid-frame border-[3px] border-black bg-white dark:bg-slate-950 p-4 pb-10 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]">
                                    <div className="relative w-[240px] sm:w-[300px] aspect-square overflow-hidden border-2 border-black dark:border-slate-800">
                                        <Image
                                            src="https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/traaa.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvdHJhYWEuanBnIiwiaWF0IjoxNzc5MTgxMzYxLCJleHAiOjE4MTA3MTczNjF9.A9dQaP6roDYvH0mgNnsPtmD6YBqnM_JoIjxLt1WSsbc"
                                            alt="Leng Sopheaktra"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="mt-4 text-center font-sans font-bold text-lg text-slate-800 dark:text-slate-200">
                                        Sopheaktra (Dev) 📸
                                    </div>
                                </div>

                                {/* Red Pushpin overlay at the top */}
                                <DoodlePin className="absolute -top-7 left-1/2 -translate-x-1/2 w-8 h-8 z-20" />

                                {/* Floating Sticker: Open to Work */}
                                <div className="absolute -right-6 -top-4 rotate-[12deg] bg-emerald-200 dark:bg-emerald-300 text-slate-900 border-2 border-black font-bold text-xs px-3 py-1 shadow-[2px_2px_0px_#000] rounded">
                                    🚀 Open to Work
                                </div>

                                {/* Floating Sticker: DevOps automation */}
                                <div className="absolute -left-6 -bottom-4 rotate-[-8deg] bg-cyan-200 dark:bg-cyan-300 text-slate-900 border-2 border-black font-bold text-xs px-3 py-1 shadow-[2px_2px_0px_#000] rounded">
                                    💻 Full-Stack Dev
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Explore Arrow */}
                    <div className="hidden lg:flex flex-col items-center absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600 dark:text-slate-400">
                        <span className="font-sans font-bold text-sm rotate-[-3deg] mb-1">
                            Scroll down to explore!
                        </span>
                        <DoodleArrow className="w-8 h-8 rotate-[90deg] text-slate-600 dark:text-slate-400 animate-bounce" />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
            <div className="w-full md:max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Text column */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-start">
                        <div className="glass-pill">
                            <span>👋</span>
                            <span>Welcome to my portfolio</span>
                        </div>

                        <h1 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Leng Sopheaktra
                        </h1>

                        <h2 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-white/90">
                            Full-Stack Developer
                        </h2>

                        <p className="mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-white/80 max-w-2xl">
                            Full-stack developer building reliable public-data
                            platforms and internal business systems—from responsive
                            interfaces and scalable APIs to cloud deployment and
                            DevOps automation.
                        </p>

                        <div className="mt-7 md:mt-8 flex w-full flex-col sm:w-auto sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3">
                            <a
                                href="#projects"
                                className="btn-primary px-5 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
                            >
                                View My Work
                                <ArrowRight className="h-4 w-4" aria-hidden />
                            </a>
                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary justify-center px-5 py-3 rounded-xl"
                            >
                                <Download className="h-4 w-4" aria-hidden />
                                Download Résumé
                            </a>
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary justify-center px-5 py-3 rounded-xl"
                            >
                                <Github className="h-4 w-4" aria-hidden />
                                GitHub
                            </a>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-white/65">
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-violet-500 dark:text-fuchsia-400" aria-hidden />
                                Phnom Penh, Cambodia
                            </span>
                            <span className="hidden sm:inline" aria-hidden>·</span>
                            <span className="inline-flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" aria-hidden />
                                Available for opportunities
                            </span>
                            <span className="hidden sm:inline" aria-hidden>·</span>
                            <span className="inline-flex items-center gap-1.5">
                                <BriefcaseBusiness className="h-4 w-4 text-violet-500 dark:text-fuchsia-400" aria-hidden />
                                Full-stack &amp; DevOps
                            </span>
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="relative order-first lg:order-last flex justify-center items-center">
                        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
                                <Image
                                    src="https://mgdkganjyiweabxtetiv.supabase.co/storage/v1/object/sign/assets/traaa.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNzE4OTg1YS02NjQxLTQ5YWUtYjZjNi0wYTk5NGVjNjUxZDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvdHJhYWEuanBnIiwiaWF0IjoxNzc5MTgxMzYxLCJleHAiOjE4MTA3MTczNjF9.A9dQaP6roDYvH0mgNnsPtmD6YBqnM_JoIjxLt1WSsbc"
                                    alt="Leng Sopheaktra — Full-Stack Developer"
                                    fill
                                    sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, 448px"
                                    className="object-cover rounded-3xl"
                                    priority
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>

                            <FloatingBadge
                                label="🚀 Open to Work"
                                className="hidden sm:flex absolute -right-4 -top-4 md:-right-8 md:-top-6 glass-float"
                            />
                            <FloatingBadge
                                label="💻 Full-Stack Developer"
                                className="hidden sm:flex absolute -left-4 -bottom-4 md:-left-10 md:-bottom-6 glass-float"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <motion.button
                    type="button"
                    onClick={handleScrollHintClick}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: [0, -8, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center focus:outline-none"
                    aria-label="Scroll to next section"
                >
                    <span className="text-sm tracking-wide uppercase text-slate-500 dark:text-white/50">
                        Scroll to Explore
                    </span>
                    <span className="glass-circle">
                        <ChevronDown className="w-6 h-6 text-slate-700 dark:text-white/70" />
                    </span>
                </motion.button>
            </div>
        </section>
    );
};

export default HeroSection;

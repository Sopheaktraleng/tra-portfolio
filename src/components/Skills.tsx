import { SkillsData } from "@/data/constants";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const AnimeCategoryIcon = ({ title }: { title: string }) => {
    if (title.toLowerCase() === "frontend") {
        return (
            <span className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 animate-[spin_8s_linear_infinite] drop-shadow-[0_0_3px_rgba(34,211,238,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden>
                    <defs>
                        <linearGradient id="fe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="url(#fe-grad)" />
                    <circle cx="12" cy="12" r="2.5" fill="#1e1b4b" />
                    <circle cx="12" cy="12" r="0.75" fill="#22d3ee" />
                </svg>
            </span>
        );
    }
    if (title.toLowerCase() === "backend") {
        return (
            <span className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_3px_rgba(249,115,22,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" aria-hidden>
                    <defs>
                        <linearGradient id="be-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#eab308" />
                        </linearGradient>
                    </defs>
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#be-grad)" stroke="#fff" strokeWidth="0.5" />
                </svg>
            </span>
        );
    }
    if (title.toLowerCase() === "devops") {
        return (
            <span className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 animate-[pulse_1.5s_ease-in-out_infinite] drop-shadow-[0_0_3px_rgba(52,211,153,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" aria-hidden>
                    <defs>
                        <linearGradient id="do-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                    </defs>
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="url(#do-grad)" />
                    <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="url(#do-grad)" opacity="0.5" />
                </svg>
            </span>
        );
    }
    return (
        <span className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 animate-[spin_5s_linear_infinite] drop-shadow-[0_0_3px_rgba(244,114,182,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" aria-hidden>
                <defs>
                    <linearGradient id="tools-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                </defs>
                <path d="M12 2C12.5 6.5 17.5 11.5 22 12C17.5 12.5 12.5 17.5 12 22C11.5 17.5 6.5 12.5 2 12C6.5 11.5 11.5 6.5 12 2Z" fill="url(#tools-grad)" stroke="#fff" strokeWidth="0.5" />
                <circle cx="12" cy="12" r="2" fill="#1e1b4b" />
            </svg>
        </span>
    );
};

/** Returns true if the src is a data URI (base64 encoded) */
const isDataUri = (src: string) => src.startsWith("data:");

const Skills = () => {
    return (
        <section className="md:py-16 flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center max-w-3xl px-4">
                <Reveal>
                    <h2 className="section-title">
                        <span className="section-title-gradient">
                            Technical Skills
                        </span>
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="section-subtitle-lg">
                        A comprehensive overview of my technical expertise and
                        proficiency across different areas of software
                        development.
                    </p>
                </Reveal>
            </div>

            {/* Grid */}
            <div className="mt-8 grid gap-6 w-full max-w-[1100px] px-4 grid-cols-1 md:grid-cols-2">
                {SkillsData.map((category, index) => (
                    <Reveal
                        key={category.title}
                        delay={index * 0.06}
                        className="h-full"
                    >
                        <div className="group glass-card glass-card-hover p-5">
                            {/* Card header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <AnimeCategoryIcon title={category.title} />
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300 border border-violet-500/20 dark:border-violet-400/20">
                                    {category.skills.length} items
                                </span>
                            </div>

                            {/* Skills chips */}
                            <div className="flex flex-wrap gap-3 items-center">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="skill-chip"
                                        title={skill.name}
                                    >
                                        {skill.image ? (
                                            isDataUri(skill.image) ? (
                                                // Data URIs don't benefit from Next/Image optimisation
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5 rounded-sm object-contain"
                                                />
                                            ) : (
                                                <Image
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5 rounded-sm object-contain"
                                                />
                                            )
                                        ) : (
                                            <div className="h-5 w-5 rounded-sm bg-slate-200 dark:bg-white/10" />
                                        )}
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;

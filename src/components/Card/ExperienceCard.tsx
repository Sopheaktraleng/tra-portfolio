import Image from "next/image";
import type { ExperienceItem } from "@/types";

const AnimeShurikenIcon = () => (
    <span className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
        {/* Shuriken SVG with crisp glowing drop-shadow */}
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 animate-[spin_6s_linear_infinite] group-hover:animate-[spin_1.5s_linear_infinite] transition-all duration-300 drop-shadow-[0_0_3px_rgba(244,63,94,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"
            aria-hidden
        >
            <defs>
                <linearGradient id="shuriken-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" /> {/* Rose 500 */}
                    <stop offset="50%" stopColor="#d946ef" /> {/* Fuchsia 500 */}
                    <stop offset="100%" stopColor="#3b82f6" /> {/* Blue 500 */}
                </linearGradient>
            </defs>
            {/* Highly detailed stylized shuriken path: 4 curved blade points */}
            <path
                d="M12 2C12.5 6.5 17.5 11.5 22 12C17.5 12.5 12.5 17.5 12 22C11.5 17.5 6.5 12.5 2 12C6.5 11.5 11.5 6.5 12 2Z"
                fill="url(#shuriken-gradient)"
                stroke="#fff"
                strokeWidth="0.5"
            />
            {/* Center ring of shuriken */}
            <circle cx="12" cy="12" r="3" fill="#1e1b4b" stroke="url(#shuriken-gradient)" strokeWidth="0.75" />
            <circle cx="12" cy="12" r="1" fill="#fff" />
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

interface ExperienceCardProps {
    exp: ExperienceItem;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
    return (
        <div className="group w-96 glass-card glass-card-hover bg-white/60 dark:bg-white/5 p-5 focus-within:ring-2 focus-within:ring-black/10 dark:focus-within:ring-white/20 text-left">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <div className="media-tile">
                    {exp.image && (
                        <Image
                            src={exp.image}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="rounded-lg object-contain"
                        />
                    )}
                </div>

                <div className="min-w-0">
                    <p className="text-lg font-semibold leading-tight truncate text-slate-900 dark:text-white">
                        {exp.role}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-white/80">
                        {exp.company}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-white/60">
                        {exp.date}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-4 text-slate-800 dark:text-white/90">
                {exp.description}
            </p>

            <div className="divider mb-3" />

            {/* Responsibilities */}
            <p className="flex items-center gap-2 text-sm font-medium mb-2 text-slate-900 dark:text-white">
                <AnimeShurikenIcon />
                Key Responsibilities:
            </p>

            <ul className="space-y-2 text-sm">
                {exp.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                        <AnimeSparkleBullet />
                        <span className="text-slate-800 dark:text-white/90">
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;

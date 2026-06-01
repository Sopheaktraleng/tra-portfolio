import { Rocket, Zap } from "lucide-react";
import Image from "next/image";
import type { ExperienceItem } from "@/types";

interface ExperienceCardProps {
    exp: ExperienceItem;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
    return (
        <div className="w-96 glass-card glass-card-hover bg-white/60 dark:bg-white/5 p-5 focus-within:ring-2 focus-within:ring-black/10 dark:focus-within:ring-white/20">
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
                <Rocket className="w-4 h-4" aria-hidden />
                Key Responsibilities:
            </p>

            <ul className="space-y-2 text-sm">
                {exp.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                        <Zap
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-700 dark:text-white/90"
                            aria-hidden
                        />
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

import { Rocket, Zap } from "lucide-react";
import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
    exp: {
        image: string;
        role: string;
        company: string;
        date: string;
        skills: string[];
        description: string;
    };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
    return (
        <div className="w-96 glass-card glass-card-hover bg-white/60 dark:bg-white/5 p-5 focus-within:ring-2 focus-within:ring-black/10 dark:focus-within:ring-white/20">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <div className="media-tile">
                    {exp.image ? (
                        <Image
                            src={exp.image}
                            alt="Experience"
                            width={48}
                            height={48}
                            className="rounded-lg"
                        />
                    ) : null}
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

            {/* Divider */}
            <div className="divider mb-3" />

            {/* Responsibilities */}
            <p className="flex items-center gap-2 text-sm font-medium mb-2 text-slate-900 dark:text-white">
                <Rocket className="w-4 h-4" />
                Key Responsibilities:
            </p>

            <div className="space-y-2 text-sm">
                {exp.skills.map((skill: string, index: number) => (
                    <span key={index} className="flex items-start gap-2">
                        <Zap
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-700 dark:text-white/90"
                            aria-hidden="true"
                        />
                        <span className="text-slate-800 dark:text-white/90">
                            {skill}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};
export default ExperienceCard;

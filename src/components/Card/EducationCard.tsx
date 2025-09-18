import { Flame } from "lucide-react";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface EducationCardProps {
    edu: {
        img: string | StaticImageData;
        degree: string;
        school: string;
        date: string;
        highlights: string[];
        description: string;
    };
}

const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
    return (
        <div
            className="
        w-96 rounded-2xl
        border border-black/10 dark:border-white/10
        bg-white/60 dark:bg-white/5
        backdrop-blur-md
        shadow-md dark:shadow-lg
        p-5
        transition duration-300
        hover:shadow-lg dark:hover:shadow-xl
        hover:-translate-y-0.5
        focus-within:ring-2
        focus-within:ring-black/10 dark:focus-within:ring-white/20
      "
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <div
                    className="
            inline-flex items-center justify-center
            h-14 w-14 rounded-xl
            bg-white/70 dark:bg-white/10
            border border-black/10 dark:border-white/20
            shadow-inner overflow-hidden
            flex-shrink-0
          "
                >
                    <Image
                        src={edu.img}
                        alt="Education"
                        width={48}
                        height={48}
                        className="rounded-lg"
                    />
                </div>

                <div className="min-w-0">
                    <p className="text-lg font-semibold leading-tight truncate text-slate-900 dark:text-white">
                        {edu.degree}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-white/80">
                        {edu.school}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-white/60">
                        {edu.date}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-4 text-slate-800 dark:text-white/90">
                {edu.description}
            </p>

            {/* Divider */}
            <div className="h-px w-full mb-3 bg-black/10 dark:bg-white/10" />

            {/* Highlights */}
            <div className="space-y-2 text-sm">
                {edu.highlights.map((highlight: string, index: number) => (
                    <span key={index} className="flex items-start gap-2">
                        <Flame
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-700 dark:text-white/90"
                            aria-hidden="true"
                        />
                        <span className="text-slate-800 dark:text-white/90">
                            {highlight}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default EducationCard;

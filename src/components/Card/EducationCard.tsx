import { BadgeCheck, ExternalLink, Flame } from "lucide-react";
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
        certificate?: {
            url: string;
            label?: string;
        };
    };
}

const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
    const hasCertificate = Boolean(edu.certificate?.url?.trim());
    const certificateLabel = edu.certificate?.label ?? "View Certificate";

    return (
        <div
            className="
        group w-96 rounded-2xl
        border border-black/10 dark:border-white/10
        bg-gradient-to-b from-white/90 to-white/70 dark:from-white/10 dark:to-white/5
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

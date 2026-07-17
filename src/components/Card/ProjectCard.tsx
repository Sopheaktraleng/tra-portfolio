"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectItem } from "@/types";
import { useStyleMode } from "@/components/StyleModeProvider";
import { useLanguage } from "@/components/LanguageProvider";

interface ProjectCardProps {
    pro: ProjectItem;
}

const ProjectCard = ({ pro }: ProjectCardProps) => {
    const { styleMode } = useStyleMode();
    const { t } = useLanguage();

    if (styleMode === "scrapbook") {
        return (
            <div className="flex h-full w-full justify-center">
                <div className="group relative flex h-full w-full max-w-[520px] flex-col rounded-sm border-[3px] border-slate-900 bg-[#faf8f5] p-4 text-left shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-[#1a1a1c] dark:shadow-[5px_5px_0px_rgba(255,255,255,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,1)]">
                    <div className="scrapbook-washi scrapbook-washi-yellow absolute -top-3 left-1/2 z-20 -translate-x-1/2 rotate-[-1deg] px-3 py-0.5 text-[9px] tracking-[0.14em]">
                        {t("projects.project")}
                    </div>

                    <div className="relative mt-3 h-[220px] w-full rotate-[1deg] border-2 border-black bg-white p-2.5 pb-6 shadow-sm transition-transform duration-300 hover:rotate-0 dark:border-slate-800 dark:bg-slate-900">
                        <div className="relative h-full w-full overflow-hidden border border-black/10">
                            <Image
                                src={pro.image}
                                alt={pro.imageAlt}
                                fill
                                sizes="(max-width: 768px) 100vw, 520px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                    <div className="mt-4 px-1">
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-fuchsia-300">
                            {pro.category} · {pro.year}
                        </p>
                        <h3 className="font-sans text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {pro.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                            {pro.description}
                        </p>
                    </div>

                    <div className="divider my-4 bg-black/20 dark:bg-white/20" />

                    <div className="mb-4 flex flex-wrap gap-2 px-1 font-sans">
                        {pro.technologies.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="rotate-[-1deg] rounded bg-cyan-200 px-2.5 py-0.5 text-xs font-bold text-slate-900 shadow-[1px_1px_0px_#000] dark:bg-cyan-300"
                            >
                                #{tech}
                            </span>
                        ))}
                    </div>

                    {pro.note && (
                        <p className="mb-4 px-1 text-xs font-bold text-slate-600 dark:text-slate-400">
                            ✦ {pro.note}
                        </p>
                    )}

                    {(pro.liveUrl || pro.sourceUrl) && (
                        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2 px-1">
                            {pro.liveUrl && (
                                <a
                                    href={pro.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded border-2 border-black bg-yellow-300 px-4 py-1.5 text-xs font-bold text-slate-950 shadow-[3px_3px_0px_#000] transition-all hover:bg-yellow-400 active:translate-y-[1px] active:shadow-[1px_1px_0px_#000]"
                                >
                                    {pro.liveLabel ?? t("projects.live")}
                                    <ExternalLink className="h-4 w-4" aria-hidden />
                                </a>
                            )}

                            {pro.sourceUrl && (
                                <a
                                    href={pro.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded border-2 border-black bg-white px-3 py-1.5 text-xs font-bold text-slate-950 shadow-[3px_3px_0px_#000] transition-all hover:bg-slate-50 active:translate-y-[1px] active:shadow-[1px_1px_0px_#000]"
                                >
                                    <Github className="h-4 w-4" aria-hidden />
                                    {t("projects.source")}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full w-full justify-center">
            <div className="glass-card glass-card-hover-strong group relative min-h-[480px] w-full max-w-[520px] dark:shadow-xl">
                <div className="glass-card flex h-full w-full flex-col overflow-hidden dark:shadow-xl">
                    <div className="relative h-[240px] w-full overflow-hidden">
                        <Image
                            src={pro.image}
                            alt={pro.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 520px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                        <div className="absolute inset-x-4 bottom-3">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                                {pro.category} · {pro.year}
                            </p>
                            <h3 className="text-lg font-semibold tracking-tight text-white drop-shadow md:text-xl">
                                {pro.title}
                            </h3>
                        </div>
                    </div>

                    <div className="flex grow flex-col gap-4 p-5">
                        <p className="line-clamp-3 text-sm leading-relaxed text-slate-700 dark:text-white/85">
                            {pro.description}
                        </p>

                        <div className="divider" />

                        <div className="flex flex-wrap gap-2">
                            {pro.technologies.slice(0, 5).map((tech) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {pro.note && (
                            <p className="text-xs text-slate-500 dark:text-white/55">
                                {pro.note}
                            </p>
                        )}

                        {(pro.liveUrl || pro.sourceUrl) && (
                            <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2">
                                {pro.liveUrl && (
                                    <a
                                        href={pro.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary rounded-lg px-3 py-2 text-sm font-medium shadow-md hover:shadow-lg"
                                    >
                                        {pro.liveLabel ?? t("projects.live")}
                                        <ExternalLink className="h-4 w-4" aria-hidden />
                                    </a>
                                )}

                                {pro.sourceUrl && (
                                    <a
                                        href={pro.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                    >
                                        <Github className="h-4 w-4" aria-hidden />
                                        {t("projects.source")}
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 opacity-0 blur-2xl transition duration-500 group-hover:opacity-20 dark:group-hover:opacity-35" />
            </div>
        </div>
    );
};

export default ProjectCard;

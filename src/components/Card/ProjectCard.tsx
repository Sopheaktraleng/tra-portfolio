"use client";

import Image from "next/image";
import { Github, MonitorPlay } from "lucide-react";
import type { ProjectItem } from "@/types";
import { useStyleMode } from "@/components/StyleModeProvider";

interface ProjectCardProps {
    pro: ProjectItem;
}

const ProjectCard = ({ pro }: ProjectCardProps) => {
    const { styleMode } = useStyleMode();

    if (styleMode === "scrapbook") {
        return (
            <div className="flex justify-center items-center select-none">
                {/* Scrapbook brutalist project card */}
                <div className="group relative w-[350px] md:w-full max-w-[500px] border-[3px] border-slate-900 dark:border-white bg-[#faf8f5] dark:bg-[#1a1a1c] p-4 text-left shadow-[5px_5px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_rgba(255,255,255,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,1)] transition-all rounded-sm">
                    {/* Top tape */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 scrapbook-washi scrapbook-washi-yellow text-[10px] scale-95 py-1 px-4 rotate-[-1deg] z-20">
                        📁 Project
                    </div>

                    {/* Polaroid-style Image frame */}
                    <div className="relative w-full h-[220px] bg-white dark:bg-slate-900 border-2 border-black dark:border-slate-800 p-2.5 pb-6 shadow-sm mt-3 rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                        <div className="relative w-full h-full overflow-hidden border border-black/10">
                            {pro.image ? (
                                <Image
                                    src={pro.image}
                                    alt={pro.title}
                                    fill
                                    sizes="(max-width: 768px) 350px, 520px"
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full grid place-items-center bg-slate-100 text-slate-500 font-bold text-sm">
                                    No Preview 📸
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Title */}
                    <div className="mt-4 px-1">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                            {pro.title}
                        </h3>
                        <p className="text-sm mt-2 text-slate-800 dark:text-slate-200 leading-relaxed font-sans font-medium line-clamp-3">
                            {pro.description}
                        </p>
                    </div>

                    <div className="divider bg-black/20 dark:bg-white/20 my-4" />

                    {/* Tech stack marker highlights */}
                    <div className="flex flex-wrap gap-2 mb-4 px-1 font-sans">
                        {pro.technologies.map((tech) => (
                            <span key={tech} className="text-xs font-bold text-slate-900 dark:text-slate-900 bg-cyan-200 dark:bg-cyan-300 py-0.5 px-2.5 rounded shadow-[1px_1px_0px_#000] rotate-[-1deg]">
                                #{tech}
                            </span>
                        ))}
                    </div>

                    {/* Actions wobbly taped buttons */}
                    <div className="flex items-center gap-3 px-1 mt-auto">
                        <a
                            href={pro.links}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded bg-white hover:bg-slate-50 text-slate-950 font-bold border-2 border-black px-4 py-1.5 text-xs shadow-[3px_3px_0px_#000] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all"
                            aria-label={`View source code for ${pro.title}`}
                        >
                            <Github className="w-4 h-4" aria-hidden />
                            Source Code
                        </a>

                        <a
                            href={pro.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded bg-yellow-300 hover:bg-yellow-400 text-slate-950 font-bold border-2 border-black px-4 py-1.5 text-xs shadow-[3px_3px_0px_#000] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all"
                            aria-label={`View live demo for ${pro.title}`}
                        >
                            <MonitorPlay className="w-4 h-4" aria-hidden />
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center">
            <div className="group relative w-[350px] md:w-full max-w-[520px] h-[460px] glass-card dark:shadow-xl glass-card-hover-strong">
                <div className="h-full w-full glass-card dark:shadow-xl flex flex-col overflow-hidden">
                    {/* Image */}
                    <div className="relative h-[240px] w-full overflow-hidden">
                        {pro.image ? (
                            <Image
                                src={pro.image}
                                alt={pro.title}
                                fill
                                sizes="(max-width: 768px) 350px, 520px"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            />
                        ) : (
                            <div className="w-full h-full grid place-items-center bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 text-slate-600 dark:text-white/60 text-sm">
                                No preview
                            </div>
                        )}

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <h3 className="absolute bottom-3 left-4 text-lg md:text-xl font-semibold tracking-tight text-white drop-shadow">
                            {pro.title}
                        </h3>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col gap-4 p-5 grow">
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-white/85 line-clamp-3">
                            {pro.description}
                        </p>

                        <div className="divider" />

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {pro.technologies.map((tech) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <a
                                href={pro.links}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                                aria-label={`View source code for ${pro.title}`}
                            >
                                <Github className="w-4 h-4" aria-hidden />
                                Code
                            </a>

                            <a
                                href={pro.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary rounded-lg px-3 py-2 text-sm font-medium shadow-md hover:shadow-lg"
                                aria-label={`View live demo for ${pro.title}`}
                            >
                                <MonitorPlay className="w-4 h-4" aria-hidden />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 blur-2xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-35 transition duration-500" />
            </div>
        </div>
    );
};

export default ProjectCard;

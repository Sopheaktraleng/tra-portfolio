"use client";

import { projectsData } from "@/data/constants";
import ProjectCard from "./Card/ProjectCard";
import Reveal from "@/components/Reveal";
import { useStyleMode } from "@/components/StyleModeProvider";
import { DoodleUnderline } from "@/components/Doodles";
import { cn } from "@/lib/cn";

const Projects = () => {
    const { styleMode } = useStyleMode();

    if (styleMode === "scrapbook") {
        return (
            <section className="py-16 relative">
                {/* Header */}
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <Reveal>
                        <div className="relative inline-block mb-3">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                                Featured Projects
                            </h2>
                            <DoodleUnderline className="w-full h-3 text-violet-500 dark:text-fuchsia-400 mt-1" />
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="font-sans font-medium text-lg mx-auto max-w-3xl text-slate-700 dark:text-slate-300 mt-2">
                            A selection of projects I&apos;ve built — from internal
                            management systems to full-stack web applications.
                        </p>
                    </Reveal>
                </div>

                <div className="flex justify-center items-center pt-10">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center max-w-6xl px-6">
                        {projectsData.map((pro, index) => {
                            const rotateDeg = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]";
                            return (
                                <li
                                    key={pro.id}
                                    className="flex justify-center items-center"
                                >
                                    <Reveal className={cn("w-full", rotateDeg)}>
                                        <ProjectCard pro={pro} />
                                    </Reveal>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <Reveal>
                    <h2 className="section-title">
                        <span className="section-title-gradient">
                            Featured Projects
                        </span>
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="section-subtitle-lg mx-auto max-w-3xl">
                        A selection of projects I&apos;ve built — from internal
                        management systems to full-stack web applications.
                    </p>
                </Reveal>
            </div>

            <div className="flex justify-center items-center pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center max-w-6xl px-6">
                    {projectsData.map((pro) => (
                        <li
                            key={pro.id}
                            className="flex justify-center items-center"
                        >
                            <Reveal className="w-full">
                                <ProjectCard pro={pro} />
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;

"use client";

import { getProjectsData } from "@/data/projects";
import ProjectCard from "./Card/ProjectCard";
import Reveal from "@/components/Reveal";
import { useStyleMode } from "@/components/StyleModeProvider";
import { DoodleUnderline } from "@/components/Doodles";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/components/LanguageProvider";

const Projects = () => {
    const { styleMode } = useStyleMode();
    const { language, t } = useLanguage();
    const projectsData = getProjectsData(language);

    if (styleMode === "scrapbook") {
        return (
            <section className="py-16 relative">
                {/* Header */}
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <Reveal>
                        <div className="relative inline-block mb-3">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                                {t("projects.title")}
                            </h2>
                            <DoodleUnderline className="w-full h-3 text-violet-500 dark:text-fuchsia-400 mt-1" />
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="font-sans font-medium text-lg mx-auto max-w-3xl text-slate-700 dark:text-slate-300 mt-2">
                            {t("projects.subtitle")}
                        </p>
                    </Reveal>
                </div>

                <div className="flex justify-center items-center pt-10">
                    <ul className="grid w-full max-w-6xl grid-cols-1 place-items-stretch gap-8 px-6 md:grid-cols-2">
                        {projectsData.map((pro, index) => {
                            const rotateDeg = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]";
                            return (
                                <li
                                    key={pro.id}
                                    className="flex w-full justify-center items-stretch"
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
                            {t("projects.title")}
                        </span>
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="section-subtitle-lg mx-auto max-w-3xl">
                        {t("projects.subtitle")}
                    </p>
                </Reveal>
            </div>

            <div className="flex justify-center items-center pt-6">
                <ul className="grid w-full max-w-6xl grid-cols-1 place-items-stretch gap-6 px-6 md:grid-cols-2">
                    {projectsData.map((pro) => (
                        <li
                            key={pro.id}
                            className="flex w-full justify-center items-stretch"
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

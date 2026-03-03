import React from "react";
import Image, { StaticImageData } from "next/image";
import { Github, MonitorPlay } from "lucide-react";

interface ProjectCardProps {
    pro: {
        title: string;
        description: string;
        image: string | StaticImageData;
        links: string;
        technologies: string[];
        demo: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ pro }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="group relative w-[350px] md:w-full max-w-[520px] h-[460px] glass-card dark:shadow-xl glass-card-hover-strong">
                <div className="h-full w-full glass-card dark:shadow-xl flex flex-col overflow-hidden">
                    <div className="relative h-[240px] w-full overflow-hidden">
                        {pro.image ? (
                            <Image
                                src={pro.image}
                                alt={pro.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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

                    <div className="flex flex-col gap-4 p-5 grow">
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-white/85 line-clamp-3">
                            {pro.description}
                        </p>

                        <div className="divider" />

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {pro.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="tech-badge"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href={pro.links}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>

                            <a
                                href={pro.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary rounded-lg px-3 py-2 text-sm font-medium shadow-md hover:shadow-lg"
                            >
                                <MonitorPlay className="w-4 h-4" />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0 blur-2xl opacity-0 group-hover:opacity-30 transition" />
            </div>
        </div>
    );
};

export default ProjectCard;

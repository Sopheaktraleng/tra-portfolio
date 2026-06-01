import Image from "next/image";
import { Github, MonitorPlay } from "lucide-react";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
    pro: ProjectItem;
}

const ProjectCard = ({ pro }: ProjectCardProps) => {
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

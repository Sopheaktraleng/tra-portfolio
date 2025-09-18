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
            {/* Gradient border shell */}
            <div
                className="
    group relative
    w-[350px] md:w-full max-w-[520px] h-[520px]
    rounded-2xl
    border border-black/10 dark:border-white/10
    bg-white/70 dark:bg-white/5 backdrop-blur-md
    shadow-md dark:shadow-xl
    transition
    hover:shadow-lg dark:hover:shadow-2xl
  "
            >
                {/* Card body */}
                <div
                    className="
            h-full w-full rounded-2xl
            border border-black/10 dark:border-white/10
            bg-white/70 dark:bg-white/5 backdrop-blur-md
            shadow-md dark:shadow-xl
            flex flex-col overflow-hidden
          "
                >
                    {/* Media header */}
                    <div className="relative h-[240px] w-full overflow-hidden">
                        {pro.image ? (
                            <Image
                                src={pro.image}
                                alt={pro.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-[1.04]
                "
                            />
                        ) : (
                            <div className="w-full h-full grid place-items-center bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 text-slate-600 dark:text-white/60 text-sm">
                                No preview
                            </div>
                        )}

                        {/* Fade + title overlay */}
                        <div
                            className="
                pointer-events-none absolute inset-x-0 bottom-0
                h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent
              "
                        />
                        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white drop-shadow">
                                {pro.title}
                            </h3>

                            {/* Quick links (show on hover for drama) */}
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a
                                    href={pro.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5
                    bg-white/90 hover:bg-white text-slate-900
                    text-xs font-semibold shadow-sm
                  "
                                >
                                    <Github className="w-4 h-4" />
                                    Code
                                </a>
                                <a
                                    href={pro.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5
                    bg-violet-600/90 hover:bg-violet-600
                    text-white text-xs font-semibold shadow-sm
                  "
                                >
                                    <MonitorPlay className="w-4 h-4" />
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-5 grow">
                        {/* Description */}
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-white/85 line-clamp-3">
                            {pro.description}
                        </p>

                        {/* Image URL hint (only if src is string) */}
                        {typeof pro.image === "string" && (
                            <p className="text-xs text-slate-500 dark:text-white/50 break-all">
                                {pro.image}
                            </p>
                        )}

                        {/* Divider */}
                        <div className="h-px w-full bg-black/10 dark:bg-white/10" />

                        {/* Tech chips */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {pro.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="
                    inline-flex items-center rounded-full
                    px-3 py-1 text-xs font-semibold
                    bg-gradient-to-b from-white/90 to-white/70
                    dark:from-white/10 dark:to-white/5
                    text-slate-800 dark:text-white/90
                    border border-black/10 dark:border-white/10
                    shadow-sm
                  "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Footer buttons (always visible) */}
                        <div className="flex items-center gap-3">
                            <a
                                href={pro.links}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex items-center gap-2 rounded-lg px-3 py-2
                  border border-black/10 dark:border-white/15
                  text-slate-900 dark:text-white
                  bg-white/70 dark:bg-white/5
                  hover:bg-white/90 dark:hover:bg-white/10
                  text-sm font-medium
                  shadow-sm transition
                "
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>

                            <a
                                href={pro.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex items-center gap-2 rounded-lg px-3 py-2
                  text-white bg-violet-600 hover:bg-violet-500
                  text-sm font-medium shadow-sm transition
                "
                            >
                                <MonitorPlay className="w-4 h-4" />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Glow on hover */}
                <div
                    className="
            pointer-events-none absolute -inset-2 rounded-3xl
            bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0
            blur-2xl opacity-0 group-hover:opacity-30
            transition
          "
                />
            </div>
        </div>
    );
};

export default ProjectCard;

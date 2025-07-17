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
            <div className="w-[350px] md:w-full max-w-[450px] h-[450px] flex flex-col p-4 border border-[#33353F] rounded-lg shadow-md">
                {" "}
                <Image
                    src={pro.image}
                    alt={pro.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-[200px] rounded-xl object-cover"
                />
                <div className="flex flex-col justify-between flex-grow mt-4 gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-xl font-bold">{pro.title}</h3>
                        <p className="text-sm line-clamp-3">
                            {pro.description}
                        </p>
                        {typeof pro.image === "string" && (
                            <p className="text-xs text-gray-400 break-all">
                                {pro.image}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-2 font-bold mt-auto">
                        {pro.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-purple-500 hover:bg-purple-600 text-white text-xs px-2 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-500 "
                            href={pro.links}
                        >
                            <Github className="w-5 h-5 inline-block" />
                            <span className="p-1 font-semibold">Code</span>
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-500 "
                            href={pro.demo}
                        >
                            <MonitorPlay className="w-5 h-5 inline-block" />
                            <span className="p-1 font-semibold">Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

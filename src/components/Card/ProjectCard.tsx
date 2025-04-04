import React from "react";
import Image, { StaticImageData } from "next/image";
interface ProjectCardProps {
    pro: {
        title: string;
        description: string;
        image: string | { twitterpic: StaticImageData };
        links: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ pro }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[380px] md:w-[100%] p-3 md:p-5 border border-[#33353F] rounded-lg h-auto">
                <Image
                    src={
                        typeof pro.image === "string"
                            ? pro.image
                            : pro.image.twitterpic
                    }
                    alt="Project"
                    width={500}
                    height={500}
                    className="w-auto h-auto rounded-xl" // Ensure the image scales appropriately
                />

                <div className="flex flex-col gap-4 mb-4 text-start">
                    <span className="flex-shrink-0 mt-2"></span>
                    <span>
                        <p className="text-xl font-bold">{pro.title}</p>
                        <p className="text-sm sm:w-[300px] md:w-[400px]">
                            {pro.description}
                        </p>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                                href={pro.links}
                            >
                                {pro.links}
                            </a>
                        </p>
                        {typeof pro.image === "string" && (
                            <p className="text-xs">{pro.image}</p>
                        )}
                    </span>
                    <div className="flex flex-wrap gap-2 font-bold">
                        <span className="bg-purple-500 hover:bg-purple-600 text-white font-medium p-2 rounded-lg w-fit">
                            Vue Js
                        </span>
                        <span className="bg-purple-500 hover:bg-purple-600 text-white font-medium p-2 rounded-lg w-fit">
                            Express Js
                        </span>
                        <span className="bg-purple-500 hover:bg-purple-600 text-white font-medium p-2 rounded-lg w-fit">
                            Docker
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

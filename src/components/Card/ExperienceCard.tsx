import { Rocket, Zap } from "lucide-react";
import React from "react";
import Image from "next/image";
interface ExperienceCardProps {
    exp: {
        image: string;
        role: string;
        company: string;
        date: string;
        skills: string[];
        description: string;
    };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
    return (
        <div className="w-96 p-4 border border-[#33353F] rounded-lg">
            <div className="flex flex-row gap-4 mb-4">
                <span className="flex-shrink-0 mt-2">
                    <Image
                        src={exp.image}
                        alt="Experience"
                        width={50}
                        height={50}
                    />
                </span>
                <span>
                    <p className="flex gap-2 text-bold text-xl">{exp.role}</p>
                    <p className="text-sm ">{exp.company}</p>
                    <p className="text-xs ">{exp.date}</p>
                </span>
            </div>
            <p className="">{exp.description}</p>
            <p className="flex gap-2">
                <Rocket className="w-4 h-4 mt-1" />
                Key Responsibilities:
            </p>
            <div className="text-sm">
                {exp.skills.map((skill: string, index: number) => (
                    <span key={index} className="flex  gap-2">
                        <Zap className="w-3 h-3 flex-shrink-0 mt-2 " />
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;

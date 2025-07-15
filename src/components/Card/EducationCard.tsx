import { Flame } from "lucide-react";
import React from "react";
import Image, { StaticImageData } from "next/image";
interface EducationCardProps {
    edu: {
        img: string | StaticImageData;
        degree: string;
        school: string;
        date: string;
        highlights: string[];
        description: string;
    };
}

const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
    return (
        <div className="w-96 p-4 border border-[#33353F] rounded-lg">
            <div className="flex flex-row gap-4 mb-4">
                <span>
                    <Image
                        src={edu.img}
                        alt="Education"
                        width={50}
                        height={50}
                    />
                </span>
                <span>
                    <p className="flex gap-2 text-bold text-xl">{edu.degree}</p>
                    <p className="text-sm ">{edu.school}</p>
                    <p className="text-xs ">{edu.date}</p>
                </span>
            </div>
            <p>{edu.description}</p>
            <div className="text-sm">
                {edu.highlights.map((highlight: string, index: number) => (
                    <span key={index} className="flex  gap-2">
                        <Flame className="w-3 h-3 flex-shrink-0 mt-2 " />
                        {highlight}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default EducationCard;
